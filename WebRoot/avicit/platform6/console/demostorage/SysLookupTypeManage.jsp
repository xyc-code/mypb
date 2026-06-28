<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div>
		<div id="toolbar_sysLookup" class="toolbar" style="height:42px">
		<div class="toolbar-right">
				<div class="input-group form-tool-search" style="width: 185px;">
					<input type="text" name="subSysLookupType_keyWord"
						id="subSysLookupType_keyWord" class="form-control input-sm" placeholder="请输入查询条件"> <label
						id="subSysLookupType_searchPart"
						class="icon icon-search form-tool-searchicon"></label>
				</div>
			</div>
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_sysLookup_button_add" permissionDes="通用代码添加">
					<a id="sysLookup_insert" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm btn-point" role="button"
						title="通用代码添加"><i class="icon icon-add"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_sysLookup_button_delete"
					permissionDes="通用代码删除">
					<a id="sysLookup_del" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="通用代码删除"><i class="icon icon-delete"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_sysLookup_button_save"
					permissionDes="通用代码保存">
					<a id="sysLookup_save" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="保存"><i class="icon icon-save"></i> 保存</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_sysLookupType_button_LanguageSub"
					permissionDes="语言设置通用代码">
					<a id="sysLookup_set" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="语言设置"> <i class="icon icon-setting"></i> 语言设置</a>
				</sec:accesscontrollist>
			</div>
		</div>
		<table id="sysLookup"></table>
		<div id="sysLookupPager"></div>
	</div>
</body>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/platform6/console/lookuptype/js/SysLookup.js"	type="text/javascript"></script>
<script type="text/javascript" src="static/js/platform/component/common/exportData.js"></script>
<script type="text/javascript">

	$(document).ready(function() {
		var lookup_validFlag = {1:"有效",0:"无效"};
		var subSearchMainNames = new Array();
		var subSearchMainTips = new Array();
		subSearchMainNames.push("lookupCode");
		subSearchMainTips.push("代码编码");
		subSearchMainNames.push("lookupName");
		subSearchMainTips.push("代码名称");
		$('#subSysLookupType_keyWord').attr('placeholder',
				'请输入' + subSearchMainTips[0] + '或' + subSearchMainTips[1]);

		var sysLookupGridColModel = [ {
			label : 'id',
			name : 'id',
			key : true,
			width : 75,
			hidden : true
		}, {
			label : '通用代码ID',
			name : 'sysLookupTypeId',
			hidden : true,
			width : 150
		},  {
			label : '<span style="color:#ff0000"> * </span>代码编码',
			name : 'lookupCode',
			editable : true,
			edittype : "text",
			width : 150
		}, {
			label : '<span style="color:#ff0000"> * </span>代码名称',
			name : 'lookupName',
			editable : true,
			sortable : false,
			edittype : "text",
			width : 150
		},{
			label : '<span style="color:#ff0000"> * </span>显示顺序',
			name : 'displayOrder',
			editable : true,
			edittype : 'custom',
			editoptions : {
				custom_element : spinnerElem,
				custom_value : spinnerValue,
				min : 0,
				max : 999999999999,
				step : 1,
				precision : 0
			},
			width : 150
		},{
			label : '代码描述',
			name : 'lookupDesc',
			editable : true,
			sortable : false,
			edittype : "text",
			width : 150
		},{
			label : '是否有效 ',
			name : 'validFlag',
			value: "1",
			width : 150,
			hidden : true
		}, {
			label : '是否有效',
			name : 'validFlagAlias',
			value: "有效",
			width : 150,
			sortable : false,
			edittype : "custom",
			editable : true,
			editoptions : {
				custom_element : selectElem,
				custom_value : selectValue,
				forId : 'validFlag',
				value : lookup_validFlag
			}
		},{
			label : '是否是系统初始值 Y 是 N 否',
			name : 'systemFlag',
			hidden : true,
			width : 150
		} ];
		sysLookup = new SysLookup('sysLookup', 'console/lookup/operation/sub/',
				"formSub", sysLookupGridColModel,
				'searchDialogSub', '402848817b4cabfd017b4cb5b43b040f', subSearchMainNames,
				"subSysLookupType_keyWord");

		//子表操作
		//添加按钮绑定事件
		$('#sysLookup_insert').bind('click', function() {
			sysLookup.insert();
		});
		//编辑按钮绑定事件
		$('#sysLookup_save').bind('click', function() {

			//编码唯一性校验
			//校验地址
			var validateUrl = "console/lookup/operation/validateSubLookupType";
			//主表数据
			var rowid = $("#sysLookupType").jqGrid("getGridParam","selrow");
			var mainData = $("#sysLookupType").jqGrid("getRowData",rowid);
			//子表修改前数据
			var rowData = $("#sysLookup").jqGrid('getRowData');
			if (rowData.length > 0) {
				$("#sysLookup").jqGrid('endEditCell');
			}
			//子表修改后数据
			var subData = $("#sysLookup").jqGrid('getChangedCells');
			if (subData && subData.length > 0 && rowData.length > 0) {
				var subDataTemp = [];
				var pos = "-1";
				for (var i = 0; i < subData.length; i++) {
					//正在填写但未保存的数据有无重复
					if(subDataTemp.length>0){
						for (var k = 0; k < subDataTemp.length; k++) {
							pos = subDataTemp[k].indexOf(":" + subData[i].lookupCode);
							break;
						}
					}
					if( pos == "-1"){
						subDataTemp.push(subData[i].id + ":" + subData[i].lookupCode)
					}else{
						layer.msg("代码编码【" + subData[i].lookupCode + "】已重复，请重新填写！")
						return false;
					}
				}
				//发送服务器数据
				var data = {
					pid: mainData.id,
					code: subDataTemp.join(',')
				};
				var _sysLookup = sysLookup ;
				$.ajax({
					url : validateUrl,
					data : data,
					type : 'post',
					dataType : 'json',
					async : false,
					success : function(r) {
						if(r.flag){
							layer.msg("代码编码【" + r.code + "】已存在，请重新填写！")
							return false;
						}else{
							_sysLookup.save();
						}
					}
				});
			}else{
				if (rowData.length > 0) {
					layer.alert('请先修改数据！', {
						icon : 7,
						area : [ '400px', '' ], //宽高
						closeBtn : 0,
						title : '提示'
					});
				} else {
					layer.alert('请先添加数据！', {
						icon : 7,
						area : [ '400px', '' ], //宽高
						closeBtn : 0,
						title : '提示'
					});
				}
			}
			//sysLookup.save();
		});
		//删除按钮绑定事件
		$('#sysLookup_del').bind('click', function() {
			sysLookup.del();
		});
		//关键字段查询按钮绑定事件
		$('#subSysLookupType_searchPart').bind('click', function() {
			sysLookup.searchByKeyWord();
		});
		//打开高级查询
		$('#sysLookup_searchAll').bind('click', function() {
			sysLookup.openSearchForm(this, $('#sysLookup'));
		});
		//关键字段查询按钮绑定事件
		$('#sysLookup_searchPart').bind('click', function() {
			sysLookup.searchByKeyWord();
		});

			});
	
	function closeL(){
		sysLookupType.closeDialog('chooseL');
	};
	
	function closeLook(){
		sysLookup.closeDialog('chooseL');
	};

	function returnValueToParent() {
		window.parent.location.reload();
	}
</script>
</html>