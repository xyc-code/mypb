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
    grassrootBusinesses: [],
    grassrootPartyOrgs: [],
    grassrootRows: [],
    grassrootSummary: {},
    grassrootReadOnly: false,
    grassrootDirty: false,
    currentGrassrootTask: null,
    selectedGrassrootBusinessId: "",
    selectedGrassrootOrgIds: emptyGrassrootOrgSelection(),
    selectedTaskIds: {},
    expandedTaskIds: {},
    initialTaskId: "",
    initialPersonNodeId: "",
    feedbackMode: "feedback",
    feedbackTargetRequired: false,
    feedbackById: {},
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
    if (!$("#dwFeedbackPreparedId").length) {
      $("#dwFeedbackAttachmentId").after('<input id="dwFeedbackPreparedId" type="hidden">');
    }
    if (!$("#dwFeedbackTargetWrap").length) {
      $("#dwFeedbackHistory").before('<div id="dwFeedbackTargetWrap" class="dw-feedback-target-wrap" style="display:none"><label>\u53cd\u9988\u7ed9<select id="dwFeedbackTarget" class="dw-input"></select></label></div>');
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
      state.selectedTaskIds = {};
      if (isStaff() && state.currentView !== "plans") {
        state.currentView = "plans";
      }
      renderCurrentRole();
      updateCreateButton();
      $.when(loadBatches(), loadPersons()).always(function () {
        loadReceivers(loadTasks);
        if (state.currentView === "stats") {
          loadStats();
        }
      });
    });
    $("#dwDownloadImportTemplateBtn").on("click", downloadImportTemplate);
    $("#dwImportBtn").on("click", openImportModal);
    $("#dwBatchDispatchBtn").on("click", batchDispatchTasks);
    $("#dwImportPreviewBtn").on("click", previewImport);
    $("#dwImportSaveDraftsBtn").on("click", function () {
      persistImportRows("api/import/saveDrafts", "确定将校验通过的行保存为草稿吗？", "已保存草稿");
    });
    $("#dwImportDispatchBtn").on("click", function () {
      persistImportRows("api/import/directDispatch", "确定批量发送校验通过的任务吗？", "已批量发送");
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
    $("#dwGrassrootAddBtn").on("click", saveGrassrootDispatch);
    $("#dwGrassrootDispatchBtn").on("click", dispatchGrassrootRows);
    $("#dwGrassrootBusinessKeyword").on("input", renderGrassrootBusinessSelect);
    $("#dwGrassrootModal").on("input", "[data-grassroot-org-keyword]", function () {
      renderGrassrootOrgSelect($(this).attr("data-grassroot-org-keyword"));
    });
    $("#dwGrassrootBusinessList").on("click", "[data-grassroot-business-id]", function () {
      state.selectedGrassrootBusinessId = $(this).attr("data-grassroot-business-id");
      state.selectedGrassrootOrgIds = emptyGrassrootOrgSelection();
      $("#dwGrassrootBusiness").val(state.selectedGrassrootBusinessId);
      renderGrassrootBusinessSelect();
      renderGrassrootBusinessMeta();
      renderAllGrassrootOrgSelects();
    });
    $("#dwGrassrootModal").on("change", "[data-grassroot-org-id]", function () {
      var orgType = $(this).attr("data-grassroot-org-type");
      var id = $(this).attr("data-grassroot-org-id");
      state.selectedGrassrootOrgIds[orgType][id] = this.checked;
      $(this).closest(".dw-grassroot-check-item").toggleClass("is-selected", this.checked);
      updateGrassrootOrgCount(orgType);
    });
    $("#dwGrassrootModal").on("click", "[data-grassroot-org-toggle]", function () {
      var $section = $(this).closest(".dw-grassroot-org-section");
      var expanded = $section.hasClass("is-collapsed");
      $section.toggleClass("is-collapsed", !expanded);
      $(this).attr("aria-expanded", expanded ? "true" : "false");
    });
    $("#dwGrassrootModal").on("click", "[data-grassroot-select-all]", function () {
      selectAllGrassrootOrgs($(this).attr("data-grassroot-select-all"));
    });
    $("#dwGrassrootModal").on("click", "[data-grassroot-clear]", function () {
      var orgType = $(this).attr("data-grassroot-clear");
      state.selectedGrassrootOrgIds[orgType] = {};
      renderGrassrootOrgSelect(orgType);
    });
    $("#dwGrassrootTableBody").on("click", "[data-grassroot-delete]", function () {
      deleteGrassrootDispatch($(this).attr("data-grassroot-delete"));
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
    $("#dwFeedbackSubmitBtn").on("click", function () {
      if (state.feedbackMode === "complete") {
        submitCompleteTask();
      } else {
        submitFeedback();
      }
    });
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

  function currentNodeParams(extra) {
    var data = extra || {};
    data.currentNodeId = state.currentNodeId || "";
    return data;
  }

  function queryParam(name) {
    var match = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search || "");
    return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : "";
  }

  function initialRoleId() {
    if (!state.initialPersonNodeId) {
      return "";
    }
    for (var i = 0; i < state.roles.length; i++) {
      if (text(state.roles[i].ID) === state.initialPersonNodeId) {
        return state.initialPersonNodeId;
      }
    }
    return "";
  }

  function loadAll() {
    state.initialTaskId = queryParam("taskId");
    state.initialPersonNodeId = queryParam("personNodeId");
    api("api/currentUser").done(function (res) {
      state.user = res;
      state.roles = res.roles || [];
      state.currentNodeId = initialRoleId() || state.currentNodeId || (state.roles[0] && text(state.roles[0].ID));
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
    return api("api/batch/list", currentNodeParams()).done(function (res) {
      state.batches = res.rows || [];
      state.batchById = {};
      $.each(state.batches, function (_, row) {
        state.batchById[text(row.ID)] = row;
      });
      renderBatchSelects();
    }).fail(showError);
  }

  function loadPersons() {
    return api("api/person/list", currentNodeParams()).done(function (res) {
      state.persons = res.rows || [];
      state.personById = {};
      $.each(state.persons, function (_, row) {
        state.personById[text(row.ID)] = row;
        if (!state.expandedPersonIds.hasOwnProperty(text(row.ID))) {
          state.expandedPersonIds[text(row.ID)] = false;
        }
      });
      renderPersons();
    }).fail(showError);
  }

  function loadReceivers(done) {
    api("api/person/receivers", currentNodeParams()).done(function (res) {
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
      currentNodeId: state.currentNodeId,
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
    if (isViewerOnly()) {
      html = '<option value="">\u5168\u5c40\u67e5\u770b</option>';
    } else if (!state.roles.length) {
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
    $("#dwCurrentRoleText").text(isViewerOnly() ? "\u515a\u59d4\u4e00\u7ea7\u7ba1\u7406\u5458 / \u5168\u5c40\u67e5\u770b" :
      (node ? roleLabel(text(node.ROLE_CODE)) + " / " + text(node.NODE_NAME) : "当前用户未配置 3.0 人员节点"));
  }

  function updateCreateButton() {
    $("#dwCreateTaskBtn").toggle(canCreateTask() && state.currentView === "plans");
    $("#dwDownloadImportTemplateBtn,#dwImportBtn").toggle((isParty() || isOffice()) && state.currentView === "plans");
    $("#dwBatchDispatchBtn").toggle(isOffice() && state.currentView === "plans");
    $("#dwBatchDeleteBtn").toggle((isParty() || isOffice() || isStaff()) && state.currentView === "plans");
    $('.dw-tab[data-view="persons"]').toggle(canMaintainPersonTree());
    $('.dw-tab[data-view="stats"]').toggle(!isStaff());
    $("#dwPersonSaveBtn,#dwPersonDeleteBtn,#dwPersonUserPickBtn").toggle(canMaintainPersonTree());
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
    var options = '<option value="">请选择' + esc(receiverLabel()) + '</option>';
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
    html += '<td class="dw-task-content-cell">' + esc(text(task.CONTENT) || "-") + "</td>";
    html += "<td>" + esc(levelLabel(text(task.TASK_LEVEL))) + "</td>";
    html += "<td>" + esc(text(task.SENDER_NAME) || "-") + "</td>";
    html += "<td>" + esc(taskReceiverName(task) || "-") + "</td>";
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

  function taskReceiverName(task) {
    return text(task && task.DRAFT_DEPT_NAME) || text(task && task.RECEIVER_NAME);
  }

  function taskTreeCell(task, depth, childCount, expanded, notice) {
    var id = text(task.ID);
    var icon = childCount ? (expanded ? "▾" : "▸") : "•";
    var toggleClass = childCount ? "dw-task-toggle" : "dw-task-toggle is-leaf";
    var html = '<div class="dw-task-cell" style="padding-left:' + (depth * 22) + 'px">';
    html += '<button type="button" class="' + toggleClass + '" data-task-id="' + esc(id) + '">' + icon + "</button>";
    html += '<div><div class="dw-task-title">' + esc(text(task.TITLE));
    if (notice) {
      html += ' <span class="dw-task-notice">' + esc(taskNoticeLabel(task)) + "</span>";
    }
    html += "</div>";
    if (childCount) {
      html += '<div class="dw-muted">' + childCount + " 个下级任务</div>";
    }
    html += taskGrassrootProgressHtml(task);
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
      return (text(task.TITLE) + " " + text(task.CONTENT) + " " + text(task.RECEIVER_NAME) + " " + text(task.SENDER_NAME)).toLowerCase().indexOf(keyword) >= 0;
    });
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
    } else if (action === "complete") {
      openCompleteTask(id);
    } else if (action === "feedback") {
      openFeedback(id);
    } else if (action === "grassroot") {
      openGrassrootDispatch(id);
    } else if (action === "delete") {
      confirmBox("确定删除该任务吗？此操作不可恢复。", function () {
        api("api/task/delete", currentNodeParams({ id: id })).done(afterTaskChanged).fail(showError);
      });
    }
  }

  function openCreateTask() {
    if (!canCreateTask()) {
      message("当前用户不能新建任务");
      return;
    }
    resetTaskModal();
    $("#dwTaskModalTitle").text("新建任务");
    if (isStaff()) {
      $("#dwTaskReceiverWrap").hide();
      $("#dwTaskSaveDraftBtn").text("保存任务").show();
      $("#dwTaskDirectDispatchBtn").hide();
    } else {
      $("#dwTaskReceiverWrap").show().find("label").text(receiverLabel());
      $("#dwTaskSaveDraftBtn").text("保存草稿").show();
      $("#dwTaskDirectDispatchBtn").show();
    }
    $("#dwTaskDispatchBtn").hide();
    renderReceiverSelect();
    initTaskUploader("");
    openModal("dwTaskModal");
  }

  function openEditTask(id) {
    var task = findTask(id);
    if (!task || !canEditRoot(task)) {
      message("只有当前身份下的草稿任务可以编辑");
      return;
    }
    resetTaskModal();
    fillTaskModal(task);
    $("#dwTaskModalTitle").text("编辑草稿");
    $("#dwTaskSaveDraftBtn").text("保存草稿").show();
    $("#dwTaskDirectDispatchBtn").toggle(!isStaff());
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
    $("#dwTaskReceiverWrap").show().find("label").text(receiverLabel());
    $("#dwTaskSaveDraftBtn,#dwTaskDirectDispatchBtn").hide();
    $("#dwTaskDispatchBtn").show();
    renderReceiverSelect(text(task.DRAFT_DEPT_NODE_ID), text(task.DRAFT_DEPT_USER_ID));
    initTaskUploader("");
    openModal("dwTaskModal");
  }

  function fillTaskModal(task) {
    $("#dwTaskId").val(text(task.ID));
    $("#dwTaskTitle").val(text(task.TITLE));
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
    $("#dwTaskId,#dwTaskParentId,#dwTaskTitle,#dwTaskContent,#dwTaskTarget,#dwTaskDeadline,#dwTaskAttachmentId,#dwTaskFileName").val("");
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
    api("api/batch/create", currentNodeParams({ year: payload.year, quarter: payload.quarter })).done(function (res) {
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
    if (!isStaff() && !payload.personNodeId) {
      message("请选择接收对象");
      return;
    }
    api("api/batch/create", currentNodeParams({ year: payload.year, quarter: payload.quarter })).done(function (res) {
      payload.batchId = res.id;
      confirmBox("确定直接发送给选中接收对象吗？", function () {
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
    if (!isParty() && !isOffice()) {
      message("只有党委计划下发者和室主任可以下载导入模板");
      return;
    }
    var period = defaultImportPeriod();
    window.location.href = API_BASE + "api/import/template?year=" + encodeURIComponent(period.year) +
      "&quarter=" + encodeURIComponent(period.quarter) +
      "&currentNodeId=" + encodeURIComponent(state.currentNodeId || "");
  }

  function openImportModal() {
    if (!isParty() && !isOffice()) {
      message("只有党委计划下发者和室主任可以批量导入");
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
    form.append("currentNodeId", state.currentNodeId || "");
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
        currentNodeId: state.currentNodeId,
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
      html = '<tr><td colspan="8"><div class="dw-empty">请选择 Excel 后上传校验</div></td></tr>';
    } else {
      $.each(rows, function (_, row) {
        var rowClass = text(row.status) === "ERROR" ? "dw-import-row-error" : text(row.status) === "WARN" ? "dw-import-row-warn" : "";
        html += '<tr class="' + rowClass + '">';
        html += "<td>" + esc(text(row.rowNumber)) + "</td>";
        html += "<td>" + importStatusBadge(row) + "</td>";
        html += "<td>" + esc(text(row.title) || "-") + "</td>";
        html += "<td>" + esc(text(row.targetDesc) || "-") + "</td>";
        html += "<td>" + esc(text(row.content) || "-") + "</td>";
        html += "<td>" + esc(text(row.planDeadline) || "-") + "</td>";
        html += "<td>" + esc(text(row.deptName) || "-") + "</td>";
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

  function openGrassrootDispatch(id) {
    var task = findTask(id);
    if (!task || !canViewGrassrootProgress(task)) {
      message("当前任务没有可查看的基层任务");
      return;
    }
    state.currentGrassrootTask = task;
    state.grassrootReadOnly = !canGrassrootDispatch(task);
    state.grassrootDirty = false;
    resetGrassrootModal(task);
    applyGrassrootMode();
    openModal("dwGrassrootModal");
    setGrassrootBusy(true);
    $.when(
      api("api/grassroot/businessTree", currentNodeParams()),
      api("api/grassroot/partyOrgTree", currentNodeParams()),
      api("api/grassroot/list", currentNodeParams({ taskId: id }))
    ).done(function (businessRes, partyOrgRes, listRes) {
      state.grassrootBusinesses = businessRes.rows || [];
      state.grassrootPartyOrgs = partyOrgRes.rows || [];
      state.grassrootRows = listRes.rows || [];
      state.grassrootSummary = listRes.summary || {};
      renderGrassrootBusinessSelect();
      renderGrassrootBusinessMeta();
      renderAllGrassrootOrgSelects();
      renderGrassrootProgress();
      renderGrassrootRows();
    }).fail(showError).always(function () {
      setGrassrootBusy(false);
    });
  }

  function resetGrassrootModal(task) {
    var deadline = dateOnly(task && task.PLAN_DEADLINE) || today();
    var period = selectedPeriod();
    $("#dwGrassrootTaskId").val(text(task && task.ID));
    $("#dwGrassrootSummary").html(taskSummaryHtml(task));
    $("#dwGrassrootBusiness").val("");
    $("#dwGrassrootBusinessKeyword").val("");
    $("[data-grassroot-org-keyword]").val("");
    $("#dwGrassrootBusinessList").html('<div class="dw-grassroot-loading">正在读取业务...</div>');
    $("[data-grassroot-org-list]").html('<div class="dw-grassroot-loading">正在读取基层组织...</div>');
    $("#dwGrassrootBusinessMeta").prop("hidden", true).empty();
    $(".dw-grassroot-org-section").addClass("is-collapsed");
    $("[data-grassroot-org-toggle]").attr("aria-expanded", "false");
    $("[data-grassroot-org-count]").text("已选 0 个");
    $("#dwGrassrootYear").val(period.year || deadline.substring(0, 4));
    $("#dwGrassrootMonth").val(deadline.length >= 7 ? deadline.substring(5, 7) : "");
    $("#dwGrassrootQuarter").val(period.quarter || currentQuarter());
    $("#dwGrassrootDeadline").val(deadline);
    $("#dwGrassrootRemark").val("");
    state.selectedGrassrootBusinessId = "";
    state.selectedGrassrootOrgIds = emptyGrassrootOrgSelection();
    state.grassrootRows = [];
    state.grassrootSummary = {};
    renderGrassrootProgress();
    renderGrassrootRows();
  }

  function applyGrassrootMode() {
    $("#dwGrassrootModalTitle").text(state.grassrootReadOnly ? "基层任务进度" : "基层分发");
    $("#dwGrassrootModal").toggleClass("is-readonly", state.grassrootReadOnly);
    $("#dwGrassrootAddBtn").prop("disabled", state.grassrootReadOnly);
    updateGrassrootDispatchButton();
  }

  function renderGrassrootBusinessSelect() {
    var keyword = $.trim($("#dwGrassrootBusinessKeyword").val()).toLowerCase();
    var rows = $.grep(state.grassrootBusinesses || [], function (row) {
      var haystack = [
        text(row.YWMC),
        text(row.YWBH),
        text(row.ID),
        text(row.BDBH),
        text(row.ST_BM),
        text(row.WCLX)
      ].join(" ").toLowerCase();
      return !keyword || haystack.indexOf(keyword) >= 0;
    });
    var html = "";
    if (!rows.length) {
      html = '<div class="dw-grassroot-loading">暂无匹配业务</div>';
    }
    $.each(rows, function (_, row) {
      var level = Math.max(0, number(row.TREE_LEVEL) - 1);
      var id = text(row.ID);
      var selected = id === state.selectedGrassrootBusinessId;
      html += '<button type="button" class="dw-grassroot-picker-item' + (selected ? " is-selected" : "") + '" data-grassroot-business-id="' + esc(id) + '">' +
        '<span class="dw-grassroot-picker-name">' + esc(indentText(level) + (text(row.YWMC) || text(row.YWBH))) + "</span>" +
        '<span class="dw-grassroot-picker-meta">' + esc(grassrootCompleteType(row.WCLX) || "未配置") + "</span>" +
        "</button>";
    });
    $("#dwGrassrootBusinessList").html(html);
  }

  function renderGrassrootBusinessMeta() {
    var business = grassrootBusinessById(state.selectedGrassrootBusinessId);
    var $meta = $("#dwGrassrootBusinessMeta");
    if (!business) {
      $meta.prop("hidden", true).empty();
      return;
    }
    $meta.html("<span>完成类型：" + esc(grassrootCompleteType(business.WCLX) || "-") + "</span>").prop("hidden", false);
  }

  function renderAllGrassrootOrgSelects() {
    $.each(["d", "g", "t"], function (_, orgType) {
      renderGrassrootOrgSelect(orgType);
    });
  }

  function renderGrassrootOrgSelect(orgType) {
    var keyword = $.trim($("[data-grassroot-org-keyword='" + orgType + "']").val()).toLowerCase();
    var rows = $.grep(state.grassrootPartyOrgs || [], function (row) {
      var name = grassrootOrgDisplayName(row);
      var id = $.trim(text(row.ID));
      if (!name || !id) {
        return false;
      }
      var haystack = [
        name,
        text(row.ORG_TYPE_NAME)
      ].join(" ").toLowerCase();
      return text(row.ORG_TYPE) === orgType && (!keyword || haystack.indexOf(keyword) >= 0);
    });
    var html = "";
    if (!rows.length) {
      html = '<div class="dw-grassroot-loading">暂无匹配' + esc(grassrootOrgTypeName(orgType)) + "</div>";
    }
    $.each(rows, function (_, row) {
      var level = Math.max(0, number(row.TREE_LEVEL) - 1);
      var id = text(row.ID);
      var name = grassrootOrgDisplayName(row);
      var checked = !!state.selectedGrassrootOrgIds[orgType][id];
      html += '<label class="dw-grassroot-check-item' + (checked ? " is-selected" : "") + '">' +
        '<input type="checkbox" data-grassroot-org-id="' + esc(id) + '" data-grassroot-org-type="' + esc(orgType) + '"' + (checked ? " checked" : "") + ">" +
        '<span class="dw-grassroot-picker-name">' + esc(indentText(level) + name) + "</span>" +
        "</label>";
    });
    $("[data-grassroot-org-list='" + orgType + "']").html(html);
    updateGrassrootOrgCount(orgType);
  }

  function saveGrassrootDispatch() {
    if (state.grassrootReadOnly) {
      message("已完成任务只能查看基层进度");
      return;
    }
    var taskId = $("#dwGrassrootTaskId").val();
    var businessTreeId = $("#dwGrassrootBusiness").val();
    var business = grassrootBusinessById(businessTreeId);
    var partyOrgIds = selectedGrassrootOrgIds("d");
    var tradeUnionOrgIds = selectedGrassrootOrgIds("g");
    var leagueOrgIds = selectedGrassrootOrgIds("t");
    if (!taskId || !businessTreeId) {
      message("请选择业务");
      return;
    }
    if (!partyOrgIds.length && !tradeUnionOrgIds.length && !leagueOrgIds.length) {
      message("请至少选择一个基层党组织、基层工会或基层团委");
      return;
    }
    if (!$("#dwGrassrootDeadline").val()) {
      message("请填写完成期限");
      return;
    }
    setGrassrootBusy(true);
    api("api/grassroot/save", currentNodeParams({
      taskId: taskId,
      businessTreeId: businessTreeId,
      partyOrgIds: partyOrgIds.join(","),
      tradeUnionOrgIds: tradeUnionOrgIds.join(","),
      leagueOrgIds: leagueOrgIds.join(","),
      year: $.trim($("#dwGrassrootYear").val()),
      month: $.trim($("#dwGrassrootMonth").val()),
      quarter: $("#dwGrassrootQuarter").val(),
      deadline: $("#dwGrassrootDeadline").val(),
      remark: $.trim($("#dwGrassrootRemark").val())
    })).done(function (res) {
      state.grassrootDirty = true;
      showGrassrootResult("已保存基层分发清单 " + number(res.count) + " 条", res);
      loadGrassrootRows(taskId);
    }).fail(showError).always(function () {
      setGrassrootBusy(false);
    });
  }

  function dispatchGrassrootRows() {
    if (state.grassrootReadOnly) {
      message("已完成任务只能查看基层进度");
      return;
    }
    var taskId = $("#dwGrassrootTaskId").val();
    var rows = $.grep(state.grassrootRows || [], function (row) {
      return text(row.STATUS) !== "DISPATCHED";
    });
    if (!rows.length) {
      if (!(state.grassrootRows || []).length) {
        message("请先选择业务和基层组织，点击“加入清单”后再分发任务");
      } else {
        message("清单中的任务已经全部分发");
      }
      return;
    }
    confirmBox("确定将清单中的任务分发给基层党组织吗？", function () {
      setGrassrootBusy(true);
      api("api/grassroot/dispatch", currentNodeParams({ taskId: taskId })).done(function (res) {
        state.grassrootDirty = true;
        showGrassrootResult("已分发基层任务 " + number(res.count) + " 条", res);
        loadGrassrootRows(taskId);
      }).fail(function (err) {
        showError(err);
        loadGrassrootRows(taskId);
      }).always(function () {
        setGrassrootBusy(false);
      });
    });
  }

  function deleteGrassrootDispatch(id) {
    if (!id || state.grassrootReadOnly) {
      return;
    }
    confirmBox("确定删除这条未分发的基层任务吗？", function () {
      setGrassrootBusy(true);
      api("api/grassroot/delete", currentNodeParams({ id: id })).done(function () {
        state.grassrootDirty = true;
        loadGrassrootRows($("#dwGrassrootTaskId").val());
      }).fail(showError).always(function () {
        setGrassrootBusy(false);
      });
    });
  }

  function loadGrassrootRows(taskId) {
    return api("api/grassroot/list", currentNodeParams({ taskId: taskId })).done(function (res) {
      state.grassrootRows = res.rows || [];
      state.grassrootSummary = res.summary || {};
      renderGrassrootProgress();
      renderGrassrootRows();
    }).fail(showError);
  }

  function renderGrassrootRows() {
    var rows = state.grassrootRows || [];
    var html = "";
    if (!rows.length) {
      html = '<tr><td colspan="6"><div class="dw-empty">暂无基层分发清单</div></td></tr>';
    } else {
      $.each(rows, function (_, row) {
        var status = text(row.STATUS) || "DRAFT";
        var statusDetail = text(row.ERROR_MSG) || text(row.REMARK);
        var currentBusiness = grassrootBusinessById(row.BUSINESS_TREE_ID);
        var completeType = grassrootCompleteType(row.COMPLETE_TYPE) || grassrootCompleteType(currentBusiness && currentBusiness.WCLX);
        var organizationName = grassrootOrgDisplayName({ PARTY_NAME: row.PARTY_ORG_NAME, ID: row.PARTY_ORG_ID });
        html += "<tr>";
        html += "<td>" + esc(text(row.BUSINESS_NAME) || "-") + "</td>";
        html += "<td>" + esc(completeType || "-") + "</td>";
        html += '<td title="' + esc(grassrootOrgTypeName(text(row.TARGET_ORG_TYPE))) + '">' + esc(organizationName || "名称缺失") + "</td>";
        html += '<td' + (statusDetail ? ' title="' + esc(statusDetail) + '"' : "") + ">" + grassrootTaskStatusBadge(row) + "</td>";
        html += "<td>" + esc(dateOnly(row.DEADLINE) || "-") + "</td>";
        html += '<td><div class="dw-actions">';
        if (!state.grassrootReadOnly && status !== "DISPATCHED") {
          html += '<button type="button" class="dw-btn dw-task-action-btn dw-action-delete" data-grassroot-delete="' + esc(text(row.ID)) + '">删除</button>';
        }
        html += "</div></td></tr>";
      });
    }
    $("#dwGrassrootTableBody").html(html);
    updateGrassrootDispatchButton();
  }

  function renderGrassrootProgress() {
    var summary = state.grassrootSummary || {};
    var total = number(summary.totalCount);
    var completed = number(summary.completedCount);
    var requiredTotal = number(summary.requiredTotalCount);
    var requiredCompleted = number(summary.requiredCompletedCount);
    var openCount = Math.max(0, total - completed);
    var html = '<div class="dw-grassroot-progress-main"><strong>' + completed + "/" + total + '</strong><span>基层任务完成</span></div>';
    html += '<div class="dw-grassroot-progress-track"><i style="width:' + Math.max(0, Math.min(100, number(summary.completionRate))) + '%"></i></div>';
    html += '<div class="dw-grassroot-progress-stats">' +
      '<span>未完成 <strong>' + openCount + '</strong></span>' +
      '<span>必做 <strong>' + requiredCompleted + "/" + requiredTotal + '</strong></span>' +
      '<span>待分发 <strong>' + number(summary.draftCount) + '</strong></span>' +
      '<span>失败 <strong>' + number(summary.failedCount) + '</strong></span></div>';
    $("#dwGrassrootProgress").html(html).toggle(total > 0);
  }

  function updateGrassrootDispatchButton() {
    var $button = $("#dwGrassrootDispatchBtn");
    if (state.grassrootReadOnly) {
      $button.hide();
      return;
    }
    $button.show();
    if ((state.grassrootRows || []).length && !hasPendingGrassrootRows()) {
      $button.text("已全部分发").prop("disabled", true);
    } else {
      $button.text("分发任务").prop("disabled", false);
    }
  }

  function showGrassrootResult(messageText, res) {
    var errors = normalizeArray(res && res.errors);
    if (errors.length) {
      message(messageText + "，失败 " + errors.length + " 条：" + errors.slice(0, 2).join("；"));
    } else {
      message(messageText);
    }
  }

  function setGrassrootBusy(busy) {
    $("#dwGrassrootAddBtn").prop("disabled", !!busy);
    if (busy) {
      $("#dwGrassrootDispatchBtn").prop("disabled", true);
    } else {
      updateGrassrootDispatchButton();
    }
  }

  function hasPendingGrassrootRows() {
    return $.grep(state.grassrootRows || [], function (row) {
      return text(row.STATUS) !== "DISPATCHED";
    }).length > 0;
  }

  function selectAllGrassrootOrgs(orgType) {
    var keyword = $.trim($("[data-grassroot-org-keyword='" + orgType + "']").val()).toLowerCase();
    var selected = 0;
    $.each(state.grassrootPartyOrgs || [], function (_, row) {
      var name = grassrootOrgDisplayName(row);
      var id = $.trim(text(row.ID));
      var haystack = [name, text(row.ORG_TYPE_NAME)].join(" ").toLowerCase();
      if (!name || !id) {
        return;
      }
      if (text(row.ORG_TYPE) !== orgType) {
        return;
      }
      if (keyword && haystack.indexOf(keyword) < 0) {
        return;
      }
      if (orgType !== "d" || isPartyBranch(row)) {
        state.selectedGrassrootOrgIds[orgType][id] = true;
        selected++;
      }
    });
    if (!selected && orgType === "d") {
      $.each(state.grassrootPartyOrgs || [], function (_, row) {
        var name = grassrootOrgDisplayName(row);
        var id = $.trim(text(row.ID));
        var haystack = [name, text(row.ORG_TYPE_NAME)].join(" ").toLowerCase();
        if (name && id && text(row.ORG_TYPE) === orgType && (!keyword || haystack.indexOf(keyword) >= 0)) {
          state.selectedGrassrootOrgIds[orgType][id] = true;
        }
      });
    }
    renderGrassrootOrgSelect(orgType);
  }

  function selectedGrassrootOrgIds(orgType) {
    var ids = [];
    $.each(state.selectedGrassrootOrgIds[orgType] || {}, function (id, checked) {
      if (checked) {
        ids.push(id);
      }
    });
    return ids;
  }

  function updateGrassrootOrgCount(orgType) {
    $("[data-grassroot-org-count='" + orgType + "']").text("已选 " + selectedGrassrootOrgIds(orgType).length + " 个");
  }

  function emptyGrassrootOrgSelection() {
    return { d: {}, g: {}, t: {} };
  }

  function isPartyBranch(row) {
    var name = text(row.PARTY_NAME);
    return name.indexOf("党支部") >= 0 || name.indexOf("支部") >= 0;
  }

  function grassrootBusinessById(id) {
    var found = null;
    $.each(state.grassrootBusinesses || [], function (_, row) {
      if (text(row.ID) === text(id)) {
        found = row;
        return false;
      }
      return true;
    });
    return found;
  }

  function grassrootCompleteType(value) {
    return $.trim(text(value));
  }

  function grassrootOrgDisplayName(row) {
    var name = $.trim(text(row && row.PARTY_NAME));
    var id = $.trim(text(row && row.ID));
    if (!name || name.length < 2 || name === id) {
      return "";
    }
    if (id && name.length > id.length && name.slice(-id.length) === id) {
      name = $.trim(name.slice(0, -id.length));
    }
    if (!name || /^[A-Za-z0-9_-]+$/.test(name)) {
      return "";
    }
    return name;
  }

  function grassrootOrgTypeName(orgType) {
    if (orgType === "g") {
      return "基层工会";
    }
    if (orgType === "t") {
      return "基层团委";
    }
    return "基层党组织";
  }

  function grassrootStatusBadge(status) {
    if (status === "DISPATCHED") {
      return '<span class="dw-badge dw-grassroot-dispatched">已分发</span>';
    }
    if (status === "FAILED") {
      return '<span class="dw-badge dw-grassroot-failed">失败</span>';
    }
    return '<span class="dw-badge dw-grassroot-draft">待分发</span>';
  }

  function grassrootTaskStatusBadge(row) {
    var status = text(row && row.STATUS);
    if (status === "FAILED") {
      return '<span class="dw-badge dw-grassroot-failed">分发失败</span>';
    }
    if (status !== "DISPATCHED") {
      return '<span class="dw-badge dw-grassroot-draft">待分发</span>';
    }
    var taskStatus = text(row && row.GRASSROOT_TASK_STATUS) || "未开始";
    var cls = taskStatus === "已完成" ? "dw-grassroot-dispatched" :
      taskStatus === "未开始" ? "dw-grassroot-pending" : "dw-grassroot-doing";
    return '<span class="dw-badge ' + cls + '">' + esc(taskStatus) + "</span>";
  }

  function indentText(level) {
    var text = "";
    for (var i = 0; i < level; i++) {
      text += "　";
    }
    return text;
  }

  function taskPayload() {
    var receiverId = $("#dwTaskReceiver option:selected").attr("data-user-id") || "";
    var payload = {
      id: $("#dwTaskId").val(),
      currentNodeId: state.currentNodeId,
      year: $.trim($("#dwTaskYear").val()),
      quarter: $("#dwTaskQuarter").val(),
      title: $.trim($("#dwTaskTitle").val()),
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
          return api("api/task/delete", currentNodeParams({ id: id }));
        });
      });
      chain.done(function () {
        state.selectedTaskIds = {};
        afterTaskChanged();
      }).fail(showError);
    });
  }

  function batchDispatchTasks() {
    if (!isOffice()) {
      message("只有室主任可以批量下发");
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
      api("api/task/batchDirectDispatch", currentNodeParams({ ids: dispatchableIds.join(",") })).done(function (res) {
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
    openModal("dwFeedbackModal");
    initVisiblePlatformUploader("dwFeedbackAttachment", "", FEEDBACK_ATTACHMENT_TABLE, true, FEEDBACK_ATTACHMENT_ELEMENT_ID);
  }

  function submitFeedback() {
    var content = $.trim($("#dwFeedbackContent").val());
    if (!content) {
      message("请填写反馈内容");
      return;
    }
    var targetUserId = $("#dwFeedbackTarget").val() || "";
    if (state.feedbackTargetRequired && !targetUserId) {
      message("请选择反馈给哪位部门确认人");
      return;
    }
    ensureFeedbackPreparedId(function () {
      confirmBox("确定提交反馈给上级确认吗？", function () {
        var preparedId = $("#dwFeedbackPreparedId").val();
        uploadPlatformFiles("dwFeedbackAttachment", preparedId, FEEDBACK_ATTACHMENT_ELEMENT_ID, function () {
          api("api/feedback/submit", {
            taskId: $("#dwFeedbackTaskId").val(),
            content: content,
            attachmentId: $("#dwFeedbackAttachmentId").val(),
            preparedId: preparedId,
            targetUserId: targetUserId
          }).done(function () {
            closeModal("dwFeedbackModal");
            message("反馈已提交，请等待上级确认");
            afterTaskChanged();
          }).fail(showError);
        });
      });
    });
  }

  function ensureFeedbackPreparedId(done) {
    if ($("#dwFeedbackPreparedId").val()) {
      done();
      return;
    }
    api("api/feedback/prepare", { taskId: $("#dwFeedbackTaskId").val() }).done(function (prepared) {
      $("#dwFeedbackPreparedId").val(text(prepared.id));
      resetPlatformUploader("dwFeedbackAttachment");
      initFeedbackUploader(text(prepared.id));
      done();
    }).fail(showError);
  }
  function submitCompleteTask() {
    var content = $.trim($("#dwFeedbackContent").val());
    if (!content) {
      message("请填写完成情况");
      return;
    }
    confirmBox("确定完成该任务吗？", function () {
      var taskId = $("#dwFeedbackTaskId").val();
      uploadPlatformFiles("dwFeedbackAttachment", taskId, TASK_ATTACHMENT_ELEMENT_ID, function () {
        api("api/task/complete", currentNodeParams({
          id: taskId,
          content: content,
          attachmentId: $("#dwFeedbackAttachmentId").val()
        })).done(function () {
          closeModal("dwFeedbackModal");
          message("任务已完成");
          afterTaskChanged();
        }).fail(showError);
      });
    });
  }

  function openCompleteTask(id) {
    var task = findTask(id);
    if (!task) {
      message("任务不存在");
      return;
    }
    state.feedbackMode = "complete";
    $("#dwFeedbackModal .dw-modal-head h2").text("任务完成");
    $("#dwFeedbackSubmitBtn").text("确认完成");
    $("#dwFeedbackTaskId").val(id);
    $("#dwFeedbackContent,#dwFeedbackAttachmentId,#dwFeedbackPreparedId,#dwFeedbackFileName").val("");
    $("#dwFeedbackContent").attr("placeholder", "请填写完成情况").val(text(task.COMPLETE_DETAIL));
    $("#dwFeedbackTaskSummary").html(taskSummaryHtml(task));
    $("#dwFeedbackUpperAttachmentWrap").hide();
    $("#dwFeedbackTaskAttachmentWrap").hide();
    $("#dwFeedbackHistory").empty();
    resetPlatformUploader("dwFeedbackUpperAttachment");
    resetPlatformUploader("dwFeedbackTaskAttachment");
    resetPlatformUploader("dwFeedbackAttachment");
    state.feedbackTargetRequired = false;
    $("#dwFeedbackTargetWrap").hide();
    openModal("dwFeedbackModal");
    initVisiblePlatformUploader("dwFeedbackAttachment", id, TASK_ATTACHMENT_TABLE, true, TASK_ATTACHMENT_ELEMENT_ID);
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
      html += detailItem("工作目标", text(task.TARGET_DESC) || "-");
      html += detailItem("工作内容", text(task.CONTENT) || "-");
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
    applyPersonReadonlyState();
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
    var expanded = state.expandedPersonIds[id] === true;
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
    var id = text(node.ID);
    var indent = depth * 22;
    var icon = childCount ? (expanded ? "▾" : "▸") : "•";
    var toggleClass = childCount ? "dw-tree-toggle" : "dw-tree-toggle is-leaf";
    var html = '<span class="dw-tree-cell" style="padding-left:' + indent + 'px">';
    if (childCount) {
      html += '<button type="button" class="' + toggleClass + '" data-person-id="' + esc(id) + '">' + icon + "</button>";
    } else {
      html += '<button type="button" class="' + toggleClass + '" tabindex="-1">' + icon + "</button>";
    }
    html += '<span class="dw-tree-title">' + esc(text(node.NODE_NAME)) + "</span>";
    if (childCount) {
      html += '<span class="dw-tree-count">' + childCount + "</span>";
    }
    if (canMaintainPersonTree() && state.selectedPersonId === id && NEXT_ROLE[text(node.ROLE_CODE)]) {
      html += '<button type="button" class="dw-inline-add-btn" data-person-action="addChild" data-person-id="' + esc(id) + '">' +
        '<span class="dw-inline-add-icon" aria-hidden="true"></span>新增下级</button>';
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
    applyPersonReadonlyState();
  }

  function selectPerson(id) {
    if (!id || !state.personById[id]) {
      return;
    }
    state.selectedPersonId = id;
    renderPersons();
  }

  function handlePersonAction(action, id) {
    if (!canMaintainPersonTree()) {
      message("\u5f53\u524d\u7528\u6237\u65e0\u6743\u7ef4\u62a4\u4eba\u5458\u6811");
      return;
    }
    if (action === "addChild") {
      var parent = state.personById[id];
      if (!parent) {
        message("请先选择上级节点");
        return;
      }
      var nextRole = NEXT_ROLE[text(parent.ROLE_CODE)];
      if (!nextRole) {
        message("科员节点不能继续添加下级");
        return;
      }
      $("#dwPersonId").val("");
      $("#dwPersonParent").val(id);
      $("#dwPersonNodeName,#dwPersonUserId,#dwPersonUserName,#dwPersonSort,#dwPersonRemark").val("");
      $("#dwPersonRole").val(nextRole);
      $("#dwPersonNodeName").focus();
    } else if (action === "delete") {
      deletePerson(id);
    }
  }

  function openPersonUserSelect() {
    if (!canMaintainPersonTree()) {
      return;
    }
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
    if (!canMaintainPersonTree()) {
      message("\u5f53\u524d\u7528\u6237\u65e0\u6743\u4fdd\u5b58\u4eba\u5458\u6811");
      return;
    }
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
    if (!canMaintainPersonTree()) {
      message("\u5f53\u524d\u7528\u6237\u65e0\u6743\u5220\u9664\u4eba\u5458\u6811");
      return;
    }
    var id = $("#dwPersonId").val();
    if (!id) {
      message("请选择节点");
      return;
    }
    deletePerson(id);
  }

  function deletePerson(id) {
    if (!canMaintainPersonTree()) {
      message("\u5f53\u524d\u7528\u6237\u65e0\u6743\u5220\u9664\u4eba\u5458\u6811");
      return;
    }
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
    api("api/stats", currentNodeParams({ batchId: batchId })).done(function (res) {
      renderStats(res);
    }).fail(showError);
  }

  function renderStats(data) {
    var summary = data.summary || {};
    var departmentRows = data.byDepartmentStatus || [];
    var levelRows = data.byLevel || [];
    var recentRows = data.recent || [];
    $("#dwKpiTotal").text(number(summary.TOTAL));
    $("#dwKpiDone").text(number(summary.COMPLETED));
    $("#dwKpiPending").text(number(summary.PENDING_CONFIRM));
    $("#dwKpiOverdue").text(number(summary.OVERDUE));
    renderStatusChart(departmentRows);
    renderLevelChart(levelRows);
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
    var departmentTotals = {};
    var departmentNames = [];
    var statusData = [];
    $.each(rows, function (_, row) {
      var departmentId = text(row.DEPT_NODE_ID) || "UNASSIGNED";
      var departmentName = text(row.DEPT_NAME) || "\u672a\u5f52\u5c5e\u90e8\u95e8";
      if (!departmentTotals.hasOwnProperty(departmentId)) {
        departmentTotals[departmentId] = { name: departmentName, value: 0 };
        departmentNames.push(departmentId);
      }
      departmentTotals[departmentId].value += number(row.CNT);
      statusData.push({
        name: departmentName + " / " + statusLabel(text(row.STATUS)),
        value: number(row.CNT)
      });
    });
    var departmentData = $.map(departmentNames, function (id) {
      return departmentTotals[id];
    });
    instance.setOption({
      tooltip: { trigger: "item" },
      color: ["#b91c1c", "#dc2626", "#f97316", "#15803d", "#64748b", "#991b1b"],
      series: [
        {
          name: "\u90e8\u95e8\u4efb\u52a1",
          type: "pie",
          selectedMode: "single",
          radius: [0, "34%"],
          label: { position: "inner", fontSize: 12 },
          data: departmentData
        },
        {
          name: "\u90e8\u95e8\u72b6\u6001",
          type: "pie",
          radius: ["46%", "72%"],
          label: { formatter: "{b}: {c}" },
          data: statusData
        }
      ]
    });
  }

  function renderLevelChart(rows) {
    var instance = chart("dwLevelChart");
    if (!instance) {
      return;
    }
    var levels = ["OFFICE", "STAFF"];
    var data = {};
    $.each(rows, function (_, row) {
      data[text(row.TASK_LEVEL)] = number(row.CNT);
    });
    instance.setOption({
      tooltip: { trigger: "axis" },
      grid: { left: 42, right: 20, bottom: 28, top: 24 },
      xAxis: { type: "category", data: $.map(levels, levelLabel) },
      yAxis: { type: "value", minInterval: 1 },
      series: [{
        name: "\u4efb\u52a1\u6570\u91cf",
        type: "bar",
        barMaxWidth: 64,
        itemStyle: { color: "#b91c1c" },
        label: { show: true, position: "top" },
        data: $.map(levels, function (level) { return data[level] || 0; })
      }]
    });
  }

  function renderRecent(rows) {
    var html = "";
    if (!rows.length) {
      html = '<tr><td colspan="6"><div class="dw-empty">暂无任务</div></td></tr>';
    } else {
      $.each(rows.slice(0, 8), function (_, row) {
        html += "<tr><td>" + esc(levelLabel(text(row.TASK_LEVEL))) + "</td><td>" + esc(text(row.TITLE)) + '</td><td class="dw-task-content-cell">' +
          esc(text(row.CONTENT) || "-") + "</td><td>" + esc(text(row.RECEIVER_NAME) || "-") + "</td><td>" + statusBadge(text(row.STATUS)) + "</td><td>" +
          esc(dateOnly(row.PLAN_DEADLINE) || "-") + "</td></tr>";
      });
    }
    $("#dwRecentTable tbody").html(html);
  }

  function initTaskUploader(businessId) {
    initPlatformUploader("dwTaskAttachment", businessId, TASK_ATTACHMENT_TABLE, true, TASK_ATTACHMENT_ELEMENT_ID);
  }

  function initFeedbackUploader(businessId) {
    var $wrap = $("#dwFeedbackAttachment");
    if (!$wrap.length) {
      return;
    }
    $wrap.removeData("uploaderExt").empty();
    initPlatformUploader("dwFeedbackAttachment", businessId || "", FEEDBACK_ATTACHMENT_TABLE, true, FEEDBACK_ATTACHMENT_ELEMENT_ID);
  }

  function initVisiblePlatformUploader(elementId, businessId, tableName, editable, logicalElementId, options) {
    setTimeout(function () {
      initPlatformUploader(elementId, businessId, tableName, editable, logicalElementId, options);
      refreshPlatformUploader(elementId);
    }, 0);
  }

  function refreshPlatformUploader(elementId) {
    function refreshOnce() {
      var $el = $("#" + elementId);
      var state = $el.data("uploaderExt");
      if (state && state.uploader && $.isFunction(state.uploader.refresh)) {
        state.uploader.refresh();
      }
      $(window).trigger("resize");
    }
    setTimeout(refreshOnce, 0);
    setTimeout(refreshOnce, 100);
  }

  function renderDirectFeedbackFiles() {
    var input = document.getElementById("dwFeedbackDirectFiles");
    var files = input && input.files ? input.files : [];
    if (!files.length) {
      $("#dwFeedbackDirectFileList").html('<span class="dw-muted">未选择附件</span>');
      return;
    }
    var html = "";
    $.each(files, function (_, file) {
      html += '<span class="dw-direct-attachment-file">' + esc(file.name) + "</span>";
    });
    $("#dwFeedbackDirectFileList").html(html);
  }

  function uploadDirectFeedbackAttachments(businessType, done) {
    var deferred = $.Deferred();
    done = $.isFunction(done) ? done : function () {};
    var input = document.getElementById("dwFeedbackDirectFiles");
    var files = input && input.files ? [].slice.call(input.files) : [];
    if (!files.length) {
      done([]);
      deferred.resolve([]);
      return deferred.promise();
    }
    var attachmentIds = [];
    var maskIndex = window.layer && layer.load ? layer.load(2, { shade: [0.12, "#000"] }) : null;
    function closeMask() {
      if (maskIndex !== null && window.layer && layer.close) {
        layer.close(maskIndex);
        maskIndex = null;
      }
    }
    function uploadOne(index) {
      if (index >= files.length) {
        closeMask();
        done(attachmentIds);
        deferred.resolve(attachmentIds);
        return;
      }
      var form = new FormData();
      form.append("file", files[index]);
      form.append("businessType", businessType || "FEEDBACK");
      $.ajax({
        url: API_BASE + "api/attachment/upload",
        type: "POST",
        data: form,
        dataType: "json",
        processData: false,
        contentType: false
      }).done(function (res) {
        if (!res || res.flag !== "success" || !res.id) {
          closeMask();
          deferred.reject(res && res.errorMsg ? res.errorMsg : "附件上传失败");
          return;
        }
        attachmentIds.push(text(res.id));
        uploadOne(index + 1);
      }).fail(function () {
        closeMask();
        deferred.reject("附件上传失败");
      });
    }
    uploadOne(0);
    return deferred.promise();
  }

  function legacyInitPlatformUploaderUnused(elementId, businessId, tableName) {
    var $el = $("#" + elementId);
    if (!$el.length) {
      return;
    }
    if (!hasUploaderExt()) {
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
    if (!$el.length || !businessId || !hasUploaderExt()) {
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
          waitPlatformAttachmentVisible(businessId, logicalElementId, files.length, function () {
            closeMask();
            done();
          }, function () {
            closeMask();
            showError("\u9644\u4ef6\u672a\u4fdd\u5b58\u6210\u529f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u9644\u4ef6\u540e\u518d\u63d0\u4ea4");
          });
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

  function waitPlatformAttachmentVisible(businessId, elementId, minCount, done, fail) {
    var attempts = 0;
    function retry() {
      attempts++;
      api("api/attachment/list", {
        businessId: businessId,
        elementId: elementId,
        legacyAttachmentId: ""
      }).done(function (res) {
        if ((res.rows || []).length >= minCount) {
          done();
          return;
        }
        if (attempts >= 12) {
          fail();
          return;
        }
        setTimeout(retry, 250);
      }).fail(function () {
        if (attempts >= 12) {
          fail();
          return;
        }
        setTimeout(retry, 250);
      });
    }
    retry();
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
    if (id === "dwGrassrootModal") {
      closeGrassrootModal();
      return;
    }
    $("#" + id).removeClass("open").attr("aria-hidden", "true");
  }

  function closeGrassrootModal() {
    $("#dwGrassrootModal").removeClass("open").attr("aria-hidden", "true");
    if (state.grassrootDirty) {
      state.grassrootDirty = false;
      afterTaskChanged();
    }
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
    if (state.personById[state.currentNodeId]) {
      return state.personById[state.currentNodeId];
    }
    for (var i = 0; i < state.roles.length; i++) {
      if (text(state.roles[i].ID) === text(state.currentNodeId)) {
        return state.roles[i];
      }
    }
    return state.roles[0] || null;
  }

  function isParty() {
    var node = currentNode();
    return node && text(node.ROLE_CODE) === "PARTY_SENDER";
  }

  function isDept() {
    var node = currentNode();
    return node && text(node.ROLE_CODE) === "DEPT_MINISTER";
  }

  function isStaff() {
    var node = currentNode();
    return node && text(node.ROLE_CODE) === "STAFF";
  }

  function isOffice() {
    var node = currentNode();
    return node && text(node.ROLE_CODE) === "OFFICE_DIRECTOR";
  }

  function canCreateTask() {
    return !isViewerOnly() && !!currentNode() && (isParty() || isOffice() || isStaff());
  }

  function receiverLabel() {
    var node = currentNode();
    var role = node ? text(node.ROLE_CODE) : "";
    if (role === "PARTY_SENDER") {
      return "接收部长";
    }
    if (role === "DEPT_MINISTER") {
      return "接收室主任";
    }
    if (role === "OFFICE_DIRECTOR") {
      return "接收科员";
    }
    return "接收科员";
  }

  function isViewerOnly() {
    return !!(state.user && state.user.adminViewer) && !state.roles.length;
  }

  function canMaintainPersonTree() {
    return !!(state.user && state.user.personTreeEditable);
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
    if (isViewerOnly()) {
      return false;
    }
    return (isParty() || isOffice() || isStaff()) &&
      !text(task.PARENT_ID) &&
      text(task.STATUS) === "DRAFT" &&
      text(task.RECEIVER_ID) === currentUserId() &&
      taskMatchesCurrentNode(task);
  }

  function canDispatch(task) {
    if (isViewerOnly()) {
      return false;
    }
    if (!isParty() && !isDept() && !isOffice()) {
      return false;
    }
    if (text(task.RECEIVER_ID) !== currentUserId()) {
      return false;
    }
    if (!taskMatchesCurrentNode(task)) {
      return false;
    }
    if (text(task.TASK_LEVEL) === "STAFF") {
      return false;
    }
    if (number(task.CHILD_COUNT) > 0) {
      return false;
    }
    if (!text(task.PARENT_ID) && text(task.STATUS) === "DRAFT") {
      return true;
    }
    return text(task.STATUS) === "DOING" || text(task.STATUS) === "RETURNED";
  }

  function canBatchDispatch(task) {
    if (isViewerOnly()) {
      return false;
    }
    return isOffice() &&
      text(task.TASK_LEVEL) === "OFFICE" &&
      text(task.STATUS) === "DRAFT" &&
      text(task.RECEIVER_ID) === currentUserId() &&
      taskMatchesCurrentNode(task) &&
      number(task.CHILD_COUNT) === 0 &&
      !!text(task.DRAFT_DEPT_NODE_ID) &&
      !!text(task.DRAFT_DEPT_USER_ID);
  }

  function canAccept(task) {
    if (isViewerOnly()) {
      return false;
    }
    return text(task.RECEIVER_ID) === currentUserId() && text(task.STATUS) === "TODO" && taskMatchesCurrentNode(task);
  }

  function canTakeBack(task) {
    if (isViewerOnly()) {
      return false;
    }
    return text(task.SENDER_ID) === currentUserId() && text(task.STATUS) === "TODO" && !!text(task.PARENT_ID) && parentMatchesCurrentNode(task);
  }

  function canFeedback(task) {
    if (isViewerOnly()) {
      return false;
    }
    if (text(task.RECEIVER_ID) !== currentUserId()) {
      return false;
    }
    if (!taskMatchesCurrentNode(task)) {
      return false;
    }
    if (text(task.STATUS) !== "DOING" && text(task.STATUS) !== "RETURNED") {
      return false;
    }
    if (canDirectComplete(task)) {
      return false;
    }
    return number(task.CHILD_COUNT) === 0 || number(task.CHILD_OPEN_COUNT) === 0;
  }

  function canDirectComplete(task) {
    if (isViewerOnly()) {
      return false;
    }
    return !text(task.PARENT_ID) &&
      (text(task.TASK_LEVEL) === "STAFF" || text(task.TASK_LEVEL) === "OFFICE") &&
      text(task.RECEIVER_ID) === currentUserId() &&
      taskMatchesCurrentNode(task) &&
      number(task.CHILD_COUNT) === 0 &&
      (text(task.STATUS) === "DOING" || text(task.STATUS) === "RETURNED");
  }

  function canGrassrootDispatch(task) {
    if (isViewerOnly() || !isStaff()) {
      return false;
    }
    return text(task.TASK_LEVEL) === "STAFF" &&
      text(task.RECEIVER_ID) === currentUserId() &&
      taskMatchesCurrentNode(task) &&
      (text(task.STATUS) === "DOING" || text(task.STATUS) === "RETURNED");
  }

  function canViewGrassrootProgress(task) {
    if (!task || isViewerOnly() || !isStaff()) {
      return false;
    }
    var ownsTask = text(task.TASK_LEVEL) === "STAFF" &&
      text(task.RECEIVER_ID) === currentUserId() && taskMatchesCurrentNode(task);
    return ownsTask && (canGrassrootDispatch(task) || number(task.GRASSROOT_TOTAL_COUNT) > 0);
  }

  function canDelete(task) {
    if (isViewerOnly()) {
      return false;
    }
    if (!isParty() && !isOffice() && !isStaff()) {
      return false;
    }
    return !text(task.PARENT_ID) &&
      text(task.RECEIVER_ID) === currentUserId() &&
      taskMatchesCurrentNode(task);
  }

  function applyPersonReadonlyState() {
    var readonly = !canMaintainPersonTree();
    $("#dwPersonParent,#dwPersonNodeName,#dwPersonUserName,#dwPersonRole,#dwPersonSort,#dwPersonRemark")
      .prop("disabled", readonly);
    $("#dwPersonSaveBtn,#dwPersonDeleteBtn,#dwPersonUserPickBtn").toggle(!readonly);
  }

  function findTask(id) {
    for (var i = 0; i < state.tasks.length; i++) {
      if (text(state.tasks[i].ID) === text(id)) {
        return state.tasks[i];
      }
    }
    return null;
  }

  function taskMatchesCurrentNode(task) {
    var node = currentNode();
    if (!task || !node) {
      return false;
    }
    var nodeId = text(node.ID);
    var taskNodeId = text(task.PERSON_NODE_ID);
    if (taskNodeId && taskNodeId === nodeId) {
      return true;
    }
    return !taskNodeId && text(node.ROLE_CODE) === "PARTY_SENDER" && text(task.TASK_LEVEL) === "PARTY";
  }

  function parentMatchesCurrentNode(task) {
    var parentId = text(task.PARENT_ID);
    if (!parentId) {
      return false;
    }
    var parent = findTask(parentId);
    return parent && taskMatchesCurrentNode(parent);
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
    $("#dwTaskReceiverWrap").show().find("label").text(receiverLabel());
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
    $("#dwTaskId,#dwTaskParentId,#dwTaskTitle,#dwTaskContent,#dwTaskTarget,#dwTaskDeadline,#dwTaskAttachmentId,#dwTaskFileName").val("");
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
    state.feedbackMode = "feedback";
    $("#dwFeedbackModal .dw-modal-head h2").text("任务反馈");
    $("#dwFeedbackSubmitBtn").text("提交反馈");
    $("#dwFeedbackTaskId").val(id);
    $("#dwFeedbackContent,#dwFeedbackAttachmentId,#dwFeedbackPreparedId,#dwFeedbackFileName").val("");
    $("#dwFeedbackContent").attr("placeholder", "");
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
    function openPreparedFeedback(preparedId) {
      $("#dwFeedbackPreparedId").val(text(preparedId));
      loadFeedbackTargets(id, function () {
        api("api/feedback/list", { taskId: id }).done(function (res) {
          var rows = res.rows || [];
          $("#dwFeedbackHistory").html('<div class="dw-section-title">\u53cd\u9988\u94fe\u8def</div>' + feedbackHtml(rows, "feedbackModal"));
          initFeedbackAttachmentViews(rows, "feedbackModal");
          openModal("dwFeedbackModal");
          initVisiblePlatformUploader("dwFeedbackAttachment", text(preparedId), FEEDBACK_ATTACHMENT_TABLE, true, FEEDBACK_ATTACHMENT_ELEMENT_ID);
        }).fail(showError);
      }).fail(showError);
    }
    var draftId = text(task.FEEDBACK_DRAFT_ID);
    if (draftId) {
      openPreparedFeedback(draftId);
      return;
    }
    api("api/feedback/prepare", { taskId: id }).done(function (prepared) {
      openPreparedFeedback(text(prepared.id));
    }).fail(showError);
  }

  function loadFeedbackTargets(taskId, done) {
    state.feedbackTargetRequired = false;
    $("#dwFeedbackTargetWrap").hide();
    $("#dwFeedbackTarget").html("");
    return api("api/feedback/targets", { taskId: taskId }).done(function (res) {
      var rows = res.rows || [];
      state.feedbackTargetRequired = text(res.required) === "Y";
      if (state.feedbackTargetRequired) {
        renderFeedbackTargets(rows, text(res.defaultUserId));
        $("#dwFeedbackTargetWrap").show();
      }
      if ($.isFunction(done)) {
        done();
      }
    });
  }

  function renderFeedbackTargets(rows, defaultUserId) {
    var html = '<option value="">请选择部门确认人</option>';
    $.each(rows, function (_, row) {
      var userId = text(row.USER_ID);
      var selected = defaultUserId && userId === defaultUserId ? " selected" : "";
      html += '<option value="' + esc(userId) + '"' + selected +
        ' data-person-node-id="' + esc(text(row.PERSON_NODE_ID)) + '">' +
        esc(text(row.NODE_NAME) + " - " + (text(row.USER_NAME) || userId)) + "</option>";
    });
    $("#dwFeedbackTarget").html(html);
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
      if (canViewGrassrootProgress(task) && number(task.GRASSROOT_TOTAL_COUNT) > 0) {
        html += '<div class="dw-section-title">基层任务进度</div><div id="dwDetailGrassroot" class="dw-detail-grassroot"><div class="dw-empty">正在读取基层任务...</div></div>';
      }
      $("#dwTaskDetailBody").html(html);
      if (hasParentAttachment) {
        initReadOnlyUploader("dwDetailUpperAttachment", parentTaskId, TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
      }
      if (hasTaskAttachment) {
        initReadOnlyUploader("dwDetailTaskAttachment", text(task.ID), TASK_ATTACHMENT_TABLE, TASK_ATTACHMENT_ELEMENT_ID);
      }
      initFeedbackAttachmentViews(rows, "detail");
      openModal("dwDetailModal");
      if (canViewGrassrootProgress(task) && number(task.GRASSROOT_TOTAL_COUNT) > 0) {
        api("api/grassroot/list", currentNodeParams({ taskId: id })).done(function (grassrootRes) {
          $("#dwDetailGrassroot").html(grassrootDetailHtml(grassrootRes));
        }).fail(function () {
          $("#dwDetailGrassroot").html('<div class="dw-empty">基层任务读取失败</div>');
        });
      }
    }).fail(showError);
  }

  function grassrootDetailHtml(res) {
    var rows = res.rows || [];
    var summary = res.summary || {};
    var html = '<div class="dw-detail-grassroot-summary">' +
      '<span><strong>' + number(summary.completedCount) + "/" + number(summary.totalCount) + '</strong> 总体完成</span>' +
      '<span><strong>' + number(summary.requiredCompletedCount) + "/" + number(summary.requiredTotalCount) + '</strong> 必做完成</span>' +
      '<span><strong>' + number(summary.failedCount) + '</strong> 分发失败</span></div>';
    html += '<div class="dw-table-wrap"><table class="dw-table dw-detail-grassroot-table"><thead><tr>' +
      '<th>业务</th><th>接收组织</th><th>基层状态</th><th>完成期限</th></tr></thead><tbody>';
    $.each(rows, function (_, row) {
      html += "<tr><td>" + esc(text(row.BUSINESS_NAME) || "-") + "</td>" +
        "<td>" + esc(text(row.PARTY_ORG_NAME) || "-") + "</td>" +
        "<td>" + grassrootTaskStatusBadge(row) + "</td>" +
        "<td>" + esc(dateOnly(row.DEADLINE) || "-") + "</td></tr>";
    });
    if (!rows.length) {
      html += '<tr><td colspan="4"><div class="dw-empty">暂无基层任务</div></td></tr>';
    }
    return html + "</tbody></table></div>";
  }

  function taskSummaryHtml(task) {
    var html = '<div class="dw-detail-layout dw-task-summary-grid">';
    html += detailItem("\u4efb\u52a1\u6807\u9898", text(task.TITLE), "dw-detail-title-item");
    html += '<div class="dw-detail-meta-row">';
    html += detailItem("\u5c42\u7ea7", levelLabel(text(task.TASK_LEVEL)), "dw-detail-compact-item dw-detail-level-item");
    html += detailItem("\u72b6\u6001", statusLabel(text(task.STATUS)), "dw-detail-compact-item dw-detail-status-item");
    html += detailItem("\u622a\u6b62\u65f6\u95f4", dateOnly(task.PLAN_DEADLINE) || "-", "dw-detail-compact-item dw-detail-deadline-item");
    html += detailItem("\u4e0b\u53d1\u4eba", text(task.SENDER_NAME) || "-", "dw-detail-compact-item dw-detail-person-item");
    html += detailItem("\u63a5\u6536\u4eba", text(task.RECEIVER_NAME) || "-", "dw-detail-compact-item dw-detail-person-item");
    html += "</div>";
    html += '<div class="dw-detail-text-grid">';
    html += detailItem("\u5de5\u4f5c\u76ee\u6807", text(task.TARGET_DESC) || "-", "dw-detail-wide");
    html += detailItem("\u5de5\u4f5c\u5185\u5bb9", text(task.CONTENT) || "-", "dw-detail-wide");
    return html + "</div></div>";
  }

  function feedbackHtml(rows, prefix) {
    if (!rows.length) {
      return '<div class="dw-empty">\u6682\u65e0\u53cd\u9988</div>';
    }
    var html = '<div class="dw-feedback-chain">';
    state.feedbackById = {};
    $.each(rows, function (index, row) {
      state.feedbackById[text(row.ID)] = row;
      var result = text(row.CONFIRM_RESULT);
      var returnReason = text(row.RETURN_REASON);
      var attachment = feedbackAttachmentButton(row);
      var reviewerName = text(row.CONFIRM_USER_NAME) || text(row.CONFIRM_USER_ID);
      var reviewTime = dateTime(row.CONFIRM_TIME);
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
      if (reviewerName || reviewTime) {
        html += '<span class="dw-feedback-reviewer"><b>\u5ba1\u6838\u4eba</b>' + esc(reviewerName || "-") + "</span>";
        html += '<span class="dw-feedback-reviewer"><b>\u5ba1\u6838\u65f6\u95f4</b>' + esc(reviewTime || "-") + "</span>";
      }
      html += "</div>";
      var editable = text(row.CONFIRM_RESULT) === "PENDING" && text(row.CAN_CONFIRM) === "Y" &&
        text(row.CAN_EDIT) === "Y" && isOffice() && text(row.TASK_LEVEL) === "STAFF";
      html += '<div class="dw-feedback-content-block"><span class="dw-feedback-content-label">\u53cd\u9988\u5185\u5bb9</span>';
      if (editable) {
        html += '<textarea class="dw-textarea dw-feedback-review-editor" id="dwFeedbackEdit_' + esc(text(row.ID)) + '">' +
          esc(text(row.FEEDBACK_CONTENT)) + "</textarea>";
      } else {
        html += '<div class="dw-feedback-cell-text">' + esc(text(row.FEEDBACK_CONTENT) || "-") + "</div>";
      }
      html += "</div>";
      if (returnReason) {
        html += '<div class="dw-feedback-return-block"><span class="dw-feedback-content-label">\u9000\u56de\u539f\u56e0</span>' +
          '<div class="dw-feedback-cell-text">' + esc(returnReason) + "</div></div>";
      }
      html += '<div class="dw-feedback-card-actions">';
      if (text(row.CONFIRM_RESULT) === "PENDING" && text(row.CAN_CONFIRM) === "Y") {
        var confirmLabel = editable && text(row.CAN_FORWARD) === "Y" ? "\u901a\u8fc7\u5e76\u5411\u4e0a\u53cd\u9988" : "\u901a\u8fc7";
        html += '<button type="button" class="dw-btn dw-task-action-btn dw-action-pass" data-feedback-action="confirm" data-feedback-id="' + esc(text(row.ID)) + '">' + confirmLabel + "</button>";
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
    if (!text(row.ID)) {
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
    var usePlatformViewer = businessId && options.elementId !== FEEDBACK_ATTACHMENT_ELEMENT_ID;
    if (!businessId && !legacyAttachmentId) {
      message("\u6682\u65e0\u9644\u4ef6");
      return;
    }
    if (!(window.layer && layer.open)) {
      message("\u5e73\u53f0\u5f39\u7a97\u672a\u52a0\u8f7d");
      return;
    }
    var viewerId = "dwAttachmentViewer" + new Date().getTime();
    var listId = "dwAttachmentList" + new Date().getTime();
    var html = '<div class="dw-attachment-viewer">';
    html += '<div id="' + listId + '" class="dw-attachment-direct-list"><div class="dw-empty">\u6b63\u5728\u8bfb\u53d6\u9644\u4ef6...</div></div>';
    if (usePlatformViewer) {
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
        api("api/attachment/list", {
          businessId: businessId,
          elementId: options.elementId,
          legacyAttachmentId: legacyAttachmentId
        }).done(function (res) {
          $("#" + listId).html(attachmentDirectListHtml(res.rows || []));
        }).fail(function (err) {
          $("#" + listId).html('<div class="dw-empty">' + esc(err || "\u9644\u4ef6\u8bfb\u53d6\u5931\u8d25") + "</div>");
        });
        if (usePlatformViewer) {
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

  function attachmentDirectListHtml(rows) {
    if (!rows.length) {
      return '<div class="dw-empty">\u6682\u672a\u67e5\u5230\u9644\u4ef6</div>';
    }
    var html = '<div class="dw-attachment-direct-title">\u9644\u4ef6\u6e05\u5355</div>';
    html += '<div class="dw-attachment-direct-items">';
    $.each(rows, function (_, row) {
      html += '<a class="dw-attachment-direct-item" href="' + esc(text(row.url)) + '" target="_blank">' +
        '<span class="dw-attachment-direct-name">' + esc(text(row.name) || "\u672a\u547d\u540d\u9644\u4ef6") + "</span>" +
        '<span class="dw-attachment-direct-meta">' + esc(fileSizeText(row.size)) + "</span>" +
        '<span class="dw-attachment-direct-download">\u4e0b\u8f7d</span>' +
        "</a>";
    });
    html += "</div>";
    return html;
  }

  function fileSizeText(value) {
    var size = number(value);
    if (!size) {
      return "-";
    }
    if (size < 1024) {
      return size + " B";
    }
    if (size < 1024 * 1024) {
      return Math.round(size / 1024 * 10) / 10 + " KB";
    }
    return Math.round(size / 1024 / 1024 * 10) / 10 + " MB";
  }

  function handleFeedbackAction(action, id) {
    if (action === "confirm") {
      var row = state.feedbackById[id] || {};
      var $editor = $("#dwFeedbackEdit_" + id);
      var content = $editor.length ? $.trim($editor.val()) : text(row.FEEDBACK_CONTENT);
      if (!content) {
        message("\u53cd\u9988\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");
        return;
      }
      if (text(row.CAN_FORWARD) === "Y") {
        prepareConfirmAndForward(row, content);
      } else {
        confirmBox("\u786e\u5b9a\u901a\u8fc7\u8be5\u53cd\u9988\u5417\uff1f", function () {
          submitFeedbackReview("api/feedback/confirm", { feedbackId: id, content: content }, "\u53cd\u9988\u5df2\u901a\u8fc7");
        });
      }
    } else if (action === "return") {
      returnFeedbackBox(id);
    }
  }

  function prepareConfirmAndForward(row, content) {
    api("api/feedback/targets", { taskId: text(row.TASK_PARENT_ID) }).done(function (res) {
      var targets = res.rows || [];
      if (!targets.length) {
        message("\u4e0a\u7ea7\u90e8\u95e8\u8282\u70b9\u672a\u7ed1\u5b9a\u786e\u8ba4\u4eba");
        return;
      }
      if (targets.length === 1) {
        confirmBox("\u786e\u5b9a\u901a\u8fc7\u5e76\u5c06\u4fee\u6539\u540e\u7684\u53cd\u9988\u76f4\u63a5\u63d0\u4ea4\u7ed9\u90e8\u95e8\u5417\uff1f", function () {
          confirmAndForward(row, content, text(targets[0].USER_ID));
        });
        return;
      }
      openForwardTargetBox(row, content, targets);
    }).fail(showError);
  }

  function openForwardTargetBox(row, content, targets) {
    if (!(window.layer && layer.open)) {
      message("\u5e73\u53f0\u5f39\u7a97\u672a\u52a0\u8f7d");
      return;
    }
    var options = '<option value="">\u8bf7\u9009\u62e9\u90e8\u95e8\u786e\u8ba4\u4eba</option>';
    $.each(targets, function (_, target) {
      options += '<option value="' + esc(text(target.USER_ID)) + '">' +
        esc(text(target.NODE_NAME) + " - " + (text(target.USER_NAME) || text(target.USER_ID))) + "</option>";
    });
    layer.open({
      type: 1,
      title: "\u901a\u8fc7\u5e76\u5411\u4e0a\u53cd\u9988",
      area: ["460px", "280px"],
      skin: "dw-layer-dialog dw-forward-layer",
      content: '<div class="dw-forward-dialog">' +
        '<div class="dw-forward-dialog-note">\u79d1\u5458\u53cd\u9988\u901a\u8fc7\u540e\uff0c\u5c06\u4f7f\u7528\u5ba1\u6838\u540e\u7684\u5185\u5bb9\u76f4\u63a5\u63d0\u4ea4\u7ed9\u90e8\u95e8\u786e\u8ba4\u4eba\u3002</div>' +
        '<label class="dw-forward-dialog-field"><span>\u90e8\u95e8\u786e\u8ba4\u4eba</span>' +
        '<select id="dwForwardTarget" class="dw-forward-dialog-select">' + options + "</select></label></div>",
      btn: ["\u901a\u8fc7\u5e76\u63d0\u4ea4", "\u53d6\u6d88"],
      yes: function (index) {
        var targetUserId = $("#dwForwardTarget").val();
        if (!targetUserId) {
          message("\u8bf7\u9009\u62e9\u90e8\u95e8\u786e\u8ba4\u4eba");
          return;
        }
        layer.close(index);
        confirmAndForward(row, content, targetUserId);
      }
    });
  }

  function confirmAndForward(row, content, targetUserId) {
    submitFeedbackReview("api/feedback/confirmAndForward", {
      feedbackId: text(row.ID),
      content: content,
      targetUserId: targetUserId
    }, "\u53cd\u9988\u5df2\u901a\u8fc7\u5e76\u63d0\u4ea4\u7ed9\u90e8\u95e8");
  }

  function submitFeedbackReview(url, payload, successMessage) {
    api(url, payload).done(function () {
      closeModal("dwDetailModal");
      closeModal("dwFeedbackModal");
      message(successMessage);
      afterTaskChanged();
    }).fail(showError);
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
    if (!hasUploaderExt()) {
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
      html += actionBtn("dispatch", id, "\u53d1\u9001", "dw-action-dispatch");
    }
    if (canAccept(task)) {
      html += actionBtn("accept", id, "\u63a5\u6536", "dw-action-accept");
    }
    if (canTakeBack(task)) {
      html += actionBtn("takeBack", id, "\u62ff\u56de", "dw-action-takeback");
    }
    if (canDirectComplete(task)) {
      html += actionBtn("complete", id, "\u5b8c\u6210", "dw-action-feedback");
    }
    if (canFeedback(task)) {
      html += actionBtn("feedback", id, feedbackActionLabel(task), "dw-action-feedback");
    }
    if (canViewGrassrootProgress(task)) {
      html += actionBtn("grassroot", id, canGrassrootDispatch(task) ? "\u57fa\u5c42\u5206\u53d1" : "\u57fa\u5c42\u8fdb\u5ea6", "dw-action-grassroot");
    }
    return html;
  }

  function actionBtn(action, id, label, cls) {
    return '<button type="button" class="dw-btn dw-task-action-btn ' + esc(cls || "") + '" data-task-action="' + esc(action) +
      '" data-task-id="' + id + '">' + esc(label) + "</button>";
  }

  function taskNoticeLabel(task) {
    if (text(task.STATUS) === "PENDING_CONFIRM") {
      if (text(task.TASK_LEVEL) === "OFFICE" && !text(task.PARENT_ID)) {
        return "待部长确认";
      }
      return "待确认";
    }
    if (text(task.STATUS) === "RETURNED") {
      return "被退回";
    }
    return "待处理";
  }

  function taskTreeCell(task, depth, childCount, expanded, notice) {
    var id = text(task.ID);
    var icon = childCount ? (expanded ? "\u25be" : "\u25b8") : "\u2022";
    var toggleClass = childCount ? "dw-task-toggle" : "dw-task-toggle is-leaf";
    var html = '<div class="dw-task-cell" style="padding-left:' + (depth * 20) + 'px">';
    html += '<button type="button" class="' + toggleClass + '" data-task-id="' + esc(id) + '">' + icon + "</button>";
    html += '<div class="dw-task-title-content"><div class="dw-task-title">' + esc(text(task.TITLE));
    if (notice) {
      html += ' <span class="dw-task-notice">' + esc(taskNoticeLabel(task)) + "</span>";
    }
    html += "</div>";
    if (childCount) {
      html += '<div class="dw-muted dw-task-child-count">' + childCount + " \u4e2a\u4e0b\u7ea7\u4efb\u52a1</div>";
    }
    html += taskGrassrootProgressHtml(task);
    html += "</div></div>";
    return html;
  }

  function taskGrassrootProgressHtml(task) {
    var total = number(task.GRASSROOT_TOTAL_COUNT);
    if (!total) {
      return "";
    }
    var completed = number(task.GRASSROOT_COMPLETED_COUNT);
    var requiredTotal = number(task.GRASSROOT_REQUIRED_TOTAL_COUNT);
    var requiredCompleted = number(task.GRASSROOT_REQUIRED_COMPLETED_COUNT);
    var percent = Math.max(0, Math.min(100, Math.round(completed * 100 / total)));
    return '<div class="dw-task-grassroot-progress"><div class="dw-task-grassroot-progress-labels">' +
      '<span>基层 <strong>' + completed + "/" + total + '</strong></span>' +
      '<span>必做 <strong>' + requiredCompleted + "/" + requiredTotal + '</strong></span></div>' +
      '<i><b style="width:' + percent + '%"></b></i></div>';
  }

  function personTreeCell(node, depth, childCount, expanded) {
    var id = text(node.ID);
    var indent = depth * 20;
    var icon = childCount ? (expanded ? "\u25be" : "\u25b8") : "\u2022";
    var toggleClass = childCount ? "dw-tree-toggle" : "dw-tree-toggle is-leaf";
    var html = '<span class="dw-tree-cell" style="padding-left:' + indent + 'px">';
    html += '<button type="button" class="' + toggleClass + '" data-person-id="' + esc(id) + '"' + (childCount ? "" : ' tabindex="-1"') + ">" + icon + "</button>";
    html += '<span class="dw-person-level dw-person-level-' + esc(personLevelClass(text(node.ROLE_CODE))) + '">' + esc(personLevelLabel(text(node.ROLE_CODE))) + "</span>";
    html += '<span class="dw-tree-title">' + esc(text(node.NODE_NAME)) + "</span>";
    if (childCount) {
      html += '<span class="dw-tree-count">' + childCount + "</span>";
    }
    if (canMaintainPersonTree() && state.selectedPersonId === id && NEXT_ROLE[text(node.ROLE_CODE)]) {
      html += '<button type="button" class="dw-inline-add-btn" data-person-action="addChild" data-person-id="' + esc(id) + '">' +
        '<span class="dw-inline-add-icon" aria-hidden="true"></span>新增下级</button>';
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

  function hasUploaderExt() {
    return !!($ && $["fn"] && $["fn"].uploaderExt);
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
    var timestampDate = timestampToDate(raw);
    if (timestampDate) {
      return formatDate(timestampDate);
    }
    return raw.length >= 10 ? raw.substring(0, 10) : raw;
  }

  function dateTime(value) {
    var raw = text(value);
    if (!raw) {
      return "";
    }
    var timestampDate = timestampToDate(raw);
    if (timestampDate) {
      return formatDate(timestampDate) + " " + pad2(timestampDate.getHours()) + ":" + pad2(timestampDate.getMinutes()) + ":" + pad2(timestampDate.getSeconds());
    }
    return raw.replace("T", " ").substring(0, Math.min(raw.length, 19));
  }

  function timestampToDate(value) {
    var raw = $.trim(text(value));
    var dateMatch = raw.match(/^\/Date\((\d+)\)\/$/);
    if (dateMatch) {
      raw = dateMatch[1];
    }
    var date = null;
    if (/^\d{13}$/.test(raw)) {
      date = new Date(parseInt(raw, 10));
    } else if (/^\d{10}$/.test(raw)) {
      date = new Date(parseInt(raw, 10) * 1000);
    }
    return date && !isNaN(date.getTime()) ? date : null;
  }

  function formatDate(date) {
    return date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate());
  }

  function pad2(value) {
    return value < 10 ? "0" + value : String(value);
  }

  function today() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    return now.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
  }
})(jQuery, echarts);
