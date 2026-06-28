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

function redraw948e83e390ba1eca0190bea1af8768f4(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390ba1eca0190bea1af8768f4").width();
		var win_height = $("#948e83e390ba1eca0190bea1af8768f4").height();
		$('#948e83e393677b3c01936ba0031c4e26').layout('panel', 'west').panel('resize',{width:win_width*0.5,height:win_height*0.5});
		$('#948e83e393677b3c01936ba0031c4e26').layout('resize');
		$('#948e83e390ba1eca0190bea1af8768f4').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e390ba1eca0190bea1af8768f4').layout('panel', 'center').panel('resize',{width:win_width*0.5,height:win_height*0.5});
		$('#948e83e390ba1eca0190bea1af8768f4').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390ba1eca0190bea1af8768f4").width();
	setTimeout(function(){redraw948e83e390ba1eca0190bea1af8768f4(win_width);},500);
});
var compRef52deda0700f457487078d00c73f5249ef2fc='';
var compRef307ca7523acc594098e856852903c06bd191='';
var table35c9bb8515b0b1485ba8d8ce85afca71b32aKeyWordIn = "";    
var table35c9bb8515b0b1485ba8d8ce85afca71b32aParamIn = "";    
var table35c9bb8515b0b1485ba8d8ce85afca71b32aSelectRow = {     
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aLoadComplete = {     
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aBeforeEditCell = {        
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aOndblClickRow = {     
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aOnRightClickRow = {     
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aGridComplete = {     
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aOnCellSelect = {     
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
var table35c9bb8515b0b1485ba8d8ce85afca71b32aLoadBeforeSend = {        
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
function table35c9bb8515b0b1485ba8d8ce85afca71b32aReload(pid){
	var _isInvalid = true;
	$("#table35c9bb8515b0b1485ba8d8ce85afca71b32a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table35c9bb8515b0b1485ba8d8ce85afca71b32aPid = pid;
		}
		return false;
	}
	window.table35c9bb8515b0b1485ba8d8ce85afca71b32aPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table35c9bb8515b0b1485ba8d8ce85afca71b32a').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table35c9bb8515b0b1485ba8d8ce85afca71b32aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table35c9bb8515b0b1485ba8d8ce85afca71b32aPid == 'undefined' || window.table35c9bb8515b0b1485ba8d8ce85afca71b32aPid!=null){
table35c9bb8515b0b1485ba8d8ce85afca71b32aReload(window.table35c9bb8515b0b1485ba8d8ce85afca71b32aPid);
}
}
var tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a = [];
var uniqueColtable35c9bb8515b0b1485ba8d8ce85afca71b32a = [];
var uniqueColTitletable35c9bb8515b0b1485ba8d8ce85afca71b32a = [];
var defaultValuetable35c9bb8515b0b1485ba8d8ce85afca71b32a = {};
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({ label: '责任单位',hidden:true, name: 'ZRDW',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({ label: '责任单位',hidden:false, name: 'ZRDWName',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '下发计划时间', formatter:format, hidden:false, name: 'XF_PLAN_DATE',align:'center',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '计划开始时间', formatter:format, hidden:false, name: 'PLAN_S_DATE',align:'center',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '工作内容',hidden:false, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '计划结束时间', formatter:format, hidden:false, name: 'PLAN_E_DATE',align:'center',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '工作目标',hidden:false, name: 'WORK_MB',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '工作任务',hidden:false, name: 'GZRW',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({ label: '工作类别',hidden:true, name: 'GZLB',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({ label: '工作类别',hidden:false, name: 'GZLBName',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '主要负责人',hidden:true, name: 'MAIN_FZR',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '副主要负责人',hidden:true, name: 'F_MAIN_FZR',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeKeyWordIn = "";    
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeParamIn = "";    
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeSelectRow = {     
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeLoadComplete = {     
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeBeforeEditCell = {        
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeOndblClickRow = {     
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeOnRightClickRow = {     
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeGridComplete = {     
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeOnCellSelect = {     
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
var table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeLoadBeforeSend = {        
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
function table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeReload(pid){
	var _isInvalid = true;
	$("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0ed4bdc7480cf84f6508f3bb2e4dc002a3eePid = pid;
		}
		return false;
	}
	window.table0ed4bdc7480cf84f6508f3bb2e4dc002a3eePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0ed4bdc7480cf84f6508f3bb2e4dc002a3eePid == 'undefined' || window.table0ed4bdc7480cf84f6508f3bb2e4dc002a3eePid!=null){
table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeReload(window.table0ed4bdc7480cf84f6508f3bb2e4dc002a3eePid);
}
}
var tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee = [];
var uniqueColtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee = [];
var uniqueColTitletable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee = [];
var defaultValuetable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee = {};
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '内容', formatter:formattable0ed4bdc7480cf84f6508f3bb2e4dc002a3eeDetail, hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
function formattable0ed4bdc7480cf84f6508f3bb2e4dc002a3eeDetail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable0ed4bdc7480cf84f6508f3bb2e4dc002a3eeDetail(\''+id+'\')">'+cellvalue+'</a>';
}function totable0ed4bdc7480cf84f6508f3bb2e4dc002a3eeDetail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e390bfe4bb0190c35f3e523625&id='+id      
	});  
}tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '创建时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '50px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '50px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '外键',hidden:true, name: 'FCK_ID',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
var tableea1939cd043821443db844dd33daa46772c5KeyWordIn = "";    
var tableea1939cd043821443db844dd33daa46772c5ParamIn = "";    
var tableea1939cd043821443db844dd33daa46772c5SelectRow = {     
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
var tableea1939cd043821443db844dd33daa46772c5LoadComplete = {     
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
var tableea1939cd043821443db844dd33daa46772c5BeforeEditCell = {        
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
var tableea1939cd043821443db844dd33daa46772c5OndblClickRow = {     
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
var tableea1939cd043821443db844dd33daa46772c5OnRightClickRow = {     
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
var tableea1939cd043821443db844dd33daa46772c5GridComplete = {     
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
var tableea1939cd043821443db844dd33daa46772c5OnCellSelect = {     
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
var tableea1939cd043821443db844dd33daa46772c5LoadBeforeSend = {        
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
function tableea1939cd043821443db844dd33daa46772c5Reload(pid){
	var _isInvalid = true;
	$("#tableea1939cd043821443db844dd33daa46772c5").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableea1939cd043821443db844dd33daa46772c5Pid = pid;
		}
		return false;
	}
	window.tableea1939cd043821443db844dd33daa46772c5Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableea1939cd043821443db844dd33daa46772c5').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableea1939cd043821443db844dd33daa46772c5TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableea1939cd043821443db844dd33daa46772c5Pid == 'undefined' || window.tableea1939cd043821443db844dd33daa46772c5Pid!=null){
tableea1939cd043821443db844dd33daa46772c5Reload(window.tableea1939cd043821443db844dd33daa46772c5Pid);
}
}
var tablecmtableea1939cd043821443db844dd33daa46772c5 = [];
var uniqueColtableea1939cd043821443db844dd33daa46772c5 = [];
var uniqueColTitletableea1939cd043821443db844dd33daa46772c5 = [];
var defaultValuetableea1939cd043821443db844dd33daa46772c5 = {};
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '编号',hidden:false, name: 'FORM_CODE',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '标题',hidden:false, name: 'NAME',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '党委工作计划名称',hidden:false, name: 'PARTY_COMMITTEE_WORK_PLAN',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '工作方向（思路）',hidden:false, name: 'WORK_NAME',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({ label: '党群部门承接',hidden:true, name: 'RESPONSIBLE_DEPA',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({ label: '党群部门承接',hidden:false, name: 'RESPONSIBLE_DEPAName',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '计划结束时间', formatter:format, hidden:false, name: 'PLAN_DATE',align:'center',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '负责部门ID',hidden:true, name: 'RESPONSIBLE_DEPA_ID',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({ label: '计划类别',hidden:true, name: 'QUARTER',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({ label: '计划类别',hidden:false, name: 'QUARTERName',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '公司计划ID',hidden:true, name: 'COMPANY_ID',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '文件密级',hidden:true, name: 'FILE_TYPE',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建时间',hidden:false, name: 'DREAF_DATE',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '党群承接人',hidden:true, name: 'RESPONSIBLE_USER_ID',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建部门',hidden:false, name: 'DRAF_DEPT',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableea1939cd043821443db844dd33daa46772c5.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

table35c9bb8515b0b1485ba8d8ce85afca71b32aSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table35c9bb8515b0b1485ba8d8ce85afca71b32a').jqGrid('getRowData',rowid);if (status) {
compRef52deda0700f457487078d00c73f5249ef2fc = rowid;operaButtonName = null;
table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeReload(rowid,rowdata,'');}
});
table35c9bb8515b0b1485ba8d8ce85afca71b32aLoadComplete.addEvent(function(data){
var rowdata = $('#table35c9bb8515b0b1485ba8d8ce85afca71b32a').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeReload('null',rowdata,'');
}
});
table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
tableea1939cd043821443db844dd33daa46772c5SelectRow.addEvent(function(rowid,status){
var rowdata = $('#tableea1939cd043821443db844dd33daa46772c5').jqGrid('getRowData',rowid);if (status) {
compRef307ca7523acc594098e856852903c06bd191 = rowid;operaButtonName = null;
table35c9bb8515b0b1485ba8d8ce85afca71b32aReload(rowid,rowdata,'');}
});
tableea1939cd043821443db844dd33daa46772c5LoadComplete.addEvent(function(data){
var rowdata = $('#tableea1939cd043821443db844dd33daa46772c5').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table35c9bb8515b0b1485ba8d8ce85afca71b32aReload('null',rowdata,'');
}
});
table35c9bb8515b0b1485ba8d8ce85afca71b32aLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table35c9bb8515b0b1485ba8d8ce85afca71b32a").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390ba1eca0190bea1af8768f4/table35c9bb8515b0b1485ba8d8ce85afca71b32a/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable35c9bb8515b0b1485ba8d8ce85afca71b32a,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table35c9bb8515b0b1485ba8d8ce85afca71b32aSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table35c9bb8515b0b1485ba8d8ce85afca71b32aLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table35c9bb8515b0b1485ba8d8ce85afca71b32aOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table35c9bb8515b0b1485ba8d8ce85afca71b32aOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table35c9bb8515b0b1485ba8d8ce85afca71b32aGridComplete.exec();
				    setTimeout(function(){var height = $("#table35c9bb8515b0b1485ba8d8ce85afca71b32a").closest('.ui-jqgrid-bdiv').height();
					$("#table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords img").css("width","120px");
                 }else{
					    $("#table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table35c9bb8515b0b1485ba8d8ce85afca71b32aBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table35c9bb8515b0b1485ba8d8ce85afca71b32aOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords").hide();
		   	    $("#Pagertable35c9bb8515b0b1485ba8d8ce85afca71b32a_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table35c9bb8515b0b1485ba8d8ce85afca71b32a").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table35c9bb8515b0b1485ba8d8ce85afca71b32a").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords").html() == null) {
						$("#table35c9bb8515b0b1485ba8d8ce85afca71b32a").parent().append("<div class='no_data' id='table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table35c9bb8515b0b1485ba8d8ce85afca71b32anorecords").show();
					$("#Pagertable35c9bb8515b0b1485ba8d8ce85afca71b32a_left").css("display", "none");
				}
table35c9bb8515b0b1485ba8d8ce85afca71b32aLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable35c9bb8515b0b1485ba8d8ce85afca71b32a"
    });
$("#t_table35c9bb8515b0b1485ba8d8ce85afca71b32a").append($("#tableToolbartable35c9bb8515b0b1485ba8d8ce85afca71b32a"));$("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390ba1eca0190bea1af8768f4/table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeGridComplete.exec();
				    setTimeout(function(){var height = $("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").closest('.ui-jqgrid-bdiv').height();
					$("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords img").css("width","120px");
                 }else{
					    $("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords").hide();
		   	    $("#Pagertable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords").html() == null) {
						$("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").parent().append("<div class='no_data' id='table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0ed4bdc7480cf84f6508f3bb2e4dc002a3eenorecords").show();
					$("#Pagertable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee_left").css("display", "none");
				}
table0ed4bdc7480cf84f6508f3bb2e4dc002a3eeLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee"
    });
$("#t_table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee").append($("#tableToolbartable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee"));$("#tableea1939cd043821443db844dd33daa46772c5").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390ba1eca0190bea1af8768f4/tableea1939cd043821443db844dd33daa46772c5/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableea1939cd043821443db844dd33daa46772c5,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableea1939cd043821443db844dd33daa46772c5SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableea1939cd043821443db844dd33daa46772c5LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableea1939cd043821443db844dd33daa46772c5OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableea1939cd043821443db844dd33daa46772c5OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableea1939cd043821443db844dd33daa46772c5GridComplete.exec();
				    setTimeout(function(){var height = $("#tableea1939cd043821443db844dd33daa46772c5").closest('.ui-jqgrid-bdiv').height();
					$("#tableea1939cd043821443db844dd33daa46772c5norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableea1939cd043821443db844dd33daa46772c5norecords img").css("width","120px");
                 }else{
					    $("#tableea1939cd043821443db844dd33daa46772c5norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableea1939cd043821443db844dd33daa46772c5BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableea1939cd043821443db844dd33daa46772c5OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableea1939cd043821443db844dd33daa46772c5norecords").hide();
		   	    $("#Pagertableea1939cd043821443db844dd33daa46772c5_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableea1939cd043821443db844dd33daa46772c5").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableea1939cd043821443db844dd33daa46772c5").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableea1939cd043821443db844dd33daa46772c5norecords").html() == null) {
						$("#tableea1939cd043821443db844dd33daa46772c5").parent().append("<div class='no_data' id='tableea1939cd043821443db844dd33daa46772c5norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableea1939cd043821443db844dd33daa46772c5norecords").show();
					$("#Pagertableea1939cd043821443db844dd33daa46772c5_left").css("display", "none");
				}
tableea1939cd043821443db844dd33daa46772c5LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableea1939cd043821443db844dd33daa46772c5"
    });
tableea1939cd043821443db844dd33daa46772c5Reload();
$("#t_tableea1939cd043821443db844dd33daa46772c5").append($("#tableToolbartableea1939cd043821443db844dd33daa46772c5"));;});	 
