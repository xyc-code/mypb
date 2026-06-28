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

function redraw948e83e391927ff30191d53fcf3856f5(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d53fcf3856f5").width();
		var win_height = $("#948e83e391927ff30191d53fcf3856f5").height();
		$('#948e83e391927ff30191d53fcf3856f5').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d53fcf3856f5').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d53fcf3856f5").width();
	setTimeout(function(){redraw948e83e391927ff30191d53fcf3856f5(win_width);},500);
});
var table1a72ab3929662842e0bb037e2ef42371d2b0KeyWordIn = "";    
var table1a72ab3929662842e0bb037e2ef42371d2b0ParamIn = "";    
var table1a72ab3929662842e0bb037e2ef42371d2b0SelectRow = {     
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
var table1a72ab3929662842e0bb037e2ef42371d2b0LoadComplete = {     
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
var table1a72ab3929662842e0bb037e2ef42371d2b0BeforeEditCell = {        
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
var table1a72ab3929662842e0bb037e2ef42371d2b0OndblClickRow = {     
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
var table1a72ab3929662842e0bb037e2ef42371d2b0OnRightClickRow = {     
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
var table1a72ab3929662842e0bb037e2ef42371d2b0GridComplete = {     
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
var table1a72ab3929662842e0bb037e2ef42371d2b0OnCellSelect = {     
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
var table1a72ab3929662842e0bb037e2ef42371d2b0LoadBeforeSend = {        
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
function table1a72ab3929662842e0bb037e2ef42371d2b0Reload(pid){
	var _isInvalid = true;
	$("#table1a72ab3929662842e0bb037e2ef42371d2b0").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1a72ab3929662842e0bb037e2ef42371d2b0Pid = pid;
		}
		return false;
	}
	window.table1a72ab3929662842e0bb037e2ef42371d2b0Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table1a72ab3929662842e0bb037e2ef42371d2b0TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1a72ab3929662842e0bb037e2ef42371d2b0Pid == 'undefined' || window.table1a72ab3929662842e0bb037e2ef42371d2b0Pid!=null){
table1a72ab3929662842e0bb037e2ef42371d2b0Reload(window.table1a72ab3929662842e0bb037e2ef42371d2b0Pid);
}
}
var tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0 = [];
var uniqueColtable1a72ab3929662842e0bb037e2ef42371d2b0 = [];
var uniqueColTitletable1a72ab3929662842e0bb037e2ef42371d2b0 = [];
var defaultValuetable1a72ab3929662842e0bb037e2ef42371d2b0 = {};
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '职代会届次',hidden:false, name: 'ZDHJC',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '审议事项',hidden:false, name: 'SYSX',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '表决结果',hidden:false, name: 'BJJG',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table1a72ab3929662842e0bb037e2ef42371d2b0").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d53fcf3856f5/table1a72ab3929662842e0bb037e2ef42371d2b0/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable1a72ab3929662842e0bb037e2ef42371d2b0,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1a72ab3929662842e0bb037e2ef42371d2b0SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1a72ab3929662842e0bb037e2ef42371d2b0LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1a72ab3929662842e0bb037e2ef42371d2b0OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1a72ab3929662842e0bb037e2ef42371d2b0OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1a72ab3929662842e0bb037e2ef42371d2b0GridComplete.exec();
				    setTimeout(function(){var height = $("#table1a72ab3929662842e0bb037e2ef42371d2b0").closest('.ui-jqgrid-bdiv').height();
					$("#table1a72ab3929662842e0bb037e2ef42371d2b0norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1a72ab3929662842e0bb037e2ef42371d2b0norecords img").css("width","120px");
                 }else{
					    $("#table1a72ab3929662842e0bb037e2ef42371d2b0norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1a72ab3929662842e0bb037e2ef42371d2b0BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table1a72ab3929662842e0bb037e2ef42371d2b0OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1a72ab3929662842e0bb037e2ef42371d2b0norecords").hide();
		   	    $("#Pagertable1a72ab3929662842e0bb037e2ef42371d2b0_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1a72ab3929662842e0bb037e2ef42371d2b0").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1a72ab3929662842e0bb037e2ef42371d2b0").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1a72ab3929662842e0bb037e2ef42371d2b0norecords").html() == null) {
						$("#table1a72ab3929662842e0bb037e2ef42371d2b0").parent().append("<div class='no_data' id='table1a72ab3929662842e0bb037e2ef42371d2b0norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1a72ab3929662842e0bb037e2ef42371d2b0norecords").show();
					$("#Pagertable1a72ab3929662842e0bb037e2ef42371d2b0_left").css("display", "none");
				}
table1a72ab3929662842e0bb037e2ef42371d2b0LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1a72ab3929662842e0bb037e2ef42371d2b0"
    });
table1a72ab3929662842e0bb037e2ef42371d2b0Reload();
$("#t_table1a72ab3929662842e0bb037e2ef42371d2b0").append($("#tableToolbartable1a72ab3929662842e0bb037e2ef42371d2b0"));$("#tableToolbarButton5d1e43636eea8047d81980e5b661d9ee6139").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d53f79f556e1&grid=table1a72ab3929662842e0bb037e2ef42371d2b0',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton920eb8d3b805d84d7cc88c9d73bed7ba684d").bind('click',function() {                                                                                       
	var ids = $('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d53f79f556e1&id=' + rowData.ID+'&grid=table1a72ab3929662842e0bb037e2ef42371d2b0',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtona1540f57a7bee748ad492b32fd906c359911").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_ZGDBDH2&isbpm=N&dbid=948e83e391927ff30191d486c2f814e6', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d53fcf3856f5',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table1a72ab3929662842e0bb037e2ef42371d2b0').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton56a625ceec27164bb778a314aa260be013b1').bind('click',function() {                           
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
	        var colModels =$('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table1a72ab3929662842e0bb037e2ef42371d2b0KeyWordIn;                          
	        expSearchParams.param = table1a72ab3929662842e0bb037e2ef42371d2b0ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_职工代表大会2';                             
	        expSearchParams.viewid='948e83e391927ff30191d53fcf3856f5';                                   
	        expSearchParams.tableid='table1a72ab3929662842e0bb037e2ef42371d2b0';                                 
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
$("#tableToolbarButton549256eb4976dd49a5f9348ecd8546753e9a").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zzmg_zgdbdh2', callBackFunc: function () {                           	
		$('#table1a72ab3929662842e0bb037e2ef42371d2b0').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
