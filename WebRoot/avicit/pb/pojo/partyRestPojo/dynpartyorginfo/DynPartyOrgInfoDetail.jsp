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
			<input type="hidden" name="id" value="<c:out value='${dynPartyOrgInfoDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynPartyOrgInfoDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="sessionName">届次:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="sessionName"  id="sessionName" value="<c:out value='${dynPartyOrgInfoDTO.sessionName}'/>">
   					</td>
					<th width="15%">
						<label for="creaTimeDateTj">提交换届选举请示 :</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="creaTimeDateTj" id="creaTimeDateTj" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.creaTimeDateTj}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyType">党组织类型:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyType"  id="partyType" value="<c:out value='${dynPartyOrgInfoDTO.partyType}'/>">
   					</td>
					<th>
						<label for="attr9">预留字段9:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr9"  id="attr9" value="<c:out value='${dynPartyOrgInfoDTO.attr9}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="creaTimeDate">换届提醒:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="creaTimeDate" id="creaTimeDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.creaTimeDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="attr4">预留字段4:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr4"  id="attr4" value="<c:out value='${dynPartyOrgInfoDTO.attr4}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyName">党组织名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyName"  id="partyName" value="<c:out value='${dynPartyOrgInfoDTO.partyName}'/>">
   					</td>
					<th>
						<label for="sessionType">选举类型:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="sessionType"  id="sessionType" value="<c:out value='${dynPartyOrgInfoDTO.sessionType}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr3">党委会审批选举结果时间:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr3"  id="attr3" value="<c:out value='${dynPartyOrgInfoDTO.attr3}'/>">
   					</td>
					<th>
						<label for="attr2">上报选举结果:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr2"  id="attr2" value="<c:out value='${dynPartyOrgInfoDTO.attr2}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr1">党委会审批预备人选时间:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr1"  id="attr1" value="<c:out value='${dynPartyOrgInfoDTO.attr1}'/>">
   					</td>
					<th>
						<label for="sessionJd">选举进度:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="sessionJd"  id="sessionJd" value="<c:out value='${dynPartyOrgInfoDTO.sessionJd}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr8">预留字段8:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr8"  id="attr8" value="<c:out value='${dynPartyOrgInfoDTO.attr8}'/>">
   					</td>
					<th>
						<label for="attr7">预留字段7:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr7"  id="attr7" value="<c:out value='${dynPartyOrgInfoDTO.attr7}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr6">预留字段6:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr6"  id="attr6" value="<c:out value='${dynPartyOrgInfoDTO.attr6}'/>">
   					</td>
					<th>
						<label for="zkdydh">召开党员大会:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="zkdydh" id="zkdydh" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.zkdydh}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr5">预留字段5:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr5"  id="attr5" value="<c:out value='${dynPartyOrgInfoDTO.attr5}'/>">
   					</td>
					<th>
						<label for="attr12">预留字段12:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr12"  id="attr12" value="<c:out value='${dynPartyOrgInfoDTO.attr12}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr13">预留字段13:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr13"  id="attr13" value="<c:out value='${dynPartyOrgInfoDTO.attr13}'/>">
   					</td>
					<th>
						<label for="attr10">预留字段10:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr10"  id="attr10" value="<c:out value='${dynPartyOrgInfoDTO.attr10}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr11">预留字段11:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr11"  id="attr11" value="<c:out value='${dynPartyOrgInfoDTO.attr11}'/>">
   					</td>
					<th>
						<label for="attr16">预留字段16:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr16"  id="attr16" value="<c:out value='${dynPartyOrgInfoDTO.attr16}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="creaTime">选举时间调整时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="creaTime" id="creaTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.creaTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="attr17">预留字段17:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr17"  id="attr17" value="<c:out value='${dynPartyOrgInfoDTO.attr17}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr14">预留字段14:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr14"  id="attr14" value="<c:out value='${dynPartyOrgInfoDTO.attr14}'/>">
   					</td>
					<th>
						<label for="attr15">预留字段15:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr15"  id="attr15" value="<c:out value='${dynPartyOrgInfoDTO.attr15}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="orgFile">组织机构调整文件:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="orgFile"  id="orgFile" value="<c:out value='${dynPartyOrgInfoDTO.orgFile}'/>">
   					</td>
					<th>
						<label for="partyOrgContent">备注:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyOrgContent"  id="partyOrgContent" value="<c:out value='${dynPartyOrgInfoDTO.partyOrgContent}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="jwych">纪委一次会 :</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="jwych" id="jwych" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.jwych}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="attr18">预留字段18:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr18" id="attr18" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.attr18}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr19">预留字段19:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr19" id="attr19" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.attr19}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="wyych">委员会一次会:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="wyych" id="wyych" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.wyych}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="sessionId">届次:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="sessionId" id="sessionId"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynPartyOrgInfoDTO.sessionId}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="partyId">党组织id:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyId"  id="partyId" value="<c:out value='${dynPartyOrgInfoDTO.partyId}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="creaTimeDateTjyb">提交候选人预备人选请示 :</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="creaTimeDateTjyb" id="creaTimeDateTjyb" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyOrgInfoDTO.creaTimeDateTjyb}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynPartyOrgInfo_closeForm">返回</a>
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
			parent.dynPartyOrgInfo.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynPartyOrgInfo_closeForm').bind('click', function(){
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

