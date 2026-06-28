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

function redraw948e83e39319e8fe01932d5509523d1f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39319e8fe01932d5509523d1f").width();
		var win_height = $("#948e83e39319e8fe01932d5509523d1f").height();
		$('#948e83e39319e8fe01932d5509523d1f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39319e8fe01932d5509523d1f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39319e8fe01932d5509523d1f").width();
	setTimeout(function(){redraw948e83e39319e8fe01932d5509523d1f(win_width);},500);
});
var table6b92ce18f0ec3d48b9089176b1b35992bad9KeyWordIn = "";    
var table6b92ce18f0ec3d48b9089176b1b35992bad9ParamIn = "";    
var table6b92ce18f0ec3d48b9089176b1b35992bad9SelectRow = {     
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9LoadComplete = {     
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9BeforeEditCell = {        
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9OndblClickRow = {     
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9OnRightClickRow = {     
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9GridComplete = {     
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9OnCellSelect = {     
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
var table6b92ce18f0ec3d48b9089176b1b35992bad9LoadBeforeSend = {        
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
function table6b92ce18f0ec3d48b9089176b1b35992bad9Reload(pid){
	var _isInvalid = true;
	$("#table6b92ce18f0ec3d48b9089176b1b35992bad9").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6b92ce18f0ec3d48b9089176b1b35992bad9Pid = pid;
		}
		return false;
	}
	window.table6b92ce18f0ec3d48b9089176b1b35992bad9Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6b92ce18f0ec3d48b9089176b1b35992bad9').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table6b92ce18f0ec3d48b9089176b1b35992bad9Reload();
};
function table6b92ce18f0ec3d48b9089176b1b35992bad9TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6b92ce18f0ec3d48b9089176b1b35992bad9Pid == 'undefined' || window.table6b92ce18f0ec3d48b9089176b1b35992bad9Pid!=null){
table6b92ce18f0ec3d48b9089176b1b35992bad9Reload(window.table6b92ce18f0ec3d48b9089176b1b35992bad9Pid);
}
}
var tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9 = [];
var uniqueColtable6b92ce18f0ec3d48b9089176b1b35992bad9 = [];
var uniqueColTitletable6b92ce18f0ec3d48b9089176b1b35992bad9 = [];
var defaultValuetable6b92ce18f0ec3d48b9089176b1b35992bad9 = {};
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '申请日期', formatter:format, hidden:false, name: 'SQRQ',align:'center',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '表单编号',hidden:false, name: 'BDBH',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '申请人',hidden:false, name: 'SQR',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '申请人所在党支部',hidden:false, name: 'SQRSZDZB',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '申请人电话',hidden:false, name: 'SQRDH',align:'right',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '课题名称',hidden:false, name: 'KTMC',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '申报级别',hidden:false, name: 'SBJB',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '项目简介',hidden:false, name: 'XMJJ',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '完成时间', formatter:format, hidden:false, name: 'WCSJ',align:'center',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '考核内容',hidden:false, name: 'KHLR',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '具体指标',hidden:false, name: 'JTZB',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});;$(document).ready(function(){ 

$("#table6b92ce18f0ec3d48b9089176b1b35992bad9").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39319e8fe01932d5509523d1f/table6b92ce18f0ec3d48b9089176b1b35992bad9/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6b92ce18f0ec3d48b9089176b1b35992bad9,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6b92ce18f0ec3d48b9089176b1b35992bad9SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6b92ce18f0ec3d48b9089176b1b35992bad9LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6b92ce18f0ec3d48b9089176b1b35992bad9OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6b92ce18f0ec3d48b9089176b1b35992bad9OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6b92ce18f0ec3d48b9089176b1b35992bad9GridComplete.exec();
				    setTimeout(function(){var height = $("#table6b92ce18f0ec3d48b9089176b1b35992bad9").closest('.ui-jqgrid-bdiv').height();
					$("#table6b92ce18f0ec3d48b9089176b1b35992bad9norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6b92ce18f0ec3d48b9089176b1b35992bad9norecords img").css("width","120px");
                 }else{
					    $("#table6b92ce18f0ec3d48b9089176b1b35992bad9norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6b92ce18f0ec3d48b9089176b1b35992bad9BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6b92ce18f0ec3d48b9089176b1b35992bad9OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6b92ce18f0ec3d48b9089176b1b35992bad9norecords").hide();
		   	    $("#Pagertable6b92ce18f0ec3d48b9089176b1b35992bad9_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6b92ce18f0ec3d48b9089176b1b35992bad9").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6b92ce18f0ec3d48b9089176b1b35992bad9").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6b92ce18f0ec3d48b9089176b1b35992bad9norecords").html() == null) {
						$("#table6b92ce18f0ec3d48b9089176b1b35992bad9").parent().append("<div class='no_data' id='table6b92ce18f0ec3d48b9089176b1b35992bad9norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6b92ce18f0ec3d48b9089176b1b35992bad9norecords").show();
					$("#Pagertable6b92ce18f0ec3d48b9089176b1b35992bad9_left").css("display", "none");
				}
table6b92ce18f0ec3d48b9089176b1b35992bad9LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6b92ce18f0ec3d48b9089176b1b35992bad9"
    });
table6b92ce18f0ec3d48b9089176b1b35992bad9Reload();
$("#t_table6b92ce18f0ec3d48b9089176b1b35992bad9").append($("#tableToolbartable6b92ce18f0ec3d48b9089176b1b35992bad9"));$("#tableToolbarButton1ec6a5d31e5dbd4096e8c84e4b2c749a30d2").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39319e8fe01932d396d1a37e5&grid=table6b92ce18f0ec3d48b9089176b1b35992bad9'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonb7df9f4a7c295a4a2918343a2c0fb9af8a11").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6b92ce18f0ec3d48b9089176b1b35992bad9').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6b92ce18f0ec3d48b9089176b1b35992bad9').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GSJB_SB&isbpm=Y&dbid=948e83e39319e8fe01932d329cf43724', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39319e8fe01932d5509523d1f',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6b92ce18f0ec3d48b9089176b1b35992bad9').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonb7df9f4a7c295a4a2918343a2c0fb9af8a11").hide();
;});	 
