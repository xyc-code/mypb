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
    <title>模型选择</title>
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
    <div class="row-fluid">
        <table id="modelSelectGrid"></table>
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
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/modelSelect.js"></script>
<script type="text/javascript">
    var modelSelect ;

    var dataGridColModel =
        [
            {
                label : 'id',
                name : 'id',
                key : true,
                width : 75,
                hidden: true
            },
            {
                label : '模块名称',
                name : 'tableType',
                width : 75,
                align : 'center'
            },
            {
                label : '中文名称',
                name : 'tableComments',
                width : 75,
                align : 'left'
            },
            {
                label : '英文名称',
                name : 'tableName',
                width : 75,
                align : 'left'
            }
        ]
    $(function (e) {
        //初始化
        modelSelect = new ModelSelect('${modelUrl}',
                                      '${id}',
                                      '${type}',
                                      'modelSelectGrid',
                                      dataGridColModel,
                                      '${moduleName}'

        );
    });

</script>

</html>
