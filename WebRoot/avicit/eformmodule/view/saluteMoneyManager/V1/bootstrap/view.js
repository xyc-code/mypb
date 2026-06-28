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
/**
 * 职工慰问金-民管主管	角色删除流程数据
 */
function customDelFlow(){

          var rows = $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('getGridParam','selarrrow');
var ids = [];
var l =rows.length;
if(l > 0){
    layer.confirm('确认要删除选中的数据吗?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
        for(;l--;){
            ids.push(rows[l]);
        }
        avicAjax.ajax({
            url:'avicit/common/flowdel/commonDelFlowUtil/toDelFlow?tableName=DYN_SALUTE_MONEY',
            data:JSON.stringify(ids),
            contentType : 'application/json',
            type : 'post',
            dataType : 'json',
            success : function(r){
                if (r.flag == "success") {
                    $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').trigger('reloadGrid');layer.msg('删除成功！');
                }else{
                    layer.alert('删除失败,请联系管理员!', {
                            icon: 7,
                            area: ['400px', ''],
                            closeBtn: 0,
                            btn: ['关闭'],
                            title:"提示"
                        }
                    );
                }
            }
        });
        layer.close(index);
    });
}else{
    layer.alert('请选择要删除的数据！', {
            icon: 7,
            area: ['400px', ''], //宽高
            closeBtn: 0,
            btn: ['关闭'],
            title:"提示"
        }
    );
}


}
function redraw948e834578ee36ea017920a739b704b8(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e834578ee36ea017920a739b704b8").width();
		var win_height = $("#948e834578ee36ea017920a739b704b8").height();
		$('#948e834578ee36ea017920a739b704b8').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e834578ee36ea017920a739b704b8').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e834578ee36ea017920a739b704b8").width();
	setTimeout(function(){redraw948e834578ee36ea017920a739b704b8(win_width);},500);
});
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eKeyWordIn = "";    
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eParamIn = "";    
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eSelectRow = {     
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eLoadComplete = {     
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eBeforeEditCell = {        
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eOndblClickRow = {     
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eOnRightClickRow = {     
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eGridComplete = {     
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eOnCellSelect = {     
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
var table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eLoadBeforeSend = {        
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
function table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eReload(pid){
	var _isInvalid = true;
	$("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table6d2cd8b72cdd98436bc9d00c51bd47ee8e4ePid = pid;
		}
		return false;
	}
	window.table6d2cd8b72cdd98436bc9d00c51bd47ee8e4ePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
window.bpm_operator_refresh = function(){
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eReload();
};
function table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table6d2cd8b72cdd98436bc9d00c51bd47ee8e4ePid == 'undefined' || window.table6d2cd8b72cdd98436bc9d00c51bd47ee8e4ePid!=null){
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eReload(window.table6d2cd8b72cdd98436bc9d00c51bd47ee8e4ePid);
}
}
var tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e = [];
var uniqueColtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e = [];
var uniqueColTitletable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e = [];
var defaultValuetable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e = {};
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '工会审批编号',hidden:false, name: 'TRADE_NO',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '填报日期', formatter:format, hidden:false, name: 'REQUEST_DATE',align:'center',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '经办人',hidden:false, name: 'REQUEST_NAME',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '经办单位',hidden:false, name: 'REQUEST_DEPT',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '职工姓名',hidden:false, name: 'WORKER_NAME',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '职工姓别',hidden:true, name: 'WORKER_SEX',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '职工姓别',hidden:true, name: 'WORKER_SEXName',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '年龄',hidden:true, name: 'WORKER_AGE',align:'right',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '工作岗位及职务',hidden:true, name: 'WORKER_POST',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '人员类别',hidden:true, name: 'WORKER_TYPE',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '人员类别',hidden:false, name: 'WORKER_TYPEName',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '住院原因',hidden:false, name: 'IN_HSP_REASON',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '慰问种类',hidden:true, name: 'SALUTE_TYPE',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '慰问种类',hidden:false, name: 'SALUTE_TYPEName',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '经办联系电话',hidden:true, name: 'TEL',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '住院时间', formatter:format, hidden:true, name: 'IN_HSP_DATE',align:'center',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '与职工关系',hidden:true, name: 'WORKER_RELATION',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ label: '与职工关系',hidden:true, name: 'WORKER_RELATIONName',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '慰问时间', formatter:format, hidden:true, name: 'SALUTE_DATE',align:'center',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '住院地点',hidden:true, name: 'IN_HSP_PLACE',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '参加慰问人员',hidden:true, name: 'SALUTE_PEOPLE',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '慰问原因',hidden:true, name: 'SALUTE_REASON_EXT',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '申请拨付慰问金人民币',hidden:true, name: 'SALUTE_MONEY',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '字段_2',hidden:true, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '职工姓名',hidden:true, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ sortable:false,label: '流程当前步骤',hidden:false, name: 'ACTIVITYALIAS_',align:'left',  width: '150px'});tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ sortable:false,label: '流程状态', formatter:bpmStatusFormatter, hidden:false, name: 'BUSINESSSTATE_',align:'left',  width: '150px'});tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ sortable:false,label: '流程当前处理人',hidden:false, name: 'assignee',align:'left',  width: '150px'});tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({ sortable:false,label: '流程详细', formatter:bpmFormatter, hidden:false, name: 'flowdetail',align:'left',  width: '150px'});tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push({label: '是否购买慰问品',hidden:true, name: 'IS_WWP',align:'left',  width: '150px'});
	var searchNamestable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e = []; 
searchNamestable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.push('TRADE_NO');
$('#keyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').attr('placeholder', '请输入工会审批编号查询');
function searchDataKeyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e(){
	var keyWord = $.trim($("#keyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").val()); 
 if($('#keyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e.length;i++){ 
		var name = searchNamestable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e[i]; 
		param[name] = keyWord; 
	} 
if ($("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eworkFlowSelect").length>0){param.bpmState=$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eworkFlowSelect').val()}
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eKeyWordIn=JSON.stringify(param);
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eParamIn="";
	$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e();
	}
});
$('#keyWordBttable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').bind('click', function() {
		searchDataKeyWordtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e();
});
function table6d2cd8b72cdd98436bc9d00c51bd47ee8e4einitWorkFlow(status){
if(status == "start" || status === "nostart"){
$("#tableToolbarButton8f791831b12e954d3748a912bfb6f820ca35").css('display','inline-block');
}else{
$("#tableToolbarButton8f791831b12e954d3748a912bfb6f820ca35").hide();
}
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4esearchWF();
}
function table6d2cd8b72cdd98436bc9d00c51bd47ee8e4esearchWF(){
   if ($("#searchformtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").length>0){
      var para = serializeObject($("#searchformtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e"));
      para.bpmState = $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eworkFlowSelect').val();
	  var searchdata = {
		   keyWord: null,
		   param:JSON.stringify(para)
	  };
	  $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
   }else{
      var pa = {bpmState:$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eworkFlowSelect').val()};
	  var searchpara = {
		   keyWord: null,
		   param:JSON.stringify(pa)
	  };
	  $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('setGridParam',{datatype: 'json',postData: searchpara}).trigger("reloadGrid");
   }
}
;$(document).ready(function(){ 

$("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e834578ee36ea017920a739b704b8/table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e/Y/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eGridComplete.exec();
				    setTimeout(function(){var height = $("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").closest('.ui-jqgrid-bdiv').height();
					$("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords img").css("width","120px");
                 }else{
					    $("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords").hide();
		   	    $("#Pagertable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords").html() == null) {
						$("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").parent().append("<div class='no_data' id='table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4enorecords").show();
					$("#Pagertable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e_left").css("display", "none");
				}
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e"
    });
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eReload();
$("#t_table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").append($("#tableToolbartable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e"));$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eworkFlowSelect').bind('change',function(){
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4einitWorkFlow($(this).val());
});
function searchDatatable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e(){
 var para = serializeObjectForEform($("#searchformtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e"));
 para.bpmState = $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eworkFlowSelect').val();
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eKeyWordIn="";
table6d2cd8b72cdd98436bc9d00c51bd47ee8e4eParamIn=JSON.stringify(para);
	$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').bind('click',function(){
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
	content: $('#searchDialogtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e")); searchDatatable6d2cd8b72cdd98436bc9d00c51bd47ee8e4e(); layer.close(index); return false;
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
$('#DATA_1Alias').on('focus',function(e){
	new H5CommonSelect({type:'userSelect', idFiled:'DATA_1',textFiled:'DATA_1Alias',viewScope:'currentOrg',selectModel:'multi'});
}); 
$("#tableToolbarButtonf84572138a853a47b6bb2117a79f7bd03260").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e834578ee36ea01791c7705327a2d&grid=table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton8f791831b12e954d3748a912bfb6f820ca35").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_SALUTE_MONEY&isbpm=Y&dbid=948e834578ee36ea01791c8b21767a2e', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e834578ee36ea017920a739b704b8',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table6d2cd8b72cdd98436bc9d00c51bd47ee8e4e').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButton8f791831b12e954d3748a912bfb6f820ca35").hide();
$("#tableToolbarButton4a006d6b5bfc2e4d83088a44bb469c333de0").bind('click',function(event){customDelFlow();});
;});	 
