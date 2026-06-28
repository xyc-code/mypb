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

function redraw2c908c1d8e83bd5c018e8400fc980c0c(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8e83bd5c018e8400fc980c0c").width();
		var win_height = $("#2c908c1d8e83bd5c018e8400fc980c0c").height();
		$('#2c908c1d8e83bd5c018e8400fc980c0c').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8e83bd5c018e8400fc980c0c').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8e83bd5c018e8400fc980c0c").width();
	setTimeout(function(){redraw2c908c1d8e83bd5c018e8400fc980c0c(win_width);},500);
});
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9KeyWordIn = "";    
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9ParamIn = "";    
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9SelectRow = {     
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9LoadComplete = {     
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9BeforeEditCell = {        
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9OndblClickRow = {     
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9OnRightClickRow = {     
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9GridComplete = {     
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9OnCellSelect = {     
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
var table3054d44ce4dbe4453acbd439ccd8d6a0f6e9LoadBeforeSend = {        
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
function table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Reload(pid){
	var _isInvalid = true;
	$("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Pid = pid;
		}
		return false;
	}
	window.table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table3054d44ce4dbe4453acbd439ccd8d6a0f6e9TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Pid == 'undefined' || window.table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Pid!=null){
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Reload(window.table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Pid);
}
}
var tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9 = [];
var uniqueColtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9 = [];
var uniqueColTitletable3054d44ce4dbe4453acbd439ccd8d6a0f6e9 = [];
var defaultValuetable3054d44ce4dbe4453acbd439ccd8d6a0f6e9 = {};
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '主表id',hidden:true, name: 'FK_SUB_ID',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '性别',hidden:false, name: 'USER_SEX',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '年龄',hidden:false, name: 'USER_AGE',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '职务',hidden:false, name: 'USER_POST',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '入党时间', formatter:format, hidden:false, name: 'USER_PARTYDATE',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '年度绩效',hidden:true, name: 'USER_JX',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '年度绩效',hidden:false, name: 'USER_JXName',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '民主评议组织评价结果',hidden:false, name: 'USER_JG',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '党员积分',hidden:false, name: 'USER_JF',align:'right',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '干部级别',hidden:true, name: 'USER_GBJB',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '干部级别',hidden:false, name: 'USER_GBJBName',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '部门类别',hidden:true, name: 'USER_DEPT_TYPE',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '部门类别',hidden:false, name: 'USER_DEPT_TYPEName',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '先进事迹',hidden:false, name: 'USER_SJ',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '备注',hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '推荐意见',hidden:false, name: 'ATTR1',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '上年度党员先锋岗评选情况',hidden:false, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '申报党员先锋岗名称',hidden:true, name: 'GW_NAME',align:'center',  width: '150px'});
tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push({ label: '申报党员先锋岗名称',hidden:false, name: 'GW_NAMEName',align:'center',  width: '150px'});
	var searchNamestable3054d44ce4dbe4453acbd439ccd8d6a0f6e9 = []; 
searchNamestable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.push('USER_NAME');
$('#keyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9(){
	var keyWord = $.trim($("#keyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9").val()); 
 if($('#keyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable3054d44ce4dbe4453acbd439ccd8d6a0f6e9.length;i++){ 
		var name = searchNamestable3054d44ce4dbe4453acbd439ccd8d6a0f6e9[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9KeyWordIn=JSON.stringify(param);
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9ParamIn="";
	$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9();
	}
});
$('#keyWordBttable3054d44ce4dbe4453acbd439ccd8d6a0f6e9').bind('click', function() {
		searchDataKeyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9();
});
;$(document).ready(function(){ 

$("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e83bd5c018e8400fc980c0c/table3054d44ce4dbe4453acbd439ccd8d6a0f6e9/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:true,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3054d44ce4dbe4453acbd439ccd8d6a0f6e9SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3054d44ce4dbe4453acbd439ccd8d6a0f6e9LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3054d44ce4dbe4453acbd439ccd8d6a0f6e9OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3054d44ce4dbe4453acbd439ccd8d6a0f6e9OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3054d44ce4dbe4453acbd439ccd8d6a0f6e9GridComplete.exec();
				    setTimeout(function(){var height = $("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").closest('.ui-jqgrid-bdiv').height();
					$("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords img").css("width","120px");
                 }else{
					    $("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3054d44ce4dbe4453acbd439ccd8d6a0f6e9BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3054d44ce4dbe4453acbd439ccd8d6a0f6e9OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords").hide();
		   	    $("#Pagertable3054d44ce4dbe4453acbd439ccd8d6a0f6e9_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords").html() == null) {
						$("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").parent().append("<div class='no_data' id='table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9norecords").show();
					$("#Pagertable3054d44ce4dbe4453acbd439ccd8d6a0f6e9_left").css("display", "none");
				}
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3054d44ce4dbe4453acbd439ccd8d6a0f6e9"
    });
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9Reload();
$("#t_table3054d44ce4dbe4453acbd439ccd8d6a0f6e9").append($("#tableToolbartable3054d44ce4dbe4453acbd439ccd8d6a0f6e9"));function searchDatatable3054d44ce4dbe4453acbd439ccd8d6a0f6e9(){
 var para = serializeObjectForEform($("#searchformtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9KeyWordIn="";
table3054d44ce4dbe4453acbd439ccd8d6a0f6e9ParamIn=JSON.stringify(para);
	$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable3054d44ce4dbe4453acbd439ccd8d6a0f6e9').bind('click',function(){
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
	content: $('#searchDialogtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable3054d44ce4dbe4453acbd439ccd8d6a0f6e9(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9")); searchDatatable3054d44ce4dbe4453acbd439ccd8d6a0f6e9(); layer.close(index); return false;
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

$('#tableToolbarButton42c926be2966fb442428af285f90f49f2361').bind('click',function() {                           
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
	        var colModels =$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table3054d44ce4dbe4453acbd439ccd8d6a0f6e9KeyWordIn;                          
	        expSearchParams.param = table3054d44ce4dbe4453acbd439ccd8d6a0f6e9ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='先锋岗子表';                             
	        expSearchParams.viewid='2c908c1d8e83bd5c018e8400fc980c0c';                                   
	        expSearchParams.tableid='table3054d44ce4dbe4453acbd439ccd8d6a0f6e9';                                 
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
$("#tableToolbarButtonb240fdbc4cac294bed4b73ae5d882211bb3b").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_XFG_CHIRD&isbpm=N&dbid=2c908c1d8e742381018e74518611123a', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8e83bd5c018e8400fc980c0c',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
;});	 
