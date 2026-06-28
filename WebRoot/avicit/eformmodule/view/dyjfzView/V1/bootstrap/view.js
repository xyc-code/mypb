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
function colorSpan(value,item,obj){
if(obj.ONEQUARER!=4){
 return '<span style="color:red;">'+value+'</span>'
}else{
 return value;
}
}
function redraw948e83e38dd01115018de47d1bfd23ee(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38dd01115018de47d1bfd23ee").width();
		var win_height = $("#948e83e38dd01115018de47d1bfd23ee").height();
		$('#948e83e38dd01115018de47d1bfd23ee').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38dd01115018de47d1bfd23ee').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38dd01115018de47d1bfd23ee").width();
	setTimeout(function(){redraw948e83e38dd01115018de47d1bfd23ee(win_width);},500);
});
var tablec75b00dee7a62f49058bf0813eaab6cc1661KeyWordIn = "";    
var tablec75b00dee7a62f49058bf0813eaab6cc1661ParamIn = "";    
var tablec75b00dee7a62f49058bf0813eaab6cc1661SelectRow = {     
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661LoadComplete = {     
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661BeforeEditCell = {        
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661OndblClickRow = {     
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661OnRightClickRow = {     
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661GridComplete = {     
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661OnCellSelect = {     
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
var tablec75b00dee7a62f49058bf0813eaab6cc1661LoadBeforeSend = {        
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
function tablec75b00dee7a62f49058bf0813eaab6cc1661Reload(pid){
	var _isInvalid = true;
	$("#tablec75b00dee7a62f49058bf0813eaab6cc1661").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablec75b00dee7a62f49058bf0813eaab6cc1661Pid = pid;
		}
		return false;
	}
	window.tablec75b00dee7a62f49058bf0813eaab6cc1661Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablec75b00dee7a62f49058bf0813eaab6cc1661').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablec75b00dee7a62f49058bf0813eaab6cc1661TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablec75b00dee7a62f49058bf0813eaab6cc1661Pid == 'undefined' || window.tablec75b00dee7a62f49058bf0813eaab6cc1661Pid!=null){
tablec75b00dee7a62f49058bf0813eaab6cc1661Reload(window.tablec75b00dee7a62f49058bf0813eaab6cc1661Pid);
}
}
var tablecmtablec75b00dee7a62f49058bf0813eaab6cc1661 = [];
var uniqueColtablec75b00dee7a62f49058bf0813eaab6cc1661 = [];
var uniqueColTitletablec75b00dee7a62f49058bf0813eaab6cc1661 = [];
var defaultValuetablec75b00dee7a62f49058bf0813eaab6cc1661 = {};
tablecmtablec75b00dee7a62f49058bf0813eaab6cc1661.push({label: '党支部名称', formatter:function(cellvalue, options, rowObject){return colorSpan(cellvalue, options, rowObject);}, hidden:false, name: 'PARTY_NAME',align:'center',  width: '150px'});
tablecmtablec75b00dee7a62f49058bf0813eaab6cc1661.push({label: '已录入季度', formatter:function(cellvalue, options, rowObject){return colorSpan(cellvalue, options, rowObject);}, hidden:false, name: 'ONEQUARER',align:'center',  width: '150px'});
tablecmtablec75b00dee7a62f49058bf0813eaab6cc1661.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
	var searchNamestablec75b00dee7a62f49058bf0813eaab6cc1661 = []; 
searchNamestablec75b00dee7a62f49058bf0813eaab6cc1661.push('PARTY_NAME');
$('#keyWordtablec75b00dee7a62f49058bf0813eaab6cc1661').attr('placeholder', '请输入党支部名称查询');
function searchDataKeyWordtablec75b00dee7a62f49058bf0813eaab6cc1661(){
	var keyWord = $.trim($("#keyWordtablec75b00dee7a62f49058bf0813eaab6cc1661").val()); 
 if($('#keyWordtablec75b00dee7a62f49058bf0813eaab6cc1661').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablec75b00dee7a62f49058bf0813eaab6cc1661.length;i++){ 
		var name = searchNamestablec75b00dee7a62f49058bf0813eaab6cc1661[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablec75b00dee7a62f49058bf0813eaab6cc1661KeyWordIn=JSON.stringify(param);
tablec75b00dee7a62f49058bf0813eaab6cc1661ParamIn="";
	$('#tablec75b00dee7a62f49058bf0813eaab6cc1661').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablec75b00dee7a62f49058bf0813eaab6cc1661').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablec75b00dee7a62f49058bf0813eaab6cc1661();
	}
});
$('#keyWordBttablec75b00dee7a62f49058bf0813eaab6cc1661').bind('click', function() {
		searchDataKeyWordtablec75b00dee7a62f49058bf0813eaab6cc1661();
});
;$(document).ready(function(){ 

$("#tablec75b00dee7a62f49058bf0813eaab6cc1661").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38dd01115018de47d1bfd23ee/tablec75b00dee7a62f49058bf0813eaab6cc1661/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablec75b00dee7a62f49058bf0813eaab6cc1661,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablec75b00dee7a62f49058bf0813eaab6cc1661SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablec75b00dee7a62f49058bf0813eaab6cc1661LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablec75b00dee7a62f49058bf0813eaab6cc1661OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablec75b00dee7a62f49058bf0813eaab6cc1661OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablec75b00dee7a62f49058bf0813eaab6cc1661GridComplete.exec();
				    setTimeout(function(){var height = $("#tablec75b00dee7a62f49058bf0813eaab6cc1661").closest('.ui-jqgrid-bdiv').height();
					$("#tablec75b00dee7a62f49058bf0813eaab6cc1661norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablec75b00dee7a62f49058bf0813eaab6cc1661norecords img").css("width","120px");
                 }else{
					    $("#tablec75b00dee7a62f49058bf0813eaab6cc1661norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablec75b00dee7a62f49058bf0813eaab6cc1661BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablec75b00dee7a62f49058bf0813eaab6cc1661OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablec75b00dee7a62f49058bf0813eaab6cc1661norecords").hide();
		   	    $("#Pagertablec75b00dee7a62f49058bf0813eaab6cc1661_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablec75b00dee7a62f49058bf0813eaab6cc1661").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablec75b00dee7a62f49058bf0813eaab6cc1661").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablec75b00dee7a62f49058bf0813eaab6cc1661norecords").html() == null) {
						$("#tablec75b00dee7a62f49058bf0813eaab6cc1661").parent().append("<div class='no_data' id='tablec75b00dee7a62f49058bf0813eaab6cc1661norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablec75b00dee7a62f49058bf0813eaab6cc1661norecords").show();
					$("#Pagertablec75b00dee7a62f49058bf0813eaab6cc1661_left").css("display", "none");
				}
tablec75b00dee7a62f49058bf0813eaab6cc1661LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablec75b00dee7a62f49058bf0813eaab6cc1661"
    });
tablec75b00dee7a62f49058bf0813eaab6cc1661Reload();
$("#t_tablec75b00dee7a62f49058bf0813eaab6cc1661").append($("#tableToolbartablec75b00dee7a62f49058bf0813eaab6cc1661"));function searchDatatablec75b00dee7a62f49058bf0813eaab6cc1661(){
 var para = serializeObjectForEform($("#searchformtablec75b00dee7a62f49058bf0813eaab6cc1661"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablec75b00dee7a62f49058bf0813eaab6cc1661KeyWordIn="";
tablec75b00dee7a62f49058bf0813eaab6cc1661ParamIn=JSON.stringify(para);
	$('#tablec75b00dee7a62f49058bf0813eaab6cc1661').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablec75b00dee7a62f49058bf0813eaab6cc1661").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablec75b00dee7a62f49058bf0813eaab6cc1661').bind('click',function(){
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
	content: $('#searchDialogtablec75b00dee7a62f49058bf0813eaab6cc1661'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablec75b00dee7a62f49058bf0813eaab6cc1661(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablec75b00dee7a62f49058bf0813eaab6cc1661")); searchDatatablec75b00dee7a62f49058bf0813eaab6cc1661(); layer.close(index); return false;
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
;});	 
