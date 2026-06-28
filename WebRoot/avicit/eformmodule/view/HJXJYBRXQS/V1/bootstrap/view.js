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

function redraw948e83e3828f72f301829016c3d83749(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3828f72f301829016c3d83749").width();
		var win_height = $("#948e83e3828f72f301829016c3d83749").height();
		$('#948e83e3828f72f301829016c3d83749').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3828f72f301829016c3d83749').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3828f72f301829016c3d83749").width();
	setTimeout(function(){redraw948e83e3828f72f301829016c3d83749(win_width);},500);
});
var table70f416446aa46d494fdade987722ae1e872fKeyWordIn = "";    
var table70f416446aa46d494fdade987722ae1e872fParamIn = "";    
var table70f416446aa46d494fdade987722ae1e872fSelectRow = {     
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
var table70f416446aa46d494fdade987722ae1e872fLoadComplete = {     
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
var table70f416446aa46d494fdade987722ae1e872fBeforeEditCell = {        
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
var table70f416446aa46d494fdade987722ae1e872fOndblClickRow = {     
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
var table70f416446aa46d494fdade987722ae1e872fOnRightClickRow = {     
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
var table70f416446aa46d494fdade987722ae1e872fGridComplete = {     
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
var table70f416446aa46d494fdade987722ae1e872fOnCellSelect = {     
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
var table70f416446aa46d494fdade987722ae1e872fLoadBeforeSend = {        
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
function table70f416446aa46d494fdade987722ae1e872fReload(pid){
	var _isInvalid = true;
	$("#table70f416446aa46d494fdade987722ae1e872f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table70f416446aa46d494fdade987722ae1e872fPid = pid;
		}
		return false;
	}
	window.table70f416446aa46d494fdade987722ae1e872fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table70f416446aa46d494fdade987722ae1e872f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table70f416446aa46d494fdade987722ae1e872fReload();
};
function table70f416446aa46d494fdade987722ae1e872fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table70f416446aa46d494fdade987722ae1e872fPid == 'undefined' || window.table70f416446aa46d494fdade987722ae1e872fPid!=null){
table70f416446aa46d494fdade987722ae1e872fReload(window.table70f416446aa46d494fdade987722ae1e872fPid);
}
}
var tablecmtable70f416446aa46d494fdade987722ae1e872f = [];
var uniqueColtable70f416446aa46d494fdade987722ae1e872f = [];
var uniqueColTitletable70f416446aa46d494fdade987722ae1e872f = [];
var defaultValuetable70f416446aa46d494fdade987722ae1e872f = {};
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '申请日期',hidden:false, name: 'REQUST_DATE',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({ label: '选举类型',hidden:true, name: 'PARTY_TYPE',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({ label: '选举类型',hidden:false, name: 'PARTY_TYPEName',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '选举党组织名称',hidden:false, name: 'PARTY_NAME_NEW',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '申请人所在党支部',hidden:true, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '申请人所在单位',hidden:true, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称',hidden:true, name: 'THREE_FOUR_NAME',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称1',hidden:true, name: 'HREE_FOUR_NAME1',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课ID1',hidden:true, name: 'THREE_FOUR_ID1',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课ID',hidden:true, name: 'THREE_FOUR_ID',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称1',hidden:true, name: 'THREE_FOUR_NAME1',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '党小组会/党员大会接收人',hidden:false, name: 'SEL_USER',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '申请人电话',hidden:true, name: 'USER_TEL',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '所选人员id',hidden:true, name: 'SEL_USER_ID',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '文件密级',hidden:true, name: 'FILE_TYPE',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '测试1',hidden:true, name: 'CS',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称2',hidden:true, name: 'THREE_FOUR_NAME2',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称3',hidden:true, name: 'THREE_FOUR_NAME3',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称4',hidden:true, name: 'THREE_FOUR_NAME4',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课名称5',hidden:true, name: 'THREE_FOUR_NAME5',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课ID2',hidden:true, name: 'THREE_FOUR_ID2',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课ID3',hidden:true, name: 'THREE_FOUR_ID3',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课ID4',hidden:true, name: 'THREE_FOUR_ID4',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '三会一课ID5',hidden:true, name: 'THREE_FOUR_ID5',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({label: '是否延期',hidden:true, name: 'ISLATE',align:'left',  width: '150px'});
tablecmtable70f416446aa46d494fdade987722ae1e872f.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable70f416446aa46d494fdade987722ae1e872f.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable70f416446aa46d494fdade987722ae1e872f.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable70f416446aa46d494fdade987722ae1e872f.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function table70f416446aa46d494fdade987722ae1e872finitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton4e9b4dda7ad9e24ef9b83907a94ab73d0999").css('display','inline-block');
}else{
$("#tableToolbarButton4e9b4dda7ad9e24ef9b83907a94ab73d0999").hide();
}
table70f416446aa46d494fdade987722ae1e872fsearchWF();
}
function table70f416446aa46d494fdade987722ae1e872fsearchWF(){
   if ($("#searchformtable70f416446aa46d494fdade987722ae1e872f").length>0){
      var para = serializeObject($("#searchformtable70f416446aa46d494fdade987722ae1e872f"));
      para.bpmState = $('#table70f416446aa46d494fdade987722ae1e872fworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table70f416446aa46d494fdade987722ae1e872f').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table70f416446aa46d494fdade987722ae1e872fworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table70f416446aa46d494fdade987722ae1e872f').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

table70f416446aa46d494fdade987722ae1e872fLoadComplete.addEvent(function(data){$("#tableToolbarButton4e9b4dda7ad9e24ef9b83907a94ab73d0999").css("display","");});
$("#table70f416446aa46d494fdade987722ae1e872f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3828f72f301829016c3d83749/table70f416446aa46d494fdade987722ae1e872f/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable70f416446aa46d494fdade987722ae1e872f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table70f416446aa46d494fdade987722ae1e872fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table70f416446aa46d494fdade987722ae1e872fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table70f416446aa46d494fdade987722ae1e872fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table70f416446aa46d494fdade987722ae1e872fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table70f416446aa46d494fdade987722ae1e872fGridComplete.exec();
				    setTimeout(function(){var height = $("#table70f416446aa46d494fdade987722ae1e872f").closest('.ui-jqgrid-bdiv').height();
					$("#table70f416446aa46d494fdade987722ae1e872fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table70f416446aa46d494fdade987722ae1e872fnorecords img").css("width","120px");
                 }else{
					    $("#table70f416446aa46d494fdade987722ae1e872fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table70f416446aa46d494fdade987722ae1e872fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table70f416446aa46d494fdade987722ae1e872fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table70f416446aa46d494fdade987722ae1e872fnorecords").hide();
		   	    $("#Pagertable70f416446aa46d494fdade987722ae1e872f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table70f416446aa46d494fdade987722ae1e872f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table70f416446aa46d494fdade987722ae1e872f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table70f416446aa46d494fdade987722ae1e872fnorecords").html() == null) {
						$("#table70f416446aa46d494fdade987722ae1e872f").parent().append("<div class='no_data' id='table70f416446aa46d494fdade987722ae1e872fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table70f416446aa46d494fdade987722ae1e872fnorecords").show();
					$("#Pagertable70f416446aa46d494fdade987722ae1e872f_left").css("display", "none");
				}
table70f416446aa46d494fdade987722ae1e872fLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable70f416446aa46d494fdade987722ae1e872f"
    });
table70f416446aa46d494fdade987722ae1e872fReload();
$("#t_table70f416446aa46d494fdade987722ae1e872f").append($("#tableToolbartable70f416446aa46d494fdade987722ae1e872f"));$("#tableToolbarButtonda0a0289c05f07469da8dbacafdf4cb2df9a").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f301828ffcb103358e&grid=table70f416446aa46d494fdade987722ae1e872f'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton4e9b4dda7ad9e24ef9b83907a94ab73d0999").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table70f416446aa46d494fdade987722ae1e872f').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table70f416446aa46d494fdade987722ae1e872f').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_HUANJIE_YBRX&isbpm=Y&dbid=948e83e3828f72f3018290027e4835c4', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3828f72f301829016c3d83749',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table70f416446aa46d494fdade987722ae1e872f').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton4e9b4dda7ad9e24ef9b83907a94ab73d0999").hide();
$('#table70f416446aa46d494fdade987722ae1e872fworkFlowSelect').bind('change',function(){
table70f416446aa46d494fdade987722ae1e872finitWorkFlow($(this).val());
});
function searchDatatable70f416446aa46d494fdade987722ae1e872f(){
 var para = serializeObjectForEform($("#searchformtable70f416446aa46d494fdade987722ae1e872f"));
 para.bpmState = $('#table70f416446aa46d494fdade987722ae1e872fworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table70f416446aa46d494fdade987722ae1e872fKeyWordIn="";
table70f416446aa46d494fdade987722ae1e872fParamIn=JSON.stringify(para);
	$('#table70f416446aa46d494fdade987722ae1e872f').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable70f416446aa46d494fdade987722ae1e872f").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable70f416446aa46d494fdade987722ae1e872f').bind('click',function(){
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
	content: $('#searchDialogtable70f416446aa46d494fdade987722ae1e872f'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable70f416446aa46d494fdade987722ae1e872f(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable70f416446aa46d494fdade987722ae1e872f")); searchDatatable70f416446aa46d494fdade987722ae1e872f(); layer.close(index); return false;
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
