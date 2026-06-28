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
<link rel="stylesheet" type="text/css" href="static/h5/bootstrap/3.3.4/css_default/bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/todo/todo.css" />
<link id="portlet-skin" rel="stylesheet" href="avicit/platform6/portal/portlet/skin/<%=skinsValue %>-portlet.css">
<link  rel="stylesheet" href="<%=skinsStyle %>">
<link rel="stylesheet" type="text/css" href="static/h5/skin/common.css" />
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/tabs.css">
<link rel="stylesheet" type="text/css"
	href="avicit/platform6/portal/themes/dasimple/css/index.css">
<script type="text/javascript">
var _bpm_baseurl = "<%=ViewUtil.getRequestPath(request)%>";
</script>
<style>
.title{
  max-width:98%;
}
html,body{
 min-width:100%;
}
.ksrk{
margin-left: 0;
     margin-top: 0px;
     box-shadow: none; 

}
a:hover{
 text-decoration:none;
}
a{
 text-decoration:none;
}

.list-content {
    width: 100%;
    height: 138px;
    /* background-image: linear-gradient(0deg, #FFF3EB 0%, rgba(255,255,255,0.88) 60%, #FFFFFF 100%); 
    background-image:none;*/
    background-color:#FFFFFF;
    filter:progid:DXimageTransform.Microsoft.grandient(startColorstr='#FFF3EB',endColorstr='#FFFFFF',GradientType=0);
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);	
    border-radius: 4px;
    border-radius: 4px;
    text-align: center;
}
</style>
</head>
<body style="background: #fff;overflow: hidden;">
	<div class="content-body  ksrk" style="" id="todo">
	<div class="title"><p><img src="avicit/platform6/portal/themes/dasimple/img/ksrk1.png"></p><span><a style="color:#333333" href="javascript:void(0)">查看更多<i style="margin-left: 8px;"><img src="avicit/platform6/portal/themes/dasimple/img/icon_04gd.png"></i></a></span></div>
		<div class="QUICK-ENTRY" >
		<ul class="">
				<li><div class="list-content">
				<a onclick="window.open('<%=ViewUtil.getRequestPath(request)%>eform/bpmsCRUDClient/toViewJsp/tzggzs','XX','left=0,top=0,width='+(screen.availWidth-10)+',height='+(screen.availHight)+',scrollbars,resizable=yes,toolbar=no')" href="javascript:void(0)"><i>
				<img src="avicit/platform6/portal/portlet/img/tz.png">
				</i><p>通知公告</p></a></div></li>
				<li><div class="list-content">
				<a onclick="window.open('<%=ViewUtil.getRequestPath(request)%>avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationTelManage','XX','left=0,top=0,width='+(screen.availWidth-10)+',height='+(screen.availHight)+',scrollbars,resizable=yes,toolbar=no')" href="javascript:void(0)"><i>
				<img src="avicit/platform6/portal/portlet/img/lc.png">
				</i><p>通讯录</p></a></div></li>
				<li><div class="list-content">
				<a onclick="window.open('http://20.14.3.142:8095/tempo-bi-runtime/publish/show/5a87e1e00b144d8a9f316968f63d93f2/b03ba4509e1a48c0b7b8e7cf17ef7a7e','XX','left=0,top=0,width='+(screen.availWidth-10)+',height='+(screen.availHight)+',scrollbars,resizable=yes,toolbar=no')" href="javascript:void(0)"><i>
					<img src="avicit/platform6/portal/portlet/img/dy.png">
				</i><p>党建大屏</p></a></div></li>
		</ul>
		</div>		
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
	<!-- <script type="text/javascript" src="avicit/platform6/portal/js/effect.js"></script> -->
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
		function openMainFrame(title,url,id){
			//tab标题长度大于10个字符,截取前10个,后面的显示为...
			var preTitle = title;
			if(title != null && title != '' && title != undefined ){
				if(title.length > 10){
					title = title.substr(0,10) + "...";
				}
			}
			if(!url) return;
			var exist=false;
			var tabIndex=0;
			var allTabs=top.$('#tabs-panel').tabs('tabs');
			for(var i=0;i<allTabs.length;i++){
				var tab=allTabs[i];
				if(tab.attr("id")==id){
					exist=true;
					tabIndex=top.$('#tabs-panel').tabs('getTabIndex',tab);
					break ;
				};
			}
			if (!exist && url != undefined && url != "") {
				top.$('#tabs-panel').tabs('add', {
					title: title,
					content:  '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
					closable: true
				});
			} else {
				top.$('#tabs-panel').tabs('select', tabIndex); //匹配到title，就显示这个窗口
			}
			//获取当前添加的tab并增加title属性
			var currentTab = top.$('#tabs-panel').tabs('getSelected');
			if(currentTab != null && currentTab != '' && currentTab != undefined){
				currentTab.attr("title",preTitle);
				currentTab.attr("id",id);
			}
			$('.tabs-icon').remove();
		}
	</script>
</body>
</html>
