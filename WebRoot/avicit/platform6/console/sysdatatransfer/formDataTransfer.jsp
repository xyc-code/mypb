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
    <title>表单及视图选择</title>
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
                                <input class="form-control" placeholder="请输入表单/模块名称查询条件" type="text" id="search_model"
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
                <div class="jqgrid-other" style="overflow-y: auto;">
                    <ul id="formDataMenu" class="ztree" style='overflow: auto;height: 100%; width: 100%;'></ul>
                </div>
            </div>
        </div>
        <div class="row-add" style="border-top: 1px solid #e8e8e8;width:33.3%;">
            <div class="container-fluid" style="padding: 0px;">
                <div class="row-fluid jqgrid-context" style="overflow-y: hidden;border-bottom: 4px solid #f3f4f9;">
                    <div style="border-bottom: 1px solid #e8e8e8;">
                        <div id="PreTableToolbarCenter" class="toolbar" style="padding-left: 10px;">
                            <div class="toolbar-left selected-check-all">
                                <input type="checkbox" id="preCheckAll" title="全选"/>
                                <span id="preFormCheckboxTitle" class="role-checkbox-title">候选表单</span>
                            </div>
                            <div class="toolbar-right role-delete-all">
                                <table>
                                    <tr width="80%">
                                        <td>
                                            <div class="input-group  input-group-sm"
                                                 style="width: 240px;padding-left: 10px;padding-right: 8px;">
                                                <input class="form-control" placeholder="请输入表单名称" type="text" id="search_form"
                                                       name="search_form" />
                                                <span class="input-group-btn">
                                                <button id="searchBtn_form" class="btn btn-default ztree-search" type="button" >
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
                    <div id="preReload" class="jqgrid-table" style="overflow-y: hidden;">
                        <div id = "nodata" style="display: none">
                            <img style="width: 54px; margin-top: 16%;margin-left:40%;" src="avicit/platform6/console/dashboard/images/no-data.png" />
                            <p style="margin-left:42%;margin-top:4px;">暂无数据</p>
                        </div>
                        <div id = "table">
                            <table id="preFormDataJqgrid"></table>
                        </div>
                    </div>
                    <div id="preFormDataJqgridPager"></div>
                </div>
                <div class="row-fluid jqgrid-context" style="overflow-y: hidden;">
                    <div style="border-bottom: 1px solid #e8e8e8;">
                        <div id="PreViewTableToolbarCenter" class="toolbar" style="padding-left: 10px;">
                            <div class="toolbar-left selected-check-all">
                                <input type="checkbox" id="preCheckViewAll" title="全选"/>
                                <span id="preViewCheckboxTitle" class="role-checkbox-title">候选视图</span>
                            </div>
                            <div class="toolbar-right role-delete-all">
                                <table>
                                    <tr width="80%">
                                        <td>
                                            <div class="input-group  input-group-sm"
                                                 style="width: 240px;padding-left: 10px;padding-right: 8px;">
                                                <input class="form-control" placeholder="请输入视图名称" type="text" id="search_view"
                                                       name="search_view" />
                                                <span class="input-group-btn">
                                                <button id="searchBtn_view" class="btn btn-default ztree-search" type="button" >
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
                    <div id="preViewReload" class="jqgrid-table" style="overflow-y: auto;">
                        <div id = "nodataview" style="display: none">
                            <img style="width: 54px; margin-top: 16%;margin-left:40%;" src="avicit/platform6/console/dashboard/images/no-data.png" />
                            <p style="margin-left:42%;margin-top:4px;">暂无数据</p>
                        </div>
                        <div id = "tableview">
                            <table id="preViewDataJqgrid"></table>
                        </div>
                    </div>
                    <div id="preViewDataJqgridPager"></div>
                </div>
            </div>
        </div>
        <div class="row-add move-list" style="border-top: none;width:8.3%;">
            <div class="c-list-right">
                <i class="icon iconfont icon-right2"></i>
            </div>
        </div>
        <div class="row-add" style="border-top: 1px solid #DCE2E8;width:33.3%;">
            <div class="container-fluid" style="padding: 0px;">
                <div class="row-fluid jqgrid-context" style="overflow-y: hidden;border-bottom: 4px solid #f3f4f9;">
                    <div style="border-bottom: 1px solid #D8D8D8;">
                        <div id="selectedTableToolbarCenter" class="toolbar">
                            <div class="toolbar-left selected-check-all">
                                <input type="checkbox" id="selectedCheckAll" title="全选"/>
                                <span id="selectedCheckboxTitle" class="role-checkbox-title">已选表单（0）</span>
                                <span id="selectedPanelTitle" class="selected-panel-title"></span>
                            </div>
                            <div class="toolbar-right role-delete-all">
                                <label id="selectedDeleteAll" class="glyphicon glyphicon-trash" title="删除选中"></label>
                            </div>
                        </div>
                    </div>
                    <div id="reloadSelected" class="jqgrid-table" style="overflow-y: auto;">
                        <table id="jqGridSelected"></table>
                    </div>
                </div>
                <div class="row-fluid jqgrid-context" style="overflow-y: hidden;">
                    <div style="border-bottom: 1px solid #D8D8D8;">
                        <div id="selectedViewTableToolbarCenter" class="toolbar">
                            <div class="toolbar-left selected-check-all">
                                <input type="checkbox" id="selectedViewCheckAll" title="全选"/>
                                <span id="selectedViewCheckboxTitle" class="role-checkbox-title">已选视图（0）</span>
                                <span id="selectedViewPanelTitle" class="selected-panel-title"></span>
                            </div>
                            <div class="toolbar-right role-delete-all">
                                <label id="selectedViewDeleteAll" class="glyphicon glyphicon-trash" title="删除选中"></label>
                            </div>
                        </div>
                    </div>
                    <div id="reloadViewSelected " class="jqgrid-table" style="overflow-y: auto;">
                        <table id="jqGridViewSelected"></table>
                    </div>
                </div>
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
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/formDataTransferJs.js"></script>
<script type="text/javascript">
    var formModel;
    var formDbTables = [];
    var viewDbTables = [];
    var isInitGrid = false;
    var isInitViewGrid = false;

    function reSetHight(){
        $('.transfer-flow .row-add').height(document.documentElement.clientHeight - 20);
        $('.jqgrid-context').height((document.documentElement.clientHeight - 20)/2);
        $('.jqgrid-table').height((document.documentElement.clientHeight - 20)/2 -60);
        $('.jqgrid-other').height(document.documentElement.clientHeight - 80);
    }

    $(window).resize(function (){
        reSetHight();
    });
    /*初始化流程模型树*/
    var formDataTransferJs;

    $(function (e) {
        reSetHight();
        formDataTransferJs = new FormDataTransferJs('sysDataTransfer/formModelTransferController/getEformTypeTree','sysDataTransfer/formModelTransferController/getFormViewByComId','formDataMenu','preFormDataJqgrid','jqGridSelected');
        //表单候选区全选
        $('#preCheckAll').on('click',function (e) {
            formDataTransferJs.checkAllFormList($('#preCheckAll'));
        });
        //表单已选区全选
        $('#selectedCheckAll').on('click',function (e) {
            formDataTransferJs.checkedAllFormList($('#selectedCheckAll'));
        });

        //视图候选区全选
        $('#preCheckViewAll').on('click',function (e) {
            formDataTransferJs.checkAllViewList($('#preCheckViewAll'));
        });
        //视图已选区全选
        $('#selectedViewCheckAll').on('click',function (e) {
            formDataTransferJs.checkedAllViewList($('#selectedViewCheckAll'));
        });

        //全部删除
        $('#selectedDeleteAll').on('click',function (e){
            formDataTransferJs.removeAllSelect();
        });

        //全部删除
        $('#selectedViewDeleteAll').on('click',function (e){
            formDataTransferJs.removeAllViewSelect();
        });

        //快速查询
        $('#search_model').on('keyup',function(e){
            if(e.keyCode == 13){
                formDataTransferJs.onseach($('#search_model').val());
            }
        });
        $('#searchBtn_model').on('click',function(e){
            formDataTransferJs.onseach($('#search_model').val());
        });
    })
</script>

</html>
