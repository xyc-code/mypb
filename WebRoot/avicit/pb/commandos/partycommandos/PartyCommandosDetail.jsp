<%@page import="avicit.platform6.api.sysuser.dto.SysDept"%>
<%@page import="avicit.platform6.api.sysuser.dto.SysUser"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="avicit.platform6.api.sysuser.SysDeptAPI"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="java.util.*"%>
<%@ page import="avicit.pb.member.partymember.service.PartyMemberService"%>
<%@ page import="org.apache.commons.lang.StringUtils"%>


<%
	String importlibs = "common,form,fileupload,table,tree";
	String formId = request.getParameter("id");
	
	SysDeptAPI sysDeptAPI = SpringFactory.getBean(SysDeptAPI.class);
	PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);

	
	//String parentDeptName = sysDeptAPI.getTopSysDeptBySysDeptId(SessionHelper.getCurrentDept(request).getId()).getDeptName();
	String topDeptName = "";
	String userName = "";
	String userId = "";
	String topDeptId = "";
	String partyName = "";
	String partyId = "";
	SysDept currentSysDept = SessionHelper.getCurrentDept(request);
	SysUser currentSysUser = SessionHelper.getLoginSysUser(request);
	
	if(currentSysUser != null){

			userName = currentSysUser.getName();
			userId = currentSysUser.getId();
			Map<String,String> retMap =  partyMemberService.getPartyMemberOrganizationByUserId(userId);
			if(retMap != null && !retMap.isEmpty()){
				partyId = retMap.get("PARTY_ID");
				partyName = retMap.get("PARTY_NAME");
				//Iterator<Entry<String,String>> it = retMap.entrySet().iterator();
				/*while(it.hasNext()){
					Entry<String,String> entry = it.next();
					if(StringUtils.equals(entry.getKey(), "PARTY_ID")){
						partyId = entry.getValue();
					}
                    if(StringUtils.equals(entry.getKey(), "PARTY_NAME")){
                    	partyName = entry.getValue();
					}
					
				}*/
				
			}
		
	}
	if(currentSysDept != null){
		if(StringUtils.isNotEmpty(currentSysDept.getId())){
			SysDept topDept = sysDeptAPI.getTopSysDeptBySysDeptId(currentSysDept.getId());
			if(topDept != null){
				if(StringUtils.isNotBlank(topDept.getDeptName())){
					topDeptName = topDept.getDeptName();
					topDeptId = topDept.getId();
				}
			}
		}
	}
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
<link rel="stylesheet" type="text/css" href="static/h5/timeliner/css/timeliner.css?v=${jsversion}">
</head>
<body>
	<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include2/buttons.jsp"%>
	<div id="formTab">
		<form id='form'>
			<input type="hidden" id="id" name="id" value="<%=formId%>">
			<input type="hidden" id="version" name="version">
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">申请人:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId" value="<%=userId%>">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias"  value="<%=userName%>"  readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
					</td>
					<th width="15%">
						<label for="deptIdAlias">申请部门:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<%=topDeptId%>">
							<input class="form-control" type="text" id="deptIdAlias" name="deptIdAlias" readonly="readonly" value="<%=topDeptName %>">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
					</td>
				</tr>
				<tr>
				<tr>
				
					<th>
						<label for="attribute06">申请人所在党支部:</label></th>
					<td >
			
							<input class="form-control input-sm" type="text" name="attribute06"  id="attribute06" value="<%=partyName%>">
							<input  type="hidden" name="attribute07"  id="attribute07" value="<%=partyId%>" >
					</td>
					<th>
						<label for="pcSecretLevel">密级:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="pcSecretLevel" id="pcSecretLevel" title="" isNull="true" lookupCode="PC_SECRET_LEVEL" defaultValue="${partyCommandosDTO.pcSecretLevel}" />
						<!--<pt6:h5select css_class="form-control input-sm" name="secretLevel" id="secretLevel" title="" isNull="true" lookupCode="PC_SECRET_LEVEL" defaultValue="${partyCommandosDTO.pcSecretLevel}" />-->
				
					</td>
					
				</tr>
    			<th>
						<label for="autoCode">自动编码:</label></th>
					<td>
						<div id = "autoCode"></div><!-- <input class="form-control input-sm" type="text" name="autoCode"  id="autoCode"> -->
					</td>
					<th>
						<label for="tel">联系电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel">
					</td>
				</tr>
				<tr>
				<th>
						<label for="commandosName">突击队名称:</label></th>
					<td colspan="3">
						<input class="form-control input-sm" type="text" name="commandosName"  id="commandosName" >
					</td>
					
					
				
				
				</tr>
    			<tr>
					<th width="15%">
						<label for="attribute01Alias">联络员:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="attribute01" name="attribute01" >
							<input class="form-control" type="text" id="attribute01Alias" name="attribute01Alias" >
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
					</td>
					<th>
						<label for="commandosType">突击队类型:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="commandosType" id="commandosType" title="" isNull="true" lookupCode="PC_TYPE" defaultValue="${partyCommandosDTO.commandosType}" />
					</td>
				</tr>
    			<tr>
					<th>
						<label for="setupTime">组建时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="setupTime" id="setupTime">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th>
						<label for="commandosChargerAlias">突击队负责人:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input type="hidden"  id="commandosCharger" name="commandosCharger">
							<input class="form-control" type="text" id="commandosChargerAlias" name="commandosChargerAlias" readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="inPartyorg">负责人所在党组织:</label></th>
					<td>
					
					
						<input type="hidden" name="inPartyorg"  id="inPartyorg" />
						<input class="form-control" type="text" id="inPartyOrgAlias" name="inPartyOrgAlias" disabled="disabled">
							
					</td>
					<th>
						<label for="chargerPost">负责人党内职务:</label></th>
					<td>
		
						<pt6:h5select css_class="form-control input-sm" name="chargerPost" id="chargerPost" title="" isNull="true" lookupCode="PC_CHARGER_POST" defaultValue="${partyCommandosDTO.chargerPost}" />
					</td>
				</tr>
    			<tr>
					<th>
						<label for="adminortech">负责人行政或技术职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="adminortech"  id="adminortech">
					</td>
					<th>
						<label for="attribute04">政委姓名:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input type="hidden"  id="attribute04" name="attribute04">
							<input class="form-control" type="text" id="attribute04Alias" name="attribute04Alias"  readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
					</td>
				</tr>
				<tr>
					<th>
						<label for="attribute05">政委行政或技术职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute05"  id="attribute05">
					</td>
					<th>
						<label for="partyNum">涉及党支部数:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="partyNum" id="partyNum"  data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="pmNum">参与党员数:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="pmNum" id="pmNum"  data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
					</td>
						<th>
						<label for="attribute12">突击队总人数:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="attribute12" id="attribute12"  data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
					</td>
					
				</tr>
    			<tr>
    			<th>
						<label for="uniondeptsYn">是否跨内部单位联合:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="uniondeptsYn" id="uniondeptsYn" title="" isNull="true" lookupCode="PC_DPET_UNION" defaultValue="${partyCommandosDTO.uniondeptsYn}" />
					</td>
					<th>
						<label for="unionDeptsAlias">内部联合单位:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input type="hidden"  id="unionDepts" name="unionDepts">
							<input class="form-control" type="text" id="unionDeptsAlias" name="unionDeptsAlias" readonly="readonly">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
					</td>
					
				</tr>
					<tr>
				<th>
						<label for="attribute02">是否跨外部单位联合:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="attribute02" id="attribute02" title="" isNull="true" lookupCode="PC_OUTSIDE_DPET_UNION" defaultValue="${partyCommandosDTO.attribute02}" />
					</td>
					<th>
						<label for="attribute03">外部联合单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute03"  id="attribute03">
					</td>
				</tr>
				
    			<tr>
				
					<th>
						<label for="keyProblems">攻关任务简介:</label></th>
					<td colspan="3">
			
						<textarea class="form-control input-sm " style="resize:none;" rows="6" id="keyProblems" name="keyProblems" title="攻关任务简介" maxlength="4000"></textarea>
					</td>
				</tr>
    				
				<tr>
					<th>
						<label for="attachment">附件</label>
					</th>
					<td colspan="3">
						<div id="attachment" title="附件" class="attachment_div eform_mutiattach_auth"></div>
					</td>
				</tr>
			</table>
		</form>
        <!-- 子表表格 -->
        <div id="tableToolbar" class="toolbar" >
            <div class="toolbar-left">
                <sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMilepostEdit_button_add" permissionDes="添加">
                    <a id="partyMilepostEdit_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
                </sec:accesscontrollist>
                <sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMilepostEdit_button_delete" permissionDes="删除">
                    <a id="partyMilepostEdit_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
                </sec:accesscontrollist>
                <a class="btn btn-default form-tool-btn btn-sm bpm_self_class" style="display: none" title="子表数据是否可编辑" name="partyMilepost_editable" id="partyMilepost_editable">是否可编辑</a>
            </div>
        </div>
        <table id="partyMilepostEditJqGrid" name="PARTY_MILEPOST" class="customform_subtable_bpm_auth"></table>
   	 	<pt6:h5resource label="上报人" name="userIdAlias" ref_table="PARTY_MILEPOST"></pt6:h5resource>
   	 	<pt6:h5resource label="申请部门" name="deptIdAlias" ref_table="PARTY_MILEPOST"></pt6:h5resource>
    	<pt6:h5resource label="任务状态" name="taskStatusName" ref_table="PARTY_MILEPOST"></pt6:h5resource>
    	<pt6:h5resource label="完成情况" name="taskCompletion" ref_table="PARTY_MILEPOST"></pt6:h5resource>
    	<pt6:h5resource label="上报人所在党支部" name="partyId" ref_table="PARTY_MILEPOST"></pt6:h5resource>
    	<pt6:h5resource label="里程碑计划" name="milepostPlan" ref_table="PARTY_MILEPOST"></pt6:h5resource>
    	<pt6:h5resource label="计划完成时间" name="completionDate" ref_table="PARTY_MILEPOST"></pt6:h5resource>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<!-- 框架js -->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/jquery.dragsort-0.5.2.min.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/nav.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/main.js"></script>
    <script type="text/javascript" src="static/h5/timeliner/js/timeliner.js?v=${jsversion}"></script>
	<!-- 流程js -->
    <script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
    <script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/CommonActor.js"></script>
    <script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/BpmActor.js"></script>
    <script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/FlowEditor.js"></script>
    <script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js"></script>
    <script src="avicit/platform6/bpmreform/bpmcommon/js/avictabs.js"></script>
    <script src="avicit/platform6/bpmreform/bpmcommon/js/editForm.js"></script>
    <script src="static/js/platform/eform/common.js"></script>
	<!-- 业务js -->
	<script src="avicit/pb/commandos/partycommandos/js/PartyCommandosDetail.js" type="text/javascript"></script>
    <script src="avicit/pb/commandos/partymilepost/js/PartyMilepostEdit.js" type="text/javascript"></script>
    <script src="avicit/platform6/autocode/js/AutoCode.js" ></script>
    <script type="text/javascript" src="static/h5/uploader-ext/uploader-ext.js"></script>
    <script type="text/javascript">
        var pid = "<%=formId%>";
        var partyMilepostEdit;
        var partyMilepostDataEditGridColModel;
		var taskStatusData;
		var afterUploadEvent = null;
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

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

        //查询通用代码值
        function initOnceInAdd(){
            avicAjax.ajax({
                url:"avicit/pb/commandos/partyMilepost/partyMilepostController/getLookUpCode",
                type : 'post',
                dataType : 'json',
                async:false,
                success : function(r){
                    if (r.flag == "success"){
						taskStatusData = r.taskStatusData;
                    }else{
                        layer.alert('获取失败！' + r.error,{
							icon: 7,
							area: ['400px', ''], //宽高
							closeBtn: 0,
							btn: ['关闭'],
							title:"提示"
						});
                    }
                }
            });
        };

		$(document).ready(function (){
			var autoCode = new AutoCode("partyCommandosCode","autoCode",false,"autoCodeValue","123");
			initOnceInAdd();
			partyMilepostDataEditGridColModel =  [
			{
				label : 'id',
				name : 'id',
				key : true,
				width : 75,
				hidden : true
			},
			{
				label : '上报人',
				name : 'userIdAlias',
				edittype:'custom',
				editoptions:{
					custom_element:userElem,
					custom_value:userValue,
					forId: 'userId'
				},
				width: 150,
				hidden : true
			},
			{
				label : '上报人Id',
				name : 'userId',
				width : 75,
				hidden:true,
				hidden : true
			},
			{
				label : '申请部门',
				name : 'deptIdAlias',
				edittype:'custom',
				editoptions:{
					custom_element:deptElem,
					custom_value:deptValue,
					forId: 'deptId'
				},
				width: 150,
				hidden : true
			},
			{
				label : '申请部门Id',
				name : 'deptId',
				width : 75,
				hidden:true
			},
			{
				label: '任务状态Id',
				name: 'taskStatus',
				width: 150,
				hidden : true
			},
			{
				label: '任务状态',
				name: 'taskStatusName',
				width: 150,
				edittype:"custom",
				editoptions: {
					custom_element:selectElem,
					custom_value:selectValue,
					forId:'taskStatus',
					value: taskStatusData
				},
				hidden : true
			},
			{
				label : '完成情况',
				name : 'taskCompletion',
				hidden : true
			},
			{
				label : '上报人所在党支部',
				name : 'partyId',
				hidden : true
			},
			{
				label : '里程碑计划',
				name : 'milepostPlan'
			},
			{
				label : '计划完成时间',
				name : 'completionDate',
				formatter : format,
				edittype:'custom',
				editoptions:{
				custom_element:dateElem,
				custom_value:dateValue,
				hidden : true
			}
			}
		]

		partyMilepostEdit = new PartyMilepostEdit('partyMilepostEditJqGrid',"platform/avicit/pb/commandos/partyMilepost/partyMilepostController/operation/",partyMilepostDataEditGridColModel,pid);
		var partyCommandosDetail = new PartyCommandosDetail('form',partyMilepostEdit);
		var flowEditor = new FlowEditor(partyCommandosDetail);
		flowEditor.init();
		//初始化附件上传组件
		$('#attachment').uploaderExt({
			formId : $("#id").val(),
			secretLevel : 'PLATFORM_FILE_SECRET_LEVEL',
			formSecret: 'pcSecretLevel',
			afterUpload : function() {
				return afterUploadEvent();
			}
		});
		initDateSelect();
		//绑定表单验证规则
		partyCommandosDetail.formValidate($('#form'));

		$('#userIdAlias').off('focus',function(e){
			new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
			this.blur();
			nullInput(e);
		});
		$('#deptIdAlias').off('focus',function(e){
			new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
			this.blur();
			nullInput(e);
		});
		$('#commandosChargerAlias').on('focus',function(e){
			new H5CommonSelect({type:'userSelect', idFiled:'commandosCharger',textFiled:'commandosChargerAlias',callBack:function(user){
				avicAjax.ajax({
					 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getPartyMemberOrganization",
					 data : {userId:user.userids},
					 type : 'post',
					 dataType : 'json',

					 success : function(r){
						 if (r.flag == "success"){
							 //debugger;
							if(r.PARTY_NAME){
			 $("#inPartyOrgAlias").val(r.PARTY_NAME);
			 
			 
			 
			 }else{
				 $("#inPartyOrgAlias").attr("placeholder","所在党支部不存在或不可用");
			 }
							
			 if(r.PARTY_ID){
			 
			 $("#inPartyorg").val(r.PARTY_ID);
			 
			 
			 }
						 }else{
							//layer.message("获取支部信息失败，请联系管理员！！！");
						 } 
					 }
				 });	
				
				
				
			}});
			this.blur();
			nullInput(e);
		});
		$('#attribute01Alias').on('focus',function(e){
			new H5CommonSelect({type:'userSelect', idFiled:'attribute01',textFiled:'attribute01Alias'});
			this.blur();
			nullInput(e);
		});
		$('#attribute04Alias').on('focus',function(e){
			new H5CommonSelect({type:'userSelect', idFiled:'attribute04',textFiled:'attribute04Alias'});
			this.blur();
			nullInput(e);
		});
	
		
		$("#uniondeptsYn").on("change",function(){
			if($("#uniondeptsYn").val() == '1'){
				$('#unionDeptsAlias').removeAttr("disabled");
				$('#unionDeptsAlias').on('focus',function(e){
					new H5CommonSelect({type:'deptSelect', idFiled:'unionDepts',textFiled:'unionDeptsAlias',selectModel:'multi'});
					this.blur();
					nullInput(e);
				});
			}else{
				$('#unionDepts').val('');
				$('#unionDeptsAlias').val('');
				
				$('#unionDeptsAlias').attr("disabled","disabled");
				$('#unionDeptsAlias').off('focus');
			}
		});
	
		
		
		
		$("#attribute02").on("change",function(){
			if($("#attribute02").val() == '0'){
				$('#attribute03').val("");
				$('#attribute03').attr("disabled","disabled");
			}else{
				$('#attribute03').removeAttr('disabled');
			}	
		});
		
		/*$('#inPartyOrgAlias').on('focus',function(e){
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
					}
					$("#inPartyorg").val(selectedNewNode.id);
					$("#inPartyOrgAlias").val(selectedNewNode.text);
					layer.close(layer.index);
					layer.close(selectIndex);
		        },
				btn2: function(index, layero){
				    layer.close(index);
				}
		    });
		
			this.blur();
			nullInput(e);
		});*/
		//添加按钮绑定事件
		$('#partyMilepostEdit_insert').bind('click', function(){
				partyMilepostEdit.insert();
		});
		//删除按钮绑定事件
		$('#partyMilepostEdit_del').bind('click', function(){
				partyMilepostEdit.del();
		});
		
		
		
	});
	</script>
</body>
</html>

