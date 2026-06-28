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

function redraw948e83e39159170301916e5cee203679(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39159170301916e5cee203679").width();
		var win_height = $("#948e83e39159170301916e5cee203679").height();
		$('#948e83e39159170301916e5cee203679').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39159170301916e5cee203679').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39159170301916e5cee203679").width();
	setTimeout(function(){redraw948e83e39159170301916e5cee203679(win_width);},500);
});
var tablef4bfd738c99e8343c008dce4c91d338db572KeyWordIn = "";    
var tablef4bfd738c99e8343c008dce4c91d338db572ParamIn = "";    
var tablef4bfd738c99e8343c008dce4c91d338db572SelectRow = {     
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
var tablef4bfd738c99e8343c008dce4c91d338db572LoadComplete = {     
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
var tablef4bfd738c99e8343c008dce4c91d338db572BeforeEditCell = {        
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
var tablef4bfd738c99e8343c008dce4c91d338db572OndblClickRow = {     
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
var tablef4bfd738c99e8343c008dce4c91d338db572OnRightClickRow = {     
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
var tablef4bfd738c99e8343c008dce4c91d338db572GridComplete = {     
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
var tablef4bfd738c99e8343c008dce4c91d338db572OnCellSelect = {     
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
var tablef4bfd738c99e8343c008dce4c91d338db572LoadBeforeSend = {        
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
function tablef4bfd738c99e8343c008dce4c91d338db572Reload(pid){
	var _isInvalid = true;
	$("#tablef4bfd738c99e8343c008dce4c91d338db572").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef4bfd738c99e8343c008dce4c91d338db572Pid = pid;
		}
		return false;
	}
	window.tablef4bfd738c99e8343c008dce4c91d338db572Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablef4bfd738c99e8343c008dce4c91d338db572TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef4bfd738c99e8343c008dce4c91d338db572Pid == 'undefined' || window.tablef4bfd738c99e8343c008dce4c91d338db572Pid!=null){
tablef4bfd738c99e8343c008dce4c91d338db572Reload(window.tablef4bfd738c99e8343c008dce4c91d338db572Pid);
}
}
var tablecmtablef4bfd738c99e8343c008dce4c91d338db572 = [];
var uniqueColtablef4bfd738c99e8343c008dce4c91d338db572 = [];
var uniqueColTitletablef4bfd738c99e8343c008dce4c91d338db572 = [];
var defaultValuetablef4bfd738c99e8343c008dce4c91d338db572 = {};
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '人数',hidden:false, name: 'RS',align:'right',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef4bfd738c99e8343c008dce4c91d338db572.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablef4bfd738c99e8343c008dce4c91d338db572").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39159170301916e5cee203679/tablef4bfd738c99e8343c008dce4c91d338db572/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablef4bfd738c99e8343c008dce4c91d338db572,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef4bfd738c99e8343c008dce4c91d338db572SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef4bfd738c99e8343c008dce4c91d338db572LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef4bfd738c99e8343c008dce4c91d338db572OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef4bfd738c99e8343c008dce4c91d338db572OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef4bfd738c99e8343c008dce4c91d338db572GridComplete.exec();
				    setTimeout(function(){var height = $("#tablef4bfd738c99e8343c008dce4c91d338db572").closest('.ui-jqgrid-bdiv').height();
					$("#tablef4bfd738c99e8343c008dce4c91d338db572norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef4bfd738c99e8343c008dce4c91d338db572norecords img").css("width","120px");
                 }else{
					    $("#tablef4bfd738c99e8343c008dce4c91d338db572norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef4bfd738c99e8343c008dce4c91d338db572BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef4bfd738c99e8343c008dce4c91d338db572OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef4bfd738c99e8343c008dce4c91d338db572norecords").hide();
		   	    $("#Pagertablef4bfd738c99e8343c008dce4c91d338db572_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef4bfd738c99e8343c008dce4c91d338db572").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef4bfd738c99e8343c008dce4c91d338db572").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef4bfd738c99e8343c008dce4c91d338db572norecords").html() == null) {
						$("#tablef4bfd738c99e8343c008dce4c91d338db572").parent().append("<div class='no_data' id='tablef4bfd738c99e8343c008dce4c91d338db572norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef4bfd738c99e8343c008dce4c91d338db572norecords").show();
					$("#Pagertablef4bfd738c99e8343c008dce4c91d338db572_left").css("display", "none");
				}
tablef4bfd738c99e8343c008dce4c91d338db572LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef4bfd738c99e8343c008dce4c91d338db572"
    });
tablef4bfd738c99e8343c008dce4c91d338db572Reload();
$("#t_tablef4bfd738c99e8343c008dce4c91d338db572").append($("#tableToolbartablef4bfd738c99e8343c008dce4c91d338db572"));$("#tableToolbarButton9c48466a0678a0447bf9767965208598da3f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e56e946362a&grid=tablef4bfd738c99e8343c008dce4c91d338db572',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton4f2671b13cbc01498f787d9b367d4d7cbbae").bind('click',function() {                                                                                       
	var ids = $('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e56e946362a&id=' + rowData.ID+'&grid=tablef4bfd738c99e8343c008dce4c91d338db572',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton852260e5a918b84e0bf8fa0d15dd9e74c36b").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_T_QNZYZBA&isbpm=N&dbid=948e83e39159170301916e50314c354b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39159170301916e5cee203679',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablef4bfd738c99e8343c008dce4c91d338db572').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton2330aeb6699ca74f9388dbdce500ea4a95d3').bind('click',function() {                           
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
	        var colModels =$('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablef4bfd738c99e8343c008dce4c91d338db572KeyWordIn;                          
	        expSearchParams.param = tablef4bfd738c99e8343c008dce4c91d338db572ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_团委_青年志愿者备案';                             
	        expSearchParams.viewid='948e83e39159170301916e5cee203679';                                   
	        expSearchParams.tableid='tablef4bfd738c99e8343c008dce4c91d338db572';                                 
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
$("#tableToolbarButton72cfbc63adc7674cb7d8bd186ccc037169bb").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zyzba', callBackFunc: function () {                           	
		$('#tablef4bfd738c99e8343c008dce4c91d338db572').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
