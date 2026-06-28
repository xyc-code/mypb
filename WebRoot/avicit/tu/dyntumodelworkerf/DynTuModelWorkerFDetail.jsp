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
			<input type="hidden" name="id" value="<c:out value='${dynTuModelWorkerFDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynTuModelWorkerFDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="requestUserId">申请人_ID:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="requestUserId"  id="requestUserId" value="<c:out value='${dynTuModelWorkerFDTO.requestUserId}'/>">
   					</td>
					<th width="15%">
						<label for="deptName">申请单位:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="deptName"  id="deptName" value="<c:out value='${dynTuModelWorkerFDTO.deptName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data11">DATA_11:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="data11" id="data11"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynTuModelWorkerFDTO.data11}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="data10">DATA_10:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="data10" id="data10" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynTuModelWorkerFDTO.data10}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelCountry">国家级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCountry"  id="modelCountry" value="<c:out value='${dynTuModelWorkerFDTO.modelCountry}'/>">
   					</td>
					<th>
						<label for="modelEconomize">省部级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelEconomize"  id="modelEconomize" value="<c:out value='${dynTuModelWorkerFDTO.modelEconomize}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestUser">申请人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="requestUser"  id="requestUser" value="<c:out value='${dynTuModelWorkerFDTO.requestUser}'/>">
   					</td>
					<th>
						<label for="annex">荣誉颁发文件及证书照片附件:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="annex"  id="annex" value="<c:out value='${dynTuModelWorkerFDTO.annex}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="honorOrgan">荣誉颁发机构:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="honorOrgan"  id="honorOrgan" value="<c:out value='${dynTuModelWorkerFDTO.honorOrgan}'/>">
   					</td>
					<th>
						<label for="data1">劳模姓名ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data1"  id="data1" value="<c:out value='${dynTuModelWorkerFDTO.data1}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data2">字段_2:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data2"  id="data2" value="<c:out value='${dynTuModelWorkerFDTO.data2}'/>">
   					</td>
					<th>
						<label for="honorName">荣誉名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="honorName"  id="honorName" value="<c:out value='${dynTuModelWorkerFDTO.honorName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data3">字段_3:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data3"  id="data3" value="<c:out value='${dynTuModelWorkerFDTO.data3}'/>">
   					</td>
					<th>
						<label for="data4">DATA_4:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data4"  id="data4" value="<c:out value='${dynTuModelWorkerFDTO.data4}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptId">申请单位ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="deptId"  id="deptId" value="<c:out value='${dynTuModelWorkerFDTO.deptId}'/>">
   					</td>
					<th>
						<label for="data9">DATA_9:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data9"  id="data9" value="<c:out value='${dynTuModelWorkerFDTO.data9}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelName">劳模姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelName"  id="modelName" value="<c:out value='${dynTuModelWorkerFDTO.modelName}'/>">
   					</td>
					<th>
						<label for="clob">照片文件2:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="clob"  id="clob" value="<c:out value='${dynTuModelWorkerFDTO.clob}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data5">DATA_5:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data5"  id="data5" value="<c:out value='${dynTuModelWorkerFDTO.data5}'/>">
   					</td>
					<th>
						<label for="autoCode">表单编号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" value="<c:out value='${dynTuModelWorkerFDTO.autoCode}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data6">DATA_6:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data6"  id="data6" value="<c:out value='${dynTuModelWorkerFDTO.data6}'/>">
   					</td>
					<th>
						<label for="data7">DATA_7:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data7"  id="data7" value="<c:out value='${dynTuModelWorkerFDTO.data7}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data8">DATA_8:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="data8"  id="data8" value="<c:out value='${dynTuModelWorkerFDTO.data8}'/>">
   					</td>
					<th>
						<label for="userCode">人员编码:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userCode"  id="userCode" value="<c:out value='${dynTuModelWorkerFDTO.userCode}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="honorFileName">荣誉颁发文件名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="honorFileName"  id="honorFileName" value="<c:out value='${dynTuModelWorkerFDTO.honorFileName}'/>">
   					</td>
					<th>
						<label for="honorDate">获奖年月:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="honorDate" id="honorDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynTuModelWorkerFDTO.honorDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestDate">申请日期:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="requestDate"  id="requestDate" value="<c:out value='${dynTuModelWorkerFDTO.requestDate}'/>">
   					</td>
					<th>
						<label for="modelLevel">新增荣誉层级:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="modelLevel" id="modelLevel" title="" isNull="true" lookupCode="MODELNAMELEVEL" defaultValue="${dynTuModelWorkerFDTO.modelLevel}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tel">联系方式:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="tel" id="tel"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynTuModelWorkerFDTO.tel}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="modelCity">地市级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCity"  id="modelCity" value="<c:out value='${dynTuModelWorkerFDTO.modelCity}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelCompany">公司级荣誉:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCompany"  id="modelCompany" value="<c:out value='${dynTuModelWorkerFDTO.modelCompany}'/>">
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynTuModelWorkerF_closeForm">返回</a>
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
			parent.dynTuModelWorkerF.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynTuModelWorkerF_closeForm').bind('click', function(){
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

