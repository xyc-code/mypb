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
        <script type="text/javascript" src="static/h5/echarts5.3.1/dist/echarts.min.js"></script>
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
</head>


  <body style="height: 100%; margin: 0">
        <div id="container" style="height:200px;width:100%"></div>

        

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
var myChart = echarts.init(dom);
var app = {};
var data1 = new Array();

var option;
myChart.showLoading();


avicAjax.ajax({
		 url:'${url}'+"getMyChart",
		 type : 'post',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){

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
				    		      name: '中国航发东安党委',
				    		      type: 'pie',
				    		      radius: '50%',
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
				    myChart.on('click',  function(param) {				      
				        layer.open({
				    	    type: 2,
				    		area: ['960px', '500px'],
				    	    title: '详情',
				    	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				            maxmin: false, //开启最大化最小化按钮
				    	    content: 'platform/avicit/pb/scoring/dynPoints/dynPointsController/toPb?partyId='+param.data.ID 
				    	});
				    });
				}else{
						if ($("#emptyRecords").html() == null) {
							$("#container").html('<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
								+ '<div style="width:120px; height:140px; padding-top:10%; clear:both; margin:0 auto ;">'
								+ '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
								+ '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
								+ '</div></div>');
						}
						$("#emptyRecords").show();
					
				 } 
		
			 }
		 }
	 });



        </script>
    </body>
</html>