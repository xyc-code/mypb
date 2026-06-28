/**
* Ztree ParentSelect
* @param datagrid
* @param url
* @param searchD
* @param form
* @param keyWordId
* @param searchNames
* @param dataGridColModel
*/
function SysLookupHiberarchyZtree(datagrid, url, searchD, keyWordId,expandNodes,treeUniqueKey,treeDepth) {
	if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
		throw new Error('datagrid不能为空！');
	}
    var _self=this;
	var _url = url;
	this.getUrl = function () {
		return _url;
	}
    this.tree = null;
	this._datagridId = '#' + datagrid;
	this._jqgridToolbar = '#t_' + datagrid;
	this._doc = document;
	this._searchDialogId = '#' + searchD;
	this._keyWordId = '#' + keyWordId;
	this.expandNodes = expandNodes;
    this.treeUniqueKey = treeUniqueKey ;
    this.treeDepth = treeDepth || '-1';
    this._selectNode={};
    this.dataUrl;
    var _onSelect=function(){};//单击node事件
    this.getOnSelect=function(){
        return _onSelect;
    };
    this.setOnSelect=function(func){
        _onSelect=func;
        return _self;
    };
	this.init.call(this);
};

/**
* 初始化操作
*/
SysLookupHiberarchyZtree.prototype.init = function () {
	var _self = this;
    if(_self.treeUniqueKey == '-1'){
        _self.dataUrl = '/getAllNodes';
        _self.searchUrl = '/getAllNodesByCondition';
    }else {
        _self.dataUrl = '/getZtreeByParentIdAndLevel' +'/' + _self.expandNodes + '/' + _self.treeDepth + '/' + _self.treeUniqueKey;
        _self.searchUrl = "/searchZtreeByCondition/" + _self.expandNodes + '/' + _self.treeDepth + '/' + _self.treeUniqueKey;
    }
	//初始化搜索框
    $(_self._keyWordId).on('keyup',function(e){
        if(e.keyCode == 13){
            _self.onseach(13,$(_self._keyWordId).val() == $(_self._keyWordId).attr("placeholder") ? "" : $(_self._keyWordId).val());
        }
    });
    $(_self._searchDialogId).on('click',function(e){
        _self.onseach(13,$(_self._keyWordId).val() == $(_self._keyWordId).attr("placeholder") ? "" : $(_self._keyWordId).val());
    });
    var setting = {
        async: {
            enable: true,
            autoParam: ["parentId"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "parentId"
            },
            key: {
                id: "id",
                name: "typeValue"
            }
        },
        view:{
            selectedMulti: false//进制按住ctrl多选
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                moduleType = "1";
                _self._selectNode=treeNode;
                _self.selectedNodeId = treeNode.id;
                $(window).resize();
                parent._onClickGrid_(treeNode);
            },
            onCollapse:function (){//节点折叠的事件回调函数
                //修改节点图标
                _self.updateNodeIcon()
            },
            onExpand:function (){//节点折叠的事件回调函数
                //修改节点图标
                _self.updateNodeIcon()
            }
        }
    };
    avicAjax.ajax({
        url: _self.getUrl() + _self.dataUrl,
        type:"post",
        dataType: "json",
        success: function(data){
            _self.tree = $.fn.zTree.init($(_self._datagridId),setting, data);
            //修改节点图标
            _self.updateNodeIcon()
        },
        error: function(){

        }
    });
};

/**
* 获取当前选中的节点
*/
SysLookupHiberarchyZtree.prototype.getSelectedNode = function () {
    var rowData = this.tree;
	return rowData.getSelectedNodes()[0];
}

/**
* 添加根节点(如果需要修改根节点数据通过前台页面设置)
*/
SysLookupHiberarchyZtree.prototype.insertRoot = function () {
	var _self = this;
	avicAjax.ajax({
		url: _self.getUrl() + 'insertRoot',
		type: 'post',
		dataType: 'json',
		success: function (r) {
			if (r.flag == 'success') {
				_self.init();
				_self.reLoad();
				layer.msg('初始化根节点成功！');
			} else {
				layer.alert('初始化根节点失败！', {
					icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
				});
			}
		}
	});
}

//快速查询
SysLookupHiberarchyZtree.prototype.onseach = function(ecode, value){
    var _self = this;
    var setting = {
        async: {
            enable: true,
            autoParam: ["parentId"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "parentId"
            },
            key: {
                id: "id",
                name: "typeValue"
            }
        },
        view:{
            selectedMulti: false//进制按住ctrl多选
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                moduleType = "1";
                _self.selectedNodeId = treeNode.id;
                $(window).resize();
                parent._onClickGrid_(treeNode);
            },
            onCollapse:function (){//节点折叠的事件回调函数
                //修改节点图标
                _self.updateNodeIcon()
            },
            onExpand:function (){//节点折叠的事件回调函数
                //修改节点图标
                _self.updateNodeIcon()
            }
        }
    };
    if(ecode == 13){
        value = $.trim(value);
        avicAjax.ajax({
            cache: true,
            type: "post",
            url:  _self.getUrl() + _self.searchUrl,
            dataType:"json",
            data:{search_text:value},
            async: false,
            error: function(request) {
                throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
            },
            success: function(data) {
                _self.tree = $.fn.zTree.init($(_self._datagridId),setting, data);
                //修改节点图标
                _self.updateNodeIcon()
            }
        });
    }
}
SysLookupHiberarchyZtree.prototype.updateNodeIcon = function (){
    //修改节点图标
    $('span[id$=ico]').each(function (i,item){
        if($(item).hasClass('ico_docu')){
            $(item).attr('class','')
            $(item).addClass('cum-icon icon iconfont icon-point')
        }else if($(item).hasClass('ico_open') || $(item).hasClass('ico_close')){
            $(item).attr('class','')
        }
    })
}
