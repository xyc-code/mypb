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
	            <div id="assetInsetTypeBar" style="height:450px;min-width:1000px;overflow: hidden;border: 1px solid #ccc"></div>
	        </td>
	        <td>
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
    
    var fourTypeNames = [];
    var fourStatusNames = [];
    
    $(function(){
        initAssetInsertTypeBar();
    });
    

	//根据资产类型分类展示各资产状态下的数量  柱状图
	function initAssetInsertTypeBar() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartTwoByAssetsInsertType",
            data: {
            	year : currentYear,
            	typeName : typeName
            },
            type: 'post',
            datatype: 'json',
            async: false,
            success: function (result) {
            	fourTypeNames = result.typeNames;
            	fourStatusNames = result.statusNames;
                var chartDom = document.getElementById('assetInsetTypeBar');
                var myChart = echarts.init(chartDom);
                var option;
                var series = Object.entries(result.statusMaps).map(([name, values]) => ({
					name,
					type: 'bar',
					data: values.map(Number), // 将字符串数组转换为数字数组
					label: {
						show: true,         // 显示标签
						position: 'top',    // 标签位置（顶部）
						color: '#FFF',      // 标签颜色
						fontSize: 12,       // 标签字体大小
						formatter: function(params) {
					        return params.value;
					    }
					},
					itemStyle: {
                        color: function(params) {
					        return currentColor[params.seriesIndex % currentColor.length];
					    }
                    }
               	}));
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        } ,
                        formatter: function (params) {
                        	var showHtml = "";
                        	var allValues = params.map(item => {
                        		showHtml += item.seriesName + '：' + item.value + "<br>";
							});
                        	return showHtml;
                        }
                    },
                    legend: {
                        data: fourStatusNames,
                        top: '5%',
                        left:'60%'
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
                            data: fourTypeNames,
                            axisTick: {
                                alignWithLabel: true
                            },axisLabel:{
                                interval:0,
                                rotate:'40'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series
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
