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
    <input id="tableId" value="DYN_PARTY_ACTIVITY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党建活动使用审批 
 </div>
 <table style="" id="lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="REQUEST_DATE" class=" " style=";" id="LzilEqAQauEsY0rI86DhqWlO54lOrtS4"> 申请日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="申请日期" maxlength="255" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right;"><label for="$colData.get(" bindfield")" class=" " style=";" id="Vojfp6pXYxCwMBOMm00MJnggLkihN6Kd"> 表单编号： </label> </td> 
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
            <div title="DYN_PA_XXZL" id="DYN_PA_XXZL_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_XXZL" class="datatable eform_component" datapermission="eform_data_DYN_PA_XXZL"></table> 
              <div id="DYN_PA_XXZLPager"></div> 
              <div id="DYN_PA_XXZLToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_XXZL_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_XXZL_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_XXZL_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_XXZL_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_XXZL_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_CD" id="DYN_PA_CD_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_CD" class="datatable eform_component" datapermission="eform_data_DYN_PA_CD"></table> 
              <div id="DYN_PA_CDPager"></div> 
              <div id="DYN_PA_CDToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_CD_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_CD_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_CD_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_CD_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_CD_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_GB" id="DYN_PA_GB_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_GB" class="datatable eform_component" datapermission="eform_data_DYN_PA_GB"></table> 
              <div id="DYN_PA_GBPager"></div> 
              <div id="DYN_PA_GBToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_GB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_GB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_GB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_GB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_GB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_SB" id="DYN_PA_SB_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_SB" class="datatable eform_component" datapermission="eform_data_DYN_PA_SB"></table> 
              <div id="DYN_PA_SBPager"></div> 
              <div id="DYN_PA_SBToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_SB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_SB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_SB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_SB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_SB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_DHDQ" id="DYN_PA_DHDQ_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_DHDQ" class="datatable eform_component" datapermission="eform_data_DYN_PA_DHDQ"></table> 
              <div id="DYN_PA_DHDQPager"></div> 
              <div id="DYN_PA_DHDQToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_DHDQ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_DHDQ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_DHDQ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_DHDQ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_DHDQ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_MPJJ" id="DYN_PA_MPJJ_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_MPJJ" class="datatable eform_component" datapermission="eform_data_DYN_PA_MPJJ"></table> 
              <div id="DYN_PA_MPJJPager"></div> 
              <div id="DYN_PA_MPJJToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_MPJJ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_MPJJ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_MPJJ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_MPJJ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_MPJJ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_KNDY" id="DYN_PA_KNDY_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_KNDY" class="datatable eform_component" datapermission="eform_data_DYN_PA_KNDY"></table> 
              <div id="DYN_PA_KNDYPager"></div> 
              <div id="DYN_PA_KNDYToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_KNDY_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_KNDY_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_KNDY_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_KNDY_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_KNDY_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
            <div title="DYN_PA_BZ" id="DYN_PA_BZ_control" class="eform_subtable_bpm_auth"> 
             <div title=""> 
              <table id="DYN_PA_BZ" class="datatable eform_component" datapermission="eform_data_DYN_PA_BZ"></table> 
              <div id="DYN_PA_BZPager"></div> 
              <div id="DYN_PA_BZToolbar" class="toolbar"> 
               <div class="toolbar-left"> 
                <a id="DYN_PA_BZ_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                <a id="DYN_PA_BZ_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                <a id="DYN_PA_BZ_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                <a id="DYN_PA_BZ_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                <a id="DYN_PA_BZ_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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

<script src="avicit/eformmodule/form/PARTY_ACTIVITY_MONEY/V1/bootstrap/detail-layout1645496482000.js?_=1645496694364" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "402811817f19a849017f1f1222c41c07";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_PARTY_ACTIVITY";
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