
<%@page import="avicit.platform6.api.session.SessionHelper"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
String loginManagerUserId = SessionHelper.getLoginSysUserId(request);
%>
<!DOCTYPE html>
<html>
<head>
<title>编辑</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<style type="text/css">
.achieveTd{
	text-align: center!important;
	border: 1px solid #e8e8e8;
}
</style>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${partyMemberDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${partyMemberDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId" value="<c:out value='${partyMemberDTO.userId}'/>">
							<input class="form-control" readonly="readonly" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias" value="<c:out value='${partyMemberDTO.userIdAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">一级部门:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${partyMemberDTO.deptId}'/>">
							<input class="form-control"  readonly="readonly" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" value="<c:out value='${partyMemberDTO.deptIdAlias}'/>">
							<span class="input-group-addon"> 
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyId">党支部:</label></th>
					<td>
						<div class="input-group input-group-sm">
						<input type="hidden" name="partyId"  id="partyId" value="<c:out value='${partyMemberDTO.partyId}'/>">
						<input class="form-control" placeholder="请选择党支部" type="text" id="partyIdAlias" name="partyIdAlias" value="<c:out value='${partyMemberDTO.partyIdAlias}'/>">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
   					</td>
					<th>
						<label for="attribute01Alias">所在党小组:</label>
					</th>
					<td>
					<div class="input-group input-group-sm">
						<input type="hidden" name="attribute01"  id="attribute01" value="<c:out value='${partyMemberDTO.attribute01}'/>"/>
						<input class="form-control" placeholder="请选择党小组" type="text" id="attribute01Alias" name="attribute01Alias" value="<c:out value='${partyMemberDTO.attribute01Alias}'/>">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
   					</td>
				</tr>
				<tr>
					<th>
						<label for="attribute06">党小组长:</label>
					</th>
					<td>
						  <pt6:h5select css_class="form-control input-sm" name="attribute06" id="attribute06" title="" isNull="true" lookupCode="PM_GROUP_LEADER_YN" defaultValue="${partyMemberDTO.attribute06}"/>
   					</td>
   						<th>
						<label for="attribute07">各级党代表:</label>
					</th>
					<td>
					<!--<pt6:h5select css_class="form-control input-sm" name="attribute07" id="attribute07" title="" isNull="true" lookupCode="PM_REPRESENT_LEVEL" defaultValue="${partyMemberDTO.attribute07}"/>
										<input class="form-control input-sm" type="text" name="attribute07"  id="attribute07" />-->
											<input class="form-control input-sm" type="text" name="attribute07"  id="attribute07" value="<c:out value='${partyMemberDTO.attribute07}'/>"/>
   					</td>
					
				</tr>
		
				
				<tr>
				<th>
						<label for="userCode">人员编码:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userCode"  id="userCode" value="<c:out value='${partyMemberDTO.userCode}'/>"/>
   					</td>
					<th>
						<label for="branchPost">党内职务:</label>
					</th>
					<td>
						<!--  <input class="form-control input-sm" type="text" name="branchPost"  id="branchPost" value="<c:out value='${partyMemberDTO.branchPost}'/>"/>-->
						
						   <pt6:h5select css_class="form-control input-sm" name="branchPost" id="branchPost" title="" isNull="true" lookupCode="PM_BRANCH_POST_TYPE" defaultValue="${partyMemberDTO.branchPost}"/>
   					</td>
   					 
				</tr>
    			<tr>
					<th>
						<label for="sex">性别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" defaultValue="${partyMemberDTO.sex}" />
   					</td>
					<th>
						<label for="birthday">出生年月:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="birthday" id="birthday" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyMemberDTO.birthday}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="nation">民族:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" value="<c:out value='${partyMemberDTO.nation}'/>">
   					</td>
					<th>
						<label for="orign">籍贯:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="orign"  id="orign" value="<c:out value='${partyMemberDTO.orign}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="birthPlace">出生地:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="birthPlace"  id="birthPlace" value="<c:out value='${partyMemberDTO.birthPlace}'/>">
   					</td>
					<th>
						<label for="educationSector">教育类别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="educationSector" id="educationSector" title="" isNull="true" lookupCode="PM_EDUCATION_TYPE" defaultValue="${partyMemberDTO.educationSector}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinParty">入党时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="joinParty" id="joinParty" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyMemberDTO.joinParty}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="educationLevel">文化程度:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="educationLevel" id="educationLevel" title="" isNull="true" lookupCode="PM_EDUCATION_LEVEL" defaultValue="${partyMemberDTO.educationLevel}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinpartyDept">入党单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="joinpartyDept"  id="joinpartyDept" value="<c:out value='${partyMemberDTO.joinpartyDept}'/>">
   					</td>
					<th>
						<label for="partyType">党员类别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="partyType" id="partyType" title="" isNull="true" lookupCode="PM_PARTY_TYPE" defaultValue="${partyMemberDTO.partyType}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="introducer">介绍人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="introducer"  id="introducer" value="<c:out value='${partyMemberDTO.introducer}'/>">
   					</td>
					<!--  <th>
						<label for="graduationTime">毕业时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="graduationTime" id="graduationTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyMemberDTO.graduationTime}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>-->
   					
   						<th>
						<label for="category">身份类别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="category" id="category" title="" isNull="true" lookupCode="PM_CATEGORY" defaultValue="${partyMemberDTO.category}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="workTime">参加工作时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="workTime" id="workTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyMemberDTO.workTime}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="post">职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" value="<c:out value='${partyMemberDTO.post}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="professionalRank">职称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" value="<c:out value='${partyMemberDTO.professionalRank}'/>">
   					</td>
   					<th>
						<label for="attribute03">职称等级:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="attribute03" id="attribute03" title="" isNull="true" lookupCode="PM_PROFESSIONAL_RANK_LEVEL" defaultValue="${partyMemberDTO.attribute03}"/>
   					</td>
				</tr>
				<tr>
					<th>
						<label for="attribute04">技能等级:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="attribute04" id="attribute04" title="" isNull="true" lookupCode="PM_SKILL_LEVEL" defaultValue="${partyMemberDTO.attribute04}" />
   					</td>
   					<th>
						<label for="joinbranchType">进入支部类型:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="joinbranchType" id="joinbranchType" title="" isNull="true" lookupCode="PM_JOINBRANCH_TYPE" defaultValue="${partyMemberDTO.joinbranchType}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinzgType">加入中共组织类型:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="joinzgType" id="joinzgType" title="" isNull="true" lookupCode="PM_JOINZG_TYPE" defaultValue="${partyMemberDTO.joinzgType}" />
   					</td>
					<th>
						<label for="regularDate">转正日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="regularDate" id="regularDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyMemberDTO.regularDate}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearRegularDateValue()"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="regularType" id = "regularTypeLabel">转正类别:</label>
					</th>
					<td id="regularTypeTd">
						<pt6:h5select css_class="form-control input-sm" name="regularType" id="regularType" title="" isNull="true" lookupCode="PM_REGULAR_TYPE" defaultValue="${partyMemberDTO.regularType}" />
   					</td>
					<th>
						<label for="attribute05">党龄:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute05"  id="attribute05" disabled="disabled" value="<c:out value='${partyMemberDTO.attribute05}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="idcard">身份证号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="idcard"  id="idcard" value="<c:out value='${partyMemberDTO.idcard}'/>">
   					</td>
					<th>
						<label for="address">常住地址:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="address"  id="address" value="<c:out value='${partyMemberDTO.address}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tel">联系电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" value="<c:out value='${partyMemberDTO.tel}'/>">
   					</td>
					<!--  <th>
						<label for="registerAddress">户口地址:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="registerAddress"  id="registerAddress" value="<c:out value='${partyMemberDTO.registerAddress}'/>">
   					</td>-->
   					 <th>
						<label for="attribute02">年龄:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute02"  id="attribute02" disabled="disabled"  value="<c:out value='${partyMemberDTO.attribute02}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyMoney">党费:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="partyMoney" id="partyMoney" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="2" value="<c:out value='${partyMemberDTO.partyMoney}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="onoffJob">在职/离职:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="onoffJob" id="onoffJob" title="" isNull="true" lookupCode="PM_ONOFF_JOB" defaultValue="${partyMemberDTO.onoffJob}" />
   					</td>
				</tr>
    			<tr>
					
   					 <th>
						<label for="status">是否有效:</label>
					</th>
					<td>
					<pt6:h5select css_class="form-control input-sm" name="status"  id="status" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" defaultValue="${partyMemberDTO.status}"/>
			
   					</td>
				</tr>
				<tr>
					<th>
						<label for="attribute08">党内荣誉:</label>
					</th>
					<td colspan="3">
						 <textarea class="form-control input-sm " style="resize:none;width:100%" rows="6" id="attribute08" name="attribute08" title="" maxlength="4000" ><c:out value='${partyMemberDTO.attribute08}'/></textarea>
   					</td>
				</tr>
				<tr>
   					<th>
						<label for="attribute09">党纪处分:</label>
					</th>
					<td colspan="3">
						 <textarea class="form-control input-sm " style="resize:none;" rows="6" id="attribute09" name="attribute09" title="" maxlength="4000"><c:out value='${partyMemberDTO.attribute09}'/></textarea>
   					</td>
				</tr>
				<tr id="userAchievements" style="display: none;">
   					<th>
						<label>绩效考核信息:</label>
					</th>
					<td colspan="3">
						<table id="userAchievementsTable" style="width:100%;text-align:center;font-size:14px;">
						</table>
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="partyMember_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="partyMember_closeForm">返回</a>
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
		var manageUserId = '<%=loginManagerUserId%>';
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
			parent.partyMember.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            //表单字段较多时，直接定位到当前字段
	            $(isValidate.errorList[0].element).focus();
	            return false;
	        }
  		 	$('#partyMember_saveForm').addClass('disabled').unbind("click");	
			parent.partyMember.save($('#form'),"edit");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		function clearRegularDateValue() {
			$("#regularDate").val("");
			$("#regularTypeLabel").empty();
			$("#regularTypeLabel").text("转正类别");
			$("<option value=''>请选择</option>").prependTo($("#regularType"));
			$("#regularType").val("");
		}
		//20241128 addby wenc 添加人员绩效考核信息
		function initAchievements(){
			avicAjax.ajax({
				url : 'platform/avicit/pb/utils/pbUtilsController/getDyAchievements',
				data : {
					userId : '${partyMemberDTO.userId}',
					queryYears : '6'
				},
				type : 'POST',
				dataType : 'JSON',
				success : function(result) {
					if(result.list.length > 0){
						var achievementsHtml = '<tr><th width="50%" class="achieveTd">年份</td><th width="50%" class="achieveTd">绩效</td></tr>';
						for(var i = 0; i < result.list.length; i++){
							achievementsHtml += '<tr><td class="achieveTd">' + result.list[i].achievementsPeriod + '</td>';
							achievementsHtml += '<td class="achieveTd">' + result.list[i].achievementsLevel + '</td></tr>'
						}
						$('#userAchievementsTable').html(achievementsHtml);
						$('#userAchievements').show();
					}
				}
			})
		}
		//20241128 endby wenc 添加人员绩效考核信息
		$(document).ready(function () {
			if(manageUserId === '1'){
				$("#deptIdAlias").removeAttr("readonly");
				$('#deptIdAlias').on('focus',function(e){
					new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
					this.blur();
					nullInput(e);
				});
			}
			initDateSelect();
			$.validator.addMethod("minDate", function(value, element) {
				var returnVal = false;
		        if(value == ""){
		        	returnVal = true;
				}
				var inputDate = new Date(value.replace(/-/g,"/"));
				var curDate = new Date();
				if(inputDate < curDate ){
					returnVal = true;
				}
				return returnVal;
			}, "所选日期必须小于当前日期！！！");
			parent.partyMember.formValidate($('#form'));
			//20241120 modby wenc 放开修改编辑党员类别权限
			// $("#partyType").attr("disabled","disabled");
	       	// $("#attribute03").attr("disabled","disabled");
	        var professionalRankVal1 =   $("#professionalRank").val();
			var professionalRankVal1Trim = professionalRankVal1.replace(/\s*/g,"");
			if(professionalRankVal1Trim != ""){
				$("#attribute03").removeAttr("disabled","disabled");
			}else{
				
				$("#attribute03").attr("disabled","disabled");
			}
			//console.log($("#attribute03").val());
		
			//$('#professionalRank').bind('change', function(){
				//var professionalRankVal =   $(this).val();
				//var professionalRankValTrim = professionalRankVal.replace(/\s*/g,"");
				//console.log($("#attribute03").val());
				//if(professionalRankValTrim != ""){
					//$("#attribute03").removeAttr("disabled","disabled");
				//}else{
					//$("#attribute03").val("");
					//$("#attribute03").attr("disabled","disabled");
				//}
				
			//}); 
			
			var regularDateVal =  $("#regularDate").val();
			//var professionalRankVal1Trim = professionalRankVal1.replace(/\s*/g,"");
			if(regularDateVal != ""){
				$("#regularTypeLabel").empty();
				$("#regularTypeLabel").text("转正类别");
				$("<i class='required'>*</i>").prependTo($("#regularTypeLabel"));
			}else{
				$("#regularTypeLabel").empty();
				$("#regularTypeLabel").text("转正类别");
				//	$("<i class='required'>*</i>").prependTo($("#regularTypeLabel"));
			}
			$('#regularDate').bind('change', function(){
				$("#regularTypeLabel").empty();
				$("#regularTypeLabel").text("转正类别");
				$("<i class='required'>*</i>").prependTo($("#regularTypeLabel"));
			
				$("#regularType option[value='']").remove();
				$("#regularType").val("0");
				
				//$("#regularTypeTd").empty();
				//$("#regularTypeTd").css("position" ,"relative");
				//$("<select id='regularType' name='regularType' class='form-control input-sm error' title='' data-options='' style='' aria-required='true' aria-describedby='regularType-error'><option value=''>请选择</option><option value='0'>按期转正</option><option value='1'>延长预备期转正</option><option value='2'>预备期满尚未讨论</option><option value='3'>延长预备期</option><option value='4'>预备期满杯录取为预备党员资格</option></select><div class='errDom'><div class='avic-errtip'></div><div class='errtipmsg hov'><i></i><div id='regularType-error' class='error'>该值不允许为空！请输入或选择。</div></div></div>").prependTo($("#regularTypeTd"));
			}); 
			
			//保存按钮绑定事件
			$('#partyMember_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#partyMember_closeForm').bind('click', function(){
				closeForm();
			});
			
			//查询人员绩效考核信息
			initAchievements();
			
			/*$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
				this.blur();
				nullInput(e);
			}); 
			$('#deptIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			});
			function selectUserCallBack(user){
				$("#userCode").val(user.loginNames);
			};
			$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias',callBack:selectUserCallBack,selectModel:'single',deptidFiled:'deptId',deptNameFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			}); */
			$('#partyIdAlias').on('focus',function(e){
				var selectIndex = layer.open({
			        type: 2,
			        area: ['50%', '50%'],
			        title: '选择父节点',
			        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
			        maxmin: false, //开启最大化最小化按钮
			        content:  'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
			        btn: ['确定', '取消'],
			        yes: function(index, layero){
			        	//debugger;
			        	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
			        	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
			        	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
			        	var selectedNewNode = iframeWin.getSelectedNode();
			        	if (selectedNewNode.attributes.partyCode == '1') {
					
							layer.alert('所选择节点不能是根节点！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});
							return;
						}
						/*var curNodeId = selectedNodes[0].id;
						if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
							layer.alert('所选择父节点不合法，请重新选择！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});
							return;
						}
						if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
							if (selectedNewNode.id == curNodeId) {
								layer.alert('所选择父节点不能是本节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							} else {
								layer.alert('所选择父节点不能是本节点的子节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							}
							return;
						}*/
						$("#partyId").val(selectedNewNode.id);
						$("#partyIdAlias").val(selectedNewNode.text);
						layer.close(layer.index);
						layer.close(selectIndex);
			        },
					btn2: function(index, layero){
					    layer.close(index);
					}
			    });
			
				this.blur();
				nullInput(e);
			}); 
			$('#attribute01Alias').on('focus',function(e){
				var selectIndex = layer.open({
			        type: 2,
			        area: ['50%', '50%'],
			        title: '选择父节点',
			        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
			        maxmin: false, //开启最大化最小化按钮
			        content:  'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
			        btn: ['确定', '取消'],
			        yes: function(index, layero){
			        	//debugger;
			        	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
			        	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
			        	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
			        	var selectedNewNode = iframeWin.getSelectedNode();
			        	if (selectedNewNode.attributes.partyCode == '1') {
							layer.alert('所选择节点不能是根节点！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});
							return;
						}
						/*var curNodeId = selectedNodes[0].id;
						if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
							layer.alert('所选择父节点不合法，请重新选择！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});
							return;
						}
						if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
							if (selectedNewNode.id == curNodeId) {
								layer.alert('所选择父节点不能是本节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							} else {
								layer.alert('所选择父节点不能是本节点的子节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							}
							return;
						}*/
						$("#attribute01").val(selectedNewNode.id);
						$("#attribute01Alias").val(selectedNewNode.text);
						layer.close(layer.index);
						layer.close(selectIndex);
			        },
					btn2: function(index, layero){
					    layer.close(index);
					}
			    });
			
				this.blur();
				nullInput(e);
			}); 
		});
		
	</script>
</body>
</html>

