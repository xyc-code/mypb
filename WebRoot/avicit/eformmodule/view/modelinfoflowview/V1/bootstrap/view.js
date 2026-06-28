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
var params = {};
var searchString = window.location.search.substring(1).split('&');
if (window.location.href.split("?").length>1) {
	for (var i = 0; i < searchString.length; i++) {
		var param = searchString[i].split("=");
		params[param[0]] = param[1]
	}
	$(document).ready(function() {

		var time =setTimeout(function(){
		$('#searchAlltable6b17ebeb4d742949663a7b15588c53c03b98').click()
                $("#layui-layer1").css("display","none")
                $("#MODEL_LEVEL").val(params.name)               		
		$("#layui-layer1").css("display","")
		$(".layui-layer-btn0:eq(0)").click()
		$("#tableToolbarButton106fdeb69e718d4c5bc833ee05be9b726b3c").css('display',"none");
		$("#tableToolbarButtoncda5b0032bf1a44c41eafd33a733f8bedbeb").css('display',"none");
			clearTimeout(time)
	},3000)
		


	})
}
function redraw2c908c5a89dcf63b0189dd4eebf40cef(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a89dcf63b0189dd4eebf40cef").width();
		var win_height = $("#2c908c5a89dcf63b0189dd4eebf40cef").height();
		$('#2c908c5a89dcf63b0189dd4eebf40cef').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a89dcf63b0189dd4eebf40cef').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a89dcf63b0189dd4eebf40cef").width();
	setTimeout(function(){redraw2c908c5a89dcf63b0189dd4eebf40cef(win_width);},500);
});
var table6b17ebeb4d742949663a7b15588c53c03b98KeyWordIn = "";    
var table6b17ebeb4d742949663a7b15588c53c03b98ParamIn = "";    
var table6b17ebeb4d742949663a7b15588c53c03b98SelectRow = {     
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
var table6b17ebeb4d742949663a7b15588c53c03b98LoadComplete = {     
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
var table6b17ebeb4d742949663a7b15588c53c03b98BeforeEditCell = {        
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
var table6b17ebeb4d742949663a7b15588c53c03b98OndblClickRow = {     
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
var table6b17ebeb4d742949663a7b15588c53c03b98OnRightClickRow = {     
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
var table6b17ebeb4d742949663a7b15588c53c03b98GridComplete = {     
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
var table6b17ebeb4d742949663a7b15588c53c03b98OnCellSelect = {     
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
var table6b17ebeb4d742949663a7b15588c53c03b98LoadBeforeSend = {        
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
function table6b17ebeb4d742949663a7b15588c53c03b98Reload(pid){
	var _isInvalid = true;
	$("#table6b17ebeb4d742949663a7b15588c53c03b98").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6b17ebeb4d742949663a7b15588c53c03b98Pid = pid;
		}
		return false;
	}
	window.table6b17ebeb4d742949663a7b15588c53c03b98Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6b17ebeb4d742949663a7b15588c53c03b98').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table6b17ebeb4d742949663a7b15588c53c03b98Reload();
};
function table6b17ebeb4d742949663a7b15588c53c03b98TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6b17ebeb4d742949663a7b15588c53c03b98Pid == 'undefined' || window.table6b17ebeb4d742949663a7b15588c53c03b98Pid!=null){
table6b17ebeb4d742949663a7b15588c53c03b98Reload(window.table6b17ebeb4d742949663a7b15588c53c03b98Pid);
}
}
var tablecmtable6b17ebeb4d742949663a7b15588c53c03b98 = [];
var uniqueColtable6b17ebeb4d742949663a7b15588c53c03b98 = [];
var uniqueColTitletable6b17ebeb4d742949663a7b15588c53c03b98 = [];
var defaultValuetable6b17ebeb4d742949663a7b15588c53c03b98 = {};
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '申请单位ID',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '申请日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '申请人',hidden:false, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '申请人_ID',hidden:true, name: 'REQUEST_USER_ID',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '联系方式',hidden:false, name: 'TEL',align:'right',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '劳模姓名',hidden:false, name: 'MODEL_NAME',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '获奖年月', formatter:format, hidden:false, name: 'HONOR_DATE',align:'center',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({ label: '新增荣誉层级',hidden:true, name: 'MODEL_LEVEL',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({ label: '新增荣誉层级',hidden:false, name: 'MODEL_LEVELName',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '荣誉名称',hidden:false, name: 'HONOR_NAME',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '国家级荣誉',hidden:true, name: 'MODEL_COUNTRY',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '省部级荣誉',hidden:true, name: 'MODEL_ECONOMIZE',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '地市级荣誉',hidden:true, name: 'MODEL_CITY',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '公司级荣誉',hidden:true, name: 'MODEL_COMPANY',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '荣誉颁发文件名',hidden:false, name: 'HONOR_FILE_NAME',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '荣誉颁发机构',hidden:false, name: 'HONOR_ORGAN',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '劳模姓名ID',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '字段_2',hidden:true, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '字段_3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_5',hidden:true, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_6',hidden:true, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_7',hidden:true, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_8',hidden:true, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_9',hidden:true, name: 'DATA_9',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_10', formatter:format, hidden:true, name: 'DATA_10',align:'center',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: 'DATA_11',hidden:true, name: 'DATA_11',align:'right',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable6b17ebeb4d742949663a7b15588c53c03b98.push({ sortable:false,label: '详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn6a6a7e3fc2a70c476a781782d19cc3c14c23',align:'center',  width: '150px'});	var searchNamestable6b17ebeb4d742949663a7b15588c53c03b98 = []; 
searchNamestable6b17ebeb4d742949663a7b15588c53c03b98.push('MODEL_NAME');
$('#keyWordtable6b17ebeb4d742949663a7b15588c53c03b98').attr('placeholder', '请输入劳模姓名查询');
function searchDataKeyWordtable6b17ebeb4d742949663a7b15588c53c03b98(){
	var keyWord = $.trim($("#keyWordtable6b17ebeb4d742949663a7b15588c53c03b98").val()); 
 if($('#keyWordtable6b17ebeb4d742949663a7b15588c53c03b98').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable6b17ebeb4d742949663a7b15588c53c03b98.length;i++){ 
		var name = searchNamestable6b17ebeb4d742949663a7b15588c53c03b98[i]; 
		param[name] = keyWord; 
	} 
if ($("#table6b17ebeb4d742949663a7b15588c53c03b98workFlowSelect").length>0){param.bpmState=$('#table6b17ebeb4d742949663a7b15588c53c03b98workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table6b17ebeb4d742949663a7b15588c53c03b98KeyWordIn=JSON.stringify(param);
table6b17ebeb4d742949663a7b15588c53c03b98ParamIn="";
	$('#table6b17ebeb4d742949663a7b15588c53c03b98').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable6b17ebeb4d742949663a7b15588c53c03b98').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable6b17ebeb4d742949663a7b15588c53c03b98();
	}
});
$('#keyWordBttable6b17ebeb4d742949663a7b15588c53c03b98').bind('click', function() {
		searchDataKeyWordtable6b17ebeb4d742949663a7b15588c53c03b98();
});
;$(document).ready(function(){ 

$("#table6b17ebeb4d742949663a7b15588c53c03b98").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a89dcf63b0189dd4eebf40cef/table6b17ebeb4d742949663a7b15588c53c03b98/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6b17ebeb4d742949663a7b15588c53c03b98,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6b17ebeb4d742949663a7b15588c53c03b98SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6b17ebeb4d742949663a7b15588c53c03b98LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6b17ebeb4d742949663a7b15588c53c03b98OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6b17ebeb4d742949663a7b15588c53c03b98OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6b17ebeb4d742949663a7b15588c53c03b98GridComplete.exec();
				    setTimeout(function(){var height = $("#table6b17ebeb4d742949663a7b15588c53c03b98").closest('.ui-jqgrid-bdiv').height();
					$("#table6b17ebeb4d742949663a7b15588c53c03b98norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6b17ebeb4d742949663a7b15588c53c03b98norecords img").css("width","120px");
                 }else{
					    $("#table6b17ebeb4d742949663a7b15588c53c03b98norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6b17ebeb4d742949663a7b15588c53c03b98BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6b17ebeb4d742949663a7b15588c53c03b98OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6b17ebeb4d742949663a7b15588c53c03b98norecords").hide();
		   	    $("#Pagertable6b17ebeb4d742949663a7b15588c53c03b98_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6b17ebeb4d742949663a7b15588c53c03b98").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6b17ebeb4d742949663a7b15588c53c03b98").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6b17ebeb4d742949663a7b15588c53c03b98norecords").html() == null) {
						$("#table6b17ebeb4d742949663a7b15588c53c03b98").parent().append("<div class='no_data' id='table6b17ebeb4d742949663a7b15588c53c03b98norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6b17ebeb4d742949663a7b15588c53c03b98norecords").show();
					$("#Pagertable6b17ebeb4d742949663a7b15588c53c03b98_left").css("display", "none");
				}
table6b17ebeb4d742949663a7b15588c53c03b98LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6b17ebeb4d742949663a7b15588c53c03b98"
    });
table6b17ebeb4d742949663a7b15588c53c03b98Reload();
$("#t_table6b17ebeb4d742949663a7b15588c53c03b98").append($("#tableToolbartable6b17ebeb4d742949663a7b15588c53c03b98"));function searchDatatable6b17ebeb4d742949663a7b15588c53c03b98(){
 var para = serializeObjectForEform($("#searchformtable6b17ebeb4d742949663a7b15588c53c03b98"));
 para.bpmState = $('#table6b17ebeb4d742949663a7b15588c53c03b98workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table6b17ebeb4d742949663a7b15588c53c03b98KeyWordIn="";
table6b17ebeb4d742949663a7b15588c53c03b98ParamIn=JSON.stringify(para);
	$('#table6b17ebeb4d742949663a7b15588c53c03b98').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable6b17ebeb4d742949663a7b15588c53c03b98").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable6b17ebeb4d742949663a7b15588c53c03b98').bind('click',function(){
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
	content: $('#searchDialogtable6b17ebeb4d742949663a7b15588c53c03b98'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable6b17ebeb4d742949663a7b15588c53c03b98(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable6b17ebeb4d742949663a7b15588c53c03b98")); searchDatatable6b17ebeb4d742949663a7b15588c53c03b98(); layer.close(index); return false;
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
$("#tableToolbarButton106fdeb69e718d4c5bc833ee05be9b726b3c").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a89dcf63b0189dd0055a00641&grid=table6b17ebeb4d742949663a7b15588c53c03b98'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtoncda5b0032bf1a44c41eafd33a733f8bedbeb").bind('click',function(event){layer.open({
	    type: 2,
	   	   area: ['100%', '100%'],
	    title: '统计分析图',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: true, //开启最大化最小化按钮
	    content: 'avicit/tu/dyntumodelworkerf/ModelInfo.jsp'
	});});

$('#tableToolbarButton6d158d36df4d0e453ae86b06d524ab3b242a').bind('click',function() {                           
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
	        var colModels =$('#table6b17ebeb4d742949663a7b15588c53c03b98').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table6b17ebeb4d742949663a7b15588c53c03b98KeyWordIn;                          
	        expSearchParams.param = table6b17ebeb4d742949663a7b15588c53c03b98ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会劳模流程表';                             
	        expSearchParams.viewid='2c908c5a89dcf63b0189dd4eebf40cef';                                   
	        expSearchParams.tableid='table6b17ebeb4d742949663a7b15588c53c03b98';                                 
	        expSearchParams.isbpm='Y';                                     
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
