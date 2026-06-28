<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>编辑</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
	<script type="text/javascript" src="static/h5/echarts/dist/echarts-4.1.2.js"></script>
	<script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
	<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
	<script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
</head>
<body>
<div class="box commonFunction">
	<div class="box_title">
		<h4>销售额分析</h4>
		<span class="box_title_right">
          <i class="iconfont icon-refresh" title="刷新"></i>
        </span>
	</div>
	<div class="sales-analyse-content content_inner">
		<p style="color:#666;font-weight: 500;margin-left: 15px;margin-bottom:15px;">全年销售额统计</p>
		<div id="sales-analysePie" style="width: 100%;height: 290px;">
		</div>

	</div>
</div>

<script type="text/javascript">
	var salesAnalyseEchart = echarts.init(document.getElementById("sales-analysePie"));

	var salesAnalyseOption = {
		tooltip: {
			trigger: 'axis'
		},
		color:['#3BA1FF','#4ECB73','#FBD437'],
		legend: {
			icon: "circle",
			bottom: '0',
			left: 'center',
			itemWidth: 10,  // 设置宽度
			itemHeight: 10, // 设置高度
			itemGap: 5,
			data: ['历史同期','本期', '上期']
		},
		xAxis: [
			{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月' ,'7月', '8月', '9月', '10月', '11月', '12月']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		grid: {
			left: "5%",
			right: "2%",
			bottom: 50,
			top: "3%",
		},
		series: [
			{
				name: '历史同期',
				type: 'bar',
				data: [9884, 21402, 35812, 15983, 48951, 25897,44448,66668,33338,45458,34548,12129],
			},
			{
				name: '本期',
				type: 'bar',
				data: [9882, 21402, 35812, 15983, 48951, 25897,15988, 48958, 25898,4444,66668,33339],
			},
			{
				name: '上期',
				type: 'bar',
				data: [48952, 15982, 35812, 15983, 48951, 25897,44448,66668,33338,15988, 38880, 59859],
			}
		]
	};


	salesAnalyseEchart.setOption(salesAnalyseOption);

	function change(value){
		if(value == 'day'){

		}else if(value == 'week'){

		}else if(value == 'month'){

		}
	}
</script>


</body>
</html>

