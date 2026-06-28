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

function redraw948e83e3918c4fb001918c8f72120e4b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918c8f72120e4b").width();
		var win_height = $("#948e83e3918c4fb001918c8f72120e4b").height();
		$('#948e83e3918c4fb001918c8f72120e4b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918c8f72120e4b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918c8f72120e4b").width();
	setTimeout(function(){redraw948e83e3918c4fb001918c8f72120e4b(win_width);},500);
});
var tablefccb0480f66ed34e86681411c8ac0a237d96KeyWordIn = "";    
var tablefccb0480f66ed34e86681411c8ac0a237d96ParamIn = "";    
var tablefccb0480f66ed34e86681411c8ac0a237d96SelectRow = {     
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
var tablefccb0480f66ed34e86681411c8ac0a237d96LoadComplete = {     
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
var tablefccb0480f66ed34e86681411c8ac0a237d96BeforeEditCell = {        
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
var tablefccb0480f66ed34e86681411c8ac0a237d96OndblClickRow = {     
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
var tablefccb0480f66ed34e86681411c8ac0a237d96OnRightClickRow = {     
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
var tablefccb0480f66ed34e86681411c8ac0a237d96GridComplete = {     
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
var tablefccb0480f66ed34e86681411c8ac0a237d96OnCellSelect = {     
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
var tablefccb0480f66ed34e86681411c8ac0a237d96LoadBeforeSend = {        
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
function tablefccb0480f66ed34e86681411c8ac0a237d96Reload(pid){
	var _isInvalid = true;
	$("#tablefccb0480f66ed34e86681411c8ac0a237d96").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablefccb0480f66ed34e86681411c8ac0a237d96Pid = pid;
		}
		return false;
	}
	window.tablefccb0480f66ed34e86681411c8ac0a237d96Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablefccb0480f66ed34e86681411c8ac0a237d96TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablefccb0480f66ed34e86681411c8ac0a237d96Pid == 'undefined' || window.tablefccb0480f66ed34e86681411c8ac0a237d96Pid!=null){
tablefccb0480f66ed34e86681411c8ac0a237d96Reload(window.tablefccb0480f66ed34e86681411c8ac0a237d96Pid);
}
}
var tablecmtablefccb0480f66ed34e86681411c8ac0a237d96 = [];
var uniqueColtablefccb0480f66ed34e86681411c8ac0a237d96 = [];
var uniqueColTitletablefccb0480f66ed34e86681411c8ac0a237d96 = [];
var defaultValuetablefccb0480f66ed34e86681411c8ac0a237d96 = {};
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '获奖提案',hidden:false, name: 'HJTA',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '获奖奖项',hidden:false, name: 'HJJX',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '获奖单位',hidden:false, name: 'HJDW',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '集体奖励额度',hidden:false, name: 'JTJLED',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '获奖个人',hidden:false, name: 'HJGR',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '个人奖励额度',hidden:false, name: 'GRJLED',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablefccb0480f66ed34e86681411c8ac0a237d96.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablefccb0480f66ed34e86681411c8ac0a237d96").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918c8f72120e4b/tablefccb0480f66ed34e86681411c8ac0a237d96/N/V2',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablefccb0480f66ed34e86681411c8ac0a237d96,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablefccb0480f66ed34e86681411c8ac0a237d96SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablefccb0480f66ed34e86681411c8ac0a237d96LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablefccb0480f66ed34e86681411c8ac0a237d96OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablefccb0480f66ed34e86681411c8ac0a237d96OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablefccb0480f66ed34e86681411c8ac0a237d96GridComplete.exec();
				    setTimeout(function(){var height = $("#tablefccb0480f66ed34e86681411c8ac0a237d96").closest('.ui-jqgrid-bdiv').height();
					$("#tablefccb0480f66ed34e86681411c8ac0a237d96norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablefccb0480f66ed34e86681411c8ac0a237d96norecords img").css("width","120px");
                 }else{
					    $("#tablefccb0480f66ed34e86681411c8ac0a237d96norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablefccb0480f66ed34e86681411c8ac0a237d96BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablefccb0480f66ed34e86681411c8ac0a237d96OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablefccb0480f66ed34e86681411c8ac0a237d96norecords").hide();
		   	    $("#Pagertablefccb0480f66ed34e86681411c8ac0a237d96_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablefccb0480f66ed34e86681411c8ac0a237d96").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablefccb0480f66ed34e86681411c8ac0a237d96").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablefccb0480f66ed34e86681411c8ac0a237d96norecords").html() == null) {
						$("#tablefccb0480f66ed34e86681411c8ac0a237d96").parent().append("<div class='no_data' id='tablefccb0480f66ed34e86681411c8ac0a237d96norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablefccb0480f66ed34e86681411c8ac0a237d96norecords").show();
					$("#Pagertablefccb0480f66ed34e86681411c8ac0a237d96_left").css("display", "none");
				}
tablefccb0480f66ed34e86681411c8ac0a237d96LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablefccb0480f66ed34e86681411c8ac0a237d96"
    });
tablefccb0480f66ed34e86681411c8ac0a237d96Reload();
$("#t_tablefccb0480f66ed34e86681411c8ac0a237d96").append($("#tableToolbartablefccb0480f66ed34e86681411c8ac0a237d96"));$("#tableToolbarButton70ad915461e0f64be7f8876049dc601c0c94").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918c7eed420db8&grid=tablefccb0480f66ed34e86681411c8ac0a237d96',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonbcbe86ae84109c43cbc89af34f6616c29e67").bind('click',function() {                                                                                       
	var ids = $('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918c7eed420db8&id=' + rowData.ID+'&grid=tablefccb0480f66ed34e86681411c8ac0a237d96',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonc03f2b28f46ef54ece18fe93bcb22f24790e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_SNJLTA&isbpm=N&dbid=948e83e391591703019178cf07c24637', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918c8f72120e4b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablefccb0480f66ed34e86681411c8ac0a237d96').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton596f8b47ff234d45b35ad2296fd889e2254f').bind('click',function() {                           
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
	        var colModels =$('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablefccb0480f66ed34e86681411c8ac0a237d96KeyWordIn;                          
	        expSearchParams.param = tablefccb0480f66ed34e86681411c8ac0a237d96ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-上年奖励提案';                             
	        expSearchParams.viewid='948e83e3918c4fb001918c8f72120e4b';                                   
	        expSearchParams.tableid='tablefccb0480f66ed34e86681411c8ac0a237d96';                                 
	        expSearchParams.isbpm='N';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/V2'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
$("#tableToolbarButtonaf166f8644afca4f947adbc3d2c1e27536be").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'jlta', callBackFunc: function () {                           	
		$('#tablefccb0480f66ed34e86681411c8ac0a237d96').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
