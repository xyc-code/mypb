<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "cape/pmprojectys/pmprojectysda/pmProjectYsDaController/toPmProjectYsDaManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/BpmJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="avicit/cape/pmprojectys/pmprojectysda/js/PmProjectYsDa.js" type="text/javascript"></script>
<script src="static/js/platform/component/sfn/SelfDefiningQuery.js" type="text/javascript"></script>
<script type="text/javascript">
		var pmProjectYsDa;
		$(function(){
						pmProjectYsDa= new PmProjectYsDa('dgPmProjectYsDa','${url}','searchDialog','pmProjectYsDa');
			pmProjectYsDa.init();
																																																																																																																																																																																																																																																																																																																																																																																																																																						    
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
								name:'验收时间',
								field:'YS_DATE',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'批复文件名称',
								field:'PF_FILE_NAME',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							 var searchObject = 
							{
								name:'批复时间',
								field:'PF_DATE',
								type:1,
								dataType:'datetime'};
								 array.push(searchObject);
						 																																	  var searchObject = 
							{
								name:'批复文号',
								field:'PF_NO',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'参与单位',
								field:'COMP_DEPT',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'参与人员',
								field:'COMP_USER',
								type:1,
								dataType:'string'};
								 array.push(searchObject);
																																							  var searchObject = 
							{
								name:'验收意见',
								field:'YS_IDEA',
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
			pmProjectYsDa.searchDataBySfn(param);
			});
		function formatDate(value,row,index){
			return pmProjectYsDa.format(value);
		}
		function formatDateTime(value,row,index){
			return pmProjectYsDa.formatDateTime(value);
		}
		
		function formatDateForHref(value,row,index){
		    var thisDate = pmProjectYsDa.format(value);
			return "<a href='javascript:void(0);' onclick='pmProjectYsDa.detail(\""+row.id+"\",\""+thisDate+"\");'>"+thisDate+"</a>";
		}
		function formatTimeForHref(value,row,index){
			var thisTime = pmProjectYsDa.formatDateTime(value);
			return "<a href='javascript:void(0);' onclick='pmProjectYsDa.detail(\""+row.id+"\",\""+thisTime+"\");'>"+thisTime+"</a>";
		}
		
		function formatHref(value,row,inde){
			return "<a href='javascript:void(0);' onclick='pmProjectYsDa.detail(\""+row.id+"\",\""+value+"\");'>"+value+"</a>";
		}
							 					 			  		       function formatTyForHref(value,row,index){
		          var thisTongY = Platform6.fn.lookup.formatLookupType(value, pmProjectYsDa.secretLevel);
			      return "<a href='javascript:void(0);' onclick='pmProjectYsDa.detail(\""+row.id+"\",\""+thisTongY+"\");'>"+thisTongY+"</a>";
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
		<div id="toolbarPmProjectYsDa" class="datagrid-toolbar">
		    		 	<table>
		 		<tr>
		 		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_bpmAll" permissionDes="全部文件">
					<td width="120px;">
						<a href="javascript:void(0);" id="allMenu" name="bpm_all_menu" class='easyui-menubutton' data-options="menu:'#allmm',iconCls:'icon-all-file'">全部文件</a>
						<div id="allmm" style="width:105px;">
							<div id='all_start' name="bpm_all_start" onclick="pmProjectYsDa.initWorkFlow('start','all')">拟稿中</div>
							<div id='all_active' name="bpm_all_active" onclick="pmProjectYsDa.initWorkFlow('active','all')">流转中</div>
							<div id='all_ended' name="bpm_all_ended" onclick="pmProjectYsDa.initWorkFlow('ended','all')">已完成</div>
							<div id='all_all' name="bpm_all_all" onclick="pmProjectYsDa.initWorkFlow('all','all')">全部文件</div>
						</div>
					</td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_bpmMyFile" permissionDes="我的文件">
					<td width="120px;">
						<a href="javascript:void(0);" id="myMenu" name="bpm_my_menu" class='easyui-menubutton' data-options="menu:'#mymm',iconCls:'icon-my-file'">我的文件</a>
						<div id="mymm" style="width:105px;">
							<div id='my_start' name="bpm_my_start"  onclick="pmProjectYsDa.initWorkFlow('start','my')">我的拟稿</div>
							<div id='my_active' name="bpm_my_active" onclick="pmProjectYsDa.initWorkFlow('active','my')">我的流转</div>
							<div id='my_ended' name="bpm_my_ended" onclick="pmProjectYsDa.initWorkFlow('ended','my')">我的完成</div>
							<div id='my_all' name="bpm_my_all" onclick="pmProjectYsDa.initWorkFlow('all','my')">我的全部</div>
						</div>
					</td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_add" permissionDes="添加">
					<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="pmProjectYsDa.insert();" href="javascript:void(0);">添加</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_edit" permissionDes="编辑">
					<td id="tool_edit_td"><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="pmProjectYsDa.modify();" href="javascript:void(0);">编辑</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_delete" permissionDes="删除">
					<td id="tool_del_td"><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="pmProjectYsDa.del();" href="javascript:void(0);">删除</a></td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_query" permissionDes="查询">
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="pmProjectYsDa.openSearchForm();" href="javascript:void(0);">查询</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsDa_button_seniorquery" permissionDes="高级查询">
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="selfDefQury.show();" href="javascript:void(0);">高级查询</a></td> 
				</sec:accesscontrollist>		
				</tr>
		 	</table>
		 			 		 	</div>
	 	<table id="dgPmProjectYsDa"
			data-options="
				fit: true,
				border: false,
				rownumbers: true,
				animate: true,
				collapsible: false,
				fitColumns: true,
				autoRowHeight: false,
				toolbar:'#toolbarPmProjectYsDa',
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
																		
																																																																											<th data-options="field:'ysDate', halign:'center'" width="220">验收时间</th>
																		
																																																																											<th data-options="field:'pfFileName', halign:'center'" width="220">批复文件名称</th>
																		
																																																																											<th data-options="field:'pfDate', halign:'center',formatter:formatDateTime" width="220">批复时间</th>
																		
																																																																											<th data-options="field:'pfNo', halign:'center'" width="220">批复文号</th>
																		
																																																																											<th data-options="field:'compDept', halign:'center'" width="220">参与单位</th>
																		
																																																																											<th data-options="field:'compUser', halign:'center'" width="220">参与人员</th>
																		
																																																																	 										<th data-options="field:'ysIdea',align:'center'" width="220">验收意见</th>		
																		
																																																																																																																																	<th data-options="field:'createdDept', halign:'center'" width="220">创建部门</th>
																		
																																																																																																																																						<th data-options="field:'activityalias_', halign:'center'" width="220px">流程当前步骤</th>
					<th data-options="field:'businessstate_', halign:'center'" width="220px">流程状态</th>
				</tr>
			</thead>
		</table>
	</div>
		<!--*****************************搜索*********************************  -->
	   <div id="searchDialog" data-options="iconCls:'icon-search',resizable:true,modal:false,buttons:'#searchBtns'" style="width: 904px;height:340px;display:none;">
		<form id="pmProjectYsDa">
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
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">验收时间:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="验收时间" name="ysDate"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">批复文件名称:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="批复文件名称" name="pfFileName"/></td>
																								   							  						 						   																							  						  																<th width="10%" style="word-break:break-all;word-warp:break-word;">批复时间(从):</th>
    									<td width="39%">
    									<input name="pfDateBegin" id="pfDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
																				 </tr>
										 <tr>
									        									<th width="10%" style="word-break:break-all;word-warp:break-word;">批复时间(至):</th>
    									 <td width="39%">
    									<input name="pfDateEnd" id="pfDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	

								 														  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">批复文号:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="批复文号" name="pfNo"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">参与单位:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="参与单位" name="compDept"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">参与人员:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="参与人员" name="compUser"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">验收意见:</th>
															               <td width="39%">
						                  <textarea title="ysIdea" name="ysIdea" id="ysIdea" class="textareabox" style="width: 99%;"></textarea>
						               </td>
																								   							  						 						   																																																																																									  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">创建部门:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text"  title="创建部门" name="createdDept"/></td>
																										</tr>
									<tr>
															   							  						 						   																																																																																																																																									</tr>
    				</table>
    				</form>
		 <div id="searchBtns" class="datagrid-toolbar foot-formopera" style="padding-bottom: 6px;">
			<table class="tableForm" border="0" cellspacing="1" width='100%'>
				<tr>
					<td align="right">
						<a class="easyui-linkbutton primary-btn" iconCls="" plain="false" onclick="pmProjectYsDa.searchData();" href="javascript:void(0);">查询</a>
						<a class="easyui-linkbutton" iconCls="" plain="false" onclick="pmProjectYsDa.clearData();" href="javascript:void(0);">清空</a>
						<a class="easyui-linkbutton" iconCls="" plain="false" onclick="pmProjectYsDa.hideSearchForm();" href="javascript:void(0);">返回</a>
					</td>
				</tr>
			</table>
		</div>
  </div>
  <div id="mask" data-options="closable: false,modal:true"></div>
  </body>
<script type="text/javascript">
	function bpm_operator_refresh() { pmProjectYsDa.reLoad(); } 
</script>
</html>