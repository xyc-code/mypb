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

function redraw948e83e3881da2180188278d70666c6e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3881da2180188278d70666c6e").width();
		var win_height = $("#948e83e3881da2180188278d70666c6e").height();
		$('#948e83e3881da2180188278d70666c6e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3881da2180188278d70666c6e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3881da2180188278d70666c6e").width();
	setTimeout(function(){redraw948e83e3881da2180188278d70666c6e(win_width);},500);
});
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10KeyWordIn = "";    
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10ParamIn = "";    
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10SelectRow = {     
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10LoadComplete = {     
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10BeforeEditCell = {        
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10OndblClickRow = {     
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10OnRightClickRow = {     
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10GridComplete = {     
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10OnCellSelect = {     
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
var tabled0598a703899cd4c45c8ff7af3c6f4d23c10LoadBeforeSend = {        
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
function tabled0598a703899cd4c45c8ff7af3c6f4d23c10Reload(pid){
	var _isInvalid = true;
	$("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabled0598a703899cd4c45c8ff7af3c6f4d23c10Pid = pid;
		}
		return false;
	}
	window.tabled0598a703899cd4c45c8ff7af3c6f4d23c10Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tabled0598a703899cd4c45c8ff7af3c6f4d23c10Reload();
};
function tabled0598a703899cd4c45c8ff7af3c6f4d23c10TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabled0598a703899cd4c45c8ff7af3c6f4d23c10Pid == 'undefined' || window.tabled0598a703899cd4c45c8ff7af3c6f4d23c10Pid!=null){
tabled0598a703899cd4c45c8ff7af3c6f4d23c10Reload(window.tabled0598a703899cd4c45c8ff7af3c6f4d23c10Pid);
}
}
var tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10 = [];
var uniqueColtabled0598a703899cd4c45c8ff7af3c6f4d23c10 = [];
var uniqueColTitletabled0598a703899cd4c45c8ff7af3c6f4d23c10 = [];
var defaultValuetabled0598a703899cd4c45c8ff7af3c6f4d23c10 = {};
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '申请人',hidden:true, name: 'ATTR1',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '申请人',hidden:true, name: 'ATTR1Name',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '申请编号',hidden:false, name: 'APPLICATION_NUMBER',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '申请单位',hidden:true, name: 'APPLICATION_UNIT',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '申请单位',hidden:false, name: 'APPLICATION_UNITName',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队名称',hidden:false, name: 'COMMANDOES_NAME',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队队长', formatter:function(cellvalue, options, rowObject){return fomrt(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_CAPTAINS',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队队员', formatter:function(cellvalue, options, rowObject){return fomrtName(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_TEAM_NAME',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '队员人数', formatter:function(cellvalue, options, rowObject){return fomrtConut(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_TEAM_COUNT',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队队员年龄', formatter:function(cellvalue, options, rowObject){return fomrtAge(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_TEAM_AGE',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队队员单位', formatter:function(cellvalue, options, rowObject){return fomrtDept(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_TEAM_DEPT',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队队员负责任务', formatter:function(cellvalue, options, rowObject){return fomrtTask(cellvalue, options, rowObject);}, hidden:false, name: 'COMMANDOES_TEAM_TASK',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队类型',hidden:true, name: 'COMMANDOES_TYPE',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR9',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '成立时间', formatter:format, hidden:false, name: 'COMMANDOES_DATE',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '评选情况',hidden:false, name: 'COMMANDOES_PXQK',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '计划完成任务时间', formatter:format, hidden:false, name: 'COMMANDOES_TASK_DATE',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '备案情况',hidden:true, name: 'COMMANDOES_CONTENT',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '备案情况',hidden:false, name: 'COMMANDOES_CONTENTName',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '联系人姓名',hidden:true, name: 'COMMANDOES_POSEN',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ label: '联系人姓名',hidden:false, name: 'COMMANDOES_POSENName',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '联系人电话',hidden:false, name: 'COMMANDOES_POSEN_TEL',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR4',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR7',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR20',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '突击队任务完成情况及取得成效',hidden:false, name: 'EXPECTED_INCOME',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR6',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR5',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR12',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR13',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR10',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR11',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR16',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR17',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR14',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR15',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR18',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段', formatter:format, hidden:true, name: 'ATTR19',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '预留字段',hidden:true, name: 'ATTR8',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ sortable:false,label: '流程运转', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'tableVirColumn86cf0c493f958d46e0fb70f7122f4b53fa85',align:'left',  width: '150px'});	var searchNamestabled0598a703899cd4c45c8ff7af3c6f4d23c10 = []; 
searchNamestabled0598a703899cd4c45c8ff7af3c6f4d23c10.push('COMMANDOES_NAME');
$('#keyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10').attr('placeholder', '请输入突击队名称查询');
function searchDataKeyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10(){
	var keyWord = $.trim($("#keyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10").val()); 
 if($('#keyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestabled0598a703899cd4c45c8ff7af3c6f4d23c10.length;i++){ 
		var name = searchNamestabled0598a703899cd4c45c8ff7af3c6f4d23c10[i]; 
		param[name] = keyWord; 
	} 
if ($("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect").length>0){param.bpmState=$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tabled0598a703899cd4c45c8ff7af3c6f4d23c10KeyWordIn=JSON.stringify(param);
tabled0598a703899cd4c45c8ff7af3c6f4d23c10ParamIn="";
	$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10();
	}
});
$('#keyWordBttabled0598a703899cd4c45c8ff7af3c6f4d23c10').bind('click', function() {
		searchDataKeyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10();
});
function tabled0598a703899cd4c45c8ff7af3c6f4d23c10initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton4dae522dfa753e49e94a01361ec214883bc1").css('display','inline-block');
}else{
$("#tableToolbarButton4dae522dfa753e49e94a01361ec214883bc1").hide();
}
tabled0598a703899cd4c45c8ff7af3c6f4d23c10searchWF();
}
function tabled0598a703899cd4c45c8ff7af3c6f4d23c10searchWF(){
   if ($("#searchformtabled0598a703899cd4c45c8ff7af3c6f4d23c10").length>0){
      var para = serializeObject($("#searchformtabled0598a703899cd4c45c8ff7af3c6f4d23c10"));
      para.bpmState = $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tabled0598a703899cd4c45c8ff7af3c6f4d23c10LoadComplete.addEvent(function(data){$.ajax({
    url:"platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/QuaryUser",
    dataType:"json",
    type:"GET",
    async:false,
    success: function (r) {
    	if(r.flag=="error"){
    		$("#tableToolbarButton5ad4e3dff92f5f413d39d580f29fbbf836d1").css("display","none")
    	}
    }
})});
$("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3881da2180188278d70666c6e/tabled0598a703899cd4c45c8ff7af3c6f4d23c10/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabled0598a703899cd4c45c8ff7af3c6f4d23c10,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabled0598a703899cd4c45c8ff7af3c6f4d23c10SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabled0598a703899cd4c45c8ff7af3c6f4d23c10LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabled0598a703899cd4c45c8ff7af3c6f4d23c10OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabled0598a703899cd4c45c8ff7af3c6f4d23c10OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabled0598a703899cd4c45c8ff7af3c6f4d23c10GridComplete.exec();
				    setTimeout(function(){var height = $("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10").closest('.ui-jqgrid-bdiv').height();
					$("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords img").css("width","120px");
                 }else{
					    $("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabled0598a703899cd4c45c8ff7af3c6f4d23c10BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabled0598a703899cd4c45c8ff7af3c6f4d23c10OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords").hide();
		   	    $("#Pagertabled0598a703899cd4c45c8ff7af3c6f4d23c10_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords").html() == null) {
						$("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10").parent().append("<div class='no_data' id='tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabled0598a703899cd4c45c8ff7af3c6f4d23c10norecords").show();
					$("#Pagertabled0598a703899cd4c45c8ff7af3c6f4d23c10_left").css("display", "none");
				}
tabled0598a703899cd4c45c8ff7af3c6f4d23c10LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabled0598a703899cd4c45c8ff7af3c6f4d23c10"
    });
tabled0598a703899cd4c45c8ff7af3c6f4d23c10Reload();
$("#t_tabled0598a703899cd4c45c8ff7af3c6f4d23c10").append($("#tableToolbartabled0598a703899cd4c45c8ff7af3c6f4d23c10"));function searchDatatabled0598a703899cd4c45c8ff7af3c6f4d23c10(){
 var para = serializeObjectForEform($("#searchformtabled0598a703899cd4c45c8ff7af3c6f4d23c10"));
 para.bpmState = $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tabled0598a703899cd4c45c8ff7af3c6f4d23c10KeyWordIn="";
tabled0598a703899cd4c45c8ff7af3c6f4d23c10ParamIn=JSON.stringify(para);
	$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtabled0598a703899cd4c45c8ff7af3c6f4d23c10").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltabled0598a703899cd4c45c8ff7af3c6f4d23c10').bind('click',function(){
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
'500px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtabled0598a703899cd4c45c8ff7af3c6f4d23c10'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatabled0598a703899cd4c45c8ff7af3c6f4d23c10(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtabled0598a703899cd4c45c8ff7af3c6f4d23c10")); searchDatatabled0598a703899cd4c45c8ff7af3c6f4d23c10(); layer.close(index); return false;
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
$('#COMMANDOES_POSENAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'COMMANDOES_POSEN',textFiled:'COMMANDOES_POSENAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#COMMANDOES_DATE_START_button').click(function(e){
			$('#COMMANDOES_DATE_START').datepicker('show');
			$('#COMMANDOES_DATE_START').datepicker().trigger('click');
}); 
$('#COMMANDOES_DATE_END_button').click(function(e){
			$('#COMMANDOES_DATE_END').datepicker('show');
			$('#COMMANDOES_DATE_END').datepicker().trigger('click');
}); 
$('#COMMANDOES_TASK_DATE_START_button').click(function(e){
			$('#COMMANDOES_TASK_DATE_START').datepicker('show');
			$('#COMMANDOES_TASK_DATE_START').datepicker().trigger('click');
}); 
$('#COMMANDOES_TASK_DATE_END_button').click(function(e){
			$('#COMMANDOES_TASK_DATE_END').datepicker('show');
			$('#COMMANDOES_TASK_DATE_END').datepicker().trigger('click');
}); 
$('#APPLICATION_UNITAlias').on('focus',function(e){
	new H5CommonSelect({type:'orgSelect', idFiled:'APPLICATION_UNIT',textFiled:'APPLICATION_UNITAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#ATTR1Alias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'ATTR1',textFiled:'ATTR1Alias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#COMMANDOES_TEAM_NAMEAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'COMMANDOES_TEAM_NAME',textFiled:'COMMANDOES_TEAM_NAMEAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect').bind('change',function(){
tabled0598a703899cd4c45c8ff7af3c6f4d23c10initWorkFlow($(this).val());
});
$("#tableToolbarButton5ad4e3dff92f5f413d39d580f29fbbf836d1").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d894ded3801894e090c780ae1&grid=tabled0598a703899cd4c45c8ff7af3c6f4d23c10'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton4dae522dfa753e49e94a01361ec214883bc1").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_YOUTH_DECLARATION&isbpm=Y&dbid=2c908c1d894ded3801894dfa03550652', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3881da2180188278d70666c6e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton4dae522dfa753e49e94a01361ec214883bc1").hide();
$("#tableToolbarButton83be1ae94b190d44de5a80ae9682da0e4ed4").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'tjdsbdr', callBackFunc: function () {                           	
		$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
$("#tableToolbarButton844ebdf0c954c04b38583e0f3785882be4d4").bind('click',function(event){var row = $('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('getRowData');
if(row.length==0){
layer.alert('无数据！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0,
			  btn: ['关闭'],
			  title:"提示"
			}
		);
return
}
var url = 'platform/avicit/pb/milepost/dynYouthDeclaration/dynYouthDeclarationController/download';
var json =row.join(',');
$("<form action='"+url+"' method = 'post' style = 'display:none'><input name='json' value='"+json+"' /></form>").appendTo('body').submit().remove();});
;});	 
