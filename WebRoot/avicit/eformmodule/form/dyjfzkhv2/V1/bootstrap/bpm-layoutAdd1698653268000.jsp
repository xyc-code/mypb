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
    <input id="tableId" value="DYN_POINTS" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <p style="text-align: center;"><span style="font-size: 24px; text-align: center;">党员积分制考核</span></p>
 <p></p>
 <p></p>
 <table style=" border: 1px solid; height: 177px; margin-left: auto; margin-right: auto;" id="Y1tAy2FZz0UMORQi1ETkTbMoA7Dd44tJ" height="177" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:8%; border: 1px solid;"><label for="DRAFTSMANName" class=" " style=";" id="DRAFTSMANEformLabel"> <i class="required">*</i>拟稿人: </label> </td> 
    <td style="width:31%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="DRAFTSMAN" name="DRAFTSMAN" title="拟稿人" value="<c:out  value='${map["DRAFTSMAN"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="DRAFTSMANName" name="DRAFTSMANName" required disabled title="拟稿人" value="<c:out  value='${map["DRAFTSMANName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="DRAFTSMANButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:19%; border: 1px solid;"></td> 
    <td style="width:10%; border: 1px solid;"><label for="DRAFTING_TIME" class=" " style=";" id="DRAFTING_TIMEEformLabel"> <i class="required">*</i>拟稿时间: </label> </td> 
    <td style="width:29%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="拟稿时间" class="form-control date-picker input-sm" style=";" required readonly id="DRAFTING_TIME" name="DRAFTING_TIME" value="${map['DRAFTING_TIME']}"> 
      <span id="DRAFTING_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:8%; border: 1px solid;"><label for="NO" class=" " style=";" id="NOEformLabel"> <i class="required">*</i>编号 </label> </td> 
    <td style="width:31%; border: 1px solid;"> 
     <div id="NO" class="bpm_self_class " title="编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="NO" value="<c:out  value='${map["NO"]}'/>"> 
     </div></td> 
    <td style="width:19%; border: 1px solid;"></td> 
    <td style="width:10%; border: 1px solid;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>联系电话： </label> </td> 
    <td style="width:29%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话" maxlength="50" value="<c:out  value='${map["TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:8%; border: 1px solid;"><label for="DEPT_IDName" class=" " style=";" id="DEPT_IDEformLabel"> <i class="required">*</i>拟稿人部门: </label> </td> 
    <td style="width:31%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="DEPT_ID" name="DEPT_ID" title="拟稿人部门" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="DEPT_IDName" name="DEPT_IDName" required disabled title="拟稿人部门" value="<c:out  value='${map["DEPT_IDName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="DEPT_IDButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
    <td style="width:19%; border: 1px solid;"></td> 
    <td style="width:10%; border: 1px solid;"><label for="QUARTER" class=" " style=";" id="QUARTEREformLabel"> <i class="required">*</i>季度: </label> </td> 
    <td style="width:29%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="QUARTER" name="QUARTER" readonly title="季度" maxlength="50" value="<c:out  value='${map["QUARTER"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:98%; border: 1px solid;" colspan="5"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="INTEGRAL" id="INTEGRAL_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="INTEGRAL" class="datatable eform_component" datapermission="eform_data_INTEGRAL"></table> 
           <div id="INTEGRALPager"></div> 
           <div id="INTEGRALToolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="INTEGRAL_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="INTEGRAL_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="INTEGRAL_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="INTEGRAL_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="INTEGRAL_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除" style="display:none;"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
             <a id="btn_6" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><i class="fa fa-fw fa-trash-o"></i> 删除</a> 
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

<script src="avicit/eformmodule/form/dyjfzkhv2/V1/bootstrap/bpm-layoutAdd1698653268000.js?_=1699254525898" type="text/javascript"></script>
        <script src="avicit/pb/scoring/integral/js/Integral.js" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c9419a9899b211701899b2cbc0c0349";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_POINTS";
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