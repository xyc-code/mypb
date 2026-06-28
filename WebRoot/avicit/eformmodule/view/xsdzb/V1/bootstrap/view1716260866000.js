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

function redraw948e83e38f953056018f990bd2f21a97(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38f953056018f990bd2f21a97").width();
		var win_height = $("#948e83e38f953056018f990bd2f21a97").height();
		$('#948e83e38f953056018f990bd2f21a97').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38f953056018f990bd2f21a97').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38f953056018f990bd2f21a97").width();
	setTimeout(function(){redraw948e83e38f953056018f990bd2f21a97(win_width);},500);
});
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cKeyWordIn = "";    
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cParamIn = "";    
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cSelectRow = {     
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cLoadComplete = {     
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cBeforeEditCell = {        
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cOndblClickRow = {     
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cOnRightClickRow = {     
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cGridComplete = {     
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cOnCellSelect = {     
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
var table40dcbc7d55c4d8491c0b38f466ef4a226e5cLoadBeforeSend = {        
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
function table40dcbc7d55c4d8491c0b38f466ef4a226e5cReload(pid){
	var _isInvalid = true;
	$("#table40dcbc7d55c4d8491c0b38f466ef4a226e5c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table40dcbc7d55c4d8491c0b38f466ef4a226e5cPid = pid;
		}
		return false;
	}
	window.table40dcbc7d55c4d8491c0b38f466ef4a226e5cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table40dcbc7d55c4d8491c0b38f466ef4a226e5c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table40dcbc7d55c4d8491c0b38f466ef4a226e5cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table40dcbc7d55c4d8491c0b38f466ef4a226e5cPid == 'undefined' || window.table40dcbc7d55c4d8491c0b38f466ef4a226e5cPid!=null){
table40dcbc7d55c4d8491c0b38f466ef4a226e5cReload(window.table40dcbc7d55c4d8491c0b38f466ef4a226e5cPid);
}
}
var tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c = [];
var uniqueColtable40dcbc7d55c4d8491c0b38f466ef4a226e5c = [];
var uniqueColTitletable40dcbc7d55c4d8491c0b38f466ef4a226e5c = [];
var defaultValuetable40dcbc7d55c4d8491c0b38f466ef4a226e5c = {};
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '书记姓名',hidden:false, name: 'SJ_NAME',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '组织委员姓名',hidden:false, name: 'WY_NAME',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#table40dcbc7d55c4d8491c0b38f466ef4a226e5c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38f953056018f990bd2f21a97/table40dcbc7d55c4d8491c0b38f466ef4a226e5c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable40dcbc7d55c4d8491c0b38f466ef4a226e5c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table40dcbc7d55c4d8491c0b38f466ef4a226e5cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table40dcbc7d55c4d8491c0b38f466ef4a226e5cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table40dcbc7d55c4d8491c0b38f466ef4a226e5cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table40dcbc7d55c4d8491c0b38f466ef4a226e5cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table40dcbc7d55c4d8491c0b38f466ef4a226e5cGridComplete.exec();
				    setTimeout(function(){var height = $("#table40dcbc7d55c4d8491c0b38f466ef4a226e5c").closest('.ui-jqgrid-bdiv').height();
					$("#table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords img").css("width","120px");
                 }else{
					    $("#table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table40dcbc7d55c4d8491c0b38f466ef4a226e5cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table40dcbc7d55c4d8491c0b38f466ef4a226e5cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords").hide();
		   	    $("#Pagertable40dcbc7d55c4d8491c0b38f466ef4a226e5c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table40dcbc7d55c4d8491c0b38f466ef4a226e5c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table40dcbc7d55c4d8491c0b38f466ef4a226e5c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords").html() == null) {
						$("#table40dcbc7d55c4d8491c0b38f466ef4a226e5c").parent().append("<div class='no_data' id='table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table40dcbc7d55c4d8491c0b38f466ef4a226e5cnorecords").show();
					$("#Pagertable40dcbc7d55c4d8491c0b38f466ef4a226e5c_left").css("display", "none");
				}
table40dcbc7d55c4d8491c0b38f466ef4a226e5cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable40dcbc7d55c4d8491c0b38f466ef4a226e5c"
    });
table40dcbc7d55c4d8491c0b38f466ef4a226e5cReload();
$("#t_table40dcbc7d55c4d8491c0b38f466ef4a226e5c").append($("#tableToolbartable40dcbc7d55c4d8491c0b38f466ef4a226e5c"));$("#tableToolbarButton1850f0b1e618aa4e23da502a96ab17ecbc00").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38f953056018f9914be981ae7&grid=table40dcbc7d55c4d8491c0b38f466ef4a226e5c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton3ae991b2c151ae432f989bea490535adf84a").bind('click',function() {                                                                                       
	var ids = $('#table40dcbc7d55c4d8491c0b38f466ef4a226e5c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table40dcbc7d55c4d8491c0b38f466ef4a226e5c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38f953056018f9914be981ae7&id=' + rowData.ID+'&grid=table40dcbc7d55c4d8491c0b38f466ef4a226e5c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
;});	 
