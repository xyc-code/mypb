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

function redraw402811817f19a849017f2031b53a2bdd(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817f19a849017f2031b53a2bdd").width();
		var win_height = $("#402811817f19a849017f2031b53a2bdd").height();
		$('#402811817f19a849017f2031b53a2bdd').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#402811817f19a849017f2031b53a2bdd').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817f19a849017f2031b53a2bdd").width();
	setTimeout(function(){redraw402811817f19a849017f2031b53a2bdd(win_width);},500);
});
var tabledc87c1d7b64ccc481d183751959b49c4b8d3KeyWordIn = "";    
var tabledc87c1d7b64ccc481d183751959b49c4b8d3ParamIn = "";    
var tabledc87c1d7b64ccc481d183751959b49c4b8d3SelectRow = {     
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3LoadComplete = {     
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3BeforeEditCell = {        
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3OndblClickRow = {     
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3OnRightClickRow = {     
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3GridComplete = {     
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3OnCellSelect = {     
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
var tabledc87c1d7b64ccc481d183751959b49c4b8d3LoadBeforeSend = {        
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
function tabledc87c1d7b64ccc481d183751959b49c4b8d3Reload(pid){
	var _isInvalid = true;
	$("#tabledc87c1d7b64ccc481d183751959b49c4b8d3").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabledc87c1d7b64ccc481d183751959b49c4b8d3Pid = pid;
		}
		return false;
	}
	window.tabledc87c1d7b64ccc481d183751959b49c4b8d3Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabledc87c1d7b64ccc481d183751959b49c4b8d3').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tabledc87c1d7b64ccc481d183751959b49c4b8d3Reload();
};
function tabledc87c1d7b64ccc481d183751959b49c4b8d3TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabledc87c1d7b64ccc481d183751959b49c4b8d3Pid == 'undefined' || window.tabledc87c1d7b64ccc481d183751959b49c4b8d3Pid!=null){
tabledc87c1d7b64ccc481d183751959b49c4b8d3Reload(window.tabledc87c1d7b64ccc481d183751959b49c4b8d3Pid);
}
}
var tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3 = [];
var uniqueColtabledc87c1d7b64ccc481d183751959b49c4b8d3 = [];
var uniqueColTitletabledc87c1d7b64ccc481d183751959b49c4b8d3 = [];
var defaultValuetabledc87c1d7b64ccc481d183751959b49c4b8d3 = {};
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '自动编码',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '申请日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '党员总人数',hidden:false, name: 'PARTY_MEMBER_NUM',align:'right',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '总计金额',hidden:false, name: 'TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '经办人',hidden:false, name: 'HANDLER',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '经办人ID',hidden:true, name: 'HANDLER_ID',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function tabledc87c1d7b64ccc481d183751959b49c4b8d3initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton09d5ccd7b235e64eb9c88e0c272600f46ac2").css('display','inline-block');
}else{
$("#tableToolbarButton09d5ccd7b235e64eb9c88e0c272600f46ac2").hide();
}
tabledc87c1d7b64ccc481d183751959b49c4b8d3searchWF();
}
function tabledc87c1d7b64ccc481d183751959b49c4b8d3searchWF(){
   if ($("#searchformtabledc87c1d7b64ccc481d183751959b49c4b8d3").length>0){
      var para = serializeObject($("#searchformtabledc87c1d7b64ccc481d183751959b49c4b8d3"));
      para.bpmState = $('#tabledc87c1d7b64ccc481d183751959b49c4b8d3workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tabledc87c1d7b64ccc481d183751959b49c4b8d3').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tabledc87c1d7b64ccc481d183751959b49c4b8d3workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tabledc87c1d7b64ccc481d183751959b49c4b8d3').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#tabledc87c1d7b64ccc481d183751959b49c4b8d3").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f19a849017f2031b53a2bdd/tabledc87c1d7b64ccc481d183751959b49c4b8d3/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabledc87c1d7b64ccc481d183751959b49c4b8d3,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabledc87c1d7b64ccc481d183751959b49c4b8d3SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabledc87c1d7b64ccc481d183751959b49c4b8d3LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabledc87c1d7b64ccc481d183751959b49c4b8d3OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabledc87c1d7b64ccc481d183751959b49c4b8d3OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabledc87c1d7b64ccc481d183751959b49c4b8d3GridComplete.exec();
				    setTimeout(function(){var height = $("#tabledc87c1d7b64ccc481d183751959b49c4b8d3").closest('.ui-jqgrid-bdiv').height();
					$("#tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords img").css("width","120px");
                 }else{
					    $("#tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabledc87c1d7b64ccc481d183751959b49c4b8d3BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabledc87c1d7b64ccc481d183751959b49c4b8d3OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords").hide();
		   	    $("#Pagertabledc87c1d7b64ccc481d183751959b49c4b8d3_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabledc87c1d7b64ccc481d183751959b49c4b8d3").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabledc87c1d7b64ccc481d183751959b49c4b8d3").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords").html() == null) {
						$("#tabledc87c1d7b64ccc481d183751959b49c4b8d3").parent().append("<div class='no_data' id='tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabledc87c1d7b64ccc481d183751959b49c4b8d3norecords").show();
					$("#Pagertabledc87c1d7b64ccc481d183751959b49c4b8d3_left").css("display", "none");
				}
tabledc87c1d7b64ccc481d183751959b49c4b8d3LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabledc87c1d7b64ccc481d183751959b49c4b8d3"
    });
tabledc87c1d7b64ccc481d183751959b49c4b8d3Reload();
$("#t_tabledc87c1d7b64ccc481d183751959b49c4b8d3").append($("#tableToolbartabledc87c1d7b64ccc481d183751959b49c4b8d3"));$("#tableToolbarButtonbf4fb55bed74814c05eaa9d03d0dd33f3548").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f19a849017f2019172f2820&grid=tabledc87c1d7b64ccc481d183751959b49c4b8d3'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton09d5ccd7b235e64eb9c88e0c272600f46ac2").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabledc87c1d7b64ccc481d183751959b49c4b8d3').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabledc87c1d7b64ccc481d183751959b49c4b8d3').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTYORG_MONEY&isbpm=Y&dbid=402811817f19a849017f201ccbc5288b', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817f19a849017f2031b53a2bdd',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabledc87c1d7b64ccc481d183751959b49c4b8d3').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton09d5ccd7b235e64eb9c88e0c272600f46ac2").hide();
$('#tabledc87c1d7b64ccc481d183751959b49c4b8d3workFlowSelect').bind('change',function(){
tabledc87c1d7b64ccc481d183751959b49c4b8d3initWorkFlow($(this).val());
});
;});	 
