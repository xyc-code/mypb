<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
    String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
</head>
<body>
<video id="really-cool-video" controls poster="" height="500px" width="500px">
    <embed id="videobyIe" src="avicit/video/123.mp4" muted preload="auto" controls="" autoplay="auto-play" type="video/mp4" >
    <source id="videoNotIe"  src="avicit/video/123.mp4"  type="video/mp4">
</video>
</body>
</html>
