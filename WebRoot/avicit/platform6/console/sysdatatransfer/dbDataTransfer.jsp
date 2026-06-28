<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,tree,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>表模型选择</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/bootstrap/3.3.4/css_default/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/h5component/common/commonselect.css"/>
    <link rel="stylesheet" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/style.css">
    <link rel="stylesheet" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/reset.css">
    <link rel="stylesheet" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/comment.css">
    <link rel="stylesheet" href="avicit/platform6/console/sysdatatransfer/css/transferStyle.css">
    <style type="text/css">
    </style>
</head>
<body>
<div class="container-fluid">
    <div class="row transfer-flow">
        <div class="row-add" style="border-top: 1px solid #DCE2E8;width:25%;">
            <div style="padding: 10px 0 0 5px; height: 100%; width: 100%;">
                <table>
                    <tr width="100%">
                        <td>
                            <div class="input-group  input-group-sm" style="width: 250px;padding-left: 10px;padding-right: 8px;">
                                <input class="form-control" placeholder="请输入存储模型分类" type="text" id="search_model"
                                       name="search_model" />
                                <span class="input-group-btn">
                                        <button id="searchBtn_model" class="btn btn-default ztree-search" type="button" >
                                            <span class="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                            </div>
                        </td>
                    </tr>
                </table>
                <div  class="jqgrid-context" style="overflow-y: auto;">
                    <ul id="dbDataMenu" class="ztree" style='overflow: auto;height: 100%; width: 100%;'></ul>
                </div>
            </div>
        </div>
        <div class="row-add" style="border-top: 1px solid #e8e8e8;width:33.3%;">
            <div style="border-bottom: 1px solid #e8e8e8;">
                <div id="PreTableToolbarCenter" class="toolbar" style="padding-left: 10px;">
                    <div class="toolbar-left selected-check-all">
                        <input type="checkbox" id="preCheckAll" title="全选"/>
                        <span id="preCheckboxTitle" class="role-checkbox-title">候选表模型</span>
                    </div>
                    <div class="toolbar-right role-delete-all">
                        <table>
                            <tr width="80%">
                                <td>
                                    <div class="input-group  input-group-sm"
                                         style="width: 240px;padding-left: 10px;padding-right: 8px;">
                                        <input class="form-control" placeholder="请输入存储模型名称" type="text" id="search_db"
                                               name="search_flow" />
                                        <span class="input-group-btn">
                                                <button id="searchBtn_db" class="btn btn-default ztree-search" type="button" >
                                                    <span
                                                            class="glyphicon glyphicon-search">
                                                    </span>
                                                </button>
                                            </span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div id="preReload" class="jqgrid-context" style="overflow-y: auto;">
                <div style="display: none" id = "nodata">
                    <img style="width: 54px; margin-top: 16%;margin-left:40%;" src="avicit/platform6/console/dashboard/images/no-data.png" />
                    <p style="margin-left:42%;margin-top:4px;">暂无数据</p>
                </div>
                <div id = "table">
                    <table id="preDbDataJqgrid"></table>
                </div>
            </div>
            <div id="preDbDataJqgridPager"></div>
        </div>
        <div class="row-add move-list" style="border-top: none;width:8.3%;">
            <div class="c-list-right">
                <i class="icon iconfont icon-right2"></i>
            </div>
        </div>
        <div class="row-add" style="border-top: 1px solid #e8e8e8;width:33.3%;">
            <div style="border-bottom: 1px solid #e8e8e8;">
                <div id="selectedTableToolbarCenter" class="toolbar">
                    <div class="toolbar-left selected-check-all">
                        <input type="checkbox" id="selectedCheckAll" title="全选"/>
                        <span id="selectedCheckboxTitle" class="role-checkbox-title">已选表模型（0）</span>
                        <span id="selectedPanelTitle" class="selected-panel-title"></span>
                    </div>
                    <div class="toolbar-right role-delete-all">
                        <label id="selectedDeleteAll" class="glyphicon glyphicon-trash" title="删除选中"></label>
                    </div>
                </div>
            </div>
            <div id="reloadSelected" class="jqgrid-context" style="overflow-y: auto;">
                <table id="jqGridSelected"></table>
            </div>
        </div>
    </div>
</div>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/js/platform/eform/widget.js"></script>
<script src="static/js/platform/eform/mouse.js"></script>
<script src="static/js/platform/eform/sortable.js"></script>
<script src="static/js/platform/eform/jquery-ui.min.js"></script>
<script type="text/javascript" src="static/h5/bootstrap/3.3.4/js/bootstrap.js"></script>
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/transferJs.js"></script>
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/dbDataTransferJs.js"></script>
<script type="text/javascript">
    var dbModel;
    var isInitGrid = false;

    function reSetHight(){
        $('.transfer-flow .row-add').height(document.documentElement.clientHeight - 20);
        $('.jqgrid-context').height(document.documentElement.clientHeight - 80);
    };

    $(window).resize(function (){
        reSetHight();
    });
    /*初始化流程模型树*/
    var dbDataTransferJs;

    $(function (e) {
        reSetHight();
        dbDataTransferJs = new DbDataTransferJs('platform/db/dbTableManageController/getDbTableTypeTree','platform/db/dbTableManageController/getDbTableByPage','dbDataMenu','preDbDataJqgrid','jqGridSelected');
        $('#preCheckAll').on('click',function (e) {
            dbDataTransferJs.checkAllDbList($('#preCheckAll'));
        });
        $('#selectedCheckAll').on('click',function (e) {
            dbDataTransferJs.checkedAllDbList($('#selectedCheckAll'));
        });

        //全部删除
        $('#selectedDeleteAll').on('click',function (e){
            dbDataTransferJs.removeAllSelect();
        });

        //快速查询
        $("#search_model").on('keyup',function(e){
            if(e.keyCode == 13){
                dbDataTransferJs.onseach(13,$("#search_model").val());
            }
        });
        $("#searchBtn_model").on('click',function(e){
            dbDataTransferJs.onseach(13,$("#search_model").val());
        });
    })
</script>

</html>
