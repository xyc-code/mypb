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

function redraw2c908c5290b4c15f0190b556391b0d19(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5290b4c15f0190b556391b0d19").width();
		var win_height = $("#2c908c5290b4c15f0190b556391b0d19").height();
		$('#2c908c5290b4c15f0190b556391b0d19').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c5290b4c15f0190b556391b0d19').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c5290b4c15f0190b556391b0d19').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5290b4c15f0190b556391b0d19").width();
	setTimeout(function(){redraw2c908c5290b4c15f0190b556391b0d19(win_width);},500);
});
var compRefc7e12bd3115b7847f8dad6dc0d95eddcf29b='';
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65KeyWordIn = "";    
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65ParamIn = "";    
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65SelectRow = {     
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65LoadComplete = {     
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65BeforeEditCell = {        
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65OndblClickRow = {     
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65OnRightClickRow = {     
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65GridComplete = {     
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65OnCellSelect = {     
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
var table7c0e0e285ce33e4906b9cd0f1bd8eb691e65LoadBeforeSend = {        
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
function table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Reload(pid){
	var _isInvalid = true;
	$("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Pid = pid;
		}
		return false;
	}
	window.table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table7c0e0e285ce33e4906b9cd0f1bd8eb691e65TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Pid == 'undefined' || window.table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Pid!=null){
table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Reload(window.table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Pid);
}
}
var tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65 = [];
var uniqueColtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65 = [];
var uniqueColTitletable7c0e0e285ce33e4906b9cd0f1bd8eb691e65 = [];
var defaultValuetable7c0e0e285ce33e4906b9cd0f1bd8eb691e65 = {};
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '内容',hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '创建时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65.push({label: '外键',hidden:true, name: 'FCK_ID',align:'left',  width: '150px'});
var tablee00d137a3d55d04613f8fd976ef9e342d0dcKeyWordIn = "";    
var tablee00d137a3d55d04613f8fd976ef9e342d0dcParamIn = "";    
var tablee00d137a3d55d04613f8fd976ef9e342d0dcSelectRow = {     
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcLoadComplete = {     
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcBeforeEditCell = {        
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcOndblClickRow = {     
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcOnRightClickRow = {     
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcGridComplete = {     
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcOnCellSelect = {     
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
var tablee00d137a3d55d04613f8fd976ef9e342d0dcLoadBeforeSend = {        
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
function tablee00d137a3d55d04613f8fd976ef9e342d0dcReload(pid){
	var _isInvalid = true;
	$("#tablee00d137a3d55d04613f8fd976ef9e342d0dc").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee00d137a3d55d04613f8fd976ef9e342d0dcPid = pid;
		}
		return false;
	}
	window.tablee00d137a3d55d04613f8fd976ef9e342d0dcPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablee00d137a3d55d04613f8fd976ef9e342d0dcReload();
};
function tablee00d137a3d55d04613f8fd976ef9e342d0dcTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee00d137a3d55d04613f8fd976ef9e342d0dcPid == 'undefined' || window.tablee00d137a3d55d04613f8fd976ef9e342d0dcPid!=null){
tablee00d137a3d55d04613f8fd976ef9e342d0dcReload(window.tablee00d137a3d55d04613f8fd976ef9e342d0dcPid);
}
}
var tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc = [];
var uniqueColtablee00d137a3d55d04613f8fd976ef9e342d0dc = [];
var uniqueColTitletablee00d137a3d55d04613f8fd976ef9e342d0dc = [];
var defaultValuetablee00d137a3d55d04613f8fd976ef9e342d0dc = {};
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '党委工作计划标题',hidden:false, name: 'PLAN_NAME',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ label: '责任单位',hidden:true, name: 'ZRDW',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ label: '责任单位',hidden:true, name: 'ZRDWName',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '下发计划时间', formatter:format, hidden:false, name: 'XF_PLAN_DATE',align:'center',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '计划开始时间', formatter:format, hidden:true, name: 'PLAN_S_DATE',align:'center',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '计划结束时间', formatter:format, hidden:true, name: 'PLAN_E_DATE',align:'center',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ label: '业务联系人',hidden:true, name: 'YW_LXR',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ label: '业务联系人',hidden:true, name: 'YW_LXRName',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '工作类别',hidden:false, name: 'GZLB',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '工作任务',hidden:false, name: 'GZRW',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '工作内容',hidden:false, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '工作目标',hidden:false, name: 'WORK_MB',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '主要负责人',hidden:true, name: 'MAIN_FZR',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '副主要负责人',hidden:true, name: 'F_MAIN_FZR',align:'left',  width: '150px'});
tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc.push({label: '上报时间', formatter:format, hidden:true, name: 'FK_DATE_TIME',align:'center',  width: '150px'});
	var searchNamestablee00d137a3d55d04613f8fd976ef9e342d0dc = []; 
searchNamestablee00d137a3d55d04613f8fd976ef9e342d0dc.push('GZLB');
$('#keyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc').attr('placeholder', '请输入工作类别查询');
function searchDataKeyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc(){
	var keyWord = $.trim($("#keyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc").val()); 
 if($('#keyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablee00d137a3d55d04613f8fd976ef9e342d0dc.length;i++){ 
		var name = searchNamestablee00d137a3d55d04613f8fd976ef9e342d0dc[i]; 
		param[name] = keyWord; 
	} 
if ($("#tablee00d137a3d55d04613f8fd976ef9e342d0dcworkFlowSelect").length>0){param.bpmState=$('#tablee00d137a3d55d04613f8fd976ef9e342d0dcworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablee00d137a3d55d04613f8fd976ef9e342d0dcKeyWordIn=JSON.stringify(param);
tablee00d137a3d55d04613f8fd976ef9e342d0dcParamIn="";
	$('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc();
	}
});
$('#keyWordBttablee00d137a3d55d04613f8fd976ef9e342d0dc').bind('click', function() {
		searchDataKeyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc();
});
function tablee00d137a3d55d04613f8fd976ef9e342d0dcinitWorkFlow(status){
if(status == "start" || status === "nostart"){
}else{
}
tablee00d137a3d55d04613f8fd976ef9e342d0dcsearchWF();
}
function tablee00d137a3d55d04613f8fd976ef9e342d0dcsearchWF(){
   if ($("#searchformtablee00d137a3d55d04613f8fd976ef9e342d0dc").length>0){
      var para = serializeObject($("#searchformtablee00d137a3d55d04613f8fd976ef9e342d0dc"));
      para.bpmState = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dcworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tablee00d137a3d55d04613f8fd976ef9e342d0dcworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tablee00d137a3d55d04613f8fd976ef9e342d0dcSelectRow.addEvent(function(rowid,status){
var rowdata = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getRowData',rowid);if (status) {
compRefc7e12bd3115b7847f8dad6dc0d95eddcf29b = rowid;operaButtonName = null;
table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Reload(rowid,rowdata,'');}
});
tablee00d137a3d55d04613f8fd976ef9e342d0dcLoadComplete.addEvent(function(data){
var rowdata = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table7c0e0e285ce33e4906b9cd0f1bd8eb691e65Reload('null',rowdata,'');
}
});
table7c0e0e285ce33e4906b9cd0f1bd8eb691e65LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b4c15f0190b556391b0d19/table7c0e0e285ce33e4906b9cd0f1bd8eb691e65/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable7c0e0e285ce33e4906b9cd0f1bd8eb691e65,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table7c0e0e285ce33e4906b9cd0f1bd8eb691e65SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table7c0e0e285ce33e4906b9cd0f1bd8eb691e65LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table7c0e0e285ce33e4906b9cd0f1bd8eb691e65OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table7c0e0e285ce33e4906b9cd0f1bd8eb691e65OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table7c0e0e285ce33e4906b9cd0f1bd8eb691e65GridComplete.exec();
				    setTimeout(function(){var height = $("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").closest('.ui-jqgrid-bdiv').height();
					$("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords img").css("width","120px");
                 }else{
					    $("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table7c0e0e285ce33e4906b9cd0f1bd8eb691e65BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table7c0e0e285ce33e4906b9cd0f1bd8eb691e65OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords").hide();
		   	    $("#Pagertable7c0e0e285ce33e4906b9cd0f1bd8eb691e65_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords").html() == null) {
						$("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").parent().append("<div class='no_data' id='table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65norecords").show();
					$("#Pagertable7c0e0e285ce33e4906b9cd0f1bd8eb691e65_left").css("display", "none");
				}
table7c0e0e285ce33e4906b9cd0f1bd8eb691e65LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable7c0e0e285ce33e4906b9cd0f1bd8eb691e65"
    });
$("#t_table7c0e0e285ce33e4906b9cd0f1bd8eb691e65").append($("#tableToolbartable7c0e0e285ce33e4906b9cd0f1bd8eb691e65"));$("#tableToolbarButtonc5ea6934cc825d408ab845e9aa7578638632").bind('click',function() {                                                                       
	if (compRefc7e12bd3115b7847f8dad6dc0d95eddcf29b == null || compRefc7e12bd3115b7847f8dad6dc0d95eddcf29b=='' ) {              
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
       var ids = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getRowData', ids[0]);
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390bfe4bb0190c35f3e523625&fkcol=FCK_ID&fkvalue='+compRefc7e12bd3115b7847f8dad6dc0d95eddcf29b+'&grid=table7c0e0e285ce33e4906b9cd0f1bd8eb691e65',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton354f5fd52c4893414cb8b8ed5f8ef7870fc7").bind('click',function() {                                                                                       
	var ids = $('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').jqGrid('getGridParam', 'selarrrow');                            
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
           var idss = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getGridParam', 'selarrrow');                            
	if (idss.length == 0) {                                                                          
		layer.alert('请选择主任务进行编辑！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (idss.length > 1) {                                                                    
		layer.alert('请选择一条主任务进行编辑！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowDatas = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getRowData', idss[0]);
       if(rowDatas.STATUS=="已完成"){
              layer.alert('该任务已结束！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 
         }                                                                         
	var rowData = $('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390bfe4bb0190c35f3e523625&id=' + rowData.ID+'&fkcol=FCK_ID&fkvalue='+compRefc7e12bd3115b7847f8dad6dc0d95eddcf29b+'&grid=table7c0e0e285ce33e4906b9cd0f1bd8eb691e65',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonf97d52edb09ae542c908412f83fcab52ffc2").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').jqGrid("delRowData", bpmsDeleteRows[l]);  				
			}else{																			
				bpmsDeleteIds.push(bpmsDeleteRows[l]);										
			}																				
		}																					
       var ids = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getGridParam', 'selarrrow');                            
	if (ids.length == 0) {                                                                          
		layer.alert('请选择主任务进行删除！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (ids.length > 1) {                                                                    
		layer.alert('请选择一条主任务进行删除！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowData = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getRowData', ids[0]);
       if(rowData.STATUS=="已完成"){
              layer.alert('该任务已结束！', {                                                           
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GSGZJHFK&isbpm=N&dbid=948e83e390bfe4bb0190c360d5f6412c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5290b4c15f0190b556391b0d19',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tablee00d137a3d55d04613f8fd976ef9e342d0dc").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b4c15f0190b556391b0d19/tablee00d137a3d55d04613f8fd976ef9e342d0dc/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee00d137a3d55d04613f8fd976ef9e342d0dc,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee00d137a3d55d04613f8fd976ef9e342d0dcSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee00d137a3d55d04613f8fd976ef9e342d0dcLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee00d137a3d55d04613f8fd976ef9e342d0dcOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee00d137a3d55d04613f8fd976ef9e342d0dcOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee00d137a3d55d04613f8fd976ef9e342d0dcGridComplete.exec();
				    setTimeout(function(){var height = $("#tablee00d137a3d55d04613f8fd976ef9e342d0dc").closest('.ui-jqgrid-bdiv').height();
					$("#tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords img").css("width","120px");
                 }else{
					    $("#tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee00d137a3d55d04613f8fd976ef9e342d0dcBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee00d137a3d55d04613f8fd976ef9e342d0dcOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords").hide();
		   	    $("#Pagertablee00d137a3d55d04613f8fd976ef9e342d0dc_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee00d137a3d55d04613f8fd976ef9e342d0dc").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee00d137a3d55d04613f8fd976ef9e342d0dc").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords").html() == null) {
						$("#tablee00d137a3d55d04613f8fd976ef9e342d0dc").parent().append("<div class='no_data' id='tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee00d137a3d55d04613f8fd976ef9e342d0dcnorecords").show();
					$("#Pagertablee00d137a3d55d04613f8fd976ef9e342d0dc_left").css("display", "none");
				}
tablee00d137a3d55d04613f8fd976ef9e342d0dcLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee00d137a3d55d04613f8fd976ef9e342d0dc"
    });
tablee00d137a3d55d04613f8fd976ef9e342d0dcReload();
$("#t_tablee00d137a3d55d04613f8fd976ef9e342d0dc").append($("#tableToolbartablee00d137a3d55d04613f8fd976ef9e342d0dc"));$('#tablee00d137a3d55d04613f8fd976ef9e342d0dcworkFlowSelect').bind('change',function(){
tablee00d137a3d55d04613f8fd976ef9e342d0dcinitWorkFlow($(this).val());
});
$("#tableToolbarButton84533f9ca70feb4c191b2ae56ed7eea3cfeb").bind('click',function(event){var sbids = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var sbrowData = $('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('getRowData', sbids[0]);
       if(sbrowData.STATUS=="已完成"){
              layer.alert('该任务已经完成，不能重复上报！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 
         }


  avicAjax.ajax({/*更新公司工作计划上报状态*/
                            url : 'platform/avicit/pb/partyorgplan/updateStatusController/operation/updateGsFkStatus',
                            data : {
                                formId: sbrowData.ID
                            },
                            type : 'POST',
                            dataType : 'JSON',
                            async : false,
                            success : function(result) {
                            
                                 tablee00d137a3d55d04613f8fd976ef9e342d0dcReload();/*刷新列表*/

                            }
                        });});
;});	 
