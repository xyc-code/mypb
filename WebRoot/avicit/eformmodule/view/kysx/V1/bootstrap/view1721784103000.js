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

function redraw2c908c5290b915650190b92b5b130b1e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5290b915650190b92b5b130b1e").width();
		var win_height = $("#2c908c5290b915650190b92b5b130b1e").height();
		$('#2c908c5290b915650190b92b5b130b1e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5290b915650190b92b5b130b1e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5290b915650190b92b5b130b1e").width();
	setTimeout(function(){redraw2c908c5290b915650190b92b5b130b1e(win_width);},500);
});
var table5703b77eaf57ff4a3da8501faa5ce372910cKeyWordIn = "";    
var table5703b77eaf57ff4a3da8501faa5ce372910cParamIn = "";    
var table5703b77eaf57ff4a3da8501faa5ce372910cSelectRow = {     
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
var table5703b77eaf57ff4a3da8501faa5ce372910cLoadComplete = {     
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
var table5703b77eaf57ff4a3da8501faa5ce372910cBeforeEditCell = {        
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
var table5703b77eaf57ff4a3da8501faa5ce372910cOndblClickRow = {     
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
var table5703b77eaf57ff4a3da8501faa5ce372910cOnRightClickRow = {     
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
var table5703b77eaf57ff4a3da8501faa5ce372910cGridComplete = {     
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
var table5703b77eaf57ff4a3da8501faa5ce372910cOnCellSelect = {     
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
var table5703b77eaf57ff4a3da8501faa5ce372910cLoadBeforeSend = {        
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
function table5703b77eaf57ff4a3da8501faa5ce372910cReload(pid){
	var _isInvalid = true;
	$("#table5703b77eaf57ff4a3da8501faa5ce372910c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5703b77eaf57ff4a3da8501faa5ce372910cPid = pid;
		}
		return false;
	}
	window.table5703b77eaf57ff4a3da8501faa5ce372910cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5703b77eaf57ff4a3da8501faa5ce372910cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5703b77eaf57ff4a3da8501faa5ce372910cPid == 'undefined' || window.table5703b77eaf57ff4a3da8501faa5ce372910cPid!=null){
table5703b77eaf57ff4a3da8501faa5ce372910cReload(window.table5703b77eaf57ff4a3da8501faa5ce372910cPid);
}
}
var tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c = [];
var uniqueColtable5703b77eaf57ff4a3da8501faa5ce372910c = [];
var uniqueColTitletable5703b77eaf57ff4a3da8501faa5ce372910c = [];
var defaultValuetable5703b77eaf57ff4a3da8501faa5ce372910c = {};
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({editable : true,label: '标题',hidden:false, name: 'TITLE',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({ label: '分类',hidden:true, name: 'FL',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({editable : true,edittype: 'custom',editoptions:{value:{"型号记录":"型号记录","科研声像报送":"科研声像报送","人物记录":"人物记录"},custom_element:selectElem, custom_value:selectValue,forId:'FL'}, label: '分类', formatter:formatSelect,hidden:false, name: 'FLName',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({editable : true,label: '信息去向',hidden:false, name: 'XXQX',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var newRowIndex_table5703b77eaf57ff4a3da8501faa5ce372910c = 0;
 var newRowStart_table5703b77eaf57ff4a3da8501faa5ce372910c = "new_row";var restoreRowData_table5703b77eaf57ff4a3da8501faa5ce372910c = {};
;$(document).ready(function(){ 

$("#table5703b77eaf57ff4a3da8501faa5ce372910c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b915650190b92b5b130b1e/table5703b77eaf57ff4a3da8501faa5ce372910c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5703b77eaf57ff4a3da8501faa5ce372910c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5703b77eaf57ff4a3da8501faa5ce372910cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5703b77eaf57ff4a3da8501faa5ce372910cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5703b77eaf57ff4a3da8501faa5ce372910cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5703b77eaf57ff4a3da8501faa5ce372910cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5703b77eaf57ff4a3da8501faa5ce372910cGridComplete.exec();
				    setTimeout(function(){var height = $("#table5703b77eaf57ff4a3da8501faa5ce372910c").closest('.ui-jqgrid-bdiv').height();
					$("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords img").css("width","120px");
                 }else{
					    $("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5703b77eaf57ff4a3da8501faa5ce372910cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				if (cellcontent.indexOf('cbox')>-1){
				}else{
					var eformjqGridRowid=$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('getGridParam','selarrrow');
					var eformeditflag = true;
					for(var i = 0; i < eformjqGridRowid.length; i++) {
				    	if (eformjqGridRowid[i] === rowid){
				            eformeditflag = false;
				            break;
				    	}
				    	$('#table5703b77eaf57ff4a3da8501faa5ce372910c').setSelection(eformjqGridRowid[i], false);
					}
					if (eformeditflag){
				    	jQuery('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('setSelection',rowid);
					}
				}
				table5703b77eaf57ff4a3da8501faa5ce372910cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords").hide();
		   	    $("#Pagertable5703b77eaf57ff4a3da8501faa5ce372910c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5703b77eaf57ff4a3da8501faa5ce372910c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5703b77eaf57ff4a3da8501faa5ce372910c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords").html() == null) {
						$("#table5703b77eaf57ff4a3da8501faa5ce372910c").parent().append("<div class='no_data' id='table5703b77eaf57ff4a3da8501faa5ce372910cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords").show();
					$("#Pagertable5703b77eaf57ff4a3da8501faa5ce372910c_left").css("display", "none");
				}
table5703b77eaf57ff4a3da8501faa5ce372910cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: true,
		   cellEdit:true,
		   cellsubmit: 'clientArray',
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable5703b77eaf57ff4a3da8501faa5ce372910c"
    });
table5703b77eaf57ff4a3da8501faa5ce372910cReload();
$("#t_table5703b77eaf57ff4a3da8501faa5ce372910c").append($("#tableToolbartable5703b77eaf57ff4a3da8501faa5ce372910c"));$("#tableToolbarButtone5645a3f98511c4a95186864d9539b9fbb9d").bind('click',function(){
	$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('endEditCell');
                                                                            
	var newRowId = newRowStart_table5703b77eaf57ff4a3da8501faa5ce372910c + newRowIndex_table5703b77eaf57ff4a3da8501faa5ce372910c;
	var parameters = {
		rowID : newRowId,
		initdata : defaultValuetable5703b77eaf57ff4a3da8501faa5ce372910c,
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$("#table5703b77eaf57ff4a3da8501faa5ce372910cnorecords").hide();
	$("#Pagertable5703b77eaf57ff4a3da8501faa5ce372910c_left").css("display", "block");
	$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('addRow', parameters);
	newRowIndex_table5703b77eaf57ff4a3da8501faa5ce372910c++;  
                                                                                 
});
$('#tableToolbarButton1ef56334a682994defd85bc2ad99a89194b0').click(function(){
	$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('endEditCell');
	if(uniqueColtable5703b77eaf57ff4a3da8501faa5ce372910c != undefined && uniqueColtable5703b77eaf57ff4a3da8501faa5ce372910c.length > 0){ 
		var msg = ''; 
		var rowIds = $('#table5703b77eaf57ff4a3da8501faa5ce372910c').getDataIDs();
		for (var i = 0; i < uniqueColtable5703b77eaf57ff4a3da8501faa5ce372910c.length; i++) {
		    var colName = uniqueColtable5703b77eaf57ff4a3da8501faa5ce372910c[i];
		    var colTitle = uniqueColTitletable5703b77eaf57ff4a3da8501faa5ce372910c[i];
		    var arr = [];
			for (var j = 0; j < rowIds.length; j++) {;
			    var rowData = $('#table5703b77eaf57ff4a3da8501faa5ce372910c').getRowData(rowIds[j]);
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
	var data = $('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf('new_row') > -1){
				data[i].id = '';
			}
		}		
	}
                                                                       
	if(!$('#table5703b77eaf57ff4a3da8501faa5ce372910c').validateJqGrid("validate")){
		return false;		
	}
	avicAjax.ajax({
		url : 'eform/bpmsEformDataOptionsController/operation/save',
		data : {
			data : JSON.stringify(data),
			viewId:'2c908c5290b915650190b92b5b130b1e',
			version:'V1',
			tableId:'table5703b77eaf57ff4a3da8501faa5ce372910c'
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
                                                                               
			if (r.flag == 'success') {
				$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
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
table5703b77eaf57ff4a3da8501faa5ce372910cBeforeEditCell.addEvent(function(rowid, cellname, value, iRow, iCol){
	if (!restoreRowData_table5703b77eaf57ff4a3da8501faa5ce372910c.hasOwnProperty(rowid)) {
		var rowData = $("#table5703b77eaf57ff4a3da8501faa5ce372910c").jqGrid('getRowData', rowid);
		restoreRowData_table5703b77eaf57ff4a3da8501faa5ce372910c[rowid] = rowData;
	}
});
$("#tableToolbarButton97424efe43889c4fe93825d0c9d82aec1cfc").bind('click',function() {                                                                      	
	$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('endEditCell');         
	var ids = $('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('getGridParam', 'selarrrow');                            
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
			$("#table5703b77eaf57ff4a3da8501faa5ce372910c").jqGrid('restoreRow', ids[i], function () {                  
				if (restoreRowData_table5703b77eaf57ff4a3da8501faa5ce372910c.hasOwnProperty(ids[i])) {                 
					$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('setRowData', ids[i], restoreRowData_table5703b77eaf57ff4a3da8501faa5ce372910c[ids[i]]);
					delete restoreRowData_table5703b77eaf57ff4a3da8501faa5ce372910c[ids[i]];
				}
			});
		}
	}
}                                                                                  
);
$("#tableToolbarButtone6313dca5c732a4cabf8c2d28afe9ec7e04c").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5703b77eaf57ff4a3da8501faa5ce372910c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_KYSX&isbpm=N&dbid=2c908c5290b915650190b92adcfe0afc', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5290b915650190b92b5b130b1e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5703b77eaf57ff4a3da8501faa5ce372910c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
