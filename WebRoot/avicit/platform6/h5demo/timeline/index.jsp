<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>单表例子</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="static/h5/timeline/jquery.eeyellow.Timeline.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/common-ext/h5-common-befer.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="static/h5/timeline/jquery.eeyellow.Timeline.js" type="text/javascript"></script>
</head>
<body>
		<div id="VivaTimeline" class="VivaTimeline">
		</div>
		<script>
			$(function() {
				//传进来的模板和数据demo
				var options = {
					"id": "VivaTimeline",
					"data": [{
						groupName: "今天",
						datas: [
							["11:10", "出纳", "王五", "同意"],
							["9:23", "会计", "李斯", "同意"]
						]
					},{
						groupName: "三天以前",
						datas: [
							["2017-02-11", "部门经理", "张三", "同意"],
							["2017-02-01", "发起人", "小小生", "同意"]
						]
					}],
					"template": function() {
						return '<dd class="pos-right clearfix">' +
							'<div class="circ"></div>' +
							'<div class="time">#0#</div>' +
							'<div class="events">' +
							'    <div class="events-body">' +
							'    	#1# #2#    意见：#3#' +
							'    </div>' +
							'</div>' +
							'</dd>';
					}

				};
				var time = new TimeLineExt(options);
			});
		</script>

	</body>
</html>