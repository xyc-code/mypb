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
    <input id="tableId" value="DYN_PARTY_TRANSFER" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   转出党组织关系 
 </div>
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <table style="" id="JllDHyTdDMFGzs1JNmW7av7P5pt4PXai" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:28%;"></td> 
     <td style="width:28%;"></td> 
     <td style="width:28%; text-align: right;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>上报人电话： </label> </td> 
     <td style="width:16%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话：" maxlength="255" value="<c:out  value='${map["TEL"]}'/>"> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <table style=" border: 1px solid;" id="lNLrOxqzGhO78DCfdZDhNFUrNSvsTifT" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:10%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_USER" class=" " style=";" id="InQPBWiJCE0xWHIeTMoupiSGaH7101cT"> <i class="required">*</i>上报人： </label> </td> 
    <td style="width:20%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_USER" name="REQUEST_USER" readonly title="上报人" maxlength="1000" value="<c:out  value='${map["REQUEST_USER"]}'/>"> 
     </div></td> 
    <td style="width:8%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_DEPT" class=" " style=";" id="yrV5CSphbgOTQOYai38zxaErWOfPNdMt"> <i class="required">*</i>上报部门： </label> </td> 
    <td style="width:36%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DEPT" name="REQUEST_DEPT" readonly title="上报部门" maxlength="1000" value="<c:out  value='${map["REQUEST_DEPT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 47px;"> 
    <td style="width:10%; text-align: right; border: 1px solid; height: 47px;"><label for="REQUEST_DATE" class=" " style=";" id="A59IvSQvDW3pBAnMMaujoFmwykJ3FDNy"> <i class="required">*</i>上报日期： </label> </td> 
    <td style="width:20%; border: 1px solid; height: 47px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="上报日期" maxlength="1000" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:8%; border: 1px solid; height: 47px;"><p style="text-align: right;"><label for="AUTO_CODE" class=" " style=";" id="AUTO_CODEEformLabel"> <i class="required">*</i>表单编号： </label> </p></td> 
    <td style="width:36%; border: 1px solid; height: 47px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="自动编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 64px;"> 
    <td style="width:10%; text-align: right; border: 1px solid; height: 64px;"><label for="PARTY_NAME" class=" " style=";" id="PARTY_NAMEEformLabel"> <i class="required">*</i>所在党支部： </label> </td> 
    <td style="width:20%; border: 1px solid; height: 64px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="所在党支部:" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:8%; border: 1px solid; text-align: right; height: 64px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> <i class="required">*</i>目的支部： </label> </td> 
    <td style="padding:0;width:36%; border: 1px solid; height: 64px;"> 
     <table style="margin:0;width:100%;" id="axFKxEarxFrLXy7enoa4ymhNz2UVqqev" height="49" class="form_commonTable1"> 
      <tbody> 
       <tr style="height: 40px;"> 
        <td style="width:30%; border: 1px solid; height: 40px; text-align: left;"> 
         <div class="input-group input-group-sm " style="width:100%"> 
          <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="P_IN_PARTY_ORG" name="P_IN_PARTY_ORG" title="目的支部" maxlength="255" value="<c:out  value='${map["P_IN_PARTY_ORG"]}'/>"> 
          <span class="input-group-addon dictionary-box-act" id="P_IN_PARTY_ORGButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
         </div></td> 
        <td style="width:2%; border: 1px solid; height: 40px;">/</td> 
        <td style="width:19%; border: 1px solid; height: 40px;"><label for="P_PARTY_GROUPName" class=" " style=";" id="P_PARTY_GROUPEformLabel"> 目的党小组： </label> </td> 
        <td style="width:48%; border: 1px solid; height: 40px;"> 
         <div id="controlP_PARTY_GROUP" class="input-group input-group-sm avicselect " style="width:100%;"> 
          <input type="hidden" name="P_PARTY_GROUP" id="P_PARTY_GROUP"> 
          <input type="text" class="form-control input-sm" style=";" id="P_PARTY_GROUPName" name="P_PARTY_GROUPNAME" title="目的党小组："> 
          <script type="text/javascript">
      var selectCustomItemP_PARTY_GROUP='${map["P_PARTY_GROUP"]}';
  	</script> 
          <span class="input-group-addon   avicselect-act  "> <i class="glyphicon glyphicon-calendar"></i></span> 
          <div class="avicselect-list"> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 53px;"> 
    <td style="width:10%; text-align: right; border: 1px solid; height: 53px;"><label for="TRANSFER_TYPE" class=" " style=";" id="TRANSFER_TYPEEformLabel"> <i class="required">*</i>转出类别： </label> </td> 
    <td style="width:20%; border: 1px solid; height: 53px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="P_TRANSFER_TYPE" title="转出类别" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="P_TRANSFER_TYPE1" name="P_TRANSFER_TYPE" title="转出类别" value="0" required <c:if test="${map['P_TRANSFER_TYPE'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />内部调动 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="P_TRANSFER_TYPE2" name="P_TRANSFER_TYPE" title="转出类别" value="1" required <c:if test="${map['P_TRANSFER_TYPE'] eq '1'}">checked="true"</c:if> />外部转出 </label> 
     </div></td> 
    <td style="width:8%; text-align: right; border: 1px solid; height: 53px;"><label for="P_IN_DEPT_NAMEName" class=" " style=";" id="P_IN_DEPT_NAMEEformLabel"> <i class="required">*</i>目的部门： </label> </td> 
    <td style="width:36%; border: 1px solid; height: 53px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="pInDeptIds" name="P_IN_DEPT_IDS" title="目的部门" value="<c:out  value='${map["P_IN_DEPT_IDS"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="pInDeptIdsName" name="P_IN_DEPT_IDSName" title="目的部门" value="<c:out  value='${map["P_IN_DEPT_IDSName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="pInDeptIdsButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="OUT_DEPT_NAME" name="OUT_DEPT_NAME" title="外部转出部门" maxlength="255" value="<c:out  value='${map["OUT_DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 102px;"> 
    <td style="width:10%; text-align: right; border: 1px solid; height: 102px;"><strong><span style="color: red;">*</span></strong><label for="请选择" class=" " style=";" id="请选择EformLabel"> 党员信息： </label> </td> 
    <td style="width:63%; border: 1px solid; height: 102px;" colspan="3"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_POT_MEMBER" id="DYN_POT_MEMBER_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_POT_MEMBER" class="datatable eform_component" datapermission="eform_data_DYN_POT_MEMBER"></table> 
           <div id="DYN_POT_MEMBERPager"></div> 
           <div id="DYN_POT_MEMBERToolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_POT_MEMBER_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_POT_MEMBER_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_POT_MEMBER_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_POT_MEMBER_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_POT_MEMBER_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
            </div> 
            <div class="toolbar-right"> 
            </div> 
           </div> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table> <p>提示：目的支部、目的部门及目的党小组均相同的人，方可使用一条流程转出！</p></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="P_IN_PARTY_ORG_ID" name="P_IN_PARTY_ORG_ID" title="目的支部ID" maxlength="255" value="<c:out  value='${map["P_IN_PARTY_ORG_ID"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="1000" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="P_PARTY_GROUP_NAME" name="P_PARTY_GROUP_NAME" title="党小组名称" maxlength="255" value="<c:out  value='${map["P_PARTY_GROUP_NAME"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="P_PARTY_GROUP_ID" name="P_PARTY_GROUP_ID" title="党小组ID" maxlength="255" value="<c:out  value='${map["P_PARTY_GROUP_ID"]}'/>"> 
 </div>
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

<script src="avicit/eformmodule/form/partyOrganRelationTransfer/V1/bootstrap/detail-layout1678697890000.js?_=1710381290201" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "402811817f241b5d017f24306e180254";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_PARTY_TRANSFER";
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