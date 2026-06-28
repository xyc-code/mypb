/**
 * flowDataTransferJs.js
 */
/**
 * treeUrl :获取树url
 * treeId  :获取树容器id
 * gridId  :获取jqgrid容器id
 * @constructor
 */
function FlowDataTransferJs(treeUrl,gridUrl,treeId,gridId,gridSelectedId){
    /*
    * 选中的流程标题
     */
    this.flowTitle = '已选流程（';
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
    * 获取jqgrid selected id
     */
    this.gridSelectedId = gridSelectedId;
    /*
    * 当前选中节点id
     */
    this.selectedNodeId;
    /*
    * 当前选中节点name
     */
    this.selectedNodeName;
    /*
    * grid查询条件
     */
    this.searchNames;
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
    * 查询ID
     */
    this.searchGridId = "#search_flow";
    /*
    * 查询ID
     */
    this.searchGridBtnId = "#searchBtn_flow";
    /*
    * 是否需要初始化根节点
     */
    this.initRootFlg = false;
    /*
    * 流程模型
     */
    this.flowModel ;

    /**
     * grid
     */
    this.pageId = 'preFlowDataJqgridPager';
    this.Pagerlbar = '#preFlowDataJqgridPager';

    /*
    *调用初始化方法
     */
    this.initTree.call(this);
}

/**
 * 初始化Tree
 */
FlowDataTransferJs.prototype.initTree = function (){
    var _self = this;
    //快速查询
    $(_self.searchId).on('keyup',function(e){
        if(e.keyCode == 13){
            _self.onseach(13,$(_self.searchId).val());
        }
    });
    $(_self.searchBtnId).on('click',function(e){
        _self.onseach(13,$(_self.searchId).val());
    });
    _self.setting = {
        async: {
            enable: true,
            url: _self.treeUrl,//异步请求树子节点url
            autoParam: ["id"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "pId"
            }
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                // 候选复选框去掉勾选
                $('#preCheckAll').prop("checked", false);

                _self.selectedNodeId = treeNode.id;
                _self.selectedNodePId = treeNode.pId;
                //获取该分类下已发布和未发布流程
                _self.selectedNodeName = treeNode.name;
                _self.getFlowList(_self.selectedNodeId);
                $("#preCheckAll").removeAttr("checked");
            }
        }
    };
    //手动请求根节点数据
    avicAjax.ajax({
        url: _self.treeUrl,
        data: {
            id: "root"
        },
        type: "post",
        async: false,
        dataType: "json",
        success: function (backData) {
            var zNodes = backData;
            //初始化树节点
            $.fn.zTree.init($("#" + _self.treeId ), _self.setting, zNodes);
            //模拟点击第一个节点
            _self.clickFirstRootNode();
        }
    });
}

/**
 * 初始化jqgrid
 */
FlowDataTransferJs.prototype.initJqgrid = function (){
    var _self = this;

}

/**
 * 获取流程列表
 */
FlowDataTransferJs.prototype.getFlowList = function (selectedNodeId){
    var _self = this;
    var searchSubNames = [];
    var searchSubTips = [];
    searchSubNames.push("name");
    searchSubTips.push("流程名称");
    $('#search_flow').attr('placeholder', '请输入' + searchSubTips[0]);
    var flowDataGridColModel =
        [
            {
                "label": "id",
                "name": "id",
                "key": true,
                "hidden": true
            },{
                "label": "catalogId",
                "name": "catalogId",
                "hidden": true
            },{
                "label": "catalogCode",
                "name": "catalogCode",
                "hidden": true
            },{
                "label": "deployer",
                "name": "deployer",
                "hidden": true
            },{
                "label": "designer",
                "name": "designer",
                "hidden": true
            },{
                "label": "forbidManualStart",
                "name": "forbidManualStart",
                "hidden": true
            },{
                "label": "isUflow",
                "name": "isUflow",
                "hidden": true
            },{
                "label": "key",
                "name": "key",
                "hidden": true
            },{
                "label": "orgName",
                "name": "orgName",
                "hidden": true
            },{
                "label": "order",
                "name": "order",
                "hidden": true
            },{
                "label": "state",
                "name": "state",
                "hidden": true
            },{
                "label": "version",
                "name": "version",
                "hidden": true
            },
            {
                "label": "type",
                "name": "type",
                "hidden": true
            },
            {
                "label": "流程名称",
                "name": "name",
                "width": 75,
                "align": "left",
                "sortable": false
            },
            {
                "label": "最后更新时间",
                "name": "deployDate",
                "width": 25,
                "align": "right",
                "sortable": false,
                formatter : function(cellvalue, options, rowObject) {
                    return cellvalue + ' 00:00:00';
                }
            },
            {
                "label": "pdId",
                "name": "pdId",
                "width": 50,
                "align": "left",
                "hidden": true
            },
            {
                "label": "流程状态",
                "name": "stateName",
                "width": 15,
                "align": "center",
                "hidden": true
            },
            {
                "label": "deployId",
                "name": "deployId",
                "width": 15,
                "align": "center",
                "hidden": true
            }
        ];
    var url = _self.gridUrl;

    if (isInitGrid == false) {
        isInitGrid = true;
        //初始化待选区域
        _self.initFlowData(flowDataGridColModel, selectedNodeId,searchSubNames, _self.searchGridId);
        //初始化选中区域
        _self.initJqgridSelected();
    } else {
        $("#nodata").hide();
        $("#table").show();

        var queryStr = "selectedNodeId=" + selectedNodeId +"&limitCount=50&state=active";

        $('#' + _self.gridId).jqGrid('setGridParam', {
            datatype : 'json',
            postData : queryStr,
        }).trigger("reloadGrid");
    }
}

/**
 * 模拟点击第一个根节点
 */
FlowDataTransferJs.prototype.clickFirstRootNode = function (){
    var _self = this;
    var treeObj = $.fn.zTree.getZTreeObj(_self.treeId);
    var node = treeObj.getNodes();
    var nodes = treeObj.transformToArray(node);
    var firstNode = nodes[1];
    if(firstNode == undefined){
        return;
    }
    _self.selectedNodeName = firstNode.name;
    var spanId = firstNode.tId + "_span";
    $("#" + spanId + "").click();
}

/**
 * 初始化候选区
 */
FlowDataTransferJs.prototype.initFlowData = function (dataGridColModel, nodeId, searchSubNames, keyWord){
    var _self = this;
    _self.searchNames = searchSubNames;
    //解决切换树节点不刷新表格问题
    var url = _self.gridUrl;
    $('#' + _self.gridId).jqGrid({
        url : url,
        postData : {
            selectedNodeId : nodeId
        },
        mtype : 'POST',
        datatype : "json",
        colModel : dataGridColModel,
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : document.documentElement.clientHeight - 80 ,
        scrollOffset : 1000, //设置垂直滚动条宽度
        rowNum : 1000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
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
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
            $(this).jqGrid('getColumnByUserIdAndTableName');

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
            _self.flowListSelector(gDatas,status);
            checkedUpdate(_self.gridId,"preCheckAll");
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
        _self.searchByKeyWord();
    });
    $(_self.searchGridId).on('keydown', function(e) {
        if (e.keyCode == '13') {
            _self.searchByKeyWord();
        }
    });
}

/**
 * 候选区全选
 */
FlowDataTransferJs.prototype.checkAllFlowList = function(obj){
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
        for (var i = 0; i < jqGridIDs.length; i++) {
            jqGrid.setSelection(jqGridIDs [i], true);
        }
    } else {
        jqGrid.jqGrid('resetSelection');
        var ids = $('#' + _self.gridId).jqGrid('getDataIDs');
        $.each(ids,function(index,id){
            $('#' + _self.gridSelectedId).jqGrid('delRowData',id);
        })
    }
    _self.updateSumNumber();
}

/**
 * 已选区全选
 */
FlowDataTransferJs.prototype.checkedAllFlowList = function(obj){
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
    _self.updateSumNumber();
}
/**
 * 调用删除或添加项到已选区
 * @param obj
 * @param status
 */
FlowDataTransferJs.prototype.flowListSelector = function(obj,status) {
    var _self = this;
    if(status){
        _self.addSelector(obj);
    }else{
        _self.removeSelector(obj);
    }
    _self.updateSumNumber();
}

/**
 * 已选区添加数据
 * @param obj
 */
FlowDataTransferJs.prototype.addSelector = function(obj) {
    var _self = this;
    //已存在时不再添加
    var isExits = $('#' + _self.gridSelectedId).jqGrid('getRowData', obj.id);
    if(isExits.id == undefined){
        $('#' + _self.gridSelectedId).jqGrid('addRowData', obj.id, obj, 'first');
        _self.updateSumNumber();
    }

}

/**
 * 已选区删除数据
 * @param obj
 */
FlowDataTransferJs.prototype.removeSelector = function(obj) {
    var _self = this;
    _self.updateSumNumber();
    $('#' + _self.gridSelectedId).jqGrid('delRowData', obj.id);

}

/**
 * 暂无
 * @param object
 * @param treeId
 * @param single
 * @param dealType
 * @param activityName
 */
FlowDataTransferJs.prototype.selectorData = function(object,treeId,single,dealType,activityName){
    var _self = this;
    var originalName = object.attributes.originalName?object.attributes.originalName:object.name;
    $('#'+treeChildArea).append("<div id='"+object.id+"' userName='"+originalName+"' deptId='"+object.attributes.deptId+"' deptName='"+object.attributes.deptName+"' class='elm-checked' data-activityName='"+activityName+"' data-treeid='"+treeId+"' data-type='tree'>"+originalName+"</div>");
    $('#'+ treeChildArea).parent().find('.cb-tool .btns').addClass('on');
}

/**
 * 初始化已选区
 * @param data
 */
FlowDataTransferJs.prototype.initJqgridSelected = function(data){
    var _self = this;
    $("#" + _self.gridSelectedId).jqGrid({
        datatype: 'local',  //重点一定要设置为local
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : document.documentElement.clientHeight - 80,
        multiselect: true,  //复选框
        scrollOffset : 10, //设置垂直滚动条宽度
        rowNum : 1000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        colModel: [
            {name: "id", index: "id",key:true, hidden: true},
            {name: "catalogId", index: "catalogId", hidden: true},
            {name: "catalogCode", index: "catalogCode", hidden: true},
            {name: "deployer", index: "deployer", hidden: true},
            {name: "designer", index: "designer", hidden: true},
            {name: "forbidManualStart", index: "forbidManualStart", hidden: true},
            {name: "isUflow", index: "isUflow", hidden: true},
            {name: "key", index: "key", hidden: true},
            {name: "orgName", index: "orgName", hidden: true},
            {name: "order", index: "order", hidden: true},
            {name: "state", index: "state", hidden: true},
            {name: "version", index: "version", hidden: true},
            {name: "type", index: "type", hidden: true},
            {name: "pdId", index: "pdId", hidden: true},
            {name: "deployId", index: "deployId", hidden: true},
            {name: "name", index: "name", align: "left", sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    var str = '<span style="color:#DCE2E8;">（'+_self.selectedNodeName+'）</span>';
                    return cellvalue + str ;
                }
            },
            {name: "opt", index: "opt", align: "left", sortable: false,
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
        loadComplete : function(data) {
            //隐藏表头
            $('#t_' + _self.gridSelectedId).hide();
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
            //取消表格边框
            $('.ui-widget.ui-widget-content').css('border','none');
            $(this).jqGrid('getColumnByUserIdAndTableName');
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
                _self.updateSumNumber();
                checkedUpdate(_self.gridId,"preCheckAll");
            })
        },
        onSelectRow: function(rowId) {
            _self.updateSumNumber();
        }
    });

}

/**
 * 批量删除表单
 */
FlowDataTransferJs.prototype.removeAllSelect = function() {
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
       _self.updateSumNumber();
    }
}

/**
 * 删除当前已选项
 */
FlowDataTransferJs.prototype.delGridSelected = function(){
    var _self = this;
    $("#" + _self.gridSelectedId).jqGrid('clearGridData');
    $("#" + _self.gridId).jqGrid('resetSelection');
    _self.updateSumNumber();
}

/**
 * 查询框查询
 */
FlowDataTransferJs.prototype.onseach = function(ecode, value){
    var _self = this;
    if(ecode == 13){
        if(value == null||value == ""||value=='输入名称查询'){
            _self.initRoot();
            return;
        }
        this.initRootFlg = false;
        avicAjax.ajax({
            cache: true,
            type: "post",
            url:  "bpm/deploy/searchFlowTypeTree",
            dataType:"json",
            data:{search_text: $.trim(value)},
            async: false,
            success: function(data) {
                _self.tree = $.fn.zTree.init($("#" + _self.treeId), _self.setting, data);
            }
        });
    }
}

/**
 * 从根节点初始化
 */
FlowDataTransferJs.prototype.initRoot = function(){
    var _self = this;
    if(_self.initRootFlg){
        return;
    }
    _self.initRootFlg = true;
    //手动请求根节点数据
    avicAjax.ajax({
        url: "bpm/deploy/getFlowTypeTree",
        data: {
            id: "root"
        },
        type: "post",
        async: false,
        dataType: "json",
        success: function (backData) {
            var zNodes = backData;
            _self.tree = $.fn.zTree.init($("#" + _self.treeId), _self.setting, zNodes);
            _self.clickFirstRootNode();
        }
    });
}

/**
 * 关键字段查询
 */
FlowDataTransferJs.prototype.searchByKeyWord = function() {
    var _self = this;
    var keyWord = $(_self.searchGridId).val()==$(_self.searchGridId).attr("placeholder")? "" : $(_self.searchGridId).val();
    /*var names = _self.searchNames;

    var param = {};
    for (var i in names) {
        var name = names[i];
        param[name] = keyWord;
    }

    var searchdata = {
        keyWord : JSON.stringify(param),
        nodeId : _self.selectedNodeId
    };*/
    var queryStr = "selectedNodeId=" + _self.selectedNodeId +"&limitCount=50&state=active&processName="+keyWord;
    /*
	 * 先清空条件
	 * jqgrid postData setGridParam 调用多次时查询条件会累加
	 */
    $('#' + _self.gridId).jqGrid("clearGridData");
    /*var postData = $(_self.gridId).jqGrid("getGridParam", "postData");
    $.each(postData, function (k, v) {
        delete postData[k];
    });*/

    $("#nodata").hide();
    $("#table").show();

    $('#' + _self.gridId).jqGrid('setGridParam', {
        datatype : 'json',
        postData : queryStr,
    }).trigger("reloadGrid");
};

/**
 * 获取选中的流程模型
 */
FlowDataTransferJs.prototype.getSelectedFlowArr = function() {
    var _self = this;
    //选中行id集合
    //var rows = $('#' + _self.gridSelectedId).jqGrid('getGridParam','selarrrow');
    var rows = $('#' + _self.gridSelectedId).getDataIDs();
    //选中行完整数据
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        data.push($('#' + _self.gridSelectedId).jqGrid('getRowData',rows[i]));
    }

    return data;

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

 */
FlowDataTransferJs.prototype.updateSumNumber = function(){
    var _self = this;
    $('#selectedCheckboxTitle').text(_self.flowTitle + checkedUpdate(_self.gridSelectedId,"selectedCheckAll") + '）')
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