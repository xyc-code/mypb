function bpmFormatter(cellvalue, options, rowObject){
   var bussinesid =  rowObject.ID;                                                 
   if(rowObject.PROCESSINSTANCEID !=null && rowObject.PROCESSINSTANCEID!=undefined && rowObject.PROCESSINSTANCEID !=''){ 
   	bussinesid = rowObject.PROCESSINSTANCEID;
   }
   if(rowObject.BUSINESSSTATE_!=null&&rowObject.BUSINESSSTATE_!=""&&rowObject.BUSINESSSTATE_!='undefined'){
	  return "<span class='glyphicon glyphicon-pencil' onclick='javascript: flowUtils.detail(\""+ bussinesid +"\",2);'></span>";
	}else{return '';}
}
function bpmStatusFormatter(cellvalue, options, rowObject){
	  if(cellvalue=='start')return '拟稿中'; if(cellvalue=='active')return '流转中'; if(cellvalue=='ended')return '已完成';return '';
	}

function redraw948e83e38f23eb7c018f27c2c4d8434e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38f23eb7c018f27c2c4d8434e").width();
		var win_height = $("#948e83e38f23eb7c018f27c2c4d8434e").height();
		$('#948e83e38f23eb7c018f27c2c4d8434e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38f23eb7c018f27c2c4d8434e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38f23eb7c018f27c2c4d8434e").width();
	setTimeout(function(){redraw948e83e38f23eb7c018f27c2c4d8434e(win_width);},500);
});
var tablee2df613043abb14c48fbdf81b21565c851ebKeyWordIn = "";    
var tablee2df613043abb14c48fbdf81b21565c851ebParamIn = "";    
var tablee2df613043abb14c48fbdf81b21565c851ebSelectRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,status){
					oldFunc(rowid,status);
					fun(rowid,status);
				}
			}
		},
		exec:function(rowid,status){
			if (typeof this.func == 'function')
               this.func(rowid,status);
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebLoadComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(data){
					oldFunc(data);
					fun(data);
				}
			}
		},
		exec:function(data){
			if (typeof this.func == 'function')
               this.func(data);
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebBeforeEditCell = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid, cellname, value, iRow, iCol){
					oldFunc(rowid, cellname, value, iRow, iCol);
					fun(rowid, cellname, value, iRow, iCol);
				}
			}
		},
		exec:function(rowid, cellname, value, iRow, iCol){
			if (typeof this.func == 'function')
               if(this.func(rowid, cellname, value, iRow, iCol) == false)
               		return false;
         return true;
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebOndblClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebOnRightClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebGridComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(){
					oldFunc();
					fun();
				}
			}
		},
		exec:function(){
			if (typeof this.func == 'function')
               this.func();
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebOnCellSelect = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iCol,cellcontent,e){
					oldFunc(rowid,iCol,cellcontent,e);
					fun(rowid,iCol,cellcontent,e);
				}
			}
		},
		exec:function(rowid,iCol,cellcontent,e){
			if (typeof this.func == 'function')
               this.func(rowid,iCol,cellcontent,e);
		}
};
var tablee2df613043abb14c48fbdf81b21565c851ebLoadBeforeSend = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(xhr, settings){
					oldFunc(xhr, settings);
					fun(xhr, settings);
				}
			}
		},
		exec:function(xhr, settings){
			if (typeof this.func == 'function')
               if(this.func(xhr, settings) == false)
               		return false;
         return true;
		}
};
function tablee2df613043abb14c48fbdf81b21565c851ebReload(pid){
	var _isInvalid = true;
	$("#tablee2df613043abb14c48fbdf81b21565c851eb").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee2df613043abb14c48fbdf81b21565c851ebPid = pid;
		}
		return false;
	}
	window.tablee2df613043abb14c48fbdf81b21565c851ebPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee2df613043abb14c48fbdf81b21565c851eb').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee2df613043abb14c48fbdf81b21565c851ebTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee2df613043abb14c48fbdf81b21565c851ebPid == 'undefined' || window.tablee2df613043abb14c48fbdf81b21565c851ebPid!=null){
tablee2df613043abb14c48fbdf81b21565c851ebReload(window.tablee2df613043abb14c48fbdf81b21565c851ebPid);
}
}
var tablecmtablee2df613043abb14c48fbdf81b21565c851eb = [];
var uniqueColtablee2df613043abb14c48fbdf81b21565c851eb = [];
var uniqueColTitletablee2df613043abb14c48fbdf81b21565c851eb = [];
var defaultValuetablee2df613043abb14c48fbdf81b21565c851eb = {};
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '上传人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '上传部门',hidden:false, name: 'DRAF_UNIT',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '脚本标签',hidden:true, name: 'SCRIPT_LAB',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '名称',hidden:false, name: 'SCRIPT_NAME',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({ label: '报送分类',hidden:true, name: 'UP_TYPE',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({ label: '报送分类',hidden:false, name: 'UP_TYPEName',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '图片', formatter:function(value){return '<img src="data:image/jpg;base64,'+value+'" style="max-width:50px;max-height:50px"/>';}, hidden:false, name: 'LOGO_IMG',align:'left',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '视频数量',hidden:false, name: 'V_NUM',align:'right',  width: '150px'});
tablecmtablee2df613043abb14c48fbdf81b21565c851eb.push({label: '上传时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
	var searchNamestablee2df613043abb14c48fbdf81b21565c851eb = []; 
searchNamestablee2df613043abb14c48fbdf81b21565c851eb.push('SCRIPT_NAME');
$('#keyWordtablee2df613043abb14c48fbdf81b21565c851eb').attr('placeholder', '请输入名称查询');
function searchDataKeyWordtablee2df613043abb14c48fbdf81b21565c851eb(){
	var keyWord = $.trim($("#keyWordtablee2df613043abb14c48fbdf81b21565c851eb").val()); 
 if($('#keyWordtablee2df613043abb14c48fbdf81b21565c851eb').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablee2df613043abb14c48fbdf81b21565c851eb.length;i++){ 
		var name = searchNamestablee2df613043abb14c48fbdf81b21565c851eb[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablee2df613043abb14c48fbdf81b21565c851ebKeyWordIn=JSON.stringify(param);
tablee2df613043abb14c48fbdf81b21565c851ebParamIn="";
	$('#tablee2df613043abb14c48fbdf81b21565c851eb').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablee2df613043abb14c48fbdf81b21565c851eb').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablee2df613043abb14c48fbdf81b21565c851eb();
	}
});
$('#keyWordBttablee2df613043abb14c48fbdf81b21565c851eb').bind('click', function() {
		searchDataKeyWordtablee2df613043abb14c48fbdf81b21565c851eb();
});
;$(document).ready(function(){ 

$("#tablee2df613043abb14c48fbdf81b21565c851eb").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38f23eb7c018f27c2c4d8434e/tablee2df613043abb14c48fbdf81b21565c851eb/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee2df613043abb14c48fbdf81b21565c851eb,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee2df613043abb14c48fbdf81b21565c851ebSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee2df613043abb14c48fbdf81b21565c851ebLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee2df613043abb14c48fbdf81b21565c851ebOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee2df613043abb14c48fbdf81b21565c851ebOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee2df613043abb14c48fbdf81b21565c851ebGridComplete.exec();
				    setTimeout(function(){var height = $("#tablee2df613043abb14c48fbdf81b21565c851eb").closest('.ui-jqgrid-bdiv').height();
					$("#tablee2df613043abb14c48fbdf81b21565c851ebnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee2df613043abb14c48fbdf81b21565c851ebnorecords img").css("width","120px");
                 }else{
					    $("#tablee2df613043abb14c48fbdf81b21565c851ebnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee2df613043abb14c48fbdf81b21565c851ebBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee2df613043abb14c48fbdf81b21565c851ebOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee2df613043abb14c48fbdf81b21565c851ebnorecords").hide();
		   	    $("#Pagertablee2df613043abb14c48fbdf81b21565c851eb_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee2df613043abb14c48fbdf81b21565c851eb").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee2df613043abb14c48fbdf81b21565c851eb").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee2df613043abb14c48fbdf81b21565c851ebnorecords").html() == null) {
						$("#tablee2df613043abb14c48fbdf81b21565c851eb").parent().append("<div class='no_data' id='tablee2df613043abb14c48fbdf81b21565c851ebnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee2df613043abb14c48fbdf81b21565c851ebnorecords").show();
					$("#Pagertablee2df613043abb14c48fbdf81b21565c851eb_left").css("display", "none");
				}
tablee2df613043abb14c48fbdf81b21565c851ebLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee2df613043abb14c48fbdf81b21565c851eb"
    });
tablee2df613043abb14c48fbdf81b21565c851ebReload();
$("#t_tablee2df613043abb14c48fbdf81b21565c851eb").append($("#tableToolbartablee2df613043abb14c48fbdf81b21565c851eb"));$("#tableToolbarButtoneb9b3cabed4bb941f8f9a1d1adb9dbf42d46").bind('click',function() {                                                                       
	if (pageParams.hasOwnProperty('isInsert') && pageParams.isInsert) {              
		layer.alert('请先保存表单！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		 });                                                                                         
	} else {                                                                                  
                                                                            
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '添加',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38f23eb7c018f27bc4d5742d6&grid=tablee2df613043abb14c48fbdf81b21565c851eb',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton65591ecbdf791f4747bbd4a947bad9a0a106").bind('click',function() {                                                                                       
	var ids = $('#tablee2df613043abb14c48fbdf81b21565c851eb').jqGrid('getGridParam', 'selarrrow');                            
	if (ids.length == 0) {                                                                          
		layer.alert('请选择数据！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (ids.length > 1) {                                                                    
		layer.alert('请选择一条数据！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowData = $('#tablee2df613043abb14c48fbdf81b21565c851eb').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38f23eb7c018f27bc4d5742d6&id=' + rowData.ID+'&grid=tablee2df613043abb14c48fbdf81b21565c851eb',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonfeb9ee3d83ce6b4aa9d92b52021572ecd065").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee2df613043abb14c48fbdf81b21565c851eb').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee2df613043abb14c48fbdf81b21565c851eb').jqGrid("delRowData", bpmsDeleteRows[l]);  				
			}else{																			
				bpmsDeleteIds.push(bpmsDeleteRows[l]);										
			}																				
		}																					
       ;                                                                     
		layer.confirm('确定要删除该数据吗?', {													    
			icon: 3,																			
			title: '提示',																	    
			area: ['400px', '']																	
		}, function(index) {																	
			if (bpmsDeleteIds.length>0){																	
			avicAjax.ajax({																		
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_SCRIPT_UP&isbpm=N&dbid=948e83e38f23eb7c018f27c14d7942e8', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38f23eb7c018f27c2c4d8434e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee2df613043abb14c48fbdf81b21565c851eb').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
						layer.alert('删除失败！' + r.error, {									    
							icon: 7,															
							area: ['400px', ''],												
							closeBtn: 0         												
						});																		
					}  																			
				}																				
			}); 																				
			}else{	 																				
			;	 																	
			}	 																				
			layer.close(index);                                                                 
		});																						
	} else {																					
		layer.alert('请选择要删除的记录！', {													        
			icon: 7,																			
			area: ['400px', ''], 																
			closeBtn: 0 																		
		});  																					
	}   																						
}																								
);
;});	 
