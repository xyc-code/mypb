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

function redraw2c908c1d8e4153a1018e4f55ec973899(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8e4153a1018e4f55ec973899").width();
		var win_height = $("#2c908c1d8e4153a1018e4f55ec973899").height();
		$('#2c908c1d8e4153a1018e4f55ec973899').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c1d8e4153a1018e4f55ec973899').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c1d8e4153a1018e4f55ec973899').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8e4153a1018e4f55ec973899").width();
	setTimeout(function(){redraw2c908c1d8e4153a1018e4f55ec973899(win_width);},500);
});
var compRef9acc7613b5034d43bba81a192d12fcd746cf='';
var tableac38c418b559e64d9b0950da20519384f374KeyWordIn = "";    
var tableac38c418b559e64d9b0950da20519384f374ParamIn = "";    
var tableac38c418b559e64d9b0950da20519384f374SelectRow = {     
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
var tableac38c418b559e64d9b0950da20519384f374LoadComplete = {     
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
var tableac38c418b559e64d9b0950da20519384f374BeforeEditCell = {        
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
var tableac38c418b559e64d9b0950da20519384f374OndblClickRow = {     
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
var tableac38c418b559e64d9b0950da20519384f374OnRightClickRow = {     
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
var tableac38c418b559e64d9b0950da20519384f374GridComplete = {     
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
var tableac38c418b559e64d9b0950da20519384f374OnCellSelect = {     
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
var tableac38c418b559e64d9b0950da20519384f374LoadBeforeSend = {        
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
function tableac38c418b559e64d9b0950da20519384f374Reload(pid){
	var _isInvalid = true;
	$("#tableac38c418b559e64d9b0950da20519384f374").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableac38c418b559e64d9b0950da20519384f374Pid = pid;
		}
		return false;
	}
	window.tableac38c418b559e64d9b0950da20519384f374Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableac38c418b559e64d9b0950da20519384f374').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableac38c418b559e64d9b0950da20519384f374TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableac38c418b559e64d9b0950da20519384f374Pid == 'undefined' || window.tableac38c418b559e64d9b0950da20519384f374Pid!=null){
tableac38c418b559e64d9b0950da20519384f374Reload(window.tableac38c418b559e64d9b0950da20519384f374Pid);
}
}
var tablecmtableac38c418b559e64d9b0950da20519384f374 = [];
var uniqueColtableac38c418b559e64d9b0950da20519384f374 = [];
var uniqueColTitletableac38c418b559e64d9b0950da20519384f374 = [];
var defaultValuetableac38c418b559e64d9b0950da20519384f374 = {};
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '党支部名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '党建工作室',hidden:false, name: 'DJGZS',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '党建工作室(备注)',hidden:false, name: 'DJGZS_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '文化宣传室',hidden:false, name: 'WHXCS',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '文化宣传室(备注)',hidden:false, name: 'WHXCS_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '工会',hidden:false, name: 'GH',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '工会(备注)',hidden:false, name: 'GH_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '团委',hidden:false, name: 'TW',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '团委(备注)',hidden:false, name: 'TW_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '人力资源部',hidden:false, name: 'RLZYB',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '人力资源部(备注)',hidden:false, name: 'RLZYB_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '党政办公室 ',hidden:false, name: 'DZBGS',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '党政办公室(备注)',hidden:false, name: 'DZBGS_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '纪检监察部',hidden:false, name: 'JJJCB',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '纪检监察部(备注)',hidden:false, name: 'JJJCB_BZ',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '合计',hidden:false, name: 'SUM_CONTENT',align:'right',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableac38c418b559e64d9b0950da20519384f374.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
	var searchNamestableac38c418b559e64d9b0950da20519384f374 = []; 
searchNamestableac38c418b559e64d9b0950da20519384f374.push('PARTY_NAME');
$('#keyWordtableac38c418b559e64d9b0950da20519384f374').attr('placeholder', '请输入党支部名称查询');
function searchDataKeyWordtableac38c418b559e64d9b0950da20519384f374(){
	var keyWord = $.trim($("#keyWordtableac38c418b559e64d9b0950da20519384f374").val()); 
 if($('#keyWordtableac38c418b559e64d9b0950da20519384f374').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestableac38c418b559e64d9b0950da20519384f374.length;i++){ 
		var name = searchNamestableac38c418b559e64d9b0950da20519384f374[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tableac38c418b559e64d9b0950da20519384f374KeyWordIn=JSON.stringify(param);
tableac38c418b559e64d9b0950da20519384f374ParamIn="";
	$('#tableac38c418b559e64d9b0950da20519384f374').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtableac38c418b559e64d9b0950da20519384f374').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtableac38c418b559e64d9b0950da20519384f374();
	}
});
$('#keyWordBttableac38c418b559e64d9b0950da20519384f374').bind('click', function() {
		searchDataKeyWordtableac38c418b559e64d9b0950da20519384f374();
});
var table89ab36fa2dfaf34e81382574899d287fd447KeyWordIn = "";    
var table89ab36fa2dfaf34e81382574899d287fd447ParamIn = "";    
var table89ab36fa2dfaf34e81382574899d287fd447SelectRow = {     
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
var table89ab36fa2dfaf34e81382574899d287fd447LoadComplete = {     
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
var table89ab36fa2dfaf34e81382574899d287fd447BeforeEditCell = {        
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
var table89ab36fa2dfaf34e81382574899d287fd447OndblClickRow = {     
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
var table89ab36fa2dfaf34e81382574899d287fd447OnRightClickRow = {     
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
var table89ab36fa2dfaf34e81382574899d287fd447GridComplete = {     
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
var table89ab36fa2dfaf34e81382574899d287fd447OnCellSelect = {     
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
var table89ab36fa2dfaf34e81382574899d287fd447LoadBeforeSend = {        
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
function table89ab36fa2dfaf34e81382574899d287fd447Reload(pid){
	var _isInvalid = true;
	$("#table89ab36fa2dfaf34e81382574899d287fd447").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table89ab36fa2dfaf34e81382574899d287fd447Pid = pid;
		}
		return false;
	}
	window.table89ab36fa2dfaf34e81382574899d287fd447Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table89ab36fa2dfaf34e81382574899d287fd447Reload();
};
function table89ab36fa2dfaf34e81382574899d287fd447TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table89ab36fa2dfaf34e81382574899d287fd447Pid == 'undefined' || window.table89ab36fa2dfaf34e81382574899d287fd447Pid!=null){
table89ab36fa2dfaf34e81382574899d287fd447Reload(window.table89ab36fa2dfaf34e81382574899d287fd447Pid);
}
}
var tablecmtable89ab36fa2dfaf34e81382574899d287fd447 = [];
var uniqueColtable89ab36fa2dfaf34e81382574899d287fd447 = [];
var uniqueColTitletable89ab36fa2dfaf34e81382574899d287fd447 = [];
var defaultValuetable89ab36fa2dfaf34e81382574899d287fd447 = {};
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '表单编号',hidden:false, name: 'FROM_NO',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '拟稿人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '申请人党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '拟稿时间',hidden:false, name: 'DRAFTING_TIME',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '申请人Id',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '联系电话',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '标题年份',hidden:true, name: 'TITILE_YEER',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '标题月份',hidden:true, name: 'TITLE_MONTH',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable89ab36fa2dfaf34e81382574899d287fd447.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn45ae7f7c77d7854f90d814fe9a7b89540fdf',align:'left',  width: '150px'});	var searchNamestable89ab36fa2dfaf34e81382574899d287fd447 = []; 
searchNamestable89ab36fa2dfaf34e81382574899d287fd447.push('FROM_NO');
$('#keyWordtable89ab36fa2dfaf34e81382574899d287fd447').attr('placeholder', '请输入表单编号查询');
function searchDataKeyWordtable89ab36fa2dfaf34e81382574899d287fd447(){
	var keyWord = $.trim($("#keyWordtable89ab36fa2dfaf34e81382574899d287fd447").val()); 
 if($('#keyWordtable89ab36fa2dfaf34e81382574899d287fd447').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable89ab36fa2dfaf34e81382574899d287fd447.length;i++){ 
		var name = searchNamestable89ab36fa2dfaf34e81382574899d287fd447[i]; 
		param[name] = keyWord; 
	} 
if ($("#table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect").length>0){param.bpmState=$('#table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table89ab36fa2dfaf34e81382574899d287fd447KeyWordIn=JSON.stringify(param);
table89ab36fa2dfaf34e81382574899d287fd447ParamIn="";
	$('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable89ab36fa2dfaf34e81382574899d287fd447').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable89ab36fa2dfaf34e81382574899d287fd447();
	}
});
$('#keyWordBttable89ab36fa2dfaf34e81382574899d287fd447').bind('click', function() {
		searchDataKeyWordtable89ab36fa2dfaf34e81382574899d287fd447();
});
function table89ab36fa2dfaf34e81382574899d287fd447initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b").css('display','inline-block');
}else{
$("#tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b").hide();
}
table89ab36fa2dfaf34e81382574899d287fd447searchWF();
}
function table89ab36fa2dfaf34e81382574899d287fd447searchWF(){
   if ($("#searchformtable89ab36fa2dfaf34e81382574899d287fd447").length>0){
      var para = serializeObject($("#searchformtable89ab36fa2dfaf34e81382574899d287fd447"));
      para.bpmState = $('#table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table89ab36fa2dfaf34e81382574899d287fd447SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('getRowData',rowid);if (status) {
compRef9acc7613b5034d43bba81a192d12fcd746cf = rowid;operaButtonName = null;
tableac38c418b559e64d9b0950da20519384f374Reload(rowid,rowdata,'');}
});
table89ab36fa2dfaf34e81382574899d287fd447LoadComplete.addEvent(function(data){
var rowdata = $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
tableac38c418b559e64d9b0950da20519384f374Reload('null',rowdata,'');
}
});
tableac38c418b559e64d9b0950da20519384f374LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#tableac38c418b559e64d9b0950da20519384f374").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e4153a1018e4f55ec973899/tableac38c418b559e64d9b0950da20519384f374/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtableac38c418b559e64d9b0950da20519384f374,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableac38c418b559e64d9b0950da20519384f374SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableac38c418b559e64d9b0950da20519384f374LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableac38c418b559e64d9b0950da20519384f374OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableac38c418b559e64d9b0950da20519384f374OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableac38c418b559e64d9b0950da20519384f374GridComplete.exec();
				    setTimeout(function(){var height = $("#tableac38c418b559e64d9b0950da20519384f374").closest('.ui-jqgrid-bdiv').height();
					$("#tableac38c418b559e64d9b0950da20519384f374norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableac38c418b559e64d9b0950da20519384f374norecords img").css("width","120px");
                 }else{
					    $("#tableac38c418b559e64d9b0950da20519384f374norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableac38c418b559e64d9b0950da20519384f374BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableac38c418b559e64d9b0950da20519384f374OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableac38c418b559e64d9b0950da20519384f374norecords").hide();
		   	    $("#Pagertableac38c418b559e64d9b0950da20519384f374_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableac38c418b559e64d9b0950da20519384f374").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableac38c418b559e64d9b0950da20519384f374").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableac38c418b559e64d9b0950da20519384f374norecords").html() == null) {
						$("#tableac38c418b559e64d9b0950da20519384f374").parent().append("<div class='no_data' id='tableac38c418b559e64d9b0950da20519384f374norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableac38c418b559e64d9b0950da20519384f374norecords").show();
					$("#Pagertableac38c418b559e64d9b0950da20519384f374_left").css("display", "none");
				}
tableac38c418b559e64d9b0950da20519384f374LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableac38c418b559e64d9b0950da20519384f374"
    });
$("#t_tableac38c418b559e64d9b0950da20519384f374").append($("#tableToolbartableac38c418b559e64d9b0950da20519384f374"));table89ab36fa2dfaf34e81382574899d287fd447LoadComplete.addEvent(function(data){$("#tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b").show()});
$("#table89ab36fa2dfaf34e81382574899d287fd447").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e4153a1018e4f55ec973899/table89ab36fa2dfaf34e81382574899d287fd447/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable89ab36fa2dfaf34e81382574899d287fd447,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table89ab36fa2dfaf34e81382574899d287fd447SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table89ab36fa2dfaf34e81382574899d287fd447LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table89ab36fa2dfaf34e81382574899d287fd447OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table89ab36fa2dfaf34e81382574899d287fd447OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table89ab36fa2dfaf34e81382574899d287fd447GridComplete.exec();
				    setTimeout(function(){var height = $("#table89ab36fa2dfaf34e81382574899d287fd447").closest('.ui-jqgrid-bdiv').height();
					$("#table89ab36fa2dfaf34e81382574899d287fd447norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table89ab36fa2dfaf34e81382574899d287fd447norecords img").css("width","120px");
                 }else{
					    $("#table89ab36fa2dfaf34e81382574899d287fd447norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table89ab36fa2dfaf34e81382574899d287fd447BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table89ab36fa2dfaf34e81382574899d287fd447OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table89ab36fa2dfaf34e81382574899d287fd447norecords").hide();
		   	    $("#Pagertable89ab36fa2dfaf34e81382574899d287fd447_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table89ab36fa2dfaf34e81382574899d287fd447").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table89ab36fa2dfaf34e81382574899d287fd447").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table89ab36fa2dfaf34e81382574899d287fd447norecords").html() == null) {
						$("#table89ab36fa2dfaf34e81382574899d287fd447").parent().append("<div class='no_data' id='table89ab36fa2dfaf34e81382574899d287fd447norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table89ab36fa2dfaf34e81382574899d287fd447norecords").show();
					$("#Pagertable89ab36fa2dfaf34e81382574899d287fd447_left").css("display", "none");
				}
table89ab36fa2dfaf34e81382574899d287fd447LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable89ab36fa2dfaf34e81382574899d287fd447"
    });
table89ab36fa2dfaf34e81382574899d287fd447Reload();
$("#t_table89ab36fa2dfaf34e81382574899d287fd447").append($("#tableToolbartable89ab36fa2dfaf34e81382574899d287fd447"));function searchDatatable89ab36fa2dfaf34e81382574899d287fd447(){
 var para = serializeObjectForEform($("#searchformtable89ab36fa2dfaf34e81382574899d287fd447"));
 para.bpmState = $('#table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table89ab36fa2dfaf34e81382574899d287fd447KeyWordIn="";
table89ab36fa2dfaf34e81382574899d287fd447ParamIn=JSON.stringify(para);
	$('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable89ab36fa2dfaf34e81382574899d287fd447").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable89ab36fa2dfaf34e81382574899d287fd447').bind('click',function(){
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
	content: $('#searchDialogtable89ab36fa2dfaf34e81382574899d287fd447'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable89ab36fa2dfaf34e81382574899d287fd447(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable89ab36fa2dfaf34e81382574899d287fd447")); searchDatatable89ab36fa2dfaf34e81382574899d287fd447(); layer.close(index); return false;
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
$('#table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect').bind('change',function(){
table89ab36fa2dfaf34e81382574899d287fd447initWorkFlow($(this).val());
});
$("#tableToolbarButton66f07c7797decb45f8c8c5d4a6d5fc6ee818").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8e40a341018e40e4ed0e0958&grid=table89ab36fa2dfaf34e81382574899d287fd447'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_WORK&isbpm=Y&dbid=2c908c1d8e40a341018e40f501180a05', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8e4153a1018e4f55ec973899',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table89ab36fa2dfaf34e81382574899d287fd447').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b").hide();
$("#tableToolbarButtonb1ea12265d377d4b66ea586891039b37ee1b").bind('click',function(event){var bpmsDeleteRows = $('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('getGridParam', 'selarrrow');  
if(bpmsDeleteRows .length == 0){
layer.msg("请选择！")
return 
}    
layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '痕迹',
	    skin: 'bs-modal', 
            maxmin: true, 
	    content: "avicit/pb/pojo/partyRestPojo/dynDetail/dynDetailController/toDynDetailManage?skId="+bpmsDeleteRows [0]
	});});
;});	 
