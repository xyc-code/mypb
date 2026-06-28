<%@page import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<%
String skinsValue =  (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN_TYPE);
if(StringUtils.isEmpty(skinsValue)){
	skinsValue = "blue";
}
//换肤样式
String skinsStyle = (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN);
if(skinsStyle == null){
	skinsStyle= "static/h5/skin/default.css";
}
%>
<html>
<head>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>我的收藏</title>
<link rel="stylesheet" type="text/css" href="static/h5/skin/iconfont/iconfont.css" />
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/todo/todo.css" />
<link id="portlet-skin" rel="stylesheet" href="avicit/platform6/portal/portlet/skin/<%=skinsValue %>-portlet.css">
<link  rel="stylesheet" href="<%=skinsStyle %>">
<link rel="stylesheet" type="text/css" href="static/h5/skin/common.css" />
<script type="text/javascript">
var _bpm_baseurl = "<%=ViewUtil.getRequestPath(request)%>";
</script>
<style type="text/css">
.home-quick-menu li{
	border:0;
	background: #ffffff;
	border-radius: 2px;
	box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    border: 1px solid #e5e5e5\9;
}
</style>
</head>
<body style="background: #eceff4;overflow: hidden;">
	<div class="content-body" style="height: 140px;" id="todo">
		<ul class="home-quick-menu">
			<c:if test="${selectMenuCount > 0}">
				<c:forEach items="${data}" var="collection" varStatus="vs">
					<li>
						<span style="cursor: pointer;" id="li-${collection.menuId}" title="${collection.menuName}"
							onclick="openPersonalItem(this);return false;" rel="${collection.menuUrl}">
							<span class="quick-menu-icon icon0${(vs.index)%10 + 1}">
							<c:choose>
								<c:when test="${collection.menuIcon != null && collection.menuIcon != ''}">
									<i class="${collection.menuIcon}"></i>
								</c:when>
								<c:otherwise>
									<i class="icon iconfont icon-wendang"></i>
								</c:otherwise>
							</c:choose>
							</span>
							<em class="quick-menu-text">${collection.menuName}</em>

						</span>
					</li>
				</c:forEach>
			</c:if>
			<li onclick="mycustomize('${selectMenuCount}')">
				<span class="quick-menu-icon add">
					<i class="icon iconfont icon-add"></i>
				</span>
				<em class="quick-menu-text">添加</em>
			</li>

		</ul>
	</div>
	<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js"></script>
	<script type="text/javascript" src="static/h5/common-ext/avic.ajax.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowButtons.js"></script>
	<!-- jquery-tabs 脚本依赖 -->
	<script type="text/javascript" src="static/h5/jquery-tabs/easyloader.js"></script>
	<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.parser.js"></script>
	<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.linkbutton.js"></script>
	<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.menu.js"></script>
	<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.menubutton.js"></script>
	<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.tabs.js"></script>
	<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.panel.js"></script>
	<script type="text/javascript" src="static/h5/common-ext/window-ext.js"></script>
	<script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js"></script>
	<script type="text/javascript" src="static/h5/perfect-scrollbar/js/divscroll.js"></script>
	<!-- 解决IE图标重绘问题公共js -->
	<script src="avicit/platform6/portal/js/redrawpseudoel.js"></script>
    <script type="text/javascript" src="avicit/platform6/console/portalconfig/collection/js/quickStart.js"></script>
	<script type="text/javascript">
		$("#refresh").on("click", function(){
			quickStart_refresh();
		});
		//刷新本页面
		window.quickStart_refresh = function() {
			var tabType = $(".float-l>.active").attr("_target");
			var url = window.location.href;
			if(url.indexOf("tabType") != -1){
				url = url.replace(/tabType=(.)*/g, "tabType=" + tabType);
			}else{
				if(url.indexOf("?") != -1){
					url = url + "&tabType=" + tabType;
				}else{
					url = url + "?tabType=" + tabType;
				}
			}
			window.location.replace(url);
		};
		$("#more").on("click", function(){
			if(top && top.addTab){
				top.addTab("快速入口", "platform/tocollectionManage");
			}
		});
	</script>
</body>
</html>
