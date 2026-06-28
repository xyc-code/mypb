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
<p>
通过 data 属性：您需要添加 data-toggle="tab" 或 data-toggle="pill" 到锚文本链接中。
</p>
<br/>

<p> Bootstrap 标签样式 （添加 nav 和 nav-tabs 类到 ul 中，将会应用 Bootstrap 标签样式） </p>

<!-- 代码开始 -->
<ul id="myTab" class="nav nav-tabs">
	<li class="active">
		<a href="#home" data-toggle="tab">
			 菜鸟教程
		</a>
	</li>
	<li><a href="#ios" data-toggle="tab">iOS</a></li>
	<li class="dropdown">
		<a href="#" id="myTabDrop1" class="dropdown-toggle" 
		   data-toggle="dropdown">Java 
			<b class="caret"></b>
		</a>
		<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
			<li><a href="#jmeter" tabindex="-1" data-toggle="tab">jmeter</a></li>
			<li><a href="#ejb" tabindex="-1" data-toggle="tab">ejb</a></li>
		</ul>
	</li>
</ul>
<div id="myTabContent" class="tab-content" >
	<div class="tab-pane fade in active" id="home" style="height: 300px">
		<iframe src="https://www.baidu.com/" style="width: 100%;height: 100%; border: 0;"></iframe>
	</div>
	<div class="tab-pane fade" id="ios">
		<p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple 
			TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
	</div>
	<div class="tab-pane fade" id="jmeter">
		<p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
	</div>
	<div class="tab-pane fade" id="ejb">
		<p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
		</p>
	</div>
</div>

<br/><br/>
<p> Bootstrap 胶囊式样式 （添加 nav 和 nav-pills 类到 ul 中，将会应用 Bootstrap 胶囊式样式 ）</p>

<!-- 代码开始 -->
<ul id="myTab2" class="nav nav-pills">
	<li class="active">
		<a href="#home2" data-toggle="tab">
			 菜鸟教程
		</a>
	</li>
	<li><a href="#ios2" data-toggle="tab">iOS</a></li>
	<li class="dropdown">
		<a href="#" id="myTabDrop2" class="dropdown-toggle" 
		   data-toggle="dropdown">Java 
			<b class="caret"></b>
		</a>
		<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop2">
			<li><a href="#jmeter2" tabindex="-1" data-toggle="tab">jmeter</a></li>
			<li><a href="#ejb2" tabindex="-1" data-toggle="tab">ejb</a></li>
		</ul>
	</li>
</ul>
<div id="myTabContent2" class="tab-content">
	<div class="tab-pane fade in active" id="home2">
		<p>菜鸟教程是一个提供最新的web技术站点，本站免费提供了建站相关的技术文档，帮助广大web技术爱好者快速入门并建立自己的网站。菜鸟先飞早入行——学的不仅是技术，更是梦想。</p>
	</div>
	<div class="tab-pane fade" id="ios2">
		<p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple 
			TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
	</div>
	<div class="tab-pane fade" id="jmeter2">
		<p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
	</div>
	<div class="tab-pane fade" id="ejb2">
		<p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
		</p>
	</div>
</div>

<br/><br/>
<p> 通过样式 active，改变初始选中标签  (标签和内容需要同时设置样式 active)</p>

<p>(标签和内容都不设样式 active，置默认都不选中。 例子1是一个较简单的，下面是一个选中下拉菜单的例子)</p>

<!-- 代码开始 -->
<ul id="myTab3" class="nav nav-tabs">
	<li>
		<a href="#home3" data-toggle="tab">
			 菜鸟教程
		</a>
	</li>
	<li><a href="#ios3" data-toggle="tab">iOS</a></li>
	<li class="dropdown active">
		<a href="#" id="myTabDrop3" class="dropdown-toggle" data-toggle="dropdown">
			Java <b class="caret"></b>
		</a>
		<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop3">
			<li class="active"><a  href="#jmeter3" tabindex="-1" data-toggle="tab">jmeter</a></li>
			<li><a href="#ejb3" tabindex="-1" data-toggle="tab">ejb</a></li>
		</ul>
	</li>
</ul>
<div id="myTabContent3" class="tab-content">
	<div class="tab-pane fade" id="home3">
		<p>菜鸟教程是一个提供最新的web技术站点，本站免费提供了建站相关的技术文档，帮助广大web技术爱好者快速入门并建立自己的网站。菜鸟先飞早入行——学的不仅是技术，更是梦想。</p>
	</div>
	<div class="tab-pane fade" id="ios3">
		<p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple 
			TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
	</div>
	<div class="tab-pane fade  in active" id="jmeter3">
		<p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
	</div>
	<div class="tab-pane fade" id="ejb3">
		<p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
		</p>
	</div>
</div>

<br/><br/>
<p> 通过js，改变初始选中标签</p>

<!-- 代码开始 -->
<ul id="myTab4" class="nav nav-tabs">
	<li>
		<a href="#home4" data-toggle="tab">
			 菜鸟教程
		</a>
	</li>
	<li><a href="#ios4" data-toggle="tab">iOS</a></li>
	<li class="dropdown">
		<a href="#" id="myTabDrop4" class="dropdown-toggle" 
		   data-toggle="dropdown">Java 
			<b class="caret"></b>
		</a>
		<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop4">
			<li><a href="#jmeter4" tabindex="-1" data-toggle="tab">jmeter</a></li>
			<li><a href="#ejb4" tabindex="-1" data-toggle="tab">ejb</a></li>
		</ul>
	</li>
</ul>
<div id="myTabContent4" class="tab-content">
	<div class="tab-pane fade" id="home4">
		<p>菜鸟教程是一个提供最新的web技术站点，本站免费提供了建站相关的技术文档，帮助广大web技术爱好者快速入门并建立自己的网站。菜鸟先飞早入行——学的不仅是技术，更是梦想。</p>
	</div>
	<div class="tab-pane fade" id="ios4">
		<p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple 
			TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
	</div>
	<div class="tab-pane fade" id="jmeter4">
		<p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
	</div>
	<div class="tab-pane fade" id="ejb4">
		<p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
		</p>
	</div>
</div>
<script>
	$(function () {
		$('#myTab4 li:eq(1) a').tab('show');
	});
</script>

<br/><br/><br/><br/>
</body>
</html>