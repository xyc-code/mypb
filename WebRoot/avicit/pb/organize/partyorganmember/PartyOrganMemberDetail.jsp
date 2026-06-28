<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
	<script src="static/js/platform/component/jQuery/jQuery-1.8.2/jquery-1.8.2.js" type="text/javascript"></script>
	<script src="static/js/platform/component/common/platform6-fn-6.3.1.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${partyOrganMemberDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${partyOrganMemberDTO.version}'/>"/>
			<input type="hidden" name="partyId" value="<c:out  value='${partyOrganMemberDTO.partyId}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">员工姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias" readonly="readonly" value="<c:out value='${partyOrganMemberDTO.userIdAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="userPost">党组织职务:</label></th>
   					<td id="userPostTd" width="34%">
						
   					</td>
				</tr>
				</tr>
			</table>
		</form>	</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="partyOrganMember_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		function closeForm(){
			parent.partyOrganMember.closeDialog("detail");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#partyOrganMember_closeForm').bind('click', function(){
				closeForm();
			});
			var lok = '${partyOrganMemberDTO.userPost}';
			//单独设置每一个单选框的样式
			 Platform6.fn.lookup.getLookupType("PARTY_POST",function(res){
				 for(var i=0;i<res.length;i++){
					 if(res[i].lookupCode==lok){
						 $("#userPostTd").append('<input  name="userPost" checked title="党组织职务" type="radio" value="'+res[i].lookupCode+'">'+res[i].lookupName+'') 
					 }else{
						 $("#userPostTd").append('<input  name="userPost" title="党组织职务" type="radio" value="'+res[i].lookupCode+'">'+res[i].lookupName+'') 
					 }
					 
					 if(i==1||i==3||i==6){
						 $("#userPostTd").append('<br>')
					 }
				 }
			 })
		});
		//form控件禁用
		setFormDisabled();
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});
	</script>
</body>
</html>

