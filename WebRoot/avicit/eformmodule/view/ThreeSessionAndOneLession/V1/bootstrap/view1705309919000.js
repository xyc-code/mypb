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

function redraw402811817f4eb25b017f635cd3051a11(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817f4eb25b017f635cd3051a11").width();
		var win_height = $("#402811817f4eb25b017f635cd3051a11").height();
		$('#402811817f4eb25b017f635cd3051a11').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#402811817f4eb25b017f635cd3051a11').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817f4eb25b017f635cd3051a11").width();
	setTimeout(function(){redraw402811817f4eb25b017f635cd3051a11(win_width);},500);
});
var tablee1b6c5024d46264e51cb95aed8c3acdced28KeyWordIn = "";    
var tablee1b6c5024d46264e51cb95aed8c3acdced28ParamIn = "";    
var tablee1b6c5024d46264e51cb95aed8c3acdced28SelectRow = {     
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28LoadComplete = {     
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28BeforeEditCell = {        
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28OndblClickRow = {     
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28OnRightClickRow = {     
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28GridComplete = {     
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28OnCellSelect = {     
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
var tablee1b6c5024d46264e51cb95aed8c3acdced28LoadBeforeSend = {        
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
function tablee1b6c5024d46264e51cb95aed8c3acdced28Reload(pid){
	var _isInvalid = true;
	$("#tablee1b6c5024d46264e51cb95aed8c3acdced28").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee1b6c5024d46264e51cb95aed8c3acdced28Pid = pid;
		}
		return false;
	}
	window.tablee1b6c5024d46264e51cb95aed8c3acdced28Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee1b6c5024d46264e51cb95aed8c3acdced28TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee1b6c5024d46264e51cb95aed8c3acdced28Pid == 'undefined' || window.tablee1b6c5024d46264e51cb95aed8c3acdced28Pid!=null){
tablee1b6c5024d46264e51cb95aed8c3acdced28Reload(window.tablee1b6c5024d46264e51cb95aed8c3acdced28Pid);
}
}
var tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28 = [];
var uniqueColtablee1b6c5024d46264e51cb95aed8c3acdced28 = [];
var uniqueColTitletablee1b6c5024d46264e51cb95aed8c3acdced28 = [];
var defaultValuetablee1b6c5024d46264e51cb95aed8c3acdced28 = {};
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '申请人',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '申请人', formatter:formattablee1b6c5024d46264e51cb95aed8c3acdced28Detail, hidden:false, name: 'CREATED_BYName',align:'left',  width: '150px'});
function formattablee1b6c5024d46264e51cb95aed8c3acdced28Detail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totablee1b6c5024d46264e51cb95aed8c3acdced28Detail(\''+id+'\')">'+cellvalue+'</a>';
}function totablee1b6c5024d46264e51cb95aed8c3acdced28Detail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id='+id      
	});  
}tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '会议日期', formatter:format, hidden:false, name: 'MEET_DATE',align:'center',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '会议名称',hidden:false, name: 'MEET_NAME',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '会议类型',hidden:true, name: 'MEET_TYPE',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '会议类型',hidden:false, name: 'MEET_TYPEName',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '会议地点',hidden:false, name: 'MEET_PLACE',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '参会组织名称',hidden:false, name: 'JOIN_MEET_ORG',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '会议提纲',hidden:false, name: 'MEET_OUTLINE',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '是否记录培训学时',hidden:true, name: 'HOURS_RECORD_YN',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '是否记录培训学时',hidden:false, name: 'HOURS_RECORD_YNName',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '学时',hidden:false, name: 'LEARN_HOURS',align:'right',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '会议主题',hidden:false, name: 'MEET_THEME',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '应到人数',hidden:false, name: 'DUE_PEOPLE_NUM',align:'right',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '参会率',hidden:false, name: 'JOIN_MEET_RATE',align:'right',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '请假人数',hidden:false, name: 'LEAVE_PEOPLE_NUM',align:'right',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '实到人数',hidden:false, name: 'ACTUAL_PEOPLE_NUM',align:'right',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '请假人员名单',hidden:true, name: 'LEAVE_PEOPLE',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({ label: '请假人员名单',hidden:false, name: 'LEAVE_PEOPLEName',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '授课人',hidden:false, name: 'LECTURER',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '主讲',hidden:false, name: 'SPEAKER',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '备注',hidden:false, name: 'REMARKS',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '主持人',hidden:false, name: 'HOST_TAKER',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '记录人',hidden:false, name: 'NOTE_TAKER',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '会议结果',hidden:false, name: 'MEET_RESULT',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
	var searchNamestablee1b6c5024d46264e51cb95aed8c3acdced28 = []; 
searchNamestablee1b6c5024d46264e51cb95aed8c3acdced28.push('MEET_NAME');
$('#keyWordtablee1b6c5024d46264e51cb95aed8c3acdced28').attr('placeholder', '请输入会议名称查询');
function searchDataKeyWordtablee1b6c5024d46264e51cb95aed8c3acdced28(){
	var keyWord = $.trim($("#keyWordtablee1b6c5024d46264e51cb95aed8c3acdced28").val()); 
 if($('#keyWordtablee1b6c5024d46264e51cb95aed8c3acdced28').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablee1b6c5024d46264e51cb95aed8c3acdced28.length;i++){ 
		var name = searchNamestablee1b6c5024d46264e51cb95aed8c3acdced28[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablee1b6c5024d46264e51cb95aed8c3acdced28KeyWordIn=JSON.stringify(param);
tablee1b6c5024d46264e51cb95aed8c3acdced28ParamIn="";
	$('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablee1b6c5024d46264e51cb95aed8c3acdced28').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablee1b6c5024d46264e51cb95aed8c3acdced28();
	}
});
$('#keyWordBttablee1b6c5024d46264e51cb95aed8c3acdced28').bind('click', function() {
		searchDataKeyWordtablee1b6c5024d46264e51cb95aed8c3acdced28();
});
;$(document).ready(function(){ 

$("#tablee1b6c5024d46264e51cb95aed8c3acdced28").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f4eb25b017f635cd3051a11/tablee1b6c5024d46264e51cb95aed8c3acdced28/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablee1b6c5024d46264e51cb95aed8c3acdced28,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:true,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee1b6c5024d46264e51cb95aed8c3acdced28SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee1b6c5024d46264e51cb95aed8c3acdced28LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee1b6c5024d46264e51cb95aed8c3acdced28OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee1b6c5024d46264e51cb95aed8c3acdced28OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee1b6c5024d46264e51cb95aed8c3acdced28GridComplete.exec();
				    setTimeout(function(){var height = $("#tablee1b6c5024d46264e51cb95aed8c3acdced28").closest('.ui-jqgrid-bdiv').height();
					$("#tablee1b6c5024d46264e51cb95aed8c3acdced28norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee1b6c5024d46264e51cb95aed8c3acdced28norecords img").css("width","120px");
                 }else{
					    $("#tablee1b6c5024d46264e51cb95aed8c3acdced28norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee1b6c5024d46264e51cb95aed8c3acdced28BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee1b6c5024d46264e51cb95aed8c3acdced28OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee1b6c5024d46264e51cb95aed8c3acdced28norecords").hide();
		   	    $("#Pagertablee1b6c5024d46264e51cb95aed8c3acdced28_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee1b6c5024d46264e51cb95aed8c3acdced28").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee1b6c5024d46264e51cb95aed8c3acdced28").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					//$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee1b6c5024d46264e51cb95aed8c3acdced28norecords").html() == null) {
						$("#tablee1b6c5024d46264e51cb95aed8c3acdced28").parent().append("<div class='no_data' id='tablee1b6c5024d46264e51cb95aed8c3acdced28norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee1b6c5024d46264e51cb95aed8c3acdced28norecords").show();
					$("#Pagertablee1b6c5024d46264e51cb95aed8c3acdced28_left").css("display", "none");
				}
tablee1b6c5024d46264e51cb95aed8c3acdced28LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: true,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee1b6c5024d46264e51cb95aed8c3acdced28"
    });
tablee1b6c5024d46264e51cb95aed8c3acdced28Reload();
$("#t_tablee1b6c5024d46264e51cb95aed8c3acdced28").append($("#tableToolbartablee1b6c5024d46264e51cb95aed8c3acdced28"));$("#tableToolbarButton8f482ffda574be4627099f3c978922e8bbea").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f4eb25b017f63319c2c18bb&grid=tablee1b6c5024d46264e51cb95aed8c3acdced28',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton5d45fbe8120b514bad199132e7ccd996293d").bind('click',function() {                                                                                       
	var ids = $('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f4eb25b017f63319c2c18bb&id=' + rowData.ID+'&grid=tablee1b6c5024d46264e51cb95aed8c3acdced28',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton51dd5ac427e42144cd28eb7e2fc6409ccf77").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_THREE_FOUR&isbpm=N&dbid=402811817f4eb25b017f633a26e918bc', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817f4eb25b017f635cd3051a11',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablee1b6c5024d46264e51cb95aed8c3acdced28').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonf5d8c90e489ab94cd6585a2579256b884155").bind('click',function(event){var bpmsDeleteRows = $('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('getGridParam', 'selarrrow');  
if(bpmsDeleteRows .length!=0){
window.open('avicit/pb/print/ThreeFourPrint/view?id='+bpmsDeleteRows[0])
}});
function searchDatatablee1b6c5024d46264e51cb95aed8c3acdced28(){
 var para = serializeObjectForEform($("#searchformtablee1b6c5024d46264e51cb95aed8c3acdced28"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablee1b6c5024d46264e51cb95aed8c3acdced28KeyWordIn="";
tablee1b6c5024d46264e51cb95aed8c3acdced28ParamIn=JSON.stringify(para);
	$('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablee1b6c5024d46264e51cb95aed8c3acdced28").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablee1b6c5024d46264e51cb95aed8c3acdced28').bind('click',function(){
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
	content: $('#searchDialogtablee1b6c5024d46264e51cb95aed8c3acdced28'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablee1b6c5024d46264e51cb95aed8c3acdced28(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablee1b6c5024d46264e51cb95aed8c3acdced28")); searchDatatablee1b6c5024d46264e51cb95aed8c3acdced28(); layer.close(index); return false;
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
$('#CREATED_BYAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'CREATED_BY',textFiled:'CREATED_BYAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
;});	 
