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

	   <title>首页</title>
<link id="portlet-skin" rel="stylesheet" href="./css/style.css">
       <script src="avicit/platform6/h5demo/potal/demo_index3/page/pie/piejs/echarts.min.js" type="text/javascript"></script>
	      <script src="avicit/platform6/h5demo/potal/demo_index3/page/pie/piejs/infographic2.js" type="text/javascript"></script>
		     <script src="avicit/platform6/h5demo/potal/demo_index3/page/pie/piejs/shine.js" type="text/javascript"></script>
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
	<link id="portlet-skin" rel="stylesheet" href="avicit/platform6/h5demo/potal/demo_index3/page/pie/css/style.css">
</head>

<body>

 
<div class="wrap">
     
     <div class="content">
        <div class="bt">
             <p>党员统计</p>
         
         </div>
         <div class="counter">
               <div id="container" style="height:200px;width:580px"></div>
         </div>  
    </div>
    
					
</div>
 <script type="text/javascript">
 $(function(){
	 var dom = document.getElementById("container");
var myChart = echarts.init(dom,"shine");
var app = {};
var data1 = new Array();

var option;
myChart.showLoading();


avicAjax.ajax({
		 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getAllPartyMembersByPartyOrg",
		 type : 'post',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){
					//debugger;
				 myChart.hideLoading();
		
				if(r.records && r.records.length > 0){
			
				 
				    myChart.setOption({
				    	  title: {
				    		  
				    		    left: 'center'
				    		  },
				    		  tooltip: {
				    		    trigger: 'item',
				    		    formatter:"{b} : {c} ({d}%)"
				    		  },
				    	
				    		  /*legend: {
				    			    orient: 'vertical',
				    			    left: 'left'
				    			  },*/
				    		  series: [
				    		    {
				    		      name: '中国航发XX党委',
				    		      type: 'pie',
				    		      radius: '50%',
								    center: ['50%', '60%'],
				    		      data:r.records,
				    		      emphasis: {
				    		        itemStyle: {
				    		          shadowBlur: 10,
				    		          shadowOffsetX: 0,
				    		          shadowColor: 'rgba(0, 0, 0, 0.5)'
				    		        }
				    		      },
				    		      itemStyle:{
				    		    	  normal:{
				    		    		  label:{
				    		    			  show:true,
				    		    			  formatter:"{b} : {c} ({d}%)"
				    		    		  },
				    		    		  labelLine:{
				    		    			  show:true
				    		    		  }
				    		    	  }
				    		      }
				    		    }
				    		  ]
				    		});
				}
		
			 }else{
			  
				
			 } 
		 }
	 });

	 
	 
	 
 });



        </script>
</body>
</html>
