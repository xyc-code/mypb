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
function JgPaymentPlan(datagrid,url,searchD,form){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	};
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    };
	this._datagridId="#"+datagrid;
	this._doc = document;
	this._formId="#"+form;
	this._searchDiaId ="#"+searchD;
	};
/**
 * 初始化操作
 * 回车查询
 */
JgPaymentPlan.prototype.init=function(){
	var _self = this;
	_self.searchDialog = $(_self._searchDiaId).css('display','block').dialog({
		title:'查询'
	});
	_self.searchForm = $(_self._formId).form();
	_self.searchForm.find('input').on('keyup',function(e){
		if(e.keyCode == 13){
			_self.searchData();
		}
	});
	_self.searchDialog.dialog('close',true);
	_self._datagrid=$(_self._datagridId).datagrid({
		url:_self.getUrl()+"getJgPaymentPlansByPage.json"
	});
};
 /**
 * 打开添加页面
 */
JgPaymentPlan.prototype.insert=function(){
	this.nData = new CommonDialog("insert","850","500",this.getUrl()+'Add/null',"添加",false,true,false);
	this.nData.show();
};
/**
 * 打开编辑页面
 */
JgPaymentPlan.prototype.modify=function(){
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
 */
JgPaymentPlan.prototype.detail=function(id){
	this.nData = new CommonDialog("edit","850","500",this.getUrl()+'Detail/'+id,"详情",false,true,false);
	this.nData.show();
};
 /**
 * 保存方法
 * @param form 序列化表单
 * @param callback 回调函数
 */
JgPaymentPlan.prototype.save=function(form,callback){
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
JgPaymentPlan.prototype.del=function(){
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
JgPaymentPlan.prototype.reLoad=function(){
	this._datagrid.datagrid('load',{});
};
/**
 * 关闭对话框
 * @param id 关闭的对话框id
 */
JgPaymentPlan.prototype.closeDialog=function(id){
	$(id).dialog('close');
};

/**
 * 打开查询框
 */
JgPaymentPlan.prototype.openSearchForm =function(){
	this.searchDialog.dialog('open',true);
};
/**
 * 去后台查询(查询日期时,结束日期不能小于起始日期)
 */
JgPaymentPlan.prototype.searchData =function(){
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
	this._datagrid.datagrid('load',{ param : JSON.stringify(serializeObject(this.searchForm))});
};
/**
 * 隐藏查询框
 */
JgPaymentPlan.prototype.hideSearchForm =function(){
	this.searchDialog.dialog('close',true);
};
/**
 * 清空查询条件
 */
JgPaymentPlan.prototype.clearData =function(){
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
JgPaymentPlan.prototype.format=function(value){
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
JgPaymentPlan.prototype.formatDateTime=function(value){
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
JgPaymentPlan.prototype.searchDataBySfn =function(conditions){
    this._datagrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
    this._datagrid.datagrid('load',conditions);
};
        JgPaymentPlan.prototype.secretLevel=[];
Platform6.fn.lookup.getLookupType('PLATFORM_FILE_SECRET_LEVEL',function(r){r&&( JgPaymentPlan.prototype.secretLevel=r);});  
                       JgPaymentPlan.prototype.paymentType=[];
Platform6.fn.lookup.getLookupType('JG_PAYMENT_TYPE',function(r){r&&( JgPaymentPlan.prototype.paymentType=r);});  
                                                                                        