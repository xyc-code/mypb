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

function redraw2c908c528ebccaa9018ebd1013820a38(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528ebccaa9018ebd1013820a38").width();
		var win_height = $("#2c908c528ebccaa9018ebd1013820a38").height();
		$('#2c908c528ebccaa9018ebd1013820a38').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528ebccaa9018ebd1013820a38').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528ebccaa9018ebd1013820a38").width();
	setTimeout(function(){redraw2c908c528ebccaa9018ebd1013820a38(win_width);},500);
});
var table826cd83633bbc24c489aa8012215dcc9bc65KeyWordIn = "";    
var table826cd83633bbc24c489aa8012215dcc9bc65ParamIn = "";    
var table826cd83633bbc24c489aa8012215dcc9bc65SelectRow = {     
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
var table826cd83633bbc24c489aa8012215dcc9bc65LoadComplete = {     
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
var table826cd83633bbc24c489aa8012215dcc9bc65BeforeEditCell = {        
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
var table826cd83633bbc24c489aa8012215dcc9bc65OndblClickRow = {     
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
var table826cd83633bbc24c489aa8012215dcc9bc65OnRightClickRow = {     
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
var table826cd83633bbc24c489aa8012215dcc9bc65GridComplete = {     
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
var table826cd83633bbc24c489aa8012215dcc9bc65OnCellSelect = {     
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
var table826cd83633bbc24c489aa8012215dcc9bc65LoadBeforeSend = {        
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
function table826cd83633bbc24c489aa8012215dcc9bc65Reload(pid){
	var _isInvalid = true;
	$("#table826cd83633bbc24c489aa8012215dcc9bc65").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table826cd83633bbc24c489aa8012215dcc9bc65Pid = pid;
		}
		return false;
	}
	window.table826cd83633bbc24c489aa8012215dcc9bc65Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.params.userId=pageParams.urlParam.userId;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table826cd83633bbc24c489aa8012215dcc9bc65').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table826cd83633bbc24c489aa8012215dcc9bc65TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table826cd83633bbc24c489aa8012215dcc9bc65Pid == 'undefined' || window.table826cd83633bbc24c489aa8012215dcc9bc65Pid!=null){
table826cd83633bbc24c489aa8012215dcc9bc65Reload(window.table826cd83633bbc24c489aa8012215dcc9bc65Pid);
}
}
var tablecmtable826cd83633bbc24c489aa8012215dcc9bc65 = [];
var uniqueColtable826cd83633bbc24c489aa8012215dcc9bc65 = [];
var uniqueColTitletable826cd83633bbc24c489aa8012215dcc9bc65 = [];
var defaultValuetable826cd83633bbc24c489aa8012215dcc9bc65 = {};
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '工会审批编号',hidden:false, name: 'TRADE_NO',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '填报日期', formatter:format, hidden:false, name: 'REQUEST_DATE',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '经办人',hidden:false, name: 'REQUEST_NAME',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '经办联系电话',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '经办单位',hidden:true, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '人员类别',hidden:true, name: 'WORKER_TYPE',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '人员类别',hidden:false, name: 'WORKER_TYPEName',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '职工姓名',hidden:false, name: 'WORKER_NAME',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '职工姓别',hidden:true, name: 'WORKER_SEX',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '年龄',hidden:true, name: 'WORKER_AGE',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '工作岗位及职务',hidden:false, name: 'WORKER_POST',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '住院地点',hidden:false, name: 'IN_HSP_PLACE',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '住院时间', formatter:format, hidden:false, name: 'IN_HSP_DATE',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '住院原因',hidden:false, name: 'IN_HSP_REASON',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '单位鉴定',hidden:false, name: 'UNIT_JD',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '与职工关系',hidden:true, name: 'WORKER_RELATION',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '与职工关系',hidden:false, name: 'WORKER_RELATIONName',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '慰问种类',hidden:true, name: 'SALUTE_TYPE',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '慰问种类',hidden:false, name: 'SALUTE_TYPEName',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '参加慰问人员',hidden:true, name: 'SALUTE_PEOPLE',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({ label: '参加慰问人员',hidden:true, name: 'SALUTE_PEOPLEName',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '慰问时间', formatter:format, hidden:true, name: 'SALUTE_DATE',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '慰问原因',hidden:true, name: 'SALUTE_REASON_EXT',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '申请拨付慰问金人民币',hidden:false, name: 'SALUTE_MONEY',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '职工id',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '字段_2',hidden:true, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '工会id',hidden:true, name: 'GUILD_ID',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '工会名称',hidden:true, name: 'GUILD_NAME',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '部门id',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtable826cd83633bbc24c489aa8012215dcc9bc65.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
filterParams.params={};
filterParams.params.userId=pageParams.urlParam.userId;
;$(document).ready(function(){ 

$("#table826cd83633bbc24c489aa8012215dcc9bc65").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528ebccaa9018ebd1013820a38/table826cd83633bbc24c489aa8012215dcc9bc65/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable826cd83633bbc24c489aa8012215dcc9bc65,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table826cd83633bbc24c489aa8012215dcc9bc65SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table826cd83633bbc24c489aa8012215dcc9bc65LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table826cd83633bbc24c489aa8012215dcc9bc65OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table826cd83633bbc24c489aa8012215dcc9bc65OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table826cd83633bbc24c489aa8012215dcc9bc65GridComplete.exec();
				    setTimeout(function(){var height = $("#table826cd83633bbc24c489aa8012215dcc9bc65").closest('.ui-jqgrid-bdiv').height();
					$("#table826cd83633bbc24c489aa8012215dcc9bc65norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table826cd83633bbc24c489aa8012215dcc9bc65norecords img").css("width","120px");
                 }else{
					    $("#table826cd83633bbc24c489aa8012215dcc9bc65norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table826cd83633bbc24c489aa8012215dcc9bc65BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table826cd83633bbc24c489aa8012215dcc9bc65OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table826cd83633bbc24c489aa8012215dcc9bc65norecords").hide();
		   	    $("#Pagertable826cd83633bbc24c489aa8012215dcc9bc65_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table826cd83633bbc24c489aa8012215dcc9bc65").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table826cd83633bbc24c489aa8012215dcc9bc65").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table826cd83633bbc24c489aa8012215dcc9bc65norecords").html() == null) {
						$("#table826cd83633bbc24c489aa8012215dcc9bc65").parent().append("<div class='no_data' id='table826cd83633bbc24c489aa8012215dcc9bc65norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table826cd83633bbc24c489aa8012215dcc9bc65norecords").show();
					$("#Pagertable826cd83633bbc24c489aa8012215dcc9bc65_left").css("display", "none");
				}
table826cd83633bbc24c489aa8012215dcc9bc65LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable826cd83633bbc24c489aa8012215dcc9bc65"
    });
table826cd83633bbc24c489aa8012215dcc9bc65Reload();
$("#t_table826cd83633bbc24c489aa8012215dcc9bc65").append($("#tableToolbartable826cd83633bbc24c489aa8012215dcc9bc65"));;});	 
