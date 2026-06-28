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

function redraw2c908c5290b915650190b97129fa2d90(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5290b915650190b97129fa2d90").width();
		var win_height = $("#2c908c5290b915650190b97129fa2d90").height();
		$('#2c908c5290b915650190b97129fa2d90').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c5290b915650190b97129fa2d90').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c5290b915650190b97129fa2d90').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5290b915650190b97129fa2d90").width();
	setTimeout(function(){redraw2c908c5290b915650190b97129fa2d90(win_width);},500);
});
var compRef74f5539d7a3ce34feb2a5ef5b5e73f041ccb='';
var table51de396a6f3fbc4f2a98d3689bc2d9df7450KeyWordIn = "";    
var table51de396a6f3fbc4f2a98d3689bc2d9df7450ParamIn = "";    
var table51de396a6f3fbc4f2a98d3689bc2d9df7450SelectRow = {     
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450LoadComplete = {     
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450BeforeEditCell = {        
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450OndblClickRow = {     
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450OnRightClickRow = {     
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450GridComplete = {     
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450OnCellSelect = {     
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
var table51de396a6f3fbc4f2a98d3689bc2d9df7450LoadBeforeSend = {        
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
function table51de396a6f3fbc4f2a98d3689bc2d9df7450Reload(pid){
	var _isInvalid = true;
	$("#table51de396a6f3fbc4f2a98d3689bc2d9df7450").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table51de396a6f3fbc4f2a98d3689bc2d9df7450Pid = pid;
		}
		return false;
	}
	window.table51de396a6f3fbc4f2a98d3689bc2d9df7450Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table51de396a6f3fbc4f2a98d3689bc2d9df7450TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table51de396a6f3fbc4f2a98d3689bc2d9df7450Pid == 'undefined' || window.table51de396a6f3fbc4f2a98d3689bc2d9df7450Pid!=null){
table51de396a6f3fbc4f2a98d3689bc2d9df7450Reload(window.table51de396a6f3fbc4f2a98d3689bc2d9df7450Pid);
}
}
var tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450 = [];
var uniqueColtable51de396a6f3fbc4f2a98d3689bc2d9df7450 = [];
var uniqueColTitletable51de396a6f3fbc4f2a98d3689bc2d9df7450 = [];
var defaultValuetable51de396a6f3fbc4f2a98d3689bc2d9df7450 = {};
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '上报内容', formatter:formattable51de396a6f3fbc4f2a98d3689bc2d9df7450Detail, hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
function formattable51de396a6f3fbc4f2a98d3689bc2d9df7450Detail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable51de396a6f3fbc4f2a98d3689bc2d9df7450Detail(\''+id+'\')">'+cellvalue+'</a>';
}function totable51de396a6f3fbc4f2a98d3689bc2d9df7450Detail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e390ba1eca0190ba8230832c1e&id='+id      
	});  
}tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '创建时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '50px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '50px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '外键',hidden:true, name: 'FCK_ID',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
var table47b76c9ca78a56416ee8e53c30a960ebf735KeyWordIn = "";    
var table47b76c9ca78a56416ee8e53c30a960ebf735ParamIn = "";    
var table47b76c9ca78a56416ee8e53c30a960ebf735SelectRow = {     
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
var table47b76c9ca78a56416ee8e53c30a960ebf735LoadComplete = {     
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
var table47b76c9ca78a56416ee8e53c30a960ebf735BeforeEditCell = {        
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
var table47b76c9ca78a56416ee8e53c30a960ebf735OndblClickRow = {     
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
var table47b76c9ca78a56416ee8e53c30a960ebf735OnRightClickRow = {     
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
var table47b76c9ca78a56416ee8e53c30a960ebf735GridComplete = {     
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
var table47b76c9ca78a56416ee8e53c30a960ebf735OnCellSelect = {     
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
var table47b76c9ca78a56416ee8e53c30a960ebf735LoadBeforeSend = {        
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
function table47b76c9ca78a56416ee8e53c30a960ebf735Reload(pid){
	var _isInvalid = true;
	$("#table47b76c9ca78a56416ee8e53c30a960ebf735").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table47b76c9ca78a56416ee8e53c30a960ebf735Pid = pid;
		}
		return false;
	}
	window.table47b76c9ca78a56416ee8e53c30a960ebf735Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.parms.loginUserId=pageParams.session.userId;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table47b76c9ca78a56416ee8e53c30a960ebf735Reload();
};
function table47b76c9ca78a56416ee8e53c30a960ebf735TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table47b76c9ca78a56416ee8e53c30a960ebf735Pid == 'undefined' || window.table47b76c9ca78a56416ee8e53c30a960ebf735Pid!=null){
table47b76c9ca78a56416ee8e53c30a960ebf735Reload(window.table47b76c9ca78a56416ee8e53c30a960ebf735Pid);
}
}
var tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735 = [];
var uniqueColtable47b76c9ca78a56416ee8e53c30a960ebf735 = [];
var uniqueColTitletable47b76c9ca78a56416ee8e53c30a960ebf735 = [];
var defaultValuetable47b76c9ca78a56416ee8e53c30a960ebf735 = {};
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '党委工作计划标题',hidden:false, name: 'PLAN_NAME',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ label: '主要负责人',hidden:true, name: 'MAIN_FZR',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ label: '主要负责人',hidden:false, name: 'MAIN_FZRName',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ label: '副主要负责人',hidden:true, name: 'F_MAIN_FZR',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ label: '副主要负责人',hidden:true, name: 'F_MAIN_FZRName',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '工作要求',hidden:false, name: 'WORK_YQ',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '基层党组织计划结束时间', formatter:format, hidden:false, name: 'PARTY_PLAN_JSSJ',align:'center',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '反馈时间', formatter:format, hidden:true, name: 'FK_DATE_TIME',align:'center',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({label: '主要负责人姓名',hidden:false, name: 'MAIN_FZR_NAME',align:'left',  width: '150px'});
tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});filterParams.parms={};
filterParams.parms.loginUserId=pageParams.session.userId;
;$(document).ready(function(){ 

table47b76c9ca78a56416ee8e53c30a960ebf735SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getRowData',rowid);if (status) {
compRef74f5539d7a3ce34feb2a5ef5b5e73f041ccb = rowid;operaButtonName = null;
table51de396a6f3fbc4f2a98d3689bc2d9df7450Reload(rowid,rowdata,'');}
});
table47b76c9ca78a56416ee8e53c30a960ebf735LoadComplete.addEvent(function(data){
var rowdata = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table51de396a6f3fbc4f2a98d3689bc2d9df7450Reload('null',rowdata,'');
}
});
table51de396a6f3fbc4f2a98d3689bc2d9df7450LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table51de396a6f3fbc4f2a98d3689bc2d9df7450").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b915650190b97129fa2d90/table51de396a6f3fbc4f2a98d3689bc2d9df7450/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable51de396a6f3fbc4f2a98d3689bc2d9df7450,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table51de396a6f3fbc4f2a98d3689bc2d9df7450SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table51de396a6f3fbc4f2a98d3689bc2d9df7450LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table51de396a6f3fbc4f2a98d3689bc2d9df7450OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table51de396a6f3fbc4f2a98d3689bc2d9df7450OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table51de396a6f3fbc4f2a98d3689bc2d9df7450GridComplete.exec();
				    setTimeout(function(){var height = $("#table51de396a6f3fbc4f2a98d3689bc2d9df7450").closest('.ui-jqgrid-bdiv').height();
					$("#table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords img").css("width","120px");
                 }else{
					    $("#table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table51de396a6f3fbc4f2a98d3689bc2d9df7450BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table51de396a6f3fbc4f2a98d3689bc2d9df7450OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords").hide();
		   	    $("#Pagertable51de396a6f3fbc4f2a98d3689bc2d9df7450_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table51de396a6f3fbc4f2a98d3689bc2d9df7450").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table51de396a6f3fbc4f2a98d3689bc2d9df7450").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords").html() == null) {
						$("#table51de396a6f3fbc4f2a98d3689bc2d9df7450").parent().append("<div class='no_data' id='table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table51de396a6f3fbc4f2a98d3689bc2d9df7450norecords").show();
					$("#Pagertable51de396a6f3fbc4f2a98d3689bc2d9df7450_left").css("display", "none");
				}
table51de396a6f3fbc4f2a98d3689bc2d9df7450LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable51de396a6f3fbc4f2a98d3689bc2d9df7450"
    });
$("#t_table51de396a6f3fbc4f2a98d3689bc2d9df7450").append($("#tableToolbartable51de396a6f3fbc4f2a98d3689bc2d9df7450"));$("#tableToolbarButton1f3b043e6ad92f48a908f10871ca0c7a21dd").bind('click',function() {                                                                       
	if (compRef74f5539d7a3ce34feb2a5ef5b5e73f041ccb == null || compRef74f5539d7a3ce34feb2a5ef5b5e73f041ccb=='' ) {              
		layer.alert('请先添加主表数据！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		 });                                                                                         
		return false;                                                                                  
	}                                                                                  
	if (pageParams.hasOwnProperty('isInsert') && pageParams.isInsert) {              
		layer.alert('请先保存表单！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		 });                                                                                         
	} else {                                                                                  
       var ids = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getGridParam', 'selarrrow');                            
	if (ids.length == 0) {                                                                          
		layer.alert('请选择主任务进行反馈！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (ids.length > 1) {                                                                    
		layer.alert('请选择一条主任务进行反馈！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowData = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getRowData', ids[0]);
       if(rowData.STATUS=="已完成"){
              layer.alert('该任务已结束！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 
         }                                                                     
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '添加',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390ba1eca0190ba8230832c1e&fkcol=FCK_ID&fkvalue='+compRef74f5539d7a3ce34feb2a5ef5b5e73f041ccb+'&grid=table51de396a6f3fbc4f2a98d3689bc2d9df7450',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton416532f33d4cb04a8ef89c15420a6ad54860").bind('click',function() {                                                                                       
	var ids = $('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').jqGrid('getGridParam', 'selarrrow');                            
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
           var idss = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getGridParam', 'selarrrow');                            
	if (idss.length == 0) {                                                                          
		layer.alert('请选择主任务进行反馈！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (idss.length > 1) {                                                                    
		layer.alert('请选择一条主任务进行反馈！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowDatas = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getRowData', idss[0]);
       if(rowDatas.STATUS=="已完成"){
              layer.alert('该任务已结束,不能进行编辑！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 
         }                                                                         
	var rowData = $('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390ba1eca0190ba8230832c1e&id=' + rowData.ID+'&fkcol=FCK_ID&fkvalue='+compRef74f5539d7a3ce34feb2a5ef5b5e73f041ccb+'&grid=table51de396a6f3fbc4f2a98d3689bc2d9df7450',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton06d99b547250e84194d8660ba852619778cf").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').jqGrid("delRowData", bpmsDeleteRows[l]);  				
			}else{																			
				bpmsDeleteIds.push(bpmsDeleteRows[l]);										
			}																				
		}																					
       var ids = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getGridParam', 'selarrrow');                            
	if (ids.length == 0) {                                                                          
		layer.alert('请选择主任务进行反馈！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (ids.length > 1) {                                                                    
		layer.alert('请选择一条主任务进行反馈！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowData = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getRowData', ids[0]);
       if(rowData.STATUS=="已完成"){
              layer.alert('该任务已结束,不能进行删除！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 
         };                                                                     
		layer.confirm('确定要删除该数据吗?', {													    
			icon: 3,																			
			title: '提示',																	    
			area: ['400px', '']																	
		}, function(index) {																	
			if (bpmsDeleteIds.length>0){																	
			avicAjax.ajax({																		
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_JC_PARTY_UP&isbpm=N&dbid=948e83e390ba1eca0190ba83ab7a2c39', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5290b915650190b97129fa2d90',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#table47b76c9ca78a56416ee8e53c30a960ebf735").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b915650190b97129fa2d90/table47b76c9ca78a56416ee8e53c30a960ebf735/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable47b76c9ca78a56416ee8e53c30a960ebf735,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table47b76c9ca78a56416ee8e53c30a960ebf735SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table47b76c9ca78a56416ee8e53c30a960ebf735LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table47b76c9ca78a56416ee8e53c30a960ebf735OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table47b76c9ca78a56416ee8e53c30a960ebf735OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table47b76c9ca78a56416ee8e53c30a960ebf735GridComplete.exec();
				    setTimeout(function(){var height = $("#table47b76c9ca78a56416ee8e53c30a960ebf735").closest('.ui-jqgrid-bdiv').height();
					$("#table47b76c9ca78a56416ee8e53c30a960ebf735norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table47b76c9ca78a56416ee8e53c30a960ebf735norecords img").css("width","120px");
                 }else{
					    $("#table47b76c9ca78a56416ee8e53c30a960ebf735norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table47b76c9ca78a56416ee8e53c30a960ebf735BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table47b76c9ca78a56416ee8e53c30a960ebf735OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table47b76c9ca78a56416ee8e53c30a960ebf735norecords").hide();
		   	    $("#Pagertable47b76c9ca78a56416ee8e53c30a960ebf735_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table47b76c9ca78a56416ee8e53c30a960ebf735").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table47b76c9ca78a56416ee8e53c30a960ebf735").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table47b76c9ca78a56416ee8e53c30a960ebf735norecords").html() == null) {
						$("#table47b76c9ca78a56416ee8e53c30a960ebf735").parent().append("<div class='no_data' id='table47b76c9ca78a56416ee8e53c30a960ebf735norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table47b76c9ca78a56416ee8e53c30a960ebf735norecords").show();
					$("#Pagertable47b76c9ca78a56416ee8e53c30a960ebf735_left").css("display", "none");
				}
table47b76c9ca78a56416ee8e53c30a960ebf735LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable47b76c9ca78a56416ee8e53c30a960ebf735"
    });
table47b76c9ca78a56416ee8e53c30a960ebf735Reload();
$("#t_table47b76c9ca78a56416ee8e53c30a960ebf735").append($("#tableToolbartable47b76c9ca78a56416ee8e53c30a960ebf735"));$("#tableToolbarButton2a8b2f80da1ada4c6608462f71325620415d").bind('click',function(event){var sbids = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getGridParam', 'selarrrow');                            
	if (sbids.length == 0) {                                                                          
		layer.alert('请选择一条数据！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (sbids.length > 1) {                                                                    
		layer.alert('请选择一条数据！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var sbrowData = $('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('getRowData', sbids[0]);
       if(sbrowData.STATUS=="已完成"){
              layer.alert('该任务已经完成，不能重复上报！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 
         }

	layer.confirm("上报后任务完成，后续将不可更改", {
			icon : 3,
			title : '提示',
			area: ['400px', ''],
			closeBtn : 0
		}, function(index) {
			
  avicAjax.ajax({/*更新基层上报状态*/
                            url : 'platform/avicit/pb/partyorgplan/updateStatusController/operation/updateJcFkStatus',
                            data : {
                                formId: sbrowData.ID
                            },
                            type : 'POST',
                            dataType : 'JSON',
                            async : false,
                            success : function(result) {
                                 table47b76c9ca78a56416ee8e53c30a960ebf735Reload();/*刷新列表*/

                            }
                        });


			layer.close(index);
		});});
;});	 
