<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
<TITLE>ZTREE DEMO - Standard Data</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<link rel="stylesheet"
	href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css"
	type="text/css">
<link rel="stylesheet"
	href="static/h5/bootstrap/3.3.4/css_default/bootstrap-theme.min.css"
	type="text/css">
<link rel="stylesheet" type="text/css"
	href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/metro.css" />
<link rel="stylesheet" type="text/css"
	href="static/h5/singleLayOut/themes/easyui-bootstrap.css">

<script type="text/javascript"
	src="static/h5/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript"
	src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script type="text/javascript"
	src="static/h5/jquery-ztree/3.5.12/js/jquery.ztree.all-3.5.js"></script>
<script type="text/javascript"
	src="static/h5/singleLayOut/easyloader.js"></script>
<script type="text/javascript"
	src="static/h5/singleLayOut/src/jquery.resizable.js"></script>
<script type="text/javascript"
	src="static/h5/singleLayOut/plugins/jquery.panel.js"></script>
<script type="text/javascript"
	src="static/h5/singleLayOut/plugins/jquery.layout.js"></script>

<!--[if lt IE 9]>
	<script src="static/h5/html5shiv/dist/html5shiv.min.js"></script>
	<script src="static/h5/respond/dest/respond.min.js"></script>
	<![endif]-->
<script>
		var treeDemo2 = null;
		var firstAsyncSuccessFlag2 = 0;
		var setting = {
			view: {
				selectedMulti: false
			},
			data: {
				key: {
					id: "id",
					name: "text",
					children: "children"
				},
				simpleData: {
					enable: true,
					idKey: "id",
					pIdKey: "parentId",
					rootPId: -1
				}
			},
			async: {
				enable: true,
				url:"ztree/ztreemenu/ztreeMenuController/gettree/2",
				autoParam:["id"],
				dataFilter: function(treeId, parentNode, childNodes){
					 if (!childNodes)
			            return null;
			        childNodes = eval(childNodes);
			        return childNodes;
				}
			},
			callback: {
				onAsyncError:  function(){alert("加载失败！");},
				onAsyncSuccess:  function(event, treeId, msg){
					if (firstAsyncSuccessFlag2 == 0) {
		                 var nodes = treeDemo2.getNodes();  
		                 treeDemo2.expandNode(nodes[0], true);  
		                 firstAsyncSuccessFlag2 = 1;   
					 }  
				}
			}
			
		};
		
		$(document).ready(function(){
			treeDemo2 = $.fn.zTree.init($("#treeDemo2"),setting, []);
		});
		
		function onseach(ecode, value){
			if(ecode == 13){
				if(value==null||value==""){
					treeDemo2 = $.fn.zTree.init($("#treeDemo2"),setting, []);
	        		return;
	        	}
	        	$.ajax({
	                cache: true,
	                type: "post",
	                url: "ztree/ztreemenu/ztreeMenuController/search",
	                dataType:"json",
	                data:{search_text:value},
	                async: false,
	                error: function(request) {
	                	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
	                },
	                success: function(data) {
	                	$.fn.zTree.init($("#treeDemo2"), {
	            			view: {
	            				selectedMulti: false
	            			},
	            			data: {
	            				key: {
	            					id: "id",
	            					name: "text",
	            					children: "children"
	            				},
	            				simpleData: {
	            					enable: false,
	            					idKey: "id",
	            					pIdKey: "parentId",
	            					rootPId: -1
	            				}
	            			}
	            			
	            		}, data);
	                }
	            });
			}
		}
	
		//------------------------------------------------------------------------------------------------
		var treeDemo3 = null;
		var firstAsyncSuccessFlag3 = 0;
		$(document).ready(function(){
			treeDemo3 = $.fn.zTree.init($("#treeDemo3"), {
				view: {
					selectedMulti: false
				},
				check: {
					enable: true
				},
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
				async: {
					enable: true,
					url:"ztree/ztreemenu/ztreeMenuController/gettree/2",
					autoParam:["id"],
					dataFilter: function(treeId, parentNode, childNodes){
						 if (!childNodes)
				            return null;
				        childNodes = eval(childNodes);
				        return childNodes;
					}
				},
				callback: {
					onAsyncError:  function(){alert("加载失败！");},
					onAsyncSuccess:  function(event, treeId, msg){
						if (firstAsyncSuccessFlag3 == 0) {
			                 var nodes = treeDemo3.getNodes();  
			                 treeDemo3.expandNode(nodes[0], true);  
			                 firstAsyncSuccessFlag3 = 1;   
						 }  
					}
				}
				
			}, []);
		});
		
		function onseach3(ecode, value){
			if(ecode == 13){
				if(value==null||value==""){
					treeDemo3 = $.fn.zTree.init($("#treeDemo3"),setting, []);
	        		return;
	        	}
	        	$.ajax({
	                cache: true,
	                type: "post",
	                url: "ztree/ztreemenu/ztreeMenuController/search",
	                dataType:"json",
	                data:{search_text:value},
	                async: false,
	                error: function(request) {
	                	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
	                },
	                success: function(data) {
	                	$.fn.zTree.init($("#treeDemo3"), {
	            			view: {
	            				selectedMulti: false
	            			},
	            			check: {
	            				enable: true
	            			},
	            			data: {
	            				key: {
	            					id: "id",
	            					name: "text",
	            					children: "children"
	            				},
	            				simpleData: {
	            					enable: false,
	            					idKey: "id",
	            					pIdKey: "parentId",
	            					rootPId: -1
	            				}
	            			}
	            			
	            		}, data);
	                }
	            });
			}
		};

		
		function treeSelect(){
			var nodes = treeDemo3.getCheckedNodes(true);
			var retStrid = "", retStrName="";
			
			for(var i = 0; i < nodes.length; i++ ){
				retStrid = retStrid + nodes[i].id + ",";
				retStrName = retStrName + nodes[i].text + ",";
			}
			
			$("#menuid").val(retStrid);
			$("#menuName").val(retStrName);
			$("#treeDemo3_div").hide();
		
		};
		
		//------------------------------------------------------------------------------------------------
		var treeDemo4 = null;
		var firstAsyncSuccessFlag4 = 0;
		var setting4 = {
			view: {
				selectedMulti: false
			},
			data: {
				key: {
					id: "id",
					name: "text",
					children: "children"
				},
				simpleData: {
					enable: true,
					idKey: "id",
					pIdKey: "parentId",
					rootPId: -1
				}
			},
			async: {
				enable: true,
				url:"h5/view/common/select/SelectController/getUserSelectList",
				autoParam:["id","nodeType","orgId"],
				dataFilter: function(treeId, parentNode, childNodes){
					if (!childNodes)
			            return null;
			        return childNodes;
				}
			},
			callback: {
				onAsyncError:  function(){alert("加载失败！");},
				onAsyncSuccess:  function(event, treeId, msg){
					if (firstAsyncSuccessFlag4 == 0) {
		                 var nodes = treeDemo4.getNodes();  
		                 treeDemo4.expandNode(nodes[0], true);  
		                 firstAsyncSuccessFlag4 = 1;   
					 }  
				}
			}
			
		};
		$(document).ready(function(){
			treeDemo4 = $.fn.zTree.init($("#treeDemo4"),setting4, []);
		});
		
	</SCRIPT>
</HEAD>

<BODY>
	<div class="easyui-layout" fit="true">
		<div data-options="region:'east',split:true" title="East"
			style="width: 300px;">
			<div>
				<ul id="treeDemo4" class="ztree"></ul>
			</div>
		</div>
		<div data-options="region:'west',split:true" title="West"
			style="width: 300px;">
			<div class="row" style="margin: 5px;">
				<div class="input-group  input-group-sm">
					<input class="form-control" placeholder="回车查询" type="text" id="txt"
						name="txt" onkeyup="onseach(event.keyCode, this.value)"> <span
						class="input-group-btn">
						<button class="btn btn-default" type="button"
							onclick="onseach(13, $('#txt').val())">
							<span class="glyphicon glyphicon-search"></span>
						</button>
					</span>
				</div>
				<div>
					<ul id="treeDemo2" class="ztree"></ul>
				</div>
			</div>
		</div>
		<div data-options="region:'center',title:'Main Title'">
			<div class="row" style="margin: 5px;">
				<label class="control-label" for="menuName">对应菜单: </label>
				<div class="input-group  input-group-sm">
					<input type="hidden" id="menuid" name="menuid"> <input
						class="form-control" type="text" id="menuName" name="menuName"
						value="" onclick="$('#treeDemo3_div').show();" placeholder="菜单名称">
					<span class="input-group-btn">
						<button type="button" class="btn btn-default dropdown-toggle"
							data-toggle="dropdown" onclick="$('#treeDemo3_div').show();">
							<span class="glyphicon glyphicon-chevron-down"></span>
						</button>
						<button type="button" class="btn btn-default dropdown-toggle"
							data-toggle="dropdown"
							onclick="$('#menuid').val('');$('#menuName').val('');">
							<span class="glyphicon glyphicon-remove"></span>
						</button>
					</span>
					<div id="treeDemo3_div" class="dropdown-menu" style="width: 100%"
						style="display: none;">
						<button class="btn btn-default btn-sm" type="button"
							onclick="treeSelect();">提交</button>
						<div class="input-group  input-group-sm" style="width: 100%">
							<input class="form-control" placeholder="回车查询"
								style="width: 100%" type="text" id="txt2" name="txt2"
								onkeyup="onseach3(event.keyCode, this.value)"> <span
								class="input-group-btn">
								<button class="btn btn-default" type="button"
									onclick="onseach3(13, $('#txt2').val())">
									<span class="glyphicon glyphicon-search"></span>
								</button>
							</span>
						</div>
						<ul id="treeDemo3" class="ztree"></ul>
					</div>
				</div>
			</div>
			<div class="row" style="margin: 5px;">

				<div class="dropdown">
					<a class="btn btn-primary form-tool-btn btn-sm" role="button"  href="javascript:void(0);" data-toggle="dropdown" id="dropdownMenu">下拉菜单 <span class="caret"></span></a>
					<!-- aria-labelledby一般用在区域元素上，对应的id一般为对应的标题或是标签元素的id.关系型属性 -->
					<ul class="dropdown-menu" role="menu"
						aria-labelledby="dropdownMenu">
						<!-- role = "presentation"表示陈述 -->
						<li role="presentation"><a href="#">测试工程师</a></li>
						<li role="presentation"><a href="#">开发工程师</a></li>
						<li role="presentation"><a href="#">销售经理</a></li>
						<li role="presentation" class="divider"></li>
						<li role="presentation"><a href="#">质量工程师</a></li>
						<li role="presentation"><a href="#">项目经理</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</BODY>
</HTML>