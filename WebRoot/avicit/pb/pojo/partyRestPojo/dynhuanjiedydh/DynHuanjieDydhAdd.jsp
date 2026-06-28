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
<!-- ControllerPath = "avicit/pb/pojo/partyRestPojo/dynHuanjieDydh/dynHuanjieDydhController/operation/Add/null" -->
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
						<label for="deptName">申请人所在单位:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="deptName"  id="deptName" />
   					</td>
					<th width="15%">
						<label for="autoCode">表单编号:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userName">申请人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userName"  id="userName" />
   					</td>
					<th>
						<label for="partyName">申请人所在党支部:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyName"  id="partyName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="requstDate">申请日期:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requstDate"  id="requstDate" />
   					</td>
					<th>
						<label for="partyId">党支部ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyId"  id="partyId" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="electionTime">召开党员大会时间:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="electionTime" id="electionTime" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="partyYinggai">应参加有选举权人数:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="partyYinggai" id="partyYinggai" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyShiji">实际参加有选举权人数:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="partyShiji" id="partyShiji" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="threeFourName">三会一课名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="threeFourName"  id="threeFourName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="threeFourId">三会一课ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="threeFourId"  id="threeFourId" />
   					</td>
					<th>
						<label for="threeFourName1">三会一课名称1:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="threeFourName1"  id="threeFourName1" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="threeFourId1">三会一课ID1:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="threeFourId1"  id="threeFourId1" />
   					</td>
					<th>
						<label for="partyNameNew">选举党组织名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyNameNew"  id="partyNameNew" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyType">选举类型:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyType"  id="partyType" />
   					</td>
					<th>
						<label for="userTel">申请人电话:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userTel"  id="userTel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="sfjw">是否显示纪委字段:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="sfjw"  id="sfjw" />
   					</td>
					<th>
						<label for="jwTime">纪律检查委员会一次会议时间:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="jwTime" id="jwTime" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="jwYingga">纪律检查委员会一次会议应参加人数::</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="jwYingga" id="jwYingga" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="jwShiji">纪律检查委员会一次会议实际参加人数：:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="jwShiji" id="jwShiji" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="jwCyl">纪律检查委员会一次会议参与率:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="jwCyl" id="jwCyl" data-min="-999999999999999999.99" data-max="999999999999999999.99" data-step="1" data-precision="2">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="jwThree">纪律检查委员会一次会议记录::</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="jwThree"  id="jwThree" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="jwThreeId">纪委三会一课记录id:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="jwThreeId"  id="jwThreeId" />
   					</td>
					<th>
						<label for="partyNewId">选举党支部id:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyNewId"  id="partyNewId" />
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynHuanjieDydh_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynHuanjieDydh_closeForm">返回</a>
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
			parent.dynHuanjieDydh.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynHuanjieDydh_saveForm').addClass('disabled').unbind("click");	
			parent.dynHuanjieDydh.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynHuanjieDydh.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynHuanjieDydh_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynHuanjieDydh_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

