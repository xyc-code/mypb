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
   工行固定资产调拨 
 </div>
 <table style="" id="SqUQCCcXz1xFXBR2fMd2PyqSRzikIB3y" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="APPLY_DATE" class=" " style=";" id="K5B6pfzuK3BfCag3EHyOCGMi6e8RhiyL"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="申请日期" class="form-control date-picker input-sm" style=";" required id="APPLY_DATE" name="APPLY_DATE" value="${map['APPLY_DATE']}" readonly> 
      <span id="APPLY_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="APPLY_DEPT" class=" " style=";" id="fVRHiUezCipNNGXegBr9ZVttuSkvvqrq"> 调出单位： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="APPLY_DEPT" name="APPLY_DEPT" title="调出单位" value="<c:out  value='${map["APPLY_DEPT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLY_DEPTName" name="APPLY_DEPTName" disabled title="调出单位" value="<c:out  value='${map["APPLY_DEPTName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="APPLY_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="APPLY_JB_USER" class=" " style=";" id="SqQYkH5WddKO77skrSs2iukLxZLT5Piz"> <i class="required">*</i>经办人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="APPLY_JB_USER" name="APPLY_JB_USER" title="经办人" value="<c:out  value='${map["APPLY_JB_USER"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLY_JB_USERName" name="APPLY_JB_USERName" required title="经办人" value="<c:out  value='${map["APPLY_JB_USERName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="APPLY_JB_USERButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="APPLY_USER" class=" " style=";" id="CL3r3yo8kBpmwVLkpNO9WOzboz4WmgPO"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="APPLY_USER" name="APPLY_USER" title="申请人" value="<c:out  value='${map["APPLY_USER"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLY_USERName" name="APPLY_USERName" required disabled title="申请人" value="<c:out  value='${map["APPLY_USERName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="APPLY_USERButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="APPLY_TEL" class=" " style=";" id="PX2opx6zaDJqPAPsDycMtY3oavVN756y"> <i class="required">*</i>联系电话： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="APPLY_TEL" name="APPLY_TEL" title="联系电话" maxlength="50" value="<c:out  value='${map["APPLY_TEL"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_CODE" class=" " style=";" id="an0xx2wRWs0Eacp8UF9N2ZnHhJkp1PjX"> <i class="required">*</i>资产编码： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="ASSET_CODE" name="ASSET_CODE" title="资产编码" maxlength="50" value="<c:out  value='${map["ASSET_CODE"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="ASSET_CODEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_NAEM" class=" " style=";" id="d01f6go8ujHnuBHvwUAwiV63t90FGBUf"> 资产名称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_NAEM" name="ASSET_NAEM" title="资产名称" maxlength="500" value="<c:out  value='${map["ASSET_NAEM"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_TYPE" class=" " style=";" id="xInp2ZNjwB55ImwzJuxwwE9mC6zQoVOS"> 资产类别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_TYPE" name="ASSET_TYPE" title="资产类别" maxlength="50" value="<c:out  value='${map["ASSET_TYPE"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_DETAILS" class=" " style=";" id="bAGrkqL72YzcSeq5CAXarg3AmmTxNeJS"> 资产细目： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_DETAILS" name="ASSET_DETAILS" title="资产细目" maxlength="50" value="<c:out  value='${map["ASSET_DETAILS"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_BRAND" class=" " style=";" id="Cj8xHnCJthdNvTAbHiq4ZYQb0yb3H3EK"> 资产品牌： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_BRAND" name="ASSET_BRAND" title="资产品牌" maxlength="500" value="<c:out  value='${map["ASSET_BRAND"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_DW" class=" " style=";" id="JCr7J6nxuCfG39oFd2xFaa0mbX8LYncn"> 单位： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " readonly id="ASSET_DW" name="ASSET_DW" title="单位" initvalue="<c:out  value='${map["ASSET_DW"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ASSET_XHGG" class=" " style=";" id="L4bY7sgqJAAHXShKHzl5KW9mlTWz0HQM"> 型号规格： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="ASSET_XHGG" name="ASSET_XHGG" title="型号规格" maxlength="500" value="<c:out  value='${map["ASSET_XHGG"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ASSET_NUM" class=" " style=";" id="lGFTSxAb4fRAOWa5jbGzPuubntRLFaQJ"> 资产数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" disabled id="INSERT_NUM" name="INSERT_NUM" data-min="-99999" data-max="99999" data-precision="0" title="资产数量" maxlength="5" value="<c:out  value='${map["INSERT_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="INSERT_DATE" class=" " style=";" id="dSZ17DNM7MIQosLF1O3XYaiqAfUGBRDl"> 入账日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="入账日期" class="form-control date-picker input-sm" style=";" readonly id="INSERT_DATE" name="INSERT_DATE" value="${map['INSERT_DATE']}"> 
      <span id="INSERT_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="DEPRE_DATE" class=" " style=";" id="WgfhRgqJeUcUifqhXNYcaCMm6d6w4K9k"> 折旧月份： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="折旧月份" class="form-control date-picker input-sm" style=";" readonly id="DEPRE_DATE" name="DEPRE_DATE" value="${map['DEPRE_DATE']}"> 
      <span id="DEPRE_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="ORIGINAL_VALUE" class=" " style=";" id="x0YazAk2sEb6mXvNzOnSY9adg79CLiD2"> 原值： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm "> 
      <span class="input-group-addon"> ￥ </span> 
      <input type="text" class="form-control input-sm" style=";" readonly id="ORIGINAL_VALUE" name="ORIGINAL_VALUE" data-min="0" data-max="999999999999999999.99" data-precision="2" title="原值" maxlength="20" value="<c:out  value='${map["ORIGINAL_VALUE"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="CURRENT_VALUE" class=" " style=";" id="miR5edf7PLNf4PkEgWf8rdydisLxaQap"> 现值： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm "> 
      <span class="input-group-addon"> ￥ </span> 
      <input type="text" class="form-control input-sm" style=";" readonly id="CURRENT_VALUE" name="CURRENT_VALUE" data-min="0" data-max="999999999999999999.99" data-precision="2" title="现值" maxlength="20" value="<c:out  value='${map["CURRENT_VALUE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="INTO_DEPT" class=" " style=";" id="ZJndwvMGF4tGCErvX3OHwuhMtxq0AKdE"> <i class="required">*</i>调入单位： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="INTO_DEPT" name="INTO_DEPT" title="调入单位" value="<c:out  value='${map["INTO_DEPT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="INTO_DEPTName" name="INTO_DEPTName" required title="调入单位" value="<c:out  value='${map["INTO_DEPTName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="INTO_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="DB_NUM" class=" " style=";" id="ji4C7wSEwABqsVfmUzNzkZLPGEwAkxbf"> <i class="required">*</i>调拨数量： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" required id="DB_NUM" name="DB_NUM" data-min="1" data-max="99999" data-precision="0" title="调拨数量" maxlength="5" value="<c:out  value='${map["DB_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="INTO_GUILD_NAME" class=" " style=";" id="INTO_GUILD_NAMEEformLabel"> <i class="required">*</i>调入工会： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="INTO_GUILD_NAME" name="INTO_GUILD_NAME" title="调入工会" maxlength="500" value="<c:out  value='${map["INTO_GUILD_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="INTO_GUILD_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="DB_REASON" class=" " style=";" id="Y3R9OZHPBAcQs5ANy7aARJyXtn5YkvZR"> 调拨原因： </label> </td> 
    <td style="width:43%;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" id="DB_REASON" name="DB_REASON" title="调拨原因" maxlength="4000"><c:out  value="${map['DB_REASON']}"/></div> </td> 
   </tr> 
  </tbody> 
 </table>
 <table style="" id="dnGw91l6whf57SStXvefDhOuY02fJraq" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="ASSET_LEDGER_ID" name="ASSET_LEDGER_ID" title="资产ID" maxlength="50" value="<c:out  value='${map["ASSET_LEDGER_ID"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="INTO_DEPT_NAME" name="INTO_DEPT_NAME" title="调入单位名称" maxlength="500" value="<c:out  value='${map["INTO_DEPT_NAME"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="INTO_GUILD_ID" name="INTO_GUILD_ID" title="调入工会ID" maxlength="50" value="<c:out  value='${map["INTO_GUILD_ID"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="ASSET_GUILD_ID" name="ASSET_GUILD_ID" title="资产工会ID" maxlength="50" value="<c:out  value='${map["ASSET_GUILD_ID"]}'/>"> 
     </div></td> 
    <td style="width:17%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="ASSET_GUILD_NAME" name="ASSET_GUILD_NAME" title="资产工会名称" maxlength="500" value="<c:out  value='${map["ASSET_GUILD_NAME"]}'/>"> 
     </div></td> 
    <td style="width:17%;"></td> 
   </tr> 
  </tbody> 
 </table>
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
    var formInfoId = "82808081966773a0019667a48a000e0b";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_FIXED_ASSETS_DB";
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

        



            $('#APPLY_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#APPLY_DATE').val() == null||$('#APPLY_DATE').val()==''||$('#APPLY_DATE').val()==undefined) {
                    $("#APPLY_DATE").datepicker("setDate",new Date());
                }

    $('#APPLY_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#APPLY_DATE').datepicker('show');
			 $('#APPLY_DATE').datepicker().trigger('click');
					
		});
        




$('#APPLY_DEPTName').on(' focus',function(e){
    APPLY_DEPTClickFun();
    $(this).blur();
});

function APPLY_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'APPLY_DEPT',textFiled:'APPLY_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#APPLY_DEPTButton').off('click');



        if ($('#APPLY_DEPT').val() == null||$('#APPLY_DEPT').val()==''||$('#APPLY_DEPT').val()==undefined) {
$("#APPLY_DEPT").val(session.deptId);

}
if ($('#APPLY_DEPTName').val() == null||$('#APPLY_DEPTName').val()==''||$('#APPLY_DEPTName').val()==undefined) {
$("#APPLY_DEPTName").val(session.deptName);
}







$('#APPLY_JB_USERName').on(' focus',function(e){

APPLY_JB_USERClickFun();
this.blur();
});

function APPLY_JB_USERClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'APPLY_JB_USER',textFiled:'APPLY_JB_USERName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['group', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}

if ($('#APPLY_JB_USER').val() == null||$('#APPLY_JB_USER').val()==''||$('#APPLY_JB_USER').val()==undefined) {
    $("#APPLY_JB_USER").val(session.userId);

    var $li = $('<li style="width:auto;float: left;padding-left: 5px;height:18px"></li>');
    var $a = $('<a style="cursor:pointer" tagid="'+session.userId+'">'+session.userName+'</a>').click(function(e){
    var id = $(this).attr("tagid");
    var url = "";
    var chuantouwidth = ""||"100%";
    var chuantouheight = ""||"100%";
    if (url.indexOf("?")>0){
    url = url + "&id=";
    }else{
    url = url + "?id=";
    }
    layer.open({
    type: 2,
    title: '用户详细',
    skin: 'bs-modal',
    shade:0.3,
    shadeClose : true,
    area: [chuantouwidth, chuantouheight],
    maxmin: false,
    content: url + id
    });
    return false;
    });
        $li.append($a);
    $('#APPLY_JB_USERAreaName').append($li);
}
if ($('#APPLY_JB_USERName').val() == null||$('#APPLY_JB_USERName').val()==''||$('#APPLY_JB_USERName').val()==undefined) {
$("#APPLY_JB_USERName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var APPLY_JB_USER_colSecret = $('#');
    var secretLevelValue;
    if(APPLY_JB_USER_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var APPLY_JB_USER_selectedList = $('#APPLY_JB_USER').val();
    var flag = true;
    if(secretLevelValue&&APPLY_JB_USER_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':APPLY_JB_USER_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "经办人" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});






$('#APPLY_USERName').on(' focus',function(e){

APPLY_USERClickFun();
this.blur();
});

function APPLY_USERClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'APPLY_USER',textFiled:'APPLY_USERName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['group', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#APPLY_USERButton').off('click');

if ($('#APPLY_USER').val() == null||$('#APPLY_USER').val()==''||$('#APPLY_USER').val()==undefined) {
    $("#APPLY_USER").val(session.userId);

    var $li = $('<li style="width:auto;float: left;padding-left: 5px;height:18px"></li>');
    var $a = $('<a style="cursor:pointer" tagid="'+session.userId+'">'+session.userName+'</a>').click(function(e){
    var id = $(this).attr("tagid");
    var url = "";
    var chuantouwidth = ""||"100%";
    var chuantouheight = ""||"100%";
    if (url.indexOf("?")>0){
    url = url + "&id=";
    }else{
    url = url + "?id=";
    }
    layer.open({
    type: 2,
    title: '用户详细',
    skin: 'bs-modal',
    shade:0.3,
    shadeClose : true,
    area: [chuantouwidth, chuantouheight],
    maxmin: false,
    content: url + id
    });
    return false;
    });
        $li.append($a);
    $('#APPLY_USERAreaName').append($li);
}
if ($('#APPLY_USERName').val() == null||$('#APPLY_USERName').val()==''||$('#APPLY_USERName').val()==undefined) {
$("#APPLY_USERName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var APPLY_USER_colSecret = $('#');
    var secretLevelValue;
    if(APPLY_USER_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var APPLY_USER_selectedList = $('#APPLY_USER').val();
    var flag = true;
    if(secretLevelValue&&APPLY_USER_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':APPLY_USER_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "申请人" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});








	ASSET_CODEDetailCol = 'ASSET_CODE';
	

function ASSET_CODEClickFun(){
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
				this.setRowASSET_CODE = function(mapping,rowData){
					

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

						if(ASSET_CODEDetailCol == mapVer.targetName){
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
                , "20","select * from dyn_fixed_assets_ledger t where t.used_dept_id = '@{departmentId}' and t.data_status='Y' order by t.xh asc",'[{"label":"资产编码","width":"50","align":"center","orderBy":"1","name":"ASSET_CODE"},{"label":"资产名称","width":"50","align":"center","orderBy":"2","name":"ASSET_NAEM"},{"label":"资产品牌","width":"50","align":"center","orderBy":"3","name":"ASSET_BRAND"},{"label":"资产类别","width":"50","align":"center","orderBy":"4","name":"ASSET_TYPEName"},{"label":"资产细目","width":"50","align":"center","orderBy":"5","name":"ASSET_DETAILS"},{"label":"单位","width":"50","align":"center","orderBy":"6","name":"ASSET_DW"},{"label":"型号规格","width":"50","align":"center","orderBy":"7","name":"ASSET_XHGG"},{"label":"资产数量","width":"50","align":"center","orderBy":"8","name":"ASSET_NUM"},{"label":"入账日期","width":"50","hidden":true,"align":"center","orderBy":"9","name":"INSERT_DATE"},{"label":"折旧月份","width":"50","hidden":true,"align":"center","orderBy":"10","name":"DEPRE_DATE"},{"label":"原值","width":"50","align":"center","orderBy":"11","name":"ORIGINAL_VALUE"},{"label":"现值","width":"50","align":"center","orderBy":"12","name":"CURRENT_VALUE"},{"label":"资产id","width":"50","hidden":true,"align":"center","orderBy":"13","name":"ID"},{"label":"资产工会id","width":"50","hidden":true,"align":"center","orderBy":"14","name":"GUILD_ID"},{"label":"资产工会名称","width":"50","hidden":true,"align":"center","orderBy":"15","name":"GUILD_NAME"}]','[{"name":"GUILD_NAME","targetName":"ASSET_GUILD_NAME","targetNameName":"资产工会名称","display":"资产工会名称","transform":"","lookupType":"","filter":false},{"name":"GUILD_ID","targetName":"ASSET_GUILD_ID","targetNameName":"资产工会ID","display":"资产工会id","transform":"","lookupType":"","filter":false},{"name":"ID","targetName":"ASSET_LEDGER_ID","targetNameName":"资产ID","display":"资产id","transform":"","lookupType":"","filter":false},{"name":"ASSET_CODE","targetName":"ASSET_CODE","targetNameName":"资产编码","display":"资产编码","transform":"","lookupType":"","filter":true},{"name":"DEPRE_DATE","targetName":"DEPRE_DATE","targetNameName":"折旧月份","display":"折旧月份","transform":"","lookupType":"","filter":false},{"name":"ORIGINAL_VALUE","targetName":"ORIGINAL_VALUE","targetNameName":"原值","display":"原值","transform":"","lookupType":"","filter":false},{"name":"CURRENT_VALUE","targetName":"CURRENT_VALUE","targetNameName":"现值","display":"现值","transform":"","lookupType":"","filter":false},{"name":"ASSET_NAEM","targetName":"ASSET_NAEM","targetNameName":"资产名称","display":"资产名称","transform":"","lookupType":"","filter":true},{"name":"ASSET_BRAND","targetName":"ASSET_BRAND","targetNameName":"资产品牌","display":"资产品牌","transform":"","lookupType":"","filter":false},{"name":"ASSET_TYPEName","targetName":"ASSET_TYPE","targetNameName":"资产类别","display":"资产类别","transform":"7","lookupType":"GUILD_ASSETS_TYPE","filter":false},{"name":"ASSET_DETAILS","targetName":"ASSET_DETAILS","targetNameName":"资产细目","display":"资产细目","transform":"","lookupType":"","filter":false},{"name":"ASSET_DW","targetName":"ASSET_DW","targetNameName":"单位(值)","display":"单位","transform":"","lookupType":"","filter":false},{"name":"ASSET_XHGG","targetName":"ASSET_XHGG","targetNameName":"型号规格","display":"型号规格","transform":"","lookupType":"","filter":false},{"name":"ASSET_NUM","targetName":"INSERT_NUM","targetNameName":"资产数量","display":"资产数量","transform":"","lookupType":"","filter":false},{"name":"INSERT_DATE","targetName":"INSERT_DATE","targetNameName":"入账日期","display":"入账日期","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowASSET_CODE,this.getParamsValue,'','fixedAssetsDbTable-ASSET_CODE',this.jsSuccess);


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

						if(ASSET_CODEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#ASSET_CODE").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function ASSET_CODEDetail(id){
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


			$('#ASSET_CODE')
	.on(' focus',function(e){
	ASSET_CODEClickFun();
	this.blur();
});

/*
$('#ASSET_CODEButton').on('click',function(e){
	ASSET_CODEClickFun();
	this.blur();
});

$('#ASSET_CODEButton').click(function(event) {
   $('#ASSET_CODE').trigger('focus');
});*/












    $('#ASSET_DW').attr("disabled","disabled");$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "GUILD_ASSETS_DY_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#ASSET_DW').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["ASSET_DW"] != null && pageParams.formData["ASSET_DW"] != ''){    $('#ASSET_DW').val(pageParams.formData["ASSET_DW"]);}else if($('#ASSET_DW').attr("initValue")!=undefined&&$.trim($('#ASSET_DW').attr("initValue"))!=''){    $('#ASSET_DW').val($('#ASSET_DW').attr("initValue"));    pageParams.formData["ASSET_DW"] = $('#ASSET_DW').attr("initValue");}else{    }}});



$('#INSERT_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#INSERT_NUM').trigger('click');
});

$("#INSERT_NUM").on("keyup",function(){
    if($("#INSERT_NUM").val()>99999){
        $("#INSERT_NUM").val(99999);
        layer.msg("资产数量最大值为\""+99999+"\"");
    }
});




            $('#INSERT_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


                
            $('#INSERT_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                



            $('#DEPRE_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


                
            $('#DEPRE_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                

$('#ORIGINAL_VALUE').parent('[data-trigger="spinner"]').spinner();



$('#ORIGINAL_VALUE').blur(function()
{
    $('#ORIGINAL_VALUE').val(formatCurrency($('#ORIGINAL_VALUE').val(), 2));
});

$('#ORIGINAL_VALUE').val(formatCurrency($('#ORIGINAL_VALUE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["ORIGINAL_VALUE"] = $('#ORIGINAL_VALUE').val().replace(reg,"");
    });
}


$('#CURRENT_VALUE').parent('[data-trigger="spinner"]').spinner();



$('#CURRENT_VALUE').blur(function()
{
    $('#CURRENT_VALUE').val(formatCurrency($('#CURRENT_VALUE').val(), 2));
});

$('#CURRENT_VALUE').val(formatCurrency($('#CURRENT_VALUE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["CURRENT_VALUE"] = $('#CURRENT_VALUE').val().replace(reg,"");
    });
}





$('#INTO_DEPTName').on(' focus',function(e){
    INTO_DEPTClickFun();
    $(this).blur();
});

function INTO_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'INTO_DEPT',textFiled:'INTO_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            $('#INTO_DEPT_NAME').val(dept.deptnames);
            }

    });

}









$('#DB_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#DB_NUM').trigger('click');
});

$("#DB_NUM").on("keyup",function(){
    if($("#DB_NUM").val()>99999){
        $("#DB_NUM").val(99999);
        layer.msg("调拨数量最大值为\""+99999+"\"");
    }
});
            $('#DB_NUM').on('change',function(e){
            var assetsLedgerNum = $('#INSERT_NUM').val();
if(parseInt(assetsLedgerNum) < parseInt(this.value)){
	layer.msg('调拨数量不能大于资产数量，请重新填写。', {icon: 2, time: 2000});
	$('#DB_NUM').val(1);
}else if(parseInt(assetsLedgerNum) > parseInt(this.value)){
	avicAjax.ajax({
		url : 'platform/avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/queryFixedAssetsNum',
		data : {
			assetsLedgerId : $('#ASSET_LEDGER_ID').val(),
			assetsLedgerNum: assetsLedgerNum,
			taskId: $('#comId').val(),
			dbNum: this.value
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if(result.flag == 'failure'){
				layer.msg('申请调拨数量大于资产数量，请重新填写。', {icon: 2, time: 2000});
				$('#DB_NUM').val(1);
			}
		}
	});	
}
        });
        



	INTO_GUILD_NAMEDetailCol = 'INTO_GUILD_NAME';
	

function INTO_GUILD_NAMEClickFun(){
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
				this.setRowINTO_GUILD_NAME = function(mapping,rowData){
					

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

						if(INTO_GUILD_NAMEDetailCol == mapVer.targetName){
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
                , "20","select * from dyn_trade_union_organiza t order by t.TREE_LEVEL asc,tree_sort ASC",'[{"label":"工行名称","width":"50","align":"center","orderBy":"1","name":"LEAGUE_NAME"},{"label":"工行ID","width":"50","hidden":true,"align":"center","orderBy":"2","name":"ID"},{"label":"工会类型","width":"50","align":"center","orderBy":"3","name":"ATTRIBUTE_03Name"}]','[{"name":"LEAGUE_NAME","targetName":"INTO_GUILD_NAME","targetNameName":"调入工会","display":"工行名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"INTO_GUILD_ID","targetNameName":"调入工会ID","display":"工行ID","transform":"","lookupType":"","filter":false},{"name":"ATTRIBUTE_03Name","targetName":"","targetNameName":"","display":"工会类型","transform":"7","lookupType":"GH_ORG_TYPE","filter":false}]','-1','-1',this.setRowINTO_GUILD_NAME,this.getParamsValue,'','fixedAssetsDbTable-INTO_GUILD_NAME',this.jsSuccess);


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

						if(INTO_GUILD_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#INTO_GUILD_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function INTO_GUILD_NAMEDetail(id){
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


			$('#INTO_GUILD_NAME')
	.on(' focus',function(e){
	INTO_GUILD_NAMEClickFun();
	this.blur();
});

/*
$('#INTO_GUILD_NAMEButton').on('click',function(e){
	INTO_GUILD_NAMEClickFun();
	this.blur();
});

$('#INTO_GUILD_NAMEButton').click(function(event) {
   $('#INTO_GUILD_NAME').trigger('focus');
});*/




$("#DB_REASONCount").html((4000 - $('#DB_REASON').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatDB_REASONLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
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