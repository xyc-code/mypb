<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<% String importlibs = "common,form"; %>
<!DOCTYPE html>
<html>
<head>
    <title>举手报告统计</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/static/pb-modern/jushoubaogao/jushoubaogao.css?v=20260902-1">
    <script src="<%=request.getContextPath()%>/static/h5/echarts/dist/echarts-4.1.2.js" type="text/javascript"></script>
</head>
<body>
<main id="pb-jushoubaogao" class="pb-modern-page pb-jushoubaogao-page" data-statistics-url="<%=request.getContextPath()%>/platform/avicit/pb/jushoubaogao/juShouBaoGaoController/statistics">
    <div class="jbg-header">
        <div class="jbg-header-copy"><div class="jbg-title-line"><h1>全业务域举手报告概览</h1><span class="jbg-simulation-badge"><i></i>本地测试数据 · 使用测试状态</span></div><p class="jbg-subtitle">快速查看报告规模、处理进度和问题分布</p></div>
        <label class="jbg-filter">统计年份 <select class="jbg-year" aria-label="统计年份"></select></label>
    </div>
    <div class="jbg-error" role="alert"></div>
    <div class="jbg-data-alert" role="alert"><strong>流程数据不完整</strong><span class="jbg-data-alert-text">部分报告尚未关联流程，闭环率仅供排查参考。</span></div>
    <div class="jbg-kpis">
        <section class="jbg-kpi"><div class="jbg-kpi-label">年度报告总数量</div><div class="jbg-kpi-value jbg-total">0</div><div class="jbg-kpi-note">按报告创建时间统计</div></section>
        <section class="jbg-kpi jbg-kpi-completed"><div class="jbg-kpi-label">已完成数量</div><div class="jbg-kpi-value jbg-completed-count">0</div><div class="jbg-kpi-note">流程状态为已完成</div></section>
        <section class="jbg-kpi jbg-kpi-closure"><div class="jbg-kpi-label">闭环率</div><div class="jbg-kpi-value"><span class="jbg-closure-rate">0</span>%</div><div class="jbg-kpi-note">已完成 / 年度报告总数量</div></section>
        <section class="jbg-kpi jbg-kpi-processing"><div class="jbg-kpi-label">处理中数量</div><div class="jbg-kpi-value jbg-processing-count">0</div><div class="jbg-kpi-note">流程状态为流转中</div></section>
    </div>
    <div class="jbg-main">
        <section class="jbg-panel jbg-analysis-panel"><div class="jbg-panel-heading"><h2 class="jbg-panel-title">工作进展情况</h2><span class="jbg-panel-tag">流程状态</span></div><div class="jbg-type-tabs" role="tablist" aria-label="工作进展报告类型"><button type="button" role="tab" class="jbg-type-tab is-active" data-report-type="总体" aria-selected="true">总体</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="质量" aria-selected="false">质量</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="安全" aria-selected="false">安全</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="生产" aria-selected="false">生产</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="技术" aria-selected="false">技术</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="其他" aria-selected="false">其他</button></div><p class="jbg-panel-summary jbg-status-summary">正在读取统计数据...</p><div id="jbgStatusChart" class="jbg-chart jbg-status-chart"></div></section>
        <section class="jbg-panel jbg-analysis-panel"><div class="jbg-panel-heading"><h2 class="jbg-panel-title">月度报告趋势</h2><span class="jbg-panel-tag">创建时间</span></div><div class="jbg-type-tabs" role="tablist" aria-label="月度趋势报告类型"><button type="button" role="tab" class="jbg-type-tab is-active" data-report-type="总体" aria-selected="true">总体</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="质量" aria-selected="false">质量</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="安全" aria-selected="false">安全</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="生产" aria-selected="false">生产</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="技术" aria-selected="false">技术</button><button type="button" role="tab" class="jbg-type-tab" data-report-type="其他" aria-selected="false">其他</button></div><p class="jbg-panel-summary jbg-monthly-summary">正在读取统计数据...</p><div id="jbgMonthlyChart" class="jbg-chart jbg-monthly-chart"></div></section>
        <section class="jbg-panel jbg-panel-wide jbg-unit-panel"><div class="jbg-panel-heading"><h2 class="jbg-panel-title">单位排行榜</h2><span class="jbg-panel-tag jbg-unit-sort-label">按报告总数降序</span></div><div class="jbg-unit-tabs" role="tablist" aria-label="单位排行榜分类"><button type="button" role="tab" class="jbg-unit-tab is-active" data-unit-mode="report" aria-selected="true">报告单位</button><button type="button" role="tab" class="jbg-unit-tab" data-unit-mode="accept" aria-selected="false">受理单位</button></div><p class="jbg-panel-summary jbg-unit-summary">正在读取统计数据...</p><div class="jbg-unit-table-wrap"><table class="jbg-unit-table"><thead class="jbg-unit-table-head"><tr><th>排名</th><th>报告单位</th><th>报告总数</th><th>质量</th><th>安全</th><th>生产</th><th>技术</th><th>其他</th></tr></thead><tbody class="jbg-unit-table-body"><tr><td colspan="8">正在读取统计数据...</td></tr></tbody></table></div><div class="jbg-unit-pagination"><span class="jbg-unit-page-info">1-0/0</span><label>每页 <select class="jbg-unit-page-size"><option>10</option><option>20</option><option>50</option></select> 条</label><button type="button" class="jbg-unit-prev" disabled>上一页</button><span class="jbg-unit-page-number">第 1 页</span><button type="button" class="jbg-unit-next" disabled>下一页</button></div></section>
    </div>
    <span class="jbg-loading" style="display:none">正在读取...</span>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
<script src="<%=request.getContextPath()%>/static/pb-modern/jushoubaogao/jushoubaogao.js?v=20260902-1"></script>
</body>
</html>
