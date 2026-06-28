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

function redraw948e83e38acecb42018b270b4c150581(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38acecb42018b270b4c150581").width();
		var win_height = $("#948e83e38acecb42018b270b4c150581").height();
		$('#948e83e38acecb42018b270b4c150581').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38acecb42018b270b4c150581').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38acecb42018b270b4c150581").width();
	setTimeout(function(){redraw948e83e38acecb42018b270b4c150581(win_width);},500);
});
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aKeyWordIn = "";    
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aParamIn = "";    
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aSelectRow = {     
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aLoadComplete = {     
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aBeforeEditCell = {        
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aOndblClickRow = {     
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aOnRightClickRow = {     
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aGridComplete = {     
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aOnCellSelect = {     
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
var table0e4ec0df3b0c02444ab8b83393f7199ffa9aLoadBeforeSend = {        
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
function table0e4ec0df3b0c02444ab8b83393f7199ffa9aReload(pid){
	var _isInvalid = true;
	$("#table0e4ec0df3b0c02444ab8b83393f7199ffa9a").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table0e4ec0df3b0c02444ab8b83393f7199ffa9aPid = pid;
		}
		return false;
	}
	window.table0e4ec0df3b0c02444ab8b83393f7199ffa9aPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table0e4ec0df3b0c02444ab8b83393f7199ffa9aTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table0e4ec0df3b0c02444ab8b83393f7199ffa9aPid == 'undefined' || window.table0e4ec0df3b0c02444ab8b83393f7199ffa9aPid!=null){
table0e4ec0df3b0c02444ab8b83393f7199ffa9aReload(window.table0e4ec0df3b0c02444ab8b83393f7199ffa9aPid);
}
}
var tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a = [];
var uniqueColtable0e4ec0df3b0c02444ab8b83393f7199ffa9a = [];
var uniqueColTitletable0e4ec0df3b0c02444ab8b83393f7199ffa9a = [];
var defaultValuetable0e4ec0df3b0c02444ab8b83393f7199ffa9a = {};
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '干部人才总人数',hidden:false, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '干部在岗总数',hidden:false, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '在岗员工总数',hidden:false, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '技术人员总数',hidden:false, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '管理人员总数',hidden:false, name: 'DATA_9',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '技能人员总数',hidden:false, name: 'DATA_10',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织选举到期换届',hidden:false, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织选举到期换届已完成',hidden:false, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织选举到期换届进行中',hidden:false, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织选举到期换届未到期',hidden:false, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织设置党委',hidden:false, name: 'DATA_11',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '重点监督项数已完成',hidden:false, name: 'DATA_28',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '重点监督项数进行中',hidden:false, name: 'DATA_29',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织设置党总支部',hidden:false, name: 'DATA_12',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织设置直属党支部',hidden:false, name: 'DATA_13',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党组织设置下属党支部',hidden:false, name: 'DATA_14',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党员队伍发展党员人数',hidden:false, name: 'DATA_15',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党员队伍新发展党员35岁以下',hidden:false, name: 'DATA_16',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党员队伍新发展女党员',hidden:false, name: 'DATA_17',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '党员队伍新发展大专以上党历',hidden:false, name: 'DATA_18',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '公司巡视整改巡视整改措施数',hidden:false, name: 'DATA_19',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '巡视整改措施数已完成',hidden:false, name: 'DATA_20',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '巡视整改措施数进行中',hidden:false, name: 'DATA_21',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '巡视整改措施数超期未完',hidden:false, name: 'DATA_22',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '被巡察单位巡察整改整改措施数',hidden:false, name: 'DATA_23',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '被巡察单位巡察整改整改措施数已完成',hidden:false, name: 'DATA_24',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '被巡察单位巡察整改整改措施数进行中',hidden:false, name: 'DATA_25',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '被巡察单位巡察整改整改措施数超期未完',hidden:false, name: 'DATA_26',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '重点监督工作重点监督项数',hidden:false, name: 'DATA_27',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '重点监督项数超期未完',hidden:false, name: 'DATA_30',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '廉洁文化建设工作廉洁文化建设项数量',hidden:false, name: 'DATA_31',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '廉洁文化建设工作廉洁文化建设项数量已完成',hidden:false, name: 'DATA_32',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '廉洁文化建设工作廉洁文化建设项数量进行中',hidden:false, name: 'DATA_33',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '廉洁文化建设工作廉洁文化建设项数量超期未完',hidden:false, name: 'DATA_34',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
	var searchNamestable0e4ec0df3b0c02444ab8b83393f7199ffa9a = []; 
searchNamestable0e4ec0df3b0c02444ab8b83393f7199ffa9a.push('ID');
$('#keyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a').attr('placeholder', '请输入ID查询');
function searchDataKeyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a(){
	var keyWord = $.trim($("#keyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a").val()); 
 if($('#keyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable0e4ec0df3b0c02444ab8b83393f7199ffa9a.length;i++){ 
		var name = searchNamestable0e4ec0df3b0c02444ab8b83393f7199ffa9a[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table0e4ec0df3b0c02444ab8b83393f7199ffa9aKeyWordIn=JSON.stringify(param);
table0e4ec0df3b0c02444ab8b83393f7199ffa9aParamIn="";
	$('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a();
	}
});
$('#keyWordBttable0e4ec0df3b0c02444ab8b83393f7199ffa9a').bind('click', function() {
		searchDataKeyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a();
});
;$(document).ready(function(){ 

$("#table0e4ec0df3b0c02444ab8b83393f7199ffa9a").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38acecb42018b270b4c150581/table0e4ec0df3b0c02444ab8b83393f7199ffa9a/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable0e4ec0df3b0c02444ab8b83393f7199ffa9a,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table0e4ec0df3b0c02444ab8b83393f7199ffa9aSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table0e4ec0df3b0c02444ab8b83393f7199ffa9aLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table0e4ec0df3b0c02444ab8b83393f7199ffa9aOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table0e4ec0df3b0c02444ab8b83393f7199ffa9aOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table0e4ec0df3b0c02444ab8b83393f7199ffa9aGridComplete.exec();
				    setTimeout(function(){var height = $("#table0e4ec0df3b0c02444ab8b83393f7199ffa9a").closest('.ui-jqgrid-bdiv').height();
					$("#table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords img").css("width","120px");
                 }else{
					    $("#table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table0e4ec0df3b0c02444ab8b83393f7199ffa9aBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table0e4ec0df3b0c02444ab8b83393f7199ffa9aOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords").hide();
		   	    $("#Pagertable0e4ec0df3b0c02444ab8b83393f7199ffa9a_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table0e4ec0df3b0c02444ab8b83393f7199ffa9a").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table0e4ec0df3b0c02444ab8b83393f7199ffa9a").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords").html() == null) {
						$("#table0e4ec0df3b0c02444ab8b83393f7199ffa9a").parent().append("<div class='no_data' id='table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table0e4ec0df3b0c02444ab8b83393f7199ffa9anorecords").show();
					$("#Pagertable0e4ec0df3b0c02444ab8b83393f7199ffa9a_left").css("display", "none");
				}
table0e4ec0df3b0c02444ab8b83393f7199ffa9aLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable0e4ec0df3b0c02444ab8b83393f7199ffa9a"
    });
table0e4ec0df3b0c02444ab8b83393f7199ffa9aReload();
$("#t_table0e4ec0df3b0c02444ab8b83393f7199ffa9a").append($("#tableToolbartable0e4ec0df3b0c02444ab8b83393f7199ffa9a"));function searchDatatable0e4ec0df3b0c02444ab8b83393f7199ffa9a(){
 var para = serializeObjectForEform($("#searchformtable0e4ec0df3b0c02444ab8b83393f7199ffa9a"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
table0e4ec0df3b0c02444ab8b83393f7199ffa9aKeyWordIn="";
table0e4ec0df3b0c02444ab8b83393f7199ffa9aParamIn=JSON.stringify(para);
	$('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtable0e4ec0df3b0c02444ab8b83393f7199ffa9a").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltable0e4ec0df3b0c02444ab8b83393f7199ffa9a').bind('click',function(){
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
	content: $('#searchDialogtable0e4ec0df3b0c02444ab8b83393f7199ffa9a'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatable0e4ec0df3b0c02444ab8b83393f7199ffa9a(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtable0e4ec0df3b0c02444ab8b83393f7199ffa9a")); searchDatatable0e4ec0df3b0c02444ab8b83393f7199ffa9a(); layer.close(index); return false;
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
$("#tableToolbarButton8892d56a413c974aab8b678283fa25cb5cb4").bind('click',function() {                                                                       
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
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38acecb42018b27099b1c04ee&grid=table0e4ec0df3b0c02444ab8b83393f7199ffa9a',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtondeec86bd5e6c01405388426b865b235db7f5").bind('click',function() {                                                                                       
	var ids = $('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('getGridParam', 'selarrrow');                            
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
                                                                                    
	var rowData = $('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38acecb42018b27099b1c04ee&id=' + rowData.ID+'&grid=table0e4ec0df3b0c02444ab8b83393f7199ffa9a',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
$("#tableToolbarButton7383fa0179ca1441de78fca29ce19d7b8117").bind('click',function() {   																				
	var bpmsDeleteRows = $('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_DATA_DISPLAY&isbpm=N&dbid=948e83e38acecb42018b270029b40454', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e38acecb42018b270b4c150581',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
