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

function redraw948e83e3918c4fb001918c992c230ea5(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918c992c230ea5").width();
		var win_height = $("#948e83e3918c4fb001918c992c230ea5").height();
		$('#948e83e3918c4fb001918c992c230ea5').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918c992c230ea5').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918c992c230ea5").width();
	setTimeout(function(){redraw948e83e3918c4fb001918c992c230ea5(win_width);},500);
});
var table76f9b092cc701c4504eb7f8394065b981ebfKeyWordIn = "";    
var table76f9b092cc701c4504eb7f8394065b981ebfParamIn = "";    
var table76f9b092cc701c4504eb7f8394065b981ebfSelectRow = {     
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
var table76f9b092cc701c4504eb7f8394065b981ebfLoadComplete = {     
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
var table76f9b092cc701c4504eb7f8394065b981ebfBeforeEditCell = {        
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
var table76f9b092cc701c4504eb7f8394065b981ebfOndblClickRow = {     
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
var table76f9b092cc701c4504eb7f8394065b981ebfOnRightClickRow = {     
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
var table76f9b092cc701c4504eb7f8394065b981ebfGridComplete = {     
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
var table76f9b092cc701c4504eb7f8394065b981ebfOnCellSelect = {     
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
var table76f9b092cc701c4504eb7f8394065b981ebfLoadBeforeSend = {        
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
function table76f9b092cc701c4504eb7f8394065b981ebfReload(pid){
	var _isInvalid = true;
	$("#table76f9b092cc701c4504eb7f8394065b981ebf").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table76f9b092cc701c4504eb7f8394065b981ebfPid = pid;
		}
		return false;
	}
	window.table76f9b092cc701c4504eb7f8394065b981ebfPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table76f9b092cc701c4504eb7f8394065b981ebfTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table76f9b092cc701c4504eb7f8394065b981ebfPid == 'undefined' || window.table76f9b092cc701c4504eb7f8394065b981ebfPid!=null){
table76f9b092cc701c4504eb7f8394065b981ebfReload(window.table76f9b092cc701c4504eb7f8394065b981ebfPid);
}
}
var tablecmtable76f9b092cc701c4504eb7f8394065b981ebf = [];
var uniqueColtable76f9b092cc701c4504eb7f8394065b981ebf = [];
var uniqueColTitletable76f9b092cc701c4504eb7f8394065b981ebf = [];
var defaultValuetable76f9b092cc701c4504eb7f8394065b981ebf = {};
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '类别',hidden:false, name: 'LB',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '案由标题',hidden:false, name: 'AYBT',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '问题描述',hidden:false, name: 'WTMS',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '解决办法或措施',hidden:false, name: 'JJBFHCS',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable76f9b092cc701c4504eb7f8394065b981ebf.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table76f9b092cc701c4504eb7f8394065b981ebf").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918c992c230ea5/table76f9b092cc701c4504eb7f8394065b981ebf/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable76f9b092cc701c4504eb7f8394065b981ebf,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table76f9b092cc701c4504eb7f8394065b981ebfSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table76f9b092cc701c4504eb7f8394065b981ebfLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table76f9b092cc701c4504eb7f8394065b981ebfOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table76f9b092cc701c4504eb7f8394065b981ebfOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table76f9b092cc701c4504eb7f8394065b981ebfGridComplete.exec();
				    setTimeout(function(){var height = $("#table76f9b092cc701c4504eb7f8394065b981ebf").closest('.ui-jqgrid-bdiv').height();
					$("#table76f9b092cc701c4504eb7f8394065b981ebfnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table76f9b092cc701c4504eb7f8394065b981ebfnorecords img").css("width","120px");
                 }else{
					    $("#table76f9b092cc701c4504eb7f8394065b981ebfnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table76f9b092cc701c4504eb7f8394065b981ebfBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table76f9b092cc701c4504eb7f8394065b981ebfOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table76f9b092cc701c4504eb7f8394065b981ebfnorecords").hide();
		   	    $("#Pagertable76f9b092cc701c4504eb7f8394065b981ebf_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table76f9b092cc701c4504eb7f8394065b981ebf").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table76f9b092cc701c4504eb7f8394065b981ebf").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table76f9b092cc701c4504eb7f8394065b981ebfnorecords").html() == null) {
						$("#table76f9b092cc701c4504eb7f8394065b981ebf").parent().append("<div class='no_data' id='table76f9b092cc701c4504eb7f8394065b981ebfnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table76f9b092cc701c4504eb7f8394065b981ebfnorecords").show();
					$("#Pagertable76f9b092cc701c4504eb7f8394065b981ebf_left").css("display", "none");
				}
table76f9b092cc701c4504eb7f8394065b981ebfLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable76f9b092cc701c4504eb7f8394065b981ebf"
    });
table76f9b092cc701c4504eb7f8394065b981ebfReload();
$("#t_table76f9b092cc701c4504eb7f8394065b981ebf").append($("#tableToolbartable76f9b092cc701c4504eb7f8394065b981ebf"));$("#tableToolbarButtonb96c7287b56ccb43327b5a8bbfcbe9eef512").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918c9881880e94&grid=table76f9b092cc701c4504eb7f8394065b981ebf',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton0d689cba6758de47d718590aa1ed1e6db3e4").bind('click',function() {                                                                                       
	var ids = $('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918c9881880e94&id=' + rowData.ID+'&grid=table76f9b092cc701c4504eb7f8394065b981ebf',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtondac145917741274060c839312de0bba4bd23").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GZGZ_ZDHTA&isbpm=N&dbid=948e83e391591703019178e615fd4726', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918c992c230ea5',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table76f9b092cc701c4504eb7f8394065b981ebf').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtonb9eae2df5c7ab746a18ab37a4b0b05f590e5').bind('click',function() {                           
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
	        var colModels =$('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table76f9b092cc701c4504eb7f8394065b981ebfKeyWordIn;                          
	        expSearchParams.param = table76f9b092cc701c4504eb7f8394065b981ebfParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-职代会提案';                             
	        expSearchParams.viewid='948e83e3918c4fb001918c992c230ea5';                                   
	        expSearchParams.tableid='table76f9b092cc701c4504eb7f8394065b981ebf';                                 
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
$("#tableToolbarButton8be939703bd97c4497990d05c706a98d5c19").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zdhta', callBackFunc: function () {                           	
		$('#table76f9b092cc701c4504eb7f8394065b981ebf').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
