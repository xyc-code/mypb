function EformDesignTemplateModel(datagrid, url, formSub, dataGridColModel, searchDialogSub, nodeId, nodeType,searchSubNames, bpmHistProcinst_KeyWord) {
	if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
		throw new Error("datagrid不能为空！");
	}
	var _url = url;
	this.getUrl = function() {
		return _url;
	}
	this.pageId = datagrid+"Pager";
	this._searchDialogId = "#" + searchDialogSub;
	this.searchForm = "#" + formSub;
	this.nodeId = nodeId;
	this._datagridId = "#" + datagrid;
	this.Toolbardiv = "#t_" + datagrid;
	this.Toolbar = "#toolbar_" + datagrid;
	this.Pagerlbar = "#" + datagrid + "Pager";
	this._keyWordId = "#" + bpmHistProcinst_KeyWord;
	this._searchNames = searchSubNames;
	this.dataGridColModel = dataGridColModel;
	this.init.call(this);
};
//初始化操作
EformDesignTemplateModel.prototype.init = function() {
	var _self = this;
	$(_self._datagridId).jqGrid({
		url : this.getUrl(),
		postData : {
			nodeId : _self.nodeId,
		},
		mtype : 'POST',
		datatype : "json",
		colModel : this.dataGridColModel,
		//height : $(window).height() - 120 - 50-40, //120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
		height : $(window).height() - 115,
		width:$(window).width()-250,
		scrollOffset : 10, //设置垂直滚动条宽度
		rowNum : 10,
		rowList : [ 200, 100, 50, 30, 20, 10 ],
		altRows : true,
		pagerpos : 'left',
		loadComplete : function(data) {
			$(this).jqGrid('getColumnByUserIdAndTableName');
		},
		viewrecords : true, //
		styleUI : 'Bootstrap',
		multiselect :false,
		autowidth : true,
		shrinkToFit : true,
		responsive : true, //开启自适应
		pager : _self.Pagerlbar,
		hasTabExport:false,
		hasColSet:false
	});


	$(_self._keyWordId).on('keydown', function(e) {
		if (e.keyCode == '13') {
			_self.searchByKeyWord();
		}
	});
};


//重载数据
EformDesignTemplateModel.prototype.reLoad = function(nodeId) {
	if (nodeId != undefined) {
		this.nodeId = nodeId;
	}
	
	var searchdata = {
		nodeId : nodeId,
		keyWord : null
	};
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};


//高级查询
EformDesignTemplateModel.prototype.searchData = function(keyWord) {
	var param = {};
	param.templateName = keyWord;
	var searchdata = {
		keyWord : JSON.stringify(param),
		nodeId : this.nodeId
	};
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};
