<%--
  Created by IntelliJ IDEA.
  User: heng
  Date: 2021/4/13
  Time: 10:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>请选择实体类</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
    <div id="sysLogConfigStorageModelToolbar" style="padding: 7px 5px 7px 8px;">
        <div class="input-group  input-group-sm" style="width: 300px">
            <input  class="form-control" placeholder="输入DTO名称" type="text" id="dtoName">
            <span class="input-group-btn">
                <button id="searchbtn" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
            </span>
        </div>
    </div>
    <div style="height:calc(100% - 40px)">
        <table id="sysLogConfigStorageModel"></table>
    </div>
    <div id="toolbar"  style="position: relative;bottom: -5px">
        <table class="tableForm" style="border:0;cellspacing:1;width:100%">
            <tr>
                <td width="50%" style="padding-right:4%;" align="right">
                    <a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存"
                       id="sysLogConfigStorageModelSaveForm">确定</a>
                    <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                       id="sysLogConfigStorageModelCloseForm">取消</a>
                </td>
            </tr>
        </table>
    </div>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
<script>
    var showList;

    function initTable() {
        var sysLogConfigClassGridColModel =  [
            { label: 'DTO名称', name: 'dtoName', key: true}
            ,{ label: '表名称', name: 'dtoTableName', width: 150}
            ,{ label: '描述', name: 'dtoDesc', width: 150}
        ];
        $('#sysLogConfigStorageModel').jqGrid({
            url: 'console/sysLogConfigController/operation/getDtoList',
            mtype: 'POST',
            multiselect:false,
            datatype: "json",
            toolbar: [true,'top'],
            colModel: sysLogConfigClassGridColModel,
            height:$(window).height()-60-100,//120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
            scrollOffset: 10,
            rowNum: 99999999,
            altRows:true,
            userDataOnFooter: true,
            pagerpos:'left',
            hasColSet:false,//设置显隐属性
            styleUI : 'Bootstrap',
            viewrecords: true,
            multiboxonly:true,
            autowidth: true,
            shrinkToFit: true,
            responsive:true,
            ondblClickRow:function(rowid,iRow,iCol,e){
                submitCheckData(rowid);
            },
            loadComplete:function () {
               showList = $('#sysLogConfigStorageModel').jqGrid('getRowData');
                $("#searchbtn").bind('click',function () {
                    searchDTO();
                })
            }
        });
        $("#t_sysLogConfigStorageModel").append($("#sysLogConfigStorageModelToolbar"))
    }
    function searchDTO() {
        $('#sysLogConfigStorageModel').jqGrid('clearGridData')
        if(showList.length>0){
            for(var i=0;i<showList.length;i++){
                var showNameTemp = showList[i].dtoName
                if(showNameTemp.toLowerCase().indexOf($('#dtoName').val().toLowerCase())!==-1){
                    $("#sysLogConfigStorageModel").jqGrid('addRowData', i + 1, showList[i]);
                }
            }
        }
    }
    $("#sysLogConfigStorageModelSaveForm").bind('click',function () {
        var rowId = $('#sysLogConfigStorageModel').jqGrid('getGridParam', 'selrow');
        submitCheckData(rowId);
    })
    function submitCheckData(rowId){
        var rowData = $("#sysLogConfigStorageModel").jqGrid('getRowData',rowId);
        parent.DTOData={
            logConfigClass:rowData.dtoName,
            tableName:rowData.dtoTableName,
            tableDes:rowData.dtoDesc,
            logTitle:rowData.dtoDesc,
        }
        parent.$("#logConfigClassAlias").val(parent.DTOData.tableName)
        parent.$("#logConfigClass").val(parent.DTOData.logConfigClass)
        parent.$("#tableName").val(parent.DTOData.tableName)
        parent.$("#tableDes").val(parent.DTOData.tableDes)
        parent.$("#logTitle").val(parent.DTOData.logTitle)
        parent.layer.close(parent.tableIndex);
    }
    $('#sysLogConfigStorageModelCloseForm').bind('click',function () {
        parent.layer.close(parent.tableIndex);
    })
    $("#dtoName").on('keydown',function(e){
        if(e.keyCode == '13'){
            searchDTO();
        }
    });
    initTable();
</script>
</body>
</html>
