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

function redraw948e83e391927ff30191a135f7cf1a2f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a135f7cf1a2f").width();
		var win_height = $("#948e83e391927ff30191a135f7cf1a2f").height();
		$('#948e83e391927ff30191a135f7cf1a2f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a135f7cf1a2f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a135f7cf1a2f").width();
	setTimeout(function(){redraw948e83e391927ff30191a135f7cf1a2f(win_width);},500);
});
var tablee3c1788df86738458de89888100d16b1f967KeyWordIn = "";    
var tablee3c1788df86738458de89888100d16b1f967ParamIn = "";    
var tablee3c1788df86738458de89888100d16b1f967SelectRow = {     
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
var tablee3c1788df86738458de89888100d16b1f967LoadComplete = {     
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
var tablee3c1788df86738458de89888100d16b1f967BeforeEditCell = {        
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
var tablee3c1788df86738458de89888100d16b1f967OndblClickRow = {     
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
var tablee3c1788df86738458de89888100d16b1f967OnRightClickRow = {     
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
var tablee3c1788df86738458de89888100d16b1f967GridComplete = {     
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
var tablee3c1788df86738458de89888100d16b1f967OnCellSelect = {     
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
var tablee3c1788df86738458de89888100d16b1f967LoadBeforeSend = {        
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
function tablee3c1788df86738458de89888100d16b1f967Reload(pid){
	var _isInvalid = true;
	$("#tablee3c1788df86738458de89888100d16b1f967").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee3c1788df86738458de89888100d16b1f967Pid = pid;
		}
		return false;
	}
	window.tablee3c1788df86738458de89888100d16b1f967Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee3c1788df86738458de89888100d16b1f967').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee3c1788df86738458de89888100d16b1f967TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee3c1788df86738458de89888100d16b1f967Pid == 'undefined' || window.tablee3c1788df86738458de89888100d16b1f967Pid!=null){
tablee3c1788df86738458de89888100d16b1f967Reload(window.tablee3c1788df86738458de89888100d16b1f967Pid);
}
}
var tablecmtablee3c1788df86738458de89888100d16b1f967 = [];
var uniqueColtablee3c1788df86738458de89888100d16b1f967 = [];
var uniqueColTitletablee3c1788df86738458de89888100d16b1f967 = [];
var defaultValuetablee3c1788df86738458de89888100d16b1f967 = {};
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '名称',hidden:false, name: 'NAME',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '计划',hidden:false, name: 'PLAN',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '完成',hidden:false, name: 'FINISH',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '进行中',hidden:false, name: 'PROCEED',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee3c1788df86738458de89888100d16b1f967.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablee3c1788df86738458de89888100d16b1f967").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a135f7cf1a2f/tablee3c1788df86738458de89888100d16b1f967/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee3c1788df86738458de89888100d16b1f967,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee3c1788df86738458de89888100d16b1f967SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee3c1788df86738458de89888100d16b1f967LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee3c1788df86738458de89888100d16b1f967OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee3c1788df86738458de89888100d16b1f967OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee3c1788df86738458de89888100d16b1f967GridComplete.exec();
				    setTimeout(function(){var height = $("#tablee3c1788df86738458de89888100d16b1f967").closest('.ui-jqgrid-bdiv').height();
					$("#tablee3c1788df86738458de89888100d16b1f967norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee3c1788df86738458de89888100d16b1f967norecords img").css("width","120px");
                 }else{
					    $("#tablee3c1788df86738458de89888100d16b1f967norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee3c1788df86738458de89888100d16b1f967BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee3c1788df86738458de89888100d16b1f967OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee3c1788df86738458de89888100d16b1f967norecords").hide();
		   	    $("#Pagertablee3c1788df86738458de89888100d16b1f967_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee3c1788df86738458de89888100d16b1f967").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee3c1788df86738458de89888100d16b1f967").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee3c1788df86738458de89888100d16b1f967norecords").html() == null) {
						$("#tablee3c1788df86738458de89888100d16b1f967").parent().append("<div class='no_data' id='tablee3c1788df86738458de89888100d16b1f967norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee3c1788df86738458de89888100d16b1f967norecords").show();
					$("#Pagertablee3c1788df86738458de89888100d16b1f967_left").css("display", "none");
				}
tablee3c1788df86738458de89888100d16b1f967LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee3c1788df86738458de89888100d16b1f967"
    });
tablee3c1788df86738458de89888100d16b1f967Reload();
$("#t_tablee3c1788df86738458de89888100d16b1f967").append($("#tableToolbartablee3c1788df86738458de89888100d16b1f967"));$("#tableToolbarButtone4491001c7786a4d2b583100fb8fe2d99f4f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a135827d1a1a&grid=tablee3c1788df86738458de89888100d16b1f967',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonc38e58cfb7838849fe38e2bb4579d49dc7a6").bind('click',function() {                                                                                       
	var ids = $('#tablee3c1788df86738458de89888100d16b1f967').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee3c1788df86738458de89888100d16b1f967').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a135827d1a1a&id=' + rowData.ID+'&grid=tablee3c1788df86738458de89888100d16b1f967',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton1580033abc057e41713887e694aaf98d2e27").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee3c1788df86738458de89888100d16b1f967').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee3c1788df86738458de89888100d16b1f967').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DYN_ZTNDJS_ZT_2&isbpm=N&dbid=948e83e3918c4fb001918d4a6407220c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a135f7cf1a2f',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee3c1788df86738458de89888100d16b1f967').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton20238d32d48bbb4f2778ad407ec7b43bf7c6').bind('click',function() {                           
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
	        var colModels =$('#tablee3c1788df86738458de89888100d16b1f967').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablee3c1788df86738458de89888100d16b1f967KeyWordIn;                          
	        expSearchParams.param = tablee3c1788df86738458de89888100d16b1f967ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_主题劳动竞赛-柱图2';                             
	        expSearchParams.viewid='948e83e391927ff30191a135f7cf1a2f';                                   
	        expSearchParams.tableid='tablee3c1788df86738458de89888100d16b1f967';                                 
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
$("#tableToolbarButton365a0f355e825f4e85b825ff2c96b7242614").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ldjszt2', callBackFunc: function () {                           	
		$('#tablee3c1788df86738458de89888100d16b1f967').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
