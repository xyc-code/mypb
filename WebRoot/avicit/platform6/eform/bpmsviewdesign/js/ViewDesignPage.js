

function ViewDesignPage(){
	this.save = function(publish){
		_this = this;
		var xml = engine.ConvertToXML();
		if (xml == false){
			return false;
		}
        if (!engine.doValidate()){
            return false;
        }
		var html = viewEditor.getLayoutHtml();
		if (xml == null || xml ==""){
			top.layer.alert('保存失败！请确保组件设计的完整性', {
            					icon: 2,
            					area: ['400px', ''],
            					closeBtn: 0
            				});
			return false;
		}

		if (html == null || html ==""){
			top.layer.alert('保存失败！请确保布局设计的完整性', {
            					icon: 2,
            					area: ['400px', ''],
            					closeBtn: 0
            				});
			return false;
		}
		var confirmMsg = "";
		if (publish == "1"){
			confirmMsg = "确定要更新并发布当前视图吗？";
		}else if (publish == "2"){
			confirmMsg = "确定要保存为新版本吗？";
		}else{
			confirmMsg = "确定要更新当前视图吗？";
		}
		layer.confirm(confirmMsg,
			{
				icon: 3,
				title: '提示',
				area: ['400px', ''],
				closeBtn: 0
			},
			function (index) {
				layer.close(index);
				var saveUrl = "";
				if (publish == "2"){
					saveUrl = './eform/eformViewInfoController/saveNewVersion/' + viewId +"/"+viewCode;
				}else {
					saveUrl = './eform/eformViewInfoController/saveXml/' + viewId +"/"+version;
				}
				avicAjax.ajax({
					url: saveUrl,
					contentType: "application/xml; charset=utf-8",
					data:  xml   + "#!#@#textsplit#!#@#" +  html   + "#!#@#textsplit#!#@#" +  viewJs   + "#!#@#textsplit#!#@#" +  viewCss,
					type : 'post',
					dataType : 'json',
					async:true,
					success : function(r){
						if (r.flag == "success") {
							if(publish == "2"){
								//layer.msg('保存新版本成功！', {icon: 1});
								version = r.newVersion;
								_this.dopublish(viewId,r.menuId,'保存新版本成功！');
							}else if(publish == "1"){
								_this.publish(viewId,viewName,viewCode,viewStyle);
							}else{
								layer.msg('操作成功！', {icon: 1});
							}
						}else{
							top.layer.alert('保存失败！'+r.error, {
								title: '提示',
								icon: 2,
								area: ['400px', ''],
								closeBtn: 0
							});
						}
					}
				});
			}
		);
	};


	this.toLog = function () {
		var _this = this;
		_this.logDialog = layer.open({
			type: 2,
			title: '日志',
			skin: 'bs-modal',
			area: ['80%', '70%'],
			maxmin: false,
			content: "avicit/platform6/eform/bpmsviewdesign/viewLog.jsp"
		});
	};

	this.showFunc = function () {
		var _this = this;
		_this.funcDialog = layer.open({
			type: 2,
			title: 'JS全局查看',
			skin: 'bs-modal',
			area: ['80%', '70%'],
			maxmin: false,
			content: "avicit/platform6/eform/bpmsviewdesign/viewFunc.jsp"
		});
	}

    /**
     * 应用JS文件
     */
    this.applyJs = function () {
        var _this = this;
        layer.open({
            type: 2,
            title: 'JS文件扩展',
            skin: 'bs-modal',
            area: ['50%', '50%'],
            maxmin: false,
            content: "avicit/platform6/eform/bpmsviewdesign/applyJs.jsp"
        });
    };

    /**
     * 应用CSS文件
     */
    this.applyCss= function () {
        var _this = this;
        layer.open({
            type: 2,
            title: 'CSS文件扩展',
            skin: 'bs-modal',
            area: ['50%', '50%'],
            maxmin: false,
            content: "avicit/platform6/eform/bpmsviewdesign/applyCss.jsp"
        });
    };

    this.view = function(){
        if (!engine.doValidate()){
            return false;
        }
		var xml = engine.ConvertToXML();
		if (xml == false){
			return false;
		}
		var html = viewEditor.getLayoutHtml();
		if (xml == null || xml ==""){
			top.layer.alert('请确保组件设计的完整性！', {
				icon: 2,
				area: ['400px', ''],
				closeBtn: 0
			});
			return false;
		}

		if (html == null || html ==""){
			top.layer.alert('请确保布局设计的完整性！', {
				icon: 2,
				area: ['400px', ''],
				closeBtn: 0
			});
			return false;
		}
		avicAjax.ajax({
			url: './eform/eformViewInfoController/saveXml/' + viewId +"/"+version,
			contentType: "application/xml; charset=utf-8",
			data:  xml   + "#!#@#textsplit#!#@#" +  html   + "#!#@#textsplit#!#@#" +  viewJs   + "#!#@#textsplit#!#@#" +  viewCss,
			type : 'post',
			dataType : 'json',
			async:true,
			success : function(r){
				if (r.flag == "success") {
					var dialog = layer.open({
						type: 2,
						title: '预览视图',
						skin: 'bs-modal',
						area: ['100%', '100%'],
						maxmin: false,
						content: "avicit/platform6/eform/bpmsviewdesign/designView.jsp?id=" + viewId
					});
				}else{
					top.layer.alert('保存失败！'+r.error, {
						title: '提示',
						icon: 2,
						area: ['400px', ''],
						closeBtn: 0
					});
				}
			}
		});

	};


    /**
     * 视图帮助
     */
    this.helpDoc = function () {
        var helpDocDialog = layer.open({
            type: 2,
            title: '视图帮助',
            skin: 'bs-modal',
            area: ['70%', '80%'],
            maxmin: false,
            content: "avicit/platform6/eform/bpmsviewdesign/help.jsp"
        });
    };
	
	this.saveAndPublish = function(id,viewName,viewCode,viewStyle){
        if (!engine.doValidate()){
            return false;
        }
		if (this.save('1') == false){
			return false;
		}
		//this.publish(id,viewName,viewCode,viewStyle);
	};
	
	this.publish = function (id,viewName,viewCode,viewStyle){
		_this = this;
		publishDialog = top.layer.open({
            type: 2,
            title: '快速发布',
            skin: 'bs-modal',
            area: ['50%', '60%'],
            maxmin: false,
            content: "platform/eform/eformViewInfoController/publishViewMenu?id=" + id + "&viewName=" + encodeURIComponent(viewName) + "&viewCode=" + viewCode + "&type=both",
            btn: ['确定', '取消'],
            yes: function(index, layero){
            	var iframeWin = layero.find('iframe')[0].contentWindow;
                var publicType = iframeWin.getPublicType();
                if("1"==publicType) {
                    var arg = {
                        parentId: iframeWin.getSelectMenu(),
                        menuName: iframeWin.getViewName(),
                        menuCode: iframeWin.getViewCode(),
                        menuUrl: iframeWin.getUrl(),
                        openType: iframeWin.getOpenType(),
                        menuView: "avicit/eformmodule/view/" + viewCode + "/"+version+"/" + viewStyle + "/view.jsp",
                        menuOrder: "1",
                        menuStatus: "1",
                        isShow: "0"
                    };
                    var currentApplicationAndOrg = iframeWin.getCurrentApplicationAndOrg();
                    avicAjax.ajax({
                        url: "console/menu/console/" + currentApplicationAndOrg + "/save/insert",
                        data: {data: JSON.stringify(arg)},
                        type: 'post',
                        dataType: 'json',
                        success: function (msg) {
                            if (msg.flag == "success") {
                                top.layer.close(index);
                                _this.dopublish(id, msg.id, "发布成功！");
                            } else {
                                top.layer.alert('发布失败！' + msg.e, {
                                    icon: 2,
                                    area: ['400px', ''],
                                    closeBtn: 0
                                });
                            }
//            			top.layer.msg("发布成功！");
//            			setViewInfo
                        }
                    });
                }else{
                    top.layer.close(index);
                    _this.dopublish(id, "", "发布成功！");
				}
            	
            },
            no: function(index, layero){
            	layero.close(index);
            }
        });
	};

	this.dopublish = function(viewid,menuid,msg){

		avicAjax.ajax({
			url : "platform/eform/eformViewInfoController/publishViewInfo?id="+viewid+"&menuid="+menuid+"&version="+version,
			dataType : "JSON",
			type : "GET",
			success : function(r) {
				if (r.flag=="success"){
					// var viewInfo = window.opener.$('#' + window.opener.eformFormView.formViewDiv).find("#" + viewid);
					// viewInfo.remove();
					// window.opener.eformFormView.setViewInfo(r.data);
                    window.opener.eformComponent.clickTitle(window.opener.eformComponent.selectedEformComponentId);
					// if (window.opener.eformFormViewModel!=null && typeof(window.opener.eformFormViewModel)!="undefined")
					// 	window.opener.eformFormViewModel.reLoad(window.opener.eformComponent.selectedEformComponentId);
                    if(menuid==''){
                        top.layer.alert(msg+'菜单配置被修改过，请自行变更菜单',{
                            icon: 1,
                            area: ['200px', ''],
                            closeBtn: 0
                        }, function(index){
                            window.close();
                            layer.close(index);
                        });
                    }else{
                        top.layer.msg(msg, {icon: 1});
                        setTimeout(function () {
                            window.close();
                        }, 1000);
					}
				}else{
					layer.alert('发布失败！' + r.error, {
						icon: 2,
						area: ['400px', ''],
						closeBtn: 0
					});
				}
			},
			error : function(msg){
				layer.msg("发布失败！",{icon: 2});
			}
		});
	};
	
	this.open = function(){
		
	};

	this.saveNewVersion = function () {
		_this = this;
		_this.save("2");
	};


	this.setViewContent = function (treeNode,layout,viewJs,viewCss) {
		//engine = new ViewEngine();
		//engine.initButtonArea();
		parent.viewJs = viewJs;
		parent.viewCss = viewCss;
		engine.layout = layout;
		engine.setLayout();
		$(".eform-layout").html(engine.layout);

		treeNode = JSON.parse(treeNode);
		var log, className = "dark", curDragNodes, autoExpandNode;
		function beforeDrag(treeId, treeNodes) {
			className = (className === "dark" ? "":"dark");
			for (var i=0,l=treeNodes.length; i<l; i++) {
				if (treeNodes[i].drag === false) {
					curDragNodes = null;
					return false;
				} else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
					curDragNodes = null;
					return false;
				}
			}
			curDragNodes = treeNodes;
			return true;
		}
		function beforeDragOpen(treeId, treeNode) {
			autoExpandNode = treeNode;
			return true;
		}
		function beforeDrop(treeId, treeNodes, targetNode, moveType, isCopy) {
			className = (className === "dark" ? "":"dark");
			return true;
		}
		function onDrag(event, treeId, treeNodes) {
			className = (className === "dark" ? "":"dark");
		}
		function onDrop(event, treeId, treeNodes, targetNode, moveType, isCopy) {
			className = (className === "dark" ? "":"dark");

		}
		function dropPrev(treeId, nodes, targetNode) {
			if(nodes[0].type == targetNode.type||nodes[0].parentTId == targetNode.parentTId){
				if((nodes[0].type === 'filter' || nodes[0].type === 'filterOr' || nodes[0].type === 'filterGroup')&&nodes[0].parentTId != targetNode.parentTId){
					return false;
				}
				return true;
			}else{
				return false;
			}
		}

		function dropInner(treeId, nodes, targetNode) {
			if((nodes[0].type === 'tableToolbarButton' || nodes[0].type === 'treeGridToolbarButton' || nodes[0].type === 'dataListToolbarButton')){
				if((targetNode.type === 'tableToolbarButtonGroup' || targetNode.type === 'dataListToolbarButtonGroup') && nodes[0].parentTId == targetNode.parentTId) {
					return true;
				}else if ((targetNode.type === 'treeGridToolbarButtonArea' || targetNode.type === 'tableToolbarButtonArea' || targetNode.type === 'dataListToolbarButtonArea') && nodes[0].getParentNode().parentTId == targetNode.tId){
					return true;
				}
			}else{
				return false;
			}
		}


		engine.treeNodes = treeNode;
		engine.setTreeNode();
		if(engine.treeNodes!=null && typeof(engine.treeNodes) != 'undefined' && engine.treeNodes != ""){
			data = engine.treeNodes;
		}else{
			data = [{
				id : viewId,
				pid: 0,
				type : "view",
				name : viewName,
				attribute:{id : viewId, name : viewName},
				version:version
			}];
		}

		var setting = {
			check : {
				enable : false
			},
			view : {
				expandSpeed : 300
			},
			edit: {
				drag: {
					autoExpandTrigger: true,
					prev: dropPrev,
					inner: dropInner,
					next: dropPrev
				},
				enable: true,
				showRemoveBtn: false,
				showRenameBtn: false
			},
			data : {
				simpleData : {
					enable : true,
					idKey : "id",
					pIdKey : "pid",
					rootPId : 0
				}
			},
			callback : {
				beforeDrag: beforeDrag, //拖拽前：捕获节点被拖拽之前的事件回调函数，并且根据返回值确定是否允许开启拖拽操作
				beforeDrop: beforeDrop, //拖拽中：捕获节点操作结束之前的事件回调函数，并且根据返回值确定是否允许此拖拽操作
				beforeDragOpen: beforeDragOpen, //拖拽到的目标节点是否展开：用于捕获拖拽节点移动到折叠状态的父节点后，即将自动展开该父节点之前的事件回调函数，并且根据返回值确定是否允许自动展开操作
				onDrag: onDrag, //捕获节点被拖拽的事件回调函数
				onDrop: onDrop, //捕获节点拖拽操作结束的事件回调函数
				beforeClick: function (treeId, treeNode,clickFlag) {
					$('.nav-tabs').find('>li:eq(0)').click();
					if (!engine.listenNode(treeId, treeNode,clickFlag)) {
						return false;
					}
				},
				onRightClick : function OnRightClick(event, treeId, treeNode) {

					var treeObj = $.fn.zTree.getZTreeObj(treeId);
					var nodes = treeObj.getSelectedNodes();
					if (nodes != null && nodes.length>1){

						var type = nodes[0].type;
						for (var index in nodes){
							if (index === "clone"){
								continue;
							}
							if (nodes[index].type != type){
								treeObj.selectNode(treeNode);
								engine.ShowMenu(event, treeId, treeNode);
								return;
							}
						}
						engine.ShowMenu(event, treeId, treeNode,true);

					}else {
						treeObj.selectNode(treeNode);
						engine.ShowMenu(event, treeId, treeNode);
					}
				}
			}
		};

		var viewTree = $.fn.zTree.init($("#viewTree"), setting, data);
		viewTree.expandAll(true);
		engine.InitEngine({viewTree: viewTree});
	},

	this.previewLog = function(logId){
		//engine.viewSchemaLog = viewSchemaLog;
		//engine.viewlayoutLog = viewlayoutLog;
		var dialog = layer.open({
			type: 2,
			title: '预览视图',
			skin: 'bs-modal',
			area: ['100%', '100%'],
			maxmin: false,
			content: "avicit/platform6/eform/bpmsviewdesign/designLogView.jsp?id=" + viewId + "&logId=" + logId
		});
	};
}