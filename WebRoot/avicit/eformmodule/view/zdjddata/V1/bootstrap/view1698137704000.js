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

function redraw948e83e38b462f3d018b60e482e606d9(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38b462f3d018b60e482e606d9").width();
		var win_height = $("#948e83e38b462f3d018b60e482e606d9").height();
		$('#948e83e38b462f3d018b60e482e606d9').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38b462f3d018b60e482e606d9').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38b462f3d018b60e482e606d9").width();
	setTimeout(function(){redraw948e83e38b462f3d018b60e482e606d9(win_width);},500);
});
var tablec84ab03b9d36c54945d8ed24cedf250ae76fKeyWordIn = "";    
var tablec84ab03b9d36c54945d8ed24cedf250ae76fParamIn = "";    
var tablec84ab03b9d36c54945d8ed24cedf250ae76fSelectRow = {     
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fLoadComplete = {     
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fBeforeEditCell = {        
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fOndblClickRow = {     
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fOnRightClickRow = {     
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fGridComplete = {     
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fOnCellSelect = {     
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
var tablec84ab03b9d36c54945d8ed24cedf250ae76fLoadBeforeSend = {        
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
function tablec84ab03b9d36c54945d8ed24cedf250ae76fReload(pid){
	var _isInvalid = true;
	$("#tablec84ab03b9d36c54945d8ed24cedf250ae76f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablec84ab03b9d36c54945d8ed24cedf250ae76fPid = pid;
		}
		return false;
	}
	window.tablec84ab03b9d36c54945d8ed24cedf250ae76fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablec84ab03b9d36c54945d8ed24cedf250ae76f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablec84ab03b9d36c54945d8ed24cedf250ae76fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablec84ab03b9d36c54945d8ed24cedf250ae76fPid == 'undefined' || window.tablec84ab03b9d36c54945d8ed24cedf250ae76fPid!=null){
tablec84ab03b9d36c54945d8ed24cedf250ae76fReload(window.tablec84ab03b9d36c54945d8ed24cedf250ae76fPid);
}
}
var tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f = [];
var uniqueColtablec84ab03b9d36c54945d8ed24cedf250ae76f = [];
var uniqueColTitletablec84ab03b9d36c54945d8ed24cedf250ae76f = [];
var defaultValuetablec84ab03b9d36c54945d8ed24cedf250ae76f = {};
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '重点监督项目名称',hidden:false, name: 'XM_NAME',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '计划完成时间', formatter:format, hidden:false, name: 'XM_DATE',align:'center',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '完成情况',hidden:false, name: 'XM_STATUS',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablec84ab03b9d36c54945d8ed24cedf250ae76f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38b462f3d018b60e482e606d9/tablec84ab03b9d36c54945d8ed24cedf250ae76f/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablec84ab03b9d36c54945d8ed24cedf250ae76f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablec84ab03b9d36c54945d8ed24cedf250ae76fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablec84ab03b9d36c54945d8ed24cedf250ae76fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablec84ab03b9d36c54945d8ed24cedf250ae76fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablec84ab03b9d36c54945d8ed24cedf250ae76fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablec84ab03b9d36c54945d8ed24cedf250ae76fGridComplete.exec();
				    setTimeout(function(){var height = $("#tablec84ab03b9d36c54945d8ed24cedf250ae76f").closest('.ui-jqgrid-bdiv').height();
					$("#tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords img").css("width","120px");
                 }else{
					    $("#tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablec84ab03b9d36c54945d8ed24cedf250ae76fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablec84ab03b9d36c54945d8ed24cedf250ae76fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords").hide();
		   	    $("#Pagertablec84ab03b9d36c54945d8ed24cedf250ae76f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablec84ab03b9d36c54945d8ed24cedf250ae76f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablec84ab03b9d36c54945d8ed24cedf250ae76f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords").html() == null) {
						$("#tablec84ab03b9d36c54945d8ed24cedf250ae76f").parent().append("<div class='no_data' id='tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablec84ab03b9d36c54945d8ed24cedf250ae76fnorecords").show();
					$("#Pagertablec84ab03b9d36c54945d8ed24cedf250ae76f_left").css("display", "none");
				}
tablec84ab03b9d36c54945d8ed24cedf250ae76fLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablec84ab03b9d36c54945d8ed24cedf250ae76f"
    });
tablec84ab03b9d36c54945d8ed24cedf250ae76fReload();
$("#t_tablec84ab03b9d36c54945d8ed24cedf250ae76f").append($("#tableToolbartablec84ab03b9d36c54945d8ed24cedf250ae76f"));$("#tableToolbarButton319a4d16642c6e48c5fb4e395250f69f2d3a").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b462f3d018b60e4213b06b8&grid=tablec84ab03b9d36c54945d8ed24cedf250ae76f',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton82f17951da1f4e416f9a445e45d74b46eea9").bind('click',function() {                                                                                       
	var ids = $('#tablec84ab03b9d36c54945d8ed24cedf250ae76f').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablec84ab03b9d36c54945d8ed24cedf250ae76f').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b462f3d018b60e4213b06b8&id=' + rowData.ID+'&grid=tablec84ab03b9d36c54945d8ed24cedf250ae76f',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonbb746d1ce8578c4148f8a0123a6c1de888dd").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablec84ab03b9d36c54945d8ed24cedf250ae76f').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablec84ab03b9d36c54945d8ed24cedf250ae76f').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZDJD_DATA&isbpm=N&dbid=948e83e38b462f3d018b60e2b57b0695', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38b462f3d018b60e482e606d9',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablec84ab03b9d36c54945d8ed24cedf250ae76f').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
;});	 
