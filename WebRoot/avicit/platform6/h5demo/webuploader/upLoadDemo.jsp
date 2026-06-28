<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>上传组件例子</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>


	<!--引入CSS-->
	<link rel="stylesheet" type="text/css" href="static/h5/webuploader-0.1.5/dist/webuploader.css">
	<!--引入JS-->
	<script type="text/javascript" src="static/h5/webuploader-0.1.5/dist/webuploader.min.js"></script>
	<style type="text/css">
		.file-item{
			float: left;
			margin: 6px;
			padding: 6px;
			border:1px solid #ccc;
			box-shadow: 1px 1px 5px 0 #ccc;
		}

		.file-item:hover{
			box-shadow: 2px 2px 6px 0 #ccc;
		}
		.file-tools{
			height: 15px;
		}


		.file-name{
		   	cursor: pointer;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			width: 180px;
			text-align:center;
			padding-top:4px;
			margin: 0 10px 0 10px;
			font-size:14px;
		}

		.file-progress{
			height: 10px;
		}

		.progress{
			height: 10px;
		}

		.btns {
			display: inline-block;
		}
		.caret{
			float: right;
			margin-top: 15px;
		}

		.uploader-list{
			padding: 3px;
		}

		.file-panel-heading{
			padding: 2px 10px 2px 15px;
		}
	</style>
</head>
<body>
	<div class="panel-group" id="uploader"  class="wu-example" role="tablist" aria-multiselectable="true">
	  <div class="panel panel-default">
	    <div class="panel-heading file-panel-heading" role="tab" id="headingOne">
	      <h4 class="panel-title">
		      <div class="btns">
		        <div id="picker">选择文件</div>
		      </div>
		      <span class="caret" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></span>
	      </h4>
	    </div>
	    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
	      <!--用来存放文件信息-->
	      <div id="thelist" class="panel-body uploader-list"></div>
	    </div>
	  </div>
	</div>
</body>
<script>
$(function(){
	var guid = WebUploader.Base.guid();

	var uploader = WebUploader.create({
		// 选完文件后，是否自动上传。
		auto: true,
		// swf文件路径
		swf: 'static/h5/webuploader-0.1.5/dist/Uploader.swf',
		// 文件接收服务端。
		server: 'platform/h5demo/uploader/upload.json',
		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick: '#picker',
		method:'POST',
		formData: {
			guid : guid, //唯一标识
			formId: '1234567890',
			tableName: 'TEST'
	    }
	});

	//当有文件被添加进队列的时候
	uploader.on('fileQueued', function(file) {
		var fileItem = [];
		fileItem.push('<div id="' + file.id + '" fileId="" class="file-item">');
		fileItem.push('<div class="file-tools">');
		fileItem.push('<button type="button" class="close remove-this" aria-label="Close">');
		fileItem.push('<span aria-hidden="true">&times;</span></button>');
		fileItem.push('</div>');
		fileItem.push('<div class="file-image"></div>');
		fileItem.push('<div class="file-name" title="'+ file.name +'">' + file.name + '<br/>');
		fileItem.push('<span class="file-size">(' + getFileSize(file.size) + ')</span>');
		fileItem.push('</div>');
		fileItem.push('<div class="file-progress"></div>');
		fileItem.push('</div>');
		$("#thelist").append(fileItem.join(''));
	});

   //文件上传过程中创建进度条实时显示。
   uploader.on('uploadProgress', function( file, percentage ) {
       var $li = $('#'+file.id ),
       	   $progress = $li.find('.file-progress');
           $percent = $li.find('.progress .progress-bar');

       // 避免重复创建
       if ( !$percent.length ) {
           $percent = $('<div class="progress progress-striped active">' +
             '<div class="progress-bar" role="progressbar" style="width: 0%">' +
             '</div>' +
           '</div>').appendTo($progress).find('.progress-bar');
       }

       $li.find('p.state').text('上传中');

       $percent.css('width', percentage * 100 + '%' );
   });

   uploader.on('uploadSuccess', function(file, response){
	   var fileId = response.fileId;
	   $('#'+file.id).find('p.state').text('已上传');
	   $('#'+file.id).attr('fileId', fileId);
	   $('#'+file.id).find('.close').on('click', function () {
		   var fileId = $(this).parents('.file-item').attr('fileId');
		   $.ajax({
	           cache: false,
	           type: "post",
	           url: "platform/h5demo/uploader/delete.json",
	           dataType: "json",
	           data:{fileId: fileId},
	           async: false,
	           error: function(request) {

	           },
	           success: function(data) {
	        	   $("[fileId='"+ fileId+"']").remove();
	           }
	       });
	   });
	   $('#'+file.id).find('.file-name').on('click', function () {
		   downloadFile(fileId);
	   });
   });

   uploader.on('uploadError', function(file, reason){
	   $('#'+file.id ).find('p.state').text(reason);
   });

   uploader.on('uploadComplete', function(file){
	   $('#'+file.id ).find('.progress').fadeOut();
	   $('#'+file.id ).find('p.state').fadeOut();
   });

   function getFileSize(fileSize){
	   var str = "";
	   if(fileSize > 1024 * 1024 * 1024){
		   str = (fileSize/(1024 * 1024 * 1024)).toFixed(2) + "G";
	   }else if(fileSize > 1024 * 1024 ){
		   str = (fileSize/(1024 * 1024)).toFixed(2) + "M";
	   }else if(fileSize > 1024){
		   str = (fileSize/1024).toFixed(2) + "K";
	   }else{
		   str = fileSize + "B";
	   }
	   return str;
   }

   function downloadFile(fileId){
	   var contextPath = '<%=request.getContextPath()%>';
	   window.open(contextPath + '/platform/h5demo/uploader/download?fileId='+fileId, '_self');
   }

   uploader.on('ready', function() {
	   $.ajax({
           cache: false,
           type: "post",
           url: "platform/h5demo/uploader/getInfos.json",
           dataType: "json",
           data:{formId: "1234567890"},
           async: false,
           error: function(request) {

           },
           success: function(data) {
        	   var table = [];
        	   $.each(data.fileList, function(index,element){
        		   table.push('<div fileId="' + element.id + '" class="file-item">');
        		   table.push('<div class="file-tools">');
        		   table.push('<button type="button" class="close remove-this" aria-label="Close">');
        		   table.push('<span aria-hidden="true">&times;</span></button>');
        		   table.push('</div>');
        		   table.push('<div class="file-image"></div>');
        		   table.push('<div class="file-name" title="'+ element.file_NAME +'">' + element.file_NAME + '<br/>');
        		   table.push('<span class="file-size">(' + getFileSize(element.file_SIZE) + ')</span>');
        		   table.push('</div>');
        		   table.push('<div class="file-progress"></div>');
        		   table.push('</div>');
        	   });
        	   $("#thelist").append(table.join(''));
        	   $("#thelist").find('.close').on('click', function () {
        		   var fileId = $(this).parents('.file-item').attr('fileId');
        		   $.ajax({
        	           cache: false,
        	           type: "post",
        	           url: "platform/h5demo/uploader/delete.json",
        	           dataType: "json",
        	           data:{fileId: fileId},
        	           async: false,
        	           error: function(request) {

        	           },
        	           success: function(data) {
        	        	   $("[fileId='"+ fileId+"']").remove();
        	           }
        	       });
        	   });

        	   $("#thelist").find('.file-name').on('click', function () {
        		   var fileId = $(this).parents('.file-item').attr('fileId');
        		   downloadFile(fileId);
        	   });
           }
       });
   });
});

</script>
</html>
