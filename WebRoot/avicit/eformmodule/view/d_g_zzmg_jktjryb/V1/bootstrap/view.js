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

function redraw948e83e391927ff30191d52dc4de5370(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d52dc4de5370").width();
		var win_height = $("#948e83e391927ff30191d52dc4de5370").height();
		$('#948e83e391927ff30191d52dc4de5370').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d52dc4de5370').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d52dc4de5370").width();
	setTimeout(function(){redraw948e83e391927ff30191d52dc4de5370(win_width);},500);
});
var table9a6091637c521a44fb3a437bdded05322a03KeyWordIn = "";    
var table9a6091637c521a44fb3a437bdded05322a03ParamIn = "";    
var table9a6091637c521a44fb3a437bdded05322a03SelectRow = {     
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
var table9a6091637c521a44fb3a437bdded05322a03LoadComplete = {     
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
var table9a6091637c521a44fb3a437bdded05322a03BeforeEditCell = {        
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
var table9a6091637c521a44fb3a437bdded05322a03OndblClickRow = {     
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
var table9a6091637c521a44fb3a437bdded05322a03OnRightClickRow = {     
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
var table9a6091637c521a44fb3a437bdded05322a03GridComplete = {     
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
var table9a6091637c521a44fb3a437bdded05322a03OnCellSelect = {     
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
var table9a6091637c521a44fb3a437bdded05322a03LoadBeforeSend = {        
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
function table9a6091637c521a44fb3a437bdded05322a03Reload(pid){
	var _isInvalid = true;
	$("#table9a6091637c521a44fb3a437bdded05322a03").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table9a6091637c521a44fb3a437bdded05322a03Pid = pid;
		}
		return false;
	}
	window.table9a6091637c521a44fb3a437bdded05322a03Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table9a6091637c521a44fb3a437bdded05322a03TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table9a6091637c521a44fb3a437bdded05322a03Pid == 'undefined' || window.table9a6091637c521a44fb3a437bdded05322a03Pid!=null){
table9a6091637c521a44fb3a437bdded05322a03Reload(window.table9a6091637c521a44fb3a437bdded05322a03Pid);
}
}
var tablecmtable9a6091637c521a44fb3a437bdded05322a03 = [];
var uniqueColtable9a6091637c521a44fb3a437bdded05322a03 = [];
var uniqueColTitletable9a6091637c521a44fb3a437bdded05322a03 = [];
var defaultValuetable9a6091637c521a44fb3a437bdded05322a03 = {};
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '年龄',hidden:false, name: 'NL',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable9a6091637c521a44fb3a437bdded05322a03.push({label: '体检时间',hidden:false, name: 'TJSJ',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table9a6091637c521a44fb3a437bdded05322a03").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d52dc4de5370/table9a6091637c521a44fb3a437bdded05322a03/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable9a6091637c521a44fb3a437bdded05322a03,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table9a6091637c521a44fb3a437bdded05322a03SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table9a6091637c521a44fb3a437bdded05322a03LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table9a6091637c521a44fb3a437bdded05322a03OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table9a6091637c521a44fb3a437bdded05322a03OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table9a6091637c521a44fb3a437bdded05322a03GridComplete.exec();
				    setTimeout(function(){var height = $("#table9a6091637c521a44fb3a437bdded05322a03").closest('.ui-jqgrid-bdiv').height();
					$("#table9a6091637c521a44fb3a437bdded05322a03norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table9a6091637c521a44fb3a437bdded05322a03norecords img").css("width","120px");
                 }else{
					    $("#table9a6091637c521a44fb3a437bdded05322a03norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table9a6091637c521a44fb3a437bdded05322a03BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table9a6091637c521a44fb3a437bdded05322a03OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table9a6091637c521a44fb3a437bdded05322a03norecords").hide();
		   	    $("#Pagertable9a6091637c521a44fb3a437bdded05322a03_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table9a6091637c521a44fb3a437bdded05322a03").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table9a6091637c521a44fb3a437bdded05322a03").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table9a6091637c521a44fb3a437bdded05322a03norecords").html() == null) {
						$("#table9a6091637c521a44fb3a437bdded05322a03").parent().append("<div class='no_data' id='table9a6091637c521a44fb3a437bdded05322a03norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table9a6091637c521a44fb3a437bdded05322a03norecords").show();
					$("#Pagertable9a6091637c521a44fb3a437bdded05322a03_left").css("display", "none");
				}
table9a6091637c521a44fb3a437bdded05322a03LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable9a6091637c521a44fb3a437bdded05322a03"
    });
table9a6091637c521a44fb3a437bdded05322a03Reload();
$("#t_table9a6091637c521a44fb3a437bdded05322a03").append($("#tableToolbartable9a6091637c521a44fb3a437bdded05322a03"));$("#tableToolbarButton08ef9ced591d1948bf182f271fc300add727").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d52d3a6b5358&grid=table9a6091637c521a44fb3a437bdded05322a03',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton92547481a482db434e9af16240317794afc0").bind('click',function() {                                                                                       
	var ids = $('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d52d3a6b5358&id=' + rowData.ID+'&grid=table9a6091637c521a44fb3a437bdded05322a03',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton7e6e45b7a0aa514267aaf90381b68c4576ac").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_JKTJRYTJB&isbpm=N&dbid=948e83e391927ff30191d498fb28194b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d52dc4de5370',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table9a6091637c521a44fb3a437bdded05322a03').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton1edca8510f83604fbfe8363b8645ff78eb46').bind('click',function() {                           
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
	        var colModels =$('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table9a6091637c521a44fb3a437bdded05322a03KeyWordIn;                          
	        expSearchParams.param = table9a6091637c521a44fb3a437bdded05322a03ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_健康体检人员统计表';                             
	        expSearchParams.viewid='948e83e391927ff30191d52dc4de5370';                                   
	        expSearchParams.tableid='table9a6091637c521a44fb3a437bdded05322a03';                                 
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
$("#tableToolbarButton576100cf8829a747507843433ba71e06dfa4").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'jktj', callBackFunc: function () {                           	
		$('#table9a6091637c521a44fb3a437bdded05322a03').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
