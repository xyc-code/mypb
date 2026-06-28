EformFlow.prototype.beforeSubmit = function(data) {
	if(data.id == 'submit_to task2'){//拟稿节点提交
		//后续与客户确认是否存在部分调拨的情况
		return true;
	}else{
		return true;
	}
};