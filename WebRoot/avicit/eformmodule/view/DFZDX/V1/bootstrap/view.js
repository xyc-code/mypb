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

function redraw948e83e37f7b5a48017f8b53d5040d6c(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e37f7b5a48017f8b53d5040d6c").width();
		var win_height = $("#948e83e37f7b5a48017f8b53d5040d6c").height();
		$('#948e83e37f7b5a48017f8b53d5040d6c').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e37f7b5a48017f8b53d5040d6c').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e37f7b5a48017f8b53d5040d6c").width();
	setTimeout(function(){redraw948e83e37f7b5a48017f8b53d5040d6c(win_width);},500);
});
var table6fd3dd4f095af2466e89b7cac74cb16562a0KeyWordIn = "";    
var table6fd3dd4f095af2466e89b7cac74cb16562a0ParamIn = "";    
var table6fd3dd4f095af2466e89b7cac74cb16562a0SelectRow = {     
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0LoadComplete = {     
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0BeforeEditCell = {        
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0OndblClickRow = {     
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0OnRightClickRow = {     
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0GridComplete = {     
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0OnCellSelect = {     
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
var table6fd3dd4f095af2466e89b7cac74cb16562a0LoadBeforeSend = {        
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
function table6fd3dd4f095af2466e89b7cac74cb16562a0Reload(pid){
	var _isInvalid = true;
	$("#table6fd3dd4f095af2466e89b7cac74cb16562a0").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6fd3dd4f095af2466e89b7cac74cb16562a0Pid = pid;
		}
		return false;
	}
	window.table6fd3dd4f095af2466e89b7cac74cb16562a0Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6fd3dd4f095af2466e89b7cac74cb16562a0').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table6fd3dd4f095af2466e89b7cac74cb16562a0Reload();
};
function table6fd3dd4f095af2466e89b7cac74cb16562a0TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6fd3dd4f095af2466e89b7cac74cb16562a0Pid == 'undefined' || window.table6fd3dd4f095af2466e89b7cac74cb16562a0Pid!=null){
table6fd3dd4f095af2466e89b7cac74cb16562a0Reload(window.table6fd3dd4f095af2466e89b7cac74cb16562a0Pid);
}
}
var tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0 = [];
var uniqueColtable6fd3dd4f095af2466e89b7cac74cb16562a0 = [];
var uniqueColTitletable6fd3dd4f095af2466e89b7cac74cb16562a0 = [];
var defaultValuetable6fd3dd4f095af2466e89b7cac74cb16562a0 = {};
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '姓名',hidden:false, name: 'DFZDX_NAME',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ label: '性别',hidden:true, name: 'DFZDX_SEX',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ label: '性别',hidden:false, name: 'DFZDX_SEXName',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ label: '团支部ID',hidden:true, name: 'LEAGUE_ID',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ label: '团支部ID',hidden:false, name: 'LEAGUE_IDName',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '单位职务',hidden:false, name: 'DFZDX_DWZW',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '团内职务',hidden:false, name: 'DFZDX_TNZW',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ label: '文化程度',hidden:true, name: 'DFZDX_WHCD',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ label: '文化程度',hidden:false, name: 'DFZDX_WHCDName',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '申请日期',hidden:false, name: 'DFZDX_SQRQ',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '申请单位',hidden:false, name: 'DFZDX_SQDW',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '申请人',hidden:false, name: 'DFZDX_SQR',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '表单编号',hidden:false, name: 'DFZDX_BDBH',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '推荐理由',hidden:false, name: 'DFZDX_TJLY',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '出生年月', formatter:format, hidden:false, name: 'DFZDX_BIRTH',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '入团时间', formatter:format, hidden:false, name: 'DFZDX_RTSJ',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '确定写实对象时间', formatter:format, hidden:false, name: 'DFZDX_QDXSDXSJ',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '申请入党时间', formatter:format, hidden:false, name: 'DFZDX_SQRDSJ',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '字段_3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn5d9f3ebda98bfd433a087286f4a670cdea6f',align:'left',  width: '150px'});function table6fd3dd4f095af2466e89b7cac74cb16562a0initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton984c915cc7e68941a7b89b5b3cc34acabc48").css('display','inline-block');
}else{
$("#tableToolbarButton984c915cc7e68941a7b89b5b3cc34acabc48").hide();
}
table6fd3dd4f095af2466e89b7cac74cb16562a0searchWF();
}
function table6fd3dd4f095af2466e89b7cac74cb16562a0searchWF(){
   if ($("#searchformtable6fd3dd4f095af2466e89b7cac74cb16562a0").length>0){
      var para = serializeObject($("#searchformtable6fd3dd4f095af2466e89b7cac74cb16562a0"));
      para.bpmState = $('#table6fd3dd4f095af2466e89b7cac74cb16562a0workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table6fd3dd4f095af2466e89b7cac74cb16562a0').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table6fd3dd4f095af2466e89b7cac74cb16562a0workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table6fd3dd4f095af2466e89b7cac74cb16562a0').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table6fd3dd4f095af2466e89b7cac74cb16562a0").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e37f7b5a48017f8b53d5040d6c/table6fd3dd4f095af2466e89b7cac74cb16562a0/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6fd3dd4f095af2466e89b7cac74cb16562a0,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6fd3dd4f095af2466e89b7cac74cb16562a0SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6fd3dd4f095af2466e89b7cac74cb16562a0LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6fd3dd4f095af2466e89b7cac74cb16562a0OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6fd3dd4f095af2466e89b7cac74cb16562a0OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6fd3dd4f095af2466e89b7cac74cb16562a0GridComplete.exec();
				    setTimeout(function(){var height = $("#table6fd3dd4f095af2466e89b7cac74cb16562a0").closest('.ui-jqgrid-bdiv').height();
					$("#table6fd3dd4f095af2466e89b7cac74cb16562a0norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6fd3dd4f095af2466e89b7cac74cb16562a0norecords img").css("width","120px");
                 }else{
					    $("#table6fd3dd4f095af2466e89b7cac74cb16562a0norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6fd3dd4f095af2466e89b7cac74cb16562a0BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6fd3dd4f095af2466e89b7cac74cb16562a0OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6fd3dd4f095af2466e89b7cac74cb16562a0norecords").hide();
		   	    $("#Pagertable6fd3dd4f095af2466e89b7cac74cb16562a0_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6fd3dd4f095af2466e89b7cac74cb16562a0").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6fd3dd4f095af2466e89b7cac74cb16562a0").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6fd3dd4f095af2466e89b7cac74cb16562a0norecords").html() == null) {
						$("#table6fd3dd4f095af2466e89b7cac74cb16562a0").parent().append("<div class='no_data' id='table6fd3dd4f095af2466e89b7cac74cb16562a0norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6fd3dd4f095af2466e89b7cac74cb16562a0norecords").show();
					$("#Pagertable6fd3dd4f095af2466e89b7cac74cb16562a0_left").css("display", "none");
				}
table6fd3dd4f095af2466e89b7cac74cb16562a0LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6fd3dd4f095af2466e89b7cac74cb16562a0"
    });
table6fd3dd4f095af2466e89b7cac74cb16562a0Reload();
$("#t_table6fd3dd4f095af2466e89b7cac74cb16562a0").append($("#tableToolbartable6fd3dd4f095af2466e89b7cac74cb16562a0"));$("#tableToolbarButtonc20452965250ce4f895a6efa26beda92a000").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e37f7b5a48017f8a8874f907c8&grid=table6fd3dd4f095af2466e89b7cac74cb16562a0'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton984c915cc7e68941a7b89b5b3cc34acabc48").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6fd3dd4f095af2466e89b7cac74cb16562a0').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6fd3dd4f095af2466e89b7cac74cb16562a0').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DFZDX&isbpm=Y&dbid=948e83e37f7b5a48017f8a91db7c07cf', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e37f7b5a48017f8b53d5040d6c',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6fd3dd4f095af2466e89b7cac74cb16562a0').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton984c915cc7e68941a7b89b5b3cc34acabc48").hide();
$('#table6fd3dd4f095af2466e89b7cac74cb16562a0workFlowSelect').bind('change',function(){
table6fd3dd4f095af2466e89b7cac74cb16562a0initWorkFlow($(this).val());
});
;});	 
