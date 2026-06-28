/**
 * 事件列表
 */
function BpmEvent(datagrid, url, searchForm, dataGridColModel,
                        searchDialog,searchMainNames,
                        demoMainDept_KeyWord,type) {
    if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
        throw new Error("datagrid不能为空！");
    }
    this._url = url;
    this.getUrl = function(){
        return this._url;
    };
    this._datagridId = "#" + datagrid;
    this.Toolbardiv = "#t_" + datagrid;
    this.Toolbar = "#toolbar_" + datagrid;
    this._searchDialogId = "#" + searchDialog;
    this.Pagerlbar = "#" + datagrid + "Pager";
    this.searchForm = "#" + searchForm;
    this._keyWordId = "#" + demoMainDept_KeyWord;
    this._searchNames = searchMainNames;
    this.dataGridColModel = dataGridColModel;
    this.type = type
    this.init.call(this);
}
//初始化操作
BpmEvent.prototype.init = function() {
    var _self = this;
    $(_self._datagridId).jqGrid({
        url : this.getUrl() + 'getEventListByPage.json?type='+_self.type,
        mtype : 'POST',
        multiselect : true,
        datatype : "json",
        toolbar : [ true, 'top' ],
        colModel : this.dataGridColModel,
        height : $(window).height() - 115,
        scrollOffset : 10,
        rowNum : 20,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        userDataOnFooter : true,
        pagerpos : 'left',
        styleUI : 'Bootstrap',
        viewrecords : true,
        multiboxonly : true,
        hasTabExport:false, //导出
        hasColSet:false,  //设置显隐
        autowidth : true,
        shrinkToFit : true,
        responsive : true,
        pager : _self.Pagerlbar,
        loadComplete : function() {
        }
    });

    $(_self.Toolbardiv).append($(_self.Toolbar));
    //回车查询
    $(_self._keyWordId).on('keydown',function(e){
        if(e.keyCode === 13){
            _self.searchByKeyWord();
        }
    });
};

//控件校验   规则：表单字段name与rules对象保持一致
BpmEvent.prototype.formValidate = function(form) {
    form.validate({
        rules : {
            name : {
                maxlength : 50,
                required : true
            },
            path : {
                maxlength : 500,
                required : true
            }
        }
    });
};


//重载数据
BpmEvent.prototype.reLoad = function() {
    var searchdata = {
        param : JSON.stringify(serializeObject($(this.searchForm)))
    };
    $(this._datagridId).jqGrid('setGridParam', {
        datatype : 'json',
        postData : searchdata
    }).trigger("reloadGrid");
};
//关闭对话框
BpmEvent.prototype.closeDialog = function(id) {
    if (id == "insert") {
        layer.close(this.insertIndex);
    } else {
        layer.close(this.eidtIndex);
    }
};

//关键字段查询
BpmEvent.prototype.searchByKeyWord = function() {
    var keyWord = $(this._keyWordId).val() == $(this._keyWordId).attr(
        "placeholder") ? "" : $(this._keyWordId).val();
    var names = this._searchNames;

    var param = {};
    for ( var i in names) {
        var name = names[i];
        param[name] = keyWord;
    }
    var searchdata = {
        keyWord : JSON.stringify(param),
        param : null
    };
    $(this._datagridId).jqGrid('setGridParam', {
        datatype : 'json',
        postData : searchdata
    }).trigger("reloadGrid");
};

BpmEvent.prototype.getSeletedRowData = function() {
    var ids = $(this._datagridId).jqGrid('getGridParam', 'selarrrow');
    if (ids.length == 0) {
        layer.alert('请选择要编辑的数据！', {
            icon : 7,
            area : [ '400px', '' ], //宽高
            title:'提示',
            closeBtn : 0
        });
        return false;
    } else if (ids.length > 1) {
        layer.alert('只允许选择一条数据，进行编辑！', {
            icon : 7,
            area : [ '400px', '' ], //宽高
            title:'提示',
            closeBtn : 0
        });
        return false;
    }
    var rowData = $(this._datagridId).jqGrid('getRowData', ids[0]);
    return rowData;
};
