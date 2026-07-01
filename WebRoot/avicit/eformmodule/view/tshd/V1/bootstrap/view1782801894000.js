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

function redraw948e83e390a0fe270190a59f197d26f7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390a0fe270190a59f197d26f7").width();
		var win_height = $("#948e83e390a0fe270190a59f197d26f7").height();
		$('#948e83e390a0fe270190a59f197d26f7').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e390a0fe270190a59f197d26f7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390a0fe270190a59f197d26f7").width();
	setTimeout(function(){redraw948e83e390a0fe270190a59f197d26f7(win_width);},500);
});
var tablee512ca20c2b78d401288181e70164a5d4af2KeyWordIn = "";    
var tablee512ca20c2b78d401288181e70164a5d4af2ParamIn = "";    
var tablee512ca20c2b78d401288181e70164a5d4af2SelectRow = {     
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
var tablee512ca20c2b78d401288181e70164a5d4af2LoadComplete = {     
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
var tablee512ca20c2b78d401288181e70164a5d4af2BeforeEditCell = {        
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
var tablee512ca20c2b78d401288181e70164a5d4af2OndblClickRow = {     
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
var tablee512ca20c2b78d401288181e70164a5d4af2OnRightClickRow = {     
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
var tablee512ca20c2b78d401288181e70164a5d4af2GridComplete = {     
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
var tablee512ca20c2b78d401288181e70164a5d4af2OnCellSelect = {     
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
var tablee512ca20c2b78d401288181e70164a5d4af2LoadBeforeSend = {        
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
function tablee512ca20c2b78d401288181e70164a5d4af2Reload(pid){
	var _isInvalid = true;
	$("#tablee512ca20c2b78d401288181e70164a5d4af2").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee512ca20c2b78d401288181e70164a5d4af2Pid = pid;
		}
		return false;
	}
	window.tablee512ca20c2b78d401288181e70164a5d4af2Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee512ca20c2b78d401288181e70164a5d4af2TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee512ca20c2b78d401288181e70164a5d4af2Pid == 'undefined' || window.tablee512ca20c2b78d401288181e70164a5d4af2Pid!=null){
tablee512ca20c2b78d401288181e70164a5d4af2Reload(window.tablee512ca20c2b78d401288181e70164a5d4af2Pid);
}
}
var tablecmtablee512ca20c2b78d401288181e70164a5d4af2 = [];
var uniqueColtablee512ca20c2b78d401288181e70164a5d4af2 = [];
var uniqueColTitletablee512ca20c2b78d401288181e70164a5d4af2 = [];
var defaultValuetablee512ca20c2b78d401288181e70164a5d4af2 = {};
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '分类',hidden:false, name: 'FL',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '党组织名称',hidden:false, name: 'DZZMC',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '活动主题',hidden:false, name: 'HUODONGZHUT',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '活动目标',hidden:false, name: 'HUODONGMUB',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '活动任务简介',hidden:false, name: 'HUODRWJJ',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '活动载体',hidden:false, name: 'HUODONGZAIT',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '组织类型',hidden:false, name: 'ZZLX',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '备注',hidden:false, name: 'NOTE',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '测试',hidden:false, name: 'CESHI',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '里程碑id',hidden:true, name: 'LCB_ID',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee512ca20c2b78d401288181e70164a5d4af2.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
;$(document).ready(function(){ 

$("#tablee512ca20c2b78d401288181e70164a5d4af2").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390a0fe270190a59f197d26f7/tablee512ca20c2b78d401288181e70164a5d4af2/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee512ca20c2b78d401288181e70164a5d4af2,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee512ca20c2b78d401288181e70164a5d4af2SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee512ca20c2b78d401288181e70164a5d4af2LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee512ca20c2b78d401288181e70164a5d4af2OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee512ca20c2b78d401288181e70164a5d4af2OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee512ca20c2b78d401288181e70164a5d4af2GridComplete.exec();
				    setTimeout(function(){var height = $("#tablee512ca20c2b78d401288181e70164a5d4af2").closest('.ui-jqgrid-bdiv').height();
					$("#tablee512ca20c2b78d401288181e70164a5d4af2norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee512ca20c2b78d401288181e70164a5d4af2norecords img").css("width","120px");
                 }else{
					    $("#tablee512ca20c2b78d401288181e70164a5d4af2norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee512ca20c2b78d401288181e70164a5d4af2BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee512ca20c2b78d401288181e70164a5d4af2OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee512ca20c2b78d401288181e70164a5d4af2norecords").hide();
		   	    $("#Pagertablee512ca20c2b78d401288181e70164a5d4af2_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee512ca20c2b78d401288181e70164a5d4af2").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee512ca20c2b78d401288181e70164a5d4af2").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee512ca20c2b78d401288181e70164a5d4af2norecords").html() == null) {
						$("#tablee512ca20c2b78d401288181e70164a5d4af2").parent().append("<div class='no_data' id='tablee512ca20c2b78d401288181e70164a5d4af2norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee512ca20c2b78d401288181e70164a5d4af2norecords").show();
					$("#Pagertablee512ca20c2b78d401288181e70164a5d4af2_left").css("display", "none");
				}
tablee512ca20c2b78d401288181e70164a5d4af2LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee512ca20c2b78d401288181e70164a5d4af2"
    });
tablee512ca20c2b78d401288181e70164a5d4af2Reload();
$("#t_tablee512ca20c2b78d401288181e70164a5d4af2").append($("#tableToolbartablee512ca20c2b78d401288181e70164a5d4af2"));$("#tableToolbarButtonaccd10ef7df3334be0a922018f07b8bfd54f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390a0fe270190a59b7a9f252e&grid=tablee512ca20c2b78d401288181e70164a5d4af2',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton28e8e04766a6654c651984bfdd753e5f8f16").bind('click',function() {                                                                                       
	var ids = $('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390a0fe270190a59b7a9f252e&id=' + rowData.ID+'&grid=tablee512ca20c2b78d401288181e70164a5d4af2',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton4649702b20267f469e29a6ab8fbf71f943f4").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TSHD&isbpm=N&dbid=948e83e390a0fe270190a590064c213b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e390a0fe270190a59f197d26f7',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee512ca20c2b78d401288181e70164a5d4af2').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton46fb62d88794444c339855cd0e4aa942ccea").bind('click',function(event){var ids = $('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid('getGridParam', 'selarrrow');
    if (!ids || ids.length === 0) {
        layer.alert('请选择要导出的数据', {icon: 7, title: '提示'});
        return;
    }

    var code = 'TEST';
    var url = 'api/pb/excelExportConfig/export'
        + '?code=' + encodeURIComponent(code)
        + '&id=' + encodeURIComponent(ids.join(','));

    window.open(url);});
;});	 
