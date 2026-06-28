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

function redraw948e83e38bdb834a018bff12057e6277(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38bdb834a018bff12057e6277").width();
		var win_height = $("#948e83e38bdb834a018bff12057e6277").height();
		$('#948e83e38bdb834a018bff12057e6277').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38bdb834a018bff12057e6277').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38bdb834a018bff12057e6277").width();
	setTimeout(function(){redraw948e83e38bdb834a018bff12057e6277(win_width);},500);
});
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cKeyWordIn = "";    
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cParamIn = "";    
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cSelectRow = {     
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cLoadComplete = {     
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cBeforeEditCell = {        
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cOndblClickRow = {     
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cOnRightClickRow = {     
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cGridComplete = {     
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cOnCellSelect = {     
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
var tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cLoadBeforeSend = {        
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
function tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cReload(pid){
	var _isInvalid = true;
	$("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cPid = pid;
		}
		return false;
	}
	window.tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cPid == 'undefined' || window.tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cPid!=null){
tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cReload(window.tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cPid);
}
}
var tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c = [];
var uniqueColtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c = [];
var uniqueColTitletableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c = [];
var defaultValuetableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c = {};
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '党支部名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '党员名称',hidden:false, name: 'PARTY_POSEN_NAME',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '性别',hidden:false, name: 'SEX',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '出生年月',hidden:false, name: 'ADD_DATE',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '学历',hidden:false, name: 'DEGREE',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '职务',hidden:false, name: 'USER_POST',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '职称',hidden:false, name: 'USER_POST_NAME',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '参加工作时间',hidden:false, name: 'WORK_DATE',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '申请入党时间',hidden:false, name: 'ADD_TIME',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38bdb834a018bff12057e6277/tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cGridComplete.exec();
				    setTimeout(function(){var height = $("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").closest('.ui-jqgrid-bdiv').height();
					$("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords img").css("width","120px");
                 }else{
					    $("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords").hide();
		   	    $("#Pagertableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords").html() == null) {
						$("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").parent().append("<div class='no_data' id='tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cnorecords").show();
					$("#Pagertableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c_left").css("display", "none");
				}
tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c"
    });
tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1cReload();
$("#t_tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c").append($("#tableToolbartableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c"));$("#tableToolbarButton96a8c10c23a69146f12b000982ac6619e660").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3843b68c401843bf1b4d57da7&grid=tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtondfbdccf77e39b54397f83600fe49ba0e0607").bind('click',function() {                                                                                       
	var ids = $('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3843b68c401843bf1b4d57da7&id=' + rowData.ID+'&grid=tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton8b40cba9faf0c44dafd824af277aa767e99a").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_NEW_PARTY&isbpm=N&dbid=948e83e38bdb834a018bfefea3cc5f73', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38bdb834a018bff12057e6277',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonc05f35a7e96d1e4588e8ba27a59f29e00233").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'xfzdy', callBackFunc: function () {                           	
		$('#tableb5bf5f3f4e52f744a36a2fbb0a93a3718e1c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
