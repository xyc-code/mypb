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

function redraw948e83e391927ff30191a13399781a08(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a13399781a08").width();
		var win_height = $("#948e83e391927ff30191a13399781a08").height();
		$('#948e83e391927ff30191a13399781a08').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a13399781a08').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a13399781a08").width();
	setTimeout(function(){redraw948e83e391927ff30191a13399781a08(win_width);},500);
});
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dKeyWordIn = "";    
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dParamIn = "";    
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dSelectRow = {     
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dLoadComplete = {     
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dBeforeEditCell = {        
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dOndblClickRow = {     
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dOnRightClickRow = {     
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dGridComplete = {     
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dOnCellSelect = {     
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
var tableaa0e36aff0e2f4403c1a9eb19e109cca795dLoadBeforeSend = {        
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
function tableaa0e36aff0e2f4403c1a9eb19e109cca795dReload(pid){
	var _isInvalid = true;
	$("#tableaa0e36aff0e2f4403c1a9eb19e109cca795d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableaa0e36aff0e2f4403c1a9eb19e109cca795dPid = pid;
		}
		return false;
	}
	window.tableaa0e36aff0e2f4403c1a9eb19e109cca795dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableaa0e36aff0e2f4403c1a9eb19e109cca795dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableaa0e36aff0e2f4403c1a9eb19e109cca795dPid == 'undefined' || window.tableaa0e36aff0e2f4403c1a9eb19e109cca795dPid!=null){
tableaa0e36aff0e2f4403c1a9eb19e109cca795dReload(window.tableaa0e36aff0e2f4403c1a9eb19e109cca795dPid);
}
}
var tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d = [];
var uniqueColtableaa0e36aff0e2f4403c1a9eb19e109cca795d = [];
var uniqueColTitletableaa0e36aff0e2f4403c1a9eb19e109cca795d = [];
var defaultValuetableaa0e36aff0e2f4403c1a9eb19e109cca795d = {};
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '名称',hidden:false, name: 'NAME',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '计划',hidden:false, name: 'PLAN',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '完成',hidden:false, name: 'FINISH',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '进行中',hidden:false, name: 'PROCEED',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableaa0e36aff0e2f4403c1a9eb19e109cca795d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a13399781a08/tableaa0e36aff0e2f4403c1a9eb19e109cca795d/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableaa0e36aff0e2f4403c1a9eb19e109cca795d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableaa0e36aff0e2f4403c1a9eb19e109cca795dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableaa0e36aff0e2f4403c1a9eb19e109cca795dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableaa0e36aff0e2f4403c1a9eb19e109cca795dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableaa0e36aff0e2f4403c1a9eb19e109cca795dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableaa0e36aff0e2f4403c1a9eb19e109cca795dGridComplete.exec();
				    setTimeout(function(){var height = $("#tableaa0e36aff0e2f4403c1a9eb19e109cca795d").closest('.ui-jqgrid-bdiv').height();
					$("#tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords img").css("width","120px");
                 }else{
					    $("#tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableaa0e36aff0e2f4403c1a9eb19e109cca795dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableaa0e36aff0e2f4403c1a9eb19e109cca795dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords").hide();
		   	    $("#Pagertableaa0e36aff0e2f4403c1a9eb19e109cca795d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableaa0e36aff0e2f4403c1a9eb19e109cca795d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableaa0e36aff0e2f4403c1a9eb19e109cca795d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords").html() == null) {
						$("#tableaa0e36aff0e2f4403c1a9eb19e109cca795d").parent().append("<div class='no_data' id='tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableaa0e36aff0e2f4403c1a9eb19e109cca795dnorecords").show();
					$("#Pagertableaa0e36aff0e2f4403c1a9eb19e109cca795d_left").css("display", "none");
				}
tableaa0e36aff0e2f4403c1a9eb19e109cca795dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableaa0e36aff0e2f4403c1a9eb19e109cca795d"
    });
tableaa0e36aff0e2f4403c1a9eb19e109cca795dReload();
$("#t_tableaa0e36aff0e2f4403c1a9eb19e109cca795d").append($("#tableToolbartableaa0e36aff0e2f4403c1a9eb19e109cca795d"));$("#tableToolbarButton7f50d60554c7fe4f6df98aed0a460cba3e18").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a133205319f5&grid=tableaa0e36aff0e2f4403c1a9eb19e109cca795d',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtona173b913288a56412b986e1d0636c3c8199d").bind('click',function() {                                                                                       
	var ids = $('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a133205319f5&id=' + rowData.ID+'&grid=tableaa0e36aff0e2f4403c1a9eb19e109cca795d',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton23c74c7ac72bfd4fd29ab77e7f0e5b40cd7e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZTNDJS_ZT&isbpm=N&dbid=948e83e3918c4fb001918d45ad3321da', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a13399781a08',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton2539ea9e8c17844be4987346ceeff3b2aeb0').bind('click',function() {                           
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
	        var colModels =$('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableaa0e36aff0e2f4403c1a9eb19e109cca795dKeyWordIn;                          
	        expSearchParams.param = tableaa0e36aff0e2f4403c1a9eb19e109cca795dParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-主题劳动竞赛-柱图';                             
	        expSearchParams.viewid='948e83e391927ff30191a13399781a08';                                   
	        expSearchParams.tableid='tableaa0e36aff0e2f4403c1a9eb19e109cca795d';                                 
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
$("#tableToolbarButton0e192d7760d43b49975878bc2e60c3510583").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ldjszt', callBackFunc: function () {                           	
		$('#tableaa0e36aff0e2f4403c1a9eb19e109cca795d').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
