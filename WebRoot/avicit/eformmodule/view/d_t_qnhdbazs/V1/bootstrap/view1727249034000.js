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

function redraw948e83e39159170301916e5b35e43660(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39159170301916e5b35e43660").width();
		var win_height = $("#948e83e39159170301916e5b35e43660").height();
		$('#948e83e39159170301916e5b35e43660').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39159170301916e5b35e43660').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39159170301916e5b35e43660").width();
	setTimeout(function(){redraw948e83e39159170301916e5b35e43660(win_width);},500);
});
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cKeyWordIn = "";    
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cParamIn = "";    
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cSelectRow = {     
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cLoadComplete = {     
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cBeforeEditCell = {        
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cOndblClickRow = {     
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cOnRightClickRow = {     
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cGridComplete = {     
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cOnCellSelect = {     
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
var tablec67cb22a4ab01f48fc9abb1c0e8704a1733cLoadBeforeSend = {        
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
function tablec67cb22a4ab01f48fc9abb1c0e8704a1733cReload(pid){
	var _isInvalid = true;
	$("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablec67cb22a4ab01f48fc9abb1c0e8704a1733cPid = pid;
		}
		return false;
	}
	window.tablec67cb22a4ab01f48fc9abb1c0e8704a1733cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablec67cb22a4ab01f48fc9abb1c0e8704a1733cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablec67cb22a4ab01f48fc9abb1c0e8704a1733cPid == 'undefined' || window.tablec67cb22a4ab01f48fc9abb1c0e8704a1733cPid!=null){
tablec67cb22a4ab01f48fc9abb1c0e8704a1733cReload(window.tablec67cb22a4ab01f48fc9abb1c0e8704a1733cPid);
}
}
var tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c = [];
var uniqueColtablec67cb22a4ab01f48fc9abb1c0e8704a1733c = [];
var uniqueColTitletablec67cb22a4ab01f48fc9abb1c0e8704a1733c = [];
var defaultValuetablec67cb22a4ab01f48fc9abb1c0e8704a1733c = {};
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '总次数',hidden:false, name: 'ZCS',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '总人数',hidden:false, name: 'ZRS',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '总时长',hidden:false, name: 'ZSC',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39159170301916e5b35e43660/tablec67cb22a4ab01f48fc9abb1c0e8704a1733c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablec67cb22a4ab01f48fc9abb1c0e8704a1733c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablec67cb22a4ab01f48fc9abb1c0e8704a1733cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablec67cb22a4ab01f48fc9abb1c0e8704a1733cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablec67cb22a4ab01f48fc9abb1c0e8704a1733cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablec67cb22a4ab01f48fc9abb1c0e8704a1733cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablec67cb22a4ab01f48fc9abb1c0e8704a1733cGridComplete.exec();
				    setTimeout(function(){var height = $("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").closest('.ui-jqgrid-bdiv').height();
					$("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords img").css("width","120px");
                 }else{
					    $("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablec67cb22a4ab01f48fc9abb1c0e8704a1733cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablec67cb22a4ab01f48fc9abb1c0e8704a1733cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords").hide();
		   	    $("#Pagertablec67cb22a4ab01f48fc9abb1c0e8704a1733c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords").html() == null) {
						$("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").parent().append("<div class='no_data' id='tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablec67cb22a4ab01f48fc9abb1c0e8704a1733cnorecords").show();
					$("#Pagertablec67cb22a4ab01f48fc9abb1c0e8704a1733c_left").css("display", "none");
				}
tablec67cb22a4ab01f48fc9abb1c0e8704a1733cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablec67cb22a4ab01f48fc9abb1c0e8704a1733c"
    });
tablec67cb22a4ab01f48fc9abb1c0e8704a1733cReload();
$("#t_tablec67cb22a4ab01f48fc9abb1c0e8704a1733c").append($("#tableToolbartablec67cb22a4ab01f48fc9abb1c0e8704a1733c"));$("#tableToolbarButton2cdc96a521727b4b576a54683c6e29cb4df7").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e562ff4360d&grid=tablec67cb22a4ab01f48fc9abb1c0e8704a1733c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton0cf9b21c382c384c32cb2af45236fd5e4c06").bind('click',function() {                                                                                       
	var ids = $('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e562ff4360d&id=' + rowData.ID+'&grid=tablec67cb22a4ab01f48fc9abb1c0e8704a1733c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton234f2ae126ca0b481798280934f68816665e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_T_QNZYHDBA_ZS&isbpm=N&dbid=948e83e39159170301916e4ea68f3542', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39159170301916e5b35e43660',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtondd3f8921fdb4ef402498c79872944be2042c').bind('click',function() {                           
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
	        var colModels =$('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablec67cb22a4ab01f48fc9abb1c0e8704a1733cKeyWordIn;                          
	        expSearchParams.param = tablec67cb22a4ab01f48fc9abb1c0e8704a1733cParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_团委_青年志愿活动备案_总数';                             
	        expSearchParams.viewid='948e83e39159170301916e5b35e43660';                                   
	        expSearchParams.tableid='tablec67cb22a4ab01f48fc9abb1c0e8704a1733c';                                 
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
$("#tableToolbarButton2fa86de22ed9754ed048a1ee56467611f064").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zyhdbazs', callBackFunc: function () {                           	
		$('#tablec67cb22a4ab01f48fc9abb1c0e8704a1733c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
