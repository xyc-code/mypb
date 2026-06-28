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

function redraw948e83e3918c4fb001918d1e1a091cd2(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918d1e1a091cd2").width();
		var win_height = $("#948e83e3918c4fb001918d1e1a091cd2").height();
		$('#948e83e3918c4fb001918d1e1a091cd2').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918d1e1a091cd2').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918d1e1a091cd2").width();
	setTimeout(function(){redraw948e83e3918c4fb001918d1e1a091cd2(win_width);},500);
});
var table314a683934573f49ada8e4a9bba2bb3eaa9eKeyWordIn = "";    
var table314a683934573f49ada8e4a9bba2bb3eaa9eParamIn = "";    
var table314a683934573f49ada8e4a9bba2bb3eaa9eSelectRow = {     
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eLoadComplete = {     
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eBeforeEditCell = {        
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eOndblClickRow = {     
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eOnRightClickRow = {     
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eGridComplete = {     
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eOnCellSelect = {     
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
var table314a683934573f49ada8e4a9bba2bb3eaa9eLoadBeforeSend = {        
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
function table314a683934573f49ada8e4a9bba2bb3eaa9eReload(pid){
	var _isInvalid = true;
	$("#table314a683934573f49ada8e4a9bba2bb3eaa9e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table314a683934573f49ada8e4a9bba2bb3eaa9ePid = pid;
		}
		return false;
	}
	window.table314a683934573f49ada8e4a9bba2bb3eaa9ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table314a683934573f49ada8e4a9bba2bb3eaa9e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table314a683934573f49ada8e4a9bba2bb3eaa9eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table314a683934573f49ada8e4a9bba2bb3eaa9ePid == 'undefined' || window.table314a683934573f49ada8e4a9bba2bb3eaa9ePid!=null){
table314a683934573f49ada8e4a9bba2bb3eaa9eReload(window.table314a683934573f49ada8e4a9bba2bb3eaa9ePid);
}
}
var tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e = [];
var uniqueColtable314a683934573f49ada8e4a9bba2bb3eaa9e = [];
var uniqueColTitletable314a683934573f49ada8e4a9bba2bb3eaa9e = [];
var defaultValuetable314a683934573f49ada8e4a9bba2bb3eaa9e = {};
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '所获奖项',hidden:false, name: 'SHJX',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '岗位职务',hidden:false, name: 'GWZW',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '获奖年度',hidden:false, name: 'HJND',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table314a683934573f49ada8e4a9bba2bb3eaa9e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918d1e1a091cd2/table314a683934573f49ada8e4a9bba2bb3eaa9e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable314a683934573f49ada8e4a9bba2bb3eaa9e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table314a683934573f49ada8e4a9bba2bb3eaa9eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table314a683934573f49ada8e4a9bba2bb3eaa9eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table314a683934573f49ada8e4a9bba2bb3eaa9eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table314a683934573f49ada8e4a9bba2bb3eaa9eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table314a683934573f49ada8e4a9bba2bb3eaa9eGridComplete.exec();
				    setTimeout(function(){var height = $("#table314a683934573f49ada8e4a9bba2bb3eaa9e").closest('.ui-jqgrid-bdiv').height();
					$("#table314a683934573f49ada8e4a9bba2bb3eaa9enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table314a683934573f49ada8e4a9bba2bb3eaa9enorecords img").css("width","120px");
                 }else{
					    $("#table314a683934573f49ada8e4a9bba2bb3eaa9enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table314a683934573f49ada8e4a9bba2bb3eaa9eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table314a683934573f49ada8e4a9bba2bb3eaa9eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table314a683934573f49ada8e4a9bba2bb3eaa9enorecords").hide();
		   	    $("#Pagertable314a683934573f49ada8e4a9bba2bb3eaa9e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table314a683934573f49ada8e4a9bba2bb3eaa9e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table314a683934573f49ada8e4a9bba2bb3eaa9e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table314a683934573f49ada8e4a9bba2bb3eaa9enorecords").html() == null) {
						$("#table314a683934573f49ada8e4a9bba2bb3eaa9e").parent().append("<div class='no_data' id='table314a683934573f49ada8e4a9bba2bb3eaa9enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table314a683934573f49ada8e4a9bba2bb3eaa9enorecords").show();
					$("#Pagertable314a683934573f49ada8e4a9bba2bb3eaa9e_left").css("display", "none");
				}
table314a683934573f49ada8e4a9bba2bb3eaa9eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable314a683934573f49ada8e4a9bba2bb3eaa9e"
    });
table314a683934573f49ada8e4a9bba2bb3eaa9eReload();
$("#t_table314a683934573f49ada8e4a9bba2bb3eaa9e").append($("#tableToolbartable314a683934573f49ada8e4a9bba2bb3eaa9e"));$("#tableToolbarButton1e9cd66f540f5b42ab288d004f6f12fabf78").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d1d34d91cbc&grid=table314a683934573f49ada8e4a9bba2bb3eaa9e',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton6d5d33db881ccf4c3a0bcbc8972792319edd").bind('click',function() {                                                                                       
	var ids = $('#table314a683934573f49ada8e4a9bba2bb3eaa9e').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table314a683934573f49ada8e4a9bba2bb3eaa9e').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d1d34d91cbc&id=' + rowData.ID+'&grid=table314a683934573f49ada8e4a9bba2bb3eaa9e',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton7c185009e58d5746609b7da2feb922d07988").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table314a683934573f49ada8e4a9bba2bb3eaa9e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table314a683934573f49ada8e4a9bba2bb3eaa9e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_QZJJJS3&isbpm=N&dbid=948e83e391591703019178ff15b04894', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918d1e1a091cd2',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table314a683934573f49ada8e4a9bba2bb3eaa9e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtoneb5de60b19a302455d5805b7421596e2cea7').bind('click',function() {                           
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
	        var colModels =$('#table314a683934573f49ada8e4a9bba2bb3eaa9e').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table314a683934573f49ada8e4a9bba2bb3eaa9eKeyWordIn;                          
	        expSearchParams.param = table314a683934573f49ada8e4a9bba2bb3eaa9eParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-群众经济技术3';                             
	        expSearchParams.viewid='948e83e3918c4fb001918d1e1a091cd2';                                   
	        expSearchParams.tableid='table314a683934573f49ada8e4a9bba2bb3eaa9e';                                 
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
