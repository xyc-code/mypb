(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/ztdr/assessment/';
    var displayedYear = null;
    var requestVersion = 0;
    var detailVersion = 0;
    var grid = $('#assessmentGrid');
    var entityDecoder = document.createElement('textarea');

    // 平台 XssObjectMapper 对 JSON 字符串执行 htmlEscape；仅还原响应的这一层。
    // 原始文本不进入 innerHTML，展示继续使用 text/autoencode。
    function serverText(value) {
        if (typeof value !== 'string') return value;
        return value.replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]+);/gi, function (entity) {
            entityDecoder.innerHTML = entity;
            return entityDecoder.value;
        });
    }

    function decodeAssessment(item) {
        item.partyName = serverText(item.partyName);
        $.each(item.months || [], function (_, month) {
            $.each(month.items || [], function (_, entry) {
                $.each(['plan', 'completionStatus', 'participants'], function (_, field) {
                    entry[field] = serverText(entry[field]);
                });
                $.each(entry.reasons || [], function (_, reason) {
                    reason.itemName = serverText(reason.itemName);
                    reason.reason = serverText(reason.reason);
                });
            });
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

    function monthStatus(month) {
        if (month.status === 'EXEMPT') return '免考';
        if (month.status === 'PENDING') return '未到考核时间';
        return numeric(month.deduction) > 0 ? '已扣分' : '无扣分';
    }

    function monthScore(row, monthNumber) {
        var month = null;
        $.each(row.months || [], function (_, entry) {
            if (Number(entry.month) === monthNumber) { month = entry; return false; }
        });
        if (!month) return '<span class="assessment-value-empty">—</span>';
        if (month.status === 'EXEMPT') return '<span class="assessment-exempt-badge">免考</span>';
        if (month.status === 'PENDING') return '<span class="assessment-pending-badge" title="未到考核时间">未到期</span>';
        return numeric(month.deduction) === 0 ? '<span class="assessment-zero-label">无扣分</span>' : score(month.deduction);
    }

    function controls(disabled) {
        $('#assessmentYear, #assessmentPartyName, #assessmentSearch').prop('disabled', disabled);
        $('.assessment-results').attr('aria-busy', disabled ? 'true' : 'false');
    }

    function resizeGrid() {
        grid.jqGrid('setGridWidth', Math.max(1280, $('.assessment-grid-scroll').width()));
    }

    function load() {
        grid.jqGrid('setGridParam', { page: 1, datatype: requestPage }).trigger('reloadGrid');
    }

    function updateRange(year, asOfDate) {
        var today = dateValue(asOfDate);
        var currentYear = Number(today.substring(0, 4));
        var endedMonth = Number(today.substring(5, 7)) - 1;
        var text = Number(year) < currentYear ? '考核月份：1—12月' : Number(year) > currentYear || endedMonth === 0
            ? '尚无已结束的考核月份' : '考核月份：1' + (endedMonth > 1 ? '—' + endedMonth : '') + '月';
        $('#assessmentRange').text(year + '年 · ' + text + ' · 创建当月及以前免考');
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
        $('#assessmentRange').text('正在加载考核月份…');
        message('正在计算…');
        $.ajax({ url: base + 'list', type: 'POST', data: {
            year: year, partyName: $.trim($('#assessmentPartyName').val()), page: parameters.page, rows: parameters.rows
        }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data) || numeric(result.records) === null) {
                message(result && serverText(result.message) || '考核结果加载失败，请重新查询。', true);
                $('#assessmentAsOf').text('考核日期未加载');
                $('#assessmentRange').text('考核月份未加载');
                return;
            }
            displayedYear = result.year;
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            updateRange(result.year, result.asOfDate);
            $.each(result.data, function (_, item) { decodeAssessment(item); });
            grid[0].addJSONData(result);
            $('#assessmentPager .ui-pg-input').attr('aria-label', '页码');
            message(result.records ? '共 ' + result.records + ' 个党组织，扣分单位：分。' : '暂无符合查询条件的考核党组织。');
        }).fail(function (xhr) {
            if (version !== requestVersion) return;
            $('#assessmentAsOf').text('考核日期未加载');
            $('#assessmentRange').text('考核月份未加载');
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
            if (!result || result.flag !== 'success' || !item || !$.isArray(item.months)) {
                message(result && serverText(result.message) || '无法读取党组织考核明细。', true);
                return;
            }
            decodeAssessment(item);
            var wrapper = $('<div class="pb-ztdr-page assessment-dialog"></div>');
            $('<h2></h2>').text(textValue(item.partyName) + ' · ' + year + '年').appendTo(wrapper);
            $('<p class="assessment-detail-intro"></p>').text('考核截至 ' + dateValue(result.asOfDate)
                + '；组织创建日期 ' + dateValue(item.createdDate) + '；年度累计扣分 ' + points(item.totalDeduction) + ' 分。').appendTo(wrapper);
            var table = $('<table class="table table-bordered"></table>');
            var header = $('<tr></tr>');
            $.each(['活动计划', '计划日期', '实际日期', '完成情况', '参与党员人数', '逐项扣分原因', '扣分'], function (_, text) {
                $('<th scope="col"></th>').text(text).appendTo(header);
            });
            $('<thead></thead>').append(header).appendTo(table);
            var body = $('<tbody></tbody>').appendTo(table);
            $.each(item.months, function (_, month) {
                var group = $('<tr class="assessment-month-heading"></tr>');
                $('<th colspan="7" scope="rowgroup"></th>').text(month.month + '月 · ' + monthStatus(month)
                    + ' · 活动计划 ' + textValue(month.activityCount) + ' 条 · 扣分 ' + points(month.deduction) + ' 分').appendTo(group);
                group.appendTo(body);
                $.each(month.items || [], function (_, entry) {
                    var row = $('<tr></tr>').toggleClass('assessment-missing', numeric(entry.deduction) > 0)
                        .toggleClass('assessment-pending', month.status !== 'ASSESSED');
                    $.each([entry.plan, dateValue(entry.plannedDate), dateValue(entry.actualDate), entry.completionStatus, entry.participants], function (index, value) {
                        $('<td></td>').text(textValue(value)).toggleClass('assessment-detail-text', index === 0).appendTo(row);
                    });
                    var reasonCell = $('<td class="assessment-detail-text assessment-reasons"></td>');
                    $.each(entry.reasons || [], function (_, reason) {
                        $('<p></p>').text(textValue(reason.reason) + '（扣' + points(reason.deduction) + '分）').appendTo(reasonCell);
                    });
                    if (!(entry.reasons || []).length) reasonCell.text(month.status === 'ASSESSED' ? '无扣分' : monthStatus(month));
                    reasonCell.appendTo(row);
                    $('<td class="assessment-detail-score"></td>').text(points(entry.deduction)).appendTo(row);
                    row.appendTo(body);
                });
                if (!(month.items || []).length) {
                    $('<tr class="assessment-month-empty"></tr>').append($('<td colspan="7"></td>').text(
                        month.status === 'EXEMPT' ? '创建当月及以前免考。' : month.status === 'PENDING' ? '未到考核时间，不计扣分。' : '暂无活动明细。')).appendTo(body);
                }
            });
            $('<div class="assessment-detail" tabindex="0" role="region" aria-label="活动明细，可横向滚动"></div>').append(table).appendTo(wrapper);
            $('<p class="assessment-hint"></p>').text('各项扣分逐条累计。明细按查询时现有记录重新计算，补齐材料后可恢复分数。').appendTo(wrapper);
            layer.open({ type: 1, title: '主题党日考核明细', area: [Math.min(1280, $(window).width() - 30) + 'px',
                Math.min(760, $(window).height() - 40) + 'px'], content: wrapper.prop('outerHTML') });
        }).fail(function (xhr) {
            if (version === requestVersion && selected === detailVersion) message(failure(xhr), true);
        });
    }

    var columns = [{ name: 'partyId', key: true, hidden: true }, { label: '党组织名称', name: 'partyName', width: 200 }];
    $.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], function (_, month) {
        columns.push({ label: month + '月', name: 'month' + month, width: 70, align: 'center',
            formatter: function (value, options, row) { return monthScore(row, month); } });
    });
    columns.push({ label: '年度累计', name: 'totalDeduction', width: 100, align: 'center',
        formatter: function (value) { return score(value, true); } });
    columns.push({ label: '操作', name: 'operation', width: 100, align: 'center',
        formatter: function () { return '<button type="button" class="assessment-detail-button">考核明细</button>'; } });

    grid.jqGrid({ datatype: 'local', data: [], autowidth: true, height: 'auto',
        rowNum: 20, rowList: [5, 10, 20, 50, 100], pager: '#assessmentPager', viewrecords: true,
        pgbuttons: true, pginput: true, loadonce: false, hasTabExport: false, hasColSet: false,
        jsonReader: { root: 'data', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'partyId' },
        cmTemplate: { sortable: false }, autoencode: true, localReader: { id: 'partyId' }, colModel: columns
    });
    // 平台定制版默认隐藏中间分页区，本页面启用服务端分页。
    $('#assessmentPager_center').show();
    grid.on('click', '.assessment-detail-button', function () { detail($(this).closest('tr.jqgrow').attr('id')); });
    resizeGrid();
    $(window).on('resize.ztdr', resizeGrid);
    $('#assessmentSearch').on('click', function () {
        if ($('#assessmentYear').val()) load(); else loadYears();
    });
    $('#assessmentYear').on('change', load);
    $('#assessmentPartyName').on('keydown', function (event) {
        if (event.which === 13 && $('#assessmentYear').val()) { event.preventDefault(); load(); }
    });

    function loadYears() {
        var version = ++requestVersion;
        controls(true);
        $.ajax({ url: base + 'years', dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data)) {
                message(result && serverText(result.message) || '年份加载失败，请重新查询。', true);
                return;
            }
            $('#assessmentYear').empty();
            $.each(result.data, function (_, year) { $('<option></option>').val(year).text(year + '年').appendTo('#assessmentYear'); });
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            if (!result.data.length) { message('暂无可查询的考核年份。'); return; }
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
