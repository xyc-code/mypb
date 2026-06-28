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
    <input id="tableId" value="DYN_DATA_DISPLAY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   数据大屏 
 </div>
 <table style="" id="LKRbjku5hJWkVkH55kieoRuOdqTzZlBS" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_5" class=" " style=";" id="j1nMbzwB4GtU3BHrlxMr4rFDLcTvQve0"> 干部人才总人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_5" name="DATA_5" title="干部人才总人数" maxlength="50" value="<c:out  value='${map["DATA_5"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_6" class=" " style=";" id="TWBt5uaNA97CpxcSyqltMJXS2hrLfDCq"> 干部在岗总数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_6" name="DATA_6" title="干部在岗总数" maxlength="50" value="<c:out  value='${map["DATA_6"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_7" class=" " style=";" id="lM1PHiZYOy69MfVoMTnTzufZOqip5HWT"> 在岗员工总数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_7" name="DATA_7" title="在岗员工总数" maxlength="50" value="<c:out  value='${map["DATA_7"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_8" class=" " style=";" id="oNcaOz2pKzIY4CfCmUxgmtvucvIt3awg"> 技术人员总数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_8" name="DATA_8" title="技术人员总数" maxlength="50" value="<c:out  value='${map["DATA_8"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_9" class=" " style=";" id="LvSTY2ef7V6Ue43cL39nmD9jGxIt5QAb"> 管理人员总数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_9" name="DATA_9" title="管理人员总数" maxlength="50" value="<c:out  value='${map["DATA_9"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_10" class=" " style=";" id="Q3jCn8o49VWckUxx208oZEuDs9Ns6dWs"> 技能人员总数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_10" name="DATA_10" title="技能人员总数" maxlength="50" value="<c:out  value='${map["DATA_10"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_1" class=" " style=";" id="oHuD5U2uP09Sozfv1c0FW7KHYXk2OQex"> 党组织选举到期换届： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_1" name="DATA_1" title="党组织选举到期换届" maxlength="50" value="<c:out  value='${map["DATA_1"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_2" class=" " style=";" id="nwTPDQgFv6k0BWrH9mioenuRxYyDlOb3"> 党组织选举到期换届已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_2" name="DATA_2" title="党组织选举到期换届已完成" maxlength="50" value="<c:out  value='${map["DATA_2"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_3" class=" " style=";" id="qVbikcBUDEDQsAbl08sWMfUU1zfj0XDA"> 党组织选举到期换届进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_3" name="DATA_3" title="党组织选举到期换届进行中" maxlength="50" value="<c:out  value='${map["DATA_3"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_4" class=" " style=";" id="H0bosBBhk2yPIY5PCpln13rf5RO3m58s"> 党组织选举到期换届未到期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_4" name="DATA_4" title="党组织选举到期换届未到期" maxlength="50" value="<c:out  value='${map["DATA_4"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_11" class=" " style=";" id="T2BvObnyBCgkTsM2JjlhXrhTERPmh5jN"> 党组织设置党委？？？？： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_11" name="DATA_11" title="党组织设置党委？？？？" maxlength="50" value="<c:out  value='${map["DATA_11"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_28" class=" " style=";" id="lJELbAAmC96RPYadiJsCA8vjZ2DFvTGn"> 重点监督项数已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_28" name="DATA_28" title="重点监督项数已完成" maxlength="50" value="<c:out  value='${map["DATA_28"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_29" class=" " style=";" id="QQC1SAFVvMh0ZGtr45Hgz24zpaydU1k8"> 重点监督项数进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_29" name="DATA_29" title="重点监督项数进行中" maxlength="50" value="<c:out  value='${map["DATA_29"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_12" class=" " style=";" id="j7IxBGo1yuypYALPPIcbnfDoDvl9PExC"> 党组织设置党总支部： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_12" name="DATA_12" title="党组织设置党总支部" maxlength="50" value="<c:out  value='${map["DATA_12"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_13" class=" " style=";" id="LsafXtgUKLKFH9UEbLrUMTHP6h444YZo"> 党组织设置直属党支部： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_13" name="DATA_13" title="党组织设置直属党支部" maxlength="50" value="<c:out  value='${map["DATA_13"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_14" class=" " style=";" id="qCA4X72KedrTRTNHTveGAcyKvCj26DtC"> 党组织设置下属党支部？？？？： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_14" name="DATA_14" title="党组织设置下属党支部？？？？" maxlength="50" value="<c:out  value='${map["DATA_14"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_15" class=" " style=";" id="YxAMuqRFnhG7j0oHo1bI421OpqyB5FRo"> 党员队伍发展党员人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_15" name="DATA_15" title="党员队伍发展党员人数" maxlength="50" value="<c:out  value='${map["DATA_15"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_16" class=" " style=";" id="PmXY5F09YI0OX0IeV6zTKGQp36Kk1afT"> 党员队伍新发展党员35岁以下： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_16" name="DATA_16" title="党员队伍新发展党员35岁以下" maxlength="50" value="<c:out  value='${map["DATA_16"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_17" class=" " style=";" id="tZHf17mRCL2tGtIUCmeNu8fL9kZj88ag"> 党员队伍新发展女党员： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_17" name="DATA_17" title="党员队伍新发展女党员" maxlength="50" value="<c:out  value='${map["DATA_17"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_18" class=" " style=";" id="DZuy6z0kx8KaX8zJJ7CGhIX5KhhsL85O"> 党员队伍新发展大专以上党历： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_18" name="DATA_18" title="党员队伍新发展大专以上党历" maxlength="50" value="<c:out  value='${map["DATA_18"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_19" class=" " style=";" id="o7NY8qsdjSR6RjaGqttt6ZMAaVKafDSJ"> 公司巡视整改巡视整改措施数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_19" name="DATA_19" title="公司巡视整改巡视整改措施数" maxlength="50" value="<c:out  value='${map["DATA_19"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_20" class=" " style=";" id="wAKqL35b5YdEcHgrcFmAnEpDSKdjQWSm"> 巡视整改措施数已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_20" name="DATA_20" title="巡视整改措施数已完成" maxlength="50" value="<c:out  value='${map["DATA_20"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_21" class=" " style=";" id="AvDn4GsTMu9bC1vjolTnFGA5ve4bXETM"> 巡视整改措施数进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_21" name="DATA_21" title="巡视整改措施数进行中" maxlength="50" value="<c:out  value='${map["DATA_21"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_22" class=" " style=";" id="Xiq6ALVdDwkGtJSY2kZVBsME4m1jpsRC"> 巡视整改措施数超期未完： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_22" name="DATA_22" title="巡视整改措施数超期未完" maxlength="50" value="<c:out  value='${map["DATA_22"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_23" class=" " style=";" id="xPjnaqazu610aPC5lZVVlewPLwP1z0tR"> 被巡察单位巡察整改整改措施数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_23" name="DATA_23" title="被巡察单位巡察整改整改措施数" maxlength="50" value="<c:out  value='${map["DATA_23"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_24" class=" " style=";" id="zLWtjlhkvtf0HGVHEBA4GYqnYoWHXHHH"> 被巡察单位巡察整改整改措施数已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_24" name="DATA_24" title="被巡察单位巡察整改整改措施数已完成" maxlength="50" value="<c:out  value='${map["DATA_24"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_25" class=" " style=";" id="sjnMdUttMJlgHYAqxXJLNp5qXuxslv3Z"> 被巡察单位巡察整改整改措施数进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_25" name="DATA_25" title="被巡察单位巡察整改整改措施数进行中" maxlength="50" value="<c:out  value='${map["DATA_25"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_26" class=" " style=";" id="y3CiNsbCI8SyN3OaIFFisse5MntZGVLR"> 被巡察单位巡察整改整改措施数超期未完： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_26" name="DATA_26" title="被巡察单位巡察整改整改措施数超期未完" maxlength="50" value="<c:out  value='${map["DATA_26"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_27" class=" " style=";" id="vBenNClYAUxYTc6mwA3tzgV938iECPxu"> 重点监督工作重点监督项数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_27" name="DATA_27" title="重点监督工作重点监督项数" maxlength="50" value="<c:out  value='${map["DATA_27"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_30" class=" " style=";" id="U5F9isYB1W25ssDOxfHq0mlYvY2aHii4"> 重点监督项数超期未完： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_30" name="DATA_30" title="重点监督项数超期未完" maxlength="50" value="<c:out  value='${map["DATA_30"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_31" class=" " style=";" id="gtbfDYhs1eYwb8u3J0QDFEiv3cWIKot6"> 廉洁文化建设工作廉洁文化建设项数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_31" name="DATA_31" title="廉洁文化建设工作廉洁文化建设项数量" maxlength="50" value="<c:out  value='${map["DATA_31"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_32" class=" " style=";" id="k5fCjxr3Cbb5Mbe2mANHS1Dj8MDiPAKY"> 廉洁文化建设工作廉洁文化建设项数量已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_32" name="DATA_32" title="廉洁文化建设工作廉洁文化建设项数量已完成" maxlength="50" value="<c:out  value='${map["DATA_32"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_33" class=" " style=";" id="TAZp9SQUkyb2oBot8x9exEZRVW9GF72C"> 廉洁文化建设工作廉洁文化建设项数量进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_33" name="DATA_33" title="廉洁文化建设工作廉洁文化建设项数量进行中" maxlength="50" value="<c:out  value='${map["DATA_33"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_34" class=" " style=";" id="Nw9iAqpG1bwBX5y6QGDBn4yQNWYvocly"> 廉洁文化建设工作廉洁文化建设项数量超期未完： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_34" name="DATA_34" title="廉洁文化建设工作廉洁文化建设项数量超期未完" maxlength="50" value="<c:out  value='${map["DATA_34"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_35" class=" " style=";" id="e6EuyWRK5d8K7ZUngnqDI4hKcaXAg4Om"> 劳模创新工作室国家级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_35" name="DATA_35" title="劳模创新工作室国家级" maxlength="50" value="<c:out  value='${map["DATA_35"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_36" class=" " style=";" id="TW0UlaCsoiUzV6t9uHAEmlrcuMfMpcNm"> 劳模创新工作室省部级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_36" name="DATA_36" title="劳模创新工作室省部级" maxlength="50" value="<c:out  value='${map["DATA_36"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_37" class=" " style=";" id="nImDF2ID2mkrfFv3WgUGAiNnBRq9gKeU"> 劳模创新工作室地市级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_37" name="DATA_37" title="劳模创新工作室地市级" maxlength="50" value="<c:out  value='${map["DATA_37"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_38" class=" " style=";" id="BwTHyxQmjOK33KbZX0O7UYsgl7z4flK0"> 劳模创新工作室工作室人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_38" name="DATA_38" title="劳模创新工作室工作室人数" maxlength="50" value="<c:out  value='${map["DATA_38"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_39" class=" " style=";" id="JExpzNsqjewXKhcT5f48S5SlfQSE2pCG"> 劳模信息国家级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_39" name="DATA_39" title="劳模信息国家级" maxlength="50" value="<c:out  value='${map["DATA_39"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_40" class=" " style=";" id="jggj1CwN6pU3TwoWL1mz8wivEy6u1Mf5"> 劳模信息省部级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_40" name="DATA_40" title="劳模信息省部级" maxlength="50" value="<c:out  value='${map["DATA_40"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_41" class=" " style=";" id="IcSYHTJBsJTE1jXlF5xk8bC0eaVezueT"> 劳模信息地市级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_41" name="DATA_41" title="劳模信息地市级" maxlength="50" value="<c:out  value='${map["DATA_41"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_42" class=" " style=";" id="X4ShZWcVCRMWIYz9vFTiGP5k6mX6o0BV"> 劳模信息公司级： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_42" name="DATA_42" title="劳模信息公司级" maxlength="50" value="<c:out  value='${map["DATA_42"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_43" class=" " style=";" id="m694dkpuoTRm7oSVGWVNuu6OAMCYKBYv"> 会员队伍建设会员人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_43" name="DATA_43" title="会员队伍建设会员人数" maxlength="50" value="<c:out  value='${map["DATA_43"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_44" class=" " style=";" id="dpah6MxItQ3avncwJ5mmIrXdQAASwCkZ"> 会员队伍建设男性人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_44" name="DATA_44" title="会员队伍建设男性人数" maxlength="50" value="<c:out  value='${map["DATA_44"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_45" class=" " style=";" id="YgcmQxyuGiRWblruMY4mxwBpIAwR1bSE"> 会员队伍建设女性人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_45" name="DATA_45" title="会员队伍建设女性人数" maxlength="50" value="<c:out  value='${map["DATA_45"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_46" class=" " style=";" id="qytW53Ph9n2XLk20ohlSjrHv9HqZbYbL"> 会员队伍建设大专以上学历： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_46" name="DATA_46" title="会员队伍建设大专以上学历" maxlength="50" value="<c:out  value='${map["DATA_46"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_47" class=" " style=";" id="SidMUJw5qYHXXxvMjdCtui1LoQC5929B"> 工会组织设置工会分会： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_47" name="DATA_47" title="工会组织设置工会分会" maxlength="50" value="<c:out  value='${map["DATA_47"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_48" class=" " style=";" id="CqD6FtXpFQYGi3FpceGcC7safwsuC2s4"> 工会组织设置工会支会： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_48" name="DATA_48" title="工会组织设置工会支会" maxlength="50" value="<c:out  value='${map["DATA_48"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_49" class=" " style=";" id="uURkKNAbGVSDuPPJlZJNokOZ6Pbodwzy"> 工会组织设置工会小组： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_49" name="DATA_49" title="工会组织设置工会小组" maxlength="50" value="<c:out  value='${map["DATA_49"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_50" class=" " style=";" id="zpry4mFDYFykXeKhr2IK9KSbI3lyqIQW"> 习近平指示批示计划： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_50" name="DATA_50" title="习近平指示批示计划" maxlength="50" value="<c:out  value='${map["DATA_50"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_51" class=" " style=";" id="nXTgX6o2yGKQRIttgRAJ2SNY5waVBShz"> 习近平指示批示已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_51" name="DATA_51" title="习近平指示批示已完成" maxlength="50" value="<c:out  value='${map["DATA_51"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_52" class=" " style=";" id="eRKRU4B2gWwFtca9bv2JzzKBAMlVKuL0"> 习近平指示批示进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_52" name="DATA_52" title="习近平指示批示进行中" maxlength="50" value="<c:out  value='${map["DATA_52"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_53" class=" " style=";" id="wzqhrPx1LyufgnMonhoh24QK3iHRsA45"> 党的二十大精神计划： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_53" name="DATA_53" title="党的二十大精神计划" maxlength="50" value="<c:out  value='${map["DATA_53"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_54" class=" " style=";" id="rUXwIDTm02nWlXJvvUPbiX8QMxCyTaWQ"> 党的二十大精神进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_54" name="DATA_54" title="党的二十大精神进行中" maxlength="50" value="<c:out  value='${map["DATA_54"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_55" class=" " style=";" id="TG0NGKf8jsHu7v55PS7c6Nxz8Hqv3JnQ"> 党的二十大精神已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_55" name="DATA_55" title="党的二十大精神已完成" maxlength="50" value="<c:out  value='${map["DATA_55"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_56" class=" " style=";" id="CkAZT9HuyCJLyWoBOXkKKo6xdRJvvRhv"> 年度质量视频数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_56" name="DATA_56" title="年度质量视频数" maxlength="50" value="<c:out  value='${map["DATA_56"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_57" class=" " style=";" id="uZXIwUCjlwr7AFf4IRwQliIvb6t2ixlF"> 年度先进人物视频数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_57" name="DATA_57" title="年度先进人物视频数" maxlength="50" value="<c:out  value='${map["DATA_57"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_58" class=" " style=";" id="yIqI2Phv9UVIFeb2LH7sIqiX07A6fFyi"> 年度视频数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_58" name="DATA_58" title="年度视频数" maxlength="50" value="<c:out  value='${map["DATA_58"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_59" class=" " style=";" id="fZR9g3RXhm8zexi2hAoSBeY1FpbYL0De"> 年度党建视频数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_59" name="DATA_59" title="年度党建视频数" maxlength="50" value="<c:out  value='${map["DATA_59"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_60" class=" " style=";" id="atdM32WyU3T0JL06qUPBTTBBnBXlKYLu"> 中心组学习： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_60" name="DATA_60" title="中心组学习" maxlength="50" value="<c:out  value='${map["DATA_60"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_61" class=" " style=";" id="NNq5kC9M7KOSoiAFhDnGeL0BkehniyU6"> 新闻宣传发稿数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_61" name="DATA_61" title="新闻宣传发稿数" maxlength="50" value="<c:out  value='${map["DATA_61"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_62" class=" " style=";" id="lP6TLGzzZOQv9vq7e4TbC1bSSfxgXoar"> 统战成员人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_62" name="DATA_62" title="统战成员人数" maxlength="50" value="<c:out  value='${map["DATA_62"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_63" class=" " style=";" id="ybM8rhRuuVscFz00roIU3Wc2uOrdBwJS"> 文化载体数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_63" name="DATA_63" title="文化载体数" maxlength="50" value="<c:out  value='${map["DATA_63"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_78" class=" " style=";" id="hj1TUuGm7x20cBbO54T4rPAmBRMpqoIZ"> 青年创新大赛项目评选集团十强项目： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_78" name="DATA_78" title="青年创新大赛项目评选集团十强项目" maxlength="50" value="<c:out  value='${map["DATA_78"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_79" class=" " style=";" id="l5wUmBVnr9DDwYbQqZHcXRTGgMwsCljS"> 青年创新大赛项目评选集团三十强项目： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_79" name="DATA_79" title="青年创新大赛项目评选集团三十强项目" maxlength="50" value="<c:out  value='${map["DATA_79"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_80" class=" " style=";" id="T8p93T95oMDzv2IF8QOWwcxwni2TNjAQ"> 青年创新大赛项目评选集团百强项目： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_80" name="DATA_80" title="青年创新大赛项目评选集团百强项目" maxlength="50" value="<c:out  value='${map["DATA_80"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_81" class=" " style=";" id="aeRu1qWWoojzwdaPQ2mxwHSC9hN0CfLc"> 能手申报技术创新类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_81" name="DATA_81" title="能手申报技术创新类" maxlength="50" value="<c:out  value='${map["DATA_81"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_82" class=" " style=";" id="Ox5b382XqhSI0TUOkG1aqj0hFn2k0sOR"> 能手申报生产岗位类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_82" name="DATA_82" title="能手申报生产岗位类" maxlength="50" value="<c:out  value='${map["DATA_82"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_83" class=" " style=";" id="sAaUWnmD7L0WgvR33To01sd6ajS1A2Hh"> 能手申报管理服务类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_83" name="DATA_83" title="能手申报管理服务类" maxlength="50" value="<c:out  value='${map["DATA_83"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_84" class=" " style=";" id="FdG3XrzTOQLDU0aNwxU7QmuIiCDWza9G"> 能手评选技术创新类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_84" name="DATA_84" title="能手评选技术创新类" maxlength="50" value="<c:out  value='${map["DATA_84"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_64" class=" " style=";" id="ul4McycvPLhGelhL32u5FGcn89gcdb6B"> 党组织选举到期换届： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_64" name="DATA_64" title="党组织选举到期换届" maxlength="50" value="<c:out  value='${map["DATA_64"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_65" class=" " style=";" id="aKxlxzJV4tz1JtnboZ2G2t8tUVBIECAJ"> 党组织选举已完成： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_65" name="DATA_65" title="党组织选举已完成" maxlength="50" value="<c:out  value='${map["DATA_65"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_66" class=" " style=";" id="c9d1fEl9BB8cif6ygDs3AYpRprThG499"> 党组织选举进行中： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_66" name="DATA_66" title="党组织选举进行中" maxlength="50" value="<c:out  value='${map["DATA_66"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_67" class=" " style=";" id="IH4AjeuxwpwoEnK0xdXhfZ7ryUrDZF8C"> 党组织选举未到期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_67" name="DATA_67" title="党组织选举未到期" maxlength="50" value="<c:out  value='${map["DATA_67"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_68" class=" " style=";" id="pk6t1T6bFmSxxCnJ15vZCMCGzdpRHOWY"> 党组织设置党委： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_68" name="DATA_68" title="党组织设置党委" maxlength="50" value="<c:out  value='${map["DATA_68"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_69" class=" " style=";" id="ZhiSqfQOi084Nu48otFsctPytHgCGezz"> 党组织设置党总支部： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_69" name="DATA_69" title="党组织设置党总支部" maxlength="50" value="<c:out  value='${map["DATA_69"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_70" class=" " style=";" id="DPikxsRem9FZlW35O4Ofnb4cBbfjKOBM"> 党组织设置直属党支部： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_70" name="DATA_70" title="党组织设置直属党支部" maxlength="50" value="<c:out  value='${map["DATA_70"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_71" class=" " style=";" id="hwXm6OuQ5Snh0kbg7ZoUHoXAnFlLQ21g"> 党员队伍发展党员人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_71" name="DATA_71" title="党员队伍发展党员人数" maxlength="50" value="<c:out  value='${map["DATA_71"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_72" class=" " style=";" id="b4acCdmwx0igJpivbQKQzAhwQ3BqMumw"> 党员队伍发展新发展党员35岁以下： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_72" name="DATA_72" title="党员队伍发展新发展党员35岁以下" maxlength="50" value="<c:out  value='${map["DATA_72"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_73" class=" " style=";" id="ozmPjVuzBJPlVltZoJAjM3IbHAZixR7X"> 党员队伍发展女党员： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_73" name="DATA_73" title="党员队伍发展女党员" maxlength="50" value="<c:out  value='${map["DATA_73"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_74" class=" " style=";" id="kMeUu4NPnbWyVEHzW4pu8PgZHDMdkJ4p"> 党员队伍发展大专以上学历： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_74" name="DATA_74" title="党员队伍发展大专以上学历" maxlength="50" value="<c:out  value='${map["DATA_74"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_75" class=" " style=";" id="vPgXgeSAd8LENAFkinHZnfgYwByqRv7T"> 青年创新大赛项目申报设计成就类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_75" name="DATA_75" title="青年创新大赛项目申报设计成就类" maxlength="50" value="<c:out  value='${map["DATA_75"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_76" class=" " style=";" id="gfG0K1IOcyyycE9P53oK1iME0L7yR9TV"> 青年创新大赛项目申报生产制造类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_76" name="DATA_76" title="青年创新大赛项目申报生产制造类" maxlength="50" value="<c:out  value='${map["DATA_76"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_77" class=" " style=";" id="agBVMAh5FkDzHzRHUSu5IpZHfwM7LT5P"> 青年创新大赛项目申报管理类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_77" name="DATA_77" title="青年创新大赛项目申报管理类" maxlength="50" value="<c:out  value='${map["DATA_77"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_85" class=" " style=";" id="q6gGGAznyoc0FgEJlN8gw6kT4GMhBSSu"> 能手评选生产岗位类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_85" name="DATA_85" title="能手评选生产岗位类" maxlength="50" value="<c:out  value='${map["DATA_85"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_86" class=" " style=";" id="iau41p7vMiKuJoFNob3TodAqatA0pSK6"> 能手评选管理服务类： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_86" name="DATA_86" title="能手评选管理服务类" maxlength="50" value="<c:out  value='${map["DATA_86"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_87" class=" " style=";" id="dc58XOkLZyRkzVALD8HTjC8iSQeHLLQC"> 青年立功竞赛突击队创建： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_87" name="DATA_87" title="青年立功竞赛突击队创建" maxlength="50" value="<c:out  value='${map["DATA_87"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_88" class=" " style=";" id="x6L6swueIDRlIUSXwNtXQooYbbic9YQb"> 青年立功竞赛突击队参与青年： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_88" name="DATA_88" title="青年立功竞赛突击队参与青年" maxlength="50" value="<c:out  value='${map["DATA_88"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_89" class=" " style=";" id="gwP5zFvYHVRl8jkUHDnhCKIUj9lcs1i5"> 青年立功竞赛突击队评选： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_89" name="DATA_89" title="青年立功竞赛突击队评选" maxlength="50" value="<c:out  value='${map["DATA_89"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_90" class=" " style=";" id="E5XqA8m3XlxnlY1dwVjB2ZxQT4if6R1K"> 青年立功竞赛五小成果申报： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_90" name="DATA_90" title="青年立功竞赛五小成果申报" maxlength="50" value="<c:out  value='${map["DATA_90"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_91" class=" " style=";" id="wONI1acoGArqVl33riQycs6zQ8YZV5od"> 青年立功竞赛五小成果参与青年： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_91" name="DATA_91" title="青年立功竞赛五小成果参与青年" maxlength="50" value="<c:out  value='${map["DATA_91"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_92" class=" " style=";" id="f4QBM5VYzC6KQHk7NVUPsTrCAN5U1cvR"> 青年立功竞赛五小成果评选： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_92" name="DATA_92" title="青年立功竞赛五小成果评选" maxlength="50" value="<c:out  value='${map["DATA_92"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_93" class=" " style=";" id="q06yp9k7RWUVLO6B8v7bzdMJx68sB3FR"> 团组织数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_93" name="DATA_93" title="团组织数量" maxlength="50" value="<c:out  value='${map["DATA_93"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DATA_94" class=" " style=";" id="LohN193YzDaPi4zCrL9rUTsJqPcaSE54"> 团员青年数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_94" name="DATA_94" title="团员青年数量" maxlength="50" value="<c:out  value='${map["DATA_94"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_95" class=" " style=";" id="muWZrEZMaFyxOUoU0FiXOZQPii44FSvG"> 团员推优入党数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_95" name="DATA_95" title="团员推优入党数量" maxlength="50" value="<c:out  value='${map["DATA_95"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;">&nbsp;<label for="DATA_96" class=" " style=";" id="DATA_96EformLabel"> 工会组织选举到期换届： </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_96" name="DATA_96" title="工会组织选举到期换届" maxlength="50" value="<c:out  value='${map["DATA_96"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_97" class=" " style=";" id="DATA_97EformLabel"> 工会组织选举已完成 </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_97" name="DATA_97" title="工会组织选举已完成" maxlength="50" value="<c:out  value='${map["DATA_97"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="DATA_98" class=" " style=";" id="DATA_98EformLabel"> 工会组织选举进行中 </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_98" name="DATA_98" title="工会组织选举进行中" maxlength="50" value="<c:out  value='${map["DATA_98"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DATA_99" class=" " style=";" id="DATA_99EformLabel"> 工会组织选举未到期 </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DATA_99" name="DATA_99" title="工会组织选举未到期" maxlength="50" value="<c:out  value='${map["DATA_99"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"></td> 
    <td style="width:25%;"></td> 
   </tr> 
   <tr></tr> 
  </tbody> 
 </table>
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

                        <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                           onclick="closeDialog()">返回</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</c:if>
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

<script src="avicit/eformmodule/form/sjdp/V1/bootstrap/detail-layout1697511704000.js?_=1699933701286" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e38b276182018b3b8129a37899";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_DATA_DISPLAY";
    var entryId = '$${entryId}';
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

</script>
</body>
</html>