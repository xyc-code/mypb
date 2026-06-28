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

function redraw2c908c1d8e74893a018e74944b2c0996(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8e74893a018e74944b2c0996").width();
		var win_height = $("#2c908c1d8e74893a018e74944b2c0996").height();
		$('#2c908c1d8e74893a018e74944b2c0996').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c1d8e74893a018e74944b2c0996').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c908c1d8e74893a018e74944b2c0996').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8e74893a018e74944b2c0996").width();
	setTimeout(function(){redraw2c908c1d8e74893a018e74944b2c0996(win_width);},500);
});
var compRefe6146ebe1fa2624ea368d51f277f0cbaa06a='';
var table2993030e2cd7ce48b9f8ca3a459ad2effa01KeyWordIn = "";    
var table2993030e2cd7ce48b9f8ca3a459ad2effa01ParamIn = "";    
var table2993030e2cd7ce48b9f8ca3a459ad2effa01SelectRow = {     
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01LoadComplete = {     
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01BeforeEditCell = {        
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01OndblClickRow = {     
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01OnRightClickRow = {     
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01GridComplete = {     
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01OnCellSelect = {     
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
var table2993030e2cd7ce48b9f8ca3a459ad2effa01LoadBeforeSend = {        
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
function table2993030e2cd7ce48b9f8ca3a459ad2effa01Reload(pid){
	var _isInvalid = true;
	$("#table2993030e2cd7ce48b9f8ca3a459ad2effa01").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2993030e2cd7ce48b9f8ca3a459ad2effa01Pid = pid;
		}
		return false;
	}
	window.table2993030e2cd7ce48b9f8ca3a459ad2effa01Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2993030e2cd7ce48b9f8ca3a459ad2effa01').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table2993030e2cd7ce48b9f8ca3a459ad2effa01TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2993030e2cd7ce48b9f8ca3a459ad2effa01Pid == 'undefined' || window.table2993030e2cd7ce48b9f8ca3a459ad2effa01Pid!=null){
table2993030e2cd7ce48b9f8ca3a459ad2effa01Reload(window.table2993030e2cd7ce48b9f8ca3a459ad2effa01Pid);
}
}
var tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01 = [];
var uniqueColtable2993030e2cd7ce48b9f8ca3a459ad2effa01 = [];
var uniqueColTitletable2993030e2cd7ce48b9f8ca3a459ad2effa01 = [];
var defaultValuetable2993030e2cd7ce48b9f8ca3a459ad2effa01 = {};
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '主表id',hidden:true, name: 'FK_SUB_ID',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '申报党员先锋岗名称',hidden:true, name: 'GW_NAME',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '申报党员先锋岗名称',hidden:false, name: 'GW_NAMEName',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '性别',hidden:false, name: 'USER_SEX',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '年龄',hidden:false, name: 'USER_AGE',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '职务',hidden:false, name: 'USER_POST',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '入党时间', formatter:format, hidden:false, name: 'USER_PARTYDATE',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '年度绩效',hidden:true, name: 'USER_JX',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '年度绩效',hidden:false, name: 'USER_JXName',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '民主评议组织评价结果',hidden:false, name: 'USER_JG',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '党员积分',hidden:false, name: 'USER_JF',align:'right',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '干部级别',hidden:true, name: 'USER_GBJB',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '干部级别',hidden:false, name: 'USER_GBJBName',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '部门类别',hidden:true, name: 'USER_DEPT_TYPE',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({ label: '部门类别',hidden:false, name: 'USER_DEPT_TYPEName',align:'center',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '先进事迹',hidden:false, name: 'USER_SJ',align:'left',  width: '350px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable2993030e2cd7ce48b9f8ca3a459ad2effa01 = []; 
searchNamestable2993030e2cd7ce48b9f8ca3a459ad2effa01.push('USER_NAME');
$('#keyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01(){
	var keyWord = $.trim($("#keyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01").val()); 
 if($('#keyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable2993030e2cd7ce48b9f8ca3a459ad2effa01.length;i++){ 
		var name = searchNamestable2993030e2cd7ce48b9f8ca3a459ad2effa01[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table2993030e2cd7ce48b9f8ca3a459ad2effa01KeyWordIn=JSON.stringify(param);
table2993030e2cd7ce48b9f8ca3a459ad2effa01ParamIn="";
	$('#table2993030e2cd7ce48b9f8ca3a459ad2effa01').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01();
	}
});
$('#keyWordBttable2993030e2cd7ce48b9f8ca3a459ad2effa01').bind('click', function() {
		searchDataKeyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01();
});
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abKeyWordIn = "";    
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abParamIn = "";    
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abSelectRow = {     
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abLoadComplete = {     
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abBeforeEditCell = {        
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abOndblClickRow = {     
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abOnRightClickRow = {     
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abGridComplete = {     
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abOnCellSelect = {     
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
var table2626f7a281a39e4fe70b4a959e7fbe3ab1abLoadBeforeSend = {        
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
function table2626f7a281a39e4fe70b4a959e7fbe3ab1abReload(pid){
	var _isInvalid = true;
	$("#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table2626f7a281a39e4fe70b4a959e7fbe3ab1abPid = pid;
		}
		return false;
	}
	window.table2626f7a281a39e4fe70b4a959e7fbe3ab1abPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table2626f7a281a39e4fe70b4a959e7fbe3ab1abReload();
};
function table2626f7a281a39e4fe70b4a959e7fbe3ab1abTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table2626f7a281a39e4fe70b4a959e7fbe3ab1abPid == 'undefined' || window.table2626f7a281a39e4fe70b4a959e7fbe3ab1abPid!=null){
table2626f7a281a39e4fe70b4a959e7fbe3ab1abReload(window.table2626f7a281a39e4fe70b4a959e7fbe3ab1abPid);
}
}
var tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab = [];
var uniqueColtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab = [];
var uniqueColTitletable2626f7a281a39e4fe70b4a959e7fbe3ab1ab = [];
var defaultValuetable2626f7a281a39e4fe70b4a959e7fbe3ab1ab = {};
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '党组织名称',hidden:false, name: 'XFG_PARTY_NAME',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({ label: '党组织类型',hidden:true, name: 'XFG_PARTY_TYPE',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({ label: '党组织类型',hidden:false, name: 'XFG_PARTY_TYPEName',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '公示时间起', formatter:format, hidden:false, name: 'XFG_GSSJ_BEGIN',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '公示时间止', formatter:format, hidden:false, name: 'XFG_GSSJ_END',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '支委会记录',hidden:false, name: 'XFG_ZWHJL',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '申请人',hidden:false, name: 'XFG_USER',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '申请人电话：',hidden:false, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '申请日期', formatter:format, hidden:false, name: 'XFG_CREA_DATE',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '表单编号',hidden:false, name: 'XFG_FROM_NO',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumnbcc6be3f0717cd42fbe80bd5eee4720e201f',align:'left',  width: '150px'});tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push({label: '发起ID',hidden:true, name: 'FK_SUB_QF_ID',align:'left',  width: '150px'});
	var searchNamestable2626f7a281a39e4fe70b4a959e7fbe3ab1ab = []; 
searchNamestable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.push('XFG_PARTY_NAME');
$('#keyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab(){
	var keyWord = $.trim($("#keyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab").val()); 
 if($('#keyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable2626f7a281a39e4fe70b4a959e7fbe3ab1ab.length;i++){ 
		var name = searchNamestable2626f7a281a39e4fe70b4a959e7fbe3ab1ab[i]; 
		param[name] = keyWord; 
	} 
if ($("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect").length>0){param.bpmState=$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table2626f7a281a39e4fe70b4a959e7fbe3ab1abKeyWordIn=JSON.stringify(param);
table2626f7a281a39e4fe70b4a959e7fbe3ab1abParamIn="";
	$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab();
	}
});
$('#keyWordBttable2626f7a281a39e4fe70b4a959e7fbe3ab1ab').bind('click', function() {
		searchDataKeyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab();
});
function table2626f7a281a39e4fe70b4a959e7fbe3ab1abinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton25ff0cc2a396174be4a85fb4d9b285fa52f4").css('display','inline-block');
}else{
$("#tableToolbarButton25ff0cc2a396174be4a85fb4d9b285fa52f4").hide();
}
table2626f7a281a39e4fe70b4a959e7fbe3ab1absearchWF();
}
function table2626f7a281a39e4fe70b4a959e7fbe3ab1absearchWF(){
   if ($("#searchformtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab").length>0){
      var para = serializeObject($("#searchformtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab"));
      para.bpmState = $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table2626f7a281a39e4fe70b4a959e7fbe3ab1abSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('getRowData',rowid);if (status) {
compRefe6146ebe1fa2624ea368d51f277f0cbaa06a = rowid;operaButtonName = null;
table2993030e2cd7ce48b9f8ca3a459ad2effa01Reload(rowid,rowdata,'');}
});
table2626f7a281a39e4fe70b4a959e7fbe3ab1abLoadComplete.addEvent(function(data){
var rowdata = $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table2993030e2cd7ce48b9f8ca3a459ad2effa01Reload('null',rowdata,'');
}
});
table2993030e2cd7ce48b9f8ca3a459ad2effa01LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table2993030e2cd7ce48b9f8ca3a459ad2effa01").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e74893a018e74944b2c0996/table2993030e2cd7ce48b9f8ca3a459ad2effa01/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable2993030e2cd7ce48b9f8ca3a459ad2effa01,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2993030e2cd7ce48b9f8ca3a459ad2effa01SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2993030e2cd7ce48b9f8ca3a459ad2effa01LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2993030e2cd7ce48b9f8ca3a459ad2effa01OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2993030e2cd7ce48b9f8ca3a459ad2effa01OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2993030e2cd7ce48b9f8ca3a459ad2effa01GridComplete.exec();
				    setTimeout(function(){var height = $("#table2993030e2cd7ce48b9f8ca3a459ad2effa01").closest('.ui-jqgrid-bdiv').height();
					$("#table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords img").css("width","120px");
                 }else{
					    $("#table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2993030e2cd7ce48b9f8ca3a459ad2effa01BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2993030e2cd7ce48b9f8ca3a459ad2effa01OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords").hide();
		   	    $("#Pagertable2993030e2cd7ce48b9f8ca3a459ad2effa01_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2993030e2cd7ce48b9f8ca3a459ad2effa01").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2993030e2cd7ce48b9f8ca3a459ad2effa01").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords").html() == null) {
						$("#table2993030e2cd7ce48b9f8ca3a459ad2effa01").parent().append("<div class='no_data' id='table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2993030e2cd7ce48b9f8ca3a459ad2effa01norecords").show();
					$("#Pagertable2993030e2cd7ce48b9f8ca3a459ad2effa01_left").css("display", "none");
				}
table2993030e2cd7ce48b9f8ca3a459ad2effa01LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: true,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2993030e2cd7ce48b9f8ca3a459ad2effa01"
    });
$("#t_table2993030e2cd7ce48b9f8ca3a459ad2effa01").append($("#tableToolbartable2993030e2cd7ce48b9f8ca3a459ad2effa01"));function searchDatatable2993030e2cd7ce48b9f8ca3a459ad2effa01(){
 var para = serializeObjectForEform($("#searchformtable2993030e2cd7ce48b9f8ca3a459ad2effa01"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table2993030e2cd7ce48b9f8ca3a459ad2effa01KeyWordIn="";
table2993030e2cd7ce48b9f8ca3a459ad2effa01ParamIn=JSON.stringify(para);
	$('#table2993030e2cd7ce48b9f8ca3a459ad2effa01').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable2993030e2cd7ce48b9f8ca3a459ad2effa01").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable2993030e2cd7ce48b9f8ca3a459ad2effa01').bind('click',function(){
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
'450px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtable2993030e2cd7ce48b9f8ca3a459ad2effa01'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable2993030e2cd7ce48b9f8ca3a459ad2effa01(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable2993030e2cd7ce48b9f8ca3a459ad2effa01")); searchDatatable2993030e2cd7ce48b9f8ca3a459ad2effa01(); layer.close(index); return false;
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
$('#USER_PARTYDATE_START_button').click(function(e){
			$('#USER_PARTYDATE_START').datepicker('show');
			$('#USER_PARTYDATE_START').datepicker().trigger('click');
}); 
$('#USER_PARTYDATE_END_button').click(function(e){
			$('#USER_PARTYDATE_END').datepicker('show');
			$('#USER_PARTYDATE_END').datepicker().trigger('click');
}); 
$("#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e74893a018e74944b2c0996/table2626f7a281a39e4fe70b4a959e7fbe3ab1ab/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table2626f7a281a39e4fe70b4a959e7fbe3ab1abSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table2626f7a281a39e4fe70b4a959e7fbe3ab1abLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table2626f7a281a39e4fe70b4a959e7fbe3ab1abOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table2626f7a281a39e4fe70b4a959e7fbe3ab1abOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table2626f7a281a39e4fe70b4a959e7fbe3ab1abGridComplete.exec();
				    setTimeout(function(){var height = $("#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").closest('.ui-jqgrid-bdiv').height();
					$("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords img").css("width","120px");
                 }else{
					    $("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table2626f7a281a39e4fe70b4a959e7fbe3ab1abBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table2626f7a281a39e4fe70b4a959e7fbe3ab1abOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords").hide();
		   	    $("#Pagertable2626f7a281a39e4fe70b4a959e7fbe3ab1ab_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords").html() == null) {
						$("#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").parent().append("<div class='no_data' id='table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table2626f7a281a39e4fe70b4a959e7fbe3ab1abnorecords").show();
					$("#Pagertable2626f7a281a39e4fe70b4a959e7fbe3ab1ab_left").css("display", "none");
				}
table2626f7a281a39e4fe70b4a959e7fbe3ab1abLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable2626f7a281a39e4fe70b4a959e7fbe3ab1ab"
    });
table2626f7a281a39e4fe70b4a959e7fbe3ab1abReload();
$("#t_table2626f7a281a39e4fe70b4a959e7fbe3ab1ab").append($("#tableToolbartable2626f7a281a39e4fe70b4a959e7fbe3ab1ab"));function searchDatatable2626f7a281a39e4fe70b4a959e7fbe3ab1ab(){
 var para = serializeObjectForEform($("#searchformtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab"));
 para.bpmState = $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table2626f7a281a39e4fe70b4a959e7fbe3ab1abKeyWordIn="";
table2626f7a281a39e4fe70b4a959e7fbe3ab1abParamIn=JSON.stringify(para);
	$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable2626f7a281a39e4fe70b4a959e7fbe3ab1ab').bind('click',function(){
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
	content: $('#searchDialogtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable2626f7a281a39e4fe70b4a959e7fbe3ab1ab(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab")); searchDatatable2626f7a281a39e4fe70b4a959e7fbe3ab1ab(); layer.close(index); return false;
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
$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect').bind('change',function(){
table2626f7a281a39e4fe70b4a959e7fbe3ab1abinitWorkFlow($(this).val());
});
$("#tableToolbarButton25ff0cc2a396174be4a85fb4d9b285fa52f4").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_XFG&isbpm=Y&dbid=2c908c1d8e742381018e744d23550ce1', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8e74893a018e74944b2c0996',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton25ff0cc2a396174be4a85fb4d9b285fa52f4").hide();
$("#tableToolbarButton8a0e4a422dc7a3492a484513b68d1a7814ea").bind('click',function(event){layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '党员先锋岗明细表',
	    skin: 'bs-modal', 
        maxmin: true, 
	    content: 'platform/eform/bpmsCRUDClient/toViewJsp/dyxfgmxb'
	});});
;});	 
