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
    <input id="tableId" value="DYN_INSPECTION" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   巡察整改归零 
 </div>
 <div style="margin: 15px; text-align: left;"> 
  <table style="" id="a7VQyyiSdvDv55foW0ytn4zQ7PxVCNNw" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:14%;"><p>申请日期：</p></td> 
     <td style="width:24%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="申请日期" class="form-control date-picker input-sm" style=";" required readonly id="INSPECTION_FROM_DATE" name="INSPECTION_FROM_DATE" value="${map['INSPECTION_FROM_DATE']}"> 
       <span id="INSPECTION_FROM_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">表单编号：</td> 
     <td style="width:19%;"> 
      <div id="INSPECTION_FROM_ON" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
       <input type="text" class="form-control input-sm" readonly name="INSPECTION_FROM_ON" value="<c:out  value='${map["INSPECTION_FROM_ON"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;">申请人：</td> 
     <td style="width:24%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="INSPECTION_FROM_POSEN" name="INSPECTION_FROM_POSEN" readonly title="申请人" maxlength="3000" value="<c:out  value='${map["INSPECTION_FROM_POSEN"]}'/>"> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">申请人单位：</td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="INSPECTION_FROM_POSEN_DEPT" name="INSPECTION_FROM_POSEN_DEPT" readonly title="申请人单位" maxlength="3000" value="<c:out  value='${map["INSPECTION_FROM_POSEN_DEPT"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;">申请人电话：</td> 
     <td style="width:24%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="INSPECTION_FROM_POSEN_TEL" name="INSPECTION_FROM_POSEN_TEL" title="申请人电话" maxlength="3000" value="<c:out  value='${map["INSPECTION_FROM_POSEN_TEL"]}'/>"> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">巡察问题序号：</td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="INSPECTION_ON" name="INSPECTION_ON" title="巡察问题序号" maxlength="3000" value="<c:out  value='${map["INSPECTION_ON"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;">责任人：</td> 
     <td style="width:24%;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="INSPECTION_POSEN" name="INSPECTION_POSEN" title="责任人" value="<c:out  value='${map["INSPECTION_POSEN"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="INSPECTION_POSENName" name="INSPECTION_POSENName" required title="责任人" value="<c:out  value='${map["INSPECTION_POSENName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="INSPECTION_POSENButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">巡察反馈的问题：</td> 
     <td style="width:19%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="2" required readonly id="INSPECTION_ISSUE" name="INSPECTION_ISSUE" title="巡察反馈的问题" maxlength="3000"><c:out  value="${map['INSPECTION_ISSUE']}"/></textarea> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;"><label for="ATTRIBUTE_01" class=" " style=";" id="ATTRIBUTE_01EformLabel"> </label> 问题主要方面:</td> 
     <td style="width:24%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="2" readonly id="ATTRIBUTE_01" name="ATTRIBUTE_01" title="问题主要方面 " maxlength="3000"><c:out  value="${map['ATTRIBUTE_01']}"/></textarea> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"><label for="ATTRIBUTE_04" class=" " style=";" id="ATTRIBUTE_04EformLabel"> </label> 问题的具体内容:</td> 
     <td style="width:19%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="4" readonly id="ATTRIBUTE_04" name="ATTRIBUTE_04" title="问题的具体内容" maxlength="3000"><c:out  value="${map['ATTRIBUTE_04']}"/></textarea> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;">产生问题的根本原因：</td> 
     <td style="width:24%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="4" required readonly id="INSPECTION_END_ISSUE" name="INSPECTION_END_ISSUE" title="产生问题的根本原因" maxlength="3000"><c:out  value="${map['INSPECTION_END_ISSUE']}"/></textarea> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">针对根本原因制定的归零措施：</td> 
     <td style="width:19%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="4" required readonly id="INSPECTION_MEASURE_ISSUE" name="INSPECTION_MEASURE_ISSUE" title="针对根本原因制定的归零措施" maxlength="3000"><c:out  value="${map['INSPECTION_MEASURE_ISSUE']}"/></textarea> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;">整改措施完成情况：</td> 
     <td style="width:24%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="3" required id="INSPECTION_END_ISSUE_QK" name="INSPECTION_END_ISSUE_QK" title="整改措施完成情况" maxlength="3000"><c:out  value="${map['INSPECTION_END_ISSUE_QK']}"/></textarea> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"><label for="INSPECTION_ONE_AND" class=" " style="font-weight:500;;" id="INSPECTION_ONE_ANDEformLabel"> 举一反三的检查情况： </label> </td> 
     <td style="width:19%;"><textarea class="form-control input-sm " style="resize:none;resize: auto;" rows="3" id="INSPECTION_ONE_AND" name="INSPECTION_ONE_AND" title="举一反三检查情况" maxlength="3000"><c:out  value="${map['INSPECTION_ONE_AND']}"/></textarea> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;">整改措施落实的证件材料：</td> 
     <td style="width:24%;"><label for="M0QNQdnkP7mMAm48EJdfvRr5oRAChmED" class=" " style="color:red;" id="M0QNQdnkP7mMAm48EJdfvRr5oRAChmEDEformLabel"> 内部系统，禁止上传涉密文件 </label> 
      <div id="M0QNQdnkP7mMAm48EJdfvRr5oRAChmED" class="attachment_div eform_mutiattach_auth bpm_self_class" title="内部系统，禁止上传涉密文件"> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"></td> 
    </tr> 
    <tr> 
     <td style="width:14%;"><label for="请选择" class=" " style="font-weight:500;;display:none;" id="请选择EformLabel"> 被巡察单位主管领导审核意见： </label> </td> 
     <td style="width:24%;"> 
      <div id="gsld" class="bpm_self_class " title=""> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"><label for="INSPECTION_OPINION_S_input" class=" " style="font-weight:500;;display:none;" id="INSPECTION_OPINION_S_inputEformLabel"> 被巡察单位巡察整改领导小组意见： </label> </td> 
     <td style="width:19%;"> 
      <div id="xcxz" class="bpm_self_class " title=""> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;"><label for="$colData.get(" bindfield")" class=" " style="font-weight:500;;display:none;" id="nullEformLabel"> 公司主管业务部门审查意见： </label> </td> 
     <td style="width:81%;" colspan="4"> 
      <div id="zgyw" class="bpm_self_class " title=""> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
  <p> </p> 
  <div class="input-group-sm "> 
   <select class="form-control input-sm" style="; display:none;" id="INSPECTION_OPINION_END" name="INSPECTION_OPINION_END" title="公司主管业务部门审查意见"> <option value="">请选择</option> <option value="1" <c:if test="${map['INSPECTION_OPINION_END'] eq '1'}">selected</c:if> >1</option> </select> 
  </div> 
  <p></p> 
 </div>
 <div style="font-size: 24px; margin: 15px;"> 
  <div class="input-group-sm "> 
   <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_03" name="ATTRIBUTE_03" title="清单id" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_03"]}'/>"> 
  </div> 
 </div>
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

<script src="avicit/eformmodule/form/xczggl/V1/bootstrap/bpm-layoutAdd1701328118000.js?_=1710381307906" type="text/javascript"></script>
        <script src="avicit/pb/dyntaskchecklist/js/DynTaskChecklist.js" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c9150818823df8f0188273b98d505ed";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_INSPECTION";
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