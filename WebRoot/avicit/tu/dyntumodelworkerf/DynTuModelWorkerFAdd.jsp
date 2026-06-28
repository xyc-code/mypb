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
<!-- ControllerPath = "avicit/tu/dynTuModelWorkerF/dynTuModelWorkerFController/operation/Add/null" -->
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
						<label for="requestUserId">申请人_ID:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="requestUserId"  id="requestUserId" />
   					</td>
					<th width="15%">
						<label for="deptName">申请单位:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="deptName"  id="deptName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data11">DATA_11:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="data11" id="data11" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="data10">DATA_10:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="data10" id="data10" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelCountry">国家级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCountry"  id="modelCountry" />
   					</td>
					<th>
						<label for="modelEconomize">省部级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelEconomize"  id="modelEconomize" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requestUser">申请人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requestUser"  id="requestUser" />
   					</td>
					<th>
						<label for="annex">荣誉颁发文件及证书照片附件:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="annex"  id="annex" />
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
						<label for="data1">劳模姓名ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data1"  id="data1" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data2">字段_2:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data2"  id="data2" />
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
						<label for="data3">字段_3:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data3"  id="data3" />
   					</td>
					<th>
						<label for="data4">DATA_4:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data4"  id="data4" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptId">申请单位ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="deptId"  id="deptId" />
   					</td>
					<th>
						<label for="data9">DATA_9:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data9"  id="data9" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelName">劳模姓名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelName"  id="modelName" />
   					</td>
					<th>
						<label for="clob">照片文件2:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="clob"  id="clob" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data5">DATA_5:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data5"  id="data5" />
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
						<label for="data6">DATA_6:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data6"  id="data6" />
   					</td>
					<th>
						<label for="data7">DATA_7:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data7"  id="data7" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="data8">DATA_8:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="data8"  id="data8" />
   					</td>
					<th>
						<label for="userCode">人员编码:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userCode"  id="userCode" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="honorFileName">荣誉颁发文件名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="honorFileName"  id="honorFileName" />
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
    			<tr>
					<th>
						<label for="requestDate">申请日期:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requestDate"  id="requestDate" />
   					</td>
					<th>
						<label for="modelLevel">新增荣誉层级:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="modelLevel" id="modelLevel" title="" isNull="true" lookupCode="MODELNAMELEVEL" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tel">联系方式:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="tel" id="tel" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="modelCity">地市级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCity"  id="modelCity" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="modelCompany">公司级荣誉:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="modelCompany"  id="modelCompany" />
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynTuModelWorkerF_saveForm">保存</a>
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
			parent.dynTuModelWorkerF.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynTuModelWorkerF_saveForm').addClass('disabled').unbind("click");	
			parent.dynTuModelWorkerF.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynTuModelWorkerF.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynTuModelWorkerF_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynTuModelWorkerF_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

