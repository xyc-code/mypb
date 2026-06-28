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

function redraw948e83e38f76589e018f7a0129041c4e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38f76589e018f7a0129041c4e").width();
		var win_height = $("#948e83e38f76589e018f7a0129041c4e").height();
		$('#948e83e38f76589e018f7a0129041c4e').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38f76589e018f7a0129041c4e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38f76589e018f7a0129041c4e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38f76589e018f7a0129041c4e").width();
	setTimeout(function(){redraw948e83e38f76589e018f7a0129041c4e(win_width);},500);
});
var compRefc3321536c835b44fa62872a3924bbc13d8fa='';
var table3931a3cbb542674251da23256ecb2e1c026cKeyWordIn = "";    
var table3931a3cbb542674251da23256ecb2e1c026cParamIn = "";    
var table3931a3cbb542674251da23256ecb2e1c026cSelectRow = {     
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
var table3931a3cbb542674251da23256ecb2e1c026cLoadComplete = {     
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
var table3931a3cbb542674251da23256ecb2e1c026cBeforeEditCell = {        
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
var table3931a3cbb542674251da23256ecb2e1c026cOndblClickRow = {     
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
var table3931a3cbb542674251da23256ecb2e1c026cOnRightClickRow = {     
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
var table3931a3cbb542674251da23256ecb2e1c026cGridComplete = {     
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
var table3931a3cbb542674251da23256ecb2e1c026cOnCellSelect = {     
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
var table3931a3cbb542674251da23256ecb2e1c026cLoadBeforeSend = {        
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
function table3931a3cbb542674251da23256ecb2e1c026cReload(pid){
	var _isInvalid = true;
	$("#table3931a3cbb542674251da23256ecb2e1c026c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3931a3cbb542674251da23256ecb2e1c026cPid = pid;
		}
		return false;
	}
	window.table3931a3cbb542674251da23256ecb2e1c026cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3931a3cbb542674251da23256ecb2e1c026c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table3931a3cbb542674251da23256ecb2e1c026cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3931a3cbb542674251da23256ecb2e1c026cPid == 'undefined' || window.table3931a3cbb542674251da23256ecb2e1c026cPid!=null){
table3931a3cbb542674251da23256ecb2e1c026cReload(window.table3931a3cbb542674251da23256ecb2e1c026cPid);
}
}
var tablecmtable3931a3cbb542674251da23256ecb2e1c026c = [];
var uniqueColtable3931a3cbb542674251da23256ecb2e1c026c = [];
var uniqueColTitletable3931a3cbb542674251da23256ecb2e1c026c = [];
var defaultValuetable3931a3cbb542674251da23256ecb2e1c026c = {};
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '下发计划时间', formatter:format, hidden:false, name: 'XF_PLAN_DATE',align:'center',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '计划开始时间', formatter:format, hidden:false, name: 'PLAN_S_DATE',align:'center',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '计划结束时间', formatter:format, hidden:false, name: 'PLAN_E_DATE',align:'center',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '工作任务',hidden:false, name: 'GZRW',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '工作类别',hidden:false, name: 'GZLB',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '工作目标',hidden:false, name: 'WORK_MB',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '工作内容',hidden:false, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({ label: '责任单位',hidden:true, name: 'ZRDW',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({ label: '责任单位',hidden:false, name: 'ZRDWName',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '主要负责人',hidden:true, name: 'MAIN_FZR',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '副主要负责人',hidden:true, name: 'F_MAIN_FZR',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable3931a3cbb542674251da23256ecb2e1c026c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
var tableb3b681840261f24c51b85f0d61a2760cd39eKeyWordIn = "";    
var tableb3b681840261f24c51b85f0d61a2760cd39eParamIn = "";    
var tableb3b681840261f24c51b85f0d61a2760cd39eSelectRow = {     
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
var tableb3b681840261f24c51b85f0d61a2760cd39eLoadComplete = {     
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
var tableb3b681840261f24c51b85f0d61a2760cd39eBeforeEditCell = {        
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
var tableb3b681840261f24c51b85f0d61a2760cd39eOndblClickRow = {     
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
var tableb3b681840261f24c51b85f0d61a2760cd39eOnRightClickRow = {     
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
var tableb3b681840261f24c51b85f0d61a2760cd39eGridComplete = {     
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
var tableb3b681840261f24c51b85f0d61a2760cd39eOnCellSelect = {     
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
var tableb3b681840261f24c51b85f0d61a2760cd39eLoadBeforeSend = {        
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
function tableb3b681840261f24c51b85f0d61a2760cd39eReload(pid){
	var _isInvalid = true;
	$("#tableb3b681840261f24c51b85f0d61a2760cd39e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb3b681840261f24c51b85f0d61a2760cd39ePid = pid;
		}
		return false;
	}
	window.tableb3b681840261f24c51b85f0d61a2760cd39ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tableb3b681840261f24c51b85f0d61a2760cd39eReload();
};
function tableb3b681840261f24c51b85f0d61a2760cd39eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb3b681840261f24c51b85f0d61a2760cd39ePid == 'undefined' || window.tableb3b681840261f24c51b85f0d61a2760cd39ePid!=null){
tableb3b681840261f24c51b85f0d61a2760cd39eReload(window.tableb3b681840261f24c51b85f0d61a2760cd39ePid);
}
}
var tablecmtableb3b681840261f24c51b85f0d61a2760cd39e = [];
var uniqueColtableb3b681840261f24c51b85f0d61a2760cd39e = [];
var uniqueColTitletableb3b681840261f24c51b85f0d61a2760cd39e = [];
var defaultValuetableb3b681840261f24c51b85f0d61a2760cd39e = {};
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '编号',hidden:false, name: 'FORM_CODE',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '标题',hidden:false, name: 'NAME',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '党委工作计划', formatter:formattableb3b681840261f24c51b85f0d61a2760cd39eDetail, hidden:true, name: 'PARTY_COMMITTEE_WORK_PLAN',align:'left',  width: '150px'});
function formattableb3b681840261f24c51b85f0d61a2760cd39eDetail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totableb3b681840261f24c51b85f0d61a2760cd39eDetail(\''+id+'\')">'+cellvalue+'</a>';
}function totableb3b681840261f24c51b85f0d61a2760cd39eDetail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e38f76589e018f7a05adce1c5a&id='+id      
	});  
}tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '工作名称',hidden:true, name: 'WORK_NAME',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({ label: '季度',hidden:true, name: 'QUARTER',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({ label: '季度',hidden:false, name: 'QUARTERName',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建时间',hidden:false, name: 'DREAF_DATE',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建部门',hidden:false, name: 'DRAF_DEPT',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '负责部门',hidden:true, name: 'RESPONSIBLE_DEPA',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '负责部门ID',hidden:true, name: 'RESPONSIBLE_DEPA_ID',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '状态',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '公司计划ID',hidden:true, name: 'COMPANY_ID',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '文件密级',hidden:true, name: 'FILE_TYPE',align:'left',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '计划结束时间', formatter:format, hidden:true, name: 'PLAN_DATE',align:'center',  width: '150px'});
tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});tablecmtableb3b681840261f24c51b85f0d61a2760cd39e.push({label: '党群承接人',hidden:true, name: 'RESPONSIBLE_USER_ID',align:'left',  width: '150px'});
	var searchNamestableb3b681840261f24c51b85f0d61a2760cd39e = []; 
searchNamestableb3b681840261f24c51b85f0d61a2760cd39e.push('FORM_CODE');
$('#keyWordtableb3b681840261f24c51b85f0d61a2760cd39e').attr('placeholder', '请输入编号查询');
function searchDataKeyWordtableb3b681840261f24c51b85f0d61a2760cd39e(){
	var keyWord = $.trim($("#keyWordtableb3b681840261f24c51b85f0d61a2760cd39e").val()); 
 if($('#keyWordtableb3b681840261f24c51b85f0d61a2760cd39e').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestableb3b681840261f24c51b85f0d61a2760cd39e.length;i++){ 
		var name = searchNamestableb3b681840261f24c51b85f0d61a2760cd39e[i]; 
		param[name] = keyWord; 
	} 
if ($("#tableb3b681840261f24c51b85f0d61a2760cd39eworkFlowSelect").length>0){param.bpmState=$('#tableb3b681840261f24c51b85f0d61a2760cd39eworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tableb3b681840261f24c51b85f0d61a2760cd39eKeyWordIn=JSON.stringify(param);
tableb3b681840261f24c51b85f0d61a2760cd39eParamIn="";
	$('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtableb3b681840261f24c51b85f0d61a2760cd39e').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtableb3b681840261f24c51b85f0d61a2760cd39e();
	}
});
$('#keyWordBttableb3b681840261f24c51b85f0d61a2760cd39e').bind('click', function() {
		searchDataKeyWordtableb3b681840261f24c51b85f0d61a2760cd39e();
});
function tableb3b681840261f24c51b85f0d61a2760cd39einitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton1a6969c9fbf75944c3b8ce1c3f273d727cfb").css('display','inline-block');
}else{
$("#tableToolbarButton1a6969c9fbf75944c3b8ce1c3f273d727cfb").hide();
}
tableb3b681840261f24c51b85f0d61a2760cd39esearchWF();
}
function tableb3b681840261f24c51b85f0d61a2760cd39esearchWF(){
   if ($("#searchformtableb3b681840261f24c51b85f0d61a2760cd39e").length>0){
      var para = serializeObject($("#searchformtableb3b681840261f24c51b85f0d61a2760cd39e"));
      para.bpmState = $('#tableb3b681840261f24c51b85f0d61a2760cd39eworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tableb3b681840261f24c51b85f0d61a2760cd39eworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tableb3b681840261f24c51b85f0d61a2760cd39eSelectRow.addEvent(function(rowid,status){
var rowdata = $('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('getRowData',rowid);if (status) {
compRefc3321536c835b44fa62872a3924bbc13d8fa = rowid;operaButtonName = null;
table3931a3cbb542674251da23256ecb2e1c026cReload(rowid,rowdata,'');}
});
tableb3b681840261f24c51b85f0d61a2760cd39eLoadComplete.addEvent(function(data){
var rowdata = $('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table3931a3cbb542674251da23256ecb2e1c026cReload('null',rowdata,'');
}
});
table3931a3cbb542674251da23256ecb2e1c026cLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table3931a3cbb542674251da23256ecb2e1c026c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38f76589e018f7a0129041c4e/table3931a3cbb542674251da23256ecb2e1c026c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable3931a3cbb542674251da23256ecb2e1c026c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3931a3cbb542674251da23256ecb2e1c026cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3931a3cbb542674251da23256ecb2e1c026cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3931a3cbb542674251da23256ecb2e1c026cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3931a3cbb542674251da23256ecb2e1c026cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3931a3cbb542674251da23256ecb2e1c026cGridComplete.exec();
				    setTimeout(function(){var height = $("#table3931a3cbb542674251da23256ecb2e1c026c").closest('.ui-jqgrid-bdiv').height();
					$("#table3931a3cbb542674251da23256ecb2e1c026cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3931a3cbb542674251da23256ecb2e1c026cnorecords img").css("width","120px");
                 }else{
					    $("#table3931a3cbb542674251da23256ecb2e1c026cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3931a3cbb542674251da23256ecb2e1c026cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3931a3cbb542674251da23256ecb2e1c026cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3931a3cbb542674251da23256ecb2e1c026cnorecords").hide();
		   	    $("#Pagertable3931a3cbb542674251da23256ecb2e1c026c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3931a3cbb542674251da23256ecb2e1c026c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3931a3cbb542674251da23256ecb2e1c026c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3931a3cbb542674251da23256ecb2e1c026cnorecords").html() == null) {
						$("#table3931a3cbb542674251da23256ecb2e1c026c").parent().append("<div class='no_data' id='table3931a3cbb542674251da23256ecb2e1c026cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3931a3cbb542674251da23256ecb2e1c026cnorecords").show();
					$("#Pagertable3931a3cbb542674251da23256ecb2e1c026c_left").css("display", "none");
				}
table3931a3cbb542674251da23256ecb2e1c026cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3931a3cbb542674251da23256ecb2e1c026c"
    });
$("#t_table3931a3cbb542674251da23256ecb2e1c026c").append($("#tableToolbartable3931a3cbb542674251da23256ecb2e1c026c"));$("#tableb3b681840261f24c51b85f0d61a2760cd39e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38f76589e018f7a0129041c4e/tableb3b681840261f24c51b85f0d61a2760cd39e/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb3b681840261f24c51b85f0d61a2760cd39e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb3b681840261f24c51b85f0d61a2760cd39eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb3b681840261f24c51b85f0d61a2760cd39eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb3b681840261f24c51b85f0d61a2760cd39eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb3b681840261f24c51b85f0d61a2760cd39eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb3b681840261f24c51b85f0d61a2760cd39eGridComplete.exec();
				    setTimeout(function(){var height = $("#tableb3b681840261f24c51b85f0d61a2760cd39e").closest('.ui-jqgrid-bdiv').height();
					$("#tableb3b681840261f24c51b85f0d61a2760cd39enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb3b681840261f24c51b85f0d61a2760cd39enorecords img").css("width","120px");
                 }else{
					    $("#tableb3b681840261f24c51b85f0d61a2760cd39enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb3b681840261f24c51b85f0d61a2760cd39eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb3b681840261f24c51b85f0d61a2760cd39eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb3b681840261f24c51b85f0d61a2760cd39enorecords").hide();
		   	    $("#Pagertableb3b681840261f24c51b85f0d61a2760cd39e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb3b681840261f24c51b85f0d61a2760cd39e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb3b681840261f24c51b85f0d61a2760cd39e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb3b681840261f24c51b85f0d61a2760cd39enorecords").html() == null) {
						$("#tableb3b681840261f24c51b85f0d61a2760cd39e").parent().append("<div class='no_data' id='tableb3b681840261f24c51b85f0d61a2760cd39enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb3b681840261f24c51b85f0d61a2760cd39enorecords").show();
					$("#Pagertableb3b681840261f24c51b85f0d61a2760cd39e_left").css("display", "none");
				}
tableb3b681840261f24c51b85f0d61a2760cd39eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb3b681840261f24c51b85f0d61a2760cd39e"
    });
tableb3b681840261f24c51b85f0d61a2760cd39eReload();
$("#t_tableb3b681840261f24c51b85f0d61a2760cd39e").append($("#tableToolbartableb3b681840261f24c51b85f0d61a2760cd39e"));$("#tableToolbarButton632af9b1cac6f54319d86be382769c0707dd").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38f76589e018f7a05adce1c5a&grid=tableb3b681840261f24c51b85f0d61a2760cd39e'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton1a6969c9fbf75944c3b8ce1c3f273d727cfb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableb3b681840261f24c51b85f0d61a2760cd39e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WORK_PLAN&isbpm=Y&dbid=948e83e38f61b618018f653f87721a65', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38f76589e018f7a0129041c4e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableb3b681840261f24c51b85f0d61a2760cd39e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton1a6969c9fbf75944c3b8ce1c3f273d727cfb").hide();
$('#tableb3b681840261f24c51b85f0d61a2760cd39eworkFlowSelect').bind('change',function(){
tableb3b681840261f24c51b85f0d61a2760cd39einitWorkFlow($(this).val());
});
;});	 
