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
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>"></base>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css-fixie8-fonticon.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css?v=${jsversion}" />
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css?v=${jsversion}"/>
            <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css"/>
    
</head>

<body class="easyui-layout" fit="true" style="height:auto;min-height:100%;height:100%\9;overflow: auto;">
<div data-options="region:'center',split:true,border:false" style="padding: 8px 0;">
    <input id="tableId" value="DYN_THREE_FOUR" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   三会一课 
 </div>
 <table style=" border: 1px solid;" id="qxhsLgWAnXcNmocs4zVIK06bjvNozHK2" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="REQUEST_USER" class=" " style=";" id="REQUEST_USEREformLabel"> <i class="required">*</i>申请人： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_USER" name="REQUEST_USER" readonly title="申请人" maxlength="1000" value="<c:out  value='${map["REQUEST_USER"]}'/>"> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_NAME" class=" " style=";" id="kytDU8ZYV0LG6r6k56mx00eJwqIZIUPN"> <i class="required">*</i>会议名称： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="MEET_NAME" name="MEET_NAME" title="会议名称：" maxlength="255" value="<c:out  value='${map["MEET_NAME"]}'/>"> 
     </div></td> 
    <td style="border: 1px solid; width:19%; text-align: right;"><label for="AUTO_CODE" class=" " style=";" id="AUTO_CODEEformLabel"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="自动编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_TYPE" class=" " style=";" id="MEET_TYPEEformLabel"> <i class="required">*</i>会议类型： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="MEET_TYPE" name="MEET_TYPE" title="会议类型" initvalue="<c:out  value='${map["MEET_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="SECRET_LEVEL" class=" " style=";" id="SECRET_LEVELEformLabel"> <i class="required">*</i>密级： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style=";" required id="SECRET_LEVEL" name="SECRET_LEVEL" title="密级" oldvalue="${map['SECRET_LEVEL']}"> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_DATE" class=" " style=";" id="MEET_DATEEformLabel"> 会议日期： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="会议日期" class="form-control date-picker input-sm" style=";" id="MEET_DATE" name="MEET_DATE" value="${map['MEET_DATE']}" readonly> 
      <span id="MEET_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="MEET_PLACE" class=" " style=";" id="MEET_PLACEEformLabel"> <i class="required">*</i>会议地点： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="MEET_PLACE" name="MEET_PLACE" title="会议地点" maxlength="255" value="<c:out  value='${map["MEET_PLACE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="JOIN_ORG" class=" " style=";" id="JOIN_ORGEformLabel"> 参会组织名称： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="JOIN_ORG" name="JOIN_ORG" title="参会组织名称N" maxlength="255" value="<c:out  value='${map["JOIN_ORG"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="JOIN_ORGButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="JOIN_PEOPLE_NEW" class=" " style=";" id="JOIN_PEOPLE_NEWEformLabel"> 参会人员： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="JOIN_PEOPLE_NEW" name="JOIN_PEOPLE_NEW" title="参会人员" maxlength="4000" value="<c:out  value='${map["JOIN_PEOPLE_NEW"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="JOIN_PEOPLE_NEWButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_OUTLINE" class=" " style=";" id="MEET_OUTLINEEformLabel"> 会议提纲： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="5" id="MEET_OUTLINE" name="MEET_OUTLINE" title="会议提纲" maxlength="4000"><c:out  value="${map['MEET_OUTLINE']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="HOURS_RECORD_YN" class=" " style=";" id="HOURS_RECORD_YNEformLabel"> <i class="required">*</i>是否记录培训学时： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="HOURS_RECORD_YN" title="是否记录培训学时" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="HOURS_RECORD_YN1" name="HOURS_RECORD_YN" title="是否记录培训学时" value="0" required <c:if test="${map['HOURS_RECORD_YN'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="HOURS_RECORD_YN2" name="HOURS_RECORD_YN" title="是否记录培训学时" value="1" required <c:if test="${map['HOURS_RECORD_YN'] eq '1'}">checked="true"</c:if> />是 </label> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> </label> <label for="LEARN_HOURS" class=" " style=";" id="LEARN_HOURSEformLabel"> 学时： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="LEARN_HOURS" name="LEARN_HOURS" data-min="-99999999999999.9" data-max="99999999999999.9" data-precision="1" title="学时" maxlength="20" value="<c:out  value='${map["LEARN_HOURS"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_THEME" class=" " style=";" id="MEET_THEMEEformLabel"> 会议主题： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="MEET_THEME" name="MEET_THEME" title="会议主题" maxlength="4000"><c:out  value="${map['MEET_THEME']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="DUE_PEOPLE_NUM" class=" " style=";" id="DUE_PEOPLE_NUMEformLabel"> 应到人数： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="DUE_PEOPLE_NUM" name="DUE_PEOPLE_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="应到人数" maxlength="20" value="<c:out  value='${map["DUE_PEOPLE_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="ACTUAL_PEOPLE_NUM" class=" " style=";" id="ACTUAL_PEOPLE_NUMEformLabel"> 实到人数： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="ACTUAL_PEOPLE_NUM" name="ACTUAL_PEOPLE_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="实到人数" maxlength="20" value="<c:out  value='${map["ACTUAL_PEOPLE_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="LEAVE_PEOPLE_NUM" class=" " style=";" id="LEAVE_PEOPLE_NUMEformLabel"> 请假人数： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="LEAVE_PEOPLE_NUM" name="LEAVE_PEOPLE_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="请假人数" maxlength="20" value="<c:out  value='${map["LEAVE_PEOPLE_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="JOIN_MEET_RATE" class=" " style=";" id="JOIN_MEET_RATEEformLabel"> 参会率%： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="JOIN_MEET_RATE" name="JOIN_MEET_RATE" data-min="-9999999999999.99" data-max="9999999999999.99" data-precision="2" title="参会率" maxlength="20" value="<c:out  value='${map["JOIN_MEET_RATE"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="nullName" class=" " style=";" id="nullEformLabel"> 请假人员名单： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="LEAVEL_PEOPLE" name="LEAVEL_PEOPLE" title="请假人员名单" maxlength="255" value="<c:out  value='${map["LEAVEL_PEOPLE"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="LEAVEL_PEOPLEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><span face="微软雅黑" style="font-family: 微软雅黑;"><span style="font-size: 13px; line-height: 18.5714px;"></span></span></td> 
    <td style="border: 1px solid; width:31%;"><span face="微软雅黑" style="font-family: 微软雅黑;"><span style="font-size: 13px; line-height: 18.5714px;"></span></span></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="SPEAKER_OUT_YN" class=" " style=";" id="SPEAKER_OUT_YNEformLabel"> <i class="required">*</i>主讲人是否为外来人员： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="SPEAKER_OUT_YN" title="主讲人是否为外来人员" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="SPEAKER_OUT_YN1" name="SPEAKER_OUT_YN" title="主讲人是否为外来人员" value="1" required <c:if test="${map['SPEAKER_OUT_YN'] eq '1'}">checked="true"</c:if> />是 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="SPEAKER_OUT_YN2" name="SPEAKER_OUT_YN" title="主讲人是否为外来人员" value="0" required <c:if test="${map['SPEAKER_OUT_YN'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="SPEAKER" class=" " style=";" id="SPEAKEREformLabel"> 主讲人： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="SPEAKER" name="SPEAKER" title="主讲人" maxlength="255" value="<c:out  value='${map["SPEAKER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="SPEAKERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="LECTURER_OUT_YN" class=" " style=";" id="LECTURER_OUT_YNEformLabel"> <i class="required">*</i>授课人是否为外来人员： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="LECTURER_OUT_YN" title="授课人是否为外来人员：" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="LECTURER_OUT_YN1" name="LECTURER_OUT_YN" title="授课人是否为外来人员：" value="1" required <c:if test="${map['LECTURER_OUT_YN'] eq '1'}">checked="true"</c:if> />是 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="LECTURER_OUT_YN2" name="LECTURER_OUT_YN" title="授课人是否为外来人员：" value="0" required <c:if test="${map['LECTURER_OUT_YN'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="LECTURER" class=" " style=";" id="LECTUREREformLabel"> 授课人： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="LECTURER" name="LECTURER" title="授课人" maxlength="255" value="<c:out  value='${map["LECTURER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="LECTURERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="HOST_TAKER_OUT_YN" class=" " style=";" id="HOST_TAKER_OUT_YNEformLabel"> <i class="required">*</i>主持人是否为外来人员： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="HOST_TAKER_OUT_YN" title="主持人是否为外来人员：" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="HOST_TAKER_OUT_YN1" name="HOST_TAKER_OUT_YN" title="主持人是否为外来人员：" value="1" required <c:if test="${map['HOST_TAKER_OUT_YN'] eq '1'}">checked="true"</c:if> />是 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="HOST_TAKER_OUT_YN2" name="HOST_TAKER_OUT_YN" title="主持人是否为外来人员：" value="0" required <c:if test="${map['HOST_TAKER_OUT_YN'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="HOST_TAKER" class=" " style=";" id="HOST_TAKEREformLabel"> 主持人： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="HOST_TAKER" name="HOST_TAKER" title="主持人" maxlength="255" value="<c:out  value='${map["HOST_TAKER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="HOST_TAKERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="NOTE_TAKER_OUT_YN" class=" " style=";" id="NOTE_TAKER_OUT_YNEformLabel"> <i class="required">*</i>记录人是否为外来人员： </label> </td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="NOTE_TAKER_OUT_YN" title="记录人是否为外来人员：" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="NOTE_TAKER_OUT_YN1" name="NOTE_TAKER_OUT_YN" title="记录人是否为外来人员：" value="1" required <c:if test="${map['NOTE_TAKER_OUT_YN'] eq '1'}">checked="true"</c:if> />是 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="NOTE_TAKER_OUT_YN2" name="NOTE_TAKER_OUT_YN" title="记录人是否为外来人员：" value="0" required <c:if test="${map['NOTE_TAKER_OUT_YN'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="NOTE_TAKER" class=" " style=";" id="NOTE_TAKEREformLabel"> 记录人： </label> </td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="NOTE_TAKER" name="NOTE_TAKER" title="记录人" maxlength="255" value="<c:out  value='${map["NOTE_TAKER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="NOTE_TAKERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_RESULT" class=" " style=";" id="MEET_RESULTEformLabel"> 会议结果： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="MEET_RESULT" name="MEET_RESULT" title="会议结果" maxlength="4000"><c:out  value="${map['MEET_RESULT']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="REMARKS" class=" " style=";" id="REMARKSEformLabel"> 备注： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="REMARKS" name="REMARKS" title="备注" maxlength="4000"><c:out  value="${map['REMARKS']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 附件： </label> </td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div id="aAAqdPPuXNI12T97c7AiWs6idHRKhUSb" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" disabled id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" title="参会人员党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME_NEW"]}'/>"> 
 </div>
 <p></p>
</div>
    </form>
</div>
<c:if test="${isviewform!= 'true'}">
    <div data-options="region:'south',border:false" style="height: 60px;">
        <div id="toolbar"
             class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
            <table class="tableForm avicTable" style="border:0;cellspacing:1;width:100%">
                <tr>
                    <td width="50%" style="padding-right:4%;" align="right">

                        <a id="page_saveButton" href="javascript:void(0)" style="margin-right:10px;"
                           class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存"
                           onclick="saveForm()">保存</a>

                                                                                
                                                                                
                        
                        <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                           onclick="closeDialog()">返回</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</c:if>

<div id="addUserPhotoDialog" style="overflow: auto;display: none">
    <form action="" method="post"
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
<!-- 导出功能的js -->
<script src="static/js/platform/component/common/exportData.js?v=${jsversion}" ></script>
<!-- 导入功能的js -->
<script src="static/js/platform/component/common/importData.js?v=${jsversion}" ></script>
<script src="avicit/eformmodule/form/ThreeSessionAndOneLession/V1/bootstrap/add-layout1703576290000.js?_=1705299764019" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "402811817f4eb25b017f63319c2c18bb";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_THREE_FOUR";
    var type = "${type}";
    var idmap = "${idmap}";
    var parentNodeId = "${parentNodeId}";
    var pNodeIdValue = "${pNodeIdValue}";
    var formIsDirtyvalidateflag = "${formIsDirtyvalidateflag}";
    var _eform_base_url = "<%=ViewUtil.getRequestPath(request)%>";
    var customValidate = new Map();
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
        baseUrl:_eform_base_url,
        id: id,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
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