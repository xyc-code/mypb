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
<!-- ControllerPath = "weekly/weeklyController/toWeeklyManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<style>
.blue{
            color: blue;
            text-decoration:underline;
        }
        .blue:hover{
            color: black;
            cursor: pointer;
        }
        .wi{
        width:100%;
        text-align:center;
        }
        
        </style>
</head>
<body>
	<div id="tableToolbar" class="toolbar">
		<div class="toolbar-left">
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_weekly_button_add" permissionDes="添加">
				<a style="display:none" id="weekly_insert" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="发起流程"><i class="fa fa-plus"></i> 发起流程</a>
			</sec:accesscontrollist>
				
		
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_weekly_button_add" permissionDes="添加">
				<a style="display:none" id="weekly_sysid" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="删除"><i class="fa fa-plus"></i>删除</a>
			</sec:accesscontrollist>
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_weekly_button_add" permissionDes="搜索周报">
				<a style="display:none" id="weekly_select" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="搜索周报"><i class="fa fa-plus"></i>搜索周报</a>
			</sec:accesscontrollist>
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_weekly_button_add" permissionDes="搜索周报">
				<a style="display:none" id="ROll_select" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="搜索周报"><i class="fa fa-plus"></i>搜索滚动计划</a>
			</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_weekly_button_add" permissionDes="添加">
				<a style="display:none" id="weekly_DI" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="分发流程"><i class="fa fa-plus"></i>分发流程</a>
			</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_weekly_button_add" permissionDes="修改权限">
				<a style="display:none" id="weekly_qu" style="display:none" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="修改权限"><i class="fa fa-plus"></i>修改权限</a>
			</sec:accesscontrollist>
			<td width="39%" style="display:none" >
					<div style="display:none;float:right;" id="posen" class="input-group  input-group-sm">
						<input type="hidden"  id="userIdLeagueOrganMember" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text" id="userIdAliasLeagueOrganMember" name="userIdAlias">
						<span style="width:100px;" class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				
		</div>		
	</div>
	<div id="djweekly" style="font-weight: 900;
    font-size: 25px;
    text-align: center;">
		纪检监察工作周报
		</div>
	<table id="weeklyjqGrid"></table>
	<div id="jqGridPager"></div>
</body>	
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js?v=${jsversion}"></script>
<script src="avicit/weekly/js/Weekly.js" type="text/javascript"></script>
<script type="text/javascript">
	
		var weekly;
		var sysid='${sysid}';
	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="weekly.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHref(cellvalue, options, rowObject) {
		var thisDate = format(cellvalue);
		return '<a href="javascript:void(0);" onclick="weekly.detail(\''
				+ rowObject.id + '\');">' + thisDate + '</a>';
	}
	$(document)
			.ready(
					
					function() {
						var dataGridColModel = [ {
							label : 'id',
							name : 'id',
							key : true,
							width : 75,
							hidden : true
						},{
							label:"lcid",
							name:"lcid",
							hidden:true
						}, {
							label : '申请部门',
							name : 'applicationDepartment',
							width : 150
						}, {
							label : '责任人',
							name : 'applicant',
							width : 150
						},   {
							label : '申请日期',
							name : 'applicationDate',
							width : 150
						}, {
							label : '周报',
							name : 'lastWeekly',
							classes:"blue",
							width : 150
						}, /* {
							label : '月计划',
							name : 'lastYeek',
							width : 150
						}, */{
							label:"状态",
							name:"businessstate",
							width:150
						},{
							label:"流程跟踪",
							width:150,
							classes:"glyphicon glyphicon-pencil wi",
							align:"centen"
						}];
						var searchNames = new Array();
						var searchTips = new Array();
						searchNames.push("workTasks");
						searchTips.push("工作任务");
						searchNames.push("fkSubColId");
						searchTips.push("外键");
						var searchC = searchTips.length == 2 ? '或'
								+ searchTips[1] : "";
						$('#weekly_keyWord').attr('placeholder',
								'请输入' + searchTips[0] + searchC);
						weekly = new Weekly('weeklyjqGrid', '${url}',
								'searchDialog', 'form', 'weekly_keyWord',
								searchNames, dataGridColModel);
																				
						$('#weekly_insert').bind('click', function() {
							weekly.insert();
						});
						if(sysid==1){
							$("#weekly_qu").css("display","inline-block")
							$("#weekly_qu").on("click",function(){
								layer.open({                                                                     
									type: 2,                                                                     
									area: ['100%', '100%'],                                                      
									title: '管理员分配权限',                                                                
									skin: 'bs-modal',                                                            
									maxmin: false,                                                               
									content: "platform/avicit/weekly/weeklyController/toDyntype"     
								}); 
							})
							dubiShow("${Type.weeklyDistributePosen}");
							serweekly();
							serrolln();	
							del();
							faqi();
							return
						}
						var dubid = "${Type.weeklyDistribute}";
						if(dubid!=null && dubid!=undefined && dubid!=""){
						 var dubidarr =	dubid.split(";");
						 for(var i=0;i<dubidarr.length;i++){
							 if(dubidarr[i]==sysid){										
									//分发流程
									dubiShow("${Type.weeklyDistributePosen}");
								} 
						 }							
						}else{
							dubiShow();	
						}
						
						
						var serweeklyid = "${Type.weeklySearch}";
						if(serweeklyid!=null && serweeklyid!=undefined && serweeklyid!=""){
							var serweeklyidarr = serweeklyid.split(";");
							for(var i=0;i<serweeklyidarr.length;i++){
								if(serweeklyidarr[i]==sysid){
									//搜索周报
									serweekly();
								}
							}
						}else{
							serweekly();
						}
						
						
						var weeklyPlanSearch = "${Type.weeklyPlanSearch}";	
						if(weeklyPlanSearch!=null && weeklyPlanSearch!=undefined && weeklyPlanSearch!=""){
							var weeklyPlanSearcharr = weeklyPlanSearch.split(";");
							for(var i=0;i<weeklyPlanSearcharr.length;i++){
								if(weeklyPlanSearcharr[i]==sysid){
									//搜索流动计划;
									serrolln();	
								}
							}
						}else{
							serrolln();	
						}
						
						var weeklyDelete = "${Type.weeklyDelete}";
						if(weeklyDelete!=null && weeklyDelete !=undefined && weeklyDelete!=""){
							var weeklyDeletearr = weeklyDelete.split(";");
							for(var i=0;i<weeklyDeletearr.length;i++){
								if(weeklyDeletearr[i]==sysid){
									//删除按钮
									del();
								}
							}
						}
									
						var weeklyProcess = "${Type.weeklyProcess}";					
						if(weeklyProcess!=null && weeklyProcess !=undefined && weeklyProcess!=""){
							var weeklyProcessarr = weeklyProcess.split(";");
							for(var i=0;i<weeklyProcessarr.length;i++){
								if(weeklyProcessarr[i]==sysid){
									//发起流程
									faqi();
								}
							}
						}
						
						
						



					});
</script>
</html>