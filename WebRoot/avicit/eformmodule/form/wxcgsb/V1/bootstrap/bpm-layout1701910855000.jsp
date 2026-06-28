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
    <title>五小成果申报</title>
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
    <input id="tableId" value="DYN_FIVE_OF" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   "五小"成果申报 
 </div>
 <table style=" border: 1px solid;" id="fRi1ovHuyRwynJaoKyyoHwh9dhv48zop" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_NO" class=" " style=";" id="lehrnyNJ8SYIWXcVsvYmnAoaHgQPCwez"> 申请编号： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div id="FIVE_NO" class="bpm_self_class " title="申请编号" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="FIVE_NO" value="<c:out  value='${map["FIVE_NO"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_NAME" class=" " style=";" id="NIQMNxVQtA1VkNEVhVcByTtgnMRZ59QK"> 提出人姓名： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="FIVE_NAME" name="FIVE_NAME" title="提出人姓名" value="<c:out  value='${map["FIVE_NAME"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="FIVE_NAMEName" name="FIVE_NAMEName" required disabled title="提出人姓名" value="<c:out  value='${map["FIVE_NAMEName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="FIVE_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_DEPT" class=" " style=";" id="XmFaJqZKukInH7SXhtCTxTPewuWdkOKr"> 单位： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="FIVE_DEPT" name="FIVE_DEPT" title="单位" value="<c:out  value='${map["FIVE_DEPT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="FIVE_DEPTName" name="FIVE_DEPTName" required disabled title="单位" value="<c:out  value='${map["FIVE_DEPTName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="FIVE_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="FVIE_AGE" class=" " style=";" id="IHIxC4r4oxmguajZqx5M3mEzds7BZOsq"> <i class="required">*</i>年龄： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="FVIE_AGE" name="FVIE_AGE" title="年龄" maxlength="50" value="<c:out  value='${map["FVIE_AGE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_POSITION" class=" " style=";" id="jgIExVHn7nY252dkhajah0VtvV406rMT"> <i class="required">*</i>职位： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="FIVE_POSITION" name="FIVE_POSITION" title="职位" maxlength="50" value="<c:out  value='${map["FIVE_POSITION"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_DATE" class=" " style=";" id="vBKGbCJhyquG2l9pbHEZrPzchAPToNFJ"> <i class="required">*</i>提出时间： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="提出时间" class="form-control date-picker input-sm" style=";" required id="FIVE_DATE" name="FIVE_DATE" value="${map['FIVE_DATE']}" readonly> 
      <span id="FIVE_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_PROBLEM" class=" " style=";" id="r1uvFuAItzGnQPwSSVMKp8IZkwYdDkZX"> <i class="required">*</i>问题描述： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div> 
      <textarea id="FIVE_PROBLEM" name="FIVE_PROBLEM" class="bpm_self_class" title="问题描述"><c:out value="${map['FIVE_PROBLEM']}"/></textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_MEASURES" class=" " style=";" id="z0lh8V0pVP95SkTKcfy9ZyOeh8XIsJpx"> <i class="required">*</i>改善措施： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div> 
      <textarea id="FIVE_MEASURES" name="FIVE_MEASURES" class="bpm_self_class" title="改善措施"><c:out value="${map['FIVE_MEASURES']}"/></textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_PROSPECTS" class=" " style=";" id="Vo1U83cWO1LBE4PV32EZ4Oy5SVbBR5qJ"> <i class="required">*</i>应用前景： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="3" required id="FIVE_PROSPECTS" name="FIVE_PROSPECTS" placeholder="（200字以内）" title="应用前景" maxlength="4000"><c:out  value="${map['FIVE_PROSPECTS']}"/></textarea> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_EFFECT" class=" " style=";" id="t6I9CZaXdS8IYM1Q8vHn2CUXfz6BeCm6"> <i class="required">*</i>改善效果： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" required id="FIVE_EFFECT" name="FIVE_EFFECT" placeholder="（100字以内）" title="改善效果" maxlength="4000"><c:out  value="${map['FIVE_EFFECT']}"/></textarea> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_DECLARATIONS" class=" " style=";" id="j35l92YqYhIjXHbH5NDYeQVovix76dKt"> 申报补充： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div id="E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="POSEN_NAME" class=" " style=";" id="Uf10ikIaqJKy6Eb4tY1fW6B3AAPTQKOn"> <i class="required">*</i>联系人姓名： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="POSEN_NAME" name="POSEN_NAME" title="联系人姓名" value="<c:out  value='${map["POSEN_NAME"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="POSEN_NAMEName" name="POSEN_NAMEName" required title="联系人姓名" value="<c:out  value='${map["POSEN_NAMEName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="POSEN_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="POSEN_TEL" class=" " style=";" id="eD8PS1rb5qbhLxWjNGb3WuRgpX1Xcq7V"> <i class="required">*</i>联系人电话： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="POSEN_TEL" name="POSEN_TEL" title="联系人电话" maxlength="50" value="<c:out  value='${map["POSEN_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_SITUATION" class=" " style=";" id="WIQx21ZyFeuO8RLGfgnxxm7WhozELwP2"> 评选情况： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="FIVE_SITUATION" name="FIVE_SITUATION" title="评选情况" maxlength="50" value="<c:out  value='${map["FIVE_SITUATION"]}'/>"> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
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
<script src="avicit/eformmodule/form/wxcgsb/V1/bootstrap/bpm-layout1701910855000.js?_=1704259600172" type="text/javascript"></script>
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
    var tableName = "DYN_FIVE_OF";
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
