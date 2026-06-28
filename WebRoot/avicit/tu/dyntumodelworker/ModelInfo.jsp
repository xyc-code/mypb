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


  <body>
	  <div>&nbsp;</div>
      <div class="content_inner" >
        <div id="container" style="width: 100%;height: 284px;"></div>
      </div>

        <script type="text/javascript">
 
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var data1 = new Array();

var option;
myChart.showLoading();

$.ajax({
		 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getLevel",
		 type : 'post',
		 dataType : 'json',
			data: {
				key: {
					id: "id",
					name: "text",
					children: "children"
				},
				simpleData: {
					enable: true,
					idKey: "id",
					pIdKey: "parentId",
					rootPId: -1
				}
			},
		 success : function(r){
			 debugger;
			 if (r.flag == "success"){
				 myChart.hideLoading();
				if(r.levelCount!=null){
					var data2=r.levelCount;
					var data3=r.countlever;
				    myChart.setOption(
				    		{
				    	        title: {
				    	            text: "人员总数",
				    	            top: "38%",
				    	            left: "33%",
				    	            textStyle: {
				    	              color: "#333",
				    	              fontSize: "18px",
				    	              fontWeight: "normal"
				    	            },
				    	            subtext: data3,
				    	            subtextStyle: {
				    	              color: "#52A0E9",
				    	              fontSize: "32px",
				    	              align: "center"
				    	            },
				    	            textAlign: "center"
				    	          },

				    	          tooltip: {
				    	            trigger: "item"
				    	          },
				    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
				    	          legend: {
				    	            orient: "vertical",
				    	            right: "10%",
				    	            top: "30%",
				    	            itemWidth: 16,
				    	            itemHeight: 16,
				    	            textStyle: {
				    	              color: "#999",
				    	              fontSize: "14px"
				    	            }
				    	          },

				    	          series: [
				    	            {
				    	              name: "人员数量",
				    	              type: "pie",
				    	              center: ["34%", "50%"],
				    	              radius: ["46%", "90%"],
				    	              avoidLabelOverlap: false,
				    	              itemStyle: {
				    	                borderRadius: 4,
				    	                borderColor: "#fff",
				    	                borderWidth: 4
				    	              },
				    	              label: {
				    	                show: false,
				    	                position: "center"
				    	              },
				    	              emphasis: {
				    	                label: {
				    	                  show: false,
				    	                  fontSize: "40",
				    	                  fontWeight: "bold"
				    	                }
				    	              },
				    	              grid: {
				    	                left: "1%",
				    	                top: "3%"
				    	              },
				    	              labelLine: {
				    	                show: false
				    	              },
				    	              data: data2
				    	            }
				    	          ]
				    		    } 
	
				    );
    
				   myChart.off('click');
				   myChart.on('click',function(param){
					   var name = param.name;
					   console.log(param);
					   window.open(encodeURI("avicit/tu/dyntumodelworker/ModelInfoTb.jsp"), "详细表格");
					   
				   });
				    
				    
				    
	    
				    
				}
	 
			 }else{}
		 }
	 });


/**layer.open({
type:2,
area:['100%','100%'],
title:'表格',
skin:'bs-modal',
maxmin:true,
content:'avicit/tu/dyntumodelworker/ModelInfoTb.jsp'
})**/

//data:[
// { value: 1, name: "国家级荣誉" },
// { value: 2, name: "省部级荣誉" },
// { value: 3, name: "地市级荣誉" },
// { value: 4, name: "公司级荣誉" }
//]

        </script>
    </body>
    <style>
  	*{
  		box-sizing: border-box;
  	}
    .bt-tab {
      position: absolute;
      top: 13px;
      right:70px;
    }
    .tabs {
      display: inline-block;
      margin: 0 15px 0 0;
      cursor: pointer;
      color: #999999;
      font-size: 14px;
      font-family: "Arial Normal", "Arial";
      font-weight: 400;
      font-style: normal;
    }
    .tabsf {
      color: #1593f5;
      padding: 0 0 10px 0;
      border-bottom: 3px solid #1593f5;
    }
  </style>
</html>