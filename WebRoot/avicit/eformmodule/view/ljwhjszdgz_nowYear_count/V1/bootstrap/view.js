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

function redraw948e83e3938bb70a01939485e8097996(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3938bb70a01939485e8097996").width();
		var win_height = $("#948e83e3938bb70a01939485e8097996").height();
		$('#948e83e3938bb70a01939485e8097996').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3938bb70a01939485e8097996').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3938bb70a01939485e8097996").width();
	setTimeout(function(){redraw948e83e3938bb70a01939485e8097996(win_width);},500);
});
var tablea7176ddefcb4544ee5e837dc7992477fa5c3KeyWordIn = "";    
var tablea7176ddefcb4544ee5e837dc7992477fa5c3ParamIn = "";    
var tablea7176ddefcb4544ee5e837dc7992477fa5c3SelectRow = {     
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3LoadComplete = {     
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3BeforeEditCell = {        
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3OndblClickRow = {     
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3OnRightClickRow = {     
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3GridComplete = {     
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3OnCellSelect = {     
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
var tablea7176ddefcb4544ee5e837dc7992477fa5c3LoadBeforeSend = {        
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
function tablea7176ddefcb4544ee5e837dc7992477fa5c3Reload(pid){
	var _isInvalid = true;
	$("#tablea7176ddefcb4544ee5e837dc7992477fa5c3").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablea7176ddefcb4544ee5e837dc7992477fa5c3Pid = pid;
		}
		return false;
	}
	window.tablea7176ddefcb4544ee5e837dc7992477fa5c3Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablea7176ddefcb4544ee5e837dc7992477fa5c3TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablea7176ddefcb4544ee5e837dc7992477fa5c3Pid == 'undefined' || window.tablea7176ddefcb4544ee5e837dc7992477fa5c3Pid!=null){
tablea7176ddefcb4544ee5e837dc7992477fa5c3Reload(window.tablea7176ddefcb4544ee5e837dc7992477fa5c3Pid);
}
}
var tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3 = [];
var uniqueColtablea7176ddefcb4544ee5e837dc7992477fa5c3 = [];
var uniqueColTitletablea7176ddefcb4544ee5e837dc7992477fa5c3 = [];
var defaultValuetablea7176ddefcb4544ee5e837dc7992477fa5c3 = {};
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '序号',hidden:false, name: 'DATA_ORDER',align:'center',  width: '50px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '工作分类',hidden:false, name: 'WORK_TYPE',align:'center',  width: '150px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '主要内容',hidden:false, name: 'MAIN_CONTENT',align:'left',  width: '200px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '内容分解',hidden:false, name: 'CONTENT_LIST',align:'left',  width: '400px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '一季度时间节点',hidden:false, name: 'ONE_QUARTER_DATA',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '一季度完成情况',hidden:true, name: 'ONE_QUARTER_STATUS',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '一季度完成情况',hidden:false, name: 'ONE_QUARTER_STATUSName',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '二季度时间节点',hidden:false, name: 'TWO_QUARTER_DATA',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '二季度完成情况',hidden:true, name: 'TWO_QUARTER_STATUS',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '二季度完成情况',hidden:false, name: 'TWO_QUARTER_STATUSName',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '三季度时间节点',hidden:false, name: 'THREE_QUARTER_DATA',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '三季度完成情况',hidden:true, name: 'THREE_QUARTER_STATUS',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '三季度完成情况',hidden:false, name: 'THREE_QUARTER_STATUSName',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '四季度时间节点',hidden:false, name: 'FOUR_QUARTER_DATA',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '四季度完成情况',hidden:true, name: 'FOUR_QUARTER_STATUS',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({ label: '四季度完成情况',hidden:false, name: 'FOUR_QUARTER_STATUSName',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: '备注',hidden:false, name: 'REMARK',align:'center',  width: '100px'});
tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3.push({label: 'IN_YEAR',hidden:true, name: 'IN_YEAR',align:'center',  width: '150px'});
;$(document).ready(function(){ 

tablea7176ddefcb4544ee5e837dc7992477fa5c3LoadComplete.addEvent(function(data){$('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').setCell('948e83e3938bb70a019390585d307387', 'WORK_TYPE', '', {display: 'none'});
debugger
var ts = $('#948e83e3938bb70a0193905a4d7e7406 td');
ts[3].attr('rowspan', 2);});
$("#tablea7176ddefcb4544ee5e837dc7992477fa5c3").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3938bb70a01939485e8097996/tablea7176ddefcb4544ee5e837dc7992477fa5c3/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        colModel: tablecmtablea7176ddefcb4544ee5e837dc7992477fa5c3,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 100	,
        rowList:[100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablea7176ddefcb4544ee5e837dc7992477fa5c3SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablea7176ddefcb4544ee5e837dc7992477fa5c3LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablea7176ddefcb4544ee5e837dc7992477fa5c3OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablea7176ddefcb4544ee5e837dc7992477fa5c3OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablea7176ddefcb4544ee5e837dc7992477fa5c3GridComplete.exec();
				    setTimeout(function(){var height = $("#tablea7176ddefcb4544ee5e837dc7992477fa5c3").closest('.ui-jqgrid-bdiv').height();
					$("#tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords img").css("width","120px");
                 }else{
					    $("#tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablea7176ddefcb4544ee5e837dc7992477fa5c3BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablea7176ddefcb4544ee5e837dc7992477fa5c3OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords").hide();
		   	    $("#Pagertablea7176ddefcb4544ee5e837dc7992477fa5c3_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablea7176ddefcb4544ee5e837dc7992477fa5c3").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablea7176ddefcb4544ee5e837dc7992477fa5c3").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords").html() == null) {
						$("#tablea7176ddefcb4544ee5e837dc7992477fa5c3").parent().append("<div class='no_data' id='tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablea7176ddefcb4544ee5e837dc7992477fa5c3norecords").show();
					$("#Pagertablea7176ddefcb4544ee5e837dc7992477fa5c3_left").css("display", "none");
				}
tablea7176ddefcb4544ee5e837dc7992477fa5c3LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablea7176ddefcb4544ee5e837dc7992477fa5c3"
    });
$('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').jqGrid('setGroupHeaders', {
		useColSpanStyle: true,
		groupHeaders: [
		{startColumnName:'ID', numberOfColumns:18, titleText: '年度廉洁文化建设重点工作'}
]});
tablea7176ddefcb4544ee5e837dc7992477fa5c3Reload();
;});	 
