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

function redraw948e83e38fa41ec6018fb88f06a67f82(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38fa41ec6018fb88f06a67f82").width();
		var win_height = $("#948e83e38fa41ec6018fb88f06a67f82").height();
		$('#948e83e38fa41ec6018fb88f06a67f82').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38fa41ec6018fb88f06a67f82').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38fa41ec6018fb88f06a67f82').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38fa41ec6018fb88f06a67f82").width();
	setTimeout(function(){redraw948e83e38fa41ec6018fb88f06a67f82(win_width);},500);
});
var compRefa6f238989f770244aa1a98b4b1a07737fddc='';
var table773b3ea170ba114acd280fd9cbb77cc08f2fKeyWordIn = "";    
var table773b3ea170ba114acd280fd9cbb77cc08f2fParamIn = "";    
var table773b3ea170ba114acd280fd9cbb77cc08f2fSelectRow = {     
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fLoadComplete = {     
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fBeforeEditCell = {        
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fOndblClickRow = {     
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fOnRightClickRow = {     
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fGridComplete = {     
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fOnCellSelect = {     
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
var table773b3ea170ba114acd280fd9cbb77cc08f2fLoadBeforeSend = {        
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
function table773b3ea170ba114acd280fd9cbb77cc08f2fReload(pid){
	var _isInvalid = true;
	$("#table773b3ea170ba114acd280fd9cbb77cc08f2f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table773b3ea170ba114acd280fd9cbb77cc08f2fPid = pid;
		}
		return false;
	}
	window.table773b3ea170ba114acd280fd9cbb77cc08f2fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table773b3ea170ba114acd280fd9cbb77cc08f2fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table773b3ea170ba114acd280fd9cbb77cc08f2fPid == 'undefined' || window.table773b3ea170ba114acd280fd9cbb77cc08f2fPid!=null){
table773b3ea170ba114acd280fd9cbb77cc08f2fReload(window.table773b3ea170ba114acd280fd9cbb77cc08f2fPid);
}
}
var tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f = [];
var uniqueColtable773b3ea170ba114acd280fd9cbb77cc08f2f = [];
var uniqueColTitletable773b3ea170ba114acd280fd9cbb77cc08f2f = [];
var defaultValuetable773b3ea170ba114acd280fd9cbb77cc08f2f = {};
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '设备规格',hidden:false, name: 'GDZC_GG',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '设备型号',hidden:false, name: 'GDZC_MODE',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '设备名称',hidden:false, name: 'GDZC_NAME',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '设备类别',hidden:false, name: 'GDZC_TYPE',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({ label: '是否为辅机',hidden:true, name: 'IS_FJ',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({ label: '是否为辅机',hidden:false, name: 'IS_FJName',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '安装地点',hidden:false, name: 'GDZC_ADDRESS',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({ label: '盘点结果',hidden:true, name: 'STATUS',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({editable : true,edittype: 'custom',editoptions:{value:{"PP":"盘平","PY":"盘盈","PK":"盘亏"},custom_element:selectElem, custom_value:selectValue,forId:'STATUS'}, label: '盘点结果', formatter:formatSelect,hidden:false, name: 'STATUSName',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var table3dd6af8c68bd214fed99bf5a898f951bdf73KeyWordIn = "";    
var table3dd6af8c68bd214fed99bf5a898f951bdf73ParamIn = "";    
var table3dd6af8c68bd214fed99bf5a898f951bdf73SelectRow = {     
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73LoadComplete = {     
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73BeforeEditCell = {        
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73OndblClickRow = {     
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73OnRightClickRow = {     
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73GridComplete = {     
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73OnCellSelect = {     
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
var table3dd6af8c68bd214fed99bf5a898f951bdf73LoadBeforeSend = {        
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
function table3dd6af8c68bd214fed99bf5a898f951bdf73Reload(pid){
	var _isInvalid = true;
	$("#table3dd6af8c68bd214fed99bf5a898f951bdf73").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3dd6af8c68bd214fed99bf5a898f951bdf73Pid = pid;
		}
		return false;
	}
	window.table3dd6af8c68bd214fed99bf5a898f951bdf73Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table3dd6af8c68bd214fed99bf5a898f951bdf73TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3dd6af8c68bd214fed99bf5a898f951bdf73Pid == 'undefined' || window.table3dd6af8c68bd214fed99bf5a898f951bdf73Pid!=null){
table3dd6af8c68bd214fed99bf5a898f951bdf73Reload(window.table3dd6af8c68bd214fed99bf5a898f951bdf73Pid);
}
}
var tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73 = [];
var uniqueColtable3dd6af8c68bd214fed99bf5a898f951bdf73 = [];
var uniqueColTitletable3dd6af8c68bd214fed99bf5a898f951bdf73 = [];
var defaultValuetable3dd6af8c68bd214fed99bf5a898f951bdf73 = {};
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '盘点清单编号',hidden:false, name: 'PD_FORM_CODE',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '结束时间', formatter:format, hidden:false, name: 'E_DATE',align:'center',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '开始时间', formatter:format, hidden:false, name: 'S_DATE',align:'center',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '盘点部门',hidden:false, name: 'PD_DEPT',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '创建人',hidden:false, name: 'DREAF_USER',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '盘点说明',hidden:false, name: 'PDSM',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable3dd6af8c68bd214fed99bf5a898f951bdf73 = []; 
searchNamestable3dd6af8c68bd214fed99bf5a898f951bdf73.push('PD_FORM_CODE');
searchNamestable3dd6af8c68bd214fed99bf5a898f951bdf73.push('DREAF_USER');
$('#keyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73').attr('placeholder', '请输入盘点清单编号、创建人查询');
function searchDataKeyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73(){
	var keyWord = $.trim($("#keyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73").val()); 
 if($('#keyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable3dd6af8c68bd214fed99bf5a898f951bdf73.length;i++){ 
		var name = searchNamestable3dd6af8c68bd214fed99bf5a898f951bdf73[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table3dd6af8c68bd214fed99bf5a898f951bdf73KeyWordIn=JSON.stringify(param);
table3dd6af8c68bd214fed99bf5a898f951bdf73ParamIn="";
	$('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73();
	}
});
$('#keyWordBttable3dd6af8c68bd214fed99bf5a898f951bdf73').bind('click', function() {
		searchDataKeyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73();
});
;$(document).ready(function(){ 

table3dd6af8c68bd214fed99bf5a898f951bdf73SelectRow.addEvent(function(rowid,status){
var rowdata = $('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('getRowData',rowid);if (status) {
compRefa6f238989f770244aa1a98b4b1a07737fddc = rowid;operaButtonName = null;
table773b3ea170ba114acd280fd9cbb77cc08f2fReload(rowid,rowdata,'');}
});
table3dd6af8c68bd214fed99bf5a898f951bdf73LoadComplete.addEvent(function(data){
var rowdata = $('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table773b3ea170ba114acd280fd9cbb77cc08f2fReload('null',rowdata,'');
}
});
table773b3ea170ba114acd280fd9cbb77cc08f2fLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table773b3ea170ba114acd280fd9cbb77cc08f2f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38fa41ec6018fb88f06a67f82/table773b3ea170ba114acd280fd9cbb77cc08f2f/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable773b3ea170ba114acd280fd9cbb77cc08f2f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table773b3ea170ba114acd280fd9cbb77cc08f2fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table773b3ea170ba114acd280fd9cbb77cc08f2fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table773b3ea170ba114acd280fd9cbb77cc08f2fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table773b3ea170ba114acd280fd9cbb77cc08f2fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table773b3ea170ba114acd280fd9cbb77cc08f2fGridComplete.exec();
				    setTimeout(function(){var height = $("#table773b3ea170ba114acd280fd9cbb77cc08f2f").closest('.ui-jqgrid-bdiv').height();
					$("#table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords img").css("width","120px");
                 }else{
					    $("#table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table773b3ea170ba114acd280fd9cbb77cc08f2fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				if (cellcontent.indexOf('cbox')>-1){
				}else{
					var eformjqGridRowid=$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('getGridParam','selarrrow');
					var eformeditflag = true;
					for(var i = 0; i < eformjqGridRowid.length; i++) {
				    	if (eformjqGridRowid[i] === rowid){
				            eformeditflag = false;
				            break;
				    	}
				    	$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').setSelection(eformjqGridRowid[i], false);
					}
					if (eformeditflag){
				    	jQuery('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('setSelection',rowid);
					}
				}
				table773b3ea170ba114acd280fd9cbb77cc08f2fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords").hide();
		   	    $("#Pagertable773b3ea170ba114acd280fd9cbb77cc08f2f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table773b3ea170ba114acd280fd9cbb77cc08f2f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table773b3ea170ba114acd280fd9cbb77cc08f2f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords").html() == null) {
						$("#table773b3ea170ba114acd280fd9cbb77cc08f2f").parent().append("<div class='no_data' id='table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table773b3ea170ba114acd280fd9cbb77cc08f2fnorecords").show();
					$("#Pagertable773b3ea170ba114acd280fd9cbb77cc08f2f_left").css("display", "none");
				}
table773b3ea170ba114acd280fd9cbb77cc08f2fLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
		   cellEdit:true,
		   cellsubmit: 'clientArray',
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable773b3ea170ba114acd280fd9cbb77cc08f2f"
    });
$("#t_table773b3ea170ba114acd280fd9cbb77cc08f2f").append($("#tableToolbartable773b3ea170ba114acd280fd9cbb77cc08f2f"));$('#tableToolbarButtona569f30512ab05498f08f207993832984e3a').click(function(){
	$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('endEditCell');
	if(uniqueColtable773b3ea170ba114acd280fd9cbb77cc08f2f != undefined && uniqueColtable773b3ea170ba114acd280fd9cbb77cc08f2f.length > 0){ 
		var msg = ''; 
		var rowIds = $('#table773b3ea170ba114acd280fd9cbb77cc08f2f').getDataIDs();
		for (var i = 0; i < uniqueColtable773b3ea170ba114acd280fd9cbb77cc08f2f.length; i++) {
		    var colName = uniqueColtable773b3ea170ba114acd280fd9cbb77cc08f2f[i];
		    var colTitle = uniqueColTitletable773b3ea170ba114acd280fd9cbb77cc08f2f[i];
		    var arr = [];
			for (var j = 0; j < rowIds.length; j++) {;
			    var rowData = $('#table773b3ea170ba114acd280fd9cbb77cc08f2f').getRowData(rowIds[j]);
				var colValue = eval('rowData.'+ colName);
				arr.push(colValue);
			};
			if( arr.length!=$.unique(arr).length ){
		    	msg += colTitle + ',';
		    }
		}
		if(msg.length > 0){
			msg = msg.substr(0,msg.length-1)
			layer.alert('保存失败！[' + msg + ']存在重复数据！', {
				icon : 7,
				area : [ '400px', '' ], //宽高
				closeBtn : 0
			});
			return false;
		}
	}
	var data = $('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf('new_row') > -1){
				data[i].id = '';
			}
		}		
	}
                                                                       
	if(!$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').validateJqGrid("validate")){
		return false;		
	}
	avicAjax.ajax({
		url : 'eform/bpmsEformDataOptionsController/operation/save',
		data : {
			data : JSON.stringify(data),
			viewId:'948e83e38fa41ec6018fb88f06a67f82',
			version:'V1',
			tableId:'table773b3ea170ba114acd280fd9cbb77cc08f2f'
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
                                                                               
			if (r.flag == 'success') {
				$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
				layer.msg('保存成功！');
			} else {
				layer.alert('保存失败！' + r.e, {
					icon : 7,
					area : [ '400px', '' ], //宽高
					closeBtn : 0
				});
			}
		}
	});
})
$("#table3dd6af8c68bd214fed99bf5a898f951bdf73").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38fa41ec6018fb88f06a67f82/table3dd6af8c68bd214fed99bf5a898f951bdf73/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable3dd6af8c68bd214fed99bf5a898f951bdf73,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3dd6af8c68bd214fed99bf5a898f951bdf73SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3dd6af8c68bd214fed99bf5a898f951bdf73LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3dd6af8c68bd214fed99bf5a898f951bdf73OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3dd6af8c68bd214fed99bf5a898f951bdf73OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3dd6af8c68bd214fed99bf5a898f951bdf73GridComplete.exec();
				    setTimeout(function(){var height = $("#table3dd6af8c68bd214fed99bf5a898f951bdf73").closest('.ui-jqgrid-bdiv').height();
					$("#table3dd6af8c68bd214fed99bf5a898f951bdf73norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3dd6af8c68bd214fed99bf5a898f951bdf73norecords img").css("width","120px");
                 }else{
					    $("#table3dd6af8c68bd214fed99bf5a898f951bdf73norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3dd6af8c68bd214fed99bf5a898f951bdf73BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3dd6af8c68bd214fed99bf5a898f951bdf73OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3dd6af8c68bd214fed99bf5a898f951bdf73norecords").hide();
		   	    $("#Pagertable3dd6af8c68bd214fed99bf5a898f951bdf73_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3dd6af8c68bd214fed99bf5a898f951bdf73").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3dd6af8c68bd214fed99bf5a898f951bdf73").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3dd6af8c68bd214fed99bf5a898f951bdf73norecords").html() == null) {
						$("#table3dd6af8c68bd214fed99bf5a898f951bdf73").parent().append("<div class='no_data' id='table3dd6af8c68bd214fed99bf5a898f951bdf73norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3dd6af8c68bd214fed99bf5a898f951bdf73norecords").show();
					$("#Pagertable3dd6af8c68bd214fed99bf5a898f951bdf73_left").css("display", "none");
				}
table3dd6af8c68bd214fed99bf5a898f951bdf73LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3dd6af8c68bd214fed99bf5a898f951bdf73"
    });
table3dd6af8c68bd214fed99bf5a898f951bdf73Reload();
$("#t_table3dd6af8c68bd214fed99bf5a898f951bdf73").append($("#tableToolbartable3dd6af8c68bd214fed99bf5a898f951bdf73"));function searchDatatable3dd6af8c68bd214fed99bf5a898f951bdf73(){
 var para = serializeObjectForEform($("#searchformtable3dd6af8c68bd214fed99bf5a898f951bdf73"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table3dd6af8c68bd214fed99bf5a898f951bdf73KeyWordIn="";
table3dd6af8c68bd214fed99bf5a898f951bdf73ParamIn=JSON.stringify(para);
	$('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable3dd6af8c68bd214fed99bf5a898f951bdf73").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable3dd6af8c68bd214fed99bf5a898f951bdf73').bind('click',function(){
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
	content: $('#searchDialogtable3dd6af8c68bd214fed99bf5a898f951bdf73'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable3dd6af8c68bd214fed99bf5a898f951bdf73(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable3dd6af8c68bd214fed99bf5a898f951bdf73")); searchDatatable3dd6af8c68bd214fed99bf5a898f951bdf73(); layer.close(index); return false;
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
$('#S_DATE_START_button').click(function(e){
			$('#S_DATE_START').datepicker('show');
			$('#S_DATE_START').datepicker().trigger('click');
}); 
$('#S_DATE_END_button').click(function(e){
			$('#S_DATE_END').datepicker('show');
			$('#S_DATE_END').datepicker().trigger('click');
}); 
$("#tableToolbarButtonf0b443e49b1e3841f2f8cd0fdd0409a29f54").bind('click',function() {                                                                       
	if (pageParams.hasOwnProperty('isInsert') && pageParams.isInsert) {              
		layer.alert('请先保存表单！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		 });                                                                                         
	} else {                                                                                  
                                                                            
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '添加',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fb88791257e03&grid=table3dd6af8c68bd214fed99bf5a898f951bdf73',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonb3d7dc0f81e3b44e33d8a3ed2010d917ad15").bind('click',function() {                                                                                       
	var ids = $('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fb88791257e03&id=' + rowData.ID+'&grid=table3dd6af8c68bd214fed99bf5a898f951bdf73',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton6f73846d2c41d5495628972e7f9e19451973").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGDZC_PD&isbpm=N&dbid=948e83e38fa41ec6018fb88d83177f09', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38fa41ec6018fb88f06a67f82',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table3dd6af8c68bd214fed99bf5a898f951bdf73').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
;});	 
