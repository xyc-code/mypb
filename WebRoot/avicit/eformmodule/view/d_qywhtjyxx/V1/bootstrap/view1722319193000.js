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

function redraw948e83e390fd39870191014d87765c2d(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390fd39870191014d87765c2d").width();
		var win_height = $("#948e83e390fd39870191014d87765c2d").height();
		$('#948e83e390fd39870191014d87765c2d').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e390fd39870191014d87765c2d').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390fd39870191014d87765c2d").width();
	setTimeout(function(){redraw948e83e390fd39870191014d87765c2d(win_width);},500);
});
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8KeyWordIn = "";    
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8ParamIn = "";    
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8SelectRow = {     
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8LoadComplete = {     
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8BeforeEditCell = {        
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8OndblClickRow = {     
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8OnRightClickRow = {     
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8GridComplete = {     
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8OnCellSelect = {     
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
var table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8LoadBeforeSend = {        
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
function table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Reload(pid){
	var _isInvalid = true;
	$("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Pid = pid;
		}
		return false;
	}
	window.table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Pid == 'undefined' || window.table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Pid!=null){
table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Reload(window.table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Pid);
}
}
var tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8 = [];
var uniqueColtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8 = [];
var uniqueColTitletable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8 = [];
var defaultValuetable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8 = {};
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '单位',hidden:false, name: 'D_DW',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '姓名',hidden:false, name: 'D_XM',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '性别',hidden:false, name: 'D_XB',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '科室',hidden:false, name: 'D_KS',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '电话',hidden:false, name: 'D_DH',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '职务',hidden:false, name: 'D_ZW',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '涉密等级',hidden:false, name: 'D_SMDJ',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '工作电话',hidden:false, name: 'D_GZDH',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '手机',hidden:false, name: 'D_SJ',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
;$(document).ready(function(){ 

$("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390fd39870191014d87765c2d/table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8GridComplete.exec();
				    setTimeout(function(){var height = $("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").closest('.ui-jqgrid-bdiv').height();
					$("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords img").css("width","120px");
                 }else{
					    $("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords").hide();
		   	    $("#Pagertable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords").html() == null) {
						$("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").parent().append("<div class='no_data' id='table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8norecords").show();
					$("#Pagertable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8_left").css("display", "none");
				}
table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8"
    });
table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8Reload();
$("#t_table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8").append($("#tableToolbartable2b7e8a1dbb462f4f57c8e4364b67fe6fdba8"));$("#tableToolbarButton7ba183d294a1e74b42c84efc94e9826e2f8f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390fd39870191017807317630&grid=table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton24a8e2303ad85d4dd618e2cb61e724c71cc4").bind('click',function() {                                                                                       
	var ids = $('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390fd39870191017807317630&id=' + rowData.ID+'&grid=table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonb5bc9e132510784ffc18432ca19932020884").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_D_QYWHTJYXX&isbpm=N&dbid=948e83e390fd398701910146ca395b7b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e390fd39870191014d87765c2d',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonbd7165c603e11d4f9888adf3d903c9803552").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'd_qywhtjyxx', callBackFunc: function () {                           	
		$('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButtoncf4525d1aaaf3148e0784defad74960e24f8').bind('click',function() {                           
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
	        var colModels =$('#table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8KeyWordIn;                          
	        expSearchParams.param = table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='大屏_企业文化推进员信息';                             
	        expSearchParams.viewid='948e83e390fd39870191014d87765c2d';                                   
	        expSearchParams.tableid='table2b7e8a1dbb462f4f57c8e4364b67fe6fdba8';                                 
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
