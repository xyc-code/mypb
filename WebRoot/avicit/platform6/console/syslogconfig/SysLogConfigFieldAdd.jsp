<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/select2/select2.css"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/h5component/common/commonselect.css"/>

</head>
<body class=" easyui-layout" fit="true">
<div data-options="region:'west', width: fixwidth(.50),onResize:function(a){$('#jqGrid').setGridWidth(a);$(window).trigger('resize');}"
     style="overflow-y: hidden; padding: 0 14px;">
    <div id="tableToolbar" class="toolbar">
        <div class="toolbar-right">
            <div class="input-group form-tool-search">
                <input type="text" name="keyWord" id="keyWord"
                       class="form-control input-sm" placeholder="请输入属性名称查询"/> <label
                    id="searchPart" class="icon icon-search form-tool-searchicon"></label>
            </div>
        </div>
        <div class="toolbar-left">
            <span id="total"></span>
        </div>
    </div>
    <table id="jqGrid"></table>
</div>
<div data-options="region:'center', width: fixwidth(.50),onResize:function(a){$('#jqGridSelected').setGridWidth(a);$(window).trigger('resize');}" style="overflow: hidden;">
    <div id="tableToolbarCenter" class="toolbar">
        <div class="toolbar-left selected-check-all">
            <input type="checkbox" id="selectedCheckAll" title="全选"/>
            <span id="selectedCheckboxTitle" class="role-checkbox-title">已选择</span>
            <span id="selectedPanelTitle" class="selected-panel-title"></span>
        </div>
        <div class="toolbar-right role-delete-all">
            <label id="selectedDeleteAll" class="glyphicon glyphicon-trash" title="删除选中"></label>
        </div>
    </div>
    <table id="jqGridSelected"></table>
</div>
</body>

<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script src="static/js/platform/eform/widget.js"></script>
<script src="static/js/platform/eform/mouse.js"></script>
<script src="static/js/platform/eform/sortable.js"></script>
<script src="static/js/platform/eform/jquery-ui.min.js"></script>
<script src="static/h5/select2/select2.js"></script>
<script>
    // 展示的数据
    var showList = [];
    var selectedColIds;
    var sysLogConfigFieldGridColModel =  [
        { label: 'id', name: 'id', key: true, width: 300,align:'center', hidden:true }
        ,{ label: '属性名称', name: 'fieldName', width: 150,align:'center',sortable:false}
        ,{ label: '属性标题', name: 'fieldTitle',align:'center', hidden:false}
        ,{ label: '数据库映射', name: 'fieldColumn', width: 150, hidden:true}
        ,{ label: '字段类型', name: 'fieldType', width: 150, hidden:true}
        ,{ label: '输入类型展示', name: 'dataType',align:'center', width: 150, hidden:true}
        ,{ label: '输入类型', name: 'dataTypeAlias',align:'center', width: 150, hidden:true}
        ,{ label: '通用代码', name: 'lookUpType', width: 150, hidden:true}
        ,{ label: '自定义转换', name: 'dataValue', width: 150, hidden:true}
        ,{ label: '日志标识', name: 'fieldExplicit', width: 150, hidden:true}
        ,{ label: '创建人部门', name: 'createdDept', width: 150, hidden:true}
        ,{ label: '日志配置表', name: 'logConfigId', width: 150, hidden:true}
        ,{ label: '应用ID', name: 'sysApplicationId', width: 150, hidden:true}
    ];
    var multi = true;
    initColClassSelect();
    initSelectedColInfo();
    init();
    function formatTitle(cellvalue, options, rowObject) {
        var colDescElem = '';
        if (rowObject.fieldTitle!==undefined&&rowObject.fieldTitle!=="") {
            colDescElem = '<i class="icon icon-info title-desc" title="' + rowObject.fieldTitle + '"></i>';
        } else {
            colDescElem = '<i class="icon icon-info title-desc" title="暂无描述"></i>';
        }

        return '<span class="selected-title-span" data-id="' + rowObject.id + '" title="" style="width: 360px;"><span class="role-role-name">' + rowObject.fieldTitle + '</span>' + colDescElem + '</span>';
    }

    function formatTitleSelected(cellvalue, options, rowObject) {
        var colDescElem = '';
        if (rowObject.fieldTitle!==undefined&&rowObject.fieldTitle!=="") {
            colDescElem = '<i class="icon icon-info title-desc" title="' + rowObject.fieldTitle + '"></i>';
        } else {
            colDescElem = '<i class="icon icon-info title-desc" title="暂无描述"></i>';
        }
        return '<span class="selected-title-span" data-id="' + rowObject.id + '" title="" style="width: 360px;"><span class="role-role-name">' + rowObject.fieldTitle + '</span><em class="orgSelect org-name">(' + rowObject.fieldTitle + ')</em>' + colDescElem + '</span>';
    }

    function formatOp(cellvalue, options, rowObject) {
        return '<span class="icon icon-drag" aria-hidden="true" title="移动"></span><span class="icon icon-close" aria-hidden="true" title="移除" onclick="deleteSelectedCascade(\'' + rowObject.id + '\');"></span>';
    }

    function selectedRowMouseOver(e) {
        var id = $(e.target).find('span.selected-title-span').data("id");
        $('#jqGridSelectedspan .selected-op-col .glyphicon-remove').hide();
        $('#jqGridSelectedspan .selected-op-col ').find('span.glyphicon-remove[data-id="' + id + '"]').show();
    }

    function selectedRowMouseOut(e) {
        var id = $(e.target).find('span.selected-title-span').data("id");
        $(e.target).find('span.selected-title-span .glyphicon-remove').hide();
    }

    //初始化表格参数
    function init() {
        //单选隐藏checkbox
        if (multi) {
            $("#jqgh_jqGrid_title").css("text-align", "left");
        } else {
            $("#jqGrid_title").hide();
            $("#jqGrid").jqGrid('hideCol', 'cb');
        }
    }

    function initSelectedColInfo() {
        $('#jqGridSelected').jqGrid({
            colModel: sysLogConfigFieldGridColModel,
            height: $(window).height() - 65,
            datatype: "local",
            rowNum: 10,
            pagerpos: 'left',
            hasColSet: false,
            hasTabExport: false,
            altRows: true,
            userDataOnFooter: true,
            loadonce: false,
            viewrecords: true,
            styleUI: 'Bootstrap',
            multiboxonly: false,
            multiselect: true,
            autowidth: !multi,
            responsive: !multi,//开启自适应
            onSelectRow: function () {
                var gridSelected = $('#jqGridSelected');
                var rows = gridSelected.jqGrid('getGridParam', 'selarrrow');
                var total = gridSelected.jqGrid('getRowData');
                if(rows.length!==0&&rows.length===total.length){
                    $("#selectedCheckAll").prop("checked",true);
                }else{
                    $("#selectedCheckAll").removeAttr('checked');
                }
            },
            gridComplete: function () {
                //单选隐藏checkbox
                if (!multi) {
                    $('#selectedCheckAll').hide();
                    $("#jqGridSelected").jqGrid('hideCol', 'cb');
                    $("#jqGridSelected").jqGrid('hideCol', 'op');
                    $("#selectedCheckboxTitle").addClass("checkbox-title-single");
                } else {
                    $("#selectedCheckboxTitle").addClass("checkbox-title-multi");
                    $(".ui-jqgrid .ui-jqgrid-btable tbody tr.jqgrow td").css("padding-left", "0");
                }
                $("#jqGridSelected_title").hide();
                $("#jqGridSelected_op").hide();
                $("#jqGridSelected_cb").hide();
                $("#jqGridSelected td[role=\"gridcell\"]").attr("title", "");

            }
        });

        resetSelectNum();
        //实现行拖拽
        $('#jqGridSelected').jqGrid('sortableRows');

        $('#selectedCheckAll').bind('click', function (e) {
            var checkStatus = $(e.target)[0].checked;
            var allIds = $("#jqGridSelected").getDataIDs();
            var selIds = $("#jqGridSelected").jqGrid('getGridParam', 'selarrrow');
            if (checkStatus) {
                for (var i = allIds.length - 1; i >= 0; i--) {
                    if ($.inArray(allIds[i], selIds) == -1) {
                        $("#jqGridSelected").setSelection(allIds[i], true);
                    }
                }
            } else {
                for (var i = selIds.length - 1; i >= 0; i--) {
                    $("#jqGridSelected").setSelection(selIds[i], true);
                }
            }

        });
        $('#selectedDeleteAll').bind('click', function () {
            removeAllSelect();
            $('#selectedCheckAll').attr("checked", false);
        });
    }

    function addToSelectedCol(rowId, rowData) {
        var exist = false;
        var allIds = $("#jqGridSelected").getDataIDs();
        for (var i = 0, len = allIds.length; i < len; i++) {
            if (allIds[i] == rowId) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            $("#jqGridSelected").addRowData(rowId, rowData);
            allIds.push(rowId);
        }
        selectedColIds = allIds.join(';');
        resetSelectNum();
    }

    /**移除选中的角色并将左侧checkbox取消选中*/
    function deleteSelectedCascade(rowId) {
        removeFromSelectedCol(rowId);
        $("#jqGrid").setSelection(rowId, false);
    }

    /**移除选中的群组*/
    function removeFromSelectedCol(rowId) {
        $("#jqGridSelected").delRowData(rowId);
        var allIds = $("#jqGridSelected").getDataIDs();
        selectedColIds = allIds.join(';');
        resetSelectNum();
    }


    function GetJqGridRowValue(jgrid, code) {
        var KeyValue = "";
        var selectedRowIds = $(jgrid).jqGrid("getGridParam", "selarrrow");
        if (selectedRowIds != "") {
            var len = selectedRowIds.length;
            for (var i = 0; i < len; i++) {
                var rowData = $(jgrid).jqGrid('getRowData', selectedRowIds[i]);
                KeyValue += rowData[code] + ";";
            }
            KeyValue = KeyValue.substr(0, KeyValue.length - 1);
        } else {
            var rowData = $(jgrid).jqGrid('getRowData',
                $(jgrid).jqGrid('getGridParam', 'selrow'));
            KeyValue = rowData[code];
        }
        return KeyValue;
    }

    // 	单选
    function onSelectRow(rowid, status) {
        if (multi) {
            var rowData = $("#jqGrid").jqGrid('getRowData', rowid);
            if (status) {
                addToSelectedCol(rowid, rowData);
            } else {
                removeFromSelectedCol(rowid);
            }
        } else {
            var rowData = $("#jqGrid").jqGrid('getRowData', rowid);
            var selectIds = $("#jqGridSelected").getDataIDs();
            if (selectIds && selectIds.length) {
                for (var i = selectIds.length - 1; i >= 0; i--) {
                    removeFromSelectedCol(selectIds[i]);
                }
            }
            addToSelectedCol(rowid, rowData);
            $("#jqGridSelected").setSelection(rowid, true);
        }
    }

    // 	全选
    function onSelectAll(aRowids, status) {
        if (multi) {
            for (var i = 0, len = aRowids.length; i < len; i++) {
                var rowid = aRowids[i];
                var rowData = $("#jqGrid").jqGrid('getRowData', rowid);
                var allIds = $("#jqGridSelected").getDataIDs();
                var exist = false;
                for (var j = 0, lenSelected = allIds.length; j < lenSelected; j++) {
                    if (allIds[j] == rowid) {
                        exist = true;
                        break;
                    }
                }
                if (status) {
                    if (!exist) {
                        addToSelectedCol(rowid, rowData);
                    }
                } else {
                    removeFromSelectedCol(rowid);
                }
            }
        }
    }

    //关键字段查询
    function onSeach() {
        $('#jqGrid').jqGrid('clearGridData')
        if(showList.length>0){
            for(var i=0;i<showList.length;i++){
                if(showList[i].fieldName.toLowerCase().indexOf($('#keyWord').val().toLowerCase())!==-1){
                    $("#jqGrid").jqGrid('addRowData', i + 1, showList[i]);
                }
            }
        }
    }

    //查询按钮绑定事件
    $('#searchPart').bind('click', function () {
        onSeach();
    });

    $("#keyWord").on('keyup', function(e) {
        if (e.keyCode == 13) {
            onSeach();
        }
    });

    //回填数据
    function getColList() {
        var rowdatas = [];
        var colidlist = $("#jqGridSelected").getDataIDs();
        for (var i = 0; i < colidlist.length; i++) {
            var id = colidlist[i];
            var rowData = $("#jqGridSelected").jqGrid('getRowData', id);
            rowdatas.push(rowData);
        }
        return rowdatas;

    }

    //重载
    function reLoad(colClass) {
        var formData = {}
        if(colClass != undefined && colClass != '1'){
            formData.colClass = colClass;
        }
        var searchdata = {param:JSON.stringify(formData)}
        $('#jqGrid').jqGrid('setGridParam', {datatype: 'json', postData: searchdata}).trigger("reloadGrid");
    }

    function initColClassSelect() {
        var data = [];
        avicAjax.ajax({
            url: 'platform/db/dbCommonColController/selectCommonColClass',
            type: 'post',
            async: false,
            dataType: 'json',
            success: function (rows) {
                var colClass = "";
                if (rows) {
                    if(rows.length > 0){
                        colClass = rows[0].lookupCode;
                    }
                    $.each(rows, function (index, value) {
                        data.push({id: value.lookupCode, text: value.lookupName});
                    });
                }

                var formData = {}
                if(colClass !== undefined && colClass !== '1'){
                    formData.colClass = colClass;
                }
                var searchdata = {pid:parent.sysLogConfigField.pid}
                // 获取已经添加的列
                var fieldList = [];
                $.ajax({
                    url:'console/sysLogConfigController/operation/getFieldList',
                    method:'get',
                    data:searchdata,
                    async:false,
                    success:function(res){
                        fieldList=res.rows;
                    }
                })
                // 需要展示的数据为 所有数据的集合 - 原来入库的数据 - 添加在页面还没入库的数据
                if(fieldList!==null&&fieldList!==undefined){
                    for(var m=0;m<fieldList.length;m++){
                        var field = fieldList[m];
                        var rowsData = parent.$("#sysLogConfigField").jqGrid("getRowData");
                        // 判断添加页面还没入库的数据
                        if(rowsData!==undefined&&rowsData.length>0){
                            var tempStatus = true;
                            for(var j = 0;j<rowsData.length;j++){
                                var tempField = rowsData[j];
                                if(field.fieldColumn===tempField.fieldColumn){
                                    tempStatus = false;
                                    break;
                                }
                            }
                            if(tempStatus){
                                showList.push(field);
                            }
                        }else{
                            showList = fieldList;
                            break;
                        }
                    }
                }

                $('#jqGrid').jqGrid({
                    datatype: "local",
                    postData: showList,
                    colModel: sysLogConfigFieldGridColModel,
                    height: $(window).height() - 85,
                    scrollOffset: 20, //设置垂直滚动条宽度
                    hasColSet: false,
                    hasTabExport: false,
                    altRows: true,
                    userDataOnFooter: true,
                    pagerpos: 'left',
                    loadonce: false,
                    viewrecords: true,
                    styleUI: 'Bootstrap',
                    multiboxonly: !multi,
                    multiselect: true,
                    autowidth: true,
                    responsive: true,//开启自适应
                    onSelectRow: onSelectRow,//js方法
                    //ondblClickRow: ondblClickRow,
                    onSelectAll: onSelectAll,
                    gridComplete: function () {
                        var totalText = "共 "+$(this).jqGrid("getDataIDs").length+" 条";
                        $("#total").text(totalText);
                        if (selectedColIds) {
                            var col = selectedColIds.split(';');
                            if (selectedColIds.indexOf(",") > -1) {
                                col = selectedColIds.split(',');
                            }
                            for (var o = 0; o < col.length; o++) {
                                var id = col[o];
                                $(this).jqGrid("setSelection", id);
                            }
                        }
                        $("#jqGrid td[role=\"gridcell\"]").attr("title", "");
                        if (multi) {
                            $(".ui-jqgrid .ui-jqgrid-btable tbody tr.jqgrow td").css("padding-left", "0");
                        }
                    }
                });
                for ( var i = 0; i <= showList.length; i++){
                    $("#jqGrid").jqGrid('addRowData', i + 1, showList[i]);
                }
            }
        });
    }


    function removeAllSelect() {
        if (multi) {
            // 多选时删除选中
            var rows = $("#jqGridSelected").jqGrid('getGridParam', 'selarrrow');
            for (var i = rows.length - 1; i >= 0; i--) {
                var removeId = rows[i];
                deleteSelectedCascade(removeId);
            }
        } else {
            // 单选时删除所有
            $.each($("#jqGridSelected").getDataIDs(), function (index, elem) {
                deleteSelectedCascade(elem);
            });
        }
    }

    function resetSelectNum() {
        var selectCnt = $("#jqGridSelected").getDataIDs().length;
        if(selectCnt){
            $('.unselected-div').remove();
        } else {
            $('.unselected-div').remove();
            var elemDiv = '<div class="unselected-div"><img src="static/h5/common-ext/userUnselected.png" /><span class="unselected-div-title">暂未选择字段</span></div>';
            $('#gview_jqGridSelected .ui-jqgrid-bdiv').append(elemDiv);
        }
        $("#selectedPanelTitle").text("(" + selectCnt + ")");

        var rows = $('#jqGridSelected').jqGrid('getGridParam', 'selarrrow');
        var total = $('#jqGridSelected').jqGrid('getRowData');
        if(rows.length!==0&&rows.length===total.length){
            $("#selectedCheckAll").prop("checked",true);
        }else{
            $("#selectedCheckAll").removeAttr('checked');
        }
    }

    $(document).ready(function () {

        $('.input-group-addon-icon').on('click', function (e) {
            $(this).parent().find('input[type="text"]').trigger('focus');
        });
    });
</script>

</body>
</html>
