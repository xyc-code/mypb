<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="avicit.platform6.api.session.SessionHelper" %>
<%
String importlibs = "common";	
String loginSysUserId = SessionHelper.getLoginSysUserId(request);
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div class="easyui-layout" fit="true" >
	<ul id="myTab" class="nav nav-tabs">
		<li class="active"><a rel='portal_ifrm' href="#portal" data-toggle="tab">前台菜单</a></li>
		<c:set var='loginSysUserId' value='<%=loginSysUserId%>'></c:set>
		<c:if test="${loginSysUserId eq '1'}">
			<li><a rel='console_ifrm' href="#console" data-toggle="tab">后台菜单</a></li>
		</c:if>
	</ul>
	<div id="myTabContent" class="tab-content">
		<div class="tab-pane fade in active" id="portal" >
			<iframe id='portal_ifrm' name='portal_ifrm' src='' frameborder='0'  style="width:100%;height:100%;"></iframe>
		</div>
		<div class="tab-pane fade" id="console" >
			<iframe id="console_ifrm" name="portal_ifrm" src="" frameborder="0" style="width:100%;height:100%;"></iframe>
		</div>
	</div>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 模块js -->
<!-- <script type="text/javascript" src="avicit/platform6/console/user/js/OrgTree.js" ></script> -->
<script type="text/javascript">

    $(function(){
		document.getElementById('portal_ifrm').src = 'platform/console/authmenu/unified';
        var ifrm={'console_ifrm':'platform/console/authmenu/unified/admin',
                  'portal_ifrm':'platform/console/authmenu/unified'};

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            if(!$('#'+e.target.rel).attr('src')){
                $('#'+e.target.rel).attr('src',ifrm[e.target.rel]);
            }
        });
	});
    $(document).ready(function(){
        $('#portal_ifrm').css("height",document.documentElement.clientHeight - 20);
        $('#console_ifrm').css("height",document.documentElement.clientHeight - 20);
    });
    $(window).resize(function(){
        $('#portal_ifrm').css("height",document.documentElement.clientHeight - 20);
        $('#console_ifrm').css("height",document.documentElement.clientHeight - 20);
    });
</script>
<input type='hidden' id='appId' name='appId' value='${appId}'/>
<input type='hidden' id='orgIdentity' name='orgIdentity' value='${orgIdentity}'/>
</body>
</html>