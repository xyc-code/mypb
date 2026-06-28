<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<html>
<head>
    <title>事件说明</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <style>
        li {
            margin: 10px;
        }
    </style>
</head>
<body>
        <ul style="margin-top:0;font-size: 14px;">
            <li><span style="color: red;">自定义列转换（视图列转换）</span>：视图表格控件、树列表控件获取数据之后会调用此方法，用于对目标值进行转换。需要实现接口TransferColInterface中的方法 &nbsp;<a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/transfercoldemo.jsp?type=1" target="_blank">demo</a></li>
            <li><span style="color: red;">地址控件（地址控件转换类）</span>：表单中地址选择控件初始化数据时调用此方法，用于对目标值进行转换。需要实现接口TransferColInterface中的方法 &nbsp;<a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/transfercoldemo.jsp?type=2" target="_blank">demo</a></li>
            <li><span style="color: red;">联动控件（联动控件自定义类）</span>：表单、视图中联动控件勾选自定义实现属性后调用此方法，用于对目标值进行转换。需要继承类EformLinkage，并实现其中的getReturnValue方法 &nbsp;<a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/linkagedemo.jsp?type=3" target="_blank">demo</a></li>
            <li><span style="color: red;">虚拟控件（虚拟字段计算类）</span>：表单中虚拟字段控件，用于对目标值进行转换。需要实现接口CalculateValue中的方法 &nbsp;<a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/calculatedemo.jsp?type=4" target="_blank">demo</a></li>
            <li><span style="color: red;">流程意见（流程意见自定义类）</span>：表单中流程意见控件，用于展示自定义意见。需要继承类Bpmopinion，实现其中的getReturnValue方法 &nbsp;<a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/bpmopiniondemo.jsp?type=5" target="_blank">demo</a></li>
            <li><span style="color: red;">添加（前后处理类）</span>：表单执行添加数据操作前后会调用此方法，包含前处理和后处理。需要实现接口EformHandlerEvent中的方法 <a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/handleevnetdemo.jsp?type=6" target="_blank">demo</a></li>
            <li><span style="color: red;">更新（前后处理类）</span>：表单执行更新数据操作前后会调用此方法，包含前处理和后处理。需要实现接口EformHandlerEvent中的方法 <a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/handleevnetdemo.jsp?type=7" target="_blank">demo</a></li>
            <li><span style="color: red;">删除（前后处理类）</span>：视图执行删除数据操作前后会调用此方法，包含前处理和后处理。需要实现接口EformHandlerEvent中的方法 <a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/handleevnetdemo.jsp?type=8" target="_blank">demo</a></li>
            <li><span style="color: red;">子表虚拟列转换（子表列转换）</span>：表单子表控件虚拟列自定义转换调用此方法。需要实现接口EformDatatableColTransform中的方法 <a href="avicit/platform6/eform/bpmsformmanage/eformClassConfig/datatablecoldemo.jsp?type=9" target="_blank">demo</a></li>
        </ul>
</body>
</html>