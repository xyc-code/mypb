(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/twshyk/assessment/';
    var displayedYear = null;
    var requestVersion = 0;
    var grid = $('#assessmentGrid');

    function message(text, error) {
        $('#assessmentMessage').text(text).toggleClass('assessment-error', !!error);
    }

    function failure(xhr) {
        return xhr.responseJSON && xhr.responseJSON.message || '查询失败，请重新查询；登录过期时请重新登录。';
    }

    function points(value) { return Number(value || 0).toFixed(1); }

    function score(value, total) {
        return '<span class="assessment-score ' + (Number(value) > 0 ? 'assessment-score-deducted' : 'assessment-score-zero')
            + (total ? ' assessment-total' : '') + '">' + points(value) + '</span>';
    }

    function resizeGrid() {
        grid.jqGrid('setGridWidth', Math.max(850, $('.assessment-grid-scroll').width()));
    }

    function load() {
        grid.jqGrid('setGridParam', { page: 1, datatype: requestPage }).trigger('reloadGrid');
    }

    function requestPage(parameters) {
        var year = $('#assessmentYear').val();
        if (!year) return;
        var version = ++requestVersion;
        displayedYear = null;
        grid.jqGrid('clearGridData');
        $('#assessmentYear, #assessmentSearch').prop('disabled', true);
        message('正在计算…');
        $.ajax({ url: base + 'list', data: { year: year, page: parameters.page, rows: parameters.rows }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (result.flag !== 'success') { message('查询失败，请重新登录后重试。', true); return; }
            displayedYear = result.year;
            $('#assessmentAsOf').text('考核截至：' + result.asOfDate);
            $('.assessment-cycle-range').text(result.cycleStart + ' — ' + result.cycleEnd);
            $('#assessmentAnnualRange').text(result.annualStart + ' — ' + result.annualEnd);
            $('#assessmentAnnualNote').text(result.year + '-11-01起考核 · 缺会扣0.2分');
            grid[0].addJSONData(result);
            $('#assessmentPager .ui-pg-input').attr('aria-label', '页码');
            message(result.records ? '共 ' + result.records + ' 个团组织，扣分单位：分。' : '当前组织域暂无可考核的非根团组织。');
        }).fail(function (xhr) { if (version === requestVersion) message(failure(xhr), true); }).always(function () {
            if (version === requestVersion) $('#assessmentYear, #assessmentSearch').prop('disabled', false);
        });
    }

    function detail(id) {
        var year = displayedYear;
        var version = requestVersion;
        if (!year) return;
        $.ajax({ url: base + 'detail', data: { year: year, leagueId: id }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (result.flag !== 'success' || !result.data.length) { message('无法读取组织明细。', true); return; }
            var item = result.data[0];
            var wrapper = $('<div class="pb-twshyk-page assessment-dialog"></div>');
            $('<h2></h2>').text(item.leagueName + ' · ' + year + '年').appendTo(wrapper);
            $('<p class="assessment-detail-intro"></p>').text('考核截至 ' + result.asOfDate + '；当前总扣分 ' + points(item.totalDeduction)
                + ' 分。明细按查询时的会议记录重新计算。').appendTo(wrapper);
            var table = $('<table class="table table-bordered"></table>');
            var header = $('<tr></tr>');
            $.each(['会议类型', '统计开始', '统计结束', '开始考核日期', '应开次数', '实际次数', '状态', '扣分'], function (_, text) {
                $('<th></th>').text(text).appendTo(header);
            });
            $('<thead></thead>').append(header).appendTo(table);
            var body = $('<tbody></tbody>').appendTo(table);
            $.each(item.periods, function (_, period) {
                var row = $('<tr></tr>').toggleClass('assessment-missing', period.status === '缺会')
                    .toggleClass('assessment-pending', period.status === '未到考核时间');
                $.each([period.type, period.startDate, period.endDate, period.assessmentDate,
                    period.requiredCount, period.actualCount, period.status, points(period.deduction)], function (_, value) {
                    $('<td></td>').text(value).appendTo(row);
                });
                row.appendTo(body);
            });
            $('<div class="assessment-detail"></div>').append(table).appendTo(wrapper);
            layer.open({ type: 1, title: '考核周期明细', area: [Math.min(1080, $(window).width() - 30) + 'px',
                Math.min(720, $(window).height() - 40) + 'px'], content: wrapper.prop('outerHTML') });
        }).fail(function (xhr) { message(failure(xhr), true); });
    }

    grid.jqGrid({ datatype: 'local', data: [], autowidth: true, height: 'auto',
        rowNum: 20, rowList: [5, 10, 20, 50, 100], pager: '#assessmentPager', viewrecords: true,
        pgbuttons: true, pginput: true, loadonce: false,
        hasTabExport: false, hasColSet: false,
        jsonReader: { root: 'data', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'leagueId' },
        cmTemplate: { sortable: false },
        autoencode: true, localReader: { id: 'leagueId' },
        colModel: [
            { name: 'leagueId', key: true, hidden: true },
            { label: '团组织名称', name: 'leagueName', width: 280 },
            { label: '月度扣分', name: 'monthlyDeduction', width: 110, align: 'center', sorttype: 'number', formatter: function (v) { return score(v); } },
            { label: '季度扣分', name: 'quarterlyDeduction', width: 110, align: 'center', sorttype: 'number', formatter: function (v) { return score(v); } },
            { label: '年度扣分', name: 'annualDeduction', width: 170, align: 'center', sorttype: 'number',
                formatter: function (value, options, row) { return row.annualDue ? score(value) : '<span class="assessment-pending-badge">未到考核时间</span>'; } },
            { label: '总扣分', name: 'totalDeduction', width: 110, align: 'center', sorttype: 'number', formatter: function (v) { return score(v, true); } },
            { label: '操作', name: 'operation', width: 110, align: 'center', sortable: false,
                formatter: function () { return '<button type="button" class="assessment-detail-button">周期明细</button>'; } }
        ]
    });
    // 平台定制版默认隐藏中间分页区，本页面启用服务端分页。
    $('#assessmentPager_center').show();
    grid.on('click', '.assessment-detail-button', function () { detail($(this).closest('tr.jqgrow').attr('id')); });
    resizeGrid();
    $(window).on('resize.twshyk', resizeGrid);
    $('#assessmentSearch').on('click', function () {
        if ($('#assessmentYear').val()) load(); else loadYears();
    });
    $('#assessmentYear').on('change', load);

    function loadYears() {
        $('#assessmentSearch').prop('disabled', true);
        $.ajax({ url: base + 'years', dataType: 'json', cache: false }).done(function (result) {
            if (result.flag !== 'success') { message('年份加载失败，请重新登录后重试。', true); return; }
            $('#assessmentYear').empty();
            $.each(result.data, function (_, year) { $('<option></option>').val(year).text(year + '年').appendTo('#assessmentYear'); });
            if (!result.data.length) {
                $('.assessment-cycle-range, #assessmentAnnualRange').text('暂无会议年份');
                $('#assessmentAsOf').text('考核截至：' + result.asOfDate);
                message('当前组织域暂无包含会议日期的三会一课记录。');
                return;
            }
            $('#assessmentYear').val(result.defaultYear).prop('disabled', false);
            load();
        }).fail(function (xhr) {
            $('.assessment-cycle-range, #assessmentAnnualRange').text('会议年份加载失败');
            $('#assessmentAsOf').text('考核日期未加载');
            message(failure(xhr), true);
        }).always(function () {
            if (!$('#assessmentYear').val()) $('#assessmentSearch').prop('disabled', false);
        });
    }
    loadYears();
}(jQuery));
