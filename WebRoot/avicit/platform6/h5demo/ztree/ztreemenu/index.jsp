<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
	<TITLE> ZTREE DEMO - Standard Data </TITLE>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="static/h5/bootstrap/3.3.4/css_default/bootstrap-theme.min.css" type="text/css">
<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/metro.css" />
	<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="static/h5/jquery-ztree/3.5.12/js/jquery.ztree.all-3.5.js"></script>


	<SCRIPT type="text/javascript">
	    var firstAsyncSuccessFlag = 0;

		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), {
				view: {
					selectedMulti: false
				},
				data: {
					key: {
						id: "id",
						name: "name",
						checked: "checked"
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
					url:"ztree/ztreemenu/ztreeMenuController/getZtreeMenuByParentID",
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
						if (firstAsyncSuccessFlag == 0) {
							 //展开根节点
			                 var zTree = $.fn.zTree.getZTreeObj(treeId); 
			                 var nodes = zTree.getNodes();  
			                 zTree.expandNode(nodes[0], true);  
			                 firstAsyncSuccessFlag = 1;   
						 }  
					}
				}
			},[]);
		});
		
		//--------------------------------------------------------------------------------------------------
		var firstAsyncSuccessFlag1 = 0;
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo1"), {
				view: {
					selectedMulti: false
				},
				check: {
					enable: true
				},
				data: {
					key: {
						id: "id",
						name: "name"
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
					url:"ztree/ztreemenu/ztreeMenuController/getZtreeMenuByParentID",
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
						if (firstAsyncSuccessFlag1 == 0) {
							 //展开根节点
			                 var zTree = $.fn.zTree.getZTreeObj(treeId); 
			                 var nodes = zTree.getNodes();  
			                 zTree.expandNode(nodes[0], true);
			                 firstAsyncSuccessFlag1 = 1;
						 }  
					}
				}
			},[]);
		});
		function getnodes(){
			var zTree = $.fn.zTree.getZTreeObj('treeDemo1');
			var nodes = zTree.getCheckedNodes(true);
			var retStr = "";
			for(var i = 0; i < nodes.length; i++ ){
				if(nodes[i].isParent != true){  //只取末级
					retStr = retStr + nodes[i].id + ",";
				}
			}
			alert(retStr);
		}
		
		
		//------------------------------------------------------------------------------------------------
		var treeDemo2 = null;
		var firstAsyncSuccessFlag2 = 0;
		var setting = {
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
			view: {
				fontCss: function(treeId, treeNode) {
					return (!!treeNode.highlight) ? {color:"#FF0000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
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
				view: {
					fontCss: function(treeId, treeNode) {
						return (!!treeNode.highlight) ? {color:"#FF0000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
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
				if(nodes[i].isParent != true){  //只取末级
					retStrid = retStrid + nodes[i].id + ",";
					retStrName = retStrName + nodes[i].text + ",";
				}
			}
			
			$("#menuid").val(retStrid);
			$("#menuName").val(retStrName);
			$("#treeDemo3_div").hide();
		
		};
	</SCRIPT>
</HEAD>

<BODY>
<div>
	<p style="font-size:11px"> 不带选择框，默认加载一层</p>
	<div>
		<ul id="treeDemo" class="ztree"></ul>
	</div> 
	<br>
    <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="100%" color=#987cb9 SIZE=10>
    <br>
    <p style="font-size:11px"> 带选择框</p>
	<div>
		<ul id="treeDemo1" class="ztree"></ul>
	</div>
	<input type="button" onclick="getnodes()" value="点击取选择节点">
	<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="100%" color=#987cb9 SIZE=10>
    <p style="font-size:11px"> 带查找的树</p>

	<div class="row">
		<div class="col-lg-3">
			<div class="input-group">
		      <input  class="form-control" placeholder="回车查询" type="text" id="txt" name="txt"  onkeyup="onseach(event.keyCode, this.value)">
		      <span class="input-group-btn">
		        <button class="btn btn-default" type="button" onclick="onseach(13, $('#txt').val())"><span class="glyphicon glyphicon-search"></span></button>
		      </span>
		    </div>
			<div>
				<ul id="treeDemo2" class="ztree"></ul>
			</div>
		</div>
		<div class="col-lg-3">
			<div class="input-group  input-group-sm">
				<input type="hidden" id="menuid" name="menuid">
   				<input class="form-control"  type="text" id="menuName" name="menuName" value="" onclick="$('#treeDemo3_div').show();" placeholder="菜单名称">
   				<span class="input-group-btn">
   					<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" onclick="$('#treeDemo3_div').show();"><span class="caret"></span></button>
   				</span>
	            <div id="treeDemo3_div"  class="dropdown-menu" style="width:100%" style="display: none;" >
	            	<button class="btn btn-default btn-sm"  type="button" onclick="treeSelect();" >提交</button>
	            	<div class="input-group  input-group-sm" style="width:100%">
				      <input  class="form-control" placeholder="回车查询" style="width:100%" type="text" id="txt2" name="txt2"  onkeyup="onseach3(event.keyCode, this.value)">
				      <span class="input-group-btn">
				      	<button class="btn btn-default" type="button" onclick="onseach3(13, $('#txt2').val())"><span class="glyphicon glyphicon-search"></span></button>
				   	  </span>
				    </div>
	            	<ul id="treeDemo3" class="ztree"></ul>
	            </div>
            </div>
		</div>
	</div>
</div>
</BODY>
</HTML>