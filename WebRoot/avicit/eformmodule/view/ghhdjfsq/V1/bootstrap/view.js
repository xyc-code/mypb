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

function redraw948e83e38e54e848018e552ca1ac129f(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38e54e848018e552ca1ac129f").width();
		var win_height = $("#948e83e38e54e848018e552ca1ac129f").height();
		$('#948e83e38e54e848018e552ca1ac129f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38e54e848018e552ca1ac129f').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38e54e848018e552ca1ac129f").width();
	setTimeout(function(){redraw948e83e38e54e848018e552ca1ac129f(win_width);},500);
});
var table86a673a371297e415948e6704a1db9ec598bKeyWordIn = "";    
var table86a673a371297e415948e6704a1db9ec598bParamIn = "";    
var table86a673a371297e415948e6704a1db9ec598bSelectRow = {     
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
var table86a673a371297e415948e6704a1db9ec598bLoadComplete = {     
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
var table86a673a371297e415948e6704a1db9ec598bBeforeEditCell = {        
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
var table86a673a371297e415948e6704a1db9ec598bOndblClickRow = {     
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
var table86a673a371297e415948e6704a1db9ec598bOnRightClickRow = {     
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
var table86a673a371297e415948e6704a1db9ec598bGridComplete = {     
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
var table86a673a371297e415948e6704a1db9ec598bOnCellSelect = {     
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
var table86a673a371297e415948e6704a1db9ec598bLoadBeforeSend = {        
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
function table86a673a371297e415948e6704a1db9ec598bReload(pid){
	var _isInvalid = true;
	$("#table86a673a371297e415948e6704a1db9ec598b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table86a673a371297e415948e6704a1db9ec598bPid = pid;
		}
		return false;
	}
	window.table86a673a371297e415948e6704a1db9ec598bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table86a673a371297e415948e6704a1db9ec598b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table86a673a371297e415948e6704a1db9ec598bReload();
};
function table86a673a371297e415948e6704a1db9ec598bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table86a673a371297e415948e6704a1db9ec598bPid == 'undefined' || window.table86a673a371297e415948e6704a1db9ec598bPid!=null){
table86a673a371297e415948e6704a1db9ec598bReload(window.table86a673a371297e415948e6704a1db9ec598bPid);
}
}
var tablecmtable86a673a371297e415948e6704a1db9ec598b = [];
var uniqueColtable86a673a371297e415948e6704a1db9ec598b = [];
var uniqueColTitletable86a673a371297e415948e6704a1db9ec598b = [];
var defaultValuetable86a673a371297e415948e6704a1db9ec598b = {};
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '自动编码',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '申请日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '经办人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '申请人',hidden:false, name: 'HANDLER',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '会员总人数',hidden:false, name: 'GUILD_MEMBER_NUM',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '工会',hidden:false, name: 'GUILD_NAME',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '总计金额',hidden:false, name: 'TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '联系电话：',hidden:true, name: 'TEL',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '类型选择',hidden:true, name: 'SEL_TYPE',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '学习资料总计金额',hidden:true, name: 'XXZL_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '工本费总计金额',hidden:true, name: 'GB_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '场地费总计金额',hidden:true, name: 'CD_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '党徽党旗总计金额',hidden:true, name: 'DHDQ_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '设备费用总金额',hidden:true, name: 'SB_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '门票讲解总计金额',hidden:true, name: 'MPJJ_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '表彰总计金额',hidden:true, name: 'BZ_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '困难党员总计金额',hidden:true, name: 'KNDY_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '工会ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '经办人ID',hidden:true, name: 'HANDLER_ID',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable86a673a371297e415948e6704a1db9ec598b.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable86a673a371297e415948e6704a1db9ec598b.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable86a673a371297e415948e6704a1db9ec598b.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable86a673a371297e415948e6704a1db9ec598b.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable86a673a371297e415948e6704a1db9ec598b = []; 
searchNamestable86a673a371297e415948e6704a1db9ec598b.push('AUTO_CODE');
searchNamestable86a673a371297e415948e6704a1db9ec598b.push('GUILD_NAME');
$('#keyWordtable86a673a371297e415948e6704a1db9ec598b').attr('placeholder', '请输入自动编码、工会查询');
function searchDataKeyWordtable86a673a371297e415948e6704a1db9ec598b(){
	var keyWord = $.trim($("#keyWordtable86a673a371297e415948e6704a1db9ec598b").val()); 
 if($('#keyWordtable86a673a371297e415948e6704a1db9ec598b').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable86a673a371297e415948e6704a1db9ec598b.length;i++){ 
		var name = searchNamestable86a673a371297e415948e6704a1db9ec598b[i]; 
		param[name] = keyWord; 
	} 
if ($("#table86a673a371297e415948e6704a1db9ec598bworkFlowSelect").length>0){param.bpmState=$('#table86a673a371297e415948e6704a1db9ec598bworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table86a673a371297e415948e6704a1db9ec598bKeyWordIn=JSON.stringify(param);
table86a673a371297e415948e6704a1db9ec598bParamIn="";
	$('#table86a673a371297e415948e6704a1db9ec598b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable86a673a371297e415948e6704a1db9ec598b').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable86a673a371297e415948e6704a1db9ec598b();
	}
});
$('#keyWordBttable86a673a371297e415948e6704a1db9ec598b').bind('click', function() {
		searchDataKeyWordtable86a673a371297e415948e6704a1db9ec598b();
});
function table86a673a371297e415948e6704a1db9ec598binitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton30f82f430c31cb48f3982fbd92e1415fe1bf").css('display','inline-block');
}else{
$("#tableToolbarButton30f82f430c31cb48f3982fbd92e1415fe1bf").hide();
}
table86a673a371297e415948e6704a1db9ec598bsearchWF();
}
function table86a673a371297e415948e6704a1db9ec598bsearchWF(){
   if ($("#searchformtable86a673a371297e415948e6704a1db9ec598b").length>0){
      var para = serializeObject($("#searchformtable86a673a371297e415948e6704a1db9ec598b"));
      para.bpmState = $('#table86a673a371297e415948e6704a1db9ec598bworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table86a673a371297e415948e6704a1db9ec598b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table86a673a371297e415948e6704a1db9ec598bworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table86a673a371297e415948e6704a1db9ec598b').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table86a673a371297e415948e6704a1db9ec598b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38e54e848018e552ca1ac129f/table86a673a371297e415948e6704a1db9ec598b/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable86a673a371297e415948e6704a1db9ec598b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table86a673a371297e415948e6704a1db9ec598bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table86a673a371297e415948e6704a1db9ec598bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table86a673a371297e415948e6704a1db9ec598bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table86a673a371297e415948e6704a1db9ec598bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table86a673a371297e415948e6704a1db9ec598bGridComplete.exec();
				    setTimeout(function(){var height = $("#table86a673a371297e415948e6704a1db9ec598b").closest('.ui-jqgrid-bdiv').height();
					$("#table86a673a371297e415948e6704a1db9ec598bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table86a673a371297e415948e6704a1db9ec598bnorecords img").css("width","120px");
                 }else{
					    $("#table86a673a371297e415948e6704a1db9ec598bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table86a673a371297e415948e6704a1db9ec598bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table86a673a371297e415948e6704a1db9ec598bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table86a673a371297e415948e6704a1db9ec598bnorecords").hide();
		   	    $("#Pagertable86a673a371297e415948e6704a1db9ec598b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table86a673a371297e415948e6704a1db9ec598b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table86a673a371297e415948e6704a1db9ec598b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table86a673a371297e415948e6704a1db9ec598bnorecords").html() == null) {
						$("#table86a673a371297e415948e6704a1db9ec598b").parent().append("<div class='no_data' id='table86a673a371297e415948e6704a1db9ec598bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table86a673a371297e415948e6704a1db9ec598bnorecords").show();
					$("#Pagertable86a673a371297e415948e6704a1db9ec598b_left").css("display", "none");
				}
table86a673a371297e415948e6704a1db9ec598bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable86a673a371297e415948e6704a1db9ec598b"
    });
table86a673a371297e415948e6704a1db9ec598bReload();
$("#t_table86a673a371297e415948e6704a1db9ec598b").append($("#tableToolbartable86a673a371297e415948e6704a1db9ec598b"));$("#tableToolbarButton5732d33658aca94f6ff8d5e212281aa09a05").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38e3c3079018e50b0b4877c03&grid=table86a673a371297e415948e6704a1db9ec598b'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton30f82f430c31cb48f3982fbd92e1415fe1bf").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table86a673a371297e415948e6704a1db9ec598b').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table86a673a371297e415948e6704a1db9ec598b').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_GUILD_ACTIVITY&isbpm=Y&dbid=948e83e38e3c3079018e50c97ece15b5', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38e54e848018e552ca1ac129f',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table86a673a371297e415948e6704a1db9ec598b').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton30f82f430c31cb48f3982fbd92e1415fe1bf").hide();
$('#table86a673a371297e415948e6704a1db9ec598bworkFlowSelect').bind('change',function(){
table86a673a371297e415948e6704a1db9ec598binitWorkFlow($(this).val());
});
;});	 
