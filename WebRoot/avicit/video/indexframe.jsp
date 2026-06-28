<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>声像首页</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<c:forEach var="obj" items="${videoYear}">
<div><iframe width="100%" height="450px" frameborder="no"  src="avicit/video/videoPlayerController/toPlayerIndexList?videoYear=${obj.CUR_YEAR}&rows=${rows}"></iframe></div>
</c:forEach>
</body>
</html>
