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

function redraw2c908c5a89d849d50189d8ffe6591255(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a89d849d50189d8ffe6591255").width();
		var win_height = $("#2c908c5a89d849d50189d8ffe6591255").height();
		$('#2c908c5a89d849d50189d8ffe6591255').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a89d849d50189d8ffe6591255').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a89d849d50189d8ffe6591255").width();
	setTimeout(function(){redraw2c908c5a89d849d50189d8ffe6591255(win_width);},500);
});
var table3031ec233f1d6e4befc913cc78ae55b6757fKeyWordIn = "";    
var table3031ec233f1d6e4befc913cc78ae55b6757fParamIn = "";    
var table3031ec233f1d6e4befc913cc78ae55b6757fSelectRow = {     
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
var table3031ec233f1d6e4befc913cc78ae55b6757fLoadComplete = {     
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
var table3031ec233f1d6e4befc913cc78ae55b6757fBeforeEditCell = {        
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
var table3031ec233f1d6e4befc913cc78ae55b6757fOndblClickRow = {     
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
var table3031ec233f1d6e4befc913cc78ae55b6757fOnRightClickRow = {     
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
var table3031ec233f1d6e4befc913cc78ae55b6757fGridComplete = {     
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
var table3031ec233f1d6e4befc913cc78ae55b6757fOnCellSelect = {     
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
var table3031ec233f1d6e4befc913cc78ae55b6757fLoadBeforeSend = {        
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
function table3031ec233f1d6e4befc913cc78ae55b6757fReload(pid){
	var _isInvalid = true;
	$("#table3031ec233f1d6e4befc913cc78ae55b6757f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3031ec233f1d6e4befc913cc78ae55b6757fPid = pid;
		}
		return false;
	}
	window.table3031ec233f1d6e4befc913cc78ae55b6757fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table3031ec233f1d6e4befc913cc78ae55b6757fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3031ec233f1d6e4befc913cc78ae55b6757fPid == 'undefined' || window.table3031ec233f1d6e4befc913cc78ae55b6757fPid!=null){
table3031ec233f1d6e4befc913cc78ae55b6757fReload(window.table3031ec233f1d6e4befc913cc78ae55b6757fPid);
}
}
var tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f = [];
var uniqueColtable3031ec233f1d6e4befc913cc78ae55b6757f = [];
var uniqueColTitletable3031ec233f1d6e4befc913cc78ae55b6757f = [];
var defaultValuetable3031ec233f1d6e4befc913cc78ae55b6757f = {};
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '申请单位',hidden:true, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '申请单位ID',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '申请日期',hidden:true, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '申请人',hidden:true, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '申请人_ID',hidden:true, name: 'REQUEST_USER_ID',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '表单编号',hidden:true, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '联系方式',hidden:true, name: 'TEL',align:'right',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '新增荣誉层级',hidden:true, name: 'MODEL_LEVEL',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '荣誉名称',hidden:true, name: 'HONOR_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '荣誉颁发文件名',hidden:true, name: 'HONOR_FILE_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '荣誉颁发机构',hidden:true, name: 'HONOR_ORGAN',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '荣誉颁发文件及证书照片附件',hidden:true, name: 'ANNEX',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '劳模姓名',hidden:false, name: 'MODEL_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '一级部门名称',hidden:true, name: 'DEPT_ONE_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '一级部门',hidden:true, name: 'DEPT_ONE_ID',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '一级部门',hidden:false, name: 'DEPT_ONE_IDName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '二级部门名称',hidden:true, name: 'DEPT_TWO_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '二级部门',hidden:true, name: 'DEPT_TWO_ID',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '二级部门',hidden:false, name: 'DEPT_TWO_IDName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '三级部门名称',hidden:true, name: 'DEPT_THREE_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '三级部门',hidden:true, name: 'DEPT_THREE_ID',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '三级部门',hidden:false, name: 'DEPT_THREE_IDName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '岗位名称',hidden:false, name: 'POST_NAME',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '年龄',hidden:true, name: 'SEX',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '民族',hidden:true, name: 'NATION',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '民族',hidden:false, name: 'NATIONName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '出生日期', formatter:format, hidden:false, name: 'BIRTHDAY',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '政治面貌',hidden:true, name: 'POLITICAL_OUTLOOK',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '政治面貌',hidden:false, name: 'POLITICAL_OUTLOOKName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '参加工作日期', formatter:format, hidden:false, name: 'WORK_DATE',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '学历',hidden:true, name: 'EDUCATION_LEVEL',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '学历',hidden:false, name: 'EDUCATION_LEVELName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '专业',hidden:false, name: 'SPECIALITY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '职称',hidden:false, name: 'PROFESSIONAL_RANK',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '技能等级',hidden:false, name: 'SKILL_LEVEL',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '聘任职级',hidden:false, name: 'APPOINTMENT_LEVEL',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '发动机分类',hidden:true, name: 'CATEGORY_TYPE',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({ label: '发动机分类',hidden:false, name: 'CATEGORY_TYPEName',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '国家级荣誉',hidden:false, name: 'MODEL_COUNTRY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '省部级荣誉',hidden:false, name: 'MODEL_ECONOMIZE',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '地市级荣誉',hidden:false, name: 'MODEL_CITY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '公司级荣誉',hidden:false, name: 'MODEL_COMPANY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_1',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_2',hidden:true, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_5',hidden:true, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_6',hidden:true, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_7',hidden:true, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_8',hidden:true, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_9',hidden:true, name: 'DATA_9',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_10',hidden:true, name: 'DATA_10',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_11', formatter:format, hidden:true, name: 'DATA_11',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_12',hidden:true, name: 'DATA_12',align:'right',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_13',hidden:true, name: 'DATA_13',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: 'DATA_14',hidden:true, name: 'DATA_14',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '获奖年月', formatter:format, hidden:true, name: 'HONOR_DATE',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table3031ec233f1d6e4befc913cc78ae55b6757f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a89d849d50189d8ffe6591255/table3031ec233f1d6e4befc913cc78ae55b6757f/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable3031ec233f1d6e4befc913cc78ae55b6757f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3031ec233f1d6e4befc913cc78ae55b6757fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3031ec233f1d6e4befc913cc78ae55b6757fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3031ec233f1d6e4befc913cc78ae55b6757fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3031ec233f1d6e4befc913cc78ae55b6757fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3031ec233f1d6e4befc913cc78ae55b6757fGridComplete.exec();
				    setTimeout(function(){var height = $("#table3031ec233f1d6e4befc913cc78ae55b6757f").closest('.ui-jqgrid-bdiv').height();
					$("#table3031ec233f1d6e4befc913cc78ae55b6757fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3031ec233f1d6e4befc913cc78ae55b6757fnorecords img").css("width","120px");
                 }else{
					    $("#table3031ec233f1d6e4befc913cc78ae55b6757fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3031ec233f1d6e4befc913cc78ae55b6757fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3031ec233f1d6e4befc913cc78ae55b6757fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3031ec233f1d6e4befc913cc78ae55b6757fnorecords").hide();
		   	    $("#Pagertable3031ec233f1d6e4befc913cc78ae55b6757f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3031ec233f1d6e4befc913cc78ae55b6757f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3031ec233f1d6e4befc913cc78ae55b6757f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3031ec233f1d6e4befc913cc78ae55b6757fnorecords").html() == null) {
						$("#table3031ec233f1d6e4befc913cc78ae55b6757f").parent().append("<div class='no_data' id='table3031ec233f1d6e4befc913cc78ae55b6757fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3031ec233f1d6e4befc913cc78ae55b6757fnorecords").show();
					$("#Pagertable3031ec233f1d6e4befc913cc78ae55b6757f_left").css("display", "none");
				}
table3031ec233f1d6e4befc913cc78ae55b6757fLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3031ec233f1d6e4befc913cc78ae55b6757f"
    });
table3031ec233f1d6e4befc913cc78ae55b6757fReload();
$("#t_table3031ec233f1d6e4befc913cc78ae55b6757f").append($("#tableToolbartable3031ec233f1d6e4befc913cc78ae55b6757f"));$("#tableToolbarButton5ab3fc74c567434777d841a2ad2fe838621e").bind('click',function() {                                                                       
	if (pageParams.hasOwnProperty('isInsert') && pageParams.isInsert) {              
		layer.alert('请先保存表单！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		 });                                                                                         
	} else {                                                                                  
                                                                            
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '添加',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a89d849d50189d8e8fb5b0f7b&grid=table3031ec233f1d6e4befc913cc78ae55b6757f',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton8cc6c6d8f89fec4aa618147169ad0aa02a7e").bind('click',function() {                                                                                       
	var ids = $('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a89d849d50189d8e8fb5b0f7b&id=' + rowData.ID+'&grid=table3031ec233f1d6e4befc913cc78ae55b6757f',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton2b938b1323302e40ccd89b6dcc067bee8725").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TU_MODEL_WORKER&isbpm=N&dbid=2c908c5a89d2a7eb0189d317446d078e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5a89d849d50189d8ffe6591255',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table3031ec233f1d6e4befc913cc78ae55b6757f').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton3531a11cbd7cad4f19084b98998042f80ec7').bind('click',function() {                           
	layer.open({                         
	    type : 2,                        
	    area : ['400px', '300px'],       
	    title: '导出',                   
	    skin: 'bs-modal',                
	    maxmin: false,                   
	    btn: ['导出', '取消'],            
	    content: 'avicit/platform6/eform/bmpsformdatatool/exportFileType.jsp',       
	    yes:function(index, layero){                                                 
	        var iframeWin = layero.find('iframe')[0].contentWindow;                  
	        var fileType = iframeWin.$("input[name='exportType']:checked").val();  
	        var layout = iframeWin.$('#direction :selected').val();                  
	        var showColModels = new Array();                                         
	        var blockFields = new Array();                                           
	        var colModels =$('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('getGridParam','colModel');   
	        for(var i = 0; i < colModels.length; i++){                               
	            if(colModels[i].hidden == false && colModels[i].name != 'cb'){       
	                showColModels.push(colModels[i]);                                
	            }else{                                                               
	                blockFields.push(colModels[i].name);                             
	            }                                                                    
	        }                                                                        
	        var dataGridFields = JSON.stringify(colModels);                          
	        expSearchParams = {};                                                    
	        expSearchParams.fileType = fileType;                                     
	        expSearchParams.dataGridFields = dataGridFields;                         
	        expSearchParams.keyWord = table3031ec233f1d6e4befc913cc78ae55b6757fKeyWordIn;                          
	        expSearchParams.param = table3031ec233f1d6e4befc913cc78ae55b6757fParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会劳模人员信息';                             
	        expSearchParams.viewid='2c908c5a89d849d50189d8ffe6591255';                                   
	        expSearchParams.tableid='table3031ec233f1d6e4befc913cc78ae55b6757f';                                 
	        expSearchParams.isbpm='N';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/V1'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
$("#tableToolbarButton781d92ad594b1e434c08ce25ff7859b56671").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'modelWorkerMbImport', callBackFunc: function () {                           	
		$('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
