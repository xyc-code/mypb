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

function redraw948e83e3828f72f301829129fefa4465(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3828f72f301829129fefa4465").width();
		var win_height = $("#948e83e3828f72f301829129fefa4465").height();
		$('#948e83e3828f72f301829129fefa4465').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3828f72f301829129fefa4465').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3828f72f301829129fefa4465").width();
	setTimeout(function(){redraw948e83e3828f72f301829129fefa4465(win_width);},500);
});
var table3215bd1dd3d79c4115ca9132e549bb918ebfKeyWordIn = "";    
var table3215bd1dd3d79c4115ca9132e549bb918ebfParamIn = "";    
var table3215bd1dd3d79c4115ca9132e549bb918ebfSelectRow = {     
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfLoadComplete = {     
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfBeforeEditCell = {        
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfOndblClickRow = {     
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfOnRightClickRow = {     
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfGridComplete = {     
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfOnCellSelect = {     
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
var table3215bd1dd3d79c4115ca9132e549bb918ebfLoadBeforeSend = {        
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
function table3215bd1dd3d79c4115ca9132e549bb918ebfReload(pid){
	var _isInvalid = true;
	$("#table3215bd1dd3d79c4115ca9132e549bb918ebf").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3215bd1dd3d79c4115ca9132e549bb918ebfPid = pid;
		}
		return false;
	}
	window.table3215bd1dd3d79c4115ca9132e549bb918ebfPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3215bd1dd3d79c4115ca9132e549bb918ebf').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table3215bd1dd3d79c4115ca9132e549bb918ebfReload();
};
function table3215bd1dd3d79c4115ca9132e549bb918ebfTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3215bd1dd3d79c4115ca9132e549bb918ebfPid == 'undefined' || window.table3215bd1dd3d79c4115ca9132e549bb918ebfPid!=null){
table3215bd1dd3d79c4115ca9132e549bb918ebfReload(window.table3215bd1dd3d79c4115ca9132e549bb918ebfPid);
}
}
var tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf = [];
var uniqueColtable3215bd1dd3d79c4115ca9132e549bb918ebf = [];
var uniqueColTitletable3215bd1dd3d79c4115ca9132e549bb918ebf = [];
var defaultValuetable3215bd1dd3d79c4115ca9132e549bb918ebf = {};
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '申请日期',hidden:false, name: 'REQUST_DATE',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '申请人所在党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '申请人所在单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '召开党员大会时间', formatter:format, hidden:false, name: 'ELECTION_TIME',align:'center',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '实际参加有选举权人数',hidden:true, name: 'PARTY_SHIJI',align:'right',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '应参加有选举权人数',hidden:true, name: 'PARTY_YINGGAI',align:'right',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '三会一课名称',hidden:true, name: 'THREE_FOUR_NAME',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '三会一课名称1',hidden:true, name: 'THREE_FOUR_NAME1',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '三会一课ID',hidden:true, name: 'THREE_FOUR_ID',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({label: '三会一课ID1',hidden:true, name: 'THREE_FOUR_ID1',align:'left',  width: '150px'});
tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function table3215bd1dd3d79c4115ca9132e549bb918ebfinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtonfac5ffe50e49fc4154e84d562156b51cc962").css('display','inline-block');
}else{
$("#tableToolbarButtonfac5ffe50e49fc4154e84d562156b51cc962").hide();
}
table3215bd1dd3d79c4115ca9132e549bb918ebfsearchWF();
}
function table3215bd1dd3d79c4115ca9132e549bb918ebfsearchWF(){
   if ($("#searchformtable3215bd1dd3d79c4115ca9132e549bb918ebf").length>0){
      var para = serializeObject($("#searchformtable3215bd1dd3d79c4115ca9132e549bb918ebf"));
      para.bpmState = $('#table3215bd1dd3d79c4115ca9132e549bb918ebfworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table3215bd1dd3d79c4115ca9132e549bb918ebf').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table3215bd1dd3d79c4115ca9132e549bb918ebfworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table3215bd1dd3d79c4115ca9132e549bb918ebf').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table3215bd1dd3d79c4115ca9132e549bb918ebf").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3828f72f301829129fefa4465/table3215bd1dd3d79c4115ca9132e549bb918ebf/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable3215bd1dd3d79c4115ca9132e549bb918ebf,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3215bd1dd3d79c4115ca9132e549bb918ebfSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3215bd1dd3d79c4115ca9132e549bb918ebfLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3215bd1dd3d79c4115ca9132e549bb918ebfOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3215bd1dd3d79c4115ca9132e549bb918ebfOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3215bd1dd3d79c4115ca9132e549bb918ebfGridComplete.exec();
				    setTimeout(function(){var height = $("#table3215bd1dd3d79c4115ca9132e549bb918ebf").closest('.ui-jqgrid-bdiv').height();
					$("#table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords img").css("width","120px");
                 }else{
					    $("#table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3215bd1dd3d79c4115ca9132e549bb918ebfBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3215bd1dd3d79c4115ca9132e549bb918ebfOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords").hide();
		   	    $("#Pagertable3215bd1dd3d79c4115ca9132e549bb918ebf_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3215bd1dd3d79c4115ca9132e549bb918ebf").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3215bd1dd3d79c4115ca9132e549bb918ebf").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords").html() == null) {
						$("#table3215bd1dd3d79c4115ca9132e549bb918ebf").parent().append("<div class='no_data' id='table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3215bd1dd3d79c4115ca9132e549bb918ebfnorecords").show();
					$("#Pagertable3215bd1dd3d79c4115ca9132e549bb918ebf_left").css("display", "none");
				}
table3215bd1dd3d79c4115ca9132e549bb918ebfLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3215bd1dd3d79c4115ca9132e549bb918ebf"
    });
table3215bd1dd3d79c4115ca9132e549bb918ebfReload();
$("#t_table3215bd1dd3d79c4115ca9132e549bb918ebf").append($("#tableToolbartable3215bd1dd3d79c4115ca9132e549bb918ebf"));$("#tableToolbarButton817c6790c83ae8415c7911d48ac703b91e5c").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f30182902618663f2d&grid=table3215bd1dd3d79c4115ca9132e549bb918ebf'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonfac5ffe50e49fc4154e84d562156b51cc962").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table3215bd1dd3d79c4115ca9132e549bb918ebf').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table3215bd1dd3d79c4115ca9132e549bb918ebf').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_HUANJIE_DYDH&isbpm=Y&dbid=948e83e3828f72f30182902732b23f2e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3828f72f301829129fefa4465',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table3215bd1dd3d79c4115ca9132e549bb918ebf').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonfac5ffe50e49fc4154e84d562156b51cc962").hide();
$('#table3215bd1dd3d79c4115ca9132e549bb918ebfworkFlowSelect').bind('change',function(){
table3215bd1dd3d79c4115ca9132e549bb918ebfinitWorkFlow($(this).val());
});
function searchDatatable3215bd1dd3d79c4115ca9132e549bb918ebf(){
 var para = serializeObjectForEform($("#searchformtable3215bd1dd3d79c4115ca9132e549bb918ebf"));
 para.bpmState = $('#table3215bd1dd3d79c4115ca9132e549bb918ebfworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table3215bd1dd3d79c4115ca9132e549bb918ebfKeyWordIn="";
table3215bd1dd3d79c4115ca9132e549bb918ebfParamIn=JSON.stringify(para);
	$('#table3215bd1dd3d79c4115ca9132e549bb918ebf').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable3215bd1dd3d79c4115ca9132e549bb918ebf").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable3215bd1dd3d79c4115ca9132e549bb918ebf').bind('click',function(){
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
	content: $('#searchDialogtable3215bd1dd3d79c4115ca9132e549bb918ebf'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable3215bd1dd3d79c4115ca9132e549bb918ebf(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable3215bd1dd3d79c4115ca9132e549bb918ebf")); searchDatatable3215bd1dd3d79c4115ca9132e549bb918ebf(); layer.close(index); return false;
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
