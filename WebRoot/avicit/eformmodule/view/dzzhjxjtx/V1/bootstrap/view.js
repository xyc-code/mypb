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
function to_jindu_view(value,item,obj){
return '<div  class="project_rate"><div class="project_rate_inner linenormal" style="width: '+value+';"></div></div><div><span>'+value+'</span></div>'
}
function fomrt(value,item,obj){
if(value !== "无"){
 return format(value);
}else{
 return value;
}
}
function fomatDate(value,item,obj){
 if(value!=""){
  return format(value); 
}else{
 return "";
}

}
function redraw2c908c1d8d632b96018d63339d67089c(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8d632b96018d63339d67089c").width();
		var win_height = $("#2c908c1d8d632b96018d63339d67089c").height();
		$('#2c908c1d8d632b96018d63339d67089c').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8d632b96018d63339d67089c').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8d632b96018d63339d67089c").width();
	setTimeout(function(){redraw2c908c1d8d632b96018d63339d67089c(win_width);},500);
});
var table8064f28b40dbc84b9afb08dd878f4861014bKeyWordIn = "";    
var table8064f28b40dbc84b9afb08dd878f4861014bParamIn = "";    
var table8064f28b40dbc84b9afb08dd878f4861014bSelectRow = {     
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
var table8064f28b40dbc84b9afb08dd878f4861014bLoadComplete = {     
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
var table8064f28b40dbc84b9afb08dd878f4861014bBeforeEditCell = {        
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
var table8064f28b40dbc84b9afb08dd878f4861014bOndblClickRow = {     
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
var table8064f28b40dbc84b9afb08dd878f4861014bOnRightClickRow = {     
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
var table8064f28b40dbc84b9afb08dd878f4861014bGridComplete = {     
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
var table8064f28b40dbc84b9afb08dd878f4861014bOnCellSelect = {     
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
var table8064f28b40dbc84b9afb08dd878f4861014bLoadBeforeSend = {        
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
function table8064f28b40dbc84b9afb08dd878f4861014bReload(pid){
	var _isInvalid = true;
	$("#table8064f28b40dbc84b9afb08dd878f4861014b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8064f28b40dbc84b9afb08dd878f4861014bPid = pid;
		}
		return false;
	}
	window.table8064f28b40dbc84b9afb08dd878f4861014bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8064f28b40dbc84b9afb08dd878f4861014b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table8064f28b40dbc84b9afb08dd878f4861014bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8064f28b40dbc84b9afb08dd878f4861014bPid == 'undefined' || window.table8064f28b40dbc84b9afb08dd878f4861014bPid!=null){
table8064f28b40dbc84b9afb08dd878f4861014bReload(window.table8064f28b40dbc84b9afb08dd878f4861014bPid);
}
}
var tablecmtable8064f28b40dbc84b9afb08dd878f4861014b = [];
var uniqueColtable8064f28b40dbc84b9afb08dd878f4861014b = [];
var uniqueColTitletable8064f28b40dbc84b9afb08dd878f4861014b = [];
var defaultValuetable8064f28b40dbc84b9afb08dd878f4861014b = {};
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '届次',hidden:true, name: 'SESSION_NAME',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({ label: '党组织类型',hidden:true, name: 'PARTY_TYPE',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({ label: '党组织类型',hidden:false, name: 'PARTY_TYPEName',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({ label: '选举类型',hidden:true, name: 'SESSION_TYPE',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({ label: '选举类型',hidden:false, name: 'SESSION_TYPEName',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '上届选举时间', formatter:format, hidden:false, name: 'TOP_CREA_TIME',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '选举时间', formatter:format, hidden:false, name: 'CREA_TIME',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '换届提醒', formatter:format, hidden:false, name: 'CREA_TIME_DATE',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '提交换届选举请示 ', formatter:format, hidden:false, name: 'CREA_TIME_DATE_TJ',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '提交候选人预备人选请示 ', formatter:format, hidden:false, name: 'CREA_TIME_DATE_TJYB',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '党委会审批预备人选时间', formatter:function(cellvalue, options, rowObject){return fomatDate(cellvalue, options, rowObject);}, hidden:false, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '召开党员大会', formatter:format, hidden:false, name: 'ZKDYDH',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '纪委一次会', formatter:function(cellvalue, options, rowObject){return fomrt(cellvalue, options, rowObject);}, hidden:false, name: 'JWYCH',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '委员会一次会', formatter:format, hidden:false, name: 'WYYCH',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '报送选举结果', formatter:function(cellvalue, options, rowObject){return fomatDate(cellvalue, options, rowObject);}, hidden:false, name: 'ATTR2',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '党委会审批选举结果时间', formatter:function(cellvalue, options, rowObject){return fomatDate(cellvalue, options, rowObject);}, hidden:false, name: 'ATTR3',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '组织机构调整文件',hidden:true, name: 'ORG_FILE',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '进度条', formatter:function(cellvalue, options, rowObject){return to_jindu_view(cellvalue, options, rowObject);}, hidden:false, name: 'PRO',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '完成率', formatter:function(cellvalue, options, rowObject){return to_jindu_view(cellvalue, options, rowObject);}, hidden:false, name: 'WCL',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '问题',hidden:false, name: 'PARTY_ORG_CONTENT',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '届次',hidden:true, name: 'SESSION_ID',align:'right',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '党组织id',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({ label: '选举进度',hidden:true, name: 'SESSION_JD',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({ label: '选举进度',hidden:true, name: 'SESSION_JDName',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8064f28b40dbc84b9afb08dd878f4861014b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable8064f28b40dbc84b9afb08dd878f4861014b = []; 
searchNamestable8064f28b40dbc84b9afb08dd878f4861014b.push('PARTY_NAME');
$('#keyWordtable8064f28b40dbc84b9afb08dd878f4861014b').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtable8064f28b40dbc84b9afb08dd878f4861014b(){
	var keyWord = $.trim($("#keyWordtable8064f28b40dbc84b9afb08dd878f4861014b").val()); 
 if($('#keyWordtable8064f28b40dbc84b9afb08dd878f4861014b').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable8064f28b40dbc84b9afb08dd878f4861014b.length;i++){ 
		var name = searchNamestable8064f28b40dbc84b9afb08dd878f4861014b[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table8064f28b40dbc84b9afb08dd878f4861014bKeyWordIn=JSON.stringify(param);
table8064f28b40dbc84b9afb08dd878f4861014bParamIn="";
	$('#table8064f28b40dbc84b9afb08dd878f4861014b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable8064f28b40dbc84b9afb08dd878f4861014b').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable8064f28b40dbc84b9afb08dd878f4861014b();
	}
});
$('#keyWordBttable8064f28b40dbc84b9afb08dd878f4861014b').bind('click', function() {
		searchDataKeyWordtable8064f28b40dbc84b9afb08dd878f4861014b();
});
;$(document).ready(function(){ 

$("#table8064f28b40dbc84b9afb08dd878f4861014b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8d632b96018d63339d67089c/table8064f28b40dbc84b9afb08dd878f4861014b/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8064f28b40dbc84b9afb08dd878f4861014b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:true,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8064f28b40dbc84b9afb08dd878f4861014bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8064f28b40dbc84b9afb08dd878f4861014bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8064f28b40dbc84b9afb08dd878f4861014bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8064f28b40dbc84b9afb08dd878f4861014bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8064f28b40dbc84b9afb08dd878f4861014bGridComplete.exec();
				    setTimeout(function(){var height = $("#table8064f28b40dbc84b9afb08dd878f4861014b").closest('.ui-jqgrid-bdiv').height();
					$("#table8064f28b40dbc84b9afb08dd878f4861014bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8064f28b40dbc84b9afb08dd878f4861014bnorecords img").css("width","120px");
                 }else{
					    $("#table8064f28b40dbc84b9afb08dd878f4861014bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8064f28b40dbc84b9afb08dd878f4861014bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8064f28b40dbc84b9afb08dd878f4861014bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8064f28b40dbc84b9afb08dd878f4861014bnorecords").hide();
		   	    $("#Pagertable8064f28b40dbc84b9afb08dd878f4861014b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8064f28b40dbc84b9afb08dd878f4861014b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8064f28b40dbc84b9afb08dd878f4861014b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8064f28b40dbc84b9afb08dd878f4861014bnorecords").html() == null) {
						$("#table8064f28b40dbc84b9afb08dd878f4861014b").parent().append("<div class='no_data' id='table8064f28b40dbc84b9afb08dd878f4861014bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8064f28b40dbc84b9afb08dd878f4861014bnorecords").show();
					$("#Pagertable8064f28b40dbc84b9afb08dd878f4861014b_left").css("display", "none");
				}
table8064f28b40dbc84b9afb08dd878f4861014bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8064f28b40dbc84b9afb08dd878f4861014b"
    });
table8064f28b40dbc84b9afb08dd878f4861014bReload();
$("#t_table8064f28b40dbc84b9afb08dd878f4861014b").append($("#tableToolbartable8064f28b40dbc84b9afb08dd878f4861014b"));function searchDatatable8064f28b40dbc84b9afb08dd878f4861014b(){
 var para = serializeObjectForEform($("#searchformtable8064f28b40dbc84b9afb08dd878f4861014b"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table8064f28b40dbc84b9afb08dd878f4861014bKeyWordIn="";
table8064f28b40dbc84b9afb08dd878f4861014bParamIn=JSON.stringify(para);
	$('#table8064f28b40dbc84b9afb08dd878f4861014b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable8064f28b40dbc84b9afb08dd878f4861014b").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable8064f28b40dbc84b9afb08dd878f4861014b').bind('click',function(){
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
'650px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtable8064f28b40dbc84b9afb08dd878f4861014b'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable8064f28b40dbc84b9afb08dd878f4861014b(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable8064f28b40dbc84b9afb08dd878f4861014b")); searchDatatable8064f28b40dbc84b9afb08dd878f4861014b(); layer.close(index); return false;
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
$('#CREA_TIME_START_button').click(function(e){
			$('#CREA_TIME_START').datepicker('show');
			$('#CREA_TIME_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_END_button').click(function(e){
			$('#CREA_TIME_END').datepicker('show');
			$('#CREA_TIME_END').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_START_button').click(function(e){
			$('#CREA_TIME_DATE_START').datepicker('show');
			$('#CREA_TIME_DATE_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_END_button').click(function(e){
			$('#CREA_TIME_DATE_END').datepicker('show');
			$('#CREA_TIME_DATE_END').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJ_START_button').click(function(e){
			$('#CREA_TIME_DATE_TJ_START').datepicker('show');
			$('#CREA_TIME_DATE_TJ_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJ_END_button').click(function(e){
			$('#CREA_TIME_DATE_TJ_END').datepicker('show');
			$('#CREA_TIME_DATE_TJ_END').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJYB_START_button').click(function(e){
			$('#CREA_TIME_DATE_TJYB_START').datepicker('show');
			$('#CREA_TIME_DATE_TJYB_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJYB_END_button').click(function(e){
			$('#CREA_TIME_DATE_TJYB_END').datepicker('show');
			$('#CREA_TIME_DATE_TJYB_END').datepicker().trigger('click');
}); 
$('#ZKDYDH_START_button').click(function(e){
			$('#ZKDYDH_START').datepicker('show');
			$('#ZKDYDH_START').datepicker().trigger('click');
}); 
$('#ZKDYDH_END_button').click(function(e){
			$('#ZKDYDH_END').datepicker('show');
			$('#ZKDYDH_END').datepicker().trigger('click');
}); 
$('#JWYCH_START_button').click(function(e){
			$('#JWYCH_START').datepicker('show');
			$('#JWYCH_START').datepicker().trigger('click');
}); 
$('#JWYCH_END_button').click(function(e){
			$('#JWYCH_END').datepicker('show');
			$('#JWYCH_END').datepicker().trigger('click');
}); 
$('#WYYCH_START_button').click(function(e){
			$('#WYYCH_START').datepicker('show');
			$('#WYYCH_START').datepicker().trigger('click');
}); 
$('#WYYCH_END_button').click(function(e){
			$('#WYYCH_END').datepicker('show');
			$('#WYYCH_END').datepicker().trigger('click');
}); 
;});	 
