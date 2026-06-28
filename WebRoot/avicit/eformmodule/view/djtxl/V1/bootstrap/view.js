function bpmFormatter(cellvalue, options, rowObject){
   var bussinesid =  rowObject.ID;                                                 
   if(rowObject.PROCESSINSTANCEID !=null && rowObject.PROCESSINSTANCEID!=undefined && rowObject.PROCESSINSTANCEID !=''){ 
   	bussinesid = rowObject.PROCESSINSTANCEID;
   }
   if(rowObject.BUSINESSSTATE_!=null&&rowObject.BUSINESSSTATE_!=""&&rowObject.BUSINESSSTATE_!='undefined'){
	  return "<span class='glyphicon glyphicon-pencil' onclick='javascript: flowUtils.detail(\""+ bussinesid +"\",2);'></span>";
	}else{return '';}
}
function bpmStatusFormatter(cellvalue, options, rowObject){
	  if(cellvalue=='start')return '拟稿中'; if(cellvalue=='active')return '流转中'; if(cellvalue=='ended')return '已完成';return '';
	}

function redraw948e83e382802cb7018280519fdd1ce7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e382802cb7018280519fdd1ce7").width();
		var win_height = $("#948e83e382802cb7018280519fdd1ce7").height();
		$('#948e83e382802cb7018280519fdd1ce7').layout('panel', 'center').panel('resize',{width:win_width*0.8,height:win_height*1.0});
		$('#948e83e382802cb7018280519fdd1ce7').layout('panel', 'west').panel('resize',{width:win_width*0.2,height:win_height*1.0});
		$('#948e83e382802cb7018280519fdd1ce7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e382802cb7018280519fdd1ce7").width();
	setTimeout(function(){redraw948e83e382802cb7018280519fdd1ce7(win_width);},500);
});
var tree9a343ac62b122c4930f80c990b6a9b46d7beOnExpand = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var tree9a343ac62b122c4930f80c990b6a9b46d7beOnAsyncSuccess = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event, treeId, msg){
					oldFunc(event, treeId, msg);
					fun(event, treeId, msg);
				}
			}
		},
		exec:function(event, treeId, msg){
			if (typeof this.func == 'function')
               this.func(event, treeId, msg);
		}
};
var tree9a343ac62b122c4930f80c990b6a9b46d7beOnClick = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var tree9a343ac62b122c4930f80c990b6a9b46d7beOnCheck= {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var tree9a343ac62b122c4930f80c990b6a9b46d7beOnDblClick = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var tree9a343ac62b122c4930f80c990b6a9b46d7beOnCollapse = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var tree9a343ac62b122c4930f80c990b6a9b46d7beBeforeAsync = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(treeId,treeNode){
					oldFunc(treeId,treeNode);
					fun(treeId,treeNode);
				}
			}
		},
		exec:function(treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(treeId,treeNode);
		}
};
function tree9a343ac62b122c4930f80c990b6a9b46d7beReload(pid){     
	var _isInvalid = true;
	$("#tree9a343ac62b122c4930f80c990b6a9b46d7be").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tree9a343ac62b122c4930f80c990b6a9b46d7bePid = pid;
		}
		return false;
	}
	window.tree9a343ac62b122c4930f80c990b6a9b46d7bePid = null;
   var zTree = $.fn.zTree.getZTreeObj("tree9a343ac62b122c4930f80c990b6a9b46d7be"); 
   var newsetting = zTree.setting; 
	  newsetting.async.url =  "platform/eform/bpmsCRUDClient/gettree/2";
	var rootid  = "-1"
   newsetting.async.otherParam.rootid = pid || rootid; 
   $.fn.zTree.init($("#tree9a343ac62b122c4930f80c990b6a9b46d7be"), newsetting, []);    }
function tree9a343ac62b122c4930f80c990b6a9b46d7beTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tree9a343ac62b122c4930f80c990b6a9b46d7bePid == 'undefined' || window.tree9a343ac62b122c4930f80c990b6a9b46d7bePid!=null){
tree9a343ac62b122c4930f80c990b6a9b46d7beReload(window.tree9a343ac62b122c4930f80c990b6a9b46d7bePid);
}
}
;$(document).ready(function(){ 

		$(".ztree").each(function(){
			var _this = this;
			setTimeout(function(){
				var parentdivh = $(_this).parent().parent().height();
				var treeHeight = parentdivh-$("#txt_tree9a343ac62b122c4930f80c990b6a9b46d7be").height()-10;
				$(_this).css("height",treeHeight);
			},400);
		});
		$(".ztree").css("overflow","auto");
      var setting = {                                                                  
		view: {                                                                           
			selectedMulti: false,                                                          
			fontCss: tree9a343ac62b122c4930f80c990b6a9b46d7besetFontCssBySearch                                         
		},                                                                                
		check: {                                                                           
			enable: false,                                                                 
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
				rootPId: "-1"                                                               
			}                                                                             
		},                                                                                
		async: {                                                                          
			enable: true,                                                                 
			autoParam:["id","level"],                                                             
			otherParam:{"dbid":"948e83e37f8c9f39017f913e40501865","pid":"ID","nodeid":"ID","nodename":"ID","orderStr":"ID asc ", 
                         "rootid":"-1",
                     "viewid":"948e83e382802cb7018280519fdd1ce7","treeid":"tree9a343ac62b122c4930f80c990b6a9b46d7be"
                     },                                                                
			dataFilter: function(treeId, parentNode, childNodes){                         
				if (!childNodes)                                                          
		            return null;                                                          
		        childNodes = eval(childNodes);                                            
		        return childNodes;                                                        
			}                                                                             
		},                                                                                
callback: {
        onClick:function(event,treeId,treeNode){tree9a343ac62b122c4930f80c990b6a9b46d7beOnClick.exec(event,treeId,treeNode);},
        onExpand:function(event,treeId,treeNode){tree9a343ac62b122c4930f80c990b6a9b46d7beOnExpand.exec(event,treeId,treeNode);},
        onCollapse:function(event,treeId,treeNode){tree9a343ac62b122c4930f80c990b6a9b46d7beOnCollapse.exec(event,treeId,treeNode);},
        beforeAsync:function(treeId,treeNode){$("#tree9a343ac62b122c4930f80c990b6a9b46d7benorecords").hide();tree9a343ac62b122c4930f80c990b6a9b46d7beBeforeAsync.exec(treeId,treeNode);},
        onDblClick:function(event,treeId,treeNode){tree9a343ac62b122c4930f80c990b6a9b46d7beOnDblClick.exec(event,treeId,treeNode);},
        onCheck:function(event,treeId,treeNode){tree9a343ac62b122c4930f80c990b6a9b46d7beOnCheck.exec(event,treeId,treeNode);},
			onAsyncError:  function(){alert("加载失败！");},                              
        onAsyncSuccess:  function(event,treeId,msg){
							var zTree = $.fn.zTree.getZTreeObj(treeId);
                         var node = zTree.getSelectedNodes()[0];
                         if (!node) {
                             var nodes = zTree.getNodes();
                             if (nodes.length>0){
                           	    node = nodes[0];
                            	    zTree.selectNode(nodes[0]);
                        	    }else{
					        		if ($("#tree9a343ac62b122c4930f80c990b6a9b46d7benorecords").html() == null) {
										$("#tree9a343ac62b122c4930f80c990b6a9b46d7be").append("<div class='no_data' id='tree9a343ac62b122c4930f80c990b6a9b46d7benorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
									}
				    setTimeout(function(){var height = $("#tree9a343ac62b122c4930f80c990b6a9b46d7be").height();
					$("#tree9a343ac62b122c4930f80c990b6a9b46d7benorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tree9a343ac62b122c4930f80c990b6a9b46d7benorecords img").css("width","120px");
                 }else{
					    $("#tree9a343ac62b122c4930f80c990b6a9b46d7benorecords img").css("width",(height/1.9)+"px");
                 }},100);
									$("#tree9a343ac62b122c4930f80c990b6a9b46d7benorecords").show();
                             }
                        	 }
                           zTree.setting.callback.onClick(null, zTree.setting.treeId, node);
                           tree9a343ac62b122c4930f80c990b6a9b46d7beOnAsyncSuccess.exec(event, treeId, msg);},
						}
	    };
   $.fn.zTree.init($("#tree9a343ac62b122c4930f80c990b6a9b46d7be"),setting, []);
$("#txt_tree9a343ac62b122c4930f80c990b6a9b46d7be").on('keyup',function(e){
     if(e.keyCode == 13){
     var text = $("#txt_tree9a343ac62b122c4930f80c990b6a9b46d7be").val();
     var pattern=/[`~!@#$%^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
     text = text.replace(pattern,"");                                  
     tree9a343ac62b122c4930f80c990b6a9b46d7beSearch(text);
     }
});
$("#searchbtns_tree9a343ac62b122c4930f80c990b6a9b46d7be").click(function () {
     var text = $("#txt_tree9a343ac62b122c4930f80c990b6a9b46d7be").val();
     var pattern=/[`~!@#$%^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
     text = text.replace(pattern,"");                                  
     tree9a343ac62b122c4930f80c990b6a9b46d7beSearch(text);
});
var notEmptyRegExp = /[\S+]/i;
function tree9a343ac62b122c4930f80c990b6a9b46d7beSearch(searchParm) {
     if (!notEmptyRegExp.test(searchParm)) {
         tree9a343ac62b122c4930f80c990b6a9b46d7beReload();
     } else {
         $.ajax({
             url: 'platform/eform/bpmsCRUDClient/searchTree',
             data: {"searchParm":searchParm,"dbid":"948e83e37f8c9f39017f913e40501865","pid":"ID","nodeid":"ID","nodename":"ID"
                         ,"rootid":"-1"
                     ,"viewid":"948e83e382802cb7018280519fdd1ce7","treeid":"tree9a343ac62b122c4930f80c990b6a9b46d7be"
 },
             type: 'post',
             dataType: 'json',
             success: function (backData) {
                 if(backData.length == 0) {
                     layer.msg('没有搜索到相关结果！', {icon: 7});
                 } else {
                     $("#tree9a343ac62b122c4930f80c990b6a9b46d7besearchStatus").val("1");
                     var zNodes = backData;
   					var zTree = $.fn.zTree.getZTreeObj("tree9a343ac62b122c4930f80c990b6a9b46d7be"); 
   					var newsetting = zTree.setting; 
                     $.fn.zTree.init($("#tree9a343ac62b122c4930f80c990b6a9b46d7be"), newsetting, zNodes);
                 }
             }
         });
     }
}
function tree9a343ac62b122c4930f80c990b6a9b46d7besetFontCssBySearch(treeId, treeNode) {
     if ($("#tree9a343ac62b122c4930f80c990b6a9b46d7besearchStatus").val() == "1" && treeNode.type == "search") {
         return {color:"red"};
     }
}
tree9a343ac62b122c4930f80c990b6a9b46d7beReload();
;});	 
