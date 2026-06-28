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

function redraw948e83e391927ff30191a148ff5c1c19(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a148ff5c1c19").width();
		var win_height = $("#948e83e391927ff30191a148ff5c1c19").height();
		$('#948e83e391927ff30191a148ff5c1c19').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a148ff5c1c19').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a148ff5c1c19").width();
	setTimeout(function(){redraw948e83e391927ff30191a148ff5c1c19(win_width);},500);
});
var tablec8b3b19d1620244c9db80765032e8e0d7fe8KeyWordIn = "";    
var tablec8b3b19d1620244c9db80765032e8e0d7fe8ParamIn = "";    
var tablec8b3b19d1620244c9db80765032e8e0d7fe8SelectRow = {     
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8LoadComplete = {     
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8BeforeEditCell = {        
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8OndblClickRow = {     
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8OnRightClickRow = {     
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8GridComplete = {     
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8OnCellSelect = {     
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
var tablec8b3b19d1620244c9db80765032e8e0d7fe8LoadBeforeSend = {        
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
function tablec8b3b19d1620244c9db80765032e8e0d7fe8Reload(pid){
	var _isInvalid = true;
	$("#tablec8b3b19d1620244c9db80765032e8e0d7fe8").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablec8b3b19d1620244c9db80765032e8e0d7fe8Pid = pid;
		}
		return false;
	}
	window.tablec8b3b19d1620244c9db80765032e8e0d7fe8Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablec8b3b19d1620244c9db80765032e8e0d7fe8TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablec8b3b19d1620244c9db80765032e8e0d7fe8Pid == 'undefined' || window.tablec8b3b19d1620244c9db80765032e8e0d7fe8Pid!=null){
tablec8b3b19d1620244c9db80765032e8e0d7fe8Reload(window.tablec8b3b19d1620244c9db80765032e8e0d7fe8Pid);
}
}
var tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8 = [];
var uniqueColtablec8b3b19d1620244c9db80765032e8e0d7fe8 = [];
var uniqueColTitletablec8b3b19d1620244c9db80765032e8e0d7fe8 = [];
var defaultValuetablec8b3b19d1620244c9db80765032e8e0d7fe8 = {};
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '内容',hidden:false, name: 'NR',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '进展',hidden:false, name: 'JZ',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablec8b3b19d1620244c9db80765032e8e0d7fe8").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a148ff5c1c19/tablec8b3b19d1620244c9db80765032e8e0d7fe8/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablec8b3b19d1620244c9db80765032e8e0d7fe8,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablec8b3b19d1620244c9db80765032e8e0d7fe8SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablec8b3b19d1620244c9db80765032e8e0d7fe8LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablec8b3b19d1620244c9db80765032e8e0d7fe8OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablec8b3b19d1620244c9db80765032e8e0d7fe8OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablec8b3b19d1620244c9db80765032e8e0d7fe8GridComplete.exec();
				    setTimeout(function(){var height = $("#tablec8b3b19d1620244c9db80765032e8e0d7fe8").closest('.ui-jqgrid-bdiv').height();
					$("#tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords img").css("width","120px");
                 }else{
					    $("#tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablec8b3b19d1620244c9db80765032e8e0d7fe8BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablec8b3b19d1620244c9db80765032e8e0d7fe8OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords").hide();
		   	    $("#Pagertablec8b3b19d1620244c9db80765032e8e0d7fe8_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablec8b3b19d1620244c9db80765032e8e0d7fe8").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablec8b3b19d1620244c9db80765032e8e0d7fe8").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords").html() == null) {
						$("#tablec8b3b19d1620244c9db80765032e8e0d7fe8").parent().append("<div class='no_data' id='tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablec8b3b19d1620244c9db80765032e8e0d7fe8norecords").show();
					$("#Pagertablec8b3b19d1620244c9db80765032e8e0d7fe8_left").css("display", "none");
				}
tablec8b3b19d1620244c9db80765032e8e0d7fe8LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablec8b3b19d1620244c9db80765032e8e0d7fe8"
    });
tablec8b3b19d1620244c9db80765032e8e0d7fe8Reload();
$("#t_tablec8b3b19d1620244c9db80765032e8e0d7fe8").append($("#tableToolbartablec8b3b19d1620244c9db80765032e8e0d7fe8"));$("#tableToolbarButtonbe34ca0c1cf39046ecd96a99a71d84b4bcff").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a14880751c06&grid=tablec8b3b19d1620244c9db80765032e8e0d7fe8',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton43cf96a7a82aec43ac0b69f4575a433d87d3").bind('click',function() {                                                                                       
	var ids = $('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a14880751c06&id=' + rowData.ID+'&grid=tablec8b3b19d1620244c9db80765032e8e0d7fe8',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonfcc2d4434ff42c42af88de4091e5159dfec8").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_SXZZYLB1&isbpm=N&dbid=948e83e391927ff301919773360747c0', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a148ff5c1c19',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton11b7f49a3eeba34cedb8fd9d734630fd1c98').bind('click',function() {                           
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
	        var colModels =$('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablec8b3b19d1620244c9db80765032e8e0d7fe8KeyWordIn;                          
	        expSearchParams.param = tablec8b3b19d1620244c9db80765032e8e0d7fe8ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_职工宣教文体-思想政治引领表1';                             
	        expSearchParams.viewid='948e83e391927ff30191a148ff5c1c19';                                   
	        expSearchParams.tableid='tablec8b3b19d1620244c9db80765032e8e0d7fe8';                                 
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
$("#tableToolbarButtonaca68de9d04ea7495798330020ab292929d0").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'sxzzylb1', callBackFunc: function () {                           	
		$('#tablec8b3b19d1620244c9db80765032e8e0d7fe8').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
