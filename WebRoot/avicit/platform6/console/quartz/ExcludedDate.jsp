<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String importlibs = "common,table";
%>
<!DOCTYPE html>
<html>
<head>
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout" data-options="fit:true">
	<div data-options="region:'west',split:true,width:fixwidth(.3),onResize:function(a){$('#sysJobExcludedCalendar').setGridWidth(a);$(window).trigger('resize');}" style="overflow-x:hidden;">
		<table id="sysJobExcludedCalendar"></table>
	</div>
	<div data-options="region:'center',onResize:function(a){$('#sysJobExcludedCalendarDate').setGridWidth(a);$(window).trigger('resize');}" style="overflow-x:hidden;" >
		<table id="sysJobExcludedCalendarDate"></table>
	</div>
</body>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/platform6/console/quartz/SysJobCalendar.js"
	type="text/javascript"></script>
<script
	src="avicit/platform6/console/quartz/SysJobCalendarDate.js"
	type="text/javascript"></script>
<script type="text/javascript">
    var pid;
    var jobCalendarIds= '<c:out value="${param.jobCalendarIds}"/>';
    var selectArr=[];
	if(jobCalendarIds!='null' && jobCalendarIds!='undefined'){
	    var arr = jobCalendarIds.split(',');
	    pid = arr[0];
	    selectArr = arr;
	}
	$(document).ready(function() {
			var JobExcludedCalendarModel = [ {
				label : 'id',
				name : 'id',
				key : true,
				width : 75,
			    hidden:true
			}, {
				label : '日历名称',
				name : 'name',
				width : 150,
				sortable : false
			}];
			var JobExcludedCalendarDateModel = [ {
				label : 'id',
				name : 'id',
				key : true,
				width : 75,
				hidden : true
			}, {
				label : '任务日历主键',
				name : 'jobCalendarId',
				width : 150,
				hidden : true
			}, {
				label : '排除的日期',
				name : 'excludedDate',
				width : 150,
				formatter:format,
				sortable : false
			}, {
				label : '描述',
				name : 'description',
				width : 150,
				sortable : false
			} ];
			$("#sysJobExcludedCalendar").jqGrid({
				url : 'platform/canledarzhuzi/sysjobcalendar/sysJobCalendarController/operation/getSysJobCalendarsByPage',
				mtype : 'POST',
				datatype : "json",
				colModel : JobExcludedCalendarModel,
				height : document.documentElement.clientHeight-35,
				scrollOffset : 10,
				rowNum : 20,
				rowList : [ 200, 100, 50, 30, 20, 10 ],
				altRows : true,
				userDataOnFooter : true,
				multiselect : true,
				pagerpos : 'left',
				styleUI : 'Bootstrap',
				viewrecords : true,
				multiboxonly : true,
				autowidth : true,
				shrinkToFit : true,
				responsive : true,
				onSelectRow : function(rowid) {
					var data = $(this).jqGrid('getRowData', rowid);
					pid = data.id;
					$("#sysJobExcludedCalendarDate").jqGrid('setGridParam', {
						datatype : 'json',
						postData : {pid:data.id}
					}).trigger("reloadGrid");
				},
				loadComplete:function(){
					$('#sysJobExcludedCalendar_name >span' ).remove();
					for(var i = 0; i < selectArr.length; i++){
				    	$(this).setSelection(selectArr[i]);
				    } 
				}
			});
			$("#sysJobExcludedCalendarDate").jqGrid({
				url : 'platform/canledarzhuzi/sysjobcalendar/sysJobCalendarController/operation/sub/getSysJobCalendarDate',
				postData : {
					pid : pid
				},
				mtype : 'POST',
				datatype : "json",
				colModel : JobExcludedCalendarDateModel,
				height : document.documentElement.clientHeight-35,//120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
				scrollOffset : 10, //设置垂直滚动条宽度
				rowNum : 20,
				multiselect : false,
				rownumbers:true,
				rowList : [ 200, 100, 50, 30, 20, 10 ],
				altRows : true,
				autowidth : true,
				pagerpos : 'left',
				styleUI : 'Bootstrap',
				viewrecords : true, //
				shrinkToFit : true,
				responsive : true//开启自适应
			});
	});
</script>
</html>