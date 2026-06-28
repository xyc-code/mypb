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
        }</style>
</head>
<body>
<div id="tableToolbar" class="toolbar">
		<div class="toolbar-left">
		
				<a style="display:none" id="ROll_select" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="已阅"><i class="fa fa-plus"></i>已阅</a>
		</div>		
	</div>
	<div id="djweekly" style="font-weight: 900;
    font-size: 25px;
    text-align: center;">
		周总结计划
		</div>
	<table id="weeklyjqGrid"></table>
	<div id="jqGridPager"></div>
</body>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js?v=${jsversion}"></script>
<script src="avicit/weekly/js/DynDistributeManage.js" type="text/javascript"></script>
<script type="text/javascript">
	
		var weekly;
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
							label : 'flowPathId',
							name : 'flowPathId',
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
							label : '周计划',
							name : 'lastWeekly',
							classes:"blue",
							width : 150
						}, {
							label : '月计划',
							classes:"blue",
							name : 'lastYeek',
							width : 150
						} ];
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
						$('#userIdAliasLeagueOrganMember').on('focus',function(e){
							new H5CommonSelect({type:'userSelect', idFiled:'userIdLeagueOrganMember',textFiled:'userIdAliasLeagueOrganMember'});
							this.blur();
							nullInput(e);
						}); 
						$("#ROll_select").on("click",function(){
							 var idrow =$("#weeklyjqGrid").jqGrid("getGridParam","selarrrow")							
							 weekly.del(idrow);					           	
							})
						$('#weekly_DI').on('click',function(e){										
							var id = $("#userIdLeagueOrganMember").val();
								if(id==''){
									layer.alert('请选择用户后进行操作', {
										  icon: 7,	
										  area: ['400px', ''], //宽高
										  closeBtn: 0,
										  btn: ['关闭'],
										  title:"提示"
										})	
										return
								}
								var rows=$("#weeklyjqGrid").jqGrid("getGridParam","selarrrow");
								if(rows.length==0){
									layer.alert('请选择流程后进行操作', {
										  icon: 7,
										  area: ['400px', ''], //宽高
										  closeBtn: 0,
										  btn: ['关闭'],
										  title:"提示"
										})
										return
								}
								$.ajax({
								    url:"platform/avicit/weekly/weeklyController/insertDynDistributeList?userid="+id+"&&rows="+rows,
								    dataType:"json",
								    type:"GET",
								    success: function (r) {
								    	if(r.bol==true){
								    		layer.alert('操作成功', {
												  icon: 7,
												  area: ['400px', ''], //宽高
												  closeBtn: 0,
												  btn: ['关闭'],
												  title:"提示"
												}) 	
												$("#weeklyjqGrid").jqGrid('setGridParam',{
													url:"platform/avicit/weekly/weeklyController/ryonMessage",
													page:$("#weeklyjqGrid").getGridParam("page"),
													rows:$("#weeklyjqGrid").getGridParam("rows"),
													sidx:$("#weeklyjqGrid").getGridParam("sidx"),
													sord:$("#weeklyjqGrid").getGridParam("sord")
												}).trigger("reloadGrid");
												
								    	}
								    }
								})
						 
						});
						




					});
</script>
</html>