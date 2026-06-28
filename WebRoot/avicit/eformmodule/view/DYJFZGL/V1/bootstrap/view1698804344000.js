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

function redraw2c9419a9899a619d01899b1550f60349(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c9419a9899a619d01899b1550f60349").width();
		var win_height = $("#2c9419a9899a619d01899b1550f60349").height();
		$('#2c9419a9899a619d01899b1550f60349').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c9419a9899a619d01899b1550f60349').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c9419a9899a619d01899b1550f60349').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c9419a9899a619d01899b1550f60349").width();
	setTimeout(function(){redraw2c9419a9899a619d01899b1550f60349(win_width);},500);
});
var compRefe029180d17e44d4bfdf8bd31f82baf6e2f8f='';
var table3cb0e75fa3419b461948150b19b840339f17KeyWordIn = "";    
var table3cb0e75fa3419b461948150b19b840339f17ParamIn = "";    
var table3cb0e75fa3419b461948150b19b840339f17SelectRow = {     
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
var table3cb0e75fa3419b461948150b19b840339f17LoadComplete = {     
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
var table3cb0e75fa3419b461948150b19b840339f17BeforeEditCell = {        
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
var table3cb0e75fa3419b461948150b19b840339f17OndblClickRow = {     
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
var table3cb0e75fa3419b461948150b19b840339f17OnRightClickRow = {     
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
var table3cb0e75fa3419b461948150b19b840339f17GridComplete = {     
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
var table3cb0e75fa3419b461948150b19b840339f17OnCellSelect = {     
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
var table3cb0e75fa3419b461948150b19b840339f17LoadBeforeSend = {        
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
function table3cb0e75fa3419b461948150b19b840339f17Reload(pid){
	var _isInvalid = true;
	$("#table3cb0e75fa3419b461948150b19b840339f17").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3cb0e75fa3419b461948150b19b840339f17Pid = pid;
		}
		return false;
	}
	window.table3cb0e75fa3419b461948150b19b840339f17Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3cb0e75fa3419b461948150b19b840339f17').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table3cb0e75fa3419b461948150b19b840339f17TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3cb0e75fa3419b461948150b19b840339f17Pid == 'undefined' || window.table3cb0e75fa3419b461948150b19b840339f17Pid!=null){
table3cb0e75fa3419b461948150b19b840339f17Reload(window.table3cb0e75fa3419b461948150b19b840339f17Pid);
}
}
var tablecmtable3cb0e75fa3419b461948150b19b840339f17 = [];
var uniqueColtable3cb0e75fa3419b461948150b19b840339f17 = [];
var uniqueColTitletable3cb0e75fa3419b461948150b19b840339f17 = [];
var defaultValuetable3cb0e75fa3419b461948150b19b840339f17 = {};
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '姓名',hidden:false, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '性别',hidden:false, name: 'SEX',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '身份证号',hidden:false, name: 'ID_NUMBER',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '党支部名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '党小组名称',hidden:false, name: 'ATTR1VAL',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '基础分扣分',hidden:false, name: 'FOUNDATIONS',align:'right',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '基础分扣分备注',hidden:false, name: 'FOUNDATIONS_CONTENT',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '奖励加分',hidden:false, name: 'REWARD',align:'right',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '奖励加分备注',hidden:false, name: 'REWARD_CONTENT',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '履职分',hidden:false, name: 'PERSONAL',align:'right',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '履职分备注',hidden:false, name: 'PERSONAL_CONTENT',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '惩处减分',hidden:false, name: 'PUNISH',align:'right',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '惩处减分备注',hidden:false, name: 'PUNISH_CONTENT',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '总分',hidden:false, name: 'INTEGRAL_CONTENT',align:'right',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '填写日期', formatter:format, hidden:false, name: 'INTEGRAL_DATE',align:'center',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '用户id',hidden:true, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '党支部id',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3cb0e75fa3419b461948150b19b840339f17.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
var table8044c90df21ddf41f489be57e0db29b5f07dKeyWordIn = "";    
var table8044c90df21ddf41f489be57e0db29b5f07dParamIn = "";    
var table8044c90df21ddf41f489be57e0db29b5f07dSelectRow = {     
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
var table8044c90df21ddf41f489be57e0db29b5f07dLoadComplete = {     
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
var table8044c90df21ddf41f489be57e0db29b5f07dBeforeEditCell = {        
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
var table8044c90df21ddf41f489be57e0db29b5f07dOndblClickRow = {     
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
var table8044c90df21ddf41f489be57e0db29b5f07dOnRightClickRow = {     
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
var table8044c90df21ddf41f489be57e0db29b5f07dGridComplete = {     
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
var table8044c90df21ddf41f489be57e0db29b5f07dOnCellSelect = {     
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
var table8044c90df21ddf41f489be57e0db29b5f07dLoadBeforeSend = {        
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
function table8044c90df21ddf41f489be57e0db29b5f07dReload(pid){
	var _isInvalid = true;
	$("#table8044c90df21ddf41f489be57e0db29b5f07d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8044c90df21ddf41f489be57e0db29b5f07dPid = pid;
		}
		return false;
	}
	window.table8044c90df21ddf41f489be57e0db29b5f07dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table8044c90df21ddf41f489be57e0db29b5f07dReload();
};
function table8044c90df21ddf41f489be57e0db29b5f07dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8044c90df21ddf41f489be57e0db29b5f07dPid == 'undefined' || window.table8044c90df21ddf41f489be57e0db29b5f07dPid!=null){
table8044c90df21ddf41f489be57e0db29b5f07dReload(window.table8044c90df21ddf41f489be57e0db29b5f07dPid);
}
}
var tablecmtable8044c90df21ddf41f489be57e0db29b5f07d = [];
var uniqueColtable8044c90df21ddf41f489be57e0db29b5f07d = [];
var uniqueColTitletable8044c90df21ddf41f489be57e0db29b5f07d = [];
var defaultValuetable8044c90df21ddf41f489be57e0db29b5f07d = {};
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({ label: '拟稿人',hidden:true, name: 'DRAFTSMAN',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({ label: '拟稿人',hidden:false, name: 'DRAFTSMANName',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '拟稿时间', formatter:format, hidden:false, name: 'DRAFTING_TIME',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({ label: '拟稿人部门',hidden:true, name: 'DEPT_ID',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({ label: '拟稿人部门',hidden:false, name: 'DEPT_IDName',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '当前季度',hidden:false, name: 'QUARTER',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '编号',hidden:false, name: 'NO',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({label: '联系电话',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable8044c90df21ddf41f489be57e0db29b5f07d.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn102932f7b7a662428e5b896cb9c00aa5621a',align:'left',  width: '150px'});function table8044c90df21ddf41f489be57e0db29b5f07dinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton28d30d84eb412d49725a6c916c18838a07c9").css('display','inline-block');
}else{
$("#tableToolbarButton28d30d84eb412d49725a6c916c18838a07c9").hide();
}
table8044c90df21ddf41f489be57e0db29b5f07dsearchWF();
}
function table8044c90df21ddf41f489be57e0db29b5f07dsearchWF(){
   if ($("#searchformtable8044c90df21ddf41f489be57e0db29b5f07d").length>0){
      var para = serializeObject($("#searchformtable8044c90df21ddf41f489be57e0db29b5f07d"));
      para.bpmState = $('#table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
	var searchNamestable8044c90df21ddf41f489be57e0db29b5f07d = []; 
searchNamestable8044c90df21ddf41f489be57e0db29b5f07d.push('QUARTER');
$('#keyWordtable8044c90df21ddf41f489be57e0db29b5f07d').attr('placeholder', '请输入当前季度查询');
function searchDataKeyWordtable8044c90df21ddf41f489be57e0db29b5f07d(){
	var keyWord = $.trim($("#keyWordtable8044c90df21ddf41f489be57e0db29b5f07d").val()); 
 if($('#keyWordtable8044c90df21ddf41f489be57e0db29b5f07d').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable8044c90df21ddf41f489be57e0db29b5f07d.length;i++){ 
		var name = searchNamestable8044c90df21ddf41f489be57e0db29b5f07d[i]; 
		param[name] = keyWord; 
	} 
if ($("#table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect").length>0){param.bpmState=$('#table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table8044c90df21ddf41f489be57e0db29b5f07dKeyWordIn=JSON.stringify(param);
table8044c90df21ddf41f489be57e0db29b5f07dParamIn="";
	$('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable8044c90df21ddf41f489be57e0db29b5f07d').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable8044c90df21ddf41f489be57e0db29b5f07d();
	}
});
$('#keyWordBttable8044c90df21ddf41f489be57e0db29b5f07d').bind('click', function() {
		searchDataKeyWordtable8044c90df21ddf41f489be57e0db29b5f07d();
});
;$(document).ready(function(){ 

table8044c90df21ddf41f489be57e0db29b5f07dSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('getRowData',rowid);if (status) {
compRefe029180d17e44d4bfdf8bd31f82baf6e2f8f = rowid;operaButtonName = null;
table3cb0e75fa3419b461948150b19b840339f17Reload(rowid,rowdata,'');}
});
table8044c90df21ddf41f489be57e0db29b5f07dLoadComplete.addEvent(function(data){
var rowdata = $('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table3cb0e75fa3419b461948150b19b840339f17Reload('null',rowdata,'');
}
});
table3cb0e75fa3419b461948150b19b840339f17LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table3cb0e75fa3419b461948150b19b840339f17").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c9419a9899a619d01899b1550f60349/table3cb0e75fa3419b461948150b19b840339f17/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable3cb0e75fa3419b461948150b19b840339f17,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3cb0e75fa3419b461948150b19b840339f17SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3cb0e75fa3419b461948150b19b840339f17LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3cb0e75fa3419b461948150b19b840339f17OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3cb0e75fa3419b461948150b19b840339f17OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3cb0e75fa3419b461948150b19b840339f17GridComplete.exec();
				    setTimeout(function(){var height = $("#table3cb0e75fa3419b461948150b19b840339f17").closest('.ui-jqgrid-bdiv').height();
					$("#table3cb0e75fa3419b461948150b19b840339f17norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3cb0e75fa3419b461948150b19b840339f17norecords img").css("width","120px");
                 }else{
					    $("#table3cb0e75fa3419b461948150b19b840339f17norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3cb0e75fa3419b461948150b19b840339f17BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3cb0e75fa3419b461948150b19b840339f17OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3cb0e75fa3419b461948150b19b840339f17norecords").hide();
		   	    $("#Pagertable3cb0e75fa3419b461948150b19b840339f17_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3cb0e75fa3419b461948150b19b840339f17").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3cb0e75fa3419b461948150b19b840339f17").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3cb0e75fa3419b461948150b19b840339f17norecords").html() == null) {
						$("#table3cb0e75fa3419b461948150b19b840339f17").parent().append("<div class='no_data' id='table3cb0e75fa3419b461948150b19b840339f17norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3cb0e75fa3419b461948150b19b840339f17norecords").show();
					$("#Pagertable3cb0e75fa3419b461948150b19b840339f17_left").css("display", "none");
				}
table3cb0e75fa3419b461948150b19b840339f17LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3cb0e75fa3419b461948150b19b840339f17"
    });
$("#t_table3cb0e75fa3419b461948150b19b840339f17").append($("#tableToolbartable3cb0e75fa3419b461948150b19b840339f17"));$("#table8044c90df21ddf41f489be57e0db29b5f07d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c9419a9899a619d01899b1550f60349/table8044c90df21ddf41f489be57e0db29b5f07d/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     param:JSON.stringify({bpmState:"all"}),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8044c90df21ddf41f489be57e0db29b5f07d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8044c90df21ddf41f489be57e0db29b5f07dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8044c90df21ddf41f489be57e0db29b5f07dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8044c90df21ddf41f489be57e0db29b5f07dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8044c90df21ddf41f489be57e0db29b5f07dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8044c90df21ddf41f489be57e0db29b5f07dGridComplete.exec();
				    setTimeout(function(){var height = $("#table8044c90df21ddf41f489be57e0db29b5f07d").closest('.ui-jqgrid-bdiv').height();
					$("#table8044c90df21ddf41f489be57e0db29b5f07dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8044c90df21ddf41f489be57e0db29b5f07dnorecords img").css("width","120px");
                 }else{
					    $("#table8044c90df21ddf41f489be57e0db29b5f07dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8044c90df21ddf41f489be57e0db29b5f07dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8044c90df21ddf41f489be57e0db29b5f07dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8044c90df21ddf41f489be57e0db29b5f07dnorecords").hide();
		   	    $("#Pagertable8044c90df21ddf41f489be57e0db29b5f07d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8044c90df21ddf41f489be57e0db29b5f07d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8044c90df21ddf41f489be57e0db29b5f07d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8044c90df21ddf41f489be57e0db29b5f07dnorecords").html() == null) {
						$("#table8044c90df21ddf41f489be57e0db29b5f07d").parent().append("<div class='no_data' id='table8044c90df21ddf41f489be57e0db29b5f07dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8044c90df21ddf41f489be57e0db29b5f07dnorecords").show();
					$("#Pagertable8044c90df21ddf41f489be57e0db29b5f07d_left").css("display", "none");
				}
table8044c90df21ddf41f489be57e0db29b5f07dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8044c90df21ddf41f489be57e0db29b5f07d"
    });
table8044c90df21ddf41f489be57e0db29b5f07dReload();
$("#t_table8044c90df21ddf41f489be57e0db29b5f07d").append($("#tableToolbartable8044c90df21ddf41f489be57e0db29b5f07d"));$('#table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect').bind('change',function(){
table8044c90df21ddf41f489be57e0db29b5f07dinitWorkFlow($(this).val());
});
function searchDatatable8044c90df21ddf41f489be57e0db29b5f07d(){
 var para = serializeObjectForEform($("#searchformtable8044c90df21ddf41f489be57e0db29b5f07d"));
 para.bpmState = $('#table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table8044c90df21ddf41f489be57e0db29b5f07dKeyWordIn="";
table8044c90df21ddf41f489be57e0db29b5f07dParamIn=JSON.stringify(para);
	$('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable8044c90df21ddf41f489be57e0db29b5f07d").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable8044c90df21ddf41f489be57e0db29b5f07d').bind('click',function(){
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
'300px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtable8044c90df21ddf41f489be57e0db29b5f07d'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable8044c90df21ddf41f489be57e0db29b5f07d(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable8044c90df21ddf41f489be57e0db29b5f07d")); searchDatatable8044c90df21ddf41f489be57e0db29b5f07d(); layer.close(index); return false;
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
$('#DRAFTSMANAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'DRAFTSMAN',textFiled:'DRAFTSMANAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#DRAFTING_TIME_START_button').click(function(e){
			$('#DRAFTING_TIME_START').datepicker('show');
			$('#DRAFTING_TIME_START').datepicker().trigger('click');
}); 
$('#DRAFTING_TIME_END_button').click(function(e){
			$('#DRAFTING_TIME_END').datepicker('show');
			$('#DRAFTING_TIME_END').datepicker().trigger('click');
}); 
$('#DEPT_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_ID',textFiled:'DEPT_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$("#tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c9419a9899b211701899b2cbc0c0349&grid=table8044c90df21ddf41f489be57e0db29b5f07d'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton28d30d84eb412d49725a6c916c18838a07c9").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_POINTS&isbpm=Y&dbid=2c9419a9899a619d01899b13b9e702d7', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c9419a9899a619d01899b1550f60349',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table8044c90df21ddf41f489be57e0db29b5f07d').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton28d30d84eb412d49725a6c916c18838a07c9").hide();
;});	 
