/**
* 业务操作对象，需继承基础对象，重写必要的业务操作方法
*/
function DynPointsDetail(form,integralEdit){
    this._formId="#"+form;
    this.integralEdit = integralEdit;
    DefaultForm.call(this);
};
DynPointsDetail.prototype = new DefaultForm();
DynPointsDetail.prototype.formcode = "dynPoints";
/**
* 初始化操作
*/
DynPointsDetail.prototype.initFormData = function(){
    var _self = this;
    avicAjax.ajax({
        url : 'platform/avicit/pb/scoring/dynPoints/dynPointsController/initDetailFormData.json',
        data : {
            id : _self.id
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if (result.flag == "success") {
                _self.setForm($(_self._formId),result.dynPointsDTO);
            } else {
                layer.msg('数据加载失败！');
            }
        }
    });
};
DynPointsDetail.prototype.start = function(defineId,callback){
    var _self = this;
    var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
        isValidate.showErrors();
        return false;
    }
    var dataVo = JSON.stringify(serializeObject($(_self._formId)));
    //子表校验
    var msg = _self.integralEdit.dataValidte();
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
    var updateSubData = _self.integralEdit.getEditData();
    avicAjax.ajax({
        url : 'platform/avicit/pb/scoring/dynPoints/dynPointsController/operation/saveAndStartProcess',
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
            } else {
                layer.msg('保存失败！');
            }
        }
    });
};

/**
* 更新数据
*/
DynPointsDetail.prototype.save=function(callback){
    var _self = this;
    var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
        isValidate.showErrors();
        return false;
    }
    var dataVo = JSON.stringify(serializeObject($(_self._formId)));
    //子表校验
    var msg = _self.integralEdit.dataValidte();
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
    var updateSubData = _self.integralEdit.getEditData();
    var removeIds = JSON.stringify(_self.integralEdit.removeSubIds);
    avicAjax.ajax({
        url : 'platform/avicit/pb/scoring/dynPoints/dynPointsController/operation/save',
        data : {
            data : dataVo,
            updateSubData : JSON.stringify(updateSubData),
            removeIds : removeIds
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if (result.flag == "success") {
                // 启动成功后回调流程刷新按钮
                callback();
                _self.initFormData();
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
};
/**
* 表单重载json对象数据
*/
DynPointsDetail.prototype.setForm = function(formObj, jsonValue){
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
DynPointsDetail.prototype.formValidate=function(form){
    form.validate({
        rules: {
            draftsman:{
            },
            draftingTime:{
                dateISO:true
            },
            deptId:{
            },
            quarter:{
            }
        }
    });
}


//子表按钮显隐控制
DynPointsDetail.prototype.controlSubTableButtonForAccess = function(tagId, operability){
    workflowControlSubTableButtonForAccess.exec(tagId, operability);
};

//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "integralEdit_insert"){
        return;
    }
    if(operability){
        $("#integralEdit_insert").css("display","inline-block");
    }else{
        $("#integralEdit_insert").css("display","none");
    }
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "integralEdit_del"){
        return;
    }
    if(operability){
        $("#integralEdit_del").css("display","inline-block");
        var subTableName = "integralEdit_del".replace("del","control");
        $("#"+subTableName).find(".checkbox").removeAttr("disabled");
    }else{
        $("#integralEdit_del").css("display","none");
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
DynPointsDetail.prototype.controlSelfElement = function(tagId, operability, obj){
    if(operability){
        if(tagId == "integral_editable"){//判断是否允编辑子表数据
            //获取colModel数组对象
            var columnArray = $('#integralEditJqGrid').jqGrid('getGridParam','colModel');
            //给每个colModel属性列设置可编辑
            $.each(columnArray,function(i,item){
                $('#integral').setColProp(item.name,{editable:true});
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
DynPointsDetail.prototype.controlCustomSubTableForAccess = function(tagId, operability, obj){
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
DynPointsDetail.prototype.controlCustomSubTableForOperability = function(tagId, operability, obj){
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
DynPointsDetail.prototype.controlCustomSubTableForRequired = function(tagId, operability, obj){
    //获取必填字段数组
    var notnullFiledArr = this.integralEdit.notnullFiled;
    var notnullFiledCommentArr = this.integralEdit.notnullFiledComment;
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
