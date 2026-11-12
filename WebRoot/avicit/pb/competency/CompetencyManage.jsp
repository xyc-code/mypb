<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="<%=ViewUtil.getRequestPath(request)%>"><title>书记胜任力</title><link rel="stylesheet" href="static/pb-modern/competency/competency.css?v=20261111-compact1"></head>
<body class="pb-competency">
<script>if(window.self!==window.top)document.body.classList.add('pb-competency-embedded');</script>
<svg width="0" height="0" aria-hidden="true" style="position:absolute"><defs>
<symbol id="i-shield" viewBox="0 0 24 24"><path d="m12 2 8 3v6c0 5-8 10-8 10S4 16 4 11V5z"/><path d="m8 11 3 3 5-6"/></symbol>
<symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></symbol>
<symbol id="i-edit" viewBox="0 0 24 24"><path d="M13 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 3 5 5-10 10-5 1 1-5Z"/><path d="m14 5 5 5"/></symbol>
<symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M2 20v-2a7 7 0 0 1 14 0v2M16 5a3 3 0 0 1 0 6M18 14a6 6 0 0 1 4 6"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 3v17h17M8 15l4-5 4 2 5-7"/></symbol>
<symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="m8 13-1 9 5-3 5 3-1-9"/></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 11h18M7 15h3M14 15h3"/></symbol>
<symbol id="i-download" viewBox="0 0 24 24"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></symbol>
<symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></symbol>
<symbol id="i-save" viewBox="0 0 24 24"><path d="M4 3h13l4 4v14H3V3zM7 3v7h10V3M7 21v-7h10v7"/></symbol>
<symbol id="i-print" viewBox="0 0 24 24"><path d="M7 8V3h10v5M7 17H3V9h18v8h-4M7 14h10v7H7zM17 11h1"/></symbol>
<symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/></symbol>
<symbol id="i-list" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h1m3 0h4M8 12h1m3 0h4M8 16h1m3 0h4"/></symbol>
<symbol id="i-upload" viewBox="0 0 24 24"><path d="M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6"/></symbol>
<symbol id="i-alert" viewBox="0 0 24 24"><path d="m12 3 10 18H2zM12 9v5M12 17h.01"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="i-refresh" viewBox="0 0 24 24"><path d="M20 7v5h-5M4 17v-5h5M5 8a8 8 0 0 1 13-3l2 3M4 16l2 3a8 8 0 0 0 13-3"/></symbol>
<symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></symbol>
</defs></svg>
<aside class="sidebar">
  <div class="brand"><div class="brand-mark"><svg class="icon"><use href="#i-shield"/></svg></div><div><div class="brand-name">书记胜任力</div><div class="brand-sub">COMPETENCY INSIGHT</div></div></div>
  <div class="nav-label">测评工作台</div>
  <nav class="nav" aria-label="主导航">
    <button class="active" data-page="overview" aria-current="page"><svg class="icon"><use href="#i-grid"/></svg>队伍总览</button>
    <button data-page="entry"><svg class="icon"><use href="#i-edit"/></svg>成绩录入</button>
    <button data-page="profile"><svg class="icon"><use href="#i-user"/></svg>个人画像</button>
  </nav>
  <div class="side-note"><strong>三懂 · 三会 · 三过硬</strong>以测评看能力，以分析促提升</div>
</aside>
<div class="shell">
  <header class="topbar"><div class="breadcrumb">党建工作 <span>/</span> 书记胜任力 <span>/</span> <strong id="crumb">队伍总览</strong></div></header>
  <main>
    <div class="batch-strip"><div class="batch-details"><span class="batch-icon" aria-hidden="true"><svg class="icon"><use href="#i-calendar"/></svg></span><div><div class="batch-name"><select id="batch-select" aria-label="选择测评批次"></select><button class="text-link" id="batch-add"><svg class="icon"><use href="#i-plus"/></svg>新建批次</button><button class="text-link" id="batch-edit"><svg class="icon"><use href="#i-edit"/></svg>修改</button><button class="text-link" id="roster-refresh"><svg class="icon"><use href="#i-refresh"/></svg>刷新人员</button></div><div class="small" id="batch-meta"></div></div></div><div class="batch-toolbar" id="batch-toolbar"><div class="actions" id="page-actions"></div></div></div><div id="page-error" class="page-error" role="alert" hidden></div><section id="overview" aria-label="队伍总览">
      <div class="metrics" id="metrics"></div>
      <div class="analysis-grid">
        <article class="card"><div class="card-heading"><div><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-chart"/></svg></span>队伍能力画像</h2><p class="card-caption">九项能力 · 识别队伍优势与共性短板</p></div><div class="segmented" aria-label="图表数据"><button class="active" data-curve="mean" aria-pressed="true">均值</button><button data-curve="max" aria-pressed="false">最高</button><button data-curve="min" aria-pressed="false">最低</button></div></div><div class="radar-wrap" id="team-radar"></div><div class="chart-legend"><span><i class="legend-line"></i><span id="curve-name">队伍均值</span></span><span><i class="legend-line ref90"></i>90 分参考线</span><span><i class="legend-line ref95"></i>95 分参考线</span></div><div class="chart-footnote"><svg class="icon"><use href="#i-info"/></svg><span id="team-chart-note"></span></div></article>
        <article class="card"><div class="card-heading"><div><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-layers"/></svg></span>三大板块表现</h2><p class="card-caption">从知识、实践与履职素养看整体表现</p></div></div><div class="structure"><div id="team-blocks"></div><div class="insight" id="team-insight"></div></div><div class="distribution"><div class="distribution-title">评价等次分布 <small id="distribution-count"></small></div><div id="distribution"></div></div></article>
      </div>
      <article class="card"><div class="table-toolbar"><div class="table-title"><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-list"/></svg></span>书记测评明细</h2><span class="count" id="table-count">加载中</span></div><div class="filters"><label class="search"><svg class="icon"><use href="#i-search"/></svg><input id="person-search" placeholder="姓名 / 工号 / 党组织" aria-label="姓名 / 工号 / 党组织"></label><select id="level-filter" aria-label="筛选评价等次"><option value="">全部等次</option><option>胜任</option><option>基本胜任</option><option>不胜任</option><option>待录齐</option></select></div></div><div class="table-scroll"><table><thead><tr><th>姓名 / 党组织</th><th>理论考试</th><th>业务考核</th><th>面试成绩</th><th>综合得分</th><th>评价等次</th><th>最低分维度</th><th class="print-hide">操作</th></tr></thead><tbody id="people-table"></tbody></table></div><div class="table-footer"><span id="table-summary"></span><span id="overview-pager"></span></div></article>
    </section>
    <section id="entry" hidden aria-label="成绩录入">
      <div class="entry-note"><svg class="icon"><use href="#i-info"/></svg><span>五项成绩统一按百分制录入。可从 Excel 复制连续的成绩区域，选中下方单元格后粘贴。</span></div>
      <article class="card"><div class="table-toolbar"><div class="table-title"><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-edit"/></svg></span>测评成绩表</h2><span class="count" id="entry-count"></span></div><span class="card-caption">综合分 = 理论 × 30% + 业务 × 40% + 面试 × 30%</span></div><div class="table-scroll"><table class="entry-table"><thead><tr><th>姓名 / 党组织</th><th>理论考试</th><th>业务考核</th><th>面试成绩</th><th>满意度测评</th><th>特色活动</th><th>综合得分</th></tr></thead><tbody id="entry-table"></tbody></table></div><div class="table-footer"><span id="entry-summary"></span><span id="entry-pager"></span></div></article>
      <div class="entry-bottom"><span id="save-status" role="status">修改成绩后点击保存，队伍分析与个人画像将同步更新。</span><div class="actions"><button class="button" id="cancel-entry">取消修改</button><button class="button primary" id="save-entry"><svg class="icon"><use href="#i-save"/></svg>保存成绩</button></div></div>
    </section>
    <section id="profile" hidden aria-label="个人画像">
      <div class="profile-banner" id="profile-banner"></div>
      <div class="analysis-grid"><article class="card"><div class="card-heading"><div><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-chart"/></svg></span>九项能力画像</h2><p class="card-caption">看见长板，也看见下一步的提升空间</p></div></div><div class="radar-wrap" id="personal-radar"></div><div class="chart-legend"><span><i class="legend-line"></i>个人得分</span><span><i class="legend-line ref90"></i>90 分参考线</span><span><i class="legend-line ref95"></i>95 分参考线</span></div><div class="chart-footnote"><svg class="icon"><use href="#i-info"/></svg><span id="personal-note"></span></div></article><article class="card"><div class="card-heading"><div><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-target"/></svg></span>能力解读</h2><p class="card-caption">从分数到具体的改进方向</p></div></div><div class="profile-analysis" id="personal-analysis"></div></article></div>
      <article class="card"><div class="card-heading"><div><h2><span class="heading-icon" aria-hidden="true"><svg class="icon"><use href="#i-award"/></svg></span>下一步提升建议</h2><p class="card-caption" id="recommendation-caption"></p></div><span class="badge normal">行动参考</span></div><div class="recommendations" id="recommendations"></div></article>
    </section>
    <footer class="footer"><details><summary>查看评分口径</summary><p>五项成绩齐全后，综合分＝理论×30%＋业务×40%＋面试×30%，四舍五入保留两位后定等。95分及以上胜任，85至不足95分基本胜任，低于85分不胜任。九维画像根据五项成绩映射生成，仅反映当前批次。兼职按人员与党组织分别测评。</p></details><span>三懂 · 三会 · 三过硬</span></footer>
  </main>
</div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<div id="comp-modal" class="modal-shade" hidden><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><div class="modal-head"><div class="modal-title-group"><span class="modal-mark" id="modal-mark" aria-hidden="true"></span><h2 id="modal-title"></h2></div><button class="modal-close" id="modal-close" aria-label="关闭"><svg class="icon"><use href="#i-close"/></svg></button></div><div id="modal-body"></div></section></div><input id="import-file" type="file" accept=".xlsx,.xls" hidden><script src="static/pb-modern/competency/competency.js?v=20261111-layout2"></script></body></html>
