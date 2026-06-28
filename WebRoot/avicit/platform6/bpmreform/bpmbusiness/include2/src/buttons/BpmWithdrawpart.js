/**
 * 拿回部分待办
 */
function BpmWithdrawpart(flowEditor, defaultForm, buttonData, isEvent) {
    BpmButton.call(this, flowEditor, defaultForm, buttonData.dowithdrawpart, isEvent);
    this.domeId = "dowithdrawpart";
    this.getHtml();
};
BpmWithdrawpart.prototype = new BpmButton();
/**
 * 执行
 */
BpmWithdrawpart.prototype.execute = function () {
    if (!this.flowEditor.defaultForm.beforeWithdrawpart(this.data)) {
        return;
    }
    var _self = this;
    avicAjax.ajax({
        type: "POST",
        data: {
            processInstanceId: _self.data.procinstDbid
        },
        url: "platform/bpm/clientbpmdisplayaction/getcoordinate",
        dataType: "json",
        success: function (result) {
            if (flowUtils.notNull(result, result.activity)) {
                for (var key in result.activity) {
                    var activity = result.activity[key];
                    var activityName = activity.activityName;
                    var isCurrent = activity.isCurrent;
                    var executionId = activity.executionId;
                    var isAlone = activity.executionAlone;
                    // 只有一个当前节点时候补发操作和拿回操作自动处理
                    if (isAlone && isCurrent == "true") {
                        _self.callback(executionId, activityName);
                        return;
                    }
                }
                _self.withdrawpartTaskDialog = layer.open({
                    type: 2,
                    title: "拿回部分待办节点选择",
                    area: ["800px", "450px"],
                    content: flowUtils.graphPath + "?entryId=" + _self.data.procinstDbid + "&type=dowithdrawpart"
                });
                if (_self.isEvent) {
                    //如果不是审批页面， 最大化
                    layer.full(_self.withdrawpartTaskDialog);
                }
                window.bpmWithdrawpart = _self;
            }
        }
    });
};
/**
 * 执行
 */
BpmWithdrawpart.prototype.callback = function (executionId, targetActivityName) {
    if (flowUtils.notNull(this.withdrawpartTaskDialog)) {
        layer.close(this.withdrawpartTaskDialog);
        this.withdrawpartTaskDialog = null;
    }
    var data = flowUtils.clone(this.data);
    data.executionId = executionId;
    data.targetActivityName = targetActivityName;
    new BpmActor(data, this).open();
};
/**
 *
 * @param data
 * @param users
 */
BpmWithdrawpart.prototype.submit = function (data, users, idea, compelManner, uflowDealType, isUflow) {
    if (!flowUtils.notNull(users) || users.length == 0) {
        flowUtils.warning("选人错误");
        return;
    }
    var _self = this;
    var userJson = {
        users: users,
        idea: idea,
        compelManner: "",
        outcome: data.name
    };
    avicAjax.ajax({
        url: "platform/bpm/business/dowithdrawpart",
        data: {
            procinstDbid: data.procinstDbid,
            executionId: data.executionId,
            taskId: data.taskId,
            userJson: JSON.stringify(userJson)
        },
        type: "POST",
        dataType: "JSON",
        success: function (msg) {
            if (flowUtils.notNull(msg.error)) {
                flowUtils.error(msg.error, msg.errorDetail);
            } else {
                flowUtils.success("操作成功");
                try {
                    _self.flowEditor.defaultForm.afterWithdrawpart(data);
                } catch (e) {

                }
                _self.flowEditor.createButtons();
            }
        }
    });
};
