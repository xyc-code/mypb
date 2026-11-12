(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const root = document.querySelector('.pb-competency');
  if (root.classList.contains('pb-competency-embedded')) $('batch-toolbar').prepend(root.querySelector('.nav'));
  const apiRoot = 'platform/avicit/pb/competency/';
  const dims = ['懂政策','懂党建','懂理论','会思想工作','会解决实际问题','会带队伍','政治过硬','本领过硬','作风过硬'];
  const fields = ['THEORY_SCORE','BUSINESS_SCORE','INTERVIEW_SCORE','SATISFACTION_SCORE','ACTIVITY_SCORE'];
  const labels = ['理论考试','业务考核','面试成绩','满意度测评','特色活动'];
  const names = {overview:'队伍总览',entry:'成绩录入',profile:'个人画像'};
  let batches = [], batchId = '', page = 'overview', curve = 'mean', summary = null, record = null;
  let rows = [], total = 0, current = 1, listSequence = 0, profileSequence = 0, toastTimer, saving = false;
  let modalFocus = null, modalLocked = false, confirmResolve = null, importing = false, reportFormat = 'docx';
  const size = 20, drafts = new Map();
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = n => n == null ? '—' : Number(n).toFixed(2);
  const icon = n => `<svg class="icon" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const badge = r => `<span class="badge ${r.level === '胜任' ? 'good' : r.level === '基本胜任' ? 'normal' : r.level === '不胜任' ? 'weak' : ''}">${esc(r.level)}</span>`;
  const empty = text => `<div class="empty">${esc(text)}</div>`;
  function error(e) { $('page-error').textContent = e.message || String(e); $('page-error').hidden = false; }
  function clearError() { $('page-error').hidden = true; }
  function toast(s) { $('toast').innerHTML = icon('check') + `<span>${esc(s)}</span>`; $('toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3500); }
  async function api(path, data, get = false) {
    const query = data instanceof FormData ? data : new URLSearchParams(data || {});
    const response = await fetch(apiRoot + path + (get && query.toString() ? '?' + query : ''), {method:get ? 'GET' : 'POST', credentials:'same-origin', cache:'no-store', body:get ? undefined : query});
    let json; try { json = await response.json(); } catch (_) { throw new Error('服务器未返回有效数据，请检查登录状态或稍后重试。'); }
    if (!response.ok || !json.ok) throw new Error(json.message || '操作失败'); return json;
  }
  async function canDiscard() {
    if (!drafts.size) return true;
    modal('放弃未保存的修改？', `<p class="dialog-copy">还有 <strong>${drafts.size} 条</strong>成绩尚未保存，放弃后将恢复为已保存的数据。</p><div class="modal-actions"><button class="button" data-dismiss-modal autofocus>继续编辑</button><button class="button warning" id="discard-confirm">放弃修改</button></div>`, {size:'compact', tone:'warning', mark:'alert'});
    return new Promise(resolve => { confirmResolve=resolve; $('discard-confirm').onclick=()=>closeModal(true); });
  }
  function modal(title, html, options = {}) {
    if ($('comp-modal').hidden) modalFocus=document.activeElement;
    modalLocked=!!options.locked;
    const panel=$('comp-modal').querySelector('.modal');
    panel.dataset.size=options.size||'standard'; panel.dataset.tone=options.tone||'info'; panel.setAttribute('aria-busy',String(modalLocked));
    $('modal-title').textContent=title; $('modal-mark').innerHTML=icon(options.mark||'info'); $('modal-body').innerHTML=html;
    $('modal-close').disabled=modalLocked; $('comp-modal').hidden=false; root.classList.add('modal-open');
    root.querySelector('.shell').setAttribute('inert',''); root.querySelector('.sidebar').setAttribute('inert','');
    (panel.querySelector('[autofocus]') || (modalLocked?panel:$('modal-close'))).focus();
  }
  function closeModal(accepted = false) {
    if (modalLocked) return;
    $('comp-modal').hidden=true; root.classList.remove('modal-open');
    root.querySelector('.shell').removeAttribute('inert'); root.querySelector('.sidebar').removeAttribute('inert');
    if (modalFocus && modalFocus.isConnected && !modalFocus.disabled) modalFocus.focus();
    const resolve=confirmResolve; confirmResolve=null; if (resolve) resolve(accepted);
  }
  async function buttonTask(button, label, action) {
    if (button.dataset.busy) return;
    const original=button.innerHTML, disabled=button.disabled;
    button.dataset.busy='true'; button.disabled=true; button.setAttribute('aria-busy','true'); button.innerHTML=`<span class="spinner" aria-hidden="true"></span>${esc(label)}`;
    try { return await action(); }
    finally { button.innerHTML=original; button.disabled=disabled; delete button.dataset.busy; button.removeAttribute('aria-busy'); }
  }
  function importPrompt() {
    const batch=batches.find(b=>b.ID===batchId);
    modal('导入测评成绩', `<p class="dialog-copy">选择 Excel 文件，更新本批次的测评成绩。</p><div class="import-batch">${icon('calendar')}<span>${esc(batch.BATCH_NAME)}</span></div><div class="import-rules"><p>${icon('check')}仅更新匹配到的人员与党组织记录</p><p>${icon('alert')}五项成绩将覆盖原值，空白成绩会清空原值</p></div><div class="modal-actions"><button class="button" data-dismiss-modal>暂不导入</button><button class="button primary" id="import-choose" autofocus>${icon('upload')}选择 Excel 文件</button></div>`, {size:'compact',mark:'upload'});
    $('import-choose').onclick=()=>{closeModal();$('import-file').click();};
  }
  function importResult(result, refreshIssue) {
    const failed=result.failureCount>0;
    const message=failed?(result.successCount?'部分记录需要核对，成功记录已保存。':'本次没有成功导入的记录，请核对下方原因后重试。'):(result.successCount?'成绩已更新，队伍分析与个人画像已同步。':'文件中没有可导入的成绩，请检查文件内容。');
    modal('成绩导入结果', `<p class="dialog-copy">${message}</p><div class="import-counts"><div class="import-count success">${icon('check')}<span>成功 <strong>${result.successCount}</strong> 条</span></div><div class="import-count ${failed?'failure':''}">${icon('alert')}<span>失败 <strong>${result.failureCount}</strong> 条</span></div></div>${refreshIssue?'<p class="modal-error">成绩已处理，页面刷新失败，请关闭弹窗后刷新查看。</p>':''}<div class="import-result-list"><table><thead><tr><th>Excel 行号</th><th>结果</th><th>说明</th></tr></thead><tbody>${result.results.map(r=>`<tr><td>第 ${r.row} 行</td><td><span class="result-badge ${r.success?'success':'failure'}">${r.success?'成功':'失败'}</span></td><td class="result-message">${esc(r.success?'五项成绩已更新':r.message)}</td></tr>`).join('')}</tbody></table></div><div class="modal-actions"><button class="button primary" data-dismiss-modal autofocus>我知道了</button></div>`, {tone:failed?'warning':'success',mark:failed?'alert':'check'});
  }
  function blockMarkup(values) {
    if (!values || !values.length) return empty('五项成绩齐全后展示板块分析');
    return ['三懂','三会','三过硬'].map((name,i) => `<div class="block-row" data-block="${i}"><div class="block-label"><span>${name}<span style="color:#a1adba;font-size:10px;margin-left:8px">${['知识基础','履职实践','素质作风'][i]}</span></span><b>${fmt(values[i])}</b></div><div class="track"><span style="width:${Number(values[i])}%"></span></div></div>`).join('');
  }
  function radar(values, label) {
    if (!values || values.length !== 9) return empty('暂无完整成绩，录齐五项后生成能力画像');
    const cx=300, cy=188, radius=130;
    const point=(i,r) => { const a=(i*40-90)*Math.PI/180; return [cx+Math.cos(a)*r,cy+Math.sin(a)*r]; };
    const polygon=r => dims.map((_,i) => point(i,r).join(',')).join(' ');
    const grid=[20,40,60,80,100].reverse().map(n => `<polygon points="${polygon(radius*n/100)}" fill="${n===100?'#f9fbfe':'none'}" stroke="#e5ecf4"/>`).join('');
    const axes=dims.map((_,i) => {const p=point(i,radius);return `<line x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}" stroke="#e5ecf4"/>`;}).join('');
    const refs=[[90,'#c3a36c'],[95,'#8da6c2']].map(([n,c]) => `<polygon points="${polygon(radius*n/100)}" fill="none" stroke="${c}" stroke-dasharray="3 4"/>`).join('');
    const data=values.map((v,i)=>point(i,radius*v/100).join(',')).join(' ');
    const text=dims.map((n,i)=>{const p=point(i,164), anchor=Math.abs(p[0]-cx)<5?'middle':p[0]>cx?'start':'end';return `<text x="${p[0]}" y="${p[1]-2}" text-anchor="${anchor}">${n}<tspan x="${p[0]}" dy="17" style="font-size:12px;fill:#3f79d3">${fmt(values[i])}</tspan></text>`;}).join('');
    return `<svg class="radar" viewBox="0 0 600 390" role="img" aria-label="${esc(label)}">${grid}${axes}${refs}<polygon points="${data}" fill="#3478f6" fill-opacity=".13" stroke="#3478f6" stroke-width="2.4"/>${text}</svg>`;
  }
  function renderCurve() {
    const keys={mean:'dimensions',max:'maxDimensions',min:'minDimensions'}, text={mean:'队伍均值',max:'逐维度最高分',min:'逐维度最低分'};
    $('team-radar').innerHTML=radar(summary && summary[keys[curve]],text[curve]); $('curve-name').textContent=text[curve];
  }
  function renderOverview() {
    const s=summary || {people:0,records:0,completed:0,counts:[0,0,0],blocks:[],weakDimensions:[]};
    const metrics=[['书记人数',s.people,'人',`去重人数 · 测评记录 ${s.records} 条`,'users'],['综合平均分',fmt(s.mean),'分',s.completed ? `成绩区间 ${fmt(s.min)} — ${fmt(s.max)}` : '暂无完整成绩','chart'],['已完成测评',s.completed,'条',`共 ${s.records} 条记录 · 未完成 ${s.records-s.completed} 条`,'award'],['需重点提升',s.counts[2],'条','综合得分低于85分','target']];
    $('metrics').innerHTML=metrics.map(m=>`<div class="metric"><div class="metric-label">${m[0]}<span class="metric-icon">${icon(m[4])}</span></div><div class="metric-value">${m[1]}<small>${m[2]}</small></div><div class="metric-foot">${m[3]}</div></div>`).join('');
    renderCurve(); $('team-blocks').innerHTML=blockMarkup(s.blocks);
    $('team-insight').innerHTML=s.completed ? `<h3>${s.weakDimensions.length ? '共性短板优先关注' : '九项能力表现均衡'}</h3><p>${s.weakDimensions.length ? s.weakDimensions.map(i=>`${dims[i]} ${fmt(s.dimensions[i])}分`).join('、') : '九项能力均值均达到90分，建议持续关注个体差异。'}</p>` : '<h3>等待成绩录齐</h3><p>缺项记录不参与均分、等次分布和雷达统计。</p>';
    $('distribution-count').textContent=`完整记录 ${s.completed} 条`;
    $('distribution').innerHTML=s.completed ? `<div class="distribution-bar">${s.counts.map((n,i)=>`<span style="width:${n/s.completed*100}%;background:${['#26b48d','#5e97fb','#f0b24d'][i]}"></span>`).join('')}</div><div class="distribution-labels">${['胜任','基本胜任','不胜任'].map((n,i)=>`<span><i class="dot" style="background:${['#26b48d','#5e97fb','#f0b24d'][i]}"></i>${n} ${s.counts[i]}条</span>`).join('')}</div>` : empty('暂无等次分布');
    $('team-chart-note').textContent=s.completed ? '仅统计当前批次可见范围内五项齐全的记录；兼职在不同党组织分别统计。' : '请先录入成绩，五项齐全后自动生成分析。';
  }
  function nameCell(r) {return `<div class="name-cell"><span class="name-initial">${esc(r.MEMBER_NAME.slice(0,1))}</span><div>${esc(r.MEMBER_NAME)}<div style="font-size:10px;color:#9aa6b3;margin-top:1px">${esc(r.PARTY_NAME)}</div></div></div>`;}
  function pagination(target) {$(target).innerHTML=`第 ${current} / ${Math.max(1,Math.ceil(total/size))} 页<button class="pager" data-step="-1" ${current<=1?'disabled':''}>上一页</button><button class="pager" data-step="1" ${current*size>=total?'disabled':''}>下一页</button>`;}
  function renderList() {
    $('people-table').innerHTML=rows.map(r=>`<tr><td>${nameCell(r)}</td>${fields.slice(0,3).map(f=>`<td class="number">${fmt(r[f])}</td>`).join('')}<td class="number">${fmt(r.total)}</td><td>${badge(r)}</td><td class="weak-text">${r.complete?dims[r.weakIndex]:'待录齐'}</td><td><button class="text-link" data-person="${esc(r.ID)}">查看画像 →</button></td></tr>`).join('') || '<tr><td colspan="8">'+empty(batchId?'当前条件下没有测评记录':'请先新建测评批次')+'</td></tr>';
    $('table-count').textContent=`${total} 条`; $('table-summary').textContent=`显示 ${rows.length} 条，共 ${total} 条测评记录`; pagination('overview-pager');
    $('entry-count').textContent=`${total} 条`;
    $('entry-table').innerHTML=rows.map((r,i)=>{const d=drafts.get(r.ID);return `<tr class="${d?'pending':''}"><td>${nameCell(r)}</td>${fields.map((f,j)=>`<td><input class="score-input" type="text" inputmode="decimal" value="${esc(d?d[f]:r[f])}" data-row="${i}" data-col="${j}" aria-label="${esc(r.MEMBER_NAME+' '+labels[j])}"></td>`).join('')}<td class="number" id="draft-total-${i}">${d?'待保存':fmt(r.total)}</td></tr>`;}).join('') || '<tr><td colspan="7">'+empty(batchId?'当前批次没有可见人员，请检查任职名单或刷新人员':'请先新建测评批次')+'</td></tr>';
    $('entry-summary').textContent=`本页 ${rows.length} 条，共 ${total} 条`; pagination('entry-pager'); status();
  }
  function status() {$('save-entry').disabled=saving||!drafts.size;$('cancel-entry').disabled=saving||!drafts.size;$('save-status').classList.toggle('has-drafts',drafts.size>0);$('save-status').textContent=drafts.size?`${drafts.size} 条记录尚未保存；保存成功后更新综合分与画像。`:'修改成绩后请保存，允许暂存缺项；仅五项齐全后生成综合分。';}
  async function loadList() {
    const seq=++listSequence;
    if(!batchId){rows=[];total=0;renderList();return;}
    const data=await api('scores',{batchId,page:current,size,keyword:page==='overview'?$('person-search').value.trim():'',level:page==='overview'?$('level-filter').value:''},true);
    if(seq!==listSequence)return;rows=data.rows;total=data.total;renderList();
  }
  async function loadSummary() {const id=batchId, next=id?(await api('overview',{batchId:id},true)).summary:null;if(id!==batchId)return;summary=next;renderOverview();renderActions();}
  async function loadProfile(id) {
    const seq=++profileSequence;
    if(!id){record=null;renderProfile();renderActions();return;}
    const result=await api('detail',{id},true);if(seq!==profileSequence||page!=='profile'||result.record.BATCH_ID!==batchId)return;record=result.record;renderProfile();renderActions();
  }
  function renderProfile() {
    const r=record;
    if(!r){$('profile-banner').innerHTML=empty('请选择测评人员');['personal-radar','personal-analysis','recommendations'].forEach(id=>$(id).innerHTML='');$('personal-note').textContent='';$('recommendation-caption').textContent='';return;}
    $('profile-banner').innerHTML=`<div class="profile-person"><div class="profile-monogram">${esc(r.MEMBER_NAME.slice(0,1))}</div><div><h2>${esc(r.MEMBER_NAME)}</h2><p>${esc(r.PARTY_NAME)} · ${esc(r.POST_NAME)}</p></div></div><div class="profile-result"><div><div class="score-label">综合得分</div><div class="score">${fmt(r.total)}<small>/ 100</small></div></div>${badge(r)}</div>`;
    $('personal-radar').innerHTML=radar(r.dimensions,'个人能力画像');
    if(!r.complete){$('personal-analysis').innerHTML=empty('五项成绩尚未录齐，暂不生成能力分析');$('recommendations').innerHTML=empty('录齐五项后生成对应建议');$('personal-note').textContent='0分是有效成绩，空白表示尚未录入。';$('recommendation-caption').textContent='';return;}
    $('personal-note').textContent=`九项能力由五项人工成绩映射生成，与${batches.find(b=>b.ID===batchId).BATCH_NAME}对应。`;
    $('personal-analysis').innerHTML=`<h3>三大板块</h3>${blockMarkup(r.blocks)}<h3 style="margin-top:22px">相对优势 · 得分最高三项</h3><div class="ability-chips">${r.advantages.map(i=>`<span class="ability-chip">${dims[i]}<b>${fmt(r.dimensions[i])}</b></span>`).join('')}</div><div class="focus-card"><strong>优先关注：${dims[r.weakIndex]} · ${fmt(r.dimensions[r.weakIndex])}分</strong><p>本次相对最低项，同分按既定九维顺序选取。</p></div>`;
    $('recommendation-caption').textContent=`围绕「${dims[r.weakIndex]}」提供行动参考`;
    $('recommendations').innerHTML=r.suggestions.map((s,i)=>`<div class="recommendation"><span class="step-no">0${i+1}</span><div><h3>${['明确提升方向','结合工作实践','跟踪改进成效'][i]}</h3><p>${esc(s)}</p></div></div>`).join('');
  }
  function renderActions() {
    const disabled=batchId?'':'disabled';
    const reports=`<select id="report-format" aria-label="报告格式"><option value="docx" ${reportFormat==='docx'?'selected':''}>Word 报告</option><option value="pdf" ${reportFormat==='pdf'?'selected':''}>PDF 报告</option></select><button class="button" id="report-download" ${!batchId||(page==='profile'?!(record&&record.complete):!(summary&&summary.completed))?'disabled':''}>${icon('download')}下载${page==='profile'?'个人':'队伍'}报告</button>`;
    if(page==='overview')$('page-actions').innerHTML=reports+`<button class="button primary" data-page="entry">${icon('edit')}录入成绩</button>`;
    else if(page==='entry')$('page-actions').innerHTML=`<button class="button" id="template-download" ${disabled}>${icon('download')}下载模板</button><button class="button soft" id="import-open" ${disabled}>${icon('upload')}导入成绩</button><button class="button" id="ledger-download" ${disabled}>${icon('download')}导出台账</button>`;
    else $('page-actions').innerHTML=`<select id="person-select" aria-label="选择测评人员"><option value="">请选择人员与党组织</option>${(summary?summary.peopleOptions:[]).map(p=>`<option value="${esc(p.ID)}" ${record&&record.ID===p.ID?'selected':''}>${esc(p.MEMBER_NAME+' · '+p.PARTY_NAME+(p.complete?'':'（待录齐）'))}</option>`).join('')}</select>`+reports;
    $('batch-edit').disabled=!batchId;$('roster-refresh').disabled=!batchId;
  }
  async function navigate(next,id) {
    clearError();page=next;current=1;
    ['overview','entry','profile'].forEach(p=>$(p).hidden=p!==page);
    root.querySelectorAll('.nav [data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===page);if(b.dataset.page===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    $('crumb').textContent=names[page];renderActions();
    if(page==='profile')await loadProfile(id||(record&&record.ID)||(summary&&summary.peopleOptions[0]&&summary.peopleOptions[0].ID));else await loadList();
  }
  async function loadBatches(selected) {
    batches=(await api('batches',{},true)).batches;batchId=selected||batchId||((batches[0]||{}).ID)||'';
    $('batch-select').innerHTML=batches.map(b=>`<option value="${esc(b.ID)}">${esc(b.BATCH_NAME)}</option>`).join('')||'<option value="">暂无批次，请新建</option>';$('batch-select').value=batchId;
    const b=batches.find(b=>b.ID===batchId);$('batch-meta').textContent=b?`${b.EVAL_YEAR}年度 · 测评日期 ${b.EVAL_DATE} · 五项最终成绩人工录入`:'新建批次后按有效书记任职生成人员名单';
    await loadSummary();await navigate(page);
  }
  function editBatch(edit) {
    const b=edit?batches.find(x=>x.ID===batchId):{}, today=new Date(), date=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    modal(edit?'修改批次信息':'新建测评批次',`<form id="batch-form"><p class="dialog-copy">${edit?'调整批次信息，已录入的成绩会完整保留。':'设置本次测评，保存后生成当前可见的书记名单。'}</p><label>批次名称<input name="name" maxlength="200" required placeholder="例如：2026 年度书记测评" value="${esc(b.BATCH_NAME||'')}" autofocus></label><div class="form-grid"><label>测评年份<input name="year" type="number" min="1000" max="9999" required value="${b.EVAL_YEAR||today.getFullYear()}"></label><label>测评日期<input name="date" type="date" required value="${b.EVAL_DATE||date}"></label></div><div id="batch-error" class="modal-error" role="alert"></div><div class="modal-actions"><button class="button" type="button" data-dismiss-modal>取消</button><button class="button primary" type="submit">${icon('check')}保存批次</button></div></form>`, {size:'compact',mark:'calendar'});
    $('batch-form').onsubmit=async e=>{
      e.preventDefault();const button=e.target.querySelector('button[type="submit"]');
      await buttonTask(button,'正在保存',async()=>{
        modalLocked=true;$('comp-modal').querySelector('.modal').setAttribute('aria-busy','true');$('modal-close').disabled=true;e.target.querySelector('[data-dismiss-modal]').disabled=true;
        let result;
        try{const data=Object.fromEntries(new FormData(e.target));if(edit){data.id=b.ID;data.version=b.VERSION;}result=await api('batch/save',data);}
        catch(ex){$('batch-error').textContent=ex.message;}
        finally{modalLocked=false;$('comp-modal').querySelector('.modal').setAttribute('aria-busy','false');$('modal-close').disabled=false;e.target.querySelector('[data-dismiss-modal]').disabled=false;}
        if(result){closeModal();if(!edit){drafts.clear();record=null;}await loadBatches(result.batch.ID).catch(error);toast('批次已保存');}
      });
    };
  }
  function updateDraft(input) {
    const i=Number(input.dataset.row), r=rows[i], values=Array.from(root.querySelectorAll(`.score-input[data-row="${i}"]`));
    let valid=true;const data={id:r.ID,version:drafts.has(r.ID)?drafts.get(r.ID).version:r.VERSION};values.forEach((el,j)=>{const raw=el.value.trim(),good=raw===''||(/^\d+(\.\d{1,2})?$/.test(raw)&&Number(raw)<=100);el.classList.toggle('invalid',!good);el.setAttribute('aria-invalid',String(!good));valid=valid&&good;data[fields[j]]=raw;});
    const changed=fields.some(f=>data[f]!==String(r[f]==null?'':r[f]));if(changed){drafts.set(r.ID,data);}else drafts.delete(r.ID);
    input.closest('tr').classList.toggle('pending',changed);$('draft-total-'+i).textContent=changed?'待保存':fmt(r.total);status();return valid;
  }
  async function save() {
    if(saving)return;if(!drafts.size){toast('没有需要保存的修改');return;}
    for(const d of drafts.values())for(const f of fields)if(d[f]!==''&&(!/^\d+(\.\d{1,2})?$/.test(d[f])||Number(d[f])>100)){throw new Error('请填写0—100之间的数字，最多两位小数，或留空暂存。');}
    saving=true;root.setAttribute('inert','');clearError();$('save-entry').innerHTML='<span class="spinner" aria-hidden="true"></span>正在保存';$('save-entry').setAttribute('aria-busy','true');status();
    try{const result=await api('scores/save',{batchId,rows:JSON.stringify(Array.from(drafts.values()))});drafts.clear();await loadSummary();await loadList();toast(`已保存 ${result.saved} 条成绩`);}finally{saving=false;root.removeAttribute('inert');$('save-entry').innerHTML=icon('save')+'保存成绩';$('save-entry').removeAttribute('aria-busy');status();}
  }
  async function download(path,params) {
    const response=await fetch(apiRoot+path+'?'+new URLSearchParams(params),{credentials:'same-origin',cache:'no-store'});
    if(!response.ok||!(response.headers.get('Content-Disposition')||'').includes('attachment')){let message='下载失败，请检查登录状态';try{message=(await response.json()).message||message;}catch(_){}throw new Error(message);}
    const blob=await response.blob(),url=URL.createObjectURL(blob),a=document.createElement('a'),name=(response.headers.get('Content-Disposition')||'').match(/filename\*=UTF-8''([^;]+)/i);a.href=url;a.download=name?decodeURIComponent(name[1]):'测评文件';root.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
  }
  $('batch-select').addEventListener('change',async e=>{const next=e.target.value;e.target.value=batchId;if(!await canDiscard())return;drafts.clear();record=null;batchId=next;await loadBatches().catch(error);});
  $('batch-add').onclick=async()=>{if(await canDiscard())editBatch(false);};$('batch-edit').onclick=()=>editBatch(true);
  $('roster-refresh').onclick=async()=>{clearError();try{await buttonTask($('roster-refresh'),'正在刷新',async()=>{const result=await api('refresh',{batchId});await loadSummary();if(page!=='profile')await loadList();toast(`补入 ${result.added} 条新增任职记录，原有成绩与任职快照保留。`);});}catch(e){error(e);}};
  $('modal-close').onclick=()=>closeModal();
  $('comp-modal').onclick=e=>{if(e.target===$('comp-modal'))closeModal();};
  root.addEventListener('keydown',e=>{
    if($('comp-modal').hidden)return;
    if(e.key==='Escape'){e.preventDefault();closeModal();}
    if(e.key==='Tab'){
      const focusable=Array.from($('comp-modal').querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),[tabindex="0"]')).filter(el=>el.getClientRects().length);
      if(!focusable.length){e.preventDefault();return;}
      const first=focusable[0],last=focusable[focusable.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  $('save-entry').onclick=()=>save().catch(error);
  $('cancel-entry').onclick=async()=>{if(await canDiscard()){drafts.clear();clearError();root.setAttribute('inert','');try{await loadList();}catch(e){error(e);}finally{root.removeAttribute('inert');}}};
  $('entry-table').addEventListener('input',e=>{if(e.target.matches('.score-input'))updateDraft(e.target);});
  $('entry-table').addEventListener('paste',e=>{
    if(!e.target.matches('.score-input'))return;const text=e.clipboardData.getData('text/plain');if(!/[\t\n]/.test(text))return;e.preventDefault();
    const startRow=Number(e.target.dataset.row),startCol=Number(e.target.dataset.col),matrix=text.replace(/\r/g,'').replace(/\n$/,'').split('\n').map(line=>line.split('\t'));
    if(startRow+matrix.length>rows.length||matrix.some(line=>startCol+line.length>5)){toast('粘贴区域超出当前页的五项成绩，请调整复制区域或翻页后粘贴。');return;}
    matrix.forEach((line,di)=>line.forEach((value,dj)=>{const input=root.querySelector(`.score-input[data-row="${startRow+di}"][data-col="${startCol+dj}"]`);input.value=value.trim();updateDraft(input);}));toast('已粘贴，请核对后保存。');
  });
  let searchTimer;$('person-search').oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{current=1;loadList().catch(error);},250);};$('level-filter').onchange=()=>{current=1;loadList().catch(error);};
  root.addEventListener('change',e=>{if(e.target.id==='person-select')loadProfile(e.target.value).catch(error);if(e.target.id==='report-format')reportFormat=e.target.value;});
  root.addEventListener('click',async e=>{
    const b=e.target.closest('button');if(!b||b.disabled)return;
    try{
      if(b.hasAttribute('data-dismiss-modal'))closeModal();
      else if(b.dataset.page)await navigate(b.dataset.page);
      else if(b.dataset.person)await navigate('profile',b.dataset.person);
      else if(b.dataset.step){current+=Number(b.dataset.step);await loadList();}
      else if(b.dataset.curve){curve=b.dataset.curve;root.querySelectorAll('[data-curve]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});renderCurve();}
      else if(b.id==='template-download')await buttonTask(b,'正在下载',()=>download('template',{batchId}));
      else if(b.id==='ledger-download')await buttonTask(b,'正在导出',()=>download('ledger',{batchId}));
      else if(b.id==='report-download')await buttonTask(b,'正在生成',()=>download('report',{batchId,id:page==='profile'&&record?record.ID:'',format:reportFormat}));
      else if(b.id==='import-open'){if(drafts.size){throw new Error('请先保存或取消表格中的修改，再导入文件。');}importPrompt();}
    }catch(ex){error(ex);}
  });
  $('import-file').onchange=async e=>{
    const file=e.target.files[0];if(!file||importing)return;importing=true;clearError();
    const form=new FormData();form.append('batchId',batchId);form.append('file',file);e.target.value='';
    modal('正在导入成绩',`<div class="import-progress"><span class="spinner" aria-hidden="true"></span><strong>正在逐行校验并保存</strong><p>${esc(file.name)}</p><span>请稍候，处理完成后会展示导入结果。</span></div>`,{size:'compact',mark:'upload',locked:true});
    try{
      const result=(await api('import',form)).result;let refreshIssue=false;
      try{await loadSummary();await loadList();}catch(_){refreshIssue=true;}
      importResult(result,refreshIssue);
    }catch(ex){modal('导入未完成',`<p class="dialog-copy">${esc(ex.message)}</p><p class="card-caption">请核对文件后重新选择导入；如处理结果不确定，请先刷新成绩表查看。</p><div class="modal-actions"><button class="button primary" data-dismiss-modal autofocus>我知道了</button></div>`,{size:'compact',tone:'warning',mark:'alert'});}
    finally{importing=false;}
  };
  window.addEventListener('beforeunload',e=>{if(drafts.size){e.preventDefault();e.returnValue='';}});
  loadBatches().catch(error);
})();
