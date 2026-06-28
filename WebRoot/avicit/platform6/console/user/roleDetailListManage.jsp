<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.api.session.SessionHelper" %>
<%@ page import="avicit.platform6.api.sysshirolog.utils.SecurityUtil" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,form";
    String username = SessionHelper.getLoginName(request);
    Boolean isAdmin = SecurityUtil.isAdministrator(username);
%>
<!DOCTYPE html>
<html>
<head>
    <title>角色列表</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<table id="roleDetailListjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/console/user/js/roleDetailList.js" type="text/javascript"></script>
<script type="text/javascript">
    var isAdmin = "<%=isAdmin%>";
    var viewScopeType = '';
    if (isAdmin == "true") {
        viewScopeType = '';
    } else {
        viewScopeType = 'currentOrg';
    }

    function formatRoleType(cellvalue, options, rowObject) {

        if (cellvalue == "1") {
            return "用户类型";
        } else if (cellvalue == "0") {
            return "系统类型";
        } else {
            return "";
        }
    }

    var rolelist;
    $(document).ready(function () {
            var dataGridColModel = [{
                key: true,
                label: 'id',
                name: 'id',
                width: 75,
                hidden: true
            }, {
                label: 'sysRoleId',
                name: 'sysRoleId',
                width: 70,

                hidden: true

            }, {
                label: '角色名称',
                name: 'roleName',
                width: 150,
                sortable: false
            }
            ];
            rolelist = new roleDetailList('roleDetailListjqGrid', 'platform/console/user/getMapUserRole?id=' + '${id}', dataGridColModel, '${id}');
        });
</script>
</html>