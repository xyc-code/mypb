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
<%
	String importlibs = "common,form,fileupload,table";
	String formId = request.getParameter("id");
	
	SysDeptAPI sysDeptAPI = SpringFactory.getBean(SysDeptAPI.class);

	//String parentDeptName = sysDeptAPI.getTopSysDeptBySysDeptId(SessionHelper.getCurrentDept(request).getId()).getDeptName();
	String topDeptName = "";
	String userName = "";
	SysDept currentSysDept = SessionHelper.getCurrentDept(request);
	SysUser currentSysUser = SessionHelper.getLoginSysUser(request);
	if(currentSysUser != null){
		if(StringUtils.isNotBlank(currentSysUser.getName())){
			userName = currentSysUser.getName();
		}
		
	}
	if(currentSysDept != null){
		if(StringUtils.isNotEmpty(currentSysDept.getId())){
			SysDept topDept = sysDeptAPI.getTopSysDeptBySysDeptId(currentSysDept.getId());
			if(topDept != null){
				if(StringUtils.isNotBlank(topDept.getDeptName())){
					topDeptName = topDept.getDeptName();
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
<style type="text/css">
#formTitle
{
	text-align:center;
	font-size:18px;
	font-weight:bold;
	
}
</style>
</head>
<body>
	<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include2/buttons.jsp"%>
	<div id="formBut" style="display:none">                                           
                <li  id = "carePrint" class="bpmhide bpm_self_class" title="打印" order="3" style="display:none">
                    <a href="javascript:void(0)">
                        <em class=""></em><span>打印</span>
                    </a>
                </li>

            </div>
    <div id="formTitle"></br><p>XX爱心医疗审批</p></br></div>
	<div id="formTab">
		<form id='form'>
			<input type="hidden" id="id" name="id" value="<%=formId%>">
			<input type="hidden" id="version" name="version">
			<h1 style="text-align: center;" id="careMedicineTitle"><strong>XX爱心医疗审批</strong></h1>	
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="autoCode">表单编号:</label></th>
					<td width="34%">
						
						<div id="autoCode"></div>
					</td>
					<th width="15%">	<label for="attribute02">申请时间:</label></th>
					</th>
					<td width="34%">
			
					<input class="form-control input-sm" type="text" name="attribute02"  id="attribute02">
					</td>
				</tr>
					<tr>
					<th width="15%">
						<label for="attribute03">申请人:</label>
					<td width="34%">
							
						<input class="form-control input-sm" type="text" name="attribute03"  id="attribute03" value="<%=userName%>">
					</td>
					<th width="15%"><label for="attribute04">申请部门:</label>
						</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="attribute04"  id="attribute04" value="<%=topDeptName %>">
					</td>
				</tr>
				<tr>
					<th>
					<label for="patientTel">联系方式:</label></th>
				<td>
					<input class="form-control input-sm" type="text" name="patientTel"  id="patientTel">
				</td>
				</tr>
				<tr>
					<th>
						<label for="employeeCard">报销职工卡号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="employeeCard"  id="employeeCard">
					</td>
					<th>
						<label for="depositBank">开户银行:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="depositBank" id="depositBank" title="" isNull="true" lookupCode="DEPOSIT_BANK" defaultValue="0" />
					</td>
				</tr>
					<tr>
					<th width="15%">
							<label for="patienterIdAlias">患者姓名:</label></th>
					<td width="34%">
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="patienterId" name="patienterId">
							<input class="form-control" type="text" id="patienterIdAlias" name="patienterIdAlias" readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
						
					</td>
					<th width="15%">
						<label for="patientSex">患者性别:</label></th>
					<td width="34%">
							<pt6:h5radio css_class="radio-inline"  name="patientSex"  title="患者性别"  canUse="0" lookupCode="PLATFORM_SEX" defaultValue="1" />
					</td>
				</tr>
    			<tr>
					<th>
					<label for="patientAge">患者年龄:</label></th>
					<td>
					<input class="form-control input-sm" type="text" name="patientAge"  id="patientAge">
					</td>

				</tr>
    			<tr>
					<th>
							<label for="disease">患病名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="disease"  id="disease">
					</td>
				</tr>
    			<tr>

					<th>
							<label for="diseaseType">疾病类型:</label></th>
					<td colspan="3">
						<pt6:h5radio css_class="radio-inline"  name="diseaseType"  title="疾病类型"  canUse="0" lookupCode="DISEASE_TYPE" defaultValue="0"  />
					</td>

				</tr>
				<!--子表单-->
				<tr>
					<td colspan="4">
						<!-- 子表表格 -->
						<div>
							<div id="tableToolbar" class="toolbar" >
								<div class="toolbar-left">
									<sec:accesscontrollist hasPermission="3" domainObject="formdialog_daCareMedicineItemEdit_button_add" permissionDes="添加">
										<a id="daCareMedicineItemEdit_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
									</sec:accesscontrollist>
									<sec:accesscontrollist hasPermission="3" domainObject="formdialog_daCareMedicineItemEdit_button_delete" permissionDes="删除">
										<a id="daCareMedicineItemEdit_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
									</sec:accesscontrollist>
									<a class="btn btn-default form-tool-btn btn-sm bpm_self_class" style="display: none" title="子表数据是否可编辑" name="daCareMedicineItem_editable" id="daCareMedicineItem_editable">是否可编辑</a>
								</div>
							</div>
							<table id="daCareMedicineItemEditJqGrid" name="DA_CARE_MEDICINE_ITEM" class="customform_subtable_bpm_auth"></table>
							<pt6:h5resource label="治疗医院" name="hospital" ref_table="DA_CARE_MEDICINE_ITEM"></pt6:h5resource>
							<pt6:h5resource label="住院日期开始" name="inhospDate" ref_table="DA_CARE_MEDICINE_ITEM"></pt6:h5resource>
							<pt6:h5resource label="住院日期结束" name="outhospDate" ref_table="DA_CARE_MEDICINE_ITEM"></pt6:h5resource>
							<pt6:h5resource label="医疗费金额" name="healthExpense" ref_table="DA_CARE_MEDICINE_ITEM"></pt6:h5resource>
							<pt6:h5resource label="统筹资金支付" name="overallExpense" ref_table="DA_CARE_MEDICINE_ITEM"></pt6:h5resource>
						</div>


					</td>


				</tr>



				<tr>
				<th>
					<label for="hospital">治疗医院:</label></th>
				<td>
					<input class="form-control input-sm" type="text" name="hospital"  id="hospital">
				</td>
				</tr>
				<tr>
					<th>
						<label for="inhospDate">住院日期开始:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="inhospDate" id="inhospDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
					</td>
					<th>
						<label for="outhospDate">住院日期结束:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="outhospDate" id="outhospDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="healthExpenses">医疗费总金额:</label></th>
					<td>

						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<span class="input-group-addon"><i class="fa fa-fw fa-rmb"></i></span>
							<input type="text" id="healthExpenses" name="healthExpenses" value="" maxlength="200"
								   class="form-control inputmask" data-inputmask-alias="money" data-precision="2"  maxlength="10"
								   data-inputmask="'digits':'2'" style="text-align: right;"/>
							<span class="input-group-addon">(千分位，右对齐，保留2位小数)</span>
						</div>

					</td>
					<th>
						<label for="overallExpenses">原统筹基金支付:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<span class="input-group-addon"><i class="fa fa-fw fa-rmb"></i></span>
							<input type="text" id="overallExpenses" name="overallExpenses" value="" maxlength="200"
								   class="form-control inputmask" data-inputmask-alias="money" data-precision="2"  maxlength="10"
								   data-inputmask="'digits':'2'" style="text-align: right;"/>
							<span class="input-group-addon">(千分位，右对齐，保留2位小数)</span>
						</div>

					</td>
				</tr>
    			<tr>
					<th>
						<label for="personExpenses">个人支付金额:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<span class="input-group-addon"><i class="fa fa-fw fa-rmb"></i></span>
							<input type="text" id="personExpenses" name="personExpenses" value="" maxlength="200"
								   class="form-control inputmask" data-inputmask-alias="money" data-precision="2"  maxlength="10"
								   data-inputmask="'digits':'2'" style="text-align: right;"/>
							<span class="input-group-addon">(千分位，右对齐，保留2位小数)</span>
						</div>
					</td>
					<th>
						<label for="submitExpenses">申请报销金额:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<span class="input-group-addon"><i class="fa fa-fw fa-rmb"></i></span>
							<input type="text" id="submitExpenses" name="submitExpenses" value="" maxlength="200"
								   class="form-control inputmask" data-inputmask-alias="money" data-precision="2"  maxlength="10"
								   data-inputmask="'digits':'2'" style="text-align: right;"/>
							<span class="input-group-addon">(千分位，右对齐，保留2位小数)</span>
						</div>
					</td>
				</tr>
				<tr>
					<td  colspan="4" style="text-align: left;font-size: 15px">
						1.所带手续：</br>
						⑴报销申请表；</br>
							⑵住院结算单；</br>
							⑶住院结算收据；</br>
							⑷购买商业医疗保险的会员还应提供保险公司出据的保险理赔分割单。</br>
						2.报送时间：每月15日前报送工会组织民管室。</br>
						3.本表是《爱心医疗互助基金管理办法》（第5版）的附表。

					<td>
				</tr>


			</table>
		</form>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<!-- 框架js -->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/jquery.dragsort-0.5.2.min.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/nav.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/main.js"></script>
	<!-- 流程js -->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
	<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/CommonActor.js"></script>
	<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/BpmActor.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/src/FlowEditor.js"></script>
	<script src="static/js/platform/eform/common.js"></script>
	<!-- 业务js -->
	<script src="avicit/tradeunion/dacaremedicine/js/DaCareMedicineDetail.js" type="text/javascript"></script>
	<script src="avicit/tradeunion/dacaremedicine/js/DaCareMedicineItem.js" type="text/javascript"></script>
		<script src="avicit/platform6/autocode/js/AutoCode.js" ></script>
	<script type="text/javascript">
	    $("#attribute02").val(new Date().format("yyyy-MM-dd"));
		var afterUploadEvent = null;
		var daCareMedicineItem;
		var pid = "<%=formId%>";
		//初始化时间控件
		function initDateSelect(){
			$('.date-picker').datepicker();
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
				}
			});
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function (){
			var autoCode = new AutoCode("DA_CARE_CODE","autoCode",false,"autoCodeValue","123");
			/*20240402 add  治疗医院、住院日期开始、住院日期结束、医疗费金额、统筹资金支付*/
			daCareMedicineItemEditGridColModel =  [
				{
					label : 'id',
					name : 'id',
					key : true,
					width : 75,
					hidden : true
				},
				{
					label : '治疗医院',
					name : 'hospital',
					width: 150,
				},
				{
					label : '住院日期开始',
					name : 'inhospDate',
					formatter : format,
					edittype:'custom',
					editoptions:{
						custom_element:dateElem,
						custom_value:dateValue,
						hidden : true
					}
				},
				{
					label : '住院日期结束',
					name : 'outhospDate',
					formatter : format,
					edittype:'custom',
					editoptions:{
						custom_element:dateElem,
						custom_value:dateValue,
						hidden : true

					}
				},
				{
					label : '医疗费金额',
					name : 'healthExpense',
				    editrules:{
						number:true
					},
					editoptions:{
						dataEvents:[
							{
								type:'change',fn:function(e){
								}
							},
						{
						type:'keyup',fn:function(e){
							if (parseFloat(this.value) < parseFloat(0) ) {
								layer.msg('子表列【医疗费金额】的输入值必须大于等于0',{icon:0});
								this.value = 0;
							}
							//DYN_PM_XXZLUpdateColData(this.value,'XXZL_TOTAL_PRICE')
						}
					},

				]},
			formatter: 'currency',
					formatoptions: {
				decimalSeparator:".",
						thousandsSeparator: ",",
						decimalPlaces: 2 ,
						prefix: "￥",
						suffix:"",
						defaultValue: ""
			},
					width : 75,
				},
				{
					label: '统筹资金支付',
					name: 'overallExpense',
					editrules:{
						number:true
					},
					editoptions:{
						dataEvents:[
							{
								type:'change',fn:function(e){
								}
							},
							{
								type:'keyup',fn:function(e){
									if (parseFloat(this.value) < parseFloat(0) ) {
										layer.msg('子表列【统筹资金支付】的输入值必须大于等于0',{icon:0});
										this.value = 0;
									}
									//DYN_PM_XXZLUpdateColData(this.value,'XXZL_TOTAL_PRICE')
								}
							},

						]},
					formatter: 'currency',
					formatoptions: {
						decimalSeparator:".",
						thousandsSeparator: ",",
						decimalPlaces: 2 ,
						prefix: "￥",
						suffix:"",
						defaultValue: ""
					},
					width : 75,
				}
			]




			daCareMedicineItem = new DaCareMedicineItem('daCareMedicineItemEditJqGrid',"platform/avicit/tradeunion/daCareMedicineitem/daCareMedicineItemController/operation/",daCareMedicineItemEditGridColModel,pid);
			var daCareMedicineDetail = new DaCareMedicineDetail('form',daCareMedicineItem);

			daCareMedicineItem.notnullFiled.push("hospital");//非空字段
			daCareMedicineItem.notnullFiledComment.push("治疗医院"); //非空字段注释
			daCareMedicineItem.notnullFiled.push("inhospDate");//非空字段
			daCareMedicineItem.notnullFiledComment.push("住院日期开始"); //非空字段注释
			daCareMedicineItem.notnullFiled.push("outhospDate");//非空字段
			daCareMedicineItem.notnullFiledComment.push("住院日期结束"); //非空字段注释
			daCareMedicineItem.notnullFiled.push("healthExpense");//非空字段
			daCareMedicineItem.notnullFiledComment.push("医疗费金额"); //非空字段注释
			daCareMedicineItem.notnullFiled.push("overallExpense");//非空字段
			daCareMedicineItem.notnullFiledComment.push("统筹资金支付"); //非空字段注释

			//var daCareMedicineDetail = new DaCareMedicineDetail('form');
			var flowEditor = new FlowEditor(daCareMedicineDetail);
			flowEditor.init();
			initDateSelect();
			//绑定表单验证规则
			daCareMedicineDetail.formValidate($('#form'));
			
			$('#patienterIdAlias').on('click',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'patienterId',textFiled:'patienterIdAlias',hidTab:['group','role','position']});
				this.blur();
				nullInput(e);
			});
			
			$('#carePrint').on('click',function(e){
				daCareMedicineDetail.printCareMedicine();
			});

			/*疾病类型
			*
			*（一）	一般住院医疗：治疗医院、住院日期开始、住院日期结束、医疗费金额、统筹资金支付均需填写，
			* 上次住院日期结束到下次住院日期开始间不超过10个工作日，
			* 如超过，不能填写提交并弹窗提示（转院间隔不能超过10个工作日）；
			*（二）	特殊门诊：治疗医院、医疗费金额、统筹资金支付需填写，住院日期开始、住院日期结束不需填写
			* （三）	血液透析：治疗医院、医疗费金额、统筹资金支付需填写，住院日期开始、住院日期结束不需填写
			* （四）	器官移植：治疗医院、医疗费金额、统筹资金支付需填写，住院日期开始、住院日期结束不需填写
			* */
			$("input[name='diseaseType']").on('click',function(e){
				var checkedVal = $(this).attr("checked",true).val();
				 if(checkedVal == '1' ||checkedVal == '2' || checkedVal == '3'){//血液透析 器官移植 特殊门诊

					 $("#inhospDate").attr({"disabled":"disabled"});//住院日期开始
					 $("#outhospDate").attr({"disabled":"disabled"});//住院日期结束

				}else{

					 $("#inhospDate").removeAttr("disabled");//住院日期开始
					 $("#outhospDate").removeAttr("disabled");////住院日期结束
				}
			});


			//医疗费总金额
			$("#healthExpenses").blur(function () {
				var obj = this.value;
				if (obj != null && obj != "") {

					obj = parseFloat(obj).toFixed(2);
					var left = obj.split(".")[0].split("").reverse();
					var right = obj.split(".")[1];
					var total = new Array();
					for (i = 0; i < left.length; i++) {
						total.push(left[i]);
						if ((i + 1) % 3 == 0 && (i + 1) != left.length) {
							total.push(",");
						}
					}
					$("#healthExpenses").val(total.reverse().join("") + "." + right);
				}
			});
			//原统筹基金支付
			$("#overallExpenses").blur(function () {
				var obj = this.value;
				if (obj != null && obj != "") {

					obj = parseFloat(obj).toFixed(2);
					var left = obj.split(".")[0].split("").reverse();
					var right = obj.split(".")[1];
					var total = new Array();
					for (i = 0; i < left.length; i++) {
						total.push(left[i]);
						if ((i + 1) % 3 == 0 && (i + 1) != left.length) {
							total.push(",");
						}
					}
					$("#overallExpenses").val(total.reverse().join("") + "." + right);
				}
			});
			//个人支付金额:
			$("#personExpenses").blur(function () {
				var obj = this.value;
				if (obj != null && obj != "") {

					obj = parseFloat(obj).toFixed(2);
					var left = obj.split(".")[0].split("").reverse();
					var right = obj.split(".")[1];
					var total = new Array();
					for (i = 0; i < left.length; i++) {
						total.push(left[i]);
						if ((i + 1) % 3 == 0 && (i + 1) != left.length) {
							total.push(",");
						}
					}
					$("#personExpenses").val(total.reverse().join("") + "." + right);
				}
			});
			//申请报销金额:
			$("#submitExpenses").blur(function () {

				var obj = this.value;
				if (obj != null && obj != "") {

					obj = parseFloat(obj).toFixed(2);
					var left = obj.split(".")[0].split("").reverse();
					var right = obj.split(".")[1];
					var total = new Array();
					for (i = 0; i < left.length; i++) {
						total.push(left[i]);
						if ((i + 1) % 3 == 0 && (i + 1) != left.length) {
							total.push(",");
						}
					}
					$("#submitExpenses").val(total.reverse().join("") + "." + right);
				}
			});

			//添加按钮绑定事件
			$('#daCareMedicineItemEdit_insert').bind('click', function(){
				daCareMedicineItem.insert();
			});
			//删除按钮绑定事件
			$('#daCareMedicineItemEdit_del').bind('click', function(){
				daCareMedicineItem.del();
			});
			//attr("checked", true);
		});

		var extraParamDYN_PM_XXZL = '{}';


		//数据回填
		DYN_PM_XXZLUpdateColData = function(value,colname) {
			colname = colname || "";
			value = parseFloat(value) || 0;
			if (typeof colname=="undefined" || colname == "" || colname === "XXZL_NUM" ){
			}
			if (typeof colname=="undefined" || colname == "" || colname === "XXZL_UNION_PRICE" ){
			}
			if (typeof colname=="undefined" || colname == "" || colname === "XXZL_TOTAL_PRICE" ){
				if($('#XXZL_TOTAL_PRICE').length>0){
					var sum = $('#DYN_PM_XXZL').jqGrid('getCol','XXZL_TOTAL_PRICE',false,'sum') + value;
					sum = sum? sum :0;
					if(sum >= $('#XXZL_TOTAL_PRICE').attr('data-min') && sum <= $('#XXZL_TOTAL_PRICE').attr('data-max')){
						$('#XXZL_TOTAL_PRICE').val(sum.toFixed(parseInt($('#XXZL_TOTAL_PRICE').attr('data-precision')))).trigger("change");
					}else{
						layer.msg('子表列【金额】的总和值超出【'+$('#XXZL_TOTAL_PRICE').attr('title')+'】的有效值范围');
					}
				}else{
					layer.msg('回填元素[XXZL_TOTAL_PRICE]不存在，请检查配置是否正确。');
				}
			}
		};



	</script>
</body>
</html>
