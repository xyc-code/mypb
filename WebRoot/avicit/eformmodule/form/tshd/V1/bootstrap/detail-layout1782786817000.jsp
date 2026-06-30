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
    <input id="tableId" value="DYN_TSHD" type="hidden"/>
    <form id='form' onkeydown="if(event.keyCode==13){return (event.srcElement.tagName=='TEXTAREA'||event.srcElement.className.indexOf('ui-pg-input')>-1)?true:false;}">
        <input id="comId" value="${comId}" name="comId" type="hidden"/>
        <input id="subTableData" name="subTableData" type="hidden"/>
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   特色活动 
 </div>
 <table style=" border: 1px solid #000000;" id="JbqcWb3UnklQc0xfUeNop8cysqL8G0Cu" border="1" bordercolor="#000000" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="FL" class=" " style=";" id="AvKx8QaYZ3CmnhS0FSd5E7uQzFfKjlWz"> 分类： </label> </td> 
    <td style="width:26%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="FL" name="FL" title="分类" maxlength="50" value="<c:out  value='${map["FL"]}'/>"> 
     </div></td> 
    <td style="width:13%; text-align: right; border: 1px solid #000000;"><label for="DZZMC" class=" " style=";" id="eC1WLFCfqbSIJ11llRl8dyPntOYxCr6w"> 党组织名称： </label> </td> 
    <td style="width:29%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DZZMC" name="DZZMC" title="党组织名称" maxlength="50" value="<c:out  value='${map["DZZMC"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="ZZLX" class=" " style=";" id="dw6DIlDI4nb3RaHn1fS5aIvD8y5vjI5e"> 组织类型： </label> </td> 
    <td style="width:26%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="ZZLX" name="ZZLX" title="组织类型" initvalue="<c:out  value='${map["ZZLX"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:13%; text-align: right; border: 1px solid #000000;"><label for="NOTE" class=" " style=";" id="HdelrRTn3D0pyYRIaD2vIE8S9Bq3SqhO"> 备注： </label> </td> 
    <td style="width:29%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="NOTE" name="NOTE" title="备注" maxlength="50" value="<c:out  value='${map["NOTE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODONGZHUTName" class=" " style=";" id="I1H9oRaSZ8953ZzjErjWki0uUe2HAs7d"> 活动主题： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="HUODONGZHUT" name="HUODONGZHUT" title="活动主题" maxlength="255" value="<c:out  value='${map["HUODONGZHUT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODRWJJName" class=" " style=";" id="Dwze2Mjz90IKhKGqqyOzlvgXVKd5XZtj"> 活动任务简介： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="HUODRWJJ" name="HUODRWJJ" title="活动任务简介" maxlength="4000"><c:out  value="${map['HUODRWJJ']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODONGMUBName" class=" " style=";" id="rdDyykP6vz8HdhbGJQNd2wfwQ1tViLjB"> 活动目标： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="HUODONGMUB" name="HUODONGMUB" title="活动目标" maxlength="4000"><c:out  value="${map['HUODONGMUB']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODONGZAITName" class=" " style=";" id="teZAa4KlKIy8ezOQcjZdQXqdoehXrVbO"> 活动载体： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="HUODONGZAIT" name="HUODONGZAIT" title="活动载体" maxlength="4000"><c:out  value="${map['HUODONGZAIT']}"/></textarea> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 测试： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="2" id="CESHI" name="CESHI" title="测试" maxlength="4000"><c:out  value="${map['CESHI']}"/></textarea> </td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="LCB_ID" name="LCB_ID" title="里程碑id" maxlength="50" value="<c:out  value='${map["LCB_ID"]}'/>"> 
 </div>
 <p></p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_LCB" id="DYN_LCB_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_LCB" class="datatable eform_component" datapermission="eform_data_DYN_LCB"></table> 
       <div id="DYN_LCBPager"></div> 
       <div id="DYN_LCBToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_LCB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="DYN_LCB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="DYN_LCB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="DYN_LCB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="DYN_LCB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_TTESTEXCWL" id="DYN_TTESTEXCWL_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_TTESTEXCWL" class="datatable eform_component" datapermission="eform_data_DYN_TTESTEXCWL"></table> 
       <div id="DYN_TTESTEXCWLPager"></div> 
       <div id="DYN_TTESTEXCWLToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_TTESTEXCWL_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="DYN_TTESTEXCWL_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="DYN_TTESTEXCWL_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="DYN_TTESTEXCWL_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="DYN_TTESTEXCWL_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
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

                        <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                           onclick="closeDialog()">返回</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</c:if>
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
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>


<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>

<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/eformTab.js?v=${jsversion}"></script>

<script src="avicit/eformmodule/form/tshd/V1/bootstrap/detail-layout1782786817000.js?_=1782786817394" type="text/javascript"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "948e83e390a0fe270190a59b7a9f252e";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var tableName = "DYN_TSHD";
    var entryId = '$${entryId}';
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
        baseUrl:_eform_base_url,
        id: id,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);

</script>
</body>
</html>