<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
<title>弹窗demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="static/h5/layer-v2.3/layer/layer.js"></script>
<script src="avicit/platform6/h5demo/loading/loading-ext.js"></script>
</head>
<body>
	<div style="margin-bottom: 10px;">
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:normalIframe()" title="普通iframe">
			<i class="fa fa-file-text-o"></i> 普通iframe
		</button>
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:modalIframe()" title="模态iframe">
			<i class="fa fa-file-text-o"></i> 模态iframe
		</button>
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:normalDialog()" title="普通页面内dialog">
			<i class="fa fa-file-text-o"></i> 普通页面内dialog
		</button>
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:modalDialog()" title="模态页面内dialog">
			<i class="fa fa-file-text-o"></i> 模态页面内dialog
		</button>
		
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:alertwindow()" title="模态页面内dialog">
			<i class="fa fa-file-text-o"></i> 提示框
		</button>
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:alertwindow2()" title="模态页面内dialog">
			<i class="fa fa-file-text-o"></i> 询问
		</button>
		
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
	完整说明见：https://www.layui.com/doc/modules/layer.html
</body>
<script>
function clickButton(){
	var handle = doShowLoading();
	setTimeout("doHideLoading("+handle+")",1000);//1秒后关闭
}

function showErrorPage(){
	openDialog("普通iframe","http://www.baidu11.com","600px", "400px",2);
}
function normalIframe() {
	openDialog("普通iframe","http://www.baidu.com","1000px", "600px",2);
}

function modalIframe() {
	openDialog("模态iframe","http://www.baidu.com","1000px", "600px",2,true);
}

function normalDialog(){
	openDialog("普通页面内dialog","我是内容111111111！！！！","600px", "400px",0);
}

function modalDialog(){
	openDialog("模态页面内dialog","我是内容2222222！！！！","600px", "400px",0,true);
}

function alertwindow(){
	//墨绿深蓝风
	layer.alert('数据保存出错！sdffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', {
		  icon: 7,
		  area: ['400px', ''], //宽高
		  skin: 'layui-layer-molv' //样式类名
		  ,closeBtn: 0
	});
}

function alertwindow2(){
	//询问框
	layer.confirm('您是如何看待前端开发？', {
	  btn: ['确定','取消'] //按钮
	}, function(){
	  	//点击确定
	}, function(){
	 	//点击取消
	});
}


</script>
</html>