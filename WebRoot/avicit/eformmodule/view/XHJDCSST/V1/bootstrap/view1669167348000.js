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

function redraw40281181845b53840184a21d82bb0325(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#40281181845b53840184a21d82bb0325").width();
		var win_height = $("#40281181845b53840184a21d82bb0325").height();
		$('#40281181845b53840184a21d82bb0325').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#40281181845b53840184a21d82bb0325').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#40281181845b53840184a21d82bb0325").width();
	setTimeout(function(){redraw40281181845b53840184a21d82bb0325(win_width);},500);
});
var table8aca894f68271a4eb46a29f208af617545c9KeyWordIn = "";    
var table8aca894f68271a4eb46a29f208af617545c9ParamIn = "";    
var table8aca894f68271a4eb46a29f208af617545c9SelectRow = {     
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
var table8aca894f68271a4eb46a29f208af617545c9LoadComplete = {     
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
var table8aca894f68271a4eb46a29f208af617545c9BeforeEditCell = {        
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
var table8aca894f68271a4eb46a29f208af617545c9OndblClickRow = {     
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
var table8aca894f68271a4eb46a29f208af617545c9OnRightClickRow = {     
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
var table8aca894f68271a4eb46a29f208af617545c9GridComplete = {     
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
var table8aca894f68271a4eb46a29f208af617545c9OnCellSelect = {     
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
var table8aca894f68271a4eb46a29f208af617545c9LoadBeforeSend = {        
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
function table8aca894f68271a4eb46a29f208af617545c9Reload(pid){
	var _isInvalid = true;
	$("#table8aca894f68271a4eb46a29f208af617545c9").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8aca894f68271a4eb46a29f208af617545c9Pid = pid;
		}
		return false;
	}
	window.table8aca894f68271a4eb46a29f208af617545c9Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8aca894f68271a4eb46a29f208af617545c9').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table8aca894f68271a4eb46a29f208af617545c9Reload();
};
function table8aca894f68271a4eb46a29f208af617545c9TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8aca894f68271a4eb46a29f208af617545c9Pid == 'undefined' || window.table8aca894f68271a4eb46a29f208af617545c9Pid!=null){
table8aca894f68271a4eb46a29f208af617545c9Reload(window.table8aca894f68271a4eb46a29f208af617545c9Pid);
}
}
var tablecmtable8aca894f68271a4eb46a29f208af617545c9 = [];
var uniqueColtable8aca894f68271a4eb46a29f208af617545c9 = [];
var uniqueColTitletable8aca894f68271a4eb46a29f208af617545c9 = [];
var defaultValuetable8aca894f68271a4eb46a29f208af617545c9 = {};
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '字段_2',hidden:false, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable8aca894f68271a4eb46a29f208af617545c9.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});;$(document).ready(function(){ 

$("#table8aca894f68271a4eb46a29f208af617545c9").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/40281181845b53840184a21d82bb0325/table8aca894f68271a4eb46a29f208af617545c9/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8aca894f68271a4eb46a29f208af617545c9,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8aca894f68271a4eb46a29f208af617545c9SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8aca894f68271a4eb46a29f208af617545c9LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8aca894f68271a4eb46a29f208af617545c9OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8aca894f68271a4eb46a29f208af617545c9OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8aca894f68271a4eb46a29f208af617545c9GridComplete.exec();
				    setTimeout(function(){var height = $("#table8aca894f68271a4eb46a29f208af617545c9").closest('.ui-jqgrid-bdiv').height();
					$("#table8aca894f68271a4eb46a29f208af617545c9norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8aca894f68271a4eb46a29f208af617545c9norecords img").css("width","120px");
                 }else{
					    $("#table8aca894f68271a4eb46a29f208af617545c9norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8aca894f68271a4eb46a29f208af617545c9BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8aca894f68271a4eb46a29f208af617545c9OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8aca894f68271a4eb46a29f208af617545c9norecords").hide();
		   	    $("#Pagertable8aca894f68271a4eb46a29f208af617545c9_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8aca894f68271a4eb46a29f208af617545c9").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8aca894f68271a4eb46a29f208af617545c9").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8aca894f68271a4eb46a29f208af617545c9norecords").html() == null) {
						$("#table8aca894f68271a4eb46a29f208af617545c9").parent().append("<div class='no_data' id='table8aca894f68271a4eb46a29f208af617545c9norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8aca894f68271a4eb46a29f208af617545c9norecords").show();
					$("#Pagertable8aca894f68271a4eb46a29f208af617545c9_left").css("display", "none");
				}
table8aca894f68271a4eb46a29f208af617545c9LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8aca894f68271a4eb46a29f208af617545c9"
    });
table8aca894f68271a4eb46a29f208af617545c9Reload();
$("#t_table8aca894f68271a4eb46a29f208af617545c9").append($("#tableToolbartable8aca894f68271a4eb46a29f208af617545c9"));$("#tableToolbarButton76300afa0398704b3718109d36fad64018fa").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=40281181845b53840184a219b35e02f3&grid=table8aca894f68271a4eb46a29f208af617545c9'     
	});                                                                              
}                                                                                  
);
;});	 
