<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,table,form,tree";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>

</HEAD>
<body>
	<div style="padding: 10px 100px">
		<h3>提示工具(Tooltip)插件</h3>
		<a href="#" data-toggle="tooltip" title="默认的Tooltip">默认的Tooltip</a><br />
		<br /> <a href="#" data-toggle="tooltip" data-placement="left"
			title="左则的Tooltip">左则的Tooltip</a><br />
		<br /> <a href="#" data-toggle="tooltip" data-placement="right"
			title="右则的Tootip">右则的Tooltip</a><br />
		<br /> <a href="#" data-toggle="tooltip" data-placement="bottom"
			title="底部的Tooltip">底部的Tooltip</a><br />
		<br /> <a href="#" data-toggle="tooltip" data-placement="top"
			title="顶部的Tooltip">顶部的Tooltip</a><br />
		<br />

			<span data-toggle="tooltip" data-placement="top" title="这只是一个测试！">span提示</span>
		<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
			<jsp:param value="<%=importlibs%>" name="importlibs" />
		</jsp:include><br /><br />
		<label data-toggle="tooltip" data-placement="right" data-html="true" title="第一排<br>第二排<br>第三排">label提示换行</label>
		<br />
		<br />
		
		<h3>提示工具（Popover）插件</h3>

    	<br />
		<br />
		<a  data-toggle="popover" data-trigger="hover" data-title="提示" data-content="Bootstrap （当前版本 v3.3.7）提供以下几种方式帮你快速上手，每一种方式针对具有不同技能等级的开发者和不同的使用场景。继续阅读下面的内容，看看哪种方式适合你的需求吧。"> 文本提示</a>
      <script>
        $(function(){
            $('#pop3').popover();
        });
        </script>
    		<br />
		<br />
    		<a data-toggle="popover" data-trigger="hover" data-html="true"  data-title="提示" data-content="样例图示：<img src='static/images/platform/syscustomed/accordionMenu.jpg' style='height:100px'>"> html提示</a>

      <script>
        $(function(){
        	$(document).ready(function() {
				$("[data-toggle='tooltip']").tooltip();
				$("[data-toggle='popover']").popover();
			});
        });
        </script>
    		</div>
</body>
</html>