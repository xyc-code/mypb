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

function redraw948e83e38929709c018995058b8b6024(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38929709c018995058b8b6024").width();
		var win_height = $("#948e83e38929709c018995058b8b6024").height();
		$('#948e83e38929709c018995058b8b6024').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38929709c018995058b8b6024').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38929709c018995058b8b6024").width();
	setTimeout(function(){redraw948e83e38929709c018995058b8b6024(win_width);},500);
});
var table4b0c238251416d43d1ba163b18ec3415d38bKeyWordIn = "";    
var table4b0c238251416d43d1ba163b18ec3415d38bParamIn = "";    
var table4b0c238251416d43d1ba163b18ec3415d38bSelectRow = {     
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
var table4b0c238251416d43d1ba163b18ec3415d38bLoadComplete = {     
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
var table4b0c238251416d43d1ba163b18ec3415d38bBeforeEditCell = {        
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
var table4b0c238251416d43d1ba163b18ec3415d38bOndblClickRow = {     
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
var table4b0c238251416d43d1ba163b18ec3415d38bOnRightClickRow = {     
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
var table4b0c238251416d43d1ba163b18ec3415d38bGridComplete = {     
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
var table4b0c238251416d43d1ba163b18ec3415d38bOnCellSelect = {     
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
var table4b0c238251416d43d1ba163b18ec3415d38bLoadBeforeSend = {        
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
function table4b0c238251416d43d1ba163b18ec3415d38bReload(pid){
	var _isInvalid = true;
	$("#table4b0c238251416d43d1ba163b18ec3415d38b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table4b0c238251416d43d1ba163b18ec3415d38bPid = pid;
		}
		return false;
	}
	window.table4b0c238251416d43d1ba163b18ec3415d38bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table4b0c238251416d43d1ba163b18ec3415d38b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table4b0c238251416d43d1ba163b18ec3415d38bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table4b0c238251416d43d1ba163b18ec3415d38bPid == 'undefined' || window.table4b0c238251416d43d1ba163b18ec3415d38bPid!=null){
table4b0c238251416d43d1ba163b18ec3415d38bReload(window.table4b0c238251416d43d1ba163b18ec3415d38bPid);
}
}
var tablecmtable4b0c238251416d43d1ba163b18ec3415d38b = [];
var uniqueColtable4b0c238251416d43d1ba163b18ec3415d38b = [];
var uniqueColTitletable4b0c238251416d43d1ba163b18ec3415d38b = [];
var defaultValuetable4b0c238251416d43d1ba163b18ec3415d38b = {};
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({ label: '姓名',hidden:false, name: 'USER_IDName',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '身份证号',hidden:false, name: 'IDCARD',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({ label: '性别',hidden:true, name: 'SEX',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({ label: '性别',hidden:false, name: 'SEXName',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '党支部名称',hidden:false, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR14',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR15',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR16',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR17',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '预备字段',hidden:true, name: 'ATTR18',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '一季度履职分',hidden:false, name: 'ONE_PERSONAL',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '四季度惩处减分',hidden:false, name: 'FOUR_PUNISH',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '一季度奖励加分',hidden:false, name: 'ONE_REWARD',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '一季度惩处减分',hidden:false, name: 'ONE_PUNISH',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '二季度基础分扣分',hidden:false, name: 'TWO_FOUNDATIONS',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '二季度履职分',hidden:false, name: 'TWO_PERSONAL',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '二季度奖励加分',hidden:false, name: 'TWO_REWARD',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '二季度惩处减分',hidden:false, name: 'TWO_PUNISH',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '三季度基础分扣分',hidden:false, name: 'THREE_FOUNDATIONS',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '三季度履职分',hidden:false, name: 'THREE_PERSONAL',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '三季度奖励加分',hidden:false, name: 'THREE_REWARD',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '三季度惩处减分',hidden:false, name: 'THREE_PUNISH',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '四季度基础分扣分',hidden:false, name: 'FOUR_FOUNDATIONS',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '四季度履职分',hidden:false, name: 'FOUR_PERSONAL',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '四季度奖励加分',hidden:false, name: 'FOUR_REWARD',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '一季度基础分扣分',hidden:false, name: 'ONE_FOUNDATIONS',align:'right',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable4b0c238251416d43d1ba163b18ec3415d38b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable4b0c238251416d43d1ba163b18ec3415d38b = []; 
searchNamestable4b0c238251416d43d1ba163b18ec3415d38b.push('USER_ID');
$('#keyWordtable4b0c238251416d43d1ba163b18ec3415d38b').attr('placeholder', '请输入用户id查询');
function searchDataKeyWordtable4b0c238251416d43d1ba163b18ec3415d38b(){
	var keyWord = $.trim($("#keyWordtable4b0c238251416d43d1ba163b18ec3415d38b").val()); 
 if($('#keyWordtable4b0c238251416d43d1ba163b18ec3415d38b').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable4b0c238251416d43d1ba163b18ec3415d38b.length;i++){ 
		var name = searchNamestable4b0c238251416d43d1ba163b18ec3415d38b[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table4b0c238251416d43d1ba163b18ec3415d38bKeyWordIn=JSON.stringify(param);
table4b0c238251416d43d1ba163b18ec3415d38bParamIn="";
	$('#table4b0c238251416d43d1ba163b18ec3415d38b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable4b0c238251416d43d1ba163b18ec3415d38b').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable4b0c238251416d43d1ba163b18ec3415d38b();
	}
});
$('#keyWordBttable4b0c238251416d43d1ba163b18ec3415d38b').bind('click', function() {
		searchDataKeyWordtable4b0c238251416d43d1ba163b18ec3415d38b();
});
;$(document).ready(function(){ 

$("#table4b0c238251416d43d1ba163b18ec3415d38b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38929709c018995058b8b6024/table4b0c238251416d43d1ba163b18ec3415d38b/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable4b0c238251416d43d1ba163b18ec3415d38b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table4b0c238251416d43d1ba163b18ec3415d38bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table4b0c238251416d43d1ba163b18ec3415d38bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table4b0c238251416d43d1ba163b18ec3415d38bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table4b0c238251416d43d1ba163b18ec3415d38bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table4b0c238251416d43d1ba163b18ec3415d38bGridComplete.exec();
				    setTimeout(function(){var height = $("#table4b0c238251416d43d1ba163b18ec3415d38b").closest('.ui-jqgrid-bdiv').height();
					$("#table4b0c238251416d43d1ba163b18ec3415d38bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table4b0c238251416d43d1ba163b18ec3415d38bnorecords img").css("width","120px");
                 }else{
					    $("#table4b0c238251416d43d1ba163b18ec3415d38bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table4b0c238251416d43d1ba163b18ec3415d38bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table4b0c238251416d43d1ba163b18ec3415d38bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table4b0c238251416d43d1ba163b18ec3415d38bnorecords").hide();
		   	    $("#Pagertable4b0c238251416d43d1ba163b18ec3415d38b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table4b0c238251416d43d1ba163b18ec3415d38b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table4b0c238251416d43d1ba163b18ec3415d38b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table4b0c238251416d43d1ba163b18ec3415d38bnorecords").html() == null) {
						$("#table4b0c238251416d43d1ba163b18ec3415d38b").parent().append("<div class='no_data' id='table4b0c238251416d43d1ba163b18ec3415d38bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table4b0c238251416d43d1ba163b18ec3415d38bnorecords").show();
					$("#Pagertable4b0c238251416d43d1ba163b18ec3415d38b_left").css("display", "none");
				}
table4b0c238251416d43d1ba163b18ec3415d38bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable4b0c238251416d43d1ba163b18ec3415d38b"
    });
table4b0c238251416d43d1ba163b18ec3415d38bReload();
$("#t_table4b0c238251416d43d1ba163b18ec3415d38b").append($("#tableToolbartable4b0c238251416d43d1ba163b18ec3415d38b"));function searchDatatable4b0c238251416d43d1ba163b18ec3415d38b(){
 var para = serializeObjectForEform($("#searchformtable4b0c238251416d43d1ba163b18ec3415d38b"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table4b0c238251416d43d1ba163b18ec3415d38bKeyWordIn="";
table4b0c238251416d43d1ba163b18ec3415d38bParamIn=JSON.stringify(para);
	$('#table4b0c238251416d43d1ba163b18ec3415d38b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable4b0c238251416d43d1ba163b18ec3415d38b").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable4b0c238251416d43d1ba163b18ec3415d38b').bind('click',function(){
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
	content: $('#searchDialogtable4b0c238251416d43d1ba163b18ec3415d38b'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable4b0c238251416d43d1ba163b18ec3415d38b(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable4b0c238251416d43d1ba163b18ec3415d38b")); searchDatatable4b0c238251416d43d1ba163b18ec3415d38b(); layer.close(index); return false;
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
$('#PARTY_IDName').on('click',function(e){
  openCustomDialogLayer('PARTY_ID', 'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',function callBack(retData){},'','','');
 });
;});	 
