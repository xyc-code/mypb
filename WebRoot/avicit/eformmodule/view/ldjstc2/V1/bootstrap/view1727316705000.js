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

function redraw948e83e39222228601922c16e9257dbd(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39222228601922c16e9257dbd").width();
		var win_height = $("#948e83e39222228601922c16e9257dbd").height();
		$('#948e83e39222228601922c16e9257dbd').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39222228601922c16e9257dbd').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39222228601922c16e9257dbd").width();
	setTimeout(function(){redraw948e83e39222228601922c16e9257dbd(win_width);},500);
});
var table2ddd10a61f4e344239287e94a8b2f0e215ddKeyWordIn = "";    
var table2ddd10a61f4e344239287e94a8b2f0e215ddParamIn = "";    
var table2ddd10a61f4e344239287e94a8b2f0e215ddSelectRow = {     
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddLoadComplete = {     
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddBeforeEditCell = {        
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddOndblClickRow = {     
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddOnRightClickRow = {     
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddGridComplete = {     
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddOnCellSelect = {     
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
var table2ddd10a61f4e344239287e94a8b2f0e215ddLoadBeforeSend = {        
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
function table2ddd10a61f4e344239287e94a8b2f0e215ddReload(pid){
	var _isInvalid = true;
	$("#table2ddd10a61f4e344239287e94a8b2f0e215dd").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2ddd10a61f4e344239287e94a8b2f0e215ddPid = pid;
		}
		return false;
	}
	window.table2ddd10a61f4e344239287e94a8b2f0e215ddPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2ddd10a61f4e344239287e94a8b2f0e215ddTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2ddd10a61f4e344239287e94a8b2f0e215ddPid == 'undefined' || window.table2ddd10a61f4e344239287e94a8b2f0e215ddPid!=null){
table2ddd10a61f4e344239287e94a8b2f0e215ddReload(window.table2ddd10a61f4e344239287e94a8b2f0e215ddPid);
}
}
var tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd = [];
var uniqueColtable2ddd10a61f4e344239287e94a8b2f0e215dd = [];
var uniqueColTitletable2ddd10a61f4e344239287e94a8b2f0e215dd = [];
var defaultValuetable2ddd10a61f4e344239287e94a8b2f0e215dd = {};
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '竞赛类型',hidden:false, name: 'JSLX',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '竞赛名称',hidden:false, name: 'JSMC',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '牵头部门',hidden:false, name: 'QTBM',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '协助部门',hidden:false, name: 'XZBM',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '开展情况',hidden:false, name: 'KZQK',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table2ddd10a61f4e344239287e94a8b2f0e215dd").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39222228601922c16e9257dbd/table2ddd10a61f4e344239287e94a8b2f0e215dd/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable2ddd10a61f4e344239287e94a8b2f0e215dd,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2ddd10a61f4e344239287e94a8b2f0e215ddSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2ddd10a61f4e344239287e94a8b2f0e215ddLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2ddd10a61f4e344239287e94a8b2f0e215ddOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2ddd10a61f4e344239287e94a8b2f0e215ddOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2ddd10a61f4e344239287e94a8b2f0e215ddGridComplete.exec();
				    setTimeout(function(){var height = $("#table2ddd10a61f4e344239287e94a8b2f0e215dd").closest('.ui-jqgrid-bdiv').height();
					$("#table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords img").css("width","120px");
                 }else{
					    $("#table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2ddd10a61f4e344239287e94a8b2f0e215ddBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2ddd10a61f4e344239287e94a8b2f0e215ddOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords").hide();
		   	    $("#Pagertable2ddd10a61f4e344239287e94a8b2f0e215dd_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2ddd10a61f4e344239287e94a8b2f0e215dd").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2ddd10a61f4e344239287e94a8b2f0e215dd").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords").html() == null) {
						$("#table2ddd10a61f4e344239287e94a8b2f0e215dd").parent().append("<div class='no_data' id='table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2ddd10a61f4e344239287e94a8b2f0e215ddnorecords").show();
					$("#Pagertable2ddd10a61f4e344239287e94a8b2f0e215dd_left").css("display", "none");
				}
table2ddd10a61f4e344239287e94a8b2f0e215ddLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2ddd10a61f4e344239287e94a8b2f0e215dd"
    });
table2ddd10a61f4e344239287e94a8b2f0e215ddReload();
$("#t_table2ddd10a61f4e344239287e94a8b2f0e215dd").append($("#tableToolbartable2ddd10a61f4e344239287e94a8b2f0e215dd"));$("#tableToolbarButton34a853734454d0499078295041d5e32aca79").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39222228601922c1654fb7d94&grid=table2ddd10a61f4e344239287e94a8b2f0e215dd',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonf503f033fa73c74cc4c8c3d47d22ee1c3a19").bind('click',function() {                                                                                       
	var ids = $('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39222228601922c1654fb7d94&id=' + rowData.ID+'&grid=table2ddd10a61f4e344239287e94a8b2f0e215dd',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton813fe72223273b4b76e82121fc9199b3aae5").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_LDJSTC2&isbpm=N&dbid=948e83e39222228601922c13385d7d62', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39222228601922c16e9257dbd',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table2ddd10a61f4e344239287e94a8b2f0e215dd').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtondb0be839c55be84ee4aa31a7ab451d991afd').bind('click',function() {                           
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
	        var colModels =$('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table2ddd10a61f4e344239287e94a8b2f0e215ddKeyWordIn;                          
	        expSearchParams.param = table2ddd10a61f4e344239287e94a8b2f0e215ddParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_劳动竞赛弹窗2';                             
	        expSearchParams.viewid='948e83e39222228601922c16e9257dbd';                                   
	        expSearchParams.tableid='table2ddd10a61f4e344239287e94a8b2f0e215dd';                                 
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
$("#tableToolbarButtonc8ff5da56a1c94430b1ad06c4a455ab66a3d").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ldjstc2', callBackFunc: function () {                           	
		$('#table2ddd10a61f4e344239287e94a8b2f0e215dd').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
