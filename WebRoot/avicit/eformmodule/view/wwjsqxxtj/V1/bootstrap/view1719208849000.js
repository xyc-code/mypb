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
function formatStatus(cellvalue,rowData,obj){

if(cellvalue=='1'){
   return '已完成';
}
return  '流转中';

}


function formatPrint(cellvalue,rowData,obj){

if(cellvalue=='N'){
   return '未打印';
}
return  '已打印';

}
function redraw2c908c528e988f79018e9c5a94c5124f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528e988f79018e9c5a94c5124f").width();
		var win_height = $("#2c908c528e988f79018e9c5a94c5124f").height();
		$('#2c908c528e988f79018e9c5a94c5124f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528e988f79018e9c5a94c5124f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528e988f79018e9c5a94c5124f").width();
	setTimeout(function(){redraw2c908c528e988f79018e9c5a94c5124f(win_width);},500);
});
var tablebc37e95583090642c9fb0f88dde810b595b7KeyWordIn = "";    
var tablebc37e95583090642c9fb0f88dde810b595b7ParamIn = "";    
var tablebc37e95583090642c9fb0f88dde810b595b7SelectRow = {     
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
var tablebc37e95583090642c9fb0f88dde810b595b7LoadComplete = {     
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
var tablebc37e95583090642c9fb0f88dde810b595b7BeforeEditCell = {        
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
var tablebc37e95583090642c9fb0f88dde810b595b7OndblClickRow = {     
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
var tablebc37e95583090642c9fb0f88dde810b595b7OnRightClickRow = {     
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
var tablebc37e95583090642c9fb0f88dde810b595b7GridComplete = {     
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
var tablebc37e95583090642c9fb0f88dde810b595b7OnCellSelect = {     
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
var tablebc37e95583090642c9fb0f88dde810b595b7LoadBeforeSend = {        
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
function tablebc37e95583090642c9fb0f88dde810b595b7Reload(pid){
	var _isInvalid = true;
	$("#tablebc37e95583090642c9fb0f88dde810b595b7").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablebc37e95583090642c9fb0f88dde810b595b7Pid = pid;
		}
		return false;
	}
	window.tablebc37e95583090642c9fb0f88dde810b595b7Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablebc37e95583090642c9fb0f88dde810b595b7').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablebc37e95583090642c9fb0f88dde810b595b7TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablebc37e95583090642c9fb0f88dde810b595b7Pid == 'undefined' || window.tablebc37e95583090642c9fb0f88dde810b595b7Pid!=null){
tablebc37e95583090642c9fb0f88dde810b595b7Reload(window.tablebc37e95583090642c9fb0f88dde810b595b7Pid);
}
}
var tablecmtablebc37e95583090642c9fb0f88dde810b595b7 = [];
var uniqueColtablebc37e95583090642c9fb0f88dde810b595b7 = [];
var uniqueColTitletablebc37e95583090642c9fb0f88dde810b595b7 = [];
var defaultValuetablebc37e95583090642c9fb0f88dde810b595b7 = {};
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '工会审批编号',hidden:true, name: 'TRADE_NO',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '工会名称',hidden:true, name: 'GUILD_NAME',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '经办单位',hidden:false, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '经办人',hidden:true, name: 'REQUEST_NAME',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '填报日期', formatter:format, hidden:false, name: 'REQUEST_DATE',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '经办联系电话',hidden:true, name: 'TEL',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '职工姓名',hidden:false, name: 'WORKER_NAME',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '职工姓别',hidden:false, name: 'WORKER_SEX',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '年龄',hidden:false, name: 'WORKER_AGE',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '人员类别',hidden:true, name: 'WORKER_TYPE',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '人员类别',hidden:false, name: 'WORKER_TYPEName',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '工作岗位及职务',hidden:false, name: 'WORKER_POST',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '慰问种类',hidden:true, name: 'SALUTE_TYPE',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '慰问种类',hidden:false, name: 'SALUTE_TYPEName',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '慰问时间', formatter:format, hidden:false, name: 'SALUTE_DATE',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '申请拨付慰问金人民币',hidden:false, name: 'SALUTE_MONEY',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '住院地点',hidden:true, name: 'IN_HSP_PLACE',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '住院原因',hidden:true, name: 'IN_HSP_REASON',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '住院时间', formatter:format, hidden:true, name: 'IN_HSP_DATE',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '与职工关系',hidden:true, name: 'WORKER_RELATION',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '与职工关系',hidden:false, name: 'WORKER_RELATIONName',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '参加慰问人员',hidden:true, name: 'SALUTE_PEOPLE',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({ label: '参加慰问人员',hidden:false, name: 'SALUTE_PEOPLEName',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '慰问原因',hidden:false, name: 'SALUTE_REASON_EXT',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '工会id',hidden:true, name: 'GUILD_ID',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '职工姓名',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '流程状态', formatter:function(cellvalue, options, rowObject){return formatStatus(cellvalue, options, rowObject);}, hidden:false, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '部门id',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '单位鉴定',hidden:true, name: 'UNIT_JD',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '是否购买慰问品',hidden:true, name: 'IS_WWP',align:'left',  width: '150px'});
tablecmtablebc37e95583090642c9fb0f88dde810b595b7.push({label: '打印状态', formatter:function(cellvalue, options, rowObject){return formatPrint(cellvalue, options, rowObject);}, hidden:false, name: 'PRINT_STATUS',align:'left',  width: '150px'});
	var searchNamestablebc37e95583090642c9fb0f88dde810b595b7 = []; 
searchNamestablebc37e95583090642c9fb0f88dde810b595b7.push('WORKER_NAME');
$('#keyWordtablebc37e95583090642c9fb0f88dde810b595b7').attr('placeholder', '请输入职工姓名查询');
function searchDataKeyWordtablebc37e95583090642c9fb0f88dde810b595b7(){
	var keyWord = $.trim($("#keyWordtablebc37e95583090642c9fb0f88dde810b595b7").val()); 
 if($('#keyWordtablebc37e95583090642c9fb0f88dde810b595b7').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablebc37e95583090642c9fb0f88dde810b595b7.length;i++){ 
		var name = searchNamestablebc37e95583090642c9fb0f88dde810b595b7[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablebc37e95583090642c9fb0f88dde810b595b7KeyWordIn=JSON.stringify(param);
tablebc37e95583090642c9fb0f88dde810b595b7ParamIn="";
	$('#tablebc37e95583090642c9fb0f88dde810b595b7').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablebc37e95583090642c9fb0f88dde810b595b7').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablebc37e95583090642c9fb0f88dde810b595b7();
	}
});
$('#keyWordBttablebc37e95583090642c9fb0f88dde810b595b7').bind('click', function() {
		searchDataKeyWordtablebc37e95583090642c9fb0f88dde810b595b7();
});
;$(document).ready(function(){ 

$("#tablebc37e95583090642c9fb0f88dde810b595b7").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528e988f79018e9c5a94c5124f/tablebc37e95583090642c9fb0f88dde810b595b7/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablebc37e95583090642c9fb0f88dde810b595b7,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:true,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablebc37e95583090642c9fb0f88dde810b595b7SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablebc37e95583090642c9fb0f88dde810b595b7LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablebc37e95583090642c9fb0f88dde810b595b7OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablebc37e95583090642c9fb0f88dde810b595b7OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablebc37e95583090642c9fb0f88dde810b595b7GridComplete.exec();
				    setTimeout(function(){var height = $("#tablebc37e95583090642c9fb0f88dde810b595b7").closest('.ui-jqgrid-bdiv').height();
					$("#tablebc37e95583090642c9fb0f88dde810b595b7norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablebc37e95583090642c9fb0f88dde810b595b7norecords img").css("width","120px");
                 }else{
					    $("#tablebc37e95583090642c9fb0f88dde810b595b7norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablebc37e95583090642c9fb0f88dde810b595b7BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablebc37e95583090642c9fb0f88dde810b595b7OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablebc37e95583090642c9fb0f88dde810b595b7norecords").hide();
		   	    $("#Pagertablebc37e95583090642c9fb0f88dde810b595b7_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablebc37e95583090642c9fb0f88dde810b595b7").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablebc37e95583090642c9fb0f88dde810b595b7").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablebc37e95583090642c9fb0f88dde810b595b7norecords").html() == null) {
						$("#tablebc37e95583090642c9fb0f88dde810b595b7").parent().append("<div class='no_data' id='tablebc37e95583090642c9fb0f88dde810b595b7norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablebc37e95583090642c9fb0f88dde810b595b7norecords").show();
					$("#Pagertablebc37e95583090642c9fb0f88dde810b595b7_left").css("display", "none");
				}
tablebc37e95583090642c9fb0f88dde810b595b7LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   footerrow:true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablebc37e95583090642c9fb0f88dde810b595b7"
    });
tablebc37e95583090642c9fb0f88dde810b595b7Reload();
$("#t_tablebc37e95583090642c9fb0f88dde810b595b7").append($("#tableToolbartablebc37e95583090642c9fb0f88dde810b595b7"));function searchDatatablebc37e95583090642c9fb0f88dde810b595b7(){
 var para = serializeObjectForEform($("#searchformtablebc37e95583090642c9fb0f88dde810b595b7"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablebc37e95583090642c9fb0f88dde810b595b7KeyWordIn="";
tablebc37e95583090642c9fb0f88dde810b595b7ParamIn=JSON.stringify(para);
	$('#tablebc37e95583090642c9fb0f88dde810b595b7').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablebc37e95583090642c9fb0f88dde810b595b7").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablebc37e95583090642c9fb0f88dde810b595b7').bind('click',function(){
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
	content: $('#searchDialogtablebc37e95583090642c9fb0f88dde810b595b7'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablebc37e95583090642c9fb0f88dde810b595b7(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablebc37e95583090642c9fb0f88dde810b595b7")); searchDatatablebc37e95583090642c9fb0f88dde810b595b7(); layer.close(index); return false;
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
$('#SALUTE_DATE_START_button').click(function(e){
			$('#SALUTE_DATE_START').datepicker('show');
			$('#SALUTE_DATE_START').datepicker().trigger('click');
}); 
$('#SALUTE_DATE_END_button').click(function(e){
			$('#SALUTE_DATE_END').datepicker('show');
			$('#SALUTE_DATE_END').datepicker().trigger('click');
}); 
$('#REQUEST_DATE_START_button').click(function(e){
			$('#REQUEST_DATE_START').datepicker('show');
			$('#REQUEST_DATE_START').datepicker().trigger('click');
}); 
$('#REQUEST_DATE_END_button').click(function(e){
			$('#REQUEST_DATE_END').datepicker('show');
			$('#REQUEST_DATE_END').datepicker().trigger('click');
}); 

$('#tableToolbarButton1aa94d1d742861497068ba943e6025d8c1de').bind('click',function() {                           
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
	        var colModels =$('#tablebc37e95583090642c9fb0f88dde810b595b7').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablebc37e95583090642c9fb0f88dde810b595b7KeyWordIn;                          
	        expSearchParams.param = tablebc37e95583090642c9fb0f88dde810b595b7ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='职工慰问金审批表';                             
	        expSearchParams.viewid='2c908c528e988f79018e9c5a94c5124f';                                   
	        expSearchParams.tableid='tablebc37e95583090642c9fb0f88dde810b595b7';                                 
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
;});	 
