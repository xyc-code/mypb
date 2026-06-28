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

function redraw2c908c528ea146fb018ea18f5e181757(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528ea146fb018ea18f5e181757").width();
		var win_height = $("#2c908c528ea146fb018ea18f5e181757").height();
		$('#2c908c528ea146fb018ea18f5e181757').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c528ea146fb018ea18f5e181757').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c528ea146fb018ea18f5e181757').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528ea146fb018ea18f5e181757").width();
	setTimeout(function(){redraw2c908c528ea146fb018ea18f5e181757(win_width);},500);
});
var compRef0be7eea6d66a634579585db36f7e8bbfc19a='';
var table0fdd446f579a7c42c928008b27481201f656KeyWordIn = "";    
var table0fdd446f579a7c42c928008b27481201f656ParamIn = "";    
var table0fdd446f579a7c42c928008b27481201f656SelectRow = {     
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
var table0fdd446f579a7c42c928008b27481201f656LoadComplete = {     
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
var table0fdd446f579a7c42c928008b27481201f656BeforeEditCell = {        
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
var table0fdd446f579a7c42c928008b27481201f656OndblClickRow = {     
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
var table0fdd446f579a7c42c928008b27481201f656OnRightClickRow = {     
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
var table0fdd446f579a7c42c928008b27481201f656GridComplete = {     
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
var table0fdd446f579a7c42c928008b27481201f656OnCellSelect = {     
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
var table0fdd446f579a7c42c928008b27481201f656LoadBeforeSend = {        
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
function table0fdd446f579a7c42c928008b27481201f656Reload(pid){
	var _isInvalid = true;
	$("#table0fdd446f579a7c42c928008b27481201f656").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0fdd446f579a7c42c928008b27481201f656Pid = pid;
		}
		return false;
	}
	window.table0fdd446f579a7c42c928008b27481201f656Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0fdd446f579a7c42c928008b27481201f656').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0fdd446f579a7c42c928008b27481201f656TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0fdd446f579a7c42c928008b27481201f656Pid == 'undefined' || window.table0fdd446f579a7c42c928008b27481201f656Pid!=null){
table0fdd446f579a7c42c928008b27481201f656Reload(window.table0fdd446f579a7c42c928008b27481201f656Pid);
}
}
var tablecmtable0fdd446f579a7c42c928008b27481201f656 = [];
var uniqueColtable0fdd446f579a7c42c928008b27481201f656 = [];
var uniqueColTitletable0fdd446f579a7c42c928008b27481201f656 = [];
var defaultValuetable0fdd446f579a7c42c928008b27481201f656 = {};
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '治疗医院',hidden:false, name: 'HOSPITAL',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '住院日期开始', formatter:format, hidden:false, name: 'INHOSP_DATE',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '住院日期结束', formatter:format, hidden:false, name: 'OUTHOSP_DATE',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '医疗费金额',hidden:false, name: 'HEALTH_EXPENSE',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '统筹资金支付',hidden:false, name: 'OVERALL_EXPENSE',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'CREATED_DEPT',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_01',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_03',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_04',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_06',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_07',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_08',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_09',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_10',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_11',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_12',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_13',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_14',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_15',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_16',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_17',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_18',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_19',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_20',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: '主表ID',hidden:true, name: 'FK_ID',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'CREATED_BY',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'CREATION_DATE', formatter:format, hidden:true, name: 'CREATION_DATE',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'LAST_UPDATED_BY',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'LAST_UPDATE_DATE', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'LAST_UPDATE_IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'VERSION',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtable0fdd446f579a7c42c928008b27481201f656.push({label: 'ORG_IDENTITY',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
var table7b1c681cef4c974bb108d5cb7f01b46b83efKeyWordIn = "";    
var table7b1c681cef4c974bb108d5cb7f01b46b83efParamIn = "";    
var table7b1c681cef4c974bb108d5cb7f01b46b83efSelectRow = {     
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efLoadComplete = {     
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efBeforeEditCell = {        
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efOndblClickRow = {     
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efOnRightClickRow = {     
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efGridComplete = {     
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efOnCellSelect = {     
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
var table7b1c681cef4c974bb108d5cb7f01b46b83efLoadBeforeSend = {        
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
function table7b1c681cef4c974bb108d5cb7f01b46b83efReload(pid){
	var _isInvalid = true;
	$("#table7b1c681cef4c974bb108d5cb7f01b46b83ef").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table7b1c681cef4c974bb108d5cb7f01b46b83efPid = pid;
		}
		return false;
	}
	window.table7b1c681cef4c974bb108d5cb7f01b46b83efPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table7b1c681cef4c974bb108d5cb7f01b46b83efReload();
};
function table7b1c681cef4c974bb108d5cb7f01b46b83efTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table7b1c681cef4c974bb108d5cb7f01b46b83efPid == 'undefined' || window.table7b1c681cef4c974bb108d5cb7f01b46b83efPid!=null){
table7b1c681cef4c974bb108d5cb7f01b46b83efReload(window.table7b1c681cef4c974bb108d5cb7f01b46b83efPid);
}
}
var tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef = [];
var uniqueColtable7b1c681cef4c974bb108d5cb7f01b46b83ef = [];
var uniqueColTitletable7b1c681cef4c974bb108d5cb7f01b46b83ef = [];
var defaultValuetable7b1c681cef4c974bb108d5cb7f01b46b83ef = {};
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '年度',hidden:false, name: 'DRAF_YEAR',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '申请人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '申请时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '申请部门',hidden:false, name: 'DRAF_DEPT',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '患者姓名',hidden:true, name: 'PATIENTER_NAME',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '患者姓名',hidden:true, name: 'PATIENTER_ID',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '患者姓名',hidden:false, name: 'PATIENTER_IDName',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '患者性别',hidden:true, name: 'PATIENT_SEX',align:'center',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '患者性别',hidden:false, name: 'PATIENT_SEXName',align:'center',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '患者年龄',hidden:false, name: 'PATIENT_AGE',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '联系方式',hidden:false, name: 'PATIENT_TEL',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '疾病类型',hidden:true, name: 'DISEASE_TYPE',align:'center',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '疾病类型',hidden:false, name: 'DISEASE_TYPEName',align:'center',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '患病名称',hidden:false, name: 'DISEASE',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '住院日期开始', formatter:format, hidden:true, name: 'INHOSP_DATE',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '住院日期结束', formatter:format, hidden:true, name: 'OUTHOSP_DATE',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '报销职工卡号',hidden:false, name: 'EMPLOYEE_CARD',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '开户银行',hidden:true, name: 'DEPOSIT_BANK',align:'center',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ label: '开户银行',hidden:false, name: 'DEPOSIT_BANKName',align:'center',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '统筹基金支付总金额',hidden:false, name: 'OVERALL_EXPENSES',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '个人支付金额',hidden:false, name: 'PERSON_EXPENSES',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '申请报销金额',hidden:false, name: 'SUBMIT_EXPENSES',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '医疗费总金额',hidden:false, name: 'HEALTH_EXPENSES',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '报销比例',hidden:false, name: 'BXBL',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '创建部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段1',hidden:true, name: 'ATTRIBUTE_01',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段2',hidden:true, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段3',hidden:true, name: 'ATTRIBUTE_03',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段4',hidden:true, name: 'ATTRIBUTE_04',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段5',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段6',hidden:true, name: 'ATTRIBUTE_06',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段7',hidden:true, name: 'ATTRIBUTE_07',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段8',hidden:true, name: 'ATTRIBUTE_08',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段9',hidden:true, name: 'ATTRIBUTE_09',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '预留扩展字段10',hidden:true, name: 'ATTRIBUTE_10',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '组织标识',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '创建人',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '最后修改人',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '最后修改时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '最后更新IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '余额',hidden:true, name: 'BALANCE',align:'left',  width: '150px'});
tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef.push({label: '提交状态',hidden:true, name: 'STATUS',align:'left',  width: '150px'});
	var searchNamestable7b1c681cef4c974bb108d5cb7f01b46b83ef = []; 
searchNamestable7b1c681cef4c974bb108d5cb7f01b46b83ef.push('AUTO_CODE');
searchNamestable7b1c681cef4c974bb108d5cb7f01b46b83ef.push('EMPLOYEE_CARD');
$('#keyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef').attr('placeholder', '请输入表单编号、报销职工卡号查询');
function searchDataKeyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef(){
	var keyWord = $.trim($("#keyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef").val()); 
 if($('#keyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable7b1c681cef4c974bb108d5cb7f01b46b83ef.length;i++){ 
		var name = searchNamestable7b1c681cef4c974bb108d5cb7f01b46b83ef[i]; 
		param[name] = keyWord; 
	} 
if ($("#table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect").length>0){param.bpmState=$('#table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table7b1c681cef4c974bb108d5cb7f01b46b83efKeyWordIn=JSON.stringify(param);
table7b1c681cef4c974bb108d5cb7f01b46b83efParamIn="";
	$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef();
	}
});
$('#keyWordBttable7b1c681cef4c974bb108d5cb7f01b46b83ef').bind('click', function() {
		searchDataKeyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef();
});
function table7b1c681cef4c974bb108d5cb7f01b46b83efinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton4f55d0185a8aef47c8189e529558d2dcf87f").css('display','inline-block');
}else{
$("#tableToolbarButton4f55d0185a8aef47c8189e529558d2dcf87f").hide();
}
table7b1c681cef4c974bb108d5cb7f01b46b83efsearchWF();
}
function table7b1c681cef4c974bb108d5cb7f01b46b83efsearchWF(){
   if ($("#searchformtable7b1c681cef4c974bb108d5cb7f01b46b83ef").length>0){
      var para = serializeObject($("#searchformtable7b1c681cef4c974bb108d5cb7f01b46b83ef"));
      para.bpmState = $('#table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table7b1c681cef4c974bb108d5cb7f01b46b83efSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('getRowData',rowid);if (status) {
compRef0be7eea6d66a634579585db36f7e8bbfc19a = rowid;operaButtonName = null;
table0fdd446f579a7c42c928008b27481201f656Reload(rowid,rowdata,'');}
});
table7b1c681cef4c974bb108d5cb7f01b46b83efLoadComplete.addEvent(function(data){
var rowdata = $('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table0fdd446f579a7c42c928008b27481201f656Reload('null',rowdata,'');
}
});
table0fdd446f579a7c42c928008b27481201f656LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table0fdd446f579a7c42c928008b27481201f656").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528ea146fb018ea18f5e181757/table0fdd446f579a7c42c928008b27481201f656/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable0fdd446f579a7c42c928008b27481201f656,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0fdd446f579a7c42c928008b27481201f656SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0fdd446f579a7c42c928008b27481201f656LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0fdd446f579a7c42c928008b27481201f656OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0fdd446f579a7c42c928008b27481201f656OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0fdd446f579a7c42c928008b27481201f656GridComplete.exec();
				    setTimeout(function(){var height = $("#table0fdd446f579a7c42c928008b27481201f656").closest('.ui-jqgrid-bdiv').height();
					$("#table0fdd446f579a7c42c928008b27481201f656norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0fdd446f579a7c42c928008b27481201f656norecords img").css("width","120px");
                 }else{
					    $("#table0fdd446f579a7c42c928008b27481201f656norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0fdd446f579a7c42c928008b27481201f656BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0fdd446f579a7c42c928008b27481201f656OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0fdd446f579a7c42c928008b27481201f656norecords").hide();
		   	    $("#Pagertable0fdd446f579a7c42c928008b27481201f656_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0fdd446f579a7c42c928008b27481201f656").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0fdd446f579a7c42c928008b27481201f656").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0fdd446f579a7c42c928008b27481201f656norecords").html() == null) {
						$("#table0fdd446f579a7c42c928008b27481201f656").parent().append("<div class='no_data' id='table0fdd446f579a7c42c928008b27481201f656norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0fdd446f579a7c42c928008b27481201f656norecords").show();
					$("#Pagertable0fdd446f579a7c42c928008b27481201f656_left").css("display", "none");
				}
table0fdd446f579a7c42c928008b27481201f656LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0fdd446f579a7c42c928008b27481201f656"
    });
$("#t_table0fdd446f579a7c42c928008b27481201f656").append($("#tableToolbartable0fdd446f579a7c42c928008b27481201f656"));$("#table7b1c681cef4c974bb108d5cb7f01b46b83ef").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528ea146fb018ea18f5e181757/table7b1c681cef4c974bb108d5cb7f01b46b83ef/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable7b1c681cef4c974bb108d5cb7f01b46b83ef,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table7b1c681cef4c974bb108d5cb7f01b46b83efSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table7b1c681cef4c974bb108d5cb7f01b46b83efLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table7b1c681cef4c974bb108d5cb7f01b46b83efOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table7b1c681cef4c974bb108d5cb7f01b46b83efOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table7b1c681cef4c974bb108d5cb7f01b46b83efGridComplete.exec();
				    setTimeout(function(){var height = $("#table7b1c681cef4c974bb108d5cb7f01b46b83ef").closest('.ui-jqgrid-bdiv').height();
					$("#table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords img").css("width","120px");
                 }else{
					    $("#table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table7b1c681cef4c974bb108d5cb7f01b46b83efBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table7b1c681cef4c974bb108d5cb7f01b46b83efOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords").hide();
		   	    $("#Pagertable7b1c681cef4c974bb108d5cb7f01b46b83ef_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table7b1c681cef4c974bb108d5cb7f01b46b83ef").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table7b1c681cef4c974bb108d5cb7f01b46b83ef").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords").html() == null) {
						$("#table7b1c681cef4c974bb108d5cb7f01b46b83ef").parent().append("<div class='no_data' id='table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table7b1c681cef4c974bb108d5cb7f01b46b83efnorecords").show();
					$("#Pagertable7b1c681cef4c974bb108d5cb7f01b46b83ef_left").css("display", "none");
				}
table7b1c681cef4c974bb108d5cb7f01b46b83efLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable7b1c681cef4c974bb108d5cb7f01b46b83ef"
    });
table7b1c681cef4c974bb108d5cb7f01b46b83efReload();
$("#t_table7b1c681cef4c974bb108d5cb7f01b46b83ef").append($("#tableToolbartable7b1c681cef4c974bb108d5cb7f01b46b83ef"));function searchDatatable7b1c681cef4c974bb108d5cb7f01b46b83ef(){
 var para = serializeObjectForEform($("#searchformtable7b1c681cef4c974bb108d5cb7f01b46b83ef"));
 para.bpmState = $('#table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table7b1c681cef4c974bb108d5cb7f01b46b83efKeyWordIn="";
table7b1c681cef4c974bb108d5cb7f01b46b83efParamIn=JSON.stringify(para);
	$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable7b1c681cef4c974bb108d5cb7f01b46b83ef").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable7b1c681cef4c974bb108d5cb7f01b46b83ef').bind('click',function(){
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
	content: $('#searchDialogtable7b1c681cef4c974bb108d5cb7f01b46b83ef'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable7b1c681cef4c974bb108d5cb7f01b46b83ef(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable7b1c681cef4c974bb108d5cb7f01b46b83ef")); searchDatatable7b1c681cef4c974bb108d5cb7f01b46b83ef(); layer.close(index); return false;
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
$('#PATIENTER_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'PATIENTER_ID',textFiled:'PATIENTER_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#CREATION_DATE_START_button').click(function(e){
			$('#CREATION_DATE_START').datepicker('show');
			$('#CREATION_DATE_START').datepicker().trigger('click');
}); 
$('#CREATION_DATE_END_button').click(function(e){
			$('#CREATION_DATE_END').datepicker('show');
			$('#CREATION_DATE_END').datepicker().trigger('click');
}); 
$('#table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect').bind('change',function(){
table7b1c681cef4c974bb108d5cb7f01b46b83efinitWorkFlow($(this).val());
});
$("#tableToolbarButton394beb7ae5d3c540b079bc7055d39e1c67e3").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528ea146fb018ea15384bb0cf7&grid=table7b1c681cef4c974bb108d5cb7f01b46b83ef'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton4f55d0185a8aef47c8189e529558d2dcf87f").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DA_CARE_MEDICINE&isbpm=Y&dbid=2c908c528ea146fb018ea152e5b90c8d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c528ea146fb018ea18f5e181757',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton4f55d0185a8aef47c8189e529558d2dcf87f").hide();
$("#tableToolbarButton08b6e518bf3a3b40eca86db29df026c8c15d").bind('click',function(event){layer.open({
	    type: 2,
		area: ['100%', '100%'],
	    title: '日历配置',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: 'platform/eform/bpmsCRUDClient/toViewJsp/axylrlpz' 
	});});
$("#tableToolbarButton31be7261020c834f0029dc87ae410e895ba9").bind('click',function(event){layer.open({
	    type: 2,
		area: ['100%', '100%'],
	    title: '爱心医疗人员配置',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: 'platform/eform/bpmsCRUDClient/toViewJsp/axylrylist/'
	});});

$('#tableToolbarButtonca182f7ed694ff40c11891b19b9eb0c431e0').bind('click',function() {                           
	layer.open({                         
	    type : 2,                        
	    area : ['400px', '300px'],       
	    title: '导出',                   
	    skin: 'bs-modal',                
	    maxmin: false,                   
	    btn: ['导出', '取消'],            
	    content: 'avicit/platform6/eform/bmpsformdatatool/exportFileType.jsp',       
	    yes:function(index, layero){                                                 
	        var iframeWin = layero.find('iframe')[0].contentWindow;                  
	        var fileType = iframeWin.$("input[name='exportType']:checked").val();  
	        var layout = iframeWin.$('#direction :selected').val();                  
	        var showColModels = new Array();                                         
	        var blockFields = new Array();                                           
	        var colModels =$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('getGridParam','colModel');   
	        for(var i = 0; i < colModels.length; i++){                               
	            if(colModels[i].hidden == false && colModels[i].name != 'cb'){       
	                showColModels.push(colModels[i]);                                
	            }else{                                                               
	                blockFields.push(colModels[i].name);                             
	            }                                                                    
	        }                                                                        
	        var dataGridFields = JSON.stringify(colModels);                          
	        expSearchParams = {};                                                    
	        expSearchParams.fileType = fileType;                                     
	        expSearchParams.dataGridFields = dataGridFields;                         
	        expSearchParams.keyWord = table7b1c681cef4c974bb108d5cb7f01b46b83efKeyWordIn;                          
	        expSearchParams.param = table7b1c681cef4c974bb108d5cb7f01b46b83efParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='东安爱心医疗';                             
	        expSearchParams.viewid='2c908c528ea146fb018ea18f5e181757';                                   
	        expSearchParams.tableid='table7b1c681cef4c974bb108d5cb7f01b46b83ef';                                 
	        expSearchParams.isbpm='Y';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/V1'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
;});	 
