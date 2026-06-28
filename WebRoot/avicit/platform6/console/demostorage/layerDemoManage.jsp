<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
    String importlibs = "common,table,form,fileupload";
%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>弹窗示例</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <link rel="stylesheet" type="text/css" href="avicit/platform6/console/demostorage/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/layer-v2.3/layer/skin/layer.css">

    <script src="avicit/platform6/h5demo/loading/loading-ext.js"></script>
    <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="avicit/platform6/console/demostorage/js/clipboard.min.js"></script>
    <script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" src="static/js/platform/component/ueditor/ueditor.js"></script>
    <script type="text/javascript" charset="utf-8" src="static/js/platform/component/ueditor/lang/zh-cn/zh-cn.js"></script>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <style>
    .btn-primary{
    height:40px;
    padding:6px 12px;
    margin:10px;
    }
    </style>

</head>

<body>
<div class="codeGenerator">
    <div id="layerDemo" class="secondMenuStatus"  style="width:1100px;">
    <div class="codeGenerator-title">提示工具</div>
        <div class="codeGenerator-box">
        <table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
            <tr>
                <td colspan="2">
                    <a id="mouseTips" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point"
                       role="button"> 鼠标悬浮提示</a>
                    <a id="loadingTips" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point"
                       role="button" title="Loading提示"> Loading提示</a>
                </td>
            </tr>
            </table>
                    <div class="viewcode"><i class="fa fa-fw fa-code"></i>
                        <a id="viewcode" onclick="viewcode('viewcode', 'exampleCodeFont8', 'contentBody8');">查看代码</a>
                    </div>
                    <div class="exampleCodeFont8" style="display: none" id="exampleCodeFont8">
                        <iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody"
                                id="contentBody8"
                                width="100%" height="700" frameBorder="0"
                                scrolling="auto"></iframe>
                    </div>
            </div>
            <div class="codeGenerator-title">富文本</div>
            <div class="codeGenerator-box">
            <table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
            <tr>
                <td colspan="3">
                    <div>
                        <script id="summary" name="summary" type="text/plain"></script>
                    </div>
                </td>
            </tr>
            </table>

            <div class="viewcode"><i class="fa fa-fw fa-code"></i>
                <a id="viewcode2" onclick="viewcode('viewcode2', 'exampleCodeFont9', 'contentBody9');">查看代码</a>
            </div>
            <div class="exampleCodeFont8" style="display: none" id="exampleCodeFont9">
                <iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody"
                        id="contentBody9"
                        width="100%" height="500" frameBorder="0"
                        scrolling="auto"></iframe>
            </div>
    	</div>
    	<div class="codeGenerator-title" style="margin-bottom:0;">

        <span class="active" id="table" onclick="showFileUpload('table')">附件上传(列表式)</span>
        <span  id="span" onclick="showFileUpload('span')">附件上传(卡片式)</span>
    	</div>
    	<div class="codeGenerator-box" style="height:220px">
            <table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
            <tr>
                <td>
                    <div id="attachmentTable"></div>
                    <div id="attachmentSpan" ></div>

                </td>
            </tr>
            </table>

            <div class="viewcode"><i class="fa fa-fw fa-code"></i>
                <a id="viewcode3" onclick="viewcode('viewcode3', 'exampleCodeFont10', 'contentBody10');">查看代码</a>
            </div>
            <div class="exampleCodeFont8" style="display: none" id="exampleCodeFont10">
                <iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody"
                        id="contentBody10"
                        width="100%" height="900" frameBorder="0"
                        scrolling="auto"></iframe>
            </div>
    	</div>
    </div>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

</body>
<script>
    $(document).ready(function () {
        //点击复制
        showFileUpload("table");
        textCopy("icon-fuzhi");
        //初始化父页面高度
        initParentHeight();
        initTips();
        $("#loadingTips").bind('click', function (e) {
            var handle = doShowLoading();
            setTimeout("doHideLoading(" + handle + ")", 1000);//1秒后关闭
        });
        var option = {
            //initialContent : '',//初始化编辑器的内容
            initialFrameHeight: 300,//设置初始化高度
            initialFrameWidth: 880, //设置初始化宽度
            autoHeightEnabled: false, //定义是否高度自适应
            maximumWords: 4000, //输入的字符最大长度
            wordCount: true   // 开启右下角字符限制提示信息
        };
        var editor = new UE.ui.Editor(option);//初始化编辑器
        editor.render("summary");//渲染编辑器

        $('#attachmentTable').uploaderExt({
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
            allowPreview: true,
            showType: 'table'
        });

    });

    var flag=false;
    function showFileUpload(id) {
        $("#" + id).siblings().removeClass('active');
        $("#" + id).addClass('active');

       if (id == 'span') {
           $('#attachmentTable').hide()
           $('#attachmentSpan').show()
           //初始化附件上传组件
           if(!flag){
               $('#attachmentSpan').uploaderExt({
                   secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                   allowPreview: true,
                   fileNumLimit: 6,
                   showType: 'span'
               });
               flag=true;
           }
       } else {
           $('#attachmentTable').show()
           $('#attachmentSpan').hide()
       }
    }

    function initTips() {
        var tipsIndex;
        $("#mouseTips").mouseover(function () {
            var message = "<span style='color:#333333;'>这是一个鼠标悬浮提示</span>";
            tipsIndex = layer.tips(message, $(this), {
                tips: 2,
                area: ['auto', 'auto'],
                time: 0
            });
        }).mouseout(function () {
            layer.close(tipsIndex);
        });
    }
    function viewcode(id, codeId, iframeId) {
        if ($('#' + id).text() == "查看代码") {
            $('#' + codeId).css("display", "block");
            $('#' + id).text("收起代码");

            $("#" + iframeId).contents().find('.codeGenerator').hide();
            $("#" + iframeId).contents().find('#' + codeId).parent().show();
        } else {
            $('#' + codeId).css("display", "none");
            $('#' + id).text("查看代码")
        }
    }

    //文本复制
    function textCopy(copyBtn) {
        if (navigator.userAgent.indexOf('MSIE 8') >= 0) {
            $('.icon iconfont icon-fuzhi').hide();
        } else {
            //1. 实例化clipboard
            var clipboard = new ClipboardJS('.' + copyBtn);
            //2. 复制成功的响应事件
            clipboard.on('success', function (e) {
                parent.layer.msg('复制成功', {
                    time: 2000
                })
            });
        }
    }

    //初始化父页面高度
    function initParentHeight() {
        var defaultAPI = 'layerDemo';
        var parentAPI = parent.currentAPI == '' ? defaultAPI : parent.currentAPI;
        //先隐藏所有标签
        $('.codeGenerator').hide();
        //再显示当前点击的二级菜单对应的内容
        $('#' + parentAPI).parent().show();
    }
</script>

</html>