<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
    String importlibs = "common,table,form";
	String typeName = request.getParameter("typeName");
	typeName = new String(typeName.getBytes("ISO-8859-1"), "UTF-8"); // 转UTF-8
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>数据分析</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>

    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <script src="static/h5/echarts/dist/echarts-4.1.2.js" type="text/javascript"></script>
</head>
<style>
    .titleDiv{
        color: #3a3a3b;
        font-size: 17px;
        font-weight: bold;
        margin-left:10px;
        margin-top:10px;
        position:relative;
        top:30px;
    }
</style>
<body>
	<table class="form_commonTable">
	    <tr>
	        <td>
	            <div class="titleDiv"></div>
	            <div id="assetOriginalAndCurrentLine" style="height:450px;min-width:1000px;overflow: hidden;border: 1px solid #ccc"></div>
	        </td>
	    </tr>
	</table>
</body>
<script type="text/javascript">
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	
	var typeName = '<%=typeName%>';
	
	var currentColor = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', 
	                    '#9a60b4', '#ea7ccc', '#FF5733', '#FFC300', '#DAF7A6', '#90E1C6', '#73C8A9',
	                    '#D77BBA', '#FF9E80', '#B3F5FF', 'F4D03F', '#85C1E9', '#F1C40F', '#AED6F1'];
	var oneIndex = 0;
    
    var towTypeNames = [];
    var towOriginalValues = [];
    var towCurretnValues = [];
    
    
    $(function(){
        initAssetOriginalAndCurrentLine();
    });
    
    
  	//根据资产类型分类展示资产原值和现值  折线图
    function initAssetOriginalAndCurrentLine() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartTwoByAssetCurrentAndOriginal",
            data: {
            	year : currentYear,
            	typeName : typeName
            },
            type: 'post',
            datatype: 'json',
            async: false,
            success: function (result) {
            	towTypeNames = result.assetsTypeNames;
            	towOriginalValues = result.originalValues;
                towCurretnValues = result.currentValues;
                var chartDom = document.getElementById('assetOriginalAndCurrentLine');
                var myChart = echarts.init(chartDom);
                var option;
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        } ,
                        formatter: "{a0}:{c0}<br/>{a1}:{c1}<br/>"
                    },
                    legend: {
                        data: ['原值', '现值'],
                        left:'45%'
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: towTypeNames,
                            axisLine:{
                            	lineStyle:{ color: '#333' } 
                        	},
                            axisLabel:{ interval: 0,  rotate: 0 }
                        }
                    ],
                    yAxis: {
                    	type: 'value',
                        axisLine: { show: true },
                        splitLine: { show: true, lineStyle: { type: 'dashed' } },
                        axisLabel: { formatter: '{value}' }
                    },
                    series: [
                        {
		                    name: '原值',
		                    type: 'line',
		                    data: towOriginalValues,
		                    symbol: 'circle',
		                    symbolSize: 8,
		                    itemStyle: { color: '#5470c6' },
		                    lineStyle: { width: 3 }
		                },
		                {
		                    name: '现值',
		                    type: 'line',
		                    data: towCurretnValues,
		                    symbol: 'circle',
		                    symbolSize: 8,
		                    itemStyle: { color: '#e45050' },
		                    lineStyle: { width: 3 }
		                }
                    ]
                };
                option && myChart.setOption(option);
                myChart.on('click', function (params) {
                	var contentUrl = "platform/eform/bpmsCRUDClient/toViewJsp/fixedAssetsLedgerShowView?detailsName="
                		+ encodeURIComponent(params.name) + "&currentYear=" + currentYear;
	                var index = layer.open({
	                    type: 2,
	                    content: contentUrl,
	                    area: ['90%', '90%'],
	                    title: currentYear + "年度" + params.name + '的台账',
	                    maxmin: false
	                });
                });

            }
        });
    }
    
</script>
</html>
