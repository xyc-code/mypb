<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% String importlibs = "common,table,form"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>月度考核结果</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="static/pb-modern/assessment/monthly-assessment.css?v=20261009a">
</head>
<body>
<main class="pb-monthly-assessment-page" data-default-year="${defaultYear}" data-default-month="${defaultMonth}">
    <div class="assessment-shell">
        <header class="assessment-header">
            <div>
                <h1>月度考核结果</h1>
                <p class="assessment-subtitle">党 · 工会 · 团委 <span> / </span> 按部门、组织和模块查看已收集成绩</p>
            </div>
            <span class="assessment-header-badge">自然月考核</span>
        </header>
        <section class="assessment-filters" aria-label="查询条件">
            <form id="monthlyFilters">
                <div class="assessment-filter-field assessment-year-field">
                    <label for="monthlyYear">年份</label>
                    <input id="monthlyYear" name="year" class="form-control" type="number" min="1" max="9998" step="1" required value="${defaultYear}">
                </div>
                <div class="assessment-filter-field assessment-month-field">
                    <label for="monthlyMonth">月份</label>
                    <select id="monthlyMonth" name="month" class="form-control">
                        <% for (int month = 1; month <= 12; month++) { %>
                        <option value="<%=month%>"><%=month%>月</option>
                        <% } %>
                    </select>
                </div>
                <div class="assessment-filter-field assessment-category-field">
                    <label for="monthlyCategory">板块</label>
                    <select id="monthlyCategory" name="categoryCode" class="form-control"><option value="">全部板块</option></select>
                </div>
                <div class="assessment-filter-field">
                    <label for="monthlyModule">考核模块</label>
                    <select id="monthlyModule" name="moduleCode" class="form-control"><option value="">全部模块</option></select>
                </div>
                <div class="assessment-filter-field">
                    <label for="monthlyDepartment">部门</label>
                    <select id="monthlyDepartment" name="departmentId" class="form-control"><option value="">全部部门（含未关联）</option></select>
                </div>
                <div class="assessment-filter-actions">
                    <button id="monthlySearch" type="submit" class="btn btn-primary">查询</button>
                    <button id="monthlyReset" type="button" class="btn btn-default">重置</button>
                </div>
            </form>
            <p id="monthlyOptionsMessage" class="assessment-options-message" role="status" hidden></p>
        </section>
        <section class="assessment-results" aria-label="月度考核结果列表">
            <div class="assessment-results-heading">
                <div><h2 id="monthlyHeading">月度成绩明细</h2><p id="monthlyMessage" role="status" aria-live="polite">正在读取已收集结果…</p></div>
                <div class="assessment-legend"><span class="assessment-dot assessment-dot-negative"></span>扣分 <span class="assessment-dot assessment-dot-positive"></span>加分</div>
            </div>
            <div class="assessment-grid-scroll">
                <table id="monthlyGrid"></table>
                <div id="monthlyPager"></div>
            </div>
            <div id="monthlyEmpty" class="assessment-empty" hidden>
                <strong>暂无已收集结果</strong>
                <p>当前条件下没有保存的成绩。可调整查询条件，或在完成该月份收集后重新查询。</p>
                <span>无结果不代表零分。</span>
            </div>
            <div class="assessment-table-footer"><span>同部门下的组织、模块分别列示，不合计部门总分</span><span>点击原因明细，查看加扣分原因与规则版本 ↗</span></div>
        </section>
        <p class="assessment-hint">联合组织的成绩分别计入每个关联部门，不分摊。补录业务数据后，需在定时任务中补算对应月份，再查询查看更新结果。</p>
    </div>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/assessment/monthly-assessment.js?v=20261009a"></script>
</body>
</html>
