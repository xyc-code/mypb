<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,form,fileupload";
%>
<!DOCTYPE html>
<html>
<head>
  <title>党委计划 3.0</title>
  <base href="<%=ViewUtil.getRequestPath(request)%>">
  <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
  </jsp:include>
  <link rel="stylesheet" href="static/pb-modern/dwworkplan3/dwworkplan3.css?v=20260708_import_staff_name_31">
</head>
<body>
<div class="pb-modern-page pb-dwworkplan3-page" id="dwWorkPlan3Root">
  <header class="dw-shell-head">
    <div class="dw-brand">
      <span class="dw-brand-mark">党</span>
      <div>
        <h1>党委计划 3.0</h1>
        <p id="dwCurrentRoleText">加载当前角色...</p>
      </div>
    </div>
    <nav class="dw-tabs" aria-label="党委计划 3.0 页面切换">
      <button type="button" class="dw-tab active" data-view="plans">工作计划</button>
      <button type="button" class="dw-tab" data-view="persons">人员树维护</button>
      <button type="button" class="dw-tab" data-view="stats">统计看板</button>
    </nav>
    <div class="dw-head-actions">
      <select id="dwRoleSelect" class="dw-input dw-role-select" title="当前人员节点"></select>
      <button type="button" class="dw-btn dw-btn-ghost dw-page-action dw-action-common" id="dwRefreshBtn">刷新</button>
      <button type="button" class="dw-btn dw-btn-primary dw-page-action dw-action-plans" id="dwCreateTaskBtn">新建任务</button>
    </div>
  </header>

  <main class="dw-shell-body">
    <section class="dw-view active" id="dwViewPlans">
      <div class="dw-filterbar">
        <select id="dwFilterYear" class="dw-input"></select>
        <select id="dwFilterQuarter" class="dw-input">
          <option value="Q1">第一季度</option>
          <option value="Q2">第二季度</option>
          <option value="Q3">第三季度</option>
          <option value="Q4">第四季度</option>
        </select>
        <select id="dwFilterStatus" class="dw-input">
          <option value="">全部状态</option>
          <option value="DRAFT">草稿</option>
          <option value="TODO">待接收</option>
          <option value="DOING">执行中</option>
          <option value="WAIT_CHILD">待下级完成</option>
          <option value="PENDING_CONFIRM">待确认</option>
          <option value="COMPLETED">已完成</option>
          <option value="RETURNED">已退回</option>
        </select>
        <input id="dwFilterKeyword" class="dw-input dw-keyword" type="text" placeholder="搜索标题、接收人、下发人">
        <button type="button" class="dw-btn dw-btn-ghost" id="dwClearSelectionBtn">清空选中</button>
        <button type="button" class="dw-btn dw-btn-ghost dw-page-action dw-action-plans" id="dwDownloadImportTemplateBtn">下载导入模板</button>
        <button type="button" class="dw-btn dw-btn-ghost dw-page-action dw-action-plans" id="dwImportBtn">批量导入</button>
        <button type="button" class="dw-btn dw-btn-primary dw-page-action dw-action-plans" id="dwBatchDispatchBtn">批量下发</button>
        <button type="button" class="dw-btn dw-btn-danger" id="dwBatchDeleteBtn">批量删除</button>
      </div>
      <div class="dw-kpis" id="dwPlanKpis">
        <div class="dw-kpi"><span>任务总数</span><strong id="dwPlanTotal">0</strong></div>
        <div class="dw-kpi"><span>待处理</span><strong id="dwPlanOpen">0</strong></div>
        <div class="dw-kpi"><span>已完成</span><strong id="dwPlanDone">0</strong></div>
        <div class="dw-kpi"><span>逾期</span><strong id="dwPlanOverdue">0</strong></div>
      </div>
      <section class="dw-panel">
        <div class="dw-panel-head">
          <h2>工作计划列表</h2>
          <span class="dw-muted" id="dwSelectedCount">未选择任务</span>
        </div>
        <div class="dw-table-wrap">
          <table class="dw-table dw-task-table" id="dwTaskTable">
            <thead>
            <tr>
              <th class="dw-check-col"><input type="checkbox" id="dwSelectAll"></th>
              <th>任务标题</th>
              <th>工作分类</th>
              <th>层级</th>
              <th>下发人</th>
              <th>接收人</th>
              <th>状态</th>
              <th>截止时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody id="dwTaskTableBody"></tbody>
          </table>
        </div>
      </section>
    </section>

    <section class="dw-view" id="dwViewPersons">
      <div class="dw-grid dw-grid-person">
        <section class="dw-panel">
          <div class="dw-panel-head">
            <h2>组织人员树</h2>
            <div class="dw-panel-tools">
              <button type="button" class="dw-tree-toggle-all" id="dwPersonToggleAllBtn" title="展开全部">
                <span class="dw-tree-toggle-all-icon" aria-hidden="true"></span>
                <span class="dw-tree-all-text">展开全部</span>
              </button>
              <span id="dwPersonCount" class="dw-muted"></span>
            </div>
          </div>
          <div class="dw-table-wrap">
            <table class="dw-table" id="dwPersonTable">
              <thead>
              <tr>
                <th>节点名称</th>
              </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </section>

        <aside class="dw-panel">
          <div class="dw-panel-head">
            <h2>节点信息</h2>
          </div>
          <input id="dwPersonId" type="hidden">
          <label>父节点
            <select id="dwPersonParent" class="dw-input"></select>
          </label>
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
            <button type="button" class="dw-btn dw-btn-danger" id="dwPersonDeleteBtn">删除</button>
          </div>
        </aside>
      </div>
    </section>

    <section class="dw-view" id="dwViewStats">
      <div class="dw-filterbar">
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
                <th>工作分类</th>
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
  </main>

  <div class="dw-modal-mask" id="dwTaskModal" aria-hidden="true">
    <section class="dw-modal dw-modal-lg">
      <div class="dw-modal-head">
        <h2 id="dwTaskModalTitle">新建任务</h2>
        <button type="button" class="dw-icon-btn" data-close-modal="dwTaskModal">×</button>
      </div>
      <div class="dw-form-grid">
        <input id="dwTaskId" type="hidden">
        <input id="dwTaskParentId" type="hidden">
        <input id="dwTaskAttachmentId" type="hidden">
        <label>年度
          <input id="dwTaskYear" class="dw-input" type="number">
        </label>
        <label>季度
          <select id="dwTaskQuarter" class="dw-input">
            <option value="Q1">第一季度</option>
            <option value="Q2">第二季度</option>
            <option value="Q3">第三季度</option>
            <option value="Q4">第四季度</option>
          </select>
        </label>
        <label class="dw-span-2">任务标题
          <input id="dwTaskTitle" class="dw-input" type="text">
        </label>
        <label>工作分类
          <input id="dwTaskWorkCategory" class="dw-input" type="text">
        </label>
        <label>截止时间
          <input id="dwTaskDeadline" class="dw-input" type="date">
        </label>
        <label id="dwTaskReceiverWrap">接收科员
          <select id="dwTaskReceiver" class="dw-input"></select>
        </label>
        <label class="dw-span-2">工作目标
          <textarea id="dwTaskTarget" class="dw-textarea"></textarea>
        </label>
        <label class="dw-span-2">工作内容
          <textarea id="dwTaskContent" class="dw-textarea"></textarea>
        </label>
        <label class="dw-span-2">附件
          <input id="dwTaskFile" class="dw-input" type="file">
          <span class="dw-muted" id="dwTaskFileName"></span>
        </label>
      </div>
      <div class="dw-modal-foot">
        <button type="button" class="dw-btn dw-btn-ghost" data-close-modal="dwTaskModal">取消</button>
        <button type="button" class="dw-btn dw-btn-ghost" id="dwTaskSaveDraftBtn">保存草稿</button>
        <button type="button" class="dw-btn dw-btn-primary" id="dwTaskDirectDispatchBtn">直接下发</button>
        <button type="button" class="dw-btn dw-btn-primary" id="dwTaskDispatchBtn">确认下发</button>
      </div>
    </section>
  </div>

  <div class="dw-modal-mask" id="dwImportModal" aria-hidden="true">
    <section class="dw-modal dw-modal-xl">
      <div class="dw-modal-head">
        <h2>批量导入任务</h2>
        <button type="button" class="dw-icon-btn" data-close-modal="dwImportModal">×</button>
      </div>
      <div class="dw-import-body">
        <div class="dw-import-toolbar">
          <label>年度
            <input id="dwImportYear" class="dw-input" type="number">
          </label>
          <label>季度
            <select id="dwImportQuarter" class="dw-input">
              <option value="Q1">第一季度</option>
              <option value="Q2">第二季度</option>
              <option value="Q3">第三季度</option>
              <option value="Q4">第四季度</option>
            </select>
          </label>
          <label class="dw-import-file">Excel 文件
            <input id="dwImportFile" class="dw-input" type="file" accept=".xls,.xlsx">
          </label>
          <button type="button" class="dw-btn dw-btn-primary" id="dwImportPreviewBtn">上传校验</button>
        </div>
        <div class="dw-import-summary" id="dwImportSummary">
          <span>总数：0</span>
          <span>可导入：0</span>
          <span>错误：0</span>
          <span>警告：0</span>
        </div>
        <div class="dw-table-wrap dw-import-table-wrap">
          <table class="dw-table dw-import-table">
            <thead>
            <tr>
              <th>行号</th>
              <th>状态</th>
              <th>任务标题</th>
              <th>工作分类</th>
              <th>工作目标</th>
              <th>工作内容</th>
              <th>截止日期</th>
              <th>接收科员</th>
              <th>校验信息</th>
            </tr>
            </thead>
            <tbody id="dwImportPreviewBody">
            <tr><td colspan="9"><div class="dw-empty">请选择 Excel 后上传校验</div></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="dw-modal-foot">
        <button type="button" class="dw-btn dw-btn-ghost" data-close-modal="dwImportModal">取消</button>
        <button type="button" class="dw-btn dw-btn-ghost" id="dwImportSaveDraftsBtn" disabled>保存为草稿</button>
        <button type="button" class="dw-btn dw-btn-primary" id="dwImportDispatchBtn" disabled>批量下发</button>
      </div>
    </section>
  </div>

  <div class="dw-modal-mask" id="dwFeedbackModal" aria-hidden="true">
    <section class="dw-modal">
      <div class="dw-modal-head">
        <h2>任务反馈</h2>
        <button type="button" class="dw-icon-btn" data-close-modal="dwFeedbackModal">×</button>
      </div>
      <input id="dwFeedbackTaskId" type="hidden">
      <input id="dwFeedbackAttachmentId" type="hidden">
      <input id="dwFeedbackPreparedId" type="hidden">
      <label>反馈内容
        <textarea id="dwFeedbackContent" class="dw-textarea"></textarea>
      </label>
      <label>附件
        <input id="dwFeedbackFile" class="dw-input" type="file">
        <span class="dw-muted" id="dwFeedbackFileName"></span>
      </label>
      <div class="dw-modal-foot">
        <button type="button" class="dw-btn dw-btn-ghost" data-close-modal="dwFeedbackModal">取消</button>
        <button type="button" class="dw-btn dw-btn-primary" id="dwFeedbackSubmitBtn">提交反馈</button>
      </div>
    </section>
  </div>

  <div class="dw-modal-mask" id="dwDetailModal" aria-hidden="true">
    <section class="dw-modal dw-modal-lg">
      <div class="dw-modal-head">
        <h2>任务详情</h2>
        <button type="button" class="dw-icon-btn" data-close-modal="dwDetailModal">×</button>
      </div>
      <div id="dwTaskDetailBody" class="dw-detail-body"></div>
    </section>
  </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
  <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/h5/echarts5.3.1/dist/echarts.min.js"></script>
<script src="static/pb-modern/dwworkplan3/dwworkplan3.js?v=20260708_import_staff_name_31"></script>
</body>
</html>
