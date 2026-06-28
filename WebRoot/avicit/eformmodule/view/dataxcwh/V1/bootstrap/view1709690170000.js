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

function redraw948e83e38b462f3d018b6485d37022a6(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38b462f3d018b6485d37022a6").width();
		var win_height = $("#948e83e38b462f3d018b6485d37022a6").height();
		$('#948e83e38b462f3d018b6485d37022a6').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38b462f3d018b6485d37022a6').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38b462f3d018b6485d37022a6").width();
	setTimeout(function(){redraw948e83e38b462f3d018b6485d37022a6(win_width);},500);
});
var tablea872e548343c484e81da63b3bc8b3657f69eKeyWordIn = "";    
var tablea872e548343c484e81da63b3bc8b3657f69eParamIn = "";    
var tablea872e548343c484e81da63b3bc8b3657f69eSelectRow = {     
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
var tablea872e548343c484e81da63b3bc8b3657f69eLoadComplete = {     
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
var tablea872e548343c484e81da63b3bc8b3657f69eBeforeEditCell = {        
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
var tablea872e548343c484e81da63b3bc8b3657f69eOndblClickRow = {     
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
var tablea872e548343c484e81da63b3bc8b3657f69eOnRightClickRow = {     
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
var tablea872e548343c484e81da63b3bc8b3657f69eGridComplete = {     
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
var tablea872e548343c484e81da63b3bc8b3657f69eOnCellSelect = {     
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
var tablea872e548343c484e81da63b3bc8b3657f69eLoadBeforeSend = {        
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
function tablea872e548343c484e81da63b3bc8b3657f69eReload(pid){
	var _isInvalid = true;
	$("#tablea872e548343c484e81da63b3bc8b3657f69e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablea872e548343c484e81da63b3bc8b3657f69ePid = pid;
		}
		return false;
	}
	window.tablea872e548343c484e81da63b3bc8b3657f69ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablea872e548343c484e81da63b3bc8b3657f69e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablea872e548343c484e81da63b3bc8b3657f69eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablea872e548343c484e81da63b3bc8b3657f69ePid == 'undefined' || window.tablea872e548343c484e81da63b3bc8b3657f69ePid!=null){
tablea872e548343c484e81da63b3bc8b3657f69eReload(window.tablea872e548343c484e81da63b3bc8b3657f69ePid);
}
}
var tablecmtablea872e548343c484e81da63b3bc8b3657f69e = [];
var uniqueColtablea872e548343c484e81da63b3bc8b3657f69e = [];
var uniqueColTitletablea872e548343c484e81da63b3bc8b3657f69e = [];
var defaultValuetablea872e548343c484e81da63b3bc8b3657f69e = {};
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '承接单位',hidden:false, name: 'TASK_DEPT',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '承接措施数',hidden:false, name: 'TASK_CONT',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '承接措施数已完成',hidden:false, name: 'TASK_SUCCESS',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '承接措施数进行中',hidden:false, name: 'TASK',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '承接措施数超期完成',hidden:false, name: 'TASK_ERROR',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablea872e548343c484e81da63b3bc8b3657f69e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablea872e548343c484e81da63b3bc8b3657f69e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38b462f3d018b6485d37022a6/tablea872e548343c484e81da63b3bc8b3657f69e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablea872e548343c484e81da63b3bc8b3657f69e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablea872e548343c484e81da63b3bc8b3657f69eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablea872e548343c484e81da63b3bc8b3657f69eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablea872e548343c484e81da63b3bc8b3657f69eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablea872e548343c484e81da63b3bc8b3657f69eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablea872e548343c484e81da63b3bc8b3657f69eGridComplete.exec();
				    setTimeout(function(){var height = $("#tablea872e548343c484e81da63b3bc8b3657f69e").closest('.ui-jqgrid-bdiv').height();
					$("#tablea872e548343c484e81da63b3bc8b3657f69enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablea872e548343c484e81da63b3bc8b3657f69enorecords img").css("width","120px");
                 }else{
					    $("#tablea872e548343c484e81da63b3bc8b3657f69enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablea872e548343c484e81da63b3bc8b3657f69eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablea872e548343c484e81da63b3bc8b3657f69eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablea872e548343c484e81da63b3bc8b3657f69enorecords").hide();
		   	    $("#Pagertablea872e548343c484e81da63b3bc8b3657f69e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablea872e548343c484e81da63b3bc8b3657f69e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablea872e548343c484e81da63b3bc8b3657f69e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablea872e548343c484e81da63b3bc8b3657f69enorecords").html() == null) {
						$("#tablea872e548343c484e81da63b3bc8b3657f69e").parent().append("<div class='no_data' id='tablea872e548343c484e81da63b3bc8b3657f69enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablea872e548343c484e81da63b3bc8b3657f69enorecords").show();
					$("#Pagertablea872e548343c484e81da63b3bc8b3657f69e_left").css("display", "none");
				}
tablea872e548343c484e81da63b3bc8b3657f69eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablea872e548343c484e81da63b3bc8b3657f69e"
    });
tablea872e548343c484e81da63b3bc8b3657f69eReload();
$("#t_tablea872e548343c484e81da63b3bc8b3657f69e").append($("#tableToolbartablea872e548343c484e81da63b3bc8b3657f69e"));$("#tableToolbarButton0c4d61de32a78f414e09ce436f2e58af1f2d").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b462f3d018b64855d402295&grid=tablea872e548343c484e81da63b3bc8b3657f69e',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtona5152b9c35ff9347eb18229a21a934360cac").bind('click',function() {                                                                                       
	var ids = $('#tablea872e548343c484e81da63b3bc8b3657f69e').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablea872e548343c484e81da63b3bc8b3657f69e').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b462f3d018b64855d402295&id=' + rowData.ID+'&grid=tablea872e548343c484e81da63b3bc8b3657f69e',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtona4ebc8e3bc2cf1410fb8de32a174ce4fb6be").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablea872e548343c484e81da63b3bc8b3657f69e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablea872e548343c484e81da63b3bc8b3657f69e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TASK_DATA&isbpm=N&dbid=948e83e38b462f3d018b648322712216', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38b462f3d018b6485d37022a6',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablea872e548343c484e81da63b3bc8b3657f69e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
