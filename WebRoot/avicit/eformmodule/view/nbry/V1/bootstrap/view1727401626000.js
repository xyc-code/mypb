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

function redraw948e83e3922222860192312832c94c83(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3922222860192312832c94c83").width();
		var win_height = $("#948e83e3922222860192312832c94c83").height();
		$('#948e83e3922222860192312832c94c83').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3922222860192312832c94c83').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3922222860192312832c94c83").width();
	setTimeout(function(){redraw948e83e3922222860192312832c94c83(win_width);},500);
});
var table6e0d5409aaf07048d2894d721caed1546df5KeyWordIn = "";    
var table6e0d5409aaf07048d2894d721caed1546df5ParamIn = "";    
var table6e0d5409aaf07048d2894d721caed1546df5SelectRow = {     
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
var table6e0d5409aaf07048d2894d721caed1546df5LoadComplete = {     
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
var table6e0d5409aaf07048d2894d721caed1546df5BeforeEditCell = {        
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
var table6e0d5409aaf07048d2894d721caed1546df5OndblClickRow = {     
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
var table6e0d5409aaf07048d2894d721caed1546df5OnRightClickRow = {     
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
var table6e0d5409aaf07048d2894d721caed1546df5GridComplete = {     
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
var table6e0d5409aaf07048d2894d721caed1546df5OnCellSelect = {     
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
var table6e0d5409aaf07048d2894d721caed1546df5LoadBeforeSend = {        
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
function table6e0d5409aaf07048d2894d721caed1546df5Reload(pid){
	var _isInvalid = true;
	$("#table6e0d5409aaf07048d2894d721caed1546df5").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6e0d5409aaf07048d2894d721caed1546df5Pid = pid;
		}
		return false;
	}
	window.table6e0d5409aaf07048d2894d721caed1546df5Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table6e0d5409aaf07048d2894d721caed1546df5TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6e0d5409aaf07048d2894d721caed1546df5Pid == 'undefined' || window.table6e0d5409aaf07048d2894d721caed1546df5Pid!=null){
table6e0d5409aaf07048d2894d721caed1546df5Reload(window.table6e0d5409aaf07048d2894d721caed1546df5Pid);
}
}
var tablecmtable6e0d5409aaf07048d2894d721caed1546df5 = [];
var uniqueColtable6e0d5409aaf07048d2894d721caed1546df5 = [];
var uniqueColTitletable6e0d5409aaf07048d2894d721caed1546df5 = [];
var defaultValuetable6e0d5409aaf07048d2894d721caed1546df5 = {};
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '获奖单位',hidden:false, name: 'HJDW',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '荣誉名称',hidden:false, name: 'RYMC',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '获奖年份',hidden:false, name: 'HJNF',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6e0d5409aaf07048d2894d721caed1546df5.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table6e0d5409aaf07048d2894d721caed1546df5").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3922222860192312832c94c83/table6e0d5409aaf07048d2894d721caed1546df5/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6e0d5409aaf07048d2894d721caed1546df5,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6e0d5409aaf07048d2894d721caed1546df5SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6e0d5409aaf07048d2894d721caed1546df5LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6e0d5409aaf07048d2894d721caed1546df5OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6e0d5409aaf07048d2894d721caed1546df5OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6e0d5409aaf07048d2894d721caed1546df5GridComplete.exec();
				    setTimeout(function(){var height = $("#table6e0d5409aaf07048d2894d721caed1546df5").closest('.ui-jqgrid-bdiv').height();
					$("#table6e0d5409aaf07048d2894d721caed1546df5norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6e0d5409aaf07048d2894d721caed1546df5norecords img").css("width","120px");
                 }else{
					    $("#table6e0d5409aaf07048d2894d721caed1546df5norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6e0d5409aaf07048d2894d721caed1546df5BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6e0d5409aaf07048d2894d721caed1546df5OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6e0d5409aaf07048d2894d721caed1546df5norecords").hide();
		   	    $("#Pagertable6e0d5409aaf07048d2894d721caed1546df5_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6e0d5409aaf07048d2894d721caed1546df5").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6e0d5409aaf07048d2894d721caed1546df5").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6e0d5409aaf07048d2894d721caed1546df5norecords").html() == null) {
						$("#table6e0d5409aaf07048d2894d721caed1546df5").parent().append("<div class='no_data' id='table6e0d5409aaf07048d2894d721caed1546df5norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6e0d5409aaf07048d2894d721caed1546df5norecords").show();
					$("#Pagertable6e0d5409aaf07048d2894d721caed1546df5_left").css("display", "none");
				}
table6e0d5409aaf07048d2894d721caed1546df5LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6e0d5409aaf07048d2894d721caed1546df5"
    });
table6e0d5409aaf07048d2894d721caed1546df5Reload();
$("#t_table6e0d5409aaf07048d2894d721caed1546df5").append($("#tableToolbartable6e0d5409aaf07048d2894d721caed1546df5"));$("#tableToolbarButton548c3fca0e6ab44bee180f5d7b5e78b26324").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39222228601923127cd8b4c61&grid=table6e0d5409aaf07048d2894d721caed1546df5',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonaaf6f68339b0f2466e089d7db1ba5010744d").bind('click',function() {                                                                                       
	var ids = $('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39222228601923127cd8b4c61&id=' + rowData.ID+'&grid=table6e0d5409aaf07048d2894d721caed1546df5',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonc36f7e4f5101c240c508aa5d68d52661a58f").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_NBRY&isbpm=N&dbid=948e83e392222286019231264cac4c2d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3922222860192312832c94c83',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6e0d5409aaf07048d2894d721caed1546df5').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonf168207597336b4dab59f30087759309df5c").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'nbry', callBackFunc: function () {                           	
		$('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButtonae686649d9c0524ae5cade5be368753466a8').bind('click',function() {                           
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
	        var colModels =$('#table6e0d5409aaf07048d2894d721caed1546df5').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table6e0d5409aaf07048d2894d721caed1546df5KeyWordIn;                          
	        expSearchParams.param = table6e0d5409aaf07048d2894d721caed1546df5ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_内部荣誉';                             
	        expSearchParams.viewid='948e83e3922222860192312832c94c83';                                   
	        expSearchParams.tableid='table6e0d5409aaf07048d2894d721caed1546df5';                                 
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
