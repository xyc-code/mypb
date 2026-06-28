<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table";	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>菜单管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
<style type="text/css">
	.text-link{
	color:#ff6600;
	padding:0 2px;
	}
	.text-link:hover{
	color:#ff6600;
	}
</style>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<a id="menuPortal_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="icon icon-add"></i> 添加</a>
		
		<a id="menuportletModify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="icon icon-edit"></i> 编辑</a>
		
		<a id="menuPortal_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="icon icon-delete"></i> 删除</a>
		<span class="remind-text">◆ 提示：当您修改跳转地址内容后，需在<a id="portal" name="portal" href="javascript:void(0)"
					class="text-link" role="button"
					title="多栏目门户"> 多栏目门户 </a>重新配置才能生效</span>
	</div>
	<div class="toolbar-right">
		<div class="input-group form-tool-search">
			<input type="text" name="keyWord" id="keyWord" style="width:240px;" class="form-control input-sm" placeholder="输入名称或编码查询">
			<label id="searchPart" class="icon icon-search form-tool-searchicon"></label>
		</div>
		<div class="input-group-btn form-tool-searchbtn">
			<a id="searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
		</div>
	</div>
</div>
<table id="jqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id='form' style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="12%">小页名称:</th>
				<td width="38%">
					<input class="form-control" type="text" name="menuName" id="menuName" />
				</td>
				<th width="12%">小页编码:</th>
				<td>
					<input class="form-control" type="text" name="menuCode" id="menuCode" />
				</td>
			</tr>
			<tr>
				<th width="12%">小页地址:</th>
				<td width="38%">
					<input class="form-control" type="text" name="menuUrl" id="menuUrl" />
				</td>
				<th width="12%">跳转地址:</th>
				<td>
					<input class="form-control" type="text" name="moreUrl" id="moreUrl" />
				</td>
			</tr>
			<tr>
				<th>小页状态:</th>
				<td>
					<select class="form-control" name="menuStatus">
						<option value="">全部</option>
						<option value="1">启用</option>
						<option value="0">禁用</option>
						
					</select>
				</td>
				<th>小页描述:</th>
				<td>
					<input class="form-control" type="text" name="menuDes" id="menuDes" />
				</td>
			</tr>
			
		</table>
	</form>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="avicit/platform6/console/menu/js/Portlet.js" ></script>
<script type="text/javascript">
var menuPortal;
var fmtStatus =function(cellvalue){
	return menuPortal.MenuStatus[cellvalue];
};
function fmtMenuIcon(cellvalue, options, rowObject) {
	return '<i class="'+cellvalue+'" ></i>';
}
$(function(){
	var searchNames =[];
	searchNames.push("menuName");//用户可自定义查询条件，修改参数。
	searchNames.push("menuCode");
	
	var dataGridColModel =  [
      { label: 'id', name: 'id', key: true,  hidden:true },
      { label: '小页名称', name: 'menuName', width: 100 ,align:'center'},
      { label: '小页编码', name: 'menuCode', width: 100,align:'center' },
      { label: '小页地址', name: 'menuUrl', width: 250,align:'left'},
      { label: '小页状态', name: 'menuStatus', width: 50,align:'center',formatter:fmtStatus},
      { label: '跳转地址', name: 'moreUrl', width: 200,align:'left' },
      /*{ label: '小页图标', name: 'menuIcon', width: 50,align:'center',formatter:fmtMenuIcon },*/
      { label: '序号', name: 'menuOrder', width: 40,sortable:false,align:'center'}
	];
	menuPortal = new MenuPortlet('jqGrid','${url}','searchDialog','form','keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#menuPortal_insert').bind('click', function(){
		menuPortal.insert();
	});
	//编辑按钮绑定事件
	$('#menuportletModify').bind('click', function(){
		menuPortal.modify();
	});
	//删除按钮绑定事件
	$('#menuPortal_del').bind('click', function(){  
		menuPortal.del();
	});
	//查询按钮绑定事件
	$('#searchPart').bind('click', function(){
		menuPortal.searchByKeyWord();
	});
	//打开高级查询框
	$('#searchAll').bind('click',function(){
		menuPortal.openSearchForm(this);
	});

});

// 提示：当您修改跳转地址内容后，需在 多栏目门户 重新配置才能生效
$("#portal").on("click", function() {
	//此处id写死 在多组织下会存在重复打开的问题
	var cc = parent.parent.document.getElementById("mdiv");
	if(cc){
		openMainFrame("$门户配置", "platform/cc/portal/toPortalConfig", "8a58cd575f9444c7015f944c6bc300c5");
		$(".text-link").css({"color":"#ff6600","text-decoration":"none"});
	}else{
		openMainFrame("门户配置", "platform/console/portal/toPortalAndPortletConfig?type=jump", "8a58cd605c1b85cc015c1ba04ecf0087");
		$(".text-link").css({"color":"#ff6600","text-decoration":"none"});
	}

});
function openMainFrame(title,url,id){
			//tab标题长度大于10个字符,截取前10个,后面的显示为...
			var preTitle = title;
			if(title != null && title != '' && title != undefined ){
				if(title.length > 10){
					title = title.substr(0,10) + "...";
				}
			}
			if(!url) return;
			 var exist=false;
				var tabIndex=0;
				var allTabs=top.$('#tabs-panel').tabs('tabs');
				for(var i=0;i<allTabs.length;i++){
					var tab=allTabs[i];
					if(tab.attr("id")==id){
						exist=true;
						tabIndex=top.$('#tabs-panel').tabs('getTabIndex',tab);
						break ;
					};
				}
				if (!exist && url != undefined && url != "") {
					top.$('#tabs-panel').tabs('add', {
						title: title,
						content:  '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
						closable: true
					});
				} else {
					top.$('#tabs-panel').tabs('select', tabIndex); //匹配到title，就显示这个窗口
				}
				//获取当前添加的tab并增加title属性
							var currentTab = top.$('#tabs-panel').tabs('getSelected');
							if(currentTab != null && currentTab != '' && currentTab != undefined){
								currentTab.attr("title",preTitle);
								currentTab.attr("id",id);
							}
							$('.tabs-icon').remove();
}
</script>
</html>