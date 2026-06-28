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

function redraw948e83e37f9bac42017fa69046e428ba(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e37f9bac42017fa69046e428ba").width();
		var win_height = $("#948e83e37f9bac42017fa69046e428ba").height();
		$('#948e83e37f9bac42017fa69046e428ba').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e37f9bac42017fa69046e428ba').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e37f9bac42017fa69046e428ba").width();
	setTimeout(function(){redraw948e83e37f9bac42017fa69046e428ba(win_width);},500);
});
var table6172687347eeeb4e20f97bf8d82a2db12a56KeyWordIn = "";    
var table6172687347eeeb4e20f97bf8d82a2db12a56ParamIn = "";    
var table6172687347eeeb4e20f97bf8d82a2db12a56SelectRow = {     
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
var table6172687347eeeb4e20f97bf8d82a2db12a56LoadComplete = {     
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
var table6172687347eeeb4e20f97bf8d82a2db12a56BeforeEditCell = {        
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
var table6172687347eeeb4e20f97bf8d82a2db12a56OndblClickRow = {     
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
var table6172687347eeeb4e20f97bf8d82a2db12a56OnRightClickRow = {     
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
var table6172687347eeeb4e20f97bf8d82a2db12a56GridComplete = {     
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
var table6172687347eeeb4e20f97bf8d82a2db12a56OnCellSelect = {     
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
var table6172687347eeeb4e20f97bf8d82a2db12a56LoadBeforeSend = {        
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
function table6172687347eeeb4e20f97bf8d82a2db12a56Reload(pid){
	var _isInvalid = true;
	$("#table6172687347eeeb4e20f97bf8d82a2db12a56").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6172687347eeeb4e20f97bf8d82a2db12a56Pid = pid;
		}
		return false;
	}
	window.table6172687347eeeb4e20f97bf8d82a2db12a56Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6172687347eeeb4e20f97bf8d82a2db12a56').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table6172687347eeeb4e20f97bf8d82a2db12a56TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6172687347eeeb4e20f97bf8d82a2db12a56Pid == 'undefined' || window.table6172687347eeeb4e20f97bf8d82a2db12a56Pid!=null){
table6172687347eeeb4e20f97bf8d82a2db12a56Reload(window.table6172687347eeeb4e20f97bf8d82a2db12a56Pid);
}
}
var tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56 = [];
var uniqueColtable6172687347eeeb4e20f97bf8d82a2db12a56 = [];
var uniqueColTitletable6172687347eeeb4e20f97bf8d82a2db12a56 = [];
var defaultValuetable6172687347eeeb4e20f97bf8d82a2db12a56 = {};
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '姓名ID',hidden:false, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '部门ID',hidden:false, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '党支部ID',hidden:false, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '性别',hidden:false, name: 'SEX',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '出行年月', formatter:format, hidden:false, name: 'BIRTHDAY',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '籍贯',hidden:false, name: 'ORIGN',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '出生地',hidden:false, name: 'BIRTH_PLACE',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '教育类别',hidden:false, name: 'EDUCATION_SECTOR',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '入党时间', formatter:format, hidden:false, name: 'JOIN_PARTY',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '文化程度',hidden:false, name: 'EDUCATION_LEVEL',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '身份类别',hidden:false, name: 'CATEGORY',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '加入中共组织类型',hidden:false, name: 'JOINZG_TYPE',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '转正日期', formatter:format, hidden:false, name: 'REGULAR_DATE',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '转正类别',hidden:false, name: 'REGULAR_TYPE',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '入党单位',hidden:false, name: 'JOINPARTY_DEPT',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '类别',hidden:false, name: 'PARTY_TYPE',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '介绍人',hidden:false, name: 'INTRODUCER',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '毕业时间', formatter:format, hidden:false, name: 'GRADUATION_TIME',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '参加工作时间', formatter:format, hidden:false, name: 'WORK_TIME',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '职务',hidden:false, name: 'POST',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '职称',hidden:false, name: 'PROFESSIONAL_RANK',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '进入支部类型',hidden:false, name: 'JOINBRANCH_TYPE',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '身份证号',hidden:false, name: 'IDCARD',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '家庭地址',hidden:false, name: 'ADDRESS',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '联系电话',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '户口地址',hidden:false, name: 'REGISTER_ADDRESS',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '党费',hidden:false, name: 'PARTY_MONEY',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '在职/离职',hidden:false, name: 'ONOFF_JOB',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '党支部职务',hidden:false, name: 'BRANCH_POST',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'CREATED_DEPT',hidden:false, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_01',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_03',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_04',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_06',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_07',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_08',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_09',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_10',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段', formatter:format, hidden:false, name: 'ATTRIBUTE_11',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_12',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_13',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_14',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段', formatter:format, hidden:false, name: 'ATTRIBUTE_15',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_16',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_17',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_18',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_19',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '扩展字段',hidden:false, name: 'ATTRIBUTE_20',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: '是否有效',hidden:false, name: 'STATUS',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'CREATED_BY',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'CREATION_DATE', formatter:format, hidden:true, name: 'CREATION_DATE',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'LAST_UPDATED_BY',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'LAST_UPDATE_DATE', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'LAST_UPDATE_IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'VERSION',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56.push({label: 'ORG_IDENTITY',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table6172687347eeeb4e20f97bf8d82a2db12a56").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e37f9bac42017fa69046e428ba/table6172687347eeeb4e20f97bf8d82a2db12a56/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6172687347eeeb4e20f97bf8d82a2db12a56,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6172687347eeeb4e20f97bf8d82a2db12a56SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6172687347eeeb4e20f97bf8d82a2db12a56LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6172687347eeeb4e20f97bf8d82a2db12a56OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6172687347eeeb4e20f97bf8d82a2db12a56OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6172687347eeeb4e20f97bf8d82a2db12a56GridComplete.exec();
				    setTimeout(function(){var height = $("#table6172687347eeeb4e20f97bf8d82a2db12a56").closest('.ui-jqgrid-bdiv').height();
					$("#table6172687347eeeb4e20f97bf8d82a2db12a56norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6172687347eeeb4e20f97bf8d82a2db12a56norecords img").css("width","120px");
                 }else{
					    $("#table6172687347eeeb4e20f97bf8d82a2db12a56norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6172687347eeeb4e20f97bf8d82a2db12a56BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6172687347eeeb4e20f97bf8d82a2db12a56OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6172687347eeeb4e20f97bf8d82a2db12a56norecords").hide();
		   	    $("#Pagertable6172687347eeeb4e20f97bf8d82a2db12a56_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6172687347eeeb4e20f97bf8d82a2db12a56").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6172687347eeeb4e20f97bf8d82a2db12a56").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6172687347eeeb4e20f97bf8d82a2db12a56norecords").html() == null) {
						$("#table6172687347eeeb4e20f97bf8d82a2db12a56").parent().append("<div class='no_data' id='table6172687347eeeb4e20f97bf8d82a2db12a56norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6172687347eeeb4e20f97bf8d82a2db12a56norecords").show();
					$("#Pagertable6172687347eeeb4e20f97bf8d82a2db12a56_left").css("display", "none");
				}
table6172687347eeeb4e20f97bf8d82a2db12a56LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6172687347eeeb4e20f97bf8d82a2db12a56"
    });
table6172687347eeeb4e20f97bf8d82a2db12a56Reload();
$("#t_table6172687347eeeb4e20f97bf8d82a2db12a56").append($("#tableToolbartable6172687347eeeb4e20f97bf8d82a2db12a56"));;});	 
