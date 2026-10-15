(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/yzbyts/assessment/';
    var displayedYear = null;
    var requestVersion = 0;
    var detailVersion = 0;
    var grid = $('#assessmentGrid');
    var entityDecoder = document.createElement('textarea');

    // 平台 XssObjectMapper 已对 JSON 字符串执行 htmlEscape；仅还原响应的这一层。
    // 每次只解析单个实体，原始文本不进入 innerHTML；展示仍使用 text/autoencode。
    function serverText(value) {
        if (typeof value !== 'string') return value;
        return value.replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]+);/gi, function (entity) {
            entityDecoder.innerHTML = entity;
            return entityDecoder.value;
        });
    }

    function decodeAssessment(item) {
        item.partyName = serverText(item.partyName);
        $.each(item.items || [], function (_, entry) {
            $.each(['itemName', 'plan', 'sourceStatus', 'status', 'reason'], function (_, field) {
                entry[field] = serverText(entry[field]);
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

    function dateValue(value) {
        return textValue(value).substring(0, 10);
    }

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

    function pending() {
        return '<span class="assessment-pending-badge">未到考核时间</span>';
    }

    function deduction(value, row, total) {
        return row.due === false ? pending() : score(value, total);
    }

    function controls(disabled) {
        $('#assessmentYear, #assessmentPartyName, #assessmentSearch').prop('disabled', disabled);
        $('.assessment-results').attr('aria-busy', disabled ? 'true' : 'false');
    }

    function resizeGrid() {
        grid.jqGrid('setGridWidth', Math.max(1000, $('.assessment-grid-scroll').width()));
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
        $('#assessmentStart').text('正在加载开始考核日期…');
        $('#assessmentAsOf').text('正在读取考核日期');
        message('正在计算…');
        $.ajax({ url: base + 'list', type: 'POST', data: {
            year: year, partyName: $.trim($('#assessmentPartyName').val()), page: parameters.page, rows: parameters.rows
        }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data) || numeric(result.records) === null) {
                message(result && serverText(result.message) || '考核结果加载失败，请重新查询。', true);
                $('#assessmentStart').text('开始考核日期未加载');
                $('#assessmentAsOf').text('考核日期未加载');
                return;
            }
            displayedYear = result.year;
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            $('#assessmentStart').text('开始考核：' + dateValue(result.assessmentStart));
            $.each(result.data, function (_, item) { decodeAssessment(item); });
            grid[0].addJSONData(result);
            $('#assessmentPager .ui-pg-input').attr('aria-label', '页码');
            message(result.records ? '共 ' + result.records + ' 个党组织，扣分单位：分。' : '暂无符合查询条件的考核党组织。');
        }).fail(function (xhr) {
            if (version !== requestVersion) return;
            $('#assessmentStart').text('开始考核日期未加载');
            $('#assessmentAsOf').text('考核日期未加载');
            message(failure(xhr), true);
        }).always(function () {
            if (version === requestVersion) controls(false);
        });
    }

    function yesNo(value) {
        return value === true ? '是' : value === false ? '否' : '—';
    }

    function detail(id) {
        var year = displayedYear;
        var version = requestVersion;
        var selected = ++detailVersion;
        if (!year) return;
        $.ajax({ url: base + 'detail', type: 'POST', data: { year: year, partyId: id }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion || selected !== detailVersion) return;
            var item = result && result.data;
            if (!result || result.flag !== 'success' || !item || !$.isArray(item.items)) {
                message(result && serverText(result.message) || '无法读取党组织考核明细。', true);
                return;
            }
            decodeAssessment(item);
            grid.jqGrid('setRowData', id, item);
            var wrapper = $('<div class="pb-yzbyts-page assessment-dialog"></div>');
            $('<h2></h2>').text(textValue(item.partyName) + ' · ' + year + '年').appendTo(wrapper);
            $('<p class="assessment-detail-intro"></p>').text('考核截至 ' + dateValue(result.asOfDate)
                + '；开始考核 ' + dateValue(result.assessmentStart) + '；当前总扣分 ' + points(item.totalDeduction) + ' 分。').appendTo(wrapper);
            var summary = $('<div class="assessment-detail-summary"></div>');
            $.each(['年度已填报：' + yesNo(item.submitted), '已有里程碑：' + textValue(item.milestoneCount) + ' 条',
                '缺少里程碑：' + textValue(item.missingMilestoneCount) + ' 条'], function (_, text) {
                $('<span></span>').text(text).appendTo(summary);
            });
            summary.appendTo(wrapper);
            var table = $('<table class="table table-bordered"></table>');
            var header = $('<tr></tr>');
            $.each(['考核项', '里程碑计划', '计划完成时间', '开始扣分时间', '归属月份', '完成状态', '有佐证材料', '已标记扣分', '考核状态', '扣分', '判定说明'], function (_, text) {
                $('<th></th>').text(text).appendTo(header);
            });
            $('<thead></thead>').append(header).appendTo(table);
            var body = $('<tbody></tbody>').appendTo(table);
            $.each(item.items, function (_, entry) {
                var reason = textValue(entry.reason);
                if (entry.assessmentDate) reason = reason.replace(entry.assessmentDate, dateValue(entry.assessmentDate));
                var row = $('<tr></tr>').toggleClass('assessment-missing', numeric(entry.deduction) > 0)
                    .toggleClass('assessment-pending', entry.status === '未到考核时间');
                $.each([entry.itemName, entry.plan, dateValue(entry.plannedDate), dateValue(entry.assessmentDate), entry.assessmentMonth,
                    entry.sourceStatus, entry.milestoneId ? yesNo(entry.evidenceProvided) : '—',
                    entry.milestoneId ? yesNo(entry.penaltyMarked) : '—', entry.status,
                    points(entry.deduction), reason], function (index, value) {
                    $('<td></td>').text(textValue(value)).toggleClass('assessment-detail-text', index === 1 || index === 10).appendTo(row);
                });
                row.appendTo(body);
            });
            if (!item.items.length) $('<tr><td colspan="11">暂无考核明细。</td></tr>').appendTo(body);
            $('<div class="assessment-detail"></div>').append(table).appendTo(wrapper);
            $('<p class="assessment-hint"></p>').text('缺项补齐后恢复；已标记逾期的真实里程碑持续扣分。明细包含全部里程碑。').appendTo(wrapper);
            layer.open({ type: 1, title: '一支部一特色考核明细', area: [Math.min(1280, $(window).width() - 30) + 'px',
                Math.min(760, $(window).height() - 40) + 'px'], content: wrapper.prop('outerHTML') });
        }).fail(function (xhr) {
            if (version === requestVersion && selected === detailVersion) message(failure(xhr), true);
        });
    }

    grid.jqGrid({ datatype: 'local', data: [], autowidth: true, height: 'auto',
        rowNum: 20, rowList: [5, 10, 20, 50, 100], pager: '#assessmentPager', viewrecords: true,
        pgbuttons: true, pginput: true, loadonce: false,
        hasTabExport: false, hasColSet: false,
        jsonReader: { root: 'data', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'partyId' },
        cmTemplate: { sortable: false },
        autoencode: true, localReader: { id: 'partyId' },
        colModel: [
            { name: 'partyId', key: true, hidden: true },
            { label: '党组织名称', name: 'partyName', width: 280 },
            { label: '未填报扣分', name: 'submissionDeduction', width: 150, align: 'center', formatter: function (value, options, row) { return deduction(value, row); } },
            { label: '里程碑不足扣分', name: 'missingDeduction', width: 150, align: 'center', formatter: function (value, options, row) { return deduction(value, row); } },
            { label: '里程碑逾期扣分', name: 'milestoneDeduction', width: 150, align: 'center', formatter: function (value, options, row) { return deduction(value, row); } },
            { label: '总扣分', name: 'totalDeduction', width: 150, align: 'center', formatter: function (value, options, row) { return deduction(value, row, true); } },
            { label: '操作', name: 'operation', width: 110, align: 'center',
                formatter: function () { return '<button type="button" class="assessment-detail-button">考核明细</button>'; } }
        ]
    });
    // 平台定制版默认隐藏中间分页区，本页面启用服务端分页。
    $('#assessmentPager_center').show();
    grid.on('click', '.assessment-detail-button', function () { detail($(this).closest('tr.jqgrow').attr('id')); });
    resizeGrid();
    $(window).on('resize.yzbyts', resizeGrid);
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
            if (!result.data.length) {
                $('#assessmentStart').text('暂无考核年份');
                message('暂无可查询的考核年份。');
                return;
            }
            $('#assessmentYear').val(result.defaultYear);
            load();
        }).fail(function (xhr) {
            if (version !== requestVersion) return;
            $('#assessmentStart').text('开始考核日期未加载');
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
