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

function redraw948e83e3828f72f301829f38804e28d8(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3828f72f301829f38804e28d8").width();
		var win_height = $("#948e83e3828f72f301829f38804e28d8").height();
		$('#948e83e3828f72f301829f38804e28d8').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3828f72f301829f38804e28d8').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3828f72f301829f38804e28d8").width();
	setTimeout(function(){redraw948e83e3828f72f301829f38804e28d8(win_width);},500);
});
var table97d79ef56e1e414ad9f932a3f30bfaed2136KeyWordIn = "";    
var table97d79ef56e1e414ad9f932a3f30bfaed2136ParamIn = "";    
var table97d79ef56e1e414ad9f932a3f30bfaed2136SelectRow = {     
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136LoadComplete = {     
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136BeforeEditCell = {        
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136OndblClickRow = {     
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136OnRightClickRow = {     
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136GridComplete = {     
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136OnCellSelect = {     
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
var table97d79ef56e1e414ad9f932a3f30bfaed2136LoadBeforeSend = {        
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
function table97d79ef56e1e414ad9f932a3f30bfaed2136Reload(pid){
	var _isInvalid = true;
	$("#table97d79ef56e1e414ad9f932a3f30bfaed2136").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table97d79ef56e1e414ad9f932a3f30bfaed2136Pid = pid;
		}
		return false;
	}
	window.table97d79ef56e1e414ad9f932a3f30bfaed2136Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table97d79ef56e1e414ad9f932a3f30bfaed2136').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table97d79ef56e1e414ad9f932a3f30bfaed2136Reload();
};
function table97d79ef56e1e414ad9f932a3f30bfaed2136TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table97d79ef56e1e414ad9f932a3f30bfaed2136Pid == 'undefined' || window.table97d79ef56e1e414ad9f932a3f30bfaed2136Pid!=null){
table97d79ef56e1e414ad9f932a3f30bfaed2136Reload(window.table97d79ef56e1e414ad9f932a3f30bfaed2136Pid);
}
}
var tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136 = [];
var uniqueColtable97d79ef56e1e414ad9f932a3f30bfaed2136 = [];
var uniqueColTitletable97d79ef56e1e414ad9f932a3f30bfaed2136 = [];
var defaultValuetable97d79ef56e1e414ad9f932a3f30bfaed2136 = {};
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '申请日期',hidden:false, name: 'REQUST_DATE',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '申请人所在党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '申请人所在单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '三会一课ID',hidden:true, name: 'THREE_FOUR_ID',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '三会一课名称',hidden:true, name: 'THREE_FOUR_NAME',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '三会一课ID1',hidden:true, name: 'THREE_FOUR_ID1',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({label: '三会一课名称1',hidden:true, name: 'THREE_FOUR_NAME1',align:'left',  width: '150px'});
tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function table97d79ef56e1e414ad9f932a3f30bfaed2136initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton5963ac33ccce4f461ea8b8d11cccfd236340").css('display','inline-block');
}else{
$("#tableToolbarButton5963ac33ccce4f461ea8b8d11cccfd236340").hide();
}
table97d79ef56e1e414ad9f932a3f30bfaed2136searchWF();
}
function table97d79ef56e1e414ad9f932a3f30bfaed2136searchWF(){
   if ($("#searchformtable97d79ef56e1e414ad9f932a3f30bfaed2136").length>0){
      var para = serializeObject($("#searchformtable97d79ef56e1e414ad9f932a3f30bfaed2136"));
      para.bpmState = $('#table97d79ef56e1e414ad9f932a3f30bfaed2136workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table97d79ef56e1e414ad9f932a3f30bfaed2136').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table97d79ef56e1e414ad9f932a3f30bfaed2136workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table97d79ef56e1e414ad9f932a3f30bfaed2136').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table97d79ef56e1e414ad9f932a3f30bfaed2136").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3828f72f301829f38804e28d8/table97d79ef56e1e414ad9f932a3f30bfaed2136/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable97d79ef56e1e414ad9f932a3f30bfaed2136,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table97d79ef56e1e414ad9f932a3f30bfaed2136SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table97d79ef56e1e414ad9f932a3f30bfaed2136LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table97d79ef56e1e414ad9f932a3f30bfaed2136OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table97d79ef56e1e414ad9f932a3f30bfaed2136OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table97d79ef56e1e414ad9f932a3f30bfaed2136GridComplete.exec();
				    setTimeout(function(){var height = $("#table97d79ef56e1e414ad9f932a3f30bfaed2136").closest('.ui-jqgrid-bdiv').height();
					$("#table97d79ef56e1e414ad9f932a3f30bfaed2136norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table97d79ef56e1e414ad9f932a3f30bfaed2136norecords img").css("width","120px");
                 }else{
					    $("#table97d79ef56e1e414ad9f932a3f30bfaed2136norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table97d79ef56e1e414ad9f932a3f30bfaed2136BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table97d79ef56e1e414ad9f932a3f30bfaed2136OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table97d79ef56e1e414ad9f932a3f30bfaed2136norecords").hide();
		   	    $("#Pagertable97d79ef56e1e414ad9f932a3f30bfaed2136_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table97d79ef56e1e414ad9f932a3f30bfaed2136").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table97d79ef56e1e414ad9f932a3f30bfaed2136").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table97d79ef56e1e414ad9f932a3f30bfaed2136norecords").html() == null) {
						$("#table97d79ef56e1e414ad9f932a3f30bfaed2136").parent().append("<div class='no_data' id='table97d79ef56e1e414ad9f932a3f30bfaed2136norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table97d79ef56e1e414ad9f932a3f30bfaed2136norecords").show();
					$("#Pagertable97d79ef56e1e414ad9f932a3f30bfaed2136_left").css("display", "none");
				}
table97d79ef56e1e414ad9f932a3f30bfaed2136LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable97d79ef56e1e414ad9f932a3f30bfaed2136"
    });
table97d79ef56e1e414ad9f932a3f30bfaed2136Reload();
$("#t_table97d79ef56e1e414ad9f932a3f30bfaed2136").append($("#tableToolbartable97d79ef56e1e414ad9f932a3f30bfaed2136"));$("#tableToolbarButton3ca84bac5f40ee440589587d73acbc944b41").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f301829f2775892742&grid=table97d79ef56e1e414ad9f932a3f30bfaed2136'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton5963ac33ccce4f461ea8b8d11cccfd236340").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table97d79ef56e1e414ad9f932a3f30bfaed2136').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table97d79ef56e1e414ad9f932a3f30bfaed2136').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_BXWY_YBRX&isbpm=Y&dbid=948e83e3828f72f301829f283d6a2743', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3828f72f301829f38804e28d8',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table97d79ef56e1e414ad9f932a3f30bfaed2136').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton5963ac33ccce4f461ea8b8d11cccfd236340").hide();
$('#table97d79ef56e1e414ad9f932a3f30bfaed2136workFlowSelect').bind('change',function(){
table97d79ef56e1e414ad9f932a3f30bfaed2136initWorkFlow($(this).val());
});
function searchDatatable97d79ef56e1e414ad9f932a3f30bfaed2136(){
 var para = serializeObjectForEform($("#searchformtable97d79ef56e1e414ad9f932a3f30bfaed2136"));
 para.bpmState = $('#table97d79ef56e1e414ad9f932a3f30bfaed2136workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table97d79ef56e1e414ad9f932a3f30bfaed2136KeyWordIn="";
table97d79ef56e1e414ad9f932a3f30bfaed2136ParamIn=JSON.stringify(para);
	$('#table97d79ef56e1e414ad9f932a3f30bfaed2136').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable97d79ef56e1e414ad9f932a3f30bfaed2136").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable97d79ef56e1e414ad9f932a3f30bfaed2136').bind('click',function(){
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
	content: $('#searchDialogtable97d79ef56e1e414ad9f932a3f30bfaed2136'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable97d79ef56e1e414ad9f932a3f30bfaed2136(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable97d79ef56e1e414ad9f932a3f30bfaed2136")); searchDatatable97d79ef56e1e414ad9f932a3f30bfaed2136(); layer.close(index); return false;
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
