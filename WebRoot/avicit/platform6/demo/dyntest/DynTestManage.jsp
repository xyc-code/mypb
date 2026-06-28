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
<!-- ControllerPath = "platform6/demo/dyntest/dynTestController/toDynTestManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTest_button_add" permissionDes="添加">
  	<a id="dynTest_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
	</sec:accesscontrollist>
	<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTest_button_edit" permissionDes="编辑">
	<a id="dynTest_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑" style="display:none;"><i class="fa fa-file-text-o"></i> 编辑</a>
	</sec:accesscontrollist>
	<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTest_button_delete" permissionDes="删除">
	<a id="dynTest_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i> 删除</a>
	</sec:accesscontrollist>
		</div>
    <div class="toolbar-right">
    	<select id="workFlowSelect" class="form-control input-sm workflow-select">
    		<option value="all" selected="selected">全部</option>
    		<option value="start">拟稿中</option>
    		<option value="active">流转中</option>
    		<option value="ended">已完成</option>
    	</select>
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynTest_keyWord" id="dynTest_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynTest_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynTest_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynTestjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		   <input type="hidden" id="bpmState" name="bpmState" value="all">
    	   <table class="form_commonTable">
			    <tr>
																						  						   							 							 						   						   						   																																													  						   							 								<th width="10%">文本:</th>
										    								 <td width="39%">
	    								 <input title="文本" class="form-control input-sm" type="text" name="text01" id="text01" />
	    								 </td>
																								 						   						   						   																																		  						   							 									<th width="10%">日期(从):</th>
    								   <td width="39%">
    									<div class="input-group input-group-sm">
											<input class="form-control date-picker" type="text" name="date01Begin" id="date01Begin" />
											<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
										</div>
    									</td>
																				 </tr>
										 <tr>
									        									<th width="10%">日期(至):</th>
    									<td width="39%">
    									<div class="input-group input-group-sm">
											<input class="form-control date-picker" type="text" name="date01End" id="date01End" />
											<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
										</div>
    									</td>
    																					   						   						   																																		  						   							 								<th width="10%">名称:</th>
										    								 <td width="39%">
	    								 <input title="名称" class="form-control input-sm" type="text" name="name" id="name" />
	    								 </td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%">意见:</th>
										    								 <td width="39%">
	    								 <input title="意见" class="form-control input-sm" type="text" name="idea" id="idea" />
	    								 </td>
																								 						   						   						   																							  						   							 								<th width="10%">数字:</th>
																			<td width="39%">
																				     												<div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="num01" id="num01"  data-min="-<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-max="<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
																					  										</td>
																										</tr>
									<tr>
															 						   						   						   																																		  						   							 								<th width="10%">标题:</th>
										    								 <td width="39%">
	    								 <input title="标题" class="form-control input-sm" type="text" name="title" id="title" />
	    								 </td>
																								 						   						   						   																																				 </tr>
    	</table>
    </form>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 流程的js -->
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js"></script>
<!-- 业务的js -->
<script src="avicit/platform6/demo/dyntest/js/DynTest.js" type="text/javascript"></script>
<script type="text/javascript">
var dynTest;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynTest.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynTest.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//刷新本页面
window.bpm_operator_refresh = function(){
	dynTest.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
																{ label: 'id', name: 'id', key: true, width: 75, hidden:true }
																								  																		,{ label: '文本', name: 'text01', width: 150}
																																  																		,{ label: '日期', name: 'date01', width: 150,formatter:format}
																																  																		,{ label: '名称', name: 'name', width: 150}
																													  																		,{ label: '意见', name: 'idea', width: 150}
																													  																		,{ label: '数字', name: 'num01', width: 150}
																																  																		,{ label: '标题', name: 'title', width: 150}
																																	<sec:accesscontrollist hasPermission="3" domainObject="dynTest_table_activityalias" permissionDes="流程当前步骤">
				        ,{ label: '流程当前步骤', name: 'activityalias_', width: 150 }
				        </sec:accesscontrollist>
				        <sec:accesscontrollist hasPermission="3" domainObject="dynTest_table_businessstate" permissionDes="流程状态">
				        ,{ label: '流程状态', name: 'businessstate_', width: 150 }
				        </sec:accesscontrollist>
	];
	var searchNames = new Array();
	var searchTips = new Array();
						  		  													  		         searchNames.push("text01");
    searchTips.push("文本");
		 	 		  										  										  		         searchNames.push("name");
    searchTips.push("名称");
		 	 		  							  		     		  							  										  		     		  										var searchC = searchTips.length==2?'或' + searchTips[1] : "";
	$('#dynTest_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	dynTest = new DynTest('dynTestjqGrid','${url}','searchDialog','form','dynTest_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynTest_insert').bind('click', function(){
		dynTest.insert();
	});
	//编辑按钮绑定事件
	$('#dynTest_modify').bind('click', function(){
		dynTest.modify();
	});
	//删除按钮绑定事件
	$('#dynTest_del').bind('click', function(){  
		dynTest.del();
	});
	//查询按钮绑定事件
	$('#dynTest_searchPart').bind('click', function(){
		dynTest.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynTest_searchAll').bind('click', function(){
		dynTest.openSearchForm(this,800,400);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		dynTest.initWorkFlow($(this).val());
	});
																																																																																																																																																					
});

</script>
</html>