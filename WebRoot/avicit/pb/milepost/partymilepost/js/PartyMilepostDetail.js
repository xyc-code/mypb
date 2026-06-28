/**
 * 业务操作对象，需继承基础对象，重写必要的业务操作方法
 */
function PartyMilepostDetail(form){
	this._formId="#"+form;
	DefaultForm.call(this);
};
PartyMilepostDetail.prototype = new DefaultForm();
PartyMilepostDetail.prototype.formcode = "partyMilepost";
/**
 * 初始化操作
 */
PartyMilepostDetail.prototype.initFormData = function(){
	var _self = this;
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/partyMilepost/partyMilepostController/initDetailFormData.json',
		data : {
			id : _self.id
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				_self.setForm($(_self._formId),result.partyMilepostDTO);
			} else {
				layer.msg('数据加载失败！');
			}
		}
	});
};
/**
 * 流程页面初始化事件
 
PartyMilepostDetail.prototype.afterInit = function(){
	debugger;
	var rowData = opener.partyMilepost.getSelectRow();

	console.log(rowData.userIdAlias);
	if(rowData != null && typeof(rowData) != "undefined" && typeof(rowData.id) != "undefined"){
		$("#userIdAlias").val(rowData.userIdAlias);
		$("#userId").val(rowData.userId);
		$("#deptIdAlias").val(rowData.deptIdAlias);
		$("#deptId").val(rowData.deptId);
		$("#partyId").val(rowData.partyId);
		$("#partyIdAlias").val(rowData.partyIdAlias);
		$("#milepostPlan").val(rowData.milepostPlan);
		$("#completionDate").val(rowData.completionDate);
		$("#id").val(rowData.id);
		
		$("#version").val(rowData.version);
	}
	//console.log(rowData);
	

};*/

/**
 * 启动流程
 */
PartyMilepostDetail.prototype.start = function(defineId, callback){
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
	  if (!$('#attachment').uploaderExt('validateSecret')){
		  return false;
		  }else{
				avicAjax.ajax({
					url : 'platform/avicit/pb/milepost/partyMilepost/partyMilepostController/operation/saveAndStartProcess',
					data : {
						processDefId : defineId,
						formCode : _self.formcode,
						data : dataVo
					},
					type : 'POST',
					async: false,
					dataType : 'JSON',
					success : function(result) {
						//debugger;
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
	  }

};
/**
 * 更新数据
 */
PartyMilepostDetail.prototype.save=function(callback){
	//debugger;
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
	  if (!$('#attachment').uploaderExt('validateSecret')){
		  return false;
		  }else{
			  avicAjax.ajax({
					url : 'platform/avicit/pb/milepost/partyMilepost/partyMilepostController/operation/save',
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
	  }
	
};
/**
 * 表单重载json对象数据
 */
PartyMilepostDetail.prototype.setForm = function(formObj, jsonValue){
	//debugger;
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
        		var ival_date = new Date(Date.parse(ival.replace(/-/g,"/")));
                obj.find("[name=" + name + "]").datepicker("setDate", new Date(ival_date));
        	}
        }else if ($(oinput).attr('class') == "form-control time-picker hasDatepicker"){
     	   obj.find("[name=" + name + "]").val(ival);
        }else {
            obj.find("[name=" + name + "]").val(ival);
        }
    });
};
//控制附件
PartyMilepostDetail.prototype.setAttachMagic = function(attachMagic) {
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
PartyMilepostDetail.prototype.setAttachRequired = function(tagId,required,obj){
     eval("this.attachRequiredMap." + tagId + " = " + required);
};

//流程控制-多附件密级等级是否可编辑
PartyMilepostDetail.prototype.setAttachSecretLevelModify = function(tagId,modify,obj){
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

PartyMilepostDetail.prototype.attachRequiredMap = {};
PartyMilepostDetail.prototype.validAttachRequired = function(){
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
PartyMilepostDetail.prototype.setAttachCanAddOrDel = function(tagId,operability,obj){
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
PartyMilepostDetail.prototype.formValidate=function(form){
	form.validate({
		rules: {
			userIdAlias:{
			},
			deptIdAlias:{
			},
			taskStatus:{
			},
			taskCompletion:{
			},
			partyId:{
			},
			milepostPlan:{
			},
			completionDate:{
				dateISO:true
			}
		}
	});
}
