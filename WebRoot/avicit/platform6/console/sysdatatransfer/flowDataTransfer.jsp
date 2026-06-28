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
	<title>流程选择</title>
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
<style>
</style>
<body>
    <div class="container-fluid">
        <div class="row transfer-flow">
            <div class=" row-add" style="border-top: 1px solid #DCE2E8;width:25%;">
                <div style="padding: 10px 0 0 5px; height: 100%; width: 100%;">
                    <table>
                        <tr width="100%">
                            <td>
                                <div class="input-group  input-group-sm" style="width: 250px;padding-left: 10px;padding-right: 8px;">
                                    <input class="form-control" placeholder="请输入模型名称查询条件" type="text" id="search_model"
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
                        <ul id="flowDataMenu" class="ztree" style='overflow: auto;height: 100%; width: 100%;'></ul>
                    </div>
                </div>
            </div>
            <div class=" row-add" style="border-top: 1px solid #e8e8e8;width:33.3%;">
                <div style="border-bottom: 1px solid #e8e8e8;">
                    <div id="PreTableToolbarCenter" class="toolbar" style="padding-left: 10px;">
                        <div class="toolbar-left selected-check-all">
                            <input type="checkbox" id="preCheckAll" title="全选"/>
                            <span id="preCheckboxTitle" class="role-checkbox-title">候选流程</span>
                        </div>
                        <div class="toolbar-right role-delete-all">
                            <table>
                                <tr width="80%">
                                    <td>
                                        <div class="input-group  input-group-sm"
                                             style="width: 240px;padding-left: 10px;padding-right: 8px;">
                                            <input class="form-control" placeholder="请输入流程名称查询条件" type="text" id="search_flow"
                                                   name="search_flow" />
                                            <span class="input-group-btn">
                                                <button id="searchBtn_flow" class="btn btn-default ztree-search" type="button" >
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
                <div id="preReload" class="jqgrid-context" style="overflow-y: hidden;">
                    <div id = "nodata" style="display: none">
                        <img style="width: 54px; margin-top: 16%;margin-left:40%;" src="avicit/platform6/console/dashboard/images/no-data.png" />
                        <p style="margin-left:42%;margin-top:4px;">暂无数据</p>
                    </div>
                    <div id = "table">
                        <table id="preFlowDataJqgrid"></table>
                    </div>
                </div>
                <div id="preFormDataJqgridPager"></div>
            </div>
            <div class=" move-list row-add" style="border-top: none;width:8.3%;">
                <div class="c-list-right">
                    <i class="icon iconfont icon-right2"></i>
                </div>
            </div>
            <div class=" row-add" style="border-top: 1px solid #e8e8e8;width:33.3%;">
                <div style="border-bottom: 1px solid #e8e8e8;">
                    <div id="selectedTableToolbarCenter" class="toolbar">
                        <div class="toolbar-left selected-check-all">
                            <input type="checkbox" id="selectedCheckAll" title="全选"/>
                            <span id="selectedCheckboxTitle" class="role-checkbox-title">已选流程（0）</span>
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
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/flowDataTransferJs.js"></script>
<script type="text/javascript">
    var flowModel;
    var isInitGrid = false;
    function reSetHight(){
        $('.transfer-flow .row-add').height(document.documentElement.clientHeight - 20);
        $('.jqgrid-context').height(document.documentElement.clientHeight - 80);
    };

    $(window).resize(function (){
        reSetHight();
    });

    /*初始化流程模型树*/
    var flowDataTransferJs;

    $(function (e) {
        reSetHight();
        //flowDataTransferJs = new FlowDataTransferJs('bpm/deploy/getFlowTypeTree','bpm/deploy/searchFlowModelByPage','flowDataMenu','preFlowDataJqgrid','jqGridSelected');
        flowDataTransferJs = new FlowDataTransferJs('bpm/deploy/getFlowTypeTree','sysDataTransfer/flowModelTransferController/getPrcessPublishByPage','flowDataMenu','preFlowDataJqgrid','jqGridSelected');
        //全选
        $('#preCheckAll').on('click',function (e) {
            flowDataTransferJs.checkAllFlowList($('#preCheckAll'));
        });
        //反全选
        $('#selectedCheckAll').on('click',function (e) {
            flowDataTransferJs.checkedAllFlowList($('#selectedCheckAll'));
        });
        //全部删除
        $('#selectedDeleteAll').on('click',function (e){
            flowDataTransferJs.removeAllSelect();
        });
    })
</script>

</html>