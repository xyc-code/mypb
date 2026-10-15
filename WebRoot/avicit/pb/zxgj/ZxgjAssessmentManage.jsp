<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% String importlibs = "common,table,form"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>铸心共建考核</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="static/pb-modern/zxgj/zxgj-assessment.css?v=20261009a">
</head>
<body>
<main class="pb-zxgj-page">
    <div class="assessment-shell">
        <header class="assessment-header">
            <div>
                <h1>铸心共建考核</h1>
                <p class="assessment-subtitle">共建项目 <span>·</span> 里程碑与年度总结考核</p>
            </div>
            <div class="assessment-filter-controls">
                <div class="assessment-filter-field">
                    <label for="assessmentYear">考核年份</label>
                    <select id="assessmentYear" class="form-control" disabled></select>
                </div>
                <div class="assessment-filter-field">
                    <label for="assessmentPartyName">党组织名称</label>
                    <input id="assessmentPartyName" class="form-control" type="text" placeholder="输入名称查询" disabled>
                </div>
                <button id="assessmentSearch" type="button" class="btn btn-primary" disabled>查询</button>
            </div>
        </header>
        <div class="assessment-overview"><h2>考核标准</h2><span id="assessmentAsOf">正在读取考核日期</span></div>
        <section class="assessment-rules" aria-label="考核规则">
            <article class="assessment-rule">
                <div class="assessment-rule-heading"><span class="assessment-frequency">项</span><h3>里程碑材料</h3><span class="assessment-rule-target">每条0.1分</span></div>
                <p class="assessment-rule-description">计划日期所在月份的次月1日起检查</p>
                <p class="assessment-rule-note">到期缺少附件，每条扣0.1分，累计不封顶；已认定扣分在补传后保留。</p>
            </article>
            <article class="assessment-rule assessment-rule-annual">
                <div class="assessment-rule-heading"><span class="assessment-frequency">年</span><h3>年度总结</h3><span class="assessment-rule-target">每项目0.1分</span></div>
                <p class="assessment-rule-description">表单编号所属年度的11月1日起检查</p>
                <p class="assessment-rule-note">缺少年度总结附件扣0.1分，补传不恢复；跨年项目仍按编号年度考核一次。</p>
            </article>
        </section>
        <section class="assessment-results" aria-label="共建项目考核结果" aria-busy="true">
            <div class="assessment-results-heading">
                <div><h2>共建项目考核明细</h2><p id="assessmentMessage" role="status" aria-live="polite">正在加载…</p></div>
                <div class="assessment-legend"><span class="assessment-legend-dot" aria-hidden="true"></span>已扣分 <span class="assessment-legend-pending" aria-hidden="true"></span>未到期不扣分</div>
            </div>
            <div class="assessment-grid-scroll">
                <table id="assessmentGrid"></table>
                <div id="assessmentPager"></div>
            </div>
            <div class="assessment-table-footer"><span>每个共建项目一行，扣分归申请人党组织</span><span>点击考核明细，查看材料情况及扣分原因 ↗</span></div>
        </section>
        <p class="assessment-hint">考核说明：按表单编号前四位筛选年度；仅显示扣分，不设满分。首次检查前已补齐且没有扣分标记的不追溯；已认定扣分持续保留，每笔只计入开始检查的月份一次。</p>
    </div>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/zxgj/zxgj-assessment.js?v=20261009b"></script>
</body>
</html>
