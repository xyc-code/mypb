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
function PartyCommandos(datagrid,url,searchD,form,keyWordId,searchNames,dataGridColModel,isOrNotProcess){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    }
	this._formCode = "partyCommandos";
	this._datagridId="#"+datagrid;
	this._jqgridToolbar="#t_"+datagrid;
	this._doc = document;
	this._formId="#"+form;
	this._searchDialogId ="#"+searchD;
	this._keyWordId="#"+keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	var _onSelectRow=null;
    this.getOnSelectRow=function(){
    	return _onSelectRow;
    };
    this.setOnSelectRow=function(f){
    	_onSelectRow = f;
    };
    var _onLoadSuccess=null;
    this.getOnLoadSuccess=function(){
    	return _onLoadSuccess;
    };
    this.setOnLoadSuccess=function(f){
    	_onLoadSuccess=f;
    };
	//定义流程帮助类
	this.flowListEditor;
	this.maskId = null;
	this.isOrNotProcess = isOrNotProcess;
	this.init.call(this);
};
/**
 * 初始化操作
 */
PartyCommandos.prototype.init=function(){

	var _self = this;
	var _urlNew;
	
	//初始化流程帮助类
	flowListEditor = new FlowListEditor(this._formCode);
	if(_self.isOrNotProcess && _self.isOrNotProcess == 'y'){
		_urlNew = _self.getUrl()+'getPartyProcessCommandossByPage.json';
	}else{
		_urlNew = _self.getUrl()+'getPartyCommandossByPage.json';
	}
	$(_self._datagridId).jqGrid({
    	url: _urlNew,
        mtype: 'POST',
        datatype: "json",
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
        onSelectRow : function(rowid, status) {
			var rows = $(_self._datagridId).jqGrid('getGridParam', 'selarrrow');
			if (rows.length == 1) {
				_self.getOnSelectRow()(rows[0]);
			}else{
				_self.getOnSelectRow()("-1");
			}
		},
        loadComplete:function(){
			$(this).jqGrid('getColumnByUserIdAndTableName');
			var rowdata = $(_self._datagridId).jqGrid('getRowData');
	        if(rowdata != null && rowdata.length > 0){
	        	_self.getOnLoadSuccess()(rowdata[0].id);
	            $(_self._datagridId).setSelection(rowdata[0].id);
				$("#emptyRecords").hide();
        	}else{
        		_self.getOnLoadSuccess()("-1");
				_self.getOnSelectRow()("-1");
				if ($("#emptyRecords").html() == null) {
					$(_self._datagridId).parent().append('<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
						+ '<div style="width:120px; height:140px; padding-top:5%; clear:both; margin:0 auto ;">'
							+ '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
							+ '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
							+ '</div></div>');
				}
				$("#emptyRecords").show();
        	}
		},
        styleUI : 'Bootstrap',
		viewrecords: true,
		multiselect: true,
		multiboxonly:true,
		autowidth: true,
		shrinkToFit: true,
		responsive:true,//开启自适应
        pager: "#partyCommandosJqGridPager"
    });
    $(_self._jqgridToolbar).append($("#partyCommandosTableToolbar"));
    
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
 * 添加页面
 */
PartyCommandos.prototype.insert=function(){
	//debugger;
	flowListEditor.addFlow();
};
/**
 * 编辑页面
 */
PartyCommandos.prototype.modify=function(id){
	var ids = $(this._datagridId).jqGrid('getGridParam','selarrrow');
	if(ids.length == 0){
		layer.alert('请选择要编辑的数据！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0,
			  btn: ['关闭'],
			  title:"提示"
			}
		);
		return false;
	}else if(ids.length > 1){
		layer.alert('只允许选择一条数据！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0,
			  btn: ['关闭'],
			  title:"提示"
			}
		);
		return false;
	}
	var rowData = $(this._datagridId).jqGrid('getRowData', ids[0]);
	// this.editIndex = layer.open({
	//     type: 2,
	//     area: ['100%', '100%'],
	//     title: '编辑',
	//     skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
    //     maxmin: false, //开启最大化最小化按钮
	//     content: this.getUrl()+'Detail/'+rowData.id
	// });
	flowUtils.detailByManager(rowData.id);
};
/**
 * 详情页面
 */
PartyCommandos.prototype.detail=function(id){
	flowUtils.detail(id,2);
};
/**
 * 打开高级查询框
 */
PartyCommandos.prototype.openSearchForm = function(searchDiv){
	var _self = this;
	var contentWidth = 800;
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
		area: [contentWidth + 'px', '300px'],
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
			layer.close(index);//查询框关闭
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
 * 控件校验规则：表单字段name与rules对象保持一致
 */
PartyCommandos.prototype.formValidate=function(form){
	form.validate({
		rules: {
			userIdAlias:{
				required:true
			},
			deptIdAlias:{
				required:true
			},
			commandosName:{
				required:true,
                maxlength: 4000
			},
			commandosType:{
				required:true,
                maxlength: 50
			},
			setupTime:{
				required:true,
				dateISO:true
			},
			commandosChargerAlias:{
				required:true
			},
			inPartyorg:{
				required:true,
                maxlength: 50
			},
			chargerPost:{
				required:true,
                maxlength: 50
			},
			adminortech:{
				required:true,
                maxlength: 50
			},
			partyNum:{
				required:true,
				number:true
			},
			pmNum:{
				required:true,
				number:true
			},
			uniondeptsYn:{
				required:true,
                maxlength: 50
			},
			unionDeptsAlias:{
			},
			keyProblems:{
				required:true,
                maxlength: 4000
			},
			pcSecretLevel:{
				required:true,
                maxlength: 50
			},
			autoCode:{
				required:true,
                maxlength: 50
			},
			tel:{
				required:true,
                maxlength: 50
			}
		}
	});
}

/**
 * 删除方法
 */
PartyCommandos.prototype.del=function(){
	var _self = this;
	var rows = $(_self._datagridId).jqGrid('getGridParam','selarrrow');
	var ids = [];
	var l =rows.length;
	if(l > 0){
		layer.confirm('确认要删除选中的数据吗?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
				for(;l--;){
					 ids.push(rows[l]);
				 }
				 avicAjax.ajax({
					 url:_self.getUrl()+'delete',
					 data:	JSON.stringify(ids),
					 contentType : 'application/json',
					 type : 'post',
					 dataType : 'json',
					 success : function(r){
						 if (r.flag == "success") {
							 _self.reLoad();
							layer.msg('删除成功！');
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
};
/**
 * 重载数据
 */
PartyCommandos.prototype.reLoad=function(){
	var searchdata = {param:JSON.stringify(serializeObject($(this._formId)))}
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
/**
 * 关闭对话框
 */
PartyCommandos.prototype.closeDialog=function(id){
	if(id == "insert"){
		layer.close(this.insertIndex);
	}else if(id == "edit"){
		layer.close(this.editIndex);
	}else{
		layer.close(this.detailIndex);
	}
};
/**
 * 后台查询	
 */
PartyCommandos.prototype.searchData =function(){
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
			param:JSON.stringify(serializeObject($(this._formId)))
		}
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
/**
 * 快速查询
 */
PartyCommandos.prototype.searchByKeyWord =function(){
	var keyWord = $(this._keyWordId).val()==$(this._keyWordId).attr("placeholder") ? "" :  $(this._keyWordId).val();
	var names = this._searchNames;

	var param = {};
	for(var i in names){
		var name = names[i];
		param[name] = keyWord;
	}
	var searchdata = {
			keyWord: JSON.stringify(param),
			param: null
		}
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
}
/**
 * 隐藏查询框
 */
PartyCommandos.prototype.hideSearchForm =function(){
	layer.close(searchDialogindex);
};
/**
 * 清空查询条件
 */
PartyCommandos.prototype.clearData =function(){
	clearFormData(this._formId);
	this.searchData();
};
/**
* 根据流程状态查询
*/
PartyCommandos.prototype.initWorkFlow = function(status){
	//debugger;
	$('#bpmState').val(status);
	if(status == "start"){
		$("#partyCommandos_modify").show();
		$("#partyCommandos_del").show();
	}else{
		$("#partyCommandos_modify").hide();
		$("#partyCommandos_del").hide();
	}
	this.searchData();
};

/**
 * 返回主表id
 */
PartyCommandos.prototype.getSelectID=function(){
	var rows = $(this._datagridId).jqGrid('getGridParam', 'selarrrow');
	var l =rows.length;
	if(l == 0){
		this._selectId = "null";
	}else if(l > 1){
		this._selectId = "undefined";
	}else{
	    this._selectId = rows[0];
	}
	return this._selectId;
};
/**
 * 统计
 */
PartyCommandos.prototype.tj=function() {
	var _self = this;
	avicAjax.ajax({
		url: 'platform/avicit/pb/commandos/partyCommandos/partyCommandosController/operation/threeView',
		contentType: 'application/json',
		type: 'post',
		dataType: 'json',
		success: function (r) {
			console.log(r.rows.byCommandosType)
				console.log(r)
				layer.alert('1.公司级突击队数量'+r.rows.byCommandosType+'；2.里程碑节点数量'+r.rows.taskStatus+'；3.已完成里程碑数量'+r.rows.taskStatusE+'；4未完成里程碑数量'+r.rows.taskStatusWC+'；5. 超期未完成里程碑数量'+r.rows.taskStatusW+'！', {
						icon: 7,
						area: ['400px', ''], //宽高
						closeBtn: 0,
						btn: ['关闭'],
						title:"提示"
					}
				);
		}
	});
}