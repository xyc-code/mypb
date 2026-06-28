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

function redraw2c908c5a896175160189627afac41cd2(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a896175160189627afac41cd2").width();
		var win_height = $("#2c908c5a896175160189627afac41cd2").height();
		$('#2c908c5a896175160189627afac41cd2').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a896175160189627afac41cd2').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a896175160189627afac41cd2").width();
	setTimeout(function(){redraw2c908c5a896175160189627afac41cd2(win_width);},500);
});
var table57f184cb44b43f4e91f83be4d2aadc648ac5KeyWordIn = "";    
var table57f184cb44b43f4e91f83be4d2aadc648ac5ParamIn = "";    
var table57f184cb44b43f4e91f83be4d2aadc648ac5SelectRow = {     
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5LoadComplete = {     
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5BeforeEditCell = {        
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5OndblClickRow = {     
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5OnRightClickRow = {     
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5GridComplete = {     
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5OnCellSelect = {     
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
var table57f184cb44b43f4e91f83be4d2aadc648ac5LoadBeforeSend = {        
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
function table57f184cb44b43f4e91f83be4d2aadc648ac5Reload(pid){
	var _isInvalid = true;
	$("#table57f184cb44b43f4e91f83be4d2aadc648ac5").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table57f184cb44b43f4e91f83be4d2aadc648ac5Pid = pid;
		}
		return false;
	}
	window.table57f184cb44b43f4e91f83be4d2aadc648ac5Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table57f184cb44b43f4e91f83be4d2aadc648ac5').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table57f184cb44b43f4e91f83be4d2aadc648ac5Reload();
};
function table57f184cb44b43f4e91f83be4d2aadc648ac5TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table57f184cb44b43f4e91f83be4d2aadc648ac5Pid == 'undefined' || window.table57f184cb44b43f4e91f83be4d2aadc648ac5Pid!=null){
table57f184cb44b43f4e91f83be4d2aadc648ac5Reload(window.table57f184cb44b43f4e91f83be4d2aadc648ac5Pid);
}
}
var tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5 = [];
var uniqueColtable57f184cb44b43f4e91f83be4d2aadc648ac5 = [];
var uniqueColTitletable57f184cb44b43f4e91f83be4d2aadc648ac5 = [];
var defaultValuetable57f184cb44b43f4e91f83be4d2aadc648ac5 = {};
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '姓名',hidden:false, name: 'UFMNAME',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '编号',hidden:false, name: 'NEMBER',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '居留原因',hidden:false, name: 'RESIDENCE_REASON',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '全日制专业',hidden:false, name: 'FUL_SPECIALITY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '党组织名称',hidden:false, name: 'PO_NAME',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '居留国家',hidden:false, name: 'RESIDENCE_COUNTRY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '出生年月', formatter:format, hidden:false, name: 'BIRTHDATE',align:'center',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '部门名称',hidden:true, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '部门名称',hidden:false, name: 'DEPT_NAMEName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '非全日制专业',hidden:false, name: 'PART_SPECIALITY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '性别',hidden:true, name: 'GENDER',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '性别',hidden:false, name: 'GENDERName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '政治面貌',hidden:true, name: 'POLITICAL_OUTLOOK',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '政治面貌',hidden:false, name: 'POLITICAL_OUTLOOKName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '统战身份',hidden:true, name: 'UF_IDENTITY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '统战身份',hidden:false, name: 'UF_IDENTITYName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '非全日制毕业学校',hidden:false, name: 'PART_GRADUATION',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否香港、澳门同胞',hidden:true, name: 'HO_COMPATRIOTS',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否香港、澳门同胞',hidden:false, name: 'HO_COMPATRIOTSName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否香港、澳门眷属',hidden:true, name: 'HO_DEPENDENTS',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否香港、澳门眷属',hidden:false, name: 'HO_DEPENDENTSName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否华侨、归侨、侨眷',hidden:true, name: 'RO_CHINESE',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否华侨、归侨、侨眷',hidden:false, name: 'RO_CHINESEName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否台湾同胞在大陆亲属',hidden:true, name: 'TAIWAN_RELATIVES',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否台湾同胞在大陆亲属',hidden:false, name: 'TAIWAN_RELATIVESName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否台湾同胞',hidden:true, name: 'TAIWAN_COMPATRIOTS',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ label: '是否台湾同胞',hidden:false, name: 'TAIWAN_COMPATRIOTSName',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '手机号码',hidden:false, name: 'PHONE_NUMBER',align:'right',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '非全日制学历',hidden:false, name: 'PART_EDUCATION',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '在民主党派、人大、政协等任职情况',hidden:false, name: 'PARTY_REPRE_POSITIONS',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '全日制学历',hidden:false, name: 'FUL_EDUCATION',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '(眷属)侨居国',hidden:false, name: 'HOST_COUNTRY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '全日制毕业学校',hidden:false, name: 'FUL_GRADUATION',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '宗教信仰',hidden:false, name: 'RELIGIOUS_BELIER',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '职务',hidden:false, name: 'DUTIES',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '居留年限',hidden:false, name: 'RESIDENCE_YEAR',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '员工号',hidden:false, name: 'EMPLOYEEID',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '职称',hidden:false, name: 'USER_TITLE',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段6',hidden:true, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段5',hidden:true, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段7',hidden:true, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段8',hidden:true, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段1', formatter:format, hidden:true, name: 'DATA_1',align:'center',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '备用字段2',hidden:true, name: 'DATA_2',align:'right',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable57f184cb44b43f4e91f83be4d2aadc648ac5 = []; 
searchNamestable57f184cb44b43f4e91f83be4d2aadc648ac5.push('UFMNAME');
searchNamestable57f184cb44b43f4e91f83be4d2aadc648ac5.push('NEMBER');
$('#keyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5').attr('placeholder', '请输入姓名、编号查询');
function searchDataKeyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5(){
	var keyWord = $.trim($("#keyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5").val()); 
 if($('#keyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable57f184cb44b43f4e91f83be4d2aadc648ac5.length;i++){ 
		var name = searchNamestable57f184cb44b43f4e91f83be4d2aadc648ac5[i]; 
		param[name] = keyWord; 
	} 
if ($("#table57f184cb44b43f4e91f83be4d2aadc648ac5workFlowSelect").length>0){param.bpmState=$('#table57f184cb44b43f4e91f83be4d2aadc648ac5workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table57f184cb44b43f4e91f83be4d2aadc648ac5KeyWordIn=JSON.stringify(param);
table57f184cb44b43f4e91f83be4d2aadc648ac5ParamIn="";
	$('#table57f184cb44b43f4e91f83be4d2aadc648ac5').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5();
	}
});
$('#keyWordBttable57f184cb44b43f4e91f83be4d2aadc648ac5').bind('click', function() {
		searchDataKeyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5();
});
;$(document).ready(function(){ 

$("#table57f184cb44b43f4e91f83be4d2aadc648ac5").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a896175160189627afac41cd2/table57f184cb44b43f4e91f83be4d2aadc648ac5/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable57f184cb44b43f4e91f83be4d2aadc648ac5,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table57f184cb44b43f4e91f83be4d2aadc648ac5SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table57f184cb44b43f4e91f83be4d2aadc648ac5LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table57f184cb44b43f4e91f83be4d2aadc648ac5OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table57f184cb44b43f4e91f83be4d2aadc648ac5OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table57f184cb44b43f4e91f83be4d2aadc648ac5GridComplete.exec();
				    setTimeout(function(){var height = $("#table57f184cb44b43f4e91f83be4d2aadc648ac5").closest('.ui-jqgrid-bdiv').height();
					$("#table57f184cb44b43f4e91f83be4d2aadc648ac5norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table57f184cb44b43f4e91f83be4d2aadc648ac5norecords img").css("width","120px");
                 }else{
					    $("#table57f184cb44b43f4e91f83be4d2aadc648ac5norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table57f184cb44b43f4e91f83be4d2aadc648ac5BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table57f184cb44b43f4e91f83be4d2aadc648ac5OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table57f184cb44b43f4e91f83be4d2aadc648ac5norecords").hide();
		   	    $("#Pagertable57f184cb44b43f4e91f83be4d2aadc648ac5_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table57f184cb44b43f4e91f83be4d2aadc648ac5").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table57f184cb44b43f4e91f83be4d2aadc648ac5").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table57f184cb44b43f4e91f83be4d2aadc648ac5norecords").html() == null) {
						$("#table57f184cb44b43f4e91f83be4d2aadc648ac5").parent().append("<div class='no_data' id='table57f184cb44b43f4e91f83be4d2aadc648ac5norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table57f184cb44b43f4e91f83be4d2aadc648ac5norecords").show();
					$("#Pagertable57f184cb44b43f4e91f83be4d2aadc648ac5_left").css("display", "none");
				}
table57f184cb44b43f4e91f83be4d2aadc648ac5LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable57f184cb44b43f4e91f83be4d2aadc648ac5"
    });
table57f184cb44b43f4e91f83be4d2aadc648ac5Reload();
$("#t_table57f184cb44b43f4e91f83be4d2aadc648ac5").append($("#tableToolbartable57f184cb44b43f4e91f83be4d2aadc648ac5"));function searchDatatable57f184cb44b43f4e91f83be4d2aadc648ac5(){
 var para = serializeObjectForEform($("#searchformtable57f184cb44b43f4e91f83be4d2aadc648ac5"));
 para.bpmState = $('#table57f184cb44b43f4e91f83be4d2aadc648ac5workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table57f184cb44b43f4e91f83be4d2aadc648ac5KeyWordIn="";
table57f184cb44b43f4e91f83be4d2aadc648ac5ParamIn=JSON.stringify(para);
	$('#table57f184cb44b43f4e91f83be4d2aadc648ac5').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable57f184cb44b43f4e91f83be4d2aadc648ac5").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable57f184cb44b43f4e91f83be4d2aadc648ac5').bind('click',function(){
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
	content: $('#searchDialogtable57f184cb44b43f4e91f83be4d2aadc648ac5'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable57f184cb44b43f4e91f83be4d2aadc648ac5(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable57f184cb44b43f4e91f83be4d2aadc648ac5")); searchDatatable57f184cb44b43f4e91f83be4d2aadc648ac5(); layer.close(index); return false;
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
$("#tableToolbarButtonab44d58a01f8114848084f49a596c3857f49").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table57f184cb44b43f4e91f83be4d2aadc648ac5').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table57f184cb44b43f4e91f83be4d2aadc648ac5').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_UFM_INFO_F&isbpm=Y&dbid=2c908c5a894cc1bb01894da4e7971833', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5a896175160189627afac41cd2',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table57f184cb44b43f4e91f83be4d2aadc648ac5').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonab44d58a01f8114848084f49a596c3857f49").hide();
;});	 
