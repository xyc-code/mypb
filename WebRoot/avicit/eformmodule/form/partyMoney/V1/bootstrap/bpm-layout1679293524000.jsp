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
    <title>党费使用审批</title>
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
                                                            
                <li id="948e83e3843b68c401845105381a72f4" class="bpmhide bpm_self_class" title="打印" order="3" style="display: none;">
                    <a href="javascript:void(0)">
                        <em class=""></em><span>打印</span>
                    </a>
                </li>

            </div>


<div id="formTab" style="display:none">
    <input id="tableId" value="DYN_PARTY_MONEY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党费使用报销审批 
 </div>
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <table style="" id="ZUe9NZH8fi0YEKkjrbfmbBXJ087iYzf2" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:28%;"></td> 
     <td style="width:28%;"></td> 
     <td style="width:28%; text-align: right;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话：" maxlength="255" value="<c:out  value='${map["TEL"]}'/>"> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <table style=" border: 1px solid;" id="lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_DATE" class=" " style=";" id="LzilEqAQauEsY0rI86DhqWlO54lOrtS4"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="申请日期" maxlength="255" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="AUTO_CODE" class=" " style=";" id="Vojfp6pXYxCwMBOMm00MJnggLkihN6Kd"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid; height: 30px;"><label for="USER_NAME" class=" " style=";" id="w0PjpWBg0YMaQmfDOmaMj3HDFvpDQpen"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="255" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="DEPT_NAME" class=" " style=";" id="nXDCND0Jj0XY1uml4U8PEFmTARcWsVO0"> <i class="required">*</i>申请单位： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid; height: 30px;"><label for="HANDLER" class=" " style=";" id="X3OOUWWpudzm1b8oA4aHBZgWhbt6fCVm"> <i class="required">*</i>经办人： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="HANDLER" name="HANDLER" title="经办人" maxlength="255" value="<c:out  value='${map["HANDLER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="HANDLERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_NAME" class=" " style=";" id="CPdFQqAK3NsLDBH7nitQfh7i1FZKTBDJ"> <i class="required">*</i>经办人所在党支部： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_MEMBER_NUM" class=" " style=";" id="mlX5lNzBWy8rjLXr4odxE6z8X5Qbeoif"> <i class="required">*</i>党员总人数： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" required id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM" data-min="1" data-max="999999999999999" data-precision="0" title="党员总人数" maxlength="20" value="<c:out  value='${map["PARTY_MEMBER_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="TOTAL_PRICE" class=" " style=";" id="TOTAL_PRICEEformLabel"> <i class="required">*</i>总计金额： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm "> 
      <span class="input-group-addon"> ￥ </span> 
      <input type="text" class="form-control input-sm" style=";" required readonly id="TOTAL_PRICE" name="TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="总计金额" maxlength="10" value="<c:out  value='${map["TOTAL_PRICE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:64%; text-align: left; border: 1px solid; height: 30px;" colspan="4"> 
     <div id="eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 30px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 类别： </label> </td> 
    <td style="width:55%; text-align: left; border: 1px solid; height: 30px;" colspan="3"> 
     <div class="bpm_self_class input-sm input-group-sm " id="selType" title="类型选择" style="height: auto;"> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType1" name="SEL_TYPE" title="类型选择" value="1" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '1'}">
         checked="true"</c:if> </c:forEach> /> 学习资料 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType2" name="SEL_TYPE" title="类型选择" value="2" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '2'}">
         checked="true"</c:if> </c:forEach> /> 场地费 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType3" name="SEL_TYPE" title="类型选择" value="3" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '3'}">
         checked="true"</c:if> </c:forEach> /> 工本费 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType4" name="SEL_TYPE" title="类型选择" value="4" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '4'}">
         checked="true"</c:if> </c:forEach> /> 设备费用 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType5" name="SEL_TYPE" title="类型选择" value="5" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '5'}">
         checked="true"</c:if> </c:forEach> /> 党徽、党旗 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType6" name="SEL_TYPE" title="类型选择" value="6" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '6'}">
         checked="true"</c:if> </c:forEach> /> 门票/讲解 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType7" name="SEL_TYPE" title="类型选择" value="7" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '7'}">
         checked="true"</c:if> </c:forEach> /> 困难党员 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType8" name="SEL_TYPE" title="类型选择" value="8" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '8'}">
         checked="true"</c:if> </c:forEach> /> 表彰 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="selType9" name="SEL_TYPE" title="类型选择" value="9" <c:forEach items="${ map['SEL_TYPE'] }" var="s"> 
       <c:if test="${s eq '9'}">
         checked="true"</c:if> </c:forEach> /> 其他 
       </label> 
     </div></td> 
   </tr> 
   <tr style="height: 23px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 23px;"><label for="DYN_PM_XXZL" class=" " style=";" id="DYN_PM_XXZLEformLabel"> 学习资料： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 23px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="kkiUt2KMbDdJwEfLkDDx7QsllPZGItHu" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_XXZL" id="DYN_PM_XXZL_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_XXZL" class="datatable eform_component" datapermission="eform_data_DYN_PM_XXZL"></table> 
               <div id="DYN_PM_XXZLPager"></div> 
               <div id="DYN_PM_XXZLToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_XXZL_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_XXZL_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_XXZL_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_XXZL_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_XXZL_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="XXZL_TOTAL_PRICE" class=" " style=";" id="XXZL_TOTAL_PRICEEformLabel"> 学习资料总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="XXZL_TOTAL_PRICE" name="XXZL_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="学习资料总计金额" maxlength="10" value="<c:out  value='${map["XXZL_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 101px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 101px;"><label for="DYN_PM_CD" class=" " style=";" id="DYN_PM_CDEformLabel"> 场地费： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 101px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="brgMvuCDSppCtYZYqGtmtTH6rufxq6mH" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:99%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_CD" id="DYN_PM_CD_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_CD" class="datatable eform_component" datapermission="eform_data_DYN_PM_CD"></table> 
               <div id="DYN_PM_CDPager"></div> 
               <div id="DYN_PM_CDToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_CD_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_CD_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_CD_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_CD_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_CD_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:49%;"><label for="CD_TOTAL_PRICE" class=" " style=";" id="CD_TOTAL_PRICEEformLabel"> 场地费总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="CD_TOTAL_PRICE" name="CD_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="场地费总计金额" maxlength="10" value="<c:out  value='${map["CD_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 79px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 79px;"><label for="DYN_PM_GB" class=" " style=";" id="DYN_PM_GBEformLabel"> 工本费： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 79px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="XZzvLICkycUq0J2PPwzrrF6F3eY0YzQc" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_GB" id="DYN_PM_GB_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_GB" class="datatable eform_component" datapermission="eform_data_DYN_PM_GB"></table> 
               <div id="DYN_PM_GBPager"></div> 
               <div id="DYN_PM_GBToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_GB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_GB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_GB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_GB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_GB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="GB_TOTAL_PRICE" class=" " style=";" id="GB_TOTAL_PRICEEformLabel"> 工本费总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="GB_TOTAL_PRICE" name="GB_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="工本费总计金额" maxlength="10" value="<c:out  value='${map["GB_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 80px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 80px;"><label for="DYN_PM_SB" class=" " style=";" id="DYN_PM_SBEformLabel"> 设备费用： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 80px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="houdCk6pY6q8TaJywY8OSytdFUQkIZp4" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_SB" id="DYN_PM_SB_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_SB" class="datatable eform_component" datapermission="eform_data_DYN_PM_SB"></table> 
               <div id="DYN_PM_SBPager"></div> 
               <div id="DYN_PM_SBToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_SB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_SB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_SB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_SB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_SB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="SB_TOTAL_PRICE" class=" " style=";" id="SB_TOTAL_PRICEEformLabel"> 设备费用总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="SB_TOTAL_PRICE" name="SB_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="设备费用总金额" maxlength="10" value="<c:out  value='${map["SB_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 83px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 83px;"><label for="DYN_PM_DHDQ" class=" " style=";" id="DYN_PM_DHDQEformLabel"> 党徽、党旗： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 83px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="HGRReC99KtmWFhVhiGtMBSu0awg9I3rg" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_DHDQ" id="DYN_PM_DHDQ_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_DHDQ" class="datatable eform_component" datapermission="eform_data_DYN_PM_DHDQ"></table> 
               <div id="DYN_PM_DHDQPager"></div> 
               <div id="DYN_PM_DHDQToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_DHDQ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_DHDQ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_DHDQ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_DHDQ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_DHDQ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="DHDQ_TOTAL_PRICE" class=" " style=";" id="DHDQ_TOTAL_PRICEEformLabel"> 党徽党旗总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="DHDQ_TOTAL_PRICE" name="DHDQ_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="党徽党旗总计金额" maxlength="10" value="<c:out  value='${map["DHDQ_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 82px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><label for="DYN_PM_MPJJ" class=" " style=";" id="DYN_PM_MPJJEformLabel"> 门票/讲解： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="OpXjjfyM445uq2WGKggAHfj4sZj81snN" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_MPJJ" id="DYN_PM_MPJJ_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_MPJJ" class="datatable eform_component" datapermission="eform_data_DYN_PM_MPJJ"></table> 
               <div id="DYN_PM_MPJJPager"></div> 
               <div id="DYN_PM_MPJJToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_MPJJ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_MPJJ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_MPJJ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_MPJJ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_MPJJ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="MPJJ_TOTAL_PRICE" class=" " style=";" id="MPJJ_TOTAL_PRICEEformLabel"> 门票、讲解总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="MPJJ_TOTAL_PRICE" name="MPJJ_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="门票讲解总计金额" maxlength="10" value="<c:out  value='${map["MPJJ_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 90px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 90px;"><label for="DYN_PM_KNDY" class=" " style=";" id="DYN_PM_KNDYEformLabel"> 困难党员： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 90px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="vAmorJ6cCsj59Q3Q09SYzeE8qisQj1N7" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_KNDY" id="DYN_PM_KNDY_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_KNDY" class="datatable eform_component" datapermission="eform_data_DYN_PM_KNDY"></table> 
               <div id="DYN_PM_KNDYPager"></div> 
               <div id="DYN_PM_KNDYToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_KNDY_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_KNDY_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_KNDY_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_KNDY_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_KNDY_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="KNDY_TOTAL_PRICE" class=" " style=";" id="KNDY_TOTAL_PRICEEformLabel"> 困难党员总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="KNDY_TOTAL_PRICE" name="KNDY_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="困难党员总计金额" maxlength="10" value="<c:out  value='${map["KNDY_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 73px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 73px;"><label for="DYN_PM_BZ" class=" " style=";" id="DYN_PM_BZEformLabel"> 表彰： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 73px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="h9X4y127KQkfSDOGcXf23gGyfTiVGY83" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_BZ" id="DYN_PM_BZ_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_BZ" class="datatable eform_component" datapermission="eform_data_DYN_PM_BZ"></table> 
               <div id="DYN_PM_BZPager"></div> 
               <div id="DYN_PM_BZToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_BZ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_BZ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_BZ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_BZ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_BZ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="BZ_TOTAL_PRICE" class=" " style=";" id="BZ_TOTAL_PRICEEformLabel"> 表彰总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="BZ_TOTAL_PRICE" name="BZ_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="表彰总计金额" maxlength="10" value="<c:out  value='${map["BZ_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 82px;"> 
    <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><label for="DYN_PM_QT" class=" " style=";" id="DYN_PM_QTEformLabel"> 其他： </label> </td> 
    <td style="padding:0;width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="Xg3Zkw68wUm3d63WVY8AyaEiYR82Zk1c" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PM_QT" id="DYN_PM_QT_control" class="eform_subtable_bpm_auth"> 
              <div title=""> 
               <table id="DYN_PM_QT" class="datatable eform_component" datapermission="eform_data_DYN_PM_QT"></table> 
               <div id="DYN_PM_QTPager"></div> 
               <div id="DYN_PM_QTToolbar" class="toolbar"> 
                <div class="toolbar-left"> 
                 <a id="DYN_PM_QT_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                 <a id="DYN_PM_QT_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                 <a id="DYN_PM_QT_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                 <a id="DYN_PM_QT_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                 <a id="DYN_PM_QT_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
                </div> 
                <div class="toolbar-right"> 
                </div> 
               </div> 
              </div> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="QT_TOTAL_PRICE" class=" " style=";" id="QT_TOTAL_PRICEEformLabel"> 其他总计金额： </label> </td> 
        <td style="width:50%;"> 
         <div class="input-group input-group-sm "> 
          <span class="input-group-addon"> ￥ </span> 
          <input type="text" class="form-control input-sm" style=";" readonly id="QT_TOTAL_PRICE" name="QT_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="其他总计金额" maxlength="10" value="<c:out  value='${map["QT_TOTAL_PRICE"]}'/>"> 
         </div></td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="HANDLER_ID" name="HANDLER_ID" title="经办人ID" maxlength="255" value="<c:out  value='${map["HANDLER_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
 <p></p>
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
<script src="avicit/eformmodule/form/partyMoney/V1/bootstrap/bpm-layout1679293524000.js?_=1702604514657" type="text/javascript"></script>
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
    var tableName = "DYN_PARTY_MONEY";
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
