
/**
 * 启用遮罩
 */
function doShowLoading(){
	return top.layer.msg('努力加载中...', {icon: 16,shade: [0.3, '#000000'],scrollbar: false, time:100000}) ;//弹出遮罩
}

/**
 * 隐藏遮罩
 */
function doHideLoading(handle){
	top.layer.close(handle);
}

/**
 * 使用此控件需在平台index.jsp中增加js引用，以使弹窗基于最顶层出现，并使遮罩全屏出现。此方法以后需放到公用js中
 * type: 0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
 * shae: 不输入或false为无遮罩， true为有遮罩
 */
function openDialog(title,url,width,height,opentype,shade){
	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){//如果是移动端，就使用自适应大小弹窗
		width='auto';
		height='auto';
	}else{//如果是PC端，根据用户设置的width和height显示。

	}
	top.layer.config({
	  extend: 'skin/layer-bootstrap.css' // boostraps风格modal外框
	});
	top.layer.open({
	    type: opentype,
	    area: [width, height],
	    title: title,
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:  shade?0.3:0,
        maxmin: true, //开启最大化最小化按钮
	    content: url ,
	    btn: ['确定', '关闭'],
	    yes: function(index, layero){
	    	 var body = top.layer.getChildFrame('body', index);
	         var iframeWin = layero.find('iframe')[0]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
	         var inputForm = body.find('#inputForm');
	        if(iframeWin.contentWindow.doSubmit() ){  //执行form的submit方法
	        	// top.layer.close(index);//关闭对话框。
	        	  setTimeout(function(){top.layer.close(index)}, 100);//延时0.1秒，对应360 7.1版本bug
	         }
		  },
		  cancel: function(index){
	       }
	});
}