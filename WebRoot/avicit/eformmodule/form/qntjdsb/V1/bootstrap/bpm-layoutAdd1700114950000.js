
var attachBpmInfo = {
    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;

$(function(){
	

$("#APPLICATION_NUMBER").attr("initvalue",$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val());
if ($("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val()==''||$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val()==null||$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val()==undefined ){

window.APPLICATION_NUMBERautocode = new AutoCode('APPLICATION_NUMBER_CODE',"APPLICATION_NUMBER",false,"APPLICATION_NUMBER",undefined
	,function(){$("#APPLICATION_NUMBER").find("input").attr("style","");}

);


}else{
	$("#APPLICATION_NUMBER").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val();
		var flag = $("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#APPLICATION_NUMBER").attr("initvalue");
		var valuePure = $("#APPLICATION_NUMBER").find("#autoCode").val();
		if (flag != "disabled" && window.APPLICATION_NUMBERautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=APPLICATION_NUMBER',
					type: 'POST',
					async:false,
					data: {
						autoCode: "APPLICATION_NUMBER_CODE",
						comId: comId,
						autoCodeValue: value,
						tablename:window.pageParams.tableName,
						tableId:dbtableid,
						idmap:idmap,
						datasourceId:window.pageParams.datasourceId,
						funcpara:undefined||"",
						valuepure:oldValue
					},
					dataType: 'json',
					success: function (backData, status) {
						if (backData.errorInfo){
							layer.alert(backData.errorInfo, {
								title: "提示",
								icon: 7
							});
							codeFlag = false;
						}else{
							//继续ajax请求，根据返回的code查询业务表，判断编码是否已经存在，如果存在，重新生成新的
							var validateCode = backData.value;
							$.ajax({
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=APPLICATION_NUMBER',
								type: 'POST',
								async:false,
								data: {
									autoCode: "APPLICATION_NUMBER_CODE",
									comId: comId,
									autoCodeValue: value,
									validateCode:validateCode,
									tablename:window.pageParams.tableName,
									tableId:dbtableid,
									idmap:idmap,
									datasourceId:window.pageParams.datasourceId,
									funcpara:undefined||"",
									valuepure:oldValue
								},
								dataType: 'json',
								success: function (result) {
									if(result.flag == "success"){
										formData["APPLICATION_NUMBER"] = result.value;
										$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val(result.value);
										$("#APPLICATION_NUMBER").attr("initvalue",result.value);
									}else{
										layer.alert("自动编码保存错误！", {
											title: "提示",
											icon: 7
										});
										codeFlag = false;
									}
								},
								error: function(xhr,state,errorThrown){
									layer.alert("自动编码保存错误！", {
										title: "提示",
										icon: 7
									});
									codeFlag = false;
								}
							});
						
						}
					},
					error: function(xhr,state,errorThrown){
						layer.alert("自动编码保存错误！", {
							title: "提示",
							icon: 7
						});
						codeFlag = false;
					}
				});
			}else{
				delete formData["APPLICATION_NUMBER"];
				$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val();
		var require = $("#APPLICATION_NUMBER").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "APPLICATION_NUMBER"){
		return true;
	}
	var idJson = $.parseJSON(idmap);
	var comId = id;
	if (idJson.hasOwnProperty("")){
		comId = idJson[""];
	}

	if(!operability){
		setTimeout(function(){
			$("#" + tagId).find("input").attr("readonly");
			$("#" + tagId).find("#autoCode_edit").unbind("click");
		}, "500");
	}else{
			}
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "APPLICATION_NUMBER"){
		return;
	}
	if(operability){
		$("#APPLICATION_NUMBER").show();
	}else{
		$("#APPLICATION_NUMBER").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "APPLICATION_NUMBER"){
		return;
	}
	if (required){
		$("#APPLICATION_NUMBER").attr("required","required");
	}
});

    $("html").height('100%')
$("body").height('100%')





$('#APPLICATION_UNITName').on(' focus',function(e){
    APPLICATION_UNITClickFun();
    $(this).blur();
});

function APPLICATION_UNITClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'APPLICATION_UNIT',textFiled:'APPLICATION_UNITName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#APPLICATION_UNITButton').off('click');



        if ($('#APPLICATION_UNIT').val() == null||$('#APPLICATION_UNIT').val()==''||$('#APPLICATION_UNIT').val()==undefined) {
$("#APPLICATION_UNIT").val(session.deptId);

}
if ($('#APPLICATION_UNITName').val() == null||$('#APPLICATION_UNITName').val()==''||$('#APPLICATION_UNITName').val()==undefined) {
$("#APPLICATION_UNITName").val(session.deptName);
}







$('#ATTR1Name').on(' focus',function(e){

ATTR1ClickFun();
this.blur();
});

function ATTR1ClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'ATTR1',textFiled:'ATTR1Name',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#ATTR1Button').off('click');

if ($('#ATTR1').val() == null||$('#ATTR1').val()==''||$('#ATTR1').val()==undefined) {
    $("#ATTR1").val(session.userId);

    var $li = $('<li style="width:auto;float: left;padding-left: 5px;height:18px"></li>');
    var $a = $('<a style="cursor:pointer" tagid="'+session.userId+'">'+session.userName+'</a>').click(function(e){
    var id = $(this).attr("tagid");
    var url = "";
    var chuantouwidth = ""||"100%";
    var chuantouheight = ""||"100%";
    if (url.indexOf("?")>0){
    url = url + "&id=";
    }else{
    url = url + "?id=";
    }
    layer.open({
    type: 2,
    title: '用户详细',
    skin: 'bs-modal',
    shade:0.3,
    shadeClose : true,
    area: [chuantouwidth, chuantouheight],
    maxmin: false,
    content: url + id
    });
    return false;
    });
        $li.append($a);
    $('#ATTR1AreaName').append($li);
}
if ($('#ATTR1Name').val() == null||$('#ATTR1Name').val()==''||$('#ATTR1Name').val()==undefined) {
$("#ATTR1Name").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var ATTR1_colSecret = $('#');
    var secretLevelValue;
    if(ATTR1_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var ATTR1_selectedList = $('#ATTR1').val();
    var flag = true;
    if(secretLevelValue&&ATTR1_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':ATTR1_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "申请人" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});




    var sid = "";
$('#customDialog').on('click', function () {
 var selectDialog = openDialog({
		type : 'selectWindow',
		title : "选择突击队名称",
		url : "platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/toDynYouthRecordManage",
		width : "90%",
		height : "80%",
		opentype : 2,
		shade : true,
		submit : function(index, layer) {
			var iframeWin = layer.find('iframe')[0].contentWindow;
			var objData = iframeWin.rowObjData;
 sid = objData;
 $('#DYN_SUB_ZXBASB_1').jqGrid('clearGridData');
 var dto ={} ;
 $.ajax({
	 url:"platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/initDetailFormData?id="+objData,
	 dataType:"json",
	 type:"GET",
	 async:false,
	 success: function (r) {
 dto = r.dynYouthRecordDTO;
	 }
	 }) 
 $('#customDialog').val(dto.commandoesName);
 $('#COMMANDOES_DATE').val(dto.commandoesDate); 
 getChild(objData) 
		}
	});
 
 
		});
$('#customDialog').attr('readonly',true);

function getChild(id){
 $.ajax({
	 url:"platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/QueryChild?id="+id,
	 dataType:"json",
	 type:"GET",
	 async:false,
	 success: function (r) {
 if(r.flag == "success"){
 addRow(r.dtoList);
 addRow(r.dtoListChild);
 }

	 }
	 });


}
function getformt(str){
if(str == "队长"){
 return 0;
 }else{
 return 1;
 }
}

function addRow(row){
 console.log(row)
for(var i = 0;i<row.length;i++){					
$("#DYN_SUB_ZXBASB_1norecords").hide();//隐藏提示信息
	var newRowId = newRowStart_DYN_SUB_ZXBASB_1 + newRowIndex_DYN_SUB_ZXBASB_1;
	var parameters = {
		rowID : newRowId,
		initdata : {
 TJD_DUIYUANNAME:row[i].tjdDuiyuanname,
 TJD_DUIYUANNAMEName:row[i].tjdDuiyuanname,
 TJD_DUIZHANGNAME:getformt(row[i].tjdDuizhangname), 
 TJD_AGE:row[i].tjdAge,
 TJD_DANWEI:row[i].tjdDanwei,
 TJD_DANWEIName:row[i].tjdDanwei, 
 TJD_ZHIWU:row[i].tjdZhiwu 																											 
 },
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	};
	$('#DYN_SUB_ZXBASB_1').jqGrid('addRow', parameters);
	newRowIndex_DYN_SUB_ZXBASB_1++; 
}

}
// $("#page_saveButton").on("click",function(){
// var dat = $('#DYN_SUB_ZXBASB_1').jqGrid('getRowData');
// $.ajax({
// url:'platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/sonWeekly',
// type:"POST",
// async:false,
// data:{
// json:sid,
// lcid:pageParams.id,
// }
// })
// })


var DYN_SUB_ZXBASB_1TabInitFlag = false;

						var DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect = {"0":"队长","1":"队员"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
									
var dataGridColModel_DYN_SUB_ZXBASB_1 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'突击队队员姓名Id', name: 'TJD_DUIYUANNAME', width: 75, hidden:true}
		            ,{ label:'突击队队员姓名', name:'TJD_DUIYUANNAMEName', width:50,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	     			  			  sortable:false,
			  		  		  	     editoptions:{	  	     custom_element:userElem, custom_value:userValue, forId:'TJD_DUIYUANNAME',viewScope:'currentOrg',defaultDeptCol:''}}
		                       	 ,{ label:'职务Id', name:'TJD_DUIZHANGNAME', width:75, hidden:true}
   	     ,{ label:'职务', name:'TJD_DUIZHANGNAMEName', width: 50,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_SUB_ZXBASB_1TJD_DUIZHANGNAME
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'TJD_DUIZHANGNAME',
   	     value: function(){return DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect;}}
	  }
               		  ,{label:'年龄', name:'TJD_AGE', width:50,
		            editable : false,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:50,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'所在单位Id', name: 'TJD_DANWEI', width: 75, hidden:true}
		            ,{ label:'所在单位', name:'TJD_DANWEIName', width:50,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                      	     editoptions:{		  	     custom_element:deptElem, custom_value:deptValue, forId:'TJD_DANWEI',viewScope:'currentOrg'}}
	  
                       ,{ label:'任务内容', name: 'TJD_ZHIWU', width:50,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'预留字段', name: 'TJD_FILED_USERNAME', width:50,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'预留字段', name: 'ATTR1', width:20,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_SUB_ZXBASB_1 = '{}';


DYN_SUB_ZXBASB_1UpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                    if (typeof colname=="undefined" || colname == "" || colname === "TJD_AGE" ){
				                }
                        };

if (window.DYN_SUB_ZXBASB_1_comid == null || window.DYN_SUB_ZXBASB_1_comid == undefined || window.DYN_SUB_ZXBASB_1_comid == '') {
	window.DYN_SUB_ZXBASB_1_comid = id;
}

$('#DYN_SUB_ZXBASB_1').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_SUB_ZXBASB_1',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_SUB_ZXBASB_1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"2c908c1d894ded3801894e090c780ae1",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_SUB_ZXBASB_1,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
		required:"required",
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	rownumbers: true,
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	pager:DYN_SUB_ZXBASB_1Pager,
	hasColSet:false,
	hasTabExport:false,
    rowNum: 20,
    rowList:[20, 50, 100, 200, 500],

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_SUB_ZXBASB_1norecords").hide();//隐藏提示信息
    $("#DYN_SUB_ZXBASB_1Pager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_SUB_ZXBASB_1').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_SUB_ZXBASB_1norecords").html() == null) {
            $('#DYN_SUB_ZXBASB_1').parent().append("<div class='no_data' style='display: none' id='DYN_SUB_ZXBASB_1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_SUB_ZXBASB_1').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_SUB_ZXBASB_1norecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_SUB_ZXBASB_1norecords img").css("width","120px");
        }else{
            $("#DYN_SUB_ZXBASB_1norecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_SUB_ZXBASB_1norecords").show();//显示提示信息
        $("#DYN_SUB_ZXBASB_1Pager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_SUB_ZXBASB_1').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_SUB_ZXBASB_1norecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_SUB_ZXBASB_1norecords img").css("width","120px");
	}else{
		$("#DYN_SUB_ZXBASB_1norecords img").css("width",(height/1.9)+"px");
	}
											},


beforeEditCell:function(){
	$(".datatable").not("#DYN_SUB_ZXBASB_1").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_SUB_ZXBASB_1Reload = function(){
	var _isInvalid = true;
	$("#DYN_SUB_ZXBASB_1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_SUB_ZXBASB_1TabInitFlag = true;
	$('#DYN_SUB_ZXBASB_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_SUB_ZXBASB_1TabReload = function(forceFlag){
	if(!DYN_SUB_ZXBASB_1TabInitFlag  || forceFlag){
		DYN_SUB_ZXBASB_1Reload();
	}

}


$('#DYN_SUB_ZXBASB_1').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_SUB_ZXBASB_1').append($('#DYN_SUB_ZXBASB_1Toolbar'));

    
    
function formatDYN_SUB_ZXBASB_1TJD_DUIZHANGNAME(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    


                    
DYN_SUB_ZXBASB_1Reload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_SUB_ZXBASB_1 = 0;
var newRowStart_DYN_SUB_ZXBASB_1 = "new_row";










$('#DYN_SUB_ZXBASB_1').setGridWidth(700);
$('#DYN_SUB_ZXBASB_1').jqGrid('resizeGrid');





//自定义按钮绑定事件
																//列onchange事件
								

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZXBASB_1_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZXBASB_1_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_ZXBASB_1_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_SUB_ZXBASB_1_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZXBASB_1_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_SUB_ZXBASB_1_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_SUB_ZXBASB_1').validateJqGrid("validate");
});

		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIYUANNAME","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIZHANGNAME","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_AGE","maxlength",{maxlength:38});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DANWEI","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_ZHIWU","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_FILED_USERNAME","maxlength",{maxlength:50});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","ATTR1","maxlength",{maxlength:50});
		




            $('#COMMANDOES_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


                
            $('#COMMANDOES_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                



            $('#COMMANDOES_TASK_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#COMMANDOES_TASK_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#COMMANDOES_TASK_DATE').datepicker('show');
			 $('#COMMANDOES_TASK_DATE').datepicker().trigger('click');
					
		});
        


beforeSaveEvent.addBeforeSaveEvent(function(formData){
formData["EXPECTED_INCOME"]= window.EXPECTED_INCOME.html();
});

setTimeout(function(){
window.EXPECTED_INCOME = KindEditor.create('#EXPECTED_INCOME',{
items : [
                                'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
                                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                'justifyfull', 'insertorderedlist', 'insertunorderedlist',  'selectall','/', 'image'
                                ,'|','formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat',  'hr',
                                 '|', 'about'
                        ]
,uploadJson : 'platform/eform/rtfupload/upload/' + id + '/' + 1
,allowImageRemote: true
,allowImageUpload: true
 ,height: "250px"
,resizeType:0
,filterMode:false
,afterCreate : function() {
	    if(this.html() == ''){
    	this.html("（预计4000字）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（预计4000字）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（预计4000字）'){
			this.html("");
			$($("iframe")[0]).contents().find(".ke-content").css("color","black");
			}
		}
		});

$("#EXPECTED_INCOME").parent().children(".ke-container").find(".ke-statusbar").css("display","none");

jQuery(".ke-container").css("width","100%");
$("#EXPECTED_INCOME").parent().children(".ke-container").find(".ke-edit").css("height","250px");
$("#EXPECTED_INCOME").parent().children(".ke-container").find(".ke-edit-iframe").css("height","250px");
	},500);

workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "EXPECTED_INCOME"){
		return;
	}


setTimeout(function(){
var p1 = $("#EXPECTED_INCOME").parent().children(".ke-container");
	if(operability){
		//可编辑
		p1.find(".ke-toolbar").css("display","block");
		p1.css("border","1px solid #CCCCCC");
		window.EXPECTED_INCOME.readonly(false);
	}else{
	    //不可编辑

	    window.EXPECTED_INCOME.readonly();

		p1.find(".ke-toolbar").css("display","none");
		p1.css("border","0");
	}
},800);
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){

if (tagId != "EXPECTED_INCOME"){
		return;
	}
    $("#EXPECTED_INCOME").hide();
	var p1 = $("#"+tagId).parent().children(".ke-container");
	if(operability){
		//可显示
		p1.css("display","inline-block");
	}else{
		//不可显示
		p1.css("display","none");
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "EXPECTED_INCOME"){
		return;
	}
	if (required){
		beforeSaveEvent.addBeforeSaveEvent(function(formData){
			var textCount=window.EXPECTED_INCOME.count('text');
			if(textCount==0)
			{
				layer.alert(obj.tagName+"富文本内容不能为空！", {
					title: "提示",
					icon: 7
				});
				return false;
			}
		});
	}
});





$('#COMMANDOES_POSENName').on(' focus',function(e){

COMMANDOES_POSENClickFun();
this.blur();
});

function COMMANDOES_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'COMMANDOES_POSEN',textFiled:'COMMANDOES_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#COMMANDOES_POSENButton').off('click');

if ($('#COMMANDOES_POSEN').val() == null||$('#COMMANDOES_POSEN').val()==''||$('#COMMANDOES_POSEN').val()==undefined) {
    $("#COMMANDOES_POSEN").val(session.userId);

    var $li = $('<li style="width:auto;float: left;padding-left: 5px;height:18px"></li>');
    var $a = $('<a style="cursor:pointer" tagid="'+session.userId+'">'+session.userName+'</a>').click(function(e){
    var id = $(this).attr("tagid");
    var url = "";
    var chuantouwidth = ""||"100%";
    var chuantouheight = ""||"100%";
    if (url.indexOf("?")>0){
    url = url + "&id=";
    }else{
    url = url + "?id=";
    }
    layer.open({
    type: 2,
    title: '用户详细',
    skin: 'bs-modal',
    shade:0.3,
    shadeClose : true,
    area: [chuantouwidth, chuantouheight],
    maxmin: false,
    content: url + id
    });
    return false;
    });
        $li.append($a);
    $('#COMMANDOES_POSENAreaName').append($li);
}
if ($('#COMMANDOES_POSENName').val() == null||$('#COMMANDOES_POSENName').val()==''||$('#COMMANDOES_POSENName').val()==undefined) {
$("#COMMANDOES_POSENName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var COMMANDOES_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(COMMANDOES_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var COMMANDOES_POSEN_selectedList = $('#COMMANDOES_POSEN').val();
    var flag = true;
    if(secretLevelValue&&COMMANDOES_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':COMMANDOES_POSEN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "联系人姓名" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});






if ($('#COMMANDOES_PXQK').val() == null||$('#COMMANDOES_PXQK').val()==''||$('#COMMANDOES_PXQK').val()==undefined)
$('#COMMANDOES_PXQK').val("待定");


//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "COMMANDOES_CONTENT"){
        return true;
    }
    if(operability){
                        var $tag = $('#COMMANDOES_CONTENT1');
            $tag.removeAttr("disabled");
                                var $tag = $('#COMMANDOES_CONTENT2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "COMMANDOES_CONTENT"){
        return;
    }

    if(operability){
        $("#COMMANDOES_CONTENT").show();
    }else{
        $("#COMMANDOES_CONTENT").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "COMMANDOES_CONTENT"){
        return;
    }

    if (required){
        $('input[name="COMMANDOES_CONTENT"]').attr("required","required");
    }else{
        $('input[name="COMMANDOES_CONTENT"]').removeAttr("required","required");
    }
});


	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");
    	});
	}, 1000);

	if(fkcol.length!=0 && fkvalue.length!=0){
     	if ($('#'+fkcol).length>0){
     		$('#'+fkcol).val(fkvalue);
     	}else{
     		$fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
     		$('#form').append($fk);
     	}
	}

	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	
		                 
    if(type === "tree") {
        $("#" + parentNodeId).attr("readonly", "readonly");

        if(pNodeIdValue != null && pNodeIdValue != "") {
            $("#" + parentNodeId).val(pNodeIdValue);
        }
    }

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});

var subTableData = {};

function beforeEvent(){
	
};

function afterEvent(){
	
};

     	        	    
function getLength(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 3;
    }
    return realLength;
};

function closeDialog(jsonData){
	if(type === "tree") {
		var hideRMenu = parent["hideRMenu" + pgrid];
		if(typeof(hideRMenu) == "function") {
			hideRMenu();
		}
    }else{
    	if (pgrid != ""){
			if (typeof parent[pgrid+'Reload'] == 'function')
			parent[pgrid+'Reload'].call(this,null,jsonData);
		}
    }

	var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
    parent.layer.close(index);
};

function saveForm(aftercallback) {
    $("#page_saveButton").addClass("disabled");
	//验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
         $("#page_saveButton").removeClass("disabled");
         return false;
    }

    subTableData = {};
    $('table.datatable').not(".eform-self-form").each(function(){
        if ($(this).parents(".eform-self-form").length>0){
            return;
        }
		var tableId = $(this).attr("id");
		$('#' + tableId).jqGrid('endEditCell');
		var data = $('#' + tableId).jqGrid('getChangedCells');
		if(data && data.length > 0){
			for(var i = 0; i < data.length; i++){
				if(data[i].id.indexOf("new_row") > -1){
					data[i].id = '';
				}
			}
			subTableData[tableId] = data;
		}
	});

	$("#subTableData").val(JSON.stringify(subTableData));

    var jsonData = serializeObjectForEform($('#form'),true,'.eform-self-form');
	 if (!beforeSaveEvent.exec(jsonData)){
        $("#page_saveButton").removeClass("disabled");
		return false;
	}

    if(isInsert) {
    	var obj ={DYN_SUB_ZXBASB_1:$('#DYN_SUB_ZXBASB_1').jqGrid('getRowData')}
jsonData.subTableData = JSON.stringify(obj);
    }
    else {
    	
    }

    var processDef = new FlowListEditorBySec("qntjdsb",JSON.stringify(jsonData));
    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        FlowListEditorBySec.prototype.doStart = function(pdId){
            var tableId = $('#tableId').val();
            var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=2c908c1d894ded3801894e090c780ae1&tableId='+tableId+'&defineId='+pdId+'&formcode=qntjdsb';
            avicAjax.ajax({
                url: url,
                data : jsonData,
                type : 'post',
                dataType : 'json',
                success : function(result){
                    if (result.success){
                        if(type === "tree") {
                            var treeX = parent.$.fn.zTree.getZTreeObj(pgrid);
                            var pNode = treeX.getNodeByParam("id", pNodeIdValue, null);
                            if(pNodeIdValue != null && pNodeIdValue != "") {
                                if (!pNode.isParent)
                                    pNode.isParent = "true";
                                treeX.reAsyncChildNodes(pNode, "refresh");
                            }
                        }

                        if(isInsert) {
                            
                        }else {
                            
                        }
                        afterSaveEvent.exec(jsonData,result);

                        if(typeof(callback) == "function"){
                            callback(result,aftercallback);
                        }else{
                            var jsonData = serializeObjectForEform($('#form'));
                            if(typeof(aftercallback) == "function"){
                                aftercallback(jsonData);
                            }
                            if (flowUtils.notNull(result.startResult)){
                                var taskTitle = result.startResult.taskTitle;
                                var taskUrl = result.startResult.taskUrl;
                                parent.flowUtils.openOnDialog(taskUrl,taskTitle);
                            }
                            closeDialog(jsonData);
                        }


                    }else{
                        layer.alert(result.msg, {
                            icon: 7
                        });
                        $("#page_saveButton").removeClass("disabled");
                    }
                }
            });
        };
        processDef.start();
    }
};

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function callback(result,aftercallback) {
    globalUploadNum = 0;
    globalUploadNumTemp = 0;
    $('.attachment_div').each(function (index, element) {
        var domId = $(element).attr("id");
        if(attachBpmId){
            var finalAttachBpmId = "";
            if(attachBpmId.indexOf("urlParam.") == -1){
                finalAttachBpmId = eval("result.data.saveMap.main." + attachBpmId);
            }else{
                finalAttachBpmId = eval(attachBpmId);
            }
            $(element).uploaderExt('doUpload', finalAttachBpmId, domId);
        }else{
            $(element).uploaderExt('doUpload', result.id, domId);
        }
        globalUploadNum++;
    });

    var intervalId = setInterval(function () {
        if (globalUploadNumTemp < 0){
            clearInterval(intervalId);
        }
        if (globalUploadNumTemp == globalUploadNum) {
        	var jsonData = serializeObjectForEform($('#form'));
            if(globalUploadNum != 0) {
                //top.layer.msg('附件上传成功！',{icon: 1});
            }
            layer.msg('保存成功！',{icon: 1});
            if(typeof(aftercallback) == "function"){
                aftercallback(jsonData);
            }

            if (flowUtils.notNull(result.startResult)){
                var taskTitle = result.startResult.taskTitle;
                var taskUrl = result.startResult.taskUrl;
                parent.flowUtils.openOnDialog(taskUrl,taskTitle);
            }
            closeDialog(jsonData);

            clearInterval(intervalId);
        }
    }, 500);
}
//附件上传完后执行
function afterUploadEvent(){
    globalUploadNumTemp++;
}

//附件上传失败后执行
function uploadError(file, reason){
globalUploadNumTemp = globalUploadNumTemp - 10000;
layer.msg('附件上传失败！', {icon: 2});
}
