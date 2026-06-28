<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>选择项目</title>
<base href="<%=ViewUtil.getRequestPath(request) %>">
<jsp:include page="/avicit/platform6/bpmclient/bpm/ProcessCommonJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/component/common/BpmJsInclude.jsp"></jsp:include>
</head>

<script type="text/javascript">
var baseurl = '<%=request.getContextPath()%>';
$(function(){
	loadlist();
});
function formatDate(value,row,index){
	if(value){
		if($.browser.msie){
			if(typeof(value) == "number"){
				return new Date(value).format("yyyy-MM-dd");
			}else{
				var num = new Date((value).replace(new RegExp("-","gm"),"/")).getTime();
				return new Date(num).format("yyyy-MM-dd");
			}
		}else{
			return new Date(value).format("yyyy-MM-dd");
		}
	}
	return '';
}
var secretLevel = [];
function formatsecretLevel(value) {
	return Platform6.fn.lookup.formatLookupType(value,
			secretLevel);
}

function getSelectedResultDataJson(){
	return $('#WorkList').datagrid('getChecked');
}

function loadlist(){
	$(function(){
		var dataGridHeight = $(".easyui-layout").height();
		$('#WorkList').datagrid({
			url: 'platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/operation/getDynTaskChecklistsByPage',
			width: '100%',
		    nowrap: false,
		    striped: true,
		    autoRowHeight:false,
		    singleSelect:true,
		    checkOnSelect:true,
		    remoteSort : false,
			height: dataGridHeight,
			fitColumns: true,
			sortName: 'id',  //排序字段,当表格初始化时候的排序字段
			sortOrder: 'asc',    //定义排序顺序
			pagination:true,
			rownumbers:true,
			loadMsg:' 处理中，请稍候…',
			columns : [ [
			            {
							field : 'id',
							title : '',
							width : 15,
							checkbox : true
			            }, {
							field : 'listMainly',
							title : '主要方面',
							width : 25,
							align : 'left'
						}, {
							field : 'manifestIssueCont',
							title : '发现的问题',
							width : 15,
							align : 'left',
						},{
							
						}
						] ]
					});
			//设置分页控件   
			var p = $('#WorkList').datagrid('getPager');
			$(p).pagination({
				pageSize : 10,//每页显示的记录条数，默认为10
				pageList : [ 5, 10, 15 ],//可以设置每页记录条数的列表
				beforePageText : '第',//页数文本框前显示的汉字
				afterPageText : '页    共 {pages} 页',
				displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
			});
		});
	}
</script>
<body  class="easyui-layout" fit="true">
<div region="center" border="false" style="overflow: hidden;">
		<table id="WorkList"></table>
</div>
</body>
</html>