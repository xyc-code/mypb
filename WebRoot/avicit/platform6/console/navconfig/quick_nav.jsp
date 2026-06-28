<%@ page import="avicit.platform6.api.session.SessionHelper"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="avicit.platform6.core.properties.PlatformConstant"%>
<%@ page import="avicit.platform6.core.properties.PlatformProperties"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title></title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<link rel="stylesheet" href="avicit/platform6/console/navconfig/css/style.css" />
<link rel="stylesheet" type="text/css" href="static/h5/jquery-tabs/themes/default/tabs.css">
<script type="text/javascript" src="static/h5/jquery-tabs/plugins/jquery.tabs.js"></script>
</head>
<body >
	<div class="warpper">
		<div class="content_box">
			<div class=" box_title ">
				<h2 class="title">快速配置向导</h2>
			</div>
			<ul class="clearfix guide_box">
			<c:if test="${fn:contains(url, 'platform/eform/bpmsManageController/toEformManager')}" >
				<li>
					<div class="guide_inner" id="8a58cd605c19424b015c1957c3cc0097" rel="platform/eform/bpmsManageController/toEformManager" title="表单模型"  onclick="showMenu(this);">
						<div class="guide_img_box">
							<img src="avicit/platform6/console/navconfig/img/bdjm.png" />
						</div>
						<h4>表单建模</h4>
						<p>提供30+种控件</p>
						<p>可视化配置（表单，视图）</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/bpm/deploy/bpmModelManage')}" >
				<li>
					<div class="guide_inner" id="8a58cd605c19424b015c195658ea008f" rel="platform/bpm/deploy/bpmModelManage" title="流程建模" onclick="showMenu(this);">
						<div class="guide_img_box">
							<img src="avicit/platform6/console/navconfig/img/lcjm.png" />
						</div>
						<h4>流程模型</h4>
						<p>可视化配置</p>
						<p>实现流程图的绘制和属性配置</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/console/auth/list')}" >
					<li>
						<div class="guide_inner" id="297e758c75303d74017530c254a93f94" rel="platform/console/auth/list" title="集中授权" onclick="showMenu(this);">
							<div class="guide_img_box">
								<img src="avicit/platform6/console/navconfig/img/jzsq.png" />
							</div>
							<h4>集中授权</h4>
							<p>对系统的菜单及</p>
							<p>组件进行权限设置</p>
						</div>
					</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform6/codegen/sysgentablerelation/sysGenTableRelationController/toSysGenTableManage')}" >
				<li>
					<div class="guide_inner" id="8a58bcf774c482a80174c48e2f95091b" rel="platform6/codegen/sysgentablerelation/sysGenTableRelationController/toSysGenTableManage" title="代码生成向导"  onclick="showMenu(this);">
						<div class="guide_img_box">
							<img src="avicit/platform6/console/navconfig/img/codegen.png" />
						</div>
						<h4>代码生成</h4>
						<p>Web版代码生成器</p>
					</div>
				</li>
				</c:if>
<%--				<c:if test="${fn:contains(url, 'platform/console/menu/list')}" >--%>
<%--				<li>--%>
<%--					<div class="guide_inner" rel="platform/console/menu/list" title="菜单管理" onclick="showMenu(this);">--%>
<%--						<div class="guide_img_box">--%>
<%--							<img src="avicit/platform6/console/navconfig/img/cdgl.png" />--%>
<%--						</div>--%>
<%--						<h4>菜单管理</h4>--%>
<%--						<p>维护基础菜单、门户小页</p>--%>
<%--					</div>--%>
<%--				</li>--%>
<%--				</c:if>--%>

				<c:if test="${fn:contains(url, 'platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toSysDataPermissionsMethodManage')}" >
				<li>
					<div class="guide_inner" id="4028fa8171ba4ba00171ba72ea570132" rel="platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toSysDataPermissionsMethodManage" title="行数据权限维护" onclick="showMenu(this);">
						<div class="guide_img_box">
							<img src="avicit/platform6/console/navconfig/img/sjqx.png" />
						</div>
						<h4>行数据权限维护</h4>
						<p>支持多维度的数据授权</p>
						<p>满足业务中行数据权限控制</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/modules/system/monitor/systemInfo')}" >
				<li>
					<div class="guide_inner" id="8a58cd605c1b85cc015c1ba1ee4e008b" rel="platform/modules/system/monitor/systemInfo" title="系统监控"  onclick="showMenu(this);">
						<div class="guide_img_box">
							<img src="avicit/platform6/console/navconfig/img/dpgl.png" />
						</div>
						<h4>系统监控</h4>
						<p>监控磁盘、CPU、内存、</p>
						<p>JVM虚拟机使用率，并预警</p>
					</div>
				</li>
				</c:if>
				<%--<c:if test="${fn:contains(url, 'avicit/platform6/console/onlineapi/index.html')}" >
					<li>
						<div class="guide_inner" rel="avicit/platform6/console/onlineapi/index.html" title="在线API"
							 onclick="showMenuForOnlineAPI(this);">
							<div class="guide_img_box">
								<img src="avicit/platform6/console/navconfig/img/API.png" />
							</div>
							<h4>在线API</h4>
							<p>提供系统</p>
							<p>常用API、接口及示例代码</p>
						</div>
					</li>
				</c:if>--%>
			</ul>
		</div>
		<div class="content_box" style="margin-top: 20px;">
			<div class=" box_title ">
				<h2 class="title">常用功能</h2>
			</div>
			<ul class="clearfix app_ul">
			<c:if test="${fn:contains(url, 'avicit/platform6/modules/system/sysdashboard/reLoadCache_new.jsp')}" >
				<li>
					<div class="app" id="8a58cd57600ac98a01600ae7d78800c7" rel="avicit/platform6/modules/system/sysdashboard/reLoadCache_new.jsp" title="刷新缓存" onclick="showMenu(this);">
						<i class="fa fa-refresh"></i>
						<p>刷新缓存</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/console/portal/toPortalAndPortletConfig')}" >
				<li>
					<div class="app" id="8a58cd605c1b85cc015c1ba04ecf0087" rel="platform/console/portal/toPortalAndPortletConfig" title="门户配置" onclick="showMenu(this);">
						<i class="fa fa-envira"></i>
						<p>门户配置</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'console/lookup/toSysLookupTypeManage')}" >
				<li>
					<div class="app" id="8a58cd605c1b85cc015c1b9c9ea3007b" rel="console/lookup/toSysLookupTypeManage" title="通用代码管理" onclick="showMenu(this);">
						<i class="fa fa-th"></i>
						<p>通用代码</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'console/profile/toProfileManage')}" >
				<li>
					<div class="app" id="8a58cd605c1b85cc015c1b9d76ce007d" rel="console/profile/toProfileManage" title="系统参数配置" onclick="showMenu(this);">
						<i class="fa fa-microchip"></i>
						<p>系统参数</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/console/role/toSysRoleManage')}" >
				<li>
					<div class="app" id="8a58cd605c19424b015c19548d480087" rel="platform/console/role/toSysRoleManage" title="角色模型" onclick="showMenu(this);">
						<i class="fa fa-users"></i>
						<p>角色模型</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/console/authmenu/list')}" >
				<li>
					<div class="app" id="297e758c752efdf50175300de7dc1d29" rel="platform/console/authmenu/list" title="菜单授权" onclick="showMenu(this);">
						<i class="fa fa-lock"></i>
						<p>菜单授权</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'avicit/platform6/autocode/SysAutoCodeManage.jsp')}" >
				<li>
					<div class="app" id="4028821d5cae396b015cae620c810176" rel="avicit/platform6/autocode/SysAutoCodeManage.jsp" title="编码管理" onclick="showMenu(this);">
						<i class="fa fa-sliders "></i>
						<p>编码管理</p>
					</div>
				</li>
				</c:if>
				<c:if test="${fn:contains(url, 'platform/console/menu/list')}" >
					<li>
						<div class="app" id="8a58cd605c19424b015c1952d8b70081" rel="platform/console/menu/list" title="菜单管理" onclick="showMenu(this);">
							<i class="icon iconfont icon-menu2"></i>
							<p>菜单管理</p>
						</div>
					</li>
				</c:if>
			</ul>
		</div>
	</div>
</body>
<script type="text/javascript">
		function showMenu(obj){
			var url = $(obj).attr("rel");
			var title = $(obj).attr("title");
			var id = $(obj).attr("id");
			openMainFrame(title, url,id);
				//top.addTab(title, url,true);
		}
		function showMenuForOnlineAPI(obj){
			var url = $(obj).attr("rel");
			var title = $(obj).attr("title");
				window.open(url,title);
		}
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
				var allTabs=parent.$('#tabs-panel').tabs('tabs');
				for(var i=0;i<allTabs.length;i++){
					var tab=allTabs[i];
					if(tab.attr("id")==id){
						exist=true;
						tabIndex=parent.$('#tabs-panel').tabs('getTabIndex',tab);
						break ;
					};
				}
				if (!exist && url != undefined && url != "") {
					parent.$('#tabs-panel').tabs('add', {
						title: title,
						content:  '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
						closable: true
					});
				} else {
					parent.$('#tabs-panel').tabs('select', tabIndex); //匹配到title，就显示这个窗口
				}
				//获取当前添加的tab并增加title属性
							var currentTab = parent.$('#tabs-panel').tabs('getSelected');
							if(currentTab != null && currentTab != '' && currentTab != undefined){
								currentTab.attr("title",preTitle);
								currentTab.attr("id",id);
							}
							$('.tabs-icon').remove();
}
	</script>

</html>