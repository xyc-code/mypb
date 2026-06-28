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

function redraw948e83e39115f6b001914e91f4ec64a1(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39115f6b001914e91f4ec64a1").width();
		var win_height = $("#948e83e39115f6b001914e91f4ec64a1").height();
		$('#948e83e39115f6b001914e91f4ec64a1').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39115f6b001914e91f4ec64a1').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39115f6b001914e91f4ec64a1").width();
	setTimeout(function(){redraw948e83e39115f6b001914e91f4ec64a1(win_width);},500);
});
var table18627c79d12f904ba88883944afdb9bd876dKeyWordIn = "";    
var table18627c79d12f904ba88883944afdb9bd876dParamIn = "";    
var table18627c79d12f904ba88883944afdb9bd876dSelectRow = {     
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
var table18627c79d12f904ba88883944afdb9bd876dLoadComplete = {     
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
var table18627c79d12f904ba88883944afdb9bd876dBeforeEditCell = {        
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
var table18627c79d12f904ba88883944afdb9bd876dOndblClickRow = {     
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
var table18627c79d12f904ba88883944afdb9bd876dOnRightClickRow = {     
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
var table18627c79d12f904ba88883944afdb9bd876dGridComplete = {     
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
var table18627c79d12f904ba88883944afdb9bd876dOnCellSelect = {     
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
var table18627c79d12f904ba88883944afdb9bd876dLoadBeforeSend = {        
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
function table18627c79d12f904ba88883944afdb9bd876dReload(pid){
	var _isInvalid = true;
	$("#table18627c79d12f904ba88883944afdb9bd876d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table18627c79d12f904ba88883944afdb9bd876dPid = pid;
		}
		return false;
	}
	window.table18627c79d12f904ba88883944afdb9bd876dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table18627c79d12f904ba88883944afdb9bd876dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table18627c79d12f904ba88883944afdb9bd876dPid == 'undefined' || window.table18627c79d12f904ba88883944afdb9bd876dPid!=null){
table18627c79d12f904ba88883944afdb9bd876dReload(window.table18627c79d12f904ba88883944afdb9bd876dPid);
}
}
var tablecmtable18627c79d12f904ba88883944afdb9bd876d = [];
var uniqueColtable18627c79d12f904ba88883944afdb9bd876d = [];
var uniqueColTitletable18627c79d12f904ba88883944afdb9bd876d = [];
var defaultValuetable18627c79d12f904ba88883944afdb9bd876d = {};
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '党支部名称',hidden:false, name: 'D_DZBMC',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '姓名',hidden:false, name: 'D_XM',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '出生年月',hidden:false, name: 'D_CSNY',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '文化程度',hidden:false, name: 'D_WHCD',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '现任职务',hidden:false, name: 'D_XRZW',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '参加工作时间',hidden:false, name: 'D_CJGZSJ',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '入党时间',hidden:false, name: 'D_RDSJ',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '转正大会时间',hidden:false, name: 'D_ZZDHSJ',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable18627c79d12f904ba88883944afdb9bd876d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table18627c79d12f904ba88883944afdb9bd876d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39115f6b001914e91f4ec64a1/table18627c79d12f904ba88883944afdb9bd876d/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable18627c79d12f904ba88883944afdb9bd876d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table18627c79d12f904ba88883944afdb9bd876dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table18627c79d12f904ba88883944afdb9bd876dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table18627c79d12f904ba88883944afdb9bd876dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table18627c79d12f904ba88883944afdb9bd876dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table18627c79d12f904ba88883944afdb9bd876dGridComplete.exec();
				    setTimeout(function(){var height = $("#table18627c79d12f904ba88883944afdb9bd876d").closest('.ui-jqgrid-bdiv').height();
					$("#table18627c79d12f904ba88883944afdb9bd876dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table18627c79d12f904ba88883944afdb9bd876dnorecords img").css("width","120px");
                 }else{
					    $("#table18627c79d12f904ba88883944afdb9bd876dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table18627c79d12f904ba88883944afdb9bd876dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table18627c79d12f904ba88883944afdb9bd876dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table18627c79d12f904ba88883944afdb9bd876dnorecords").hide();
		   	    $("#Pagertable18627c79d12f904ba88883944afdb9bd876d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table18627c79d12f904ba88883944afdb9bd876d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table18627c79d12f904ba88883944afdb9bd876d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table18627c79d12f904ba88883944afdb9bd876dnorecords").html() == null) {
						$("#table18627c79d12f904ba88883944afdb9bd876d").parent().append("<div class='no_data' id='table18627c79d12f904ba88883944afdb9bd876dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table18627c79d12f904ba88883944afdb9bd876dnorecords").show();
					$("#Pagertable18627c79d12f904ba88883944afdb9bd876d_left").css("display", "none");
				}
table18627c79d12f904ba88883944afdb9bd876dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable18627c79d12f904ba88883944afdb9bd876d"
    });
table18627c79d12f904ba88883944afdb9bd876dReload();
$("#t_table18627c79d12f904ba88883944afdb9bd876d").append($("#tableToolbartable18627c79d12f904ba88883944afdb9bd876d"));$("#tableToolbarButton82cd157c9e5347439408482de7300911f539").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914e917f966488&grid=table18627c79d12f904ba88883944afdb9bd876d',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton6fab16b4fe65da49b9b8e97301001d89f94d").bind('click',function() {                                                                                       
	var ids = $('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914e917f966488&id=' + rowData.ID+'&grid=table18627c79d12f904ba88883944afdb9bd876d',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonec37d0788d563b40727aef89398f6283f647").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_YBDYZZ&isbpm=N&dbid=948e83e39106cf160191075db59e2a31', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39115f6b001914e91f4ec64a1',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table18627c79d12f904ba88883944afdb9bd876d').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton861111920f1a8549e1eb14d0a5fa92a410d0").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_ybdyzz', callBackFunc: function () {                           	
		$('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton5d9bbf042f545746faa8bbac74d60682fe69').bind('click',function() {                           
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
	        var colModels =$('#table18627c79d12f904ba88883944afdb9bd876d').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table18627c79d12f904ba88883944afdb9bd876dKeyWordIn;                          
	        expSearchParams.param = table18627c79d12f904ba88883944afdb9bd876dParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_预备党员转正';                             
	        expSearchParams.viewid='948e83e39115f6b001914e91f4ec64a1';                                   
	        expSearchParams.tableid='table18627c79d12f904ba88883944afdb9bd876d';                                 
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
