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
    <input id="tableId" value="DYN_PARTY_ORG_INFO" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div class="mce-content-body"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    党组织历届选举情况 
  </div> 
  <table style="" id="fh9ImbyJGItOJwk3ENQHePjHHLYUlvAd" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="SESSION_NAME" class=" " style=";" id="N9U27Z9LlPG09J5EKDDcOuu8FXxxPSbT"> <i class="required">*</i>届次： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="SESSION_NAME" name="SESSION_NAME" title="届次" maxlength="225" value="<c:out  value='${map["SESSION_NAME"]}'/>"> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="PARTY_NAME" class=" " style=";" id="TQraLlmm8QKmlmFWbh8Zvyo3x1AY0err"> 党组织名称： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME" name="PARTY_NAME" title="党组织名称" maxlength="225" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
       <span class="input-group-addon dictionary-box-act" id="PARTY_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="PARTY_TYPE" class=" " style=";" id="CYHruMqvNgi7SHVejt4lJYnzqNDvgfxh"> <i class="required">*</i>党组织类型： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" initvalue="<c:out  value='${map["PARTY_TYPE"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
     <td style="width:14%; text-align: right;"><label for="SESSION_TYPE" class=" " style=";" id="m8b6xEwwO35tREYNkEobGLjJdcd8uN0t"> <i class="required">*</i>选举类型： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" initvalue="<c:out  value='${map["SESSION_TYPE"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="CREA_TIME" class=" " style=";" id="CrtGLhKMhnlOAYAKoC4bra3Q2Y688nB7"> 选举时间/调整时间： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="选举时间调整时间" class="form-control date-picker input-sm" style=";" id="CREA_TIME" name="CREA_TIME" value="${map['CREA_TIME']}" readonly> 
       <span id="CREA_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="CREA_TIME_DATE" class=" " style=";" id="u5ZubLBOgQVntfERXfwBecCpAFLVVzch"> 换届提醒： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="换届提醒" class="form-control date-picker input-sm" style=";" id="CREA_TIME_DATE" name="CREA_TIME_DATE" value="${map['CREA_TIME_DATE']}" readonly> 
       <span id="CREA_TIME_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="CREA_TIME_DATE_TJ" class=" " style=";" id="aAbs38ppwujHhd0D50BOSu7OEMetWHBQ"> 提交换届选举请示 ： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="提交换届选举请示 " class="form-control date-picker input-sm" style=";" id="CREA_TIME_DATE_TJ" name="CREA_TIME_DATE_TJ" value="${map['CREA_TIME_DATE_TJ']}" readonly> 
       <span id="CREA_TIME_DATE_TJ_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="CREA_TIME_DATE_TJYB" class=" " style=";" id="QJjHrshAhFP9J10RLYKTQwtEV5oGH775"> 提交候选人预备人选请示 ： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="提交候选人预备人选请示 " class="form-control date-picker input-sm" style=";" id="CREA_TIME_DATE_TJYB" name="CREA_TIME_DATE_TJYB" value="${map['CREA_TIME_DATE_TJYB']}" readonly> 
       <span id="CREA_TIME_DATE_TJYB_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ZKDYDH" class=" " style=";" id="uvgNzboTDdTFNOASSTBhh5EI2GGoLLq2"> 召开党员大会： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="召开党员大会" class="form-control date-picker input-sm" style=";" id="ZKDYDH" name="ZKDYDH" value="${map['ZKDYDH']}" readonly> 
       <span id="ZKDYDH_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="JWYCH" class=" " style=";" id="t5CVH3iODgJMjmq7xWX8R2toPMJtY2Ff"> 纪委一次会 ： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="纪委一次会 " class="form-control date-picker input-sm" style=";" id="JWYCH" name="JWYCH" value="${map['JWYCH']}" readonly> 
       <span id="JWYCH_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="WYYCH" class=" " style=";" id="UfN9JowWijPKC4fsGOqnHHHxL4SzMpVs"> 委员会一次会： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="委员会一次会" class="form-control date-picker input-sm" style=";" id="WYYCH" name="WYYCH" value="${map['WYYCH']}" readonly> 
       <span id="WYYCH_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="SESSION_JD" class=" " style=";" id="AjT5p8YLCyvM6vsrOeioiFX8LF4nFJMZ"> 选举进度： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " id="SESSION_JD" name="SESSION_JD" title="选举进度" initvalue="<c:out  value='${map["SESSION_JD"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="orgjgtzwj" class=" " style=";" id="orgjgtzwjEformLabel"> 组织结构调整文件： </label> </td> 
     <td style="width:14%;"> 
      <div id="orgjgtzwj" class="attachment_div eform_mutiattach_auth bpm_self_class" title="组织结构调整文件："> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="ORG_FILE" class=" " style=";display:none;" id="dXI2idVwePW4UIqkEmpSxNLYalJdBA5r"> 组织机构调整文件： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ORG_FILE" name="ORG_FILE" title="组织机构调整文件" maxlength="225" value="<c:out  value='${map["ORG_FILE"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="PARTY_ORG_CONTENT" class=" " style=";" id="yE3VNRETfZDFPhUw3KXzQBVGfsP2VjvP"> 备注： </label> </td> 
     <td style="width:43%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="PARTY_ORG_CONTENT" name="PARTY_ORG_CONTENT" title="备注" maxlength="255"><c:out  value="${map['PARTY_ORG_CONTENT']}"/></textarea> </td> 
    </tr> 
   </tbody> 
  </table> 
  <p> </p> 
  <div class="input-group-sm "> 
   <input type="text" class="form-control input-sm" style=" ; display:none;" required id="PARTY_ID" name="PARTY_ID" title="党组织id" maxlength="225" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
  </div> 
  <p></p> 
 </div>
 <p> </p>
 <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
  <input type="text" class="form-control input-sm" style=";display:none;" id="SESSION_ID" name="SESSION_ID" data-min="-99999" data-max="99999" data-precision="0" title="届次" maxlength="5" value="<c:out  value='${map["SESSION_ID"]}'/>"> 
  <span class="input-group-addon number-box-act" style="display:none;"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
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
<script src="avicit/eformmodule/form/dzzljxjqkbd/V1/bootstrap/add-layout1706680764000.js?_=1708320829177" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d8d5432ec018d58263cff2d66";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_PARTY_ORG_INFO";
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