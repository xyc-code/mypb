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

function redraw948e83e38e120a84018e12ce70ef18ff(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38e120a84018e12ce70ef18ff").width();
		var win_height = $("#948e83e38e120a84018e12ce70ef18ff").height();
		$('#948e83e38e120a84018e12ce70ef18ff').layout('panel', 'north').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38e120a84018e12ce70ef18ff').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*0.5});
		$('#948e83e38e120a84018e12ce70ef18ff').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38e120a84018e12ce70ef18ff").width();
	setTimeout(function(){redraw948e83e38e120a84018e12ce70ef18ff(win_width);},500);
});
var table828032850fb66c4a71fb16dfeadc8df13c6dKeyWordIn = "";    
var table828032850fb66c4a71fb16dfeadc8df13c6dParamIn = "";    
var table828032850fb66c4a71fb16dfeadc8df13c6dSelectRow = {     
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
var table828032850fb66c4a71fb16dfeadc8df13c6dLoadComplete = {     
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
var table828032850fb66c4a71fb16dfeadc8df13c6dBeforeEditCell = {        
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
var table828032850fb66c4a71fb16dfeadc8df13c6dOndblClickRow = {     
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
var table828032850fb66c4a71fb16dfeadc8df13c6dOnRightClickRow = {     
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
var table828032850fb66c4a71fb16dfeadc8df13c6dGridComplete = {     
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
var table828032850fb66c4a71fb16dfeadc8df13c6dOnCellSelect = {     
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
var table828032850fb66c4a71fb16dfeadc8df13c6dLoadBeforeSend = {        
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
function table828032850fb66c4a71fb16dfeadc8df13c6dReload(pid){
	var _isInvalid = true;
	$("#table828032850fb66c4a71fb16dfeadc8df13c6d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table828032850fb66c4a71fb16dfeadc8df13c6dPid = pid;
		}
		return false;
	}
	window.table828032850fb66c4a71fb16dfeadc8df13c6dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table828032850fb66c4a71fb16dfeadc8df13c6d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table828032850fb66c4a71fb16dfeadc8df13c6dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table828032850fb66c4a71fb16dfeadc8df13c6dPid == 'undefined' || window.table828032850fb66c4a71fb16dfeadc8df13c6dPid!=null){
table828032850fb66c4a71fb16dfeadc8df13c6dReload(window.table828032850fb66c4a71fb16dfeadc8df13c6dPid);
}
}
var tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d = [];
var uniqueColtable828032850fb66c4a71fb16dfeadc8df13c6d = [];
var uniqueColTitletable828032850fb66c4a71fb16dfeadc8df13c6d = [];
var defaultValuetable828032850fb66c4a71fb16dfeadc8df13c6d = {};
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'center',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '姓名',hidden:false, name: 'USER_IDName',align:'center',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '部门',hidden:true, name: 'DEPT_ID',align:'center',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '部门',hidden:false, name: 'DEPT_IDName',align:'center',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({label: '党支部名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '类别',hidden:true, name: 'PARTY_TYPE',align:'center',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '类别',hidden:false, name: 'PARTY_TYPEName',align:'center',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '党支部职务',hidden:true, name: 'BRANCH_POST',align:'left',  width: '150px'});
tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d.push({ label: '党支部职务',hidden:false, name: 'BRANCH_POSTName',align:'left',  width: '150px'});
	var searchNamestable828032850fb66c4a71fb16dfeadc8df13c6d = []; 
searchNamestable828032850fb66c4a71fb16dfeadc8df13c6d.push('USER_ID');
$('#keyWordtable828032850fb66c4a71fb16dfeadc8df13c6d').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtable828032850fb66c4a71fb16dfeadc8df13c6d(){
	var keyWord = $.trim($("#keyWordtable828032850fb66c4a71fb16dfeadc8df13c6d").val()); 
 if($('#keyWordtable828032850fb66c4a71fb16dfeadc8df13c6d').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable828032850fb66c4a71fb16dfeadc8df13c6d.length;i++){ 
		var name = searchNamestable828032850fb66c4a71fb16dfeadc8df13c6d[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table828032850fb66c4a71fb16dfeadc8df13c6dKeyWordIn=JSON.stringify(param);
table828032850fb66c4a71fb16dfeadc8df13c6dParamIn="";
	$('#table828032850fb66c4a71fb16dfeadc8df13c6d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable828032850fb66c4a71fb16dfeadc8df13c6d').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable828032850fb66c4a71fb16dfeadc8df13c6d();
	}
});
$('#keyWordBttable828032850fb66c4a71fb16dfeadc8df13c6d').bind('click', function() {
		searchDataKeyWordtable828032850fb66c4a71fb16dfeadc8df13c6d();
});
var table443c278b13cade4b7ee890434193440dd017KeyWordIn = "";    
var table443c278b13cade4b7ee890434193440dd017ParamIn = "";    
var table443c278b13cade4b7ee890434193440dd017SelectRow = {     
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
var table443c278b13cade4b7ee890434193440dd017LoadComplete = {     
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
var table443c278b13cade4b7ee890434193440dd017BeforeEditCell = {        
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
var table443c278b13cade4b7ee890434193440dd017OndblClickRow = {     
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
var table443c278b13cade4b7ee890434193440dd017OnRightClickRow = {     
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
var table443c278b13cade4b7ee890434193440dd017GridComplete = {     
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
var table443c278b13cade4b7ee890434193440dd017OnCellSelect = {     
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
var table443c278b13cade4b7ee890434193440dd017LoadBeforeSend = {        
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
function table443c278b13cade4b7ee890434193440dd017Reload(pid){
	var _isInvalid = true;
	$("#table443c278b13cade4b7ee890434193440dd017").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table443c278b13cade4b7ee890434193440dd017Pid = pid;
		}
		return false;
	}
	window.table443c278b13cade4b7ee890434193440dd017Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table443c278b13cade4b7ee890434193440dd017').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table443c278b13cade4b7ee890434193440dd017TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table443c278b13cade4b7ee890434193440dd017Pid == 'undefined' || window.table443c278b13cade4b7ee890434193440dd017Pid!=null){
table443c278b13cade4b7ee890434193440dd017Reload(window.table443c278b13cade4b7ee890434193440dd017Pid);
}
}
var tablecmtable443c278b13cade4b7ee890434193440dd017 = [];
var uniqueColtable443c278b13cade4b7ee890434193440dd017 = [];
var uniqueColTitletable443c278b13cade4b7ee890434193440dd017 = [];
var defaultValuetable443c278b13cade4b7ee890434193440dd017 = {};
tablecmtable443c278b13cade4b7ee890434193440dd017.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({ label: '姓名',hidden:false, name: 'USER_IDName',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({ label: '部门',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({ label: '部门',hidden:false, name: 'DEPT_IDName',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({label: '党支部名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({ label: '类别',hidden:true, name: 'ACTIVIST_TYPE',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({ label: '类别',hidden:false, name: 'ACTIVIST_TYPEName',align:'left',  width: '150px'});
tablecmtable443c278b13cade4b7ee890434193440dd017.push({label: '职务',hidden:false, name: 'POST',align:'left',  width: '150px'});
	var searchNamestable443c278b13cade4b7ee890434193440dd017 = []; 
searchNamestable443c278b13cade4b7ee890434193440dd017.push('tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2');
$('#keyWordtable443c278b13cade4b7ee890434193440dd017').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtable443c278b13cade4b7ee890434193440dd017(){
	var keyWord = $.trim($("#keyWordtable443c278b13cade4b7ee890434193440dd017").val()); 
 if($('#keyWordtable443c278b13cade4b7ee890434193440dd017').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable443c278b13cade4b7ee890434193440dd017.length;i++){ 
		var name = searchNamestable443c278b13cade4b7ee890434193440dd017[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table443c278b13cade4b7ee890434193440dd017KeyWordIn=JSON.stringify(param);
table443c278b13cade4b7ee890434193440dd017ParamIn="";
	$('#table443c278b13cade4b7ee890434193440dd017').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable443c278b13cade4b7ee890434193440dd017').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable443c278b13cade4b7ee890434193440dd017();
	}
});
$('#keyWordBttable443c278b13cade4b7ee890434193440dd017').bind('click', function() {
		searchDataKeyWordtable443c278b13cade4b7ee890434193440dd017();
});
;$(document).ready(function(){ 

$("#table828032850fb66c4a71fb16dfeadc8df13c6d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38e120a84018e12ce70ef18ff/table828032850fb66c4a71fb16dfeadc8df13c6d/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable828032850fb66c4a71fb16dfeadc8df13c6d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 50	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table828032850fb66c4a71fb16dfeadc8df13c6dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table828032850fb66c4a71fb16dfeadc8df13c6dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table828032850fb66c4a71fb16dfeadc8df13c6dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table828032850fb66c4a71fb16dfeadc8df13c6dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table828032850fb66c4a71fb16dfeadc8df13c6dGridComplete.exec();
				    setTimeout(function(){var height = $("#table828032850fb66c4a71fb16dfeadc8df13c6d").closest('.ui-jqgrid-bdiv').height();
					$("#table828032850fb66c4a71fb16dfeadc8df13c6dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table828032850fb66c4a71fb16dfeadc8df13c6dnorecords img").css("width","120px");
                 }else{
					    $("#table828032850fb66c4a71fb16dfeadc8df13c6dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table828032850fb66c4a71fb16dfeadc8df13c6dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table828032850fb66c4a71fb16dfeadc8df13c6dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table828032850fb66c4a71fb16dfeadc8df13c6dnorecords").hide();
		   	    $("#Pagertable828032850fb66c4a71fb16dfeadc8df13c6d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table828032850fb66c4a71fb16dfeadc8df13c6d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table828032850fb66c4a71fb16dfeadc8df13c6d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table828032850fb66c4a71fb16dfeadc8df13c6dnorecords").html() == null) {
						$("#table828032850fb66c4a71fb16dfeadc8df13c6d").parent().append("<div class='no_data' id='table828032850fb66c4a71fb16dfeadc8df13c6dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table828032850fb66c4a71fb16dfeadc8df13c6dnorecords").show();
					$("#Pagertable828032850fb66c4a71fb16dfeadc8df13c6d_left").css("display", "none");
				}
table828032850fb66c4a71fb16dfeadc8df13c6dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: true,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable828032850fb66c4a71fb16dfeadc8df13c6d"
    });
table828032850fb66c4a71fb16dfeadc8df13c6dReload();
$("#t_table828032850fb66c4a71fb16dfeadc8df13c6d").append($("#tableToolbartable828032850fb66c4a71fb16dfeadc8df13c6d"));function searchDatatable828032850fb66c4a71fb16dfeadc8df13c6d(){
 var para = serializeObjectForEform($("#searchformtable828032850fb66c4a71fb16dfeadc8df13c6d"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table828032850fb66c4a71fb16dfeadc8df13c6dKeyWordIn="";
table828032850fb66c4a71fb16dfeadc8df13c6dParamIn=JSON.stringify(para);
	$('#table828032850fb66c4a71fb16dfeadc8df13c6d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable828032850fb66c4a71fb16dfeadc8df13c6d").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable828032850fb66c4a71fb16dfeadc8df13c6d').bind('click',function(){
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
	content: $('#searchDialogtable828032850fb66c4a71fb16dfeadc8df13c6d'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable828032850fb66c4a71fb16dfeadc8df13c6d(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable828032850fb66c4a71fb16dfeadc8df13c6d")); searchDatatable828032850fb66c4a71fb16dfeadc8df13c6d(); layer.close(index); return false;
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
$('#DEPT_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_ID',textFiled:'DEPT_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$("#table443c278b13cade4b7ee890434193440dd017").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38e120a84018e12ce70ef18ff/table443c278b13cade4b7ee890434193440dd017/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable443c278b13cade4b7ee890434193440dd017,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 50	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table443c278b13cade4b7ee890434193440dd017SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table443c278b13cade4b7ee890434193440dd017LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table443c278b13cade4b7ee890434193440dd017OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table443c278b13cade4b7ee890434193440dd017OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table443c278b13cade4b7ee890434193440dd017GridComplete.exec();
				    setTimeout(function(){var height = $("#table443c278b13cade4b7ee890434193440dd017").closest('.ui-jqgrid-bdiv').height();
					$("#table443c278b13cade4b7ee890434193440dd017norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table443c278b13cade4b7ee890434193440dd017norecords img").css("width","120px");
                 }else{
					    $("#table443c278b13cade4b7ee890434193440dd017norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table443c278b13cade4b7ee890434193440dd017BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table443c278b13cade4b7ee890434193440dd017OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table443c278b13cade4b7ee890434193440dd017norecords").hide();
		   	    $("#Pagertable443c278b13cade4b7ee890434193440dd017_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table443c278b13cade4b7ee890434193440dd017").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table443c278b13cade4b7ee890434193440dd017").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table443c278b13cade4b7ee890434193440dd017norecords").html() == null) {
						$("#table443c278b13cade4b7ee890434193440dd017").parent().append("<div class='no_data' id='table443c278b13cade4b7ee890434193440dd017norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table443c278b13cade4b7ee890434193440dd017norecords").show();
					$("#Pagertable443c278b13cade4b7ee890434193440dd017_left").css("display", "none");
				}
table443c278b13cade4b7ee890434193440dd017LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable443c278b13cade4b7ee890434193440dd017"
    });
table443c278b13cade4b7ee890434193440dd017Reload();
$("#t_table443c278b13cade4b7ee890434193440dd017").append($("#tableToolbartable443c278b13cade4b7ee890434193440dd017"));function searchDatatable443c278b13cade4b7ee890434193440dd017(){
 var para = serializeObjectForEform($("#searchformtable443c278b13cade4b7ee890434193440dd017"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table443c278b13cade4b7ee890434193440dd017KeyWordIn="";
table443c278b13cade4b7ee890434193440dd017ParamIn=JSON.stringify(para);
	$('#table443c278b13cade4b7ee890434193440dd017').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable443c278b13cade4b7ee890434193440dd017").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable443c278b13cade4b7ee890434193440dd017').bind('click',function(){
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
	content: $('#searchDialogtable443c278b13cade4b7ee890434193440dd017'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable443c278b13cade4b7ee890434193440dd017(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable443c278b13cade4b7ee890434193440dd017")); searchDatatable443c278b13cade4b7ee890434193440dd017(); layer.close(index); return false;
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
$('#tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2Alias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2',textFiled:'tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2Alias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#tableColumn317ed4d51a52a14a1ada61a706d35951f151Alias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'tableColumn317ed4d51a52a14a1ada61a706d35951f151',textFiled:'tableColumn317ed4d51a52a14a1ada61a706d35951f151Alias',viewScope:'currentOrg',selectModel:'multi'});
}); 
;});	 
