<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,table,form,excel";
%>
<!DOCTYPE html>
<html>
<head>
	<!-- ControllerPath = "platform6/msystem/imp/sysimptemplate/sysImpTemplateController/toSysImpTemplateManage" -->
	<title>管理</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script src="static/js/platform/component/jQuery/jquery-easyui-1.3.5/jquery.easyui.min.js" type="text/javascript"></script>
	<style type="text/css">
		.isUpdateTips{
			width: 16px;
			height: 16px;
			float: left;
			background-image: url(static/images/platform/common/tips.png);
		}
		.tlineNumTips{
			width: 16px;
			height: 16px;
			float: left;
			background-image: url(static/images/platform/common/tips.png);
		}
	</style>
</head>
<body class="easyui-layout" fit="true">
<div class="easyui-layout" data-options="region:'center'">
	<div  id="centerDiv1" data-options="region:'north',split:true,width:fixwidth(.5),onResize:function(a){$('#sysImpTemplatejqGrid').setGridWidth(a);$(window).trigger('resize');}" style="height: 300px;overflow-x:hidden;">
		<div id="tableToolbar" class="toolbar">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_add"
									   permissionDes="添加">
					<a id="sysImpTemplate_insert" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
					   title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_edit"
									   permissionDes="编辑">
					<a id="sysImpTemplate_modify" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_delete"
									   permissionDes="删除">
					<a id="sysImpTemplate_del" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_generate_template"
									   permissionDes="生成模板">
					<a id="sysImpTemplate_generate" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="生成模板" onclick="sysImpTemplate.createTemplate()"><i class="glyphicon glyphicon-upload"></i> 生成模板</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_download_template"
									   permissionDes="下载模板">
					<a id="sysImpTemplate_download" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="下载模板" onclick="sysImpTemplate.downloadTemplate()"><i class="glyphicon glyphicon-download"></i> 下载模板</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_help"
									   permissionDes="帮助">
					<a id="sysImpTemplate_help" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="帮助" onclick="sysImpTemplate.helpDoc()"><i class="fa fa-fw fa-question-circle-o"></i> 帮助</a>
				</sec:accesscontrollist>

				<%--<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpTemplate_button_import_excel"
									   permissionDes="数据导入测试">
					<a id="sysImpTemplate_import_excel" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="数据导入测试" onclick="sysImpTemplate.importExcel()"><i class="fa fa-trash-o"></i> 数据导入测试</a>
				</sec:accesscontrollist>--%>
			</div>
			<div class="toolbar-right">
				<div class="input-group form-tool-search">
					<input type="text" name="sysImpTemplate_keyWord"
						   id="sysImpTemplate_keyWord" style="width: 270px;"
						   class="form-control input-sm" placeholder="请输入查询条件"> <label
						id="sysImpTemplate_searchPart"
						class="icon icon-search form-tool-searchicon"></label>
				</div>
			</div>
		</div>
		<table id="sysImpTemplatejqGrid"></table>
		<div id="jqGridPager"></div>
	</div>
	<div id="centerDiv2" data-options="region:'center',split:true,onResize:function(a,b){resizeSouth(a,b);}" style="padding:0px;overflow-x:hidden;">
		<div id="sysImpSheetToolbar" class="toolbar" style="height: 43px;">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpSheetTableRes_button_add"
									   permissionDes="初始化sheet页">
					<a id="sysImpTemplate_start" href="javascript:	;"
					   class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
					   title="初始化sheet页"><i class="fa fa-cogs"></i><span>初始化sheet页</span></a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpSheetTableRes_button_delete"
									   permissionDes="删除">
					<a id="sysImpSheetTableRes_del" href="javascript:;"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
									   domainObject="formdialog_sysImpSheetTableRes_button_save"
									   permissionDes="保存">
					<a id="sysImpSheetTableRessave" href="javascript:void(0)"
					   class="btn btn-primary form-tool-btn btn-sm" role="button"
					   title="保存"><i class="fa fa-floppy-o"></i> 保存</a>
				</sec:accesscontrollist>
			</div>
		</div>
		<table id="sysImpSheetTableResjqGrid"></table>
		<%--			<div id="jqGridPager1"></div>--%>
	</div>
</div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto; display: none">
	<form id="form" style="padding: 10px;">
		<input type="hidden" name="type" value="0">
		<table class="form_commonTable">
			<tr>
				<th width="10%">编码:</th>
				<td width="39%"><input title="编码" class="form-control input-sm"
									   type="text" name="code" id="code" /></td>
				<th width="10%">名称:</th>
				<td width="39%"><input title="名称" class="form-control input-sm"
									   type="text" name="name" id="name" /></td>
			</tr>
			<tr>
				<th width="10%">配置方式:</th>
				<td width="39%"><input title="配置方式"
									   class="form-control input-sm" type="text" name="manageStyle"
									   id="manageStyle" /></td>
			</tr>
			<tr>
				<th width="10%">事务控制方式:</th>
				<td width="39%"><input
						title="事务控制方式"
						class="form-control input-sm" type="text" name="swfl" id="swfl" />
				</td>
				<th width="10%">描述:</th>
				<td width="39%"><input title="描述" class="form-control input-sm"
									   type="text" name="bz" id="bz" /></td>
			</tr>
			<tr>
				<th width="10%">用户自定义处理类:</th>
				<td width="39%"><input title="用户自定义处理类"
									   class="form-control input-sm" type="text" name="userClass"
									   id="userClass" /></td>
			</tr>
		</table>
	</form>
</div>
<script src="avicit/platform6/console/excel/sysexceltemplatesheetmanage/imp/js/SysImpExcelTemplate.js" type="text/javascript"></script>
<script src="static/js/platform/component/common/CommonDialog.js" type="text/javascript"></script>
<script type="text/javascript">
	var sysImpTemplate = new Array();
	var mapListTableName = null;
	var selectData={};
	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="sysImpTemplate.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHref(cellvalue, options, rowObject) {
		var thisDate = format(cellvalue);
		return '<a href="javascript:void(0);" onclick="sysImpTemplate.detail(\''
				+ rowObject.id + '\');">' + thisDate + '</a>';
	}
	//根据之前选择显示
	function formatchoose(cellvalue, options, rowObject) {
		if (cellvalue == "1") {
			return "允许单条成功"
		} else if (cellvalue == "2") {
			return "允许单sheet页成功"
		} else if (cellvalue == "3"){
			return "允许全部成功"
		} else {
			return "允许单条成功"
		}

	}

	//根据之前选择显示
	function formatManageStyle(cellvalue, options, rowObject) {
		if (cellvalue == "1") {
			return "Excel模板"
		} else if (cellvalue == "2") {
			return "DTO实体类"
		} else {
			return ""
		}
	}

	//判断是否为空
	function formatterValueYN(cellvalue, options, rowObject) {
		if (cellvalue == "Y") {
			return "是"
		} else if (cellvalue == "N") {
			return "否"
		}else{
			return "";
		}
	}
	function unformatterValueYN(cellvalue, options, rowObject) {
		if (cellvalue == "是") {
			return "Y"
		} else if (cellvalue == "否") {
			return "N"
		}else{
			return "";
		}
	}

	function formatOperation(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="sysImpTemplate.operation(\''
				+ rowObject.id + '\');">' + '属性设置</a>';
	}

	function currencyElem(value, options) {
		var rowId = options.rowId;
		var rowData = $(this).jqGrid('getRowData', rowId);

		var $elem = $('<div class="input-group input-group-sm" style="margin:2px">'
				+ '<input type="hidden" id="cellRowId" value="'+ rowId +'">'
				+ '<input class="form-control" placeholder="请选择" type="text" id="cellCurrency" name="cellCurrency" readonly value="'+ value +'">'
				+ '<span class="input-group-addon">'
				+ '<i class="fa fa-search-plus"></i>' + '</span>' + '</div>');

		$elem.find('#cellCurrency, .input-group-addon').on('click',function() {
			self.filterTablePrefix = 'BPM_,EFORM_,MOBILE_,MONITOR_,QRTZ_,DB_TABLE,SYS_,PORTAL_,RESTEASY_,SEARCH_';
			layer.open({
				type : 2,
				area : [ '800px', '540px' ],
				title : '请选择数据表',
				skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
				shade : 0.3,
				maxmin : false, //开启最大化最小化按钮
				content : 'avicit/platform6/console/excel/common/SysExcelSelectDataTable.jsp',
				btn : [ '确定', '关闭' ],
				yes : function(index, layero) {
					var iframeWin = layero.find('iframe')[0].contentWindow;//子页面的窗口对象
					var $childrenBody = layer.getChildFrame('body',index);//子页面的body元素
					var $jqGridTable = $childrenBody.find("#testCurrencyjqGrid");

					//从子页面向主页面传递参数
					var id = $jqGridTable.jqGrid('getGridParam', 'selrow');
					if (id) {
						var data = $jqGridTable.jqGrid("getRowData", id);
						$elem.find("#cellCurrency").val(data['TABLE_NAME']);
						//$elem.parent().parent().parent().parent().parent().jqGrid('endEditCell');

					}
					layer.close(index);
				},
				cancel : function(index, layero) {
					layer.close(index);
				},
				success : function(layero, index) {
					var iframeWin = layero.find('iframe')[0].contentWindow;
					iframeWin.init({
						callbcak : function (data){
							$elem.find("#cellCurrency").val(data['TABLE_NAME']);
							layer.close(index);
						}
					});
				}
			});
		});

		return $elem;
	}

	function currencyValue(elem, operation, value) {
		if (operation === 'get') {
			return $(elem).find('#cellCurrency').val();
		} else if (operation === 'set') {
			$(elem).find('#cellCurrency').val(value);
		}
	}

	function saveSheet(){
		$("#sysImpSheetTableResjqGrid").jqGrid('endEditCell'); //关闭单元格编辑
		var ids = $("#sysImpSheetTableResjqGrid").jqGrid('getGridParam','selarrrow');
		var obj = $("#sysImpSheetTableResjqGrid").jqGrid("getRowData");
		var tableNames = new Array();
		for(var i = 0; i< obj.length; i++){
			if(obj[i].display == '是'){
				obj[i].display = "Y";
			} else if(obj[i].display == '否') {
				obj[i].display = "N";
			}
			if(obj[i].isUpdate == '是'){
				obj[i].isUpdate = "Y";
			} else if(obj[i].isUpdate == '否') {
				obj[i].isUpdate = "N";
			}
			if(obj[i].tableName == ""){
				layer.alert('表名称：不能为空！', {
							icon: 0,
							title :'提示',
							area: ['400px', ''], //宽高
							closeBtn: 0
						}
				);
				return;
			}
			if(! validateNumber(obj[i].tlineNum)){
				layer.alert('标题行数：请输入0-100之间的整数！', {
							icon: 0,
							title :'提示',
							area: ['400px', ''], //宽高
							closeBtn: 0
						}
				);
				return;
			}
			tableNames[i] = obj[i].tableName;
		}
		if((new Set(tableNames)).size != tableNames.length){
			layer.alert('多sheet页表名称不允许重复，请重新选择！', {
						icon: 0,
						title :'提示',
						area: ['400px', ''], //宽高
						closeBtn: 0
					}
			);
			return;
		}
		$.ajax({
			url : 'platform6/msystem/excel/sheet/sysExcelSheetController/operation/save',
			data : {
				data : JSON.stringify(obj)
			},
			type : 'POST',
			dataType : 'JSON',
			async : false,
			success : function(result) {
				if (result.flag == "success") {
					layer.msg('保存成功！');
				} else {
					layer.msg('数据保存失败！');
				}
			}
		});
	}

	$(document).ready(function(){
		//template页面
		var dataGridColModel = [
			{label : 'id',name : 'id',key : true,width : 75,hidden : true},
			{label : '编码',name : 'code',width : 80,formatter : formatValue},
			{label : '编码',name : 'virtualCode',width : 80,hidden: true},
			{label : '名称',name : 'name',width : 80},
			{label : '配置方式',name : 'manageStyle',width : 80,formatter : formatManageStyle},
			{label : '事务控制方式',name : 'swfl',width : 80,formatter : formatchoose},
			{label : '描述',name : 'bz',width : 80},
			{label : '用户自定义处理类',name : 'userClass',width : 80}
		];
		//sheet关联页 页面
		var dataGridColModel1 = [
	        {label : 'id',name : 'id',key : true,width : 75,hidden : true},
	        {label : '导入模板id',name : 'templateId',width : 80,editable : false,hidden : true},
	        {label : 'Sheet页（或DTO）名称',name : 'sheetName',width : 80},
	        {label : '<font color="red">*</font>表名称',name : 'tableName',width : 80/*,editrules:{required:true} */,editable : true, edittype : "custom",editoptions : {custom_element : currencyElem, custom_value : currencyValue }},
	        {label : '标题',name : 'excelTitle',width : 80,editable: true},
	        {label : '<span style="color:red">*</span>标题行数<i class="tips-iconhelp icon iconfont icon-question-circle" id="tlineNumTips"></i>',name : 'tlineNum',width : 80,editable : true, formatoptions: { defaultValue: 0 }},
	        {label : '是否显示标题',name : 'display',width : 80,editable: true, edittype : "select",editrules:{required:true}, editoptions: {value : "Y:是;N:否"},formatter:formatterValueYN },
	        {label : '是否更新<i class="tips-iconhelp icon iconfont icon-question-circle" id="isUpdateTips"></i>',name : 'isUpdate',width : 80,editable: true, edittype:"select", editrules:{required:true}, editoptions:{value : "Y:是;N:否"},formatter:formatterValueYN },
	        {label : '操作',name : 'operation',width : 80, editable : false, align : 'center', formatter : formatOperation},
	        {label : '表描述',name : 'tableDesc',width : 80, editable : true, hidden : true}
		];
		var searchNames = new Array();
		var searchTips = new Array();
		searchNames.push("code");
		searchTips.push("编码");
		searchNames.push("name");
		searchTips.push("名称");
		var searchC = searchTips.length == 2 ? '或'+ searchTips[1] : "";
		$('#sysImpTemplate_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
		sysImpTemplate = new SysImpExcelTemplate(
				'sysImpTemplatejqGrid', '${url}',
				'searchDialog', 'form',
				'sysImpTemplate_keyWord', searchNames,
				dataGridColModel);
		//添加按钮绑定事件
		$('#sysImpTemplate_insert').bind('click', function() {
			sysImpTemplate.insert();
		});
		//编辑按钮绑定事件
		$('#sysImpTemplate_modify').bind('click', function() {
			sysImpTemplate.modify();
		});
		//删除按钮绑定事件
		$('#sysImpTemplate_del').bind('click', function() {
			sysImpTemplate.del();
		});
		//查询按钮绑定事件
		$('#sysImpTemplate_searchPart').bind('click',function() {
			sysImpTemplate.searchByKeyWord();
		});
		//查询框回车事件
		$('#sysImpTemplate_keyWord').bind('keyup', function(e) {
			if (e.keyCode == 13) {
				sysImpTemplate.searchByKeyWord();
			}
		});
		//打开高级查询框
		$('#sysImpTemplate_searchAll').bind('click',function() {
			sysImpTemplate.openSearchForm(this);
		});
		//sheet页保存
		$("#sysImpSheetTableRessave").bind('click',function() {
			saveSheet();
		});
		//column详细信息保存
		/*$("#sysImpcolumnSave").bind('click',function() {
			saveColumn();
		});*/
		//sheet页设置
		$("#sysImpSheetTableResjqGrid").jqGrid({
			url : 'platform6/msystem/excel/sheet/sysExcelSheetController/operation/getSysImpSheetTableRessByPage.json',
			mtype : 'POST',
			datatype : "json",
			colModel : dataGridColModel1,//表格列的属性
			height : $(window).height() - 120,//初始化表格高度
			scrollOffset : 20, //设置垂直滚动条宽度
			rowNum : 100,//每页条数
			rowList : [ 200, 100, 50, 30, 20, 10 ],//每页条数可选列表
			altRows : true,//斑马线
			userDataOnFooter : true,
			pagerpos : 'left',//分页栏位置
			// loadonce : false,
			viewrecords : true, //是否要显示总记录数
			styleUI : 'Bootstrap', //Bootstrap风格
			multiselect : true,//可多选
			autowidth : true,//列宽度自适应
			responsive : true,//开启自适应
			hasTabExport:false,
			hasColSet:false,
			// pager : "#jqGridPager1",
			shrinkToFit : true,
			cellEdit : true,
			cellsubmit : 'clientArray',
			multiboxonly : true,
			// onSelectRow : onSelectRowSheet//,js方法
			loadComplete: function (data) {
				var type_id = $("#sysImpTemplatejqGrid").jqGrid('getGridParam', 'selarrrow');
				var rowData = $("#sysImpTemplatejqGrid").jqGrid('getRowData', type_id);
				if(rowData) {
					if (rowData.manageStyle === 'DTO实体类'){
						$("#sysImpSheetTableResjqGrid").setGridParam().showCol("excelTitle");
						$("#sysImpSheetTableResjqGrid").setGridParam().showCol("display");
						$("#sysImpTemplate_generate").show();
						$("#sysImpTemplate_download").show();
						$("#sysImpTemplate_start").find("span").html("初始化DTO");
						$("#sysImpTemplate_start").attr("title","初始化DTO");
					} else if(rowData.manageStyle === 'Excel模板'){
						$("#sysImpSheetTableResjqGrid").setGridParam().hideCol("excelTitle");
						$("#sysImpSheetTableResjqGrid").setGridParam().hideCol("display");
						$("#sysImpTemplate_generate").hide();
						$("#sysImpTemplate_download").hide();
						$("#sysImpTemplate_start").find("span").html("初始化sheet页");
						$("#sysImpTemplate_start").attr("title","初始化sheet页");
					}
				}
				$("#sysImpSheetTableResjqGrid").setGridWidth($(window).width()); //设置宽度
			},
			beforeSaveCell: function(rowid,celname,value,iRow,iCol) {
				if("display" == celname){
					if("N" == value) {
						$("#sysImpSheetTableResjqGrid").setCell(rowid, 'tlineNum', 0);
					}
				}
				if("tlineNum" == celname){
					if(value > 0) {
						$("#sysImpSheetTableResjqGrid").setCell(rowid, 'display', "Y");
					} else {
						$("#sysImpSheetTableResjqGrid").setCell(rowid, 'display', "N");
					}
				}
			}
			// afterSaveCell:function(rowid,celname,value,iRow,iCol) {
			// 	if(value) {
			// 		if("tableName" == celname) {
			// 			var obj = $("#sysImpSheetTableResjqGrid").jqGrid("getRowData");
			// 			for(var i = 0; i< obj.length; i++) {
			// 				if (obj[i].id != rowid) {
			// 					if (obj[i].tableName == value) {
			// 						layer.alert('表名称不允许重复！', {
			// 							icon : 7,
			// 							area : [ '400px', '' ],
			// 							closeBtn : 0,
			// 							btn : [ '关闭' ],
			// 							title : "提示"
			// 						});
			// 						$("#sysImpSheetTableResjqGrid").setCell(rowid, 'tableName', '&nbsp;');
			// 					}
			// 				}
			// 			}
			// 		}
			// 	}
			// }
		});

		//初始化sheet页
		$("#sysImpTemplate_start").bind('click',function() {
			var ids = $('#sysImpTemplatejqGrid').jqGrid('getGridParam','selarrrow');
			var rowData = $('#sysImpTemplatejqGrid').jqGrid('getRowData',ids[0]);
			if (ids.length < 1) {
				layer.alert('请选择一条数据！', {
					icon : 7,
					area : [ '400px', '' ], // 宽高
					closeBtn : 0,
					btn : [ '关闭' ],
					title : "提示"
				});
				return false;
			} else if (ids.length > 1) {
				layer.alert('只允许选择一条数据！', {
					icon : 7,
					area : [ '400px', '' ],
					closeBtn : 0,
					btn : [ '关闭' ],
					title : "提示"
				});
				return false;
			}
			$.ajax({
				url : 'platform6/msystem/excel/template/sysImpExcelTemplateController/operation/getExcelInfo',
				data : {
					templateId : ids[0]
				},
				type : 'POST',
				dataType : 'JSON',
				async : false,
				success : function(r) {
					//sheet页name刷新
					$("#sysImpSheetTableResjqGrid").jqGrid('setGridParam',{
						datatype : 'json',
						postData : {
							'templateId' : ids[0]
						}
					}).trigger("reloadGrid");
				}
			});

		});

		$("#sysImpSheetTableRes_del").bind('click',function(){
			var rows = $("#sysImpSheetTableResjqGrid").jqGrid('getGridParam','selarrrow');
			var _self = this;
			var ids = [];
			var l =rows.length;
			if(l > 0){
				layer.confirm('确认要删除选中的数据吗?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
					for(;l--;){
						ids.push(rows[l]);
					}
					avicAjax.ajax({
						url:'platform6/msystem/excel/template/sysImpExcelTemplateController/operation/deleteSheetIds',
						data:	JSON.stringify(ids),
						contentType : 'application/json',
						type : 'post',
						dataType : 'json',
						success : function(r){
							if (r.flag == "success") {
								var ids = $('#sysImpTemplatejqGrid').jqGrid('getGridParam','selarrrow');
								$("#sysImpSheetTableResjqGrid").jqGrid('setGridParam',{
									datatype : 'json',
									postData : {
										'templateId' : ids[0]
									}
								}).trigger("reloadGrid");
								$("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam',{
									datatype : 'json',
									postData : {
										'excelId' : ""
									}
								}).trigger("reloadGrid");
							}else{
								layer.alert('删除失败！' + r.error, {
											icon: 7,
											area: ['400px', ''],
											closeBtn: 0,
											btn: ['关闭'],
											title:"提示"
										}
								);
							}
						}
					});
					layer.close(index);
				});
			}else{
				layer.alert('请选择要删除的数据！', {
							icon: 7,
							area: ['400px', ''], //宽高
							closeBtn: 0,
							btn: ['关闭'],
							title:"提示"
						}
				);
			}
		});
		//sheet区域太小隐藏文字显示
		// $("#jqGridPager1_right").css("display","none");

		initTips();
	});
	function initTips() {
		var tipsIndex;
		$("#isUpdateTips").mouseover(function () {
			var message = "<span style='color:#333333;'>当选择为是时，获取属性配置中带有唯一性标识的字段，并以唯一字段为查询条件获取更新数据。<br/>如果存在则更新，否则做插入操作；当选择为否时，只做数据插入。</span>";
			tipsIndex = layer.tips(message, $(this), {
				tips: 1,
				area: ['auto','auto'],
				time: 0
			});
		}).mouseout(function () {
			layer.close(tipsIndex);
		});
		$("#tlineNumTips").mouseover(function () {
			var message = "<span style='color:#333333;'>Excel导入方式，标题行数为导入模板文档中标题所占行数；<br/>DTO方式，如果标题显示，对应生成模板文档中标题行数。</span>";
			tipsIndex = layer.tips(message, $(this), {
				tips: 3,
				area: ['auto','auto'],
				time: 0
			});
		}).mouseout(function () {
			layer.close(tipsIndex);
		});
	}
	//南侧拖拽修改改变时修改表格自适应
	function resizeSouth(width,height){
		var windowHeight = $(window).height();
		var topTableHeight = windowHeight - height;
		$("#centerDiv1").height(topTableHeight);
		$("#centerDiv2").height(topTableHeight);
		$('#sysImpSheetTableResjqGrid').setGridHeight(topTableHeight-120);
		$('#sysImpTemplatejqGrid').setGridHeight(topTableHeight-120);
	}
</script>
</html>