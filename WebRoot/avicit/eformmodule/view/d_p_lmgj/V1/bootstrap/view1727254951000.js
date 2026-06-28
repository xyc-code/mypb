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

function redraw948e83e391927ff30191a14641531bea(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a14641531bea").width();
		var win_height = $("#948e83e391927ff30191a14641531bea").height();
		$('#948e83e391927ff30191a14641531bea').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a14641531bea').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a14641531bea").width();
	setTimeout(function(){redraw948e83e391927ff30191a14641531bea(win_width);},500);
});
var table45ccbfac8429114b2448e4ad30f1c7eab004KeyWordIn = "";    
var table45ccbfac8429114b2448e4ad30f1c7eab004ParamIn = "";    
var table45ccbfac8429114b2448e4ad30f1c7eab004SelectRow = {     
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
var table45ccbfac8429114b2448e4ad30f1c7eab004LoadComplete = {     
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
var table45ccbfac8429114b2448e4ad30f1c7eab004BeforeEditCell = {        
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
var table45ccbfac8429114b2448e4ad30f1c7eab004OndblClickRow = {     
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
var table45ccbfac8429114b2448e4ad30f1c7eab004OnRightClickRow = {     
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
var table45ccbfac8429114b2448e4ad30f1c7eab004GridComplete = {     
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
var table45ccbfac8429114b2448e4ad30f1c7eab004OnCellSelect = {     
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
var table45ccbfac8429114b2448e4ad30f1c7eab004LoadBeforeSend = {        
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
function table45ccbfac8429114b2448e4ad30f1c7eab004Reload(pid){
	var _isInvalid = true;
	$("#table45ccbfac8429114b2448e4ad30f1c7eab004").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table45ccbfac8429114b2448e4ad30f1c7eab004Pid = pid;
		}
		return false;
	}
	window.table45ccbfac8429114b2448e4ad30f1c7eab004Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table45ccbfac8429114b2448e4ad30f1c7eab004TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table45ccbfac8429114b2448e4ad30f1c7eab004Pid == 'undefined' || window.table45ccbfac8429114b2448e4ad30f1c7eab004Pid!=null){
table45ccbfac8429114b2448e4ad30f1c7eab004Reload(window.table45ccbfac8429114b2448e4ad30f1c7eab004Pid);
}
}
var tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004 = [];
var uniqueColtable45ccbfac8429114b2448e4ad30f1c7eab004 = [];
var uniqueColTitletable45ccbfac8429114b2448e4ad30f1c7eab004 = [];
var defaultValuetable45ccbfac8429114b2448e4ad30f1c7eab004 = {};
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '所在单位',hidden:false, name: 'SZZW',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '岗位职务',hidden:false, name: 'GWZW',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '出生年月',hidden:false, name: 'CSNY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '政治面貌',hidden:false, name: 'ZZMM',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '学历',hidden:false, name: 'XL',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '国家级荣誉',hidden:false, name: 'GJJRY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '省部级荣誉',hidden:false, name: 'SBJRY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '地市级荣誉',hidden:false, name: 'DSJRY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '公司级荣誉',hidden:false, name: 'GSJRY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table45ccbfac8429114b2448e4ad30f1c7eab004").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a14641531bea/table45ccbfac8429114b2448e4ad30f1c7eab004/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable45ccbfac8429114b2448e4ad30f1c7eab004,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table45ccbfac8429114b2448e4ad30f1c7eab004SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table45ccbfac8429114b2448e4ad30f1c7eab004LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table45ccbfac8429114b2448e4ad30f1c7eab004OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table45ccbfac8429114b2448e4ad30f1c7eab004OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table45ccbfac8429114b2448e4ad30f1c7eab004GridComplete.exec();
				    setTimeout(function(){var height = $("#table45ccbfac8429114b2448e4ad30f1c7eab004").closest('.ui-jqgrid-bdiv').height();
					$("#table45ccbfac8429114b2448e4ad30f1c7eab004norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table45ccbfac8429114b2448e4ad30f1c7eab004norecords img").css("width","120px");
                 }else{
					    $("#table45ccbfac8429114b2448e4ad30f1c7eab004norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table45ccbfac8429114b2448e4ad30f1c7eab004BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table45ccbfac8429114b2448e4ad30f1c7eab004OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table45ccbfac8429114b2448e4ad30f1c7eab004norecords").hide();
		   	    $("#Pagertable45ccbfac8429114b2448e4ad30f1c7eab004_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table45ccbfac8429114b2448e4ad30f1c7eab004").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table45ccbfac8429114b2448e4ad30f1c7eab004").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table45ccbfac8429114b2448e4ad30f1c7eab004norecords").html() == null) {
						$("#table45ccbfac8429114b2448e4ad30f1c7eab004").parent().append("<div class='no_data' id='table45ccbfac8429114b2448e4ad30f1c7eab004norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table45ccbfac8429114b2448e4ad30f1c7eab004norecords").show();
					$("#Pagertable45ccbfac8429114b2448e4ad30f1c7eab004_left").css("display", "none");
				}
table45ccbfac8429114b2448e4ad30f1c7eab004LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable45ccbfac8429114b2448e4ad30f1c7eab004"
    });
table45ccbfac8429114b2448e4ad30f1c7eab004Reload();
$("#t_table45ccbfac8429114b2448e4ad30f1c7eab004").append($("#tableToolbartable45ccbfac8429114b2448e4ad30f1c7eab004"));$("#tableToolbarButtond0a2114d356f194a95ba48f26e22aa7d0feb").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a145e3cc1bcd&grid=table45ccbfac8429114b2448e4ad30f1c7eab004',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonf76fd5859b33d04ca9c8d919a16ab8eea0de").bind('click',function() {                                                                                       
	var ids = $('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a145e3cc1bcd&id=' + rowData.ID+'&grid=table45ccbfac8429114b2448e4ad30f1c7eab004',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonf1d9f36328571347d4591e4cc1163bf2074b").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_LMGJ&isbpm=N&dbid=948e83e391927ff301919770474a47a3', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a14641531bea',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table45ccbfac8429114b2448e4ad30f1c7eab004').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtoncba531e8a62ac94033c8b76362ef83ea2801').bind('click',function() {                           
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
	        var colModels =$('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table45ccbfac8429114b2448e4ad30f1c7eab004KeyWordIn;                          
	        expSearchParams.param = table45ccbfac8429114b2448e4ad30f1c7eab004ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_劳模工匠';                             
	        expSearchParams.viewid='948e83e391927ff30191a14641531bea';                                   
	        expSearchParams.tableid='table45ccbfac8429114b2448e4ad30f1c7eab004';                                 
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
$("#tableToolbarButton79f19f7d1e91724d26494e11910221f4c233").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'lmgj', callBackFunc: function () {                           	
		$('#table45ccbfac8429114b2448e4ad30f1c7eab004').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
