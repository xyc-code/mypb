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

function redraw2c908c5a898fafbb01898fe3c0ac0a9e(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c5a898fafbb01898fe3c0ac0a9e").width();
		var win_height = $("#2c908c5a898fafbb01898fe3c0ac0a9e").height();
		$('#2c908c5a898fafbb01898fe3c0ac0a9e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c5a898fafbb01898fe3c0ac0a9e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c5a898fafbb01898fe3c0ac0a9e").width();
	setTimeout(function(){redraw2c908c5a898fafbb01898fe3c0ac0a9e(win_width);},500);
});
var tablefb8de48cbe6d55429888220db6fb5703946fKeyWordIn = "";    
var tablefb8de48cbe6d55429888220db6fb5703946fParamIn = "";    
var tablefb8de48cbe6d55429888220db6fb5703946fSelectRow = {     
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
var tablefb8de48cbe6d55429888220db6fb5703946fLoadComplete = {     
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
var tablefb8de48cbe6d55429888220db6fb5703946fBeforeEditCell = {        
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
var tablefb8de48cbe6d55429888220db6fb5703946fOndblClickRow = {     
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
var tablefb8de48cbe6d55429888220db6fb5703946fOnRightClickRow = {     
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
var tablefb8de48cbe6d55429888220db6fb5703946fGridComplete = {     
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
var tablefb8de48cbe6d55429888220db6fb5703946fOnCellSelect = {     
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
var tablefb8de48cbe6d55429888220db6fb5703946fLoadBeforeSend = {        
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
function tablefb8de48cbe6d55429888220db6fb5703946fReload(pid){
	var _isInvalid = true;
	$("#tablefb8de48cbe6d55429888220db6fb5703946f").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablefb8de48cbe6d55429888220db6fb5703946fPid = pid;
		}
		return false;
	}
	window.tablefb8de48cbe6d55429888220db6fb5703946fPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablefb8de48cbe6d55429888220db6fb5703946fTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablefb8de48cbe6d55429888220db6fb5703946fPid == 'undefined' || window.tablefb8de48cbe6d55429888220db6fb5703946fPid!=null){
tablefb8de48cbe6d55429888220db6fb5703946fReload(window.tablefb8de48cbe6d55429888220db6fb5703946fPid);
}
}
var tablecmtablefb8de48cbe6d55429888220db6fb5703946f = [];
var uniqueColtablefb8de48cbe6d55429888220db6fb5703946f = [];
var uniqueColTitletablefb8de48cbe6d55429888220db6fb5703946f = [];
var defaultValuetablefb8de48cbe6d55429888220db6fb5703946f = {};
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_15',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_14',align:'right',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_13',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_12',align:'right',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段', formatter:format, hidden:true, name: 'ATTRIBUTE_11',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_10',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_09',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_08',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_02',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '姓名',hidden:true, name: 'USER_ID',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '姓名', formatter:formattablefb8de48cbe6d55429888220db6fb5703946fDetail, hidden:false, name: 'USER_IDName',align:'left',  width: '150px'});
function formattablefb8de48cbe6d55429888220db6fb5703946fDetail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totablefb8de48cbe6d55429888220db6fb5703946fDetail(\''+id+'\')">'+cellvalue+'</a>';
}function totablefb8de48cbe6d55429888220db6fb5703946fDetail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=2c908c5a898fafbb01898fd7371f0960&id='+id      
	});  
}tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '部门',hidden:true, name: 'DEPT_ID',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '部门',hidden:false, name: 'DEPT_IDName',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '工会名称',hidden:false, name: 'ATTRIBUTE_03',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '工会',hidden:true, name: 'TRADE_UNION_ID',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '人员编码',hidden:false, name: 'USER_CODE',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '身份证号',hidden:false, name: 'IDCARD',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '出生年月', formatter:format, hidden:false, name: 'BIRTHDAY',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '入会时间', formatter:format, hidden:false, name: 'JOIN_PARTY',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '性别',hidden:true, name: 'SEX',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '性别',hidden:false, name: 'SEXName',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '民族',hidden:false, name: 'NATION',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '籍贯',hidden:false, name: 'ORIGN',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '文化程度',hidden:true, name: 'EDUCATION_LEVEL',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '文化程度',hidden:false, name: 'EDUCATION_LEVELName',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '政治面貌',hidden:true, name: 'POLITICAL_OUTLOOK',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '政治面貌',hidden:false, name: 'POLITICAL_OUTLOOKName',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '职务',hidden:false, name: 'POST',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '职称',hidden:false, name: 'PROFESSIONAL_RANK',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '身份类别',hidden:true, name: 'CATEGORY',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '身份类别',hidden:false, name: 'CATEGORYName',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '在职/离职',hidden:true, name: 'ONOFF_JOB',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({ label: '在职/离职',hidden:false, name: 'ONOFF_JOBName',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '会员状态',hidden:false, name: 'ATTRIBUTE_04',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '会费金额(季度)',hidden:false, name: 'PARTY_MONEY',align:'right',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '是否有效',hidden:true, name: 'STATUS',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_07',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_05',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '扩展字段',hidden:true, name: 'ATTRIBUTE_06',align:'left',  width: '150px'});
tablecmtablefb8de48cbe6d55429888220db6fb5703946f.push({label: '字段_4',hidden:true, name: 'DATA_4',align:'left',  width: '150px'});
	var searchNamestablefb8de48cbe6d55429888220db6fb5703946f = []; 
searchNamestablefb8de48cbe6d55429888220db6fb5703946f.push('USER_CODE');
$('#keyWordtablefb8de48cbe6d55429888220db6fb5703946f').attr('placeholder', '请输入人员编码查询');
function searchDataKeyWordtablefb8de48cbe6d55429888220db6fb5703946f(){
	var keyWord = $.trim($("#keyWordtablefb8de48cbe6d55429888220db6fb5703946f").val()); 
 if($('#keyWordtablefb8de48cbe6d55429888220db6fb5703946f').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablefb8de48cbe6d55429888220db6fb5703946f.length;i++){ 
		var name = searchNamestablefb8de48cbe6d55429888220db6fb5703946f[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablefb8de48cbe6d55429888220db6fb5703946fKeyWordIn=JSON.stringify(param);
tablefb8de48cbe6d55429888220db6fb5703946fParamIn="";
	$('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablefb8de48cbe6d55429888220db6fb5703946f').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablefb8de48cbe6d55429888220db6fb5703946f();
	}
});
$('#keyWordBttablefb8de48cbe6d55429888220db6fb5703946f').bind('click', function() {
		searchDataKeyWordtablefb8de48cbe6d55429888220db6fb5703946f();
});
;$(document).ready(function(){ 

$("#tablefb8de48cbe6d55429888220db6fb5703946f").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c5a898fafbb01898fe3c0ac0a9e/tablefb8de48cbe6d55429888220db6fb5703946f/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablefb8de48cbe6d55429888220db6fb5703946f,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablefb8de48cbe6d55429888220db6fb5703946fSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablefb8de48cbe6d55429888220db6fb5703946fLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablefb8de48cbe6d55429888220db6fb5703946fOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablefb8de48cbe6d55429888220db6fb5703946fOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablefb8de48cbe6d55429888220db6fb5703946fGridComplete.exec();
				    setTimeout(function(){var height = $("#tablefb8de48cbe6d55429888220db6fb5703946f").closest('.ui-jqgrid-bdiv').height();
					$("#tablefb8de48cbe6d55429888220db6fb5703946fnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablefb8de48cbe6d55429888220db6fb5703946fnorecords img").css("width","120px");
                 }else{
					    $("#tablefb8de48cbe6d55429888220db6fb5703946fnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablefb8de48cbe6d55429888220db6fb5703946fBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablefb8de48cbe6d55429888220db6fb5703946fOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablefb8de48cbe6d55429888220db6fb5703946fnorecords").hide();
		   	    $("#Pagertablefb8de48cbe6d55429888220db6fb5703946f_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablefb8de48cbe6d55429888220db6fb5703946f").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablefb8de48cbe6d55429888220db6fb5703946f").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablefb8de48cbe6d55429888220db6fb5703946fnorecords").html() == null) {
						$("#tablefb8de48cbe6d55429888220db6fb5703946f").parent().append("<div class='no_data' id='tablefb8de48cbe6d55429888220db6fb5703946fnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablefb8de48cbe6d55429888220db6fb5703946fnorecords").show();
					$("#Pagertablefb8de48cbe6d55429888220db6fb5703946f_left").css("display", "none");
				}
tablefb8de48cbe6d55429888220db6fb5703946fLoadComplete.exec(data);                      
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
        pager: "#Pagertablefb8de48cbe6d55429888220db6fb5703946f"
    });
$("#tablefb8de48cbe6d55429888220db6fb5703946f").closest('.ui-jqgrid-view').find('div.ui-jqgrid-bdiv').css("overflow-x","auto");
tablefb8de48cbe6d55429888220db6fb5703946fReload();
$("#t_tablefb8de48cbe6d55429888220db6fb5703946f").append($("#tableToolbartablefb8de48cbe6d55429888220db6fb5703946f"));function searchDatatablefb8de48cbe6d55429888220db6fb5703946f(){
 var para = serializeObjectForEform($("#searchformtablefb8de48cbe6d55429888220db6fb5703946f"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablefb8de48cbe6d55429888220db6fb5703946fKeyWordIn="";
tablefb8de48cbe6d55429888220db6fb5703946fParamIn=JSON.stringify(para);
	$('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablefb8de48cbe6d55429888220db6fb5703946f").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablefb8de48cbe6d55429888220db6fb5703946f').bind('click',function(){
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
'600px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtablefb8de48cbe6d55429888220db6fb5703946f'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablefb8de48cbe6d55429888220db6fb5703946f(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablefb8de48cbe6d55429888220db6fb5703946f")); searchDatatablefb8de48cbe6d55429888220db6fb5703946f(); layer.close(index); return false;
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
$('#USER_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'USER_ID',textFiled:'USER_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$('#BIRTHDAY_START_button').click(function(e){
			$('#BIRTHDAY_START').datepicker('show');
			$('#BIRTHDAY_START').datepicker().trigger('click');
}); 
$('#BIRTHDAY_END_button').click(function(e){
			$('#BIRTHDAY_END').datepicker('show');
			$('#BIRTHDAY_END').datepicker().trigger('click');
}); 
$('#JOIN_PARTY_START_button').click(function(e){
			$('#JOIN_PARTY_START').datetimepicker('show');
			$('#JOIN_PARTY_START').datetimepicker().trigger('click');
}); 
$('#JOIN_PARTY_END_button').click(function(e){
			$('#JOIN_PARTY_END').datetimepicker('show');
			$('#JOIN_PARTY_END').datetimepicker().trigger('click');
}); 
$('#DEPT_IDAlias').on('focus',function(e){
	new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_ID',textFiled:'DEPT_IDAlias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$("#tableToolbarButtond721c741c0c59f4fb408959ba774cbb84e9d").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a898fafbb01898fd7371f0960&grid=tablefb8de48cbe6d55429888220db6fb5703946f',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtonec0f07d6f1450e4d3298de56eee5611cd8dc").bind('click',function() {                                                                                       
	var ids = $('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c5a898fafbb01898fd7371f0960&id=' + rowData.ID+'&grid=tablefb8de48cbe6d55429888220db6fb5703946f',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton6fe129811d713c41671a8d95734e3f25ba8f").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_TRADE_UNION_MB&isbpm=N&dbid=2c908c5a898fafbb01898fce883406f2', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'2c908c5a898fafbb01898fe3c0ac0a9e',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablefb8de48cbe6d55429888220db6fb5703946f').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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

$('#tableToolbarButton62d4e51c6ec78a4d8c8838b5e69f9ca48243').bind('click',function() {                           
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
	        var colModels =$('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('getGridParam','colModel');   
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
	        expSearchParams.keyWord = tablefb8de48cbe6d55429888220db6fb5703946fKeyWordIn;                          
	        expSearchParams.param = tablefb8de48cbe6d55429888220db6fb5703946fParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='工会会员表';                             
	        expSearchParams.viewid='2c908c5a898fafbb01898fe3c0ac0a9e';                                   
	        expSearchParams.tableid='tablefb8de48cbe6d55429888220db6fb5703946f';                                 
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
$("#tableToolbarButton2503740e5970ce49e5b977a1e87e3e3758b6").bind('click',function() {                                                                      	
	$(this).sysExcelImport({templateCode: 'tradeUnionExcelImport', callBackFunc: function () {                           	
		$('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
		}																				
	});																				
}                                                                                  
);
$("#tableToolbarButton92d688d32a911f4f199a318b1ce936b903cb").bind('click',function(event){layer.open({
	    type: 2,
	   area: ['1000px', '500px'],
	    title: '柱状图统计',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
	    content: 'avicit/tu/tuorganization/TradeUnionMembers.jsp'
	});});
;});	 
