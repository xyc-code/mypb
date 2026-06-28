/**
 * SysLookupHiberarchyApi      多维通用代码前台调用接口
 * datagrid                    表格元素table的id
 * searchD                     搜索按钮id
 * keyWordId                   快速搜索框id
 * id                          id选择器,必填
 * parentId                    父级id选择器,必填
 * parentName                  父级名称选择器,必填
 * treeStyle                   树风格 0:treeGrid  1:ztree 默认0
 * treeUniqueKey               树节点唯一标识,多维通用代码表中全表唯一,必填
 * treeDepth                   树深度,java中数据类型为long[暂时不使用]
 * iframeWidth                 弹出框宽度
 * iframeHeight                弹出框高度
 * expandNodes                 展开层数,必填
 * flag                        选项[grid,tree,select],必填
 */
function SysLookupHiberarchyApi(paramObj,callback) {
    var _self = this;
    if(paramObj == null || paramObj == undefined || paramObj == ''){
        throw new Error("第一个参数不能为空！");
    }else if(paramObj.flag != 'select' && paramObj.flag != 'tree' && paramObj.flag != 'grid'){
        throw new Error("第一个参数中属性【flag】必须为【select、tree、grid】中任意一个！");
    }else {
       if(paramObj.flag == 'select'){//选择页
           var _url = "console/LookupHiberarchy/toSysLookupHiberarchyPage";
           this.getUrl = function () {
               return _url;
           }
           this.expandNodes = paramObj.expandNodes;
           if(paramObj.treeStyle == 'undefined' || paramObj.treeStyle == undefined || paramObj.treeStyle == null || paramObj.treeStyle == ''){
               this.treeStyle = '0';
           }else if(paramObj.treeStyle != '0' && paramObj.treeStyle != '1'){
               this.treeStyle = '0';
           }else {
               this.treeStyle = paramObj.treeStyle
           }
           //this.treeStyle = choosePage.treeStyle || '0';
           this.treeUniqueKey = paramObj.treeUniqueKey || '00001';
           this.treeDepth = (paramObj.treeDepth == 'undefined' || paramObj.treeDepth == undefined || paramObj.treeDepth < 1 || paramObj.treeDepth == '' || paramObj.treeDepth == null) ? '-1' : paramObj.treeDepth;
           this.id = '#' + paramObj.id;
           this.parentId = '#' + paramObj.parentId;
           this.parentName = '#' + paramObj.parentName;
           this.dialogWidth = '';
           this.dialogHeigth = '';
           this.openSelectDialog.call(this);
       }else {//初始化
           //初始化页面地址
           var _urlInit = 'console/LookupHiberarchy';
           this.getUrlInit = function () {
               return _urlInit;
           }
           this._doc = document;
           this.treeUniqueKeyInit = paramObj.treeUniqueKey ;
           this.treeDepthInit = (paramObj.treeDepth == 'undefined' || paramObj.treeDepth == undefined || paramObj.treeDepth < 1 || paramObj.treeDepth == '' || paramObj.treeDepth == null) ? '-1' : paramObj.treeDepth;
           this._datagridId = '#' + paramObj.datagrid;
           this._jqgridToolbar = '#t_' + paramObj.datagrid;
           this._searchDialogId = '#' + paramObj.searchD;
           this._keyWordId = '#' + paramObj.keyWordId;
           this.expandNodes = paramObj.expandNodes;
           if(paramObj.flag == 'tree'){
               /*ztree开始*/
               this.tree = null;
               this._selectNode={};
               var _onSelectZtree = function(){};//单击node事件
               if(callback instanceof Function){
                   _onSelectZtree = callback;
               }else if(!(callback == undefined)){
                   throw new Error("参数【"+callback+"】必须为函数！");
               }
               this.getOnSelectZtree = function(){
                   return _onSelectZtree;
               };
               this.initZtree.call(this);
           }else if(paramObj.flag == 'grid'){
               /*grid开始*/
               this._formId = '#' + paramObj.form;
               /*this.dataGridColModel = paramObj.dataGridColModel;*/
               this.checkTreeRootFlag = false;
               var _onClickGrid = function(){};//单击事件
               if(callback instanceof Function){
                   _onClickGrid = callback;
               }else if(!(callback == undefined)){
                   throw new Error("参数【"+callback+"】必须为函数！");
               }
               this.getOnClickGrid=function(){
                   return _onClickGrid;
               };
               this.initGrid.call(this);
           }
       }
    }
}

/**
 * 打开选择页对话框
 */
SysLookupHiberarchyApi.prototype.openSelectDialog = function () {
    //设置对话框大小
    if(this.treeStyle == 0){//treegrid
        this.dialogWidth = '70%';
        this.dialogHeigth = '70%';
    }else {//ztree
        this.dialogWidth = '36%';
        this.dialogHeigth = '60%';
    }
    var _this = this;
    var selectIndex = layer.open({
        type: 2,
        area: [this.dialogWidth, this.dialogHeigth],
        title: '选择上级节点',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: _this.getUrl() + '/' + this.expandNodes + '/' + this.treeStyle + '/' + this.treeUniqueKey + '/' + this.treeDepth,
        btn: ['确定', '取消'],
        yes: function (index, layero) {//单击确定按钮
            //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
            //获取子页面数据[子页面数据传递至父页面]
            var iframeWin = window[layero.find('iframe')[0]['name']];
            var parentNode = iframeWin.getSelectedNode();
            if (parentNode == '' || parentNode == null) {
                layer.alert('请选择父节点！', {
                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                });
                return;
            }
            //校验所选择父节点是否是当前的节点的子节点
            var curNodeId = $(_this.id).val();
            if (curNodeId == '' || parentNode.treePath == undefined ||
                parentNode.treePath == '' || parentNode.treePath.indexOf(curNodeId) >= 0) {
                layer.alert('所选择父节点不合法，请重新选择！', {
                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                });
                if(_this.treeStyle == '0'){
                    iframeWin.resetSelection();
                }
                return;
            }
            //判断选择的是不是根节点
            if ($(_this.parentId).val() == '-1') {
                layer.alert('根节点不能被修改，请重新选择！', {
                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                });
                return false;
            }
            //数据回填至事先绑定的元素
            if (parentNode != '' && parentNode != null) {
                $(_this.parentId).val(parentNode.id);
                $(_this.parentName).val(parentNode.typeKey);
            }
            //关闭弹出框
            layer.close(layer.index);
            layer.close(selectIndex);
        },
        //单击取消按钮
        btn2: function (index, layero) {
            layer.close(index);
        }
    });
}

/*
* ========================================================ztree=========================================================
*/
/**
 * 初始化ztree
 */
SysLookupHiberarchyApi.prototype.initZtree = function () {
    var _self = this;
    //初始化搜索框
    $(_self._keyWordId).on('keyup',function(e){
        if(e.keyCode == 13){
            _self.onseachZtree(13,$(_self._keyWordId).val() == $(_self._keyWordId).attr("placeholder") ? "" : $(_self._keyWordId).val());
        }
    });
    $(_self._searchDialogId).on('click',function(e){
        _self.onseachZtree(13,$(_self._keyWordId).val() == $(_self._keyWordId).attr("placeholder") ? "" : $(_self._keyWordId).val());
    });
    var setting = {
        async: {
            enable: true,
            autoParam: ["parentId"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "parentId"
            },
            key: {
                id: "id",
                name: "typeKey"
            }
        },
        view:{
            selectedMulti: false//进制按住ctrl多选
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                moduleType = "1";
                _self._selectNodeZtree=treeNode;
                _self.getOnSelectZtree()(_self.tree);
                _self.selectedNodeId = treeNode.id;
                $("#keyWord").val("");
                $(window).resize();
            }
        }
    };
    $.ajax({
        url: _self.getUrlInit() + '/getZtreeByParentIdAndLevel/' + this.expandNodes + '/' + _self.treeDepthInit + '/' + _self.treeUniqueKeyInit,
        type:"post",
        dataType: "json",
        success: function(data){
            _self.tree = $.fn.zTree.init($(_self._datagridId),setting, data);
            //让第一个父节点展开
            /*var rootNode_0 = _self.zTreeObj.getNodeByParam('parentId',0,null);
            _self.zTreeObj.expandNode(rootNode_0, true, false, false, false);*/
        },
        error: function(){}
    });
    //return this;
}
/**
 * 获取当前选中的节点
 */
SysLookupHiberarchyApi.prototype.getSelectedNodeZtree = function () {
    var rowData = this.tree;
    return rowData.getSelectedNodes()[0];
}

//查询框查询
SysLookupHiberarchyApi.prototype.onseachZtree = function(ecode, value){
    var _self = this;
    var setting = {
        async: {
            enable: true,
            autoParam: ["parentId"]//父节点id
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdkey: "parentId"
            },
            key: {
                id: "id",
                name: "typeKey"
            }
        },
        view:{
            selectedMulti: false//进制按住ctrl多选
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                moduleType = "1";
                _self.getOnSelectZtree()(_self.tree);
                _self.selectedNodeId = treeNode.id;
                $("#keyWord").val("");
                $(window).resize();
            }
        }
    };
    if(ecode == 13){
        value = $.trim(value);
        $.ajax({
            cache: true,
            type: "post",
            url:  _self.getUrlInit() + "/searchZtreeByCondition/" + this.expandNodes + '/'  + _self.treeDepthInit + '/' + _self.treeUniqueKeyInit,
            dataType:"json",
            data:{search_text:value},
            async: false,
            error: function(request) {
                throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
            },
            success: function(data) {
                _self.tree = $.fn.zTree.init($(_self._datagridId),setting, data);
            }
        });
    }
}

/*
* ========================================================grid=========================================================
*/
/**
 * 初始化操作
 */
SysLookupHiberarchyApi.prototype.initGrid = function () {
    var _self = this;
    $(_self._datagridId).jqGrid({
        url: _self.getUrlInit() + '/getTreeGridByParentIdAndLevel/'+ this.expandNodes +'/' + this.treeDepthInit + '/' + this.treeUniqueKeyInit,
        mtype: 'POST',
        datatype: 'json',
        toolbar: [true, 'top'],
        colModel: [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true},
            {label: 'parentId', name: 'parentId', width: 75, hidden: true},
            {label: 'treePath', name: 'treePath', width: 75, hidden: true},
            {label: 'treeSorts', name: 'treeSorts', width: 75, hidden: true},
            {label: 'treeLeaf',	name: 'treeLeaf', width: 75, hidden: true},
            {label: 'treeLevel', name: 'treeLevel', width: 75, hidden: true},
            {label: '系统代码名称', name: 'typeKey', 	width: 150,	sortable: false},
            {label: '系统代码值',	name: 'typeValue', align: 'center', width: 150, sortable: false},
            {label: '应用ID', name: 'sysApplicationId', align: 'center',	width: 150,	sortable: false,hidden: true},
            {label: '系统代码类型', name: 'lookupType', align: 'center',	width: 150,	sortable: false,formatter:_self.formatlookupType},
            {label: '使用级别', name: 'systemFlag', align: 'center',	width: 150,	sortable: false},
            {label: '有效标识', name: 'validFlag', align: 'center',	width: 150,	sortable: false},
            {label: '节点标识', name: 'uniqueKey', align: 'left',	width: 150,	sortable: false}
        ],
        height: $(window).height() - 120,
        styleUI: 'Bootstrap',
        multiselect: false,
        autowidth: true,
        shrinkToFit: true,
        scrollOffset: 15, //设置垂直滚动条宽度
        hasColSet: false,//设置显隐属性
        treeGrid: true,//启用树列表
        treeGridModel: 'adjacency',
        tree_root_level: 1, // 树根的默认层级
        loadonce: false,
        pager: true,
        ExpandColumn: 'typeKey',//设置树列表扩开列
        ExpandColClick: true,  // 点击列时展开
        treeReader: { // 后端传递给前端的每个节点数据中必须携带的参数
            level_field: 'treeLevel', // 节点在树中的层级
            parent_id_field: 'parentId', // 父节点
            leaf_field: 'leafNode', // 节点是否是叶子
            expanded_field: 'expanded', // 节点是否已经展开
            loaded: 'loadedSubNodes' // 节点是否已经从后台加载过子节点
        },
        jsonReader: {//后端传递给前端的json结构定义
            root: 'rows',//数据信息
            total: 'total',//总页数
            page: 'page',//当前页码
            records: 'records' //数据总条数
        },
        treeIcons: {
            plus: 'glyphicon-triangle-right',
            minus: 'glyphicon-triangle-bottom',
            leaf: 'icon iconfont icon-point'
        },
        loadComplete: function (datas) { // 表格加载完成事件
            //存在定义根节点的情况,需要对缩进样式重置
            _self.resetIndentation(datas);
            if (_self.checkTreeRootFlag == true) {
                return;
            }
            _self.checkTreeRootFlag = true;
            var rootNodesArr = $(_self._datagridId).jqGrid('getRootNodes');
            if (rootNodesArr == '') {
                /*layer.confirm('未找到根节点，请先维护数据！', {icon: 3, title: '提示', area: ['400px', '']}, function (index) {
                    if (index) {
                        _self.insertRootGrid();
                    }
                });*/
                layer.alert('未找到根节点，请先维护数据！', {icon: 7, title: '提示', area: ['400px', '']});
            }
        },
        onSelectRow:function(rowid){
            //回调函数调用,返回当前选中行id
            _self.getOnClickGrid()(rowid);
        }
    });
    $(_self._jqgridToolbar).append($('#tableToolbar'));
    $('#jqgh_sysLookupHiberarchyParentSelectJqGrid_TypeValue').css('text-align', 'center');
};

/**
 * 格式化字段
 */
SysLookupHiberarchyApi.prototype.formatlookupType = function (cellvalue, options, rowObject) {
    if(cellvalue == ''||cellvalue == null || cellvalue == undefined){
        cellvalue = '---';
    }
    return cellvalue;
}

/**
 * 获取当前选中的节点
 */
SysLookupHiberarchyApi.prototype.getSelectedNodeGrid = function () {
    var rowId = $(this._datagridId).getGridParam('selrow');
    if (rowId == '' || rowId == null) {
        return null;
    }
    var rowData = $(this._datagridId).jqGrid('getLocalRow', rowId);
    return rowData;
}

/**
 * 重置tree grid 的选择项
 */
SysLookupHiberarchyApi.prototype.resetSelectionGrid = function () {
    var _self = this;
    $(_self._datagridId).jqGrid('resetSelection');
}

/**
 * 重载数据
 */
SysLookupHiberarchyApi.prototype.reLoadGrid = function () {
    var _self = this;
    var searchdata = {param: JSON.stringify(serializeObject($(_self._formId)))}
    $(_self._datagridId).jqGrid('setGridParam', {datatype: 'json', postData: searchdata}).trigger('reloadGrid');
};

/**
 * 添加根节点(如果需要修改根节点数据通过前台页面设置)
 */
SysLookupHiberarchyApi.prototype.insertRootGrid = function () {
    var _self = this;
    avicAjax.ajax({
        url: _self.getUrl() + '/insertRoot',
        type: 'post',
        dataType: 'json',
        success: function (r) {
            if (r.flag == 'success') {
                _self.init();
                _self.reLoadGrid();
                layer.msg('初始化根节点成功！');
            } else {
                layer.alert('初始化根节点失败！', {
                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                });
            }
        }
    });
}
/**
 * 快速查询
 */
SysLookupHiberarchyApi.prototype.searchByKeyWordGrid = function () {
    var _self = this;
    var keyWord = $(_self._keyWordId).val() == $(_self._keyWordId).attr("placeholder") ? "" : $(_self._keyWordId).val();

    avicAjax.ajax({
        url: _self.getUrlInit() + '/searchTreegridByCondition/' + this.treeDepthInit + '/' + this.treeUniqueKeyInit,
        data: {keyWord:keyWord},
        type: 'POST',
        dataType: 'json',
        success: function (r) {
            if (r.flag == 'success') {
                $(_self._datagridId).jqGrid('clearGridData');
                $(_self._datagridId)[0].addJSONData(r);
            } else {
                layer.alert('查询出错,请联系管理员!', {
                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                });
            }
        }
    });
}
/**
 * 重置缩进样式
 */
SysLookupHiberarchyApi.prototype.resetIndentation = function (datas) {
    var dvalue = 0;
    if(datas != null && datas != '' && datas != undefined && !(JSON.stringify(datas) == "{}")){
        datas = datas.rows;
        //获取自定义根节点与正常根节点的差值
        var parents = $('td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_parentId]');
        if(parents != null && parents != '' && parents !=undefined){
            for (var i = 0; i < parents.length; i++) {
                var tmpTreeLevelEle = $(parents[i]).nextAll('td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_treeLevel]');
                if(($(parents[i]).text() == ' ' || $(parents[i]).text() == '' || $(parents[i]).text() == null) && $(tmpTreeLevelEle).text() > 1){
                    dvalue = $(tmpTreeLevelEle).text() - 1;
                    break;
                }
            }
        }

        //修改样式
        for (var i = 0; i < datas.length; i++) {
            var tmpTitleEle = $('#' + datas[i].id + ' td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_treeLevel]')[0];
            var tmpIconEle = $(tmpTitleEle).nextAll('td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_typeKey]').find('div.tree-wrap-ltr').
            css('width',(datas[i].treeLevel - dvalue)*18 + 'px');
            $($(tmpIconEle).find('.treeclick')[0]).css('left',(datas[i].treeLevel - dvalue - 1)*18 + 'px');
        }
    }
}