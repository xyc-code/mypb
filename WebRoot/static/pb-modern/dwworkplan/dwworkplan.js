(function (window, $) {
  if (!$) {
    return;
  }

  var baseUrl = 'platform/avicit/pb/dwworkplan/dwWorkPlanController/';
  var state = {
    user: null,
    batches: [],
    tasks: [],
    taskExpanded: {},
    receivers: [],
    persons: [],
    personExpanded: {},
    selectedTask: null,
    selectedPerson: null
  };

  var text = {
    allBatches: '\u5168\u90e8\u6279\u6b21',
    noReceiver: '\u4eba\u5458\u6811\u672a\u914d\u7f6e\u4e0b\u7ea7',
    noTask: '\u6682\u65e0\u4efb\u52a1',
    noFeedback: '\u6682\u65e0\u53cd\u9988',
    selectTask: '\u8bf7\u5148\u9009\u62e9\u4efb\u52a1',
    selectReceiver: '\u8bf7\u9009\u62e9\u63a5\u6536\u4eba',
    chooseReceiver: '\u8bf7\u9009\u62e9\u63a5\u6536\u4eba',
    selectNode: '\u8bf7\u5148\u9009\u62e9\u8282\u70b9',
    selectOneTask: '\u8bf7\u4ece\u4efb\u52a1\u6c60\u9009\u62e9\u4e00\u6761\u4efb\u52a1',
    chooseBatch: '\u8bf7\u5148\u9009\u62e9\u6216\u521b\u5efa\u6279\u6b21',
    fillTitle: '\u8bf7\u586b\u5199\u4efb\u52a1\u6807\u9898',
    cannotDispatch: '\u8be5\u4efb\u52a1\u4e0d\u80fd\u518d\u4e0b\u53d1',
    fillNodeName: '\u8bf7\u586b\u5199\u8282\u70b9\u540d\u79f0',
    rootNodeCannotDelete: '\u6839\u8282\u70b9\u4e0d\u80fd\u505c\u7528',
    expandAll: '\u5c55\u5f00\u5168\u90e8',
    collapseAll: '\u6536\u8d77\u5168\u90e8',
    batchExisting: '\u6279\u6b21\u5df2\u5b58\u5728\uff0c\u5df2\u9009\u4e2d',
    batchCreated: '\u6279\u6b21\u5df2\u521b\u5efa',
    batchDeleted: '\u6279\u6b21\u5df2\u5220\u9664',
    confirmDeleteBatch: '\u786e\u5b9a\u5220\u9664\u5f53\u524d\u6279\u6b21\u5417\uff1f\u8be5\u6279\u6b21\u4e0b\u7684\u4efb\u52a1\u3001\u53cd\u9988\u548c\u9644\u4ef6\u4e5f\u4f1a\u4e00\u8d77\u5220\u9664\u3002',
    onlyPartyBatch: '\u53ea\u6709\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005\u53ef\u4ee5\u7ef4\u62a4\u6279\u6b21',
    rootSaved: '\u515a\u59d4\u4efb\u52a1\u5df2\u4fdd\u5b58',
    accepted: '\u4efb\u52a1\u5df2\u63a5\u6536',
    dispatched: '\u4efb\u52a1\u5df2\u4e0b\u53d1',
    takenBack: '\u4efb\u52a1\u5df2\u62ff\u56de',
    confirmTakeBack: '\u786e\u5b9a\u62ff\u56de\u8be5\u4efb\u52a1\u5417\uff1f\u62ff\u56de\u540e\u53ef\u4ee5\u91cd\u65b0\u7f16\u8f91\u5e76\u518d\u6b21\u4e0b\u53d1\u3002',
    feedbackSubmitted: '\u53cd\u9988\u5df2\u63d0\u4ea4',
    feedbackConfirmed: '\u53cd\u9988\u5df2\u786e\u8ba4',
    feedbackReturned: '\u53cd\u9988\u5df2\u9000\u56de',
    newNotice: '\u65b0',
    newTaskNotice: '\u6709\u65b0\u4efb\u52a1',
    processing: '\u5904\u7406\u4e2d...',
    noFeedbackPermission: '\u5f53\u524d\u4efb\u52a1\u4e0d\u80fd\u63d0\u4ea4\u53cd\u9988',
    noDispatchPermission: '\u5f53\u524d\u4efb\u52a1\u65e0\u4e0b\u53d1\u6743\u9650',
    dispatchAfterAccept: '\u8bf7\u5148\u63a5\u6536\u4efb\u52a1\uff0c\u518d\u4e0b\u53d1',
    confirmPending: '\u5f85\u786e\u8ba4',
    confirmPassed: '\u5df2\u901a\u8fc7',
    confirmRejected: '\u5df2\u9000\u56de',
    nodeSaved: '\u8282\u70b9\u5df2\u4fdd\u5b58',
    nodeDisabled: '\u8282\u70b9\u5df2\u505c\u7528',
    confirmDisable: '\u786e\u5b9a\u505c\u7528\u8be5\u8282\u70b9\u5417\uff1f',
    returnReason: '\u8bf7\u8f93\u5165\u9000\u56de\u539f\u56e0',
    requestFailed: '\u8bf7\u6c42\u5931\u8d25\uff1a',
    actionFailed: '\u64cd\u4f5c\u5931\u8d25',
    userSelectMissing: '\u5e73\u53f0\u9009\u4eba\u7ec4\u4ef6\u672a\u52a0\u8f7d',
    uploading: '\u9644\u4ef6\u4e0a\u4f20\u4e2d...',
    uploadFailed: '\u9644\u4ef6\u4e0a\u4f20\u5931\u8d25',
    noAttachment: '\u672a\u9009\u62e9\u9644\u4ef6',
    selectedAttachment: '\u5df2\u9009\u62e9\uff1a',
    uploadedAttachment: '\u5df2\u4e0a\u4f20\uff1a',
    attachment: '\u9644\u4ef6',
    download: '\u4e0b\u8f7d',
    confirmTitle: '\u786e\u8ba4',
    countItem: ' \u6761',
    countNode: ' \u4e2a\u8282\u70b9',
    noneParent: '\u65e0\u7236\u8282\u70b9',
    overdue: '\u903e\u671f ',
    echartsMissing: 'ECharts \u672a\u52a0\u8f7d'
  };

  var statusText = {
    DRAFT: '\u8349\u7a3f',
    TODO: '\u5f85\u63a5\u6536',
    DOING: '\u6267\u884c\u4e2d',
    WAIT_CHILD: '\u5f85\u4e0b\u7ea7\u5b8c\u6210',
    PENDING_CONFIRM: '\u5f85\u786e\u8ba4',
    COMPLETED: '\u5df2\u5b8c\u6210',
    RETURNED: '\u5df2\u9000\u56de'
  };

  var levelText = {
    PARTY: '\u515a\u59d4',
    DEPT: '\u90e8\u95e8',
    OFFICE: '\u79d1\u5ba4',
    STAFF: '\u79d1\u5458'
  };

  var roleText = {
    PARTY_SENDER: '\u515a\u59d4\u8ba1\u5212\u4e0b\u53d1\u8005',
    DEPT_MINISTER: '\u90e8\u957f',
    OFFICE_DIRECTOR: '\u5ba4\u4e3b\u4efb',
    STAFF: '\u79d1\u5458'
  };

  var nextPersonRole = {
    PARTY_SENDER: 'DEPT_MINISTER',
    DEPT_MINISTER: 'OFFICE_DIRECTOR',
    OFFICE_DIRECTOR: 'STAFF',
    STAFF: 'STAFF'
  };

  function api(path, data, done, always) {
    $.ajax({
      url: baseUrl + path,
      type: 'post',
      dataType: 'json',
      data: data || {},
      success: function (res) {
        if (res && res.flag === 'failure') {
          toast(res.errorMsg || text.actionFailed);
          always && always(false, res || {});
          return;
        }
        done && done(res || {});
        always && always(true, res || {});
      },
      error: function (xhr) {
        toast(text.requestFailed + (xhr.status || 'network'));
        always && always(false, xhr);
      }
    });
  }

  function uploadFile(inputSelector, hiddenSelector, statusSelector, businessType, done, fail) {
    var input = $(inputSelector)[0];
    var existingId = $(hiddenSelector).val();
    if (!input || !input.files || !input.files.length) {
      done(existingId || '');
      return;
    }
    var formData = new FormData();
    formData.append('file', input.files[0]);
    formData.append('businessType', businessType);
    $(statusSelector).text(text.uploading);
    $.ajax({
      url: baseUrl + 'api/attachment/upload',
      type: 'post',
      dataType: 'json',
      data: formData,
      processData: false,
      contentType: false,
      success: function (res) {
        if (res && res.flag === 'failure') {
          toast(res.errorMsg || text.uploadFailed);
          $(statusSelector).text(text.uploadFailed);
          fail && fail();
          return;
        }
        $(hiddenSelector).val(res.id || '');
        $(statusSelector).text(text.uploadedAttachment + (res.fileName || input.files[0].name || ''));
        done(res.id || '');
      },
      error: function (xhr) {
        toast(text.requestFailed + (xhr.status || 'network'));
        $(statusSelector).text(text.uploadFailed);
        fail && fail();
      }
    });
  }

  function bindFileStatus(inputSelector, hiddenSelector, statusSelector) {
    $(inputSelector).on('change', function () {
      $(hiddenSelector).val('');
      var fileName = this.files && this.files.length ? this.files[0].name : '';
      $(statusSelector).text(fileName ? text.selectedAttachment + fileName : text.noAttachment);
    });
  }

  function clearFile(inputSelector, hiddenSelector, statusSelector) {
    $(inputSelector).val('');
    $(hiddenSelector).val('');
    $(statusSelector).text(text.noAttachment);
  }

  function attachmentLink(id, fileName) {
    if (!id) {
      return '';
    }
    var label = fileName || text.download;
    return '<a class="dw-attach-link" target="_blank" href="' + baseUrl + 'api/attachment/download?id=' + encodeURIComponent(id) + '">' +
      html(label) + '</a>';
  }

  function toast(msg) {
    if (window.layer && layer.msg) {
      layer.msg(msg, {time: 1800, offset: '80px', skin: 'dw-layer-msg'});
    } else {
      window.alert(msg);
    }
  }

  function confirmBox(msg, yes) {
    if (window.layer && layer.confirm) {
      layer.confirm(msg, {icon: 3, title: text.confirmTitle, skin: 'dw-layer-dialog'}, function (index) {
        layer.close(index);
        yes();
      });
    } else if (window.confirm(msg)) {
      yes();
    }
  }

  function promptBox(msg, yes) {
    if (window.layer && layer.prompt) {
      layer.prompt({title: msg, formType: 2, area: ['360px', '120px'], skin: 'dw-layer-dialog'}, function (value, index) {
        layer.close(index);
        yes(value || '');
      });
      return;
    }
    var value = window.prompt(msg, '');
    if (value !== null) {
      yes(value || '');
    }
  }

  function setButtonBusy($btn, busy) {
    $btn.data('busy', !!busy)
      .prop('disabled', !!busy)
      .toggleClass('is-disabled is-busy', !!busy);
  }

  function isButtonBusy($btn) {
    return $btn.data('busy') === true;
  }

  function html(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function rowValue(row, key) {
    if (!row) {
      return '';
    }
    return row[key] == null ? row[key.toLowerCase()] : row[key];
  }

  function dateOnly(value) {
    if (!value) {
      return '';
    }
    if (typeof value === 'number') {
      return new Date(value).toISOString().slice(0, 10);
    }
    return String(value).slice(0, 10);
  }

  function currentYear() {
    return new Date().getFullYear();
  }

  function selectedBatchId(selector) {
    return $(selector).val() || '';
  }

  function batchLabel(batch) {
    var year = rowValue(batch, 'PLAN_YEAR') || '';
    var quarter = rowValue(batch, 'QUARTER') || '';
    var quarterNo = String(quarter).replace(/[^0-9]/g, '');
    if (year && quarterNo) {
      return year + '/' + quarterNo + '\u5b63\u5ea6';
    }
    return rowValue(batch, 'BATCH_NAME') || (year + ' ' + quarter);
  }

  function fillBatches(selector, includeAll) {
    var $select = $(selector);
    var current = $select.val();
    var hadOptions = $select.children().length > 0;
    $select.empty();
    if (includeAll) {
      $select.append('<option value="">' + text.allBatches + '</option>');
    }
    $.each(state.batches, function (_, batch) {
      var id = rowValue(batch, 'ID');
      var name = batchLabel(batch);
      $select.append('<option value="' + html(id) + '">' + html(name) + '</option>');
    });
    if (current && $select.find('option[value="' + current + '"]').length) {
      $select.val(current);
    } else if ((!includeAll || !hadOptions) && state.batches.length) {
      $select.val(rowValue(state.batches[0], 'ID'));
    }
  }

  function loadBatches(done) {
    api('api/batch/list', {}, function (res) {
      state.batches = res.rows || [];
      done && done();
    });
  }

  function loadUser(done) {
    api('api/currentUser', {}, function (res) {
      state.user = res;
      var roles = $.map(res.roles || [], function (role) {
        return roleText[rowValue(role, 'ROLE_CODE')] || rowValue(role, 'ROLE_CODE');
      }).join('\u3001');
      $('#dwUserText').text((res.userName || res.userId || '') + (roles ? ' | ' + roles : ''));
      toggleRootBox();
      done && done();
    });
  }

  function userHasRole(roleCode) {
    var roles = (state.user && state.user.roles) || [];
    for (var i = 0; i < roles.length; i++) {
      if (rowValue(roles[i], 'ROLE_CODE') === roleCode) {
        return true;
      }
    }
    return false;
  }

  function toggleRootBox() {
    var party = userHasRole('PARTY_SENDER');
    $('#dwRootTaskBox').toggle(party);
    $('.dw-party-only').toggle(party);
  }

  function setBoxEnabled(selector, enabled) {
    $(selector).toggleClass('is-disabled', !enabled);
    $(selector).find('input,select,textarea,button').prop('disabled', !enabled);
  }

  function setProcessEnabled(enabled) {
    setBoxEnabled('#dwDispatchProcessBox', enabled);
    setBoxEnabled('#dwFeedbackProcessBox', enabled);
  }

  function statusBadge(status, overdue) {
    var cls = '';
    if (status === 'COMPLETED') {
      cls = ' is-done';
    } else if (status === 'RETURNED' || overdue === 'Y') {
      cls = ' is-danger';
    } else if (status === 'PENDING_CONFIRM' || status === 'WAIT_CHILD') {
      cls = ' is-warn';
    }
    return '<span class="dw-badge' + cls + '">' + html((overdue === 'Y' ? text.overdue : '') + (statusText[status] || status || '')) + '</span>';
  }

  function initWorkbench() {
    $('#dwYear').val(currentYear());
    setProcessEnabled(false);
    bindWorkbench();
    loadUser(function () {
      loadBatches(function () {
        fillBatches('#dwBatchSelect', false);
        loadReceivers();
        loadTasks();
      });
    });
  }

  function bindWorkbench() {
    $('#dwRefreshBtn').on('click', function () {
      loadTasks();
    });
    $('#dwReceiverSelect').on('change', function () {
      updateDispatchButton(state.selectedTask);
    });
    $('#dwBatchSelect,#dwStatusFilter').on('change', function () {
      state.selectedTask = null;
      renderSelectedTask();
      $('#dwFeedbackList').empty();
      loadTasks();
    });
    $('.dw-workbench-tabs .dw-flow-step').on('click', function () {
      showWorkbenchTab($(this).data('tab'));
    });
    bindFileStatus('#dwRootFile', '#dwRootAttachment', '#dwRootAttachStatus');
    bindFileStatus('#dwChildFile', '#dwChildAttachment', '#dwChildAttachStatus');
    bindFileStatus('#dwFeedbackFile', '#dwFeedbackAttachment', '#dwFeedbackAttachStatus');
    $('#dwCreateBatchBtn').on('click', function () {
      if (!userHasRole('PARTY_SENDER')) {
        toast(text.onlyPartyBatch);
        return;
      }
      api('api/batch/create', {
        year: $('#dwYear').val(),
        quarter: $('#dwQuarter').val()
      }, function (res) {
        toast(res.existing ? text.batchExisting : text.batchCreated);
        loadBatches(function () {
          fillBatches('#dwBatchSelect', false);
          $('#dwBatchSelect').val(res.id);
          loadTasks();
        });
      });
    });
    $('#dwDeleteBatchBtn').on('click', function () {
      if (!userHasRole('PARTY_SENDER')) {
        toast(text.onlyPartyBatch);
        return;
      }
      var batchId = selectedBatchId('#dwBatchSelect');
      if (!batchId) {
        toast(text.chooseBatch);
        return;
      }
      confirmBox(text.confirmDeleteBatch, function () {
        api('api/batch/delete', {id: batchId}, function () {
          toast(text.batchDeleted);
          state.selectedTask = null;
          renderSelectedTask();
          $('#dwFeedbackList').empty();
          loadBatches(function () {
            fillBatches('#dwBatchSelect', false);
            loadTasks();
          });
        });
      });
    });
    $('#dwSaveRootBtn').on('click', function () {
      var $btn = $(this);
      if (isButtonBusy($btn)) {
        return;
      }
      if (!selectedBatchId('#dwBatchSelect')) {
        toast(text.chooseBatch);
        return;
      }
      if (!$('#dwRootTitle').val()) {
        toast(text.fillTitle);
        return;
      }
      setButtonBusy($btn, true);
      uploadFile('#dwRootFile', '#dwRootAttachment', '#dwRootAttachStatus', 'ROOT_TASK', function (attachmentId) {
        api('api/task/saveRoot', {
          batchId: selectedBatchId('#dwBatchSelect'),
          title: $('#dwRootTitle').val(),
          content: $('#dwRootContent').val(),
          targetDesc: $('#dwRootTarget').val(),
          planDeadline: $('#dwRootDeadline').val(),
          attachmentId: attachmentId
        }, function () {
          toast(text.rootSaved);
          clearFile('#dwRootFile', '#dwRootAttachment', '#dwRootAttachStatus');
          loadTasks();
        }, function () {
          setButtonBusy($btn, false);
        });
      }, function () {
        setButtonBusy($btn, false);
      });
    });
    $('#dwDispatchBtn').on('click', dispatchSelectedTask);
    $('#dwAcceptBtn,#dwDispatchAcceptBtn').on('click', acceptSelectedTask);
    $('#dwSubmitFeedbackBtn').on('click', submitSelectedFeedback);
  }

  function loadReceivers() {
    api('api/person/receivers', {}, function (res) {
      state.receivers = res.rows || [];
      var $select = $('#dwReceiverSelect');
      var current = $select.val();
      $select.empty();
      $select.append('<option value="">' + text.chooseReceiver + '</option>');
      if (!state.receivers.length) {
        $select.append('<option value="" disabled>' + text.noReceiver + '</option>');
      }
      $.each(state.receivers, function (_, node) {
        var nodeName = rowValue(node, 'NODE_NAME') || '';
        var userName = rowValue(node, 'USER_NAME') || rowValue(node, 'USER_ID') || '';
        var label = nodeName && userName && nodeName !== userName ? nodeName + ' - ' + userName : (nodeName || userName);
        $select.append('<option value="' + html(rowValue(node, 'USER_ID')) + '" data-node="' + html(rowValue(node, 'ID')) + '">' +
          html(label) + '</option>');
      });
      if (current && $select.find('option[value="' + current + '"]').length) {
        $select.val(current);
      } else {
        $select.val('');
      }
      updateDispatchButton(state.selectedTask);
    });
  }

  function loadTasks(done) {
    api('api/task/list', {
      batchId: selectedBatchId('#dwBatchSelect'),
      status: $('#dwStatusFilter').val() || ''
    }, function (res) {
      state.tasks = res.rows || [];
      if (state.selectedTask) {
        var selectedId = rowValue(state.selectedTask, 'ID');
        var matchedTask = null;
        $.each(state.tasks, function (_, task) {
          if (rowValue(task, 'ID') === selectedId) {
            matchedTask = task;
            return false;
          }
        });
        state.selectedTask = matchedTask;
      }
      renderTasks();
      renderSelectedTask();
      if (state.selectedTask) {
        loadFeedback();
      }
      done && done();
    });
  }

  function renderTaskNotice(count) {
    var label = count > 0 ? count : '';
    $('#dwTaskNoticeBadge').text(label).toggle(count > 0);
    $('#dwTaskPanelNotice').text(count > 0 ? text.newTaskNotice + ' ' + count + text.countItem : '').toggle(count > 0);
  }

  function renderTasks() {
    var $body = $('#dwTaskTable tbody');
    $body.empty();
    $('#dwTaskCount').text(state.tasks.length + text.countItem);
    var noticeCount = 0;
    $.each(state.tasks, function (_, task) {
      if (rowValue(task, 'NOTICE_FLAG') === 'Y') {
        noticeCount++;
      }
    });
    renderTaskNotice(noticeCount);
    if (!state.tasks.length) {
      $body.append('<tr><td colspan="7" class="dw-empty">' + text.noTask + '</td></tr>');
      return;
    }
    var tree = buildTaskTree();
    ensureTaskExpanded(tree);
    var visibleTasks = flattenTaskTree(tree);
    $.each(visibleTasks, function (_, item) {
      var task = item.task;
      var id = rowValue(task, 'ID');
      var tr = $('<tr class="dw-task-tree-row" data-id="' + html(id) + '"></tr>');
      tr.toggleClass('is-collapsed', item.hasChildren && !item.expanded);
      tr.append('<td>' + taskLevelHtml(task, item.depth, item.hasChildren, item.expanded, item.childCount) + '</td>');
      tr.append('<td>' + (rowValue(task, 'NOTICE_FLAG') === 'Y' ? '<span class="dw-row-notice">' + text.newNotice + '</span>' : '') + html(rowValue(task, 'TITLE')) + '</td>');
      tr.append('<td>' + html(rowValue(task, 'SENDER_NAME')) + '</td>');
      tr.append('<td>' + html(rowValue(task, 'RECEIVER_NAME')) + '</td>');
      tr.append('<td>' + html(dateOnly(rowValue(task, 'PLAN_DEADLINE'))) + '</td>');
      tr.append('<td>' + statusBadge(rowValue(task, 'STATUS'), rowValue(task, 'OVERDUE')) + '</td>');
      tr.append('<td>' + taskActionsHtml(task) + '</td>');
      tr.data('task', task);
      $body.append(tr);
      if (state.selectedTask && rowValue(state.selectedTask, 'ID') === id) {
        tr.addClass('is-selected');
      }
    });
    $('.dw-task-toggle').off('click').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      var id = $(this).attr('data-id');
      state.taskExpanded[id] = state.taskExpanded[id] === false;
      renderTasks();
    });
    $('.dw-pick-task').off('click').on('click', function () {
      var $tr = $(this).closest('tr');
      state.selectedTask = $tr.data('task');
      $('#dwTaskTable tr').removeClass('is-selected');
      $tr.addClass('is-selected');
      renderSelectedTask();
      loadFeedback();
      showWorkbenchTab(defaultTaskTab(state.selectedTask));
    });
    $('.dw-takeback-task').off('click').on('click', function () {
      var $btn = $(this);
      var $tr = $btn.closest('tr');
      var task = $tr.data('task');
      if (isButtonBusy($btn)) {
        return;
      }
      confirmBox(text.confirmTakeBack, function () {
        setButtonBusy($btn, true);
        api('api/task/takeBack', {id: rowValue(task, 'ID')}, function (res) {
          toast(text.takenBack);
          if (state.selectedTask && rowValue(state.selectedTask, 'ID') === rowValue(task, 'ID')) {
            state.selectedTask = null;
          }
          loadTasks(function () {
            if (res.parentId) {
              selectTaskById(res.parentId, 'dispatch');
            }
          });
        }, function () {
          setButtonBusy($btn, false);
        });
      });
    });
  }

  function buildTaskTree() {
    var byId = {};
    var children = {};
    var roots = [];
    $.each(state.tasks, function (_, task) {
      var id = rowValue(task, 'ID');
      byId[id] = task;
      children[id] = children[id] || [];
    });
    $.each(state.tasks, function (_, task) {
      var id = rowValue(task, 'ID');
      var parentId = rowValue(task, 'PARENT_ID');
      if (parentId && byId[parentId]) {
        children[parentId].push(task);
      } else {
        roots.push(task);
      }
      children[id] = children[id] || [];
    });
    return {
      byId: byId,
      children: children,
      roots: roots
    };
  }

  function ensureTaskExpanded(tree) {
    var current = {};
    $.each(state.tasks, function (_, task) {
      var id = rowValue(task, 'ID');
      current[id] = true;
      if (typeof state.taskExpanded[id] === 'undefined') {
        state.taskExpanded[id] = true;
      }
    });
    $.each(state.taskExpanded, function (id) {
      if (!current[id]) {
        delete state.taskExpanded[id];
      }
    });
  }

  function flattenTaskTree(tree) {
    var rows = [];
    function visit(task, depth) {
      var id = rowValue(task, 'ID');
      var childRows = tree.children[id] || [];
      var expanded = state.taskExpanded[id] !== false;
      rows.push({
        task: task,
        depth: depth,
        hasChildren: childRows.length > 0,
        childCount: childRows.length,
        expanded: expanded
      });
      if (childRows.length && expanded) {
        $.each(childRows, function (_, child) {
          visit(child, depth + 1);
        });
      }
    }
    $.each(tree.roots, function (_, task) {
      visit(task, 0);
    });
    return rows;
  }

  function taskLevelHtml(task, depth, hasChildren, expanded, childCount) {
    var level = rowValue(task, 'TASK_LEVEL');
    var id = rowValue(task, 'ID');
    var icon = hasChildren ? (expanded ? '\u25be' : '\u25b8') : '\u2022';
    var toggleClass = hasChildren ? 'dw-tree-toggle dw-task-toggle' : 'dw-tree-toggle is-leaf';
    var childText = hasChildren ? '<span class="dw-tree-count">' + childCount + '</span>' : '';
    return '<div class="dw-tree-cell dw-task-level-cell" style="padding-left:' + (depth * 22) + 'px">' +
      '<button type="button" class="' + toggleClass + '" data-id="' + html(id) + '" aria-expanded="' + (expanded ? 'true' : 'false') + '">' + icon + '</button>' +
      '<span class="dw-task-level-dot is-' + html(String(level || '').toLowerCase()) + '"></span>' +
      '<span class="dw-task-level-name">' + html(levelText[level] || level) + '</span>' +
      childText +
      '</div>';
  }

  function selectTaskById(id, tab) {
    var found = null;
    $.each(state.tasks, function (_, task) {
      if (rowValue(task, 'ID') === id) {
        found = task;
        return false;
      }
    });
    if (!found) {
      return;
    }
    state.selectedTask = found;
    $('#dwTaskTable tr').removeClass('is-selected');
    $('#dwTaskTable tr[data-id="' + id + '"]').addClass('is-selected');
    renderSelectedTask();
    loadFeedback();
    showWorkbenchTab(tab || defaultTaskTab(found));
  }

  function taskActionsHtml(task) {
    var htmlText = '<div class="dw-table-actions"><button type="button" class="dw-btn dw-btn-ghost dw-pick-task">\u5904\u7406</button>';
    if (canTakeBackTask(task)) {
      htmlText += '<button type="button" class="dw-btn dw-btn-danger dw-takeback-task">\u62ff\u56de</button>';
    }
    htmlText += '</div>';
    return htmlText;
  }

  function defaultTaskTab(task) {
    return DwNextLevel(task && rowValue(task, 'TASK_LEVEL')) ? 'dispatch' : 'process';
  }

  function showWorkbenchTab(tab) {
    $('.dw-workbench-tabs .dw-flow-step').removeClass('is-active');
    $('.dw-workbench-tabs .dw-flow-step[data-tab="' + tab + '"]').addClass('is-active');
    $('.dw-workbench-section').removeClass('is-active');
    $('.dw-workbench-section[data-tab-panel="' + tab + '"]').addClass('is-active');
  }

  function renderSelectedTask() {
    var task = state.selectedTask;
    if (!task) {
      $('#dwSelectedInfo').html(text.selectOneTask);
      $('#dwFeedbackSelectedInfo').html(text.selectOneTask);
      setProcessEnabled(false);
      updateActionButtons();
      return;
    }
    setProcessEnabled(true);
    var htmlText =
      '<strong>' + html(rowValue(task, 'TITLE')) + '</strong>' +
      '<p>\u5c42\u7ea7\uff1a' + html(levelText[rowValue(task, 'TASK_LEVEL')] || rowValue(task, 'TASK_LEVEL')) + '</p>' +
      '<p>\u4e0b\u53d1\u4eba\uff1a' + html(rowValue(task, 'SENDER_NAME')) + '</p>' +
      '<p>\u63a5\u6536\u4eba\uff1a' + html(rowValue(task, 'RECEIVER_NAME')) + '</p>' +
      '<p>\u671f\u9650\uff1a' + html(dateOnly(rowValue(task, 'PLAN_DEADLINE'))) + '</p>' +
      '<p>\u72b6\u6001\uff1a' + html(statusText[rowValue(task, 'STATUS')] || rowValue(task, 'STATUS')) + '</p>' +
      (rowValue(task, 'TARGET_DESC') ? '<p>\u76ee\u6807\uff1a' + html(rowValue(task, 'TARGET_DESC')) + '</p>' : '') +
      (rowValue(task, 'CONTENT') ? '<p>\u5185\u5bb9\uff1a' + html(rowValue(task, 'CONTENT')) + '</p>' : '') +
      (rowValue(task, 'COMPLETE_DETAIL') ? '<p>\u5b8c\u6210\u8be6\u60c5\uff1a' + html(rowValue(task, 'COMPLETE_DETAIL')) + '</p>' : '') +
      (rowValue(task, 'COMPLETE_TIME') ? '<p>\u5b8c\u6210\u65f6\u95f4\uff1a' + html(dateOnly(rowValue(task, 'COMPLETE_TIME'))) + '</p>' : '') +
      (rowValue(task, 'RETURN_REASON') ? '<p>\u9000\u56de\u539f\u56e0\uff1a' + html(rowValue(task, 'RETURN_REASON')) + '</p>' : '') +
      (rowValue(task, 'ATTACHMENT_ID') ? '<p>' + text.attachment + '\uff1a' + attachmentLink(rowValue(task, 'ATTACHMENT_ID')) + '</p>' : '');
    $('#dwSelectedInfo').html(htmlText);
    $('#dwFeedbackSelectedInfo').html(htmlText);
    $('#dwChildTitle').val(rowValue(task, 'TITLE'));
    $('#dwChildDeadline').val(dateOnly(rowValue(task, 'PLAN_DEADLINE')));
    $('#dwChildTarget').val(rowValue(task, 'TARGET_DESC') || '');
    $('#dwChildContent').val(rowValue(task, 'CONTENT') || '');
    $('#dwFeedbackContent').val(rowValue(task, 'FEEDBACK_DRAFT_CONTENT') || '');
    if (rowValue(task, 'FEEDBACK_DRAFT_ATTACHMENT_ID')) {
      $('#dwFeedbackAttachment').val(rowValue(task, 'FEEDBACK_DRAFT_ATTACHMENT_ID'));
      $('#dwFeedbackAttachStatus').text(text.uploadedAttachment + (rowValue(task, 'ATTACHMENT_NAME') || text.attachment));
    } else {
      clearFile('#dwFeedbackFile', '#dwFeedbackAttachment', '#dwFeedbackAttachStatus');
    }
    updateActionButtons();
  }

  function currentUserId() {
    return String((state.user && state.user.userId) || '');
  }

  function sameUserId(value) {
    return String(value || '') === currentUserId();
  }

  function canDispatchTask(task) {
    if (!task) {
      return false;
    }
    if (!sameUserId(rowValue(task, 'RECEIVER_ID'))) {
      return false;
    }
    if (Number(rowValue(task, 'CHILD_COUNT') || 0) > 0) {
      return false;
    }
    return canDispatchWithoutStatusBlock(task) && !!$('#dwReceiverSelect').val();
  }

  function canDispatchWithoutStatusBlock(task) {
    var level = rowValue(task, 'TASK_LEVEL');
    var status = rowValue(task, 'STATUS');
    if (!DwNextLevel(level)) {
      return false;
    }
    if (level === 'PARTY') {
      return status === 'DRAFT' || status === 'TODO' || status === 'DOING' || status === 'RETURNED';
    }
    return status === 'DOING' || status === 'RETURNED';
  }

  function canTakeBackTask(task) {
    return !!task && sameUserId(rowValue(task, 'SENDER_ID')) && rowValue(task, 'STATUS') === 'TODO' &&
      !!rowValue(task, 'PARENT_ID');
  }

  function canAcceptTask(task) {
    return !!task && sameUserId(rowValue(task, 'RECEIVER_ID')) && rowValue(task, 'STATUS') === 'TODO';
  }

  function canSubmitFeedback(task) {
    var status = rowValue(task, 'STATUS');
    return !!task && sameUserId(rowValue(task, 'RECEIVER_ID')) && (status === 'DOING' || status === 'RETURNED');
  }

  function DwNextLevel(level) {
    if (level === 'PARTY') {
      return 'DEPT';
    }
    if (level === 'DEPT') {
      return 'OFFICE';
    }
    if (level === 'OFFICE') {
      return 'STAFF';
    }
    return '';
  }

  function updateDispatchButton(task) {
    var enabled = canDispatchTask(task);
    var hasNextLevel = !!DwNextLevel(task && rowValue(task, 'TASK_LEVEL'));
    var mustAcceptFirst = !!task && hasNextLevel && rowValue(task, 'TASK_LEVEL') !== 'PARTY' && rowValue(task, 'STATUS') === 'TODO';
    var missingReceiver = !!task && hasNextLevel && !mustAcceptFirst && canDispatchWithoutStatusBlock(task) && !$('#dwReceiverSelect').val();
    $('#dwDispatchBox').toggle(hasNextLevel && !mustAcceptFirst);
    $('#dwDispatchUnavailable').toggle(!hasNextLevel || mustAcceptFirst || missingReceiver);
    $('#dwDispatchAcceptBtn').toggle(mustAcceptFirst && canAcceptTask(task));
    $('#dwDispatchBtn')
      .prop('disabled', !enabled)
      .toggleClass('is-disabled', !enabled)
      .attr('title', enabled ? '' : text.cannotDispatch);
    $('#dwDispatchUnavailableText').text(task ? text.noDispatchPermission : text.selectOneTask);
    if (mustAcceptFirst) {
      $('#dwDispatchUnavailableText').text(text.dispatchAfterAccept);
      $('#dwDispatchUnavailable').show();
    } else if (missingReceiver) {
      $('#dwDispatchUnavailableText').text(text.chooseReceiver);
      $('#dwDispatchUnavailable').show();
    }
  }

  function updateActionButtons() {
    var task = state.selectedTask;
    updateDispatchButton(task);
    $('#dwAcceptBtn')
      .toggle(canAcceptTask(task))
      .prop('disabled', !canAcceptTask(task))
      .toggleClass('is-disabled', !canAcceptTask(task));
    $('#dwSubmitFeedbackBtn')
      .prop('disabled', !canSubmitFeedback(task))
      .toggleClass('is-disabled', !canSubmitFeedback(task))
      .attr('title', canSubmitFeedback(task) ? '' : text.noFeedbackPermission);
  }

  function acceptSelectedTask() {
    var $btn = $(this);
    if (isButtonBusy($btn)) {
      return;
    }
    if (!state.selectedTask) {
      toast(text.selectTask);
      return;
    }
    if (!canAcceptTask(state.selectedTask)) {
      toast(text.actionFailed);
      updateActionButtons();
      return;
    }
    var taskId = rowValue(state.selectedTask, 'ID');
    setButtonBusy($('#dwAcceptBtn,#dwDispatchAcceptBtn'), true);
    api('api/task/accept', {id: taskId}, function () {
      toast(text.accepted);
      setButtonBusy($('#dwAcceptBtn,#dwDispatchAcceptBtn'), false);
      loadTasks(function () {
        selectTaskById(taskId, defaultTaskTab(state.selectedTask));
      });
    }, function () {
      setButtonBusy($('#dwAcceptBtn,#dwDispatchAcceptBtn'), false);
      updateActionButtons();
    });
  }

  function dispatchSelectedTask() {
    var $btn = $('#dwDispatchBtn');
    if (isButtonBusy($btn)) {
      return;
    }
    if (!state.selectedTask) {
      toast(text.selectTask);
      return;
    }
    if (!canDispatchTask(state.selectedTask)) {
      toast(text.cannotDispatch);
      updateActionButtons();
      return;
    }
    var $option = $('#dwReceiverSelect option:selected');
    if (!$('#dwReceiverSelect').val()) {
      toast(text.selectReceiver);
      return;
    }
    setButtonBusy($btn, true);
    uploadFile('#dwChildFile', '#dwChildAttachment', '#dwChildAttachStatus', 'DISPATCH_TASK', function (attachmentId) {
      api('api/task/dispatch', {
        parentId: rowValue(state.selectedTask, 'ID'),
        receiverId: $('#dwReceiverSelect').val(),
        personNodeId: $option.data('node') || '',
        title: $('#dwChildTitle').val(),
        content: $('#dwChildContent').val(),
        targetDesc: $('#dwChildTarget').val(),
        planDeadline: $('#dwChildDeadline').val(),
        attachmentId: attachmentId
      }, function () {
        toast(text.dispatched);
        clearFile('#dwChildFile', '#dwChildAttachment', '#dwChildAttachStatus');
        loadTasks();
      }, function () {
        setButtonBusy($btn, false);
        updateActionButtons();
      });
    }, function () {
      setButtonBusy($btn, false);
      updateActionButtons();
    });
  }

  function submitSelectedFeedback() {
    var $btn = $('#dwSubmitFeedbackBtn');
    if (isButtonBusy($btn)) {
      return;
    }
    if (!state.selectedTask) {
      toast(text.selectTask);
      return;
    }
    if (!canSubmitFeedback(state.selectedTask)) {
      toast(text.noFeedbackPermission);
      updateActionButtons();
      return;
    }
    setButtonBusy($btn, true);
    uploadFile('#dwFeedbackFile', '#dwFeedbackAttachment', '#dwFeedbackAttachStatus', 'FEEDBACK', function (attachmentId) {
      api('api/feedback/submit', {
        taskId: rowValue(state.selectedTask, 'ID'),
        content: $('#dwFeedbackContent').val(),
        attachmentId: attachmentId
      }, function () {
        toast(text.feedbackSubmitted);
        $('#dwFeedbackContent').val('');
        clearFile('#dwFeedbackFile', '#dwFeedbackAttachment', '#dwFeedbackAttachStatus');
        loadTasks();
        loadFeedback();
      }, function () {
        setButtonBusy($btn, false);
        updateActionButtons();
      });
    }, function () {
      setButtonBusy($btn, false);
      updateActionButtons();
    });
  }

  function loadFeedback() {
    if (!state.selectedTask) {
      $('#dwFeedbackList').empty();
      return;
    }
    api('api/feedback/list', {taskId: rowValue(state.selectedTask, 'ID')}, function (res) {
      var rows = res.rows || [];
      var $box = $('#dwFeedbackList');
      $box.empty();
      if (!rows.length) {
        $box.append('<div class="dw-empty">' + text.noFeedback + '</div>');
        return;
      }
      $.each(rows, function (_, fb) {
        var item = $('<div class="dw-feedback-item"></div>');
        var result = rowValue(fb, 'CONFIRM_RESULT') || 'PENDING';
        var resultText = result === 'CONFIRMED' ? text.confirmPassed : (result === 'RETURNED' ? text.confirmRejected : text.confirmPending);
        item.append('<div class="dw-feedback-head"><strong>' + html(rowValue(fb, 'TASK_TITLE') || rowValue(fb, 'FEEDBACK_USER_NAME')) + '</strong><span class="dw-badge' + (result === 'CONFIRMED' ? ' is-done' : (result === 'RETURNED' ? ' is-danger' : ' is-warn')) + '">' + html(resultText) + '</span></div>');
        item.append('<div class="dw-feedback-meta">' +
          '<span>\u53cd\u9988\u4eba\uff1a' + html(rowValue(fb, 'FEEDBACK_USER_NAME')) + '</span>' +
          '<span>\u53cd\u9988\u65f6\u95f4\uff1a' + html(dateOnly(rowValue(fb, 'FEEDBACK_TIME'))) + '</span>' +
          (rowValue(fb, 'COMPLETE_TIME') ? '<span>\u5b8c\u6210\u65f6\u95f4\uff1a' + html(dateOnly(rowValue(fb, 'COMPLETE_TIME'))) + '</span>' : '') +
          '</div>');
        item.append('<p class="dw-complete-detail">' + html(rowValue(fb, 'FEEDBACK_CONTENT') || '') + '</p>');
        if (rowValue(fb, 'ATTACHMENT_ID')) {
          item.append('<p>' + text.attachment + '\uff1a' + attachmentLink(rowValue(fb, 'ATTACHMENT_ID')) + '</p>');
        }
        if (rowValue(fb, 'RETURN_REASON')) {
          item.append('<p class="dw-muted">\u9000\u56de\u539f\u56e0\uff1a' + html(rowValue(fb, 'RETURN_REASON')) + '</p>');
        }
        if (rowValue(fb, 'CAN_CONFIRM') === 'Y' && result === 'PENDING') {
          var actions = $('<div class="dw-button-row"></div>');
          actions.append('<button type="button" class="dw-btn dw-btn-primary">\u901a\u8fc7</button>');
          actions.append('<button type="button" class="dw-btn dw-btn-danger">\u9000\u56de</button>');
          actions.find('.dw-btn-primary').on('click', function () {
            var $btn = $(this);
            if (isButtonBusy($btn)) {
              return;
            }
            setButtonBusy($btn, true);
            api('api/feedback/confirm', {feedbackId: rowValue(fb, 'ID')}, function () {
              toast(text.feedbackConfirmed);
              loadTasks();
              loadFeedback();
            }, function () {
              setButtonBusy($btn, false);
            });
          });
          actions.find('.dw-btn-danger').on('click', function () {
            var $btn = $(this);
            if (isButtonBusy($btn)) {
              return;
            }
            promptBox(text.returnReason, function (reason) {
              if (!reason) {
                toast(text.returnReason);
                return;
              }
              setButtonBusy($btn, true);
              api('api/feedback/return', {feedbackId: rowValue(fb, 'ID'), reason: reason}, function () {
                toast(text.feedbackReturned);
                loadTasks();
                loadFeedback();
              }, function () {
                setButtonBusy($btn, false);
              });
            });
          });
          item.append(actions);
        }
        $box.append(item);
      });
    });
  }

  function initPersonTree() {
    bindPersonTree();
    loadPersons();
  }

  function bindPersonTree() {
    $('#dwPersonDeleteBtn').prop('disabled', true).addClass('is-disabled');
    $('#dwPersonRefreshBtn').on('click', function () {
      loadPersons();
    });
    $('#dwPersonToggleAllBtn').on('click', function () {
      var tree = buildPersonTree();
      if (!personTreeHasExpandableNode(tree)) {
        return;
      }
      setAllPersonExpanded(!allPersonsExpanded(tree));
    });
    $('#dwPersonUserName').on('focus', openPersonUserSelect);
    $('#dwPersonUserPickBtn').on('click', function (e) {
      openPersonUserSelect(e);
    });
    $('#dwPersonSaveBtn').on('click', savePerson);
    $('#dwPersonDeleteBtn').on('click', function () {
      if (!$('#dwPersonId').val()) {
        toast(text.selectNode);
        return;
      }
      if (selectedPersonIsRoot()) {
        toast(text.rootNodeCannotDelete);
        return;
      }
      confirmBox(text.confirmDisable, function () {
        api('api/person/delete', {id: $('#dwPersonId').val()}, function () {
          toast(text.nodeDisabled);
          clearPersonForm();
          loadPersons();
        });
      });
    });
  }

  function openPersonUserSelect(e) {
    if (typeof window.H5CommonSelect !== 'function') {
      toast(text.userSelectMissing);
      return;
    }
    new window.H5CommonSelect({
      type: 'userSelect',
      idFiled: 'dwPersonUserId',
      textFiled: 'dwPersonUserName',
      selectModel: 'single'
    });
    $('#dwPersonUserName').blur();
    if (typeof window.nullInput === 'function') {
      window.nullInput(e || window.event);
    }
  }

  function loadPersons() {
    api('api/person/list', {}, function (res) {
      state.persons = res.rows || [];
      renderPersons();
      renderPersonParents();
    });
  }

  function renderPersons() {
    var $body = $('#dwPersonTable tbody');
    $body.empty();
    $('#dwPersonCount').text(state.persons.length + text.countNode);
    var tree = buildPersonTree();
    if (!state.persons.length) {
      $body.append('<tr><td colspan="6" class="dw-empty">\u6682\u65e0\u4eba\u5458\u8282\u70b9</td></tr>');
      updatePersonToggleAllButton(tree);
      return;
    }
    ensurePersonExpanded(tree);
    $.each(tree.roots, function (_, node) {
      renderPersonNode($body, node, 0, tree);
    });
    updatePersonToggleAllButton(tree);
  }

  function buildPersonTree() {
    var byId = {};
    var children = {};
    var roots = [];
    $.each(state.persons, function (_, node) {
      var id = rowValue(node, 'ID');
      byId[id] = node;
      children[id] = children[id] || [];
    });
    $.each(state.persons, function (_, node) {
      var parentId = rowValue(node, 'PARENT_ID');
      var id = rowValue(node, 'ID');
      if (parentId && byId[parentId]) {
        children[parentId].push(node);
      } else {
        roots.push(node);
      }
      children[id] = children[id] || [];
    });
    return {
      byId: byId,
      children: children,
      roots: roots
    };
  }

  function ensurePersonExpanded(tree) {
    var current = {};
    $.each(state.persons, function (_, node) {
      var id = rowValue(node, 'ID');
      current[id] = true;
      if (typeof state.personExpanded[id] === 'undefined') {
        state.personExpanded[id] = false;
      }
    });
    $.each(state.personExpanded, function (id) {
      if (!current[id]) {
        delete state.personExpanded[id];
      }
    });
  }

  function renderPersonNode($body, node, depth, tree) {
    var id = rowValue(node, 'ID');
    var children = tree.children[id] || [];
    var hasChildren = children.length > 0;
    var expanded = state.personExpanded[id] !== false;
    var selected = state.selectedPerson && rowValue(state.selectedPerson, 'ID') === id;
    var tr = $('<tr class="dw-tree-row"></tr>');
    tr.toggleClass('is-collapsed', hasChildren && !expanded);
    tr.toggleClass('is-selected', !!selected);
    tr.data('node', node);
    tr.append('<td>' + personTreeCell(node, depth, hasChildren, expanded, children.length) + '</td>');
    tr.append('<td>' + html(rowValue(node, 'USER_NAME') || rowValue(node, 'USER_ID')) + '</td>');
    tr.append('<td>' + html(roleText[rowValue(node, 'ROLE_CODE')] || rowValue(node, 'ROLE_CODE')) + '</td>');
    tr.append('<td>' + html(parentName(rowValue(node, 'PARENT_ID'))) + '</td>');
    tr.append('<td>' + html(rowValue(node, 'SORT_NO') || '') + '</td>');
    tr.append('<td>' + personRowAction(node, selected) + '</td>');
    tr.on('click', function () {
      fillPersonForm($(this).data('node'));
      renderPersons();
    });
    $body.append(tr);
    tr.find('.dw-tree-toggle').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      state.personExpanded[id] = !expanded;
      renderPersons();
    });
    tr.find('.dw-add-child-btn').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      prepareChildPersonForm(node);
      renderPersons();
    });
    if (hasChildren && expanded) {
      $.each(children, function (_, child) {
        renderPersonNode($body, child, depth + 1, tree);
      });
    }
  }

  function personTreeCell(node, depth, hasChildren, expanded, childCount) {
    var indent = depth * 22;
    var icon = hasChildren ? (expanded ? '\u25be' : '\u25b8') : '\u2022';
    var toggleClass = hasChildren ? 'dw-tree-toggle' : 'dw-tree-toggle is-leaf';
    var childText = hasChildren ? '<span class="dw-tree-count">' + childCount + '</span>' : '';
    return '<span class="dw-tree-cell" style="padding-left:' + indent + 'px">' +
      '<button type="button" class="' + toggleClass + '">' + icon + '</button>' +
      '<span class="dw-tree-title">' + html(rowValue(node, 'NODE_NAME')) + '</span>' +
      childText +
      '</span>';
  }

  function personRowAction(node, selected) {
    if (!selected) {
      return '';
    }
    return '<button type="button" class="dw-inline-add-btn dw-add-child-btn"><span class="dw-inline-add-icon"></span>\u6dfb\u52a0\u5b50\u8282\u70b9</button>';
  }

  function setAllPersonExpanded(expanded) {
    $.each(state.persons, function (_, node) {
      var id = rowValue(node, 'ID');
      state.personExpanded[id] = expanded;
    });
    renderPersons();
  }

  function allPersonsExpanded(tree) {
    tree = tree || buildPersonTree();
    var hasExpandable = false;
    for (var i = 0; i < state.persons.length; i++) {
      var id = rowValue(state.persons[i], 'ID');
      if ((tree.children[id] || []).length) {
        hasExpandable = true;
      }
      if ((tree.children[id] || []).length && state.personExpanded[id] === false) {
        return false;
      }
    }
    return hasExpandable;
  }

  function personTreeHasExpandableNode(tree) {
    tree = tree || buildPersonTree();
    for (var i = 0; i < state.persons.length; i++) {
      var id = rowValue(state.persons[i], 'ID');
      if ((tree.children[id] || []).length) {
        return true;
      }
    }
    return false;
  }

  function updatePersonToggleAllButton(tree) {
    tree = tree || buildPersonTree();
    var hasExpandable = personTreeHasExpandableNode(tree);
    var expanded = hasExpandable && allPersonsExpanded(tree);
    var $button = $('#dwPersonToggleAllBtn');
    $button
      .prop('disabled', !hasExpandable)
      .toggleClass('is-disabled', !hasExpandable)
      .toggleClass('is-expanded', expanded)
      .attr('title', expanded ? text.collapseAll : text.expandAll);
    $button.find('.dw-tree-all-text').text(expanded ? text.collapseAll : text.expandAll);
  }

  function findPerson(id) {
    for (var i = 0; i < state.persons.length; i++) {
      if (rowValue(state.persons[i], 'ID') === id) {
        return state.persons[i];
      }
    }
    return null;
  }

  function parentName(id) {
    var parent = findPerson(id);
    return parent ? rowValue(parent, 'NODE_NAME') : '';
  }

  function renderPersonParents() {
    var currentId = $('#dwPersonId').val();
    var $select = $('#dwPersonParent');
    $select.empty().append('<option value="">' + text.noneParent + '</option>');
    $.each(state.persons, function (_, node) {
      if (rowValue(node, 'ID') !== currentId && !isPersonDescendant(rowValue(node, 'ID'), currentId)) {
        $select.append('<option value="' + html(rowValue(node, 'ID')) + '">' + html(rowValue(node, 'NODE_NAME')) + '</option>');
      }
    });
  }

  function isPersonDescendant(candidateId, parentId) {
    if (!candidateId || !parentId) {
      return false;
    }
    var guard = 0;
    var node = findPerson(candidateId);
    while (node && guard < 50) {
      if (rowValue(node, 'PARENT_ID') === parentId) {
        return true;
      }
      node = findPerson(rowValue(node, 'PARENT_ID'));
      guard++;
    }
    return false;
  }

  function fillPersonForm(node) {
    state.selectedPerson = node;
    $('#dwPersonId').val(rowValue(node, 'ID'));
    renderPersonParents();
    $('#dwPersonParent').val(rowValue(node, 'PARENT_ID') || '');
    $('#dwPersonNodeName').val(rowValue(node, 'NODE_NAME') || '');
    $('#dwPersonUserId').val(rowValue(node, 'USER_ID') || '');
    $('#dwPersonUserName').val(rowValue(node, 'USER_NAME') || '');
    $('#dwPersonRole').val(rowValue(node, 'ROLE_CODE') || 'STAFF');
    $('#dwPersonSort').val(rowValue(node, 'SORT_NO') || '');
    $('#dwPersonRemark').val(rowValue(node, 'REMARK') || '');
    $('#dwPersonDeleteBtn').prop('disabled', selectedPersonIsRoot()).toggleClass('is-disabled', selectedPersonIsRoot());
  }

  function clearPersonForm() {
    state.selectedPerson = null;
    $('#dwPersonId,#dwPersonNodeName,#dwPersonUserId,#dwPersonUserName,#dwPersonSort,#dwPersonRemark').val('');
    $('#dwPersonRole').val('STAFF');
    $('#dwPersonTable tr').removeClass('is-selected');
    renderPersonParents();
    $('#dwPersonDeleteBtn').prop('disabled', true).addClass('is-disabled');
  }

  function prepareChildPersonForm(parentNode) {
    state.selectedPerson = parentNode;
    $('#dwPersonId,#dwPersonNodeName,#dwPersonUserId,#dwPersonUserName,#dwPersonSort,#dwPersonRemark').val('');
    renderPersonParents();
    $('#dwPersonParent').val(rowValue(parentNode, 'ID'));
    $('#dwPersonRole').val(nextPersonRole[rowValue(parentNode, 'ROLE_CODE')] || 'STAFF');
    $('#dwPersonDeleteBtn').prop('disabled', true).addClass('is-disabled');
    state.personExpanded[rowValue(parentNode, 'ID')] = true;
  }

  function selectedPersonIsRoot() {
    if (!state.selectedPerson) {
      return false;
    }
    return !rowValue(state.selectedPerson, 'PARENT_ID');
  }

  function savePerson() {
    if (!$('#dwPersonNodeName').val()) {
      toast(text.fillNodeName);
      return;
    }
    api('api/person/save', {
      id: $('#dwPersonId').val(),
      parentId: $('#dwPersonParent').val(),
      nodeName: $('#dwPersonNodeName').val(),
      userId: $('#dwPersonUserId').val(),
      userName: $('#dwPersonUserName').val(),
      roleCode: $('#dwPersonRole').val(),
      sortNo: $('#dwPersonSort').val(),
      enabled: 'Y',
      remark: $('#dwPersonRemark').val()
    }, function () {
      toast(text.nodeSaved);
      state.personExpanded[$('#dwPersonParent').val()] = true;
      loadPersons();
    });
  }

  function initStats() {
    loadBatches(function () {
      fillBatches('#dwStatsBatchSelect', true);
      loadStats();
    });
    $('#dwStatsRefreshBtn,#dwStatsBatchSelect').on('click change', loadStats);
    $(window).on('resize', resizeCharts);
  }

  function loadStats() {
    api('api/stats', {batchId: selectedBatchId('#dwStatsBatchSelect')}, function (res) {
      renderKpis(res);
      renderStatusChart(res.byStatus || []);
      renderLevelChart(res.byLevel || []);
      renderOverdueChart(res.overdue || []);
      renderRecent(res.recent || []);
    });
  }

  function renderKpis(res) {
    var total = 0;
    var done = 0;
    var pending = 0;
    $.each(res.byStatus || [], function (_, item) {
      var status = rowValue(item, 'STATUS');
      var cnt = Number(rowValue(item, 'CNT') || 0);
      total += cnt;
      if (status === 'COMPLETED') {
        done += cnt;
      }
      if (status === 'PENDING_CONFIRM') {
        pending += cnt;
      }
    });
    var overdue = 0;
    $.each(res.overdue || [], function (_, item) {
      overdue += Number(rowValue(item, 'CNT') || 0);
    });
    $('#dwKpiTotal').text(total);
    $('#dwKpiDone').text(done);
    $('#dwKpiPending').text(pending);
    $('#dwKpiOverdue').text(overdue);
  }

  function chart(id) {
    if (!window.echarts) {
      $('#' + id).html('<div class="dw-empty">' + text.echartsMissing + '</div>');
      return null;
    }
    var dom = document.getElementById(id);
    return echarts.getInstanceByDom(dom) || echarts.init(dom);
  }

  function renderStatusChart(rows) {
    var c = chart('dwStatusChart');
    if (!c) {
      return;
    }
    c.setOption({
      tooltip: {trigger: 'item'},
      series: [{
        type: 'pie',
        radius: ['42%', '70%'],
        data: $.map(rows, function (item) {
          return {name: statusText[rowValue(item, 'STATUS')] || rowValue(item, 'STATUS'), value: rowValue(item, 'CNT')};
        })
      }]
    });
  }

  function renderLevelChart(rows) {
    var c = chart('dwLevelChart');
    if (!c) {
      return;
    }
    var levels = ['PARTY', 'DEPT', 'OFFICE', 'STAFF'];
    var seriesMap = {};
    $.each(rows, function (_, item) {
      var status = rowValue(item, 'STATUS');
      if (!seriesMap[status]) {
        seriesMap[status] = {};
      }
      seriesMap[status][rowValue(item, 'TASK_LEVEL')] = rowValue(item, 'CNT');
    });
    c.setOption({
      tooltip: {trigger: 'axis'},
      legend: {top: 0},
      grid: {left: 40, right: 20, bottom: 30, top: 48},
      xAxis: {type: 'category', data: $.map(levels, function (level) { return levelText[level]; })},
      yAxis: {type: 'value', minInterval: 1},
      series: $.map(seriesMap, function (byLevel, status) {
        return {
          name: statusText[status] || status,
          type: 'bar',
          stack: 'total',
          data: $.map(levels, function (level) { return byLevel[level] || 0; })
        };
      })
    });
  }

  function renderOverdueChart(rows) {
    var c = chart('dwOverdueChart');
    if (!c) {
      return;
    }
    c.setOption({
      tooltip: {trigger: 'axis'},
      grid: {left: 40, right: 20, bottom: 30, top: 20},
      xAxis: {type: 'category', data: $.map(rows, function (item) { return levelText[rowValue(item, 'TASK_LEVEL')] || rowValue(item, 'TASK_LEVEL'); })},
      yAxis: {type: 'value', minInterval: 1},
      series: [{type: 'bar', data: $.map(rows, function (item) { return rowValue(item, 'CNT'); }), itemStyle: {color: '#b91c1c'}}]
    });
  }

  function renderRecent(rows) {
    var $body = $('#dwRecentTable tbody');
    $body.empty();
    if (!rows.length) {
      $body.append('<tr><td colspan="5" class="dw-empty">' + text.noTask + '</td></tr>');
      return;
    }
    $.each(rows, function (_, task) {
      $body.append('<tr><td>' + html(levelText[rowValue(task, 'TASK_LEVEL')] || rowValue(task, 'TASK_LEVEL')) + '</td>' +
        '<td>' + html(rowValue(task, 'TITLE')) + '</td>' +
        '<td>' + html(rowValue(task, 'RECEIVER_NAME')) + '</td>' +
        '<td>' + statusBadge(rowValue(task, 'STATUS'), rowValue(task, 'OVERDUE')) + '</td>' +
        '<td>' + html(dateOnly(rowValue(task, 'PLAN_DEADLINE'))) + '</td></tr>');
    });
  }

  function resizeCharts() {
    $('.dw-chart').each(function () {
      var instance = window.echarts && echarts.getInstanceByDom(this);
      if (instance) {
        instance.resize();
      }
    });
  }

  $(function () {
    var page = $('.pb-dwworkplan-page').data('page');
    if (page === 'workbench') {
      initWorkbench();
    } else if (page === 'personTree') {
      initPersonTree();
    } else if (page === 'stats') {
      initStats();
    }
  });
})(window, jQuery);
