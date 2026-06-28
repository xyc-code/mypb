<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,tree,table,form";
%>
<!DOCTYPE html>
<html>

<head>
	<!-- ControllerPath = "syslogconfig/sysLogConfigController/toSysLogConfigManage" -->
	<title>管理</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>

	<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
	<link rel="stylesheet" type="text/css" href="static/h5/switch/css/bootstrap-switch.css" />
</head>
<style>
</style>
<body class="easyui-layout">
<div data-options="region:'west',split:true" id="west" style="width: 250px;border-top-style: hidden;overflow: hidden; height: 100%">
	<div id="tableToolbarM" class="toolbar">
		<div class="toolbar-left">
			<div class="input-group  input-group-sm">
				<input  class="form-control" placeholder="输入名称查询" type="text" id="txt" name="txt">
				<span class="input-group-btn">
						<button id="searchbtn" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
				</span>
			</div>
		</div>
	</div>
	<div  id='mdiv' style="overflow:auto; height: 100%;">
		<ul id="consoleMenu" class="ztree"></ul>
	</div>
</div>
<div data-options="region:'center'">
	<div class="easyui-layout" data-options="fit:true">
		<div id="main" data-options="region:'north',split:true,width:fixwidth(.5),onResize:function(a){$('#sysDataPermissionsRule').setGridWidth(a);$(window).trigger('resize');}" style="height:300px;overflow-x:hidden;">
			<div id="toolbar_sysLogConfig" class="toolbar">
				<div class="toolbar-left">
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLogConfig_button_add" permissionDes="主表添加">
						<a id="sysLogConfig_insert" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLogConfig_button_edit" permissionDes="主表编辑">
						<a id="sysLogConfig_modify" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLogConfig_button_delete" permissionDes="主表删除">
						<a id="sysLogConfig_del" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
					</sec:accesscontrollist>
				</div>
				<div class="toolbar-right">
					<div class="input-group form-tool-search" style="width:200px">
						<input type="text" name="sysLogConfig_keyWord" id="sysLogConfig_keyWord" style="width:200px;" class="form-control input-sm" placeholder="请输入查询条件">
						<label id="sysLogConfig_searchPart" class="icon icon-search form-tool-searchicon"></label>
					</div>
				</div>
			</div>
			<table id="sysLogConfig"></table>
			<div id="sysLogConfigPager"></div>
		</div>
		<div id="children" data-options="region:'center',split:true,onResize:function(a,b){resizeSouth(a,b);}" style="padding:0px;overflow-x:hidden;">
			<div id="toolbar_sysLogConfigField" class="toolbar">
				<div class="toolbar-left">
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLogConfigField_button_add" permissionDes="子表添加">
						<a id="sysLogConfigField_insert" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_cysLogConfigField_button_save" permissionDes="保存">
						<a id="sysLogConfigField_save" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="保存"><i class="fa fa-file-text-o"></i> 保存</a>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLogConfigField_button_delete" permissionDes="子表删除">
						<a id="sysLogConfigField_del" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
					</sec:accesscontrollist>
				</div>
				<div class="toolbar-right">
					<div class="input-group form-tool-search" style="width:200px">
						<input type="text" name="sysLogConfigField_keyWord" id="sysLogConfigField_keyWord" style="width:200px;" class="form-control input-sm" placeholder="请输入查询条件">
						<label id="sysLogConfigField_searchPart" class="icon icon-search form-tool-searchicon"></label>
					</div>
				</div>
			</div>
			<table id="sysLogConfigField"></table>
			<%--<div id="sysLogConfigFieldPager"></div>--%>
		</div>
	</div>
</div>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/console/syslogconfig/js/SysLogConfig.js" type="text/javascript"></script>
<script src="avicit/platform6/console/syslogconfig/js/SysLogConfigField.js" type="text/javascript"></script>
<script type="text/javascript" src="avicit/platform6/console/menu/js/MenuTree.js" ></script>

<script type="text/javascript">
	var menuTree,targetType='R',applicationId='${appId}',orgId='${orgId}',utype='${utype}',
			userList,
			roleList,
			groupList,
			deptList,
			postionList;
	var isInitGrid = false;
	var sysLogConfig;
	var sysLogConfigField;
	var lookup_validFlag = {lookup:"通用代码",mapping:"自定义转换",user:"用户",role:"角色",dept:"部门",position:"岗位"};

	function logConfigClassFormatter(cellvalue, options, rowObject){
		if(rowObject['moduleType'] === 'DTO'){
			var valArr = cellvalue.split('.');
			return valArr[valArr.length-1]+'.java';
		}else{
			return rowObject['tableName']
		}
	}
	$(document).ready(function () {
		var searchMainNames = [];
		var searchMainTips = [];
		searchMainNames.push("logConfigClass");
		searchMainTips.push("实体类/模型");
		searchMainNames.push("tableName");
		searchMainTips.push("表名称");
		var searchMainC = searchMainTips.length==2?'或' + searchMainTips[1] : "";
		$('#sysLogConfig_keyWord').attr('placeholder','请输入' + searchMainTips[0] + searchMainC);
		var searchSubNames = [];
		var searchSubTips = [];
		searchSubNames.push("fieldName");
		searchSubTips.push("属性名称");
		searchSubNames.push("fieldTitle");
		searchSubTips.push("属性标题");
		var searchSubC = searchSubTips.length==2?'或' + searchSubTips[1] : "";
		$('#sysLogConfigField_keyWord').attr('placeholder','请输入' + searchSubTips[0] + searchSubC);
		var sysLogConfigGridColModel =  [
			{ label: 'id', name: 'id', key: true, width: 75, hidden:true}
			,{ label: '类型', name: 'moduleType', width: 150,sortable:false}
			,{ label: '实体类DTO/存储模型', name: 'logConfigClass', width: 150,sortable:false,formatter:logConfigClassFormatter}
			,{ label: '表名称', name: 'tableName', width: 150,sortable:false}
			,{ label: '表描述', name: 'tableDes', width: 150,sortable:false}
			,{ label: '日志标题', name: 'logTitle', width: 150,sortable:false}
			,{ label: '描述', name: 'remark', width: 150,sortable:false}
			,{ label: '应用ID', name: 'sysApplicationId', width: 150,sortable:false,hidden:true}
			,{ label: '创建人部门', name: 'createdDept', width: 150,hidden:true,}
			,{ label: '排序号', name: 'orderBy', width: 150,hidden:true}
			,{ label: '关联的菜单ID', name: 'menuId', width: 150,hidden:true}
		];

		var sysLogConfigFieldGridColModel =  [
			{ label: 'id', name: 'id', key: true, width: 75, hidden:true }
			,{ label: '属性名称', name: 'fieldName', width: 150,sortable:false}
			,{ label: '属性标题', name: 'fieldTitle', width: 150,sortable:false}
			,{ label: '数据库映射字段', name: 'fieldColumn', width: 150,sortable:false}
			,{ label: '字段类型', name: 'fieldType', width: 150,sortable:false}
			,{
				label: '输入类型id',
				name: 'dataType',
				width: 150,
				hidden:true,
				editable: false,
				edittype : "text",
				sortable:false
			},
			{
				label: '输入类型',
				name: 'dataTypeAlias',
				width: 150,
				editable: true,
				edittype : "custom",
				editoptions : {
					custom_element : selectElem,
					custom_value : selectValue,
					forId : 'dataType',
					value: lookup_validFlag,
					callBack:changeFunction
				},
				sortable:false
			}
			,{
				label:'通用代码/自定义转换',
				name:'dataValue',
				width : 250,
				editable:true,
				edittype: "custom",
				editoptions: {
					custom_element: dictElem,
					custom_value: dictValue,
					dataEvents: [{
						type: 'change', fn: function (e) {

						}
					}],
					dataInit: function (element) {
							$(element).keydown(function (event) {
								if (event.keyCode == 13) {
									return false;
								}
								if (event.keyCode == 27) {
									return false;
								}
							});
					}
				},
				sortable:false
			}
			,{ label: '日志标识<i class="tips-iconhelp icon iconfont icon-question-circle" id="fieldExplicitTips"></i>', name: 'fieldExplicit', width: 150, hidden: true, align:"center",editable: true,edittype: 'checkbox',
				editoptions: {
					value:"true:false",
					dataInit: function (element) {
							$(element).keydown(function (event) {
								if (event.keyCode == 13) {
									return false;
								}
								if (event.keyCode == 27) {
									return false;
								}
							});
					}
				},
				sortable:false
			}
			,{ label: '日志配置ID', name: 'logConfigId', width: 150,hidden: true,}
			,{ label: '创建人部门', name: 'createdDept', width: 150,hidden:true}
			,{ label: '应用ID', name: 'sysApplicationId', width: 150,hidden:true}
			,{ label: '排序号',index:'orderBy',name: 'orderBy', width: 150,sortable:false}
		];

		$('#mdiv').height(document.documentElement.clientHeight-65);
		//菜单树初始化
		menuTree = new MenuTree('consoleMenu','${treeUrl}','','txt','searchbtn');
		menuTree.setOnSelect(function(treeNode) {
			if(isInitGrid===true){
				sysLogConfig.selectTreeId = treeNode.id;
				clickMenu();
			} else {
				isInitGrid = true;
				sysLogConfig= new SysLogConfig('sysLogConfig','${url}','form',sysLogConfigGridColModel,'searchDialog',
						function(pid){
							sysLogConfigField = new SysLogConfigField('sysLogConfigField','${surl}', "formSub", sysLogConfigFieldGridColModel, 'searchDialogSub', pid, searchSubNames, "sysLogConfigField_keyWord");
						},
						function(pid){
							sysLogConfigField.reLoad(pid);
						},
						searchMainNames,
						"sysLogConfig_keyWord",treeNode.id);
				sysLogConfig.selectTreeId = treeNode.id;
			}

		}).init();

		//主表操作
		//添加按钮绑定事件
		$('#sysLogConfig_insert').bind('click', function(){
			// 只能在末级节点添加方法
			var isParent = menuTree._selectNode.isParent;
			if(isParent){
				layer.alert("只能在末级节点添加方法！",{icon:2});
				return false;
			}
			sysLogConfig.insert();
		});
		//编辑按钮绑定事件
		$('#sysLogConfig_modify').bind('click', function(){
			sysLogConfig.modify();
		});
		//删除按钮绑定事件
		$('#sysLogConfig_del').bind('click', function(){
			sysLogConfig.del();
		});
		//关键字段查询按钮绑定事件
		$('#sysLogConfig_searchPart').bind('click', function(){
			sysLogConfig.searchByKeyWord();
		});
		//子表操作
		//添加按钮绑定事件
		$('#sysLogConfigField_insert').bind('click', function(){
			sysLogConfigField.insert();
		});
		//保存按钮绑定事件
		$('#sysLogConfigField_save').bind('click', function(){
			sysLogConfigField.save();
		});
		//删除按钮绑定事件
		$('#sysLogConfigField_del').bind('click', function(){
			sysLogConfigField.del();
		});
		//关键字段查询按钮绑定事件
		$('#sysLogConfigField_searchPart').bind('click', function(){
			sysLogConfigField.searchByKeyWord();
		});
		function changeFunction(object){
			$("#sysLogConfigField").jqGrid('setCell', rowid, 'dataValue', '', 'not-editable-cell');
			var rowid = $(object.target).attr("data-rowid");
			var dataTypeAlias=$(object.target).val();
			$("#sysLogConfigField").jqGrid('setCell', rowid, 'dataValue',null,'edit-cell');
		}
	})
	function clickMenu(){
		sysLogConfig.reLoad();
	}
	// 群组成员
	function dictValue(elem, operation, value) {

		if (operation === 'get') {
			var rowId = $(elem).find('#cellRowId').val();
			if($(elem).find('#'+rowId+"dataValue").val()===undefined){
				return "";
			}else{
				return $(elem).find('#'+rowId+"dataValue").val();
			}
		} else if (operation === 'set') {
			$(elem).find('#'+rowId+"dataValue").val(value);
		}
	}

	/**
	 * 自定义选择通用代码
	 * @param value
	 * @param options
	 * @returns
	 */
	function dictElem(value, options) {

		var rowId = options.rowId;
		var _this = this;
		var rowData = $(this).jqGrid('getRowData', rowId);
		var rowindex = $(this).jqGrid('getInd', rowId);
		var jqObject = $(this);
		var $elem = "";
		if(rowData.dataType=="lookup"){
			$elem = $('<div class="input-group input-group-sm" style="margin:2px;width:100%">' +
					'<input type="hidden" id="cellRowId" value="' + rowId + '">' +
					'<input class="form-control" placeholder="请选择" type="text" id="' + rowId + options.name + '" name="' + options.name + '" readonly value="' + value + '">' +
					'<span class="input-group-addon">' +
					'<i class="fa fa-search-plus"></i>' +
					'</span>' +
					'</div>');
			var selectUrl = "avicit/platform6/h5component/common/LookupTypeSelect.jsp";

			$elem.find('#' + options.name + ', .input-group-addon').on('click', function () {
				layer.open({
					type: 2,
					area: ['800px', '500px'],
					title: "请选择通用代码类型",
					skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
					shade: 0.3,
					maxmin: false, //开启最大化最小化按钮
					content: selectUrl,
					btn: ['确定', '关闭'],
					yes: function (index, layero) {
						var iframeWin = layero.find('iframe')[0].contentWindow;
						var objData = iframeWin.rowObjData;
						$("#" + rowId + options.name).val(objData.lookupType);//对其方式
						$("#" + rowindex + "_"+options.name).val(objData.lookupType);//对其方式
						layer.close(index);
					},
					btn2: function (index, layero) {
						layer.close(index);
					},
					success: function (layero, index) {
						var iframeWin = layero.find('iframe')[0].contentWindow;
						iframeWin.init({
							lookuptypeid: null,
							idFiled: rowId + options.name,
							textFiled: rowId + options.name,
							callBack: null
						});
					}
				});
			});
		}else if(rowData.dataType=="mapping"){
			$elem = $('<div class="input-group input-group-sm" style="margin:2px;width:100%">' +
					'<input type="hidden" id="cellRowId" value="' + rowId + '">' +
					'<input class="form-control"  placeholder="例：1:男, 2:女" type="text" id="' + rowId + options.name + '" name="' + options.name + '" value="' + value + '">' +
					'</div>');
		}else{
			$elem = $('');
		}
		return $elem;
	}
	function formColumnShowTypeElem(value, options){
		var selectStr = '<select class="form-control customelement">';
		for(var item in lookup_validFlag){
			if(item === value){
				selectStr += '<option value = '+item+' selected>'+lookup_validFlag[item]+'</option>';
			}else{
				selectStr += '<option value = '+item+'>'+lookup_validFlag[item]+'</option>';
			}
		}
		selectStr += '</select>';
		var selectEle = $(selectStr);
		return selectEle;
	}

	function formColumnShowTypeValue(elem, operation, value){
		if (operation === 'get') {
			return elem.find('option:selected').val();
		} else if (operation === 'set') {
			$(elem).val(value);
		}
	}
	function resizeSouth(width,height){
		var windowHeight = $(window).height();
		var topTableHeight = windowHeight - height
		$("#main").height(topTableHeight);
		$('#sysLogConfigField').setGridHeight(height-120);
		$('#sysLogConfig').setGridHeight(topTableHeight-120);
	}
</script>
</html>