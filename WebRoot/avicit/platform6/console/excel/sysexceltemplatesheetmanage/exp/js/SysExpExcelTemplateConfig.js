/**
 * 创建实例
 * @param datagrid 列表datagrid的id
 * @param url 去后台路径
 * @param form 表单id
 */
function SysExpExcelTemplateConfig(datagrid, url, form, data, dataGridColModel) {
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
SysExpExcelTemplateConfig.prototype.init = function () {
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
        hasColSet: false,
        responsive: true,//开启自适应
        autowidth: true,
        pager: "#jqGridPager",
        multiboxonly: true,
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
                $("#saveButton").removeAttr("disabled");
            } else {
                $("#saveButton").attr("disabled","disabled");
            }

        },
        onSelectRow: function (rowid, status) {
            var rowData = $(this).jqGrid('getRowData', rowid);
            $(_self._formId).form('load', rowData);
            $("#fieldtype option").removeAttr("selected");
            $('#fieldtype').find('option[value="' + rowData.fieldtype + '"]').prop("selected", true);
            $("#showFlag option").removeAttr("selected");
            $('#showFlag').find('option[value="' + rowData.showFlag + '"]').prop("selected", true);
            $("#dateStyle option").removeAttr("selected");
            if(rowData.fieldtype == "DATE"){
                $(".dateGroup").show();
                $('#dateStyle').find('option[value="' + rowData.dateStyle + '"]').prop("selected", true);
            }else{
                $(".dateGroup").hide();
            }
            _self.lastClickRowIndex = rowid;
        }
    })
};

/**
 * 重置form
 */
SysExpExcelTemplateConfig.prototype.resetData = function () {
    $(this._formId).find('input[type=text]').val('');
    $(this._formId).find('input[type=hidden]').val('');
    $(this._formId).find('textarea').val('');//对 textarea中内容进行清除
    $(this._formId).find("input[type=checkbox]").attr("checked", false);//对 checkbox中内容进行清除
    // $(this._formId).find("input[type=radio][value='0']").attr("checked", true);//对 radio中内容进行清除
    $(this._formId).find('select').find('option[value=""]').prop("selected", true);
};

/**
 *  跳转到添加页面
 * @param id
 */
SysExpExcelTemplateConfig.prototype.toBatchAdd = function(id) {
    this.insertIndex = layer.open({
        type : 2,
        area : [ '70%', '80%' ],
        title : '添加',
        skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin : false, // 开启最大化最小化按钮
        content : 'platform6/msystem/excel/column/sysExcelColumnController/operation/toBatchAdd/'+id,
        btn: ['确定', '取消'],
        yes: function(index, layero){
            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
            var rows = iframeWin.getSelectRows();
            if (rows.length > 0) {
                //保存选中的列数据
                $.ajax({
                    url: 'platform6/msystem/excel/column/sysExcelColumnController/operation/saveSysExpColumnFiledRes',
                    data: {
                        data: JSON.stringify(rows),
                        sheetId: id
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
            }
            layer.close(index);//查询框关闭
        },
        btn2: function(index, layero){
            layer.close(index);//查询框关闭
            return false;
        },
    });
}


//验证
SysExpExcelTemplateConfig.prototype.formValidate = function (form) {
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
                required: true,
                maxlength: 100
            },
            /*required: {
                required: true
            },
            keyunique: {
                required: true
            },*/
            /*fieldtype: {
                required: true
            },*/
            cellWidth: {
                digits: true,
                min: 1
            }
        }
    });
};

/**
 * 添加
 * @param data
 */
SysExpExcelTemplateConfig.prototype.save = function (data) {
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
                _self.resetData();//重置所有数据
            } else {
                layer.msg(result.error);
            }
        }
    });
};
/**
 * 批量添加
 */
SysExpExcelTemplateConfig.prototype.batchAdd = function (data) {
    var _self = this;
    layer.confirm('您确定要批量添加当前实体类的所有属性吗？', {icon: 3, title: "提示", area: ['400px', '']}, function (index) {
        avicAjax.ajax({
            url: _self.getUrl() + 'batchAdd',
            data: {
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
                    _self.resetData();//重置所有数据
                    layer.alert(r.msg, {
                            icon: 7,
                            area: ['400px', ''],
                            closeBtn: 0,
                            btn: ['关闭'],
                            title: "提示"
                        }
                    );
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
        layer.close(index);
    });
};

SysExpExcelTemplateConfig.prototype.del = function () {
    var _self = this;
    var rows = $(_self._datagridId).jqGrid('getGridParam','selarrrow');
    var ids = [];
    var delIds = [];
    var l =rows.length;
    if(l > 0){
        layer.confirm('确认要删除选中的数据吗?', {
            icon: 3,
            title:"提示",
            area: ['400px', '']
        }, function(index){
            for(;l--;){
                ids.push(rows[l]);
            }
            avicAjax.ajax({
                url:_self.getUrl()+'delete',
                data:	JSON.stringify(ids),
                contentType : 'application/json',
                type : 'post',
                dataType : 'json',
                success : function(r){
                    if (r.flag == "success") {
                        $("#sysImpColumnFiledResjqGrid").trigger("reloadGrid");
                        _self.resetData();//重置所有数据
                    }else{
                        layer.alert('删除失败,请联系管理员!', {
                                icon: 7,
                                area: ['400px', ''],
                                closeBtn: 0,
                                btn: ['关闭'],
                                title:"提示"
                            }
                        );
                    }
                }
            });
            layer.close(index);
        });
    }else{
        layer.alert('请选择要删除的数据！', {
                icon: 7,
                area: ['400px', ''], //宽高
                closeBtn: 0,
                btn: ['关闭'],
                title:"提示"
            }
        );
    }
};