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

function redraw948e83e3881da2180188279818216cf7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3881da2180188279818216cf7").width();
		var win_height = $("#948e83e3881da2180188279818216cf7").height();
		$('#948e83e3881da2180188279818216cf7').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3881da2180188279818216cf7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3881da2180188279818216cf7").width();
	setTimeout(function(){redraw948e83e3881da2180188279818216cf7(win_width);},500);
});
var table1eb9e2287549134f1169dc2d101b6595f007KeyWordIn = "";    
var table1eb9e2287549134f1169dc2d101b6595f007ParamIn = "";    
var table1eb9e2287549134f1169dc2d101b6595f007SelectRow = {     
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
var table1eb9e2287549134f1169dc2d101b6595f007LoadComplete = {     
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
var table1eb9e2287549134f1169dc2d101b6595f007BeforeEditCell = {        
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
var table1eb9e2287549134f1169dc2d101b6595f007OndblClickRow = {     
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
var table1eb9e2287549134f1169dc2d101b6595f007OnRightClickRow = {     
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
var table1eb9e2287549134f1169dc2d101b6595f007GridComplete = {     
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
var table1eb9e2287549134f1169dc2d101b6595f007OnCellSelect = {     
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
var table1eb9e2287549134f1169dc2d101b6595f007LoadBeforeSend = {        
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
function table1eb9e2287549134f1169dc2d101b6595f007Reload(pid){
	var _isInvalid = true;
	$("#table1eb9e2287549134f1169dc2d101b6595f007").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1eb9e2287549134f1169dc2d101b6595f007Pid = pid;
		}
		return false;
	}
	window.table1eb9e2287549134f1169dc2d101b6595f007Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table1eb9e2287549134f1169dc2d101b6595f007Reload();
};
function table1eb9e2287549134f1169dc2d101b6595f007TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1eb9e2287549134f1169dc2d101b6595f007Pid == 'undefined' || window.table1eb9e2287549134f1169dc2d101b6595f007Pid!=null){
table1eb9e2287549134f1169dc2d101b6595f007Reload(window.table1eb9e2287549134f1169dc2d101b6595f007Pid);
}
}
var tablecmtable1eb9e2287549134f1169dc2d101b6595f007 = [];
var uniqueColtable1eb9e2287549134f1169dc2d101b6595f007 = [];
var uniqueColTitletable1eb9e2287549134f1169dc2d101b6595f007 = [];
var defaultValuetable1eb9e2287549134f1169dc2d101b6595f007 = {};
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '申请编号',hidden:false, name: 'FIVE_NO',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ label: '申请人姓名',hidden:true, name: 'FIVE_NAME',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ label: '申请人姓名',hidden:false, name: 'FIVE_NAMEName',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '提出人姓名', formatter:function(cellvalue, options, rowObject){return fomrt(cellvalue, options, rowObject);}, hidden:false, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '提出人部门', formatter:function(cellvalue, options, rowObject){return fomrtDept(cellvalue, options, rowObject);}, hidden:false, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '提出人职务', formatter:function(cellvalue, options, rowObject){return fomrtTask(cellvalue, options, rowObject);}, hidden:false, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ label: '单位',hidden:true, name: 'FIVE_DEPT',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ label: '单位',hidden:false, name: 'FIVE_DEPTName',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '年龄',hidden:true, name: 'FVIE_AGE',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '职位',hidden:true, name: 'FIVE_POSITION',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '提出时间', formatter:format, hidden:false, name: 'FIVE_DATE',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '问题描述',hidden:true, name: 'FIVE_PROBLEM',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '改善措施',hidden:true, name: 'FIVE_MEASURES',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '改善效果',hidden:false, name: 'FIVE_EFFECT',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '应用前景',hidden:false, name: 'FIVE_PROSPECTS',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '申报补充',hidden:true, name: 'FIVE_DECLARATIONS',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ label: '联系人姓名',hidden:true, name: 'POSEN_NAME',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ label: '联系人姓名',hidden:false, name: 'POSEN_NAMEName',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '联系人电话',hidden:false, name: 'POSEN_TEL',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '评选情况',hidden:false, name: 'FIVE_SITUATION',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR16',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR15',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR14',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段',hidden:true, name: 'ATTR17',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR18',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR19',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR20',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ sortable:false,label: '流程运转', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable1eb9e2287549134f1169dc2d101b6595f007.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn06444aafe8713445d9aa0c3f7d1e5d84b609',align:'left',  width: '150px'});	var searchNamestable1eb9e2287549134f1169dc2d101b6595f007 = []; 
searchNamestable1eb9e2287549134f1169dc2d101b6595f007.push('FIVE_NO');
$('#keyWordtable1eb9e2287549134f1169dc2d101b6595f007').attr('placeholder', '请输入申请编号查询');
function searchDataKeyWordtable1eb9e2287549134f1169dc2d101b6595f007(){
	var keyWord = $.trim($("#keyWordtable1eb9e2287549134f1169dc2d101b6595f007").val()); 
 if($('#keyWordtable1eb9e2287549134f1169dc2d101b6595f007').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable1eb9e2287549134f1169dc2d101b6595f007.length;i++){ 
		var name = searchNamestable1eb9e2287549134f1169dc2d101b6595f007[i]; 
		param[name] = keyWord; 
	} 
if ($("#table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect").length>0){param.bpmState=$('#table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table1eb9e2287549134f1169dc2d101b6595f007KeyWordIn=JSON.stringify(param);
table1eb9e2287549134f1169dc2d101b6595f007ParamIn="";
	$('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable1eb9e2287549134f1169dc2d101b6595f007').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable1eb9e2287549134f1169dc2d101b6595f007();
	}
});
$('#keyWordBttable1eb9e2287549134f1169dc2d101b6595f007').bind('click', function() {
		searchDataKeyWordtable1eb9e2287549134f1169dc2d101b6595f007();
});
function table1eb9e2287549134f1169dc2d101b6595f007initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtoncfe571d212196a475e7affdbc96b95e14e93").css('display','inline-block');
}else{
$("#tableToolbarButtoncfe571d212196a475e7affdbc96b95e14e93").hide();
}
table1eb9e2287549134f1169dc2d101b6595f007searchWF();
}
function table1eb9e2287549134f1169dc2d101b6595f007searchWF(){
   if ($("#searchformtable1eb9e2287549134f1169dc2d101b6595f007").length>0){
      var para = serializeObject($("#searchformtable1eb9e2287549134f1169dc2d101b6595f007"));
      para.bpmState = $('#table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table1eb9e2287549134f1169dc2d101b6595f007").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3881da2180188279818216cf7/table1eb9e2287549134f1169dc2d101b6595f007/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable1eb9e2287549134f1169dc2d101b6595f007,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1eb9e2287549134f1169dc2d101b6595f007SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1eb9e2287549134f1169dc2d101b6595f007LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1eb9e2287549134f1169dc2d101b6595f007OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1eb9e2287549134f1169dc2d101b6595f007OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1eb9e2287549134f1169dc2d101b6595f007GridComplete.exec();
				    setTimeout(function(){var height = $("#table1eb9e2287549134f1169dc2d101b6595f007").closest('.ui-jqgrid-bdiv').height();
					$("#table1eb9e2287549134f1169dc2d101b6595f007norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1eb9e2287549134f1169dc2d101b6595f007norecords img").css("width","120px");
                 }else{
					    $("#table1eb9e2287549134f1169dc2d101b6595f007norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1eb9e2287549134f1169dc2d101b6595f007BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table1eb9e2287549134f1169dc2d101b6595f007OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1eb9e2287549134f1169dc2d101b6595f007norecords").hide();
		   	    $("#Pagertable1eb9e2287549134f1169dc2d101b6595f007_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1eb9e2287549134f1169dc2d101b6595f007").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1eb9e2287549134f1169dc2d101b6595f007").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1eb9e2287549134f1169dc2d101b6595f007norecords").html() == null) {
						$("#table1eb9e2287549134f1169dc2d101b6595f007").parent().append("<div class='no_data' id='table1eb9e2287549134f1169dc2d101b6595f007norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1eb9e2287549134f1169dc2d101b6595f007norecords").show();
					$("#Pagertable1eb9e2287549134f1169dc2d101b6595f007_left").css("display", "none");
				}
table1eb9e2287549134f1169dc2d101b6595f007LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1eb9e2287549134f1169dc2d101b6595f007"
    });
table1eb9e2287549134f1169dc2d101b6595f007Reload();
$("#t_table1eb9e2287549134f1169dc2d101b6595f007").append($("#tableToolbartable1eb9e2287549134f1169dc2d101b6595f007"));$('#table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect').bind('change',function(){
table1eb9e2287549134f1169dc2d101b6595f007initWorkFlow($(this).val());
});
function searchDatatable1eb9e2287549134f1169dc2d101b6595f007(){
 var para = serializeObjectForEform($("#searchformtable1eb9e2287549134f1169dc2d101b6595f007"));
 para.bpmState = $('#table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table1eb9e2287549134f1169dc2d101b6595f007KeyWordIn="";
table1eb9e2287549134f1169dc2d101b6595f007ParamIn=JSON.stringify(para);
	$('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable1eb9e2287549134f1169dc2d101b6595f007").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable1eb9e2287549134f1169dc2d101b6595f007').bind('click',function(){
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
	content: $('#searchDialogtable1eb9e2287549134f1169dc2d101b6595f007'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable1eb9e2287549134f1169dc2d101b6595f007(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable1eb9e2287549134f1169dc2d101b6595f007")); searchDatatable1eb9e2287549134f1169dc2d101b6595f007(); layer.close(index); return false;
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
$('#FIVE_NAMEAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'FIVE_NAME',textFiled:'FIVE_NAMEAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#FIVE_DEPTAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'FIVE_DEPT',textFiled:'FIVE_DEPTAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#FIVE_DATE_START_button').click(function(e){
			$('#FIVE_DATE_START').datepicker('show');
			$('#FIVE_DATE_START').datepicker().trigger('click');
}); 
$('#FIVE_DATE_END_button').click(function(e){
			$('#FIVE_DATE_END').datepicker('show');
			$('#FIVE_DATE_END').datepicker().trigger('click');
}); 
$('#POSEN_NAMEAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'POSEN_NAME',textFiled:'POSEN_NAMEAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$("#tableToolbarButton3d0624facc1e5244ee08177b283b527d9c2e").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d89627f11018962b019e30afb&grid=table1eb9e2287549134f1169dc2d101b6595f007'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtoncfe571d212196a475e7affdbc96b95e14e93").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_FIVE_OF&isbpm=Y&dbid=2c908c1d89627f11018962a286e206a1', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3881da2180188279818216cf7',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table1eb9e2287549134f1169dc2d101b6595f007').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtoncfe571d212196a475e7affdbc96b95e14e93").hide();
$("#tableToolbarButton7a4e036cba0a1f40953874804a140309eb61").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'wxcgsbdc', callBackFunc: function () {                           	
		$('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
$("#tableToolbarButton5f2cb03a508ca1404259785734cf814ef678").bind('click',function(event){var row = $('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('getDataIDs');
if(row.length==0){
layer.alert('无数据！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0,
			  btn: ['关闭'],
			  title:"提示"
			}
		);
return
}
var url ='platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/download';
var json =row.join(',');
$("<form action='"+url+"' method = 'post' style = 'display:none'><input name='json' value='"+json+"' /></form>").appendTo('body').submit().remove();});

$('#tableToolbarButtond13156663bedc74870caf48a16478eacb914').bind('click',function() {                           
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
	        var colModels =$('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table1eb9e2287549134f1169dc2d101b6595f007KeyWordIn;                          
	        expSearchParams.param = table1eb9e2287549134f1169dc2d101b6595f007ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='五小成果申报表';                             
	        expSearchParams.viewid='948e83e3881da2180188279818216cf7';                                   
	        expSearchParams.tableid='table1eb9e2287549134f1169dc2d101b6595f007';                                 
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
