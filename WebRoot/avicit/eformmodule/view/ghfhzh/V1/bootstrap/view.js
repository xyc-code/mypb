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

function redraw948e83e392222286019231138ed6497e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e392222286019231138ed6497e").width();
		var win_height = $("#948e83e392222286019231138ed6497e").height();
		$('#948e83e392222286019231138ed6497e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e392222286019231138ed6497e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e392222286019231138ed6497e").width();
	setTimeout(function(){redraw948e83e392222286019231138ed6497e(win_width);},500);
});
var table0e385a1d185093474e4884332d77c08defd6KeyWordIn = "";    
var table0e385a1d185093474e4884332d77c08defd6ParamIn = "";    
var table0e385a1d185093474e4884332d77c08defd6SelectRow = {     
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
var table0e385a1d185093474e4884332d77c08defd6LoadComplete = {     
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
var table0e385a1d185093474e4884332d77c08defd6BeforeEditCell = {        
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
var table0e385a1d185093474e4884332d77c08defd6OndblClickRow = {     
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
var table0e385a1d185093474e4884332d77c08defd6OnRightClickRow = {     
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
var table0e385a1d185093474e4884332d77c08defd6GridComplete = {     
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
var table0e385a1d185093474e4884332d77c08defd6OnCellSelect = {     
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
var table0e385a1d185093474e4884332d77c08defd6LoadBeforeSend = {        
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
function table0e385a1d185093474e4884332d77c08defd6Reload(pid){
	var _isInvalid = true;
	$("#table0e385a1d185093474e4884332d77c08defd6").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0e385a1d185093474e4884332d77c08defd6Pid = pid;
		}
		return false;
	}
	window.table0e385a1d185093474e4884332d77c08defd6Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0e385a1d185093474e4884332d77c08defd6').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0e385a1d185093474e4884332d77c08defd6TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0e385a1d185093474e4884332d77c08defd6Pid == 'undefined' || window.table0e385a1d185093474e4884332d77c08defd6Pid!=null){
table0e385a1d185093474e4884332d77c08defd6Reload(window.table0e385a1d185093474e4884332d77c08defd6Pid);
}
}
var tablecmtable0e385a1d185093474e4884332d77c08defd6 = [];
var uniqueColtable0e385a1d185093474e4884332d77c08defd6 = [];
var uniqueColTitletable0e385a1d185093474e4884332d77c08defd6 = [];
var defaultValuetable0e385a1d185093474e4884332d77c08defd6 = {};
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '工会组织',hidden:false, name: 'GHZZ',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '工会主席',hidden:false, name: 'GHZX',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0e385a1d185093474e4884332d77c08defd6.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table0e385a1d185093474e4884332d77c08defd6").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e392222286019231138ed6497e/table0e385a1d185093474e4884332d77c08defd6/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable0e385a1d185093474e4884332d77c08defd6,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0e385a1d185093474e4884332d77c08defd6SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0e385a1d185093474e4884332d77c08defd6LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0e385a1d185093474e4884332d77c08defd6OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0e385a1d185093474e4884332d77c08defd6OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0e385a1d185093474e4884332d77c08defd6GridComplete.exec();
				    setTimeout(function(){var height = $("#table0e385a1d185093474e4884332d77c08defd6").closest('.ui-jqgrid-bdiv').height();
					$("#table0e385a1d185093474e4884332d77c08defd6norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0e385a1d185093474e4884332d77c08defd6norecords img").css("width","120px");
                 }else{
					    $("#table0e385a1d185093474e4884332d77c08defd6norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0e385a1d185093474e4884332d77c08defd6BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0e385a1d185093474e4884332d77c08defd6OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0e385a1d185093474e4884332d77c08defd6norecords").hide();
		   	    $("#Pagertable0e385a1d185093474e4884332d77c08defd6_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0e385a1d185093474e4884332d77c08defd6").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0e385a1d185093474e4884332d77c08defd6").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0e385a1d185093474e4884332d77c08defd6norecords").html() == null) {
						$("#table0e385a1d185093474e4884332d77c08defd6").parent().append("<div class='no_data' id='table0e385a1d185093474e4884332d77c08defd6norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0e385a1d185093474e4884332d77c08defd6norecords").show();
					$("#Pagertable0e385a1d185093474e4884332d77c08defd6_left").css("display", "none");
				}
table0e385a1d185093474e4884332d77c08defd6LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0e385a1d185093474e4884332d77c08defd6"
    });
table0e385a1d185093474e4884332d77c08defd6Reload();
$("#t_table0e385a1d185093474e4884332d77c08defd6").append($("#tableToolbartable0e385a1d185093474e4884332d77c08defd6"));$("#tableToolbarButtonc43912f22cc6c1462548f0a39e2dec49f7b4").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e392222286019231115d374969&grid=table0e385a1d185093474e4884332d77c08defd6',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton7f35c0b93c96c948912851442e59608d31be").bind('click',function() {                                                                                       
	var ids = $('#table0e385a1d185093474e4884332d77c08defd6').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table0e385a1d185093474e4884332d77c08defd6').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e392222286019231115d374969&id=' + rowData.ID+'&grid=table0e385a1d185093474e4884332d77c08defd6',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonb551c67a0e39854691284e1d31f78ec81ee5").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table0e385a1d185093474e4884332d77c08defd6').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table0e385a1d185093474e4884332d77c08defd6').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHFHZH&isbpm=N&dbid=948e83e3922222860192310fb05b494d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e392222286019231138ed6497e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table0e385a1d185093474e4884332d77c08defd6').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButtonc8e8977f3e06544f24e8de2f57b2aca1bf62').bind('click',function() {                           
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
	        var colModels =$('#table0e385a1d185093474e4884332d77c08defd6').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table0e385a1d185093474e4884332d77c08defd6KeyWordIn;                          
	        expSearchParams.param = table0e385a1d185093474e4884332d77c08defd6ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会分会支会';                             
	        expSearchParams.viewid='948e83e392222286019231138ed6497e';                                   
	        expSearchParams.tableid='table0e385a1d185093474e4884332d77c08defd6';                                 
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
$("#tableToolbarButtond2661530e3446b483bf8bde3e36b653d5af1").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'fhzh', callBackFunc: function () {                           	
		$('#table0e385a1d185093474e4884332d77c08defd6').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
