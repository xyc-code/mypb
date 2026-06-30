var attachBpmId;

$(function(){
	





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_POLITICAL"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#ZZLX').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["ZZLX"] != null && pageParams.formData["ZZLX"] != ''){    $('#ZZLX').val(pageParams.formData["ZZLX"]);}else if($('#ZZLX').attr("initValue")!=undefined&&$.trim($('#ZZLX').attr("initValue"))!=''){    $('#ZZLX').val($('#ZZLX').attr("initValue"));    pageParams.formData["ZZLX"] = $('#ZZLX').attr("initValue");}else{    }}});





$("#HUODRWJJCount").html((4000 - $('#HUODRWJJ').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatHUODRWJJLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#HUODONGMUBCount").html((4000 - $('#HUODONGMUB').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatHUODONGMUBLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#HUODONGZAITCount").html((4000 - $('#HUODONGZAIT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatHUODONGZAITLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#CESHICount").html((4000 - $('#CESHI').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatCESHILength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}


var DYN_LCBTabInitFlag = false;

					
var dataGridColModel_DYN_LCB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'里程碑计划', name: 'LCBJH', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'计划完成时间', name:'JHWCSJ', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                                ,{ label:'外键', name: 'WJ_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'活动时间', name:'PARTY_DATE', width:20,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                                ,{ label:'活动地点', name: 'PARTY_ADDRESS', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_LCB = '{}';


DYN_LCBUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                    };

if (window.DYN_LCB_comid == null || window.DYN_LCB_comid == undefined || window.DYN_LCB_comid == '') {
	window.DYN_LCB_comid = id;
}

$('#DYN_LCB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_LCB',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_LCB_comid,fkColName:"WJ_ID",formInfoId:"948e83e390a0fe270190a59b7a9f252e",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_LCB,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_LCBnorecords").hide();//隐藏提示信息
    $("#DYN_LCBPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_LCB').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_LCBnorecords").html() == null) {
            $('#DYN_LCB').parent().append("<div class='no_data' style='display: none' id='DYN_LCBnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_LCB').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_LCBnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_LCBnorecords img").css("width","120px");
        }else{
            $("#DYN_LCBnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_LCBnorecords").show();//显示提示信息
        $("#DYN_LCBPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_LCB').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_LCBnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_LCBnorecords img").css("width","120px");
	}else{
		$("#DYN_LCBnorecords img").css("width",(height/1.9)+"px");
	}
					},


beforeEditCell:function(){
	$(".datatable").not("#DYN_LCB").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_LCBReload = function(){
	var _isInvalid = true;
	$("#DYN_LCB").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_LCBTabInitFlag = true;
	$('#DYN_LCB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_LCBTabReload = function(forceFlag){
	if(!DYN_LCBTabInitFlag  || forceFlag){
		DYN_LCBReload();
	}

}


$('#DYN_LCB').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_LCB').append($('#DYN_LCBToolbar'));

    
    
    
    
    


            
DYN_LCBReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_LCB = 0;
var newRowStart_DYN_LCB = "new_row";


/**
 * 添加页面
 */
insertTableDYN_LCB = function(){
	$('#DYN_LCB').jqGrid('endEditCell');
	$("#DYN_LCBnorecords").hide();//隐藏提示信息
	$("#DYN_LCBPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_LCB + newRowIndex_DYN_LCB;
	var parameters = {
		rowID : newRowId,
		initdata : {
																												},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_LCB').jqGrid('addRow', parameters);
	newRowIndex_DYN_LCB++;  
};



/**
 * 删除
 */
deleteTableDYN_LCB = function(){
	var rows = [];
	rows = $('#DYN_LCB').jqGrid('getGridParam','selarrrow');


	$('#DYN_LCB').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_LCB').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_LCB',
					data: {ids : ids.join(','),formInfoId:'948e83e390a0fe270190a59b7a9f252e',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_LCB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_LCB').setGridWidth(700);
$('#DYN_LCB').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_LCB_insertBtn').bind('click',function(){
	insertTableDYN_LCB();
});

//按钮绑定事件
$('#DYN_LCB_deleteBtn').bind('click',function(){
	deleteTableDYN_LCB();
});

//自定义按钮绑定事件
																//列onchange事件
					

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_LCB_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_LCB_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_LCB_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_LCB_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_LCB_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_LCB_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_LCB_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_LCB_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_LCB_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_LCB_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_LCB_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_LCB_deleteBtn").css("display","none");
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
	return $('#DYN_LCB').validateJqGrid("validate");
});

		$('#DYN_LCB').validateJqGrid("addValidate","LCBJH","maxlength",{maxlength:255});
						$('#DYN_LCB').validateJqGrid("addValidate","WJ_ID","maxlength",{maxlength:50});
						$('#DYN_LCB').validateJqGrid("addValidate","PARTY_ADDRESS","maxlength",{maxlength:200});
		

var DYN_TTESTEXCWLTabInitFlag = false;

				
var dataGridColModel_DYN_TTESTEXCWL =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'字段2', name: 'DATA_2', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'字段1', name: 'DATA_1', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'外键', name: 'FK_COL_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'时间1', name:'TIME_1', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                  ]

var extraParamDYN_TTESTEXCWL = '{}';


DYN_TTESTEXCWLUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                };

if (window.DYN_TTESTEXCWL_comid == null || window.DYN_TTESTEXCWL_comid == undefined || window.DYN_TTESTEXCWL_comid == '') {
	window.DYN_TTESTEXCWL_comid = id;
}

$('#DYN_TTESTEXCWL').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_TTESTEXCWL',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_TTESTEXCWL_comid,fkColName:"FK_COL_ID",formInfoId:"948e83e390a0fe270190a59b7a9f252e",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_TTESTEXCWL,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_TTESTEXCWLnorecords").hide();//隐藏提示信息
    $("#DYN_TTESTEXCWLPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_TTESTEXCWL').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_TTESTEXCWLnorecords").html() == null) {
            $('#DYN_TTESTEXCWL').parent().append("<div class='no_data' style='display: none' id='DYN_TTESTEXCWLnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_TTESTEXCWL').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_TTESTEXCWLnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_TTESTEXCWLnorecords img").css("width","120px");
        }else{
            $("#DYN_TTESTEXCWLnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_TTESTEXCWLnorecords").show();//显示提示信息
        $("#DYN_TTESTEXCWLPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_TTESTEXCWL').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_TTESTEXCWLnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_TTESTEXCWLnorecords img").css("width","120px");
	}else{
		$("#DYN_TTESTEXCWLnorecords img").css("width",(height/1.9)+"px");
	}
				},


beforeEditCell:function(){
	$(".datatable").not("#DYN_TTESTEXCWL").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_TTESTEXCWLReload = function(){
	var _isInvalid = true;
	$("#DYN_TTESTEXCWL").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_TTESTEXCWLTabInitFlag = true;
	$('#DYN_TTESTEXCWL').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_TTESTEXCWLTabReload = function(forceFlag){
	if(!DYN_TTESTEXCWLTabInitFlag  || forceFlag){
		DYN_TTESTEXCWLReload();
	}

}


$('#DYN_TTESTEXCWL').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_TTESTEXCWL').append($('#DYN_TTESTEXCWLToolbar'));

    
    
    
    


            
DYN_TTESTEXCWLReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_TTESTEXCWL = 0;
var newRowStart_DYN_TTESTEXCWL = "new_row";


/**
 * 添加页面
 */
insertTableDYN_TTESTEXCWL = function(){
	$('#DYN_TTESTEXCWL').jqGrid('endEditCell');
	$("#DYN_TTESTEXCWLnorecords").hide();//隐藏提示信息
	$("#DYN_TTESTEXCWLPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_TTESTEXCWL + newRowIndex_DYN_TTESTEXCWL;
	var parameters = {
		rowID : newRowId,
		initdata : {
																							},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_TTESTEXCWL').jqGrid('addRow', parameters);
	newRowIndex_DYN_TTESTEXCWL++;  
};



/**
 * 删除
 */
deleteTableDYN_TTESTEXCWL = function(){
	var rows = [];
	rows = $('#DYN_TTESTEXCWL').jqGrid('getGridParam','selarrrow');


	$('#DYN_TTESTEXCWL').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_TTESTEXCWL').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_TTESTEXCWL',
					data: {ids : ids.join(','),formInfoId:'948e83e390a0fe270190a59b7a9f252e',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_TTESTEXCWL').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_TTESTEXCWL').setGridWidth(700);
$('#DYN_TTESTEXCWL').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_TTESTEXCWL_insertBtn').bind('click',function(){
	insertTableDYN_TTESTEXCWL();
});

//按钮绑定事件
$('#DYN_TTESTEXCWL_deleteBtn').bind('click',function(){
	deleteTableDYN_TTESTEXCWL();
});

//自定义按钮绑定事件
																//列onchange事件
				

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TTESTEXCWL_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TTESTEXCWL_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_TTESTEXCWL_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_TTESTEXCWL_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TTESTEXCWL_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_TTESTEXCWL_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_TTESTEXCWL_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_TTESTEXCWL_deleteBtn").css("display","none");
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
	return $('#DYN_TTESTEXCWL').validateJqGrid("validate");
});

		$('#DYN_TTESTEXCWL').validateJqGrid("addValidate","DATA_2","maxlength",{maxlength:50});
				$('#DYN_TTESTEXCWL').validateJqGrid("addValidate","DATA_1","maxlength",{maxlength:50});
				$('#DYN_TTESTEXCWL').validateJqGrid("addValidate","FK_COL_ID","maxlength",{maxlength:50});
				


	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");
    	});
	}, 1000);

	if(fkcol.length!=0 && fkvalue.length!=0){
     	if ($('#'+fkcol).length>0){
            var parentValue = $('#'+fkcol).val();
            if (parentValue=="" || parentValue == null || parentValue == undefined){
                $('#'+fkcol).val(fkvalue);
            }

     	}else{
     		$fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
     		$('#form').append($fk);
     	}
	}

	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	
		                 
    if(type === "tree" || type === "treeGrid") {
        $("#" + parentNodeId).attr("readonly", "readonly");

        if(pNodeIdValue != null && pNodeIdValue != "") {
            var parentValue =  $("#" + parentNodeId).val();
            if (parentValue=="" || parentValue == null || parentValue == undefined){
                $("#" + parentNodeId).val(pNodeIdValue);
            }
        }
    }

    $('.spinner input').trigger("blur.spinner");


    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

    if (formIsDirtyvalidateflag == "true"){
        var initsubTableData = {};
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
                initsubTableData[tableId] = data;
            }
        });

        $("#subTableData").val(JSON.stringify(initsubTableData));
        setTimeout(function(){
            var jsonData = serializeObjectForEform($('#form'),true);
            pageParams.originalData = jsonData;
        },1000)
    }
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

    if (isEmptyObject(jsonData)){
        if (formIsDirtyvalidateflag == "true"){
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

            var jsonDataEnds = serializeObjectForEform($('#form'),true);
            if (!isObjectValueEqual(pageParams.originalData,jsonDataEnds)){
                layer.confirm('表单数据未保存，确定要关闭吗？', {
                    icon: 3,
                    title: '提示',
                    area: ['400px', '']
                }, function(index) {
                    var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
                    parent.layer.close(index);
                });
            }else{
                var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
                parent.layer.close(index);
            }
        }else{
            var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
            parent.layer.close(index);
        }
    }else{

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
    }
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
    	
    }
    else {
    	
    }

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
	var tableId = $('#tableId').val();
	var url = 'platform/eform/bpmsCRUDClient/edit?tableId='+tableId+'&id='+id+'&formInfoId='+formInfoId;
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
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

                    if(typeof(callback) == "function"){
                        callback(result.id,aftercallback,result);
                    }else{
                        var jsonData = serializeObjectForEform($('#form'));
                        if(typeof(aftercallback) == "function"){
                            aftercallback(jsonData);
                        }

                        closeDialog(jsonData);
                    }

                    if(isInsert) {
                        
                    }
                    else {
                        
                    }
                    afterSaveEvent.exec(jsonData,result);
                    isInsert = false;
                    //刷新子表数据
                    $('table.datatable').not(".eform-self-form").each(function(){
                        var tableId = $(this).attr("id");
                        $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                    });
                    $("#page_saveButton").removeClass("disabled");
                }else{
                    layer.alert(result.msg, {
                        icon: 7
                    });
                    $("#page_saveButton").removeClass("disabled");
                }
            }
        });
    }
};

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function callback(id,aftercallback, result) {
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
            $(element).uploaderExt('doUpload', id, domId);
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
            $("#page_saveButton").removeClass("disabled");
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
