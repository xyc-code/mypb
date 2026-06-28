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

function redraw948e83e38b65360b018b84b608b4707f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38b65360b018b84b608b4707f").width();
		var win_height = $("#948e83e38b65360b018b84b608b4707f").height();
		$('#948e83e38b65360b018b84b608b4707f').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38b65360b018b84b608b4707f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38b65360b018b84b608b4707f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38b65360b018b84b608b4707f").width();
	setTimeout(function(){redraw948e83e38b65360b018b84b608b4707f(win_width);},500);
});
var compRef59111fb0163e524e41d80e389a9bd05507d8='';
var table86131a8b0a9126444729f1d8e6d525900671KeyWordIn = "";    
var table86131a8b0a9126444729f1d8e6d525900671ParamIn = "";    
var table86131a8b0a9126444729f1d8e6d525900671SelectRow = {     
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
var table86131a8b0a9126444729f1d8e6d525900671LoadComplete = {     
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
var table86131a8b0a9126444729f1d8e6d525900671BeforeEditCell = {        
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
var table86131a8b0a9126444729f1d8e6d525900671OndblClickRow = {     
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
var table86131a8b0a9126444729f1d8e6d525900671OnRightClickRow = {     
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
var table86131a8b0a9126444729f1d8e6d525900671GridComplete = {     
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
var table86131a8b0a9126444729f1d8e6d525900671OnCellSelect = {     
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
var table86131a8b0a9126444729f1d8e6d525900671LoadBeforeSend = {        
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
function table86131a8b0a9126444729f1d8e6d525900671Reload(pid){
	var _isInvalid = true;
	$("#table86131a8b0a9126444729f1d8e6d525900671").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table86131a8b0a9126444729f1d8e6d525900671Pid = pid;
		}
		return false;
	}
	window.table86131a8b0a9126444729f1d8e6d525900671Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table86131a8b0a9126444729f1d8e6d525900671').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table86131a8b0a9126444729f1d8e6d525900671TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table86131a8b0a9126444729f1d8e6d525900671Pid == 'undefined' || window.table86131a8b0a9126444729f1d8e6d525900671Pid!=null){
table86131a8b0a9126444729f1d8e6d525900671Reload(window.table86131a8b0a9126444729f1d8e6d525900671Pid);
}
}
var tablecmtable86131a8b0a9126444729f1d8e6d525900671 = [];
var uniqueColtable86131a8b0a9126444729f1d8e6d525900671 = [];
var uniqueColTitletable86131a8b0a9126444729f1d8e6d525900671 = [];
var defaultValuetable86131a8b0a9126444729f1d8e6d525900671 = {};
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '主表id',hidden:true, name: 'ATTRIBUTE_11',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '表单编号',hidden:false, name: 'INSPECTION_FROM_ON',align:'left',  width: '130px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '循环审批次数',hidden:false, name: 'ATTRIBUTE_10',align:'left',  width: '130px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '巡察问题序号',hidden:false, name: 'INSPECTION_ON',align:'left',  width: '130px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '巡察反馈的问题',hidden:false, name: 'INSPECTION_ISSUE',align:'left',  width: '140px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '问题主要方面',hidden:false, name: 'ATTRIBUTE_01',align:'left',  width: '130px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '问题的具体内容',hidden:false, name: 'ATTRIBUTE_04',align:'left',  width: '140px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '产生问题的根本原因',hidden:false, name: 'INSPECTION_END_ISSUE',align:'left',  width: '150px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '申请人电话',hidden:true, name: 'INSPECTION_FROM_POSEN_TEL',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '文件名字',hidden:true, name: 'ATTRIBUTE_02',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({ label: '责任人',hidden:true, name: 'INSPECTION_POSEN',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({ label: '责任人',hidden:true, name: 'INSPECTION_POSENName',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '申请人单位',hidden:true, name: 'INSPECTION_FROM_POSEN_DEPT',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '申请人',hidden:true, name: 'INSPECTION_FROM_POSEN',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '申请日期', formatter:format, hidden:true, name: 'INSPECTION_FROM_DATE',align:'center',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '针对根本原因制定的归零措施',hidden:false, name: 'INSPECTION_MEASURE_ISSUE',align:'left',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '整改措施完成情况',hidden:false, name: 'INSPECTION_END_ISSUE_QK',align:'left',  width: '150px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '举一反三检查情况',hidden:false, name: 'INSPECTION_ONE_AND',align:'left',  width: '150px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '被巡察单位主管领导审核意见',hidden:false, name: 'INSPECTION_OPINION',align:'left',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '整改措施落实的佐证材料',hidden:true, name: 'INSPECTION_MATERIAL',align:'left',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '被巡察单位主管领导审核日期', formatter:format, hidden:false, name: 'INSPECTION_OPINION_DATE',align:'center',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '被巡察单位巡察整改领导小组审核意见',hidden:false, name: 'INSPECTION_OPINION_S',align:'left',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '被巡察单位巡察整改领导小组审核日期', formatter:format, hidden:false, name: 'INSPECTION_OPINION_DATE_S',align:'center',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '公司主管业务部门审查意见',hidden:false, name: 'INSPECTION_OPINION_END',align:'left',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '公司主管业务部门审查日期', formatter:format, hidden:false, name: 'INSPECTION_OPINION_END_DATE',align:'center',  width: '250px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '清单id',hidden:true, name: 'ATTRIBUTE_03',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '是否推送',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '0px'});
tablecmtable86131a8b0a9126444729f1d8e6d525900671.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '0px'});
	var searchNamestable86131a8b0a9126444729f1d8e6d525900671 = []; 
searchNamestable86131a8b0a9126444729f1d8e6d525900671.push('ATTRIBUTE_10');
$('#keyWordtable86131a8b0a9126444729f1d8e6d525900671').attr('placeholder', '请输入第几次的循环查询');
function searchDataKeyWordtable86131a8b0a9126444729f1d8e6d525900671(){
	var keyWord = $.trim($("#keyWordtable86131a8b0a9126444729f1d8e6d525900671").val()); 
 if($('#keyWordtable86131a8b0a9126444729f1d8e6d525900671').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable86131a8b0a9126444729f1d8e6d525900671.length;i++){ 
		var name = searchNamestable86131a8b0a9126444729f1d8e6d525900671[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table86131a8b0a9126444729f1d8e6d525900671KeyWordIn=JSON.stringify(param);
table86131a8b0a9126444729f1d8e6d525900671ParamIn="";
	$('#table86131a8b0a9126444729f1d8e6d525900671').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable86131a8b0a9126444729f1d8e6d525900671').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable86131a8b0a9126444729f1d8e6d525900671();
	}
});
$('#keyWordBttable86131a8b0a9126444729f1d8e6d525900671').bind('click', function() {
		searchDataKeyWordtable86131a8b0a9126444729f1d8e6d525900671();
});
var tablee381c507c0a7064b72f8e0044202eedf68beKeyWordIn = "";    
var tablee381c507c0a7064b72f8e0044202eedf68beParamIn = "";    
var tablee381c507c0a7064b72f8e0044202eedf68beSelectRow = {     
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
var tablee381c507c0a7064b72f8e0044202eedf68beLoadComplete = {     
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
var tablee381c507c0a7064b72f8e0044202eedf68beBeforeEditCell = {        
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
var tablee381c507c0a7064b72f8e0044202eedf68beOndblClickRow = {     
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
var tablee381c507c0a7064b72f8e0044202eedf68beOnRightClickRow = {     
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
var tablee381c507c0a7064b72f8e0044202eedf68beGridComplete = {     
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
var tablee381c507c0a7064b72f8e0044202eedf68beOnCellSelect = {     
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
var tablee381c507c0a7064b72f8e0044202eedf68beLoadBeforeSend = {        
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
function tablee381c507c0a7064b72f8e0044202eedf68beReload(pid){
	var _isInvalid = true;
	$("#tablee381c507c0a7064b72f8e0044202eedf68be").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee381c507c0a7064b72f8e0044202eedf68bePid = pid;
		}
		return false;
	}
	window.tablee381c507c0a7064b72f8e0044202eedf68bePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee381c507c0a7064b72f8e0044202eedf68beTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee381c507c0a7064b72f8e0044202eedf68bePid == 'undefined' || window.tablee381c507c0a7064b72f8e0044202eedf68bePid!=null){
tablee381c507c0a7064b72f8e0044202eedf68beReload(window.tablee381c507c0a7064b72f8e0044202eedf68bePid);
}
}
var tablecmtablee381c507c0a7064b72f8e0044202eedf68be = [];
var uniqueColtablee381c507c0a7064b72f8e0044202eedf68be = [];
var uniqueColTitletablee381c507c0a7064b72f8e0044202eedf68be = [];
var defaultValuetablee381c507c0a7064b72f8e0044202eedf68be = {};
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '巡察问题序号',hidden:false, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '主要方面',hidden:false, name: 'LIST_MAINLY',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '发现的问题',hidden:false, name: 'MANIFEST_ISSUE',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '问题的具体内容',hidden:false, name: 'MANIFEST_ISSUE_CONT',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '原因分析',hidden:false, name: 'MANIFEST_CAUSE',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '整改措施具体内容 （含措施分解）',hidden:false, name: 'MANIFEST_MEASURE',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '责任人',hidden:true, name: 'MANIFEST_POSEN',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '责任人',hidden:false, name: 'MANIFEST_POSENName',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '责任部门',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '责任部门',hidden:false, name: 'ATTRIBUTE_05Name',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '责任领导',hidden:true, name: 'MANIFEST_LEADERSHIP',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '责任领导',hidden:false, name: 'MANIFEST_LEADERSHIPName',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '举一反三情况',hidden:false, name: 'MANIFEST_ONE_AND',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '整改周期',hidden:true, name: 'ATTRIBUTE_04',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '整改周期',hidden:false, name: 'ATTRIBUTE_04Name',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '预计完成时间', formatter:format, hidden:false, name: 'MANIFEST_DATE_END',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '业务主管 部门会签',hidden:false, name: 'MANIFEST_QIAN',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '任务状态',hidden:true, name: 'ATTRIBUTE_01',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '任务状态',hidden:false, name: 'ATTRIBUTE_01Name',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '代办人',hidden:true, name: 'ATTRIBUTE_03',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ label: '代办人',hidden:false, name: 'ATTRIBUTE_03Name',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '报送时间', formatter:format, hidden:false, name: 'DATE_MANIFEST',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ sortable:false,label: '流程状态', formatter:function(cellvalue, options, rowObject){return bpmztFormatter(cellvalue, options, rowObject);}, hidden:false, name: 'tableVirColumn3ccc56bd3e14504931a8e9033f0c916a9c42',align:'left',  width: '150px'});tablecmtablee381c507c0a7064b72f8e0044202eedf68be.push({ sortable:false,label: '流程详细', formatter:function(cellvalue, options, rowObject){return bpmFormatter(cellvalue, options, rowObject);}, hidden:false, name: 'tableVirColumn1947c66b0a4e384cabeb513c95a2c0608bac',align:'left',  width: '150px'});	var searchNamestablee381c507c0a7064b72f8e0044202eedf68be = []; 
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('ATTRIBUTE_02');
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('LIST_MAINLY');
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('MANIFEST_ISSUE');
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('MANIFEST_ISSUE_CONT');
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('MANIFEST_CAUSE');
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('MANIFEST_MEASURE');
searchNamestablee381c507c0a7064b72f8e0044202eedf68be.push('MANIFEST_ONE_AND');
$('#keyWordtablee381c507c0a7064b72f8e0044202eedf68be').attr('placeholder', '请输入巡察问题序号、主要方面、发现的问题、问题的具体内容、原因分析、整改措施具体内容 （含措施分解）、举一反三情况查询');
function searchDataKeyWordtablee381c507c0a7064b72f8e0044202eedf68be(){
	var keyWord = $.trim($("#keyWordtablee381c507c0a7064b72f8e0044202eedf68be").val()); 
 if($('#keyWordtablee381c507c0a7064b72f8e0044202eedf68be').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablee381c507c0a7064b72f8e0044202eedf68be.length;i++){ 
		var name = searchNamestablee381c507c0a7064b72f8e0044202eedf68be[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablee381c507c0a7064b72f8e0044202eedf68beKeyWordIn=JSON.stringify(param);
tablee381c507c0a7064b72f8e0044202eedf68beParamIn="";
	$('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablee381c507c0a7064b72f8e0044202eedf68be').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablee381c507c0a7064b72f8e0044202eedf68be();
	}
});
$('#keyWordBttablee381c507c0a7064b72f8e0044202eedf68be').bind('click', function() {
		searchDataKeyWordtablee381c507c0a7064b72f8e0044202eedf68be();
});
;$(document).ready(function(){ 

tablee381c507c0a7064b72f8e0044202eedf68beSelectRow.addEvent(function(rowid,status){
var rowdata = $('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('getRowData',rowid);if (status) {
compRef59111fb0163e524e41d80e389a9bd05507d8 = rowid;operaButtonName = null;
table86131a8b0a9126444729f1d8e6d525900671Reload(rowid,rowdata,'');}
});
tablee381c507c0a7064b72f8e0044202eedf68beLoadComplete.addEvent(function(data){
var rowdata = $('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table86131a8b0a9126444729f1d8e6d525900671Reload('null',rowdata,'');
}
});
table86131a8b0a9126444729f1d8e6d525900671LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table86131a8b0a9126444729f1d8e6d525900671").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38b65360b018b84b608b4707f/table86131a8b0a9126444729f1d8e6d525900671/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable86131a8b0a9126444729f1d8e6d525900671,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table86131a8b0a9126444729f1d8e6d525900671SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table86131a8b0a9126444729f1d8e6d525900671LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table86131a8b0a9126444729f1d8e6d525900671OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table86131a8b0a9126444729f1d8e6d525900671OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table86131a8b0a9126444729f1d8e6d525900671GridComplete.exec();
				    setTimeout(function(){var height = $("#table86131a8b0a9126444729f1d8e6d525900671").closest('.ui-jqgrid-bdiv').height();
					$("#table86131a8b0a9126444729f1d8e6d525900671norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table86131a8b0a9126444729f1d8e6d525900671norecords img").css("width","120px");
                 }else{
					    $("#table86131a8b0a9126444729f1d8e6d525900671norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table86131a8b0a9126444729f1d8e6d525900671BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table86131a8b0a9126444729f1d8e6d525900671OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table86131a8b0a9126444729f1d8e6d525900671norecords").hide();
		   	    $("#Pagertable86131a8b0a9126444729f1d8e6d525900671_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table86131a8b0a9126444729f1d8e6d525900671").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table86131a8b0a9126444729f1d8e6d525900671").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table86131a8b0a9126444729f1d8e6d525900671norecords").html() == null) {
						$("#table86131a8b0a9126444729f1d8e6d525900671").parent().append("<div class='no_data' id='table86131a8b0a9126444729f1d8e6d525900671norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table86131a8b0a9126444729f1d8e6d525900671norecords").show();
					$("#Pagertable86131a8b0a9126444729f1d8e6d525900671_left").css("display", "none");
				}
table86131a8b0a9126444729f1d8e6d525900671LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: false,
    autoScroll:true, 
		   responsive:true, 
        pager: "#Pagertable86131a8b0a9126444729f1d8e6d525900671"
    });
$("#table86131a8b0a9126444729f1d8e6d525900671").closest('.ui-jqgrid-view').find('div.ui-jqgrid-bdiv').css("overflow-x","auto");
$("#t_table86131a8b0a9126444729f1d8e6d525900671").append($("#tableToolbartable86131a8b0a9126444729f1d8e6d525900671"));function searchDatatable86131a8b0a9126444729f1d8e6d525900671(){
 var para = serializeObjectForEform($("#searchformtable86131a8b0a9126444729f1d8e6d525900671"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table86131a8b0a9126444729f1d8e6d525900671KeyWordIn="";
table86131a8b0a9126444729f1d8e6d525900671ParamIn=JSON.stringify(para);
	$('#table86131a8b0a9126444729f1d8e6d525900671').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable86131a8b0a9126444729f1d8e6d525900671").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable86131a8b0a9126444729f1d8e6d525900671').bind('click',function(){
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
	content: $('#searchDialogtable86131a8b0a9126444729f1d8e6d525900671'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable86131a8b0a9126444729f1d8e6d525900671(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable86131a8b0a9126444729f1d8e6d525900671")); searchDatatable86131a8b0a9126444729f1d8e6d525900671(); layer.close(index); return false;
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
$('#INSPECTION_FROM_DATE_START_button').click(function(e){
			$('#INSPECTION_FROM_DATE_START').datepicker('show');
			$('#INSPECTION_FROM_DATE_START').datepicker().trigger('click');
}); 
$('#INSPECTION_FROM_DATE_END_button').click(function(e){
			$('#INSPECTION_FROM_DATE_END').datepicker('show');
			$('#INSPECTION_FROM_DATE_END').datepicker().trigger('click');
}); 
$('#INSPECTION_POSENAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'INSPECTION_POSEN',textFiled:'INSPECTION_POSENAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#INSPECTION_OPINION_END_DATE_START_button').click(function(e){
			$('#INSPECTION_OPINION_END_DATE_START').datepicker('show');
			$('#INSPECTION_OPINION_END_DATE_START').datepicker().trigger('click');
}); 
$('#INSPECTION_OPINION_END_DATE_END_button').click(function(e){
			$('#INSPECTION_OPINION_END_DATE_END').datepicker('show');
			$('#INSPECTION_OPINION_END_DATE_END').datepicker().trigger('click');
}); 
$('#INSPECTION_FROM_POSEN_DEPTAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'INSPECTION_FROM_POSEN_DEPT',textFiled:'INSPECTION_FROM_POSEN_DEPTAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$("#tablee381c507c0a7064b72f8e0044202eedf68be").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38b65360b018b84b608b4707f/tablee381c507c0a7064b72f8e0044202eedf68be/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee381c507c0a7064b72f8e0044202eedf68be,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee381c507c0a7064b72f8e0044202eedf68beSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee381c507c0a7064b72f8e0044202eedf68beLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee381c507c0a7064b72f8e0044202eedf68beOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee381c507c0a7064b72f8e0044202eedf68beOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee381c507c0a7064b72f8e0044202eedf68beGridComplete.exec();
				    setTimeout(function(){var height = $("#tablee381c507c0a7064b72f8e0044202eedf68be").closest('.ui-jqgrid-bdiv').height();
					$("#tablee381c507c0a7064b72f8e0044202eedf68benorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee381c507c0a7064b72f8e0044202eedf68benorecords img").css("width","120px");
                 }else{
					    $("#tablee381c507c0a7064b72f8e0044202eedf68benorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee381c507c0a7064b72f8e0044202eedf68beBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee381c507c0a7064b72f8e0044202eedf68beOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee381c507c0a7064b72f8e0044202eedf68benorecords").hide();
		   	    $("#Pagertablee381c507c0a7064b72f8e0044202eedf68be_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee381c507c0a7064b72f8e0044202eedf68be").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee381c507c0a7064b72f8e0044202eedf68be").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee381c507c0a7064b72f8e0044202eedf68benorecords").html() == null) {
						$("#tablee381c507c0a7064b72f8e0044202eedf68be").parent().append("<div class='no_data' id='tablee381c507c0a7064b72f8e0044202eedf68benorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee381c507c0a7064b72f8e0044202eedf68benorecords").show();
					$("#Pagertablee381c507c0a7064b72f8e0044202eedf68be_left").css("display", "none");
				}
tablee381c507c0a7064b72f8e0044202eedf68beLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee381c507c0a7064b72f8e0044202eedf68be"
    });
tablee381c507c0a7064b72f8e0044202eedf68beReload();
$("#t_tablee381c507c0a7064b72f8e0044202eedf68be").append($("#tableToolbartablee381c507c0a7064b72f8e0044202eedf68be"));function searchDatatablee381c507c0a7064b72f8e0044202eedf68be(){
 var para = serializeObjectForEform($("#searchformtablee381c507c0a7064b72f8e0044202eedf68be"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablee381c507c0a7064b72f8e0044202eedf68beKeyWordIn="";
tablee381c507c0a7064b72f8e0044202eedf68beParamIn=JSON.stringify(para);
	$('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablee381c507c0a7064b72f8e0044202eedf68be").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablee381c507c0a7064b72f8e0044202eedf68be').bind('click',function(){
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
'400px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtablee381c507c0a7064b72f8e0044202eedf68be'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablee381c507c0a7064b72f8e0044202eedf68be(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablee381c507c0a7064b72f8e0044202eedf68be")); searchDatatablee381c507c0a7064b72f8e0044202eedf68be(); layer.close(index); return false;
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
$('#MANIFEST_POSENAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'MANIFEST_POSEN',textFiled:'MANIFEST_POSENAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#DATE_MANIFEST_START_button').click(function(e){
			$('#DATE_MANIFEST_START').datepicker('show');
			$('#DATE_MANIFEST_START').datepicker().trigger('click');
}); 
$('#DATE_MANIFEST_END_button').click(function(e){
			$('#DATE_MANIFEST_END').datepicker('show');
			$('#DATE_MANIFEST_END').datepicker().trigger('click');
}); 
$("#tableToolbarButtoneff73bfbc941de47a7d85901a697b5b0e529").bind('click',function(event){exportWordHz();});
$("#tableToolbarButton3014c5c2523f584a687a8dd3cf91edee39a7").bind('click',function(event){layer.alert('功能开发http://20.14.3.142:8095/tempo-bi-runtime/publish/show/5a87e1e00b144d8a9f316968f63d93f2/b03ba4509e1a48c0b7b8e7cf17ef7a7e！', {
			icon : 7,
			area : [ '400px', '' ], //宽高
			closeBtn : 0,
			title:"提示"
		});});

$('#tableToolbarButtonea65d5ef22431943d6d87a260ace47a31cd6').bind('click',function() {                           
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
	        var colModels =$('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablee381c507c0a7064b72f8e0044202eedf68beKeyWordIn;                          
	        expSearchParams.param = tablee381c507c0a7064b72f8e0044202eedf68beParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='巡察整改任务清单';                             
	        expSearchParams.viewid='948e83e38b65360b018b84b608b4707f';                                   
	        expSearchParams.tableid='tablee381c507c0a7064b72f8e0044202eedf68be';                                 
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
;});	 
