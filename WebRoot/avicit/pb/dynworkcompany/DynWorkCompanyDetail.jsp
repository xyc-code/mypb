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
			<input type="hidden" name="id" value="<c:out value='${dynWorkCompanyDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynWorkCompanyDTO.version}'/>"/>
			<input type="hidden" name="workId" value="<c:out  value='${dynWorkCompanyDTO.workId}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="planDate">计划开始时间:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="planDate" id="planDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynWorkCompanyDTO.planDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="responsibityDept">责任业务科室:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="responsibityDept"  id="responsibityDept" value="<c:out value='${dynWorkCompanyDTO.responsibityDept}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="businessContactPerson">业务联系人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="businessContactPerson"  id="businessContactPerson" value="<c:out value='${dynWorkCompanyDTO.businessContactPerson}'/>">
   					</td>
					<th>
						<label for="workTasks">工作任务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="workTasks"  id="workTasks" value="<c:out value='${dynWorkCompanyDTO.workTasks}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="distributeDate">下发计划时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="distributeDate" id="distributeDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynWorkCompanyDTO.distributeDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="workAsk">工作要点及要求:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="workAsk"  id="workAsk" value="<c:out value='${dynWorkCompanyDTO.workAsk}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="responsibityUnit">责任单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="responsibityUnit"  id="responsibityUnit" value="<c:out value='${dynWorkCompanyDTO.responsibityUnit}'/>">
   					</td>
					<th>
						<label for="classifiction">密级:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="classifiction"  id="classifiction" value="<c:out value='${dynWorkCompanyDTO.classifiction}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="workType">工作类别:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="workType"  id="workType" value="<c:out value='${dynWorkCompanyDTO.workType}'/>">
   					</td>
					<th>
						<label for="workStatus">工作状态:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="workStatus"  id="workStatus" value="<c:out value='${dynWorkCompanyDTO.workStatus}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="workTarget">党建工作目标:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="workTarget"  id="workTarget" value="<c:out value='${dynWorkCompanyDTO.workTarget}'/>">
   					</td>
					<th>
						<label for="workContent">党建工作内容:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="workContent"  id="workContent" value="<c:out value='${dynWorkCompanyDTO.workContent}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="type">类别:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="type"  id="type" value="<c:out value='${dynWorkCompanyDTO.type}'/>">
   					</td>
					<th>
						<label for="fileType">文件密级:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fileType"  id="fileType" value="<c:out value='${dynWorkCompanyDTO.fileType}'/>">
   					</td>
				</tr>
				</tr>
			</table>
		</form>	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynWorkCompany_closeForm">返回</a>
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
			parent.dynWorkCompany.closeDialog("detail");
		}

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynWorkCompany_closeForm').bind('click', function(){
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

