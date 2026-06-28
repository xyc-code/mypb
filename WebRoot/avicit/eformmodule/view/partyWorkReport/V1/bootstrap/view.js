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

function redraw402811817e7a67d0017e7ba36f2a0d90(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817e7a67d0017e7ba36f2a0d90").width();
		var win_height = $("#402811817e7a67d0017e7ba36f2a0d90").height();
		$('#402811817e7a67d0017e7ba36f2a0d90').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#402811817e7a67d0017e7ba36f2a0d90').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817e7a67d0017e7ba36f2a0d90").width();
	setTimeout(function(){redraw402811817e7a67d0017e7ba36f2a0d90(win_width);},500);
});
var table4e901df056a243487b98bddc79b062904f97KeyWordIn = "";    
var table4e901df056a243487b98bddc79b062904f97ParamIn = "";    
var table4e901df056a243487b98bddc79b062904f97SelectRow = {     
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
var table4e901df056a243487b98bddc79b062904f97LoadComplete = {     
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
var table4e901df056a243487b98bddc79b062904f97BeforeEditCell = {        
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
var table4e901df056a243487b98bddc79b062904f97OndblClickRow = {     
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
var table4e901df056a243487b98bddc79b062904f97OnRightClickRow = {     
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
var table4e901df056a243487b98bddc79b062904f97GridComplete = {     
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
var table4e901df056a243487b98bddc79b062904f97OnCellSelect = {     
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
var table4e901df056a243487b98bddc79b062904f97LoadBeforeSend = {        
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
function table4e901df056a243487b98bddc79b062904f97Reload(pid){
	var _isInvalid = true;
	$("#table4e901df056a243487b98bddc79b062904f97").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table4e901df056a243487b98bddc79b062904f97Pid = pid;
		}
		return false;
	}
	window.table4e901df056a243487b98bddc79b062904f97Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table4e901df056a243487b98bddc79b062904f97Reload();
};
function table4e901df056a243487b98bddc79b062904f97TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table4e901df056a243487b98bddc79b062904f97Pid == 'undefined' || window.table4e901df056a243487b98bddc79b062904f97Pid!=null){
table4e901df056a243487b98bddc79b062904f97Reload(window.table4e901df056a243487b98bddc79b062904f97Pid);
}
}
var tablecmtable4e901df056a243487b98bddc79b062904f97 = [];
var uniqueColtable4e901df056a243487b98bddc79b062904f97 = [];
var uniqueColTitletable4e901df056a243487b98bddc79b062904f97 = [];
var defaultValuetable4e901df056a243487b98bddc79b062904f97 = {};
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '报送人',hidden:false, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '报送部门',hidden:false, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '报送日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '标题',hidden:false, name: 'TITLE',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({ label: '分类',hidden:true, name: 'CLASSIFICATION',align:'center',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({ label: '分类',hidden:false, name: 'CLASSIFICATIONName',align:'center',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable4e901df056a243487b98bddc79b062904f97.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable4e901df056a243487b98bddc79b062904f97.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable4e901df056a243487b98bddc79b062904f97.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable4e901df056a243487b98bddc79b062904f97.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});function table4e901df056a243487b98bddc79b062904f97initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtona17c5b174e30944eefb8d476a2c0bc5cacda").css('display','inline-block');
}else{
$("#tableToolbarButtona17c5b174e30944eefb8d476a2c0bc5cacda").hide();
}
table4e901df056a243487b98bddc79b062904f97searchWF();
}
function table4e901df056a243487b98bddc79b062904f97searchWF(){
   if ($("#searchformtable4e901df056a243487b98bddc79b062904f97").length>0){
      var para = serializeObject($("#searchformtable4e901df056a243487b98bddc79b062904f97"));
      para.bpmState = $('#table4e901df056a243487b98bddc79b062904f97workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table4e901df056a243487b98bddc79b062904f97workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
	var searchNamestable4e901df056a243487b98bddc79b062904f97 = []; 
searchNamestable4e901df056a243487b98bddc79b062904f97.push('REQUEST_USER');
searchNamestable4e901df056a243487b98bddc79b062904f97.push('AUTO_CODE');
$('#keyWordtable4e901df056a243487b98bddc79b062904f97').attr('placeholder', '请输入报送人、表单编号查询');
function searchDataKeyWordtable4e901df056a243487b98bddc79b062904f97(){
	var keyWord = $.trim($("#keyWordtable4e901df056a243487b98bddc79b062904f97").val()); 
 if($('#keyWordtable4e901df056a243487b98bddc79b062904f97').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable4e901df056a243487b98bddc79b062904f97.length;i++){ 
		var name = searchNamestable4e901df056a243487b98bddc79b062904f97[i]; 
		param[name] = keyWord; 
	} 
if ($("#table4e901df056a243487b98bddc79b062904f97workFlowSelect").length>0){param.bpmState=$('#table4e901df056a243487b98bddc79b062904f97workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table4e901df056a243487b98bddc79b062904f97KeyWordIn=JSON.stringify(param);
table4e901df056a243487b98bddc79b062904f97ParamIn="";
	$('#table4e901df056a243487b98bddc79b062904f97').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable4e901df056a243487b98bddc79b062904f97').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable4e901df056a243487b98bddc79b062904f97();
	}
});
$('#keyWordBttable4e901df056a243487b98bddc79b062904f97').bind('click', function() {
		searchDataKeyWordtable4e901df056a243487b98bddc79b062904f97();
});
;$(document).ready(function(){ 

$("#table4e901df056a243487b98bddc79b062904f97").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817e7a67d0017e7ba36f2a0d90/table4e901df056a243487b98bddc79b062904f97/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable4e901df056a243487b98bddc79b062904f97,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table4e901df056a243487b98bddc79b062904f97SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table4e901df056a243487b98bddc79b062904f97LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table4e901df056a243487b98bddc79b062904f97OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table4e901df056a243487b98bddc79b062904f97OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table4e901df056a243487b98bddc79b062904f97GridComplete.exec();
				    setTimeout(function(){var height = $("#table4e901df056a243487b98bddc79b062904f97").closest('.ui-jqgrid-bdiv').height();
					$("#table4e901df056a243487b98bddc79b062904f97norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table4e901df056a243487b98bddc79b062904f97norecords img").css("width","120px");
                 }else{
					    $("#table4e901df056a243487b98bddc79b062904f97norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table4e901df056a243487b98bddc79b062904f97BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table4e901df056a243487b98bddc79b062904f97OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table4e901df056a243487b98bddc79b062904f97norecords").hide();
		   	    $("#Pagertable4e901df056a243487b98bddc79b062904f97_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table4e901df056a243487b98bddc79b062904f97").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table4e901df056a243487b98bddc79b062904f97").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table4e901df056a243487b98bddc79b062904f97norecords").html() == null) {
						$("#table4e901df056a243487b98bddc79b062904f97").parent().append("<div class='no_data' id='table4e901df056a243487b98bddc79b062904f97norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table4e901df056a243487b98bddc79b062904f97norecords").show();
					$("#Pagertable4e901df056a243487b98bddc79b062904f97_left").css("display", "none");
				}
table4e901df056a243487b98bddc79b062904f97LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable4e901df056a243487b98bddc79b062904f97"
    });
table4e901df056a243487b98bddc79b062904f97Reload();
$("#t_table4e901df056a243487b98bddc79b062904f97").append($("#tableToolbartable4e901df056a243487b98bddc79b062904f97"));$("#tableToolbarButtonc813d0bd847fa14823689647ee86bc4d91cc").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817e770e44017e77ddb9ac0dee&grid=table4e901df056a243487b98bddc79b062904f97'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonb56ca7b89f85984ead888331f2eafaf44967").bind('click',function(event){var bpmsDeleteRows = $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table4e901df056a243487b98bddc79b062904f97').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PW_REPORT&isbpm=Y&dbid=402811817e7a67d0017e7b8eb9930aaa', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817e7a67d0017e7ba36f2a0d90',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table4e901df056a243487b98bddc79b062904f97').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
	}});
$("#tableToolbarButton2d88d6fe2379144ea478caff7c94b57abb68").bind('click',function(event){var ids = $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38ef05f1e018ef3f07be12ba8&id=' + rowData.ID+'&grid=table4e901df056a243487b98bddc79b062904f97',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }
 });});
$("#tableToolbarButtona17c5b174e30944eefb8d476a2c0bc5cacda").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table4e901df056a243487b98bddc79b062904f97').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table4e901df056a243487b98bddc79b062904f97').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PW_REPORT&isbpm=Y&dbid=402811817e7a67d0017e7b8eb9930aaa', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817e7a67d0017e7ba36f2a0d90',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table4e901df056a243487b98bddc79b062904f97').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtona17c5b174e30944eefb8d476a2c0bc5cacda").hide();
$('#table4e901df056a243487b98bddc79b062904f97workFlowSelect').bind('change',function(){
table4e901df056a243487b98bddc79b062904f97initWorkFlow($(this).val());
});
function searchDatatable4e901df056a243487b98bddc79b062904f97(){
 var para = serializeObjectForEform($("#searchformtable4e901df056a243487b98bddc79b062904f97"));
 para.bpmState = $('#table4e901df056a243487b98bddc79b062904f97workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table4e901df056a243487b98bddc79b062904f97KeyWordIn="";
table4e901df056a243487b98bddc79b062904f97ParamIn=JSON.stringify(para);
	$('#table4e901df056a243487b98bddc79b062904f97').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable4e901df056a243487b98bddc79b062904f97").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable4e901df056a243487b98bddc79b062904f97').bind('click',function(){
var contentWidth = 650;
var top =  $(this).offset().top + $(this).outerHeight(true);
var left = $(this).offset().left + $(this).outerWidth() - contentWidth;
if (left < 0){contentWidth = contentWidth + left; left = 0}
var text = $(this).text();
var width = $(this).innerWidth();
layer.config({
	  extend: 'skin/layer-bootstrap.css'
});
layer.open({
	type: 1,
	shift: 5,
	title: false,
	scrollbar: false,
	move : false,
 area:[
contentWidth + 'px',
'200px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtable4e901df056a243487b98bddc79b062904f97'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable4e901df056a243487b98bddc79b062904f97(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable4e901df056a243487b98bddc79b062904f97")); searchDatatable4e901df056a243487b98bddc79b062904f97(); layer.close(index); return false;
	},
	btn3: function(index, layero){	
	layer.close(index);}
});
});
 $('.date-picker').datepicker({ 
	beforeShow: function () {
		setTimeout(function () {
			$('#ui-datepicker-div').css('z-index', 99999999);
		}, 100);
	}
});
 $('.time-picker').datetimepicker({
  	oneLine:true, 
  	closeText:'确定', 
  	showButtonPanel:true, 
  	showSecond:true,
  	beforeShow: function(selectedDate) {
  		if($('#'+selectedDate.id).val()==""){
  			$(this).datetimepicker("setDate", new Date());
  			$('#'+selectedDate.id).val('');
 		}
 		setTimeout(function () {
 			$('#ui-datepicker-div').css("z-index", 99999999);
 		}, 100);
  	}
 });
$('#REQUEST_DATE_START_button').click(function(e){
			$('#REQUEST_DATE_START').datepicker('show');
			$('#REQUEST_DATE_START').datepicker().trigger('click');
}); 
$('#REQUEST_DATE_END_button').click(function(e){
			$('#REQUEST_DATE_END').datepicker('show');
			$('#REQUEST_DATE_END').datepicker().trigger('click');
}); 
;});	 
