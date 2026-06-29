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
EformFlow.prototype.formcode = "gsndldgbmzshh";
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
        var leanJoin =$("#LEAD_JOIN").val();
var leanName = $("#LEAD_NAME").val();
var jwJoin = $("#JW_JOIN").val();
var jwName = $("#JW_NAME").val();
if(leanJoin=="Y"){
  if(leanName==""){
  layer.msg("主管公司领导是否参加选是后，必须选择参加领导的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
if(jwJoin=="Y"){
  if(jwName==""){
  layer.msg("参会人员是否参加选是后，必须选择参会人员的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
    }
    else {
        var leanJoin =$("#LEAD_JOIN").val();
var leanName = $("#LEAD_NAME").val();
var jwJoin = $("#JW_JOIN").val();
var jwName = $("#JW_NAME").val();
if(leanJoin=="Y"){
  if(leanName==""){
  layer.msg("主管公司领导是否参加选是后，必须选择参加领导的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
if(jwJoin=="Y"){
  if(jwName==""){
  layer.msg("参会人员是否参加选是后，必须选择参会人员的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
    }

	var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=2c908c1d89cef9c70189cf069a91068e&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
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

        if(pageParams.isInsert) {
        var leanJoin =$("#LEAD_JOIN").val();
var leanName = $("#LEAD_NAME").val();
var jwJoin = $("#JW_JOIN").val();
var jwName = $("#JW_NAME").val();
if(leanJoin=="Y"){
  if(leanName==""){
  layer.msg("主管公司领导是否参加选是后，必须选择参加领导的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
if(jwJoin=="Y"){
  if(jwName==""){
  layer.msg("参会人员是否参加选是后，必须选择参会人员的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
    }
    else {
        var leanJoin =$("#LEAD_JOIN").val();
var leanName = $("#LEAD_NAME").val();
var jwJoin = $("#JW_JOIN").val();
var jwName = $("#JW_NAME").val();
if(leanJoin=="Y"){
  if(leanName==""){
  layer.msg("主管公司领导是否参加选是后，必须选择参加领导的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
if(jwJoin=="Y"){
  if(jwName==""){
  layer.msg("参会人员是否参加选是后，必须选择参会人员的姓名！");
  $("#page_saveButton").removeClass('disabled');
  return false;
  }
}
    }
    
    var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=2c908c1d89cef9c70189cf069a91068e&tableId='+tableId+'&id='+pageParams.id;
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
	




$('#DEMOCRACY_DEPTName').on(' focus',function(e){
    DEMOCRACY_DEPTClickFun();
    $(this).blur();
});

function DEMOCRACY_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DEMOCRACY_DEPT',textFiled:'DEMOCRACY_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#DEMOCRACY_DEPTButton').off('click');



        if ($('#DEMOCRACY_DEPT').val() == null||$('#DEMOCRACY_DEPT').val()==''||$('#DEMOCRACY_DEPT').val()==undefined) {
$("#DEMOCRACY_DEPT").val(session.deptId);

}
if ($('#DEMOCRACY_DEPTName').val() == null||$('#DEMOCRACY_DEPTName').val()==''||$('#DEMOCRACY_DEPTName').val()==undefined) {
$("#DEMOCRACY_DEPTName").val(session.deptName);
}





if ($("input[name='DEMOCRACY_USER']").val()==''||$("input[name='DEMOCRACY_USER']").val()==null||$("input[name='DEMOCRACY_USER']").val()==undefined ){
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
	$("#DEMOCRACY_USER").val(macoValue);
}



    if(pageParams.entryId == undefined){
var userId = pageParams.session.userId;
$.ajax({
 url:"avicit/pb/organize/partyOrganMember/partyOrganMemberTelController/getUser/"+userId,
 type:"POST",
 dataType:"JSON",
 success:function(e){
 if(e==null||e.rows.length==0){
 layer.msg('未获取到对应电话');
 }else{
 $("#tel").val(e.rows[0].attribute10);
 }
 },
 error:function(e){
 //layer.msg('网络异常，未找到对应接口,无法带入联系电话');
 }
});
}





            $('#DEMOCRACY_DATE').datetimepicker({
            oneLine:true,
            showButtonPanel:true,
            showSecond:false,
            beforeShow: function(selectedDate,inst) {
                inst.initflag = false;
                if($('#'+selectedDate.id).val()==""){
                    inst.initflag = true;
                    $('#'+selectedDate.id).val(formatDateTimeNoSecond(new Date()));
                }
            },
            afterShow: function(selectedDate,inst) {
                if (inst.initflag){
                    $('#'+selectedDate.id).val('');
                    inst.initflag = false;
                }
            }
        });
    


    $('#DEMOCRACY_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#DEMOCRACY_DATE').datetimepicker('show');
			 $('#DEMOCRACY_DATE').datetimepicker().trigger('click');
	    			
		});
        

if ($('#LEAD_JOIN').val() == null||$('#LEAD_JOIN').val()==''||$('#LEAD_JOIN').val()==undefined)$('#LEAD_JOIN').val("N");            $('#LEAD_JOIN').on('change',function(e){
            if(e.currentTarget.value ==="Y"){
 $('#LEAD_NAMEName').parent().css('cursor',"");
 $('#LEAD_NAMEName').removeAttr('disabled')
}else{
 $('#LEAD_NAMEName').parent().css('cursor',"not-allowed");
 $('#LEAD_NAMEName').attr('disabled','disabled')
}
        });
            $(document).ready(function(){
$('#LEAD_NAMEName').attr('disabled','disabled')
$('#LEAD_NAMEName').parent().css('cursor',"not-allowed");
})




$('#LEAD_NAMEName').on(' focus',function(e){

LEAD_NAMEClickFun();
this.blur();
});

function LEAD_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';


var defaultSelectOrgIds = $("#").attr("orgidentity");
var defaultSelectOrgId =pageParams.session.orgIndentity;
if (defaultSelectOrgIds&&defaultSelectOrgIds.indexOf(";")){
defaultSelectOrgId = defaultSelectOrgIds.split(";")[0];
}
if (defaultSelectOrgId==undefined||defaultSelectOrgId==""){defaultSelectOrgId = pageParams.session.orgIndentity;}

var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";
        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadGroupId = "948e83e38e120a84018e17d7bc485f05";
    }
    
var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'LEAD_NAME',textFiled:'LEAD_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['dept', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var LEAD_NAME_colSecret = $('#');
    var secretLevelValue;
    if(LEAD_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var LEAD_NAME_selectedList = $('#LEAD_NAME').val();
    var flag = true;
    if(secretLevelValue&&LEAD_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':LEAD_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "公司领导姓名" + result.msg);
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





workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd"){
		return;
	}
	if(operability){
		$("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").show();
	}else{
		$("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").hide();
	}
});

    $("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").css('border','1px solid ')




            $('#DEMOCRACY_END_DATE').datetimepicker({
            oneLine:true,
            showButtonPanel:true,
            showSecond:false,
            beforeShow: function(selectedDate,inst) {
                inst.initflag = false;
                if($('#'+selectedDate.id).val()==""){
                    inst.initflag = true;
                    $('#'+selectedDate.id).val(formatDateTimeNoSecond(new Date()));
                }
            },
            afterShow: function(selectedDate,inst) {
                if (inst.initflag){
                    $('#'+selectedDate.id).val('');
                    inst.initflag = false;
                }
            }
        });
    


                            $('#DEMOCRACY_END_DATE').attr("readonly","readonly").attr("disabled","disabled");
                


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: 'FILE_TYPE',
        accept:
                            {extensions:'zip,rar,7z'}
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t"){
        return;
    }

    if (required){
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("required","required");
   }else{
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").removeAttr("required");
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("required");
    var bpmRequire = $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t"){
        return;
    }
    if(operability){
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").show();
    }else{
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").hide();
    }
});


    $('#JW_JOIN').attr("disabled","disabled");            $('#JW_JOIN').on('change',function(e){
            if(e.currentTarget.value ==="Y"){
 $('#JW_NAMEName').parent().css('cursor',"");
 $('#JW_NAMEName').removeAttr('disabled')
}else{
 $('#JW_NAMEName').parent().css('cursor',"not-allowed");
 $('#JW_NAMEName').attr('disabled',"disabled")
}
        });
            $('#JW_NAMEName').parent().css('cursor',"not-allowed")
$('#JW_NAMEName').attr('disabled',"disabled")




$('#JW_NAMEName').on(' focus',function(e){

JW_NAMEClickFun();
this.blur();
});

function JW_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';


var defaultSelectOrgIds = $("#").attr("orgidentity");
var defaultSelectOrgId =pageParams.session.orgIndentity;
if (defaultSelectOrgIds&&defaultSelectOrgIds.indexOf(";")){
defaultSelectOrgId = defaultSelectOrgIds.split(";")[0];
}
if (defaultSelectOrgId==undefined||defaultSelectOrgId==""){defaultSelectOrgId = pageParams.session.orgIndentity;}

var defaultLoadDeptId = "";

        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadDeptId = "40283881641bf84d01641cc2c0fd077e,40283881641bf84d01641cc2bf1a0764";
    }

    



var defaultLoadRoleId = "";

var defaultLoadGroupId = "";
        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadGroupId = "948e83e38e54e848018e601ad9a078df";
    }
    
var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'JW_NAME',textFiled:'JW_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['dept', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#JW_NAMEButton').off('click');




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var JW_NAME_colSecret = $('#');
    var secretLevelValue;
    if(JW_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var JW_NAME_selectedList = $('#JW_NAME').val();
    var flag = true;
    if(secretLevelValue&&JW_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':JW_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "纪检/人力参会人员" + result.msg);
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




    $('#LEAD_YN').attr("disabled","disabled");if ($('#FILE_TYPE').val() == null||$('#FILE_TYPE').val()==''||$('#FILE_TYPE').val()==undefined)
$('#FILE_TYPE').val("2");


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