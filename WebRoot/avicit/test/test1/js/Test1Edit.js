/**
 * 单表
 * @param datagrid 
 * @param url 
 * @param searchD
 * @param form
 * @param keyWordId
 * @param searchNames
 * @param dataGridColModel
 */
function Test1Edit(datagrid,url,dataGridColModel,pid){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    }
	this._datagridId="#"+datagrid;
    if(pid == null || pid == ''){
        pid = '-1';
	}
	this._pid = pid;
	this._jqgridToolbar="#t_"+datagrid;
	this._doc = document;
	this.dataGridColModel = dataGridColModel;
	this.notnullFiled=[];//非空字段
	this.notnullFiledComment=[]; //非空字段注释
	//除时间,数字等类型长度校验字段
	this.lengthValidFiled = [];
	//除时间,数字等类型长度校验字段注释
	this.lengthValidFiledComment = [];
	//除时间,数字等类型长度
	this.lengthValidFiledSize = [];
	//被删除的子表数据
	this.removeSubIds =[];
	this.init.call(this);
};
/**
 * 初始化操作
 */
Test1Edit.prototype.init=function(){
	var _self = this;
	$(_self._datagridId).jqGrid({
    	url: _self.getUrl()+'getTest1sByPage.json',
        mtype: 'POST',
        datatype: "json",
        postData : {
        	pid :_self._pid
        },
        toolbar: [true,'top'],
        colModel: _self.dataGridColModel,
		height:$(window).height()/2-115,
        width:$(window).width(),
        scrollOffset: 5, //设置垂直滚动条宽度
        rowNum: 20	,
        rowList:[200,100,50,30,20,10],
        altRows:true,
        userDataOnFooter: true,
        pagerpos:'left',
        hasColSet: true,//设置显隐属性
        loadComplete:function(){
			$(this).jqGrid('getColumnByUserIdAndTableName');
			var rowNum = $(_self._datagridId).jqGrid('getGridParam', 'records');
			if (rowNum < 1) {
				if ($("#subEmptyRecords").html() == null) {
					$(_self._datagridId).parent().append('<div id="subEmptyRecords" style="width:100%; height:160px;text-align:center;">'
						+ '<div style="width:120px; height:140px; padding-top:5%; clear:both; margin:0 auto ;">'
							+ '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
							+ '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
							+ '</div></div>');
				}
				$("#subEmptyRecords").show();
			} else {
				$("#subEmptyRecords").hide();
			}
		},
        styleUI : 'Bootstrap',
		viewrecords: true, 
		multiselect: true,
		autowidth: true,
		shrinkToFit: true,
		responsive:true,//开启自适应
        cellEdit:true,
        cellsubmit: 'clientArray'
    });
    $(_self._jqgridToolbar).append($("#tableToolbar"));
    
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
	
	_self.lengthValidFiled.push('test2');
	_self.lengthValidFiledSize.push(50);
	_self.lengthValidFiledComment.push('TEST2');
};
/**
 * 添加页面
 */
var newRowIndex = 0;
var newRowStart = "new_row";
Test1Edit.prototype.insert=function(){
	//隐藏暂无数据的图片
	$("#subEmptyRecords").hide();
	var _self = this;
	var $info = $(_self._datagridId).jqGrid('endEditCell');
	if($info[0].flag){
       layer.alert("非法含有JS脚本完整标签");
	   return false;
    }
	var hasvalidate = true;
	var data = $(_self._datagridId).jqGrid('getRowData');
	if(data.length > 0 && _self.notnullFiled.length > 0){
		$.each(_self.notnullFiled, function(i, item) {
			var msg = _self.nullvalid(data, item, _self.notnullFiled, _self.notnullFiledComment);
			if (msg && msg.length > 0) {
				layer.alert(msg, {
					icon : 7,
					area : [ '400px', '' ], // 宽高
					closeBtn : 0,
					btn: ['关闭'],
			        title:"提示"
				});
				hasvalidate = false;
				return false;
			}
		});
	}
	if (!hasvalidate) {
		return false;
	}
	var newRowId = newRowStart + newRowIndex;
	var parameters = {
		rowID : newRowId,
		initdata : {},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	};
	$(_self._datagridId).jqGrid('addRow', parameters);
	newRowIndex++;  
};


/**
 * 非空验证
 * @param 
 * @param 
 */
Test1Edit.prototype.nullvalid = function(data,item,nullfiled,notnullFiledComment){
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
Test1Edit.prototype.lengthvalid = function(data,item,lengthValidFiled,lengthValidFiledComment,lengthValidFiledSize){
	var msg = "";
	$.each(data,function(i,dataitem){
		if(dataitem[item] != "" && dataitem[item] != undefined && dataitem[item].replace(/[^\x00-\xff]/g,"**").length > lengthValidFiledSize[$.inArray(item,lengthValidFiled)]){
			msg = lengthValidFiledComment[$.inArray(item,lengthValidFiled)]+"的输入长度超过预设长度"+lengthValidFiledSize[$.inArray(item,lengthValidFiled)];
	    }
	})
	return msg;
}

/**
 * 删除
 */
Test1Edit.prototype.del = function(){
	var _self = this;
	_self.removeSubIds = new Array();
	var rows = $(_self._datagridId).jqGrid('getGridParam','selarrrow');
	var ids = [];
	if(rows.length > 0){
		for(var i = 0; i < rows.length; i++){
			ids.push(rows[i]);
			_self.removeSubIds.push(rows[i]);
		}
		for(var i = 0; i < ids.length; i++){
			$(_self._datagridId).jqGrid('delRowData',ids[i]);
		}
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
		$("#subEmptyRecords").show();
	}
};

/**
 * 重载数据
 */
Test1Edit.prototype.reLoad = function(pid){
	if(pid != undefined){
		this._pid = pid;
	}
	var searchdata = {pid:this._pid};
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};

/**
 *  子表校验
 */
Test1Edit.prototype.dataValidte = function(){
	var _self = this;
	var $info = $(_self._datagridId).jqGrid('endEditCell');
	if($info[0].flag){
	   layer.alert("非法含有JS脚本完整标签");
	   return false;
    }
    var isNewRow = false; //是新增行
	var data = $(_self._datagridId).jqGrid('getChangedCells');
	var Rowdata = $(_self._datagridId).jqGrid('getRowData');
    if(Rowdata.length > 0){
        for (var i = 0; i < Rowdata.length;i++) {
            if(Rowdata[i].id == ""){
                isNewRow = true;
            }
        }
    }
    var hasvalidate = true;
    var msg = "";
    if(data.length == 0 && isNewRow){
        msg = "请修改子表数据";
    }else{
        $.each(_self.notnullFiled,function(i,item){
            msg = _self.nullvalid(data, item, _self.notnullFiled,_self.notnullFiledComment);
            if(msg && msg.length>0){
                hasvalidate= false;
                return false;
            }
        });
        $.each(_self.lengthValidFiled,function(i,item){
            if(hasvalidate){
                msg = _self.lengthvalid(data, item,_self.lengthValidFiled,_self.lengthValidFiledComment, _self.lengthValidFiledSize);
                if(msg && msg.length>0){
                    hasvalidate= false;
                    return false;
                }
            }
        });
    }
	return msg;
};

/**
 *  获取编辑表格数据
 */
Test1Edit.prototype.getEditData = function(){
	var _self = this;
	var data = $(_self._datagridId).jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf(newRowStart) > -1){
				data[i].id = '';
			}
		}
	}
	return data;
};
