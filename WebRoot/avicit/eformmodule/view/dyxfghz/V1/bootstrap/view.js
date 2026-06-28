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

function redraw2c908c52909a0d9001909ac060ed20e9(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c52909a0d9001909ac060ed20e9").width();
		var win_height = $("#2c908c52909a0d9001909ac060ed20e9").height();
		$('#2c908c52909a0d9001909ac060ed20e9').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c52909a0d9001909ac060ed20e9').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c52909a0d9001909ac060ed20e9").width();
	setTimeout(function(){redraw2c908c52909a0d9001909ac060ed20e9(win_width);},500);
});
var table186eec30f896d14baa68fade6c087f11bedbKeyWordIn = "";    
var table186eec30f896d14baa68fade6c087f11bedbParamIn = "";    
var table186eec30f896d14baa68fade6c087f11bedbSelectRow = {     
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
var table186eec30f896d14baa68fade6c087f11bedbLoadComplete = {     
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
var table186eec30f896d14baa68fade6c087f11bedbBeforeEditCell = {        
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
var table186eec30f896d14baa68fade6c087f11bedbOndblClickRow = {     
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
var table186eec30f896d14baa68fade6c087f11bedbOnRightClickRow = {     
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
var table186eec30f896d14baa68fade6c087f11bedbGridComplete = {     
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
var table186eec30f896d14baa68fade6c087f11bedbOnCellSelect = {     
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
var table186eec30f896d14baa68fade6c087f11bedbLoadBeforeSend = {        
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
function table186eec30f896d14baa68fade6c087f11bedbReload(pid){
	var _isInvalid = true;
	$("#table186eec30f896d14baa68fade6c087f11bedb").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table186eec30f896d14baa68fade6c087f11bedbPid = pid;
		}
		return false;
	}
	window.table186eec30f896d14baa68fade6c087f11bedbPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table186eec30f896d14baa68fade6c087f11bedb').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table186eec30f896d14baa68fade6c087f11bedbReload();
};
function table186eec30f896d14baa68fade6c087f11bedbTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table186eec30f896d14baa68fade6c087f11bedbPid == 'undefined' || window.table186eec30f896d14baa68fade6c087f11bedbPid!=null){
table186eec30f896d14baa68fade6c087f11bedbReload(window.table186eec30f896d14baa68fade6c087f11bedbPid);
}
}
var tablecmtable186eec30f896d14baa68fade6c087f11bedb = [];
var uniqueColtable186eec30f896d14baa68fade6c087f11bedb = [];
var uniqueColTitletable186eec30f896d14baa68fade6c087f11bedb = [];
var defaultValuetable186eec30f896d14baa68fade6c087f11bedb = {};
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '表单编号',hidden:false, name: 'FORM_CODE',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '申请人',hidden:false, name: 'DREAF_USER',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '申请日期',hidden:false, name: 'DREAF_DATE',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '标题',hidden:false, name: 'TITLE',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '申请人电话',hidden:false, name: 'DREAF_TEL',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable186eec30f896d14baa68fade6c087f11bedb.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable186eec30f896d14baa68fade6c087f11bedb = []; 
searchNamestable186eec30f896d14baa68fade6c087f11bedb.push('FORM_CODE');
$('#keyWordtable186eec30f896d14baa68fade6c087f11bedb').attr('placeholder', '请输入表单编号查询');
function searchDataKeyWordtable186eec30f896d14baa68fade6c087f11bedb(){
	var keyWord = $.trim($("#keyWordtable186eec30f896d14baa68fade6c087f11bedb").val()); 
 if($('#keyWordtable186eec30f896d14baa68fade6c087f11bedb').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable186eec30f896d14baa68fade6c087f11bedb.length;i++){ 
		var name = searchNamestable186eec30f896d14baa68fade6c087f11bedb[i]; 
		param[name] = keyWord; 
	} 
if ($("#table186eec30f896d14baa68fade6c087f11bedbworkFlowSelect").length>0){param.bpmState=$('#table186eec30f896d14baa68fade6c087f11bedbworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table186eec30f896d14baa68fade6c087f11bedbKeyWordIn=JSON.stringify(param);
table186eec30f896d14baa68fade6c087f11bedbParamIn="";
	$('#table186eec30f896d14baa68fade6c087f11bedb').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable186eec30f896d14baa68fade6c087f11bedb').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable186eec30f896d14baa68fade6c087f11bedb();
	}
});
$('#keyWordBttable186eec30f896d14baa68fade6c087f11bedb').bind('click', function() {
		searchDataKeyWordtable186eec30f896d14baa68fade6c087f11bedb();
});
function table186eec30f896d14baa68fade6c087f11bedbinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton037a95f8202b624ae029ca46127cb6db82a1").css('display','inline-block');
}else{
$("#tableToolbarButton037a95f8202b624ae029ca46127cb6db82a1").hide();
}
table186eec30f896d14baa68fade6c087f11bedbsearchWF();
}
function table186eec30f896d14baa68fade6c087f11bedbsearchWF(){
   if ($("#searchformtable186eec30f896d14baa68fade6c087f11bedb").length>0){
      var para = serializeObject($("#searchformtable186eec30f896d14baa68fade6c087f11bedb"));
      para.bpmState = $('#table186eec30f896d14baa68fade6c087f11bedbworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table186eec30f896d14baa68fade6c087f11bedb').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table186eec30f896d14baa68fade6c087f11bedbworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table186eec30f896d14baa68fade6c087f11bedb').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table186eec30f896d14baa68fade6c087f11bedb").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c52909a0d9001909ac060ed20e9/table186eec30f896d14baa68fade6c087f11bedb/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable186eec30f896d14baa68fade6c087f11bedb,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table186eec30f896d14baa68fade6c087f11bedbSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table186eec30f896d14baa68fade6c087f11bedbLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table186eec30f896d14baa68fade6c087f11bedbOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table186eec30f896d14baa68fade6c087f11bedbOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table186eec30f896d14baa68fade6c087f11bedbGridComplete.exec();
				    setTimeout(function(){var height = $("#table186eec30f896d14baa68fade6c087f11bedb").closest('.ui-jqgrid-bdiv').height();
					$("#table186eec30f896d14baa68fade6c087f11bedbnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table186eec30f896d14baa68fade6c087f11bedbnorecords img").css("width","120px");
                 }else{
					    $("#table186eec30f896d14baa68fade6c087f11bedbnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table186eec30f896d14baa68fade6c087f11bedbBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table186eec30f896d14baa68fade6c087f11bedbOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table186eec30f896d14baa68fade6c087f11bedbnorecords").hide();
		   	    $("#Pagertable186eec30f896d14baa68fade6c087f11bedb_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table186eec30f896d14baa68fade6c087f11bedb").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table186eec30f896d14baa68fade6c087f11bedb").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table186eec30f896d14baa68fade6c087f11bedbnorecords").html() == null) {
						$("#table186eec30f896d14baa68fade6c087f11bedb").parent().append("<div class='no_data' id='table186eec30f896d14baa68fade6c087f11bedbnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table186eec30f896d14baa68fade6c087f11bedbnorecords").show();
					$("#Pagertable186eec30f896d14baa68fade6c087f11bedb_left").css("display", "none");
				}
table186eec30f896d14baa68fade6c087f11bedbLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable186eec30f896d14baa68fade6c087f11bedb"
    });
table186eec30f896d14baa68fade6c087f11bedbReload();
$("#t_table186eec30f896d14baa68fade6c087f11bedb").append($("#tableToolbartable186eec30f896d14baa68fade6c087f11bedb"));$("#tableToolbarButton0587b49f4a83764db0a813aa1eaee06e7f2f").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c52909a0d9001909aa3ee701fc2&grid=table186eec30f896d14baa68fade6c087f11bedb'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton037a95f8202b624ae029ca46127cb6db82a1").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table186eec30f896d14baa68fade6c087f11bedb').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table186eec30f896d14baa68fade6c087f11bedb').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DYN_XFG_MAIN&isbpm=Y&dbid=948e83e39072b5e30190760bb4b40fbe', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c52909a0d9001909ac060ed20e9',deleteclass:'avicit.pb.dyxfg.XfgSqSubDeleteEvent'},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table186eec30f896d14baa68fade6c087f11bedb').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton037a95f8202b624ae029ca46127cb6db82a1").hide();
$('#table186eec30f896d14baa68fade6c087f11bedbworkFlowSelect').bind('change',function(){
table186eec30f896d14baa68fade6c087f11bedbinitWorkFlow($(this).val());
});
;});	 
