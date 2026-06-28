/**
* treeGrid
* @param datagrid
* @param url
* @param searchD
* @param form
* @param keyWordId
* @param searchNames
* @param dataGridColModel
*/
function NewSysLookupHiberarchy(datagrid, url, searchD, form, keyWordId, searchNames, dataGridColModel) {
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
	//语言数据
	var optionVals = [{"text":"日文 (日本)","id":"ja_JP"},{"text":"西班牙文 (秘鲁)","id":"es_PE"},{"text":"英文","id":"en"},{"text":"日文 (日本,JP)","id":"ja_JP_JP"},{"text":"西班牙文 (巴拿马)","id":"es_PA"},{"text":"塞尔维亚文 (波斯尼亚和黑山共和国)","id":"sr_BA"},{"text":"马其顿文","id":"mk"},{"text":"西班牙文 (危地马拉)","id":"es_GT"},{"text":"阿拉伯文 (阿拉伯联合酋长国)","id":"ar_AE"},{"text":"挪威文 (挪威)","id":"no_NO"},{"text":"阿尔巴尼亚文 (阿尔巴尼亚)","id":"sq_AL"},{"text":"保加利亚文","id":"bg"},{"text":"阿拉伯文 (伊拉克)","id":"ar_IQ"},{"text":"阿拉伯文 (也门)","id":"ar_YE"},{"text":"匈牙利文","id":"hu"},{"text":"葡萄牙文 (葡萄牙)","id":"pt_PT"},{"text":"希腊文 (塞浦路斯)","id":"el_CY"},{"text":"阿拉伯文 (卡塔尔)","id":"ar_QA"},{"text":"马其顿文 (马其顿王国)","id":"mk_MK"},{"text":"瑞典文","id":"sv"},{"text":"德文 (瑞士)","id":"de_CH"},{"text":"英文 (美国)","id":"en_US"},{"text":"芬兰文 (芬兰)","id":"fi_FI"},{"text":"冰岛文","id":"is"},{"text":"捷克文","id":"cs"},{"text":"英文 (马耳他)","id":"en_MT"},{"text":"斯洛文尼亚文 (斯洛文尼亚)","id":"sl_SI"},{"text":"斯洛伐克文 (斯洛伐克)","id":"sk_SK"},{"text":"意大利文","id":"it"},{"text":"土耳其文 (土耳其)","id":"tr_TR"},{"text":"中文","id":"zh"},{"text":"泰文","id":"th"},{"text":"阿拉伯文 (沙特阿拉伯)","id":"ar_SA"},{"text":"挪威文","id":"no"},{"text":"英文 (英国)","id":"en_GB"},{"text":"塞尔维亚文 (塞尔维亚及黑山)","id":"sr_CS"},{"text":"立陶宛文","id":"lt"},{"text":"罗马尼亚文","id":"ro"},{"text":"英文 (新西兰)","id":"en_NZ"},{"text":"挪威文 (挪威,Nynorsk)","id":"no_NO_NY"},{"text":"立陶宛文 (立陶宛)","id":"lt_LT"},{"text":"西班牙文 (尼加拉瓜)","id":"es_NI"},{"text":"荷兰文","id":"nl"},{"text":"爱尔兰文 (爱尔兰)","id":"ga_IE"},{"text":"法文 (比利时)","id":"fr_BE"},{"text":"西班牙文 (西班牙)","id":"es_ES"},{"text":"阿拉伯文 (黎巴嫩)","id":"ar_LB"},{"text":"朝鲜文","id":"ko"},{"text":"法文 (加拿大)","id":"fr_CA"},{"text":"爱沙尼亚文 (爱沙尼亚)","id":"et_EE"},{"text":"阿拉伯文 (科威特)","id":"ar_KW"},{"text":"塞尔维亚文 (塞尔维亚)","id":"sr_RS"},{"text":"西班牙文 (美国)","id":"es_US"},{"text":"西班牙文 (墨西哥)","id":"es_MX"},{"text":"阿拉伯文 (苏丹)","id":"ar_SD"},{"text":"印度尼西亚文 (印度尼西亚)","id":"in_ID"},{"text":"俄文","id":"ru"},{"text":"拉托维亚文(列托)","id":"lv"},{"text":"西班牙文 (乌拉圭)","id":"es_UY"},{"text":"拉托维亚文(列托) (拉脱维亚)","id":"lv_LV"},{"text":"希伯来文","id":"iw"},{"text":"葡萄牙文 (巴西)","id":"pt_BR"},{"text":"阿拉伯文 (叙利亚)","id":"ar_SY"},{"text":"克罗地亚文","id":"hr"},{"text":"爱沙尼亚文","id":"et"},{"text":"西班牙文 (多米尼加共和国)","id":"es_DO"},{"text":"法文 (瑞士)","id":"fr_CH"},{"text":"印地文 (印度)","id":"hi_IN"},{"text":"西班牙文 (委内瑞拉)","id":"es_VE"},{"text":"阿拉伯文 (巴林)","id":"ar_BH"},{"text":"英文 (菲律宾)","id":"en_PH"},{"text":"阿拉伯文 (突尼斯)","id":"ar_TN"},{"text":"芬兰文","id":"fi"},{"text":"德文 (奥地利)","id":"de_AT"},{"text":"西班牙文","id":"es"},{"text":"荷兰文 (荷兰)","id":"nl_NL"},{"text":"西班牙文 (厄瓜多尔)","id":"es_EC"},{"text":"中文 (台湾地区)","id":"zh_TW"},{"text":"阿拉伯文 (约旦)","id":"ar_JO"},{"text":"白俄罗斯文","id":"be"},{"text":"冰岛文 (冰岛)","id":"is_IS"},{"text":"西班牙文 (哥伦比亚)","id":"es_CO"},{"text":"西班牙文 (哥斯达黎加)","id":"es_CR"},{"text":"西班牙文 (智利)","id":"es_CL"},{"text":"阿拉伯文 (埃及)","id":"ar_EG"},{"text":"英文 (南非)","id":"en_ZA"},{"text":"泰文 (泰国)","id":"th_TH"},{"text":"希腊文 (希腊)","id":"el_GR"},{"text":"意大利文 (意大利)","id":"it_IT"},{"text":"加泰罗尼亚文","id":"ca"},{"text":"匈牙利文 (匈牙利)","id":"hu_HU"},{"text":"法文","id":"fr"},{"text":"英文 (爱尔兰)","id":"en_IE"},{"text":"乌克兰文 (乌克兰)","id":"uk_UA"},{"text":"波兰文 (波兰)","id":"pl_PL"},{"text":"法文 (卢森堡)","id":"fr_LU"},{"text":"荷兰文 (比利时)","id":"nl_BE"},{"text":"英文 (印度)","id":"en_IN"},{"text":"加泰罗尼亚文 (西班牙)","id":"ca_ES"},{"text":"阿拉伯文 (摩洛哥)","id":"ar_MA"},{"text":"西班牙文 (玻利维亚)","id":"es_BO"},{"text":"英文 (澳大利亚)","id":"en_AU"},{"text":"塞尔维亚文","id":"sr"},{"text":"中文 (新加坡)","id":"zh_SG"},{"text":"葡萄牙文","id":"pt"},{"text":"乌克兰文","id":"uk"},{"text":"西班牙文 (萨尔瓦多)","id":"es_SV"},{"text":"俄文 (俄罗斯)","id":"ru_RU"},{"text":"朝鲜文 (韩国)","id":"ko_KR"},{"text":"越南文","id":"vi"},{"text":"阿拉伯文 (阿尔及利亚)","id":"ar_DZ"},{"text":"越南文 (越南)","id":"vi_VN"},{"text":"塞尔维亚文 (黑山)","id":"sr_ME"},{"text":"阿尔巴尼亚文","id":"sq"},{"text":"阿拉伯文 (利比亚)","id":"ar_LY"},{"text":"阿拉伯文","id":"ar"},{"text":"中文 (中国)","id":"zh_CN",selected: true},{"text":"白俄罗斯文 (白俄罗斯)","id":"be_BY"},{"text":"中文 (香港)","id":"zh_HK"},{"text":"日文","id":"ja"},{"text":"希伯来文 (以色列)","id":"iw_IL"},{"text":"保加利亚文 (保加利亚)","id":"bg_BG"},{"text":"印度尼西亚文","id":"in"},{"text":"马耳他文 (马耳他)","id":"mt_MT"},{"text":"西班牙文 (巴拉圭)","id":"es_PY"},{"text":"斯洛文尼亚文","id":"sl"},{"text":"法文 (法国)","id":"fr_FR"},{"text":"捷克文 (捷克共和国)","id":"cs_CZ"},{"text":"意大利文 (瑞士)","id":"it_CH"},{"text":"罗马尼亚文 (罗马尼亚)","id":"ro_RO"},{"text":"西班牙文 (波多黎哥)","id":"es_PR"},{"text":"英文 (加拿大)","id":"en_CA"},{"text":"德文 (德国)","id":"de_DE"},{"text":"爱尔兰文","id":"ga"},{"text":"德文 (卢森堡)","id":"de_LU"},{"text":"德文","id":"de"},{"text":"西班牙文 (阿根廷)","id":"es_AR"},{"text":"斯洛伐克文","id":"sk"},{"text":"马来文 (马来西亚)","id":"ms_MY"},{"text":"克罗地亚文 (克罗地亚)","id":"hr_HR"},{"text":"英文 (新加坡)","id":"en_SG"},{"text":"丹麦文","id":"da"},{"text":"马耳他文","id":"mt"},{"text":"波兰文","id":"pl"},{"text":"阿拉伯文 (阿曼)","id":"ar_OM"},{"text":"土耳其文","id":"tr"},{"text":"泰文 (泰国,TH)","id":"th_TH_TH"},{"text":"希腊文","id":"el"},{"text":"马来文","id":"ms"},{"text":"瑞典文 (瑞典)","id":"sv_SE"},{"text":"丹麦文 (丹麦)","id":"da_DK"},{"text":"西班牙文 (洪都拉斯)","id":"es_HN"}];
};

/**
* 初始化操作
*/
NewSysLookupHiberarchy.prototype.init = function () {
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
		// ExpandColClick: true,  // 点击列时展开
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
		loadComplete: function (datas) { // 表格加载完成事件
			//存在定义根节点的情况,需要对缩进样式重置
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
		},
		onSelectRow: function (rowId,status) {
			//修改父级id后无法选中问题修改
			if(!$('#' + rowId).hasClass('success')){
				$('#' + rowId).addClass('success');
			}
		}
	});
	$(_self._jqgridToolbar).append($('#tableToolbar'));
	// 让树显示字段列的表头居中
	/*$('#jqgh_sysLookupHiberarchyjqGrid_TypeValue').css('text-align', 'center');*/

	$('.date-picker').datepicker({
		beforeShow: function () {
			setTimeout(function () {
				$('#ui-datepicker-div').css("z-index", 99999999);
			}, 100);
		}
    });
	$('.time-picker').datetimepicker({
	 	oneLine:true,//单行显示时分秒
	 	closeText:'确定',//关闭按钮文案
	 	showButtonPanel:true,//是否展示功能按钮面板
	 	showSecond:false,//是否可以选择秒，默认否
	 	beforeShow: function(selectedDate) {
	 		if($('#'+selectedDate.id).val()==""){
	 			$(this).datetimepicker("setDate", new Date());
	 			$('#'+selectedDate.id).val('');
	 		}
	 		setTimeout(function () {
				$('#ui-datepicker-div').css("z-index", 99999999);
			}, 100);
	 	}
	});
	//禁止时间和日期格式手输
	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	//回车查询
	$(_self._keyWordId).on('keydown',function(e){
		if(e.keyCode == '13'){
			_self.searchByKeyWord();
		}
	});
};

/**
* 添加节点页面(平级节点和子节点)
* @param type 平级节点Add/子节点AddSub
* @returns
*/
NewSysLookupHiberarchy.prototype.insert = function (type) {
	var _self = this;
	var rowId = $(this._datagridId).getGridParam('selrow');

	var layerTitle = '', parentId = '';
	if (type == 'Add') {
		layerTitle = '添加平级节点';
		var rowData = $(_self._datagridId).jqGrid('getLocalRow', rowId);
		// if (rowData.parentId == '-1' || rowData.parentId == null) {
		// 	layer.alert('不能插入根节点的平级节点！', {
		// 		icon: 7,
		// 		area: ['400px', ''],
		// 		closeBtn: 0, btn: ['关闭'],
		// 		title: "提示"
		// 	});
		// 	return false;
		// }
		parentId = rowData.parentId;
	} else if (type == 'AddSub') {
		if (rowId == '' || rowId == null) {
        layer.alert('请选择父级节点！', {
            icon: 7,
            area: ['400px', ''], //宽高
            closeBtn: 0,
            btn: ['关闭'],
            title: '提示'
        });
        return false;
    }
		layerTitle = '添加子节点';
		parentId = rowId;
	} else {
		return false;
	}
	this.addIndex = layer.open({
		type: 2,
		area: ['100%', '100%'],
		title: layerTitle,
		skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin: false, //开启最大化最小化按钮
		content: _self.getUrl() + 'newOperation/' + type + '/' + parentId
	});
};

/**
* 编辑页面
*/
NewSysLookupHiberarchy.prototype.modify = function () {
	var _self = this;
	// 此处rowId 即为数据的主键ID
	var rowId =$(this._datagridId).getGridParam('selrow');
	if (rowId == '' || rowId == null) {
		layer.alert('请选择要编辑的数据！', {
			icon: 7,
			area: ['400px', ''], //宽高
			closeBtn: 0,
			btn: ['关闭'],
			title: '提示'
		});
		return false;
	}
	this.editIndex = layer.open({
		type: 2,
		area: ['100%', '100%'],
		title: '编辑',
		skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin: false, //开启最大化最小化按钮
		content: _self.getUrl() + 'newOperation/Edit/' + rowId
	});
};

/**
* 详情页面
*/
NewSysLookupHiberarchy.prototype.detail = function (id) {
	var _self = this;
	this.detailIndex = layer.open({
		type: 2,
		area: ['100%', '100%'],
		title: '详细页',
		skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin: false, //开启最大化最小化按钮
		content: _self.getUrl() + 'newOperation/Detail/' + id
	});
};

/**
* 保存方法
*/
NewSysLookupHiberarchy.prototype.save = function (form, operateId) {
	var _self = this;
	var formDTO = serializeObject(form);
	avicAjax.ajax({
		url: _self.getUrl() + 'saveSysLookupHiberarchy',
		data: {data: JSON.stringify(formDTO)},
		type: 'POST',
		dataType: 'json',
		success: function (r) {
			if (r.flag == 'success') {
				_self.refreshTree(operateId, r.dto.oldParentId, r.dto.parentId);
				_self.closeDialog(operateId);
				layer.msg('保存成功！');
			} else {
				layer.alert('保存失败,请联系管理员!', {
					icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
				});
			}
		}
	});
};

/**
* 删除方法
*/
NewSysLookupHiberarchy.prototype.del = function () {
	var _self = this;
	var rowId = $(this._datagridId).getGridParam('selrow');
	var rowData = $(this._datagridId).jqGrid('getLocalRow', rowId);
	var errorMsg, delValidate = true;
	if (rowId == '' || rowId == null) {
		errorMsg = '请选择要删除的节点！';
		delValidate = false;
	} else {
		if (rowData.leafNode == false) {
			errorMsg = '当前选中节点含有子节点，请先删除子节点！';
			delValidate = false;
		}
	}
	if (delValidate == false) {
		layer.alert(errorMsg, {
			icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
		});
		return false;
	}
	var delIds = rowId;
	layer.confirm('确认要删除选中的数据吗?',
		{icon: 3, title: '提示', area: ['400px', '']},
		function (index) {
			avicAjax.ajax({
				url: _self.getUrl() + 'newDelete',
				/*data: JSON.stringify(delIds),*/
				data: delIds,
				contentType: 'application/json',
				type: 'post',
				dataType: 'json',
				success: function (r) {
					if (r.flag == 'success') {
						_self.refreshTree('delete', '', rowData.parentId);
					} else {
						layer.alert('删除失败,请联系管理员!', {
							icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
						});
					}
				}
			});
			layer.close(index);
		}
	);
}

/**
* 刷新树节点
* @param operateId 操作ID（edit/add/addSub)
* @param oldNodeParentId 操作前节点的父ID
* @param newNodeParentId 操作后节点的父ID
*/
NewSysLookupHiberarchy.prototype.refreshTree = function (operateId, oldNodeParentId, newNodeParentId) {
	var _self = this;
	var partRefresh = true; //是否局部刷新
	if (newNodeParentId == '-1' || operateId == 'edit' && oldNodeParentId != newNodeParentId) {
		partRefresh = false;
	}
	if (partRefresh == true) {
		if(newNodeParentId != null && newNodeParentId !='' && newNodeParentId != undefined){
            var node = $(_self._datagridId).jqGrid('getLocalRow', newNodeParentId);
            $(_self._datagridId).jqGrid('reloadNode', node);
		}else {
            _self.reLoad();
		}
	} else {
		_self.reLoad();
	}
}

/**
* 重载数据
*/
NewSysLookupHiberarchy.prototype.reLoad = function () {
	var _self = this;
	var searchdata = {param: JSON.stringify(serializeObject($(_self._formId)))}
	$(_self._datagridId).jqGrid('setGridParam', {datatype: 'json', postData: searchdata}).trigger('reloadGrid');
};

/**
* 添加根节点(如果需要修改根节点数据通过前台页面设置)
*/
NewSysLookupHiberarchy.prototype.insertRoot = function () {
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

/**
* 关闭对话框
*/
NewSysLookupHiberarchy.prototype.closeDialog = function (id) {
	var _self = this;
	if (id == 'edit') {
		layer.close(_self.editIndex);
	} else if (id == 'add') {
		layer.close(_self.addIndex);
	} else {
		layer.close(_self.detailIndex);
	}
}

/**
* 快速查询
*/
NewSysLookupHiberarchy.prototype.searchByKeyWord = function () {
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
		url: _self.getUrl() + 'search',
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

/**
* 打开高级查询框
*/
NewSysLookupHiberarchy.prototype.openSearchForm = function (searchDiv) {
	var _self = this;
	var contentWidth = 800;
	var top = $(searchDiv).offset().top + $(searchDiv).outerHeight(true);
	var left = $(searchDiv).offset().left + $(searchDiv).outerWidth() - contentWidth;
	var text = $(searchDiv).text();
	var width = $(searchDiv).innerWidth();
	layer.config({
		extend: 'skin/layer-bootstrap.css' // boostraps风格modal外框
	});
	layer.open({
		type: 1,
		shift: 5,
		title: false,
		scrollbar: false,
		move: false,
		area: [contentWidth + 'px', '300px'],
		offset: [top + 'px', left + 'px'],
		closeBtn: 0,
		shadeClose: true,
		btn: ['查询', '清空', '取消'],
		content: $(_self._searchDialogId),
		success: function (layero, index) {
			var serachLabel = $('<div class="serachLabel"><span>' + text + '</span><span class="caret"></span></div>').appendTo(layero);
			serachLabel.bind('click', function () {
				layer.close(index);
			});
			serachLabel.css('width', width + 'px');
		},
		yes: function (index, layero) {
			_self.searchData();
			//查询框关闭
			layer.close(index);
		},
		btn2: function (index, layero) {
			_self.clearData();
			return false;
		},
		btn3: function (index, layero) {

		}
	});
};

/**
* 后台查询
*/
NewSysLookupHiberarchy.prototype.searchData = function () {
	var _self = this;
	var datebox = $('.date-picker,.time-picker');
	var data = [];
	$.each(datebox, function (i, item) {
		data[i] = $(item).val();
	});
	for (var i = 0; i < (data.length / 2); i++) {
		if (data[2 * i] == "" || data[2 * i + 1] == "" || data[2 * i] == null || data[2 * i + 1] == null) {
			continue;
		}
		if (data[2 * i] > data[2 * i + 1]) {
			layer.alert("查询时,结束日期不能小于起始日期 ！", {
				icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: "提示"
			});
			return;
		}
	}
	var emptyInput = true;
	$.each($(this._formId + ' input'), function (index, ele) {
		if ($(ele).val() != '') {
			emptyInput = false;
		}
	});
	//下拉框
    $.each($(this._formId + ' select'), function (index, ele) {
        if ($(ele).val() != '') {
            emptyInput = false;
        }
    });
	if (emptyInput == true) {
		_self.reLoad();
		return;
	}
	var searchdata = {
		keyWord: null,
		param: JSON.stringify(serializeObject($(this._formId)))
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

/**
* 隐藏查询框
*/
NewSysLookupHiberarchy.prototype.hideSearchForm = function () {
	layer.close(searchDialogindex);
};

/**
* 清空查询条件
*/
NewSysLookupHiberarchy.prototype.clearData = function () {
	clearFormData(this._formId);
	this.searchData();
};

/**
 * 控件校验   规则：表单字段name与rules对象保持一致
 */
NewSysLookupHiberarchy.prototype.formValidate = function(form){
	form.validate({
		rules: {
			sysApplicationId:{
			},
			lookupType:{
			},
			systemFlag:{
                required:true
			},
			validFlag:{
                required:true
			},
			parentTypeValue:{
				required:true
			},
			typeKey:{
                required:true
			},
			typeValue:{
				required:true
			},
			orderBy:{
				required:true,
				number:true
			},
			remark:{
			},
			sysLanguageCode:{
			},
			uniqueKey:{
			},
			treeSort:{
				required:true,
				number:true
			}
		}
	});
}


/**
 * 导入
 */
NewSysLookupHiberarchy.prototype.importData = function () {
	var _self = this;
	layer.open({
		type : 2,
		area : [ '70%', '70%' ],
		title : '导入',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : false, //开启最大化最小化按钮
		content : _self.getUrl() + 'importManage',
		success: function(layero, index){
		},
		cancel: function(index, layero){
			_self.reLoad();
		}
	});
};


/**
 * 导出
 */
NewSysLookupHiberarchy.prototype.exportData = function () {
	var _self = this;
	var params = {};
	var url = _self.getUrl() + 'export';
	var ep = new exportData('export', 'export', params, url);
	ep.excuteExport();
};
