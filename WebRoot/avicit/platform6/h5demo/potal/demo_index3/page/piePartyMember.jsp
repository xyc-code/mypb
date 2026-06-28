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




  
  
<script type="text/javascript">
var _bpm_baseurl = "<%=ViewUtil.getRequestPath(request)%>";
</script>
</head>
	<body>
	 <div id="container" style="height:100%;width:100%"></div>
	    <script type="text/javascript" src="static/h5/echarts5.3.1/dist/echarts.js"></script>

  
	                         <script type="text/javascript">	     
	      
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
	    title: {
	        text: '某站点用户访问来源',
	        subtext: '纯属虚构',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
	    },
	    series: [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: '55%',
	            center: ['50%', '60%'],
	            data: [
	                {value: 335, name: '直接访问'},
	                {value: 310, name: '邮件营销'},
	                {value: 234, name: '联盟广告'},
	                {value: 135, name: '视频广告'},
	                {value: 1548, name: '搜索引擎'}
	            ],
	            emphasis: {
	                itemStyle: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

        </script>        
	           
	           
	           
	           
	           
	           
	           
	 
	</body>

</html>