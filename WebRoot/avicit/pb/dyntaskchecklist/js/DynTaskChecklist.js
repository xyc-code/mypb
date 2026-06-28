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
function DynTaskChecklist(datagrid,url,searchD,form){
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
};
/**
 * 初始化操作
 * 回车查询
 */
DynTaskChecklist.prototype.init=function(){
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
	_self._datagrid=$(_self._datagridId).datagrid({
		url:_self.getUrl()+"getDynTaskChecklistsByPage.json"
	});
};
/**
 * 打开添加页面
 */
DynTaskChecklist.prototype.insert=function(){
	this.nData = new CommonDialog("insert","850","500",this.getUrl()+'Add/null',"添加",false,true,false);
	this.nData.show();
};
/**
 * 打开编辑页面
 */
DynTaskChecklist.prototype.modify=function(){
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
DynTaskChecklist.prototype.detail=function(id){
	this.nData = new CommonDialog("edit","850","500",this.getUrl()+'Detail/'+id,"详情",false,true,false);
	this.nData.show();
};
/**
 * 保存方法
 * @param form 序列化表单
 * @param callback 回调函数
 */
DynTaskChecklist.prototype.save=function(form,id){
	var _self = this;
	$.ajax({
		url:_self.getUrl()+"save",
		data : {data :JSON.stringify(form)},
		type : 'post',

		dataType : 'json',
		success : function(r){
			if (r.flag == "success"){
				$(id).dialog('close');
				$.messager.show({
					title : '提示',
					msg : '保存成功！'
				});
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
DynTaskChecklist.prototype.del=function(){
	var _self = this;
	var rows = _self._datagrid.datagrid('getChecked');
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
DynTaskChecklist.prototype.reLoad=function(){
	this._datagrid.datagrid('load',{ param : JSON.stringify(serializeObject(this.searchForm))});
};
/**
 * 关闭对话框
 * @param id 关闭的对话框id
 */
DynTaskChecklist.prototype.closeDialog=function(id){
	$(id).dialog('close');
};
/**
 * 打开查询框
 */
DynTaskChecklist.prototype.openSearchForm =function(){
	this.searchDialog.dialog('open',true);
};
/**
 * 去后台查询(查询日期时,结束日期不能小于起始日期)
 */
DynTaskChecklist.prototype.searchData =function(){
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
DynTaskChecklist.prototype.hideSearchForm =function(){
	this.searchDialog.dialog('close',true);
};
/**
 * 清空查询条件
 */
DynTaskChecklist.prototype.clearData =function(){
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
DynTaskChecklist.prototype.format=function(value){
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
DynTaskChecklist.prototype.formatDateTime=function(value){
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
DynTaskChecklist.prototype.searchDataBySfn =function(conditions){
	this._datagrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
	this._datagrid.datagrid('load',conditions);
};
var index;
function searchDataBySfn(){
	window.open("platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/erportsWode?id="+pageParams.id+"&entryid="+pageParams.entryId,"导出");
}
function xcqdyq(){
	var formid = pageParams.id;
	index = layer.open({
		type: 2,
		area: ['35%', '50%'],
		title: '巡查整改任务延期',
		skin: 'bs-modal',
		maxmin: true,
		content : 'platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/operation/Edit/'+formid
	});
}
function layerClose(){

	layer.close(index);

	layer.alert('保存成功！' , {
		icon: 1,
		area: ['400px', ''], //宽高
		closeBtn: 0,
		btn: ['关闭'],
		title:"提示"
	})
}
function xczgshwc(){
	var formid = pageParams.id;
	index = layer.open({
		type: 2,
		area: ['35%', '30%'],
		title: '巡查整改任务是否完成',
		skin: 'bs-modal',
		maxmin: true,
		content : 'platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/Edit/'+formid
	});
}
function bpm(id){
	$.ajax({
		url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/tolcsj?type=1&id="+id,
		type:"get",
		dataType:"JSON",
		async:false,
		success:function(r){
			if(r.result ===null){
				layer.alert('未查到对应流程！' , {
					icon: 2,
					area: ['400px', ''], //宽高
					closeBtn: 0,
					btn: ['关闭'],
					title:"提示"
				})
			}else{
				flowUtils.detail(r.result,2);
			}

		}
	})
}
function bpmFormatter(value,row,inde){
	return '<div onclick="bpm(\''+row.rowId+'\');" class="glyphicon glyphicon-pencil"><div>'
}

function bpmztFormatter(value,row,inde){
	var val;
	$.ajax({
		url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/tolcsj?type=0&id="+row.rowId,
		type:"get",
		dataType:"JSON",
		async:false,
		success:function(r){
			if(r.result == "active"){
				val= "<div>流转中<div>"
			}else if(r.result == "ended"){
				val= "<div>已结束<div>"
			}else if(r.result == null){
				val = "<div>未下放</div>"
			}else{
				val= "<div>未知<div>"
			}
		}
	})
	return val;
}
function sexFromt(value,row,inde){
	return value;

}
function userFromt(value,row,ind){
	var bol= true;
	var data;
	$.ajax({
		url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/getUser?type=1&&id="+value,
		type:"GET",
		async:false,
		dataType:"JSON",
		success:function(r){
			if(r.flag == "error"){
				bol = true;
			}else{
				bol = false;
				data = r
			}
		}
	})
	if(bol){
		return value;
	}else{
		return data.userid;
	}

}
function deptFromt(value,row,ind){
	var bol= true;
	var data;
	$.ajax({
		url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/getUser?type=2&&id="+value,
		type:"GET",
		async:false,
		dataType:"JSON",
		success:function(r){
			if(r.flag == "error"){
				bol = true;

			}else{
				bol = false;
				data = r
			}
		}
	})
	if(bol){
		return value;
	}else{
		return data.deptid;
	}
}

/**
 * 导出导出巡察整改归零表  巡察整改任务清单
 */
function exportWord(){

	var bpmsDeleteRows = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getGridParam', 'selarrrow');
	if(bpmsDeleteRows .length == 0){
		layer.alert('请选择！' , {
			icon: 7,
			area: ['400px', ''],
			closeBtn: 0
		});
		return;
	}
	var  ids =new Array();
	var  nos =new Array();
	for(var i =0;i<bpmsDeleteRows.length;i++){
		var rowData = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getRowData', bpmsDeleteRows[i]);


		if(rowData.ATTRIBUTE_11.indexOf("已结束")==-1){
			layer.alert('请选择流程结束的！' , {
				icon: 7,
				area: ['400px', ''],
				closeBtn: 0
			});
			return
		}

		ids.push(bpmsDeleteRows[i]);
		nos.push(rowData.ATTRIBUTE_02);
	}
	var headData={"ids":ids.join(","),"nos":nos.join(",")};

	var downloadUrl ='platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/erportsWodes';
	var t = new DownLoad4URL('iframe', 'form', headData, downloadUrl);
	t.downLoad();
	//
	//$("<form action='"+url+"' method = 'post' style = 'display:none'></form>").appendTo('body').submit().remove();
}

/**
 * 巡察整改汇总页面
 */
function exportWordHz(){

	var bpmsDeleteRows = $('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('getGridParam', 'selarrrow');
	if(bpmsDeleteRows .length == 0){
		layer.alert('请选择！' , {
			icon: 7,
			area: ['400px', ''],
			closeBtn: 0
		});
		return;
	}

	var  ids =new Array();
	var  nos =new Array();

	for(var i =0;i<bpmsDeleteRows.length;i++){
		var rowData = $('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('getRowData', bpmsDeleteRows[i]);

		if(rowData.tableVirColumn3ccc56bd3e14504931a8e9033f0c916a9c42.indexOf("已结束")==-1){
			layer.alert('请选择流程结束的！' , {
				icon: 7,
				area: ['400px', ''],
				closeBtn: 0
			});
			return
		}
		ids.push(bpmsDeleteRows[i]);
		nos.push(rowData.ATTRIBUTE_02);

	}

	var headData={"ids":ids.join(","),"nos":nos.join(",")};

	var downloadUrl ='platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/erportsWodes';
	var t = new DownLoad4URL('iframe', 'form', headData, downloadUrl);
	t.downLoad();

	//var url ='platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/erportsWode?id='+bpmsDeleteRows[0];
	//$("<form action='"+url+"' method = 'post' style = 'display:none'></form>").appendTo('body').submit().remove();
}

/**
 * 更换责任人或责任领导
 */
function updateForm(){
	var bpmsDeleteRows = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getGridParam', 'selarrrow');
	if(bpmsDeleteRows .length == 0){
		layer.alert('请选择！' , {
			icon: 7,
			area: ['400px', ''],
			closeBtn: 0
		});
		return;
	}

	if(bpmsDeleteRows .length>1){
		layer.alert('请选择一个！' , {
			icon: 7,
			area: ['400px', ''],
			closeBtn: 0
		});
		return;
	}
	index = layer.open({
		type : 2,
		area : [ '50%', '50%' ],
		title : '修改责任人或责任领导',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : false, // 开启最大化最小化按钮
		content : 'avicit/pb/dyntaskchecklist/dynTaskChecklistController/operation/update/'+bpmsDeleteRows[0]
	});



}