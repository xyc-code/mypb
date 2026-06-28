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

function redraw948e83e3881da2180188279574e76caa(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3881da2180188279574e76caa").width();
		var win_height = $("#948e83e3881da2180188279574e76caa").height();
		$('#948e83e3881da2180188279574e76caa').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e3881da2180188279574e76caa').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e3881da2180188279574e76caa').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3881da2180188279574e76caa").width();
	setTimeout(function(){redraw948e83e3881da2180188279574e76caa(win_width);},500);
});
var compRef529437754845b7465e08e9641b79b0774051='';
var table2d5521239783924c6b48fe19d159ecd7ddb4KeyWordIn = "";    
var table2d5521239783924c6b48fe19d159ecd7ddb4ParamIn = "";    
var table2d5521239783924c6b48fe19d159ecd7ddb4SelectRow = {     
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
var table2d5521239783924c6b48fe19d159ecd7ddb4LoadComplete = {     
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
var table2d5521239783924c6b48fe19d159ecd7ddb4BeforeEditCell = {        
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
var table2d5521239783924c6b48fe19d159ecd7ddb4OndblClickRow = {     
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
var table2d5521239783924c6b48fe19d159ecd7ddb4OnRightClickRow = {     
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
var table2d5521239783924c6b48fe19d159ecd7ddb4GridComplete = {     
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
var table2d5521239783924c6b48fe19d159ecd7ddb4OnCellSelect = {     
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
var table2d5521239783924c6b48fe19d159ecd7ddb4LoadBeforeSend = {        
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
function table2d5521239783924c6b48fe19d159ecd7ddb4Reload(pid){
	var _isInvalid = true;
	$("#table2d5521239783924c6b48fe19d159ecd7ddb4").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2d5521239783924c6b48fe19d159ecd7ddb4Pid = pid;
		}
		return false;
	}
	window.table2d5521239783924c6b48fe19d159ecd7ddb4Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2d5521239783924c6b48fe19d159ecd7ddb4').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2d5521239783924c6b48fe19d159ecd7ddb4TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2d5521239783924c6b48fe19d159ecd7ddb4Pid == 'undefined' || window.table2d5521239783924c6b48fe19d159ecd7ddb4Pid!=null){
table2d5521239783924c6b48fe19d159ecd7ddb4Reload(window.table2d5521239783924c6b48fe19d159ecd7ddb4Pid);
}
}
var tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4 = [];
var uniqueColtable2d5521239783924c6b48fe19d159ecd7ddb4 = [];
var uniqueColTitletable2d5521239783924c6b48fe19d159ecd7ddb4 = [];
var defaultValuetable2d5521239783924c6b48fe19d159ecd7ddb4 = {};
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({ label: '突击队队员姓名',hidden:true, name: 'TJD_DUIYUANNAME',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({ label: '突击队队员姓名',hidden:false, name: 'TJD_DUIYUANNAMEName',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({ label: '所在单位',hidden:true, name: 'TJD_DANWEI',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({ label: '所在单位',hidden:false, name: 'TJD_DANWEIName',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '年龄',hidden:false, name: 'TJD_AGE',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({ label: '职务',hidden:true, name: 'TJD_DUIZHANGNAME',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({ label: '职务',hidden:false, name: 'TJD_DUIZHANGNAMEName',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '任务内容',hidden:false, name: 'TJD_ZHIWU',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '预留字段',hidden:true, name: 'TJD_FILED_USERNAME',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '预留字段1',hidden:true, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
var table278e1440a4fff84014ab785f7e8034d55b77KeyWordIn = "";    
var table278e1440a4fff84014ab785f7e8034d55b77ParamIn = "";    
var table278e1440a4fff84014ab785f7e8034d55b77SelectRow = {     
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
var table278e1440a4fff84014ab785f7e8034d55b77LoadComplete = {     
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
var table278e1440a4fff84014ab785f7e8034d55b77BeforeEditCell = {        
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
var table278e1440a4fff84014ab785f7e8034d55b77OndblClickRow = {     
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
var table278e1440a4fff84014ab785f7e8034d55b77OnRightClickRow = {     
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
var table278e1440a4fff84014ab785f7e8034d55b77GridComplete = {     
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
var table278e1440a4fff84014ab785f7e8034d55b77OnCellSelect = {     
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
var table278e1440a4fff84014ab785f7e8034d55b77LoadBeforeSend = {        
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
function table278e1440a4fff84014ab785f7e8034d55b77Reload(pid){
	var _isInvalid = true;
	$("#table278e1440a4fff84014ab785f7e8034d55b77").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table278e1440a4fff84014ab785f7e8034d55b77Pid = pid;
		}
		return false;
	}
	window.table278e1440a4fff84014ab785f7e8034d55b77Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table278e1440a4fff84014ab785f7e8034d55b77Reload();
};
function table278e1440a4fff84014ab785f7e8034d55b77TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table278e1440a4fff84014ab785f7e8034d55b77Pid == 'undefined' || window.table278e1440a4fff84014ab785f7e8034d55b77Pid!=null){
table278e1440a4fff84014ab785f7e8034d55b77Reload(window.table278e1440a4fff84014ab785f7e8034d55b77Pid);
}
}
var tablecmtable278e1440a4fff84014ab785f7e8034d55b77 = [];
var uniqueColtable278e1440a4fff84014ab785f7e8034d55b77 = [];
var uniqueColTitletable278e1440a4fff84014ab785f7e8034d55b77 = [];
var defaultValuetable278e1440a4fff84014ab785f7e8034d55b77 = {};
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '申请编号',hidden:false, name: 'APPLICATION_NUMBER',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ label: '申请单位',hidden:true, name: 'APPLICATION_UNIT',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ label: '申请单位',hidden:false, name: 'APPLICATION_UNITName',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '突击队名称',hidden:false, name: 'COMMANDOES_NAME',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '突击队队长', formatter:function(cellvalue, options, rowObject){return fomrt(cellvalue, options, rowObject);}, hidden:true, name: 'COMMANDOES_CAPTAINS',align:'center',  width: '80px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '突击队队员', formatter:function(cellvalue, options, rowObject){return fomrtName(cellvalue, options, rowObject);}, hidden:true, name: 'COMMANDOES_TEAM_NAME',align:'left',  width: '200px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '突击队队员单位', formatter:function(cellvalue, options, rowObject){return fomrtDept(cellvalue, options, rowObject);}, hidden:true, name: 'COMMANDOES_TEAM_DEPT',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '突击队队员年龄', formatter:function(cellvalue, options, rowObject){return fomrtAge(cellvalue, options, rowObject);}, hidden:true, name: 'COMMANDOES_TEAM_AGE',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '突击队队员负责任务', formatter:function(cellvalue, options, rowObject){return fomrtTask(cellvalue, options, rowObject);}, hidden:true, name: 'COMMANDOES_TEAM_TASK',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '队员人数', formatter:function(cellvalue, options, rowObject){return fomrtConut(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_TEAM_COUNT',align:'center',  width: '80px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '成立时间', formatter:format, hidden:false, name: 'COMMANDOES_DATE',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '计划完成任务时间', formatter:format, hidden:false, name: 'COMMANDOES_TASK_DATE',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预期收益',hidden:true, name: 'EXPECTED_INCOME',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '主题',hidden:false, name: 'COMMANDOES_THEME',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ label: '突击队类型',hidden:true, name: 'COMMANDOES_TYPE',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ label: '突击队类型',hidden:false, name: 'COMMANDOES_TYPEName',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR14',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段',hidden:true, name: 'ATTR15',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR16',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR17',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR18',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR19',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR20',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'center',  width: '150px'});tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'center',  width: '150px'});tablecmtable278e1440a4fff84014ab785f7e8034d55b77.push({ sortable:false,label: '流程运转', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn2175772b8b91404e473b49be2a251520b814',align:'left',  width: '150px'});	var searchNamestable278e1440a4fff84014ab785f7e8034d55b77 = []; 
searchNamestable278e1440a4fff84014ab785f7e8034d55b77.push('COMMANDOES_NAME');
$('#keyWordtable278e1440a4fff84014ab785f7e8034d55b77').attr('placeholder', '请输入突击队名称查询');
function searchDataKeyWordtable278e1440a4fff84014ab785f7e8034d55b77(){
	var keyWord = $.trim($("#keyWordtable278e1440a4fff84014ab785f7e8034d55b77").val()); 
 if($('#keyWordtable278e1440a4fff84014ab785f7e8034d55b77').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable278e1440a4fff84014ab785f7e8034d55b77.length;i++){ 
		var name = searchNamestable278e1440a4fff84014ab785f7e8034d55b77[i]; 
		param[name] = keyWord; 
	} 
if ($("#table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect").length>0){param.bpmState=$('#table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table278e1440a4fff84014ab785f7e8034d55b77KeyWordIn=JSON.stringify(param);
table278e1440a4fff84014ab785f7e8034d55b77ParamIn="";
	$('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable278e1440a4fff84014ab785f7e8034d55b77').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable278e1440a4fff84014ab785f7e8034d55b77();
	}
});
$('#keyWordBttable278e1440a4fff84014ab785f7e8034d55b77').bind('click', function() {
		searchDataKeyWordtable278e1440a4fff84014ab785f7e8034d55b77();
});
function table278e1440a4fff84014ab785f7e8034d55b77initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton41af8e0df602cc4d4369cf77b8b4fa3a1c2e").css('display','inline-block');
}else{
$("#tableToolbarButton41af8e0df602cc4d4369cf77b8b4fa3a1c2e").hide();
}
table278e1440a4fff84014ab785f7e8034d55b77searchWF();
}
function table278e1440a4fff84014ab785f7e8034d55b77searchWF(){
   if ($("#searchformtable278e1440a4fff84014ab785f7e8034d55b77").length>0){
      var para = serializeObject($("#searchformtable278e1440a4fff84014ab785f7e8034d55b77"));
      para.bpmState = $('#table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table278e1440a4fff84014ab785f7e8034d55b77SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('getRowData',rowid);if (status) {
compRef529437754845b7465e08e9641b79b0774051 = rowid;operaButtonName = null;
table2d5521239783924c6b48fe19d159ecd7ddb4Reload(rowid,rowdata,'');}
});
table278e1440a4fff84014ab785f7e8034d55b77LoadComplete.addEvent(function(data){
var rowdata = $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table2d5521239783924c6b48fe19d159ecd7ddb4Reload('null',rowdata,'');
}
});
table2d5521239783924c6b48fe19d159ecd7ddb4LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table2d5521239783924c6b48fe19d159ecd7ddb4").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3881da2180188279574e76caa/table2d5521239783924c6b48fe19d159ecd7ddb4/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable2d5521239783924c6b48fe19d159ecd7ddb4,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2d5521239783924c6b48fe19d159ecd7ddb4SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2d5521239783924c6b48fe19d159ecd7ddb4LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2d5521239783924c6b48fe19d159ecd7ddb4OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2d5521239783924c6b48fe19d159ecd7ddb4OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2d5521239783924c6b48fe19d159ecd7ddb4GridComplete.exec();
				    setTimeout(function(){var height = $("#table2d5521239783924c6b48fe19d159ecd7ddb4").closest('.ui-jqgrid-bdiv').height();
					$("#table2d5521239783924c6b48fe19d159ecd7ddb4norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2d5521239783924c6b48fe19d159ecd7ddb4norecords img").css("width","120px");
                 }else{
					    $("#table2d5521239783924c6b48fe19d159ecd7ddb4norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2d5521239783924c6b48fe19d159ecd7ddb4BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2d5521239783924c6b48fe19d159ecd7ddb4OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2d5521239783924c6b48fe19d159ecd7ddb4norecords").hide();
		   	    $("#Pagertable2d5521239783924c6b48fe19d159ecd7ddb4_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2d5521239783924c6b48fe19d159ecd7ddb4").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2d5521239783924c6b48fe19d159ecd7ddb4").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2d5521239783924c6b48fe19d159ecd7ddb4norecords").html() == null) {
						$("#table2d5521239783924c6b48fe19d159ecd7ddb4").parent().append("<div class='no_data' id='table2d5521239783924c6b48fe19d159ecd7ddb4norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2d5521239783924c6b48fe19d159ecd7ddb4norecords").show();
					$("#Pagertable2d5521239783924c6b48fe19d159ecd7ddb4_left").css("display", "none");
				}
table2d5521239783924c6b48fe19d159ecd7ddb4LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2d5521239783924c6b48fe19d159ecd7ddb4"
    });
$("#t_table2d5521239783924c6b48fe19d159ecd7ddb4").append($("#tableToolbartable2d5521239783924c6b48fe19d159ecd7ddb4"));$("#table278e1440a4fff84014ab785f7e8034d55b77").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3881da2180188279574e76caa/table278e1440a4fff84014ab785f7e8034d55b77/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable278e1440a4fff84014ab785f7e8034d55b77,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table278e1440a4fff84014ab785f7e8034d55b77SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table278e1440a4fff84014ab785f7e8034d55b77LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table278e1440a4fff84014ab785f7e8034d55b77OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table278e1440a4fff84014ab785f7e8034d55b77OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table278e1440a4fff84014ab785f7e8034d55b77GridComplete.exec();
				    setTimeout(function(){var height = $("#table278e1440a4fff84014ab785f7e8034d55b77").closest('.ui-jqgrid-bdiv').height();
					$("#table278e1440a4fff84014ab785f7e8034d55b77norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table278e1440a4fff84014ab785f7e8034d55b77norecords img").css("width","120px");
                 }else{
					    $("#table278e1440a4fff84014ab785f7e8034d55b77norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table278e1440a4fff84014ab785f7e8034d55b77BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table278e1440a4fff84014ab785f7e8034d55b77OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table278e1440a4fff84014ab785f7e8034d55b77norecords").hide();
		   	    $("#Pagertable278e1440a4fff84014ab785f7e8034d55b77_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table278e1440a4fff84014ab785f7e8034d55b77").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table278e1440a4fff84014ab785f7e8034d55b77").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table278e1440a4fff84014ab785f7e8034d55b77norecords").html() == null) {
						$("#table278e1440a4fff84014ab785f7e8034d55b77").parent().append("<div class='no_data' id='table278e1440a4fff84014ab785f7e8034d55b77norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table278e1440a4fff84014ab785f7e8034d55b77norecords").show();
					$("#Pagertable278e1440a4fff84014ab785f7e8034d55b77_left").css("display", "none");
				}
table278e1440a4fff84014ab785f7e8034d55b77LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable278e1440a4fff84014ab785f7e8034d55b77"
    });
table278e1440a4fff84014ab785f7e8034d55b77Reload();
$("#t_table278e1440a4fff84014ab785f7e8034d55b77").append($("#tableToolbartable278e1440a4fff84014ab785f7e8034d55b77"));function searchDatatable278e1440a4fff84014ab785f7e8034d55b77(){
 var para = serializeObjectForEform($("#searchformtable278e1440a4fff84014ab785f7e8034d55b77"));
 para.bpmState = $('#table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table278e1440a4fff84014ab785f7e8034d55b77KeyWordIn="";
table278e1440a4fff84014ab785f7e8034d55b77ParamIn=JSON.stringify(para);
	$('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable278e1440a4fff84014ab785f7e8034d55b77").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable278e1440a4fff84014ab785f7e8034d55b77').bind('click',function(){
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
'400px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtable278e1440a4fff84014ab785f7e8034d55b77'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable278e1440a4fff84014ab785f7e8034d55b77(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable278e1440a4fff84014ab785f7e8034d55b77")); searchDatatable278e1440a4fff84014ab785f7e8034d55b77(); layer.close(index); return false;
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
$('#COMMANDOES_DATE_START_button').click(function(e){
			$('#COMMANDOES_DATE_START').datepicker('show');
			$('#COMMANDOES_DATE_START').datepicker().trigger('click');
}); 
$('#COMMANDOES_DATE_END_button').click(function(e){
			$('#COMMANDOES_DATE_END').datepicker('show');
			$('#COMMANDOES_DATE_END').datepicker().trigger('click');
}); 
$('#COMMANDOES_TASK_DATE_START_button').click(function(e){
			$('#COMMANDOES_TASK_DATE_START').datepicker('show');
			$('#COMMANDOES_TASK_DATE_START').datepicker().trigger('click');
}); 
$('#COMMANDOES_TASK_DATE_END_button').click(function(e){
			$('#COMMANDOES_TASK_DATE_END').datepicker('show');
			$('#COMMANDOES_TASK_DATE_END').datepicker().trigger('click');
}); 
$('#table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect').bind('change',function(){
table278e1440a4fff84014ab785f7e8034d55b77initWorkFlow($(this).val());
});
$("#tableToolbarButton994cfd5d74db8c464118d21209cc2610ee53").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d89486dca018948b9e6450896&grid=table278e1440a4fff84014ab785f7e8034d55b77'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton6c507dcb494a794b7479c9c4d701cd149983").bind('click',function(event){var row = $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('getDataIDs');
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
var url ='platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/download';
var json = row.join(',');
$("<form action='"+url+"' method = 'post' style = 'display:none'><input name='json' value='"+json+"' /></form>").appendTo('body').submit().remove();});
$("#tableToolbarButton41af8e0df602cc4d4369cf77b8b4fa3a1c2e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_YOUTH_RECORD&isbpm=Y&dbid=2c908c1d89486dca0189487ba1f20638', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3881da2180188279574e76caa',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table278e1440a4fff84014ab785f7e8034d55b77').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton41af8e0df602cc4d4369cf77b8b4fa3a1c2e").hide();
;});	 
