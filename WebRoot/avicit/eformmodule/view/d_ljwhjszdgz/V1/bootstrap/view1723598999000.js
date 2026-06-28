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

function redraw948e83e39115f6b001914aabd57051f7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39115f6b001914aabd57051f7").width();
		var win_height = $("#948e83e39115f6b001914aabd57051f7").height();
		$('#948e83e39115f6b001914aabd57051f7').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39115f6b001914aabd57051f7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39115f6b001914aabd57051f7").width();
	setTimeout(function(){redraw948e83e39115f6b001914aabd57051f7(win_width);},500);
});
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5KeyWordIn = "";    
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5ParamIn = "";    
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5SelectRow = {     
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5LoadComplete = {     
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5BeforeEditCell = {        
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5OndblClickRow = {     
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5OnRightClickRow = {     
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5GridComplete = {     
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5OnCellSelect = {     
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
var tabled681a5b57d7ecc45d62aabe6c85308fb07a5LoadBeforeSend = {        
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
function tabled681a5b57d7ecc45d62aabe6c85308fb07a5Reload(pid){
	var _isInvalid = true;
	$("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabled681a5b57d7ecc45d62aabe6c85308fb07a5Pid = pid;
		}
		return false;
	}
	window.tabled681a5b57d7ecc45d62aabe6c85308fb07a5Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tabled681a5b57d7ecc45d62aabe6c85308fb07a5TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabled681a5b57d7ecc45d62aabe6c85308fb07a5Pid == 'undefined' || window.tabled681a5b57d7ecc45d62aabe6c85308fb07a5Pid!=null){
tabled681a5b57d7ecc45d62aabe6c85308fb07a5Reload(window.tabled681a5b57d7ecc45d62aabe6c85308fb07a5Pid);
}
}
var tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5 = [];
var uniqueColtabled681a5b57d7ecc45d62aabe6c85308fb07a5 = [];
var uniqueColTitletabled681a5b57d7ecc45d62aabe6c85308fb07a5 = [];
var defaultValuetabled681a5b57d7ecc45d62aabe6c85308fb07a5 = {};
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '季度',hidden:false, name: 'D_JD',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '工作分类',hidden:false, name: 'D_GZFL',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '主要内容',hidden:false, name: 'D_ZYNR',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '内容分解',hidden:false, name: 'D_NRFJ',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '完成时间',hidden:false, name: 'D_WCSJ',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '载体形式',hidden:false, name: 'D_ZTXS',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '二季度完成情况',hidden:false, name: 'D_EJD_WCQK',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '备注',hidden:false, name: 'D_BZ',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39115f6b001914aabd57051f7/tabled681a5b57d7ecc45d62aabe6c85308fb07a5/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabled681a5b57d7ecc45d62aabe6c85308fb07a5,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabled681a5b57d7ecc45d62aabe6c85308fb07a5SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabled681a5b57d7ecc45d62aabe6c85308fb07a5LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabled681a5b57d7ecc45d62aabe6c85308fb07a5OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabled681a5b57d7ecc45d62aabe6c85308fb07a5OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabled681a5b57d7ecc45d62aabe6c85308fb07a5GridComplete.exec();
				    setTimeout(function(){var height = $("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5").closest('.ui-jqgrid-bdiv').height();
					$("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords img").css("width","120px");
                 }else{
					    $("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabled681a5b57d7ecc45d62aabe6c85308fb07a5BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabled681a5b57d7ecc45d62aabe6c85308fb07a5OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords").hide();
		   	    $("#Pagertabled681a5b57d7ecc45d62aabe6c85308fb07a5_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords").html() == null) {
						$("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5").parent().append("<div class='no_data' id='tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabled681a5b57d7ecc45d62aabe6c85308fb07a5norecords").show();
					$("#Pagertabled681a5b57d7ecc45d62aabe6c85308fb07a5_left").css("display", "none");
				}
tabled681a5b57d7ecc45d62aabe6c85308fb07a5LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabled681a5b57d7ecc45d62aabe6c85308fb07a5"
    });
tabled681a5b57d7ecc45d62aabe6c85308fb07a5Reload();
$("#t_tabled681a5b57d7ecc45d62aabe6c85308fb07a5").append($("#tableToolbartabled681a5b57d7ecc45d62aabe6c85308fb07a5"));$("#tableToolbarButton01218045e9420342391a7f0d462cdafe0afb").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914aaa5c6e51c5&grid=tabled681a5b57d7ecc45d62aabe6c85308fb07a5',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonc2c03cf16921c346814bedf3a66e37aeb2dd").bind('click',function() {                                                                                       
	var ids = $('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914aaa5c6e51c5&id=' + rowData.ID+'&grid=tabled681a5b57d7ecc45d62aabe6c85308fb07a5',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonbae5f865e97d9f486ac9a6c56cf95755ebdc").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_LJWHJSZDGZ&isbpm=N&dbid=948e83e39106cf160191075ccfc529d4', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39115f6b001914aabd57051f7',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton7fe99565fbf58047bcc8ee7b4dca05700a5b").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_ljwhjszdgz', callBackFunc: function () {                           	
		$('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton286eb009b1f09847a34841ba5e4347ddf5fb').bind('click',function() {                           
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
	        var colModels =$('#tabled681a5b57d7ecc45d62aabe6c85308fb07a5').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tabled681a5b57d7ecc45d62aabe6c85308fb07a5KeyWordIn;                          
	        expSearchParams.param = tabled681a5b57d7ecc45d62aabe6c85308fb07a5ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_廉洁文化建设重点工作';                             
	        expSearchParams.viewid='948e83e39115f6b001914aabd57051f7';                                   
	        expSearchParams.tableid='tabled681a5b57d7ecc45d62aabe6c85308fb07a5';                                 
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
;});	 
