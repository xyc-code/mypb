(function ($, echarts) {
  "use strict";

  if (!$) {
    return;
  }

  var API_BASE = "platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/";
  var TASK_ATTACHMENT_ELEMENT_ID = "dwTaskAttachment";
  var FEEDBACK_ATTACHMENT_ELEMENT_ID = "dwFeedbackAttachment";
  var TASK_ATTACHMENT_TABLE = "DYN_DW_PLAN3_TASK";
  var FEEDBACK_ATTACHMENT_TABLE = "DYN_DW_PLAN3_FEEDBACK";
  var taskSearchTimer = null;

  var ROLE_LABEL = {
    PARTY_SENDER: "党委计划下发者",
    DEPT_MINISTER: "部长",
    OFFICE_DIRECTOR: "室主任",
    STAFF: "科员"
  };

  var LEVEL_LABEL = {
    PARTY: "党委",
    DEPT: "部门",
    OFFICE: "科室",
    STAFF: "科员"
  };

  var STATUS_LABEL = {
    DRAFT: "草稿",
    TODO: "待接收",
    DOING: "执行中",
    WAIT_CHILD: "待下级完成",
    PENDING_CONFIRM: "待确认",
    COMPLETED: "已完成",
    RETURNED: "已退回"
  };

  var STATUS_BADGE = {
    DRAFT: "dw-badge-draft",
    TODO: "dw-badge-todo",
    DOING: "dw-badge-doing",
    WAIT_CHILD: "dw-badge-wait",
    PENDING_CONFIRM: "dw-badge-pending",
    COMPLETED: "dw-badge-done",
    RETURNED: "dw-badge-returned"
  };

  var NEXT_ROLE = {
    PARTY_SENDER: "DEPT_MINISTER",
    DEPT_MINISTER: "OFFICE_DIRECTOR",
    OFFICE_DIRECTOR: "STAFF"
  };

  var state = {
    user: null,
    roles: [],
    currentNodeId: "",
    persons: [],
    personById: {},
    expandedPersonIds: {},
    selectedPersonId: "",
    batches: [],
    batchById: {},
    receivers: [],
    tasks: [],
    importRows: [],
    selectedTaskIds: {},
    expandedTaskIds: {},
    currentView: "plans",
    charts: {}
  };

  $(init);

  function init() {
    prepareDynamicDom();
    bindEvents();
    setDefaultTaskDate();
    loadAll();
  }

  function prepareDynamicDom() {
    if (!$("#dwFilterPeriod").length) {
      $("#dwFilterYear,#dwFilterQuarter").hide();
      $("#dwFilterYear").before('<select id="dwFilterPeriod" class="dw-input dw-period-select"></select>');
    }
    if (!$("#dwPlanNoticeBadge").length) {
      $('.dw-tab[data-view="plans"]').append(' <span id="dwPlanNoticeBadge" class="dw-tab-badge">0</span>');
    }
    $("#dwBatchDeleteBtn").text("\u5220\u9664");
    $("#dwPersonTable thead tr").html("<th>\u8282\u70b9\u540d\u79f0</th>");
    replaceFileInput("dwTaskFile", "dwTaskAttachment");
    replaceFileInput("dwFeedbackFile", "dwFeedbackAttachment");
    if (!$("#dwTaskParentAttachment").length) {
      $("#dwTaskAttachment").before('<div id="dwTaskParentAttachmentWrap" class="dw-attachment-section" style="display:none"><div class="dw-section-title">\u4e0a\u7ea7\u4e0b\u53d1\u9644\u4ef6</div><div id="dwTaskParentAttachment" class="dw-platform-attachment dw-platform-attachment-readonly"></div></div>');
    }
    if (!$("#dwFeedbackTaskSummary").length) {
      $("#dwFeedbackTaskId").after('<div id="dwFeedbackTaskSummary" class="dw-feedback-task-summary"></div><div id="dwFeedbackUpperAttachmentWrap" class="dw-attachment-section" style="display:none"><div class="dw-section-title">\u4e0a\u7ea7\u4e0b\u53d1\u9644\u4ef6</div><div id="dwFeedbackUpperAttachmentLegacy"></div><div id="dwFeedbackUpperAttachment" class="dw-platform-attachment dw-platform-attachment-readonly"></div></div><div id="dwFeedbackTaskAttachmentWrap" class="dw-attachment-section"><div class="dw-section-title">\u4efb\u52a1\u9644\u4ef6</div><div id="dwFeedbackTaskAttachment" class="dw-platform-attachment dw-platform-attachment-readonly"></div></div>');
      $("#dwFeedbackAttachment").before('<div id="dwFeedbackHistory" class="dw-feedback-history"></div><div class="dw-section-title">\u53cd\u9988\u9644\u4ef6</div>');
    }
  }

  function replaceFileInput(inputId, attachmentId) {
    var $input = $("#" + inputId);
    if (!$input.length || $("#" + attachmentId).length) {
      return;
    }
    $input.replaceWith('<div id="' + attachmentId + '" class="dw-platform-attachment"></div>');
  }

  function bindEvents() {
    $(".pb-dwworkplan3-page").on("click", ".dw-tab", function () {
      switchView($(this).attr("data-view"));
    });
    $("#dwRefreshBtn").on("click", loadAll);
    $("#dwRoleSelect").on("change", function () {
      state.currentNodeId = this.value;
      renderCurrentRole();
      updateCreateButton();
      loadReceivers(renderTaskTable);
    });
    $("#dwDownloadImportTemplateBtn").on("click", downloadImportTemplate);
    $("#dwImportBtn").on("click", openImportModal);
    $("#dwBatchDispatchBtn").on("click", batchDispatchTasks);
    $("#dwImportPreviewBtn").on("click", previewImport);
    $("#dwImportSaveDraftsBtn").on("click", function () {
      persistImportRows("api/import/saveDrafts", "确定将校验通过的行保存为草稿吗？", "已保存草稿");
    });
    $("#dwImportDispatchBtn").on("click", function () {
      persistImportRows("api/import/directDispatch", "确定批量下发校验通过的任务吗？", "已批量下发");
    });
    $("#dwCreateTaskBtn").on("click", openCreateTask);
    $("#dwFilterPeriod,#dwFilterStatus").on("change", function () {
      triggerTaskSearch(0);
    });
    $("#dwFilterKeyword").on("input", function () {
      triggerTaskSearch(300);
    });
    $("#dwSelectAll").on("change", function () {
      var checked = this.checked;
      $("#dwTaskTableBody .dw-row-check").each(function () {
        this.checked = checked;
        setSelectedTask(this.value, checked);
      });
      renderTaskTableSelection();
    });
    $("#dwTaskTableBody").on("click", "tr[data-task-id]", function (event) {
      if ($(event.target).closest("button,a,input").length) {
        return;
      }
      var id = $(this).attr("data-task-id");
      var checked = !state.selectedTaskIds[id];
      setSelectedTask(id, checked);
      renderTaskTableSelection();
    });
    $("#dwTaskTableBody").on("change", ".dw-row-check", function (event) {
      event.stopPropagation();
      setSelectedTask(this.value, this.checked);
      renderTaskTableSelection();
    });
    $("#dwTaskTableBody").on("click", "[data-task-action]", function (event) {
      event.stopPropagation();
      handleTaskAction($(this).attr("data-task-action"), $(this).attr("data-task-id"));
    });
    $("#dwTaskTableBody").on("click", ".dw-task-toggle", function (event) {
      event.stopPropagation();
      var id = $(this).attr("data-task-id");
      state.expandedTaskIds[id] = state.expandedTaskIds[id] === false;
      renderTaskTable();
    });
    $("#dwClearSelectionBtn").on("click", function () {
      state.selectedTaskIds = {};
      renderTaskTableSelection();
    });
    $("#dwBatchDeleteBtn").on("click", batchDeleteTasks);
    $("[data-close-modal]").on("click", function () {
      closeModal($(this).attr("data-close-modal"));
    });
    $(".dw-modal-mask").on("click", function (event) {
      if (event.target === this) {
        closeModal(this.id);
      }
    });
    $("#dwTaskSaveDraftBtn").on("click", saveTaskDraft);
    $("#dwTaskDirectDispatchBtn").on("click", directDispatchRoot);
    $("#dwTaskDispatchBtn").on("click", dispatchChildTask);
    $("#dwFeedbackSubmitBtn").on("click", submitFeedback);
    $("#dwPersonToggleAllBtn").on("click", toggleAllPersons);
    $("#dwPersonTable").on("click", "tr[data-person-id]", function (event) {
      if ($(event.target).closest("button").length) {
        return;
      }
      selectPerson($(this).attr("data-person-id"));
    });
    $("#dwPersonTable").on("click", ".dw-tree-toggle", function (event) {
      event.stopPropagation();
      var id = $(this).attr("data-person-id");
      state.expandedPersonIds[id] = !state.expandedPersonIds[id];
      renderPersons();
    });
    $("#dwPersonTable").on("click", "[data-person-action]", function (event) {
      event.stopPropagation();
      handlePersonAction($(this).attr("data-person-action"), $(this).attr("data-person-id"));
    });
    $("#dwPersonUserPickBtn").on("click", openPersonUserSelect);
    $("#dwPersonSaveBtn").on("click", savePerson);
    $("#dwPersonDeleteBtn").on("click", deleteCurrentPerson);
    $("#dwStatsBatchSelect").on("change", loadStats);
    $("#dwStatsRefreshBtn").on("click", loadStats);
    $("#dwTaskDetailBody").off("click", "[data-feedback-action]").on("click", "[data-feedback-action]", function () {
      handleFeedbackAction($(this).attr("data-feedback-action"), $(this).attr("data-feedback-id"));
    });
    $(".pb-dwworkplan3-page").on("click", "[data-attachment-action='view']", function (event) {
      event.preventDefault();
      openAttachmentViewer({
        title: $(this).attr("data-attachment-title"),
        businessId: $(this).attr("data-attachment-business-id"),
        tableName: $(this).attr("data-attachment-table"),
        elementId: $(this).attr("data-attachment-element-id"),
        legacyAttachmentId: $(this).attr("data-legacy-attachment-id")
      });
    });
    $(window).on("resize", resizeCharts);
  }

  function api(path, data) {
    return $.ajax({
      url: API_BASE + path,
      type: "POST",
      dataType: "json",
      data: data || {}
    }).then(function (res) {
      if (!res || res.flag !== "success") {
        return $.Deferred().reject(res && res.errorMsg ? res.errorMsg : "操作失败").promise();
      }
      return res;
    }, function () {
      return $.Deferred().reject("网络请求失败").promise();
    });
  }

  function loadAll() {
    api("api/currentUser").done(function (res) {
      state.user = res;
      state.roles = res.roles || [];
      state.currentNodeId = state.currentNodeId || (state.roles[0] && text(state.roles[0].ID));
      renderRoleSelect();
      renderCurrentRole();
      updateCreateButton();
      $.when(loadBatches(), loadPersons()).always(function () {
        loadReceivers(function () {
          loadTasks();
          if (state.currentView === "stats") {
            loadStats();
          }
        });
      });
    }).fail(showError);
  }

  function loadBatches() {
    return api("api/batch/list").done(function (res) {
      state.batches = res.rows || [];
      state.batchById = {};
      $.each(state.batches, function (_, row) {
        state.batchById[text(row.ID)] = row;
      });
      renderBatchSelects();
    }).fail(showError);
  }

  function loadPersons() {
    return api("api/person/list").done(function (res) {
      state.persons = res.rows || [];
      state.personById = {};
      $.each(state.persons, function (_, row) {
        state.personById[text(row.ID)] = row;
        if (!state.expandedPersonIds.hasOwnProperty(text(row.ID))) {
          state.expandedPersonIds[text(row.ID)] = true;
        }
      });
      renderPersons();
    }).fail(showError);
  }

  function loadReceivers(done) {
    api("api/person/receivers").done(function (res) {
      state.receivers = res.rows || [];
      renderReceiverSelect();
      if ($.isFunction(done)) {
        done();
      }
    }).fail(showError);
  }

  function loadTasks() {
    var period = selectedPeriod();
    if (!period.year || !period.quarter) {
      state.tasks = [];
      renderTaskTable();
      renderPlanKpis();
      return;
    }
    api("api/task/list", {
      year: period.year,
      quarter: period.quarter,
      status: $("#dwFilterStatus").val()
    }).done(function (res) {
      state.tasks = res.rows || [];
      renderTaskTable();
      renderPlanKpis();
    }).fail(showError);
  }

  function triggerTaskSearch(delay) {
    if (taskSearchTimer) {
      window.clearTimeout(taskSearchTimer);
    }
    taskSearchTimer = window.setTimeout(function () {
      state.selectedTaskIds = {};
      loadTasks();
    }, delay || 0);
  }

  function switchView(view) {
    if ((view === "persons" || view === "stats") && isStaff()) {
      message("\u79d1\u5458\u53ea\u9700\u67e5\u770b\u5de5\u4f5c\u8ba1\u5212");
      view = "plans";
    }
    state.currentView = view;
    $(".dw-tab").removeClass("active");
    $('.dw-tab[data-view="' + view + '"]').addClass("active");
    $(".dw-view").removeClass("active");
    $("#dwView" + upperFirst(view)).addClass("active");
    updateCreateButton();
    if (view === "stats") {
      loadStats();
    }
    if (view === "persons") {
      renderPersons();
    }
  }

  function renderRoleSelect() {
    var html = "";
    if (!state.roles.length) {
      html = '<option value="">未配置人员节点</option>';
    } else {
      $.each(state.roles, function (_, row) {
        var id = text(row.ID);
        html += '<option value="' + esc(id) + '"' + (id === state.currentNodeId ? " selected" : "") + ">" +
          esc(text(row.NODE_NAME) + " - " + roleLabel(text(row.ROLE_CODE))) + "</option>";
      });
    }
    $("#dwRoleSelect").html(html);
  }

  function renderCurrentRole() {
    var node = currentNode();
    $("#dwCurrentRoleText").text(node ? roleLabel(text(node.ROLE_CODE)) + " / " + text(node.NODE_NAME) : "当前用户未配置 3.0 人员节点");
  }

  function updateCreateButton() {
    $("#dwCreateTaskBtn,#dwDownloadImportTemplateBtn,#dwImportBtn,#dwBatchDispatchBtn").toggle(isParty() && state.currentView === "plans");
    $("#dwBatchDeleteBtn").toggle(isParty() && state.currentView === "plans");
    $('.dw-tab[data-view="persons"]').toggle(!isStaff());
    $('.dw-tab[data-view="stats"]').toggle(!isStaff());
  }

  function renderBatchSelects() {
    var years = {};
    var yearOptions = "";
    var periodOptions = "";
    var visibleBatches = $.grep(state.batches, function (row) {
      return number(row.TASK_COUNT) > 0;
    });
    $.each(visibleBatches, function (_, row) {
      years[text(row.PLAN_YEAR)] = true;
      periodOptions += '<option value="' + esc(text(row.PLAN_YEAR) + "|" + text(row.QUARTER)) + '">' + esc(periodName(row)) + "</option>";
    });
    $.each(Object.keys(years).sort().reverse(), function (_, year) {
      yearOptions += '<option value="' + esc(year) + '">' + esc(year) + "年</option>";
    });
    if (!yearOptions) {
      var currentYear = String(new Date().getFullYear());
      yearOptions = '<option value="' + currentYear + '">' + currentYear + "年</option>";
    }
    if (!periodOptions) {
      periodOptions = '<option value="">\u6682\u65e0\u4efb\u52a1\u6279\u6b21</option>';
    }
    $("#dwFilterYear").html(yearOptions);
    $("#dwFilterPeriod").html(periodOptions);
    if (visibleBatches.length) {
      var latest = visibleBatches[0];
      $("#dwFilterYear").val(text(latest.PLAN_YEAR));
      $("#dwFilterQuarter").val(text(latest.QUARTER));
      $("#dwFilterPeriod").val(text(latest.PLAN_YEAR) + "|" + text(latest.QUARTER));
    } else {
      $("#dwFilterPeriod").val("");
    }

    var batchOptions = "";
    $.each(visibleBatches, function (_, row) {
      batchOptions += '<option value="' + esc(text(row.ID)) + '">' + esc(batchName(row)) + "</option>";
    });
    if (!batchOptions) {
      batchOptions = '<option value="">全部批次</option>';
    }
    $("#dwStatsBatchSelect").html(batchOptions);
    if (!visibleBatches.length) {
      $("#dwStatsBatchSelect").html('<option value="">\u6682\u65e0\u4efb\u52a1\u6279\u6b21</option>');
    }
    if (visibleBatches.length) {
      $("#dwStatsBatchSelect").val(text(visibleBatches[0].ID));
    }
  }

  function renderReceiverSelect(selectedId, selectedUserId) {
    var options = '<option value="">请选择接收对象</option>';
    var selectedDone = false;
    $.each(state.receivers, function (_, row) {
      var userIds = splitPersonList(row.USER_ID);
      var userNames = splitPersonList(row.USER_NAME);
      if (!userIds.length) {
        options += '<option value="' + esc(text(row.ID)) + '"' + (text(row.ID) === text(selectedId) && !selectedDone ? " selected" : "") +
          ' data-user-id="">' + esc(text(row.NODE_NAME) + " - " + (text(row.USER_NAME) || "-")) + "</option>";
        selectedDone = selectedDone || text(row.ID) === text(selectedId);
        return;
      }
      $.each(userIds, function (index, userId) {
        var userName = userNames[index] || userId;
        var selected = text(row.ID) === text(selectedId) && (!selectedUserId || text(userId) === text(selectedUserId)) && !selectedDone;
        if (selected) {
          selectedDone = true;
        }
        options += '<option value="' + esc(text(row.ID)) + '"' + (selected ? " selected" : "") +
          ' data-user-id="' + esc(text(userId)) + '">' + esc(text(row.NODE_NAME) + " - " + text(userName)) + "</option>";
      });
    });
    $("#dwTaskReceiver").html(options);
  }

  function renderTaskTable() {
    var keyword = $.trim($("#dwFilterKeyword").val()).toLowerCase();
    var rows = filterTasks(keyword);
    var tree = buildTaskTree(rows);
    var html = "";
    if (!rows.length) {
      html = '<tr><td colspan="9"><div class="dw-empty">暂无任务</div></td></tr>';
    } else {
      $.each(tree.roots, function (_, task) {
        html += renderTaskNode(task, 0, tree);
      });
    }
    $("#dwTaskTableBody").html(html);
    renderTaskTableSelection();
    renderPlanKpis();
  }

  function buildTaskTree(rows) {
    var byId = {};
    var children = {};
    var roots = [];
    $.each(rows, function (_, task) {
      var id = text(task.ID);
      byId[id] = task;
      children[id] = children[id] || [];
      if (!state.expandedTaskIds.hasOwnProperty(id)) {
        state.expandedTaskIds[id] = true;
      }
    });
    $.each(rows, function (_, task) {
      var id = text(task.ID);
      var parentId = text(task.PARENT_ID);
      if (parentId && byId[parentId]) {
        children[parentId].push(task);
      } else {
        roots.push(task);
      }
      children[id] = children[id] || [];
    });
    return { byId: byId, children: children, roots: roots };
  }

  function renderTaskNode(task, depth, tree) {
    var id = text(task.ID);
    var children = tree.children[id] || [];
    var expanded = state.expandedTaskIds[id] !== false;
    var overdue = isOverdue(task);
    var notice = text(task.NOTICE_FLAG) === "Y";
    var rowClass = (state.selectedTaskIds[id] ? " selected" : "") + (notice ? " dw-task-notice-row" : "") + (overdue ? " dw-task-overdue-row" : "");
    var html = '<tr data-task-id="' + esc(id) + '" class="' + $.trim(rowClass) + '">';
    html += '<td><input class="dw-row-check" type="checkbox" value="' + esc(id) + '"' + (state.selectedTaskIds[id] ? " checked" : "") + "></td>";
    html += '<td>' + taskTreeCell(task, depth, children.length, expanded, notice) + "</td>";
    html += "<td>" + esc(text(task.WORK_CATEGORY) || "-") + "</td>";
    html += "<td>" + esc(levelLabel(text(task.TASK_LEVEL))) + "</td>";
    html += "<td>" + esc(text(task.SENDER_NAME) || "-") + "</td>";
    html += "<td>" + esc(text(task.RECEIVER_NAME) || "-") + "</td>";
    html += '<td>' + statusBadge(text(task.STATUS)) + (overdue ? ' <span class="dw-badge dw-badge-overdue">逾期</span>' : "") + "</td>";
    html += "<td>" + esc(dateOnly(task.PLAN_DEADLINE) || "-") + "</td>";
    html += '<td><div class="dw-actions">' + taskActions(task) + "</div></td>";
    html += "</tr>";
    if (expanded) {
      $.each(children, function (_, child) {
        html += renderTaskNode(child, depth + 1, tree);
      });
    }
    return html;
  }

  function taskTreeCell(task, depth, childCount, expanded, notice) {
    var id = text(task.ID);
    var icon = childCount ? (expanded ? "▾" : "▸") : "•";
    var toggleClass = childCount ? "dw-task-toggle" : "dw-task-toggle is-leaf";
    var html = '<div class="dw-task-cell" style="padding-left:' + (depth * 22) + 'px">';
    html += '<button type="button" class="' + toggleClass + '" data-task-id="' + esc(id) + '">' + icon + "</button>";
    html += '<div><div class="dw-task-title">' + esc(text(task.TITLE));
    if (notice) {
      html += ' <span class="dw-task-notice">待处理</span>';
    }
    html += "</div>";
    if (childCount) {
      html += '<div class="dw-muted">' + childCount + " 个下级任务</div>";
    }
    html += "</div></div>";
    return html;
  }

  function filterTasks(keyword) {
    var status = $("#dwFilterStatus").val();
    return $.grep(state.tasks, function (task) {
      if (status && text(task.STATUS) !== status) {
        return false;
      }
      if (!keyword) {
        return true;
      }
      return (text(task.TITLE) + " " + text(task.WORK_CATEGORY) + " " + text(task.RECEIVER_NAME) + " " + text(task.SENDER_NAME)).toLowerCase().indexOf(keyword) >= 0;
    });
  }

  function taskActions(task) {
    var id = esc(text(task.ID));
    var html = actionBtn("view", id, "查看");
    if (canEditRoot(task)) {
      html += actionBtn("edit", id, "编辑");
    }
    if (canDispatch(task)) {
      html += actionBtn("dispatch", id, "下发");
    }
    if (canAccept(task)) {
      html += actionBtn("accept", id, "接收");
    }
    if (canTakeBack(task)) {
      html += actionBtn("takeBack", id, "拿回");
    }
    if (canFeedback(task)) {
      html += actionBtn("feedback", id, text(task.TASK_LEVEL) === "STAFF" ? "完成" : "完成/反馈");
    }
    return html;
  }

  function actionBtn(action, id, label, cls) {
    return '<button type="button" class="dw-btn dw-btn-ghost ' + esc(cls || "") + '" data-task-action="' + esc(action) +
      '" data-task-id="' + id + '">' + esc(label) + "</button>";
  }

  function renderTaskTableSelection() {
    $("#dwTaskTableBody tr[data-task-id]").each(function () {
      var id = $(this).attr("data-task-id");
      $(this).toggleClass("selected", !!state.selectedTaskIds[id]);
      $(this).find(".dw-row-check").prop("checked", !!state.selectedTaskIds[id]);
    });
    var count = Object.keys(state.selectedTaskIds).length;
    $("#dwSelectedCount").text(count ? "已选择 " + count + " 项任务" : "未选择任务");
  }

  function renderPlanKpis() {
    var total = state.tasks.length;
    var done = 0;
    var open = 0;
    var overdue = 0;
    var notices = 0;
    $.each(state.tasks, function (_, task) {
      if (text(task.STATUS) === "COMPLETED") {
        done++;
      } else {
        open++;
      }
      if (text(task.NOTICE_FLAG) === "Y") {
        notices++;
      }
      if (isOverdue(task)) {
        overdue++;
      }
    });
    $("#dwPlanTotal").text(total);
    $("#dwPlanOpen").text(open);
    $("#dwPlanDone").text(done);
    $("#dwPlanOverdue").text(overdue);
    $("#dwPlanNoticeBadge").text(notices).toggle(notices > 0);
  }

  function handleTaskAction(action, id) {
    if (action === "view") {
      showTaskDetail(id);
    } else if (action === "edit") {
      openEditTask(id);
    } else if (action === "dispatch") {
      openDispatchTask(id);
    } else if (action === "accept") {
      api("api/task/accept", { id: id }).done(afterTaskChanged).fail(showError);
    } else if (action === "takeBack") {
      confirmBox("确定拿回该任务吗？", function () {
        api("api/task/takeBack", { id: id }).done(afterTaskChanged).fail(showError);
      });
    } else if (action === "feedback") {
      openFeedback(id);
    } else if (action === "delete") {
      confirmBox("确定删除该任务吗？此操作不可恢复。", function () {
        api("api/task/delete", { id: id }).done(afterTaskChanged).fail(showError);
      });
    }
  }

  function openCreateTask() {
    if (!isParty()) {
      message("只有党委计划下发者可以新建任务");
      return;
    }
    resetTaskModal();
    $("#dwTaskModalTitle").text("新建任务");
    $("#dwTaskReceiverWrap").show().find("label").text("接收部门");
    $("#dwTaskSaveDraftBtn,#dwTaskDirectDispatchBtn").show();
    $("#dwTaskDispatchBtn").hide();
    renderReceiverSelect();
    initTaskUploader("");
    openModal("dwTaskModal");
  }

  function openEditTask(id) {
    var task = findTask(id);
    if (!task || !canEditRoot(task)) {
      message("只有党委草稿任务可以编辑");
      return;
    }
    resetTaskModal();
    fillTaskModal(task);
    $("#dwTaskModalTitle").text("编辑草稿");
    $("#dwTaskSaveDraftBtn").show();
    $("#dwTaskDirectDispatchBtn").show();
    $("#dwTaskDispatchBtn").hide();
    renderReceiverSelect(text(task.DRAFT_DEPT_NODE_ID), text(task.DRAFT_DEPT_USER_ID));
    initTaskUploader(text(task.ID));
    openModal("dwTaskModal");
  }

  function legacyOpenDispatchTaskUnused(id) {
    var task = findTask(id);
    if (!task || !canDispatch(task)) {
      message("当前状态不能下发");
      return;
    }
    resetTaskModal();
    fillTaskModal(task);
    $("#dwTaskParentId").val(id);
    $("#dwTaskModalTitle").text("下发任务");
    $("#dwTaskReceiverWrap").show();
    $("#dwTaskSaveDraftBtn,#dwTaskDirectDispatchBtn").hide();
    $("#dwTaskDispatchBtn").show();
    renderReceiverSelect(text(task.DRAFT_DEPT_NODE_ID), text(task.DRAFT_DEPT_USER_ID));
    initTaskUploader("");
    openModal("dwTaskModal");
  }

  function fillTaskModal(task) {
    $("#dwTaskId").val(text(task.ID));
    $("#dwTaskTitle").val(text(task.TITLE));
    $("#dwTaskWorkCategory").val(text(task.WORK_CATEGORY));
    $("#dwTaskContent").val(text(task.CONTENT));
    $("#dwTaskTarget").val(text(task.TARGET_DESC));
    $("#dwTaskDeadline").val(dateOnly(task.PLAN_DEADLINE));
    $("#dwTaskAttachmentId").val(text(task.ATTACHMENT_ID));
    if (task.BATCH_ID && state.batchById[text(task.BATCH_ID)]) {
      var batch = state.batchById[text(task.BATCH_ID)];
      $("#dwTaskYear").val(text(batch.PLAN_YEAR));
      $("#dwTaskQuarter").val(text(batch.QUARTER));
    }
  }

  function legacyResetTaskModalUnused() {
    $("#dwTaskId,#dwTaskParentId,#dwTaskTitle,#dwTaskWorkCategory,#dwTaskContent,#dwTaskTarget,#dwTaskDeadline,#dwTaskAttachmentId,#dwTaskFileName").val("");
    resetPlatformUploader("dwTaskAttachment");
    setDefaultTaskDate();
  }

  function setDefaultTaskDate() {
    var now = new Date();
    $("#dwTaskYear").val(now.getFullYear());
    var month = now.getMonth() + 1;
    $("#dwTaskQuarter").val(month <= 3 ? "Q1" : month <= 6 ? "Q2" : month <= 9 ? "Q3" : "Q4");
  }

  function saveTaskDraft() {
    var payload = taskPayload();
    if (!payload) {
      return;
    }
    api("api/batch/create", { year: payload.year, quarter: payload.quarter }).done(function (res) {
      payload.batchId = res.id;
      api("api/task/saveRoot", payload).done(function (saved) {
        uploadPlatformFiles("dwTaskAttachment", text(saved.id), TASK_ATTACHMENT_ELEMENT_ID, function () {
          closeModal("dwTaskModal");
          afterTaskChanged();
        });
      }).fail(showError);
    }).fail(showError);
  }

  function directDispatchRoot() {
    var payload = taskPayload();
    if (!payload) {
      return;
    }
    if (!payload.personNodeId) {
      message("请选择接收部门");
      return;
    }
    api("api/batch/create", { year: payload.year, quarter: payload.quarter }).done(function (res) {
      payload.batchId = res.id;
      confirmBox("确定直接下发给选中部门吗？", function () {
        api("api/task/directDispatchRoot", payload).done(function (saved) {
          uploadPlatformFiles("dwTaskAttachment", text(saved.id), TASK_ATTACHMENT_ELEMENT_ID, function () {
            closeModal("dwTaskModal");
            afterTaskChanged();
          });
        }).fail(showError);
      });
    }).fail(showError);
  }

  function downloadImportTemplate() {
    if (!isParty()) {
      message("只有党委计划下发者可以下载导入模板");
      return;
    }
    var period = defaultImportPeriod();
    window.location.href = API_BASE + "api/import/template?year=" + encodeURIComponent(period.year) +
      "&quarter=" + encodeURIComponent(period.quarter);
  }

  function openImportModal() {
    if (!isParty()) {
      message("只有党委计划下发者可以批量导入");
      return;
    }
    resetImportModal();
    openModal("dwImportModal");
  }

  function resetImportModal() {
    var period = defaultImportPeriod();
    $("#dwImportYear").val(period.year);
    $("#dwImportQuarter").val(period.quarter);
    $("#dwImportFile").val("");
    state.importRows = [];
    renderImportPreview({ rows: [], total: 0, importableCount: 0, errorCount: 0, warningCount: 0 });
  }

  function defaultImportPeriod() {
    var period = selectedPeriod();
    if (period.year && period.quarter) {
      return period;
    }
    return { year: String(new Date().getFullYear()), quarter: currentQuarter() };
  }

  function importPeriod() {
    return {
      year: $.trim($("#dwImportYear").val()),
      quarter: $("#dwImportQuarter").val()
    };
  }

  function previewImport() {
    var period = importPeriod();
    var input = document.getElementById("dwImportFile");
    if (!period.year || !period.quarter) {
      message("请选择导入年度和季度");
      return;
    }
    if (!input || !input.files || !input.files.length) {
      message("请选择 Excel 文件");
      return;
    }
    setImportBusy(true);
    var form = new FormData();
    form.append("year", period.year);
    form.append("quarter", period.quarter);
    form.append("file", input.files[0]);
    $.ajax({
      url: API_BASE + "api/import/preview",
      type: "POST",
      dataType: "json",
      data: form,
      processData: false,
      contentType: false
    }).done(function (res) {
      if (!res || res.flag !== "success") {
        showError(res && res.errorMsg ? res.errorMsg : "导入校验失败");
        return;
      }
      state.importRows = res.rows || [];
      renderImportPreview(res);
    }).fail(function () {
      showError("导入校验失败");
    }).always(function () {
      setImportBusy(false);
    });
  }

  function persistImportRows(path, confirmMessage, successMessage) {
    var period = importPeriod();
    var rows = importableImportRows();
    if (!period.year || !period.quarter) {
      message("请选择导入年度和季度");
      return;
    }
    if (!rows.length) {
      message("没有可导入的行");
      return;
    }
    confirmBox(confirmMessage, function () {
      setImportBusy(true);
      api(path, {
        year: period.year,
        quarter: period.quarter,
        rows: JSON.stringify(rows)
      }).done(function (res) {
        message(successMessage + "：" + number(res.count) + " 条");
        closeModal("dwImportModal");
        afterTaskChanged();
      }).fail(showError).always(function () {
        setImportBusy(false);
      });
    });
  }

  function importableImportRows() {
    return $.grep(state.importRows || [], function (row) {
      return text(row.importable) === "Y";
    });
  }

  function setImportBusy(busy) {
    $("#dwImportPreviewBtn,#dwImportSaveDraftsBtn,#dwImportDispatchBtn").prop("disabled", !!busy);
    if (!busy) {
      updateImportActionButtons();
    }
  }

  function updateImportActionButtons() {
    var hasImportable = importableImportRows().length > 0;
    $("#dwImportSaveDraftsBtn,#dwImportDispatchBtn").prop("disabled", !hasImportable);
  }

  function renderImportPreview(data) {
    var rows = data.rows || [];
    var total = number(data.total);
    var importable = number(data.importableCount || data.validCount);
    var errorCount = number(data.errorCount);
    var warningCount = number(data.warningCount);
    $("#dwImportSummary").html(
      "<span>总数：" + total + "</span>" +
      "<span>可导入：" + importable + "</span>" +
      "<span>错误：" + errorCount + "</span>" +
      "<span>警告：" + warningCount + "</span>"
    );
    var html = "";
    if (!rows.length) {
      html = '<tr><td colspan="9"><div class="dw-empty">请选择 Excel 后上传校验</div></td></tr>';
    } else {
      $.each(rows, function (_, row) {
        var rowClass = text(row.status) === "ERROR" ? "dw-import-row-error" : text(row.status) === "WARN" ? "dw-import-row-warn" : "";
        html += '<tr class="' + rowClass + '">';
        html += "<td>" + esc(text(row.rowNumber)) + "</td>";
        html += "<td>" + importStatusBadge(row) + "</td>";
        html += "<td>" + esc(text(row.title) || "-") + "</td>";
        html += "<td>" + esc(text(row.workCategory) || "-") + "</td>";
        html += "<td>" + esc(text(row.planDeadline) || "-") + "</td>";
        html += "<td>" + esc(text(row.deptName) || "-") + "</td>";
        html += "<td>" + esc(text(row.receiverName) || "-") + "</td>";
        html += "<td>" + esc(text(row.receiverLogin) || "-") + "</td>";
        html += "<td>" + importMessages(row) + "</td>";
        html += "</tr>";
      });
    }
    $("#dwImportPreviewBody").html(html);
    updateImportActionButtons();
  }

  function importStatusBadge(row) {
    var status = text(row.status);
    if (status === "ERROR") {
      return '<span class="dw-badge dw-import-error">错误</span>';
    }
    if (status === "WARN") {
      return '<span class="dw-badge dw-import-warn">警告</span>';
    }
    return '<span class="dw-badge dw-import-ok">通过</span>';
  }

  function importMessages(row) {
    var messages = normalizeArray(row.messages);
    var warnings = normalizeArray(row.warnings);
    var html = "";
    $.each(messages, function (_, item) {
      html += '<div class="dw-import-msg is-error">' + esc(item) + "</div>";
    });
    $.each(warnings, function (_, item) {
      html += '<div class="dw-import-msg is-warn">' + esc(item) + "</div>";
    });
    return html || '<span class="dw-muted">可导入</span>';
  }

  function normalizeArray(value) {
    if (!value) {
      return [];
    }
    if ($.isArray(value)) {
      return value;
    }
    return [value];
  }

  function dispatchChildTask() {
    var payload = taskPayload();
    if (!payload) {
      return;
    }
    payload.parentId = $("#dwTaskParentId").val();
    if (!payload.parentId || !payload.personNodeId) {
      message("请选择接收对象");
      return;
    }
    confirmBox("确定下发该任务吗？", function () {
      api("api/task/dispatch", payload).done(function (saved) {
        uploadPlatformFiles("dwTaskAttachment", text(saved.id), TASK_ATTACHMENT_ELEMENT_ID, function () {
          closeModal("dwTaskModal");
          afterTaskChanged();
        });
      }).fail(showError);
    });
  }

  function taskPayload() {
    var receiverId = $("#dwTaskReceiver option:selected").attr("data-user-id") || "";
    var payload = {
      id: $("#dwTaskId").val(),
      year: $.trim($("#dwTaskYear").val()),
      quarter: $("#dwTaskQuarter").val(),
      title: $.trim($("#dwTaskTitle").val()),
      workCategory: $.trim($("#dwTaskWorkCategory").val()),
      content: $.trim($("#dwTaskContent").val()),
      targetDesc: $.trim($("#dwTaskTarget").val()),
      planDeadline: $("#dwTaskDeadline").val(),
      attachmentId: $("#dwTaskAttachmentId").val(),
      personNodeId: $("#dwTaskReceiver").val(),
      receiverId: receiverId,
      draftDeptNodeId: $("#dwTaskReceiver").val(),
      draftDeptUserId: receiverId,
      draftDeptName: $("#dwTaskReceiver option:selected").text()
    };
    if (!payload.year || !payload.quarter || !payload.title || !payload.planDeadline) {
      message("请填写年度、季度、任务标题和截止时间");
      return null;
    }
    return payload;
  }

  function batchDeleteTasks() {
    var ids = Object.keys(state.selectedTaskIds);
    if (!ids.length) {
      message("请先选择任务");
      return;
    }
    var deletableIds = $.grep(ids, function (id) {
      var task = findTask(id);
      return task && canDelete(task);
    });
    if (!deletableIds.length) {
      message("选中的任务当前都不能删除");
      return;
    }
    deletableIds = topSelectedTaskIds(deletableIds);
    confirmBox("确定删除选中的任务吗？只能删除有权限删除的任务。", function () {
      var chain = $.Deferred().resolve().promise();
      $.each(deletableIds, function (_, id) {
        chain = chain.then(function () {
          return api("api/task/delete", { id: id });
        });
      });
      chain.done(function () {
        state.selectedTaskIds = {};
        afterTaskChanged();
      }).fail(showError);
    });
  }

  function batchDispatchTasks() {
    if (!isParty()) {
      message("只有党委计划下发者可以批量下发");
      return;
    }
    var ids = Object.keys(state.selectedTaskIds);
    if (!ids.length) {
      message("请先选择要下发的草稿任务");
      return;
    }
    var dispatchableIds = $.grep(ids, function (id) {
      var task = findTask(id);
      return task && canBatchDispatch(task);
    });
    if (!dispatchableIds.length) {
      message("选中的任务没有可批量下发的草稿");
      return;
    }
    var skipped = ids.length - dispatchableIds.length;
    var confirmMessage = "确定批量下发选中的 " + dispatchableIds.length + " 项草稿任务吗？";
    if (skipped > 0) {
      confirmMessage += " 将自动跳过 " + skipped + " 项不可下发任务。";
    }
    confirmBox(confirmMessage, function () {
      api("api/task/batchDirectDispatch", { ids: dispatchableIds.join(",") }).done(function (res) {
        state.selectedTaskIds = {};
        message("已批量下发 " + (number(res.count) || dispatchableIds.length) + " 项任务");
        afterTaskChanged();
      }).fail(showError);
    });
  }

  function topSelectedTaskIds(ids) {
    var selected = {};
    var result = [];
    $.each(ids, function (_, id) {
      selected[id] = true;
    });
    $.each(ids, function (_, id) {
      var task = findTask(id);
      var parentId = text(task && task.PARENT_ID);
      var coveredByParent = false;
      while (parentId) {
        if (selected[parentId]) {
          coveredByParent = true;
          break;
        }
        var parent = findTask(parentId);
        parentId = text(parent && parent.PARENT_ID);
      }
      if (!coveredByParent) {
        result.push(id);
      }
    });
    return result;
  }

  function legacyOpenFeedbackUnused(id) {
    var task = findTask(id);
    $("#dwFeedbackTaskId").val(id);
    $("#dwFeedbackContent,#dwFeedbackAttachmentId,#dwFeedbackPreparedId,#dwFeedbackFileName").val("");
    if (task) {
      $("#dwFeedbackContent").val(text(task.FEEDBACK_DRAFT_CONTENT));
      $("#dwFeedbackAttachmentId").val(text(task.FEEDBACK_DRAFT_ATTACHMENT_ID));
    }
    resetPlatformUploader("dwFeedbackAttachment");
    initFeedbackUploader("");
    openModal("dwFeedbackModal");
  }

  function submitFeedback() {
    var content = $.trim($("#dwFeedbackContent").val());
    if (!content) {
      message("请填写反馈内容");
      return;
    }
    confirmBox("确定提交反馈给上级确认吗？", function () {
      api("api/feedback/submit", {
        taskId: $("#dwFeedbackTaskId").val(),
        content: content,
        attachmentId: $("#dwFeedbackAttachmentId").val()
      }).done(function (saved) {
        uploadPlatformFiles("dwFeedbackAttachment", text(saved.id), FEEDBACK_ATTACHMENT_ELEMENT_ID, function () {
          closeModal("dwFeedbackModal");
          message("反馈已提交，请等待上级确认");
          afterTaskChanged();
        });
      }).fail(showError);
    });
  }

  function legacyShowTaskDetailUnused(id) {
    var task = findTask(id);
    if (!task) {
      message("任务不存在");
      return;
    }
    api("api/feedback/list", { taskId: id }).done(function (res) {
      var html = '<div class="dw-detail-grid">';
      html += detailItem("任务标题", text(task.TITLE));
      html += detailItem("层级", levelLabel(text(task.TASK_LEVEL)));
      html += detailItem("状态", statusLabel(text(task.STATUS)));
      html += detailItem("截止时间", dateOnly(task.PLAN_DEADLINE) || "-");
      html += detailItem("下发人", text(task.SENDER_NAME) || "-");
      html += detailItem("接收人", text(task.RECEIVER_NAME) || "-");
      html += detailItem("工作分类", text(task.WORK_CATEGORY) || "-");
      html += detailItem("工作内容", text(task.CONTENT) || "-");
      html += detailItem("工作目标", text(task.TARGET_DESC) || "-");
      html += "</div><h2 style=\"margin:18px 0 10px\">反馈记录</h2>";
      html += feedbackHtml(res.rows || []);
      $("#dwTaskDetailBody").html(html);
      openModal("dwDetailModal");
    }).fail(showError);
  }

  function renderUpperAttachmentForFeedback(task) {
    var parentTaskId = text(task.PARENT_TASK_ID) || text(task.PARENT_ID);
    var hasParentAttachment = number(task.PARENT_ATTACHMENT_COUNT) > 0 || text(task.HAS_PARENT_ATTACHMENT) === "Y" || !!text(task.PARENT_ATTACHMENT_ID);
    if (!parentTaskId || !hasParentAttachment) {
      $("#dwFeedbackUpperAttachmentWrap").hide();
      resetPlatformUploader("dwFeedbackUpperAttachment");
      $("#dwFeedbackUpperAttachmentLegacy").empty();
      return;
    }
    $("#dwFeedbackUpperAttachmentWrap").show();
    $("#dwFeedbackUpperAttachmentLegacy").html(legacyAttachmentLink(task.PARENT_ATTACHMENT_ID, "\u70b9\u51fb\u4e0b\u8f7d\u9644\u4ef6"));
    initReadOnlyUploader("dwFeedbackUpperAttachment", parentTaskId, TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
  }

  function legacyFeedbackHtmlUnused(rows) {
    if (!rows.length) {
      return '<div class="dw-empty">暂无反馈</div>';
    }
    var html = '<div class="dw-table-wrap"><table class="dw-table"><thead><tr><th>反馈人</th><th>内容</th><th>结果</th><th>操作</th></tr></thead><tbody>';
    $.each(rows, function (_, row) {
      html += "<tr><td>" + esc(text(row.FEEDBACK_USER_NAME)) + "</td><td>" + esc(text(row.FEEDBACK_CONTENT)) + "</td><td>" +
        esc(feedbackResult(text(row.CONFIRM_RESULT))) + '</td><td><div class="dw-actions">';
      if (text(row.CONFIRM_RESULT) === "PENDING" && text(row.CAN_CONFIRM) === "Y") {
        html += '<button type="button" class="dw-btn dw-btn-primary" data-feedback-action="confirm" data-feedback-id="' + esc(text(row.ID)) + '">确认</button>';
        html += '<button type="button" class="dw-btn dw-btn-danger" data-feedback-action="return" data-feedback-id="' + esc(text(row.ID)) + '">退回</button>';
      }
      html += "</div></td></tr>";
    });
    return html + "</tbody></table></div>";
  }

  $("#dwTaskDetailBody").on("click", "[data-feedback-action]", function () {
    var action = $(this).attr("data-feedback-action");
    var id = $(this).attr("data-feedback-id");
    if (action === "confirm") {
      confirmBox("确定确认该反馈吗？确认后将回填到上级反馈内容。", function () {
        api("api/feedback/confirm", { feedbackId: id }).done(function () {
          closeModal("dwDetailModal");
          message("反馈已确认");
          afterTaskChanged();
        }).fail(showError);
      });
    } else if (action === "return") {
      promptBox("请输入退回意见", function (reason) {
        if (!$.trim(reason)) {
          message("退回意见不能为空");
          return;
        }
        confirmBox("确定退回该反馈吗？", function () {
          api("api/feedback/return", { feedbackId: id, reason: reason }).done(function () {
            closeModal("dwDetailModal");
            message("反馈已退回");
            afterTaskChanged();
          }).fail(showError);
        });
      });
    }
  });

  function renderPersons() {
    var tree = buildPersonTree();
    if (state.selectedPersonId && !state.personById[state.selectedPersonId]) {
      state.selectedPersonId = "";
    }
    if (!state.selectedPersonId && state.persons.length) {
      state.selectedPersonId = text(state.persons[0].ID);
    }
    var html = "";
    $.each(tree.roots, function (_, node) {
      html += renderPersonNode(node, 0);
    });
    $("#dwPersonTable tbody").html(html || '<tr><td><div class="dw-empty">暂无人员树</div></td></tr>');
    $("#dwPersonCount").text(state.persons.length + " 个节点");
    renderPersonParentOptions();
    if (state.selectedPersonId) {
      fillPersonForm(state.selectedPersonId);
    }
  }

  function buildPersonTree() {
    var byParent = {};
    $.each(state.persons, function (_, row) {
      var pid = text(row.PARENT_ID);
      if (!byParent[pid]) {
        byParent[pid] = [];
      }
      byParent[pid].push(row);
    });
    return {
      roots: $.grep(state.persons, function (row) {
        var pid = text(row.PARENT_ID);
        return !pid || !state.personById[pid];
      }),
      children: byParent
    };
  }

  function renderPersonNode(node, depth) {
    var id = text(node.ID);
    var children = $.grep(state.persons, function (row) {
      return text(row.PARENT_ID) === id;
    });
    var expanded = state.expandedPersonIds[id] !== false;
    var parent = state.personById[text(node.PARENT_ID)];
    var selected = state.selectedPersonId === id;
    var html = '<tr class="dw-tree-row' + (children.length && !expanded ? " is-collapsed" : "") + (selected ? " selected is-selected" : "") + '" data-person-id="' + esc(id) + '">';
    html += '<td>' + personTreeCell(node, depth, children.length, expanded) + "</td>";
    html += "</tr>";
    if (expanded) {
      $.each(children, function (_, child) {
        html += renderPersonNode(child, depth + 1);
      });
    }
    return html;
  }

  function personTreeCell(node, depth, childCount, expanded) {
    var indent = depth * 22;
    var icon = childCount ? (expanded ? "▾" : "▸") : "•";
    var toggleClass = childCount ? "dw-tree-toggle" : "dw-tree-toggle is-leaf";
    var html = '<span class="dw-tree-cell" style="padding-left:' + indent + 'px">';
    if (childCount) {
      html += '<button type="button" class="' + toggleClass + '" data-person-id="' + esc(text(node.ID)) + '">' + icon + "</button>";
    } else {
      html += '<button type="button" class="' + toggleClass + '" tabindex="-1">' + icon + "</button>";
    }
    html += '<span class="dw-tree-title">' + esc(text(node.NODE_NAME)) + "</span>";
    if (childCount) {
      html += '<span class="dw-tree-count">' + childCount + "</span>";
    }
    return html + "</span>";
  }

  function renderPersonParentOptions() {
    var selected = $("#dwPersonParent").val();
    var html = '<option value="">无</option>';
    $.each(state.persons, function (_, row) {
      html += '<option value="' + esc(text(row.ID)) + '"' + (text(row.ID) === selected ? " selected" : "") + ">" + esc(text(row.NODE_NAME)) + "</option>";
    });
    $("#dwPersonParent").html(html);
  }

  function fillPersonForm(id) {
    var node = state.personById[id];
    if (!node) {
      return;
    }
    state.selectedPersonId = id;
    $("#dwPersonId").val(id);
    $("#dwPersonParent").val(text(node.PARENT_ID));
    $("#dwPersonNodeName").val(text(node.NODE_NAME));
    $("#dwPersonUserId").val(text(node.USER_ID));
    $("#dwPersonUserName").val(text(node.USER_NAME));
    $("#dwPersonRole").val(text(node.ROLE_CODE));
    $("#dwPersonSort").val(text(node.SORT_NO));
    $("#dwPersonRemark").val(text(node.REMARK));
    $("#dwPersonTable tr").removeClass("selected");
    $('#dwPersonTable tr[data-person-id="' + id + '"]').addClass("selected");
  }

  function selectPerson(id) {
    if (!id || !state.personById[id]) {
      return;
    }
    state.selectedPersonId = id;
    renderPersons();
  }

  function handlePersonAction(action, id) {
    if (action === "addChild") {
      var parent = state.personById[id];
      $("#dwPersonId").val("");
      $("#dwPersonParent").val(id);
      $("#dwPersonNodeName,#dwPersonUserId,#dwPersonUserName,#dwPersonSort,#dwPersonRemark").val("");
      $("#dwPersonRole").val(NEXT_ROLE[text(parent.ROLE_CODE)] || "STAFF");
    } else if (action === "delete") {
      deletePerson(id);
    }
  }

  function openPersonUserSelect() {
    if (typeof H5CommonSelect === "function") {
      var roleCode = $("#dwPersonRole").val();
      new H5CommonSelect({
        type: "userSelect",
        idFiled: "dwPersonUserId",
        textFiled: "dwPersonUserName",
        selectModel: personRoleAllowsMulti(roleCode) ? "multi" : "single"
      });
    } else {
      message("平台用户选择器未加载");
    }
  }

  function savePerson() {
    var roleCode = $("#dwPersonRole").val();
    if (!personRoleAllowsMulti(roleCode) && splitPersonList($("#dwPersonUserId").val()).length > 1) {
      message("\u515a\u59d4\u548c\u79d1\u5458\u8282\u70b9\u53ea\u80fd\u5173\u8054\u4e00\u4e2a\u7528\u6237\uff0c\u90e8\u95e8\u548c\u79d1\u5ba4\u8282\u70b9\u53ef\u4ee5\u5173\u8054\u591a\u4e2a\u7528\u6237");
      return;
    }
    api("api/person/save", {
      id: $("#dwPersonId").val(),
      parentId: $("#dwPersonParent").val(),
      nodeName: $.trim($("#dwPersonNodeName").val()),
      userId: $.trim($("#dwPersonUserId").val()),
      userName: $.trim($("#dwPersonUserName").val()),
      roleCode: roleCode,
      sortNo: $("#dwPersonSort").val(),
      remark: $.trim($("#dwPersonRemark").val()),
      enabled: "Y"
    }).done(function () {
      message("保存成功");
      loadPersons();
    }).fail(showError);
  }

  function deleteCurrentPerson() {
    var id = $("#dwPersonId").val();
    if (!id) {
      message("请选择节点");
      return;
    }
    deletePerson(id);
  }

  function deletePerson(id) {
    confirmBox("确定删除该节点吗？删除后不可恢复。", function () {
      api("api/person/delete", { id: id }).done(function () {
        state.selectedPersonId = "";
        loadPersons();
      }).fail(showError);
    });
  }

  function toggleAllPersons() {
    var collapse = $("#dwPersonToggleAllBtn").data("collapse") === true;
    $.each(state.persons, function (_, row) {
      state.expandedPersonIds[text(row.ID)] = !collapse;
    });
    $("#dwPersonToggleAllBtn").data("collapse", !collapse).find(".dw-tree-all-text").text(collapse ? "展开全部" : "收起全部");
    renderPersons();
  }

  function loadStats() {
    var batchId = $("#dwStatsBatchSelect").val();
    if (!batchId) {
      renderStats({});
      return;
    }
    api("api/stats", { batchId: batchId }).done(function (res) {
      renderStats(res);
    }).fail(showError);
  }

  function renderStats(data) {
    var statusRows = data.byStatus || [];
    var levelRows = data.byLevel || [];
    var overdueRows = data.overdue || [];
    var recentRows = data.recent || [];
    var total = 0;
    var done = 0;
    var pending = 0;
    var overdue = 0;
    $.each(statusRows, function (_, row) {
      var cnt = number(row.CNT);
      total += cnt;
      if (text(row.STATUS) === "COMPLETED") {
        done += cnt;
      }
      if (text(row.STATUS) === "PENDING_CONFIRM") {
        pending += cnt;
      }
    });
    $.each(overdueRows, function (_, row) {
      overdue += number(row.CNT);
    });
    $("#dwKpiTotal").text(total);
    $("#dwKpiDone").text(done);
    $("#dwKpiPending").text(pending);
    $("#dwKpiOverdue").text(overdue);
    renderStatusChart(statusRows);
    renderLevelChart(levelRows);
    renderOverdueChart(overdueRows);
    renderRecent(recentRows);
  }

  function chart(id) {
    if (!echarts) {
      $("#" + id).html('<div class="dw-empty">ECharts 未加载</div>');
      return null;
    }
    if (!state.charts[id]) {
      state.charts[id] = echarts.init(document.getElementById(id));
    }
    return state.charts[id];
  }

  function renderStatusChart(rows) {
    var instance = chart("dwStatusChart");
    if (!instance) {
      return;
    }
    instance.setOption({
      tooltip: { trigger: "item" },
      color: ["#b91c1c", "#dc2626", "#f97316", "#15803d", "#64748b", "#991b1b"],
      series: [{
        type: "pie",
        radius: ["42%", "68%"],
        data: $.map(rows, function (row) {
          return { name: statusLabel(text(row.STATUS)), value: number(row.CNT) };
        })
      }]
    });
  }

  function renderLevelChart(rows) {
    var instance = chart("dwLevelChart");
    if (!instance) {
      return;
    }
    var levels = ["PARTY", "DEPT", "OFFICE", "STAFF"];
    var statuses = ["TODO", "DOING", "WAIT_CHILD", "PENDING_CONFIRM", "COMPLETED", "RETURNED"];
    var data = {};
    $.each(rows, function (_, row) {
      data[text(row.TASK_LEVEL) + "_" + text(row.STATUS)] = number(row.CNT);
    });
    instance.setOption({
      tooltip: { trigger: "axis" },
      legend: { top: 0 },
      grid: { left: 42, right: 20, bottom: 28, top: 44 },
      xAxis: { type: "category", data: $.map(levels, levelLabel) },
      yAxis: { type: "value", minInterval: 1 },
      series: $.map(statuses, function (status) {
        return {
          name: statusLabel(status),
          type: "bar",
          stack: "total",
          data: $.map(levels, function (level) {
            return data[level + "_" + status] || 0;
          })
        };
      })
    });
  }

  function renderOverdueChart(rows) {
    var instance = chart("dwOverdueChart");
    if (!instance) {
      return;
    }
    instance.setOption({
      tooltip: { trigger: "axis" },
      grid: { left: 42, right: 20, bottom: 28, top: 24 },
      xAxis: { type: "category", data: $.map(rows, function (row) { return levelLabel(text(row.TASK_LEVEL)); }) },
      yAxis: { type: "value", minInterval: 1 },
      series: [{ type: "bar", itemStyle: { color: "#b91c1c" }, data: $.map(rows, function (row) { return number(row.CNT); }) }]
    });
  }

  function renderRecent(rows) {
    var html = "";
    if (!rows.length) {
      html = '<tr><td colspan="6"><div class="dw-empty">暂无任务</div></td></tr>';
    } else {
      $.each(rows.slice(0, 8), function (_, row) {
        html += "<tr><td>" + esc(levelLabel(text(row.TASK_LEVEL))) + "</td><td>" + esc(text(row.TITLE)) + "</td><td>" +
          esc(text(row.WORK_CATEGORY) || "-") + "</td><td>" + esc(text(row.RECEIVER_NAME) || "-") + "</td><td>" + statusBadge(text(row.STATUS)) + "</td><td>" +
          esc(dateOnly(row.PLAN_DEADLINE) || "-") + "</td></tr>";
      });
    }
    $("#dwRecentTable tbody").html(html);
  }

  function initTaskUploader(businessId) {
    initPlatformUploader("dwTaskAttachment", businessId, TASK_ATTACHMENT_TABLE, true, TASK_ATTACHMENT_ELEMENT_ID);
  }

  function initFeedbackUploader(businessId) {
    initPlatformUploader("dwFeedbackAttachment", businessId, FEEDBACK_ATTACHMENT_TABLE, true, FEEDBACK_ATTACHMENT_ELEMENT_ID);
  }

  function legacyInitPlatformUploaderUnused(elementId, businessId, tableName) {
    var $el = $("#" + elementId);
    if (!$el.length) {
      return;
    }
    if (!$.fn.uploaderExt) {
      $el.html('<div class="dw-empty">平台附件控件未加载</div>');
      return;
    }
    resetPlatformUploader(elementId);
    $el.uploaderExt({
      formId: businessId || "",
      tableName: tableName,
      secretLevel: "PLATFORM_FILE_SECRET_LEVEL",
      fileCategory: "DW_WORK_PLAN3",
      multiple: true,
      allowPreview: true,
      allowSaveOnlineDisk: true,
      allowUpload: false,
      allowAdd: true,
      allowDelete: true
    });
  }

  function resetPlatformUploader(elementId) {
    var $el = $("#" + elementId);
    if (!$el.length) {
      return;
    }
    $el.removeData("uploaderExt").empty();
  }

  function uploadPlatformFiles(elementId, businessId, logicalElementId, done) {
    var $el = $("#" + elementId);
    if (!$el.length || !businessId || !$.fn.uploaderExt) {
      if ($.isFunction(done)) {
        done();
      }
      return;
    }
    logicalElementId = logicalElementId || elementId;
    done = $.isFunction(done) ? done : function () {};
    var files = [];
    try {
      files = $el.uploaderExt("getUploadFiles") || [];
    } catch (ex) {
      showError("平台附件上传失败：" + ex.message);
      return;
    }
    if (!files.length) {
      done();
      return;
    }
    var finished = false;
    var maskIndex = window.layer && layer.load ? layer.load(2, { shade: [0.12, "#000"] }) : null;
    function closeMask() {
      if (maskIndex !== null && window.layer && layer.close) {
        layer.close(maskIndex);
        maskIndex = null;
      }
    }
    try {
      $el.uploaderExt({
        afterUpload: function () {
          if (finished) {
            return;
          }
          finished = true;
          closeMask();
          done();
        },
        uploadError: function () {
          closeMask();
          showError("平台附件上传失败，请重试");
        }
      });
      $el.uploaderExt("doUpload", businessId, logicalElementId);
    } catch (ex2) {
      closeMask();
      showError("平台附件上传失败：" + ex2.message);
    }
  }

  function uploadFile(input, idField, nameField, businessType) {
    if (!input.files || !input.files.length) {
      return;
    }
    var form = new FormData();
    form.append("file", input.files[0]);
    form.append("businessType", businessType);
    $.ajax({
      url: API_BASE + "api/attachment/upload",
      type: "POST",
      dataType: "json",
      data: form,
      processData: false,
      contentType: false
    }).done(function (res) {
      if (res.flag === "success") {
        $("#" + idField).val(res.id);
        $("#" + nameField).text(input.files[0].name);
      } else {
        showError(res.errorMsg || "附件上传失败");
      }
    }).fail(function () {
      showError("附件上传失败");
    });
  }

  function afterTaskChanged() {
    loadBatches().always(loadTasks);
    if (state.currentView === "stats") {
      loadStats();
    }
  }

  function openModal(id) {
    $("#" + id).addClass("open").attr("aria-hidden", "false");
  }

  function closeModal(id) {
    $("#" + id).removeClass("open").attr("aria-hidden", "true");
  }

  function message(msg) {
    if (window.layer && layer.msg) {
      layer.msg(msg, { skin: "dw-layer-msg" });
    } else if (window.console) {
      window.console.log(msg);
    }
  }

  function showError(msg) {
    message(msg || "操作失败");
  }

  function confirmBox(msg, yes) {
    if (window.layer && layer.confirm) {
      layer.confirm(msg, { icon: 3, title: "确认操作", skin: "dw-layer-dialog" }, function (index) {
        layer.close(index);
        yes();
      });
    } else {
      message("平台确认框未加载，请刷新页面后重试");
    }
  }

  function promptBox(msg, yes) {
    if (window.layer && layer.prompt) {
      layer.prompt({ title: msg, formType: 2, area: ["360px", "120px"], skin: "dw-layer-dialog" }, function (value, index) {
        layer.close(index);
        yes(value);
      });
    } else {
      message("平台输入框未加载，请刷新页面后重试");
    }
  }

  function setSelectedTask(id, checked) {
    if (checked) {
      state.selectedTaskIds[id] = true;
    } else {
      delete state.selectedTaskIds[id];
    }
  }

  function currentNode() {
    return state.personById[state.currentNodeId] || state.roles[0] || null;
  }

  function isParty() {
    var node = currentNode();
    return node && text(node.ROLE_CODE) === "PARTY_SENDER";
  }

  function isStaff() {
    var node = currentNode();
    return node && text(node.ROLE_CODE) === "STAFF";
  }

  function currentUserId() {
    return state.user ? text(state.user.userId) : "";
  }

  function personRoleAllowsMulti(roleCode) {
    return text(roleCode) === "DEPT_MINISTER" || text(roleCode) === "OFFICE_DIRECTOR";
  }

  function splitPersonList(value) {
    var result = [];
    $.each(text(value).split(/[,，;；]/), function (_, item) {
      item = $.trim(item);
      if (item && $.inArray(item, result) === -1) {
        result.push(item);
      }
    });
    return result;
  }

  function canEditRoot(task) {
    return text(task.TASK_LEVEL) === "PARTY" && text(task.STATUS) === "DRAFT" && text(task.SENDER_ID) === currentUserId();
  }

  function canDispatch(task) {
    if (text(task.RECEIVER_ID) !== currentUserId()) {
      return false;
    }
    if (text(task.TASK_LEVEL) === "STAFF") {
      return false;
    }
    if (number(task.CHILD_COUNT) > 0) {
      return false;
    }
    if (text(task.TASK_LEVEL) === "PARTY") {
      return text(task.STATUS) === "DRAFT";
    }
    return text(task.STATUS) === "DOING" || text(task.STATUS) === "RETURNED";
  }

  function canBatchDispatch(task) {
    return isParty() &&
      text(task.TASK_LEVEL) === "PARTY" &&
      text(task.STATUS) === "DRAFT" &&
      text(task.RECEIVER_ID) === currentUserId() &&
      number(task.CHILD_COUNT) === 0 &&
      !!text(task.DRAFT_DEPT_NODE_ID) &&
      !!text(task.DRAFT_DEPT_USER_ID);
  }

  function canAccept(task) {
    return text(task.RECEIVER_ID) === currentUserId() && text(task.STATUS) === "TODO";
  }

  function canTakeBack(task) {
    return text(task.SENDER_ID) === currentUserId() && text(task.STATUS) === "TODO" && !!text(task.PARENT_ID);
  }

  function canFeedback(task) {
    if (text(task.RECEIVER_ID) !== currentUserId()) {
      return false;
    }
    if (text(task.STATUS) !== "DOING" && text(task.STATUS) !== "RETURNED") {
      return false;
    }
    return number(task.CHILD_COUNT) === 0 || number(task.CHILD_OPEN_COUNT) === 0;
  }

  function canDelete(task) {
    return isParty();
  }

  function findTask(id) {
    for (var i = 0; i < state.tasks.length; i++) {
      if (text(state.tasks[i].ID) === text(id)) {
        return state.tasks[i];
      }
    }
    return null;
  }

  function isOverdue(task) {
    var deadline = dateOnly(task.PLAN_DEADLINE);
    return deadline && text(task.STATUS) !== "COMPLETED" && deadline < today();
  }

  function detailItem(label, value, cls) {
    return '<div class="dw-detail-item ' + esc(cls || "") + '"><span>' + esc(label) + "</span><strong>" + esc(value) + "</strong></div>";
  }

  function statusBadge(status) {
    return '<span class="dw-badge ' + esc(STATUS_BADGE[status] || "dw-badge-draft") + '">' + esc(statusLabel(status)) + "</span>";
  }

  function roleLabel(role) {
    return ROLE_LABEL[role] || role || "-";
  }

  function levelLabel(level) {
    return LEVEL_LABEL[level] || level || "-";
  }

  function statusLabel(status) {
    return STATUS_LABEL[status] || status || "-";
  }

  function feedbackResult(value) {
    if (value === "CONFIRMED") {
      return "已确认";
    }
    if (value === "RETURNED") {
      return "已退回";
    }
    if (value === "DRAFT") {
      return "草稿";
    }
    return "待确认";
  }

  function batchName(row) {
    if (!row) {
      return "";
    }
    return text(row.BATCH_NAME) || (text(row.PLAN_YEAR) + "年" + text(row.QUARTER));
  }

  function periodName(row) {
    return text(row.PLAN_YEAR) + "/" + quarterLabel(text(row.QUARTER));
  }

  function quarterLabel(value) {
    if (value === "Q1") {
      return "一季度";
    }
    if (value === "Q2") {
      return "二季度";
    }
    if (value === "Q3") {
      return "三季度";
    }
    if (value === "Q4") {
      return "四季度";
    }
    return value || "";
  }

  function currentQuarter() {
    var month = new Date().getMonth() + 1;
    return month <= 3 ? "Q1" : month <= 6 ? "Q2" : month <= 9 ? "Q3" : "Q4";
  }

  function selectedPeriod() {
    var value = $("#dwFilterPeriod").val();
    if (!value) {
      return { year: "", quarter: "" };
    }
    var parts = value.split("|");
    return { year: parts[0] || "", quarter: parts[1] || "" };
  }

  function openDispatchTask(id) {
    var task = findTask(id);
    if (!task || !canDispatch(task)) {
      message("\u5f53\u524d\u72b6\u6001\u4e0d\u80fd\u4e0b\u53d1");
      return;
    }
    resetTaskModal();
    fillTaskModal(task);
    $("#dwTaskParentId").val(id);
    $("#dwTaskModalTitle").text("\u4e0b\u53d1\u4efb\u52a1");
    $("#dwTaskReceiverWrap").show();
    $("#dwTaskSaveDraftBtn,#dwTaskDirectDispatchBtn").hide();
    $("#dwTaskDispatchBtn").show();
    renderReceiverSelect(text(task.DRAFT_DEPT_NODE_ID), text(task.DRAFT_DEPT_USER_ID));
    if (number(task.TASK_ATTACHMENT_COUNT) > 0 || !!text(task.ATTACHMENT_ID)) {
      $("#dwTaskParentAttachmentWrap").show();
      initReadOnlyUploader("dwTaskParentAttachment", text(task.ID), TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
    } else {
      $("#dwTaskParentAttachmentWrap").hide();
      resetPlatformUploader("dwTaskParentAttachment");
    }
    initTaskUploader("");
    openModal("dwTaskModal");
  }

  function resetTaskModal() {
    $("#dwTaskId,#dwTaskParentId,#dwTaskTitle,#dwTaskWorkCategory,#dwTaskContent,#dwTaskTarget,#dwTaskDeadline,#dwTaskAttachmentId,#dwTaskFileName").val("");
    $("#dwTaskParentAttachmentWrap").hide();
    resetPlatformUploader("dwTaskParentAttachment");
    resetPlatformUploader("dwTaskAttachment");
    setDefaultTaskDate();
  }

  function openFeedback(id) {
    var task = findTask(id);
    if (!task) {
      message("\u4efb\u52a1\u4e0d\u5b58\u5728");
      return;
    }
    $("#dwFeedbackTaskId").val(id);
    $("#dwFeedbackContent,#dwFeedbackAttachmentId,#dwFeedbackPreparedId,#dwFeedbackFileName").val("");
    $("#dwFeedbackContent").val(text(task.FEEDBACK_DRAFT_CONTENT));
    $("#dwFeedbackAttachmentId").val("");
    $("#dwFeedbackTaskSummary").html(taskSummaryHtml(task));
    renderUpperAttachmentForFeedback(task);
    if (number(task.TASK_ATTACHMENT_COUNT) > 0 || !!text(task.ATTACHMENT_ID)) {
      $("#dwFeedbackTaskAttachmentWrap").show();
      initReadOnlyUploader("dwFeedbackTaskAttachment", text(task.ID), TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
    } else {
      $("#dwFeedbackTaskAttachmentWrap").hide();
      resetPlatformUploader("dwFeedbackTaskAttachment");
    }
    resetPlatformUploader("dwFeedbackAttachment");
    initFeedbackUploader("");
    api("api/feedback/list", { taskId: id }).done(function (res) {
      var rows = res.rows || [];
      $("#dwFeedbackHistory").html('<div class="dw-section-title">\u53cd\u9988\u94fe\u8def</div>' + feedbackHtml(rows, "feedbackModal"));
      initFeedbackAttachmentViews(rows, "feedbackModal");
      openModal("dwFeedbackModal");
    }).fail(showError);
  }

  function showTaskDetail(id) {
    var task = findTask(id);
    if (!task) {
      message("\u4efb\u52a1\u4e0d\u5b58\u5728");
      return;
    }
    api("api/feedback/list", { taskId: id }).done(function (res) {
      var rows = res.rows || [];
      var html = taskSummaryHtml(task);
      var parentTaskId = text(task.PARENT_TASK_ID) || text(task.PARENT_ID);
      var hasParentAttachment = parentTaskId && (number(task.PARENT_ATTACHMENT_COUNT) > 0 || text(task.HAS_PARENT_ATTACHMENT) === "Y" || !!text(task.PARENT_ATTACHMENT_ID));
      var hasTaskAttachment = number(task.TASK_ATTACHMENT_COUNT) > 0 || !!text(task.ATTACHMENT_ID);
      if (hasParentAttachment) {
        html += '<div class="dw-section-title">\u4e0a\u7ea7\u4e0b\u53d1\u9644\u4ef6</div><div id="dwDetailUpperAttachmentLegacy">' +
          legacyAttachmentLink(task.PARENT_ATTACHMENT_ID, "\u70b9\u51fb\u4e0b\u8f7d\u9644\u4ef6") +
          '</div><div id="dwDetailUpperAttachment" class="dw-platform-attachment dw-platform-attachment-readonly"></div>';
      }
      if (hasTaskAttachment) {
        html += '<div class="dw-section-title">\u4efb\u52a1\u9644\u4ef6</div><div id="dwDetailTaskAttachment" class="dw-platform-attachment dw-platform-attachment-readonly"></div>';
      }
      html += '<div class="dw-section-title">\u53cd\u9988\u94fe\u8def</div>';
      html += feedbackHtml(rows, "detail");
      $("#dwTaskDetailBody").html(html);
      if (hasParentAttachment) {
        initReadOnlyUploader("dwDetailUpperAttachment", parentTaskId, TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
      }
      if (hasTaskAttachment) {
        initReadOnlyUploader("dwDetailTaskAttachment", text(task.ID), TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
      }
      initFeedbackAttachmentViews(rows, "detail");
      openModal("dwDetailModal");
    }).fail(showError);
  }

  function taskSummaryHtml(task) {
    var html = '<div class="dw-detail-layout dw-task-summary-grid">';
    html += detailItem("\u4efb\u52a1\u6807\u9898", text(task.TITLE), "dw-detail-title-item");
    html += '<div class="dw-detail-meta-row">';
    html += detailItem("\u5c42\u7ea7", levelLabel(text(task.TASK_LEVEL)), "dw-detail-compact-item dw-detail-level-item");
    html += detailItem("\u72b6\u6001", statusLabel(text(task.STATUS)), "dw-detail-compact-item dw-detail-status-item");
    html += detailItem("\u5de5\u4f5c\u5206\u7c7b", text(task.WORK_CATEGORY) || "-", "dw-detail-compact-item dw-detail-category-item");
    html += detailItem("\u622a\u6b62\u65f6\u95f4", dateOnly(task.PLAN_DEADLINE) || "-", "dw-detail-compact-item dw-detail-deadline-item");
    html += detailItem("\u4e0b\u53d1\u4eba", text(task.SENDER_NAME) || "-", "dw-detail-compact-item dw-detail-person-item");
    html += detailItem("\u63a5\u6536\u4eba", text(task.RECEIVER_NAME) || "-", "dw-detail-compact-item dw-detail-person-item");
    html += "</div>";
    html += '<div class="dw-detail-text-grid">';
    html += detailItem("\u5de5\u4f5c\u5185\u5bb9", text(task.CONTENT) || "-", "dw-detail-wide");
    html += detailItem("\u5de5\u4f5c\u76ee\u6807", text(task.TARGET_DESC) || "-", "dw-detail-wide");
    return html + "</div></div>";
  }

  function feedbackHtml(rows, prefix) {
    if (!rows.length) {
      return '<div class="dw-empty">\u6682\u65e0\u53cd\u9988</div>';
    }
    var html = '<div class="dw-feedback-chain">';
    var displayRows = rows.slice().reverse();
    $.each(displayRows, function (index, row) {
      var result = text(row.CONFIRM_RESULT);
      var returnReason = text(row.RETURN_REASON);
      var attachment = feedbackAttachmentButton(row);
      html += '<article class="dw-feedback-card ' + feedbackCardClass(result) + '">';
      html += '<div class="dw-feedback-rail"><span class="dw-feedback-index">' + (index + 1) + "</span></div>";
      html += '<div class="dw-feedback-card-main">';
      html += '<div class="dw-feedback-card-head"><div class="dw-feedback-card-title">' +
        '<span class="dw-feedback-level-tag">' + esc(levelLabel(text(row.TASK_LEVEL))) + "</span>" +
        "<strong>" + esc(text(row.FEEDBACK_USER_NAME) || "-") + "</strong></div>" +
        '<div class="dw-feedback-card-state">' + feedbackResultBadge(result) + "</div></div>";
      html += '<div class="dw-feedback-meta-list"><span><b>\u53cd\u9988\u65f6\u95f4</b>' +
        esc(dateTime(row.FEEDBACK_TIME) || "-") + "</span>";
      if (attachment) {
        html += '<span class="dw-feedback-meta-attachment"><b>\u9644\u4ef6</b>' + attachment + "</span>";
      }
      html += "</div>";
      html += '<div class="dw-feedback-content-block"><span class="dw-feedback-content-label">\u53cd\u9988\u5185\u5bb9</span>' +
        '<div class="dw-feedback-cell-text">' + esc(text(row.FEEDBACK_CONTENT) || "-") + "</div></div>";
      if (returnReason) {
        html += '<div class="dw-feedback-return-block"><span class="dw-feedback-content-label">\u9000\u56de\u539f\u56e0</span>' +
          '<div class="dw-feedback-cell-text">' + esc(returnReason) + "</div></div>";
      }
      html += '<div class="dw-feedback-card-actions">';
      if (text(row.CONFIRM_RESULT) === "PENDING" && text(row.CAN_CONFIRM) === "Y") {
        html += '<button type="button" class="dw-btn dw-task-action-btn dw-action-pass" data-feedback-action="confirm" data-feedback-id="' + esc(text(row.ID)) + '">\u901a\u8fc7</button>';
        html += '<button type="button" class="dw-btn dw-task-action-btn dw-action-return" data-feedback-action="return" data-feedback-id="' + esc(text(row.ID)) + '">\u9000\u56de</button>';
      }
      html += "</div></div></article>";
    });
    return html + "</div>";
  }

  function feedbackCardClass(value) {
    if (value === "CONFIRMED") {
      return "dw-feedback-card-confirmed";
    }
    if (value === "RETURNED") {
      return "dw-feedback-card-returned";
    }
    if (value === "DRAFT") {
      return "dw-feedback-card-draft";
    }
    return "dw-feedback-card-pending";
  }

  function initFeedbackAttachmentViews(rows, prefix) {
    return rows && prefix;
  }

  function feedbackAttachmentButton(row) {
    var hasAttachment = number(row.FEEDBACK_ATTACHMENT_COUNT) > 0 || text(row.HAS_ATTACHMENT) === "Y" || !!text(row.ATTACHMENT_ID);
    if (!hasAttachment) {
      return "";
    }
    return attachmentViewButton({
      title: "\u53cd\u9988\u9644\u4ef6",
      businessId: text(row.ID),
      tableName: FEEDBACK_ATTACHMENT_TABLE,
      elementId: FEEDBACK_ATTACHMENT_ELEMENT_ID,
      legacyAttachmentId: text(row.ATTACHMENT_ID),
      label: "\u67e5\u770b\u9644\u4ef6"
    });
  }

  function attachmentViewButton(options) {
    return '<button type="button" class="dw-attachment-view-btn" data-attachment-action="view"' +
      ' data-attachment-title="' + esc(options.title || "\u9644\u4ef6") + '"' +
      ' data-attachment-business-id="' + esc(options.businessId || "") + '"' +
      ' data-attachment-table="' + esc(options.tableName || "") + '"' +
      ' data-attachment-element-id="' + esc(options.elementId || "") + '"' +
      ' data-legacy-attachment-id="' + esc(options.legacyAttachmentId || "") + '">' +
      esc(options.label || "\u67e5\u770b\u9644\u4ef6") + "</button>";
  }

  function openAttachmentViewer(options) {
    options = options || {};
    var businessId = text(options.businessId);
    var legacyAttachmentId = text(options.legacyAttachmentId);
    if (!businessId && !legacyAttachmentId) {
      message("\u6682\u65e0\u9644\u4ef6");
      return;
    }
    if (!(window.layer && layer.open)) {
      message("\u5e73\u53f0\u5f39\u7a97\u672a\u52a0\u8f7d");
      return;
    }
    var viewerId = "dwAttachmentViewer" + new Date().getTime();
    var legacyHtml = legacyAttachmentLink(legacyAttachmentId, "\u70b9\u51fb\u4e0b\u8f7d\u9644\u4ef6");
    var html = '<div class="dw-attachment-viewer">';
    if (legacyHtml) {
      html += '<div class="dw-attachment-legacy">' + legacyHtml + "</div>";
    }
    if (businessId) {
      html += '<div id="' + viewerId + '" class="dw-platform-attachment dw-platform-attachment-readonly"></div>';
    }
    html += "</div>";
    layer.open({
      type: 1,
      title: options.title || "\u9644\u4ef6",
      area: ["640px", "420px"],
      skin: "dw-layer-dialog",
      content: html,
      success: function () {
        if (businessId) {
          initReadOnlyUploader(viewerId, businessId, options.tableName, options.elementId, {
            showType: "table",
            collapsible: false,
            expand: true,
            allowDownload: true,
            allowAdd: false,
            allowDelete: false,
            allowPreview: false,
            allowSaveOnlineDisk: false
          });
        }
      }
    });
  }

  function handleFeedbackAction(action, id) {
    if (action === "confirm") {
      confirmBox("\u786e\u5b9a\u901a\u8fc7\u8be5\u53cd\u9988\u5417\uff1f\u901a\u8fc7\u540e\u5c06\u56de\u586b\u5230\u4e0a\u7ea7\u53cd\u9988\u5185\u5bb9\u3002", function () {
        api("api/feedback/confirm", { feedbackId: id }).done(function () {
          closeModal("dwDetailModal");
          closeModal("dwFeedbackModal");
          message("\u53cd\u9988\u5df2\u901a\u8fc7");
          afterTaskChanged();
        }).fail(showError);
      });
    } else if (action === "return") {
      returnFeedbackBox(id);
    }
  }

  function returnFeedbackBox(id) {
    if (!(window.layer && layer.open)) {
      message("\u5e73\u53f0\u5f39\u7a97\u672a\u52a0\u8f7d");
      return;
    }
    var html = '<div class="dw-return-box"><textarea id="dwReturnReasonInput" class="dw-textarea dw-return-textarea" placeholder="\u8bf7\u586b\u5199\u9000\u56de\u539f\u56e0"></textarea></div>';
    layer.open({
      type: 1,
      title: "\u9000\u56de\u53cd\u9988",
      area: ["520px", "320px"],
      skin: "dw-layer-dialog",
      content: html,
      btn: ["\u9000\u56de", "\u53d6\u6d88"],
      yes: function (index) {
        var reason = $.trim($("#dwReturnReasonInput").val());
        if (!reason) {
          message("\u9000\u56de\u539f\u56e0\u4e0d\u80fd\u4e3a\u7a7a");
          return;
        }
        api("api/feedback/return", { feedbackId: id, reason: reason }).done(function () {
          layer.close(index);
          closeModal("dwDetailModal");
          closeModal("dwFeedbackModal");
          message("\u53cd\u9988\u5df2\u9000\u56de");
          afterTaskChanged();
        }).fail(showError);
      }
    });
  }

  function initReadOnlyUploader(elementId, businessId, tableName, logicalElementId, options) {
    initPlatformUploader(elementId, businessId, tableName, false, logicalElementId, options);
  }

  function initPlatformUploader(elementId, businessId, tableName, editable, logicalElementId, options) {
    var $el = $("#" + elementId);
    if (!$el.length) {
      return;
    }
    if (!$.fn.uploaderExt) {
      $el.html('<div class="dw-empty">\u5e73\u53f0\u9644\u4ef6\u63a7\u4ef6\u672a\u52a0\u8f7d</div>');
      return;
    }
    resetPlatformUploader(elementId);
    editable = editable !== false;
    $el.uploaderExt($.extend({
      formId: businessId || "",
      elementId: logicalElementId || elementId,
      tableName: tableName,
      secretLevel: "PLATFORM_FILE_SECRET_LEVEL",
      fileCategory: "DW_WORK_PLAN3",
      multiple: true,
      allowPreview: false,
      allowSaveOnlineDisk: false,
      allowUpload: false,
      allowAdd: editable,
      allowDelete: editable
    }, options || {}));
  }

  function legacyAttachmentLink(id, label) {
    id = text(id);
    if (!id) {
      return "";
    }
    return '<a class="dw-attachment-link" href="' + API_BASE + 'api/attachment/download?id=' + encodeURIComponent(id) + '" target="_blank">' + esc(label || "\u4e0b\u8f7d") + "</a>";
  }

  function feedbackResultBadge(value) {
    var cls = "dw-feedback-pending";
    var label = "\u5f85\u786e\u8ba4";
    if (value === "CONFIRMED") {
      cls = "dw-feedback-confirmed";
      label = "\u5df2\u786e\u8ba4";
    } else if (value === "RETURNED") {
      cls = "dw-feedback-returned";
      label = "\u5df2\u9000\u56de";
    } else if (value === "DRAFT") {
      cls = "dw-feedback-draft";
      label = "\u8349\u7a3f";
    }
    return '<span class="dw-feedback-status ' + cls + '">' + label + "</span>";
  }

  function feedbackActionLabel(task) {
    if (text(task.TASK_LEVEL) === "STAFF") {
      return "\u53bb\u5b8c\u6210";
    }
    if (number(task.CHILD_COUNT) > 0 && number(task.CHILD_OPEN_COUNT) === 0) {
      return "\u5411\u4e0a\u7ea7\u53cd\u9988";
    }
    return "\u53bb\u5b8c\u6210";
  }

  function taskActions(task) {
    var id = esc(text(task.ID));
    var html = actionBtn("view", id, "\u67e5\u770b", "dw-action-view");
    if (canEditRoot(task)) {
      html += actionBtn("edit", id, "\u7f16\u8f91", "dw-action-edit");
    }
    if (canDispatch(task)) {
      html += actionBtn("dispatch", id, "\u4e0b\u53d1", "dw-action-dispatch");
    }
    if (canAccept(task)) {
      html += actionBtn("accept", id, "\u63a5\u6536", "dw-action-accept");
    }
    if (canTakeBack(task)) {
      html += actionBtn("takeBack", id, "\u62ff\u56de", "dw-action-takeback");
    }
    if (canFeedback(task)) {
      html += actionBtn("feedback", id, feedbackActionLabel(task), "dw-action-feedback");
    }
    return html;
  }

  function actionBtn(action, id, label, cls) {
    return '<button type="button" class="dw-btn dw-task-action-btn ' + esc(cls || "") + '" data-task-action="' + esc(action) +
      '" data-task-id="' + id + '">' + esc(label) + "</button>";
  }

  function taskTreeCell(task, depth, childCount, expanded, notice) {
    var id = text(task.ID);
    var icon = childCount ? (expanded ? "\u25be" : "\u25b8") : "\u2022";
    var toggleClass = childCount ? "dw-task-toggle" : "dw-task-toggle is-leaf";
    var html = '<div class="dw-task-cell" style="padding-left:' + (depth * 20) + 'px">';
    html += '<button type="button" class="' + toggleClass + '" data-task-id="' + esc(id) + '">' + icon + "</button>";
    html += '<div><div class="dw-task-title">' + esc(text(task.TITLE));
    if (notice) {
      html += ' <span class="dw-task-notice">\u5f85\u5904\u7406</span>';
    }
    html += "</div>";
    if (childCount) {
      html += '<div class="dw-muted dw-task-child-count">' + childCount + " \u4e2a\u4e0b\u7ea7\u4efb\u52a1</div>";
    }
    html += "</div></div>";
    return html;
  }

  function personTreeCell(node, depth, childCount, expanded) {
    var indent = depth * 20;
    var icon = childCount ? (expanded ? "\u25be" : "\u25b8") : "\u2022";
    var toggleClass = childCount ? "dw-tree-toggle" : "dw-tree-toggle is-leaf";
    var html = '<span class="dw-tree-cell" style="padding-left:' + indent + 'px">';
    html += '<button type="button" class="' + toggleClass + '" data-person-id="' + esc(text(node.ID)) + '"' + (childCount ? "" : ' tabindex="-1"') + ">" + icon + "</button>";
    html += '<span class="dw-person-level dw-person-level-' + esc(personLevelClass(text(node.ROLE_CODE))) + '">' + esc(personLevelLabel(text(node.ROLE_CODE))) + "</span>";
    html += '<span class="dw-tree-title">' + esc(text(node.NODE_NAME)) + "</span>";
    if (childCount) {
      html += '<span class="dw-tree-count">' + childCount + "</span>";
    }
    return html + "</span>";
  }

  function personLevelLabel(role) {
    if (role === "PARTY_SENDER") {
      return "\u515a\u59d4";
    }
    if (role === "DEPT_MINISTER") {
      return "\u90e8\u95e8";
    }
    if (role === "OFFICE_DIRECTOR") {
      return "\u79d1\u5ba4";
    }
    if (role === "STAFF") {
      return "\u79d1\u5458";
    }
    return role || "-";
  }

  function personLevelClass(role) {
    if (role === "PARTY_SENDER") {
      return "party";
    }
    if (role === "DEPT_MINISTER") {
      return "dept";
    }
    if (role === "OFFICE_DIRECTOR") {
      return "office";
    }
    if (role === "STAFF") {
      return "staff";
    }
    return "other";
  }

  function resizeCharts() {
    $.each(state.charts, function (_, item) {
      if (item && item.resize) {
        item.resize();
      }
    });
  }

  function upperFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function esc(value) {
    return text(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function text(value) {
    return value == null ? "" : String(value);
  }

  function number(value) {
    var parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
  }

  function dateOnly(value) {
    var raw = text(value);
    if (!raw) {
      return "";
    }
    return raw.length >= 10 ? raw.substring(0, 10) : raw;
  }

  function dateTime(value) {
    var raw = text(value);
    if (!raw) {
      return "";
    }
    return raw.replace("T", " ").substring(0, Math.min(raw.length, 19));
  }

  function today() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    return now.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
  }
})(jQuery, echarts);
