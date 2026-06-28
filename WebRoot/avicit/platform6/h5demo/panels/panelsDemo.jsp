<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap 实例 - 标签页（Tab）插件</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>

</head>
<body>
<p>基本面板</p>
<div class="panel panel-default">
    <div class="panel-body">
        	这是一个基本的面板
    </div>
</div>

<br/><br/>
<p>有高度和宽度的面板 (通过css样式设置宽度和高度，注意设置overflow: auto，否则内容超出面板)</p>
<div class="panel panel-default" style="width: 600px;height: 150px;overflow: auto;">
    <div class="panel-body">
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
    </div>
</div>

<br/><br/>
<p>两个带标题的面板 </p>
<div class="panel panel-default">
	<div class="panel-heading">
		不带 title 的面板标题
	</div>
	<div class="panel-body">
		面板内容
	</div>
</div>

<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">
			带有 title 的面板标题
		</h3>
	</div>
	<div class="panel-body">
		面板内容
	</div>
</div>

<p>带标题的面板设置高度和宽度 (注意写css样式的地方)</p>
<div class="panel panel-default" style="width: 600px;">
	<div class="panel-heading">
		<h3 class="panel-title">
			带有 title 的面板标题
		</h3>
	</div>
	<div class="panel-body" style="height: 150px;overflow: auto;">
		这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
       	这是一个基本的面板<br/>
	</div>
</div>
</body>
</html>