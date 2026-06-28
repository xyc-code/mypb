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

function redraw948e83e3828f72f301828fbca4cb1729(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3828f72f301828fbca4cb1729").width();
		var win_height = $("#948e83e3828f72f301828fbca4cb1729").height();
		$('#948e83e3828f72f301828fbca4cb1729').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3828f72f301828fbca4cb1729').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3828f72f301828fbca4cb1729").width();
	setTimeout(function(){redraw948e83e3828f72f301828fbca4cb1729(win_width);},500);
});
var tablebb5cddee1c773944c5f8e8bccc339da1e0afKeyWordIn = "";    
var tablebb5cddee1c773944c5f8e8bccc339da1e0afParamIn = "";    
var tablebb5cddee1c773944c5f8e8bccc339da1e0afSelectRow = {     
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afLoadComplete = {     
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afBeforeEditCell = {        
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afOndblClickRow = {     
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afOnRightClickRow = {     
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afGridComplete = {     
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afOnCellSelect = {     
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
var tablebb5cddee1c773944c5f8e8bccc339da1e0afLoadBeforeSend = {        
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
function tablebb5cddee1c773944c5f8e8bccc339da1e0afReload(pid){
	var _isInvalid = true;
	$("#tablebb5cddee1c773944c5f8e8bccc339da1e0af").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablebb5cddee1c773944c5f8e8bccc339da1e0afPid = pid;
		}
		return false;
	}
	window.tablebb5cddee1c773944c5f8e8bccc339da1e0afPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablebb5cddee1c773944c5f8e8bccc339da1e0afReload();
};
function tablebb5cddee1c773944c5f8e8bccc339da1e0afTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablebb5cddee1c773944c5f8e8bccc339da1e0afPid == 'undefined' || window.tablebb5cddee1c773944c5f8e8bccc339da1e0afPid!=null){
tablebb5cddee1c773944c5f8e8bccc339da1e0afReload(window.tablebb5cddee1c773944c5f8e8bccc339da1e0afPid);
}
}
var tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af = [];
var uniqueColtablebb5cddee1c773944c5f8e8bccc339da1e0af = [];
var uniqueColTitletablebb5cddee1c773944c5f8e8bccc339da1e0af = [];
var defaultValuetablebb5cddee1c773944c5f8e8bccc339da1e0af = {};
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '申请日期',hidden:false, name: 'REQUST_DATE',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '申请人所在单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '换届党支部名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '到期换届时间', formatter:format, hidden:false, name: 'DUE_TIME1',align:'center',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function tablebb5cddee1c773944c5f8e8bccc339da1e0afinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861").css('display','inline-block');
}else{
$("#tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861").hide();
}
tablebb5cddee1c773944c5f8e8bccc339da1e0afsearchWF();
}
function tablebb5cddee1c773944c5f8e8bccc339da1e0afsearchWF(){
   if ($("#searchformtablebb5cddee1c773944c5f8e8bccc339da1e0af").length>0){
      var para = serializeObject($("#searchformtablebb5cddee1c773944c5f8e8bccc339da1e0af"));
      para.bpmState = $('#tablebb5cddee1c773944c5f8e8bccc339da1e0afworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tablebb5cddee1c773944c5f8e8bccc339da1e0afworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

tablebb5cddee1c773944c5f8e8bccc339da1e0afLoadComplete.addEvent(function(data){$("#tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861").css("display","");});
$("#tablebb5cddee1c773944c5f8e8bccc339da1e0af").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3828f72f301828fbca4cb1729/tablebb5cddee1c773944c5f8e8bccc339da1e0af/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablebb5cddee1c773944c5f8e8bccc339da1e0af,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablebb5cddee1c773944c5f8e8bccc339da1e0afSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablebb5cddee1c773944c5f8e8bccc339da1e0afLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablebb5cddee1c773944c5f8e8bccc339da1e0afOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablebb5cddee1c773944c5f8e8bccc339da1e0afOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablebb5cddee1c773944c5f8e8bccc339da1e0afGridComplete.exec();
				    setTimeout(function(){var height = $("#tablebb5cddee1c773944c5f8e8bccc339da1e0af").closest('.ui-jqgrid-bdiv').height();
					$("#tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords img").css("width","120px");
                 }else{
					    $("#tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablebb5cddee1c773944c5f8e8bccc339da1e0afBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablebb5cddee1c773944c5f8e8bccc339da1e0afOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords").hide();
		   	    $("#Pagertablebb5cddee1c773944c5f8e8bccc339da1e0af_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablebb5cddee1c773944c5f8e8bccc339da1e0af").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablebb5cddee1c773944c5f8e8bccc339da1e0af").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords").html() == null) {
						$("#tablebb5cddee1c773944c5f8e8bccc339da1e0af").parent().append("<div class='no_data' id='tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablebb5cddee1c773944c5f8e8bccc339da1e0afnorecords").show();
					$("#Pagertablebb5cddee1c773944c5f8e8bccc339da1e0af_left").css("display", "none");
				}
tablebb5cddee1c773944c5f8e8bccc339da1e0afLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablebb5cddee1c773944c5f8e8bccc339da1e0af"
    });
tablebb5cddee1c773944c5f8e8bccc339da1e0afReload();
$("#t_tablebb5cddee1c773944c5f8e8bccc339da1e0af").append($("#tableToolbartablebb5cddee1c773944c5f8e8bccc339da1e0af"));$("#tableToolbarButtondfb899af5047d94cf8196110d97dfc1b1edb").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828ad2be01828c031c280fd5&grid=tablebb5cddee1c773944c5f8e8bccc339da1e0af'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_HUANJIE_TIXING&isbpm=Y&dbid=948e83e3828ad2be01828c0962e10fd6', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3828f72f301828fbca4cb1729',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861").hide();
$('#tablebb5cddee1c773944c5f8e8bccc339da1e0afworkFlowSelect').bind('change',function(){
tablebb5cddee1c773944c5f8e8bccc339da1e0afinitWorkFlow($(this).val());
});
function searchDatatablebb5cddee1c773944c5f8e8bccc339da1e0af(){
 var para = serializeObjectForEform($("#searchformtablebb5cddee1c773944c5f8e8bccc339da1e0af"));
 para.bpmState = $('#tablebb5cddee1c773944c5f8e8bccc339da1e0afworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablebb5cddee1c773944c5f8e8bccc339da1e0afKeyWordIn="";
tablebb5cddee1c773944c5f8e8bccc339da1e0afParamIn=JSON.stringify(para);
	$('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablebb5cddee1c773944c5f8e8bccc339da1e0af").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablebb5cddee1c773944c5f8e8bccc339da1e0af').bind('click',function(){
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
	content: $('#searchDialogtablebb5cddee1c773944c5f8e8bccc339da1e0af'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablebb5cddee1c773944c5f8e8bccc339da1e0af(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablebb5cddee1c773944c5f8e8bccc339da1e0af")); searchDatatablebb5cddee1c773944c5f8e8bccc339da1e0af(); layer.close(index); return false;
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
