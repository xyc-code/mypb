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

function redraw948e83e3938bb70a0193903e2a03477a(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3938bb70a0193903e2a03477a").width();
		var win_height = $("#948e83e3938bb70a0193903e2a03477a").height();
		$('#948e83e3938bb70a0193903e2a03477a').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e3938bb70a0193903e2a03477a').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e3938bb70a0193903e2a03477a').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3938bb70a0193903e2a03477a").width();
	setTimeout(function(){redraw948e83e3938bb70a0193903e2a03477a(win_width);},500);
});
var compRefad2bd6b93df1944c92588a9db526779d7713='';
var table2a947660ff8a7a4691098a13ab5bbe120620KeyWordIn = "";    
var table2a947660ff8a7a4691098a13ab5bbe120620ParamIn = "";    
var table2a947660ff8a7a4691098a13ab5bbe120620SelectRow = {     
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
var table2a947660ff8a7a4691098a13ab5bbe120620LoadComplete = {     
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
var table2a947660ff8a7a4691098a13ab5bbe120620BeforeEditCell = {        
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
var table2a947660ff8a7a4691098a13ab5bbe120620OndblClickRow = {     
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
var table2a947660ff8a7a4691098a13ab5bbe120620OnRightClickRow = {     
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
var table2a947660ff8a7a4691098a13ab5bbe120620GridComplete = {     
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
var table2a947660ff8a7a4691098a13ab5bbe120620OnCellSelect = {     
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
var table2a947660ff8a7a4691098a13ab5bbe120620LoadBeforeSend = {        
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
function table2a947660ff8a7a4691098a13ab5bbe120620Reload(pid){
	var _isInvalid = true;
	$("#table2a947660ff8a7a4691098a13ab5bbe120620").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2a947660ff8a7a4691098a13ab5bbe120620Pid = pid;
		}
		return false;
	}
	window.table2a947660ff8a7a4691098a13ab5bbe120620Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2a947660ff8a7a4691098a13ab5bbe120620').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2a947660ff8a7a4691098a13ab5bbe120620TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2a947660ff8a7a4691098a13ab5bbe120620Pid == 'undefined' || window.table2a947660ff8a7a4691098a13ab5bbe120620Pid!=null){
table2a947660ff8a7a4691098a13ab5bbe120620Reload(window.table2a947660ff8a7a4691098a13ab5bbe120620Pid);
}
}
var tablecmtable2a947660ff8a7a4691098a13ab5bbe120620 = [];
var uniqueColtable2a947660ff8a7a4691098a13ab5bbe120620 = [];
var uniqueColTitletable2a947660ff8a7a4691098a13ab5bbe120620 = [];
var defaultValuetable2a947660ff8a7a4691098a13ab5bbe120620 = {};
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '序号',hidden:false, name: 'XH',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '工作分类',hidden:false, name: 'WORK_TYPE',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '主要内容',hidden:false, name: 'MAIN_CONTENT',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '内容分解',hidden:false, name: 'CONTENT_LIST',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '时间节点', formatter:format, hidden:false, name: 'DATE_CHECK',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({ label: '完成情况',hidden:true, name: 'WORK_STATUS',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({ label: '完成情况',hidden:false, name: 'WORK_STATUSName',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '备注',hidden:false, name: 'REMARK',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '主表ID',hidden:true, name: 'FK_ID',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '填写年度',hidden:true, name: 'WORK_YEAR',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '填写季度',hidden:true, name: 'WORK_JD',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '历史表ID',hidden:true, name: 'HIST_ID',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable2a947660ff8a7a4691098a13ab5bbe120620.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
	var searchNamestable2a947660ff8a7a4691098a13ab5bbe120620 = []; 
searchNamestable2a947660ff8a7a4691098a13ab5bbe120620.push('CONTENT_LIST');
$('#keyWordtable2a947660ff8a7a4691098a13ab5bbe120620').attr('placeholder', '请输入内容分解查询');
function searchDataKeyWordtable2a947660ff8a7a4691098a13ab5bbe120620(){
	var keyWord = $.trim($("#keyWordtable2a947660ff8a7a4691098a13ab5bbe120620").val()); 
 if($('#keyWordtable2a947660ff8a7a4691098a13ab5bbe120620').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable2a947660ff8a7a4691098a13ab5bbe120620.length;i++){ 
		var name = searchNamestable2a947660ff8a7a4691098a13ab5bbe120620[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table2a947660ff8a7a4691098a13ab5bbe120620KeyWordIn=JSON.stringify(param);
table2a947660ff8a7a4691098a13ab5bbe120620ParamIn="";
	$('#table2a947660ff8a7a4691098a13ab5bbe120620').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable2a947660ff8a7a4691098a13ab5bbe120620').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable2a947660ff8a7a4691098a13ab5bbe120620();
	}
});
$('#keyWordBttable2a947660ff8a7a4691098a13ab5bbe120620').bind('click', function() {
		searchDataKeyWordtable2a947660ff8a7a4691098a13ab5bbe120620();
});
var tableaaf2f914472161491f69faa073e1bca92be4KeyWordIn = "";    
var tableaaf2f914472161491f69faa073e1bca92be4ParamIn = "";    
var tableaaf2f914472161491f69faa073e1bca92be4SelectRow = {     
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
var tableaaf2f914472161491f69faa073e1bca92be4LoadComplete = {     
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
var tableaaf2f914472161491f69faa073e1bca92be4BeforeEditCell = {        
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
var tableaaf2f914472161491f69faa073e1bca92be4OndblClickRow = {     
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
var tableaaf2f914472161491f69faa073e1bca92be4OnRightClickRow = {     
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
var tableaaf2f914472161491f69faa073e1bca92be4GridComplete = {     
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
var tableaaf2f914472161491f69faa073e1bca92be4OnCellSelect = {     
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
var tableaaf2f914472161491f69faa073e1bca92be4LoadBeforeSend = {        
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
function tableaaf2f914472161491f69faa073e1bca92be4Reload(pid){
	var _isInvalid = true;
	$("#tableaaf2f914472161491f69faa073e1bca92be4").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableaaf2f914472161491f69faa073e1bca92be4Pid = pid;
		}
		return false;
	}
	window.tableaaf2f914472161491f69faa073e1bca92be4Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tableaaf2f914472161491f69faa073e1bca92be4Reload();
};
function tableaaf2f914472161491f69faa073e1bca92be4TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableaaf2f914472161491f69faa073e1bca92be4Pid == 'undefined' || window.tableaaf2f914472161491f69faa073e1bca92be4Pid!=null){
tableaaf2f914472161491f69faa073e1bca92be4Reload(window.tableaaf2f914472161491f69faa073e1bca92be4Pid);
}
}
var tablecmtableaaf2f914472161491f69faa073e1bca92be4 = [];
var uniqueColtableaaf2f914472161491f69faa073e1bca92be4 = [];
var uniqueColTitletableaaf2f914472161491f69faa073e1bca92be4 = [];
var defaultValuetableaaf2f914472161491f69faa073e1bca92be4 = {};
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '申请日期', formatter:format, hidden:false, name: 'REQUEST_DATE',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '自动编码',hidden:true, name: 'AUTO_CODE',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'center',  width: '150px'});tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'center',  width: '150px'});tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'center',  width: '150px'});tablecmtableaaf2f914472161491f69faa073e1bca92be4.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'center',  width: '150px'});	var searchNamestableaaf2f914472161491f69faa073e1bca92be4 = []; 
searchNamestableaaf2f914472161491f69faa073e1bca92be4.push('DEPT_NAME');
searchNamestableaaf2f914472161491f69faa073e1bca92be4.push('USER_NAME');
$('#keyWordtableaaf2f914472161491f69faa073e1bca92be4').attr('placeholder', '请输入申请单位、申请人查询');
function searchDataKeyWordtableaaf2f914472161491f69faa073e1bca92be4(){
	var keyWord = $.trim($("#keyWordtableaaf2f914472161491f69faa073e1bca92be4").val()); 
 if($('#keyWordtableaaf2f914472161491f69faa073e1bca92be4').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestableaaf2f914472161491f69faa073e1bca92be4.length;i++){ 
		var name = searchNamestableaaf2f914472161491f69faa073e1bca92be4[i]; 
		param[name] = keyWord; 
	} 
if ($("#tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect").length>0){param.bpmState=$('#tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tableaaf2f914472161491f69faa073e1bca92be4KeyWordIn=JSON.stringify(param);
tableaaf2f914472161491f69faa073e1bca92be4ParamIn="";
	$('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtableaaf2f914472161491f69faa073e1bca92be4').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtableaaf2f914472161491f69faa073e1bca92be4();
	}
});
$('#keyWordBttableaaf2f914472161491f69faa073e1bca92be4').bind('click', function() {
		searchDataKeyWordtableaaf2f914472161491f69faa073e1bca92be4();
});
function tableaaf2f914472161491f69faa073e1bca92be4initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton37dd9504685fce4eab78bce0f984d444d4ed").css('display','inline-block');
}else{
$("#tableToolbarButton37dd9504685fce4eab78bce0f984d444d4ed").hide();
}
tableaaf2f914472161491f69faa073e1bca92be4searchWF();
}
function tableaaf2f914472161491f69faa073e1bca92be4searchWF(){
   if ($("#searchformtableaaf2f914472161491f69faa073e1bca92be4").length>0){
      var para = serializeObject($("#searchformtableaaf2f914472161491f69faa073e1bca92be4"));
      para.bpmState = $('#tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tableaaf2f914472161491f69faa073e1bca92be4SelectRow.addEvent(function(rowid,status){
var rowdata = $('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('getRowData',rowid);if (status) {
compRefad2bd6b93df1944c92588a9db526779d7713 = rowid;operaButtonName = null;
table2a947660ff8a7a4691098a13ab5bbe120620Reload(rowid,rowdata,'');}
});
tableaaf2f914472161491f69faa073e1bca92be4LoadComplete.addEvent(function(data){
var rowdata = $('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table2a947660ff8a7a4691098a13ab5bbe120620Reload('null',rowdata,'');
}
});
table2a947660ff8a7a4691098a13ab5bbe120620LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table2a947660ff8a7a4691098a13ab5bbe120620").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3938bb70a0193903e2a03477a/table2a947660ff8a7a4691098a13ab5bbe120620/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable2a947660ff8a7a4691098a13ab5bbe120620,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2a947660ff8a7a4691098a13ab5bbe120620SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2a947660ff8a7a4691098a13ab5bbe120620LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2a947660ff8a7a4691098a13ab5bbe120620OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2a947660ff8a7a4691098a13ab5bbe120620OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2a947660ff8a7a4691098a13ab5bbe120620GridComplete.exec();
				    setTimeout(function(){var height = $("#table2a947660ff8a7a4691098a13ab5bbe120620").closest('.ui-jqgrid-bdiv').height();
					$("#table2a947660ff8a7a4691098a13ab5bbe120620norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2a947660ff8a7a4691098a13ab5bbe120620norecords img").css("width","120px");
                 }else{
					    $("#table2a947660ff8a7a4691098a13ab5bbe120620norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2a947660ff8a7a4691098a13ab5bbe120620BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2a947660ff8a7a4691098a13ab5bbe120620OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2a947660ff8a7a4691098a13ab5bbe120620norecords").hide();
		   	    $("#Pagertable2a947660ff8a7a4691098a13ab5bbe120620_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2a947660ff8a7a4691098a13ab5bbe120620").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2a947660ff8a7a4691098a13ab5bbe120620").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2a947660ff8a7a4691098a13ab5bbe120620norecords").html() == null) {
						$("#table2a947660ff8a7a4691098a13ab5bbe120620").parent().append("<div class='no_data' id='table2a947660ff8a7a4691098a13ab5bbe120620norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2a947660ff8a7a4691098a13ab5bbe120620norecords").show();
					$("#Pagertable2a947660ff8a7a4691098a13ab5bbe120620_left").css("display", "none");
				}
table2a947660ff8a7a4691098a13ab5bbe120620LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2a947660ff8a7a4691098a13ab5bbe120620"
    });
$("#t_table2a947660ff8a7a4691098a13ab5bbe120620").append($("#tableToolbartable2a947660ff8a7a4691098a13ab5bbe120620"));$("#tableaaf2f914472161491f69faa073e1bca92be4").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3938bb70a0193903e2a03477a/tableaaf2f914472161491f69faa073e1bca92be4/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableaaf2f914472161491f69faa073e1bca92be4,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableaaf2f914472161491f69faa073e1bca92be4SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableaaf2f914472161491f69faa073e1bca92be4LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableaaf2f914472161491f69faa073e1bca92be4OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableaaf2f914472161491f69faa073e1bca92be4OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableaaf2f914472161491f69faa073e1bca92be4GridComplete.exec();
				    setTimeout(function(){var height = $("#tableaaf2f914472161491f69faa073e1bca92be4").closest('.ui-jqgrid-bdiv').height();
					$("#tableaaf2f914472161491f69faa073e1bca92be4norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableaaf2f914472161491f69faa073e1bca92be4norecords img").css("width","120px");
                 }else{
					    $("#tableaaf2f914472161491f69faa073e1bca92be4norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableaaf2f914472161491f69faa073e1bca92be4BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableaaf2f914472161491f69faa073e1bca92be4OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableaaf2f914472161491f69faa073e1bca92be4norecords").hide();
		   	    $("#Pagertableaaf2f914472161491f69faa073e1bca92be4_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableaaf2f914472161491f69faa073e1bca92be4").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableaaf2f914472161491f69faa073e1bca92be4").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableaaf2f914472161491f69faa073e1bca92be4norecords").html() == null) {
						$("#tableaaf2f914472161491f69faa073e1bca92be4").parent().append("<div class='no_data' id='tableaaf2f914472161491f69faa073e1bca92be4norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableaaf2f914472161491f69faa073e1bca92be4norecords").show();
					$("#Pagertableaaf2f914472161491f69faa073e1bca92be4_left").css("display", "none");
				}
tableaaf2f914472161491f69faa073e1bca92be4LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableaaf2f914472161491f69faa073e1bca92be4"
    });
tableaaf2f914472161491f69faa073e1bca92be4Reload();
$("#t_tableaaf2f914472161491f69faa073e1bca92be4").append($("#tableToolbartableaaf2f914472161491f69faa073e1bca92be4"));function searchDatatableaaf2f914472161491f69faa073e1bca92be4(){
 var para = serializeObjectForEform($("#searchformtableaaf2f914472161491f69faa073e1bca92be4"));
 para.bpmState = $('#tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tableaaf2f914472161491f69faa073e1bca92be4KeyWordIn="";
tableaaf2f914472161491f69faa073e1bca92be4ParamIn=JSON.stringify(para);
	$('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtableaaf2f914472161491f69faa073e1bca92be4").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltableaaf2f914472161491f69faa073e1bca92be4').bind('click',function(){
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
	content: $('#searchDialogtableaaf2f914472161491f69faa073e1bca92be4'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatableaaf2f914472161491f69faa073e1bca92be4(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtableaaf2f914472161491f69faa073e1bca92be4")); searchDatatableaaf2f914472161491f69faa073e1bca92be4(); layer.close(index); return false;
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
$('#tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect').bind('change',function(){
tableaaf2f914472161491f69faa073e1bca92be4initWorkFlow($(this).val());
});
$("#tableToolbarButtonc71c6ff50d76984c7678283207620c887cee").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3938bb70a019390371fd244b4&grid=tableaaf2f914472161491f69faa073e1bca92be4'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton37dd9504685fce4eab78bce0f984d444d4ed").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3938bb70a0193903e2a03477a',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableaaf2f914472161491f69faa073e1bca92be4').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton37dd9504685fce4eab78bce0f984d444d4ed").hide();
$("#tableToolbarButtona7faccc9056bb6484b5b822b5a5ccb828f2f").bind('click',function(event){layer.open({                                                                     
	type: 2,                                                                     
	area: ['100%', '100%'],                                                      
	title: '维护重点工作',                                                                
	skin: 'bs-modal',                                                            
	maxmin: false,                                                               
	content: 'platform/eform/bpmsCRUDClient/toViewJsp/ljwhjszdgzwh_view'     
});});
;});	 
