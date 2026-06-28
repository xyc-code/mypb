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

function redraw948e83e391927ff30191d537c7ea54f4(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d537c7ea54f4").width();
		var win_height = $("#948e83e391927ff30191d537c7ea54f4").height();
		$('#948e83e391927ff30191d537c7ea54f4').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d537c7ea54f4').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d537c7ea54f4").width();
	setTimeout(function(){redraw948e83e391927ff30191d537c7ea54f4(win_width);},500);
});
var tableb05c97374ba29848694a3e912e0f6c610f7eKeyWordIn = "";    
var tableb05c97374ba29848694a3e912e0f6c610f7eParamIn = "";    
var tableb05c97374ba29848694a3e912e0f6c610f7eSelectRow = {     
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
var tableb05c97374ba29848694a3e912e0f6c610f7eLoadComplete = {     
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
var tableb05c97374ba29848694a3e912e0f6c610f7eBeforeEditCell = {        
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
var tableb05c97374ba29848694a3e912e0f6c610f7eOndblClickRow = {     
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
var tableb05c97374ba29848694a3e912e0f6c610f7eOnRightClickRow = {     
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
var tableb05c97374ba29848694a3e912e0f6c610f7eGridComplete = {     
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
var tableb05c97374ba29848694a3e912e0f6c610f7eOnCellSelect = {     
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
var tableb05c97374ba29848694a3e912e0f6c610f7eLoadBeforeSend = {        
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
function tableb05c97374ba29848694a3e912e0f6c610f7eReload(pid){
	var _isInvalid = true;
	$("#tableb05c97374ba29848694a3e912e0f6c610f7e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb05c97374ba29848694a3e912e0f6c610f7ePid = pid;
		}
		return false;
	}
	window.tableb05c97374ba29848694a3e912e0f6c610f7ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableb05c97374ba29848694a3e912e0f6c610f7eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb05c97374ba29848694a3e912e0f6c610f7ePid == 'undefined' || window.tableb05c97374ba29848694a3e912e0f6c610f7ePid!=null){
tableb05c97374ba29848694a3e912e0f6c610f7eReload(window.tableb05c97374ba29848694a3e912e0f6c610f7ePid);
}
}
var tablecmtableb05c97374ba29848694a3e912e0f6c610f7e = [];
var uniqueColtableb05c97374ba29848694a3e912e0f6c610f7e = [];
var uniqueColTitletableb05c97374ba29848694a3e912e0f6c610f7e = [];
var defaultValuetableb05c97374ba29848694a3e912e0f6c610f7e = {};
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '工会小组名称',hidden:false, name: 'GHXZMC',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '小组会员人数',hidden:false, name: 'XZHYRS',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '工会小组长姓名',hidden:false, name: 'GHXZZXM',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '选举日期',hidden:false, name: 'XJRQ',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb05c97374ba29848694a3e912e0f6c610f7e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableb05c97374ba29848694a3e912e0f6c610f7e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d537c7ea54f4/tableb05c97374ba29848694a3e912e0f6c610f7e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb05c97374ba29848694a3e912e0f6c610f7e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb05c97374ba29848694a3e912e0f6c610f7eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb05c97374ba29848694a3e912e0f6c610f7eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb05c97374ba29848694a3e912e0f6c610f7eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb05c97374ba29848694a3e912e0f6c610f7eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb05c97374ba29848694a3e912e0f6c610f7eGridComplete.exec();
				    setTimeout(function(){var height = $("#tableb05c97374ba29848694a3e912e0f6c610f7e").closest('.ui-jqgrid-bdiv').height();
					$("#tableb05c97374ba29848694a3e912e0f6c610f7enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb05c97374ba29848694a3e912e0f6c610f7enorecords img").css("width","120px");
                 }else{
					    $("#tableb05c97374ba29848694a3e912e0f6c610f7enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb05c97374ba29848694a3e912e0f6c610f7eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb05c97374ba29848694a3e912e0f6c610f7eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb05c97374ba29848694a3e912e0f6c610f7enorecords").hide();
		   	    $("#Pagertableb05c97374ba29848694a3e912e0f6c610f7e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb05c97374ba29848694a3e912e0f6c610f7e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb05c97374ba29848694a3e912e0f6c610f7e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb05c97374ba29848694a3e912e0f6c610f7enorecords").html() == null) {
						$("#tableb05c97374ba29848694a3e912e0f6c610f7e").parent().append("<div class='no_data' id='tableb05c97374ba29848694a3e912e0f6c610f7enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb05c97374ba29848694a3e912e0f6c610f7enorecords").show();
					$("#Pagertableb05c97374ba29848694a3e912e0f6c610f7e_left").css("display", "none");
				}
tableb05c97374ba29848694a3e912e0f6c610f7eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb05c97374ba29848694a3e912e0f6c610f7e"
    });
tableb05c97374ba29848694a3e912e0f6c610f7eReload();
$("#t_tableb05c97374ba29848694a3e912e0f6c610f7e").append($("#tableToolbartableb05c97374ba29848694a3e912e0f6c610f7e"));$("#tableToolbarButton97b70bfc8055124d2bc9964c6abf953824e9").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d5377d8254e1&grid=tableb05c97374ba29848694a3e912e0f6c610f7e',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton3e478f5856e3d14f8ce87dd79cfb22b1d89f").bind('click',function() {                                                                                       
	var ids = $('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d5377d8254e1&id=' + rowData.ID+'&grid=tableb05c97374ba29848694a3e912e0f6c610f7e',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonad5bd65a393bd7472cb8ba55f3771ec76cfb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_GHXZ&isbpm=N&dbid=948e83e391927ff30191d48ce3641573', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d537c7ea54f4',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableb05c97374ba29848694a3e912e0f6c610f7e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton5dbbc416afa2d24cecf96ea2a86e2df95f32').bind('click',function() {                           
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
	        var colModels =$('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableb05c97374ba29848694a3e912e0f6c610f7eKeyWordIn;                          
	        expSearchParams.param = tableb05c97374ba29848694a3e912e0f6c610f7eParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_工会小组';                             
	        expSearchParams.viewid='948e83e391927ff30191d537c7ea54f4';                                   
	        expSearchParams.tableid='tableb05c97374ba29848694a3e912e0f6c610f7e';                                 
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
$("#tableToolbarButton7be7817a4844704b41982c31fd949ec5f85a").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zzmg_ghxz', callBackFunc: function () {                           	
		$('#tableb05c97374ba29848694a3e912e0f6c610f7e').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
