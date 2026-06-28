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

function redraw948e83e39159170301916e57dd5a3637(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39159170301916e57dd5a3637").width();
		var win_height = $("#948e83e39159170301916e57dd5a3637").height();
		$('#948e83e39159170301916e57dd5a3637').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39159170301916e57dd5a3637').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39159170301916e57dd5a3637").width();
	setTimeout(function(){redraw948e83e39159170301916e57dd5a3637(win_width);},500);
});
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8KeyWordIn = "";    
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8ParamIn = "";    
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8SelectRow = {     
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8LoadComplete = {     
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8BeforeEditCell = {        
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8OndblClickRow = {     
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8OnRightClickRow = {     
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8GridComplete = {     
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8OnCellSelect = {     
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
var table6bf7ba1e7c18e14854e8598b5b0f5333f3a8LoadBeforeSend = {        
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
function table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Reload(pid){
	var _isInvalid = true;
	$("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Pid = pid;
		}
		return false;
	}
	window.table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table6bf7ba1e7c18e14854e8598b5b0f5333f3a8TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Pid == 'undefined' || window.table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Pid!=null){
table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Reload(window.table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Pid);
}
}
var tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8 = [];
var uniqueColtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8 = [];
var uniqueColTitletable6bf7ba1e7c18e14854e8598b5b0f5333f3a8 = [];
var defaultValuetable6bf7ba1e7c18e14854e8598b5b0f5333f3a8 = {};
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '基层团组织数量',hidden:false, name: 'JCTZZSL',align:'right',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '兼职团干部数量',hidden:false, name: 'JZTGBSL',align:'right',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '团员数量',hidden:false, name: 'TYSL',align:'right',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '团员数量比例',hidden:false, name: 'TYSLBL',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '青年数量',hidden:false, name: 'QNSL',align:'right',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '青年数量比例',hidden:false, name: 'QNSLBL',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '推优入党数量',hidden:false, name: 'TYRDSL',align:'right',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39159170301916e57dd5a3637/table6bf7ba1e7c18e14854e8598b5b0f5333f3a8/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6bf7ba1e7c18e14854e8598b5b0f5333f3a8,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6bf7ba1e7c18e14854e8598b5b0f5333f3a8SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6bf7ba1e7c18e14854e8598b5b0f5333f3a8LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6bf7ba1e7c18e14854e8598b5b0f5333f3a8OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6bf7ba1e7c18e14854e8598b5b0f5333f3a8OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6bf7ba1e7c18e14854e8598b5b0f5333f3a8GridComplete.exec();
				    setTimeout(function(){var height = $("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").closest('.ui-jqgrid-bdiv').height();
					$("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords img").css("width","120px");
                 }else{
					    $("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6bf7ba1e7c18e14854e8598b5b0f5333f3a8BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6bf7ba1e7c18e14854e8598b5b0f5333f3a8OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords").hide();
		   	    $("#Pagertable6bf7ba1e7c18e14854e8598b5b0f5333f3a8_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords").html() == null) {
						$("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").parent().append("<div class='no_data' id='table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8norecords").show();
					$("#Pagertable6bf7ba1e7c18e14854e8598b5b0f5333f3a8_left").css("display", "none");
				}
table6bf7ba1e7c18e14854e8598b5b0f5333f3a8LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6bf7ba1e7c18e14854e8598b5b0f5333f3a8"
    });
table6bf7ba1e7c18e14854e8598b5b0f5333f3a8Reload();
$("#t_table6bf7ba1e7c18e14854e8598b5b0f5333f3a8").append($("#tableToolbartable6bf7ba1e7c18e14854e8598b5b0f5333f3a8"));$("#tableToolbarButtonf37afe998f35cb4c6e885b0c5bde6e80cbb0").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e533eb835bf&grid=table6bf7ba1e7c18e14854e8598b5b0f5333f3a8',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton0e1afe5e73fa35469d788bfde26ab7c30533").bind('click',function() {                                                                                       
	var ids = $('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e533eb835bf&id=' + rowData.ID+'&grid=table6bf7ba1e7c18e14854e8598b5b0f5333f3a8',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton6010e9584d429c4fa6e804cbac79ec703991").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_T_JBXXBS&isbpm=N&dbid=948e83e39159170301916e43cd7034e0', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39159170301916e57dd5a3637',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtond8eaf606338b7d4b6c38c81a549f64653bc9').bind('click',function() {                           
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
	        var colModels =$('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table6bf7ba1e7c18e14854e8598b5b0f5333f3a8KeyWordIn;                          
	        expSearchParams.param = table6bf7ba1e7c18e14854e8598b5b0f5333f3a8ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_团委_基本信息报送';                             
	        expSearchParams.viewid='948e83e39159170301916e57dd5a3637';                                   
	        expSearchParams.tableid='table6bf7ba1e7c18e14854e8598b5b0f5333f3a8';                                 
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
$("#tableToolbarButtoncd45bc312694df4d5ac849ec560ad7c828ff").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'twjbxxbs', callBackFunc: function () {                           	
		$('#table6bf7ba1e7c18e14854e8598b5b0f5333f3a8').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
