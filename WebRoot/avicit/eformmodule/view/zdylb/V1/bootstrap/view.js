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

function redraw2c908c528ee55866018ee55ca08109e7(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528ee55866018ee55ca08109e7").width();
		var win_height = $("#2c908c528ee55866018ee55ca08109e7").height();
		$('#2c908c528ee55866018ee55ca08109e7').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528ee55866018ee55ca08109e7').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528ee55866018ee55ca08109e7").width();
	setTimeout(function(){redraw2c908c528ee55866018ee55ca08109e7(win_width);},500);
});
var tablef54bea808887444f2e790a2d13374ea77a18KeyWordIn = "";    
var tablef54bea808887444f2e790a2d13374ea77a18ParamIn = "";    
var tablef54bea808887444f2e790a2d13374ea77a18SelectRow = {     
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
var tablef54bea808887444f2e790a2d13374ea77a18LoadComplete = {     
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
var tablef54bea808887444f2e790a2d13374ea77a18BeforeEditCell = {        
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
var tablef54bea808887444f2e790a2d13374ea77a18OndblClickRow = {     
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
var tablef54bea808887444f2e790a2d13374ea77a18OnRightClickRow = {     
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
var tablef54bea808887444f2e790a2d13374ea77a18GridComplete = {     
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
var tablef54bea808887444f2e790a2d13374ea77a18OnCellSelect = {     
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
var tablef54bea808887444f2e790a2d13374ea77a18LoadBeforeSend = {        
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
function tablef54bea808887444f2e790a2d13374ea77a18Reload(pid){
	var _isInvalid = true;
	$("#tablef54bea808887444f2e790a2d13374ea77a18").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablef54bea808887444f2e790a2d13374ea77a18Pid = pid;
		}
		return false;
	}
	window.tablef54bea808887444f2e790a2d13374ea77a18Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablef54bea808887444f2e790a2d13374ea77a18TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablef54bea808887444f2e790a2d13374ea77a18Pid == 'undefined' || window.tablef54bea808887444f2e790a2d13374ea77a18Pid!=null){
tablef54bea808887444f2e790a2d13374ea77a18Reload(window.tablef54bea808887444f2e790a2d13374ea77a18Pid);
}
}
var tablecmtablef54bea808887444f2e790a2d13374ea77a18 = [];
var uniqueColtablef54bea808887444f2e790a2d13374ea77a18 = [];
var uniqueColTitletablef54bea808887444f2e790a2d13374ea77a18 = [];
var defaultValuetablef54bea808887444f2e790a2d13374ea77a18 = {};
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({editable : true,label: '标签名称',hidden:false, name: 'LEAB_NAME',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({editable : true,label: '标签编码',hidden:false, name: 'LEAB_CODE',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablef54bea808887444f2e790a2d13374ea77a18.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var newRowIndex_tablef54bea808887444f2e790a2d13374ea77a18 = 0;
 var newRowStart_tablef54bea808887444f2e790a2d13374ea77a18 = "new_row";var restoreRowData_tablef54bea808887444f2e790a2d13374ea77a18 = {};
;$(document).ready(function(){ 

$("#tablef54bea808887444f2e790a2d13374ea77a18").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528ee55866018ee55ca08109e7/tablef54bea808887444f2e790a2d13374ea77a18/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablef54bea808887444f2e790a2d13374ea77a18,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablef54bea808887444f2e790a2d13374ea77a18SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablef54bea808887444f2e790a2d13374ea77a18LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablef54bea808887444f2e790a2d13374ea77a18OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablef54bea808887444f2e790a2d13374ea77a18OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablef54bea808887444f2e790a2d13374ea77a18GridComplete.exec();
				    setTimeout(function(){var height = $("#tablef54bea808887444f2e790a2d13374ea77a18").closest('.ui-jqgrid-bdiv').height();
					$("#tablef54bea808887444f2e790a2d13374ea77a18norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablef54bea808887444f2e790a2d13374ea77a18norecords img").css("width","120px");
                 }else{
					    $("#tablef54bea808887444f2e790a2d13374ea77a18norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablef54bea808887444f2e790a2d13374ea77a18BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				if (cellcontent.indexOf('cbox')>-1){
				}else{
					var eformjqGridRowid=$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('getGridParam','selarrrow');
					var eformeditflag = true;
					for(var i = 0; i < eformjqGridRowid.length; i++) {
				    	if (eformjqGridRowid[i] === rowid){
				            eformeditflag = false;
				            break;
				    	}
				    	$('#tablef54bea808887444f2e790a2d13374ea77a18').setSelection(eformjqGridRowid[i], false);
					}
					if (eformeditflag){
				    	jQuery('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('setSelection',rowid);
					}
				}
				tablef54bea808887444f2e790a2d13374ea77a18OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablef54bea808887444f2e790a2d13374ea77a18norecords").hide();
		   	    $("#Pagertablef54bea808887444f2e790a2d13374ea77a18_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablef54bea808887444f2e790a2d13374ea77a18").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablef54bea808887444f2e790a2d13374ea77a18").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablef54bea808887444f2e790a2d13374ea77a18norecords").html() == null) {
						$("#tablef54bea808887444f2e790a2d13374ea77a18").parent().append("<div class='no_data' id='tablef54bea808887444f2e790a2d13374ea77a18norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablef54bea808887444f2e790a2d13374ea77a18norecords").show();
					$("#Pagertablef54bea808887444f2e790a2d13374ea77a18_left").css("display", "none");
				}
tablef54bea808887444f2e790a2d13374ea77a18LoadComplete.exec(data);                      
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
        pager: "#Pagertablef54bea808887444f2e790a2d13374ea77a18"
    });
$('#tablef54bea808887444f2e790a2d13374ea77a18').validateJqGrid("addValidate","LEAB_NAME","required");
$('#tablef54bea808887444f2e790a2d13374ea77a18').validateJqGrid("addValidate","LEAB_CODE","required");
tablef54bea808887444f2e790a2d13374ea77a18Reload();
$("#t_tablef54bea808887444f2e790a2d13374ea77a18").append($("#tableToolbartablef54bea808887444f2e790a2d13374ea77a18"));$("#tableToolbarButton57c8570269c6a341fe880b03e03eeb64b482").bind('click',function(){
	$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('endEditCell');
                                                                            
	var newRowId = newRowStart_tablef54bea808887444f2e790a2d13374ea77a18 + newRowIndex_tablef54bea808887444f2e790a2d13374ea77a18;
	var parameters = {
		rowID : newRowId,
		initdata : defaultValuetablef54bea808887444f2e790a2d13374ea77a18,
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$("#tablef54bea808887444f2e790a2d13374ea77a18norecords").hide();
	$("#Pagertablef54bea808887444f2e790a2d13374ea77a18_left").css("display", "block");
	$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('addRow', parameters);
	newRowIndex_tablef54bea808887444f2e790a2d13374ea77a18++;  
                                                                                 
});
$('#tableToolbarButtonafafb1408bbd5f464b0a4ae02158b7ec8cae').click(function(){
	$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('endEditCell');
	if(uniqueColtablef54bea808887444f2e790a2d13374ea77a18 != undefined && uniqueColtablef54bea808887444f2e790a2d13374ea77a18.length > 0){ 
		var msg = ''; 
		var rowIds = $('#tablef54bea808887444f2e790a2d13374ea77a18').getDataIDs();
		for (var i = 0; i < uniqueColtablef54bea808887444f2e790a2d13374ea77a18.length; i++) {
		    var colName = uniqueColtablef54bea808887444f2e790a2d13374ea77a18[i];
		    var colTitle = uniqueColTitletablef54bea808887444f2e790a2d13374ea77a18[i];
		    var arr = [];
			for (var j = 0; j < rowIds.length; j++) {;
			    var rowData = $('#tablef54bea808887444f2e790a2d13374ea77a18').getRowData(rowIds[j]);
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
	var data = $('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf('new_row') > -1){
				data[i].id = '';
			}
		}		
	}
                                                                       
	if(!$('#tablef54bea808887444f2e790a2d13374ea77a18').validateJqGrid("validate")){
		return false;		
	}
	avicAjax.ajax({
		url : 'eform/bpmsEformDataOptionsController/operation/save',
		data : {
			data : JSON.stringify(data),
			viewId:'2c908c528ee55866018ee55ca08109e7',
			version:'V1',
			tableId:'tablef54bea808887444f2e790a2d13374ea77a18'
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
                                                                               
			if (r.flag == 'success') {
				$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
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
tablef54bea808887444f2e790a2d13374ea77a18BeforeEditCell.addEvent(function(rowid, cellname, value, iRow, iCol){
	if (!restoreRowData_tablef54bea808887444f2e790a2d13374ea77a18.hasOwnProperty(rowid)) {
		var rowData = $("#tablef54bea808887444f2e790a2d13374ea77a18").jqGrid('getRowData', rowid);
		restoreRowData_tablef54bea808887444f2e790a2d13374ea77a18[rowid] = rowData;
	}
});
$("#tableToolbarButtonc0ec3db91a5a7248a39b68355caa9f646134").bind('click',function() {                                                                      	
	$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('endEditCell');         
	var ids = $('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('getGridParam', 'selarrrow');                            
	var l = ids.length;                                                                   
	if (l == 0) {                                                                          
		layer.alert('请选择数据！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	}                                                                   
	if (l > 0) {                                                                   
		for (var i=0;i<l;i++) {                  
			$("#tablef54bea808887444f2e790a2d13374ea77a18").jqGrid('restoreRow', ids[i], function () {                  
				if (restoreRowData_tablef54bea808887444f2e790a2d13374ea77a18.hasOwnProperty(ids[i])) {                 
					$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('setRowData', ids[i], restoreRowData_tablef54bea808887444f2e790a2d13374ea77a18[ids[i]]);
					delete restoreRowData_tablef54bea808887444f2e790a2d13374ea77a18[ids[i]];
				}
			});
		}
	}
}                                                                                  
);
$("#tableToolbarButtonff86d62354003a48fa49619988eb6eba84a7").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablef54bea808887444f2e790a2d13374ea77a18').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DYN_VIDEO_LEAB&isbpm=N&dbid=2c908c528ee55866018ee55c250409c5', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c528ee55866018ee55ca08109e7',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablef54bea808887444f2e790a2d13374ea77a18').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
;});	 
