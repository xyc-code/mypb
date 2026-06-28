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

function redraw948e83e391927ff30191a153ea631cd4(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a153ea631cd4").width();
		var win_height = $("#948e83e391927ff30191a153ea631cd4").height();
		$('#948e83e391927ff30191a153ea631cd4').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a153ea631cd4').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a153ea631cd4").width();
	setTimeout(function(){redraw948e83e391927ff30191a153ea631cd4(win_width);},500);
});
var table5932b0d694821c48d34ade91b6cd76082768KeyWordIn = "";    
var table5932b0d694821c48d34ade91b6cd76082768ParamIn = "";    
var table5932b0d694821c48d34ade91b6cd76082768SelectRow = {     
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
var table5932b0d694821c48d34ade91b6cd76082768LoadComplete = {     
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
var table5932b0d694821c48d34ade91b6cd76082768BeforeEditCell = {        
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
var table5932b0d694821c48d34ade91b6cd76082768OndblClickRow = {     
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
var table5932b0d694821c48d34ade91b6cd76082768OnRightClickRow = {     
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
var table5932b0d694821c48d34ade91b6cd76082768GridComplete = {     
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
var table5932b0d694821c48d34ade91b6cd76082768OnCellSelect = {     
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
var table5932b0d694821c48d34ade91b6cd76082768LoadBeforeSend = {        
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
function table5932b0d694821c48d34ade91b6cd76082768Reload(pid){
	var _isInvalid = true;
	$("#table5932b0d694821c48d34ade91b6cd76082768").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5932b0d694821c48d34ade91b6cd76082768Pid = pid;
		}
		return false;
	}
	window.table5932b0d694821c48d34ade91b6cd76082768Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5932b0d694821c48d34ade91b6cd76082768TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5932b0d694821c48d34ade91b6cd76082768Pid == 'undefined' || window.table5932b0d694821c48d34ade91b6cd76082768Pid!=null){
table5932b0d694821c48d34ade91b6cd76082768Reload(window.table5932b0d694821c48d34ade91b6cd76082768Pid);
}
}
var tablecmtable5932b0d694821c48d34ade91b6cd76082768 = [];
var uniqueColtable5932b0d694821c48d34ade91b6cd76082768 = [];
var uniqueColTitletable5932b0d694821c48d34ade91b6cd76082768 = [];
var defaultValuetable5932b0d694821c48d34ade91b6cd76082768 = {};
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '内容',hidden:false, name: 'NR',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '责任单位',hidden:false, name: 'ZRDW',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '进展',hidden:false, name: 'JZ',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5932b0d694821c48d34ade91b6cd76082768.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table5932b0d694821c48d34ade91b6cd76082768").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a153ea631cd4/table5932b0d694821c48d34ade91b6cd76082768/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5932b0d694821c48d34ade91b6cd76082768,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5932b0d694821c48d34ade91b6cd76082768SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5932b0d694821c48d34ade91b6cd76082768LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5932b0d694821c48d34ade91b6cd76082768OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5932b0d694821c48d34ade91b6cd76082768OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5932b0d694821c48d34ade91b6cd76082768GridComplete.exec();
				    setTimeout(function(){var height = $("#table5932b0d694821c48d34ade91b6cd76082768").closest('.ui-jqgrid-bdiv').height();
					$("#table5932b0d694821c48d34ade91b6cd76082768norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5932b0d694821c48d34ade91b6cd76082768norecords img").css("width","120px");
                 }else{
					    $("#table5932b0d694821c48d34ade91b6cd76082768norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5932b0d694821c48d34ade91b6cd76082768BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5932b0d694821c48d34ade91b6cd76082768OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5932b0d694821c48d34ade91b6cd76082768norecords").hide();
		   	    $("#Pagertable5932b0d694821c48d34ade91b6cd76082768_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5932b0d694821c48d34ade91b6cd76082768").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5932b0d694821c48d34ade91b6cd76082768").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5932b0d694821c48d34ade91b6cd76082768norecords").html() == null) {
						$("#table5932b0d694821c48d34ade91b6cd76082768").parent().append("<div class='no_data' id='table5932b0d694821c48d34ade91b6cd76082768norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5932b0d694821c48d34ade91b6cd76082768norecords").show();
					$("#Pagertable5932b0d694821c48d34ade91b6cd76082768_left").css("display", "none");
				}
table5932b0d694821c48d34ade91b6cd76082768LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5932b0d694821c48d34ade91b6cd76082768"
    });
table5932b0d694821c48d34ade91b6cd76082768Reload();
$("#t_table5932b0d694821c48d34ade91b6cd76082768").append($("#tableToolbartable5932b0d694821c48d34ade91b6cd76082768"));$("#tableToolbarButton5e152057f152e04d8019df3f4652c340e6b6").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a15377c81cc1&grid=table5932b0d694821c48d34ade91b6cd76082768',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton15eb8c55b2768146dc387dd03ad0d4d5d4c7").bind('click',function() {                                                                                       
	var ids = $('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a15377c81cc1&id=' + rowData.ID+'&grid=table5932b0d694821c48d34ade91b6cd76082768',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton57918d8e7ffff9466d699d094156fb352240").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WTHDZZB1&isbpm=N&dbid=948e83e391927ff30191977680b647d8', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a153ea631cd4',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5932b0d694821c48d34ade91b6cd76082768').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton974d9b36a7ed2c470bb88f83d2c254bda8fe').bind('click',function() {                           
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
	        var colModels =$('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table5932b0d694821c48d34ade91b6cd76082768KeyWordIn;                          
	        expSearchParams.param = table5932b0d694821c48d34ade91b6cd76082768ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_文体活动组织表1';                             
	        expSearchParams.viewid='948e83e391927ff30191a153ea631cd4';                                   
	        expSearchParams.tableid='table5932b0d694821c48d34ade91b6cd76082768';                                 
	        expSearchParams.isbpm='N';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/V1'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
$("#tableToolbarButton46cbd0f484256244a3693fcf65b64f719176").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wthdzzb1', callBackFunc: function () {                           	
		$('#table5932b0d694821c48d34ade91b6cd76082768').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
