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

function redraw948e83e3938bb70a01938fbdc7a1396e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3938bb70a01938fbdc7a1396e").width();
		var win_height = $("#948e83e3938bb70a01938fbdc7a1396e").height();
		$('#948e83e3938bb70a01938fbdc7a1396e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3938bb70a01938fbdc7a1396e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3938bb70a01938fbdc7a1396e").width();
	setTimeout(function(){redraw948e83e3938bb70a01938fbdc7a1396e(win_width);},500);
});
var table01e3120e9b8ba74853c9bde58c31ab6235e6KeyWordIn = "";    
var table01e3120e9b8ba74853c9bde58c31ab6235e6ParamIn = "";    
var table01e3120e9b8ba74853c9bde58c31ab6235e6SelectRow = {     
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6LoadComplete = {     
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6BeforeEditCell = {        
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6OndblClickRow = {     
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6OnRightClickRow = {     
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6GridComplete = {     
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6OnCellSelect = {     
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
var table01e3120e9b8ba74853c9bde58c31ab6235e6LoadBeforeSend = {        
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
function table01e3120e9b8ba74853c9bde58c31ab6235e6Reload(pid){
	var _isInvalid = true;
	$("#table01e3120e9b8ba74853c9bde58c31ab6235e6").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table01e3120e9b8ba74853c9bde58c31ab6235e6Pid = pid;
		}
		return false;
	}
	window.table01e3120e9b8ba74853c9bde58c31ab6235e6Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table01e3120e9b8ba74853c9bde58c31ab6235e6TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table01e3120e9b8ba74853c9bde58c31ab6235e6Pid == 'undefined' || window.table01e3120e9b8ba74853c9bde58c31ab6235e6Pid!=null){
table01e3120e9b8ba74853c9bde58c31ab6235e6Reload(window.table01e3120e9b8ba74853c9bde58c31ab6235e6Pid);
}
}
var tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6 = [];
var uniqueColtable01e3120e9b8ba74853c9bde58c31ab6235e6 = [];
var uniqueColTitletable01e3120e9b8ba74853c9bde58c31ab6235e6 = [];
var defaultValuetable01e3120e9b8ba74853c9bde58c31ab6235e6 = {};
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '年份', formatter:formattable01e3120e9b8ba74853c9bde58c31ab6235e6Detail, hidden:false, name: 'IN_YEAR',align:'center',  width: '80px'});
function formattable01e3120e9b8ba74853c9bde58c31ab6235e6Detail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable01e3120e9b8ba74853c9bde58c31ab6235e6Detail(\''+id+'\')">'+cellvalue+'</a>';
}function totable01e3120e9b8ba74853c9bde58c31ab6235e6Detail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3938bb70a01938fb1024437c6&id='+id      
	});  
}tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '序号',hidden:false, name: 'DATA_ORDER',align:'center',  width: '80px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '工作分类',hidden:false, name: 'WORK_TYPE',align:'center',  width: '200px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '主要内容',hidden:false, name: 'MAIN_CONTENT',align:'left',  width: '400px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '内容分解',hidden:false, name: 'CONTENT_LIST',align:'left',  width: '600px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '时间节点', formatter:format, hidden:false, name: 'DATE_CHECK',align:'center',  width: '100px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '完成情况',hidden:true, name: 'WORK_STATUS',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '备注',hidden:true, name: 'REMARK',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'center',  width: '150px'});
	var searchNamestable01e3120e9b8ba74853c9bde58c31ab6235e6 = []; 
searchNamestable01e3120e9b8ba74853c9bde58c31ab6235e6.push('IN_YEAR');
searchNamestable01e3120e9b8ba74853c9bde58c31ab6235e6.push('WORK_TYPE');
$('#keyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6').attr('placeholder', '请输入年份、工作分类查询');
function searchDataKeyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6(){
	var keyWord = $.trim($("#keyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6").val()); 
 if($('#keyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable01e3120e9b8ba74853c9bde58c31ab6235e6.length;i++){ 
		var name = searchNamestable01e3120e9b8ba74853c9bde58c31ab6235e6[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table01e3120e9b8ba74853c9bde58c31ab6235e6KeyWordIn=JSON.stringify(param);
table01e3120e9b8ba74853c9bde58c31ab6235e6ParamIn="";
	$('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6();
	}
});
$('#keyWordBttable01e3120e9b8ba74853c9bde58c31ab6235e6').bind('click', function() {
		searchDataKeyWordtable01e3120e9b8ba74853c9bde58c31ab6235e6();
});
;$(document).ready(function(){ 

$("#table01e3120e9b8ba74853c9bde58c31ab6235e6").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3938bb70a01938fbdc7a1396e/table01e3120e9b8ba74853c9bde58c31ab6235e6/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable01e3120e9b8ba74853c9bde58c31ab6235e6,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table01e3120e9b8ba74853c9bde58c31ab6235e6SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table01e3120e9b8ba74853c9bde58c31ab6235e6LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table01e3120e9b8ba74853c9bde58c31ab6235e6OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table01e3120e9b8ba74853c9bde58c31ab6235e6OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table01e3120e9b8ba74853c9bde58c31ab6235e6GridComplete.exec();
				    setTimeout(function(){var height = $("#table01e3120e9b8ba74853c9bde58c31ab6235e6").closest('.ui-jqgrid-bdiv').height();
					$("#table01e3120e9b8ba74853c9bde58c31ab6235e6norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table01e3120e9b8ba74853c9bde58c31ab6235e6norecords img").css("width","120px");
                 }else{
					    $("#table01e3120e9b8ba74853c9bde58c31ab6235e6norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table01e3120e9b8ba74853c9bde58c31ab6235e6BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table01e3120e9b8ba74853c9bde58c31ab6235e6OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table01e3120e9b8ba74853c9bde58c31ab6235e6norecords").hide();
		   	    $("#Pagertable01e3120e9b8ba74853c9bde58c31ab6235e6_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table01e3120e9b8ba74853c9bde58c31ab6235e6").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table01e3120e9b8ba74853c9bde58c31ab6235e6").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table01e3120e9b8ba74853c9bde58c31ab6235e6norecords").html() == null) {
						$("#table01e3120e9b8ba74853c9bde58c31ab6235e6").parent().append("<div class='no_data' id='table01e3120e9b8ba74853c9bde58c31ab6235e6norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table01e3120e9b8ba74853c9bde58c31ab6235e6norecords").show();
					$("#Pagertable01e3120e9b8ba74853c9bde58c31ab6235e6_left").css("display", "none");
				}
table01e3120e9b8ba74853c9bde58c31ab6235e6LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable01e3120e9b8ba74853c9bde58c31ab6235e6"
    });
table01e3120e9b8ba74853c9bde58c31ab6235e6Reload();
$("#t_table01e3120e9b8ba74853c9bde58c31ab6235e6").append($("#tableToolbartable01e3120e9b8ba74853c9bde58c31ab6235e6"));function searchDatatable01e3120e9b8ba74853c9bde58c31ab6235e6(){
 var para = serializeObjectForEform($("#searchformtable01e3120e9b8ba74853c9bde58c31ab6235e6"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table01e3120e9b8ba74853c9bde58c31ab6235e6KeyWordIn="";
table01e3120e9b8ba74853c9bde58c31ab6235e6ParamIn=JSON.stringify(para);
	$('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable01e3120e9b8ba74853c9bde58c31ab6235e6").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable01e3120e9b8ba74853c9bde58c31ab6235e6').bind('click',function(){
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
	content: $('#searchDialogtable01e3120e9b8ba74853c9bde58c31ab6235e6'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable01e3120e9b8ba74853c9bde58c31ab6235e6(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable01e3120e9b8ba74853c9bde58c31ab6235e6")); searchDatatable01e3120e9b8ba74853c9bde58c31ab6235e6(); layer.close(index); return false;
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
$('#DATE_CHECK_START_button').click(function(e){
			$('#DATE_CHECK_START').datepicker('show');
			$('#DATE_CHECK_START').datepicker().trigger('click');
}); 
$('#DATE_CHECK_END_button').click(function(e){
			$('#DATE_CHECK_END').datepicker('show');
			$('#DATE_CHECK_END').datepicker().trigger('click');
}); 
$("#tableToolbarButton69ffe41a932c404b1b59d4ab9a76d9d69ef9").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3938bb70a01938fb1024437c6&grid=table01e3120e9b8ba74853c9bde58c31ab6235e6',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonefeedc3327f3a341db1a8388b168880e49d6").bind('click',function() {                                                                                       
	var ids = $('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3938bb70a01938fb1024437c6&id=' + rowData.ID+'&grid=table01e3120e9b8ba74853c9bde58c31ab6235e6',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton66ada49d4649bc4de84b3e84e8ed94f91aef").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table01e3120e9b8ba74853c9bde58c31ab6235e6').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_LJWHJS_WORK_HIST&isbpm=N&dbid=948e83e3938bb70a01938f11deef18fb', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3938bb70a01938fbdc7a1396e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table01e3120e9b8ba74853c9bde58c31ab6235e6').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
