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

function redraw2c908c528e353d9b018e3548f12a08bf(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528e353d9b018e3548f12a08bf").width();
		var win_height = $("#2c908c528e353d9b018e3548f12a08bf").height();
		$('#2c908c528e353d9b018e3548f12a08bf').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528e353d9b018e3548f12a08bf').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528e353d9b018e3548f12a08bf").width();
	setTimeout(function(){redraw2c908c528e353d9b018e3548f12a08bf(win_width);},500);
});
var table6f0d15358dd1394650282bbf5c32a9198272KeyWordIn = "";    
var table6f0d15358dd1394650282bbf5c32a9198272ParamIn = "";    
var table6f0d15358dd1394650282bbf5c32a9198272SelectRow = {     
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
var table6f0d15358dd1394650282bbf5c32a9198272LoadComplete = {     
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
var table6f0d15358dd1394650282bbf5c32a9198272BeforeEditCell = {        
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
var table6f0d15358dd1394650282bbf5c32a9198272OndblClickRow = {     
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
var table6f0d15358dd1394650282bbf5c32a9198272OnRightClickRow = {     
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
var table6f0d15358dd1394650282bbf5c32a9198272GridComplete = {     
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
var table6f0d15358dd1394650282bbf5c32a9198272OnCellSelect = {     
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
var table6f0d15358dd1394650282bbf5c32a9198272LoadBeforeSend = {        
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
function table6f0d15358dd1394650282bbf5c32a9198272Reload(pid){
	var _isInvalid = true;
	$("#table6f0d15358dd1394650282bbf5c32a9198272").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6f0d15358dd1394650282bbf5c32a9198272Pid = pid;
		}
		return false;
	}
	window.table6f0d15358dd1394650282bbf5c32a9198272Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6f0d15358dd1394650282bbf5c32a9198272').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table6f0d15358dd1394650282bbf5c32a9198272Reload();
};
function table6f0d15358dd1394650282bbf5c32a9198272TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6f0d15358dd1394650282bbf5c32a9198272Pid == 'undefined' || window.table6f0d15358dd1394650282bbf5c32a9198272Pid!=null){
table6f0d15358dd1394650282bbf5c32a9198272Reload(window.table6f0d15358dd1394650282bbf5c32a9198272Pid);
}
}
var tablecmtable6f0d15358dd1394650282bbf5c32a9198272 = [];
var uniqueColtable6f0d15358dd1394650282bbf5c32a9198272 = [];
var uniqueColTitletable6f0d15358dd1394650282bbf5c32a9198272 = [];
var defaultValuetable6f0d15358dd1394650282bbf5c32a9198272 = {};
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '申请日期',hidden:false, name: 'REQUST_DATE',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '申请人所在单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '联系电话',hidden:false, name: 'TEL',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '换届工会名称',hidden:false, name: 'GUILD_NAME',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '工会组织类型',hidden:false, name: 'GUILD_TYPE',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '上届换届时间', formatter:format, hidden:false, name: 'CREA_TIME',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '任期届满时间', formatter:format, hidden:false, name: 'DUE_TIME1',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '提交换届请示时间', formatter:format, hidden:false, name: 'TJHJ_TIME',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '提交预备人选请示时间', formatter:format, hidden:false, name: 'TJYBRX_TIME',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '召开工会大会选举时间', formatter:format, hidden:false, name: 'ZKDYDH_TIME',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '工会ID',hidden:true, name: 'GUILD_ID',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable6f0d15358dd1394650282bbf5c32a9198272.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable6f0d15358dd1394650282bbf5c32a9198272 = []; 
searchNamestable6f0d15358dd1394650282bbf5c32a9198272.push('AUTO_CODE');
searchNamestable6f0d15358dd1394650282bbf5c32a9198272.push('GUILD_NAME');
$('#keyWordtable6f0d15358dd1394650282bbf5c32a9198272').attr('placeholder', '请输入表单编号、换届工会名称查询');
function searchDataKeyWordtable6f0d15358dd1394650282bbf5c32a9198272(){
	var keyWord = $.trim($("#keyWordtable6f0d15358dd1394650282bbf5c32a9198272").val()); 
 if($('#keyWordtable6f0d15358dd1394650282bbf5c32a9198272').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable6f0d15358dd1394650282bbf5c32a9198272.length;i++){ 
		var name = searchNamestable6f0d15358dd1394650282bbf5c32a9198272[i]; 
		param[name] = keyWord; 
	} 
if ($("#table6f0d15358dd1394650282bbf5c32a9198272workFlowSelect").length>0){param.bpmState=$('#table6f0d15358dd1394650282bbf5c32a9198272workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table6f0d15358dd1394650282bbf5c32a9198272KeyWordIn=JSON.stringify(param);
table6f0d15358dd1394650282bbf5c32a9198272ParamIn="";
	$('#table6f0d15358dd1394650282bbf5c32a9198272').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable6f0d15358dd1394650282bbf5c32a9198272').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable6f0d15358dd1394650282bbf5c32a9198272();
	}
});
$('#keyWordBttable6f0d15358dd1394650282bbf5c32a9198272').bind('click', function() {
		searchDataKeyWordtable6f0d15358dd1394650282bbf5c32a9198272();
});
function table6f0d15358dd1394650282bbf5c32a9198272initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtoncd31adb4ee9126435028d47c3d68d846763e").css('display','inline-block');
}else{
$("#tableToolbarButtoncd31adb4ee9126435028d47c3d68d846763e").hide();
}
table6f0d15358dd1394650282bbf5c32a9198272searchWF();
}
function table6f0d15358dd1394650282bbf5c32a9198272searchWF(){
   if ($("#searchformtable6f0d15358dd1394650282bbf5c32a9198272").length>0){
      var para = serializeObject($("#searchformtable6f0d15358dd1394650282bbf5c32a9198272"));
      para.bpmState = $('#table6f0d15358dd1394650282bbf5c32a9198272workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table6f0d15358dd1394650282bbf5c32a9198272').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table6f0d15358dd1394650282bbf5c32a9198272workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table6f0d15358dd1394650282bbf5c32a9198272').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table6f0d15358dd1394650282bbf5c32a9198272").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528e353d9b018e3548f12a08bf/table6f0d15358dd1394650282bbf5c32a9198272/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6f0d15358dd1394650282bbf5c32a9198272,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6f0d15358dd1394650282bbf5c32a9198272SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6f0d15358dd1394650282bbf5c32a9198272LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6f0d15358dd1394650282bbf5c32a9198272OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6f0d15358dd1394650282bbf5c32a9198272OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6f0d15358dd1394650282bbf5c32a9198272GridComplete.exec();
				    setTimeout(function(){var height = $("#table6f0d15358dd1394650282bbf5c32a9198272").closest('.ui-jqgrid-bdiv').height();
					$("#table6f0d15358dd1394650282bbf5c32a9198272norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6f0d15358dd1394650282bbf5c32a9198272norecords img").css("width","120px");
                 }else{
					    $("#table6f0d15358dd1394650282bbf5c32a9198272norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6f0d15358dd1394650282bbf5c32a9198272BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6f0d15358dd1394650282bbf5c32a9198272OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6f0d15358dd1394650282bbf5c32a9198272norecords").hide();
		   	    $("#Pagertable6f0d15358dd1394650282bbf5c32a9198272_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6f0d15358dd1394650282bbf5c32a9198272").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6f0d15358dd1394650282bbf5c32a9198272").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6f0d15358dd1394650282bbf5c32a9198272norecords").html() == null) {
						$("#table6f0d15358dd1394650282bbf5c32a9198272").parent().append("<div class='no_data' id='table6f0d15358dd1394650282bbf5c32a9198272norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6f0d15358dd1394650282bbf5c32a9198272norecords").show();
					$("#Pagertable6f0d15358dd1394650282bbf5c32a9198272_left").css("display", "none");
				}
table6f0d15358dd1394650282bbf5c32a9198272LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6f0d15358dd1394650282bbf5c32a9198272"
    });
table6f0d15358dd1394650282bbf5c32a9198272Reload();
$("#t_table6f0d15358dd1394650282bbf5c32a9198272").append($("#tableToolbartable6f0d15358dd1394650282bbf5c32a9198272"));$("#tableToolbarButton28040b5f7131734142f8a25c6223f6536710").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528e31b674018e31c4a1df08a0&grid=table6f0d15358dd1394650282bbf5c32a9198272'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtoncd31adb4ee9126435028d47c3d68d846763e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6f0d15358dd1394650282bbf5c32a9198272').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6f0d15358dd1394650282bbf5c32a9198272').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GUILD_HJTX&isbpm=Y&dbid=2c908c528e31b674018e31d2856108a5', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c528e353d9b018e3548f12a08bf',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6f0d15358dd1394650282bbf5c32a9198272').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtoncd31adb4ee9126435028d47c3d68d846763e").hide();
$('#table6f0d15358dd1394650282bbf5c32a9198272workFlowSelect').bind('change',function(){
table6f0d15358dd1394650282bbf5c32a9198272initWorkFlow($(this).val());
});
;});	 
