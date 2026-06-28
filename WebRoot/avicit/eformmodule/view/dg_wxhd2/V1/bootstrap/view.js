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

function redraw948e83e391927ff30191a1446e111bb1(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a1446e111bb1").width();
		var win_height = $("#948e83e391927ff30191a1446e111bb1").height();
		$('#948e83e391927ff30191a1446e111bb1').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a1446e111bb1').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a1446e111bb1").width();
	setTimeout(function(){redraw948e83e391927ff30191a1446e111bb1(win_width);},500);
});
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540KeyWordIn = "";    
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540ParamIn = "";    
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540SelectRow = {     
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540LoadComplete = {     
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540BeforeEditCell = {        
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540OndblClickRow = {     
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540OnRightClickRow = {     
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540GridComplete = {     
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540OnCellSelect = {     
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
var tablefe6dcfe23c2fea4ca1196375b4a7646a9540LoadBeforeSend = {        
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
function tablefe6dcfe23c2fea4ca1196375b4a7646a9540Reload(pid){
	var _isInvalid = true;
	$("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablefe6dcfe23c2fea4ca1196375b4a7646a9540Pid = pid;
		}
		return false;
	}
	window.tablefe6dcfe23c2fea4ca1196375b4a7646a9540Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablefe6dcfe23c2fea4ca1196375b4a7646a9540TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablefe6dcfe23c2fea4ca1196375b4a7646a9540Pid == 'undefined' || window.tablefe6dcfe23c2fea4ca1196375b4a7646a9540Pid!=null){
tablefe6dcfe23c2fea4ca1196375b4a7646a9540Reload(window.tablefe6dcfe23c2fea4ca1196375b4a7646a9540Pid);
}
}
var tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540 = [];
var uniqueColtablefe6dcfe23c2fea4ca1196375b4a7646a9540 = [];
var uniqueColTitletablefe6dcfe23c2fea4ca1196375b4a7646a9540 = [];
var defaultValuetablefe6dcfe23c2fea4ca1196375b4a7646a9540 = {};
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '项目名称',hidden:false, name: 'XMMC',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '项目负责人',hidden:false, name: 'XMFZR',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '所在单位',hidden:false, name: 'SZDW',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '岗位职务',hidden:false, name: 'GWZW',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '项目指导',hidden:false, name: 'XMZD',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '项目简介',hidden:false, name: 'XMJJ',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '项目目标',hidden:false, name: 'XMMB',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '项目成果',hidden:false, name: 'XMCG',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a1446e111bb1/tablefe6dcfe23c2fea4ca1196375b4a7646a9540/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablefe6dcfe23c2fea4ca1196375b4a7646a9540,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablefe6dcfe23c2fea4ca1196375b4a7646a9540SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablefe6dcfe23c2fea4ca1196375b4a7646a9540LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablefe6dcfe23c2fea4ca1196375b4a7646a9540OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablefe6dcfe23c2fea4ca1196375b4a7646a9540OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablefe6dcfe23c2fea4ca1196375b4a7646a9540GridComplete.exec();
				    setTimeout(function(){var height = $("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540").closest('.ui-jqgrid-bdiv').height();
					$("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords img").css("width","120px");
                 }else{
					    $("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablefe6dcfe23c2fea4ca1196375b4a7646a9540BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablefe6dcfe23c2fea4ca1196375b4a7646a9540OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords").hide();
		   	    $("#Pagertablefe6dcfe23c2fea4ca1196375b4a7646a9540_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords").html() == null) {
						$("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540").parent().append("<div class='no_data' id='tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablefe6dcfe23c2fea4ca1196375b4a7646a9540norecords").show();
					$("#Pagertablefe6dcfe23c2fea4ca1196375b4a7646a9540_left").css("display", "none");
				}
tablefe6dcfe23c2fea4ca1196375b4a7646a9540LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablefe6dcfe23c2fea4ca1196375b4a7646a9540"
    });
tablefe6dcfe23c2fea4ca1196375b4a7646a9540Reload();
$("#t_tablefe6dcfe23c2fea4ca1196375b4a7646a9540").append($("#tableToolbartablefe6dcfe23c2fea4ca1196375b4a7646a9540"));$("#tableToolbarButtone3fa5321b4993b4675a866b109dfbd7c74ce").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a143db701b98&grid=tablefe6dcfe23c2fea4ca1196375b4a7646a9540',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtond6c63e326f932846ed59aa34d3c002dcf6eb").bind('click',function() {                                                                                       
	var ids = $('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a143db701b98&id=' + rowData.ID+'&grid=tablefe6dcfe23c2fea4ca1196375b4a7646a9540',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtona454b5d903a1614f574878ec4ac1beb9d028").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WXHDZSB2&isbpm=N&dbid=948e83e391927ff30191976e52684793', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a1446e111bb1',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton401183ee8462304ab1787277bb5bac6c4a08').bind('click',function() {                           
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
	        var colModels =$('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablefe6dcfe23c2fea4ca1196375b4a7646a9540KeyWordIn;                          
	        expSearchParams.param = tablefe6dcfe23c2fea4ca1196375b4a7646a9540ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_五小活动展示表2';                             
	        expSearchParams.viewid='948e83e391927ff30191a1446e111bb1';                                   
	        expSearchParams.tableid='tablefe6dcfe23c2fea4ca1196375b4a7646a9540';                                 
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
$("#tableToolbarButtona6c214f0af46e543a6b85f580b1d28b50dd5").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wxhd2', callBackFunc: function () {                           	
		$('#tablefe6dcfe23c2fea4ca1196375b4a7646a9540').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
