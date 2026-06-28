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
    <input id="tableId" value="DYN_YOUTH_DECLARATION" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   优秀“铸心”青年突击队申报 
 </div>
 <table style=" border: 1px solid; height: 369px;" id="ssuDES8cRaZqw7EDv7F0nYOqvwulQmSq" height="369" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="APPLICATION_NUMBER" class=" " style=";" id="k2tCPMSYWIm7TeFmHckrFPCEfCbxAsIZ"> 申请编号： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div id="APPLICATION_NUMBER" class="bpm_self_class " title="申请编号" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="APPLICATION_NUMBER" value="<c:out  value='${map["APPLICATION_NUMBER"]}'/>"> 
     </div></td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="APPLICATION_UNIT" class=" " style=";" id="AgwPWiXqsvYrZdsuCun2TvrYape1o0xu"> 申请单位： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="APPLICATION_UNIT" name="APPLICATION_UNIT" title="申请单位" value="<c:out  value='${map["APPLICATION_UNIT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLICATION_UNITName" name="APPLICATION_UNITName" required disabled title="申请单位" value="<c:out  value='${map["APPLICATION_UNITName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="APPLICATION_UNITButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; height: 30px; text-align: right; border: 1px solid;"><label for="ATTR1" class=" " style=";" id="ATTR1"> 申请人： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="ATTR1" name="ATTR1" title="申请人" value="<c:out  value='${map["ATTR1"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="ATTR1Name" name="ATTR1Name" required disabled title="申请人" value="<c:out  value='${map["ATTR1Name"]}'/>"> 
      <span class="input-group-addon user-box-act" id="ATTR1Button"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_NAME" class=" " style=";" id="aJPztnE2UIYFMPT3xVFek7Mq1vRlECCj"> <i class="required">*</i>突击队名称： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="customDialog" name="COMMANDOES_NAME" title="突击队名称" maxlength="50" value="<c:out  value='${map["COMMANDOES_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 28px;"> 
    <td style="width:99%; text-align: right; height: 28px; border: 1px solid;" colspan="4"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_SUB_ZXBASB_1" id="DYN_SUB_ZXBASB_1_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_SUB_ZXBASB_1" class="datatable eform_component" datapermission="eform_data_DYN_SUB_ZXBASB_1"></table> 
           <div id="DYN_SUB_ZXBASB_1Pager"></div> 
           <div id="DYN_SUB_ZXBASB_1Toolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_SUB_ZXBASB_1_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加" style="display:none;"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_SUB_ZXBASB_1_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_SUB_ZXBASB_1_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_SUB_ZXBASB_1_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_SUB_ZXBASB_1_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除" style="display:none;"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
            </div> 
            <div class="toolbar-right"> 
            </div> 
           </div> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_DATE" class=" " style=";" id="BQJEao21xjH0eoy424X8e2ytGjS5Ugts"> <i class="required">*</i>成立时间： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="成立时间" class="form-control date-picker input-sm" style=";" required readonly id="COMMANDOES_DATE" name="COMMANDOES_DATE" value="${map['COMMANDOES_DATE']}"> 
      <span id="COMMANDOES_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_TASK_DATE" class=" " style=";" id="NU2xWX9SIVOJhPfMFZnwqCpxM0YBmLL1"> <i class="required">*</i>计划完成任务时间： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="计划完成任务时间" class="form-control date-picker input-sm" style=";" required id="COMMANDOES_TASK_DATE" name="COMMANDOES_TASK_DATE" value="${map['COMMANDOES_TASK_DATE']}" readonly> 
      <span id="COMMANDOES_TASK_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:99%; height: 30px; text-align: left; border: 1px solid;" colspan="4"><label for="EXPECTED_INCOMEName" class=" " style=";" id="huvC41J7B2jeNi4brFz9DAIv6MqLmlvv"> 突击队任务完成情况及取得成效： </label> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:99%; height: 30px; text-align: left; border: 1px solid;" colspan="4"> 
     <div> 
      <textarea id="EXPECTED_INCOME" name="EXPECTED_INCOME" class="bpm_self_class" title="突击队任务完成情况及取得成效"><c:out value="${map['EXPECTED_INCOME']}"/></textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_POSEN" class=" " style=";" id="x6suxzC4D1Vfweum9iHiBR4ICG3jlEtt"> 联系人姓名： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="COMMANDOES_POSEN" name="COMMANDOES_POSEN" title="联系人姓名" value="<c:out  value='${map["COMMANDOES_POSEN"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="COMMANDOES_POSENName" name="COMMANDOES_POSENName" required disabled title="联系人姓名" value="<c:out  value='${map["COMMANDOES_POSENName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="COMMANDOES_POSENButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_POSEN_TEL" class=" " style=";" id="seBE0Cor39eqUmhKuiDPKHdcW4MYISNj"> <i class="required">*</i>联系人电话： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="COMMANDOES_POSEN_TEL" name="COMMANDOES_POSEN_TEL" title="联系人电话" maxlength="50" value="<c:out  value='${map["COMMANDOES_POSEN_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_PXQK" class=" " style=";" id="OseJgLxEWebfk7t2dAWFP4Z3x0sxPip6"> 评选情况： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="COMMANDOES_PXQK" name="COMMANDOES_PXQK" title="评选情况" maxlength="50" value="<c:out  value='${map["COMMANDOES_PXQK"]}'/>"> 
     </div></td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_CONTENT" class=" " style=";" id="xDEJr985rRR2JDcRLizbrkKO6ZsmMER8"> 备案情况： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="COMMANDOES_CONTENT" title="备案情况" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="COMMANDOES_CONTENT1" name="COMMANDOES_CONTENT" title="备案情况" value="Y" required <c:if test="${map['COMMANDOES_CONTENT'] eq 'Y'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> disabled />是 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="COMMANDOES_CONTENT2" name="COMMANDOES_CONTENT" title="备案情况" value="N" required <c:if test="${map['COMMANDOES_CONTENT'] eq 'N'}">checked="true"</c:if> disabled />否 </label> 
     </div></td> 
   </tr> 
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

<script src="avicit/eformmodule/form/qntjdsb/V1/bootstrap/bpm-layoutAdd1700114950000.js?_=1700115076284" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d894ded3801894e090c780ae1";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_YOUTH_DECLARATION";
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