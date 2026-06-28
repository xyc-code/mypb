<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>上传组件例子</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/layer-v2.3/layer/layer.js"></script>

	<!-- 图标 -->
	<link rel="stylesheet" href="static/h5/font-awesome-4.7.0/css/font-awesome.min.css">
	
	<!--引入webuploader的CSS和js-->
	<link rel="stylesheet" type="text/css" href="static/h5/webuploader-0.1.5/dist/webuploader.css">
	<script type="text/javascript" src="static/h5/webuploader-0.1.5/dist/webuploader.min.js"></script>
	<!--引入自己扩展的-->
	<link rel="stylesheet" type="text/css" href="static/h5/uploader-ext/uploader-ext.css">
	<script type="text/javascript" src="static/h5/uploader-ext/uploader-ext.js"></script>
</head>
<body>
	<button onclick="doUpload()">调用方法上传</button>
	<br/>
	<br/>
	<br/>
	
	<div id="attachment" ></div>
	
	
</body>
<script>
$(function(){
	$('#attachment').uploaderExt({
		formId: '123456789123',
		tableName: 'TEST123456789',
		secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
		fileCategory: 'SATISFACTION_SURVEY',
		multiple: true,
		allowPreview: true,
		allowSaveOnlineDisk: true
	});
});

function doUpload(){
	var files = $('#attachment').uploaderExt('getUploadFiles');
	for(var i = 0; i < files.length; i++){
		var id = files[i].id;
		var name = files[i].name;
		var size = files[i].size;
		var category = files[i].category;
		var secretLevel = files[i].secretLevel;
		
		if(parseInt(category) > 2){
			alert("文件"+name+"的密级太高！")
			return false;
		}
	}
	
	//提供上传方法“doUpload”,第二个参数是formId，不是必须。如果传入formId，则覆盖原有的。
	//参数formId的作用是，例如添加时还没有业务数据ID，保存完数据后生成ID后，再调用“doUpload”上传附件
	
	$('#attachment').uploaderExt('doUpload');
}
</script>
</html>