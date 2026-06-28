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
<div id="lookupTypeSelect" class="input-group input-group-sm avicselect" style="width:400px;margin:0 auto;">
			<input type="hidden"  name="lookupCode" id="lookupCode">
			<input type="text" class="form-control" name="lookupType" id="lookupType" placeholder="输入通用代码类型">
			<span id="lookupTypeselectbtn" class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-list"></i></span>
</div>
</form>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/h5/avicSelectBar/compent/lookupTypeSelect/lookupTypeSelect.js" type="text/javascript"></script> 
<script>
$(document).ready(function(){
	$("#lookupTypeSelect").bind("click", function(){
		new H5CommonLookupTypeSelect({type:'lookupSelect', idFiled:'lookupCode',textFiled:'lookupType', callBack: function(rowdata){
			$.ajax({
				url : 'console/lookup/operation/sub/getSysLookup.json',
				data: {pid : rowdata.id},
				type : 'post',
				dataType : 'json',
				success : function(r) {
					console.info(r);
				}
			});
				
		}});
	}); 
})
</script>
</html>