<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>请选择实体类</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<div class="toolbar-right">
		<div class="input-group form-tool-search" style="width: 220px;margin-left: 15px;" >
			<input type="text" name="searchDto_keyWord"
				   id="searchDto_keyWord" class="form-control input-sm" placeholder="请输入DTO名称"> <label
				id="searchDto_searchPart"
				class="icon icon-search form-tool-searchicon"></label>
		</div>
	</div>
	<table id="dtoNameJqGrid"></table>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script type="text/javascript">
	function selectRow(){
		var selectRow = $("#dtoNameJqGrid").jqGrid('getGridParam','selarrrow');
		if(selectRow.length != 1){
			layer.msg("请选择一条记录");
			return false;
		}
		return $("#dtoNameJqGrid").jqGrid('getRowData', selectRow[0]);
	}

	$(document) .ready(function() {
		var dataGridColModel = [{
			label : 'id',
			name : 'id',
			key : true,
			width : 75,
			hidden : true
		}, {
			label : 'DTO名称',
			name : 'dtoName',
			width : 200,
			align : "center",
			sortable : false
		}, {
			label : '表名称',
			name : 'dtoTableName',
			width : 100,
			align : "center",
			sortable : false
		}, {
			label : 'DTO描述',
			name : 'dtoDesc',
			width : 100,
			align : "center",
			sortable : false
		}];

		$('#dtoNameJqGrid').jqGrid({
			url : "platform6/msystem/excel/template/sysImpExcelTemplateController/operation/getDtoList",
			mtype : 'POST',
			datatype : "json",
			postData : {filterTablePrefix : parent.filterTablePrefix},
			colModel : dataGridColModel,
			height : $(window).height() - 70,
			scrollOffset : 20, //设置垂直滚动条宽度
			altRows : true,
			styleUI : 'Bootstrap',
			viewrecords : true,
			rowNum: 'all',//每页条数
			userDataOnFooter : true,
			multiselect : true,
			autowidth : true,
			shrinkToFit : true,
			responsive : true//开启自适应
		});
		$("#searchDto_searchPart").bind('click', function() {
			var keyWord = $("#searchDto_keyWord").val();

               if(keyWord=="请输入表名"){
                   keyWord='';
               }
			$('#dtoNameJqGrid').jqGrid('setGridParam', {
				datatype : 'json',
				postData : {
					'dtoName' : keyWord
				}
			}).trigger("reloadGrid");

		});
		$("#searchDto_keyWord").bind('keyup',function(e) {
			if (e.keyCode == 13) {
				var keyWord = $("#searchDto_keyWord").val();
				$('#dtoNameJqGrid').jqGrid('setGridParam', {
					datatype : 'json',
					postData : {
						'dtoName' : keyWord
					}
				}).trigger("reloadGrid");
			}
		});
	});
</script>
</html>