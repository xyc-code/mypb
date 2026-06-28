<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<% 
String importlibs = "common,table,form,fileupload,tree";
String id = request.getParameter("id");
String logId = request.getParameter("logId");
%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>视图设计</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css"/>
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css" />
    <link rel="stylesheet" href="avicit/platform6/eform/bpmsviewdesign/css/view.css"/>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <script type="text/javascript" src="static/h5/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js"></script>
    <script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js"></script>
    <script src="avicit/platform6/eform/formdefine/js/eformUpload.js" type="text/javascript"></script>
    <script src="avicit/platform6/autocode/js/AutoCode.js" ></script>
    <script src="static/js/platform/eform/common.js"></script>
    <script src="static/js/platform/eform/jqgridValidate.js"></script>
    <script src="static/h5/common-ext/h5-common-after.js"></script>
    <script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js"></script>
    <script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
    <script src="static/h5/jqGrid-5.2.0/plugins/jquery.contextmenu.js" ></script>
    <!-- 富文本的js与css -->
    <script src="static/h5/kindeditor/kindeditor-all-min.js"></script>
    <script src="static/h5/kindeditor/lang/zh-CN.js"></script>
    <script src="static/js/platform/eform/eformTab.js"></script>
    <script src="static/h5/select2/select2.js"></script>
</head>
<body class="easyui-layout" fit="true">
    <div data-options="region:'center',split:true,border:false" id="data" class="fixheight fixwidth"  style="height:800px">
    </div>
</body>


<script type="text/javascript">
    var id = "123";
    var idmap = "{}";
    var filterParams={};
    var session = {};

    var pageParams = {
        formData: {},
        session:session,
        urlParam:{}
    };


$(document).ready(function() {
    $('#closeForm').bind('click', function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });

    //var xmlandlayout = parent.engine.viewSchemaLog + "#!#@#textsplit#!#@#" +  parent.engine.viewlayoutLog;
    var version = parent.version;
    $.ajax({
        url: './eform/eformViewInfoController/viewLogXml/<%=logId%>',
        data: {
            version:version
        },
        type: 'post',
        dataType: 'json',
        success: function (r) {
            if(r.flag ==  "success"){
                var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/;
                var result = REG_BODY.exec(r.html);
                if(result && result.length === 2)
                    $("#data").html(result[1]);

                var blockdom = /<blockdom[^>]*>([\s\S]*)<\/blockdom>/;
                var blockdomhtml = blockdom.exec(r.html);
                if (blockdomhtml && blockdomhtml.length === 2)
                    $("body").append(blockdomhtml[1]);
                setTimeout(function(){
                    try{
                        $('.easyui-layout').layout();
                        $("ul.ztree").css("height","100%");
                    }catch(err){
                    }

                }, 500);

                loadScriptString(r.js);
            }
        }
    });
});

    function loadScriptString(code) {
        code = removeJsComments(code);
        var script = document.createElement("script");  //创建一个script标签
        script.id = "outjs";
        script.type = "text/javascript";
        try {
            //IE浏览器认为script是特殊元素,不能再访问子节点;报错;
            script.appendChild(document.createTextNode(code));
        }
        catch (ex) {
            script.text = code;
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    function removeJsComments(code)
    {
        return code.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|\s|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|\s|$)/g, '\n');
    }
</script>
</html>