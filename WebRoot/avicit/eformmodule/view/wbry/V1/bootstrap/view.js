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

function redraw948e83e3922222860192312d4d494da3(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3922222860192312d4d494da3").width();
		var win_height = $("#948e83e3922222860192312d4d494da3").height();
		$('#948e83e3922222860192312d4d494da3').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3922222860192312d4d494da3').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3922222860192312d4d494da3").width();
	setTimeout(function(){redraw948e83e3922222860192312d4d494da3(win_width);},500);
});
var tableca8266e0ec4d1e4417d8f9984841453ec26fKeyWordIn = "";    
var tableca8266e0ec4d1e4417d8f9984841453ec26fParamIn = "";    
var tableca8266e0ec4d1e4417d8f9984841453ec26fSelectRow = {     
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fLoadComplete = {     
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fBeforeEditCell = {        
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fOndblClickRow = {     
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fOnRightClickRow = {     
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fGridComplete = {     
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fOnCellSelect = {     
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
var tableca8266e0ec4d1e4417d8f9984841453ec26fLoadBeforeSend = {        
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
function tableca8266e0ec4d1e4417d8f9984841453ec26fReload(pid){
	var _isInvalid = true;
	$("#tableca8266e0ec4d1e4417d8f9984841453ec26f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableca8266e0ec4d1e4417d8f9984841453ec26fPid = pid;
		}
		return false;
	}
	window.tableca8266e0ec4d1e4417d8f9984841453ec26fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableca8266e0ec4d1e4417d8f9984841453ec26fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableca8266e0ec4d1e4417d8f9984841453ec26fPid == 'undefined' || window.tableca8266e0ec4d1e4417d8f9984841453ec26fPid!=null){
tableca8266e0ec4d1e4417d8f9984841453ec26fReload(window.tableca8266e0ec4d1e4417d8f9984841453ec26fPid);
}
}
var tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f = [];
var uniqueColtableca8266e0ec4d1e4417d8f9984841453ec26f = [];
var uniqueColTitletableca8266e0ec4d1e4417d8f9984841453ec26f = [];
var defaultValuetableca8266e0ec4d1e4417d8f9984841453ec26f = {};
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '获奖单位',hidden:false, name: 'HJDW',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '荣誉名称',hidden:false, name: 'RYMC',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '获奖年份',hidden:false, name: 'HJNF',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableca8266e0ec4d1e4417d8f9984841453ec26f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3922222860192312d4d494da3/tableca8266e0ec4d1e4417d8f9984841453ec26f/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableca8266e0ec4d1e4417d8f9984841453ec26f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableca8266e0ec4d1e4417d8f9984841453ec26fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableca8266e0ec4d1e4417d8f9984841453ec26fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableca8266e0ec4d1e4417d8f9984841453ec26fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableca8266e0ec4d1e4417d8f9984841453ec26fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableca8266e0ec4d1e4417d8f9984841453ec26fGridComplete.exec();
				    setTimeout(function(){var height = $("#tableca8266e0ec4d1e4417d8f9984841453ec26f").closest('.ui-jqgrid-bdiv').height();
					$("#tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords img").css("width","120px");
                 }else{
					    $("#tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableca8266e0ec4d1e4417d8f9984841453ec26fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableca8266e0ec4d1e4417d8f9984841453ec26fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords").hide();
		   	    $("#Pagertableca8266e0ec4d1e4417d8f9984841453ec26f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableca8266e0ec4d1e4417d8f9984841453ec26f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableca8266e0ec4d1e4417d8f9984841453ec26f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords").html() == null) {
						$("#tableca8266e0ec4d1e4417d8f9984841453ec26f").parent().append("<div class='no_data' id='tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableca8266e0ec4d1e4417d8f9984841453ec26fnorecords").show();
					$("#Pagertableca8266e0ec4d1e4417d8f9984841453ec26f_left").css("display", "none");
				}
tableca8266e0ec4d1e4417d8f9984841453ec26fLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableca8266e0ec4d1e4417d8f9984841453ec26f"
    });
tableca8266e0ec4d1e4417d8f9984841453ec26fReload();
$("#t_tableca8266e0ec4d1e4417d8f9984841453ec26f").append($("#tableToolbartableca8266e0ec4d1e4417d8f9984841453ec26f"));$("#tableToolbarButtondf877cb18de6ae408718431f45e17cb97216").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3922222860192312cf13d4d79&grid=tableca8266e0ec4d1e4417d8f9984841453ec26f',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton6cf70472718e944d290928dfffa45e0da05c").bind('click',function() {                                                                                       
	var ids = $('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3922222860192312cf13d4d79&id=' + rowData.ID+'&grid=tableca8266e0ec4d1e4417d8f9984841453ec26f',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton35fdf0eab398204b91e8d98112ceb47791a7").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WBRY&isbpm=N&dbid=948e83e3922222860192312b070f4d0c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3922222860192312d4d494da3',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableca8266e0ec4d1e4417d8f9984841453ec26f').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton571ee8671b37ad4547f81ecd698ad0e14d60").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wbry', callBackFunc: function () {                           	
		$('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton890359ee5b147c447f18673c841a1121428c').bind('click',function() {                           
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
	        var colModels =$('#tableca8266e0ec4d1e4417d8f9984841453ec26f').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableca8266e0ec4d1e4417d8f9984841453ec26fKeyWordIn;                          
	        expSearchParams.param = tableca8266e0ec4d1e4417d8f9984841453ec26fParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_工会工作_外部荣誉';                             
	        expSearchParams.viewid='948e83e3922222860192312d4d494da3';                                   
	        expSearchParams.tableid='tableca8266e0ec4d1e4417d8f9984841453ec26f';                                 
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
