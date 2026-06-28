<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
  <title>&#20826;&#22996;&#24037;&#20316;&#35745;&#21010;&#20154;&#21592;&#26641;</title>
  <base href="<%=ViewUtil.getRequestPath(request)%>">
  <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
  </jsp:include>
  <link rel="stylesheet" href="static/pb-modern/dwworkplan/dwworkplan.css?v=${jsversion}">
</head>
<body>
<div class="pb-modern-page pb-dwworkplan-page" data-page="personTree">
  <div class="dw-topbar">
    <div>
      <h1>&#20154;&#21592;&#26641;&#32500;&#25252;</h1>
      <p>&#25353;&#20826;&#22996;&#12289;&#37096;&#38376;&#12289;&#31185;&#23460;&#12289;&#31185;&#21592;&#23618;&#32423;&#32500;&#25252;&#19979;&#21457;&#33539;&#22260;</p>
    </div>
    <div class="dw-actions">
      <button type="button" class="dw-btn dw-btn-ghost" id="dwPersonRefreshBtn">&#21047;&#26032;</button>
    </div>
  </div>

  <div class="dw-grid dw-grid-person">
    <section class="dw-panel">
      <div class="dw-panel-head">
        <h2>&#32452;&#32455;&#20154;&#21592;&#26641;</h2>
        <div class="dw-panel-tools">
          <button type="button" class="dw-tree-toggle-all" id="dwPersonToggleAllBtn" title="&#23637;&#24320;&#20840;&#37096;">
            <span class="dw-tree-toggle-all-icon" aria-hidden="true"></span>
            <span class="dw-tree-all-text">&#23637;&#24320;&#20840;&#37096;</span>
          </button>
          <span id="dwPersonCount" class="dw-muted"></span>
        </div>
      </div>
      <div class="dw-table-wrap">
        <table class="dw-table" id="dwPersonTable">
          <thead>
          <tr>
            <th>&#23618;&#32423;&#21517;&#31216;</th>
            <th>&#29992;&#25143;</th>
            <th>&#35282;&#33394;</th>
            <th>&#29238;&#33410;&#28857;</th>
            <th>&#25490;&#24207;</th>
            <th>&#25805;&#20316;</th>
          </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </section>

    <aside class="dw-panel">
      <div class="dw-panel-head">
        <h2>&#33410;&#28857;&#20449;&#24687;</h2>
      </div>
      <input id="dwPersonId" type="hidden">
      <label>&#29238;&#33410;&#28857;
        <select id="dwPersonParent" class="dw-input"></select>
      </label>
      <label>&#33410;&#28857;&#21517;&#31216;<input id="dwPersonNodeName" class="dw-input" type="text"></label>
      <label>&#29992;&#25143;
        <input id="dwPersonUserId" type="hidden">
        <span class="dw-user-picker">
          <input id="dwPersonUserName" class="dw-input" type="text" readonly="readonly" placeholder="&#35831;&#36873;&#25321;&#29992;&#25143;">
          <button type="button" class="dw-btn dw-btn-ghost" id="dwPersonUserPickBtn">&#36873;&#25321;</button>
        </span>
      </label>
      <label>&#35282;&#33394;
        <select id="dwPersonRole" class="dw-input">
          <option value="PARTY_SENDER">&#20826;&#22996;&#35745;&#21010;&#19979;&#21457;&#32773;</option>
          <option value="DEPT_MINISTER">&#37096;&#38271;</option>
          <option value="OFFICE_DIRECTOR">&#23460;&#20027;&#20219;</option>
          <option value="STAFF">&#31185;&#21592;</option>
        </select>
      </label>
      <label>&#25490;&#24207;<input id="dwPersonSort" class="dw-input" type="number"></label>
      <label>&#22791;&#27880;<textarea id="dwPersonRemark" class="dw-textarea"></textarea></label>
      <div class="dw-button-row">
        <button type="button" class="dw-btn dw-btn-primary" id="dwPersonSaveBtn">&#20445;&#23384;</button>
        <button type="button" class="dw-btn dw-btn-danger" id="dwPersonDeleteBtn">&#20572;&#29992;</button>
      </div>
    </aside>
  </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
  <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/dwworkplan/dwworkplan.js?v=${jsversion}"></script>
</body>
</html>
