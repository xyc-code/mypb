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

function redraw2c908c5290b915650190b93d952d2166(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5290b915650190b93d952d2166").width();
		var win_height = $("#2c908c5290b915650190b93d952d2166").height();
		$('#2c908c5290b915650190b93d952d2166').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5290b915650190b93d952d2166').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5290b915650190b93d952d2166").width();
	setTimeout(function(){redraw2c908c5290b915650190b93d952d2166(win_width);},500);
});
var table41b0c5ac71254d49ab38c295ce15c7971002KeyWordIn = "";    
var table41b0c5ac71254d49ab38c295ce15c7971002ParamIn = "";    
var table41b0c5ac71254d49ab38c295ce15c7971002SelectRow = {     
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
var table41b0c5ac71254d49ab38c295ce15c7971002LoadComplete = {     
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
var table41b0c5ac71254d49ab38c295ce15c7971002BeforeEditCell = {        
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
var table41b0c5ac71254d49ab38c295ce15c7971002OndblClickRow = {     
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
var table41b0c5ac71254d49ab38c295ce15c7971002OnRightClickRow = {     
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
var table41b0c5ac71254d49ab38c295ce15c7971002GridComplete = {     
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
var table41b0c5ac71254d49ab38c295ce15c7971002OnCellSelect = {     
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
var table41b0c5ac71254d49ab38c295ce15c7971002LoadBeforeSend = {        
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
function table41b0c5ac71254d49ab38c295ce15c7971002Reload(pid){
	var _isInvalid = true;
	$("#table41b0c5ac71254d49ab38c295ce15c7971002").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table41b0c5ac71254d49ab38c295ce15c7971002Pid = pid;
		}
		return false;
	}
	window.table41b0c5ac71254d49ab38c295ce15c7971002Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.params.fk_id=pageParams.urlParam.id;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table41b0c5ac71254d49ab38c295ce15c7971002').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table41b0c5ac71254d49ab38c295ce15c7971002TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table41b0c5ac71254d49ab38c295ce15c7971002Pid == 'undefined' || window.table41b0c5ac71254d49ab38c295ce15c7971002Pid!=null){
table41b0c5ac71254d49ab38c295ce15c7971002Reload(window.table41b0c5ac71254d49ab38c295ce15c7971002Pid);
}
}
var tablecmtable41b0c5ac71254d49ab38c295ce15c7971002 = [];
var uniqueColtable41b0c5ac71254d49ab38c295ce15c7971002 = [];
var uniqueColTitletable41b0c5ac71254d49ab38c295ce15c7971002 = [];
var defaultValuetable41b0c5ac71254d49ab38c295ce15c7971002 = {};
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '信息去向',hidden:false, name: 'XXQX',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '标题',hidden:false, name: 'TITLE',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '外键',hidden:true, name: 'FK_SUB_COL_ID',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable41b0c5ac71254d49ab38c295ce15c7971002.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
filterParams.params={};
filterParams.params.fk_id=pageParams.urlParam.id;
;$(document).ready(function(){ 

$("#table41b0c5ac71254d49ab38c295ce15c7971002").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b915650190b93d952d2166/table41b0c5ac71254d49ab38c295ce15c7971002/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable41b0c5ac71254d49ab38c295ce15c7971002,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table41b0c5ac71254d49ab38c295ce15c7971002SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table41b0c5ac71254d49ab38c295ce15c7971002LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table41b0c5ac71254d49ab38c295ce15c7971002OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table41b0c5ac71254d49ab38c295ce15c7971002OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table41b0c5ac71254d49ab38c295ce15c7971002GridComplete.exec();
				    setTimeout(function(){var height = $("#table41b0c5ac71254d49ab38c295ce15c7971002").closest('.ui-jqgrid-bdiv').height();
					$("#table41b0c5ac71254d49ab38c295ce15c7971002norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table41b0c5ac71254d49ab38c295ce15c7971002norecords img").css("width","120px");
                 }else{
					    $("#table41b0c5ac71254d49ab38c295ce15c7971002norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table41b0c5ac71254d49ab38c295ce15c7971002BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table41b0c5ac71254d49ab38c295ce15c7971002OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table41b0c5ac71254d49ab38c295ce15c7971002norecords").hide();
		   	    $("#Pagertable41b0c5ac71254d49ab38c295ce15c7971002_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table41b0c5ac71254d49ab38c295ce15c7971002").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table41b0c5ac71254d49ab38c295ce15c7971002").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table41b0c5ac71254d49ab38c295ce15c7971002norecords").html() == null) {
						$("#table41b0c5ac71254d49ab38c295ce15c7971002").parent().append("<div class='no_data' id='table41b0c5ac71254d49ab38c295ce15c7971002norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table41b0c5ac71254d49ab38c295ce15c7971002norecords").show();
					$("#Pagertable41b0c5ac71254d49ab38c295ce15c7971002_left").css("display", "none");
				}
table41b0c5ac71254d49ab38c295ce15c7971002LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable41b0c5ac71254d49ab38c295ce15c7971002"
    });
table41b0c5ac71254d49ab38c295ce15c7971002Reload();
$("#t_table41b0c5ac71254d49ab38c295ce15c7971002").append($("#tableToolbartable41b0c5ac71254d49ab38c295ce15c7971002"));;});	 
