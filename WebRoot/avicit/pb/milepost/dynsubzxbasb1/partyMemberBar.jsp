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
       <!-- 不支持ie8 -->
         <!-- <script type="text/javascript" src="static/h5/echarts5.3.1/dist/echarts.min.js"></script>  -->
         <!-- 支持ie8 -->
        <script type="text/javascript" src="static/h5/echarts/dist/echarts-4.1.2.js"></script>
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
</head>


  <body style="height: 100%; margin: 0">
  <div style="text-align: center;">
  <h3>"铸心"青年突击队备案情况</h3>
 <!--  <div id="containerPd">当前已结束流程总数：<span style="color:rgb(115 100 220 / 80%)">人</span></div> -->
  <div id="container" style="height:300px;width:1390px;margin: 0 auto;"></div>
  </div>
  <div style="text-align: center;">
  <h3>优秀"铸心"突击队评选情况</h3>
  <!-- <div id="containerPd1">当前已结束流程总数：<span style="color:rgb(115 100 220 / 80%)">1人</span></div> -->
  <div id="container2" style="height:300px;width:1390px;margin: 0 auto;"></div>
  </div>
  <div style="text-align: center;">
  <h3>"五小"成果申报情况</h3>
 <!--  <div id="containerPd2">当前已结束流程总数：<span style="color:rgb(115 100 220 / 80%)">1人</span></div> -->
  <div id="container3" style="height:300px;width:1390px;margin: 0 auto;"></div>
  </div>
        

        

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
        var set = [];
        var setSize=[];
        $.ajax({
        	url:"platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/operation/getPartyData?data=0",
        	dataType:"JSON",
        	type:"GET",
        	async:false,
        	success:function(e){
        		var data = e.data.result;
        		var bol = true;
        		 for(var i =0;i<data.length;i++){
        			 bol = true;
        			 for(var j=0;j<set.length;j++){
        				 if(set[j] == data[i].createdDept){
        					 setSize[j]++;
        					 bol =false;
        				 }
        			 }
        			 if(bol){
        				 setSize.push(1);
        				 set.push(data[i].createdDept);
        			 }
        		 }
        		
        		/* $("#containerPd span").text(e.data.result.length+"人"); */
        		
        	}
        })
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            xAxis: {
                type: 'category',
                data: set
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: setSize,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }



        </script>
        <script type="text/javascript">
           var set = [];
           var setSize=[];
           $.ajax({
           	url:"platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/operation/getPartyData?data=1",
           	dataType:"JSON",
           	type:"GET",
           	async:false,
           	success:function(e){
           		var data = e.data.result;
           		var bol = true;
           		 for(var i =0;i<data.length;i++){
           			 bol = true;
           			 for(var j=0;j<set.length;j++){
           				 if(set[j] == data[i].createdDept){
           					 setSize[j]++;
           					 bol =false;
           				 }
           			 }
           			 if(bol){
           				 setSize.push(1);
           				 set.push(data[i].createdDept);
           			 }
           		 }
           		
           		/* $("#containerPd1 span").text(e.data.result.length+"人"); */
           		
           	}
           })
 
        var dom = document.getElementById("container2");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            xAxis: {
                type: 'category',
                data: set
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: setSize,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }



        </script>
           <script type="text/javascript">
           var set = [];
           var setSize=[];
           $.ajax({
           	url:"platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/operation/getPartyData?data=2",
           	dataType:"JSON",
           	type:"GET",
           	async:false,
           	success:function(e){
           		var data = e.data.result;
           		var bol = true;
           		 for(var i =0;i<data.length;i++){
           			 bol = true;
           			 for(var j=0;j<set.length;j++){
           				 if(set[j] == data[i].createdDept){
           					 setSize[j]++;
           					 bol =false;
           				 }
           			 }
           			 if(bol){
           				 setSize.push(1);
           				 set.push(data[i].createdDept);
           			 }
           		 }
           		
           		/* $("#containerPd2 span").text(e.data.result.length+"人");
           		 */
           	}
           })
        var dom = document.getElementById("container3");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            xAxis: {
                type: 'category',
                data: set,
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: setSize,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }



        </script>
    </body>
</html>