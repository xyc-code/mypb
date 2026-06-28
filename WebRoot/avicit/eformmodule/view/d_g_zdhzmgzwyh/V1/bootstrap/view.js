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

function redraw948e83e391927ff30191d545895157a0(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d545895157a0").width();
		var win_height = $("#948e83e391927ff30191d545895157a0").height();
		$('#948e83e391927ff30191d545895157a0').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d545895157a0').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d545895157a0").width();
	setTimeout(function(){redraw948e83e391927ff30191d545895157a0(win_width);},500);
});
var table0e5d8f2ad1a5db4966e8214886f525670b9eKeyWordIn = "";    
var table0e5d8f2ad1a5db4966e8214886f525670b9eParamIn = "";    
var table0e5d8f2ad1a5db4966e8214886f525670b9eSelectRow = {     
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eLoadComplete = {     
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eBeforeEditCell = {        
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eOndblClickRow = {     
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eOnRightClickRow = {     
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eGridComplete = {     
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eOnCellSelect = {     
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
var table0e5d8f2ad1a5db4966e8214886f525670b9eLoadBeforeSend = {        
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
function table0e5d8f2ad1a5db4966e8214886f525670b9eReload(pid){
	var _isInvalid = true;
	$("#table0e5d8f2ad1a5db4966e8214886f525670b9e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0e5d8f2ad1a5db4966e8214886f525670b9ePid = pid;
		}
		return false;
	}
	window.table0e5d8f2ad1a5db4966e8214886f525670b9ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0e5d8f2ad1a5db4966e8214886f525670b9e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0e5d8f2ad1a5db4966e8214886f525670b9eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0e5d8f2ad1a5db4966e8214886f525670b9ePid == 'undefined' || window.table0e5d8f2ad1a5db4966e8214886f525670b9ePid!=null){
table0e5d8f2ad1a5db4966e8214886f525670b9eReload(window.table0e5d8f2ad1a5db4966e8214886f525670b9ePid);
}
}
var tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e = [];
var uniqueColtable0e5d8f2ad1a5db4966e8214886f525670b9e = [];
var uniqueColTitletable0e5d8f2ad1a5db4966e8214886f525670b9e = [];
var defaultValuetable0e5d8f2ad1a5db4966e8214886f525670b9e = {};
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '委员会名称',hidden:false, name: 'WYHMC',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '主任',hidden:false, name: 'ZR',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '委员1',hidden:false, name: 'WY1',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '委员2',hidden:false, name: 'WY2',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '委员3',hidden:false, name: 'WY3',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '委员4',hidden:false, name: 'WY4',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table0e5d8f2ad1a5db4966e8214886f525670b9e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d545895157a0/table0e5d8f2ad1a5db4966e8214886f525670b9e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable0e5d8f2ad1a5db4966e8214886f525670b9e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0e5d8f2ad1a5db4966e8214886f525670b9eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0e5d8f2ad1a5db4966e8214886f525670b9eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0e5d8f2ad1a5db4966e8214886f525670b9eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0e5d8f2ad1a5db4966e8214886f525670b9eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0e5d8f2ad1a5db4966e8214886f525670b9eGridComplete.exec();
				    setTimeout(function(){var height = $("#table0e5d8f2ad1a5db4966e8214886f525670b9e").closest('.ui-jqgrid-bdiv').height();
					$("#table0e5d8f2ad1a5db4966e8214886f525670b9enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0e5d8f2ad1a5db4966e8214886f525670b9enorecords img").css("width","120px");
                 }else{
					    $("#table0e5d8f2ad1a5db4966e8214886f525670b9enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0e5d8f2ad1a5db4966e8214886f525670b9eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0e5d8f2ad1a5db4966e8214886f525670b9eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0e5d8f2ad1a5db4966e8214886f525670b9enorecords").hide();
		   	    $("#Pagertable0e5d8f2ad1a5db4966e8214886f525670b9e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0e5d8f2ad1a5db4966e8214886f525670b9e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0e5d8f2ad1a5db4966e8214886f525670b9e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0e5d8f2ad1a5db4966e8214886f525670b9enorecords").html() == null) {
						$("#table0e5d8f2ad1a5db4966e8214886f525670b9e").parent().append("<div class='no_data' id='table0e5d8f2ad1a5db4966e8214886f525670b9enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0e5d8f2ad1a5db4966e8214886f525670b9enorecords").show();
					$("#Pagertable0e5d8f2ad1a5db4966e8214886f525670b9e_left").css("display", "none");
				}
table0e5d8f2ad1a5db4966e8214886f525670b9eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0e5d8f2ad1a5db4966e8214886f525670b9e"
    });
table0e5d8f2ad1a5db4966e8214886f525670b9eReload();
$("#t_table0e5d8f2ad1a5db4966e8214886f525670b9e").append($("#tableToolbartable0e5d8f2ad1a5db4966e8214886f525670b9e"));$("#tableToolbarButtonbb7e97a2551a834d70b9f7f1fb55978c4e06").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d5453c315788&grid=table0e5d8f2ad1a5db4966e8214886f525670b9e',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonadfb812371090c4db41887caf753e25907cf").bind('click',function() {                                                                                       
	var ids = $('#table0e5d8f2ad1a5db4966e8214886f525670b9e').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table0e5d8f2ad1a5db4966e8214886f525670b9e').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d5453c315788&id=' + rowData.ID+'&grid=table0e5d8f2ad1a5db4966e8214886f525670b9e',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtondef2e2a7d85a634788f809867a247aedf0d3").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table0e5d8f2ad1a5db4966e8214886f525670b9e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table0e5d8f2ad1a5db4966e8214886f525670b9e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_ZDHZMGZWYH&isbpm=N&dbid=948e83e391927ff30191d4812258144d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d545895157a0',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table0e5d8f2ad1a5db4966e8214886f525670b9e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton656cf9de2f742c48cc784819a7f26c0e858f').bind('click',function() {                           
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
	        var colModels =$('#table0e5d8f2ad1a5db4966e8214886f525670b9e').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table0e5d8f2ad1a5db4966e8214886f525670b9eKeyWordIn;                          
	        expSearchParams.param = table0e5d8f2ad1a5db4966e8214886f525670b9eParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_职代会专门工作委员会';                             
	        expSearchParams.viewid='948e83e391927ff30191d545895157a0';                                   
	        expSearchParams.tableid='table0e5d8f2ad1a5db4966e8214886f525670b9e';                                 
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
