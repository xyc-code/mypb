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

function redraw948e83e38ec23597018ec5e5f28a2772(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38ec23597018ec5e5f28a2772").width();
		var win_height = $("#948e83e38ec23597018ec5e5f28a2772").height();
		$('#948e83e38ec23597018ec5e5f28a2772').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38ec23597018ec5e5f28a2772').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38ec23597018ec5e5f28a2772').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38ec23597018ec5e5f28a2772").width();
	setTimeout(function(){redraw948e83e38ec23597018ec5e5f28a2772(win_width);},500);
});
var compRef1df36826aa23094f2f890ec97c01be032399='';
var tablead76bbf49c86804842385e269fc52b070a01KeyWordIn = "";    
var tablead76bbf49c86804842385e269fc52b070a01ParamIn = "";    
var tablead76bbf49c86804842385e269fc52b070a01SelectRow = {     
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
var tablead76bbf49c86804842385e269fc52b070a01LoadComplete = {     
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
var tablead76bbf49c86804842385e269fc52b070a01BeforeEditCell = {        
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
var tablead76bbf49c86804842385e269fc52b070a01OndblClickRow = {     
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
var tablead76bbf49c86804842385e269fc52b070a01OnRightClickRow = {     
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
var tablead76bbf49c86804842385e269fc52b070a01GridComplete = {     
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
var tablead76bbf49c86804842385e269fc52b070a01OnCellSelect = {     
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
var tablead76bbf49c86804842385e269fc52b070a01LoadBeforeSend = {        
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
function tablead76bbf49c86804842385e269fc52b070a01Reload(pid){
	var _isInvalid = true;
	$("#tablead76bbf49c86804842385e269fc52b070a01").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablead76bbf49c86804842385e269fc52b070a01Pid = pid;
		}
		return false;
	}
	window.tablead76bbf49c86804842385e269fc52b070a01Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablead76bbf49c86804842385e269fc52b070a01').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablead76bbf49c86804842385e269fc52b070a01TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablead76bbf49c86804842385e269fc52b070a01Pid == 'undefined' || window.tablead76bbf49c86804842385e269fc52b070a01Pid!=null){
tablead76bbf49c86804842385e269fc52b070a01Reload(window.tablead76bbf49c86804842385e269fc52b070a01Pid);
}
}
var tablecmtablead76bbf49c86804842385e269fc52b070a01 = [];
var uniqueColtablead76bbf49c86804842385e269fc52b070a01 = [];
var uniqueColTitletablead76bbf49c86804842385e269fc52b070a01 = [];
var defaultValuetablead76bbf49c86804842385e269fc52b070a01 = {};
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '家庭人员姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '关系',hidden:false, name: 'GX',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '年龄',hidden:false, name: 'AGE',align:'right',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '工资',hidden:false, name: 'GZ',align:'right',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '工作单位',hidden:false, name: 'UNIT',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '职务',hidden:false, name: 'POST',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablead76bbf49c86804842385e269fc52b070a01.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var table8e5b89da5b83d64fec88a8a8a77655834b04KeyWordIn = "";    
var table8e5b89da5b83d64fec88a8a8a77655834b04ParamIn = "";    
var table8e5b89da5b83d64fec88a8a8a77655834b04SelectRow = {     
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
var table8e5b89da5b83d64fec88a8a8a77655834b04LoadComplete = {     
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
var table8e5b89da5b83d64fec88a8a8a77655834b04BeforeEditCell = {        
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
var table8e5b89da5b83d64fec88a8a8a77655834b04OndblClickRow = {     
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
var table8e5b89da5b83d64fec88a8a8a77655834b04OnRightClickRow = {     
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
var table8e5b89da5b83d64fec88a8a8a77655834b04GridComplete = {     
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
var table8e5b89da5b83d64fec88a8a8a77655834b04OnCellSelect = {     
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
var table8e5b89da5b83d64fec88a8a8a77655834b04LoadBeforeSend = {        
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
function table8e5b89da5b83d64fec88a8a8a77655834b04Reload(pid){
	var _isInvalid = true;
	$("#table8e5b89da5b83d64fec88a8a8a77655834b04").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8e5b89da5b83d64fec88a8a8a77655834b04Pid = pid;
		}
		return false;
	}
	window.table8e5b89da5b83d64fec88a8a8a77655834b04Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table8e5b89da5b83d64fec88a8a8a77655834b04Reload();
};
function table8e5b89da5b83d64fec88a8a8a77655834b04TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8e5b89da5b83d64fec88a8a8a77655834b04Pid == 'undefined' || window.table8e5b89da5b83d64fec88a8a8a77655834b04Pid!=null){
table8e5b89da5b83d64fec88a8a8a77655834b04Reload(window.table8e5b89da5b83d64fec88a8a8a77655834b04Pid);
}
}
var tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04 = [];
var uniqueColtable8e5b89da5b83d64fec88a8a8a77655834b04 = [];
var uniqueColTitletable8e5b89da5b83d64fec88a8a8a77655834b04 = [];
var defaultValuetable8e5b89da5b83d64fec88a8a8a77655834b04 = {};
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '单位',hidden:false, name: 'DRAF_DEPT',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '联系电话',hidden:false, name: 'DRAF_TEL',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '代办人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({ label: '姓名',hidden:false, name: 'USER_IDName',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '性别',hidden:false, name: 'SEX',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '年龄',hidden:false, name: 'AGE',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '职务',hidden:false, name: 'POST',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '招行卡号',hidden:false, name: 'IDCARD',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '本人标准工资',hidden:false, name: 'GZ',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '家庭总收入',hidden:false, name: 'JTZSR',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '平均生活费',hidden:false, name: 'PJSHF',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '家庭住址',hidden:false, name: 'ADDRESS',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '申请会费类型',hidden:false, name: 'SQHF_TYPE',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '致困发生金额',hidden:false, name: 'ZKFSJR',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '工会小组讨论日期', formatter:format, hidden:false, name: 'GH_XZTLR',align:'center',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '工会小组人数',hidden:false, name: 'GH_XZRS',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '参加讨论人数',hidden:false, name: 'GH_CJTLRS',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '参与率',hidden:false, name: 'GH_CYL',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '基层工会委员会讨论日期', formatter:format, hidden:false, name: 'JCGH_WYHTLRQ',align:'center',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '工会小组意见',hidden:false, name: 'GH_XZYJ',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '委员人数',hidden:false, name: 'JCGH_WYRS',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '参加讨论人数',hidden:false, name: 'JCGH_CJTLRS',align:'right',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '参与率',hidden:false, name: 'JCGH_CYL',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '基层工会委员会讨论意见',hidden:false, name: 'JCGH_WYHTLYJ',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable8e5b89da5b83d64fec88a8a8a77655834b04 = []; 
searchNamestable8e5b89da5b83d64fec88a8a8a77655834b04.push('DRAF_USER');
$('#keyWordtable8e5b89da5b83d64fec88a8a8a77655834b04').attr('placeholder', '请输入代办人查询');
function searchDataKeyWordtable8e5b89da5b83d64fec88a8a8a77655834b04(){
	var keyWord = $.trim($("#keyWordtable8e5b89da5b83d64fec88a8a8a77655834b04").val()); 
 if($('#keyWordtable8e5b89da5b83d64fec88a8a8a77655834b04').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable8e5b89da5b83d64fec88a8a8a77655834b04.length;i++){ 
		var name = searchNamestable8e5b89da5b83d64fec88a8a8a77655834b04[i]; 
		param[name] = keyWord; 
	} 
if ($("#table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect").length>0){param.bpmState=$('#table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table8e5b89da5b83d64fec88a8a8a77655834b04KeyWordIn=JSON.stringify(param);
table8e5b89da5b83d64fec88a8a8a77655834b04ParamIn="";
	$('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable8e5b89da5b83d64fec88a8a8a77655834b04').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable8e5b89da5b83d64fec88a8a8a77655834b04();
	}
});
$('#keyWordBttable8e5b89da5b83d64fec88a8a8a77655834b04').bind('click', function() {
		searchDataKeyWordtable8e5b89da5b83d64fec88a8a8a77655834b04();
});
function table8e5b89da5b83d64fec88a8a8a77655834b04initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton9db3b540f8c92345fe3830da2f672aa6d9f6").css('display','inline-block');
}else{
$("#tableToolbarButton9db3b540f8c92345fe3830da2f672aa6d9f6").hide();
}
table8e5b89da5b83d64fec88a8a8a77655834b04searchWF();
}
function table8e5b89da5b83d64fec88a8a8a77655834b04searchWF(){
   if ($("#searchformtable8e5b89da5b83d64fec88a8a8a77655834b04").length>0){
      var para = serializeObject($("#searchformtable8e5b89da5b83d64fec88a8a8a77655834b04"));
      para.bpmState = $('#table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table8e5b89da5b83d64fec88a8a8a77655834b04SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('getRowData',rowid);if (status) {
compRef1df36826aa23094f2f890ec97c01be032399 = rowid;operaButtonName = null;
tablead76bbf49c86804842385e269fc52b070a01Reload(rowid,rowdata,'');}
});
table8e5b89da5b83d64fec88a8a8a77655834b04LoadComplete.addEvent(function(data){
var rowdata = $('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
tablead76bbf49c86804842385e269fc52b070a01Reload('null',rowdata,'');
}
});
tablead76bbf49c86804842385e269fc52b070a01LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#tablead76bbf49c86804842385e269fc52b070a01").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38ec23597018ec5e5f28a2772/tablead76bbf49c86804842385e269fc52b070a01/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtablead76bbf49c86804842385e269fc52b070a01,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablead76bbf49c86804842385e269fc52b070a01SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablead76bbf49c86804842385e269fc52b070a01LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablead76bbf49c86804842385e269fc52b070a01OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablead76bbf49c86804842385e269fc52b070a01OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablead76bbf49c86804842385e269fc52b070a01GridComplete.exec();
				    setTimeout(function(){var height = $("#tablead76bbf49c86804842385e269fc52b070a01").closest('.ui-jqgrid-bdiv').height();
					$("#tablead76bbf49c86804842385e269fc52b070a01norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablead76bbf49c86804842385e269fc52b070a01norecords img").css("width","120px");
                 }else{
					    $("#tablead76bbf49c86804842385e269fc52b070a01norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablead76bbf49c86804842385e269fc52b070a01BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablead76bbf49c86804842385e269fc52b070a01OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablead76bbf49c86804842385e269fc52b070a01norecords").hide();
		   	    $("#Pagertablead76bbf49c86804842385e269fc52b070a01_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablead76bbf49c86804842385e269fc52b070a01").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablead76bbf49c86804842385e269fc52b070a01").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablead76bbf49c86804842385e269fc52b070a01norecords").html() == null) {
						$("#tablead76bbf49c86804842385e269fc52b070a01").parent().append("<div class='no_data' id='tablead76bbf49c86804842385e269fc52b070a01norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablead76bbf49c86804842385e269fc52b070a01norecords").show();
					$("#Pagertablead76bbf49c86804842385e269fc52b070a01_left").css("display", "none");
				}
tablead76bbf49c86804842385e269fc52b070a01LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablead76bbf49c86804842385e269fc52b070a01"
    });
$("#t_tablead76bbf49c86804842385e269fc52b070a01").append($("#tableToolbartablead76bbf49c86804842385e269fc52b070a01"));$("#table8e5b89da5b83d64fec88a8a8a77655834b04").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38ec23597018ec5e5f28a2772/table8e5b89da5b83d64fec88a8a8a77655834b04/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8e5b89da5b83d64fec88a8a8a77655834b04,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8e5b89da5b83d64fec88a8a8a77655834b04SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8e5b89da5b83d64fec88a8a8a77655834b04LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8e5b89da5b83d64fec88a8a8a77655834b04OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8e5b89da5b83d64fec88a8a8a77655834b04OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8e5b89da5b83d64fec88a8a8a77655834b04GridComplete.exec();
				    setTimeout(function(){var height = $("#table8e5b89da5b83d64fec88a8a8a77655834b04").closest('.ui-jqgrid-bdiv').height();
					$("#table8e5b89da5b83d64fec88a8a8a77655834b04norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8e5b89da5b83d64fec88a8a8a77655834b04norecords img").css("width","120px");
                 }else{
					    $("#table8e5b89da5b83d64fec88a8a8a77655834b04norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8e5b89da5b83d64fec88a8a8a77655834b04BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8e5b89da5b83d64fec88a8a8a77655834b04OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8e5b89da5b83d64fec88a8a8a77655834b04norecords").hide();
		   	    $("#Pagertable8e5b89da5b83d64fec88a8a8a77655834b04_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8e5b89da5b83d64fec88a8a8a77655834b04").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8e5b89da5b83d64fec88a8a8a77655834b04").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8e5b89da5b83d64fec88a8a8a77655834b04norecords").html() == null) {
						$("#table8e5b89da5b83d64fec88a8a8a77655834b04").parent().append("<div class='no_data' id='table8e5b89da5b83d64fec88a8a8a77655834b04norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8e5b89da5b83d64fec88a8a8a77655834b04norecords").show();
					$("#Pagertable8e5b89da5b83d64fec88a8a8a77655834b04_left").css("display", "none");
				}
table8e5b89da5b83d64fec88a8a8a77655834b04LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8e5b89da5b83d64fec88a8a8a77655834b04"
    });
table8e5b89da5b83d64fec88a8a8a77655834b04Reload();
$("#t_table8e5b89da5b83d64fec88a8a8a77655834b04").append($("#tableToolbartable8e5b89da5b83d64fec88a8a8a77655834b04"));$("#tableToolbarButton351df4a8e3a23f42486bf09e4fe95a000986").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38ec23597018ec586169d1a00&grid=table8e5b89da5b83d64fec88a8a8a77655834b04'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton9db3b540f8c92345fe3830da2f672aa6d9f6").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_LSKNBZSQ&isbpm=Y&dbid=948e83e38ec23597018ec59ec1ba1be4', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38ec23597018ec5e5f28a2772',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table8e5b89da5b83d64fec88a8a8a77655834b04').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton9db3b540f8c92345fe3830da2f672aa6d9f6").hide();
function searchDatatable8e5b89da5b83d64fec88a8a8a77655834b04(){
 var para = serializeObjectForEform($("#searchformtable8e5b89da5b83d64fec88a8a8a77655834b04"));
 para.bpmState = $('#table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table8e5b89da5b83d64fec88a8a8a77655834b04KeyWordIn="";
table8e5b89da5b83d64fec88a8a8a77655834b04ParamIn=JSON.stringify(para);
	$('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable8e5b89da5b83d64fec88a8a8a77655834b04").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable8e5b89da5b83d64fec88a8a8a77655834b04').bind('click',function(){
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
	content: $('#searchDialogtable8e5b89da5b83d64fec88a8a8a77655834b04'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable8e5b89da5b83d64fec88a8a8a77655834b04(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable8e5b89da5b83d64fec88a8a8a77655834b04")); searchDatatable8e5b89da5b83d64fec88a8a8a77655834b04(); layer.close(index); return false;
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
$('#USER_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'USER_ID',textFiled:'USER_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect').bind('change',function(){
table8e5b89da5b83d64fec88a8a8a77655834b04initWorkFlow($(this).val());
});
;});	 
