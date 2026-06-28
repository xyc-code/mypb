<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="avicit.platform6.api.session.SessionHelper"%>
<%@ page import="avicit.platform6.api.sysshirolog.utils.SecurityUtil" %>
<%@ page import="avicit.platform6.api.sysuser.dto.SysUser" %>
<%@ page import="avicit.platform6.core.properties.PlatformProperties" %>
<%@ page import="avicit.platform6.api.sysuser.SysUserRoleAPI" %>
<%@ page import="avicit.platform6.core.spring.SpringFactory" %>
<%@ page import="java.util.List" %>
<%@ page import="avicit.platform6.api.sysuser.dto.SysRole" %>
<%@ page import="avicit.platform6.core.properties.PlatformConstant" %>

<%
String importlibs = "common,table,form";	
Boolean isAdmin=false;
SysUser user = SessionHelper.getLoginSysUser(request);
Boolean sanyuanFlag=Boolean.valueOf(PlatformProperties.getProperty("sany.enable"));
SysUserRoleAPI sysUserRoleAPI= SpringFactory.getBean(SysUserRoleAPI.class);
 if(user==null){
 	isAdmin=false;
 }else{
 	if(!sanyuanFlag){
 		isAdmin = SecurityUtil.isAdministrator(user.getLoginName());
	}else{
		List<SysRole> roleList=sysUserRoleAPI.getSysRoleListBySysUserId(user.getId(),SessionHelper.getApplicationId(),SessionHelper.getCurrentOrgIdentity(request));
		for (SysRole role : roleList) {
			// 系统管理员
            if (role.getRoleCode().equals(PlatformConstant.FixedRole.system_manager.getCode())) {
            	isAdmin=true;
            	break;
            }
        }
	}

 }



 String userId = request.getParameter("userId");

%>
<!DOCTYPE html>
<HTML>
<head>
<title>修改密码</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>


<link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css"/>
	

	<script type="text/javascript">
        var baseUrl = "<%=ViewUtil.getRequestPath(request)%>";
	    var uid='<%=userId%>';
	    var isAdminUser='<%=isAdmin%>';
        var loginFlag = '${param.loginFlag}';
	</script>

	<style>
		.tip{
			padding-top:5px;
			width: 100%;
			height: 30px;
			background-color: #ff9900;
			color: #ffffff;
			font-size: 14px;

		}
	</style>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
            <c:if test="${param.loginFlag == '1'}">
                <div class="tip">&nbsp;&nbsp;&nbsp;初始密码登录，请修改密码！</div>
            </c:if>
            <c:if test="${param.loginFlag == '2'}">
                <div class="tip">&nbsp;&nbsp;&nbsp;默认密码过期，请修改密码！</div>
            </c:if>
            <c:if test="${param.loginFlag == '3'}">
                <div class="tip">&nbsp;&nbsp;&nbsp;系统密码过期，请修改密码！</div>
            </c:if>
			<table class="form_commonTable">
				<c:if test="${param.loginFlag == '1' || param.loginFlag == '2' || param.loginFlag == '3'}">
					<tr>
						<th width="10%" style="word-break: break-all; word-warp: break-word;"><label for="oldpassword"><i class="required">*</i>原密码:</label></th>
						<td width="39%"><input title="原密码" class="form-control input-sm" type="password" name="oldpassword" id="oldpassword" /></td>
					</tr>
				</c:if>
				<c:if test="${param.loginFlag != '1' && param.loginFlag != '2' && param.loginFlag != '3'}">
					<%
						if(!isAdmin){
							out.println("<tr><th width='10%' style='word-break: break-all; word-warp: break-word;'><label for='oldpassword'><i class='required'>*</i>原密码:</label></th><td width='39%'><input title='原密码' class='form-control input-sm' type='password' name='oldpassword' id='oldpassword' /></td></tr>");
						}
					%>
				</c:if>
				<tr>
					<th width="10%" style="word-break: break-all; word-warp: break-word;"><label for="password"><i class="required">*</i>新密码:</label></th>
					<td width="39%"><input title="新密码" class="form-control input-sm" type="password" name="password" id="password" /></td>
				</tr>
				<tr>
					<th width="10%" style="word-break: break-all; word-warp: break-word;"><label for="confirm_password"><i class="required">*</i>确认密码:</label></th>
					<td width="39%"><input title="确认密码" class="form-control input-sm" type="password" name="confirm_password" id="confirm_password" /></td>
					
				</tr>
				
				
			</table>
			
			
			
		</form>
		
	</div>
	<div data-options="region:'south',border:false" style="height: 80px;">
			<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				
				<tr>
					<td width="50%" style="padding-top:4%;" align="right">
						<a href="javascript:void(0)" style="margin-right:10px;" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" id="consoleUser_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"id="consoleUser_closeForm">返回</a>
					</td>
				</tr>
			</table>
			</div>
		</div>
	
	
	
	
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js"></script>
<script type="text/javascript" src="static/h5/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js"></script>
<script type="text/javascript" src="avicit/platform6/console/user/js/modifyPassword.js"></script>

	<script type="text/javascript">
	var modifyIndex;
	$(function(){
			//var userframe = $('iframe#iframeUserList', window.parent.document)[0].contentWindow;
			var userframe = parent;
			/*$('#consoleUser_saveForm').bind('click', function(){
				changePasswordbyadmin(userframe);
			}); 
			//返回按钮绑定事件
			$('#consoleUser_closeForm').bind('click', function(){
                if (typeof (userframe.closeModiyPassworDilog) == 'function') {
                    userframe.closeModiyPassworDilog();
                } else {
                    closeModiyPassworDilog();
                }
			});*/
			//修改涉密用户修改密码时提示权限不足的问题
			if(loginFlag == '1' || loginFlag == '2' || loginFlag == '3' ){
				var isAdmin = false;//用户修改首次登录密码
				$('#consoleUser_saveForm').bind('click', function(){
					changePasswordbyadmin(userframe,isAdmin);
				});
			}else{
				if(isAdminUser=="false"){
					var isAdmin = false;//管理员登录系统后，在用户管理中修改所有用户密码
				}else{
					var isAdmin = true;
				}
				$('#consoleUser_saveForm').bind('click', function(){
					changePasswordbyadmin(userframe,isAdmin);
				});
			}
			//返回按钮绑定事件
			$('#consoleUser_closeForm').bind('click', function(){
				if (typeof (userframe.closeModiyPassworDilog) == 'function') {
					userframe.closeModiyPassworDilog();
				} else {
					closeModiyPassworDilog();
				}
			});

		});
		
	</script>
</body>
</html>