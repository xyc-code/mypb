/**
* 业务操作对象，需继承基础对象，重写必要的业务操作方法
*/
function PartyCommandosDetail(form,partyMilepostEdit){
    this._formId="#"+form;
    this.partyMilepostEdit = partyMilepostEdit;
    DefaultForm.call(this);
};
PartyCommandosDetail.prototype = new DefaultForm();
PartyCommandosDetail.prototype.formcode = "partyCommandos";
/**
* 初始化操作
*/
PartyCommandosDetail.prototype.initFormData = function(){
    var _self = this;
    avicAjax.ajax({
        url : 'platform/avicit/pb/commandos/partyCommandos/partyCommandosController/initDetailFormData.json',
        data : {
            id : _self.id
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if (result.flag == "success") {
                _self.setForm($(_self._formId),result.partyCommandosDTO);
            } else {
                layer.msg('数据加载失败！');
            }
        }
    });
};
/**
* 启动流程
*/
PartyCommandosDetail.prototype.start = function(defineId,callback){
	//debugger;
    var _self = this;
    var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
        isValidate.showErrors();
        return false;
    }
    var dataVo = JSON.stringify(serializeObject($(_self._formId)));
    if(!_self.partyMilepostEdit.getDataExist()){
    	
    	layer.alert("里程碑计划子表必填！！！");
    	return false;
    }
    //子表校验
    var msg = _self.partyMilepostEdit.dataValidte();
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

    var updateSubData = _self.partyMilepostEdit.getEditData();
    if (!$('#attachment').uploaderExt('validateSecret')){
    	return false;
    }else{
    	avicAjax.ajax({
            url : 'platform/avicit/pb/commandos/partyCommandos/partyCommandosController/operation/saveAndStartProcess',
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
                           _self.partyMilepostEdit.reLoad(_self.id);
                       };
             
                       $('#attachment').uploaderExt('doUpload', result.startResult.formId);
                   }else{
                       // 启动成功后回调流程刷新按钮
                       callback(result.startResult);
                       _self.initFormData();
                       _self.partyMilepostEdit.reLoad(_self.id);
                   }
               } else {
                   layer.msg('保存失败！');
               }
           }
       });
    }
    
};

/**
* 更新数据
*/
PartyCommandosDetail.prototype.save=function(callback){
	//debugger;
    var _self = this;
    var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
        isValidate.showErrors();
        return false;
    }
    var dataVo = JSON.stringify(serializeObject($(_self._formId)));
    if(!_self.partyMilepostEdit.getDataExist()){
    	
    	layer.alert("里程碑计划子表必填！！！");
    	return false;
    }
    //子表校验
    var msg = _self.partyMilepostEdit.dataValidte();
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
    var updateSubData = _self.partyMilepostEdit.getEditData();
    var removeIds = JSON.stringify(_self.partyMilepostEdit.removeSubIds);
    if (!$('#attachment').uploaderExt('validateSecret')){
    	return false;
    }else{
    	  avicAjax.ajax({
    	        url : 'platform/avicit/pb/commandos/partyCommandos/partyCommandosController/operation/save',
    	        data : {
    	            data : dataVo,
    	            updateSubData : JSON.stringify(updateSubData),
    	            removeSubIds : removeIds
    	        },
    	        type : 'POST',
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
    	                if(r.errorMsg != null && r.errorMsg != ''){
    	                    alertMsg = r.errorMsg;
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
PartyCommandosDetail.prototype.setForm = function(formObj, jsonValue){

    var obj = formObj;
    $.each(jsonValue, function (name, ival) {
    	//debugger;
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
PartyCommandosDetail.prototype.formValidate=function(form){
    form.validate({
        rules: {
            userIdAlias:{
                
            },
            deptIdAlias:{
             
            },
            commandosName:{
                required:true
            },
            commandosType:{
                required:true
            },
            setupTime:{
                required:true,
                dateISO:true
            },
            commandosChargerAlias:{
                required:true
            },
            inPartyorg:{
                required:true
            },
            chargerPost:{
                required:true
            },
            adminortech:{
                required:true
            },
            partyNum:{
                required:true,
                number:true
            },
            pmNum:{
                required:true,
                number:true
            },
            attribute12:{
                required:true,
                number:true
            },
            uniondeptsYn:{
                required:true
            },
            unionDeptsAlias:{
            },
            keyProblems:{
                required:true
            },
            pcSecretLevel:{
                required:true
            },
            autoCode:{
                required:true
            },
            tel:{
                required:true
            }
        }
    });
}

/**
* 控制附件
*/
PartyCommandosDetail.prototype.setAttachMagic = function(attachMagic) {
    //当流程节点配置是否允许附件功能时候，隐藏上传、下载按钮等
    if(attachMagic) {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });
        $('div.uploader-file-item').unbind("mouseover");
    } else {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });
        $('div.uploader-file-item').bind('mouseover',function(){
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }
};
/**
* 流程控制-多附件必填
*/
PartyCommandosDetail.prototype.setAttachRequired = function(tagId,required,obj){
    eval("this.attachRequiredMap." + tagId + " = " + required);
};

PartyCommandosDetail.prototype.attachRequiredMap = {};
PartyCommandosDetail.prototype.validAttachRequired = function(){
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

/**
* 多附件增删控制
*/
PartyCommandosDetail.prototype.setAttachCanAddOrDel = function(tagId,operability,obj){
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

//子表按钮显隐控制
PartyCommandosDetail.prototype.controlSubTableButtonForAccess = function(tagId, operability){
    workflowControlSubTableButtonForAccess.exec(tagId, operability);
};

//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "partyMilepostEdit_insert"){
        return;
    }
    if(operability){
        $("#partyMilepostEdit_insert").css("display","inline-block");
    }else{
        $("#partyMilepostEdit_insert").css("display","none");
    }
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "partyMilepostEdit_del"){
        return;
    }
    if(operability){
        $("#partyMilepostEdit_del").css("display","inline-block");
        var subTableName = "partyMilepostEdit_del".replace("del","control");
        $("#"+subTableName).find(".checkbox").removeAttr("disabled");
    }else{
        $("#partyMilepostEdit_del").css("display","none");
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
PartyCommandosDetail.prototype.controlSelfElement = function(tagId, operability, obj){
    if(operability){
        if(tagId == "partyMilepost_editable"){//判断是否允编辑子表数据
            //获取colModel数组对象
            var columnArray = $('#partyMilepostEditJqGrid').jqGrid('getGridParam','colModel');
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
PartyCommandosDetail.prototype.controlCustomSubTableForAccess = function(tagId, operability, obj){
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
PartyCommandosDetail.prototype.controlCustomSubTableForOperability = function(tagId, operability, obj){
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
PartyCommandosDetail.prototype.controlCustomSubTableForRequired = function(tagId, operability, obj){
    //获取必填字段数组
    var notnullFiledArr = this.partyMilepostEdit.notnullFiled;
    var notnullFiledCommentArr = this.partyMilepostEdit.notnullFiledComment;
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


PartyCommandosDetail.prototype.afterControlFormInput = function () {
	if($("#uniondeptsYn") && $("#uniondeptsYn").val() == '1'){
		$('#unionDeptsAlias').on('focus',function(e){
			new H5CommonSelect({type:'deptSelect', idFiled:'unionDepts',textFiled:'unionDeptsAlias',selectModel:'multi'});
			this.blur();
			nullInput(e);
		});
	}else{
		$('#unionDeptsAlias').attr("disabled","disabled");
		$('#unionDeptsAlias').off('focus');
	}
	if($("#attribute02") && $("#attribute02").val() == '0'){
		$('#attribute03').attr("disabled","disabled");
	}else{
		$('#attribute03').removeAttr('disabled');
	}
	
	
	
};

