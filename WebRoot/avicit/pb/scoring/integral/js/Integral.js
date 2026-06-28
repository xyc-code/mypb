/**
 * 声明Integral对象
 * 
 * @param datagrid
 * @param url
 * @param searchD
 * @param form
 * @param keyWordId
 * @param searchNames
 * @param dataGridColModel
 */
function Integral(datagrid, url, searchD, form, keyWordId, searchNames,
		dataGridColModel) {
	if (!datagrid || typeof (datagrid) !== 'string' && datagrid.trim() !== '') {
		throw new Error("datagrid不能为空！");
	}
	var _url = url;
	this.getUrl = function() {
		return _url;
	}
	this._datagridId = "#" + datagrid;
	this._jqgridToolbar = "#t_" + datagrid;
	this._formId = "#" + form;
	this._searchDialogId = "#" + searchD;
	this._keyWordId = "#" + keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	this.init.call(this);
};
beforeSaveEvent.addBeforeSaveEvent(function(jsonData){
	var flag=false;
	var diseaseType = $("input[name='DISEASE_TYPE']:checked").val();
	var status=$("#STATUS").val();
	var allRowData=$("#INTEGRAL").jqGrid("getRowData");
	if(allRowData.length>1){
		allRowData=swap(allRowData);
	}
	for(var i=0;i<allRowData.length;i++){
		if (allRowData[i].PERSONAL >= 21) {
			layer.msg("履职积分不能大于20分！");
			return false;
		}
	}
	return true;
});
function swap(jsonArr){
	for(var i=0;i<jsonArr.length-1;i++){
		for(var j=0;j<jsonArr.length-1-i;j++){
			if(jsonArr[j].INHOSP_DATE>jsonArr[j+1].INHOSP_DATE){
				var temp=jsonArr[j];
				jsonArr[j]=jsonArr[j+1];
				jsonArr[j+1]=temp;
			}
		}
	}
	return jsonArr;
}
/**
 * 初始化操作
 */
Integral.prototype.init = function() {
	var _self = this;
	var obj = {
		integralDateBegin:new Date().getFullYear()+"-01-01",
		integralDateEnd:new Date().getFullYear()+"-12-31"
	}
	$("#year").val(new Date().getFullYear()+"年")
	if(partyId){
		obj.partyId = partyId;
	}
	var postData = {
		keyWord:null,
		param:JSON.stringify(obj)
	}
	$(_self._datagridId)
			.jqGrid(
					{
						url : _self.getUrl() + 'getIntegralsByPage.json',
						mtype : 'POST',
						datatype : "json",
						toolbar : [ true, 'top' ],
						colModel : _self.dataGridColModel,
						height : $(window).height() - 120,
						width : $(window).width,
						scrollOffset : 5, // 设置垂直滚动条宽度
						rowNum : 20,
						rowList : [ 200, 100, 50, 30, 20, 10 ],
						altRows : true,
						userDataOnFooter : true,
						pagerpos : 'left',
						hasColSet : true,// 设置显隐属性
						loadComplete : function() {
							$(this).jqGrid('getColumnByUserIdAndTableName');
							var rowNum = $(_self._datagridId).jqGrid(
									'getGridParam', 'records');
							if (rowNum < 1) {
								if ($("#emptyRecords").html() == null) {
									$(_self._datagridId)
											.parent()
											.append(
													'<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
															+ '<div style="width:120px; height:140px; padding-top:10%; clear:both; margin:0 auto ;">'
															+ '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
															+ '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
															+ '</div></div>');
								}
								$("#emptyRecords").show();
							} else {
								$("#emptyRecords").hide();
							}
						},
						styleUI : 'Bootstrap',
						viewrecords : true,
						multiselect : true,
						multiboxonly : true,
						autowidth : true,
						shrinkToFit : true,
						responsive : true,// 开启自适应
						pager : "#jqGridPager",
						postData:postData
					});
	$(_self._jqgridToolbar).append($("#tableToolbar"));

	$('.date-picker').datepicker({
		beforeShow : function() {
			setTimeout(function() {
				$('#ui-datepicker-div').css("z-index", 99999999);
			}, 100);
		}
	});
	$('.time-picker').datetimepicker({
		oneLine : true,// 单行显示时分秒
		closeText : '确定',// 关闭按钮文案
		showButtonPanel : true,// 是否展示功能按钮面板
		showSecond : false,// 是否可以选择秒，默认否
		beforeShow : function(selectedDate) {
			if ($('#' + selectedDate.id).val() == "") {
				$(this).datetimepicker("setDate", new Date());
				$('#' + selectedDate.id).val('');
			}
			setTimeout(function() {
				$('#ui-datepicker-div').css("z-index", 99999999);
			}, 100);
		}
	});
	// 禁止时间和日期格式手输
	$('.date-picker').on('keydown', nullInput);
	$('.time-picker').on('keydown', nullInput);
	// 回车查询
	$(_self._keyWordId).on('keydown', function(e) {
		if (e.keyCode == '13') {
			_self.searchByKeyWord();
		}
	});
};
/**
 * 添加页面
 */
Integral.prototype.insert = function() {
	this.insertIndex = layer.open({
		type : 2,
		area : [ '960px', '500px' ],
		title : '添加',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : false, // 开启最大化最小化按钮
		content : this.getUrl() + 'Add/null'
	});
};
/**
 * 编辑页面
 */
Integral.prototype.modify = function() {
	var ids = $(this._datagridId).jqGrid('getGridParam', 'selarrrow');
	if (ids.length == 0) {
		layer.alert('请选择要编辑的数据！', {
			icon : 7,
			area : [ '400px', '' ], // 宽高
			closeBtn : 0,
			btn : [ '关闭' ],
			title : "提示"
		});
		return false;
	} else if (ids.length > 1) {
		layer.alert('只允许选择一条数据！', {
			icon : 7,
			area : [ '400px', '' ], // 宽高
			closeBtn : 0,
			btn : [ '关闭' ],
			title : "提示"
		});
		return false;
	}
	var rowData = $(this._datagridId).jqGrid('getRowData', ids[0]);
	this.editIndex = layer.open({
		type : 2,
		area : [ '960px', '500px' ],
		title : '编辑',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : false, // 开启最大化最小化按钮
		content : this.getUrl() + 'Edit/' + rowData.id
	});
};
/**
 * 详情页面
 */
Integral.prototype.detail = function(id) {
	this.detailIndex = layer.open({
		type : 2,
		area : [ '960px', '500px' ],
		title : '详细页',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : false, // 开启最大化最小化按钮
		content : this.getUrl() + 'Detail/' + id
	});
};
/**
 * 打开高级查询框
 */
Integral.prototype.openSearchForm = function(searchDiv) {
	var _self = this;
	var contentWidth = 800;
	var top = $(searchDiv).offset().top + $(searchDiv).outerHeight(true);
	var left = $(searchDiv).offset().left + $(searchDiv).outerWidth()
			- contentWidth;
	var text = $(searchDiv).text();
	var width = $(searchDiv).innerWidth();

	layer.config({
		extend : 'skin/layer-bootstrap.css' // boostraps风格modal外框
	});

	layer.open({
		type : 1,
		shift : 5,
		title : false,
		scrollbar : false,
		move : false,
		area : [ contentWidth + 'px', '400px' ],
		offset : [ top + 'px', left + 'px' ],
		closeBtn : 0,
		shadeClose : true,
		btn : [ '查询', '清空', '取消' ],
		content : $(_self._searchDialogId),
		success : function(layero, index) {
			var serachLabel = $(
					'<div class="serachLabel"><span>' + text
							+ '</span><span class="caret"></span></div>')
					.appendTo(layero);
			serachLabel.bind('click', function() {
				layer.close(index);
			});
			serachLabel.css('width', width + 'px');
		},
		yes : function(index, layero) {
			_self.searchData();
			layer.close(index);// 查询框关闭
		},
		btn2 : function(index, layero) {
			_self.clearData();
			return false;
		},
		btn3 : function(index, layero) {

		}
	});
};
/**
 * 控件校验规则：表单字段name与rules对象保持一致
 */
Integral.prototype.formValidate = function(form) {
	form.validate({
		rules : {
			punish : {
				number : true
			},
			fkSubColId : {
				maxlength : 50
			},
			punishContent : {
				maxlength : 255
			},
			reward : {
				number : true
			},
			integralDate : {
				dateISO : true
			},
			personal : {
				number : true
			},
			foundationsContent : {
				maxlength : 255
			},
			personalContent : {
				maxlength : 255
			},
			rewardContent : {
				maxlength : 255
			},
			foundations : {
				number : true
			},
			integralContent : {
				number : true
			},
			data1 : {
				maxlength : 255
			},
			userId : {
				maxlength : 255
			},
			sex : {
				maxlength : 255
			},
			partyId : {
				maxlength : 255
			},
			partyName : {
				maxlength : 255
			},
			idNumber : {
				maxlength : 255
			}
		}
	});
}
/**
 * 保存方法
 */
Integral.prototype.save = function(form, id) {
	var _self = this;
	avicAjax.ajax({
		url : _self.getUrl() + "save",
		data : {
			data : JSON.stringify(serializeObject(form))
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			if (r.flag == "success") {
				_self.reLoad();
				if (id == "insert") {
					layer.close(_self.insertIndex);
				} else {
					layer.close(_self.editIndex);
				}
				layer.msg('保存成功！');
			} else {
				var alertMsg = '保存失败,请联系管理员!'
				if (r.errorMsg != null && r.errorMsg != '') {
					alertMsg = r.errorMsg;
				}
				layer.alert(alertMsg, {
					icon : 7,
					area : [ '400px', '' ], // 宽高
					closeBtn : 0,
					btn : [ '关闭' ],
					title : "提示"
				});
			}
		}
	});
};
/**
 * 删除方法
 */
Integral.prototype.del = function() {
	var _self = this;
	var rows = $(_self._datagridId).jqGrid('getGridParam', 'selarrrow');
	var ids = [];
	var delIds = [];
	var l = rows.length;
	if (l > 0) {
		layer.confirm('确认要删除选中的数据吗?', {
			icon : 3,
			title : "提示",
			area : [ '400px', '' ]
		}, function(index) {
			for (; l--;) {
				ids.push(rows[l]);
			}
			avicAjax.ajax({
				url : _self.getUrl() + 'delete',
				data : JSON.stringify(ids),
				contentType : 'application/json',
				type : 'post',
				dataType : 'json',
				success : function(r) {
					if (r.flag == "success") {
						_self.reLoad();
						layer.msg('删除成功！');
					} else {
						layer.alert('删除失败,请联系管理员!', {
							icon : 7,
							area : [ '400px', '' ],
							closeBtn : 0,
							btn : [ '关闭' ],
							title : "提示"
						});
					}
				}
			});
			layer.close(index);
		});
	} else {
		layer.alert('请选择要删除的数据！', {
			icon : 7,
			area : [ '400px', '' ], // 宽高
			closeBtn : 0,
			btn : [ '关闭' ],
			title : "提示"
		});
	}
};
/**
 * 重载数据
 */
Integral.prototype.reLoad = function() {
	var searchdata = {
		param : JSON.stringify(serializeObject($(this._formId)))
	}
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};
/**
 * 关闭对话框
 */
Integral.prototype.closeDialog = function(id) {
	if (id == "insert") {
		layer.close(this.insertIndex);
	} else if (id == "edit") {
		layer.close(this.editIndex);
	} else {
		layer.close(this.detailIndex);
	}
};
/**
 * 后台查询
 */
Integral.prototype.searchData = function() {
	var datebox = $('.date-picker,.time-picker');
	var data = [];
	$.each(datebox, function(i, item) {
		data[i] = $(item).val();
	});
	for (var i = 0; i < (data.length / 2); i++) {
		if (data[2 * i] == "" || data[2 * i + 1] == "" || data[2 * i] == null
				|| data[2 * i + 1] == null) {
			continue;
		}
		if (data[2 * i] > data[2 * i + 1]) {
			layer.alert("查询时,结束日期不能小于起始日期 ！", {
				icon : 7,
				area : [ '400px', '' ], // 宽高
				closeBtn : 0,
				btn : [ '关闭' ],
				title : "提示"
			});
			return;
		}
	}
	var searchdata = {
		keyWord : null,
		param : JSON.stringify(serializeObject($(this._formId)))
	}
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};
/**
 * 快速查询
 */
Integral.prototype.searchByKeyWord = function() {
	var keyWord = $(this._keyWordId).val() == $(this._keyWordId).attr(
			"placeholder") ? "" : $(this._keyWordId).val();
	var names = this._searchNames;

	var param = {};
	for ( var i in names) {
		var name = names[i];
		param[name] = keyWord;
	}
	var searchdata = {
		keyWord : JSON.stringify(param),
		param : null
	}
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
}
/**
 * 隐藏查询框
 */
Integral.prototype.hideSearchForm = function() {
	layer.close(searchDialogindex);
};
/**
 * 清空查询条件
 */
Integral.prototype.clearData = function() {
	clearFormData(this._formId);
	this.searchData();
};
// 获取当前季度
function getQuarter() {
	var Month = $("#QUARTER").val();
	if(!Month){
		Month = new Date().getMonth() + 1;
	}else {
		return Month;
	}
	switch (Month) {
	case 1:
	case 2:
	case 3:
		return 1;
	case 4:
	case 5:
	case 6:
		return 2;
	case 7:
	case 8:
	case 9:
		return 3;
	case 10:
	case 11:
	case 12:
		return 4;
	}
}
var newRowIndex_INTEGRAL = 0;
var newRowStart_INTEGRAL = "new_Inrow";
function setdata(row) {
	var dat = $('#INTEGRAL').jqGrid('getRowData');
	if (dat.length != 1) {
		for (var i = 0; i < row.length; i++) {
			for (var j = 0; j < dat.length; j++) {
				if (dat[j].DATA_1 == row[i].NAME) {
					layer.alert("表格已经存在了选中的某些数据！", {
						icon : 7,
						area : [ '400px', '' ], // 宽高
						closeBtn : 0,
						btn : [ '关闭' ],
						title : "提示"
					});
					throw new TypeError("表格已经存在了选中的某些数据！")
				}
			}
		}
	}
}
function getdata(row, rowid) {
	// 保存数据再获取数据 防止编辑状态数据有误
	$("#INTEGRAL").jqGrid('endEditCell');
	$("#INTEGRAL").jqGrid("delRowData", rowid);
	for (var i = 0; i < row.length; i++) {
		$("#INTEGRALnorecords").hide();
		$("#INTEGRALPager_left").css("display", "block");// 隐藏分页信息
		var newRowId = newRowStart_INTEGRAL + newRowIndex_INTEGRAL;
		var content = "80";
		var quarter = parseInt(getQuarter());
			$.ajax({
				url : "avicit/pb/scoring/integral/integralController/quarry/"
						+ row[i].USER_ID,
				type : "GET",
				async : false,
				data : {
					quary : quarter
				},
				dataType : "JSON",
				success : function(data) {
					if (data.flag == "success") {
						content = data.msg;
					}
				}

			})
		var parameters = {
			rowID : newRowId,
			initdata : {
				DATA_1 : row[i].NAME,
				USER_ID : row[i].USER_ID,
				SEX : row[i].SEXName,
				PARTY_ID : row[i].PARTY_ID,
				PARTY_NAME : row[i].PARTY_NAME,
				ATTR1 : row[i].ATTRIBUTE_01,
				ATTR1VAL : row[i].VAL,
				ID_NUMBER : row[i].IDCARD,
				FOUNDATIONS : typeof (0) !== 'undefined' ? 0 : '0',
				REWARD : typeof (0) !== 'undefined' ? 0 : '0',
				PUNISH : typeof (0) !== 'undefined' ? 0 : '0',
				PERSONAL : typeof (0) !== 'undefined' ? 0 : '0',
				INTEGRAL_DATE : new Date(),
				INTEGRAL_CONTENT : content,
				ATTR2 : content !== '80' ? content : "80"
			},
			position : "first",
			useDefValues : true,
			useFormatter : true,
			addRowParams : {
				extraparam : {}
			}
		}
		$('#INTEGRAL').jqGrid('addRow', parameters);
		newRowIndex_INTEGRAL++;
	}

}
// //function(cellvalue, options, rowObject){return fomrtUserNo(cellvalue,
// options, rowObject);}
// function fomrtDept(cellvalue,options,rowObject){
// var dept = "";
// avicAjax.ajax({
// url: "avicit/pb/scoring/integral/integralController/Make/1",
// data: {"json": JSON.stringify(rowObject)} ,
// type: 'GET',
// dataType: 'json',
// async:false,
// success: function (r) {
// if(r.data[0].flag == "success"){
// dept = r.data[0].USER.deptName;
// }else{
// throw new Error(r.error);
// }
// }
// });
// return dept;
// }
// function fomrtUserNo(cellvalue,options,rowObject){
// var userNo = "";
// avicAjax.ajax({
// url: "avicit/pb/scoring/integral/integralController/Make/1",
// data: {"json": JSON.stringify(rowObject)} ,
// type: 'GET',
// dataType: 'json',
// async:false,
// success: function (r) {
// if(r.data[0].flag == "success"){
// userNo = r.data[0].USER.loginName;
// }else{
// throw new Error(r.error);
// }
// }
// });
// return userNo;
// }

