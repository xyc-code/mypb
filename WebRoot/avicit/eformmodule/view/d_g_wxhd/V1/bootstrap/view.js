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

function redraw948e83e391927ff30191a1423a3d1b7b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a1423a3d1b7b").width();
		var win_height = $("#948e83e391927ff30191a1423a3d1b7b").height();
		$('#948e83e391927ff30191a1423a3d1b7b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a1423a3d1b7b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a1423a3d1b7b").width();
	setTimeout(function(){redraw948e83e391927ff30191a1423a3d1b7b(win_width);},500);
});
var tableabfcdde62ea6534a37889b7347869535c255KeyWordIn = "";    
var tableabfcdde62ea6534a37889b7347869535c255ParamIn = "";    
var tableabfcdde62ea6534a37889b7347869535c255SelectRow = {     
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
var tableabfcdde62ea6534a37889b7347869535c255LoadComplete = {     
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
var tableabfcdde62ea6534a37889b7347869535c255BeforeEditCell = {        
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
var tableabfcdde62ea6534a37889b7347869535c255OndblClickRow = {     
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
var tableabfcdde62ea6534a37889b7347869535c255OnRightClickRow = {     
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
var tableabfcdde62ea6534a37889b7347869535c255GridComplete = {     
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
var tableabfcdde62ea6534a37889b7347869535c255OnCellSelect = {     
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
var tableabfcdde62ea6534a37889b7347869535c255LoadBeforeSend = {        
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
function tableabfcdde62ea6534a37889b7347869535c255Reload(pid){
	var _isInvalid = true;
	$("#tableabfcdde62ea6534a37889b7347869535c255").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableabfcdde62ea6534a37889b7347869535c255Pid = pid;
		}
		return false;
	}
	window.tableabfcdde62ea6534a37889b7347869535c255Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableabfcdde62ea6534a37889b7347869535c255TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableabfcdde62ea6534a37889b7347869535c255Pid == 'undefined' || window.tableabfcdde62ea6534a37889b7347869535c255Pid!=null){
tableabfcdde62ea6534a37889b7347869535c255Reload(window.tableabfcdde62ea6534a37889b7347869535c255Pid);
}
}
var tablecmtableabfcdde62ea6534a37889b7347869535c255 = [];
var uniqueColtableabfcdde62ea6534a37889b7347869535c255 = [];
var uniqueColTitletableabfcdde62ea6534a37889b7347869535c255 = [];
var defaultValuetableabfcdde62ea6534a37889b7347869535c255 = {};
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '项目名称',hidden:false, name: 'XMMC',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '项目指导',hidden:false, name: 'XMZD',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '获奖情况',hidden:false, name: 'HJQK',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '项目负责人',hidden:false, name: 'XMFZR',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableabfcdde62ea6534a37889b7347869535c255.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableabfcdde62ea6534a37889b7347869535c255").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a1423a3d1b7b/tableabfcdde62ea6534a37889b7347869535c255/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableabfcdde62ea6534a37889b7347869535c255,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableabfcdde62ea6534a37889b7347869535c255SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableabfcdde62ea6534a37889b7347869535c255LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableabfcdde62ea6534a37889b7347869535c255OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableabfcdde62ea6534a37889b7347869535c255OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableabfcdde62ea6534a37889b7347869535c255GridComplete.exec();
				    setTimeout(function(){var height = $("#tableabfcdde62ea6534a37889b7347869535c255").closest('.ui-jqgrid-bdiv').height();
					$("#tableabfcdde62ea6534a37889b7347869535c255norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableabfcdde62ea6534a37889b7347869535c255norecords img").css("width","120px");
                 }else{
					    $("#tableabfcdde62ea6534a37889b7347869535c255norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableabfcdde62ea6534a37889b7347869535c255BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableabfcdde62ea6534a37889b7347869535c255OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableabfcdde62ea6534a37889b7347869535c255norecords").hide();
		   	    $("#Pagertableabfcdde62ea6534a37889b7347869535c255_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableabfcdde62ea6534a37889b7347869535c255").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableabfcdde62ea6534a37889b7347869535c255").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableabfcdde62ea6534a37889b7347869535c255norecords").html() == null) {
						$("#tableabfcdde62ea6534a37889b7347869535c255").parent().append("<div class='no_data' id='tableabfcdde62ea6534a37889b7347869535c255norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableabfcdde62ea6534a37889b7347869535c255norecords").show();
					$("#Pagertableabfcdde62ea6534a37889b7347869535c255_left").css("display", "none");
				}
tableabfcdde62ea6534a37889b7347869535c255LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableabfcdde62ea6534a37889b7347869535c255"
    });
tableabfcdde62ea6534a37889b7347869535c255Reload();
$("#t_tableabfcdde62ea6534a37889b7347869535c255").append($("#tableToolbartableabfcdde62ea6534a37889b7347869535c255"));$("#tableToolbarButton6c869e864fb9a94ad248251aeeace1c486f4").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a141b1c61b65&grid=tableabfcdde62ea6534a37889b7347869535c255',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonb8891cc45b33de4ee92a021351f5a4b86f7e").bind('click',function() {                                                                                       
	var ids = $('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a141b1c61b65&id=' + rowData.ID+'&grid=tableabfcdde62ea6534a37889b7347869535c255',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton9f77d33736fba04a6a182dd90b5340bb813c").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WXHDZSB1&isbpm=N&dbid=948e83e391927ff30191976c7a5d4787', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a1423a3d1b7b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableabfcdde62ea6534a37889b7347869535c255').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton74d7883dbb206c4b2cc9938d266a85a1f235').bind('click',function() {                           
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
	        var colModels =$('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableabfcdde62ea6534a37889b7347869535c255KeyWordIn;                          
	        expSearchParams.param = tableabfcdde62ea6534a37889b7347869535c255ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_五小活动展示表';                             
	        expSearchParams.viewid='948e83e391927ff30191a1423a3d1b7b';                                   
	        expSearchParams.tableid='tableabfcdde62ea6534a37889b7347869535c255';                                 
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
$("#tableToolbarButton288250c5e00fe341d55a04f23d940b021f60").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wxhd1', callBackFunc: function () {                           	
		$('#tableabfcdde62ea6534a37889b7347869535c255').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
