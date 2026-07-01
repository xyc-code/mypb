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
    <input id="tableId" value="DYN_FIXED_ASSETS_DB" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   工行固定资产调拨 
 </div>
 <table style="" id="SqUQCCcXz1xFXBR2fMd2PyqSRzikIB3y" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="APPLY_DATE" class=" " style=";" id="K5B6pfzuK3BfCag3EHyOCGMi6e8RhiyL"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="申请日期" class="form-control date-picker input-sm" style=";" required id="APPLY_DATE" name="APPLY_DATE" value="${map['APPLY_DATE']}" readonly> 
      <span id="APPLY_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="APPLY_DEPT" class=" " style=";" id="fVRHiUezCipNNGXegBr9ZVttuSkvvqrq"> 调出单位： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="APPLY_DEPT" name="APPLY_DEPT" title="调出单位" value="<c:out  value='${map["APPLY_DEPT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLY_DEPTName" name="APPLY_DEPTName" disabled title="调出单位" value="<c:out  value='${map["APPLY_DEPTName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="APPLY_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="APPLY_JB_USER" class=" " style=";" id="SqQYkH5WddKO77skrSs2iukLxZLT5Piz"> <i class="required">*</i>经办人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="APPLY_JB_USER" name="APPLY_JB_USER" title="经办人" value="<c:out  value='${map["APPLY_JB_USER"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLY_JB_USERName" name="APPLY_JB_USERName" required title="经办人" value="<c:out  value='${map["APPLY_JB_USERName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="APPLY_JB_USERButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="APPLY_USER" class=" " style=";" id="CL3r3yo8kBpmwVLkpNO9WOzboz4WmgPO"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="APPLY_USER" name="APPLY_USER" title="申请人" value="<c:out  value='${map["APPLY_USER"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLY_USERName" name="APPLY_USERName" required disabled title="申请人" value="<c:out  value='${map["APPLY_USERName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="APPLY_USERButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="APPLY_TEL" class=" " style=";" id="PX2opx6zaDJqPAPsDycMtY3oavVN756y"> <i class="required">*</i>联系电话： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="APPLY_TEL" name="APPLY_TEL" title="联系电话" maxlength="50" value="<c:out  value='${map["APPLY_TEL"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_CODE" class=" " style=";" id="an0xx2wRWs0Eacp8UF9N2ZnHhJkp1PjX"> <i class="required">*</i>资产编码： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="ASSET_CODE" name="ASSET_CODE" title="资产编码" maxlength="50" value="<c:out  value='${map["ASSET_CODE"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="ASSET_CODEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_NAEM" class=" " style=";" id="d01f6go8ujHnuBHvwUAwiV63t90FGBUf"> 资产名称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_NAEM" name="ASSET_NAEM" title="资产名称" maxlength="500" value="<c:out  value='${map["ASSET_NAEM"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_TYPE" class=" " style=";" id="xInp2ZNjwB55ImwzJuxwwE9mC6zQoVOS"> 资产类别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_TYPE" name="ASSET_TYPE" title="资产类别" maxlength="50" value="<c:out  value='${map["ASSET_TYPE"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_DETAILS" class=" " style=";" id="bAGrkqL72YzcSeq5CAXarg3AmmTxNeJS"> 资产细目： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_DETAILS" name="ASSET_DETAILS" title="资产细目" maxlength="50" value="<c:out  value='${map["ASSET_DETAILS"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_BRAND" class=" " style=";" id="Cj8xHnCJthdNvTAbHiq4ZYQb0yb3H3EK"> 资产品牌： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_BRAND" name="ASSET_BRAND" title="资产品牌" maxlength="500" value="<c:out  value='${map["ASSET_BRAND"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_DW" class=" " style=";" id="JCr7J6nxuCfG39oFd2xFaa0mbX8LYncn"> 单位： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " readonly id="ASSET_DW" name="ASSET_DW" title="单位" initvalue="<c:out  value='${map["ASSET_DW"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_XHGG" class=" " style=";" id="L4bY7sgqJAAHXShKHzl5KW9mlTWz0HQM"> 型号规格： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_XHGG" name="ASSET_XHGG" title="型号规格" maxlength="500" value="<c:out  value='${map["ASSET_XHGG"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_NUM" class=" " style=";" id="lGFTSxAb4fRAOWa5jbGzPuubntRLFaQJ"> 资产数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="INSERT_NUM" name="INSERT_NUM" data-min="-99999" data-max="99999" data-precision="0" title="资产数量" maxlength="5" value="<c:out  value='${map["INSERT_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="INSERT_DATE" class=" " style=";" id="dSZ17DNM7MIQosLF1O3XYaiqAfUGBRDl"> 入账日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="入账日期" class="form-control date-picker input-sm" style=";" readonly id="INSERT_DATE" name="INSERT_DATE" value="${map['INSERT_DATE']}"> 
      <span id="INSERT_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DEPRE_DATE" class=" " style=";" id="WgfhRgqJeUcUifqhXNYcaCMm6d6w4K9k"> 折旧月份： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="折旧月份" class="form-control date-picker input-sm" style=";" readonly id="DEPRE_DATE" name="DEPRE_DATE" value="${map['DEPRE_DATE']}"> 
      <span id="DEPRE_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ORIGINAL_VALUE" class=" " style=";" id="x0YazAk2sEb6mXvNzOnSY9adg79CLiD2"> 原值： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm "> 
      <span class="input-group-addon"> ￥ </span> 
      <input type="text" class="form-control input-sm" style=";" readonly id="ORIGINAL_VALUE" name="ORIGINAL_VALUE" data-min="0" data-max="999999999999999999.99" data-precision="2" title="原值" maxlength="20" value="<c:out  value='${map["ORIGINAL_VALUE"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="CURRENT_VALUE" class=" " style=";" id="miR5edf7PLNf4PkEgWf8rdydisLxaQap"> 现值： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm "> 
      <span class="input-group-addon"> ￥ </span> 
      <input type="text" class="form-control input-sm" style=";" readonly id="CURRENT_VALUE" name="CURRENT_VALUE" data-min="0" data-max="999999999999999999.99" data-precision="2" title="现值" maxlength="20" value="<c:out  value='${map["CURRENT_VALUE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="INTO_DEPT" class=" " style=";" id="ZJndwvMGF4tGCErvX3OHwuhMtxq0AKdE"> <i class="required">*</i>调入单位： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="INTO_DEPT" name="INTO_DEPT" title="调入单位" value="<c:out  value='${map["INTO_DEPT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="INTO_DEPTName" name="INTO_DEPTName" required title="调入单位" value="<c:out  value='${map["INTO_DEPTName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="INTO_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="DB_NUM" class=" " style=";" id="ji4C7wSEwABqsVfmUzNzkZLPGEwAkxbf"> <i class="required">*</i>调拨数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" required id="DB_NUM" name="DB_NUM" data-min="1" data-max="99999" data-precision="0" title="调拨数量" maxlength="5" value="<c:out  value='${map["DB_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="INTO_GUILD_NAME" class=" " style=";" id="INTO_GUILD_NAMEEformLabel"> <i class="required">*</i>调入工会： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="INTO_GUILD_NAME" name="INTO_GUILD_NAME" title="调入工会" maxlength="500" value="<c:out  value='${map["INTO_GUILD_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="INTO_GUILD_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DB_REASON" class=" " style=";" id="Y3R9OZHPBAcQs5ANy7aARJyXtn5YkvZR"> 调拨原因： </label> </td> 
    <td style="width:43%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="3" id="DB_REASON" name="DB_REASON" title="调拨原因" maxlength="4000"><c:out  value="${map['DB_REASON']}"/></textarea> </td> 
   </tr> 
  </tbody> 
 </table>
 <table style="" id="dnGw91l6whf57SStXvefDhOuY02fJraq" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="ASSET_LEDGER_ID" name="ASSET_LEDGER_ID" title="资产ID" maxlength="50" value="<c:out  value='${map["ASSET_LEDGER_ID"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="INTO_DEPT_NAME" name="INTO_DEPT_NAME" title="调入单位名称" maxlength="500" value="<c:out  value='${map["INTO_DEPT_NAME"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="INTO_GUILD_ID" name="INTO_GUILD_ID" title="调入工会ID" maxlength="50" value="<c:out  value='${map["INTO_GUILD_ID"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="ASSET_GUILD_ID" name="ASSET_GUILD_ID" title="资产工会ID" maxlength="50" value="<c:out  value='${map["ASSET_GUILD_ID"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="ASSET_GUILD_NAME" name="ASSET_GUILD_NAME" title="资产工会名称" maxlength="500" value="<c:out  value='${map["ASSET_GUILD_NAME"]}'/>"> 
     </div></td> 
    <td style="width:17%;"></td> 
   </tr> 
  </tbody> 
 </table>
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

<script src="avicit/eformmodule/form/fixedAssetsDbTable/V1/bootstrap/detail-layout1748316718000.js?_=1782829862096" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "82808081966773a0019667a48a000e0b";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_FIXED_ASSETS_DB";
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