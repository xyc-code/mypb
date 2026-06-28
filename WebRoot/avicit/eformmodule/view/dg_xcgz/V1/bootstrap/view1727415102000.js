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

function redraw948e83e391927ff30191a12a323c0d8e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a12a323c0d8e").width();
		var win_height = $("#948e83e391927ff30191a12a323c0d8e").height();
		$('#948e83e391927ff30191a12a323c0d8e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a12a323c0d8e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a12a323c0d8e").width();
	setTimeout(function(){redraw948e83e391927ff30191a12a323c0d8e(win_width);},500);
});
var table8163e788ec7b5643377abb9a3fae54142aa1KeyWordIn = "";    
var table8163e788ec7b5643377abb9a3fae54142aa1ParamIn = "";    
var table8163e788ec7b5643377abb9a3fae54142aa1SelectRow = {     
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
var table8163e788ec7b5643377abb9a3fae54142aa1LoadComplete = {     
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
var table8163e788ec7b5643377abb9a3fae54142aa1BeforeEditCell = {        
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
var table8163e788ec7b5643377abb9a3fae54142aa1OndblClickRow = {     
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
var table8163e788ec7b5643377abb9a3fae54142aa1OnRightClickRow = {     
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
var table8163e788ec7b5643377abb9a3fae54142aa1GridComplete = {     
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
var table8163e788ec7b5643377abb9a3fae54142aa1OnCellSelect = {     
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
var table8163e788ec7b5643377abb9a3fae54142aa1LoadBeforeSend = {        
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
function table8163e788ec7b5643377abb9a3fae54142aa1Reload(pid){
	var _isInvalid = true;
	$("#table8163e788ec7b5643377abb9a3fae54142aa1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8163e788ec7b5643377abb9a3fae54142aa1Pid = pid;
		}
		return false;
	}
	window.table8163e788ec7b5643377abb9a3fae54142aa1Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table8163e788ec7b5643377abb9a3fae54142aa1TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8163e788ec7b5643377abb9a3fae54142aa1Pid == 'undefined' || window.table8163e788ec7b5643377abb9a3fae54142aa1Pid!=null){
table8163e788ec7b5643377abb9a3fae54142aa1Reload(window.table8163e788ec7b5643377abb9a3fae54142aa1Pid);
}
}
var tablecmtable8163e788ec7b5643377abb9a3fae54142aa1 = [];
var uniqueColtable8163e788ec7b5643377abb9a3fae54142aa1 = [];
var uniqueColTitletable8163e788ec7b5643377abb9a3fae54142aa1 = [];
var defaultValuetable8163e788ec7b5643377abb9a3fae54142aa1 = {};
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '年份',hidden:false, name: 'NF',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '宣传方式',hidden:false, name: 'XCFS',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '平台载体',hidden:false, name: 'PTZT',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '文章内容',hidden:false, name: 'WZLR',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8163e788ec7b5643377abb9a3fae54142aa1.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table8163e788ec7b5643377abb9a3fae54142aa1").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a12a323c0d8e/table8163e788ec7b5643377abb9a3fae54142aa1/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8163e788ec7b5643377abb9a3fae54142aa1,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8163e788ec7b5643377abb9a3fae54142aa1SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8163e788ec7b5643377abb9a3fae54142aa1LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8163e788ec7b5643377abb9a3fae54142aa1OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8163e788ec7b5643377abb9a3fae54142aa1OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8163e788ec7b5643377abb9a3fae54142aa1GridComplete.exec();
				    setTimeout(function(){var height = $("#table8163e788ec7b5643377abb9a3fae54142aa1").closest('.ui-jqgrid-bdiv').height();
					$("#table8163e788ec7b5643377abb9a3fae54142aa1norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8163e788ec7b5643377abb9a3fae54142aa1norecords img").css("width","120px");
                 }else{
					    $("#table8163e788ec7b5643377abb9a3fae54142aa1norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8163e788ec7b5643377abb9a3fae54142aa1BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8163e788ec7b5643377abb9a3fae54142aa1OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8163e788ec7b5643377abb9a3fae54142aa1norecords").hide();
		   	    $("#Pagertable8163e788ec7b5643377abb9a3fae54142aa1_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8163e788ec7b5643377abb9a3fae54142aa1").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8163e788ec7b5643377abb9a3fae54142aa1").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8163e788ec7b5643377abb9a3fae54142aa1norecords").html() == null) {
						$("#table8163e788ec7b5643377abb9a3fae54142aa1").parent().append("<div class='no_data' id='table8163e788ec7b5643377abb9a3fae54142aa1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8163e788ec7b5643377abb9a3fae54142aa1norecords").show();
					$("#Pagertable8163e788ec7b5643377abb9a3fae54142aa1_left").css("display", "none");
				}
table8163e788ec7b5643377abb9a3fae54142aa1LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8163e788ec7b5643377abb9a3fae54142aa1"
    });
table8163e788ec7b5643377abb9a3fae54142aa1Reload();
$("#t_table8163e788ec7b5643377abb9a3fae54142aa1").append($("#tableToolbartable8163e788ec7b5643377abb9a3fae54142aa1"));$("#tableToolbarButton6c1861ccf229b34d5cfab5ecccb32602bc21").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a129db8e0d7c&grid=table8163e788ec7b5643377abb9a3fae54142aa1',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonf28df1cb9bea8741028b2a9ebfaac23cf5b6").bind('click',function() {                                                                                       
	var ids = $('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a129db8e0d7c&id=' + rowData.ID+'&grid=table8163e788ec7b5643377abb9a3fae54142aa1',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton660bfb3bed0e6b44f88bee9e71e2c96f4379").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_SXCSX_XCGZ&isbpm=N&dbid=948e83e391927ff30191a11abcbc0bb6', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a12a323c0d8e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table8163e788ec7b5643377abb9a3fae54142aa1').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton0529fc6bc9db8845087886b592f0675f7ff0').bind('click',function() {                           
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
	        var colModels =$('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table8163e788ec7b5643377abb9a3fae54142aa1KeyWordIn;                          
	        expSearchParams.param = table8163e788ec7b5643377abb9a3fae54142aa1ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='宣传思想_宣传工作';                             
	        expSearchParams.viewid='948e83e391927ff30191a12a323c0d8e';                                   
	        expSearchParams.tableid='table8163e788ec7b5643377abb9a3fae54142aa1';                                 
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
$("#tableToolbarButtoncaf138ab9ee2494433b972b3d2e36c2e08a4").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'xcsx', callBackFunc: function () {                           	
		$('#table8163e788ec7b5643377abb9a3fae54142aa1').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
