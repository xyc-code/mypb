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
    <input id="tableId" value="DYN_SESSION_WYFG" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党组织委员分工 
 </div>
 <table style="" id="KzaSXGBaeDf2BjlmqjgAfyR2APBwQUTx" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="SESSION_NAME" class=" " style=";" id="FKC8VfoekuYwUr84tNNTr196i5UIHboo"> 届次： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="SESSION_NAME" name="SESSION_NAME" title="届次" maxlength="225" value="<c:out  value='${map["SESSION_NAME"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="PARTY_NAME" class=" " style=";" id="vChTfr0GAlieMZEsDWdq67tLilxdJjRC"> 党组织名称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME" name="PARTY_NAME" title="党组织名称" maxlength="225" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="SESSION_TYPE" class=" " style=";" id="PfaipyDMKSnqDujqqxnWW6O01zGbBv4Z"> <i class="required">*</i>选举类型： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" initvalue="<c:out  value='${map["SESSION_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="SESSION_TIME" class=" " style=";" id="wfltZX1wtYIKoZnRWdvORBn70jJYbRnO"> <i class="required">*</i>选举时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="选举时间" class="form-control date-picker input-sm" style=";" required id="SESSION_TIME" name="SESSION_TIME" value="${map['SESSION_TIME']}" readonly> 
      <span id="SESSION_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_NAME" class=" " style=";" id="qkYvCze4pQLppzn5h8E696KOsRyROYzu"> 委员姓名： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="USER_NAME" name="USER_NAME" title="委员姓名" maxlength="50" value="<c:out  value='${map["USER_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="USER_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_TYPE" class=" " style=";" id="AY98eTcBdlZ9E6rLo2DEP99WtSwAiegL"> 委员分工： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="USER_TYPE" name="USER_TYPE" title="委员分工" maxlength="50" value="<c:out  value='${map["USER_TYPE"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="USER_TYPEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_SEX" class=" " style=";" id="IXIHpnYcOxEpkgHDgz4tx8bPk6uoLows"> 性别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_SEX" name="USER_SEX" title="性别" maxlength="50" value="<c:out  value='${map["USER_SEX"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_ADD_TIME" class=" " style=";" id="swqXmsyWFU4fL1BGd9cPIIPXK3SaU0fC"> 出生日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_ADD_TIME" name="USER_ADD_TIME" title="出生日期" maxlength="50" value="<c:out  value='${map["USER_ADD_TIME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_POST" class=" " style=";" id="GVggQyilnZeftEMQtcsiAIgGJh2Iiu5O"> 职务： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_POST" name="USER_POST" title="职务" maxlength="50" value="<c:out  value='${map["USER_POST"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_RANKS" class=" " style=";" id="w6VhYoWJCiaXq4izG6tnH6hPkfjiTpU6"> 职称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_RANKS" name="USER_RANKS" title="职称" maxlength="50" value="<c:out  value='${map["USER_RANKS"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_WORK_DATE" class=" " style=";" id="Ktp5LcDZqlA7H1VbCS3CG6Rm7Zka4rIM"> 参加工作时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_WORK_DATE" name="USER_WORK_DATE" title="参加工作时间" maxlength="50" value="<c:out  value='${map["USER_WORK_DATE"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_PARTY_TIME" class=" " style=";" id="zJd1hKbpUx5H8Xg4axZws3ZJKIeaCt9H"> 入党时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_PARTY_TIME" name="USER_PARTY_TIME" title="入党时间" maxlength="50" value="<c:out  value='${map["USER_PARTY_TIME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_NUMBER_VOTES" class=" " style=";" id="kEI9w0SG2hJ3XKJNHX7OuT4rm0WHWvJk"> 得票数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="USER_NUMBER_VOTES" name="USER_NUMBER_VOTES" title="得票数" maxlength="50" value="<c:out  value='${map["USER_NUMBER_VOTES"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="PARTY_ID" class=" " style=";display:none;" id="esQGjqGMG3os3mxRMedOGWRGEaEv1suM"> 党组织id： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党组织id" maxlength="225" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="SESSION_ID" class=" " style=";display:none;" id="FFBZDTrXfghfJRzfEYbW12Qe0PjqBDYt"> 届次： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";display:none;" id="SESSION_ID" name="SESSION_ID" data-min="-99999" data-max="99999" data-precision="0" title="届次" maxlength="5" value="<c:out  value='${map["SESSION_ID"]}'/>"> 
      <span class="input-group-addon number-box-act" style="display:none;"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:25%;"></td> 
    <td style="width:25%;"></td> 
   </tr> 
   <tr></tr> 
  </tbody> 
 </table>
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
                           class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存"
                           onclick="saveForm()">保存</a>

                                                                                
                                                                                
                        
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
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/eformTab.js?v=${jsversion}"></script>
<!-- 导出功能的js -->
<script src="static/js/platform/component/common/exportData.js?v=${jsversion}" ></script>
<!-- 导入功能的js -->
<script src="static/js/platform/component/common/importData.js?v=${jsversion}" ></script>
<script src="avicit/eformmodule/form/dzzwyfgbd/V1/bootstrap/add-layout1706680470000.js?_=1708320836323" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d8d5d5e03018d5e0116bf17d8";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_SESSION_WYFG";
    var type = "${type}";
    var idmap = "${idmap}";
    var parentNodeId = "${parentNodeId}";
    var pNodeIdValue = "${pNodeIdValue}";
    var formIsDirtyvalidateflag = "${formIsDirtyvalidateflag}";
    var _eform_base_url = "<%=ViewUtil.getRequestPath(request)%>";
    var customValidate = new Map();
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
        baseUrl:_eform_base_url,
        id: id,
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