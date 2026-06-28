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
<!-- ControllerPath = "avicit/pb/member/partyMember/partyMemberController/operation/Add/null" -->
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
						<label for="userIdAlias">姓名:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId">
							<input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">一级部门:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId">
							<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" >
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyIdAlias">党支部:</label>
					</th>
					<td>
							<div class="input-group input-group-sm">
						<input type="hidden" name="partyId"  id="partyId" />
						<input class="form-control" placeholder="请选择党支部" type="text" id="partyIdAlias" name="partyIdAlias">
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
						<input type="hidden" name="attribute01"  id="attribute01" />
						<input class="form-control" placeholder="请选择党小组" type="text" id="attribute01Alias" name="attribute01Alias">
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
						  <pt6:h5select css_class="form-control input-sm" name="attribute06" id="attribute06" title="" isNull="true" lookupCode="PM_GROUP_LEADER_YN" />
   					</td>
   						<th>
						<label for="attribute07">各级党代表:</label>
					</th>
					<td>
					<input class="form-control input-sm" type="text" name="attribute07"  id="attribute07" />
					<!--<pt6:h5select css_class="form-control input-sm" name="attribute07" id="attribute07" title="" isNull="true" lookupCode="PM_REPRESENT_LEVEL" />-->
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
						<label for="branchPost">党内职务:</label>
					</th>
					<td>
						<!--  <input class="form-control input-sm" type="text" name="branchPost"  id="branchPost" />-->
					    <pt6:h5select css_class="form-control input-sm" name="branchPost" id="branchPost" title="" isNull="true" lookupCode="PM_BRANCH_POST_TYPE" />
   					</td>
   					 
				</tr>
    			<tr>
					<th>
						<label for="sex">性别:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" />
   					</td>
					<th>
						<label for="birthday">出生年月:</label>
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
						<label for="nation">民族:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" />
   					</td>
					<th>
						<label for="orign">籍贯:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="orign"  id="orign" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="birthPlace">出生地:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="birthPlace"  id="birthPlace" />
   					</td>
					<th>
						<label for="educationSector">教育类别:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="educationSector" id="educationSector" title="" isNull="true" lookupCode="PM_EDUCATION_TYPE" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinParty">入党时间:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="joinParty" id="joinParty" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="educationLevel">文化程度:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="educationLevel" id="educationLevel" title="" isNull="true" lookupCode="PM_EDUCATION_LEVEL" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="joinpartyDept">入党单位:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="joinpartyDept"  id="joinpartyDept" />
   					</td>
					<th>
						<label for="partyType">党员类别:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="partyType" id="partyType" title="" isNull="true" lookupCode="PM_PARTY_TYPE"  />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="introducer">介绍人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="introducer"  id="introducer" />
   					</td>
   					<th>
						<label for="category">身份类别:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="category" id="category" title="" isNull="true" lookupCode="PM_CATEGORY" />
   					</td>
					<!-- <th>
						<label for="graduationTime">毕业时间:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="graduationTime" id="graduationTime" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td> -->
				</tr>
    			<tr>
					<th>
						<label for="workTime">参加工作时间:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="workTime" id="workTime" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
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
						<label for="professionalRank">职称:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" />
   					</td>
					<th>
						<label for="attribute03">职称等级:</label>
					</th>
					<td>
						
						<pt6:h5select css_class="form-control input-sm" name="attribute03" id="attribute03" title="" isNull="true" lookupCode="PM_PROFESSIONAL_RANK_LEVEL" />
   					</td>
				</tr>
					<tr>
				<th>
						<label for="attribute04">技能等级:</label>
					</th>
					<td>
						
						<!--  <input class="form-control input-sm" type="text" name="attribute04"  id="attribute04" />-->
						<pt6:h5select css_class="form-control input-sm" name="attribute04" id="attribute04" title="" isNull="true" lookupCode="PM_SKILL_LEVEL" />
   					</td>
   					<th>
						<label for="joinbranchType">进入支部类型:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="joinbranchType" id="joinbranchType" title="" isNull="true" lookupCode="PM_JOINBRANCH_TYPE" />
   					</td>
   					
				</tr>
    			<tr>
					<th>
						<label for="joinzgType">加入中共组织类型:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="joinzgType" id="joinzgType" title="" isNull="true" lookupCode="PM_JOINZG_TYPE" />
   					</td>
					<th>
						<label for="regularDate">转正日期:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="regularDate" id="regularDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearRegularDateValue()"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr id = "regularTypeTr">
					<th>
						<label for="regularType" id = "regularTypeLabel">转正类别:</label>
					</th>
					<td id="regularTypeTd">
						<pt6:h5select css_class="form-control input-sm" name="regularType" id="regularType" title="" isNull="true" lookupCode="PM_REGULAR_TYPE" />
   					</td>
   					<th>
						<label for="attribute05">党龄:</label>
					</th>
					<td>
						
						<input class="form-control input-sm" type="text" name="attribute05"  id="attribute05" disabled="disabled"/>
   					</td>
					
				</tr>
    			<tr>
					<th>
						<label for="idcard">身份证号:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="idcard"  id="idcard" />
   					</td>
					<th>
						<label for="address">常住地址:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="address"  id="address" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tel">联系电话:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" />
   					</td>
   				 <th>
						<label for="attribute02">年龄:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute02"  id="attribute02" disabled="disabled"/>
   					</td>
					<!--  <th>
						<label for="registerAddress">户口地址:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="registerAddress"  id="registerAddress" />
   					</td>-->
				</tr>
    			<tr>
					<th>
						<label for="partyMoney">党费:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="partyMoney" id="partyMoney" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="2">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="onoffJob">在职/离职:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="onoffJob" id="onoffJob" title="" isNull="true" lookupCode="PM_ONOFF_JOB" />
   					</td>
				</tr>
				
    			<tr>
				
   					 <th>
						<label for="status">是否有效:</label>
					</th>
					<td>
					<pt6:h5select css_class="form-control input-sm" name="status"  id="status" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" defaultValue="1"/>
			
   					</td>
				</tr>
				<tr>
					<th>
						<label for="attribute08">党内荣誉:</label>
					</th>
					<td colspan="3">
						 <textarea class="form-control input-sm " style="resize:none;width:100%" rows="6" id="attribute08" name="attribute08" title="" maxlength="4000"></textarea>
   					</td>
   				
					
				</tr>
					<tr>
					
   						<th>
						<label for="attribute09">党纪处分:</label>
					</th>
					<td colspan="3">
						 <textarea class="form-control input-sm " style="resize:none;" rows="6" id="attribute09" name="attribute09" title="" maxlength="4000"></textarea>
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
			parent.partyMember.closeDialog("insert");
		}
		
		function saveForm(){
			var userBol = false;
			$.ajax({
				url:"avicit/pb/scoring/integral/integralController/sql.json",
				async:false,
				type:"POST",
				dataType:"JSON",
				data:{
					sql:"select * from party_member t where t.user_id = '"+$("#userId").val()+"'"
				},
				success:function (e) {
					if(e.length!=0){
						layer.msg("该用户已存在党员库中，不允许多次添加")
						userBol = true;
					}
				}
			})
			if(userBol){
				return  false;
			}
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		    $('#partyMember_saveForm').addClass('disabled').unbind("click");	
			parent.partyMember.save($('#form'),"insert");
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
		$(document).ready(function () {
			initDateSelect();
			$.validator.addMethod("minDate", function(value, element) {
				//debugger;
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
			//$("#attribute03").attr("disabled","disabled");
			
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
			
			/*$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
				this.blur();
				nullInput(e);
			}); */
			$('#deptIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			}); 
			
			function selectUserCallBack(user){
				$("#userCode").val(user.loginNames);
				console.log($("#userCode").val(user.loginNames))
				$.ajax({
					url:"api/avicit/pb/member/partyMember/rest/"+user.loginNames,
					type:"GET",
					dataType:"JSON",
					async:false,
					success:function(e){
					    if(e.result == "success"&&e.dto != null){
					    	$("#workTime").val(format(e.dto.cjgzrq))
					    	$("#birthPlace").val(e.dto.csd)
					    	$("#idcard").val(e.dto.sfzh)
					    	$("#address").val(e.dto.JTZZ)
					    	if(e.dto.xb=="男"){
					    		e.dto.xb="0"
					    	}else if(e.dto.xb=="女"){
					    		e.dto.xb="2"
					    	}
					    	$("#sex").val(e.dto.xb)
					    	$("#nation").val(e.dto.mz)
					    	$("#birthday").val(format(e.dto.csrq))
					    	$("#post").val(e.dto.szgw)
					    	$("#orign").val(e.dto.jg)
					    	$("#attribute02").val(e.dto.nl)
					    	$("#onoffJob").val("0")					
					}
					}
					
				})
			};
			$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias',callBack:selectUserCallBack,selectModel:'single',deptidFiled:'deptId',deptNameFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			}); 
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

