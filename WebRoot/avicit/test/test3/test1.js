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

function redraw402811817e66b721017e66fb3de001f7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817e66b721017e66fb3de001f7").width();
		var win_height = $("#402811817e66b721017e66fb3de001f7").height();
		$('#402811817e66b721017e66fb3de001f7').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#402811817e66b721017e66fb3de001f7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817e66b721017e66fb3de001f7").width();
	setTimeout(function(){redraw402811817e66b721017e66fb3de001f7(win_width);},500);
});
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbKeyWordIn = "";    
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbParamIn = "";    
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbSelectRow = {     
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbLoadComplete = {     
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbBeforeEditCell = {        
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbOndblClickRow = {     
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbOnRightClickRow = {     
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbGridComplete = {     
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbOnCellSelect = {     
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
var tablea1c6efb7a1ceb2428e3979b106ec2cb320dbLoadBeforeSend = {        
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
function tablea1c6efb7a1ceb2428e3979b106ec2cb320dbReload(pid){
	var _isInvalid = true;
	$("#tablea1c6efb7a1ceb2428e3979b106ec2cb320db").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablea1c6efb7a1ceb2428e3979b106ec2cb320dbPid = pid;
		}
		return false;
	}
	window.tablea1c6efb7a1ceb2428e3979b106ec2cb320dbPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablea1c6efb7a1ceb2428e3979b106ec2cb320db').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tablea1c6efb7a1ceb2428e3979b106ec2cb320dbReload();
};
function tablea1c6efb7a1ceb2428e3979b106ec2cb320dbTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablea1c6efb7a1ceb2428e3979b106ec2cb320dbPid == 'undefined' || window.tablea1c6efb7a1ceb2428e3979b106ec2cb320dbPid!=null){
tablea1c6efb7a1ceb2428e3979b106ec2cb320dbReload(window.tablea1c6efb7a1ceb2428e3979b106ec2cb320dbPid);
}
}
var tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db = [];
var uniqueColtablea1c6efb7a1ceb2428e3979b106ec2cb320db = [];
var uniqueColTitletablea1c6efb7a1ceb2428e3979b106ec2cb320db = [];
var defaultValuetablea1c6efb7a1ceb2428e3979b106ec2cb320db = {};
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: 'DATA_1',hidden:false, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '字段_2',hidden:false, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function tablea1c6efb7a1ceb2428e3979b106ec2cb320dbinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtoncb8669256b6bd344186be67ffe46b32a9187").css('display','inline-block');
}else{
$("#tableToolbarButtoncb8669256b6bd344186be67ffe46b32a9187").hide();
}
tablea1c6efb7a1ceb2428e3979b106ec2cb320dbsearchWF();
}
function tablea1c6efb7a1ceb2428e3979b106ec2cb320dbsearchWF(){
   if ($("#searchformtablea1c6efb7a1ceb2428e3979b106ec2cb320db").length>0){
      var para = serializeObject($("#searchformtablea1c6efb7a1ceb2428e3979b106ec2cb320db"));
      para.bpmState = $('#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#tablea1c6efb7a1ceb2428e3979b106ec2cb320db').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#tablea1c6efb7a1ceb2428e3979b106ec2cb320db').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#tablea1c6efb7a1ceb2428e3979b106ec2cb320db").jqGrid({ 
    	   url: 'avicit/test/Test3Test1Controller',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablea1c6efb7a1ceb2428e3979b106ec2cb320db,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablea1c6efb7a1ceb2428e3979b106ec2cb320dbSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablea1c6efb7a1ceb2428e3979b106ec2cb320dbLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablea1c6efb7a1ceb2428e3979b106ec2cb320dbOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablea1c6efb7a1ceb2428e3979b106ec2cb320dbOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablea1c6efb7a1ceb2428e3979b106ec2cb320dbGridComplete.exec();
				    setTimeout(function(){var height = $("#tablea1c6efb7a1ceb2428e3979b106ec2cb320db").closest('.ui-jqgrid-bdiv').height();
					$("#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords img").css("width","120px");
                 }else{
					    $("#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablea1c6efb7a1ceb2428e3979b106ec2cb320dbBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablea1c6efb7a1ceb2428e3979b106ec2cb320dbOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords").hide();
		   	    $("#Pagertablea1c6efb7a1ceb2428e3979b106ec2cb320db_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablea1c6efb7a1ceb2428e3979b106ec2cb320db").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablea1c6efb7a1ceb2428e3979b106ec2cb320db").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords").html() == null) {
						$("#tablea1c6efb7a1ceb2428e3979b106ec2cb320db").parent().append("<div class='no_data' id='tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbnorecords").show();
					$("#Pagertablea1c6efb7a1ceb2428e3979b106ec2cb320db_left").css("display", "none");
				}
tablea1c6efb7a1ceb2428e3979b106ec2cb320dbLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablea1c6efb7a1ceb2428e3979b106ec2cb320db"
    });
tablea1c6efb7a1ceb2428e3979b106ec2cb320dbReload();
$("#t_tablea1c6efb7a1ceb2428e3979b106ec2cb320db").append($("#tableToolbartablea1c6efb7a1ceb2428e3979b106ec2cb320db"));$('#tablea1c6efb7a1ceb2428e3979b106ec2cb320dbworkFlowSelect').bind('change',function(){
tablea1c6efb7a1ceb2428e3979b106ec2cb320dbinitWorkFlow($(this).val());
});
$("#tableToolbarButton9f8c4f4f7898bd4a9bca22262fb90e727838").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'avicit/test/Test3TestController/toTest3TestAdd?formInfoId=402811817e438190017e43856fc00150&grid=tablea1c6efb7a1ceb2428e3979b106ec2cb320db'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtoncb8669256b6bd344186be67ffe46b32a9187").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablea1c6efb7a1ceb2428e3979b106ec2cb320db').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablea1c6efb7a1ceb2428e3979b106ec2cb320db').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'avicit/test/Test3Test1Controller/tablea1c6efb7a1ceb2428e3979b106ec2cb320db/delete?tableName=DYN_TEST&isbpm=Y&dbid=402811817e51063f017e53db6feb0307', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817e66b721017e66fb3de001f7',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablea1c6efb7a1ceb2428e3979b106ec2cb320db').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtoncb8669256b6bd344186be67ffe46b32a9187").hide();
;});	 
