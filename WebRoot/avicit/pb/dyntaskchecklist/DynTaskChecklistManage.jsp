<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "dyntaskchecklist/dynTaskChecklistController/toDynTaskChecklistManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/sfn/SelfDefiningQuery.js" type="text/javascript"></script>
<!-- 自定义列属性-->
<script src="static/js/platform/component/common/userDefinedColumnTools.js" type="text/javascript"></script>
<script src="avicit/dyntaskchecklist/js/DynTaskChecklist.js" type="text/javascript"></script>
<script type="text/javascript">
		var dynTaskChecklist;
		$(function(){
						dynTaskChecklist= new DynTaskChecklist('dgDynTaskChecklist','${url}','searchDialog','dynTaskChecklist');
			dynTaskChecklist.init();
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																														var array=[];
    			                                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'举一反三情况',
                                    field:'MANIFEST_ONE_AND',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                 
                              var searchObject = 
                                {
                                    name:'责任人',
                                    field:'MANIFEST_POSEN',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                 
                              var searchObject = 
                                {
                                    name:'发现的问题',
                                    field:'MANIFEST_ISSUE',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                                                     
                              var searchObject = 
                                {
                                    name:'完成时间',
                                    field:'MANIFEST_DATE_END',
                                    type:1,
                                    dataType:'date'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'CREATED_DEPT',
                                    field:'CREATED_DEPT',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                 
                              var searchObject = 
                                {
                                    name:'责任领导',
                                    field:'MANIFEST_LEADERSHIP',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                                                                                                                                                                                                     
                              var searchObject = 
                                {
                                    name:'整改措施具体内容 （含措施分解）',
                                    field:'MANIFEST_MEASURE',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                 
                              var searchObject = 
                                {
                                    name:'原因分析',
                                    field:'MANIFEST_CAUSE',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                                                                                                                                                                 
                              var searchObject = 
                                {
                                    name:'主要方面',
                                    field:'LIST_MAINLY',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'问题的具体内容',
                                    field:'MANIFEST_ISSUE_CONT',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                                                     
                              var searchObject = 
                                {
                                    name:'业务主管 部门会签',
                                    field:'MANIFEST_QIAN',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                    
            selfDefQury.init(array);
            selfDefQury.setQuery(function(param){
                dynTaskChecklist.searchDataBySfn(param);
            });
		});
		function formatDate(value,row,index){
			return dynTaskChecklist.format(value);
		}
		function formatDateTime(value,row,index){
			return dynTaskChecklist.formatDateTime(value);
		}
		function formatDateForHref(value,row,index){
		    var thisDate = dynTaskChecklist.format(value);
			return '<a href="javascript:void(0);" onclick="dynTaskChecklist.detail(\''+row.id+'\');">'+thisDate+'</a>';
		}
		function formatTimeForHref(){
			var thisTime = dynTaskChecklist.formatDateTime(value);
			return '<a href="javascript:void(0);" onclick="dynTaskChecklist.detail(\''+row.id+'\');">'+thisTime+'</a>';
		}
		function formatHref(value,row,inde){
			return '<a href="javascript:void(0);" onclick="dynTaskChecklist.detail(\''+row.id+'\');">'+value+'</a>';
		}
		        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  document.ready = function () {
	document.body.style.visibility = 'visible';
  }
</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center'" style="background:#ffffff;height:0px;padding:0px;overflow:hidden;">
		<div id="toolbarDynTaskChecklist" class="datagrid-toolbar">
		   		 	<table>
		 		<tr>
		 				 		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTaskChecklist_button_add" permissionDes="添加">
					<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="dynTaskChecklist.insert();" href="javascript:void(0);">添加</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTaskChecklist_button_edit" permissionDes="编辑">
					<td><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="dynTaskChecklist.modify();" href="javascript:void(0);">编辑</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTaskChecklist_button_delete" permissionDes="删除">
					<td><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="dynTaskChecklist.del();" href="javascript:void(0);">删除</a></td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTaskChecklist_button_query" permissionDes="查询">	
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="dynTaskChecklist.openSearchForm();" href="javascript:void(0);">查询</a></td>
				</sec:accesscontrollist>	
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTaskChecklist_button_seniorquery" permissionDes="高级查询">	
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="selfDefQury.show();" href="javascript:void(0);">高级查询</a></td>	
				</sec:accesscontrollist>	
				</tr>
		 	</table>
		 			 		 	</div>
	 	<table id="dgDynTaskChecklist"
			data-options="
				fit: true,
				border: false,
				rownumbers: true,
				animate: true,
				collapsible: false,
				fitColumns: true,
				autoRowHeight: false,
				toolbar:'#toolbarDynTaskChecklist',
				idField :'id',
				singleSelect: true,
				checkOnSelect: true,
				selectOnCheck: false,
				pagination:true,
				pageSize:dataOptions.pageSize,
				pageList:dataOptions.pageList,
				striped:true">
			<thead>
				<tr>
																																		<th data-options="field:'id', halign:'center',checkbox:true" width="220">ID</th>
																																							  																										<th data-options="field:'manifestOneAnd', halign:'center',formatter:formatHref" width="220">举一反三情况</th>	
																	
																																																							  																											<th data-options="field:'manifestPosen', halign:'center'" width="220">责任人</th>
																																																																	  																											<th data-options="field:'manifestIssue', halign:'center'" width="220">发现的问题</th>
																																																																										  																											<th data-options="field:'manifestDateEnd', halign:'center',formatter:formatDate" width="220">完成时间</th>
																		
																																															  																											<th data-options="field:'createdDept', halign:'center'" width="220">CREATED_DEPT</th>
																																																																	  																											<th data-options="field:'manifestLeadership', halign:'center'" width="220">责任领导</th>
																																																																																																														  																											<th data-options="field:'manifestMeasure', halign:'center'" width="220">整改措施具体内容 （含措施分解）</th>
																																																																	  																											<th data-options="field:'manifestCause', halign:'center'" width="220">原因分析</th>
																																																																																																					  																											<th data-options="field:'listMainly', halign:'center'" width="220">主要方面</th>
																																																								  																											<th data-options="field:'manifestIssueCont', halign:'center'" width="220">问题的具体内容</th>
																																																																										  																											<th data-options="field:'manifestQian', halign:'center'" width="220">业务主管 部门会签</th>
																																											</tr>
			</thead>
		</table>
	</div>
		<!--*****************************搜索*********************************  -->
	  <div id="searchDialog" data-options="iconCls:'icon-search',resizable:true,modal:false,buttons:'#searchBtns'" style="width: 904px;height:340px;display:none;">
		<form id="dynTaskChecklist">
    		<table class="form_commonTable">
					<tr>
																						  						   							 							 						   						   						   																							  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">举一反三情况:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestOneAnd"/></td>
																								 						   						   						   																																		  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">责任人:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestPosen"/></td>
																										</tr>
									<tr>
															 						   						   						   																																		  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">发现的问题:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestIssue"/></td>
																								 						   						   						   																																													  						   							 									<th width="10%" style="word-break:break-all;word-warp:break-word;">完成时间(从):</th>
    								   <td width="39%">
    									<input name="manifestDateEndBegin" id="manifestDateEndBegin" class="easyui-datebox" editable="false"  />
    									</td>
																				 </tr>
										 <tr>
									        									<th width="10%" style="word-break:break-all;word-warp:break-word;">完成时间(至):</th>
    									<td width="39%">
    									<input name="manifestDateEndEnd" id="manifestDateEndEnd" class="easyui-datebox" editable="false"  />
    									</td>
    																					   						   						   																							  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">CREATED_DEPT:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="createdDept"/></td>
																										</tr>
									<tr>
															 						   						   						   																																		  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">责任领导:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestLeadership"/></td>
																								 						   						   						   																																																																																									  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">整改措施具体内容 （含措施分解）:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestMeasure"/></td>
																										</tr>
									<tr>
															 						   						   						   																																		  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">原因分析:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestCause"/></td>
																								 						   						   						   																																																																														  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">主要方面:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="listMainly"/></td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">问题的具体内容:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestIssueCont"/></td>
																								 						   						   						   																																													  						   							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">业务主管 部门会签:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="manifestQian"/></td>
																										</tr>
									<tr>
															 						   						   						   																</tr>
    				</table>
    				</form>
    	 <div id="searchBtns" class="datagrid-toolbar foot-formopera" style="padding-bottom: 6px;">
            <table class="tableForm" border="0" cellspacing="1" width='100%'>
                <tr>
                    <td align="right">
                        <a class="easyui-linkbutton primary-btn" iconCls="" plain="false" onclick="dynTaskChecklist.searchData();" href="javascript:void(0);">查询</a>
                        <a class="easyui-linkbutton" iconCls="" plain="false" onclick="dynTaskChecklist.clearData();" href="javascript:void(0);">清空</a>
                        <a class="easyui-linkbutton" iconCls="" plain="false" onclick="dynTaskChecklist.hideSearchForm();" href="javascript:void(0);">返回</a>
                    </td>
                </tr>
            </table>
        </div>
     </div>
     </body>
</html>