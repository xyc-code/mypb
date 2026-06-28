<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
    String importlibs = "common,table,form";
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
	        <td colspan="3">
	            <div class="titleDiv">资产类型资产数量分析</div>
	            <div id="assetTypeBar" style="height:500px;width:100%;overflow: hidden;border: 1px solid #ccc"></div>
	        </td>
	    </tr>
	    <tr>
	        <td>
	            <div class="titleDiv">资产价值随时间的变化趋势</div>
	            <div id="assetOriginalAndCurrentLine" style="height:400px;min-width:600px;overflow: hidden;border: 1px solid #ccc"></div>
	        </td>
	        <td>
	            <div class="titleDiv">资金分配</div>
	            <div id="assetOriginalPie" style="height:400px;min-width:600px;overflow: hidden;border: 1px solid #ccc"></div>
	        </td>
	    </tr>
	    <tr>
	    	<td>
	            <div class="titleDiv">资产类型资产状态分析</div>
	            <div id="assetInsetTypeBar" style="height:400px;min-width:600px;overflow: hidden;border: 1px solid #ccc"></div>
	        </td>
	        <td>
	        </td>
	    </tr>
	</table>
</body>
<script type="text/javascript">
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	
	var currentColor = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', 
	                    '#9a60b4', '#ea7ccc', '#FF5733', '#FFC300', '#DAF7A6', '#90E1C6', '#73C8A9',
	                    '#D77BBA', '#FF9E80', '#B3F5FF', 'F4D03F', '#85C1E9', '#F1C40F', '#AED6F1'];
	var oneIndex = 0;
    
    var oneTypeNames = [];
    var oneUnionNames = [];
    
    var towTypeNames = [];
    var towOriginalValues = [];
    var towCurretnValues = [];
    
    var threeAssetsTypeNames = [];
    var threeOriginalValues = [];
    var threeAssetTypeDate = [];
    
    var fourTypeNames = [];
    var fourStatusNames = [];
    
    $(function(){
        initAssetTypeBar();
        initAssetOriginalAndCurrentLine();
        initAssetOriginalPie();
        initAssetInsertTypeBar();
    });
    
    //根据资产类型分类展示所有工会的资产数量总和   柱状图
    function initAssetTypeBar() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartOneByAssetsNum",
            data: {
            	year : currentYear
            },
            type: 'post',
            datatype: 'json',
            async: false,
            success: function (result) {
            	oneTypeNames = result.typeNames;
            	oneUnionNames = result.unionNames;
                var chartDom = document.getElementById('assetTypeBar');
                var myChart = echarts.init(chartDom);
                var option;
                var series = Object.entries(result.unionMaps).map(([name, values]) => ({
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
                        data: oneUnionNames,
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
                            data: oneTypeNames,
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
                	debugger
                    var contentUrl = "avicit/tu/fixedassets/FixedAssetEchartByTwoAssetsNum.jsp?typeName=" 
                    		+ encodeURIComponent(params.name);
                    var index = layer.open({
                        type: 2,
                        content: contentUrl,
                        area: ['100%', '100%'],
                        title: params.name + '下资产状态分析',
                        maxmin: false
                    });
                });
            }
        });
    }
    
  	//根据资产类型分类展示资产原值和现值  折线图
    function initAssetOriginalAndCurrentLine() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartOneByAssetCurrentAndOriginal",
            data: {
            	year : currentYear
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
                    var contentUrl = "avicit/tu/fixedassets/FixedAssetEchartByTwoByCurrentAndOriginal.jsp?typeName=" 
                    		+ encodeURIComponent(params.name);
                    var index = layer.open({
                        type: 2,
                        content: contentUrl,
                        area: ['100%', '100%'],
                        title: params.name + '下资产状态分析',
                        maxmin: false
                    });
                });

            }
        });
    }
    
    
	//根据资产类型分类展示资产原值  饼状图
    function initAssetOriginalPie() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartOneByAssetsOriginalValue",
            data: {
            	year : currentYear
            },
            type: 'post',
            datatype: 'json',
            async: false,
            success: function (result) {
                while (threeAssetTypeDate.length) {
                	threeAssetTypeDate.pop();
                }
                if (result.assetsTypeNames.length > 0) {
                	threeAssetsTypeNames = result.assetsTypeNames;
                    for (var i = 0; i < result.assetsTypeNames.length; i++) {
                    	threeAssetTypeDate.push({
                            name :  result.assetsTypeNames[i],
                            value : parseFloat(result.originalValues[i]),
                            code : result.assetsTypeNames[i]
                        });
                    }
                    var chartDom = document.getElementById('assetOriginalPie');
                    var myChart = echarts.init(chartDom);
                    var option;
                    option = {
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            top: "5%",
                            right: '1%',
                            data: threeAssetsTypeNames
                        },
                        series: [
                            {
                                name: '金额',
                                type: 'pie',
                                radius: '70%',
                                center: ['50%', '50%'],
                                data: threeAssetTypeDate,
                                label: {
                                    normal: {
                                        show:true,
                                        position:'inside',
                                        formatter: '{c}'
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            // 预定义一个颜色数组
                                            var colorList = [
                                                '#5470c6','#91cc75','#fac858','#ee6666','#73c0de',
                                                '#3ba272','#fc8452','#9a60b4','#7d480f','#646464',
                                                '#545213','#003f90','#025217','#F0805A','#26C0C0'
                                            ];
                                            // 返回每个饼图扇区的颜色
                                            return colorList[params.dataIndex % colorList.length];
                                        }
                                    }
                                },
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 100,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    option && myChart.setOption(option);
                    myChart.on('click', function (params) {
                        var contentUrl = "avicit/tu/fixedassets/FixedAssetEchartByTwoOriginalValue.jsp?typeName=" 
                    		+ encodeURIComponent(params.name);
                        var index = layer.open({
                            type: 2,
                            content: contentUrl,
                            area: ['100%', '100%'],
                            title: params.name + '下资产状态分析',
                            maxmin: false
                        });
                    });
                }
            }
        });
    }
	

	//根据资产类型分类展示各资产状态下的数量  柱状图
	function initAssetInsertTypeBar() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartOneByAssetsInsertType",
            data: {
            	year : currentYear
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
                    var contentUrl = "avicit/tu/fixedassets/FixedAssetEchartByTwoAssetsInsertType.jsp?typeName=" 
                    		+ encodeURIComponent(params.name);
                    var index = layer.open({
                        type: 2,
                        content: contentUrl,
                        area: ['100%', '100%'],
                        title: params.name + '下资产状态分析',
                        maxmin: false
                    });
                });
            }
        });
    }
</script>
</html>
