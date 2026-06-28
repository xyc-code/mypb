<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<html>
<head>
<title>弹窗demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="static/h5/layer-v2.3/layer/layer.js"></script>
<script src="avicit/platform6/h5demo/loading/loading-ext.js"></script>
</head>
<body>
	<div style="margin-bottom: 10px;">
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:clickButton()" title="loading1秒后关闭">
			<i class="fa fa-file-text-o"></i> loading-1秒后关闭
		</button>
		
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:showErrorPage()" title="错误网站loading展示">
			<i class="fa fa-file-text-o"></i> 错误网站loading展示
		</button>
	</div>
	<hr/>
	通过IE8、9及chrome验证。<br/>
	本功能调用了layUI的方法，可以移至公用方法中。请求前调用doShowLoading()打开遮罩，success后调用doHideLoading()关闭遮罩。
	完整说明见：http://layer.layui.com/
</body>
<script>
function clickButton(){
	var handle = doShowLoading();
	setTimeout("doHideLoading("+handle+")",1000);//1秒后关闭
}

function showErrorPage(){
	openDialog("普通iframe","http://www.baidu11.com","600px", "400px",2);
}
</script>
</html>