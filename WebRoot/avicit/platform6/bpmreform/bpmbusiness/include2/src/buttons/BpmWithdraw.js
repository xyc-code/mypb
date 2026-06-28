/**
 * 拿回
 */
function BpmWithdraw(flowEditor, defaultForm, buttonData, isEvent) {
	BpmButton.call(this, flowEditor, defaultForm, buttonData.dowithdraw, isEvent);
	this.domeId = "dowithdraw";
	this.getHtml();
};
BpmWithdraw.prototype = new BpmButton();
/**
 * 执行
 */
BpmWithdraw.prototype.execute = function() {
	if(!this.flowEditor.defaultForm.beforeWithdraw(this.data)){
		return;
	}
	var _self = this;
	avicAjax.ajax({
		type : "POST",
		data : {
			processInstanceId : _self.data.procinstDbid,
			executionId : _self.data.executionId,
			taskId : _self.data.taskId
		},
		url : "platform/bpm/business/getWithdrawExecutionId",
		dataType : "json",
		success : function(msg) {
			if (flowUtils.notNull(msg.error)) {
				flowUtils.error(msg.error, msg.errorDetail);
			} else {
				_self.callback(msg.executionId);
			}
		}
	});
};
/**
 * 执行
 */
BpmWithdraw.prototype.callback = function(executionId) {
	var data = flowUtils.clone(this.data);
	data.executionId = executionId;
	new BpmActor(data, this).open();
};
/**
 *
 * @param data
 * @param users
 */
BpmWithdraw.prototype.submit = function(data, users, idea, compelManner, uflowDealType, isUflow) {
	if (!flowUtils.notNull(users) || users.length == 0) {
		flowUtils.warning("选人错误");
		return;
	}
	var _self = this;
	var userJson = {
		users : users,
		idea : idea,
		compelManner : "",
		outcome : data.name
	};
	avicAjax.ajax({
		url : "platform/bpm/business/dowithdrawcurract",
		data : {
			procinstDbid : data.procinstDbid,
			executionId : data.executionId,
			userJson : JSON.stringify(userJson)
		},
		type : "POST",
		dataType : "JSON",
		success : function(msg) {
			if (flowUtils.notNull(msg.error)) {
				flowUtils.error(msg.error,msg.errorDetail);
			} else {
				flowUtils.success("操作成功！表单将自动关闭", function() {
					flowUtils.refreshBack();
					flowUtils.closeWindowOnDialog();
                    setTimeout(function(){
                        _self.flowEditor.createButtons();
                    },500);
				}, true);
				try {
					_self.flowEditor.defaultForm.afterWithdraw(data);
				} catch (e) {

				}
			}
		}
	});
};
