<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<% String importlibs = "common"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <title>一支部一特色年度总结</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
    <link rel="stylesheet" href="static/pb-modern/yzbyts/yzbyts-summary.css?v=20261021r5">
</head>
<body>
<main class="pb-yzbyts-summary-page" data-view="list">
    <div class="summary-shell">
        <header class="summary-header">
            <div><div class="summary-eyebrow">支部特色建设 · <span class="summary-year">—</span>年度</div><h1>一支部一特色<span>年度总结</span></h1><p>记录工作做法，呈现支部建设成果。</p></div>
            <div class="summary-deadline"><span>报送截止</span><strong class="summary-deadline-date">—</strong><small>当日 23:59:59 截止</small></div>
        </header>
        <section class="summary-notice"><div class="summary-notice-title"><span class="summary-note-icon">!</span><strong>填报说明</strong><span>请按以下要求报送</span></div><ol><li>本次活动总结坚持为提升基层党建工作质效，切实为基层减轻负担，不组织现场汇报；</li><li>总结内容真实，只填报实际工作成果，杜绝空话套话，不夸大成效；</li><li>控制字数，表述清晰、逻辑连贯，坚持用数据支撑，无数据则写明具体结果，不使用“效果显著”等模糊表述；</li><li>请于11月10日（<span class="summary-deadline-weekday">—</span>）前报送总结。</li></ol></section>
        <section class="summary-ledger"><div class="summary-ledger-title"><div><h2>总结填报台账</h2><p>查看各党组织的填报情况</p></div><span><span class="summary-year">—</span> 年度</span></div>
            <form id="summarySearchForm" class="summary-toolbar">
                <div class="summary-filter"><label for="summaryPartyName">党组织名称</label><input id="summaryPartyName" type="search" placeholder="输入党组织名称"></div>
                <div class="summary-filter"><label for="summaryStatus">提交状态</label><select id="summaryStatus"><option value="">全部状态</option><option value="NOT_STARTED">未开始</option><option value="DRAFT">草稿</option><option value="SUBMITTED">已提交</option></select></div>
                <button type="submit" class="summary-primary" id="summarySearch">查询</button>
                <button type="button" id="summaryExport" class="summary-secondary">导出 Excel（含照片）</button>
            </form>
            <div id="summaryMessage" class="summary-message" role="status" aria-live="polite">正在加载总结列表…</div>
            <div class="summary-table-wrap"><table id="summaryTable"><thead><tr><th>序号</th><th>党组织名称</th><th>活动主题</th><th>提交状态</th><th>提交时间</th><th>操作</th></tr></thead><tbody></tbody></table></div>
            <div id="summaryPager" class="summary-pager"></div>
        </section>
        <p class="summary-footnote">导出范围为当前筛选条件下的全部记录，包含总结内容和活动照片。</p>
    </div>
</main>
<script src="static/pb-modern/yzbyts/yzbyts-summary.js?v=20261021r7"></script>
</body>
</html>
