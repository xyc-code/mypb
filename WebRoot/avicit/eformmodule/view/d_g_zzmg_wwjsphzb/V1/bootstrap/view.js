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

function redraw948e83e391927ff30191d536184c54c1(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d536184c54c1").width();
		var win_height = $("#948e83e391927ff30191d536184c54c1").height();
		$('#948e83e391927ff30191d536184c54c1').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d536184c54c1').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d536184c54c1").width();
	setTimeout(function(){redraw948e83e391927ff30191d536184c54c1(win_width);},500);
});
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dKeyWordIn = "";    
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dParamIn = "";    
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dSelectRow = {     
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dLoadComplete = {     
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dBeforeEditCell = {        
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dOndblClickRow = {     
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dOnRightClickRow = {     
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dGridComplete = {     
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dOnCellSelect = {     
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
var tablee4b12874dcaa2a47f61bf5fe76c643ddd03dLoadBeforeSend = {        
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
function tablee4b12874dcaa2a47f61bf5fe76c643ddd03dReload(pid){
	var _isInvalid = true;
	$("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee4b12874dcaa2a47f61bf5fe76c643ddd03dPid = pid;
		}
		return false;
	}
	window.tablee4b12874dcaa2a47f61bf5fe76c643ddd03dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee4b12874dcaa2a47f61bf5fe76c643ddd03dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee4b12874dcaa2a47f61bf5fe76c643ddd03dPid == 'undefined' || window.tablee4b12874dcaa2a47f61bf5fe76c643ddd03dPid!=null){
tablee4b12874dcaa2a47f61bf5fe76c643ddd03dReload(window.tablee4b12874dcaa2a47f61bf5fe76c643ddd03dPid);
}
}
var tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d = [];
var uniqueColtablee4b12874dcaa2a47f61bf5fe76c643ddd03d = [];
var uniqueColTitletablee4b12874dcaa2a47f61bf5fe76c643ddd03d = [];
var defaultValuetablee4b12874dcaa2a47f61bf5fe76c643ddd03d = {};
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '经办人',hidden:false, name: 'JBR',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '经办日期', formatter:format, hidden:false, name: 'JBRQ',align:'center',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '经办部门',hidden:false, name: 'JBBM',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '慰问金额',hidden:false, name: 'WWJE',align:'right',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '职工姓名',hidden:false, name: 'ZGXM',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '慰问种类',hidden:false, name: 'WWZL',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '慰问编号',hidden:false, name: 'WWBH',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d536184c54c1/tablee4b12874dcaa2a47f61bf5fe76c643ddd03d/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee4b12874dcaa2a47f61bf5fe76c643ddd03d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee4b12874dcaa2a47f61bf5fe76c643ddd03dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee4b12874dcaa2a47f61bf5fe76c643ddd03dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee4b12874dcaa2a47f61bf5fe76c643ddd03dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee4b12874dcaa2a47f61bf5fe76c643ddd03dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee4b12874dcaa2a47f61bf5fe76c643ddd03dGridComplete.exec();
				    setTimeout(function(){var height = $("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").closest('.ui-jqgrid-bdiv').height();
					$("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords img").css("width","120px");
                 }else{
					    $("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee4b12874dcaa2a47f61bf5fe76c643ddd03dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee4b12874dcaa2a47f61bf5fe76c643ddd03dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords").hide();
		   	    $("#Pagertablee4b12874dcaa2a47f61bf5fe76c643ddd03d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords").html() == null) {
						$("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").parent().append("<div class='no_data' id='tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee4b12874dcaa2a47f61bf5fe76c643ddd03dnorecords").show();
					$("#Pagertablee4b12874dcaa2a47f61bf5fe76c643ddd03d_left").css("display", "none");
				}
tablee4b12874dcaa2a47f61bf5fe76c643ddd03dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee4b12874dcaa2a47f61bf5fe76c643ddd03d"
    });
tablee4b12874dcaa2a47f61bf5fe76c643ddd03dReload();
$("#t_tablee4b12874dcaa2a47f61bf5fe76c643ddd03d").append($("#tableToolbartablee4b12874dcaa2a47f61bf5fe76c643ddd03d"));$("#tableToolbarButtonc6c4f3ac58708440e9fb452fb9d63bcaf956").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d535c06854a6&grid=tablee4b12874dcaa2a47f61bf5fe76c643ddd03d',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton845eaeb5aa7c91443dfa292b80f71e189c6e").bind('click',function() {                                                                                       
	var ids = $('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d535c06854a6&id=' + rowData.ID+'&grid=tablee4b12874dcaa2a47f61bf5fe76c643ddd03d',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton242347ae2ed55b4dfc9860addb88ae5ed4d5").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_WWJSPHZB&isbpm=N&dbid=948e83e391927ff30191d49063ad1886', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d536184c54c1',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton9d20d44fdecf0c4831f8988f82bda2463de3').bind('click',function() {                           
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
	        var colModels =$('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablee4b12874dcaa2a47f61bf5fe76c643ddd03dKeyWordIn;                          
	        expSearchParams.param = tablee4b12874dcaa2a47f61bf5fe76c643ddd03dParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_慰问金审批汇总表';                             
	        expSearchParams.viewid='948e83e391927ff30191d536184c54c1';                                   
	        expSearchParams.tableid='tablee4b12874dcaa2a47f61bf5fe76c643ddd03d';                                 
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
$("#tableToolbarButton25cf7e6c0999c2449b68110eebab24861a30").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wwj', callBackFunc: function () {                           	
		$('#tablee4b12874dcaa2a47f61bf5fe76c643ddd03d').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
