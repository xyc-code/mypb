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
function psutest(value){
console.log(value);

}
function psutest2(value){
return  '<font color="blue">'+value+'</font>';
}
function redraw2c908c5a89d3f77b0189d4365b1a15ee(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a89d3f77b0189d4365b1a15ee").width();
		var win_height = $("#2c908c5a89d3f77b0189d4365b1a15ee").height();
		$('#2c908c5a89d3f77b0189d4365b1a15ee').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a89d3f77b0189d4365b1a15ee').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a89d3f77b0189d4365b1a15ee").width();
	setTimeout(function(){redraw2c908c5a89d3f77b0189d4365b1a15ee(win_width);},500);
});
var table07a53751339a3548fc884e2985a3091db3bcKeyWordIn = "";    
var table07a53751339a3548fc884e2985a3091db3bcParamIn = "";    
var table07a53751339a3548fc884e2985a3091db3bcSelectRow = {     
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
var table07a53751339a3548fc884e2985a3091db3bcLoadComplete = {     
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
var table07a53751339a3548fc884e2985a3091db3bcBeforeEditCell = {        
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
var table07a53751339a3548fc884e2985a3091db3bcOndblClickRow = {     
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
var table07a53751339a3548fc884e2985a3091db3bcOnRightClickRow = {     
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
var table07a53751339a3548fc884e2985a3091db3bcGridComplete = {     
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
var table07a53751339a3548fc884e2985a3091db3bcOnCellSelect = {     
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
var table07a53751339a3548fc884e2985a3091db3bcLoadBeforeSend = {        
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
function table07a53751339a3548fc884e2985a3091db3bcReload(pid){
	var _isInvalid = true;
	$("#table07a53751339a3548fc884e2985a3091db3bc").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table07a53751339a3548fc884e2985a3091db3bcPid = pid;
		}
		return false;
	}
	window.table07a53751339a3548fc884e2985a3091db3bcPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table07a53751339a3548fc884e2985a3091db3bc').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table07a53751339a3548fc884e2985a3091db3bcReload();
};
function table07a53751339a3548fc884e2985a3091db3bcTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table07a53751339a3548fc884e2985a3091db3bcPid == 'undefined' || window.table07a53751339a3548fc884e2985a3091db3bcPid!=null){
table07a53751339a3548fc884e2985a3091db3bcReload(window.table07a53751339a3548fc884e2985a3091db3bcPid);
}
}
var tablecmtable07a53751339a3548fc884e2985a3091db3bc = [];
var uniqueColtable07a53751339a3548fc884e2985a3091db3bc = [];
var uniqueColTitletable07a53751339a3548fc884e2985a3091db3bc = [];
var defaultValuetable07a53751339a3548fc884e2985a3091db3bc = {};
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '申请单位ID',hidden:false, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '申请日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '申请人',hidden:false, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '申请人_ID',hidden:false, name: 'REQUEST_USER_ID',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '联系方式',hidden:false, name: 'TEL',align:'right',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '劳模姓名',hidden:false, name: 'MODEL_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '获奖年月', formatter:format, hidden:false, name: 'HONOR_DATE',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '新增荣誉层级',hidden:false, name: 'MODEL_LEVEL',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '国家级荣誉',hidden:false, name: 'MODEL_COUNTRY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '省部级荣誉',hidden:false, name: 'MODEL_ECONOMIZE',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '地市级荣誉',hidden:false, name: 'MODEL_CITY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '公司级荣誉',hidden:false, name: 'MODEL_COMPANY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '荣誉名称',hidden:false, name: 'HONOR_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '荣誉颁发文件名',hidden:false, name: 'HONOR_FILE_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '荣誉颁发机构',hidden:false, name: 'HONOR_ORGAN',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '荣誉颁发文件及证书照片附件',hidden:false, name: 'ANNEX',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '一级部门名称',hidden:true, name: 'DEPT_ONE_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '一级部门ID',hidden:true, name: 'DEPT_ONE_ID',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '二级部门名称',hidden:true, name: 'DEPT_TWO_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '二级部门ID',hidden:true, name: 'DEPT_TWO_ID',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '三级部门名称',hidden:true, name: 'DEPT_THREE_ID',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '三级部门ID',hidden:true, name: 'DEPT_THREE_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '岗位名称',hidden:true, name: 'POST_NAME',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '年龄',hidden:true, name: 'SEX',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '民族',hidden:true, name: 'NATION',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '出生日期', formatter:format, hidden:true, name: 'BIRTHDAY',align:'center',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '政治面貌',hidden:true, name: 'POLITICAL_OUTLOOK',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '参加工作日期', formatter:format, hidden:true, name: 'WORK_DATE',align:'center',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '学历',hidden:true, name: 'EDUCATION_LEVEL',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '专业',hidden:true, name: 'SPECIALITY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '职称',hidden:true, name: 'PROFESSIONAL_RANK',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '技能等级',hidden:true, name: 'SKILL_LEVEL',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '聘任职级',hidden:true, name: 'APPOINTMENT_LEVEL',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '发动机分类',hidden:true, name: 'CATEGORY_TYPE',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_1',hidden:false, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_2',hidden:true, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_5',hidden:true, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_6',hidden:true, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_7',hidden:true, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_8',hidden:true, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_9',hidden:true, name: 'DATA_9',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_10',hidden:true, name: 'DATA_10',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_11', formatter:format, hidden:true, name: 'DATA_11',align:'center',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_12',hidden:true, name: 'DATA_12',align:'right',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_13', formatter:function(value){return '<img src="data:image/jpg;base64,'+value+'" style="max-width:50px;max-height:50px"/>';}, hidden:true, name: 'DATA_13',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: 'DATA_14',hidden:true, name: 'DATA_14',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});tablecmtable07a53751339a3548fc884e2985a3091db3bc.push({ sortable:false,label: 'test', formatter:psutest, hidden:true, name: 'tableVirColumn7c99b010adafa5451848c43ac88ae86af02a',align:'left',  width: '150px'});;$(document).ready(function(){ 

table07a53751339a3548fc884e2985a3091db3bcGridComplete.addEvent(function(){$("#tableToolbarButton126d87e490e85c46d17bc1cb90149c29ce07").css("display","");
$("#tableToolbarButton9283ce3611809740eaab648e3064bcffd0fe").css("display","");});
$("#table07a53751339a3548fc884e2985a3091db3bc").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a89d3f77b0189d4365b1a15ee/table07a53751339a3548fc884e2985a3091db3bc/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable07a53751339a3548fc884e2985a3091db3bc,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table07a53751339a3548fc884e2985a3091db3bcSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table07a53751339a3548fc884e2985a3091db3bcLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table07a53751339a3548fc884e2985a3091db3bcOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table07a53751339a3548fc884e2985a3091db3bcOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table07a53751339a3548fc884e2985a3091db3bcGridComplete.exec();
				    setTimeout(function(){var height = $("#table07a53751339a3548fc884e2985a3091db3bc").closest('.ui-jqgrid-bdiv').height();
					$("#table07a53751339a3548fc884e2985a3091db3bcnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table07a53751339a3548fc884e2985a3091db3bcnorecords img").css("width","120px");
                 }else{
					    $("#table07a53751339a3548fc884e2985a3091db3bcnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table07a53751339a3548fc884e2985a3091db3bcBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table07a53751339a3548fc884e2985a3091db3bcOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table07a53751339a3548fc884e2985a3091db3bcnorecords").hide();
		   	    $("#Pagertable07a53751339a3548fc884e2985a3091db3bc_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table07a53751339a3548fc884e2985a3091db3bc").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table07a53751339a3548fc884e2985a3091db3bc").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table07a53751339a3548fc884e2985a3091db3bcnorecords").html() == null) {
						$("#table07a53751339a3548fc884e2985a3091db3bc").parent().append("<div class='no_data' id='table07a53751339a3548fc884e2985a3091db3bcnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table07a53751339a3548fc884e2985a3091db3bcnorecords").show();
					$("#Pagertable07a53751339a3548fc884e2985a3091db3bc_left").css("display", "none");
				}
table07a53751339a3548fc884e2985a3091db3bcLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable07a53751339a3548fc884e2985a3091db3bc"
    });
table07a53751339a3548fc884e2985a3091db3bcReload();
$("#t_table07a53751339a3548fc884e2985a3091db3bc").append($("#tableToolbartable07a53751339a3548fc884e2985a3091db3bc"));$("#tableToolbarButton21a6145d46de644a9f1b363d51c3a239e026").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a89d2a7eb0189d39f32ed0c5a&grid=table07a53751339a3548fc884e2985a3091db3bc'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton126d87e490e85c46d17bc1cb90149c29ce07").bind('click',function() {                                                                                       
	var ids = $('#table07a53751339a3548fc884e2985a3091db3bc').jqGrid('getGridParam', 'selarrrow');                            
	if (ids.length == 0) {                                                                          
		layer.alert('请选择数据！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (ids.length > 1) {                                                                    
		layer.alert('请选择一条数据！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowData = $('#table07a53751339a3548fc884e2985a3091db3bc').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a89d3f77b0189d425e5710f43&id=' + rowData.ID+'&grid=table07a53751339a3548fc884e2985a3091db3bc',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton126d87e490e85c46d17bc1cb90149c29ce07").hide();
$("#tableToolbarButton9283ce3611809740eaab648e3064bcffd0fe").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table07a53751339a3548fc884e2985a3091db3bc').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table07a53751339a3548fc884e2985a3091db3bc').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TU_MODEL_WORKER&isbpm=Y&dbid=2c908c5a89d2a7eb0189d317446d078e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5a89d3f77b0189d4365b1a15ee',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table07a53751339a3548fc884e2985a3091db3bc').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton9283ce3611809740eaab648e3064bcffd0fe").hide();
;});	 
