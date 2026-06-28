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
    <input id="tableId" value="DYN_BXWY_YBRX" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <span style="font-size: 24px; color: #ff0000;">补选委员预备人选请示</span> 
 </div>
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <table style="" id="frLyPVnvTFeSHp5K3wB7t8SA5PdVt0q8" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:25%;"></td> 
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
 <table style=" border: 1px solid; border-color: #ff0000;" id="gMD4dBwZMWgzcTSSbSDNOlx5cs5Gi8mE" border="1" bordercolor="#ff0000 " class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><label for="REQUST_DATE" class=" " style=";" id="ZgyU5a5V2skhqPXG9GaQOTRIsFmMJ5FK"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid #ff0000;"><label for="AUTO_CODE" class=" " style=";" id="jJcWLPUxkAXN95xXbtGftnh3DoRDqzLK"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:12%; border: 1px solid #ff0000;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><label for="USER_NAME" class=" " style=";" id="USER_NAMEEformLabel"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="1000" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid #ff0000;"><label for="DEPT_NAME" class=" " style=";" id="DEPT_NAMEEformLabel"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:12%; border: 1px solid #ff0000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="1000" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><label for="PARTY_NAME" class=" " style=";" id="PARTY_NAMEEformLabel"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:12%; text-align: right; border: 1px solid #ff0000;"><label for="PARTY_NAME_NEW" class=" " style=";" id="PARTY_NAME_NEWEformLabel"> <i class="required">*</i>选举党组织名称： </label> </td> 
    <td style="width:12%; border: 1px solid #ff0000;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" title="选举党组织名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME_NEW"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAME_NEWButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><label for="THREE_FOUR_NAME" class=" " style=";" id="THREE_FOUR_NAMEEformLabel"> <i class="required">*</i>支委会记录（工作部署）： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="THREE_FOUR_NAME" name="THREE_FOUR_NAME" title="三会一课名称" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2"><p><a id="ZWHJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a>提示：请先在"组织工作--党组织生活--三会一课"中填写支委会记录，然后在此处搜索、添加该记录</p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"支委会上传附件：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会上传附件： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div id="wnDQNOWk7eukMQVJGsg5v6hPPmENng62" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2"><p><a id="ZWHJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a>提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</p><p>1.支委会讨论补选委员记录</p><p>2.辞去委员的申请</p><p>3.委员增减名额的申请</p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><label for="SEL_USER" class=" " style=";" id="SEL_USEREformLabel"> <i class="required">*</i>党小组会/党员大会接收人： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="SEL_USER" name="SEL_USER" title="党小组会/党员大会接收人" maxlength="255" value="<c:out  value='${map["SEL_USER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="SEL_USERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2">提示：若为小组会请选择本支部全部党小组长，若为党员大会请选择组织委员。</td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"酝酿候选人初步人选记录：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 酝酿候选人初步人选记录： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div id="fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2"><p><a id="CBHXRJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a>提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</p><p>1.党小组酝酿补选委员会委员候选人初步人选记录</p><p>2.委员会（增）补选委员候选人初步人选推荐票</p><p></p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><label for="THREE_FOUR_NAME1" class=" " style=";" id="THREE_FOUR_NAME1EformLabel"> 支委会确定预备人选记录： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="THREE_FOUR_NAME1" name="THREE_FOUR_NAME1" title="三会一课名称1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME1"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAME1Button"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2"><p><a id="YBHXRJLXQ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a><span style="background-color: transparent;">提示：请先在"组织工作--党组织生活--三会一课"中填写支委会记录，然后在此处搜索、添加该记录</span></p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"支委会确定候选人预备人选：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会确定候选人预备人选： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div id="lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2"><p><a id="YBHXRJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a>提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</p><p>1.党支部委员会确定补选委员候选人预备人选记录</p><p>2.补选委员会会员候选人预备人选请示</p><p>3.基层党组织纪检委员人选资格审查</p></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:9%; text-align: right; border: 1px solid #ff0000;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"候选人预备人选批复：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 候选人预备人选批复： </label> </td> 
    <td style="width:16%; border: 1px solid #ff0000;"> 
     <div id="V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:25%; border: 1px solid #ff0000;" colspan="2"><a id="JGPF" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a>提示：请先填写"模版下载"中的相关文件，然后作为附件再上传。</td> 
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
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="SEL_USER_ID" name="SEL_USER_ID" title="所选人员id" maxlength="255" value="<c:out  value='${map["SEL_USER_ID"]}'/>"> 
 </div>
 <p></p>
 <p><span style="color: red;">&nbsp;</span></p>
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

<script src="avicit/eformmodule/form/BXWYYBRXQS/V1/bootstrap/bpm-layoutAdd1705371893000.js?_=1705371895960" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e3828f72f301829f2775892742";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_BXWY_YBRX";
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