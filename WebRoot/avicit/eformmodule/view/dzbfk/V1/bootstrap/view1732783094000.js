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

function redraw948e83e3936c671501937179a35a53f6(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3936c671501937179a35a53f6").width();
		var win_height = $("#948e83e3936c671501937179a35a53f6").height();
		$('#948e83e3936c671501937179a35a53f6').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3936c671501937179a35a53f6').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3936c671501937179a35a53f6").width();
	setTimeout(function(){redraw948e83e3936c671501937179a35a53f6(win_width);},500);
});
var table7cea7e4fb9d5204a226ab3187be36ac74ad6KeyWordIn = "";    
var table7cea7e4fb9d5204a226ab3187be36ac74ad6ParamIn = "";    
var table7cea7e4fb9d5204a226ab3187be36ac74ad6SelectRow = {     
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6LoadComplete = {     
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6BeforeEditCell = {        
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6OndblClickRow = {     
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6OnRightClickRow = {     
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6GridComplete = {     
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6OnCellSelect = {     
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
var table7cea7e4fb9d5204a226ab3187be36ac74ad6LoadBeforeSend = {        
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
function table7cea7e4fb9d5204a226ab3187be36ac74ad6Reload(pid){
	var _isInvalid = true;
	$("#table7cea7e4fb9d5204a226ab3187be36ac74ad6").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table7cea7e4fb9d5204a226ab3187be36ac74ad6Pid = pid;
		}
		return false;
	}
	window.table7cea7e4fb9d5204a226ab3187be36ac74ad6Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.fk.people=pageParams.id;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table7cea7e4fb9d5204a226ab3187be36ac74ad6').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table7cea7e4fb9d5204a226ab3187be36ac74ad6TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table7cea7e4fb9d5204a226ab3187be36ac74ad6Pid == 'undefined' || window.table7cea7e4fb9d5204a226ab3187be36ac74ad6Pid!=null){
table7cea7e4fb9d5204a226ab3187be36ac74ad6Reload(window.table7cea7e4fb9d5204a226ab3187be36ac74ad6Pid);
}
}
var tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6 = [];
var uniqueColtable7cea7e4fb9d5204a226ab3187be36ac74ad6 = [];
var uniqueColTitletable7cea7e4fb9d5204a226ab3187be36ac74ad6 = [];
var defaultValuetable7cea7e4fb9d5204a226ab3187be36ac74ad6 = {};
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '上报内容',hidden:false, name: 'CONTENT',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '外键',hidden:true, name: 'FCK_ID',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '创建时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '创建人',hidden:false, name: 'DRAF_USER',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '文件密级',hidden:false, name: 'FILE_TYPE',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
filterParams.fk={};
filterParams.fk.people=pageParams.id;
;$(document).ready(function(){ 

$("#table7cea7e4fb9d5204a226ab3187be36ac74ad6").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3936c671501937179a35a53f6/table7cea7e4fb9d5204a226ab3187be36ac74ad6/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable7cea7e4fb9d5204a226ab3187be36ac74ad6,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table7cea7e4fb9d5204a226ab3187be36ac74ad6SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table7cea7e4fb9d5204a226ab3187be36ac74ad6LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table7cea7e4fb9d5204a226ab3187be36ac74ad6OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table7cea7e4fb9d5204a226ab3187be36ac74ad6OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table7cea7e4fb9d5204a226ab3187be36ac74ad6GridComplete.exec();
				    setTimeout(function(){var height = $("#table7cea7e4fb9d5204a226ab3187be36ac74ad6").closest('.ui-jqgrid-bdiv').height();
					$("#table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords img").css("width","120px");
                 }else{
					    $("#table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table7cea7e4fb9d5204a226ab3187be36ac74ad6BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table7cea7e4fb9d5204a226ab3187be36ac74ad6OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords").hide();
		   	    $("#Pagertable7cea7e4fb9d5204a226ab3187be36ac74ad6_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table7cea7e4fb9d5204a226ab3187be36ac74ad6").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table7cea7e4fb9d5204a226ab3187be36ac74ad6").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords").html() == null) {
						$("#table7cea7e4fb9d5204a226ab3187be36ac74ad6").parent().append("<div class='no_data' id='table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table7cea7e4fb9d5204a226ab3187be36ac74ad6norecords").show();
					$("#Pagertable7cea7e4fb9d5204a226ab3187be36ac74ad6_left").css("display", "none");
				}
table7cea7e4fb9d5204a226ab3187be36ac74ad6LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable7cea7e4fb9d5204a226ab3187be36ac74ad6"
    });
table7cea7e4fb9d5204a226ab3187be36ac74ad6Reload();
$("#t_table7cea7e4fb9d5204a226ab3187be36ac74ad6").append($("#tableToolbartable7cea7e4fb9d5204a226ab3187be36ac74ad6"));$("#tableToolbarButton799f9ce986e37c4a93f934d1b1bc0227d418").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390ba1eca0190ba8230832c1e&grid=table7cea7e4fb9d5204a226ab3187be36ac74ad6' + '&people=' + encodeURI(filterParams.fk.people),     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton67b943006575a146c0199d2ef0f3123ed28a").bind('click',function() {                                                                                       
	var ids = $('#table7cea7e4fb9d5204a226ab3187be36ac74ad6').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table7cea7e4fb9d5204a226ab3187be36ac74ad6').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e390ba1eca0190ba8230832c1e&id=' + rowData.ID+'&grid=table7cea7e4fb9d5204a226ab3187be36ac74ad6' + '&people=' + encodeURI(filterParams.fk.people),  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
;});	 
