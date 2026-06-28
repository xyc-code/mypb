function FlowTypeTree(treeUL, searchD, searchbtn) {
    this.treeUL = treeUL;//tree位置
    this.tree = null;//tree对象
    this.selectedNodeId = null;//tree点击选中的节点
	this._searchId ="#"+searchD;
	this._searchbtnId ="#"+searchbtn;
	this.setting = {};
    this.init.call(this);
};
//初始化操作
FlowTypeTree.prototype.init = function () {
    var _this = this;

	$(_this._searchId).on('keyup',function(e){
		if(e.keyCode == 13){
			_this.onseach(13,$(_this._searchId).val());
		}
	});
	$(_this._searchbtnId).on('click',function(e){
		_this.onseach(13,$(_this._searchId).val());
	});

    this.setting = {
        async: {
            enable: true,
            url: "bpm/deploy/getFlowTypeTree",//异步请求树子节点url
            autoParam: ["id"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "pId"
            }
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                _this.selectedNodeId = treeNode.id;
                _this.selectedNodePId = treeNode.pId;
                $('#' + deployedFlow.componentDiv).empty();
                $('#' + unDeployedFlow.componentDiv).empty();
                //获取该分类下已发布和未发布流程
                _this.getFlowList(_this.selectedNodeId);
            }
        }
    };

    this.initRoot();
};

FlowTypeTree.prototype.initRoot = function(){
	var _this = this;
	if(this.initRootFlg){
		return;
	}
	this.initRootFlg = true;
	//手动请求根节点数据
	avicAjax.ajax({
		url: "bpm/deploy/getFlowTypeTree",
		data: {
			id: "root"
		},
		type: "post",
		async: false,
		dataType: "json",
		success: function (backData) {
			var zNodes = backData;
			_this.tree = $.fn.zTree.init($("#" + _this.treeUL), _this.setting, zNodes);
			_this.clickFirstRootNode();
		}
	});
};
FlowTypeTree.prototype.initRootFlg = false;
//查询框查询
FlowTypeTree.prototype.onseach = function(ecode, value){
	var _self = this;
	if(ecode == 13){
		if(value == null||value == ""||value=='输入名称查询'){
			this.initRoot();
			return;
		}
		this.initRootFlg = false;
		avicAjax.ajax({
			cache: true,
			type: "post",
			url:  "bpm/deploy/searchFlowTypeTree",
			dataType:"json",
			data:{search_text: $.trim(value)},
			async: false,
			success: function(data) {
				_self.tree = $.fn.zTree.init($("#" + _self.treeUL), _self.setting, data);
			}
		});
	}
};

FlowTypeTree.prototype.getFlowList = function (selectedNodeId){

	$(".popover").remove();
	var _this = this;
	if(showType=="2"){
		
		if(flowModel==null || flowModel==undefined){
			var searchSubNames = new Array();
			var searchSubTips = new Array();
			searchSubNames.push("name");
			searchSubTips.push("流程名称");
			$('#flowModel_keyWord').attr('placeholder', '请输入' + searchSubTips[0]);
			var flowModelGridColModel = [
				{
					label : 'id',
					name : 'id',
					key : true,
					hidden : true
				}
				,{
					label : 'type',
					name : 'type',
					hidden : true
				}
				, {
					label : '流程名称',
					name : 'name',
					width : 25,
					align : 'left',
					sortable : false,
					formatter:getEdit
				}
				,{
					label : '流程定义ID',
					name : 'pdId',
					width : 50,
					align : 'left',
					sortable : false
				}
				, {
					label : '流程状态',
					name : 'stateName',
					width : 15,
					align : 'center',
					sortable : false,
					formatter : function(cellvalue, options, rowObject) {
						if (rowObject.state == 'active') {
							return '启用';
						} else if (rowObject.state == 'suspended') {
							return '停用';
						}else{
							return '';
						}

					}
				}
				, {
					label : '是否发布',
					name : 'typeName',
					width : 15,
					align : 'center',
					sortable : false,
					formatter : function(cellvalue, options, rowObject) {
						if (rowObject.type == '1') {
							return '否';
						} else if (rowObject.type == '2') {
							return '是';
						}

					}
				}
				, {
					label : '部署日期',
					name : 'deployDate',
					width : 20,
					align : 'left',
					sortable : false
				}
				, {
					label : '部署人',
					name : 'deployer',
					width : 20,
					align : 'left',
					sortable : false
				}
				, {
					label : '排序',
					name : 'order',
					width : 15,
					align : 'center',
					sortable : false
				}
				,  {
					label : '操作',
					name : 'opt',
					width : 50,
					align : 'center',
					sortable : false,
					formatter:getOptButtons
				}
			];

			var url = "bpm/deploy/searchFlowModelByPage";
			flowModel = new FlowModel('flowModel', url, "formSub", flowModelGridColModel, 'searchDialogSub', selectedNodeId,
					"", searchSubNames, "flowModel_keyWord");
		}else{
			flowModel.reLoad(selectedNodeId);
		}
	}else{
		var processName = $("#searchProcessName").val();
		var limitCount = $("#limitCount").val();
		var isShowStopModel = $("#isShowStopModel").is(":checked");
		var state = "";
		if(!isShowStopModel){
			state = "active";
		}
			$.ajax({
	        url: "bpm/deploy/getPrcessPublishByPage",
	        data: "selectedNodeId=" + selectedNodeId+"&limitCount="+limitCount+"&state="+state+"&processName="+processName,
	        type: "post",
	        async: false,
	        dataType: "json",
	        success: function (backData) {
	        	//已发布流程
	            var deployedList = backData.deployedList;
	            //未发布流程
	            var unDeployedList = backData.unDeployedList;

	            for (var i = 0; i < deployedList.length; i++) {
	            	deployedFlow.setComponent(deployedList[i]);
	            }
	            for (var i = 0; i < unDeployedList.length; i++) {
	            	unDeployedFlow.setComponent(unDeployedList[i]);
	            }
	        }
	    });
	}

};

//模拟点击第一个根节点
FlowTypeTree.prototype.clickFirstRootNode = function () {
    var _this = this;
    //var spanId = _this.tree.getNodeByParam("pId", null, null).tId + "_span";
    var treeObj = $.fn.zTree.getZTreeObj("flowTypeTreeUL");
    var node = treeObj.getNodes();
    var nodes = treeObj.transformToArray(node);
    var firstNode = nodes[1];
    if(firstNode == undefined){
    	return;
    }
    var spanId = firstNode.tId + "_span";
    $("#" + spanId + "").click();
}

//模拟点击第一个根节点
FlowTypeTree.prototype.clickNode = function () {
  var _this = this;
  var node = _this.tree.getNodeByParam("id", _this.selectedNodeId);
  $("#"+node.tId+"_span").click();
}

//重新加载pId父节点的子节点（当父节点的子节点进行增、删、改后调用）
FlowTypeTree.prototype.reAsyncChildNodes = function (pId) {
	var _this = this;
	var n = _this.tree.getNodeByParam("id", pId, null);
	if (!n.isParent)
		n.isParent = "true";
	_this.tree.reAsyncChildNodes(n, "refresh");
}

//重新加载树
FlowTypeTree.prototype.refreshTree = function () {
	var _this = this;
	_this.initRootFlg = false;
	_this.initRoot();
}
//删除id节点及其子节点（当父节点删除后调用）
FlowTypeTree.prototype.removeNode = function (id) {
    var _this = this;

    _this.tree.removeNode(_this.tree.getNodeByParam("id", id, null));
}
//更新id节点自身数据（当父节点编辑后调用）
FlowTypeTree.prototype.updateNode = function (id, name) {
    var _this = this;

    var node = _this.tree.getNodeByParam("id", id, null);
    node.name = name;

    _this.tree.updateNode(node);
}
