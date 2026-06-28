<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "cape/pmprojectys/pmprojectyssts/pmProjectYsStsController/toPmProjectYsStsManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/BpmJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="avicit/cape/pmprojectys/pmprojectyssts/js/PmProjectYsSts.js" type="text/javascript"></script>
<script src="static/js/platform/component/sfn/SelfDefiningQuery.js" type="text/javascript"></script>
<script type="text/javascript">
		var pmProjectYsSts;
		$(function(){
						pmProjectYsSts= new PmProjectYsSts('dgPmProjectYsSts','${url}','searchDialog','pmProjectYsSts');
			pmProjectYsSts.init();
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																															    
		});
		var array=[];
																																													var searchObject = 
							{
								name:'密级',
								field:'SECRET_LEVEL',
								type:1,
								dictCode:'PLATFORM_FILE_SECRET_LEVEL',
								dataType:'dict'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'项目id',
								field:'PROJECT_ID',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'项目名称',
								field:'PROJECT_NAME',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'任务id',
								field:'TASK_ID',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'任务名称',
								field:'TASK_NAME',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'职业健康-验收时间',
								field:'ZYJK_YS_DATE',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'职业健康-批复文件名称',
								field:'ZYJK_NAME',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							 var searchObject = 
							{
								name:'职业健康-批复时间',
								field:'ZYJK_DATE',
								type:1,
								dataType:'datetime'};
								 array.push(searchObject);
						 																																	  var searchObject = 
							{
								name:'职业健康-批复文号',
								field:'ZYJK_NO',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'环保-验收时间',
								field:'HB_YS_DATE',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'环保-批复文件名称',
								field:'HB_NAME',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							 var searchObject = 
							{
								name:'环保-批复时间',
								field:'HB_DATE',
								type:1,
								dataType:'datetime'};
								 array.push(searchObject);
						 																																	  var searchObject = 
							{
								name:'环保-批复文号',
								field:'HB_NO',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'安全-验收时间',
								field:'AQ_YS_DATE',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'安全-批复文件名称',
								field:'AQ_NAME',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							 var searchObject = 
							{
								name:'安全-批复时间',
								field:'AQ_DATE',
								type:1,
								dataType:'datetime'};
								 array.push(searchObject);
						 																																	  var searchObject = 
							{
								name:'安全-批复文号',
								field:'AQ_NO',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																																																																	  var searchObject = 
							{
								name:'创建部门',
								field:'CREATED_DEPT',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																																																																																		selfDefQury.init(array);
			selfDefQury.setQuery(function(param){
			pmProjectYsSts.searchDataBySfn(param);
			});
		function formatDate(value,row,index){
			return pmProjectYsSts.format(value);
		}
		function formatDateTime(value,row,index){
			return pmProjectYsSts.formatDateTime(value);
		}
		
		function formatDateForHref(value,row,index){
		    var thisDate = pmProjectYsSts.format(value);
			return "<a href='javascript:void(0);' onclick='pmProjectYsSts.detail(\""+row.id+"\",\""+thisDate+"\");'>"+thisDate+"</a>";
		}
		function formatTimeForHref(value,row,index){
			var thisTime = pmProjectYsSts.formatDateTime(value);
			return "<a href='javascript:void(0);' onclick='pmProjectYsSts.detail(\""+row.id+"\",\""+thisTime+"\");'>"+thisTime+"</a>";
		}
		
		function formatHref(value,row,inde){
			return "<a href='javascript:void(0);' onclick='pmProjectYsSts.detail(\""+row.id+"\",\""+value+"\");'>"+value+"</a>";
		}
							 					 			  		       function formatTyForHref(value,row,index){
		          var thisTongY = Platform6.fn.lookup.formatLookupType(value, pmProjectYsSts.secretLevel);
			      return "<a href='javascript:void(0);' onclick='pmProjectYsSts.detail(\""+row.id+"\",\""+thisTongY+"\");'>"+thisTongY+"</a>";
		       }
		      		    					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 					 			document.ready = function () {
	  document.body.style.visibility = 'visible';
	}
	</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div style="display: none">
		<form id="formSearchBpm">
			<input type="hidden" name="bpmState" id="bpmState" value="all"></input>
			<input type="hidden" name="bpmType" id="bpmType" value="my"></input>
		</form>
	</div>
	<div data-options="region:'center'" style="background:#ffffff;">
		<div id="toolbarPmProjectYsSts" class="datagrid-toolbar">
		    		 	<table>
		 		<tr>
		 		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_bpmAll" permissionDes="全部文件">
					<td width="120px;">
						<a href="javascript:void(0);" id="allMenu" name="bpm_all_menu" class='easyui-menubutton' data-options="menu:'#allmm',iconCls:'icon-all-file'">全部文件</a>
						<div id="allmm" style="width:105px;">
							<div id='all_start' name="bpm_all_start" onclick="pmProjectYsSts.initWorkFlow('start','all')">拟稿中</div>
							<div id='all_active' name="bpm_all_active" onclick="pmProjectYsSts.initWorkFlow('active','all')">流转中</div>
							<div id='all_ended' name="bpm_all_ended" onclick="pmProjectYsSts.initWorkFlow('ended','all')">已完成</div>
							<div id='all_all' name="bpm_all_all" onclick="pmProjectYsSts.initWorkFlow('all','all')">全部文件</div>
						</div>
					</td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_bpmMyFile" permissionDes="我的文件">
					<td width="120px;">
						<a href="javascript:void(0);" id="myMenu" name="bpm_my_menu" class='easyui-menubutton' data-options="menu:'#mymm',iconCls:'icon-my-file'">我的文件</a>
						<div id="mymm" style="width:105px;">
							<div id='my_start' name="bpm_my_start"  onclick="pmProjectYsSts.initWorkFlow('start','my')">我的拟稿</div>
							<div id='my_active' name="bpm_my_active" onclick="pmProjectYsSts.initWorkFlow('active','my')">我的流转</div>
							<div id='my_ended' name="bpm_my_ended" onclick="pmProjectYsSts.initWorkFlow('ended','my')">我的完成</div>
							<div id='my_all' name="bpm_my_all" onclick="pmProjectYsSts.initWorkFlow('all','my')">我的全部</div>
						</div>
					</td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_add" permissionDes="添加">
					<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="pmProjectYsSts.insert();" href="javascript:void(0);">添加</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_edit" permissionDes="编辑">
					<td id="tool_edit_td"><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="pmProjectYsSts.modify();" href="javascript:void(0);">编辑</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_delete" permissionDes="删除">
					<td id="tool_del_td"><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="pmProjectYsSts.del();" href="javascript:void(0);">删除</a></td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_query" permissionDes="查询">
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="pmProjectYsSts.openSearchForm();" href="javascript:void(0);">查询</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsSts_button_seniorquery" permissionDes="高级查询">
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="selfDefQury.show();" href="javascript:void(0);">高级查询</a></td> 
				</sec:accesscontrollist>		
				</tr>
		 	</table>
		 			 		 	</div>
	 	<table id="dgPmProjectYsSts"
			data-options="
				fit: true,
				border: false,
				rownumbers: true,
				animate: true,
				collapsible: false,
				fitColumns: true,
				autoRowHeight: false,
				toolbar:'#toolbarPmProjectYsSts',
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
																																		<th data-options="field:'id', halign:'center',checkbox:true" width="220">主键</th>
																																																																			<th data-options="field:'secretLevel', halign:'center',formatter:formatTyForHref" width="220">密级</th>
																	
																																																																											<th data-options="field:'projectId', halign:'center'" width="220">项目id</th>
																		
																																																																											<th data-options="field:'projectName', halign:'center'" width="220">项目名称</th>
																		
																																																																											<th data-options="field:'taskId', halign:'center'" width="220">任务id</th>
																		
																																																																											<th data-options="field:'taskName', halign:'center'" width="220">任务名称</th>
																		
																																																																											<th data-options="field:'zyjkYsDate', halign:'center'" width="220">职业健康-验收时间</th>
																		
																																																																											<th data-options="field:'zyjkName', halign:'center'" width="220">职业健康-批复文件名称</th>
																		
																																																																											<th data-options="field:'zyjkDate', halign:'center',formatter:formatDateTime" width="220">职业健康-批复时间</th>
																		
																																																																											<th data-options="field:'zyjkNo', halign:'center'" width="220">职业健康-批复文号</th>
																		
																																																																											<th data-options="field:'hbYsDate', halign:'center'" width="220">环保-验收时间</th>
																		
																																																																											<th data-options="field:'hbName', halign:'center'" width="220">环保-批复文件名称</th>
																		
																																																																											<th data-options="field:'hbDate', halign:'center',formatter:formatDateTime" width="220">环保-批复时间</th>
																		
																																																																											<th data-options="field:'hbNo', halign:'center'" width="220">环保-批复文号</th>
																		
																																																																											<th data-options="field:'aqYsDate', halign:'center'" width="220">安全-验收时间</th>
																		
																																																																											<th data-options="field:'aqName', halign:'center'" width="220">安全-批复文件名称</th>
																		
																																																																											<th data-options="field:'aqDate', halign:'center',formatter:formatDateTime" width="220">安全-批复时间</th>
																		
																																																																											<th data-options="field:'aqNo', halign:'center'" width="220">安全-批复文号</th>
																		
																																																																																																																																	<th data-options="field:'createdDept', halign:'center'" width="220">创建部门</th>
																		
																																																																																																																																						<th data-options="field:'activityalias_', halign:'center'" width="220px">流程当前步骤</th>
					<th data-options="field:'businessstate_', halign:'center'" width="220px">流程状态</th>
				</tr>
			</thead>
		</table>
	</div>
		<!--*****************************搜索*********************************  -->
	   <div id="searchDialog" data-options="iconCls:'icon-search',resizable:true,modal:false,buttons:'#searchBtns'" style="width: 904px;height:340px;display:none;">
		<form id="pmProjectYsSts">
    		<table class="form_commonTable">
					<tr>
																						  						  										                							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">密级:</th>
																		 <td width="39%">
                                     <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                     </pt6:syslookup> 
                                     </td>
                                     															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">项目id:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="项目id" name="projectId"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">项目名称:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="项目名称" name="projectName"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">任务id:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="任务id" name="taskId"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">任务名称:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="任务名称" name="taskName"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">职业健康-验收时间:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="职业健康-验收时间" name="zyjkYsDate"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">职业健康-批复文件名称:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="职业健康-批复文件名称" name="zyjkName"/></td>
																								   							  						 						   																							  						  																<th width="10%" style="word-break:break-all;word-warp:break-word;">职业健康-批复时间(从):</th>
    									<td width="39%">
    									<input name="zyjkDateBegin" id="zyjkDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
																				 </tr>
										 <tr>
									        									<th width="10%" style="word-break:break-all;word-warp:break-word;">职业健康-批复时间(至):</th>
    									 <td width="39%">
    									<input name="zyjkDateEnd" id="zyjkDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	

								 														  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">职业健康-批复文号:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="职业健康-批复文号" name="zyjkNo"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">环保-验收时间:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="环保-验收时间" name="hbYsDate"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">环保-批复文件名称:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="环保-批复文件名称" name="hbName"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  																<th width="10%" style="word-break:break-all;word-warp:break-word;">环保-批复时间(从):</th>
    									<td width="39%">
    									<input name="hbDateBegin" id="hbDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
										    									<th width="10%" style="word-break:break-all;word-warp:break-word;">环保-批复时间(至):</th>
    									 <td width="39%">
    									<input name="hbDateEnd" id="hbDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	

								 									</tr>
									<tr>
																						  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">环保-批复文号:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="环保-批复文号" name="hbNo"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">安全-验收时间:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="安全-验收时间" name="aqYsDate"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">安全-批复文件名称:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="安全-批复文件名称" name="aqName"/></td>
																								   							  						 						   																							  						  																<th width="10%" style="word-break:break-all;word-warp:break-word;">安全-批复时间(从):</th>
    									<td width="39%">
    									<input name="aqDateBegin" id="aqDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
																				 </tr>
										 <tr>
									        									<th width="10%" style="word-break:break-all;word-warp:break-word;">安全-批复时间(至):</th>
    									 <td width="39%">
    									<input name="aqDateEnd" id="aqDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	

								 														  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">安全-批复文号:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="安全-批复文号" name="aqNo"/></td>
																										</tr>
									<tr>
															   							  						 						   																																																																																									  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">创建部门:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="创建部门" name="createdDept"/></td>
																								   							  						 						   																																																																																																																																									</tr>
    				</table>
    				</form>
		 <div id="searchBtns" class="datagrid-toolbar foot-formopera" style="padding-bottom: 6px;">
			<table class="tableForm" border="0" cellspacing="1" width='100%'>
				<tr>
					<td align="right">
						<a class="easyui-linkbutton primary-btn" iconCls="" plain="false" onclick="pmProjectYsSts.searchData();" href="javascript:void(0);">查询</a>
						<a class="easyui-linkbutton" iconCls="" plain="false" onclick="pmProjectYsSts.clearData();" href="javascript:void(0);">清空</a>
						<a class="easyui-linkbutton" iconCls="" plain="false" onclick="pmProjectYsSts.hideSearchForm();" href="javascript:void(0);">返回</a>
					</td>
				</tr>
			</table>
		</div>
  </div>
  <div id="mask" data-options="closable: false,modal:true"></div>
  </body>
<script type="text/javascript">
	function bpm_operator_refresh() { pmProjectYsSts.reLoad(); } 
</script>
</html>