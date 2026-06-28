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

function redraw948e83e391927ff30191bb80d65e7bbe(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191bb80d65e7bbe").width();
		var win_height = $("#948e83e391927ff30191bb80d65e7bbe").height();
		$('#948e83e391927ff30191bb80d65e7bbe').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191bb80d65e7bbe').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191bb80d65e7bbe").width();
	setTimeout(function(){redraw948e83e391927ff30191bb80d65e7bbe(win_width);},500);
});
var table5be160f35b4c504d4cf8b2fb2f0118c69660KeyWordIn = "";    
var table5be160f35b4c504d4cf8b2fb2f0118c69660ParamIn = "";    
var table5be160f35b4c504d4cf8b2fb2f0118c69660SelectRow = {     
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660LoadComplete = {     
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660BeforeEditCell = {        
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660OndblClickRow = {     
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660OnRightClickRow = {     
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660GridComplete = {     
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660OnCellSelect = {     
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
var table5be160f35b4c504d4cf8b2fb2f0118c69660LoadBeforeSend = {        
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
function table5be160f35b4c504d4cf8b2fb2f0118c69660Reload(pid){
	var _isInvalid = true;
	$("#table5be160f35b4c504d4cf8b2fb2f0118c69660").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5be160f35b4c504d4cf8b2fb2f0118c69660Pid = pid;
		}
		return false;
	}
	window.table5be160f35b4c504d4cf8b2fb2f0118c69660Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5be160f35b4c504d4cf8b2fb2f0118c69660TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5be160f35b4c504d4cf8b2fb2f0118c69660Pid == 'undefined' || window.table5be160f35b4c504d4cf8b2fb2f0118c69660Pid!=null){
table5be160f35b4c504d4cf8b2fb2f0118c69660Reload(window.table5be160f35b4c504d4cf8b2fb2f0118c69660Pid);
}
}
var tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660 = [];
var uniqueColtable5be160f35b4c504d4cf8b2fb2f0118c69660 = [];
var uniqueColTitletable5be160f35b4c504d4cf8b2fb2f0118c69660 = [];
var defaultValuetable5be160f35b4c504d4cf8b2fb2f0118c69660 = {};
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '类别',hidden:false, name: 'NB',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '监督项目',hidden:false, name: 'JDXM',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '完成时间',hidden:false, name: 'WCSJ',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '完成情况',hidden:false, name: 'EJDWCQK',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '季度',hidden:false, name: 'JD',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '备注',hidden:false, name: 'BZ',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table5be160f35b4c504d4cf8b2fb2f0118c69660").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191bb80d65e7bbe/table5be160f35b4c504d4cf8b2fb2f0118c69660/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5be160f35b4c504d4cf8b2fb2f0118c69660,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5be160f35b4c504d4cf8b2fb2f0118c69660SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5be160f35b4c504d4cf8b2fb2f0118c69660LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5be160f35b4c504d4cf8b2fb2f0118c69660OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5be160f35b4c504d4cf8b2fb2f0118c69660OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5be160f35b4c504d4cf8b2fb2f0118c69660GridComplete.exec();
				    setTimeout(function(){var height = $("#table5be160f35b4c504d4cf8b2fb2f0118c69660").closest('.ui-jqgrid-bdiv').height();
					$("#table5be160f35b4c504d4cf8b2fb2f0118c69660norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5be160f35b4c504d4cf8b2fb2f0118c69660norecords img").css("width","120px");
                 }else{
					    $("#table5be160f35b4c504d4cf8b2fb2f0118c69660norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5be160f35b4c504d4cf8b2fb2f0118c69660BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5be160f35b4c504d4cf8b2fb2f0118c69660OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5be160f35b4c504d4cf8b2fb2f0118c69660norecords").hide();
		   	    $("#Pagertable5be160f35b4c504d4cf8b2fb2f0118c69660_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5be160f35b4c504d4cf8b2fb2f0118c69660").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5be160f35b4c504d4cf8b2fb2f0118c69660").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5be160f35b4c504d4cf8b2fb2f0118c69660norecords").html() == null) {
						$("#table5be160f35b4c504d4cf8b2fb2f0118c69660").parent().append("<div class='no_data' id='table5be160f35b4c504d4cf8b2fb2f0118c69660norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5be160f35b4c504d4cf8b2fb2f0118c69660norecords").show();
					$("#Pagertable5be160f35b4c504d4cf8b2fb2f0118c69660_left").css("display", "none");
				}
table5be160f35b4c504d4cf8b2fb2f0118c69660LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5be160f35b4c504d4cf8b2fb2f0118c69660"
    });
table5be160f35b4c504d4cf8b2fb2f0118c69660Reload();
$("#t_table5be160f35b4c504d4cf8b2fb2f0118c69660").append($("#tableToolbartable5be160f35b4c504d4cf8b2fb2f0118c69660"));$("#tableToolbarButton48228b136bde0c47f478c3218cb71a494a07").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191bb8077077ba5&grid=table5be160f35b4c504d4cf8b2fb2f0118c69660',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonf60a4da2a6f6ff4b21a89c19cf0182f6383f").bind('click',function() {                                                                                       
	var ids = $('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191bb8077077ba5&id=' + rowData.ID+'&grid=table5be160f35b4c504d4cf8b2fb2f0118c69660',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtona11422e3ce142243b039250244575dbb1f90").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_JJZDJDGZ&isbpm=N&dbid=948e83e391927ff30191bb72241579fe', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191bb80d65e7bbe',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5be160f35b4c504d4cf8b2fb2f0118c69660').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtonf1222ad8a768fb4982e80f7fe161a636b110').bind('click',function() {                           
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
	        var colModels =$('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table5be160f35b4c504d4cf8b2fb2f0118c69660KeyWordIn;                          
	        expSearchParams.param = table5be160f35b4c504d4cf8b2fb2f0118c69660ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='纪委_纪检重点监督工作';                             
	        expSearchParams.viewid='948e83e391927ff30191bb80d65e7bbe';                                   
	        expSearchParams.tableid='table5be160f35b4c504d4cf8b2fb2f0118c69660';                                 
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
$("#tableToolbarButtonfe7a6b41681a0b40ef8867abe491563ef371").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zdjdgz', callBackFunc: function () {                           	
		$('#table5be160f35b4c504d4cf8b2fb2f0118c69660').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
