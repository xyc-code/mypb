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

function redraw948e83e38fa41ec6018fb892489d7fcd(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38fa41ec6018fb892489d7fcd").width();
		var win_height = $("#948e83e38fa41ec6018fb892489d7fcd").height();
		$('#948e83e38fa41ec6018fb892489d7fcd').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38fa41ec6018fb892489d7fcd').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38fa41ec6018fb892489d7fcd").width();
	setTimeout(function(){redraw948e83e38fa41ec6018fb892489d7fcd(win_width);},500);
});
var table7077d3eabc4fd8491398da9acde32dff1b97KeyWordIn = "";    
var table7077d3eabc4fd8491398da9acde32dff1b97ParamIn = "";    
var table7077d3eabc4fd8491398da9acde32dff1b97SelectRow = {     
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
var table7077d3eabc4fd8491398da9acde32dff1b97LoadComplete = {     
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
var table7077d3eabc4fd8491398da9acde32dff1b97BeforeEditCell = {        
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
var table7077d3eabc4fd8491398da9acde32dff1b97OndblClickRow = {     
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
var table7077d3eabc4fd8491398da9acde32dff1b97OnRightClickRow = {     
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
var table7077d3eabc4fd8491398da9acde32dff1b97GridComplete = {     
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
var table7077d3eabc4fd8491398da9acde32dff1b97OnCellSelect = {     
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
var table7077d3eabc4fd8491398da9acde32dff1b97LoadBeforeSend = {        
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
function table7077d3eabc4fd8491398da9acde32dff1b97Reload(pid){
	var _isInvalid = true;
	$("#table7077d3eabc4fd8491398da9acde32dff1b97").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table7077d3eabc4fd8491398da9acde32dff1b97Pid = pid;
		}
		return false;
	}
	window.table7077d3eabc4fd8491398da9acde32dff1b97Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table7077d3eabc4fd8491398da9acde32dff1b97Reload();
};
function table7077d3eabc4fd8491398da9acde32dff1b97TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table7077d3eabc4fd8491398da9acde32dff1b97Pid == 'undefined' || window.table7077d3eabc4fd8491398da9acde32dff1b97Pid!=null){
table7077d3eabc4fd8491398da9acde32dff1b97Reload(window.table7077d3eabc4fd8491398da9acde32dff1b97Pid);
}
}
var tablecmtable7077d3eabc4fd8491398da9acde32dff1b97 = [];
var uniqueColtable7077d3eabc4fd8491398da9acde32dff1b97 = [];
var uniqueColTitletable7077d3eabc4fd8491398da9acde32dff1b97 = [];
var defaultValuetable7077d3eabc4fd8491398da9acde32dff1b97 = {};
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '申请日期',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '申请单位',hidden:false, name: 'DRAF_UNIT',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '申请人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '表单编号',hidden:false, name: 'FORM_CODE',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '联系方式',hidden:false, name: 'DRAF_USER_TEL',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '资产编号',hidden:false, name: 'ZC_CODE',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '固定资产名称',hidden:false, name: 'ZC_NAME',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({ label: '固定资产类别',hidden:true, name: 'ZC_TYPE',align:'center',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({ label: '固定资产类别',hidden:false, name: 'ZC_TYPEName',align:'center',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '固定资产型号',hidden:false, name: 'ZC_MODE',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '购入时间', formatter:format, hidden:false, name: 'GR_TIME',align:'center',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '原值',hidden:false, name: 'Y_MONEY',align:'right',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '现值',hidden:false, name: 'X_MONEY',align:'right',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '单位',hidden:false, name: 'UNIT',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '折旧年限',hidden:false, name: 'ZJNX',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '数量',hidden:false, name: 'NUM',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '管理人',hidden:false, name: 'ZC_MANAGER_USER',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '资产管理单位',hidden:false, name: 'ZC_UNIT',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '资产存放地点',hidden:false, name: 'ZC_ADDRESS',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '资产图片信息',hidden:false, name: 'ZC_IMAGE_INFO',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '资产主键id',hidden:false, name: 'FCK_GDZC_ID',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable7077d3eabc4fd8491398da9acde32dff1b97.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable7077d3eabc4fd8491398da9acde32dff1b97 = []; 
searchNamestable7077d3eabc4fd8491398da9acde32dff1b97.push('FORM_CODE');
searchNamestable7077d3eabc4fd8491398da9acde32dff1b97.push('ZC_CODE');
searchNamestable7077d3eabc4fd8491398da9acde32dff1b97.push('ZC_NAME');
$('#keyWordtable7077d3eabc4fd8491398da9acde32dff1b97').attr('placeholder', '请输入表单编号、资产编号、固定资产名称查询');
function searchDataKeyWordtable7077d3eabc4fd8491398da9acde32dff1b97(){
	var keyWord = $.trim($("#keyWordtable7077d3eabc4fd8491398da9acde32dff1b97").val()); 
 if($('#keyWordtable7077d3eabc4fd8491398da9acde32dff1b97').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable7077d3eabc4fd8491398da9acde32dff1b97.length;i++){ 
		var name = searchNamestable7077d3eabc4fd8491398da9acde32dff1b97[i]; 
		param[name] = keyWord; 
	} 
if ($("#table7077d3eabc4fd8491398da9acde32dff1b97workFlowSelect").length>0){param.bpmState=$('#table7077d3eabc4fd8491398da9acde32dff1b97workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table7077d3eabc4fd8491398da9acde32dff1b97KeyWordIn=JSON.stringify(param);
table7077d3eabc4fd8491398da9acde32dff1b97ParamIn="";
	$('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable7077d3eabc4fd8491398da9acde32dff1b97').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable7077d3eabc4fd8491398da9acde32dff1b97();
	}
});
$('#keyWordBttable7077d3eabc4fd8491398da9acde32dff1b97').bind('click', function() {
		searchDataKeyWordtable7077d3eabc4fd8491398da9acde32dff1b97();
});
function table7077d3eabc4fd8491398da9acde32dff1b97initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton8ce5dded6c0bb940b22879257e82b277051e").css('display','inline-block');
}else{
$("#tableToolbarButton8ce5dded6c0bb940b22879257e82b277051e").hide();
}
table7077d3eabc4fd8491398da9acde32dff1b97searchWF();
}
function table7077d3eabc4fd8491398da9acde32dff1b97searchWF(){
   if ($("#searchformtable7077d3eabc4fd8491398da9acde32dff1b97").length>0){
      var para = serializeObject($("#searchformtable7077d3eabc4fd8491398da9acde32dff1b97"));
      para.bpmState = $('#table7077d3eabc4fd8491398da9acde32dff1b97workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table7077d3eabc4fd8491398da9acde32dff1b97workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table7077d3eabc4fd8491398da9acde32dff1b97").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38fa41ec6018fb892489d7fcd/table7077d3eabc4fd8491398da9acde32dff1b97/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable7077d3eabc4fd8491398da9acde32dff1b97,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table7077d3eabc4fd8491398da9acde32dff1b97SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table7077d3eabc4fd8491398da9acde32dff1b97LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table7077d3eabc4fd8491398da9acde32dff1b97OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table7077d3eabc4fd8491398da9acde32dff1b97OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table7077d3eabc4fd8491398da9acde32dff1b97GridComplete.exec();
				    setTimeout(function(){var height = $("#table7077d3eabc4fd8491398da9acde32dff1b97").closest('.ui-jqgrid-bdiv').height();
					$("#table7077d3eabc4fd8491398da9acde32dff1b97norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table7077d3eabc4fd8491398da9acde32dff1b97norecords img").css("width","120px");
                 }else{
					    $("#table7077d3eabc4fd8491398da9acde32dff1b97norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table7077d3eabc4fd8491398da9acde32dff1b97BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table7077d3eabc4fd8491398da9acde32dff1b97OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table7077d3eabc4fd8491398da9acde32dff1b97norecords").hide();
		   	    $("#Pagertable7077d3eabc4fd8491398da9acde32dff1b97_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table7077d3eabc4fd8491398da9acde32dff1b97").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table7077d3eabc4fd8491398da9acde32dff1b97").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table7077d3eabc4fd8491398da9acde32dff1b97norecords").html() == null) {
						$("#table7077d3eabc4fd8491398da9acde32dff1b97").parent().append("<div class='no_data' id='table7077d3eabc4fd8491398da9acde32dff1b97norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table7077d3eabc4fd8491398da9acde32dff1b97norecords").show();
					$("#Pagertable7077d3eabc4fd8491398da9acde32dff1b97_left").css("display", "none");
				}
table7077d3eabc4fd8491398da9acde32dff1b97LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable7077d3eabc4fd8491398da9acde32dff1b97"
    });
table7077d3eabc4fd8491398da9acde32dff1b97Reload();
$("#t_table7077d3eabc4fd8491398da9acde32dff1b97").append($("#tableToolbartable7077d3eabc4fd8491398da9acde32dff1b97"));function searchDatatable7077d3eabc4fd8491398da9acde32dff1b97(){
 var para = serializeObjectForEform($("#searchformtable7077d3eabc4fd8491398da9acde32dff1b97"));
 para.bpmState = $('#table7077d3eabc4fd8491398da9acde32dff1b97workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table7077d3eabc4fd8491398da9acde32dff1b97KeyWordIn="";
table7077d3eabc4fd8491398da9acde32dff1b97ParamIn=JSON.stringify(para);
	$('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable7077d3eabc4fd8491398da9acde32dff1b97").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable7077d3eabc4fd8491398da9acde32dff1b97').bind('click',function(){
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
	content: $('#searchDialogtable7077d3eabc4fd8491398da9acde32dff1b97'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable7077d3eabc4fd8491398da9acde32dff1b97(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable7077d3eabc4fd8491398da9acde32dff1b97")); searchDatatable7077d3eabc4fd8491398da9acde32dff1b97(); layer.close(index); return false;
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
$('#table7077d3eabc4fd8491398da9acde32dff1b97workFlowSelect').bind('change',function(){
table7077d3eabc4fd8491398da9acde32dff1b97initWorkFlow($(this).val());
});
$("#tableToolbarButtonf7e78420c0595142250b2fe44b28f9e670c2").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fa49264df1995&grid=table7077d3eabc4fd8491398da9acde32dff1b97'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton8ce5dded6c0bb940b22879257e82b277051e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table7077d3eabc4fd8491398da9acde32dff1b97').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGDZCLY&isbpm=Y&dbid=948e83e38fa41ec6018fa4a85cf1269f', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38fa41ec6018fb892489d7fcd',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table7077d3eabc4fd8491398da9acde32dff1b97').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton8ce5dded6c0bb940b22879257e82b277051e").hide();
;});	 
