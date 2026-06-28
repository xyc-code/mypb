/**
 * flowDataTransferJs.js
 */
/**
 * treeUrl :获取树url
 * treeId  :获取树容器id
 * gridId  :获取jqgrid容器id
 * @constructor
 */
function FormDataTransferJs(treeUrl,gridUrl,treeId,gridId,gridSelectedId){

    /*
    * 选中的表单标题
     */
    this.formTitle = '已选表单（';
    /*
    * 选中的表单标题
     */
    this.formTitle = '已选表单（';
    /*
    * 选中的视图标题
     */
    this.viewTitle = '已选视图（';
    /*
    * 获取树url
     */
    this.treeUrl = treeUrl;
    /*
    * 获取grid url
     */
    this.gridUrl = gridUrl;
    /*
    * 获取树id
     */
    this.treeId = treeId;
    /*
    * 获取jqgrid id
     */
    this.gridId = gridId;
    /*
    * 获取jqgrid id
     */
    this.gridIdView = "preViewDataJqgrid";
    /*
    * 获取jqgrid selected id
     */
    this.gridSelectedId = gridSelectedId;
    /*
    * 获取jqgridView selected id
     */
    this.gridViewSelectedId = "jqGridViewSelected" ;
    /*
    * 当前选中节点id
     */
    this.selectedNodeId;
    /*
    * 当前选中节点name
     */
    this.selectedNodeName;
    /*
    * 当前选中节点父级id
     */
    this.selectedNodePId;
    /*
    * 查询ID
     */
    this.searchId = "#search_model";
    /*
    * 查询ID
     */
    this.searchBtnId = "#searchBtn_model";
    /*
    * 表单查询ID
     */
    this.searchGridId = "#search_form";
    /*
    * 表单查询ID
     */
    this.searchGridBtnId = "#searchBtn_form";
    /*
    * 视图查询ID
     */
    this.searchViewGridId = "#search_view";
    /*
    * 视图查询ID
     */
    this.searchViewGridBtnId = "#searchBtn_view";
    /*
    * 表单查询条件
     */
    this.searchNames ;
    /*
    * 视图查询条件
     */
    this.searchViewNames ;
    /*
    * 是否需要初始化根节点
     */
    this.initRootFlg = false;
    /*
    * 流程模型
     */
    this.formModel ;

    /**
     * grid
     */
    this.pageId = 'preFormDataJqgridPager';
    this.Pagerlbar = '#preFormDataJqgridPager';

    /*
    *调用初始化方法
     */
    this.initTree.call(this);
}

/**
 * 初始化Tree
 */
FormDataTransferJs.prototype.initTree = function (){
    var _self = this;
    var setting = {
        async: {
            enable: true,
            //url: "platform/eform/bpmsManageController/getEformTypeTree",//异步请求树子节点url
            url: "sysDataTransfer/formModelTransferController/getEformTypeTree",//异步请求树子节点url
            autoParam: ["id"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "pId"
            }
        },
        view:{
            selectedMulti: false//进制按住ctrl多选
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                var _type = treeNode.type;
                _self.selectedNodeName = treeNode.name;
                _self.selectedNodeId = treeNode.id;
                if(_type == 'module'){//点击的是模块
                    $("#preCheckAll").removeAttr("checked");
                    $("#preCheckViewAll").removeAttr("checked");
                    _self.getFormList(treeNode.id);
                    _self.getViewList(treeNode.id);
                }

            }
        }
    };

    //手动请求根节点数据
    $.ajax({
        //url: "platform/eform/bpmsManageController/getEformTypeTree",
        url: "sysDataTransfer/formModelTransferController/getEformTypeTree",
        data: "id=-1",
        type: "post",
        async: false,
        dataType: "json",
        success: function (backData) {
            var zNodes = backData;
            _self.tree = $.fn.zTree.init($("#" + _self.treeId), setting, zNodes);
            //模拟点击第一个节点
            _self.clickFirstRootNode();

        }
    });
}

/**
 * 初始化jqgrid
 */
FormDataTransferJs.prototype.initJqgrid = function (){
    var _self = this;

}

/**
 * 获取表单列表
 */
FormDataTransferJs.prototype.getFormList = function (selectedNodeId){
    var _self = this;
    var searchSubNames = [];
    var searchSubTips = [];
    searchSubNames.push("name");
    searchSubTips.push("表单名称");
    $('#search_flow').attr('placeholder', '请输入' + searchSubTips[0]);
    var formDataGridColModel =
        [
            {
                "label": "id",
                "name": "id",
                "key": true,
                "hidden": true
            },{
            "label": "type",
            "name": "type",
            "hidden": true
        },{
            "label": "code",
            "name": "code",
            "hidden": true
        },{
            "label": "eformComponentId",
            "name": "eformComponentId",
            "hidden": true
        },{
            "label": "orderBy",
            "name": "orderBy",
            "hidden": true
            },
            {
                "label": "表单名称",
                "name": "name",
                "width": 25,
                "align": "left",
                "sortable": false,
                formatter : function(cellvalue, options, rowObject) {
                    if (rowObject.type == 'bpmFormsImpl') {
                        return cellvalue + " (非电子表单)";
                    } else {
                        return cellvalue;
                    }
                }
            },
            {
                "label": "最后更新时间：",
                "name": "lastUpdateDate",
                "width": 25,
                "align": "right",
                "sortable": false,
                formatter : function(cellvalue, options, rowObject) {
                    return _self.timestampToTime(cellvalue);
                }
            }
        ];
    var url = _self.gridUrl;

    if (isInitGrid == false) {
        isInitGrid = true;
        //初始化待选区域
        _self.initFormData(formDataGridColModel, selectedNodeId,searchSubNames, _self.searchGridId);
        //初始化选中区域
        _self.initJqgridSelected();
    } else {
        $("#nodata").hide();
        $("#table").show();

        var searchdata = {
            nodeId : selectedNodeId
        };

        $('#' + _self.gridId).jqGrid('setGridParam', {
            datatype : 'json',
            postData : searchdata
        }).trigger("reloadGrid");
    }
}

/**
 * 获取视图列表
 */
FormDataTransferJs.prototype.getViewList = function (selectedNodeId){
    var _self = this;
    var searchSubNames = [];
    var searchSubTips = [];
    searchSubNames.push("name");
    searchSubTips.push("视图名称");
    $('#search_flow').attr('placeholder', '请输入' + searchSubTips[0]);
    var viewDataGridColModel =
        [
            {
                "label": "id",
                "name": "id",
                "key": true,
                "hidden": true
            },{
            "label": "type",
            "name": "type",
            "hidden": true
        },{
            "label": "code",
            "name": "code",
            "hidden": true
        },{
            "label": "eformComponentId",
            "name": "eformComponentId",
            "hidden": true
        },{
            "label": "orderBy",
            "name": "orderBy",
            "hidden": true
            },{
                "label": "视图名称",
                "name": "name",
                "width": 25,
                "align": "left",
                "sortable": false
            },{
                "label": "最后更新时间",
                "name": "lastUpdateDate",
                "width": 25,
                "align": "right",
                "sortable": false,
                formatter : function(cellvalue, options, rowObject) {
                    return _self.timestampToTime(cellvalue);
                }
            }
        ];
    var url = _self.gridUrl;

    if (isInitViewGrid == false) {
        isInitViewGrid = true;
        //初始化待选区域
        _self.initViewData(viewDataGridColModel, selectedNodeId,searchSubNames, _self.searchGridId);
        //初始化选中区域
        _self.initViewJqgridSelected();
    } else {
        $("#nodataview").hide();
        $("#tableview").show();

        var searchdata = {
            nodeId : selectedNodeId
        };

        $('#' + _self.gridIdView).jqGrid('setGridParam', {
            datatype : 'json',
            postData : searchdata
        }).trigger("reloadGrid");
    }
}

/**
 * 模拟点击第一个根节点
 */
FormDataTransferJs.prototype.clickFirstRootNode = function (){
    var _self = this;
    var treeObj = $.fn.zTree.getZTreeObj(_self.treeId);
    var node = treeObj.getNodes();
    var nodes = treeObj.transformToArray(node);
    var firstNode = nodes[1];
    if(firstNode == undefined){
        return;
    }
    _self.selectedNodeName = firstNode.name;
    var switchId = firstNode.tId + "_a";
    //模拟点击一级菜单
    $('#' + switchId).click();
}

/**
 * 初始化候选区
 */
FormDataTransferJs.prototype.initFormData = function (dataGridColModel, nodeId, searchSubNames, keyWord){
    var _self = this;
    _self.searchNames = searchSubNames;
    //解决切换树节点不刷新表格问题
    var url = _self.gridUrl;
    $('#' + _self.gridId).jqGrid({
        url : url,
        postData : {
            nodeId : nodeId,
            type: 'form'
        },
        mtype : 'POST',
        datatype : "json",
        colModel : dataGridColModel,
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : (document.documentElement.clientHeight - 20)/2 -60,
        scrollOffset : 1000, //设置垂直滚动条宽度
        rowNum : 10000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        gridComplete: function(){
            //判断当前数据是否已经被选中
            setTimeout(function() {
                var gridIds = $('#' + _self.gridId).jqGrid('getDataIDs');
                var gridSelectedIds = $('#' + _self.gridSelectedId).jqGrid('getDataIDs');
                if (gridIds.length !== 0 && gridSelectedIds.length !== 0) {
                    $.each(gridIds, function (index, gridId) {
                        $.each(gridSelectedIds, function (i, gridSelectedId) {
                            if (gridSelectedId === gridId) {
                                $('#' + _self.gridId).setSelection(gridId, true);
                            }
                        })
                    })
                }
            },100);
        },
        loadComplete : function(data) {
            $('#t_' + _self.gridId).hide();
            $('#' + _self.gridId).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
            $('#' + _self.gridId).jqGrid('getColumnByUserIdAndTableName');

            // 没有数据，显示无数据图片
            var datas = data.rows;
            if (datas.length == 0) {
                $("#nodata").show();
                $("#table").hide();
            }
        },
        beforeRequest : function() {
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
        },
        onSelectAll:function (aRowids,status){},
        onSelectRow:function (rowId,status){
            var gDatas = $('#' + _self.gridId).jqGrid('getRowData',rowId);
            _self.formListSelector(gDatas,status);
            checkedUpdate(_self.gridId,"preCheckAll");
            //删除已选的表
            if(!status){
                var _formDb = _self.getFormViewDb().formDb;
                for (var i = 0; i < _formDb.length; i++) {
                    if(_formDb[i]["form"+rowId] != undefined){
                        _formDb.splice(i,1)
                    }
                }
            }
        },
        beforeSelectRow: function (rowid, e) {
            //禁止单击行选中
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow:function (rowid,iRow,iCol,e){},
        viewrecords : true,
        styleUI : 'Bootstrap',
        multiselect :true,
        autowidth : true,
        shrinkToFit : true,
        //开启自适应
        responsive : true,
        hasTabExport:false,
        hasColSet:false
    });
    $('.date-picker').datepicker({
        beforeShow : function() {
            setTimeout(function() {
                $('#ui-datepicker-div').css("z-index", 99999999);
            }, 100);
        }
    });
    $('.time-picker').datetimepicker({
        oneLine : true, //单行显示时分秒
        closeText : '确定', //关闭按钮文案
        showButtonPanel : true, //是否展示功能按钮面板
        showSecond : false, //是否可以选择秒，默认否
        beforeShow : function(selectedDate) {
            if ($('#' + selectedDate.id).val() == "") {
                $(this).datetimepicker("setDate", new Date());
                $('#' + selectedDate.id).val('');
            }
            setTimeout(function() {
                $('#ui-datepicker-div').css("z-index", 99999999);
            }, 100);
        }
    });
    //关键字查询
    $(_self.searchGridBtnId).on('click', function(e) {
        _self.searchByKeyWord('form');
    });
    $(_self.searchGridId).on('keydown', function(e) {
        if (e.keyCode == '13') {
            _self.searchByKeyWord('form');
        }
    });
}

/**
 * 初始化视图候选区
 */
FormDataTransferJs.prototype.initViewData = function (dataGridColModel, nodeId, searchSubNames, keyWord){
    var _self = this;
    //解决切换树节点不刷新表格问题
    var url = 'sysDataTransfer/formModelTransferController/getFormViewByComId';
    $('#' + _self.gridIdView).jqGrid({
        url : url,
        postData : {
            nodeId : nodeId,
            type: 'view'
        },
        mtype : 'POST',
        datatype : "json",
        colModel : dataGridColModel,
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : (document.documentElement.clientHeight - 20)/2 -60,
        scrollOffset : 1000, //设置垂直滚动条宽度
        rowNum : 10000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        gridComplete: function(){
            //判断当前数据是否已经被选中
            setTimeout(function() {
                var gridIds = $('#' + _self.gridIdView).jqGrid('getDataIDs');
                var gridSelectedIds = $('#' + _self.gridViewSelectedId).jqGrid('getDataIDs');
                if (gridIds.length !== 0 && gridSelectedIds.length !== 0) {
                    $.each(gridIds, function (index, gridId) {
                        $.each(gridSelectedIds, function (i, gridSelectedId) {
                            if (gridSelectedId === gridId) {
                                $('#' + _self.gridIdView).setSelection(gridId, true);
                            }
                        })
                    })
                }
            },100);
        },
        loadComplete : function(data) {
            $('#t_' + _self.gridIdView).hide();
            $('#' + _self.gridIdView).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
            $('#' + _self.gridIdView).jqGrid('getColumnByUserIdAndTableName');

            // 没有数据，显示无数据图片
            var datas = data.rows;
            if (datas.length == 0) {
                $("#nodataview").show();
                $("#tableview").hide();
            }
        },
        beforeRequest : function() {
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
        },
        onSelectAll:function (aRowids,status){},
        onSelectRow:function (rowId,status){
            var gDatas = $('#' + _self.gridIdView).jqGrid('getRowData',rowId);
            _self.viewListSelector(gDatas,status);
            checkedUpdate(_self.gridIdView,"preCheckViewAll");
            //删除已选的表
            if(!status){
                var _viewDb = _self.getFormViewDb().viewDb;
                for (var i = 0; i < _viewDb.length; i++) {
                    if(_viewDb[i]["form"+rowId] != undefined){
                        _viewDb.splice(i,1)
                    }
                }
            }
        },
        beforeSelectRow: function (rowid, e) {
            //禁止单击行选中
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow:function (rowid,iRow,iCol,e){},
        viewrecords : true,
        styleUI : 'Bootstrap',
        multiselect :true,
        autowidth : true,
        shrinkToFit : true,
        //开启自适应
        responsive : true,
        hasTabExport:false,
        hasColSet:false
    });
    $('.date-picker').datepicker({
        beforeShow : function() {
            setTimeout(function() {
                $('#ui-datepicker-div').css("z-index", 99999999);
            }, 100);
        }
    });
    $('.time-picker').datetimepicker({
        oneLine : true, //单行显示时分秒
        closeText : '确定', //关闭按钮文案
        showButtonPanel : true, //是否展示功能按钮面板
        showSecond : false, //是否可以选择秒，默认否
        beforeShow : function(selectedDate) {
            if ($('#' + selectedDate.id).val() == "") {
                $(this).datetimepicker("setDate", new Date());
                $('#' + selectedDate.id).val('');
            }
            setTimeout(function() {
                $('#ui-datepicker-div').css("z-index", 99999999);
            }, 100);
        }
    });
    //关键字查询
    $(_self.searchViewGridBtnId).on('click', function(e) {
        _self.searchByKeyWord('view');
    });
    $(_self.searchViewGridId).on('keydown', function(e) {
        if (e.keyCode == '13') {
            _self.searchByKeyWord('view');
        }
    });
}

/**
 * 表单候选区全选
 */
FormDataTransferJs.prototype.checkAllFormList = function(obj){
    var _self = this;
    var checkAllObj = obj;
    var isCheckAll = checkAllObj.prop("checked");
    var jqGrid = $("#" + _self.gridId);
    //拿到所有行id
    var jqGridIDs = jqGrid.getDataIDs();
    //拿到所有选中行id
    var jqGridRowid = jqGrid.jqGrid("getGridParam","selarrrow");
    //遍历删除所有行id中选中行id
    for(var i = 0; i < jqGridIDs.length; i++) {
        if(-1 != jqGridRowid.indexOf(jqGridIDs[i])) {
            jqGridIDs.splice(i, 1);
            i--;
        }
    }
    //遍历所有行id，设置选中
    if (isCheckAll) {
        var index = layer.load(1,{shade:0.3});
        setTimeout(function () {
            for (var i = 0; i < jqGridIDs.length; i++) {
                jqGrid.setSelection(jqGridIDs [i], true);
            }
            layer.close(index);
        }, 1);
    } else {
        jqGrid.jqGrid('resetSelection');
        var ids = $('#' + _self.gridId).jqGrid('getDataIDs');
        $.each(ids,function(index,id){
            $('#' + _self.gridSelectedId).jqGrid('delRowData',id);
        })
    }
    _self.updateSumNumber(true);
}

/**
 * 表单已选区全选
 */
FormDataTransferJs.prototype.checkedAllFormList = function(obj){
    var _self = this;
    var checkAllObj = obj;
    var isCheckAll = checkAllObj.prop("checked");
    var jqGrid = $("#" + _self.gridSelectedId);
    //拿到所有行id
    var jqGridIDs = jqGrid.getDataIDs();
    //拿到所有选中行id
    var jqGridRowid = jqGrid.jqGrid("getGridParam","selarrrow");
    //遍历删除所有行id中选中行id
    for(var i = 0; i < jqGridIDs.length; i++) {
        if(-1 != jqGridRowid.indexOf(jqGridIDs[i])) {
            jqGridIDs.splice(i, 1);
            i--;
        }
    }
    //遍历所有行id，设置选中
    if (isCheckAll) {
        for (var i = 0; i < jqGridIDs.length; i++) {
            jqGrid.setSelection(jqGridIDs [i], true);
        }
    } else {
        jqGrid.jqGrid('resetSelection');
    }
    _self.updateSumNumber(true);
}

/**
 * 视图候选区全选
 */
FormDataTransferJs.prototype.checkAllViewList = function(obj){
    var _self = this;
    var checkAllObj = obj;
    var isCheckAll = checkAllObj.prop("checked");
    var jqGrid = $("#" + _self.gridIdView);
    //拿到所有行id
    var jqGridIDs = jqGrid.getDataIDs();
    //拿到所有选中行id
    var jqGridRowid = jqGrid.jqGrid("getGridParam","selarrrow");
    //遍历删除所有行id中选中行id
    for(var i = 0; i < jqGridIDs.length; i++) {
        if(-1 != jqGridRowid.indexOf(jqGridIDs[i])) {
            jqGridIDs.splice(i, 1);
            i--;
        }
    }
    //遍历所有行id，设置选中
    if (isCheckAll) {
        var index = layer.load(1,{shade:0.3});
        setTimeout(function () {
            for (var i = 0; i < jqGridIDs.length; i++) {
                jqGrid.setSelection(jqGridIDs [i], true);
            }
            layer.close(index);
        }, 1);
    } else {
        jqGrid.jqGrid('resetSelection');
        var ids = $('#' + _self.gridIdView).jqGrid('getDataIDs');
        $.each(ids,function(index,id){
            $('#' + _self.gridViewSelectedId).jqGrid('delRowData',id);
        })
    }
    _self.updateSumNumber(false);
}

/**
 * 视图已选区全选
 */
FormDataTransferJs.prototype.checkedAllViewList = function(obj){
    var _self = this;
    var checkAllObj = obj;
    var isCheckAll = checkAllObj.prop("checked");
    var jqGrid = $("#" + _self.gridViewSelectedId);
    //拿到所有行id
    var jqGridIDs = jqGrid.getDataIDs();
    //拿到所有选中行id
    var jqGridRowid = jqGrid.jqGrid("getGridParam","selarrrow");
    //遍历删除所有行id中选中行id
    for(var i = 0; i < jqGridIDs.length; i++) {
        if(-1 != jqGridRowid.indexOf(jqGridIDs[i])) {
            jqGridIDs.splice(i, 1);
            i--;
        }
    }
    //遍历所有行id，设置选中
    if (isCheckAll) {
        for (var i = 0; i < jqGridIDs.length; i++) {
            jqGrid.setSelection(jqGridIDs [i], true);
        }
    } else {
        jqGrid.jqGrid('resetSelection');
    }
   _self.updateSumNumber(false);
}

/**
 * 调用删除或添加项到已选区
 * @param obj
 * @param status
 */
FormDataTransferJs.prototype.formListSelector = function(obj,status) {
    var _self = this;
    if(status){
        _self.addSelector(obj);
    }else{
        _self.removeSelector(obj);
    }
    _self.updateSumNumber(true);
}


/**
 * 调用删除或添加项到已选区
 * @param obj
 * @param status
 */
FormDataTransferJs.prototype.viewListSelector = function(obj,status) {
    var _self = this;
    if(status){
        /*if(obj.name != '' && obj.name != null && obj.name != undefined){
            obj.name = (obj.name).substr(0,((obj.name).indexOf('<')));
        }*/
        _self.addViewSelector(obj);
    }else{
        _self.removeViewSelector(obj);
    }
    _self.updateSumNumber(false);
}

/**
 * 已选区添加数据
 * @param obj
 */
FormDataTransferJs.prototype.addSelector = function(obj) {
    var _self = this;
    //已存在时不再添加
    var isExits = $('#' + _self.gridSelectedId).jqGrid('getRowData', obj.id);
    if(isExits.id == undefined){
        _self.formCount ++
        // 获取对应存储个数
        obj.orderBy = _self.getDbCount(obj.id, "form");
        $('#' + _self.gridSelectedId).jqGrid('addRowData', obj.id, obj, 'first');
        _self.updateSumNumber(true);
    }

}

/**
 * 获取对应存储个数
 * @param id
 * @param type
 * @returns {number}
 */
FormDataTransferJs.prototype.getDbCount = function(id, type) {
    var count = 0;
    avicAjax.ajax({
        cache: true,
        type: "post",
        url: "sysDataTransfer/formModelTransferController/getDbCount",
        dataType:"json",
        data:{
            id : id,
            type : type
        },
        async: false,
        error: function(request) {
            throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
        },
        success: function(data) {
            count = data;
        }
    });
    return count;
}
/**
 * 已选区添加数据
 * @param obj
 */
FormDataTransferJs.prototype.addViewSelector = function(obj) {
    var _self = this;
    //已存在时不再添加
    var isExits = $('#' + _self.gridViewSelectedId).jqGrid('getRowData', obj.id);
    if(isExits.id == undefined){
        // 获取对应存储个数
        obj.orderBy = _self.getDbCount(obj.id, "view");
        $('#' + _self.gridViewSelectedId).jqGrid('addRowData', obj.id, obj, 'first');
        _self.updateSumNumber(false);
    }

}

/**
 * 已选区删除数据
 * @param obj
 */
FormDataTransferJs.prototype.removeSelector = function(obj) {
    var _self = this;
    _self.updateSumNumber(true);
    $('#' + _self.gridSelectedId).jqGrid('delRowData', obj.id);
    var rows = $("#" + _self.gridId).jqGrid('getGridParam', 'selarrrow');
    if(rows.length===0){
        $("#preCheckAll").removeAttr('checked');
    }

}

/**
 * 已选区删除数据
 * @param obj
 */
FormDataTransferJs.prototype.removeViewSelector = function(obj) {
    var _self = this;
   _self.updateSumNumber(false);
    $('#' + _self.gridViewSelectedId).jqGrid('delRowData', obj.id);
    var rows = $("#" + _self.gridViewSelectedId).jqGrid('getGridParam', 'selarrrow');
    if(rows.length===0){
        $("#preCheckViewAll").removeAttr('checked');
    }

}
/**
 * 暂无
 * @param object
 * @param treeId
 * @param single
 * @param dealType
 * @param activityName
 */
FormDataTransferJs.prototype.selectorData = function(object,treeId,single,dealType,activityName){
    var _self = this;
    var originalName = object.attributes.originalName?object.attributes.originalName:object.name;
    $('#'+treeChildArea).append("<div id='"+object.id+"' userName='"+originalName+"' deptId='"+object.attributes.deptId+"' deptName='"+object.attributes.deptName+"' class='elm-checked' data-activityName='"+activityName+"' data-treeid='"+treeId+"' data-type='tree'>"+originalName+"</div>");
    $('#'+ treeChildArea).parent().find('.cb-tool .btns').addClass('on');
}

/**
 * 初始化表单已选区
 * @param data
 */
FormDataTransferJs.prototype.initJqgridSelected = function(data){
    var _self = this;
    /*//解决切换树节点不刷新表格问题
    $('#reloadSelected').html('');
    $('#reloadSelected').append('<table id="jqGridSelected"></table>');*/
    $("#" + _self.gridSelectedId).jqGrid({
        datatype: 'local',  //重点一定要设置为local
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : (document.documentElement.clientHeight - 20)/2 -60,
        multiselect: true,  //复选框
        scrollOffset : 10, //设置垂直滚动条宽度
        rowNum : 1000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        colModel: [
            {name: "id", index: "id", hidden: true},
            {name: "type", index: "type", hidden: true},
            {name: "code", index: "code", hidden: true},
            {name: "eformComponentId", index: "eformComponentId", hidden: true},
            {name: "name", index: "name", align: "left", width : 350,sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    var str = '<span style="color:#DCE2E8;">（'+_self.selectedNodeName+'）</span>';
                    return cellvalue + str ;
                }
            },
            {name: "dataModel", index: "dataModel", align: "left",width : 160, sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    var cnt ;
                    var cid;
                    if(rowObject.orderBy == undefined){
                        //选择了表之后动态修改该列
                        cnt = cellvalue.cnt;
                        cid = cellvalue.cid;
                    }else {
                        //正常初始化
                        cnt = rowObject.orderBy;
                        cid = rowObject.id;
                    }
                    if(rowObject.type == 'bpmFormsImpl'){
                        return '';
                    }else {
                        return '<span id="dataModel' + cid + '" style="color: #1F93FF;">存储（'+ cnt +'）</span>';
                    }
                }
            },
            {name: "opt", index: "opt", align: "left", width : 60,sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    return '<span id="delOne" class="icon iconfont icon-close" style="float: right;color:#6666;"></span>';
                }
            }
        ],
        viewrecords: true,
        styleUI : 'Bootstrap',
        autoencode: true,
        autowidth : true,
        shrinkToFit : true,
        responsive : true, //开启自适应
        hasTabExport:false,
        hasColSet:false,
        loadComplete : function() {
            //隐藏表头
            $('#t_' + _self.gridSelectedId).hide();
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
            //取消表格边框
            $('.ui-widget.ui-widget-content').css('border','none');

            $(this).jqGrid('getColumnByUserIdAndTableName');
        },
        onCellSelect : function(rowid,iCol,cellcontent,e) {
            //查看详情
            if(cellcontent.indexOf('存储') > 0){
                _self.modelDetail(rowid,'form',_self.selectedNodeId);
            }
        },
        beforeSelectRow: function (rowid, e) {
            //禁止单击行选中
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        afterInsertRow: function (rowId,rowdata,rowelem){
            //删除数据
            $('#delOne').on('click',function (e){
                if(e.preventDefault){
                    e.preventDefault();
                }else{
                    window.event.returnValue == false;
                }
                //删除当前已选数量
                $('#' + _self.gridSelectedId).jqGrid('delRowData', rowId);
                $('#' + _self.gridId).setSelection(rowId, false);
                //更新已选数量
                _self.updateSumNumber(true);
                checkedUpdate(_self.gridId,"preCheckAll");
            })
            /*//查看详情
            $('span[id^=dataModel]').on('click',function (e){
                _self.modelDetail(rowdata.id,'form',_self.selectedNodeId);
            })*/
        },
        onSelectRow: function(rowId) {
            //当前点击行id  点击触发
            _self.updateSumNumber(true);
        }
    });
}


/**
 * 初始化视图已选区
 * @param data
 */
FormDataTransferJs.prototype.initViewJqgridSelected = function(data){
    var _self = this;
    /*//解决切换树节点不刷新表格问题
    $('#reloadViewSelected').html('');
    $('#reloadViewSelected').append('<table id="jqGridViewSelected"></table>');*/
    $("#" + _self.gridViewSelectedId).jqGrid({
        datatype: 'local',  //重点一定要设置为local
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : (document.documentElement.clientHeight - 20)/2 -60,
        multiselect: true,  //复选框
        scrollOffset : 10, //设置垂直滚动条宽度
        rowNum : 1000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        colModel: [
            {name: "id", index: "id", hidden: true},
            {name: "type", index: "type", hidden: true},
            {name: "code", index: "code", hidden: true},
            {name: "eformComponentId", index: "eformComponentId", hidden: true},
            {name: "name", index: "name", align: "left", width : 350,sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    //var str = '<span onclick="'+_self.removeSelector(rowObject)+'" style="color:#DCE2E8;">（'+_self.selectedNodeName+'）</span>';
                    var str = '<span style="color:#DCE2E8;">（'+_self.selectedNodeName+'）</span>';
                    //return cellvalue + str + '<span class="icon iconfont icon-guanbi1" style="float: right;"></span>';
                    return cellvalue + str ;
                }
            },
            {name: "dataViewModel", index: "dataViewModel", align: "left",width : 160, sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    var cnt ;
                    var cid;
                    if(rowObject.orderBy == undefined){
                        //选择了表之后动态修改该列
                        cnt = cellvalue.cnt;
                        cid = cellvalue.cid;
                    }else {
                        //正常初始化
                        cnt = rowObject.orderBy;
                        cid = rowObject.id;
                    }
                    if(rowObject.type == 'bpmFormsImpl'){
                        return '';
                    }else {
                        return '<span id="dataViewModel' + cid + '" style="color: #1F93FF;">存储（' + cnt + '）</span>';
                    }
                }
            },
            {name: "opt", index: "opt", align: "left", width : 60,sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    return '<span id="delOneView" class="icon iconfont icon-close" style="float:' +
                        ' right;color:#6666;"></span>';
                }
            }
        ],
        viewrecords: true,
        styleUI : 'Bootstrap',
        autoencode: true,
        autowidth : true,
        shrinkToFit : true,
        responsive : true, //开启自适应
        hasTabExport:false,
        hasColSet:false,
        loadComplete : function(data) {
            //隐藏表头
            $('#t_' + _self.gridViewSelectedId).hide();
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
            //取消表格边框
            $('.ui-widget.ui-widget-content').css('border','none');
            $(this).jqGrid('getColumnByUserIdAndTableName');
        },
        onCellSelect : function(rowid,iCol,cellcontent,e) {
            //查看详情
            if(cellcontent.indexOf('存储') > 0){
                _self.modelDetail(rowid,'view',_self.selectedNodeId);
            }
        },
        beforeSelectRow: function (rowid, e) {
            //禁止单击行选中
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        afterInsertRow: function (rowId,rowdata,rowelem){
            //删除数据
            $('#delOneView').on('click',function (e){
                if(e.preventDefault){
                    e.preventDefault();
                }else{
                    window.event.returnValue == false;
                }
                //删除当前已选数量
                $('#' + _self.gridViewSelectedId).jqGrid('delRowData', rowId);
                $('#' + _self.gridIdView).setSelection(rowId, false);
                //更新已选数量
               _self.updateSumNumber(false);
                checkedUpdate(_self.gridIdView,"preCheckViewAll");
            });
            //查看详情
            /*$('#dataViewModel').on('click',function (e){
                _self.modelDetail(rowdata.id,'view',_self.selectedNodeId);
            });*/
            //移除图片
            $('img.formandviewImgDel').remove();
        },
        onSelectRow: function(rowId) {
           _self.updateSumNumber(false);
        }
    });

}

/**
 * 批量删除表单
 */
FormDataTransferJs.prototype.removeAllSelect = function() {
    var _self = this;
    var rows = $("#" + _self.gridSelectedId).jqGrid('getGridParam', 'selarrrow');

    if (rows == undefined || rows.length == 0) {
        layer.msg("请选择一条记录");
        return false;
    }
    for (var i = rows.length - 1; i >= 0; i--) {
        var rowId = rows[i];
        //删除当前已选数量
        $('#' + _self.gridSelectedId).jqGrid('delRowData', rowId);
        $('#' + _self.gridId).setSelection(rowId, false);
        $("#selectedCheckAll").removeAttr('checked');
        $("#preCheckAll").removeAttr('checked');
        //更新已选数量
    }
    _self.updateSumNumber(true);
}

/**
 * 删除当前全部已选表单
 */
FormDataTransferJs.prototype.delGridSelected = function(){
    var _self = this;
    $("#" + _self.gridSelectedId).jqGrid('clearGridData');
    $("#" + _self.gridId).jqGrid('resetSelection');
    $("#preCheckAll").removeAttr('checked');
    _self.updateSumNumber(true);
}

/**
 * 批量删除视图
 */
FormDataTransferJs.prototype.removeAllViewSelect = function() {
    var _self = this;
    var rows = $("#" + _self.gridViewSelectedId).jqGrid('getGridParam', 'selarrrow');

    if (rows == undefined || rows.length == 0) {
        layer.msg("请选择一条记录");
        return false;
    }
    for (var i = rows.length - 1; i >= 0; i--) {
        var rowId = rows[i];
        //删除当前已选数量
        $('#' + _self.gridViewSelectedId).jqGrid('delRowData', rowId);
        $('#' + _self.gridIdView).setSelection(rowId, false);
        $("#selectedCheckViewAll").removeAttr('checked');
        $("#preCheckViewAll").removeAttr('checked');

        //更新已选数量
    }
    _self.updateSumNumber(false);
}

/**
 * 删除当前全部已选视图
 */
FormDataTransferJs.prototype.delGridViewSelected = function(){
    var _self = this;
    $("#" + _self.gridViewSelectedId).jqGrid('clearGridData');
    $("#" + _self.gridIdView).jqGrid('resetSelection');
    $("#preCheckViewAll").removeAttr('checked');
    _self.updateSumNumber(false);

}

/**
 * 跳转至存储详情
 */
FormDataTransferJs.prototype.modelDetail = function(id,type,moduleName){
    var _self = this;
    parent.layer.open({
        type: 2,
        area: ['30%', '60%'],
        title: '存储模型',
        skin: 'bs-modal',
        maxmin: false,
        closeBtn: 1, //不显示关闭按钮
        btn : [ '确定', '取消' ],
        content: 'sysDataTransfer/sysDataTransferController/toModelSelect?id=' + id + '&type=' + type + '&moduleName=' + moduleName ,
        yes: function (index, layero){
            var iframeWin = layero.find('iframe')[0].contentWindow;
            // 修改表数量
            //var rows = $('#' + _self.gridId).jqGrid('getGridParam','selarrrow');
            var rows = iframeWin.$('#modelSelectGrid').jqGrid('getGridParam','selarrrow');
            var obj = {
                cnt: rows.length,
                cid: id
            }
            //
            if(type == 'form'){
                $('#' + _self.gridSelectedId).jqGrid('setCell', id, 'dataModel', obj);
                var subObj = iframeWin.modelSelect.getSelectedRows('form');
                for (var i = 0; i < formDbTables.length; i++) {
                    var o = formDbTables[i];
                    if (o['form' + id] != undefined && subObj['form' + id] != undefined) {
                        formDbTables.splice(i,1);
                    }
                }
                formDbTables.push(subObj);

            }else if(type == 'view'){
                $('#' + _self.gridViewSelectedId).jqGrid('setCell', id, 'dataViewModel', obj);
                var subObj = iframeWin.modelSelect.getSelectedRows('view');
                for (var i = 0; i < viewDbTables.length; i++) {
                    var o = viewDbTables[i];
                    if (o['view' + id] != undefined && subObj['view' + id] != undefined) {
                        viewDbTables.splice(i,1);
                    }
                }
                viewDbTables.push(subObj);
            }
            parent.layer.close(index)
        }
    })
}

/**
 * 搜索分类
 */
FormDataTransferJs.prototype.onseach = function( value){
    var _self = this;

    if(value == null||value == ""||value=='输入名称查询'){
        _self.initTree();
        
    }else {
        avicAjax.ajax({
            cache: true,
            type: "post",
            url: "sysDataTransfer/formModelTransferController/getEformTypeTree/search",
            dataType:"json",
            data:{search_text:value},
            async: false,
            error: function(request) {
                throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
            },
            success: function(data) {
                var rootNode=_self.tree.getNodeByParam("id","1",null);
                _self.tree.removeNode(rootNode);
                _self.tree.addNodes(null,data);
                var searchNode = _self.tree.getNodeByParam("isSearch","1",null);
                if(searchNode != null){
                    var spanId = _self.tree.getNodeByParam("id", searchNode.id, null).tId + "_span";
                    $("#" + spanId + "").click();
                }else{
                    var spanId = _self.tree.getNodeByParam("id", "1", null).tId + "_span";
                    $("#" + spanId + "").click();
                }
            }
        });
    }
}

/**
 * 关键字段查询
 */
FormDataTransferJs.prototype.searchByKeyWord = function(type) {
    var _self = this;
    url = 'sysDataTransfer/formModelTransferController/getFormViewByPage';
    if(type == 'form'){
        clickBtn = '#' + _self.gridId;
        keyWord = $(_self.searchGridId).val()==$(_self.searchGridId).attr("placeholder")? "" : $(_self.searchGridId).val();
        $("#nodata").hide();
        $("#table").show();
    }else {
        clickBtn = '#' + _self.gridIdView;
        keyWord = $(_self.searchViewGridId).val()==$(_self.searchGridId).attr("placeholder")? "" : $(_self.searchViewGridId).val();
        $("#nodataview").hide();
        $("#tableview").show();
    }
    var names = _self.searchNames;

    var param = {};
    for (var i in names) {
        var name = names[i];
        param[name] = keyWord;
    }

    var searchdata = {
        keyWord : JSON.stringify(param),
        nodeId : _self.selectedNodeId
    };
    /*
	 * 先清空条件
	 * jqgrid postData setGridParam 调用多次时查询条件会累加
	 */
    $(clickBtn).jqGrid("clearGridData");
    $(clickBtn).jqGrid('setGridParam', {
        datatype : 'json',
        url: url,
        rowNum : 1000,
        postData : searchdata
    }).trigger("reloadGrid");
};

/**
 * 全部查询，暂时不用
 */
/*FormDataTransferJs.prototype.searchByKeyWord = function(type) {
    var _self = this;
    var keyWord;
    var url;
    var clickBtn;

    if(type == 'form'){
        url = 'sysDataTransfer/formModelTransferController/searchFormInfoList';
        clickBtn = '#' + _self.gridId;
        keyWord = $(_self.searchGridId).val()==$(_self.searchGridId).attr("placeholder")? "" : $(_self.searchGridId).val();
    }else {
        url = 'sysDataTransfer/formModelTransferController/searchViewInfoList';
        clickBtn = '#' + _self.gridIdView;
        keyWord = $(_self.searchViewGridId).val()==$(_self.searchGridId).attr("placeholder")? "" : $(_self.searchViewGridId).val();
    }
    // 先清空条件
    $(clickBtn).jqGrid("clearGridData");
    $(clickBtn).jqGrid('setGridParam', {
        datatype : 'json',
        url: url,
        postData : {
            keyWord: keyWord
        }
    }
    ).trigger("reloadGrid");
};*/

/**
 * 获取选中的表单模型
 */
FormDataTransferJs.prototype.getSelectedFormArr = function() {
    var _self = this;
    var _formDb = (_self.getFormViewDb()).formDb;
    //var rows = $('#' + _self.gridSelectedId).jqGrid('getGridParam','selarrrow');
    //获取所有已选数据id
    var rows = $('#' + _self.gridSelectedId).getDataIDs();
    //选中行完整数据
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        if (_formDb.length > 0) {
            for (var j = 0; j < _formDb.length; j++) {
                if (_formDb[j]['form' + rows[i]] == undefined) {
                    data.push($('#' + _self.gridSelectedId).jqGrid('getRowData', rows[i]));
                }
            }
        } else {
            data.push($('#' + _self.gridSelectedId).jqGrid('getRowData', rows[i]));
        }
    }

    return data;

}
/**
 * 获取选中的视图模型
 */
FormDataTransferJs.prototype.getSelectedViewArr = function() {
    var _self = this;
    var _viewDb = (_self.getFormViewDb()).viewDb;
    //var rows = $('#' + _self.gridViewSelectedId).jqGrid('getGridParam','selarrrow');
    //获取所有已选数据id
    var rows = $('#' + _self.gridViewSelectedId).getDataIDs();
    //选中行完整数据
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        if (_viewDb.length > 0) {
            for (var j = 0; j < _viewDb.length; j++) {
                if (_viewDb[j]['view' + rows[i]] == undefined) {
                    data.push($('#' + _self.gridViewSelectedId).jqGrid('getRowData', rows[i]));
                }
            }
        } else {
            data.push($('#' + _self.gridViewSelectedId).jqGrid('getRowData', rows[i]));
        }
    }
    return data;
}

/**
 * 返回表单和视图页面的选择的存储模型
 */
FormDataTransferJs.prototype.getFormViewDb = function() {
    var obj = {};
    obj.formDb = formDbTables;
    obj.viewDb = viewDbTables;

    return obj;
}

/**
 * 时间格式化
 */
FormDataTransferJs.prototype.timestampToTime = function(timestamp) {
    var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
    var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
    var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
    var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
    return Y+M+D+h+m+s;
}

//添加数组IndexOf方法
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt)
                return from;
        }
        return -1;
    };
}
/***
 * 更新选中数量
 * @param isForm
 */
FormDataTransferJs.prototype.updateSumNumber = function(isForm){
    var _self = this;
    if(isForm){
        $('#selectedCheckboxTitle').text(_self.formTitle + checkedUpdate(_self.gridSelectedId,"selectedCheckAll") + '）')
    }else{
        $('#selectedViewCheckboxTitle').text(_self.viewTitle +  checkedUpdate(_self.gridViewSelectedId,"selectedViewCheckAll") + '）')
    }

}

/***
 * 全选状态的修正
 * @param gridId
 * @param checkboxId
 * @returns {length}
 */
function checkedUpdate(gridId,checkboxId) {
    var gridSelected = $('#' + gridId);
    var rows = gridSelected.jqGrid('getGridParam', 'selarrrow');
    var total = gridSelected.jqGrid('getRowData');
    if(rows.length!==0&&rows.length===total.length){
        $("#"+checkboxId).prop("checked",true);
    }else{
        $("#"+checkboxId).removeAttr('checked');
    }
    return rows.length;
}