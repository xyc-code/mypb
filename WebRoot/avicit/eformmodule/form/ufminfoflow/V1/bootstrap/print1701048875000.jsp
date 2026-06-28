<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,noLoading-mask,tree";
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
   统战成员添加流程 
 </div>
 <table style="" id="mXUOmkox9DogbG6a9LXHMlYUp39EZOlb" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="UFMNAME" class=" " style=";" id="EyIJCDUojnHNf1iPUHuJqoquNtYJJs2S"> <i class="required">*</i>姓名： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="UFMNAME" name="UFMNAME" title="姓名" maxlength="18" value="<c:out  value='${map["UFMNAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="UFMNAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="EMPLOYEEID" class=" " style=";" id="rixTuNW8VSA86GdFYAPmatlR24kXCKO2"> <i class="required">*</i>员工号： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="employeeid" name="EMPLOYEEID" title="员工号" maxlength="256" value="<c:out  value='${map["EMPLOYEEID"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 47px;"> 
    <td style="width:6%; text-align: right; height: 47px;"><label for="NEMBER" class=" " style=";" id="sfJ1xOZDi0f6O1yyW2mpY76cD8ALdLEq"> <i class="required">*</i>编号： </label> </td> 
    <td style="width:19%; height: 47px;"><p> </p> 
     <div id="NEMBER" class="bpm_self_class " title="编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="NEMBER" value="<c:out  value='${map["NEMBER"]}'/>"> 
     </div><p></p></td> 
    <td style="width:6%; text-align: right; height: 47px;"><label for="$colData.get(" bindfield")" class=" " style=";" id="AFJQYoWE70LRAvQO8EqKwI5Lq47BYBzL"> <i class="required">*</i>党组织名称： </label> </td> 
    <td style="width:19%; height: 47px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="PO_NAME" name="PO_NAME" title="党组织名称" maxlength="50" value="<c:out  value='${map["PO_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="BIRTHDATE" class=" " style=";" id="yYfOXX6udugLuQCc8jfUDNAYyDpMBlZj"> <i class="required">*</i>出生年月： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="出生年月" class="form-control date-picker input-sm" style=";" required id="BIRTHDATE" name="BIRTHDATE" value="${map['BIRTHDATE']}" readonly> 
      <span id="BIRTHDATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="NATION" class=" " style=";" id="szmsWaNBW6iuV8rNBNfWh7bSEGKhCopd"> <i class="required">*</i>民族： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="NATION" name="NATION" title="民族" maxlength="50" value="<c:out  value='${map["NATION"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="DUTIES" class=" " style=";" id="vxoTVuVs7p0A69phfcwJl7vcTKvuOH0o"> <i class="required">*</i>职务： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="DUTIES" name="DUTIES" title="职务" maxlength="50" value="<c:out  value='${map["DUTIES"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="USER_TITLE" class=" " style=";" id="nC2OkO0VAZZhkf3YVbJvNr3I9NClUAiF"> <i class="required">*</i>职称： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="USER_TITLE" name="USER_TITLE" title="职称" maxlength="50" value="<c:out  value='${map["USER_TITLE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 37px;"> 
    <td style="width:6%; text-align: right; height: 37px;"><label for="PHONE_NUMBER" class=" " style=";" id="ADCoAt9JxTQon86MDDSlVFhvyYJlUZR1"> <i class="required">*</i>手机号码： </label> </td> 
    <td style="width:19%; height: 37px;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" required id="PHONE_NUMBER" name="PHONE_NUMBER" data-min="-99999999999" data-max="99999999999" data-precision="0" title="手机号码" maxlength="11" value="<c:out  value='${map["PHONE_NUMBER"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 37px;"><label for="DEPT_NAME" class=" " style=";" id="LqIzGugl3mAympRSBP9JOYY3l8Qs1kHT"> <i class="required">*</i>部门名称： </label> </td> 
    <td style="width:19%; height: 37px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="DEPT_NAME" name="DEPT_NAME" title="部门名称" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="DEPT_NAMEName" name="DEPT_NAMEName" required title="部门名称" value="<c:out  value='${map["DEPT_NAMEName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="DEPT_NAMEButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="GENDER" class=" " style=";" id="dtqYRHBntjvROzCq9QNnS4mnsEa4nfDy"> <i class="required">*</i>性别： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="GENDER" name="GENDER" title="性别" initvalue="<c:out  value='${map["GENDER"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="POLITICAL_OUTLOOK" class=" " style=";" id="lUdowXZyBl9WTs10PFiWK4jIpZfMclvM"> <i class="required">*</i>政治面貌： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="POLITICAL_OUTLOOK" name="POLITICAL_OUTLOOK" title="政治面貌" initvalue="<c:out  value='${map["POLITICAL_OUTLOOK"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="RELIGIOUS_BELIER" class=" " style=";" id="QVcaNM53mQPPBx0wFPnyEMgPreNjfs2u"> <i class="required">*</i>宗教信仰： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="RELIGIOUS_BELIER" name="RELIGIOUS_BELIER" title="宗教信仰" maxlength="50" value="<c:out  value='${map["RELIGIOUS_BELIER"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="UF_IDENTITY" class=" " style=";" id="XCZOk6XmpnpwW94LibKFObh8VNaWiC3j"> <i class="required">*</i>统战身份： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="UF_IDENTITY" title="统战身份" style="height: auto;"> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY1" name="UF_IDENTITY" title="统战身份" value="1" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '1'}">
         checked="true"</c:if> </c:forEach> /> 民主党派成员 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY2" name="UF_IDENTITY" title="统战身份" value="2" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '2'}">
         checked="true"</c:if> </c:forEach> /> 无党派人士 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY3" name="UF_IDENTITY" title="统战身份" value="3" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '3'}">
         checked="true"</c:if> </c:forEach> /> 党外知识分子 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY4" name="UF_IDENTITY" title="统战身份" value="4" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '4'}">
         checked="true"</c:if> </c:forEach> /> 信教职工 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY5" name="UF_IDENTITY" title="统战身份" value="5" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '5'}">
         checked="true"</c:if> </c:forEach> /> 出国和归国留学人员 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY6" name="UF_IDENTITY" title="统战身份" value="6" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '6'}">
         checked="true"</c:if> </c:forEach> /> 少数民族职工 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY7" name="UF_IDENTITY" title="统战身份" value="7" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '7'}">
         checked="true"</c:if> </c:forEach> /> 港澳同胞及眷属 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY8" name="UF_IDENTITY" title="统战身份" value="8" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '8'}">
         checked="true"</c:if> </c:forEach> /> 台湾同胞及其在大陆亲属 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="UF_IDENTITY9" name="UF_IDENTITY" title="统战身份" value="9" <c:forEach items="${ map['UF_IDENTITY'] }" var="s"> 
       <c:if test="${s eq '9'}">
         checked="true"</c:if> </c:forEach> /> 华侨归侨及侨眷 
       </label> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="RESIDENCE_COUNTRY" class=" " style=";" id="vXQvLoVjJPPJArtZVNOeScfhuzwsCdZY"> 居留国家： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="RESIDENCE_COUNTRY" name="RESIDENCE_COUNTRY" title="居留国家" maxlength="50" value="<c:out  value='${map["RESIDENCE_COUNTRY"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="RESIDENCE_YEAR" class=" " style=";" id="vr4v8xYCpgJ82SPoY6XPuLjcF58eLyi7"> 居留年限： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="RESIDENCE_YEAR" name="RESIDENCE_YEAR" title="居留年限" maxlength="50" value="<c:out  value='${map["RESIDENCE_YEAR"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="RESIDENCE_REASON" class=" " style=";" id="GoN0ZzhT3Mdhlab5sV9ukawZVZ1ugxH0"> 居留原因： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="RESIDENCE_REASON" name="RESIDENCE_REASON" title="居留原因" maxlength="50" value="<c:out  value='${map["RESIDENCE_REASON"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="HO_COMPATRIOTS" class=" " style=";" id="IajjnDakAGS4h9cNiYswuGGzua2Xwtre"> <i class="required">*</i>是否香港、澳门同胞： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="HO_COMPATRIOTS" name="HO_COMPATRIOTS" title="是否香港、澳门同胞" initvalue="<c:out  value='${map["HO_COMPATRIOTS"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="HO_DEPENDENTS" class=" " style=";" id="AtE5lk6WoJYIGE7ugd2DOfijWGc8haqm"> <i class="required">*</i>是否香港、澳门眷属： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="HO_DEPENDENTS" name="HO_DEPENDENTS" title="是否香港、澳门眷属" initvalue="<c:out  value='${map["HO_DEPENDENTS"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="RO_CHINESE" class=" " style=";" id="rWCsDkUhUDGRx3HyFodDV3EnNj6dgsPv"> <i class="required">*</i>是否华侨、归侨、侨眷： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="RO_CHINESE" name="RO_CHINESE" title="是否华侨、归侨、侨眷" initvalue="<c:out  value='${map["RO_CHINESE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="TAIWAN_COMPATRIOTS" class=" " style=";" id="deYLF4VWyANS9DOW5xhDuoIlbcCNHbyd"> <i class="required">*</i>是否台湾同胞： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="TAIWAN_COMPATRIOTS" name="TAIWAN_COMPATRIOTS" title="是否台湾同胞" initvalue="<c:out  value='${map["TAIWAN_COMPATRIOTS"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="TAIWAN_RELATIVES" class=" " style=";" id="H0FPhYW4X6wgFjG5gVKHikEOVRdxLdbu"> <i class="required">*</i>是否台湾同胞在大陆亲属： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="TAIWAN_RELATIVES" name="TAIWAN_RELATIVES" title="是否台湾同胞在大陆亲属" initvalue="<c:out  value='${map["TAIWAN_RELATIVES"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="HOST_COUNTRY" class=" " style=";" id="ikLbOyB3c4ysx9QIRLCh6N8HDS13QSc7"> <i class="required">*</i>(眷属)侨居国： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="HOST_COUNTRY" name="HOST_COUNTRY" title="(眷属)侨居国" maxlength="30" value="<c:out  value='${map["HOST_COUNTRY"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="PARTY_REPRE_POSITIONS" class=" " style=";" id="d6RYhBvCc3VDN7KrBvjbvVDJTMR1g49H"> <i class="required">*</i>在民主党派、人大、政协等任职情况： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="PARTY_REPRE_POSITIONS" name="PARTY_REPRE_POSITIONS" title="在民主党派、人大、政协等任职情况" maxlength="30" value="<c:out  value='${map["PARTY_REPRE_POSITIONS"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 46px;"> 
    <td style="width:6%; text-align: right; height: 46px;"><label for="FUL_EDUCATION" class=" " style=";" id="jezkRwOifNBiO52KB687L89UMOJ5G1Zb"> 全日制学历： </label> </td> 
    <td style="width:19%; height: 46px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="FUL_EDUCATION" name="FUL_EDUCATION" title="全日制学历" initvalue="<c:out  value='${map["FUL_EDUCATION"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right; height: 46px;"><label for="FUL_SPECIALITY" class=" " style=";" id="gKTVOcspyBcjaLwV3zhnt2wdz03CSRiI"> 全日制专业： </label> </td> 
    <td style="width:19%; height: 46px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="FUL_SPECIALITY" name="FUL_SPECIALITY" title="全日制专业" maxlength="50" value="<c:out  value='${map["FUL_SPECIALITY"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="FUL_GRADUATION" class=" " style=";" id="lvy5Fxm0KcyVD88efadfLIPiWdAGoKgp"> 全日制毕业学校： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="FUL_GRADUATION" name="FUL_GRADUATION" title="全日制毕业学校" maxlength="50" value="<c:out  value='${map["FUL_GRADUATION"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="PART_EDUCATION" class=" " style=";" id="gM7zU4h4JrJrKPFqSLXHb4w0s5zvS6Uw"> 非全日制学历： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="PART_EDUCATION" name="PART_EDUCATION" title="非全日制学历" initvalue="<c:out  value='${map["PART_EDUCATION"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="PART_SPECIALITY" class=" " style=";" id="zoiHldkbONEJZ9ORHYfuIfuyamkCgYZK"> 非全日制专业： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="PART_SPECIALITY" name="PART_SPECIALITY" title="非全日制专业" maxlength="50" value="<c:out  value='${map["PART_SPECIALITY"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="PART_GRADUATION" class=" " style=";" id="MF84TnYmJ2uXjiHkwhJMqjIfh66YT6bn"> 非全日制毕业学校： </label> </td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="PART_GRADUATION" name="PART_GRADUATION" title="非全日制毕业学校" maxlength="50" value="<c:out  value='${map["PART_GRADUATION"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"></td> 
    <td style="width:19%; height: 30px;"></td> 
    <td style="width:6%; text-align: right; height: 30px;"></td> 
    <td style="width:19%; height: 30px;"></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"></td> 
    <td style="width:19%; height: 30px;"></td> 
    <td style="width:6%; text-align: right; height: 30px;"></td> 
    <td style="width:19%; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="DATA_6" name="DATA_6" title="党组织ID" maxlength="50" value="<c:out  value='${map["DATA_6"]}'/>"> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p></p>
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
<script src="avicit/platform6/autocode/js/AutoCode.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.js?v=${jsversion}"></script>
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
    var formInfoId = "2c908c5a896175160189618a328a0662";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_UFM_INFO_F";
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

        



	UFMNAMEDetailCol = 'UFMNAME';
	

function UFMNAMEClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionarySelect",
	    	area: ['800px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowUFMNAME = function(mapping,rowData){
					

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

						if(UFMNAMEDetailCol == mapVer.targetName){
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

                iframeWin.initGrid(                "0"
                , "20","select su.name,de.dept_id,su.no from sys_user su left join sys_user_dept_position de ON su.id = de.user_id where su.TYPE='0' and su.STATUS='1' and su.LOGIN_NAME NOT IN (select EMPLOYEEID from dyn_ufm_info ) ",'[{"label":"员工号","width":"50","align":"center","orderBy":"","name":"NO"},{"label":"部门","width":"50","align":"center","orderBy":"","name":"DEPT_IDName"},{"label":"部门","width":"50","hidden":true,"align":"center","orderBy":"","name":"DEPT_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"","name":"NAME"}]','[{"name":"NO","targetName":"employeeid","targetNameName":"员工号","display":"员工号","transform":"","lookupType":"","filter":false},{"name":"DEPT_IDName","targetName":"DEPT_NAMEName","targetNameName":"部门名称","display":"部门","transform":"3","lookupType":"","filter":false},{"name":"DEPT_ID","targetName":"DEPT_NAME","targetNameName":"部门名称(值)","display":"部门","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"UFMNAME","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowUFMNAME,this.getParamsValue,'','ufminfoflow-UFMNAME',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
							var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
				var selectIds = dicJqGrid.jqGrid('getGridParam','selrow');
				if(selectIds != null && selectIds.length > 0){
					//var selectId = selectIds[0];
					rowData = dicJqGrid.jqGrid("getRowData",selectIds);
					selectRows.push(rowData);

					
					//回填表单数据
					for(var i=0; i< iframeWin.mapping.length; i++){
						var mapVer = iframeWin.mapping[i];

			            var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
				        if(hashInputCalss){
							$("#"+mapVer.targetName).val(eval("rowData."+ mapVer.name));
			            }else{
							$("#"+mapVer.targetName).find("input").val(eval("rowData."+ mapVer.name));
						}

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == eval("rowData."+ mapVer.name)){
									$(this).prop('checked',true);
								}
							});
						}
						$("#"+mapVer.targetName).blur();

						if(UFMNAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#UFMNAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function UFMNAMEDetail(id){
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


			$('#UFMNAME')
	.on(' focus',function(e){
	UFMNAMEClickFun();
	this.blur();
});

/*
$('#UFMNAMEButton').on('click',function(e){
	UFMNAMEClickFun();
	this.blur();
});

$('#UFMNAMEButton').click(function(event) {
   $('#UFMNAME').trigger('focus');
});*/




            $('#employeeid').on('blur',function(e){
            
var code=$('#employeeid').val();
$.ajax({
			 url:"avicit/pb/member/dynUfmInfo/dynUfmInfoController/operation/checkCode?code="+code,
			 dataType:"json",
			 type:"POST",
			 success: function (r) {
 if(r.flag=="failure"){
 layer.alert('员工号已经存在', {
 icon: 7,
 area: ['400px', ''], //宽高
 closeBtn: 0,
 btn: ['关闭'],
 title:"提示"
 }); 	
 $('#employeeid').val("");		
 } 
			 }
			})


        });
        

$("#NEMBER").attr("initvalue",$("input[name='NEMBER']",window.pageParams.content||document).val());
if ($("input[name='NEMBER']",window.pageParams.content||document).val()==''||$("input[name='NEMBER']",window.pageParams.content||document).val()==null||$("input[name='NEMBER']",window.pageParams.content||document).val()==undefined ){

window.NEMBERautocode = new AutoCode('UFM_INFO_CODE',"NEMBER",false,"NEMBER",undefined
	,function(){$("#NEMBER").find("input").attr("style","");}

);


}else{
	$("#NEMBER").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='NEMBER']",window.pageParams.content||document).val();
		var flag = $("input[name='NEMBER']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#NEMBER").attr("initvalue");
		var valuePure = $("#NEMBER").find("#autoCode").val();
		if (flag != "disabled" && window.NEMBERautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=NEMBER',
					type: 'POST',
					async:false,
					data: {
						autoCode: "UFM_INFO_CODE",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=NEMBER',
								type: 'POST',
								async:false,
								data: {
									autoCode: "UFM_INFO_CODE",
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
										formData["NEMBER"] = result.value;
										$("input[name='NEMBER']",window.pageParams.content||document).val(result.value);
										$("#NEMBER").attr("initvalue",result.value);
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
				delete formData["NEMBER"];
				$("input[name='NEMBER']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='NEMBER']",window.pageParams.content||document).val();
		var require = $("#NEMBER").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "NEMBER"){
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
	if (tagId != "NEMBER"){
		return;
	}
	if(operability){
		$("#NEMBER").show();
	}else{
		$("#NEMBER").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "NEMBER"){
		return;
	}
	if (required){
		$("#NEMBER").attr("required","required");
	}
});



            $('#PO_NAME').on('click',function(e){
            
				var selectIndex = layer.open({
			 type: 2,
			 area: ['50%', '50%'],
			 title: '选择父节点',
			 skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
			 maxmin: false, //开启最大化最小化按钮
			 content: 'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
			 btn: ['确定', '取消'],
			 yes: function(index, layero){
			 	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
			 	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
			 	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
			 	var selectedNewNode = iframeWin.getSelectedNode();
 var Fathaertext=""; 
 $.ajax({
 url:'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/getTree/3',
 type:"POST",
 async:false, 
 dataType:"JSON",
 success:function(r){
 r = r[0];
 for(var i=0;i<r.children.length;i++){
 var dto = r.children[i]
 if(selectedNewNode.id == dto.id){
 Fathaertext = r.text;
 }
 for(var j =0;j<dto.children.length;j++){
 var dtoChildren = dto.children[j];
 if(selectedNewNode.id == dtoChildren.id){
 Fathaertext = dto.text;
 }
 }
 }
 
 }
 
 })
			 	if (selectedNewNode.attributes.partyCode == '1') {
					
								layer.alert('所选择节点不能是根节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
					
							return;
						}
						/*var curNodeId = selectedNodes[0].id;
						if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
							layer.alert('所选择父节点不合法，请重新选择！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});
							return;
						}
						if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
							if (selectedNewNode.id == curNodeId) {
								layer.alert('所选择父节点不能是本节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							} else {
								layer.alert('所选择父节点不能是本节点的子节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							}
							return;
						}
						$("#poname").val(selectedNewNode.id);
 */
 
 $("#DATA_6").val(selectedNewNode.attributes.partyCode);
						$("#PO_NAME").val(Fathaertext+"--"+selectedNewNode.text);
 
 
						layer.close(layer.index);
						layer.close(selectIndex);
			 },
					btn2: function(index, layero){
					 layer.close(index);
					}
			 });
			
				this.blur();
				nullInput(e);
        });
        



            $('#BIRTHDATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#BIRTHDATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#BIRTHDATE').datepicker('show');
			 $('#BIRTHDATE').datepicker().trigger('click');
					
		});
            
$(document).ready(function(){
 
 $('#BIRTHDATE').on('click',function(){
 var datese = $('.ui-datepicker-year option:eq(0)').text()
 for(var i =0;i<=50;i++){
 var numberdate = parseInt(datese)-i;
 $('.ui-datepicker-year').prepend('<option value="'+numberdate+'">'+numberdate+'</option>');
 
 }
 
 
 })
 
 })









$('#PHONE_NUMBER').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PHONE_NUMBER').trigger('click');
});

$("#PHONE_NUMBER").on("keyup",function(){
    if($("#PHONE_NUMBER").val()>99999999999){
        $("#PHONE_NUMBER").val(99999999999);
        layer.msg("手机号码最大值为\""+99999999999+"\"");
    }
});





$('#DEPT_NAMEName').on(' focus',function(e){
    DEPT_NAMEClickFun();
    $(this).blur();
});

function DEPT_NAMEClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_NAME',textFiled:'DEPT_NAMEName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}









$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_SEX"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#GENDER').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["GENDER"] != null && pageParams.formData["GENDER"] != ''){    $('#GENDER').val(pageParams.formData["GENDER"]);}else if($('#GENDER').attr("initValue")!=undefined&&$.trim($('#GENDER').attr("initValue"))!=''){    $('#GENDER').val($('#GENDER').attr("initValue"));    pageParams.formData["GENDER"] = $('#GENDER').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_POLITICAL"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#POLITICAL_OUTLOOK').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["POLITICAL_OUTLOOK"] != null && pageParams.formData["POLITICAL_OUTLOOK"] != ''){    $('#POLITICAL_OUTLOOK').val(pageParams.formData["POLITICAL_OUTLOOK"]);}else if($('#POLITICAL_OUTLOOK').attr("initValue")!=undefined&&$.trim($('#POLITICAL_OUTLOOK').attr("initValue"))!=''){    $('#POLITICAL_OUTLOOK').val($('#POLITICAL_OUTLOOK').attr("initValue"));    pageParams.formData["POLITICAL_OUTLOOK"] = $('#POLITICAL_OUTLOOK').attr("initValue");}else{    }}});



//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "UF_IDENTITY"){
        return true;
    }
    if(operability){
                        var $tag = $('#UF_IDENTITY1');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY2');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY3');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY4');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY5');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY6');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY7');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY8');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY9');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "UF_IDENTITY"){
        return;
    }

    if(operability){
        $("#UF_IDENTITY").show();
    }else{
        $("#UF_IDENTITY").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "UF_IDENTITY"){
        return;
    }

    if (required){
        $('input[name="UF_IDENTITY"]').attr("required","required");
    }else{
        $('input[name="UF_IDENTITY"]').removeAttr("required","required");
    }
});








$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#HO_COMPATRIOTS').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["HO_COMPATRIOTS"] != null && pageParams.formData["HO_COMPATRIOTS"] != ''){    $('#HO_COMPATRIOTS').val(pageParams.formData["HO_COMPATRIOTS"]);}else if($('#HO_COMPATRIOTS').attr("initValue")!=undefined&&$.trim($('#HO_COMPATRIOTS').attr("initValue"))!=''){    $('#HO_COMPATRIOTS').val($('#HO_COMPATRIOTS').attr("initValue"));    pageParams.formData["HO_COMPATRIOTS"] = $('#HO_COMPATRIOTS').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#HO_DEPENDENTS').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["HO_DEPENDENTS"] != null && pageParams.formData["HO_DEPENDENTS"] != ''){    $('#HO_DEPENDENTS').val(pageParams.formData["HO_DEPENDENTS"]);}else if($('#HO_DEPENDENTS').attr("initValue")!=undefined&&$.trim($('#HO_DEPENDENTS').attr("initValue"))!=''){    $('#HO_DEPENDENTS').val($('#HO_DEPENDENTS').attr("initValue"));    pageParams.formData["HO_DEPENDENTS"] = $('#HO_DEPENDENTS').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#RO_CHINESE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["RO_CHINESE"] != null && pageParams.formData["RO_CHINESE"] != ''){    $('#RO_CHINESE').val(pageParams.formData["RO_CHINESE"]);}else if($('#RO_CHINESE').attr("initValue")!=undefined&&$.trim($('#RO_CHINESE').attr("initValue"))!=''){    $('#RO_CHINESE').val($('#RO_CHINESE').attr("initValue"));    pageParams.formData["RO_CHINESE"] = $('#RO_CHINESE').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#TAIWAN_COMPATRIOTS').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["TAIWAN_COMPATRIOTS"] != null && pageParams.formData["TAIWAN_COMPATRIOTS"] != ''){    $('#TAIWAN_COMPATRIOTS').val(pageParams.formData["TAIWAN_COMPATRIOTS"]);}else if($('#TAIWAN_COMPATRIOTS').attr("initValue")!=undefined&&$.trim($('#TAIWAN_COMPATRIOTS').attr("initValue"))!=''){    $('#TAIWAN_COMPATRIOTS').val($('#TAIWAN_COMPATRIOTS').attr("initValue"));    pageParams.formData["TAIWAN_COMPATRIOTS"] = $('#TAIWAN_COMPATRIOTS').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#TAIWAN_RELATIVES').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["TAIWAN_RELATIVES"] != null && pageParams.formData["TAIWAN_RELATIVES"] != ''){    $('#TAIWAN_RELATIVES').val(pageParams.formData["TAIWAN_RELATIVES"]);}else if($('#TAIWAN_RELATIVES').attr("initValue")!=undefined&&$.trim($('#TAIWAN_RELATIVES').attr("initValue"))!=''){    $('#TAIWAN_RELATIVES').val($('#TAIWAN_RELATIVES').attr("initValue"));    pageParams.formData["TAIWAN_RELATIVES"] = $('#TAIWAN_RELATIVES').attr("initValue");}else{    }}});





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_DEGREE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#FUL_EDUCATION').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["FUL_EDUCATION"] != null && pageParams.formData["FUL_EDUCATION"] != ''){    $('#FUL_EDUCATION').val(pageParams.formData["FUL_EDUCATION"]);}else if($('#FUL_EDUCATION').attr("initValue")!=undefined&&$.trim($('#FUL_EDUCATION').attr("initValue"))!=''){    $('#FUL_EDUCATION').val($('#FUL_EDUCATION').attr("initValue"));    pageParams.formData["FUL_EDUCATION"] = $('#FUL_EDUCATION').attr("initValue");}else{    }}});





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_DEGREE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PART_EDUCATION').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PART_EDUCATION"] != null && pageParams.formData["PART_EDUCATION"] != ''){    $('#PART_EDUCATION').val(pageParams.formData["PART_EDUCATION"]);}else if($('#PART_EDUCATION').attr("initValue")!=undefined&&$.trim($('#PART_EDUCATION').attr("initValue"))!=''){    $('#PART_EDUCATION').val($('#PART_EDUCATION').attr("initValue"));    pageParams.formData["PART_EDUCATION"] = $('#PART_EDUCATION').attr("initValue");}else{    }}});



    



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