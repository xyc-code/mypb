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

function redraw402881a78999fd6001899a1681ff05bf(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402881a78999fd6001899a1681ff05bf").width();
		var win_height = $("#402881a78999fd6001899a1681ff05bf").height();
		$('#402881a78999fd6001899a1681ff05bf').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#402881a78999fd6001899a1681ff05bf').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#402881a78999fd6001899a1681ff05bf').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402881a78999fd6001899a1681ff05bf").width();
	setTimeout(function(){redraw402881a78999fd6001899a1681ff05bf(win_width);},500);
});
var compRefdc19e07e2c4d0f422c9ac00e9a1709dfef11='';
var tablef65a629a0914c04d0379b2c18c344ca06cf3KeyWordIn = "";    
var tablef65a629a0914c04d0379b2c18c344ca06cf3ParamIn = "";    
var tablef65a629a0914c04d0379b2c18c344ca06cf3SelectRow = {     
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3LoadComplete = {     
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3BeforeEditCell = {        
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3OndblClickRow = {     
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3OnRightClickRow = {     
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3GridComplete = {     
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3OnCellSelect = {     
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
var tablef65a629a0914c04d0379b2c18c344ca06cf3LoadBeforeSend = {        
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
function tablef65a629a0914c04d0379b2c18c344ca06cf3Reload(pid){
	var _isInvalid = true;
	$("#tablef65a629a0914c04d0379b2c18c344ca06cf3").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef65a629a0914c04d0379b2c18c344ca06cf3Pid = pid;
		}
		return false;
	}
	window.tablef65a629a0914c04d0379b2c18c344ca06cf3Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef65a629a0914c04d0379b2c18c344ca06cf3').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablef65a629a0914c04d0379b2c18c344ca06cf3Reload();
};
function tablef65a629a0914c04d0379b2c18c344ca06cf3TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef65a629a0914c04d0379b2c18c344ca06cf3Pid == 'undefined' || window.tablef65a629a0914c04d0379b2c18c344ca06cf3Pid!=null){
tablef65a629a0914c04d0379b2c18c344ca06cf3Reload(window.tablef65a629a0914c04d0379b2c18c344ca06cf3Pid);
}
}
var tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3 = [];
var uniqueColtablef65a629a0914c04d0379b2c18c344ca06cf3 = [];
var uniqueColTitletablef65a629a0914c04d0379b2c18c344ca06cf3 = [];
var defaultValuetablef65a629a0914c04d0379b2c18c344ca06cf3 = {};
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '主表ID',hidden:true, name: 'ATTRIBUTE_03',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '姓名05',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '姓名',hidden:false, name: 'USER_IDName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '部门',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '部门',hidden:false, name: 'DEPT_IDName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '性别',hidden:true, name: 'SEX',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '性别',hidden:false, name: 'SEXName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '工会',hidden:true, name: 'TRADE_UNION_ID',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '身份证号',hidden:false, name: 'IDCARD',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '出行年月', formatter:format, hidden:false, name: 'BIRTHDAY',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '入会时间', formatter:format, hidden:false, name: 'JOIN_PARTY',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '籍贯',hidden:false, name: 'ORIGN',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '文化程度',hidden:true, name: 'EDUCATION_LEVEL',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '文化程度',hidden:false, name: 'EDUCATION_LEVELName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '政治面貌',hidden:true, name: 'POLITICAL_OUTLOOK',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '政治面貌',hidden:false, name: 'POLITICAL_OUTLOOKName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '职务',hidden:false, name: 'POST',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '职称',hidden:false, name: 'PROFESSIONAL_RANK',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '身份类别',hidden:true, name: 'CATEGORY',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '身份类别',hidden:false, name: 'CATEGORYName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '在职/离职',hidden:true, name: 'ONOFF_JOB',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({ label: '在职/离职',hidden:false, name: 'ONOFF_JOBName',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '会费金额(季度)',hidden:false, name: 'PARTY_MONEY',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '是否转出IN在内部OUT已经转出',hidden:true, name: 'STATUS',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: 'B流程中E流程完成',hidden:true, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_11',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_09',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_07',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_15',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_14',align:'right',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_08',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_06',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_13',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_12',align:'right',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_10',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '字段_4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var table9cc85ed30f9ec4487428b197099681f91b5dKeyWordIn = "";    
var table9cc85ed30f9ec4487428b197099681f91b5dParamIn = "";    
var table9cc85ed30f9ec4487428b197099681f91b5dSelectRow = {     
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
var table9cc85ed30f9ec4487428b197099681f91b5dLoadComplete = {     
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
var table9cc85ed30f9ec4487428b197099681f91b5dBeforeEditCell = {        
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
var table9cc85ed30f9ec4487428b197099681f91b5dOndblClickRow = {     
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
var table9cc85ed30f9ec4487428b197099681f91b5dOnRightClickRow = {     
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
var table9cc85ed30f9ec4487428b197099681f91b5dGridComplete = {     
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
var table9cc85ed30f9ec4487428b197099681f91b5dOnCellSelect = {     
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
var table9cc85ed30f9ec4487428b197099681f91b5dLoadBeforeSend = {        
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
function table9cc85ed30f9ec4487428b197099681f91b5dReload(pid){
	var _isInvalid = true;
	$("#table9cc85ed30f9ec4487428b197099681f91b5d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table9cc85ed30f9ec4487428b197099681f91b5dPid = pid;
		}
		return false;
	}
	window.table9cc85ed30f9ec4487428b197099681f91b5dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table9cc85ed30f9ec4487428b197099681f91b5d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table9cc85ed30f9ec4487428b197099681f91b5dReload();
};
function table9cc85ed30f9ec4487428b197099681f91b5dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table9cc85ed30f9ec4487428b197099681f91b5dPid == 'undefined' || window.table9cc85ed30f9ec4487428b197099681f91b5dPid!=null){
table9cc85ed30f9ec4487428b197099681f91b5dReload(window.table9cc85ed30f9ec4487428b197099681f91b5dPid);
}
}
var tablecmtable9cc85ed30f9ec4487428b197099681f91b5d = [];
var uniqueColtable9cc85ed30f9ec4487428b197099681f91b5d = [];
var uniqueColTitletable9cc85ed30f9ec4487428b197099681f91b5d = [];
var defaultValuetable9cc85ed30f9ec4487428b197099681f91b5d = {};
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '报送人',hidden:false, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '报送部门',hidden:false, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '所在工会',hidden:false, name: 'TRADE_UNION_NAME',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '所在工会ID',hidden:true, name: 'TRADE_UNION_ID',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({ label: '变动类别',hidden:true, name: 'TRANSFER_TYPE',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({ label: '变动类别',hidden:false, name: 'TRANSFER_TYPEName',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '报送日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '上报人电话：',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '目的工会ID',hidden:true, name: 'IN_TU_ORG_ID',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '目的工会',hidden:false, name: 'IN_TU_ORG',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '目的工会小组ID',hidden:true, name: 'IN_TU_OR_GR_ID',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '目的工会小组名称',hidden:true, name: 'IN_TU_OR_GR_NAME',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段7', formatter:format, hidden:true, name: 'DATA_7',align:'center',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段1',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段6',hidden:true, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段2',hidden:true, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段5',hidden:true, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '备用字段8',hidden:true, name: 'DATA_8',align:'right',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable9cc85ed30f9ec4487428b197099681f91b5d.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});;$(document).ready(function(){ 

table9cc85ed30f9ec4487428b197099681f91b5dSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table9cc85ed30f9ec4487428b197099681f91b5d').jqGrid('getRowData',rowid);if (status) {
compRefdc19e07e2c4d0f422c9ac00e9a1709dfef11 = rowid;operaButtonName = null;
tablef65a629a0914c04d0379b2c18c344ca06cf3Reload(rowid,rowdata,'');}
});
table9cc85ed30f9ec4487428b197099681f91b5dLoadComplete.addEvent(function(data){
var rowdata = $('#table9cc85ed30f9ec4487428b197099681f91b5d').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
tablef65a629a0914c04d0379b2c18c344ca06cf3Reload('null',rowdata,'');
}
});
tablef65a629a0914c04d0379b2c18c344ca06cf3LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#tablef65a629a0914c04d0379b2c18c344ca06cf3").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402881a78999fd6001899a1681ff05bf/tablef65a629a0914c04d0379b2c18c344ca06cf3/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtablef65a629a0914c04d0379b2c18c344ca06cf3,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef65a629a0914c04d0379b2c18c344ca06cf3SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef65a629a0914c04d0379b2c18c344ca06cf3LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef65a629a0914c04d0379b2c18c344ca06cf3OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef65a629a0914c04d0379b2c18c344ca06cf3OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef65a629a0914c04d0379b2c18c344ca06cf3GridComplete.exec();
				    setTimeout(function(){var height = $("#tablef65a629a0914c04d0379b2c18c344ca06cf3").closest('.ui-jqgrid-bdiv').height();
					$("#tablef65a629a0914c04d0379b2c18c344ca06cf3norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef65a629a0914c04d0379b2c18c344ca06cf3norecords img").css("width","120px");
                 }else{
					    $("#tablef65a629a0914c04d0379b2c18c344ca06cf3norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef65a629a0914c04d0379b2c18c344ca06cf3BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablef65a629a0914c04d0379b2c18c344ca06cf3OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef65a629a0914c04d0379b2c18c344ca06cf3norecords").hide();
		   	    $("#Pagertablef65a629a0914c04d0379b2c18c344ca06cf3_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef65a629a0914c04d0379b2c18c344ca06cf3").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef65a629a0914c04d0379b2c18c344ca06cf3").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef65a629a0914c04d0379b2c18c344ca06cf3norecords").html() == null) {
						$("#tablef65a629a0914c04d0379b2c18c344ca06cf3").parent().append("<div class='no_data' id='tablef65a629a0914c04d0379b2c18c344ca06cf3norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef65a629a0914c04d0379b2c18c344ca06cf3norecords").show();
					$("#Pagertablef65a629a0914c04d0379b2c18c344ca06cf3_left").css("display", "none");
				}
tablef65a629a0914c04d0379b2c18c344ca06cf3LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablef65a629a0914c04d0379b2c18c344ca06cf3"
    });
$("#t_tablef65a629a0914c04d0379b2c18c344ca06cf3").append($("#tableToolbartablef65a629a0914c04d0379b2c18c344ca06cf3"));$("#table9cc85ed30f9ec4487428b197099681f91b5d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402881a78999fd6001899a1681ff05bf/table9cc85ed30f9ec4487428b197099681f91b5d/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable9cc85ed30f9ec4487428b197099681f91b5d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table9cc85ed30f9ec4487428b197099681f91b5dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table9cc85ed30f9ec4487428b197099681f91b5dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table9cc85ed30f9ec4487428b197099681f91b5dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table9cc85ed30f9ec4487428b197099681f91b5dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table9cc85ed30f9ec4487428b197099681f91b5dGridComplete.exec();
				    setTimeout(function(){var height = $("#table9cc85ed30f9ec4487428b197099681f91b5d").closest('.ui-jqgrid-bdiv').height();
					$("#table9cc85ed30f9ec4487428b197099681f91b5dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table9cc85ed30f9ec4487428b197099681f91b5dnorecords img").css("width","120px");
                 }else{
					    $("#table9cc85ed30f9ec4487428b197099681f91b5dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table9cc85ed30f9ec4487428b197099681f91b5dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table9cc85ed30f9ec4487428b197099681f91b5dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table9cc85ed30f9ec4487428b197099681f91b5dnorecords").hide();
		   	    $("#Pagertable9cc85ed30f9ec4487428b197099681f91b5d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table9cc85ed30f9ec4487428b197099681f91b5d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table9cc85ed30f9ec4487428b197099681f91b5d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table9cc85ed30f9ec4487428b197099681f91b5dnorecords").html() == null) {
						$("#table9cc85ed30f9ec4487428b197099681f91b5d").parent().append("<div class='no_data' id='table9cc85ed30f9ec4487428b197099681f91b5dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table9cc85ed30f9ec4487428b197099681f91b5dnorecords").show();
					$("#Pagertable9cc85ed30f9ec4487428b197099681f91b5d_left").css("display", "none");
				}
table9cc85ed30f9ec4487428b197099681f91b5dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable9cc85ed30f9ec4487428b197099681f91b5d"
    });
table9cc85ed30f9ec4487428b197099681f91b5dReload();
$("#t_table9cc85ed30f9ec4487428b197099681f91b5d").append($("#tableToolbartable9cc85ed30f9ec4487428b197099681f91b5d"));$("#tableToolbarButtonfca094c1760ece4a4bdaacec2c8ad1ce002e").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402881a7899632920189964648f70332&grid=table9cc85ed30f9ec4487428b197099681f91b5d'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton4f636a6ee7921946112bbaef7caac449c573").bind('click',function(event){flowUtils.openOnDialog('platform/bpm/business/start?defineId=402881a789ae865d0189ae9c550a037f-1','工会会员关系转接')});
;});	 
