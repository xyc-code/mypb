(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/assessment/';
    var root = $('.pb-monthly-assessment-page').first();
    var grid = $('#monthlyGrid');
    var modules = [];
    var categoryNames = {};
    var displayedRows = {};
    var activeFilters;
    var requestVersion = 0;
    var optionsLoaded = false;
    var optionsRequest = null;

    function message(text, error) {
        $('#monthlyMessage').text(text).toggleClass('assessment-error', !!error);
    }
    function escapeHtml(value) { return $('<span></span>').text(value == null ? '' : String(value)).html(); }
    function points(value, adjustment) {
        if (value == null || !isFinite(Number(value))) return '—';
        var number = Number(value);
        return (adjustment && number > 0 ? '+' : '') + number.toFixed(4).replace(/\.?0+$/, '');
    }
    function score(value, adjustment) {
        var number = Number(value);
        return '<span class="assessment-score' + (number < 0 ? ' assessment-score-negative' :
            (number > 0 && adjustment ? ' assessment-score-positive' : '')) + '">' + points(value, adjustment) + '</span>';
    }
    function resultKind(kind) { return kind === 'ADJUSTMENT' ? '净加扣分' : kind === 'SCORE' ? '最终得分' : kind; }
    function departmentNames(item) {
        return $.map(item.departments || [], function (department) { return department.name || department.id; });
    }
    function generatedAt(value) { return value ? String(value).slice(0, 10) : '—'; }
    function resizeGrid() { grid.jqGrid('setGridWidth', Math.max(1120, root.find('.assessment-grid-scroll').width())); }
    function failure(xhr) { return xhr.responseJSON && xhr.responseJSON.message || '查询失败，请重试；登录过期时请重新登录。'; }

    function filterModules() {
        var selected = $('#monthlyModule').val();
        var category = $('#monthlyCategory').val();
        var select = $('#monthlyModule').empty().append($('<option></option>').val('').text('全部模块'));
        $.each(modules, function (_, item) {
            if (!category || item.categoryCode === category) $('<option></option>').val(item.code).text(item.name).appendTo(select);
        });
        select.val(selected);
        if (!select.val()) select.val('');
    }

    function loadOptions() {
        if (optionsRequest) return optionsRequest;
        optionsRequest = $.ajax({ url: base + 'options', dataType: 'json', cache: false }).done(function (result) {
            if (result.flag !== 'success') {
                $('#monthlyOptionsMessage').text('筛选选项加载失败，可点击查询重试。').prop('hidden', false);
                return;
            }
            var category = $('#monthlyCategory').empty().append($('<option></option>').val('').text('全部板块'));
            $.each(result.categories, function (_, item) {
                categoryNames[item.code] = item.name;
                $('<option></option>').val(item.code).text(item.name).appendTo(category);
            });
            modules = result.modules;
            filterModules();
            var department = $('#monthlyDepartment').empty().append($('<option></option>').val('').text('全部部门（含未关联）'));
            $.each(result.departments, function (_, item) { $('<option></option>').val(item.id).text(item.name).appendTo(department); });
            optionsLoaded = true;
            $('#monthlyOptionsMessage').prop('hidden', true);
        }).fail(function () {
            $('#monthlyOptionsMessage').text('筛选选项加载失败，可点击查询重试。').prop('hidden', false);
        }).always(function () { optionsRequest = null; });
        return optionsRequest;
    }

    function load() {
        var year = Number($('#monthlyYear').val());
        if (!year || year % 1 || year < 1 || year > 9998) { message('请输入1至9998之间的整数年份。', true); return; }
        activeFilters = { year: year, month: $('#monthlyMonth').val(), categoryCode: $('#monthlyCategory').val(),
            moduleCode: $('#monthlyModule').val(), departmentId: $('#monthlyDepartment').val() };
        grid.jqGrid('setGridParam', { page: 1, datatype: requestPage }).trigger('reloadGrid');
    }

    function requestPage(parameters) {
        var version = ++requestVersion;
        displayedRows = {};
        grid.jqGrid('clearGridData');
        $('#monthlyPager').prop('hidden', true);
        $('#monthlyEmpty').prop('hidden', true);
        root.find('.assessment-results').attr('aria-busy', 'true');
        $('#monthlyHeading').text(activeFilters.year + '年' + activeFilters.month + '月 · 成绩明细');
        message('正在读取已收集结果…');
        $.ajax({ url: base + 'results', data: $.extend({}, activeFilters, { page: parameters.page, pageSize: parameters.rows }),
            dataType: 'json', cache: false }).done(function (result) {
            if (version !== requestVersion) return;
            if (result.flag !== 'success') { message(result.message || '查询失败，请重新登录后重试。', true); return; }
            var pages = Math.ceil(result.total / result.pageSize);
            if (result.total && result.page > pages) {
                grid.jqGrid('setGridParam', { page: pages, datatype: requestPage }).trigger('reloadGrid');
                return;
            }
            $.each(result.rows, function (_, row) { displayedRows[row.id] = row; });
            grid[0].addJSONData({ rows: result.rows, page: result.page, total: pages, records: result.total });
            $('#monthlyPager .ui-pg-input').attr('aria-label', '页码');
            $('#monthlyPager').prop('hidden', result.total === 0);
            $('#monthlyEmpty').prop('hidden', result.total !== 0);
            message(result.total ? '共 ' + result.total + ' 条已收集成绩 · 单位：分' : '当前查询条件下暂无已收集成绩');
        }).fail(function (xhr) { if (version === requestVersion) message(failure(xhr), true); }).always(function () {
            if (version === requestVersion) root.find('.assessment-results').attr('aria-busy', 'false');
        });
    }

    function detail(id) {
        var item = displayedRows[id];
        if (!item) return;
        var wrapper = $('<div class="pb-monthly-assessment-page assessment-dialog"></div>');
        $('<h2></h2>').text(item.assessmentOrgName + ' · ' + item.year + '年' + item.month + '月').appendTo(wrapper);
        var meta = $('<div class="assessment-detail-meta"></div>').appendTo(wrapper);
        $.each(['关联部门：' + (departmentNames(item).join('、') || '未关联部门'),
            '模块：' + item.moduleName, resultKind(item.resultKind) + '：' + points(item.resultScore, item.resultKind === 'ADJUSTMENT') + ' 分',
            '规则版本：' + item.ruleVersion, '生成日期：' + generatedAt(item.calculatedAt)], function (_, text) { $('<span></span>').text(text).appendTo(meta); });
        if (item.departments.length > 1) $('<p class="assessment-hint"></p>').text('此成绩分别计入每个关联部门，不分摊。').appendTo(wrapper);
        if (!item.reasons.length) {
            $('<p class="assessment-detail-zero"></p>').text('本条成绩无加扣分明细。').appendTo(wrapper);
        } else {
            var table = $('<table></table>');
            var header = $('<tr></tr>');
            $.each(['考核项', '加扣分', '原因'], function (_, text) { $('<th scope="col"></th>').text(text).appendTo(header); });
            $('<thead></thead>').append(header).appendTo(table);
            var body = $('<tbody></tbody>').appendTo(table);
            $.each(item.reasons, function (_, reason) {
                var row = $('<tr></tr>').appendTo(body);
                $('<td></td>').text(reason.itemName).appendTo(row);
                $('<td></td>').html(score(reason.scoreChange, true)).appendTo(row);
                $('<td></td>').text(reason.reason).appendTo(row);
            });
            $('<div class="assessment-detail"></div>').append(table).appendTo(wrapper);
        }
        layer.open({ type: 1, title: '加扣分原因明细', area: [Math.min(880, $(window).width() - 30) + 'px',
            Math.min(560, $(window).height() - 40) + 'px'], content: wrapper.prop('outerHTML') });
    }

    grid.jqGrid({ datatype: 'local', data: [], autowidth: true, height: 'auto',
        rowNum: 20, rowList: [5, 10, 20, 50, 100], pager: '#monthlyPager', viewrecords: true,
        pgbuttons: true, pginput: true, loadonce: false, hasTabExport: false, hasColSet: false,
        jsonReader: { root: 'rows', page: 'page', total: 'total', records: 'records', repeatitems: false, id: 'id' },
        cmTemplate: { sortable: false }, autoencode: true, localReader: { id: 'id' },
        colModel: [
            { name: 'id', key: true, hidden: true },
            { label: '关联部门', name: 'departments', width: 170, formatter: function (value, options, row) {
                var names = departmentNames(row);
                return names.length ? '<span class="assessment-departments">' + $.map(names, function (name) {
                    return '<span>' + escapeHtml(name) + '</span>';
                }).join('') + '</span>' : '<span class="assessment-unlinked">未关联部门</span>';
            } },
            { label: '被考核组织', name: 'assessmentOrgName', width: 215 },
            { label: '板块', name: 'categoryCode', width: 65, align: 'center', formatter: function (value) { return escapeHtml(categoryNames[value] || value); } },
            { label: '考核模块', name: 'moduleName', width: 145 },
            { label: '成绩月份', name: 'month', width: 85, align: 'center', formatter: function (value, options, row) { return escapeHtml(row.year + '-' + ('0' + value).slice(-2)); } },
            { label: '结果类型', name: 'resultKind', width: 90, align: 'center', formatter: function (value) { return escapeHtml(resultKind(value)); } },
            { label: '成绩', name: 'resultScore', width: 85, align: 'center', formatter: function (value, options, row) { return score(value, row.resultKind === 'ADJUSTMENT'); } },
            { label: '生成日期', name: 'calculatedAt', width: 125, align: 'center', formatter: function (value) { return escapeHtml(generatedAt(value)); } },
            { label: '操作', name: 'operation', width: 95, align: 'center', formatter: function () { return '<button type="button" class="assessment-detail-button">原因明细</button>'; } }
        ]
    });
    // PB 定制 jqGrid 默认隐藏分页中心区域，此页面沿用三会一课的服务端分页方式。
    $('#monthlyPager_center').show();
    grid.on('click', '.assessment-detail-button', function () { detail($(this).closest('tr.jqgrow').attr('id')); });
    resizeGrid();
    $(window).on('resize.monthlyAssessment', resizeGrid);
    $('#monthlyCategory').on('change', filterModules);
    $('#monthlyFilters').on('submit', function (event) {
        event.preventDefault();
        if (optionsLoaded) load(); else loadOptions().always(load);
    });
    $('#monthlyReset').on('click', function () {
        $('#monthlyYear').val(root.attr('data-default-year'));
        $('#monthlyMonth').val(root.attr('data-default-month'));
        $('#monthlyCategory, #monthlyDepartment').val('');
        filterModules();
        $('#monthlyModule').val('');
        load();
    });
    $('#monthlyMonth').val(root.attr('data-default-month'));
    loadOptions().always(load);
}(jQuery));
