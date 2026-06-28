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

function redraw948e83e391927ff30191d533ab0f546e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d533ab0f546e").width();
		var win_height = $("#948e83e391927ff30191d533ab0f546e").height();
		$('#948e83e391927ff30191d533ab0f546e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d533ab0f546e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d533ab0f546e").width();
	setTimeout(function(){redraw948e83e391927ff30191d533ab0f546e(win_width);},500);
});
var tableec8442558ec8ee4a10186a8207c10e8cc94bKeyWordIn = "";    
var tableec8442558ec8ee4a10186a8207c10e8cc94bParamIn = "";    
var tableec8442558ec8ee4a10186a8207c10e8cc94bSelectRow = {     
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bLoadComplete = {     
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bBeforeEditCell = {        
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bOndblClickRow = {     
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bOnRightClickRow = {     
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bGridComplete = {     
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bOnCellSelect = {     
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
var tableec8442558ec8ee4a10186a8207c10e8cc94bLoadBeforeSend = {        
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
function tableec8442558ec8ee4a10186a8207c10e8cc94bReload(pid){
	var _isInvalid = true;
	$("#tableec8442558ec8ee4a10186a8207c10e8cc94b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableec8442558ec8ee4a10186a8207c10e8cc94bPid = pid;
		}
		return false;
	}
	window.tableec8442558ec8ee4a10186a8207c10e8cc94bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableec8442558ec8ee4a10186a8207c10e8cc94bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableec8442558ec8ee4a10186a8207c10e8cc94bPid == 'undefined' || window.tableec8442558ec8ee4a10186a8207c10e8cc94bPid!=null){
tableec8442558ec8ee4a10186a8207c10e8cc94bReload(window.tableec8442558ec8ee4a10186a8207c10e8cc94bPid);
}
}
var tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b = [];
var uniqueColtableec8442558ec8ee4a10186a8207c10e8cc94b = [];
var uniqueColTitletableec8442558ec8ee4a10186a8207c10e8cc94b = [];
var defaultValuetableec8442558ec8ee4a10186a8207c10e8cc94b = {};
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '年龄',hidden:false, name: 'NL',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '患病名称',hidden:false, name: 'HBMC',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '住院医院',hidden:false, name: 'ZYYY',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '医疗费总额',hidden:false, name: 'YLFZE',align:'right',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '统筹支付',hidden:false, name: 'TCZF',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '个人支付金额',hidden:false, name: 'GRZFJE',align:'right',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '报销比例',hidden:false, name: 'BXBL',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '报销金额',hidden:false, name: 'BXJE',align:'right',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '住院日期',hidden:false, name: 'ZYRQ',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableec8442558ec8ee4a10186a8207c10e8cc94b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d533ab0f546e/tableec8442558ec8ee4a10186a8207c10e8cc94b/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableec8442558ec8ee4a10186a8207c10e8cc94b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableec8442558ec8ee4a10186a8207c10e8cc94bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableec8442558ec8ee4a10186a8207c10e8cc94bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableec8442558ec8ee4a10186a8207c10e8cc94bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableec8442558ec8ee4a10186a8207c10e8cc94bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableec8442558ec8ee4a10186a8207c10e8cc94bGridComplete.exec();
				    setTimeout(function(){var height = $("#tableec8442558ec8ee4a10186a8207c10e8cc94b").closest('.ui-jqgrid-bdiv').height();
					$("#tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords img").css("width","120px");
                 }else{
					    $("#tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableec8442558ec8ee4a10186a8207c10e8cc94bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableec8442558ec8ee4a10186a8207c10e8cc94bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords").hide();
		   	    $("#Pagertableec8442558ec8ee4a10186a8207c10e8cc94b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableec8442558ec8ee4a10186a8207c10e8cc94b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableec8442558ec8ee4a10186a8207c10e8cc94b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords").html() == null) {
						$("#tableec8442558ec8ee4a10186a8207c10e8cc94b").parent().append("<div class='no_data' id='tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableec8442558ec8ee4a10186a8207c10e8cc94bnorecords").show();
					$("#Pagertableec8442558ec8ee4a10186a8207c10e8cc94b_left").css("display", "none");
				}
tableec8442558ec8ee4a10186a8207c10e8cc94bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableec8442558ec8ee4a10186a8207c10e8cc94b"
    });
tableec8442558ec8ee4a10186a8207c10e8cc94bReload();
$("#t_tableec8442558ec8ee4a10186a8207c10e8cc94b").append($("#tableToolbartableec8442558ec8ee4a10186a8207c10e8cc94b"));$("#tableToolbarButtonc2e109ffb8957c4d73d8bcc3725330532fb1").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d53347605444&grid=tableec8442558ec8ee4a10186a8207c10e8cc94b',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton3b543b82dc0d6e477048885c9bbeb1e94295").bind('click',function() {                                                                                       
	var ids = $('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d53347605444&id=' + rowData.ID+'&grid=tableec8442558ec8ee4a10186a8207c10e8cc94b',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonfbcbce7ada02f84f3cba2416ce3e2cf76cd7").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_AXYLHZJBXHZB&isbpm=N&dbid=948e83e391927ff30191d4921d4118c0', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d533ab0f546e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableec8442558ec8ee4a10186a8207c10e8cc94b').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton8609ce4fd4c06940a8898495bac87978ed48').bind('click',function() {                           
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
	        var colModels =$('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableec8442558ec8ee4a10186a8207c10e8cc94bKeyWordIn;                          
	        expSearchParams.param = tableec8442558ec8ee4a10186a8207c10e8cc94bParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_爱心医疗互助金报销汇总表';                             
	        expSearchParams.viewid='948e83e391927ff30191d533ab0f546e';                                   
	        expSearchParams.tableid='tableec8442558ec8ee4a10186a8207c10e8cc94b';                                 
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
$("#tableToolbarButton5bc244e9a8e1f84075683702e197fa39e181").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'axylhzj', callBackFunc: function () {                           	
		$('#tableec8442558ec8ee4a10186a8207c10e8cc94b').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
