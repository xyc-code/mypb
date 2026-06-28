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


  <body>
	  <div>&nbsp;</div>
      <div class="content_inner" >
        <div id="container" style="width: 100%;height: 384px;"></div>
      </div>

        <script type="text/javascript">
        
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var data1 = new Array();

var option;
myChart.showLoading();
function getIEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1;//不是ie浏览器
    }
}

avicAjax.ajax({
		 url:"platform/avicit/tu/dynTradeUnionMb/dynTradeUnionMbController/operation/getTUMb",
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
			 if (r.flag == "success"){
				 myChart.hideLoading();
				if(r.records && r.records.length > 0){
					

					var str1=r.records;
					var n1=str1.split(",");
					var dataX1 = n1;	
					
					var str2=r.records2;
					var n2=str2.split(",");
					var dataX2 = n2;	
					
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
				    		        data: ["基层工会"],
				    		        itemWidth: 10,
				    		        itemHeight: 10
				    		      },
				    		      color: ["#3BA1FF"],
				    		      xAxis: [
				    		        {
				    		          type: "category",
				    		          data:dataX1,
				    		          axisPointer: {
				    		            type: "shadow"
				    		          },
				    		          splitLine: {
				    		            lineStyle: {
				    		              type: "dashed",
				    		              dashOffset: 10
				    		            }
				    		          },
				    		          axisLabel:{
				    		        	  interval:0,
				    		        	  formatter:function(value){
				    		        		  if(getIEVersion() == 8 ){
				    		        			  return ("\n"+value).split('').join('\n');
				    		        		  }else{
				    		        			  return value.split('').join('\n');
				    		        		  }
				    		        		  
				    		        	  }
				    		          }
				    		          
				    		        }
				    		      ],
				    		      yAxis: [
						    		        {
						    		          type: "value",
						    		          name: "会员人数（个）",
						    		          interval: 1,
						    		          splitLine: {
						    		            lineStyle: {
						    		              type: "dashed"
						    		            }
						    		          }
						    		        }
						    		      ],
				    		      series: [
				    		        {
				    		          name: "基层工会",
				    		          type: "bar",
				    		          data: dataX2,
				    		          
				    		        },
				    		      ],
				    		      grid: {
				    		        top: "12%",
				    		        bottom: "20%",
				    		        left: "5%",
				    		        right: "5%",
				    		        height:"30%"
				    		      }
				    		    } 
				    );
    
				}
	 
			 }else{}
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