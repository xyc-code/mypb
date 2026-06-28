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

function redraw948e83e3938bb70a019394507ac7559a(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3938bb70a019394507ac7559a").width();
		var win_height = $("#948e83e3938bb70a019394507ac7559a").height();
		$('#948e83e3938bb70a019394507ac7559a').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e3938bb70a019394507ac7559a').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e3938bb70a019394507ac7559a').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3938bb70a019394507ac7559a").width();
	setTimeout(function(){redraw948e83e3938bb70a019394507ac7559a(win_width);},500);
});
var compRefa6e34987afb1684159d8c1ec5eca6aca0394='';
var table6be390419ea36d4cb41b80ceffba6333f032KeyWordIn = "";    
var table6be390419ea36d4cb41b80ceffba6333f032ParamIn = "";    
var table6be390419ea36d4cb41b80ceffba6333f032SelectRow = {     
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
var table6be390419ea36d4cb41b80ceffba6333f032LoadComplete = {     
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
var table6be390419ea36d4cb41b80ceffba6333f032BeforeEditCell = {        
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
var table6be390419ea36d4cb41b80ceffba6333f032OndblClickRow = {     
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
var table6be390419ea36d4cb41b80ceffba6333f032OnRightClickRow = {     
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
var table6be390419ea36d4cb41b80ceffba6333f032GridComplete = {     
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
var table6be390419ea36d4cb41b80ceffba6333f032OnCellSelect = {     
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
var table6be390419ea36d4cb41b80ceffba6333f032LoadBeforeSend = {        
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
function table6be390419ea36d4cb41b80ceffba6333f032Reload(pid){
	var _isInvalid = true;
	$("#table6be390419ea36d4cb41b80ceffba6333f032").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6be390419ea36d4cb41b80ceffba6333f032Pid = pid;
		}
		return false;
	}
	window.table6be390419ea36d4cb41b80ceffba6333f032Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6be390419ea36d4cb41b80ceffba6333f032').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table6be390419ea36d4cb41b80ceffba6333f032TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6be390419ea36d4cb41b80ceffba6333f032Pid == 'undefined' || window.table6be390419ea36d4cb41b80ceffba6333f032Pid!=null){
table6be390419ea36d4cb41b80ceffba6333f032Reload(window.table6be390419ea36d4cb41b80ceffba6333f032Pid);
}
}
var tablecmtable6be390419ea36d4cb41b80ceffba6333f032 = [];
var uniqueColtable6be390419ea36d4cb41b80ceffba6333f032 = [];
var uniqueColTitletable6be390419ea36d4cb41b80ceffba6333f032 = [];
var defaultValuetable6be390419ea36d4cb41b80ceffba6333f032 = {};
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '序号',hidden:false, name: 'DATA_ORDER',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '工作分类',hidden:false, name: 'WORK_TYPE',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '主要内容',hidden:false, name: 'MAIN_CONTENT',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '内容分解',hidden:false, name: 'CONTENT_LIST',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '时间节点', formatter:format, hidden:false, name: 'DATE_CHECK',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({ label: '完成情况',hidden:true, name: 'WORK_STATUS',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({ label: '完成情况',hidden:false, name: 'WORK_STATUSName',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '备注',hidden:false, name: 'REMARK',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '主表ID',hidden:true, name: 'FK_ID',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '填写年度',hidden:true, name: 'WORK_YEAR',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '填写季度',hidden:true, name: 'WORK_JD',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '历史表ID',hidden:true, name: 'HIST_ID',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable6be390419ea36d4cb41b80ceffba6333f032.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
	var searchNamestable6be390419ea36d4cb41b80ceffba6333f032 = []; 
searchNamestable6be390419ea36d4cb41b80ceffba6333f032.push('WORK_TYPE');
searchNamestable6be390419ea36d4cb41b80ceffba6333f032.push('MAIN_CONTENT');
$('#keyWordtable6be390419ea36d4cb41b80ceffba6333f032').attr('placeholder', '请输入工作分类、主要内容查询');
function searchDataKeyWordtable6be390419ea36d4cb41b80ceffba6333f032(){
	var keyWord = $.trim($("#keyWordtable6be390419ea36d4cb41b80ceffba6333f032").val()); 
 if($('#keyWordtable6be390419ea36d4cb41b80ceffba6333f032').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable6be390419ea36d4cb41b80ceffba6333f032.length;i++){ 
		var name = searchNamestable6be390419ea36d4cb41b80ceffba6333f032[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table6be390419ea36d4cb41b80ceffba6333f032KeyWordIn=JSON.stringify(param);
table6be390419ea36d4cb41b80ceffba6333f032ParamIn="";
	$('#table6be390419ea36d4cb41b80ceffba6333f032').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable6be390419ea36d4cb41b80ceffba6333f032').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable6be390419ea36d4cb41b80ceffba6333f032();
	}
});
$('#keyWordBttable6be390419ea36d4cb41b80ceffba6333f032').bind('click', function() {
		searchDataKeyWordtable6be390419ea36d4cb41b80ceffba6333f032();
});
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0KeyWordIn = "";    
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0ParamIn = "";    
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0SelectRow = {     
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0LoadComplete = {     
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0BeforeEditCell = {        
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0OndblClickRow = {     
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0OnRightClickRow = {     
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0GridComplete = {     
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0OnCellSelect = {     
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
var table5a574f3b8e21794fd0cbbf98d7105eaec8b0LoadBeforeSend = {        
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
function table5a574f3b8e21794fd0cbbf98d7105eaec8b0Reload(pid){
	var _isInvalid = true;
	$("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5a574f3b8e21794fd0cbbf98d7105eaec8b0Pid = pid;
		}
		return false;
	}
	window.table5a574f3b8e21794fd0cbbf98d7105eaec8b0Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table5a574f3b8e21794fd0cbbf98d7105eaec8b0Reload();
};
function table5a574f3b8e21794fd0cbbf98d7105eaec8b0TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5a574f3b8e21794fd0cbbf98d7105eaec8b0Pid == 'undefined' || window.table5a574f3b8e21794fd0cbbf98d7105eaec8b0Pid!=null){
table5a574f3b8e21794fd0cbbf98d7105eaec8b0Reload(window.table5a574f3b8e21794fd0cbbf98d7105eaec8b0Pid);
}
}
var tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0 = [];
var uniqueColtable5a574f3b8e21794fd0cbbf98d7105eaec8b0 = [];
var uniqueColTitletable5a574f3b8e21794fd0cbbf98d7105eaec8b0 = [];
var defaultValuetable5a574f3b8e21794fd0cbbf98d7105eaec8b0 = {};
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '申请日期', formatter:format, hidden:false, name: 'REQUEST_DATE',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '自动编码',hidden:true, name: 'AUTO_CODE',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'center',  width: '150px'});tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'center',  width: '150px'});tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'center',  width: '150px'});tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'center',  width: '150px'});	var searchNamestable5a574f3b8e21794fd0cbbf98d7105eaec8b0 = []; 
searchNamestable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push('AUTO_CODE');
searchNamestable5a574f3b8e21794fd0cbbf98d7105eaec8b0.push('USER_NAME');
$('#keyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0').attr('placeholder', '请输入自动编码、申请人查询');
function searchDataKeyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0(){
	var keyWord = $.trim($("#keyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0").val()); 
 if($('#keyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable5a574f3b8e21794fd0cbbf98d7105eaec8b0.length;i++){ 
		var name = searchNamestable5a574f3b8e21794fd0cbbf98d7105eaec8b0[i]; 
		param[name] = keyWord; 
	} 
if ($("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect").length>0){param.bpmState=$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table5a574f3b8e21794fd0cbbf98d7105eaec8b0KeyWordIn=JSON.stringify(param);
table5a574f3b8e21794fd0cbbf98d7105eaec8b0ParamIn="";
	$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0();
	}
});
$('#keyWordBttable5a574f3b8e21794fd0cbbf98d7105eaec8b0').bind('click', function() {
		searchDataKeyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0();
});
function table5a574f3b8e21794fd0cbbf98d7105eaec8b0initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton9944c3dac4f7c04bd32bf8a06cd12105673c").css('display','inline-block');
}else{
$("#tableToolbarButton9944c3dac4f7c04bd32bf8a06cd12105673c").hide();
}
table5a574f3b8e21794fd0cbbf98d7105eaec8b0searchWF();
}
function table5a574f3b8e21794fd0cbbf98d7105eaec8b0searchWF(){
   if ($("#searchformtable5a574f3b8e21794fd0cbbf98d7105eaec8b0").length>0){
      var para = serializeObject($("#searchformtable5a574f3b8e21794fd0cbbf98d7105eaec8b0"));
      para.bpmState = $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table5a574f3b8e21794fd0cbbf98d7105eaec8b0SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('getRowData',rowid);if (status) {
compRefa6e34987afb1684159d8c1ec5eca6aca0394 = rowid;operaButtonName = null;
table6be390419ea36d4cb41b80ceffba6333f032Reload(rowid,rowdata,'');}
});
table5a574f3b8e21794fd0cbbf98d7105eaec8b0LoadComplete.addEvent(function(data){
var rowdata = $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table6be390419ea36d4cb41b80ceffba6333f032Reload('null',rowdata,'');
}
});
table6be390419ea36d4cb41b80ceffba6333f032LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table6be390419ea36d4cb41b80ceffba6333f032").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3938bb70a019394507ac7559a/table6be390419ea36d4cb41b80ceffba6333f032/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable6be390419ea36d4cb41b80ceffba6333f032,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6be390419ea36d4cb41b80ceffba6333f032SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6be390419ea36d4cb41b80ceffba6333f032LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6be390419ea36d4cb41b80ceffba6333f032OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6be390419ea36d4cb41b80ceffba6333f032OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6be390419ea36d4cb41b80ceffba6333f032GridComplete.exec();
				    setTimeout(function(){var height = $("#table6be390419ea36d4cb41b80ceffba6333f032").closest('.ui-jqgrid-bdiv').height();
					$("#table6be390419ea36d4cb41b80ceffba6333f032norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6be390419ea36d4cb41b80ceffba6333f032norecords img").css("width","120px");
                 }else{
					    $("#table6be390419ea36d4cb41b80ceffba6333f032norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6be390419ea36d4cb41b80ceffba6333f032BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6be390419ea36d4cb41b80ceffba6333f032OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6be390419ea36d4cb41b80ceffba6333f032norecords").hide();
		   	    $("#Pagertable6be390419ea36d4cb41b80ceffba6333f032_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6be390419ea36d4cb41b80ceffba6333f032").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6be390419ea36d4cb41b80ceffba6333f032").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6be390419ea36d4cb41b80ceffba6333f032norecords").html() == null) {
						$("#table6be390419ea36d4cb41b80ceffba6333f032").parent().append("<div class='no_data' id='table6be390419ea36d4cb41b80ceffba6333f032norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6be390419ea36d4cb41b80ceffba6333f032norecords").show();
					$("#Pagertable6be390419ea36d4cb41b80ceffba6333f032_left").css("display", "none");
				}
table6be390419ea36d4cb41b80ceffba6333f032LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6be390419ea36d4cb41b80ceffba6333f032"
    });
$("#t_table6be390419ea36d4cb41b80ceffba6333f032").append($("#tableToolbartable6be390419ea36d4cb41b80ceffba6333f032"));function searchDatatable6be390419ea36d4cb41b80ceffba6333f032(){
 var para = serializeObjectForEform($("#searchformtable6be390419ea36d4cb41b80ceffba6333f032"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table6be390419ea36d4cb41b80ceffba6333f032KeyWordIn="";
table6be390419ea36d4cb41b80ceffba6333f032ParamIn=JSON.stringify(para);
	$('#table6be390419ea36d4cb41b80ceffba6333f032').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable6be390419ea36d4cb41b80ceffba6333f032").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable6be390419ea36d4cb41b80ceffba6333f032').bind('click',function(){
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
	content: $('#searchDialogtable6be390419ea36d4cb41b80ceffba6333f032'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable6be390419ea36d4cb41b80ceffba6333f032(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable6be390419ea36d4cb41b80ceffba6333f032")); searchDatatable6be390419ea36d4cb41b80ceffba6333f032(); layer.close(index); return false;
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
$('#DATE_CHECK_START_button').click(function(e){
			$('#DATE_CHECK_START').datepicker('show');
			$('#DATE_CHECK_START').datepicker().trigger('click');
}); 
$('#DATE_CHECK_END_button').click(function(e){
			$('#DATE_CHECK_END').datepicker('show');
			$('#DATE_CHECK_END').datepicker().trigger('click');
}); 
$("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3938bb70a019394507ac7559a/table5a574f3b8e21794fd0cbbf98d7105eaec8b0/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5a574f3b8e21794fd0cbbf98d7105eaec8b0,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5a574f3b8e21794fd0cbbf98d7105eaec8b0SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5a574f3b8e21794fd0cbbf98d7105eaec8b0LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5a574f3b8e21794fd0cbbf98d7105eaec8b0OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5a574f3b8e21794fd0cbbf98d7105eaec8b0OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5a574f3b8e21794fd0cbbf98d7105eaec8b0GridComplete.exec();
				    setTimeout(function(){var height = $("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0").closest('.ui-jqgrid-bdiv').height();
					$("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords img").css("width","120px");
                 }else{
					    $("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5a574f3b8e21794fd0cbbf98d7105eaec8b0BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5a574f3b8e21794fd0cbbf98d7105eaec8b0OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords").hide();
		   	    $("#Pagertable5a574f3b8e21794fd0cbbf98d7105eaec8b0_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords").html() == null) {
						$("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0").parent().append("<div class='no_data' id='table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5a574f3b8e21794fd0cbbf98d7105eaec8b0norecords").show();
					$("#Pagertable5a574f3b8e21794fd0cbbf98d7105eaec8b0_left").css("display", "none");
				}
table5a574f3b8e21794fd0cbbf98d7105eaec8b0LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5a574f3b8e21794fd0cbbf98d7105eaec8b0"
    });
table5a574f3b8e21794fd0cbbf98d7105eaec8b0Reload();
$("#t_table5a574f3b8e21794fd0cbbf98d7105eaec8b0").append($("#tableToolbartable5a574f3b8e21794fd0cbbf98d7105eaec8b0"));function searchDatatable5a574f3b8e21794fd0cbbf98d7105eaec8b0(){
 var para = serializeObjectForEform($("#searchformtable5a574f3b8e21794fd0cbbf98d7105eaec8b0"));
 para.bpmState = $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table5a574f3b8e21794fd0cbbf98d7105eaec8b0KeyWordIn="";
table5a574f3b8e21794fd0cbbf98d7105eaec8b0ParamIn=JSON.stringify(para);
	$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable5a574f3b8e21794fd0cbbf98d7105eaec8b0").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable5a574f3b8e21794fd0cbbf98d7105eaec8b0').bind('click',function(){
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
	content: $('#searchDialogtable5a574f3b8e21794fd0cbbf98d7105eaec8b0'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable5a574f3b8e21794fd0cbbf98d7105eaec8b0(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable5a574f3b8e21794fd0cbbf98d7105eaec8b0")); searchDatatable5a574f3b8e21794fd0cbbf98d7105eaec8b0(); layer.close(index); return false;
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
$('#REQUEST_DATE_START_button').click(function(e){
			$('#REQUEST_DATE_START').datepicker('show');
			$('#REQUEST_DATE_START').datepicker().trigger('click');
}); 
$('#REQUEST_DATE_END_button').click(function(e){
			$('#REQUEST_DATE_END').datepicker('show');
			$('#REQUEST_DATE_END').datepicker().trigger('click');
}); 
$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect').bind('change',function(){
table5a574f3b8e21794fd0cbbf98d7105eaec8b0initWorkFlow($(this).val());
});
$("#tableToolbarButtone2bc0545488b694699c850c6317ad5f625d8").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3938bb70a019390371fd244b4&grid=table5a574f3b8e21794fd0cbbf98d7105eaec8b0'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton9944c3dac4f7c04bd32bf8a06cd12105673c").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_LJWHJS_WORK_APPLY&isbpm=Y&dbid=948e83e3938bb70a01938f2f691d1fb1', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3938bb70a019394507ac7559a',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton9944c3dac4f7c04bd32bf8a06cd12105673c").hide();
$("#tableToolbarButton91bbd8963df1c1490c6b4af3665e3f462ce2").bind('click',function(event){layer.open({                                                                     
	type: 2,                                                                     
	area: ['100%', '100%'],                                                      
	title: '维护重点工作',                                                                
	skin: 'bs-modal',                                                            
	maxmin: false,                                                               
	content: 'platform/eform/bpmsCRUDClient/toViewJsp/ljwhjszdgzwh_view'     
});});
$("#tableToolbarButton71d93cf7cdede241daa875029031a973b346").bind('click',function(event){layer.open({                                                                     
	type: 2,                                                                     
	area: ['100%', '100%'],                                                      
	title: '年度廉洁文化建设重点工作',                                                                
	skin: 'bs-modal',                                                            
	maxmin: false,                                                               
	content: 'platform/eform/bpmsCRUDClient/toViewJsp/ljwhjszdgz_nowYear_count'     
});});
;});	 
