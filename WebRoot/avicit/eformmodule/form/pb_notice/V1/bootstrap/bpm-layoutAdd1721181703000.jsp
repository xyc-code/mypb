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
    <input id="tableId" value="DYN_PB_NOTICE" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   通知公告 
 </div>
 <table style=" border: 1px solid;" id="CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="NOTICE_TITLE" class=" " style=";" id="RA621jNHpE6lTgifFiD4lxGGgHzwdH4H"> <i class="required">*</i>公告标题： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="NOTICE_TITLE" name="NOTICE_TITLE" title="公告标题" maxlength="255" value="<c:out  value='${map["NOTICE_TITLE"]}'/>"> 
     </div></td> 
    <td style="width:7%; border: 1px solid; text-align: right;"><label for="USER_TEL" class=" " style=";" id="USER_TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="USER_TEL" name="USER_TEL" title="申请人电话：" maxlength="255" value="<c:out  value='${map["USER_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="DRAFT_USER_NAME" class=" " style=";" id="wtSHVqDbiafwYxtIHnYjMNdgQzMh9fD1"> <i class="required">*</i>拟稿人： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_USER_NAME" name="DRAFT_USER_NAME" readonly title="拟稿人" maxlength="255" value="<c:out  value='${map["DRAFT_USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid;"><label for="DRAFT_DEPT_NAME" class=" " style=";" id="HQCxeCvZKkrC9yo09wcvLxa9pY1YM313"> <i class="required">*</i>拟稿人部门： </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_DEPT_NAME" name="DRAFT_DEPT_NAME" readonly title="拟稿人部门" maxlength="255" value="<c:out  value='${map["DRAFT_DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="DRAFT_DATE" class=" " style=";" id="V7TbRs6fRiLLRowsS1AvZo44FU1q4N2a"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_DATE" name="DRAFT_DATE" readonly title="申请日期" maxlength="255" value="<c:out  value='${map["DRAFT_DATE"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid;"><label for="RELEASE_DATE" class=" " style=";" id="W5nPoRd7FD1me1tnau9GYamahWs8qJGY"> <i class="required">*</i>失效日期： </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="失效日期" class="form-control date-picker input-sm" style=";" required id="RELEASE_DATE" name="RELEASE_DATE" value="${map['RELEASE_DATE']}" readonly> 
      <span id="RELEASE_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 是否需要反馈材料： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="IS_YN_ISSUE" title="是否下发党支部" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="IS_YN_ISSUE1" name="IS_YN_ISSUE" title="是否下发党支部" value="1" required <c:if test="${map['IS_YN_ISSUE'] eq '1'}">checked="true"</c:if> />是 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="IS_YN_ISSUE2" name="IS_YN_ISSUE" title="是否下发党支部" value="0" required <c:if test="${map['IS_YN_ISSUE'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>表单密级 </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style=";" required id="SECRET_LEVEL" name="SECRET_LEVEL" title="表单密级" oldvalue="${map['SECRET_LEVEL']}"> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="REMARK" class=" " style=";" id="REMARKEformLabel"> 备注： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="5" id="REMARK" name="REMARK" title="备注" maxlength="4000"><c:out  value="${map['REMARK']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 发送党支部： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="SEL_USER" name="SEL_USER" title="下发支部" maxlength="4000" value="<c:out  value='${map["SEL_USER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="SEL_USERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 具体内容： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"> 
     <div id="JQQHGXKJT661fq7f8qAVb9fLx7dutcEB" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 上报信息： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"> 
     <div id="TKnLBc4vFAgiJaiCTsEY33VAxntefuHS" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="SEL_USER_ID" name="SEL_USER_ID" title="所选人员id" maxlength="4000" value="<c:out  value='${map["SEL_USER_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="OVERTIME_YN" name="OVERTIME_YN" title="是否过期" maxlength="255" value="<c:out  value='${map["OVERTIME_YN"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="COUNT" name="COUNT" title="计数" maxlength="255" value="<c:out  value='${map["COUNT"]}'/>"> 
 </div>
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

<script src="avicit/eformmodule/form/pb_notice/V1/bootstrap/bpm-layoutAdd1721181703000.js?_=1782453628754" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e381eaacfc0181faa42aa84007";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_PB_NOTICE";
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