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

function redraw948e83e3828f72f301828fed399121dd(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3828f72f301828fed399121dd").width();
		var win_height = $("#948e83e3828f72f301828fed399121dd").height();
		$('#948e83e3828f72f301828fed399121dd').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3828f72f301828fed399121dd').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3828f72f301828fed399121dd").width();
	setTimeout(function(){redraw948e83e3828f72f301828fed399121dd(win_width);},500);
});
var tablea77d329821be034257e8ff70a5eebf51d9c7KeyWordIn = "";    
var tablea77d329821be034257e8ff70a5eebf51d9c7ParamIn = "";    
var tablea77d329821be034257e8ff70a5eebf51d9c7SelectRow = {     
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
var tablea77d329821be034257e8ff70a5eebf51d9c7LoadComplete = {     
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
var tablea77d329821be034257e8ff70a5eebf51d9c7BeforeEditCell = {        
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
var tablea77d329821be034257e8ff70a5eebf51d9c7OndblClickRow = {     
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
var tablea77d329821be034257e8ff70a5eebf51d9c7OnRightClickRow = {     
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
var tablea77d329821be034257e8ff70a5eebf51d9c7GridComplete = {     
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
var tablea77d329821be034257e8ff70a5eebf51d9c7OnCellSelect = {     
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
var tablea77d329821be034257e8ff70a5eebf51d9c7LoadBeforeSend = {        
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
function tablea77d329821be034257e8ff70a5eebf51d9c7Reload(pid){
	var _isInvalid = true;
	$("#tablea77d329821be034257e8ff70a5eebf51d9c7").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablea77d329821be034257e8ff70a5eebf51d9c7Pid = pid;
		}
		return false;
	}
	window.tablea77d329821be034257e8ff70a5eebf51d9c7Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablea77d329821be034257e8ff70a5eebf51d9c7Reload();
};
function tablea77d329821be034257e8ff70a5eebf51d9c7TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablea77d329821be034257e8ff70a5eebf51d9c7Pid == 'undefined' || window.tablea77d329821be034257e8ff70a5eebf51d9c7Pid!=null){
tablea77d329821be034257e8ff70a5eebf51d9c7Reload(window.tablea77d329821be034257e8ff70a5eebf51d9c7Pid);
}
}
var tablecmtablea77d329821be034257e8ff70a5eebf51d9c7 = [];
var uniqueColtablea77d329821be034257e8ff70a5eebf51d9c7 = [];
var uniqueColTitletablea77d329821be034257e8ff70a5eebf51d9c7 = [];
var defaultValuetablea77d329821be034257e8ff70a5eebf51d9c7 = {};
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '申请日期',hidden:false, name: 'REQUST_DATE',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '申请人所在党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '申请人所在单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '新成立党支部名称',hidden:false, name: 'PARTY_NAME_NEW',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '支委会记录名称',hidden:true, name: 'THREE_FOUR_NAME',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '三会一课ID',hidden:true, name: 'THREE_FOUR_ID',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({label: '字段_1',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtablea77d329821be034257e8ff70a5eebf51d9c7.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function tablea77d329821be034257e8ff70a5eebf51d9c7initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtonc7ba400ca5ba384460d8e0d70562fda86cfc").css('display','inline-block');
$("#tableToolbarButton06e5065bf5d34c4d16886094db9286e6eab8").css('display','inline-block');
}else{
$("#tableToolbarButtonc7ba400ca5ba384460d8e0d70562fda86cfc").hide();
$("#tableToolbarButton06e5065bf5d34c4d16886094db9286e6eab8").hide();
}
tablea77d329821be034257e8ff70a5eebf51d9c7searchWF();
}
function tablea77d329821be034257e8ff70a5eebf51d9c7searchWF(){
   if ($("#searchformtablea77d329821be034257e8ff70a5eebf51d9c7").length>0){
      var para = serializeObject($("#searchformtablea77d329821be034257e8ff70a5eebf51d9c7"));
      para.bpmState = $('#tablea77d329821be034257e8ff70a5eebf51d9c7workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tablea77d329821be034257e8ff70a5eebf51d9c7workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#tablea77d329821be034257e8ff70a5eebf51d9c7").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3828f72f301828fed399121dd/tablea77d329821be034257e8ff70a5eebf51d9c7/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablea77d329821be034257e8ff70a5eebf51d9c7,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablea77d329821be034257e8ff70a5eebf51d9c7SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablea77d329821be034257e8ff70a5eebf51d9c7LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablea77d329821be034257e8ff70a5eebf51d9c7OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablea77d329821be034257e8ff70a5eebf51d9c7OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablea77d329821be034257e8ff70a5eebf51d9c7GridComplete.exec();
				    setTimeout(function(){var height = $("#tablea77d329821be034257e8ff70a5eebf51d9c7").closest('.ui-jqgrid-bdiv').height();
					$("#tablea77d329821be034257e8ff70a5eebf51d9c7norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablea77d329821be034257e8ff70a5eebf51d9c7norecords img").css("width","120px");
                 }else{
					    $("#tablea77d329821be034257e8ff70a5eebf51d9c7norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablea77d329821be034257e8ff70a5eebf51d9c7BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablea77d329821be034257e8ff70a5eebf51d9c7OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablea77d329821be034257e8ff70a5eebf51d9c7norecords").hide();
		   	    $("#Pagertablea77d329821be034257e8ff70a5eebf51d9c7_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablea77d329821be034257e8ff70a5eebf51d9c7").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablea77d329821be034257e8ff70a5eebf51d9c7").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablea77d329821be034257e8ff70a5eebf51d9c7norecords").html() == null) {
						$("#tablea77d329821be034257e8ff70a5eebf51d9c7").parent().append("<div class='no_data' id='tablea77d329821be034257e8ff70a5eebf51d9c7norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablea77d329821be034257e8ff70a5eebf51d9c7norecords").show();
					$("#Pagertablea77d329821be034257e8ff70a5eebf51d9c7_left").css("display", "none");
				}
tablea77d329821be034257e8ff70a5eebf51d9c7LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablea77d329821be034257e8ff70a5eebf51d9c7"
    });
tablea77d329821be034257e8ff70a5eebf51d9c7Reload();
$("#t_tablea77d329821be034257e8ff70a5eebf51d9c7").append($("#tableToolbartablea77d329821be034257e8ff70a5eebf51d9c7"));$("#tableToolbarButton40b8015c815af84ae02b1337ac1a7b2acd04").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f301828fd75792200b&grid=tablea77d329821be034257e8ff70a5eebf51d9c7'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonc7ba400ca5ba384460d8e0d70562fda86cfc").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_HUANJIE_QS&isbpm=Y&dbid=948e83e3828f72f301828fd81709200d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3828f72f301828fed399121dd',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablea77d329821be034257e8ff70a5eebf51d9c7').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonc7ba400ca5ba384460d8e0d70562fda86cfc").hide();
$("#tableToolbarButton06e5065bf5d34c4d16886094db9286e6eab8").bind('click',function() {                                                                                       
	var ids = $('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f301828fd75792200b&id=' + rowData.ID+'&grid=tablea77d329821be034257e8ff70a5eebf51d9c7',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton06e5065bf5d34c4d16886094db9286e6eab8").hide();
$('#tablea77d329821be034257e8ff70a5eebf51d9c7workFlowSelect').bind('change',function(){
tablea77d329821be034257e8ff70a5eebf51d9c7initWorkFlow($(this).val());
});
function searchDatatablea77d329821be034257e8ff70a5eebf51d9c7(){
 var para = serializeObjectForEform($("#searchformtablea77d329821be034257e8ff70a5eebf51d9c7"));
 para.bpmState = $('#tablea77d329821be034257e8ff70a5eebf51d9c7workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablea77d329821be034257e8ff70a5eebf51d9c7KeyWordIn="";
tablea77d329821be034257e8ff70a5eebf51d9c7ParamIn=JSON.stringify(para);
	$('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablea77d329821be034257e8ff70a5eebf51d9c7").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablea77d329821be034257e8ff70a5eebf51d9c7').bind('click',function(){
var contentWidth = 650;
var top =  $(this).offset().top + $(this).outerHeight(true);
var left = $(this).offset().left + $(this).outerWidth() - contentWidth;
if (left < 0){contentWidth = contentWidth + left; left = 0}
var text = $(this).text();
var width = $(this).innerWidth();
layer.config({
	  extend: 'skin/layer-bootstrap.css'
});
layer.open({
	type: 1,
	shift: 5,
	title: false,
	scrollbar: false,
	move : false,
 area:[
contentWidth + 'px',
'200px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtablea77d329821be034257e8ff70a5eebf51d9c7'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablea77d329821be034257e8ff70a5eebf51d9c7(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablea77d329821be034257e8ff70a5eebf51d9c7")); searchDatatablea77d329821be034257e8ff70a5eebf51d9c7(); layer.close(index); return false;
	},
	btn3: function(index, layero){	
	layer.close(index);}
});
});
 $('.date-picker').datepicker({ 
	beforeShow: function () {
		setTimeout(function () {
			$('#ui-datepicker-div').css('z-index', 99999999);
		}, 100);
	}
});
 $('.time-picker').datetimepicker({
  	oneLine:true, 
  	closeText:'确定', 
  	showButtonPanel:true, 
  	showSecond:true,
  	beforeShow: function(selectedDate) {
  		if($('#'+selectedDate.id).val()==""){
  			$(this).datetimepicker("setDate", new Date());
  			$('#'+selectedDate.id).val('');
 		}
 		setTimeout(function () {
 			$('#ui-datepicker-div').css("z-index", 99999999);
 		}, 100);
  	}
 });
;});	 
