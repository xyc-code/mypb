<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% String importlibs = "common,table,form"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>团委“三会一课”考核</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="avicit/pb/twshyk/twshyk-assessment.css?v=20260917e">
</head>
<body>
<main class="pb-twshyk-page">
    <div class="assessment-shell">
        <header class="assessment-header">
            <div>
                <h1>团委“三会一课”考核</h1>
                <p class="assessment-subtitle">组织生活考核 <span>·</span> 按会议日期统计</p>
            </div>
            <div class="assessment-filter-controls">
                <label for="assessmentYear">考核年份</label>
                <select id="assessmentYear" class="form-control" disabled></select>
                <button id="assessmentSearch" type="button" class="btn btn-primary" disabled>查询</button>
            </div>
        </header>
        <div class="assessment-overview"><h2>考核标准</h2><span id="assessmentAsOf">正在读取考核日期</span></div>
        <section class="assessment-rules" aria-label="考核规则">
            <article class="assessment-rule assessment-rule-annual">
                <div class="assessment-rule-heading"><span class="assessment-frequency">年</span><h3>支部大会</h3><span class="assessment-rule-target">每考核年1次</span></div>
                <p id="assessmentAnnualRange">正在加载考核区间…</p>
                <p class="assessment-rule-note" id="assessmentAnnualNote">当年11月起考核 · 缺会扣0.2分</p>
            </article>
            <article class="assessment-rule assessment-rule-monthly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">月</span><h3>支部委员会</h3><span class="assessment-rule-target">每月1次</span></div>
                <p class="assessment-cycle-range">正在加载考核区间…</p>
                <p class="assessment-rule-note">次月初考核上月 · 缺会扣0.2分</p>
            </article>
            <article class="assessment-rule assessment-rule-group">
                <div class="assessment-rule-heading"><span class="assessment-frequency">随</span><h3>团小组会</h3><span class="assessment-rule-target">不参与考核</span></div>
                <p class="assessment-group-description">随时开展，不参与考核</p>
                <p class="assessment-rule-note">不设次数要求，不计扣分</p>
            </article>
            <article class="assessment-rule assessment-rule-quarterly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">季</span><h3>团课</h3><span class="assessment-rule-target">每季度1次</span></div>
                <p class="assessment-cycle-range">正在加载考核区间…</p>
                <p class="assessment-rule-note">11—1月、2—4月、5—7月、8—10月；季末后考核，缺课扣0.2分</p>
            </article>
        </section>
        <section class="assessment-results" aria-label="团组织考核结果">
            <div class="assessment-results-heading">
                <div><h2>团组织考核明细</h2><p id="assessmentMessage" role="status" aria-live="polite">正在加载…</p></div>
                <div class="assessment-legend"><span class="assessment-legend-dot" aria-hidden="true"></span>已扣分 <span class="assessment-legend-pending" aria-hidden="true"></span>未到期不扣分</div>
            </div>
            <div class="assessment-grid-scroll">
                <table id="assessmentGrid"></table>
                <div id="assessmentPager"></div>
            </div>
            <div class="assessment-table-footer"><span>仅考核本组织，根节点不参与</span><span>点击周期明细，查看实际次数与扣分原因 ↗</span></div>
        </section>
        <p class="assessment-hint">考核说明：未结束的周期不扣分，多开不抵扣其他周期。补录或修改会议后，重新查询即可更新结果。</p>
    </div>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/twshyk/twshyk-assessment.js?v=20260917e"></script>
</body>
</html>
