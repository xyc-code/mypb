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

function redraw2c908c1d8a62d88d018a6319232c08e3(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8a62d88d018a6319232c08e3").width();
		var win_height = $("#2c908c1d8a62d88d018a6319232c08e3").height();
		$('#2c908c1d8a62d88d018a6319232c08e3').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8a62d88d018a6319232c08e3').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8a62d88d018a6319232c08e3").width();
	setTimeout(function(){redraw2c908c1d8a62d88d018a6319232c08e3(win_width);},500);
});
var table5c236e59576f4c431e285913ecaab2448a21KeyWordIn = "";    
var table5c236e59576f4c431e285913ecaab2448a21ParamIn = "";    
var table5c236e59576f4c431e285913ecaab2448a21SelectRow = {     
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
var table5c236e59576f4c431e285913ecaab2448a21LoadComplete = {     
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
var table5c236e59576f4c431e285913ecaab2448a21BeforeEditCell = {        
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
var table5c236e59576f4c431e285913ecaab2448a21OndblClickRow = {     
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
var table5c236e59576f4c431e285913ecaab2448a21OnRightClickRow = {     
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
var table5c236e59576f4c431e285913ecaab2448a21GridComplete = {     
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
var table5c236e59576f4c431e285913ecaab2448a21OnCellSelect = {     
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
var table5c236e59576f4c431e285913ecaab2448a21LoadBeforeSend = {        
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
function table5c236e59576f4c431e285913ecaab2448a21Reload(pid){
	var _isInvalid = true;
	$("#table5c236e59576f4c431e285913ecaab2448a21").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5c236e59576f4c431e285913ecaab2448a21Pid = pid;
		}
		return false;
	}
	window.table5c236e59576f4c431e285913ecaab2448a21Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5c236e59576f4c431e285913ecaab2448a21TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5c236e59576f4c431e285913ecaab2448a21Pid == 'undefined' || window.table5c236e59576f4c431e285913ecaab2448a21Pid!=null){
table5c236e59576f4c431e285913ecaab2448a21Reload(window.table5c236e59576f4c431e285913ecaab2448a21Pid);
}
}
var tablecmtable5c236e59576f4c431e285913ecaab2448a21 = [];
var uniqueColtable5c236e59576f4c431e285913ecaab2448a21 = [];
var uniqueColTitletable5c236e59576f4c431e285913ecaab2448a21 = [];
var defaultValuetable5c236e59576f4c431e285913ecaab2448a21 = {};
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '一级部门',hidden:true, name: 'DPET_ONT',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '一级部门',hidden:false, name: 'DPET_ONTName',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '部门名称',hidden:false, name: 'DEPT_ID',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '姓名',hidden:false, name: 'USER_IDName',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '出生日期', formatter:format, hidden:false, name: 'NEW_DATE',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '性别',hidden:true, name: 'SEX',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '性别',hidden:false, name: 'SEXName',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '身份证号码',hidden:false, name: 'ID_NUMBER',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '岗位名称',hidden:false, name: 'ORG_ID',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '第一学历',hidden:false, name: 'POTICALOA',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '最高学历',hidden:false, name: 'POTICALOA_END',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '身份',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '是否有效',hidden:true, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({ label: '是否有效',hidden:false, name: 'ATTR1Name',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段2',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段3',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段4',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段5',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段6',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段7',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段8',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段9',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段10',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段11',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段12',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '预留字段13',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5c236e59576f4c431e285913ecaab2448a21.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable5c236e59576f4c431e285913ecaab2448a21 = []; 
searchNamestable5c236e59576f4c431e285913ecaab2448a21.push('USER_ID');
$('#keyWordtable5c236e59576f4c431e285913ecaab2448a21').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtable5c236e59576f4c431e285913ecaab2448a21(){
	var keyWord = $.trim($("#keyWordtable5c236e59576f4c431e285913ecaab2448a21").val()); 
 if($('#keyWordtable5c236e59576f4c431e285913ecaab2448a21').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable5c236e59576f4c431e285913ecaab2448a21.length;i++){ 
		var name = searchNamestable5c236e59576f4c431e285913ecaab2448a21[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table5c236e59576f4c431e285913ecaab2448a21KeyWordIn=JSON.stringify(param);
table5c236e59576f4c431e285913ecaab2448a21ParamIn="";
	$('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable5c236e59576f4c431e285913ecaab2448a21').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable5c236e59576f4c431e285913ecaab2448a21();
	}
});
$('#keyWordBttable5c236e59576f4c431e285913ecaab2448a21').bind('click', function() {
		searchDataKeyWordtable5c236e59576f4c431e285913ecaab2448a21();
});
;$(document).ready(function(){ 

$("#table5c236e59576f4c431e285913ecaab2448a21").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8a62d88d018a6319232c08e3/table5c236e59576f4c431e285913ecaab2448a21/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5c236e59576f4c431e285913ecaab2448a21,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 2000],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5c236e59576f4c431e285913ecaab2448a21SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5c236e59576f4c431e285913ecaab2448a21LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5c236e59576f4c431e285913ecaab2448a21OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5c236e59576f4c431e285913ecaab2448a21OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5c236e59576f4c431e285913ecaab2448a21GridComplete.exec();
				    setTimeout(function(){var height = $("#table5c236e59576f4c431e285913ecaab2448a21").closest('.ui-jqgrid-bdiv').height();
					$("#table5c236e59576f4c431e285913ecaab2448a21norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5c236e59576f4c431e285913ecaab2448a21norecords img").css("width","120px");
                 }else{
					    $("#table5c236e59576f4c431e285913ecaab2448a21norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5c236e59576f4c431e285913ecaab2448a21BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5c236e59576f4c431e285913ecaab2448a21OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5c236e59576f4c431e285913ecaab2448a21norecords").hide();
		   	    $("#Pagertable5c236e59576f4c431e285913ecaab2448a21_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5c236e59576f4c431e285913ecaab2448a21").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5c236e59576f4c431e285913ecaab2448a21").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5c236e59576f4c431e285913ecaab2448a21norecords").html() == null) {
						$("#table5c236e59576f4c431e285913ecaab2448a21").parent().append("<div class='no_data' id='table5c236e59576f4c431e285913ecaab2448a21norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5c236e59576f4c431e285913ecaab2448a21norecords").show();
					$("#Pagertable5c236e59576f4c431e285913ecaab2448a21_left").css("display", "none");
				}
table5c236e59576f4c431e285913ecaab2448a21LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5c236e59576f4c431e285913ecaab2448a21"
    });
table5c236e59576f4c431e285913ecaab2448a21Reload();
$("#t_table5c236e59576f4c431e285913ecaab2448a21").append($("#tableToolbartable5c236e59576f4c431e285913ecaab2448a21"));function searchDatatable5c236e59576f4c431e285913ecaab2448a21(){
 var para = serializeObjectForEform($("#searchformtable5c236e59576f4c431e285913ecaab2448a21"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table5c236e59576f4c431e285913ecaab2448a21KeyWordIn="";
table5c236e59576f4c431e285913ecaab2448a21ParamIn=JSON.stringify(para);
	$('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable5c236e59576f4c431e285913ecaab2448a21").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable5c236e59576f4c431e285913ecaab2448a21').bind('click',function(){
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
'500px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtable5c236e59576f4c431e285913ecaab2448a21'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable5c236e59576f4c431e285913ecaab2448a21(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable5c236e59576f4c431e285913ecaab2448a21")); searchDatatable5c236e59576f4c431e285913ecaab2448a21(); layer.close(index); return false;
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
$('#DPET_ONTAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'DPET_ONT',textFiled:'DPET_ONTAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#USER_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'USER_ID',textFiled:'USER_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#NEW_DATE_START_button').click(function(e){
			$('#NEW_DATE_START').datepicker('show');
			$('#NEW_DATE_START').datepicker().trigger('click');
}); 
$('#NEW_DATE_END_button').click(function(e){
			$('#NEW_DATE_END').datepicker('show');
			$('#NEW_DATE_END').datepicker().trigger('click');
}); 
$("#tableToolbarButton8d1bdf7fd018e740dfb8ab921ec622f66b13").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8a62d88d018a6317243d0870&grid=table5c236e59576f4c431e285913ecaab2448a21',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton89c24dadee86fc499a083da2d49ec81b33e7").bind('click',function() {                                                                                       
	var ids = $('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8a62d88d018a6317243d0870&id=' + rowData.ID+'&grid=table5c236e59576f4c431e285913ecaab2448a21',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton805fc120d16d3147461910e8c2ea986b1347").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_YOUTH_INFO&isbpm=N&dbid=2c908c1d8a62d88d018a630f84f30828', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8a62d88d018a6319232c08e3',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5c236e59576f4c431e285913ecaab2448a21').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton38816e0cf8cbfb4713484a9b3603773d6a20").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'youthInfo', callBackFunc: function () {                           	
		$('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton959e400dd41e244afc98618d24f95adbb5da').bind('click',function() {                           
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
	        var colModels =$('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table5c236e59576f4c431e285913ecaab2448a21KeyWordIn;                          
	        expSearchParams.param = table5c236e59576f4c431e285913ecaab2448a21ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='青年信息表';                             
	        expSearchParams.viewid='2c908c1d8a62d88d018a6319232c08e3';                                   
	        expSearchParams.tableid='table5c236e59576f4c431e285913ecaab2448a21';                                 
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
