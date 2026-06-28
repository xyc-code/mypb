<%@page import="org.apache.commons.lang3.StringUtils"%>
<%@page import="avicit.platform6.api.session.SessionHelper"%>
<%@page language="java" pageEncoding="UTF-8"
	contentType="text/html; charset=UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="avicit.platform6.core.properties.PlatformConstant"%>
<%@ page import="avicit.platform6.core.properties.PlatformProperties"%>
<%@page import="avicit.platform6.api.session.SessionHelper"%>
<%@page import="avicit.platform6.api.session.SessionHelper"%>
<%@page import="avicit.platform6.api.sysuser.dto.SysUser"%>
<%@page import="avicit.platform6.api.sysuser.SysOrgAPI"%>
<%@page import="avicit.platform6.core.spring.CacheSpringFactory"%>
<%@page
	import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess"%>
<%@page import="avicit.platform6.api.sysprofile.SysProfileAPI"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%	
//控制全文检索是否显示
String isOpenSearch = PlatformProperties.getProperty("platform.protal.isOpenSearch");
if(StringUtils.isNotEmpty(isOpenSearch) && isOpenSearch.equals("false")){
	isOpenSearch = "none";
}else{
	isOpenSearch = "";
}
String deptName = SessionHelper.getCurrentDeptName(request);


SysUser user = (SysUser)SessionHelper.getLoginSysUser(request);

String loginName = user.getName();

String userId = user.getId();

String orgName =CacheSpringFactory.getInstance().getBean(SysOrgAPI.class).getSysOrgNameBySysOrgId(session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_ORG).toString(), SessionHelper.getSystemDefaultLanguageCode());
SysProfileAPI sysProfileAPI = CacheSpringFactory.getInstance().getBean(SysProfileAPI.class);
%>
<!DOCTYPE html>
<html >
<head>
<meta charset="utf-8" />
<title>欢迎使用-${logoConfigDTO.oneTitle}</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta name="renderer" content="webkit|ie-stand">
<!-- 样式标准化 boostrap.css -->
<link rel="stylesheet" type="text/css" href="static/h5/bootstrap/3.3.4/css_default/bootstrap.css">

<!-- jquery-tabs样式依赖 -->
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/linkbutton.css">
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/panel.css">
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/tabs.css">
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/menu.css">
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/menubutton.css">
<link rel="stylesheet" type="text/css" href="static/h5/skin/topFixed.css">


<!--平台公共图标库文件  -->
<link rel="stylesheet" type="text/css" href="static/h5/skin/iconfont/iconfont.css" />
<!-- 页面样式 index.css -->
<link rel="stylesheet" type="text/css" href="avicit/platform6/portal/css/loadding.css">
<link rel="stylesheet" type="text/css" href="avicit/platform6/portal/css/index.css">
<link rel="stylesheet" type="text/css" href="static/h5/perfect-scrollbar/css/perfect-scrollbar.css">
<link rel="stylesheet" type="text/css" href="avicit/platform6/portal/themes/${_theme}/css/index.css">
<link id="color_link" rel="stylesheet" type="text/css" href="avicit/platform6/portal/skin/${_skins}.css">
<!-- 换肤预留 -->
<link id="theme" rel="stylesheet" href="avicit/platform6/portal/themes/${_theme}/skins/${_skins}/index/style.css">
<%if("true".equals(PlatformProperties.getProperty(PlatformConstant.IM_START))){ %>
<link rel="stylesheet" href="avicit/platform6/im/layim/css/layui.css">
<%} %>
<link rel="stylesheet" type="text/css"
	href="avicit/platform6/portal/themes/dasimple/css/index.css">
<link rel="stylesheet" type="text/css"
	href="avicit/platform6/portal/themes/dasimple/css/form.css">
	<style>
	#tabs-panel iframe{
	height:98% !important
	}
	.portal-test-logo {
		display: inline-block;
		padding: 12px 28px;
		color: #c91f35;
		font-size: 46px;
		font-weight: 700;
		line-height: 1.15;
		letter-spacing: 0;
		background: rgba(255,255,255,0.72);
		border-radius: 4px;
	}
	
	</style>
<title>V6测试平台</title>
</head>
<body>
	<!-- 头部 -->
	<div class="header">
		<div style="float: left;width: 100%">
		<div style="float: left;">
			<div class="logo">
				<span class="portal-test-logo">V6测试平台</span>
			</div>
			<span class ="headerSpan"><img
				src="avicit/platform6/portal/themes/dasimple/img/pic_02.png"><b>应用系统禁止存储、处理涉密信息</b></span></div>
			<div  class="user">
				<i><img
					src="avicit/platform6/portal/themes/dasimple/img/icon_02yh.png"></i>
					<div class="userinfo dropdown">
							<div style="width: 125px;line-height: 40px;text-align: center;cursor: pointer;" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								<span class="username" style="color:black;">${userName}</span>
							</div>
							<div class="dropdown-menu dropdown-menu-right avic-dropmenu">
								<div class="dropdown-name dropdown-name-border-line clearfix">
									<div class="dropdown-head"><img src="${userHeadURI}" class="userhead haedimg" style="margin-left: 0px;"></div>
									<h2 class="dropdown-name-text">
											<span class="dropdown-user-name" title="${userName}"><c:out value="${userName}" /></span>
											<span class="dropdown-other-text" title="${currentOrgName}">组织：${currentOrgName}</span>
											<span class="dropdown-other-text" title="${currentDeptName}">部门：${currentDeptName}</span>
									</h2>
								</div>
								<%--平台登录后个人信息显示条目由 通用代码 PLATFORM_PORTAL_SETTING 控制--%>
								<ul class="userinfo-list dropdown-name-border-line">
								</ul>
								<ul class="userinfo-list">
								</ul>
							</div>
						</div>
			</div>
		</div>
		<div class="slogan">
			<i><img
				src="avicit/platform6/portal/themes/dasimple/img/pic_03.png" height="50px"></i>
			<!-- <span> -->
			<!-- logos -->
			<!-- <img
				src="avicit/platform6/portal/themes/dasimple/img/slogan.png"></span> -->
		</div>
		<!-- 导航 -->
		<div style="width: 100%; float: left;">
			<div class="navigation">
				<div class="one">
					<ul style="overflow: hidden; background: #fad9d2;">
						<li><b style="font-size:18px">政治建设</b></li>
						<li><b style="font-size:18px">思想建设</b></li>
						<li><b style="font-size:18px">组织建设</b></li>
						<li><b style="font-size:18px">干部人才队伍建设</b></li>
						<li><b style="font-size:18px">纪律作风建设</b></li>
						<li><b style="font-size:18px">群团建设</b></li>
						<li style="margin-right: -1%;"><b style="font-size:18px">其他</b></li>
					</ul>
				</div>
				<div class="two">${menus}</div>
			</div>
			<div class="inlet">
				<ul>
					<li><a href="#" target="_blank"><img
							src="avicit/platform6/portal/themes/dasimple/img/pic_05-1tygz.png">
							<p>通用工作</p></a></li>
					<li><a href="#" target="_blank"><img
							src="avicit/platform6/portal/themes/dasimple/img/pic_05-2tjfx.png">
							<p>统计分析</p></a></li>
					<li style="margin-right: -2%;"><a href="#" target="_blank"><img
							src="avicit/platform6/portal/themes/dasimple/img/pic_05-3kscy.png">
							<p>快速查阅</p></a></li>
				</ul>
			</div>
			<!-- <div class="sy">			
				<a href="javascript:;" id="a-left2"
					style="width: 40px; height: 40px; position: absolute; z-index: 1;"></a>
				<a href="javascript:;" id="a-right2"
					style="width: 40px; height: 40px; position: absolute; z-index: 1;"></a>
				<ul style="position: absolute;">
					<li style="float: left; width: 120px; height: 40px;"><img
						src="avicit/platform6/portal/themes/dasimple/img/icon_09sy.png"
						style="float: left; padding: 8px 9px 8px 26px;">
					<p>首页</p></li>
					<li><p>领导干部年度民主</p>
						<img
						src="avicit/platform6/portal/themes/dasimple/img/icon_10gb1.png"></li>
			
				</ul>
			</div>  -->
		</div>
	
		<!--内容-->
		
		<div class="content" >
	<!-- 	<sapn  class="hideLeft out"  style="z-index:100000;display:none;cursor: pointer;position: fixed; top: 50%;left: 0%"><i class="icon icon-xiangyoujiantou"></i> </sapn>
 		<sapn onclick="hideTab()" id="hideTab"  style="z-index:100000;display:none;cursor: pointer;position: fixed; top: 50%;left: 0%"> <img
							src="avicit/platform6/portal/themes/dasimple/img/icon_08zk2-1.png"></sapn> -->
							<div  class="retract" onclick="hideTab()" style="display:none;cursor: pointer;" id="hideTab" >
        <i><img src="avicit/platform6/portal/themes/dasimple/img/icon_18zk.png"></i> 
      </div>
			<div style="display:none" class="con-Left">
				<div
					style="color: #C82E2A; height: 40px; line-height: 40px; margin-left: 16px; font-size: 18px;">
					<b>首页
					<sapn id="tabs"> <img onclick="showTab()"
							src="avicit/platform6/portal/themes/dasimple/img/icon_18sq.png" style="float: right; margin-top: 5%; cursor: pointer;"></sapn></b>
				</div>
				<ul class="navMenu">					
				</ul>
			</div>

			<div class="con-Right" style="width:98%">
				<!-- 内容 -->
				<div id="tabs-panel" class="mainbody easyui-tabs " data-options="tools:'#tab-tools',fit:true,border:false,tabHeight:30">
					<div title="首页" data-options="fit:true,border:false">
						 <iframe src="" id="mainFrame" name="mainFrame" frameborder="0"></iframe> 
					</div>
				</div>
			</div>
			<div class="hiddenMenu">
		<div id="indexMenu" class="tabsSubMenu	" data-for="首页" style="width: 400px;">
			<ul class="indexMenuContent">
				<li class="changeUrl checked" rel="guider.html">
					<div>
						<i></i><span class="cn">我的工作</span><span class="setting"></span>
					</div>
				</li>
			</ul>
			<div class="btns" onClick="userDefinedPortlet_add();return false;">
				<ul>
					<li><em class="icon icon-add"></em>添加首页</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- 选择皮肤的模态框 Start-->
	<div id="changeui" class="model-s"></div>
	<!-- 选择皮肤的模态框 End -->

	<!-- 加载层 -->
	<div class="square">
		<div class="box">
			<div class="square-gradient">
				<i class="gradient"></i> <i class="gradient"></i> <i class="gradient"></i> <i class="gradient"></i> <i class="gradient"></i> <i class="gradient"></i> <i class="gradient"></i> <i class="gradient"></i>
				<i class="gradient"></i>
			</div>
			<p style="color: black;">系统正在加载，请稍等...</p>
		</div>
	</div>


		</div>
		</div>
		
		<!-- 框架依赖 jquery-1.9.1.js -->
	<script type="text/javascript" src="static/h5/jquery/${jqueryVersion}"></script>
	<!-- 基础框架依赖 bootstrap.js -->
	<script type="text/javascript" src="static/h5/bootstrap/3.3.4/js/bootstrap.js"></script>
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


	<!-- 换肤插件 jquery.changeui.js -->
	<script type="text/javascript" src="avicit/platform6/portal/js/jquery.changeui.js"></script>
	<script type="text/javascript" src="static/h5/common-ext/avic.ajax.js"></script>
	<script type="text/javascript" src="avicit/platform6/portal/js/effect.js"></script>
	<script type="text/javascript" src="avicit/platform6/portal/portlet/js/portletUserDefined.js"></script>
	<script type="text/javascript" src="avicit/platform6/portal/themes/dasimple/js/simple.js"></script>
	<script type="text/javascript" src="avicit/platform6/portal/message/js/SysMsgPub.js"></script>
	<!-- 解决IE图标重绘问题公共js -->
	<script src="avicit/platform6/portal/js/redrawpseudoel.js"></script>

	<!-- IM -->
	<%if("true".equals(PlatformProperties.getProperty(PlatformConstant.IM_START))){ %>
	<script src="avicit/platform6/im/strophejs/strophe.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/chatstates.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/disco.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/ping.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/register.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/roster.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/pubsub.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/muc.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/rsm.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/mam.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/bookmarks.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/vcard.js"></script>
	<script src="avicit/platform6/im/strophejs/strophe-plugins/mucsub_wskj.js"></script>
	<script src="avicit/platform6/im/js/jquery.lazyload.js"></script>
	<script src="avicit/platform6/im/layim/layui.js"></script>
	<script src="avicit/platform6/im/js/config.js"></script>
	<script src="avicit/platform6/im/js/api.js"></script>
	<script src="avicit/platform6/im/js/chat.js"></script>
	<script src="avicit/platform6/im/js/UIControler.js"></script>
	<%} %>
		<script>
		function liClick(that){
			// nav收缩展开
			$(that).click(function(e){
				var parent = $(this).parent().parent();//获取当前页签的父级的父级
				var labeul = $(this).parent("li").find(">ul")
				if ($(this).parent().hasClass('open') == false) {
					//展开未展开						
					 parent.find('ul').slideUp(300);
					parent.find("li").removeClass("open")
					parent.find('li a').removeClass("active").find(
							".arrow").removeClass("open")
					$(this).parent("li").addClass("open").find(
							labeul).slideDown(300);
					$(this).addClass("active").find(".arrow")
							.addClass("open")  
					$(this).next('ul').show(500);
					if($(this).attr("rel")!='' && $(this).attr("rel")!='null'){
						 addTab($(this).text(),$(this).attr('rel'),true) 
						 //判断如果页签只剩下2个 则收回侧边栏
							$("#tabs-panel li .tabs-close").on('click',function(){
								if($("#tabs-panel iframe").length==2){
									showTab();
								}
							})
					}
				} else {
					 $(this).parent("li").removeClass("open").find(
							labeul).slideUp(300);
					
					if ($(this).parent().find("ul").length > 0) {
						$(this).removeClass("active")
								.find(".arrow").removeClass("open")
					} else {
						$(this).addClass("active")
					} 
					$(this).next("ul").hide(500);
				}
			})	
		}

		function addCodexTestMenu(menuTitle, data){
			var title = $.trim(menuTitle);
			if((title == "党委工作" || title == "工作计划" || data.indexOf("基层党支部计划") >= 0) && data.indexOf("codeX测试") < 0){
				var codexItem = '<li title="codeX测试"><a href="javascript:void(0);" rel="avicit/platform6/portal/themes/dasimple/jsp/codex-test.jsp" class="afinve"><span class="nav-text">codeX测试</span></a></li>';
				return data + codexItem;
			}
			return data;
		}
	$(document).ready(
			function() {				
			/*if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
				       
				    } */
				//多级菜单点击事件
				liClick($('.navMenu li a'));
				//修改密码
				 $('ul.userinfo-list').on('click','#changePassWord',function(){
				 		
				 		modifyIndex = layer.open({
			    			type: 2,
							area: ['430px', '230px'],
			    			title: '修改密码',
			    			skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
		        			maxmin: false, //开启最大化最小化按钮
			    			content: '<%=ViewUtil.getRequestPath(request)%>'+'avicit/platform6/console/user/modifyUserPassword.jsp?userId=<%=userId%>' 
						});  
					});
				//给首页按钮注册点击事件
				$("#tabs-panel li a:eq(0)").on('click',function(){
					showTab();
				})
				var oneBol = false;
				//$(".one-lelve").mouseover(
				//		function() {
				//			if(!oneBol){
				//				$(this).next().css("display", "block")
				//				$(this).parent().siblings().find('.two-lelve').css(
				//						"display", "none")
				//			}
				//			
				//		})
				$(".one-lelve").click(function(){					
						$(this).next().css("display", "block")
						$(this).parent().siblings().find('.two-lelve').css(
								"display", "none")
					
				})
				//$(".two-lelve").mouseleave(function() {
				//	if(!oneBol){
				//		$(this).css("display", "none")	
				//	}
				//	
				//})
				
				$(".one-lelve").each(function(index,domEle){				
					var children =  $(domEle).next(".two-lelve:hidden").children("div")
					var childrenA =  $(domEle).next(".two-lelve:hidden").children("a");
					$(childrenA).click(function(e){
						var childrendiv = $(this).nextAll("div")
						//防止重复点击 造成穿刺效果
						if(childrendiv.children("span:visible").length >10){
							return;
						}						
						//确定是左右
						if($(this).attr("id")=="a-left"){													
							var rom = childrendiv.children("span:eq(0)");
							childrendiv.append(rom)
							childrendiv.children("hidden:eq(0)").remove();
							rom.hide(500);
							childrendiv.children("span:hidden:eq(0)").show(500);
						}else{
							var dom = childrendiv.children("span:hidden:last");
							dom.show(500);
							childrendiv.prepend(dom) 
							childrendiv.children("span:visible:last").hide(500); 	
						}
						
					})
					//把超过十个的先隐藏
					if(children.length !=0){
						$(children).children("span").each(function(chilindex,childom){
							if(chilindex >=10){
								$(childom).css("display","none");
							}		
						})
											
					}
					var dChild = $(domEle).next(".two-lelve:hidden").children("span");
					var fChild = $(domEle).next(".two-lelve:hidden").children("div").children("span");
					$(dChild).click(function (e){
						$(".two-lelve").css("display","none")
						var data = "";
						$.ajax({
							url:"portal/themes_Djsimple?id="+$(this).attr("id"),
							type:"GET",
							dataType:"HTML",
							async:false,
							success:function(e){
								data= e;
							}
						})
						data = addCodexTestMenu($(this).text(), data);
						if($(this).attr('ref')!=""){
							addTab($(this).attr('title'),$(this).attr('ref'),true)
							hideTab();							
							//判断如果页签只剩下2个 则收回侧边栏
							$("#tabs-panel li .tabs-close").on('click',function(){								
								if($("#tabs-panel iframe").length==2){
									showTab();
								}
							})
						}
						if(data != ""){
							var father = $(".con-Left:eq(0)");
							father.children("div:eq(0)").children("b:eq(0)").html($(this).text()+'<sapn id="tabs"> <img onclick="showTab()" src="avicit/platform6/portal/themes/dasimple/img/icon_18sq.png" style="float: right; margin-top: 5%; cursor: pointer;"></sapn>')
							father.children(".navMenu:eq(0)").html(data);
							hideTab();
							liClick($('.navMenu li a'));
						}else{
							var father = $(".con-Left:eq(0)");
							father.children("div:eq(0)").children("b:eq(0)").html($(this).text()+'<sapn id="tabs"> <img onclick="showTab()" src="avicit/platform6/portal/themes/dasimple/img/icon_18sq.png" style="float: right; margin-top: 5%; cursor: pointer;"></sapn>')
							father.children(".navMenu:eq(0)").html(data);
							liClick($('.navMenu li a'));
						}
						
						 
					})
					$(fChild).click(function(e){
						$(".two-lelve").css("display","none")
						var data = "";
						$.ajax({
							url:"portal/themes_Djsimple?id="+$(this).attr("id"),
							type:"GET",
							dataType:"HTML",
							async:false,
							success:function(e){
								data= e;
							}
						})																		
						data = addCodexTestMenu($(this).text(), data);
						if($(this).attr('ref')!=""){							
							addTab($(this).attr('title'),$(this).attr('ref'),true)
							hideTab();
							//判断如果页签只剩下2个 则收回侧边栏
							$("#tabs-panel li .tabs-close").on('click',function(){
								console.log($(this))
								if($("#tabs-panel iframe").length==2){
									showTab();
								}
							})
						}
						if(data != ""){
							var father = $(".con-Left:eq(0)");
							father.children("div:eq(0)").children("b:eq(0)").html($(this).text()+'<sapn id="tabs"> <img onclick="showTab()" src="avicit/platform6/portal/themes/dasimple/img/icon_18sq.png" style="float: right; margin-top: 5%; cursor: pointer;"></sapn>')
							father.children(".navMenu:eq(0)").html(data);
							hideTab();
							liClick($('.navMenu li a'));
						}else{
							var father = $(".con-Left:eq(0)");
							father.children("div:eq(0)").children("b:eq(0)").html($(this).text()+'<sapn id="tabs"> <img onclick="showTab()" src="avicit/platform6/portal/themes/dasimple/img/icon_18sq.png" style="float: right; margin-top: 5%; cursor: pointer;"></sapn>')
							father.children(".navMenu:eq(0)").html(data);
							liClick($('.navMenu li a'));
						}
						
					})
				})

			})
			function hideTab(){
		      $(".con-Left:eq(0)").show(500)
		      $("#hideTab").hide(500)		        
		      $(".con-Right:eq(0)").css("width","85%");
		      //异步设置宽度为动画执行流出时间
		       var time = setTimeout(function(){
		    	  clearTimeout(time);
		    	   /* $('#tabs-panel,#tabs-panel .tabs-header,#tabs-panel .tabs-wrap,#tabs-panel .tabs-panels,#tabs-panel .panel-htop,#tabs-panel .panel-body').css("width","100%")
		    	    */  
		    	  $('#tabs-panel,#tabs-panel .tabs-panels,#tabs-panel .panel-htop,#tabs-panel .panel-body').css("width","100%")
		    	    
		      },300) 		      	     
	         }
			function showTab(){
					$(".con-Left:eq(0)").hide(500)
					$("#hideTab").show(500);
					$(".con-Right:eq(0)").css("width","98%");
					//异步设置宽度为动画执行流出时间
				 	var time = setTimeout(function(){
				    	  clearTimeout(time);
				    	   $('#tabs-panel,#tabs-panel .tabs-panels,#tabs-panel .panel-htop,#tabs-panel .panel-body').css("width","100%")
				      },300)	 			
				}
			
			
	
</script>
</body>
</html>

