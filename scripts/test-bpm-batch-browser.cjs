// Real PB session/filter, Controller, BPM engine, DM8, jQuery, jqGrid and layer.
// Authenticates an existing local fixture user; no business responses are mocked.
// Never run against intranet. Fixture JSPs/instances are removed afterwards.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const assert = require('assert/strict');
const {chromium} = require(require.resolve('playwright', {paths:[process.env.PB_PLAYWRIGHT_MODULES || 'C:/Users/xyc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules']}));
const root=path.resolve(__dirname,'..'), token=crypto.randomBytes(8).toString('hex');
const bridge=path.join(root,'WebRoot/login/bpm-batch-'+token+'.jsp');
const fixturePage=path.join(root,'WebRoot/login/bpm-batch-page-'+token+'.jsp');
const base='http://127.0.0.1:8080/pb/', endpoint=base+'platform/pb/bpm/batchComplete/operation';
const bridgeUrl=base+'login/'+path.basename(bridge)+'?token='+token;
const output=path.join(root,'output/bpm-batch-complete');
const checks=[],evidence=[],errors=[],routes=[];
function check(value,label){assert(value,label);checks.push(label);console.log('PASS',label);}
async function run(){
 fs.mkdirSync(output,{recursive:true});
 fs.writeFileSync(bridge,fs.readFileSync(path.join(__dirname,'BpmBatchRuntimeCheck.jsp.template'),'utf8').replaceAll('__TOKEN__',token));
 fs.writeFileSync(fixturePage,fs.readFileSync(path.join(__dirname,'BpmBatchRuntimePage.jsp.template'),'utf8').replaceAll('__TOKEN__',token).replaceAll('__BRIDGE__',path.basename(bridge)));
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 const context=await browser.newContext({viewport:{width:1366,height:900}}),page=await context.newPage();
 page.on('pageerror',error=>errors.push(error.message));
 page.on('response',response=>{if(response.url()===endpoint)routes.push({url:response.url(),method:response.request().method(),status:response.status()});});
 async function api(action,data={}){
  const response=await context.request.post(bridgeUrl,{form:{action,...data},timeout:60000}),text=await response.text();
  let value;try{value=JSON.parse(text);}catch(e){throw new Error('Fixture '+action+' HTTP '+response.status()+': '+text.slice(0,600));}
  assert(value.ok,action+': '+JSON.stringify(value));return value;
 }
 const state=async record=>{const value=await api('state',{process:record.process});delete value.ok;return value;};
 const active=s=>s.tasks.filter(t=>!t.END_&&t.TASK_FINISHED_==='0');
 const ended=s=>s.process.length===1&&s.process[0].STATE_==='ended'&&s.process[0].END_&&s.process[0].ENDACTIVITY_==='end1'&&active(s).length===0;
 async function deploy(kind){
  const key='pbbatchtest'+token+kind,node=kind==='othernode'?'task3':'task4';
  let transitions='<transition name="to end1" to="end1"/>';
  if(kind==='multiple')transitions+='<transition name="to end2" to="end2"/>';
  if(kind==='noexit')transitions='';
  if(kind==='next')transitions='<transition name="to task5" to="task5"/>';
  if(kind==='branchend')transitions='<transition name="to end1" to="task5"/><transition name="approved" to="finishApproved"/>';
  if(kind==='noendbranch')transitions='<transition name="notify" to="task5"/><transition name="review" to="task6"/>';
  const fail=kind==='fail'?'<on event="end"><event-listener class="BpmBatchFixtureFailure"/></on>':'';
  const user=kind==='otheruser'?'JSBG_TEST_OFFICE':'JSBG_TEST_START';
  const xml='<process name="'+key+'" key="'+key+'" globalformid="JSBG_AWARD" useNewDesigner="true" isUflow="1">'+
   '<meta name="processInstanceTitle">本地批量验收</meta><start name="start1"><transition name="to '+node+'" to="'+node+'"/></start>'+
   '<task name="'+node+'" alias="批量验收" assignee="'+user+'" dealtype="3" taskFormId="JSBG_AWARD"><meta name="isNeedIdea">no</meta>'+fail+transitions+'</task>'+
   (['next','branchend','noendbranch'].includes(kind)?'<task name="task5" alias="后续阅知" candidate-users="testActors" dealtype="3"><meta name="isNeedIdea">no</meta><meta name="userSelectType">auto</meta><meta name="isAutoGetUser">yes</meta><actors id="testActors"><actor type="user"><id>JSBG_TEST_START</id><name>本地测试人</name></actor></actors><transition name="to end1" to="end1"/></task>':'')+
   (kind==='noendbranch'?'<task name="task6"><transition name="finish" to="end1"/></task>':'')+
   (kind==='branchend'?'<end name="finishApproved"/>':'')+
   '<end name="end1"/>'+(kind==='multiple'?'<end name="end2"/>':'')+'</process>';
  return(await api('deploy',{key,xml})).definition;
 }
 const start=async definition=>api('start',{definition});
 async function post(ids){
  const response=await context.request.post(endpoint,{form:{ids},maxRedirects:0});
  assert.equal(response.status(),200,'Actual public route must return HTTP 200');
  assert((response.headers()['content-type']||'').includes('json'),'Actual route must return JSON');return response.json();
 }
 async function openGrid(){
  await page.goto(base+'login/'+path.basename(fixturePage)+'?token='+token,{waitUntil:'networkidle'});
  await page.locator('#batch-grid[data-load-count]').waitFor();
  check(await page.locator('#pbBpmBatchCompleteButton').count()===1,'native jqGrid toolbar attaches one batch button');
 }
 async function browserComplete(records){
  await openGrid();for(const record of records)await page.locator('[id="jqg_batch-grid_'+record.formId+'"]').check();
  await page.locator('#pbBpmBatchCompleteButton').click();await page.locator('.layui-layer-dialog .layui-layer-btn0').waitFor();
  const responsePromise=page.waitForResponse(response=>response.url()===endpoint&&response.request().method()==='POST');
  await page.locator('.layui-layer-dialog .layui-layer-btn0').click();const response=await responsePromise;
  assert.equal(response.status(),200);return response.json();
 }
 let cleanup;
 try{
  const anonymous=await browser.newContext(),denied=await anonymous.request.post(endpoint,{form:{ids:''},maxRedirects:0});
  check(denied.status()===302||denied.status()===403,'existing anonymous filter remains effective');await anonymous.close();
  await api('session');const definitions={};
  for(const kind of ['single','othernode','multiple','noexit','next','otheruser','fail','branchend','noendbranch'])definitions[kind]=await deploy(kind);
  const one=await start(definitions.single),before=await state(one);
  check(active(before).length===1&&active(before)[0].TASK_NAME_==='task4','fixture has real pending task4');
  check(before.definitionBlobCount>=2,'real deployment contains XML plus non-XML BLOB resources');
  const single=await browserComplete([one]),after=await state(one);
  check(single.flag==='success'&&single.completed===1&&ended(after),'single browser completion matches ended process and task history');
  await page.waitForFunction(()=>Number(document.querySelector('#batch-grid').getAttribute('data-load-count'))>=2);
  check(await page.locator('[id="'+one.formId+'"]').count()===0,'success reload removes completed pending row');
  await page.screenshot({path:path.join(output,'browser-single-success.png'),fullPage:true});
  evidence.push({scenario:'single',before,result:single,after});
  const two=[await start(definitions.single),await start(definitions.single)];
  const batch=await browserComplete(two),batchStates=await Promise.all(two.map(state));
  check(batch.flag==='success'&&batch.completed===2&&batchStates.every(ended),'two selected browser rows both end with completed=2');
  evidence.push({scenario:'multipleSelection',result:batch,states:batchStates});
  const repeatBefore=await state(two[0]),repeat=await post(two[0].formId);
  check(repeat.flag==='failure'&&JSON.stringify(await state(two[0]))===JSON.stringify(repeatBefore),'retry does not complete an ended record again');
  const empty=await post('');check(empty.flag==='failure'&&empty.errorMsg.includes('选择'),'empty backend selection returns a business error');
  await openGrid();const requestCount=routes.length;await page.locator('#pbBpmBatchCompleteButton').click();
  await page.getByText('请先选择记录',{exact:true}).waitFor();check(routes.length===requestCount,'empty browser selection sends no POST');
  const good=await start(definitions.single),wrong=await start(definitions.othernode),mixedBefore=await Promise.all([good,wrong].map(state));
  const mixed=await post(good.formId+','+wrong.formId);
  check(mixed.flag==='failure'&&JSON.stringify(await Promise.all([good,wrong].map(state)))===JSON.stringify(mixedBefore),'mixed non-task4 selection leaves both records unchanged');
  evidence.push({scenario:'mixed',before:mixedBefore,result:mixed,after:await Promise.all([good,wrong].map(state))});
  for(const kind of ['multiple','noexit','otheruser','noendbranch']){
   const record=await start(definitions[kind]),original=await state(record);
   if(kind==='otheruser')await api('session',{user:'JSBG_TEST_OFFICE'});
   const result=await post(record.formId);
   if(kind==='otheruser')await api('session');
   check(result.flag==='failure'&&JSON.stringify(await state(record))===JSON.stringify(original),kind+' rejection leaves the real process unchanged');
   evidence.push({scenario:kind,result,before:original,after:await state(record)});
  }
  const next=await start(definitions.next),nextResult=await post(next.formId),nextState=await state(next);
  evidence.push({scenario:'nextTask',result:nextResult,after:nextState});
  check(nextResult.flag==='success'&&nextResult.completed===1&&nextState.process[0].STATE_==='active'&&active(nextState).length===1&&active(nextState)[0].TASK_NAME_==='task5','unique next task advances to task5 without force-ending the process');
  const directEnded=s=>s.process[0].STATE_==='ended'&&s.process[0].END_&&s.process[0].ENDACTIVITY_==='finishApproved'&&active(s).length===0&&s.tasks.every(t=>t.TASK_NAME_!=='task5')&&s.tasks.some(t=>t.TASK_NAME_==='task4'&&t.OUTCOME_==='approved');
  for(const count of [1,2]){
   const records=[];for(let i=0;i<count;i++)records.push(await start(definitions.branchend));
   const originals=await Promise.all(records.map(state)),result=await browserComplete(records),states=await Promise.all(records.map(state));
   check(result.flag==='success'&&result.completed===count&&states.every(directEnded),'branched task4 directly ends '+count+' selected records without creating notification tasks');
   evidence.push({scenario:'directEndBranch'+count,before:originals,result,after:states});
   await page.waitForFunction(()=>Number(document.querySelector('#batch-grid').getAttribute('data-load-count'))>=2);
   check((await Promise.all(records.map(r=>page.locator('[id="'+r.formId+'"]').count()))).every(n=>n===0),'direct-end branch reload removes '+count+' completed records');
  }
  const duplicate=await start(definitions.single),deduped=await post(duplicate.formId+','+duplicate.formId);
  check(deduped.flag==='success'&&deduped.completed===1&&ended(await state(duplicate)),'duplicate selected IDs complete only once');
  const partial=[await start(definitions.single),await start(definitions.fail),await start(definitions.single)];
  const partialResult=await browserComplete(partial),partialStates=await Promise.all(partial.map(state));
  check(partialResult.flag==='failure'&&partialResult.completed===1&&ended(partialStates[0])&&active(partialStates[1]).length===1&&active(partialStates[2]).length===1,'real engine failure reports completed=1 and leaves failed/later tasks pending');
  evidence.push({scenario:'partial',result:partialResult,after:partialStates});
  await page.waitForFunction(()=>Number(document.querySelector('#batch-grid').getAttribute('data-load-count'))>=2,{},{timeout:5000});
  check(await page.locator('[id="'+partial[0].formId+'"]').count()===0,'partial completion reload removes the row already processed');
  check(errors.length===0,'no JavaScript page errors');
  check(routes.length>=3&&routes.every(r=>r.status===200&&r.method==='POST'&&r.url===endpoint),'all browser batch requests use the intended public POST route');
  await page.screenshot({path:path.join(output,'browser-final.png'),fullPage:true});
 }finally{
  try{cleanup=await api('cleanup');check(cleanup.remainingProcesses===0&&cleanup.remainingDeployments===0,'all tracked test processes and deployments cleaned');}
  finally{
   const sourceHashes={};for(const file of ['src/avicit/pb/bpmbatchcomplete/controller/BpmBatchCompleteController.java','src/avicit/pb/bpmbatchcomplete/service/BpmBatchCompleteService.java','WebRoot/static/pb-modern/bpm-batch-complete/bpm-batch-complete.js'])sourceHashes[file]=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');
   fs.writeFileSync(path.join(output,'runtime-results.json'),JSON.stringify({time:new Date().toISOString(),passed:checks.length,checks,evidence,routes,errors,cleanup,sourceHashes},null,2));
   await browser.close();fs.unlinkSync(bridge);fs.unlinkSync(fixturePage);
  }
 }
}
run().catch(error=>{console.error(error);process.exitCode=1;});
