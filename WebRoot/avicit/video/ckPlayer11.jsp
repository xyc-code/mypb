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
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>

<body class="easyui-layout" fit="true">
    <div data-options="region:'west',split:true,width:fixwidth(.2),onResize:function(a){$(window).trigger('resize');}">
    <ul>
        <li>13123123</li>
        <li>13123123</li>
        <li>13123123</li>
        <li>13123123</li>
        <li>13123123</li>
        <li>13123123</li>
        <li>13123123</li>
    </ul>
    </div>
    <div data-options="region:'center',onResize:function(a){$(window).trigger('resize');}">
        <div class="video" style="width: 900px;height: 600px;margin-left:auto;margin-right: auto;">播放器容器</div>
    </div>
</body>
<script type="text/javascript" src="avicit/platform6/console/dashboard/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="static/ckplayer-x2-master/ckplayer/ckplayer.js" charset="utf-8" data-name="ckplayer"></script>
<script type="text/javascript">


    $(function(){


        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器

        //定义一个变量：videoObject，用来做为视频初始化配置
        var videoObject = {
            container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
            variable: 'player', //播放函数名称，该属性必需设置，值等于下面的new ckplayer()的对象
            debug:false,
            flashplayer:isIE,//强制使用flashplayer播放
            poster:'avicit/platform6/console/demostorage/portal/projectmanage/index/image/daib.png',
            /*video: [//视频地址列表形式
                ['avicit/video/123.mp4', 'video/mp4', '中文标清', 0],
                ['avicit/video/123.mp4', 'video/mp4', '中文高清', 0],
                ['avicit/video/123.mp4', 'video/mp4', '英文高清', 10],
                ['avicit/video/123.mp4', 'video/mp4', '英文超清', 0],
            ]*/
            video: 'http://localhost/player/SECRETLEVEL_1/group/file2c908c528ee55866018ee56418100a18/2c908c528f1436ac018f143853a409f2.mp4'//视频地址
        };
        var player = new ckplayer(videoObject);//初始化播放器
    })



</script>

</html>
