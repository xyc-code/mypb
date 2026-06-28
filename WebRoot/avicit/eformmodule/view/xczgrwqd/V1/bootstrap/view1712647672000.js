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

function redraw2c91008188234d340188238a5aef02f5(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c91008188234d340188238a5aef02f5").width();
		var win_height = $("#2c91008188234d340188238a5aef02f5").height();
		$('#2c91008188234d340188238a5aef02f5').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c91008188234d340188238a5aef02f5').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#2c91008188234d340188238a5aef02f5').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c91008188234d340188238a5aef02f5").width();
	setTimeout(function(){redraw2c91008188234d340188238a5aef02f5(win_width);},500);
});
var compRef51e52115daa92d4c7498d5c368211a86666b='';
var table5632ec0cfdae5b45f4f9b6965e2334c9460aKeyWordIn = "";    
var table5632ec0cfdae5b45f4f9b6965e2334c9460aParamIn = "";    
var table5632ec0cfdae5b45f4f9b6965e2334c9460aSelectRow = {     
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aLoadComplete = {     
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aBeforeEditCell = {        
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aOndblClickRow = {     
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aOnRightClickRow = {     
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aGridComplete = {     
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aOnCellSelect = {     
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
var table5632ec0cfdae5b45f4f9b6965e2334c9460aLoadBeforeSend = {        
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
function table5632ec0cfdae5b45f4f9b6965e2334c9460aReload(pid){
	var _isInvalid = true;
	$("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5632ec0cfdae5b45f4f9b6965e2334c9460aPid = pid;
		}
		return false;
	}
	window.table5632ec0cfdae5b45f4f9b6965e2334c9460aPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5632ec0cfdae5b45f4f9b6965e2334c9460a').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5632ec0cfdae5b45f4f9b6965e2334c9460aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5632ec0cfdae5b45f4f9b6965e2334c9460aPid == 'undefined' || window.table5632ec0cfdae5b45f4f9b6965e2334c9460aPid!=null){
table5632ec0cfdae5b45f4f9b6965e2334c9460aReload(window.table5632ec0cfdae5b45f4f9b6965e2334c9460aPid);
}
}
var tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a = [];
var uniqueColtable5632ec0cfdae5b45f4f9b6965e2334c9460a = [];
var uniqueColTitletable5632ec0cfdae5b45f4f9b6965e2334c9460a = [];
var defaultValuetable5632ec0cfdae5b45f4f9b6965e2334c9460a = {};
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '表单编号',hidden:false, name: 'INSPECTION_FROM_ON',align:'left',  width: '120px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '循环审批次数',hidden:false, name: 'ATTRIBUTE_10',align:'left',  width: '130px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '巡察问题序号',hidden:true, name: 'INSPECTION_ON',align:'left',  width: '130px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '巡察反馈的问题',hidden:false, name: 'INSPECTION_ISSUE',align:'left',  width: '130px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '问题主要方面',hidden:false, name: 'ATTRIBUTE_01',align:'left',  width: '130px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '问题的具体内容',hidden:false, name: 'ATTRIBUTE_04',align:'left',  width: '130px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '产生问题的根本原因',hidden:false, name: 'INSPECTION_END_ISSUE',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '针对根本原因制定的归零措施',hidden:false, name: 'INSPECTION_MEASURE_ISSUE',align:'left',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '整改措施完成情况',hidden:false, name: 'INSPECTION_END_ISSUE_QK',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '举一反三检查情况',hidden:false, name: 'INSPECTION_ONE_AND',align:'left',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '主表id',hidden:true, name: 'ATTRIBUTE_11',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '整改措施落实的佐证材料',hidden:true, name: 'INSPECTION_MATERIAL',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '申请人电话',hidden:true, name: 'INSPECTION_FROM_POSEN_TEL',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '清单id',hidden:true, name: 'ATTRIBUTE_03',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '文件名字',hidden:true, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '责任人',hidden:true, name: 'INSPECTION_POSEN',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '申请人单位',hidden:true, name: 'INSPECTION_FROM_POSEN_DEPT',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_09',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_08',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_07',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '申请日期', formatter:format, hidden:true, name: 'INSPECTION_FROM_DATE',align:'center',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_06',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '被巡察单位主管领导审核意见',hidden:false, name: 'INSPECTION_OPINION',align:'left',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '是否推送',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '被巡察单位主管领导审核日期', formatter:format, hidden:false, name: 'INSPECTION_OPINION_DATE',align:'center',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '被巡察单位巡察整改领导小组审核意见',hidden:false, name: 'INSPECTION_OPINION_S',align:'left',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '被巡察单位巡察整改领导小组审核日期', formatter:format, hidden:false, name: 'INSPECTION_OPINION_DATE_S',align:'center',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '公司主管业务部门审查意见',hidden:false, name: 'INSPECTION_OPINION_END',align:'left',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '公司主管业务部门审查日期', formatter:format, hidden:false, name: 'INSPECTION_OPINION_END_DATE',align:'center',  width: '250px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '申请人',hidden:true, name: 'INSPECTION_FROM_POSEN',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
	var searchNamestable5632ec0cfdae5b45f4f9b6965e2334c9460a = []; 
searchNamestable5632ec0cfdae5b45f4f9b6965e2334c9460a.push('ATTRIBUTE_10');
$('#keyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a').attr('placeholder', '请输入循环审批次数查询');
function searchDataKeyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a(){
	var keyWord = $.trim($("#keyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a").val()); 
 if($('#keyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable5632ec0cfdae5b45f4f9b6965e2334c9460a.length;i++){ 
		var name = searchNamestable5632ec0cfdae5b45f4f9b6965e2334c9460a[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table5632ec0cfdae5b45f4f9b6965e2334c9460aKeyWordIn=JSON.stringify(param);
table5632ec0cfdae5b45f4f9b6965e2334c9460aParamIn="";
	$('#table5632ec0cfdae5b45f4f9b6965e2334c9460a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a();
	}
});
$('#keyWordBttable5632ec0cfdae5b45f4f9b6965e2334c9460a').bind('click', function() {
		searchDataKeyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a();
});
var table27dadc6724db894b7a08358c021c94d53c2fKeyWordIn = "";    
var table27dadc6724db894b7a08358c021c94d53c2fParamIn = "";    
var table27dadc6724db894b7a08358c021c94d53c2fSelectRow = {     
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
var table27dadc6724db894b7a08358c021c94d53c2fLoadComplete = {     
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
var table27dadc6724db894b7a08358c021c94d53c2fBeforeEditCell = {        
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
var table27dadc6724db894b7a08358c021c94d53c2fOndblClickRow = {     
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
var table27dadc6724db894b7a08358c021c94d53c2fOnRightClickRow = {     
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
var table27dadc6724db894b7a08358c021c94d53c2fGridComplete = {     
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
var table27dadc6724db894b7a08358c021c94d53c2fOnCellSelect = {     
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
var table27dadc6724db894b7a08358c021c94d53c2fLoadBeforeSend = {        
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
function table27dadc6724db894b7a08358c021c94d53c2fReload(pid){
	var _isInvalid = true;
	$("#table27dadc6724db894b7a08358c021c94d53c2f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table27dadc6724db894b7a08358c021c94d53c2fPid = pid;
		}
		return false;
	}
	window.table27dadc6724db894b7a08358c021c94d53c2fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table27dadc6724db894b7a08358c021c94d53c2fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table27dadc6724db894b7a08358c021c94d53c2fPid == 'undefined' || window.table27dadc6724db894b7a08358c021c94d53c2fPid!=null){
table27dadc6724db894b7a08358c021c94d53c2fReload(window.table27dadc6724db894b7a08358c021c94d53c2fPid);
}
}
var tablecmtable27dadc6724db894b7a08358c021c94d53c2f = [];
var uniqueColtable27dadc6724db894b7a08358c021c94d53c2f = [];
var uniqueColTitletable27dadc6724db894b7a08358c021c94d53c2f = [];
var defaultValuetable27dadc6724db894b7a08358c021c94d53c2f = {};
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '巡察问题序号',hidden:false, name: 'ATTRIBUTE_02',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '主要方面',hidden:false, name: 'LIST_MAINLY',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '发现的问题',hidden:false, name: 'MANIFEST_ISSUE',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '问题的具体内容',hidden:false, name: 'MANIFEST_ISSUE_CONT',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '原因分析',hidden:false, name: 'MANIFEST_CAUSE',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '整改措施具体内容',hidden:false, name: 'MANIFEST_MEASURE',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '责任人',hidden:true, name: 'MANIFEST_POSEN',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '责任人',hidden:false, name: 'MANIFEST_POSENName',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '责任部门',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '责任部门',hidden:false, name: 'ATTRIBUTE_05Name',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '责任领导',hidden:true, name: 'MANIFEST_LEADERSHIP',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '责任领导',hidden:false, name: 'MANIFEST_LEADERSHIPName',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '举一反三情况',hidden:false, name: 'MANIFEST_ONE_AND',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '整改周期',hidden:true, name: 'ATTRIBUTE_04',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '整改周期',hidden:false, name: 'ATTRIBUTE_04Name',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '预计完成时间', formatter:format, hidden:false, name: 'MANIFEST_DATE_END',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '业务主管 部门会签',hidden:false, name: 'MANIFEST_QIAN',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '任务状态',hidden:true, name: 'ATTRIBUTE_01',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '任务状态',hidden:false, name: 'ATTRIBUTE_01Name',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '代办人',hidden:true, name: 'ATTRIBUTE_03',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({ label: '代办人',hidden:false, name: 'ATTRIBUTE_03Name',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '预留字段',hidden:true, name: 'ATTRIBUTE_06',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '预留字段',hidden:true, name: 'ATTRIBUTE_07',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '预留字段',hidden:true, name: 'ATTRIBUTE_08',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '预留字段',hidden:true, name: 'ATTRIBUTE_09',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '预留字段',hidden:true, name: 'ATTRIBUTE_10',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '报送时间', formatter:format, hidden:false, name: 'DATE_MANIFEST',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '流程状态', formatter:function(cellvalue, options, rowObject){return function(cellvalue, options, rowObject){return bpmztFormatter(cellvalue, options, rowObject);}(cellvalue, options, rowObject);}, hidden:false, name: 'ATTRIBUTE_11',align:'left',  width: '80px'});
tablecmtable27dadc6724db894b7a08358c021c94d53c2f.push({label: '流程详细', formatter:function(cellvalue, options, rowObject){return bpmFormatter(cellvalue, options, rowObject);}, hidden:false, name: 'ATTRIBUTE_12',align:'center',  width: '80px'});
	var searchNamestable27dadc6724db894b7a08358c021c94d53c2f = []; 
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('ATTRIBUTE_02');
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('LIST_MAINLY');
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('MANIFEST_ISSUE');
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('MANIFEST_ISSUE_CONT');
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('MANIFEST_CAUSE');
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('MANIFEST_MEASURE');
searchNamestable27dadc6724db894b7a08358c021c94d53c2f.push('MANIFEST_ONE_AND');
$('#keyWordtable27dadc6724db894b7a08358c021c94d53c2f').attr('placeholder', '请输入巡察问题序号、主要方面、发现的问题、问题的具体内容、原因分析、整改措施具体内容、举一反三情况查询');
function searchDataKeyWordtable27dadc6724db894b7a08358c021c94d53c2f(){
	var keyWord = $.trim($("#keyWordtable27dadc6724db894b7a08358c021c94d53c2f").val()); 
 if($('#keyWordtable27dadc6724db894b7a08358c021c94d53c2f').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable27dadc6724db894b7a08358c021c94d53c2f.length;i++){ 
		var name = searchNamestable27dadc6724db894b7a08358c021c94d53c2f[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table27dadc6724db894b7a08358c021c94d53c2fKeyWordIn=JSON.stringify(param);
table27dadc6724db894b7a08358c021c94d53c2fParamIn="";
	$('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable27dadc6724db894b7a08358c021c94d53c2f').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable27dadc6724db894b7a08358c021c94d53c2f();
	}
});
$('#keyWordBttable27dadc6724db894b7a08358c021c94d53c2f').bind('click', function() {
		searchDataKeyWordtable27dadc6724db894b7a08358c021c94d53c2f();
});
;$(document).ready(function(){ 

table27dadc6724db894b7a08358c021c94d53c2fSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getRowData',rowid);if (status) {
compRef51e52115daa92d4c7498d5c368211a86666b = rowid;operaButtonName = null;
table5632ec0cfdae5b45f4f9b6965e2334c9460aReload(rowid,rowdata,'');}
});
table27dadc6724db894b7a08358c021c94d53c2fLoadComplete.addEvent(function(data){
var rowdata = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table5632ec0cfdae5b45f4f9b6965e2334c9460aReload('null',rowdata,'');
}
});
table5632ec0cfdae5b45f4f9b6965e2334c9460aLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c91008188234d340188238a5aef02f5/table5632ec0cfdae5b45f4f9b6965e2334c9460a/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable5632ec0cfdae5b45f4f9b6965e2334c9460a,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5632ec0cfdae5b45f4f9b6965e2334c9460aSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5632ec0cfdae5b45f4f9b6965e2334c9460aLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5632ec0cfdae5b45f4f9b6965e2334c9460aOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5632ec0cfdae5b45f4f9b6965e2334c9460aOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5632ec0cfdae5b45f4f9b6965e2334c9460aGridComplete.exec();
				    setTimeout(function(){var height = $("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").closest('.ui-jqgrid-bdiv').height();
					$("#table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords img").css("width","120px");
                 }else{
					    $("#table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5632ec0cfdae5b45f4f9b6965e2334c9460aBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table5632ec0cfdae5b45f4f9b6965e2334c9460aOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords").hide();
		   	    $("#Pagertable5632ec0cfdae5b45f4f9b6965e2334c9460a_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords").html() == null) {
						$("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").parent().append("<div class='no_data' id='table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5632ec0cfdae5b45f4f9b6965e2334c9460anorecords").show();
					$("#Pagertable5632ec0cfdae5b45f4f9b6965e2334c9460a_left").css("display", "none");
				}
table5632ec0cfdae5b45f4f9b6965e2334c9460aLoadComplete.exec(data);                      
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
        pager: "#Pagertable5632ec0cfdae5b45f4f9b6965e2334c9460a"
    });
$("#table5632ec0cfdae5b45f4f9b6965e2334c9460a").closest('.ui-jqgrid-view').find('div.ui-jqgrid-bdiv').css("overflow-x","auto");
$("#t_table5632ec0cfdae5b45f4f9b6965e2334c9460a").append($("#tableToolbartable5632ec0cfdae5b45f4f9b6965e2334c9460a"));function searchDatatable5632ec0cfdae5b45f4f9b6965e2334c9460a(){
 var para = serializeObjectForEform($("#searchformtable5632ec0cfdae5b45f4f9b6965e2334c9460a"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table5632ec0cfdae5b45f4f9b6965e2334c9460aKeyWordIn="";
table5632ec0cfdae5b45f4f9b6965e2334c9460aParamIn=JSON.stringify(para);
	$('#table5632ec0cfdae5b45f4f9b6965e2334c9460a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable5632ec0cfdae5b45f4f9b6965e2334c9460a").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable5632ec0cfdae5b45f4f9b6965e2334c9460a').bind('click',function(){
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
	content: $('#searchDialogtable5632ec0cfdae5b45f4f9b6965e2334c9460a'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable5632ec0cfdae5b45f4f9b6965e2334c9460a(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable5632ec0cfdae5b45f4f9b6965e2334c9460a")); searchDatatable5632ec0cfdae5b45f4f9b6965e2334c9460a(); layer.close(index); return false;
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
$("#table27dadc6724db894b7a08358c021c94d53c2f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c91008188234d340188238a5aef02f5/table27dadc6724db894b7a08358c021c94d53c2f/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable27dadc6724db894b7a08358c021c94d53c2f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table27dadc6724db894b7a08358c021c94d53c2fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table27dadc6724db894b7a08358c021c94d53c2fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table27dadc6724db894b7a08358c021c94d53c2fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table27dadc6724db894b7a08358c021c94d53c2fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table27dadc6724db894b7a08358c021c94d53c2fGridComplete.exec();
				    setTimeout(function(){var height = $("#table27dadc6724db894b7a08358c021c94d53c2f").closest('.ui-jqgrid-bdiv').height();
					$("#table27dadc6724db894b7a08358c021c94d53c2fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table27dadc6724db894b7a08358c021c94d53c2fnorecords img").css("width","120px");
                 }else{
					    $("#table27dadc6724db894b7a08358c021c94d53c2fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table27dadc6724db894b7a08358c021c94d53c2fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table27dadc6724db894b7a08358c021c94d53c2fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table27dadc6724db894b7a08358c021c94d53c2fnorecords").hide();
		   	    $("#Pagertable27dadc6724db894b7a08358c021c94d53c2f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table27dadc6724db894b7a08358c021c94d53c2f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table27dadc6724db894b7a08358c021c94d53c2f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table27dadc6724db894b7a08358c021c94d53c2fnorecords").html() == null) {
						$("#table27dadc6724db894b7a08358c021c94d53c2f").parent().append("<div class='no_data' id='table27dadc6724db894b7a08358c021c94d53c2fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table27dadc6724db894b7a08358c021c94d53c2fnorecords").show();
					$("#Pagertable27dadc6724db894b7a08358c021c94d53c2f_left").css("display", "none");
				}
table27dadc6724db894b7a08358c021c94d53c2fLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable27dadc6724db894b7a08358c021c94d53c2f"
    });
table27dadc6724db894b7a08358c021c94d53c2fReload();
$("#t_table27dadc6724db894b7a08358c021c94d53c2f").append($("#tableToolbartable27dadc6724db894b7a08358c021c94d53c2f"));function searchDatatable27dadc6724db894b7a08358c021c94d53c2f(){
 var para = serializeObjectForEform($("#searchformtable27dadc6724db894b7a08358c021c94d53c2f"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table27dadc6724db894b7a08358c021c94d53c2fKeyWordIn="";
table27dadc6724db894b7a08358c021c94d53c2fParamIn=JSON.stringify(para);
	$('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable27dadc6724db894b7a08358c021c94d53c2f").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable27dadc6724db894b7a08358c021c94d53c2f').bind('click',function(){
var contentWidth = 800;
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
	content: $('#searchDialogtable27dadc6724db894b7a08358c021c94d53c2f'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable27dadc6724db894b7a08358c021c94d53c2f(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable27dadc6724db894b7a08358c021c94d53c2f")); searchDatatable27dadc6724db894b7a08358c021c94d53c2f(); layer.close(index); return false;
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
$('#MANIFEST_LEADERSHIPAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'MANIFEST_LEADERSHIP',textFiled:'MANIFEST_LEADERSHIPAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#MANIFEST_DATE_END_START_button').click(function(e){
			$('#MANIFEST_DATE_END_START').datepicker('show');
			$('#MANIFEST_DATE_END_START').datepicker().trigger('click');
}); 
$('#MANIFEST_DATE_END_END_button').click(function(e){
			$('#MANIFEST_DATE_END_END').datepicker('show');
			$('#MANIFEST_DATE_END_END').datepicker().trigger('click');
}); 
$('#DATE_MANIFEST_START_button').click(function(e){
			$('#DATE_MANIFEST_START').datetimepicker('show');
			$('#DATE_MANIFEST_START').datetimepicker().trigger('click');
}); 
$('#DATE_MANIFEST_END_button').click(function(e){
			$('#DATE_MANIFEST_END').datetimepicker('show');
			$('#DATE_MANIFEST_END').datetimepicker().trigger('click');
}); 
$("#tableToolbarButton6875db8ef3e9ca4778386e4851f3f406e62c").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c91008188234d3401882394387d030b&grid=table27dadc6724db894b7a08358c021c94d53c2f',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonb82444782fc51f468c5bacec8710a9a70e35").bind('click',function() {                                                                                       
	var ids = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c91008188234d3401882394387d030b&id=' + rowData.ID+'&grid=table27dadc6724db894b7a08358c021c94d53c2f',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton4254b37b88947645023889efff27da3f4712").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TASK_CHECKLIST&isbpm=N&dbid=2c91008188234d340188237c825f02b3', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c91008188234d340188238a5aef02f5',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table27dadc6724db894b7a08358c021c94d53c2f').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtona4cd20186ef4c341f8b9e317637a26669fb7").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'xcgrwqd', callBackFunc: function () {                           	
		$('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
$("#tableToolbarButton4ab40b85a0dc354465789283244958a78768").bind('click',function(event){var bpmsDeleteRows = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getGridParam', 'selarrrow');             
if(bpmsDeleteRows .length == 0){
layer.alert('请选择！' , {									    
							icon: 7,															
							area: ['400px', ''],												
							closeBtn: 0         												
						});
return;
}
for(var k=0; k<bpmsDeleteRows .length;k++){
var rowData = $('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('getRowData', bpmsDeleteRows[k]); 
if(rowData.ATTRIBUTE_01Name == "已完成" || rowData.ATTRIBUTE_01Name == "已发放" ||   rowData.ATTRIBUTE_01Name == "已取消" ||  rowData.ATTRIBUTE_01Name == "延期完成" ){
layer.alert('该清单已发放！' , {									    
							icon: 7,															
							area: ['400px', ''],												
							closeBtn: 0         												
						});
return;
}
if(rowData.ATTRIBUTE_01Name == "已完成" ){
layer.alert('该清单已完成！' , {									    
							icon: 7,															
							area: ['400px', ''],												
							closeBtn: 0         												
						});
return;
}
}
$("#tableToolbarButton4ab40b85a0dc354465789283244958a78768").css("pointer-events","none")
var loading = top.layer.msg('努力加载中...', {
					icon: 16,
					shade: [0.3, '#000000'],
					scrollbar: false,
					time:2000})
$.ajax({																		
				url: 'avicit/pb/dyntaskchecklist/dynTaskChecklistController/orxiafa?ids='+bpmsDeleteRows,												
				type: 'GET',														
				dataType: 'JSON',																
				success: function(r) {
								$("#tableToolbarButton4ab40b85a0dc354465789283244958a78768").css("pointer-events","")						
					if (r.flag == 'success') {$('#table27dadc6724db894b7a08358c021c94d53c2f').trigger('reloadGrid');layer.msg('下发成功！');;} else {	
layer.msg('下发失败！' + r.error)																		
					}  																			
				}																				
			});});
$("#tableToolbarButton532448143573084fea6a75eca86386397c63").bind('click',function(event){exportWord();});
$("#tableToolbarButton2c250c1d4255b2464a58c10c84c0ddcd54f0").bind('click',function(event){var idDatas = $("#table27dadc6724db894b7a08358c021c94d53c2f").jqGrid('getGridParam', 'selarrrow');
if (idDatas == null || idDatas.length == 0) {
    flowUtils.warning("请选择要取回的记录")
    return;
}
if(idDatas .length>1){
    layer.alert('只能选择一条要取回的记录！', {
        icon : 7,
        area : [ '400px', '' ],
        closeBtn : 0
    });
    return;
}

flowUtils.confirm('您确认要取回已下发的任务吗？', function (index) {

    $.ajax({
        url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/bpmWithdraw",
        data:{formId:idDatas[0]},
        type: "post",
        dataType: "json",
        success:function(e){
            table27dadc6724db894b7a08358c021c94d53c2fReload();//从新加载列表
        }
    });

});});
$("#tableToolbarButton82b2be4a33e55441e0989fba86df73ec2e74").bind('click',function(event){var idDatas = $("#table27dadc6724db894b7a08358c021c94d53c2f").jqGrid('getGridParam', 'selarrrow');
if (idDatas == null || idDatas.length == 0) {
    flowUtils.warning("请选择要取消的任务记录")
    return;
}
if(idDatas .length>1){
    layer.alert('只能选择一条要取消的任务记录！', {
        icon : 7,
        area : [ '400px', '' ],
        closeBtn : 0
    });
    return;
}
var executionId= "";
for (var i = 0; i < idDatas.length; i++) {
    $.ajax({
        url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/getDbid/"+idDatas[i],
        async:false,
        type: "post",
        dataType: "json",
        success:function(e){executionId=e.result}
    })
}
flowUtils.confirm('您确认要取消该任务吗？', function (index) {
    $.ajax({
        url:"avicit/pb/dyntaskchecklist/dynTaskChecklistController/operation/save",
        data:{data: JSON.stringify({"attribute01":4,"id":idDatas[0]})},
        type:"POST",
    }) ;

    avicAjax.ajax({
        url: "bpm/monitor/doend",
        data: "executionId=" + executionId,
        type: "post",
        dataType: "json",
        success: function (backData) {
            if (backData != null && backData.success == true) {
                layer.msg('操作成功');
              
            } else {
                layer.msg('操作失败');
            }
        }
    });
    
    
    
});});
$("#tableToolbarButtonb2dfb968a8b85141f588d358787d0f924b9a").bind('click',function(event){updateForm();});
;});	 
