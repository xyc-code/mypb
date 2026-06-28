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

function redraw948e83e391927ff30191d53c1f5b55db(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d53c1f5b55db").width();
		var win_height = $("#948e83e391927ff30191d53c1f5b55db").height();
		$('#948e83e391927ff30191d53c1f5b55db').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d53c1f5b55db').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d53c1f5b55db").width();
	setTimeout(function(){redraw948e83e391927ff30191d53c1f5b55db(win_width);},500);
});
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20KeyWordIn = "";    
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20ParamIn = "";    
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20SelectRow = {     
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20LoadComplete = {     
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20BeforeEditCell = {        
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20OndblClickRow = {     
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20OnRightClickRow = {     
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20GridComplete = {     
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20OnCellSelect = {     
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
var table692ce0d26ab70d4edbb8b2f6e8dcbe920e20LoadBeforeSend = {        
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
function table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Reload(pid){
	var _isInvalid = true;
	$("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Pid = pid;
		}
		return false;
	}
	window.table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table692ce0d26ab70d4edbb8b2f6e8dcbe920e20TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Pid == 'undefined' || window.table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Pid!=null){
table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Reload(window.table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Pid);
}
}
var tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20 = [];
var uniqueColtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20 = [];
var uniqueColTitletable692ce0d26ab70d4edbb8b2f6e8dcbe920e20 = [];
var defaultValuetable692ce0d26ab70d4edbb8b2f6e8dcbe920e20 = {};
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '民族',hidden:false, name: 'MZ',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '文化程度',hidden:false, name: 'WHCD',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '政治面貌',hidden:false, name: 'ZZMM',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '职称',hidden:false, name: 'ZC',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d53c1f5b55db/table692ce0d26ab70d4edbb8b2f6e8dcbe920e20/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable692ce0d26ab70d4edbb8b2f6e8dcbe920e20,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table692ce0d26ab70d4edbb8b2f6e8dcbe920e20SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table692ce0d26ab70d4edbb8b2f6e8dcbe920e20LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table692ce0d26ab70d4edbb8b2f6e8dcbe920e20OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table692ce0d26ab70d4edbb8b2f6e8dcbe920e20OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table692ce0d26ab70d4edbb8b2f6e8dcbe920e20GridComplete.exec();
				    setTimeout(function(){var height = $("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").closest('.ui-jqgrid-bdiv').height();
					$("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords img").css("width","120px");
                 }else{
					    $("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table692ce0d26ab70d4edbb8b2f6e8dcbe920e20BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table692ce0d26ab70d4edbb8b2f6e8dcbe920e20OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords").hide();
		   	    $("#Pagertable692ce0d26ab70d4edbb8b2f6e8dcbe920e20_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords").html() == null) {
						$("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").parent().append("<div class='no_data' id='table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20norecords").show();
					$("#Pagertable692ce0d26ab70d4edbb8b2f6e8dcbe920e20_left").css("display", "none");
				}
table692ce0d26ab70d4edbb8b2f6e8dcbe920e20LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable692ce0d26ab70d4edbb8b2f6e8dcbe920e20"
    });
table692ce0d26ab70d4edbb8b2f6e8dcbe920e20Reload();
$("#t_table692ce0d26ab70d4edbb8b2f6e8dcbe920e20").append($("#tableToolbartable692ce0d26ab70d4edbb8b2f6e8dcbe920e20"));$("#tableToolbarButtonb1ba1e75e1640d494e69410815793fe42432").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d53ae1ab559c&grid=table692ce0d26ab70d4edbb8b2f6e8dcbe920e20',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonf3bae042652ea3433848600008d8000a70c9").bind('click',function() {                                                                                       
	var ids = $('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d53ae1ab559c&id=' + rowData.ID+'&grid=table692ce0d26ab70d4edbb8b2f6e8dcbe920e20',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonc44796310600ca469d481b4d0153e2a72b49").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_GHHYDBDHDB&isbpm=N&dbid=948e83e391927ff30191d489de5d1535', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d53c1f5b55db',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton552bfda77f95b34d87780adcf338558c82fe').bind('click',function() {                           
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
	        var colModels =$('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table692ce0d26ab70d4edbb8b2f6e8dcbe920e20KeyWordIn;                          
	        expSearchParams.param = table692ce0d26ab70d4edbb8b2f6e8dcbe920e20ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_工会会员代表大会代表';                             
	        expSearchParams.viewid='948e83e391927ff30191d53c1f5b55db';                                   
	        expSearchParams.tableid='table692ce0d26ab70d4edbb8b2f6e8dcbe920e20';                                 
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
$("#tableToolbarButton78aa7ed25dce6944280bad2fa5cc311d1556").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zzmg_ghhydbdhdb', callBackFunc: function () {                           	
		$('#table692ce0d26ab70d4edbb8b2f6e8dcbe920e20').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
