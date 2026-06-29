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
    <input id="tableId" value="DYN_WORK_PLAN" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <span style="color: #ff0000;">党委工作计划</span> 
 </div>
 <table style=" border: 1px solid #000000;" id="qyIHbPGwlM0Cd36asw5vBZXa4j9gV0Wm" border="1" bordercolor="#000000" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="FORM_CODE" class=" " style=";" id="FORM_CODEEformLabel"> 编号： </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div id="FORM_CODE" class="bpm_self_class " title="编号：" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="FORM_CODE" value="<c:out  value='${map["FORM_CODE"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="DREAF_DATE" class=" " style=";" id="DREAF_DATEEformLabel"> 创建时间： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DREAF_DATE" name="DREAF_DATE" readonly title="创建时间" maxlength="1000" value="<c:out  value='${map["DREAF_DATE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="DRAF_USER" class=" " style=";" id="DRAF_USEREformLabel"> 创建人： </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAF_USER" name="DRAF_USER" readonly title="创建人" maxlength="1000" value="<c:out  value='${map["DRAF_USER"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="DRAF_DEPT" class=" " style=";" id="DRAF_DEPTEformLabel"> 创建部门： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAF_DEPT" name="DRAF_DEPT" readonly title="创建部门" maxlength="1000" value="<c:out  value='${map["DRAF_DEPT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="QUARTER" class=" " style=";" id="UnOXra77IAtfCfhoMqcd010EXVslX9CG"> <i class="required">*</i>计划类别： </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="QUARTER" name="QUARTER" title="计划类别" initvalue="<c:out  value='${map["QUARTER"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:7%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="ND" class=" " style=";" id="NDEformLabel"> 年度： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="ND" name="ND" title="年度" maxlength="200" value="<c:out  value='${map["ND"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="NAME" class=" " style=";" id="NAMEEformLabel"> <i class="required">*</i>标题 </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="NAME" name="NAME" title="标题" maxlength="255" value="<c:out  value='${map["NAME"]}'/>"> 
     </div></td> 
    <td style="width:7%; border: 1px solid #000000; height: 30px; text-align: right;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 分类： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="FL" title="分类" style="height: auto;"> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL1" name="FL" title="分类" value="1" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '1'}">
         checked="true"</c:if> </c:forEach> /> 政治建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL2" name="FL" title="分类" value="2" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '2'}">
         checked="true"</c:if> </c:forEach> /> 思想建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL3" name="FL" title="分类" value="3" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '3'}">
         checked="true"</c:if> </c:forEach> /> 组织建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL4" name="FL" title="分类" value="4" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '4'}">
         checked="true"</c:if> </c:forEach> /> 干部人才队伍建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL5" name="FL" title="分类" value="5" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '5'}">
         checked="true"</c:if> </c:forEach> /> 纪律作风建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL6" name="FL" title="分类" value="6" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '6'}">
         checked="true"</c:if> </c:forEach> /> 群团建设 
       </label> 
     </div></td> 
   </tr> 
   <tr style="height: 52px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 52px;"><label for="PARTY_COMMITTEE_WORK_PLAN" class=" " style=";" id="glT6FPlfMLmtOGuzCx6aFF9UaT9QoCFa"> <i class="required">*</i>工作目标： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 52px;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="PARTY_COMMITTEE_WORK_PLAN" name="PARTY_COMMITTEE_WORK_PLAN" title="党委工作计划名称" maxlength="4000"><c:out  value="${map['PARTY_COMMITTEE_WORK_PLAN']}"/></textarea> </td> 
   </tr> 
   <tr style="height: 52px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 52px;"><label for="WORK_NAME" class=" " style=";" id="WORK_NAMEEformLabel"> <i class="required">*</i>工作方向（思路）： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 52px;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" required id="WORK_NAME" name="WORK_NAME" title="工作方向（思路）" maxlength="4000"><c:out  value="${map['WORK_NAME']}"/></textarea> </td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 29px;"><label for="DEPT_NAME" class=" " style=";" id="DEPT_NAMEEformLabel"> 党群部门承接： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 29px;" colspan="3"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style="height:100px;
color:red;;" autocomplete="off" id="DEPT_NAME" name="DEPT_NAME" title="承接部门名称" maxlength="2000" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="DEPT_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="请选择" class=" " style=";" id="aCFyFEtVrv6v7P9ROOmxHEqXL0FZEO0s"> <i class="required">*</i>附件： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 30px;" colspan="3"> 
     <div id="SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="FILE_TYPE" name="FILE_TYPE" title="文件密级" maxlength="255" value="<c:out  value='${map["FILE_TYPE"]}'/>"> 
 </div> 
 <div class="input-group input-group-sm " style="width:100%"> 
  <input type="text" title="反馈时间" class="form-control time-picker input-sm" style=";display:none;" id="FK_DATE_TIME" name="FK_DATE_TIME" value="${map['FK_DATE_TIME']}" readonly> 
  <span id="FK_DATE_TIME_button" class="input-group-addon data-box-act" style="display:none;"><i class="glyphicon glyphicon-calendar"></i></span> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="RESPONSIBLE_DEPA" name="RESPONSIBLE_DEPA" title="党群部门承接" maxlength="4000" value="<c:out  value='${map["RESPONSIBLE_DEPA"]}'/>"> 
 </div>
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

<script src="avicit/eformmodule/form/DWGZJH/V1/bootstrap/bpm-layoutAdd1732678571000.js?_=1782716699131" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e38f76589e018f7a05adce1c5a";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_WORK_PLAN";
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