function ParentCatalogTree(treeUL,enableSelectRoot) {
    this.treeUL = treeUL;//tree位置
    this.tree = null;//tree对象
    this.selectedNodeId = null;//tree点击选中的节点
    this.enableSelectRoot = enableSelectRoot;//是否能选择根节点 1：能选择 其他值：不能选择
    this.init.call(this);
};
//初始化操作
ParentCatalogTree.prototype.init = function (){
    var _this = this;

    var setting = {
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
                var dbid = treeNode.id;
            	var name = treeNode.name;
            	if(!treeNode.pId && !"1"==this.enableSelectRoot){
            		return;
            	}
            	parent.setParentCatalog(dbid,name)

            }
        }
    };

    //手动请求根节点数据
    $.ajax({
        url: "bpm/deploy/getFlowTypeTree",
        data: "id=root",
        type: "post",
        async: false,
        dataType: "json",
        success: function (backData) {
            var zNodes = backData;
            _this.tree = $.fn.zTree.init($("#" + _this.treeUL), setting, zNodes);

            //_this.clickFirstRootNode();
        }
    });
};
