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

function redraw948e83e38ecc57ed018ecfd84b6827ac(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38ecc57ed018ecfd84b6827ac").width();
		var win_height = $("#948e83e38ecc57ed018ecfd84b6827ac").height();
		$('#948e83e38ecc57ed018ecfd84b6827ac').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38ecc57ed018ecfd84b6827ac').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38ecc57ed018ecfd84b6827ac").width();
	setTimeout(function(){redraw948e83e38ecc57ed018ecfd84b6827ac(win_width);},500);
});
var tablefb20ab84ea46c146b9eadb523d82e033482aKeyWordIn = "";    
var tablefb20ab84ea46c146b9eadb523d82e033482aParamIn = "";    
var tablefb20ab84ea46c146b9eadb523d82e033482aSelectRow = {     
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
var tablefb20ab84ea46c146b9eadb523d82e033482aLoadComplete = {     
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
var tablefb20ab84ea46c146b9eadb523d82e033482aBeforeEditCell = {        
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
var tablefb20ab84ea46c146b9eadb523d82e033482aOndblClickRow = {     
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
var tablefb20ab84ea46c146b9eadb523d82e033482aOnRightClickRow = {     
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
var tablefb20ab84ea46c146b9eadb523d82e033482aGridComplete = {     
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
var tablefb20ab84ea46c146b9eadb523d82e033482aOnCellSelect = {     
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
var tablefb20ab84ea46c146b9eadb523d82e033482aLoadBeforeSend = {        
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
function tablefb20ab84ea46c146b9eadb523d82e033482aReload(pid){
	var _isInvalid = true;
	$("#tablefb20ab84ea46c146b9eadb523d82e033482a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablefb20ab84ea46c146b9eadb523d82e033482aPid = pid;
		}
		return false;
	}
	window.tablefb20ab84ea46c146b9eadb523d82e033482aPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablefb20ab84ea46c146b9eadb523d82e033482aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablefb20ab84ea46c146b9eadb523d82e033482aPid == 'undefined' || window.tablefb20ab84ea46c146b9eadb523d82e033482aPid!=null){
tablefb20ab84ea46c146b9eadb523d82e033482aReload(window.tablefb20ab84ea46c146b9eadb523d82e033482aPid);
}
}
var tablecmtablefb20ab84ea46c146b9eadb523d82e033482a = [];
var uniqueColtablefb20ab84ea46c146b9eadb523d82e033482a = [];
var uniqueColTitletablefb20ab84ea46c146b9eadb523d82e033482a = [];
var defaultValuetablefb20ab84ea46c146b9eadb523d82e033482a = {};
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '年度',hidden:false, name: 'CUR_YEAR',align:'left',  width: '50px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '视频名称',hidden:false, name: 'VIDEO_NAME',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '视频封面', formatter:function(value){return '<img src="data:image/jpg;base64,'+value+'" style="max-width:300px;max-height:300px"/>';}, hidden:false, name: 'VIDEO_FM',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({ label: '视频分类',hidden:true, name: 'VIDEO_TYPE',align:'left',  width: '80px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({ label: '视频分类',hidden:false, name: 'VIDEO_TYPEName',align:'left',  width: '80px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '视频标签',hidden:false, name: 'VIDEO_LEAB',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '自定义标签',hidden:true, name: 'CUSTOM_LEAB',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '自定义标签code',hidden:true, name: 'CUSTOM_LEAB_CODE',align:'left',  width: '150px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({ label: '置顶',hidden:true, name: 'IS_TOP',align:'left',  width: '50px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({ label: '置顶',hidden:false, name: 'IS_TOPName',align:'left',  width: '50px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({ label: '下载',hidden:true, name: 'IS_DOWNLOAD',align:'left',  width: '50px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({ label: '下载',hidden:false, name: 'IS_DOWNLOADName',align:'left',  width: '50px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '上传人',hidden:false, name: 'DRAF_USER',align:'left',  width: '50px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '上传时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '100px'});
tablecmtablefb20ab84ea46c146b9eadb523d82e033482a.push({label: '上传单位',hidden:false, name: 'DRAF_DEPT',align:'left',  width: '80px'});
	var searchNamestablefb20ab84ea46c146b9eadb523d82e033482a = []; 
searchNamestablefb20ab84ea46c146b9eadb523d82e033482a.push('VIDEO_NAME');
$('#keyWordtablefb20ab84ea46c146b9eadb523d82e033482a').attr('placeholder', '请输入视频名称查询');
function searchDataKeyWordtablefb20ab84ea46c146b9eadb523d82e033482a(){
	var keyWord = $.trim($("#keyWordtablefb20ab84ea46c146b9eadb523d82e033482a").val()); 
 if($('#keyWordtablefb20ab84ea46c146b9eadb523d82e033482a').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablefb20ab84ea46c146b9eadb523d82e033482a.length;i++){ 
		var name = searchNamestablefb20ab84ea46c146b9eadb523d82e033482a[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablefb20ab84ea46c146b9eadb523d82e033482aKeyWordIn=JSON.stringify(param);
tablefb20ab84ea46c146b9eadb523d82e033482aParamIn="";
	$('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablefb20ab84ea46c146b9eadb523d82e033482a').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablefb20ab84ea46c146b9eadb523d82e033482a();
	}
});
$('#keyWordBttablefb20ab84ea46c146b9eadb523d82e033482a').bind('click', function() {
		searchDataKeyWordtablefb20ab84ea46c146b9eadb523d82e033482a();
});
;$(document).ready(function(){ 

$("#tablefb20ab84ea46c146b9eadb523d82e033482a").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38ecc57ed018ecfd84b6827ac/tablefb20ab84ea46c146b9eadb523d82e033482a/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablefb20ab84ea46c146b9eadb523d82e033482a,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablefb20ab84ea46c146b9eadb523d82e033482aSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablefb20ab84ea46c146b9eadb523d82e033482aLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablefb20ab84ea46c146b9eadb523d82e033482aOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablefb20ab84ea46c146b9eadb523d82e033482aOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablefb20ab84ea46c146b9eadb523d82e033482aGridComplete.exec();
				    setTimeout(function(){var height = $("#tablefb20ab84ea46c146b9eadb523d82e033482a").closest('.ui-jqgrid-bdiv').height();
					$("#tablefb20ab84ea46c146b9eadb523d82e033482anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablefb20ab84ea46c146b9eadb523d82e033482anorecords img").css("width","120px");
                 }else{
					    $("#tablefb20ab84ea46c146b9eadb523d82e033482anorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablefb20ab84ea46c146b9eadb523d82e033482aBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablefb20ab84ea46c146b9eadb523d82e033482aOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablefb20ab84ea46c146b9eadb523d82e033482anorecords").hide();
		   	    $("#Pagertablefb20ab84ea46c146b9eadb523d82e033482a_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablefb20ab84ea46c146b9eadb523d82e033482a").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablefb20ab84ea46c146b9eadb523d82e033482a").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablefb20ab84ea46c146b9eadb523d82e033482anorecords").html() == null) {
						$("#tablefb20ab84ea46c146b9eadb523d82e033482a").parent().append("<div class='no_data' id='tablefb20ab84ea46c146b9eadb523d82e033482anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablefb20ab84ea46c146b9eadb523d82e033482anorecords").show();
					$("#Pagertablefb20ab84ea46c146b9eadb523d82e033482a_left").css("display", "none");
				}
tablefb20ab84ea46c146b9eadb523d82e033482aLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablefb20ab84ea46c146b9eadb523d82e033482a"
    });
tablefb20ab84ea46c146b9eadb523d82e033482aReload();
$("#t_tablefb20ab84ea46c146b9eadb523d82e033482a").append($("#tableToolbartablefb20ab84ea46c146b9eadb523d82e033482a"));$("#tableToolbarButton6dd8d86fd319e149ababf7788ff86971073f").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528ecb3d40018ecc3d35030ca8&grid=tablefb20ab84ea46c146b9eadb523d82e033482a',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButton3d5da5c6da8dea48e8b8649427f6c5c6abdf").bind('click',function() {                                                                                       
	var ids = $('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c528ecb3d40018ecc3d35030ca8&id=' + rowData.ID+'&grid=tablefb20ab84ea46c146b9eadb523d82e033482a',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButtonbf5bec474a8be74359aa4d92f20ef6f008d6").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_VIDEO&isbpm=N&dbid=2c908c528ecb3d40018ecc44e81c0cab', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38ecc57ed018ecfd84b6827ac',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablefb20ab84ea46c146b9eadb523d82e033482a').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton0f293c3424e1bb4cb168560638f10a52db31").bind('click',function(event){layer.open({
        type: 2,
        area: ['80%', '80%'],
        title: '信息报送维护',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: 'platform/eform/bpmsCRUDClient/toViewJsp/scriptuplist'
    });});
function searchDatatablefb20ab84ea46c146b9eadb523d82e033482a(){
 var para = serializeObjectForEform($("#searchformtablefb20ab84ea46c146b9eadb523d82e033482a"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablefb20ab84ea46c146b9eadb523d82e033482aKeyWordIn="";
tablefb20ab84ea46c146b9eadb523d82e033482aParamIn=JSON.stringify(para);
	$('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablefb20ab84ea46c146b9eadb523d82e033482a").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablefb20ab84ea46c146b9eadb523d82e033482a').bind('click',function(){
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
	content: $('#searchDialogtablefb20ab84ea46c146b9eadb523d82e033482a'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablefb20ab84ea46c146b9eadb523d82e033482a(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablefb20ab84ea46c146b9eadb523d82e033482a")); searchDatatablefb20ab84ea46c146b9eadb523d82e033482a(); layer.close(index); return false;
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
