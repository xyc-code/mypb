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

function redraw948e83e3918c4fb001918d22907c1d31(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918d22907c1d31").width();
		var win_height = $("#948e83e3918c4fb001918d22907c1d31").height();
		$('#948e83e3918c4fb001918d22907c1d31').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918d22907c1d31').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918d22907c1d31").width();
	setTimeout(function(){redraw948e83e3918c4fb001918d22907c1d31(win_width);},500);
});
var table5fb4ee16760179405aa9c6a45a72208e9cb8KeyWordIn = "";    
var table5fb4ee16760179405aa9c6a45a72208e9cb8ParamIn = "";    
var table5fb4ee16760179405aa9c6a45a72208e9cb8SelectRow = {     
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8LoadComplete = {     
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8BeforeEditCell = {        
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8OndblClickRow = {     
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8OnRightClickRow = {     
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8GridComplete = {     
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8OnCellSelect = {     
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
var table5fb4ee16760179405aa9c6a45a72208e9cb8LoadBeforeSend = {        
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
function table5fb4ee16760179405aa9c6a45a72208e9cb8Reload(pid){
	var _isInvalid = true;
	$("#table5fb4ee16760179405aa9c6a45a72208e9cb8").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5fb4ee16760179405aa9c6a45a72208e9cb8Pid = pid;
		}
		return false;
	}
	window.table5fb4ee16760179405aa9c6a45a72208e9cb8Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5fb4ee16760179405aa9c6a45a72208e9cb8').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5fb4ee16760179405aa9c6a45a72208e9cb8TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5fb4ee16760179405aa9c6a45a72208e9cb8Pid == 'undefined' || window.table5fb4ee16760179405aa9c6a45a72208e9cb8Pid!=null){
table5fb4ee16760179405aa9c6a45a72208e9cb8Reload(window.table5fb4ee16760179405aa9c6a45a72208e9cb8Pid);
}
}
var tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8 = [];
var uniqueColtable5fb4ee16760179405aa9c6a45a72208e9cb8 = [];
var uniqueColTitletable5fb4ee16760179405aa9c6a45a72208e9cb8 = [];
var defaultValuetable5fb4ee16760179405aa9c6a45a72208e9cb8 = {};
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '所获奖项',hidden:false, name: 'SHJX',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '岗位职务',hidden:false, name: 'GWZW',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '获奖年度',hidden:false, name: 'HJND',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table5fb4ee16760179405aa9c6a45a72208e9cb8").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918d22907c1d31/table5fb4ee16760179405aa9c6a45a72208e9cb8/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5fb4ee16760179405aa9c6a45a72208e9cb8,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5fb4ee16760179405aa9c6a45a72208e9cb8SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5fb4ee16760179405aa9c6a45a72208e9cb8LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5fb4ee16760179405aa9c6a45a72208e9cb8OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5fb4ee16760179405aa9c6a45a72208e9cb8OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5fb4ee16760179405aa9c6a45a72208e9cb8GridComplete.exec();
				    setTimeout(function(){var height = $("#table5fb4ee16760179405aa9c6a45a72208e9cb8").closest('.ui-jqgrid-bdiv').height();
					$("#table5fb4ee16760179405aa9c6a45a72208e9cb8norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5fb4ee16760179405aa9c6a45a72208e9cb8norecords img").css("width","120px");
                 }else{
					    $("#table5fb4ee16760179405aa9c6a45a72208e9cb8norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5fb4ee16760179405aa9c6a45a72208e9cb8BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5fb4ee16760179405aa9c6a45a72208e9cb8OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5fb4ee16760179405aa9c6a45a72208e9cb8norecords").hide();
		   	    $("#Pagertable5fb4ee16760179405aa9c6a45a72208e9cb8_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5fb4ee16760179405aa9c6a45a72208e9cb8").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5fb4ee16760179405aa9c6a45a72208e9cb8").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5fb4ee16760179405aa9c6a45a72208e9cb8norecords").html() == null) {
						$("#table5fb4ee16760179405aa9c6a45a72208e9cb8").parent().append("<div class='no_data' id='table5fb4ee16760179405aa9c6a45a72208e9cb8norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5fb4ee16760179405aa9c6a45a72208e9cb8norecords").show();
					$("#Pagertable5fb4ee16760179405aa9c6a45a72208e9cb8_left").css("display", "none");
				}
table5fb4ee16760179405aa9c6a45a72208e9cb8LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5fb4ee16760179405aa9c6a45a72208e9cb8"
    });
table5fb4ee16760179405aa9c6a45a72208e9cb8Reload();
$("#t_table5fb4ee16760179405aa9c6a45a72208e9cb8").append($("#tableToolbartable5fb4ee16760179405aa9c6a45a72208e9cb8"));$("#tableToolbarButtondfdd11c3b477c44596285bff7a9b7c363143").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d2217fa1d1a&grid=table5fb4ee16760179405aa9c6a45a72208e9cb8',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton949d15a9e5d06d4232d99a67b059a0022b95").bind('click',function() {                                                                                       
	var ids = $('#table5fb4ee16760179405aa9c6a45a72208e9cb8').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table5fb4ee16760179405aa9c6a45a72208e9cb8').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d2217fa1d1a&id=' + rowData.ID+'&grid=table5fb4ee16760179405aa9c6a45a72208e9cb8',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtond0bf5f274be055474baa53f6b5c57665c519").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5fb4ee16760179405aa9c6a45a72208e9cb8').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5fb4ee16760179405aa9c6a45a72208e9cb8').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_QZJJJS4&isbpm=N&dbid=948e83e39159170301917901d2304936', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918d22907c1d31',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5fb4ee16760179405aa9c6a45a72208e9cb8').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtone0b8875edab45b4fcc7a69cc0024d9e23b74').bind('click',function() {                           
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
	        var colModels =$('#table5fb4ee16760179405aa9c6a45a72208e9cb8').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table5fb4ee16760179405aa9c6a45a72208e9cb8KeyWordIn;                          
	        expSearchParams.param = table5fb4ee16760179405aa9c6a45a72208e9cb8ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-群众经济技术4';                             
	        expSearchParams.viewid='948e83e3918c4fb001918d22907c1d31';                                   
	        expSearchParams.tableid='table5fb4ee16760179405aa9c6a45a72208e9cb8';                                 
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
