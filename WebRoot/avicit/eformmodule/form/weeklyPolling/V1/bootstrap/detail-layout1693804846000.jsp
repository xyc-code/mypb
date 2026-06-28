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
    <input id="tableId" value="DYN_MEEKLY" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; margin: 15px; font-size: 24px;">
   纪检监察周总结计划 
 </div>
 <table style="" id="tNrsuDoSTkil7HAJjDGiPjDY2mHX1fVd" data-attr="{" isaccordion":"","accordiontitle":"","active":""}" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="text-align: right; width:6%;"><label for="APPLICATION_DATE" class=" " style=";" id="APPLICATION_DATEEformLabel"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICATION_DATE" name="APPLICATION_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["APPLICATION_DATE"]}'/>"> 
     </div></td> 
    <td style="text-align: right; width:6%;"><label for="APPLICANT" class=" " style=";" id="APPLICANTEformLabel"> <i class="required">*</i>申请部门: </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICATION_DEPARTMENT" name="APPLICATION_DEPARTMENT" readonly title="申请部门" maxlength="1000" value="<c:out  value='${map["APPLICATION_DEPARTMENT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; width:6%;"><label for="APPLICATION_DEPARTMENT" class=" " style=";" id="APPLICATION_DEPARTMENTEformLabel"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICANT" name="APPLICANT" readonly title="字段_4" maxlength="1000" value="<c:out  value='${map["APPLICANT"]}'/>"> 
     </div></td> 
    <td style="text-align: right; width:6%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="IS_SON" name="IS_SON" title="是什么" maxlength="255" value="<c:out  value='${map["IS_SON"]}'/>"> 
     </div></td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";display:none;" id="FORM_NO" name="FORM_NO" readonly title="表单编号" maxlength="1000" value="<c:out  value='${map["FORM_NO"]}'/>"> 
     </div></td> 
   </tr> 
   <tr></tr> 
  </tbody> 
 </table>
 <p style="text-align: center;"><label for="请选择" class=" " style=";" id="ZZJH"> 2023年14周周报 </label> </p>
 <p style="text-align: center;"> </p>
 <div id="lastweekly" class="bpm_self_class " title="">
   请输入当前是第几期：
  <input id="shu" type="text"> 
  <a id="anniu" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " role="button" title="确定"> 确定 </a> 
 </div>
 <p></p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_SON_WEEKLY" id="DYN_SON_WEEKLY_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_SON_WEEKLY" class="datatable eform_component" datapermission="eform_data_DYN_SON_WEEKLY"></table> 
       <div id="DYN_SON_WEEKLYPager"></div> 
       <div id="DYN_SON_WEEKLYToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_SON_WEEKLY_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
         <a id="DYN_SON_WEEKLY_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
         <a id="DYN_SON_WEEKLY_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
         <a id="DYN_SON_WEEKLY_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
         <a id="DYN_SON_WEEKLY_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
         <a id="btn_6" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><i class="fa fa-fw fa-upload"></i> 导入</a> 
         <a id="btn_7" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="下载模板" style="display:none;"><i class="fa fa-fw fa-eye"></i> 下载模板</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <p style="text-align: center;"><span style="text-align: center;"></span><label for="请选择" class=" " style=";" id="LDJH"> 两个月滚动计划 </label> </p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_ROLLING_SON" id="DYN_ROLLING_SON_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_ROLLING_SON" class="datatable eform_component" datapermission="eform_data_DYN_ROLLING_SON"></table> 
       <div id="DYN_ROLLING_SONPager"></div> 
       <div id="DYN_ROLLING_SONToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_ROLLING_SON_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="DYN_ROLLING_SON_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="DYN_ROLLING_SON_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="DYN_ROLLING_SON_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="DYN_ROLLING_SON_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=";display:none;" id="DEPT_ID" name="DEPT_ID" readonly title="部门ID" maxlength="1000" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
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

<script src="avicit/eformmodule/form/weeklyPolling/V1/bootstrap/detail-layout1693804846000.js?_=1699254015324" type="text/javascript"></script>
        <script src="avicit/weekly/js/WeeklyS.js" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "40288199873000540187300f12a80282";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_MEEKLY";
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