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

function redraw2c908c1d8dc9acdd018dcfb627621d92(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8dc9acdd018dcfb627621d92").width();
		var win_height = $("#2c908c1d8dc9acdd018dcfb627621d92").height();
		$('#2c908c1d8dc9acdd018dcfb627621d92').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8dc9acdd018dcfb627621d92').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8dc9acdd018dcfb627621d92").width();
	setTimeout(function(){redraw2c908c1d8dc9acdd018dcfb627621d92(win_width);},500);
});
var table63aefc0b7127d643f7e85eb888ce5fb52204KeyWordIn = "";    
var table63aefc0b7127d643f7e85eb888ce5fb52204ParamIn = "";    
var table63aefc0b7127d643f7e85eb888ce5fb52204SelectRow = {     
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
var table63aefc0b7127d643f7e85eb888ce5fb52204LoadComplete = {     
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
var table63aefc0b7127d643f7e85eb888ce5fb52204BeforeEditCell = {        
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
var table63aefc0b7127d643f7e85eb888ce5fb52204OndblClickRow = {     
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
var table63aefc0b7127d643f7e85eb888ce5fb52204OnRightClickRow = {     
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
var table63aefc0b7127d643f7e85eb888ce5fb52204GridComplete = {     
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
var table63aefc0b7127d643f7e85eb888ce5fb52204OnCellSelect = {     
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
var table63aefc0b7127d643f7e85eb888ce5fb52204LoadBeforeSend = {        
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
function table63aefc0b7127d643f7e85eb888ce5fb52204Reload(pid){
	var _isInvalid = true;
	$("#table63aefc0b7127d643f7e85eb888ce5fb52204").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table63aefc0b7127d643f7e85eb888ce5fb52204Pid = pid;
		}
		return false;
	}
	window.table63aefc0b7127d643f7e85eb888ce5fb52204Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table63aefc0b7127d643f7e85eb888ce5fb52204TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table63aefc0b7127d643f7e85eb888ce5fb52204Pid == 'undefined' || window.table63aefc0b7127d643f7e85eb888ce5fb52204Pid!=null){
table63aefc0b7127d643f7e85eb888ce5fb52204Reload(window.table63aefc0b7127d643f7e85eb888ce5fb52204Pid);
}
}
var tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204 = [];
var uniqueColtable63aefc0b7127d643f7e85eb888ce5fb52204 = [];
var uniqueColTitletable63aefc0b7127d643f7e85eb888ce5fb52204 = [];
var defaultValuetable63aefc0b7127d643f7e85eb888ce5fb52204 = {};
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({ label: '党组织类型',hidden:true, name: 'PARTY_TYPE',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({ label: '党组织类型',hidden:false, name: 'PARTY_TYPEName',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '上级党组织名称',hidden:false, name: 'PARENT_NAME',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '党支部名称', formatter:formattable63aefc0b7127d643f7e85eb888ce5fb52204Detail, hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
function formattable63aefc0b7127d643f7e85eb888ce5fb52204Detail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable63aefc0b7127d643f7e85eb888ce5fb52204Detail(\''+id+'\')">'+cellvalue+'</a>';
}function totable63aefc0b7127d643f7e85eb888ce5fb52204Detail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=2c908c1d8dc9acdd018dcf8681ea1bb6&id='+id      
	});  
}tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '上届选举时间', formatter:format, hidden:false, name: 'CREA_TIME',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '撤销时间', formatter:format, hidden:false, name: 'REVOKE_TIME',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '党小组数量',hidden:false, name: 'PARTY_COUNT',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '党组织书记',hidden:false, name: 'PARTY_SJ',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '备注',hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable63aefc0b7127d643f7e85eb888ce5fb52204 = []; 
searchNamestable63aefc0b7127d643f7e85eb888ce5fb52204.push('PARTY_NAME');
$('#keyWordtable63aefc0b7127d643f7e85eb888ce5fb52204').attr('placeholder', '请输入党支部名称查询');
function searchDataKeyWordtable63aefc0b7127d643f7e85eb888ce5fb52204(){
	var keyWord = $.trim($("#keyWordtable63aefc0b7127d643f7e85eb888ce5fb52204").val()); 
 if($('#keyWordtable63aefc0b7127d643f7e85eb888ce5fb52204').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable63aefc0b7127d643f7e85eb888ce5fb52204.length;i++){ 
		var name = searchNamestable63aefc0b7127d643f7e85eb888ce5fb52204[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table63aefc0b7127d643f7e85eb888ce5fb52204KeyWordIn=JSON.stringify(param);
table63aefc0b7127d643f7e85eb888ce5fb52204ParamIn="";
	$('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable63aefc0b7127d643f7e85eb888ce5fb52204').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable63aefc0b7127d643f7e85eb888ce5fb52204();
	}
});
$('#keyWordBttable63aefc0b7127d643f7e85eb888ce5fb52204').bind('click', function() {
		searchDataKeyWordtable63aefc0b7127d643f7e85eb888ce5fb52204();
});
;$(document).ready(function(){ 

$("#table63aefc0b7127d643f7e85eb888ce5fb52204").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8dc9acdd018dcfb627621d92/table63aefc0b7127d643f7e85eb888ce5fb52204/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable63aefc0b7127d643f7e85eb888ce5fb52204,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table63aefc0b7127d643f7e85eb888ce5fb52204SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table63aefc0b7127d643f7e85eb888ce5fb52204LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table63aefc0b7127d643f7e85eb888ce5fb52204OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table63aefc0b7127d643f7e85eb888ce5fb52204OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table63aefc0b7127d643f7e85eb888ce5fb52204GridComplete.exec();
				    setTimeout(function(){var height = $("#table63aefc0b7127d643f7e85eb888ce5fb52204").closest('.ui-jqgrid-bdiv').height();
					$("#table63aefc0b7127d643f7e85eb888ce5fb52204norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table63aefc0b7127d643f7e85eb888ce5fb52204norecords img").css("width","120px");
                 }else{
					    $("#table63aefc0b7127d643f7e85eb888ce5fb52204norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table63aefc0b7127d643f7e85eb888ce5fb52204BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table63aefc0b7127d643f7e85eb888ce5fb52204OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table63aefc0b7127d643f7e85eb888ce5fb52204norecords").hide();
		   	    $("#Pagertable63aefc0b7127d643f7e85eb888ce5fb52204_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table63aefc0b7127d643f7e85eb888ce5fb52204").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table63aefc0b7127d643f7e85eb888ce5fb52204").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table63aefc0b7127d643f7e85eb888ce5fb52204norecords").html() == null) {
						$("#table63aefc0b7127d643f7e85eb888ce5fb52204").parent().append("<div class='no_data' id='table63aefc0b7127d643f7e85eb888ce5fb52204norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table63aefc0b7127d643f7e85eb888ce5fb52204norecords").show();
					$("#Pagertable63aefc0b7127d643f7e85eb888ce5fb52204_left").css("display", "none");
				}
table63aefc0b7127d643f7e85eb888ce5fb52204LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable63aefc0b7127d643f7e85eb888ce5fb52204"
    });
table63aefc0b7127d643f7e85eb888ce5fb52204Reload();
$("#t_table63aefc0b7127d643f7e85eb888ce5fb52204").append($("#tableToolbartable63aefc0b7127d643f7e85eb888ce5fb52204"));function searchDatatable63aefc0b7127d643f7e85eb888ce5fb52204(){
 var para = serializeObjectForEform($("#searchformtable63aefc0b7127d643f7e85eb888ce5fb52204"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table63aefc0b7127d643f7e85eb888ce5fb52204KeyWordIn="";
table63aefc0b7127d643f7e85eb888ce5fb52204ParamIn=JSON.stringify(para);
	$('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable63aefc0b7127d643f7e85eb888ce5fb52204").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable63aefc0b7127d643f7e85eb888ce5fb52204').bind('click',function(){
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
	content: $('#searchDialogtable63aefc0b7127d643f7e85eb888ce5fb52204'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable63aefc0b7127d643f7e85eb888ce5fb52204(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable63aefc0b7127d643f7e85eb888ce5fb52204")); searchDatatable63aefc0b7127d643f7e85eb888ce5fb52204(); layer.close(index); return false;
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
$("#tableToolbarButtond2c85c21e456d74f4239ceb2e5cfd5e6ab67").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8dc9acdd018dcf8681ea1bb6&grid=table63aefc0b7127d643f7e85eb888ce5fb52204',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtona014369950b669446269d10f83bb78724ec2").bind('click',function() {                                                                                       
	var ids = $('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8dc9acdd018dcf8681ea1bb6&id=' + rowData.ID+'&grid=table63aefc0b7127d643f7e85eb888ce5fb52204',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton9a0925cc8df97a4c7898443fdbb75472009b").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_REVOKE_PARTY_ORG&isbpm=N&dbid=2c908c1d8dc9acdd018dcf7e5a561b6c', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8dc9acdd018dcfb627621d92',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table63aefc0b7127d643f7e85eb888ce5fb52204').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton9753ecdf944a634caae844f22332878c1c5e").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'cxdzzdl', callBackFunc: function () {                           	
		$('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButtone37d2a8436c45a45c2c9182c383d65e6021a').bind('click',function() {                           
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
	        var colModels =$('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = table63aefc0b7127d643f7e85eb888ce5fb52204KeyWordIn;                          
	        expSearchParams.param = table63aefc0b7127d643f7e85eb888ce5fb52204ParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='撤销党组织表';                             
	        expSearchParams.viewid='2c908c1d8dc9acdd018dcfb627621d92';                                   
	        expSearchParams.tableid='table63aefc0b7127d643f7e85eb888ce5fb52204';                                 
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
;});	 
