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
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${dynSessionWyfgDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynSessionWyfgDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userPost">职务:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="userPost"  id="userPost" value="<c:out value='${dynSessionWyfgDTO.userPost}'/>">
   					</td>
					<th width="15%">
						<label for="sessionName">届次:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="sessionName"  id="sessionName" value="<c:out value='${dynSessionWyfgDTO.sessionName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userPartyTime">入党时间:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userPartyTime"  id="userPartyTime" value="<c:out value='${dynSessionWyfgDTO.userPartyTime}'/>">
   					</td>
					<th>
						<label for="userSex">性别:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userSex"  id="userSex" value="<c:out value='${dynSessionWyfgDTO.userSex}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="sessionTime">选举时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="sessionTime" id="sessionTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynSessionWyfgDTO.sessionTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="attr9">预留字段9:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr9"  id="attr9" value="<c:out value='${dynSessionWyfgDTO.attr9}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userAddTime">出生日期:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userAddTime"  id="userAddTime" value="<c:out value='${dynSessionWyfgDTO.userAddTime}'/>">
   					</td>
					<th>
						<label for="attr4">预留字段4:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr4"  id="attr4" value="<c:out value='${dynSessionWyfgDTO.attr4}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyName">党组织名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyName"  id="partyName" value="<c:out value='${dynSessionWyfgDTO.partyName}'/>">
   					</td>
					<th>
						<label for="sessionType">选举类型:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="sessionType"  id="sessionType" value="<c:out value='${dynSessionWyfgDTO.sessionType}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr3">预留字段3:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr3"  id="attr3" value="<c:out value='${dynSessionWyfgDTO.attr3}'/>">
   					</td>
					<th>
						<label for="attr2">预留字段2:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr2"  id="attr2" value="<c:out value='${dynSessionWyfgDTO.attr2}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr1">预留字段1:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr1"  id="attr1" value="<c:out value='${dynSessionWyfgDTO.attr1}'/>">
   					</td>
					<th>
						<label for="attr8">预留字段8:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr8"  id="attr8" value="<c:out value='${dynSessionWyfgDTO.attr8}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr7">预留字段7:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr7"  id="attr7" value="<c:out value='${dynSessionWyfgDTO.attr7}'/>">
   					</td>
					<th>
						<label for="attr6">预留字段6:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr6"  id="attr6" value="<c:out value='${dynSessionWyfgDTO.attr6}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr5">预留字段5:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr5"  id="attr5" value="<c:out value='${dynSessionWyfgDTO.attr5}'/>">
   					</td>
					<th>
						<label for="userNumberVotes">得票数:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userNumberVotes"  id="userNumberVotes" value="<c:out value='${dynSessionWyfgDTO.userNumberVotes}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr12">预留字段12:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr12"  id="attr12" value="<c:out value='${dynSessionWyfgDTO.attr12}'/>">
   					</td>
					<th>
						<label for="attr13">预留字段13:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr13"  id="attr13" value="<c:out value='${dynSessionWyfgDTO.attr13}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr10">预留字段10:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr10"  id="attr10" value="<c:out value='${dynSessionWyfgDTO.attr10}'/>">
   					</td>
					<th>
						<label for="attr11">预留字段11:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr11"  id="attr11" value="<c:out value='${dynSessionWyfgDTO.attr11}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr16">预留字段16:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr16"  id="attr16" value="<c:out value='${dynSessionWyfgDTO.attr16}'/>">
   					</td>
					<th>
						<label for="attr17">预留字段17:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr17"  id="attr17" value="<c:out value='${dynSessionWyfgDTO.attr17}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr14">预留字段14:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr14"  id="attr14" value="<c:out value='${dynSessionWyfgDTO.attr14}'/>">
   					</td>
					<th>
						<label for="attr15">预留字段15:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr15"  id="attr15" value="<c:out value='${dynSessionWyfgDTO.attr15}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr18">预留字段18:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr18" id="attr18" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynSessionWyfgDTO.attr18}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="attr19">预留字段19:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr19" id="attr19" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynSessionWyfgDTO.attr19}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userName">委员姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userName"  id="userName" value="<c:out value='${dynSessionWyfgDTO.userName}'/>">
   					</td>
					<th>
						<label for="userRanks">职称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userRanks"  id="userRanks" value="<c:out value='${dynSessionWyfgDTO.userRanks}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userType">委员分工:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userType"  id="userType" value="<c:out value='${dynSessionWyfgDTO.userType}'/>">
   					</td>
					<th>
						<label for="sessionId">届次:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="sessionId" id="sessionId"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynSessionWyfgDTO.sessionId}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyId">党组织id:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyId"  id="partyId" value="<c:out value='${dynSessionWyfgDTO.partyId}'/>">
   					</td>
					<th>
						<label for="userWorkDate">参加工作时间:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userWorkDate"  id="userWorkDate" value="<c:out value='${dynSessionWyfgDTO.userWorkDate}'/>">
   					</td>
				</tr>
			</table>
		</form>
			</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynSessionWyfg_closeForm">返回</a>
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
			parent.dynSessionWyfg.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynSessionWyfg_closeForm').bind('click', function(){
				closeForm();
			});
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

