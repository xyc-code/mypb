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

function redraw948e83e391927ff30191d543e35c5760(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d543e35c5760").width();
		var win_height = $("#948e83e391927ff30191d543e35c5760").height();
		$('#948e83e391927ff30191d543e35c5760').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d543e35c5760').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d543e35c5760").width();
	setTimeout(function(){redraw948e83e391927ff30191d543e35c5760(win_width);},500);
});
var tablef4b6421f8943084d1b79b3932075cc3bfd3cKeyWordIn = "";    
var tablef4b6421f8943084d1b79b3932075cc3bfd3cParamIn = "";    
var tablef4b6421f8943084d1b79b3932075cc3bfd3cSelectRow = {     
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cLoadComplete = {     
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cBeforeEditCell = {        
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cOndblClickRow = {     
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cOnRightClickRow = {     
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cGridComplete = {     
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cOnCellSelect = {     
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
var tablef4b6421f8943084d1b79b3932075cc3bfd3cLoadBeforeSend = {        
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
function tablef4b6421f8943084d1b79b3932075cc3bfd3cReload(pid){
	var _isInvalid = true;
	$("#tablef4b6421f8943084d1b79b3932075cc3bfd3c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef4b6421f8943084d1b79b3932075cc3bfd3cPid = pid;
		}
		return false;
	}
	window.tablef4b6421f8943084d1b79b3932075cc3bfd3cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablef4b6421f8943084d1b79b3932075cc3bfd3cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef4b6421f8943084d1b79b3932075cc3bfd3cPid == 'undefined' || window.tablef4b6421f8943084d1b79b3932075cc3bfd3cPid!=null){
tablef4b6421f8943084d1b79b3932075cc3bfd3cReload(window.tablef4b6421f8943084d1b79b3932075cc3bfd3cPid);
}
}
var tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c = [];
var uniqueColtablef4b6421f8943084d1b79b3932075cc3bfd3c = [];
var uniqueColTitletablef4b6421f8943084d1b79b3932075cc3bfd3c = [];
var defaultValuetablef4b6421f8943084d1b79b3932075cc3bfd3c = {};
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '总序',hidden:false, name: 'ZX',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '年龄',hidden:false, name: 'NL',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '民族',hidden:false, name: 'MZ',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '学历',hidden:false, name: 'XL',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '政治面貌',hidden:false, name: 'ZZMM',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '职称',hidden:false, name: 'ZC',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '代表身份',hidden:false, name: 'DBSM',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablef4b6421f8943084d1b79b3932075cc3bfd3c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d543e35c5760/tablef4b6421f8943084d1b79b3932075cc3bfd3c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablef4b6421f8943084d1b79b3932075cc3bfd3c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef4b6421f8943084d1b79b3932075cc3bfd3cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef4b6421f8943084d1b79b3932075cc3bfd3cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef4b6421f8943084d1b79b3932075cc3bfd3cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef4b6421f8943084d1b79b3932075cc3bfd3cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef4b6421f8943084d1b79b3932075cc3bfd3cGridComplete.exec();
				    setTimeout(function(){var height = $("#tablef4b6421f8943084d1b79b3932075cc3bfd3c").closest('.ui-jqgrid-bdiv').height();
					$("#tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords img").css("width","120px");
                 }else{
					    $("#tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef4b6421f8943084d1b79b3932075cc3bfd3cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef4b6421f8943084d1b79b3932075cc3bfd3cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords").hide();
		   	    $("#Pagertablef4b6421f8943084d1b79b3932075cc3bfd3c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef4b6421f8943084d1b79b3932075cc3bfd3c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef4b6421f8943084d1b79b3932075cc3bfd3c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords").html() == null) {
						$("#tablef4b6421f8943084d1b79b3932075cc3bfd3c").parent().append("<div class='no_data' id='tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef4b6421f8943084d1b79b3932075cc3bfd3cnorecords").show();
					$("#Pagertablef4b6421f8943084d1b79b3932075cc3bfd3c_left").css("display", "none");
				}
tablef4b6421f8943084d1b79b3932075cc3bfd3cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef4b6421f8943084d1b79b3932075cc3bfd3c"
    });
tablef4b6421f8943084d1b79b3932075cc3bfd3cReload();
$("#t_tablef4b6421f8943084d1b79b3932075cc3bfd3c").append($("#tableToolbartablef4b6421f8943084d1b79b3932075cc3bfd3c"));$("#tableToolbarButton8f96c73fb08b6c497b1a28e3238e9a200e07").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d5438feb573e&grid=tablef4b6421f8943084d1b79b3932075cc3bfd3c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonee1dc54a464f7944db783cc9ee417bb46e35").bind('click',function() {                                                                                       
	var ids = $('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d5438feb573e&id=' + rowData.ID+'&grid=tablef4b6421f8943084d1b79b3932075cc3bfd3c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton67365458ba2f5944f6f8f2021444cd112bf8").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_MGZZ_ZGDB&isbpm=N&dbid=948e83e391927ff30191d48296851463', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d543e35c5760',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton4605d66d088f51486259a5e8fefe0b20834c').bind('click',function() {                           
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
	        var colModels =$('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablef4b6421f8943084d1b79b3932075cc3bfd3cKeyWordIn;                          
	        expSearchParams.param = tablef4b6421f8943084d1b79b3932075cc3bfd3cParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_职工代表';                             
	        expSearchParams.viewid='948e83e391927ff30191d543e35c5760';                                   
	        expSearchParams.tableid='tablef4b6421f8943084d1b79b3932075cc3bfd3c';                                 
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
$("#tableToolbarButton00fd11d448ff65468068d50485af56fc54f5").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'zzmg_zgdb', callBackFunc: function () {                           	
		$('#tablef4b6421f8943084d1b79b3932075cc3bfd3c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
