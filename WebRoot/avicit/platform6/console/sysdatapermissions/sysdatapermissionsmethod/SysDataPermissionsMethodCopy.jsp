<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>复制模块</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<link rel="stylesheet" type="text/css" href="avicit/platform6/console/sysdatapermissions/sysdatapermissionsmethod/css/style.css"/>
</head>
<style>
.copyTree{
	position: absolute;
	top: 56px;
	margin: 0 auto;
	display: block;
	width: 100%;
	z-index: 1;
	background: #ffffff;
}
.copyTable{
	width: 100%;
	position: fixed;
	/*border-bottom: 1px solid #dedede;*/
}
.copyMyTab{
	margin: 0 auto;
	width: 282px;
	border: 0;
}
div#tableToolbarM {
	position: fixed;
	top: 30px;
}
	.padding{
		padding-top: 34px;
	}
</style>
<body >
	<div style="height: 100%">
		<div class="steps" style="height: 50px;width: 100%;position: fixed;">
			<ol>
<%--				<li id="1" class="active"><i>1</i><span class="tsl">选择要复制的方法</span></li>--%>
				<li id="2" class="active"><i>1</i><span class="tsl">选择目标模块</span></li>
				<li id="3"><i>2</i><span class="iconfont">设置方法</span></li>
			</ol>
			<div>
				<a href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="上一步" id="previous" style="display: none;margin-top: 10px;"><i class="fa fa-mail-reply"></i> 上一步</a>
				<a href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="下一步" id="next" style="margin-top: 10px;"><i class="fa fa-mail-forward"></i> 下一步</a>
				<a href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="保存" id="save" style="display: none;margin-top: 10px;"><i class="fa fa-copy"></i> 保存</a>
			</div>
		</div>
		<div class="copyTree">
			<div id="copyTable">
				<ul id="myTab" class="nav nav-tabs">
					<li class="active"><a rel='portal_ifrm' href="#portal" data-toggle="tab">前台菜单</a></li>
					<li><a rel='console_ifrm' href="#console" data-toggle="tab">后台菜单</a></li>
				</ul>
			</div>
			<div id="myTabContent" class="tab-content">
				<div class="tab-pane fade in active" id="portal">
				</div>
				<div class="tab-pane fade" id="console">
					<iframe id="console_ifrm" src="" scrolling="no" frameborder="0" src="" style="width:100%;height:100%;"></iframe>
				</div>

			</div>
		</div>
		<%--<iframe id="contentIframe" width="100%" height="90%" frameborder="0"></iframe>--%>
	</div>
	
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		var copyObj = {};
		copyObj.methodId = '${methodId}';
		//默认激活选项卡内容
		var contentFrame = 'portal_ifrm';
		//默认菜单url
		var contentUrl = '1-ORG_ROOT-1-zh_CN';

		$(function(){
			//设置内容区高度
			$('#console').css("height",document.documentElement.clientHeight-90);
			$('#portal').css("height",document.documentElement.clientHeight-90);

			$("#copyTable").addClass("copyTable");
			$("#myTab").addClass("copyMyTab");
			$("#myTabContent").addClass("padding");

			setTimeout(function(){
				var $frame=$('<iframe id="portal_ifrm" scrolling="no" frameborder="0" style="width:100%;height:100%;"></iframe>');
				$frame.attr("src","platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=2&urlMenu=1-ORG_ROOT-1-zh_CN&v=" + Math.random());
				$frame.appendTo($('#portal'));
			},10);
			//选项卡切换页面
			var ifrm={
				'portal_ifrm1':'platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=1&urlMenu=1-ORG_ROOT-1-zh_CN&v=' + Math.random(),
				'portal_ifrm2':'platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=2&urlMenu=1-ORG_ROOT-1-zh_CN&v=' + Math.random(),
				'console_ifrm1':'platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=1&urlMenu=1-ORG_ROOT-0-zh_CN&v=' + Math.random(),
				'console_ifrm2':'platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=2&urlMenu=1-ORG_ROOT-0-zh_CN&v=' + Math.random()
			};
			//选项卡切换事件
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				var currentId = $(".steps").find(".active").attr("id");
				//当前激活的tab是前台还是后台菜单
				contentFrame = e.target.rel;
				//菜单url
				if(contentFrame == 'portal_ifrm'){
					contentUrl = '1-ORG_ROOT-1-zh_CN';
				}else {
					contentUrl = '1-ORG_ROOT-0-zh_CN';
				}
				$('#'+e.target.rel).attr('src','');
				if(!$('#'+e.target.rel).attr('src')){
					if(currentId == '1'){
						$('#'+e.target.rel).attr('src',ifrm[e.target.rel + "1"]);
					}else if(currentId == '2'){
						$('#'+e.target.rel).attr('src',ifrm[e.target.rel + "2"]);
					}
				}
			});

			//$('iframe').attr('src','platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=1&urlMenu=${urlMenu}');
			$("#next").on("click",function(){
				var currentId = $(".steps").find(".active").attr("id");
				if(currentId=="1"){
					//var contentWin = $("#contentIframe")[0].contentWindow;
					var contentWin = $("#" + contentFrame)[0].contentWindow;
					var subWin = contentWin.getFormData();
					if (!subWin) {
						return false;
					}
					copyObj.methodId = subWin.id;
					$("#1").removeClass("active");
					$("#2").addClass("active");
					$("#previous").show();
					$("#copyTable").addClass("copyTable");
					$("#myTab").addClass("copyMyTab");
					$('#' + contentFrame).attr('src',"platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=2&urlMenu=" + contentUrl + "&v=" + Math.random());
				} else if(currentId=="2"){
					//var contentWin = $("#contentIframe")[0].contentWindow;
					var contentWin = $("#" + contentFrame)[0].contentWindow;
					var subWin = contentWin.getFormData();
					if(!subWin){
						return false;
					}
					copyObj.menuId = subWin;
					$("#2").removeClass("active");
					$("#3").addClass("active");
					$("#myTabContent").removeClass("padding");
					$("#next").hide();
					$("#previous").show();
					$("#save").show();
					$("#myTab").hide();
					$('#' + contentFrame).attr('src',"platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=3&urlMenu="+ contentUrl +"&methodId="+copyObj.methodId+"&menuId="+copyObj.menuId + "&v=" + Math.random());
				}
			});
			
			$("#previous").on("click",function(){
				var currentId = $(".steps").find(".active").attr("id");
				if(currentId=="2"){
					$("#previous").hide();
					$("#1").addClass("active");
					$("#2").removeClass("active");
					$("#myTab").show();
					$("#copyTable").removeClass("copyTable");
					$("#myTab").removeClass("copyMyTab");
					$('#' + contentFrame).attr('src',"platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=1&urlMenu=" + contentUrl + "&v=" + Math.random());
				} else if(currentId=="3"){
					$("#2").addClass("active");
					$("#3").removeClass("active");
					$("#save").hide();
					$("#previous").hide();
					$("#next").show();
					$("#myTab").show();
					$("#copyTable").addClass("copyTable");
					$("#myTab").addClass("copyMyTab");
					$("#myTabContent").addClass("padding");
					$('#' + contentFrame).attr('src',"platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/toCopySysDataPermissionsMethod?step=2&urlMenu="+ contentUrl + "&v=" + Math.random());
				}
			});
			
			$("#save").on("click",function(){
				//var contentWin = $("#contentIframe")[0].contentWindow;
				var contentWin = $("#" + contentFrame)[0].contentWindow;
				var subWin = contentWin.getFormData();
				if (!subWin) {
					return false;
				}
				parent.sysDataPermissionsMethod.copyMethod(JSON.stringify(subWin));
			});
		});
	</script>	
</body>
</html>