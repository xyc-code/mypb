<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload,table";
	String formId = request.getParameter("id");
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 框架样式 -->
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/style.css">
<style type="text/css">
#formTitle
{
	text-align:center;
	font-size:18px;
	font-weight:bold;
	
}
#formLeft
{
	text-align:left;
	font-size:18px;
	font-weight:bold;
	
}
</style>

</head>
 
 
<BODY>
<div id="formTitle"></br><p>东安爱心医疗审批1</p></br></div>
<div id="formLeft">123</div>
<div id="formTab">
		
		<form id='form'>
			<table class="form_commonTable" border="1">
				<tr>
					<th width="15%">
						<label for="autoCode">表单编号1:</label></th>
					<td width="34%">
						${daCareMedicineDTO.autoCode}
					</td>
					<th width="15%">
						<label for="patienterIdAlias">患者姓名:</label></th>
					<td width="34%">
						<div class="input-group  input-group-sm">
					
							${daCareMedicineDTO.patienterIdAlias}
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="patientSex">患者性别:</label></th>
					<td>
					
							${daCareMedicineDTO.patientSexName}
					</td>
					<th>
						<label for="patientAge">患者年龄:</label></th>
					<td>
						${daCareMedicineDTO.patientAge}
					</td>
				</tr>
    			<tr>

					<th>
						<label for="disease">患病名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="disease"  id="disease">
					</td>

					<th>
						<label for="hospital">治疗医院:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="hospital"  id="hospital">
					</td>
				</tr>
				<tr>
					<th>
						<label for="inhospDate">住院日期开始:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="inhospDate" id="inhospDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
					</td>

					<th>
						<label for="outhospDate">住院日期结束:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="outhospDate" id="outhospDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
					</td>
				</tr>
				<tr>
					<th>
						<label for="employeeCard">报销职工卡号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="employeeCard"  id="employeeCard">
					</td>

					<th>
						<label for="depositBank">开户银行:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="depositBank" id="depositBank" title="" isNull="true" lookupCode="DEPOSIT_BANK" defaultValue="0" />
					</td>
				</tr>
				<tr>
					<th>
						<label for="diseaseType">疾病类型:</label></th>
					<td>
						<pt6:h5radio css_class="radio-inline"  name="diseaseType"  title="疾病类型"  canUse="0" lookupCode="DISEASE_TYPE" defaultValue="0"  />
					</td>
				</tr>
    			<tr>
					<th>
						<label for="healthExpenses">医疗费总金额:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="healthExpenses"  id="healthExpenses">
					</td>
					<th>
						<label for="overallExpenses">统筹基金支付:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="overallExpenses"  id="overallExpenses">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="personExpenses">个人支付金额:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="personExpenses"  id="personExpenses">
					</td>
					<th>
						<label for="submitExpenses">申请报销金额:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="submitExpenses"  id="submitExpenses">
					</td>
				
			</table>
		</form>
	</div>
</BODY>

	<script type="text/javascript">
	   setTimeout(function() {
               window.print();
               window.close();
       }, 1500);
	</script>
</HTML>
