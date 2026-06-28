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
var Fid=pageParams.urlParam.id;
var partyName=pageParams.urlParam.partyName;
function redraw948e83e3939ae2490193a9ee26597363(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3939ae2490193a9ee26597363").width();
		var win_height = $("#948e83e3939ae2490193a9ee26597363").height();
		$('#948e83e3939ae2490193a9ee26597363').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3939ae2490193a9ee26597363').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3939ae2490193a9ee26597363").width();
	setTimeout(function(){redraw948e83e3939ae2490193a9ee26597363(win_width);},500);
});
var tablefa3a97b89919e940535a613057e358056abeKeyWordIn = "";    
var tablefa3a97b89919e940535a613057e358056abeParamIn = "";    
var tablefa3a97b89919e940535a613057e358056abeSelectRow = {     
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
var tablefa3a97b89919e940535a613057e358056abeLoadComplete = {     
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
var tablefa3a97b89919e940535a613057e358056abeBeforeEditCell = {        
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
var tablefa3a97b89919e940535a613057e358056abeOndblClickRow = {     
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
var tablefa3a97b89919e940535a613057e358056abeOnRightClickRow = {     
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
var tablefa3a97b89919e940535a613057e358056abeGridComplete = {     
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
var tablefa3a97b89919e940535a613057e358056abeOnCellSelect = {     
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
var tablefa3a97b89919e940535a613057e358056abeLoadBeforeSend = {        
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
function tablefa3a97b89919e940535a613057e358056abeReload(pid){
	var _isInvalid = true;
	$("#tablefa3a97b89919e940535a613057e358056abe").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablefa3a97b89919e940535a613057e358056abePid = pid;
		}
		return false;
	}
	window.tablefa3a97b89919e940535a613057e358056abePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.id.myId=pageParams.urlParam.id;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablefa3a97b89919e940535a613057e358056abe').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablefa3a97b89919e940535a613057e358056abeTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablefa3a97b89919e940535a613057e358056abePid == 'undefined' || window.tablefa3a97b89919e940535a613057e358056abePid!=null){
tablefa3a97b89919e940535a613057e358056abeReload(window.tablefa3a97b89919e940535a613057e358056abePid);
}
}
var tablecmtablefa3a97b89919e940535a613057e358056abe = [];
var uniqueColtablefa3a97b89919e940535a613057e358056abe = [];
var uniqueColTitletablefa3a97b89919e940535a613057e358056abe = [];
var defaultValuetablefa3a97b89919e940535a613057e358056abe = {};
tablecmtablefa3a97b89919e940535a613057e358056abe.push({ label: '姓名',hidden:true, name: 'XM',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({ label: '姓名',hidden:false, name: 'XMName',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '单位',hidden:false, name: 'DW',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '性 别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '出生年月', formatter:format, hidden:false, name: 'CSNY',align:'center',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '党组织名称',hidden:false, name: 'DZZMC',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '行政职务',hidden:false, name: 'XZZW',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '党内职务',hidden:false, name: 'DLZW',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '政治面貌',hidden:false, name: 'ZZMM',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '入党时间', formatter:format, hidden:false, name: 'RDSJ',align:'center',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '联系方式',hidden:false, name: 'LXFS',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '工作简历',hidden:false, name: 'GZJL',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '基层党组织 推荐意见',hidden:false, name: 'JCDZZTJYJ',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '纪检监察部意见',hidden:false, name: 'JJJCBYJ',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '外键',hidden:true, name: 'FK_COL',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '填表时间', formatter:format, hidden:false, name: 'TBSJ',align:'center',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablefa3a97b89919e940535a613057e358056abe.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
filterParams.id={};
filterParams.id.myId=pageParams.urlParam.id;
;$(document).ready(function(){ 

$("#tablefa3a97b89919e940535a613057e358056abe").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3939ae2490193a9ee26597363/tablefa3a97b89919e940535a613057e358056abe/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablefa3a97b89919e940535a613057e358056abe,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablefa3a97b89919e940535a613057e358056abeSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablefa3a97b89919e940535a613057e358056abeLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablefa3a97b89919e940535a613057e358056abeOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablefa3a97b89919e940535a613057e358056abeOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablefa3a97b89919e940535a613057e358056abeGridComplete.exec();
				    setTimeout(function(){var height = $("#tablefa3a97b89919e940535a613057e358056abe").closest('.ui-jqgrid-bdiv').height();
					$("#tablefa3a97b89919e940535a613057e358056abenorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablefa3a97b89919e940535a613057e358056abenorecords img").css("width","120px");
                 }else{
					    $("#tablefa3a97b89919e940535a613057e358056abenorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablefa3a97b89919e940535a613057e358056abeBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablefa3a97b89919e940535a613057e358056abeOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablefa3a97b89919e940535a613057e358056abenorecords").hide();
		   	    $("#Pagertablefa3a97b89919e940535a613057e358056abe_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablefa3a97b89919e940535a613057e358056abe").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablefa3a97b89919e940535a613057e358056abe").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablefa3a97b89919e940535a613057e358056abenorecords").html() == null) {
						$("#tablefa3a97b89919e940535a613057e358056abe").parent().append("<div class='no_data' id='tablefa3a97b89919e940535a613057e358056abenorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablefa3a97b89919e940535a613057e358056abenorecords").show();
					$("#Pagertablefa3a97b89919e940535a613057e358056abe_left").css("display", "none");
				}
tablefa3a97b89919e940535a613057e358056abeLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablefa3a97b89919e940535a613057e358056abe"
    });
tablefa3a97b89919e940535a613057e358056abeReload();
$("#t_tablefa3a97b89919e940535a613057e358056abe").append($("#tableToolbartablefa3a97b89919e940535a613057e358056abe"));$("#tableToolbarButton2ea248464368ca41db089af70c48ca29fb16").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3939ae2490193a9e2a1ac7172&grid=tablefa3a97b89919e940535a613057e358056abe',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton4a02557925ce8840154b4dd80eebca016c18").bind('click',function() {                                                                                       
	var ids = $('#tablefa3a97b89919e940535a613057e358056abe').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablefa3a97b89919e940535a613057e358056abe').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e3939ae2490193a9e2a1ac7172&id=' + rowData.ID+'&grid=tablefa3a97b89919e940535a613057e358056abe',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonf7722c3d7e36d64d383980f31f0eafe1dd2e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablefa3a97b89919e940535a613057e358056abe').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablefa3a97b89919e940535a613057e358056abe').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_JJWYZGSCB&isbpm=N&dbid=948e83e3939ae2490193a9de74b470f8', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3939ae2490193a9ee26597363',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablefa3a97b89919e940535a613057e358056abe').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
