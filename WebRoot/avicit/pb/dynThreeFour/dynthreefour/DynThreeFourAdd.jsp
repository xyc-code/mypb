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
<!-- ControllerPath = "avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController/operation/Add/null" -->
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
						<label for="joinMeetOrg">参会组织名称:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="joinMeetOrg"  id="joinMeetOrg" />
   					</td>
					<th width="15%">
						<label for="meetDate">会议时间:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="meetDate" id="meetDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="meetPlace">会议地点:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetPlace"  id="meetPlace" />
   					</td>
					<th>
						<label for="meetName">会议名称：:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetName"  id="meetName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinPeople">参会人员:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="joinPeople"  id="joinPeople" />
   					</td>
					<th>
						<label for="meetType">会议类型:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetType"  id="meetType" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="meetOutline">会议提纲:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetOutline"  id="meetOutline" />
   					</td>
					<th>
						<label for="hoursRecordYn">是否记录培训学时:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="hoursRecordYn"  id="hoursRecordYn" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="learnHours">学时:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="learnHours" id="learnHours" data-min="-9999999999999999999.9" data-max="9999999999999999999.9" data-step="1" data-precision="1">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="meetTheme">会议主题:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetTheme"  id="meetTheme" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="duePeopleNum">应到会人数:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="duePeopleNum" id="duePeopleNum" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="actualPeopleNum">实到会人数:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="actualPeopleNum" id="actualPeopleNum" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leavePeopleNum">缺席人数:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="leavePeopleNum" id="leavePeopleNum" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="joinMeetRate">参会率:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="joinMeetRate" id="joinMeetRate" data-min="-999999999999999999.99" data-max="999999999999999999.99" data-step="1" data-precision="2">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leavePeople">请假人员名单:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="leavePeople"  id="leavePeople" />
   					</td>
					<th>
						<label for="speaker">主讲人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="speaker"  id="speaker" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="lecturer">授课人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="lecturer"  id="lecturer" />
   					</td>
					<th>
						<label for="hostTaker">主持人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="hostTaker"  id="hostTaker" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="noteTaker">记录人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="noteTaker"  id="noteTaker" />
   					</td>
					<th>
						<label for="meetResult">会议结果:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetResult"  id="meetResult" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="remarks">备注:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="remarks"  id="remarks" />
   					</td>
					<th>
						<label for="joinOrg">参会组织名称N:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="joinOrg"  id="joinOrg" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinPeopleNew">参会人员:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="joinPeopleNew"  id="joinPeopleNew" />
   					</td>
					<th>
						<label for="joinOrgId">参会组织ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="joinOrgId"  id="joinOrgId" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinPeopleId">参会人员ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="joinPeopleId"  id="joinPeopleId" />
   					</td>
					<th>
						<label for="secretLevel">密级:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="secretLevel" id="secretLevel" title="" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="speakerOutYn">主讲人是否为外来人员:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="speakerOutYn"  id="speakerOutYn" />
   					</td>
					<th>
						<label for="lecturerOutYn">授课人是否为外来人员：:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="lecturerOutYn"  id="lecturerOutYn" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="hostTakerOutYn">主持人是否为外来人员：:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="hostTakerOutYn"  id="hostTakerOutYn" />
   					</td>
					<th>
						<label for="noteTakerOutYn">记录人是否为外来人员：:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="noteTakerOutYn"  id="noteTakerOutYn" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leavePeopleNew">请假人员名单NEW:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="leavePeopleNew"  id="leavePeopleNew" />
   					</td>
					<th>
						<label for="leavelPeople">请假人员名单:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="leavelPeople"  id="leavelPeople" />
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
						<label for="partyName">申请人所在党支部:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyName"  id="partyName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyId">党支部ID:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyId"  id="partyId" />
   					</td>
					<th>
						<label for="autoCode">自动编号:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyNameNew">参会人员党支部:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyNameNew"  id="partyNameNew" />
   					</td>
					<th>
						<label for="requestTel">申请人电话:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="requestTel"  id="requestTel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyType">党组织类型:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="partyType"  id="partyType" />
   					</td>
					<th>
						<label for="lxPosen">列席人员:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="lxPosen"  id="lxPosen" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="meetZj">会议关键词:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="meetZj"  id="meetZj" />
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynThreeFour_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynThreeFour_closeForm">返回</a>
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
			parent.dynThreeFour.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynThreeFour_saveForm').addClass('disabled').unbind("click");	
			parent.dynThreeFour.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynThreeFour.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynThreeFour_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynThreeFour_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

