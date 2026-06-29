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
  <span style="color: #ff0000;">换届提醒通知</span> 
 </div>
 <table style=" border: 1px solid;" border="1" id="Sx8IG6scijHQJcdbMBDDSrE80rWQRPsx" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUST_DATE" class=" " style="color:#ff0000;;" id="REQUST_DATEEformLabel"> <i class="required">*</i>申请日期 </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUST_DATE" name="REQUST_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["REQUST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="AUTO_CODE" class=" " style="color:#ff0000;;" id="F3F02MeX5uIzT77eUmOVq74kQAMj44Kg"> <i class="required">*</i>表单编号： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="USER_NAME" class=" " style="color:#ff0000;;" id="qJZ34RxUvOu3Gz57UckohTBI8mlpDJvF"> <i class="required">*</i>申请人： </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="USER_NAME" name="USER_NAME" readonly title="申请人" maxlength="1000" value="<c:out  value='${map["USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="DEPT_NAME" class=" " style="color:#ff0000;;" id="Sq6Ajr974uGiqBG7UXrRyKktbQGmSdWT"> <i class="required">*</i>申请人所在单位： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DEPT_NAME" name="DEPT_NAME" readonly title="申请人所在单位" maxlength="255" value="<c:out  value='${map["DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="TEL" class=" " style="color:#ff0000;;" id="TELEformLabel"> <i class="required">*</i>联系电话: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话" maxlength="255" value="<c:out  value='${map["TEL"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"></td> 
    <td style="width:18%; border: 1px solid; height: 30px;"></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_NAME" class=" " style="color:#ff0000;;" id="LgPwJcOmHbLwZdEwCYXbbwmwiLbEM6qZ"> <i class="required">*</i>换届党组织名称： </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME" name="PARTY_NAME" title="换届党支部名称" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="PARTY_TYPE" class=" " style="color:#ff0000;;" id="PARTY_TYPEEformLabel"> <i class="required">*</i>党组织类型： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required readonly id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" initvalue="<c:out  value='${map["PARTY_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="CREA_TIME" class=" " style="color:#ff0000;;" id="CREA_TIMEEformLabel"> 上届换届时间: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="上届换届时间" class="form-control date-picker input-sm" style=";" id="CREA_TIME" name="CREA_TIME" value="${map['CREA_TIME']}" readonly> 
      <span id="CREA_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="DUE_TIME1" class=" " style="color:#ff0000;;" id="OWvZoePhq34NiRtx8anNFr8Zd5cOBjKT"> <i class="required">*</i>任期届满时间： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="任期届满时间" class="form-control date-picker input-sm" style=";" required id="DUE_TIME1" name="DUE_TIME1" value="${map['DUE_TIME1']}" readonly> 
      <span id="DUE_TIME1_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="TJHJ_TIME" class=" " style="color:#ff0000;;" id="TJHJ_TIMEEformLabel"> 提交换届请示时间: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="提交换届请示时间" class="form-control date-picker input-sm" style=";" id="TJHJ_TIME" name="TJHJ_TIME" value="${map['TJHJ_TIME']}" readonly> 
      <span id="TJHJ_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="TJYBRX_TIME" class=" " style="color:#ff0000;;" id="TJYBRX_TIMEEformLabel"> 提交预备人选请示时间: </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="提交预备人选请示时间" class="form-control date-picker input-sm" style=";" id="TJYBRX_TIME" name="TJYBRX_TIME" value="${map['TJYBRX_TIME']}" readonly> 
      <span id="TJYBRX_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="请选择" class=" " style="color:#ff0000;;" id="请选择EformLabel"> 召开党员大会选举时间: </label> </td> 
    <td style="width:22%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="召开党员大会选举时间" class="form-control date-picker input-sm" style=";" id="ZKDYDH_TIME" name="ZKDYDH_TIME" value="${map['ZKDYDH_TIME']}" readonly> 
      <span id="ZKDYDH_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:18%; border: 1px solid; height: 30px; text-align: left;"><p style="text-align: right;"><label for="请选择" class=" " style="color:#ff0000;;" id="请选择EformLabel"> 换届选举工作报告和党费收支报告： </label> <span style="background-color: transparent; color: #0000ff;"></span></p></td> 
    <td style="width:18%; border: 1px solid; height: 30px; text-align: left;"><p style="text-align: justify;"><a id="HJTX" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a><em></em></p><p style="text-align: justify;"><span style="color: #007fcc;">提示：请先起草"模版下载"相关文件，待进入"预备人选请示"流程</span></p><p style="text-align: justify;"><span style="color: #007fcc;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 时,根据提示再提交。</span></p><p><span style="color: #007fcc;">&nbsp;</span></p><p><span style="color: #007fcc;">1.6委员会工作报告</span></p><p><span style="color: #007fcc;">1.7党费和党建活动经费收支使用情况报告</span></p><p><span style="color: #007fcc;">3.25纪委工作报告</span></p></td> 
   </tr> 
   <tr style="height: 66px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 66px;"><label for="请选择" class=" " style="color:#ff0000;;" id="请选择EformLabel"> 换届选举要求： </label> </td> 
    <td style="width:58%; border: 1px solid; height: 66px;" colspan="3"><p><span style="color: #007fcc; font-family: 宋体;">1.换届提醒通知根据公司《关于基层党组织按期换届提醒督促机制的通知》（XX党委〔2019〕41号）和《基层党组织工作细则》(第4版)提出。</span></p><p><span style="font-family: 宋体; color: #007fcc;">2.党组织任期届满前，请主动逐级与上级党组织、公司党委沟通换届情况。</span></p><p><span style="font-family: 宋体; color: #007fcc;">3.如有特殊情况不能按期换届的，应提前向公司党委提出请示，未经批准的，不得延期或提前换届。</span></p></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
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
    var formInfoId = "948e83e3828ad2be01828c031c280fd5";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_HUANJIE_TIXING";
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

window.AUTO_CODEautocode = new AutoCode('HJTZ',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","color:#007fcc;");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","color:#007fcc;");
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
						autoCode: "HJTZ",
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
									autoCode: "HJTZ",
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
 $("#HJTX").show();
 //$("#ZWHJLFJ").show();
// $("#TYZKTZ").show(); 
 
 

 
 

 
 
 };
}




});





if ($('#TEL').val() == null||$('#TEL').val()==''||$('#TEL').val()==undefined)
$('#TEL').val("3851");




	PARTY_NAMEDetailCol = 'PARTY_NAME';
	

function PARTY_NAMEClickFun(){
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
				this.setRowPARTY_NAME = function(mapping,rowData){
					

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

						if(PARTY_NAMEDetailCol == mapVer.targetName){
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
                , "20","select t.party_name, t.id, t.attribute_01, (select MAX(t1.CREA_TIME) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as CREA_TIME, (select ADD_MONTHS(MAX(t1.CREA_TIME),36) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as DUE_TIME1, (select ADD_MONTHS(MAX(t1.CREA_TIME),32) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as TJHJ_TIME, (select ADD_MONTHS(MAX(t1.CREA_TIME),34) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as TJYBRX_TIME, (select ADD_MONTHS(MAX(t1.CREA_TIME),36) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as ZKDYDH_TIME from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"召开党员大会时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"ZKDYDH_TIME"},{"label":"提交预备人选时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"TJYBRX_TIME"},{"label":"提交换届请示时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"TJHJ_TIME"},{"label":"任期届满时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"DUE_TIME1"},{"label":"上届换届时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"CREA_TIME"},{"label":"党组织类型","width":"50","align":"center","orderBy":"","name":"ATTRIBUTE_01Name"},{"label":"党组织类型","width":"50","hidden":true,"align":"center","orderBy":"","name":"ATTRIBUTE_01"},{"label":"党支部名称ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"党支部名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"ZKDYDH_TIME","targetName":"ZKDYDH_TIME","targetNameName":"召开党员大会选举时间","display":"召开党员大会时间","transform":"","lookupType":"","filter":false},{"name":"TJYBRX_TIME","targetName":"TJYBRX_TIME","targetNameName":"提交预备人选请示时间","display":"提交预备人选时间","transform":"","lookupType":"","filter":false},{"name":"TJHJ_TIME","targetName":"TJHJ_TIME","targetNameName":"提交换届请示时间","display":"提交换届请示时间","transform":"","lookupType":"","filter":false},{"name":"DUE_TIME1","targetName":"DUE_TIME1","targetNameName":"任期届满时间","display":"任期届满时间","transform":"","lookupType":"","filter":false},{"name":"CREA_TIME","targetName":"CREA_TIME","targetNameName":"上届换届时间","display":"上届换届时间","transform":"","lookupType":"","filter":false},{"name":"ATTRIBUTE_01Name","targetName":"PARTY_TYPEName","targetNameName":"党组织类型","display":"党组织类型","transform":"7","lookupType":"PARTY_ORG_TYPE","filter":false},{"name":"ATTRIBUTE_01","targetName":"PARTY_TYPE","targetNameName":"党组织类型(值)","display":"党组织类型","transform":"","lookupType":"","filter":false},{"name":"ID","targetName":"PARTY_ID","targetNameName":"党支部ID","display":"党支部名称ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"PARTY_NAME","targetNameName":"换届党支部名称","display":"党支部名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME,this.getParamsValue,'','DZZHJXJTX-PARTY_NAME',this.jsSuccess);


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

						if(PARTY_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#PARTY_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function PARTY_NAMEDetail(id){
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


			$('#PARTY_NAME')
	.on(' focus',function(e){
	PARTY_NAMEClickFun();
	this.blur();
});

/*
$('#PARTY_NAMEButton').on('click',function(e){
	PARTY_NAMEClickFun();
	this.blur();
});

$('#PARTY_NAMEButton').click(function(event) {
   $('#PARTY_NAME').trigger('focus');
});*/




    $('#PARTY_TYPE').attr("disabled","disabled");$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PARTY_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PARTY_TYPE"] != null && pageParams.formData["PARTY_TYPE"] != ''){    $('#PARTY_TYPE').val(pageParams.formData["PARTY_TYPE"]);}else if($('#PARTY_TYPE').attr("initValue")!=undefined&&$.trim($('#PARTY_TYPE').attr("initValue"))!=''){    $('#PARTY_TYPE').val($('#PARTY_TYPE').attr("initValue"));    pageParams.formData["PARTY_TYPE"] = $('#PARTY_TYPE').attr("initValue");}else{    }}});



            $('#CREA_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#CREA_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#CREA_TIME').datepicker('show');
			 $('#CREA_TIME').datepicker().trigger('click');
					
		});
        



            $('#DUE_TIME1').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#DUE_TIME1_button').click(function(event) {
			/* Act on the event */
	    			 $('#DUE_TIME1').datepicker('show');
			 $('#DUE_TIME1').datepicker().trigger('click');
					
		});
        



            $('#TJHJ_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#TJHJ_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#TJHJ_TIME').datepicker('show');
			 $('#TJHJ_TIME').datepicker().trigger('click');
					
		});
        



            $('#TJYBRX_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#TJYBRX_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#TJYBRX_TIME').datepicker('show');
			 $('#TJYBRX_TIME').datepicker().trigger('click');
					
		});
        



            $('#ZKDYDH_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#ZKDYDH_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#ZKDYDH_TIME').datepicker('show');
			 $('#ZKDYDH_TIME').datepicker().trigger('click');
					
		});
        


workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "HJTX"){
		return;
	}
	if(operability){
		$("#HJTX").show();
	}else{
		$("#HJTX").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "HJTX"){
return;
}
if(operability){
$("#HJTX").css("display","inline-block");
}else{
$("#HJTX").css("display","none");
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

            $('#HJTX').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '模版下载', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e390edf5460190f2385bfa21da'
	});

        });
        

    $("input").css("color","#007fcc");
$("select").css("color","#007fcc");
//$("td").eq(27).css('line-height','20px');


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