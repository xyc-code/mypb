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

function redraw2c908c1d8e78612f018e78d660970db6(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8e78612f018e78d660970db6").width();
		var win_height = $("#2c908c1d8e78612f018e78d660970db6").height();
		$('#2c908c1d8e78612f018e78d660970db6').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8e78612f018e78d660970db6').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8e78612f018e78d660970db6").width();
	setTimeout(function(){redraw2c908c1d8e78612f018e78d660970db6(win_width);},500);
});
var tablef842434c6be7824e4308ce7ac5de451be903KeyWordIn = "";    
var tablef842434c6be7824e4308ce7ac5de451be903ParamIn = "";    
var tablef842434c6be7824e4308ce7ac5de451be903SelectRow = {     
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
var tablef842434c6be7824e4308ce7ac5de451be903LoadComplete = {     
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
var tablef842434c6be7824e4308ce7ac5de451be903BeforeEditCell = {        
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
var tablef842434c6be7824e4308ce7ac5de451be903OndblClickRow = {     
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
var tablef842434c6be7824e4308ce7ac5de451be903OnRightClickRow = {     
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
var tablef842434c6be7824e4308ce7ac5de451be903GridComplete = {     
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
var tablef842434c6be7824e4308ce7ac5de451be903OnCellSelect = {     
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
var tablef842434c6be7824e4308ce7ac5de451be903LoadBeforeSend = {        
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
function tablef842434c6be7824e4308ce7ac5de451be903Reload(pid){
	var _isInvalid = true;
	$("#tablef842434c6be7824e4308ce7ac5de451be903").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef842434c6be7824e4308ce7ac5de451be903Pid = pid;
		}
		return false;
	}
	window.tablef842434c6be7824e4308ce7ac5de451be903Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablef842434c6be7824e4308ce7ac5de451be903Reload();
};
function tablef842434c6be7824e4308ce7ac5de451be903TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef842434c6be7824e4308ce7ac5de451be903Pid == 'undefined' || window.tablef842434c6be7824e4308ce7ac5de451be903Pid!=null){
tablef842434c6be7824e4308ce7ac5de451be903Reload(window.tablef842434c6be7824e4308ce7ac5de451be903Pid);
}
}
var tablecmtablef842434c6be7824e4308ce7ac5de451be903 = [];
var uniqueColtablef842434c6be7824e4308ce7ac5de451be903 = [];
var uniqueColTitletablef842434c6be7824e4308ce7ac5de451be903 = [];
var defaultValuetablef842434c6be7824e4308ce7ac5de451be903 = {};
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '发起日期', formatter:format, hidden:false, name: 'FQ_CREA_TIME',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '表单编号',hidden:false, name: 'FQ_FROM_NO',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '发起人',hidden:false, name: 'FQ_USER',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '发起人联系方式',hidden:false, name: 'FQ_TEL',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '党组织名称',hidden:false, name: 'FQ_PARTY_NAME',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '标题',hidden:false, name: 'FQ_TITLE',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '活动开展时间起', formatter:format, hidden:false, name: 'FQ_HDKZ_DATE_BEGIN',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '活动开展时间止', formatter:format, hidden:false, name: 'FQ_HDKZ_DATE_END',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '发送党组织',hidden:false, name: 'FQ_PARTY_ORG',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '先锋岗评选时间段',hidden:false, name: 'FQ_PXSJ',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn35818e1cba0850468368d82e0ea0f649810e',align:'left',  width: '150px'});tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:true, name: 'flowdetail',align:'left',  width: '150px'});tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR14',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR15',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR16',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR17',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR18',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR19',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR20',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '党组织类型',hidden:true, name: 'FQ_PARTY_TYPE',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '时间节点起', formatter:format, hidden:true, name: 'FQ_CRER_DATE_BEGIN',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '时间节点至', formatter:format, hidden:true, name: 'FQ_CRER_DATE_END',align:'center',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtablef842434c6be7824e4308ce7ac5de451be903.push({label: '预留字段',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
	var searchNamestablef842434c6be7824e4308ce7ac5de451be903 = []; 
searchNamestablef842434c6be7824e4308ce7ac5de451be903.push('FQ_USER');
$('#keyWordtablef842434c6be7824e4308ce7ac5de451be903').attr('placeholder', '请输入发起人查询');
function searchDataKeyWordtablef842434c6be7824e4308ce7ac5de451be903(){
	var keyWord = $.trim($("#keyWordtablef842434c6be7824e4308ce7ac5de451be903").val()); 
 if($('#keyWordtablef842434c6be7824e4308ce7ac5de451be903').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablef842434c6be7824e4308ce7ac5de451be903.length;i++){ 
		var name = searchNamestablef842434c6be7824e4308ce7ac5de451be903[i]; 
		param[name] = keyWord; 
	} 
if ($("#tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect").length>0){param.bpmState=$('#tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablef842434c6be7824e4308ce7ac5de451be903KeyWordIn=JSON.stringify(param);
tablef842434c6be7824e4308ce7ac5de451be903ParamIn="";
	$('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablef842434c6be7824e4308ce7ac5de451be903').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablef842434c6be7824e4308ce7ac5de451be903();
	}
});
$('#keyWordBttablef842434c6be7824e4308ce7ac5de451be903').bind('click', function() {
		searchDataKeyWordtablef842434c6be7824e4308ce7ac5de451be903();
});
function tablef842434c6be7824e4308ce7ac5de451be903initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton64ca557ea2936c4a315927d03576edc0edcd").css('display','inline-block');
}else{
$("#tableToolbarButton64ca557ea2936c4a315927d03576edc0edcd").hide();
}
tablef842434c6be7824e4308ce7ac5de451be903searchWF();
}
function tablef842434c6be7824e4308ce7ac5de451be903searchWF(){
   if ($("#searchformtablef842434c6be7824e4308ce7ac5de451be903").length>0){
      var para = serializeObject($("#searchformtablef842434c6be7824e4308ce7ac5de451be903"));
      para.bpmState = $('#tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tablef842434c6be7824e4308ce7ac5de451be903SelectRow.addEvent(function(rowid,status){pageParams.urlParam.id=rowid;});
$("#tablef842434c6be7824e4308ce7ac5de451be903").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e78612f018e78d660970db6/tablef842434c6be7824e4308ce7ac5de451be903/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablef842434c6be7824e4308ce7ac5de451be903,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef842434c6be7824e4308ce7ac5de451be903SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef842434c6be7824e4308ce7ac5de451be903LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef842434c6be7824e4308ce7ac5de451be903OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef842434c6be7824e4308ce7ac5de451be903OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef842434c6be7824e4308ce7ac5de451be903GridComplete.exec();
				    setTimeout(function(){var height = $("#tablef842434c6be7824e4308ce7ac5de451be903").closest('.ui-jqgrid-bdiv').height();
					$("#tablef842434c6be7824e4308ce7ac5de451be903norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef842434c6be7824e4308ce7ac5de451be903norecords img").css("width","120px");
                 }else{
					    $("#tablef842434c6be7824e4308ce7ac5de451be903norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef842434c6be7824e4308ce7ac5de451be903BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef842434c6be7824e4308ce7ac5de451be903OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef842434c6be7824e4308ce7ac5de451be903norecords").hide();
		   	    $("#Pagertablef842434c6be7824e4308ce7ac5de451be903_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef842434c6be7824e4308ce7ac5de451be903").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef842434c6be7824e4308ce7ac5de451be903").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef842434c6be7824e4308ce7ac5de451be903norecords").html() == null) {
						$("#tablef842434c6be7824e4308ce7ac5de451be903").parent().append("<div class='no_data' id='tablef842434c6be7824e4308ce7ac5de451be903norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef842434c6be7824e4308ce7ac5de451be903norecords").show();
					$("#Pagertablef842434c6be7824e4308ce7ac5de451be903_left").css("display", "none");
				}
tablef842434c6be7824e4308ce7ac5de451be903LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef842434c6be7824e4308ce7ac5de451be903"
    });
tablef842434c6be7824e4308ce7ac5de451be903Reload();
$("#t_tablef842434c6be7824e4308ce7ac5de451be903").append($("#tableToolbartablef842434c6be7824e4308ce7ac5de451be903"));function searchDatatablef842434c6be7824e4308ce7ac5de451be903(){
 var para = serializeObjectForEform($("#searchformtablef842434c6be7824e4308ce7ac5de451be903"));
 para.bpmState = $('#tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablef842434c6be7824e4308ce7ac5de451be903KeyWordIn="";
tablef842434c6be7824e4308ce7ac5de451be903ParamIn=JSON.stringify(para);
	$('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablef842434c6be7824e4308ce7ac5de451be903").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablef842434c6be7824e4308ce7ac5de451be903').bind('click',function(){
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
	content: $('#searchDialogtablef842434c6be7824e4308ce7ac5de451be903'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablef842434c6be7824e4308ce7ac5de451be903(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablef842434c6be7824e4308ce7ac5de451be903")); searchDatatablef842434c6be7824e4308ce7ac5de451be903(); layer.close(index); return false;
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
$('#tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect').bind('change',function(){
tablef842434c6be7824e4308ce7ac5de451be903initWorkFlow($(this).val());
});
$("#tableToolbarButtone4abe39f03bd954d05f8f39d3ef06e2c5dcc").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8e78612f018e78794cee09d1&grid=tablef842434c6be7824e4308ce7ac5de451be903'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton64ca557ea2936c4a315927d03576edc0edcd").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_XFG_FQ&isbpm=Y&dbid=2c908c1d8e742381018e7447b5ae0a5a', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8e78612f018e78d660970db6',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablef842434c6be7824e4308ce7ac5de451be903').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton64ca557ea2936c4a315927d03576edc0edcd").hide();
$("#tableToolbarButton8e89099711396a4d98182ac85a5ab47efae1").bind('click',function(event){avicAjax.ajax({
 url : 'platform/api/avicit/pb/member/partyMember/rest1/insertList.json',
 data : {},
 type : 'POST',
 dataType : 'JSON',
 async : false,
 success : function(result) {

 }
 });});
$("#tableToolbarButtone77bf40f4af2b64db349cf9fd63f7681faf4").bind('click',function(event){avicAjax.ajax({
 url : 'platform/api/avicit/pb/member/partyMember/rest1/insert.json',
 data : {},
 type : 'POST',
 dataType : 'JSON',
 async : false,
 success : function(result) {

 }
 });});
;});	 
