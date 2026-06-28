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

function redraw948e83e391927ff30191a1563fcc1d19(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a1563fcc1d19").width();
		var win_height = $("#948e83e391927ff30191a1563fcc1d19").height();
		$('#948e83e391927ff30191a1563fcc1d19').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a1563fcc1d19').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a1563fcc1d19").width();
	setTimeout(function(){redraw948e83e391927ff30191a1563fcc1d19(win_width);},500);
});
var tablec2cbd18237530641bff97fe8b3a1e2fce6caKeyWordIn = "";    
var tablec2cbd18237530641bff97fe8b3a1e2fce6caParamIn = "";    
var tablec2cbd18237530641bff97fe8b3a1e2fce6caSelectRow = {     
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caLoadComplete = {     
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caBeforeEditCell = {        
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caOndblClickRow = {     
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caOnRightClickRow = {     
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caGridComplete = {     
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caOnCellSelect = {     
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
var tablec2cbd18237530641bff97fe8b3a1e2fce6caLoadBeforeSend = {        
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
function tablec2cbd18237530641bff97fe8b3a1e2fce6caReload(pid){
	var _isInvalid = true;
	$("#tablec2cbd18237530641bff97fe8b3a1e2fce6ca").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablec2cbd18237530641bff97fe8b3a1e2fce6caPid = pid;
		}
		return false;
	}
	window.tablec2cbd18237530641bff97fe8b3a1e2fce6caPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablec2cbd18237530641bff97fe8b3a1e2fce6caTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablec2cbd18237530641bff97fe8b3a1e2fce6caPid == 'undefined' || window.tablec2cbd18237530641bff97fe8b3a1e2fce6caPid!=null){
tablec2cbd18237530641bff97fe8b3a1e2fce6caReload(window.tablec2cbd18237530641bff97fe8b3a1e2fce6caPid);
}
}
var tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca = [];
var uniqueColtablec2cbd18237530641bff97fe8b3a1e2fce6ca = [];
var uniqueColTitletablec2cbd18237530641bff97fe8b3a1e2fce6ca = [];
var defaultValuetablec2cbd18237530641bff97fe8b3a1e2fce6ca = {};
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '工作内容',hidden:false, name: 'GZNR',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '时间节点',hidden:false, name: 'SJJD',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '工作状态',hidden:false, name: 'GZZT',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '未完成原因',hidden:false, name: 'WWCYY',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablec2cbd18237530641bff97fe8b3a1e2fce6ca").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a1563fcc1d19/tablec2cbd18237530641bff97fe8b3a1e2fce6ca/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablec2cbd18237530641bff97fe8b3a1e2fce6ca,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablec2cbd18237530641bff97fe8b3a1e2fce6caSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablec2cbd18237530641bff97fe8b3a1e2fce6caLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablec2cbd18237530641bff97fe8b3a1e2fce6caOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablec2cbd18237530641bff97fe8b3a1e2fce6caOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablec2cbd18237530641bff97fe8b3a1e2fce6caGridComplete.exec();
				    setTimeout(function(){var height = $("#tablec2cbd18237530641bff97fe8b3a1e2fce6ca").closest('.ui-jqgrid-bdiv').height();
					$("#tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords img").css("width","120px");
                 }else{
					    $("#tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablec2cbd18237530641bff97fe8b3a1e2fce6caBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablec2cbd18237530641bff97fe8b3a1e2fce6caOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords").hide();
		   	    $("#Pagertablec2cbd18237530641bff97fe8b3a1e2fce6ca_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablec2cbd18237530641bff97fe8b3a1e2fce6ca").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablec2cbd18237530641bff97fe8b3a1e2fce6ca").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords").html() == null) {
						$("#tablec2cbd18237530641bff97fe8b3a1e2fce6ca").parent().append("<div class='no_data' id='tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablec2cbd18237530641bff97fe8b3a1e2fce6canorecords").show();
					$("#Pagertablec2cbd18237530641bff97fe8b3a1e2fce6ca_left").css("display", "none");
				}
tablec2cbd18237530641bff97fe8b3a1e2fce6caLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablec2cbd18237530641bff97fe8b3a1e2fce6ca"
    });
tablec2cbd18237530641bff97fe8b3a1e2fce6caReload();
$("#t_tablec2cbd18237530641bff97fe8b3a1e2fce6ca").append($("#tableToolbartablec2cbd18237530641bff97fe8b3a1e2fce6ca"));$("#tableToolbarButtonc7523a123ed63548065b05d0ffbecf338383").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a155cdc51d00&grid=tablec2cbd18237530641bff97fe8b3a1e2fce6ca',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton59b29ab529544d4f89480c6ae71d96777bc2").bind('click',function() {                                                                                       
	var ids = $('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a155cdc51d00&id=' + rowData.ID+'&grid=tablec2cbd18237530641bff97fe8b3a1e2fce6ca',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonfcf43484cb4e6943d39be7fe65f283f50afb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WTHDZZB2&isbpm=N&dbid=948e83e391927ff301919777c85e4a7f', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a1563fcc1d19',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton81e7ab0fa88c0b443748298566fcdca0fc05').bind('click',function() {                           
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
	        var colModels =$('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablec2cbd18237530641bff97fe8b3a1e2fce6caKeyWordIn;                          
	        expSearchParams.param = tablec2cbd18237530641bff97fe8b3a1e2fce6caParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_职工宣教文体文体活动组织表2';                             
	        expSearchParams.viewid='948e83e391927ff30191a1563fcc1d19';                                   
	        expSearchParams.tableid='tablec2cbd18237530641bff97fe8b3a1e2fce6ca';                                 
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
$("#tableToolbarButton6542550c24042549e7d82e8d6efc92c0622c").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wthdzzb2', callBackFunc: function () {                           	
		$('#tablec2cbd18237530641bff97fe8b3a1e2fce6ca').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
