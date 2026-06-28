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

function redraw2c908c1d8d58fbc3018d5938b7150a12(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8d58fbc3018d5938b7150a12").width();
		var win_height = $("#2c908c1d8d58fbc3018d5938b7150a12").height();
		$('#2c908c1d8d58fbc3018d5938b7150a12').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8d58fbc3018d5938b7150a12').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8d58fbc3018d5938b7150a12").width();
	setTimeout(function(){redraw2c908c1d8d58fbc3018d5938b7150a12(win_width);},500);
});
var table16575016801889486278bd04c137062c1b0eKeyWordIn = "";    
var table16575016801889486278bd04c137062c1b0eParamIn = "";    
var table16575016801889486278bd04c137062c1b0eSelectRow = {     
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
var table16575016801889486278bd04c137062c1b0eLoadComplete = {     
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
var table16575016801889486278bd04c137062c1b0eBeforeEditCell = {        
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
var table16575016801889486278bd04c137062c1b0eOndblClickRow = {     
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
var table16575016801889486278bd04c137062c1b0eOnRightClickRow = {     
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
var table16575016801889486278bd04c137062c1b0eGridComplete = {     
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
var table16575016801889486278bd04c137062c1b0eOnCellSelect = {     
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
var table16575016801889486278bd04c137062c1b0eLoadBeforeSend = {        
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
function table16575016801889486278bd04c137062c1b0eReload(pid){
	var _isInvalid = true;
	$("#table16575016801889486278bd04c137062c1b0e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table16575016801889486278bd04c137062c1b0ePid = pid;
		}
		return false;
	}
	window.table16575016801889486278bd04c137062c1b0ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.party_id.party_id=pageParams.urlParam.partyId;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table16575016801889486278bd04c137062c1b0e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table16575016801889486278bd04c137062c1b0eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table16575016801889486278bd04c137062c1b0ePid == 'undefined' || window.table16575016801889486278bd04c137062c1b0ePid!=null){
table16575016801889486278bd04c137062c1b0eReload(window.table16575016801889486278bd04c137062c1b0ePid);
}
}
var tablecmtable16575016801889486278bd04c137062c1b0e = [];
var uniqueColtable16575016801889486278bd04c137062c1b0e = [];
var uniqueColTitletable16575016801889486278bd04c137062c1b0e = [];
var defaultValuetable16575016801889486278bd04c137062c1b0e = {};
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '届次',hidden:false, name: 'SESSION_NAME',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({ label: '选举类型',hidden:true, name: 'SESSION_TYPE',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({ label: '选举类型',hidden:false, name: 'SESSION_TYPEName',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '届次',hidden:true, name: 'SESSION_ID',align:'right',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '党组织id',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '选举时间', formatter:format, hidden:false, name: 'SESSION_TIME',align:'center',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '委员姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '委员分工',hidden:false, name: 'USER_TYPE',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '性别',hidden:false, name: 'USER_SEX',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '出生日期',hidden:false, name: 'USER_ADD_TIME',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '职务',hidden:false, name: 'USER_POST',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '职称',hidden:false, name: 'USER_RANKS',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '参加工作时间',hidden:false, name: 'USER_WORK_DATE',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '入党时间',hidden:false, name: 'USER_PARTY_TIME',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '得票数',hidden:false, name: 'USER_NUMBER_VOTES',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable16575016801889486278bd04c137062c1b0e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable16575016801889486278bd04c137062c1b0e = []; 
searchNamestable16575016801889486278bd04c137062c1b0e.push('PARTY_NAME');
$('#keyWordtable16575016801889486278bd04c137062c1b0e').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtable16575016801889486278bd04c137062c1b0e(){
	var keyWord = $.trim($("#keyWordtable16575016801889486278bd04c137062c1b0e").val()); 
 if($('#keyWordtable16575016801889486278bd04c137062c1b0e').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable16575016801889486278bd04c137062c1b0e.length;i++){ 
		var name = searchNamestable16575016801889486278bd04c137062c1b0e[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table16575016801889486278bd04c137062c1b0eKeyWordIn=JSON.stringify(param);
table16575016801889486278bd04c137062c1b0eParamIn="";
	$('#table16575016801889486278bd04c137062c1b0e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable16575016801889486278bd04c137062c1b0e').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable16575016801889486278bd04c137062c1b0e();
	}
});
$('#keyWordBttable16575016801889486278bd04c137062c1b0e').bind('click', function() {
		searchDataKeyWordtable16575016801889486278bd04c137062c1b0e();
});
filterParams.party_id={};
filterParams.party_id.party_id=pageParams.urlParam.partyId;
;$(document).ready(function(){ 

$("#table16575016801889486278bd04c137062c1b0e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8d58fbc3018d5938b7150a12/table16575016801889486278bd04c137062c1b0e/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable16575016801889486278bd04c137062c1b0e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table16575016801889486278bd04c137062c1b0eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table16575016801889486278bd04c137062c1b0eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table16575016801889486278bd04c137062c1b0eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table16575016801889486278bd04c137062c1b0eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table16575016801889486278bd04c137062c1b0eGridComplete.exec();
				    setTimeout(function(){var height = $("#table16575016801889486278bd04c137062c1b0e").closest('.ui-jqgrid-bdiv').height();
					$("#table16575016801889486278bd04c137062c1b0enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table16575016801889486278bd04c137062c1b0enorecords img").css("width","120px");
                 }else{
					    $("#table16575016801889486278bd04c137062c1b0enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table16575016801889486278bd04c137062c1b0eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table16575016801889486278bd04c137062c1b0eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table16575016801889486278bd04c137062c1b0enorecords").hide();
		   	    $("#Pagertable16575016801889486278bd04c137062c1b0e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table16575016801889486278bd04c137062c1b0e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table16575016801889486278bd04c137062c1b0e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table16575016801889486278bd04c137062c1b0enorecords").html() == null) {
						$("#table16575016801889486278bd04c137062c1b0e").parent().append("<div class='no_data' id='table16575016801889486278bd04c137062c1b0enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table16575016801889486278bd04c137062c1b0enorecords").show();
					$("#Pagertable16575016801889486278bd04c137062c1b0e_left").css("display", "none");
				}
table16575016801889486278bd04c137062c1b0eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable16575016801889486278bd04c137062c1b0e"
    });
table16575016801889486278bd04c137062c1b0eReload();
$("#t_table16575016801889486278bd04c137062c1b0e").append($("#tableToolbartable16575016801889486278bd04c137062c1b0e"));$("#tableToolbarButton7c5efc4581ce44494f89be257ffa3bd5fbc3").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8d5d5e03018d5e0116bf17d8&grid=table16575016801889486278bd04c137062c1b0e',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton0e8f6a44bbef6c4472e8de101ac5996b5536").bind('click',function() {                                                                                       
	var ids = $('#table16575016801889486278bd04c137062c1b0e').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table16575016801889486278bd04c137062c1b0e').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8d5d5e03018d5e0116bf17d8&id=' + rowData.ID+'&grid=table16575016801889486278bd04c137062c1b0e',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton34b572771c88be4266c84dfc667fae34e554").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table16575016801889486278bd04c137062c1b0e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table16575016801889486278bd04c137062c1b0e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_SESSION_WYFG&isbpm=N&dbid=2c908c1d8d5d5e03018d5df57d2f1267', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8d58fbc3018d5938b7150a12',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table16575016801889486278bd04c137062c1b0e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton41f6f5a3a8826446008a8e5e44a08e3b1502").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'dzzwyfg', callBackFunc: function () {                           	
		$('#table16575016801889486278bd04c137062c1b0e').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);

$('#tableToolbarButton51968597749ed848d859f123ae4cab84005a').bind('click',function() {                           
	layer.open({                         
	    type : 2,                        
	    area : ['400px', '300px'],       
	    title: '导出',                   
	    skin: 'bs-modal',                
	    maxmin: false,                   
	    btn: ['导出', '取消'],            
	    content: 'avicit/platform6/eform/bmpsformdatatool/exportFileType.jsp',       
	    yes:function(index, layero){                                                 
	        var iframeWin = layero.find('iframe')[0].contentWindow;                  
	        var fileType = iframeWin.$("input[name='exportType']:checked").val();  
	        var layout = iframeWin.$('#direction :selected').val();                  
	        var showColModels = new Array();                                         
	        var blockFields = new Array();                                           
	        var colModels =$('#table16575016801889486278bd04c137062c1b0e').jqGrid('getGridParam','colModel');   
	        for(var i = 0; i < colModels.length; i++){                               
	            if(colModels[i].hidden == false && colModels[i].name != 'cb'){       
	                showColModels.push(colModels[i]);                                
	            }else{                                                               
	                blockFields.push(colModels[i].name);                             
	            }                                                                    
	        }                                                                        
	        var dataGridFields = JSON.stringify(colModels);                          
	        expSearchParams = {};                                                    
	        expSearchParams.fileType = fileType;                                     
	        expSearchParams.dataGridFields = dataGridFields;                         
	        expSearchParams.keyWord = table16575016801889486278bd04c137062c1b0eKeyWordIn;                          
	        expSearchParams.param = table16575016801889486278bd04c137062c1b0eParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='党组织委员分工';                             
	        expSearchParams.viewid='2c908c1d8d58fbc3018d5938b7150a12';                                   
	        expSearchParams.tableid='table16575016801889486278bd04c137062c1b0e';                                 
	        expSearchParams.isbpm='N';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/V1'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
function searchDatatable16575016801889486278bd04c137062c1b0e(){
 var para = serializeObjectForEform($("#searchformtable16575016801889486278bd04c137062c1b0e"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table16575016801889486278bd04c137062c1b0eKeyWordIn="";
table16575016801889486278bd04c137062c1b0eParamIn=JSON.stringify(para);
	$('#table16575016801889486278bd04c137062c1b0e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable16575016801889486278bd04c137062c1b0e").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable16575016801889486278bd04c137062c1b0e').bind('click',function(){
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
	content: $('#searchDialogtable16575016801889486278bd04c137062c1b0e'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable16575016801889486278bd04c137062c1b0e(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable16575016801889486278bd04c137062c1b0e")); searchDatatable16575016801889486278bd04c137062c1b0e(); layer.close(index); return false;
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
$('#SESSION_TIME_START_button').click(function(e){
			$('#SESSION_TIME_START').datetimepicker('show');
			$('#SESSION_TIME_START').datetimepicker().trigger('click');
}); 
$('#SESSION_TIME_END_button').click(function(e){
			$('#SESSION_TIME_END').datetimepicker('show');
			$('#SESSION_TIME_END').datetimepicker().trigger('click');
}); 
;});	 
