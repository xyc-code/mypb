/**
 * 拿回
 */
function BpmWithdraw(flowEditor, defaultForm, buttonData, isEvent) {
	BpmButton.call(this, flowEditor, defaultForm, buttonData.dowithdraw, isEvent);
	if(this.isEnable()){
		this.flowEditor.needIdeaText = true;
	}
	this.domeId = "bpm_withdraw";
};
BpmWithdraw.prototype = new BpmButton();
BpmWithdraw.prototype.getHtmlForDefaultBar = function() {
	if (this.isEnable()) {
		var _self = this;
		var button = $('<button class="listBtn grey btn btn-default dropdown-toggle center" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="txt">' + this.data.lable + '</span></button>');
		button.on("click", function() {
			_self.execute();
		});
		$("#bpm_buttons_default1").append(button);
	}
};
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
	var _self = this;
	var data = flowUtils.clone(this.data);
	data.executionId = executionId;
	avicAjax.ajax({
		url : "platform/bpm/business/getActJsonInfo",
		data : {
			procinstDbid : data.procinstDbid,
			executionId : data.executionId,
			taskId : data.taskId,
			outcome : data.name,
			targetActivityName : data.targetActivityName,
			type : 'dowithdraw'
		},
		type : "POST",
		dataType : "JSON",
		success : function(result) {
			if (flowUtils.notNull(result.error)) {
				flowUtils.error(result.error);
			} else {
				flowUtils.confirm("确定拿回吗？", function(){
					var user = new BpmActor(data, result.taskUserSelect, _self).getUsers();
					_self.submit(data, user);
				});
			}
		}
	});
};
/**
 *
 * @param data
 * @param users
 */
BpmWithdraw.prototype.submit = function(data, users) {
	if (!flowUtils.notNull(users) || users.length == 0) {
		flowUtils.warning("选人错误");
		return;
	}
	var _self = this;
	var userJson = {
		users : users,
		idea : _self.getIdeaText(),
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
				flowUtils.success("拿回成功！表单将自动关闭", function() {
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
