(function (window, $) {
    'use strict';

    var apiUrl = window.pbExcelExportConfigUrl || '';
    var dialogIndex = null;
    var currentUser = {id: '', name: '', date: ''};
    var childConfigs = [];
    var draggedRow = null;

    function init() {
        loadCurrentUser();
        initGrid();
        bindEvents();
    }

    function initGrid() {
        $('#excelConfigGrid').jqGrid({
            url: apiUrl + 'list.json',
            mtype: 'POST',
            datatype: 'json',
            toolbar: [true, 'top'],
            colModel: [
                {label: 'ID', name: 'ID', key: true, hidden: true},
                {label: '编码', name: 'CONFIG_CODE', width: 140, align: 'left'},
                {label: '名称', name: 'CONFIG_NAME', width: 180, align: 'left'},
                {label: '类型', name: 'CONFIG_TYPE', width: 80, align: 'center', formatter: typeName},
                {label: '表名', name: 'TABLE_NAME', width: 180, align: 'left'},
                {label: '表注释', name: 'TABLE_COMMENT', width: 220, align: 'left'},
                {label: '状态', name: 'STATUS', width: 70, align: 'center', formatter: statusName},
                {label: '创建人', name: 'CREATED_BY', width: 120, align: 'left'},
                {label: '创建时间', name: 'CREATION_DATE', width: 150, align: 'center', formatter: formatDate}
            ],
            height: $(window).height() - 120,
            rowNum: 20,
            rowList: [10, 20, 50, 100],
            pagerpos: 'left',
            multiselect: true,
            multiboxonly: true,
            viewrecords: true,
            autowidth: true,
            shrinkToFit: true,
            responsive: true,
            styleUI: 'Bootstrap',
            pager: '#excelConfigPager',
            postData: {keyWord: ''}
        });
        $('#t_excelConfigGrid').append($('#tableToolbar'));
    }

    function bindEvents() {
        $('#excelConfigAdd').on('click', openAdd);
        $('#excelConfigEdit').on('click', openEdit);
        $('#excelConfigDelete').on('click', deleteRows);
        $('#excelConfigCheck').on('click', checkConfig);
        $('#excelConfigSearch').on('click', reloadGrid);
        $('#excelConfigKeyWord').on('keydown', function (e) {
            if (e.keyCode === 13) {
                reloadGrid();
            }
        });
        $('#tableSearchInput').on('focus', searchTables);
        $('#tableSearchBtn').on('click', searchTables);
        $('#tableSearchInput').on('keydown', function (e) {
            if (e.keyCode === 13) {
                searchTables();
                return false;
            }
        });
        $('#tableResult').on('change', selectTable);
        $('#configType').on('change', updateTypeState);
        $('#addRelationBtn').on('click', function () {
            addRelationRow(null);
        });
    }

    function loadCurrentUser() {
        $.ajax({
            url: apiUrl + 'currentUser.json',
            type: 'POST',
            dataType: 'json',
            async: false,
            success: function (res) {
                currentUser.id = res.id || '';
                currentUser.name = res.name || res.id || '';
                currentUser.date = res.date || today();
            }
        });
    }

    function reloadGrid() {
        $('#excelConfigGrid').jqGrid('setGridParam', {
            postData: {keyWord: $('#excelConfigKeyWord').val()},
            page: 1
        }).trigger('reloadGrid');
    }

    function openAdd() {
        resetForm();
        openDialog('添加');
    }

    function openEdit() {
        var ids = $('#excelConfigGrid').jqGrid('getGridParam', 'selarrrow');
        if (ids.length !== 1) {
            layer.alert(ids.length === 0 ? '请选择要编辑的数据！' : '只允许选择一条数据！', {
                icon: 7,
                area: ['400px', ''],
                closeBtn: 0,
                btn: ['关闭'],
                title: '提示'
            });
            return;
        }
        $.ajax({
            url: apiUrl + 'detail.json',
            type: 'POST',
            dataType: 'json',
            data: {id: ids[0]},
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                resetForm();
                fillForm(res.config, res.columns || [], res.relations || []);
                openDialog('编辑');
            },
            error: ajaxError
        });
    }

    function openDialog(title) {
        updateTypeState();
        dialogIndex = layer.open({
            type: 1,
            title: title,
            area: ['1080px', '720px'],
            skin: 'bs-modal',
            maxmin: false,
            content: $('#excelConfigDialog'),
            btn: ['保存', '取消'],
            yes: function () {
                saveConfig();
            }
        });
    }

    function resetForm() {
        $('#excelConfigForm')[0].reset();
        $('#configId').val('');
        $('#tableName').val('');
        $('#tableComment').val('');
        $('#createdByName').val(currentUser.name);
        $('#creationDate').val(currentUser.date || today());
        $('#configType').val('MAIN');
        $('#status').val('1');
        $('#tableResult').empty().hide();
        $('#columnTable tbody').empty();
        $('#relationTable tbody').empty();
    }

    function fillForm(config, columns, relations) {
        $('#configId').val(config.ID || '');
        $('#configCode').val(config.CONFIG_CODE || '');
        $('#configName').val(config.CONFIG_NAME || '');
        $('#configType').val(config.CONFIG_TYPE || 'MAIN');
        $('#status').val(config.STATUS || '1');
        $('#tableName').val(config.TABLE_NAME || '');
        $('#tableComment').val(config.TABLE_COMMENT || '');
        $('#tableSearchInput').val((config.TABLE_NAME || '') + (config.TABLE_COMMENT ? ' ' + config.TABLE_COMMENT : ''));
        $('#createdByName').val(config.CREATED_BY || currentUser.name);
        $('#creationDate').val(formatDate(config.CREATION_DATE) || currentUser.date || today());
        $('#remark').val(config.REMARK || '');
        renderColumns(columns);
        loadChildConfigs(function () {
            for (var i = 0; i < relations.length; i++) {
                addRelationRow(relations[i]);
            }
        });
    }

    function searchTables() {
        $.ajax({
            url: apiUrl + 'tables.json',
            type: 'POST',
            dataType: 'json',
            data: {keyWord: $('#tableSearchInput').val()},
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                var select = $('#tableResult').empty();
                $.each(res.rows || [], function (_, row) {
                    $('<option></option>')
                        .val(row.TABLE_NAME)
                        .text(row.TABLE_NAME + (row.TABLE_COMMENT ? ' - ' + row.TABLE_COMMENT : ''))
                        .attr('data-comment', row.TABLE_COMMENT || '')
                        .appendTo(select);
                });
                select.toggle(select.children().length > 0);
            },
            error: ajaxError
        });
    }

    function selectTable() {
        var option = $('#tableResult option:selected');
        var tableName = option.val();
        if (!tableName) {
            return;
        }
        $('#tableName').val(tableName);
        $('#tableComment').val(option.attr('data-comment') || '');
        $('#tableSearchInput').val(option.text());
        $('#tableResult').hide();
        $.ajax({
            url: apiUrl + 'columns.json',
            type: 'POST',
            dataType: 'json',
            data: {tableName: tableName},
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                renderColumns(res.rows || []);
                $('#relationTable tbody').empty();
            },
            error: ajaxError
        });
    }

    function renderColumns(columns) {
        var tbody = $('#columnTable tbody').empty();
        $.each(columns, function (index, row) {
            var tr = $('<tr draggable="true"></tr>')
                .attr('data-column', row.COLUMN_NAME || '')
                .attr('data-type', row.COLUMN_TYPE || '')
                .attr('data-length', row.COLUMN_LENGTH || 0);
            tr.append('<td class="pb-excel-drag">≡</td>');
            tr.append('<td><input class="sort-no" type="text" value="' + escapeHtml(row.SORT_NO || (index + 1)) + '"></td>');
            tr.append('<td class="column-name">' + escapeHtml(row.COLUMN_NAME || '') + '</td>');
            tr.append('<td><input class="column-label" type="text" value="' + escapeAttr(row.COLUMN_LABEL || row.COLUMN_COMMENT || row.COLUMN_NAME || '') + '"></td>');
            tr.append('<td>' + escapeHtml(row.COLUMN_TYPE || '') + '</td>');
            tr.append('<td><select class="display-format"><option value="">默认</option><option value="DATE">日期</option><option value="DATETIME">日期时间</option><option value="NUMBER">数字</option><option value="TEXT">文本</option><option value="DICT">字典</option></select></td>');
            tr.append('<td><input class="dict-type" type="text" value="' + escapeAttr(row.DICT_TYPE || '') + '" placeholder="LOOKUP_TYPE"></td>');
            tr.append('<td><select class="export-flag"><option value="Y">是</option><option value="N">否</option></select></td>');
            tr.append('<td><input class="column-width" type="text" value="' + escapeHtml(row.COLUMN_WIDTH || 16) + '"></td>');
            tr.find('.display-format').val(row.DISPLAY_FORMAT || '');
            tr.find('.export-flag').val(row.EXPORT_FLAG || 'Y');
            tbody.append(tr);
        });
        bindColumnDrag();
        syncColumnSort();
        refreshMainColumnOptions();
    }

    function bindColumnDrag() {
        $('#columnTable tbody tr')
            .off('dragstart dragover drop dragend')
            .on('dragstart', function () {
                draggedRow = this;
                $(this).addClass('pb-excel-row-dragging');
            })
            .on('dragover', function (e) {
                e.preventDefault();
            })
            .on('drop', function (e) {
                e.preventDefault();
                if (draggedRow && draggedRow !== this) {
                    if ($(draggedRow).index() < $(this).index()) {
                        $(this).after(draggedRow);
                    } else {
                        $(this).before(draggedRow);
                    }
                    syncColumnSort();
                    refreshMainColumnOptions();
                }
            })
            .on('dragend', function () {
                $(this).removeClass('pb-excel-row-dragging');
                draggedRow = null;
            });
    }

    function syncColumnSort() {
        $('#columnTable tbody tr').each(function (index) {
            $(this).find('.sort-no').val(index + 1);
        });
    }

    function refreshMainColumnOptions() {
        $('#relationTable .main-column-select').each(function () {
            var val = $(this).val();
            fillColumnSelect($(this), collectCurrentColumns(), val);
        });
    }

    function addRelationRow(relation) {
        if ($('#configType').val() !== 'MAIN') {
            return;
        }
        loadChildConfigs(function () {
            var tbody = $('#relationTable tbody');
            var tr = $('<tr></tr>');
            tr.append('<td><input class="relation-sort" type="text" value="' + (tbody.children().length + 1) + '"></td>');
            tr.append('<td><select class="child-config-select"></select></td>');
            tr.append('<td><select class="main-column-select"></select></td>');
            tr.append('<td><select class="child-column-select"></select></td>');
            tr.append('<td><button type="button" class="btn btn-default btn-xs relation-delete">删除</button></td>');
            tbody.append(tr);
            fillChildConfigSelect(tr.find('.child-config-select'), relation ? relation.CHILD_CONFIG_ID : '');
            fillColumnSelect(tr.find('.main-column-select'), collectCurrentColumns(), relation ? relation.MAIN_COLUMN_NAME : defaultMainColumn());
            tr.find('.relation-delete').on('click', function () {
                tr.remove();
                syncRelationSort();
            });
            tr.find('.child-config-select').on('change', function () {
                loadChildColumns(tr, '');
            });
            if (relation && relation.CHILD_CONFIG_ID) {
                loadChildColumns(tr, relation.CHILD_COLUMN_NAME);
            }
        });
    }

    function syncRelationSort() {
        $('#relationTable tbody tr').each(function (index) {
            $(this).find('.relation-sort').val(index + 1);
        });
    }

    function loadChildConfigs(callback) {
        if (childConfigs.length > 0) {
            callback();
            return;
        }
        $.ajax({
            url: apiUrl + 'childConfigs.json',
            type: 'POST',
            dataType: 'json',
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                childConfigs = res.rows || [];
                callback();
            },
            error: ajaxError
        });
    }

    function fillChildConfigSelect(select, selected) {
        select.empty().append('<option value="">请选择</option>');
        $.each(childConfigs, function (_, item) {
            $('<option></option>')
                .val(item.ID)
                .text(item.CONFIG_CODE + ' - ' + item.CONFIG_NAME + '（' + item.TABLE_NAME + '）')
                .attr('data-table', item.TABLE_NAME)
                .appendTo(select);
        });
        select.val(selected || '');
    }

    function loadChildColumns(tr, selected) {
        var option = tr.find('.child-config-select option:selected');
        var tableName = option.attr('data-table');
        if (!tableName) {
            tr.find('.child-column-select').empty();
            return;
        }
        $.ajax({
            url: apiUrl + 'columns.json',
            type: 'POST',
            dataType: 'json',
            data: {tableName: tableName},
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                fillColumnSelect(tr.find('.child-column-select'), res.rows || [], selected);
            },
            error: ajaxError
        });
    }

    function fillColumnSelect(select, rows, selected) {
        select.empty().append('<option value="">请选择</option>');
        $.each(rows, function (_, row) {
            var name = row.COLUMN_NAME || '';
            var label = row.COLUMN_LABEL || row.COLUMN_COMMENT || name;
            $('<option></option>').val(name).text(name + ' - ' + label).appendTo(select);
        });
        select.val(selected || '');
    }

    function collectCurrentColumns() {
        var rows = [];
        $('#columnTable tbody tr').each(function () {
            rows.push({
                COLUMN_NAME: $(this).attr('data-column'),
                COLUMN_LABEL: $(this).find('.column-label').val()
            });
        });
        return rows;
    }

    function defaultMainColumn() {
        var columns = collectCurrentColumns();
        for (var i = 0; i < columns.length; i++) {
            if (String(columns[i].COLUMN_NAME).toUpperCase() === 'ID') {
                return columns[i].COLUMN_NAME;
            }
        }
        return '';
    }

    function saveConfig() {
        syncColumnSort();
        syncRelationSort();
        var data = collectFormData();
        var error = validateData(data);
        if (error) {
            layer.alert(error, {icon: 7, title: '提示'});
            return;
        }
        $.ajax({
            url: apiUrl + 'save.json',
            type: 'POST',
            dataType: 'json',
            data: {data: JSON.stringify(data)},
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                layer.close(dialogIndex);
                reloadGrid();
                layer.msg('保存成功');
            },
            error: ajaxError
        });
    }

    function collectFormData() {
        var columns = [];
        $('#columnTable tbody tr').each(function () {
            var tr = $(this);
            columns.push({
                COLUMN_NAME: tr.attr('data-column'),
                COLUMN_LABEL: tr.find('.column-label').val(),
                COLUMN_TYPE: tr.attr('data-type'),
                COLUMN_LENGTH: tr.attr('data-length'),
                EXPORT_FLAG: tr.find('.export-flag').val(),
                SORT_NO: tr.find('.sort-no').val(),
                COLUMN_WIDTH: tr.find('.column-width').val(),
                DISPLAY_FORMAT: tr.find('.display-format').val(),
                DICT_TYPE: tr.find('.dict-type').val()
            });
        });
        var relations = [];
        if ($('#configType').val() === 'MAIN') {
            $('#relationTable tbody tr').each(function () {
                var tr = $(this);
                relations.push({
                    CHILD_CONFIG_ID: tr.find('.child-config-select').val(),
                    MAIN_COLUMN_NAME: tr.find('.main-column-select').val(),
                    CHILD_COLUMN_NAME: tr.find('.child-column-select').val(),
                    SORT_NO: tr.find('.relation-sort').val()
                });
            });
        }
        return {
            config: {
                ID: $('#configId').val(),
                CONFIG_CODE: $('#configCode').val(),
                CONFIG_NAME: $('#configName').val(),
                CONFIG_TYPE: $('#configType').val(),
                TABLE_NAME: $('#tableName').val(),
                TABLE_COMMENT: $('#tableComment').val(),
                STATUS: $('#status').val(),
                REMARK: $('#remark').val()
            },
            columns: columns,
            relations: relations
        };
    }

    function validateData(data) {
        if (!$.trim(data.config.CONFIG_CODE)) {
            return '编码不能为空';
        }
        if (!$.trim(data.config.CONFIG_NAME)) {
            return '名称不能为空';
        }
        if (!$.trim(data.config.TABLE_NAME)) {
            return '请选择数据库表';
        }
        if (data.columns.length === 0) {
            return '字段配置不能为空';
        }
        for (var j = 0; j < data.columns.length; j++) {
            if (data.columns[j].DISPLAY_FORMAT === 'DICT' && !$.trim(data.columns[j].DICT_TYPE)) {
                return '第' + (j + 1) + '行字典类型不能为空';
            }
        }
        if (data.config.CONFIG_TYPE === 'MAIN') {
            for (var i = 0; i < data.relations.length; i++) {
                var item = data.relations[i];
                if (!item.CHILD_CONFIG_ID || !item.MAIN_COLUMN_NAME || !item.CHILD_COLUMN_NAME) {
                    return '关联子表第 ' + (i + 1) + ' 行未填写完整';
                }
            }
        }
        return '';
    }

    function checkConfig() {
        var ids = $('#excelConfigGrid').jqGrid('getGridParam', 'selarrrow');
        if (ids.length !== 1) {
            layer.alert(ids.length === 0 ? '请选择要校验的数据' : '只允许选择一条数据', {icon: 7, title: '提示'});
            return;
        }
        $.ajax({
            url: apiUrl + 'check.json',
            type: 'POST',
            dataType: 'json',
            data: {id: ids[0]},
            success: function (res) {
                if (hasError(res)) {
                    return showError(res);
                }
                var messages = $.map(res.messages || [], function (item) {
                    return escapeHtml(item);
                });
                layer.alert(messages.join('<br>'), {
                    icon: res.ok ? 1 : 7,
                    title: res.ok ? '校验通过' : '校验结果'
                });
            },
            error: ajaxError
        });
    }

    function deleteRows() {
        var ids = $('#excelConfigGrid').jqGrid('getGridParam', 'selarrrow');
        if (ids.length === 0) {
            layer.alert('请选择要删除的数据！', {icon: 7, title: '提示'});
            return;
        }
        layer.confirm('确定删除选中的配置吗？', {icon: 3, title: '确认'}, function (index) {
            $.ajax({
                url: apiUrl + 'delete.json',
                type: 'POST',
                traditional: true,
                dataType: 'json',
                data: {ids: ids.join(',')},
                success: function (res) {
                    if (hasError(res)) {
                        return showError(res);
                    }
                    layer.close(index);
                    reloadGrid();
                    layer.msg('删除成功');
                },
                error: ajaxError
            });
        });
    }

    function updateTypeState() {
        var isMain = $('#configType').val() === 'MAIN';
        $('#relationPanel').toggle(isMain);
        if (!isMain) {
            $('#relationTable tbody').empty();
        }
    }

    function typeName(value) {
        return value === 'MAIN' ? '主表' : value === 'CHILD' ? '子表' : value;
    }

    function statusName(value) {
        return value === '1' ? '启用' : '停用';
    }

    function formatDate(value) {
        if (!value) {
            return '';
        }
        var text = String(value);
        return text.length >= 10 ? text.substring(0, 10) : text;
    }

    function today() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        return d.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
    }

    function hasError(res) {
        return res && res.errorMsg;
    }

    function showError(res) {
        layer.alert(res.errorMsg || '操作失败', {icon: 2, title: '错误'});
    }

    function ajaxError(xhr) {
        layer.alert(xhr.responseText || '请求失败', {icon: 2, title: '错误'});
    }

    function escapeHtml(text) {
        return String(text == null ? '' : text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function escapeAttr(text) {
        return escapeHtml(text);
    }

    $(document).ready(init);
})(window, jQuery);
