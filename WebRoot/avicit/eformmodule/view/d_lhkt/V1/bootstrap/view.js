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

function redraw948e83e39115f6b001914ab2f5c3527b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39115f6b001914ab2f5c3527b").width();
		var win_height = $("#948e83e39115f6b001914ab2f5c3527b").height();
		$('#948e83e39115f6b001914ab2f5c3527b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39115f6b001914ab2f5c3527b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39115f6b001914ab2f5c3527b").width();
	setTimeout(function(){redraw948e83e39115f6b001914ab2f5c3527b(win_width);},500);
});
var table0654bd1743097b467fb9eec505fbb53149beKeyWordIn = "";    
var table0654bd1743097b467fb9eec505fbb53149beParamIn = "";    
var table0654bd1743097b467fb9eec505fbb53149beSelectRow = {     
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
var table0654bd1743097b467fb9eec505fbb53149beLoadComplete = {     
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
var table0654bd1743097b467fb9eec505fbb53149beBeforeEditCell = {        
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
var table0654bd1743097b467fb9eec505fbb53149beOndblClickRow = {     
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
var table0654bd1743097b467fb9eec505fbb53149beOnRightClickRow = {     
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
var table0654bd1743097b467fb9eec505fbb53149beGridComplete = {     
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
var table0654bd1743097b467fb9eec505fbb53149beOnCellSelect = {     
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
var table0654bd1743097b467fb9eec505fbb53149beLoadBeforeSend = {        
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
function table0654bd1743097b467fb9eec505fbb53149beReload(pid){
	var _isInvalid = true;
	$("#table0654bd1743097b467fb9eec505fbb53149be").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0654bd1743097b467fb9eec505fbb53149bePid = pid;
		}
		return false;
	}
	window.table0654bd1743097b467fb9eec505fbb53149bePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0654bd1743097b467fb9eec505fbb53149beTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0654bd1743097b467fb9eec505fbb53149bePid == 'undefined' || window.table0654bd1743097b467fb9eec505fbb53149bePid!=null){
table0654bd1743097b467fb9eec505fbb53149beReload(window.table0654bd1743097b467fb9eec505fbb53149bePid);
}
}
var tablecmtable0654bd1743097b467fb9eec505fbb53149be = [];
var uniqueColtable0654bd1743097b467fb9eec505fbb53149be = [];
var uniqueColTitletable0654bd1743097b467fb9eec505fbb53149be = [];
var defaultValuetable0654bd1743097b467fb9eec505fbb53149be = {};
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '领航题目',hidden:false, name: 'D_LHTM',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '发榜领航员',hidden:false, name: 'D_FBLHY',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '发榜单位',hidden:false, name: 'D_FBDW',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '领航挂帅人',hidden:false, name: 'D_LHGSR',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '领航导师',hidden:false, name: 'D_LHDS',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0654bd1743097b467fb9eec505fbb53149be.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table0654bd1743097b467fb9eec505fbb53149be").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39115f6b001914ab2f5c3527b/table0654bd1743097b467fb9eec505fbb53149be/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable0654bd1743097b467fb9eec505fbb53149be,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0654bd1743097b467fb9eec505fbb53149beSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0654bd1743097b467fb9eec505fbb53149beLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0654bd1743097b467fb9eec505fbb53149beOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0654bd1743097b467fb9eec505fbb53149beOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0654bd1743097b467fb9eec505fbb53149beGridComplete.exec();
				    setTimeout(function(){var height = $("#table0654bd1743097b467fb9eec505fbb53149be").closest('.ui-jqgrid-bdiv').height();
					$("#table0654bd1743097b467fb9eec505fbb53149benorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0654bd1743097b467fb9eec505fbb53149benorecords img").css("width","120px");
                 }else{
					    $("#table0654bd1743097b467fb9eec505fbb53149benorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0654bd1743097b467fb9eec505fbb53149beBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0654bd1743097b467fb9eec505fbb53149beOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0654bd1743097b467fb9eec505fbb53149benorecords").hide();
		   	    $("#Pagertable0654bd1743097b467fb9eec505fbb53149be_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0654bd1743097b467fb9eec505fbb53149be").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0654bd1743097b467fb9eec505fbb53149be").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0654bd1743097b467fb9eec505fbb53149benorecords").html() == null) {
						$("#table0654bd1743097b467fb9eec505fbb53149be").parent().append("<div class='no_data' id='table0654bd1743097b467fb9eec505fbb53149benorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0654bd1743097b467fb9eec505fbb53149benorecords").show();
					$("#Pagertable0654bd1743097b467fb9eec505fbb53149be_left").css("display", "none");
				}
table0654bd1743097b467fb9eec505fbb53149beLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0654bd1743097b467fb9eec505fbb53149be"
    });
table0654bd1743097b467fb9eec505fbb53149beReload();
$("#t_table0654bd1743097b467fb9eec505fbb53149be").append($("#tableToolbartable0654bd1743097b467fb9eec505fbb53149be"));$("#tableToolbarButtonff1b14cfb6c87b4c8c5abc7697abda94bee7").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914ab1e7f15257&grid=table0654bd1743097b467fb9eec505fbb53149be',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton65377c168626ae46b72885a05791d3c997e1").bind('click',function() {                                                                                       
	var ids = $('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914ab1e7f15257&id=' + rowData.ID+'&grid=table0654bd1743097b467fb9eec505fbb53149be',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtond4eed6d1b073624ad689bc9aac0307885262").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_LHKT&isbpm=N&dbid=948e83e39106cf160191075d35b72a2a', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39115f6b001914ab2f5c3527b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table0654bd1743097b467fb9eec505fbb53149be').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton07b2d7bf2b13ce481dc8be009933214b0e3e").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_lhkt', callBackFunc: function () {                           	
		$('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton5cb1eba83fc2ae4375581901b74b712aa0ec').bind('click',function() {                           
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
	        var colModels =$('#table0654bd1743097b467fb9eec505fbb53149be').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table0654bd1743097b467fb9eec505fbb53149beKeyWordIn;                          
	        expSearchParams.param = table0654bd1743097b467fb9eec505fbb53149beParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_领航课题';                             
	        expSearchParams.viewid='948e83e39115f6b001914ab2f5c3527b';                                   
	        expSearchParams.tableid='table0654bd1743097b467fb9eec505fbb53149be';                                 
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
