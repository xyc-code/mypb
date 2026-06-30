<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
  <title>党委计划 3.0</title>
  <base href="<%=ViewUtil.getRequestPath(request)%>">
  <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
  </jsp:include>
  <link rel="stylesheet" href="static/pb-modern/dwworkplan3/dwworkplan3.css?v=${jsversion}">
</head>
<body>
<div class="pb-modern-page pb-dwworkplan3-page" data-page="index">
  <div class="dw-topbar">
    <div>
      <h1>党委计划 3.0</h1>
      <p id="dwUserText">加载当前用户...</p>
    </div>
    <div class="dw-actions">
      <button type="button" class="dw-btn dw-btn-ghost" id="dwRefreshBtn">刷新</button>
    </div>
  </div>

  <div class="dw-main-nav">
    <button type="button" class="dw-main-nav-btn is-active" data-main-tab="workbench">工作计划</button>
    <button type="button" class="dw-main-nav-btn" data-main-tab="personnel">人员配置</button>
    <button type="button" class="dw-main-nav-btn" data-main-tab="statistics">统计看板</button>
  </div>

  <section class="dw-main-section is-active" data-main-panel="workbench">
    <div class="dw-actions dw-workbench-filter">
      <select id="dwBatchSelect" class="dw-input"></select>
      <select id="dwStatusFilter" class="dw-input">
        <option value="">全部状态</option>
        <option value="DRAFT">草稿</option>
        <option value="TODO">待接收</option>
        <option value="DOING">执行中</option>
        <option value="WAIT_CHILD">待下级完成</option>
        <option value="PENDING_CONFIRM">待确认</option>
        <option value="COMPLETED">已完成</option>
        <option value="RETURNED">已退回</option>
      </select>
    </div>

    <div class="dw-flowbar dw-workbench-tabs">
      <button type="button" class="dw-flow-step is-active" data-tab="batch">季度批次</button>
      <button type="button" class="dw-flow-step" data-tab="tasks">任务池<span id="dwTaskNoticeBadge" class="dw-tab-badge"></span></button>
      <button type="button" class="dw-flow-step" data-tab="dispatch" id="dwDispatchTab">下发任务</button>
      <button type="button" class="dw-flow-step" data-tab="process">反馈与确认完成</button>
    </div>

    <div class="dw-workbench-stage">
      <section class="dw-workbench-section is-active" data-tab-panel="batch">
        <div class="dw-panel dw-create-panel">
          <div class="dw-panel-head"><h2>季度批次</h2></div>
          <div class="dw-form-grid">
            <label>年度<input id="dwYear" class="dw-input" type="number" min="2000" max="2100"></label>
            <label>季度
              <select id="dwQuarter" class="dw-input">
                <option value="Q1">第一季度</option>
                <option value="Q2">第二季度</option>
                <option value="Q3">第三季度</option>
                <option value="Q4">第四季度</option>
              </select>
            </label>
          </div>
          <button type="button" class="dw-btn dw-btn-primary dw-full dw-party-only" id="dwCreateBatchBtn">创建/选择批次</button>
          <button type="button" class="dw-btn dw-btn-danger dw-full dw-batch-delete-btn dw-party-only" id="dwDeleteBatchBtn">删除当前批次</button>

          <div id="dwRootTaskBox" class="dw-party-only">
            <div class="dw-divider"></div>
            <div class="dw-panel-head"><h2>新建党委任务</h2></div>
            <label>任务标题<input id="dwRootTitle" class="dw-input" type="text"></label>
            <label>完成期限<input id="dwRootDeadline" class="dw-input" type="date"></label>
            <label>目标要求<textarea id="dwRootTarget" class="dw-textarea"></textarea></label>
            <label>任务内容<textarea id="dwRootContent" class="dw-textarea dw-textarea-lg"></textarea></label>
            <label>附件<input id="dwRootFile" class="dw-input" type="file"></label>
            <input id="dwRootAttachment" type="hidden">
            <div id="dwRootAttachStatus" class="dw-attach-text">未选择附件</div>
            <button type="button" class="dw-btn dw-btn-primary dw-full" id="dwSaveRootBtn">保存党委任务</button>
          </div>
        </div>
      </section>

      <section class="dw-workbench-section" data-tab-panel="tasks">
        <div class="dw-panel dw-list-panel">
          <div class="dw-panel-head">
            <h2>任务池<span id="dwTaskPanelNotice" class="dw-title-badge"></span></h2>
            <span id="dwTaskCount" class="dw-muted"></span>
          </div>
          <div class="dw-table-wrap">
            <table class="dw-table" id="dwTaskTable">
              <thead>
              <tr>
                <th>层级</th>
                <th>标题</th>
                <th>下发人</th>
                <th>接收人</th>
                <th>期限</th>
                <th>状态</th>
                <th>处理</th>
              </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="dw-workbench-section" data-tab-panel="dispatch">
        <div class="dw-panel dw-detail-panel">
          <div class="dw-panel-head"><h2>下发任务</h2></div>
          <div id="dwSelectedInfo" class="dw-empty">请从任务池选择一条任务</div>
          <div id="dwDispatchProcessBox" class="dw-process-box is-disabled">
            <div class="dw-divider"></div>
            <div id="dwDispatchBox">
              <h3>下发给下级</h3>
              <label>接收人<select id="dwReceiverSelect" class="dw-input"></select></label>
              <label>标题<input id="dwChildTitle" class="dw-input" type="text"></label>
              <label>完成期限<input id="dwChildDeadline" class="dw-input" type="date"></label>
              <label>目标要求<textarea id="dwChildTarget" class="dw-textarea"></textarea></label>
              <label>任务内容<textarea id="dwChildContent" class="dw-textarea"></textarea></label>
              <label>附件<input id="dwChildFile" class="dw-input" type="file"></label>
              <input id="dwChildAttachment" type="hidden">
              <div id="dwChildAttachStatus" class="dw-attach-text">未选择附件</div>
              <button type="button" class="dw-btn dw-btn-primary dw-full" id="dwDispatchBtn">下发任务</button>
            </div>
            <div id="dwDispatchUnavailable" class="dw-empty">
              <span id="dwDispatchUnavailableText">当前任务无下发权限</span>
              <div class="dw-button-row dw-dispatch-accept-row">
                <button type="button" class="dw-btn dw-btn-primary" id="dwDispatchAcceptBtn">接收</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dw-workbench-section" data-tab-panel="process">
        <div class="dw-panel dw-detail-panel">
          <div class="dw-panel-head"><h2>反馈与确认完成</h2></div>
          <div id="dwFeedbackSelectedInfo" class="dw-empty">请从任务池选择一条任务</div>
          <div id="dwFeedbackProcessBox" class="dw-process-box is-disabled">
            <div class="dw-divider"></div>
            <h3>反馈与完成确认</h3>
            <label>反馈内容<textarea id="dwFeedbackContent" class="dw-textarea"></textarea></label>
            <label>附件<input id="dwFeedbackFile" class="dw-input" type="file"></label>
            <input id="dwFeedbackAttachment" type="hidden">
            <div id="dwFeedbackAttachStatus" class="dw-attach-text">未选择附件</div>
            <div class="dw-button-row">
              <button type="button" class="dw-btn dw-btn-ghost" id="dwAcceptBtn">接收</button>
              <button type="button" class="dw-btn dw-btn-primary" id="dwSubmitFeedbackBtn">提交反馈</button>
            </div>
            <div class="dw-divider"></div>
            <h3>完成详情</h3>
            <div class="dw-feedback-list" id="dwFeedbackList"></div>
          </div>
        </div>
      </section>
    </div>
  </section>

  <section class="dw-main-section" data-main-panel="personnel">
    <div class="dw-grid dw-grid-person">
      <section class="dw-panel">
        <div class="dw-panel-head">
          <h2>组织人员树</h2>
          <div class="dw-panel-tools">
            <button type="button" class="dw-tree-toggle-all" id="dwPersonToggleAllBtn" title="展开全部">
              <span class="dw-tree-toggle-all-icon" aria-hidden="true"></span>
              <span class="dw-tree-all-text">展开全部</span>
            </button>
            <button type="button" class="dw-btn dw-btn-ghost" id="dwPersonRefreshBtn">刷新</button>
            <span id="dwPersonCount" class="dw-muted"></span>
          </div>
        </div>
        <div class="dw-table-wrap">
          <table class="dw-table" id="dwPersonTable">
            <thead>
            <tr>
              <th>层级名称</th>
              <th>用户</th>
              <th>角色</th>
              <th>父节点</th>
              <th>排序</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>

      <aside class="dw-panel">
        <div class="dw-panel-head"><h2>节点信息</h2></div>
        <input id="dwPersonId" type="hidden">
        <label>父节点<select id="dwPersonParent" class="dw-input"></select></label>
        <label>节点名称<input id="dwPersonNodeName" class="dw-input" type="text"></label>
        <label>用户
          <input id="dwPersonUserId" type="hidden">
          <span class="dw-user-picker">
            <input id="dwPersonUserName" class="dw-input" type="text" readonly="readonly" placeholder="请选择用户">
            <button type="button" class="dw-btn dw-btn-ghost" id="dwPersonUserPickBtn">选择</button>
          </span>
        </label>
        <label>角色
          <select id="dwPersonRole" class="dw-input">
            <option value="PARTY_SENDER">党委计划下发者</option>
            <option value="DEPT_MINISTER">部长</option>
            <option value="OFFICE_DIRECTOR">室主任</option>
            <option value="STAFF">科员</option>
          </select>
        </label>
        <label>排序<input id="dwPersonSort" class="dw-input" type="number"></label>
        <label>备注<textarea id="dwPersonRemark" class="dw-textarea"></textarea></label>
        <div class="dw-button-row">
          <button type="button" class="dw-btn dw-btn-primary" id="dwPersonSaveBtn">保存</button>
          <button type="button" class="dw-btn dw-btn-danger" id="dwPersonDeleteBtn">停用</button>
        </div>
      </aside>
    </div>
  </section>

  <section class="dw-main-section" data-main-panel="statistics">
    <div class="dw-actions dw-stats-filter">
      <select id="dwStatsBatchSelect" class="dw-input"></select>
      <button type="button" class="dw-btn dw-btn-ghost" id="dwStatsRefreshBtn">刷新统计</button>
    </div>
    <div class="dw-kpis">
      <div class="dw-kpi"><span>任务总数</span><strong id="dwKpiTotal">0</strong></div>
      <div class="dw-kpi"><span>已完成</span><strong id="dwKpiDone">0</strong></div>
      <div class="dw-kpi"><span>待确认</span><strong id="dwKpiPending">0</strong></div>
      <div class="dw-kpi"><span>逾期</span><strong id="dwKpiOverdue">0</strong></div>
    </div>
    <div class="dw-grid dw-grid-stats">
      <section class="dw-panel">
        <div class="dw-panel-head"><h2>状态分布</h2></div>
        <div id="dwStatusChart" class="dw-chart"></div>
      </section>
      <section class="dw-panel">
        <div class="dw-panel-head"><h2>层级推进</h2></div>
        <div id="dwLevelChart" class="dw-chart"></div>
      </section>
      <section class="dw-panel">
        <div class="dw-panel-head"><h2>逾期层级</h2></div>
        <div id="dwOverdueChart" class="dw-chart"></div>
      </section>
      <section class="dw-panel">
        <div class="dw-panel-head"><h2>最近任务</h2></div>
        <div class="dw-table-wrap">
          <table class="dw-table" id="dwRecentTable">
            <thead>
            <tr>
              <th>层级</th>
              <th>标题</th>
              <th>接收人</th>
              <th>状态</th>
              <th>期限</th>
            </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
    </div>
  </section>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
  <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/h5/echarts5.3.1/dist/echarts.min.js"></script>
<script src="static/pb-modern/dwworkplan3/dwworkplan3.js?v=${jsversion}"></script>
</body>
</html>
