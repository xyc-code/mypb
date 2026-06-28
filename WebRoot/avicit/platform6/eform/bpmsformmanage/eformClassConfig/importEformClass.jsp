<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<HTML>

<head>
    <title>导入表单事件配置</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
    <div class="toolbar-left">
        <a id="import" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" onclick="doImport();"     href="javascript:void(0);" title="导入"><i class="icon icon-daoru"></i>导入</a>
        <a id="result" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" onclick="showResult();" href="javascript:void(0);" title="查看导入结果"><i class="icon icon-Eye"></i>查看导入结果</a>
        <input type="checkbox" id="isUpdate" style="height: 11px !important; margin-right: 4px;">是否覆盖
    </div>
    <form  role="form"  id='uploadForm' method="post" enctype="multipart/form-data"  style="padding-top:20px;" >
        <div class="form-group">
        </div>
        <div class="form-group">
            <label for="xmlFile">导入的文件</label>
            <input type = "file" id = 'xmlFile' name = 'xmlFile' accept=".xml" />
        </div>
    </form>
</div>


</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
<script>
    $(function() {
        $("#xmlFile").blur(function(e) {
            enableImport = true;
        });
    });

    var needReload = false;
    var enableImport = true; // 避免重复点击导入多次导入
    function showResult(){

        showIndex = layer.open({
            type: 2,
            area: ['100%', '100%'],
            title: '查看导入结果',
            skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
            maxmin: false, //开启最大化最小化按钮
            content: 'platform/excelImportResult/toManagernew/${fileName}'
        });
    }

    function doImport() {
        if(!enableImport){
            return false;
        }
        enableImport = false;
        $('#saveForm').addClass("disabled");
        if($("#xmlFile").val() == ""){
            layer.msg("请添加要导入的文件！", {icon: 0});
            enableImport = true;
            $('#saveForm').removeClass("disabled");
            return false;
        } else {
            var pathFileName = $("#xmlFile").val();
            var fileExt = pathFileName.substring(pathFileName.lastIndexOf("."), pathFileName.length).toLowerCase();
            if(fileExt != '.xml'){
                layer.msg("请选择正确的文件！", {icon: 0});
                enableImport = true;
                $('#saveForm').removeClass("disabled");
                return false;
            }
            var isUpdate = $('#isUpdate').prop('checked');
            $("#uploadForm").ajaxSubmit({
                type : 'POST',
                url : 'platform/eform/bpmsManageController/importEformClass',
                data: {appid:'${appid}',isUpdate:isUpdate},
                dataType : 'text',
                success : function(response) {
                    response = $.parseJSON(response);

                    if(response.flag == "success") {
                        layer.msg('导入表单事件XML成功！', {icon: 1});
                        parent.editEformClassConfig.reLoad();
                        //parent.editEformClassConfig.closeDialog("upload");
                        needReload = true;
                    }
                    else {
                        layer.msg('导入表单事件XML失败！', {icon: 2});
                    }
                    enableImport = true;
                    $('#saveForm').removeClass("disabled");
                }
            });

        }
    }
</script>

</html>
