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
    <title>周总结计划</title>
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
    <input id="tableId" value="DYN_MEEKLY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; margin: 15px; font-size: 24px;">
   纪检监察周总结计划 
 </div>
 <table style="" id="tNrsuDoSTkil7HAJjDGiPjDY2mHX1fVd" data-attr="{" isaccordion":"","accordiontitle":"","active":""}" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="text-align: right; width:6%;"><label for="APPLICATION_DATE" class=" " style=";" id="APPLICATION_DATEEformLabel"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICATION_DATE" name="APPLICATION_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["APPLICATION_DATE"]}'/>"> 
     </div></td> 
    <td style="text-align: right; width:6%;"><label for="APPLICANT" class=" " style=";" id="APPLICANTEformLabel"> <i class="required">*</i>申请部门: </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICATION_DEPARTMENT" name="APPLICATION_DEPARTMENT" readonly title="申请部门" maxlength="1000" value="<c:out  value='${map["APPLICATION_DEPARTMENT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; width:6%;"><label for="APPLICATION_DEPARTMENT" class=" " style=";" id="APPLICATION_DEPARTMENTEformLabel"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICANT" name="APPLICANT" readonly title="字段_4" maxlength="1000" value="<c:out  value='${map["APPLICANT"]}'/>"> 
     </div></td> 
    <td style="text-align: right; width:6%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="IS_SON" name="IS_SON" title="是什么" maxlength="255" value="<c:out  value='${map["IS_SON"]}'/>"> 
     </div></td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";display:none;" id="FORM_NO" name="FORM_NO" readonly title="表单编号" maxlength="1000" value="<c:out  value='${map["FORM_NO"]}'/>"> 
     </div></td> 
   </tr> 
   <tr></tr> 
  </tbody> 
 </table>
 <p style="text-align: center;"><label for="请选择" class=" " style=";" id="ZZJH"> 2023年14周周报 </label> </p>
 <p style="text-align: center;"> </p>
 <div id="lastweekly" class="bpm_self_class " title="">
   请输入当前是第几期：
  <input id="shu" type="text"> 
  <a id="anniu" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " role="button" title="确定"> 确定 </a> 
 </div>
 <p></p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_SON_WEEKLY" id="DYN_SON_WEEKLY_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_SON_WEEKLY" class="datatable eform_component" datapermission="eform_data_DYN_SON_WEEKLY"></table> 
       <div id="DYN_SON_WEEKLYPager"></div> 
       <div id="DYN_SON_WEEKLYToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_SON_WEEKLY_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
         <a id="DYN_SON_WEEKLY_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
         <a id="DYN_SON_WEEKLY_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
         <a id="DYN_SON_WEEKLY_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
         <a id="DYN_SON_WEEKLY_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
         <a id="btn_6" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><i class="fa fa-fw fa-upload"></i> 导入</a> 
         <a id="btn_7" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="下载模板" style="display:none;"><i class="fa fa-fw fa-eye"></i> 下载模板</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <p style="text-align: center;"><span style="text-align: center;"></span><label for="请选择" class=" " style=";" id="LDJH"> 两个月滚动计划 </label> </p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_ROLLING_SON" id="DYN_ROLLING_SON_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_ROLLING_SON" class="datatable eform_component" datapermission="eform_data_DYN_ROLLING_SON"></table> 
       <div id="DYN_ROLLING_SONPager"></div> 
       <div id="DYN_ROLLING_SONToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_ROLLING_SON_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="DYN_ROLLING_SON_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="DYN_ROLLING_SON_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="DYN_ROLLING_SON_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="DYN_ROLLING_SON_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=";display:none;" id="DEPT_ID" name="DEPT_ID" readonly title="部门ID" maxlength="1000" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
 </div>
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
<script src="avicit/eformmodule/form/weeklyPolling/V1/bootstrap/bpm-layout1693804846000.js?_=1699254015259" type="text/javascript"></script>
        <script src="avicit/weekly/js/WeeklyS.js" type="text/javascript"></script>
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
    var tableName = "DYN_MEEKLY";
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
