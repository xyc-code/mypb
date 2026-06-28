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

function redraw948e83e38bdb834a018bfb746be043f7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38bdb834a018bfb746be043f7").width();
		var win_height = $("#948e83e38bdb834a018bfb746be043f7").height();
		$('#948e83e38bdb834a018bfb746be043f7').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38bdb834a018bfb746be043f7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38bdb834a018bfb746be043f7").width();
	setTimeout(function(){redraw948e83e38bdb834a018bfb746be043f7(win_width);},500);
});
var table1e26d4e0d781f540d8b822ef092be0143a10KeyWordIn = "";    
var table1e26d4e0d781f540d8b822ef092be0143a10ParamIn = "";    
var table1e26d4e0d781f540d8b822ef092be0143a10SelectRow = {     
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
var table1e26d4e0d781f540d8b822ef092be0143a10LoadComplete = {     
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
var table1e26d4e0d781f540d8b822ef092be0143a10BeforeEditCell = {        
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
var table1e26d4e0d781f540d8b822ef092be0143a10OndblClickRow = {     
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
var table1e26d4e0d781f540d8b822ef092be0143a10OnRightClickRow = {     
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
var table1e26d4e0d781f540d8b822ef092be0143a10GridComplete = {     
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
var table1e26d4e0d781f540d8b822ef092be0143a10OnCellSelect = {     
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
var table1e26d4e0d781f540d8b822ef092be0143a10LoadBeforeSend = {        
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
function table1e26d4e0d781f540d8b822ef092be0143a10Reload(pid){
	var _isInvalid = true;
	$("#table1e26d4e0d781f540d8b822ef092be0143a10").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1e26d4e0d781f540d8b822ef092be0143a10Pid = pid;
		}
		return false;
	}
	window.table1e26d4e0d781f540d8b822ef092be0143a10Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table1e26d4e0d781f540d8b822ef092be0143a10TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1e26d4e0d781f540d8b822ef092be0143a10Pid == 'undefined' || window.table1e26d4e0d781f540d8b822ef092be0143a10Pid!=null){
table1e26d4e0d781f540d8b822ef092be0143a10Reload(window.table1e26d4e0d781f540d8b822ef092be0143a10Pid);
}
}
var tablecmtable1e26d4e0d781f540d8b822ef092be0143a10 = [];
var uniqueColtable1e26d4e0d781f540d8b822ef092be0143a10 = [];
var uniqueColTitletable1e26d4e0d781f540d8b822ef092be0143a10 = [];
var defaultValuetable1e26d4e0d781f540d8b822ef092be0143a10 = {};
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({editable : true,label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({editable : true,label: '党员人数',hidden:false, name: 'PART_COUNT',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable1e26d4e0d781f540d8b822ef092be0143a10.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable1e26d4e0d781f540d8b822ef092be0143a10 = []; 
searchNamestable1e26d4e0d781f540d8b822ef092be0143a10.push('PARTY_NAME');
$('#keyWordtable1e26d4e0d781f540d8b822ef092be0143a10').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtable1e26d4e0d781f540d8b822ef092be0143a10(){
	var keyWord = $.trim($("#keyWordtable1e26d4e0d781f540d8b822ef092be0143a10").val()); 
 if($('#keyWordtable1e26d4e0d781f540d8b822ef092be0143a10').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable1e26d4e0d781f540d8b822ef092be0143a10.length;i++){ 
		var name = searchNamestable1e26d4e0d781f540d8b822ef092be0143a10[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table1e26d4e0d781f540d8b822ef092be0143a10KeyWordIn=JSON.stringify(param);
table1e26d4e0d781f540d8b822ef092be0143a10ParamIn="";
	$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable1e26d4e0d781f540d8b822ef092be0143a10').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable1e26d4e0d781f540d8b822ef092be0143a10();
	}
});
$('#keyWordBttable1e26d4e0d781f540d8b822ef092be0143a10').bind('click', function() {
		searchDataKeyWordtable1e26d4e0d781f540d8b822ef092be0143a10();
});
;$(document).ready(function(){ 

$("#table1e26d4e0d781f540d8b822ef092be0143a10").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38bdb834a018bfb746be043f7/table1e26d4e0d781f540d8b822ef092be0143a10/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable1e26d4e0d781f540d8b822ef092be0143a10,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1e26d4e0d781f540d8b822ef092be0143a10SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1e26d4e0d781f540d8b822ef092be0143a10LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1e26d4e0d781f540d8b822ef092be0143a10OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1e26d4e0d781f540d8b822ef092be0143a10OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1e26d4e0d781f540d8b822ef092be0143a10GridComplete.exec();
				    setTimeout(function(){var height = $("#table1e26d4e0d781f540d8b822ef092be0143a10").closest('.ui-jqgrid-bdiv').height();
					$("#table1e26d4e0d781f540d8b822ef092be0143a10norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1e26d4e0d781f540d8b822ef092be0143a10norecords img").css("width","120px");
                 }else{
					    $("#table1e26d4e0d781f540d8b822ef092be0143a10norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1e26d4e0d781f540d8b822ef092be0143a10BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				if (cellcontent.indexOf('cbox')>-1){
				}else{
					var eformjqGridRowid=$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('getGridParam','selarrrow');
					var eformeditflag = true;
					for(var i = 0; i < eformjqGridRowid.length; i++) {
				    	if (eformjqGridRowid[i] === rowid){
				            eformeditflag = false;
				            break;
				    	}
				    	$('#table1e26d4e0d781f540d8b822ef092be0143a10').setSelection(eformjqGridRowid[i], false);
					}
					if (eformeditflag){
				    	jQuery('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('setSelection',rowid);
					}
				}
				table1e26d4e0d781f540d8b822ef092be0143a10OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1e26d4e0d781f540d8b822ef092be0143a10norecords").hide();
		   	    $("#Pagertable1e26d4e0d781f540d8b822ef092be0143a10_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1e26d4e0d781f540d8b822ef092be0143a10").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1e26d4e0d781f540d8b822ef092be0143a10").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1e26d4e0d781f540d8b822ef092be0143a10norecords").html() == null) {
						$("#table1e26d4e0d781f540d8b822ef092be0143a10").parent().append("<div class='no_data' id='table1e26d4e0d781f540d8b822ef092be0143a10norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1e26d4e0d781f540d8b822ef092be0143a10norecords").show();
					$("#Pagertable1e26d4e0d781f540d8b822ef092be0143a10_left").css("display", "none");
				}
table1e26d4e0d781f540d8b822ef092be0143a10LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
		   cellEdit:true,
		   cellsubmit: 'clientArray',
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1e26d4e0d781f540d8b822ef092be0143a10"
    });
table1e26d4e0d781f540d8b822ef092be0143a10Reload();
$("#t_table1e26d4e0d781f540d8b822ef092be0143a10").append($("#tableToolbartable1e26d4e0d781f540d8b822ef092be0143a10"));$("#tableToolbarButton535b9d530f2a8d46fd68a123c7a937175d41").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38bdb834a018bfb73f8cf43de&grid=table1e26d4e0d781f540d8b822ef092be0143a10',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton2a37968921218e4dcb1bf5a133b1b0c38e47").bind('click',function() {                                                                                       
	var ids = $('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38bdb834a018bfb73f8cf43de&id=' + rowData.ID+'&grid=table1e26d4e0d781f540d8b822ef092be0143a10',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton542ab60f6c08c74ed6c8e8a2b2fd052b23f5").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_POSEN&isbpm=N&dbid=948e83e38bdb834a018bfb72c21b439e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38bdb834a018bfb746be043f7',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table1e26d4e0d781f540d8b822ef092be0143a10').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton225bdf7606906140b22882171977bcb03ca3").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'dzzdysj', callBackFunc: function () {                           	
		$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
$('#tableToolbarButtone13e9ed1ccf2bc48208896a59563b6cac1dd').click(function(){
	$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('endEditCell');
	if(uniqueColtable1e26d4e0d781f540d8b822ef092be0143a10 != undefined && uniqueColtable1e26d4e0d781f540d8b822ef092be0143a10.length > 0){ 
		var msg = ''; 
		var rowIds = $('#table1e26d4e0d781f540d8b822ef092be0143a10').getDataIDs();
		for (var i = 0; i < uniqueColtable1e26d4e0d781f540d8b822ef092be0143a10.length; i++) {
		    var colName = uniqueColtable1e26d4e0d781f540d8b822ef092be0143a10[i];
		    var colTitle = uniqueColTitletable1e26d4e0d781f540d8b822ef092be0143a10[i];
		    var arr = [];
			for (var j = 0; j < rowIds.length; j++) {;
			    var rowData = $('#table1e26d4e0d781f540d8b822ef092be0143a10').getRowData(rowIds[j]);
				var colValue = eval('rowData.'+ colName);
				arr.push(colValue);
			};
			if( arr.length!=$.unique(arr).length ){
		    	msg += colTitle + ',';
		    }
		}
		if(msg.length > 0){
			msg = msg.substr(0,msg.length-1)
			layer.alert('保存失败！[' + msg + ']存在重复数据！', {
				icon : 7,
				area : [ '400px', '' ], //宽高
				closeBtn : 0
			});
			return false;
		}
	}
	var data = $('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf('new_row') > -1){
				data[i].id = '';
			}
		}		
	}
                                                                       
	if(!$('#table1e26d4e0d781f540d8b822ef092be0143a10').validateJqGrid("validate")){
		return false;		
	}
	avicAjax.ajax({
		url : 'eform/bpmsEformDataOptionsController/operation/save',
		data : {
			data : JSON.stringify(data),
			viewId:'948e83e38bdb834a018bfb746be043f7',
			version:'V1',
			tableId:'table1e26d4e0d781f540d8b822ef092be0143a10'
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
                                                                               
			if (r.flag == 'success') {
				$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
				layer.msg('保存成功！');
			} else {
				layer.alert('保存失败！' + r.e, {
					icon : 7,
					area : [ '400px', '' ], //宽高
					closeBtn : 0
				});
			}
		}
	});
})
;});	 
