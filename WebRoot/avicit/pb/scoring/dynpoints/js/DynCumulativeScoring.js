/**
 * 声明DynCumulativeScoring对象
 * @param datagrid 
 * @param url 
 * @param searchD
 * @param form
 * @param keyWordId
 * @param searchNames
 * @param dataGridColModel
 */
function DynCumulativeScoring(datagrid,url,searchD,form,keyWordId,searchNames,dataGridColModel){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    }
    this._formCode = "dynCumulativeScoring";
	this._datagridId="#"+datagrid;
	this._jqgridToolbar="#t_"+datagrid;
	this._formId="#"+form;
	this._searchDialogId ="#"+searchD;
	this._keyWordId="#"+keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	//定义流程帮助类
	this.flowListEditor;
	this.maskId = null;
	this.init.call(this);
};
/**
 * 初始化操作
 */
DynCumulativeScoring.prototype.init=function(){
	var _self = this;
	//初始化流程帮助类
	flowListEditor = new FlowListEditor(this._formCode);
	$(_self._datagridId).jqGrid({
    	url: _self.getUrl()+'getDynCumulativeScoringsByPage.json',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: _self.dataGridColModel,
        height:$(window).height()-120,
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
				if ($("#emptyRecords").html() == null) {
					$(_self._datagridId).parent().append('<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
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
		viewrecords: true, 
		multiselect: true,
		multiboxonly: true,
		autowidth: true,
		shrinkToFit: true,
		responsive:true,//开启自适应
        pager: "#jqGridPager"
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
DynCumulativeScoring.prototype.insert=function(){
	flowListEditor.addFlow();
};
/**
 * 编辑页面
 */
DynCumulativeScoring.prototype.modify=function(){
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
	this.editIndex = layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '编辑',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: this.getUrl()+'Edit/'+rowData.id 
	});
};
/**
 * 详情页面
 */
DynCumulativeScoring.prototype.detail=function(id,value){
	flowUtils.detail(id); 
};
/**
 * 打开高级查询框
 */
DynCumulativeScoring.prototype.openSearchForm = function(searchDiv){
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
DynCumulativeScoring.prototype.formValidate=function(form){
	form.validate({
		rules: {
			idcard:{
                maxlength: 50
			},
			sex:{
                maxlength: 1
			},
			userId:{
                maxlength: 50
			},
			attr9:{
                maxlength: 50
			},
			attr4:{
                maxlength: 50
			},
			attr3:{
                maxlength: 50
			},
			attr2:{
                maxlength: 50
			},
			attr1:{
                maxlength: 50
			},
			attr8:{
                maxlength: 50
			},
			attr7:{
                maxlength: 50
			},
			attr6:{
                maxlength: 50
			},
			attr5:{
                maxlength: 50
			},
			attr12:{
                maxlength: 50
			},
			attr13:{
                maxlength: 50
			},
			attr10:{
                maxlength: 50
			},
			attr11:{
                maxlength: 50
			},
			attr16:{
                maxlength: 50
			},
			attr17:{
                maxlength: 50
			},
			attr14:{
                maxlength: 50
			},
			attr15:{
                maxlength: 50
			},
			attr18:{
                maxlength: 50
			},
			partyId:{
                maxlength: 50
			},
			onePersonal:{
				number:true
			},
			fourPunish:{
				number:true
			},
			oneReward:{
				number:true
			},
			onePunish:{
				number:true
			},
			twoFoundations:{
				number:true
			},
			twoPersonal:{
				number:true
			},
			twoReward:{
				number:true
			},
			twoPunish:{
				number:true
			},
			threeFoundations:{
				number:true
			},
			threePersonal:{
				number:true
			},
			threeReward:{
				number:true
			},
			threePunish:{
				number:true
			},
			fourFoundations:{
				number:true
			},
			fourPersonal:{
				number:true
			},
			fourReward:{
				number:true
			},
			oneFoundations:{
				number:true
			}
		}
	});
}
/**
 * 删除方法
 */
DynCumulativeScoring.prototype.del=function(){
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
DynCumulativeScoring.prototype.reLoad=function(){
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(serializeObject($(this._formId)))
	}
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
/**
 * 关闭对话框
 */
DynCumulativeScoring.prototype.closeDialog=function(id){
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
DynCumulativeScoring.prototype.searchData =function(){
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
DynCumulativeScoring.prototype.searchByKeyWord =function(){
	var keyWord = $(this._keyWordId).val()==$(this._keyWordId).attr("placeholder") ? "" :  $(this._keyWordId).val();
	var bpmState = $('#bpmState').val();
	var names = this._searchNames;

	var param = {bpmState: bpmState};
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
 * 根据流程状态查询
 */
DynCumulativeScoring.prototype.initWorkFlow = function(status){
	$('#bpmState').val(status);
	if(status == "start"){
		$("#dynCumulativeScoring_modify").show();
		$("#dynCumulativeScoring_del").show();
	}else{
		$("#dynCumulativeScoring_modify").hide();
		$("#dynCumulativeScoring_del").hide();
	}
	this.searchData();
};
/**
 * 隐藏查询框
 */
DynCumulativeScoring.prototype.hideSearchForm =function(){
	layer.close(searchDialogindex);
};
/**
 * 清空查询条件
 */
DynCumulativeScoring.prototype.clearData =function(){
	clearFormData(this._formId);
	this.searchData();
};
var quarter;
var date= new Date().getDate();
//获取当前季度是不是当前季度的第一个月
function getQuarterYeer(){
	var Month = new Date().getMonth()+1;
	if(Month==1||Month==4||Month==7||Month==10){
		return true;
	}
	return false;
}
//获取当前季度
function getQuarter(){
  var Month = new Date().getMonth()+1;
  switch(Month){
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
 quarter = getQuarter();

	 var quarterBol = getQuarterYeer();
//	 if(quarterBol){
//		 if(date<=10){
////			 $.ajax({
////				 url:"avicit/pb/scoring/dynPoints/dynPointsController/push",
////				 type:"POST",
////				 dataType:"JSON"
////			 })
//		 }
//		 if(date<=20){
//			 $("#tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192").css("pointer-events","none");
//			 $("#tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192").after("<span style='color:red;'>*当前已超过报送日期</span>")
//		 }		 
//	 }else{
//		 $("#tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192").css("pointer-events","none");
//		 $("#tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192").after("<span style='color:red;'>*当前已超过报送日期</span>")
//	 }

 
 