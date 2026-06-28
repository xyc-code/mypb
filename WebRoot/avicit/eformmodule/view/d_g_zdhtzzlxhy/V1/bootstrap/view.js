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

function redraw948e83e391927ff30191d547a2bd57db(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d547a2bd57db").width();
		var win_height = $("#948e83e391927ff30191d547a2bd57db").height();
		$('#948e83e391927ff30191d547a2bd57db').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d547a2bd57db').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d547a2bd57db").width();
	setTimeout(function(){redraw948e83e391927ff30191d547a2bd57db(win_width);},500);
});
var table2e68231c44b1f046bda80132c2ef6e46d68cKeyWordIn = "";    
var table2e68231c44b1f046bda80132c2ef6e46d68cParamIn = "";    
var table2e68231c44b1f046bda80132c2ef6e46d68cSelectRow = {     
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
var table2e68231c44b1f046bda80132c2ef6e46d68cLoadComplete = {     
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
var table2e68231c44b1f046bda80132c2ef6e46d68cBeforeEditCell = {        
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
var table2e68231c44b1f046bda80132c2ef6e46d68cOndblClickRow = {     
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
var table2e68231c44b1f046bda80132c2ef6e46d68cOnRightClickRow = {     
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
var table2e68231c44b1f046bda80132c2ef6e46d68cGridComplete = {     
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
var table2e68231c44b1f046bda80132c2ef6e46d68cOnCellSelect = {     
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
var table2e68231c44b1f046bda80132c2ef6e46d68cLoadBeforeSend = {        
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
function table2e68231c44b1f046bda80132c2ef6e46d68cReload(pid){
	var _isInvalid = true;
	$("#table2e68231c44b1f046bda80132c2ef6e46d68c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2e68231c44b1f046bda80132c2ef6e46d68cPid = pid;
		}
		return false;
	}
	window.table2e68231c44b1f046bda80132c2ef6e46d68cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2e68231c44b1f046bda80132c2ef6e46d68cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2e68231c44b1f046bda80132c2ef6e46d68cPid == 'undefined' || window.table2e68231c44b1f046bda80132c2ef6e46d68cPid!=null){
table2e68231c44b1f046bda80132c2ef6e46d68cReload(window.table2e68231c44b1f046bda80132c2ef6e46d68cPid);
}
}
var tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c = [];
var uniqueColtable2e68231c44b1f046bda80132c2ef6e46d68c = [];
var uniqueColTitletable2e68231c44b1f046bda80132c2ef6e46d68c = [];
var defaultValuetable2e68231c44b1f046bda80132c2ef6e46d68c = {};
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '会议名称',hidden:false, name: 'MC',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '召开日期',hidden:false, name: 'ZKRQ',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '表决通过的事项或文件',hidden:false, name: 'SXHWJ',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '应参会人数',hidden:false, name: 'YCHRS',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '实际参会人数',hidden:false, name: 'SCHRS',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table2e68231c44b1f046bda80132c2ef6e46d68c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d547a2bd57db/table2e68231c44b1f046bda80132c2ef6e46d68c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable2e68231c44b1f046bda80132c2ef6e46d68c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2e68231c44b1f046bda80132c2ef6e46d68cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2e68231c44b1f046bda80132c2ef6e46d68cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2e68231c44b1f046bda80132c2ef6e46d68cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2e68231c44b1f046bda80132c2ef6e46d68cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2e68231c44b1f046bda80132c2ef6e46d68cGridComplete.exec();
				    setTimeout(function(){var height = $("#table2e68231c44b1f046bda80132c2ef6e46d68c").closest('.ui-jqgrid-bdiv').height();
					$("#table2e68231c44b1f046bda80132c2ef6e46d68cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2e68231c44b1f046bda80132c2ef6e46d68cnorecords img").css("width","120px");
                 }else{
					    $("#table2e68231c44b1f046bda80132c2ef6e46d68cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2e68231c44b1f046bda80132c2ef6e46d68cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2e68231c44b1f046bda80132c2ef6e46d68cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2e68231c44b1f046bda80132c2ef6e46d68cnorecords").hide();
		   	    $("#Pagertable2e68231c44b1f046bda80132c2ef6e46d68c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2e68231c44b1f046bda80132c2ef6e46d68c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2e68231c44b1f046bda80132c2ef6e46d68c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2e68231c44b1f046bda80132c2ef6e46d68cnorecords").html() == null) {
						$("#table2e68231c44b1f046bda80132c2ef6e46d68c").parent().append("<div class='no_data' id='table2e68231c44b1f046bda80132c2ef6e46d68cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2e68231c44b1f046bda80132c2ef6e46d68cnorecords").show();
					$("#Pagertable2e68231c44b1f046bda80132c2ef6e46d68c_left").css("display", "none");
				}
table2e68231c44b1f046bda80132c2ef6e46d68cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2e68231c44b1f046bda80132c2ef6e46d68c"
    });
table2e68231c44b1f046bda80132c2ef6e46d68cReload();
$("#t_table2e68231c44b1f046bda80132c2ef6e46d68c").append($("#tableToolbartable2e68231c44b1f046bda80132c2ef6e46d68c"));$("#tableToolbarButton1f133eecd205a54f19c8764c68693f37f844").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d547351157c5&grid=table2e68231c44b1f046bda80132c2ef6e46d68c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton91b56c1101a9a84b27d899795d62f899e591").bind('click',function() {                                                                                       
	var ids = $('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d547351157c5&id=' + rowData.ID+'&grid=table2e68231c44b1f046bda80132c2ef6e46d68c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonfa268cdcd2dc394147ba61125b052bac1578").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_ZDHTZZLXHY&isbpm=N&dbid=948e83e391927ff30191d47f06f21402', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d547a2bd57db',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table2e68231c44b1f046bda80132c2ef6e46d68c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtoncdc3fee14e248e410a9af75c0833dc98587d').bind('click',function() {                           
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
	        var colModels =$('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table2e68231c44b1f046bda80132c2ef6e46d68cKeyWordIn;                          
	        expSearchParams.param = table2e68231c44b1f046bda80132c2ef6e46d68cParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_职代会团组长联席会议';                             
	        expSearchParams.viewid='948e83e391927ff30191d547a2bd57db';                                   
	        expSearchParams.tableid='table2e68231c44b1f046bda80132c2ef6e46d68c';                                 
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
$("#tableToolbarButtonbac3a813e63e724d17b88a5e6da0bf294fe2").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zzmg_zdhtzzlxhy', callBackFunc: function () {                           	
		$('#table2e68231c44b1f046bda80132c2ef6e46d68c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
