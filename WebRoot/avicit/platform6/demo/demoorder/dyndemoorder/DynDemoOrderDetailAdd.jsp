<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
    <!-- ControllerPath = "demoorder/dyndemoorder/dynDemoOrderController/operation/sub/Add/null" -->
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
    <form id='form'>
        <input type="hidden" name="id"/>
        <input type="hidden" name="orderId" id="orderId"/>
        <table class="form_commonTable">
            <tr>
                <th width="10%">
                    <label for="productName">商品名称:</label></th>
                <td width="39%">
                    <select class="form-control input-sm"  name="productName" id="productName" title="" onChange="changeField(this)">
                        <option value="">&nbsp;&nbsp;&nbsp;请选择</option>
                    </select>
                </td>
                <th width="10%">
                    <label for="productNum">商品数量:</label></th>
                <td width="39%">
                    <input class="form-control input-sm" type="text" name="productNum" id="productNum"/>
                </td>
            </tr>
            <tr>
                <th width="10%">
                    <label for="productId">商品ID:</label></th>
                <td width="39%">
                    <input class="form-control input-sm" readonly="true" type="text" name="productId" id="productId"/>
                </td>
                <th width="10%">
                    <label style="display: none" for="productPrice">商品价格:</label></th>
                <td width="39%">
                    <input class="form-control input-sm" style="display: none" type="text" name="productPrice" id="productPrice"/>
                </td>
            </tr>
        </table>
    </form>
</div>
<div data-options="region:'south',border:false" style="height: 60px;">
    <div id="toolbar"
         class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
        <table class="tableForm" style="border:0;cellspacing:1;width:100%">
            <tr>
                <td width="50%" style="padding-right:4%;" align="right">
                    <a href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="保存"
                       id="dynDemoOrderDetail_saveForm">保存</a>
                    <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                       id="dynDemoOrderDetail_closeForm">返回</a>
                </td>
            </tr>
        </table>
    </div>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript">
    function closeForm() {
        parent.dynDemoOrderDetail.closeDialog("insert");
    }

    function saveForm() {
        var isValidate = $("#form").validate();
        if (!isValidate.checkForm()) {
            isValidate.showErrors();
            return false;
        }
        $("#orderId").val(parent.dynDemoOrderDetail.pid);
        //限制保存按钮多次点击
        $('#dynDemoOrderDetail_saveForm').addClass('disabled').unbind("click");
        parent.dynDemoOrderDetail.save($('#form'), "insert");
    };

/*    function appendProductList(theList){
        for(elem in theList){
            $("#productName").append("<option value='" + processVar.name + "' style='padding-left: 20px'"
                + " productId='" + elem.id + "'"
                + " productName='" + elem.name + "'"
                + " productPrice='" + elem.price + "'"
                + ">&nbsp;&nbsp;&nbsp;" + processVar.alias + "(" + processVar.name + ")" + "</option>");
        }

    };*/

    function changeField(obj) {
        //二级联动
        var productId = $("#productName option:selected").attr("productId");
        var productName = $("#productName option:selected").attr("productName");
        var productPrice = $("#productName option:selected").attr("productPrice");
        if(productId != null && productId !=""){
            $("#productId").val(productId);
            $("#productPrice").val(productPrice);
        }else{
            $("#productId").val("");
            $("#productPrice").val(productId);
        }
    };

    $(document).ready(function () {
        $('.date-picker').datepicker();
        $('.time-picker').datetimepicker({
            oneLine: true,//单行显示时分秒
            closeText: '确定',//关闭按钮文案
            showButtonPanel: true,//是否展示功能按钮面板
            showSecond: false,//是否可以选择秒，默认否
            beforeShow: function (selectedDate) {
                if ($('#' + selectedDate.id).val() == "") {
                    $(this).datetimepicker("setDate", new Date());
                    $('#' + selectedDate.id).val('');
                }
            }
        });

        //获取所有的商品信息
        var allList = null;
        avicAjax.ajax({
            url : "demoorder/dyndemoproduct/dynDemoProductController/operation/getAllProduct",
            data : {
                data : JSON.stringify("ok")
            },
            type : 'post',
            dataType : 'json',
            success : function(r) {
                if (r.flag == "success") {
                    debugger;
                    allList = r.productList;
                    for(elem in allList){
                        $("#productName").append("<option value='" + allList[elem].name + "' style='padding-left: 20px'"
                            + " productId='" + allList[elem].id + "'"
                            + " productName='" + allList[elem].name + "'"
                            + " productPrice='" + allList[elem].price + "'"
                            + ">&nbsp;&nbsp;&nbsp;" + allList[elem].name + /*"(" + allList[elem].name + ")" +*/ "</option>");
                    }
                    layer.msg('获取商品数据成功！');
                } else {
                    layer.alert('获取商品数据失败！' + r.error, {
                        icon : 7,
                        area : [ '400px', '' ], //宽高
                        closeBtn : 0,
                        btn : [ '关闭' ],
                        title : "提示"
                    });
                }
            }
        });

        parent.dynDemoOrderDetail.formValidate($('#form'));
        //保存按钮绑定事件
        $('#dynDemoOrderDetail_saveForm').bind('click', function () {
            saveForm();
        });
        //返回按钮绑定事件
        $('#dynDemoOrderDetail_closeForm').bind('click', function () {
            closeForm();
        });


        $('.date-picker').on('keydown', nullInput);
        $('.time-picker').on('keydown', nullInput);
    });
</script>
</body>
</html>