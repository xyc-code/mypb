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
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="REQUEST_USER" class=" " style=";" id="REQUEST_USEREformLabel"> <i class="required">*</i>申请人： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 30px;" colspan="2"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_USER" name="REQUEST_USER" readonly title="申请人" maxlength="1000" value="<c:out  value='${map["REQUEST_USER"]}'/>"> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 30px; text-align: right;"><label for="REQUEST_TEL" class=" " style=";" id="REQUEST_TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 30px;" colspan="2"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="REQUEST_TEL" name="REQUEST_TEL" title="申请人电话" maxlength="255" value="<c:out  value='${map["REQUEST_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="AUTO_CODE" class=" " style=";" id="AUTO_CODEEformLabel"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 30px;" colspan="2"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="自动编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 30px; text-align: right;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 30px;" colspan="2"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="JOIN_ORG" class=" " style=";" id="JOIN_ORGEformLabel"> <i class="required">*</i>参会组织名称： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 30px;" colspan="2"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="JOIN_ORG" name="JOIN_ORG" title="参会组织名称" maxlength="255" value="<c:out  value='${map["JOIN_ORG"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="JOIN_ORGButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 30px; text-align: right;"><label for="PARTY_TYPE" class=" " style=";" id="PARTY_TYPEEformLabel"> <i class="required">*</i>党组织类型： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 30px;" colspan="2"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" initvalue="<c:out  value='${map["PARTY_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 29px;"><label for="MEET_TYPE" class=" " style=";" id="MEET_TYPEEformLabel"> <i class="required">*</i>会议类型： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 29px;" colspan="2"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="MEET_TYPE" name="MEET_TYPE" title="会议类型"> <option value="10" <c:if test="${map['MEET_TYPE'] eq '10'}">selected</c:if> >请选择</option> <option value="5" <c:if test="${map['MEET_TYPE'] eq '5'}">selected</c:if> >党委会</option> <option value="6" <c:if test="${map['MEET_TYPE'] eq '6'}">selected</c:if> >总支委员会</option> <option value="1" <c:if test="${map['MEET_TYPE'] eq '1'}">selected</c:if> >支部委员会</option> <option value="0" <c:if test="${map['MEET_TYPE'] eq '0'}">selected</c:if> >党员大会</option> <option value="2" <c:if test="${map['MEET_TYPE'] eq '2'}">selected</c:if> >党小组会</option> <option value="3" <c:if test="${map['MEET_TYPE'] eq '3'}">selected</c:if> >党课</option> <option value="4" <c:if test="${map['MEET_TYPE'] eq '4'}">selected</c:if> >纪律检查委员会</option> </select> 
     </div> </td> 
    <td style="border: 1px solid; width:17%; height: 29px; text-align: right;"><label for="SECRET_LEVEL" class=" " style=";" id="SECRET_LEVELEformLabel"> <i class="required">*</i>密级： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 29px;" colspan="2"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style=";" required id="SECRET_LEVEL" name="SECRET_LEVEL" title="密级" oldvalue="${map['SECRET_LEVEL']}"> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="MEET_DATE" class=" " style=";" id="MEET_DATEEformLabel"> <i class="required">*</i>会议时间： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 30px;" colspan="2"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="会议时间" class="form-control date-picker input-sm" style=";" required id="MEET_DATE" name="MEET_DATE" value="${map['MEET_DATE']}" readonly> 
      <span id="MEET_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 30px; text-align: right;"><label for="MEET_PLACE" class=" " style=";" id="MEET_PLACEEformLabel"> <i class="required">*</i>会议地点： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 30px;" colspan="2"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="MEET_PLACE" name="MEET_PLACE" title="会议地点" maxlength="255" value="<c:out  value='${map["MEET_PLACE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="DUE_PEOPLE_NUM" class=" " style=";" id="DUE_PEOPLE_NUMEformLabel"> <i class="required">*</i>应到会人数： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 30px;" colspan="2"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" required id="DUE_PEOPLE_NUM" name="DUE_PEOPLE_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="应到会人数" maxlength="20" value="<c:out  value='${map["DUE_PEOPLE_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 30px; text-align: right;"><label for="ACTUAL_PEOPLE_NUM" class=" " style=";" id="ACTUAL_PEOPLE_NUMEformLabel"> <i class="required">*</i>实到会人数： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 30px;" colspan="2"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" required id="ACTUAL_PEOPLE_NUM" name="ACTUAL_PEOPLE_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="实到会人数" maxlength="20" value="<c:out  value='${map["ACTUAL_PEOPLE_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 47px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 47px;"><label for="LEAVE_PEOPLE_NUM" class=" " style=";" id="LEAVE_PEOPLE_NUMEformLabel"> 缺席人数： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 47px;" colspan="2"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="LEAVE_PEOPLE_NUM" name="LEAVE_PEOPLE_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="缺席人数" maxlength="20" value="<c:out  value='${map["LEAVE_PEOPLE_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 47px; text-align: right;"><label for="JOIN_MEET_RATE" class=" " style=";" id="JOIN_MEET_RATEEformLabel"> 参会率%： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 47px;" colspan="2"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="JOIN_MEET_RATE" name="JOIN_MEET_RATE" data-min="-9999999999999.99" data-max="9999999999999.99" data-precision="2" title="参会率" maxlength="20" value="<c:out  value='${map["JOIN_MEET_RATE"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 47px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 47px;"><label for="JOIN_PEOPLE_NEW" class=" " style=";" id="JOIN_PEOPLE_NEWEformLabel"> <i class="required">*</i>参会人员： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 47px;" colspan="2"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="JOIN_PEOPLE_NEW" name="JOIN_PEOPLE_NEW" title="参会人员" maxlength="4000" value="<c:out  value='${map["JOIN_PEOPLE_NEW"]}'/>"> 
     </div></td> 
    <td style="border: 1px solid; width:17%; height: 47px; text-align: right;"><label for="LX_POSEN" class=" " style=";" id="LX_POSENEformLabel"> 列席人员： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 47px;" colspan="2"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="LX_POSEN" name="LX_POSEN" title="列席人员" maxlength="255" value="<c:out  value='${map["LX_POSEN"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="LX_POSENButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 47px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 47px;"><label for="nullName" class=" " style=";" id="nullEformLabel"> 请假人员名单： </label> </td> 
    <td style="border: 1px solid; width:34%; height: 47px;" colspan="2"><p> </p> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="LEAVEL_PEOPLE" name="LEAVEL_PEOPLE" title="请假人员名单" maxlength="255" value="<c:out  value='${map["LEAVEL_PEOPLE"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="LEAVEL_PEOPLEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div><p></p></td> 
    <td style="border: 1px solid; width:17%; height: 47px; text-align: right;"><label for="HOST_TAKER" class=" " style=";" id="HOST_TAKEREformLabel"> <i class="required">*</i>主持人： </label> </td> 
    <td style="border: 1px solid; width:33%; height: 47px;" colspan="2"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="HOST_TAKER" name="HOST_TAKER" title="主持人" maxlength="255" value="<c:out  value='${map["HOST_TAKER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="HOST_TAKERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 112px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 112px;"><label for="MEET_ZJ" class=" " style=";" id="MEET_ZJEformLabel"> <i class="required">*</i>会议关键词： </label> </td> 
    <td style="border: 1px solid; width:83%; height: 112px;" colspan="5"> 
     <div class="bpm_self_class input-sm input-group-sm " id="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" style="height: auto;"> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ1" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'}">
         checked="true"</c:if> </c:forEach> /> 落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ2" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="主题形势任务教育" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '主题形势任务教育'}">
         checked="true"</c:if> </c:forEach> /> 主题形势任务教育 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ3" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党组织选举" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党组织选举'}">
         checked="true"</c:if> </c:forEach> /> 党组织选举 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ4" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="发展党员" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '发展党员'}">
         checked="true"</c:if> </c:forEach> /> 发展党员 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ5" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党员学习" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党员学习'}">
         checked="true"</c:if> </c:forEach> /> 党员学习 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ6" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="民主评议" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '民主评议'}">
         checked="true"</c:if> </c:forEach> /> 民主评议 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ7" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="推优评先" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '推优评先'}">
         checked="true"</c:if> </c:forEach> /> 推优评先 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ8" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党风廉政教育" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党风廉政教育'}">
         checked="true"</c:if> </c:forEach> /> 党风廉政教育 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ9" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党员处理处分、末端监督" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党员处理处分、末端监督'}">
         checked="true"</c:if> </c:forEach> /> 党员处理处分、末端监督 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ10" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党务公开 " required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党务公开 '}">
         checked="true"</c:if> </c:forEach> /> 党务公开 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ11" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党费、党建活动经费" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党费、党建活动经费'}">
         checked="true"</c:if> </c:forEach> /> 党费、党建活动经费 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ12" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="铸心突击队" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '铸心突击队'}">
         checked="true"</c:if> </c:forEach> /> 铸心突击队 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ13" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党建+质量" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党建+质量'}">
         checked="true"</c:if> </c:forEach> /> 党建+质量 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ14" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党建共建" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党建共建'}">
         checked="true"</c:if> </c:forEach> /> 党建共建 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ15" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党员积分" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党员积分'}">
         checked="true"</c:if> </c:forEach> /> 党员积分 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ16" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="主题党日" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '主题党日'}">
         checked="true"</c:if> </c:forEach> /> 主题党日 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ17" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="合规" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '合规'}">
         checked="true"</c:if> </c:forEach> /> 合规 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ18" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="党组织学习组研讨报备" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '党组织学习组研讨报备'}">
         checked="true"</c:if> </c:forEach> /> 党组织学习组研讨报备 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ19" name="MEET_ZJ" title="会议关键词(调整值在会议类型的事件里)" value="其他" required <c:forEach items="${ map['MEET_ZJ'] }" var="s"> 
       <c:if test="${s eq '其他'}">
         checked="true"</c:if> </c:forEach> /> 其他 
       </label> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="MEET_NAME" class=" " style=";" id="kytDU8ZYV0LG6r6k56mx00eJwqIZIUPN"> <i class="required">*</i>会议名称： </label> </td> 
    <td style="border: 1px solid; width:83%; height: 30px;" colspan="5"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="MEET_NAME" name="MEET_NAME" title="会议名称：" maxlength="255" value="<c:out  value='${map["MEET_NAME"]}'/>"> 
     </div><label for="请选择" class=" " style=";" id="请选择EformLabel"> </label> </td> 
   </tr> 
   <tr style="height: 52px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 52px;"><label for="MEET_OUTLINE" class=" " style=";" id="MEET_OUTLINEEformLabel"> <i class="required">*</i>会议提纲： </label> </td> 
    <td style="border: 1px solid; width:83%; height: 52px;" colspan="5"><textarea class="form-control input-sm " style="resize:none;" rows="5" required id="MEET_OUTLINE" name="MEET_OUTLINE" title="会议提纲" maxlength="4000"><c:out  value="${map['MEET_OUTLINE']}"/></textarea> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="LECTURER" class=" " style=";" id="LECTUREREformLabel"> 授课人： </label> </td> 
    <td style="border: 1px solid; width:17%; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="LECTURER" name="LECTURER" title="授课人" maxlength="255" value="<c:out  value='${map["LECTURER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="LECTURERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="text-align: right; border: 1px solid; width:17%; height: 30px;"><label for="HOURS_RECORD_YN" class=" " style=";" id="HOURS_RECORD_YNEformLabel"> <i class="required">*</i>是否记录培训学时： </label> <span face="微软雅黑" style="font-family: 微软雅黑;"><span style="font-size: 13px; line-height: 18.5714px;"></span></span></td> 
    <td style="border: 1px solid; width:17%; height: 30px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="HOURS_RECORD_YN" title="是否记录培训学时" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="HOURS_RECORD_YN1" name="HOURS_RECORD_YN" title="是否记录培训学时" value="0" required <c:if test="${map['HOURS_RECORD_YN'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="HOURS_RECORD_YN2" name="HOURS_RECORD_YN" title="是否记录培训学时" value="1" required <c:if test="${map['HOURS_RECORD_YN'] eq '1'}">checked="true"</c:if> />是 </label> 
     </div><span face="微软雅黑" style="font-family: 微软雅黑;"><span style="font-size: 13px; line-height: 18.5714px;"></span></span></td> 
    <td style="border: 1px solid; width:17%; height: 30px; text-align: right;"><label for="LEARN_HOURS" class=" " style=";" id="LEARN_HOURSEformLabel"> 学时： </label> </td> 
    <td style="border: 1px solid; width:16%; height: 30px;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="LEARN_HOURS" name="LEARN_HOURS" data-min="-99999999999999.9" data-max="99999999999999.9" data-precision="1" title="学时" maxlength="20" value="<c:out  value='${map["LEARN_HOURS"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="MEET_RESULT" class=" " style=";" id="MEET_RESULTEformLabel"> 会议结果： </label> </td> 
    <td style="border: 1px solid; width:83%; height: 30px;" colspan="5"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="MEET_RESULT" name="MEET_RESULT" title="会议结果" maxlength="4000"><c:out  value="${map['MEET_RESULT']}"/></textarea> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; width:13%; height: 30px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 附件： </label> </td> 
    <td style="border: 1px solid; width:83%; height: 30px;" colspan="5"> 
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

                                                                                
                                                                                
                                                                                                                <c:if test="${!empty map}">
                                <a href="javascript:void(0)" style="margin-right:10px;"
                                   class="btn btn-primary form-tool-btn typeb btn-sm" role="button"
                                   title="打印"
                                   id="948e83e391927ff30191c5cbca6b3cdb"><i class=""></i>打印</a>
                                </c:if>
                            
                        
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
<script src="avicit/eformmodule/form/ThreeSessionAndOneLession/V9/bootstrap/add-layout1730253152000.js?_=1782716746101" type="text/javascript"></script>
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