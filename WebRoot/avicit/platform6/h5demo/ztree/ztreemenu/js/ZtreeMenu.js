/**
 * 
 */
function ZtreeMenu(tree,url,searchId){
	if(!tree || typeof(tree)!=='string'&&tree.trim()!==''){
		throw new Error("tree不能为空！");
	}
	var _selectId='';
    var	_url=url;
    this.level={};//级别
    this.getUrl = function(){
    	return _url;
    };
    this._searchId = "#"+searchId;
	this._treeId="#"+tree;
	this._tree={};
	this._doc = document;
	this._rootId='';
	//当前选中的node
	this._selectNode={};
	
	/***********************封装各种事件***********/
	var _onLoadSuccess=function(){};
	this.getOnLoadSuccess=function(){
		return _onLoadSuccess;
	};
	this.setOnLoadSuccess=function(func){
		_onLoadSuccess=func;
	};
	var _onSelect=function(){};
	this.getOnSelect=function(){
		return _onSelect;
	};
	this.setOnSelect=function(func){
		_onSelect=func;
	};
	var _onClick=function(){};
	this.getOnClick=function(){
		return _onClick;
	};
	this.setOnClick=function(func){
		_onClick=func;
	};
};
//初始化操作
ZtreeMenu.prototype.init=function(){
	var _self = this;
	$(this._searchId).searchbox({
	 	width: 200,
        searcher: function (value) {
        	if(value==null||value==""){
        		_self._tree.tree('reload');
        		return;
        	}
        	$.ajax({
                cache: true,
                type: "post",
                url:_self.getUrl()+"/search",
                dataType:"json",
                data:{search_text:value},
                async: false,
                error: function(request) {
                	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
                },
                success: function(data) {
					if(data){
						_self._tree.tree('loadData',data);
						_self.selectRootNode(_self);
					}else{
						_self._tree.tree('loadData',{});
					}
                }
            });
        },
        prompt: "请输入树节点名称！"
    });
	this._tree=$(this._treeId).tree({    
		url:this.getUrl()+"/gettree/2",
		formatter:function(node){
			if(node._parentId ==="-1"){
				_self._rootId=node.id;
			}
			if(node.attributes && node.attributes.s){
				return '<a style="color:#fff;font-weight:normal;background:#3399ff;padding:0 4px;">' + node.text + '</a>';
			}else{
				return node.text;
			}
		},
		onSelect:function(node){
			_self._selectNode=node;
			_self.getOnSelect()(_self,node);
			},
		onClick:function(node){
			_self.getOnClick()(_self,node);
			},
		onLoadSuccess:function(node, data){
			if(!node){
				_self.selectRootNode(_self);
				_self.getOnLoadSuccess()(_self,node,data);
			}
		}
	});
};
//选择根节点
ZtreeMenu.prototype.selectRootNode=function(self){
	var node = self._tree.tree('find', self._rootId);
	if(node){
		self._tree.tree('select', node.target);
	}else{
		throw new Error('根节点丢失');
	}
};
ZtreeMenu.prototype.loadNodeById=function(_self,node){
};
//添加平级节点
ZtreeMenu.prototype.insert=function(){
	if(this._selectNode._parentId=== '-1'){
		$.messager.show({
			 title : '提示',
			 msg : '不能添加与'+this._selectNode.text+'平级的节点！'
		});
		return;
	}
	this._iDg = new CommonDialog("insert","850","400",this.getUrl()+'/operation/Add/'+this._selectNode._parentId,"添加平级节点",false,true,false);
	this._iDg.show();
};
//添加子节点
ZtreeMenu.prototype.insertsub=function(){
	this._iDg=new CommonDialog("insert","850","400",this.getUrl()+'/operation/Add/'+this._selectNode.id,"添加子节点",false,true,false);
	this._iDg.show();
};

//编辑子节点
ZtreeMenu.prototype.modify=function(){
	this._eDg=new CommonDialog("modify","850","400",this.getUrl()+'/operation/Edit/'+this._selectNode.id,"编辑",false,true,false);
	this._eDg.show();
};

ZtreeMenu.prototype.save=function(form,url,dialog,id){
	var _self = this;
	$.ajax({
		 url:url,
		 data : JSON.stringify(form),
		 type : 'post',
		 contentType : 'application/json',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){
				 if(r.type =='1'){//新建成功
					 var selected = _self._tree.tree('find',r.pid);
					if(selected.state =="closed"){
						 _self._tree.tree('reload',selected.target);
						 
					 }else{
						 _self._tree.tree('append', {
							 	parent: selected.target,
							 	data: [r.data]
							 });
					 }
					 
				 }else if(r.type =='2'){//编辑成功
					 $(_self._formId).form('load',form);
					 _self._tree.tree('update',{
						 				target:_self._selectNode.target,
						 				//text:form.${tableInfo.uppertreeDisplayField.fieldName}
						 				text:r.data.text
					 				  });
					 
				 }
				 $(dialog).dialog('close');
				 $.messager.show({
					 title : '提示',
					 msg : '保存成功！'
				 });
				
			 }else{
				 $.messager.show({
					 title : '提示',
					 msg : r.error
				});
			 } 
		 }
	 });
};
ZtreeMenu.prototype.del=function(){
    var _self = this;
    if(this._selectNode._parentId=== '-1'){
		 $.messager.show({
			 title : '提示',
			 msg : '不能删除根节点！'
		});
		return;
	}
	if((this._selectNode.attributes && this._selectNode.attributes.count > 0) || _self._tree.tree('getChildren', _self._selectNode.target).length > 0){
		 $.messager.show({
			 title : '提示',
			 msg : '当前选中节点含有子节点，请先删除子节点！'
		});
		 return;
	}
	var ids = [];
	ids.push(this._selectNode.id);
	  $.messager.confirm('请确认','您确定要删除当前节点？',function(b){
		 if(b){
			 $.ajax({
				 url:_self.getUrl()+'/delete',
				 data:	JSON.stringify(ids),
				 contentType : 'application/json',
				 type : 'post',
				 dataType : 'json',
				 success : function(r){
					 if (r.flag == "success") {
						 _self._tree.tree('remove',_self._selectNode.target);
						 $.messager.show({
							 title : '提示',
							 msg : '删除成功！'
						 });
						 //删除当前节点，选择父节点
						 var node =_self._tree.tree('find',_self._selectNode._parentId);
						 if(node.attributes && node.attributes.count>0){
						 	node.attributes.count--;
						 }
						 _self._tree.tree('select', node.target);
					}else{
						$.messager.show({
							 title : '提示',
							 msg : r.error
						});
					}
				 }
			 });
		 } 
	  });
};
//关闭对话框
ZtreeMenu.prototype.closeDialog=function(id){
	$(id).dialog('close');
};
