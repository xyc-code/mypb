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
var id=pageParams.urlParam.id;
var type=pageParams.urlParam.fkType;
console.log('外键id',id);
console.log('外键类型',type);

var newRowStart_DYN_PFMD=0;
function redraw948e83e3939ae2490193ae813c674f07(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e3939ae2490193ae813c674f07").width();
		var win_height = $("#948e83e3939ae2490193ae813c674f07").height();
		$('#948e83e3939ae2490193ae813c674f07').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e3939ae2490193ae813c674f07').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e3939ae2490193ae813c674f07").width();
	setTimeout(function(){redraw948e83e3939ae2490193ae813c674f07(win_width);},500);
});
var tablea53bce435fb93a406f28dccf1e43b05d3cccKeyWordIn = "";    
var tablea53bce435fb93a406f28dccf1e43b05d3cccParamIn = "";    
var tablea53bce435fb93a406f28dccf1e43b05d3cccSelectRow = {     
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccLoadComplete = {     
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccBeforeEditCell = {        
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccOndblClickRow = {     
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccOnRightClickRow = {     
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccGridComplete = {     
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccOnCellSelect = {     
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
var tablea53bce435fb93a406f28dccf1e43b05d3cccLoadBeforeSend = {        
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
function tablea53bce435fb93a406f28dccf1e43b05d3cccReload(pid){
	var _isInvalid = true;
	$("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablea53bce435fb93a406f28dccf1e43b05d3cccPid = pid;
		}
		return false;
	}
	window.tablea53bce435fb93a406f28dccf1e43b05d3cccPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
filterParams.params.fkId=pageParams.urlParam.id;
filterParams.params.fkType=pageParams.urlParam.fkType;
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablea53bce435fb93a406f28dccf1e43b05d3cccTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablea53bce435fb93a406f28dccf1e43b05d3cccPid == 'undefined' || window.tablea53bce435fb93a406f28dccf1e43b05d3cccPid!=null){
tablea53bce435fb93a406f28dccf1e43b05d3cccReload(window.tablea53bce435fb93a406f28dccf1e43b05d3cccPid);
}
}
var tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc = [];
var uniqueColtablea53bce435fb93a406f28dccf1e43b05d3ccc = [];
var uniqueColTitletablea53bce435fb93a406f28dccf1e43b05d3ccc = [];
var defaultValuetablea53bce435fb93a406f28dccf1e43b05d3ccc = {};
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '姓名',hidden:false, name: 'XM',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '性别',hidden:false, name: 'XB',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '民族',hidden:false, name: 'MZ',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '现任职务',hidden:false, name: 'XRZW',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '出生年月',hidden:false, name: 'WSNY',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '文化程度',hidden:false, name: 'WHCD',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '职称',hidden:false, name: 'ZC',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '入党年月',hidden:false, name: 'RDNY',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '参加工作年月',hidden:false, name: 'CJGZNY',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '是何人选',hidden:false, name: 'SHRX',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '外键id',hidden:true, name: 'FK_COL_ID',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '外键类型',hidden:true, name: 'FK_COL_TYPE',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
var restoreRowData_tablea53bce435fb93a406f28dccf1e43b05d3ccc = {};
var newRowIndex_tablea53bce435fb93a406f28dccf1e43b05d3ccc = 0;
 var newRowStart_tablea53bce435fb93a406f28dccf1e43b05d3ccc = "new_row";filterParams.params={};
filterParams.params.fkId=pageParams.urlParam.id;
filterParams.params.fkType=pageParams.urlParam.fkType;
;$(document).ready(function(){ 

$("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e3939ae2490193ae813c674f07/tablea53bce435fb93a406f28dccf1e43b05d3ccc/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     comparameter:JSON.stringify(filterParams),
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtablea53bce435fb93a406f28dccf1e43b05d3ccc,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablea53bce435fb93a406f28dccf1e43b05d3cccSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablea53bce435fb93a406f28dccf1e43b05d3cccLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablea53bce435fb93a406f28dccf1e43b05d3cccOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablea53bce435fb93a406f28dccf1e43b05d3cccOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablea53bce435fb93a406f28dccf1e43b05d3cccGridComplete.exec();
				    setTimeout(function(){var height = $("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").closest('.ui-jqgrid-bdiv').height();
					$("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords img").css("width","120px");
                 }else{
					    $("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablea53bce435fb93a406f28dccf1e43b05d3cccBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				if (cellcontent.indexOf('cbox')>-1){
				}else{
					var eformjqGridRowid=$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('getGridParam','selarrrow');
					var eformeditflag = true;
					for(var i = 0; i < eformjqGridRowid.length; i++) {
				    	if (eformjqGridRowid[i] === rowid){
				            eformeditflag = false;
				            break;
				    	}
				    	$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').setSelection(eformjqGridRowid[i], false);
					}
					if (eformeditflag){
				    	jQuery('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('setSelection',rowid);
					}
				}
				tablea53bce435fb93a406f28dccf1e43b05d3cccOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords").hide();
		   	    $("#Pagertablea53bce435fb93a406f28dccf1e43b05d3ccc_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords").html() == null) {
						$("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").parent().append("<div class='no_data' id='tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords").show();
					$("#Pagertablea53bce435fb93a406f28dccf1e43b05d3ccc_left").css("display", "none");
				}
tablea53bce435fb93a406f28dccf1e43b05d3cccLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
		   cellEdit:true,
		   cellsubmit: 'clientArray',
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablea53bce435fb93a406f28dccf1e43b05d3ccc"
    });
tablea53bce435fb93a406f28dccf1e43b05d3cccReload();
$("#t_tablea53bce435fb93a406f28dccf1e43b05d3ccc").append($("#tableToolbartablea53bce435fb93a406f28dccf1e43b05d3ccc"));$("#tableToolbarButton55270826a6dac5440fdbf1d0ce267c9d4015").bind('click',function(event){layer.open({
    type:2,
    title:'请选择数据',
    skin:'bs-modal',
    shade:0.3,
    maxmin:false,
    content:"platform/eform/plugin/toDictionarySelect",
    area:['800px','90%'],
    btn:['确认','关闭'],
    success:function (layero,index){
        var iframeWin=layero.find('iframe')[0].contentWindow;
        this.getParamsValue=function (targetName){
            return $("#"+targetName).val();
        }
        this.jsSuccess=function (xhr,rows) {}
        iframeWin.initGrid(
            "1",
            "20",
            "select t1.user_id, t2.name,t1.sex, t1.nation,t1.POST,t1.BIRTHDAY,t1.EDUCATION_LEVEL,t1.PROFESSIONAL_RANK, t1.JOIN_PARTY,t1.WORK_TIME FROM  PARTY_MEMBER t1 left join sys_user t2 on t2.id=t1.user_id order by t2.name",
            '[{"label":"id2","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"","name":"NAME"},{"label":"性别","width":"50","align":"center","orderBy":"","name":"SEXName"},{"label":"民族","width":"50","align":"center","orderBy":"","name":"NATION"},{"label":"职务","width":"50","align":"center","orderBy":"","name":"POST"},{"label":"出生日期","width":"50","align":"center","orderBy":"","name":"BIRTHDAY"},{"label":"文化程度","width":"50","align":"center","orderBy":"","name":"EDUCATION_LEVELName"},{"label":"职称","width":"50","align":"center","orderBy":"","name":"PROFESSIONAL_RANK"},{"label":"入党时间","width":"50","align":"center","orderBy":"","name":"JOIN_PARTY"},{"label":"参加工作时间","width":"50","align":"center","orderBy":"","name":"WORK_TIME"}]',
            '[{"name":"USER_ID","targetName":"USER_ID","targetNameName":"用户id","display":"id2","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"XM","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"SEXName","targetName":"XB","targetNameName":"性别","display":"性别","transform":"7","lookupType":"PLATFORM_SEX","filter":false},{"name":"NATION","targetName":"MZ","targetNameName":"民族","display":"民族","transform":"","lookupType":"","filter":false},{"name":"POST","targetName":"XRZW","targetNameName":"现任职务","display":"现任职务","transform":"","lookupType":"","filter":false},{"name":"BIRTHDAY","targetName":"WSNY","targetNameName":"出生日期","display":"出生日期","transform":"","lookupType":"","filter":false},{"name":"EDUCATION_LEVELName","targetName":"WHCD","targetNameName":"文化程度","display":"文化程度","transform":"7","lookupType":"PM_EDUCATION_LEVEL","filter":false},{"name":"PROFESSIONAL_RANK","targetName":"ZC","targetNameName":"职称","display":"职称","transform":"","lookupType":"","filter":false},{"name":"JOIN_PARTY","targetName":"RDNY","targetNameName":"入党时间","display":"入党时间","transform":"","lookupType":"","filter":false},{"name":"WORK_TIME","targetName":"CJGZNY","targetNameName":"参加工作时间","display":"参加工作时间","transform":"","lookupType":"","filter":false}]',
            '-1',
            '-1',
            null,
            this.getParamsValue,
            '',
            'pfbd-DYN_PFMD-XM',
            this.jsSuccess);

    },
    yes:function(index,layero){
        var selectRows=new Array();
        var iframeWin=layero.find('iframe')[0].contentWindow;
        var dicJqGrid=iframeWin.$("#dictionaryjqGrid");
        var selectIds=dicJqGrid.jqGrid("getGridParam","selarrrow");
        if(selectIds!=null&&selectIds.length>0){
            for(var i=0;i<selectIds.length;i++){
                var selectId=selectIds[i];
                var rowData=dicJqGrid.jqGrid("getRowData",selectId);
                selectRows.push(rowData);
                var dataRow={};
                for(var j=0;j<iframeWin.mapping.length;j++){
                    var mapVer=iframeWin.mapping[j];
                    dataRow[mapVer.targetName]=eval("rowData."+mapVer.name);
                }
                $('#DYN_PFMD').jqGrid('endEditCell');
                var newRowId=newRowStart_DYN_PFMD+GenNonDuplicateID();
                dataRow["id"]=newRowId;
                var parameters = {
                    rowID : newRowId,
                    initdata : dataRow,
                    position :"first",
                    useDefValues : true,
                    useFormatter : true,
                    addRowParams : {extraparam:{}}
                }
                $("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords").hide();
                $("#Pagertablea53bce435fb93a406f28dccf1e43b05d3ccc_left").css("display", "block");
                $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('addRow', parameters);
                newRowStart_DYN_PFMD++;
            }
        }
        layer.close(index);
    }





})});
tablea53bce435fb93a406f28dccf1e43b05d3cccBeforeEditCell.addEvent(function(rowid, cellname, value, iRow, iCol){
	if (!restoreRowData_tablea53bce435fb93a406f28dccf1e43b05d3ccc.hasOwnProperty(rowid)) {
		var rowData = $("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").jqGrid('getRowData', rowid);
		restoreRowData_tablea53bce435fb93a406f28dccf1e43b05d3ccc[rowid] = rowData;
	}
});
$("#tableToolbarButtone267aa35c4bb9d4e5a98fb3269d131fb9a4b").bind('click',function() {                                                                      	
	$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('endEditCell');         
	var ids = $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('getGridParam', 'selarrrow');                            
	var l = ids.length;                                                                   
	if (l == 0) {                                                                          
		layer.alert('请选择数据！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	}                                                                   
	if (l > 0) {                                                                   
		for (var i=0;i<l;i++) {                  
			$("#tablea53bce435fb93a406f28dccf1e43b05d3ccc").jqGrid('restoreRow', ids[i], function () {                  
				if (restoreRowData_tablea53bce435fb93a406f28dccf1e43b05d3ccc.hasOwnProperty(ids[i])) {                 
					$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('setRowData', ids[i], restoreRowData_tablea53bce435fb93a406f28dccf1e43b05d3ccc[ids[i]]);
					delete restoreRowData_tablea53bce435fb93a406f28dccf1e43b05d3ccc[ids[i]];
				}
			});
		}
	}
}                                                                                  
);
$('#tableToolbarButton4beb853ef2dc2949f69b1c10f6bfdc4a6486').click(function(){
	$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('endEditCell');
	if(uniqueColtablea53bce435fb93a406f28dccf1e43b05d3ccc != undefined && uniqueColtablea53bce435fb93a406f28dccf1e43b05d3ccc.length > 0){ 
		var msg = ''; 
		var rowIds = $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').getDataIDs();
		for (var i = 0; i < uniqueColtablea53bce435fb93a406f28dccf1e43b05d3ccc.length; i++) {
		    var colName = uniqueColtablea53bce435fb93a406f28dccf1e43b05d3ccc[i];
		    var colTitle = uniqueColTitletablea53bce435fb93a406f28dccf1e43b05d3ccc[i];
		    var arr = [];
			for (var j = 0; j < rowIds.length; j++) {;
			    var rowData = $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').getRowData(rowIds[j]);
				var colValue = eval('rowData.'+ colName);
				arr.push(colValue);
			};
			if( arr.length!=$.unique(arr).length ){
		    	msg += colTitle + ',';
		    }
		}
		if(msg.length > 0){
			msg = msg.substr(0,msg.length-1)
			layer.alert('保存失败！[' + msg + ']存在重复数据！', {
				icon : 7,
				area : [ '400px', '' ], //宽高
				closeBtn : 0
			});
			return false;
		}
	}
	var data = $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('getChangedCells');
	if(data && data.length > 0){
		for(var i = 0; i < data.length; i++){
			if(data[i].id.indexOf('new_row') > -1){
				data[i].id = '';
			}
		}		
	}
                                                                       
	if(!$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').validateJqGrid("validate")){
		return false;		
	}
	avicAjax.ajax({
		url : 'eform/bpmsEformDataOptionsController/operation/save',
		data : {
			data : JSON.stringify(data),
			viewId:'948e83e3939ae2490193ae813c674f07',
			version:'V1',
			tableId:'tablea53bce435fb93a406f28dccf1e43b05d3ccc'
		},
		type : 'post',
		dataType : 'json',
		success : function(r) {
                                                                               
			if (r.flag == 'success') {
				$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('setGridParam',{postData: {}}).trigger("reloadGrid");
				layer.msg('保存成功！');
			} else {
				layer.alert('保存失败！' + r.e, {
					icon : 7,
					area : [ '400px', '' ], //宽高
					closeBtn : 0
				});
			}
		}
	});
})
$("#tableToolbarButton119c591655c52544fec877766f719b7e28cb").bind('click',function() {   																				
	var bpmsDeleteRows = $('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('getGridParam', 'selarrrow');             
	var bpmsDeleteIds = [];  																				
	var l = bpmsDeleteRows.length; 																		
	if (l > 0) {																				
		for (; l--;) {																		
			if (bpmsDeleteRows[l].indexOf("new_row")!=-1){								
				$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid("delRowData", bpmsDeleteRows[l]);  				
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
				url: 'platform/eform/bpmsCRUDClient/deleteTableRow.json?tableName=DYN_PFMD&isbpm=N&dbid=948e83e3939ae2490193ae7c22a83d4d', 
				data: {ids : bpmsDeleteIds.join(','),viewid:'948e83e3939ae2490193ae813c674f07',deleteclass:''},								
				type: 'post',																	
				dataType: 'json',																
				success: function(r) {															
					if (r.flag == 'success') {$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').trigger('reloadGrid');layer.msg('删除成功！');;} else {	
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
$("#tableToolbarButtondba2d78c0138cd424d39c063d7f7bf2f1fe5").bind('click',function(){
	$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('endEditCell');
                                                                            
	var newRowId = newRowStart_tablea53bce435fb93a406f28dccf1e43b05d3ccc + newRowIndex_tablea53bce435fb93a406f28dccf1e43b05d3ccc;
	var parameters = {
		rowID : newRowId,
		initdata : defaultValuetablea53bce435fb93a406f28dccf1e43b05d3ccc,
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$("#tablea53bce435fb93a406f28dccf1e43b05d3cccnorecords").hide();
	$("#Pagertablea53bce435fb93a406f28dccf1e43b05d3ccc_left").css("display", "block");
	$('#tablea53bce435fb93a406f28dccf1e43b05d3ccc').jqGrid('addRow', parameters);
	newRowIndex_tablea53bce435fb93a406f28dccf1e43b05d3ccc++;  
                                                                                 
});
;});	 
