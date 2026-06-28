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

function redraw948e83e390ba1eca0190baa807e9316c(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390ba1eca0190baa807e9316c").width();
		var win_height = $("#948e83e390ba1eca0190baa807e9316c").height();
		$('#8ab9f3529f027989019f027e6cc70cea').layout('panel', 'west').panel('resize',{width:win_width*0.5,height:win_height*0.5});
		$('#8ab9f3529f027989019f027e6cc70cea').layout('resize');
		$('#948e83e390ba1eca0190baa807e9316c').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e390ba1eca0190baa807e9316c').layout('panel', 'center').panel('resize',{width:win_width*0.5,height:win_height*0.5});
		$('#948e83e390ba1eca0190baa807e9316c').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390ba1eca0190baa807e9316c").width();
	setTimeout(function(){redraw948e83e390ba1eca0190baa807e9316c(win_width);},500);
});
var compRef22c65e532927cf4f6e28b8a683cf0ded4ebb='';
var compRefa363e716b171d54025b89162fad7927de95f='';
var table656e4f922c10b44c7ac8a87bcb12121d83e4KeyWordIn = "";    
var table656e4f922c10b44c7ac8a87bcb12121d83e4ParamIn = "";    
var table656e4f922c10b44c7ac8a87bcb12121d83e4SelectRow = {     
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4LoadComplete = {     
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4BeforeEditCell = {        
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4OndblClickRow = {     
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4OnRightClickRow = {     
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4GridComplete = {     
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4OnCellSelect = {     
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
var table656e4f922c10b44c7ac8a87bcb12121d83e4LoadBeforeSend = {        
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
function table656e4f922c10b44c7ac8a87bcb12121d83e4Reload(pid){
	var _isInvalid = true;
	$("#table656e4f922c10b44c7ac8a87bcb12121d83e4").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table656e4f922c10b44c7ac8a87bcb12121d83e4Pid = pid;
		}
		return false;
	}
	window.table656e4f922c10b44c7ac8a87bcb12121d83e4Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table656e4f922c10b44c7ac8a87bcb12121d83e4').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table656e4f922c10b44c7ac8a87bcb12121d83e4TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table656e4f922c10b44c7ac8a87bcb12121d83e4Pid == 'undefined' || window.table656e4f922c10b44c7ac8a87bcb12121d83e4Pid!=null){
table656e4f922c10b44c7ac8a87bcb12121d83e4Reload(window.table656e4f922c10b44c7ac8a87bcb12121d83e4Pid);
}
}
var tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4 = [];
var uniqueColtable656e4f922c10b44c7ac8a87bcb12121d83e4 = [];
var uniqueColTitletable656e4f922c10b44c7ac8a87bcb12121d83e4 = [];
var defaultValuetable656e4f922c10b44c7ac8a87bcb12121d83e4 = {};
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '上报内容', formatter:formattable656e4f922c10b44c7ac8a87bcb12121d83e4Detail, hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
function formattable656e4f922c10b44c7ac8a87bcb12121d83e4Detail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable656e4f922c10b44c7ac8a87bcb12121d83e4Detail(\''+id+'\')">'+cellvalue+'</a>';
}function totable656e4f922c10b44c7ac8a87bcb12121d83e4Detail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e390ba1eca0190ba8230832c1e&id='+id      
	});  
}tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '外键',hidden:true, name: 'FCK_ID',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '创建时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
var tabled536516864e73b4ac1f894935606c1704806KeyWordIn = "";    
var tabled536516864e73b4ac1f894935606c1704806ParamIn = "";    
var tabled536516864e73b4ac1f894935606c1704806SelectRow = {     
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
var tabled536516864e73b4ac1f894935606c1704806LoadComplete = {     
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
var tabled536516864e73b4ac1f894935606c1704806BeforeEditCell = {        
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
var tabled536516864e73b4ac1f894935606c1704806OndblClickRow = {     
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
var tabled536516864e73b4ac1f894935606c1704806OnRightClickRow = {     
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
var tabled536516864e73b4ac1f894935606c1704806GridComplete = {     
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
var tabled536516864e73b4ac1f894935606c1704806OnCellSelect = {     
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
var tabled536516864e73b4ac1f894935606c1704806LoadBeforeSend = {        
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
function tabled536516864e73b4ac1f894935606c1704806Reload(pid){
	var _isInvalid = true;
	$("#tabled536516864e73b4ac1f894935606c1704806").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabled536516864e73b4ac1f894935606c1704806Pid = pid;
		}
		return false;
	}
	window.tabled536516864e73b4ac1f894935606c1704806Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabled536516864e73b4ac1f894935606c1704806').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tabled536516864e73b4ac1f894935606c1704806TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabled536516864e73b4ac1f894935606c1704806Pid == 'undefined' || window.tabled536516864e73b4ac1f894935606c1704806Pid!=null){
tabled536516864e73b4ac1f894935606c1704806Reload(window.tabled536516864e73b4ac1f894935606c1704806Pid);
}
}
var tablecmtabled536516864e73b4ac1f894935606c1704806 = [];
var uniqueColtabled536516864e73b4ac1f894935606c1704806 = [];
var uniqueColTitletabled536516864e73b4ac1f894935606c1704806 = [];
var defaultValuetabled536516864e73b4ac1f894935606c1704806 = {};
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '党委工作计划标题',hidden:false, name: 'PLAN_NAME',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({ label: '责任单位',hidden:true, name: 'ZRDW',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({ label: '责任单位',hidden:false, name: 'ZRDWName',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '下发计划时间', formatter:format, hidden:false, name: 'XF_PLAN_DATE',align:'center',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '计划开始时间', formatter:format, hidden:false, name: 'PLAN_S_DATE',align:'center',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '计划结束时间', formatter:format, hidden:false, name: 'PLAN_E_DATE',align:'center',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '工作内容',hidden:false, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '工作任务',hidden:false, name: 'GZRW',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '工作目标',hidden:false, name: 'WORK_MB',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '工作类别',hidden:false, name: 'GZLB',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '主要负责人',hidden:true, name: 'MAIN_FZR',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '副主要负责人',hidden:true, name: 'F_MAIN_FZR',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtabled536516864e73b4ac1f894935606c1704806.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var table99a39ad932b85743e70aa99bbde60ebc0f0eKeyWordIn = "";    
var table99a39ad932b85743e70aa99bbde60ebc0f0eParamIn = "";    
var table99a39ad932b85743e70aa99bbde60ebc0f0eSelectRow = {     
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eLoadComplete = {     
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eBeforeEditCell = {        
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eOndblClickRow = {     
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eOnRightClickRow = {     
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eGridComplete = {     
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eOnCellSelect = {     
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
var table99a39ad932b85743e70aa99bbde60ebc0f0eLoadBeforeSend = {        
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
function table99a39ad932b85743e70aa99bbde60ebc0f0eReload(pid){
	var _isInvalid = true;
	$("#table99a39ad932b85743e70aa99bbde60ebc0f0e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table99a39ad932b85743e70aa99bbde60ebc0f0ePid = pid;
		}
		return false;
	}
	window.table99a39ad932b85743e70aa99bbde60ebc0f0ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table99a39ad932b85743e70aa99bbde60ebc0f0e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table99a39ad932b85743e70aa99bbde60ebc0f0eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table99a39ad932b85743e70aa99bbde60ebc0f0ePid == 'undefined' || window.table99a39ad932b85743e70aa99bbde60ebc0f0ePid!=null){
table99a39ad932b85743e70aa99bbde60ebc0f0eReload(window.table99a39ad932b85743e70aa99bbde60ebc0f0ePid);
}
}
var tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e = [];
var uniqueColtable99a39ad932b85743e70aa99bbde60ebc0f0e = [];
var uniqueColTitletable99a39ad932b85743e70aa99bbde60ebc0f0e = [];
var defaultValuetable99a39ad932b85743e70aa99bbde60ebc0f0e = {};
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({ label: '主要负责人',hidden:true, name: 'MAIN_FZR',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({ label: '主要负责人',hidden:false, name: 'MAIN_FZRName',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({ label: '副主要负责人',hidden:true, name: 'F_MAIN_FZR',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({ label: '副主要负责人',hidden:false, name: 'F_MAIN_FZRName',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '工作要求',hidden:false, name: 'WORK_YQ',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '基层党组织计划结束时间', formatter:format, hidden:false, name: 'PARTY_PLAN_JSSJ',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

tabled536516864e73b4ac1f894935606c1704806SelectRow.addEvent(function(rowid,status){
var rowdata = $('#tabled536516864e73b4ac1f894935606c1704806').jqGrid('getRowData',rowid);if (status) {
compRef22c65e532927cf4f6e28b8a683cf0ded4ebb = rowid;operaButtonName = null;
table99a39ad932b85743e70aa99bbde60ebc0f0eReload(rowid,rowdata,'');}
});
tabled536516864e73b4ac1f894935606c1704806LoadComplete.addEvent(function(data){
var rowdata = $('#tabled536516864e73b4ac1f894935606c1704806').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table99a39ad932b85743e70aa99bbde60ebc0f0eReload('null',rowdata,'');
}
});
table99a39ad932b85743e70aa99bbde60ebc0f0eLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
table99a39ad932b85743e70aa99bbde60ebc0f0eSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table99a39ad932b85743e70aa99bbde60ebc0f0e').jqGrid('getRowData',rowid);if (status) {
compRefa363e716b171d54025b89162fad7927de95f = rowid;operaButtonName = null;
table656e4f922c10b44c7ac8a87bcb12121d83e4Reload(rowid,rowdata,'');}
});
table99a39ad932b85743e70aa99bbde60ebc0f0eLoadComplete.addEvent(function(data){
var rowdata = $('#table99a39ad932b85743e70aa99bbde60ebc0f0e').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table656e4f922c10b44c7ac8a87bcb12121d83e4Reload('null',rowdata,'');
}
});
table656e4f922c10b44c7ac8a87bcb12121d83e4LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table656e4f922c10b44c7ac8a87bcb12121d83e4").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390ba1eca0190baa807e9316c/table656e4f922c10b44c7ac8a87bcb12121d83e4/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable656e4f922c10b44c7ac8a87bcb12121d83e4,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table656e4f922c10b44c7ac8a87bcb12121d83e4SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table656e4f922c10b44c7ac8a87bcb12121d83e4LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table656e4f922c10b44c7ac8a87bcb12121d83e4OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table656e4f922c10b44c7ac8a87bcb12121d83e4OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table656e4f922c10b44c7ac8a87bcb12121d83e4GridComplete.exec();
				    setTimeout(function(){var height = $("#table656e4f922c10b44c7ac8a87bcb12121d83e4").closest('.ui-jqgrid-bdiv').height();
					$("#table656e4f922c10b44c7ac8a87bcb12121d83e4norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table656e4f922c10b44c7ac8a87bcb12121d83e4norecords img").css("width","120px");
                 }else{
					    $("#table656e4f922c10b44c7ac8a87bcb12121d83e4norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table656e4f922c10b44c7ac8a87bcb12121d83e4BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table656e4f922c10b44c7ac8a87bcb12121d83e4OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table656e4f922c10b44c7ac8a87bcb12121d83e4norecords").hide();
		   	    $("#Pagertable656e4f922c10b44c7ac8a87bcb12121d83e4_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table656e4f922c10b44c7ac8a87bcb12121d83e4").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table656e4f922c10b44c7ac8a87bcb12121d83e4").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table656e4f922c10b44c7ac8a87bcb12121d83e4norecords").html() == null) {
						$("#table656e4f922c10b44c7ac8a87bcb12121d83e4").parent().append("<div class='no_data' id='table656e4f922c10b44c7ac8a87bcb12121d83e4norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table656e4f922c10b44c7ac8a87bcb12121d83e4norecords").show();
					$("#Pagertable656e4f922c10b44c7ac8a87bcb12121d83e4_left").css("display", "none");
				}
table656e4f922c10b44c7ac8a87bcb12121d83e4LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable656e4f922c10b44c7ac8a87bcb12121d83e4"
    });
$("#t_table656e4f922c10b44c7ac8a87bcb12121d83e4").append($("#tableToolbartable656e4f922c10b44c7ac8a87bcb12121d83e4"));$("#tabled536516864e73b4ac1f894935606c1704806").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390ba1eca0190baa807e9316c/tabled536516864e73b4ac1f894935606c1704806/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabled536516864e73b4ac1f894935606c1704806,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabled536516864e73b4ac1f894935606c1704806SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabled536516864e73b4ac1f894935606c1704806LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabled536516864e73b4ac1f894935606c1704806OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabled536516864e73b4ac1f894935606c1704806OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabled536516864e73b4ac1f894935606c1704806GridComplete.exec();
				    setTimeout(function(){var height = $("#tabled536516864e73b4ac1f894935606c1704806").closest('.ui-jqgrid-bdiv').height();
					$("#tabled536516864e73b4ac1f894935606c1704806norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabled536516864e73b4ac1f894935606c1704806norecords img").css("width","120px");
                 }else{
					    $("#tabled536516864e73b4ac1f894935606c1704806norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabled536516864e73b4ac1f894935606c1704806BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabled536516864e73b4ac1f894935606c1704806OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabled536516864e73b4ac1f894935606c1704806norecords").hide();
		   	    $("#Pagertabled536516864e73b4ac1f894935606c1704806_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabled536516864e73b4ac1f894935606c1704806").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabled536516864e73b4ac1f894935606c1704806").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabled536516864e73b4ac1f894935606c1704806norecords").html() == null) {
						$("#tabled536516864e73b4ac1f894935606c1704806").parent().append("<div class='no_data' id='tabled536516864e73b4ac1f894935606c1704806norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabled536516864e73b4ac1f894935606c1704806norecords").show();
					$("#Pagertabled536516864e73b4ac1f894935606c1704806_left").css("display", "none");
				}
tabled536516864e73b4ac1f894935606c1704806LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabled536516864e73b4ac1f894935606c1704806"
    });
tabled536516864e73b4ac1f894935606c1704806Reload();
$("#t_tabled536516864e73b4ac1f894935606c1704806").append($("#tableToolbartabled536516864e73b4ac1f894935606c1704806"));$("#table99a39ad932b85743e70aa99bbde60ebc0f0e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390ba1eca0190baa807e9316c/table99a39ad932b85743e70aa99bbde60ebc0f0e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable99a39ad932b85743e70aa99bbde60ebc0f0e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table99a39ad932b85743e70aa99bbde60ebc0f0eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table99a39ad932b85743e70aa99bbde60ebc0f0eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table99a39ad932b85743e70aa99bbde60ebc0f0eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table99a39ad932b85743e70aa99bbde60ebc0f0eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table99a39ad932b85743e70aa99bbde60ebc0f0eGridComplete.exec();
				    setTimeout(function(){var height = $("#table99a39ad932b85743e70aa99bbde60ebc0f0e").closest('.ui-jqgrid-bdiv').height();
					$("#table99a39ad932b85743e70aa99bbde60ebc0f0enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table99a39ad932b85743e70aa99bbde60ebc0f0enorecords img").css("width","120px");
                 }else{
					    $("#table99a39ad932b85743e70aa99bbde60ebc0f0enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table99a39ad932b85743e70aa99bbde60ebc0f0eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table99a39ad932b85743e70aa99bbde60ebc0f0eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table99a39ad932b85743e70aa99bbde60ebc0f0enorecords").hide();
		   	    $("#Pagertable99a39ad932b85743e70aa99bbde60ebc0f0e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table99a39ad932b85743e70aa99bbde60ebc0f0e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table99a39ad932b85743e70aa99bbde60ebc0f0e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table99a39ad932b85743e70aa99bbde60ebc0f0enorecords").html() == null) {
						$("#table99a39ad932b85743e70aa99bbde60ebc0f0e").parent().append("<div class='no_data' id='table99a39ad932b85743e70aa99bbde60ebc0f0enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table99a39ad932b85743e70aa99bbde60ebc0f0enorecords").show();
					$("#Pagertable99a39ad932b85743e70aa99bbde60ebc0f0e_left").css("display", "none");
				}
table99a39ad932b85743e70aa99bbde60ebc0f0eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable99a39ad932b85743e70aa99bbde60ebc0f0e"
    });
$("#t_table99a39ad932b85743e70aa99bbde60ebc0f0e").append($("#tableToolbartable99a39ad932b85743e70aa99bbde60ebc0f0e"));;});	 
