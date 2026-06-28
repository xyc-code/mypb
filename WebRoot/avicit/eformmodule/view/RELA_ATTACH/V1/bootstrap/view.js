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

function redraw948e83e3828f72f30182a571e6807f2b(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3828f72f30182a571e6807f2b").width();
		var win_height = $("#948e83e3828f72f30182a571e6807f2b").height();
		$('#948e83e3828f72f30182a571e6807f2b').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3828f72f30182a571e6807f2b').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3828f72f30182a571e6807f2b").width();
	setTimeout(function(){redraw948e83e3828f72f30182a571e6807f2b(win_width);},500);
});
var table1046ed23a1578a45445b11c81b259550efadKeyWordIn = "";    
var table1046ed23a1578a45445b11c81b259550efadParamIn = "";    
var table1046ed23a1578a45445b11c81b259550efadSelectRow = {     
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
var table1046ed23a1578a45445b11c81b259550efadLoadComplete = {     
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
var table1046ed23a1578a45445b11c81b259550efadBeforeEditCell = {        
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
var table1046ed23a1578a45445b11c81b259550efadOndblClickRow = {     
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
var table1046ed23a1578a45445b11c81b259550efadOnRightClickRow = {     
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
var table1046ed23a1578a45445b11c81b259550efadGridComplete = {     
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
var table1046ed23a1578a45445b11c81b259550efadOnCellSelect = {     
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
var table1046ed23a1578a45445b11c81b259550efadLoadBeforeSend = {        
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
function table1046ed23a1578a45445b11c81b259550efadReload(pid){
	var _isInvalid = true;
	$("#table1046ed23a1578a45445b11c81b259550efad").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1046ed23a1578a45445b11c81b259550efadPid = pid;
		}
		return false;
	}
	window.table1046ed23a1578a45445b11c81b259550efadPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1046ed23a1578a45445b11c81b259550efad').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table1046ed23a1578a45445b11c81b259550efadTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1046ed23a1578a45445b11c81b259550efadPid == 'undefined' || window.table1046ed23a1578a45445b11c81b259550efadPid!=null){
table1046ed23a1578a45445b11c81b259550efadReload(window.table1046ed23a1578a45445b11c81b259550efadPid);
}
}
var tablecmtable1046ed23a1578a45445b11c81b259550efad = [];
var uniqueColtable1046ed23a1578a45445b11c81b259550efad = [];
var uniqueColTitletable1046ed23a1578a45445b11c81b259550efad = [];
var defaultValuetable1046ed23a1578a45445b11c81b259550efad = {};
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '附件名称', formatter:formattable1046ed23a1578a45445b11c81b259550efadDetail, hidden:false, name: 'RELACTION_ATTA_NAME',align:'left',  width: '150px'});
function formattable1046ed23a1578a45445b11c81b259550efadDetail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable1046ed23a1578a45445b11c81b259550efadDetail(\''+id+'\')">'+cellvalue+'</a>';
}function totable1046ed23a1578a45445b11c81b259550efadDetail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id='+id      
	});  
}tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '附件所属表名',hidden:false, name: 'ATTACH_TABLE_NAME',align:'left',  width: '150px'});
tablecmtable1046ed23a1578a45445b11c81b259550efad.push({label: '表单字段名',hidden:false, name: 'FROM_NAME',align:'left',  width: '150px'});
	var searchNamestable1046ed23a1578a45445b11c81b259550efad = []; 
searchNamestable1046ed23a1578a45445b11c81b259550efad.push('RELACTION_ATTA_NAME');
searchNamestable1046ed23a1578a45445b11c81b259550efad.push('ATTACH_TABLE_NAME');
searchNamestable1046ed23a1578a45445b11c81b259550efad.push('FROM_NAME');
$('#keyWordtable1046ed23a1578a45445b11c81b259550efad').attr('placeholder', '请输入关联附件名称、附件所属表名、表单字段名查询');
function searchDataKeyWordtable1046ed23a1578a45445b11c81b259550efad(){
	var keyWord = $.trim($("#keyWordtable1046ed23a1578a45445b11c81b259550efad").val()); 
 if($('#keyWordtable1046ed23a1578a45445b11c81b259550efad').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable1046ed23a1578a45445b11c81b259550efad.length;i++){ 
		var name = searchNamestable1046ed23a1578a45445b11c81b259550efad[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table1046ed23a1578a45445b11c81b259550efadKeyWordIn=JSON.stringify(param);
table1046ed23a1578a45445b11c81b259550efadParamIn="";
	$('#table1046ed23a1578a45445b11c81b259550efad').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable1046ed23a1578a45445b11c81b259550efad').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable1046ed23a1578a45445b11c81b259550efad();
	}
});
$('#keyWordBttable1046ed23a1578a45445b11c81b259550efad').bind('click', function() {
		searchDataKeyWordtable1046ed23a1578a45445b11c81b259550efad();
});
;$(document).ready(function(){ 

$("#table1046ed23a1578a45445b11c81b259550efad").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3828f72f30182a571e6807f2b/table1046ed23a1578a45445b11c81b259550efad/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable1046ed23a1578a45445b11c81b259550efad,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1046ed23a1578a45445b11c81b259550efadSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1046ed23a1578a45445b11c81b259550efadLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1046ed23a1578a45445b11c81b259550efadOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1046ed23a1578a45445b11c81b259550efadOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1046ed23a1578a45445b11c81b259550efadGridComplete.exec();
				    setTimeout(function(){var height = $("#table1046ed23a1578a45445b11c81b259550efad").closest('.ui-jqgrid-bdiv').height();
					$("#table1046ed23a1578a45445b11c81b259550efadnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1046ed23a1578a45445b11c81b259550efadnorecords img").css("width","120px");
                 }else{
					    $("#table1046ed23a1578a45445b11c81b259550efadnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1046ed23a1578a45445b11c81b259550efadBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table1046ed23a1578a45445b11c81b259550efadOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1046ed23a1578a45445b11c81b259550efadnorecords").hide();
		   	    $("#Pagertable1046ed23a1578a45445b11c81b259550efad_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1046ed23a1578a45445b11c81b259550efad").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1046ed23a1578a45445b11c81b259550efad").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1046ed23a1578a45445b11c81b259550efadnorecords").html() == null) {
						$("#table1046ed23a1578a45445b11c81b259550efad").parent().append("<div class='no_data' id='table1046ed23a1578a45445b11c81b259550efadnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1046ed23a1578a45445b11c81b259550efadnorecords").show();
					$("#Pagertable1046ed23a1578a45445b11c81b259550efad_left").css("display", "none");
				}
table1046ed23a1578a45445b11c81b259550efadLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1046ed23a1578a45445b11c81b259550efad"
    });
table1046ed23a1578a45445b11c81b259550efadReload();
$("#t_table1046ed23a1578a45445b11c81b259550efad").append($("#tableToolbartable1046ed23a1578a45445b11c81b259550efad"));$("#tableToolbarButton17d02150072f074908f9585b27987578ab48").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f30182a56fc1977f03&grid=table1046ed23a1578a45445b11c81b259550efad',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonf06eed104cec644573ca7dbc25fe7b48f597").bind('click',function() {                                                                                       
	var ids = $('#table1046ed23a1578a45445b11c81b259550efad').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table1046ed23a1578a45445b11c81b259550efad').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3828f72f30182a56fc1977f03&id=' + rowData.ID+'&grid=table1046ed23a1578a45445b11c81b259550efad',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton79c98546bec2694a62c8a4272cc29f7b8d99").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table1046ed23a1578a45445b11c81b259550efad').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table1046ed23a1578a45445b11c81b259550efad').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_RELA_ATTACH&isbpm=N&dbid=948e83e3828f72f30182a57140887f04', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3828f72f30182a571e6807f2b',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table1046ed23a1578a45445b11c81b259550efad').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
