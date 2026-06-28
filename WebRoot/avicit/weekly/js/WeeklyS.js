/**
 * 
 * 
 * 
 */

function Weekly(datagrid, url, searchD, form, keyWordId, searchNames,
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
	this._doc = document;
	this._formId = "#" + form;
	this._searchDialogId = "#" + searchD;
	this._keyWordId = "#" + keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	this.init.call(this);
};
// 初始化操作
Weekly.prototype.init = function() {
	var _self = this;
	$(_self._datagridId).jqGrid({
		url : this.getUrl() + 'ryonMessage?xian=1&&is=2',
		mtype : 'get',
		datatype : "json",
		toolbar : [ true, 'top' ],
		colModel : this.dataGridColModel,
		height : $(window).height() - 150,
		scrollOffset : 20, // 设置垂直滚动条宽度
		rowNum : 20,
		 rowList:[1000,500,200,100,20,10],
		altRows : true,
		userDataOnFooter : true,
		pagerpos : 'left',
		loadComplete : function(data) {
			$(this).jqGrid('getColumnByUserIdAndTableName');
		},
		styleUI : 'Bootstrap',
		viewrecords : true,
		multiselect : true,
		autowidth : true,
		shrinkToFit : true,
		responsive : true,// 开启自适应
		pager : "#jqGridPager",
		onCellSelect : function(id, icod, cell, e) {
			if (icod == 5) {
				flowUtils.detail(id, '2')
			}
		}
	});
	$(this._jqgridToolbar).append($("#tableToolbar"));

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
// 添加页面
Weekly.prototype.insert = function() {
	this.insertIndex = layer.open({
		type : 2,
		area : [ '100%', '100%' ],
		title : '发起流程',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : true, // 开启最大化最小化按钮
		content : url
	});
};
// 控件校验 规则：表单字段name与rules对象保持一致
Weekly.prototype.formValidate = function(form) {
	form.validate({
		rules : {
			workTasks : {
				maxlength : 255
			},
			personLiable : {
				maxlength : -1
			},
			fkSubColId : {
				maxlength : 50
			},
			isCompletion : {
				maxlength : 255
			},
			topDateEvolve : {
				maxlength : 255
			},
			completionNode : {
				dateISO : true
			},
			isKeyno : {
				maxlength : 255
			},
			dateEvolve : {
				maxlength : 255
			},
			createdDept : {
				required : true,
				maxlength : 50
			},
			workClass : {
				maxlength : 255
			},
		}
	});
}
// 保存功能
Weekly.prototype.save = function(form, id) {
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
					layer.close(_self.eidtIndex);
				}
				layer.msg('保存成功！');
			} else {
				layer.alert('保存失败！' + r.error, {
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
// 重载数据
Weekly.prototype.reLoad = function() {
	var searchdata = {
		param : JSON.stringify(serializeObject($(this._formId)))
	}
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};
// 关闭对话框
Weekly.prototype.closeDialog = function(id) {
	if (id == "insert") {
		layer.close(this.insertIndex);
	} else {
		layer.close(this.eidtIndex);
	}
};
Weekly.prototype.del = function(row) {
	var rows = row;
	var _self = this;
	var ids = [];
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
				url : _self.getUrl() + 'delete/2',
				data : JSON.stringify(ids),
				contentType : 'application/json',
				type : 'post',
				dataType : 'json',
				success : function(r) {
					if (r.flag == "success") {
						location.reload()
					} else {
						layer.alert('删除失败！' + r.error, {
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
function fabu() {
	$("#weekly_insert").css("display", "")
	$("#weekly_insert")
			.bind(
					'click',
					function() {
						layer
								.open({
									type : 2,
									area : [ '100%', '100%' ],
									title : '发起流程',
									skin : 'bs-modal',
									maxmin : false,
									content : "platform/eform/bpmsCRUDClient/toformJsp?formInfoId=40288199873000540187300f12a80282&grid=table92f3ebe4d1b65d4e948886581ea60a1dff99"
								});
					});
}

function serweekly() {
	$("#weekly_select").css("display", "")
	$("#weekly_select")
			.on(
					'click',
					function() {
						layer
								.open({
									type : 2,
									area : [ '100%', '100%' ],
									title : '搜索周报',
									skin : 'bs-modal',
									maxmin : false,
									content : "platform/avicit/weekly/weeklyController/toWeeklyManageSelect"
								});
					});
}
function searoll() {
	$("#ROll_select").css("display", "");
	$("#ROll_select")
			.on(
					'click',
					function() {
						layer
								.open({
									type : 2,
									area : [ '100%', '100%' ],
									title : '搜索滚动计划',
									skin : 'bs-modal',
									maxmin : false,
									content : "platform/avicit/weekly/weeklyController/toRollingPlanManage"
								});
					});
}
function check() {
	var excel_file = $("#excel_file").val();
	var che = true;
	if (excel_file == "" || excel_file.length == 0) {
		che = false;
		layer.alert('请选择文件路径！', {
			icon : 7,
			area : [ '400px', '' ],
			closeBtn : 0,
			btn : [ '关闭' ],
			title : "提示"
		})

	}
	return che;

};
function upReload() {
	var flag = check();
	if (!flag) {
		return false;
	}	
	console.log($("#form1").val())
	$("#form1").ajaxSubmit({
		url:"platform/avicit/weekly/weeklyController/uoload",
		type:"POST",
		success:function(r){
			if (JSON.parse(r).flage == 'success') {
				console.log(r);
				var str = '{"total:"' + JSON.parse(r).dtoList.length
						+ '","rows":[';
				var arr = new Array();
				for (var i = 0; i < JSON.parse(r).dtoList.length; i++) {
					var PlanDate = new Date(
							JSON.parse(r).dtoList[i].completionNode)
							.format("yyyy-MM-dd");
					arr.push('{"workTasks":'
							+ JSON.parse(r).dtoList[i].workTasks
							+ '","topDateEvolve":"'
							+ JSON.parse(r).dtoList[i].topDateEvolve
							+ '","dateEvolve":"'
							+ JSON.parse(r).dtoList[i].dateEvolve
							+ '","completionNode":' + PlanDate
							+ '","content":'
							+ JSON.parse(r).dtoList[i].content + '"}')
				}
				str += arr.join(",");
				str += ']}';

				try {
					var data = JSON.parse(str);
				} catch (e) {
					layer.alert("JSON转化失败，数据填写错误!", {
						icon : 7,
						area : [ '400px', '' ],
						closeBtn : 0,
						btn : [ '关闭' ],
						title : "提示"
					})
				}
				$("WEEKLY").jqGrid('loadData', data);
				return false;
			} else {
				layer.alert(JSON.parse(r).error, {
					icon : 7,
					area : [ '400px', '' ],
					closeBtn : 0,
					btn : [ '关闭' ],
					title : "提示"
				})
				return false;
			}
		},
		error:function(r){
			console.log(r)
		}
		
});
	
}

/*$("#import").form(
			'submit',
			{
				url : "platform/avicit/weekly/weeklyController/uoload",
				type : 'post',
				success : function(r) {
					if (JSON.parse(r).flage == 'success') {
						console.log(r);
						var str = '{"total:"' + JSON.parse(r).dtoList.length
								+ '","rows":[';
						var arr = new Array();
						for (var i = 0; i < JSON.parse(r).dtoList.length; i++) {
							var PlanDate = new Date(
									JSON.parse(r).dtoList[i].completionNode)
									.format("yyyy-MM-dd");
							arr.push('{"workTasks":'
									+ JSON.parse(r).dtoList[i].workTasks
									+ '","topDateEvolve":"'
									+ JSON.parse(r).dtoList[i].topDateEvolve
									+ '","dateEvolve":"'
									+ JSON.parse(r).dtoList[i].dateEvolve
									+ '","completionNode":' + PlanDate
									+ '","content":'
									+ JSON.parse(r).dtoList[i].content + '"}')
						}
						str += arr.join(",");
						str += ']}';

						try {
							var data = JSON.parse(str);
						} catch (e) {
							layer.alert("JSON转化失败，数据填写错误!", {
								icon : 7,
								area : [ '400px', '' ],
								closeBtn : 0,
								btn : [ '关闭' ],
								title : "提示"
							})
						}
						$("WEEKLY").jqGrid('loadData', data);

					} else {
						layer.alert(JSON.parse(r).error, {
							icon : 7,
							area : [ '400px', '' ],
							closeBtn : 0,
							btn : [ '关闭' ],
							title : "提示"
						})

					}

				}
			})*/


var obj={};
function fomrt(id,c,s){
	if(s==null){
		return
	}
	$.ajax({
	    url:"platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/fomrt?id="+s.ID,
	    dataType:"json",
	    type:"GET",
	    async:false,
	    success: function (r) {
	    	obj.COMMANDOES_CAPTAINS = r.captainsName;
	    	obj.COMMANDOES_TEAM_NAME =r.ChildName;
	    	obj.COMMANDOES_TEAM_DEPT =r.ChildDept;
	    	obj.COMMANDOES_TEAM_AGE =r.ChildAge;
	    	obj.COMMANDOES_TEAM_TASK =r.ChildTask;
	    	obj.COMMANDOES_TEAM_COUNT =r.ChildSize;
	    }
	})
	if(obj.COMMANDOES_CAPTAINS == null || obj.COMMANDOES_CAPTAINS == undefined){
		return "";
	}
	return obj.COMMANDOES_CAPTAINS;
}
function fomrtName(){
	if(obj.COMMANDOES_TEAM_NAME == null || obj.COMMANDOES_TEAM_NAME == undefined){
		return "";
	}
	return obj.COMMANDOES_TEAM_NAME;
}
function fomrtDept(){
	if(obj.COMMANDOES_TEAM_DEPT == null || obj.COMMANDOES_TEAM_DEPT == undefined){
		return "";
	}
	return obj.COMMANDOES_TEAM_DEPT;
}
function fomrtAge(){
	if(obj.COMMANDOES_TEAM_AGE == null || obj.COMMANDOES_TEAM_AGE == undefined){
		return "";
	}
	return obj.COMMANDOES_TEAM_AGE;
}
function fomrtTask(){
	if(obj.COMMANDOES_TEAM_TASK == null || obj.COMMANDOES_TEAM_TASK == undefined || obj.COMMANDOES_TEAM_TASK.lastIndexOf("null") != -1){
		return "";
	}
	return obj.COMMANDOES_TEAM_TASK;
}
function fomrtConut(){
	if(obj.COMMANDOES_TEAM_COUNT == null || obj.COMMANDOES_TEAM_COUNT == undefined){
		return "";
	}
	return obj.COMMANDOES_TEAM_COUNT;
}

