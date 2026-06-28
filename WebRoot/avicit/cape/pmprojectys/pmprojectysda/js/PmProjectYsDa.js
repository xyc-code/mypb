/**
 * 
 */
 /**
 * 创建实例
 * @param datagrid 列表datagrid的id
 * @param url 去后台路径
 * @param searchD 查询框的id
 * @param form 表单id
 */
function PmProjectYsDa(datagrid,url,searchD,form){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
	var	_url=url;
	this.getUrl = function(){
		return _url;
	};
	this._datagridId="#"+datagrid;
	this._doc = document;
	this._formId="#"+form;
	this._searchDiaId ="#"+searchD;
	this._formCode = "pmProjectYsDa";
	};
/**
 * 初始化操作
 * 回车查询
 */
PmProjectYsDa.prototype.init=function(){
	var _self = this;
	_self.searchDialog =$(_self._searchDiaId).css('display','block').dialog({
		title:'查询'
	});
	_self.searchForm = $(_self._formId).form();
	_self.searchForm.find('input').on('keyup',function(e){
		if(e.keyCode == 13){
			_self.searchData();
		}
	});
	_self.searchDialog.dialog('close',true);
	_self._datagrid=$(this._datagridId).datagrid({
		url:_self.getUrl()+"getPmProjectYsDasByPage.json",
		queryParams: { param : JSON.stringify(serializeObject(this.searchForm)), bpmState : $('#bpmState').val(),bpmType : $('#bpmType').val()}
		});
	setBpmMenuState($('#bpmState').val(), $('#bpmType').val());
};
 /**
 * 打开添加页面
 */
PmProjectYsDa.prototype.insert=function(){
	this.nData = new CommonDialog("insert","850","500",this.getUrl()+'Add/null',"添加",false,true,false);
	this.nData.show();
};
/**
 * 打开编辑页面
 */
PmProjectYsDa.prototype.modify=function(){
	var rows = this._datagrid.datagrid('getChecked');
	if(rows.length !== 1){
		$.messager.alert('提示','请选择1条要编辑的记录！','warning');
		return false;
	}
	this.nData = new CommonDialog("edit","850","500",this.getUrl()+'Edit/'+rows[0].id,"编辑",false,true,false);
	this.nData.show();
};
/**
 * 打开详细页面
 * @param id 选中数据id
 * @param value format的字段的文本
 */
PmProjectYsDa.prototype.detail=function(id, value){
					var _self = this;
		var taskUrl =_self.getUrl()+'toDetail?id=' + id;
		if (taskUrl != null && taskUrl != ""&& taskUrl != 'undefined') {
			if (typeof (top.addTab) != 'undefined') {
				top.addTab(value, taskUrl);
			} else {
				window.open(taskUrl);
			}
		}
								};
 /**
 * 保存方法
 * @param form 序列化的表单
 * @param callback 回调函数
 */
PmProjectYsDa.prototype.save=function(form,callback){
	var _self = this;
	$.ajax({
		 url:_self.getUrl()+"save",
		 data : {data :JSON.stringify(form)},
		 type : 'post',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){
				 _self.reLoad();
				 _self._datagrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
				 if(typeof(callback)=="function"){
				 callback(r.id);
				}
			 }else{
				 $.messager.show({
					 title : '提示',
					 msg : "保存失败,请联系管理员!"
				 });
				 			 } 
		 }
	 });
};
/**
 * 删除方法
 */
PmProjectYsDa.prototype.del=function(){
	var rows = this._datagrid.datagrid('getChecked');
	var _self = this;
	var ids = [];
	var l =rows.length;
	if(l > 0){
	  $.messager.confirm('请确认','您确定要删除当前所选的数据？',function(b){
		 if(b){
			 for(;l--;){
				 ids.push(rows[l].id);
			 }
			 			 $.ajax({
				 url:_self.getUrl()+'delete',
				 data:	JSON.stringify(ids),
				 contentType : 'application/json',
				 type : 'post',
				 dataType : 'json',
				 success : function(r){
					 if (r.flag == "success") {
						 _self.reLoad();
						 _self._datagrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
						 $.messager.show({
							 title : '提示',
							 msg : '删除成功！'
						});
					}else{
						$.messager.show({
							 title : '提示',
							 msg : "删除失败,请联系管理员!"
						});
					}
									 }
			 });
		 } 
	  });
	}else{
	  $.messager.alert('提示','请选择要删除的记录！','warning');
	}
};
/**
 * 重载数据
 */
PmProjectYsDa.prototype.reLoad=function(){
	this._datagrid.datagrid('load',{ param : JSON.stringify(serializeObject(this.searchForm)), bpmState : $('#bpmState').val(),bpmType : $('#bpmType').val()});
};
/**
 * 关闭对话框
 * @param id 对话框id
 */
PmProjectYsDa.prototype.closeDialog=function(id){
	$(id).dialog('close');
};

/**
 * 打开查询框
 */
PmProjectYsDa.prototype.openSearchForm =function(){
	this.searchDialog.dialog('open',true);
};
/**
 * 去后台查询(日期查询时,结束日期不能小于起始日期)
 */
PmProjectYsDa.prototype.searchData =function(){
	var datebox = $('.easyui-datebox');
	var data = [];
	$.each(datebox,function(i,item){
		 data[i] = $(item).datebox("getValue");
	});
	for (var i=0;i<(data.length/2);i++) {
		if(data[2*i] == "" || data[2*i+1] == "" || data[2*i] == null || data[2*i+1] == null){
			continue;
		}
		if(data[2*i]>data[2*i+1]){
				$.messager.show({
					title : '提示',
					msg : "查询时,结束日期不能小于起始日期 ！",
					timeout:3000,  
		            showType:'slide'  
				});
				return;
		}
	}
	this._datagrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
	this._datagrid.datagrid('load',{ param : JSON.stringify(serializeObject(this.searchForm)), bpmState : $('#bpmState').val(),bpmType : $('#bpmType').val()});
};
/**
 * 隐藏查询框
 */
PmProjectYsDa.prototype.hideSearchForm =function(){
	this.searchDialog.dialog('close',true);
};
/**
 * 清空查询条件
 */
PmProjectYsDa.prototype.clearData =function(){
	this.searchForm.find('input[type=text]').val('');
	this.searchForm.find('input[type=hidden]').val('');
	this.searchForm.find('textarea').val('');//对 textarea中内容进行清除
	this.searchForm.find("input[type=checkbox]").attr("checked",false);//对 checkbox中内容进行清除
	this.searchForm.find("input[type=radio]").attr("checked",false);//对 radio中内容进行清除
	this.searchData();
};
/**
 * 日期格式化
 * @param value 格式化的值
 */
PmProjectYsDa.prototype.format=function(value){
	if(value){
		if($.browser.msie){
			if(typeof(value) == "number"){
				return new Date(value).format("yyyy-MM-dd");
			}else{
				var num = new Date((value).replace(new RegExp("-","gm"),"/")).getTime();
				return new Date(num).format("yyyy-MM-dd");
			}
		}else{
			return new Date(value).format("yyyy-MM-dd");
		}
	}
	return '';
};
/**
 * 时间格式化
 * @param value 格式化的值
 */
PmProjectYsDa.prototype.formatDateTime=function(value){
	if(value){
		if($.browser.msie){
			if(typeof(value) == "number"){
				return new Date(value).format("yyyy-MM-dd hh:mm:ss");
			}else{
				var num = new Date((value).replace(new RegExp("-","gm"),"/")).getTime();
				return new Date(num).format("yyyy-MM-dd hh:mm:ss");
			}
		}else{
			return new Date(value).format("yyyy-MM-dd hh:mm:ss");
		}
	}
	return '';
};
/**
 * 高级查新
 * @param conditions 查询条件
 */
PmProjectYsDa.prototype.searchDataBySfn =function(conditions){
	this._datagrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
	 this._datagrid.datagrid('load', conditions);
};
/**
 * 打开遮罩
 * @param msg 显示信息
 */
PmProjectYsDa.prototype.ShowMask = function(msg){
	if(msg == null || msg == "")
		msg = "正在提交数据，请等待...";
	$('#mask').dialog({
	    title: msg
	});

	if(!this.maskisopen){
		$('#mask').dialog("open");
		this.maskisopen = true;
	}
};
/**
 * 关闭遮罩
 * @param time 时间
 */
PmProjectYsDa.prototype.HidMask = function(time){
	var _self = this;
	if(time == null){
		if(_self.maskisopen){
			$("#mask").dialog("close");
			_self.maskisopen = false;
		}
	}else{
		setTimeout(function(){
			if(_self.maskisopen){
				$("#mask").dialog("close");
				_self.maskisopen = false;
			}
		},time);
	}
};
/**
 * 初始化流程状态
 * @param status 流程状态
 * @param type 归属类型
 */
PmProjectYsDa.prototype.initWorkFlow = function(state, type) {
	setBpmMenuState(state,type);
	$('#bpmState').val(state);
	$('#bpmType').val(type);
	
	pmProjectYsDa.reLoad();
};

/**
 * 保存并启动流程
 * @param form 序列化的表单
 * @param page 对话框id
 */
PmProjectYsDa.prototype.saveFormAndStartFlow = function(form, page) {
	var _self = this;
		dataVo = JSON.stringify(form);
	// 打开流程选择对话框
	var processDef = new StartProcessByFormCode();
	processDef.SetFormCode(_self._formCode);
	StartProcessByFormCode.prototype.doStart = function(pdId) {
		/* 将表单代码、业务数据、流程定义ID提交到Java端 */
		$.ajax({
			url : _self.getUrl() + 'saveAndStartProcess.json',
			data : {
				processDefId : pdId,
				formCode : _self._formCode,
				datas : dataVo
			},
			type : 'post',
			dataType : 'json',
			success : function(result) {
				if (result.flag == "success") {
					$.messager.show({
						title : '提示',
						msg : "操作成功。"
					});
					_self.reLoad();
					_self._datagrid.datagrid('uncheckAll').datagrid(
							'unselectAll').datagrid('clearSelections');
					_self.closeDialog(page);

					//流程实例ID
					var taskUrl = result.bp.taskUrl; // 待办URL
					// 打开待办审批页面
					if (taskUrl != null && taskUrl != ""
							&& taskUrl != 'undefined') {
						if (typeof (top.addTab) != 'undefined') {
							top.addTab("流程表单", getPath() + "/" + taskUrl);
						} else {
							window.open(getPath() + "/" + taskUrl);
						}
					}
				} else {
					$.messager.show({
						title : '提示',
						msg : "操作失败,请联系管理员!"
					});
				}
							}
		});
	};
	processDef.start();
	};

        PmProjectYsDa.prototype.secretLevel=[];
Platform6.fn.lookup.getLookupType('PLATFORM_FILE_SECRET_LEVEL',function(r){r&&( PmProjectYsDa.prototype.secretLevel=r);});  
                                                                                                                        