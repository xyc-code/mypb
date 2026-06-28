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

function redraw948e83e39319e8fe01933de7433e7bf6(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39319e8fe01933de7433e7bf6").width();
		var win_height = $("#948e83e39319e8fe01933de7433e7bf6").height();
		$('#948e83e39319e8fe01933de7433e7bf6').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e39319e8fe01933de7433e7bf6').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e39319e8fe01933de7433e7bf6').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39319e8fe01933de7433e7bf6").width();
	setTimeout(function(){redraw948e83e39319e8fe01933de7433e7bf6(win_width);},500);
});
var compRef07878eb2766f5c4258394615da19dd5698e4='';
var table5afd1347b931db4bb2084a311bb9a8c97f38KeyWordIn = "";    
var table5afd1347b931db4bb2084a311bb9a8c97f38ParamIn = "";    
var table5afd1347b931db4bb2084a311bb9a8c97f38SelectRow = {     
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
var table5afd1347b931db4bb2084a311bb9a8c97f38LoadComplete = {     
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
var table5afd1347b931db4bb2084a311bb9a8c97f38BeforeEditCell = {        
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
var table5afd1347b931db4bb2084a311bb9a8c97f38OndblClickRow = {     
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
var table5afd1347b931db4bb2084a311bb9a8c97f38OnRightClickRow = {     
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
var table5afd1347b931db4bb2084a311bb9a8c97f38GridComplete = {     
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
var table5afd1347b931db4bb2084a311bb9a8c97f38OnCellSelect = {     
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
var table5afd1347b931db4bb2084a311bb9a8c97f38LoadBeforeSend = {        
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
function table5afd1347b931db4bb2084a311bb9a8c97f38Reload(pid){
	var _isInvalid = true;
	$("#table5afd1347b931db4bb2084a311bb9a8c97f38").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5afd1347b931db4bb2084a311bb9a8c97f38Pid = pid;
		}
		return false;
	}
	window.table5afd1347b931db4bb2084a311bb9a8c97f38Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5afd1347b931db4bb2084a311bb9a8c97f38').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table5afd1347b931db4bb2084a311bb9a8c97f38Reload();
};
function table5afd1347b931db4bb2084a311bb9a8c97f38TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5afd1347b931db4bb2084a311bb9a8c97f38Pid == 'undefined' || window.table5afd1347b931db4bb2084a311bb9a8c97f38Pid!=null){
table5afd1347b931db4bb2084a311bb9a8c97f38Reload(window.table5afd1347b931db4bb2084a311bb9a8c97f38Pid);
}
}
var tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38 = [];
var uniqueColtable5afd1347b931db4bb2084a311bb9a8c97f38 = [];
var uniqueColTitletable5afd1347b931db4bb2084a311bb9a8c97f38 = [];
var defaultValuetable5afd1347b931db4bb2084a311bb9a8c97f38 = {};
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '申请日期', formatter:format, hidden:false, name: 'SQRQ',align:'center',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '表单编号',hidden:false, name: 'BDBH',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '申请人',hidden:false, name: 'SQR',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '申请人所在党支部',hidden:false, name: 'SQRSZDZB',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '申请人电话',hidden:false, name: 'SQRDH',align:'right',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '里程碑节点',hidden:false, name: 'LCBJDID',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '完成情况',hidden:false, name: 'WCQK',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '附件',hidden:true, name: 'WCQKFJ',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '里程碑完成标志',hidden:false, name: 'LCBJDBZ',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '里程碑完成时间', formatter:format, hidden:false, name: 'LCBWCSJ',align:'center',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});var table5fbaa2786649cf4807885d63184c78d6e937KeyWordIn = "";    
var table5fbaa2786649cf4807885d63184c78d6e937ParamIn = "";    
var table5fbaa2786649cf4807885d63184c78d6e937SelectRow = {     
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
var table5fbaa2786649cf4807885d63184c78d6e937LoadComplete = {     
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
var table5fbaa2786649cf4807885d63184c78d6e937BeforeEditCell = {        
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
var table5fbaa2786649cf4807885d63184c78d6e937OndblClickRow = {     
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
var table5fbaa2786649cf4807885d63184c78d6e937OnRightClickRow = {     
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
var table5fbaa2786649cf4807885d63184c78d6e937GridComplete = {     
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
var table5fbaa2786649cf4807885d63184c78d6e937OnCellSelect = {     
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
var table5fbaa2786649cf4807885d63184c78d6e937LoadBeforeSend = {        
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
function table5fbaa2786649cf4807885d63184c78d6e937Reload(pid){
	var _isInvalid = true;
	$("#table5fbaa2786649cf4807885d63184c78d6e937").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5fbaa2786649cf4807885d63184c78d6e937Pid = pid;
		}
		return false;
	}
	window.table5fbaa2786649cf4807885d63184c78d6e937Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5fbaa2786649cf4807885d63184c78d6e937').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table5fbaa2786649cf4807885d63184c78d6e937Reload();
};
function table5fbaa2786649cf4807885d63184c78d6e937TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5fbaa2786649cf4807885d63184c78d6e937Pid == 'undefined' || window.table5fbaa2786649cf4807885d63184c78d6e937Pid!=null){
table5fbaa2786649cf4807885d63184c78d6e937Reload(window.table5fbaa2786649cf4807885d63184c78d6e937Pid);
}
}
var tablecmtable5fbaa2786649cf4807885d63184c78d6e937 = [];
var uniqueColtable5fbaa2786649cf4807885d63184c78d6e937 = [];
var uniqueColTitletable5fbaa2786649cf4807885d63184c78d6e937 = [];
var defaultValuetable5fbaa2786649cf4807885d63184c78d6e937 = {};
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '申请日期', formatter:format, hidden:false, name: 'SQRQ',align:'center',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '表单编号',hidden:false, name: 'BDBH',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '申请人',hidden:false, name: 'SQR',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '申请人所在党支部',hidden:false, name: 'SQRSZDZB',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '申请人电话',hidden:false, name: 'SQRDH',align:'right',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '承接课题名称',hidden:false, name: 'CJKTMC',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '项目级别',hidden:false, name: 'XMJB',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '协同党支部',hidden:false, name: 'XTDZB',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '团队主要成员',hidden:true, name: 'TDZYCY',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '项目申报id',hidden:true, name: 'CJKTMC_ID',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '项目主要成员姓名',hidden:false, name: 'XMCY_XM',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable5fbaa2786649cf4807885d63184c78d6e937.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});;$(document).ready(function(){ 

table5fbaa2786649cf4807885d63184c78d6e937SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table5fbaa2786649cf4807885d63184c78d6e937').jqGrid('getRowData',rowid);if (status) {
compRef07878eb2766f5c4258394615da19dd5698e4 = rowid;operaButtonName = null;
table5afd1347b931db4bb2084a311bb9a8c97f38Reload(rowid,rowdata,'');}
});
table5fbaa2786649cf4807885d63184c78d6e937LoadComplete.addEvent(function(data){
var rowdata = $('#table5fbaa2786649cf4807885d63184c78d6e937').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table5afd1347b931db4bb2084a311bb9a8c97f38Reload('null',rowdata,'');
}
});
table5afd1347b931db4bb2084a311bb9a8c97f38LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table5afd1347b931db4bb2084a311bb9a8c97f38").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39319e8fe01933de7433e7bf6/table5afd1347b931db4bb2084a311bb9a8c97f38/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable5afd1347b931db4bb2084a311bb9a8c97f38,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5afd1347b931db4bb2084a311bb9a8c97f38SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5afd1347b931db4bb2084a311bb9a8c97f38LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5afd1347b931db4bb2084a311bb9a8c97f38OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5afd1347b931db4bb2084a311bb9a8c97f38OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5afd1347b931db4bb2084a311bb9a8c97f38GridComplete.exec();
				    setTimeout(function(){var height = $("#table5afd1347b931db4bb2084a311bb9a8c97f38").closest('.ui-jqgrid-bdiv').height();
					$("#table5afd1347b931db4bb2084a311bb9a8c97f38norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5afd1347b931db4bb2084a311bb9a8c97f38norecords img").css("width","120px");
                 }else{
					    $("#table5afd1347b931db4bb2084a311bb9a8c97f38norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5afd1347b931db4bb2084a311bb9a8c97f38BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5afd1347b931db4bb2084a311bb9a8c97f38OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5afd1347b931db4bb2084a311bb9a8c97f38norecords").hide();
		   	    $("#Pagertable5afd1347b931db4bb2084a311bb9a8c97f38_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5afd1347b931db4bb2084a311bb9a8c97f38").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5afd1347b931db4bb2084a311bb9a8c97f38").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5afd1347b931db4bb2084a311bb9a8c97f38norecords").html() == null) {
						$("#table5afd1347b931db4bb2084a311bb9a8c97f38").parent().append("<div class='no_data' id='table5afd1347b931db4bb2084a311bb9a8c97f38norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5afd1347b931db4bb2084a311bb9a8c97f38norecords").show();
					$("#Pagertable5afd1347b931db4bb2084a311bb9a8c97f38_left").css("display", "none");
				}
table5afd1347b931db4bb2084a311bb9a8c97f38LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5afd1347b931db4bb2084a311bb9a8c97f38"
    });
$("#t_table5afd1347b931db4bb2084a311bb9a8c97f38").append($("#tableToolbartable5afd1347b931db4bb2084a311bb9a8c97f38"));$("#tableToolbarButton618ad19b2dae5d4e76b8f2c9f6b0f3674c43").bind('click',function() {                                                                                       
	var ids = $('#table5afd1347b931db4bb2084a311bb9a8c97f38').jqGrid('getGridParam', 'selarrrow');                            
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
	var rowData = $('#table5afd1347b931db4bb2084a311bb9a8c97f38').jqGrid('getRowData', ids[0]);		
	var id = rowData.ID;
	var flag = '1';
	$.ajax({																		
		url: 'platform/eform/bpmsCRUDClient/checkFlowIsCreate.json', 
		data: {id : id},								
		async: false,																	
		type: 'post',																	
		dataType: 'json',																
		success: function(r) {															
			flag = r.flag;
		}																				
	}); 																				
	if (flag == '2'){
		layer.alert('该条数据已发起流程！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}else{
		var processDef = new FlowListEditorBySec('gsjblcblc');
		FlowListEditorBySec.prototype.doStart = function (pdId) {
			$.ajax({
				url: 'platform/eform/bpmsCRUDClient/startflowBylist.json',
				data: { formInfoId: '948e83e39319e8fe01933dffd96d000b', comId: id, defineId: pdId },
				async: false,
				type: 'post',
				dataType: 'json',
				success: function (r) {
					if (r.flag === "sucess") {
						flowUtils.detail(r.processInstanceId, 0);
						table5afd1347b931db4bb2084a311bb9a8c97f38Reload();
					} else {
						layer.alert(r.error, {
							icon: 7,
							area: ['400px', ''],
							closeBtn: 0
						});
					}
				}
			});
		}
		processDef.start();
	}
}
);
$("#table5fbaa2786649cf4807885d63184c78d6e937").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39319e8fe01933de7433e7bf6/table5fbaa2786649cf4807885d63184c78d6e937/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5fbaa2786649cf4807885d63184c78d6e937,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5fbaa2786649cf4807885d63184c78d6e937SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5fbaa2786649cf4807885d63184c78d6e937LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5fbaa2786649cf4807885d63184c78d6e937OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5fbaa2786649cf4807885d63184c78d6e937OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5fbaa2786649cf4807885d63184c78d6e937GridComplete.exec();
				    setTimeout(function(){var height = $("#table5fbaa2786649cf4807885d63184c78d6e937").closest('.ui-jqgrid-bdiv').height();
					$("#table5fbaa2786649cf4807885d63184c78d6e937norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5fbaa2786649cf4807885d63184c78d6e937norecords img").css("width","120px");
                 }else{
					    $("#table5fbaa2786649cf4807885d63184c78d6e937norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5fbaa2786649cf4807885d63184c78d6e937BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5fbaa2786649cf4807885d63184c78d6e937OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5fbaa2786649cf4807885d63184c78d6e937norecords").hide();
		   	    $("#Pagertable5fbaa2786649cf4807885d63184c78d6e937_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5fbaa2786649cf4807885d63184c78d6e937").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5fbaa2786649cf4807885d63184c78d6e937").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5fbaa2786649cf4807885d63184c78d6e937norecords").html() == null) {
						$("#table5fbaa2786649cf4807885d63184c78d6e937").parent().append("<div class='no_data' id='table5fbaa2786649cf4807885d63184c78d6e937norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5fbaa2786649cf4807885d63184c78d6e937norecords").show();
					$("#Pagertable5fbaa2786649cf4807885d63184c78d6e937_left").css("display", "none");
				}
table5fbaa2786649cf4807885d63184c78d6e937LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5fbaa2786649cf4807885d63184c78d6e937"
    });
table5fbaa2786649cf4807885d63184c78d6e937Reload();
$("#t_table5fbaa2786649cf4807885d63184c78d6e937").append($("#tableToolbartable5fbaa2786649cf4807885d63184c78d6e937"));function searchDatatable5fbaa2786649cf4807885d63184c78d6e937(){
 var para = serializeObjectForEform($("#searchformtable5fbaa2786649cf4807885d63184c78d6e937"));
 para.bpmState = $('#table5fbaa2786649cf4807885d63184c78d6e937workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table5fbaa2786649cf4807885d63184c78d6e937KeyWordIn="";
table5fbaa2786649cf4807885d63184c78d6e937ParamIn=JSON.stringify(para);
	$('#table5fbaa2786649cf4807885d63184c78d6e937').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable5fbaa2786649cf4807885d63184c78d6e937").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable5fbaa2786649cf4807885d63184c78d6e937').bind('click',function(){
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
	content: $('#searchDialogtable5fbaa2786649cf4807885d63184c78d6e937'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable5fbaa2786649cf4807885d63184c78d6e937(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable5fbaa2786649cf4807885d63184c78d6e937")); searchDatatable5fbaa2786649cf4807885d63184c78d6e937(); layer.close(index); return false;
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
;});	 
