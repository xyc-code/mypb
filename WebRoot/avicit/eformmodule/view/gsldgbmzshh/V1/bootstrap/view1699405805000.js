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

function redraw2c908c1d89cef9c70189cf10be7d06be(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d89cef9c70189cf10be7d06be").width();
		var win_height = $("#2c908c1d89cef9c70189cf10be7d06be").height();
		$('#2c908c1d89cef9c70189cf10be7d06be').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d89cef9c70189cf10be7d06be').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d89cef9c70189cf10be7d06be").width();
	setTimeout(function(){redraw2c908c1d89cef9c70189cf10be7d06be(win_width);},500);
});
var tablecc1d3123e0feb64706383d3b0eecf01fcec1KeyWordIn = "";    
var tablecc1d3123e0feb64706383d3b0eecf01fcec1ParamIn = "";    
var tablecc1d3123e0feb64706383d3b0eecf01fcec1SelectRow = {     
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1LoadComplete = {     
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1BeforeEditCell = {        
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1OndblClickRow = {     
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1OnRightClickRow = {     
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1GridComplete = {     
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1OnCellSelect = {     
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
var tablecc1d3123e0feb64706383d3b0eecf01fcec1LoadBeforeSend = {        
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
function tablecc1d3123e0feb64706383d3b0eecf01fcec1Reload(pid){
	var _isInvalid = true;
	$("#tablecc1d3123e0feb64706383d3b0eecf01fcec1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablecc1d3123e0feb64706383d3b0eecf01fcec1Pid = pid;
		}
		return false;
	}
	window.tablecc1d3123e0feb64706383d3b0eecf01fcec1Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablecc1d3123e0feb64706383d3b0eecf01fcec1Reload();
};
function tablecc1d3123e0feb64706383d3b0eecf01fcec1TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablecc1d3123e0feb64706383d3b0eecf01fcec1Pid == 'undefined' || window.tablecc1d3123e0feb64706383d3b0eecf01fcec1Pid!=null){
tablecc1d3123e0feb64706383d3b0eecf01fcec1Reload(window.tablecc1d3123e0feb64706383d3b0eecf01fcec1Pid);
}
}
var tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1 = [];
var uniqueColtablecc1d3123e0feb64706383d3b0eecf01fcec1 = [];
var uniqueColTitletablecc1d3123e0feb64706383d3b0eecf01fcec1 = [];
var defaultValuetablecc1d3123e0feb64706383d3b0eecf01fcec1 = {};
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ label: '单位',hidden:true, name: 'DEMOCRACY_DEPT',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ label: '单位',hidden:false, name: 'DEMOCRACY_DEPTName',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ label: '主管公司领导是否参加',hidden:true, name: 'LEAD_JOIN',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ label: '主管公司领导是否参加',hidden:false, name: 'LEAD_JOINName',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ label: '公司领导姓名',hidden:true, name: 'LEAD_NAME',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ label: '公司领导姓名',hidden:false, name: 'LEAD_NAMEName',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '召开日期报送', formatter:format, hidden:false, name: 'DEMOCRACY_DATE',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '会后材料报送', formatter:format, hidden:false, name: 'DEMOCRACY_END_DATE',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn524fe2c0c0594b4108f826b61718a919de4a',align:'left',  width: '150px'});	var searchNamestablecc1d3123e0feb64706383d3b0eecf01fcec1 = []; 
searchNamestablecc1d3123e0feb64706383d3b0eecf01fcec1.push('DEMOCRACY_DEPT');
$('#keyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1').attr('placeholder', '请输入单位查询');
function searchDataKeyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1(){
	var keyWord = $.trim($("#keyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1").val()); 
 if($('#keyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablecc1d3123e0feb64706383d3b0eecf01fcec1.length;i++){ 
		var name = searchNamestablecc1d3123e0feb64706383d3b0eecf01fcec1[i]; 
		param[name] = keyWord; 
	} 
if ($("#tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect").length>0){param.bpmState=$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablecc1d3123e0feb64706383d3b0eecf01fcec1KeyWordIn=JSON.stringify(param);
tablecc1d3123e0feb64706383d3b0eecf01fcec1ParamIn="";
	$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1();
	}
});
$('#keyWordBttablecc1d3123e0feb64706383d3b0eecf01fcec1').bind('click', function() {
		searchDataKeyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1();
});
function tablecc1d3123e0feb64706383d3b0eecf01fcec1initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton654d3a13915bc946e0dbb5da04a93e983565").css('display','inline-block');
}else{
$("#tableToolbarButton654d3a13915bc946e0dbb5da04a93e983565").hide();
}
tablecc1d3123e0feb64706383d3b0eecf01fcec1searchWF();
}
function tablecc1d3123e0feb64706383d3b0eecf01fcec1searchWF(){
   if ($("#searchformtablecc1d3123e0feb64706383d3b0eecf01fcec1").length>0){
      var para = serializeObject($("#searchformtablecc1d3123e0feb64706383d3b0eecf01fcec1"));
      para.bpmState = $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tablecc1d3123e0feb64706383d3b0eecf01fcec1GridComplete.addEvent(function(){$("#tableToolbarButtonce114f7faff66e49ce8824eeab2eed79d11f").css("display","")});
$("#tablecc1d3123e0feb64706383d3b0eecf01fcec1").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d89cef9c70189cf10be7d06be/tablecc1d3123e0feb64706383d3b0eecf01fcec1/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablecc1d3123e0feb64706383d3b0eecf01fcec1,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablecc1d3123e0feb64706383d3b0eecf01fcec1SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablecc1d3123e0feb64706383d3b0eecf01fcec1LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablecc1d3123e0feb64706383d3b0eecf01fcec1OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablecc1d3123e0feb64706383d3b0eecf01fcec1OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablecc1d3123e0feb64706383d3b0eecf01fcec1GridComplete.exec();
				    setTimeout(function(){var height = $("#tablecc1d3123e0feb64706383d3b0eecf01fcec1").closest('.ui-jqgrid-bdiv').height();
					$("#tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords img").css("width","120px");
                 }else{
					    $("#tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablecc1d3123e0feb64706383d3b0eecf01fcec1BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablecc1d3123e0feb64706383d3b0eecf01fcec1OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords").hide();
		   	    $("#Pagertablecc1d3123e0feb64706383d3b0eecf01fcec1_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablecc1d3123e0feb64706383d3b0eecf01fcec1").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablecc1d3123e0feb64706383d3b0eecf01fcec1").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords").html() == null) {
						$("#tablecc1d3123e0feb64706383d3b0eecf01fcec1").parent().append("<div class='no_data' id='tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablecc1d3123e0feb64706383d3b0eecf01fcec1norecords").show();
					$("#Pagertablecc1d3123e0feb64706383d3b0eecf01fcec1_left").css("display", "none");
				}
tablecc1d3123e0feb64706383d3b0eecf01fcec1LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablecc1d3123e0feb64706383d3b0eecf01fcec1"
    });
tablecc1d3123e0feb64706383d3b0eecf01fcec1Reload();
$("#t_tablecc1d3123e0feb64706383d3b0eecf01fcec1").append($("#tableToolbartablecc1d3123e0feb64706383d3b0eecf01fcec1"));$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect').bind('change',function(){
tablecc1d3123e0feb64706383d3b0eecf01fcec1initWorkFlow($(this).val());
});
function searchDatatablecc1d3123e0feb64706383d3b0eecf01fcec1(){
 var para = serializeObjectForEform($("#searchformtablecc1d3123e0feb64706383d3b0eecf01fcec1"));
 para.bpmState = $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablecc1d3123e0feb64706383d3b0eecf01fcec1KeyWordIn="";
tablecc1d3123e0feb64706383d3b0eecf01fcec1ParamIn=JSON.stringify(para);
	$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablecc1d3123e0feb64706383d3b0eecf01fcec1").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablecc1d3123e0feb64706383d3b0eecf01fcec1').bind('click',function(){
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
'450px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtablecc1d3123e0feb64706383d3b0eecf01fcec1'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablecc1d3123e0feb64706383d3b0eecf01fcec1(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablecc1d3123e0feb64706383d3b0eecf01fcec1")); searchDatatablecc1d3123e0feb64706383d3b0eecf01fcec1(); layer.close(index); return false;
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
$('#DEMOCRACY_DEPTAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'DEMOCRACY_DEPT',textFiled:'DEMOCRACY_DEPTAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#LEAD_NAMEAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'LEAD_NAME',textFiled:'LEAD_NAMEAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#DEMOCRACY_DATE_START_button').click(function(e){
			$('#DEMOCRACY_DATE_START').datepicker('show');
			$('#DEMOCRACY_DATE_START').datepicker().trigger('click');
}); 
$('#DEMOCRACY_DATE_END_button').click(function(e){
			$('#DEMOCRACY_DATE_END').datepicker('show');
			$('#DEMOCRACY_DATE_END').datepicker().trigger('click');
}); 
$('#DEMOCRACY_END_DATE_START_button').click(function(e){
			$('#DEMOCRACY_END_DATE_START').datepicker('show');
			$('#DEMOCRACY_END_DATE_START').datepicker().trigger('click');
}); 
$('#DEMOCRACY_END_DATE_END_button').click(function(e){
			$('#DEMOCRACY_END_DATE_END').datepicker('show');
			$('#DEMOCRACY_END_DATE_END').datepicker().trigger('click');
}); 
$("#tableToolbarButtonfb469ee7c1cd4348cd298c80df17f01defbd").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d89cef9c70189cf069a91068e&grid=tablecc1d3123e0feb64706383d3b0eecf01fcec1'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonde59ac34c855d14ae18857a4654d9dd27c88").bind('click',function(event){var bpmsDeleteRows = $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('getGridParam', 'selarrrow');
if(bpmsDeleteRows .length == 0){
layer.alert('请选择！' , {									    
							icon: 7,															
							area: ['400px', ''],												
							closeBtn: 0         												
						});
return;
}
var url="avicit/lc/youth/dynDemocracy/dynDemocracyController/createWord"
var json =bpmsDeleteRows .join(',');
$("<form action='"+url+"' method = 'post' style = 'display:none'><input name='json' value='"+json+"' /></form>").appendTo('body').submit().remove();});
$("#tableToolbarButton654d3a13915bc946e0dbb5da04a93e983565").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DEMOCRACY&isbpm=Y&dbid=2c908c1d89cef9c70189cefbf3b70646', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d89cef9c70189cf10be7d06be',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton654d3a13915bc946e0dbb5da04a93e983565").hide();
;});	 
