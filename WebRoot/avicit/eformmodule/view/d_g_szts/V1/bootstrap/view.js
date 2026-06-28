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

function redraw948e83e391927ff30191d4b935ed3497(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d4b935ed3497").width();
		var win_height = $("#948e83e391927ff30191d4b935ed3497").height();
		$('#948e83e391927ff30191d4b935ed3497').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d4b935ed3497').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d4b935ed3497").width();
	setTimeout(function(){redraw948e83e391927ff30191d4b935ed3497(win_width);},500);
});
var table46a3e8a574357542e8e89a64147dcfecb21aKeyWordIn = "";    
var table46a3e8a574357542e8e89a64147dcfecb21aParamIn = "";    
var table46a3e8a574357542e8e89a64147dcfecb21aSelectRow = {     
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
var table46a3e8a574357542e8e89a64147dcfecb21aLoadComplete = {     
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
var table46a3e8a574357542e8e89a64147dcfecb21aBeforeEditCell = {        
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
var table46a3e8a574357542e8e89a64147dcfecb21aOndblClickRow = {     
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
var table46a3e8a574357542e8e89a64147dcfecb21aOnRightClickRow = {     
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
var table46a3e8a574357542e8e89a64147dcfecb21aGridComplete = {     
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
var table46a3e8a574357542e8e89a64147dcfecb21aOnCellSelect = {     
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
var table46a3e8a574357542e8e89a64147dcfecb21aLoadBeforeSend = {        
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
function table46a3e8a574357542e8e89a64147dcfecb21aReload(pid){
	var _isInvalid = true;
	$("#table46a3e8a574357542e8e89a64147dcfecb21a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table46a3e8a574357542e8e89a64147dcfecb21aPid = pid;
		}
		return false;
	}
	window.table46a3e8a574357542e8e89a64147dcfecb21aPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table46a3e8a574357542e8e89a64147dcfecb21aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table46a3e8a574357542e8e89a64147dcfecb21aPid == 'undefined' || window.table46a3e8a574357542e8e89a64147dcfecb21aPid!=null){
table46a3e8a574357542e8e89a64147dcfecb21aReload(window.table46a3e8a574357542e8e89a64147dcfecb21aPid);
}
}
var tablecmtable46a3e8a574357542e8e89a64147dcfecb21a = [];
var uniqueColtable46a3e8a574357542e8e89a64147dcfecb21a = [];
var uniqueColTitletable46a3e8a574357542e8e89a64147dcfecb21a = [];
var defaultValuetable46a3e8a574357542e8e89a64147dcfecb21a = {};
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '实施项目',hidden:false, name: 'SSXM',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '进展情况',hidden:false, name: 'JZQK',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable46a3e8a574357542e8e89a64147dcfecb21a.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table46a3e8a574357542e8e89a64147dcfecb21a").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d4b935ed3497/table46a3e8a574357542e8e89a64147dcfecb21a/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable46a3e8a574357542e8e89a64147dcfecb21a,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table46a3e8a574357542e8e89a64147dcfecb21aSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table46a3e8a574357542e8e89a64147dcfecb21aLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table46a3e8a574357542e8e89a64147dcfecb21aOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table46a3e8a574357542e8e89a64147dcfecb21aOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table46a3e8a574357542e8e89a64147dcfecb21aGridComplete.exec();
				    setTimeout(function(){var height = $("#table46a3e8a574357542e8e89a64147dcfecb21a").closest('.ui-jqgrid-bdiv').height();
					$("#table46a3e8a574357542e8e89a64147dcfecb21anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table46a3e8a574357542e8e89a64147dcfecb21anorecords img").css("width","120px");
                 }else{
					    $("#table46a3e8a574357542e8e89a64147dcfecb21anorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table46a3e8a574357542e8e89a64147dcfecb21aBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table46a3e8a574357542e8e89a64147dcfecb21aOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table46a3e8a574357542e8e89a64147dcfecb21anorecords").hide();
		   	    $("#Pagertable46a3e8a574357542e8e89a64147dcfecb21a_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table46a3e8a574357542e8e89a64147dcfecb21a").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table46a3e8a574357542e8e89a64147dcfecb21a").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table46a3e8a574357542e8e89a64147dcfecb21anorecords").html() == null) {
						$("#table46a3e8a574357542e8e89a64147dcfecb21a").parent().append("<div class='no_data' id='table46a3e8a574357542e8e89a64147dcfecb21anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table46a3e8a574357542e8e89a64147dcfecb21anorecords").show();
					$("#Pagertable46a3e8a574357542e8e89a64147dcfecb21a_left").css("display", "none");
				}
table46a3e8a574357542e8e89a64147dcfecb21aLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable46a3e8a574357542e8e89a64147dcfecb21a"
    });
table46a3e8a574357542e8e89a64147dcfecb21aReload();
$("#t_table46a3e8a574357542e8e89a64147dcfecb21a").append($("#tableToolbartable46a3e8a574357542e8e89a64147dcfecb21a"));$("#tableToolbarButton47890380409230436a6851cbee449846747f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d4b8d1452bde&grid=table46a3e8a574357542e8e89a64147dcfecb21a',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonad6f4a68cb281149dc89a2727e012ef6df7e").bind('click',function() {                                                                                       
	var ids = $('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d4b8d1452bde&id=' + rowData.ID+'&grid=table46a3e8a574357542e8e89a64147dcfecb21a',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtond84acd522e61aa4f84195263513bfa64c6e9").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_NZG1_SZTS&isbpm=N&dbid=948e83e391927ff30191d45feeb602db', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d4b935ed3497',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table46a3e8a574357542e8e89a64147dcfecb21a').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton290a9f08d31770448ee8fd966456a225341b').bind('click',function() {                           
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
	        var colModels =$('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table46a3e8a574357542e8e89a64147dcfecb21aKeyWordIn;                          
	        expSearchParams.param = table46a3e8a574357542e8e89a64147dcfecb21aParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='女职工1_素质提升';                             
	        expSearchParams.viewid='948e83e391927ff30191d4b935ed3497';                                   
	        expSearchParams.tableid='table46a3e8a574357542e8e89a64147dcfecb21a';                                 
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
$("#tableToolbarButton6b54bd650eadee49cb380a6c0ff789c0559b").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'nzg1szts', callBackFunc: function () {                           	
		$('#table46a3e8a574357542e8e89a64147dcfecb21a').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
