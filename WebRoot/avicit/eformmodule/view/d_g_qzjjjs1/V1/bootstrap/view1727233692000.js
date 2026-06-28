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

function redraw948e83e3918c4fb001918ca891670f30(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3918c4fb001918ca891670f30").width();
		var win_height = $("#948e83e3918c4fb001918ca891670f30").height();
		$('#948e83e3918c4fb001918ca891670f30').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3918c4fb001918ca891670f30').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3918c4fb001918ca891670f30").width();
	setTimeout(function(){redraw948e83e3918c4fb001918ca891670f30(win_width);},500);
});
var tablea93cafccfd03634afa99eff7ced30f0ed603KeyWordIn = "";    
var tablea93cafccfd03634afa99eff7ced30f0ed603ParamIn = "";    
var tablea93cafccfd03634afa99eff7ced30f0ed603SelectRow = {     
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
var tablea93cafccfd03634afa99eff7ced30f0ed603LoadComplete = {     
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
var tablea93cafccfd03634afa99eff7ced30f0ed603BeforeEditCell = {        
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
var tablea93cafccfd03634afa99eff7ced30f0ed603OndblClickRow = {     
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
var tablea93cafccfd03634afa99eff7ced30f0ed603OnRightClickRow = {     
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
var tablea93cafccfd03634afa99eff7ced30f0ed603GridComplete = {     
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
var tablea93cafccfd03634afa99eff7ced30f0ed603OnCellSelect = {     
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
var tablea93cafccfd03634afa99eff7ced30f0ed603LoadBeforeSend = {        
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
function tablea93cafccfd03634afa99eff7ced30f0ed603Reload(pid){
	var _isInvalid = true;
	$("#tablea93cafccfd03634afa99eff7ced30f0ed603").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablea93cafccfd03634afa99eff7ced30f0ed603Pid = pid;
		}
		return false;
	}
	window.tablea93cafccfd03634afa99eff7ced30f0ed603Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablea93cafccfd03634afa99eff7ced30f0ed603TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablea93cafccfd03634afa99eff7ced30f0ed603Pid == 'undefined' || window.tablea93cafccfd03634afa99eff7ced30f0ed603Pid!=null){
tablea93cafccfd03634afa99eff7ced30f0ed603Reload(window.tablea93cafccfd03634afa99eff7ced30f0ed603Pid);
}
}
var tablecmtablea93cafccfd03634afa99eff7ced30f0ed603 = [];
var uniqueColtablea93cafccfd03634afa99eff7ced30f0ed603 = [];
var uniqueColTitletablea93cafccfd03634afa99eff7ced30f0ed603 = [];
var defaultValuetablea93cafccfd03634afa99eff7ced30f0ed603 = {};
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '所获奖项',hidden:false, name: 'SHJX',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '单位名称',hidden:false, name: 'DWMC',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '获奖年度',hidden:false, name: 'HJND',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablea93cafccfd03634afa99eff7ced30f0ed603.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablea93cafccfd03634afa99eff7ced30f0ed603").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3918c4fb001918ca891670f30/tablea93cafccfd03634afa99eff7ced30f0ed603/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablea93cafccfd03634afa99eff7ced30f0ed603,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablea93cafccfd03634afa99eff7ced30f0ed603SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablea93cafccfd03634afa99eff7ced30f0ed603LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablea93cafccfd03634afa99eff7ced30f0ed603OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablea93cafccfd03634afa99eff7ced30f0ed603OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablea93cafccfd03634afa99eff7ced30f0ed603GridComplete.exec();
				    setTimeout(function(){var height = $("#tablea93cafccfd03634afa99eff7ced30f0ed603").closest('.ui-jqgrid-bdiv').height();
					$("#tablea93cafccfd03634afa99eff7ced30f0ed603norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablea93cafccfd03634afa99eff7ced30f0ed603norecords img").css("width","120px");
                 }else{
					    $("#tablea93cafccfd03634afa99eff7ced30f0ed603norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablea93cafccfd03634afa99eff7ced30f0ed603BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablea93cafccfd03634afa99eff7ced30f0ed603OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablea93cafccfd03634afa99eff7ced30f0ed603norecords").hide();
		   	    $("#Pagertablea93cafccfd03634afa99eff7ced30f0ed603_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablea93cafccfd03634afa99eff7ced30f0ed603").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablea93cafccfd03634afa99eff7ced30f0ed603").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablea93cafccfd03634afa99eff7ced30f0ed603norecords").html() == null) {
						$("#tablea93cafccfd03634afa99eff7ced30f0ed603").parent().append("<div class='no_data' id='tablea93cafccfd03634afa99eff7ced30f0ed603norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablea93cafccfd03634afa99eff7ced30f0ed603norecords").show();
					$("#Pagertablea93cafccfd03634afa99eff7ced30f0ed603_left").css("display", "none");
				}
tablea93cafccfd03634afa99eff7ced30f0ed603LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablea93cafccfd03634afa99eff7ced30f0ed603"
    });
tablea93cafccfd03634afa99eff7ced30f0ed603Reload();
$("#t_tablea93cafccfd03634afa99eff7ced30f0ed603").append($("#tableToolbartablea93cafccfd03634afa99eff7ced30f0ed603"));$("#tableToolbarButton4015324fbef04443cae86ec7c3b4aafd11ad").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918ca7e53b0f23&grid=tablea93cafccfd03634afa99eff7ced30f0ed603',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton539552bb97cbf8415a486468622b708648a2").bind('click',function() {                                                                                       
	var ids = $('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3918c4fb001918ca7e53b0f23&id=' + rowData.ID+'&grid=tablea93cafccfd03634afa99eff7ced30f0ed603',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton7829840181f1954d77894c33ba0e076dd41d").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGZ_QZJJJS1&isbpm=N&dbid=948e83e391591703019178f8ec4f47ec', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3918c4fb001918ca891670f30',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablea93cafccfd03634afa99eff7ced30f0ed603').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton6c2b63ea1306294caab85c6c592efa81ec2b').bind('click',function() {                           
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
	        var colModels =$('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablea93cafccfd03634afa99eff7ced30f0ed603KeyWordIn;                          
	        expSearchParams.param = tablea93cafccfd03634afa99eff7ced30f0ed603ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会工作-群众经济技术1';                             
	        expSearchParams.viewid='948e83e3918c4fb001918ca891670f30';                                   
	        expSearchParams.tableid='tablea93cafccfd03634afa99eff7ced30f0ed603';                                 
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
$("#tableToolbarButton38456f302c75ba42423a75368946b1c7d16a").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'qzjjjs1', callBackFunc: function () {                           	
		$('#tablea93cafccfd03634afa99eff7ced30f0ed603').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
