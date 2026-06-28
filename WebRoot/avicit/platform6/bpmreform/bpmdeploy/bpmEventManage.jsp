<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>流程事件管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div id="north1" data-options="region:'north',split:true,title:'事件注册'" style="height:300px;overflow-x:hidden;">
    <div id="toolbar_bpmEvent" class="toolbar">
        <div class="toolbar-left">
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="bpmEvent_button_add"
                                   permissionDes="主表添加">
                <a id="bpmEvent_insert" href="javascript:void(0)"
                   class="btn btn-default form-tool-btn typeb btn-sm" role="button"
                   title="添加"><i class="icon icon-add"></i> 添加</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="bpmEvent_button_edit"
                                   permissionDes="主表编辑">
                <a id="bpmEvent_modify" href="javascript:void(0)"
                   class="btn btn-default form-tool-btn btn-sm" role="button"
                   title="编辑"><i class="icon icon-edit"></i> 编辑</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="bpmEvent_button_delete"
                                   permissionDes="主表删除">
                <a id="bpmEvent_del" href="javascript:void(0)"
                   class="btn btn-default form-tool-btn btn-sm" role="button"
                   title="删除"><i class="icon icon-delete"></i> 删除</a>
            </sec:accesscontrollist>
            <a id="bpmEvent_import" href="javascript:void(0)"
               class="btn btn-primary form-tool-btn btn-sm" role="button"
               title="导入"><i class="icon icon-daoru"></i> 导入</a>

            <a id="bpmEvent_export" href="javascript:void(0)"
               class="btn btn-primary form-tool-btn btn-sm" role="button"
               title="导出"><i class="icon icon-daochu"></i> 导出</a>
        </div>
        <div class="toolbar-right">
            <div class="input-group form-tool-search" style="width:200px">
                <input type="text" name="bpmEvent_keyWord" id="bpmEvent_keyWord" style="width:200px;" class="form-control input-sm" placeholder="请输入事件名称或类型">
                <label id="bpmEvent_searchPart" class="icon icon-search form-tool-searchicon"></label>
            </div>
        </div>
    </div>
    <table id="bpmEvent"></table>
    <div id="bpmEventPager"></div>
</div>
<div id= "north2" data-options="region:'center',split:true,title:'参数注册'" style="padding:0px;">
    <div id="toolbar_bpmEventProperties" class="toolbar">
        <div class="toolbar-left">
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="bpmEventProperties_button_add"
                                   permissionDes="子表添加">
                <a id="bpmEventProperties_insert" href="javascript:void(0)"
                   class="btn btn-default form-tool-btn typeb btn-sm" role="button"
                   title="添加"><i class="icon icon-add"></i> 添加</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="bpmEventProperties_button_edit"
                                   permissionDes="子表编辑">
                <a id="bpmEventProperties_modify" href="javascript:void(0)"
                   class="btn btn-default form-tool-btn btn-sm" role="button"
                   title="编辑"><i class="icon icon-edit"></i> 编辑</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="bpmEventProperties_button_delete"
                                   permissionDes="子表删除">
                <a id="bpmEventProperties_del" href="javascript:void(0)"
                   class="btn btn-default form-tool-btn btn-sm" role="button"
                   title="删除"><i class="icon icon-delete"></i> 删除</a>
            </sec:accesscontrollist>
        </div>
        <%--<div class="toolbar-right">
            <div class="input-group form-tool-search" style="width:200px">
                <input type="text" name="bpmEventProperties_keyWord" id="bpmEventProperties_keyWord" style="width:200px;" class="form-control input-sm" >
                <label id="bpmEventProperties_searchPart" class="icon icon-search form-tool-searchicon"></label>
            </div>
        </div>--%>
    </div>
    <table id="bpmEventProperties"></table>
    <div id="bpmEventPropertiesPager"></div>
</div>
</body>


<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script
        src="avicit/platform6/bpmreform/bpmdeploy/js/BpmEvent.js"
        type="text/javascript"></script>
<script
        src="avicit/platform6/bpmreform/bpmdeploy/js/BpmEventProperties.js"
        type="text/javascript"></script>
<script type="text/javascript" src="static/js/platform/component/common/exportData.js"></script>
<script type="text/javascript">
    var bpmEvent;
    var bpmEventProperties;
    function formatDateForHref(cellvalue, options, rowObject) {
        var thisDate = format(cellvalue);
        return '<a href="javascript:void(0);" onclick="bpmEvent.detail(\''
            + rowObject.id + '\');">' + thisDate + '</a>';
    }

    $(document).ready(function() {

        var searchMainNames = [];
        var searchMainTips = [];
        searchMainNames.push("name");
        searchMainTips.push("事件名称");
        searchMainNames.push("path");
        searchMainTips.push("事件类路径");
        var searchMainC = searchMainTips.length==2?'或' + searchMainTips[1] : "";
        $('#bpmEvent_keyWord').attr('placeholder','请输入' + searchMainTips[0] + searchMainC);
       /* var searchSubNames = [];
        var searchSubTips = [];
        searchSubNames.push("name");
        searchSubTips.push("常量名");
        searchSubNames.push("initExpr");
        searchSubTips.push("常量值");
        var searchSubC = searchSubTips.length==2?'或' + searchSubTips[1] : "";
        $('#bpmEventProperties_keyWord').attr('placeholder','请输入' + searchSubTips[0] + searchSubC);*/

        var eventGridColModel = [ {
            label : 'dbid',
            name : 'dbid',
            key : true,
            width : 75,
            hidden : true
        }, {
            label : '事件名称',
            name : 'name',
            width : 100,
            sortable : false
        }, {
            label : '事件类路径',
            name : 'path',
            width : 200,
            sortable : false
        }, {
            label : '类型',
            name : 'type',
            width : 60,
            sortable : false
        }, {
            label : '描述',
            name : 'remark',
            width : 100,
            sortable : false
        }, {
            label : '排序',
            name : 'orderBy',
            width : 50,
            sortable : false
        }
        ];
        var eventPropertiesGridColModel = [ {
            label : 'dbid',
            name : 'dbid',
            key : true,
            width : 75,
            hidden : true
        }, {
            label : '常量名',
            name : 'name',
            width : 100,
            sortable : false
        }, {
            label : '常量值',
            name : 'initExpr',
            width : 50,
            sortable : false
        }, {
            label : '描述',
            name : 'remark',
            width : 60,
            sortable : false
        }, {
            label : '排序',
            name : 'orderBy',
            width : 50,
            sortable : false
        }
        ];

        bpmEvent = new BpmEvent('bpmEvent', '${url}',
            '', eventGridColModel, '',
            function(pid) {
                bpmEventProperties = new BpmEventProperties('bpmEvent','bpmEventProperties',
                    '${surl}', "",
                    eventPropertiesGridColModel,
                    '', pid,'',
                    '');
            }, function(pid) {
                bpmEventProperties.reLoad(pid);
            },searchMainNames, 'bpmEvent_keyWord');
        //主表操作
        //添加按钮绑定事件
        $('#bpmEvent_insert').bind('click', function() {
            bpmEvent.insert();
        });
        //编辑按钮绑定事件
        $('#bpmEvent_modify').bind('click', function() {
            bpmEvent.modify();
        });
        //删除按钮绑定事件
        $('#bpmEvent_del').bind('click', function() {
            bpmEvent.del();
        });
        //导入按钮绑定事件
        $('#bpmEvent_import').bind('click', function() {
            bpmEvent.doimport();
        });
        //导出按钮绑定事件
        $('#bpmEvent_export').bind('click', function() {
            bpmEvent.doexport();
        });
        //打开高级查询框
        $('#bpmEvent_searchAll').bind('click', function() {
            bpmEvent.openSearchForm(this, $('#bpmEvent'));
        });
        //关键字段查询按钮绑定事件
        $('#bpmEvent_searchPart').bind('click', function() {
            bpmEvent.searchByKeyWord();
        });
        //子表操作
        //添加按钮绑定事件
        $('#bpmEventProperties_insert').bind('click', function() {
            bpmEventProperties.insert();
        });
        //编辑按钮绑定事件
        $('#bpmEventProperties_modify').bind('click', function() {
            bpmEventProperties.modify();
        });
        //删除按钮绑定事件
        $('#bpmEventProperties_del').bind('click', function() {
            bpmEventProperties.del();
        });
        //打开高级查询
        $('#bpmEventProperties_searchAll').bind('click', function() {
            bpmEventProperties.openSearchForm(this, $('#bpmEventProperties'));
        });
        //关键字段查询按钮绑定事件
        $('#bpmEventProperties_searchPart').bind('click', function() {
            bpmEventProperties.searchByKeyWord();
        });

    });
</script>
</html>
