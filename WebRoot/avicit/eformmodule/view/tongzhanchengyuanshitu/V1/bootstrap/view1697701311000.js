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

function redraw2c908c5a89520e1701895214578a0640(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a89520e1701895214578a0640").width();
		var win_height = $("#2c908c5a89520e1701895214578a0640").height();
		$('#2c908c5a89520e1701895214578a0640').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a89520e1701895214578a0640').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a89520e1701895214578a0640").width();
	setTimeout(function(){redraw2c908c5a89520e1701895214578a0640(win_width);},500);
});
var tableed75d0fb43868e450b090efd8e459dadbc42KeyWordIn = "";    
var tableed75d0fb43868e450b090efd8e459dadbc42ParamIn = "";    
var tableed75d0fb43868e450b090efd8e459dadbc42SelectRow = {     
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
var tableed75d0fb43868e450b090efd8e459dadbc42LoadComplete = {     
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
var tableed75d0fb43868e450b090efd8e459dadbc42BeforeEditCell = {        
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
var tableed75d0fb43868e450b090efd8e459dadbc42OndblClickRow = {     
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
var tableed75d0fb43868e450b090efd8e459dadbc42OnRightClickRow = {     
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
var tableed75d0fb43868e450b090efd8e459dadbc42GridComplete = {     
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
var tableed75d0fb43868e450b090efd8e459dadbc42OnCellSelect = {     
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
var tableed75d0fb43868e450b090efd8e459dadbc42LoadBeforeSend = {        
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
function tableed75d0fb43868e450b090efd8e459dadbc42Reload(pid){
	var _isInvalid = true;
	$("#tableed75d0fb43868e450b090efd8e459dadbc42").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableed75d0fb43868e450b090efd8e459dadbc42Pid = pid;
		}
		return false;
	}
	window.tableed75d0fb43868e450b090efd8e459dadbc42Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableed75d0fb43868e450b090efd8e459dadbc42').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableed75d0fb43868e450b090efd8e459dadbc42TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableed75d0fb43868e450b090efd8e459dadbc42Pid == 'undefined' || window.tableed75d0fb43868e450b090efd8e459dadbc42Pid!=null){
tableed75d0fb43868e450b090efd8e459dadbc42Reload(window.tableed75d0fb43868e450b090efd8e459dadbc42Pid);
}
}
var tablecmtableed75d0fb43868e450b090efd8e459dadbc42 = [];
var uniqueColtableed75d0fb43868e450b090efd8e459dadbc42 = [];
var uniqueColTitletableed75d0fb43868e450b090efd8e459dadbc42 = [];
var defaultValuetableed75d0fb43868e450b090efd8e459dadbc42 = {};
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '编号',hidden:true, name: 'NEMBER',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '员工号',hidden:false, name: 'EMPLOYEEID',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '党组织名称',hidden:false, name: 'PO_NAME',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '姓名',hidden:false, name: 'UFMNAME',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '性别',hidden:true, name: 'GENDER',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '性别',hidden:false, name: 'GENDERName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '出生年月', formatter:format, hidden:false, name: 'BIRTHDATE',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '职务',hidden:false, name: 'DUTIES',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '职称',hidden:false, name: 'USER_TITLE',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '全日制学历',hidden:true, name: 'FUL_EDUCATION',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '全日制学历',hidden:false, name: 'FUL_EDUCATIONName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '非全日制学历',hidden:true, name: 'PART_EDUCATION',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '非全日制学历',hidden:false, name: 'PART_EDUCATIONName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '政治面貌',hidden:true, name: 'POLITICAL_OUTLOOK',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '政治面貌',hidden:false, name: 'POLITICAL_OUTLOOKName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '统战身份',hidden:true, name: 'UF_IDENTITY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '统战身份',hidden:false, name: 'UF_IDENTITYName',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '居留国家',hidden:false, name: 'RESIDENCE_COUNTRY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '居留年限',hidden:false, name: 'RESIDENCE_YEAR',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '居留原因',hidden:false, name: 'RESIDENCE_REASON',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否香港、澳门同胞',hidden:true, name: 'HO_COMPATRIOTS',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否香港、澳门同胞',hidden:false, name: 'HO_COMPATRIOTSName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否香港、澳门眷属',hidden:true, name: 'HO_DEPENDENTS',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否香港、澳门眷属',hidden:false, name: 'HO_DEPENDENTSName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否台湾同胞',hidden:true, name: 'TAIWAN_COMPATRIOTS',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否台湾同胞',hidden:false, name: 'TAIWAN_COMPATRIOTSName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否台湾同胞在大陆亲属',hidden:true, name: 'TAIWAN_RELATIVES',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否台湾同胞在大陆亲属',hidden:false, name: 'TAIWAN_RELATIVESName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否华侨、归侨、侨眷',hidden:true, name: 'RO_CHINESE',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '是否华侨、归侨、侨眷',hidden:false, name: 'RO_CHINESEName',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '(眷属)侨居国',hidden:false, name: 'HOST_COUNTRY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '在民主党派、人大、政协等任职情况',hidden:false, name: 'PARTY_REPRE_POSITIONS',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '手机号码',hidden:false, name: 'PHONE_NUMBER',align:'right',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '部门名称',hidden:true, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({ label: '部门名称',hidden:false, name: 'DEPT_NAMEName',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '全日制专业',hidden:true, name: 'FUL_SPECIALITY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '全日制毕业学校',hidden:true, name: 'FUL_GRADUATION',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '非全日制毕业学校',hidden:true, name: 'PART_GRADUATION',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '非全日制专业',hidden:true, name: 'PART_SPECIALITY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '宗教信仰',hidden:true, name: 'RELIGIOUS_BELIER',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段1', formatter:format, hidden:true, name: 'DATA_1',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段2',hidden:true, name: 'DATA_2',align:'right',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段3',hidden:true, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段5',hidden:true, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段6',hidden:true, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段7',hidden:true, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '备用字段8',hidden:true, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableed75d0fb43868e450b090efd8e459dadbc42.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestableed75d0fb43868e450b090efd8e459dadbc42 = []; 
searchNamestableed75d0fb43868e450b090efd8e459dadbc42.push('NEMBER');
searchNamestableed75d0fb43868e450b090efd8e459dadbc42.push('UFMNAME');
$('#keyWordtableed75d0fb43868e450b090efd8e459dadbc42').attr('placeholder', '请输入编号、姓名查询');
function searchDataKeyWordtableed75d0fb43868e450b090efd8e459dadbc42(){
	var keyWord = $.trim($("#keyWordtableed75d0fb43868e450b090efd8e459dadbc42").val()); 
 if($('#keyWordtableed75d0fb43868e450b090efd8e459dadbc42').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestableed75d0fb43868e450b090efd8e459dadbc42.length;i++){ 
		var name = searchNamestableed75d0fb43868e450b090efd8e459dadbc42[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tableed75d0fb43868e450b090efd8e459dadbc42KeyWordIn=JSON.stringify(param);
tableed75d0fb43868e450b090efd8e459dadbc42ParamIn="";
	$('#tableed75d0fb43868e450b090efd8e459dadbc42').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtableed75d0fb43868e450b090efd8e459dadbc42').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtableed75d0fb43868e450b090efd8e459dadbc42();
	}
});
$('#keyWordBttableed75d0fb43868e450b090efd8e459dadbc42').bind('click', function() {
		searchDataKeyWordtableed75d0fb43868e450b090efd8e459dadbc42();
});
;$(document).ready(function(){ 

$("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a89520e1701895214578a0640/tableed75d0fb43868e450b090efd8e459dadbc42/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableed75d0fb43868e450b090efd8e459dadbc42,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableed75d0fb43868e450b090efd8e459dadbc42SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableed75d0fb43868e450b090efd8e459dadbc42LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableed75d0fb43868e450b090efd8e459dadbc42OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableed75d0fb43868e450b090efd8e459dadbc42OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableed75d0fb43868e450b090efd8e459dadbc42GridComplete.exec();
				    setTimeout(function(){var height = $("#tableed75d0fb43868e450b090efd8e459dadbc42").closest('.ui-jqgrid-bdiv').height();
					$("#tableed75d0fb43868e450b090efd8e459dadbc42norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableed75d0fb43868e450b090efd8e459dadbc42norecords img").css("width","120px");
                 }else{
					    $("#tableed75d0fb43868e450b090efd8e459dadbc42norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableed75d0fb43868e450b090efd8e459dadbc42BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableed75d0fb43868e450b090efd8e459dadbc42OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableed75d0fb43868e450b090efd8e459dadbc42norecords").hide();
		   	    $("#Pagertableed75d0fb43868e450b090efd8e459dadbc42_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableed75d0fb43868e450b090efd8e459dadbc42norecords").html() == null) {
						$("#tableed75d0fb43868e450b090efd8e459dadbc42").parent().append("<div class='no_data' id='tableed75d0fb43868e450b090efd8e459dadbc42norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableed75d0fb43868e450b090efd8e459dadbc42norecords").show();
					$("#Pagertableed75d0fb43868e450b090efd8e459dadbc42_left").css("display", "none");
				}
tableed75d0fb43868e450b090efd8e459dadbc42LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableed75d0fb43868e450b090efd8e459dadbc42"
    });
tableed75d0fb43868e450b090efd8e459dadbc42Reload();
$("#t_tableed75d0fb43868e450b090efd8e459dadbc42").append($("#tableToolbartableed75d0fb43868e450b090efd8e459dadbc42"));function searchDatatableed75d0fb43868e450b090efd8e459dadbc42(){
 var para = serializeObjectForEform($("#searchformtableed75d0fb43868e450b090efd8e459dadbc42"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tableed75d0fb43868e450b090efd8e459dadbc42KeyWordIn="";
tableed75d0fb43868e450b090efd8e459dadbc42ParamIn=JSON.stringify(para);
	$('#tableed75d0fb43868e450b090efd8e459dadbc42').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtableed75d0fb43868e450b090efd8e459dadbc42").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltableed75d0fb43868e450b090efd8e459dadbc42').bind('click',function(){
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
	content: $('#searchDialogtableed75d0fb43868e450b090efd8e459dadbc42'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatableed75d0fb43868e450b090efd8e459dadbc42(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtableed75d0fb43868e450b090efd8e459dadbc42")); searchDatatableed75d0fb43868e450b090efd8e459dadbc42(); layer.close(index); return false;
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
$("#tableToolbarButton1928b8a08942bf41f3b9600e7ae319ef7632").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ufmInfoExcelImport', callBackFunc: function () {                           	
		$('#tableed75d0fb43868e450b090efd8e459dadbc42').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton5dc1f4b52d56144ee6985f2e6322ef1b5bc8').bind('click',function() {                           
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
	        var colModels =$('#tableed75d0fb43868e450b090efd8e459dadbc42').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tableed75d0fb43868e450b090efd8e459dadbc42KeyWordIn;                          
	        expSearchParams.param = tableed75d0fb43868e450b090efd8e459dadbc42ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='统战成员信息表';                             
	        expSearchParams.viewid='2c908c5a89520e1701895214578a0640';                                   
	        expSearchParams.tableid='tableed75d0fb43868e450b090efd8e459dadbc42';                                 
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
$("#tableToolbarButtonc650a86fff5ff74835e8538e5b05f1c50188").bind('click',function(event){var url = "platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a896175160189618a328a0662&amp;grid=table92f3ebe4d1b65d4e948886581ea60a1dff99"
layer.open({
	    type: 2,
	    area: ['100%', '100%'],
	    title: '发起流程',
	    skin: 'bs-modal', 
        maxmin: true, 
				    content : url 
	});});
$("#tableToolbarButtona8e4df9cea491d4610784aaf69538716587f").bind('click',function(event){var ids = $("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid('getGridParam', 'selarrrow');
if(ids.length>1){
alert("请选择一条提示记录");
}
if(ids.length==1){
		for(var i = 0; i < ids.length; i++){
			var row = $("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid('getRowData', ids[i]);
                        window.deleterow=row;
		}
var url = "platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a89617516018961e8dbf21301&amp;grid=table92f3ebe4d1b65d4e948886581ea60a1dff99"
layer.open({
	    type: 2,
	    area: ['100%', '100%'],
	    title: '发起流程',
	    skin: 'bs-modal', 
        maxmin: true, 
				    content : url 
	});

}});
$("#tableToolbarButton3ef6c48117c95841f0081e6c985ac8697a7d").bind('click',function(event){var ids = $("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid('getGridParam', 'selarrrow');
if(ids.length>1){
alert("请选择一条提示记录");
}
if(ids.length==1){
		for(var i = 0; i < ids.length; i++){
			var row = $("#tableed75d0fb43868e450b090efd8e459dadbc42").jqGrid('getRowData', ids[i]);
                        window.deleterow=row;
		}
var url = "platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a896175160189618cd0e206be&amp;grid=table92f3ebe4d1b65d4e948886581ea60a1dff99"
layer.open({
	    type: 2,
	    area: ['100%', '100%'],
	    title: '发起流程',
	    skin: 'bs-modal', 
        maxmin: true, 
				    content : url 
	});

}});
;});	 
