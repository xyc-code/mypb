<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
  <title>&#24037;&#20316;&#35745;&#21010;</title>
  <base href="<%=ViewUtil.getRequestPath(request)%>">
  <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
  </jsp:include>
  <link rel="stylesheet" href="static/pb-modern/dwworkplan/dwworkplan.css?v=${jsversion}">
</head>
<body>
<div class="pb-modern-page pb-dwworkplan-page" data-page="workbench">
  <div class="dw-topbar">
    <div>
      <h1>&#24037;&#20316;&#35745;&#21010;</h1>
      <p id="dwUserText">&#21152;&#36733;&#24403;&#21069;&#29992;&#25143;...</p>
    </div>
    <div class="dw-actions">
      <select id="dwBatchSelect" class="dw-input"></select>
      <select id="dwStatusFilter" class="dw-input">
        <option value="">&#20840;&#37096;&#29366;&#24577;</option>
        <option value="DRAFT">&#33609;&#31295;</option>
        <option value="TODO">&#24453;&#25509;&#25910;</option>
        <option value="DOING">&#25191;&#34892;&#20013;</option>
        <option value="WAIT_CHILD">&#24453;&#19979;&#32423;&#23436;&#25104;</option>
        <option value="PENDING_CONFIRM">&#24453;&#30830;&#35748;</option>
        <option value="COMPLETED">&#24050;&#23436;&#25104;</option>
        <option value="RETURNED">&#24050;&#36864;&#22238;</option>
      </select>
      <button type="button" class="dw-btn dw-btn-ghost" id="dwRefreshBtn">&#21047;&#26032;</button>
    </div>
  </div>

  <div class="dw-flowbar dw-workbench-tabs">
    <button type="button" class="dw-flow-step is-active" data-tab="batch">&#23395;&#24230;&#25209;&#27425;</button>
    <button type="button" class="dw-flow-step" data-tab="tasks">&#20219;&#21153;&#27744;<span id="dwTaskNoticeBadge" class="dw-tab-badge"></span></button>
    <button type="button" class="dw-flow-step" data-tab="dispatch" id="dwDispatchTab">&#19979;&#21457;&#20219;&#21153;</button>
    <button type="button" class="dw-flow-step" data-tab="process">&#21453;&#39304;&#19982;&#30830;&#35748;&#23436;&#25104;</button>
  </div>

  <div class="dw-workbench-stage">
    <section class="dw-workbench-section is-active" data-tab-panel="batch">
    <div class="dw-panel dw-create-panel">
      <div class="dw-panel-head">
        <h2>&#23395;&#24230;&#25209;&#27425;</h2>
      </div>
      <div class="dw-form-grid">
        <label>&#24180;&#24230;<input id="dwYear" class="dw-input" type="number" min="2000" max="2100"></label>
        <label>&#23395;&#24230;
          <select id="dwQuarter" class="dw-input">
            <option value="Q1">&#31532;&#19968;&#23395;&#24230;</option>
            <option value="Q2">&#31532;&#20108;&#23395;&#24230;</option>
            <option value="Q3">&#31532;&#19977;&#23395;&#24230;</option>
            <option value="Q4">&#31532;&#22235;&#23395;&#24230;</option>
          </select>
        </label>
      </div>
      <button type="button" class="dw-btn dw-btn-primary dw-full dw-party-only" id="dwCreateBatchBtn">&#21019;&#24314;/&#36873;&#25321;&#25209;&#27425;</button>
      <button type="button" class="dw-btn dw-btn-danger dw-full dw-batch-delete-btn dw-party-only" id="dwDeleteBatchBtn">&#21024;&#38500;&#24403;&#21069;&#25209;&#27425;</button>

      <div id="dwRootTaskBox" class="dw-party-only">
        <div class="dw-divider"></div>
        <div class="dw-panel-head">
          <h2>&#26032;&#24314;&#20826;&#22996;&#20219;&#21153;</h2>
        </div>
        <label>&#20219;&#21153;&#26631;&#39064;<input id="dwRootTitle" class="dw-input" type="text"></label>
        <label>&#23436;&#25104;&#26399;&#38480;<input id="dwRootDeadline" class="dw-input" type="date"></label>
        <label>&#30446;&#26631;&#35201;&#27714;<textarea id="dwRootTarget" class="dw-textarea"></textarea></label>
        <label>&#20219;&#21153;&#20869;&#23481;<textarea id="dwRootContent" class="dw-textarea dw-textarea-lg"></textarea></label>
        <label>&#38468;&#20214;<input id="dwRootFile" class="dw-input" type="file"></label>
        <input id="dwRootAttachment" type="hidden">
        <div id="dwRootAttachStatus" class="dw-attach-text">&#26410;&#36873;&#25321;&#38468;&#20214;</div>
        <button type="button" class="dw-btn dw-btn-primary dw-full" id="dwSaveRootBtn">&#20445;&#23384;&#20826;&#22996;&#20219;&#21153;</button>
      </div>
    </div>
    </section>

    <section class="dw-workbench-section" data-tab-panel="tasks">
    <div class="dw-panel dw-list-panel">
      <div class="dw-panel-head">
        <h2>&#20219;&#21153;&#27744;<span id="dwTaskPanelNotice" class="dw-title-badge"></span></h2>
        <span id="dwTaskCount" class="dw-muted"></span>
      </div>
      <div class="dw-table-wrap">
        <table class="dw-table" id="dwTaskTable">
          <thead>
          <tr>
            <th>&#23618;&#32423;</th>
            <th>&#26631;&#39064;</th>
            <th>&#19979;&#21457;&#20154;</th>
            <th>&#25509;&#25910;&#20154;</th>
            <th>&#26399;&#38480;</th>
            <th>&#29366;&#24577;</th>
            <th>&#22788;&#29702;</th>
          </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    </section>

    <section class="dw-workbench-section" data-tab-panel="dispatch">
    <div class="dw-panel dw-detail-panel">
      <div class="dw-panel-head">
        <h2>&#19979;&#21457;&#20219;&#21153;</h2>
      </div>
      <div id="dwSelectedInfo" class="dw-empty">&#35831;&#20174;&#20219;&#21153;&#27744;&#36873;&#25321;&#19968;&#26465;&#20219;&#21153;</div>

      <div id="dwDispatchProcessBox" class="dw-process-box is-disabled">
        <div class="dw-divider"></div>
        <div id="dwDispatchBox">
        <h3>&#19979;&#21457;&#32473;&#19979;&#32423;</h3>
        <label>&#25509;&#25910;&#20154;
          <select id="dwReceiverSelect" class="dw-input"></select>
        </label>
        <label>&#26631;&#39064;<input id="dwChildTitle" class="dw-input" type="text"></label>
        <label>&#23436;&#25104;&#26399;&#38480;<input id="dwChildDeadline" class="dw-input" type="date"></label>
        <label>&#30446;&#26631;&#35201;&#27714;<textarea id="dwChildTarget" class="dw-textarea"></textarea></label>
        <label>&#20219;&#21153;&#20869;&#23481;<textarea id="dwChildContent" class="dw-textarea"></textarea></label>
        <label>&#38468;&#20214;<input id="dwChildFile" class="dw-input" type="file"></label>
        <input id="dwChildAttachment" type="hidden">
        <div id="dwChildAttachStatus" class="dw-attach-text">&#26410;&#36873;&#25321;&#38468;&#20214;</div>
        <button type="button" class="dw-btn dw-btn-primary dw-full" id="dwDispatchBtn">&#19979;&#21457;&#20219;&#21153;</button>
        </div>
        <div id="dwDispatchUnavailable" class="dw-empty">
          <span id="dwDispatchUnavailableText">&#24403;&#21069;&#20219;&#21153;&#26080;&#19979;&#21457;&#26435;&#38480;</span>
          <div class="dw-button-row dw-dispatch-accept-row">
            <button type="button" class="dw-btn dw-btn-primary" id="dwDispatchAcceptBtn">&#25509;&#25910;</button>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section class="dw-workbench-section" data-tab-panel="process">
    <div class="dw-panel dw-detail-panel">
      <div class="dw-panel-head">
        <h2>&#21453;&#39304;&#19982;&#30830;&#35748;&#23436;&#25104;</h2>
      </div>
      <div id="dwFeedbackSelectedInfo" class="dw-empty">&#35831;&#20174;&#20219;&#21153;&#27744;&#36873;&#25321;&#19968;&#26465;&#20219;&#21153;</div>

      <div id="dwFeedbackProcessBox" class="dw-process-box is-disabled">
        <div class="dw-divider"></div>
        <h3>&#21453;&#39304;&#19982;&#23436;&#25104;&#30830;&#35748;</h3>
        <label>&#21453;&#39304;&#20869;&#23481;<textarea id="dwFeedbackContent" class="dw-textarea"></textarea></label>
        <label>&#38468;&#20214;<input id="dwFeedbackFile" class="dw-input" type="file"></label>
        <input id="dwFeedbackAttachment" type="hidden">
        <div id="dwFeedbackAttachStatus" class="dw-attach-text">&#26410;&#36873;&#25321;&#38468;&#20214;</div>
        <div class="dw-button-row">
          <button type="button" class="dw-btn dw-btn-ghost" id="dwAcceptBtn">&#25509;&#25910;</button>
          <button type="button" class="dw-btn dw-btn-primary" id="dwSubmitFeedbackBtn">&#25552;&#20132;&#21453;&#39304;</button>
        </div>
        <div class="dw-divider"></div>
        <h3>&#23436;&#25104;&#35814;&#24773;</h3>
        <div class="dw-feedback-list" id="dwFeedbackList"></div>
      </div>
    </div>
    </section>
  </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
  <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/pb-modern/dwworkplan/dwworkplan.js?v=${jsversion}"></script>
</body>
</html>
