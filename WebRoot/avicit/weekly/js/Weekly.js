/**


 * 
 */



var url="platform/eform/bpmsCRUDClient/toformJsp?formInfoId=4028819987207ca4018720c5de1a0524&amp;grid=table92f3ebe4d1b65d4e948886581ea60a1dff99"

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
    	url: this.getUrl()+'ryonMessage?is=1',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: this.dataGridColModel,
        height:$(window).height()-150,
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 20	,
        rowList:[1000,500,200,100,20,10],
        altRows:true,
        userDataOnFooter: true,
        pagerpos:'left',
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
        	var Date= $(this).jqGrid("getRowData",id);
        	var zt= Date.businessstate;       	
        	if(icod==6){
        		if(zt!=="已结束"){
            		layer.alert('请等待流程结束才能查看', {
    					  icon: 7,	
    					  area: ['400px', ''], //宽高
    					  closeBtn: 0,
    					  btn: ['关闭'],
    					  title:"提示"
    					})	
            		retrun ;
            	}
        		flowUtils.detail(id,'2')
        	}  
        	if(icod == 8){
        		var url = "avicit/platform6/bpmreform/bpmdesigner/picture/picAndTracks.jsp?entryId="+Date.lcid.split(".")[1]
        		layer.open({
					  type: 2,	
					 title:"流程跟踪",
					 skin:"bs-modal",
					  area:['100%','100%'],
					  maxmin:false,
					  content:url
					})	
        	}
        },
        onSelectRow:function(rowid){
        	//行点击事件
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
//添加页面
Weekly.prototype.insert=function(){
	this.insertIndex = layer.open({
	    type: 2,
	    area: ['100%', '100%'],
	    title: '发起流程',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: true, //开启最大化最小化按钮
				    content : url 
	});
};
//控件校验   规则：表单字段name与rules对象保持一致
Weekly.prototype.formValidate=function(form){
	form.validate({
		rules: {
						  		     			 		  				  				  				  		     			    				   					workTasks:{
						maxlength: 255
				    },
				    							 		  				  		     			    				   					personLiable:{
						maxlength: -1
				    },
				    							 		  				  		     			    				   					fkSubColId:{
						maxlength: 50
				    },
				    							 		  				  				  		     			    				   					isCompletion:{
						maxlength: 255
				    },
				    							 		  				  				  		     			    				   					topDateEvolve:{
						maxlength: 255
				    },
				    							 		  				  		     			    				   			       completionNode:{
						dateISO:true
				   },
				   							 		  				  		     			    				   					isKeyno:{
						maxlength: 255
				    },
				    							 		  				  		     			    				   					dateEvolve:{
						maxlength: 255
				    },
				    							 		  				  				  		     			    				   				   createdDept:{
						required:true,
						maxlength: 50
				   },  
				   							 		  				  				  		     			    				   					workClass:{
						maxlength: 255
				    },
				    							 		  				  			  }
	});
}
//保存功能
Weekly.prototype.save=function(form,id){
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
					 layer.close(_self.eidtIndex);
				 }
				 layer.msg('保存成功！');
			 }else{
				 layer.alert('保存失败！' + r.error, {
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
//重载数据
Weekly.prototype.reLoad=function(){
	var searchdata = {param:JSON.stringify(serializeObject($(this._formId)))}
	$(this._datagridId).jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
//打开高级查询框
Weekly.prototype.openSearchForm = function(searchDiv){
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
		content: $(this._searchDialogId),
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
//关闭对话框
Weekly.prototype.closeDialog=function(id){
	if(id == "insert"){
		layer.close(this.insertIndex);
	}else{
		layer.close(this.eidtIndex);
	}
};
Weekly.prototype.clearData =function(){
	clearFormData(this._formId);
	this.searchData();
};
Weekly.prototype.del=function(row){
	var rows =row;
	var _self = this;
	var ids = [];
	var l =rows.length;
	if(l > 0){
		layer.confirm('确认要删除选中的数据吗?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
				for(;l--;){
					 ids.push(rows[l]);
				 }
				 avicAjax.ajax({
					 url:_self.getUrl()+'delete/1',
					 data:	JSON.stringify(ids),
					 contentType : 'application/json',
					 type : 'post',
					 dataType : 'json',
					 success : function(r){
						 if (r.flag == "success") {
							 location.reload()
						}else{
							layer.alert('删除失败！' + r.error, {
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

function dubiShow(sid){
	$("#weekly_DI").css("display","")
	$("#posen").css("display","")	
	$("#userIdLeagueOrganMember").val(sid);
	$('#userIdAliasLeagueOrganMember').on('focus',function(e){
							new H5CommonSelect({type:'userSelect', idFiled:'userIdLeagueOrganMember',textFiled:'userIdAliasLeagueOrganMember',selectModel:'multi',});
							this.blur();
							nullInput(e);
						});
	$('#weekly_DI').on('click',function(e){										
		var id = $("#userIdLeagueOrganMember").val();
			if(id==''){
				layer.alert('请选择用户后进行操作', {
					  icon: 7,	
					  area: ['400px', ''], //宽高
					  closeBtn: 0,
					  btn: ['关闭'],
					  title:"提示"
					})	
					return
			}
			var rows=$("#weeklyjqGrid").jqGrid("getGridParam","selarrrow");
			if(rows.length==0){
				layer.alert('请选择流程后进行操作', {
					  icon: 7,
					  area: ['400px', ''], //宽高
					  closeBtn: 0,
					  btn: ['关闭'],
					  title:"提示"
					})
					return
			}
			$.ajax({
			    url:"platform/avicit/weekly/weeklyController/insertDynDistributeList?userid="+id+"&&rows="+rows,
			    dataType:"json",
			    type:"GET",
			    success: function (r) {
			    	if(r.bol=="true"){
			    		layer.alert('操作成功', {
							  icon: 7,
							  area: ['400px', ''], //宽高
							  closeBtn: 0,
							  btn: ['关闭'],
							  title:"提示"
							}) 								
			    	}else{
			    		layer.alert('操作失败，请确定所有流程都已结束', {
							  icon: 7,
							  area: ['400px', ''], //宽高
							  closeBtn: 0,
							  btn: ['关闭'],
							  title:"提示"
							})
			    		
			    	}
			    }
			})
	 
	}
	);
}
function serweekly(){
	$("#weekly_select").css("display","")
	$("#weekly_select").on('click',function() {                                                                       
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '搜索周报',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: "platform/avicit/weekly/weeklyController/toWeeklyManageSelect"     
		});                                                                              
	}                                                                                  
	);
}
function serrolln(){
	$("#ROll_select").css("display","")
	$("#ROll_select").on('click',function() {                                                                       
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '搜索滚动计划',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: "platform/avicit/weekly/weeklyController/toRollingPlanManage"     
		});                                                                              
	}                                                                                  
	);
}
function del(){
	$("#weekly_sysid").css("display","inline-block")						
	$("#weekly_sysid").on("click",function(){
	 var idrow =$("#weeklyjqGrid").jqGrid("getGridParam","selarrrow")
		for(var i=0;i<idrow.length;i++){
			var Date= $("#weeklyjqGrid").jqGrid("getRowData",idrow[i]);
			var zt= Date.businessstate;    
			if(zt!='已结束'){
				layer.alert('不能删除未结束的流程', {
					  icon: 7,	
					  area: ['400px', ''], //宽高
					  closeBtn: 0,
					  btn: ['关闭'],
					  title:"提示"
					})	
				return
			}
		}
	 weekly.del(idrow);					           	
	})
}

function faqi(){
	$("#weekly_insert").css("display","")
}
