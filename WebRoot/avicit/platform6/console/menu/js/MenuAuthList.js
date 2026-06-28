/**
 * 初始化对象
 * @param datagrid 表格Id
 * @param url URL参数
 * @param searchDialogId 高级查询Id
 * @param form 高级查询formId
 * @param keyWordId 关键字查询框Id
 * @param searchNames 关键字查询项名称Array
 * @param dataGridColModel 表格列属性Array
 */
function ConsoleResource( dataresourcegrid,url,form,menuId,keyWordId,dataresourceGridColModel){
	if(!dataresourcegrid || typeof(dataresourcegrid)!=='string'&&dataresourcegrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    } 
	this._datagridId="#"+dataresourcegrid;
 
	this._menuId = menuId;
	this._jqgridToolbar="#t_"+dataresourcegrid;
	this._keyWordId="#"+keyWordId;
	this.notnullFiled=["key","value"];//非空字段
	this.notnullFiledComment=["权限名称","权限标识"]; //非空字段注释
	
	this.lengthValidFiled = ["key","value" ];
	this.formatterValidFiled=["value"];
	//除时间,数字等类型长度校验字段注释
	this.lengthValidFiledComment = ["权限名称","权限标识"];
	//
	this.lengthValidFiledSize = [100,150];
	var _onSelect=function(){};//单击node事件
    
	this.getOnSelect=function(){
		return _onSelect;
	};
	this.setOnSelect=function(func){
		_onSelect=func;
		return this;
	};
	this.initData = [];
	this.isedit = false;
	this._doc = document;
	this._formId="#"+form;  
	this.dataresourceGridColModel = dataresourceGridColModel;
};
/**
 * 初始化操作
 */

var beforeSelectRowId;
ConsoleResource.prototype.init = function() {

	var _self = this; 
	var jqgridHeight = $(window).height() - 120 - 40;
	var hasTop = true;
 


	$(_self._datagridId).jqGrid({
		url: this.getUrl()+'/operation/getMenuAuthListByMenuId/'+this._menuId,
		mtype : 'POST',
		datatype : "json",
		//postData : param,
		toolbar : [ hasTop, 'top' ],//启用toolbar
		colModel : this.dataresourceGridColModel,//表格列的属性
		height : jqgridHeight,//初始化表格高度
		scrollOffset : 20, //设置垂直滚动条宽度
		//rowNum : 100,//每页条数
		//rowList : [ 200, 100, 50, 30, 20, 10 ],//每页条数可选列表
		altRows : true,//斑马线
		pagerpos : 'left',//分页栏位置
		//rownumbers: true,
		//rownumWidth: 30,
		loadComplete : function(data) {
		 
			consoleResource.setData(data.rows);
			$(this).jqGrid('getColumnByUserIdAndTableName');
			var ids = $(this).jqGrid('getDataIDs');
			if (ids.length > 0) {
				for (var i = 0; i < ids.length; i++) {
					//如果可编辑，则开启行编辑
					if(false){
						$(this).jqGrid("editRow", ids[i], {
							keys: true
						})
					}
					var rowid = ids[i]; 
					 

				}
			}
		},
		styleUI : 'Bootstrap', //Bootstrap风格
		viewrecords : true, //是否要显示总记录数
		multiselect : true,//可多选
		autowidth : true,//列宽度自适应
		multiboxonly:true,
		hasTabExport:false,
		hasColSet:false,
	   
 
		//pager : "#jqGridPager",
		cellEdit : this.isedit,
		cellsubmit : 'clientArray',
		onCellSelect: function(rowid, index, contents, event){

		},
		gridComplete: function() {
			//已分配 数量 和 已清分数量不等时，标粉
			_self.afterCompleteFunction();
		},
	    onSelectRow: function(rowid, e){
	     
	          if(e){ 
	        	 if(beforeSelectRowId != null && beforeSelectRowId != undefined && beforeSelectRowId !=""){
	        	  $(_self._datagridId).jqGrid('saveRow', beforeSelectRowId); 
	        	  }
	        	  $(_self._datagridId).jqGrid("editRow", rowid, { keys: true });
	        	  beforeSelectRowId = rowid; 
	              return true;  
	          }else{
	        	  $(_self._datagridId).jqGrid('saveRow', beforeSelectRowId); 
	          }
	          return false;
	      } ,
		beforeEditCell : function (rowid, cellname, value, iRow, iCol){

		},
		afterSaveCell:function(rowid, cellname, value, iRow, iCol){

		} 

	});
	//$(this._datagridId).jqGrid('sortableRows');//实现行拖拽
	//放入表格toolbar中
	$(this._jqgridToolbar).append($("#tableToolbarResource"));

	//初始化时间控件
	$('.date-picker').datepicker({
		beforeShow : function() {
			setTimeout(function() {
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
	//初始化校验字段
	_self.lengthValidFiled.push("key");
	_self.lengthValidFiledSize.push(100);
	_self.lengthValidFiledComment.push("权限标识");
	_self.lengthValidFiled.push("value");
	_self.lengthValidFiledSize.push(150);
	_self.lengthValidFiledComment.push("权限名称");
	 
};
function EditSelectRow(id)
{
    //原选中行ID
    var oldSelectRowId = $("#selectRowId").val();
    if (oldSelectRowId != null && oldSelectRowId != "" && oldSelectRowId.length > 0) {
        $(_self._datagridId).jqGrid('saveRow', oldSelectRowId);//保存上一行
    }

 
    $(_self._datagridId).jqGrid('editRow', id, { keys: true, focusField: 1 });
}


/**
 * 添加页面
 */
var newRowIndex = 0;
var newRowStart = "new_row";
ConsoleResource.prototype.insert = function(rowData) {
	var _self = this; 
	var newRowId = newRowStart + newRowIndex; 

	if(rowData == undefined){
		rowData = {key:"permissionName",value:"component:module:method",id:""};
	}
	var parameters = {
		rowID : newRowId,
		initdata : rowData,
		position : "last",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {
			extraparam : {}
		}
	};

	$(this._datagridId).jqGrid('addRow', parameters);
	$("#"+newRowId).addClass("edited");

	if(true){
		$(this._datagridId).jqGrid("editRow", newRowId, {
			keys: true
		})
	}
 
	newRowIndex++;
};

ConsoleResource.prototype.isBaseCol = function(colName,isPk){
	if(colName == "LAST_UPDATE_DATE" || colName == "LAST_UPDATED_BY" 
		|| colName == "CREATION_DATE" || colName == "CREATED_BY" 
			|| colName =="LAST_UPDATE_IP" || colName == "VERSION" || colName == "ORG_IDENTITY" || colName == "CREATED_DEPT"|| isPk =="Y"){
		return true;
	}
	return false;
};

ConsoleResource.prototype.afterCompleteFunction = function(){
	//获取列表数据
	var ids = $(this._datagridId).jqGrid("getDataIDs");
	var rowDatas = $(this._datagridId).jqGrid("getRowData");
	for(var i=0;i < rowDatas.length;i++){
		var rowData = rowDatas[i];
		var colName = rowData.colName; 
		var isPk = rowData.colIsPk;
		if(this.isBaseCol(colName,isPk)){
		//获取每行下的TD更改CSS
		//第一种写法
		//$("#"+rowData.crmCustContractId).find("td").css("background-color", "pink");
		//第2种写法
			$("#"+ids[i]+ " td").css("background-color","rgb(208,208,208)");//--------(1)
		//alert($("#"+rowData.crmCustContractId).find("td")[0]);
		}
	}
	return true;
};

/**
 * 非空验证
 * @param 
 * @param 
 */
ConsoleResource.prototype.nullvalid = function(data, item, nullfiled,
		notnullFiledComment) {
	var msg = "";
	$.each(data, function(i, dataitem) {
		if (dataitem[item] == "") {
			temp = false;
			msg = notnullFiledComment[$.inArray(item, nullfiled)] + "为必填字段";
		}
		if(dataitem.colIsPk == "Y"){
			dataitem.colIsSys = "Y";
		}else{
			dataitem.colIsSys = "N";
		}
	});
	return msg;
};

ConsoleResource.prototype.setData = function(data){
	for (var i=0;i<data.length;i++){
		this.initData.push({id:data[i].id,data:data[i]});
	}
};

ConsoleResource.prototype.getData = function(id){
	var _this = this;
    for (var i = 0; i < _this.initData.length; i++) {
        var jsonobj = _this.initData[i];
        if (jsonobj.id == id) {
            return jsonobj.data;
        }
    }
};

 
/**
 * 长度验证
 * @param 
 * @param 
 */
ConsoleResource.prototype.lengthvalid = function(data,item,lengthValidFiled,lengthValidFiledComment,lengthValidFiledSize){
	var msg = "";
	$.each(data,function(i,dataitem){
		if(dataitem[item] != "" && dataitem[item].replace(/[^\x00-\xff]/g,"**").length > lengthValidFiledSize[$.inArray(item,lengthValidFiled)]){
			msg = lengthValidFiledComment[$.inArray(item,lengthValidFiled)]+"的输入长度超过预设长度"+lengthValidFiledSize[$.inArray(item,lengthValidFiled)];
	    }
	})
	return msg;
}

/**
 * 计算本次需要新增的数据
 */
ConsoleResource.prototype.addData = function(){
	var newdata = new Array();
	 
	this.initData;
	var rows= $(this._datagridId).jqGrid("getRowData");
	 for(var i = 0;i<rows.length;i++){
		 
		 if(rows[i].id === ""){
			 continue;
		 }
     var jsonobj  = consoleResource.getData(rows[i].id);
      if(jsonobj.key !== rows[i].key ||  jsonobj.value !== rows[i].value ){
    	  newdata.push(rows[i]);
      }
    
	 }
	
	 
	return newdata;
}



/**
 * 保存功能
 * @param form
 * @param callback
 */
ConsoleResource.prototype.save = function(id) {
	var _self = this;
	//$(this._datagridId).jqGrid('endEditCell');
	var data = $(this._datagridId).jqGrid('getRowData');
	for(var i=0;i<data.length;i++)
	  {
		    data[i].key = $('#'+$(data[i].key).attr("id")).val()==undefined?data[i].key:$('#'+$(data[i].key).attr("id")).val();
			data[i].value = $('#'+$(data[i].value).attr("id")).val()==undefined?data[i].value:$('#'+$(data[i].value).attr("id")).val();
		   
     } 
	
	var hasvalidate = true;
	$.each(_self.notnullFiled,function(i,item){
		var msg = _self.nullvalid(data, item, _self.notnullFiled,_self.notnullFiledComment);
		if(msg && msg.length>0){
			layer.alert(msg , {
				  title : '提示',
    			  icon: 7,
    			  area: ['400px', ''], //宽高
    			  closeBtn: 0
    			 }
    		);
			hasvalidate= false;
			return false;
		}
	});
	
	$.each(_self.formatterValidFiled,function(i,item){
		if(hasvalidate){
			var msg = _self.formatterValid(data, item,_self.formatterValidFiled);
			if(msg && msg.length>0){
				layer.alert(msg , {
					  title : '提示',
	    			  icon: 7,
	    			  area: ['400px', ''], // 宽高
	    			  closeBtn: 0
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
					  title : '提示',
	    			  icon: 7,
	    			  area: ['400px', ''], //宽高
	    			  closeBtn: 0
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
		$.ajax({
			 url:this.getUrl()+'/operation/save/'+this._menuId,
			 data : {data :JSON.stringify(data)},
			 type : 'post',
			 dataType : 'json',
			 success : function(r){
				 if (r.flag == "success"){
					 _self.reLoad();
					 var parentIndex = parent.layer.getFrameIndex(window.name);
					 var records = $(_self._datagridId).jqGrid('getGridParam', 'records');
					 var title = "已配置"+records+"项";
					 parent.layer.title("权限"+"<span style =\'color:blue;font-weight: 500;\'>("+title+")</span>",parentIndex);
					 layer.msg('保存成功！',{
						 icon: 1,
						 area: ['200px', ''],
						 closeBtn: 0
					 }
					 );
				 }else{
					 layer.alert('保存失败！' + r.error, {
					  icon: 2,
					  area: ['400px', ''], //宽高
					  closeBtn: 0
					}
				);
				 } 
			 }
		 });
		 
	}else{
	    layer.alert('没有修改权限数据！', {
					  icon: 0,
					  area: ['400px', ''], //宽高
					  closeBtn: 0,
					  title:'提示'
					}
		);
	}
};

/**
 * 详细页
 * @param id
 */
ConsoleResource.prototype.detail = function(id) {
	this.detailIndex = layer.open({
		type : 2,
		area : [ '100%', '100%' ],
		title : '详细',
		skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
		maxmin : false, //不显示最大化最小化按钮
		content : this.getUrl() + 'Detail/' + id
	});
};
/**
 * 格式验证
 */
ConsoleResource.prototype.formatterValid = function(data,item,valuefiled){
	var msg = "";
   $.each(data,function(i,dataitem){
        var attribute = dataitem[item] ;
        if(typeof (attribute) == "string" ){
            dataitem[item] = attribute.replace(/(^\s*)|(\s*$)/g,"");
            if(dataitem[item].split(':').length !== 3){
            	msg =  "权限标识格式不正确";	
            }
        }
		if(dataitem[item] == ""){
			temp = false;
			msg = notnullFiledComment[$.inArray(item,nullfiled )]+"为必填字段";
	    }
	})
	return msg;
}
/**
 * 删除
 */
ConsoleResource.prototype.del = function() {
	//$(this._datagridId).jqGrid('endEditCell');
	var rows = $(this._datagridId).jqGrid('getGridParam', 'selarrrow');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if (l > 0) {
		layer.confirm('确认要删除选择的权限资源吗?', {
			icon : 3,
			title : "提示：",
			closeBtn : 0,
			area : [ '400px', '' ]
		}, function(index) {
			for(;l--;){
                ids.push(rows[l]);
                var rowsdata =$(_self._dataresourcegridId).jqGrid('getRowData',rows[l]);
                if(rows[l].indexOf("new_row") > -1){
                    _self.reLoad();
                    layer.close(index);
                    return;
                }
			 }
			var nowRowsCount = $(_self._datagridId).getGridParam("reccount");
			if(nowRowsCount==0){
				_self.reLoad();
			}
			if (ids.length>0){
				
				avicAjax.ajax({
				    url:_self.getUrl()+'/operation/delete',
					data : JSON.stringify(ids),
					contentType : 'application/json',
					type : 'post',
					dataType : 'json',
					success : function(r) {
						if (r.flag == "success") {
							layer.msg('删除成功！');
							
							//解决删除数据后刷新页面未实时变化导致统计数据有误
							for (var i = 0; i < ids.length; i++) {
								$(_self._datagridId).jqGrid("delRowData", ids[i]);
							}
							
							_self.reLoad();
							var parentIndex = parent.layer.getFrameIndex(window.name);
							var records = $(_self._datagridId).jqGrid('getGridParam', 'records');
							var title = "已配置" + records + "项";
							parent.layer.title("权限" + "<span style =\'color:blue;font-weight: 500;\'>(" + title + ")</span>", parentIndex);
						} else {
							layer.alert('删除失败！' + r.error, {
								icon : 7,
								area : [ '400px', '' ],
								closeBtn : 0
							});
						}
					}
				});
			}
			layer.close(index);
		});
	} else {
		layer.alert('请选择要删除的记录！', {
			title : "提示：",
			icon : 7,
			area : [ '400px', '' ], //宽高
			closeBtn : 0
		});
	}
};

 

/**
 * 重载数据
 */
ConsoleResource.prototype.reLoad = function() {
	var searchdata = {
		keyWord : null,
		param : JSON.stringify(serializeObject($(this._formId)))
	};
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};

/**
 * 打开高级查询框
 * @param searchBtn 高级查询按钮HTMLObject对象
 * @param contentWidth 高级查询框宽度
 * @param contentHeight 高级查询框高度
 */
ConsoleResource.prototype.openSearchForm = function(searchDiv) {
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
		content : $(this._searchDialogId),
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
			layer.close(index);//查询框关闭
		},
		btn2 : function(index, layero) {
			clearFormData(_self._formId); //清空数据
			_self.searchData(); //查询
			return false;
		},
		btn3 : function(index, layero) {

		}
	});
};

/**
 * 高级查询
 */
ConsoleResource.prototype.searchData = function() {
	var searchdata = {
		keyWord : null,
		param : JSON.stringify(serializeObject($(this._formId)))
	};
	$(this._datagridId).jqGrid('setGridParam', {
		datatype : 'json',
		postData : searchdata
	}).trigger("reloadGrid");
};

/**
 * 关键字查询
 */
//关键字段查询 
var resourceData = new Array();
ConsoleResource.prototype.searchByKeyWord = function() {
	var result = new Array();
 	var obj = $(this._datagridId).jqGrid("getRowData");
	//var obj = this.initData;
	if(resourceData.length == 0){
      resourceData = obj;
	}
	if(resourceData.length > obj.length){
		obj = resourceData;
	}
	$(this._datagridId).jqGrid('clearGridData');
   var keyWord = $(this._keyWordId).val();
    if(keyWord !=null && keyWord !='' && keyWord!=undefined){
        keyWord = $.trim(keyWord);
		for (i = 0; i < obj.length; i++) {
			var  key = obj[i].key.indexOf(keyWord) >= 0;
			var value = obj[i].value.indexOf(keyWord) >= 0;
			if (key || value ) {
				result.push(obj[i]);
				$(this._datagridId).jqGrid('addRowData',i+1,obj[i]);
			} 
		}
     
    }else{ 
        for(var i=0;i<=resourceData.length;i++){
            jQuery(this._datagridId).jqGrid('addRowData',i+1,resourceData[i]);
       }
    } 
}

ConsoleResource.prototype.copytable = function(){
	var _this = this;

	this.copyDialog = layer.open({
		type: 2,
		title: '拷贝本地数据表',
		skin: 'bs-modal',
		area: ['60%', '60%'],
		maxmin: false,
		content: "platform/db/dbCommonColController/toCopyJsp"
	});
};

ConsoleResource.prototype.copyrow = function(){
	var _self = this;

	var ids = $(this._datagridId).jqGrid('getGridParam','selarrrow');
	if(ids.length == 0){
		layer.alert('请选择要复制的行！', {
				icon: 7,
				area: ['400px', ''], //宽高
				closeBtn: 0,
				btn: ['关闭'],
				title:"提示"
			}
		);
		return false;
	}
	for(var i = 0; i< ids.length; i++){
		var rowData = $(this._datagridId).jqGrid('getRowData',ids[i]);
		//rowData.key = $('#'+$(rowData.key).attr("id")).val();
		//rowData.value = $('#'+$(rowData.value).attr("id")).val();
		rowData.key = $('#'+$(rowData.key).attr("id")).val()==undefined?rowData.key:$('#'+$(rowData.key).attr("id")).val();
		rowData.value = $('#'+$(rowData.value).attr("id")).val()==undefined?rowData.value:$('#'+$(rowData.value).attr("id")).val();
	
		 
        rowData.id = ''; 
  	    this.insert(rowData);
	}
};

 
// 关闭对话框
ConsoleResource.prototype.closeDialog = function(id) {
	if (id == "copy") {
		layer.close(this.copyDialog);
	}
};


ConsoleResource.prototype.searchWord = function(val) {
	var search_param = new Array(); //用于保存筛选规则
	var a = new GridSearch($(this._datagridId)); //创建实例-传入JqGrid的对象
	search_param.push({
		rule_name: 'vague', //筛选方式
		str: val, //筛选值
		column: 'colName' //列名
	});
	a.set_search_param(search_param); //提交设置规则
	a.search();
}

/*
        jqGrid 前端筛选功能
    */
var GridSearch = function (grid) {

	this.grid = grid;
	this.search_param = null;
	this.r = [];
	this.data = this.grid.jqGrid('getRowData');

	//根据键值删除指定的元素
	this.delete_val_by_key = function (keys, arr) {
		for (var j = 0, i = 0; i < keys.length; i++) {
			arr.splice(keys[i - j], 1);
			j++;
		}
		return arr;
	}

	/**
	 * 隐藏行
	 */
	this.hideRow = function(rowId) {
		this.grid.setRowData(rowId, null, {
			display : 'none'
		});
	}
	/**
	 * 显示行
	 */
	this.showRow = function(rowId) {
		this.grid.setRowData(rowId, null, {
			display : ''
		});
	}
	/**
	 * 显示全部行
	 */
	this.showAllRow = function() {
		for (var i = 0; i < this.data.length; i++) {
			this.showRow(i+1)
		}
	}

	//设置筛选参数
	this.set_search_param = function (search_param) {
		this.search_param = search_param;
	}

	//筛选规则
	/*模糊筛选*/
	this.vagueSearch = function (str, column) {
		var re = new RegExp(str, "i");
		// var is = [];
		for (var i = 0; i < this.data.length; i++) {
			var colValue = $("#"+$(this.data[i][column]).attr("id")).val();

			if (re.test(colValue)) {
				this.showRow($(this.data[i]['sysApplicationId']).attr('rowid'))
			}else{
				this.hideRow($(this.data[i]['sysApplicationId']).attr('rowid'));
			}
		}
	}

	/*区间查找*/
	this.betweenSearch = function (start, end, column) {
		// var is = [];
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i][column] >= start && this.data[i][column] <= end) {
				this.showRow(i+1)
			}else{
				this.hideRow(i+1);
			}
		}
	}

	/*根据参数选择规则筛选*/
	this.select = function (params) {
		//var rule_name = params.rule_name;
		switch (params.rule_name) {
			case 'between':
				//console.log(this.result);
				this.betweenSearch(params.start, params.end, params.column);
				break;
			case 'vague':
				this.vagueSearch(params.str, params.column);
				break;
		}
	}

	/*清空 result */
	this.clearData = function () {
		this.data = [];
	}

	//执行筛选
	this.search = function () {
		if (this.search_param) {
			if ($.type(this.search_param) == 'array') {
				for (var i = 0; i < this.search_param.length; i++) {
					if (this.search_param[i]) {
						this.select(this.search_param[i]);
					}else{
						this.showAllRow();
					}
				}
			} else {
				this.select(this.search_param);
			}
		}else{
			this.showAllRow();
		}
	}
}