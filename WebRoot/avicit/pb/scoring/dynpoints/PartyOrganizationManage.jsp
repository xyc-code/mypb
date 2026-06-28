<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,tree,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<style type="text/css">
div#rMenu {
	position: absolute;
	visibility: hidden;
	top: 0;
	background-color: #555;
	text-align: left;
	padding: 2px;
}

div#rMenu a {
	cursor: pointer;
	list-style: none outside none;
}

.ztree-submenu {
	border: 1px solid #959595;
	position: fixed !important;
	background: #FFF !important;
	z-index: 5;
}

.ztree-submenu:before {
	position: absolute;
	width: 36px;
	height: 100%;
	left: 0;
	top: 0;
	background-color: #e7e8e8;
	z-index: 5;
	display: block;
	content: ' ';
}

.ztree-submenu a {
	color: #454545;
	font-size: 14px;
	border: 0;
	background: none;
	line-height: 14px;
	padding: 8px 15px 8px 45px;
	z-index: 5;
}


.ztree-submenu a:hover {
	background-color: #cbeef5;
}
</style>
</head>
<body class="easyui-layout" fit="true">

	<div>


		<div class="card">
		<div class="card-body " >
				<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="partyCode">党支部编号:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
					
							<input class="form-control" type="text" id="partyCode" name="partyCode" readonly="readonly" >
							
						</div>
   					</td>
					<th width="15%">
						<label for="userPost">党支部名称:</label></th>
					<td width="34%">
							<input class="form-control" type="text" id="partyName" name="partyName" readonly="readonly" >
   					</td>
				</tr>
				</tr>
			</table>
		
		</div>
		
		</div>
		<%-- <div id="toolbar_partyOrganMemberJqGrid" class="toolbar">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_partyOrganMember_button_add"
					permissionDes="添加">
					<a id="partyOrganMember_insert" href="javascript:void(0)"
						class="btn btn-primary form-tool-btn btn-sm" role="button"
						title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_partyOrganMember_button_edit"
					permissionDes="编辑">
					<a id="partyOrganMember_modify" href="javascript:void(0)"
						class="btn btn-primary form-tool-btn btn-sm" role="button"
						title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_partyOrganMember_button_delete"
					permissionDes="删除">
					<a id="partyOrganMember_del" href="javascript:void(0)"
						class="btn btn-primary form-tool-btn btn-sm" role="button"
						title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_partyOrganMember_button_export"
					permissionDes="导出">
					<a id="partyOrganMember_export" href="javascript:void(0)"
						class="btn btn-primary form-tool-btn btn-sm" role="button"
						title="导出"><i class="fa fa-trash-o"></i> 导出</a>
				</sec:accesscontrollist>
			</div> --%>
			<!--   <div class="toolbar-right">
				<div class="input-group form-tool-search">
					<input type="text" name="partyOrganMember_keyWord"
						id="partyOrganMember_keyWord" style="width: 240px;"
						class="form-control input-sm" placeholder="请输入查询条件"> <label
						id="partyOrganMember_searchPart"
						class="icon icon-search form-tool-searchicon"></label>
				</div>
				<div class="input-group-btn form-tool-searchbtn">
					<a id="partyOrganMember_searchAll" href="javascript:void(0)"
						class="btn btn-defaul btn-sm" role="button">高级查询 <span
						class="caret"></span></a>
				</div>
			</div>-->
		</div>
		<table id="partyOrganMemberJqGrid"></table>
		<div id="partyOrganMemberJqGridPager"></div>
	</div>
</body>
<!-- 子表高级查询begin -->
<div id="partyOrganMemberSearchDialog"
	style="overflow: auto; display: none">
	<form id="partyOrganMemberForm" style="padding: 10px;">
		<input type="hidden" name="partyId" id="partyIdPartyOrganMember" />
		<table class="form_commonTable">
			<tr>
				<th width="10%"><label for="userIdAliasPartyOrganMember">员工姓名:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden" id="userIdPartyOrganMember" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text"
							id="userIdAliasPartyOrganMember" name="userIdAlias"> <span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				<th width="10%"><label for="userPostPartyOrganMember">党组织职务:</label>
				</th>
				<td width="39%"><pt6:h5radio css_class="radio-inline"
						name="userPost" title="" canUse="0" lookupCode="PARTY_POST" /></td>
			</tr>
		</table>
	</form>
</div>
<!-- 子表高级查询end -->
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<!-- 流程的js -->
<!-- 业务的js -->
<script
	src="avicit/pb/organize/partyorganization/js/PartyOrganization.js?v=${jsversion}"
	type="text/javascript"></script>
<script
	src="avicit/pb/organize/partyorganmember/js/PartyOrganMember.js?v=${jsversion}"
	type="text/javascript"></script>
<script type="text/javascript">
	var partyId = '${partyId}';
	var PbPosen = [];
	$.ajax({
		url:"${url}"+"getPb?id="+partyId,
		type:"POST",
		async:false,
		dataType:"JSON",							
		success:function(data){
			PbPosen =  data.PbPosen 
		}
		
	})
	function formatValuePartyOrganMember(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="partyOrganMember.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHrefPartyOrganMember(cellvalue, options, rowObject) {
		var thisDate = format(cellvalue);
		return '<a href="javascript:void(0);" onclick="partyOrganMember.detail(\''
				+ rowObject.id + '\');">' + thisDate + '</a>';
	}
	//清空日期值
	function clearCommonSelectValue(element) {
		$(element).siblings("input").val("");
	}
	$(document)
			.ready(
					function() {
						var partyOrganMemberDataGridColModel = [ {
							label : 'id',
							name : 'id',
							key : true,
							width : 75,
							hidden : true,
						}, {
							label : '员工姓名',
							name : 'userIdAlias',
							width : 150,
							align : 'center',
						}, {
							label : '党组织职务',
							name : 'userPostName',
							width : 150,
							align : 'center'
						}, ];
						if(PbPosen != null){
							$("#partyName").val(PbPosen[0].PARTY_NAME);
							$("#partyCode").val(PbPosen[0].PARTY_CODE)
						}
						$("#partyOrganMemberJqGrid").jqGrid({
					    	url: 'platform/avicit/pb/organize/partyOrganMember/partyOrganMemberController/operation/getPartyOrganMember',
					    	postData : {pid : partyId},
					        mtype: 'POST',
					        datatype: "json",
					        toolbar: [true,'top'],
					        colModel: partyOrganMemberDataGridColModel, 
					        height:$(window).height()-120-17-43,//120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
					        width:$(window).width(),
					        scrollOffset: 5, //设置垂直滚动条宽度
					        rowNum: 20	,
					        rowList:[200,100,50,30,20,10],
					        altRows:true,
					        pagerpos:'left',
					        hasColSet: true,//设置显隐属性
							loadComplete:function(){
								$(this).jqGrid('getColumnByUserIdAndTableName');
								var rowNum = $("#partyOrganMemberJqGrid").jqGrid('getGridParam', 'records');
								if (rowNum < 1) {
									if ($("#emptyRecords").html() == null) {
										$("#partyOrganMemberJqGrid").parent().append('<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
											+ '<div style="width:120px; height:140px; padding-top:10%; clear:both; margin:0 auto ;">'
											+ '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
											+ '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
											+ '</div></div>');
									}
									$("#emptyRecords").show();								
								} else {
									$("#emptyRecords").hide();
									/* var data = $("#partyOrganMemberJqGrid").jqGrid("getRowData");
									for(var i=0;i<PbPosen.length;i++){
										for(var i=0;i<data.length;i++){
											if(PbPosen[i].ID==data[i].id){
												var id = "#"+data[i].id
											$(id).attr("style","background:red")
											$(id+" td").css("color","white")
											}
										}
									} */
								}
							},
							viewrecords: true, //
					        styleUI : 'Bootstrap', 
							multiselect: true,
							multiboxonly: true,
							autowidth: true,
							shrinkToFit: true,
							responsive:true,//开启自适应
							pager:partyOrganMemberJqGridPager
					    });
						
						
																	
					});
	          
</script>
</html>

