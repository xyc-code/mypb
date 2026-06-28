<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form,table";
%>
<!DOCTYPE html>
<html>
<head>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <title>数据迁移</title>

    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/bootstrap/3.3.4/css_default/bootstrap.css"/>
    <link rel="stylesheet" href="avicit/platform6/bpmreform/bpmdeploy/css/style.css"/>
    <link rel="stylesheet" href="avicit/platform6/console/sysdatatransfer/css/transferStyle.css">
    <script type="text/javascript">
        var _bpm_baseurl = "<%=ViewUtil.getRequestPath(request)%>";
    </script>
    <style>
    </style>
</head>
<body>
<div class="easyui-layout shownorth" fit=true>
    <div data-options="region:'north',split:false" style="height:43px;overflow:visible;">
        <div class="container-fluid" style="margin-top: -15px;">
            <div class="row">
            <div class="toolbar" style="padding-left: 10px;">
                <div class="toolbar-left">
                    <a id="dataTransferimport" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point"
                       role="button" title="导入"><i class="icon icon-daoru"></i> 导入</a>
                    <a id="dataTransferExport" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm"
                       role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
                    <a id="dataTransferresult" href="javascript:void(0)" class="btn btn-default form-tool-btn btn-sm"
                       role="button" title="查看导入结果"><i class="icon iconfont icon-search"></i> 查看导入结果</a>
                    <span class="remind-text">◆ 提示：导出流程不会关联导出对应表单，导出表单会关联导出对应的存储。</span>
                </div>
            </div>
        </div></div>
    </div>
    <div data-options="region:'west',split:true" style="border-top-style: hidden;overflow: hidden;padding: 0;">
        <div class="container-fluid">
            <div class="row " style="margin-bottom: 16px;">
                <ul id="myTab" class="nav nav-tabs">
                    <li class="active"><a rel='flow_ifrm' href="#flow" data-toggle="tab">流程管理</a></li>
                    <li><a rel='form_ifrm' href="#form" data-toggle="tab">表单管理</a></li>
                    <li><a rel='model_ifrm' href="#model" data-toggle="tab">存储模型</a></li>
                </ul>
            </div>
            <div class="row content">
                <div id="myTabContent" class="tab-content" >
                    <div class="tab-pane fade in active" id="flow">
                    </div>
                    <div class="tab-pane fade" id="form">
                        <iframe name="form_ifrm" id="form_ifrm" src="" scrolling="no" frameborder="0" style="width:100%;height:100%;"></iframe>
                    </div>
                    <div class="tab-pane fade" id="model">
                        <iframe id="model_ifrm" src="" scrolling="no" frameborder="0" style="width:100%;height:100%;"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script type="text/javascript" src="static/h5/bootstrap/3.3.4/js/bootstrap.js"></script>
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/transferJs.js"></script>
<script type="text/javascript">
    var transferJs;
    //选中的流程数据
    var selectedFlowArr = [];
    //选中的表单数据
    var selectedFormArr = [];
    //选中的视图数据
    var selectedViewArr = [];
    //选中的存储数据
    var selectedDbArr = [];
    //表单页面选中的存储数据
    var selectedFormDbArr = [];
    //表单页面选中的存储数据
    var selectedViewDbArr = [];
    var path='<%=ViewUtil.getRequestPath(request)%>';

    // 导入成功后关闭弹框
    window.importLayer = "";
    // 是否导入文件
    window.isImportFile = false;

    function setTreeHeight(){
        $('#flow_ifrm').height(document.documentElement.clientHeight- 94);
        $('#form_ifrm').height(document.documentElement.clientHeight- 94);
        $('#model_ifrm').height(document.documentElement.clientHeight- 94);
        /*$('#myTabContent').width(document.documentElement.clientWidth- 246);*/
    }
    window.onresize = setTreeHeight;
    var ifrm={'flow_ifrm':'sysDataTransfer/flowModelTransferController/toFlowModel',
              'form_ifrm':'sysDataTransfer/formModelTransferController/toFormModel',
              'model_ifrm':'sysDataTransfer/dbModelTransferController/toDbModel'
    };
    $(document).ready(function () {
        //默认激活流程模型
        $('#flow_ifrm').src = "sysDataTransfer/flowModelTransferController/toFlowModel";
        setTimeout(function(){
            var $frame=$('<iframe id="flow_ifrm" src="" scrolling="no" frameborder="0" style="width:100%;height:100%;"></iframe>');
            $frame.attr("src","sysDataTransfer/flowModelTransferController/toFlowModel");
            $frame.appendTo($('#flow'));
            //设置iframe高度
            setTreeHeight();
        },10);

        //切换标签页
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            if(!$('#'+e.target.rel).attr('src')){
                $('#'+e.target.rel).attr('src',ifrm[e.target.rel]);
            }
        });
        transferJs = new TransferJs();
        //导出

        $('#dataTransferExport').on('click',function (){
            //获取子页面
            var flowIfrm = document.getElementById("flow_ifrm");
            var formIfrm = document.getElementById("form_ifrm");
            var modelIfrm = document.getElementById("model_ifrm");
            var flowWin = flowIfrm.contentWindow.flowDataTransferJs;
            var formWin = formIfrm.contentWindow.formDataTransferJs;
            var modelWin = modelIfrm.contentWindow.dbDataTransferJs;
            //获取子页面选择数据
            selectedFlowArr = transferJs.isInited(flowWin) == 1 ? flowWin.getSelectedFlowArr() : [];
            selectedFormArr = transferJs.isInited(formWin) == 1 ? formWin.getSelectedFormArr() : [];
            selectedViewArr = transferJs.isInited(formWin) == 1 ? formWin.getSelectedViewArr() : [];
            selectedFormDbArr = transferJs.isInited(formWin) == 1 ? (formWin.getFormViewDb()).formDb : [];
            selectedViewDbArr = transferJs.isInited(formWin) == 1 ? (formWin.getFormViewDb()).viewDb : [];
            selectedDbArr = transferJs.isInited(modelWin) == 1 ? modelWin.getSelectedDbArr() : [];

            transferJs.showExport();
        });
        //导入
        $('#dataTransferimport').on('click',function (){
            transferJs.showImport();
        });
        //查看导入结果
        $('#dataTransferresult').on('click',function (){
            transferJs.showResult();
        });
    });
    //刷新本页面
    window.quickStart_refresh = function() {
        var tabType = $(".float-l>.active").attr("_target");
        var url = window.location.href;
        if(url.indexOf("tabType") != -1){
            url = url.replace(/tabType=(.)*/g, "tabType=" + tabType);
        }else{
            if(url.indexOf("?") != -1){
                url = url + "&tabType=" + tabType;
            }else{
                url = url + "?tabType=" + tabType;
            }
        }
        window.location.replace(url);
    };
</script>
</body>
</html>
