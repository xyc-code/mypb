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

function redraw948e83e390fd39870191023c32905734(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390fd39870191023c32905734").width();
		var win_height = $("#948e83e390fd39870191023c32905734").height();
		$('#948e83e390fd39870191023c32905734').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e390fd39870191023c32905734').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390fd39870191023c32905734").width();
	setTimeout(function(){redraw948e83e390fd39870191023c32905734(win_width);},500);
});
var table1242deed8515be424e180d05d545fe6005d7KeyWordIn = "";    
var table1242deed8515be424e180d05d545fe6005d7ParamIn = "";    
var table1242deed8515be424e180d05d545fe6005d7SelectRow = {     
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
var table1242deed8515be424e180d05d545fe6005d7LoadComplete = {     
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
var table1242deed8515be424e180d05d545fe6005d7BeforeEditCell = {        
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
var table1242deed8515be424e180d05d545fe6005d7OndblClickRow = {     
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
var table1242deed8515be424e180d05d545fe6005d7OnRightClickRow = {     
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
var table1242deed8515be424e180d05d545fe6005d7GridComplete = {     
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
var table1242deed8515be424e180d05d545fe6005d7OnCellSelect = {     
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
var table1242deed8515be424e180d05d545fe6005d7LoadBeforeSend = {        
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
function table1242deed8515be424e180d05d545fe6005d7Reload(pid){
	var _isInvalid = true;
	$("#table1242deed8515be424e180d05d545fe6005d7").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1242deed8515be424e180d05d545fe6005d7Pid = pid;
		}
		return false;
	}
	window.table1242deed8515be424e180d05d545fe6005d7Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1242deed8515be424e180d05d545fe6005d7').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table1242deed8515be424e180d05d545fe6005d7TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1242deed8515be424e180d05d545fe6005d7Pid == 'undefined' || window.table1242deed8515be424e180d05d545fe6005d7Pid!=null){
table1242deed8515be424e180d05d545fe6005d7Reload(window.table1242deed8515be424e180d05d545fe6005d7Pid);
}
}
var tablecmtable1242deed8515be424e180d05d545fe6005d7 = [];
var uniqueColtable1242deed8515be424e180d05d545fe6005d7 = [];
var uniqueColTitletable1242deed8515be424e180d05d545fe6005d7 = [];
var defaultValuetable1242deed8515be424e180d05d545fe6005d7 = {};
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '达标示范级别',hidden:false, name: 'D_DBSFJB',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '党组织名称',hidden:false, name: 'D_DZZMC',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '批次',hidden:false, name: 'D_PC',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '命名时间',hidden:false, name: 'D_MMSJ',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '示范截止时间',hidden:false, name: 'D_SFJZSJ',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable1242deed8515be424e180d05d545fe6005d7.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
;$(document).ready(function(){ 

$("#table1242deed8515be424e180d05d545fe6005d7").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390fd39870191023c32905734/table1242deed8515be424e180d05d545fe6005d7/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable1242deed8515be424e180d05d545fe6005d7,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1242deed8515be424e180d05d545fe6005d7SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1242deed8515be424e180d05d545fe6005d7LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1242deed8515be424e180d05d545fe6005d7OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1242deed8515be424e180d05d545fe6005d7OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1242deed8515be424e180d05d545fe6005d7GridComplete.exec();
				    setTimeout(function(){var height = $("#table1242deed8515be424e180d05d545fe6005d7").closest('.ui-jqgrid-bdiv').height();
					$("#table1242deed8515be424e180d05d545fe6005d7norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1242deed8515be424e180d05d545fe6005d7norecords img").css("width","120px");
                 }else{
					    $("#table1242deed8515be424e180d05d545fe6005d7norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1242deed8515be424e180d05d545fe6005d7BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table1242deed8515be424e180d05d545fe6005d7OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1242deed8515be424e180d05d545fe6005d7norecords").hide();
		   	    $("#Pagertable1242deed8515be424e180d05d545fe6005d7_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1242deed8515be424e180d05d545fe6005d7").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1242deed8515be424e180d05d545fe6005d7").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1242deed8515be424e180d05d545fe6005d7norecords").html() == null) {
						$("#table1242deed8515be424e180d05d545fe6005d7").parent().append("<div class='no_data' id='table1242deed8515be424e180d05d545fe6005d7norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1242deed8515be424e180d05d545fe6005d7norecords").show();
					$("#Pagertable1242deed8515be424e180d05d545fe6005d7_left").css("display", "none");
				}
table1242deed8515be424e180d05d545fe6005d7LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1242deed8515be424e180d05d545fe6005d7"
    });
table1242deed8515be424e180d05d545fe6005d7Reload();
$("#t_table1242deed8515be424e180d05d545fe6005d7").append($("#tableToolbartable1242deed8515be424e180d05d545fe6005d7"));$("#tableToolbarButton72b6efe1204fc84ed928e987693f38be5cd4").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390fd39870191023b9f12571f&grid=table1242deed8515be424e180d05d545fe6005d7',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton4bb846cf2f062948a8a9d12624d1c4135d94").bind('click',function() {                                                                                       
	var ids = $('#table1242deed8515be424e180d05d545fe6005d7').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table1242deed8515be424e180d05d545fe6005d7').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390fd39870191023b9f12571f&id=' + rowData.ID+'&grid=table1242deed8515be424e180d05d545fe6005d7',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton8169bd351d5f75438598f62014beb5fca088").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table1242deed8515be424e180d05d545fe6005d7').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table1242deed8515be424e180d05d545fe6005d7').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_GSDB_SFJSMXB&isbpm=N&dbid=948e83e390fd398701910234b44a5600', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e390fd39870191023c32905734',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table1242deed8515be424e180d05d545fe6005d7').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton1d2dcedf764a094a9fe8194a47c025c05412").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_gsdbsfjsmxb', callBackFunc: function () {                           	
		$('#table1242deed8515be424e180d05d545fe6005d7').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButtone83ecacda044f1436f88c75bd2dbd70141c4').bind('click',function() {                           
	layer.open({                         
	    type : 2,                        
	    area : ['400px', '300px'],       
	    title: '导出',                   
	    skin: 'bs-modal',                
	    maxmin: false,                   
	    btn: ['导出', '取消'],            
	    content: 'avicit/platform6/eform/bmpsformdatatool/exportFileType.jsp',       
	    yes:function(index, layero){                                                 
	        var iframeWin = layero.find('iframe')[0].contentWindow;                  
	        var fileType = iframeWin.$("input[name='exportType']:checked").val();  
	        var layout = iframeWin.$('#direction :selected').val();                  
	        var showColModels = new Array();                                         
	        var blockFields = new Array();                                           
	        var colModels =$('#table1242deed8515be424e180d05d545fe6005d7').jqGrid('getGridParam','colModel');   
	        for(var i = 0; i < colModels.length; i++){                               
	            if(colModels[i].hidden == false && colModels[i].name != 'cb'){       
	                showColModels.push(colModels[i]);                                
	            }else{                                                               
	                blockFields.push(colModels[i].name);                             
	            }                                                                    
	        }                                                                        
	        var dataGridFields = JSON.stringify(colModels);                          
	        expSearchParams = {};                                                    
	        expSearchParams.fileType = fileType;                                     
	        expSearchParams.dataGridFields = dataGridFields;                         
	        expSearchParams.keyWord = table1242deed8515be424e180d05d545fe6005d7KeyWordIn;                          
	        expSearchParams.param = table1242deed8515be424e180d05d545fe6005d7ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_公司达标示范建设明细表';                             
	        expSearchParams.viewid='948e83e390fd39870191023c32905734';                                   
	        expSearchParams.tableid='table1242deed8515be424e180d05d545fe6005d7';                                 
	        expSearchParams.isbpm='N';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
;});	 
