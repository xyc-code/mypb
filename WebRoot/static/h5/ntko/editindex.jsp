<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<html>
<style>
	*{
		margin: 0;
		padding: 0;
		border: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
<head>
	<title>文件在线预览</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta http-equiv="expires" content="0"/>
	<meta http-equiv="pragma" content="no-cache"/>
	<meta http-equiv="cache-control" content="no-cache"/>
	<meta content="IE=10" http-equiv="X-UA-Compatible" />
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<script type="text/javascript" src="static/h5/jquery/jquery-2.2.4.js"></script>
	<script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js"></script>
	<script type="text/javascript">
		var ntko;//控件对象
		function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);

			return null;
		}
		//初始化去打开文档
		function  init(fileId){
			ntko = document.getElementById("TANGER_OCX");
			//隐藏弹出框
			ntko.IsShowDocStatusInfo =false;
			ntko.IsShowOpeningDocUI = false;
			//隐藏状态栏
			ntko.Statusbar = false;
			//隐藏功能区
			ntko.RibbonBars = false;
			//隐藏工具栏
			ntko.ToolBars = false;
			//隐藏自定义工具栏
			ntko.CustomToolBar = false;
			//隐藏标题栏
			ntko.TitleBar = false;
			//隐藏菜单栏
			ntko.Menubar = false;
			//禁止copy
			ntko.IsStrictNoCopy =false;
			//设置无边框
			ntko.ntkoBorderNone = 0;
			//设置全屏
			ntko.FullScreenMode=false;
			if(window.navigator.platform==="Win64"){
				ntko.AddDocTypePlugin(".pdf","PDF.NtkoDocument","4.0.1.0","ntkooledocallx64.cab",51,true);
			}
			if(window.navigator.platform==="Win32"){
				ntko.AddDocTypePlugin(".pdf","PDF.NtkoDocument","4.0.2.0","ntkooledocall.cab",51,true);
			}
			var urlStr = "<%=ViewUtil.getRequestPath(request)%>webuploader/previewFile?fileId="+fileId;
			ntko.OpenFromURL(urlStr,true);
		}
	</script>
</head>

<body onload="fileId=getQueryString('fileId');init(fileId);">
<%--文档加载完成时间--%>
<script type="text/javascript" for="TANGER_OCX" event="OnDocumentOpened(File, Document)" >
	//设置只读
	ntko.SetReadOnly(true, "123456",'',3);

</script>
<%--设置禁用Excel右键--%>
<script type="text/javascript" for="TANGER_OCX" event="OnSheetBeforeRightClick(SheetName, row, col, IsCancel)" >
	//设置禁用鼠标右键
	ntko.CancelSheetRightClick=true;
</script>
<%--设置禁用word右键--%>
<script type="text/javascript" for="TANGER_OCX" event="OnWordBeforeRightClick(Selection, IsCancel)" >
	//设置禁用鼠标右键
	ntko.CancelWordRightClick=true;
</script>
<%--设置禁用PPT右键--%>
<script type="text/javascript" for="TANGER_OCX" event="OnPPTBeforeRightClick(Selection, IsCancel)" >
	//设置禁用鼠标右键
	ntko.CancelPPTRightClick=true;
</script>
<%--保存监听事件--%>
<script type="text/javascript" for="TANGER_OCX" event="OnFileCommand(cmd,canceled)">
	ntko.CancelLastCommand = true;
</script>

<body>
	<div id="word" style="width:100%;height:100vh;overflow: hidden">
		<script type="text/javascript" src="static/h5/ntko/ntkoofficecontrol.min.js"></script>
	</div>
</body>

</body>
</html>
