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
$(".toolbar-right").hide();
function redraw948e83e3843b68c40184565eefb50d10(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3843b68c40184565eefb50d10").width();
		var win_height = $("#948e83e3843b68c40184565eefb50d10").height();
		$('#948e83e3843b68c40184565eefb50d10').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3843b68c40184565eefb50d10').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3843b68c40184565eefb50d10").width();
	setTimeout(function(){redraw948e83e3843b68c40184565eefb50d10(win_width);},500);
});
var table19e737a0d2c3af41f32a976a6fb7844a53faKeyWordIn = "";    
var table19e737a0d2c3af41f32a976a6fb7844a53faParamIn = "";    
var table19e737a0d2c3af41f32a976a6fb7844a53faSelectRow = {     
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
var table19e737a0d2c3af41f32a976a6fb7844a53faLoadComplete = {     
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
var table19e737a0d2c3af41f32a976a6fb7844a53faBeforeEditCell = {        
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
var table19e737a0d2c3af41f32a976a6fb7844a53faOndblClickRow = {     
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
var table19e737a0d2c3af41f32a976a6fb7844a53faOnRightClickRow = {     
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
var table19e737a0d2c3af41f32a976a6fb7844a53faGridComplete = {     
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
var table19e737a0d2c3af41f32a976a6fb7844a53faOnCellSelect = {     
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
var table19e737a0d2c3af41f32a976a6fb7844a53faLoadBeforeSend = {        
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
function table19e737a0d2c3af41f32a976a6fb7844a53faReload(pid){
	var _isInvalid = true;
	$("#table19e737a0d2c3af41f32a976a6fb7844a53fa").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table19e737a0d2c3af41f32a976a6fb7844a53faPid = pid;
		}
		return false;
	}
	window.table19e737a0d2c3af41f32a976a6fb7844a53faPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table19e737a0d2c3af41f32a976a6fb7844a53fa').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table19e737a0d2c3af41f32a976a6fb7844a53faReload();
};
function table19e737a0d2c3af41f32a976a6fb7844a53faTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table19e737a0d2c3af41f32a976a6fb7844a53faPid == 'undefined' || window.table19e737a0d2c3af41f32a976a6fb7844a53faPid!=null){
table19e737a0d2c3af41f32a976a6fb7844a53faReload(window.table19e737a0d2c3af41f32a976a6fb7844a53faPid);
}
}
var tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa = [];
var uniqueColtable19e737a0d2c3af41f32a976a6fb7844a53fa = [];
var uniqueColTitletable19e737a0d2c3af41f32a976a6fb7844a53fa = [];
var defaultValuetable19e737a0d2c3af41f32a976a6fb7844a53fa = {};
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '公告标题',hidden:false, name: 'NOTICE_TITLE',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ label: '表单密级',hidden:true, name: 'SECRET_LEVEL',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ label: '表单密级',hidden:false, name: 'SECRET_LEVELName',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '申请日期',hidden:true, name: 'DRAFT_DATE',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '拟稿人',hidden:false, name: 'DRAFT_USER_NAME',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '拟稿人部门',hidden:false, name: 'DRAFT_DEPT_NAME',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '发布日期', formatter:format, hidden:false, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '失效日期', formatter:format, hidden:false, name: 'RELEASE_DATE',align:'center',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '版本',hidden:true, name: 'VERSION',align:'right',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '字段_1',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '失效日期',hidden:true, name: 'DEAD_DATE',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '候选人',hidden:true, name: 'SELECT_USER',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '发送支部',hidden:true, name: 'SEL_USER',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '发布日期',hidden:true, name: 'SEND_DATE',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '失效日期', formatter:format, hidden:true, name: 'INVALID_DATE',align:'center',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '备注',hidden:true, name: 'REMARK',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({label: '所选人员id',hidden:true, name: 'SEL_USER_ID',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ label: '是否过期',hidden:true, name: 'OVERTIME_YN',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ label: '是否过期',hidden:false, name: 'OVERTIME_YNName',align:'left',  width: '150px'});
tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ sortable:false,label: '流程当前步骤',hidden:true, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ sortable:false,label: '流程当前处理人',hidden:true, name: 'ASSIGNEENAMES_',align:'left',  width: '150px'});tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa.push({ sortable:false,label: '查看', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});	var searchNamestable19e737a0d2c3af41f32a976a6fb7844a53fa = []; 
searchNamestable19e737a0d2c3af41f32a976a6fb7844a53fa.push('OVERTIME_YN');
$('#keyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa').attr('placeholder', '请输入是否过期查询');
function searchDataKeyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa(){
	var keyWord = $.trim($("#keyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa").val()); 
 if($('#keyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable19e737a0d2c3af41f32a976a6fb7844a53fa.length;i++){ 
		var name = searchNamestable19e737a0d2c3af41f32a976a6fb7844a53fa[i]; 
		param[name] = keyWord; 
	} 
if ($("#table19e737a0d2c3af41f32a976a6fb7844a53faworkFlowSelect").length>0){param.bpmState=$('#table19e737a0d2c3af41f32a976a6fb7844a53faworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table19e737a0d2c3af41f32a976a6fb7844a53faKeyWordIn=JSON.stringify(param);
table19e737a0d2c3af41f32a976a6fb7844a53faParamIn="";
	$('#table19e737a0d2c3af41f32a976a6fb7844a53fa').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa();
	}
});
$('#keyWordBttable19e737a0d2c3af41f32a976a6fb7844a53fa').bind('click', function() {
		searchDataKeyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa();
});
;$(document).ready(function(){ 

$("#table19e737a0d2c3af41f32a976a6fb7844a53fa").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3843b68c40184565eefb50d10/table19e737a0d2c3af41f32a976a6fb7844a53fa/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable19e737a0d2c3af41f32a976a6fb7844a53fa,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table19e737a0d2c3af41f32a976a6fb7844a53faSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table19e737a0d2c3af41f32a976a6fb7844a53faLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table19e737a0d2c3af41f32a976a6fb7844a53faOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table19e737a0d2c3af41f32a976a6fb7844a53faOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table19e737a0d2c3af41f32a976a6fb7844a53faGridComplete.exec();
				    setTimeout(function(){var height = $("#table19e737a0d2c3af41f32a976a6fb7844a53fa").closest('.ui-jqgrid-bdiv').height();
					$("#table19e737a0d2c3af41f32a976a6fb7844a53fanorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table19e737a0d2c3af41f32a976a6fb7844a53fanorecords img").css("width","120px");
                 }else{
					    $("#table19e737a0d2c3af41f32a976a6fb7844a53fanorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table19e737a0d2c3af41f32a976a6fb7844a53faBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table19e737a0d2c3af41f32a976a6fb7844a53faOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table19e737a0d2c3af41f32a976a6fb7844a53fanorecords").hide();
		   	    $("#Pagertable19e737a0d2c3af41f32a976a6fb7844a53fa_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table19e737a0d2c3af41f32a976a6fb7844a53fa").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table19e737a0d2c3af41f32a976a6fb7844a53fa").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table19e737a0d2c3af41f32a976a6fb7844a53fanorecords").html() == null) {
						$("#table19e737a0d2c3af41f32a976a6fb7844a53fa").parent().append("<div class='no_data' id='table19e737a0d2c3af41f32a976a6fb7844a53fanorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table19e737a0d2c3af41f32a976a6fb7844a53fanorecords").show();
					$("#Pagertable19e737a0d2c3af41f32a976a6fb7844a53fa_left").css("display", "none");
				}
table19e737a0d2c3af41f32a976a6fb7844a53faLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable19e737a0d2c3af41f32a976a6fb7844a53fa"
    });
table19e737a0d2c3af41f32a976a6fb7844a53faReload();
$("#t_table19e737a0d2c3af41f32a976a6fb7844a53fa").append($("#tableToolbartable19e737a0d2c3af41f32a976a6fb7844a53fa"));$("#treeGridToolbarButtondc983478446de74290f89b89e6458c7bbba3").bind('click',function(event){var param2 = {OVERTIME_YN:'0',bpmState:'ended'};
//param1.bpmState= "ended";
var searchdata2= {
		keyWord:  JSON.stringify(param2 ),
	        param:null
	};

	$('#table19e737a0d2c3af41f32a976a6fb7844a53fa').jqGrid('setGridParam',{datatype: 'json',postData: searchdata2}).trigger("reloadGrid");});
$("#treeGridToolbarButtonf80a0751b95a6f4fd0099157bdf90926b3fe").bind('click',function(event){var param1 = {OVERTIME_YN:'1',bpmState:'ended'};
//param1.bpmState= "ended";
var searchdata1= {
		keyWord:  JSON.stringify(param1),
	        param:null
	};

	$('#table19e737a0d2c3af41f32a976a6fb7844a53fa').jqGrid('setGridParam',{datatype: 'json',postData: searchdata1}).trigger("reloadGrid");});
;});	 
