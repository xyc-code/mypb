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

<script src="static/js/platform/component/fusionchar/js/FusionCharts.js" type="text/javascript"></script>
        <script type="text/javascript" src="static/h5/echarts5.3.1/dist/echarts.js"></script>
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>

</head>
	<body>
	 			<div id="partyMemberPie" ></div>

  
	                       <!--    <script type="text/javascript">	     
	      
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

        </script>   -->     
	           
	           
	           
	           
	           
	           
	           
	 
	</body>
<script type="text/javascript">
	$(function(){
		var chart = new FusionCharts("static/js/platform/component/fusionchar/js/Pie3D.swf", "123", "100%", "400", "0", "0");
		var strXML  = "<chart palette='2' caption='党员信息图' xAxisName='用户' yAxisName='台账显示数量 (单位：条)' baseFont='微软雅黑'  showValues='1'  baseFont='宋体' baseFontSize='14' decimals='0' formatNumberScale='0'>";
		avicAjax.ajax({
			 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getAllPartyMembersByPartyOrg",
			 type : 'post',
			 dataType : 'json',
			 success : function(r){
					debugger;
				 if (r.flag == "success"){
					debugger;
					if(r.records && r.records.length > 0){
						for (var i = 0; i < r.records.length; i++) {
							strXML += "	<set label='"+r.records[i].name+"' value='"+r.records[i].value+"' />" ;
						}
					 
				
					}
					strXML += "</chart>";
					chart.setDataXML(strXML);
					chart.render("partyMemberPie");
			
				 }else{
				  
					
				 } 
			 }
		 });

		
		
		
	
		
		});
	</script>
</html>