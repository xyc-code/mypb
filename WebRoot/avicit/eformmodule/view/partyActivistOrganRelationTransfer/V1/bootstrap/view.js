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

function redraw402811817f4eb25b017f623439000f00(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817f4eb25b017f623439000f00").width();
		var win_height = $("#402811817f4eb25b017f623439000f00").height();
		$('#402811817f4eb25b017f623439000f00').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#402811817f4eb25b017f623439000f00').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#402811817f4eb25b017f623439000f00').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817f4eb25b017f623439000f00").width();
	setTimeout(function(){redraw402811817f4eb25b017f623439000f00(win_width);},500);
});
var compRef5509d4001a2a834f568891025c4888665b4e='';
var tablee5bc894c89678044427842bb476db21478f8KeyWordIn = "";    
var tablee5bc894c89678044427842bb476db21478f8ParamIn = "";    
var tablee5bc894c89678044427842bb476db21478f8SelectRow = {     
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
var tablee5bc894c89678044427842bb476db21478f8LoadComplete = {     
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
var tablee5bc894c89678044427842bb476db21478f8BeforeEditCell = {        
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
var tablee5bc894c89678044427842bb476db21478f8OndblClickRow = {     
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
var tablee5bc894c89678044427842bb476db21478f8OnRightClickRow = {     
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
var tablee5bc894c89678044427842bb476db21478f8GridComplete = {     
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
var tablee5bc894c89678044427842bb476db21478f8OnCellSelect = {     
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
var tablee5bc894c89678044427842bb476db21478f8LoadBeforeSend = {        
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
function tablee5bc894c89678044427842bb476db21478f8Reload(pid){
	var _isInvalid = true;
	$("#tablee5bc894c89678044427842bb476db21478f8").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee5bc894c89678044427842bb476db21478f8Pid = pid;
		}
		return false;
	}
	window.tablee5bc894c89678044427842bb476db21478f8Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee5bc894c89678044427842bb476db21478f8').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee5bc894c89678044427842bb476db21478f8TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee5bc894c89678044427842bb476db21478f8Pid == 'undefined' || window.tablee5bc894c89678044427842bb476db21478f8Pid!=null){
tablee5bc894c89678044427842bb476db21478f8Reload(window.tablee5bc894c89678044427842bb476db21478f8Pid);
}
}
var tablecmtablee5bc894c89678044427842bb476db21478f8 = [];
var uniqueColtablee5bc894c89678044427842bb476db21478f8 = [];
var uniqueColTitletablee5bc894c89678044427842bb476db21478f8 = [];
var defaultValuetablee5bc894c89678044427842bb476db21478f8 = {};
tablecmtablee5bc894c89678044427842bb476db21478f8.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({label: 'FK_SUB_COL_ID',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({label: '姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({label: '转出支部',hidden:false, name: 'OUT_PARTY_ORG',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({ label: '积极分子类型',hidden:true, name: 'PARTY_ACT_TYPE',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({ label: '积极分子类型',hidden:false, name: 'PARTY_ACT_TYPEName',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({label: '目的支部',hidden:false, name: 'P_IN_PARTY_ORG',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({ label: '转出类型',hidden:true, name: 'P_TRANSFER_TYPE',align:'left',  width: '150px'});
tablecmtablee5bc894c89678044427842bb476db21478f8.push({ label: '转出类型',hidden:false, name: 'P_TRANSFER_TYPEName',align:'left',  width: '150px'});
var table92f3ebe4d1b65d4e948886581ea60a1dff99KeyWordIn = "";    
var table92f3ebe4d1b65d4e948886581ea60a1dff99ParamIn = "";    
var table92f3ebe4d1b65d4e948886581ea60a1dff99SelectRow = {     
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99LoadComplete = {     
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99BeforeEditCell = {        
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99OndblClickRow = {     
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99OnRightClickRow = {     
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99GridComplete = {     
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99OnCellSelect = {     
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
var table92f3ebe4d1b65d4e948886581ea60a1dff99LoadBeforeSend = {        
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
function table92f3ebe4d1b65d4e948886581ea60a1dff99Reload(pid){
	var _isInvalid = true;
	$("#table92f3ebe4d1b65d4e948886581ea60a1dff99").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table92f3ebe4d1b65d4e948886581ea60a1dff99Pid = pid;
		}
		return false;
	}
	window.table92f3ebe4d1b65d4e948886581ea60a1dff99Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table92f3ebe4d1b65d4e948886581ea60a1dff99Reload();
};
function table92f3ebe4d1b65d4e948886581ea60a1dff99TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table92f3ebe4d1b65d4e948886581ea60a1dff99Pid == 'undefined' || window.table92f3ebe4d1b65d4e948886581ea60a1dff99Pid!=null){
table92f3ebe4d1b65d4e948886581ea60a1dff99Reload(window.table92f3ebe4d1b65d4e948886581ea60a1dff99Pid);
}
}
var tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99 = [];
var uniqueColtable92f3ebe4d1b65d4e948886581ea60a1dff99 = [];
var uniqueColTitletable92f3ebe4d1b65d4e948886581ea60a1dff99 = [];
var defaultValuetable92f3ebe4d1b65d4e948886581ea60a1dff99 = {};
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '上报人',hidden:false, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '上报部门',hidden:false, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '自动编码',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '所在党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '上报日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '目的支部ID',hidden:true, name: 'P_IN_PARTY_ORG_ID',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({ label: '转出类别',hidden:true, name: 'P_TRANSFER_TYPE',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({ label: '转出类别',hidden:false, name: 'P_TRANSFER_TYPEName',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '目的支部',hidden:false, name: 'P_IN_PARTY_ORG',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function table92f3ebe4d1b65d4e948886581ea60a1dff99initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton38f830defd1420445fe8c5353c47b2e5c6a5").css('display','inline-block');
}else{
$("#tableToolbarButton38f830defd1420445fe8c5353c47b2e5c6a5").hide();
}
table92f3ebe4d1b65d4e948886581ea60a1dff99searchWF();
}
function table92f3ebe4d1b65d4e948886581ea60a1dff99searchWF(){
   if ($("#searchformtable92f3ebe4d1b65d4e948886581ea60a1dff99").length>0){
      var para = serializeObject($("#searchformtable92f3ebe4d1b65d4e948886581ea60a1dff99"));
      para.bpmState = $('#table92f3ebe4d1b65d4e948886581ea60a1dff99workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table92f3ebe4d1b65d4e948886581ea60a1dff99workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table92f3ebe4d1b65d4e948886581ea60a1dff99SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('getRowData',rowid);if (status) {
compRef5509d4001a2a834f568891025c4888665b4e = rowid;operaButtonName = null;
tablee5bc894c89678044427842bb476db21478f8Reload(rowid,rowdata,'');}
});
table92f3ebe4d1b65d4e948886581ea60a1dff99LoadComplete.addEvent(function(data){
var rowdata = $('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
tablee5bc894c89678044427842bb476db21478f8Reload('null',rowdata,'');
}
});
tablee5bc894c89678044427842bb476db21478f8LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#tablee5bc894c89678044427842bb476db21478f8").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f4eb25b017f623439000f00/tablee5bc894c89678044427842bb476db21478f8/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtablee5bc894c89678044427842bb476db21478f8,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee5bc894c89678044427842bb476db21478f8SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee5bc894c89678044427842bb476db21478f8LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee5bc894c89678044427842bb476db21478f8OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee5bc894c89678044427842bb476db21478f8OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee5bc894c89678044427842bb476db21478f8GridComplete.exec();
				    setTimeout(function(){var height = $("#tablee5bc894c89678044427842bb476db21478f8").closest('.ui-jqgrid-bdiv').height();
					$("#tablee5bc894c89678044427842bb476db21478f8norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee5bc894c89678044427842bb476db21478f8norecords img").css("width","120px");
                 }else{
					    $("#tablee5bc894c89678044427842bb476db21478f8norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee5bc894c89678044427842bb476db21478f8BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee5bc894c89678044427842bb476db21478f8OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee5bc894c89678044427842bb476db21478f8norecords").hide();
		   	    $("#Pagertablee5bc894c89678044427842bb476db21478f8_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee5bc894c89678044427842bb476db21478f8").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee5bc894c89678044427842bb476db21478f8").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee5bc894c89678044427842bb476db21478f8norecords").html() == null) {
						$("#tablee5bc894c89678044427842bb476db21478f8").parent().append("<div class='no_data' id='tablee5bc894c89678044427842bb476db21478f8norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee5bc894c89678044427842bb476db21478f8norecords").show();
					$("#Pagertablee5bc894c89678044427842bb476db21478f8_left").css("display", "none");
				}
tablee5bc894c89678044427842bb476db21478f8LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee5bc894c89678044427842bb476db21478f8"
    });
$("#t_tablee5bc894c89678044427842bb476db21478f8").append($("#tableToolbartablee5bc894c89678044427842bb476db21478f8"));$("#table92f3ebe4d1b65d4e948886581ea60a1dff99").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f4eb25b017f623439000f00/table92f3ebe4d1b65d4e948886581ea60a1dff99/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable92f3ebe4d1b65d4e948886581ea60a1dff99,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table92f3ebe4d1b65d4e948886581ea60a1dff99SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table92f3ebe4d1b65d4e948886581ea60a1dff99LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table92f3ebe4d1b65d4e948886581ea60a1dff99OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table92f3ebe4d1b65d4e948886581ea60a1dff99OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table92f3ebe4d1b65d4e948886581ea60a1dff99GridComplete.exec();
				    setTimeout(function(){var height = $("#table92f3ebe4d1b65d4e948886581ea60a1dff99").closest('.ui-jqgrid-bdiv').height();
					$("#table92f3ebe4d1b65d4e948886581ea60a1dff99norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table92f3ebe4d1b65d4e948886581ea60a1dff99norecords img").css("width","120px");
                 }else{
					    $("#table92f3ebe4d1b65d4e948886581ea60a1dff99norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table92f3ebe4d1b65d4e948886581ea60a1dff99BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table92f3ebe4d1b65d4e948886581ea60a1dff99OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table92f3ebe4d1b65d4e948886581ea60a1dff99norecords").hide();
		   	    $("#Pagertable92f3ebe4d1b65d4e948886581ea60a1dff99_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table92f3ebe4d1b65d4e948886581ea60a1dff99").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table92f3ebe4d1b65d4e948886581ea60a1dff99").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table92f3ebe4d1b65d4e948886581ea60a1dff99norecords").html() == null) {
						$("#table92f3ebe4d1b65d4e948886581ea60a1dff99").parent().append("<div class='no_data' id='table92f3ebe4d1b65d4e948886581ea60a1dff99norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table92f3ebe4d1b65d4e948886581ea60a1dff99norecords").show();
					$("#Pagertable92f3ebe4d1b65d4e948886581ea60a1dff99_left").css("display", "none");
				}
table92f3ebe4d1b65d4e948886581ea60a1dff99LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable92f3ebe4d1b65d4e948886581ea60a1dff99"
    });
table92f3ebe4d1b65d4e948886581ea60a1dff99Reload();
$("#t_table92f3ebe4d1b65d4e948886581ea60a1dff99").append($("#tableToolbartable92f3ebe4d1b65d4e948886581ea60a1dff99"));$("#tableToolbarButtond76112dc25eecb4a703802a7da5079a7e9b8").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f4eb25b017f61f97c0e0dbe&grid=table92f3ebe4d1b65d4e948886581ea60a1dff99'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton38f830defd1420445fe8c5353c47b2e5c6a5").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_ACT_TRANSFER&isbpm=Y&dbid=402811817f4eb25b017f620ec9710dc1', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817f4eb25b017f623439000f00',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table92f3ebe4d1b65d4e948886581ea60a1dff99').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton38f830defd1420445fe8c5353c47b2e5c6a5").hide();
$('#table92f3ebe4d1b65d4e948886581ea60a1dff99workFlowSelect').bind('change',function(){
table92f3ebe4d1b65d4e948886581ea60a1dff99initWorkFlow($(this).val());
});
function searchDatatable92f3ebe4d1b65d4e948886581ea60a1dff99(){
 var para = serializeObjectForEform($("#searchformtable92f3ebe4d1b65d4e948886581ea60a1dff99"));
 para.bpmState = $('#table92f3ebe4d1b65d4e948886581ea60a1dff99workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table92f3ebe4d1b65d4e948886581ea60a1dff99KeyWordIn="";
table92f3ebe4d1b65d4e948886581ea60a1dff99ParamIn=JSON.stringify(para);
	$('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable92f3ebe4d1b65d4e948886581ea60a1dff99").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable92f3ebe4d1b65d4e948886581ea60a1dff99').bind('click',function(){
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
	content: $('#searchDialogtable92f3ebe4d1b65d4e948886581ea60a1dff99'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable92f3ebe4d1b65d4e948886581ea60a1dff99(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable92f3ebe4d1b65d4e948886581ea60a1dff99")); searchDatatable92f3ebe4d1b65d4e948886581ea60a1dff99(); layer.close(index); return false;
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
$('#REQUEST_USERAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'REQUEST_USER',textFiled:'REQUEST_USERAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#REQUEST_DATE_START_button').click(function(e){
			$('#REQUEST_DATE_START').datepicker('show');
			$('#REQUEST_DATE_START').datepicker().trigger('click');
}); 
$('#REQUEST_DATE_END_button').click(function(e){
			$('#REQUEST_DATE_END').datepicker('show');
			$('#REQUEST_DATE_END').datepicker().trigger('click');
}); 
$('#REQUEST_DEPTAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'REQUEST_DEPT',textFiled:'REQUEST_DEPTAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
;});	 
