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

function redraw948e83e38fa41ec6018fa452c0180cfa(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38fa41ec6018fa452c0180cfa").width();
		var win_height = $("#948e83e38fa41ec6018fa452c0180cfa").height();
		$('#948e83e38fa41ec6018fa452c0180cfa').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38fa41ec6018fa452c0180cfa').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38fa41ec6018fa452c0180cfa").width();
	setTimeout(function(){redraw948e83e38fa41ec6018fa452c0180cfa(win_width);},500);
});
var table1c6db461df80a54910a85517a1992eceb96bKeyWordIn = "";    
var table1c6db461df80a54910a85517a1992eceb96bParamIn = "";    
var table1c6db461df80a54910a85517a1992eceb96bSelectRow = {     
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
var table1c6db461df80a54910a85517a1992eceb96bLoadComplete = {     
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
var table1c6db461df80a54910a85517a1992eceb96bBeforeEditCell = {        
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
var table1c6db461df80a54910a85517a1992eceb96bOndblClickRow = {     
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
var table1c6db461df80a54910a85517a1992eceb96bOnRightClickRow = {     
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
var table1c6db461df80a54910a85517a1992eceb96bGridComplete = {     
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
var table1c6db461df80a54910a85517a1992eceb96bOnCellSelect = {     
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
var table1c6db461df80a54910a85517a1992eceb96bLoadBeforeSend = {        
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
function table1c6db461df80a54910a85517a1992eceb96bReload(pid){
	var _isInvalid = true;
	$("#table1c6db461df80a54910a85517a1992eceb96b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1c6db461df80a54910a85517a1992eceb96bPid = pid;
		}
		return false;
	}
	window.table1c6db461df80a54910a85517a1992eceb96bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table1c6db461df80a54910a85517a1992eceb96bReload();
};
function table1c6db461df80a54910a85517a1992eceb96bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1c6db461df80a54910a85517a1992eceb96bPid == 'undefined' || window.table1c6db461df80a54910a85517a1992eceb96bPid!=null){
table1c6db461df80a54910a85517a1992eceb96bReload(window.table1c6db461df80a54910a85517a1992eceb96bPid);
}
}
var tablecmtable1c6db461df80a54910a85517a1992eceb96b = [];
var uniqueColtable1c6db461df80a54910a85517a1992eceb96b = [];
var uniqueColTitletable1c6db461df80a54910a85517a1992eceb96b = [];
var defaultValuetable1c6db461df80a54910a85517a1992eceb96b = {};
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '申请人所在单位',hidden:false, name: 'DRAF_UNIT',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '表单编号',hidden:false, name: 'FORM_CODE',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '申请人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '申请人电话',hidden:false, name: 'DRAF_USER_TEL',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '申请日期',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '申请使用日期始', formatter:format, hidden:false, name: 'SY_DATE_S',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '申请使用日期至', formatter:format, hidden:false, name: 'SY_DATE_E',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ label: '是否需要配合讲解',hidden:true, name: 'SFPHJJ',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ label: '是否需要配合讲解',hidden:false, name: 'SFPHJJName',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '参加人数',hidden:false, name: 'CJRS',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ label: '使用类型',hidden:true, name: 'SY_TYPE',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ label: '使用类型',hidden:false, name: 'SY_TYPEName',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '其他需要提供的材料或配合的工',hidden:false, name: 'REMARK',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ label: '是否使用电脑/投影仪',hidden:true, name: 'SFSYDN',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ label: '是否使用电脑/投影仪',hidden:false, name: 'SFSYDNName',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable1c6db461df80a54910a85517a1992eceb96b.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable1c6db461df80a54910a85517a1992eceb96b = []; 
searchNamestable1c6db461df80a54910a85517a1992eceb96b.push('FORM_CODE');
$('#keyWordtable1c6db461df80a54910a85517a1992eceb96b').attr('placeholder', '请输入表单编号查询');
function searchDataKeyWordtable1c6db461df80a54910a85517a1992eceb96b(){
	var keyWord = $.trim($("#keyWordtable1c6db461df80a54910a85517a1992eceb96b").val()); 
 if($('#keyWordtable1c6db461df80a54910a85517a1992eceb96b').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable1c6db461df80a54910a85517a1992eceb96b.length;i++){ 
		var name = searchNamestable1c6db461df80a54910a85517a1992eceb96b[i]; 
		param[name] = keyWord; 
	} 
if ($("#table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect").length>0){param.bpmState=$('#table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table1c6db461df80a54910a85517a1992eceb96bKeyWordIn=JSON.stringify(param);
table1c6db461df80a54910a85517a1992eceb96bParamIn="";
	$('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable1c6db461df80a54910a85517a1992eceb96b').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable1c6db461df80a54910a85517a1992eceb96b();
	}
});
$('#keyWordBttable1c6db461df80a54910a85517a1992eceb96b').bind('click', function() {
		searchDataKeyWordtable1c6db461df80a54910a85517a1992eceb96b();
});
function table1c6db461df80a54910a85517a1992eceb96binitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton014df49f447e07429b486a2fce46017de207").css('display','inline-block');
}else{
$("#tableToolbarButton014df49f447e07429b486a2fce46017de207").hide();
}
table1c6db461df80a54910a85517a1992eceb96bsearchWF();
}
function table1c6db461df80a54910a85517a1992eceb96bsearchWF(){
   if ($("#searchformtable1c6db461df80a54910a85517a1992eceb96b").length>0){
      var para = serializeObject($("#searchformtable1c6db461df80a54910a85517a1992eceb96b"));
      para.bpmState = $('#table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table1c6db461df80a54910a85517a1992eceb96b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38fa41ec6018fa452c0180cfa/table1c6db461df80a54910a85517a1992eceb96b/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable1c6db461df80a54910a85517a1992eceb96b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1c6db461df80a54910a85517a1992eceb96bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1c6db461df80a54910a85517a1992eceb96bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1c6db461df80a54910a85517a1992eceb96bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1c6db461df80a54910a85517a1992eceb96bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1c6db461df80a54910a85517a1992eceb96bGridComplete.exec();
				    setTimeout(function(){var height = $("#table1c6db461df80a54910a85517a1992eceb96b").closest('.ui-jqgrid-bdiv').height();
					$("#table1c6db461df80a54910a85517a1992eceb96bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1c6db461df80a54910a85517a1992eceb96bnorecords img").css("width","120px");
                 }else{
					    $("#table1c6db461df80a54910a85517a1992eceb96bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1c6db461df80a54910a85517a1992eceb96bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table1c6db461df80a54910a85517a1992eceb96bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1c6db461df80a54910a85517a1992eceb96bnorecords").hide();
		   	    $("#Pagertable1c6db461df80a54910a85517a1992eceb96b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1c6db461df80a54910a85517a1992eceb96b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1c6db461df80a54910a85517a1992eceb96b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1c6db461df80a54910a85517a1992eceb96bnorecords").html() == null) {
						$("#table1c6db461df80a54910a85517a1992eceb96b").parent().append("<div class='no_data' id='table1c6db461df80a54910a85517a1992eceb96bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1c6db461df80a54910a85517a1992eceb96bnorecords").show();
					$("#Pagertable1c6db461df80a54910a85517a1992eceb96b_left").css("display", "none");
				}
table1c6db461df80a54910a85517a1992eceb96bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1c6db461df80a54910a85517a1992eceb96b"
    });
table1c6db461df80a54910a85517a1992eceb96bReload();
$("#t_table1c6db461df80a54910a85517a1992eceb96b").append($("#tableToolbartable1c6db461df80a54910a85517a1992eceb96b"));function searchDatatable1c6db461df80a54910a85517a1992eceb96b(){
 var para = serializeObjectForEform($("#searchformtable1c6db461df80a54910a85517a1992eceb96b"));
 para.bpmState = $('#table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table1c6db461df80a54910a85517a1992eceb96bKeyWordIn="";
table1c6db461df80a54910a85517a1992eceb96bParamIn=JSON.stringify(para);
	$('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable1c6db461df80a54910a85517a1992eceb96b").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable1c6db461df80a54910a85517a1992eceb96b').bind('click',function(){
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
	content: $('#searchDialogtable1c6db461df80a54910a85517a1992eceb96b'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable1c6db461df80a54910a85517a1992eceb96b(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable1c6db461df80a54910a85517a1992eceb96b")); searchDatatable1c6db461df80a54910a85517a1992eceb96b(); layer.close(index); return false;
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
$('#table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect').bind('change',function(){
table1c6db461df80a54910a85517a1992eceb96binitWorkFlow($(this).val());
});
$("#tableToolbarButton514608b6bd9fe0471438ba38cfea284c20d2").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fa440115d0b18&grid=table1c6db461df80a54910a85517a1992eceb96b'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton014df49f447e07429b486a2fce46017de207").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_LJWHXJS&isbpm=Y&dbid=948e83e38fa41ec6018fa44d12700b9e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38fa41ec6018fa452c0180cfa',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table1c6db461df80a54910a85517a1992eceb96b').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton014df49f447e07429b486a2fce46017de207").hide();
;});	 
