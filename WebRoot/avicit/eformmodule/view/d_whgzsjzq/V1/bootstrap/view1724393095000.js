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

function redraw948e83e39159170301917dd58b336538(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39159170301917dd58b336538").width();
		var win_height = $("#948e83e39159170301917dd58b336538").height();
		$('#948e83e39159170301917dd58b336538').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39159170301917dd58b336538').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39159170301917dd58b336538").width();
	setTimeout(function(){redraw948e83e39159170301917dd58b336538(win_width);},500);
});
var tablee544599be545294970ba262d85ff4f4e9b58KeyWordIn = "";    
var tablee544599be545294970ba262d85ff4f4e9b58ParamIn = "";    
var tablee544599be545294970ba262d85ff4f4e9b58SelectRow = {     
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
var tablee544599be545294970ba262d85ff4f4e9b58LoadComplete = {     
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
var tablee544599be545294970ba262d85ff4f4e9b58BeforeEditCell = {        
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
var tablee544599be545294970ba262d85ff4f4e9b58OndblClickRow = {     
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
var tablee544599be545294970ba262d85ff4f4e9b58OnRightClickRow = {     
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
var tablee544599be545294970ba262d85ff4f4e9b58GridComplete = {     
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
var tablee544599be545294970ba262d85ff4f4e9b58OnCellSelect = {     
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
var tablee544599be545294970ba262d85ff4f4e9b58LoadBeforeSend = {        
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
function tablee544599be545294970ba262d85ff4f4e9b58Reload(pid){
	var _isInvalid = true;
	$("#tablee544599be545294970ba262d85ff4f4e9b58").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee544599be545294970ba262d85ff4f4e9b58Pid = pid;
		}
		return false;
	}
	window.tablee544599be545294970ba262d85ff4f4e9b58Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee544599be545294970ba262d85ff4f4e9b58').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee544599be545294970ba262d85ff4f4e9b58TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee544599be545294970ba262d85ff4f4e9b58Pid == 'undefined' || window.tablee544599be545294970ba262d85ff4f4e9b58Pid!=null){
tablee544599be545294970ba262d85ff4f4e9b58Reload(window.tablee544599be545294970ba262d85ff4f4e9b58Pid);
}
}
var tablecmtablee544599be545294970ba262d85ff4f4e9b58 = [];
var uniqueColtablee544599be545294970ba262d85ff4f4e9b58 = [];
var uniqueColTitletablee544599be545294970ba262d85ff4f4e9b58 = [];
var defaultValuetablee544599be545294970ba262d85ff4f4e9b58 = {};
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '工作组别',hidden:false, name: 'GZZB',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '单位名称',hidden:false, name: 'DWMC',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '单位主管领导',hidden:false, name: 'DWZGLD',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '企业文化推进员',hidden:false, name: 'QYWHTJY',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '主要内容',hidden:false, name: 'ZYNR',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '开展年度',hidden:false, name: 'KZND',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '开展季度',hidden:false, name: 'KZJD',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '参加人数',hidden:false, name: 'CJRS',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '活动亮点',hidden:false, name: 'HDLD',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '图片数量',hidden:false, name: 'TPSL',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '备注',hidden:false, name: 'BZ',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee544599be545294970ba262d85ff4f4e9b58.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablee544599be545294970ba262d85ff4f4e9b58").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39159170301917dd58b336538/tablee544599be545294970ba262d85ff4f4e9b58/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee544599be545294970ba262d85ff4f4e9b58,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee544599be545294970ba262d85ff4f4e9b58SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee544599be545294970ba262d85ff4f4e9b58LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee544599be545294970ba262d85ff4f4e9b58OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee544599be545294970ba262d85ff4f4e9b58OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee544599be545294970ba262d85ff4f4e9b58GridComplete.exec();
				    setTimeout(function(){var height = $("#tablee544599be545294970ba262d85ff4f4e9b58").closest('.ui-jqgrid-bdiv').height();
					$("#tablee544599be545294970ba262d85ff4f4e9b58norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee544599be545294970ba262d85ff4f4e9b58norecords img").css("width","120px");
                 }else{
					    $("#tablee544599be545294970ba262d85ff4f4e9b58norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee544599be545294970ba262d85ff4f4e9b58BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee544599be545294970ba262d85ff4f4e9b58OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee544599be545294970ba262d85ff4f4e9b58norecords").hide();
		   	    $("#Pagertablee544599be545294970ba262d85ff4f4e9b58_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee544599be545294970ba262d85ff4f4e9b58").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee544599be545294970ba262d85ff4f4e9b58").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee544599be545294970ba262d85ff4f4e9b58norecords").html() == null) {
						$("#tablee544599be545294970ba262d85ff4f4e9b58").parent().append("<div class='no_data' id='tablee544599be545294970ba262d85ff4f4e9b58norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee544599be545294970ba262d85ff4f4e9b58norecords").show();
					$("#Pagertablee544599be545294970ba262d85ff4f4e9b58_left").css("display", "none");
				}
tablee544599be545294970ba262d85ff4f4e9b58LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee544599be545294970ba262d85ff4f4e9b58"
    });
tablee544599be545294970ba262d85ff4f4e9b58Reload();
$("#t_tablee544599be545294970ba262d85ff4f4e9b58").append($("#tableToolbartablee544599be545294970ba262d85ff4f4e9b58"));$("#tableToolbarButton7e2defd67038cb44e3a8f72da2e9a6d104db").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301917dd4f8c56518&grid=tablee544599be545294970ba262d85ff4f4e9b58',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton9c3b321a0018b84b8fe8d924c4740bcb3e6f").bind('click',function() {                                                                                       
	var ids = $('#tablee544599be545294970ba262d85ff4f4e9b58').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee544599be545294970ba262d85ff4f4e9b58').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39159170301917dd4f8c56518&id=' + rowData.ID+'&grid=tablee544599be545294970ba262d85ff4f4e9b58',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonc68275c24e008a484d986ff8f14ec250ddb4").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee544599be545294970ba262d85ff4f4e9b58').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee544599be545294970ba262d85ff4f4e9b58').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_XCSX_WHGZ&isbpm=N&dbid=948e83e39159170301917dc9e4db644c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39159170301917dd58b336538',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee544599be545294970ba262d85ff4f4e9b58').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton82388cf6fe5b034b140977ff519fe738eaa0').bind('click',function() {                           
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
	        var colModels =$('#tablee544599be545294970ba262d85ff4f4e9b58').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablee544599be545294970ba262d85ff4f4e9b58KeyWordIn;                          
	        expSearchParams.param = tablee544599be545294970ba262d85ff4f4e9b58ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='宣传思想-文化工作';                             
	        expSearchParams.viewid='948e83e39159170301917dd58b336538';                                   
	        expSearchParams.tableid='tablee544599be545294970ba262d85ff4f4e9b58';                                 
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
