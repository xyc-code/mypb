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

function redraw948e83e391927ff30191a12288b30cb2(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a12288b30cb2").width();
		var win_height = $("#948e83e391927ff30191a12288b30cb2").height();
		$('#948e83e391927ff30191a12288b30cb2').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a12288b30cb2').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a12288b30cb2").width();
	setTimeout(function(){redraw948e83e391927ff30191a12288b30cb2(win_width);},500);
});
var tablebb2739201e2cf74b822966d00e03a5e65496KeyWordIn = "";    
var tablebb2739201e2cf74b822966d00e03a5e65496ParamIn = "";    
var tablebb2739201e2cf74b822966d00e03a5e65496SelectRow = {     
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
var tablebb2739201e2cf74b822966d00e03a5e65496LoadComplete = {     
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
var tablebb2739201e2cf74b822966d00e03a5e65496BeforeEditCell = {        
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
var tablebb2739201e2cf74b822966d00e03a5e65496OndblClickRow = {     
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
var tablebb2739201e2cf74b822966d00e03a5e65496OnRightClickRow = {     
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
var tablebb2739201e2cf74b822966d00e03a5e65496GridComplete = {     
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
var tablebb2739201e2cf74b822966d00e03a5e65496OnCellSelect = {     
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
var tablebb2739201e2cf74b822966d00e03a5e65496LoadBeforeSend = {        
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
function tablebb2739201e2cf74b822966d00e03a5e65496Reload(pid){
	var _isInvalid = true;
	$("#tablebb2739201e2cf74b822966d00e03a5e65496").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablebb2739201e2cf74b822966d00e03a5e65496Pid = pid;
		}
		return false;
	}
	window.tablebb2739201e2cf74b822966d00e03a5e65496Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablebb2739201e2cf74b822966d00e03a5e65496').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablebb2739201e2cf74b822966d00e03a5e65496TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablebb2739201e2cf74b822966d00e03a5e65496Pid == 'undefined' || window.tablebb2739201e2cf74b822966d00e03a5e65496Pid!=null){
tablebb2739201e2cf74b822966d00e03a5e65496Reload(window.tablebb2739201e2cf74b822966d00e03a5e65496Pid);
}
}
var tablecmtablebb2739201e2cf74b822966d00e03a5e65496 = [];
var uniqueColtablebb2739201e2cf74b822966d00e03a5e65496 = [];
var uniqueColTitletablebb2739201e2cf74b822966d00e03a5e65496 = [];
var defaultValuetablebb2739201e2cf74b822966d00e03a5e65496 = {};
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '年份',hidden:false, name: 'NF',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '内容',hidden:false, name: 'NR',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablebb2739201e2cf74b822966d00e03a5e65496.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablebb2739201e2cf74b822966d00e03a5e65496").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a12288b30cb2/tablebb2739201e2cf74b822966d00e03a5e65496/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablebb2739201e2cf74b822966d00e03a5e65496,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablebb2739201e2cf74b822966d00e03a5e65496SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablebb2739201e2cf74b822966d00e03a5e65496LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablebb2739201e2cf74b822966d00e03a5e65496OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablebb2739201e2cf74b822966d00e03a5e65496OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablebb2739201e2cf74b822966d00e03a5e65496GridComplete.exec();
				    setTimeout(function(){var height = $("#tablebb2739201e2cf74b822966d00e03a5e65496").closest('.ui-jqgrid-bdiv').height();
					$("#tablebb2739201e2cf74b822966d00e03a5e65496norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablebb2739201e2cf74b822966d00e03a5e65496norecords img").css("width","120px");
                 }else{
					    $("#tablebb2739201e2cf74b822966d00e03a5e65496norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablebb2739201e2cf74b822966d00e03a5e65496BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablebb2739201e2cf74b822966d00e03a5e65496OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablebb2739201e2cf74b822966d00e03a5e65496norecords").hide();
		   	    $("#Pagertablebb2739201e2cf74b822966d00e03a5e65496_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablebb2739201e2cf74b822966d00e03a5e65496").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablebb2739201e2cf74b822966d00e03a5e65496").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablebb2739201e2cf74b822966d00e03a5e65496norecords").html() == null) {
						$("#tablebb2739201e2cf74b822966d00e03a5e65496").parent().append("<div class='no_data' id='tablebb2739201e2cf74b822966d00e03a5e65496norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablebb2739201e2cf74b822966d00e03a5e65496norecords").show();
					$("#Pagertablebb2739201e2cf74b822966d00e03a5e65496_left").css("display", "none");
				}
tablebb2739201e2cf74b822966d00e03a5e65496LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablebb2739201e2cf74b822966d00e03a5e65496"
    });
tablebb2739201e2cf74b822966d00e03a5e65496Reload();
$("#t_tablebb2739201e2cf74b822966d00e03a5e65496").append($("#tableToolbartablebb2739201e2cf74b822966d00e03a5e65496"));$("#tableToolbarButton094c098aa99ea54b1f5893082924a3220a82").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a12214990ca4&grid=tablebb2739201e2cf74b822966d00e03a5e65496',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton2434fe82371ca743b6082a4da6ac67424fdb").bind('click',function() {                                                                                       
	var ids = $('#tablebb2739201e2cf74b822966d00e03a5e65496').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablebb2739201e2cf74b822966d00e03a5e65496').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a12214990ca4&id=' + rowData.ID+'&grid=tablebb2739201e2cf74b822966d00e03a5e65496',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton515282f7a2921f4b7aa8be6c6c0b7b402050").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablebb2739201e2cf74b822966d00e03a5e65496').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablebb2739201e2cf74b822966d00e03a5e65496').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_XCSX_YSXT&isbpm=N&dbid=948e83e391927ff30191a11694e20b7c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a12288b30cb2',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablebb2739201e2cf74b822966d00e03a5e65496').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtonef3da16789e1b7485128e03c70b32410e815').bind('click',function() {                           
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
	        var colModels =$('#tablebb2739201e2cf74b822966d00e03a5e65496').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablebb2739201e2cf74b822966d00e03a5e65496KeyWordIn;                          
	        expSearchParams.param = tablebb2739201e2cf74b822966d00e03a5e65496ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='宣传思想_意识形态';                             
	        expSearchParams.viewid='948e83e391927ff30191a12288b30cb2';                                   
	        expSearchParams.tableid='tablebb2739201e2cf74b822966d00e03a5e65496';                                 
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
