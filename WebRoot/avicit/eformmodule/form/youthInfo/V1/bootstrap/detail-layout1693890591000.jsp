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
    <input id="tableId" value="DYN_YOUTH_INFO" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div class="mce-content-body"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    青年信息表 
  </div> 
  <table style="" id="Po3Edol4pbcUfnnssJRPFeGi154TIzoo" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="DPET_ONTName" class=" " style=";" id="H6uzowmor5LMXGH49HHL2hdGTVe0VrEG"> <i class="required">*</i>一级部门： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="DPET_ONT" name="DPET_ONT" title="一级部门" value="<c:out  value='${map["DPET_ONT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="DPET_ONTName" name="DPET_ONTName" required title="一级部门" value="<c:out  value='${map["DPET_ONTName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="DPET_ONTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right;"><label for="DEPT_IDName" class=" " style=";" id="swyB59uEAktu33EZdTGHSz9Cmi5rpAdt"> <i class="required">*</i>部门名称： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="DEPT_ID" name="DEPT_ID" title="部门名称" maxlength="4000" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="USER_IDName" class=" " style=";" id="fKwTDspJ3HKdCX4n65Jh60XNwtreC0mY"> <i class="required">*</i>姓名： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="USER_ID" name="USER_ID" title="姓名" value="<c:out  value='${map["USER_ID"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="USER_IDName" name="USER_IDName" required title="姓名" value="<c:out  value='${map["USER_IDName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="USER_IDButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right;"><label for="NEW_DATE" class=" " style=";" id="oATt8YT7m5ArgsD0SddKKoTz1w60hE4x"> <i class="required">*</i>出生日期： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="出生日期" class="form-control date-picker input-sm" style=";" required id="NEW_DATE" name="NEW_DATE" value="${map['NEW_DATE']}" readonly> 
       <span id="NEW_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="SEX" class=" " style=";" id="AyYDysTmDt5g2UXAi7uosA9iCaWngVdR"> <i class="required">*</i>性别： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="SEX" name="SEX" title="性别" initvalue="<c:out  value='${map["SEX"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
     <td style="width:6%; text-align: right;"><label for="NATION" class=" " style=";" id="Z7tE9MUOHSjau3uj4rSjd530benwkxXo"> <i class="required">*</i>民族： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="NATION" name="NATION" title="民族" maxlength="50" value="<c:out  value='${map["NATION"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ID_NUMBER" class=" " style=";" id="Lq67KHnr3YYmjfulmvvnsJa9TpLCAG09"> <i class="required">*</i>身份证号码： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="ID_NUMBER" name="ID_NUMBER" title="身份证号码" maxlength="50" idcard="true" value="<c:out  value='${map["ID_NUMBER"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ORG_ID" class=" " style=";" id="X7XDMRiz3HFL2dPmqwScAXW4PvASllRk"> <i class="required">*</i>岗位名称： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="ORG_ID" name="ORG_ID" title="岗位名称" maxlength="4000" value="<c:out  value='${map["ORG_ID"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="POTICALOA" class=" " style=";" id="YA98a4D9ksKtDC6vlP4ApUo5yb4FHDRR"> <i class="required">*</i>第一学历： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="POTICALOA" name="POTICALOA" title="第一学历" maxlength="50" value="<c:out  value='${map["POTICALOA"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="POTICALOA_END" class=" " style=";" id="NZ5LVP8eSNMkejmTpfGeSIKiC1ckI0jj"> <i class="required">*</i>最高学历： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="POTICALOA_END" name="POTICALOA_END" title="最高学历" maxlength="50" value="<c:out  value='${map["POTICALOA_END"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="STATUS" class=" " style=";" id="wa3Jg5EQTI1M1PJDqtazjwzGwDDTKJOx"> <i class="required">*</i>身份： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="STATUS" name="STATUS" title="身份" maxlength="50" value="<c:out  value='${map["STATUS"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR1" class=" " style=";display:none;" id="ZvtSLIaJAV5jiNfPPsw2mQLYJYda6mX1"> 预留字段1： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR1" name="ATTR1" title="预留字段1" maxlength="50" value="<c:out  value='${map["ATTR1"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR2" class=" " style=";display:none;" id="x7x8kLauzH8El3a3hY6nYTfvX5RxyT2x"> 预留字段2： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR2" name="ATTR2" title="预留字段2" maxlength="50" value="<c:out  value='${map["ATTR2"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR3" class=" " style=";display:none;" id="Fra5eisoPJQ46tLGbp7g0y4w50osplUp"> 预留字段3： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR3" name="ATTR3" title="预留字段3" maxlength="50" value="<c:out  value='${map["ATTR3"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR4" class=" " style=";display:none;" id="ZKvnFnJFpAkGBQ8pgpX5LQC1qKMnH1of"> 预留字段4： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR4" name="ATTR4" title="预留字段4" maxlength="50" value="<c:out  value='${map["ATTR4"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR5" class=" " style=";display:none;" id="mGM8kZPAGswRnfTAkqZcCOaAvKUwDhAz"> 预留字段5： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR5" name="ATTR5" title="预留字段5" maxlength="50" value="<c:out  value='${map["ATTR5"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR6" class=" " style=";display:none;" id="RVW51dzwpV1Hm2s7TH1bIykQrGIBF0aF"> 预留字段6： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR6" name="ATTR6" title="预留字段6" maxlength="50" value="<c:out  value='${map["ATTR6"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR7" class=" " style=";display:none;" id="or4kaXaMBwc9lMxvvsBPDzKT1Y2MB5Xg"> 预留字段7： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR7" name="ATTR7" title="预留字段7" maxlength="50" value="<c:out  value='${map["ATTR7"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR8" class=" " style=";display:none;" id="AKgzQNKpCNwHkWZneNr9VSpQhGhXp93G"> 预留字段8： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR8" name="ATTR8" title="预留字段8" maxlength="50" value="<c:out  value='${map["ATTR8"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR9" class=" " style=";display:none;" id="xV08iwooLV6pdpGKQqYvfM2jILFmuQ8M"> 预留字段9： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR9" name="ATTR9" title="预留字段9" maxlength="50" value="<c:out  value='${map["ATTR9"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR10" class=" " style=";display:none;" id="OBBEeszlk2wA4Dl73VuDTADPl33vU8uW"> 预留字段10： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR10" name="ATTR10" title="预留字段10" maxlength="50" value="<c:out  value='${map["ATTR10"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR11" class=" " style=";display:none;" id="CsZU8qzzlYcZOtx7G8QM79N7i7SIwE3Z"> 预留字段11： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR11" name="ATTR11" title="预留字段11" maxlength="50" value="<c:out  value='${map["ATTR11"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR12" class=" " style=";display:none;" id="GsnMKgaNBDqQoEcSMGAXkYeR9pAeza4e"> 预留字段12： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR12" name="ATTR12" title="预留字段12" maxlength="50" value="<c:out  value='${map["ATTR12"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR13" class=" " style=";display:none;" id="bpCXx9anIcrDyOkqb86j8ckcFgeNRdaR"> 预留字段13： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR13" name="ATTR13" title="预留字段13" maxlength="50" value="<c:out  value='${map["ATTR13"]}'/>"> 
      </div></td> 
    </tr> 
    <tr></tr> 
   </tbody> 
  </table> 
 </div>
 <p><</p>
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

                        <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                           onclick="closeDialog()">返回</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</c:if>
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

<script src="avicit/eformmodule/form/youthInfo/V1/bootstrap/detail-layout1693890591000.js?_=1782716770171" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d8a62d88d018a6317243d0870";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_YOUTH_INFO";
    var entryId = '$${entryId}';
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

</script>
</body>
</html>