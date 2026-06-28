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
    <input id="tableId" value="DYN_ACT_TRANSFER" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   积极分子关系转移 
 </div>
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <table style="" id="m7iwKzme2iWk3FG1skCn3CNaUQiuLFJv" height="31" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:30%;"></td> 
     <td style="width:32%;"></td> 
     <td style="width:14%; text-align: right;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>上报人电话： </label> </td> 
     <td style="width:22%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话：" maxlength="255" value="<c:out  value='${map["TEL"]}'/>"> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <table style=" border: 1px solid;" id="lNLrOxqzGhO78DCfdZDhNFUrNSvsTifT" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_USER" class=" " style=";" id="InQPBWiJCE0xWHIeTMoupiSGaH7101cT"> <i class="required">*</i>上报人： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_USER" name="REQUEST_USER" readonly title="上报人" maxlength="1000" value="<c:out  value='${map["REQUEST_USER"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_DEPT" class=" " style=";" id="yrV5CSphbgOTQOYai38zxaErWOfPNdMt"> <i class="required">*</i>上报部门： </label> </td> 
    <td style="width:25%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DEPT" name="REQUEST_DEPT" readonly title="上报部门" maxlength="1000" value="<c:out  value='${map["REQUEST_DEPT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 46px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 46px;"><label for="REQUEST_DATE" class=" " style=";" id="A59IvSQvDW3pBAnMMaujoFmwykJ3FDNy"> <i class="required">*</i>上报日期： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 46px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="上报日期" maxlength="1000" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:25%; border: 1px solid; height: 46px;"><p style="text-align: right;"><label for="AUTO_CODE" class=" " style=";" id="AUTO_CODEEformLabel"> <i class="required">*</i>表单编号： </label> </p></td> 
    <td style="width:25%; border: 1px solid; height: 46px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="自动编码" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 46px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 46px;"><label for="PARTY_NAME" class=" " style=";" id="PARTY_NAMEEformLabel"> <i class="required">*</i>所在党支部： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 46px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="所在党支部:" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:25%; border: 1px solid; text-align: right; height: 46px;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>目的支部： </label> </td> 
    <td style="width:25%; border: 1px solid; height: 46px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="P_IN_PARTY_ORG" name="P_IN_PARTY_ORG" title="目的支部" maxlength="255" value="<c:out  value='${map["P_IN_PARTY_ORG"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="P_IN_PARTY_ORGButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 57px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 57px;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>转出类别： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 57px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="P_TRANSFER_TYPE" title="转出类别" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="P_TRANSFER_TYPE1" name="P_TRANSFER_TYPE" title="转出类别" value="0" required <c:if test="${map['P_TRANSFER_TYPE'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />内部调动 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="P_TRANSFER_TYPE2" name="P_TRANSFER_TYPE" title="转出类别" value="1" required <c:if test="${map['P_TRANSFER_TYPE'] eq '1'}">checked="true"</c:if> />外部转出 </label> 
     </div></td> 
    <td style="width:25%; text-align: right; border: 1px solid; height: 57px;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"p_in_dept_ids","labelname":"目的部门：","labeltype":"dept-box","ischuantou":"","colisvisible":"y","colismust":"n","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="P_IN_DEPT_IDSName" class=" " style=";" id="P_IN_DEPT_IDSEformLabel"> 目的部门： </label> </td> 
    <td style="width:25%; border: 1px solid; height: 57px;"><p> </p> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="P_IN_DEPT_IDS" name="P_IN_DEPT_IDS" title="目的部门：" value="<c:out  value='${map["P_IN_DEPT_IDS"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="P_IN_DEPT_IDSName" name="P_IN_DEPT_IDSName" title="目的部门：" value="<c:out  value='${map["P_IN_DEPT_IDSName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="P_IN_DEPT_IDSButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> <p></p><p> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="OUT_DEPT_NAME" name="OUT_DEPT_NAME" title="外部转出部门" maxlength="255" value="<c:out  value='${map["OUT_DEPT_NAME"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr style="height: 102px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 102px;"><label for="DYN_AOT_MEMBER" class=" " style=";" id="DYN_AOT_MEMBEREformLabel"> 积极分子信息： </label> </td> 
    <td style="width:68%; border: 1px solid; height: 102px;" colspan="3"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_AOT_MEMBER" id="DYN_AOT_MEMBER_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_AOT_MEMBER" class="datatable eform_component" datapermission="eform_data_DYN_AOT_MEMBER"></table> 
           <div id="DYN_AOT_MEMBERPager"></div> 
           <div id="DYN_AOT_MEMBERToolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_AOT_MEMBER_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_AOT_MEMBER_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_AOT_MEMBER_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_AOT_MEMBER_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_AOT_MEMBER_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
            </div> 
            <div class="toolbar-right"> 
            </div> 
           </div> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table> <p>提示：目的支部及目的部门均相同的人，方可用一条流程转出！</p></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="P_IN_PARTY_ORG_ID" name="P_IN_PARTY_ORG_ID" title="目的支部ID" maxlength="255" value="<c:out  value='${map["P_IN_PARTY_ORG_ID"]}'/>"> 
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

<script src="avicit/eformmodule/form/partyActivistRelationTransfer/V1/bootstrap/bpm-layoutAdd1677718370000.js?_=1731289075466" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "402811817f4eb25b017f61f97c0e0dbe";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_ACT_TRANSFER";
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