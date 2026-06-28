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
			<input type="hidden" name="id" value="<c:out value='${dynTuModelWorkerDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynTuModelWorkerDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="data11">DATA_11:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="data11" id="data11" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynTuModelWorkerDTO.data11}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="data10">流程ID:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="data10"  id="data10" value="<c:out value='${dynTuModelWorkerDTO.data10}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data12">DATA_12:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="data12" id="data12"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynTuModelWorkerDTO.data12}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="requestUser">申请人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="requestUser"  id="requestUser" value="<c:out value='${dynTuModelWorkerDTO.requestUser}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="annex">荣誉颁发文件及证书照片附件:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="annex"  id="annex" value="<c:out value='${dynTuModelWorkerDTO.annex}'/>">
   					</td>
					<th>
						<label for="deptTwoName">二级部门名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptTwoName"  id="deptTwoName" value="<c:out value='${dynTuModelWorkerDTO.deptTwoName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="honorOrgan">荣誉颁发机构:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="honorOrgan"  id="honorOrgan" value="<c:out value='${dynTuModelWorkerDTO.honorOrgan}'/>">
   					</td>
					<th>
						<label for="nation">民族:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" value="<c:out value='${dynTuModelWorkerDTO.nation}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptOneId">一级部门ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptOneId"  id="deptOneId" value="<c:out value='${dynTuModelWorkerDTO.deptOneId}'/>">
   					</td>
					<th>
						<label for="deptThreeId">三级部门ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptThreeId"  id="deptThreeId" value="<c:out value='${dynTuModelWorkerDTO.deptThreeId}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data1">性别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="data1" id="data1" title="" isNull="true" lookupCode="PLATFORM_SEX" defaultValue="${dynTuModelWorkerDTO.data1}" />
   					</td>
					<th>
						<label for="data2">DATA_2:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data2"  id="data2" value="<c:out value='${dynTuModelWorkerDTO.data2}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data3">DATA_3:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data3"  id="data3" value="<c:out value='${dynTuModelWorkerDTO.data3}'/>">
   					</td>
					<th>
						<label for="skillLevel">技能等级:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="skillLevel"  id="skillLevel" value="<c:out value='${dynTuModelWorkerDTO.skillLevel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data4">DATA_4:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data4"  id="data4" value="<c:out value='${dynTuModelWorkerDTO.data4}'/>">
   					</td>
					<th>
						<label for="birthday">出生日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="birthday" id="birthday" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynTuModelWorkerDTO.birthday}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data9">DATA_9:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data9"  id="data9" value="<c:out value='${dynTuModelWorkerDTO.data9}'/>">
   					</td>
					<th>
						<label for="deptId">申请单位ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptId"  id="deptId" value="<c:out value='${dynTuModelWorkerDTO.deptId}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data5">字段_5:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data5"  id="data5" value="<c:out value='${dynTuModelWorkerDTO.data5}'/>">
   					</td>
					<th>
						<label for="educationLevel">学历:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="educationLevel"  id="educationLevel" value="<c:out value='${dynTuModelWorkerDTO.educationLevel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data6">DATA_6:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data6"  id="data6" value="<c:out value='${dynTuModelWorkerDTO.data6}'/>">
   					</td>
					<th>
						<label for="autoCode">表单编号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" value="<c:out value='${dynTuModelWorkerDTO.autoCode}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data7">DATA_7:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data7"  id="data7" value="<c:out value='${dynTuModelWorkerDTO.data7}'/>">
   					</td>
					<th>
						<label for="data8">DATA_8:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data8"  id="data8" value="<c:out value='${dynTuModelWorkerDTO.data8}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptThreeName">三级部门名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptThreeName"  id="deptThreeName" value="<c:out value='${dynTuModelWorkerDTO.deptThreeName}'/>">
   					</td>
					<th>
						<label for="professionalRank">职称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" value="<c:out value='${dynTuModelWorkerDTO.professionalRank}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="politicalOutlook">政治面貌:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="politicalOutlook"  id="politicalOutlook" value="<c:out value='${dynTuModelWorkerDTO.politicalOutlook}'/>">
   					</td>
					<th>
						<label for="modelLevel">新增荣誉层级:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelLevel"  id="modelLevel" value="<c:out value='${dynTuModelWorkerDTO.modelLevel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="speciality">专业:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="speciality"  id="speciality" value="<c:out value='${dynTuModelWorkerDTO.speciality}'/>">
   					</td>
					<th>
						<label for="modelCompany">公司级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCompany"  id="modelCompany" value="<c:out value='${dynTuModelWorkerDTO.modelCompany}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestUserId">申请人_ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="requestUserId"  id="requestUserId" value="<c:out value='${dynTuModelWorkerDTO.requestUserId}'/>">
   					</td>
					<th>
						<label for="deptName">申请单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptName"  id="deptName" value="<c:out value='${dynTuModelWorkerDTO.deptName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="sex">年龄:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="sex"  id="sex" value="<c:out value='${dynTuModelWorkerDTO.sex}'/>">
   					</td>
					<th>
						<label for="modelCountry">国家级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCountry"  id="modelCountry" value="<c:out value='${dynTuModelWorkerDTO.modelCountry}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelEconomize">省部级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelEconomize"  id="modelEconomize" value="<c:out value='${dynTuModelWorkerDTO.modelEconomize}'/>">
   					</td>
					<th>
						<label for="deptTwoId">二级部门ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptTwoId"  id="deptTwoId" value="<c:out value='${dynTuModelWorkerDTO.deptTwoId}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="workDate">参加工作日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="workDate" id="workDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynTuModelWorkerDTO.workDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="honorName">荣誉名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="honorName"  id="honorName" value="<c:out value='${dynTuModelWorkerDTO.honorName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="categoryType">发动机分类:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="categoryType"  id="categoryType" value="<c:out value='${dynTuModelWorkerDTO.categoryType}'/>">
   					</td>
					<th>
						<label for="postName">岗位名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="postName"  id="postName" value="<c:out value='${dynTuModelWorkerDTO.postName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userCode">人员编码:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userCode"  id="userCode" value="<c:out value='${dynTuModelWorkerDTO.userCode}'/>">
   					</td>
					<th>
						<label for="honorFileName">荣誉颁发文件名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="honorFileName"  id="honorFileName" value="<c:out value='${dynTuModelWorkerDTO.honorFileName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestDate">申请日期:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="requestDate"  id="requestDate" value="<c:out value='${dynTuModelWorkerDTO.requestDate}'/>">
   					</td>
					<th>
						<label for="appointmentLevel">聘任职级:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="appointmentLevel"  id="appointmentLevel" value="<c:out value='${dynTuModelWorkerDTO.appointmentLevel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tel">联系方式:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="tel" id="tel"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynTuModelWorkerDTO.tel}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="deptOneName">一级部门名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptOneName"  id="deptOneName" value="<c:out value='${dynTuModelWorkerDTO.deptOneName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelCity">地市级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCity"  id="modelCity" value="<c:out value='${dynTuModelWorkerDTO.modelCity}'/>">
   					</td>
					<th>
						<label for="modelName">劳模姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelName"  id="modelName" value="<c:out value='${dynTuModelWorkerDTO.modelName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data14">DATA_14:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data14"  id="data14" value="<c:out value='${dynTuModelWorkerDTO.data14}'/>">
   					</td>
					<th>
						<label for="honorDate">获奖年月:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="honorDate" id="honorDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynTuModelWorkerDTO.honorDate}'/>" />
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynTuModelWorker_closeForm">返回</a>
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
			parent.dynTuModelWorker.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynTuModelWorker_closeForm').bind('click', function(){
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

