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
<!-- ControllerPath = "platform6/demo/createsingle/createSingleController/toCreateSingleManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_createSingle_button_add" permissionDes="添加">
  	<a id="createSingle_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
	</sec:accesscontrollist>
	<sec:accesscontrollist hasPermission="3" domainObject="formdialog_createSingle_button_edit" permissionDes="编辑">
	<a id="createSingle_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑" style="display:none;"><i class="fa fa-file-text-o"></i> 编辑</a>
	</sec:accesscontrollist>
	<sec:accesscontrollist hasPermission="3" domainObject="formdialog_createSingle_button_delete" permissionDes="删除">
	<a id="createSingle_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i> 删除</a>
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
     		<input type="text" name="createSingle_keyWord" id="createSingle_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="createSingle_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="createSingle_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="createSinglejqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		   <input type="hidden" id="bpmState" name="bpmState" value="all">
    	   <table class="form_commonTable">
			    <tr>
																						  						   							 							 						   						   						   																							  						   							 								<th width="10%">申请人:</th>
																			<td width="39%">
										<div class="input-group  input-group-sm">
										   	  <input type="hidden"  id="applyUserid" name="applyUserid">
										      <input class="form-control" placeholder="请选择用户" type="text" id="applyUseridAlias" name="applyUseridAlias" >
										      <span class="input-group-addon" >
										        <i class="glyphicon glyphicon-user"></i>
										      </span>
								    	</div>
										</td>
																								 						   						   						   																							  						   							 								<th width="10%">部门:</th>
																			 <td width="39%">
										<div class="input-group  input-group-sm">
									   	  <input type="hidden"  id="applyDeptid" name="applyDeptid">
									      <input class="form-control" placeholder="请选择部门" type="text" id="applyDeptidAlias" name="applyDeptidAlias" >
									      <span class="input-group-addon" >
									        <i class="glyphicon glyphicon-equalizer"></i>
									      </span>
								        </div>
										</td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 									<th width="10%">申请日期(从):</th>
    								   <td width="39%">
    									<div class="input-group input-group-sm">
											<input class="form-control date-picker" type="text" name="applyDateBegin" id="applyDateBegin" />
											<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
										</div>
    									</td>
										    									<th width="10%">申请日期(至):</th>
    									<td width="39%">
    									<div class="input-group input-group-sm">
											<input class="form-control date-picker" type="text" name="applyDateEnd" id="applyDateEnd" />
											<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
										</div>
    									</td>
    																	  </tr>
									  <tr>
								    													   						   						   																							  						   							 								<th width="10%">地点:</th>
										    								 <td width="39%">
	    								 <input title="地点" class="form-control input-sm" type="text" name="place" id="place" />
	    								 </td>
																								 						   						   						   																							  						   							 								<th width="10%">GUEST_NUM:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="guestNum" id="guestNum"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 									<th width="10%">接待日期(从):</th>
    								   <td width="39%">
    									<div class="input-group input-group-sm">
											<input class="form-control date-picker" type="text" name="receptionDateBegin" id="receptionDateBegin" />
											<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
										</div>
    									</td>
										    									<th width="10%">接待日期(至):</th>
    									<td width="39%">
    									<div class="input-group input-group-sm">
											<input class="form-control date-picker" type="text" name="receptionDateEnd" id="receptionDateEnd" />
											<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
										</div>
    									</td>
    																	  </tr>
									  <tr>
								    													   						   						   																							  						   							 									<th width="10%">接待时间(从):</th>
    									<td width="39%">
    									<div class="input-group input-group-sm">
							                <input class="form-control time-picker"  type="text" name="receptionTimeBegin" id="receptionTimeBegin"/><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
							            </div>
    									</td>
										    									<th width="10%">接待时间(至):</th>
    									<td width="39%">
    									<div class="input-group input-group-sm">
							                <input class="form-control time-picker"  type="text" name="receptionTimeEnd" id="receptionTimeEnd"/><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
							            </div>
    									</td>	

																	</tr>
									<tr>
																		
													   						   						   																							  						   							 								<th width="10%">香烟-软中华 数量:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="cigaretteRzh" id="cigaretteRzh"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																								 						   						   						   																							  						   							 								<th width="10%">香烟-硬中华 数量:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="cigaretteYzh" id="cigaretteYzh"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%">香烟-其他 数量:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="cigaretteQt" id="cigaretteQt"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																								 						   						   						   																							  						   							 								<th width="10%">接待要求 :</th>
										    								 <td width="39%">
	    								 <input title="接待要求 " class="form-control input-sm" type="text" name="cigaretteRequire" id="cigaretteRequire" />
	    								 </td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%">酒水-红酒 数量:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="wine" id="wine"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																								 						   						   						   																							  						   							 								<th width="10%">酒水-白酒 数量:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="liquor" id="liquor"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%">酒水-其他 数量:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="otherDrink" id="otherDrink"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																								 						   						   						   																							  						   							 								<th width="10%">用餐:</th>
										    								 <td width="39%">
	    								 <input title="用餐" class="form-control input-sm" type="text" name="dinner" id="dinner" />
	    								 </td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%">住宿费:</th>
																			<td width="39%">
																				    <div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="hotel" id="hotel"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>	
										  										</td>
																								 						   						   						   																							  						   							 								<th width="10%">其他:</th>
										    								 <td width="39%">
	    								 <input title="其他" class="form-control input-sm" type="text" name="remark" id="remark" />
	    								 </td>
																										</tr>
									<tr>
															 						   						   						   																							  						   							 								<th width="10%">部门类型:</th>
										    								 <td width="39%">
	    								 <input title="部门类型" class="form-control input-sm" type="text" name="deptType" id="deptType" />
	    								 </td>
																								 						   						   						   																							  						   							 								<th width="10%">满意度调查:</th>
										    								 <td width="39%">
	    								 <input title="满意度调查" class="form-control input-sm" type="text" name="satisfactionSurvey" id="satisfactionSurvey" />
	    								 </td>
																										</tr>
									<tr>
															 						   						   						   																																																																																									  						   							 								<th width="10%">DEPT_LEVEL:</th>
																			<td width="39%">
																				     												<div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="deptLevel" id="deptLevel"  data-min="-<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-max="<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
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
<script src="avicit/platform6/demo/createsingle/js/CreateSingle.js" type="text/javascript"></script>
<script type="text/javascript">
var createSingle;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="createSingle.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="createSingle.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//刷新本页面
window.bpm_operator_refresh = function(){
	createSingle.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
																{ label: 'id', name: 'id', key: true, width: 75, hidden:true }
																		  															,{ label: '申请人', name: 'applyUseridAlias', width: 150,formatter:formatValue}
																											  																		,{ label: '部门', name: 'applyDeptidAlias', width: 150}
																													  																		,{ label: '申请日期', name: 'applyDate', width: 150,formatter:format}
																													  																		,{ label: '地点', name: 'place', width: 150}
																													  																		,{ label: 'GUEST_NUM', name: 'guestNum', width: 150}
																													  																		,{ label: '接待日期', name: 'receptionDate', width: 150,formatter:format}
																													  																		,{ label: '接待时间', name: 'receptionTime', width: 150}
																													  																		,{ label: '香烟-软中华 数量', name: 'cigaretteRzh', width: 150}
																													  																		,{ label: '香烟-硬中华 数量', name: 'cigaretteYzh', width: 150}
																													  																		,{ label: '香烟-其他 数量', name: 'cigaretteQt', width: 150}
																													  																		,{ label: '接待要求 ', name: 'cigaretteRequire', width: 150}
																													  																		,{ label: '酒水-红酒 数量', name: 'wine', width: 150}
																													  																		,{ label: '酒水-白酒 数量', name: 'liquor', width: 150}
																													  																		,{ label: '酒水-其他 数量', name: 'otherDrink', width: 150}
																													  																		,{ label: '用餐', name: 'dinner', width: 150}
																													  																		,{ label: '住宿费', name: 'hotel', width: 150}
																													  																		,{ label: '其他', name: 'remark', width: 150}
																													  																		,{ label: '部门类型', name: 'deptType', width: 150}
																													  																		,{ label: '满意度调查', name: 'satisfactionSurvey', width: 150}
																																															  																		,{ label: 'DEPT_LEVEL', name: 'deptLevel', width: 150}
																																																									<sec:accesscontrollist hasPermission="3" domainObject="createSingle_table_activityalias" permissionDes="流程当前步骤">
				        ,{ label: '流程当前步骤', name: 'activityalias_', width: 150 }
				        </sec:accesscontrollist>
				        <sec:accesscontrollist hasPermission="3" domainObject="createSingle_table_businessstate" permissionDes="流程状态">
				        ,{ label: '流程状态', name: 'businessstate_', width: 150 }
				        </sec:accesscontrollist>
	];
	var searchNames = new Array();
	var searchTips = new Array();
						  		  							  		  							  		  							  							  		         searchNames.push("place");
    searchTips.push("地点");
		 	 		  							  							  							  							  							  							  							  		         searchNames.push("cigaretteRequire");
    searchTips.push("接待要求 ");
		 	 		  							  							  							  							  		     		  							  							  		     		  							  		     		  							  		     		  																									  																																		var searchC = searchTips.length==2?'或' + searchTips[1] : "";
	$('#createSingle_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	createSingle = new CreateSingle('createSinglejqGrid','${url}','searchDialog','form','createSingle_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#createSingle_insert').bind('click', function(){
		createSingle.insert();
	});
	//编辑按钮绑定事件
	$('#createSingle_modify').bind('click', function(){
		createSingle.modify();
	});
	//删除按钮绑定事件
	$('#createSingle_del').bind('click', function(){  
		createSingle.del();
	});
	//查询按钮绑定事件
	$('#createSingle_searchPart').bind('click', function(){
		createSingle.searchByKeyWord();
	});
	//打开高级查询框
	$('#createSingle_searchAll').bind('click', function(){
		createSingle.openSearchForm(this,800,400);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		createSingle.initWorkFlow($(this).val());
	});
																											$('#applyUseridAlias').on('focus',function(e){
						new H5CommonSelect({type:'userSelect', idFiled:'applyUserid',textFiled:'applyUseridAlias'});
						this.blur();
						nullInput(e);
					}); 
																								$('#applyDeptidAlias').on('focus',function(e){
						new H5CommonSelect({type:'deptSelect', idFiled:'applyDeptid',textFiled:'applyDeptidAlias'});
						this.blur();
						nullInput(e);
					});
																																																																																																																																																																																																																																																																																																																																																																																																																	
});

</script>
</html>