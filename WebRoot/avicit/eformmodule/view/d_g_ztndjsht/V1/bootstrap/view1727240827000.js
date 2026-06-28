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

function redraw948e83e3918c4fb001918d414c0921bd(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918d414c0921bd").width();
		var win_height = $("#948e83e3918c4fb001918d414c0921bd").height();
		$('#948e83e3918c4fb001918d414c0921bd').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918d414c0921bd').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918d414c0921bd").width();
	setTimeout(function(){redraw948e83e3918c4fb001918d414c0921bd(win_width);},500);
});
var table271b9a51e1cd21434c88a13330295b080767KeyWordIn = "";    
var table271b9a51e1cd21434c88a13330295b080767ParamIn = "";    
var table271b9a51e1cd21434c88a13330295b080767SelectRow = {     
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
var table271b9a51e1cd21434c88a13330295b080767LoadComplete = {     
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
var table271b9a51e1cd21434c88a13330295b080767BeforeEditCell = {        
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
var table271b9a51e1cd21434c88a13330295b080767OndblClickRow = {     
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
var table271b9a51e1cd21434c88a13330295b080767OnRightClickRow = {     
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
var table271b9a51e1cd21434c88a13330295b080767GridComplete = {     
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
var table271b9a51e1cd21434c88a13330295b080767OnCellSelect = {     
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
var table271b9a51e1cd21434c88a13330295b080767LoadBeforeSend = {        
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
function table271b9a51e1cd21434c88a13330295b080767Reload(pid){
	var _isInvalid = true;
	$("#table271b9a51e1cd21434c88a13330295b080767").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table271b9a51e1cd21434c88a13330295b080767Pid = pid;
		}
		return false;
	}
	window.table271b9a51e1cd21434c88a13330295b080767Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table271b9a51e1cd21434c88a13330295b080767').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table271b9a51e1cd21434c88a13330295b080767TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table271b9a51e1cd21434c88a13330295b080767Pid == 'undefined' || window.table271b9a51e1cd21434c88a13330295b080767Pid!=null){
table271b9a51e1cd21434c88a13330295b080767Reload(window.table271b9a51e1cd21434c88a13330295b080767Pid);
}
}
var tablecmtable271b9a51e1cd21434c88a13330295b080767 = [];
var uniqueColtable271b9a51e1cd21434c88a13330295b080767 = [];
var uniqueColTitletable271b9a51e1cd21434c88a13330295b080767 = [];
var defaultValuetable271b9a51e1cd21434c88a13330295b080767 = {};
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '奖励金额',hidden:false, name: 'PRICE',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '名称',hidden:false, name: 'NAME',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable271b9a51e1cd21434c88a13330295b080767.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table271b9a51e1cd21434c88a13330295b080767").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918d414c0921bd/table271b9a51e1cd21434c88a13330295b080767/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable271b9a51e1cd21434c88a13330295b080767,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table271b9a51e1cd21434c88a13330295b080767SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table271b9a51e1cd21434c88a13330295b080767LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table271b9a51e1cd21434c88a13330295b080767OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table271b9a51e1cd21434c88a13330295b080767OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table271b9a51e1cd21434c88a13330295b080767GridComplete.exec();
				    setTimeout(function(){var height = $("#table271b9a51e1cd21434c88a13330295b080767").closest('.ui-jqgrid-bdiv').height();
					$("#table271b9a51e1cd21434c88a13330295b080767norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table271b9a51e1cd21434c88a13330295b080767norecords img").css("width","120px");
                 }else{
					    $("#table271b9a51e1cd21434c88a13330295b080767norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table271b9a51e1cd21434c88a13330295b080767BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table271b9a51e1cd21434c88a13330295b080767OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table271b9a51e1cd21434c88a13330295b080767norecords").hide();
		   	    $("#Pagertable271b9a51e1cd21434c88a13330295b080767_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table271b9a51e1cd21434c88a13330295b080767").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table271b9a51e1cd21434c88a13330295b080767").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table271b9a51e1cd21434c88a13330295b080767norecords").html() == null) {
						$("#table271b9a51e1cd21434c88a13330295b080767").parent().append("<div class='no_data' id='table271b9a51e1cd21434c88a13330295b080767norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table271b9a51e1cd21434c88a13330295b080767norecords").show();
					$("#Pagertable271b9a51e1cd21434c88a13330295b080767_left").css("display", "none");
				}
table271b9a51e1cd21434c88a13330295b080767LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable271b9a51e1cd21434c88a13330295b080767"
    });
table271b9a51e1cd21434c88a13330295b080767Reload();
$("#t_table271b9a51e1cd21434c88a13330295b080767").append($("#tableToolbartable271b9a51e1cd21434c88a13330295b080767"));$("#tableToolbarButton9c9dbc224982f24fe7d8ed5971dd6f22c56c").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d40f3d921b2&grid=table271b9a51e1cd21434c88a13330295b080767',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton172c83cbe768ef4e3ba97d41b166c0282198").bind('click',function() {                                                                                       
	var ids = $('#table271b9a51e1cd21434c88a13330295b080767').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table271b9a51e1cd21434c88a13330295b080767').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d40f3d921b2&id=' + rowData.ID+'&grid=table271b9a51e1cd21434c88a13330295b080767',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonaab099fbe6ba934974897ffab02b02800bd2").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table271b9a51e1cd21434c88a13330295b080767').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table271b9a51e1cd21434c88a13330295b080767').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_ZTLDJS_HT&isbpm=N&dbid=948e83e3915917030191793a16364ba7', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918d414c0921bd',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table271b9a51e1cd21434c88a13330295b080767').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton09ae37fd4187934a86d8a8cc08c4f308c484').bind('click',function() {                           
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
	        var colModels =$('#table271b9a51e1cd21434c88a13330295b080767').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table271b9a51e1cd21434c88a13330295b080767KeyWordIn;                          
	        expSearchParams.param = table271b9a51e1cd21434c88a13330295b080767ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-主题劳动竞赛-环图';                             
	        expSearchParams.viewid='948e83e3918c4fb001918d414c0921bd';                                   
	        expSearchParams.tableid='table271b9a51e1cd21434c88a13330295b080767';                                 
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
$("#tableToolbarButtonacc1b434c903c64304b921ef0e638f2a9cac").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ldjsht', callBackFunc: function () {                           	
		$('#table271b9a51e1cd21434c88a13330295b080767').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
