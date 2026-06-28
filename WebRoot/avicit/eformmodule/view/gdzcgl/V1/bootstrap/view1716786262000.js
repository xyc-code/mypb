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

function redraw948e83e38fa41ec6018fa8039910441a(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38fa41ec6018fa8039910441a").width();
		var win_height = $("#948e83e38fa41ec6018fa8039910441a").height();
		$('#948e83e38fa41ec6018fa8039910441a').layout('panel', 'center').panel('resize',{width:win_width*0.8,height:win_height*1.0});
		$('#948e83e38fa41ec6018fa8039910441a').layout('panel', 'west').panel('resize',{width:win_width*0.2,height:win_height*1.0});
		$('#948e83e38fa41ec6018fa8039910441a').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38fa41ec6018fa8039910441a").width();
	setTimeout(function(){redraw948e83e38fa41ec6018fa8039910441a(win_width);},500);
});
var compRefe2ff5b8c47b267417cb879a48fe9ee88f48d='';
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3KeyWordIn = "";    
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3ParamIn = "";    
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3SelectRow = {     
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3LoadComplete = {     
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3BeforeEditCell = {        
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3OndblClickRow = {     
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3OnRightClickRow = {     
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3GridComplete = {     
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3OnCellSelect = {     
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
var table92f9acf2ae17794c91c8f1d0ce196a02e7b3LoadBeforeSend = {        
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
function table92f9acf2ae17794c91c8f1d0ce196a02e7b3Reload(pid){
	var _isInvalid = true;
	$("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table92f9acf2ae17794c91c8f1d0ce196a02e7b3Pid = pid;
		}
		return false;
	}
	window.table92f9acf2ae17794c91c8f1d0ce196a02e7b3Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table92f9acf2ae17794c91c8f1d0ce196a02e7b3TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table92f9acf2ae17794c91c8f1d0ce196a02e7b3Pid == 'undefined' || window.table92f9acf2ae17794c91c8f1d0ce196a02e7b3Pid!=null){
table92f9acf2ae17794c91c8f1d0ce196a02e7b3Reload(window.table92f9acf2ae17794c91c8f1d0ce196a02e7b3Pid);
}
}
var tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3 = [];
var uniqueColtable92f9acf2ae17794c91c8f1d0ce196a02e7b3 = [];
var uniqueColTitletable92f9acf2ae17794c91c8f1d0ce196a02e7b3 = [];
var defaultValuetable92f9acf2ae17794c91c8f1d0ce196a02e7b3 = {};
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '资产名称',hidden:false, name: 'ZC_NAME',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '固定资产型号',hidden:false, name: 'ZC_MODEL',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '资产编号',hidden:false, name: 'ZC_CODE',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '固定资产类别',hidden:false, name: 'ZC_TYPE',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '购入时间', formatter:format, hidden:false, name: 'ZC_IN_DATE',align:'center',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '价格',hidden:false, name: 'ZC_MONTY',align:'right',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '数量',hidden:false, name: 'ZC_NUM',align:'right',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({ label: '资产管理单位',hidden:true, name: 'ZC_MANAGER_NUIT',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({ label: '资产管理单位',hidden:false, name: 'ZC_MANAGER_NUITName',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '单位',hidden:false, name: 'ZC_UNIT',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({ label: '管理人',hidden:true, name: 'ZC_MANAGER_USER',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({ label: '管理人',hidden:false, name: 'ZC_MANAGER_USERName',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '资产存放地点',hidden:false, name: 'ZC_ADDRESS',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({ label: '固定资产状态',hidden:true, name: 'GDZC_FLAG',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({ label: '固定资产状态',hidden:false, name: 'GDZC_FLAGName',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '外键',hidden:true, name: 'FK_GDZCFL_ID',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable92f9acf2ae17794c91c8f1d0ce196a02e7b3 = []; 
searchNamestable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push('ZC_NAME');
searchNamestable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push('ZC_CODE');
searchNamestable92f9acf2ae17794c91c8f1d0ce196a02e7b3.push('ZC_UNIT');
$('#keyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3').attr('placeholder', '请输入资产名称、资产编号、单位查询');
function searchDataKeyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3(){
	var keyWord = $.trim($("#keyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3").val()); 
 if($('#keyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable92f9acf2ae17794c91c8f1d0ce196a02e7b3.length;i++){ 
		var name = searchNamestable92f9acf2ae17794c91c8f1d0ce196a02e7b3[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table92f9acf2ae17794c91c8f1d0ce196a02e7b3KeyWordIn=JSON.stringify(param);
table92f9acf2ae17794c91c8f1d0ce196a02e7b3ParamIn="";
	$('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3();
	}
});
$('#keyWordBttable92f9acf2ae17794c91c8f1d0ce196a02e7b3').bind('click', function() {
		searchDataKeyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3();
});
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnExpand = {     
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
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnAsyncSuccess = {     
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
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnClick = {     
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
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnCheck= {     
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
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnDblClick = {     
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
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnCollapse = {     
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
var tree74aa2aa3f04bb8481f6af1465fa5ecd26213BeforeAsync = {     
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
function tree74aa2aa3f04bb8481f6af1465fa5ecd26213Reload(pid){     
	var _isInvalid = true;
	$("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tree74aa2aa3f04bb8481f6af1465fa5ecd26213Pid = pid;
		}
		return false;
	}
	window.tree74aa2aa3f04bb8481f6af1465fa5ecd26213Pid = null;
   var zTree = $.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213"); 
   var newsetting = zTree.setting; 
	  newsetting.async.url =  "platform/eform/bpmsCRUDClient/gettree/2";
	var rootid  = "-1"
   newsetting.async.otherParam.rootid = pid || rootid; 
   $.fn.zTree.init($("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213"), newsetting, []);    }
function tree74aa2aa3f04bb8481f6af1465fa5ecd26213TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tree74aa2aa3f04bb8481f6af1465fa5ecd26213Pid == 'undefined' || window.tree74aa2aa3f04bb8481f6af1465fa5ecd26213Pid!=null){
tree74aa2aa3f04bb8481f6af1465fa5ecd26213Reload(window.tree74aa2aa3f04bb8481f6af1465fa5ecd26213Pid);
}
}
      function showRMenutree74aa2aa3f04bb8481f6af1465fa5ecd26213(type, x, y, treeNode) {                                                                  
          $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool ul").show();                                                                        
          $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool").css({"top":y+"px", "left":x+"px", "visibility":"visible"});           
          $("body").bind("mousedown", onBodyMouseDowntree74aa2aa3f04bb8481f6af1465fa5ecd26213);                                             
      }                                                                                                        
      function hideRMenutree74aa2aa3f04bb8481f6af1465fa5ecd26213() {                                                                            
          if ($("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool")) $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool").css({"visibility": "hidden"});                        
          $("body").unbind("mousedown", onBodyMouseDowntree74aa2aa3f04bb8481f6af1465fa5ecd26213);                                           
      }                                                                                                        
      function onBodyMouseDowntree74aa2aa3f04bb8481f6af1465fa5ecd26213(event){                                                                  
          if (!(event.target.id == "tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool" || $(event.target).parents("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool").length>0)) {     
          	$("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool").css({"visibility" : "hidden"});                                            
          }                                                                                                    
      }                                                                                                        
;$(document).ready(function(){ 

tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnClick.addEvent(function(event,treeId,treeNode){
if (treeNode!=null && treeNode!='') {
compRefe2ff5b8c47b267417cb879a48fe9ee88f48d = treeNode.id; operaButtonName = null; 
table92f9acf2ae17794c91c8f1d0ce196a02e7b3Reload(treeNode.id,treeNode,'');}
});
table92f9acf2ae17794c91c8f1d0ce196a02e7b3LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38fa41ec6018fa8039910441a/table92f9acf2ae17794c91c8f1d0ce196a02e7b3/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable92f9acf2ae17794c91c8f1d0ce196a02e7b3,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table92f9acf2ae17794c91c8f1d0ce196a02e7b3SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table92f9acf2ae17794c91c8f1d0ce196a02e7b3LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table92f9acf2ae17794c91c8f1d0ce196a02e7b3OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table92f9acf2ae17794c91c8f1d0ce196a02e7b3OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table92f9acf2ae17794c91c8f1d0ce196a02e7b3GridComplete.exec();
				    setTimeout(function(){var height = $("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3").closest('.ui-jqgrid-bdiv').height();
					$("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords img").css("width","120px");
                 }else{
					    $("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table92f9acf2ae17794c91c8f1d0ce196a02e7b3BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table92f9acf2ae17794c91c8f1d0ce196a02e7b3OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords").hide();
		   	    $("#Pagertable92f9acf2ae17794c91c8f1d0ce196a02e7b3_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords").html() == null) {
						$("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3").parent().append("<div class='no_data' id='table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table92f9acf2ae17794c91c8f1d0ce196a02e7b3norecords").show();
					$("#Pagertable92f9acf2ae17794c91c8f1d0ce196a02e7b3_left").css("display", "none");
				}
table92f9acf2ae17794c91c8f1d0ce196a02e7b3LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable92f9acf2ae17794c91c8f1d0ce196a02e7b3"
    });
$("#t_table92f9acf2ae17794c91c8f1d0ce196a02e7b3").append($("#tableToolbartable92f9acf2ae17794c91c8f1d0ce196a02e7b3"));$("#tableToolbarButton8585dfa696e4f942f458f3c50188380ee44c").bind('click',function() {                                                                       
	if (compRefe2ff5b8c47b267417cb879a48fe9ee88f48d == null || compRefe2ff5b8c47b267417cb879a48fe9ee88f48d=='' ) {              
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fa80cd7114ed7&fkcol=FK_GDZCFL_ID&fkvalue='+compRefe2ff5b8c47b267417cb879a48fe9ee88f48d+'&grid=table92f9acf2ae17794c91c8f1d0ce196a02e7b3',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonaec216746169844f57084e233743da1999cd").bind('click',function() {                                                                                       
	var ids = $('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fa80cd7114ed7&id=' + rowData.ID+'&fkcol=FK_GDZCFL_ID&fkvalue='+compRefe2ff5b8c47b267417cb879a48fe9ee88f48d+'&grid=table92f9acf2ae17794c91c8f1d0ce196a02e7b3',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton46b918f80e00334dd9c85f25eca56733f84d").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GHGDZC&isbpm=N&dbid=948e83e38fa41ec6018fa81460574f59', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38fa41ec6018fa8039910441a',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
function searchDatatable92f9acf2ae17794c91c8f1d0ce196a02e7b3(){
 var para = serializeObjectForEform($("#searchformtable92f9acf2ae17794c91c8f1d0ce196a02e7b3"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table92f9acf2ae17794c91c8f1d0ce196a02e7b3KeyWordIn="";
table92f9acf2ae17794c91c8f1d0ce196a02e7b3ParamIn=JSON.stringify(para);
	$('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable92f9acf2ae17794c91c8f1d0ce196a02e7b3").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable92f9acf2ae17794c91c8f1d0ce196a02e7b3').bind('click',function(){
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
	content: $('#searchDialogtable92f9acf2ae17794c91c8f1d0ce196a02e7b3'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable92f9acf2ae17794c91c8f1d0ce196a02e7b3(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable92f9acf2ae17794c91c8f1d0ce196a02e7b3")); searchDatatable92f9acf2ae17794c91c8f1d0ce196a02e7b3(); layer.close(index); return false;
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
$('#ZC_MANAGER_USERAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'ZC_MANAGER_USER',textFiled:'ZC_MANAGER_USERAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#ZC_MANAGER_NUITAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'ZC_MANAGER_NUIT',textFiled:'ZC_MANAGER_NUITAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#ZC_IN_DATE_START_button').click(function(e){
			$('#ZC_IN_DATE_START').datepicker('show');
			$('#ZC_IN_DATE_START').datepicker().trigger('click');
}); 
$('#ZC_IN_DATE_END_button').click(function(e){
			$('#ZC_IN_DATE_END').datepicker('show');
			$('#ZC_IN_DATE_END').datepicker().trigger('click');
}); 
		$(".ztree").each(function(){
			var _this = this;
			setTimeout(function(){
				var parentdivh = $(_this).parent().parent().height();
				var treeHeight = parentdivh-$("#txt_tree74aa2aa3f04bb8481f6af1465fa5ecd26213").height()-10;
				$(_this).css("height",treeHeight);
			},400);
		});
		$(".ztree").css("overflow","auto");
      var setting = {                                                                  
		view: {                                                                           
			selectedMulti: false,                                                          
			fontCss: tree74aa2aa3f04bb8481f6af1465fa5ecd26213setFontCssBySearch                                         
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
			otherParam:{"dbid":"948e83e38fa41ec6018fa4b4e0f42830","pid":"PARENT_ID","nodeid":"ID","nodename":"NAME","orderStr":"ORDER_BY asc ", 
                         "rootid":"-1",
                     "viewid":"948e83e38fa41ec6018fa8039910441a","treeid":"tree74aa2aa3f04bb8481f6af1465fa5ecd26213"
                     },                                                                
			dataFilter: function(treeId, parentNode, childNodes){                         
				if (!childNodes)                                                          
		            return null;                                                          
		        childNodes = eval(childNodes);                                            
		        return childNodes;                                                        
			}                                                                             
		},                                                                                
callback: {
   onRightClick : function OnRightClick(event, treeId, treeNode) {                                                                                                
			        if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {       
			        	$.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213").selectNode(treeNode);                                                                                 
			            showRMenutree74aa2aa3f04bb8481f6af1465fa5ecd26213("root", event.clientX, event.clientY, treeNode);                                                                 
			        } else if (treeNode && !treeNode.noR) {                                                                              
			        	$.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213").selectNode(treeNode);                                                                                 
			            showRMenutree74aa2aa3f04bb8481f6af1465fa5ecd26213("node", event.clientX, event.clientY, treeNode);                                                                 
			        }                                                                                                                    
			    },                                                                                                                       
        onClick:function(event,treeId,treeNode){tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnClick.exec(event,treeId,treeNode);},
        onExpand:function(event,treeId,treeNode){tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnExpand.exec(event,treeId,treeNode);},
        onCollapse:function(event,treeId,treeNode){tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnCollapse.exec(event,treeId,treeNode);},
        beforeAsync:function(treeId,treeNode){$("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords").hide();tree74aa2aa3f04bb8481f6af1465fa5ecd26213BeforeAsync.exec(treeId,treeNode);},
        onDblClick:function(event,treeId,treeNode){tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnDblClick.exec(event,treeId,treeNode);},
        onCheck:function(event,treeId,treeNode){tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnCheck.exec(event,treeId,treeNode);},
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
					        		if ($("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords").html() == null) {
										$("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213").append("<div class='no_data' id='tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
									}
				    setTimeout(function(){var height = $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213").height();
					$("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords img").css("width","120px");
                 }else{
					    $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords img").css("width",(height/1.9)+"px");
                 }},100);
									$("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213norecords").show();
                             }
                        	 }
                           zTree.setting.callback.onClick(null, zTree.setting.treeId, node);
                           tree74aa2aa3f04bb8481f6af1465fa5ecd26213OnAsyncSuccess.exec(event, treeId, msg);},
						}
	    };
   $.fn.zTree.init($("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213"),setting, []);
$("#txt_tree74aa2aa3f04bb8481f6af1465fa5ecd26213").on('keyup',function(e){
     if(e.keyCode == 13){
     var text = $("#txt_tree74aa2aa3f04bb8481f6af1465fa5ecd26213").val();
     var pattern=/[`~!@#$%^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
     text = text.replace(pattern,"");                                  
     tree74aa2aa3f04bb8481f6af1465fa5ecd26213Search(text);
     }
});
$("#searchbtns_tree74aa2aa3f04bb8481f6af1465fa5ecd26213").click(function () {
     var text = $("#txt_tree74aa2aa3f04bb8481f6af1465fa5ecd26213").val();
     var pattern=/[`~!@#$%^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
     text = text.replace(pattern,"");                                  
     tree74aa2aa3f04bb8481f6af1465fa5ecd26213Search(text);
});
var notEmptyRegExp = /[\S+]/i;
function tree74aa2aa3f04bb8481f6af1465fa5ecd26213Search(searchParm) {
     if (!notEmptyRegExp.test(searchParm)) {
         tree74aa2aa3f04bb8481f6af1465fa5ecd26213Reload();
     } else {
         $.ajax({
             url: 'platform/eform/bpmsCRUDClient/searchTree',
             data: {"searchParm":searchParm,"dbid":"948e83e38fa41ec6018fa4b4e0f42830","pid":"PARENT_ID","nodeid":"ID","nodename":"NAME"
                         ,"rootid":"-1"
                     ,"viewid":"948e83e38fa41ec6018fa8039910441a","treeid":"tree74aa2aa3f04bb8481f6af1465fa5ecd26213"
 },
             type: 'post',
             dataType: 'json',
             success: function (backData) {
                 if(backData.length == 0) {
                     layer.msg('没有搜索到相关结果！', {icon: 7});
                 } else {
                     $("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213searchStatus").val("1");
                     var zNodes = backData;
   					var zTree = $.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213"); 
   					var newsetting = zTree.setting; 
                     $.fn.zTree.init($("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213"), newsetting, zNodes);
                 }
             }
         });
     }
}
function tree74aa2aa3f04bb8481f6af1465fa5ecd26213setFontCssBySearch(treeId, treeNode) {
     if ($("#tree74aa2aa3f04bb8481f6af1465fa5ecd26213searchStatus").val() == "1" && treeNode.type == "search") {
         return {color:"red"};
     }
}
tree74aa2aa3f04bb8481f6af1465fa5ecd26213Reload();
$("#treeButton79658a0af800ed4bdda86dfe3f7a614f6fb9").bind('click',function() {                                                                        
   var treeX = $.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213");                     		 
   var node = treeX.getSelectedNodes()[0];                                		 
                                                                            
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '添加',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fa4b3dd482826&grid=tree74aa2aa3f04bb8481f6af1465fa5ecd26213&type=tree&parentNodeId=PARENT_ID&pNodeIdValue=' + node.id +''     
	});                                                                              
                                                                                 
}                                                                                   
);
$("#treeButton7afb5520bec35d4d8928ea7272eab69fa409").bind('click',function() {   																		        
   var treeX = $.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213");                     			        
   var node = treeX.getSelectedNodes()[0];                                   			        
   if (node.parentId == null || node.parentId == "-1") {                                     
       layer.msg('不能编辑根节点！',{icon: 4});                                                  
   }                                                                                           
   else {                                                                                      
                                                                            
	    layer.open({																			
            type: 2,																			
            area: ['100%', '100%'],															
            title: '编辑',																		
            skin: 'bs-modal',																	
            maxmin: false,																		
            content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fa41ec6018fa4b3dd482826&id=' + node.id +'&grid=tree74aa2aa3f04bb8481f6af1465fa5ecd26213&type=tree&parentNodeId=PARENT_ID&pNodeIdValue=' + node.parentId +''  
       });																						
                                                                                 
   }																						    
}																							    
);
$("#treeButtona5ac2535abf4454334da94927d6869102f64").bind('click',function() {   																		        
   var treeX = $.fn.zTree.getZTreeObj("tree74aa2aa3f04bb8481f6af1465fa5ecd26213");                     			        
   var node = treeX.getSelectedNodes()[0];                                    			        
   if (node.parentId == null || node.parentId == "-1") {                                     
       layer.msg('不能删除根节点！',{icon: 4});                                                  
   }                                                                                           
   else {                                                                                      
       layer.confirm('确定要删除该数据吗?', {													
       	icon: 3,																			
       	title: '提示',																	
       	area: ['400px', '']																	
       }, function(index) {																	
       	avicAjax.ajax({																		
       		url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GDZC_TREE', 
       		data: {ids : node.id, viewid:'948e83e38fa41ec6018fa8039910441a', type:'tree', nodeid:'ID', pid:'PARENT_ID'},								        
       		type: 'post',																	
       		dataType: 'json',																
       		success: function(r) {															
       			if (r.flag == 'success') {         	                                        
       				var parentNode = treeX.getNodeByParam("id", node.parentId, null);     
       				var spanId = parentNode.tId + "_span";                                
       				$("#" + spanId).click();                                              
       				treeX.removeNode(treeX.getNodeByParam("id", node.id, null));          
       			}	                                                                        
       			else {	                                                                    
       				layer.alert('删除失败！' + r.error, {									    
       					icon: 7,															
       					area: ['400px', ''],												
       					closeBtn: 0         												
       				});																		
       			}  																			
       		}																				
       	}); 																				
       	layer.close(index);                                                                 
       });																						
   }																						    
}																							    
);
;});	 
