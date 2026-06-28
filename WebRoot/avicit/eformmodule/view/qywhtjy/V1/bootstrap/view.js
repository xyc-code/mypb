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

function redraw2c908c528e79da22018e7d6025491384(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528e79da22018e7d6025491384").width();
		var win_height = $("#2c908c528e79da22018e7d6025491384").height();
		$('#2c908c528e79da22018e7d6025491384').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528e79da22018e7d6025491384').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528e79da22018e7d6025491384").width();
	setTimeout(function(){redraw2c908c528e79da22018e7d6025491384(win_width);},500);
});
var table492f65ca7d191e4d2eea6dcee87bdcefe23bKeyWordIn = "";    
var table492f65ca7d191e4d2eea6dcee87bdcefe23bParamIn = "";    
var table492f65ca7d191e4d2eea6dcee87bdcefe23bSelectRow = {     
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bLoadComplete = {     
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bBeforeEditCell = {        
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bOndblClickRow = {     
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bOnRightClickRow = {     
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bGridComplete = {     
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bOnCellSelect = {     
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
var table492f65ca7d191e4d2eea6dcee87bdcefe23bLoadBeforeSend = {        
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
function table492f65ca7d191e4d2eea6dcee87bdcefe23bReload(pid){
	var _isInvalid = true;
	$("#table492f65ca7d191e4d2eea6dcee87bdcefe23b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table492f65ca7d191e4d2eea6dcee87bdcefe23bPid = pid;
		}
		return false;
	}
	window.table492f65ca7d191e4d2eea6dcee87bdcefe23bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table492f65ca7d191e4d2eea6dcee87bdcefe23bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table492f65ca7d191e4d2eea6dcee87bdcefe23bPid == 'undefined' || window.table492f65ca7d191e4d2eea6dcee87bdcefe23bPid!=null){
table492f65ca7d191e4d2eea6dcee87bdcefe23bReload(window.table492f65ca7d191e4d2eea6dcee87bdcefe23bPid);
}
}
var tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b = [];
var uniqueColtable492f65ca7d191e4d2eea6dcee87bdcefe23b = [];
var uniqueColTitletable492f65ca7d191e4d2eea6dcee87bdcefe23b = [];
var defaultValuetable492f65ca7d191e4d2eea6dcee87bdcefe23b = {};
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '单位',hidden:false, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '姓名',hidden:false, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '联系电话',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '备注',hidden:false, name: 'BZ',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '单位id',hidden:true, name: 'UNIT',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '姓名id',hidden:true, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
	var searchNamestable492f65ca7d191e4d2eea6dcee87bdcefe23b = []; 
searchNamestable492f65ca7d191e4d2eea6dcee87bdcefe23b.push('USER_ID');
$('#keyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b(){
	var keyWord = $.trim($("#keyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b").val()); 
 if($('#keyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable492f65ca7d191e4d2eea6dcee87bdcefe23b.length;i++){ 
		var name = searchNamestable492f65ca7d191e4d2eea6dcee87bdcefe23b[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table492f65ca7d191e4d2eea6dcee87bdcefe23bKeyWordIn=JSON.stringify(param);
table492f65ca7d191e4d2eea6dcee87bdcefe23bParamIn="";
	$('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b();
	}
});
$('#keyWordBttable492f65ca7d191e4d2eea6dcee87bdcefe23b').bind('click', function() {
		searchDataKeyWordtable492f65ca7d191e4d2eea6dcee87bdcefe23b();
});
;$(document).ready(function(){ 

$("#table492f65ca7d191e4d2eea6dcee87bdcefe23b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528e79da22018e7d6025491384/table492f65ca7d191e4d2eea6dcee87bdcefe23b/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable492f65ca7d191e4d2eea6dcee87bdcefe23b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table492f65ca7d191e4d2eea6dcee87bdcefe23bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table492f65ca7d191e4d2eea6dcee87bdcefe23bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table492f65ca7d191e4d2eea6dcee87bdcefe23bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table492f65ca7d191e4d2eea6dcee87bdcefe23bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table492f65ca7d191e4d2eea6dcee87bdcefe23bGridComplete.exec();
				    setTimeout(function(){var height = $("#table492f65ca7d191e4d2eea6dcee87bdcefe23b").closest('.ui-jqgrid-bdiv').height();
					$("#table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords img").css("width","120px");
                 }else{
					    $("#table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table492f65ca7d191e4d2eea6dcee87bdcefe23bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table492f65ca7d191e4d2eea6dcee87bdcefe23bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords").hide();
		   	    $("#Pagertable492f65ca7d191e4d2eea6dcee87bdcefe23b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table492f65ca7d191e4d2eea6dcee87bdcefe23b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table492f65ca7d191e4d2eea6dcee87bdcefe23b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords").html() == null) {
						$("#table492f65ca7d191e4d2eea6dcee87bdcefe23b").parent().append("<div class='no_data' id='table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table492f65ca7d191e4d2eea6dcee87bdcefe23bnorecords").show();
					$("#Pagertable492f65ca7d191e4d2eea6dcee87bdcefe23b_left").css("display", "none");
				}
table492f65ca7d191e4d2eea6dcee87bdcefe23bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable492f65ca7d191e4d2eea6dcee87bdcefe23b"
    });
table492f65ca7d191e4d2eea6dcee87bdcefe23bReload();
$("#t_table492f65ca7d191e4d2eea6dcee87bdcefe23b").append($("#tableToolbartable492f65ca7d191e4d2eea6dcee87bdcefe23b"));$("#tableToolbarButtonfe7402e260bb164d92d8d6c597b86baf974c").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528e79da22018e79ff90d60a95&grid=table492f65ca7d191e4d2eea6dcee87bdcefe23b',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton4570a5efa5829a4c34588f4757ec755ff2ef").bind('click',function() {                                                                                       
	var ids = $('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528e79da22018e79ff90d60a95&id=' + rowData.ID+'&grid=table492f65ca7d191e4d2eea6dcee87bdcefe23b',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton5c057f08fe73a9480288beb52888c51e9be0").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_QIWHTJYXXB&isbpm=N&dbid=2c908c528e79da22018e7a0145160a96', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c528e79da22018e7d6025491384',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table492f65ca7d191e4d2eea6dcee87bdcefe23b').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
