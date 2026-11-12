(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/membernotice/', selected = {}, rows = [], busy = false, query = {}, grid = $('#notice-grid');
    var stateNames = {start: '拟稿中', active: '流转中', ended: '已完成', suspended: '挂起', terminated: '已终止'};
    function escape(value) { return $('<span>').text(value == null ? '' : String(value)).html(); }
    function dateOnly(value) { return escape(value ? String(value).substring(0, 10) : ''); }
    function message(text) { $('#notice-message').text(text).show(); resize(); }
    function filters() { return {keyword: $('#notice-keyword').val(), type: $('#notice-type').val(), state: $('#notice-state').val()}; }
    function api(path, data, callback, method, error) {
        return $.ajax({url: base + path, type: method || 'GET', data: data, dataType: 'json'})
            .done(function (r) { if (r && r.ok) callback(r); else (error || message)(r && r.message ? r.message : '登录状态已失效，请重新登录'); })
            .fail(function () { (error || message)('请求未完成，请刷新列表核对结果后重试'); });
    }
    function controls(value) {
        busy = value;
        $('#notice-toolbar button,#notice-search button,#notice-search input,#notice-search select,#notice-file').prop('disabled', value);
        grid.closest('.ui-jqgrid').toggleClass('notice-busy', value);
    }
    function selection() {
        grid.jqGrid('resetSelection');
        $.each(rows, function (_, row) {
            if (!row.IS_DRAFT) delete selected[row.ID];
            else if (selected[row.ID]) grid.jqGrid('setSelection', row.ID, false);
        });
    }
    function resize() {
        if (!grid[0].grid) return;
        grid.jqGrid('setGridWidth', $('#notice-list').width());
        grid.jqGrid('setGridHeight', Math.max(220, $(window).height() - $('#notice-list').offset().top - $('#notice-toolbar').outerHeight() - 80));
    }
    function reload(first) { grid.jqGrid('setGridParam', {page: first ? 1 : grid.jqGrid('getGridParam', 'page')}).trigger('reloadGrid'); }
    grid.jqGrid({
        datatype: function (data) {
            controls(true);
            var retryPage = 0;
            api('list', $.extend({}, query, {page: data.page, size: data.rows}), function (r) {
                var lastPage = Math.max(1, Math.ceil(r.total / r.size));
                if (r.page > lastPage) { retryPage = lastPage; return; }
                rows = r.rows || [];
                grid[0].addJSONData({rows: rows, page: r.page, total: Math.ceil(r.total / r.size), records: r.total});
                $.each(rows, function (_, row) { if (!row.IS_DRAFT) $('#' + $.jgrid.jqID(row.ID)).find('input.cbox').prop('disabled', true); });
                selection();
            }, 'GET', function (error) {
                rows = []; selected = {}; grid.jqGrid('clearGridData'); message(error);
            }).always(function () {
                controls(false); $('#load_notice-grid').hide(); resize();
                if (retryPage) grid.jqGrid('setGridParam', {page: retryPage}).trigger('reloadGrid');
            });
        },
        cmTemplate: {sortable: false},
        colModel: [
            {name: 'ID', key: true, hidden: true},
            {name: 'MEMBER_NAME', label: '姓名', width: 95},
            {name: 'EMPLOYEE_CODE', label: '工号', width: 100},
            {name: 'PARTY_TYPE_NAME', label: '党员类别', width: 90, align: 'center'},
            {name: 'MEETING_DATE', label: '党委会讨论日期', width: 120, align: 'center', formatter: dateOnly},
            {name: 'RECEIVER_ORG_NAME', label: '接收党组织', width: 190},
            {name: 'TITLE', label: '通知标题', width: 360, formatter: function (value, options, row) {
                return row.PROCESS_INSTANCE_ID ? escape(value) : '<a href="' + base + 'form?id=' + encodeURIComponent(options.rowId) + '" target="_blank" rel="noopener">' + escape(value) + '</a>';
            }},
            {name: 'NOTICE_STATE', label: '流程状态', width: 94, align: 'center', formatter: function (value) {
                var known = typeof stateNames[value] === 'string';
                return '<span class="notice-state notice-state-' + (known ? value : '') + '">' + escape(known ? stateNames[value] : value || '—') + '</span>';
            }},
            {name: 'PROCESS_HANDLERS', label: '流程处理人', width: 110, formatter: function (value) { return escape(value || '—'); }},
            {name: 'PROCESS_INSTANCE_ID', label: '流程详情', width: 80, align: 'center', formatter: function (value, options) {
                return value ? '<a href="platform/bpm/business/detail?id=' + encodeURIComponent(options.rowId) + '&amp;extType=2" class="notice-flow-link" target="_blank" rel="noopener">查看流程</a>' : '—';
            }},
            {name: 'CREATION_DATE', label: '录入日期', width: 120, align: 'center', formatter: dateOnly, hidden: true}
        ],
        jsonReader: {root: 'rows', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'ID'},
        autoencode: true, styleUI: 'Bootstrap', autowidth: true, shrinkToFit: true, height: 400,
        rowNum: 20, rowList: [10, 20, 30, 50, 100], pager: '#notice-pager', pagerpos: 'left',
        viewrecords: true, recordtext: '第 {0} - {1} 条，共 {2} 条', emptyrecords: '暂无数据',
        multiselect: true, multiboxonly: true, altRows: true, toolbar: [true, 'top'],
        beforeSelectRow: function (id, event) { return !busy && $(event.target).is('input.cbox') && rows.some(function (r) { return r.ID === id && r.IS_DRAFT; }); },
        onSelectRow: function (id, checked) {
            if (!checked) { delete selected[id]; return; }
            $.each(rows, function (_, row) { if (row.ID === id) selected[id] = row.MEMBER_NAME + '（' + row.EMPLOYEE_CODE + '）'; });
        },
        onPaging: function () { if (busy) return 'stop'; }
    });
    $('#t_notice-grid').append($('#notice-toolbar'));
    $(window).on('resize.notice', resize); resize();
    function resultText(r, action) {
        var lines = [action + '：成功 ' + r.successCount + ' 条，失败 ' + r.failureCount + ' 条'];
        $.each(r.results || [], function (_, row) { if (!row.success) lines.push((row.row ? '第 ' + row.row + ' 行' : '记录 ' + row.id) + '：' + row.message); });
        return lines.join('\n');
    }
    $('#notice-search').on('submit', function (event) { event.preventDefault(); if (!busy) { query = filters(); selected = {}; reload(true); } });
    $('#notice-reset').on('click', function () { $('#notice-search')[0].reset(); $('#notice-search').submit(); });
    grid.on('click', '.notice-flow-link', function (event) {
        if (flowUtils.bpm_show_mode === 'tab' && typeof top.addTab !== 'function') return;
        event.preventDefault();
        flowUtils.openOnDialog($(this).attr('href'), '党员发送阅知');
    });
    $('#notice-delete').on('click', function () {
        if (busy) return;
        var ids = Object.keys(selected);
        if (!ids.length) { layer.msg('请勾选需要删除的拟稿'); return; }
        layer.confirm('确认删除所选 ' + ids.length + ' 条拟稿？', {icon: 3, title: '删除拟稿'}, function (index) {
            layer.close(index); controls(true);
            api('delete', {ids: JSON.stringify(ids)}, function (r) {
                $.each(r.results, function (_, row) { if (row.success) delete selected[row.id]; });
                layer.msg('删除成功 ' + r.successCount + ' 条' + (r.failureCount ? '，' + r.failureCount + ' 条未删除，请核对记录状态' : ''));
            }, 'POST').always(function () { controls(false); reload(); });
        });
    });
    $('#notice-import').on('click', function () { if (!busy) $('#notice-file').click(); });
    $('#notice-file').on('change', function () {
        if (!this.files.length || busy) return;
        var data = new FormData(); data.append('file', this.files[0]); controls(true); message('正在导入…');
        $.ajax({url: base + 'import', type: 'POST', data: data, processData: false, contentType: false, dataType: 'json'})
            .done(function (r) { message(r && r.ok ? resultText(r, '导入完成') : (r && r.message || '登录状态已失效，请重新登录')); })
            .fail(function () { message('导入请求未完成，请先刷新列表核对结果'); })
            .always(function () { $('#notice-file').val(''); selected = {}; controls(false); reload(true); });
    });
    $('#notice-start').on('click', function () {
        if (busy) return;
        var ids = Object.keys(selected);
        if (!ids.length) { message('请先选择需要发起的通知'); return; }
        controls(true);
        var offset = 0, summary = {successCount: 0, failureCount: 0, results: []}, labels = $.extend({}, selected);
        function finish(error) {
            var content = '<div class="notice-batch-result"><div class="notice-result-summary">' +
                '<div class="notice-result-count notice-result-success"><i class="fa fa-check-circle" aria-hidden="true"></i><span>发起成功</span><strong>' + summary.successCount + '<small> 条</small></strong></div>' +
                '<div class="notice-result-count notice-result-failure"><i class="fa fa-times-circle" aria-hidden="true"></i><span>发起失败</span><strong>' + summary.failureCount + '<small> 条</small></strong></div></div>';
            if (error) content += '<div class="notice-result-warning" role="status">' + escape(error) + '。尚未确认 ' + (ids.length - offset) + ' 条，请刷新列表核对。</div>';
            content += '<div class="notice-result-heading">发起明细</div><div class="notice-result-list" style="max-height:' + Math.max(80, Math.min(300, $(window).height() - 300)) + 'px">';
            $.each(summary.results, function (_, row) {
                content += '<div class="notice-result-row"><span class="notice-result-badge notice-result-' + (row.success ? 'success">成功' : 'failure">失败') + '</span>' +
                    '<div class="notice-result-person">' + escape(labels[row.id] || row.id) +
                    (row.success ? '' : '<div class="notice-result-reason">' + escape(row.message) + '</div>') + '</div></div>';
            });
            content += '</div></div>';
            $('#notice-message').hide();
            layer.open({type: 1, title: '批量发起结果', skin: 'notice-result-dialog', area: [Math.min(560, $(window).width() - 24) + 'px'],
                content: content, btn: ['关闭']});
            controls(false); reload();
        }
        function next() {
            if (offset >= ids.length) { finish(); return; }
            var batch = ids.slice(offset, offset + 20);
            message('正在发起：' + offset + ' / ' + ids.length + ' 条');
            api('start', {ids: JSON.stringify(batch)}, function (r) {
                summary.successCount += r.successCount; summary.failureCount += r.failureCount; summary.results = summary.results.concat(r.results);
                $.each(r.results, function (_, row) { if (row.success) delete selected[row.id]; }); offset += batch.length; selection(); next();
            }, 'POST', finish);
        }
        next();
    });
    $('#notice-add').on('click', function () { if (!busy) window.location.href = base + 'add'; });
}(jQuery));
