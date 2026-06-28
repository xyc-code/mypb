<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
<table id="dynThreeFourjqGrid"></table>
<div id="jqGridPager"></div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		var PARTY_NAME = '${PARTY_NAME}';
		function getYear() {
			return parent.document.getElementById("year").value.replace('年','');
		}
		function numberFormat(value,opt,item){
			if(!value){
				return "0"
			}
			return value;
		}
		$("#dynThreeFourjqGrid").jqGrid({
			url: 'avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController/threeContent.json',
			mtype: 'POST',
			datatype: "json",
			toolbar: [true,'top'],
			colModel: [
				{ label : '工作内容', name : 'meet_zj',  width: 300, align: 'center'},
				{ label : '党委会', name : 'DWH',formatter:numberFormat,  width: 150, align: 'center'},
				{ label : '总支委员会', name : 'ZZWYH',formatter:numberFormat,  width: 150, align: 'center'},
				{ label : '支部委员会', name : 'ZBWYH', formatter:numberFormat, width: 150, align: 'center'},
				{ label : '党员大会', name : 'DYDH',formatter:numberFormat,  width: 150, align: 'center'},
				{ label : '党小组会', name : 'DXZH', formatter:numberFormat,  width: 150, align: 'center'},
				{ label : '纪律检查委员会', name : 'JLJCWYH',formatter:numberFormat,   width: 150, align: 'center'},
				{ label : '党课', name : 'DK',  width: 150, formatter:numberFormat,align: 'center'},
			],
			height:$(window).height()-120,
			width:$(window).width(),
			scrollOffset: 5, //设置垂直滚动条宽度
			rowNum: 10000	,
			// rowList:[200,100,50,30,20,10],
			rownumbers: true,//增加序号
			rownumWidth:50,//设置序号的宽度
			altRows:true,
			userDataOnFooter: true,
			pagerpos:'left',
			hasColSet: true,//设置显隐属性
			loadComplete:function(){
				$(this).jqGrid('getColumnByUserIdAndTableName');
				var rowNum = $("#dynThreeFourjqGrid").jqGrid('getGridParam', 'records');
				if (rowNum < 1) {
					if ($("#emptyRecords").html() == null) {
						$("#dynThreeFourjqGrid").parent().append('<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
								+ '<div style="width:120px; height:140px; padding-top:10%; clear:both; margin:0 auto ;">'
								+ '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
								+ '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
								+ '</div></div>');
					}
					$("#emptyRecords").show();
				} else {
					$("#emptyRecords").hide();
				}
			},
			styleUI : 'Bootstrap',
			viewrecords: true,
			multiselect: true,
			multiboxonly: true,
			autowidth: true,
			shrinkToFit: true,
			responsive:true,//开启自适应
			pager: "#jqGridPager",
			postData:{PARTY_NAME:"PARTY_NAME like '%"+PARTY_NAME+"%'",year:getYear()},
		});
		$("#t_dynThreeFourjqGrid").append($("#tableToolbar"));
	</script>
</body>
</html>

