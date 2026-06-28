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

function redraw402811817f19a849017f1b3f7a080efc(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#402811817f19a849017f1b3f7a080efc").width();
		var win_height = $("#402811817f19a849017f1b3f7a080efc").height();
		$('#402811817f19a849017f1b3f7a080efc').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#402811817f19a849017f1b3f7a080efc').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#402811817f19a849017f1b3f7a080efc").width();
	setTimeout(function(){redraw402811817f19a849017f1b3f7a080efc(win_width);},500);
});
var table3c4a907d6035e9406cea68f273098bdeb907KeyWordIn = "";    
var table3c4a907d6035e9406cea68f273098bdeb907ParamIn = "";    
var table3c4a907d6035e9406cea68f273098bdeb907SelectRow = {     
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
var table3c4a907d6035e9406cea68f273098bdeb907LoadComplete = {     
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
var table3c4a907d6035e9406cea68f273098bdeb907BeforeEditCell = {        
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
var table3c4a907d6035e9406cea68f273098bdeb907OndblClickRow = {     
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
var table3c4a907d6035e9406cea68f273098bdeb907OnRightClickRow = {     
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
var table3c4a907d6035e9406cea68f273098bdeb907GridComplete = {     
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
var table3c4a907d6035e9406cea68f273098bdeb907OnCellSelect = {     
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
var table3c4a907d6035e9406cea68f273098bdeb907LoadBeforeSend = {        
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
function table3c4a907d6035e9406cea68f273098bdeb907Reload(pid){
	var _isInvalid = true;
	$("#table3c4a907d6035e9406cea68f273098bdeb907").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3c4a907d6035e9406cea68f273098bdeb907Pid = pid;
		}
		return false;
	}
	window.table3c4a907d6035e9406cea68f273098bdeb907Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table3c4a907d6035e9406cea68f273098bdeb907Reload();
};
function table3c4a907d6035e9406cea68f273098bdeb907TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3c4a907d6035e9406cea68f273098bdeb907Pid == 'undefined' || window.table3c4a907d6035e9406cea68f273098bdeb907Pid!=null){
table3c4a907d6035e9406cea68f273098bdeb907Reload(window.table3c4a907d6035e9406cea68f273098bdeb907Pid);
}
}
var tablecmtable3c4a907d6035e9406cea68f273098bdeb907 = [];
var uniqueColtable3c4a907d6035e9406cea68f273098bdeb907 = [];
var uniqueColTitletable3c4a907d6035e9406cea68f273098bdeb907 = [];
var defaultValuetable3c4a907d6035e9406cea68f273098bdeb907 = {};
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '表单编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '申请日期',hidden:false, name: 'REQUEST_DATE',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '申请人',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '申请单位',hidden:false, name: 'DEPT_NAME',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '党员总人数',hidden:true, name: 'PARTY_MEMBER_NUM',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '总计金额', formatter:formatNumberDec2, hidden:true, name: 'TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '经办人',hidden:false, name: 'HANDLER',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '经办人所在党支部',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '经办人ID',hidden:true, name: 'HANDLER_ID',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '字段_1',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '学习资料总计金额',hidden:true, name: 'XXZL_TOTLE_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '党徽党旗总计金额',hidden:true, name: 'DHDQ_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '其他总计金额',hidden:true, name: 'QT_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '学习资料总计金额',hidden:true, name: 'XXZL_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '工本费总计金额',hidden:true, name: 'GB_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '困难党员总计金额',hidden:true, name: 'KNDY_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '场地费总计金额',hidden:true, name: 'CD_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '门票讲解总计金额',hidden:true, name: 'MPJJ_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '设备费用总金额',hidden:true, name: 'SB_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '表彰总计金额',hidden:true, name: 'BZ_TOTAL_PRICE',align:'right',  width: '150px'});
tablecmtable3c4a907d6035e9406cea68f273098bdeb907.push({label: '类型选择',hidden:true, name: 'SEL_TYPE',align:'left',  width: '150px'});
function table3c4a907d6035e9406cea68f273098bdeb907initWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButtonf919056a7886d247ceebb791c787357bc298").css('display','inline-block');
}else{
$("#tableToolbarButtonf919056a7886d247ceebb791c787357bc298").hide();
}
table3c4a907d6035e9406cea68f273098bdeb907searchWF();
}
function table3c4a907d6035e9406cea68f273098bdeb907searchWF(){
   if ($("#searchformtable3c4a907d6035e9406cea68f273098bdeb907").length>0){
      var para = serializeObject($("#searchformtable3c4a907d6035e9406cea68f273098bdeb907"));
      para.bpmState = $('#table3c4a907d6035e9406cea68f273098bdeb907workFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table3c4a907d6035e9406cea68f273098bdeb907workFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
	var searchNamestable3c4a907d6035e9406cea68f273098bdeb907 = []; 
searchNamestable3c4a907d6035e9406cea68f273098bdeb907.push('AUTO_CODE');
searchNamestable3c4a907d6035e9406cea68f273098bdeb907.push('USER_NAME');
$('#keyWordtable3c4a907d6035e9406cea68f273098bdeb907').attr('placeholder', '请输入表单编号、申请人查询');
function searchDataKeyWordtable3c4a907d6035e9406cea68f273098bdeb907(){
	var keyWord = $.trim($("#keyWordtable3c4a907d6035e9406cea68f273098bdeb907").val()); 
 if($('#keyWordtable3c4a907d6035e9406cea68f273098bdeb907').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable3c4a907d6035e9406cea68f273098bdeb907.length;i++){ 
		var name = searchNamestable3c4a907d6035e9406cea68f273098bdeb907[i]; 
		param[name] = keyWord; 
	} 
if ($("#table3c4a907d6035e9406cea68f273098bdeb907workFlowSelect").length>0){param.bpmState=$('#table3c4a907d6035e9406cea68f273098bdeb907workFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table3c4a907d6035e9406cea68f273098bdeb907KeyWordIn=JSON.stringify(param);
table3c4a907d6035e9406cea68f273098bdeb907ParamIn="";
	$('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable3c4a907d6035e9406cea68f273098bdeb907').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable3c4a907d6035e9406cea68f273098bdeb907();
	}
});
$('#keyWordBttable3c4a907d6035e9406cea68f273098bdeb907').bind('click', function() {
		searchDataKeyWordtable3c4a907d6035e9406cea68f273098bdeb907();
});
;$(document).ready(function(){ 

$("#table3c4a907d6035e9406cea68f273098bdeb907").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/402811817f19a849017f1b3f7a080efc/table3c4a907d6035e9406cea68f273098bdeb907/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable3c4a907d6035e9406cea68f273098bdeb907,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3c4a907d6035e9406cea68f273098bdeb907SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3c4a907d6035e9406cea68f273098bdeb907LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3c4a907d6035e9406cea68f273098bdeb907OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3c4a907d6035e9406cea68f273098bdeb907OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3c4a907d6035e9406cea68f273098bdeb907GridComplete.exec();
				    setTimeout(function(){var height = $("#table3c4a907d6035e9406cea68f273098bdeb907").closest('.ui-jqgrid-bdiv').height();
					$("#table3c4a907d6035e9406cea68f273098bdeb907norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3c4a907d6035e9406cea68f273098bdeb907norecords img").css("width","120px");
                 }else{
					    $("#table3c4a907d6035e9406cea68f273098bdeb907norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3c4a907d6035e9406cea68f273098bdeb907BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3c4a907d6035e9406cea68f273098bdeb907OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3c4a907d6035e9406cea68f273098bdeb907norecords").hide();
		   	    $("#Pagertable3c4a907d6035e9406cea68f273098bdeb907_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3c4a907d6035e9406cea68f273098bdeb907").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3c4a907d6035e9406cea68f273098bdeb907").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3c4a907d6035e9406cea68f273098bdeb907norecords").html() == null) {
						$("#table3c4a907d6035e9406cea68f273098bdeb907").parent().append("<div class='no_data' id='table3c4a907d6035e9406cea68f273098bdeb907norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3c4a907d6035e9406cea68f273098bdeb907norecords").show();
					$("#Pagertable3c4a907d6035e9406cea68f273098bdeb907_left").css("display", "none");
				}
table3c4a907d6035e9406cea68f273098bdeb907LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3c4a907d6035e9406cea68f273098bdeb907"
    });
table3c4a907d6035e9406cea68f273098bdeb907Reload();
$("#t_table3c4a907d6035e9406cea68f273098bdeb907").append($("#tableToolbartable3c4a907d6035e9406cea68f273098bdeb907"));$("#tableToolbarButtoned1f588baf01ce4d364b5d4aaf6a8281f491").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=402811817f19a849017f1b0124000a56&grid=table3c4a907d6035e9406cea68f273098bdeb907'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonf919056a7886d247ceebb791c787357bc298").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PARTY_MONEY&isbpm=Y&dbid=402811817f19a849017f1b04a6950a57', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'402811817f19a849017f1b3f7a080efc',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table3c4a907d6035e9406cea68f273098bdeb907').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtonf919056a7886d247ceebb791c787357bc298").hide();
$('#table3c4a907d6035e9406cea68f273098bdeb907workFlowSelect').bind('change',function(){
table3c4a907d6035e9406cea68f273098bdeb907initWorkFlow($(this).val());
});
function searchDatatable3c4a907d6035e9406cea68f273098bdeb907(){
 var para = serializeObjectForEform($("#searchformtable3c4a907d6035e9406cea68f273098bdeb907"));
 para.bpmState = $('#table3c4a907d6035e9406cea68f273098bdeb907workFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table3c4a907d6035e9406cea68f273098bdeb907KeyWordIn="";
table3c4a907d6035e9406cea68f273098bdeb907ParamIn=JSON.stringify(para);
	$('#table3c4a907d6035e9406cea68f273098bdeb907').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable3c4a907d6035e9406cea68f273098bdeb907").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable3c4a907d6035e9406cea68f273098bdeb907').bind('click',function(){
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
	content: $('#searchDialogtable3c4a907d6035e9406cea68f273098bdeb907'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable3c4a907d6035e9406cea68f273098bdeb907(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable3c4a907d6035e9406cea68f273098bdeb907")); searchDatatable3c4a907d6035e9406cea68f273098bdeb907(); layer.close(index); return false;
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
;});	 
