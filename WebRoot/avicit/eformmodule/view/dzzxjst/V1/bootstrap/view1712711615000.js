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

function redraw948e83e38bdb834a018bfb6cdc7432c0(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38bdb834a018bfb6cdc7432c0").width();
		var win_height = $("#948e83e38bdb834a018bfb6cdc7432c0").height();
		$('#948e83e38bdb834a018bfb6cdc7432c0').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38bdb834a018bfb6cdc7432c0').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38bdb834a018bfb6cdc7432c0").width();
	setTimeout(function(){redraw948e83e38bdb834a018bfb6cdc7432c0(win_width);},500);
});
var tabledd45485d24095141e0788bd7f0fa168ddb1cKeyWordIn = "";    
var tabledd45485d24095141e0788bd7f0fa168ddb1cParamIn = "";    
var tabledd45485d24095141e0788bd7f0fa168ddb1cSelectRow = {     
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cLoadComplete = {     
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cBeforeEditCell = {        
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cOndblClickRow = {     
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cOnRightClickRow = {     
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cGridComplete = {     
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cOnCellSelect = {     
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
var tabledd45485d24095141e0788bd7f0fa168ddb1cLoadBeforeSend = {        
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
function tabledd45485d24095141e0788bd7f0fa168ddb1cReload(pid){
	var _isInvalid = true;
	$("#tabledd45485d24095141e0788bd7f0fa168ddb1c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tabledd45485d24095141e0788bd7f0fa168ddb1cPid = pid;
		}
		return false;
	}
	window.tabledd45485d24095141e0788bd7f0fa168ddb1cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tabledd45485d24095141e0788bd7f0fa168ddb1cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tabledd45485d24095141e0788bd7f0fa168ddb1cPid == 'undefined' || window.tabledd45485d24095141e0788bd7f0fa168ddb1cPid!=null){
tabledd45485d24095141e0788bd7f0fa168ddb1cReload(window.tabledd45485d24095141e0788bd7f0fa168ddb1cPid);
}
}
var tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c = [];
var uniqueColtabledd45485d24095141e0788bd7f0fa168ddb1c = [];
var uniqueColTitletabledd45485d24095141e0788bd7f0fa168ddb1c = [];
var defaultValuetabledd45485d24095141e0788bd7f0fa168ddb1c = {};
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '上届换届时间',hidden:false, name: 'DUE_DATA_START',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '报送预备人选请示',hidden:false, name: 'DUE_PARTY_PLACE_DATA_PUSH',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '党委会审批；选举结果届次',hidden:false, name: 'PARTY_END',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '报送召开党员大会的请示',hidden:false, name: 'DUE_PARTY_DATA_PUSH',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '召开党员大会',hidden:false, name: 'PARTY_DATA',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '换届提醒时间',hidden:false, name: 'DUE_DATA_PUSH',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '党委会审批;预备人选届次',hidden:false, name: 'PARTY_POSEN',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'CREATED_DEPT',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '下届到届时间',hidden:false, name: 'DUE_DATA_END',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: '类型',hidden:false, name: 'TYPE',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'CREATED_BY',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'LAST_UPDATED_BY',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'CREATION_DATE', formatter:format, hidden:true, name: 'CREATION_DATE',align:'right',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'LAST_UPDATE_DATE', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'right',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'VERSION',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'ORG_IDENTITY',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c.push({label: 'LAST_UPDATE_IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
	var searchNamestabledd45485d24095141e0788bd7f0fa168ddb1c = []; 
searchNamestabledd45485d24095141e0788bd7f0fa168ddb1c.push('TYPE');
$('#keyWordtabledd45485d24095141e0788bd7f0fa168ddb1c').attr('placeholder', '请输入类型查询');
function searchDataKeyWordtabledd45485d24095141e0788bd7f0fa168ddb1c(){
	var keyWord = $.trim($("#keyWordtabledd45485d24095141e0788bd7f0fa168ddb1c").val()); 
 if($('#keyWordtabledd45485d24095141e0788bd7f0fa168ddb1c').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestabledd45485d24095141e0788bd7f0fa168ddb1c.length;i++){ 
		var name = searchNamestabledd45485d24095141e0788bd7f0fa168ddb1c[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tabledd45485d24095141e0788bd7f0fa168ddb1cKeyWordIn=JSON.stringify(param);
tabledd45485d24095141e0788bd7f0fa168ddb1cParamIn="";
	$('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtabledd45485d24095141e0788bd7f0fa168ddb1c').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtabledd45485d24095141e0788bd7f0fa168ddb1c();
	}
});
$('#keyWordBttabledd45485d24095141e0788bd7f0fa168ddb1c').bind('click', function() {
		searchDataKeyWordtabledd45485d24095141e0788bd7f0fa168ddb1c();
});
;$(document).ready(function(){ 

$("#tabledd45485d24095141e0788bd7f0fa168ddb1c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38bdb834a018bfb6cdc7432c0/tabledd45485d24095141e0788bd7f0fa168ddb1c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtabledd45485d24095141e0788bd7f0fa168ddb1c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tabledd45485d24095141e0788bd7f0fa168ddb1cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tabledd45485d24095141e0788bd7f0fa168ddb1cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tabledd45485d24095141e0788bd7f0fa168ddb1cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tabledd45485d24095141e0788bd7f0fa168ddb1cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tabledd45485d24095141e0788bd7f0fa168ddb1cGridComplete.exec();
				    setTimeout(function(){var height = $("#tabledd45485d24095141e0788bd7f0fa168ddb1c").closest('.ui-jqgrid-bdiv').height();
					$("#tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords img").css("width","120px");
                 }else{
					    $("#tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tabledd45485d24095141e0788bd7f0fa168ddb1cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tabledd45485d24095141e0788bd7f0fa168ddb1cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords").hide();
		   	    $("#Pagertabledd45485d24095141e0788bd7f0fa168ddb1c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tabledd45485d24095141e0788bd7f0fa168ddb1c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tabledd45485d24095141e0788bd7f0fa168ddb1c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords").html() == null) {
						$("#tabledd45485d24095141e0788bd7f0fa168ddb1c").parent().append("<div class='no_data' id='tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tabledd45485d24095141e0788bd7f0fa168ddb1cnorecords").show();
					$("#Pagertabledd45485d24095141e0788bd7f0fa168ddb1c_left").css("display", "none");
				}
tabledd45485d24095141e0788bd7f0fa168ddb1cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertabledd45485d24095141e0788bd7f0fa168ddb1c"
    });
tabledd45485d24095141e0788bd7f0fa168ddb1cReload();
$("#t_tabledd45485d24095141e0788bd7f0fa168ddb1c").append($("#tableToolbartabledd45485d24095141e0788bd7f0fa168ddb1c"));$("#tableToolbarButton618447476399ab4594b85c360e5e9b073b66").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38bdb834a018bfb6c2f4732ac&grid=tabledd45485d24095141e0788bd7f0fa168ddb1c',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonc71997f5b13fd644b34b1b095150a59a30c4").bind('click',function() {                                                                                       
	var ids = $('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38bdb834a018bfb6c2f4732ac&id=' + rowData.ID+'&grid=tabledd45485d24095141e0788bd7f0fa168ddb1c',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton520bc1f1715e524d6b99f210ec7df5aa08f3").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_MEBER&isbpm=N&dbid=948e83e38bdb834a018bfb68fdae3256', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38bdb834a018bfb6cdc7432c0',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tabledd45485d24095141e0788bd7f0fa168ddb1c').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton0306636027e1f74cc45b93489f5e60a1faa0").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'dzzxj', callBackFunc: function () {                           	
		$('#tabledd45485d24095141e0788bd7f0fa168ddb1c').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
;});	 
