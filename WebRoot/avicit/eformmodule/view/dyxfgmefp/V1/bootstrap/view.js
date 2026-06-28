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
function formatXfgNum(cellVal,row,object){
var val="";
   avicAjax.ajax({
                            url : 'platform/avicit/pb/dyxfg/xfgsbslController/getxfgsbsl.json',
                            data : {
                                partyId: object.PARTY_ID,
                                year : object.YEAR
                            },
                            type : 'POST',
                            dataType : 'JSON',
                            async : false,
                            success : function(result) {


val=result.num;


                            }
                        });

return val;

}
function redraw2c908c1d8e78612f018e7933c0e419bf(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8e78612f018e7933c0e419bf").width();
		var win_height = $("#2c908c1d8e78612f018e7933c0e419bf").height();
		$('#2c908c1d8e78612f018e7933c0e419bf').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8e78612f018e7933c0e419bf').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8e78612f018e7933c0e419bf").width();
	setTimeout(function(){redraw2c908c1d8e78612f018e7933c0e419bf(win_width);},500);
});
var tabled722ccc49afb23421c68b17138688aeaea62KeyWordIn = "";    
var tabled722ccc49afb23421c68b17138688aeaea62ParamIn = "";    
var tabled722ccc49afb23421c68b17138688aeaea62SelectRow = {     
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
var tabled722ccc49afb23421c68b17138688aeaea62LoadComplete = {     
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
var tabled722ccc49afb23421c68b17138688aeaea62BeforeEditCell = {        
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
var tabled722ccc49afb23421c68b17138688aeaea62OndblClickRow = {     
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
var tabled722ccc49afb23421c68b17138688aeaea62OnRightClickRow = {     
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
var tabled722ccc49afb23421c68b17138688aeaea62GridComplete = {     
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
var tabled722ccc49afb23421c68b17138688aeaea62OnCellSelect = {     
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
var tabled722ccc49afb23421c68b17138688aeaea62LoadBeforeSend = {        
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
function tabled722ccc49afb23421c68b17138688aeaea62Reload(pid){
	var _isInvalid = true;
	$("#tabled722ccc49afb23421c68b17138688aeaea62").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabled722ccc49afb23421c68b17138688aeaea62Pid = pid;
		}
		return false;
	}
	window.tabled722ccc49afb23421c68b17138688aeaea62Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tabled722ccc49afb23421c68b17138688aeaea62TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabled722ccc49afb23421c68b17138688aeaea62Pid == 'undefined' || window.tabled722ccc49afb23421c68b17138688aeaea62Pid!=null){
tabled722ccc49afb23421c68b17138688aeaea62Reload(window.tabled722ccc49afb23421c68b17138688aeaea62Pid);
}
}
var tablecmtabled722ccc49afb23421c68b17138688aeaea62 = [];
var uniqueColtabled722ccc49afb23421c68b17138688aeaea62 = [];
var uniqueColTitletabled722ccc49afb23421c68b17138688aeaea62 = [];
var defaultValuetabled722ccc49afb23421c68b17138688aeaea62 = {};
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '年度',hidden:false, name: 'YEAR',align:'left',  width: '50px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '党组织人数',hidden:false, name: 'PARTY_COUNT',align:'right',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '名额',hidden:false, name: 'PARTY_ME',align:'right',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '获上级荣誉增加名额',hidden:false, name: 'ND_ME',align:'right',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '总计',hidden:false, name: 'COUNT',align:'right',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '党支部id',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtabled722ccc49afb23421c68b17138688aeaea62.push({ sortable:false,label: '上报数量', formatter:formatXfgNum, hidden:false, name: 'tableVirColumnf66cd32aae53734ba2589f43cca238c30d8a',align:'left',  width: '50px'});	var searchNamestabled722ccc49afb23421c68b17138688aeaea62 = []; 
searchNamestabled722ccc49afb23421c68b17138688aeaea62.push('PARTY_NAME');
searchNamestabled722ccc49afb23421c68b17138688aeaea62.push('YEAR');
$('#keyWordtabled722ccc49afb23421c68b17138688aeaea62').attr('placeholder', '请输入党组织名称、年度查询');
function searchDataKeyWordtabled722ccc49afb23421c68b17138688aeaea62(){
	var keyWord = $.trim($("#keyWordtabled722ccc49afb23421c68b17138688aeaea62").val()); 
 if($('#keyWordtabled722ccc49afb23421c68b17138688aeaea62').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestabled722ccc49afb23421c68b17138688aeaea62.length;i++){ 
		var name = searchNamestabled722ccc49afb23421c68b17138688aeaea62[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tabled722ccc49afb23421c68b17138688aeaea62KeyWordIn=JSON.stringify(param);
tabled722ccc49afb23421c68b17138688aeaea62ParamIn="";
	$('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtabled722ccc49afb23421c68b17138688aeaea62').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtabled722ccc49afb23421c68b17138688aeaea62();
	}
});
$('#keyWordBttabled722ccc49afb23421c68b17138688aeaea62').bind('click', function() {
		searchDataKeyWordtabled722ccc49afb23421c68b17138688aeaea62();
});
;$(document).ready(function(){ 

$("#tabled722ccc49afb23421c68b17138688aeaea62").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8e78612f018e7933c0e419bf/tabled722ccc49afb23421c68b17138688aeaea62/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabled722ccc49afb23421c68b17138688aeaea62,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 50	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabled722ccc49afb23421c68b17138688aeaea62SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabled722ccc49afb23421c68b17138688aeaea62LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabled722ccc49afb23421c68b17138688aeaea62OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabled722ccc49afb23421c68b17138688aeaea62OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabled722ccc49afb23421c68b17138688aeaea62GridComplete.exec();
				    setTimeout(function(){var height = $("#tabled722ccc49afb23421c68b17138688aeaea62").closest('.ui-jqgrid-bdiv').height();
					$("#tabled722ccc49afb23421c68b17138688aeaea62norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabled722ccc49afb23421c68b17138688aeaea62norecords img").css("width","120px");
                 }else{
					    $("#tabled722ccc49afb23421c68b17138688aeaea62norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabled722ccc49afb23421c68b17138688aeaea62BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabled722ccc49afb23421c68b17138688aeaea62OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabled722ccc49afb23421c68b17138688aeaea62norecords").hide();
		   	    $("#Pagertabled722ccc49afb23421c68b17138688aeaea62_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabled722ccc49afb23421c68b17138688aeaea62").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabled722ccc49afb23421c68b17138688aeaea62").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabled722ccc49afb23421c68b17138688aeaea62norecords").html() == null) {
						$("#tabled722ccc49afb23421c68b17138688aeaea62").parent().append("<div class='no_data' id='tabled722ccc49afb23421c68b17138688aeaea62norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabled722ccc49afb23421c68b17138688aeaea62norecords").show();
					$("#Pagertabled722ccc49afb23421c68b17138688aeaea62_left").css("display", "none");
				}
tabled722ccc49afb23421c68b17138688aeaea62LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabled722ccc49afb23421c68b17138688aeaea62"
    });
tabled722ccc49afb23421c68b17138688aeaea62Reload();
$("#t_tabled722ccc49afb23421c68b17138688aeaea62").append($("#tableToolbartabled722ccc49afb23421c68b17138688aeaea62"));function searchDatatabled722ccc49afb23421c68b17138688aeaea62(){
 var para = serializeObjectForEform($("#searchformtabled722ccc49afb23421c68b17138688aeaea62"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tabled722ccc49afb23421c68b17138688aeaea62KeyWordIn="";
tabled722ccc49afb23421c68b17138688aeaea62ParamIn=JSON.stringify(para);
	$('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtabled722ccc49afb23421c68b17138688aeaea62").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltabled722ccc49afb23421c68b17138688aeaea62').bind('click',function(){
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
	content: $('#searchDialogtabled722ccc49afb23421c68b17138688aeaea62'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatabled722ccc49afb23421c68b17138688aeaea62(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtabled722ccc49afb23421c68b17138688aeaea62")); searchDatatabled722ccc49afb23421c68b17138688aeaea62(); layer.close(index); return false;
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
$("#tableToolbarButtonad1bd9c102e1994b8398e785889094dae554").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8e78612f018e792ef71b1984&grid=tabled722ccc49afb23421c68b17138688aeaea62',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonc19334bdefe4694b79186df3b82fc2add05c").bind('click',function() {                                                                                       
	var ids = $('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8e78612f018e792ef71b1984&id=' + rowData.ID+'&grid=tabled722ccc49afb23421c68b17138688aeaea62',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton75cbf6a3597a3449f57841a0e04cc02976bb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_XFG_MEFP&isbpm=N&dbid=2c908c1d8e78612f018e792bfc3a1941', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8e78612f018e7933c0e419bf',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabled722ccc49afb23421c68b17138688aeaea62').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
