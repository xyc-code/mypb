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
avicAjax.ajax({
	url : 'platform/avicit/pb/utils/pbUtilsController/queryUserIsJjwy',
	data : {},
	type : 'POST',
	dataType : 'JSON',
	success : function(result) {
		if (result.userPost == "N") {
			$('#tableToolbarButton1d1f967c2f0ec244ad181ee151a38c048c75').hide();
		}
	}
})
var selectTaskStatus;
function redraw948e83e39319e8fe0193299a133e2d9b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39319e8fe0193299a133e2d9b").width();
		var win_height = $("#948e83e39319e8fe0193299a133e2d9b").height();
		$('#948e83e39319e8fe0193299a133e2d9b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39319e8fe0193299a133e2d9b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39319e8fe0193299a133e2d9b").width();
	setTimeout(function(){redraw948e83e39319e8fe0193299a133e2d9b(win_width);},500);
});
var table47a6a6588d0149462938d64ef3f3defd9624KeyWordIn = "";    
var table47a6a6588d0149462938d64ef3f3defd9624ParamIn = "";    
var table47a6a6588d0149462938d64ef3f3defd9624SelectRow = {     
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
var table47a6a6588d0149462938d64ef3f3defd9624LoadComplete = {     
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
var table47a6a6588d0149462938d64ef3f3defd9624BeforeEditCell = {        
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
var table47a6a6588d0149462938d64ef3f3defd9624OndblClickRow = {     
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
var table47a6a6588d0149462938d64ef3f3defd9624OnRightClickRow = {     
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
var table47a6a6588d0149462938d64ef3f3defd9624GridComplete = {     
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
var table47a6a6588d0149462938d64ef3f3defd9624OnCellSelect = {     
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
var table47a6a6588d0149462938d64ef3f3defd9624LoadBeforeSend = {        
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
function table47a6a6588d0149462938d64ef3f3defd9624Reload(pid){
	var _isInvalid = true;
	$("#table47a6a6588d0149462938d64ef3f3defd9624").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table47a6a6588d0149462938d64ef3f3defd9624Pid = pid;
		}
		return false;
	}
	window.table47a6a6588d0149462938d64ef3f3defd9624Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table47a6a6588d0149462938d64ef3f3defd9624Reload();
};
function table47a6a6588d0149462938d64ef3f3defd9624TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table47a6a6588d0149462938d64ef3f3defd9624Pid == 'undefined' || window.table47a6a6588d0149462938d64ef3f3defd9624Pid!=null){
table47a6a6588d0149462938d64ef3f3defd9624Reload(window.table47a6a6588d0149462938d64ef3f3defd9624Pid);
}
}
var tablecmtable47a6a6588d0149462938d64ef3f3defd9624 = [];
var uniqueColtable47a6a6588d0149462938d64ef3f3defd9624 = [];
var uniqueColTitletable47a6a6588d0149462938d64ef3f3defd9624 = [];
var defaultValuetable47a6a6588d0149462938d64ef3f3defd9624 = {};
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '自动编码',hidden:false, name: 'AUTO_CODE',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'center',  width: '280px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '发起人',hidden:false, name: 'USER_NAME',align:'center',  width: '80px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '发起人电话',hidden:false, name: 'TEL',align:'center',  width: '80px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '申请日期', formatter:format, hidden:false, name: 'REQUEST_DATE',align:'center',  width: '80px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内开展党风党纪、反腐倡廉、廉洁风险岗位人员等廉洁教育活动情况',hidden:false, name: 'DFDJ_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内开展廉洁谈话情况',hidden:false, name: 'LJTH_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内党政领导讲授廉政党课、作反腐倡廉报告情况',hidden:false, name: 'LDJH_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内运用监督执纪“第一种形态”情况',hidden:false, name: 'FIRST_XT',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内单位进行“三重一大”（重要事项）集体决策情况',hidden:true, name: 'ZYSX_COUNT',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '针对岗位调整的领导干部签订各类责任书情况',hidden:true, name: 'LDGB_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '党员领导干部婚丧喜庆事宜报告情况',hidden:true, name: 'HSXS_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '开展内部监督检查及发现问题情况',hidden:true, name: 'NBJC_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '其他需要报告的情况',hidden:true, name: 'OTHER_QK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '党组织ID',hidden:true, name: 'PARTY_ID',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'center',  width: '100px'});tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'center',  width: '80px'});tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'center',  width: '110px'});tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'center',  width: '80px'});tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '密级',hidden:true, name: 'SECRET_LEVEL',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内开展党风党纪备注',hidden:true, name: 'DFDJ_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '其他需要报告的情况备注',hidden:true, name: 'OTHER_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '开展内部监督检查及发现问题情况备注',hidden:true, name: 'NBJC_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '党员领导干部婚丧喜庆事宜报告情况备注',hidden:true, name: 'HSXS_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '针对岗位调整的领导干部签订各类责任书情况备注',hidden:true, name: 'LDGB_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内单位进行重要事项集体决策次数备注',hidden:true, name: 'ZYSX_COUNT_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内运用监督执纪“第一种形态”情况备注',hidden:true, name: 'FIRST_XT_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内党政领导讲授廉政党课备注',hidden:true, name: 'LDJH_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内开展廉洁谈话情况备注',hidden:true, name: 'LJTH_QK_MARK',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内开展党风党纪完成数量',hidden:true, name: 'DFDJ_QK_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '其他需要报告的情况完成数量',hidden:true, name: 'OTHER_QK_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '开展内部监督检查及发现问题情况完成数量',hidden:true, name: 'NBJC_QK_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '党员领导干部婚丧喜庆事宜报告情况完成数量',hidden:true, name: 'HSXS_QK_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '针对岗位调整的领导干部签订各类责任书情况完成数量',hidden:true, name: 'LDGB_QK_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内单位进行重要事项集体决策次数完成数量',hidden:true, name: 'ZYSX_COUNT_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内运用监督执纪“第一种形态”情况完成数量',hidden:true, name: 'FIRST_XT_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内党政领导讲授廉政党课完成数量',hidden:true, name: 'LDJH_QK_NUM',align:'center',  width: '150px'});
tablecmtable47a6a6588d0149462938d64ef3f3defd9624.push({label: '季度内开展廉洁谈话情况完成数量',hidden:true, name: 'LJTH_QK_NUM',align:'center',  width: '150px'});
	var searchNamestable47a6a6588d0149462938d64ef3f3defd9624 = []; 
searchNamestable47a6a6588d0149462938d64ef3f3defd9624.push('PARTY_NAME');
searchNamestable47a6a6588d0149462938d64ef3f3defd9624.push('USER_NAME');
$('#keyWordtable47a6a6588d0149462938d64ef3f3defd9624').attr('placeholder', '请输入党组织名称、发起人查询');
function searchDataKeyWordtable47a6a6588d0149462938d64ef3f3defd9624(){
	var keyWord = $.trim($("#keyWordtable47a6a6588d0149462938d64ef3f3defd9624").val()); 
 if($('#keyWordtable47a6a6588d0149462938d64ef3f3defd9624').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable47a6a6588d0149462938d64ef3f3defd9624.length;i++){ 
		var name = searchNamestable47a6a6588d0149462938d64ef3f3defd9624[i]; 
		param[name] = keyWord; 
	} 
if ($("#table47a6a6588d0149462938d64ef3f3defd9624workFlowSelect").length>0){param.bpmState=$('#table47a6a6588d0149462938d64ef3f3defd9624workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table47a6a6588d0149462938d64ef3f3defd9624KeyWordIn=JSON.stringify(param);
table47a6a6588d0149462938d64ef3f3defd9624ParamIn="";
	$('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable47a6a6588d0149462938d64ef3f3defd9624').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable47a6a6588d0149462938d64ef3f3defd9624();
	}
});
$('#keyWordBttable47a6a6588d0149462938d64ef3f3defd9624').bind('click', function() {
		searchDataKeyWordtable47a6a6588d0149462938d64ef3f3defd9624();
});
function table47a6a6588d0149462938d64ef3f3defd9624initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton75df215dcd751e436f8817c2a9a06c95fffe").css('display','inline-block');
}else{
$("#tableToolbarButton75df215dcd751e436f8817c2a9a06c95fffe").hide();
}
table47a6a6588d0149462938d64ef3f3defd9624searchWF();
}
function table47a6a6588d0149462938d64ef3f3defd9624searchWF(){
   if ($("#searchformtable47a6a6588d0149462938d64ef3f3defd9624").length>0){
      var para = serializeObject($("#searchformtable47a6a6588d0149462938d64ef3f3defd9624"));
      para.bpmState = $('#table47a6a6588d0149462938d64ef3f3defd9624workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table47a6a6588d0149462938d64ef3f3defd9624workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table47a6a6588d0149462938d64ef3f3defd9624SelectRow.addEvent(function(rowid,status){selectTaskStatus = $('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('getRowData', rowid).BUSINESSSTATE_;});
$("#table47a6a6588d0149462938d64ef3f3defd9624").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39319e8fe0193299a133e2d9b/table47a6a6588d0149462938d64ef3f3defd9624/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable47a6a6588d0149462938d64ef3f3defd9624,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table47a6a6588d0149462938d64ef3f3defd9624SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table47a6a6588d0149462938d64ef3f3defd9624LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table47a6a6588d0149462938d64ef3f3defd9624OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table47a6a6588d0149462938d64ef3f3defd9624OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table47a6a6588d0149462938d64ef3f3defd9624GridComplete.exec();
				    setTimeout(function(){var height = $("#table47a6a6588d0149462938d64ef3f3defd9624").closest('.ui-jqgrid-bdiv').height();
					$("#table47a6a6588d0149462938d64ef3f3defd9624norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table47a6a6588d0149462938d64ef3f3defd9624norecords img").css("width","120px");
                 }else{
					    $("#table47a6a6588d0149462938d64ef3f3defd9624norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table47a6a6588d0149462938d64ef3f3defd9624BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table47a6a6588d0149462938d64ef3f3defd9624OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table47a6a6588d0149462938d64ef3f3defd9624norecords").hide();
		   	    $("#Pagertable47a6a6588d0149462938d64ef3f3defd9624_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table47a6a6588d0149462938d64ef3f3defd9624").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table47a6a6588d0149462938d64ef3f3defd9624").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table47a6a6588d0149462938d64ef3f3defd9624norecords").html() == null) {
						$("#table47a6a6588d0149462938d64ef3f3defd9624").parent().append("<div class='no_data' id='table47a6a6588d0149462938d64ef3f3defd9624norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table47a6a6588d0149462938d64ef3f3defd9624norecords").show();
					$("#Pagertable47a6a6588d0149462938d64ef3f3defd9624_left").css("display", "none");
				}
table47a6a6588d0149462938d64ef3f3defd9624LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   footerrow:true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable47a6a6588d0149462938d64ef3f3defd9624"
    });
table47a6a6588d0149462938d64ef3f3defd9624Reload();
$("#t_table47a6a6588d0149462938d64ef3f3defd9624").append($("#tableToolbartable47a6a6588d0149462938d64ef3f3defd9624"));$("#tableToolbarButton1d1f967c2f0ec244ad181ee151a38c048c75").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39319e8fe019328b2ec697ec2&grid=table47a6a6588d0149462938d64ef3f3defd9624'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton75df215dcd751e436f8817c2a9a06c95fffe").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_JWJJXXBS&isbpm=Y&dbid=948e83e39319e8fe019328a743527b2e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39319e8fe0193299a133e2d9b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table47a6a6588d0149462938d64ef3f3defd9624').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton75df215dcd751e436f8817c2a9a06c95fffe").hide();
function searchDatatable47a6a6588d0149462938d64ef3f3defd9624(){
 var para = serializeObjectForEform($("#searchformtable47a6a6588d0149462938d64ef3f3defd9624"));
 para.bpmState = $('#table47a6a6588d0149462938d64ef3f3defd9624workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table47a6a6588d0149462938d64ef3f3defd9624KeyWordIn="";
table47a6a6588d0149462938d64ef3f3defd9624ParamIn=JSON.stringify(para);
	$('#table47a6a6588d0149462938d64ef3f3defd9624').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable47a6a6588d0149462938d64ef3f3defd9624").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable47a6a6588d0149462938d64ef3f3defd9624').bind('click',function(){
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
	content: $('#searchDialogtable47a6a6588d0149462938d64ef3f3defd9624'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable47a6a6588d0149462938d64ef3f3defd9624(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable47a6a6588d0149462938d64ef3f3defd9624")); searchDatatable47a6a6588d0149462938d64ef3f3defd9624(); layer.close(index); return false;
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
$('#REQUEST_DATE_START_button').click(function(e){
			$('#REQUEST_DATE_START').datepicker('show');
			$('#REQUEST_DATE_START').datepicker().trigger('click');
}); 
$('#REQUEST_DATE_END_button').click(function(e){
			$('#REQUEST_DATE_END').datepicker('show');
			$('#REQUEST_DATE_END').datepicker().trigger('click');
}); 
$('#table47a6a6588d0149462938d64ef3f3defd9624workFlowSelect').bind('change',function(){
table47a6a6588d0149462938d64ef3f3defd9624initWorkFlow($(this).val());
});
;});	 
