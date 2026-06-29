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
  <span style="color: #ff0000;">党委工作计划</span> 
 </div>
 <table style=" border: 1px solid #000000;" id="qyIHbPGwlM0Cd36asw5vBZXa4j9gV0Wm" border="1" bordercolor="#000000" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="FORM_CODE" class=" " style=";" id="FORM_CODEEformLabel"> 编号： </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div id="FORM_CODE" class="bpm_self_class " title="编号：" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="FORM_CODE" value="<c:out  value='${map["FORM_CODE"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="DREAF_DATE" class=" " style=";" id="DREAF_DATEEformLabel"> 创建时间： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DREAF_DATE" name="DREAF_DATE" readonly title="创建时间" maxlength="1000" value="<c:out  value='${map["DREAF_DATE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="DRAF_USER" class=" " style=";" id="DRAF_USEREformLabel"> 创建人： </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAF_USER" name="DRAF_USER" readonly title="创建人" maxlength="1000" value="<c:out  value='${map["DRAF_USER"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="DRAF_DEPT" class=" " style=";" id="DRAF_DEPTEformLabel"> 创建部门： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAF_DEPT" name="DRAF_DEPT" readonly title="创建部门" maxlength="1000" value="<c:out  value='${map["DRAF_DEPT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="QUARTER" class=" " style=";" id="UnOXra77IAtfCfhoMqcd010EXVslX9CG"> <i class="required">*</i>计划类别： </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="QUARTER" name="QUARTER" title="计划类别" initvalue="<c:out  value='${map["QUARTER"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:7%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="ND" class=" " style=";" id="NDEformLabel"> 年度： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="ND" name="ND" title="年度" maxlength="200" value="<c:out  value='${map["ND"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="NAME" class=" " style=";" id="NAMEEformLabel"> <i class="required">*</i>标题 </label> </td> 
    <td style="width:14%; border: 1px solid #000000; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="NAME" name="NAME" title="标题" maxlength="255" value="<c:out  value='${map["NAME"]}'/>"> 
     </div></td> 
    <td style="width:7%; border: 1px solid #000000; height: 30px; text-align: right;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 分类： </label> </td> 
    <td style="width:22%; border: 1px solid #000000; height: 30px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="FL" title="分类" style="height: auto;"> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL1" name="FL" title="分类" value="1" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '1'}">
         checked="true"</c:if> </c:forEach> /> 政治建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL2" name="FL" title="分类" value="2" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '2'}">
         checked="true"</c:if> </c:forEach> /> 思想建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL3" name="FL" title="分类" value="3" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '3'}">
         checked="true"</c:if> </c:forEach> /> 组织建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL4" name="FL" title="分类" value="4" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '4'}">
         checked="true"</c:if> </c:forEach> /> 干部人才队伍建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL5" name="FL" title="分类" value="5" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '5'}">
         checked="true"</c:if> </c:forEach> /> 纪律作风建设 
       </label> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="FL6" name="FL" title="分类" value="6" <c:forEach items="${ map['FL'] }" var="s"> 
       <c:if test="${s eq '6'}">
         checked="true"</c:if> </c:forEach> /> 群团建设 
       </label> 
     </div></td> 
   </tr> 
   <tr style="height: 52px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 52px;"><label for="PARTY_COMMITTEE_WORK_PLAN" class=" " style=";" id="glT6FPlfMLmtOGuzCx6aFF9UaT9QoCFa"> <i class="required">*</i>工作目标： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 52px;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="PARTY_COMMITTEE_WORK_PLAN" name="PARTY_COMMITTEE_WORK_PLAN" title="党委工作计划名称" maxlength="4000"><c:out  value="${map['PARTY_COMMITTEE_WORK_PLAN']}"/></div> </td> 
   </tr> 
   <tr style="height: 52px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 52px;"><label for="WORK_NAME" class=" " style=";" id="WORK_NAMEEformLabel"> <i class="required">*</i>工作方向（思路）： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 52px;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" required id="WORK_NAME" name="WORK_NAME" title="工作方向（思路）" maxlength="4000"><c:out  value="${map['WORK_NAME']}"/></div> </td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 29px;"><label for="DEPT_NAME" class=" " style=";" id="DEPT_NAMEEformLabel"> 党群部门承接： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 29px;" colspan="3"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style="height:100px;
color:red;;" autocomplete="off" id="DEPT_NAME" name="DEPT_NAME" title="承接部门名称" maxlength="2000" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="DEPT_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; border: 1px solid #000000; height: 30px;"><label for="请选择" class=" " style=";" id="aCFyFEtVrv6v7P9ROOmxHEqXL0FZEO0s"> <i class="required">*</i>附件： </label> </td> 
    <td style="width:42%; border: 1px solid #000000; height: 30px;" colspan="3"> 
     <div id="SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="FILE_TYPE" name="FILE_TYPE" title="文件密级" maxlength="255" value="<c:out  value='${map["FILE_TYPE"]}'/>"> 
 </div> 
 <div class="input-group input-group-sm " style="width:100%"> 
  <input type="text" title="反馈时间" class="form-control time-picker input-sm" style=";display:none;" id="FK_DATE_TIME" name="FK_DATE_TIME" value="${map['FK_DATE_TIME']}" readonly> 
  <span id="FK_DATE_TIME_button" class="input-group-addon data-box-act" style="display:none;"><i class="glyphicon glyphicon-calendar"></i></span> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="RESPONSIBLE_DEPA" name="RESPONSIBLE_DEPA" title="党群部门承接" maxlength="4000" value="<c:out  value='${map["RESPONSIBLE_DEPA"]}'/>"> 
 </div>
 <p></p>
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
    var formInfoId = "948e83e38f76589e018f7a05adce1c5a";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_WORK_PLAN";
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

        

$("#FORM_CODE").attr("initvalue",$("input[name='FORM_CODE']",window.pageParams.content||document).val());
if ($("input[name='FORM_CODE']",window.pageParams.content||document).val()==''||$("input[name='FORM_CODE']",window.pageParams.content||document).val()==null||$("input[name='FORM_CODE']",window.pageParams.content||document).val()==undefined ){

window.FORM_CODEautocode = new AutoCode('DW_GZ_PLAN_CODE',"FORM_CODE",false,"FORM_CODE",undefined
	,function(){$("#FORM_CODE").find("input").attr("style","");}

);


}else{
	$("#FORM_CODE").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='FORM_CODE']",window.pageParams.content||document).val();
		var flag = $("input[name='FORM_CODE']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#FORM_CODE").attr("initvalue");
		var valuePure = $("#FORM_CODE").find("#autoCode").val();
		if (flag != "disabled" && window.FORM_CODEautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=FORM_CODE',
					type: 'POST',
					async:false,
					data: {
						autoCode: "DW_GZ_PLAN_CODE",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=FORM_CODE',
								type: 'POST',
								async:false,
								data: {
									autoCode: "DW_GZ_PLAN_CODE",
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
										formData["FORM_CODE"] = result.value;
										$("input[name='FORM_CODE']",window.pageParams.content||document).val(result.value);
										$("#FORM_CODE").attr("initvalue",result.value);
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
				delete formData["FORM_CODE"];
				$("input[name='FORM_CODE']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='FORM_CODE']",window.pageParams.content||document).val();
		var require = $("#FORM_CODE").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FORM_CODE"){
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
	if (tagId != "FORM_CODE"){
		return;
	}
	if(operability){
		$("#FORM_CODE").show();
	}else{
		$("#FORM_CODE").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FORM_CODE"){
		return;
	}
	if (required){
		$("#FORM_CODE").attr("required","required");
	}
});



if ($("input[name='DREAF_DATE']").val()==''||$("input[name='DREAF_DATE']").val()==null||$("input[name='DREAF_DATE']").val()==undefined ){
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
	$("#DREAF_DATE").val(macoValue);
}



if ($("input[name='DRAF_USER']").val()==''||$("input[name='DRAF_USER']").val()==null||$("input[name='DRAF_USER']").val()==undefined ){
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
	$("#DRAF_USER").val(macoValue);
}



if ($("input[name='DRAF_DEPT']").val()==''||$("input[name='DRAF_DEPT']").val()==null||$("input[name='DRAF_DEPT']").val()==undefined ){
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
	$("#DRAF_DEPT").val(macoValue);
}



$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "QUARTER_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#QUARTER').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["QUARTER"] != null && pageParams.formData["QUARTER"] != ''){    $('#QUARTER').val(pageParams.formData["QUARTER"]);}else if($('#QUARTER').attr("initValue")!=undefined&&$.trim($('#QUARTER').attr("initValue"))!=''){    $('#QUARTER').val($('#QUARTER').attr("initValue"));    pageParams.formData["QUARTER"] = $('#QUARTER').attr("initValue");}else{    }}});





//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "FL"){
        return true;
    }
    if(operability){
                        var $tag = $('#FL1');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL2');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL3');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL4');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL5');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL6');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "FL"){
        return;
    }

    if(operability){
        $("#FL").show();
    }else{
        $("#FL").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "FL"){
        return;
    }

    if (required){
        $('input[name="FL"]').attr("required","required");
    }else{
        $('input[name="FL"]').removeAttr("required","required");
    }
});


$("#PARTY_COMMITTEE_WORK_PLANCount").html((4000 - $('#PARTY_COMMITTEE_WORK_PLAN').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatPARTY_COMMITTEE_WORK_PLANLength(text,maxLen){
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



$("#WORK_NAMECount").html((4000 - $('#WORK_NAME').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatWORK_NAMELength(text,maxLen){
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





	DEPT_NAMEDetailCol = 'DEPT_NAME';
	

function DEPT_NAMEClickFun(){
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
				this.setRowDEPT_NAME = function(mapping,rowData){
					

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

						if(DEPT_NAMEDetailCol == mapVer.targetName){
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
                , "20","select dept_name, case dept_name when 'DZBGS-DY' then '党政办公室-调研工作' when 'DZBGS-ZH' then '党政办公室-综合管理工作' when 'DZBGS-XF' then '党政办公室-信访工作' when 'RLZYB-RS' then '人力资源部-人事管理工作' when 'DZBGS-XC' then '人力资源部-薪酬管理工作' when 'DZBGS-PX' then '人力资源部-培训考核工作' when 'DZBGS-GB' then '人力资源部-干部管理工作' when 'JJJCB-ZH' then '纪检监察部-综合监察工作' when 'JJJCB-JJ' then '纪检监察部-纪检监察工作' when 'JJJCB-XC' then '纪检监察部-巡察工作' when 'DQGZB-DJ' then '党群工作部-党建工作' when 'DQGZB-MG' then '党群工作部-组织民管工作' when 'DQGZB-GH' then '党群工作部-工会工作' when 'DQGZB-XC' then '党群工作部-文化宣传工作' when 'DQGZB-SX' then '党群工作部-声像宣传工作' when 'DQGZB-TW' then '党群工作部-团委工作' end Dname from DYN_PARTY_PLAN_GXB order by XH ",'[{"label":"部门名称","width":"400","align":"center","orderBy":"","name":"DNAME"},{"label":"code","width":"50","hidden":true,"align":"center","orderBy":"","name":"DEPT_NAME"}]','[{"name":"DNAME","targetName":"DEPT_NAME","targetNameName":"承接部门名称","display":"部门名称","transform":"","lookupType":"","filter":true},{"name":"DEPT_NAME","targetName":"RESPONSIBLE_DEPA","targetNameName":"党群部门承接","display":"code","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowDEPT_NAME,this.getParamsValue,'','DWGZJH-DEPT_NAME',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         		           		var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getGridParam","selarrrow");
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



						if(DEPT_NAMEDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#DEPT_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function DEPT_NAMEDetail(id){
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


			$('#DEPT_NAME')
	.on(' focus',function(e){
	DEPT_NAMEClickFun();
	this.blur();
});

/*
$('#DEPT_NAMEButton').on('click',function(e){
	DEPT_NAMEClickFun();
	this.blur();
});

$('#DEPT_NAMEButton').click(function(event) {
   $('#DEPT_NAME').trigger('focus');
});*/





attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: 'FILE_TYPE',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel"){
        return;
    }

    if (required){
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("required","required");
   }else{
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").removeAttr("required");
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("required");
    var bpmRequire = $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel"){
        return;
    }
    if(operability){
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").show();
    }else{
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").hide();
    }
});
if ($('#FILE_TYPE').val() == null||$('#FILE_TYPE').val()==''||$('#FILE_TYPE').val()==undefined)
$('#FILE_TYPE').val("2");


            $('#FK_DATE_TIME').datetimepicker({
            oneLine:true,
            showButtonPanel:true,
            showSecond:false,
            beforeShow: function(selectedDate,inst) {
                inst.initflag = false;
                if($('#'+selectedDate.id).val()==""){
                    inst.initflag = true;
                    $('#'+selectedDate.id).val(formatDateTimeNoSecond(new Date()));
                }
            },
            afterShow: function(selectedDate,inst) {
                if (inst.initflag){
                    $('#'+selectedDate.id).val('');
                    inst.initflag = false;
                }
            }
        });
    


    $('#FK_DATE_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#FK_DATE_TIME').datetimepicker('show');
			 $('#FK_DATE_TIME').datetimepicker().trigger('click');
	    			
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