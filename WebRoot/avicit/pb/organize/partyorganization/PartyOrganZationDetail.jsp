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
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">党支部构成:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" id="userIdAlias" title="<c:out value='${partyZc}'/>"  name="userIdAlias" readonly="readonly" value="<c:out value='${partyZc}'/>">
						</div>
   					</td>
					<th width="15%">
						<label for="userIdAlias">上届选举时间:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyDateBeg}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">本届选举时间:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyDateEnd}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">选举类型:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyType}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">党组织书记姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyPostName}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">应有委员人数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyPostYycount}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">现有委员人数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyPostCount}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">纪委书记:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyJwSjPostCount}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">应有纪委委员人数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyPostYycount}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">现有纪委委员人数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyJwPostCount}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">党小组数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyOrgCount}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">党员人数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${PARTY_COUNT}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">积极分子人数:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${act_count}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">成立时间:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${creatend_date}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="userIdAlias">文号:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyOrganMemberDTO.userIdAlias}'/>">
						</div>
					</td>
					<th width="15%">
						<label for="userIdAlias">原因:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${partyOrganMemberDTO.userIdAlias}'/>">
						</div>
					</td>
				</tr>
			</table>
		</form>	</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>

				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">

		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}

		//form控件禁用
		setFormDisabled();
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});

	</script>
</body>
</html>

