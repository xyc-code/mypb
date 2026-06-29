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

function redraw948e83e38fc3580f018fc7ed3f3f3186(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38fc3580f018fc7ed3f3f3186").width();
		var win_height = $("#948e83e38fc3580f018fc7ed3f3f3186").height();
		$('#948e83e38fc3580f018fc7ed3f3f3186').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38fc3580f018fc7ed3f3f3186').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38fc3580f018fc7ed3f3f3186").width();
	setTimeout(function(){redraw948e83e38fc3580f018fc7ed3f3f3186(win_width);},500);
});
var tableb19b8736446631410de8aeafc2e20b8c96c6KeyWordIn = "";    
var tableb19b8736446631410de8aeafc2e20b8c96c6ParamIn = "";    
var tableb19b8736446631410de8aeafc2e20b8c96c6SelectRow = {     
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
var tableb19b8736446631410de8aeafc2e20b8c96c6LoadComplete = {     
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
var tableb19b8736446631410de8aeafc2e20b8c96c6BeforeEditCell = {        
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
var tableb19b8736446631410de8aeafc2e20b8c96c6OndblClickRow = {     
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
var tableb19b8736446631410de8aeafc2e20b8c96c6OnRightClickRow = {     
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
var tableb19b8736446631410de8aeafc2e20b8c96c6GridComplete = {     
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
var tableb19b8736446631410de8aeafc2e20b8c96c6OnCellSelect = {     
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
var tableb19b8736446631410de8aeafc2e20b8c96c6LoadBeforeSend = {        
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
function tableb19b8736446631410de8aeafc2e20b8c96c6Reload(pid){
	var _isInvalid = true;
	$("#tableb19b8736446631410de8aeafc2e20b8c96c6").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableb19b8736446631410de8aeafc2e20b8c96c6Pid = pid;
		}
		return false;
	}
	window.tableb19b8736446631410de8aeafc2e20b8c96c6Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableb19b8736446631410de8aeafc2e20b8c96c6').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableb19b8736446631410de8aeafc2e20b8c96c6TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableb19b8736446631410de8aeafc2e20b8c96c6Pid == 'undefined' || window.tableb19b8736446631410de8aeafc2e20b8c96c6Pid!=null){
tableb19b8736446631410de8aeafc2e20b8c96c6Reload(window.tableb19b8736446631410de8aeafc2e20b8c96c6Pid);
}
}
var tablecmtableb19b8736446631410de8aeafc2e20b8c96c6 = [];
var uniqueColtableb19b8736446631410de8aeafc2e20b8c96c6 = [];
var uniqueColTitletableb19b8736446631410de8aeafc2e20b8c96c6 = [];
var defaultValuetableb19b8736446631410de8aeafc2e20b8c96c6 = {};
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '项目名称',hidden:false, name: 'ENTRY_NAME',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '项目级别',hidden:false, name: 'ENTRY_LEVEL',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '承接党支部',hidden:false, name: 'UNDERTAKE_PARTY_BRANCH',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '承接党支部ID',hidden:true, name: 'UNDERTAKE_PARTY_BRANCH_ID',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '协同党支部',hidden:false, name: 'COLLABORATIVE_PARTY_BRANCH',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '协同党支部ID',hidden:true, name: 'COLLABORATIVE_PARTY_BRANCH_ID',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '质量攻关成效',hidden:false, name: 'EFFECT',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '党支部发挥作用情况',hidden:false, name: 'PERFORMANCE_SITUATION',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '团队主要成员',hidden:false, name: 'MEMBER',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '联系人',hidden:false, name: 'CONTACTS',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '联系方式',hidden:false, name: 'CONTACT_INFORMATION',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '团队主要成员ID',hidden:true, name: 'MEMBER_ID',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableb19b8736446631410de8aeafc2e20b8c96c6.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableb19b8736446631410de8aeafc2e20b8c96c6").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38fc3580f018fc7ed3f3f3186/tableb19b8736446631410de8aeafc2e20b8c96c6/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableb19b8736446631410de8aeafc2e20b8c96c6,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableb19b8736446631410de8aeafc2e20b8c96c6SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableb19b8736446631410de8aeafc2e20b8c96c6LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableb19b8736446631410de8aeafc2e20b8c96c6OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableb19b8736446631410de8aeafc2e20b8c96c6OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableb19b8736446631410de8aeafc2e20b8c96c6GridComplete.exec();
				    setTimeout(function(){var height = $("#tableb19b8736446631410de8aeafc2e20b8c96c6").closest('.ui-jqgrid-bdiv').height();
					$("#tableb19b8736446631410de8aeafc2e20b8c96c6norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableb19b8736446631410de8aeafc2e20b8c96c6norecords img").css("width","120px");
                 }else{
					    $("#tableb19b8736446631410de8aeafc2e20b8c96c6norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableb19b8736446631410de8aeafc2e20b8c96c6BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableb19b8736446631410de8aeafc2e20b8c96c6OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableb19b8736446631410de8aeafc2e20b8c96c6norecords").hide();
		   	    $("#Pagertableb19b8736446631410de8aeafc2e20b8c96c6_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableb19b8736446631410de8aeafc2e20b8c96c6").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableb19b8736446631410de8aeafc2e20b8c96c6").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableb19b8736446631410de8aeafc2e20b8c96c6norecords").html() == null) {
						$("#tableb19b8736446631410de8aeafc2e20b8c96c6").parent().append("<div class='no_data' id='tableb19b8736446631410de8aeafc2e20b8c96c6norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableb19b8736446631410de8aeafc2e20b8c96c6norecords").show();
					$("#Pagertableb19b8736446631410de8aeafc2e20b8c96c6_left").css("display", "none");
				}
tableb19b8736446631410de8aeafc2e20b8c96c6LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableb19b8736446631410de8aeafc2e20b8c96c6"
    });
tableb19b8736446631410de8aeafc2e20b8c96c6Reload();
$("#t_tableb19b8736446631410de8aeafc2e20b8c96c6").append($("#tableToolbartableb19b8736446631410de8aeafc2e20b8c96c6"));$("#tableToolbarButtondeac0c140cc88c4af1e98cf1bad6437c79cb").bind('click',function() {                                                                       
	layer.open({                                                                     
		type: 2,                                                                     
		area: ['100%', '100%'],                                                      
		title: '发起流程',                                                                
		skin: 'bs-modal',                                                            
		maxmin: false,                                                               
		content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38fc3580f018fc7f13c9c31a3&grid=tableb19b8736446631410de8aeafc2e20b8c96c6'     
	});                                                                              
}                                                                                  
);
$("#tableToolbarButton24c686b00f9bec473f0873a0ac775b7dc6b3").bind('click',function(event){var ids = $("#tableb19b8736446631410de8aeafc2e20b8c96c6").jqGrid('getGridParam', 'selarrrow');
if(ids.length>1){
alert("请选择一条提示记录");
}
console.log(ids.toString())
 avicAjax.ajax({
 url : 'platform/avicit/pb/member/dynAnnounce/dynAnnounceController/operation/party.json',
 type : 'POST',
 dataType : 'JSON',
data:  {id : ids.toString()},
 success : function(result) {
  if (result.flag == "failure") {
    layer.msg(result.errorMsg);
  }
 }
 });});
;});	 
