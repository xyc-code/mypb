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

function redraw948e83e391927ff30191d54a4e865822(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d54a4e865822").width();
		var win_height = $("#948e83e391927ff30191d54a4e865822").height();
		$('#948e83e391927ff30191d54a4e865822').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d54a4e865822').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d54a4e865822").width();
	setTimeout(function(){redraw948e83e391927ff30191d54a4e865822(win_width);},500);
});
var table7664a2022dd8f1446b1af4f8707f41a88a5cKeyWordIn = "";    
var table7664a2022dd8f1446b1af4f8707f41a88a5cParamIn = "";    
var table7664a2022dd8f1446b1af4f8707f41a88a5cSelectRow = {     
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cLoadComplete = {     
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cBeforeEditCell = {        
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cOndblClickRow = {     
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cOnRightClickRow = {     
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cGridComplete = {     
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cOnCellSelect = {     
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
var table7664a2022dd8f1446b1af4f8707f41a88a5cLoadBeforeSend = {        
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
function table7664a2022dd8f1446b1af4f8707f41a88a5cReload(pid){
	var _isInvalid = true;
	$("#table7664a2022dd8f1446b1af4f8707f41a88a5c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table7664a2022dd8f1446b1af4f8707f41a88a5cPid = pid;
		}
		return false;
	}
	window.table7664a2022dd8f1446b1af4f8707f41a88a5cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table7664a2022dd8f1446b1af4f8707f41a88a5cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table7664a2022dd8f1446b1af4f8707f41a88a5cPid == 'undefined' || window.table7664a2022dd8f1446b1af4f8707f41a88a5cPid!=null){
table7664a2022dd8f1446b1af4f8707f41a88a5cReload(window.table7664a2022dd8f1446b1af4f8707f41a88a5cPid);
}
}
var tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c = [];
var uniqueColtable7664a2022dd8f1446b1af4f8707f41a88a5c = [];
var uniqueColTitletable7664a2022dd8f1446b1af4f8707f41a88a5c = [];
var defaultValuetable7664a2022dd8f1446b1af4f8707f41a88a5c = {};
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '召开时间',hidden:false, name: 'ZKSJ',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '会议地点',hidden:false, name: 'HYDD',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table7664a2022dd8f1446b1af4f8707f41a88a5c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d54a4e865822/table7664a2022dd8f1446b1af4f8707f41a88a5c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable7664a2022dd8f1446b1af4f8707f41a88a5c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table7664a2022dd8f1446b1af4f8707f41a88a5cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table7664a2022dd8f1446b1af4f8707f41a88a5cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table7664a2022dd8f1446b1af4f8707f41a88a5cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table7664a2022dd8f1446b1af4f8707f41a88a5cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table7664a2022dd8f1446b1af4f8707f41a88a5cGridComplete.exec();
				    setTimeout(function(){var height = $("#table7664a2022dd8f1446b1af4f8707f41a88a5c").closest('.ui-jqgrid-bdiv').height();
					$("#table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords img").css("width","120px");
                 }else{
					    $("#table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table7664a2022dd8f1446b1af4f8707f41a88a5cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table7664a2022dd8f1446b1af4f8707f41a88a5cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords").hide();
		   	    $("#Pagertable7664a2022dd8f1446b1af4f8707f41a88a5c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table7664a2022dd8f1446b1af4f8707f41a88a5c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table7664a2022dd8f1446b1af4f8707f41a88a5c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords").html() == null) {
						$("#table7664a2022dd8f1446b1af4f8707f41a88a5c").parent().append("<div class='no_data' id='table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table7664a2022dd8f1446b1af4f8707f41a88a5cnorecords").show();
					$("#Pagertable7664a2022dd8f1446b1af4f8707f41a88a5c_left").css("display", "none");
				}
table7664a2022dd8f1446b1af4f8707f41a88a5cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable7664a2022dd8f1446b1af4f8707f41a88a5c"
    });
table7664a2022dd8f1446b1af4f8707f41a88a5cReload();
$("#t_table7664a2022dd8f1446b1af4f8707f41a88a5c").append($("#tableToolbartable7664a2022dd8f1446b1af4f8707f41a88a5c"));$("#tableToolbarButtonb51bd8f05bd1f34302c91cc450931295f55f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d549f3c25803&grid=table7664a2022dd8f1446b1af4f8707f41a88a5c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtona833fd50b5ff834d0a98e0d916a04400afef").bind('click',function() {                                                                                       
	var ids = $('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d549f3c25803&id=' + rowData.ID+'&grid=table7664a2022dd8f1446b1af4f8707f41a88a5c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtoncb2353c24ff32d4009885eff6646929aafcb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_JCZGDBDH&isbpm=N&dbid=948e83e391927ff30191d47d9f2c13b0', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d54a4e865822',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table7664a2022dd8f1446b1af4f8707f41a88a5c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtond6e54a1d04cef34bcb5a0734b6e60cab1fe5').bind('click',function() {                           
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
	        var colModels =$('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table7664a2022dd8f1446b1af4f8707f41a88a5cKeyWordIn;                          
	        expSearchParams.param = table7664a2022dd8f1446b1af4f8707f41a88a5cParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_基层职工代表大会';                             
	        expSearchParams.viewid='948e83e391927ff30191d54a4e865822';                                   
	        expSearchParams.tableid='table7664a2022dd8f1446b1af4f8707f41a88a5c';                                 
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
$("#tableToolbarButton048d334f0dc8d44b62d999cff7e0c1626cf4").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zzmg_jczgdbdh', callBackFunc: function () {                           	
		$('#table7664a2022dd8f1446b1af4f8707f41a88a5c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
