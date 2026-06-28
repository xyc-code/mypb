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

function redraw948e83e38b462f3d018b609d849303a0(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38b462f3d018b609d849303a0").width();
		var win_height = $("#948e83e38b462f3d018b609d849303a0").height();
		$('#948e83e38b462f3d018b609d849303a0').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38b462f3d018b609d849303a0').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38b462f3d018b609d849303a0").width();
	setTimeout(function(){redraw948e83e38b462f3d018b609d849303a0(win_width);},500);
});
var tableae02e242f856ca429928b0eb570aaf0c4872KeyWordIn = "";    
var tableae02e242f856ca429928b0eb570aaf0c4872ParamIn = "";    
var tableae02e242f856ca429928b0eb570aaf0c4872SelectRow = {     
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
var tableae02e242f856ca429928b0eb570aaf0c4872LoadComplete = {     
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
var tableae02e242f856ca429928b0eb570aaf0c4872BeforeEditCell = {        
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
var tableae02e242f856ca429928b0eb570aaf0c4872OndblClickRow = {     
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
var tableae02e242f856ca429928b0eb570aaf0c4872OnRightClickRow = {     
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
var tableae02e242f856ca429928b0eb570aaf0c4872GridComplete = {     
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
var tableae02e242f856ca429928b0eb570aaf0c4872OnCellSelect = {     
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
var tableae02e242f856ca429928b0eb570aaf0c4872LoadBeforeSend = {        
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
function tableae02e242f856ca429928b0eb570aaf0c4872Reload(pid){
	var _isInvalid = true;
	$("#tableae02e242f856ca429928b0eb570aaf0c4872").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableae02e242f856ca429928b0eb570aaf0c4872Pid = pid;
		}
		return false;
	}
	window.tableae02e242f856ca429928b0eb570aaf0c4872Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableae02e242f856ca429928b0eb570aaf0c4872').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableae02e242f856ca429928b0eb570aaf0c4872TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableae02e242f856ca429928b0eb570aaf0c4872Pid == 'undefined' || window.tableae02e242f856ca429928b0eb570aaf0c4872Pid!=null){
tableae02e242f856ca429928b0eb570aaf0c4872Reload(window.tableae02e242f856ca429928b0eb570aaf0c4872Pid);
}
}
var tablecmtableae02e242f856ca429928b0eb570aaf0c4872 = [];
var uniqueColtableae02e242f856ca429928b0eb570aaf0c4872 = [];
var uniqueColTitletableae02e242f856ca429928b0eb570aaf0c4872 = [];
var defaultValuetableae02e242f856ca429928b0eb570aaf0c4872 = {};
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '工作分类',hidden:false, name: 'LJWH_CLASS',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '主要内容',hidden:false, name: 'TITLE',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '内容分解',hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '完成时间', formatter:format, hidden:false, name: 'LJWH_DATE',align:'center',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '实际完成情况',hidden:false, name: 'LJWH_CONTENT',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '备注',hidden:false, name: 'LJWH_BZ',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableae02e242f856ca429928b0eb570aaf0c4872.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableae02e242f856ca429928b0eb570aaf0c4872").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38b462f3d018b609d849303a0/tableae02e242f856ca429928b0eb570aaf0c4872/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableae02e242f856ca429928b0eb570aaf0c4872,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableae02e242f856ca429928b0eb570aaf0c4872SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableae02e242f856ca429928b0eb570aaf0c4872LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableae02e242f856ca429928b0eb570aaf0c4872OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableae02e242f856ca429928b0eb570aaf0c4872OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableae02e242f856ca429928b0eb570aaf0c4872GridComplete.exec();
				    setTimeout(function(){var height = $("#tableae02e242f856ca429928b0eb570aaf0c4872").closest('.ui-jqgrid-bdiv').height();
					$("#tableae02e242f856ca429928b0eb570aaf0c4872norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableae02e242f856ca429928b0eb570aaf0c4872norecords img").css("width","120px");
                 }else{
					    $("#tableae02e242f856ca429928b0eb570aaf0c4872norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableae02e242f856ca429928b0eb570aaf0c4872BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableae02e242f856ca429928b0eb570aaf0c4872OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableae02e242f856ca429928b0eb570aaf0c4872norecords").hide();
		   	    $("#Pagertableae02e242f856ca429928b0eb570aaf0c4872_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableae02e242f856ca429928b0eb570aaf0c4872").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableae02e242f856ca429928b0eb570aaf0c4872").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableae02e242f856ca429928b0eb570aaf0c4872norecords").html() == null) {
						$("#tableae02e242f856ca429928b0eb570aaf0c4872").parent().append("<div class='no_data' id='tableae02e242f856ca429928b0eb570aaf0c4872norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableae02e242f856ca429928b0eb570aaf0c4872norecords").show();
					$("#Pagertableae02e242f856ca429928b0eb570aaf0c4872_left").css("display", "none");
				}
tableae02e242f856ca429928b0eb570aaf0c4872LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableae02e242f856ca429928b0eb570aaf0c4872"
    });
tableae02e242f856ca429928b0eb570aaf0c4872Reload();
$("#t_tableae02e242f856ca429928b0eb570aaf0c4872").append($("#tableToolbartableae02e242f856ca429928b0eb570aaf0c4872"));$("#tableToolbarButton64b0098110034b4736a8f5ae34cda6112445").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b462f3d018b609d053b0375&grid=tableae02e242f856ca429928b0eb570aaf0c4872',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton20c081f7370711409e3a2ad8304a44a43757").bind('click',function() {                                                                                       
	var ids = $('#tableae02e242f856ca429928b0eb570aaf0c4872').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableae02e242f856ca429928b0eb570aaf0c4872').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b462f3d018b609d053b0375&id=' + rowData.ID+'&grid=tableae02e242f856ca429928b0eb570aaf0c4872',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtone3ea96b5541b03461e084f59adbc305e72a7").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableae02e242f856ca429928b0eb570aaf0c4872').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableae02e242f856ca429928b0eb570aaf0c4872').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_LJWHJS&isbpm=N&dbid=948e83e38b462f3d018b6098a068033b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38b462f3d018b609d849303a0',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableae02e242f856ca429928b0eb570aaf0c4872').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
