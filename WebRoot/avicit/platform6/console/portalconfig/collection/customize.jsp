<%@ page language="java" contentType="text/html; charset=utf-8"
		 pageEncoding="utf-8"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess" %>
<%@ page import="org.apache.commons.lang.StringUtils" %>
<%
	String importlibs = "common,form,fileupload";

	String skinsValue =  (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN_TYPE);
	if(StringUtils.isEmpty(skinsValue)){
		skinsValue = "blue";
	}
//换肤样式
	String skinsStyle = (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN);
	if(skinsStyle == null){
		skinsStyle= "static/h5/skin/default.css";
	}

%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
	<title>添加</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<link rel="stylesheet" type="text/css" href="static/h5/skin/iconfont/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/todo/todo.css" />
	<link id="portlet-skin" rel="stylesheet" href="avicit/platform6/portal/portlet/skin/<%=skinsValue %>-portlet.css">
	<link  rel="stylesheet" href="<%=skinsStyle %>">
	<link rel="stylesheet" type="text/css" href="static/h5/skin/common.css" />
	<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<style>
		.subMenu ul{
			list-style:none;
			padding-left: 0px;
		}
		.subMenu li{
			float:left;
		}
		body.loaded {
			overflow: hidden;
		}
	</style>
</head>
<body>
<div class="customize-wrapper">
	<div class="customize-search">
	<div class="input-group input-group-sm">
		<input class="form-control" placeholder="输入名称查询" type="text" id="txt" name="txt" oninput="changeText();">
		<a class="delbtn icon iconfont icon-guanbi1" style="display: none"
			  id = "clearText"></a>
		<span class="input-group-btn">
			<button id="searchbtn" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
		</span>
	</div>
	</div>
	<div class="quick-menu-list">
		<div onclick="getAllChildMenu('selectedMenu');" id = "selectedMenu" class="active">
			<a href="javascript:void(0)" id = "selectedMenu_a">已选 (${selectMenuCount})</a>
		</div>
		<c:forEach items="${rootMenuList}" var="rootMenu">
			<div onclick="getAllChildMenu('${rootMenu.id}');" id = "${rootMenu.id}">
				<a href="javascript:void(0)">${rootMenu.menuName}</a>
			</div>
		</c:forEach>
	</div>
	<div class="quick-menu-content">
		<div>
			<span id="showResultCount" style="display: none"></span>
		</div>
		<div id="userlist" style="width: 500px; height: 380px; overflow: hidden;" >
			<table id="menuList"></table>
		</div>
	</div>
</div>
<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script type="text/javascript" src="avicit/platform6/console/portalconfig/collection/js/quickStart.js"></script>
<script type="text/javascript" src="avicit/platform6/console/portalconfig/collection/js/customize.js"></script>
<script src="static/js/platform/eform/widget.js"></script>
<script src="static/js/platform/eform/mouse.js"></script>
<script src="static/js/platform/eform/sortable.js"></script>
<script src="static/js/platform/eform/jquery-ui.min.js"></script>
<script type="text/javascript">
    var selectedCount = ${selectMenuCount};
    var customize;
    // 表格是否初始化标识
    var isInitGrid = false;
    // 菜单排序标识
	var menuOrder = 0;
	// 表格行是否拖动标识,多次禁用表格拖拽报错
	var changeTableRowStatus = false;
	var dataGridColModel = [
		{label: 'id', name: 'menuId', key: true, width: 20, hidden: true}
		, {label: '菜单名称', name: 'menuName', width: 20, align: 'left',sortable:false,
		formatter: function (cellvalue, options, rowObject) {
			var html = '';
			var menuIcon = rowObject.menuIcon;
			if (menuIcon != null && menuIcon != '') {
				html = html + '<span class="quick-menu-icon icon0' +
						(menuOrder%10 + 1)	+'"> <i class="'+ menuIcon +'"></i></span>';
			} else {
				html = html + '<span class="quick-menu-icon icon0' +
						(menuOrder%10 + 1)	+'"> <i class="icon iconfont icon-wendang"></i></span>';
			}

			menuOrder++;
			return html + '<em class="quick-menu-text">' + cellvalue + '</em>';
		}}
		, {label: '是否收藏',
			name: 'select',
			width: 20,
			align: 'right',
			sortable:false,
			formatter: function (cellvalue, options, rowObject) {
				var menuId = options.rowId;
				var activeId = $(".active").attr("id");
				// 只有已选择列表可拖动
				if (activeId == 'selectedMenu') {
					if (cellvalue) {
						return '<button type= "button" class="quick-menu-button" onclick="changeMenuStatus(' +
								cellvalue + ',\''+menuId+'\');">移除</button>' +
								'<span class="icon iconfont icon-drag1 quick-menu-dragbutton" title="拖动"></span>';
					} else {
						return '<button type= "button" class="quick-menu-addbutton" onclick="changeMenuStatus(' +
								cellvalue
						+ ',\''+menuId+'\');">添加</button>' +
						'<span class="icon iconfont icon-drag1 quick-menu-dragbutton" title="拖动"></span>';
					}
				} else {
					if (cellvalue) {
						return '<button type= "button" class="quick-menu-button" onclick="changeMenuStatus(' +
								cellvalue + ',\''+menuId+'\');">移除</button>';
					} else {
						return '<button type= "button" class="quick-menu-addbutton" onclick="changeMenuStatus(' +
						cellvalue + ',\''+menuId+'\');">添加</button>';
					}
				}
			}
		}
	];
	$(function(){
		// 默认选中已选列表
		getAllChildMenu('selectedMenu');

		$("#txt").on('keyup',function(e){
			if(e.keyCode == 13){
				onseach(13,$("#txt").val());
			}
		});
		$("#searchbtn").on('click',function(e){
			onseach(13,$("#txt").val());
		});
		$("#txt").on('focus',function(e){
			$("#selectedMenu").removeClass("active").siblings().removeClass("active");
		});
		$("#clearText").click(function () {
			$('#txt').val('');
			$("#clearText").hide();
		});
		//实例化transferLog
		// customize = new Customize('menuList',dataGridColModel);
	});

	function getAllChildMenu(obj) {
		// 清除搜索框
		$("#txt").val("");
		// 影藏搜索结果
		$("#showResultCount").hide();
		$("#"+obj).addClass("active").siblings().removeClass("active")
		if (isInitGrid) {
			var searchdata = {
				rootMenuId : obj,
				searchText: ""
			};

			$('#menuList').jqGrid('setGridParam', {
				datatype : 'json',
				postData : searchdata
			}).trigger("reloadGrid");

			// 已选择列表打开行拖拽，其他列表关闭
			if (obj == 'selectedMenu') {
				if (!changeTableRowStatus) {
					changeTableRow();
					changeTableRowStatus = true;
				}
			} else {
				if (changeTableRowStatus) {
					$("#menuList tbody").sortable("destroy");
					changeTableRowStatus = false;
				}
			}
		} else {
			isInitGrid = true;
			customize = new Customize("menuList", dataGridColModel, obj);
			changeTableRow();
			changeTableRowStatus = true;
		}
		// $("#"+obj).addClass("active").siblings().removeClass("active")
		// avicAjax.ajax({
		// 	cache: true,
		// 	type: "post",
		// 	url: "portal/getAllAvailableChildMenu",
		// 	dataType:"json",
		// 	data:{
		// 		rootMenuId : obj,
		// 	},
		// 	async: false,
		// 	error: function(request) {
		// 		layer.msg('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
		// 	},
		// 	success: function(data) {
		// 		var childMenus = data.responseBody;
		//
		// 		$("#userlist").empty();
		// 		var html = '';
		//
		// 		// 如果是已选列表，添加一键清空功能
		// 		if (obj == 'selectedMenu') {
		// 			html = html + '<a class="quick-menu-reset" onclick="trunkPersonalMenu();"><i class="icon iconfont icon-delete"></i> 一键清空</a>'
		// 		}
		// 		html = html + '<ul class="home-quick-menu">';
		// 		for(var i = 0; i < childMenus.length; i++) {
		// 			// 没有图标使用默认图标
		// 			html = html + '<li id="' + childMenus[i].menuId + '">';
		// 			if (childMenus[i].menuIcon == "" || childMenus[i].menuIcon == null) {
		// 				html = html + '<span class="quick-menu-icon icon01"> <i class="icon iconfont icon-wendang"></i></span>';
		// 			} else {
		// 				html = html + '<span class="quick-menu-icon icon01"> <i class="'+ childMenus[i].menuIcon +'"></i></span>';
		// 			}
		// 			html = html + '<em class="quick-menu-text">' + childMenus[i].menuName+ '</em><em class="collection" id="em_' + childMenus[i].menuId + '">';
		// 			if (childMenus[i].select == true) {
		// 				html = html +'<i class="icon iconfont icon-guanbi1"></i>';
		// 			} else {
		// 				html = html +'<i class="icon iconfont icon-radiooff"></i>';
		// 			}
		// 			html = html + '</em></li>';
		// 		}
		// 		html = html + '</ul>';
		// 		$("#userlist").append(html);
		//
		// 		$('ul li').bind('click',function(){
		// 			var value = $(this).attr("id");
		// 			var html = $('#em_'+value).html();
		// 			if(html.indexOf("icon-guanbi1") != -1){
		// 				delPersonalMenu(value);
		// 				return ;
		// 			}else{
		// 				var menuList = [];
		// 				menuList.push(value);
		// 				addMenu(menuList, value);
		// 			}
		// 		})
		// 	}
		// });
	}
	//取消收藏
	function delPersonalMenu(menuId) {
		avicAjax.ajax({
			url: "portal/deleteByMenuId",
			type: 'post',
			data:{
				menuIds:menuId
			},
			dataType: 'json',
			success: function (r) {
				if(r.flag=='success'){
					selectedCount--;
					$("#selectedMenu_a").text("已选 ("+ selectedCount +")")

					var activeId = $(".active").attr("id");
					// 如果右边选中是已选列表，则删除记录，否则修改按钮标识
					if (activeId == 'selectedMenu') {
						$('#menuList').jqGrid('delRowData', menuId);
					} else {
						$('#menuList').jqGrid('setCell', menuId, 'select', false);
					}
					// getAllChildMenu(activeId);
				} else{
					layer.alert('删除失败！' + r.data, {
								icon: 7,
								area: ['400px', ''], //宽高
								closeBtn: 0
							}
					);
				}
			}
		});
	}
	// 添加收藏
	function addMenu(toAddArray,menuId){
		avicAjax.ajax({
			url: "portal/saveMenu",
			type: 'post',
			data:{
				menuIds:toAddArray.join(";")
			},
			dataType: 'json',
			success: function (r) {
				if(r.flag=='success'){
					$('#em_'+menuId).html('<i class="icon iconfont icon-guanbi1"></i>');
					selectedCount++;
					$("#selectedMenu_a").text("已选 ("+ selectedCount +")")

					$('#menuList').jqGrid('setCell', menuId, 'select', true);
				} else{
					layer.alert('添加失败！' + r.data, {
								icon: 7,
								area: ['400px', ''], //宽高
								closeBtn: 0
							}
					);
				}
			}
		});
	}
	function changeTableRow() {
        //实现行拖拽
		$('#menuList').jqGrid('sortableRows',
				options = {
					update : function (e, ui) {
						// var id = ui.item[0].id;
						var activeId = $(".active").attr("id");
						// 获取所有数据id
						if (activeId == 'selectedMenu') {
							var dataIds = $("#menuList").getDataIDs();
							for(var i = 0; i < dataIds.length; i++) {
								var rowId = dataIds[i];
								var rowNumber = $('#menuList').getInd(rowId, false);
								// 更新数据库顺序
								updateMenuOrder(rowId, rowNumber);
							}
						}
					}
				}
		);
	}
</script>
</body>
</html>