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

function redraw948e83e391927ff30191d4c7b513416e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d4c7b513416e").width();
		var win_height = $("#948e83e391927ff30191d4c7b513416e").height();
		$('#948e83e391927ff30191d4c7b513416e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d4c7b513416e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d4c7b513416e").width();
	setTimeout(function(){redraw948e83e391927ff30191d4c7b513416e(win_width);},500);
});
var tablee6b1a08a16525544e69bc5c0c83fbff220e2KeyWordIn = "";    
var tablee6b1a08a16525544e69bc5c0c83fbff220e2ParamIn = "";    
var tablee6b1a08a16525544e69bc5c0c83fbff220e2SelectRow = {     
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2LoadComplete = {     
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2BeforeEditCell = {        
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2OndblClickRow = {     
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2OnRightClickRow = {     
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2GridComplete = {     
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2OnCellSelect = {     
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
var tablee6b1a08a16525544e69bc5c0c83fbff220e2LoadBeforeSend = {        
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
function tablee6b1a08a16525544e69bc5c0c83fbff220e2Reload(pid){
	var _isInvalid = true;
	$("#tablee6b1a08a16525544e69bc5c0c83fbff220e2").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee6b1a08a16525544e69bc5c0c83fbff220e2Pid = pid;
		}
		return false;
	}
	window.tablee6b1a08a16525544e69bc5c0c83fbff220e2Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee6b1a08a16525544e69bc5c0c83fbff220e2TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee6b1a08a16525544e69bc5c0c83fbff220e2Pid == 'undefined' || window.tablee6b1a08a16525544e69bc5c0c83fbff220e2Pid!=null){
tablee6b1a08a16525544e69bc5c0c83fbff220e2Reload(window.tablee6b1a08a16525544e69bc5c0c83fbff220e2Pid);
}
}
var tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2 = [];
var uniqueColtablee6b1a08a16525544e69bc5c0c83fbff220e2 = [];
var uniqueColTitletablee6b1a08a16525544e69bc5c0c83fbff220e2 = [];
var defaultValuetablee6b1a08a16525544e69bc5c0c83fbff220e2 = {};
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '所获奖项',hidden:false, name: 'SHJX',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '女职工委员会成员',hidden:false, name: 'NZGWYH',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '获奖年度',hidden:false, name: 'HJLD',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablee6b1a08a16525544e69bc5c0c83fbff220e2").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d4c7b513416e/tablee6b1a08a16525544e69bc5c0c83fbff220e2/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee6b1a08a16525544e69bc5c0c83fbff220e2,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee6b1a08a16525544e69bc5c0c83fbff220e2SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee6b1a08a16525544e69bc5c0c83fbff220e2LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee6b1a08a16525544e69bc5c0c83fbff220e2OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee6b1a08a16525544e69bc5c0c83fbff220e2OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee6b1a08a16525544e69bc5c0c83fbff220e2GridComplete.exec();
				    setTimeout(function(){var height = $("#tablee6b1a08a16525544e69bc5c0c83fbff220e2").closest('.ui-jqgrid-bdiv').height();
					$("#tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords img").css("width","120px");
                 }else{
					    $("#tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee6b1a08a16525544e69bc5c0c83fbff220e2BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee6b1a08a16525544e69bc5c0c83fbff220e2OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords").hide();
		   	    $("#Pagertablee6b1a08a16525544e69bc5c0c83fbff220e2_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee6b1a08a16525544e69bc5c0c83fbff220e2").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee6b1a08a16525544e69bc5c0c83fbff220e2").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords").html() == null) {
						$("#tablee6b1a08a16525544e69bc5c0c83fbff220e2").parent().append("<div class='no_data' id='tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee6b1a08a16525544e69bc5c0c83fbff220e2norecords").show();
					$("#Pagertablee6b1a08a16525544e69bc5c0c83fbff220e2_left").css("display", "none");
				}
tablee6b1a08a16525544e69bc5c0c83fbff220e2LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee6b1a08a16525544e69bc5c0c83fbff220e2"
    });
tablee6b1a08a16525544e69bc5c0c83fbff220e2Reload();
$("#t_tablee6b1a08a16525544e69bc5c0c83fbff220e2").append($("#tableToolbartablee6b1a08a16525544e69bc5c0c83fbff220e2"));$("#tableToolbarButtoneb4797b0508a904fb41967b18e30a532feb5").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d4c76a48413d&grid=tablee6b1a08a16525544e69bc5c0c83fbff220e2',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton9e3c794288c5f64440d8b10983bc881cbe56").bind('click',function() {                                                                                       
	var ids = $('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d4c76a48413d&id=' + rowData.ID+'&grid=tablee6b1a08a16525544e69bc5c0c83fbff220e2',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonba3a35ef38848440da0882bb6c68b5dc0695").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_NZG1_JGJY_JCXJNZG&isbpm=N&dbid=948e83e391927ff30191d45362a101af', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d4c7b513416e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtonfb9c86899ea30b4a15a864c6d7ddf61b9e8a').bind('click',function() {                           
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
	        var colModels =$('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablee6b1a08a16525544e69bc5c0c83fbff220e2KeyWordIn;                          
	        expSearchParams.param = tablee6b1a08a16525544e69bc5c0c83fbff220e2ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='女职工1_巾帼建功立业_基层先进女职工委员会';                             
	        expSearchParams.viewid='948e83e391927ff30191d4c7b513416e';                                   
	        expSearchParams.tableid='tablee6b1a08a16525544e69bc5c0c83fbff220e2';                                 
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
$("#tableToolbarButton6b4f6e613ad4b74dfb584508ae1056c933aa").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'nzg1xjnzgwyh', callBackFunc: function () {                           	
		$('#tablee6b1a08a16525544e69bc5c0c83fbff220e2').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
