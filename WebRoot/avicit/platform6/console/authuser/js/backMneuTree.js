/**
 * 单表树
 * @param ztreeId
 * @param url
 * @param form
 * @param searchD
 * @param searchbtn
 * @returns
 */
function backMneuTree(ztreeId, url, form, searchD, searchbtn,id,param){
	if(!ztreeId || typeof(ztreeId)!=='string'&&ztreeId.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url = url;
    this.getUrl = function(){
    	return _url;
    };
    
    var _selectNode = {};
    
    var _onSelect=function(){};//单击node事件
    
	this.getOnSelect=function(){
		return _onSelect;
	};
	this.setOnSelect=function(func){
		_onSelect=func;
		return this;
	};
    
    this.addRetIdFlag = null; //初始化添加节点标记
    this.firstAsyncSuccessFlag = 0; //第一次加载
    this.tree = null;
    this.ztreeId  = ztreeId;
	this._ztreeId="#"+ztreeId;
	this.setting = {};
	this._doc = document;
	this._formId="#"+form; //formId
	this._id= id; //用户Id
	this._param= param; //用户Id
	this._searchId ="#"+searchD;
	this._searchbtnId ="#"+searchbtn;
}
function getFont(treeId, node) {
 	if(node.type=="forbid"){
 		 return {color:'red'};
 	}   else{
		return {color:'#2f54eb'};
	}
  }
//初始化树节点
backMneuTree.prototype.init=function(){
	var _self = this;
	$(_self._searchId).on('keyup',function(e){
		if(e.keyCode == 13){
			 _self.onseach(13,$(_self._searchId).val());
		}
	});
	$(_self._searchbtnId).on('click',function(e){
		_self.onseach(13,$(_self._searchId).val());
	});
	_self.setting = {
			view: {
				selectedMulti: false,
				fontCss: getFont
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
				url: _self.getUrl()+"/2/"+_self._id+"/tree",
				autoParam:["id","nodeType","orgId"],
				dataFilter: function(treeId, parentNode, childNodes){
					if (!childNodes)
			            return null;
			        childNodes = eval(childNodes);
			        return childNodes;
				}
			},
			callback: {
				onClick: function(event, treeId, treeNode){ //绑定左右联动事件
					 _self._selectNode = treeNode; 
			    },
				onAsyncError:  function(){alert("加载失败！");},
				onAsyncSuccess:  function(event, treeId, msg){
					 if (_self.firstAsyncSuccessFlag == 0) {
                         var node = _self.tree.getNodeByParam('id', curOrgId);
                         if (node == null) {
                             node = _self.tree.getNodes()[0];
                         }
                         _self.tree.expandNode(node, true);
                        // $("#" + node.tId + "_span").click();
                         _self.firstAsyncSuccessFlag = 1;
					 } 
					var node = _self.tree.getNodeByParam("id", $('#id').val());
					_self.tree.selectNode(node);
					_self.addRetIdFlag = null;  //初始化添加节点标记
				}
		    }
		};
	    _self.tree = $.fn.zTree.init($(_self._ztreeId),_self.setting, []);
		// 关闭遮罩
		setTimeout(function () {
			if( _self.tree!=null){
				parent.layer.close(parent.userIndex);
			}
		}, 400);
};

//查询框查询
backMneuTree.prototype.onseach = function(ecode, value){
	var _self = this;
	if(ecode == 13){
		if(value == null||value == ""||value=='输入名称查询'){
			_self.tree = $.fn.zTree.init($(_self._ztreeId),_self.setting, []);
		    return;
   		   
   	}
   	$.ajax({
           cache: true,
           type: "post",
           url:  _self.getUrl()+"/search",
           dataType:"json",
           data:{search_text:$.trim(value)},
           async: false,
           error: function(request) {
           	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
           },
           success: function(data) {
        	   _self.tree = $.fn.zTree.init($(_self._ztreeId), {
           			view: {
           				selectedMulti: false,
           				fontCss: function(treeId, treeNode) {
       						if(treeNode.attributes && treeNode.attributes.type==='forbid'){
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
           				 _self._selectNode = treeNode; 
           			    }
	           		  }
             }, data);
			   if (data != undefined && data != null && data != "") {
				   var node = _self.tree.getNodeByParam("id", data[0].id);
				   _self.tree.selectNode(node);
				   _self.setting.callback.onClick(null, _self.tree.setting.treeId, node);//调用点击事件 ;
               }
           }
       });	
	}
};

 
 