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

function redraw948e83e3922222860192317a8d927a8b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3922222860192317a8d927a8b").width();
		var win_height = $("#948e83e3922222860192317a8d927a8b").height();
		$('#948e83e3922222860192317a8d927a8b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3922222860192317a8d927a8b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3922222860192317a8d927a8b").width();
	setTimeout(function(){redraw948e83e3922222860192317a8d927a8b(win_width);},500);
});
var tabledacb2c3ff073364bb529c5c8fd813e671f8dKeyWordIn = "";    
var tabledacb2c3ff073364bb529c5c8fd813e671f8dParamIn = "";    
var tabledacb2c3ff073364bb529c5c8fd813e671f8dSelectRow = {     
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dLoadComplete = {     
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dBeforeEditCell = {        
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dOndblClickRow = {     
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dOnRightClickRow = {     
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dGridComplete = {     
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dOnCellSelect = {     
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
var tabledacb2c3ff073364bb529c5c8fd813e671f8dLoadBeforeSend = {        
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
function tabledacb2c3ff073364bb529c5c8fd813e671f8dReload(pid){
	var _isInvalid = true;
	$("#tabledacb2c3ff073364bb529c5c8fd813e671f8d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabledacb2c3ff073364bb529c5c8fd813e671f8dPid = pid;
		}
		return false;
	}
	window.tabledacb2c3ff073364bb529c5c8fd813e671f8dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tabledacb2c3ff073364bb529c5c8fd813e671f8dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabledacb2c3ff073364bb529c5c8fd813e671f8dPid == 'undefined' || window.tabledacb2c3ff073364bb529c5c8fd813e671f8dPid!=null){
tabledacb2c3ff073364bb529c5c8fd813e671f8dReload(window.tabledacb2c3ff073364bb529c5c8fd813e671f8dPid);
}
}
var tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d = [];
var uniqueColtabledacb2c3ff073364bb529c5c8fd813e671f8d = [];
var uniqueColTitletabledacb2c3ff073364bb529c5c8fd813e671f8d = [];
var defaultValuetabledacb2c3ff073364bb529c5c8fd813e671f8d = {};
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '本单位党组织',hidden:false, name: 'BDWDZZ',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '共建党组织',hidden:false, name: 'GJDZZ',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '共建党组织所属单位',hidden:false, name: 'GJDZZSSDW',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '共建类别',hidden:false, name: 'GJLB',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '共建起止时间',hidden:false, name: 'GJQSSJ',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tabledacb2c3ff073364bb529c5c8fd813e671f8d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3922222860192317a8d927a8b/tabledacb2c3ff073364bb529c5c8fd813e671f8d/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabledacb2c3ff073364bb529c5c8fd813e671f8d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabledacb2c3ff073364bb529c5c8fd813e671f8dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabledacb2c3ff073364bb529c5c8fd813e671f8dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabledacb2c3ff073364bb529c5c8fd813e671f8dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabledacb2c3ff073364bb529c5c8fd813e671f8dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabledacb2c3ff073364bb529c5c8fd813e671f8dGridComplete.exec();
				    setTimeout(function(){var height = $("#tabledacb2c3ff073364bb529c5c8fd813e671f8d").closest('.ui-jqgrid-bdiv').height();
					$("#tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords img").css("width","120px");
                 }else{
					    $("#tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabledacb2c3ff073364bb529c5c8fd813e671f8dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabledacb2c3ff073364bb529c5c8fd813e671f8dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords").hide();
		   	    $("#Pagertabledacb2c3ff073364bb529c5c8fd813e671f8d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabledacb2c3ff073364bb529c5c8fd813e671f8d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabledacb2c3ff073364bb529c5c8fd813e671f8d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords").html() == null) {
						$("#tabledacb2c3ff073364bb529c5c8fd813e671f8d").parent().append("<div class='no_data' id='tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabledacb2c3ff073364bb529c5c8fd813e671f8dnorecords").show();
					$("#Pagertabledacb2c3ff073364bb529c5c8fd813e671f8d_left").css("display", "none");
				}
tabledacb2c3ff073364bb529c5c8fd813e671f8dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabledacb2c3ff073364bb529c5c8fd813e671f8d"
    });
tabledacb2c3ff073364bb529c5c8fd813e671f8dReload();
$("#t_tabledacb2c3ff073364bb529c5c8fd813e671f8d").append($("#tableToolbartabledacb2c3ff073364bb529c5c8fd813e671f8d"));$("#tableToolbarButtona3d8a70e4e157d4d0b48784d9baaa72a832a").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39222228601923178322760d8&grid=tabledacb2c3ff073364bb529c5c8fd813e671f8d',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton80812d2da31c3c4ddb98da72fa21d1759c30").bind('click',function() {                                                                                       
	var ids = $('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39222228601923178322760d8&id=' + rowData.ID+'&grid=tabledacb2c3ff073364bb529c5c8fd813e671f8d',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonffb6069b81c67b4b9c38890d8008c0b60434").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZXGJ&isbpm=N&dbid=948e83e39222228601923175973f609e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3922222860192317a8d927a8b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton97a69b8a7368b247f218cba42c8ab8a323cb").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zxgj', callBackFunc: function () {                           	
		$('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButtona302fda9bf16724ed76a1c65954e0469547f').bind('click',function() {                           
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
	        var colModels =$('#tabledacb2c3ff073364bb529c5c8fd813e671f8d').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tabledacb2c3ff073364bb529c5c8fd813e671f8dKeyWordIn;                          
	        expSearchParams.param = tabledacb2c3ff073364bb529c5c8fd813e671f8dParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织工作_铸心共建总表';                             
	        expSearchParams.viewid='948e83e3922222860192317a8d927a8b';                                   
	        expSearchParams.tableid='tabledacb2c3ff073364bb529c5c8fd813e671f8d';                                 
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
;});	 
