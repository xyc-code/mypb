<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>控件方法</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<div id="pagerfuncJqGrid"></div>
<table id="funcJqGrid"></table>
</body>

<script tpye="text/javascript">

    var dataGridColModel = [{
        label: 'id',
        name: 'id',
        width: 75,
        key: true,
        hidden: true
    }, {
        label: '节点名称',
        name: 'name',
        width: 100,
        editable: false,
        edittype: 'text',
        align: 'center',
        sortable: true
    }, {
        label: '方法定义',
        name: 'funcStr',
        width: 200,
        editable: false,
        edittype: 'text',
        align: 'center',
        sortable: true
    }];

    function getData() {
        var nodeList = parent.engine.viewTree.getNodes()[0].children;
        return collectNode(nodeList, [], "");
    };

    function collectNode(nodeList, eleList, path) {
        for (var i = 0; i < nodeList.length; i++) {
            var attribute = nodeList[i].attribute;
            var funcStr = "";
            var keys = Object.keys(attribute);
            for (var j = 0; j < keys.length; j++) {
                if (keys[j].indexOf("event_") == 0 && attribute[keys[j]] != "") {
                    funcStr += keys[j].substring(6) + "、 ";
                }
            }
            if (funcStr != "") {
                eleList.push({
                    id: nodeList[i].id,
                    name: path + attribute.name,
                    funcStr: funcStr.substring(0, funcStr.length - 2)
                })
            }
            if (typeof nodeList[i].children == "object" && nodeList[i].children.length > 0) {
                eleList = collectNode(nodeList[i].children, eleList, path + attribute.name + " / ");
            }
        }
        return eleList;
    }

    function backTo(id) {
        var clickNode = parent.engine.viewTree.getNodeByParam("id", id);
		$(parent.viewEditor.editor).find('.nav-tabs').find('>li:eq(0)').click();
        parent.engine.viewTree.selectNode(clickNode);
        parent.engine.listenNode(parent.engine.viewTree.setting.treeId, clickNode, "1");
        parent.layer.close(parent.viewDesignPage.funcDialog);
    }

    $(document).ready(function () {
            $("#funcJqGrid").jqGrid({
                datatype: "local",
                toolbar: [false, 'top'],//启用toolbar
                colModel: dataGridColModel,//表格列的属性
                height: $(window).height() - 80,//初始化表格高度
                scrollOffset: 20, //设置垂直滚动条宽度
                altRows: true,//斑马线
                rowNum: 2000,
                styleUI: 'Bootstrap', //Bootstrap风格
                viewrecords: true, //是否要显示总记录数
                autowidth: true,//列宽度自适应
                responsive: true,//开启自适应
                pager: "#pagerfuncJqGrid",
                onSelectRow: function (rowid, status) {
                    backTo(rowid);
                },
            });
            var data = getData();
            if (data.length == 0) {
                $("#funcJqGrid").parent().append("<div class='no_data' id='funcJqGridnorecords'style='text-align: center;margin-top:	" + ($(window).height() / 2 - 120) + "px' src='static/images/platform/eform/no-data.png' > <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
            } else {
                $("#funcJqGrid").setGridParam({data: getData()}).trigger('reloadGrid');
                $("tr").attr("style", "cursor:pointer");
            }

        }
    );

</script>
</html>
