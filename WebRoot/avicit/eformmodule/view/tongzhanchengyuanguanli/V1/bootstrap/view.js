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

function redraw2c908c5a894821f6018948be75880b98(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a894821f6018948be75880b98").width();
		var win_height = $("#2c908c5a894821f6018948be75880b98").height();
		$('#2c908c5a894821f6018948be75880b98').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a894821f6018948be75880b98').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a894821f6018948be75880b98").width();
	setTimeout(function(){redraw2c908c5a894821f6018948be75880b98(win_width);},500);
});
var table9251737cc88840449ae92e9b1e5dfeab72baKeyWordIn = "";    
var table9251737cc88840449ae92e9b1e5dfeab72baParamIn = "";    
var table9251737cc88840449ae92e9b1e5dfeab72baSelectRow = {     
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
var table9251737cc88840449ae92e9b1e5dfeab72baLoadComplete = {     
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
var table9251737cc88840449ae92e9b1e5dfeab72baBeforeEditCell = {        
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
var table9251737cc88840449ae92e9b1e5dfeab72baOndblClickRow = {     
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
var table9251737cc88840449ae92e9b1e5dfeab72baOnRightClickRow = {     
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
var table9251737cc88840449ae92e9b1e5dfeab72baGridComplete = {     
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
var table9251737cc88840449ae92e9b1e5dfeab72baOnCellSelect = {     
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
var table9251737cc88840449ae92e9b1e5dfeab72baLoadBeforeSend = {        
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
function table9251737cc88840449ae92e9b1e5dfeab72baReload(pid){
	var _isInvalid = true;
	$("#table9251737cc88840449ae92e9b1e5dfeab72ba").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table9251737cc88840449ae92e9b1e5dfeab72baPid = pid;
		}
		return false;
	}
	window.table9251737cc88840449ae92e9b1e5dfeab72baPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table9251737cc88840449ae92e9b1e5dfeab72ba').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table9251737cc88840449ae92e9b1e5dfeab72baTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table9251737cc88840449ae92e9b1e5dfeab72baPid == 'undefined' || window.table9251737cc88840449ae92e9b1e5dfeab72baPid!=null){
table9251737cc88840449ae92e9b1e5dfeab72baReload(window.table9251737cc88840449ae92e9b1e5dfeab72baPid);
}
}
var tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba = [];
var uniqueColtable9251737cc88840449ae92e9b1e5dfeab72ba = [];
var uniqueColTitletable9251737cc88840449ae92e9b1e5dfeab72ba = [];
var defaultValuetable9251737cc88840449ae92e9b1e5dfeab72ba = {};
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '编号',hidden:false, name: 'NEMBER',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '党组织名称',hidden:false, name: 'PO_NAME',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '姓名',hidden:false, name: 'UFMNAME',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '性别',hidden:false, name: 'GENDER',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '出生年月', formatter:format, hidden:false, name: 'BIRTHDATE',align:'center',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '职务',hidden:false, name: 'DUTIES',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '职称',hidden:false, name: 'USER_TITLE',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '全日制学历',hidden:false, name: 'FUL_EDUCATION',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '非全日制学历',hidden:false, name: 'PART_EDUCATION',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '政治面貌',hidden:false, name: 'POLITICAL_OUTLOOK',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '统战身份',hidden:false, name: 'UF_IDENTITY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '宗教信仰',hidden:false, name: 'RELIGIOUS_BELIER',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '居留国家',hidden:false, name: 'RESIDENCE_COUNTRY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '居留年限',hidden:false, name: 'RESIDENCE_YEAR',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '居留原因',hidden:false, name: 'RESIDENCE_REASON',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '是否香港、澳门同胞',hidden:false, name: 'HO_COMPATRIOTS',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '是否香港、澳门眷属',hidden:false, name: 'HO_DEPENDENTS',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '是否台湾同胞',hidden:false, name: 'TAIWAN_COMPATRIOTS',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '是否台湾同胞在大陆亲属',hidden:false, name: 'TAIWAN_RELATIVES',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '是否华侨、归侨、侨眷',hidden:false, name: 'RO_CHINESE',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '(眷属)侨居国',hidden:false, name: 'HOST_COUNTRY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '在民主党派、人大、政协等任职情况',hidden:false, name: 'PARTY_REPRE_POSITIONS',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '手机号码',hidden:false, name: 'PHONE_NUMBER',align:'right',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '全日制毕业学校',hidden:true, name: 'FUL_GRADUATION',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '全日制专业',hidden:true, name: 'FUL_SPECIALITY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '非全日制毕业学校',hidden:true, name: 'PART_GRADUATION',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '非全日制专业',hidden:true, name: 'PART_SPECIALITY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段3',hidden:true, name: 'DATA_3',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段4',hidden:true, name: 'DATA_4',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段5',hidden:true, name: 'DATA_5',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段6',hidden:true, name: 'DATA_6',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段7',hidden:true, name: 'DATA_7',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段1', formatter:format, hidden:true, name: 'DATA_1',align:'center',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段2',hidden:true, name: 'DATA_2',align:'right',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '备用字段8',hidden:true, name: 'DATA_8',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '员工号',hidden:true, name: 'EMPLOYEEID',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '部门名称',hidden:true, name: 'DEPT_NAME',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '120px'});
tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '120px'});
	var searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba = []; 
searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba.push('NEMBER');
searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba.push('EMPLOYEEID');
searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba.push('UFMNAME');
searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba.push('DUTIES');
$('#keyWordtable9251737cc88840449ae92e9b1e5dfeab72ba').attr('placeholder', '请输入编号、员工号、姓名、职务查询');
function searchDataKeyWordtable9251737cc88840449ae92e9b1e5dfeab72ba(){
	var keyWord = $.trim($("#keyWordtable9251737cc88840449ae92e9b1e5dfeab72ba").val()); 
 if($('#keyWordtable9251737cc88840449ae92e9b1e5dfeab72ba').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba.length;i++){ 
		var name = searchNamestable9251737cc88840449ae92e9b1e5dfeab72ba[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table9251737cc88840449ae92e9b1e5dfeab72baKeyWordIn=JSON.stringify(param);
table9251737cc88840449ae92e9b1e5dfeab72baParamIn="";
	$('#table9251737cc88840449ae92e9b1e5dfeab72ba').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable9251737cc88840449ae92e9b1e5dfeab72ba').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable9251737cc88840449ae92e9b1e5dfeab72ba();
	}
});
$('#keyWordBttable9251737cc88840449ae92e9b1e5dfeab72ba').bind('click', function() {
		searchDataKeyWordtable9251737cc88840449ae92e9b1e5dfeab72ba();
});
;$(document).ready(function(){ 

$("#table9251737cc88840449ae92e9b1e5dfeab72ba").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a894821f6018948be75880b98/table9251737cc88840449ae92e9b1e5dfeab72ba/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable9251737cc88840449ae92e9b1e5dfeab72ba,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table9251737cc88840449ae92e9b1e5dfeab72baSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table9251737cc88840449ae92e9b1e5dfeab72baLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table9251737cc88840449ae92e9b1e5dfeab72baOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table9251737cc88840449ae92e9b1e5dfeab72baOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table9251737cc88840449ae92e9b1e5dfeab72baGridComplete.exec();
				    setTimeout(function(){var height = $("#table9251737cc88840449ae92e9b1e5dfeab72ba").closest('.ui-jqgrid-bdiv').height();
					$("#table9251737cc88840449ae92e9b1e5dfeab72banorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table9251737cc88840449ae92e9b1e5dfeab72banorecords img").css("width","120px");
                 }else{
					    $("#table9251737cc88840449ae92e9b1e5dfeab72banorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table9251737cc88840449ae92e9b1e5dfeab72baBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table9251737cc88840449ae92e9b1e5dfeab72baOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table9251737cc88840449ae92e9b1e5dfeab72banorecords").hide();
		   	    $("#Pagertable9251737cc88840449ae92e9b1e5dfeab72ba_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table9251737cc88840449ae92e9b1e5dfeab72ba").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table9251737cc88840449ae92e9b1e5dfeab72ba").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table9251737cc88840449ae92e9b1e5dfeab72banorecords").html() == null) {
						$("#table9251737cc88840449ae92e9b1e5dfeab72ba").parent().append("<div class='no_data' id='table9251737cc88840449ae92e9b1e5dfeab72banorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table9251737cc88840449ae92e9b1e5dfeab72banorecords").show();
					$("#Pagertable9251737cc88840449ae92e9b1e5dfeab72ba_left").css("display", "none");
				}
table9251737cc88840449ae92e9b1e5dfeab72baLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable9251737cc88840449ae92e9b1e5dfeab72ba"
    });
table9251737cc88840449ae92e9b1e5dfeab72baReload();
$("#t_table9251737cc88840449ae92e9b1e5dfeab72ba").append($("#tableToolbartable9251737cc88840449ae92e9b1e5dfeab72ba"));function searchDatatable9251737cc88840449ae92e9b1e5dfeab72ba(){
 var para = serializeObjectForEform($("#searchformtable9251737cc88840449ae92e9b1e5dfeab72ba"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table9251737cc88840449ae92e9b1e5dfeab72baKeyWordIn="";
table9251737cc88840449ae92e9b1e5dfeab72baParamIn=JSON.stringify(para);
	$('#table9251737cc88840449ae92e9b1e5dfeab72ba').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable9251737cc88840449ae92e9b1e5dfeab72ba").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable9251737cc88840449ae92e9b1e5dfeab72ba').bind('click',function(){
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
	content: $('#searchDialogtable9251737cc88840449ae92e9b1e5dfeab72ba'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable9251737cc88840449ae92e9b1e5dfeab72ba(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable9251737cc88840449ae92e9b1e5dfeab72ba")); searchDatatable9251737cc88840449ae92e9b1e5dfeab72ba(); layer.close(index); return false;
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
$('#DEPT_NAMEAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_NAME',textFiled:'DEPT_NAMEAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#PO_NAMEAlias').on('focus',function(e){
	new H5CommonSelect({type:'orgSelect', idFiled:'PO_NAME',textFiled:'PO_NAMEAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#BIRTHDATE_START_button').click(function(e){
			$('#BIRTHDATE_START').datepicker('show');
			$('#BIRTHDATE_START').datepicker().trigger('click');
}); 
$('#BIRTHDATE_END_button').click(function(e){
			$('#BIRTHDATE_END').datepicker('show');
			$('#BIRTHDATE_END').datepicker().trigger('click');
}); 

$('#tableToolbarButtonfa0d4a419b12614b95a88a27fa6b92fcbeb1').bind('click',function() {                           
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
	        var colModels =$('#table9251737cc88840449ae92e9b1e5dfeab72ba').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table9251737cc88840449ae92e9b1e5dfeab72baKeyWordIn;                          
	        expSearchParams.param = table9251737cc88840449ae92e9b1e5dfeab72baParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='统战成员信息表';                             
	        expSearchParams.viewid='2c908c5a894821f6018948be75880b98';                                   
	        expSearchParams.tableid='table9251737cc88840449ae92e9b1e5dfeab72ba';                                 
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
$("#tableToolbarButton53daa85eac9b514970d94d07b9a01c8e84eb").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'ufmInfoExcelImport', callBackFunc: function () {                           	
		$('#table9251737cc88840449ae92e9b1e5dfeab72ba').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
