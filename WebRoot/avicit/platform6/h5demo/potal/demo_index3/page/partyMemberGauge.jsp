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

<title>demo3</title>
   <script src="avicit/platform6/h5demo/potal/demo_index3/page/piejs/echarts.min.js" type="text/javascript"></script>
	      <script src="avicit/platform6/h5demo/potal/demo_index3/page/piejs/infographic2.js" type="text/javascript"></script>
		     <script src="avicit/platform6/h5demo/potal/demo_index3/page/piejs/shine.js" type="text/javascript"></script>
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
</head>


  <body style="height:100%; margin: 0;width:100%">
        <div id="container" style="height:220%;width:90%"></div>

        

        <!-- Uncomment this line if you want to dataTool extension
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/extension/dataTool.min.js"></script>
        -->
        <!-- Uncomment this line if you want to use gl extension
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-gl@2/dist/echarts-gl.min.js"></script>
        -->
        <!-- Uncomment this line if you want to echarts-stat extension
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-stat@latest/dist/ecStat.min.js"></script>
        -->
        <!-- Uncomment this line if you want to use map
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/map/js/china.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/map/js/world.js"></script>
        -->
        <!-- Uncomment these two lines if you want to use bmap extension
        <script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=<Your Key Here>"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@{{version}}/dist/extension/bmap.min.js"></script>
        -->

        <script type="text/javascript">

var dom = document.getElementById("container");
var myChart = echarts.init(dom,"shine");
//myChart.showLoading();
var app = {};
var data1 = new Array();





option = {
		  tooltip: {
		    formatter: '{a} <br/>{b} : {c}%'
		  },
		  series: [
		    {
		      name: 'Pressure',
		      type: 'gauge',
		      progress: {
		        show: true
		      },
		      detail: {
		        valueAnimation: true,
		        formatter: '{value}',
		        fontSize: 12,
		      },
		      data: [
		        {
		          value: 50.5,
		       
		        }
		      ]
		    }
		  ]
		};
myChart.setOption(option);
//myChart.hideLoading();
window.onresize = function() {
	myChart.resize();
  };
        </script>
    </body>
</html>