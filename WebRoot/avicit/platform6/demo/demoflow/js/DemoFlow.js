/**
 * 业务操作对象，需继承基础对象，重新必要的业务操作方法
 */
function DemoFlow() {
	DefaultForm.call(this);
};
DemoFlow.prototype = new DefaultForm();

/**
 * 提交和退回前是否自动保存，默认是false
 */
DemoFlow.prototype.isAutoSave = true;
/**
 * formcode
 */
DemoFlow.prototype.formcode = "demoflow";
/**
 * 初始化表单数据
 */
DemoFlow.prototype.initFormData = function() {
	var _self = this;
	avicAjax.ajax({
		url : 'oa/demo/demoflow/DemoFlowController/getFormData',
		data : {
			id : _self.id
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (flowUtils.notNull(result.error)) {
				flowUtils.error(result.error);
			} else {
				_self.setData(result.dto);
			}
		}
	});
};
/**
 * 启动流程
 * 
 * @param defineId
 * @param callback
 */
DemoFlow.prototype.start = function(defineId, callback) {
	var _self = this;
	avicAjax.ajax({
		url : 'oa/demo/demoflow/DemoFlowController/start',
		data : {
			defineId : defineId,
			formcode : _self.formcode,
			datas : JSON.stringify(_self.getData())
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (flowUtils.notNull(result.error)) {
				flowUtils.error(result.error);
			} else {
				$("#version").val(result.version);
				callback(result.startResult);
			}
		}
	});
};
/**
 * 更新数据
 * 
 * @param callback
 */
DemoFlow.prototype.save = function(callback) {
	var _self = this;
	avicAjax.ajax({
		url : 'oa/demo/demoflow/DemoFlowController/updateFormData',
		data : {
			datas : JSON.stringify(_self.getData())
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if (flowUtils.notNull(result.error)) {
				flowUtils.error(result.error);
			} else {
				$("#version").val(result.version);
				callback();
			}
		}
	});
};
/**
 * 组装表单数据
 */
DemoFlow.prototype.getData = function() {
	var data = {};
	data.id = this.id;
	data.title = $("#title").val();
	data.version = $("#version").val();
	return data;
};
/**
 * 设置表单数据
 * 
 * @param data
 */
DemoFlow.prototype.setData = function(data) {
	if (data != null) {
		$("#title").val(data.title);
		$("#version").val(data.version);
	}
};
DemoFlow.prototype.beforeSubmit = function(data) {
	/*alert(this.flowEditor.flowModel.entryId);
	alert(this.flowEditor.flowModel.executionId);
	alert(this.flowEditor.flowModel.taskId);
	alert(this.flowEditor.flowModel.activityname);*/
	return true;
};
DemoFlow.prototype.controlSelfElement = function(tagId, operability, obj){
	if(operability){
		//$("#" + tagId).removeAttr("disabled");
		$("#" + tagId).show();
	}else{
		//$("#" + tagId).attr("disabled", "disabled");
		$("#" + tagId).hide();
	}
};
/*DemoFlow.prototype.test = function(){
	alert(this.flowEditor.flowModel.entryId);
	alert(this.flowEditor.flowModel.executionId);
	alert(this.flowEditor.flowModel.taskId);
	alert(this.flowEditor.flowModel.activityname);
};*/
/**
* 控制附件
*/
/*DemoFlow.prototype.setAttachMagic = function(attachMagic) {
    //当流程节点配置是否允许附件功能时候，隐藏上传、下载按钮等
    if(attachMagic) {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).css("display", "");
        });

        $('body').unbind("DOMNodeInserted");
    }
    else {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).css("display", "none");
        });
        $('body').bind("DOMNodeInserted", function (event) {
			var obj = jQuery(event.target);
			if (obj[0].className == "uploader-file-infos") {
				obj.find(".uploader-file-infos-delete").css("display", "none");
			}
		});
    }
};*/