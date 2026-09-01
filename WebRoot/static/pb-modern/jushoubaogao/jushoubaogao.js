(function ($, echarts) {
    'use strict';
    var root = '#pb-jushoubaogao';
    var charts = {};
    var requestNo = 0;
    var unitRows = [];
    var unitPage = 1;
    var unitPageSize = 10;
    var statisticsData = null;
    var activeStatusReportType = '总体';
    var activeMonthlyReportType = '总体';
    var activeUnitMode = 'report';

    function escapeHtml(value) {
        return $('<div>').text(value === undefined || value === null ? '' : String(value)).html();
    }
    function chart(id) {
        if (!charts[id]) { charts[id] = echarts.init(document.getElementById(id)); }
        return charts[id];
    }
    function progressOption(data) {
        var names = $.map(data || [], function (item) { return item.name; });
        var values = $.map(data || [], function (item) { return Number(item.value) || 0; });
        if (!values.length) { return null; }
        var barColors = $.map(names, function (name) { return name === '报告数' ? '#4B9BB5' : (name === '已完成' ? '#68A844' : (name === '闭环率' ? '#B3434F' : (name === '处理中' ? '#3F5AA9' : '#D3A43A'))); });
        return { color: barColors, grid: { left: 68, right: 104, top: 12, bottom: 24, containLabel: false }, tooltip: { trigger: 'axis', formatter: function (items) { var item = items[0]; return item.name + '<br/>' + item.data.displayValue + item.data.unit; }, position: function (point, params, dom, rect, size) { return [Math.min(point[0] + 12, size.viewSize[0] - size.contentSize[0] - 8), Math.max(8, point[1] - 24)]; } }, xAxis: { type: 'value', minInterval: 1, splitLine: { lineStyle: { color: '#dce3ea' } }, axisLabel: { color: '#45586d' } }, yAxis: { type: 'category', inverse: true, data: names, axisLine: { show: false }, axisTick: { show: false }, axisLabel: { color: '#263b52' } }, series: [{ type: 'bar', barMaxWidth: 20, data: $.map(values, function (value, index) { var source = data[index] || {}; return { value: value, displayValue: source.displayValue, unit: source.unit, itemStyle: { color: barColors[index] } }; }), label: { show: true, position: 'right', color: '#1d2f43', fontWeight: 'bold', formatter: function (item) { return item.data.displayValue + item.data.unit; } }, itemStyle: { borderRadius: [0, 3, 3, 0] } }] };
    }
    function emptyOption() {
        return { xAxis: { show: false }, yAxis: { show: false }, series: [], graphic: { type: 'text', left: 'center', top: 'middle', style: { text: '暂无数据', fill: '#8b98a8', fontSize: 16 } } };
    }
    function monthlyOption(data) {
        var values = $.map(data || [], function (item) { return Number(item.value) || 0; });
        return { color: ['#3F5AA9'], grid: { left: 42, right: 22, top: 20, bottom: 28, containLabel: true }, tooltip: { trigger: 'axis', formatter: function (items) { var index = items[0].dataIndex; var item = data[index] || {}; var rate = item.closureRate === undefined ? '0.00' : Number(item.closureRate).toFixed(2); var text = item.name + '<br/>报告数：' + (Number(item.reportCount) || 0) + '<br/>已完成：' + (Number(item.completed) || 0) + '<br/>闭环率：' + rate + '%<br/>处理中：' + (Number(item.processing) || 0) + '<br/>未受理：' + (Number(item.unaccepted) || 0); if (Number(item.other) > 0) { text += '<br/>其他状态：' + Number(item.other); } return text; } }, xAxis: { type: 'category', data: $.map(data || [], function (item) { return item.name; }), boundaryGap: false, axisLine: { lineStyle: { color: '#aebdce' } }, axisLabel: { color: '#263b52' } }, yAxis: { type: 'value', minInterval: 1, splitLine: { lineStyle: { color: '#dce3ea' } }, axisLabel: { color: '#263b52' } }, series: [{ type: 'line', smooth: true, data: values, symbol: 'circle', symbolSize: 7, lineStyle: { width: 3, color: '#3F5AA9' }, areaStyle: { color: 'rgba(63,90,169,.16)' }, label: { show: true, color: '#1f3045', fontWeight: 'bold' } }] };
    }
    function sumValues(data) {
        var total = 0;
        $.each(data || [], function (_, item) { total += Number(item.value) || 0; });
        return total;
    }
    function statusCounts(statuses) {
        var counts = {};
        $.each(statuses || [], function (_, status) { counts[status.name] = Number(status.value) || 0; });
        return counts;
    }
    function progressRows(statuses) {
        var counts = statusCounts(statuses);
        var reportCount = sumValues(statuses);
        var completed = counts['已完成'] || 0;
        var closureRate = reportCount ? (completed * 100 / reportCount).toFixed(2) : '0.00';
        return [
            { name: '报告数', value: reportCount, displayValue: reportCount, unit: '条' },
            { name: '已完成', value: completed, displayValue: completed, unit: '条' },
            { name: '闭环率', value: Number(closureRate), displayValue: closureRate, unit: '%' },
            { name: '处理中', value: counts['流转中'] || 0, displayValue: counts['流转中'] || 0, unit: '条' },
            { name: '未受理', value: counts['拟稿中'] || 0, displayValue: counts['拟稿中'] || 0, unit: '条' }
        ];
    }
    function activeBreakdown(data, reportType) {
        if (reportType === '总体') {
            return { status: data.status || [], monthly: data.monthly || [] };
        }
        return (data.typeBreakdowns || {})[reportType] || { status: [], monthly: [] };
    }
    function updateTypeTabs(tabList, reportType) {
        tabList.find('.jbg-type-tab').each(function () {
            var selected = $(this).data('report-type') === reportType;
            $(this).toggleClass('is-active', selected).attr('aria-selected', selected ? 'true' : 'false');
        });
    }
    function renderStatusBreakdown(data) {
        var breakdown = activeBreakdown(data, activeStatusReportType);
        var statuses = breakdown.status || [];
        var selectedTotal = sumValues(statuses);
        var metrics = progressRows(statuses);
        var scopeLabel = activeStatusReportType === '总体' ? '全部报告' : activeStatusReportType + '类报告';
        $(root + ' .jbg-status-summary').text(selectedTotal ? scopeLabel + '：报告数 ' + metrics[0].displayValue + ' 条，已完成 ' + metrics[1].displayValue + ' 条，闭环率 ' + metrics[2].displayValue + '%，处理中 ' + metrics[3].displayValue + ' 条，未受理 ' + metrics[4].displayValue + ' 条。' : scopeLabel + '暂无可统计的流程记录。');
        if (!data.statusTemporary && Number(data.flowCoverageRate) < 100 && Number(data.total) > 0) {
            $(root + ' .jbg-status-summary').append(' 流程数据不完整，闭环率仅供排查参考。');
        }
        chart('jbgStatusChart').setOption(selectedTotal ? progressOption(metrics) : emptyOption(), true);
    }
    function renderMonthlyBreakdown(data) {
        var breakdown = activeBreakdown(data, activeMonthlyReportType);
        var monthly = breakdown.monthly || [];
        var scopeLabel = activeMonthlyReportType === '总体' ? '全部报告' : activeMonthlyReportType + '类报告';
        var monthlyTotal = sumValues(monthly);
        var monthlyPeak = null;
        $.each(monthly, function (_, item) {
            var value = Number(item.value) || 0;
            if (!monthlyPeak || value > monthlyPeak.value) { monthlyPeak = { name: item.name, value: value }; }
        });
        $(root + ' .jbg-monthly-summary').text(monthlyTotal && monthlyPeak ? scopeLabel + '集中在' + monthlyPeak.name + '，共 ' + monthlyPeak.value + ' 条；全年合计 ' + monthlyTotal + ' 条。' : scopeLabel + '本年度暂无报告发生记录。');
        chart('jbgMonthlyChart').setOption(monthlyOption(monthly), true);
    }
    function topUnits(data) {
        var rows = (data || []).slice(0).sort(function (left, right) { return (Number(right.value) || 0) - (Number(left.value) || 0); });
        if (rows.length <= 10) { return rows; }
        var top = rows.slice(0, 10);
        var other = 0;
        $.each(rows.slice(8), function (_, item) { other += Number(item.value) || 0; });
        top.push({ name: '其他单位', value: other });
        return top;
    }
    function updateUnitTabs() {
        $(root + ' .jbg-unit-tab').each(function () {
            var selected = $(this).data('unit-mode') === activeUnitMode;
            $(this).toggleClass('is-active', selected).attr('aria-selected', selected ? 'true' : 'false');
        });
    }
    function renderUnitHeader() {
        var reportMode = activeUnitMode === 'report';
        var headings = reportMode ? ['排名', '报告单位', '报告总数', '质量', '安全', '生产', '技术', '其他'] : ['排名', '受理部门', '受理总数', '已完成', '闭环率', '处理中', '未受理'];
        $(root + ' .jbg-unit-table-head').html('<tr>' + $.map(headings, function (heading) { return '<th>' + heading + '</th>'; }).join('') + '</tr>');
        $(root + ' .jbg-unit-table').toggleClass('is-accept-mode', !reportMode);
        $(root + ' .jbg-unit-sort-label').text(reportMode ? '按报告总数降序' : '按受理总数降序');
    }
    function renderUnitTable(data) {
        unitRows = (data || []).slice(0).sort(function (left, right) {
            var totalCompare = (Number(right.total) || 0) - (Number(left.total) || 0);
            return totalCompare || String(left.name || '').localeCompare(String(right.name || ''));
        });
        var totalPages = Math.max(1, Math.ceil(unitRows.length / unitPageSize));
        unitPage = Math.min(unitPage, totalPages);
        var start = (unitPage - 1) * unitPageSize;
        var rows = unitRows.slice(start, start + unitPageSize);
        var html = '';
        $.each(rows, function (index, item) {
            var rank = start + index + 1;
            var rankClass = rank <= 3 ? ' jbg-rank-' + rank : '';
            function value(key) { return item[key] === undefined || item[key] === null ? '-' : item[key]; }
            var unitName = escapeHtml(item.name || '');
            html += '<tr><td><span class="jbg-rank' + rankClass + '">' + rank + '</span></td><td class="jbg-unit-name" title="' + unitName + '">' + unitName + '</td><td class="jbg-unit-total">' + value('total') + '</td>';
            if (activeUnitMode === 'report') {
                html += '<td>' + value('质量') + '</td><td>' + value('安全') + '</td><td>' + value('生产') + '</td><td>' + value('技术') + '</td><td>' + value('其他') + '</td>';
            } else {
                var rate = item.closureRate === undefined || item.closureRate === null ? '0.00' : Number(item.closureRate).toFixed(2);
                html += '<td>' + value('已完成') + '</td><td>' + rate + '%</td><td>' + value('流转中') + '</td><td>' + value('拟稿中') + '</td>';
            }
            html += '</tr>';
        });
        var columnCount = activeUnitMode === 'report' ? 8 : 7;
        var emptyText = activeUnitMode === 'report' ? '本年度暂无报告单位数据。' : '本年度暂无受理单位数据。';
        $(root + ' .jbg-unit-table-body').html(html || '<tr><td colspan="' + columnCount + '">' + emptyText + '</td></tr>');
        $(root + ' .jbg-unit-page-info').text(unitRows.length ? (start + 1) + '-' + Math.min(start + unitPageSize, unitRows.length) + '/' + unitRows.length : '1-0/0');
        $(root + ' .jbg-unit-page-number').text('第 ' + unitPage + ' 页');
        $(root + ' .jbg-unit-prev').prop('disabled', unitPage <= 1);
        $(root + ' .jbg-unit-next').prop('disabled', unitPage >= totalPages);
    }
    function renderUnitBreakdown(data) {
        var reportMode = activeUnitMode === 'report';
        var rows = reportMode ? (data.unitDetails || []) : (data.acceptUnitDetails || []);
        var top = rows.length ? rows.slice(0).sort(function (left, right) {
            var totalCompare = (Number(right.total) || 0) - (Number(left.total) || 0);
            return totalCompare || String(left.name || '').localeCompare(String(right.name || ''));
        })[0] : null;
        if (reportMode) {
            $(root + ' .jbg-unit-summary').text(top ? '“' + top.name + '”报告最多，共 ' + top.total + ' 条。' : '本年度暂无报告单位数据。');
        } else {
            var source = data.acceptUnitSourceCounts || {};
            var text = top ? '“' + top.name + '”受理记录最多，共 ' + top.total + ' 条。' : '本年度暂无受理单位数据。';
            text += ' 子表记录 ' + (Number(source.childRecords) || 0) + ' 条，task21回退 ' + (Number(source.task21Fallbacks) || 0) + ' 条，未解析报告 ' + (Number(source.unresolvedReports) || 0) + ' 条。';
            $(root + ' .jbg-unit-summary').text(text);
        }
        renderUnitHeader();
        renderUnitTable(rows);
    }
    function render(data) {
        var total = Number(data.total) || 0;
        var units = (data.unit || []).slice(0).sort(function (left, right) { return (Number(right.value) || 0) - (Number(left.value) || 0); });
        statisticsData = data;
        activeStatusReportType = '总体';
        activeMonthlyReportType = '总体';
        activeUnitMode = 'report';
        updateTypeTabs($(root + ' .jbg-type-tabs').eq(0), activeStatusReportType);
        updateTypeTabs($(root + ' .jbg-type-tabs').eq(1), activeMonthlyReportType);
        updateUnitTabs();
        $(root + ' .jbg-total').text(total);
        $(root + ' .jbg-completed-count').text(Number(data.closedCount) || 0);
        $(root + ' .jbg-processing-count').text(Number(data.processingCount) || 0);
        $(root + ' .jbg-closure-rate').text(Number(data.closureRate) || 0);
        $(root + ' .jbg-flow-coverage').text((Number(data.flowCoverageRate) || 0) + '%');
        $(root + ' .jbg-flow-unlinked').text(Number(data.flowUnlinkedCount) || 0);
        $(root + ' .jbg-unit-missing').text(Number(data.unitMissingCount) || 0);
        $(root + ' .jbg-type-missing').text(Number(data.typeMissingCount) || 0);
        $(root + ' .jbg-anonymous-invalid').text(Number(data.anonymousInvalidCount) || 0);
        var temporary = !!data.statusTemporary;
        $(root + ' .jbg-flow-coverage-label').text(temporary ? '测试状态覆盖率' : '流程覆盖率');
        $(root + ' .jbg-flow-unlinked-label').text(temporary ? '缺少测试状态' : '无流程实例');
        $(root + ' .jbg-quality').toggleClass('jbg-quality-warning', !temporary && Number(data.flowCoverageRate) < 100 && total > 0);
        $(root + ' .jbg-data-alert').toggle(!temporary && Number(data.flowCoverageRate) < 100 && total > 0);
        $(root + ' .jbg-simulation-badge').css('display', data.statusTemporary ? 'inline-flex' : 'none');
        $(root + ' .jbg-unit-count').text(units.length ? units[0].value : 0);
        $(root + ' .jbg-unit-kpi-note').text(units.length ? units[0].name : '暂无单位数据');
        unitPage = 1;
        renderUnitBreakdown(data);
        renderStatusBreakdown(data);
        renderMonthlyBreakdown(data);
    }
    function load() {
        var year = $(root + ' .jbg-year').val();
        var currentRequest = ++requestNo;
        $(root + ' .jbg-loading').show();
        $(root + ' .jbg-error').hide();
        $.ajax({ url: $(root).data('statistics-url'), cache: false, data: { year: year }, dataType: 'json' }).done(function (data) {
            if (currentRequest !== requestNo) { return; }
            var years = data.years || [];
            if (years.length) {
                $(root + ' .jbg-year').empty();
                $.each(years, function (_, value) { $(root + ' .jbg-year').append('<option value="' + value + '">' + value + '年</option>'); });
                $(root + ' .jbg-year').val(String(data.year));
            }
            if (data.ok === false) { $(root + ' .jbg-error').text(data.message || '统计数据读取失败，请联系管理员检查配置。').show(); } else { $(root + ' .jbg-error').hide(); }
            render(data);
        }).fail(function () { if (currentRequest === requestNo) { $(root + ' .jbg-error').text('统计接口访问失败，请联系管理员检查页面配置。').show(); render({ total: 0, status: [], type: [], anonymous: [], unit: [], monthly: [] }); } }).always(function () { if (currentRequest === requestNo) { $(root + ' .jbg-loading').hide(); } });
    }
    $(function () {
        $(root + ' .jbg-year').on('change', load);
        $(root + ' .jbg-type-tabs').eq(0).on('click', '.jbg-type-tab', function () {
            activeStatusReportType = $(this).data('report-type');
            updateTypeTabs($(this).closest('.jbg-type-tabs'), activeStatusReportType);
            if (statisticsData) { renderStatusBreakdown(statisticsData); }
        });
        $(root + ' .jbg-type-tabs').eq(1).on('click', '.jbg-type-tab', function () {
            activeMonthlyReportType = $(this).data('report-type');
            updateTypeTabs($(this).closest('.jbg-type-tabs'), activeMonthlyReportType);
            if (statisticsData) { renderMonthlyBreakdown(statisticsData); }
        });
        $(root + ' .jbg-unit-tabs').on('click', '.jbg-unit-tab', function () {
            activeUnitMode = $(this).data('unit-mode');
            unitPage = 1;
            updateUnitTabs();
            if (statisticsData) { renderUnitBreakdown(statisticsData); }
        });
        $(root + ' .jbg-unit-page-size').on('change', function () { unitPageSize = Number($(this).val()) || 10; unitPage = 1; renderUnitTable(unitRows); });
        $(root + ' .jbg-unit-prev').on('click', function () { if (unitPage > 1) { unitPage--; renderUnitTable(unitRows); } });
        $(root + ' .jbg-unit-next').on('click', function () { if (unitPage < Math.ceil(unitRows.length / unitPageSize)) { unitPage++; renderUnitTable(unitRows); } });
        $(window).on('resize.jushoubaogao', function () { $.each(charts, function (_, item) { item.resize(); }); });
        load();
    });
}(jQuery, echarts));
