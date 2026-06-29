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
    <title>公司年度领导干部民主生活会</title>
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
    <input id="tableId" value="DYN_DEMOCRACY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div class="mce-content-body"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    公司年度领导干部民主生活会 
  </div> 
  <table style="" id="kI3YIqIInwvzsGlPCP7pHxK8lKW7wdxN" class="form_commonTable1"> 
   <tbody> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="DEMOCRACY_DEPTName" class=" " style=";" id="QAZEtdFTOICrAT1eAOMls6RtvVJzErME"> <i class="required">*</i>单位： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="DEMOCRACY_DEPT" name="DEMOCRACY_DEPT" title="单位" value="<c:out  value='${map["DEMOCRACY_DEPT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="DEMOCRACY_DEPTName" name="DEMOCRACY_DEPTName" required disabled title="单位" value="<c:out  value='${map["DEMOCRACY_DEPTName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="DEMOCRACY_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
     <td style="width:21%; text-align: right; height: 30px;"><label for="DEMOCRACY_USER" class=" " style=";" id="DEMOCRACY_USEREformLabel"> <i class="required">*</i>拟稿人： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="DEMOCRACY_USER" name="DEMOCRACY_USER" readonly title="拟稿人" maxlength="1000" value="<c:out  value='${map["DEMOCRACY_USER"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> <i class="required">*</i>联系电话： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="tel" name="DEMOCRACY_TEL" title="联系电话" maxlength="255" value="<c:out  value='${map["DEMOCRACY_TEL"]}'/>"> 
      </div></td> 
     <td style="width:21%; text-align: right; height: 30px;"><label for="DEMOCRACY_DATE" class=" " style=";" id="ga4wNgL5JOzMmCeAj5NYYa6Qfgk4gSlj"> <i class="required">*</i>召开日期： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="召开日期报送" class="form-control time-picker input-sm" style=";" required id="DEMOCRACY_DATE" name="DEMOCRACY_DATE" value="${map['DEMOCRACY_DATE']}" readonly> 
       <span id="DEMOCRACY_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr style="height: 47px;"> 
     <td style="width:10%; text-align: right; height: 47px;"><label for="LEAD_JOIN" class=" " style=";" id="XymsSDJ163i9n1DRFqjiEfMXYxfZGYD8"> <i class="required">*</i>主管公司领导是否参加： </label> </td> 
     <td style="width:21%; height: 47px;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="LEAD_JOIN" name="LEAD_JOIN" title="主管公司领导是否参加"> <option value="N" <c:if test="${map['LEAD_JOIN'] eq 'N'}">selected</c:if> >否</option> <option value="Y" <c:if test="${map['LEAD_JOIN'] eq 'Y'}">selected</c:if> >是</option> </select> 
      </div> </td> 
     <td style="width:21%; text-align: right; height: 47px;"><label for="LEAD_NAMEName" class=" " style=";" id="BaZ2oEVXADiRGQa7M8wZuEenaPHRFTCN"> 公司领导姓名： </label> </td> 
     <td style="width:21%; height: 47px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="LEAD_NAME" name="LEAD_NAME" title="公司领导姓名" value="<c:out  value='${map["LEAD_NAME"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="LEAD_NAMEName" name="LEAD_NAMEName" title="公司领导姓名" value="<c:out  value='${map["LEAD_NAMEName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="LEAD_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
    </tr> 
    <tr style="height: 47px;"> 
     <td style="width:10%; text-align: right; height: 47px;"><label for="DEMOCRACY_WZ" class=" " style=";" id="DEMOCRACY_WZEformLabel"> <i class="required">*</i>召开地点: </label> </td> 
     <td style="width:63%; height: 47px;" colspan="3"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="DEMOCRACY_WZ" name="DEMOCRACY_WZ" title="召开地点" maxlength="255" value="<c:out  value='${map["DEMOCRACY_WZ"]}'/>"> 
      </div>备注：需要详细填至XX工房XX室</td> 
    </tr> 
    <tr style="height: 47px;"> 
     <td style="width:73%; height: 47px; text-align: center;" colspan="4"> 
      <div id="uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd" class="bpm_self_class " title=""> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="DEMOCRACY_END_DATE" class=" " style=";" id="QilmpxTmrx64tupawfxYiN8XcVBs5RIt"> 会后材料报送日期： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="会后材料报送日期" class="form-control time-picker input-sm" style=";" readonly id="DEMOCRACY_END_DATE" name="DEMOCRACY_END_DATE" value="${map['DEMOCRACY_END_DATE']}"> 
       <span id="DEMOCRACY_END_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:21%; text-align: right; height: 30px;">&nbsp;<label for="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t" class=" " style=";" id="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024tEformLabel"> 会后材料上传(以压缩包形式上传)： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div id="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t" class="attachment_div eform_mutiattach_auth bpm_self_class" title="会后材料上传(以压缩包形式上传)："> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="JW_JOIN" class=" " style=";" id="JW_JOINEformLabel"> 纪检/人力参会人员是否参加： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " readonly id="JW_JOIN" name="JW_JOIN" title="纪检/人力参会人员是否参加"> <option value="">请选择</option> <option value="N" <c:if test="${map['JW_JOIN'] eq 'N'}">selected</c:if> >否</option> <option value="Y" <c:if test="${map['JW_JOIN'] eq 'Y'}">selected</c:if> >是</option> </select> 
      </div> </td> 
     <td style="width:21%; text-align: right; height: 30px;"><label for="JW_NAMEName" class=" " style=";" id="JW_NAMEEformLabel"> 纪检/人力参会人员: </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="JW_NAME" name="JW_NAME" title="纪检/人力参会人员" value="<c:out  value='${map["JW_NAME"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="JW_NAMEName" name="JW_NAMEName" disabled title="纪检/人力参会人员" value="<c:out  value='${map["JW_NAMEName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="JW_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="LEAD_YN" class=" " style=";" id="LEAD_YNEformLabel"> 公司领导最终是否参会： </label> </td> 
     <td style="width:63%; height: 30px;" colspan="3"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " readonly id="LEAD_YN" name="LEAD_YN" title="公司领导最终是否参会："> <option value="">请选择</option> <option value="Y" <c:if test="${map['LEAD_YN'] eq 'Y'}">selected</c:if> >是</option> <option value="N" <c:if test="${map['LEAD_YN'] eq 'N'}">selected</c:if> >否</option> </select> 
      </div> </td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="FILE_TYPE" name="FILE_TYPE" title="文件密级" maxlength="255" value="<c:out  value='${map["FILE_TYPE"]}'/>"> 
 </div>
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
<script src="avicit/eformmodule/form/gsndldgbmzshh/V1/bootstrap/bpm-layout1716364028000.js?_=1782716753404" type="text/javascript"></script>
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
    var tableName = "DYN_DEMOCRACY";
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
