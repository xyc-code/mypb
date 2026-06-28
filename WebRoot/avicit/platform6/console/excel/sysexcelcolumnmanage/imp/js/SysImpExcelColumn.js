/**
 * 创建实例
 * @param datagrid 列表datagrid的id
 * @param url 去后台路径
 * @param form 表单id
 */
function SysImpExcelColumn(datagrid, url, form, data, dataGridColModel) {
    if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
        throw new Error("datagrid不能为空！");
    }
    if (!form || typeof (form) !== 'string' && form.trim() !== '') {
        throw new Error("formId不能为空！");
    }
    var _url = url;
    this.getUrl = function () {
        return _url;
    }
    this._datagridId = "#" + datagrid;
    this._jqgridToolbar = "#t_" + datagrid;
    this._doc = document;
    this._formId = "#" + form;
    this._data = data;
    this._dataGridColModel = dataGridColModel;
    this.lastClickRowIndex = "undefined";//上次点击行索引
    this.comboData = {};
    this.init.call(this);
};
// 初始化操作
SysImpExcelColumn.prototype.init = function () {
    var _self = this;
    $(_self._datagridId).jqGrid({
        url: this.getUrl() + 'getSysImpColumnFiledRessByPage.json',
        mtype: 'POST',
        datatype: "json",
        colModel: this._dataGridColModel,
        postData: this._data,
        height: $(window).height() - 120,//初始化表格高度
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 20,
        rowList: [200, 100, 50, 30, 20, 10],
        altRows: true,
        pagerpos: 'left',
        styleUI: 'Bootstrap',
        viewrecords: true,
        multiselect: true,
        shrinkToFit: true,
        hasTabExport: false,
        loadBeforeSend: function (xhr, settings) {
            if ($("#manageStyle").val() == '2') {
                $("#sysImpColumnFiledResjqGrid").setGridParam().hideCol("columnTitle");
                $("#sysImpColumnFiledResjqGrid").jqGrid('setLabel', 'field', '属性');
                $("#sysImpColumnFiledResjqGrid").setGridParam().hideCol("virtualColumn");
            }
        },
        loadComplete: function (data) {
            var rows = $(this).jqGrid('getRowData');
            if (rows.length > 0) {
                var flag = false;
                for (let i = 0; i < rows.length; i++) {
                    if (_self.lastClickRowIndex == rows[i].id) {
                        flag = true;
                    }
                }
                if (flag) {
                    $(this).setSelection(_self.lastClickRowIndex);
                } else {
                    $(this).setSelection(rows[0].id);
                }
            } else {
                _self.reLoadShowData({});
                _self.resetData(true);
            }
        },
        hasColSet: false,
        responsive: true,//开启自适应
        autowidth: true,
        pager: "#jqGridPager",
        // cellEdit : true,
        multiboxonly: true,
        // cellsubmit : 'clientArray',
        onSelectRow: function (rowid, status) {
            //重置表单
            $(_self._formId).validate().resetForm();
            //获取行数据
            var rowData = $(this).jqGrid('getRowData', rowid);
            //字段类型处理
            rowData.fieldtype = getUnionFieldType(rowData.fieldtype, rowData.vcharlength, rowData.datascale);
            //设置表单数据
            $(_self._formId).form('load', rowData);
            //默认值设置
            _self.setDefaultValue(rowData.defaultValue);
            //初始化数据转换
            initPropertyName($("#convertDto").val(), 'sourceProp', rowData.sourceProp);
            initPropertyName($("#convertDto").val(), 'targetProp', rowData.targetProp);
            //显影控制
            _self.reLoadShowData(rowData);
            _self.lastClickRowIndex = rowid;
        }
    })
};

/**
 * 默认值设置
 * @param value
 */
SysImpExcelColumn.prototype.setDefaultValue = function (value) {
    var _self = this;
    $("#defaultValue").html('');
    _self.initDefaultValueSelect2();
    if (value) {
        var flag = false;
        $("#defaultValue").find('option').each(function () {
            if ($(this).val() == value) {
                $("#defaultValue").val(value).trigger("change");
                flag = true;
            }
        });
        if (! flag) {
            $("#defaultValue").append('<option value="' + value + '" selected>' + value + '</option>').trigger('change.select2');;
        }
    }
}

/**
 * 初始化默认值
 * @returns {jQuery|HTMLElement}
 */
SysImpExcelColumn.prototype.initDefaultValueSelect2 = function() {
    var defaultSelect = $("#defaultValue").select2({
        tags: true,
        maximumInputLength: 10,
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                newOption: true
            }
        },
        allowClear: true,
        placeholder: '请输入默认值',
        width: '100%',
        data: [{id: '', text: '请选择'},{id: 'LOGIN_USER_ID', text: '当前登录人ID'},{id: 'LOGIN_USER_CODE', text: '当前登录人编码'},{id: 'LOGIN_USER_NAME', text: '当前登录人姓名'},{id: 'LOGIN_DEPT_ID', text: '当前登录部门ID'},{id: 'LOGIN_DEPT_CODE', text: '当前登录部门编码'},{id: 'LOGIN_DEPT_NAME', text: '当前登录部门名称'}]
    });
    return defaultSelect;
}

/**
 * 显隐控制
 * @param formData
 */
SysImpExcelColumn.prototype.reLoadShowData = function (formData) {
    var _self = this;
    //虚拟列显隐控制
    if (formData.virtualColumn == 'N') {
        $(".form_commonTable").find("tr :not(:first)").show();
    } else if (formData.virtualColumn == 'Y'){
        $(".form_commonTable").find("tr :not(:first)").hide();
        _self.resetData(false);
        return;
    }
    //字段类型非字符串控制输入类型和默认值显隐
    _self.fieldtypeRelate(formData.fieldtype);

    //输入类型控制格式校验和数据转换方式显隐
    _self.propertyTypeRelate(formData.propertyType);

    //格式校验控制日期显隐和输入类型重置
    _self.checkTypeRelate(formData.checkType);

    //数据转换方式显隐控制和输入类型选择控制
    _self.convertModeRelate(formData.convertMode);

}

/**
 * 数据转换方式显隐控制和输入类型选择控制
 */
SysImpExcelColumn.prototype.convertModeRelate = function (mode) {
    if (mode) {
        if (mode == '1') {
            $('.convertGroup').show();
            $('.serviceGroup').show();
            $('.localGroup').hide();
            $('.convertGroup').find('input').val('');
            $('.localGroup').find('select').find('option[value=""]').prop("selected", true);
        } else if (mode == '0') {
            $('.convertGroup').show();
            $('.serviceGroup').hide();
            $('.serviceGroup').find('input').val('');
        }
        $('#propertyType option:first').prop('selected', 'selected');
        $('.lookupGroup').find("input").val('');
        $('.lookupGroup').hide();
    } else {
        $('.convertMode').find('input').val('');
        $('.convertMode').find('select').find('option[value=""]').prop("selected", true);
        $('.serviceGroup').hide();
        $('.convertGroup').hide();
    }
}

/**
 * 格式校验控制日期显隐和输入类型重置
 */
SysImpExcelColumn.prototype.checkTypeRelate = function (type) {
    if (type) {
        if (type == '3') {
            $('.dateGroup').show();
        } else {
            $('#dateStyle option:first').prop('selected', 'selected');
            $('.dateGroup').hide();
        }
        $('#propertyType option:first').prop('selected', 'selected');
        $('.lookupGroup').find("input").val('');
        $('.lookupGroup').hide();
    } else {
        $('#dateStyle option:first').prop('selected', 'selected');
        $('.dateGroup').hide();
    }
}

/**
 * 字段类型非字符串控制输入类型和默认值显隐
 */
SysImpExcelColumn.prototype.fieldtypeRelate = function (type) {
    if (type && ! (type.indexOf('VARCHAR2') >= 0 || type.indexOf('CLOB') >= 0)) {
        $('#propertyType option:first').prop('selected', 'selected');
        $(".propertyTypeTr").hide();
        $('.lookupGroup').find("input").val('');
        $('.lookupGroup').hide();
        $('#defaultValue option:first').prop('selected', 'selected');
        $(".defaultValueTr").hide();
    } else {
        $(".propertyTypeTr").show();
        $(".defaultValueTr").show();
    }
}

/**
 * 输入类型控制格式校验和数据转换方式显隐
 */
SysImpExcelColumn.prototype.propertyTypeRelate = function (type) {
    if (type && type != '') {
        $('.convertMode').find('input').val('');
        $('.convertMode').find('select').find('option[value=""]').prop("selected", true);
        $('.convertMode').hide();
        $('.checkTypeTr').find('select').find('option[value=""]').prop("selected", true);
        $('.checkTypeTr').hide();
        if (type == '0') {
            $('.lookupGroup').show();
        } else {
            $('.lookupGroup').find("input").val('');
            $('.lookupGroup').hide();
        }
    } else {
        $('.lookupGroup').find("input").val('');
        $('.lookupGroup').hide();
        $('.convertMode:first').show();
        $('.checkTypeTr').show();
    }
}

/**
 * 重置form
 */
SysImpExcelColumn.prototype.resetData = function (cleanHide) {
    $(this._formId).find('input[type=text]').val('');
    if (cleanHide) {
        $(this._formId).find('input[type=hidden]').val('');
    }
    $(this._formId).find('textarea').val('');//对 textarea中内容进行清除
    $(this._formId).find("input[type=checkbox]").attr("checked", false);//对 checkbox中内容进行清除
    // $(this._formId).find("input[type=radio][value='0']").attr("checked", true);//对 radio中内容进行清除
    $(this._formId).find('select').find('option[value=""]').prop("selected", true);
};


//验证
SysImpExcelColumn.prototype.formValidate = function (form) {
    form.validate({
        rules: {
            columnIndex: {
                required: true,
                maxlength: 100
            },
            field: {
                required: true,
                maxlength: 100
            },
            fieldDesc: {
                // required: true,
                maxlength: 100
            }
            /*required: {
                required: true
            },
            keyunique: {
                required: true
            },*/
            /*fieldtype: {
                required: true
            },*/
            /*cellWidth: {
                digits: true,
                min: 1
            }*/
        }
    });
};

/**
 * 添加
 * @param data
 */
SysImpExcelColumn.prototype.save = function (data) {
    var _self = this;
    $.ajax({
        url: this.getUrl() + 'save',
        data: {
            data: JSON.stringify(data),
            manageStyle: $("#manageStyle").val(),
            sheetId: $("#sheetId").val()
        },
        type: 'post',
        dataType: 'json',
        success: function (result) {
            if (result.flag == "success") {
                layer.msg('保存成功！');
                $("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam', {
                    datatype: 'json',
                    postData: this._data
                }).trigger("reloadGrid");
            } else {
                layer.msg(result.error);
            }
        }
    });
};

/**
 * 批量添加
 */
SysImpExcelColumn.prototype.batchAdd = function () {
    var _self = this;
    var selectDialog = openDialog({
        type : 'selectWindow',
        title : "批量添加属性",
        url : "avicit/platform6/console/excel/common/SysExcelBatchAddSelect.jsp?sheetId=" + $("#sheetId").val(),
        width : "900px",
        height : "460px",
        opentype : 2,
        shade : true,
        submit : function(index, layer1) {
            var iframeWin = layer1.find('iframe')[0].contentWindow;
            var data = iframeWin.getColList();
            if (data.length > 0) {
                avicAjax.ajax({
                    url: _self.getUrl() + 'batchAdd/insertDtos',
                    data: {
                        rows: JSON.stringify(data),
                        sheetId: $("#sheetId").val()
                    },
                    type: 'post',
                    dataType: 'json',
                    success: function (r) {
                        if (r.flag == "success") {
                            $("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam', {
                                datatype: 'json',
                                postData: {
                                    'excelId': $("#sheetId").val()
                                }
                            }).trigger("reloadGrid");
                            layer.msg(r.msg, { icon: 6, time: 3000});
                        } else {
                            layer.alert(r.error, {
                                    icon: 7,
                                    area: ['400px', ''],
                                    closeBtn: 0,
                                    btn: ['关闭'],
                                    title: "提示"
                                }
                            );
                        }
                    }
                });
            }
        },
        beferClose: function(index, layer){

        },
        init : function(index, layer) {
            var iframeWin = layer.find('iframe')[0].contentWindow;
            iframeWin.init();
        }
    });
}

/**
 * 启用遮罩
 */
function doShowLoading(msg){
    return top.layer.msg(msg, {icon: 16,shade: [0.3, '#000000'],scrollbar: false, time:100000}) ;//弹出遮罩
}

/**
 * 隐藏遮罩
 */
function doHideLoading(handle){
    top.layer.close(handle);
}