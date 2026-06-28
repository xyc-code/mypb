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
    <input id="tableId" value="DYN_TRADE_UNION_MB" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   工会会员信息表单 
 </div>
 <table style="" id="dNzC0tGs88ooPrxZMNT4sC8nEBHoz6TQ" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_ID" class=" " style=";" id="d5pOh0P3SxGxTS0W6bpfkxqUb4fttC0i"> 姓名： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="USER_ID" name="USER_ID" title="1姓名ID" value="<c:out  value='${map["USER_ID"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="USER_IDName" name="USER_IDName" title="1姓名ID" value="<c:out  value='${map["USER_IDName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="USER_IDButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="DEPT_ID" class=" " style=";" id="AeDTfOJdiFmCS4r7aB5EijojJcD94Hs6"> 部门： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="DEPT_ID" name="DEPT_ID" title="2部门ID" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="DEPT_IDName" name="DEPT_IDName" title="2部门ID" value="<c:out  value='${map["DEPT_IDName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="DEPT_IDButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 工会名称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="ATTRIBUTE_03" name="ATTRIBUTE_03" title="工会名称" maxlength="255" value="<c:out  value='${map["ATTRIBUTE_03"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="ATTRIBUTE_03Button"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_CODE" class=" " style=";" id="AJWLWQ4upo63HPv0zWEQD0sS2SJIFJfW"> 人员编码： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="USER_CODE" name="USER_CODE" title="4人员编码" maxlength="50" value="<c:out  value='${map["USER_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="IDCARD" class=" " style=";" id="o0CKTMfYzKRUNFR6n6bXAOH6Zmsq87zt"> 身份证号： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="IDCARD" name="IDCARD" title="5身份证号" maxlength="255" value="<c:out  value='${map["IDCARD"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="BIRTHDAY" class=" " style=";" id="ntGL30i7MLJr4lVInshSqvHEuNS35JZy"> 出生年月： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="6出行年月" class="form-control date-picker input-sm" style=";" id="BIRTHDAY" name="BIRTHDAY" value="${map['BIRTHDAY']}" readonly> 
      <span id="BIRTHDAY_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="JOIN_PARTY" class=" " style=";" id="Jhh0vdcsxRA9q568JPfkwQUYe8PnYMZF"> 入会时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="7入会时间" class="form-control date-picker input-sm" style=";" id="JOIN_PARTY" name="JOIN_PARTY" value="${map['JOIN_PARTY']}" readonly> 
      <span id="JOIN_PARTY_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="SEX" class=" " style=";" id="o1wuB6WAqAATHxBuMytkcHilVPn75UsM"> 性别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="SEX" name="SEX" title="性别" initvalue="<c:out  value='${map["SEX"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="NATION" class=" " style=";" id="kcGXMBqD6uhwrdK0ewu92Fhy0fpeeh8R"> 民族： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="NATION" name="NATION" title="9民族" maxlength="255" value="<c:out  value='${map["NATION"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ORIGN" class=" " style=";" id="pUyXjIAKVyke4odE48Yew2IcCwcsGZIA"> 籍贯： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="ORIGN" name="ORIGN" title="10籍贯" maxlength="500" value="<c:out  value='${map["ORIGN"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="EDUCATION_LEVEL" class=" " style=";" id="t3EOv7el6vv8dX73duEWCN0WUIPaOboz"> 文化程度： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="EDUCATION_LEVEL" name="EDUCATION_LEVEL" title="11文化程度" initvalue="<c:out  value='${map["EDUCATION_LEVEL"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="POLITICAL_OUTLOOK" class=" " style=";" id="zlHfhgj6gKFqVm6hTOnMEazACB2wOHtO"> 政治面貌： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="POLITICAL_OUTLOOK" name="POLITICAL_OUTLOOK" title="12政治面貌" initvalue="<c:out  value='${map["POLITICAL_OUTLOOK"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="POST" class=" " style=";" id="pzcYsiVA5HgfcZTOXCVU4wVGbjDIl1cR"> 职务： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="POST" name="POST" title="13职务" maxlength="50" value="<c:out  value='${map["POST"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="PROFESSIONAL_RANK" class=" " style=";" id="pFkJleIUfWRu0HGQzcPZKMJHBF4kV1kQ"> 职称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="PROFESSIONAL_RANK" name="PROFESSIONAL_RANK" title="14职称" maxlength="50" value="<c:out  value='${map["PROFESSIONAL_RANK"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="CATEGORY" class=" " style=";" id="FkWqfPdPG6Qijt8D2YK9JZQSMEgWxlfX"> 身份类别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="CATEGORY" name="CATEGORY" title="15身份类别" initvalue="<c:out  value='${map["CATEGORY"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="ONOFF_JOB" class=" " style=";" id="Wf4TA85MvvRHD86g1699V43HfjjE4MP7"> 在职/离职： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="ONOFF_JOB" name="ONOFF_JOB" title="16在职/离职"> <option value="">请选择</option> <option value="0" <c:if test="${map['ONOFF_JOB'] eq '0'}">selected</c:if> >在职</option> <option value="1" <c:if test="${map['ONOFF_JOB'] eq '1'}">selected</c:if> >离职</option> <option value="2" <c:if test="${map['ONOFF_JOB'] eq '2'}">selected</c:if> >病假</option> <option value="3" <c:if test="${map['ONOFF_JOB'] eq '3'}">selected</c:if> >产假</option> <option value="4" <c:if test="${map['ONOFF_JOB'] eq '4'}">selected</c:if> >借调外出</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="PARTY_MONEY" class=" " style=";" id="LHaSv555OSCu8CQoa6owuXuVAQjMftOh"> 会费金额(季度)： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="PARTY_MONEY" name="PARTY_MONEY" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="17会费金额(季度)" maxlength="38" value="<c:out  value='${map["PARTY_MONEY"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="TRADE_UNION_ID" name="TRADE_UNION_ID" title="工会ID" maxlength="50" value="<c:out  value='${map["TRADE_UNION_ID"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
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
<script src="avicit/eformmodule/form/tradeunionmember/V1/bootstrap/add-layout1697516215000.js?_=1703730198658" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c5a898fafbb01898fd7371f0960";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_TRADE_UNION_MB";
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