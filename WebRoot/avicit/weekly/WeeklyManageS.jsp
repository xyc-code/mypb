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
				<a style="display:none"" id="weekly_sysid" href="javascript:void(0)"
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
<script src="avicit/weekly/js/WeeklyS.js" type="text/javascript"></script>
<script type="text/javascript">
	var weekly;
	var sysid='${sysid}';
	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="weekly.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHref(cellvalue, options, rowObject) {
		
		return '<a href="javascript:void(0);" onclick="weekly.detail(\''
				+ rowObject.id + '\');">11111 </a>';
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
						}/* , {
							label : '月计划',
							name : 'lastYeek',
							width : 150
						} */ ];
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
						$("#tableToolbar").append($("#tableToolbar"));
						
						
						if(sysid==1){
							$("#weekly_sysid").css("display","inline-block")
							$("#weekly_sysid").on("click",function(){
							 var idrow =$("#weeklyjqGrid").jqGrid("getGridParam","selarrrow")							
							 weekly.del(idrow);					           	
							})
							fabu();
							serweekly();
							searoll();
							return;
						}	
						
						
						var weeklyProcesssSon = "${Type.weeklyProcesssSon}";					
						if(weeklyProcesssSon!=null && weeklyProcesssSon !=undefined && weeklyProcesssSon!=""){
							var weeklyProcesssSonarr = weeklyProcesssSon.split(";");
							for(var i=0;i<weeklyProcesssSonarr.length;i++){
								if(weeklyProcesssSonarr[i]==sysid){
									//发起流程
									fabu();
								}
							}
						}
						
						
						var weeklySearchSon = "${Type.weeklySearchSon}";
						if(weeklySearchSon!=null && weeklySearchSon!=undefined && weeklySearchSon!=""){
							var weeklySearchSonarr = weeklySearchSon.split(";");
							for(var i=0;i<weeklySearchSonarr.length;i++){
								if(weeklySearchSonarr[i]==sysid){
									//搜索周报
									serweekly();
								}
							}
						}else{
							serweekly();
						}
						
						var weeklyPlanSearchSon = "${Type.weeklyPlanSearchSon}";
						if(weeklyPlanSearchSon!=null && weeklyPlanSearchSon!=undefined && weeklyPlanSearchSon!=""){
							var weeklyPlanSearchSonarr = weeklyPlanSearchSon.split(";");
							for(var i=0;i<weeklyPlanSearchSonarr.length;i++){
								if(weeklyPlanSearchSonarr[i]==sysid){
									//搜索周报
									searoll();
								}
							}
						}else{
							searoll();
						}
						var weeklyDeleteSon = "${Type.weeklyDeleteSon}";					
						if(weeklyDeleteSon!=null && weeklyDeleteSon !=undefined && weeklyDeleteSon!=""){
							var weeklyDeleteSonarr = weeklyDeleteSon.split(";");
							for(var i=0;i<weeklyDeleteSonarr.length;i++){
								if(weeklyDeleteSonarr[i]==sysid){
									//删除按钮
									$("#weekly_sysid").css("display","inline-block")
							       $("#weekly_sysid").on("click",function(){
							       var idrow =$("#weeklyjqGrid").jqGrid("getGridParam","selarrrow")							
							       weekly.del(idrow);					           	
							})
								}
							}
						}



					


					});
</script>
</html>