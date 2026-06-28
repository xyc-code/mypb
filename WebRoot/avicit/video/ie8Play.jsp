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
    <link rel="stylesheet" href="static/videojs/video-js.min.css" />
    <script src="static/videojs/ie8/videojs-ie8.min.js"></script>
    <script src="static/videojs/video.min.js"></script>
    <script type="text/javascript">
        videojs.options.flash.swf='static/videojs/video-js.swf'
    </script>
</head>
<body>
<video id="really-cool-video" class="video-js vjs-default-skin" controls="controls" preload="none" autoplay="autoplay" data-setup="{}"  height="500px" width="500px">

    <source id="videoNotIe"  src="http://localhost/player/123.mp4"  type="video/mp4">
</video>


</body>
</html>
