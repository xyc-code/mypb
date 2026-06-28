/**
 * 自定义菜单列表
 */
function Customize(gridId, dataColModel, rootMenuId){
    /*
    * 容器id
     */
    this.gridId = gridId;
    /*
    * 数据模型
     */
    this.dataColModel = dataColModel;

    this.rootMenuId = rootMenuId;
    //初始化
    this.init.call(this)
}
/*
初始化
 */
Customize.prototype.init = function () {
    var _self = this;

    $('#' + _self.gridId).jqGrid({
        url: 'portal/getAllAvailableChildMenu',
        mtype: 'POST',
        datatype: "json",
        postData: {
            rootMenuId : this.rootMenuId,
            searchText: ""
        },
        colModel: _self.dataColModel,
        height: 490,
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 1000,
        rowList: [200, 100, 50, 30, 20, 10],
        altRows: true,
        pagerpos: 'left',
        styleUI: 'Bootstrap',
        viewrecords: true, //
        multiselect: false,
        autowidth: true,
        shrinkToFit: true,
        hasColSet: false,
        hasTabExport: false,
        responsive: true,//开启自适应
        gridComplete: function () {
            // 影藏表头
            $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();

            // 只有搜索时表格加载完成显示结果展示
            // 获取当前表格行数
            var activeId = $(".active").attr("id");
            if (activeId == undefined) {
                var count = $('#menuList').getGridParam("records");
                $("#showResultCount").text("共查询到" + count + "个结果")
                $("#showResultCount").show();
            }

            // 行顺序归0
            menuOrder = 0;
        }
    });
}

function changeMenuStatus(status, menuId) {
    if(status){
        delPersonalMenu(menuId);
        return ;
    }else{
        var menuList = [];
        menuList.push(menuId);
        addMenu(menuList, menuId);
    }
}

/**
 * 菜单排序
 * @param rowId
 * @param rowNum
 */
function updateMenuOrder(rowId, rowNum) {
    avicAjax.ajax({
        url: "portal/updateMenuOrder",
        data: {
            rowId : rowId,
            rowNum : rowNum
        },
        type: 'post',
        dataType: 'json',
        quiet:true,
        success: function (r) {
            if(r.success){

            } else{
                layer.alert('排序失败！', {
                        icon: 7,
                        area: ['400px', ''], //宽高
                        closeBtn: 0
                    }
                );
            }
        }
    });
}

/**
 * 搜索框
 */
function onseach(ecode, value) {
    if(ecode == 13) {
        if (value == null || value == "" || value == '输入名称查询') {
            // 默认选中已选列表
            getAllChildMenu('selectedMenu');
            return;
        }
        var searchdata = {
            rootMenuId : "",
            searchText: value
        };

        $('#menuList').jqGrid('setGridParam', {
            datatype : 'json',
            postData : searchdata
        }).trigger("reloadGrid");

        if(changeTableRowStatus) {
            $("#menuList tbody").sortable("destroy");
            changeTableRowStatus = false;
        }
    }
}

// 搜索框获取焦点事件
function changeText() {
    var val = $("#txt").val();
    if (val.length > 0) {
        $("#clearText").show();
    } else {
        $("#clearText").hide();
    }
}
