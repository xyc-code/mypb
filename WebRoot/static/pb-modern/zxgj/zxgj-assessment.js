(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/zxgj/assessment/';
    var displayedYear = null;
    var requestVersion = 0;
    var detailVersion = 0;
    var grid = $('#assessmentGrid');
    var entityDecoder = document.createElement('textarea');

    // 平台 JSON 字符串已做 htmlEscape，仅还原这一层；输出仍使用 text/autoencode。
    function serverText(value) {
        if (typeof value !== 'string') return value;
        return value.replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]+);/gi, function (entity) {
            entityDecoder.innerHTML = entity;
            return entityDecoder.value;
        });
    }

    function decodeAssessment(item) {
        $.each(['projectId', 'projectName', 'formNumber', 'partyId', 'partyName'], function (_, field) {
            item[field] = serverText(item[field]);
        });
        $.each(item.items || [], function (_, entry) {
            $.each(['itemName', 'projectName', 'formNumber', 'plan'], function (_, field) {
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
        return number === null ? '—' : number > 0 ? '-' + number.toFixed(1) : '0';
    }

    function score(value, total) {
        var number = numeric(value);
        if (number === null) return '<span class="assessment-value-empty">—</span>';
        return '<span class="assessment-score ' + (number > 0 ? 'assessment-score-deducted' : 'assessment-score-zero')
            + (total ? ' assessment-total' : '') + '">' + points(number) + '</span>';
    }

    function controls(disabled) {
        $('#assessmentYear, #assessmentPartyName, #assessmentSearch').prop('disabled', disabled);
        $('.assessment-results').attr('aria-busy', disabled ? 'true' : 'false');
    }

    function resizeGrid() {
        grid.jqGrid('setGridWidth', Math.max(1050, $('.assessment-grid-scroll').width()));
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
        message('正在计算…');
        $.ajax({ url: base + 'list', type: 'POST', data: {
            year: year, partyName: $.trim($('#assessmentPartyName').val()), page: parameters.page, rows: parameters.rows
        }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data) || numeric(result.records) === null) {
                message(result && serverText(result.message) || '考核结果加载失败，请重新查询。', true);
                $('#assessmentAsOf').text('考核日期未加载');
                return;
            }
            displayedYear = year;
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            $.each(result.data, function (_, item) { decodeAssessment(item); });
            grid[0].addJSONData(result);
            $('#assessmentPager .ui-pg-input').attr('aria-label', '页码');
            message(result.records ? '共 ' + result.records + ' 个共建项目，扣分单位：分。' : '暂无符合查询条件的共建项目。');
        }).fail(function (xhr) {
            if (version !== requestVersion) return;
            $('#assessmentAsOf').text('考核日期未加载');
            message(failure(xhr), true);
        }).always(function () {
            if (version === requestVersion) controls(false);
        });
    }

    function yesNo(value) {
        return value === true ? '是' : value === false ? '否' : '—';
    }

    function status(value) {
        return { PENDING: '待考核', SATISFIED: '已满足', DEDUCTED: '已扣分' }[value] || '—';
    }

    function reason(entry) {
        if (entry.status === 'PENDING') return '未到检查日期';
        if (entry.status === 'SATISFIED') return '已上传附件';
        if (entry.status === 'DEDUCTED') return entry.evidenceProvided ? '已认定扣分，补传不恢复' : '缺少附件，已扣分';
        return '—';
    }

    function detail(id) {
        var year = displayedYear;
        var version = requestVersion;
        var selected = ++detailVersion;
        if (!year) return;
        $.ajax({ url: base + 'detail', type: 'POST', data: { year: year, projectId: id }, dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion || selected !== detailVersion) return;
            var item = result && result.data;
            if (!result || result.flag !== 'success' || !item || !$.isArray(item.items)) {
                message(result && serverText(result.message) || '无法读取共建项目考核明细。', true);
                return;
            }
            decodeAssessment(item);
            grid.jqGrid('setRowData', id, item);
            var wrapper = $('<div class="pb-zxgj-page assessment-dialog"></div>');
            $('<h2></h2>').text(textValue(item.projectName) + ' · ' + year + '年').appendTo(wrapper);
            $('<p class="assessment-detail-intro"></p>').text(textValue(item.partyName) + '；表单编号：' + textValue(item.formNumber)
                + '；考核截至 ' + dateValue(result.asOfDate) + '。').appendTo(wrapper);
            var summary = $('<div class="assessment-detail-summary"></div>');
            $.each(['里程碑：' + textValue(item.milestoneCount) + ' 条', '里程碑扣分：' + points(item.milestoneDeduction) + ' 分',
                '年度总结扣分：' + points(item.summaryDeduction) + ' 分', '总扣分：' + points(item.totalDeduction) + ' 分'], function (_, text) {
                $('<span></span>').text(text).appendTo(summary);
            });
            summary.appendTo(wrapper);
            var table = $('<table class="table table-bordered"></table>');
            var header = $('<tr></tr>');
            $.each(['考核项', '具体项目', '计划日期', '开始检查日期', '归属月份', '有附件', '已标记扣分', '考核状态', '扣分', '判定说明'], function (_, text) {
                $('<th></th>').text(text).appendTo(header);
            });
            $('<thead></thead>').append(header).appendTo(table);
            var body = $('<tbody></tbody>').appendTo(table);
            $.each(item.items, function (_, entry) {
                var row = $('<tr></tr>').toggleClass('assessment-missing', entry.status === 'DEDUCTED')
                    .toggleClass('assessment-pending', entry.status === 'PENDING');
                $.each([entry.itemName, entry.plan, dateValue(entry.plannedDate), dateValue(entry.assessmentDate), entry.assessmentMonth,
                    yesNo(entry.evidenceProvided), yesNo(entry.penaltyMarked), status(entry.status), points(entry.deduction), reason(entry)], function (index, value) {
                    $('<td></td>').text(textValue(value)).toggleClass('assessment-detail-text', index === 0 || index === 1 || index === 9).appendTo(row);
                });
                row.appendTo(body);
            });
            if (!item.items.length) $('<tr><td colspan="10">暂无考核明细。</td></tr>').appendTo(body);
            $('<div class="assessment-detail"></div>').append(table).appendTo(wrapper);
            $('<p class="assessment-hint"></p>').text('附件显示当前情况；已认定扣分在补传后仍保留。每笔扣分只计入开始检查的月份一次；本页展示该项目累计扣分。').appendTo(wrapper);
            layer.open({ type: 1, title: '铸心共建考核明细', area: [Math.min(1280, $(window).width() - 30) + 'px',
                Math.min(760, $(window).height() - 40) + 'px'], content: wrapper.prop('outerHTML') });
        }).fail(function (xhr) {
            if (version === requestVersion && selected === detailVersion) message(failure(xhr), true);
        });
    }

    grid.jqGrid({ datatype: 'local', data: [], autowidth: true, height: 'auto',
        rowNum: 20, rowList: [5, 10, 20, 50, 100], pager: '#assessmentPager', viewrecords: true,
        pgbuttons: true, pginput: true, loadonce: false,
        hasTabExport: false, hasColSet: false,
        jsonReader: { root: 'data', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'projectId' },
        cmTemplate: { sortable: false },
        autoencode: true, localReader: { id: 'projectId' },
        colModel: [
            { name: 'projectId', key: true, hidden: true },
            { label: '党组织名称', name: 'partyName', width: 230 },
            { label: '表单编号', name: 'formNumber', width: 170 },
            { label: '共建项目', name: 'projectName', width: 280 },
            { label: '里程碑扣分', name: 'milestoneDeduction', width: 130, align: 'center', formatter: function (value) { return score(value); } },
            { label: '年度总结扣分', name: 'summaryDeduction', width: 130, align: 'center', formatter: function (value) { return score(value); } },
            { label: '总扣分', name: 'totalDeduction', width: 120, align: 'center', formatter: function (value) { return score(value, true); } },
            { label: '操作', name: 'operation', width: 110, align: 'center',
                formatter: function () { return '<button type="button" class="assessment-detail-button">考核明细</button>'; } }
        ]
    });
    // 平台定制版默认隐藏中间分页区，本页面启用服务端分页。
    $('#assessmentPager_center').show();
    grid.on('click', '.assessment-detail-button', function () { detail($(this).closest('tr.jqgrow').attr('id')); });
    resizeGrid();
    $(window).on('resize.zxgj', resizeGrid);
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
        $.ajax({ url: base + 'years', type: 'GET', dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (!result || result.flag !== 'success' || !$.isArray(result.data)) {
                message(result && serverText(result.message) || '年份加载失败，请重新查询。', true);
                return;
            }
            $('#assessmentYear').empty();
            $.each(result.data, function (_, year) { $('<option></option>').val(year).text(year + '年').appendTo('#assessmentYear'); });
            $('#assessmentAsOf').text('考核截至：' + dateValue(result.asOfDate));
            if (!result.data.length) {
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
