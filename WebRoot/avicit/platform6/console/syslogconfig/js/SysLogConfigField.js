function SysLogConfigField(datagrid, url, formSub, dataGridColModel,searchDialogSub, pid, searchSubNames, demoSubUser_KeyWord){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
	var	_url=url;
	this.getUrl = function(){
		return _url;
	}
	this._searchDialogId ="#" + searchDialogSub;
	this.searchForm = "#" + formSub;
	this.pid = pid;
	this._datagridId = "#"+ datagrid;
	this.Toolbardiv = "#t_"+ datagrid;
	this.Toolbar = "#toolbar_"+ datagrid;
	this.Pagerlbar = "#" + datagrid + "Pager";
	this._keyWordId="#" + demoSubUser_KeyWord;
	this._searchNames = searchSubNames;
	this.dataGridColModel = dataGridColModel;
	this.notnullFiled=[];//非空字段
	this.notnullFiledComment=[]; //非空字段注释
	//除时间,数字等类型长度校验字段
	this.lengthValidFiled = [];
	//除时间,数字等类型长度校验字段注释
	this.lengthValidFiledComment = [];
	//除时间,数字等类型长度
	this.lengthValidFiledSize = [];
	this.orderByMax = 0;
	this.init.call(this);
}
/**
 * 初始化操作
 * 回车查询
 */
SysLogConfigField.prototype.init=function(pid){
	var _self = this;
	$(_self._datagridId).jqGrid({
		url: _self.getUrl()+'getSysLogConfigField',
		postData : {pid : _self.pid},
		mtype: 'POST',
		datatype: "json",
		toolbar: [true,'top'],
		colModel: _self.dataGridColModel,
		height:$('#children').height() - $("#toolbar_sysLogConfigField").innerHeight()-80,//120:顶部工具栏高+表头高+底部翻页模块高，17：顶部toolbar的内边距高度
		scrollOffset: 10, //设置垂直滚动条宽度
		rowNum: 0	,
		rowList:[200,100,50,30,20,10],
		sortname:'orderBy',
		altRows:true,
		pagerpos:'left',
		hasColSet:false,//设置显隐属性
		hasTabExport: false,
		loadComplete:function(){
			var ids = $(this).jqGrid('getDataIDs');
			if (ids.length > 0) {
				for (var i = 0; i < ids.length; i++) {
					$(this).jqGrid("editRow", ids[i], {
						keys: true,
						oneditfunc : function(rowId){

						},
						selfColumn:'fieldExplicit'
					});
				}
			}
			initTips();
		},
		gridComplete:function(){

		},
		styleUI : 'Bootstrap',
		viewrecords: true, //
		multiselect: true,
		autowidth: true,
		shrinkToFit: true,
		responsive:true,//开启自适应
		cellEdit:true,
		cellsubmit: 'clientArray'
		/*pager: _self.Pagerlbar*/
	});
	$(_self.Toolbardiv).append($(_self.Toolbar));
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
function getMaxOrder(pid,url) {
	var orderByMax=0;
	$.ajax({
		url: url,
		data: {pid: pid},
		type: 'get',
		async: false,
		success: function (r) {
			orderByMax = r;
		}
	})
	return orderByMax;
}

function initTips() {
	var tipsIndex;
	/*$("#dataValueTips").mouseover(function () {
		var message = "<span style='color:#333333;'>当输入类型为自定义转换或通用代码时此列可编辑,自定义转换 例 1:男, 2:女</span>";
		tipsIndex = layer.tips(message, $(this), {
			tips: 2,
			area: ['auto','auto'],
			time: 0,
			tipsMore: true
		});
	}).mouseout(function () {
		layer.close(tipsIndex);
	});*/
	$("#fieldExplicitTips").mouseover(function () {
		var message = "<span style='color:#333333;'>表示该属性是否记录在所有操作类型的日志内容前缀中，用来标识当前数据</span>";
		tipsIndex = layer.tips(message, $(this), {
			tips: 1,
			area: ['auto','auto'],
			time: 0,
			tipsMore: true
		});
	}).mouseout(function () {
		layer.close(tipsIndex);
	});
}

/**
 * 添加页面
 */
var newRowIndex = 10;
var newRowStart = "new_row";
SysLogConfigField.prototype.insert=function(){
	var _self = this;
	var pid = this.pid;
	if(pid === null || pid === undefined || pid === '' ||pid === '-1'){
		layer.alert('请选择一条主表数据！', {
				icon: 7,
				area: ['400px', ''], //宽高
				closeBtn: 0,
				btn: ['关闭'],
				title:"提示"
			}
		);
		return false;
	}else{
		this.insertIndex = layer.open({
			type: 2,
			title: '添加',
			skin: 'bs-modal',
			area: ['60%', '80%'],
			btn:['确认','关闭'],
			maxmin: false,
			content: this.getUrl()+'Add/null',
			btn1:function (index,layero) {
				var iframeWin = layero.find('iframe')[0].contentWindow;
				var r = iframeWin.getColList();
				$.each(r,function (index,element) {
					var parameters = {
						rowID : newRowStart+newRowIndex,
						data:{
							id:newRowStart+newRowIndex,
							logConfigId: pid,
							fieldName:element.fieldName,
							fieldTitle:element.fieldTitle,
							fieldColumn:element.fieldColumn,
							fieldType:element.fieldType,
							dataType:element.dataType,
							dataTypeAlias:element.dataTypeAlias,
							lookUpType:element.lookUpType,
							dataValue:element.dataValue,
							fieldExplicit:element.fieldExplicit,
							createdDept:element.createdDept,
							sysApplicationId:element.sysApplicationId,
							orderBy:_self.orderByMax +=10
						},
						position :"last",
						useDefValues : false,
						useFormatter : true,
					};
					newRowIndex++;
					$(_self._datagridId).jqGrid('addRowData', parameters.rowID,parameters.data);
					$(_self._datagridId).jqGrid("editRow", parameters.rowID, {
						keys: true,
						oneditfunc : function(rowId){

						},
						selfColumn:'fieldExplicit'
					});
				})
				//获取当前层的索引
				layer.close(index); //再执行关闭
			}
		});
	}
};
/**
 * 详情页面
 */
SysLogConfigField.prototype.detail=function(id){
	this.detailIndex = layer.open({
		type: 2,
		area: ['100%', '100%'],
		title: '详细页',
		skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin: false, //开启最大化最小化按钮
		content: this.getUrl()+'Detail/'+id
	});
};
/**
 * 控件校验   规则：表单字段name与rules对象保持一致
 */
SysLogConfigField.prototype.formValidate=function(form){
	form.validate({
		rules: {
			fieldTitle:{
				maxlength: 100
			},
			fieldType:{
				maxlength: 200
			},
			dataType:{
				maxlength: 500
			},
			lookUpType:{
				maxlength: 50
			},
			logConfigId:{
				maxlength: 32
			},
			fieldColumn:{
				maxlength: 50
			},
			dataValue:{
				maxlength: 100
			},
			fieldExplicit:{
				maxlength: 10
			},
			fieldName:{
				required:true,
				maxlength: 50
			},
			createdDept:{
				maxlength: 32
			},
			sysApplicationId:{
				maxlength: 32
			},
			orderBy:{
				number:true
			},
		}
	});
}
/**
 * 保存方法
 */
SysLogConfigField.prototype.save = function(){
	var _self = this;
	try{
		var $info = $(_self._datagridId).jqGrid('endEditCell');
		if($info[0].flag){
			layer.alert("非法含有JS脚本完整标签");
			return false;
		}
	}catch (e) {}
	var data = $(_self._datagridId).jqGrid('getRowData');
	var hasvalidate = true;
	$.each(data,function (index,element) {
		element.fieldExplicit=$("#" + element.id + "_fieldExplicit").is(':checked');
		if(element.dataType==='mapping'||element.dataType==='lookup'){
			if(element.dataValue === null ||element.dataValue.trim() === ''||element.dataValue === undefined){
				layer.alert('选择输入类型之后,通用代码/自定义转换必须有值' , {
						icon: 7,
						area: ['400px', ''], //宽高
						closeBtn: 0,
						btn: ['关闭'],
						title:"提示"
					}
				);
				hasvalidate = false
				return false
			}else if(element.dataType==='mapping'){
				var str =/\d:\S.*/;
				var testValueArr = element.dataValue.split(',');
				var colAttributeName = 0;
				$.each(testValueArr,function (index,item) {
					if(!str.test(item)){
						colAttributeName = element['fieldName']
						hasvalidate = false
						return false;
					}
				})
				if(!hasvalidate){
					layer.alert('属性名称为"'+colAttributeName+'"的行自定义转换列格式错误' , {
							icon: 7,
							area: ['400px', ''], //宽高
							closeBtn: 0,
							btn: ['关闭'],
							title:"提示"
						}
					);
					return false
				}
			}
		}
	})
	$.each(_self.notnullFiled,function(i,item){
		if(hasvalidate){
			var msg = _self.nullvalid(data, item, _self.notnullFiled,_self.notnullFiledComment);
			if(msg && msg.length>0){
				layer.alert(msg , {
						icon: 7,
						area: ['400px', ''], //宽高
						closeBtn: 0,
						btn: ['关闭'],
						title:"提示"
					}
				);
				hasvalidate= false;
				return false;
			}
		}

	});
	$.each(_self.lengthValidFiled,function(i,item){
		if(hasvalidate){
			var msg = _self.lengthvalid(data, item,_self.lengthValidFiled,_self.lengthValidFiledComment, _self.lengthValidFiledSize);
			if(msg && msg.length>0){
				layer.alert(msg , {
						icon: 7,
						area: ['400px', ''], //宽高
						closeBtn: 0,
						btn: ['关闭'],
						title:"提示"
					}
				);
				hasvalidate= false;
				return false;
			}
		}
	});
	if(!hasvalidate){
		return false;
	}
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf(newRowStart) > -1){
				data[i].id = '';
			}
		}
		if(!hasvalidate){
			return false;
		}
		avicAjax.ajax({
			url:_self.getUrl()+"save",
			data : {data :JSON.stringify(data)},
			type : 'post',
			dataType : 'json',
			success : function(r){
				if (r.flag === "success"){
					_self.reLoad();
					layer.msg('保存成功！');
				}else{
					layer.alert('保存失败,请联系管理员!',{
							icon: 7,
							area: ['400px', ''], //宽高
							closeBtn: 0,
							btn: ['关闭'],
							title:"提示"
						}
					);
				}
			}
		});
	}else{
		layer.alert('请先修改数据！', {
				icon: 7,
				area: ['400px', ''], //宽高
				closeBtn: 0,
				btn: ['关闭'],
				title:"提示"
			}
		);
	}
};
/**
 * 删除方法
 */
SysLogConfigField.prototype.del = function(){
	var _self = this;
	var rows = $(_self._datagridId).jqGrid('getGridParam','selarrrow');
	var ids = [];
	var delIds = [];
	var l =rows.length;
	if(l > 0){
		layer.confirm('确认要删除选中的数据吗?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
			for(;l--;){
				if(rows[l].length >= 32){
					ids.push(rows[l]);
				}
				delIds.push(rows[l]);
			}
			if(delIds.length > 0){
				for(var i = 0; i < delIds.length; i++){
					$(_self._datagridId).jqGrid('delRowData',delIds[i]);
					_self.orderByMax -=10;
				}
			}
			if(ids.length > 0){
				avicAjax.ajax({
					url:_self.getUrl()+'delete',
					data:	JSON.stringify(ids),
					contentType : 'application/json',
					type : 'post',
					dataType : 'json',
					success : function(r){
						if (r.flag === "success") {

						}else{
							layer.alert('删除失败,请联系管理员!', {
									icon: 7,
									area: ['400px', ''],
									closeBtn: 0,
									btn: ['关闭'],
									title:"提示"
								}
							);
						}
					}
				});
			}
			layer.close(index);
		});
	}else{
		layer.alert('请选择要删除的数据！', {
				icon: 7,
				area: ['400px', ''], //宽高
				closeBtn: 0,
				btn: ['关闭'],
				title:"提示"
			}
		);
	}
	var rowNum = $(_self._datagridId).jqGrid('getGridParam', 'records');
	if(rowNum < 1){
		$("#emptyRecords").show();
	}
};
/**
 * 重载数据
 */
SysLogConfigField.prototype.reLoad=function(pid){
	this.orderByMax = getMaxOrder(this.pid,this.getUrl() + "getMaxOrder");
	if(pid != undefined){
		this.pid = pid;
	}
	var searchdata = {pid:pid};
	$(this._datagridId).jqGrid('setGridParam',{datatype:'json',postData: searchdata}).trigger("reloadGrid");
};
/**
 * 关闭对话框
 */
SysLogConfigField.prototype.closeDialog=function(id){
	if(id == "insert"){
		layer.close(this.insertIndex);
	}else{
		layer.close(this.editIndex);
	}
};
/**
 * 打开高级查询框
 */
SysLogConfigField.prototype.openSearchForm = function(searchDiv,par){
	var _self = this;
	par = null;
	var contentWidth = 600;
	var top =  $(searchDiv).offset().top + $(searchDiv).outerHeight(true);
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
		move : false,
		area: [contentWidth + 'px', '400px'],
		offset: [top + 'px', left + 'px'],
		closeBtn: 0,
		shadeClose: true,
		btn: ['查询', '清空', '取消'],
		content: $(_self._searchDialogId),
		success : function(layero, index) {
			var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
			serachLabel.bind('click', function(){
				layer.close(index);
			});
			serachLabel.css('width', width + 'px');
		},
		yes: function(index, layero){
			_self.searchData();
			layer.close(index);
		},
		btn2: function(index, layero){
			_self.clearData();
			return false;
		},
		btn3: function(index, layero){

		}
	});
};
/**
 * 去后台查询
 */
SysLogConfigField.prototype.searchData =function(){
	var datebox = $('.date-picker,.time-picker');
	var data = [];
	$.each(datebox,function(i,item){
		data[i] = $(item).val();
	});
	for (var i=0;i<(data.length/2);i++) {
		if(data[2*i] == "" || data[2*i+1] == "" || data[2*i] == null || data[2*i+1] == null){
			continue;
		}
		if(data[2*i]>data[2*i+1]){
			layer.alert("查询时,结束日期不能小于起始日期 ！", {
				icon : 7,
				area : [ '400px', '' ], //宽高
				closeBtn : 0,
				btn : [ '关闭' ],
				title : "提示"
			});
			return;
		}
	}
	var searchdata = {
		keyWord: null,
		pid:this.pid,
		param:JSON.stringify(serializeObject($(this.searchForm)))
	};
	$(this._datagridId).jqGrid('setGridParam',{datatype:'json',postData: searchdata}).trigger("reloadGrid");
};
/**
 * 关键字段查询
 */
SysLogConfigField.prototype.searchByKeyWord =function(){
	var keyWord = $(this._keyWordId).val()==$(this._keyWordId).attr("placeholder") ? "" :  $(this._keyWordId).val();
	var names = this._searchNames;

	var param = {};
	for(var i in names){
		var name = names[i];
		param[name] = keyWord;
	}

	var searchdata = {
		keyWord: JSON.stringify(param),
		pid:this.pid,
		param: null
	};
	$(this._datagridId).jqGrid('setGridParam',{datatype:'json',postData: searchdata}).trigger("reloadGrid");
}
/**
 * 隐藏查询框
 */
SysLogConfigField.prototype.hideSearchForm =function(){
	layer.close(searchDialogindex);
};
/**
 * 清空查询条件
 */
SysLogConfigField.prototype.clearData =function(){
	clearFormData(this.searchForm);
	this.searchData();
};
/**
 * 非空验证
 * @param
 * @param
 */
SysLogConfigField.prototype.nullvalid = function(data,item,nullfiled,notnullFiledComment){
	var msg = "";
	$.each(data,function(i,dataitem){
		if(dataitem[item] == ""){
			temp = false;
			msg = notnullFiledComment[$.inArray(item,nullfiled )]+"为必填字段";
		}
	})
	return msg;
}

/**
 * 长度验证
 * @param
 * @param
 */
SysLogConfigField.prototype.lengthvalid = function(data,item,lengthValidFiled,lengthValidFiledComment,lengthValidFiledSize){
	var msg = "";
	$.each(data,function(i,dataitem){
		if(dataitem[item] != "" && dataitem[item] != undefined && dataitem[item].replace(/[^\x00-\xff]/g,"**").length > lengthValidFiledSize[$.inArray(item,lengthValidFiled)]){
			msg = lengthValidFiledComment[$.inArray(item,lengthValidFiled)]+"的输入长度超过预设长度"+lengthValidFiledSize[$.inArray(item,lengthValidFiled)];
		}
	})
	return msg;
}