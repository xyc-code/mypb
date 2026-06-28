<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
  <title>&#20826;&#22996;&#24037;&#20316;&#35745;&#21010;&#32479;&#35745;</title>
  <base href="<%=ViewUtil.getRequestPath(request)%>">
  <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
  </jsp:include>
  <link rel="stylesheet" href="static/pb-modern/dwworkplan/dwworkplan.css?v=${jsversion}">
</head>
<body>
<div class="pb-modern-page pb-dwworkplan-page" data-page="stats">
  <div class="dw-topbar">
    <div>
      <h1>&#32479;&#35745;&#20998;&#26512;</h1>
      <p>&#25353;&#29366;&#24577;&#12289;&#23618;&#32423;&#21644;&#36926;&#26399;&#24773;&#20917;&#26597;&#30475;&#35745;&#21010;&#25512;&#36827;&#24773;&#20917;</p>
    </div>
    <div class="dw-actions">
      <select id="dwStatsBatchSelect" class="dw-input"></select>
      <button type="button" class="dw-btn dw-btn-ghost" id="dwStatsRefreshBtn">&#21047;&#26032;</button>
    </div>
  </div>

  <div class="dw-kpis">
    <div class="dw-kpi"><span>&#20219;&#21153;&#24635;&#25968;</span><strong id="dwKpiTotal">0</strong></div>
    <div class="dw-kpi"><span>&#24050;&#23436;&#25104;</span><strong id="dwKpiDone">0</strong></div>
    <div class="dw-kpi"><span>&#24453;&#30830;&#35748;</span><strong id="dwKpiPending">0</strong></div>
    <div class="dw-kpi"><span>&#36926;&#26399;</span><strong id="dwKpiOverdue">0</strong></div>
  </div>

  <div class="dw-grid dw-grid-stats">
    <section class="dw-panel">
      <div class="dw-panel-head"><h2>&#29366;&#24577;&#20998;&#24067;</h2></div>
      <div id="dwStatusChart" class="dw-chart"></div>
    </section>
    <section class="dw-panel">
      <div class="dw-panel-head"><h2>&#23618;&#32423;&#25512;&#36827;</h2></div>
      <div id="dwLevelChart" class="dw-chart"></div>
    </section>
    <section class="dw-panel">
      <div class="dw-panel-head"><h2>&#36926;&#26399;&#23618;&#32423;</h2></div>
      <div id="dwOverdueChart" class="dw-chart"></div>
    </section>
    <section class="dw-panel">
      <div class="dw-panel-head"><h2>&#26368;&#36817;&#20219;&#21153;</h2></div>
      <div class="dw-table-wrap">
        <table class="dw-table" id="dwRecentTable">
          <thead>
          <tr>
            <th>&#23618;&#32423;</th>
            <th>&#26631;&#39064;</th>
            <th>&#25509;&#25910;&#20154;</th>
            <th>&#29366;&#24577;</th>
            <th>&#26399;&#38480;</th>
          </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </section>
  </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
  <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/h5/echarts5.3.1/dist/echarts.min.js"></script>
<script src="static/pb-modern/dwworkplan/dwworkplan.js?v=${jsversion}"></script>
</body>
</html>
