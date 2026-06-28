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

function redraw948e83e381eaacfc01820fdd7c010f4f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e381eaacfc01820fdd7c010f4f").width();
		var win_height = $("#948e83e381eaacfc01820fdd7c010f4f").height();
		$('#948e83e381eaacfc01820fdd7c010f4f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e381eaacfc01820fdd7c010f4f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e381eaacfc01820fdd7c010f4f").width();
	setTimeout(function(){redraw948e83e381eaacfc01820fdd7c010f4f(win_width);},500);
});
var tableb06e704b67ff874d17190eedf7c930f9430cKeyWordIn = "";    
var tableb06e704b67ff874d17190eedf7c930f9430cParamIn = "";    
var tableb06e704b67ff874d17190eedf7c930f9430cSelectRow = {     
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
var tableb06e704b67ff874d17190eedf7c930f9430cLoadComplete = {     
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
var tableb06e704b67ff874d17190eedf7c930f9430cBeforeEditCell = {        
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
var tableb06e704b67ff874d17190eedf7c930f9430cOndblClickRow = {     
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
var tableb06e704b67ff874d17190eedf7c930f9430cOnRightClickRow = {     
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
var tableb06e704b67ff874d17190eedf7c930f9430cGridComplete = {     
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
var tableb06e704b67ff874d17190eedf7c930f9430cOnCellSelect = {     
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
var tableb06e704b67ff874d17190eedf7c930f9430cLoadBeforeSend = {        
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
function tableb06e704b67ff874d17190eedf7c930f9430cReload(pid){
	var _isInvalid = true;
	$("#tableb06e704b67ff874d17190eedf7c930f9430c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb06e704b67ff874d17190eedf7c930f9430cPid = pid;
		}
		return false;
	}
	window.tableb06e704b67ff874d17190eedf7c930f9430cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb06e704b67ff874d17190eedf7c930f9430c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tableb06e704b67ff874d17190eedf7c930f9430cReload();
};
function tableb06e704b67ff874d17190eedf7c930f9430cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb06e704b67ff874d17190eedf7c930f9430cPid == 'undefined' || window.tableb06e704b67ff874d17190eedf7c930f9430cPid!=null){
tableb06e704b67ff874d17190eedf7c930f9430cReload(window.tableb06e704b67ff874d17190eedf7c930f9430cPid);
}
}
var tablecmtableb06e704b67ff874d17190eedf7c930f9430c = [];
var uniqueColtableb06e704b67ff874d17190eedf7c930f9430c = [];
var uniqueColTitletableb06e704b67ff874d17190eedf7c930f9430c = [];
var defaultValuetableb06e704b67ff874d17190eedf7c930f9430c = {};
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '申请日期',hidden:false, name: 'DRAFT_DATE',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '是否下发党支部',hidden:false, name: 'IS_YN_ISSUE',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '失效日期', formatter:format, hidden:false, name: 'RELEASE_DATE',align:'center',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '公告标题',hidden:false, name: 'NOTICE_TITLE',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '表单密级',hidden:true, name: 'SECRET_LEVEL',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '字段_1',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '拟稿人',hidden:false, name: 'DRAFT_USER_NAME',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '失效日期',hidden:false, name: 'DEAD_DATE',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '候选人',hidden:true, name: 'SELECT_USER',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '下发支部',hidden:false, name: 'SEL_USER',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '发布日期',hidden:false, name: 'SEND_DATE',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '失效日期', formatter:format, hidden:false, name: 'INVALID_DATE',align:'center',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '拟稿人部门',hidden:false, name: 'DRAFT_DEPT_NAME',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '备注',hidden:false, name: 'REMARK',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '所选人员id',hidden:true, name: 'SEL_USER_ID',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({label: '是否过期',hidden:false, name: 'OVERTIME_YN',align:'left',  width: '150px'});
tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtableb06e704b67ff874d17190eedf7c930f9430c.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function tableb06e704b67ff874d17190eedf7c930f9430cinitWorkFlow(status){
if(status == "start" || status === "nostart"){
}else{
}
tableb06e704b67ff874d17190eedf7c930f9430csearchWF();
}
function tableb06e704b67ff874d17190eedf7c930f9430csearchWF(){
   if ($("#searchformtableb06e704b67ff874d17190eedf7c930f9430c").length>0){
      var para = serializeObject($("#searchformtableb06e704b67ff874d17190eedf7c930f9430c"));
      para.bpmState = $('#tableb06e704b67ff874d17190eedf7c930f9430cworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tableb06e704b67ff874d17190eedf7c930f9430c').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tableb06e704b67ff874d17190eedf7c930f9430cworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tableb06e704b67ff874d17190eedf7c930f9430c').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#tableb06e704b67ff874d17190eedf7c930f9430c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e381eaacfc01820fdd7c010f4f/tableb06e704b67ff874d17190eedf7c930f9430c/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb06e704b67ff874d17190eedf7c930f9430c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb06e704b67ff874d17190eedf7c930f9430cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb06e704b67ff874d17190eedf7c930f9430cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb06e704b67ff874d17190eedf7c930f9430cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb06e704b67ff874d17190eedf7c930f9430cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb06e704b67ff874d17190eedf7c930f9430cGridComplete.exec();
				    setTimeout(function(){var height = $("#tableb06e704b67ff874d17190eedf7c930f9430c").closest('.ui-jqgrid-bdiv').height();
					$("#tableb06e704b67ff874d17190eedf7c930f9430cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb06e704b67ff874d17190eedf7c930f9430cnorecords img").css("width","120px");
                 }else{
					    $("#tableb06e704b67ff874d17190eedf7c930f9430cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb06e704b67ff874d17190eedf7c930f9430cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb06e704b67ff874d17190eedf7c930f9430cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb06e704b67ff874d17190eedf7c930f9430cnorecords").hide();
		   	    $("#Pagertableb06e704b67ff874d17190eedf7c930f9430c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb06e704b67ff874d17190eedf7c930f9430c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb06e704b67ff874d17190eedf7c930f9430c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb06e704b67ff874d17190eedf7c930f9430cnorecords").html() == null) {
						$("#tableb06e704b67ff874d17190eedf7c930f9430c").parent().append("<div class='no_data' id='tableb06e704b67ff874d17190eedf7c930f9430cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb06e704b67ff874d17190eedf7c930f9430cnorecords").show();
					$("#Pagertableb06e704b67ff874d17190eedf7c930f9430c_left").css("display", "none");
				}
tableb06e704b67ff874d17190eedf7c930f9430cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb06e704b67ff874d17190eedf7c930f9430c"
    });
tableb06e704b67ff874d17190eedf7c930f9430cReload();
$("#t_tableb06e704b67ff874d17190eedf7c930f9430c").append($("#tableToolbartableb06e704b67ff874d17190eedf7c930f9430c"));$("#tableToolbarButton80e65d2096048e4bc3bb0c4e60f25a3f617f").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e381eaacfc0181faa42aa84007&grid=tableb06e704b67ff874d17190eedf7c930f9430c'     
	});                                                                              
}                                                                                  
);
$('#tableb06e704b67ff874d17190eedf7c930f9430cworkFlowSelect').bind('change',function(){
tableb06e704b67ff874d17190eedf7c930f9430cinitWorkFlow($(this).val());
});
;});	 
