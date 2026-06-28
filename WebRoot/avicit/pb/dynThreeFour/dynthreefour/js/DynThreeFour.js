/**
 * 声明DynThreeFour对象
 * @param datagrid 
 * @param url 
 * @param searchD
 * @param form
 * @param keyWordId
 * @param searchNames
 * @param dataGridColModel
 */
function DynThreeFour(datagrid,url,searchD,form,keyWordId,searchNames,dataGridColModel){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    }
	this._datagridId="#"+datagrid;
	this._jqgridToolbar="#t_"+datagrid;
	this._formId="#"+form;
	this._searchDialogId ="#"+searchD;
	this._keyWordId="#"+keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	this.init.call(this);
};
/**
 * 初始化操作
 */
DynThreeFour.prototype.init=function(){
	var _self = this;
	$(_self._datagridId).jqGrid({
    	url: _self.getUrl()+'threeView.json',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: _self.dataGridColModel,
        height:$(window).height()-120,
        width:$(window).width(),
        scrollOffset: 5, //设置垂直滚动条宽度
         rowNum: 10000	,
        // rowList:[200,100,50,30,20,10],
		rownumbers: true,//增加序号
		rownumWidth:50,//设置序号的宽度
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
DynThreeFour.prototype.insert=function(){
	this.insertIndex = layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '添加',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: this.getUrl()+'Add/null' 
	});
};
/**
 * 编辑页面
 */
DynThreeFour.prototype.modify=function(){
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
DynThreeFour.prototype.detail=function(id){
	this.detailIndex = layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '详细页',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: this.getUrl()+'Detail/'+id
	}); 
};
/**
 * 打开高级查询框
 */
DynThreeFour.prototype.openSearchForm = function(searchDiv){
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
DynThreeFour.prototype.formValidate=function(form){
	form.validate({
		rules: {
			joinMeetOrg:{
                maxlength: 255
			},
			meetDate:{
				dateISO:true
			},
			meetPlace:{
                maxlength: 255
			},
			meetName:{
                maxlength: 255
			},
			joinPeople:{
                maxlength: 4000
			},
			meetType:{
                maxlength: 255
			},
			meetOutline:{
                maxlength: 4000
			},
			hoursRecordYn:{
                maxlength: 255
			},
			learnHours:{
				number:true
			},
			meetTheme:{
                maxlength: 4000
			},
			duePeopleNum:{
				number:true
			},
			actualPeopleNum:{
				number:true
			},
			leavePeopleNum:{
				number:true
			},
			joinMeetRate:{
				number:true
			},
			leavePeople:{
                maxlength: 4000
			},
			speaker:{
                maxlength: 255
			},
			lecturer:{
                maxlength: 255
			},
			hostTaker:{
                maxlength: 255
			},
			noteTaker:{
                maxlength: 255
			},
			meetResult:{
                maxlength: 4000
			},
			remarks:{
                maxlength: 4000
			},
			joinOrg:{
                maxlength: 255
			},
			joinPeopleNew:{
                maxlength: 4000
			},
			joinOrgId:{
                maxlength: 255
			},
			joinPeopleId:{
                maxlength: 255
			},
			secretLevel:{
				required:true,
                maxlength: 255
			},
			speakerOutYn:{
                maxlength: 255
			},
			lecturerOutYn:{
                maxlength: 255
			},
			hostTakerOutYn:{
                maxlength: 255
			},
			noteTakerOutYn:{
                maxlength: 255
			},
			leavePeopleNew:{
                maxlength: 255
			},
			leavelPeople:{
                maxlength: 255
			},
			requestUser:{
                maxlength: 1000
			},
			partyName:{
                maxlength: 255
			},
			partyId:{
                maxlength: 255
			},
			autoCode:{
                maxlength: 255
			},
			partyNameNew:{
                maxlength: 255
			},
			requestTel:{
                maxlength: 255
			},
			partyType:{
                maxlength: 255
			},
			lxPosen:{
                maxlength: 255
			},
			meetZj:{
                maxlength: 255
			}
		}
	});
}
/**
 * 保存方法
 */
DynThreeFour.prototype.save=function(form,id){
	var _self = this;
	avicAjax.ajax({
		 url:_self.getUrl()+"save",
		 data : {data :JSON.stringify(serializeObject(form))},
		 type : 'post',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){
				 _self.reLoad();
				 if(id == "insert"){
					 layer.close(_self.insertIndex);
				 }else{
					 layer.close(_self.editIndex);
				 }
				 layer.msg('保存成功！');
			 }else{
			    var alertMsg = '保存失败,请联系管理员!'
                if(r.errorMsg != null && r.errorMsg != ''){
                    alertMsg = r.errorMsg;
                }
				layer.alert(alertMsg, {
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
};
/**
 * 删除方法
 */
DynThreeFour.prototype.del=function(){
	var _self = this;
	var rows = $(_self._datagridId).jqGrid('getGridParam','selarrrow');
	var ids = [];
	var delIds = [];
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
DynThreeFour.prototype.reLoad=function(){
	var searchdata = {param:JSON.stringify(serializeObject($(this._formId)))}
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
/**
 * 关闭对话框
 */
DynThreeFour.prototype.closeDialog=function(id){
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
DynThreeFour.prototype.searchData =function(){
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
DynThreeFour.prototype.searchByKeyWord =function(){
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
DynThreeFour.prototype.hideSearchForm =function(){
	layer.close(searchDialogindex);
};
/**
 * 清空查询条件
 */
DynThreeFour.prototype.clearData =function(){
	clearFormData(this._formId);
	this.searchData();
};
//获取计算月份的函数
function getMonth(){
	var month;
	if(new Date($("#year").val().replace('年','')).getFullYear()==new Date().getFullYear()){
		month	= new Date().getMonth()+1;
	}else{
		month = new Date($("#year").val().replace('年','')+"-12"+"-30").getMonth()+1
	}
	return month;
}
//替换单元格颜色的格式化函数
function getredGreen(month,value){
	if(month=="3"){
		var month = getMonth();
		if(!value){
			if(month>3){
				return "<div style='background: red;color: white'>0</div>"
			}else{
				return "0"
			}
		}else {
			if(parseInt((month)/3)>value){
				return "<div style='background: red;color: white'>"+value+"</div>"
			}else{
				return "<div style='background: green;color: white'>"+value+"</div>"
			}
		}
	}else if(month == "1"){
		var month = getMonth();
		if(!value){
			if(month !=1){
				return "<div style='background: red;color: white'>0</div>"
			}else{
				return "0"
			}
		}else {
			if(month>parseInt(value)){
				return "<div style='background: red;color: white'>"+value+"</div>"
			}else{
				return "<div style='background: green;color: white'>"+value+"</div>"
			}
		}
	}
}



//单元格格式化函数
function dyhFormat(value,opt,item) {
	if(item.ATTRIBUTE_01!="2"||item.PARTY_NAME.indexOf('党委')==-1){
		return  "-";
	}else {
		return getredGreen("1",value);
	}
}
function dzzFormat(value,opt,item) {
	if(item.ATTRIBUTE_01!="2"||item.PARTY_NAME.indexOf('党总支')==-1){
		return  "-";
	}else {
		return getredGreen("1",value);
	}
}
function zbFormat(value,opt,item) {
	if(item.ATTRIBUTE_01!="1"){
		return  "-";
	}else {
		return getredGreen("1",value);
	}
}
function dydhFormat(value,opt,item) {
	return getredGreen("3",value);
}
function jwFormat(value,opt,item) {
	if(item.PARTY_NAME.indexOf("纪委")==-1){
		return "-";
	} else if(!value){
		return "0"
	}else {
		return value;
	}
}
function dxzhFormat(value,opt,item) {
	if(item.isDxz){
		return "-"
	}else {
		return getredGreen("1",value);
	}
}
function dkFormat(value,opt,item) {
	return getredGreen("3",value);
}
//无数字0格式化
function numberFormat(value,opt,item){
	if(!value){
		return "0%"
	}
	return value;
}
function layerOpen(name) {
	layer.open({
		type: 2,
		area: ['960px', '500px'],
		title: '查看详情',
		skin: 'bs-modal',
		maxmin: false,
		content: 'avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController/operation/Detail?id='+encodeURIComponent(name)
	});
}
//按年搜索以及党支部名称搜索
function serach() {
	var val = "to_date('"+$("#year").val().replaceAll("年","")+"','yyyy')";
	var obj = {
		year:val
	}
	$("#dynThreeFourjqGrid").jqGrid('setGridParam', {
		postData : obj
	}).trigger("reloadGrid")
}
function serachParty() {
	var val = "t.party_name like '%"+$("#integral_keyWord").val()+"%'";
	var obj = {
		partyName:val
	}
	$("#dynThreeFourjqGrid").jqGrid('setGridParam', {
		postData : obj
	}).trigger("reloadGrid")
}

