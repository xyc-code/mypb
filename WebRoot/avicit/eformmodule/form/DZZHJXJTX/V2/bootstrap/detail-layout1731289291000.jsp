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
    <input id="tableId" value="DYN_HUANJIE_TIXING" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <span style="color: #ff0000;">换届提醒通知</span> 
 </div>
 <table style=" border: 1px solid;" border="1" id="Sx8IG6scijHQJcdbMBDDSrE80rWQRPsx" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUST_DATE" class=" " style="color:#ff0000;;" id="REQUST_DATEEformLabel"> <i class="required">*</i>申请日期 </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="AUTO_CODE" class=" " style="color:#ff0000;;" id="F3F02MeX5uIzT77eUmOVq74kQAMj44Kg"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="USER_NAME" class=" " style="color:#ff0000;;" id="qJZ34RxUvOu3Gz57UckohTBI8mlpDJvF"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="1000" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="DEPT_NAME" class=" " style="color:#ff0000;;" id="Sq6Ajr974uGiqBG7UXrRyKktbQGmSdWT"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="TEL" class=" " style="color:#ff0000;;" id="TELEformLabel"> <i class="required">*</i>联系电话: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话" maxlength="255" value="<c:out  value='${map["TEL"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"></td> 
    <td style="width:18%; border: 1px solid; height: 30px;"></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_NAME" class=" " style="color:#ff0000;;" id="LgPwJcOmHbLwZdEwCYXbbwmwiLbEM6qZ"> <i class="required">*</i>换届党组织名称： </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME" name="PARTY_NAME" title="换届党支部名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_TYPE" class=" " style="color:#ff0000;;" id="PARTY_TYPEEformLabel"> <i class="required">*</i>党组织类型： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required readonly id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" initvalue="<c:out  value='${map["PARTY_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="CREA_TIME" class=" " style="color:#ff0000;;" id="CREA_TIMEEformLabel"> 上届换届时间: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="上届换届时间" class="form-control date-picker input-sm" style=";" id="CREA_TIME" name="CREA_TIME" value="${map['CREA_TIME']}" readonly> 
      <span id="CREA_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="DUE_TIME1" class=" " style="color:#ff0000;;" id="OWvZoePhq34NiRtx8anNFr8Zd5cOBjKT"> <i class="required">*</i>任期届满时间： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="任期届满时间" class="form-control date-picker input-sm" style=";" required id="DUE_TIME1" name="DUE_TIME1" value="${map['DUE_TIME1']}" readonly> 
      <span id="DUE_TIME1_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="TJHJ_TIME" class=" " style="color:#ff0000;;" id="TJHJ_TIMEEformLabel"> 提交换届请示时间: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="提交换届请示时间" class="form-control date-picker input-sm" style=";" id="TJHJ_TIME" name="TJHJ_TIME" value="${map['TJHJ_TIME']}" readonly> 
      <span id="TJHJ_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="TJYBRX_TIME" class=" " style="color:#ff0000;;" id="TJYBRX_TIMEEformLabel"> 提交预备人选请示时间: </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="提交预备人选请示时间" class="form-control date-picker input-sm" style=";" id="TJYBRX_TIME" name="TJYBRX_TIME" value="${map['TJYBRX_TIME']}" readonly> 
      <span id="TJYBRX_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="请选择" class=" " style="color:#ff0000;;" id="请选择EformLabel"> 召开党员大会选举时间: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="召开党员大会选举时间" class="form-control date-picker input-sm" style=";" id="ZKDYDH_TIME" name="ZKDYDH_TIME" value="${map['ZKDYDH_TIME']}" readonly> 
      <span id="ZKDYDH_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:18%; border: 1px solid; height: 30px; text-align: left;"><p style="text-align: right;"><label for="请选择" class=" " style="color:#ff0000;;" id="请选择EformLabel"> 换届选举工作报告和党费收支报告： </label> <span style="background-color: transparent; color: #0000ff;"></span></p></td> 
    <td style="width:18%; border: 1px solid; height: 30px; text-align: left;"><p style="text-align: justify;"><a id="HJTX" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a><em></em></p><p style="text-align: justify;"><span style="color: #007fcc;">提示：请先起草"模版下载"相关文件，待进入"预备人选请示"流程</span></p><p style="text-align: justify;"><span style="color: #007fcc;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 时,根据提示再提交。</span></p><p><span style="color: #007fcc;">&nbsp;</span></p><p><span style="color: #007fcc;">1.6委员会工作报告</span></p><p><span style="color: #007fcc;">1.7党费和党建活动经费收支使用情况报告</span></p><p><span style="color: #007fcc;">3.25纪委工作报告</span></p></td> 
   </tr> 
   <tr style="height: 66px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 66px;"><label for="请选择" class=" " style="color:#ff0000;;" id="请选择EformLabel"> 换届选举要求： </label> </td> 
    <td style="width:58%; border: 1px solid; height: 66px;" colspan="3"><p><span style="color: #007fcc; font-family: 宋体;">1.换届提醒通知根据公司《关于基层党组织按期换届提醒督促机制的通知》（东安党委〔2019〕41号）和《基层党组织工作细则》(第4版)提出。</span></p><p><span style="font-family: 宋体; color: #007fcc;">2.党组织任期届满前，请主动逐级与上级党组织、公司党委沟通换届情况。</span></p><p><span style="font-family: 宋体; color: #007fcc;">3.如有特殊情况不能按期换届的，应提前向公司党委提出请示，未经批准的，不得延期或提前换届。</span></p></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
</div>
    </form>
</div>
<div class="contextMenu" id="eform-tab-menu">
    <ul>
        <li id="eform-refresh">刷新</li>
    </ul>
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

<script src="avicit/eformmodule/form/DZZHJXJTX/V2/bootstrap/detail-layout1731289291000.js?_=1782453565530" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e3828ad2be01828c031c280fd5";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_HUANJIE_TIXING";
    var entryId = '${entryId}';
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
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        baseUrl:_eform_base_url,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);
</script>
</body>
</html>