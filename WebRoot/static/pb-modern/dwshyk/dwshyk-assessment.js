(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/dwshyk/assessment/';
    var displayedYear = null;
    var requestVersion = 0;
    var detailVersion = 0;
    var grid = $('#assessmentGrid');
    var entityDecoder = document.createElement('textarea');

    // 平台 JSON 会转义 HTML 实体；仅还原一层，再使用 text/autoencode 展示。
    function serverText(value) {
        if (typeof value !== 'string') return value;
        return value.replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]+);/gi, function (entity) {
            entityDecoder.innerHTML = entity;
            return entityDecoder.value;
        });
    }

    function decodeAssessment(item) {
        item.partyName = serverText(item.partyName);
        item.partyType = serverText(item.partyType);
        $.each(item.periods || [], function (_, period) {
            period.type = serverText(period.type);
            period.reason = serverText(period.reason);
        });
    }

    function message(text, error) {
        $('#assessmentMessage').text(text).toggleClass('assessment-error', !!error);
    }

    function failure(xhr) {
        var result = xhr.responseJSON;
        if (!result && xhr.responseText) {
            try { result = $.parseJSON(xhr.responseText); } catch (ignore) { result = null; }
        }
        return result && serverText(result.message) || '查询失败，请重新查询；登录过期时请重新登录。';
    }

    function textValue(value) {
        return value === null || value === undefined || String(value).replace(/\s/g, '') === '' ? '—' : String(value);
    }

    function dateValue(value) { return textValue(value).substring(0, 10); }

    function numeric(value) {
        if (value === null || value === undefined || String(value).replace(/\s/g, '') === '') return null;
        var number = Number(value);
        return isFinite(number) ? number : null;
    }

    function points(value) {
        var number = numeric(value);
        return number === null ? '—' : number.toFixed(1);
    }

    function score(value, total) {
        var number = numeric(value);
        if (number === null) return '<span class="assessment-value-empty">—</span>';
        return '<span class="assessment-score ' + (number > 0 ? 'assessment-score-deducted' : 'assessment-score-zero')
            + (total ? ' assessment-total' : '') + '">' + points(number) + '</span>';
    }

    function periodStatus(period) {
        return period.status === 'PENDING' ? '未到考核时间' : period.status === 'PASS' ? '已达标'
            : period.status === 'DEDUCT' ? '缺次扣分' : textValue(period.status);
    }

    function periodReason(period) {
        var reason = period.reason || (period.status === 'PENDING' ? '未到考核时间，不计扣分。' : periodStatus(period));
        if (Number(period.missingCreationCount) > 0 && reason.indexOf('创建时间') < 0 && reason.indexOf('建表时间') < 0) {
            reason += '；其中' + period.missingCreationCount + '条缺少建表时间，未计入按时次数。';
        }
        return reason;
    }

    function controls(disabled) {
        $('#assessmentYear, #assessmentSearch').prop('disabled', disabled);
        $('.assessment-results').attr('aria-busy', disabled ? 'true' : 'false');
    }

    function resizeGrid() {
        grid.jqGrid('setGridWidth', Math.max(980, $('.assessment-grid-scroll').width()));
    }

    function load() {
        grid.jqGrid('setGridParam', { page: 1, datatype: requestPage }).trigger('reloadGrid');
    }

    function requestPage(parameters) {
        var year = $('#assessmentYear').val();
        if (!year) return;
        var version = ++requestVersion;
        displayedYear = null;
        detailVersion++;
        grid.jqGrid('clearGridData');
        controls(true);
        $('#assessmentAsOf').text('正在读取考核日期');
        $('#assessmentRange').text('正在加载考核区间…');
        message('正在计算…');
        $.ajax({ url: base + 'list', type: 'POST', data: { year: year, page: parameters.page, rows: parameters.rows },
            dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data) || numeric(result.records) === null) {
                $('#assessmentAsOf').text('考核日期未加载');
                $('#assessmentRange').text('考核区间未加载');
                message(result && serverText(result.message) || '考核结果加载失败，请重新查询。', true);
                return;
            }
            displayedYear = result.year;
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            $('#assessmentRange').text(result.year + '年考核区间：' + dateValue(result.cycleStart) + ' — ' + dateValue(result.cycleEnd));
            $.each(result.data, function (_, item) { decodeAssessment(item); });
            grid[0].addJSONData(result);
            $('#assessmentPager .ui-pg-input').attr('aria-label', '页码');
            message(result.records ? '共 ' + result.records + ' 个党组织，扣分单位：分。' : '暂无可考核的党组织。');
        }).fail(function (xhr) {
            if (version !== requestVersion) return;
            $('#assessmentAsOf').text('考核日期未加载');
            $('#assessmentRange').text('考核区间未加载');
            message(failure(xhr), true);
        }).always(function () {
            if (version === requestVersion) controls(false);
        });
    }

    function detail(id) {
        var year = displayedYear;
        var version = requestVersion;
        var selected = ++detailVersion;
        if (!year) return;
        $.ajax({ url: base + 'detail', type: 'POST', data: { year: year, partyId: id }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion || selected !== detailVersion) return;
            var item = result && result.data;
            if (!result || result.flag !== 'success' || !item || !$.isArray(item.periods)) {
                message(result && serverText(result.message) || '无法读取党组织考核明细。', true);
                return;
            }
            decodeAssessment(item);
            var wrapper = $('<div class="pb-dwshyk-page assessment-dialog"></div>');
            $('<h2></h2>').text(textValue(item.partyName) + ' · ' + year + '年').appendTo(wrapper);
            $('<p class="assessment-detail-intro"></p>').text(textValue(item.partyType) + '；考核截至 ' + dateValue(result.asOfDate)
                + '；当前总扣分 ' + points(item.totalDeduction) + ' 分。').appendTo(wrapper);
            var table = $('<table class="table table-bordered"></table>');
            var header = $('<tr></tr>');
            $.each(['会议类型', '考核频次', '统计区间', '考核截止', '应开次数', '记录总数', '按时次数', '补录次数', '状态', '扣分', '说明'], function (_, text) {
                $('<th scope="col"></th>').text(text).appendTo(header);
            });
            $('<thead></thead>').append(header).appendTo(table);
            var body = $('<tbody></tbody>').appendTo(table);
            $.each(item.periods, function (_, period) {
                var row = $('<tr></tr>').toggleClass('assessment-missing', period.status === 'DEDUCT')
                    .toggleClass('assessment-pending', period.status === 'PENDING');
                var frequency = { MONTH: '月度', QUARTER: '季度', YEAR: '年度' }[period.frequency];
                $.each([period.type, frequency, dateValue(period.startDate) + ' — ' + dateValue(period.endDate),
                    dateValue(period.endDate) + ' 24:00', period.requiredCount, period.totalCount,
                    period.onTimeCount, period.lateCount], function (_, value) {
                    $('<td></td>').text(textValue(value)).appendTo(row);
                });
                $('<td class="assessment-detail-status"></td>').text(periodStatus(period)).appendTo(row);
                $('<td class="assessment-detail-score"></td>').text(points(period.deduction)).appendTo(row);
                $('<td class="assessment-detail-reason"></td>').text(periodReason(period)).appendTo(row);
                row.appendTo(body);
            });
            if (!item.periods.length) $('<tr></tr>').append($('<td colspan="11"></td>').text('暂无考核周期。')).appendTo(body);
            $('<div class="assessment-detail" tabindex="0" role="region" aria-label="考核周期明细，可横向滚动"></div>').append(table).appendTo(wrapper);
            $('<p class="assessment-hint"></p>').text('记录总数包含补录；扣分按截止时的按时次数计算，补录不抵扣按时缺次。缺少建表时间的记录在说明中列明。').appendTo(wrapper);
            layer.open({ type: 1, title: '党委三会一课考核周期明细', area: [Math.min(1360, $(window).width() - 30) + 'px',
                Math.min(760, $(window).height() - 40) + 'px'], content: wrapper.prop('outerHTML') });
        }).fail(function (xhr) {
            if (version === requestVersion && selected === detailVersion) message(failure(xhr), true);
        });
    }

    grid.jqGrid({ datatype: 'local', data: [], autowidth: true, height: 'auto',
        rowNum: 20, rowList: [5, 10, 20, 50, 100], pager: '#assessmentPager', viewrecords: true,
        pgbuttons: true, pginput: true, loadonce: false, hasTabExport: false, hasColSet: false,
        jsonReader: { root: 'data', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'partyId' },
        cmTemplate: { sortable: false }, autoencode: true, localReader: { id: 'partyId' },
        colModel: [
            { name: 'partyId', key: true, hidden: true },
            { label: '党组织名称', name: 'partyName', width: 280 },
            { label: '组织类型', name: 'partyType', width: 100, align: 'center' },
            { label: '月度扣分', name: 'monthlyDeduction', width: 110, align: 'center', formatter: function (value) { return score(value); } },
            { label: '季度扣分', name: 'quarterlyDeduction', width: 110, align: 'center', formatter: function (value) { return score(value); } },
            { label: '年度扣分', name: 'annualDeduction', width: 110, align: 'center', formatter: function (value) { return score(value); } },
            { label: '总扣分', name: 'totalDeduction', width: 110, align: 'center', formatter: function (value) { return score(value, true); } },
            { label: '操作', name: 'operation', width: 110, align: 'center',
                formatter: function () { return '<button type="button" class="assessment-detail-button">周期明细</button>'; } }
        ]
    });
    // 平台定制版默认隐藏中间分页区，本页面启用服务端分页。
    $('#assessmentPager_center').show();
    grid.on('click', '.assessment-detail-button', function () { detail($(this).closest('tr.jqgrow').attr('id')); });
    resizeGrid();
    $(window).on('resize.dwshyk', resizeGrid);
    $('#assessmentSearch').on('click', function () {
        if ($('#assessmentYear').val()) load(); else loadYears();
    });
    $('#assessmentYear').on('change', load);

    function loadYears() {
        var version = ++requestVersion;
        controls(true);
        $.ajax({ url: base + 'years', dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data)) {
                $('#assessmentAsOf').text('考核日期未加载');
                message(result && serverText(result.message) || '年份加载失败，请重新查询。', true);
                return;
            }
            $('#assessmentYear').empty();
            $.each(result.data, function (_, year) { $('<option></option>').val(year).text(year + '年').appendTo('#assessmentYear'); });
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            if (!result.data.length) {
                $('#assessmentRange').text('暂无可查询的考核年份。');
                message('暂无可查询的考核年份。');
                return;
            }
            $('#assessmentYear').val(result.defaultYear);
            load();
        }).fail(function (xhr) {
            if (version !== requestVersion) return;
            $('#assessmentAsOf').text('考核日期未加载');
            message(failure(xhr), true);
        }).always(function () {
            if (version === requestVersion) {
                $('#assessmentSearch').prop('disabled', false);
                $('.assessment-results').attr('aria-busy', 'false');
            }
        });
    }
    loadYears();
}(jQuery));
