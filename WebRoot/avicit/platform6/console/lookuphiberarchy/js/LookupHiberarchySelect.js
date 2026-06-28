/**
 * LookupHiberarchySelect      多维通用代码通用组件
 */
function LookupHiberarchySelect(paramObj,callback) {
    //属性定义
    /*
    * 文档对象
    **/
    this._doc = document;
    /*
    * 当前选择节点对象
    **/
    this._selectNode = {};
    /*
    * 获取当前选择节点对象方法
    **/
    this._onSelectZtree = function(){};
    /*
    * 单击事件
    **/
    this._onClickGrid = function(){};
    /*
    * 是否根节点对象，确定treeGrid样式是否需要重置
    **/
    this.checkTreeRootFlag = false;
    /*
    * 构造树的深度，暂时未实现
    **/
    this.treeDepth = 5000;
    /*
    * 容器对象，初始化使用，目前不再使用
    **/
    this.id = '#';
    /*
    * ztree的id属性
    **/
    this.ztreeId ;
    /*
    * ztree容器
    **/
    this.ztreeHtml ;
    /*
    * treegrid的id属性
    **/
    this.gridId ;
    /*
    * treegrid容器
    **/
    this.gridHtml ;
    /*
    * 展开层级数
    **/
    this.expandNodes;
    /*
    * 0平铺还是1弹出页，默认弹出1
    **/
    this.style = 1;
    /*
    * 节点唯一标识
    **/
    this.uniqueKey;
    /*
    * 回填id元素
    **/
    this.targetId;
    /*
    * 回填name元素
    **/
    this.targetName;
    /*
    * 弹出框宽度
    **/
    this.dialogWidth;
    /*
    * 弹出框高度
    **/
    this.dialogHeigth;
    /*
    * grid工具栏
    **/
    this._jqgridToolbar;
    /*
    * grid搜索按钮
    **/
    this._searchDialogId;
    /*
    * grid搜索框
    **/
    this._keyWordId;
    /*
    * 所选ztree节点元素
    **/
    this.selectedNodeId;
    /*
    * ztree对象
    **/
    this.tree;
    /*
    * 所选ztree节点元素
    **/
    this._selectNodeZtree;
    /*
    * 获取树数据url:获取全部数据和指定根节点数据的url不一样
    **/
    this.dataUrl;
    /*
    * 获取简单搜索url:获取全部数据和指定根节点简单搜索url不一样
    **/
    this.searchUrl;

    //方法定义
    /*
    * 获取初始化请求url
    **/
    this.getInitUrl = function () {
        return "console/LookupHiberarchy";
    }
    /*
    * 获取弹出页请求url
    **/
    this.getSelectUrl = function () {
        return "console/LookupHiberarchy/toSysLookupHiberarchyPage";
    }
    /*
    * 获取当前选中的树节点
    **/
    this.getOnSelectZtree = function () {
        return this._onSelectZtree;
    };
    /*
    * 获取当前点击的grid行
    **/
    this.getOnClickGrid = function () {
        return this._onClickGrid;
    };
    this.setOption.call(this,paramObj,callback);
}
/**
 * uniqueKey         参数类型：字符串      参数说明：树节点唯一标识,多维通用代码表中全表唯一,必填。uniqueKey=-1表示查询全部数据
 * targetId          参数类型：字符串     参数说明：回填元素id,必填
 * targetName        参数类型：字符串     参数说明：回填元素名称,必填
 * iframeWidth       参数类型：字符串     参数说明：弹出框宽度,如'60%'
 * iframeHeight      参数类型：字符串     参数说明：弹出框高度,如'60%'
 * expandNodes       参数类型：数值      参数说明：展开层数,默认展开2级
 * callback          参数类型：函数      参数说明：回调函数
 * type              参数类型：数值      参数说明：以ztree或者grid展示 0:grid 1:tree,必填 默认0
 ** style            参数类型：数值      参数说明：以平铺或者弹出页展示 0:init  1:select ,必填 默认1，该参数为预留参数
 * treeDepth         参数类型：数值      参数说明：树深度[暂时不使用]
 */
LookupHiberarchySelect.prototype.setOption = function (paramObj,callback) {
    var _self = this;
    //校验参数
    if(_self.isNullString(paramObj)){
        throw new Error("第一个参数不能为空！");
    }else if((_self.style) != '0' && (_self.style) != '1'){
        throw new Error("第一个参数中属性【style】必须为【0、1】中任意一个！");
    }else if(paramObj.type != '0' && paramObj.type != '1'){
        throw new Error("第一个参数中属性【type】必须为【0、1】中任意一个！");
    }else {
        _self.dialogWidth = paramObj.dialogWidth || '70%';
        _self.dialogHeigth = paramObj.dialogHeigth || '70%';
       if(_self.style == '1'){//选择页
           /**
            * 展开层数
            * @type {string|*}
            */
           this.expandNodes = paramObj.expandNodes;
           //paramObj.style为空
           if(_self.isNullString(_self.style)){
               //默认
               _self.style = '1';
           }else if(_self.style != '0' && _self.style != '1'){
               _self.style = '1';
           }else {
               _self.style = _self.style
           }
           //默认uniqueKey = 00001
           _self.uniqueKey = paramObj.uniqueKey || '00001';
           _self.type = paramObj.type ;
           _self.targetId = '#' + paramObj.targetId;
           _self.targetName = '#' + paramObj.targetName;
           _self.ztreeId = 'ztree' + _self.uniqueKey
           _self.gridId = 'grid' + _self.uniqueKey
           if(callback instanceof Function){
               _onClickGrid_ = callback;
           }else if(!(callback == undefined)){
               throw new Error("参数【"+callback+"】必须为函数！");
           }
           _self.openSelectDialog.call(_self);
       }else {//初始化
           _self.uniqueKey = paramObj.uniqueKey || '00001';
           _self.expandNodes = paramObj.expandNodes;
           _self.ztreeId = 'ztree' + _self.uniqueKey
           _self.ztreeHtml = '<ul id="'+ _self.ztreeId +'" class="ztree"></ul>';

           var searchHtml = '<div id="tableToolbarM" class="toolbar" ><div class="toolbar-left" style="width: 96%;">';
           searchHtml = searchHtml + '<div class="input-group input-group-sm" style="width: 100%;">';
           searchHtml = searchHtml + '<input class="form-control" placeholder="输入名称查询" type="text" id="keyWord' +_self.uniqueKey+ '" name="keyWord' +_self.uniqueKey+ '" autocomplete="off">';
           searchHtml = searchHtml + '<span class="input-group-btn"><button id="searchbtn' +_self.uniqueKey+ '" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>';
           searchHtml = searchHtml + '</span></div></div></div>';

           _self.gridId = 'grid' + _self.uniqueKey
           _self.gridHtml = '<table id="'+_self.gridId+'"></table>';
           if(paramObj.type == '1'){
               /*ztree开始*/
               _self._jqgridToolbar = '#jqGridTar' + _self.uniqueKey;
               _self._searchDialogId = '#searchbtn' + _self.uniqueKey;
               _self._keyWordId = '#keyWord' + _self.uniqueKey;
               if(_self.uniqueKey == '-1'){
                   _self.dataUrl = 'getAllNodes';
               }else {
                   _self.dataUrl = 'getZtreeByParentIdAndLevel' +'/' + _self.expandNodes + '/' + _self.treeDepth + '/' + _self.uniqueKey;
               }
               $(_self.id).append(searchHtml);
               $(_self.id).append(_self.ztreeHtml);
               if(callback instanceof Function){
                   _self._onSelectZtree = callback;
               }else if(!(callback == undefined)){
                   throw new Error("参数【"+callback+"】必须为函数！");
               }
               this.initZtree.call(_self);
           }else if(paramObj.type == '0'){
               /*grid开始*/
               if(_self.uniqueKey == '-1'){
                   _self.dataUrl = '/operation/newGettree/' + _self.treeDepth;
                   _self.searchUrl = '/operation/search';
               }else {
                   _self.dataUrl = '/getTreeGridByParentIdAndLevel/'+ _self.expandNodes +'/' + _self.treeDepth + '/' + _self.uniqueKey;
                   _self.searchUrl = '/searchTreegridByCondition/' + this.treeDepth + '/' + this.uniqueKey;
               }
               _self._searchDialogId = '#searchbtn' + _self.uniqueKey;
               _self._keyWordId = '#keyWord' ;

               var searchHtml = '<div id="tableToolbar" class="toolbar"><div class="toolbar-right"><div class="input-group form-tool-search">';
               searchHtml = searchHtml + '<input type="text" name="keyWord'+_self.uniqueKey+'" id="keyWord'+_self.uniqueKey+'" style="width:240px;"';
               searchHtml = searchHtml + ' class="form-control input-sm" placeholder="请输入系统代码名称或系统代码值查询">';
               searchHtml = searchHtml + '<label id="searchbtn'+_self.uniqueKey+'" class="icon icon-search form-tool-searchicon"></label>';
               searchHtml = searchHtml + '</div></div></div>';

               $(_self.id).append(searchHtml);
               $(_self.id).append(_self.gridHtml);
               if(callback instanceof Function){
                   _self._onClickGrid = callback;
               }else if(!(callback == undefined)){
                   throw new Error("参数【"+callback+"】必须为函数！");
               }
               this.initGrid.call(_self);
           }
       }
    }
}
/**
 * 打开选择页对话框
 */
LookupHiberarchySelect.prototype.openSelectDialog = function (callback) {

    var _this = this;
    var selectIndex = layer.open({
        type: 2,
        area: [this.dialogWidth, this.dialogHeigth],
        title: '选择节点',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: _this.getSelectUrl() + '/' + _this.expandNodes + '/' + _this.style + '/' + _this.type + '/' + _this.uniqueKey + '/' + _this.treeDepth,
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
            //判断选择的是不是根节点
            if ($(_this.targetId).val() == '-1') {
                layer.alert('根节点不能被修改，请重新选择！', {
                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                });
                return false;
            }
            //数据回填至事先绑定的元素
            if (parentNode != '' && parentNode != null) {
                $(_this.targetId).val(parentNode.uniqueKey);
                $(_this.targetName).val(parentNode.typeValue);
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
LookupHiberarchySelect.prototype.initZtree = function () {
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
                pIdkey: "parentId",
                rootPId: ""
            },
            key: {
                id: "id",
                name: "typeValue"
            }
        },
        view:{
            showLine: true,
            selectedMulti: false//进制按住ctrl多选
        },
        callback: {
            //节点点击事件
            onClick: function (event, treeId, treeNode) {
                moduleType = "1";
                _self._selectNodeZtree=treeNode;
                _self.getOnSelectZtree()(_self.tree);
                _self.selectedNodeId = treeNode.id;
                $("#keyWord" + _self.uniqueKey).val("");
                $(window).resize();
            }
        }
    };
    $.ajax({
        url: _self.getInitUrl() + '/'+_self.dataUrl,
        type:"post",
        dataType: "json",
        success: function(data){
            _self.tree = $.fn.zTree.init($('#' + _self.ztreeId),setting, data);
        },
        error: function(){}
    });
}
/**
 * 获取当前选中的节点
 */
LookupHiberarchySelect.prototype.getSelectedNodeZtree = function () {
    var rowData = this.tree;
    return rowData.getSelectedNodes()[0];
}
//查询框查询
LookupHiberarchySelect.prototype.onseachZtree = function(ecode, value){
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
                name: "typeValue"
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
                $("#keyWord" + _self.uniqueKey).val("");
                $(window).resize();
            }
        }
    };
    if(ecode == 13){
        value = $.trim(value);
        $.ajax({
            cache: true,
            type: "post",
            url:  _self.getInitUrl() + "/searchZtreeByCondition/" + _self.expandNodes + '/'  + _self.treeDepth + '/' + _self.uniqueKey,
            dataType:"json",
            data:{search_text:value},
            async: false,
            error: function(request) {
                throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
            },
            success: function(data) {
                _self.tree = $.fn.zTree.init($("#" + _self.ztreeId),setting, data);
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
LookupHiberarchySelect.prototype.initGrid = function () {
    var _self = this;
    $('#' + _self.gridId).jqGrid({
        url: _self.getInitUrl() + _self.dataUrl,
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
            {label: '系统代码名称', name: 'typeValue', align: 'center', width: 150,sortable: false},
            /*{label: '系统代码值',	name: 'typeKey', width: 150, sortable: false},*/
            {label: '应用ID', name: 'sysApplicationId', align: 'center',	width: 150,	sortable: false,hidden: true},
            /*{label: '系统代码类型', name: 'lookupType', align: 'center',	width: 150,	sortable: false,formatter:_self.formatlookupType},*/
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
        ExpandColumn: 'typeValue',//设置树列表扩开列
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
            _self.resetIndentationValue(datas);
            if (_self.checkTreeRootFlag == true) {
                return;
            }
            _self.checkTreeRootFlag = true;
            var rootNodesArr = $('#' + _self.gridId).jqGrid('getRootNodes');
            if (rootNodesArr == '') {
                layer.alert('未找到根节点，请先维护数据！', {icon: 7, title: '提示', area: ['400px', '']});
            }
            $('#t_' + _self.gridId).css('display','none');
            $('#searchbtn' + _self.uniqueKey).on('click',function (){
                _self.searchByKeyWordGrid();
            })
            //回车查询
            $('#keyWord' + _self.uniqueKey).on('keyup',function(e){
                if(e.keyCode == 13){
                    _self.searchByKeyWordGrid();
                }
            });
        },
        onSelectRow:function(rowid){
            //回调函数调用,返回当前选中行id
            _self.getOnClickGrid()(rowid);
        }
    });
};
/**
 * 格式化字段
 */
LookupHiberarchySelect.prototype.formatlookupType = function (cellvalue, options, rowObject) {
    if(cellvalue == ''||cellvalue == null || cellvalue == undefined){
        cellvalue = '---';
    }
    return cellvalue;
}
/**
 * 获取当前选中的节点
 */
LookupHiberarchySelect.prototype.getSelectedNodeGrid = function () {
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
LookupHiberarchySelect.prototype.resetSelectionGrid = function () {
    var _self = this;
    $('#'+_self.gridId).jqGrid('resetSelection');
}
/**
 * 重载数据
 */
LookupHiberarchySelect.prototype.reLoadGrid = function () {
    var _self = this;
    var searchdata = {param: JSON.stringify(serializeObject($(_self._formId)))}
    $(_self._datagridId).jqGrid('setGridParam', {datatype: 'json', postData: searchdata}).trigger('reloadGrid');
};
/**
 * 添加根节点(如果需要修改根节点数据通过前台页面设置)
 */
LookupHiberarchySelect.prototype.insertRootGrid = function () {
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
LookupHiberarchySelect.prototype.searchByKeyWordGrid = function () {
    var _self = this;
    var keyWord = $('#keyWord' + _self.uniqueKey).val() == $('#keyWord' + _self.uniqueKey).attr("placeholder") ? "" : $('#keyWord' + _self.uniqueKey).val();
    var names = ['typeKey','typeValue'];
    var param = {};
    for (var i in names) {
        var name = names[i];
        param[name] = keyWord;
    }
    var searchdata = {};
    if(_self.uniqueKey == '-1'){
        searchdata.keyWord = JSON.stringify(param);
        searchdata.param = null;
    }else {
        searchdata.keyWord = keyWord;
    }
    avicAjax.ajax({
        url: _self.getInitUrl() + _self.searchUrl ,
        //data: {keyWord:keyWord},
        data: searchdata,
        type: 'POST',
        dataType: 'json',
        success: function (r) {
            if (r.flag == 'success') {
                $('#' + _self.gridId).jqGrid('clearGridData');
                $('#' + _self.gridId)[0].addJSONData(r);
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
LookupHiberarchySelect.prototype.resetIndentation = function (datas) {
    var _self = this;
    var dvalue = 0;
    if(datas != null && datas != '' && datas != undefined && !(JSON.stringify(datas) == "{}")){
        datas = datas.rows;
        //获取自定义根节点与正常根节点的差值
        var parents = $('td[aria-describedby=' + _self.gridId + '_parentId]');
        if(parents != null && parents != '' && parents !=undefined){
            for (var i = 0; i < parents.length; i++) {
                var tmpTreeLevelEle = $(parents[i]).nextAll('td[aria-describedby=' + _self.gridId + '_treeLevel]');
                if(($(parents[i]).text() == ' ' || $(parents[i]).text() == '' || $(parents[i]).text() == null) && $(tmpTreeLevelEle).text() > 1){
                    dvalue = $(tmpTreeLevelEle).text() - 1;
                    break;
                }
            }
        }

        //修改样式
        for (var i = 0; i < datas.length; i++) {
            var tmpTitleEle = $('#' + datas[i].id + ' td[aria-describedby=' + _self.gridId + '_treeLevel]')[0];
            var tmpIconEle = $(tmpTitleEle).nextAll('td[aria-describedby=' + _self.gridId + '_typeKey]').find('div.tree-wrap-ltr').
            css('width',(datas[i].treeLevel - dvalue)*18 + 'px');
            $($(tmpIconEle).find('.treeclick')[0]).css('left',(datas[i].treeLevel - dvalue - 1)*18 + 'px');
        }
    }
}

/**
 * 重置缩进样式
 */
LookupHiberarchySelect.prototype.resetIndentationValue = function (datas) {
    var dvalue = 0;
    if(datas != null && datas != '' && datas != undefined && !(JSON.stringify(datas) == "{}")){
        datas = datas.rows;
        //获取自定义根节点与正常根节点的差值
        var parents = $('td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_parentId]');
        var tmpMinLevel = 1;
        if(parents != null && parents != '' && parents !=undefined){
            for (var i = 0; i < parents.length; i++) {
                var tmpTreeLevelEle = $(parents[i]).nextAll('td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_treeLevel]');
                if(i == 0){
                    tmpMinLevel = ($(tmpTreeLevelEle).text() - tmpMinLevel) > 0 ? $(tmpTreeLevelEle).text() : tmpMinLevel ;
                }else {
                    tmpMinLevel = ($(tmpTreeLevelEle).text() - tmpMinLevel) > 0 ? tmpMinLevel : $(tmpTreeLevelEle).text() ;
                }
            }
        }
        dvalue = tmpMinLevel - 1;
        //修改样式
        for (var i = 0; i < datas.length; i++) {
            var tmpTitleEle = $('#' + datas[i].id + ' td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_treeLevel]')[0];
            var tmpIconEle = $(tmpTitleEle).nextAll('td[aria-describedby=sysLookupHiberarchyTreeGridJqGrid_typeValue]').find('div.tree-wrap-ltr').
            css('width',(datas[i].treeLevel - dvalue) * 18 + 'px');
            $($(tmpIconEle).find('.treeclick')[0]).css('left',(datas[i].treeLevel - dvalue - 1) * 18 + 'px');
        }
    }
}

/**
 * 判断字符串是否为空
 */
LookupHiberarchySelect.prototype.isNullString = function (param) {
    var flag = false;
    var temp = param == 'undefined' || param == undefined || param == '' || param == null;
    if(typeof param == 'string'){
        if (temp){
            flag = true;
        }
    }else if(typeof param == 'object'){
        if (temp || param == '{}'){
            flag = true;
        }
    }
    return flag;
}