<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
<p>
		属性说明：<br>
	            type: 1, // 默认1为页面层 2位iframe层<br>
                shift:3, // 下拉框动画 参数通layer的shift<br>
                listType: 1, // 子项的布局，1为竖向List，2位横向自适应块,只在data渲染时有效<br>
                ipt: that.find(".form-control"), // 回填框对象<br>
                action: '.avicselect-act', // 按钮框对象<br>
                height: 'auto', // 列表默认高<br>
                multi: true, // 默认数据回填有多字段时分别回填对应input<br>
                data: '', // 数据渲染的data<br>
                format: '', // data对象的数据的回填格式<br>
                showkey: 'name', // 如果用数据渲染时，选择展示的字段<br>
                listen: '.av-child', // 目标子选项<br>
                content: that.find('.avicselect-list'), // 内容区<br>
                tpl: '', // 模板<br>
                findDom:that, // 搜索回填区域的对象<br>
                dataBind: '', // 过滤不回填的数据 string/arr<br>
                delimit: ',', // 多选中时的分隔符<br>
                multi: false, //多选<br>
                success: ''// 自定义方法<br>
	</p>

    <div class="main">   
        <div class="row">
            <div class="col-lg-4" style="height: 200px;">
                <h3>data List例子 - 此例子预设了对应input，默认使用hidden的input</h3>
                <div id="test6" class="input-group input-group-sm avicselect">
                    <input type="hidden" name="key" id="key">
                    <input type="text" class="form-control">
                    <span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
                    <div class="avicselect-list"></div>
                </div>
            </div>
        </div>
    </div>
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script>
		$(function() {
			var searchdata = {
					code_: 'SELECT_SYS_LOOKUP_TYPE'
				}
			avicAjax.ajax({
				 url:"console/sysdefinedselect/operation/getInitCustomInfo",
				 data : {data :JSON.stringify(searchdata)},
				 type : 'post',
				 dataType : 'json',
				 success : function(r){
					 if (r.flag == "success"){
						 $('#test6').avicselect({
						        type: 1,
						        format:"VALUE(KEY)", //参数永和可以根据需求自己修改
						        dataBind:{'KEY':'key'},
						        data: r.rows,
						        tpl: '<ul>' +
					            '<@for ( var index in this ) {@>' +
					            '<li class="av-child" data-val=\'<@ JSON.stringify(this[index])@>\'><@ this[index].VALUE @></li>' +
					            '<@}@>' +
					            '</ul>'
						    });
					 }else{
						 layer.alert('保存失败！' + r.error, {
							  icon: 7,
							  area: ['400px', ''], //宽高
							  closeBtn: 0
							}
						);

					 } 
				 }
			 });
		});
	</script>
	</body>
</html>



