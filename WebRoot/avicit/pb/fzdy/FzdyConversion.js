/* jQuery/layer and the low-code view's existing jqGrid are reused. */
(function (window, $) {
    'use strict';
    var busy = false;
    function escapeHtml(value) {
        return $('<span>').text(value == null ? '' : String(value)).html();
    }
    window.fzdyConvertSelected = function (gridId, button) {
        if (busy) { return; }
        var grid = $(document.getElementById(gridId));
        if (!grid.length) { layer.alert('未找到发展党员列表，请检查按钮绑定。'); return; }
        var selected = grid.jqGrid('getGridParam', 'selarrrow') || [];
        if (!selected.length) { layer.msg('请选择需要转党员的发展党员记录。'); return; }
        if (selected.length > 200) { layer.msg('每次最多转换 200 条记录。'); return; }
        var ids = [], valid = true;
        $.each(selected, function (_, rowId) {
            var row = grid.jqGrid('getRowData', rowId);
            if (!row.ID) { valid = false; return false; }
            ids.push(row.ID);
        });
        if (!valid) { layer.alert('列表必须包含原始 ID 隐藏列，且不能为 ID 配置格式化器。'); return; }
        var $button = $(button);
        busy = true;
        $button.prop('disabled', true).attr('aria-disabled', 'true').addClass('disabled');
        avicAjax.ajax({
            url: 'platform/avicit/pb/fzdy/conversion/convert',
            type: 'POST',
            quiet: true,
            contentType: 'application/json; charset=UTF-8',
            dataType: 'json',
            data: JSON.stringify(ids),
            success: function (result) {
                if (!result || !result.ok) {
                    layer.alert(escapeHtml(result && result.message || '转换服务未返回有效结果，请刷新列表后核对。'));
                    return;
                }
                var html = '<p>成功 ' + Number(result.success) + ' 条，跳过 ' + Number(result.skipped)
                    + ' 条，失败 ' + Number(result.failed) + ' 条。</p><div style="max-height:360px;overflow:auto">';
                $.each(result.results, function (_, item) {
                    html += '<p>' + escapeHtml(item.name || item.id) + '：' + escapeHtml(item.message) + '</p>';
                });
                layer.alert(html + '</div>', {title: '转党员结果', area: ['560px', 'auto']});
            },
            error: function (xhr) {
                var result = xhr.responseJSON;
                layer.alert(escapeHtml(result && result.message || '请求未正常完成，可能已有部分记录转换成功。请刷新核对后重试，已成功记录会自动跳过。'));
            },
            complete: function () {
                busy = false;
                $button.prop('disabled', false).removeAttr('aria-disabled').removeClass('disabled');
                grid.trigger('reloadGrid');
            }
        });
    };
}(window, jQuery));
