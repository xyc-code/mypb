<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% String importlibs = "common,table,form"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>主题党日考核</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="static/pb-modern/ztdr/ztdr-assessment.css?v=20261009b">
</head>
<body>
<main class="pb-ztdr-page">
    <div class="assessment-shell">
        <header class="assessment-header">
            <div>
                <h1>主题党日考核</h1>
                <p class="assessment-subtitle">主题党日活动 <span>·</span> 按计划开展月份考核</p>
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
            <article class="assessment-rule assessment-rule-annual">
                <div class="assessment-rule-heading"><span class="assessment-frequency">月</span><h3>活动计划</h3><span class="assessment-rule-target">缺计划扣0.2分</span></div>
                <p class="assessment-rule-description">当月没有符合条件的活动计划</p>
                <p class="assessment-rule-note">未填报年度主表也按月考核；当年只考核已结束月份。</p>
            </article>
            <article class="assessment-rule">
                <div class="assessment-rule-heading"><span class="assessment-frequency">调</span><h3>计划调整</h3><span class="assessment-rule-target">每条0.1分</span></div>
                <p class="assessment-rule-description">实际与计划跨年月，未说明调整原因</p>
                <p class="assessment-rule-note">按计划开展日期归属月份，跨年同样检查。</p>
            </article>
            <article class="assessment-rule assessment-rule-quarterly">
                <div class="assessment-rule-heading"><span class="assessment-frequency">实</span><h3>活动开展</h3><span class="assessment-rule-target">每条0.1分</span></div>
                <p class="assessment-rule-description">实际日期未填，或日期已过但未完成</p>
                <p class="assessment-rule-note">实际日期早于今天且状态非“已完成”时扣分；两项不重复扣。</p>
            </article>
            <article class="assessment-rule assessment-rule-group">
                <div class="assessment-rule-heading"><span class="assessment-frequency">人</span><h3>参与人数</h3><span class="assessment-rule-target">每条0.1分</span></div>
                <p class="assessment-rule-description">参与党员人数未填写</p>
                <p class="assessment-rule-note">人数填0不算未填写；同一活动各项问题分别累计。</p>
            </article>
        </section>
        <section class="assessment-results" aria-label="党组织考核结果" aria-busy="true">
            <div class="assessment-results-heading">
                <div><h2>党组织月度台账</h2><p id="assessmentMessage" role="status" aria-live="polite">正在加载…</p></div>
                <div class="assessment-legend"><span class="assessment-legend-dot" aria-hidden="true"></span>已扣分 <span class="assessment-legend-pending" aria-hidden="true"></span>未到期不扣分</div>
            </div>
            <p id="assessmentRange" class="assessment-range">自然年1—12月，创建当月及以前免考</p>
            <div class="assessment-grid-scroll" tabindex="0" role="region" aria-label="月度扣分表，可横向滚动">
                <table id="assessmentGrid"></table>
                <div id="assessmentPager"></div>
            </div>
            <div class="assessment-table-footer"><span>名称包含“党委”“离休”“总支”的党组织不参与考核</span><span>点击考核明细，查看活动及逐项扣分原因 ↗</span></div>
        </section>
        <p class="assessment-hint">考核说明：不设基础满分，逐条逐项累计扣分、不设月度上限。新建组织从创建次月开始考核。补齐材料后重新查询即可恢复；已保存的月度成绩通过指定月份重算更新。</p>
    </div>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/ztdr/ztdr-assessment.js?v=20261009b"></script>
</body>
</html>
