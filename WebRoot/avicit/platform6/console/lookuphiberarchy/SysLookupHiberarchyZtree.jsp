<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<% String importlibs = "common,tree,table,form";%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>父级菜单选择</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">

	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
	<style type="text/css">
		.fmt_opt{
			min-width: 8px;

		}
		.jqgrow td a {
			color:#fff;
		}
		.ztree li span.button.switch{
			left: 26px;
		}
		.cum-icon{
			width: 15px !important;
			height: 17px !important;
			position: absolute;
			top: 10px;
			left: 30px;
			z-index: 2
		}
		.ztree li span.button.roots_docu:before {
			content: "";
		}
		.ztree li span.button.ico_open:before {
			content: "";
		}
		/*修改ztree收缩展开图标
		.ztree li span.button.roots_open,
		.ztree li span.button.roots_close,
		.ztree li span.button.bottom_open,
		.ztree li span.button.bottom_close{
			color: #222222;
			font-size: 18px;
			font-weight: 800;
		}
		.ztree li span.button.roots_open:before {
			font-family: iconfont;
			content: "\e6cd";
		}
		.ztree li span.button.roots_close:before {
			font-family: iconfont;
			content: "\e712";
		}
		.ztree li span.button.bottom_open:before {
			font-family: iconfont;
			content: "\e6cd";
		}
		.ztree li span.button.bottom_close:before {
			font-family: iconfont;
			content: "\e712";
		}
		.ztree li span.button.roots_docu:before{
			content: "";
		}
		.ztree li span.button.ico_open:before {
			 content: "";
		}
		.ztree li span.button.ico_docu:before {
			font-family: "iconfont";
			content: "\e644";
		}*/
	</style>
</head>
<body class="easyui-layout" fit="true">

<div data-options="region:'center',split:true" style="width: 250px;border-top-style: hidden;">
	<div id="tableToolbarM" class="toolbar" >
		<div class="toolbar-left" style="width: 96%;">
			<div class="input-group input-group-sm" style="width: 100%;">
				<input class="form-control" placeholder="输入名称查询" type="text" id="sysLookupHiberarchyKeyWord" name="sysLookupHiberarchyKeyWord" autocomplete="off">
				<span class="input-group-btn">
        <button id="sysLookupHiberarchySearchbtn" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
        </span>
			</div>
		</div>
	</div>
	<div id='div' style="overflow:auto;">
		<ul id="sysLookupHiberarchyZtree" class="ztree"></ul>
	</div>
</div>
</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="avicit/platform6/console/lookuphiberarchy/js/SysLookupHiberarchyZtree.js" ></script>

<script type="text/javascript">
    $('#div').height(document.documentElement.clientHeight-46);
    var sysLookupHiberarchyZtree;
    $(function(){
        sysLookupHiberarchyZtree = new SysLookupHiberarchyZtree('sysLookupHiberarchyZtree',
																'${url}',
																'sysLookupHiberarchySearchbtn',
																'sysLookupHiberarchyKeyWord',
																'${expandNodes}',
																'${treeUniqueKey}',
																'${treeDepth}');
	});
    //获取当前选中的节点
    function getSelectedNode(){
        return sysLookupHiberarchyZtree.getSelectedNode();
    }
</script>
</html>