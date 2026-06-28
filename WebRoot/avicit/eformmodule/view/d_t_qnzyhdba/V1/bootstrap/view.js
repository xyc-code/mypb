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

function redraw948e83e39159170301916e5a0c743657(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39159170301916e5a0c743657").width();
		var win_height = $("#948e83e39159170301916e5a0c743657").height();
		$('#948e83e39159170301916e5a0c743657').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39159170301916e5a0c743657').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39159170301916e5a0c743657").width();
	setTimeout(function(){redraw948e83e39159170301916e5a0c743657(win_width);},500);
});
var table91fe91e4f9aaff40787854c610e73cbf973bKeyWordIn = "";    
var table91fe91e4f9aaff40787854c610e73cbf973bParamIn = "";    
var table91fe91e4f9aaff40787854c610e73cbf973bSelectRow = {     
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
var table91fe91e4f9aaff40787854c610e73cbf973bLoadComplete = {     
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
var table91fe91e4f9aaff40787854c610e73cbf973bBeforeEditCell = {        
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
var table91fe91e4f9aaff40787854c610e73cbf973bOndblClickRow = {     
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
var table91fe91e4f9aaff40787854c610e73cbf973bOnRightClickRow = {     
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
var table91fe91e4f9aaff40787854c610e73cbf973bGridComplete = {     
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
var table91fe91e4f9aaff40787854c610e73cbf973bOnCellSelect = {     
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
var table91fe91e4f9aaff40787854c610e73cbf973bLoadBeforeSend = {        
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
function table91fe91e4f9aaff40787854c610e73cbf973bReload(pid){
	var _isInvalid = true;
	$("#table91fe91e4f9aaff40787854c610e73cbf973b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table91fe91e4f9aaff40787854c610e73cbf973bPid = pid;
		}
		return false;
	}
	window.table91fe91e4f9aaff40787854c610e73cbf973bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table91fe91e4f9aaff40787854c610e73cbf973bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table91fe91e4f9aaff40787854c610e73cbf973bPid == 'undefined' || window.table91fe91e4f9aaff40787854c610e73cbf973bPid!=null){
table91fe91e4f9aaff40787854c610e73cbf973bReload(window.table91fe91e4f9aaff40787854c610e73cbf973bPid);
}
}
var tablecmtable91fe91e4f9aaff40787854c610e73cbf973b = [];
var uniqueColtable91fe91e4f9aaff40787854c610e73cbf973b = [];
var uniqueColTitletable91fe91e4f9aaff40787854c610e73cbf973b = [];
var defaultValuetable91fe91e4f9aaff40787854c610e73cbf973b = {};
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '志愿活动主题',hidden:false, name: 'ZYHDZT',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '志愿人数',hidden:false, name: 'ZYRS',align:'right',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '志愿日期',hidden:false, name: 'ZYRQ',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '时长',hidden:false, name: 'SC',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable91fe91e4f9aaff40787854c610e73cbf973b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table91fe91e4f9aaff40787854c610e73cbf973b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39159170301916e5a0c743657/table91fe91e4f9aaff40787854c610e73cbf973b/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable91fe91e4f9aaff40787854c610e73cbf973b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table91fe91e4f9aaff40787854c610e73cbf973bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table91fe91e4f9aaff40787854c610e73cbf973bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table91fe91e4f9aaff40787854c610e73cbf973bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table91fe91e4f9aaff40787854c610e73cbf973bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table91fe91e4f9aaff40787854c610e73cbf973bGridComplete.exec();
				    setTimeout(function(){var height = $("#table91fe91e4f9aaff40787854c610e73cbf973b").closest('.ui-jqgrid-bdiv').height();
					$("#table91fe91e4f9aaff40787854c610e73cbf973bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table91fe91e4f9aaff40787854c610e73cbf973bnorecords img").css("width","120px");
                 }else{
					    $("#table91fe91e4f9aaff40787854c610e73cbf973bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table91fe91e4f9aaff40787854c610e73cbf973bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table91fe91e4f9aaff40787854c610e73cbf973bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table91fe91e4f9aaff40787854c610e73cbf973bnorecords").hide();
		   	    $("#Pagertable91fe91e4f9aaff40787854c610e73cbf973b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table91fe91e4f9aaff40787854c610e73cbf973b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table91fe91e4f9aaff40787854c610e73cbf973b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table91fe91e4f9aaff40787854c610e73cbf973bnorecords").html() == null) {
						$("#table91fe91e4f9aaff40787854c610e73cbf973b").parent().append("<div class='no_data' id='table91fe91e4f9aaff40787854c610e73cbf973bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table91fe91e4f9aaff40787854c610e73cbf973bnorecords").show();
					$("#Pagertable91fe91e4f9aaff40787854c610e73cbf973b_left").css("display", "none");
				}
table91fe91e4f9aaff40787854c610e73cbf973bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable91fe91e4f9aaff40787854c610e73cbf973b"
    });
table91fe91e4f9aaff40787854c610e73cbf973bReload();
$("#t_table91fe91e4f9aaff40787854c610e73cbf973b").append($("#tableToolbartable91fe91e4f9aaff40787854c610e73cbf973b"));$("#tableToolbarButtone4de50604abb464aa1ba9a8aed79504176d8").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e551f8935e7&grid=table91fe91e4f9aaff40787854c610e73cbf973b',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonad5c9884a61121404beafffe8bc15003d300").bind('click',function() {                                                                                       
	var ids = $('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e56e946362a&id=' + rowData.ID+'&grid=table91fe91e4f9aaff40787854c610e73cbf973b',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton56106c8a4ff8cd42a3d82a4edeed1df78bc3").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_T_QNZYHDBA&isbpm=N&dbid=948e83e39159170301916e4c2054351b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39159170301916e5a0c743657',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table91fe91e4f9aaff40787854c610e73cbf973b').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton191ade9e9a5dfa475fe8e7ddf2d53f99fba4').bind('click',function() {                           
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
	        var colModels =$('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table91fe91e4f9aaff40787854c610e73cbf973bKeyWordIn;                          
	        expSearchParams.param = table91fe91e4f9aaff40787854c610e73cbf973bParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_团委_青年志愿活动备案';                             
	        expSearchParams.viewid='948e83e39159170301916e5a0c743657';                                   
	        expSearchParams.tableid='table91fe91e4f9aaff40787854c610e73cbf973b';                                 
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
$("#tableToolbarButton9417ced29f5d934e6a893c3e1aba13ef2436").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'qnzyhdba', callBackFunc: function () {                           	
		$('#table91fe91e4f9aaff40787854c610e73cbf973b').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
