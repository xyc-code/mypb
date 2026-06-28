/**
 * 流程选人
 */
function BpmActor(data,submitObj) {
	this.data = data;
	this.submitObj = submitObj;
};
/**
 * 执行
 */
BpmActor.prototype.open = function () {
	var _self = this;
	var data = _self.data;
	avicAjax.ajax({
		url : "platform/bpm/business/getActJsonInfo2",
		data : {
			procinstDbid : data.procinstDbid,
			executionId : data.executionId,
			taskId : data.taskId,
			outcome : data.name,
			targetActivityName : data.targetActivityName,
			type : data.event
		},
		type : "POST",
		dataType : "JSON",
		success : function(result) {
			if (flowUtils.notNull(result.error)) {
				flowUtils.error(result.error);
			} else {
				var commonActor = new CommonActor(data,result.taskUserSelect,_self.submitObj);
				commonActor.open();
			}
		}
	});

};
BpmActor.prototype.getUsers = function(){
	var users;
	var _self = this;
	var url = 'platform/bpmActor/bpmSelectUserAction2/getAutoSelectedUsersJSONData';
	$.ajax({
		url : url,
		async: false,
		dataType : "JSON",
		data : {
			procinstDbid : this.data.procinstDbid,
			executionId : this.data.executionId,
			taskId: this.data.taskId,
			targetActivityName : this.data.targetActivityName,
			type : this.data.event,
			outcome : this.data.name
		},
		type : "GET",
		success : function(msg) {
			if(_self.data.event  == "doretreattodraft" || _self.data.event  == "doretreattoprev" || _self.data.event  == "dowithdraw"){//非分支
				users = [{
					selectedUsers : msg,
					targetActivityName : _self.data.targetActivityName == null ? "" : _self.data.targetActivityName,
					outcome : _self.data.name == null ? "" : _self.data.name,
					workhandUsers : []
				}];
			} else {
				users = msg;
			}
		}
	});
	return users;
};
