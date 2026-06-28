<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform/avicit/pb/member/partyMember/partyMemberController/toPartyMemberManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_add" permissionDes="添加">
	  		<a id="partyMember_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_edit" permissionDes="编辑">
			<a id="partyMember_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_delete" permissionDes="删除">
			<a id="partyMember_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_export" permissionDes="导出">
			<a id="partyMember_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
			<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_import" permissionDes="导入">
			<a id="partyMember_import" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导入"><i class="icon iconfont icon-Import"></i> 导入</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_partyImport" permissionDes="党费导入">
			<a id="partyImport" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="党费导入"><i class="icon iconfont  icon-jingfeibaozhang"></i> 党费导入</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMember_button_dataSny" permissionDes="数据同步">
			<a id="partyMember_dataSny" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="dataSny"><i class="icon iconfont  icon-jingfeibaozhang"></i> 数据同步</a>
		</sec:accesscontrollist>

	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="partyMember_keyWord" id="partyMember_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="partyMember_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="partyMember_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="partyMemberjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAlias">姓名:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="userId" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				<th width="10%">
					<label for="deptIdAlias">部门ID:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
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
					<label for="partyId">党支部:</label>
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
					<label for="partyId">党小组:</label>
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
					<label for="userCode">人员编码:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userCode"  id="userCode" />
				</td>
				<th>
					<label for="sex">性别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" />
				</td>

			</tr>
			<tr>
							<th>
					<label for="birthdayBegin">出生年月起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayBegin" id="birthdayBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="birthdayEnd">出生年月止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayEnd" id="birthdayEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="orign">籍贯:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="orign"  id="orign" />
				</td>
				<th>
					<label for="birthPlace">出生地:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="birthPlace"  id="birthPlace" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="educationSector">教育类别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="educationSector" id="educationSector" title="" isNull="true" lookupCode="PM_EDUCATION_TYPE" />
				</td>
				<th>
					<label for="joinPartyBegin">入党时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="joinPartyBegin" id="joinPartyBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="joinPartyEnd">入党时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="joinPartyEnd" id="joinPartyEnd" />
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
					<label for="partyType">类别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="partyType" id="partyType" title="" isNull="true" lookupCode="PM_PARTY_TYPE" />
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
					<label for="graduationTimeBegin">毕业时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="graduationTimeBegin" id="graduationTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="graduationTimeEnd">毕业时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="graduationTimeEnd" id="graduationTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="workTimeBegin">参加工作时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="workTimeBegin" id="workTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="workTimeEnd">参加工作时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="workTimeEnd" id="workTimeEnd" />
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
					<label for="category">身份类别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="category" id="category" title="" isNull="true" lookupCode="PM_CATEGORY" />
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
					<label for="regularDateBegin">转正日期起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="regularDateBegin" id="regularDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="regularDateEnd">转正日期止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="regularDateEnd" id="regularDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="regularType">转正类别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="regularType" id="regularType" title="" isNull="true" lookupCode="PM_REGULAR_TYPE" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="joinbranchType">进入支部类型:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="joinbranchType" id="joinbranchType" title="" isNull="true" lookupCode="PM_JOINBRANCH_TYPE" />
				</td>
				<th>
					<label for="idcard">身份证号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="idcard"  id="idcard" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="address">家庭地址:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="address"  id="address" />
				</td>
				<th>
					<label for="tel">联系电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tel"  id="tel" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="registerAddress">户口地址:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="registerAddress"  id="registerAddress" />
				</td>
				<th>
					<label for="partyMoney">党费:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="partyMoney" id="partyMoney" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="onoffJob">在职/离职:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="onoffJob" id="onoffJob" title="" isNull="true" lookupCode="PM_ONOFF_JOB" />
				</td>
				<th>
					<label for="branchPost">党支部职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="branchPost"  id="branchPost" />
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
					<label for="status">是否有效:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="status" id="status" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" />
				</td>
				
			</tr>
			<tr>
				<th>
					<label for="nation">是否为党小组长:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="attribute06" id="attribute06" title="" isNull="true" lookupCode="PM_GROUP_LEADER_YN" />
				</td>

			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/member/partymember/js/PartyMember.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var partyMember;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="partyMember.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="partyMember.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}

		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '姓名', name : 'userIdAlias',formatter:formatValue, width: 150, align: 'right'},
		{ label : '部门', name : 'deptIdAlias', width: 150, align: 'right'},
		{ label : '党支部', name : 'partyIdAlias', width: 150, align: 'left'},
		{ label : '人员编码', name : 'userCode', width: 150, align: 'left'},
		{ label : '性别', name : 'sexName', width: 150, align: 'center'},
		//{ label : '出生年月', name : 'birthday', formatter : format, width: 150, align: 'center'},
		{ label : '民族', name : 'nation', width: 150, align: 'left'},
		{ label : '籍贯', name : 'orign', width: 150, align: 'left'},
		//{ label : '出生地', name : 'birthPlace', width: 150, align: 'left'},
		{ label : '教育类别', name : 'educationSectorName', width: 150, align: 'center'},
		//{ label : '入党时间', name : 'joinParty', formatter : format, width: 150, align: 'center'},
		{ label : '文化程度', name : 'educationLevelName', width: 150, align: 'center'},
		//{ label : '入党单位', name : 'joinpartyDept', width: 150, align: 'left'},
		//{ label : '类别', name : 'partyTypeName', width: 150, align: 'center'},
		//{ label : '介绍人', name : 'introducer', width: 150, align: 'left'},
		////{ label : '毕业时间', name : 'graduationTime', formatter : format, width: 150, align: 'center'},
		//{ label : '参加工作时间', name : 'workTime', formatter : format, width: 150, align: 'center'},
		//{ label : '职务', name : 'post', width: 150, align: 'left'},
		//{ label : '职称', name : 'professionalRank', width: 150, align: 'left'},
		//{ label : '身份类别', name : 'categoryName', width: 150, align: 'center'},
		{ label : '加入中共组织类型', name : 'joinzgTypeName', width: 150, align: 'center'},
		{ label : '转正日期', name : 'regularDate', formatter : format, width: 150, align: 'center'},
		{ label : '转正类别', name : 'regularTypeName', width: 150, align: 'center'},
		//{ label : '进入支部类型', name : 'joinbranchTypeName', width: 150, align: 'center'},
		{ label : '身份证号', name : 'idcard', width: 150, align: 'left'},
		//{ label : '家庭地址', name : 'address', width: 150, align: 'left'},
		//{ label : '联系电话', name : 'tel', width: 150, align: 'left'},
		//{ label : '户口地址', name : 'registerAddress', width: 150, align: 'left'},
		//{ label : '党费', name : 'partyMoney', width: 150, align: 'right'},
		{ label : '在职/离职', name : 'onoffJobName', width: 150, align: 'center'},
		//{ label : '党支部职务', name : 'branchPost', width: 150, align: 'left'},
		{ label : '是否有效', name : 'statusName', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("userIdAlias");
	searchTips.push("姓名");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		
		$('#partyMember_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	partyMember= new PartyMember('partyMemberjqGrid','${url}','searchDialog','form','partyMember_keyWord',searchNames,dataGridColModel,'partyMember');
	//添加按钮绑定事件
	$('#partyMember_insert').bind('click', function(){
		partyMember.insert();
	});
	//编辑按钮绑定事件
	$('#partyMember_modify').bind('click', function(){
		partyMember.modify();
	});
	//删除按钮绑定事件
	$('#partyMember_del').bind('click', function(){  
		partyMember.del();
	});
	//查询按钮绑定事件
	$('#partyMember_searchPart').bind('click', function(){
		partyMember.searchByKeyWord();
	});
	// 数据同步到历史信息库
	$('#partyMember_dataSny').bind('click', function(){
		partyMember.dataSny();
	});
	//打开高级查询框
	$('#partyMember_searchAll').bind('click', function(){
		partyMember.openSearchForm(this);
	});
	//导出Excel
	$('#partyMember_export').bind('click',function(){
		var ids = $("#partyMemberjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#partyMemberjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));		
		new SysExcelExport("partyMember",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

	$('#userIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
		this.blur();
		nullInput(e);
	});
	$('#deptIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
		this.blur();
		nullInput(e);
	});
	$('#partyMember_import').bind('click',function(){
		var options = {
		templateCode : "partyMemberExcelImport",
		callBackFunc: function () {
		 $('#partyMemberjqGrid').trigger("reloadGrid");
		 }
		};
		$(this).sysExcelImport(options);
	});
	$('#partyIdAlias').on('focus',function(e){				
		var selectIndex = layer.open({
	        type: 2,
	        area: ['80%', '80%'],
	        title: '选择父节点',
	        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	        maxmin: false, //开启最大化最小化按钮
	        content:  'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
	        btn: ['确定', '取消'],
	        yes: function(index, layero){
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
	        	if(selectedNewNode.text.lastIndexOf("小组") != -1){
	        		layer.msg("所选结构不能为党小组！需要查询党小组需通过高级查询中的党小组查询。")
	        		return;
	        	}
	        	
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
	        area: ['80%', '80%'],
	        title: '选择父节点',
	        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	        maxmin: false, //开启最大化最小化按钮
	        content:  'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
	        btn: ['确定', '取消'],
	        yes: function(index, layero){
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
	        	if(selectedNewNode.text.lastIndexOf("小组") == -1){
	        		layer.msg("所选结构并非党小组！")
	        		return;
	        	}
	        	
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
	$("#partyImport").bind('click',function (e) {
		var selectIndex =layer.open({
			type: 2,
			area: ['30%', '30%'],
			title: '党费导入',
			skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
			maxmin: false, //开启最大化最小化按钮
			content:  'avicit/pb/member/partymember/partyImport.jsp',

		})
	})

});
</script>
</html>

