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
EformFlow.prototype.formcode = "xczggl";
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
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=2c9150818823df8f0188273b98d505ed&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
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
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=2c9150818823df8f0188273b98d505ed&tableId='+tableId+'&id='+pageParams.id;
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
	

            $('#INSPECTION_FROM_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#INSPECTION_FROM_DATE').val() == null||$('#INSPECTION_FROM_DATE').val()==''||$('#INSPECTION_FROM_DATE').val()==undefined) {
                    $("#INSPECTION_FROM_DATE").datepicker("setDate",new Date());
                }

                
            $('#INSPECTION_FROM_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                    




$("#INSPECTION_FROM_ON").attr("initvalue",$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val());
if ($("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==''||$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==null||$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==undefined ){

window.INSPECTION_FROM_ONautocode = new AutoCode('INSPECTION_FROM_ON',"INSPECTION_FROM_ON",false,"INSPECTION_FROM_ON",undefined
	,function(){$("#INSPECTION_FROM_ON").find("input").attr("style","");}

);


}else{
	$("#INSPECTION_FROM_ON").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val();
		var flag = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#INSPECTION_FROM_ON").attr("initvalue");
		var valuePure = $("#INSPECTION_FROM_ON").find("#autoCode").val();
		if (flag != "disabled" && window.INSPECTION_FROM_ONautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=INSPECTION_FROM_ON',
					type: 'POST',
					async:false,
					data: {
						autoCode: "INSPECTION_FROM_ON",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=INSPECTION_FROM_ON',
								type: 'POST',
								async:false,
								data: {
									autoCode: "INSPECTION_FROM_ON",
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
										formData["INSPECTION_FROM_ON"] = result.value;
										$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val(result.value);
										$("#INSPECTION_FROM_ON").attr("initvalue",result.value);
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
				delete formData["INSPECTION_FROM_ON"];
				$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val();
		var require = $("#INSPECTION_FROM_ON").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "INSPECTION_FROM_ON"){
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
	if (tagId != "INSPECTION_FROM_ON"){
		return;
	}
	if(operability){
		$("#INSPECTION_FROM_ON").show();
	}else{
		$("#INSPECTION_FROM_ON").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "INSPECTION_FROM_ON"){
		return;
	}
	if (required){
		$("#INSPECTION_FROM_ON").attr("required","required");
	}
});

if ($("input[name='INSPECTION_FROM_POSEN']").val()==''||$("input[name='INSPECTION_FROM_POSEN']").val()==null||$("input[name='INSPECTION_FROM_POSEN']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{userName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#INSPECTION_FROM_POSEN").val(macoValue);
}

if ($("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==''||$("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==null||$("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#INSPECTION_FROM_POSEN_DEPT").val(macoValue);
}

    



$('#INSPECTION_POSENName').on(' focus',function(e){

INSPECTION_POSENClickFun();
this.blur();
});

function INSPECTION_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'INSPECTION_POSEN',textFiled:'INSPECTION_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var INSPECTION_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(INSPECTION_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var INSPECTION_POSEN_selectedList = $('#INSPECTION_POSEN').val();
    var flag = true;
    if(secretLevelValue&&INSPECTION_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':INSPECTION_POSEN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "责任人" + result.msg);
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


$("#INSPECTION_ISSUECount").html((3000 - $('#INSPECTION_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_ISSUELength(text,maxLen){
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



$("#ATTRIBUTE_01Count").html((3000 - $('#ATTRIBUTE_01').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatATTRIBUTE_01Length(text,maxLen){
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



$("#ATTRIBUTE_04Count").html((3000 - $('#ATTRIBUTE_04').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatATTRIBUTE_04Length(text,maxLen){
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

$("#INSPECTION_END_ISSUECount").html((3000 - $('#INSPECTION_END_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_END_ISSUELength(text,maxLen){
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

$("#INSPECTION_MEASURE_ISSUECount").html((3000 - $('#INSPECTION_MEASURE_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_MEASURE_ISSUELength(text,maxLen){
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

$("#INSPECTION_END_ISSUE_QKCount").html((3000 - $('#INSPECTION_END_ISSUE_QK').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_END_ISSUE_QKLength(text,maxLen){
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



$("#INSPECTION_ONE_ANDCount").html((3000 - $('#INSPECTION_ONE_AND').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_ONE_ANDLength(text,maxLen){
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




attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'M0QNQdnkP7mMAm48EJdfvRr5oRAChmED',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['M0QNQdnkP7mMAm48EJdfvRr5oRAChmED'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['M0QNQdnkP7mMAm48EJdfvRr5oRAChmED'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).attr("disabled","disabled");
                    });
                }
            }
        },
        
        //设计器参数
        saveType: 'DataBase',
            expand: true == true ? true : false,
        multiple: true == true ? true : false,
            allowDownload: true == true ? true : false,
        allowAdd: true == true ? true : false,
        allowDelete: true == true ? true : false,
                allowEncry: false == true ? true : false,
                        allowSameName: false == true ? true : false,
        collapsible: true == true ? true : false,
        fileNumLimit: 10,
        fileSizeLimit: '0',
        formSecret: 'INSPECTION_OPINION_END',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "M0QNQdnkP7mMAm48EJdfvRr5oRAChmED"){
        return;
    }

    if (required){
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("required","required");
   }else{
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").removeAttr("required");
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("required");
    var bpmRequire = $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "M0QNQdnkP7mMAm48EJdfvRr5oRAChmED"){
        return;
    }
    if(operability){
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").show();
    }else{
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").hide();
    }
});


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@zgld',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#gsld').html(result.html);
                     jQuery("#gsld").css({});
         			 jQuery("label[for='gsld']").css({});
                
                            }
        }
    });
    
        jQuery("#gsld").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "gsld"){
            return true;
        }
        if(!operability){
            jQuery("#gsld").css("display","none");
            jQuery("label[for='gsld']").css("display","none");
        }else{
            jQuery("#gsld").css("display","block");
            jQuery("label[for='gsld']").css("display","block");
        }
    
         jQuery("#gsld").css({});
          jQuery("label[for='gsld']").css({});
        });

}


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@dwxz',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#xcxz').html(result.html);
                     jQuery("#xcxz").css({});
         			 jQuery("label[for='xcxz']").css({});
                
                            }
        }
    });
    
        jQuery("#xcxz").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "xcxz"){
            return true;
        }
        if(!operability){
            jQuery("#xcxz").css("display","none");
            jQuery("label[for='xcxz']").css("display","none");
        }else{
            jQuery("#xcxz").css("display","block");
            jQuery("label[for='xcxz']").css("display","block");
        }
    
         jQuery("#xcxz").css({});
          jQuery("label[for='xcxz']").css({});
        });

}


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@ywzg',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#zgyw').html(result.html);
                     jQuery("#zgyw").css({});
         			 jQuery("label[for='zgyw']").css({});
                
                            }
        }
    });
    
        jQuery("#zgyw").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "zgyw"){
            return true;
        }
        if(!operability){
            jQuery("#zgyw").css("display","none");
            jQuery("label[for='zgyw']").css("display","none");
        }else{
            jQuery("#zgyw").css("display","block");
            jQuery("label[for='zgyw']").css("display","block");
        }
    
         jQuery("#zgyw").css({});
          jQuery("label[for='zgyw']").css({});
        });

}
if ($('#INSPECTION_OPINION_END').val() == null||$('#INSPECTION_OPINION_END').val()==''||$('#INSPECTION_OPINION_END').val()==undefined)$('#INSPECTION_OPINION_END').val("1");    window.onload= function(){
 setTimeout(function(){
 $("textarea").attr('disabled',false);
 $("input").attr('disabled',false);
 clearTimeout(this)
 },2000)
 
};


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