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

function redraw2c908c528e79da22018e7d7a910b27de(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528e79da22018e7d7a910b27de").width();
		var win_height = $("#2c908c528e79da22018e7d7a910b27de").height();
		$('#2c908c528e79da22018e7d7a910b27de').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528e79da22018e7d7a910b27de').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528e79da22018e7d7a910b27de").width();
	setTimeout(function(){redraw2c908c528e79da22018e7d7a910b27de(win_width);},500);
});
var table02ce457f30c6bf4a9c59ee2efab2036a258dKeyWordIn = "";    
var table02ce457f30c6bf4a9c59ee2efab2036a258dParamIn = "";    
var table02ce457f30c6bf4a9c59ee2efab2036a258dSelectRow = {     
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dLoadComplete = {     
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dBeforeEditCell = {        
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dOndblClickRow = {     
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dOnRightClickRow = {     
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dGridComplete = {     
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dOnCellSelect = {     
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
var table02ce457f30c6bf4a9c59ee2efab2036a258dLoadBeforeSend = {        
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
function table02ce457f30c6bf4a9c59ee2efab2036a258dReload(pid){
	var _isInvalid = true;
	$("#table02ce457f30c6bf4a9c59ee2efab2036a258d").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table02ce457f30c6bf4a9c59ee2efab2036a258dPid = pid;
		}
		return false;
	}
	window.table02ce457f30c6bf4a9c59ee2efab2036a258dPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table02ce457f30c6bf4a9c59ee2efab2036a258dReload();
};
function table02ce457f30c6bf4a9c59ee2efab2036a258dTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table02ce457f30c6bf4a9c59ee2efab2036a258dPid == 'undefined' || window.table02ce457f30c6bf4a9c59ee2efab2036a258dPid!=null){
table02ce457f30c6bf4a9c59ee2efab2036a258dReload(window.table02ce457f30c6bf4a9c59ee2efab2036a258dPid);
}
}
var tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d = [];
var uniqueColtable02ce457f30c6bf4a9c59ee2efab2036a258d = [];
var uniqueColTitletable02ce457f30c6bf4a9c59ee2efab2036a258d = [];
var defaultValuetable02ce457f30c6bf4a9c59ee2efab2036a258d = {};
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '使用单位名称',hidden:false, name: 'DRAF_UNIT',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '企业文化推进员姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '管理归口单位',hidden:false, name: 'MANAGER_UNIT',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '载体类型',hidden:false, name: 'ZT_TYPE',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({ label: '应用VI要素',hidden:true, name: 'YS',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({ label: '应用VI要素',hidden:false, name: 'YSName',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '使用周期',hidden:false, name: 'SYZQ',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '文化载体审核领导',hidden:false, name: 'WHZTSHLD',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '规格型号',hidden:false, name: 'GG_MODE',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '数量',hidden:false, name: 'SUM',align:'right',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '备注',hidden:false, name: 'BZ',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '文字及内容描述',hidden:false, name: 'WZJMS',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '安装地点',hidden:false, name: 'AZ_ADDRESS',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '基层单位文化载体类型',hidden:false, name: 'JCDW_ZT_TYPE',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '公司文化载体类型',hidden:false, name: 'WH_ZT_TYPE',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '推进员id',hidden:true, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable02ce457f30c6bf4a9c59ee2efab2036a258d = []; 
searchNamestable02ce457f30c6bf4a9c59ee2efab2036a258d.push('AUTO_CODE');
$('#keyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d').attr('placeholder', '请输入编号查询');
function searchDataKeyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d(){
	var keyWord = $.trim($("#keyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d").val()); 
 if($('#keyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable02ce457f30c6bf4a9c59ee2efab2036a258d.length;i++){ 
		var name = searchNamestable02ce457f30c6bf4a9c59ee2efab2036a258d[i]; 
		param[name] = keyWord; 
	} 
if ($("#table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect").length>0){param.bpmState=$('#table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table02ce457f30c6bf4a9c59ee2efab2036a258dKeyWordIn=JSON.stringify(param);
table02ce457f30c6bf4a9c59ee2efab2036a258dParamIn="";
	$('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d();
	}
});
$('#keyWordBttable02ce457f30c6bf4a9c59ee2efab2036a258d').bind('click', function() {
		searchDataKeyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d();
});
function table02ce457f30c6bf4a9c59ee2efab2036a258dinitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton6f2958f1383f59472f887d5a0b94375c9242").css('display','inline-block');
}else{
$("#tableToolbarButton6f2958f1383f59472f887d5a0b94375c9242").hide();
}
table02ce457f30c6bf4a9c59ee2efab2036a258dsearchWF();
}
function table02ce457f30c6bf4a9c59ee2efab2036a258dsearchWF(){
   if ($("#searchformtable02ce457f30c6bf4a9c59ee2efab2036a258d").length>0){
      var para = serializeObject($("#searchformtable02ce457f30c6bf4a9c59ee2efab2036a258d"));
      para.bpmState = $('#table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table02ce457f30c6bf4a9c59ee2efab2036a258d").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528e79da22018e7d7a910b27de/table02ce457f30c6bf4a9c59ee2efab2036a258d/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable02ce457f30c6bf4a9c59ee2efab2036a258d,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table02ce457f30c6bf4a9c59ee2efab2036a258dSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table02ce457f30c6bf4a9c59ee2efab2036a258dLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table02ce457f30c6bf4a9c59ee2efab2036a258dOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table02ce457f30c6bf4a9c59ee2efab2036a258dOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table02ce457f30c6bf4a9c59ee2efab2036a258dGridComplete.exec();
				    setTimeout(function(){var height = $("#table02ce457f30c6bf4a9c59ee2efab2036a258d").closest('.ui-jqgrid-bdiv').height();
					$("#table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords img").css("width","120px");
                 }else{
					    $("#table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table02ce457f30c6bf4a9c59ee2efab2036a258dBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table02ce457f30c6bf4a9c59ee2efab2036a258dOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords").hide();
		   	    $("#Pagertable02ce457f30c6bf4a9c59ee2efab2036a258d_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table02ce457f30c6bf4a9c59ee2efab2036a258d").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table02ce457f30c6bf4a9c59ee2efab2036a258d").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords").html() == null) {
						$("#table02ce457f30c6bf4a9c59ee2efab2036a258d").parent().append("<div class='no_data' id='table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table02ce457f30c6bf4a9c59ee2efab2036a258dnorecords").show();
					$("#Pagertable02ce457f30c6bf4a9c59ee2efab2036a258d_left").css("display", "none");
				}
table02ce457f30c6bf4a9c59ee2efab2036a258dLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable02ce457f30c6bf4a9c59ee2efab2036a258d"
    });
table02ce457f30c6bf4a9c59ee2efab2036a258dReload();
$("#t_table02ce457f30c6bf4a9c59ee2efab2036a258d").append($("#tableToolbartable02ce457f30c6bf4a9c59ee2efab2036a258d"));$("#tableToolbarButton785a3941d9e88e4673188fa009345052113c").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528e79da22018e79e421680989&grid=table02ce457f30c6bf4a9c59ee2efab2036a258d'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton6f2958f1383f59472f887d5a0b94375c9242").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_WHZTXX&isbpm=Y&dbid=2c908c528e79da22018e79e87f290990', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c528e79da22018e7d7a910b27de',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table02ce457f30c6bf4a9c59ee2efab2036a258d').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton6f2958f1383f59472f887d5a0b94375c9242").hide();
$("#tableToolbarButtonbe924549e6eb5d40c57ba900da42a0b45d45").bind('click',function() {                                                                                       
	var ids = $('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('getGridParam', 'selarrrow');                            
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
	var rowData = $('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('getRowData', ids[0]);		
	var id = rowData.ID;
	var flag = '1';
	$.ajax({																		
		url: 'platform/eform/bpmsCRUDClient/checkFlowIsCreate.json', 
		data: {id : id},								
		async: false,																	
		type: 'post',																	
		dataType: 'json',																
		success: function(r) {															
			flag = r.flag;
		}																				
	}); 																				
	if (flag == '2'){
		layer.alert('该条数据已发起流程！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}else{
		var processDef = new FlowListEditorBySec('whztxx');
		FlowListEditorBySec.prototype.doStart = function (pdId) {
			$.ajax({
				url: 'platform/eform/bpmsCRUDClient/startflowBylist.json',
				data: { formInfoId: '2c908c528e79da22018e79e421680989', comId: id, defineId: pdId },
				async: false,
				type: 'post',
				dataType: 'json',
				success: function (r) {
					if (r.flag === "sucess") {
						flowUtils.detail(r.processInstanceId, 0);
						table02ce457f30c6bf4a9c59ee2efab2036a258dReload();
					} else {
						layer.alert(r.error, {
							icon: 7,
							area: ['400px', ''],
							closeBtn: 0
						});
					}
				}
			});
		}
		processDef.start();
	}
}
);
function searchDatatable02ce457f30c6bf4a9c59ee2efab2036a258d(){
 var para = serializeObjectForEform($("#searchformtable02ce457f30c6bf4a9c59ee2efab2036a258d"));
 para.bpmState = $('#table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table02ce457f30c6bf4a9c59ee2efab2036a258dKeyWordIn="";
table02ce457f30c6bf4a9c59ee2efab2036a258dParamIn=JSON.stringify(para);
	$('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable02ce457f30c6bf4a9c59ee2efab2036a258d").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable02ce457f30c6bf4a9c59ee2efab2036a258d').bind('click',function(){
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
	content: $('#searchDialogtable02ce457f30c6bf4a9c59ee2efab2036a258d'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable02ce457f30c6bf4a9c59ee2efab2036a258d(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable02ce457f30c6bf4a9c59ee2efab2036a258d")); searchDatatable02ce457f30c6bf4a9c59ee2efab2036a258d(); layer.close(index); return false;
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
$('#table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect').bind('change',function(){
table02ce457f30c6bf4a9c59ee2efab2036a258dinitWorkFlow($(this).val());
});
;});	 
