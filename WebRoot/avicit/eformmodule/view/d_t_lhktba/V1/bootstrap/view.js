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

function redraw948e83e39159170301916e5906543644(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39159170301916e5906543644").width();
		var win_height = $("#948e83e39159170301916e5906543644").height();
		$('#948e83e39159170301916e5906543644').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39159170301916e5906543644').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39159170301916e5906543644").width();
	setTimeout(function(){redraw948e83e39159170301916e5906543644(win_width);},500);
});
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeKeyWordIn = "";    
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeParamIn = "";    
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeSelectRow = {     
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeLoadComplete = {     
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeBeforeEditCell = {        
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeOndblClickRow = {     
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeOnRightClickRow = {     
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeGridComplete = {     
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeOnCellSelect = {     
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
var tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeLoadBeforeSend = {        
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
function tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeReload(pid){
	var _isInvalid = true;
	$("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabled3b4a4d1e72d7d47b52ba880d3bf53513fbePid = pid;
		}
		return false;
	}
	window.tabled3b4a4d1e72d7d47b52ba880d3bf53513fbePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabled3b4a4d1e72d7d47b52ba880d3bf53513fbePid == 'undefined' || window.tabled3b4a4d1e72d7d47b52ba880d3bf53513fbePid!=null){
tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeReload(window.tabled3b4a4d1e72d7d47b52ba880d3bf53513fbePid);
}
}
var tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe = [];
var uniqueColtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe = [];
var uniqueColTitletabled3b4a4d1e72d7d47b52ba880d3bf53513fbe = [];
var defaultValuetabled3b4a4d1e72d7d47b52ba880d3bf53513fbe = {};
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '领航题目',hidden:false, name: 'LHTM',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '发榜领航员',hidden:false, name: 'FBLHY',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '发榜单位',hidden:false, name: 'FBDW',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '领航挂帅人',hidden:false, name: 'LHGSR',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '领航导师',hidden:false, name: 'LHDS',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39159170301916e5906543644/tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabled3b4a4d1e72d7d47b52ba880d3bf53513fbe,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeGridComplete.exec();
				    setTimeout(function(){var height = $("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").closest('.ui-jqgrid-bdiv').height();
					$("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords img").css("width","120px");
                 }else{
					    $("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords").hide();
		   	    $("#Pagertabled3b4a4d1e72d7d47b52ba880d3bf53513fbe_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords").html() == null) {
						$("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").parent().append("<div class='no_data' id='tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbenorecords").show();
					$("#Pagertabled3b4a4d1e72d7d47b52ba880d3bf53513fbe_left").css("display", "none");
				}
tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabled3b4a4d1e72d7d47b52ba880d3bf53513fbe"
    });
tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeReload();
$("#t_tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe").append($("#tableToolbartabled3b4a4d1e72d7d47b52ba880d3bf53513fbe"));$("#tableToolbarButtonc683533f9f7e3b49ad8b25b29cf17d93f6f1").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e5427c535d6&grid=tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton3aecd73787396e491c88e38dca9a0428d02c").bind('click',function() {                                                                                       
	var ids = $('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301916e5427c535d6&id=' + rowData.ID+'&grid=tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtona1dc4cb39e223a44b65a16dd63692f408d23").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_T_LHKTBA&isbpm=N&dbid=948e83e39159170301916e48180134ff', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39159170301916e5906543644',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton3679eaa857d8db47fc0932f1ef65b0bc7bdc').bind('click',function() {                           
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
	        var colModels =$('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeKeyWordIn;                          
	        expSearchParams.param = tabled3b4a4d1e72d7d47b52ba880d3bf53513fbeParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_团委_领航课题备案';                             
	        expSearchParams.viewid='948e83e39159170301916e5906543644';                                   
	        expSearchParams.tableid='tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe';                                 
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
$("#tableToolbarButton02a6e07f757bba49bd6883246f3c6a9aa356").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'lhktba', callBackFunc: function () {                           	
		$('#tabled3b4a4d1e72d7d47b52ba880d3bf53513fbe').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
