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
<!-- ControllerPath = "avicit/pb/pojo/partyRestPojo/dynSubHjxjdydh3/dynSubHjxjdydh3Controller/operation/Add/null" -->
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
						<label for="fkSubColId">外键:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="fkSubColId"  id="fkSubColId" />
   					</td>
					<th width="15%">
						<label for="sn">序号:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="sn"  id="sn" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="name">姓名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="name"  id="name" />
   					</td>
					<th>
						<label for="gender">性别:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="gender"  id="gender" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="divisionLabor">委员分工:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="divisionLabor"  id="divisionLabor" />
   					</td>
					<th>
						<label for="numberVotes">得票数:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="numberVotes" id="numberVotes" data-min="-99999999999999999999999999999999999999" data-max="99999999999999999999999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="birthday">出生日期:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="birthday"  id="birthday" />
   					</td>
					<th>
						<label for="post">职务:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="proTitle">职称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="proTitle"  id="proTitle" />
   					</td>
					<th>
						<label for="timeJoin">入党时间:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="timeJoin"  id="timeJoin" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="timeWork">参加工作时间:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="timeWork"  id="timeWork" />
   					</td>
					<th>
						<label for="tel">联系方式:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" />
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynSubHjxjdydh3_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynSubHjxjdydh3_closeForm">返回</a>
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
			parent.dynSubHjxjdydh3.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynSubHjxjdydh3_saveForm').addClass('disabled').unbind("click");	
			parent.dynSubHjxjdydh3.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynSubHjxjdydh3.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynSubHjxjdydh3_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynSubHjxjdydh3_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

