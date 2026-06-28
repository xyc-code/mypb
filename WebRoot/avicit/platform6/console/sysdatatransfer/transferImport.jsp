<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>查看日志</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/bootstrap/3.3.4/css_default/bootstrap.css"/>
    <style>
        .TipsBtn{
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
        .form-group{
            overflow: hidden;
            height: 32px;
            margin-top: 30px;
        }
        .form-group label{
            float:left;
            margin-left:20px;
            margin-right:5px;
            line-height: 32px;
            font-weight: normal;
        }
        .form-group input{
            float:left;
            line-height: 32px;
            font-size: 12px;
        }
        .TipsBtn input{
            height: 28px;
            line-height: 28px;
            padding:0;
        }
    </style>
</head>
<body >
    <%--优化后的文件选择框,ie8不支持，暂时不用--%>
    <%--<div class="container-fluid">
        <form id="transferImportForm"
              class="form-inline"
              enctype="multipart/form-data"
              method="post"
              action="">
            <div class="form-group" style="padding-left: 16%;height: 100%;">
                上传文件：<input name="transferImport" id="transferImport" class="form-control" disabled style="width: 44%;display: inline-block;">
                <input type="button" name="transferImportBtn" id="transferImportBtn" class="form-control" value="选择文件" class="btn" onclick="$('#transferImportHide').click()" style="width: 18%;display: inline-block;">
                <input type="file" name="transferImportHide" id="transferImportHide" style="display: none;" accept=".zip">
            </div>
            <input type="hidden" name="transferImportSubmit" id="transferImportSubmit">
        </form>
    </div>--%>
    <div>
        <form id="transferImportForm"
              class="form-inline"
              enctype="multipart/form-data"
              method="POST"
              action="">
            <div class="form-group">
                <label for="transferImport">上传文件：</label>
                <input style="width: 320px;display: block;height: 40px;" type="file" name="transferImport" id="transferImport" accept=".zip">
            </div>
        </form>
    </div>
    <div class="TipsBtn">
        <input type="button"
               class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
               value="上传" id="transfer_up"/>
    </div>



</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/h5/bootstrap/3.3.4/js/bootstrap.js"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/transferImportJs.js"></script>
<script type="text/javascript">
    var transferImport;
    var layerIndex;
    var loading;
    $(document).ready(function (){
        transferImport = new TransferImport('transferImport');
        $('#transfer_up').on('click',function (){
            var val = $('#transferImport').val();
            if(!val){
                layer.msg('请选择要上传的zip文件！',{time: 2000});
                return false;
            }else {
                $('#transferImportForm').submit();
            }
        })
        //修改文件选择框样式
        //transferImport.inputChange();
        // 1.参数设置
        var options = {
            type: 'POST',
            url: 'sysDataTransfer/sysDataTransferController/toTransferImport',
            dataType: 'json',
            beforeSubmit: function(formData, jqForm, option){
                var str = $.param(formData);
                var dom = jqForm[0];
                var name = dom.name.value;
                /* 只要不返回false,表单都会提交 */
                return true;
            },
            beforeSend:function(){
                submitAfter();
            },
            success: function(responseText, statusText, xhr, $form){
                successAfter(responseText, statusText, xhr, $form);
            },
            error: function(xhr, status, err) {
                parent.layer.close(loading);
                layer.msg("上传失败！");
            },
            clearForm: true,    // 成功提交后，清除表单填写内容
            resetForm: true    // 成功提交后，重置表单填写内容
        };
        //ie8下dataType属性导致响应状态异常
        if(getIEVersion() == 8){
           delete options['dataType']
        }
        // 2.绑定ajaxSubmit()
        $("#transferImportForm").submit(function(){// 提交表单的id
            $(this).ajaxSubmit(options);
            return false;//防止表单自动提交
        });
    });

    //提交后前操作
    function submitAfter(){
        loading = parent.layer.load(2, {
            shadeClose: false,
            title: '加载中..',
            shade: [0.1,'#fff']
        });
    }

    //导入后操作
    function successAfter(responseText, statusText, xhr, $form){
        parent.isImportFile = true;

        parent.layer.close(loading);
        if(responseText.msg){
            layer.msg(responseText.msg);
        }else {
            layer.msg("导入完成，请查看导入结果！");
        }
    }
</script>
</html>
