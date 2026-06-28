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
<!-- ControllerPath = "jg/jgpaymentplan/jgPaymentPlanController/toJgPaymentPlanManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<script src="static/js/platform/component/sfn/SelfDefiningQuery.js" type="text/javascript"></script>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="avicit/jg/jgpaymentplan/js/JgPaymentPlan.js" type="text/javascript"></script>
	<script type="text/javascript">
		var jgPaymentPlan;
		$(function(){
						jgPaymentPlan= new JgPaymentPlan('dgJgPaymentPlan','${url}','searchDialog','jgPaymentPlan');
			jgPaymentPlan.init();
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
                                    name:'项目ID',
                                    field:'PROJECT_ID',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'下达批次',
                                    field:'PUBLISH_NO',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'下达文号',
                                    field:'PUBLISH_CODE',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                             var searchObject = 
                                {
                                    name:'下达日期',
                                    field:'PUBLISH_DATE',
                                    type:1,
                                    dataType:'datetime'};
                                     array.push(searchObject);
                                                                                                                                                                                             var searchObject = 
                                {
                                    name:'请款类型',
                                    field:'PAYMENT_TYPE',
                                    type:1,
                                    dictCode:'JG_PAYMENT_TYPE',
                                    dataType:'dict'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'请款年度',
                                    field:'PAYMENT_YEAR',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'请款月份',
                                    field:'PAYMENT_MONTH',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'中央预算内资金',
                                    field:'BUDGET_FUND',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'配套资金',
                                    field:'BUDGET_SPECIAL_FUND',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'银行贷款',
                                    field:'BANK_LOANS',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'自筹资金',
                                    field:'SELF_FUND',
                                    type:1,
                                    dataType:'number'};
                                     array.push(searchObject);
                                                                                                                                                                                              
                              var searchObject = 
                                {
                                    name:'状态(10编制中,20已提交)',
                                    field:'STATUS',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                             
                              var searchObject = 
                                {
                                    name:'备注',
                                    field:'REMARK',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                              var searchObject = 
                                {
                                    name:'创建人所属部门）',
                                    field:'CREATED_DEPT',
                                    type:1,
                                    dataType:'string'};
                                     array.push(searchObject);
                                                                                                                                           selfDefQury.init(array);
               selfDefQury.setQuery(function(param){
            	param.param=JSON.stringify({bpmState:"all",bpmType:"all"});
                jgPaymentPlan.searchDataBySfn(param);
            });
		});
		function formatDate(value,row,index){
			return jgPaymentPlan.format(value);
		}
		function formatDateTime(value,row,index){
			return jgPaymentPlan.formatDateTime(value);
		}
		function formatHref(value,row,inde){
			return '<a href="javascript:void(0);" onclick="jgPaymentPlan.detail(\''+row.id+'\');">'+value+'</a>';
		}
		
		function formatDateForHref(value,row,index){
		    var thisDate = jgPaymentPlan.format(value);
			return '<a href="javascript:void(0);" onclick="jgPaymentPlan.detail(\''+row.id+'\');">'+thisDate+'</a>';
		}
		function formatTimeForHref(value,row,index){
			var thisTime = jgPaymentPlan.formatDateTime(value);
			return '<a href="javascript:void(0);" onclick="jgPaymentPlan.detail(\''+row.id+'\');">'+thisTime+'</a>';
		}
		                                                                          function formatTyForHref(value,row,index){
                   var thisTongY = Platform6.fn.lookup.formatLookupType(value, jgPaymentPlan.secretLevel);
                   return  '<a href="javascript:void(0);" onclick="jgPaymentPlan.detail(\''+row.id+'\');">'+thisTongY+'</a>';
                 }
                                                                                                                                                    {
                  function formatpaymentType(value){
	                return Platform6.fn.lookup.formatLookupType(value, jgPaymentPlan.paymentType);
	              }
                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     document.ready = function () {
			document.body.style.visibility = 'visible';
		}
	</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center'" style="background:#ffffff;">
		<div id="toolbarJgPaymentPlan" class="datagrid-toolbar">
					 	<table>
		 		<tr>
		 		 		 		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_jgPaymentPlan_button_add" permissionDes="添加">
					<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="jgPaymentPlan.insert();" href="javascript:void(0);">添加</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_jgPaymentPlan_button_edit" permissionDes="编辑">
					<td><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="jgPaymentPlan.modify();" href="javascript:void(0);">编辑</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_jgPaymentPlan_button_delete" permissionDes="删除">
					<td><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="jgPaymentPlan.del();" href="javascript:void(0);">删除</a></td>
				</sec:accesscontrollist>
								<sec:accesscontrollist hasPermission="3" domainObject="formdialog_jgPaymentPlan_button_query" permissionDes="查询">	
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="jgPaymentPlan.openSearchForm();" href="javascript:void(0);">查询</a></td>
				</sec:accesscontrollist>		
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_jgPaymentPlan_button_seniorquery" permissionDes="高级查询">
					<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="selfDefQury.show();" href="javascript:void(0);">高级查询</a></td> 
				</sec:accesscontrollist>
				</tr>
		 	</table>
		 			 		 	</div>
	 	<table id="dgJgPaymentPlan"
			data-options="
				fit: true,
				border: false,
				rownumbers: true,
				animate: true,
				collapsible: false,
				fitColumns: true,
				autoRowHeight: false,
				toolbar:'#toolbarJgPaymentPlan',
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
																																		<th data-options="field:'id', halign:'center',checkbox:true" width="220">ID(主键)</th>
																																							  						  																					<th data-options="field:'secretLevel', halign:'center',formatter:formatTyForHref" width="220">密级</th>
																							  																																  																											<th data-options="field:'projectId', halign:'center'" width="220">项目ID</th>	
																		
																																															  																											<th data-options="field:'publishNo', halign:'center'" width="220">下达批次</th>	
																		
																																															  																											<th data-options="field:'publishCode', halign:'center'" width="220">下达文号</th>	
																		
																																															  																											<th data-options="field:'publishDate', halign:'center',formatter:formatDateTime" width="220">下达日期</th>
																																																								  																											<th data-options="field:'paymentType', halign:'center',formatter:formatpaymentType" width="220">请款类型</th>
																																																								  																											<th data-options="field:'paymentYear', halign:'center'" width="220">请款年度</th>	
																		
																																															  																											<th data-options="field:'paymentMonth', halign:'center'" width="220">请款月份</th>	
																		
																																															  																											<th data-options="field:'budgetFund', halign:'center'" width="220">中央预算内资金</th>	
																		
																																															  																											<th data-options="field:'budgetSpecialFund', halign:'center'" width="220">配套资金</th>	
																		
																																															  																											<th data-options="field:'bankLoans', halign:'center'" width="220">银行贷款</th>	
																		
																																															  																											<th data-options="field:'selfFund', halign:'center'" width="220">自筹资金</th>	
																		
																																															  																											<th data-options="field:'status', halign:'center'" width="220">状态(10编制中,20已提交)</th>	
																		
																																															  																											<th data-options="field:'remark', halign:'center'" width="220">备注</th>	
																		
																																																																																																																																																		  																											<th data-options="field:'createdDept', halign:'center'" width="220">创建人所属部门）</th>	
																		
																																											</tr>
			</thead>
		</table>
	</div>
		<!--*****************************搜索*********************************  -->
	   <div id="searchDialog" data-options="iconCls:'icon-search',resizable:true,modal:false,buttons:'#searchBtns'" style="width: 904px;height:340px;display:none;">
		<form id="jgPaymentPlan">
    		<table class="form_commonTable">
					<tr>
																						  						  										                							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">密级:</th>
																		 <td width="39%">
                                     <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                     </pt6:syslookup> 
                                     </td>
                                     															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">项目ID:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="projectId"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">下达批次:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="publishNo"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">下达文号:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="publishCode"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  																<th width="10%" style="word-break:break-all;word-warp:break-word;">下达日期(从):</th>
    									<td width="39%">
    									<input name="publishDateBegin" id="publishDateBegin" class="easyui-datetimebox" editable="false"  />
    									</td>
										    									<th width="10%" style="word-break:break-all;word-warp:break-word;">下达日期(至):</th>
    									 <td width="39%">
    									<input name="publishDateEnd" id="publishDateEnd" class="easyui-datetimebox" editable="false"  />
    									</td>	
								 									</tr>
									<tr>
																						  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">请款类型:</th>
																		 <td width="39%">
                                     <pt6:syslookup name="paymentType" id="paymentType" title="请款类型" isNull="true" lookupCode="JG_PAYMENT_TYPE" dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                     </pt6:syslookup> 
                                     </td>
                                     															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">请款年度:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="paymentYear"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">请款月份:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="paymentMonth"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">中央预算内资金:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="budgetFund"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">配套资金:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="budgetSpecialFund"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">银行贷款:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="bankLoans"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">自筹资金:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="selfFund"/></td>
																								   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">状态(10编制中,20已提交):</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="status"/></td>
																										</tr>
									<tr>
															   							  						 						   																							  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">备注:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="remark"/></td>
																								   							  						 						   																																																																																																																																																  						  															<th width="10%" style="word-break:break-all;word-warp:break-word;">创建人所属部门）:</th>
										    								 <td width="39%"><input class="easyui-validatebox"  style="width: 99%;" type="text" name="createdDept"/></td>
																										</tr>
									<tr>
															   							  						 						   																											</tr>
    			</table>
    		</form>
    	 <div id="searchBtns" class="datagrid-toolbar foot-formopera" style="padding-bottom: 6px;">
            <table class="tableForm" border="0" cellspacing="1" width='100%'>
                <tr>
                    <td align="right">
                        <a class="easyui-linkbutton primary-btn" iconCls="" plain="false" onclick="jgPaymentPlan.searchData();" href="javascript:void(0);">查询</a>
                        <a class="easyui-linkbutton" iconCls="" plain="false" onclick="jgPaymentPlan.clearData();" href="javascript:void(0);">清空</a>
                        <a class="easyui-linkbutton" iconCls="" plain="false" onclick="jgPaymentPlan.hideSearchForm();" href="javascript:void(0);">返回</a>
                    </td>
                </tr>
            </table>
        </div>
  </div>
  </body>
</html>