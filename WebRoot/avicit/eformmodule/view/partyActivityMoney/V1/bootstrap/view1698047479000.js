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

function redraw402811817f19a849017f1f408a7b20a0(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817f19a849017f1f408a7b20a0").width();
		var win_height = $("#402811817f19a849017f1f408a7b20a0").height();
		$('#402811817f19a849017f1f408a7b20a0').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#402811817f19a849017f1f408a7b20a0').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817f19a849017f1f408a7b20a0").width();
	setTimeout(function(){redraw402811817f19a849017f1f408a7b20a0(win_width);},500);
});
var table8db1474c11953e4cfa9bae3e00d562569cf1KeyWordIn = "";    
var table8db1474c11953e4cfa9bae3e00d562569cf1ParamIn = "";    
var table8db1474c11953e4cfa9bae3e00d562569cf1SelectRow = {     
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
var table8db1474c11953e4cfa9bae3e00d562569cf1LoadComplete = {     
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
var table8db1474c11953e4cfa9bae3e00d562569cf1BeforeEditCell = {        
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
var table8db1474c11953e4cfa9bae3e00d562569cf1OndblClickRow = {     
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
var table8db1474c11953e4cfa9bae3e00d562569cf1OnRightClickRow = {     
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
var table8db1474c11953e4cfa9bae3e00d562569cf1GridComplete = {     
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
var table8db1474c11953e4cfa9bae3e00d562569cf1OnCellSelect = {     
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
var table8db1474c11953e4cfa9bae3e00d562569cf1LoadBeforeSend = {        
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
function table8db1474c11953e4cfa9bae3e00d562569cf1Reload(pid){
	var _isInvalid = true;
	$("#table8db1474c11953e4cfa9bae3e00d562569cf1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8db1474c11953e4cfa9bae3e00d562569cf1Pid = pid;
		}
		return false;
	}
	window.table8db1474c11953e4cfa9bae3e00d562569cf1Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8db1474c11953e4cfa9bae3e00d562569cf1').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table8db1474c11953e4cfa9bae3e00d562569cf1Reload();
};
function table8db1474c11953e4cfa9bae3e00d562569cf1TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8db1474c11953e4cfa9bae3e00d562569cf1Pid == 'undefined' || window.table8db1474c11953e4cfa9bae3e00d562569cf1Pid!=null){
table8db1474c11953e4cfa9bae3e00d562569cf1Reload(window.table8db1474c11953e4cfa9bae3e00d562569cf1Pid);
}
}
var tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1 = [];
var uniqueColtable8db1474c11953e4cfa9bae3e00d562569cf1 = [];
var uniqueColTitletable8db1474c11953e4cfa9bae3e00d562569cf1 = [];
var defaultValuetable8db1474c11953e4cfa9bae3e00d562569cf1 = {};
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '申请日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '经办人',hidden:false, name: 'HANDLER',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '党员总人数',hidden:true, name: 'PARTY_MEMBER_NUM',align:'right',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '经办人所在党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '总计金额',hidden:true, name: 'TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '经办人ID',hidden:true, name: 'HANDLER_ID',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function table8db1474c11953e4cfa9bae3e00d562569cf1initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtondd1e5fd77d5c3149693a6bcd2bd12c1c0b64").css('display','inline-block');
}else{
$("#tableToolbarButtondd1e5fd77d5c3149693a6bcd2bd12c1c0b64").hide();
}
table8db1474c11953e4cfa9bae3e00d562569cf1searchWF();
}
function table8db1474c11953e4cfa9bae3e00d562569cf1searchWF(){
   if ($("#searchformtable8db1474c11953e4cfa9bae3e00d562569cf1").length>0){
      var para = serializeObject($("#searchformtable8db1474c11953e4cfa9bae3e00d562569cf1"));
      para.bpmState = $('#table8db1474c11953e4cfa9bae3e00d562569cf1workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table8db1474c11953e4cfa9bae3e00d562569cf1').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table8db1474c11953e4cfa9bae3e00d562569cf1workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table8db1474c11953e4cfa9bae3e00d562569cf1').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table8db1474c11953e4cfa9bae3e00d562569cf1").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f19a849017f1f408a7b20a0/table8db1474c11953e4cfa9bae3e00d562569cf1/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8db1474c11953e4cfa9bae3e00d562569cf1,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8db1474c11953e4cfa9bae3e00d562569cf1SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8db1474c11953e4cfa9bae3e00d562569cf1LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8db1474c11953e4cfa9bae3e00d562569cf1OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8db1474c11953e4cfa9bae3e00d562569cf1OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8db1474c11953e4cfa9bae3e00d562569cf1GridComplete.exec();
				    setTimeout(function(){var height = $("#table8db1474c11953e4cfa9bae3e00d562569cf1").closest('.ui-jqgrid-bdiv').height();
					$("#table8db1474c11953e4cfa9bae3e00d562569cf1norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8db1474c11953e4cfa9bae3e00d562569cf1norecords img").css("width","120px");
                 }else{
					    $("#table8db1474c11953e4cfa9bae3e00d562569cf1norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8db1474c11953e4cfa9bae3e00d562569cf1BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8db1474c11953e4cfa9bae3e00d562569cf1OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8db1474c11953e4cfa9bae3e00d562569cf1norecords").hide();
		   	    $("#Pagertable8db1474c11953e4cfa9bae3e00d562569cf1_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8db1474c11953e4cfa9bae3e00d562569cf1").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8db1474c11953e4cfa9bae3e00d562569cf1").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8db1474c11953e4cfa9bae3e00d562569cf1norecords").html() == null) {
						$("#table8db1474c11953e4cfa9bae3e00d562569cf1").parent().append("<div class='no_data' id='table8db1474c11953e4cfa9bae3e00d562569cf1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8db1474c11953e4cfa9bae3e00d562569cf1norecords").show();
					$("#Pagertable8db1474c11953e4cfa9bae3e00d562569cf1_left").css("display", "none");
				}
table8db1474c11953e4cfa9bae3e00d562569cf1LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8db1474c11953e4cfa9bae3e00d562569cf1"
    });
table8db1474c11953e4cfa9bae3e00d562569cf1Reload();
$("#t_table8db1474c11953e4cfa9bae3e00d562569cf1").append($("#tableToolbartable8db1474c11953e4cfa9bae3e00d562569cf1"));$("#tableToolbarButton967dc6ca811ff34e330970a76ed61fcc7a02").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f19a849017f1f1222c41c07&grid=table8db1474c11953e4cfa9bae3e00d562569cf1'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtondd1e5fd77d5c3149693a6bcd2bd12c1c0b64").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table8db1474c11953e4cfa9bae3e00d562569cf1').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table8db1474c11953e4cfa9bae3e00d562569cf1').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_ACTIVITY&isbpm=Y&dbid=402811817f19a849017f1f180b721c68', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817f19a849017f1f408a7b20a0',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table8db1474c11953e4cfa9bae3e00d562569cf1').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtondd1e5fd77d5c3149693a6bcd2bd12c1c0b64").hide();
$('#table8db1474c11953e4cfa9bae3e00d562569cf1workFlowSelect').bind('change',function(){
table8db1474c11953e4cfa9bae3e00d562569cf1initWorkFlow($(this).val());
});
;});	 
