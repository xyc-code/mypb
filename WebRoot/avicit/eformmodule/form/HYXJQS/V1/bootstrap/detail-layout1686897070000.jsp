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
    <input id="tableId" value="DYN_HUANJIE_QS" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   选举请示 
 </div>
 <table style=" border: 1px solid;" id="R505Y6oBvWa6Y03KkR08CY05yNGqt1Iy" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><label for="REQUST_DATE" class=" " style=";" id="Je0Fz4ykdi5wdvzcaWnupiLEoxY56zcY"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="AUTO_CODE" class=" " style=";" id="oXimNNtC6bEi706ycK9eHD0I27VUZ9oL"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:12%; border: 1px solid;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><label for="USER_NAME" class=" " style=";" id="yjcA1XdsebKrQphy6Y9zBu56rgoWBjyL"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="255" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="DEPT_NAME" class=" " style=";" id="DEPT_NAMEEformLabel"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:12%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="1000" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="DKsB4d5mkYFXkuYwqqJIVAxCfFUyKyHX"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="PARTY_NAME_NEW" class=" " style=";" id="PARTY_NAME_NEWEformLabel"> <i class="required">*</i>选举党组织名称： </label> </td> 
    <td style="width:12%; border: 1px solid; text-align: left;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" title="选举党支部名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME_NEW"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAME_NEWButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><label for="PARTY_TYPE" class=" " style=";" id="PARTY_TYPEEformLabel"> <i class="required">*</i>选举类型： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="PARTY_TYPE" title="选举类型" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE1" name="PARTY_TYPE" title="选举类型" value="1" required <c:if test="${map['PARTY_TYPE'] eq '1'}">checked="true"</c:if> />党组织成立 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE2" name="PARTY_TYPE" title="选举类型" value="2" required <c:if test="${map['PARTY_TYPE'] eq '2'}">checked="true"</c:if> />党组织换届选举 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE3" name="PARTY_TYPE" title="选举类型" value="3" required <c:if test="${map['PARTY_TYPE'] eq '3'}">checked="true"</c:if> />成立纪律检查委员会 </label> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="USER_TEL" class=" " style=";" id="USER_TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
    <td style="width:12%; border: 1px solid; text-align: left;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="USER_TEL" name="USER_TEL" title="申请人电话" maxlength="255" customset="true" value="<c:out  value='${map["USER_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><label for="THREE_FOUR_NAME" class=" " style=";" id="THREE_FOUR_NAMEEformLabel"> 委员会记录： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="THREE_FOUR_NAME" name="THREE_FOUR_NAME" title="三会一课名称" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:25%; border: 1px solid; text-align: left;" colspan="2"><p><a id="ZWHJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId1" name="THREE_FOUR_ID" title="三会一课ID" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"委员会上传附件：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 委员会上传附件： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div id="SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V" required class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:25%; border: 1px solid; text-align: left;" colspan="2"><a id="ZWHJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:9%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"同意召开党员大会的通知：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 同意召开党员大会的通知： </label> </td> 
    <td style="width:16%; border: 1px solid;"> 
     <div id="WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:25%; border: 1px solid; text-align: left;" colspan="2"><a id="TYZKTZ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" disabled id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
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

<script src="avicit/eformmodule/form/HYXJQS/V1/bootstrap/detail-layout1686897070000.js?_=1703656014081" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e3828f72f301828fd75792200b";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_HUANJIE_QS";
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