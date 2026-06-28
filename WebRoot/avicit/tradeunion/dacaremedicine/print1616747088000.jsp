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
 <p style="text-align: center;"><span style="font-size: 24pt;"><strong><span style="color: #ff0000;">金航数码科技有限责任公司文件</span></strong></span></p>
 <table style="border: 1px solid #f7000c; " id="a59253de-6e15-4112-81f9-60c9c21a471e" border="1" bordercolor="rgb(247, 0, 12)" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="FILE_NO" class=" " style="color:red;"> <i class="required">*</i>发文编号 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div id="FILE_NO" class="bpm_self_class " title="发文编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="FILE_NO" value="<c:out  value='${map["FILE_NO"]}'/>"> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="URGENCY" class=" " style="color:red;"> 缓急程度 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="URGENCY" name="URGENCY" title="缓急程度" initvalue="<c:out  value='${map["URGENCY"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="TITLE" class=" " style="color:red;"> <i class="required">*</i>标题 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="TITLE" name="TITLE" title="标题" maxlength="50" value="<c:out  value='${map["TITLE"]}'/>"> 
     </div> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="SECRET_LEVEL" class=" " style="color:red;"> 秘密等级 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="SECRET_LEVEL" name="SECRET_LEVEL" title="秘密等级" initvalue="<c:out  value='${map["SECRET_LEVEL"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="SEND_FILE_TYPE" class=" " style="color:red;"> 发文类型 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="SEND_FILE_TYPE" name="SEND_FILE_TYPE" title="发文类型" initvalue="<c:out  value='${map["SEND_FILE_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="TYPE_CLASSES" class=" " style="color:red;"> 模板类型 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="TYPE_CLASSES" name="TYPE_CLASSES" title="模板类型" initvalue="<c:out  value='${map["TYPE_CLASSES"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="PRINT_NUM" class=" " style="color:red;"> 印发份数 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control" style=";" id="PRINT_NUM" name="PRINT_NUM" data-min="-9999999999" data-max="9999999999" data-precision="0" title="印发份数" maxlength="10" value="<c:out  value='${map["PRINT_NUM"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;">radio测试</td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <label class="radio-inline" style=";"> <input type="radio" id="RADIO1" name="RADIO" title="radio测试" value="1" <c:if test="${map['RADIO'] eq '1'}">checked="true"</c:if> />数据1 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="RADIO2" name="RADIO" title="radio测试" value="2" <c:if test="${map['RADIO'] eq '2'}">checked="true"</c:if> />数据2 </label> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><strong><span style="color: #ff0000;">部门领导审批</span></strong></td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div id="d28208e7-23a1-49bb-b6e5-d29d8bc895c9" class="bpm_self_class " title="部门领导审批"> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;" rowspan="3"><strong><span style="color: #ff0000;">会签</span></strong></td> 
    <td style="width:27%; border: 1px solid #f7000c;" rowspan="3"> 
     <div id="d1f1a8b4-9c5a-4461-a667-732c160a1685" class="bpm_self_class " title="会签"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><strong><span style="color: #ff0000;">公司领导审批</span></strong></td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div id="59779fbf-0ae0-4133-bea6-daa28c56f1b5" class="bpm_self_class " title="公司领导审批"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><strong><span style="color: #ff0000;">签发</span></strong></td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div id="b1889962-dee0-4a00-a7b2-1805c423d9d0" class="bpm_self_class " title="签发"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><strong><span style="color: #ff0000;">核稿</span></strong></td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div id="37767809-7822-4150-bd9c-7282f6d8f29a" class="bpm_self_class " title="核稿"> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;"><strong><span style="color: #ff0000;">校验</span></strong></td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div id="42e0adea-6d99-4cc9-af0d-0d15aa0e89fa" class="bpm_self_class " title="校验"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="MAIN_SENDName" class=" " style="color:red;"> <i class="required">*</i>主送 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" id="MAIN_SEND" name="MAIN_SEND" title="主送" value="<c:out  value='${map["MAIN_SEND"]}'/>"> 
      <input type="text" class="form-control" style=" " id="MAIN_SENDName" name="MAIN_SENDName" required title="主送" value="<c:out  value='${map["MAIN_SENDName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="MAIN_SENDButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="COPY_SENDName" class=" " style="color:red;"> 抄送 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" id="COPY_SEND" name="COPY_SEND" title="抄送" value="<c:out  value='${map["COPY_SEND"]}'/>"> 
      <input type="text" class="form-control" style=" " id="COPY_SENDName" name="COPY_SENDName" title="抄送" value="<c:out  value='${map["COPY_SENDName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="COPY_SENDButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="DRAFT_DEPT_ID" class=" " style="color:red;"> 拟稿单位 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_DEPT_ID" name="DRAFT_DEPT_ID" readonly title="拟稿单位" maxlength="50" value="<c:out  value='${map["DRAFT_DEPT_ID"]}'/>"> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="DRAFT_USER_ID" class=" " style="color:red;"> 拟稿人 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_USER_ID" name="DRAFT_USER_ID" readonly title="拟稿人" maxlength="50" value="<c:out  value='${map["DRAFT_USER_ID"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="DRAFT_DATE" class=" " style="color:red;"> 拟稿日期 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_DATE" name="DRAFT_DATE" readonly title="拟稿日期" maxlength="50" value="<c:out  value='${map["DRAFT_DATE"]}'/>"> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="DRAFT_USER_TEL" class=" " style="color:red;"> 电话 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DRAFT_USER_TEL" name="DRAFT_USER_TEL" title="电话" maxlength="50" value="<c:out  value='${map["DRAFT_USER_TEL"]}'/>"> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><label for="SIGN_DATE" class=" " style="color:red;"> 成文日期 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="成文日期" class="form-control date-picker" style=";" id="SIGN_DATE" name="SIGN_DATE" value="${map['SIGN_DATE']}" readonly> 
      <span id="SIGN_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;"><label for="SEND_DATE" class=" " style="color:red;"> 印发日期 </label> </td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="印发日期" class="form-control date-picker" style=";" id="SEND_DATE" name="SEND_DATE" value="${map['SEND_DATE']}" readonly> 
      <span id="SEND_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;"><strong><span style="color: #ff0000;">附件</span></strong></td> 
    <td style="width:81%; border: 1px solid #f7000c;" colspan="3"> 
     <div id="47b965c7-58be-4922-8806-c4b1d7266d2d" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:16%; border: 1px solid #f7000c;">checkbox测试</td> 
    <td style="width:27%; border: 1px solid #f7000c;"> 
     <div class="input-group-sm "> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="CHECKBOX1" name="CHECKBOX" title="多选框" value="1" <c:forEach items="${ map['CHECKBOX'] }" var="s"> 
       <c:if test="${s eq '1'}">
         checked="true"</c:if> </c:forEach> /> 值1 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="CHECKBOX2" name="CHECKBOX" title="多选框" value="2" <c:forEach items="${ map['CHECKBOX'] }" var="s"> 
       <c:if test="${s eq '2'}">
         checked="true"</c:if> </c:forEach> /> 值2 
       </label> 
     </div></td> 
    <td style="width:27%; border: 1px solid #f7000c;"></td> 
    <td style="width:27%; border: 1px solid #f7000c;"></td> 
   </tr> 
  </tbody> 
 </table>
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
        <script src="avicit/eformextjs/sendfile/sendfile.js?_=Math.random()" type="text/javascript"></script>
        <script src="static/wps/js/wps_sdk.js" type="text/javascript"></script>
        <script src="avicit/ims/oa/administration/oatempdesign/js/wps_edit.js" type="text/javascript"></script>
        <script src="static/ims/oa/common/ntko-v6010/conf/ntko6010key.js" type="text/javascript"></script>
        <script src="static/ims/oa/common/ntko-v6010/officecontrol/ntkobackground.min.js" type="text/javascript"></script>
        <script src="avicit/ims/oa/administration/oatempdesign/js/OaWordPlugin6342.js" type="text/javascript"></script>
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
    var formInfoId = "402882fa5d166a5a015d16743864013a";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '$${entryId}';
    var tableName = "DYN_SEND_FILE";
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
        

$("#FILE_NO").attr("initvalue",$("input[name='FILE_NO']",window.pageParams.content||document).val());
if ($("input[name='FILE_NO']",window.pageParams.content||document).val()==''||$("input[name='FILE_NO']",window.pageParams.content||document).val()==null||$("input[name='FILE_NO']",window.pageParams.content||document).val()==undefined ){

window.FILE_NOautocode = new AutoCode('OA_SEND_FILE',"FILE_NO",true,"FILE_NO",undefined
	,function(){$("#FILE_NO").find("input").attr("style","");}

);


}else{
	$("#FILE_NO").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var value = $("input[name='FILE_NO']",window.pageParams.content||document).val();
		var flag = $("input[name='FILE_NO']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#FILE_NO").attr("initvalue");
		var valuePure = $("#FILE_NO").find("#autoCode").val();
		if (flag != "disabled" && window.FILE_NOautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=FILE_NO',
					type: 'POST',
					async:false,
					data: {
						autoCode: "OA_SEND_FILE",
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
						}else{
							formData["FILE_NO"] = backData.value;
							$("input[name='FILE_NO']",window.pageParams.content||document).val(backData.value);
							$("#FILE_NO").attr("initvalue",backData.value);
						}
					}
				});
			}else{
				delete formData["FILE_NO"];
				$("input[name='FILE_NO']",window.pageParams.content||document).val(valuePure);
			}
		}
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='FILE_NO']",window.pageParams.content||document).val();
		var require = $("#FILE_NO").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FILE_NO"){
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
				setTimeout(function(){
				window.FILE_NOautocode = new AutoCode('OA_SEND_FILE',"FILE_NO",true,"FILE_NO",undefined||comId,
			            function(){$("#FILE_NO").find("input").attr("style","");}
						,true,$("input[name='FILE_NO']",window.pageParams.content||document).val());
				$("#" + tagId).find("input[name='autoCode']").removeAttr("disabled");
				$("#" + tagId).find("#autoCode_edit").removeAttr("style");

			}, "500");

			}
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "FILE_NO"){
		return;
	}
	if(operability){
		$("#FILE_NO").show();
	}else{
		$("#FILE_NO").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FILE_NO"){
		return;
	}
	if (required){
		$("#FILE_NO").attr("required","required");
	}
});



$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "OA_FILE_URGENCY"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#URGENCY').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["URGENCY"] != null && pageParams.formData["URGENCY"] != ''){    $('#URGENCY').val(pageParams.formData["URGENCY"]);}else if($('#URGENCY').attr("initValue")!=undefined&&$.trim($('#URGENCY').attr("initValue"))!=''){    $('#URGENCY').val($('#URGENCY').attr("initValue"));    pageParams.formData["URGENCY"] = $('#URGENCY').attr("initValue");}else{    }}});



$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_FILE_SECRET_LEVEL"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SECRET_LEVEL').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SECRET_LEVEL"] != null && pageParams.formData["SECRET_LEVEL"] != ''){    $('#SECRET_LEVEL').val(pageParams.formData["SECRET_LEVEL"]);}else if($('#SECRET_LEVEL').attr("initValue")!=undefined&&$.trim($('#SECRET_LEVEL').attr("initValue"))!=''){    $('#SECRET_LEVEL').val($('#SECRET_LEVEL').attr("initValue"));    pageParams.formData["SECRET_LEVEL"] = $('#SECRET_LEVEL').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "OA_SEND_FILE_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SEND_FILE_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SEND_FILE_TYPE"] != null && pageParams.formData["SEND_FILE_TYPE"] != ''){    $('#SEND_FILE_TYPE').val(pageParams.formData["SEND_FILE_TYPE"]);}else if($('#SEND_FILE_TYPE').attr("initValue")!=undefined&&$.trim($('#SEND_FILE_TYPE').attr("initValue"))!=''){    $('#SEND_FILE_TYPE').val($('#SEND_FILE_TYPE').attr("initValue"));    pageParams.formData["SEND_FILE_TYPE"] = $('#SEND_FILE_TYPE').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "OA_TYPE_CLASSES"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#TYPE_CLASSES').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["TYPE_CLASSES"] != null && pageParams.formData["TYPE_CLASSES"] != ''){    $('#TYPE_CLASSES').val(pageParams.formData["TYPE_CLASSES"]);}else if($('#TYPE_CLASSES').attr("initValue")!=undefined&&$.trim($('#TYPE_CLASSES').attr("initValue"))!=''){    $('#TYPE_CLASSES').val($('#TYPE_CLASSES').attr("initValue"));    pageParams.formData["TYPE_CLASSES"] = $('#TYPE_CLASSES').attr("initValue");}else{    }}});

$('#PRINT_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PRINT_NUM').trigger('click');
});

$("#PRINT_NUM").on("keyup",function(){
    if($("#PRINT_NUM").val()>9999999999){
        $("#PRINT_NUM").val(9999999999);
        layer.msg("印发份数最大值为\""+9999999999+"\"");
    }
});
if (entryId){
            $.ajax({
        url : 'platform/bpm/business/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '8a58cfd6657e2f0801657e34a1ff00bf-1@bmldsp'
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                                        var html = "";
                    for (var i = 0; i < result.length; i++) {
                        var data = result[i];
                        var displayStyle = data.displayStyle.split(",");

                        for (var j = 0; j < displayStyle.length; j++) {
                            if(data.showSign =="1" && displayStyle[j] == "user"){
                                html +="<img width=\"80\" height=\"30\" title=\"电子签名：" + data.user + "\" style=\"cursor: pointer;\" src=\"platform/cc/sysuserphoto/upload/signphoto?sysUserId="+data.userId+"\"/>";
                            }else{
                                html += data['' + displayStyle[j] + ''];
                                html += "&nbsp;&nbsp;";
                            }
                        }
                        html += "<br>";
                    }
                                        
                    $('#d28208e7-23a1-49bb-b6e5-d29d8bc895c9').html(html);
                     jQuery("#d28208e7-23a1-49bb-b6e5-d29d8bc895c9").css({});
         			 jQuery("label[for='d28208e7-23a1-49bb-b6e5-d29d8bc895c9']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "d28208e7-23a1-49bb-b6e5-d29d8bc895c9"){
            return true;
        }
        if(!operability){
            jQuery("#d28208e7-23a1-49bb-b6e5-d29d8bc895c9").css("display","none");
            jQuery("label[for='d28208e7-23a1-49bb-b6e5-d29d8bc895c9']").css("display","none");
        }else{
            jQuery("#d28208e7-23a1-49bb-b6e5-d29d8bc895c9").css("display","block");
            jQuery("label[for='d28208e7-23a1-49bb-b6e5-d29d8bc895c9']").css("display","block");
        }
    
         jQuery("#d28208e7-23a1-49bb-b6e5-d29d8bc895c9").css({});
          jQuery("label[for='d28208e7-23a1-49bb-b6e5-d29d8bc895c9']").css({});
        });

}
if (entryId){
            $.ajax({
        url : 'platform/bpm/business/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '8a58cfd6657e2f0801657e34a1ff00bf-1@hq'
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                                        var html = "";
                    for (var i = 0; i < result.length; i++) {
                        var data = result[i];
                        var displayStyle = data.displayStyle.split(",");

                        for (var j = 0; j < displayStyle.length; j++) {
                            if(data.showSign =="1" && displayStyle[j] == "user"){
                                html +="<img width=\"80\" height=\"30\" title=\"电子签名：" + data.user + "\" style=\"cursor: pointer;\" src=\"platform/cc/sysuserphoto/upload/signphoto?sysUserId="+data.userId+"\"/>";
                            }else{
                                html += data['' + displayStyle[j] + ''];
                                html += "&nbsp;&nbsp;";
                            }
                        }
                        html += "<br>";
                    }
                                        
                    $('#d1f1a8b4-9c5a-4461-a667-732c160a1685').html(html);
                     jQuery("#d1f1a8b4-9c5a-4461-a667-732c160a1685").css({});
         			 jQuery("label[for='d1f1a8b4-9c5a-4461-a667-732c160a1685']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "d1f1a8b4-9c5a-4461-a667-732c160a1685"){
            return true;
        }
        if(!operability){
            jQuery("#d1f1a8b4-9c5a-4461-a667-732c160a1685").css("display","none");
            jQuery("label[for='d1f1a8b4-9c5a-4461-a667-732c160a1685']").css("display","none");
        }else{
            jQuery("#d1f1a8b4-9c5a-4461-a667-732c160a1685").css("display","block");
            jQuery("label[for='d1f1a8b4-9c5a-4461-a667-732c160a1685']").css("display","block");
        }
    
         jQuery("#d1f1a8b4-9c5a-4461-a667-732c160a1685").css({});
          jQuery("label[for='d1f1a8b4-9c5a-4461-a667-732c160a1685']").css({});
        });

}
if (entryId){
            $.ajax({
        url : 'platform/bpm/business/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '8a58cfd6657e2f0801657e34a1ff00bf-1@gsldsp'
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                                        var html = "";
                    for (var i = 0; i < result.length; i++) {
                        var data = result[i];
                        var displayStyle = data.displayStyle.split(",");

                        for (var j = 0; j < displayStyle.length; j++) {
                            if(data.showSign =="1" && displayStyle[j] == "user"){
                                html +="<img width=\"80\" height=\"30\" title=\"电子签名：" + data.user + "\" style=\"cursor: pointer;\" src=\"platform/cc/sysuserphoto/upload/signphoto?sysUserId="+data.userId+"\"/>";
                            }else{
                                html += data['' + displayStyle[j] + ''];
                                html += "&nbsp;&nbsp;";
                            }
                        }
                        html += "<br>";
                    }
                                        
                    $('#59779fbf-0ae0-4133-bea6-daa28c56f1b5').html(html);
                     jQuery("#59779fbf-0ae0-4133-bea6-daa28c56f1b5").css({});
         			 jQuery("label[for='59779fbf-0ae0-4133-bea6-daa28c56f1b5']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "59779fbf-0ae0-4133-bea6-daa28c56f1b5"){
            return true;
        }
        if(!operability){
            jQuery("#59779fbf-0ae0-4133-bea6-daa28c56f1b5").css("display","none");
            jQuery("label[for='59779fbf-0ae0-4133-bea6-daa28c56f1b5']").css("display","none");
        }else{
            jQuery("#59779fbf-0ae0-4133-bea6-daa28c56f1b5").css("display","block");
            jQuery("label[for='59779fbf-0ae0-4133-bea6-daa28c56f1b5']").css("display","block");
        }
    
         jQuery("#59779fbf-0ae0-4133-bea6-daa28c56f1b5").css({});
          jQuery("label[for='59779fbf-0ae0-4133-bea6-daa28c56f1b5']").css({});
        });

}
if (entryId){
            $.ajax({
        url : 'platform/bpm/business/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '8a58cfd6657e2f0801657e34a1ff00bf-1@qf'
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                                        var html = "";
                    for (var i = 0; i < result.length; i++) {
                        var data = result[i];
                        var displayStyle = data.displayStyle.split(",");

                        for (var j = 0; j < displayStyle.length; j++) {
                            if(data.showSign =="1" && displayStyle[j] == "user"){
                                html +="<img width=\"80\" height=\"30\" title=\"电子签名：" + data.user + "\" style=\"cursor: pointer;\" src=\"platform/cc/sysuserphoto/upload/signphoto?sysUserId="+data.userId+"\"/>";
                            }else{
                                html += data['' + displayStyle[j] + ''];
                                html += "&nbsp;&nbsp;";
                            }
                        }
                        html += "<br>";
                    }
                                        
                    $('#b1889962-dee0-4a00-a7b2-1805c423d9d0').html(html);
                     jQuery("#b1889962-dee0-4a00-a7b2-1805c423d9d0").css({});
         			 jQuery("label[for='b1889962-dee0-4a00-a7b2-1805c423d9d0']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "b1889962-dee0-4a00-a7b2-1805c423d9d0"){
            return true;
        }
        if(!operability){
            jQuery("#b1889962-dee0-4a00-a7b2-1805c423d9d0").css("display","none");
            jQuery("label[for='b1889962-dee0-4a00-a7b2-1805c423d9d0']").css("display","none");
        }else{
            jQuery("#b1889962-dee0-4a00-a7b2-1805c423d9d0").css("display","block");
            jQuery("label[for='b1889962-dee0-4a00-a7b2-1805c423d9d0']").css("display","block");
        }
    
         jQuery("#b1889962-dee0-4a00-a7b2-1805c423d9d0").css({});
          jQuery("label[for='b1889962-dee0-4a00-a7b2-1805c423d9d0']").css({});
        });

}
if (entryId){
            $.ajax({
        url : 'platform/bpm/business/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '8a58cfd6657e2f0801657e34a1ff00bf-1@hg'
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                                        var html = "";
                    for (var i = 0; i < result.length; i++) {
                        var data = result[i];
                        var displayStyle = data.displayStyle.split(",");

                        for (var j = 0; j < displayStyle.length; j++) {
                            if(data.showSign =="1" && displayStyle[j] == "user"){
                                html +="<img width=\"80\" height=\"30\" title=\"电子签名：" + data.user + "\" style=\"cursor: pointer;\" src=\"platform/cc/sysuserphoto/upload/signphoto?sysUserId="+data.userId+"\"/>";
                            }else{
                                html += data['' + displayStyle[j] + ''];
                                html += "&nbsp;&nbsp;";
                            }
                        }
                        html += "<br>";
                    }
                                        
                    $('#37767809-7822-4150-bd9c-7282f6d8f29a').html(html);
                     jQuery("#37767809-7822-4150-bd9c-7282f6d8f29a").css({});
         			 jQuery("label[for='37767809-7822-4150-bd9c-7282f6d8f29a']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "37767809-7822-4150-bd9c-7282f6d8f29a"){
            return true;
        }
        if(!operability){
            jQuery("#37767809-7822-4150-bd9c-7282f6d8f29a").css("display","none");
            jQuery("label[for='37767809-7822-4150-bd9c-7282f6d8f29a']").css("display","none");
        }else{
            jQuery("#37767809-7822-4150-bd9c-7282f6d8f29a").css("display","block");
            jQuery("label[for='37767809-7822-4150-bd9c-7282f6d8f29a']").css("display","block");
        }
    
         jQuery("#37767809-7822-4150-bd9c-7282f6d8f29a").css({});
          jQuery("label[for='37767809-7822-4150-bd9c-7282f6d8f29a']").css({});
        });

}
if (entryId){
            $.ajax({
        url : 'platform/bpm/business/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '8a58cfd6657e2f0801657e34a1ff00bf-1@jy'
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                                        var html = "";
                    for (var i = 0; i < result.length; i++) {
                        var data = result[i];
                        var displayStyle = data.displayStyle.split(",");

                        for (var j = 0; j < displayStyle.length; j++) {
                            if(data.showSign =="1" && displayStyle[j] == "user"){
                                html +="<img width=\"80\" height=\"30\" title=\"电子签名：" + data.user + "\" style=\"cursor: pointer;\" src=\"platform/cc/sysuserphoto/upload/signphoto?sysUserId="+data.userId+"\"/>";
                            }else{
                                html += data['' + displayStyle[j] + ''];
                                html += "&nbsp;&nbsp;";
                            }
                        }
                        html += "<br>";
                    }
                                        
                    $('#42e0adea-6d99-4cc9-af0d-0d15aa0e89fa').html(html);
                     jQuery("#42e0adea-6d99-4cc9-af0d-0d15aa0e89fa").css({});
         			 jQuery("label[for='42e0adea-6d99-4cc9-af0d-0d15aa0e89fa']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "42e0adea-6d99-4cc9-af0d-0d15aa0e89fa"){
            return true;
        }
        if(!operability){
            jQuery("#42e0adea-6d99-4cc9-af0d-0d15aa0e89fa").css("display","none");
            jQuery("label[for='42e0adea-6d99-4cc9-af0d-0d15aa0e89fa']").css("display","none");
        }else{
            jQuery("#42e0adea-6d99-4cc9-af0d-0d15aa0e89fa").css("display","block");
            jQuery("label[for='42e0adea-6d99-4cc9-af0d-0d15aa0e89fa']").css("display","block");
        }
    
         jQuery("#42e0adea-6d99-4cc9-af0d-0d15aa0e89fa").css({});
          jQuery("label[for='42e0adea-6d99-4cc9-af0d-0d15aa0e89fa']").css({});
        });

}





$('#MAIN_SENDName').on(' focus',function(e){
    MAIN_SENDClickFun();
    $(this).blur();
});

function MAIN_SENDClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'MAIN_SEND',textFiled:'MAIN_SENDName',viewScope:'currentOrg',selectModel:'multi'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}












$('#COPY_SENDName').on(' focus',function(e){
    COPY_SENDClickFun();
    $(this).blur();
});

function COPY_SENDClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'COPY_SEND',textFiled:'COPY_SENDName',viewScope:'currentOrg',selectModel:'multi'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}









if ($("input[name='DRAFT_DEPT_ID']").val()==''||$("input[name='DRAFT_DEPT_ID']").val()==null||$("input[name='DRAFT_DEPT_ID']").val()==undefined ){
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
	$("#DRAFT_DEPT_ID").val(macoValue);
}



if ($("input[name='DRAFT_USER_ID']").val()==''||$("input[name='DRAFT_USER_ID']").val()==null||$("input[name='DRAFT_USER_ID']").val()==undefined ){
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
	$("#DRAFT_USER_ID").val(macoValue);
}



if ($("input[name='DRAFT_DATE']").val()==''||$("input[name='DRAFT_DATE']").val()==null||$("input[name='DRAFT_DATE']").val()==undefined ){
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
	$("#DRAFT_DATE").val(macoValue);
}





$.datepicker.setDefaults({
showButtonPanel: true,
beforeShow : function( input ) {
setTimeout(function() {
var buttonPane = $(input)
.datepicker( "widget" )
.find( ".ui-datepicker-buttonpane" );
$( "<button>", {
    text: "清除",
    click: function() {
    $.datepicker._clearDate(input);
    }
    }).addClass("ui-state-default ui-priority-primary ui-corner-all").appendTo( buttonPane );
    }, 1 );
    }
    });

            $('#SIGN_DATE').datepicker();
    


    $('#SIGN_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#SIGN_DATE').datepicker('show');
			 $('#SIGN_DATE').datepicker().trigger('click');
					
		});
        

$.datepicker.setDefaults({
showButtonPanel: true,
beforeShow : function( input ) {
setTimeout(function() {
var buttonPane = $(input)
.datepicker( "widget" )
.find( ".ui-datepicker-buttonpane" );
$( "<button>", {
    text: "清除",
    click: function() {
    $.datepicker._clearDate(input);
    }
    }).addClass("ui-state-default ui-priority-primary ui-corner-all").appendTo( buttonPane );
    }, 1 );
    }
    });

            $('#SEND_DATE').datepicker();
    


    $('#SEND_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#SEND_DATE').datepicker('show');
			 $('#SEND_DATE').datepicker().trigger('click');
					
		});
        $('#47b965c7-58be-4922-8806-c4b1d7266d2d').uploaderExt({
    eformUI: 'bootstrap',
    formId:   id   ,
    tableName: '',
    secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
        allowEditsecretLevel:true,
        afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: '47b965c7-58be-4922-8806-c4b1d7266d2d',
        ready:function(){
        var addOrDelInfo = attachBpmInfo.delOrAdd['47b965c7-58be-4922-8806-c4b1d7266d2d'];
        if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
            if(addOrDelInfo.operability) {

                $('#47b965c7-58be-4922-8806-c4b1d7266d2d').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "");
                });
                $('#47b965c7-58be-4922-8806-c4b1d7266d2d').find('div.uploader-file-item').unbind("mouseover");

            }else {

                $('#47b965c7-58be-4922-8806-c4b1d7266d2d').children('.uploader-panel-heading').each(function (index, element) {
                    $(element).find(".uploader-file-picker").css("display", "none");
                });
                $('#47b965c7-58be-4922-8806-c4b1d7266d2d').find('div.uploader-file-item').bind('mouseover',function(){
                    $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                });

            }
        }

        var editSecretInfo = attachBpmInfo.editSecret['47b965c7-58be-4922-8806-c4b1d7266d2d'];

        if (editSecretInfo!=null && editSecretInfo != 'undefined'){
            if(editSecretInfo.modify){
                $('#47b965c7-58be-4922-8806-c4b1d7266d2d').find("[name='fileSecretLevel']").each(function(i,e){
                    $(e).removeAttr("disabled");
                });
            }else{
                $('#47b965c7-58be-4922-8806-c4b1d7266d2d').find("[name='fileSecretLevel']").each(function(i,e){
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
    formSecret: 'SECRET_LEVEL',
    accept:
                    ''
        });

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#47b965c7-58be-4922-8806-c4b1d7266d2d').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "47b965c7-58be-4922-8806-c4b1d7266d2d"){
        return;
    }

    if (required){
        $("#47b965c7-58be-4922-8806-c4b1d7266d2d").attr("required","required");

   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#47b965c7-58be-4922-8806-c4b1d7266d2d").attr("required");
    if (require&&require === "required"){
        var title =  $("#47b965c7-58be-4922-8806-c4b1d7266d2d").attr("title");
        var itemListNum = $('#47b965c7-58be-4922-8806-c4b1d7266d2d').find('.uploader-file-item').size();
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
    if (tagId != "47b965c7-58be-4922-8806-c4b1d7266d2d"){
        return;
    }
    if(operability){
        $("#47b965c7-58be-4922-8806-c4b1d7266d2d").show();
    }else{
        $("#47b965c7-58be-4922-8806-c4b1d7266d2d").hide();
    }
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