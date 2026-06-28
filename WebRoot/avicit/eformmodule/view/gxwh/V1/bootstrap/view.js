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

function redraw2c908c5290b915650190b9808e3038cf(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5290b915650190b9808e3038cf").width();
		var win_height = $("#2c908c5290b915650190b9808e3038cf").height();
		$('#2c908c5290b915650190b9808e3038cf').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5290b915650190b9808e3038cf').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5290b915650190b9808e3038cf").width();
	setTimeout(function(){redraw2c908c5290b915650190b9808e3038cf(win_width);},500);
});
var table5d23513b6b50ba442718ca923c298387ac38KeyWordIn = "";    
var table5d23513b6b50ba442718ca923c298387ac38ParamIn = "";    
var table5d23513b6b50ba442718ca923c298387ac38SelectRow = {     
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
var table5d23513b6b50ba442718ca923c298387ac38LoadComplete = {     
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
var table5d23513b6b50ba442718ca923c298387ac38BeforeEditCell = {        
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
var table5d23513b6b50ba442718ca923c298387ac38OndblClickRow = {     
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
var table5d23513b6b50ba442718ca923c298387ac38OnRightClickRow = {     
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
var table5d23513b6b50ba442718ca923c298387ac38GridComplete = {     
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
var table5d23513b6b50ba442718ca923c298387ac38OnCellSelect = {     
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
var table5d23513b6b50ba442718ca923c298387ac38LoadBeforeSend = {        
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
function table5d23513b6b50ba442718ca923c298387ac38Reload(pid){
	var _isInvalid = true;
	$("#table5d23513b6b50ba442718ca923c298387ac38").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table5d23513b6b50ba442718ca923c298387ac38Pid = pid;
		}
		return false;
	}
	window.table5d23513b6b50ba442718ca923c298387ac38Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table5d23513b6b50ba442718ca923c298387ac38TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table5d23513b6b50ba442718ca923c298387ac38Pid == 'undefined' || window.table5d23513b6b50ba442718ca923c298387ac38Pid!=null){
table5d23513b6b50ba442718ca923c298387ac38Reload(window.table5d23513b6b50ba442718ca923c298387ac38Pid);
}
}
var tablecmtable5d23513b6b50ba442718ca923c298387ac38 = [];
var uniqueColtable5d23513b6b50ba442718ca923c298387ac38 = [];
var uniqueColTitletable5d23513b6b50ba442718ca923c298387ac38 = [];
var defaultValuetable5d23513b6b50ba442718ca923c298387ac38 = {};
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({ label: '党群部门',hidden:true, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({editable : true,edittype: 'custom',editoptions:{value:{"DZBGS-DY":"党政办公室-调研工作","DZBGS-ZH":"党政办公室-综合管理工作","DZBGS-XF":"党政办公室-信访工作","RLZYB-RS":"人力资源部-人事管理工作","DZBGS-XC":"人力资源部-薪酬管理工作","DZBGS-PX":"人力资源部-培训考核工作","DZBGS-GB":"人力资源部-干部管理工作","JJJCB-ZH":"纪检监察部-综合监察工作","JJJCB-JJ":"纪检监察部-纪检监察工作","JJJCB-XC":"纪检监察部-巡察工作","DQGZB-DJ":"党群工作部-党建工作","DQGZB-MG":"党群工作部-组织民管工作","DQGZB-GH":"党群工作部-工会工作","DQGZB-XC":"党群工作部-文化宣传工作","DQGZB-SX":"党群工作部-声像宣传工作","DQGZB-TW":"党群工作部-团委工作"},custom_element:selectElem, custom_value:selectValue,forId:'DEPT_NAME'}, label: '党群部门', formatter:formatSelect,hidden:false, name: 'DEPT_NAMEName',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({ label: '部长/副部长',hidden:true, name: 'BZ',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({editable : true,edittype: 'custom',editoptions:{selectModel:'single',secretCol:'',custom_element:userElem, custom_value:userValue,forId:'BZ',viewScope:'currentOrg'}, label: '部长/副部长',hidden:false, name: 'BZName',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({ label: '主任',hidden:true, name: 'SZR',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({editable : true,edittype: 'custom',editoptions:{selectModel:'multi',secretCol:'',custom_element:userElem, custom_value:userValue,forId:'SZR',viewScope:'currentOrg'}, label: '主任',hidden:false, name: 'SZRName',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({ label: '干事',hidden:true, name: 'GS',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({editable : true,edittype: 'custom',editoptions:{selectModel:'multi',secretCol:'',custom_element:userElem, custom_value:userValue,forId:'GS',viewScope:'currentOrg'}, label: '干事',hidden:true, name: 'GSName',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable5d23513b6b50ba442718ca923c298387ac38.push({editable : true,label: '序号',editrules:{number:true},hidden:false, name: 'XH',align:'left',  width: '150px'});
uniqueColtable5d23513b6b50ba442718ca923c298387ac38.push('XH')
uniqueColTitletable5d23513b6b50ba442718ca923c298387ac38.push('序号')
var newRowIndex_table5d23513b6b50ba442718ca923c298387ac38 = 0;
 var newRowStart_table5d23513b6b50ba442718ca923c298387ac38 = "new_row";var restoreRowData_table5d23513b6b50ba442718ca923c298387ac38 = {};
;$(document).ready(function(){ 

$("#table5d23513b6b50ba442718ca923c298387ac38").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5290b915650190b9808e3038cf/table5d23513b6b50ba442718ca923c298387ac38/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable5d23513b6b50ba442718ca923c298387ac38,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table5d23513b6b50ba442718ca923c298387ac38SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table5d23513b6b50ba442718ca923c298387ac38LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table5d23513b6b50ba442718ca923c298387ac38OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table5d23513b6b50ba442718ca923c298387ac38OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table5d23513b6b50ba442718ca923c298387ac38GridComplete.exec();
				    setTimeout(function(){var height = $("#table5d23513b6b50ba442718ca923c298387ac38").closest('.ui-jqgrid-bdiv').height();
					$("#table5d23513b6b50ba442718ca923c298387ac38norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table5d23513b6b50ba442718ca923c298387ac38norecords img").css("width","120px");
                 }else{
					    $("#table5d23513b6b50ba442718ca923c298387ac38norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table5d23513b6b50ba442718ca923c298387ac38BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				if (cellcontent.indexOf('cbox')>-1){
				}else{
					var eformjqGridRowid=$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('getGridParam','selarrrow');
					var eformeditflag = true;
					for(var i = 0; i < eformjqGridRowid.length; i++) {
				    	if (eformjqGridRowid[i] === rowid){
				            eformeditflag = false;
				            break;
				    	}
				    	$('#table5d23513b6b50ba442718ca923c298387ac38').setSelection(eformjqGridRowid[i], false);
					}
					if (eformeditflag){
				    	jQuery('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('setSelection',rowid);
					}
				}
				table5d23513b6b50ba442718ca923c298387ac38OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table5d23513b6b50ba442718ca923c298387ac38norecords").hide();
		   	    $("#Pagertable5d23513b6b50ba442718ca923c298387ac38_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table5d23513b6b50ba442718ca923c298387ac38").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table5d23513b6b50ba442718ca923c298387ac38").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table5d23513b6b50ba442718ca923c298387ac38norecords").html() == null) {
						$("#table5d23513b6b50ba442718ca923c298387ac38").parent().append("<div class='no_data' id='table5d23513b6b50ba442718ca923c298387ac38norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table5d23513b6b50ba442718ca923c298387ac38norecords").show();
					$("#Pagertable5d23513b6b50ba442718ca923c298387ac38_left").css("display", "none");
				}
table5d23513b6b50ba442718ca923c298387ac38LoadComplete.exec(data);                      
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
        pager: "#Pagertable5d23513b6b50ba442718ca923c298387ac38"
    });
table5d23513b6b50ba442718ca923c298387ac38Reload();
$("#t_table5d23513b6b50ba442718ca923c298387ac38").append($("#tableToolbartable5d23513b6b50ba442718ca923c298387ac38"));$("#tableToolbarButton08ad2f14a7d79747d62996780dee6dc43554").bind('click',function(){
	$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('endEditCell');
                                                                            
	var newRowId = newRowStart_table5d23513b6b50ba442718ca923c298387ac38 + newRowIndex_table5d23513b6b50ba442718ca923c298387ac38;
	var parameters = {
		rowID : newRowId,
		initdata : defaultValuetable5d23513b6b50ba442718ca923c298387ac38,
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$("#table5d23513b6b50ba442718ca923c298387ac38norecords").hide();
	$("#Pagertable5d23513b6b50ba442718ca923c298387ac38_left").css("display", "block");
	$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('addRow', parameters);
	newRowIndex_table5d23513b6b50ba442718ca923c298387ac38++;  
                                                                                 
});
$('#tableToolbarButton0739a266f8fff34369086186ac1d2110983a').click(function(){
	$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('endEditCell');
	if(uniqueColtable5d23513b6b50ba442718ca923c298387ac38 != undefined && uniqueColtable5d23513b6b50ba442718ca923c298387ac38.length > 0){ 
		var msg = ''; 
		var rowIds = $('#table5d23513b6b50ba442718ca923c298387ac38').getDataIDs();
		for (var i = 0; i < uniqueColtable5d23513b6b50ba442718ca923c298387ac38.length; i++) {
		    var colName = uniqueColtable5d23513b6b50ba442718ca923c298387ac38[i];
		    var colTitle = uniqueColTitletable5d23513b6b50ba442718ca923c298387ac38[i];
		    var arr = [];
			for (var j = 0; j < rowIds.length; j++) {;
			    var rowData = $('#table5d23513b6b50ba442718ca923c298387ac38').getRowData(rowIds[j]);
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
	var data = $('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf('new_row') > -1){
				data[i].id = '';
			}
		}		
	}
                                                                       
	if(!$('#table5d23513b6b50ba442718ca923c298387ac38').validateJqGrid("validate")){
		return false;		
	}
	avicAjax.ajax({
		url : 'eform/bpmsEformDataOptionsController/operation/save',
		data : {
			data : JSON.stringify(data),
			viewId:'2c908c5290b915650190b9808e3038cf',
			version:'V1',
			tableId:'table5d23513b6b50ba442718ca923c298387ac38'
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
                                                                               
			if (r.flag == 'success') {
				$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
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
table5d23513b6b50ba442718ca923c298387ac38BeforeEditCell.addEvent(function(rowid, cellname, value, iRow, iCol){
	if (!restoreRowData_table5d23513b6b50ba442718ca923c298387ac38.hasOwnProperty(rowid)) {
		var rowData = $("#table5d23513b6b50ba442718ca923c298387ac38").jqGrid('getRowData', rowid);
		restoreRowData_table5d23513b6b50ba442718ca923c298387ac38[rowid] = rowData;
	}
});
$("#tableToolbarButtondeae062d5c21334e12695ad20b4734853ec6").bind('click',function() {                                                                      	
	$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('endEditCell');         
	var ids = $('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('getGridParam', 'selarrrow');                            
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
			$("#table5d23513b6b50ba442718ca923c298387ac38").jqGrid('restoreRow', ids[i], function () {                  
				if (restoreRowData_table5d23513b6b50ba442718ca923c298387ac38.hasOwnProperty(ids[i])) {                 
					$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('setRowData', ids[i], restoreRowData_table5d23513b6b50ba442718ca923c298387ac38[ids[i]]);
					delete restoreRowData_table5d23513b6b50ba442718ca923c298387ac38[ids[i]];
				}
			});
		}
	}
}                                                                                  
);
$("#tableToolbarButtone4997473b63b6b497e081300e68960ed53cd").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table5d23513b6b50ba442718ca923c298387ac38').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_PLAN_GXB&isbpm=N&dbid=2c908c5290b915650190b97ff3eb38a5', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5290b915650190b9808e3038cf',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table5d23513b6b50ba442718ca923c298387ac38').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
