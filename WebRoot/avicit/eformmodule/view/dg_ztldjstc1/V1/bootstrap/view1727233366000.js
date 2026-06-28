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

function redraw948e83e391927ff30191a13879bc1a5b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191a13879bc1a5b").width();
		var win_height = $("#948e83e391927ff30191a13879bc1a5b").height();
		$('#948e83e391927ff30191a13879bc1a5b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191a13879bc1a5b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191a13879bc1a5b").width();
	setTimeout(function(){redraw948e83e391927ff30191a13879bc1a5b(win_width);},500);
});
var table41e483d9ee6ab44be1f91adeae2906b1a205KeyWordIn = "";    
var table41e483d9ee6ab44be1f91adeae2906b1a205ParamIn = "";    
var table41e483d9ee6ab44be1f91adeae2906b1a205SelectRow = {     
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
var table41e483d9ee6ab44be1f91adeae2906b1a205LoadComplete = {     
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
var table41e483d9ee6ab44be1f91adeae2906b1a205BeforeEditCell = {        
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
var table41e483d9ee6ab44be1f91adeae2906b1a205OndblClickRow = {     
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
var table41e483d9ee6ab44be1f91adeae2906b1a205OnRightClickRow = {     
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
var table41e483d9ee6ab44be1f91adeae2906b1a205GridComplete = {     
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
var table41e483d9ee6ab44be1f91adeae2906b1a205OnCellSelect = {     
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
var table41e483d9ee6ab44be1f91adeae2906b1a205LoadBeforeSend = {        
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
function table41e483d9ee6ab44be1f91adeae2906b1a205Reload(pid){
	var _isInvalid = true;
	$("#table41e483d9ee6ab44be1f91adeae2906b1a205").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table41e483d9ee6ab44be1f91adeae2906b1a205Pid = pid;
		}
		return false;
	}
	window.table41e483d9ee6ab44be1f91adeae2906b1a205Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table41e483d9ee6ab44be1f91adeae2906b1a205TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table41e483d9ee6ab44be1f91adeae2906b1a205Pid == 'undefined' || window.table41e483d9ee6ab44be1f91adeae2906b1a205Pid!=null){
table41e483d9ee6ab44be1f91adeae2906b1a205Reload(window.table41e483d9ee6ab44be1f91adeae2906b1a205Pid);
}
}
var tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205 = [];
var uniqueColtable41e483d9ee6ab44be1f91adeae2906b1a205 = [];
var uniqueColTitletable41e483d9ee6ab44be1f91adeae2906b1a205 = [];
var defaultValuetable41e483d9ee6ab44be1f91adeae2906b1a205 = {};
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '竞赛类型',hidden:false, name: 'JSLX',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '竞赛名称',hidden:false, name: 'JSMC',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '牵头部门',hidden:false, name: 'QTBM',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '协助部门',hidden:false, name: 'XZBM',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '开展情况',hidden:false, name: 'KZQK',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table41e483d9ee6ab44be1f91adeae2906b1a205").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191a13879bc1a5b/table41e483d9ee6ab44be1f91adeae2906b1a205/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable41e483d9ee6ab44be1f91adeae2906b1a205,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table41e483d9ee6ab44be1f91adeae2906b1a205SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table41e483d9ee6ab44be1f91adeae2906b1a205LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table41e483d9ee6ab44be1f91adeae2906b1a205OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table41e483d9ee6ab44be1f91adeae2906b1a205OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table41e483d9ee6ab44be1f91adeae2906b1a205GridComplete.exec();
				    setTimeout(function(){var height = $("#table41e483d9ee6ab44be1f91adeae2906b1a205").closest('.ui-jqgrid-bdiv').height();
					$("#table41e483d9ee6ab44be1f91adeae2906b1a205norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table41e483d9ee6ab44be1f91adeae2906b1a205norecords img").css("width","120px");
                 }else{
					    $("#table41e483d9ee6ab44be1f91adeae2906b1a205norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table41e483d9ee6ab44be1f91adeae2906b1a205BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table41e483d9ee6ab44be1f91adeae2906b1a205OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table41e483d9ee6ab44be1f91adeae2906b1a205norecords").hide();
		   	    $("#Pagertable41e483d9ee6ab44be1f91adeae2906b1a205_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table41e483d9ee6ab44be1f91adeae2906b1a205").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table41e483d9ee6ab44be1f91adeae2906b1a205").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table41e483d9ee6ab44be1f91adeae2906b1a205norecords").html() == null) {
						$("#table41e483d9ee6ab44be1f91adeae2906b1a205").parent().append("<div class='no_data' id='table41e483d9ee6ab44be1f91adeae2906b1a205norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table41e483d9ee6ab44be1f91adeae2906b1a205norecords").show();
					$("#Pagertable41e483d9ee6ab44be1f91adeae2906b1a205_left").css("display", "none");
				}
table41e483d9ee6ab44be1f91adeae2906b1a205LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable41e483d9ee6ab44be1f91adeae2906b1a205"
    });
table41e483d9ee6ab44be1f91adeae2906b1a205Reload();
$("#t_table41e483d9ee6ab44be1f91adeae2906b1a205").append($("#tableToolbartable41e483d9ee6ab44be1f91adeae2906b1a205"));$("#tableToolbarButton224bb4b65985074fb489c6553df87c33dacb").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a137e5fe1a3f&grid=table41e483d9ee6ab44be1f91adeae2906b1a205',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtone959315e2d9d444b13c8395d3d33ad7005df").bind('click',function() {                                                                                       
	var ids = $('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191a137e5fe1a3f&id=' + rowData.ID+'&grid=table41e483d9ee6ab44be1f91adeae2906b1a205',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton488776436a20e44806cad151d8efc29bab5d").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZTNDJSTC_1&isbpm=N&dbid=948e83e3918c4fb001918d4cc8d5223f', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191a13879bc1a5b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table41e483d9ee6ab44be1f91adeae2906b1a205').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton437a7642ebf459438868edba817f829ee194').bind('click',function() {                           
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
	        var colModels =$('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table41e483d9ee6ab44be1f91adeae2906b1a205KeyWordIn;                          
	        expSearchParams.param = table41e483d9ee6ab44be1f91adeae2906b1a205ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作_主题劳动竞赛弹窗1';                             
	        expSearchParams.viewid='948e83e391927ff30191a13879bc1a5b';                                   
	        expSearchParams.tableid='table41e483d9ee6ab44be1f91adeae2906b1a205';                                 
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
$("#tableToolbarButton189f00a8be75f34f3d886c1addb9d4fc7ff5").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'tc1', callBackFunc: function () {                           	
		$('#table41e483d9ee6ab44be1f91adeae2906b1a205').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
