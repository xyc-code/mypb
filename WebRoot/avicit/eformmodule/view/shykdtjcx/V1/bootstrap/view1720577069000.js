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

function redraw2c908c52909a0d9001909a5bc1e11943(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c52909a0d9001909a5bc1e11943").width();
		var win_height = $("#2c908c52909a0d9001909a5bc1e11943").height();
		$('#2c908c52909a0d9001909a5bc1e11943').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c52909a0d9001909a5bc1e11943').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c52909a0d9001909a5bc1e11943").width();
	setTimeout(function(){redraw2c908c52909a0d9001909a5bc1e11943(win_width);},500);
});
var table087f495e19fc594ecc9986f104048b88de9cKeyWordIn = "";    
var table087f495e19fc594ecc9986f104048b88de9cParamIn = "";    
var table087f495e19fc594ecc9986f104048b88de9cSelectRow = {     
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
var table087f495e19fc594ecc9986f104048b88de9cLoadComplete = {     
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
var table087f495e19fc594ecc9986f104048b88de9cBeforeEditCell = {        
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
var table087f495e19fc594ecc9986f104048b88de9cOndblClickRow = {     
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
var table087f495e19fc594ecc9986f104048b88de9cOnRightClickRow = {     
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
var table087f495e19fc594ecc9986f104048b88de9cGridComplete = {     
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
var table087f495e19fc594ecc9986f104048b88de9cOnCellSelect = {     
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
var table087f495e19fc594ecc9986f104048b88de9cLoadBeforeSend = {        
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
function table087f495e19fc594ecc9986f104048b88de9cReload(pid){
	var _isInvalid = true;
	$("#table087f495e19fc594ecc9986f104048b88de9c").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table087f495e19fc594ecc9986f104048b88de9cPid = pid;
		}
		return false;
	}
	window.table087f495e19fc594ecc9986f104048b88de9cPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.params.ids=pageParams.urlParam.ids;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table087f495e19fc594ecc9986f104048b88de9c').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table087f495e19fc594ecc9986f104048b88de9cTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table087f495e19fc594ecc9986f104048b88de9cPid == 'undefined' || window.table087f495e19fc594ecc9986f104048b88de9cPid!=null){
table087f495e19fc594ecc9986f104048b88de9cReload(window.table087f495e19fc594ecc9986f104048b88de9cPid);
}
}
var tablecmtable087f495e19fc594ecc9986f104048b88de9c = [];
var uniqueColtable087f495e19fc594ecc9986f104048b88de9c = [];
var uniqueColTitletable087f495e19fc594ecc9986f104048b88de9c = [];
var defaultValuetable087f495e19fc594ecc9986f104048b88de9c = {};
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '自动编号',hidden:false, name: 'AUTO_CODE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '申请人',hidden:true, name: 'REQUEST_USER',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({ label: '申请人',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({ label: '申请人', formatter:formattable087f495e19fc594ecc9986f104048b88de9cDetail, hidden:false, name: 'CREATED_BYName',align:'left',  width: '150px'});
function formattable087f495e19fc594ecc9986f104048b88de9cDetail(cellvalue, options, rowObject){
         var id = rowObject.ID;
        return '<a href="javascript:void(0);" onclick="totable087f495e19fc594ecc9986f104048b88de9cDetail(\''+id+'\')">'+cellvalue+'</a>';
}function totable087f495e19fc594ecc9986f104048b88de9cDetail(id){
        layer.open({                                                                      
		type: 2,                                                                      
		area: ['100%', '100%'],                                                       
		title: '详细',                                                                 
		skin: 'bs-modal',                                                             
		maxmin: false,                                                                
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id='+id      
	});  
}tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议时间', formatter:format, hidden:false, name: 'MEET_DATE',align:'center',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议名称：',hidden:false, name: 'MEET_NAME',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议类型',hidden:false, name: 'MEET_TYPE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会组织名称',hidden:false, name: 'JOIN_MEET_ORG',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议提纲',hidden:false, name: 'MEET_OUTLINE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '是否记录培训学时',hidden:false, name: 'HOURS_RECORD_YN',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '学时',hidden:false, name: 'LEARN_HOURS',align:'right',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议主题',hidden:false, name: 'MEET_THEME',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '应到会人数',hidden:false, name: 'DUE_PEOPLE_NUM',align:'right',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会率',hidden:false, name: 'JOIN_MEET_RATE',align:'right',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议地点',hidden:true, name: 'MEET_PLACE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会人员',hidden:true, name: 'JOIN_PEOPLE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '缺席人数',hidden:true, name: 'LEAVE_PEOPLE_NUM',align:'right',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '实到会人数',hidden:true, name: 'ACTUAL_PEOPLE_NUM',align:'right',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '请假人员名单',hidden:true, name: 'LEAVE_PEOPLE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '授课人',hidden:true, name: 'LECTURER',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '主讲人',hidden:true, name: 'SPEAKER',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '备注',hidden:true, name: 'REMARKS',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '主持人',hidden:true, name: 'HOST_TAKER',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '记录人',hidden:true, name: 'NOTE_TAKER',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议结果',hidden:true, name: 'MEET_RESULT',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会组织名称',hidden:true, name: 'JOIN_ORG',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会人员',hidden:true, name: 'JOIN_PEOPLE_NEW',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会人员ID',hidden:true, name: 'JOIN_PEOPLE_ID',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会组织ID',hidden:true, name: 'JOIN_ORG_ID',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '密级',hidden:true, name: 'SECRET_LEVEL',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '主讲人是否为外来人员',hidden:true, name: 'SPEAKER_OUT_YN',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '授课人是否为外来人员：',hidden:true, name: 'LECTURER_OUT_YN',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '记录人是否为外来人员：',hidden:true, name: 'NOTE_TAKER_OUT_YN',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '主持人是否为外来人员：',hidden:true, name: 'HOST_TAKER_OUT_YN',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '请假人员名单NEW',hidden:true, name: 'LEAVE_PEOPLE_NEW',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '请假人员名单',hidden:true, name: 'LEAVEL_PEOPLE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '申请人所在党支部',hidden:true, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '党支部ID',hidden:true, name: 'PARTY_ID',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '参会人员党支部',hidden:true, name: 'PARTY_NAME_NEW',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '申请人电话',hidden:true, name: 'REQUEST_TEL',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '党组织类型',hidden:true, name: 'PARTY_TYPE',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '列席人员',hidden:true, name: 'LX_POSEN',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '会议关键词(调整值在会议类型的事件里)',hidden:true, name: 'MEET_ZJ',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable087f495e19fc594ecc9986f104048b88de9c.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
filterParams.params={};
filterParams.params.ids=pageParams.urlParam.ids;
;$(document).ready(function(){ 

$("#table087f495e19fc594ecc9986f104048b88de9c").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c52909a0d9001909a5bc1e11943/table087f495e19fc594ecc9986f104048b88de9c/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable087f495e19fc594ecc9986f104048b88de9c,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table087f495e19fc594ecc9986f104048b88de9cSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table087f495e19fc594ecc9986f104048b88de9cLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table087f495e19fc594ecc9986f104048b88de9cOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table087f495e19fc594ecc9986f104048b88de9cOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table087f495e19fc594ecc9986f104048b88de9cGridComplete.exec();
				    setTimeout(function(){var height = $("#table087f495e19fc594ecc9986f104048b88de9c").closest('.ui-jqgrid-bdiv').height();
					$("#table087f495e19fc594ecc9986f104048b88de9cnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table087f495e19fc594ecc9986f104048b88de9cnorecords img").css("width","120px");
                 }else{
					    $("#table087f495e19fc594ecc9986f104048b88de9cnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table087f495e19fc594ecc9986f104048b88de9cBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table087f495e19fc594ecc9986f104048b88de9cOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table087f495e19fc594ecc9986f104048b88de9cnorecords").hide();
		   	    $("#Pagertable087f495e19fc594ecc9986f104048b88de9c_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table087f495e19fc594ecc9986f104048b88de9c").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table087f495e19fc594ecc9986f104048b88de9c").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table087f495e19fc594ecc9986f104048b88de9cnorecords").html() == null) {
						$("#table087f495e19fc594ecc9986f104048b88de9c").parent().append("<div class='no_data' id='table087f495e19fc594ecc9986f104048b88de9cnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table087f495e19fc594ecc9986f104048b88de9cnorecords").show();
					$("#Pagertable087f495e19fc594ecc9986f104048b88de9c_left").css("display", "none");
				}
table087f495e19fc594ecc9986f104048b88de9cLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable087f495e19fc594ecc9986f104048b88de9c"
    });
table087f495e19fc594ecc9986f104048b88de9cReload();
$("#t_table087f495e19fc594ecc9986f104048b88de9c").append($("#tableToolbartable087f495e19fc594ecc9986f104048b88de9c"));;});	 
