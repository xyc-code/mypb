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
    var formInfoId = "948e83e3828f72f301829f2775892742";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_BXWY_YBRX";
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

window.AUTO_CODEautocode = new AutoCode('ZBXWYYBRXQS',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","color:#0088cc;");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","color:#0088cc;");
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
						autoCode: "ZBXWYYBRXQS",
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
									autoCode: "ZBXWYYBRXQS",
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
 $("#ZWHJL").show();
 $("#ZWHJLFJ").show();
 $("#CBHXRJL").show(); 
 $("#YBHXRJLXQ").show();
 $("#YBHXRJLFJ").show();
 $("#JGPF").show();
 if(floweditor.flowModel.activityname == 'task1'){
 
 $("#gMD4dBwZMWgzcTSSbSDNOlx5cs5Gi8mE>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
 $(this).hide();
 
 }
});
 }else{
 if(floweditor.flowModel.activityname == 'task2' 
 
 ){
 
 $("#gMD4dBwZMWgzcTSSbSDNOlx5cs5Gi8mE>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 7){
 $(this).hide();
 
 }
});
 }
 if(floweditor.flowModel.activityname == 'task3' || floweditor.flowModel.activityname == 'task4' || floweditor.flowModel.activityname == 'task6' ||floweditor.flowModel.activityname == 'task11'|| floweditor.flowModel.activityname == 'task12'|| floweditor.flowModel.activityname == 'task14'|| floweditor.flowModel.activityname == 'task15'|| floweditor.flowModel.activityname == 'task16'|| floweditor.flowModel.activityname == 'task17'
 
 ){
 
 $("#gMD4dBwZMWgzcTSSbSDNOlx5cs5Gi8mE>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 9){
 $(this).hide();
 
 }
});
 } 
 

 
 
 
 
 }
 
 
 
 };
}else{
 $("#gMD4dBwZMWgzcTSSbSDNOlx5cs5Gi8mE>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"党组织名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"PARTY_NAME","targetName":"PARTY_NAME_NEW","targetNameName":"选举党组织名称","display":"党组织名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME_NEW,this.getParamsValue,'','BXWYYBRXQS-PARTY_NAME_NEW',this.jsSuccess);


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
                , "20","select * from DYN_THREE_FOUR t order by MEET_DATE desc",'[{"label":"会议时间","width":"50","align":"center","orderBy":"","name":"MEET_DATE"},{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_DATE","targetName":"","targetNameName":"","display":"会议时间","transform":"","lookupType":"","filter":false},{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME","targetNameName":"三会一课名称","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId","targetNameName":"三会一课ID","display":"三会一课ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME,this.getParamsValue,'','BXWYYBRXQS-THREE_FOUR_NAME',this.jsSuccess);


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
	if (tagId != "ZWHJL"){
		return;
	}
	if(operability){
		$("#ZWHJL").show();
	}else{
		$("#ZWHJL").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "ZWHJL"){
return;
}
if(operability){
$("#ZWHJL").css("display","inline-block");
}else{
$("#ZWHJL").css("display","none");
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

            $('#ZWHJL').on('click',function(e){
            
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
        


attachBpmId =   null  ;

var fileformValue = id;


$('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'wnDQNOWk7eukMQVJGsg5v6hPPmENng62',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['wnDQNOWk7eukMQVJGsg5v6hPPmENng62'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['wnDQNOWk7eukMQVJGsg5v6hPPmENng62'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "wnDQNOWk7eukMQVJGsg5v6hPPmENng62"){
        return;
    }

    if (required){
        $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").attr("required","required");
   }else{
        $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").removeAttr("required");
        $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").attr("required");
    var bpmRequire = $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#wnDQNOWk7eukMQVJGsg5v6hPPmENng62').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "wnDQNOWk7eukMQVJGsg5v6hPPmENng62"){
        return;
    }
    if(operability){
        $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").show();
    }else{
        $("#wnDQNOWk7eukMQVJGsg5v6hPPmENng62").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "ZWHJLFJ"){
		return;
	}
	if(operability){
		$("#ZWHJLFJ").show();
	}else{
		$("#ZWHJLFJ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "ZWHJLFJ"){
return;
}
if(operability){
$("#ZWHJLFJ").css("display","inline-block");
}else{
$("#ZWHJLFJ").css("display","none");
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

            $('#ZWHJLFJ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3857584e10185b8183a535ef3'
	});

        });
        



	SEL_USERDetailCol = 'SEL_USER';
	

function SEL_USERClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowSEL_USER = function(mapping,rowData){
					

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

						if(SEL_USERDetailCol == mapVer.targetName){
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

                iframeWin.initGrid(                "1"
                , "20","select * from PARTY_ZZWY_DXZZ",'[{"label":"人员id","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部名称","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"党支部职务","width":"50","align":"center","orderBy":"3","name":"USER_POST_NAME"}]','[{"name":"USER_ID","targetName":"SEL_USER_ID","targetNameName":"所选人员id","display":"人员id","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"SEL_USER","targetNameName":"党小组会/党员大会接收人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部名称","transform":"","lookupType":"","filter":true},{"name":"USER_POST_NAME","targetName":"","targetNameName":"","display":"党支部职务","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowSEL_USER,this.getParamsValue,'','BXWYYBRXQS-SEL_USER',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(SEL_USERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#SEL_USER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function SEL_USERDetail(id){
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


			$('#SEL_USER')
	.on(' focus',function(e){
	SEL_USERClickFun();
	this.blur();
});

/*
$('#SEL_USERButton').on('click',function(e){
	SEL_USERClickFun();
	this.blur();
});

$('#SEL_USERButton').click(function(event) {
   $('#SEL_USER').trigger('focus');
});*/





attachBpmId =   null  ;

var fileformValue = id;


$('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC',
    showType: 'table',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'table'){
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'table'){
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'table'){
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC"){
        return;
    }

    if (required){
        $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").attr("required","required");
   }else{
        $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").removeAttr("required");
        $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").attr("required");
    var bpmRequire = $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").attr("title");
        var itemListNum = 0;
        if('span' == 'table'){
            itemListNum = $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC"){
        return;
    }
    if(operability){
        $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").show();
    }else{
        $("#fOh8VlWFfX1MD36r5v82yXAZVW7g7ayC").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "CBHXRJL"){
		return;
	}
	if(operability){
		$("#CBHXRJL").show();
	}else{
		$("#CBHXRJL").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "CBHXRJL"){
return;
}
if(operability){
$("#CBHXRJL").css("display","inline-block");
}else{
$("#CBHXRJL").css("display","none");
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

            $('#CBHXRJL').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e383d0387f0184123eecad0f76'
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
                , "20","select * from DYN_THREE_FOUR t order by MEET_DATE desc",'[{"label":"会议时间","width":"50","align":"center","orderBy":"","name":"MEET_DATE"},{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID1","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_DATE","targetName":"","targetNameName":"","display":"会议时间","transform":"","lookupType":"","filter":false},{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME1","targetNameName":"三会一课名称1","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId1","targetNameName":"三会一课ID1","display":"三会一课ID1","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME1,this.getParamsValue,'','BXWYYBRXQS-THREE_FOUR_NAME1',this.jsSuccess);


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
	if (tagId != "YBHXRJLXQ"){
		return;
	}
	if(operability){
		$("#YBHXRJLXQ").show();
	}else{
		$("#YBHXRJLXQ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "YBHXRJLXQ"){
return;
}
if(operability){
$("#YBHXRJLXQ").css("display","inline-block");
}else{
$("#YBHXRJLXQ").css("display","none");
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

            $('#YBHXRJLXQ').on('click',function(e){
            
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


$('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc"){
        return;
    }

    if (required){
        $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").attr("required","required");
   }else{
        $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").removeAttr("required");
        $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").attr("required");
    var bpmRequire = $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc"){
        return;
    }
    if(operability){
        $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").show();
    }else{
        $("#lZ3piw0j4appqrcjQIOdD8eUOy3OAIAc").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "YBHXRJLFJ"){
		return;
	}
	if(operability){
		$("#YBHXRJLFJ").show();
	}else{
		$("#YBHXRJLFJ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "YBHXRJLFJ"){
return;
}
if(operability){
$("#YBHXRJLFJ").css("display","inline-block");
}else{
$("#YBHXRJLFJ").css("display","none");
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

            $('#YBHXRJLFJ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3857584e10185aa562fb969e8'
	});

        });
        


attachBpmId =   null  ;

var fileformValue = id;


$('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb',
    showType: 'span',
        ready:function(){
        var addOrDelInfo = null;
        if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
            addOrDelInfo = attachBpmInfo.delOrAdd['V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb'];
        }
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {
                if('span' == 'span'){
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                    });
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('div.uploader-file-item').unbind("mouseover");
                }else{
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('.attachment_tableDel').show();
                }


            }else {
                if('span' == 'span'){
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('.attachment_tableDel').hide();
                }


            }
        }else{
            if(true == true ? false : true){
                if('span' == 'span'){
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                    });
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                    });
                }else{
                    $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('.attachment_tableDel').hide();
                }
            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb"){
        return;
    }

    if (required){
        $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").attr("required","required");
   }else{
        $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").removeAttr("required");
        $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").attr("required");
    var bpmRequire = $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb"){
        return;
    }
    if(operability){
        $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").show();
    }else{
        $("#V5i8Pvg1G6cXaRgre2qqgTntH5LZHaXb").hide();
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
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3857584e10185aa679f686bfd'
	});

        });
            if(typeof EformFlow == 'undefined'){
 var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
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
    
$(document).ready(function(){
setTimeout(function(){
$("input").css('color',"#0088cc");
$("label").css('color',"#ff0000");
clearTimeout(this)
},500)
});


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