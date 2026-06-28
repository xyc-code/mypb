/**
 * 业务操作对象，需继承基础对象，重写必要的业务操作方法
 */
function DynFiveOfDetail(form){
	this._formId="#"+form;
	DefaultForm.call(this);
};
DynFiveOfDetail.prototype = new DefaultForm();
DynFiveOfDetail.prototype.formcode = "dynFiveOf";
/**
 * 初始化操作
 */
DynFiveOfDetail.prototype.initFormData = function(){
	var _self = this;
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/initDetailFormData.json',
		data : {
			id : _self.id
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				_self.setForm($(_self._formId),result.dynFiveOfDTO);
			} else {
				layer.msg('数据加载失败！');
			}
		}
	});
};
/**
 * 启动流程
 */
DynFiveOfDetail.prototype.start = function(defineId, callback){
	var _self = this;
	//表单校验
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		//表单字段较多时，直接定位到当前字段
		$(isValidate.errorList[0].element).focus();
		return false;
	}
	//附件权限校验
	if(!_self.validAttachRequired()){
        return false;
    }
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/operation/saveAndStartProcess',
		data : {
			processDefId : defineId,
			formCode : _self.formcode,
			data : dataVo
		},
		type : 'POST',
		async: false,
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				var files = $('#attachment').uploaderExt('getUploadFiles');
				if(files != 0){
					//遮罩
					var maskId = layer.load();
					$("#id").val(result.startResult.formId);
					afterUploadEvent = function(){
						//去掉遮罩
						layer.close(maskId);
						// 启动成功后回调流程刷新按钮
						callback(result.startResult);
						//刷新页面
						_self.initFormData();
					};
					$('#attachment').uploaderExt('doUpload', result.startResult.formId);
				}else{
					// 启动成功后回调流程刷新按钮
					callback(result.startResult);
					_self.initFormData();
				}
			} else {
				var alertMsg = '保存失败,请联系管理员!'
                if(result.errorMsg != null && result.errorMsg != ''){
                    alertMsg = result.errorMsg;
                }
                layer.msg(alertMsg);
			}
		}
	});
};
/**
 * 更新数据
 */
DynFiveOfDetail.prototype.save=function(callback){
	var _self = this;
	//表单校验
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		$(isValidate.errorList[0].element).focus();
		return false;
	}
	//附件权限校验
	if(!_self.validAttachRequired()){
        return false;
    }
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/operation/save',
		data : {
			data : dataVo
		},
		type : 'POST',
		async: false,
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				var files = $('#attachment').uploaderExt('getUploadFiles');
				if(files != 0){
					$("#id").val(result.id);
					//遮罩
					var maskId = layer.load();
					//附件上传完毕后执行该方法
					afterUploadEvent = function(){
						//去掉遮罩
						layer.close(maskId);
						//启动成功后回调流程刷新按钮
						callback();
						//刷新页面
						_self.initFormData();
					};
					$('#attachment').uploaderExt('doUpload', result.id);
				}else{
					// 启动成功后回调流程刷新按钮
					callback();
					_self.initFormData();
				}
			} else {
				var alertMsg = '保存失败,请联系管理员!'
                if(result.errorMsg != null && result.errorMsg != ''){
                    alertMsg = result.errorMsg;
                }
                layer.alert(alertMsg, {
                      icon: 7,
                      area: ['400px', ''], //宽高
                      closeBtn: 0,
                      btn: ['关闭'],
                      title:"提示"
                    }
                );
			}
		}
	});
};
/**
 * 表单重载json对象数据
 */
DynFiveOfDetail.prototype.setForm = function(formObj, jsonValue){
    var obj = formObj;
    $.each(jsonValue, function (name, ival) {
        var oinput = obj.find("input[name=" + name + "]");
        if (oinput.attr("type") == "checkbox") {
            if (ival !== null) {
                var checkboxObj = $("[name=" + name + "]");
                var checkArray = ival.length > 0 ?ival.split(",") : ival;
                for (var i = 0; i < checkboxObj.length; i++) {
             	    checkboxObj[i].checked = false;
                    for (var j = 0; j < checkArray.length; j++) {
                        if (checkboxObj[i].value == checkArray[j]) {
                     	   checkboxObj[i].checked=true;
                        }
                    }
                } 
            }
        }else if (oinput.attr("type") == "radio") {
            oinput.each(function () {
                var radioObj = $("[name=" + name + "]");
                for (var i = 0; i < radioObj.length; i++) {
                    if (radioObj[i].value == ival) {
                 	   radioObj[i].checked=true;
                    }
                }
            });
        }else if ($(oinput).attr('class') == "form-control date-picker hasDatepicker"){
        	if(ival !="" && ival !=null){
        		obj.find("[name=" + name + "]").datepicker("setDate", new Date(ival));
        	}
        }else if ($(oinput).attr('class') == "form-control time-picker hasDatepicker"){
     	   obj.find("[name=" + name + "]").val(ival);
        }else {
            obj.find("[name=" + name + "]").val(ival);
        }
    });
};
//控制附件
DynFiveOfDetail.prototype.setAttachMagic = function(attachMagic) {
    //当流程节点配置是否允许附件功能时候，隐藏上传、下载按钮等
	if(attachMagic) {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });
        $('div.uploader-file-item').unbind("mouseover");
    }
    else {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });
        $('div.uploader-file-item').bind('mouseover',function(){
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }
};
//流程控制-多附件必填
DynFiveOfDetail.prototype.setAttachRequired = function(tagId,required,obj){
     eval("this.attachRequiredMap." + tagId + " = " + required);
};

//流程控制-多附件密级等级是否可编辑
DynFiveOfDetail.prototype.setAttachSecretLevelModify = function(tagId,modify,obj){
	var uploadJqgrid = $("#"+tagId).find("#attachmentTable");
	if(modify){
		$("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
			$(e).removeAttr("disabled");
		});
		if(uploadJqgrid){
			var rowIds = uploadJqgrid.jqGrid("getDataIDs");
			for(var i = 0; i< rowIds.length; i++){
				var rowId = rowIds[i];
				uploadJqgrid.jqGrid('setCell', rowId, "attachmentsecretName", '', 'edit-cell');
			}
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

DynFiveOfDetail.prototype.attachRequiredMap = {};
DynFiveOfDetail.prototype.validAttachRequired = function(){
	for(var tagId in this.attachRequiredMap){
			if(this.attachRequiredMap[tagId]){
	            var itemListNum = $('#' + tagId).find('.uploader-file-item').size();
	            if(itemListNum==0){
	                layer.alert("附件不能为空！", {
	                    title: "提示",
	                    icon: 7
	                });
	                return false;
	            }
			}
		}
		return true;
};

//多附件增删控制
DynFiveOfDetail.prototype.setAttachCanAddOrDel = function(tagId,operability,obj){
    if(operability) {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });
        $('#' + tagId).find('div.uploader-file-item').unbind("mouseover");
    }else {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });
        $('#' + tagId).find('div.uploader-file-item').bind('mouseover',function(){
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }
};
/**
 * 控件校验规则：表单字段name与rules对象保持一致
 */
DynFiveOfDetail.prototype.formValidate=function(form){
	form.validate({
		rules: {
			fiveDate:{
				dateISO:true
			},
			fiveNo:{
			},
			attr9:{
			},
			attr4:{
			},
			fiveName:{
			},
			attr3:{
			},
			attr2:{
			},
			attr1:{
			},
			fiveSituation:{
			},
			attr8:{
			},
			attr7:{
			},
			attr20:{
				dateISO:true
			},
			attr6:{
			},
			attr5:{
			},
			attr12:{
			},
			attr13:{
			},
			attr10:{
			},
			posenTel:{
			},
			attr11:{
			},
			attr16:{
			},
			attr17:{
			},
			attr14:{
			},
			attr15:{
			},
			attr18:{
				dateISO:true
			},
			attr19:{
				dateISO:true
			},
			fiveEffect:{
			},
			fiveDept:{
			},
			fivePosition:{
			},
			fiveProspects:{
			},
			posenName:{
			},
			fvieAge:{
			},
			fiveDeclarations:{
			},
			fiveProblem:{
			},
			fiveMeasures:{
			}
		}
	});
}
