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

function redraw948e83e390a0fe270190a4b8cd3d638f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390a0fe270190a4b8cd3d638f").width();
		var win_height = $("#948e83e390a0fe270190a4b8cd3d638f").height();
		$('#948e83e390a0fe270190a4b8cd3d638f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e390a0fe270190a4b8cd3d638f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390a0fe270190a4b8cd3d638f").width();
	setTimeout(function(){redraw948e83e390a0fe270190a4b8cd3d638f(win_width);},500);
});
var table7b24c8a93128224931b98e38aeedd13ef7b8KeyWordIn = "";    
var table7b24c8a93128224931b98e38aeedd13ef7b8ParamIn = "";    
var table7b24c8a93128224931b98e38aeedd13ef7b8SelectRow = {     
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
var table7b24c8a93128224931b98e38aeedd13ef7b8LoadComplete = {     
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
var table7b24c8a93128224931b98e38aeedd13ef7b8BeforeEditCell = {        
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
var table7b24c8a93128224931b98e38aeedd13ef7b8OndblClickRow = {     
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
var table7b24c8a93128224931b98e38aeedd13ef7b8OnRightClickRow = {     
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
var table7b24c8a93128224931b98e38aeedd13ef7b8GridComplete = {     
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
var table7b24c8a93128224931b98e38aeedd13ef7b8OnCellSelect = {     
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
var table7b24c8a93128224931b98e38aeedd13ef7b8LoadBeforeSend = {        
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
function table7b24c8a93128224931b98e38aeedd13ef7b8Reload(pid){
	var _isInvalid = true;
	$("#table7b24c8a93128224931b98e38aeedd13ef7b8").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table7b24c8a93128224931b98e38aeedd13ef7b8Pid = pid;
		}
		return false;
	}
	window.table7b24c8a93128224931b98e38aeedd13ef7b8Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table7b24c8a93128224931b98e38aeedd13ef7b8TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table7b24c8a93128224931b98e38aeedd13ef7b8Pid == 'undefined' || window.table7b24c8a93128224931b98e38aeedd13ef7b8Pid!=null){
table7b24c8a93128224931b98e38aeedd13ef7b8Reload(window.table7b24c8a93128224931b98e38aeedd13ef7b8Pid);
}
}
var tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8 = [];
var uniqueColtable7b24c8a93128224931b98e38aeedd13ef7b8 = [];
var uniqueColTitletable7b24c8a93128224931b98e38aeedd13ef7b8 = [];
var defaultValuetable7b24c8a93128224931b98e38aeedd13ef7b8 = {};
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '分类', formatter:formattable7b24c8a93128224931b98e38aeedd13ef7b8Detail, hidden:false, name: 'FL',align:'center',  width: '150px'});
function formattable7b24c8a93128224931b98e38aeedd13ef7b8Detail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable7b24c8a93128224931b98e38aeedd13ef7b8Detail(\''+id+'\')">'+cellvalue+'</a>';
}function totable7b24c8a93128224931b98e38aeedd13ef7b8Detail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e390a0fe270190a4c7f5fb67a6&id='+id      
	});  
}tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '党组织名称',hidden:false, name: 'DZZMC',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '活动主题',hidden:false, name: 'HDZT',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '活动目标',hidden:false, name: 'HDMB',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '活动任务简介',hidden:false, name: 'HDRWJJ',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '重要里程碑节点及内容',hidden:false, name: 'ZYLCBJDJNR',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '活动载体',hidden:false, name: 'HUODZT',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '组织类型',hidden:false, name: 'ZZLX',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '备注',hidden:false, name: 'NOTE',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
;$(document).ready(function(){ 

$("#table7b24c8a93128224931b98e38aeedd13ef7b8").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390a0fe270190a4b8cd3d638f/table7b24c8a93128224931b98e38aeedd13ef7b8/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable7b24c8a93128224931b98e38aeedd13ef7b8,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table7b24c8a93128224931b98e38aeedd13ef7b8SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table7b24c8a93128224931b98e38aeedd13ef7b8LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table7b24c8a93128224931b98e38aeedd13ef7b8OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table7b24c8a93128224931b98e38aeedd13ef7b8OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table7b24c8a93128224931b98e38aeedd13ef7b8GridComplete.exec();
				    setTimeout(function(){var height = $("#table7b24c8a93128224931b98e38aeedd13ef7b8").closest('.ui-jqgrid-bdiv').height();
					$("#table7b24c8a93128224931b98e38aeedd13ef7b8norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table7b24c8a93128224931b98e38aeedd13ef7b8norecords img").css("width","120px");
                 }else{
					    $("#table7b24c8a93128224931b98e38aeedd13ef7b8norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table7b24c8a93128224931b98e38aeedd13ef7b8BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table7b24c8a93128224931b98e38aeedd13ef7b8OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table7b24c8a93128224931b98e38aeedd13ef7b8norecords").hide();
		   	    $("#Pagertable7b24c8a93128224931b98e38aeedd13ef7b8_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table7b24c8a93128224931b98e38aeedd13ef7b8").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table7b24c8a93128224931b98e38aeedd13ef7b8").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table7b24c8a93128224931b98e38aeedd13ef7b8norecords").html() == null) {
						$("#table7b24c8a93128224931b98e38aeedd13ef7b8").parent().append("<div class='no_data' id='table7b24c8a93128224931b98e38aeedd13ef7b8norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table7b24c8a93128224931b98e38aeedd13ef7b8norecords").show();
					$("#Pagertable7b24c8a93128224931b98e38aeedd13ef7b8_left").css("display", "none");
				}
table7b24c8a93128224931b98e38aeedd13ef7b8LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable7b24c8a93128224931b98e38aeedd13ef7b8"
    });
table7b24c8a93128224931b98e38aeedd13ef7b8Reload();
$("#t_table7b24c8a93128224931b98e38aeedd13ef7b8").append($("#tableToolbartable7b24c8a93128224931b98e38aeedd13ef7b8"));$("#tableToolbarButton333234d0881052441898beeb9f727a9e1b59").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390a0fe270190a4c7f5fb67a6&grid=table7b24c8a93128224931b98e38aeedd13ef7b8',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton42ee38a7873dfe405a0a5dfe12a6ac9bc356").bind('click',function() {                                                                                       
	var ids = $('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390a0fe270190a4c7f5fb67a6&id=' + rowData.ID+'&grid=table7b24c8a93128224931b98e38aeedd13ef7b8',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonf4edcc72f0d5c04b2ba974c01f120049b3e3").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DP_YZBYTS&isbpm=N&dbid=948e83e390a0fe270190a4bb16c663f0', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e390a0fe270190a4b8cd3d638f',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table7b24c8a93128224931b98e38aeedd13ef7b8').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton6dc7a09472d93c47cbd932790e9330898b4a").bind('click',function() {                                                                      	
	excelImport('dpyzbts',{}, function(){                           	
		$('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
	});																				
}                                                                                  
);

$('#tableToolbarButton13983d153ace07477b7b0143fed1a20b9845').bind('click',function() {                           
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
	        var colModels =$('#table7b24c8a93128224931b98e38aeedd13ef7b8').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table7b24c8a93128224931b98e38aeedd13ef7b8KeyWordIn;                          
	        expSearchParams.param = table7b24c8a93128224931b98e38aeedd13ef7b8ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏一支部一特色';                             
	        expSearchParams.viewid='948e83e390a0fe270190a4b8cd3d638f';                                   
	        expSearchParams.tableid='table7b24c8a93128224931b98e38aeedd13ef7b8';                                 
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
;});	 
