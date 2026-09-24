(function (window, $) {
    'use strict';
    var states = { '报告数': 'all', '报告总数': 'all', '已完成': 'ended', '闭环率': 'ended', '处理中': 'active', '未受理': 'start' };
    var types = ['总体', '质量', '安全', '生产', '技术', '其他'];
    var safetyType = '安全（技安环保/保密/保卫/合规等）';
    function valid(scope) {
        return scope && /^[1-9]\d{3}$/.test(String(scope.year)) && types.indexOf(scope.type) >= 0 &&
            ['all', 'ended', 'active', 'start'].indexOf(scope.state) >= 0;
    }
    function decodeQuery(query) {
        var result = {};
        (query || '').replace(/^\?/, '').split('&').forEach(function (part) {
            if (!part) { return; }
            var index = part.indexOf('=');
            var key = decodeURIComponent((index < 0 ? part : part.slice(0, index)).replace(/\+/g, ' '));
            if (key === '__proto__' || key === 'constructor' || key === 'prototype') { return; }
            result[key] = decodeURIComponent((index < 0 ? '' : part.slice(index + 1)).replace(/\+/g, ' '));
        });
        return result;
    }
    function readScope(query) {
        var values = decodeQuery(query);
        if (values.jbgDrilldown !== '1') { return null; }
        var scope = { year: values.jbgYear, type: values.jbgType, state: values.jbgState };
        if (!valid(scope)) { throw new Error('举手报告跳转条件无效，请从统计页重新打开。'); }
        return scope;
    }
    function link(baseUrl, year, type, metric) {
        var scope = { year: year, type: type, state: states[metric] };
        if (!valid(scope)) { return null; }
        return baseUrl + '?jbgDrilldown=1&jbgYear=' + encodeURIComponent(year) +
            '&jbgType=' + encodeURIComponent(type) + '&jbgState=' + encodeURIComponent(scope.state);
    }
    function criteria(scope, current) {
        var result = {};
        Object.keys(current || {}).forEach(function (key) {
            if (key !== '__proto__' && key !== 'constructor' && key !== 'prototype') { result[key] = current[key]; }
        });
        // These two dedicated search fields must be configured in jsbg_lcc, see deployment notes.
        delete result.BGLX;
        result.bpmState = scope.state;
        result.JBG_CREATION_DATE_START = scope.year + '-01-01 00:00:00';
        result.JBG_CREATION_DATE_END = scope.year + '-12-31 23:59:59';
        result.JBG_REPORT_TYPES = scope.type === '总体' ? '' : (scope.type === '安全' ? '安全,' + safetyType : scope.type);
        return result;
    }
    window.JbgDrilldown = { link: link, readScope: readScope, criteria: criteria };
    if (!$ || !/\/(?:toViewJsp\/jsbg_lcc(?:\/|$)|view\/jsbg_lcc\/)/.test(window.location.pathname)) { return; }
    if (window.jbgDrilldownInstalled) { return; }
    window.jbgDrilldownInstalled = true;
    var scope, error;
    try { scope = readScope(window.location.search); } catch (ex) { error = ex.message; }
    if (!scope && !error) { return; }
    function showError(message) {
        if (!$('#jbg-drilldown-error').length) {
            $('<div id="jbg-drilldown-error" role="alert" class="alert alert-danger">').text(message).prependTo('body');
        }
    }
    function reflect(grid, form) {
        var values = criteria(scope);
        $('#' + grid.id + 'workFlowSelect').val(scope.state).prop('disabled', true);
        var typeField = form.find('[name="BGLX"]');
        typeField.val(scope.type === '总体' ? '' : scope.type);
        if (scope.type === '安全' && !typeField.val()) { typeField.val(safetyType); }
        typeField.prop('disabled', true);
        form.find('[name="JBG_CREATION_DATE_START"]').val(values.JBG_CREATION_DATE_START).prop('disabled', true);
        form.find('[name="JBG_CREATION_DATE_END"]').val(values.JBG_CREATION_DATE_END).prop('disabled', true);
        form.find('[name="JBG_REPORT_TYPES"]').each(function () {
            $(this).prop('checked', values.JBG_REPORT_TYPES.split(',').indexOf(this.value) >= 0).prop('disabled', true);
        });
        var toolbar = $('#tableToolbar' + grid.id);
        if (!toolbar.find('.jbg-drilldown-scope').length) {
            $('<span class="jbg-drilldown-scope" style="margin:0 8px;">').text(scope.year + '年 · ' + scope.type + ' · 统计下钻').prependTo(toolbar);
        }
    }
    // Register before DOM-ready so even the generated view's first request is filtered.
    $.ajaxPrefilter(function (options, original, xhr) {
        var match = /\/selectTableComponentData\/[^/]+\/([^/]+)\/Y(?:\/|$)/.exec(options.url);
        if (!match) { return; }
        var grid = document.getElementById(match[1]);
        var form = $('#searchform' + match[1]);
        if (error) { showError(error); xhr.abort(); return; }
        if (!grid || !form.find('[name="JBG_CREATION_DATE_START"]').length ||
                !form.find('[name="JBG_CREATION_DATE_END"]').length ||
                !form.find('input[type="checkbox"][name="JBG_REPORT_TYPES"]').length) {
            showError('jsbg_lcc 尚未配置统计下钻查询项，请按部署说明配置后重新发布视图。');
            xhr.abort();
            return;
        }
        try {
            var post = typeof options.data === 'string' ? decodeQuery(options.data) : $.extend({}, options.data);
            var merged = criteria(scope, post.param ? JSON.parse(post.param) : {});
            post.param = JSON.stringify(merged);
            // Keyword search is an alternative query branch and would bypass the dedicated fields.
            post.keyWord = '';
            options.data = $.param(post);
            if (grid.p) { $.extend(grid.p.postData, { param: post.param, keyWord: '' }); }
            window[grid.id + 'ParamIn'] = post.param;
            window[grid.id + 'KeyWordIn'] = '';
            reflect(grid, form);
        } catch (ex) {
            showError('统计下钻查询条件解析失败，请从统计页重新打开。');
            xhr.abort();
        }
    });
    $(function () {
        if (error) { showError(error); return; }
        // This view's keyword search uses a separate backend branch; use advanced search instead.
        $('[id^="keyWord"]').prop('disabled', true).attr('title', '统计下钻请使用高级查询，年份、类型和状态保持统计口径。');
    });
}(window, window.jQuery));
