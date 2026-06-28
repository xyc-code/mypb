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
    <input id="tableId" value="DYN_UFM_INFO_F" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
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
</div>
<c:if test="${isviewform!= 'true'}">
    <div data-options="region:'south',border:false" style="height: 60px;">
        <div id="toolbar"
             class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
            <table class="tableForm avicTable" style="border:0;cellspacing:1;width:100%">
                <tr>
                    <td width="50%" style="padding-right:4%;" align="right">

                        <a id="page_saveButton" href="javascript:void(0)" style="margin-right:10px;"
                           class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存并启动流程"
                           onclick="saveForm()">保存并启动流程</a>

                                                    
                                                    
                        
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

<!-- 流程的js -->
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>

<script src="static/js/platform/component/common/exportData.js?v=${jsversion}" ></script>
<!-- 导入功能的js -->
<script src="static/js/platform/component/common/importData.js?v=${jsversion}" ></script>
<script src="static/js/platform/eform/eformTab.js?v=${jsversion}"></script>

<script src="avicit/eformmodule/form/ufminfoflow/V1/bootstrap/bpm-layoutAdd1701048875000.js?_=1710381334674" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c5a896175160189618a328a0662";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_UFM_INFO_F";
    var type = "${type}";
    var idmap = "${idmap}";
    var entryId = "";
    var parentNodeId = "${parentNodeId}";
    var pNodeIdValue = "${pNodeIdValue}";
    var customValidate = new Map();
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