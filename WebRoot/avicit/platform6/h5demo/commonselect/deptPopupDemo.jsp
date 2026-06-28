<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form,tree";	
%>
<!DOCTYPE html>
<html>
<head>
<title>下拉选部门</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<form>
<div id="deptselect" class="input-group input-group-sm avicselect" style="width:400px;margin:0 auto;">
			<input type="hidden"  name="deptid" id="deptid">
			<input type="text" class="form-control" name="deptidAlias" id="deptidAlias" placeholder="输入部门名称">
			<span id="deptselectbtn" class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-list"></i></span>
</div>
</form>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none;">
    <iframe src="avicit/demo/deptselect.jsp" border="0" width="100%"></iframe>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/h5/avicSelectBar/compent/deptPopupSelect/deptPopup.js" type="text/javascript"></script> 
<script>
$(document).ready(function(){
	$("#deptselectbtn").bind("click", function(){
		new H5CommonPopupSelect({ selectModel:'multi', divid:'deptselect',type:'deptSelect', idFiled:'deptid',textFiled:'deptidAlias',rule:'A-A'});
	}); 
	//selectModel:'multi',  //多选属性
})
</script>
</html>