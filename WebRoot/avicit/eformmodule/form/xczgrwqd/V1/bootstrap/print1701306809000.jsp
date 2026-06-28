<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,tree,fileupload,noLoading-mask";
%>
<!DOCTYPE html>
<HTML>
<head>
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>"></base>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css?v=${jsversion}" />
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/print.css?v=${jsversion}"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css?v=${jsversion}">
            <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css"/>
    </head>
<body>
    <form id='form' onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}">

        <div class="mce-content-body1">
 <div class="mce-content-body1"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    巡察整改任务清单 
  </div> 
  <table style="" id="o8nJYPJ2ltSoGu387ePG3t7KW9fc31cL" class="form_commonTable1"> 
   <tbody> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="LIST_MAINLY" class=" " style=";" id="pwbCPiKXojLUFODk4C1uytvZ5HC7SYSm"> <i class="required">*</i>主要方面： </label> </td> 
     <td style="width:19%; height: 30px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" required id="LIST_MAINLY" name="LIST_MAINLY" title="主要方面" maxlength="3000"><c:out  value="${map['LIST_MAINLY']}"/></div> </td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="MANIFEST_ISSUE" class=" " style=";" id="NXfoR7r65dmcQ8xZqfUd0LWkeNnS8Ipx"> <i class="required">*</i>发现的问题： </label> </td> 
     <td style="width:19%; height: 30px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" required id="MANIFEST_ISSUE" name="MANIFEST_ISSUE" title="发现的问题" maxlength="3000"><c:out  value="${map['MANIFEST_ISSUE']}"/></div> </td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="MANIFEST_ISSUE_CONT" class=" " style=";" id="vxtp7DhW9ghcqa3OY6ogiGs3bfPQTtHv"> <i class="required">*</i>问题的具体内容： </label> </td> 
     <td style="width:19%; height: 30px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" required id="MANIFEST_ISSUE_CONT" name="MANIFEST_ISSUE_CONT" title="问题的具体内容" maxlength="4000"><c:out  value="${map['MANIFEST_ISSUE_CONT']}"/></div> </td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="MANIFEST_CAUSE" class=" " style=";" id="FhP9E1s6nGOrxtrW8jqAfbwBFvx7qNuk"> <i class="required">*</i>原因分析： </label> </td> 
     <td style="width:19%; height: 30px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" required id="MANIFEST_CAUSE" name="MANIFEST_CAUSE" title="原因分析" maxlength="3000"><c:out  value="${map['MANIFEST_CAUSE']}"/></div> </td> 
    </tr> 
    <tr style="height: 46px;"> 
     <td style="width:6%; text-align: right; height: 46px;"><label for="MANIFEST_MEASURE" class=" " style=";" id="A4DiPMLet5mZ8HjPOtt6ZYi4hUOkwpQf"> 整改措施具体内容 （含措施分解）： </label> </td> 
     <td style="width:19%; height: 46px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" id="MANIFEST_MEASURE" name="MANIFEST_MEASURE" title="整改措施具体内容 （含措施分解）" maxlength="3000"><c:out  value="${map['MANIFEST_MEASURE']}"/></div> </td> 
     <td style="width:6%; text-align: right; height: 46px;"><label for="MANIFEST_POSEN" class=" " style=";" id="tqF9E5s7KW3zhLy9EnG6PwdKcHDQgxQk"> <i class="required">*</i>责任人： </label> </td> 
     <td style="width:19%; height: 46px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="MANIFEST_POSEN" name="MANIFEST_POSEN" title="责任人" value="<c:out  value='${map["MANIFEST_POSEN"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="MANIFEST_POSENName" name="MANIFEST_POSENName" required title="责任人" value="<c:out  value='${map["MANIFEST_POSENName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="MANIFEST_POSENButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
    </tr> 
    <tr style="height: 42px;"> 
     <td style="width:6%; text-align: right; height: 42px;"><label for="MANIFEST_LEADERSHIP" class=" " style=";" id="FoMBMF1J4OqMBK8InP6K3cDZmeolxZvY"> <i class="required">*</i>责任领导： </label> </td> 
     <td style="width:19%; height: 42px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="MANIFEST_LEADERSHIP" name="MANIFEST_LEADERSHIP" title="责任领导" value="<c:out  value='${map["MANIFEST_LEADERSHIP"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="MANIFEST_LEADERSHIPName" name="MANIFEST_LEADERSHIPName" required title="责任领导" value="<c:out  value='${map["MANIFEST_LEADERSHIPName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="MANIFEST_LEADERSHIPButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right; height: 42px;"><label for="MANIFEST_ONE_AND" class=" " style=";" id="ynpqbgkBZVjeUGXxOfROb3fLyh4o4xjU"> 举一反三情况： </label> </td> 
     <td style="width:19%; height: 42px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" id="MANIFEST_ONE_AND" name="MANIFEST_ONE_AND" title="举一反三情况" maxlength="3000"><c:out  value="${map['MANIFEST_ONE_AND']}"/></div> </td> 
    </tr> 
    <tr style="height: 46px;"> 
     <td style="width:6%; text-align: right; height: 46px;"><label for="ATTRIBUTE_04" class=" " style=";" id="WeURS7SqjnDQVxyglqXR0tjPqHnlOg1n"> <i class="required">*</i>整改周期： </label> </td> 
     <td style="width:19%; height: 46px;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="ATTRIBUTE_04" name="ATTRIBUTE_04" title="整改周期"> <option value="3" <c:if test="${map['ATTRIBUTE_04'] eq '3'}">selected</c:if> >限期整改</option> <option value="2" <c:if test="${map['ATTRIBUTE_04'] eq '2'}">selected</c:if> >立行立改</option> <option value="1" <c:if test="${map['ATTRIBUTE_04'] eq '1'}">selected</c:if> >长期坚持</option> </select> 
      </div> </td> 
     <td style="width:6%; text-align: right; height: 46px;"><label for="MANIFEST_DATE_END" class=" " style=";" id="eHfK7EEmu8wt9ap2EbwNvrYa8LtWNnHj"> 预计完成时间： </label> </td> 
     <td style="width:19%; height: 46px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="完成时间" class="form-control date-picker input-sm" style=";" id="MANIFEST_DATE_END" name="MANIFEST_DATE_END" value="${map['MANIFEST_DATE_END']}" readonly> 
       <span id="MANIFEST_DATE_END_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="MANIFEST_QIAN" class=" " style=";" id="niiBnfbe2eD4FzpqSG4jK3wXVn28pDME"> 业务主管 部门会签： </label> </td> 
     <td style="width:19%; height: 30px;"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" id="MANIFEST_QIAN" name="MANIFEST_QIAN" title="业务主管 部门会签" maxlength="3000"><c:out  value="${map['MANIFEST_QIAN']}"/></div> </td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_01" class=" " style=";" id="ForM7ix3gIA0l1DwEvncnEfPxCaoe0lo"> 状态: </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " id="ATTRIBUTE_01" name="ATTRIBUTE_01" title="清单状态"> <option value="">请选择</option> <option value="0" <c:if test="${map['ATTRIBUTE_01'] eq '0'}">selected</c:if> >未发放</option> <option value="1" <c:if test="${map['ATTRIBUTE_01'] eq '1'}">selected</c:if> >已发放</option> <option value="3" <c:if test="${map['ATTRIBUTE_01'] eq '3'}">selected</c:if> >未完成</option> <option value="2" <c:if test="${map['ATTRIBUTE_01'] eq '2'}">selected</c:if> >已完成</option> <option value="4" <c:if test="${map['ATTRIBUTE_01'] eq '4'}">selected</c:if> >已取消</option> <option value="5" <c:if test="${map['ATTRIBUTE_01'] eq '5'}">selected</c:if> >延期完成</option> </select> 
      </div> </td> 
    </tr> 
    <tr style="height: 31px;"> 
     <td style="width:6%; text-align: right; height: 31px;"><label for="ATTRIBUTE_02" class=" " style=";" id="JaszKVsV8vJVXscdSxYDNm2kHDgQHlOB"> <i class="required">*</i>巡察问题序号： </label> </td> 
     <td style="width:19%; height: 31px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="ATTRIBUTE_02" name="ATTRIBUTE_02" title="巡查问题序号" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_02"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; height: 31px;"><label for="ATTRIBUTE_03Name" class=" " style=";" id="Twdh8LSft9Ip66HkMCp7LnNe9MCoHAiN"> 代办人 </label> </td> 
     <td style="width:19%; height: 31px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="ATTRIBUTE_03" name="ATTRIBUTE_03" title="代办人" value="<c:out  value='${map["ATTRIBUTE_03"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="ATTRIBUTE_03Name" name="ATTRIBUTE_03Name" title="代办人" value="<c:out  value='${map["ATTRIBUTE_03Name"]}'/>"> 
       <span class="input-group-addon user-box-act" id="ATTRIBUTE_03Button"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_05" class=" " style=";display:none;" id="JQVxgR5FDcx63ySa1KEZNZ0hT3Pp4YEh"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_05" name="ATTRIBUTE_05" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_05"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_06" class=" " style=";display:none;" id="N7LkxvixKM411Y5ckBrM1tdtu6IEP7W7"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_06" name="ATTRIBUTE_06" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_06"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_07" class=" " style=";display:none;" id="Wk9fvlbctn2kaILMdFEHjp4kw1beOJk7"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_07" name="ATTRIBUTE_07" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_07"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_08" class=" " style=";display:none;" id="MbT35t6E9U33as1dWIXw6jaOLd1iK5MI"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_08" name="ATTRIBUTE_08" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_08"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_09" class=" " style=";display:none;" id="nMGlteCzJGjHdlC5T7TnEbmx5UmrAR8E"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_09" name="ATTRIBUTE_09" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_09"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_10" class=" " style=";display:none;" id="hfdPbbfiFBACc7Z5k39Nr8y5Puda23dD"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_10" name="ATTRIBUTE_10" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_10"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_11" class=" " style=";display:none;" id="tb25mlofWy0sPuzoEYPFtjHknDZZQJjS"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_11" name="ATTRIBUTE_11" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_11"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; height: 30px;"><label for="ATTRIBUTE_12" class=" " style=";display:none;" id="tu4XB0bGQB67AidWPHQ6HHbna3MgB7Xg"> 预留字段： </label> </td> 
     <td style="width:19%; height: 30px;"><p> </p> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_12" name="ATTRIBUTE_12" title="预留字段" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_12"]}'/>"> 
      </div><p></p></td> 
    </tr> 
    <tr></tr> 
   </tbody> 
  </table> 
  <p></p> 
  <p></p> 
  <p></p> 
  <p></p> 
 </div>
</div>
    </form>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="avicit/platform6/autocode/js/AutoCode.?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.j?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var attachBpmInfo = {

        delOrAdd : [],
        editSecret:[]
    }

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c91008188234d3401882394387d030b";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_TASK_CHECKLIST";
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
        id: id,
        baseUrl:_eform_base_url,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        entryId:entryId,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);
        $(function(){

        $("textarea.input-sm").each(function(e1,e2){
            var actualRows = $(e2).val().split("\n").length;
            var rows = $(e2).attr("rows");
            if(rows == "" || rows == undefined){
                rows = 1;
            }
            if(actualRows == "" || actualRows == undefined){
                actualRows = 1;
            }
            if(actualRows > rows){
                $(e2).attr("rows",actualRows);
            }
        });
        

$("#LIST_MAINLYCount").html((3000 - $('#LIST_MAINLY').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatLIST_MAINLYLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#MANIFEST_ISSUECount").html((3000 - $('#MANIFEST_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_ISSUELength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#MANIFEST_ISSUE_CONTCount").html((3000 - $('#MANIFEST_ISSUE_CONT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_ISSUE_CONTLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#MANIFEST_CAUSECount").html((3000 - $('#MANIFEST_CAUSE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_CAUSELength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#MANIFEST_MEASURECount").html((3000 - $('#MANIFEST_MEASURE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_MEASURELength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}





$('#MANIFEST_POSENName').on(' focus',function(e){

MANIFEST_POSENClickFun();
this.blur();
});

function MANIFEST_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'MANIFEST_POSEN',textFiled:'MANIFEST_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var MANIFEST_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(MANIFEST_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var MANIFEST_POSEN_selectedList = $('#MANIFEST_POSEN').val();
    var flag = true;
    if(secretLevelValue&&MANIFEST_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':MANIFEST_POSEN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "责任人" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});


    $(document).ready(function(){
$.ajax({
 url:"console/user/operation/Edit/"+$("#MANIFEST_POSEN").val(),
 type:"POST",
 dataType:"JSON",
 success:function(e){ 
 var values = $("#MANIFEST_POSENName").val() + "(" + e.consoleUser.deptName + ")";
 $("#MANIFEST_POSENName").val(values);
 }
});
});




$('#MANIFEST_LEADERSHIPName').on(' focus',function(e){

MANIFEST_LEADERSHIPClickFun();
this.blur();
});

function MANIFEST_LEADERSHIPClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'MANIFEST_LEADERSHIP',textFiled:'MANIFEST_LEADERSHIPName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var MANIFEST_LEADERSHIP_colSecret = $('#');
    var secretLevelValue;
    if(MANIFEST_LEADERSHIP_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var MANIFEST_LEADERSHIP_selectedList = $('#MANIFEST_LEADERSHIP').val();
    var flag = true;
    if(secretLevelValue&&MANIFEST_LEADERSHIP_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':MANIFEST_LEADERSHIP_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "责任领导" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});


    $(document).ready(function(){
$.ajax({
 url:"console/user/operation/Edit/"+$("#MANIFEST_LEADERSHIP").val(),
 type:"POST",
 dataType:"JSON",
 success:function(e){ 
 var values = $("#MANIFEST_LEADERSHIPName").val() + "(" + e.consoleUser.deptName + ")";
 $("#MANIFEST_LEADERSHIPName").val(values);
 }
});
});


$("#MANIFEST_ONE_ANDCount").html((3000 - $('#MANIFEST_ONE_AND').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_ONE_ANDLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}







            $('#MANIFEST_DATE_END').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#MANIFEST_DATE_END_button').click(function(event) {
			/* Act on the event */
	    			 $('#MANIFEST_DATE_END').datepicker('show');
			 $('#MANIFEST_DATE_END').datepicker().trigger('click');
					
		});
        

$("#MANIFEST_QIANCount").html((3000 - $('#MANIFEST_QIAN').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_QIANLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}









$('#ATTRIBUTE_03Name').on(' focus',function(e){

ATTRIBUTE_03ClickFun();
this.blur();
});

function ATTRIBUTE_03ClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'ATTRIBUTE_03',textFiled:'ATTRIBUTE_03Name',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var ATTRIBUTE_03_colSecret = $('#');
    var secretLevelValue;
    if(ATTRIBUTE_03_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var ATTRIBUTE_03_selectedList = $('#ATTRIBUTE_03').val();
    var flag = true;
    if(secretLevelValue&&ATTRIBUTE_03_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':ATTRIBUTE_03_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "代办人" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});





















        setTimeout(function(){
            $('.attachment_div').each(function (index, element) {
                var eventDiv =  $(element).find("div[id^='rt_rt_']");
                eventDiv.css("width", "101px");
                eventDiv.css("height", "32px");
            });
        }, 1000);

        if(fkcol.length!=0 && fkvalue.length!=0){
            if ($('#'+fkcol).length>0){
                $('#'+fkcol).val(fkvalue);
            }else{
                $fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
                $('#form').append($fk);
            }
        }

        $('.date-picker').on('keydown',nullInput);
        $('.time-picker').on('keydown',nullInput);

        if(type === "tree") {
            $("#" + parentNodeId).attr("readonly", "readonly");

            if(pNodeIdValue != null && pNodeIdValue != "") {
                $("#" + parentNodeId).val(pNodeIdValue);
            }
        }

        $(".ke-container").find(".ke-toolbar").css("display","none");

        $(".ke-container").css("border","0");
        $("input[type='hidden']").remove();
        $(".input-group-addon").remove();
        $(".ui-userdata").remove();
        jQuery(".datatable").jqGrid('setGridParam',{'cellEdit':false});

        setTimeout(function() {
            if (type == "print") {
                window.print();
            }else if(type == "export"){
                getpdf();
            }
            window.close();
        }, 1500);

        $('.spinner input').trigger("blur.spinner");

    });

    function getpdf(){
        var head = $('head').html();
        var body = document.getElementById('form').innerHTML;
        opener.htmltopdf(head,body);
    }

    function afterUploadEvent(){
    }

    //附件上传失败后执行
    function uploadError(file, reason){
    }

</script>

</html>