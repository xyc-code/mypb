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

function redraw948e83e391927ff30191d54178525722(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d54178525722").width();
		var win_height = $("#948e83e391927ff30191d54178525722").height();
		$('#948e83e391927ff30191d54178525722').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d54178525722').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d54178525722").width();
	setTimeout(function(){redraw948e83e391927ff30191d54178525722(win_width);},500);
});
var tablee116b610e5884e4baed8f9f8535396c04aafKeyWordIn = "";    
var tablee116b610e5884e4baed8f9f8535396c04aafParamIn = "";    
var tablee116b610e5884e4baed8f9f8535396c04aafSelectRow = {     
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
var tablee116b610e5884e4baed8f9f8535396c04aafLoadComplete = {     
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
var tablee116b610e5884e4baed8f9f8535396c04aafBeforeEditCell = {        
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
var tablee116b610e5884e4baed8f9f8535396c04aafOndblClickRow = {     
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
var tablee116b610e5884e4baed8f9f8535396c04aafOnRightClickRow = {     
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
var tablee116b610e5884e4baed8f9f8535396c04aafGridComplete = {     
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
var tablee116b610e5884e4baed8f9f8535396c04aafOnCellSelect = {     
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
var tablee116b610e5884e4baed8f9f8535396c04aafLoadBeforeSend = {        
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
function tablee116b610e5884e4baed8f9f8535396c04aafReload(pid){
	var _isInvalid = true;
	$("#tablee116b610e5884e4baed8f9f8535396c04aaf").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee116b610e5884e4baed8f9f8535396c04aafPid = pid;
		}
		return false;
	}
	window.tablee116b610e5884e4baed8f9f8535396c04aafPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee116b610e5884e4baed8f9f8535396c04aaf').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee116b610e5884e4baed8f9f8535396c04aafTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee116b610e5884e4baed8f9f8535396c04aafPid == 'undefined' || window.tablee116b610e5884e4baed8f9f8535396c04aafPid!=null){
tablee116b610e5884e4baed8f9f8535396c04aafReload(window.tablee116b610e5884e4baed8f9f8535396c04aafPid);
}
}
var tablecmtablee116b610e5884e4baed8f9f8535396c04aaf = [];
var uniqueColtablee116b610e5884e4baed8f9f8535396c04aaf = [];
var uniqueColTitletablee116b610e5884e4baed8f9f8535396c04aaf = [];
var defaultValuetablee116b610e5884e4baed8f9f8535396c04aaf = {};
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '职代届次',hidden:false, name: 'ZDJC',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '召开时间',hidden:false, name: 'ZKSJ',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '会议地点',hidden:false, name: 'HYDD',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '应参会人数',hidden:false, name: 'YCHRS',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '实际参会人数',hidden:false, name: 'SJCHRS',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee116b610e5884e4baed8f9f8535396c04aaf.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablee116b610e5884e4baed8f9f8535396c04aaf").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d54178525722/tablee116b610e5884e4baed8f9f8535396c04aaf/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee116b610e5884e4baed8f9f8535396c04aaf,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee116b610e5884e4baed8f9f8535396c04aafSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee116b610e5884e4baed8f9f8535396c04aafLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee116b610e5884e4baed8f9f8535396c04aafOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee116b610e5884e4baed8f9f8535396c04aafOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee116b610e5884e4baed8f9f8535396c04aafGridComplete.exec();
				    setTimeout(function(){var height = $("#tablee116b610e5884e4baed8f9f8535396c04aaf").closest('.ui-jqgrid-bdiv').height();
					$("#tablee116b610e5884e4baed8f9f8535396c04aafnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee116b610e5884e4baed8f9f8535396c04aafnorecords img").css("width","120px");
                 }else{
					    $("#tablee116b610e5884e4baed8f9f8535396c04aafnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee116b610e5884e4baed8f9f8535396c04aafBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee116b610e5884e4baed8f9f8535396c04aafOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee116b610e5884e4baed8f9f8535396c04aafnorecords").hide();
		   	    $("#Pagertablee116b610e5884e4baed8f9f8535396c04aaf_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee116b610e5884e4baed8f9f8535396c04aaf").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee116b610e5884e4baed8f9f8535396c04aaf").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee116b610e5884e4baed8f9f8535396c04aafnorecords").html() == null) {
						$("#tablee116b610e5884e4baed8f9f8535396c04aaf").parent().append("<div class='no_data' id='tablee116b610e5884e4baed8f9f8535396c04aafnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee116b610e5884e4baed8f9f8535396c04aafnorecords").show();
					$("#Pagertablee116b610e5884e4baed8f9f8535396c04aaf_left").css("display", "none");
				}
tablee116b610e5884e4baed8f9f8535396c04aafLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee116b610e5884e4baed8f9f8535396c04aaf"
    });
tablee116b610e5884e4baed8f9f8535396c04aafReload();
$("#t_tablee116b610e5884e4baed8f9f8535396c04aaf").append($("#tableToolbartablee116b610e5884e4baed8f9f8535396c04aaf"));$("#tableToolbarButton757b069365981b4829cacf0ea5fc7db0159e").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d54116aa570a&grid=tablee116b610e5884e4baed8f9f8535396c04aaf',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton5e5ba73d0653d14a49281a5340ec9589bc34").bind('click',function() {                                                                                       
	var ids = $('#tablee116b610e5884e4baed8f9f8535396c04aaf').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee116b610e5884e4baed8f9f8535396c04aaf').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d54116aa570a&id=' + rowData.ID+'&grid=tablee116b610e5884e4baed8f9f8535396c04aaf',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton525af81b7dcfa842c3683c676fe25c955e03").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee116b610e5884e4baed8f9f8535396c04aaf').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee116b610e5884e4baed8f9f8535396c04aaf').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_ZGDBDH&isbpm=N&dbid=948e83e391927ff30191d485611114cc', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d54178525722',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee116b610e5884e4baed8f9f8535396c04aaf').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton07bd83107214594c42ca88b01a9151e78b12').bind('click',function() {                           
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
	        var colModels =$('#tablee116b610e5884e4baed8f9f8535396c04aaf').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablee116b610e5884e4baed8f9f8535396c04aafKeyWordIn;                          
	        expSearchParams.param = tablee116b610e5884e4baed8f9f8535396c04aafParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_职工代表大会1';                             
	        expSearchParams.viewid='948e83e391927ff30191d54178525722';                                   
	        expSearchParams.tableid='tablee116b610e5884e4baed8f9f8535396c04aaf';                                 
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
