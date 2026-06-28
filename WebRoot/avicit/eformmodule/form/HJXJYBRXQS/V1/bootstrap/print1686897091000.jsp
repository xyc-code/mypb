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
   预备人选请示 
 </div>
 <table style=" border: 1px solid;" id="UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="REQUST_DATE" class=" " style=";" id="iEMtQFw686mzEbzv5bC1W0gb3WCTkSZv"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid;"><label for="AUTO_CODE" class=" " style=";" id="pArG5W8gi5xiAdiVuIS0QeMTcEZTTQ4G"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:18%; border: 1px solid;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="USER_NAME" class=" " style=";" id="AwoSCNh0VwQZbDo4Ja3m14X0CPxgg24u"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="255" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid;"><label for="DEPT_NAME" class=" " style=";" id="pQ8qGkNjdFI0ikjohRL4XEYjfNw5lJQ2"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:18%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="PARTY_NAME" class=" " style=";" id="af50WmbSENtxBueSuNJMJ7ifsNljh0cz"> <i class="required">*</i>申请人所在党支部： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="申请人所在党支部" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; border: 1px solid; text-align: right;"><label for="PARTY_NAME_NEW" class=" " style=";" id="PARTY_NAME_NEWEformLabel"> <i class="required">*</i>选举党组织名称： </label> </td> 
    <td style="width:18%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" title="选举党组织名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME_NEW"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAME_NEWButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="PARTY_TYPE" class=" " style=";" id="PARTY_TYPEEformLabel"> <i class="required">*</i>选举类型： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="PARTY_TYPE" title="选举类型" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE1" name="PARTY_TYPE" title="选举类型" value="1" required <c:if test="${map['PARTY_TYPE'] eq '1'}">checked="true"</c:if> />党组织成立 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE2" name="PARTY_TYPE" title="选举类型" value="2" required <c:if test="${map['PARTY_TYPE'] eq '2'}">checked="true"</c:if> />党组织换届选举 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="PARTY_TYPE3" name="PARTY_TYPE" title="选举类型" value="3" required <c:if test="${map['PARTY_TYPE'] eq '3'}">checked="true"</c:if> />成立纪律检查委员会 </label> 
     </div></td> 
    <td style="width:18%; border: 1px solid; text-align: right;"><label for="USER_TEL" class=" " style=";" id="USER_TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
    <td style="width:18%; border: 1px solid; text-align: left;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="USER_TEL" name="USER_TEL" title="申请人电话" maxlength="255" customset="true" value="<c:out  value='${map["USER_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="THREE_FOUR_NAME" class=" " style=";" id="THREE_FOUR_NAMEEformLabel"> <i class="required">*</i>支委会记录： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="THREE_FOUR_NAME" name="THREE_FOUR_NAME" title="三会一课名称" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><p><a id="ZWHJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId" name="THREE_FOUR_ID" title="三会一课ID" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会上传附件： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="ZWHJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><label for="SEL_USER" class=" " style=";" id="SEL_USEREformLabel"> <i class="required">*</i>党小组会/党员大会接收人： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="SEL_USER" name="SEL_USER" title="党小组会/党员大会接收人" maxlength="255" value="<c:out  value='${map["SEL_USER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="SEL_USERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2">提示：若为小组会请选择本支部全部党小组长，若为党员大会请选择组织委员。</td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"酝酿候选人初步人选记录：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 酝酿候选人初步人选记录： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="iCczmLiZGN8zyMc17737IFhvG6ERZso7" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="CBHXRJL" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; border: 1px solid; text-align: right;"><label for="THREE_FOUR_NAME1" class=" " style=";" id="THREE_FOUR_NAME1EformLabel"> 支委会确定预备人选记录： </label> </td> 
    <td style="width:20%; border: 1px solid; text-align: left;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="THREE_FOUR_NAME1" name="THREE_FOUR_NAME1" title="三会一课名称1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_NAME1"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="THREE_FOUR_NAME1Button"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:36%; border: 1px solid; text-align: left;" colspan="2"><p><a id="YBHXRJLXQ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="详情"> <span class="fa fa-fw fa-copy"></span> 详情 </a> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="threeFourId1" name="THREE_FOUR_ID1" title="三会一课ID1" maxlength="255" value="<c:out  value='${map["THREE_FOUR_ID1"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"支委会确定候选人预备人选：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 支委会确定候选人预备人选： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="YBHXRJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"纪检委员人选资格审查表：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 纪检委员人选资格审查表： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="JJWYZGSCB" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
   <tr> 
    <td style="width:15%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"请选择","labelname":"候选人预备人选批复：","labeltype":"","ischuantou":"","colisvisible":"y","colismust":"","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="请选择" class=" " style=";" id="请选择EformLabel"> 候选人预备人选批复： </label> </td> 
    <td style="width:20%; border: 1px solid;"> 
     <div id="c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
    <td style="width:36%; border: 1px solid;" colspan="2"><a id="JGPF" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="SEL_USER_ID" name="SEL_USER_ID" title="所选人员id" maxlength="255" value="<c:out  value='${map["SEL_USER_ID"]}'/>"> 
 </div>
 <p></p>
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
    var formInfoId = "948e83e3828f72f301828ffcb103358e";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_HUANJIE_YBRX";
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

window.AUTO_CODEautocode = new AutoCode('HJXJYBRXQS',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","");
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
						autoCode: "HJXJYBRXQS",
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
									autoCode: "HJXJYBRXQS",
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
 $("#JJWYZGSCB").show(); 
 $("#JGPF").show();
 if(floweditor.flowModel.activityname == 'task1'){
 
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 7){
 $(this).hide();
 
 }
});
 }else{
 if(floweditor.flowModel.activityname == 'task2' 
 
 ){
 
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 8){
 $(this).hide();
 
 }
});
 }
 if(floweditor.flowModel.activityname == 'task3' || floweditor.flowModel.activityname == 'task4' || floweditor.flowModel.activityname == 'task6' ||floweditor.flowModel.activityname == 'task11'|| floweditor.flowModel.activityname == 'task12'|| floweditor.flowModel.activityname == 'task13'|| floweditor.flowModel.activityname == 'task14'|| floweditor.flowModel.activityname == 'task15'|| floweditor.flowModel.activityname == 'task16'
 
 ){
 
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 11){
 $(this).hide();
 
 }
});
 } 
 

 
 
 
 
 }
 
 
 
 };
}else{
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 7){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"党支部名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"PARTY_NAME","targetName":"PARTY_NAME_NEW","targetNameName":"选举党组织名称","display":"党支部名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME_NEW,this.getParamsValue,'','HJXJYBRXQS-PARTY_NAME_NEW',this.jsSuccess);


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




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "PARTY_TYPE"){
        return true;
    }
    if(operability){
                        var $tag = $('#PARTY_TYPE1');
            $tag.removeAttr("disabled");
                                var $tag = $('#PARTY_TYPE2');
            $tag.removeAttr("disabled");
                                var $tag = $('#PARTY_TYPE3');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "PARTY_TYPE"){
        return;
    }

    if(operability){
        $("#PARTY_TYPE").show();
    }else{
        $("#PARTY_TYPE").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "PARTY_TYPE"){
        return;
    }

    if (required){
        $('input[name="PARTY_TYPE"]').attr("required","required");
    }else{
        $('input[name="PARTY_TYPE"]').removeAttr("required","required");
    }
});


    if(typeof customValidate != "undefined" && customValidate != null && customValidate != undefined){
        customValidate.put('USER_TEL',/^[0-9]*$/);
    }




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
                , "20","select * from DYN_THREE_FOUR t",'[{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME","targetNameName":"三会一课名称","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId","targetNameName":"三会一课ID","display":"三会一课ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME,this.getParamsValue,'','HJXJYBRXQS-THREE_FOUR_NAME',this.jsSuccess);


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

setTimeout(function(){
    $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK"){
        return;
    }

    if (required){
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("required","required");
   }else{
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").removeAttr("required");
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("required");
    var bpmRequire = $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK"){
        return;
    }
    if(operability){
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").show();
    }else{
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").hide();
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
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b38d6c181aa0'
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
                , "20","select * from PARTY_ZZWY_DXZZ",'[{"label":"人员id","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"职位","width":"50","align":"center","orderBy":"3","name":"USER_POST_NAME"}]','[{"name":"USER_ID","targetName":"SEL_USER_ID","targetNameName":"所选人员id","display":"人员id","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"SEL_USER","targetNameName":"党小组会/党员大会接收人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":true},{"name":"USER_POST_NAME","targetName":"","targetNameName":"","display":"职位","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowSEL_USER,this.getParamsValue,'','HJXJYBRXQS-SEL_USER',this.jsSuccess);


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

setTimeout(function(){
    $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'iCczmLiZGN8zyMc17737IFhvG6ERZso7',
        showType: 'table',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['iCczmLiZGN8zyMc17737IFhvG6ERZso7'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'table'){
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'table'){
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'table'){
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['iCczmLiZGN8zyMc17737IFhvG6ERZso7'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "iCczmLiZGN8zyMc17737IFhvG6ERZso7"){
        return;
    }

    if (required){
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("required","required");
   }else{
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").removeAttr("required");
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("required");
    var bpmRequire = $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("title");
        var itemListNum = 0;
        if('span' == 'table'){
            itemListNum = $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "iCczmLiZGN8zyMc17737IFhvG6ERZso7"){
        return;
    }
    if(operability){
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").show();
    }else{
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").hide();
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
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f3018315e1e2251635'
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
                , "20","select * from DYN_THREE_FOUR t",'[{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"}]','[{"name":"ID","targetName":"threeFourId1","targetNameName":"三会一课ID1","display":"三会一课ID","transform":"","lookupType":"","filter":false},{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME1","targetNameName":"三会一课名称1","display":"三会一课名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowTHREE_FOUR_NAME1,this.getParamsValue,'','HJXJYBRXQS-THREE_FOUR_NAME1',this.jsSuccess);


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

setTimeout(function(){
    $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h"){
        return;
    }

    if (required){
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("required","required");
   }else{
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").removeAttr("required");
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("required");
    var bpmRequire = $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h"){
        return;
    }
    if(operability){
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").show();
    }else{
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").hide();
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
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3989c4b1b96'
	});

        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1"){
        return;
    }

    if (required){
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("required","required");
   }else{
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").removeAttr("required");
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("required");
    var bpmRequire = $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1"){
        return;
    }
    if(operability){
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").show();
    }else{
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "JJWYZGSCB"){
		return;
	}
	if(operability){
		$("#JJWYZGSCB").show();
	}else{
		$("#JJWYZGSCB").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "JJWYZGSCB"){
return;
}
if(operability){
$("#JJWYZGSCB").css("display","inline-block");
}else{
$("#JJWYZGSCB").css("display","none");
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

            $('#JJWYZGSCB').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3a6cee61c82'
	});

        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I"){
        return;
    }

    if (required){
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("required","required");
   }else{
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").removeAttr("required");
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("required");
    var bpmRequire = $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I"){
        return;
    }
    if(operability){
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").show();
    }else{
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").hide();
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
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3a8734c1cd4'
	});

        });
            if(typeof EformFlow == 'undefined'){
 var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
console.log(userId);
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