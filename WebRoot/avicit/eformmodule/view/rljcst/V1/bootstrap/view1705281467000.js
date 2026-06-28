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

function redraw2c908c1d8cc8d366018cc8d51f120872(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c1d8cc8d366018cc8d51f120872").width();
		var win_height = $("#2c908c1d8cc8d366018cc8d51f120872").height();
		$('#2c908c1d8cc8d366018cc8d51f120872').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c1d8cc8d366018cc8d51f120872').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c1d8cc8d366018cc8d51f120872").width();
	setTimeout(function(){redraw2c908c1d8cc8d366018cc8d51f120872(win_width);},500);
});
var tablebf313346187ebb45927957bef29d8ffbeca2KeyWordIn = "";    
var tablebf313346187ebb45927957bef29d8ffbeca2ParamIn = "";    
var tablebf313346187ebb45927957bef29d8ffbeca2SelectRow = {     
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
var tablebf313346187ebb45927957bef29d8ffbeca2LoadComplete = {     
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
var tablebf313346187ebb45927957bef29d8ffbeca2BeforeEditCell = {        
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
var tablebf313346187ebb45927957bef29d8ffbeca2OndblClickRow = {     
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
var tablebf313346187ebb45927957bef29d8ffbeca2OnRightClickRow = {     
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
var tablebf313346187ebb45927957bef29d8ffbeca2GridComplete = {     
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
var tablebf313346187ebb45927957bef29d8ffbeca2OnCellSelect = {     
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
var tablebf313346187ebb45927957bef29d8ffbeca2LoadBeforeSend = {        
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
function tablebf313346187ebb45927957bef29d8ffbeca2Reload(pid){
	var _isInvalid = true;
	$("#tablebf313346187ebb45927957bef29d8ffbeca2").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablebf313346187ebb45927957bef29d8ffbeca2Pid = pid;
		}
		return false;
	}
	window.tablebf313346187ebb45927957bef29d8ffbeca2Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablebf313346187ebb45927957bef29d8ffbeca2').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablebf313346187ebb45927957bef29d8ffbeca2TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablebf313346187ebb45927957bef29d8ffbeca2Pid == 'undefined' || window.tablebf313346187ebb45927957bef29d8ffbeca2Pid!=null){
tablebf313346187ebb45927957bef29d8ffbeca2Reload(window.tablebf313346187ebb45927957bef29d8ffbeca2Pid);
}
}
var tablecmtablebf313346187ebb45927957bef29d8ffbeca2 = [];
var uniqueColtablebf313346187ebb45927957bef29d8ffbeca2 = [];
var uniqueColTitletablebf313346187ebb45927957bef29d8ffbeca2 = [];
var defaultValuetablebf313346187ebb45927957bef29d8ffbeca2 = {};
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '人员编码',hidden:false, name: 'RYBM',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '集团员工编码',hidden:false, name: 'JTYGBM',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '身份证号',hidden:false, name: 'SFZH',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '出生日期', formatter:format, hidden:false, name: 'CSRQ',align:'center',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '年龄',hidden:false, name: 'NL',align:'right',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '一级部门',hidden:false, name: 'YJBM',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '所在部门',hidden:false, name: 'SZBM',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '所在岗位',hidden:false, name: 'SZGW',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '进入本单位时间',hidden:false, name: 'JRBDWSJ',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '人员类别',hidden:false, name: 'RYLB',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '民族',hidden:false, name: 'MZ',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '籍贯',hidden:false, name: 'JG',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '参加工作日期',hidden:false, name: 'CJGZRQ',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '出生地',hidden:false, name: 'CSD',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '身份类别',hidden:false, name: 'SFLB',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '家庭住址',hidden:false, name: 'JTZZ',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '教育类别',hidden:false, name: 'JYLB',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '文化程度',hidden:false, name: 'WHCD',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '职称',hidden:false, name: 'ZC',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '职称等级',hidden:false, name: 'ZCDJ',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '技能等级',hidden:false, name: 'JNDJ',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '是否启用',hidden:false, name: 'SFQY',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablebf313346187ebb45927957bef29d8ffbeca2.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestablebf313346187ebb45927957bef29d8ffbeca2 = []; 
searchNamestablebf313346187ebb45927957bef29d8ffbeca2.push('XM');
$('#keyWordtablebf313346187ebb45927957bef29d8ffbeca2').attr('placeholder', '请输入姓名查询');
function searchDataKeyWordtablebf313346187ebb45927957bef29d8ffbeca2(){
	var keyWord = $.trim($("#keyWordtablebf313346187ebb45927957bef29d8ffbeca2").val()); 
 if($('#keyWordtablebf313346187ebb45927957bef29d8ffbeca2').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablebf313346187ebb45927957bef29d8ffbeca2.length;i++){ 
		var name = searchNamestablebf313346187ebb45927957bef29d8ffbeca2[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablebf313346187ebb45927957bef29d8ffbeca2KeyWordIn=JSON.stringify(param);
tablebf313346187ebb45927957bef29d8ffbeca2ParamIn="";
	$('#tablebf313346187ebb45927957bef29d8ffbeca2').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablebf313346187ebb45927957bef29d8ffbeca2').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablebf313346187ebb45927957bef29d8ffbeca2();
	}
});
$('#keyWordBttablebf313346187ebb45927957bef29d8ffbeca2').bind('click', function() {
		searchDataKeyWordtablebf313346187ebb45927957bef29d8ffbeca2();
});
;$(document).ready(function(){ 

$("#tablebf313346187ebb45927957bef29d8ffbeca2").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c1d8cc8d366018cc8d51f120872/tablebf313346187ebb45927957bef29d8ffbeca2/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablebf313346187ebb45927957bef29d8ffbeca2,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 1000	,
        rowList:[1000, 10000, 100000, 1000000, 100000000],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablebf313346187ebb45927957bef29d8ffbeca2SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablebf313346187ebb45927957bef29d8ffbeca2LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablebf313346187ebb45927957bef29d8ffbeca2OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablebf313346187ebb45927957bef29d8ffbeca2OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablebf313346187ebb45927957bef29d8ffbeca2GridComplete.exec();
				    setTimeout(function(){var height = $("#tablebf313346187ebb45927957bef29d8ffbeca2").closest('.ui-jqgrid-bdiv').height();
					$("#tablebf313346187ebb45927957bef29d8ffbeca2norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablebf313346187ebb45927957bef29d8ffbeca2norecords img").css("width","120px");
                 }else{
					    $("#tablebf313346187ebb45927957bef29d8ffbeca2norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablebf313346187ebb45927957bef29d8ffbeca2BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablebf313346187ebb45927957bef29d8ffbeca2OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablebf313346187ebb45927957bef29d8ffbeca2norecords").hide();
		   	    $("#Pagertablebf313346187ebb45927957bef29d8ffbeca2_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablebf313346187ebb45927957bef29d8ffbeca2").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablebf313346187ebb45927957bef29d8ffbeca2").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablebf313346187ebb45927957bef29d8ffbeca2norecords").html() == null) {
						$("#tablebf313346187ebb45927957bef29d8ffbeca2").parent().append("<div class='no_data' id='tablebf313346187ebb45927957bef29d8ffbeca2norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablebf313346187ebb45927957bef29d8ffbeca2norecords").show();
					$("#Pagertablebf313346187ebb45927957bef29d8ffbeca2_left").css("display", "none");
				}
tablebf313346187ebb45927957bef29d8ffbeca2LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: false,
    autoScroll:true, 
		   responsive:true, 
        pager: "#Pagertablebf313346187ebb45927957bef29d8ffbeca2"
    });
$("#tablebf313346187ebb45927957bef29d8ffbeca2").closest('.ui-jqgrid-view').find('div.ui-jqgrid-bdiv').css("overflow-x","auto");
tablebf313346187ebb45927957bef29d8ffbeca2Reload();
$("#t_tablebf313346187ebb45927957bef29d8ffbeca2").append($("#tableToolbartablebf313346187ebb45927957bef29d8ffbeca2"));$("#tableToolbarButton443eb975bf2dc94cc4a8ea9024d2fa48ec7e").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablebf313346187ebb45927957bef29d8ffbeca2').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablebf313346187ebb45927957bef29d8ffbeca2').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_MDM_RY&isbpm=N&dbid=948e83e38caa8216018cc838ea462244', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c1d8cc8d366018cc8d51f120872',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablebf313346187ebb45927957bef29d8ffbeca2').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
function searchDatatablebf313346187ebb45927957bef29d8ffbeca2(){
 var para = serializeObjectForEform($("#searchformtablebf313346187ebb45927957bef29d8ffbeca2"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablebf313346187ebb45927957bef29d8ffbeca2KeyWordIn="";
tablebf313346187ebb45927957bef29d8ffbeca2ParamIn=JSON.stringify(para);
	$('#tablebf313346187ebb45927957bef29d8ffbeca2').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablebf313346187ebb45927957bef29d8ffbeca2").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablebf313346187ebb45927957bef29d8ffbeca2').bind('click',function(){
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
	content: $('#searchDialogtablebf313346187ebb45927957bef29d8ffbeca2'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablebf313346187ebb45927957bef29d8ffbeca2(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablebf313346187ebb45927957bef29d8ffbeca2")); searchDatatablebf313346187ebb45927957bef29d8ffbeca2(); layer.close(index); return false;
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
