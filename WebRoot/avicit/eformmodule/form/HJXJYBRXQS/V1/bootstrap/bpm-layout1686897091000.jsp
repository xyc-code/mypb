<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,tree";
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=10;IE=9;IE=8;IE=EDGE">
    <title>换届选举预备人选请示</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <!-- 框架 样式 -->
    <link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/style.css?v=${jsversion}">
    <!-- 时间轴 样式 -->
    <link rel="stylesheet" type="text/css" href="static/h5/timeliner/css/timeliner.css?v=${jsversion}">
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css?v=${jsversion}" />
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css?v=${jsversion}"/>
            <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css"/>
    
</head>
<body>
<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include2/buttons.jsp" %>

<div id="formBut" style="display:none">
                                            </div>


<div id="formTab" style="display:none">
    <input id="tableId" value="DYN_HUANJIE_YBRX" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   预备人选请示 
 </div>
 <table style=" border: 1px solid;" id="UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="REQUST_DATE" class=" " style=";" id="iEMtQFw686mzEbzv5bC1W0gb3WCTkSZv"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid;"><label for="AUTO_CODE" class=" " style=";" id="pArG5W8gi5xiAdiVuIS0QeMTcEZTTQ4G"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:18%; border: 1px solid;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="USER_NAME" class=" " style=";" id="AwoSCNh0VwQZbDo4Ja3m14X0CPxgg24u"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="255" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid;"><label for="DEPT_NAME" class=" " style=";" id="pQ8qGkNjdFI0ikjohRL4XEYjfNw5lJQ2"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:18%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="PARTY_NAME" class=" " style=";" id="af50WmbSENtxBueSuNJMJ7ifsNljh0cz"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; border: 1px solid; text-align: right;"><label for="PARTY_NAME_NEW" class=" " style=";" id="PARTY_NAME_NEWEformLabel"> <i class="required">*</i>选举党组织名称： </label> </td> 
    <td style="width:18%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" title="选举党组织名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME_NEW"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAME_NEWButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="PARTY_TYPE" class=" " style=";" id="PARTY_TYPEEformLabel"> <i class="required">*</i>选举类型： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="PARTY_TYPE" title="选举类型" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE1" name="PARTY_TYPE" title="选举类型" value="1" required <c:if test="${map['PARTY_TYPE'] eq '1'}">checked="true"</c:if> />党组织成立 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE2" name="PARTY_TYPE" title="选举类型" value="2" required <c:if test="${map['PARTY_TYPE'] eq '2'}">checked="true"</c:if> />党组织换届选举 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE3" name="PARTY_TYPE" title="选举类型" value="3" required <c:if test="${map['PARTY_TYPE'] eq '3'}">checked="true"</c:if> />成立纪律检查委员会 </label> 
     </div></td> 
    <td style="width:18%; border: 1px solid; text-align: right;"><label for="USER_TEL" class=" " style=";" id="USER_TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
    <td style="width:18%; border: 1px solid; text-align: left;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="USER_TEL" name="USER_TEL" title="申请人电话" maxlength="255" customset="true" value="<c:out  value='${map["USER_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="THREE_FOUR_NAME" class=" " style=";" id="THREE_FOUR_NAMEEformLabel"> <i class="required">*</i>支委会记录： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="THREE_FOUR_NAME" name="THREE_FOUR_NAME" title="三会一课名称" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><p><a id="ZWHJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId" name="THREE_FOUR_ID" title="三会一课ID" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会上传附件： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="ZWHJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="SEL_USER" class=" " style=";" id="SEL_USEREformLabel"> <i class="required">*</i>党小组会/党员大会接收人： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="SEL_USER" name="SEL_USER" title="党小组会/党员大会接收人" maxlength="255" value="<c:out  value='${map["SEL_USER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="SEL_USERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2">提示：若为小组会请选择本支部全部党小组长，若为党员大会请选择组织委员。</td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"酝酿候选人初步人选记录：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 酝酿候选人初步人选记录： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="iCczmLiZGN8zyMc17737IFhvG6ERZso7" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="CBHXRJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; border: 1px solid; text-align: right;"><label for="THREE_FOUR_NAME1" class=" " style=";" id="THREE_FOUR_NAME1EformLabel"> 支委会确定预备人选记录： </label> </td> 
    <td style="width:20%; border: 1px solid; text-align: left;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="THREE_FOUR_NAME1" name="THREE_FOUR_NAME1" title="三会一课名称1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME1"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAME1Button"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:36%; border: 1px solid; text-align: left;" colspan="2"><p><a id="YBHXRJLXQ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId1" name="THREE_FOUR_ID1" title="三会一课ID1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID1"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"支委会确定候选人预备人选：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会确定候选人预备人选： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="YBHXRJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"纪检委员人选资格审查表：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 纪检委员人选资格审查表： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="JJWYZGSCB" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"候选人预备人选批复：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 候选人预备人选批复： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="JGPF" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="SEL_USER_ID" name="SEL_USER_ID" title="所选人员id" maxlength="255" value="<c:out  value='${map["SEL_USER_ID"]}'/>"> 
 </div>
 <p></p>
</div>
    </form>

</div>

<div id="addUserPhotoDialog" style="overflow: auto;display: none">
    <form action="" method="post"  onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}"
          id="uploadForm" enctype="multipart/form-data" style="margin-top: 20px;">
        <table width="100%" border="0">
            <tbody>
            <tr>
                <td width="10%" nowrap>选择本地图片文件</td>
                <td width="90%" align="left"><input type="file" style="width:90%" id="eform_add_photo" name="eform_add_photo"></td>
            </tr>
            </tbody>
        </table>
        <input type="hidden" id="photo_eformId" name="photo_eformId" value="${comId}">
    </form>
</div>
<div class="contextMenu" id="eform-tab-menu">
    <ul>
        <li id="eform-refresh">刷新</li>
    </ul>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script type="text/javascript" src="static/h5/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js?v=${jsversion}"></script>
<script src="static/h5/jqGrid-5.2.0/plugins/jquery.contextmenu.js?v=${jsversion}" ></script>
<!-- 框架脚本 -->
<script type="text/javascript"
        src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/jquery.dragsort-0.5.2.min.js?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/nav.js?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/main.js?v=${jsversion}"></script>
<!-- 时间轴组件 timeliner.js-->
<script type="text/javascript" src="static/h5/timeliner/js/timeliner.js?v=${jsversion}"></script>
<!-- 流程的js -->
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js?v=${jsversion}"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/CommonActor.js?v=${jsversion}"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/BpmActor.js?v=${jsversion}"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/FlowEditor.js?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>
<!-- 业务的js -->
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="avicit/platform6/autocode/js/AutoCode.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.js"></script>
<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/eformTab.js?v=${jsversion}"></script>
<!-- 导出功能的js -->
<script src="static/js/platform/component/common/exportData.js?v=${jsversion}" ></script>
<!-- 导入功能的js -->
<script src="static/js/platform/component/common/importData.js?v=${jsversion}" ></script>
<script src="avicit/eformmodule/form/HJXJYBRXQS/V1/bootstrap/bpm-layout1686897091000.js?_=1703639948032" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var idmap = "${idmap}";
    var lrcc = "${result}";
    var datasourceId = "${datasourceId}";
    var entryId = '${entryId}';
    var _taskName = '${_taskName}';
    var tableName = "DYN_HUANJIE_YBRX";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var customValidate = new Map();
    var results;
    lrcc = lrcc.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
    if (lrcc) {
        results =$.parseJSON(lrcc);
    }
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
        mainTableId: "${maintableId}",
        id: id,
        baseUrl:_eform_base_url,
        isInsert: isInsert,
        entryId: entryId,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);
    /**
     * jquery-validate自定义校验
     */
    $.validator.addMethod("phone", function (value, element) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请输入有效的手机号");
    $.validator.addMethod("idcard", function (value, element) {
        return this.optional(element) || isIdCard(value);
    }, "请输入有效的身份证号");
    $.validator.addMethod("zipcode", function (value, element) {
        return this.optional(element) || (/^[0-9]{6}$/.test(value));
    }, "请输入有效的邮政编码");
    $.validator.addMethod("customset", function (value, element) {
        var domId = element.id;
        //var result = eval("window."+domId+"CustomSet(value)");
        var result = customSetValidate(domId,value)
        return this.optional(element) || result;
    }, "请输入有效的数据");
</script>
</body>
</html>
