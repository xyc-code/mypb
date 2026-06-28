<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
</HEAD>
<BODY>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
	<sec:accesscontrollist hasPermission="3" domainObject="formdialog_demoSingle_button_export" permissionDes="导出">
			<div class="dropdown">
				<a class="btn btn-primary form-tool-btn btn-sm" role="button"  href="javascript:void(0);" data-toggle="dropdown" id="dropdownMenu">下拉菜单 <span class="caret"></span></a>
				<!-- aria-labelledby一般用在区域元素上，对应的id一般为对应的标题或是标签元素的id.关系型属性 -->
				<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
					<!-- role = "presentation"表示陈述 -->
					<li role="presentation"><a href="#">测试工程师</a></li>
					<li role="presentation"><a href="#">开发工程师</a></li>
					<li role="presentation"><a href="#">销售经理</a></li>
					<li role="presentation" class="divider"></li>
					<li role="presentation"><a href="#">质量工程师</a></li>
					<li role="presentation"><a href="#">项目经理</a></li>
				</ul>
			</div>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_demoSingle_button_add" permissionDes="添加">
	  	<a id="demoSingle_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="添加"><i class="icon icon-add"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_demoSingle_button_edit" permissionDes="编辑">
		<a id="demoSingle_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="icon icon-edit"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_demoSingle_button_delete" permissionDes="删除">
		<a id="demoSingle_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="icon icon-delete"></i> 删除</a>
		</sec:accesscontrollist>
		
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="keyWord" id="keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="demoSingle_searchPart" class="icon icon-search form-tool-searchicon"></label>
     		<!-- <span class="input-group-btn">
       			<a id="demoSingle_searchAll" href="javascript:void(0)" class="btn btn-default btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
     		</span> -->
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="demoSingle_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>
<div id="searchDialog" style="overflow: auto;display: none">
</div>
</BODY>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript">
//打开高级查询框
$('#demoSingle_searchAll').bind('click',function(){
	var searchDiv = this;
	var contentWidth = 800;
	var top =  $(searchDiv).offset().top + $(searchDiv).outerHeight(true);
	var left = $(searchDiv).offset().left + $(searchDiv).outerWidth() - contentWidth;
	var text = $(searchDiv).text();
	var width = $(searchDiv).innerWidth();
	
	
	layer.config({
		  extend: 'skin/layer-bootstrap.css' // boostraps风格modal外框
	});
	
	layer.open({
		type: 1,
		shift: 5,
		title: false,
		scrollbar: false,
		move : false,
		area: [contentWidth + 'px', '400px'],
		offset: [top + 'px', left + 'px'],
		closeBtn: 0,
		shadeClose: true,
		btn: ['查询', '清空', '取消'],
		content: $("#searchDialog"),
		success : function(layero, index) {
			var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
			serachLabel.bind('click', function(){
				layer.close(index);
			});
			serachLabel.css('width', width + 'px');
		},
		yes: function(index, layero){
			_self.searchData();
			layer.close(index);
		},
		btn2: function(index, layero){
			_self.clearData();
			return false;
		},
		btn3: function(index, layero){
			
		}
	});
});
</script>
</HTML>