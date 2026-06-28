<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript">
	window.UEDITOR_HOME_URL = "<%=ViewUtil.getRequestPath(request)%>" + "static/js/platform/component/ueditor/"; 
</script>


<script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.js"></script>
<script type="text/javascript" charset="utf-8"  src="static/js/platform/component/ueditor/lang/zh-cn/zh-cn.js"></script>

<title>ueditor</title>
</head>
<body>
<div>

<script id="summary" name="summary" type="text/plain">
	//此处可以定义初始化要显示的值
</script>
<!-- 实例化编辑器 -->
<script type="text/javascript">
	  $(document).ready(function () {
	    var option = {
	      //initialContent : '',//初始化编辑器的内容
	      initialFrameHeight : 300,//设置初始化高度
	      initialFrameWidth : 880 , //设置初始化宽度
	      autoHeightEnabled : false, //定义是否高度自适应
	                   maximumWords:4000, //输入的字符最大长度
		  wordCount:true   // 开启右下角字符限制提示信息
	    };
	     var editor = new UE.ui.Editor(option);//初始化编辑器
	     editor.render("summary");//渲染编辑器
	  });
</script>

<xmp>
平台封装的Ueditor是采用开源的百度封装的富文本编辑器，可以参考官方网站：
http://ueditor.baidu.com/website/
由于平台需要兼容IE6浏览器，1.4.3以上版本将不再承诺支持ie6/ie7。平台封装的版本是1.4.2 该版本支持ie6+的浏览器。
4.8.1 添加页面
1）引入资源，并定义Ueditor的目录地址：
<script type="text/javascript">
	window.UEDITOR_HOME_URL = "<%=ViewUtil.getRequestPath(request)%>" + "static/js/platform/component/ueditor/"; 
</script>
<script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.js"></script>
<!--手动加载语言，避免在ie6下有时因为加载语言失败导致编辑器加载失败-->
<script type="text/javascript" charset="utf-8"  src="static/js/platform/component/ueditor/lang/zh-cn/zh-cn.js"></script>
       注意：必须定义变量：window.UEDITOR_HOME_URL，否则在ie6浏览器会出现样式文件无法加载的问题，语言信息手动加载，否则ie6浏览器会出现无法加载语言信息的问题
2）Ueditor定义：
   将字段与Ueditor绑定
<td colspan="3">
<script id="summary" name="summary" type="text/plain">
	//此处可以定义初始化要显示的值
</script>
<!-- 实例化编辑器 -->
<script type="text/javascript">
	  $(document).ready(function () {
	    var option = {
	      //initialContent : '',//初始化编辑器的内容
	      initialFrameHeight : 100,//设置初始化高度
	      initialFrameWidth : 580 , //设置初始化宽度
	      autoHeightEnabled : false, //定义是否高度自适应
	                   maximumWords:4000, //输入的字符最大长度
		  wordCount:true   // 开启右下角字符限制提示信息
	    };
	     var editor = new UE.ui.Editor(option);//初始化编辑器
	     editor.render("summary");//渲染编辑器
	  });
</script>
</td>
4.8.1 编辑页面
1）引入资源，并定义Ueditor的目录地址：
<script type="text/javascript">
	window.UEDITOR_HOME_URL = "<%=ViewUtil.getRequestPath(request)%>" + "static/js/platform/component/ueditor/"; 
</script>
<script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.js"></script>
<!--手动加载语言，避免在ie6下有时因为加载语言失败导致编辑器加载失败-->
<script type="text/javascript" charset="utf-8"  src="static/js/platform/component/ueditor/lang/zh-cn/zh-cn.js"></script>
2）Ueditor定义：
   将字段与Ueditor绑定，此处需要注意将Ueditor的内容与action层传来的json对象值绑定。
<td colspan="3">
<script id="summary" name="summary" type="text/plain">
	//此处可以定义初始化要显示的值
</script>
<!-- 实例化编辑器 -->
<script type="text/javascript">
	  $(document).ready(function () {
	    var option = {
	      initialContent : '${demoBusinessTripDTO.summary}',//绑定编辑器的内容
initialFrameHeight : 100,//设置高度
initialFrameWidth : 580 , //设置宽度
autoHeightEnabled : false,//是否高度自适应
maximumWords:4000, //输入的字符最大长度
wordCount:true   //开启右下角字符限制提示信息
	    };
	     var editor = new UE.ui.Editor(option); //初始化编辑器
	     editor.render("summary");
	  });
</script>
</td>
4.8.1 详细页面
1）引入资源，并定义Ueditor的目录地址：
<script src="static/js/platform/component/ueditor/ueditor.parse.min.js">
</script>
2）Ueditor定义：
     定义渲染的div并解析字段的值
<div data-options="region:'center',split:true,border:false" style="overflow-y:auto; overflow-x:auto;padding-bottom:35px;">
		<form id='form'>
			<input type="hidden" name="id" value='${demoBusinessTripDTO.id}'/>
				<table width="100%" style="padding-top: 10px;">
					<tr>
						 <td width="100%" align="center" >
							 <div id="summary" >

        					</div>
						</td>
					</tr>
				</table>
		</form>
	</div>
	<script type="text/javascript">
	    document.getElementById('summary').innerHTML = '${demoBusinessTripDTO.summary}' //绑定值
	       //rootPath指定ueditor所在的路径
	       uParse('#summary',{
	    	   rootPath: "<%=ViewUtil.getRequestPath(request)%>" + "static/js/platform/component/ueditor/"
	    });
	</script>      

</xmp>
</div>

</body>
</html>