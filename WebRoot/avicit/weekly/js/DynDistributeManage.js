/**


 * 
 */




function Weekly(datagrid,url,searchD,form,keyWordId,searchNames,dataGridColModel){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    }
	this._datagridId="#"+datagrid;
	this._jqgridToolbar="#t_"+datagrid;
	this._doc = document;
	this._formId="#"+form;
	this._searchDialogId ="#"+searchD;
	this._keyWordId="#"+keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	this.init.call(this);
};
//初始化操作
Weekly.prototype.init=function(){
	var _self = this;
	$(_self._datagridId).jqGrid({
    	url: this.getUrl()+'/operation/getDynDistributesByPage.json',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: this.dataGridColModel,
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 20	,
        rowList:[1000,500,200,100,20,10],
        altRows:true,
        userDataOnFooter: true,
        pagerpos:'left',
        height: $(window).height() - 140,	
        loadComplete:function(data){
			$(this).jqGrid('getColumnByUserIdAndTableName');
		},
        styleUI : 'Bootstrap',
		viewrecords: true, 
		multiselect: true,
		autowidth: true,
		shrinkToFit: true,
		responsive:true,//开启自适应
        pager: "#jqGridPager",
        onCellSelect:function(id,icod,cell,e){
        	if(icod==5||icod==6){
        		var arr = []
        		arr.push(id);
        		weekly.del(arr);
        		flowUtils.detail(id,'2')
        	}    	
        }
    });
    $(this._jqgridToolbar).append($("#tableToolbar"));
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
Weekly.prototype.distrdel=function(ids){
	console.log(ids)
	avicAjax.ajax({
		 url:'platform/avicit/weekly/weeklyController/delete/3',
		 data:JSON.stringify(ids),		 
		 type : 'POST',
		 contentType : 'application/json',
		 dataType : 'JSON',
		 success : function(r){
			 if (r.flag == "success") {
				 location.reload()
			}
		 }
	 });
}
Weekly.prototype.del=function(row){
	var rows =row;
	var _self = this;
	var ids = [];
	var l =rows.length;
	if(l > 0){
		layer.confirm('确定已经阅读完毕?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
				for(;l--;){
					 ids.push(rows[l]);
				 }
				 avicAjax.ajax({
					 url:_self.getUrl()+'delete/3',
					 data:	JSON.stringify(ids),
					 contentType : 'application/json',
					 type : 'post',
					 dataType : 'json',
					 success : function(r){
						 if (r.flag == "success") {
							 location.reload()
						}else{
							layer.alert('网络异常！' + r.error, {
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
	    layer.alert('请选择数据！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0,
			  btn: ['关闭'],
			  title:"提示"
			}
		);
	}
};


