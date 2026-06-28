<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form,table";
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>流程demo</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <!-- 框架 样式 -->
    <link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/style.css">
</head>
<body>
<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include2/buttons.jsp" %>
<div id="formBut" style="display:none">
    <li id="print1" class="bpmhide bpm_self_class" title="打印1" order="2" style="display: none;">
        <a href="javascript:void(0)" onClick="alert(1)">
            <p class="f-btn"><em class="glyphicon glyphicon-print"></em><span>打印1</span></p>
        </a>
    </li>
    <li id="print2" class="bpmhide bpm_self_class" title="打印2" order="3" style="display: none;">
        <a href="javascript:void(0)" onClick="alert(2)">
            <p class="f-btn"><em class="glyphicon glyphicon-print"></em><span>打印2</span></p>
        </a>
    </li>
</div>
<div id="formTab" style="display:none">
    <input id="tableId" value="DYN_CSBD01" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}">
        <input id="comId" value="8a58cd43696a9ae301696a9e29400148" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
            <table id="5bdc70c6-a664-42d7-af4b-bc62d4c02315" style="" class="form_commonTable1">
                <tbody>
                <tr>
                    <td style="width:12%; text-align: right;"><label for="DATA_1" class=" " style=";"> 字段_1： </label> </td>
                    <td style="width:36%;">
                        <div class="input-group-sm ">
                            <input type="text" class="form-control input-sm" style="" id="DATA_1" name="DATA_1" title="字段_1" maxlength="50" value="">
                        </div> </td>
                    <td style="width:13%; text-align: right;"><label for="DATA_2" class=" " style=";"> 字段_2： </label> </td>
                    <td style="width:37%;">
                        <div class="input-group-sm ">
                            <input type="text" class="form-control input-sm" style="" id="DATA_2" name="DATA_2" title="字段_2" maxlength="50" value="">
                        </div> </td>
                </tr>
                </tbody>
            </table>
        </div>
    </form>

</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 框架脚本 -->
<script type="text/javascript"
        src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/jquery.dragsort-0.5.2.min.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/nav.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/main.js"></script>
<!-- 流程的js -->
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/CommonActor.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/BpmActor.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/FlowEditor.js"></script>
<!-- 业务的js -->
<script src="avicit/platform6/demo/demoflow/js/DemoFlow.js"></script>
<script type="text/javascript">
    $(function () {
        //创建业务操作JS
        var demoFlow = new DemoFlow();
        //创建流程操作JS
        var flowEditor = new FlowEditor(demoFlow);
        flowEditor.init();
    });
</script>
</body>
</html>
