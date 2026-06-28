function ConsoleUser(datagrid,url,searchD,form,keyWordId,searchNames,dataGridColModel,applicationId){
	if(!datagrid || typeof(datagrid)!=='string'&&datagrid.trim()!==''){
		throw new Error("datagrid不能为空！");
	}
    var	_url=url;
    this.getUrl = function(){
    	return _url;
    };
	this._datagridId="#"+datagrid;
	this._jqgridToolbar="#t_"+datagrid;
	this._doc = document;
	this._formId="#"+form;
	this._searchDialogId ="#"+searchD;
	this._keyWordId="#"+keyWordId;
	this._searchNames = searchNames;
	this.dataGridColModel = dataGridColModel;
	this._applicationId = applicationId;
	this.init.call(this);
}
//初始化操作 
ConsoleUser.prototype.init=function(){
	var _self = this;
	
	$(_self._datagridId).jqGrid({
    	url: this.getUrl()+'/operation/getAllSysUsersByPage.json',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: this.dataGridColModel,
        height: this._doc.documentElement.clientHeight-110, 
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 10	,
        rowList:[200,100,50,30,20,10],
        altRows:true,
        pagerpos:'left',
        styleUI : 'Bootstrap',
		viewrecords: true, //
		multiselect: false,
		autowidth: true,
		hasColSet:false,
		hasTabExport:false,
		responsive:true,//开启自适应
        pager: "#jqGridPager",
        gridComplete: function() {
            var ids = $(_self._datagridId).jqGrid("getDataIDs");
            $(_self._datagridId).jqGrid('setSelection',ids[0]);
            var rowDatas = $(_self._datagridId).jqGrid("getRowData");
            for(var i=0;i < rowDatas.length;i++) {
             
                var rowData = rowDatas[i];
				if(rowData.sanyuan == "true"){
					$("#" + ids[i] +  " td").css("color","#f26522");
				}
                if(rowData.isChiefDept == "0"){
                    $("#" + ids[i] +  " td").css("color","#b1b1b1");
                }

            }
        },
        onSelectRow: function(rowid, e){
	          if(e){
				  // 添加遮罩，避免数据返回之前其他操作; 第一次初始化不添加遮罩
				  if (layerIndexCount != 0) {
					  window.userIndex = layer.load(2, {
						  shadeClose: false,
						  title: '加载中..',
						  shade: [0.1,'#fff']
					  });
				  }
				  layerIndexCount++;

	            // var id = $(_self._datagridId).jqGrid('getGridParam','selrow');
	          var  userAuth = $(_self._datagridId).jqGrid('getRowData',rowid);
	          var  consoleTyle = userAuth.attribute01;
	          var  userId = userAuth.id;
		       if(userId.split("-").length>1){
		        	  userId =  userId.split("-")[0];
		          }
	           clickRow(userId,consoleTyle);
	              return true;  
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
	$('.dropdown-menu').click(function(e) {
		    e.stopPropagation();
	});
	$(_self._keyWordId).on('keydown',function(e){
		if(e.keyCode == '13'){
			_self.searchByKeyWord();
		}
	});
};
 
 
//重载数据
ConsoleUser.prototype.reLoad=function(){
	var treeNode = parent.orgtree._selectNode;
	//if(treeNode){
		var searchdata = {param:JSON.stringify(treeNode)};
		$(this._datagridId).jqGrid('setGridParam',{postData: searchdata}).trigger("reloadGrid");
	
	
	
	

};
//关闭对话框
ConsoleUser.prototype.closeDialog=function(id){
	if(id == "insert"){
		layer.close(insertIndex);
	}else{
		layer.close(eidtIndex);
	}
};
//高级查询
ConsoleUser.prototype.searchData =function(){ 
	var searchdata = {
			keyWord: null, 
			searchdatapara:JSON.stringify(serializeObject($("#userauthform")))
		};
	$(this._datagridId).jqGrid('setGridParam',{postData: searchdata}).trigger("reloadGrid");
};
//关键字段查询
ConsoleUser.prototype.searchByKeyWord =function(){
	var keyWord = $(this._keyWordId).val();
	
	if(keyWord=="输入用户名或登录名查询"){
		keyWord='';
	}
	var searchdata = {}; 
	if(keyWord==''){
		 searchdata = {
		  keyWord : null 
		}
	}else{
		var names = this._searchNames;

		var param = {};
		for ( var i in names) {
			var name = names[i];
			param[name] = keyWord;
		}
	 	searchdata = {
			keyWord : JSON.stringify(param) 
		}
	}
	$(this._datagridId).jqGrid('setGridParam',{postData: searchdata}).trigger("reloadGrid");
};
//隐藏查询框
ConsoleUser.prototype.hideSearchForm =function(){
	layer.close(searchDialogindex);
};
/*清空查询条件*/
ConsoleUser.prototype.clearData =function(){
	clearFormData($("#userauthform"));
	this.searchData();
};
 