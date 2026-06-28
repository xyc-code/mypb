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
    <title>JS文件扩展</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
    <style>
        .ui-jqgrid-bdiv div{
            overflow-x: hidden;
        }

        .ui-jqgrid tr.jqgrow td { text-overflow : ellipsis;    overflow: hidden !important; }
    </style>
    <script>
        var baseUrl = "<%=ViewUtil.getRequestPath(request)%>";
    </script>
</head>

<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false" style="overflow: hidden; width: 100%; height: 100%;">
    <div id="tableToolbar" class="tollbar">
        <div class="toolbar-left">
            <a id="jslist_insert" href="javascript:void(0)" style="margin-left: 5px;"
               class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
               title="添加"><i class="fa fa-plus"></i> 添加</a>
            <a id="jslist_del" href="javascript:void(0)"
               class="btn btn-primary form-tool-btn btn-sm" role="button"
               title="删除"><i class="fa fa-trash-o"></i> 删除</a>
        </div>
    </div>
    <table id="propertytable"></table>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/js/platform/eform/common.js"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js"></script>
<script type="text/javascript" src="avicit/platform6/eform/formdesign/js/plugins/url-box/urlmapping.js"></script>
<link rel="stylesheet" type="text/css"  href="static/h5/jquery-select2/3.5.4/select2.css" />
<script src="static/h5/jquery-select2/3.5.4/select2.min.js"></script>
<script src="static/h5/jquery-select2/3.5.4/select2.js" ></script>
</body>

</html>