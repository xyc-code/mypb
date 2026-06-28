<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,table";
%>
<!DOCTYPE html>
<HTML>

<head>
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="avicit/platform6/eform/bpmsviewdesign/css/style.css"/>

    <style type="text/css">
        .previewLayout {
            display: none;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 9999;
        }

        .previewLayout .eform-item{
            border-color: #5c5cff;
        }
        .previewLayout
        .eform-item-left{
            border-color:#5c5cff;
        }
        .previewLayout
        .eform-item-top{
            border-color:#5c5cff;
        }
        .previewLayout .eform-item-bottom{
            border-color:#5c5cff;
        }
        .previewLayout
        .eform-item-center{
            border-color: #5c5cff;
        }
        .previewLayout
        .eform-item-right{
            border-color: #5c5cff;
        }
        .help-button {
            display: inline-block;
            height: 22px;
            width: 22px;
            /*line-height: 22px;*/
            text-align: center;
            padding: 0;
            background-color: #65bcda;
            color: #FFF;
            font-size: 12px;
            font-weight: bold;
            cursor: default;
            /*margin-left: 4px;*/
            border-radius: 100%;
            border-color: #FFF;
            border: 2px solid #FFF;
            -webkit-box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.2);
        }

        .help-button:hover {
            background-color: #65bcda;
            text-shadow: none;
        }
    </style>
</head>

<body class="easyui-layout" fit="true">
<div data-options="region:'north'" style="height: 43px;">
    <div class="toolbar">
        <div class="toolbar-left">
            <a id="toPreview" href="javascript:void(0)"
               class="btn btn-default form-tool-btn btn-sm" role="button"
               title="运行/预览"><i class="icon iconfont icon-preview"></i> 运行/预览</a>
            <i class="tips-iconhelp icon iconfont icon-question-circle"  data-rel="popover" data-html="true" data-trigger="hover" data-placement="right"
                  data-content="<ul><li>根节点的class是eform-item</li><li>子节点的class必须有eform-position</li><li>负责布局位置的class分别是eform-item-top、eform-item-left、</br>eform-item-right、eform-item-center、eform-item-bottom</li><li>通过设置高度或宽度的百分比配置布局比例</li></ul>"></i>
        </div>
    </div>
</div>
<div data-options="region:'center',split:true,border:false,width:fixwidth(1.0,e),height:fixheight(1.0,e)">
    <div class="previewLayout" id="previewLayout">
    </div>
    <jsp:include page="/avicit/platform6/eform/common/htmleditorAbsolute.html"></jsp:include>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script type="text/javascript">
var id = '${param.id}';
var type = '${param.type}';

$('[data-rel=popover]').popover({container:'body'});

$(function(){
    initHtml(id)

    $("#toPreview").on('click',function(){
        $(".previewLayout").css("display","block");
        var viewLayout = getEditorValue();
        $(".previewLayout").empty();
        $(".previewLayout").append(viewLayout);
    })

    document.onclick = function (event)
    {
        var e = event || window.event;
        var elem = e.srcElement||e.target;
        while(elem)
        {
            if(elem.id == "toPreview" || elem.id == "previewLayout")
            {
                $(".previewLayout").css("display","block");
                return;
            }
            elem = elem.parentNode;
        }
        //隐藏div的方法
        $(".previewLayout").css("display","none");
    }
});

function initHtml(id){
    $.ajax({
        url: 'platform/eform/bpmsManageController/getEformViewLayout/'+id,
        async: false,
        cache: false,
        success: function (r) {
            if (r != null && r.length > 0) {
                setEditorValue(r);
            }
        }, error: function () {
            return false;
        }
    });
}
</script>
</body>
</html>
