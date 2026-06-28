/*
* 模型选择
* url               选择页请求地址
* id                当前表单或视图id
* type              表单还是视图类型
* gridId            jqgrid Id
* dataGridColModel 数据模型
* moduleName       模块名称ID
*/
function ModelSelect(url,id,type,gridId,dataGridColModel,moduleName){
    this.url = url;
    this.id = id;
    this.type = type;
    this.gridId = gridId;
    this.dataGridColModel = dataGridColModel;
    this.moduleName = moduleName;

    this.init.call(this);
}

//初始化
ModelSelect.prototype.init = function (id,type){
    var _self = this;
    var _id = id || _self.id;
    var _type = type || _self.type;

    $('#' + _self.gridId).jqGrid({
        url: _self.url ,
        mtype: 'get',
        postData: {
                    "formOrViewId": _id,
                    "formOrViewType": _type,
                    "moduleName": _self.moduleName
        },
        datatype: "json",
        colModel: _self.dataGridColModel,
        height:286,
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 15	,
        rowList:[200,100,50,30,15],
        styleUI : 'Bootstrap',
        viewrecords: true, //
        autowidth: true,
        multiselect: true,
        multiboxonly:false,
        hasTabExport:false,
        hasColSet:false,
        loadComplete : function(data) {
            _self.formViewBackChecked(_self.type);
            //全选状态
            var allStatus = $('#' + _self.gridId).jqGrid('getGridParam','selarrrow')
            if(allStatus.length == data.rows.length){
                $('#cb_' + _self.gridId).prop('checked','checked');
            }else {
                $('#cb_' + _self.gridId).removeProp('checked');
            }
        },
        onSelectRow: function(rowid,status){
        }
    });
}

/**
 * 获取选中的表
 * @param type
 * @param rowid
 * @param status
 */
ModelSelect.prototype.getSelectedRows = function (type) {
    var _self = this;
    var formDbObj ;
    var viewDbObj ;

    if (type == 'form') {
        var _key = 'form' + _self.id;
        formDbObj = {
            [_key] : $('#' + _self.gridId).jqGrid('getGridParam','selarrrow')
        }
        return formDbObj;
    } else if (type == 'view'){
        var _key = 'view' + _self.id;
        viewDbObj = {
            [_key] : $('#' + _self.gridId).jqGrid('getGridParam','selarrrow')
        }
        return viewDbObj;
    }
}

/**
 * 获取选中的表
 * @param type
 * @param rowid
 * @param status
 */
ModelSelect.prototype.formViewBackChecked = function (type) {
    var _self = this;
    //是否全选
    var isAllCheck = true;
    var allChecked = parent.$("#form").find("iframe")[0].contentWindow.formDataTransferJs.getFormViewDb();
    if ((allChecked[type+'Db']).length > 0) {
        for (var i = 0; i < (allChecked[type+'Db']).length; i++) {
            var rowData = (allChecked[type+'Db'])[i];
            if (rowData[type + _self.id] != undefined) {
                var _arrs = rowData[type + _self.id];
                if (_arrs.length > 0) {
                    for (var j = 0; j < _arrs.length; j++) {
                        $('#' + _self.gridId).setSelection(_arrs[j], true);
                    }
                }
                isAllCheck = false;
            }
        }
    } else {
        $('#cb_' + _self.gridId).click();
    }
    if (isAllCheck && (allChecked[type+'Db']).length > 0) {
        $('#cb_' + _self.gridId).click();
    }
}