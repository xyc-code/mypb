<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,noLoading-mask,tree";
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
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   选举大会及结果上报 
 </div>
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <table style="" id="XY1jHPP1DeLIoqCiME42yw5hCa3dnN0O" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:25%;"><a id="All" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="查看所有"> <span class="fa fa-fw fa-eye"></span> 查看所有 </a></td> 
     <td style="width:25%;"></td> 
     <td style="width:25%; text-align: right;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
     <td style="width:25%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="申请人电话：" maxlength="255" customset="true" value="<c:out  value='${map["TEL"]}'/>"> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <table style=" border: 1px solid;" id="ZUWdbS3TAbtNJIzgOYHPHa2Eeki0SxjI" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUST_DATE" class=" " style=";" id="Viep6ugIlJT7IsAedcWGNvET5W0ZqxIm"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="AUTO_CODE" class=" " style=";" id="hKeNZWEizpzuuHjO2G126dFwf3LVAI4H"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:16%; border: 1px solid; height: 30px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="USER_NAME" class=" " style=";" id="USER_NAMEEformLabel"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="1000" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="DEPT_NAME" class=" " style=";" id="DEPT_NAMEEformLabel"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:16%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="1000" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_NAME" class=" " style=";" id="PARTY_NAMEEformLabel"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:16%; border: 1px solid; height: 30px; text-align: right;"><label for="PARTY_NAME_NEW" class=" " style=";" id="PARTY_NAME_NEWEformLabel"> <i class="required">*</i>补选党组织名称： </label> </td> 
    <td style="width:16%; border: 1px solid; text-align: left; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" title="补选党组织名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME_NEW"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAME_NEWButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="THREE_FOUR_NAME" class=" " style=";" id="THREE_FOUR_NAMEEformLabel"> <i class="required">*</i>党员大会记录： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="THREE_FOUR_NAME" name="THREE_FOUR_NAME" title="三会一课名称" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div><a id="DYDHJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a></td> 
    <td style="width:31%; border: 1px solid; text-align: left; height: 30px;" colspan="2"><p><a id="DYDHJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-copy"></span> 模板下载 </a></p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"党员大会上传附件：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 党员大会上传附件： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div id="B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP" required class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:31%; border: 1px solid; text-align: left; height: 30px;" colspan="2"><p><span style="background-color: transparent;"><a id="DYDHJLL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-copy"></span> 模板下载 </a>提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</span></p><p>2.9党员大会选举记录</p><p>2.10党员大会补选委员选举办法</p><p>2.11党员大会补选委员主持词</p><p>2.12党员大会补选委员选票</p><p>2.13党员大会清点到会人数报告单</p><p>2.14党员大会清点选票报告单</p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="THREE_FOUR_NAME1" class=" " style=";" id="THREE_FOUR_NAME1EformLabel"> 支委会记录： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="THREE_FOUR_NAME1" name="THREE_FOUR_NAME1" title="三会一课名称1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME1"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAME1Button"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div><a id="WYHXQ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a></td> 
    <td style="width:31%; border: 1px solid; text-align: left; height: 30px;" colspan="2"><p> </p> 
     <div id="B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div><p></p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会上传附件： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div id="nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:31%; border: 1px solid; text-align: left; height: 30px;" colspan="2"><p><a id="WYHFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a><span style="background-color: transparent;">提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</span></p><p>2.15支委会讨论补选委员记录</p><p>2.16支委会书记选举办法</p><p>2.17支委会讨论补选委员主持词</p><p>2.18选举书记选票</p><p>2.19支委会清点选票报告单</p><p>2.20选举书记结果报告单</p><p></p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="ELECTION_TIME" class=" " style=";" id="ELECTION_TIMEEformLabel"> 召开党员大会时间: </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="召开党员大会时间:" class="form-control date-picker input-sm" style=";" id="ELECTION_TIME" name="ELECTION_TIME" value="${map['ELECTION_TIME']}" readonly> 
      <span id="ELECTION_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:31%; border: 1px solid; text-align: right; height: 30px;" colspan="2"></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_YINGGAI" class=" " style=";" id="PARTY_YINGGAIEformLabel"> 应参加有选举权人数： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="PARTY_YINGGAI" name="PARTY_YINGGAI" data-min="0" data-max="999999999999999" data-precision="0" title="应参加有选举权人数" maxlength="20" value="<c:out  value='${map["PARTY_YINGGAI"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:16%; border: 1px solid; text-align: right; height: 30px;"><label for="PARTY_SHIJI" class=" " style=";" id="PARTY_SHIJIEformLabel"> 实际参加有选举权人数： </label> </td> 
    <td style="width:16%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="PARTY_SHIJI" name="PARTY_SHIJI" data-min="0" data-max="999999999999999" data-precision="0" title="实际参加有选举权人数" maxlength="20" value="<c:out  value='${map["PARTY_SHIJI"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 选举结果： </label> </td> 
    <td style="width:50%; border: 1px solid; height: 30px;" colspan="3"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_SUB_ZBXDUDH_4" id="DYN_SUB_ZBXDUDH_4_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_SUB_ZBXDUDH_4" class="datatable eform_component" datapermission="eform_data_DYN_SUB_ZBXDUDH_4"></table> 
           <div id="DYN_SUB_ZBXDUDH_4Pager"></div> 
           <div id="DYN_SUB_ZBXDUDH_4Toolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_SUB_ZBXDUDH_4_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_SUB_ZBXDUDH_4_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_SUB_ZBXDUDH_4_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_SUB_ZBXDUDH_4_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_SUB_ZBXDUDH_4_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
            </div> 
            <div class="toolbar-right"> 
            </div> 
           </div> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table> <p>提示：填写时请按照人员姓氏笔画顺序进行填写，系统将按照您填写的序号进行排序！</p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid; height: 30px;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"选举结果批复：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 选举结果批复： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div id="Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:31%; border: 1px solid; text-align: left; height: 30px;" colspan="2"><p><a id="JGPF" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a><span style="background-color: transparent;">提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</span></p><p>2.21公司党委下发补选委员选举结果批复</p></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId" name="THREE_FOUR_ID" title="三会一课ID" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId1" name="THREE_FOUR_ID1" title="三会一课ID1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID1"]}'/>"> 
 </div>
 <p></p>
</div>
    </form>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
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
    var formInfoId = "948e83e3828f72f301829f47c39f515d";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_ZBXSP_DYDH";
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

        
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "All"){
		return;
	}
	if(operability){
		$("#All").show();
	}else{
		$("#All").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "All"){
return;
}
if(operability){
$("#All").css("display","inline-block");
}else{
$("#All").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#All').on('click',function(e){
            
$("#ZUWdbS3TAbtNJIzgOYHPHa2Eeki0SxjI>tbody").find("tr").each(function(){
$(this).show();
 
 if(parseInt($(this).index()) >= 6){
if(typeof floweditor == 'undefined' ){
 $(this).css('pointer-events','none')
 }
 
}

 
});
        });
        

    if(typeof customValidate != "undefined" && customValidate != null && customValidate != undefined){
        customValidate.put('TEL',/^[0-9]*$/);
    }


if ($("input[name='REQUST_DATE']").val()==''||$("input[name='REQUST_DATE']").val()==null||$("input[name='REQUST_DATE']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{date}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#REQUST_DATE").val(macoValue);
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('ZBXWYDYDH',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='AUTO_CODE']",window.pageParams.content||document).val();
		var flag = $("input[name='AUTO_CODE']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#AUTO_CODE").attr("initvalue");
		var valuePure = $("#AUTO_CODE").find("#autoCode").val();
		if (flag != "disabled" && window.AUTO_CODEautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=AUTO_CODE',
					type: 'POST',
					async:false,
					data: {
						autoCode: "ZBXWYDYDH",
						comId: comId,
						autoCodeValue: value,
						tablename:window.pageParams.tableName,
						tableId:dbtableid,
						idmap:idmap,
						datasourceId:window.pageParams.datasourceId,
						funcpara:undefined||"",
						valuepure:oldValue
					},
					dataType: 'json',
					success: function (backData, status) {
						if (backData.errorInfo){
							layer.alert(backData.errorInfo, {
								title: "提示",
								icon: 7
							});
							codeFlag = false;
						}else{
							//继续ajax请求，根据返回的code查询业务表，判断编码是否已经存在，如果存在，重新生成新的
							var validateCode = backData.value;
							$.ajax({
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=AUTO_CODE',
								type: 'POST',
								async:false,
								data: {
									autoCode: "ZBXWYDYDH",
									comId: comId,
									autoCodeValue: value,
									validateCode:validateCode,
									tablename:window.pageParams.tableName,
									tableId:dbtableid,
									idmap:idmap,
									datasourceId:window.pageParams.datasourceId,
									funcpara:undefined||"",
									valuepure:oldValue
								},
								dataType: 'json',
								success: function (result) {
									if(result.flag == "success"){
										formData["AUTO_CODE"] = result.value;
										$("input[name='AUTO_CODE']",window.pageParams.content||document).val(result.value);
										$("#AUTO_CODE").attr("initvalue",result.value);
									}else{
										layer.alert("自动编码保存错误！", {
											title: "提示",
											icon: 7
										});
										codeFlag = false;
									}
								},
								error: function(xhr,state,errorThrown){
									layer.alert("自动编码保存错误！", {
										title: "提示",
										icon: 7
									});
									codeFlag = false;
								}
							});
						
						}
					},
					error: function(xhr,state,errorThrown){
						layer.alert("自动编码保存错误！", {
							title: "提示",
							icon: 7
						});
						codeFlag = false;
					}
				});
			}else{
				delete formData["AUTO_CODE"];
				$("input[name='AUTO_CODE']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='AUTO_CODE']",window.pageParams.content||document).val();
		var require = $("#AUTO_CODE").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "AUTO_CODE"){
		return true;
	}
	var idJson = $.parseJSON(idmap);
	var comId = id;
	if (idJson.hasOwnProperty("")){
		comId = idJson[""];
	}

	if(!operability){
		setTimeout(function(){
			$("#" + tagId).find("input").attr("readonly");
			$("#" + tagId).find("#autoCode_edit").unbind("click");
		}, "500");
	}else{
			}
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "AUTO_CODE"){
		return;
	}
	if(operability){
		$("#AUTO_CODE").show();
	}else{
		$("#AUTO_CODE").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "AUTO_CODE"){
		return;
	}
	if (required){
		$("#AUTO_CODE").attr("required","required");
	}
});



if ($("input[name='USER_NAME']").val()==''||$("input[name='USER_NAME']").val()==null||$("input[name='USER_NAME']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{userName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#USER_NAME").val(macoValue);
}



if ($("input[name='DEPT_NAME']").val()==''||$("input[name='DEPT_NAME']").val()==null||$("input[name='DEPT_NAME']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#DEPT_NAME").val(macoValue);
}

    $(function(){
 
if(typeof(EformFlow) != "undefined"){

 EformFlow.prototype.afterControlFormInput=function(){
//debugger;
 $("#DYDHJL").show();
 $("#DYDHJLFJ").show();
 $("#WYHXQ").show(); 
 $("#WYHFJ").show();
 $("#JGPF").show();
 $("#THREE_FOUR_NAME").removeAttr("disabled");
 if(floweditor.flowModel.activityname == 'task1'){
 
 $("#ZUWdbS3TAbtNJIzgOYHPHa2Eeki0SxjI>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 5){
 $(this).hide();
 
 }
});
 }else{
 if(floweditor.flowModel.activityname == 'task2' || 
 floweditor.flowModel.activityname == 'task3'|| 
 floweditor.flowModel.activityname == 'task4'
 
 
 ){
 
 $("#ZUWdbS3TAbtNJIzgOYHPHa2Eeki0SxjI>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 10){
 $(this).hide();
 
 }
});
 }
 
 
 }
 
 
 
 };
}else{
 //$("#O94T8vVcyroCyXDCvtjgRGM3lTei8oNR>tbody>tr:eq(4)").hide();
 $("#ZUWdbS3TAbtNJIzgOYHPHa2Eeki0SxjI>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 5){
 $(this).hide();
 
 }
});

}




});







	PARTY_NAME_NEWDetailCol = 'PARTY_NAME_NEW';
	

function PARTY_NAME_NEWClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionarySelect",
	    	area: ['800px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowPARTY_NAME_NEW = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(PARTY_NAME_NEWDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "0"
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"党支部名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"PARTY_NAME","targetName":"PARTY_NAME_NEW","targetNameName":"补选党组织名称","display":"党支部名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME_NEW,this.getParamsValue,'','ZBXDUDH-PARTY_NAME_NEW',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
							var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
				var selectIds = dicJqGrid.jqGrid('getGridParam','selrow');
				if(selectIds != null && selectIds.length > 0){
					//var selectId = selectIds[0];
					rowData = dicJqGrid.jqGrid("getRowData",selectIds);
					selectRows.push(rowData);

					
					//回填表单数据
					for(var i=0; i< iframeWin.mapping.length; i++){
						var mapVer = iframeWin.mapping[i];

			            var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
				        if(hashInputCalss){
							$("#"+mapVer.targetName).val(eval("rowData."+ mapVer.name));
			            }else{
							$("#"+mapVer.targetName).find("input").val(eval("rowData."+ mapVer.name));
						}

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == eval("rowData."+ mapVer.name)){
									$(this).prop('checked',true);
								}
							});
						}
						$("#"+mapVer.targetName).blur();

						if(PARTY_NAME_NEWDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#PARTY_NAME_NEW").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function PARTY_NAME_NEWDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#PARTY_NAME_NEW')
	.on(' focus',function(e){
	PARTY_NAME_NEWClickFun();
	this.blur();
});

/*
$('#PARTY_NAME_NEWButton').on('click',function(e){
	PARTY_NAME_NEWClickFun();
	this.blur();
});

$('#PARTY_NAME_NEWButton').click(function(event) {
   $('#PARTY_NAME_NEW').trigger('focus');
});*/






	THREE_FOUR_NAMEDetailCol = 'THREE_FOUR_NAME';
	

function THREE_FOUR_NAMEClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionarySelect",
	    	area: ['800px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowTHREE_FOUR_NAME = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(THREE_FOUR_NAMEDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "0"
                , "20","select * from DYN_THREE_FOUR t order by MEET_DATE desc",'[{"label":"会议时间","width":"50","align":"center","orderBy":"","name":"MEET_DATE"},{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_DATE","targetName":"","targetNameName":"","display":"会议时间","transform":"","lookupType":"","filter":false},{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME","targetNameName":"三会一课名称","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId","targetNameName":"三会一课ID","display":"三会一课ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME,this.getParamsValue,'','ZBXDUDH-THREE_FOUR_NAME',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
							var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
				var selectIds = dicJqGrid.jqGrid('getGridParam','selrow');
				if(selectIds != null && selectIds.length > 0){
					//var selectId = selectIds[0];
					rowData = dicJqGrid.jqGrid("getRowData",selectIds);
					selectRows.push(rowData);

					
					//回填表单数据
					for(var i=0; i< iframeWin.mapping.length; i++){
						var mapVer = iframeWin.mapping[i];

			            var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
				        if(hashInputCalss){
							$("#"+mapVer.targetName).val(eval("rowData."+ mapVer.name));
			            }else{
							$("#"+mapVer.targetName).find("input").val(eval("rowData."+ mapVer.name));
						}

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == eval("rowData."+ mapVer.name)){
									$(this).prop('checked',true);
								}
							});
						}
						$("#"+mapVer.targetName).blur();

						if(THREE_FOUR_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#THREE_FOUR_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function THREE_FOUR_NAMEDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#THREE_FOUR_NAME')
	.on(' focus',function(e){
	THREE_FOUR_NAMEClickFun();
	this.blur();
});

/*
$('#THREE_FOUR_NAMEButton').on('click',function(e){
	THREE_FOUR_NAMEClickFun();
	this.blur();
});

$('#THREE_FOUR_NAMEButton').click(function(event) {
   $('#THREE_FOUR_NAME').trigger('focus');
});*/



workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYDHJL"){
		return;
	}
	if(operability){
		$("#DYDHJL").show();
	}else{
		$("#DYDHJL").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "DYDHJL"){
return;
}
if(operability){
$("#DYDHJL").css("display","inline-block");
}else{
$("#DYDHJL").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#DYDHJL').on('click',function(e){
            
//window.open('http://20.14.3.99:8080/pb/platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=948e83e37f9bac42017fdeb5434239db');
if($("#threeFourId")){
 var threeFourId = $("#threeFourId").val();
if(threeFourId != ""){
 
 layer.open({ 
		type: 2, 
		area: ['100%', '100%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=' + threeFourId
	}); 
 
 }

 
 }

        });
        
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYDHJLFJ"){
		return;
	}
	if(operability){
		$("#DYDHJLFJ").show();
	}else{
		$("#DYDHJLFJ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "DYDHJLFJ"){
return;
}
if(operability){
$("#DYDHJLFJ").css("display","inline-block");
}else{
$("#DYDHJLFJ").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#DYDHJLFJ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3857584e10185aa58135b6a18'
	});

        });
        


attachBpmId =   null  ;

var fileformValue = id;


$('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).attr("disabled","disabled");
                });
            }
        }
    },
    
    //设计器参数
    saveType: 'DataBase',
    expand: true == true ? true : false,
    multiple: true == true ? true : false,
    allowDownload: true == true ? true : false,
    allowAdd: true == true ? true : false,
    allowDelete: true == true ? true : false,
    allowEncry: false == true ? true : false,
        allowSameName: false == true ? true : false,
    collapsible: true == true ? true : false,
    fileNumLimit: 10,
    fileSizeLimit: '0',
    formSecret: '',
    accept:
                    ''
        });


workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP"){
        return;
    }

    if (required){
        $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").attr("required","required");
   }else{
        $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").removeAttr("required");
        $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").attr("required");
    var bpmRequire = $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP"){
        return;
    }
    if(operability){
        $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").show();
    }else{
        $("#B7xZzEy6br0BgYiwYxxL5kILLZsYwhRP").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYDHJLL"){
		return;
	}
	if(operability){
		$("#DYDHJLL").show();
	}else{
		$("#DYDHJLL").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "DYDHJLL"){
return;
}
if(operability){
$("#DYDHJLL").css("display","inline-block");
}else{
$("#DYDHJLL").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#DYDHJLL').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e390edf5460190f2cc7d03252f'
	});

        });
        



	THREE_FOUR_NAME1DetailCol = 'THREE_FOUR_NAME1';
	

function THREE_FOUR_NAME1ClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionarySelect",
	    	area: ['800px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowTHREE_FOUR_NAME1 = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(THREE_FOUR_NAME1DetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "0"
                , "20","select * from DYN_THREE_FOUR t order by MEET_DATE desc",'[{"label":"会议时间","width":"50","align":"center","orderBy":"","name":"MEET_DATE"},{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID1","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_DATE","targetName":"","targetNameName":"","display":"会议时间","transform":"","lookupType":"","filter":false},{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME1","targetNameName":"三会一课名称1","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId1","targetNameName":"三会一课ID1","display":"三会一课ID1","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME1,this.getParamsValue,'','ZBXDUDH-THREE_FOUR_NAME1',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
							var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
				var selectIds = dicJqGrid.jqGrid('getGridParam','selrow');
				if(selectIds != null && selectIds.length > 0){
					//var selectId = selectIds[0];
					rowData = dicJqGrid.jqGrid("getRowData",selectIds);
					selectRows.push(rowData);

					
					//回填表单数据
					for(var i=0; i< iframeWin.mapping.length; i++){
						var mapVer = iframeWin.mapping[i];

			            var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
				        if(hashInputCalss){
							$("#"+mapVer.targetName).val(eval("rowData."+ mapVer.name));
			            }else{
							$("#"+mapVer.targetName).find("input").val(eval("rowData."+ mapVer.name));
						}

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == eval("rowData."+ mapVer.name)){
									$(this).prop('checked',true);
								}
							});
						}
						$("#"+mapVer.targetName).blur();

						if(THREE_FOUR_NAME1DetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#THREE_FOUR_NAME1").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function THREE_FOUR_NAME1Detail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#THREE_FOUR_NAME1')
	.on(' focus',function(e){
	THREE_FOUR_NAME1ClickFun();
	this.blur();
});

/*
$('#THREE_FOUR_NAME1Button').on('click',function(e){
	THREE_FOUR_NAME1ClickFun();
	this.blur();
});

$('#THREE_FOUR_NAME1Button').click(function(event) {
   $('#THREE_FOUR_NAME1').trigger('focus');
});*/



workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "WYHXQ"){
		return;
	}
	if(operability){
		$("#WYHXQ").show();
	}else{
		$("#WYHXQ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "WYHXQ"){
return;
}
if(operability){
$("#WYHXQ").css("display","inline-block");
}else{
$("#WYHXQ").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#WYHXQ').on('click',function(e){
            
//window.open('http://20.14.3.99:8080/pb/platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=948e83e37f9bac42017fdeb5434239db');
if($("#threeFourId1")){
 var threeFourId1 = $("#threeFourId1").val();
if(threeFourId1 != ""){
 
 layer.open({ 
		type: 2, 
		area: ['100%', '100%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=' + threeFourId1
	}); 
 
 }

 
 }

        });
        
attachBpmId =   null  ;

var fileformValue = id;


$('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).attr("disabled","disabled");
                });
            }
        }
    },
    
    //设计器参数
    saveType: 'DataBase',
    expand: true == true ? true : false,
    multiple: true == true ? true : false,
    allowDownload: true == true ? true : false,
    allowAdd: true == true ? true : false,
    allowDelete: true == true ? true : false,
    allowEncry: false == true ? true : false,
        allowSameName: false == true ? true : false,
    collapsible: true == true ? true : false,
    fileNumLimit: 10,
    fileSizeLimit: '0',
    formSecret: '',
    accept:
                    ''
        });


workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd"){
        return;
    }

    if (required){
        $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").attr("required","required");
   }else{
        $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").removeAttr("required");
        $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").attr("required");
    var bpmRequire = $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd"){
        return;
    }
    if(operability){
        $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").show();
    }else{
        $("#B6wJILIqSvPlDYGcie9ptjA3ic1XaxAd").hide();
    }
});



attachBpmId =   null  ;

var fileformValue = id;


$('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).attr("disabled","disabled");
                });
            }
        }
    },
    
    //设计器参数
    saveType: 'DataBase',
    expand: true == true ? true : false,
    multiple: true == true ? true : false,
    allowDownload: true == true ? true : false,
    allowAdd: true == true ? true : false,
    allowDelete: true == true ? true : false,
    allowEncry: false == true ? true : false,
        allowSameName: false == true ? true : false,
    collapsible: true == true ? true : false,
    fileNumLimit: 10,
    fileSizeLimit: '0',
    formSecret: '',
    accept:
                    ''
        });


workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj"){
        return;
    }

    if (required){
        $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").attr("required","required");
   }else{
        $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").removeAttr("required");
        $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").attr("required");
    var bpmRequire = $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj"){
        return;
    }
    if(operability){
        $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").show();
    }else{
        $("#nqnkayJSMtghUPHy2r3wLaUu1XeXHvlj").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "WYHFJ"){
		return;
	}
	if(operability){
		$("#WYHFJ").show();
	}else{
		$("#WYHFJ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "WYHFJ"){
return;
}
if(operability){
$("#WYHFJ").css("display","inline-block");
}else{
$("#WYHFJ").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#WYHFJ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3857584e10185aa75a7e4787c'
	});

        });
        



            $('#ELECTION_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#ELECTION_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#ELECTION_TIME').datepicker('show');
			 $('#ELECTION_TIME').datepicker().trigger('click');
					
		});
        

$('#PARTY_YINGGAI').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PARTY_YINGGAI').trigger('click');
});

$("#PARTY_YINGGAI").on("keyup",function(){
    if($("#PARTY_YINGGAI").val()>999999999999999){
        $("#PARTY_YINGGAI").val(999999999999999);
        layer.msg("应参加有选举权人数最大值为\""+999999999999999+"\"");
    }
});


$('#PARTY_SHIJI').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PARTY_SHIJI').trigger('click');
});

$("#PARTY_SHIJI").on("keyup",function(){
    if($("#PARTY_SHIJI").val()>999999999999999){
        $("#PARTY_SHIJI").val(999999999999999);
        layer.msg("实际参加有选举权人数最大值为\""+999999999999999+"\"");
    }
});



var DYN_SUB_ZBXDUDH_4TabInitFlag = false;

											
var dataGridColModel_DYN_SUB_ZBXDUDH_4 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'序号', name: 'SN', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  		  ,{ label:'姓名', name:'NAME', width:20,
		  		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
      queryStatement:"select t.name,t.USER_ID,t.SEX,t.BIRTHDAY,t.POST,t.PROFESSIONAL_RANK,t.JOIN_PARTY,t.WORK_TIME,t.BRANCH_POST from PARTY_MEMBER_ORGANIZATION_VIEW t",
      dataGridColModel:'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"性别","width":"50","align":"center","orderBy":"2","name":"SEXName"},{"label":"出生日期","width":"50","align":"center","orderBy":"3","name":"BIRTHDAY"},{"label":"职务","width":"50","align":"center","orderBy":"4","name":"POST"},{"label":"职称","width":"50","align":"center","orderBy":"5","name":"PROFESSIONAL_RANK"},{"label":"入党时间","width":"50","align":"center","orderBy":"6","name":"JOIN_PARTY"},{"label":"参加工作时间","width":"50","align":"center","orderBy":"7","name":"WORK_TIME"}]',
      mapping:'[{"name":"WORK_TIME","targetName":"TIME_WORK","targetNameName":"参加工作时间","display":"参加工作时间","transform":"","lookupType":"","filter":false},{"name":"JOIN_PARTY","targetName":"TIME_JOIN","targetNameName":"入党时间","display":"入党时间","transform":"","lookupType":"","filter":false},{"name":"PROFESSIONAL_RANK","targetName":"PRO_TITLE","targetNameName":"职称","display":"职称","transform":"","lookupType":"","filter":false},{"name":"POST","targetName":"POST","targetNameName":"职务","display":"职务","transform":"","lookupType":"","filter":false},{"name":"BIRTHDAY","targetName":"BIRTHDAY","targetNameName":"出生日期","display":"出生日期","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"NAME","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"SEXName","targetName":"GENDER","targetNameName":"性别","display":"性别","transform":"7","lookupType":"PLATFORM_SEX","filter":false}]',
      jsSuccess:'',
      jsBefore:'',
      jsAfter:'',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'N',
      isMuti:'N',
      inputChk:'N',
      dicUniqueCode:'ZBXDUDH-DYN_SUB_ZBXDUDH_4-NAME'}}
                       ,{ label:'性别', name: 'GENDER', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  		  ,{ label:'委员分工', name:'DIVISION_LABOR', width:20,
		  		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
      queryStatement:"select name from HJ_DYDH_WYFG order by XH",
      dataGridColModel:'[{"label":"委员分工","width":"50","align":"center","orderBy":"","name":"NAME"}]',
      mapping:'[{"name":"NAME","targetName":"DIVISION_LABOR","targetNameName":"委员分工","display":"委员分工","transform":"","lookupType":"","filter":false}]',
      jsSuccess:'',
      jsBefore:'',
      jsAfter:'',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'Y',
      isMuti:'Y',
      inputChk:'N',
      dicUniqueCode:'ZBXDUDH-DYN_SUB_ZBXDUDH_4-DIVISION_LABOR'}}
                       ,{ label:'出生日期', name: 'BIRTHDAY', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'职务', name: 'POST', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'职称', name: 'PRO_TITLE', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'入党时间', name: 'TIME_JOIN', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'参加工作时间', name: 'TIME_WORK', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'得票数', name:'NUMBER_VOTES', width:20,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(0) ) {
							layer.msg('子表列【得票数】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	     ]

var extraParamDYN_SUB_ZBXDUDH_4 = '{}';


DYN_SUB_ZBXDUDH_4UpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                                                    if (typeof colname=="undefined" || colname == "" || colname === "NUMBER_VOTES" ){
				                }
    };

if (window.DYN_SUB_ZBXDUDH_4_comid == null || window.DYN_SUB_ZBXDUDH_4_comid == undefined || window.DYN_SUB_ZBXDUDH_4_comid == '') {
	window.DYN_SUB_ZBXDUDH_4_comid = id;
}

$('#DYN_SUB_ZBXDUDH_4').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_SUB_ZBXDUDH_4',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_SUB_ZBXDUDH_4_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"948e83e3828f72f301829f47c39f515d",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_SUB_ZBXDUDH_4,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_SUB_ZBXDUDH_4norecords").hide();//隐藏提示信息
    $("#DYN_SUB_ZBXDUDH_4Pager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_SUB_ZBXDUDH_4').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_SUB_ZBXDUDH_4norecords").html() == null) {
            $('#DYN_SUB_ZBXDUDH_4').parent().append("<div class='no_data' style='display: none' id='DYN_SUB_ZBXDUDH_4norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_SUB_ZBXDUDH_4').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_SUB_ZBXDUDH_4norecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_SUB_ZBXDUDH_4norecords img").css("width","120px");
        }else{
            $("#DYN_SUB_ZBXDUDH_4norecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_SUB_ZBXDUDH_4norecords").show();//显示提示信息
        $("#DYN_SUB_ZBXDUDH_4Pager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_SUB_ZBXDUDH_4').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_SUB_ZBXDUDH_4norecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_SUB_ZBXDUDH_4norecords img").css("width","120px");
	}else{
		$("#DYN_SUB_ZBXDUDH_4norecords img").css("width",(height/1.9)+"px");
	}
														},


beforeEditCell:function(){
	$(".datatable").not("#DYN_SUB_ZBXDUDH_4").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_SUB_ZBXDUDH_4Reload = function(){
	var _isInvalid = true;
	$("#DYN_SUB_ZBXDUDH_4").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_SUB_ZBXDUDH_4TabInitFlag = true;
	$('#DYN_SUB_ZBXDUDH_4').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_SUB_ZBXDUDH_4TabReload = function(forceFlag){
	if(!DYN_SUB_ZBXDUDH_4TabInitFlag  || forceFlag){
		DYN_SUB_ZBXDUDH_4Reload();
	}

}


$('#DYN_SUB_ZBXDUDH_4').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_SUB_ZBXDUDH_4').append($('#DYN_SUB_ZBXDUDH_4Toolbar'));

    
    
    
    
    
    
    
    
    
    
    


                                    
DYN_SUB_ZBXDUDH_4Reload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_SUB_ZBXDUDH_4 = 0;
var newRowStart_DYN_SUB_ZBXDUDH_4 = "new_row";


/**
 * 添加页面
 */
insertTableDYN_SUB_ZBXDUDH_4 = function(){
	$('#DYN_SUB_ZBXDUDH_4').jqGrid('endEditCell');
	$("#DYN_SUB_ZBXDUDH_4norecords").hide();//隐藏提示信息
	$("#DYN_SUB_ZBXDUDH_4Pager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_SUB_ZBXDUDH_4 + newRowIndex_DYN_SUB_ZBXDUDH_4;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																																				},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_SUB_ZBXDUDH_4').jqGrid('addRow', parameters);
	newRowIndex_DYN_SUB_ZBXDUDH_4++;  
};



/**
 * 删除
 */
deleteTableDYN_SUB_ZBXDUDH_4 = function(){
	var rows = [];
	rows = $('#DYN_SUB_ZBXDUDH_4').jqGrid('getGridParam','selarrrow');


	$('#DYN_SUB_ZBXDUDH_4').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_SUB_ZBXDUDH_4').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_SUB_ZBXDUDH_4',
					data: {ids : ids.join(','),formInfoId:'948e83e3828f72f301829f47c39f515d',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_SUB_ZBXDUDH_4').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_SUB_ZBXDUDH_4').setGridWidth(700);
$('#DYN_SUB_ZBXDUDH_4').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_SUB_ZBXDUDH_4_insertBtn').bind('click',function(){
	insertTableDYN_SUB_ZBXDUDH_4();
});

//按钮绑定事件
$('#DYN_SUB_ZBXDUDH_4_deleteBtn').bind('click',function(){
	deleteTableDYN_SUB_ZBXDUDH_4();
});

//自定义按钮绑定事件
																//列onchange事件
											

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZBXDUDH_4_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_SUB_ZBXDUDH_4_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_SUB_ZBXDUDH_4_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_SUB_ZBXDUDH_4_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_SUB_ZBXDUDH_4_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZBXDUDH_4_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_ZBXDUDH_4_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_SUB_ZBXDUDH_4_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZBXDUDH_4_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_ZBXDUDH_4_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_SUB_ZBXDUDH_4_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_SUB_ZBXDUDH_4_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_SUB_ZBXDUDH_4').validateJqGrid("validate");
});

$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","SN","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","SN","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","NAME","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","NAME","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","GENDER","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","GENDER","maxlength",{maxlength:255});
				$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
				$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","DIVISION_LABOR","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","BIRTHDAY","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","BIRTHDAY","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","POST","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","POST","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","PRO_TITLE","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","PRO_TITLE","maxlength",{maxlength:255});
				$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","TIME_JOIN","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","TIME_WORK","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","TIME_WORK","maxlength",{maxlength:255});
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","NUMBER_VOTES","required");
		$('#DYN_SUB_ZBXDUDH_4').validateJqGrid("addValidate","NUMBER_VOTES","maxlength",{maxlength:38});
		



attachBpmId =   null  ;

var fileformValue = id;


$('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).attr("disabled","disabled");
                });
            }
        }
    },
    
    //设计器参数
    saveType: 'DataBase',
    expand: true == true ? true : false,
    multiple: true == true ? true : false,
    allowDownload: true == true ? true : false,
    allowAdd: true == true ? true : false,
    allowDelete: true == true ? true : false,
    allowEncry: false == true ? true : false,
        allowSameName: false == true ? true : false,
    collapsible: true == true ? true : false,
    fileNumLimit: 10,
    fileSizeLimit: '0',
    formSecret: '',
    accept:
                    ''
        });


workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k"){
        return;
    }

    if (required){
        $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").attr("required","required");
   }else{
        $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").removeAttr("required");
        $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").attr("required");
    var bpmRequire = $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k"){
        return;
    }
    if(operability){
        $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").show();
    }else{
        $("#Ft1hA1I8NlsHqyqEgl7GkBCaJUnIdm6k").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "JGPF"){
		return;
	}
	if(operability){
		$("#JGPF").show();
	}else{
		$("#JGPF").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "JGPF"){
return;
}
if(operability){
$("#JGPF").css("display","inline-block");
}else{
$("#JGPF").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#JGPF').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3857584e10185aa58bcfa6a1d'
	});

        });
            if(typeof EformFlow == 'undefined'){
 var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
console.log(userId);
avicAjax.ajax({
		 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getPartyMemberOrganization",
		 data : {userId:userId},
		 type : 'post',
		 dataType : 'json',

		 success : function(r){
			 if (r.flag == "success"){
				if(r.PARTY_NAME){
 $("#PARTY_NAME").val(r.PARTY_NAME);
 
 
 
 }
 if(r.PARTY_ID){
 
 $("#PARTY_ID").val(r.PARTY_ID);
 
 
 }
			 }else{
				
			 } 
		 }
	 });
 }


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