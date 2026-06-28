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

function redraw948e83e39115f6b001914ab7e79652de(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39115f6b001914ab7e79652de").width();
		var win_height = $("#948e83e39115f6b001914ab7e79652de").height();
		$('#948e83e39115f6b001914ab7e79652de').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39115f6b001914ab7e79652de').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39115f6b001914ab7e79652de").width();
	setTimeout(function(){redraw948e83e39115f6b001914ab7e79652de(win_width);},500);
});
var tableb35bfc82a89bd343023acd2b10bf9673d477KeyWordIn = "";    
var tableb35bfc82a89bd343023acd2b10bf9673d477ParamIn = "";    
var tableb35bfc82a89bd343023acd2b10bf9673d477SelectRow = {     
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
var tableb35bfc82a89bd343023acd2b10bf9673d477LoadComplete = {     
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
var tableb35bfc82a89bd343023acd2b10bf9673d477BeforeEditCell = {        
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
var tableb35bfc82a89bd343023acd2b10bf9673d477OndblClickRow = {     
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
var tableb35bfc82a89bd343023acd2b10bf9673d477OnRightClickRow = {     
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
var tableb35bfc82a89bd343023acd2b10bf9673d477GridComplete = {     
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
var tableb35bfc82a89bd343023acd2b10bf9673d477OnCellSelect = {     
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
var tableb35bfc82a89bd343023acd2b10bf9673d477LoadBeforeSend = {        
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
function tableb35bfc82a89bd343023acd2b10bf9673d477Reload(pid){
	var _isInvalid = true;
	$("#tableb35bfc82a89bd343023acd2b10bf9673d477").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb35bfc82a89bd343023acd2b10bf9673d477Pid = pid;
		}
		return false;
	}
	window.tableb35bfc82a89bd343023acd2b10bf9673d477Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableb35bfc82a89bd343023acd2b10bf9673d477TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb35bfc82a89bd343023acd2b10bf9673d477Pid == 'undefined' || window.tableb35bfc82a89bd343023acd2b10bf9673d477Pid!=null){
tableb35bfc82a89bd343023acd2b10bf9673d477Reload(window.tableb35bfc82a89bd343023acd2b10bf9673d477Pid);
}
}
var tablecmtableb35bfc82a89bd343023acd2b10bf9673d477 = [];
var uniqueColtableb35bfc82a89bd343023acd2b10bf9673d477 = [];
var uniqueColTitletableb35bfc82a89bd343023acd2b10bf9673d477 = [];
var defaultValuetableb35bfc82a89bd343023acd2b10bf9673d477 = {};
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '分类',hidden:false, name: 'D_FL',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '党组织名称',hidden:false, name: 'D_DZZMC',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '活动主题',hidden:false, name: 'D_HDZT',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '活动目标',hidden:false, name: 'D_HDMB',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '活动任务简介',hidden:false, name: 'D_HDRWJJ',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '重要里程碑节点及内容',hidden:false, name: 'D_ZYLCB_JDJNR',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '活动载体',hidden:false, name: 'D_HDZAIT',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '组织类型',hidden:false, name: 'D_ZZLX',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '备注',hidden:false, name: 'D_BZ',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb35bfc82a89bd343023acd2b10bf9673d477.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableb35bfc82a89bd343023acd2b10bf9673d477").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39115f6b001914ab7e79652de/tableb35bfc82a89bd343023acd2b10bf9673d477/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb35bfc82a89bd343023acd2b10bf9673d477,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb35bfc82a89bd343023acd2b10bf9673d477SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb35bfc82a89bd343023acd2b10bf9673d477LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb35bfc82a89bd343023acd2b10bf9673d477OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb35bfc82a89bd343023acd2b10bf9673d477OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb35bfc82a89bd343023acd2b10bf9673d477GridComplete.exec();
				    setTimeout(function(){var height = $("#tableb35bfc82a89bd343023acd2b10bf9673d477").closest('.ui-jqgrid-bdiv').height();
					$("#tableb35bfc82a89bd343023acd2b10bf9673d477norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb35bfc82a89bd343023acd2b10bf9673d477norecords img").css("width","120px");
                 }else{
					    $("#tableb35bfc82a89bd343023acd2b10bf9673d477norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb35bfc82a89bd343023acd2b10bf9673d477BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb35bfc82a89bd343023acd2b10bf9673d477OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb35bfc82a89bd343023acd2b10bf9673d477norecords").hide();
		   	    $("#Pagertableb35bfc82a89bd343023acd2b10bf9673d477_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb35bfc82a89bd343023acd2b10bf9673d477").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb35bfc82a89bd343023acd2b10bf9673d477").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb35bfc82a89bd343023acd2b10bf9673d477norecords").html() == null) {
						$("#tableb35bfc82a89bd343023acd2b10bf9673d477").parent().append("<div class='no_data' id='tableb35bfc82a89bd343023acd2b10bf9673d477norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb35bfc82a89bd343023acd2b10bf9673d477norecords").show();
					$("#Pagertableb35bfc82a89bd343023acd2b10bf9673d477_left").css("display", "none");
				}
tableb35bfc82a89bd343023acd2b10bf9673d477LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb35bfc82a89bd343023acd2b10bf9673d477"
    });
tableb35bfc82a89bd343023acd2b10bf9673d477Reload();
$("#t_tableb35bfc82a89bd343023acd2b10bf9673d477").append($("#tableToolbartableb35bfc82a89bd343023acd2b10bf9673d477"));$("#tableToolbarButton9f5627d20fc5cd4c9cf8b2f9c4510595662b").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914ab52ab15291&grid=tableb35bfc82a89bd343023acd2b10bf9673d477',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton7b3a6aaf1ed37b46c668ba144120795fbd5e").bind('click',function() {                                                                                       
	var ids = $('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39115f6b001914ab52ab15291&id=' + rowData.ID+'&grid=tableb35bfc82a89bd343023acd2b10bf9673d477',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton8fa86a845babd54a6058a96b0f08f8619cbb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_YZBYTS&isbpm=N&dbid=948e83e39106cf160191075d78062a2e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39115f6b001914ab7e79652de',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableb35bfc82a89bd343023acd2b10bf9673d477').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton4eeed8dc282bc1487caa78defb1ab81d8506").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_yzbyts', callBackFunc: function () {                           	
		$('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton86be77d85204a04a138bc454c65acc90ec25').bind('click',function() {                           
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
	        var colModels =$('#tableb35bfc82a89bd343023acd2b10bf9673d477').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableb35bfc82a89bd343023acd2b10bf9673d477KeyWordIn;                          
	        expSearchParams.param = tableb35bfc82a89bd343023acd2b10bf9673d477ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_一支部一特色';                             
	        expSearchParams.viewid='948e83e39115f6b001914ab7e79652de';                                   
	        expSearchParams.tableid='tableb35bfc82a89bd343023acd2b10bf9673d477';                                 
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
