/**
 * 声明LeagueOrganization对象
 * @param ztreeId
 * @param url
 * @param form
 * @param searchD
 * @param searchbtn
 * @param afterInit
 * @param clickRowLoad
 * @returns
 */
function LeagueOrganization(ztreeId, url, form, searchD, searchbtn,afterInit, clickRowLoad){
	if(!ztreeId || typeof(ztreeId)!=='string'&&ztreeId.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url = url;
    this.getUrl = function(){
    	return _url;
    }
    this.addRetIdFlag = null; //初始化添加节点标记
    this.firstAsyncSuccessFlag = 0; //第一次加载
    this.tree = null;
    this.ztreeId  = ztreeId;
	this._ztreeId="#"+ztreeId;
	this.setting = {};
	this._formId="#"+form; //formId
	this._searchId ="#"+searchD;
	this._searchbtnId ="#"+searchbtn;
	this.afterInit = afterInit;
	this.clickRowLoad = clickRowLoad;
	this._rootId="";//节点id
	this._parentId=""//根节点id;
	this.init.call(this);
};
/**
 * 初始化操作
 * 回车查询
 */
var issubinit = false;
LeagueOrganization.prototype.init=function(){
	var _self = this;
	$(_self._searchId).on('keyup',function(e){
		if(e.keyCode == 13){
			 _self.onseach(13,$(_self._searchId).val());
		}
	});
	$(_self._searchbtnId).on('click',function(e){
		var value = $(_self._searchId).val()==$(_self._searchId).attr("placeholder") ? "" :  $(_self._searchId).val();
		_self.onseach(13,value);
	});
	_self.setting = {
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
				url: _self.getUrl()+"/getTree/2",
				autoParam:["id"],
				dataFilter: function(treeId, parentNode, childNodes){
					if (!childNodes)
			            return null;
			        childNodes = eval(childNodes);
			        return childNodes;
				}
			},
			callback: {
				onClick: function(event, treeId, treeNode){ //绑定左右联动事件
					if(issubinit == false){
				        if(treeNode != null && treeNode != ""){
				            _self.afterInit(treeNode.id);
				            issubinit = true;
			        	}else{
			        		_self.afterInit("-1");
			        		issubinit = true;
			        	}
			        }else{
			        	if(treeNode != null && treeNode != ""){
			        		if($("#leagueName")){
			        			$("#leagueName").val(treeNode.text);
			        		}
			        		if($("#leagueCode")){
			        			$("#leagueCode").val(treeNode.attributes.leagueCode);
			        		}
			        		if($("#startDate")){
			        			$("#startDate").val(format(treeNode.attributes.startDate));
			        		}
			        		if($("#finishDate")){
			        			$("#finishDate").val(format(treeNode.attributes.finishDate));
			        		}
			        		if($("#attribute01")){
			        			$("#attribute01").val(treeNode.attributes.attribute01)
			        		}
			        			
			        		
				            _self.clickRowLoad(treeNode.id);

			        	}else{
			        		_self.clickRowLoad("-1");
			        	}
		        	}
		        		_self._rootId = treeNode.id;
			    },
			    onRightClick : function OnRightClick(event, treeId, treeNode) {
			    	//在ztree上的右击事件  
			        if (treeNode !=null && treeNode !="") { 
			        	_self.tree.selectNode(treeNode);
			            showRMenu(event.clientX, event.clientY);  
			        }  
			    },
				onAsyncError:  function(){
				            layer.alert('加载失败！',{
								  icon: 7,
								  area: ['400px', ''],
								  closeBtn: 0,
								  btn: ['关闭'],
								  title:"提示"
								}
							);
				},
				onAsyncSuccess:  function(event, treeId, msg){
					 if (_self.firstAsyncSuccessFlag == 0) {
		                 var nodes = _self.tree.getNodes(); 
		                 if(nodes.length > 0){
		                	 if(nodes[0]._parentId ==="-1"){
		     					_self._rootId = nodes[0].id;
		     					_self._parentId = nodes[0].id;//根节点赋值
		     				 }
		                	 _self.tree.expandNode(nodes[0], true);  
		                     $("#"+nodes[0].tId+"_span").click();
		                     _self.firstAsyncSuccessFlag = 1; 
		                 }else{
		                	layer.confirm('未找到根节点,确定要初始化根节点吗?',  {icon: 3, title:"提示", area: ['400px', ''],btn: ['确定', '取消']}, function(index){
			              		   if(index){	
			              			  _self.insertRoot();  //初始化根节点
			              		   }
			                	},function(index){
			                		$('#toolbar_leagueOrganMember').hide();// 没有初始化根节点时,隐藏操作按钮
			                });
		                }
					 } 
					 var node = _self.tree.getNodeByParam("id", _self._rootId);
					 if(node == null){
						 node = _self.tree.getNodeByParam("id", _self._parentId);
					 }
					 if(node != null){
					 	 _self.tree.selectNode(node);
						 $("#"+node.tId+"_span").click();
					 }
					 _self.addRetIdFlag = null;  //初始化添加节点标记
				}
		    }
		};
	    _self.tree = $.fn.zTree.init($(_self._ztreeId),_self.setting, []);
};
/**
 * 显示右键菜单  
 */
function showRMenu(x, y) {
	//如果右键菜单的子菜单都无权限显示，则不显示右键菜单
	if ($("#rMenu").children().length == 0 ){
		return;
	}
    $("#rMenu ul").show();  
    //获取menu的长宽
	var menuHeight = $("#rMenu").height();
	//获取浏览器的可见长宽
	var clintHeight = getClientHeight();
	//判断
	if(menuHeight + y >= clintHeight){
		y = clintHeight - menuHeight - 8;
	}
    $("#rMenu").css({"top":y+"px", "left":x+"px", "visibility":"visible"}); //设置右键菜单的位置、可见  
    $("body").bind("mousedown", onBodyMouseDown);  
}  
/**
 * 隐藏右键菜单  
 */
function hideRMenu() {  
    if ($("#rMenu")) $("#rMenu").css({"visibility": "hidden"}); //设置右键菜单不可见  
    $("body").unbind("mousedown", onBodyMouseDown);  
}  
/**
 * 鼠标按下事件  
 */
function onBodyMouseDown(event){  
    if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {  
    	$("#rMenu").css({"visibility" : "hidden"});  
    }  
} 
//浏览器的可见高度
function getClientHeight() {
	var clientHeight = 0;
	if (document.body.clientHeight && document.documentElement.clientHeight) {
		clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight: document.documentElement.clientHeight;
	} else {
		clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight: document.documentElement.clientHeight;
	}
	return clientHeight;
} 
/**
 * 查询框查询
 */
LeagueOrganization.prototype.onseach = function(ecode, value){
	var _self = this;
	if(ecode == 13){
		if(value == null||value == ""||_self.tree.getNodes().length == 0){
			_self.tree = $.fn.zTree.init($(_self._ztreeId),_self.setting, []);
   		   return;
   		   
   	}
   	avicAjax.ajax({
           cache: true,
           type: "post",
           url:  _self.getUrl()+"/search",
           dataType:"json",
           data:{search_text:value},
           async: false,
           error: function(request) {
           	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
           },
           success: function(data) {
        	   _self.tree = $.fn.zTree.init($(_self._ztreeId), {
           			view: {
           				selectedMulti: false,
						fontCss: function(treeId, treeNode) {
							if(treeNode.text.indexOf(value) >= 0){
								return {color:'blue'} ;
							}else{
								return {};
							}
						}
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
           			},
           			callback: {
           				onClick: function(event, treeId, treeNode){ //查询后绑定左右联动事件
           					_self._rootId = treeNode.id;
           					if(issubinit == false){
        				        if(treeNode != null && treeNode != ""){
        				            _self.afterInit(treeNode.id);
        				            issubinit = true;
        			        	}else{
        			        		_self.afterInit("-1");
        			        		issubinit = true;
        			        	}
        			        }else{
        			        	if(treeNode != null && treeNode != ""){
        				            _self.clickRowLoad(treeNode.id);

        			        	}else{
        			        		_self.clickRowLoad("-1");
        			        	}
        		        	}
           			    },
           			    onRightClick : function OnRightClick(event, treeId, treeNode) {
	     			    	//在ztree上的右击事件  
	     			        if (treeNode !=null && treeNode !="") { 
			        			_self.tree.selectNode(treeNode);
			          			showRMenu(event.clientX, event.clientY);  
			      			  } 
     			          }
	           		  }
             }, data);
               var node = _self.tree.getNodeByParam("id", data[0].id);
               _self.tree.selectNode(node);
               _self.setting.callback.onClick(null, _self.tree.setting.treeId, node);//调用点击事件 ;
           }
       });	
	}
}

/**
 * 添加平级节点
 */
LeagueOrganization.prototype.insert = function(){
	hideRMenu();
	var _self = this;
	_self.addRetIdFlag = 'parallel';
	var selectedNodes = _self.tree.getSelectedNodes();
	var parentNode = selectedNodes[0].getParentNode();
	if(null == selectedNodes[0] || undefined == selectedNodes[0]){
		layer.alert('请选择节点后进行操作', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		);
		return;
	}
	if(selectedNodes[0]._parentId=== '-1'){
		layer.alert('不能添加与'+selectedNodes[0].text+'平级的节点！', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		);
		return;
	}
	this.insertIndex = layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '添加',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: this.getUrl()+'/operation/Add/'+selectedNodes[0]._parentId
	});
}
/**
 * 添加子节点
 */
LeagueOrganization.prototype.insertSub = function(){
	hideRMenu();
	var _self = this;
	_self.addRetIdFlag = 'sub';
	var selectedNodes = _self.tree.getSelectedNodes();
	if(null == selectedNodes[0]){
	    layer.alert('请选择节点后进行操作', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		);
		return;
	}
	this.insertIndex = layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '添加',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: this.getUrl()+'/operation/Add/'+selectedNodes[0].id
	});
}
/**
 * 编辑节点
 */
LeagueOrganization.prototype.modify = function(){
	hideRMenu();
	var _self = this;
	var selectedNodes = _self.tree.getSelectedNodes();
	if(null == selectedNodes[0]){
	    layer.alert('请选择节点后进行操作', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		);
		return;
	}
	this.editIndex = layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '编辑',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: this.getUrl()+'/operation/Edit/'+selectedNodes[0].id
	});
}
/**
 * 更新父节点
 */
LeagueOrganization.prototype.updateParent = function(){
	var _self = this;
	var selectedNodes = _self.tree.getSelectedNodes();
	if(selectedNodes[0]._parentId=== '-1'){
	    layer.alert('不能更改根节点的父节点！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0,
			  btn: ['关闭'],
			  title:"提示"
			}
		);
		return;
	}
	var selectIndex = layer.open({
        type: 2,
        area: ['30%', '50%'],
        title: '选择父节点',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: this.getUrl() + '/toLeagueOrganizationParentSelect',
        btn: ['确定', '取消'],
        yes: function(index, layero){
        	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
        	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
        	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentLeagueName");
        	var selectedNewNode = iframeWin.getSelectedNode();
			var curNodeId = selectedNodes[0].id;
			if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
				layer.alert('所选择父节点不合法，请重新选择！', {
					icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
				});
				return;
			}
			if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
				if (selectedNewNode.id == curNodeId) {
					layer.alert('所选择父节点不能是本节点！', {
						icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
					});
				} else {
					layer.alert('所选择父节点不能是本节点的子节点！', {
						icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
					});
				}
				return;
			}
			$(parentIdContent).val(selectedNewNode.id);
			$(parentNameContent).val(selectedNewNode.text);
			layer.close(layer.index);
			layer.close(selectIndex);
        },
		btn2: function(index, layero){
		    layer.close(index);
		}
    });
}
/**
 * 保存方法
 */
LeagueOrganization.prototype.save = function(form,dialog){
	    var _self = this;
		var selectedNodes = _self.tree.getSelectedNodes();
		if(null == selectedNodes[0] || undefined == selectedNodes[0]){
			layer.alert('请选择节点后进行操作', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		    );
			return;
		}
		avicAjax.ajax({
			 url:_self.getUrl()+'/saveLeagueOrganization',
			 data : {data :JSON.stringify(serializeObject(form))},
			 type : 'post',
			 dataType : 'json',
			 success : function(r){
				 debugger;
				 if (r.flag == "success"){
					 if(r.type =='1'){//新建成功
						 var treeObj = $.fn.zTree.getZTreeObj(_self.ztreeId);
						 if(selectedNodes[0].isParent == false){
							 selectedNodes[0].isParent = true;
						 }
						 if(_self.addRetIdFlag=='sub'){ //添加子节点
							 _self._rootId = r.data.id;
							 treeObj.reAsyncChildNodes(selectedNodes[0], "refresh");
						    if(($(_self._searchId).val()==$(_self._searchId).attr("placeholder") ? "" :  $(_self._searchId).val()) != ""){
						    	$(_self._searchId).val('');
						    	_self.onseach(13, $(_self._searchId).val());
						    }
						 }else{//添加平级节点
						 	 _self._rootId = r.data.id;
							 treeObj.reAsyncChildNodes(selectedNodes[0].getParentNode(), "refresh");
						 }
						 if(dialog == "insert"){
							 layer.close(_self.insertIndex);
						 }
					     layer.msg("添加成功!");
					 }else if(r.type =='2'){//编辑成功
						 if (selectedNodes.length > 0) {
							 selectedNodes[0].text = r.data.text;
							 selectedNodes[0].attributes.leagueCode = r.data.attributes.leagueCode;
							 selectedNodes[0].attributes.startDate = r.data.attributes.startDate;
							 selectedNodes[0].attributes.finishDate = r.data.attributes.finishDate;
							 
							 _self.tree.updateNode(selectedNodes[0]);
							 _self.setting.callback.onClick(null, _self.tree.setting.treeId, selectedNodes[0]);//调用点击事件 ;
						 }
						 if(dialog == "edit"){
							 layer.close(_self.editIndex);
						 }
						 layer.msg("保存成功!");
					 }else if(r.type =='3'){//更改过排序或者父节点(1.排序更改需要刷新父节点，2.父节点更改需要刷新整个树，暂时简单考虑，刷新整个树)
						 var treeObj = $.fn.zTree.getZTreeObj(_self.ztreeId);
						 treeObj.reAsyncChildNodes(null, "refresh");
						 if(dialog == "edit"){
							 layer.close(_self.editIndex);
						 }
						 layer.msg("编辑成功");
					 }
				 }else{
                     var alertMsg = '保存失败,请联系管理员!'
                     if(r.errorMsg != null && r.errorMsg != ''){
                          alertMsg = r.errorMsg;
                     }
                     layer.alert(alertMsg, {
                            icon: 7,
                            area: ['400px', ''], //宽高
                            closeBtn: 0,
                            btn: ['关闭'],
                            title:"提示"
                          }
                     );
				 } 
			 }
		 });
}
/**
 * 关闭对话框
 */
LeagueOrganization.prototype.closeDialog=function(id){
	hideRMenu();
	if(id == "insert"){
		layer.close(this.insertIndex);
	}else{
		layer.close(this.editIndex);
	}
};
/**
 * 删除节点
 */
LeagueOrganization.prototype.del=function(){
	  hideRMenu();
	  var _self = this;
	  var selectedNodes = _self.tree.getSelectedNodes();
	   if(selectedNodes[0]._parentId=== '-1'){
	        layer.alert('不能删除根节点！', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		    );
			return;
	   }
	    if((selectedNodes[0].attributes && selectedNodes[0].attributes.count > 0) || selectedNodes[0].children.length > 0){
			 layer.alert('当前选中节点含有子节点，请先删除子节点！', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0,
				  btn: ['关闭'],
				  title:"提示"
				}
		     );
			 return;
		}
		var ids = [];
		ids.push(selectedNodes[0].id);
		layer.confirm('删除当前节点同时会删除子表关联数据，您确定要删除当前节点?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
		   if(index){	
			avicAjax.ajax({
				 url: _self.getUrl()+'/delete',
				 data:	JSON.stringify(ids),
				 contentType : 'application/json',
				 type : 'post',
				 dataType : 'json',
				 success : function(r){
					 if (r.flag == "success") {
						 layer.msg('删除成功！');
						 _self.tree.removeNode(selectedNodes[0]);
						 layer.close(index);
						 //删除当前节点，选择父节点
						 var node = selectedNodes[0].getParentNode();
						 if(node.attributes && node.attributes.count > 0){
							 node.attributes.count--;
						 }
						 _self.tree.selectNode(node);
						 $("#"+node.tId+"_span").click();
						layer.msg('删除成功！');
					}else{
						layer.alert('删除失败,请联系管理员!', {
						  icon: 7,
						  area: ['400px', ''],
						  closeBtn: 0,
						  btn: ['关闭'],
						  title:"提示"
						}
				);
					}
				 }
			 });
		   }
	  });   
}

/**
 * 添加根节点(如果需要修改根节点数据通过前台页面设置)
 */
LeagueOrganization.prototype.insertRoot = function() {
	var _self = this;
	avicAjax.ajax({
		url : _self.getUrl() + '/insertRoot',
		type : 'post',
		dataType : 'json',
		success : function(r) {
			if (r.flag == "success") {
				$('#toolbar_leagueOrganMember').show();// 初始化根节点成功,显示操作按钮
				_self.init();
				layer.msg('初始化根节点成功！');
			} else {
				layer.alert('初始化根节点失败！', {
					icon : 7,
					area : [ '400px', '' ],
					closeBtn : 0,
					btn : [ '关闭' ],
					title : "提示"
				});
			}
		}
	})
}
/**
 * 控件校验   规则：表单字段name与rules对象保持一致
 */
LeagueOrganization.prototype.formValidate = function(form){
	form.validate({
		rules: {
				   leagueCode:{
						required:true,
						maxlength: 50
				   },  
				   leagueName:{
						required:true,
						maxlength: 50
				   },  
				   parentId:{
						required:true,
						maxlength: 50
				   },  
				    treeSort:{
				        required:true,
						number:true
				   }, 
			       startDate:{
						dateISO:true
				   },
			       finishDate:{
						dateISO:true
				   },
	        }
	 });
}

