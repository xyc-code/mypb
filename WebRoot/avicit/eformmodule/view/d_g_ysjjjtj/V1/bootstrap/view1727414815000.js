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

function redraw948e83e391927ff30191d52fb43553c2(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e391927ff30191d52fb43553c2").width();
		var win_height = $("#948e83e391927ff30191d52fb43553c2").height();
		$('#948e83e391927ff30191d52fb43553c2').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e391927ff30191d52fb43553c2').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e391927ff30191d52fb43553c2").width();
	setTimeout(function(){redraw948e83e391927ff30191d52fb43553c2(win_width);},500);
});
var tablef8124966c1039f482699ca4fc1786abed904KeyWordIn = "";    
var tablef8124966c1039f482699ca4fc1786abed904ParamIn = "";    
var tablef8124966c1039f482699ca4fc1786abed904SelectRow = {     
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
var tablef8124966c1039f482699ca4fc1786abed904LoadComplete = {     
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
var tablef8124966c1039f482699ca4fc1786abed904BeforeEditCell = {        
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
var tablef8124966c1039f482699ca4fc1786abed904OndblClickRow = {     
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
var tablef8124966c1039f482699ca4fc1786abed904OnRightClickRow = {     
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
var tablef8124966c1039f482699ca4fc1786abed904GridComplete = {     
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
var tablef8124966c1039f482699ca4fc1786abed904OnCellSelect = {     
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
var tablef8124966c1039f482699ca4fc1786abed904LoadBeforeSend = {        
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
function tablef8124966c1039f482699ca4fc1786abed904Reload(pid){
	var _isInvalid = true;
	$("#tablef8124966c1039f482699ca4fc1786abed904").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef8124966c1039f482699ca4fc1786abed904Pid = pid;
		}
		return false;
	}
	window.tablef8124966c1039f482699ca4fc1786abed904Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablef8124966c1039f482699ca4fc1786abed904TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef8124966c1039f482699ca4fc1786abed904Pid == 'undefined' || window.tablef8124966c1039f482699ca4fc1786abed904Pid!=null){
tablef8124966c1039f482699ca4fc1786abed904Reload(window.tablef8124966c1039f482699ca4fc1786abed904Pid);
}
}
var tablecmtablef8124966c1039f482699ca4fc1786abed904 = [];
var uniqueColtablef8124966c1039f482699ca4fc1786abed904 = [];
var uniqueColTitletablef8124966c1039f482699ca4fc1786abed904 = [];
var defaultValuetablef8124966c1039f482699ca4fc1786abed904 = {};
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '年龄',hidden:false, name: 'NL',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '一季度',hidden:false, name: 'YJD',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '二季度',hidden:false, name: 'EJD',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '三季度',hidden:false, name: 'SJD',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '四季度',hidden:false, name: 'SIJD',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '救济金额',hidden:false, name: 'JJJE',align:'right',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef8124966c1039f482699ca4fc1786abed904.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tablef8124966c1039f482699ca4fc1786abed904").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e391927ff30191d52fb43553c2/tablef8124966c1039f482699ca4fc1786abed904/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablef8124966c1039f482699ca4fc1786abed904,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef8124966c1039f482699ca4fc1786abed904SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef8124966c1039f482699ca4fc1786abed904LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef8124966c1039f482699ca4fc1786abed904OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef8124966c1039f482699ca4fc1786abed904OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef8124966c1039f482699ca4fc1786abed904GridComplete.exec();
				    setTimeout(function(){var height = $("#tablef8124966c1039f482699ca4fc1786abed904").closest('.ui-jqgrid-bdiv').height();
					$("#tablef8124966c1039f482699ca4fc1786abed904norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef8124966c1039f482699ca4fc1786abed904norecords img").css("width","120px");
                 }else{
					    $("#tablef8124966c1039f482699ca4fc1786abed904norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef8124966c1039f482699ca4fc1786abed904BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef8124966c1039f482699ca4fc1786abed904OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef8124966c1039f482699ca4fc1786abed904norecords").hide();
		   	    $("#Pagertablef8124966c1039f482699ca4fc1786abed904_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef8124966c1039f482699ca4fc1786abed904").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef8124966c1039f482699ca4fc1786abed904").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef8124966c1039f482699ca4fc1786abed904norecords").html() == null) {
						$("#tablef8124966c1039f482699ca4fc1786abed904").parent().append("<div class='no_data' id='tablef8124966c1039f482699ca4fc1786abed904norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef8124966c1039f482699ca4fc1786abed904norecords").show();
					$("#Pagertablef8124966c1039f482699ca4fc1786abed904_left").css("display", "none");
				}
tablef8124966c1039f482699ca4fc1786abed904LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef8124966c1039f482699ca4fc1786abed904"
    });
tablef8124966c1039f482699ca4fc1786abed904Reload();
$("#t_tablef8124966c1039f482699ca4fc1786abed904").append($("#tableToolbartablef8124966c1039f482699ca4fc1786abed904"));$("#tableToolbarButton83ea0ebfd195f34b92b8152b8c8c4dfbe2a8").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d52f63da53a2&grid=tablef8124966c1039f482699ca4fc1786abed904',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton4d352a57eaab7d450ec8dafa967dde0e2031").bind('click',function() {                                                                                       
	var ids = $('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e391927ff30191d52f63da53a2&id=' + rowData.ID+'&grid=tablef8124966c1039f482699ca4fc1786abed904',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton0e48258c8b3a364c7fe8126c4184054455cb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ZZMG_YSJJJFFTJ&isbpm=N&dbid=948e83e391927ff30191d49719aa1939', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e391927ff30191d52fb43553c2',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablef8124966c1039f482699ca4fc1786abed904').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton8b03c3c8c736c54e8e68702be0fd740f645d').bind('click',function() {                           
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
	        var colModels =$('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablef8124966c1039f482699ca4fc1786abed904KeyWordIn;                          
	        expSearchParams.param = tablef8124966c1039f482699ca4fc1786abed904ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='组织民管_遗属救济金发放统计表';                             
	        expSearchParams.viewid='948e83e391927ff30191d52fb43553c2';                                   
	        expSearchParams.tableid='tablef8124966c1039f482699ca4fc1786abed904';                                 
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
$("#tableToolbarButton56fd4b18dad14b4a7708f80c1c514a171cfb").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'yzjj', callBackFunc: function () {                           	
		$('#tablef8124966c1039f482699ca4fc1786abed904').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
