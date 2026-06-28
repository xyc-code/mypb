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

function redraw948e83e39222228601923120894a4b72(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39222228601923120894a4b72").width();
		var win_height = $("#948e83e39222228601923120894a4b72").height();
		$('#948e83e39222228601923120894a4b72').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39222228601923120894a4b72').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39222228601923120894a4b72").width();
	setTimeout(function(){redraw948e83e39222228601923120894a4b72(win_width);},500);
});
var tablef4394ea8ea5d424605c8eeb772b53004890eKeyWordIn = "";    
var tablef4394ea8ea5d424605c8eeb772b53004890eParamIn = "";    
var tablef4394ea8ea5d424605c8eeb772b53004890eSelectRow = {     
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
var tablef4394ea8ea5d424605c8eeb772b53004890eLoadComplete = {     
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
var tablef4394ea8ea5d424605c8eeb772b53004890eBeforeEditCell = {        
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
var tablef4394ea8ea5d424605c8eeb772b53004890eOndblClickRow = {     
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
var tablef4394ea8ea5d424605c8eeb772b53004890eOnRightClickRow = {     
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
var tablef4394ea8ea5d424605c8eeb772b53004890eGridComplete = {     
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
var tablef4394ea8ea5d424605c8eeb772b53004890eOnCellSelect = {     
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
var tablef4394ea8ea5d424605c8eeb772b53004890eLoadBeforeSend = {        
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
function tablef4394ea8ea5d424605c8eeb772b53004890eReload(pid){
	var _isInvalid = true;
	$("#tablef4394ea8ea5d424605c8eeb772b53004890e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef4394ea8ea5d424605c8eeb772b53004890ePid = pid;
		}
		return false;
	}
	window.tablef4394ea8ea5d424605c8eeb772b53004890ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablef4394ea8ea5d424605c8eeb772b53004890eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef4394ea8ea5d424605c8eeb772b53004890ePid == 'undefined' || window.tablef4394ea8ea5d424605c8eeb772b53004890ePid!=null){
tablef4394ea8ea5d424605c8eeb772b53004890eReload(window.tablef4394ea8ea5d424605c8eeb772b53004890ePid);
}
}
var tablecmtablef4394ea8ea5d424605c8eeb772b53004890e = [];
var uniqueColtablef4394ea8ea5d424605c8eeb772b53004890e = [];
var uniqueColTitletablef4394ea8ea5d424605c8eeb772b53004890e = [];
var defaultValuetablef4394ea8ea5d424605c8eeb772b53004890e = {};
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '届次',hidden:false, name: 'JC',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '职务',hidden:false, name: 'ZW',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '出生年月',hidden:false, name: 'CSNY',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '文化程度',hidden:false, name: 'WHCD',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '职称',hidden:false, name: 'ZC',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '代表类别',hidden:false, name: 'DBLB',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef4394ea8ea5d424605c8eeb772b53004890e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablef4394ea8ea5d424605c8eeb772b53004890e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39222228601923120894a4b72/tablef4394ea8ea5d424605c8eeb772b53004890e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablef4394ea8ea5d424605c8eeb772b53004890e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef4394ea8ea5d424605c8eeb772b53004890eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef4394ea8ea5d424605c8eeb772b53004890eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef4394ea8ea5d424605c8eeb772b53004890eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef4394ea8ea5d424605c8eeb772b53004890eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef4394ea8ea5d424605c8eeb772b53004890eGridComplete.exec();
				    setTimeout(function(){var height = $("#tablef4394ea8ea5d424605c8eeb772b53004890e").closest('.ui-jqgrid-bdiv').height();
					$("#tablef4394ea8ea5d424605c8eeb772b53004890enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef4394ea8ea5d424605c8eeb772b53004890enorecords img").css("width","120px");
                 }else{
					    $("#tablef4394ea8ea5d424605c8eeb772b53004890enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef4394ea8ea5d424605c8eeb772b53004890eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef4394ea8ea5d424605c8eeb772b53004890eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef4394ea8ea5d424605c8eeb772b53004890enorecords").hide();
		   	    $("#Pagertablef4394ea8ea5d424605c8eeb772b53004890e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef4394ea8ea5d424605c8eeb772b53004890e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef4394ea8ea5d424605c8eeb772b53004890e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef4394ea8ea5d424605c8eeb772b53004890enorecords").html() == null) {
						$("#tablef4394ea8ea5d424605c8eeb772b53004890e").parent().append("<div class='no_data' id='tablef4394ea8ea5d424605c8eeb772b53004890enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef4394ea8ea5d424605c8eeb772b53004890enorecords").show();
					$("#Pagertablef4394ea8ea5d424605c8eeb772b53004890e_left").css("display", "none");
				}
tablef4394ea8ea5d424605c8eeb772b53004890eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef4394ea8ea5d424605c8eeb772b53004890e"
    });
tablef4394ea8ea5d424605c8eeb772b53004890eReload();
$("#t_tablef4394ea8ea5d424605c8eeb772b53004890e").append($("#tableToolbartablef4394ea8ea5d424605c8eeb772b53004890e"));$("#tableToolbarButton57942ff5fb5eb1489ed8ac576e3cdaec0ff1").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3922222860192311ffdac4b50&grid=tablef4394ea8ea5d424605c8eeb772b53004890e',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtond5bdfe9b73527746cc28029c23a789763eec").bind('click',function() {                                                                                       
	var ids = $('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3922222860192311ffdac4b50&id=' + rowData.ID+'&grid=tablef4394ea8ea5d424605c8eeb772b53004890e',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtone796f4df83e798409438c32991686ebedfed").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_NZGDBDHDB&isbpm=N&dbid=948e83e3922222860192311dc2564ac9', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39222228601923120894a4b72',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablef4394ea8ea5d424605c8eeb772b53004890e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton168b2e5845d0e24094b8c6c22ee7e6681466').bind('click',function() {                           
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
	        var colModels =$('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablef4394ea8ea5d424605c8eeb772b53004890eKeyWordIn;                          
	        expSearchParams.param = tablef4394ea8ea5d424605c8eeb772b53004890eParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_工会工作_女职工代表大会代表';                             
	        expSearchParams.viewid='948e83e39222228601923120894a4b72';                                   
	        expSearchParams.tableid='tablef4394ea8ea5d424605c8eeb772b53004890e';                                 
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
$("#tableToolbarButton89ae52359e26f548db890d1405e81177ce1e").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'nzgdbdhdb', callBackFunc: function () {                           	
		$('#tablef4394ea8ea5d424605c8eeb772b53004890e').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
