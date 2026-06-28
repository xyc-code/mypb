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
    <title>组织部党费审批</title>
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
    <input id="tableId" value="DYN_PARTYORG_MONEY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   组织部党费使用审批 
 </div>
 <table style="" id="lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="REQUEST_DATE" class=" " style=";" id="LzilEqAQauEsY0rI86DhqWlO54lOrtS4"> 申请日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="申请日期" maxlength="255" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="AUTO_CODE" class=" " style=";" id="Vojfp6pXYxCwMBOMm00MJnggLkihN6Kd"> 表单编号： </label> </td> 
    <td style="width:25%;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="自动编码" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_NAME" class=" " style=";" id="w0PjpWBg0YMaQmfDOmaMj3HDFvpDQpen"> 申请人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="255" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="DEPT_NAME" class=" " style=";" id="nXDCND0Jj0XY1uml4U8PEFmTARcWsVO0"> 申请单位： </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="HANDLER" class=" " style=";" id="X3OOUWWpudzm1b8oA4aHBZgWhbt6fCVm"> 经办人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="HANDLER" name="HANDLER" title="经办人" maxlength="255" value="<c:out  value='${map["HANDLER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="HANDLERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="PARTY_NAME" class=" " style=";" id="CPdFQqAK3NsLDBH7nitQfh7i1FZKTBDJ"> 党支部： </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="PARTY_NAME" name="PARTY_NAME" title="党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="PARTY_MEMBER_NUM" class=" " style=";" id="mlX5lNzBWy8rjLXr4odxE6z8X5Qbeoif"> 党员总人数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="党员总人数" maxlength="20" value="<c:out  value='${map["PARTY_MEMBER_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="TOTAL_PRICE" class=" " style=";" id="TOTAL_PRICEEformLabel"> 总计金额： </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="totalPrice" name="TOTAL_PRICE" data-min="-9999999999999.99" data-max="9999999999999.99" data-precision="2" title="总计金额" maxlength="20" value="<c:out  value='${map["TOTAL_PRICE"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="HANDLER_ID" class=" " style=";display:none;" id="HJslUkYgSNMThJVKk7uSTz4V1DL78qqC"> 经办人ID： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="HANDLER_ID" name="HANDLER_ID" title="经办人ID" maxlength="255" value="<c:out  value='${map["HANDLER_ID"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="PARTY_ID" class=" " style=";display:none;" id="JErxVfnw6tgOKXXRKe815wIaPv3aSRwU"> 党支部ID： </label> </td> 
    <td style="width:25%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:75%; text-align: left;" colspan="4"> 
     <div id="eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:75%; text-align: left;" colspan="4"> 
     <div class="eform-tab"> 
      <ul class="nav nav-tabs" role="tablist"> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab active"><a href="#uM6gnz2TYOVHApUr4tAOQS259eQYwkze" aria-controls="uM6gnz2TYOVHApUr4tAOQS259eQYwkze" role="tab" data-toggle="tab">学习资料</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#zb63sZ9n7qJvZkDcn41Or5TOKAcyGl7Z" aria-controls="zb63sZ9n7qJvZkDcn41Or5TOKAcyGl7Z" role="tab" data-toggle="tab">场地费</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#HSDI1zo0Lb5djZ3pWyABjvA5QB5yLP6d" aria-controls="HSDI1zo0Lb5djZ3pWyABjvA5QB5yLP6d" role="tab" data-toggle="tab">工本费</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#saZPlv0JtV4G7ngFTvVk5Yxl4pZncODK" aria-controls="saZPlv0JtV4G7ngFTvVk5Yxl4pZncODK" role="tab" data-toggle="tab">设备费用</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#e7NACOEbUxEfFRn2CKwgIIBAQYhXh0Nm" aria-controls="e7NACOEbUxEfFRn2CKwgIIBAQYhXh0Nm" role="tab" data-toggle="tab">党徽、党旗</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#uiSQJTi5o59agh6e16dzVFNqBZoODi6k" aria-controls="uiSQJTi5o59agh6e16dzVFNqBZoODi6k" role="tab" data-toggle="tab">门票/讲解费</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#wqlEPGHuNYkYe0VHosrDqUNh1wcuOUdZ" aria-controls="wqlEPGHuNYkYe0VHosrDqUNh1wcuOUdZ" role="tab" data-toggle="tab">困难党员</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#TclBajf5832WPabBALmGDDzUbV0Kw5eC" aria-controls="TclBajf5832WPabBALmGDDzUbV0Kw5eC" role="tab" data-toggle="tab">表彰</a></li> 
      </ul> 
      <div class="tab-content" style="height: 100%; min-height: 40px;"> 
       <div role="tabpanel" class="tab-pane active" id="uM6gnz2TYOVHApUr4tAOQS259eQYwkze" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_XXZL" id="DYN_PO_XXZL_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_XXZL" class="datatable eform_component" datapermission="eform_data_DYN_PO_XXZL"></table> 
              <div id="DYN_PO_XXZLPager"></div> 
              <div id="DYN_PO_XXZLToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_XXZL_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_XXZL_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_XXZL_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_XXZL_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_XXZL_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="zb63sZ9n7qJvZkDcn41Or5TOKAcyGl7Z" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_CD" id="DYN_PO_CD_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_CD" class="datatable eform_component" datapermission="eform_data_DYN_PO_CD"></table> 
              <div id="DYN_PO_CDPager"></div> 
              <div id="DYN_PO_CDToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_CD_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_CD_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_CD_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_CD_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_CD_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="HSDI1zo0Lb5djZ3pWyABjvA5QB5yLP6d" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_GB" id="DYN_PO_GB_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_GB" class="datatable eform_component" datapermission="eform_data_DYN_PO_GB"></table> 
              <div id="DYN_PO_GBPager"></div> 
              <div id="DYN_PO_GBToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_GB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_GB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_GB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_GB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_GB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="saZPlv0JtV4G7ngFTvVk5Yxl4pZncODK" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_SB" id="DYN_PO_SB_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_SB" class="datatable eform_component" datapermission="eform_data_DYN_PO_SB"></table> 
              <div id="DYN_PO_SBPager"></div> 
              <div id="DYN_PO_SBToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_SB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_SB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_SB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_SB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_SB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="e7NACOEbUxEfFRn2CKwgIIBAQYhXh0Nm" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_DHDQ" id="DYN_PO_DHDQ_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_DHDQ" class="datatable eform_component" datapermission="eform_data_DYN_PO_DHDQ"></table> 
              <div id="DYN_PO_DHDQPager"></div> 
              <div id="DYN_PO_DHDQToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_DHDQ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_DHDQ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_DHDQ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_DHDQ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_DHDQ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="uiSQJTi5o59agh6e16dzVFNqBZoODi6k" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_MPJJ" id="DYN_PO_MPJJ_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_MPJJ" class="datatable eform_component" datapermission="eform_data_DYN_PO_MPJJ"></table> 
              <div id="DYN_PO_MPJJPager"></div> 
              <div id="DYN_PO_MPJJToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_MPJJ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_MPJJ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_MPJJ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_MPJJ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_MPJJ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="wqlEPGHuNYkYe0VHosrDqUNh1wcuOUdZ" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_KNDY" id="DYN_PO_KNDY_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_KNDY" class="datatable eform_component" datapermission="eform_data_DYN_PO_KNDY"></table> 
              <div id="DYN_PO_KNDYPager"></div> 
              <div id="DYN_PO_KNDYToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_KNDY_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_KNDY_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_KNDY_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_KNDY_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_KNDY_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="TclBajf5832WPabBALmGDDzUbV0Kw5eC" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PO_BZ" id="DYN_PO_BZ_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PO_BZ" class="datatable eform_component" datapermission="eform_data_DYN_PO_BZ"></table> 
              <div id="DYN_PO_BZPager"></div> 
              <div id="DYN_PO_BZToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PO_BZ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PO_BZ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PO_BZ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PO_BZ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PO_BZ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
               </div> 
               <div class="toolbar-right"> 
               </div> 
              </div> 
             </div> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" contenteditable="true" id="r4cxTmzJY7Fir5hb4FyVkATCp0GH3eXt" style="height: 100%; min-height: 40px;"></div> 
      </div> 
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
<script src="avicit/eformmodule/form/partyOrgMoney/V1/bootstrap/bpm-layout1645512421000.js?_=1645513161881" type="text/javascript"></script>
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
    var tableName = "DYN_PARTYORG_MONEY";
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
