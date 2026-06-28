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
function SysExcelError(datagrid, url, dataGridColModel) {
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
    this.dataGridColModel = dataGridColModel;
    this.init.call(this);
};
// 初始化操作
SysExcelError.prototype.init = function() {
    var _self = this;
    $(_self._datagridId).jqGrid({
        url : this.getUrl() + 'searchSysExcelError',
        mtype : 'POST',
        datatype : "json",
        toolbar : [ true, 'top' ],
        colModel : this.dataGridColModel,
        height : $(window).height() - 120,
        scrollOffset : 20, // 设置垂直滚动条宽度
        rowNum : 10,
        sortable : true,
        sortname : 'errorRowNo',
        sortorder : 'asc',
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        hasTabExport:false,
        hasColSet:false,
        viewrecords : true,
        styleUI : 'Bootstrap',
        multiselect : true,
        responsive : true,// 开启自适应
        pager : "#errorMsgPager",
        autowidth : true,
        multiboxonly : true
    });

};
/**
 * 重载数据
 */
SysExcelError.prototype.reLoad = function () {
    this._datagrid.datagrid('load', {param: JSON.stringify(serializeObject(this.searchForm))});
};