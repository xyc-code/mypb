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

function redraw948e83e37f9bac42017fab39702b446e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e37f9bac42017fab39702b446e").width();
		var win_height = $("#948e83e37f9bac42017fab39702b446e").height();
		$('#948e83e37f9bac42017fab39702b446e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e37f9bac42017fab39702b446e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e37f9bac42017fab39702b446e").width();
	setTimeout(function(){redraw948e83e37f9bac42017fab39702b446e(win_width);},500);
});
var table6f65436626355c4b3ec8c4816a1dc92c23daKeyWordIn = "";    
var table6f65436626355c4b3ec8c4816a1dc92c23daParamIn = "";    
var table6f65436626355c4b3ec8c4816a1dc92c23daSelectRow = {     
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
var table6f65436626355c4b3ec8c4816a1dc92c23daLoadComplete = {     
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
var table6f65436626355c4b3ec8c4816a1dc92c23daBeforeEditCell = {        
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
var table6f65436626355c4b3ec8c4816a1dc92c23daOndblClickRow = {     
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
var table6f65436626355c4b3ec8c4816a1dc92c23daOnRightClickRow = {     
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
var table6f65436626355c4b3ec8c4816a1dc92c23daGridComplete = {     
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
var table6f65436626355c4b3ec8c4816a1dc92c23daOnCellSelect = {     
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
var table6f65436626355c4b3ec8c4816a1dc92c23daLoadBeforeSend = {        
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
function table6f65436626355c4b3ec8c4816a1dc92c23daReload(pid){
	var _isInvalid = true;
	$("#table6f65436626355c4b3ec8c4816a1dc92c23da").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6f65436626355c4b3ec8c4816a1dc92c23daPid = pid;
		}
		return false;
	}
	window.table6f65436626355c4b3ec8c4816a1dc92c23daPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6f65436626355c4b3ec8c4816a1dc92c23da').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table6f65436626355c4b3ec8c4816a1dc92c23daTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6f65436626355c4b3ec8c4816a1dc92c23daPid == 'undefined' || window.table6f65436626355c4b3ec8c4816a1dc92c23daPid!=null){
table6f65436626355c4b3ec8c4816a1dc92c23daReload(window.table6f65436626355c4b3ec8c4816a1dc92c23daPid);
}
}
var tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da = [];
var uniqueColtable6f65436626355c4b3ec8c4816a1dc92c23da = [];
var uniqueColTitletable6f65436626355c4b3ec8c4816a1dc92c23da = [];
var defaultValuetable6f65436626355c4b3ec8c4816a1dc92c23da = {};
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '申请部门',hidden:false, name: 'YXTGBTJ_SQBM',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '姓名',hidden:false, name: 'YXTGBTJ_NAME',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '性别',hidden:false, name: 'YXTGBTJ_SEX',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '出生年月', formatter:format, hidden:false, name: 'YXTGBTJ_BIRTH',align:'center',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '表单编号',hidden:false, name: 'YXTGBTJ_BDBH',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '职务',hidden:false, name: 'YXTGBTJ_ZW',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '申请入党时间', formatter:format, hidden:false, name: 'YXTGBTJ_SQRDSJ',align:'center',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '申请人',hidden:false, name: 'YXTGBTJ_SQR',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '所在部门',hidden:false, name: 'YXTGBTJ_BM',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '何时任职团干部', formatter:format, hidden:false, name: 'YXTGBTJ_HSRZTGB',align:'center',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '字段_1',hidden:false, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '政治面貌',hidden:false, name: 'YXTGBTJ_ZZMM',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '主要事迹',hidden:false, name: 'YXTGBTJ_ZYSJ',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '是否申报优秀团干部标兵',hidden:false, name: 'YXTGBTJ_SFSBBB',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '申请日期',hidden:false, name: 'YXTGBTJ_SQRQ',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable6f65436626355c4b3ec8c4816a1dc92c23da = []; 
$('#keyWordtable6f65436626355c4b3ec8c4816a1dc92c23da').attr('placeholder', '请输查询');
function searchDataKeyWordtable6f65436626355c4b3ec8c4816a1dc92c23da(){
	var keyWord = $.trim($("#keyWordtable6f65436626355c4b3ec8c4816a1dc92c23da").val()); 
 if($('#keyWordtable6f65436626355c4b3ec8c4816a1dc92c23da').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable6f65436626355c4b3ec8c4816a1dc92c23da.length;i++){ 
		var name = searchNamestable6f65436626355c4b3ec8c4816a1dc92c23da[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table6f65436626355c4b3ec8c4816a1dc92c23daKeyWordIn=JSON.stringify(param);
table6f65436626355c4b3ec8c4816a1dc92c23daParamIn="";
	$('#table6f65436626355c4b3ec8c4816a1dc92c23da').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable6f65436626355c4b3ec8c4816a1dc92c23da').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable6f65436626355c4b3ec8c4816a1dc92c23da();
	}
});
$('#keyWordBttable6f65436626355c4b3ec8c4816a1dc92c23da').bind('click', function() {
		searchDataKeyWordtable6f65436626355c4b3ec8c4816a1dc92c23da();
});
;$(document).ready(function(){ 

$("#table6f65436626355c4b3ec8c4816a1dc92c23da").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e37f9bac42017fab39702b446e/table6f65436626355c4b3ec8c4816a1dc92c23da/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6f65436626355c4b3ec8c4816a1dc92c23da,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6f65436626355c4b3ec8c4816a1dc92c23daSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6f65436626355c4b3ec8c4816a1dc92c23daLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6f65436626355c4b3ec8c4816a1dc92c23daOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6f65436626355c4b3ec8c4816a1dc92c23daOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6f65436626355c4b3ec8c4816a1dc92c23daGridComplete.exec();
				    setTimeout(function(){var height = $("#table6f65436626355c4b3ec8c4816a1dc92c23da").closest('.ui-jqgrid-bdiv').height();
					$("#table6f65436626355c4b3ec8c4816a1dc92c23danorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6f65436626355c4b3ec8c4816a1dc92c23danorecords img").css("width","120px");
                 }else{
					    $("#table6f65436626355c4b3ec8c4816a1dc92c23danorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6f65436626355c4b3ec8c4816a1dc92c23daBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6f65436626355c4b3ec8c4816a1dc92c23daOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6f65436626355c4b3ec8c4816a1dc92c23danorecords").hide();
		   	    $("#Pagertable6f65436626355c4b3ec8c4816a1dc92c23da_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6f65436626355c4b3ec8c4816a1dc92c23da").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6f65436626355c4b3ec8c4816a1dc92c23da").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6f65436626355c4b3ec8c4816a1dc92c23danorecords").html() == null) {
						$("#table6f65436626355c4b3ec8c4816a1dc92c23da").parent().append("<div class='no_data' id='table6f65436626355c4b3ec8c4816a1dc92c23danorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6f65436626355c4b3ec8c4816a1dc92c23danorecords").show();
					$("#Pagertable6f65436626355c4b3ec8c4816a1dc92c23da_left").css("display", "none");
				}
table6f65436626355c4b3ec8c4816a1dc92c23daLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6f65436626355c4b3ec8c4816a1dc92c23da"
    });
table6f65436626355c4b3ec8c4816a1dc92c23daReload();
$("#t_table6f65436626355c4b3ec8c4816a1dc92c23da").append($("#tableToolbartable6f65436626355c4b3ec8c4816a1dc92c23da"));$("#tableToolbarButton85ef612aa6e36a45511b677c2841f908619b").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e37f9bac42017fab28f421420e&grid=table6f65436626355c4b3ec8c4816a1dc92c23da'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButtonbd817d5278f5364fd0f8b0bd3a1d1c722aa6").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6f65436626355c4b3ec8c4816a1dc92c23da').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6f65436626355c4b3ec8c4816a1dc92c23da').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_YXTGBTJ&isbpm=N&dbid=948e83e37f9bac42017fab2b3eb14247', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e37f9bac42017fab39702b446e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6f65436626355c4b3ec8c4816a1dc92c23da').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
