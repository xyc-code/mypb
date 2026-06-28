/**
 * 业务操作对象，需继承基础对象，重写必要的业务操作方法
 */
function DynYouthDeclarationDetail(form){
	this._formId="#"+form;
	DefaultForm.call(this);
};
DynYouthDeclarationDetail.prototype = new DefaultForm();
DynYouthDeclarationDetail.prototype.formcode = "dynYouthDeclaration";
/**
 * 初始化操作
 */
DynYouthDeclarationDetail.prototype.initFormData = function(){
	var _self = this;
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/dynYouthDeclaration/dynYouthDeclarationController/initDetailFormData.json',
		data : {
			id : _self.id
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				_self.setForm($(_self._formId),result.dynYouthDeclarationDTO);
			} else {
				layer.msg('数据加载失败！');
			}
		}
	});
};
//启动流程
DynYouthDeclarationDetail.prototype.start = function(defineId, callback){
	var _self = this;
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		$(isValidate.errorList[0].element).focus();
		return false;
	}
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/dynYouthDeclaration/dynYouthDeclarationController/operation/saveAndStartProcess',
		data : {
			processDefId : defineId,
			formCode : _self.formcode,
			data : dataVo
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
			    // 启动成功后回调流程刷新按钮
				callback(result.startResult);
				_self.initFormData();
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
DynYouthDeclarationDetail.prototype.save=function(callback){
	var _self = this;
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		$(isValidate.errorList[0].element).focus();
		return false;
	}
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));
	avicAjax.ajax({
		url : 'platform/avicit/pb/milepost/dynYouthDeclaration/dynYouthDeclarationController/operation/save',
		data : {
			data : dataVo
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				// 更新数据后回调流程权限加载
				callback();
				_self.initFormData();
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
DynYouthDeclarationDetail.prototype.setForm = function(formObj, jsonValue){
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
/**
 * 控件校验规则：表单字段name与rules对象保持一致
 */
DynYouthDeclarationDetail.prototype.formValidate=function(form){
	form.validate({
		rules: {
			commandoesType:{
			},
			expectedIncome:{
			},
			commandoesCaptains:{
			},
			commandoesDate:{
				dateISO:true
			},
			commandoesContent:{
			},
			attr9:{
			},
			commandoesTaskDate:{
				dateISO:true
			},
			commandoesTeamTask:{
			},
			attr4:{
			},
			applicationUnit:{
			},
			attr3:{
			},
			commandoesName:{
			},
			attr2:{
			},
			attr1:{
			},
			attr8:{
			},
			attr7:{
			},
			attr20:{
				dateISO:true
			},
			commandoesTeamDept:{
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
			attr11:{
			},
			attr16:{
				dateISO:true
			},
			attr17:{
				dateISO:true
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
			commandoesTeamName:{
			},
			commandoesPosenTel:{
			},
			commandoesTeamCount:{
			},
			commandoesPxqk:{
			},
			commandoesTeamAge:{
			},
			applicationNumber:{
			},
			commandoesPosen:{
			}
		}
	});
}
