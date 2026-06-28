/*function splitDAStr(daNum) {
	// debugger;
	var daStr = daNum + "";
	if (daStr.indexOf(".") != -1) {
		var daStrNum = daStr.indexOf(".");
		daStr = daStr.substring(0, daStrNum + 2);

	} else {
		daStr += ".0";
	}
	return daStr;
}*/

/**
 * 业务操作对象，需继承基础对象，重写必要的业务操作方法
 */
function DaCareMedicineDetail(form,daCareMedicineItem) {
	this._formId = "#" + form;
	this.daCareMedicineItem = daCareMedicineItem;
	DefaultForm.call(this);
	this._checkedValue;
};
DaCareMedicineDetail.prototype = new DefaultForm();
DaCareMedicineDetail.prototype.formcode = "daCareMedicine";
/**
 * 初始化操作
 */
DaCareMedicineDetail.prototype.initFormData = function() {
	var _self = this;
	avicAjax
			.ajax({
				url : 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/initDetailFormData.json',
				data : {
					id : _self.id
				},
				type : 'POST',
				dataType : 'JSON',
				success : function(result) {
					if (result.flag == "success") {
						_self.setForm($(_self._formId),
								result.daCareMedicineDTO);
						
				
					} else {
						layer.msg('数据加载失败！');
					}
				}
			});
};
// 启动流程
DaCareMedicineDetail.prototype.start = function(defineId, callback) {

	var _self = this;
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		$(isValidate.errorList[0].element).focus();
		return false;
	}	
	if (dealMoney(_self.id) == false) {
		return false;
	}
	
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));

	/*20240402 add*/
	if(!_self.daCareMedicineItem.getDataExist()){

		layer.alert("里程碑计划子表必填！！！");
		return false;
	}
	//子表校验
	var msg = _self.daCareMedicineItem.dataValidte();
	if(msg && msg != ""){
		layer.alert(msg, {
			icon : 7,
			area : [ '400px', '' ], //宽高
			closeBtn : 0,
			btn : [ '关闭' ],
			title : "提示"
		});
		return false;
	}
	var updateSubData = _self.daCareMedicineItem.getEditData();


	avicAjax
			.ajax({
				url : 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/operation/saveAndStartProcess',
				data : {
					processDefId : defineId,
					formCode : _self.formcode,
					data : dataVo,
					updateSubData : JSON.stringify(updateSubData)
				},
				type : 'POST',
				dataType : 'JSON',
				success : function(result) {
					if (result.flag == "success") {
						// 启动成功后回调流程刷新按钮
						callback(result.startResult);
						_self.initFormData();
						_self.daCareMedicineItem.reLoad(_self.id);
					} else {
						layer.msg('保存失败！');
					}
				}
			});
};
/**
 * 更新数据
 */
DaCareMedicineDetail.prototype.save = function(callback) {

	var _self = this;
	var isValidate = $("#form").validate();
	if (!isValidate.checkForm()) {
		isValidate.showErrors();
		$(isValidate.errorList[0].element).focus();
		return false;
	}
	if(dealMoney(_self.id) == false) {
		return false;
	}
	var dataVo = JSON.stringify(serializeObject($(_self._formId)));

	/*20240402*/
	if(!_self.daCareMedicineItem.getDataExist()){

		layer.alert("里程碑计划子表必填！！！");
		return false;
	}
	//子表校验
	var msg = _self.daCareMedicineItem.dataValidte();
	if(msg && msg != ""){
		layer.alert(msg, {
			icon : 7,
			area : [ '400px', '' ], //宽高
			closeBtn : 0,
			btn : [ '关闭' ],
			title : "提示"
		});
		return false;
	}
	var updateSubData = _self.daCareMedicineItem.getEditData();
	var removeIds = JSON.stringify(_self.daCareMedicineItem.removeSubIds);

	avicAjax
			.ajax({
				url : 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/operation/save',
				data : {
					data : dataVo,
					updateSubData : JSON.stringify(updateSubData),
					removeSubIds : removeIds
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
DaCareMedicineDetail.prototype.setForm = function(formObj, jsonValue) {
	var _self = this;
	var obj = formObj;
	$.each(
					jsonValue,
					function(name, ival) {
						if(name == 'diseaseType'){
							_self._checkedValue = ival;
						}
						
						var oinput = obj.find("input[name=" + name + "]");
						if (oinput.attr("type") == "checkbox") {
							if (ival !== null) {
								var checkboxObj = $("[name=" + name + "]");
								var checkArray = ival.length > 0 ? ival
										.split(",") : ival;
								for (var i = 0; i < checkboxObj.length; i++) {
									checkboxObj[i].checked = false;
									for (var j = 0; j < checkArray.length; j++) {
										if (checkboxObj[i].value == checkArray[j]) {
											checkboxObj[i].checked = true;
										}
									}
								}
							}
						} else if (oinput.attr("type") == "radio") {
							oinput.each(function() {
								var radioObj = $("[name=" + name + "]");
								for (var i = 0; i < radioObj.length; i++) {
									if (radioObj[i].value == ival) {
										radioObj[i].checked = true;
									}
								}
							});
						} else if ($(oinput).attr('class') == "form-control date-picker hasDatepicker") {
							if (ival != "" && ival != null) {
								obj.find("[name=" + name + "]").datepicker(
										"setDate", new Date(ival));
							}
						} else if ($(oinput).attr('class') == "form-control time-picker hasDatepicker") {
							obj.find("[name=" + name + "]").val(ival);
						} else {
							obj.find("[name=" + name + "]").val(ival);
						}
					});
};
/**
 * 控件校验规则：表单字段name与rules对象保持一致
 */
DaCareMedicineDetail.prototype.formValidate = function(form) {

	/*jQuery.validator.addMethod("minNumber", function(value, element) {
		var returnVal = false;

		
		var checkedDiseaseType = $("input[name=diseaseType]:checked").val();
		if(checkedDiseaseType == '2' || checkedDiseaseType == '3' ){
			returnVal = true;
		}else{
			var inputZ = value;
			var ArrMen = inputZ.split(".");
			if (ArrMen.length == 2) {
				if (ArrMen[1].length < 2) {
					if (Number(inputZ) >= 0.1) {
						returnVal = true;
					}

				}
			}
		}
	

		
		return returnVal;
	}, "所填数据大于等于0.1，且整数填写格式为1.0!!!");
	*/
	form.validate({
		rules : {
			autoCode : {},
			patienterIdAlias : {},
			patientSex : {},
			patientAge : {},
			patientTel : {},
			disease : {},
			hospital : {},
			inhospDate : {
				dateISO : true
			},
			outhospDate : {
				dateISO : true
			},
			employeeCard : {},
			depositBank : {},
			diseaseType : {},
			healthExpenses : {
				number : true,
				//minNumber : $("#healthExpenses").val()
			},
			overallExpenses : {
				number : true,
				//minNumber : $("#healthExpenses").val()
			},
			personExpenses : {},
			submitExpenses : {}
		}
	});
};
DaCareMedicineDetail.prototype.beforeSubmit = function(data) {

	var _self = this;

    return  dealMoney(_self.id);

};


function dealMoney(id) {
	debugger;
	var retVal = false;

	return ;
	var healthExpenses = $("#healthExpenses").val();
	var overallExpenses = $("#overallExpenses").val();
	//var diffExpenses = (healthExpenses - overallExpenses).toFixed(1);
	var diffExpenses = (healthExpenses - overallExpenses);
	//var _self = this;
	/*else if(diffExpenses < 2000){
	layer.msg('个人支付金额小于2000元，不予报销!!!');
	return false;
	}*/
	var diseaseType = $("input[name='diseaseType']:checked").val();
	var patienterId = $("#patienterId").val();
	if(diseaseType == '2' || diseaseType == '3' ){
		avicAjax.ajax({
			url : 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/caltulateMoney.json',
			data : {
				patienterId : patienterId,
				diseaseType : diseaseType,
				diffExpenses : diffExpenses,
				id:id
			},
			type : 'POST',
			dataType : 'JSON',
			async : false,
			success : function(result) {
		
				if (result.flag == "success") {
					layer.msg(result.retMessage);
					$("#submitExpenses").val(result.retValue);
					retVal = true;
				} else {
					layer.msg(result.retMessage);
					$("#submitExpenses").val(result.retValue);
					retVal = false;
				}
			}
		});
			return retVal;
	}else{
		if (diffExpenses <= 0) {
			layer.msg('医疗费总金额要大于统筹基金支付,请重新填写!!!');
			return false;
		}else{
		
			$("#personExpenses").val(diffExpenses);
			
		
		
			avicAjax.ajax({
						url : 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/caltulateMoney.json',
						data : {
							patienterId : patienterId,
							diseaseType : diseaseType,
							diffExpenses : diffExpenses,
							id:id
						},
						type : 'POST',
						dataType : 'JSON',
						async : false,
						success : function(result) {
					
							if (result.flag == "success") {
								layer.msg(result.retMessage);
								$("#submitExpenses").val(result.retValue);
								retVal = true;
							} else {
								layer.msg(result.retMessage);
								$("#submitExpenses").val(result.retValue);
								retVal = false;
							}
						}
					});
			return retVal;
		}
	}


};
DaCareMedicineDetail.prototype.controlSelfElementForAccess = function(tagId,accessibility,obj){
	
	if(accessibility){
		$("#" + tagId).show();
	}
	
};
DaCareMedicineDetail.prototype.controlSelfElement = function(tagId, operability, obj){

	//$("#" + tagId).removeAttr("disabled");
	var _self = this;
	if(tagId == 'healthExpenses' || tagId == 'overallExpenses'){
		if(_self._checkedValue == '2' || _self._checkedValue == '3'){
			$("#" + tagId).attr("disabled","disabled");

		}else{
			
			$("#" + tagId).removeAttr("disabled");
		}
	}


};


DaCareMedicineDetail.prototype.controlSelfElementForAccess = function(tagId, accessibility, obj){
	if(accessibility){
		$("#" + tagId).show();
	}
	
	
};
DaCareMedicineDetail.prototype.printCareMedicine = function(){
		
	var _self = this;
	var entryId = this.flowEditor.flowModel.entryId;
	var formId = _self.id;
	window.open("platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/careMedicinePrint/"+ formId +"/" +  entryId,"_blank");
	
	
}



//子表按钮显隐控制
DaCareMedicineDetail.prototype.controlSubTableButtonForAccess = function(tagId, operability){
	workflowControlSubTableButtonForAccess.exec(tagId, operability);
};

//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "daCareMedicineItemEdit_insert"){
		return;
	}
	if(operability){
		$("#daCareMedicineItemEdit_insert").css("display","inline-block");
	}else{
		$("#daCareMedicineItemEdit_insert").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "daCareMedicineItemEdit_del"){
		return;
	}
	if(operability){
		$("#daCareMedicineItemEdit_del").css("display","inline-block");
		var subTableName = "daCareMedicineItemEdit_del".replace("del","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#daCareMedicineItemEdit_del").css("display","none");
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

/**
 * 控制子表toolbar是否可用和子表数据是否可编辑
 */
DaCareMedicineDetail.prototype.controlSelfElement = function(tagId, operability, obj){
	if(operability){
		if(tagId == "daCareMedicineItem_editable"){//判断是否允编辑子表数据
			//获取colModel数组对象
			var columnArray = $('#daCareMedicineItemEditJqGrid').jqGrid('getGridParam','colModel');
			//给每个colModel属性列设置可编辑
			$.each(columnArray,function(i,item){
				$('#partyMilepost').setColProp(item.name,{editable:true});
			});
		}else{
			$("#" + tagId).show();
		}
	}else{
		$("#" + tagId).hide();
	}
}
/**
 * 非电子表单子表字段的显隐控制，子表字段元素定义通过".customform_subtable_bpm_auth"来实现
 * @param tagId 元素id
 * @param operability 是否可显示
 * @param obj 参数对象
 */
DaCareMedicineDetail.prototype.controlCustomSubTableForAccess = function(tagId, operability, obj){
	var tagArr = obj.tag.split("__");
	var subTableName = tagArr[0];
	var subTableId = $("table[name="+subTableName+"]")[0].id
	var tag = "#"+subTableId;
	if(operability){
		$(tag).showCol(tagId);
	}else{
		$(tag).hideCol(tagId);
	}
}
/**
 * 非电子表单子表字段的可编辑控制，子表字段元素定义通过".customform_subtable_bpm_auth"来实现
 * @param tagId 元素id
 * @param accessibility 是否可显示
 * @param obj 参数对象
 */
DaCareMedicineDetail.prototype.controlCustomSubTableForOperability = function(tagId, operability, obj){
	var tagArr = obj.tag.split("__");
	var subTableName = tagArr[0];
	var subTableId = $("table[name="+subTableName+"]")[0].id
	var tag = "#"+subTableId;
	if(operability){
		$(tag).setColProp(tagId,{editable:true});
	}else{
		$(tag).setColProp(tagId,{editable:false});
	}
}
/**
 * 非电子表单子表字段的必填控制，子表字段元素定义通过".customform_subtable_bpm_auth"来实现
 * @param tagId 元素id
 * @param accessibility 是否可显示
 * @param obj 参数对象
 */
DaCareMedicineDetail.prototype.controlCustomSubTableForRequired = function(tagId, operability, obj){
	//获取必填字段数组
	var notnullFiledArr = this.daCareMedicineItem.notnullFiled;
	var notnullFiledCommentArr = this.daCareMedicineItem.notnullFiledComment;
	var tagValue = tagId;
	if(tagValue.lastIndexOf("Alias") > -1){
		tagValue = tagValue.substring(0,tagId.lastIndexOf("Alias"));
	}else if(tagId.lastIndexOf("Name") > -1){
		tagValue = tagValue.substring(0,tagId.lastIndexOf("Name"));
	}
	if(notnullFiledArr.indexOf(tagValue) > -1 && !operability){
		//配置错误
		layer.alert("流程建模必填项配置错误!");
		return false;
	}
	if(operability){
		//添加必填
		var tagArr = obj.tag.split("__");
		var subTableName = tagArr[0];
		var subTableId = $("table[name="+subTableName+"]")[0].id
		var tag = "#"+subTableId;
		$(tag).setLabel(tagId,'<span style="color:red;">*</span>' + obj.tagName,'');
		notnullFiledArr.push(tagId);
		notnullFiledCommentArr.push(obj.tagName);
	}
}
