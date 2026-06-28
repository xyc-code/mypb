<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
    <style>
        .ztree li{
            cursor: pointer;
        }


    </style>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'west',split:true,width:fixwidth(.2),onResize:function(a){$(window).trigger('resize');}">
    <div class="row" style="margin: 5px;">
        <div class="input-group  input-group-sm">
            <input  class="form-control" placeholder="回车查询" type="text" id="txt" name="txt">
            <span class="input-group-btn">
			        <button id="searchbtns" class="btn btn-default ztree-search" type="button"><span class="glyphicon glyphicon-search"></span></button>
			      </span>
        </div>

        <div>
            <ul id="treeDemo" class="ztree">
                <c:forEach var="video" items="${videoList}">
                    <li onclick="changeVideo('${video.value}')" ref="${video.value}">${video.key}</li>
                </c:forEach>
            </ul>
        </div>
    </div>
</div>
<div data-options="region:'center',onResize:function(a){$(window).trigger('resize');}">
    <div class="video" style="width: 900px;height: 600px;margin-left:auto;margin-right: auto;">播放器容器</div>

</div>
</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/ckplayer-x2-master/ckplayer/ckplayer.js" charset="utf-8" data-name="ckplayer"></script>
<script type="text/javascript">
    var player;
    $(function(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        //定义一个变量：videoObject，用来做为视频初始化配置
        var videoObject = {
            container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
            variable: 'player', //播放函数名称，该属性必需设置，值等于下面的new ckplayer()的对象
            autoplay: true, //是否自动播放
            flashplayer:isIE,//强制使用flashplayer播放
            poster:"",
            /*video: [//视频地址列表形式
                ['avicit/video/123.mp4', 'video/mp4', '中文标清', 0],
                ['avicit/video/123.mp4', 'video/mp4', '中文高清', 0],
                ['avicit/video/123.mp4', 'video/mp4', '英文高清', 10],
                ['avicit/video/123.mp4', 'video/mp4', '英文超清', 0],
            ]*/
            video: '${playHost}${playUrl}'//视频地址
        };
         player = new ckplayer(videoObject);//初始化播放器


    })

    function changeVideo(videoUrl) {
        if(player == null) {
            return;
        }

        var newVideoObject = {
            container: '#video', //容器的ID
            variable: 'player',
            autoplay: true, //是否自动播放
            loaded: 'loadedHandler', //当播放器加载后执行的函数
            video: videoUrl
        }
        //判断是需要重新加载播放器还是直接换新地址

        if(player.playerType == 'html5video') {
            if(player.getFileExt(videoUrl) == '.flv' || player.getFileExt(videoUrl) == '.m3u8' || player.getFileExt(videoUrl) == '.f4v' || videoUrl.substr(0, 4) == 'rtmp') {
                player.removeChild();

                player = null;
                player = new ckplayer();
                player.embed(newVideoObject);
            } else {
                player.newVideo(newVideoObject);
            }
        } else {
            if(player.getFileExt(videoUrl) == '.mp4' || player.getFileExt(videoUrl) == '.webm' || player.getFileExt(videoUrl) == '.ogg') {
                player = null;
                player = new ckplayer();
                player.embed(newVideoObject);
            } else {
                player.newVideo(newVideoObject);
            }
        }
    }
</script>

</html>

