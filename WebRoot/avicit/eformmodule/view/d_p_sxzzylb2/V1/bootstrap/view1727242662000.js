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

function redraw948e83e391927ff30191a1513cda1c86(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a1513cda1c86").width();
		var win_height = $("#948e83e391927ff30191a1513cda1c86").height();
		$('#948e83e391927ff30191a1513cda1c86').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a1513cda1c86').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a1513cda1c86").width();
	setTimeout(function(){redraw948e83e391927ff30191a1513cda1c86(win_width);},500);
});
var table97d985030ecaeb485b3abd5b7f6f0296c299KeyWordIn = "";    
var table97d985030ecaeb485b3abd5b7f6f0296c299ParamIn = "";    
var table97d985030ecaeb485b3abd5b7f6f0296c299SelectRow = {     
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
var table97d985030ecaeb485b3abd5b7f6f0296c299LoadComplete = {     
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
var table97d985030ecaeb485b3abd5b7f6f0296c299BeforeEditCell = {        
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
var table97d985030ecaeb485b3abd5b7f6f0296c299OndblClickRow = {     
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
var table97d985030ecaeb485b3abd5b7f6f0296c299OnRightClickRow = {     
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
var table97d985030ecaeb485b3abd5b7f6f0296c299GridComplete = {     
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
var table97d985030ecaeb485b3abd5b7f6f0296c299OnCellSelect = {     
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
var table97d985030ecaeb485b3abd5b7f6f0296c299LoadBeforeSend = {        
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
function table97d985030ecaeb485b3abd5b7f6f0296c299Reload(pid){
	var _isInvalid = true;
	$("#table97d985030ecaeb485b3abd5b7f6f0296c299").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table97d985030ecaeb485b3abd5b7f6f0296c299Pid = pid;
		}
		return false;
	}
	window.table97d985030ecaeb485b3abd5b7f6f0296c299Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table97d985030ecaeb485b3abd5b7f6f0296c299TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table97d985030ecaeb485b3abd5b7f6f0296c299Pid == 'undefined' || window.table97d985030ecaeb485b3abd5b7f6f0296c299Pid!=null){
table97d985030ecaeb485b3abd5b7f6f0296c299Reload(window.table97d985030ecaeb485b3abd5b7f6f0296c299Pid);
}
}
var tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299 = [];
var uniqueColtable97d985030ecaeb485b3abd5b7f6f0296c299 = [];
var uniqueColTitletable97d985030ecaeb485b3abd5b7f6f0296c299 = [];
var defaultValuetable97d985030ecaeb485b3abd5b7f6f0296c299 = {};
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '内容',hidden:false, name: 'NR',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '责任单位',hidden:false, name: 'ZRDW',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '责任人',hidden:false, name: 'ZER',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '时间节点',hidden:false, name: 'SJJD',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '开展情况',hidden:false, name: 'KZQK',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table97d985030ecaeb485b3abd5b7f6f0296c299").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a1513cda1c86/table97d985030ecaeb485b3abd5b7f6f0296c299/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable97d985030ecaeb485b3abd5b7f6f0296c299,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table97d985030ecaeb485b3abd5b7f6f0296c299SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table97d985030ecaeb485b3abd5b7f6f0296c299LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table97d985030ecaeb485b3abd5b7f6f0296c299OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table97d985030ecaeb485b3abd5b7f6f0296c299OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table97d985030ecaeb485b3abd5b7f6f0296c299GridComplete.exec();
				    setTimeout(function(){var height = $("#table97d985030ecaeb485b3abd5b7f6f0296c299").closest('.ui-jqgrid-bdiv').height();
					$("#table97d985030ecaeb485b3abd5b7f6f0296c299norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table97d985030ecaeb485b3abd5b7f6f0296c299norecords img").css("width","120px");
                 }else{
					    $("#table97d985030ecaeb485b3abd5b7f6f0296c299norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table97d985030ecaeb485b3abd5b7f6f0296c299BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table97d985030ecaeb485b3abd5b7f6f0296c299OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table97d985030ecaeb485b3abd5b7f6f0296c299norecords").hide();
		   	    $("#Pagertable97d985030ecaeb485b3abd5b7f6f0296c299_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table97d985030ecaeb485b3abd5b7f6f0296c299").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table97d985030ecaeb485b3abd5b7f6f0296c299").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table97d985030ecaeb485b3abd5b7f6f0296c299norecords").html() == null) {
						$("#table97d985030ecaeb485b3abd5b7f6f0296c299").parent().append("<div class='no_data' id='table97d985030ecaeb485b3abd5b7f6f0296c299norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table97d985030ecaeb485b3abd5b7f6f0296c299norecords").show();
					$("#Pagertable97d985030ecaeb485b3abd5b7f6f0296c299_left").css("display", "none");
				}
table97d985030ecaeb485b3abd5b7f6f0296c299LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable97d985030ecaeb485b3abd5b7f6f0296c299"
    });
table97d985030ecaeb485b3abd5b7f6f0296c299Reload();
$("#t_table97d985030ecaeb485b3abd5b7f6f0296c299").append($("#tableToolbartable97d985030ecaeb485b3abd5b7f6f0296c299"));$("#tableToolbarButtond6e51c7d2ff31145e268a508789584c3beb2").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a150e0cc1c6d&grid=table97d985030ecaeb485b3abd5b7f6f0296c299',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonb7d670aa2c62454dd6885136111c0f0e8cf9").bind('click',function() {                                                                                       
	var ids = $('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a150e0cc1c6d&id=' + rowData.ID+'&grid=table97d985030ecaeb485b3abd5b7f6f0296c299',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonf204fb18c3c35848bcd8be9f4c0c4dc80795").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_SXZZYLB2&isbpm=N&dbid=948e83e391927ff301919774d3ef47c8', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a1513cda1c86',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table97d985030ecaeb485b3abd5b7f6f0296c299').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton9dea14fdc9b027466e68b197e3c2b80763d0').bind('click',function() {                           
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
	        var colModels =$('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table97d985030ecaeb485b3abd5b7f6f0296c299KeyWordIn;                          
	        expSearchParams.param = table97d985030ecaeb485b3abd5b7f6f0296c299ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_思想政治引领表2';                             
	        expSearchParams.viewid='948e83e391927ff30191a1513cda1c86';                                   
	        expSearchParams.tableid='table97d985030ecaeb485b3abd5b7f6f0296c299';                                 
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
$("#tableToolbarButton901e48015ece4944c04b893b1cd444c99bf8").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'yl2', callBackFunc: function () {                           	
		$('#table97d985030ecaeb485b3abd5b7f6f0296c299').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
