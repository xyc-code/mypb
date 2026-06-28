<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<% 
String importlibs = "common";	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>导入导出配置</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<ul id="myTab" class="nav nav-tabs">
	<li class="active"><a rel='import_ifrm' href="#import" data-toggle="tab">导入</a></li>
	<li><a rel='export_ifrm' href="#export" data-toggle="tab">导出</a></li>
</ul>
<div id="myTabContent" class="tab-content">
	<div class="tab-pane fade in active" id="import">
	</div>
	<div class="tab-pane fade" id="export">
			<iframe id="export_ifrm" src="" scrolling="no" frameborder="0" src="" style="width:100%;height:100%;"></iframe>
	</div>
</div>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script  type="text/javascript">

$(function(){
    $('#import').css("height",document.documentElement.clientHeight-36);
	$('#export').css("height",document.documentElement.clientHeight-36);

	setTimeout(function(){
			var $frame=$('<iframe id="import_ifrm" scrolling="no" frameborder="0" style="width:100%;height:100%;"></iframe>');
			$frame.attr("src","platform6/msystem/excel/template/sysImpExcelTemplateController/toSysImpTemplateManage");
			$frame.appendTo($('#import'));
		},10);

	var ifrm={'export_ifrm':'platform6/msystem/excel/template/sysExpExcelTempalteController/toSysExpTemplateManage'};

	  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  	if(!$('#'+e.target.rel).attr('src')){
	  		$('#'+e.target.rel).attr('src',ifrm[e.target.rel]);
	  	}
	  });
	
})
$(window).resize(function(){
	$('#import').css("height",document.documentElement.clientHeight - 36);
	$('#export').css("height",document.documentElement.clientHeight - 36);
});

</script>
</html>