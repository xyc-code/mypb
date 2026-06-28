<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form,table";
%>

<html>
<head>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <title>选择主表列</title>

    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>

<body>
<div class="easyui-layout" fit="true">
    <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table67fa06acf1f73841341a676dafbed575f6f0').setGridHeight(getJgridTableHeight($('#table67fa06acf1f73841341a676dafbed575f6f0_div')));$('#table67fa06acf1f73841341a676dafbed575f6f0').jqGrid('resizeGrid');} "
         style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;"
         id="table67fa06acf1f73841341a676dafbed575f6f0_div">
        <div class="toolbar" style="height:38px;">
            <div class="toolbar-right">
                <div class="input-group form-tool-search" style="width:200px;">
                    <input type="text"
                           style="width:150px;"
                           id="keyWordQuery"
                           class="form-control input-sm"
                           placeholder="请输入列名">
                    <label class="icon icon-guanbi1 clear" style="position: absolute;right: 27px;top: 4px;font-size: 14px; display: none;" id="searchClear"></label>
                    <label class="icon icon-search form-tool-searchicon"></label>
                </div>
            </div>
        </div>
        <table id='dbColumnTable'></table>
        <div id="jqGridPagerIndex"></div>

        <input type="hidden" id="selectedData">
    </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script type="text/javascript">
    $(document).ready(function () {
        $("#dbColumnTable").jqGrid({
            url : "platform6/db/dbtablecol/dbTableColController/operation/getDbTableColsByPage.json",
            mtype : 'POST',
            datatype : "json",
            colModel : [ {
                name : 'id',
                key : true,
                width:75,
                hidden : true
            }, {
                label : '列名',
                name : 'colName',
                width:75,
                align : 'center'
            }, {
                label : '字段类型',
                name : 'colType',
                width:75,
                align : 'center'
            }, {
                label : '备注',
                name : 'colComments',
                width:75,
                align : 'center'
            },{
                label : '字段长度',
                name : 'colLength',
                width:75,
                align : 'center',
                hidden : true
            }],
            postData : {tableId:"${param.tableId}"},
            toolbar : [ false, 'top' ],//启用toolbar
            height : 330,//初始化表格高度
            scrollOffset : 20, //设置垂直滚动条宽度
            rowNum : 10000,//每页条数
            rowList : [ 200, 100, 50, 30, 20, 10 ],//每页条数可选列表
            altRows : true,//斑马线
            pagerpos : 'left',//分页栏位置
            styleUI : 'Bootstrap', //Bootstrap风格
            viewrecords : true, //是否要显示总记录数
            autowidth : true,//列宽度自适应
            responsive:true,
            shrinkToFit: true,
            multiboxonly:true,
            hasTabExport:false,
            hasColSet:false,
            pager : "#jqGridPager",
            onCellSelect : function(rowid, iCol, cellcontent, e) {
                var data = $("#dbColumnTable").jqGrid('getRowData',rowid);
                $("#selectedData").data("data", data);
            }
        });

        //处理谷歌中文输入法不触发keyup的问题
        var bind_name = 'input';
        if (navigator.userAgent.indexOf("MSIE") != -1){
            bind_name = 'propertychange';
        }
        //查询
        $('#keyWordQuery').bind(bind_name,function(e){
            var search = $("#keyWordQuery").val();
            if (search!='') {
                $("#searchClear").show();
            } else {
                $("#searchClear").hide();
            }
            searchWord($(e.target).val());
        });

        $('#searchClear').bind('click',function(event){
            $("#searchClear").hide();
            $("#keyWordQuery").val(null);
            searchWord("");
        });
    });



    function getSelectedData() {
        return $("#selectedData").data("data");
    }

    function searchWord(val){
        var search_param = new Array(); //用于保存筛选规则
        var a = new GridSearch($("#dbColumnTable")); //创建实例-传入JqGrid的对象
        search_param.push({
            rule_name: 'vague', //筛选方式
            str: val, //筛选值
            column: 'colName' //列名
        });
        a.set_search_param(search_param); //提交设置规则
        a.search();
    }

/*
    jqGrid 前端筛选功能
*/
var GridSearch = function (grid) {

    this.grid = grid;
    this.search_param = null;
    this.r = [];
    this.data = this.grid.jqGrid('getRowData');

    //根据键值删除指定的元素
    this.delete_val_by_key = function (keys, arr) {
        for (var j = 0, i = 0; i < keys.length; i++) {
            arr.splice(keys[i - j], 1);
            j++;
        }
        return arr;
    }

    /**
     * 隐藏行
     */
    this.hideRow = function(rowId) {
        this.grid.setRowData(rowId, null, {
            display : 'none'
        });
    }
    /**
     * 显示行
     */
    this.showRow = function(rowId) {
        this.grid.setRowData(rowId, null, {
            display : ''
        });
    }
    /**
     * 显示全部行
     */
    this.showAllRow = function() {
        for (var i = 0; i < this.data.length; i++) {
            this.showRow(i+1)
        }
    }

    //设置筛选参数
    this.set_search_param = function (search_param) {
        this.search_param = search_param;
    }

    //筛选规则
    /*模糊筛选*/
    this.vagueSearch = function (str, column) {
        var columns = column.split(",");
        var re = new RegExp(str, "i");
        // var is = [];
        for (var i = 0; i < this.data.length; i++) {
            for(var j = 0; j < columns.length; j++){
                var columnName = columns[j];
                var colValue = this.data[i][columnName];
                if (re.test(colValue)) {
                    this.showRow(this.data[i]["id"]);
                    break;
                }else{
                    this.hideRow(this.data[i]["id"]);
                }
            }

        }
    }

    /*区间查找*/
    this.betweenSearch = function (start, end, column) {
        // var is = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][column] >= start && this.data[i][column] <= end) {
                this.showRow(i+1)
            }else{
                this.hideRow(i+1);
            }
        }
    }

    /*根据参数选择规则筛选*/
    this.select = function (params) {
        //var rule_name = params.rule_name;
        switch (params.rule_name) {
            case 'between':
                //console.log(this.result);
                this.betweenSearch(params.start, params.end, params.column);
                break;
            case 'vague':
                this.vagueSearch(params.str, params.column);
                break;
        }
    }

    /*清空 result */
    this.clearData = function () {
        this.data = [];
    }

    //执行筛选
    this.search = function () {
        if (this.search_param) {
            if ($.type(this.search_param) == 'array') {
                for (var i = 0; i < this.search_param.length; i++) {
                    if (this.search_param[i]) {
                        this.select(this.search_param[i]);
                    }else{
                        this.showAllRow();
                    }
                }
            } else {
                this.select(this.search_param);
            }
        }else{
            this.showAllRow();
        }
    }
}
</script>
</body>
</html>