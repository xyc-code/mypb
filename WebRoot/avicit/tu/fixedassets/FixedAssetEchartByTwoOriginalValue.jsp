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
	            <div id="assetOriginalPie" style="height:450px;min-width:1000px;overflow: hidden;border: 1px solid #ccc"></div>
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
    
    
    var threeAssetsTypeNames = [];
    var threeOriginalValues = [];
    var threeAssetTypeDate = [];
    
    
    $(function(){
        initAssetOriginalPie();
    });
    
	//根据资产类型分类展示资产原值  饼状图
    function initAssetOriginalPie() {
        $.ajax({
            url: "avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/getEchartTwoByAssetsOriginalValue",
            data: {
            	year : currentYear,
            	typeName : typeName
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
            }
        });
    }
	
</script>
</html>
