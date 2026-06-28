var subTableData = {};
var layerflag = true;

var attachBpmInfo = {

    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;
function getLength(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 3;
    }
    return realLength;
};   

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function attachcallback(id,callback,result) {
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

    });

    var intervalId = setInterval(function () {
        if (globalUploadNumTemp < 0){
            clearInterval(intervalId);
        }
        if (globalUploadNumTemp == globalUploadNum) {
            clearInterval(intervalId);
            //afterEvent();
            if (layerflag && globalUploadNum != 0){
                //layer.msg('附件上传成功！', {icon: 1});
            }
                        pageParams.isInsert = false;

            if (result.startResult){
                callback(result.startResult);
            }else{
                callback();
            }

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

/**
 * 业务操作对象，需继承基础对象，重新必要的业务操作方法
 */
function EformFlow() {
	DefaultForm.call(this);
};
EformFlow.prototype = new DefaultForm();
/**
 * formcode
 */
EformFlow.prototype.formcode = "1";
EformFlow.prototype.isAutoSave = true;
/**
 * 初始化表单数据
 */
EformFlow.prototype.initFormData = function() {
	var _self = this;
};

EformFlow.prototype.afterControlFormInput = function () {
    //ie9 disabled元素样式不生效
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
        $("input[disabled='disabled']").each(function() {
            //$(this).removeAttr("disabled");
            $(this).off("focus").off("keyup");
            $(this).click(function(){return false;});
            $(this).attr("readonly", "readonly");
        });

        $(".select2-hidden-accessible[disabled]").each(function() {
            $(this).prop("disabled", true);
            $(this).select2();
        });
    }
}
/**
 * 启动流程
 * 
 * @param defineId
 * @param callback
 */
EformFlow.prototype.start = function(defineId, callback) {
    //遮罩
    var maskId = layer.load();
	//验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
//去掉遮罩
layer.close(maskId);
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
        //去掉遮罩
        layer.close(maskId);
		return false;
	}

    if(pageParams.isInsert) {
        
    }
    else {
        
    }

	var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=402811817fd0a4d7017fd3bdd4d80482&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
    beforeSaveEvent.changeData(jsonData);
    avicAjax.ajax({
        url: url,
        data : jsonData,
        type : 'post',
        dataType : 'json',
        success : function(result){
            if (result.success){
                //遮罩
                maskId = layer.load();
                if(typeof(attachcallback) == "function"){
                    layerflag =false;
                    attachcallback(result.id,callback,result);
                }
                pageParams.entryId = result.startResult.entryId;

                afterSaveEvent.exec(jsonData,result);
                if (result.hasOwnProperty("data")){
                	idmap = JSON.stringify(result.data.idMap);
                }
                //刷新子表数据
                $('table.datatable').not(".eform-self-form").each(function(){
                    var tableId = $(this).attr("id");
                    $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                });

            }else{
                layer.alert(result.msg, {
                    icon: 7
                });
            }
        }
    });
};
/**
 * 自定义元素控制
 **/
//只读控制
EformFlow.prototype.controlSelfElement = function(tagId, operability){

	workflowControl.exec(tagId, operability);
};

//显隐控制
EformFlow.prototype.controlSelfElementForAccess = function(tagId, operability){

    workflowControlForAccess.exec(tagId, operability);
};

//子表按钮显隐控制
EformFlow.prototype.controlSubTableButtonForAccess = function(tagId, operability){
    workflowControlSubTableButtonForAccess.exec(tagId, operability);
};

//必填控制
EformFlow.prototype.controlSelfElementForRequired = function(tagId, operability,obj){

    workflowControlForRequired.exec(tagId, operability,obj);
};

//流程控制-多附件必填
EformFlow.prototype.setAttachRequired = function(tagId,required,obj){
    workflowControlForAttachRequired.exec(tagId,required,obj);
};

//多附件增删控制
EformFlow.prototype.setAttachCanAddOrDel = function(tagId,operability,obj){
    attachBpmInfo.delOrAdd[tagId] = {tagId:tagId,operability:operability,obj:obj};
    if(operability) {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });

        $('#' + tagId).find('.attachment_tableDel').show();
        $('#' + tagId).find('div.uploader-file-item').off('mouseover');
    }else {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });

        $('#' + tagId).find('.attachment_tableDel').hide();
        $('#' + tagId).find('div.uploader-file-item').on('mouseover', function () {
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }
};


//多附件密级可编辑
DefaultForm.prototype.setAttachSecretLevelModify = function(tagId,modify,obj){
    attachBpmInfo.editSecret[tagId] = {tagId:tagId,modify:modify,obj:obj};
    var uploadJqgrid = $("#"+tagId+ "_attachmentTable");
    if(modify){
        $("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
            $(e).removeAttr("disabled");
        });
        if(uploadJqgrid){
            $("[aria-describedby='"+tagId+"_attachmentTable_attachmentsecretName']").removeClass("not-editable-cell");
        }
    }else{
        $("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
            $(e).attr("disabled","disabled");
        });
        if(uploadJqgrid){
            var rowIds = uploadJqgrid.jqGrid("getDataIDs");
            for(var i = 0; i< rowIds.length; i++){
                var rowId = rowIds[i];
                uploadJqgrid.jqGrid('setCell', rowId, "attachmentsecretName", '', 'not-editable-cell');
            }
        }
    }
}



/**
* 控制附件
*/
EformFlow.prototype.setAttachMagic = function(attachMagic) {
    //当流程节点配置是否允许附件功能时候，隐藏上传、下载按钮等
    if(attachMagic) {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });

        $('div.uploader-file-item').off('mouseover');
    }
    else {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });

        $('div.uploader-file-item').on('mouseover', function () {
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        })
    }



};
/**
 * 更新数据
 * 
 * @param callback
 */
EformFlow.prototype.save = function(callback) {

    //验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
         return false;
    }

    subTableData = {};
    $('table.datatable').not(".eform-self-form").each(function(){
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
        return false;
    }

    
    var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=402811817fd0a4d7017fd3bdd4d80482&tableId='+tableId+'&id='+pageParams.id;
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        avicAjax.ajax({
            url: url,
            data : jsonData,
            type : 'post',
            dataType : 'json',
            success : function(result){
                if (result.success){
                    if(typeof(attachcallback) == "function"){
                        attachcallback(result.id,callback,result);
                    }
                    afterSaveEvent.exec(jsonData,result);
                    if (result.hasOwnProperty("data")){
                        idmap = JSON.stringify(result.data.idMap);
                    }
                    //刷新子表数据
                    $('table.datatable').not(".eform-self-form").each(function(){
                        var tableId = $(this).attr("id");
                        $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                    });
                }else{
                    layer.alert(result.msg, {
                        icon: 7
                    });
                }
            }
        });
    }
};

     	             	         
$(function(){
	//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "DATA_2"){
        return true;
    }
    if(operability){
                        var $tag = $('#DATA_21');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "DATA_2"){
        return;
    }

    if(operability){
        $("#DATA_2").show();
    }else{
        $("#DATA_2").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "DATA_2"){
        return;
    }

    if (required){
        $('input[name="DATA_2"]').attr("required","required");
    }else{
        $('input[name="DATA_2"]').removeAttr("required","required");
    }
});
            $('input[name="DATA_2"]').on('click',function(e){
            $("#dyn11").show();
        });
        
var DYN_SUB_1_1TabInitFlag = false;

		
var dataGridColModel_DYN_SUB_1_1 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'子表字段1', name: 'DATA_1', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_SUB_1_1 = '{}';


DYN_SUB_1_1UpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
        };

if (window.DYN_SUB_1_1_comid == null || window.DYN_SUB_1_1_comid == undefined || window.DYN_SUB_1_1_comid == '') {
	window.DYN_SUB_1_1_comid = id;
}

$('#DYN_SUB_1_1').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_SUB_1_1',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_SUB_1_1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817fd0a4d7017fd3bdd4d80482",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_SUB_1_1,
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
    $("#DYN_SUB_1_1norecords").hide();//隐藏提示信息
    $("#DYN_SUB_1_1Pager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_SUB_1_1').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_SUB_1_1norecords").html() == null) {
            $('#DYN_SUB_1_1').parent().append("<div class='no_data' style='display: none' id='DYN_SUB_1_1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_SUB_1_1').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_SUB_1_1norecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_SUB_1_1norecords img").css("width","120px");
        }else{
            $("#DYN_SUB_1_1norecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_SUB_1_1norecords").show();//显示提示信息
        $("#DYN_SUB_1_1Pager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_SUB_1_1').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_SUB_1_1norecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_SUB_1_1norecords img").css("width","120px");
	}else{
		$("#DYN_SUB_1_1norecords img").css("width",(height/1.9)+"px");
	}
		},


beforeEditCell:function(){
	$(".datatable").not("#DYN_SUB_1_1").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_SUB_1_1Reload = function(){
	var _isInvalid = true;
	$("#DYN_SUB_1_1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_SUB_1_1TabInitFlag = true;
	$('#DYN_SUB_1_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_SUB_1_1TabReload = function(forceFlag){
	if(!DYN_SUB_1_1TabInitFlag  || forceFlag){
		DYN_SUB_1_1Reload();
	}

}


$('#DYN_SUB_1_1').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_SUB_1_1').append($('#DYN_SUB_1_1Toolbar'));

    
    


        
DYN_SUB_1_1Reload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_SUB_1_1 = 0;
var newRowStart_DYN_SUB_1_1 = "new_row";


/**
 * 添加页面
 */
insertTableDYN_SUB_1_1 = function(){
	$('#DYN_SUB_1_1').jqGrid('endEditCell');
	$("#DYN_SUB_1_1norecords").hide();//隐藏提示信息
	$("#DYN_SUB_1_1Pager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_SUB_1_1 + newRowIndex_DYN_SUB_1_1;
	var parameters = {
		rowID : newRowId,
		initdata : {
													},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_SUB_1_1').jqGrid('addRow', parameters);
	newRowIndex_DYN_SUB_1_1++;  
};



/**
 * 删除
 */
deleteTableDYN_SUB_1_1 = function(){
	var rows = [];
	rows = $('#DYN_SUB_1_1').jqGrid('getGridParam','selarrrow');


	$('#DYN_SUB_1_1').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_SUB_1_1').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_SUB_1_1',
					data: {ids : ids.join(','),formInfoId:'402811817fd0a4d7017fd3bdd4d80482',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_SUB_1_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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





$('#DYN_SUB_1_1').setGridWidth(700);
$('#DYN_SUB_1_1').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_SUB_1_1_insertBtn').bind('click',function(){
	insertTableDYN_SUB_1_1();
});

//按钮绑定事件
$('#DYN_SUB_1_1_deleteBtn').bind('click',function(){
	deleteTableDYN_SUB_1_1();
});

//自定义按钮绑定事件
																//列onchange事件
		

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_1_1_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_SUB_1_1_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_SUB_1_1_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_SUB_1_1_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_SUB_1_1_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_1_1_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_1_1_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_SUB_1_1_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_1_1_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_1_1_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_SUB_1_1_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_SUB_1_1_deleteBtn").css("display","none");
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
	return $('#DYN_SUB_1_1').validateJqGrid("validate");
});

		$('#DYN_SUB_1_1').validateJqGrid("addValidate","DATA_1","maxlength",{maxlength:255});
				$('#DYN_SUB_1_1').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");

            globalUploadNum++;
    	});
	}, 1000);
	
	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);

	                           	
	//创建业务操作JS
    var eformFlow = new EformFlow();
    //创建流程操作JS
    var floweditor = new FlowEditor(eformFlow);

    floweditor.init();

    $('.spinner input').trigger("blur.spinner");

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});