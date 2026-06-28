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
    <input id="tableId" value="DYN_YOUTH_RECORD" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div class="mce-content-body"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    “铸心”青年突击队备案 
  </div> 
  <table style=" border: 1px solid;" id="aXvE51evuMhXIyHvONcI8sSoCbFM5DCw" border="1" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="APPLICATION_NUMBER" class=" " style=";" id="wYEHvUzb062SSA1gPiyU241uP3r0lPtp"> 申请编号： </label> </td> 
     <td style="width:18%; border: 1px solid;"> 
      <div id="APPLICATION_NUMBER" class="bpm_self_class " title="申请编号" style="width:100%;"> 
       <input type="text" class="form-control input-sm" readonly name="APPLICATION_NUMBER" value="<c:out  value='${map["APPLICATION_NUMBER"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="APPLICATION_UNITName" class=" " style=";" id="Y6pALww1kYjJIkPBEi813YvL8jfhOdw5"> 申请单位： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="APPLICATION_UNIT" name="APPLICATION_UNIT" title="申请单位" value="<c:out  value='${map["APPLICATION_UNIT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="APPLICATION_UNITName" name="APPLICATION_UNITName" disabled title="申请单位" value="<c:out  value='${map["APPLICATION_UNITName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="APPLICATION_UNITButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="ATTR1Name" class=" " style=";" id="attribute"> 申请人： </label> </td> 
     <td style="width:18%; border: 1px solid;">&nbsp; 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="ATTR1" name="ATTR1" title="申请人" value="<c:out  value='${map["ATTR1"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="ATTR1Name" name="ATTR1Name" disabled title="申请人" value="<c:out  value='${map["ATTR1Name"]}'/>"> 
       <span class="input-group-addon user-box-act" id="ATTR1Button"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_NAME" class=" " style=";" id="SZr3Wlj65qqllRmqGutleeC4cJKDjrXL"> <i class="required">*</i>突击队名称： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="COMMANDOES_NAME" name="COMMANDOES_NAME" title="突击队名称" maxlength="50" value="<c:out  value='${map["COMMANDOES_NAME"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:50%; text-align: right; border: 1px solid;" colspan="4"> 
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
              <a id="DYN_SUB_ZXBASB_1_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
              <a id="DYN_SUB_ZXBASB_1_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
              <a id="DYN_SUB_ZXBASB_1_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
              <a id="DYN_SUB_ZXBASB_1_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
              <a id="DYN_SUB_ZXBASB_1_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_DATE" class=" " style=";" id="MzSV3Vd0s0erPXqlQYXrfKOkTPE3B4v5"> <i class="required">*</i>成立时间： </label> </td> 
     <td style="width:18%; border: 1px solid;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="成立时间" class="form-control date-picker input-sm" style=";" required id="COMMANDOES_DATE" name="COMMANDOES_DATE" value="${map['COMMANDOES_DATE']}" readonly> 
       <span id="COMMANDOES_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_TASK_DATE" class=" " style=";" id="OpTWILbAhmvztQH0nemFMTzuHiVtT7kO"> <i class="required">*</i>计划完成任务时间： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="计划完成任务时间" class="form-control date-picker input-sm" style=";" required id="COMMANDOES_TASK_DATE" name="COMMANDOES_TASK_DATE" value="${map['COMMANDOES_TASK_DATE']}" readonly> 
       <span id="COMMANDOES_TASK_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_THEME" class=" " style=";" id="wUPqZrR4mSkdkqGCUddImquAKOzTAiNY"> <i class="required">*</i>突击队主题： </label> </td> 
     <td style="width:18%; border: 1px solid;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="COMMANDOES_THEME" name="COMMANDOES_THEME" title="主题" maxlength="50" value="<c:out  value='${map["COMMANDOES_THEME"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"effpfv1hihohlhanoy7sv0y1hwvdqjhd","bindfield":"commandoes_type","labelname":"突击队类型：","labeltype":"text-box","ischuantou":"","colisvisible":"y","colismust":"n","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="COMMANDOES_TYPE" class=" " style=";" id="EFFPfv1hIhoHlHANOy7sV0y1HwVdqJHd"> 突击队类型： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="COMMANDOES_TYPE" name="COMMANDOES_TYPE" title="突击队类型"> <option value="0" <c:if test="${map['COMMANDOES_TYPE'] eq '0'}">selected</c:if> >生产攻坚型</option> <option value="1" <c:if test="${map['COMMANDOES_TYPE'] eq '1'}">selected</c:if> >科技创新型</option> <option value="2" <c:if test="${map['COMMANDOES_TYPE'] eq '2'}">selected</c:if> >技术攻关型</option> <option value="3" <c:if test="${map['COMMANDOES_TYPE'] eq '3'}">selected</c:if> >管理改善型</option> <option value="4" <c:if test="${map['COMMANDOES_TYPE'] eq '4'}">selected</c:if> >质量提升型</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"oj8ib7q4aqltdzkf8cwmy9fflqdjrty0","bindfield":"expected_income","labelname":"预期效果：","labeltype":"text-box","ischuantou":"","colisvisible":"y","colismust":"n","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="EXPECTED_INCOME" class=" " style=";" id="oj8Ib7Q4aqLtDzkf8cwmy9FflQDJrTy0"> 预期效果： </label> </td> 
     <td style="width:43%; border: 1px solid;" colspan="3"> 
      <div> 
       <textarea id="EXPECTED_INCOME" name="EXPECTED_INCOME" class="bpm_self_class" title="预期收益"><c:out value="${map['EXPECTED_INCOME']}"/></textarea> 
      </div> </td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
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

<script src="avicit/eformmodule/form/qntjdba/V1/bootstrap/detail-layout1700031115000.js?_=1700102451407" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d89486dca018948b9e6450896";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_YOUTH_RECORD";
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