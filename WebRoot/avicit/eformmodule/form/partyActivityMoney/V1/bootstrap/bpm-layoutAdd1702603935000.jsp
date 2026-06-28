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
    <input id="tableId" value="DYN_PARTY_ACTIVITY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div class="mce-content-body"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    党建活动经费使用审批 
  </div> 
  <div style="text-align: center; font-size: 24px; margin: 15px;"> 
   <table style="" id="hDABio26nD9YcJ2sXcP1Cut1ucVuEsVI" class="form_commonTable1"> 
    <tbody> 
     <tr> 
      <td style="width:27%;"></td> 
      <td style="width:27%;"></td> 
      <td style="width:27%; text-align: right;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
      <td style="width:18%;"> 
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
     <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="REQUEST_DATE" class=" " style=";" id="LzilEqAQauEsY0rI86DhqWlO54lOrtS4"> <i class="required">*</i>申请日期： </label> </td> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="申请日期" maxlength="255" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
      </div></td> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="$colData.get(" bindfield")" class=" " style=";" id="Vojfp6pXYxCwMBOMm00MJnggLkihN6Kd"> <i class="required">*</i>表单编号： </label> </td> 
     <td style="border: 1px solid; height: 30px; width:29%;"> 
      <div id="AUTO_CODE" class="bpm_self_class " title="自动编码" style="width:100%;" required> 
       <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="USER_NAME" class=" " style=";" id="w0PjpWBg0YMaQmfDOmaMj3HDFvpDQpen"> <i class="required">*</i>申请人： </label> </td> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="255" value="<c:out  value='${map["USER_NAME"]}'/>"> 
      </div></td> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="DEPT_NAME" class=" " style=";" id="nXDCND0Jj0XY1uml4U8PEFmTARcWsVO0"> <i class="required">*</i>申请单位： </label> </td> 
     <td style="border: 1px solid; height: 30px; width:29%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="HANDLER" class=" " style=";" id="X3OOUWWpudzm1b8oA4aHBZgWhbt6fCVm"> <i class="required">*</i>经办人： </label> </td> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="HANDLER" name="HANDLER" title="经办人" maxlength="255" value="<c:out  value='${map["HANDLER"]}'/>"> 
       <span class="input-group-addon dictionary-box-act" id="HANDLERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
      </div></td> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="PARTY_NAME" class=" " style=";" id="CPdFQqAK3NsLDBH7nitQfh7i1FZKTBDJ"> <i class="required">*</i>党支部： </label> </td> 
     <td style="border: 1px solid; height: 30px; width:29%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="PARTY_MEMBER_NUM" class=" " style=";" id="mlX5lNzBWy8rjLXr4odxE6z8X5Qbeoif"> <i class="required">*</i>党员总人数： </label> </td> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
      <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
       <input type="text" class="form-control input-sm" style=";" required id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM" data-min="1" data-max="999999999999999" data-precision="0" title="党员总人数" maxlength="20" value="<c:out  value='${map["PARTY_MEMBER_NUM"]}'/>"> 
       <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
      </div></td> 
     <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>总计金额： </label> </td> 
     <td style="border: 1px solid; height: 30px; width:29%;"> 
      <div class="input-group input-group-sm "> 
       <span class="input-group-addon"> ￥ </span> 
       <input type="text" class="form-control input-sm" style=";" required readonly id="TOTAL_PRICE" name="TOTAL_PRICE" data-min="0" data-max="999999999999999999.99" data-precision="2" title="总计金额" maxlength="20" value="<c:out  value='${map["TOTAL_PRICE"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:109%;" colspan="4"> 
      <div id="eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:15%;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 类别： </label> </td> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:94%;" colspan="3"> 
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
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:15%;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 学习资料： </label> </td> 
     <td style="padding:0;text-align: left; border: 1px solid; height: 30px; width:94%;" colspan="3"> 
      <table style="margin:0;width:100%;" id="xcWT6jiCrcPz4uJoLITxslfpOYUyeJfP" height="61" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:25%;" colspan="2"> 
          <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
           <tbody> 
            <tr> 
             <td> 
              <div title="DYN_PA_XXZL1" id="DYN_PA_XXZL1_control" class="eform_subtable_bpm_auth"> 
               <div title=""> 
                <table id="DYN_PA_XXZL1" class="datatable eform_component" datapermission="eform_data_DYN_PA_XXZL1"></table> 
                <div id="DYN_PA_XXZL1Pager"></div> 
                <div id="DYN_PA_XXZL1Toolbar" class="toolbar"> 
                 <div class="toolbar-left"> 
                  <a id="DYN_PA_XXZL1_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
                  <a id="DYN_PA_XXZL1_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
                  <a id="DYN_PA_XXZL1_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
                  <a id="DYN_PA_XXZL1_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
                  <a id="DYN_PA_XXZL1_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
         <td style="width:12%;"><label for="XXZL_TOTAL_PRICE" class=" " style=";" id="XXZL_TOTAL_PRICEEformLabel"> 学习资料总计金额： </label> </td> 
         <td style="width:12%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="XXZL_TOTAL_PRICE" name="XXZL_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="学习资料总计金额" maxlength="10" value="<c:out  value='${map["XXZL_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="text-align: left; border: 1px solid; height: 30px; width:15%;"><label for="DYN_PA_CD" class=" " style=";" id="DYN_PA_CDEformLabel"> 场地费： </label> </td> 
     <td style="padding:0;text-align: left; border: 1px solid; height: 30px; width:94%;" colspan="3"> 
      <table style="margin:0;width:100%;" id="CC2DP3WU0fZnmummvp36uss9R1cBJExT" height="93" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:100%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:50%;"><label for="CD_TOTAL_PRICE" class=" " style=";" id="CD_TOTAL_PRICEEformLabel"> 场地费总计金额： </label> </td> 
         <td style="width:50%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="CD_TOTAL_PRICE" name="CD_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="场地费总计金额" maxlength="10" value="<c:out  value='${map["CD_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 84px;"> 
     <td style="text-align: left; border: 1px solid; height: 84px; width:15%;"><label for="DYN_PA_GB" class=" " style=";" id="DYN_PA_GBEformLabel"> 工本费： </label> </td> 
     <td style="padding:0;text-align: left; border: 1px solid; height: 84px; width:94%;" colspan="3"> 
      <table style="margin:0;width:100%;" id="O3d8Fdz7JYcAJG5sqsCFXFi18dYFnyzM" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:33%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:17%;"><label for="GB_TOTAL_PRICE" class=" " style=";" id="GB_TOTAL_PRICEEformLabel"> 工本费总计金额： </label> </td> 
         <td style="width:17%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="GB_TOTAL_PRICE" name="GB_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="工本费总计金额" maxlength="10" value="<c:out  value='${map["GB_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 57px;"> 
     <td style="width:15%; text-align: left; border: 1px solid; height: 87px;"><label for="DYN_PA_SB" class=" " style=";" id="DYN_PA_SBEformLabel"> 设备费用： </label> </td> 
     <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 57px;" colspan="3"> 
      <table style="margin:0;width:100%;" id="b01jMVwEDADOC4DMuLzj9D9aeAqwQjwK" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:33%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:16%;"><label for="SB_TOTAL_PRICE" class=" " style=";" id="SB_TOTAL_PRICEEformLabel"> 设备费用总金额： </label> </td> 
         <td style="width:17%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="SB_TOTAL_PRICE" name="SB_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="设备费用总金额" maxlength="10" value="<c:out  value='${map["SB_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 58px;"> 
     <td style="width:15%; text-align: left; border: 1px solid; height: 86px;"><label for="DYN_PA_DHDQ" class=" " style=";" id="DYN_PA_DHDQEformLabel"> 党徽、党旗： </label> </td> 
     <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
      <table style="margin:0;width:100%;" id="qwDUhdnJCbU1gsSZulAzSGr0WUne2MWq" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:33%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:16%;"><label for="DHDQ_TOTAL_PRICE" class=" " style=";" id="DHDQ_TOTAL_PRICEEformLabel"> 党徽党旗总计金额： </label> </td> 
         <td style="width:17%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="DHDQ_TOTAL_PRICE" name="DHDQ_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="党徽党旗总计金额" maxlength="10" value="<c:out  value='${map["DHDQ_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 57px;"> 
     <td style="width:15%; text-align: left; border: 1px solid; height: 87px;"><label for="DYN_PA_MPJJ" class=" " style=";" id="DYN_PA_MPJJEformLabel"> 门票/讲解： </label> </td> 
     <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 57px;" colspan="3"> 
      <table style="margin:0;width:100%;" id="hNPqj2tnyobCuQrBA8JBTEXDquxr2MbQ" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:50%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:25%;"><label for="MPJJ_TOTAL_PRICE" class=" " style=";" id="MPJJ_TOTAL_PRICEEformLabel"> 门票讲解总计金额： </label> </td> 
         <td style="width:25%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="MPJJ_TOTAL_PRICE" name="MPJJ_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="门票讲解总计金额" maxlength="10" value="<c:out  value='${map["MPJJ_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 56px;"> 
     <td style="width:15%; text-align: left; border: 1px solid; height: 86px;"><label for="DYN_PA_KNDY" class=" " style=";" id="DYN_PA_KNDYEformLabel"> 困难党员： </label> </td> 
     <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 56px;" colspan="3"> 
      <table style="margin:0;width:100%;" id="AGF88wmOlGsGs95ylNXSZK6bjijibPns" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:50%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:25%;"><label for="KNDY_TOTAL_PRICE" class=" " style=";" id="KNDY_TOTAL_PRICEEformLabel"> 困难党员总计金额： </label> </td> 
         <td style="width:25%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="KNDY_TOTAL_PRICE" name="KNDY_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="困难党员总计金额" maxlength="10" value="<c:out  value='${map["KNDY_TOTAL_PRICE"]}'/>"> 
          </div></td> 
        </tr> 
       </tbody> 
      </table></td> 
    </tr> 
    <tr style="height: 58px;"> 
     <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><label for="DYN_PA_BZ" class=" " style=";" id="DYN_PA_BZEformLabel"> 表彰： </label> </td> 
     <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
      <table style="margin:0;width:100%;" id="lKFqH8tYWN6osxn4YDYKWAvYiCdBO0b7" class="form_commonTable1"> 
       <tbody> 
        <tr> 
         <td style="width:50%;" colspan="2"> 
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
          </table> </td> 
        </tr> 
        <tr> 
         <td style="width:25%;"><label for="BZ_TOTAL_PRICE" class=" " style=";" id="BZ_TOTAL_PRICEEformLabel"> 表彰总计金额： </label> </td> 
         <td style="width:25%;"> 
          <div class="input-group input-group-sm "> 
           <span class="input-group-addon"> ￥ </span> 
           <input type="text" class="form-control input-sm" style=";" readonly id="BZ_TOTAL_PRICE" name="BZ_TOTAL_PRICE" data-min="0" data-max="99999999.99" data-precision="2" title="表彰总计金额" maxlength="10" value="<c:out  value='${map["BZ_TOTAL_PRICE"]}'/>"> 
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

<script src="avicit/eformmodule/form/partyActivityMoney/V1/bootstrap/bpm-layoutAdd1702603935000.js?_=1702604051632" type="text/javascript"></script>
        <script src="avicit/pb/print/js/PartyActivityMoneyPrint.js" type="text/javascript"></script>
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