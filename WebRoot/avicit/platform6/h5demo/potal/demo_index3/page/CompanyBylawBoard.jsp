<%@page import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<%
String skinsValue =  (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN_TYPE);
if(StringUtils.isEmpty(skinsValue)){
	 skinsValue = "blue";
}
%>
<html>
<head>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>demo3</title>


<script src="static/js/platform/component/fusionchar/js/FusionCharts.js" type="text/javascript"></script>
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
</head>

	<script type="text/javascript">
		$(function(){
			var chart = new FusionCharts("static/js/platform/component/fusionchar/js/Pie3D.swf", "ChartId", "100%", "400", "1", "0");
			var strXML  = "<chart palette='2' caption='公司规章制度分类' xAxisName='用户' yAxisName='台账显示数量 (单位：条)' baseFont='微软雅黑'  showValues='1'  baseFont='宋体' baseFontSize='14' decimals='0' formatNumberScale='0'>";
			
			
					var rows = [{name:'测试',value:'100'}];
				for (var i = 0; i < rows.length; i++) {
					strXML += "<set label='测试' value='123' link=''/>" ;
				}
			
			strXML += "</chart>";
			chart.setDataXML(strXML);
			chart.render("BylawTypeClass");

		});
		//规章制度分类
		function getBylawTypeClassBack(json) {
			var chart = new FusionCharts("static/js/platform/component/fusionchar/js/Pie3D.swf", "ChartId", "100%", "400", "0", "0");
			var strXML  = "<chart palette='2' caption='公司规章制度分类' xAxisName='用户' yAxisName='台账显示数量 (单位：条)' baseFont='微软雅黑'  showValues='1'  baseFont='宋体' baseFontSize='14' decimals='0' formatNumberScale='0'>";
			if(json.rows != null){
				for (var i = 0; i < json.rows.length; i++) {
					strXML += "	<set label='"+json.rows[i].name+"' value='"+json.rows[i].value+"' link='JavaScript:openBylawTypeAns(\""+json.rows[i].id+"\")'/>" ;
				}
			}
			strXML += "</chart>";
			chart.setDataXML(strXML);
			chart.render("BylawTypeClass");
		}
		//编发部门分类
		function getDeptCalssBack(json) {
        	var chart = new FusionCharts("static/js/platform/component/fusionchar/js/Pie3D.swf", "ChartId", "100%", "400", "0", "0");
			var strXML  = "<chart palette='2' caption='公司規章编发部门' xAxisName='用户' yAxisName='台账显示数量(单位：条)' baseFont='微软雅黑'  showValues='1'  baseFont='宋体' baseFontSize='14' decimals='0' formatNumberScale='0'>";
			if(json.rows != null){
				for (var i = 0; i < json.rows.length; i++) {
					strXML += "	<set label='"+json.rows[i].name+"' value='"+json.rows[i].value+"' link='JavaScript:openWorkDeptAns(\""+json.rows[i].id+"\")'/>" ;
				}
			}
			strXML += "</chart>";
			chart.setDataXML(strXML);
			chart.render("DeptCalss");
		}
		//管理小类第一部分
		function getBylawTypeDetailClassP1Back(json) {
        	var chart = new FusionCharts("static/js/platform/component/fusionchar/js/Column2D.swf", "ChartId", "100%", "400", "0", "0");
			var strXML  = "<chart palette='2' caption='管理范围分类' xAxisName='' yAxisName='数量' baseFont='微软雅黑'  showValues='1' decimals='0' labelDisplay='ROTATE' slantLabels='1' baseFont='宋体' baseFontSize='14' formatNumberScale='0'>";
			if(json.rows != null){
				for (var i = 0; i < json.rows.length; i++) {
					strXML += "	<set label='"+json.rows[i].name+"' value='"+json.rows[i].value+"' link='JavaScript:openClassP1(\""+json.rows[i].id+"\")'/>" ;
				}
			}
			strXML += "</chart>";
			chart.setDataXML(strXML);
			chart.render("BylawTypeDetailClassP1");
		}
		//管理小类第二部分
		function getBylawTypeDetailClassP2Back(json) {
        	var chart = new FusionCharts("static/js/platform/component/fusionchar/js/Column2D.swf", "ChartId", "100%", "400", "0", "0");
			var strXML  = "<chart palette='2' caption='管理范围分类' xAxisName='' yAxisName='数量' baseFont='微软雅黑'  showValues='1' decimals='0' labelDisplay='ROTATE' slantLabels='1' baseFont='宋体' baseFontSize='14' formatNumberScale='0'>";
			if(json.rows != null){
				for (var i = 0; i < json.rows.length; i++) {
					strXML += "	<set label='"+json.rows[i].name+"' value='"+json.rows[i].value+"' link='JavaScript:openClassP2(\""+json.rows[i].id+"\")'/>" ;
				}
			}
			strXML += "</chart>";
			chart.setDataXML(strXML);
			chart.render("BylawTypeDetailClassP2");
		}
		//公司规章总数
		function getTotalBack(json) {
			document.getElementById("totalNum").innerHTML = "现行公司规章总数：" + json.totalNum + "条";
		}
		
		
		//查询
		function doQuery(tab){
		    var data = "querySign=top10";
		    //ajaxRequest("POST",data,"platform/ims/oa/bylawtree/bylawtrainclass/CompanyBylawBoardAction/get"+tab,"json","get"+tab+"Back");
		}
		
		//清空
		function doReset(id){
			$("#"+id+"SearchForm input").val('');
		}
		
		//规章制度分类
		function openBylawTypeAns(id) {
			var url  = getPath2()+"/avicit/ims/oa/bylawboard/companybylawboard/CompanyBylawBoardAnalysis.jsp";
			var title = "公司规章制度分类";
			url += "?title="+title+"&bylawType="+id;
			top.addTab(title,url,"static/images/platform/index/images/icons.gif","GroupBylawBoardBylawType"," -0px -120px");
		}
		//编发部门分类
		function openWorkDeptAns(id) {
			var url  = getPath2()+"/avicit/ims/oa/bylawboard/companybylawboard/CompanyBylawBoardAnalysis.jsp";
			var title = "编发部门分类";
			url += "?&title="+title+"&workDept="+id;
			top.addTab(title,url,"static/images/platform/index/images/icons.gif","GroupBylawBoardWorkDept"," -0px -120px");
		}
		//管理小类第一部分
		function openClassP1(id) {
			var url  = getPath2()+"/avicit/ims/oa/bylawboard/companybylawboard/CompanyBylawBoardAnalysis.jsp";
			var title = "管理规定明细1";
			url += "?title="+title+"&classP1="+id;
			top.addTab(title,url,"static/images/platform/index/images/icons.gif","GroupBylawBoardClassP1"," -0px -120px");
		}
		//管理小类第二部分
		function openClassP2(id) {
			var url  = getPath2()+"/avicit/ims/oa/bylawboard/companybylawboard/CompanyBylawBoardAnalysis.jsp";
			var title = "管理规定明细2";
			url += "?title="+title+"&classP2="+id;
			top.addTab(title,url,"static/images/platform/index/images/icons.gif","GroupBylawBoardClassP2"," -0px -120px");
		}
		
	</script>
	<body >
		<div >
			<font size = '3' id="totalNum"></font>
		</div>
		<div>
			<div id="BylawTypeClass"  style="width:60%; float:left;"></div>
			<div id="DeptCalss"  style="width:40%; float:left;"></div>
		</div>
		<div id="BylawTypeDetailClassP1" ></div>
		<div id="BylawTypeDetailClassP2" ></div>
	</body>
</html>