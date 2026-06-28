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

function redraw948e83e37f8b8008017f8be5a0d814aa(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e37f8b8008017f8be5a0d814aa").width();
		var win_height = $("#948e83e37f8b8008017f8be5a0d814aa").height();
		$('#948e83e37f8b8008017f8be5a0d814aa').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e37f8b8008017f8be5a0d814aa').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e37f8b8008017f8be5a0d814aa").width();
	setTimeout(function(){redraw948e83e37f8b8008017f8be5a0d814aa(win_width);},500);
});
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aKeyWordIn = "";    
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aParamIn = "";    
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aSelectRow = {     
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aLoadComplete = {     
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aBeforeEditCell = {        
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aOndblClickRow = {     
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aOnRightClickRow = {     
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aGridComplete = {     
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aOnCellSelect = {     
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
var table3bc6e958a9f76e4c1d799e6ce8dedf51f49aLoadBeforeSend = {        
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
function table3bc6e958a9f76e4c1d799e6ce8dedf51f49aReload(pid){
	var _isInvalid = true;
	$("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table3bc6e958a9f76e4c1d799e6ce8dedf51f49aPid = pid;
		}
		return false;
	}
	window.table3bc6e958a9f76e4c1d799e6ce8dedf51f49aPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table3bc6e958a9f76e4c1d799e6ce8dedf51f49aReload();
};
function table3bc6e958a9f76e4c1d799e6ce8dedf51f49aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table3bc6e958a9f76e4c1d799e6ce8dedf51f49aPid == 'undefined' || window.table3bc6e958a9f76e4c1d799e6ce8dedf51f49aPid!=null){
table3bc6e958a9f76e4c1d799e6ce8dedf51f49aReload(window.table3bc6e958a9f76e4c1d799e6ce8dedf51f49aPid);
}
}
var tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a = [];
var uniqueColtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a = [];
var uniqueColTitletable3bc6e958a9f76e4c1d799e6ce8dedf51f49a = [];
var defaultValuetable3bc6e958a9f76e4c1d799e6ce8dedf51f49a = {};
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '性别',hidden:false, name: 'YXTYTJ_SEX',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '出生年月', formatter:format, hidden:false, name: 'YXTYTJ_BIRTH',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '职务',hidden:false, name: 'YXTYTJ_ZW',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '申请入党时间', formatter:format, hidden:false, name: 'YXTYTJ_SQRDSJ',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '上年度团员教育评议结果',hidden:false, name: 'YXTYTJ_TYJYPYJE',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '参加工作时间', formatter:format, hidden:false, name: 'YXTYTJ_CJGZSJ',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '是否申报优秀团员标兵',hidden:false, name: 'YXTYTJ_SFSBYXTYBB',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '工作单位',hidden:false, name: 'YXTYTJ_GZDW',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '姓名',hidden:false, name: 'YXTYTJ_NAME',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '表单编号',hidden:false, name: 'YXTYTJ_BDBH',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '所在团支部',hidden:false, name: 'LEAGUEBRANCH',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '申请日期', formatter:format, hidden:false, name: 'YXTYTJ_SQRQ',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '申请人',hidden:false, name: 'YXTYTJ_SQR',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '申请单位',hidden:false, name: 'YXTYTJ_SQDW',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '主要事迹',hidden:false, name: 'YXTYTJ_ZYSJ',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '字段_24',hidden:false, name: 'EAGUEBRANCH_ID',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '字段_25',hidden:false, name: 'DATA_25',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '字段_26',hidden:false, name: 'DATA_26',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '字段_27',hidden:false, name: 'DATA_27',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
function table3bc6e958a9f76e4c1d799e6ce8dedf51f49ainitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton1fb34548313ff34ea99bb56a7802e1661a86").css('display','inline-block');
}else{
$("#tableToolbarButton1fb34548313ff34ea99bb56a7802e1661a86").hide();
}
table3bc6e958a9f76e4c1d799e6ce8dedf51f49asearchWF();
}
function table3bc6e958a9f76e4c1d799e6ce8dedf51f49asearchWF(){
   if ($("#searchformtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a").length>0){
      var para = serializeObject($("#searchformtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a"));
      para.bpmState = $('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49aworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49aworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e37f8b8008017f8be5a0d814aa/table3bc6e958a9f76e4c1d799e6ce8dedf51f49a/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable3bc6e958a9f76e4c1d799e6ce8dedf51f49a,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table3bc6e958a9f76e4c1d799e6ce8dedf51f49aSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table3bc6e958a9f76e4c1d799e6ce8dedf51f49aLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table3bc6e958a9f76e4c1d799e6ce8dedf51f49aOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table3bc6e958a9f76e4c1d799e6ce8dedf51f49aOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table3bc6e958a9f76e4c1d799e6ce8dedf51f49aGridComplete.exec();
				    setTimeout(function(){var height = $("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").closest('.ui-jqgrid-bdiv').height();
					$("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords img").css("width","120px");
                 }else{
					    $("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table3bc6e958a9f76e4c1d799e6ce8dedf51f49aBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table3bc6e958a9f76e4c1d799e6ce8dedf51f49aOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords").hide();
		   	    $("#Pagertable3bc6e958a9f76e4c1d799e6ce8dedf51f49a_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords").html() == null) {
						$("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").parent().append("<div class='no_data' id='table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table3bc6e958a9f76e4c1d799e6ce8dedf51f49anorecords").show();
					$("#Pagertable3bc6e958a9f76e4c1d799e6ce8dedf51f49a_left").css("display", "none");
				}
table3bc6e958a9f76e4c1d799e6ce8dedf51f49aLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable3bc6e958a9f76e4c1d799e6ce8dedf51f49a"
    });
table3bc6e958a9f76e4c1d799e6ce8dedf51f49aReload();
$("#t_table3bc6e958a9f76e4c1d799e6ce8dedf51f49a").append($("#tableToolbartable3bc6e958a9f76e4c1d799e6ce8dedf51f49a"));$("#tableToolbarButton399e4e01214ceb46a81984d89eecd738a4ed").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e37f8b8008017f8ba444390a03&grid=table3bc6e958a9f76e4c1d799e6ce8dedf51f49a'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton1fb34548313ff34ea99bb56a7802e1661a86").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_YXTYTJ&isbpm=Y&dbid=948e83e37f8b8008017f8ba5f0260a04', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e37f8b8008017f8be5a0d814aa',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49a').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton1fb34548313ff34ea99bb56a7802e1661a86").hide();
$('#table3bc6e958a9f76e4c1d799e6ce8dedf51f49aworkFlowSelect').bind('change',function(){
table3bc6e958a9f76e4c1d799e6ce8dedf51f49ainitWorkFlow($(this).val());
});
;});	 
