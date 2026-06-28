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
    <tr> 
     <td style="width:6%; text-align: right;"><label for="DEMOCRACY_DEPTName" class=" " style=";" id="QAZEtdFTOICrAT1eAOMls6RtvVJzErME"> <i class="required">*</i>单位： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="DEMOCRACY_DEPT" name="DEMOCRACY_DEPT" title="单位" value="<c:out  value='${map["DEMOCRACY_DEPT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="DEMOCRACY_DEPTName" name="DEMOCRACY_DEPTName" required disabled title="单位" value="<c:out  value='${map["DEMOCRACY_DEPTName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="DEMOCRACY_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
     <td style="width:25%; text-align: right;"><label for="LEAD_JOIN" class=" " style=";" id="XymsSDJ163i9n1DRFqjiEfMXYxfZGYD8"> 主管公司领导是否参加： </label> </td> 
     <td style="width:25%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " id="LEAD_JOIN" name="LEAD_JOIN" title="主管公司领导是否参加"> <option value="">请选择</option> <option value="N" <c:if test="${map['LEAD_JOIN'] eq 'N'}">selected</c:if> >否</option> <option value="Y" <c:if test="${map['LEAD_JOIN'] eq 'Y'}">selected</c:if> >是</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="LEAD_NAMEName" class=" " style=";" id="BaZ2oEVXADiRGQa7M8wZuEenaPHRFTCN"> 公司领导姓名： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="LEAD_NAME" name="LEAD_NAME" title="公司领导姓名" value="<c:out  value='${map["LEAD_NAME"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="LEAD_NAMEName" name="LEAD_NAMEName" title="公司领导姓名" value="<c:out  value='${map["LEAD_NAMEName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="LEAD_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:25%; text-align: right;"><label for="DEMOCRACY_DATE" class=" " style=";" id="ga4wNgL5JOzMmCeAj5NYYa6Qfgk4gSlj"> <i class="required">*</i>召开日期报送： </label> </td> 
     <td style="width:25%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="召开日期报送" class="form-control date-picker input-sm" style=";" required id="DEMOCRACY_DATE" name="DEMOCRACY_DATE" value="${map['DEMOCRACY_DATE']}" readonly> 
       <span id="DEMOCRACY_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="DEMOCRACY_END_DATE" class=" " style=";" id="QilmpxTmrx64tupawfxYiN8XcVBs5RIt"> 会后材料报送： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="会后材料报送" class="form-control date-picker input-sm" style=";" readonly id="DEMOCRACY_END_DATE" name="DEMOCRACY_END_DATE" value="${map['DEMOCRACY_END_DATE']}"> 
       <span id="DEMOCRACY_END_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:25%; text-align: right;">&nbsp;<label for="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t" class=" " style=";" id="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024tEformLabel"> 附件上传： </label> </td> 
     <td style="width:25%;"> 
      <div id="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t" class="attachment_div eform_mutiattach_auth bpm_self_class" title="附件上传："> 
      </div></td> 
    </tr> 
    <tr></tr> 
   </tbody> 
  </table> 
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

<script src="avicit/eformmodule/form/gsndldgbmzshh/V1/bootstrap/bpm-layoutAdd1703034317000.js?_=1703034318677" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d89cef9c70189cf069a91068e";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_DEMOCRACY";
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