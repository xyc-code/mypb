/**
 * DbDataTransferJs.js
 */
/**
 * treeUrl :获取树url
 * treeId  :获取树容器id
 * gridId  :获取jqgrid容器id
 * @constructor
 */
function DbDataTransferJs(treeUrl,gridUrl,treeId,gridId,gridSelectedId){

    /*
    * 选中的流程标题
     */
    this.dbTitle = '已选表模型（';
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
    * 查询条件
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
    this.searchGridId = "#search_db";
    /*
    * 查询ID
     */
    this.searchGridBtnId = "#searchBtn_db";
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
    this.pageId = 'preDbDataJqgridPager';
    this.Pagerlbar = '#preDbDataJqgridPager';

    /*
    *调用初始化方法
     */
    this.initTree.call(this);
}

/**
 * 初始化Tree
 */
DbDataTransferJs.prototype.initTree = function (){
    var _self = this;

    var setting = {
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
        view:{
            selectedMulti: false
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                _self.selectedNodeId = treeNode.id;
                _self.selectedNodeName = treeNode.name;
                //$("#" + dbTableSearch.searchArea).css("display", "none");
                // 候选复选框去掉勾选
                $('#preCheckAll').prop("checked", false);
                //获取该分类下电子表单模块列表
                _self.getComponentList(_self.selectedNodeId);
            }
        }
    };

    //手动请求根节点数据
    $.ajax({
        url: _self.treeUrl,
        data: "id=-1",
        type: "post",
        async: false,
        dataType: "json",
        success: function (backData) {
            var zNodes = backData;
            _self.tree = $.fn.zTree.init($("#" + _self.treeId), setting, zNodes);

            _self.clickFirstRootNode();
        }
    });
}

/**
 * 初始化jqgrid
 */
DbDataTransferJs.prototype.initJqgrid = function (){
    var _self = this;

}

/**
 * 获取存储模型列表
 */
DbDataTransferJs.prototype.getComponentList = function (selectedNodeId){
    var _self = this;

    var searchSubNames = [];
    searchSubNames.push("tableName");
    searchSubNames.push("tableComments");
    var dbDataGridColModel = [
        {
            label : 'id',
            name : 'id',
            key : true,
            hidden : true
        }
        , {
            label : '表英文名称',
            name : 'tableName',
            width : 40,
            align : 'left',
            sortable : true,
            hidden : true
        }
        ,{
            label : '表中文名称',
            name : 'tableComments',
            width : 40,
            align : 'left',
            sortable : false
        }
        ,{
            label : '最后更新时间：',
            name : 'lastUpdateDate',
            width : 25,
            align : 'right',
            sortable : false,
            formatter : function(cellvalue, options, rowObject) {
                return _self.timestampToTime(cellvalue) ;
            }
        }
    ];

    if (isInitGrid == false) {
        isInitGrid = true;
        //初始化待选区域
        _self.initDbData(dbDataGridColModel, selectedNodeId,searchSubNames, _self.searchGridId);
        $(window).resize();

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
 * 模拟点击第一个根节点
 */
DbDataTransferJs.prototype.clickFirstRootNode = function (){
    var _self = this;

    var firstRootNode = _self.tree.getNodeByParam("pId", null, null);
    var firstSubNodeOfFirstRootNode = _self.tree.getNodeByParam("pId", firstRootNode.id, null);
    if (firstSubNodeOfFirstRootNode){
        var spanId = firstSubNodeOfFirstRootNode.tId + "_span";
        $("#" + spanId).click();
    }else{
        $("#" + firstRootNode.tId + "_span").click();
    }
    _self.selectedNodeName = firstSubNodeOfFirstRootNode.name;
}

/**
 * 初始化候选区
 */
DbDataTransferJs.prototype.initDbData = function (dataGridColModel, nodeId, searchSubNames, keyWord){
    var _self = this;
    _self.searchNames = searchSubNames;
    //解决切换树节点不刷新表格问题
    var url = _self.gridUrl;
    $('#' + _self.gridId).jqGrid({
        url : url,
        postData : {
            nodeId : nodeId
        },
        sortname: 'lastUpdateDate',
        sortorder: 'desc',
        mtype : 'POST',
        datatype : "json",
        colModel : dataGridColModel,
        //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
        height : document.documentElement.clientHeight - 80,
        scrollOffset : 1000, //设置垂直滚动条宽度
        rowNum : 1000,
        rowList : [ 200, 100, 50, 30, 20, 10 ],
        altRows : true,
        pagerpos : 'left',
        gridComplete: function(){
            //判断当前数据是否已经被选中
            setTimeout(function(){
                var gridIds = $('#'+_self.gridId).jqGrid('getDataIDs');
                var gridSelectedIds = $('#'+_self.gridSelectedId).jqGrid('getDataIDs');
                if(gridIds.length!==0&&gridSelectedIds.length!==0){
                    $.each(gridIds,function(index,gridId){
                        $.each(gridSelectedIds,function (i,gridSelectedId) {
                            if(gridSelectedId === gridId){
                                $('#' + _self.gridId).setSelection(gridId);
                            }
                        })
                    })
                }
            },100)
        },
        loadComplete : function(data) {
            $('#t_' + _self.gridId).hide();
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
        onSelectAll:function (aRowids,status){alert('onSelectAll')},
        onSelectRow:function (rowId,status){
            var gDatas = $('#' + _self.gridId).jqGrid('getRowData',rowId);

            // 判断改变全选框的状态

            _self.userListSelector(gDatas,status);
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
    //快速查询
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
DbDataTransferJs.prototype.checkAllDbList = function(obj){
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
 * 表已选区全选
 */
DbDataTransferJs.prototype.checkedAllDbList = function(obj){
    var _self = this;
    var isCheckAll = obj.prop("checked");
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
DbDataTransferJs.prototype.userListSelector = function(obj,status) {
    var _self = this;
    if(status){
        _self.addSelector(obj);
    }else{
        _self.removeSelector(obj);
    }
}

/**
 * 已选区添加数据
 * @param obj
 */
DbDataTransferJs.prototype.addSelector = function(obj) {
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
DbDataTransferJs.prototype.removeSelector = function(obj) {
    var _self = this;
    $('#' + _self.gridSelectedId).jqGrid('delRowData', obj.id);
    _self.updateSumNumber();
    var rows = $("#" + _self.gridId).jqGrid('getGridParam', 'selarrrow');
    if(rows.length===0){
        $("#preCheckAll").removeAttr('checked');
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
DbDataTransferJs.prototype.selectorData = function(object,treeId,single,dealType,activityName){
    var _self = this;
    var originalName = object.attributes.originalName?object.attributes.originalName:object.name;
    $('#'+treeChildArea).append("<div id='"+object.id+"' userName='"+originalName+"' deptId='"+object.attributes.deptId+"' deptName='"+object.attributes.deptName+"' class='elm-checked' data-activityName='"+activityName+"' data-treeid='"+treeId+"' data-type='tree'>"+originalName+"</div>");
    $('#'+ treeChildArea).parent().find('.cb-tool .btns').addClass('on');
}

/**
 * 初始化已选区
 * @param data
 */
DbDataTransferJs.prototype.initJqgridSelected = function(data){
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
            {name: "id", index: "id", hidden: true},
            {name: "tableComments", index: "tableComments", width : 260,align: "left", sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    var str = '<span style="color:#DCE2E8;">（'+_self.selectedNodeName+'）</span>';
                    return cellvalue + str ;
                }
            },
            {name: "opt", index: "opt", align: "left", sortable: false,
                formatter : function(cellvalue, options, rowObject) {
                    return '<span id="delOne" class="icon iconfont icon-close" style="float:' +
                        ' right;color:#6666;"></span>';
                    // return '<span id="delOne" class="icon iconfont icon-guanbi1" style="float: right;color:#6666;"></span>';
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
        gridComplete:function(){

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
                _self.updateSumNumber();
                checkedUpdate(_self.gridId,"preCheckAll");
            })
        },
        beforeSelectRow: function (rowid, e) {
            //禁止单击行选中
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        onSelectRow: function(rowId,status) {
            _self.updateSumNumber();
        }
    });

}

/**
 * 批量删除
 */
DbDataTransferJs.prototype.removeAllSelect = function() {
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
DbDataTransferJs.prototype.delGridSelected = function(){
    var _self = this;
    $("#" + _self.gridSelectedId).jqGrid('clearGridData');
    $("#" + _self.gridId).jqGrid('resetSelection');
    $("#preCheckAll").removeAttr('checked');
    _self.updateSumNumber();
}

/**
 * ztree关键字搜索
 */
DbDataTransferJs.prototype.onseach = function(ecode, value){
    var _self = this;
    if(ecode == 13){
        if(value == null||value == ""||value=='输入名称查询'){
            _self.initTree();
            return;

        }
        $.ajax({
            cache: true,
            type: "post",
            url: "platform/db/dbTableManageController/getDbTableTypeTree/search",
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
 * grid关键字搜索
 */
DbDataTransferJs.prototype.searchByKeyWord = function() {
    var _self = this;

    var placeholder = $(_self.searchGridId).attr("placeholder");
    var keyWord = "";
    if (placeholder != $(_self.searchGridId).val()){
        keyWord = $(_self.searchGridId).val();
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
    //清空
    $('#' + _self.gridId).jqGrid("clearGridData");

    $("#nodata").hide();
    $("#table").show();

    $('#' + _self.gridId).jqGrid('setGridParam', {
        datatype : 'json',
        postData : searchdata
    }).trigger("reloadGrid");
};

/**
 * 获取选中的存储ID
 */
DbDataTransferJs.prototype.getSelectedDbArr = function() {
    var _self = this;
    //选中行id集合
    //var rows = $('#' + _self.gridSelectedId).jqGrid('getGridParam','selarrrow');
    /*//选中行完整数据
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        data.push($('#' + _self.gridSelectedId).jqGrid('getRowData',rows[i]));
    }*/
    //获取grid表中所有的rowid值
    var rows = $('#' + _self.gridSelectedId).getDataIDs();
    return rows;

}

/**
 * 时间格式化
 */
DbDataTransferJs.prototype.timestampToTime = function(timestamp) {
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
 */
DbDataTransferJs.prototype.updateSumNumber = function(){
    var _self = this;
    $('#selectedCheckboxTitle').text(_self.dbTitle + checkedUpdate(_self.gridSelectedId,"selectedCheckAll") + '）')
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