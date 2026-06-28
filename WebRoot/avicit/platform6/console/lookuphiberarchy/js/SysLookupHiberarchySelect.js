/**
* treeGrid ParentSelect
* @param datagrid
* @param url
* @param searchD
* @param form
* @param keyWordId
* @param searchNames
* @param dataGridColModel
*/
function SysLookupHiberarchyParentSelect(datagrid, url, searchD, form, keyWordId, searchNames, dataGridColModel) {
	if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
		throw new Error('datagrid不能为空！');
	}
	var _url = url;
	this.getUrl = function () {
		return _url;
	}
	this._datagridId = '#' + datagrid;
	this._jqgridToolbar = '#t_' + datagrid;
	this._doc = document;
	this._formId = '#' + form;
	this._searchDialogId = '#' + searchD;
	this._keyWordId = '#' + keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	this.checkTreeRootFlag = false;
	this.init.call(this);
};

/**
* 初始化操作
*/
SysLookupHiberarchyParentSelect.prototype.init = function () {
	var _self = this;
	$(_self._datagridId).jqGrid({
		url: _self.getUrl() + 'newGettree/2',
		mtype: 'POST',
		datatype: 'json',
		toolbar: [true, 'top'],
		colModel: _self.dataGridColModel,
		height: $(window).height() - 120,
		styleUI: 'Bootstrap',
		multiselect: false,
		autowidth: true,
		shrinkToFit: true,
		scrollOffset: 15, //设置垂直滚动条宽度
		hasColSet: false,//设置显隐属性
		treeGrid: true,//启用树列表
		treeGridModel: 'adjacency',
		tree_root_level: 1, // 树根的默认层级
		loadonce: false,
		ExpandColumn: 'typeValue',//设置树列表扩开列
		ExpandColClick: true,  // 点击列时展开
		treeReader: { // 后端传递给前端的每个节点数据中必须携带的参数
			level_field: 'treeLevel', // 节点在树中的层级
			parent_id_field: 'parentId', // 父节点
			leaf_field: 'leafNode', // 节点是否是叶子
			expanded_field: 'expanded', // 节点是否已经展开
			loaded: 'loadedSubNodes' // 节点是否已经从后台加载过子节点
		},
		jsonReader: {//后端传递给前端的json结构定义
			root: 'rows',//数据信息
			total: 'total',//总页数
			page: 'page',//当前页码
			records: 'records' //数据总条数
		},
		treeIcons: {
			plus: 'glyphicon-triangle-right',
			minus: 'glyphicon-triangle-bottom',
			leaf: 'icon iconfont icon-point'
		},
		loadComplete: function () { // 表格加载完成事件
			if (_self.checkTreeRootFlag == true) {
				return;
			}
			_self.checkTreeRootFlag = true;
			var rootNodesArr = $(_self._datagridId).jqGrid('getRootNodes');
			if (rootNodesArr == '') {
				layer.confirm('未找到根节点,确定要初始化根节点吗?', {icon: 3, title: '提示', area: ['400px', '']}, function (index) {
					if (index) {
						_self.insertRoot();
					}
				});
			}
		}
	});
	$(_self._jqgridToolbar).append($('#tableToolbar'));
	/*$('#jqgh_sysLookupHiberarchyParentSelectJqGrid_TypeValue').css('text-align', 'center');*/
};

/**
* 获取当前选中的节点
*/
SysLookupHiberarchyParentSelect.prototype.getSelectedNode = function () {
	var rowId = $(this._datagridId).getGridParam('selrow');
	if (rowId == '' || rowId == null) {
		return null;
	}
	var rowData = $(this._datagridId).jqGrid('getLocalRow', rowId);
	return rowData;
}

/**
* 重置tree grid 的选择项
*/
SysLookupHiberarchyParentSelect.prototype.resetSelection = function () {
	var _self = this;
	$(_self._datagridId).jqGrid('resetSelection');
}


/**
* 重载数据
*/
SysLookupHiberarchyParentSelect.prototype.reLoad = function () {
	var _self = this;
	var searchdata = {param: JSON.stringify(serializeObject($(_self._formId)))}
	$(_self._datagridId).jqGrid('setGridParam', {datatype: 'json', postData: searchdata}).trigger('reloadGrid');
};

/**
* 添加根节点(如果需要修改根节点数据通过前台页面设置)
*/
SysLookupHiberarchyParentSelect.prototype.insertRoot = function () {
	var _self = this;
	avicAjax.ajax({
		url: _self.getUrl() + '/insertRoot',
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

/**
* 快速查询
*/
SysLookupHiberarchyParentSelect.prototype.searchByKeyWord = function () {
	var _self = this;
	var keyWord = $(_self._keyWordId).val() == $(_self._keyWordId).attr("placeholder") ? "" : $(_self._keyWordId).val();
	if (keyWord == '') {
		_self.reLoad();
		return;
	}
	var names = this._searchNames;
	var param = {};
	for (var i in names) {
		var name = names[i];
		param[name] = keyWord;
	}
	var searchdata = {
		keyWord: JSON.stringify(param),
		param: null
	}
	avicAjax.ajax({
		url: _self.getUrl() + '/search',
		data: searchdata,
		type: 'POST',
		dataType: 'json',
		success: function (r) {
			if (r.flag == 'success') {
				$(_self._datagridId).jqGrid('clearGridData');
				$(_self._datagridId)[0].addJSONData(r);
			} else {
				layer.alert('查询出错,请联系管理员!', {
					icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
				});
			}
		}
	});
}
