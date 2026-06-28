/**
 * 单表附件
 *
 * @param Jqgrid
 * @param url
 * @param searchDialogId
 * @param form
 * @param keyWordId
 * @param searchNames
 * @param dataGridColModel
 */
function SysExcelRecord(datagrid, url, form, dataGridColModel, templateCode) {
    if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
        throw new Error("datagrid不能为空！");
    }
    var _url = url;
    this.getUrl = function() {
        return _url;
    }
    this._datagridId = "#" + datagrid;
    this._jqgridToolbar = "#t_" + datagrid;
    this._doc = document;
    this._formId = "#" + form;
    this.dataGridColModel = dataGridColModel;
    this._templateCode = templateCode;
    this.init.call(this);
};
// 初始化操作
SysExcelRecord.prototype.init = function() {
    var _self = this;
    $(_self._datagridId).jqGrid({
        url : this.getUrl() + 'getSysExcelRecordsByPage',
        postData : {param: JSON.stringify({"templateCode": this._templateCode})},
        mtype : 'POST',
        datatype : "json",
        toolbar : [ true, 'top' ],
        colModel : this.dataGridColModel,
        height : $(window).height() - 120,
        scrollOffset : 20, // 设置垂直滚动条宽度
        rowNum : 10,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        hasTabExport:false,
        hasColSet:false,
        viewrecords : true,
        styleUI : 'Bootstrap',
        multiselect : true,
        responsive : true,// 开启自适应
        pager : "#logPager",
        autowidth : true,
        multiboxonly : true,
        onSelectRow : onSelectRow
        // js方法
    });

};

// 单选
function onSelectRow() {
    var type_id = $("#dgSysExcelRecord").jqGrid('getGridParam', 'selarrrow');
    $("#dgSysExcelError").jqGrid('setGridParam', {
        datatype : 'json',
        postData :
            {param:
                    type_id.length == 0 ? "" : JSON.stringify({"sysExcelRecordId": type_id[0]})},
    }).trigger("reloadGrid");

};
/**
 * 重载数据
 */
SysExcelRecord.prototype.reLoad = function () {
    $("#dgSysExcelRecord").jqGrid('setGridParam').trigger("reloadGrid");
};