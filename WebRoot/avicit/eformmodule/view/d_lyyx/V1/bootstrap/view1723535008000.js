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

function redraw948e83e39115f6b001914ab03c0d5242(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39115f6b001914ab03c0d5242").width();
		var win_height = $("#948e83e39115f6b001914ab03c0d5242").height();
		$('#948e83e39115f6b001914ab03c0d5242').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39115f6b001914ab03c0d5242').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39115f6b001914ab03c0d5242").width();
	setTimeout(function(){redraw948e83e39115f6b001914ab03c0d5242(win_width);},500);
});
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123KeyWordIn = "";    
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123ParamIn = "";    
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123SelectRow = {     
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123LoadComplete = {     
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123BeforeEditCell = {        
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123OndblClickRow = {     
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123OnRightClickRow = {     
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123GridComplete = {     
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123OnCellSelect = {     
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
var tableb1b22cff44ab4b4175485b7cfd07bb7c3123LoadBeforeSend = {        
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
function tableb1b22cff44ab4b4175485b7cfd07bb7c3123Reload(pid){
	var _isInvalid = true;
	$("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb1b22cff44ab4b4175485b7cfd07bb7c3123Pid = pid;
		}
		return false;
	}
	window.tableb1b22cff44ab4b4175485b7cfd07bb7c3123Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableb1b22cff44ab4b4175485b7cfd07bb7c3123TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb1b22cff44ab4b4175485b7cfd07bb7c3123Pid == 'undefined' || window.tableb1b22cff44ab4b4175485b7cfd07bb7c3123Pid!=null){
tableb1b22cff44ab4b4175485b7cfd07bb7c3123Reload(window.tableb1b22cff44ab4b4175485b7cfd07bb7c3123Pid);
}
}
var tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123 = [];
var uniqueColtableb1b22cff44ab4b4175485b7cfd07bb7c3123 = [];
var uniqueColTitletableb1b22cff44ab4b4175485b7cfd07bb7c3123 = [];
var defaultValuetableb1b22cff44ab4b4175485b7cfd07bb7c3123 = {};
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '类别',hidden:false, name: 'D_LB',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '名称',hidden:false, name: 'D_MC',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '荣誉时间',hidden:false, name: 'D_RYSJ',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39115f6b001914ab03c0d5242/tableb1b22cff44ab4b4175485b7cfd07bb7c3123/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb1b22cff44ab4b4175485b7cfd07bb7c3123,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb1b22cff44ab4b4175485b7cfd07bb7c3123SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb1b22cff44ab4b4175485b7cfd07bb7c3123LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb1b22cff44ab4b4175485b7cfd07bb7c3123OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb1b22cff44ab4b4175485b7cfd07bb7c3123OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb1b22cff44ab4b4175485b7cfd07bb7c3123GridComplete.exec();
				    setTimeout(function(){var height = $("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123").closest('.ui-jqgrid-bdiv').height();
					$("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords img").css("width","120px");
                 }else{
					    $("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb1b22cff44ab4b4175485b7cfd07bb7c3123BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb1b22cff44ab4b4175485b7cfd07bb7c3123OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords").hide();
		   	    $("#Pagertableb1b22cff44ab4b4175485b7cfd07bb7c3123_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords").html() == null) {
						$("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123").parent().append("<div class='no_data' id='tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb1b22cff44ab4b4175485b7cfd07bb7c3123norecords").show();
					$("#Pagertableb1b22cff44ab4b4175485b7cfd07bb7c3123_left").css("display", "none");
				}
tableb1b22cff44ab4b4175485b7cfd07bb7c3123LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb1b22cff44ab4b4175485b7cfd07bb7c3123"
    });
tableb1b22cff44ab4b4175485b7cfd07bb7c3123Reload();
$("#t_tableb1b22cff44ab4b4175485b7cfd07bb7c3123").append($("#tableToolbartableb1b22cff44ab4b4175485b7cfd07bb7c3123"));$("#tableToolbarButtonbaaa29b60792d547b7f8f6f7aac69df40c41").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914aafc94a5235&grid=tableb1b22cff44ab4b4175485b7cfd07bb7c3123',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtoncaea5235e514cd47b0daadf113f4eaebaa1e").bind('click',function() {                                                                                       
	var ids = $('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914aafc94a5235&id=' + rowData.ID+'&grid=tableb1b22cff44ab4b4175485b7cfd07bb7c3123',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonf5bf832beae9bd456b487dda618bdc28fc0f").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_LYYX&isbpm=N&dbid=948e83e39106cf160191075cfd6e29d6', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39115f6b001914ab03c0d5242',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton64bb9c7903b0724a402877c8755e05ad1b79").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_lyyx', callBackFunc: function () {                           	
		$('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton62b1501275f12d4d70a8bd57ddbb11ef3435').bind('click',function() {                           
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
	        var colModels =$('#tableb1b22cff44ab4b4175485b7cfd07bb7c3123').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableb1b22cff44ab4b4175485b7cfd07bb7c3123KeyWordIn;                          
	        expSearchParams.param = tableb1b22cff44ab4b4175485b7cfd07bb7c3123ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_两优一先';                             
	        expSearchParams.viewid='948e83e39115f6b001914ab03c0d5242';                                   
	        expSearchParams.tableid='tableb1b22cff44ab4b4175485b7cfd07bb7c3123';                                 
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
