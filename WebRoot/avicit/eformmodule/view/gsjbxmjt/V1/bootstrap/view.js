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

function redraw948e83e39319e8fe01934352e2d65116(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39319e8fe01934352e2d65116").width();
		var win_height = $("#948e83e39319e8fe01934352e2d65116").height();
		$('#948e83e39319e8fe01934352e2d65116').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39319e8fe01934352e2d65116').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39319e8fe01934352e2d65116").width();
	setTimeout(function(){redraw948e83e39319e8fe01934352e2d65116(win_width);},500);
});
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daKeyWordIn = "";    
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daParamIn = "";    
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daSelectRow = {     
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daLoadComplete = {     
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daBeforeEditCell = {        
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daOndblClickRow = {     
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daOnRightClickRow = {     
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daGridComplete = {     
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daOnCellSelect = {     
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
var table0b2edfcc9eb7f140dba98ef37b4c0f4471daLoadBeforeSend = {        
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
function table0b2edfcc9eb7f140dba98ef37b4c0f4471daReload(pid){
	var _isInvalid = true;
	$("#table0b2edfcc9eb7f140dba98ef37b4c0f4471da").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0b2edfcc9eb7f140dba98ef37b4c0f4471daPid = pid;
		}
		return false;
	}
	window.table0b2edfcc9eb7f140dba98ef37b4c0f4471daPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0b2edfcc9eb7f140dba98ef37b4c0f4471da').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table0b2edfcc9eb7f140dba98ef37b4c0f4471daReload();
};
function table0b2edfcc9eb7f140dba98ef37b4c0f4471daTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0b2edfcc9eb7f140dba98ef37b4c0f4471daPid == 'undefined' || window.table0b2edfcc9eb7f140dba98ef37b4c0f4471daPid!=null){
table0b2edfcc9eb7f140dba98ef37b4c0f4471daReload(window.table0b2edfcc9eb7f140dba98ef37b4c0f4471daPid);
}
}
var tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da = [];
var uniqueColtable0b2edfcc9eb7f140dba98ef37b4c0f4471da = [];
var uniqueColTitletable0b2edfcc9eb7f140dba98ef37b4c0f4471da = [];
var defaultValuetable0b2edfcc9eb7f140dba98ef37b4c0f4471da = {};
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '表单编号',hidden:false, name: 'BDBH',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '申请人',hidden:false, name: 'SQR',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '申请人所在党支部',hidden:false, name: 'SQRSZDZB',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '申请人电话',hidden:false, name: 'SQRDH',align:'right',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '承接课题名称',hidden:false, name: 'CJKTMC',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '项目级别',hidden:false, name: 'XMJB',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '质量攻关成效',hidden:false, name: 'ZLGGCX',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '党支部发挥作用情况',hidden:false, name: 'DZBFHZYQK',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '协同党支部',hidden:false, name: 'XTDZB',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '团队主要成员',hidden:false, name: 'TDZYCY',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '申请日期', formatter:format, hidden:false, name: 'SQRQ',align:'center',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '承接课题id',hidden:true, name: 'CJKTID',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '团队主要成员id',hidden:true, name: 'TDZYCYID',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '协同党支部id',hidden:true, name: 'XTDZBID',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});;$(document).ready(function(){ 

$("#table0b2edfcc9eb7f140dba98ef37b4c0f4471da").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39319e8fe01934352e2d65116/table0b2edfcc9eb7f140dba98ef37b4c0f4471da/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable0b2edfcc9eb7f140dba98ef37b4c0f4471da,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0b2edfcc9eb7f140dba98ef37b4c0f4471daSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0b2edfcc9eb7f140dba98ef37b4c0f4471daLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0b2edfcc9eb7f140dba98ef37b4c0f4471daOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0b2edfcc9eb7f140dba98ef37b4c0f4471daOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0b2edfcc9eb7f140dba98ef37b4c0f4471daGridComplete.exec();
				    setTimeout(function(){var height = $("#table0b2edfcc9eb7f140dba98ef37b4c0f4471da").closest('.ui-jqgrid-bdiv').height();
					$("#table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords img").css("width","120px");
                 }else{
					    $("#table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0b2edfcc9eb7f140dba98ef37b4c0f4471daBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0b2edfcc9eb7f140dba98ef37b4c0f4471daOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords").hide();
		   	    $("#Pagertable0b2edfcc9eb7f140dba98ef37b4c0f4471da_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0b2edfcc9eb7f140dba98ef37b4c0f4471da").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0b2edfcc9eb7f140dba98ef37b4c0f4471da").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords").html() == null) {
						$("#table0b2edfcc9eb7f140dba98ef37b4c0f4471da").parent().append("<div class='no_data' id='table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0b2edfcc9eb7f140dba98ef37b4c0f4471danorecords").show();
					$("#Pagertable0b2edfcc9eb7f140dba98ef37b4c0f4471da_left").css("display", "none");
				}
table0b2edfcc9eb7f140dba98ef37b4c0f4471daLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0b2edfcc9eb7f140dba98ef37b4c0f4471da"
    });
table0b2edfcc9eb7f140dba98ef37b4c0f4471daReload();
$("#t_table0b2edfcc9eb7f140dba98ef37b4c0f4471da").append($("#tableToolbartable0b2edfcc9eb7f140dba98ef37b4c0f4471da"));$("#tableToolbarButton2eff6a8ff27e1f46c0f855b669d9a1bbbd91").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39319e8fe0193433f77a54e38&grid=table0b2edfcc9eb7f140dba98ef37b4c0f4471da'     
	});                                                                              
}                                                                                  
);
;});	 
