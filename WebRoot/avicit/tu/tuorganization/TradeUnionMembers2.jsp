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

      <div class="content_inner">
        <div id="container" style="width: 100%;height: 284px;"></div>
      </div>

        <script type="text/javascript">
 
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var data1 = new Array();

var option;
myChart.showLoading();


avicAjax.ajax({
		 url:"platform/avicit/tu/dynTradeUnionMb/dynTradeUnionMbController/operation/getTUMb",
		 type : 'post',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){
					
				 myChart.hideLoading();
		
				if(r.records && r.records.length > 0){

				    myChart.setOption(

				    
				    		{
				    		      tooltip: {
				    		        trigger: "axis",
				    		        axisPointer: {
				    		          type: "cross",
				    		          crossStyle: {
				    		            color: "#999"
				    		          }
				    		        }
				    		      },
				    		      toolbox: {
				    		        feature: {
				    		          dataView: { show: false, readOnly: false },
				    		          magicType: { show: false, type: ["line", "bar"] },
				    		          restore: { show: false },
				    		          saveAsImage: { show: false }
				    		        }
				    		      },
				    		      legend: {
				    		        data: ["工会支部"],
				    		        itemWidth: 10,
				    		        itemHeight: 10
				    		      },
				    		      color: ["#3BA1FF"],
				    		      xAxis: [
				    		        {
				    		          type: "category",
				    		          data: [
				    		            "01月",
				    		            "02月",
				    		            "03月",
				    		            "04月",
				    		            "05月",
				    		            "06月",
				    		            "07月",
				    		            "08月",
				    		            "09月",
				    		            "10月",
				    		            "11月",
				    		            "12月"
				    		          ],
				    		          axisPointer: {
				    		            type: "shadow"
				    		          },
				    		          splitLine: {
				    		            lineStyle: {
				    		              type: "dashed",
				    		              dashOffset: 10
				    		            }
				    		          }
				    		        }
				    		      ],
				    		      yAxis: [
				    		        {
				    		          type: "value",
				    		          name: "会员人数（个）",
				    		          min: 0,
				    		          max: 3,
				    		          interval: 0.5,
				    		          splitLine: {
				    		            lineStyle: {
				    		              type: "dashed"
				    		            }
				    		          }
				    		        }
				    		      ],
				    		      series: [
				    		        {
				    		          name: "工会支部",
				    		          type: "bar",
				    		          data: [2.0, 0.9, 3.0, 2.2, 2.6, 1.7, 1.6, 2.2, 2.6, 0.0, 2.4, 0.3]
				    		        }
				    		      ],
				    		      grid: {
				    		        top: "10%",
				    		        bottom: "8%",
				    		        left: "5%",
				    		        right: "0%",
				    		      }
				    		    } 
				    		
				    		
				    );
				    
    
				    
	
				    
				}
		
			 }else{
			  
				
			 } 
		 }
	 });



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