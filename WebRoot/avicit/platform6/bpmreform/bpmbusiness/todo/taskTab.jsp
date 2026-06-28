<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>

<title>我的待办</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>

</head>
<body>
<ul id="myTab" class="nav nav-tabs" style="width:100%;height:100%;">
	<li class="active"><a rel="iframe1" href="#todo" data-toggle="tab" id="tab1" >我的待办</a></li>
	<li><a rel="iframe2" href="#toRead" data-toggle="tab" id="tab2" >我的待阅</a></li>
	<li><a rel="iframe3" href="#toRe" data-toggle="tab" id="tab3" >周报待阅<span id="weekly" style="color:red"></span></a></li>
</ul>
<div id="myTabContent" class="tab-content" style="width:100%;height:100%; border: 0;">
	<div class="tab-pane fade in active" id="todo" style="width:100%;height:100%; border: 0;">
		
	</div>
	<div class="tab-pane fade" id="toRead" style="width:100%;height:100%; border: 0;">
		<iframe id="iframe2" name="iframe2" src="" scrolling="no" frameborder="0" style="width:100%;height:100%; border: 0;"></iframe>
	</div>
	<div class="tab-pane fade" id="toRe" style="width:100%;height:100%; border: 0;">
		<iframe id="iframe3" name="iframe3" src="" scrolling="no" frameborder="0" style="width:100%;height:100%; border: 0;"></iframe>
	</div>
	
</div>
</body>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script type="text/javascript">
$(function(){
	$("#myTabContent").css('height',$(document).innerHeight() -41);
	//$("#myTabContent").css('height',document.documentElement.clientHeight -41);
	
	$.ajax({
		url:"platform/avicit/weekly/weeklyController/operation/getDynDistributesByPage",
		type:"POST",
		dataType : 'json',
		 success : function(r){
			 if(r.rows.length!=0){
				 $("#weekly").text("("+r.rows.length+")")
			 }
		 }
	})
	setTimeout(function(){
		var url = "avicit/platform6/bpmreform/bpmbusiness/todo/todoTask.jsp";
		$('<iframe id="iframe1" name="iframe1" src="'+url+'" style="width: 100%;height: 100%; border: 0;"></iframe>').appendTo($('#todo'));
	},10);
	var url1 = "avicit/platform6/bpmreform/bpmbusiness/todo/todoTask.jsp";
	var url2 = "avicit/platform6/bpmreform/bpmbusiness/todo/toRead.jsp";
	var url3 = "platform/avicit/weekly/weeklyController/toDynDistributeManage";
		var ifrm={'iframe1':url1,
			  'iframe2':url2,
			  'iframe3':url3
			  };

	  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {		  
	  	if(!$('#'+e.target.rel).attr('src')){
	  		$('#'+e.target.rel).attr('src',ifrm[e.target.rel]);
	  	}else{
		  	if(window.frames[e.target.rel].bpm_operator_refresh){
		  		window.frames[e.target.rel].bpm_operator_refresh();
			 }
		}
	  });
})



$(window).resize(function(){
	$("#myTabContent").css('height',$(document).innerHeight() -41);
});

</script>
</html>