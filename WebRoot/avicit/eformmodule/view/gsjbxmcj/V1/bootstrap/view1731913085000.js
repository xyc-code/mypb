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

function redraw948e83e39319e8fe01933d18dd850e73(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e39319e8fe01933d18dd850e73").width();
		var win_height = $("#948e83e39319e8fe01933d18dd850e73").height();
		$('#948e83e39319e8fe01933d18dd850e73').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e39319e8fe01933d18dd850e73').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e39319e8fe01933d18dd850e73").width();
	setTimeout(function(){redraw948e83e39319e8fe01933d18dd850e73(win_width);},500);
});
var tableeaeb823fde84db4c27b87cdb53e65f70895eKeyWordIn = "";    
var tableeaeb823fde84db4c27b87cdb53e65f70895eParamIn = "";    
var tableeaeb823fde84db4c27b87cdb53e65f70895eSelectRow = {     
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eLoadComplete = {     
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eBeforeEditCell = {        
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eOndblClickRow = {     
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eOnRightClickRow = {     
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eGridComplete = {     
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eOnCellSelect = {     
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
var tableeaeb823fde84db4c27b87cdb53e65f70895eLoadBeforeSend = {        
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
function tableeaeb823fde84db4c27b87cdb53e65f70895eReload(pid){
	var _isInvalid = true;
	$("#tableeaeb823fde84db4c27b87cdb53e65f70895e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableeaeb823fde84db4c27b87cdb53e65f70895ePid = pid;
		}
		return false;
	}
	window.tableeaeb823fde84db4c27b87cdb53e65f70895ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableeaeb823fde84db4c27b87cdb53e65f70895e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
tableeaeb823fde84db4c27b87cdb53e65f70895eReload();
};
function tableeaeb823fde84db4c27b87cdb53e65f70895eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableeaeb823fde84db4c27b87cdb53e65f70895ePid == 'undefined' || window.tableeaeb823fde84db4c27b87cdb53e65f70895ePid!=null){
tableeaeb823fde84db4c27b87cdb53e65f70895eReload(window.tableeaeb823fde84db4c27b87cdb53e65f70895ePid);
}
}
var tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e = [];
var uniqueColtableeaeb823fde84db4c27b87cdb53e65f70895e = [];
var uniqueColTitletableeaeb823fde84db4c27b87cdb53e65f70895e = [];
var defaultValuetableeaeb823fde84db4c27b87cdb53e65f70895e = {};
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '申请日期', formatter:format, hidden:false, name: 'SQRQ',align:'center',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '表单编号',hidden:false, name: 'BDBH',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '申请人',hidden:false, name: 'SQR',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '申请人所在党支部',hidden:false, name: 'SQRSZDZB',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '申请人电话',hidden:false, name: 'SQRDH',align:'right',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '承接课题名称',hidden:false, name: 'CJKTMC',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '项目级别',hidden:false, name: 'XMJB',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '里程碑节点',hidden:false, name: 'LCBJD',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '里程碑完成标志',hidden:false, name: 'LCBWCBZ',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '里程碑完成时间', formatter:format, hidden:false, name: 'LCBWCSJ',align:'center',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '协同党支部',hidden:false, name: 'XTDZB',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '团队主要成员',hidden:true, name: 'TDZYCY',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '项目申报id',hidden:true, name: 'CJKTMC_ID',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '项目主要成员姓名',hidden:false, name: 'XMCY_XM',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});;$(document).ready(function(){ 

$("#tableeaeb823fde84db4c27b87cdb53e65f70895e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e39319e8fe01933d18dd850e73/tableeaeb823fde84db4c27b87cdb53e65f70895e/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableeaeb823fde84db4c27b87cdb53e65f70895e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableeaeb823fde84db4c27b87cdb53e65f70895eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableeaeb823fde84db4c27b87cdb53e65f70895eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableeaeb823fde84db4c27b87cdb53e65f70895eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableeaeb823fde84db4c27b87cdb53e65f70895eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableeaeb823fde84db4c27b87cdb53e65f70895eGridComplete.exec();
				    setTimeout(function(){var height = $("#tableeaeb823fde84db4c27b87cdb53e65f70895e").closest('.ui-jqgrid-bdiv').height();
					$("#tableeaeb823fde84db4c27b87cdb53e65f70895enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableeaeb823fde84db4c27b87cdb53e65f70895enorecords img").css("width","120px");
                 }else{
					    $("#tableeaeb823fde84db4c27b87cdb53e65f70895enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableeaeb823fde84db4c27b87cdb53e65f70895eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableeaeb823fde84db4c27b87cdb53e65f70895eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableeaeb823fde84db4c27b87cdb53e65f70895enorecords").hide();
		   	    $("#Pagertableeaeb823fde84db4c27b87cdb53e65f70895e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableeaeb823fde84db4c27b87cdb53e65f70895e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableeaeb823fde84db4c27b87cdb53e65f70895e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableeaeb823fde84db4c27b87cdb53e65f70895enorecords").html() == null) {
						$("#tableeaeb823fde84db4c27b87cdb53e65f70895e").parent().append("<div class='no_data' id='tableeaeb823fde84db4c27b87cdb53e65f70895enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableeaeb823fde84db4c27b87cdb53e65f70895enorecords").show();
					$("#Pagertableeaeb823fde84db4c27b87cdb53e65f70895e_left").css("display", "none");
				}
tableeaeb823fde84db4c27b87cdb53e65f70895eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: false,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableeaeb823fde84db4c27b87cdb53e65f70895e"
    });
tableeaeb823fde84db4c27b87cdb53e65f70895eReload();
$("#t_tableeaeb823fde84db4c27b87cdb53e65f70895e").append($("#tableToolbartableeaeb823fde84db4c27b87cdb53e65f70895e"));$("#tableToolbarButtond616755675f60d4798e89cbed5c448d182c0").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e39319e8fe01933ce248d70551&grid=tableeaeb823fde84db4c27b87cdb53e65f70895e'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton4b5194b1148687423868fccd7e23222ae372").bind('click',function() {   																				
	var bpmsDeleteRows = [$('#tableeaeb823fde84db4c27b87cdb53e65f70895e').jqGrid('getGridParam', 'selrow')];          
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tableeaeb823fde84db4c27b87cdb53e65f70895e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GSJB_XMCJ&isbpm=Y&dbid=948e83e39319e8fe01933cc008e37f61', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e39319e8fe01933d18dd850e73',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tableeaeb823fde84db4c27b87cdb53e65f70895e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton4b5194b1148687423868fccd7e23222ae372").hide();
;});	 
