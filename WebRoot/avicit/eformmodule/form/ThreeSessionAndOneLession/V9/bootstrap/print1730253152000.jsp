<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,tree,fileupload,noLoading-mask";
%>
<!DOCTYPE html>
<HTML>
<head>
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>"></base>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css?v=${jsversion}" />
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/print.css?v=${jsversion}"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css?v=${jsversion}">
            <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css"/>
    </head>
<body>
    <form id='form' onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}">

        <div class="mce-content-body1">
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
    <td style="border: 1px solid; width:83%; height: 52px;" colspan="5"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="5" required id="MEET_OUTLINE" name="MEET_OUTLINE" title="会议提纲" maxlength="4000"><c:out  value="${map['MEET_OUTLINE']}"/></div> </td> 
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
    <td style="border: 1px solid; width:83%; height: 30px;" colspan="5"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="MEET_RESULT" name="MEET_RESULT" title="会议结果" maxlength="4000"><c:out  value="${map['MEET_RESULT']}"/></div> </td> 
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
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="avicit/platform6/autocode/js/AutoCode.?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.j?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var attachBpmInfo = {

        delOrAdd : [],
        editSecret:[]
    }

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "402811817f4eb25b017f63319c2c18bb";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_THREE_FOUR";
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
        baseUrl:_eform_base_url,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        entryId:entryId,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);
        $(function(){

        $("textarea.input-sm").each(function(e1,e2){
            var actualRows = $(e2).val().split("\n").length;
            var rows = $(e2).attr("rows");
            if(rows == "" || rows == undefined){
                rows = 1;
            }
            if(actualRows == "" || actualRows == undefined){
                actualRows = 1;
            }
            if(actualRows > rows){
                $(e2).attr("rows",actualRows);
            }
        });
        

if ($("input[name='REQUEST_USER']").val()==''||$("input[name='REQUEST_USER']").val()==null||$("input[name='REQUEST_USER']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{userName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#REQUEST_USER").val(macoValue);
}



    if(pageParams.urlParam.id == undefined){
var userId = pageParams.session.userId;
$.ajax({
 url:"avicit/pb/organize/partyOrganMember/partyOrganMemberTelController/getUser/"+userId,
 type:"POST",
 dataType:"JSON",
 success:function(e){
 if(e==null||e.rows.length==0){
 layer.msg('未获取到对应电话');
 }else{
 $("#REQUEST_TEL").val(e.rows[0].attribute10);
 }
 },
 error:function(e){
 layer.msg('网络异常，未找到对应接口,无法带入联系电话');
 }
});
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('SHYK_CODE',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='AUTO_CODE']",window.pageParams.content||document).val();
		var flag = $("input[name='AUTO_CODE']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#AUTO_CODE").attr("initvalue");
		var valuePure = $("#AUTO_CODE").find("#autoCode").val();
		if (flag != "disabled" && window.AUTO_CODEautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=AUTO_CODE',
					type: 'POST',
					async:false,
					data: {
						autoCode: "SHYK_CODE",
						comId: comId,
						autoCodeValue: value,
						tablename:window.pageParams.tableName,
						tableId:dbtableid,
						idmap:idmap,
						datasourceId:window.pageParams.datasourceId,
						funcpara:undefined||"",
						valuepure:oldValue
					},
					dataType: 'json',
					success: function (backData, status) {
						if (backData.errorInfo){
							layer.alert(backData.errorInfo, {
								title: "提示",
								icon: 7
							});
							codeFlag = false;
						}else{
							//继续ajax请求，根据返回的code查询业务表，判断编码是否已经存在，如果存在，重新生成新的
							var validateCode = backData.value;
							$.ajax({
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=AUTO_CODE',
								type: 'POST',
								async:false,
								data: {
									autoCode: "SHYK_CODE",
									comId: comId,
									autoCodeValue: value,
									validateCode:validateCode,
									tablename:window.pageParams.tableName,
									tableId:dbtableid,
									idmap:idmap,
									datasourceId:window.pageParams.datasourceId,
									funcpara:undefined||"",
									valuepure:oldValue
								},
								dataType: 'json',
								success: function (result) {
									if(result.flag == "success"){
										formData["AUTO_CODE"] = result.value;
										$("input[name='AUTO_CODE']",window.pageParams.content||document).val(result.value);
										$("#AUTO_CODE").attr("initvalue",result.value);
									}else{
										layer.alert("自动编码保存错误！", {
											title: "提示",
											icon: 7
										});
										codeFlag = false;
									}
								},
								error: function(xhr,state,errorThrown){
									layer.alert("自动编码保存错误！", {
										title: "提示",
										icon: 7
									});
									codeFlag = false;
								}
							});
						
						}
					},
					error: function(xhr,state,errorThrown){
						layer.alert("自动编码保存错误！", {
							title: "提示",
							icon: 7
						});
						codeFlag = false;
					}
				});
			}else{
				delete formData["AUTO_CODE"];
				$("input[name='AUTO_CODE']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='AUTO_CODE']",window.pageParams.content||document).val();
		var require = $("#AUTO_CODE").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "AUTO_CODE"){
		return true;
	}
	var idJson = $.parseJSON(idmap);
	var comId = id;
	if (idJson.hasOwnProperty("")){
		comId = idJson[""];
	}

	if(!operability){
		setTimeout(function(){
			$("#" + tagId).find("input").attr("readonly");
			$("#" + tagId).find("#autoCode_edit").unbind("click");
		}, "500");
	}else{
			}
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "AUTO_CODE"){
		return;
	}
	if(operability){
		$("#AUTO_CODE").show();
	}else{
		$("#AUTO_CODE").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "AUTO_CODE"){
		return;
	}
	if (required){
		$("#AUTO_CODE").attr("required","required");
	}
});







	JOIN_ORGDetailCol = 'JOIN_ORG';
	

function JOIN_ORGClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowJOIN_ORG = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(JOIN_ORGDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "1"
                , "20","select t.party_name,t.id,t.attribute_01,(select party_name from party_organization where id = t.parent_id) as parentName from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' order by t.attribute_01 desc",'[{"label":"党组织类型","width":"50","align":"center","orderBy":"1","name":"ATTRIBUTE_01Name"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"上级党支部名称","width":"50","align":"center","orderBy":"3","name":"PARENTNAME"}]','[{"name":"ATTRIBUTE_01Name","targetName":"","targetNameName":"","display":"党组织类型","transform":"7","lookupType":"PARTY_ORG_TYPE","filter":false},{"name":"PARTY_NAME","targetName":"JOIN_ORG","targetNameName":"参会组织名称","display":"党支部","transform":"","lookupType":"","filter":true},{"name":"PARENTNAME","targetName":"","targetNameName":"","display":"上级党支部名称","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowJOIN_ORG,this.getParamsValue,'','ThreeSessionAndOneLession-JOIN_ORG',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(JOIN_ORGDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#JOIN_ORG").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function JOIN_ORGDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#JOIN_ORG')
	.on(' focus',function(e){
	JOIN_ORGClickFun();
	this.blur();
});

/*
$('#JOIN_ORGButton').on('click',function(e){
	JOIN_ORGClickFun();
	this.blur();
});

$('#JOIN_ORGButton').click(function(event) {
   $('#JOIN_ORG').trigger('focus');
});*/




$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PARTY_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PARTY_TYPE"] != null && pageParams.formData["PARTY_TYPE"] != ''){    $('#PARTY_TYPE').val(pageParams.formData["PARTY_TYPE"]);}else if($('#PARTY_TYPE').attr("initValue")!=undefined&&$.trim($('#PARTY_TYPE').attr("initValue"))!=''){    $('#PARTY_TYPE').val($('#PARTY_TYPE').attr("initValue"));    pageParams.formData["PARTY_TYPE"] = $('#PARTY_TYPE').attr("initValue");}else{    }}});

            $('#MEET_TYPE').on('change',function(e){
            
 function addCheckEd(name, index) {
 var meetZj = $("#MEET_ZJ");
 meetZj.append('<label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ' + index + '" name="MEET_ZJ" title="' + name + '" value="' + name + '"> ' + name + ' </label>');
 }

 /*---*/
 function changeSomeThing() {//此方法于熊裕昌 2024年9月6日加
 function updateAtt() {
 var checkboxes = document.querySelectorAll('.checkbox-inline input[type="checkbox"]');
 var isChecked = false;

 for (var i = 0; i < checkboxes.length; i++) {
 if (checkboxes[i].checked) {
 var label = checkboxes[i].parentNode.textContent.trim();
 console.log(label);
 if (label === '党组织选举') {
 isChecked = true;
 console.log('isChecked',isChecked)
 break;

 }
 console.log('isChecked',isChecked);
 }
 }

 var spanElement = document.getElementById('aAAqdPPuXNI12T97c7AiWs6idHRKhUSb');
 console.log('spanElement',spanElement);
 if (isChecked) {
 console.log("附件框必填了--------------------")
 spanElement.setAttribute('required', true);
 spanElement.setAttribute('aria-required', true);
 } else {
 spanElement.removeAttribute('required');
 spanElement.removeAttribute('aria-required');

 }
 }

 var checkboxes = document.querySelectorAll('.checkbox-inline input[type="checkbox"]');
 for (var i = 0; i < checkboxes.length; i++) {
 checkboxes[i].addEventListener('change', updateAtt)
 }
 console.log("事件绑定成功了")
 }

 /*---*/

 var value = e.target.value;
 var a1 = $("#PARTY_TYPE").val();
 switch (value) {
 case "1":
 if (a1 == 2) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "2":
 if (a1 == 2) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];

 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "3":
 var checkArr = ['党员学习', '党风廉政教育', '党建+质量', '党建共建', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 break;
 case "4":
 var checkArr = ['党组织选举', '党风廉政教育', '党员处理处分、末端监督', '党建共建', '主题党日', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "5":
 if (a1 == 1) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "6":
 if (a1 == 1) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "0":
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "10":
 layer.msg("请选择其他类型");
 this.value = "";
 return false;
 break;
 }



        });
            if(pageParams.urlParam.id == undefined){
function addCheckEd(name,index){
var meetZj = $("#MEET_ZJ");
meetZj.append('<label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ'+index+'" name="MEET_ZJ" title="'+name+'" value="'+name+'"> '+name+' </label>');
}
var checkArr = ['落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文','主题形势任务教育','党组织选举','发展党员','党员学习','民主评议','推优评先','党风廉政教育','党员处理处分、末端监督','党务公开','党费、党建活动经费','铸心突击队','党建+质量','党建共建','党员积分','主题党日','合规','党组织学习组研讨报备','其他'];
$("#MEET_ZJ").children().remove(); 
for(var i = 0;i<checkArr.length;i++){
 addCheckEd(checkArr[i],i);
 }
}



$.ajax({
    url : 'platform/eform/plugin/getSecretBox',
    data : {domId : 'SECRET_LEVEL'},
    type : 'post',
    dataType : 'json',
    success : function(result) {
                for (var i =0;i<result.lookup.length;i++){
            $('#SECRET_LEVEL').append('<option value="' + result.lookup[i].lookupCode + '">' + result.lookup[i].lookupName + '</option>');
        }
        jQuery("#SECRET_LEVEL").val(jQuery("#SECRET_LEVEL").attr("oldvalue"));
    }
});






            $('#MEET_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#MEET_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#MEET_DATE').datepicker('show');
			 $('#MEET_DATE').datepicker().trigger('click');
					
		});
        



$('#DUE_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#DUE_PEOPLE_NUM').trigger('click');
});

$("#DUE_PEOPLE_NUM").on("keyup",function(){
    if($("#DUE_PEOPLE_NUM").val()>999999999999999){
        $("#DUE_PEOPLE_NUM").val(999999999999999);
        layer.msg("应到会人数最大值为\""+999999999999999+"\"");
    }
});


$('#ACTUAL_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#ACTUAL_PEOPLE_NUM').trigger('click');
});

$("#ACTUAL_PEOPLE_NUM").on("keyup",function(){
    if($("#ACTUAL_PEOPLE_NUM").val()>999999999999999){
        $("#ACTUAL_PEOPLE_NUM").val(999999999999999);
        layer.msg("实到会人数最大值为\""+999999999999999+"\"");
    }
});
            $('#ACTUAL_PEOPLE_NUM').on('change',function(e){
            var duePeopleNum = parseInt($("#DUE_PEOPLE_NUM").val());

var actualPeopleNum = parseInt(this.value);
if(actualPeopleNum > duePeopleNum){
 
 layer.msg("实到人数应小于等于应到人数");
 this.value = "";
 
 return false;
 }

        });
        

$('#LEAVE_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();


        $("#DUE_PEOPLE_NUM").on("change",function(){
        LEAVE_PEOPLE_NUMCalculateValue();
    });
        $("#ACTUAL_PEOPLE_NUM").on("change",function(){
        LEAVE_PEOPLE_NUMCalculateValue();
    });
    
    $(".number-box-act").find("a").click(function(event){
         setTimeout(function () {
                             $("#DUE_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                             $("#ACTUAL_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                      },100);
     });

    $('#LEAVE_PEOPLE_NUM').next().find("a").unbind("click");
    function LEAVE_PEOPLE_NUMCalculateValue(){
                var reg=/,/g;
        var num = $("#DUE_PEOPLE_NUM").val().replace(reg,"");
        var DUE_PEOPLE_NUM = Number(num);
                var reg=/,/g;
        var num = $("#ACTUAL_PEOPLE_NUM").val().replace(reg,"");
        var ACTUAL_PEOPLE_NUM = Number(num);
                var calculateValue = DUE_PEOPLE_NUM-ACTUAL_PEOPLE_NUM;
        if (isNaN(calculateValue)){
            return false;
        }
        if(calculateValue>999999999999999){
            calculateValue = 999999999999999;
            layer.msg("缺席人数最大值为\""+999999999999999+"\"");
        }
        $('#LEAVE_PEOPLE_NUM').val(calculateValue).trigger("change").trigger("blur");
    }

$('.number-box-act').click(function(event) {
   $('#LEAVE_PEOPLE_NUM').trigger('click');
});

$("#LEAVE_PEOPLE_NUM").on("keyup",function(){
    if($("#LEAVE_PEOPLE_NUM").val()>999999999999999){
        $("#LEAVE_PEOPLE_NUM").val(999999999999999);
        layer.msg("缺席人数最大值为\""+999999999999999+"\"");
    }
});


$('#JOIN_MEET_RATE').parent('[data-trigger="spinner"]').spinner();


        $("#ACTUAL_PEOPLE_NUM").on("change",function(){
        JOIN_MEET_RATECalculateValue();
    });
        $("#DUE_PEOPLE_NUM").on("change",function(){
        JOIN_MEET_RATECalculateValue();
    });
    
    $(".number-box-act").find("a").click(function(event){
         setTimeout(function () {
                             $("#ACTUAL_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                             $("#DUE_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                      },100);
     });

    $('#JOIN_MEET_RATE').next().find("a").unbind("click");
    function JOIN_MEET_RATECalculateValue(){
                var reg=/,/g;
        var num = $("#ACTUAL_PEOPLE_NUM").val().replace(reg,"");
        var ACTUAL_PEOPLE_NUM = Number(num);
                var reg=/,/g;
        var num = $("#DUE_PEOPLE_NUM").val().replace(reg,"");
        var DUE_PEOPLE_NUM = Number(num);
                var calculateValue = ACTUAL_PEOPLE_NUM/DUE_PEOPLE_NUM*100;
        if (isNaN(calculateValue)){
            return false;
        }
        if(calculateValue>9999999999999.99){
            calculateValue = 9999999999999.99;
            layer.msg("参会率最大值为\""+9999999999999.99+"\"");
        }
        $('#JOIN_MEET_RATE').val(calculateValue).trigger("change").trigger("blur");
    }

$('.number-box-act').click(function(event) {
   $('#JOIN_MEET_RATE').trigger('click');
});

$("#JOIN_MEET_RATE").on("keyup",function(){
    if($("#JOIN_MEET_RATE").val()>9999999999999.99){
        $("#JOIN_MEET_RATE").val(9999999999999.99);
        layer.msg("参会率最大值为\""+9999999999999.99+"\"");
    }
});
            $('#JOIN_MEET_RATE').on('change',function(e){
            

        });
        

            $('#JOIN_PEOPLE_NEW').on('click',function(e){
            layer.open({
 type : 2, 
	 area : ['100%', '100%'], 
	 title: '选择人员', 
	 skin: 'bs-modal', 
	 maxmin: false, 
	 btn: ['确定', '取消'], 
 content:"avicit/pb/dynThreeFour/DynThreeFourSelectUser/toDynThreeSelectUserManage",
 yes:function(index,layero){
 var iframeWin = layero.find('iframe')[0].contentWindow;
 var item = iframeWin.getGridName();
 $("#JOIN_PEOPLE_NEW").val(item);
 layer.close(index); 
 },
 cancel: function(index, layero){ 
	 layer.close(index); 
	 }
 

});
        });
            $("#JOIN_PEOPLE_NEW").attr('readonly','readonly');




	LX_POSENDetailCol = 'LX_POSEN';
	

function LX_POSENClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowLX_POSEN = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(LX_POSENDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "1"
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"党组织名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"},{"label":"名称","width":"50","align":"center","orderBy":"","name":"NAME"}]','[{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党组织名称","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"LX_POSEN","targetNameName":"列席人员","display":"名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowLX_POSEN,this.getParamsValue,'','ThreeSessionAndOneLession-LX_POSEN',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(LX_POSENDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#LX_POSEN").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function LX_POSENDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#LX_POSEN')
	.on(' focus',function(e){
	LX_POSENClickFun();
	this.blur();
});

/*
$('#LX_POSENButton').on('click',function(e){
	LX_POSENClickFun();
	this.blur();
});

$('#LX_POSENButton').click(function(event) {
   $('#LX_POSEN').trigger('focus');
});*/






	LEAVEL_PEOPLEDetailCol = 'LEAVEL_PEOPLE';
	

function LEAVEL_PEOPLEClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowLEAVEL_PEOPLE = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(LEAVEL_PEOPLEDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										var chry = $("#JOIN_PEOPLE_NEW").val();alert(chry);var qjry = $("#LEAVEL_PEOPLE").val();alert(qjry);if (chry.indexOf(qjry) !== -1) {alert(chry.indexOf(qjry) !== -1);layer.msg(qjry+'已在参会人员列表里，请在参会人员进行修改!');return ;}
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "1"
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME,t.party_id FROM party_member_activist_org_view T where t.PARTY_ID in (select pp.id from party_organization pp where pp.parent_id =( select po.parent_id from party_organization po where po.id in( select t1.party_id from PARTY_MEMBER t1 where t1.user_id = '@{userId}'))) ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"LEAVEL_PEOPLE","targetNameName":"请假人员名单","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowLEAVEL_PEOPLE,this.getParamsValue,'','ThreeSessionAndOneLession-LEAVEL_PEOPLE',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(LEAVEL_PEOPLEDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#LEAVEL_PEOPLE").val(null);
				}

			
			var chry = $("#JOIN_PEOPLE_NEW").val();alert(chry);var qjry = $("#LEAVEL_PEOPLE").val();alert(qjry);if (chry.indexOf(qjry) !== -1) {alert(chry.indexOf(qjry) !== -1);layer.msg(qjry+'已在参会人员列表里，请在参会人员进行修改!');return ;}
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function LEAVEL_PEOPLEDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#LEAVEL_PEOPLE')
	.on(' focus',function(e){
	LEAVEL_PEOPLEClickFun();
	this.blur();
});

/*
$('#LEAVEL_PEOPLEButton').on('click',function(e){
	LEAVEL_PEOPLEClickFun();
	this.blur();
});

$('#LEAVEL_PEOPLEButton').click(function(event) {
   $('#LEAVEL_PEOPLE').trigger('focus');
});*/






	HOST_TAKERDetailCol = 'HOST_TAKER';
	

function HOST_TAKERClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowHOST_TAKER = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(HOST_TAKERDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "1"
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"HOST_TAKER","targetNameName":"主持人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowHOST_TAKER,this.getParamsValue,'','ThreeSessionAndOneLession-HOST_TAKER',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(HOST_TAKERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#HOST_TAKER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function HOST_TAKERDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#HOST_TAKER')
	.on(' focus',function(e){
	HOST_TAKERClickFun();
	this.blur();
});

/*
$('#HOST_TAKERButton').on('click',function(e){
	HOST_TAKERClickFun();
	this.blur();
});

$('#HOST_TAKERButton').click(function(event) {
   $('#HOST_TAKER').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "MEET_ZJ"){
        return true;
    }
    if(operability){
                        var $tag = $('#MEET_ZJ1');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ2');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ3');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ4');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ5');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ6');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ7');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ8');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ9');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ10');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ11');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ12');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ13');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ14');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ15');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ16');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ17');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ18');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ19');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "MEET_ZJ"){
        return;
    }

    if(operability){
        $("#MEET_ZJ").show();
    }else{
        $("#MEET_ZJ").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "MEET_ZJ"){
        return;
    }

    if (required){
        $('input[name="MEET_ZJ"]').attr("required","required");
    }else{
        $('input[name="MEET_ZJ"]').removeAttr("required","required");
    }
});
            $('input[name="MEET_ZJ"]').on('change',function(e){
            
 var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 for (var i = 0; i < checkboxes.length; i++) {
 (function (checkbox) {
 checkbox.addEventListener('change', function () {
 var selectedValues = [];

 var checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
 for (var j = 0; j < checkBoxes.length; j++) {
 selectedValues.push(checkBoxes[j].value);


 }
 var containsDesiredValue = selectedValues.indexOf('党组织选举') !== -1 ;
 console.log('是否包含值：',containsDesiredValue);
 var spanElement = document.getElementById('aAAqdPPuXNI12T97c7AiWs6idHRKhUSb');

 if (containsDesiredValue) {
 spanElement.setAttribute('required', true);
 spanElement.setAttribute('aria-required', true);
 }else{

 spanElement.removeAttribute('required');
 spanElement.removeAttribute('aria-required');
 }
 


 });


 })(checkboxes[i]);


 }

        });
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 var anyChecked =false;

 for (var i = 0; i < checkboxes.length; i++) {
 if(checkboxes[i].checked){
 anyChecked=true;
 break;
 }
 }
 
 if (!anyChecked && checkboxes.length > 0) {
 console.log('默认选中第一个值');
 checkboxes[0].checked = true;
 }


            $('#MEET_NAME').on('click',function(e){
            var PARTY_NAME = $("#JOIN_ORG").val();
var MEET_ZJ = $("#MEET_ZJ input[type='checkbox']:checked").val();
var MEET_DATE = $("#MEET_DATE").val();
var MEET_TYPE = $("#MEET_TYPE").val();
if (MEET_TYPE == 0) {
 MEET_TYPE = '党员大会';
 } else if (MEET_TYPE == 1) {
 MEET_TYPE = '支部委员会';
 } else if (MEET_TYPE == 2) {
 MEET_TYPE = '党小组会';
 } else if (MEET_TYPE == 3) {
 MEET_TYPE = '党课';
 } else if (MEET_TYPE == 4) {
 MEET_TYPE = '纪律检查委员会';
 } else if (MEET_TYPE == 5) {
 MEET_TYPE = '党委会';
 } else if (MEET_TYPE == 6) {
 MEET_TYPE = '总支委员会';
 }
 
if(PARTY_NAME==""){
 layer.msg("请输入党支部名称");
 return;
}
if(!MEET_ZJ){
 layer.msg("请选择会议关键词"); 
 return;
 }
if(MEET_DATE==""){
layer.msg("请输入会议时间");
 return;
}
var meetZt = $("#MEET_ZJ input[type='checkbox']:checked");
MEET_ZJ = "/";
for(var i = 0;i<meetZt.length;i++){
 MEET_ZJ += meetZt.eq(i).val();
 MEET_ZJ += "/";
}

$("#MEET_NAME").val(PARTY_NAME+'/'+MEET_TYPE+MEET_ZJ+MEET_DATE);

var inpElement = document.getElementById("MEET_NAME");
inpElement.readOnly = true;
        });
        



$("#MEET_OUTLINECount").html((4000 - $('#MEET_OUTLINE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatMEET_OUTLINELength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}





	LECTURERDetailCol = 'LECTURER';
	

function LECTURERClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowLECTURER = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(LECTURERDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "1"
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"LECTURER","targetNameName":"授课人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowLECTURER,this.getParamsValue,'','ThreeSessionAndOneLession-LECTURER',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(LECTURERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#LECTURER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function LECTURERDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#LECTURER')
	.on(' focus',function(e){
	LECTURERClickFun();
	this.blur();
});

/*
$('#LECTURERButton').on('click',function(e){
	LECTURERClickFun();
	this.blur();
});

$('#LECTURERButton').click(function(event) {
   $('#LECTURER').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "HOURS_RECORD_YN"){
        return true;
    }
    if(operability){
                        var $tag = $('#HOURS_RECORD_YN1');
            $tag.removeAttr("disabled");
                                var $tag = $('#HOURS_RECORD_YN2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "HOURS_RECORD_YN"){
        return;
    }

    if(operability){
        $("#HOURS_RECORD_YN").show();
    }else{
        $("#HOURS_RECORD_YN").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "HOURS_RECORD_YN"){
        return;
    }

    if (required){
        $('input[name="HOURS_RECORD_YN"]').attr("required","required");
    }else{
        $('input[name="HOURS_RECORD_YN"]').removeAttr("required","required");
    }
});
            $('input[name="HOURS_RECORD_YN"]').on('change',function(e){
            if($(this).val() == '0'){
 	$('#LEARN_HOURS').val('');
 	$('#LEARN_HOURS').attr("disabled","disabled");

 
 }
if($(this).val() == '1' ){
 	$('#LEARN_HOURS').val('');
 	$('#LEARN_HOURS').removeAttr("disabled");

 }		
        });
        

$('#LEARN_HOURS').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#LEARN_HOURS').trigger('click');
});

$("#LEARN_HOURS").on("keyup",function(){
    if($("#LEARN_HOURS").val()>99999999999999.9){
        $("#LEARN_HOURS").val(99999999999999.9);
        layer.msg("学时最大值为\""+99999999999999.9+"\"");
    }
});


$("#MEET_RESULTCount").html((4000 - $('#MEET_RESULT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatMEET_RESULTLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}




attachBpmId =   null  ;

var fileformValue = id;


$('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
        afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'aAAqdPPuXNI12T97c7AiWs6idHRKhUSb',
    showType: 'span',
    
    //设计器参数
    saveType: 'DataBase',
    expand: true == true ? true : false,
    multiple: true == true ? true : false,
    allowDownload: true == true ? true : false,
    allowAdd: true == true ? true : false,
    allowDelete: true == true ? true : false,
    allowEncry: false == true ? true : false,
        allowSameName: false == true ? true : false,
    collapsible: true == true ? true : false,
    fileNumLimit: 10,
    fileSizeLimit: '0',
    formSecret: 'SECRET_LEVEL',
    accept:
                    ''
        });

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "aAAqdPPuXNI12T97c7AiWs6idHRKhUSb"){
        return;
    }

    if (required){
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("required","required");
   }else{
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").removeAttr("required");
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("required");
    var bpmRequire = $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "aAAqdPPuXNI12T97c7AiWs6idHRKhUSb"){
        return;
    }
    if(operability){
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").show();
    }else{
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").hide();
    }
});
    
if(!pageParams.urlParam.id){
var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
avicAjax.ajax({
		 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getPartyMemberOrganization",
		 data : {userId:userId},
		 type : 'post',
		 dataType : 'json',

		 success : function(r){
			 if (r.flag == "success"){
				if(r.PARTY_NAME){
 $("#PARTY_NAME").val(r.PARTY_NAME);
 
 
 
 }
 if(r.PARTY_ID){
 
 $("#PARTY_ID").val(r.PARTY_ID);
 
 
 }
			 }else{
				
			 } 
		 }
	 });
}




        setTimeout(function(){
            $('.attachment_div').each(function (index, element) {
                var eventDiv =  $(element).find("div[id^='rt_rt_']");
                eventDiv.css("width", "101px");
                eventDiv.css("height", "32px");
            });
        }, 1000);

        if(fkcol.length!=0 && fkvalue.length!=0){
            if ($('#'+fkcol).length>0){
                $('#'+fkcol).val(fkvalue);
            }else{
                $fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
                $('#form').append($fk);
            }
        }

        $('.date-picker').on('keydown',nullInput);
        $('.time-picker').on('keydown',nullInput);

        if(type === "tree") {
            $("#" + parentNodeId).attr("readonly", "readonly");

            if(pNodeIdValue != null && pNodeIdValue != "") {
                $("#" + parentNodeId).val(pNodeIdValue);
            }
        }

        $(".ke-container").find(".ke-toolbar").css("display","none");

        $(".ke-container").css("border","0");
        $("input[type='hidden']").remove();
        $(".input-group-addon").remove();
        $(".ui-userdata").remove();
        jQuery(".datatable").jqGrid('setGridParam',{'cellEdit':false});

        setTimeout(function() {
            if (type == "print") {
                window.print();
            }else if(type == "export"){
                getpdf();
            }
            window.close();
        }, 1500);

        $('.spinner input').trigger("blur.spinner");

    });

    function getpdf(){
        var head = $('head').html();
        var body = document.getElementById('form').innerHTML;
        opener.htmltopdf(head,body);
    }

    function afterUploadEvent(){
    }

    //附件上传失败后执行
    function uploadError(file, reason){
    }

</script>

</html>