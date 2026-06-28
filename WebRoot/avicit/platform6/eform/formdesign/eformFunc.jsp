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
        label: '字段名称',
        name: 'domId',
        width: 50,
    }, {
        label: '字段描述',
        name: 'colLabel',
        width: 50,
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

    //预览模板
    function getData() {
        var contList = $(parent.tinymce.activeEditor.getContent()).find("[id]");
        var eleList = [];
        for (var i = 0; i < contList.length; i++) {
            var eleText = contList[i].outerText;
            if (eleText.indexOf("Event\":") > -1) {
                eleText = eleText.substring(eleText.indexOf("{"));
                eleJson = JSON.parse(eleText);
                funcStr = "";
                if (eleJson.onBeforeEvent != undefined && eleJson.onBeforeEvent != "") {
                    funcStr += "onBeforeEvent 、";
                }
                if (eleJson.onBlurEvent != undefined && eleJson.onBlurEvent != "") {
                    funcStr += "onBlurEvent 、";
                }
                if (eleJson.onChangeEvent != undefined && eleJson.onChangeEvent != "") {
                    funcStr += "onChangeEvent 、";
                }
                if (eleJson.onCallbackEvent != undefined && eleJson.onCallbackEvent != "") {
                    funcStr += "onCallbackEvent 、";
                }
                if (eleJson.onClickEvent != undefined && eleJson.onClickEvent != "") {
                    funcStr += "onClickEvent 、";
                }
                if (eleJson.onLoadEvent != undefined && eleJson.onLoadEvent != "") {
                    funcStr += "onLoadEvent 、";
                }
                if (eleJson.onFocusEvent != undefined && eleJson.onFocusEvent != "") {
                    funcStr += "onFocusEvent 、";
                }
                if (eleJson.onKeyupEvent != undefined && eleJson.onKeyupEvent != "") {
                    funcStr += "onKeyupEvent 、";
                }
                if (funcStr != "") {
                    eleList.push({
                        id: contList[i].id,
                        domId: eleJson.domId != "" ? eleJson.domId : eleJson.colName,
                        colLabel: eleJson.colLabel != "" ? eleJson.colLabel : eleJson.title,
                        funcStr: funcStr.substring(0, funcStr.length - 2)
                    })
                }
            }
        }
        return eleList;
    };

    function backTo(id) {
        $(parent.formEditor.editor).find('#tinymceArea_ifr').contents().find('#' + id + ",[for='" + id + "']").click();
        $(parent.formEditor.editor).find('#collapse1').collapse('hide');
        $(parent.formEditor.editor).find('#collapse3').collapse('show');
        $(parent.formEditor.editor).find('#collapse_css').collapse('hide');
        parent.layer.close(parent.formEditor.funcDialog);
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