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

function redraw948e83e3918c4fb001918d35cdab1dbb(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918d35cdab1dbb").width();
		var win_height = $("#948e83e3918c4fb001918d35cdab1dbb").height();
		$('#948e83e3918c4fb001918d35cdab1dbb').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918d35cdab1dbb').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918d35cdab1dbb").width();
	setTimeout(function(){redraw948e83e3918c4fb001918d35cdab1dbb(win_width);},500);
});
var table2cea758fe421f049a6ba09f1e14245ec6104KeyWordIn = "";    
var table2cea758fe421f049a6ba09f1e14245ec6104ParamIn = "";    
var table2cea758fe421f049a6ba09f1e14245ec6104SelectRow = {     
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
var table2cea758fe421f049a6ba09f1e14245ec6104LoadComplete = {     
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
var table2cea758fe421f049a6ba09f1e14245ec6104BeforeEditCell = {        
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
var table2cea758fe421f049a6ba09f1e14245ec6104OndblClickRow = {     
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
var table2cea758fe421f049a6ba09f1e14245ec6104OnRightClickRow = {     
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
var table2cea758fe421f049a6ba09f1e14245ec6104GridComplete = {     
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
var table2cea758fe421f049a6ba09f1e14245ec6104OnCellSelect = {     
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
var table2cea758fe421f049a6ba09f1e14245ec6104LoadBeforeSend = {        
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
function table2cea758fe421f049a6ba09f1e14245ec6104Reload(pid){
	var _isInvalid = true;
	$("#table2cea758fe421f049a6ba09f1e14245ec6104").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2cea758fe421f049a6ba09f1e14245ec6104Pid = pid;
		}
		return false;
	}
	window.table2cea758fe421f049a6ba09f1e14245ec6104Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2cea758fe421f049a6ba09f1e14245ec6104').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2cea758fe421f049a6ba09f1e14245ec6104TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2cea758fe421f049a6ba09f1e14245ec6104Pid == 'undefined' || window.table2cea758fe421f049a6ba09f1e14245ec6104Pid!=null){
table2cea758fe421f049a6ba09f1e14245ec6104Reload(window.table2cea758fe421f049a6ba09f1e14245ec6104Pid);
}
}
var tablecmtable2cea758fe421f049a6ba09f1e14245ec6104 = [];
var uniqueColtable2cea758fe421f049a6ba09f1e14245ec6104 = [];
var uniqueColTitletable2cea758fe421f049a6ba09f1e14245ec6104 = [];
var defaultValuetable2cea758fe421f049a6ba09f1e14245ec6104 = {};
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '所获奖项',hidden:false, name: 'SHJX',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '集体名称',hidden:false, name: 'JTMC',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '获奖年度',hidden:false, name: 'HJND',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable2cea758fe421f049a6ba09f1e14245ec6104.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table2cea758fe421f049a6ba09f1e14245ec6104").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918d35cdab1dbb/table2cea758fe421f049a6ba09f1e14245ec6104/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable2cea758fe421f049a6ba09f1e14245ec6104,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2cea758fe421f049a6ba09f1e14245ec6104SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2cea758fe421f049a6ba09f1e14245ec6104LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2cea758fe421f049a6ba09f1e14245ec6104OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2cea758fe421f049a6ba09f1e14245ec6104OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2cea758fe421f049a6ba09f1e14245ec6104GridComplete.exec();
				    setTimeout(function(){var height = $("#table2cea758fe421f049a6ba09f1e14245ec6104").closest('.ui-jqgrid-bdiv').height();
					$("#table2cea758fe421f049a6ba09f1e14245ec6104norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2cea758fe421f049a6ba09f1e14245ec6104norecords img").css("width","120px");
                 }else{
					    $("#table2cea758fe421f049a6ba09f1e14245ec6104norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2cea758fe421f049a6ba09f1e14245ec6104BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2cea758fe421f049a6ba09f1e14245ec6104OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2cea758fe421f049a6ba09f1e14245ec6104norecords").hide();
		   	    $("#Pagertable2cea758fe421f049a6ba09f1e14245ec6104_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2cea758fe421f049a6ba09f1e14245ec6104").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2cea758fe421f049a6ba09f1e14245ec6104").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2cea758fe421f049a6ba09f1e14245ec6104norecords").html() == null) {
						$("#table2cea758fe421f049a6ba09f1e14245ec6104").parent().append("<div class='no_data' id='table2cea758fe421f049a6ba09f1e14245ec6104norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2cea758fe421f049a6ba09f1e14245ec6104norecords").show();
					$("#Pagertable2cea758fe421f049a6ba09f1e14245ec6104_left").css("display", "none");
				}
table2cea758fe421f049a6ba09f1e14245ec6104LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2cea758fe421f049a6ba09f1e14245ec6104"
    });
table2cea758fe421f049a6ba09f1e14245ec6104Reload();
$("#t_table2cea758fe421f049a6ba09f1e14245ec6104").append($("#tableToolbartable2cea758fe421f049a6ba09f1e14245ec6104"));$("#tableToolbarButtonb857f5ac15ef72448dc8083c187435377252").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d3579ca1da1&grid=table2cea758fe421f049a6ba09f1e14245ec6104',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton2c8e148481161b4401282a2f2f21773cb77a").bind('click',function() {                                                                                       
	var ids = $('#table2cea758fe421f049a6ba09f1e14245ec6104').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table2cea758fe421f049a6ba09f1e14245ec6104').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918d3579ca1da1&id=' + rowData.ID+'&grid=table2cea758fe421f049a6ba09f1e14245ec6104',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton9781677eb3a75245a2c86b452dcdc8c73e77").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table2cea758fe421f049a6ba09f1e14245ec6104').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table2cea758fe421f049a6ba09f1e14245ec6104').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_QZJJJS5&isbpm=N&dbid=948e83e39159170301917906009a496a', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918d35cdab1dbb',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table2cea758fe421f049a6ba09f1e14245ec6104').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton867f169b4d3648405b6808826207fe8d02fa').bind('click',function() {                           
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
	        var colModels =$('#table2cea758fe421f049a6ba09f1e14245ec6104').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table2cea758fe421f049a6ba09f1e14245ec6104KeyWordIn;                          
	        expSearchParams.param = table2cea758fe421f049a6ba09f1e14245ec6104ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-群众经济技术5';                             
	        expSearchParams.viewid='948e83e3918c4fb001918d35cdab1dbb';                                   
	        expSearchParams.tableid='table2cea758fe421f049a6ba09f1e14245ec6104';                                 
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
