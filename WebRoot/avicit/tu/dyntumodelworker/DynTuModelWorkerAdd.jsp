<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="data11">DATA_11:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="data11" id="data11" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="data10">流程ID:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="data10"  id="data10" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data12">DATA_12:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="data12" id="data12" data-min="-99999" data-max="99999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="requestUser">申请人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requestUser"  id="requestUser" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="annex">荣誉颁发文件及证书照片附件:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="annex"  id="annex" />
   					</td>
					<th>
						<label for="deptTwoName">二级部门名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptTwoName"  id="deptTwoName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="honorOrgan">荣誉颁发机构:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="honorOrgan"  id="honorOrgan" />
   					</td>
					<th>
						<label for="nation">民族:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptOneId">一级部门ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptOneId"  id="deptOneId" />
   					</td>
					<th>
						<label for="deptThreeId">三级部门ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptThreeId"  id="deptThreeId" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data1">性别:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="data1" id="data1" title="" isNull="true" lookupCode="PLATFORM_SEX" />
   					</td>
					<th>
						<label for="data2">DATA_2:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data2"  id="data2" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data3">DATA_3:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data3"  id="data3" />
   					</td>
					<th>
						<label for="skillLevel">技能等级:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="skillLevel"  id="skillLevel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data4">DATA_4:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data4"  id="data4" />
   					</td>
					<th>
						<label for="birthday">出生日期:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="birthday" id="birthday" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data9">DATA_9:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data9"  id="data9" />
   					</td>
					<th>
						<label for="deptId">申请单位ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptId"  id="deptId" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data5">字段_5:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data5"  id="data5" />
   					</td>
					<th>
						<label for="educationLevel">学历:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="educationLevel"  id="educationLevel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data6">DATA_6:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data6"  id="data6" />
   					</td>
					<th>
						<label for="autoCode">表单编号:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data7">DATA_7:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data7"  id="data7" />
   					</td>
					<th>
						<label for="data8">DATA_8:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data8"  id="data8" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptThreeName">三级部门名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptThreeName"  id="deptThreeName" />
   					</td>
					<th>
						<label for="professionalRank">职称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="politicalOutlook">政治面貌:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="politicalOutlook"  id="politicalOutlook" />
   					</td>
					<th>
						<label for="modelLevel">新增荣誉层级:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelLevel"  id="modelLevel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="speciality">专业:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="speciality"  id="speciality" />
   					</td>
					<th>
						<label for="modelCompany">公司级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCompany"  id="modelCompany" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestUserId">申请人_ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requestUserId"  id="requestUserId" />
   					</td>
					<th>
						<label for="deptName">申请单位:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptName"  id="deptName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="sex">年龄:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="sex"  id="sex" />
   					</td>
					<th>
						<label for="modelCountry">国家级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCountry"  id="modelCountry" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelEconomize">省部级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelEconomize"  id="modelEconomize" />
   					</td>
					<th>
						<label for="deptTwoId">二级部门ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptTwoId"  id="deptTwoId" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="workDate">参加工作日期:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="workDate" id="workDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="honorName">荣誉名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="honorName"  id="honorName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="categoryType">发动机分类:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="categoryType"  id="categoryType" />
   					</td>
					<th>
						<label for="postName">岗位名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="postName"  id="postName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userCode">人员编码:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userCode"  id="userCode" />
   					</td>
					<th>
						<label for="honorFileName">荣誉颁发文件名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="honorFileName"  id="honorFileName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestDate">申请日期:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requestDate"  id="requestDate" />
   					</td>
					<th>
						<label for="appointmentLevel">聘任职级:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="appointmentLevel"  id="appointmentLevel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tel">联系方式:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="tel" id="tel" data-min="-99999" data-max="99999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="deptOneName">一级部门名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptOneName"  id="deptOneName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelCity">地市级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCity"  id="modelCity" />
   					</td>
					<th>
						<label for="modelName">劳模姓名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelName"  id="modelName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data14">DATA_14:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data14"  id="data14" />
   					</td>
					<th>
						<label for="honorDate">获奖年月:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="honorDate" id="honorDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynTuModelWorker_saveForm">保存</a>
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
		//遮罩
		var maskId = null;
		//初始化时间控件
		function initDateSelect(){
			$('.date-picker').datepicker({
				beforeShow: function(selectedDate) {
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.time-picker').datetimepicker({
				oneLine:true,//单行显示时分秒
				closeText:'确定',//关闭按钮文案
				showButtonPanel:true,//是否展示功能按钮面板
				showSecond:false,//是否可以选择秒，默认否
				beforeShow: function(selectedDate) {
					if($('#'+selectedDate.id).val()==""){
							$(this).datetimepicker("setDate", new Date());
							$('#'+selectedDate.id).val('');
					}
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		}
	
		function closeForm(){
			parent.dynTuModelWorker.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynTuModelWorker_saveForm').addClass('disabled').unbind("click");	
			parent.dynTuModelWorker.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynTuModelWorker.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynTuModelWorker_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynTuModelWorker_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

