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
<!-- ControllerPath = "cape/pmprojectys/pmprojectyshpj/pmProjectYsHpjController/toPmProjectYsHpjManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<script src="static/js/platform/component/sfn/SelfDefiningQuery.js" type="text/javascript"></script>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="avicit/cape/pmprojectys/pmprojectyshpj/js/PmProjectYsHpj.js" type="text/javascript"></script>
	<script type="text/javascript">
		var pmProjectYsHpj;
		$(function(){
						pmProjectYsHpj= new PmProjectYsHpj('dgPmProjectYsHpj','${url}','searchDialog','pmProjectYsHpj');
			pmProjectYsHpj.init();
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
                                    name:'所属项目',
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
                                    name:'项目编号',
                                    field:'SUB_PROJECT_ID',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'项目编号',
                                    field:'SUB_PROJECT_CODE',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'设备名称',
                                    field:'SUB_PROJECT_NAME',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'规格',
                                    field:'PF_GG',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'型号',
                                    field:'PF_XG',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'主要性能指标',
                                    field:'PF_XNZB',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             var searchObject = 
                                {
                                    name:'类型',
                                    field:'PF_TYPE',
                                    type:1,
                                    dictCode:'JG_EQUIPMENT_FROM',
                                    dataType:'dict'};
                                     array.push(searchObject);
                                                                                                                                                                                            
                              var searchObject = 
                                {
                                    name:'数量',
                                    field:'PF_NUM',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'规格',
                                    field:'YS_GG',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'主要性能指标',
                                    field:'YS_XNZB',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'设备型号',
                                    field:'YS_XG',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'制造厂商',
                                    field:'YS_ZZCS',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                             var searchObject = 
                                {
                                    name:'出厂日期',
                                    field:'YS_CCRQ_DATE',
                                    type:1,
                                    dataType:'datetime'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'出厂编号',
                                    field:'YS_CCBH',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                             var searchObject = 
                                {
                                    name:'终验收日期',
                                    field:'YS_ZYS_DATE',
                                    type:1,
                                    dataType:'datetime'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                             var searchObject = 
                                {
                                    name:'到货时间',
                                    field:'YS_DH_DATE',
                                    type:1,
                                    dataType:'datetime'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'办理人',
                                    field:'YS_USER',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'使用单位',
                                    field:'YS_DEPT',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             var searchObject = 
                                {
                                    name:'验收结论',
                                    field:'YS_YSJL',
                                    type:1,
                                    dictCode:'JG_CHECK_RESULT',
                                    dataType:'dict'};
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
                                    name:'评价日期',
                                    field:'HPJ_DATE',
                                    type:1,
                                    dataType:'datetime'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'评价单位',
                                    field:'HPJ_DEPT',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'评价人',
                                    field:'HPJ_USER',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'应用效果',
                                    field:'HPJ_YYXG',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'实现价值',
                                    field:'HPJ_SXJZ',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'存在问题',
                                    field:'HPJ_CZWT',
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
            	param.param=JSON.stringify({bpmState:"all",bpmType:"all"});
                pmProjectYsHpj.searchDataBySfn(param);
            });
		});
		function formatDate(value,row,index){
			return pmProjectYsHpj.format(value);
		}
		function formatDateTime(value,row,index){
			return pmProjectYsHpj.formatDateTime(value);
		}
		function formatHref(value,row,inde){
			return '<a href="javascript:void(0);" onclick="pmProjectYsHpj.detail(\''+row.id+'\');">'+value+'</a>';
		}
		
		function formatDateForHref(value,row,index){
		    var thisDate = pmProjectYsHpj.format(value);
			return '<a href="javascript:void(0);" onclick="pmProjectYsHpj.detail(\''+row.id+'\');">'+thisDate+'</a>';
		}
		function formatTimeForHref(value,row,index){
			var thisTime = pmProjectYsHpj.formatDateTime(value);
			return '<a href="javascript:void(0);" onclick="pmProjectYsHpj.detail(\''+row.id+'\');">'+thisTime+'</a>';
		}
		                                                                          function formatTyForHref(value,row,index){
                   var thisTongY = Platform6.fn.lookup.formatLookupType(value, pmProjectYsHpj.secretLevel);
                   return  '<a href="javascript:void(0);" onclick="pmProjectYsHpj.detail(\''+row.id+'\');">'+thisTongY+'</a>';
                 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            document.ready = function () {
			document.body.style.visibility = 'visible';
		}
	</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center'" style="background:#ffffff;">
		<div id="toolbarPmProjectYsHpj" class="datagrid-toolbar">
					 	<table>
		 		<tr>
		 		 		 		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsHpj_button_add" permissionDes="添加">
					<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="pmProjectYsHpj.insert();" href="javascript:void(0);">添加</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsHpj_button_edit" permissionDes="编辑">
					<td><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="pmProjectYsHpj.modify();" href="javascript:void(0);">编辑</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsHpj_button_delete" permissionDes="删除">
					<td><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="pmProjectYsHpj.del();" href="javascript:void(0);">删除</a></td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsHpj_button_query" permissionDes="查询">	
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="pmProjectYsHpj.openSearchForm();" href="javascript:void(0);">查询</a></td>
				</sec:accesscontrollist>		
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_pmProjectYsHpj_button_seniorquery" permissionDes="高级查询">
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="selfDefQury.show();" href="javascript:void(0);">高级查询</a></td> 
				</sec:accesscontrollist>
				</tr>
		 	</table>
		 			 		 	</div>
	 	<table id="dgPmProjectYsHpj"
			data-options="
				fit: true,
				border: false,
				rownumbers: true,
				animate: true,
				collapsible: false,
				fitColumns: true,
				autoRowHeight: false,
				toolbar:'#toolbarPmProjectYsHpj',
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
																		
																																															  																											<th data-options="field:'projectName', halign:'center'" width="220">所属项目</th>	
																		
																																															  																											<th data-options="field:'taskId', halign:'center'" width="220">任务id</th>	
																		
																																															  																											<th data-options="field:'taskName', halign:'center'" width="220">任务名称</th>	
																		
																																															  																											<th data-options="field:'subProjectId', halign:'center'" width="220">项目编号</th>	
																		
																																															  																											<th data-options="field:'subProjectCode', halign:'center'" width="220">项目编号</th>	
																		
																																															  																											<th data-options="field:'subProjectName', halign:'center'" width="220">设备名称</th>	
																		
																																															  																	 										<th data-options="field:'pfGg',align:'center'" width="220">规格</th>		
																																																								  																											<th data-options="field:'pfXg', halign:'center'" width="220">型号</th>	
																		
																																															  																	 										<th data-options="field:'pfXnzb',align:'center'" width="220">主要性能指标</th>		
																																																								  																											<th data-options="field:'pfType',align:'center'" width="220">类型</th>		
																																																								  																											<th data-options="field:'pfNum', halign:'center'" width="220">数量</th>	
																		
																																															  																	 										<th data-options="field:'ysGg',align:'center'" width="220">规格</th>		
																																																								  																	 										<th data-options="field:'ysXnzb',align:'center'" width="220">主要性能指标</th>		
																																																								  																											<th data-options="field:'ysXg', halign:'center'" width="220">设备型号</th>	
																		
																																															  																											<th data-options="field:'ysZzcs', halign:'center'" width="220">制造厂商</th>	
																		
																																															  																											<th data-options="field:'ysCcrqDate', halign:'center',formatter:formatDateTime" width="220">出厂日期</th>
																																																								  																											<th data-options="field:'ysCcbh', halign:'center'" width="220">出厂编号</th>	
																		
																																															  																											<th data-options="field:'ysZysDate', halign:'center',formatter:formatDateTime" width="220">终验收日期</th>
																																																								  																											<th data-options="field:'ysDhDate', halign:'center',formatter:formatDateTime" width="220">到货时间</th>
																																																								  																											<th data-options="field:'ysUser', halign:'center'" width="220">办理人</th>	
																		
																																															  																											<th data-options="field:'ysDept', halign:'center'" width="220">使用单位</th>	
																		
																																															  																											<th data-options="field:'ysYsjl',align:'center'" width="220">验收结论</th>		
																																																								  																											<th data-options="field:'ysIdea', halign:'center'" width="220">验收意见</th>	
																		
																																															  																											<th data-options="field:'hpjDate', halign:'center',formatter:formatDateTime" width="220">评价日期</th>
																																																								  																											<th data-options="field:'hpjDept', halign:'center'" width="220">评价单位</th>	
																		
																																															  																											<th data-options="field:'hpjUser', halign:'center'" width="220">评价人</th>	
																		
																																															  																	 										<th data-options="field:'hpjYyxg',align:'center'" width="220">应用效果</th>		
																																																								  																	 										<th data-options="field:'hpjSxjz',align:'center'" width="220">实现价值</th>		
																																																								  																	 										<th data-options="field:'hpjCzwt',align:'center'" width="220">存在问题</th>		
																																																																																																														  																											<th data-options="field:'createdDept', halign:'center'" width="220">创建部门</th>	
																		
																																																																																																																																					</tr>
			</thead>
		</table>
	</div>
		<!--*****************************搜索*********************************  -->
	   <div id="searchDialog" data-options="iconCls:'icon-search',resizable:true,modal:false,buttons:'#searchBtns'" style="width: 904px;height:340px;display:none;">
		<form id="pmProjectYsHpj">
    		<table class="form_commonTable">
					<tr>
																						  						  						 						   										                																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">密级:</th>
																		 <td width="15%">
                                     <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                     </pt6:syslookup> 
                                     </td>
                                     															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">项目id:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="projectId"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">所属项目:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="projectName"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">任务id:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="taskId"/></td>
																										</tr>
									<tr>
															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">任务名称:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="taskName"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">项目编号:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="subProjectId"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">项目编号:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="subProjectCode"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">设备名称:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="subProjectName"/></td>
																										</tr>
									<tr>
															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">规格:</th>
															                     <td width="15%">
						                     <textarea title="规格" name="pfGg" id="pfGg" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">型号:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="pfXg"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">主要性能指标:</th>
															                     <td width="15%">
						                     <textarea title="主要性能指标" name="pfXnzb" id="pfXnzb" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">类型:</th>
															               <td width="15%">
						                <pt6:JigsawRadio name="pfType" title="类型" canUse="0" lookupCode="JG_EQUIPMENT_FROM" />                            
						               </td>
						             																	</tr>
									<tr>
															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">数量:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="pfNum"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">规格:</th>
															                     <td width="15%">
						                     <textarea title="规格" name="ysGg" id="ysGg" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">主要性能指标:</th>
															                     <td width="15%">
						                     <textarea title="主要性能指标" name="ysXnzb" id="ysXnzb" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">设备型号:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="ysXg"/></td>
																										</tr>
									<tr>
															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">制造厂商:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="ysZzcs"/></td>
																								   																														  						  						 						   																<th width="10%" style="word-break:break-all;word-warp:break-word;">出厂日期(从):</th>
    									<td width="15%">
    									<input name="ysCcrqDateBegin" id="ysCcrqDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
										    									<th width="10%" style="word-break:break-all;word-warp:break-word;">出厂日期(至):</th>
    									 <td width="15%">
    									<input name="ysCcrqDateEnd" id="ysCcrqDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	
								 																																					  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">出厂编号:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="ysCcbh"/></td>
																										</tr>
									<tr>
															   																														  						  						 						   																<th width="10%" style="word-break:break-all;word-warp:break-word;">终验收日期(从):</th>
    									<td width="15%">
    									<input name="ysZysDateBegin" id="ysZysDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
										    									<th width="10%" style="word-break:break-all;word-warp:break-word;">终验收日期(至):</th>
    									 <td width="15%">
    									<input name="ysZysDateEnd" id="ysZysDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	
								 																																					  						  						 						   																<th width="10%" style="word-break:break-all;word-warp:break-word;">到货时间(从):</th>
    									<td width="15%">
    									<input name="ysDhDateBegin" id="ysDhDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
										    									<th width="10%" style="word-break:break-all;word-warp:break-word;">到货时间(至):</th>
    									 <td width="15%">
    									<input name="ysDhDateEnd" id="ysDhDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	
								 									</tr>
									<tr>
																																													  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">办理人:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="ysUser"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">使用单位:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="ysDept"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">验收结论:</th>
															               <td width="15%">
						                <pt6:JigsawRadio name="ysYsjl" title="验收结论" canUse="0" lookupCode="JG_CHECK_RESULT" />                            
						               </td>
						             															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">验收意见:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="ysIdea"/></td>
																										</tr>
									<tr>
															   																														  						  						 						   																<th width="10%" style="word-break:break-all;word-warp:break-word;">评价日期(从):</th>
    									<td width="15%">
    									<input name="hpjDateBegin" id="hpjDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
										    									<th width="10%" style="word-break:break-all;word-warp:break-word;">评价日期(至):</th>
    									 <td width="15%">
    									<input name="hpjDateEnd" id="hpjDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	
								 																																					  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">评价单位:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="hpjDept"/></td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">评价人:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="hpjUser"/></td>
																										</tr>
									<tr>
															   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">应用效果:</th>
															                     <td width="15%">
						                     <textarea title="应用效果" name="hpjYyxg" id="hpjYyxg" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">实现价值:</th>
															                     <td width="15%">
						                     <textarea title="实现价值" name="hpjSxjz" id="hpjSxjz" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																														  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">存在问题:</th>
															                     <td width="15%">
						                     <textarea title="存在问题" name="hpjCzwt" id="hpjCzwt" class="textareabox" style="width: 99%;"></textarea>
						                    </td>
																								   																																																																																																  						  						 						   															<th width="10%" style="word-break:break-all;word-warp:break-word;">创建部门:</th>
										    								 <td width="15%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="createdDept"/></td>
																										</tr>
									<tr>
															   																																																																																																																																																</tr>
    			</table>
    		</form>
    	 <div id="searchBtns" class="datagrid-toolbar foot-formopera" style="padding-bottom: 6px;">
            <table class="tableForm" border="0" cellspacing="1" width='100%'>
                <tr>
                    <td align="right">
                        <a class="easyui-linkbutton primary-btn" iconCls="" plain="false" onclick="pmProjectYsHpj.searchData();" href="javascript:void(0);">查询</a>
                        <a class="easyui-linkbutton" iconCls="" plain="false" onclick="pmProjectYsHpj.clearData();" href="javascript:void(0);">清空</a>
                        <a class="easyui-linkbutton" iconCls="" plain="false" onclick="pmProjectYsHpj.hideSearchForm();" href="javascript:void(0);">返回</a>
                    </td>
                </tr>
            </table>
        </div>
  </div>
  </body>
</html>