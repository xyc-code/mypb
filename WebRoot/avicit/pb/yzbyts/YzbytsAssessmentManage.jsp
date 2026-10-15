<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% String importlibs = "common,table,form"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>一支部一特色考核</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="static/pb-modern/yzbyts/yzbyts-assessment.css?v=20261009a">
</head>
<body>
<main class="pb-yzbyts-page">
    <div class="assessment-shell">
        <header class="assessment-header">
            <div>
                <h1>一支部一特色考核</h1>
                <p class="assessment-subtitle">党支部特色活动 <span>·</span> 年度填报与里程碑考核</p>
            </div>
            <div class="assessment-filter-controls">
                <div class="assessment-filter-field">
                    <label for="assessmentYear">考核年份</label>
                    <select id="assessmentYear" class="form-control" disabled></select>
                </div>
                <div class="assessment-filter-field assessment-name-filter">
                    <label for="assessmentPartyName">党组织名称</label>
                    <input id="assessmentPartyName" class="form-control" type="text" placeholder="输入名称查询" disabled>
                </div>
                <button id="assessmentSearch" type="button" class="btn btn-primary" disabled>查询</button>
            </div>
        </header>
        <div class="assessment-overview"><h2>考核标准</h2><span id="assessmentAsOf">正在读取考核日期</span></div>
        <section class="assessment-rules" aria-label="考核规则">
            <article class="assessment-rule assessment-rule-annual">
                <div class="assessment-rule-heading"><span class="assessment-frequency">年</span><h3>年度填报</h3><span class="assessment-rule-target">每年1份</span></div>
                <p id="assessmentStart">正在加载开始考核日期…</p>
                <p class="assessment-rule-note">开始考核后未填报扣0.1分；补报后恢复。</p>
            </article>
            <article class="assessment-rule assessment-rule-monthly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">项</span><h3>里程碑数量</h3><span class="assessment-rule-target">至少3条</span></div>
                <p class="assessment-rule-description">开始考核后，每缺1条扣0.1分</p>
                <p class="assessment-rule-note">不足3条的缺项补齐后恢复；已有里程碑逐条考核。</p>
            </article>
            <article class="assessment-rule assessment-rule-quarterly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">期</span><h3>到期检查</h3><span class="assessment-rule-target">每条0.1分</span></div>
                <p class="assessment-rule-description">计划完成时间后24小时起检查</p>
                <p class="assessment-rule-note">不早于年度开始日；缺佐证材料或状态非“已完成”即扣分。</p>
            </article>
            <article class="assessment-rule assessment-rule-group">
                <div class="assessment-rule-heading"><span class="assessment-frequency">记</span><h3>扣分保留</h3><span class="assessment-rule-target">逾期标记保留</span></div>
                <p class="assessment-rule-description">缺项补齐恢复，已标记逾期扣分保留</p>
                <p class="assessment-rule-note">按查询或月度任务运行时现有状态认定；此前已补齐的不追溯。</p>
            </article>
        </section>
        <section class="assessment-results" aria-label="党组织考核结果" aria-busy="true">
            <div class="assessment-results-heading">
                <div><h2>党组织考核明细</h2><p id="assessmentMessage" role="status" aria-live="polite">正在加载…</p></div>
                <div class="assessment-legend"><span class="assessment-legend-dot" aria-hidden="true"></span>已扣分 <span class="assessment-legend-pending" aria-hidden="true"></span>未到期不扣分</div>
            </div>
            <div class="assessment-grid-scroll">
                <table id="assessmentGrid"></table>
                <div id="assessmentPager"></div>
            </div>
            <div class="assessment-table-footer"><span>名称包含“党委”“离休”“总支”的党组织不参与考核</span><span>点击考核明细，查看全部里程碑及扣分原因 ↗</span></div>
        </section>
        <p class="assessment-hint">考核说明：仅显示扣分，不设满分。每条已到期里程碑独立检查；补齐缺项可恢复，已标记的里程碑扣分保留。</p>
    </div>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/yzbyts/yzbyts-assessment.js?v=20261009d"></script>
</body>
</html>
