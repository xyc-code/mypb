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

function redraw402811817f241b5d017f2ebac61206da(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817f241b5d017f2ebac61206da").width();
		var win_height = $("#402811817f241b5d017f2ebac61206da").height();
		$('#402811817f241b5d017f2ebac61206da').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#402811817f241b5d017f2ebac61206da').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#402811817f241b5d017f2ebac61206da').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817f241b5d017f2ebac61206da").width();
	setTimeout(function(){redraw402811817f241b5d017f2ebac61206da(win_width);},500);
});
var compRefbd0b8b406bfcec4b2b0a8d96497cd129ef83='';
var tablef6ab1b986bbef34e8af8ac51e021114e6a17KeyWordIn = "";    
var tablef6ab1b986bbef34e8af8ac51e021114e6a17ParamIn = "";    
var tablef6ab1b986bbef34e8af8ac51e021114e6a17SelectRow = {     
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17LoadComplete = {     
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17BeforeEditCell = {        
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17OndblClickRow = {     
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17OnRightClickRow = {     
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17GridComplete = {     
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17OnCellSelect = {     
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
var tablef6ab1b986bbef34e8af8ac51e021114e6a17LoadBeforeSend = {        
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
function tablef6ab1b986bbef34e8af8ac51e021114e6a17Reload(pid){
	var _isInvalid = true;
	$("#tablef6ab1b986bbef34e8af8ac51e021114e6a17").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef6ab1b986bbef34e8af8ac51e021114e6a17Pid = pid;
		}
		return false;
	}
	window.tablef6ab1b986bbef34e8af8ac51e021114e6a17Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef6ab1b986bbef34e8af8ac51e021114e6a17').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablef6ab1b986bbef34e8af8ac51e021114e6a17Reload();
};
function tablef6ab1b986bbef34e8af8ac51e021114e6a17TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef6ab1b986bbef34e8af8ac51e021114e6a17Pid == 'undefined' || window.tablef6ab1b986bbef34e8af8ac51e021114e6a17Pid!=null){
tablef6ab1b986bbef34e8af8ac51e021114e6a17Reload(window.tablef6ab1b986bbef34e8af8ac51e021114e6a17Pid);
}
}
var tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17 = [];
var uniqueColtablef6ab1b986bbef34e8af8ac51e021114e6a17 = [];
var uniqueColTitletablef6ab1b986bbef34e8af8ac51e021114e6a17 = [];
var defaultValuetablef6ab1b986bbef34e8af8ac51e021114e6a17 = {};
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({label: 'FK_SUB_COL_ID',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({label: '姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({label: '转出党支部',hidden:false, name: 'OUT_PARTY_ORG',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({ label: '党员类型',hidden:true, name: 'PARTY_MEMBER_TYPE',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({ label: '党员类型',hidden:false, name: 'PARTY_MEMBER_TYPEName',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({label: '目的支部',hidden:false, name: 'P_IN_PARTY_ORG',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({ label: '转出类别',hidden:true, name: 'P_TRANSFER_TYPE',align:'left',  width: '150px'});
tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17.push({ label: '转出类别',hidden:false, name: 'P_TRANSFER_TYPEName',align:'left',  width: '150px'});
var tableafaf7602a9b50849bc688537830a1a60ac21KeyWordIn = "";    
var tableafaf7602a9b50849bc688537830a1a60ac21ParamIn = "";    
var tableafaf7602a9b50849bc688537830a1a60ac21SelectRow = {     
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
var tableafaf7602a9b50849bc688537830a1a60ac21LoadComplete = {     
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
var tableafaf7602a9b50849bc688537830a1a60ac21BeforeEditCell = {        
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
var tableafaf7602a9b50849bc688537830a1a60ac21OndblClickRow = {     
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
var tableafaf7602a9b50849bc688537830a1a60ac21OnRightClickRow = {     
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
var tableafaf7602a9b50849bc688537830a1a60ac21GridComplete = {     
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
var tableafaf7602a9b50849bc688537830a1a60ac21OnCellSelect = {     
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
var tableafaf7602a9b50849bc688537830a1a60ac21LoadBeforeSend = {        
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
function tableafaf7602a9b50849bc688537830a1a60ac21Reload(pid){
	var _isInvalid = true;
	$("#tableafaf7602a9b50849bc688537830a1a60ac21").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableafaf7602a9b50849bc688537830a1a60ac21Pid = pid;
		}
		return false;
	}
	window.tableafaf7602a9b50849bc688537830a1a60ac21Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tableafaf7602a9b50849bc688537830a1a60ac21Reload();
};
function tableafaf7602a9b50849bc688537830a1a60ac21TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableafaf7602a9b50849bc688537830a1a60ac21Pid == 'undefined' || window.tableafaf7602a9b50849bc688537830a1a60ac21Pid!=null){
tableafaf7602a9b50849bc688537830a1a60ac21Reload(window.tableafaf7602a9b50849bc688537830a1a60ac21Pid);
}
}
var tablecmtableafaf7602a9b50849bc688537830a1a60ac21 = [];
var uniqueColtableafaf7602a9b50849bc688537830a1a60ac21 = [];
var uniqueColTitletableafaf7602a9b50849bc688537830a1a60ac21 = [];
var defaultValuetableafaf7602a9b50849bc688537830a1a60ac21 = {};
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '自动编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '上报日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '上报人',hidden:false, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '上报部门',hidden:false, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '所在党支部:',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtableafaf7602a9b50849bc688537830a1a60ac21.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function tableafaf7602a9b50849bc688537830a1a60ac21initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtone09ed603b54b3e44d4e907ac9bdea15b3710").css('display','inline-block');
}else{
$("#tableToolbarButtone09ed603b54b3e44d4e907ac9bdea15b3710").hide();
}
tableafaf7602a9b50849bc688537830a1a60ac21searchWF();
}
function tableafaf7602a9b50849bc688537830a1a60ac21searchWF(){
   if ($("#searchformtableafaf7602a9b50849bc688537830a1a60ac21").length>0){
      var para = serializeObject($("#searchformtableafaf7602a9b50849bc688537830a1a60ac21"));
      para.bpmState = $('#tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
	var searchNamestableafaf7602a9b50849bc688537830a1a60ac21 = []; 
searchNamestableafaf7602a9b50849bc688537830a1a60ac21.push('REQUEST_USER');
$('#keyWordtableafaf7602a9b50849bc688537830a1a60ac21').attr('placeholder', '请输入上报人查询');
function searchDataKeyWordtableafaf7602a9b50849bc688537830a1a60ac21(){
	var keyWord = $.trim($("#keyWordtableafaf7602a9b50849bc688537830a1a60ac21").val()); 
 if($('#keyWordtableafaf7602a9b50849bc688537830a1a60ac21').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestableafaf7602a9b50849bc688537830a1a60ac21.length;i++){ 
		var name = searchNamestableafaf7602a9b50849bc688537830a1a60ac21[i]; 
		param[name] = keyWord; 
	} 
if ($("#tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect").length>0){param.bpmState=$('#tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tableafaf7602a9b50849bc688537830a1a60ac21KeyWordIn=JSON.stringify(param);
tableafaf7602a9b50849bc688537830a1a60ac21ParamIn="";
	$('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtableafaf7602a9b50849bc688537830a1a60ac21').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtableafaf7602a9b50849bc688537830a1a60ac21();
	}
});
$('#keyWordBttableafaf7602a9b50849bc688537830a1a60ac21').bind('click', function() {
		searchDataKeyWordtableafaf7602a9b50849bc688537830a1a60ac21();
});
;$(document).ready(function(){ 

tableafaf7602a9b50849bc688537830a1a60ac21SelectRow.addEvent(function(rowid,status){
var rowdata = $('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('getRowData',rowid);if (status) {
compRefbd0b8b406bfcec4b2b0a8d96497cd129ef83 = rowid;operaButtonName = null;
tablef6ab1b986bbef34e8af8ac51e021114e6a17Reload(rowid,rowdata,'');}
});
tableafaf7602a9b50849bc688537830a1a60ac21LoadComplete.addEvent(function(data){
var rowdata = $('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
tablef6ab1b986bbef34e8af8ac51e021114e6a17Reload('null',rowdata,'');
}
});
tablef6ab1b986bbef34e8af8ac51e021114e6a17LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#tablef6ab1b986bbef34e8af8ac51e021114e6a17").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f241b5d017f2ebac61206da/tablef6ab1b986bbef34e8af8ac51e021114e6a17/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtablef6ab1b986bbef34e8af8ac51e021114e6a17,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef6ab1b986bbef34e8af8ac51e021114e6a17SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef6ab1b986bbef34e8af8ac51e021114e6a17LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef6ab1b986bbef34e8af8ac51e021114e6a17OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef6ab1b986bbef34e8af8ac51e021114e6a17OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef6ab1b986bbef34e8af8ac51e021114e6a17GridComplete.exec();
				    setTimeout(function(){var height = $("#tablef6ab1b986bbef34e8af8ac51e021114e6a17").closest('.ui-jqgrid-bdiv').height();
					$("#tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords img").css("width","120px");
                 }else{
					    $("#tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef6ab1b986bbef34e8af8ac51e021114e6a17BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef6ab1b986bbef34e8af8ac51e021114e6a17OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords").hide();
		   	    $("#Pagertablef6ab1b986bbef34e8af8ac51e021114e6a17_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef6ab1b986bbef34e8af8ac51e021114e6a17").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef6ab1b986bbef34e8af8ac51e021114e6a17").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords").html() == null) {
						$("#tablef6ab1b986bbef34e8af8ac51e021114e6a17").parent().append("<div class='no_data' id='tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef6ab1b986bbef34e8af8ac51e021114e6a17norecords").show();
					$("#Pagertablef6ab1b986bbef34e8af8ac51e021114e6a17_left").css("display", "none");
				}
tablef6ab1b986bbef34e8af8ac51e021114e6a17LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef6ab1b986bbef34e8af8ac51e021114e6a17"
    });
$("#t_tablef6ab1b986bbef34e8af8ac51e021114e6a17").append($("#tableToolbartablef6ab1b986bbef34e8af8ac51e021114e6a17"));$("#tableafaf7602a9b50849bc688537830a1a60ac21").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f241b5d017f2ebac61206da/tableafaf7602a9b50849bc688537830a1a60ac21/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableafaf7602a9b50849bc688537830a1a60ac21,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableafaf7602a9b50849bc688537830a1a60ac21SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableafaf7602a9b50849bc688537830a1a60ac21LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableafaf7602a9b50849bc688537830a1a60ac21OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableafaf7602a9b50849bc688537830a1a60ac21OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableafaf7602a9b50849bc688537830a1a60ac21GridComplete.exec();
				    setTimeout(function(){var height = $("#tableafaf7602a9b50849bc688537830a1a60ac21").closest('.ui-jqgrid-bdiv').height();
					$("#tableafaf7602a9b50849bc688537830a1a60ac21norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableafaf7602a9b50849bc688537830a1a60ac21norecords img").css("width","120px");
                 }else{
					    $("#tableafaf7602a9b50849bc688537830a1a60ac21norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableafaf7602a9b50849bc688537830a1a60ac21BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableafaf7602a9b50849bc688537830a1a60ac21OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableafaf7602a9b50849bc688537830a1a60ac21norecords").hide();
		   	    $("#Pagertableafaf7602a9b50849bc688537830a1a60ac21_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableafaf7602a9b50849bc688537830a1a60ac21").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableafaf7602a9b50849bc688537830a1a60ac21").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableafaf7602a9b50849bc688537830a1a60ac21norecords").html() == null) {
						$("#tableafaf7602a9b50849bc688537830a1a60ac21").parent().append("<div class='no_data' id='tableafaf7602a9b50849bc688537830a1a60ac21norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableafaf7602a9b50849bc688537830a1a60ac21norecords").show();
					$("#Pagertableafaf7602a9b50849bc688537830a1a60ac21_left").css("display", "none");
				}
tableafaf7602a9b50849bc688537830a1a60ac21LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableafaf7602a9b50849bc688537830a1a60ac21"
    });
tableafaf7602a9b50849bc688537830a1a60ac21Reload();
$("#t_tableafaf7602a9b50849bc688537830a1a60ac21").append($("#tableToolbartableafaf7602a9b50849bc688537830a1a60ac21"));$("#tableToolbarButtoneea9a95578db7b4e9698abb512af103abd7a").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f241b5d017f24306e180254&grid=tableafaf7602a9b50849bc688537830a1a60ac21'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtone09ed603b54b3e44d4e907ac9bdea15b3710").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_TRANSFER&isbpm=Y&dbid=402811817f241b5d017f2432f2ba0255', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817f241b5d017f2ebac61206da',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableafaf7602a9b50849bc688537830a1a60ac21').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtone09ed603b54b3e44d4e907ac9bdea15b3710").hide();
$('#tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect').bind('change',function(){
tableafaf7602a9b50849bc688537830a1a60ac21initWorkFlow($(this).val());
});
function searchDatatableafaf7602a9b50849bc688537830a1a60ac21(){
 var para = serializeObjectForEform($("#searchformtableafaf7602a9b50849bc688537830a1a60ac21"));
 para.bpmState = $('#tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tableafaf7602a9b50849bc688537830a1a60ac21KeyWordIn="";
tableafaf7602a9b50849bc688537830a1a60ac21ParamIn=JSON.stringify(para);
	$('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtableafaf7602a9b50849bc688537830a1a60ac21").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltableafaf7602a9b50849bc688537830a1a60ac21').bind('click',function(){
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
	content: $('#searchDialogtableafaf7602a9b50849bc688537830a1a60ac21'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatableafaf7602a9b50849bc688537830a1a60ac21(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtableafaf7602a9b50849bc688537830a1a60ac21")); searchDatatableafaf7602a9b50849bc688537830a1a60ac21(); layer.close(index); return false;
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
;});	 
