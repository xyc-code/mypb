/**
 * 业务操作对象，需继承基础对象，重写必要的业务操作方法
 */
function CreateSingleDetail(form){
	this._formId="#"+form;
	DefaultForm.call(this);
};
CreateSingleDetail.prototype = new DefaultForm();
//formcode
CreateSingleDetail.prototype.formcode = "createSingle";
/**
 * 初始化操作
 */
CreateSingleDetail.prototype.initFormData = function(){
	var _self = this;
	avicAjax.ajax({
		url : 'platform/platform6/demo/createsingle/createSingleController/toDetailJsp.json',
		data : {
			id : _self.id
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (result.flag == "success") {
				_self.setForm($(_self._formId),result.createSingleDTO);
			} else {
				layer.msg('数据加载失败！');
			}
		}
	});
};
/**
 * 启动流程
 */
CreateSingleDetail.prototype.start = function(defineId, callback){
	var _self = this;
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		return false;
	}
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));
	avicAjax.ajax({
		url : 'platform/platform6/demo/createsingle/createSingleController/operation/saveAndStartProcess',
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
				layer.msg('保存失败！');
			}
		}
	});
};
/**
 * 更新数据
 */
CreateSingleDetail.prototype.save=function(callback){
	var _self = this;
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		return false;
	}
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));
	avicAjax.ajax({
		url : 'platform/platform6/demo/createsingle/createSingleController/operation/save',
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
				layer.msg('保存失败！');
			}
		}
	});
};
/**
 * 表单重载json对象数据
 */
CreateSingleDetail.prototype.setForm = function(formObj, jsonValue){
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
 * 控件校验   规则：表单字段name与rules对象保持一致
 */
CreateSingleDetail.prototype.formValidate=function(form){
	form.validate({
		rules: {
						  		     			 		  				  		     			    				   			       applyUseridAlias:{
						required:true,
						maxlength: 50
				   },
				   							 		  				  		     			    				   			       applyDeptidAlias:{
						required:true,
						maxlength: 50
				   },
				   							 		  				  		     			    				   			       applyDate:{
						required:true,
						dateISO:true
				   },
				   							 		  				  		     			    				   				   place:{
						required:true,
						maxlength: 50
				   },  
				   							 		  				  		     			    				   				   guestNum:{
				        required:true,
						number:true
				   }, 
				   							 		  				  		     			    				   			       receptionDate:{
						required:true,
						dateISO:true
				   },
				   							 		  				  		     			    				   				   							 		  				  		     			    				   				   cigaretteRzh:{
				        required:true,
						number:true
				   }, 
				   							 		  				  		     			    				   				   cigaretteYzh:{
						number:true
				   },
				   							 		  				  		     			    				   				   cigaretteQt:{
						number:true
				   },
				   							 		  				  		     			    				   				   cigaretteRequire:{
						required:true,
						maxlength: 255
				   },  
				   							 		  				  		     			    				   				   wine:{
				        required:true,
						number:true
				   }, 
				   							 		  				  		     			    				   				   liquor:{
						number:true
				   },
				   							 		  				  		     			    				   				   otherDrink:{
						number:true
				   },
				   							 		  				  		     			    				   				   dinner:{
						required:true,
						maxlength: 255
				   },  
				   							 		  				  		     			    				   				   hotel:{
						number:true
				   },
				   							 		  				  		     			    				   				   remark:{
						required:true,
						maxlength: 1024
				   },  
				   							 		  				  		     			    				   				   deptType:{
						required:true,
						maxlength: 255
				   },  
				   							 		  				  		     			    				   				   satisfactionSurvey:{
						required:true,
						maxlength: 10
				   },  
				   							 		  				  				  				  				  				  				  				  		     			    				   				   deptLevel:{
						number:true
				   },
				   							 		  				  				  				  				  				  				  				  				  				  				  			  }
	});
}
