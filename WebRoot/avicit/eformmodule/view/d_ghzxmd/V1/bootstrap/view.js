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

function redraw948e83e39115f6b001914aa5514d5189(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39115f6b001914aa5514d5189").width();
		var win_height = $("#948e83e39115f6b001914aa5514d5189").height();
		$('#948e83e39115f6b001914aa5514d5189').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39115f6b001914aa5514d5189').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39115f6b001914aa5514d5189").width();
	setTimeout(function(){redraw948e83e39115f6b001914aa5514d5189(win_width);},500);
});
var table0c918f6dbb75544ef59b302184da31f08cbfKeyWordIn = "";    
var table0c918f6dbb75544ef59b302184da31f08cbfParamIn = "";    
var table0c918f6dbb75544ef59b302184da31f08cbfSelectRow = {     
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
var table0c918f6dbb75544ef59b302184da31f08cbfLoadComplete = {     
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
var table0c918f6dbb75544ef59b302184da31f08cbfBeforeEditCell = {        
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
var table0c918f6dbb75544ef59b302184da31f08cbfOndblClickRow = {     
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
var table0c918f6dbb75544ef59b302184da31f08cbfOnRightClickRow = {     
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
var table0c918f6dbb75544ef59b302184da31f08cbfGridComplete = {     
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
var table0c918f6dbb75544ef59b302184da31f08cbfOnCellSelect = {     
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
var table0c918f6dbb75544ef59b302184da31f08cbfLoadBeforeSend = {        
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
function table0c918f6dbb75544ef59b302184da31f08cbfReload(pid){
	var _isInvalid = true;
	$("#table0c918f6dbb75544ef59b302184da31f08cbf").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0c918f6dbb75544ef59b302184da31f08cbfPid = pid;
		}
		return false;
	}
	window.table0c918f6dbb75544ef59b302184da31f08cbfPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0c918f6dbb75544ef59b302184da31f08cbfTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0c918f6dbb75544ef59b302184da31f08cbfPid == 'undefined' || window.table0c918f6dbb75544ef59b302184da31f08cbfPid!=null){
table0c918f6dbb75544ef59b302184da31f08cbfReload(window.table0c918f6dbb75544ef59b302184da31f08cbfPid);
}
}
var tablecmtable0c918f6dbb75544ef59b302184da31f08cbf = [];
var uniqueColtable0c918f6dbb75544ef59b302184da31f08cbf = [];
var uniqueColTitletable0c918f6dbb75544ef59b302184da31f08cbf = [];
var defaultValuetable0c918f6dbb75544ef59b302184da31f08cbf = {};
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '单位（全称）',hidden:false, name: 'D_DWQC',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '单位（简称）',hidden:false, name: 'D_DWJC',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '工会主席',hidden:false, name: 'D_GHZX',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '专职/兼职',hidden:false, name: 'D_ZZ',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '电话',hidden:false, name: 'D_DH',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '手机号',hidden:false, name: 'D_SJH',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0c918f6dbb75544ef59b302184da31f08cbf.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table0c918f6dbb75544ef59b302184da31f08cbf").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39115f6b001914aa5514d5189/table0c918f6dbb75544ef59b302184da31f08cbf/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable0c918f6dbb75544ef59b302184da31f08cbf,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0c918f6dbb75544ef59b302184da31f08cbfSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0c918f6dbb75544ef59b302184da31f08cbfLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0c918f6dbb75544ef59b302184da31f08cbfOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0c918f6dbb75544ef59b302184da31f08cbfOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0c918f6dbb75544ef59b302184da31f08cbfGridComplete.exec();
				    setTimeout(function(){var height = $("#table0c918f6dbb75544ef59b302184da31f08cbf").closest('.ui-jqgrid-bdiv').height();
					$("#table0c918f6dbb75544ef59b302184da31f08cbfnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0c918f6dbb75544ef59b302184da31f08cbfnorecords img").css("width","120px");
                 }else{
					    $("#table0c918f6dbb75544ef59b302184da31f08cbfnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0c918f6dbb75544ef59b302184da31f08cbfBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0c918f6dbb75544ef59b302184da31f08cbfOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0c918f6dbb75544ef59b302184da31f08cbfnorecords").hide();
		   	    $("#Pagertable0c918f6dbb75544ef59b302184da31f08cbf_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0c918f6dbb75544ef59b302184da31f08cbf").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0c918f6dbb75544ef59b302184da31f08cbf").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0c918f6dbb75544ef59b302184da31f08cbfnorecords").html() == null) {
						$("#table0c918f6dbb75544ef59b302184da31f08cbf").parent().append("<div class='no_data' id='table0c918f6dbb75544ef59b302184da31f08cbfnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0c918f6dbb75544ef59b302184da31f08cbfnorecords").show();
					$("#Pagertable0c918f6dbb75544ef59b302184da31f08cbf_left").css("display", "none");
				}
table0c918f6dbb75544ef59b302184da31f08cbfLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0c918f6dbb75544ef59b302184da31f08cbf"
    });
table0c918f6dbb75544ef59b302184da31f08cbfReload();
$("#t_table0c918f6dbb75544ef59b302184da31f08cbf").append($("#tableToolbartable0c918f6dbb75544ef59b302184da31f08cbf"));$("#tableToolbarButtona754332447792d42c01b4f2bc4e325c52c26").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914aa2c1cc5139&grid=table0c918f6dbb75544ef59b302184da31f08cbf',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton2c5e7925ef2a4f441f88a9c1271d8b6a9298").bind('click',function() {                                                                                       
	var ids = $('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914aa2c1cc5139&id=' + rowData.ID+'&grid=table0c918f6dbb75544ef59b302184da31f08cbf',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton21ff19b88b8a2a40a5f85c25c6946c3c68e2").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_GHZXMD&isbpm=N&dbid=948e83e39106cf160191075c8f8a29d2', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39115f6b001914aa5514d5189',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table0c918f6dbb75544ef59b302184da31f08cbf').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtoncabd88eb48c68242e828fdd392645dcc80fb").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_ghzxmd', callBackFunc: function () {                           	
		$('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButtoned4bf50a7037cf4b246bf76ee5f2694486dd').bind('click',function() {                           
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
	        var colModels =$('#table0c918f6dbb75544ef59b302184da31f08cbf').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table0c918f6dbb75544ef59b302184da31f08cbfKeyWordIn;                          
	        expSearchParams.param = table0c918f6dbb75544ef59b302184da31f08cbfParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_工会主席名单';                             
	        expSearchParams.viewid='948e83e39115f6b001914aa5514d5189';                                   
	        expSearchParams.tableid='table0c918f6dbb75544ef59b302184da31f08cbf';                                 
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
