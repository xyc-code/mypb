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

function redraw948e83e37f8f75d0017f8b902d5e1a03(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e37f8f75d0017f8b902d5e1a03").width();
		var win_height = $("#948e83e37f8f75d0017f8b902d5e1a03").height();
		$('#948e83e37f8f75d0017f8b902d5e1a03').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e37f8f75d0017f8b902d5e1a03').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e37f8f75d0017f8b902d5e1a03").width();
	setTimeout(function(){redraw948e83e37f8f75d0017f8b902d5e1a03(win_width);},500);
});
var table8e1baa63fef68d4ef038e8e95b934a1348a3KeyWordIn = "";    
var table8e1baa63fef68d4ef038e8e95b934a1348a3ParamIn = "";    
var table8e1baa63fef68d4ef038e8e95b934a1348a3SelectRow = {     
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3LoadComplete = {     
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3BeforeEditCell = {        
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3OndblClickRow = {     
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3OnRightClickRow = {     
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3GridComplete = {     
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3OnCellSelect = {     
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
var table8e1baa63fef68d4ef038e8e95b934a1348a3LoadBeforeSend = {        
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
function table8e1baa63fef68d4ef038e8e95b934a1348a3Reload(pid){
	var _isInvalid = true;
	$("#table8e1baa63fef68d4ef038e8e95b934a1348a3").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table8e1baa63fef68d4ef038e8e95b934a1348a3Pid = pid;
		}
		return false;
	}
	window.table8e1baa63fef68d4ef038e8e95b934a1348a3Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table8e1baa63fef68d4ef038e8e95b934a1348a3').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table8e1baa63fef68d4ef038e8e95b934a1348a3TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table8e1baa63fef68d4ef038e8e95b934a1348a3Pid == 'undefined' || window.table8e1baa63fef68d4ef038e8e95b934a1348a3Pid!=null){
table8e1baa63fef68d4ef038e8e95b934a1348a3Reload(window.table8e1baa63fef68d4ef038e8e95b934a1348a3Pid);
}
}
var tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3 = [];
var uniqueColtable8e1baa63fef68d4ef038e8e95b934a1348a3 = [];
var uniqueColTitletable8e1baa63fef68d4ef038e8e95b934a1348a3 = [];
var defaultValuetable8e1baa63fef68d4ef038e8e95b934a1348a3 = {};
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '申请人',hidden:false, name: 'TZZGXZY_SQR',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '申请单位',hidden:false, name: 'TZZGXZY_SQDW',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '转出支部',hidden:false, name: 'TZZGXZY_ZCZB',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '团员类型',hidden:false, name: 'TZZGXZY_TYLX',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '目的支部',hidden:false, name: 'TZZGXZY_MDZB',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '申请日期', formatter:format, hidden:false, name: 'TZZGXZY_SQRQ',align:'center',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '表单编号',hidden:false, name: 'TZZGXZY_BDBH',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '被转出人',hidden:false, name: 'TZZGXZY_BZCR',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '转出类别',hidden:false, name: 'TZZGXZY_LB',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '所交党费截止日期', formatter:format, hidden:false, name: 'TZZGXZY_DFJZRQ',align:'center',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '党费',hidden:false, name: 'TZZGXZY_DF',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
	var searchNamestable8e1baa63fef68d4ef038e8e95b934a1348a3 = []; 
$('#keyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3').attr('placeholder', '请输查询');
function searchDataKeyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3(){
	var keyWord = $.trim($("#keyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3").val()); 
 if($('#keyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable8e1baa63fef68d4ef038e8e95b934a1348a3.length;i++){ 
		var name = searchNamestable8e1baa63fef68d4ef038e8e95b934a1348a3[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table8e1baa63fef68d4ef038e8e95b934a1348a3KeyWordIn=JSON.stringify(param);
table8e1baa63fef68d4ef038e8e95b934a1348a3ParamIn="";
	$('#table8e1baa63fef68d4ef038e8e95b934a1348a3').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3();
	}
});
$('#keyWordBttable8e1baa63fef68d4ef038e8e95b934a1348a3').bind('click', function() {
		searchDataKeyWordtable8e1baa63fef68d4ef038e8e95b934a1348a3();
});
;$(document).ready(function(){ 

$("#table8e1baa63fef68d4ef038e8e95b934a1348a3").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e37f8f75d0017f8b902d5e1a03/table8e1baa63fef68d4ef038e8e95b934a1348a3/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable8e1baa63fef68d4ef038e8e95b934a1348a3,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table8e1baa63fef68d4ef038e8e95b934a1348a3SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table8e1baa63fef68d4ef038e8e95b934a1348a3LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table8e1baa63fef68d4ef038e8e95b934a1348a3OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table8e1baa63fef68d4ef038e8e95b934a1348a3OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table8e1baa63fef68d4ef038e8e95b934a1348a3GridComplete.exec();
				    setTimeout(function(){var height = $("#table8e1baa63fef68d4ef038e8e95b934a1348a3").closest('.ui-jqgrid-bdiv').height();
					$("#table8e1baa63fef68d4ef038e8e95b934a1348a3norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table8e1baa63fef68d4ef038e8e95b934a1348a3norecords img").css("width","120px");
                 }else{
					    $("#table8e1baa63fef68d4ef038e8e95b934a1348a3norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table8e1baa63fef68d4ef038e8e95b934a1348a3BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table8e1baa63fef68d4ef038e8e95b934a1348a3OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table8e1baa63fef68d4ef038e8e95b934a1348a3norecords").hide();
		   	    $("#Pagertable8e1baa63fef68d4ef038e8e95b934a1348a3_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table8e1baa63fef68d4ef038e8e95b934a1348a3").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table8e1baa63fef68d4ef038e8e95b934a1348a3").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table8e1baa63fef68d4ef038e8e95b934a1348a3norecords").html() == null) {
						$("#table8e1baa63fef68d4ef038e8e95b934a1348a3").parent().append("<div class='no_data' id='table8e1baa63fef68d4ef038e8e95b934a1348a3norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table8e1baa63fef68d4ef038e8e95b934a1348a3norecords").show();
					$("#Pagertable8e1baa63fef68d4ef038e8e95b934a1348a3_left").css("display", "none");
				}
table8e1baa63fef68d4ef038e8e95b934a1348a3LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable8e1baa63fef68d4ef038e8e95b934a1348a3"
    });
table8e1baa63fef68d4ef038e8e95b934a1348a3Reload();
$("#t_table8e1baa63fef68d4ef038e8e95b934a1348a3").append($("#tableToolbartable8e1baa63fef68d4ef038e8e95b934a1348a3"));$("#tableToolbarButton26ce2db65c93e74d8dbab855e11639e7d0a4").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e37f8b8008017f8f524df71b3c&grid=table8e1baa63fef68d4ef038e8e95b934a1348a3'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtond05284e85d5bc54c18e9d251555c0505c42a").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table8e1baa63fef68d4ef038e8e95b934a1348a3').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table8e1baa63fef68d4ef038e8e95b934a1348a3').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TZZGXZY&isbpm=N&dbid=948e83e37f8b8008017f8f53f9341b3d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e37f8f75d0017f8b902d5e1a03',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table8e1baa63fef68d4ef038e8e95b934a1348a3').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
