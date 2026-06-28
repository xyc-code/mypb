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

function redraw948e83e39222228601923185b0dc7ba3(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39222228601923185b0dc7ba3").width();
		var win_height = $("#948e83e39222228601923185b0dc7ba3").height();
		$('#948e83e39222228601923185b0dc7ba3').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39222228601923185b0dc7ba3').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39222228601923185b0dc7ba3").width();
	setTimeout(function(){redraw948e83e39222228601923185b0dc7ba3(win_width);},500);
});
var table23fbf5a045ef8e43993a46939b282975abaaKeyWordIn = "";    
var table23fbf5a045ef8e43993a46939b282975abaaParamIn = "";    
var table23fbf5a045ef8e43993a46939b282975abaaSelectRow = {     
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
var table23fbf5a045ef8e43993a46939b282975abaaLoadComplete = {     
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
var table23fbf5a045ef8e43993a46939b282975abaaBeforeEditCell = {        
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
var table23fbf5a045ef8e43993a46939b282975abaaOndblClickRow = {     
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
var table23fbf5a045ef8e43993a46939b282975abaaOnRightClickRow = {     
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
var table23fbf5a045ef8e43993a46939b282975abaaGridComplete = {     
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
var table23fbf5a045ef8e43993a46939b282975abaaOnCellSelect = {     
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
var table23fbf5a045ef8e43993a46939b282975abaaLoadBeforeSend = {        
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
function table23fbf5a045ef8e43993a46939b282975abaaReload(pid){
	var _isInvalid = true;
	$("#table23fbf5a045ef8e43993a46939b282975abaa").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table23fbf5a045ef8e43993a46939b282975abaaPid = pid;
		}
		return false;
	}
	window.table23fbf5a045ef8e43993a46939b282975abaaPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table23fbf5a045ef8e43993a46939b282975abaaTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table23fbf5a045ef8e43993a46939b282975abaaPid == 'undefined' || window.table23fbf5a045ef8e43993a46939b282975abaaPid!=null){
table23fbf5a045ef8e43993a46939b282975abaaReload(window.table23fbf5a045ef8e43993a46939b282975abaaPid);
}
}
var tablecmtable23fbf5a045ef8e43993a46939b282975abaa = [];
var uniqueColtable23fbf5a045ef8e43993a46939b282975abaa = [];
var uniqueColTitletable23fbf5a045ef8e43993a46939b282975abaa = [];
var defaultValuetable23fbf5a045ef8e43993a46939b282975abaa = {};
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '基层党支部',hidden:false, name: 'JCDZB',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '研究“党建+质量”工作支委会次数',hidden:false, name: 'ZWCS',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '落实质量工作党员大会次数',hidden:false, name: 'DHCS',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '质量专题 党课次数',hidden:false, name: 'DKCS',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '质量工作主题党日次数',hidden:false, name: 'DRCS',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '质量分析会次数',hidden:false, name: 'FXCS',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '质量宣讲次数',hidden:false, name: 'XJCS',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '质量攻关揭榜挂帅数量',hidden:false, name: 'GSSL',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable23fbf5a045ef8e43993a46939b282975abaa.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table23fbf5a045ef8e43993a46939b282975abaa").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39222228601923185b0dc7ba3/table23fbf5a045ef8e43993a46939b282975abaa/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable23fbf5a045ef8e43993a46939b282975abaa,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table23fbf5a045ef8e43993a46939b282975abaaSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table23fbf5a045ef8e43993a46939b282975abaaLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table23fbf5a045ef8e43993a46939b282975abaaOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table23fbf5a045ef8e43993a46939b282975abaaOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table23fbf5a045ef8e43993a46939b282975abaaGridComplete.exec();
				    setTimeout(function(){var height = $("#table23fbf5a045ef8e43993a46939b282975abaa").closest('.ui-jqgrid-bdiv').height();
					$("#table23fbf5a045ef8e43993a46939b282975abaanorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table23fbf5a045ef8e43993a46939b282975abaanorecords img").css("width","120px");
                 }else{
					    $("#table23fbf5a045ef8e43993a46939b282975abaanorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table23fbf5a045ef8e43993a46939b282975abaaBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table23fbf5a045ef8e43993a46939b282975abaaOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table23fbf5a045ef8e43993a46939b282975abaanorecords").hide();
		   	    $("#Pagertable23fbf5a045ef8e43993a46939b282975abaa_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table23fbf5a045ef8e43993a46939b282975abaa").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table23fbf5a045ef8e43993a46939b282975abaa").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table23fbf5a045ef8e43993a46939b282975abaanorecords").html() == null) {
						$("#table23fbf5a045ef8e43993a46939b282975abaa").parent().append("<div class='no_data' id='table23fbf5a045ef8e43993a46939b282975abaanorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table23fbf5a045ef8e43993a46939b282975abaanorecords").show();
					$("#Pagertable23fbf5a045ef8e43993a46939b282975abaa_left").css("display", "none");
				}
table23fbf5a045ef8e43993a46939b282975abaaLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable23fbf5a045ef8e43993a46939b282975abaa"
    });
table23fbf5a045ef8e43993a46939b282975abaaReload();
$("#t_table23fbf5a045ef8e43993a46939b282975abaa").append($("#tableToolbartable23fbf5a045ef8e43993a46939b282975abaa"));$("#tableToolbarButtonee2ad35a19fde34d34bac18defb412ac2f03").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e392222286019231853c5d7b8c&grid=table23fbf5a045ef8e43993a46939b282975abaa',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton924d2054f535f24c8e1990a390d6811461a6").bind('click',function() {                                                                                       
	var ids = $('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e392222286019231853c5d7b8c&id=' + rowData.ID+'&grid=table23fbf5a045ef8e43993a46939b282975abaa',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton11edee4979425d446fd8a863f4297e8dd72c").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DJZL&isbpm=N&dbid=948e83e3922222860192317fc8b37b2c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39222228601923185b0dc7ba3',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table23fbf5a045ef8e43993a46939b282975abaa').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtond407872dc390f2456b48aa4e2f13832ebd7d").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'djzl', callBackFunc: function () {                           	
		$('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton3d0617f1937c114012dadd3579161942561c').bind('click',function() {                           
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
	        var colModels =$('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table23fbf5a045ef8e43993a46939b282975abaaKeyWordIn;                          
	        expSearchParams.param = table23fbf5a045ef8e43993a46939b282975abaaParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_党建质量';                             
	        expSearchParams.viewid='948e83e39222228601923185b0dc7ba3';                                   
	        expSearchParams.tableid='table23fbf5a045ef8e43993a46939b282975abaa';                                 
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
