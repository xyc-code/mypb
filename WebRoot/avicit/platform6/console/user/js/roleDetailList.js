/**
 * 初始化对象
 * @param datagrid 表格Id
 * @param url URL参数
 * @param searchDialogId 高级查询Id
 * @param form 高级查询formId
 * @param keyWordId 关键字查询框Id
 * @param searchNames 关键字查询项名称Array
 * @param dataGridColModel 表格列属性Array
 */
function roleDetailList(datagrid, url, dataGridColModel, userId) {
    if (!datagrid || typeof(datagrid) !== 'string' && datagrid.trim() !== '') {
        throw new Error("datagrid不能为空！");
    }
    var _url = url;
    this.getUrl = function () {
        return _url;
    };
    this.userId = userId;
    this._$grid;
    this._datagridId = "#" + datagrid;
    this._jqgridToolbar = "#t_" + datagrid;
    this._doc = document;
    this.notnullFiled = ["sysRoleId", "roleName", "roleType", "validFlag"];//非空字段
    this.notnullFiledComment = ["角色ID", "角色名称", "角色类型", "角色标识"]; //非空字段注释
    //除时间,数字等类型长度校验字段
    this.lengthValidFiled = [];
    //除时间,数字等类型长度校验字段注释
    this.lengthValidFiledComment = [];
    //
    this.lengthValidFiledSize = [50, 50, 50, 50, 50, 5];
    this.dataGridColModel = dataGridColModel;
    this.currentRowId = '';
    this.init.call(this);
}
/**
 * 初始化操作
 */
roleDetailList.prototype.init = function () {
    var _self = this;
    _self._$grid = $(_self._datagridId).jqGrid({
        url: this.getUrl(),
        mtype: 'POST',
        datatype: "json",
        toolbar: [false, 'top'],//启用toolbar
        colModel: this.dataGridColModel,//表格列的属性
        height: $(window).height() - 120,//初始化表格高度
        scrollOffset: 20, //设置垂直滚动条宽度
        altRows: true,//斑马线
        styleUI: 'Bootstrap', //Bootstrap风格
        viewrecords: true, //是否要显示总记录数
        multiselect: false,//可多选
        autowidth: true,//列宽度自适应
        responsive: true//开启自适应
    });
};








