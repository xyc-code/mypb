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

function redraw948e83e3876969b701876e130b552d8e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3876969b701876e130b552d8e").width();
		var win_height = $("#948e83e3876969b701876e130b552d8e").height();
		$('#948e83e3876969b701876e130b552d8e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3876969b701876e130b552d8e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3876969b701876e130b552d8e").width();
	setTimeout(function(){redraw948e83e3876969b701876e130b552d8e(win_width);},500);
});
var table498b04e2a887414773a8195243aa5c501393KeyWordIn = "";    
var table498b04e2a887414773a8195243aa5c501393ParamIn = "";    
var table498b04e2a887414773a8195243aa5c501393SelectRow = {     
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
var table498b04e2a887414773a8195243aa5c501393LoadComplete = {     
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
var table498b04e2a887414773a8195243aa5c501393BeforeEditCell = {        
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
var table498b04e2a887414773a8195243aa5c501393OndblClickRow = {     
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
var table498b04e2a887414773a8195243aa5c501393OnRightClickRow = {     
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
var table498b04e2a887414773a8195243aa5c501393GridComplete = {     
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
var table498b04e2a887414773a8195243aa5c501393OnCellSelect = {     
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
var table498b04e2a887414773a8195243aa5c501393LoadBeforeSend = {        
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
function table498b04e2a887414773a8195243aa5c501393Reload(pid){
	var _isInvalid = true;
	$("#table498b04e2a887414773a8195243aa5c501393").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table498b04e2a887414773a8195243aa5c501393Pid = pid;
		}
		return false;
	}
	window.table498b04e2a887414773a8195243aa5c501393Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table498b04e2a887414773a8195243aa5c501393').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table498b04e2a887414773a8195243aa5c501393Reload();
};
function table498b04e2a887414773a8195243aa5c501393TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table498b04e2a887414773a8195243aa5c501393Pid == 'undefined' || window.table498b04e2a887414773a8195243aa5c501393Pid!=null){
table498b04e2a887414773a8195243aa5c501393Reload(window.table498b04e2a887414773a8195243aa5c501393Pid);
}
}
var tablecmtable498b04e2a887414773a8195243aa5c501393 = [];
var uniqueColtable498b04e2a887414773a8195243aa5c501393 = [];
var uniqueColTitletable498b04e2a887414773a8195243aa5c501393 = [];
var defaultValuetable498b04e2a887414773a8195243aa5c501393 = {};
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '申请日期',hidden:false, name: 'APPLICATION_DATE',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '申请人所在单位',hidden:false, name: 'APPLICATION_DEPARTMENT',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '申请人电话',hidden:false, name: 'APPLICATION_PHONE',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '表单编号',hidden:false, name: 'LIST_NUMBER',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '申请人',hidden:false, name: 'APPLICANT',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '申请人报送佐证材料名称',hidden:false, name: 'DOCUMENT_NAME',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '竞赛办公室打分',hidden:false, name: 'SCORE',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable498b04e2a887414773a8195243aa5c501393.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
function table498b04e2a887414773a8195243aa5c501393initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton78bdcc9782e92d4d43d811ad16f942b7cef2").css('display','inline-block');
}else{
$("#tableToolbarButton78bdcc9782e92d4d43d811ad16f942b7cef2").hide();
}
table498b04e2a887414773a8195243aa5c501393searchWF();
}
function table498b04e2a887414773a8195243aa5c501393searchWF(){
   if ($("#searchformtable498b04e2a887414773a8195243aa5c501393").length>0){
      var para = serializeObject($("#searchformtable498b04e2a887414773a8195243aa5c501393"));
      para.bpmState = $('#table498b04e2a887414773a8195243aa5c501393workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table498b04e2a887414773a8195243aa5c501393').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table498b04e2a887414773a8195243aa5c501393workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table498b04e2a887414773a8195243aa5c501393').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table498b04e2a887414773a8195243aa5c501393").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3876969b701876e130b552d8e/table498b04e2a887414773a8195243aa5c501393/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable498b04e2a887414773a8195243aa5c501393,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table498b04e2a887414773a8195243aa5c501393SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table498b04e2a887414773a8195243aa5c501393LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table498b04e2a887414773a8195243aa5c501393OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table498b04e2a887414773a8195243aa5c501393OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table498b04e2a887414773a8195243aa5c501393GridComplete.exec();
				    setTimeout(function(){var height = $("#table498b04e2a887414773a8195243aa5c501393").closest('.ui-jqgrid-bdiv').height();
					$("#table498b04e2a887414773a8195243aa5c501393norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table498b04e2a887414773a8195243aa5c501393norecords img").css("width","120px");
                 }else{
					    $("#table498b04e2a887414773a8195243aa5c501393norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table498b04e2a887414773a8195243aa5c501393BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table498b04e2a887414773a8195243aa5c501393OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table498b04e2a887414773a8195243aa5c501393norecords").hide();
		   	    $("#Pagertable498b04e2a887414773a8195243aa5c501393_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table498b04e2a887414773a8195243aa5c501393").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table498b04e2a887414773a8195243aa5c501393").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table498b04e2a887414773a8195243aa5c501393norecords").html() == null) {
						$("#table498b04e2a887414773a8195243aa5c501393").parent().append("<div class='no_data' id='table498b04e2a887414773a8195243aa5c501393norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table498b04e2a887414773a8195243aa5c501393norecords").show();
					$("#Pagertable498b04e2a887414773a8195243aa5c501393_left").css("display", "none");
				}
table498b04e2a887414773a8195243aa5c501393LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable498b04e2a887414773a8195243aa5c501393"
    });
table498b04e2a887414773a8195243aa5c501393Reload();
$("#t_table498b04e2a887414773a8195243aa5c501393").append($("#tableToolbartable498b04e2a887414773a8195243aa5c501393"));$("#tableToolbarButton1b8dafec6d1da54ad289c3d50ca01d5e9ee3").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e386fd45c8018731120f19619b&grid=table498b04e2a887414773a8195243aa5c501393'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton78bdcc9782e92d4d43d811ad16f942b7cef2").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table498b04e2a887414773a8195243aa5c501393').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table498b04e2a887414773a8195243aa5c501393').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_XJWYHBS_INFO&isbpm=Y&dbid=948e83e3874a82a301874b660a3b291a', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3876969b701876e130b552d8e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table498b04e2a887414773a8195243aa5c501393').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton78bdcc9782e92d4d43d811ad16f942b7cef2").hide();
$("#tableToolbarButton42825def2150b14eca8a5f28ccc6c4a42bd2").bind('click',function(event){flowUtils.openOnDialog('platform/bpm/business/start?defineId=402811817e7a67d0017e7b9b37520d7d-1','党建工作报送')});
$('#table498b04e2a887414773a8195243aa5c501393workFlowSelect').bind('change',function(){
table498b04e2a887414773a8195243aa5c501393initWorkFlow($(this).val());
});
function searchDatatable498b04e2a887414773a8195243aa5c501393(){
 var para = serializeObjectForEform($("#searchformtable498b04e2a887414773a8195243aa5c501393"));
 para.bpmState = $('#table498b04e2a887414773a8195243aa5c501393workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table498b04e2a887414773a8195243aa5c501393KeyWordIn="";
table498b04e2a887414773a8195243aa5c501393ParamIn=JSON.stringify(para);
	$('#table498b04e2a887414773a8195243aa5c501393').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable498b04e2a887414773a8195243aa5c501393").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable498b04e2a887414773a8195243aa5c501393').bind('click',function(){
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
	content: $('#searchDialogtable498b04e2a887414773a8195243aa5c501393'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable498b04e2a887414773a8195243aa5c501393(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable498b04e2a887414773a8195243aa5c501393")); searchDatatable498b04e2a887414773a8195243aa5c501393(); layer.close(index); return false;
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
