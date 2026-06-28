<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,tree";
%>
<!DOCTYPE html>
<HTML style="overflow:auto;">
<head>
    <title>详情</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>"></base>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css?v=${jsversion}" />
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css?v=${jsversion}"/>
            <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css"/>
    
</head>

<body class="easyui-layout" fit="true" style="height:auto;min-height:100%;height:100%\9;overflow: auto;">
<div data-options="region:'center',split:true,border:false" style="padding: 8px 0;">
    <input id="tableId" value="DYN_PW_REPORT" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党组织工作上报 
 </div>
 <table style="" id="lNLrOxqzGhO78DCfdZDhNFUrNSvsTifT" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:7%; text-align: right;"><label for="REQUEST_USER" class=" " style=";" id="InQPBWiJCE0xWHIeTMoupiSGaH7101cT"> <i class="required">*</i>上报人： </label> </td> 
    <td style="width:18%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_USER" name="REQUEST_USER" readonly title="上报人" maxlength="1000" value="<c:out  value='${map["REQUEST_USER"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="REQUEST_DEPT" class=" " style=";" id="yrV5CSphbgOTQOYai38zxaErWOfPNdMt"> <i class="required">*</i>上报部门： </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DEPT" name="REQUEST_DEPT" readonly title="上报部门" maxlength="1000" value="<c:out  value='${map["REQUEST_DEPT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:7%; text-align: right;"><label for="REQUEST_DATE" class=" " style=";" id="A59IvSQvDW3pBAnMMaujoFmwykJ3FDNy"> <i class="required">*</i>上报日期： </label> </td> 
    <td style="width:18%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="上报日期" maxlength="1000" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:25%;"><p style="text-align: right;"><label for="AUTO_CODE" class=" " style=";" id="AUTO_CODEEformLabel"> <i class="required">*</i>表单编号： </label> </p></td> 
    <td style="width:25%;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:7%; text-align: right;"><label for="PARTY_NAME" class=" " style=";" id="PARTY_NAMEEformLabel"> <i class="required">*</i>所在党支部： </label> </td> 
    <td style="width:18%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="所在党支部:" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:25%;"></td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="字段_3" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:7%; text-align: right;"><label for="CLASSIFICATION" class=" " style=";" id="CLASSIFICATIONEformLabel"> <i class="required">*</i>分类： </label> </td> 
    <td style="width:68%;" colspan="3"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="CLASSIFICATION" name="CLASSIFICATION" title="分类" initvalue="<c:out  value='${map["CLASSIFICATION"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:7%; text-align: right;"><label for="TITLE" class=" " style=";" id="TITLEEformLabel"> <i class="required">*</i>标题： </label> </td> 
    <td style="width:68%;" colspan="3"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="TITLE" name="TITLE" title="标题" maxlength="255" value="<c:out  value='${map["TITLE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:7%; text-align: right;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 附件： </label> </td> 
    <td style="width:68%;" colspan="3"> 
     <div id="QoknHIwWHegeo2sSnkicYUYfRrRJHnwb" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
</div>
    </form>
</div>
<div class="contextMenu" id="eform-tab-menu">
    <ul>
        <li id="eform-refresh">刷新</li>
    </ul>
</div>
<c:if test="${isviewform!= 'true'}">
    <div data-options="region:'south',border:false" style="height: 60px;">
        <div id="toolbar"
             class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
            <table class="tableForm avicTable" style="border:0;cellspacing:1;width:100%">
                <tr>
                    <td width="50%" style="padding-right:4%;" align="right">

                        <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                           onclick="closeDialog()">返回</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</c:if>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/h5/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js?v=${jsversion}"></script>
<script src="static/h5/jqGrid-5.2.0/plugins/jquery.contextmenu.js?v=${jsversion}" ></script>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="avicit/platform6/autocode/js/AutoCode.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.js?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>


<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>

<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/eformTab.js?v=${jsversion}"></script>

<script src="avicit/eformmodule/form/partyWorkReport/V1/bootstrap/detail-layout1699335956000.js?_=1699864692220" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "402811817e770e44017e77ddb9ac0dee";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_PW_REPORT";
    var entryId = '${entryId}';
    var type = "${type}";
    var idmap = "${idmap}";
    var parentNodeId = "${parentNodeId}";
    var pNodeIdValue = "${pNodeIdValue}";
    var _eform_base_url = "<%=ViewUtil.getRequestPath(request)%>";

    <c:if test="${empty map}">var isInsert = true;</c:if>
    <c:if test="${!empty map}">var isInsert = false;</c:if>;


    //url属性
    var url = window.location.href;
    var urlParam = {};
    if (url.split("?").length>1) {
        var paramArray = url.split("?")[1].split("&");

        for (var i = 0; i < paramArray.length; i++) {
            var arrayValue = paramArray[i].split("=");
            urlParam[arrayValue[0]] = arrayValue[1];
        }
    }

    var filterParams={};
    //封装全局页面参数，供页面JS调用
    var pageParams = {
        dataSourceId: datasourceId,
        tableName: tableName,
        id: id,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        baseUrl:_eform_base_url,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);
</script>
</body>
</html>