<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% String importlibs = "common,table,form"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>党委“三会一课”考核</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="static/pb-modern/dwshyk/dwshyk-assessment.css?v=20261012a">
</head>
<body>
<main class="pb-dwshyk-page">
    <div class="assessment-shell">
        <header class="assessment-header">
            <div>
                <h1>党委“三会一课”考核</h1>
                <p class="assessment-subtitle">组织生活考核 <span>·</span> 按会议日期与建表时间统计</p>
            </div>
            <div class="assessment-filter-controls">
                <label for="assessmentYear">考核年份</label>
                <select id="assessmentYear" class="form-control" disabled></select>
                <button id="assessmentSearch" type="button" class="btn btn-primary" disabled>查询</button>
            </div>
        </header>
        <div class="assessment-overview"><h2>考核标准</h2><span id="assessmentAsOf">正在读取考核日期</span></div>
        <section class="assessment-rules" aria-label="考核规则">
            <article class="assessment-rule assessment-rule-monthly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">月</span><h3>月度考核</h3><span class="assessment-rule-target">每项每月1次</span></div>
                <p class="assessment-rule-description">党支部：支委会；党委、党总支：委员会。有党小组的支部，所属小组合计每月1次。</p>
                <p class="assessment-rule-note">每月最后一天24:00截止，每少1次扣0.2分。</p>
            </article>
            <article class="assessment-rule assessment-rule-quarterly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">季</span><h3>季度考核</h3><span class="assessment-rule-target">每项每季度1次</span></div>
                <p class="assessment-rule-description">党支部：党员大会、党课；设直属纪委的基层党委：纪委会。</p>
                <p class="assessment-rule-note">10—12月、1—3月、4—6月、7—9月；季末24:00截止，每少1次扣0.2分。</p>
            </article>
            <article class="assessment-rule assessment-rule-annual">
                <div class="assessment-rule-heading"><span class="assessment-frequency">年</span><h3>年度考核</h3><span class="assessment-rule-target">党委、党总支</span></div>
                <p class="assessment-rule-description">每考核年党员大会至少2次、党课至少1次。</p>
                <p class="assessment-rule-note">去年10月至当年9月，9月30日24:00截止，每少1次扣0.2分。</p>
            </article>
            <article class="assessment-rule assessment-rule-record">
                <div class="assessment-rule-heading"><span class="assessment-frequency">录</span><h3>记录口径</h3><span class="assessment-rule-target">按时记录达标</span></div>
                <p class="assessment-rule-description">开会时间和建表时间均须在对应考核截止时间内。</p>
                <p class="assessment-rule-note">补录计入记录总数，保留按时缺次扣分；未结束周期不扣分。</p>
            </article>
        </section>
        <section class="assessment-results" aria-label="党组织考核结果" aria-busy="true">
            <div class="assessment-results-heading">
                <div><h2>党组织考核明细</h2><p id="assessmentMessage" role="status" aria-live="polite">正在加载…</p></div>
                <div class="assessment-legend"><span class="assessment-legend-dot" aria-hidden="true"></span>已扣分 <span class="assessment-legend-pending" aria-hidden="true"></span>未到期不扣分</div>
            </div>
            <p id="assessmentRange" class="assessment-range">考核区间：去年10月1日至当年9月30日</p>
            <div class="assessment-grid-scroll" tabindex="0" role="region" aria-label="考核扣分表，可横向滚动">
                <table id="assessmentGrid"></table>
                <div id="assessmentPager"></div>
            </div>
            <div class="assessment-table-footer"><span>根节点及名称含“离休”的支部不参与考核</span><span>点击周期明细，查看按时次数与扣分原因 ↗</span></div>
        </section>
        <p class="assessment-hint">考核说明：列表仅累计已到期周期扣分，多开不抵扣其他周期。补录或修改记录后，重新查询更新明细；补录不抵扣按时缺次。已保存的月度成绩通过指定月份重算更新。</p>
    </div>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/dwshyk/dwshyk-assessment.js?v=20261012a"></script>
</body>
</html>
