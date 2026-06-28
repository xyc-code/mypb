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
function openTable (value,item,obj){
return '<a href="javascript:void(0);" onclick="detail(\''+obj.PARTY_ID+'\');">'+value+'</a>';
}
function detail(id){
 layer.open({
		type : 2,
		area : [ '100%', '100%' ],
		title : '党组织委员分工',
		skin : 'bs-modal', 
		maxmin : false, 
		content : 'platform/eform/bpmsCRUDClient/toViewJsp/dzzljwyfgBa?partyId='+id
	});

}
function fomrt(value,item,obj){
  if(!value){
  return "无"
}else{
  return format(value)
}
}
function redraw2c908c1d8d52d54a018d52f8138c088c(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8d52d54a018d52f8138c088c").width();
		var win_height = $("#2c908c1d8d52d54a018d52f8138c088c").height();
		$('#948e83e38fdcbb9e018fe6f32a7d3b9e').layout('panel', 'north').panel('resize',{width:win_width*0.8,height:win_height*0.4});
		$('#948e83e38fdcbb9e018fe6f32a7d3b9e').layout('resize');
		$('#2c908c1d8d52d54a018d52f8138c088c').layout('panel', 'center').panel('resize',{width:win_width*0.8,height:win_height*0.6});
		$('#2c908c1d8d52d54a018d52f8138c088c').layout('panel', 'west').panel('resize',{width:win_width*0.2,height:win_height*1.0});
		$('#2c908c1d8d52d54a018d52f8138c088c').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8d52d54a018d52f8138c088c").width();
	setTimeout(function(){redraw2c908c1d8d52d54a018d52f8138c088c(win_width);},500);
});
var compReff4e25a130ba7e141bac8d40abe4573d2b1a4='';
var compRef1671c882c9b13c4b04eb1a0d951eb98690f2='';
var tablebbbbaac739a860421ab856d911abf6a98dd9KeyWordIn = "";    
var tablebbbbaac739a860421ab856d911abf6a98dd9ParamIn = "";    
var tablebbbbaac739a860421ab856d911abf6a98dd9SelectRow = {     
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
var tablebbbbaac739a860421ab856d911abf6a98dd9LoadComplete = {     
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
var tablebbbbaac739a860421ab856d911abf6a98dd9BeforeEditCell = {        
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
var tablebbbbaac739a860421ab856d911abf6a98dd9OndblClickRow = {     
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
var tablebbbbaac739a860421ab856d911abf6a98dd9OnRightClickRow = {     
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
var tablebbbbaac739a860421ab856d911abf6a98dd9GridComplete = {     
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
var tablebbbbaac739a860421ab856d911abf6a98dd9OnCellSelect = {     
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
var tablebbbbaac739a860421ab856d911abf6a98dd9LoadBeforeSend = {        
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
function tablebbbbaac739a860421ab856d911abf6a98dd9Reload(pid){
	var _isInvalid = true;
	$("#tablebbbbaac739a860421ab856d911abf6a98dd9").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablebbbbaac739a860421ab856d911abf6a98dd9Pid = pid;
		}
		return false;
	}
	window.tablebbbbaac739a860421ab856d911abf6a98dd9Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablebbbbaac739a860421ab856d911abf6a98dd9TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablebbbbaac739a860421ab856d911abf6a98dd9Pid == 'undefined' || window.tablebbbbaac739a860421ab856d911abf6a98dd9Pid!=null){
tablebbbbaac739a860421ab856d911abf6a98dd9Reload(window.tablebbbbaac739a860421ab856d911abf6a98dd9Pid);
}
}
var tablecmtablebbbbaac739a860421ab856d911abf6a98dd9 = [];
var uniqueColtablebbbbaac739a860421ab856d911abf6a98dd9 = [];
var uniqueColTitletablebbbbaac739a860421ab856d911abf6a98dd9 = [];
var defaultValuetablebbbbaac739a860421ab856d911abf6a98dd9 = {};
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '届次',hidden:false, name: 'SESSION_NAME',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '党组织名称', formatter:function(cellvalue, options, rowObject){return openTable(cellvalue, options, rowObject);}, hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({ label: '党组织类型',hidden:true, name: 'PARTY_TYPE',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({ label: '党组织类型',hidden:false, name: 'PARTY_TYPEName',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({ label: '选举类型',hidden:true, name: 'SESSION_TYPE',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({ label: '选举类型',hidden:false, name: 'SESSION_TYPEName',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '选举时间\调整时间', formatter:format, hidden:false, name: 'CREA_TIME',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '换届提醒', formatter:format, hidden:false, name: 'CREA_TIME_DATE',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '提交换届选举请示', formatter:format, hidden:false, name: 'CREA_TIME_DATE_TJ',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '提交候选人预备人选请示', formatter:format, hidden:false, name: 'CREA_TIME_DATE_TJYB',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '召开党员大会', formatter:format, hidden:false, name: 'ZKDYDH',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '纪委一次会', formatter:function(cellvalue, options, rowObject){return fomrt(cellvalue, options, rowObject);}, hidden:false, name: 'JWYCH',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '委员会一次会', formatter:format, hidden:false, name: 'WYYCH',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '组织机构调整文件',hidden:true, name: 'ORG_FILE',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '备注',hidden:false, name: 'PARTY_ORG_CONTENT',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '届次',hidden:true, name: 'SESSION_ID',align:'right',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '党组织id',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '选举进度(换届提醒、提交请示、预备人选请示、党员大会、纪委一次会、委员会一次会、调整文件)',hidden:true, name: 'SESSION_JD',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段1',hidden:true, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段2',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段3',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段4',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段5',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段6',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段7',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段8',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段9',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段10',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段11',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段12',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段13',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段14',hidden:true, name: 'ATTR14',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段15',hidden:true, name: 'ATTR15',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段16',hidden:true, name: 'ATTR16',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段17',hidden:true, name: 'ATTR17',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段18', formatter:format, hidden:true, name: 'ATTR18',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段19', formatter:format, hidden:true, name: 'ATTR19',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '预留字段20',hidden:true, name: 'ATTR20',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablebbbbaac739a860421ab856d911abf6a98dd9.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestablebbbbaac739a860421ab856d911abf6a98dd9 = []; 
searchNamestablebbbbaac739a860421ab856d911abf6a98dd9.push('PARTY_NAME');
$('#keyWordtablebbbbaac739a860421ab856d911abf6a98dd9').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtablebbbbaac739a860421ab856d911abf6a98dd9(){
	var keyWord = $.trim($("#keyWordtablebbbbaac739a860421ab856d911abf6a98dd9").val()); 
 if($('#keyWordtablebbbbaac739a860421ab856d911abf6a98dd9').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablebbbbaac739a860421ab856d911abf6a98dd9.length;i++){ 
		var name = searchNamestablebbbbaac739a860421ab856d911abf6a98dd9[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablebbbbaac739a860421ab856d911abf6a98dd9KeyWordIn=JSON.stringify(param);
tablebbbbaac739a860421ab856d911abf6a98dd9ParamIn="";
	$('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablebbbbaac739a860421ab856d911abf6a98dd9').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablebbbbaac739a860421ab856d911abf6a98dd9();
	}
});
$('#keyWordBttablebbbbaac739a860421ab856d911abf6a98dd9').bind('click', function() {
		searchDataKeyWordtablebbbbaac739a860421ab856d911abf6a98dd9();
});
function form9b2ffe76c9ed1849dfa849a2fe2782f13880Reload(pid){
	var _isInvalid = true;
	$("#form9b2ffe76c9ed1849dfa849a2fe2782f13880").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.form9b2ffe76c9ed1849dfa849a2fe2782f13880Pid = pid;
		}
		return false;
	}
	window.form9b2ffe76c9ed1849dfa849a2fe2782f13880Pid = null;
	if(pid != undefined && pid != null && pid != ''&&pid!='-1'){
		document.getElementById('form9b2ffe76c9ed1849dfa849a2fe2782f13880').src='platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8d52d54a018d531b18f60d3c&isviewform=true&id='+pid;
	}else{
		document.getElementById('form9b2ffe76c9ed1849dfa849a2fe2782f13880').src='';
	}   
}function form9b2ffe76c9ed1849dfa849a2fe2782f13880TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.form9b2ffe76c9ed1849dfa849a2fe2782f13880Pid == 'undefined' || window.form9b2ffe76c9ed1849dfa849a2fe2782f13880Pid!=null){
form9b2ffe76c9ed1849dfa849a2fe2782f13880Reload(window.form9b2ffe76c9ed1849dfa849a2fe2782f13880Pid);
}
}
var treef821d5139287e146e9e945bdbf5e3c2e513aOnExpand = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var treef821d5139287e146e9e945bdbf5e3c2e513aOnAsyncSuccess = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event, treeId, msg){
					oldFunc(event, treeId, msg);
					fun(event, treeId, msg);
				}
			}
		},
		exec:function(event, treeId, msg){
			if (typeof this.func == 'function')
               this.func(event, treeId, msg);
		}
};
var treef821d5139287e146e9e945bdbf5e3c2e513aOnClick = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var treef821d5139287e146e9e945bdbf5e3c2e513aOnCheck= {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var treef821d5139287e146e9e945bdbf5e3c2e513aOnDblClick = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var treef821d5139287e146e9e945bdbf5e3c2e513aOnCollapse = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(event,treeId,treeNode){
					oldFunc(event,treeId,treeNode);
					fun(event,treeId,treeNode);
				}
			}
		},
		exec:function(event,treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(event,treeId,treeNode);
		}
};
var treef821d5139287e146e9e945bdbf5e3c2e513aBeforeAsync = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(treeId,treeNode){
					oldFunc(treeId,treeNode);
					fun(treeId,treeNode);
				}
			}
		},
		exec:function(treeId,treeNode){
			if (typeof this.func == 'function')
               this.func(treeId,treeNode);
		}
};
function treef821d5139287e146e9e945bdbf5e3c2e513aReload(pid){     
	var _isInvalid = true;
	$("#treef821d5139287e146e9e945bdbf5e3c2e513a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.treef821d5139287e146e9e945bdbf5e3c2e513aPid = pid;
		}
		return false;
	}
	window.treef821d5139287e146e9e945bdbf5e3c2e513aPid = null;
   var zTree = $.fn.zTree.getZTreeObj("treef821d5139287e146e9e945bdbf5e3c2e513a"); 
   var newsetting = zTree.setting; 
	  newsetting.async.url =  "platform/eform/bpmsCRUDClient/gettree/2";
	var rootid  = "-1"
   newsetting.async.otherParam.rootid = pid || rootid; 
   $.fn.zTree.init($("#treef821d5139287e146e9e945bdbf5e3c2e513a"), newsetting, []);    }
function treef821d5139287e146e9e945bdbf5e3c2e513aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.treef821d5139287e146e9e945bdbf5e3c2e513aPid == 'undefined' || window.treef821d5139287e146e9e945bdbf5e3c2e513aPid!=null){
treef821d5139287e146e9e945bdbf5e3c2e513aReload(window.treef821d5139287e146e9e945bdbf5e3c2e513aPid);
}
}
;$(document).ready(function(){ 

treef821d5139287e146e9e945bdbf5e3c2e513aOnClick.addEvent(function(event,treeId,treeNode){
if (treeNode!=null && treeNode!='') {
compReff4e25a130ba7e141bac8d40abe4573d2b1a4 = treeNode.id; operaButtonName = null; 
tablebbbbaac739a860421ab856d911abf6a98dd9Reload(treeNode.id,treeNode,'');}
});
tablebbbbaac739a860421ab856d911abf6a98dd9LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
treef821d5139287e146e9e945bdbf5e3c2e513aOnClick.addEvent(function(event,treeId,treeNode){
if (treeNode!=null && treeNode!='') {
compRef1671c882c9b13c4b04eb1a0d951eb98690f2 = treeNode.id; operaButtonName = null; 
form9b2ffe76c9ed1849dfa849a2fe2782f13880Reload(treeNode.id,treeNode,'');}
});
$("#tablebbbbaac739a860421ab856d911abf6a98dd9").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8d52d54a018d52f8138c088c/tablebbbbaac739a860421ab856d911abf6a98dd9/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtablebbbbaac739a860421ab856d911abf6a98dd9,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:true,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablebbbbaac739a860421ab856d911abf6a98dd9SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablebbbbaac739a860421ab856d911abf6a98dd9LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablebbbbaac739a860421ab856d911abf6a98dd9OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablebbbbaac739a860421ab856d911abf6a98dd9OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablebbbbaac739a860421ab856d911abf6a98dd9GridComplete.exec();
				    setTimeout(function(){var height = $("#tablebbbbaac739a860421ab856d911abf6a98dd9").closest('.ui-jqgrid-bdiv').height();
					$("#tablebbbbaac739a860421ab856d911abf6a98dd9norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablebbbbaac739a860421ab856d911abf6a98dd9norecords img").css("width","120px");
                 }else{
					    $("#tablebbbbaac739a860421ab856d911abf6a98dd9norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablebbbbaac739a860421ab856d911abf6a98dd9BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablebbbbaac739a860421ab856d911abf6a98dd9OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablebbbbaac739a860421ab856d911abf6a98dd9norecords").hide();
		   	    $("#Pagertablebbbbaac739a860421ab856d911abf6a98dd9_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablebbbbaac739a860421ab856d911abf6a98dd9").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablebbbbaac739a860421ab856d911abf6a98dd9").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablebbbbaac739a860421ab856d911abf6a98dd9norecords").html() == null) {
						$("#tablebbbbaac739a860421ab856d911abf6a98dd9").parent().append("<div class='no_data' id='tablebbbbaac739a860421ab856d911abf6a98dd9norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablebbbbaac739a860421ab856d911abf6a98dd9norecords").show();
					$("#Pagertablebbbbaac739a860421ab856d911abf6a98dd9_left").css("display", "none");
				}
tablebbbbaac739a860421ab856d911abf6a98dd9LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: true,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablebbbbaac739a860421ab856d911abf6a98dd9"
    });
$("#t_tablebbbbaac739a860421ab856d911abf6a98dd9").append($("#tableToolbartablebbbbaac739a860421ab856d911abf6a98dd9"));function searchDatatablebbbbaac739a860421ab856d911abf6a98dd9(){
 var para = serializeObjectForEform($("#searchformtablebbbbaac739a860421ab856d911abf6a98dd9"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablebbbbaac739a860421ab856d911abf6a98dd9KeyWordIn="";
tablebbbbaac739a860421ab856d911abf6a98dd9ParamIn=JSON.stringify(para);
	$('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablebbbbaac739a860421ab856d911abf6a98dd9").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablebbbbaac739a860421ab856d911abf6a98dd9').bind('click',function(){
var contentWidth = 1200;
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
'250px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtablebbbbaac739a860421ab856d911abf6a98dd9'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablebbbbaac739a860421ab856d911abf6a98dd9(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablebbbbaac739a860421ab856d911abf6a98dd9")); searchDatatablebbbbaac739a860421ab856d911abf6a98dd9(); layer.close(index); return false;
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
$('#CREA_TIME_START_button').click(function(e){
			$('#CREA_TIME_START').datepicker('show');
			$('#CREA_TIME_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_END_button').click(function(e){
			$('#CREA_TIME_END').datepicker('show');
			$('#CREA_TIME_END').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_START_button').click(function(e){
			$('#CREA_TIME_DATE_START').datepicker('show');
			$('#CREA_TIME_DATE_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_END_button').click(function(e){
			$('#CREA_TIME_DATE_END').datepicker('show');
			$('#CREA_TIME_DATE_END').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJ_START_button').click(function(e){
			$('#CREA_TIME_DATE_TJ_START').datepicker('show');
			$('#CREA_TIME_DATE_TJ_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJ_END_button').click(function(e){
			$('#CREA_TIME_DATE_TJ_END').datepicker('show');
			$('#CREA_TIME_DATE_TJ_END').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJYB_START_button').click(function(e){
			$('#CREA_TIME_DATE_TJYB_START').datepicker('show');
			$('#CREA_TIME_DATE_TJYB_START').datepicker().trigger('click');
}); 
$('#CREA_TIME_DATE_TJYB_END_button').click(function(e){
			$('#CREA_TIME_DATE_TJYB_END').datepicker('show');
			$('#CREA_TIME_DATE_TJYB_END').datepicker().trigger('click');
}); 
$('#ZKDYDH_START_button').click(function(e){
			$('#ZKDYDH_START').datepicker('show');
			$('#ZKDYDH_START').datepicker().trigger('click');
}); 
$('#ZKDYDH_END_button').click(function(e){
			$('#ZKDYDH_END').datepicker('show');
			$('#ZKDYDH_END').datepicker().trigger('click');
}); 
$('#JWYCH_START_button').click(function(e){
			$('#JWYCH_START').datepicker('show');
			$('#JWYCH_START').datepicker().trigger('click');
}); 
$('#JWYCH_END_button').click(function(e){
			$('#JWYCH_END').datepicker('show');
			$('#JWYCH_END').datepicker().trigger('click');
}); 
$('#WYYCH_START_button').click(function(e){
			$('#WYYCH_START').datepicker('show');
			$('#WYYCH_START').datepicker().trigger('click');
}); 
$('#WYYCH_END_button').click(function(e){
			$('#WYYCH_END').datepicker('show');
			$('#WYYCH_END').datepicker().trigger('click');
}); 
$("#tableToolbarButton140d63cad45fc64f3f39658db0f3ee39e3f0").bind('click',function() {                                                                       
	if (compReff4e25a130ba7e141bac8d40abe4573d2b1a4 == null || compReff4e25a130ba7e141bac8d40abe4573d2b1a4=='' ) {              
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
                                                                            
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '添加',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8d5432ec018d58263cff2d66&fkcol=PARTY_ID&fkvalue='+compReff4e25a130ba7e141bac8d40abe4573d2b1a4+'&grid=tablebbbbaac739a860421ab856d911abf6a98dd9',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtondb743912c85eac439a183083470f6a01c0bb").bind('click',function() {                                                                                       
	var ids = $('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8d5432ec018d58263cff2d66&id=' + rowData.ID+'&fkcol=PARTY_ID&fkvalue='+compReff4e25a130ba7e141bac8d40abe4573d2b1a4+'&grid=tablebbbbaac739a860421ab856d911abf6a98dd9',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtondbb5293a4c6fac4ce06afbfac932bf753453").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_ORG_INFO&isbpm=N&dbid=2c908c1d8d5432ec018d5462afc71ae0', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8d52d54a018d52f8138c088c',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablebbbbaac739a860421ab856d911abf6a98dd9').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton920faf544568954fe178381e2eb98dbc64de").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ljxjjdb', callBackFunc: function () {                           	
		$('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton529df83371825648704802df610dc71016ae').bind('click',function() {                           
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
	        var colModels =$('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablebbbbaac739a860421ab856d911abf6a98dd9KeyWordIn;                          
	        expSearchParams.param = tablebbbbaac739a860421ab856d911abf6a98dd9ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='党组织历届选举情况';                             
	        expSearchParams.viewid='2c908c1d8d52d54a018d52f8138c088c';                                   
	        expSearchParams.pid=compReff4e25a130ba7e141bac8d40abe4573d2b1a4;                                   
	        expSearchParams.tableid='tablebbbbaac739a860421ab856d911abf6a98dd9';                                 
	        expSearchParams.isbpm='N';                                     
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
$("#formToolbarButton7c74dabbddcac84d3a4a592d1c5f0013b94c").bind('click',function(event){var treeSelect = window.treeObj.getSelectedNodes()[0];
var preNode = treeSelect.getPreNode(treeSelect );
if(preNode){
  window.treeObj.selectNode(preNode);
 $("#"+preNode.tId+"_a").trigger("click");
}else{
 layer.msg("未查询到上一个节点")
}});
$("#formToolbarButtona196a0101fcdee4ada9a318b971bc21469db").bind('click',function(event){var treeSelect = window.treeObj.getSelectedNodes()[0];
var nextNode = treeSelect.getNextNode(treeSelect );
if(nextNode){
  window.treeObj.selectNode(nextNode);
 $("#"+nextNode.tId+"_a").trigger("click");
}else{
 layer.msg("未查询到下一个节点")
}});
$("#formToolbarButtonb7cd6cd4c17de74aaadb82e7bb776e1db770").bind('click',function(event){var treeSelect = window.treeObj.getSelectedNodes()[0];
if(treeSelect ){
//window.open("avicit/pb/organize/partyOrganization/partyOrganizationController/orgxjSzDetail/"+treeSelect.id)
}else{
 layer.msg("未查询到节点")
}});
$("#formToolbarButtond552047ca096414cbcb846d0c39a00cc963e").bind('click',function(event){layer.open({
	    type: 2,
		area: ['960px', '500px'],
	    title: '党组织选举进度',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: true, //开启最大化最小化按钮
	    content: 'platform/eform/bpmsCRUDClient/toViewJsp/dzzxjjdb' 
	});});
		$(".ztree").each(function(){
			var _this = this;
			setTimeout(function(){
				var parentdivh = $(_this).parent().parent().height();
				var treeHeight = parentdivh-$("#txt_treef821d5139287e146e9e945bdbf5e3c2e513a").height()-10;
				$(_this).css("height",treeHeight);
			},400);
		});
		$(".ztree").css("overflow","auto");
treef821d5139287e146e9e945bdbf5e3c2e513aOnAsyncSuccess.addEvent(function(event, treeId, msg){var treeObj = $.fn.zTree.getZTreeObj('treef821d5139287e146e9e945bdbf5e3c2e513a');
window.treeObj = treeObj;});
      var setting = {                                                                  
		view: {                                                                           
			selectedMulti: false,                                                          
			fontCss: treef821d5139287e146e9e945bdbf5e3c2e513asetFontCssBySearch                                         
		},                                                                                
		check: {                                                                           
			enable: false,                                                                 
		},                                                                                
		data: {                                                                           
			key: {                                                                        
				id: "id",                                                                 
				name: "text",                                                             
				children: "children"                                                      
			},                                                                            
			simpleData: {                                                                 
				enable: true,                                                             
				idKey: "id",                                                              
				pIdKey: "parentId",                                                       
				rootPId: "-1"                                                               
			}                                                                             
		},                                                                                
		async: {                                                                          
			enable: true,                                                                 
			autoParam:["id","level"],                                                             
			otherParam:{"dbid":"948e83e37f8c9f39017f913e40501865","pid":"PARENT_ID","nodeid":"ID","nodename":"PARTY_NAME","orderStr":"TREE_SORTS asc ", 
                         "rootid":"-1",
                     "viewid":"2c908c1d8d52d54a018d52f8138c088c","treeid":"treef821d5139287e146e9e945bdbf5e3c2e513a"
                     },                                                                
			dataFilter: function(treeId, parentNode, childNodes){                         
				if (!childNodes)                                                          
		            return null;                                                          
		        childNodes = eval(childNodes);                                            
		        return childNodes;                                                        
			}                                                                             
		},                                                                                
callback: {
        onClick:function(event,treeId,treeNode){treef821d5139287e146e9e945bdbf5e3c2e513aOnClick.exec(event,treeId,treeNode);},
        onExpand:function(event,treeId,treeNode){treef821d5139287e146e9e945bdbf5e3c2e513aOnExpand.exec(event,treeId,treeNode);},
        onCollapse:function(event,treeId,treeNode){treef821d5139287e146e9e945bdbf5e3c2e513aOnCollapse.exec(event,treeId,treeNode);},
        beforeAsync:function(treeId,treeNode){$("#treef821d5139287e146e9e945bdbf5e3c2e513anorecords").hide();treef821d5139287e146e9e945bdbf5e3c2e513aBeforeAsync.exec(treeId,treeNode);},
        onDblClick:function(event,treeId,treeNode){treef821d5139287e146e9e945bdbf5e3c2e513aOnDblClick.exec(event,treeId,treeNode);},
        onCheck:function(event,treeId,treeNode){treef821d5139287e146e9e945bdbf5e3c2e513aOnCheck.exec(event,treeId,treeNode);},
			onAsyncError:  function(){alert("加载失败！");},                              
        onAsyncSuccess:  function(event,treeId,msg){
							var zTree = $.fn.zTree.getZTreeObj(treeId);
                         var node = zTree.getSelectedNodes()[0];
                         if (!node) {
                             var nodes = zTree.getNodes();
                             if (nodes.length>0){
                           	    node = nodes[0];
                            	    zTree.selectNode(nodes[0]);
                        	    }else{
					        		if ($("#treef821d5139287e146e9e945bdbf5e3c2e513anorecords").html() == null) {
										$("#treef821d5139287e146e9e945bdbf5e3c2e513a").append("<div class='no_data' id='treef821d5139287e146e9e945bdbf5e3c2e513anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
									}
				    setTimeout(function(){var height = $("#treef821d5139287e146e9e945bdbf5e3c2e513a").height();
					$("#treef821d5139287e146e9e945bdbf5e3c2e513anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#treef821d5139287e146e9e945bdbf5e3c2e513anorecords img").css("width","120px");
                 }else{
					    $("#treef821d5139287e146e9e945bdbf5e3c2e513anorecords img").css("width",(height/1.9)+"px");
                 }},100);
									$("#treef821d5139287e146e9e945bdbf5e3c2e513anorecords").show();
                             }
                        	 }
                           zTree.setting.callback.onClick(null, zTree.setting.treeId, node);
                           treef821d5139287e146e9e945bdbf5e3c2e513aOnAsyncSuccess.exec(event, treeId, msg);},
						}
	    };
   $.fn.zTree.init($("#treef821d5139287e146e9e945bdbf5e3c2e513a"),setting, []);
$("#txt_treef821d5139287e146e9e945bdbf5e3c2e513a").on('keyup',function(e){
     if(e.keyCode == 13){
     var text = $("#txt_treef821d5139287e146e9e945bdbf5e3c2e513a").val();
     var pattern=/[`~!@#$%^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
     text = text.replace(pattern,"");                                  
     treef821d5139287e146e9e945bdbf5e3c2e513aSearch(text);
     }
});
$("#searchbtns_treef821d5139287e146e9e945bdbf5e3c2e513a").click(function () {
     var text = $("#txt_treef821d5139287e146e9e945bdbf5e3c2e513a").val();
     var pattern=/[`~!@#$%^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
     text = text.replace(pattern,"");                                  
     treef821d5139287e146e9e945bdbf5e3c2e513aSearch(text);
});
var notEmptyRegExp = /[\S+]/i;
function treef821d5139287e146e9e945bdbf5e3c2e513aSearch(searchParm) {
     if (!notEmptyRegExp.test(searchParm)) {
         treef821d5139287e146e9e945bdbf5e3c2e513aReload();
     } else {
         $.ajax({
             url: 'platform/eform/bpmsCRUDClient/searchTree',
             data: {"searchParm":searchParm,"dbid":"948e83e37f8c9f39017f913e40501865","pid":"PARENT_ID","nodeid":"ID","nodename":"PARTY_NAME"
                         ,"rootid":"-1"
                     ,"viewid":"2c908c1d8d52d54a018d52f8138c088c","treeid":"treef821d5139287e146e9e945bdbf5e3c2e513a"
 },
             type: 'post',
             dataType: 'json',
             success: function (backData) {
                 if(backData.length == 0) {
                     layer.msg('没有搜索到相关结果！', {icon: 7});
                 } else {
                     $("#treef821d5139287e146e9e945bdbf5e3c2e513asearchStatus").val("1");
                     var zNodes = backData;
   					var zTree = $.fn.zTree.getZTreeObj("treef821d5139287e146e9e945bdbf5e3c2e513a"); 
   					var newsetting = zTree.setting; 
                     $.fn.zTree.init($("#treef821d5139287e146e9e945bdbf5e3c2e513a"), newsetting, zNodes);
                 }
             }
         });
     }
}
function treef821d5139287e146e9e945bdbf5e3c2e513asetFontCssBySearch(treeId, treeNode) {
     if ($("#treef821d5139287e146e9e945bdbf5e3c2e513asearchStatus").val() == "1" && treeNode.type == "search") {
         return {color:"red"};
     }
}
treef821d5139287e146e9e945bdbf5e3c2e513aReload();
;});	 
