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
<title>菜单权限管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<style type="text/css">
</style>
</head>
<body class="easyui-layout" fit="true">
<div id="panelcenter" data-options="region:'center',onResize:function(a){$('#jqGridResource').setGridWidth(a);;$('#jqGridResource').setGridHeight(getJgridTableHeight($('#panelcenter')));$(window).trigger('resize');}">
<div id="tableToolbarResource" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_consoleResource_button_add" permissionDes="添加">
	  		<a id="consoleResource_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="icon icon-add"></i>添加</a>
		</sec:accesscontrollist>
		
		 <sec:accesscontrollist hasPermission="3" domainObject="formdialog_consoleResource_button_save" permissionDes="保存">
			<a id="consoleResource_save" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="保存"><i class="icon icon-save"></i> 保存</a>
		</sec:accesscontrollist>
		
		 <sec:accesscontrollist hasPermission="3" domainObject="formdialog_consoleResource_button_save" permissionDes="复制行">
			<a id="consoleResource_copyrow" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="复制行"><i class="icon icon-save"></i> 复制行</a>
		</sec:accesscontrollist>

	   <sec:accesscontrollist hasPermission="3" domainObject="formdialog_consoleResource_button_delete" permissionDes="删除">
			<a id="consoleResource_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="icon icon-delete"></i> 删除</a>
		</sec:accesscontrollist>
		<span class="remind-text"></span>
	  </div>
 
 	<div class="toolbar-right">
				<div class="input-group form-tool-search" style="width:200px">
					<input type="text" name="sysResource_keyWord"
						id="sysResource_keyWord"
						class="form-control input-sm" placeholder="请输入查询条件"> <label
						id="sysResource_searchPart"
						class="icon icon-search form-tool-searchicon"></label>
				</div>
	</div>
	</div>
<table id="jqGridResource"></table>
<div id="jqGridPager"></div>
 
</div>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/console/menu/js/MenuAuthList.js" type="text/javascript"></script>
<script type="text/javascript">
var consoleResource;
var resourcesData =  new Array();

function initTips() {
	var tipsIndex;
	$("#iconTips").mouseover(function () {
		var message = "<span style='color:#333333;'>controller中定义的权限标识，如：@RequiresPermissions('权限标识')</span>";
		tipsIndex = layer.tips(message, $(this), {
			tips: 1,
			area:['auto','auto'],
			time: 0
		});
	}).mouseout(function () {
		layer.close(tipsIndex);
	});
}
$(document).ready(function () {
	var searchMainNames = new Array();
	var searchMainTips = new Array();
	searchMainNames.push("key");
 	searchMainTips.push("权限名称");
 	searchMainNames.push("value");
 	searchMainTips.push("标识");
	$('#sysResource_keyWord').attr('placeholder','请输入'+searchMainTips[0]+'或'+searchMainTips[1]);
	 
	var dataGridResourceColModel = [ 
						{
							label : 'id',
							name : 'id',
							width : 75,
							hidden : true
						}/* ,{
							label : '<span class="remind">*</span>'+'排序',
							name : 'orderBy',
							width : 80,
            				sortable : false,
							editable : true
						} */, {
							label : '<span class="remind">*</span>'+'权限名称',
							name : 'key',
							width : 150,
            				sortable : false,
							editable : true
							
						
						}, {
							label:'<span class="remind">*</span>权限标识<i class="tips-iconhelp icon iconfont icon-question-circle" id = "iconTips"></i>',
							name : 'value',
							width : 200,
            				sortable : false,
							editable : true
							
						} 
						];
						 
	consoleResource = new ConsoleResource('jqGridResource','${url}','form','${menuId}','sysResource_keyWord',dataGridResourceColModel);
	  
	consoleResource.init(); 
	 
	  //添加按钮绑定事件
		$('#consoleResource_insert').bind('click', function() {
			
			consoleResource.insert();
		});
		//删除按钮绑定事件
		$('#consoleResource_del').bind('click', function() {
			consoleResource.del();
		});
		//保存按钮绑定事件
		$('#consoleResource_save').bind('click', function() {
		//	 $('a#consoleResource_save').attr("disabled","disabled");
			// 判断修改的数据不能有重复的权限标识
			var subData = $('#jqGridResource').jqGrid('getRowData');
			for(var i=0;i<subData.length;i++)
			{
				subData[i].key = $('#'+$(subData[i].key).attr("id")).val()==undefined?subData[i].key:$('#'+$(subData[i].key).attr("id")).val();
				subData[i].value = $('#'+$(subData[i].value).attr("id")).val()==undefined?subData[i].value:$('#'+$(subData[i].value).attr("id")).val();

			}
			if (subData && subData.length > 0) {
				var subDataTemp = [];
				var pos = "-1";
				for (var i = 0; i < subData.length; i++) {
					//正在填写但未保存的数据有无重复
					if (subDataTemp.length > 0) {
						for (var k = 0; k < subDataTemp.length; k++) {
							// pos = subDataTemp[k].indexOf(":" + subData[i].value);
							pos = subDataTemp[k] == subData[i].value ? "1" : "-1";
							if (pos != "-1") {
								layer.msg("权限标识【" + subData[i].value + "】已重复，请重新填写！")
								return false;
							}
						}
					}
					subDataTemp.push(subData[i].value);
				}
			}
			consoleResource.save();
			// setTimeout(function(){ $('a#consoleResource_save').removeAttr("disabled"); }, 1000);
		});
		//关键字段查询按钮绑定事件
		$('#sysResource_searchPart').bind('click', function(){ 
			consoleResource.searchByKeyWord();
		});
		//复制行 consoleResource_copyrow
		//复制行按钮绑定事件
		$('#consoleResource_copyrow').bind('click', function() {
			consoleResource.copyrow();
		});
		$("#sysResource_keyWord").on('keyup',function(e){
			consoleResource.searchByKeyWord();
		});


		//添加鼠标移动事件
		initTips();
});


</script>
</html>