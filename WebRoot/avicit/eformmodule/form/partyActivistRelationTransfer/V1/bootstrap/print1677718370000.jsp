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
   积极分子关系转移 
 </div>
 <div style="text-align: center; font-size: 24px; margin: 15px;"> 
  <table style="" id="m7iwKzme2iWk3FG1skCn3CNaUQiuLFJv" height="31" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:30%;"></td> 
     <td style="width:32%;"></td> 
     <td style="width:14%; text-align: right;"><label for="TEL" class=" " style=";" id="TELEformLabel"> <i class="required">*</i>上报人电话： </label> </td> 
     <td style="width:22%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="TEL" name="TEL" title="联系电话：" maxlength="255" value="<c:out  value='${map["TEL"]}'/>"> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <table style=" border: 1px solid;" id="lNLrOxqzGhO78DCfdZDhNFUrNSvsTifT" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_USER" class=" " style=";" id="InQPBWiJCE0xWHIeTMoupiSGaH7101cT"> <i class="required">*</i>上报人： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_USER" name="REQUEST_USER" readonly title="上报人" maxlength="1000" value="<c:out  value='${map["REQUEST_USER"]}'/>"> 
     </div></td> 
    <td style="width:25%; text-align: right; border: 1px solid; height: 30px;"><label for="REQUEST_DEPT" class=" " style=";" id="yrV5CSphbgOTQOYai38zxaErWOfPNdMt"> <i class="required">*</i>上报部门： </label> </td> 
    <td style="width:25%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DEPT" name="REQUEST_DEPT" readonly title="上报部门" maxlength="1000" value="<c:out  value='${map["REQUEST_DEPT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 46px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 46px;"><label for="REQUEST_DATE" class=" " style=";" id="A59IvSQvDW3pBAnMMaujoFmwykJ3FDNy"> <i class="required">*</i>上报日期： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 46px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="REQUEST_DATE" name="REQUEST_DATE" readonly title="上报日期" maxlength="1000" value="<c:out  value='${map["REQUEST_DATE"]}'/>"> 
     </div></td> 
    <td style="width:25%; border: 1px solid; height: 46px;"><p style="text-align: right;"><label for="AUTO_CODE" class=" " style=";" id="AUTO_CODEEformLabel"> <i class="required">*</i>表单编号： </label> </p></td> 
    <td style="width:25%; border: 1px solid; height: 46px;"> 
     <div id="AUTO_CODE" class="bpm_self_class " title="自动编码" style="width:100%;" required> 
      <input type="text" class="form-control input-sm" readonly name="AUTO_CODE" value="<c:out  value='${map["AUTO_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 46px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 46px;"><label for="PARTY_NAME" class=" " style=";" id="PARTY_NAMEEformLabel"> <i class="required">*</i>所在党支部： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 46px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required disabled id="PARTY_NAME" name="PARTY_NAME" title="所在党支部:" maxlength="255" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:25%; border: 1px solid; text-align: right; height: 46px;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>目的支部： </label> </td> 
    <td style="width:25%; border: 1px solid; height: 46px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="P_IN_PARTY_ORG" name="P_IN_PARTY_ORG" title="目的支部" maxlength="255" value="<c:out  value='${map["P_IN_PARTY_ORG"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="P_IN_PARTY_ORGButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr style="height: 57px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 57px;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>转出类别： </label> </td> 
    <td style="width:18%; border: 1px solid; height: 57px;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="P_TRANSFER_TYPE" title="转出类别" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="P_TRANSFER_TYPE1" name="P_TRANSFER_TYPE" title="转出类别" value="0" required <c:if test="${map['P_TRANSFER_TYPE'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />内部调动 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="P_TRANSFER_TYPE2" name="P_TRANSFER_TYPE" title="转出类别" value="1" required <c:if test="${map['P_TRANSFER_TYPE'] eq '1'}">checked="true"</c:if> />外部转出 </label> 
     </div></td> 
    <td style="width:25%; text-align: right; border: 1px solid; height: 57px;"><span style="color: red;"><label for="elementType" :"text","domid":"","bindfield":"p_in_dept_ids","labelname":"目的部门：","labeltype":"dept-box","ischuantou":"","colisvisible":"y","colismust":"n","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="P_IN_DEPT_IDSName" class=" " style=";" id="P_IN_DEPT_IDSEformLabel"> 目的部门： </label> </td> 
    <td style="width:25%; border: 1px solid; height: 57px;"><p> </p> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="P_IN_DEPT_IDS" name="P_IN_DEPT_IDS" title="目的部门：" value="<c:out  value='${map["P_IN_DEPT_IDS"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="P_IN_DEPT_IDSName" name="P_IN_DEPT_IDSName" title="目的部门：" value="<c:out  value='${map["P_IN_DEPT_IDSName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="P_IN_DEPT_IDSButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> <p></p><p> </p> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="OUT_DEPT_NAME" name="OUT_DEPT_NAME" title="外部转出部门" maxlength="255" value="<c:out  value='${map["OUT_DEPT_NAME"]}'/>"> 
     </div><p></p></td> 
   </tr> 
   <tr style="height: 102px;"> 
    <td style="width:7%; text-align: right; border: 1px solid; height: 102px;"><label for="DYN_AOT_MEMBER" class=" " style=";" id="DYN_AOT_MEMBEREformLabel"> 积极分子信息： </label> </td> 
    <td style="width:68%; border: 1px solid; height: 102px;" colspan="3"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_AOT_MEMBER" id="DYN_AOT_MEMBER_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_AOT_MEMBER" class="datatable eform_component" datapermission="eform_data_DYN_AOT_MEMBER"></table> 
           <div id="DYN_AOT_MEMBERPager"></div> 
           <div id="DYN_AOT_MEMBERToolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_AOT_MEMBER_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_AOT_MEMBER_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_AOT_MEMBER_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_AOT_MEMBER_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_AOT_MEMBER_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
            </div> 
            <div class="toolbar-right"> 
            </div> 
           </div> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table> <p>提示：目的支部及目的部门均相同的人，方可用一条流程转出！</p></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党支部ID" maxlength="255" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="P_IN_PARTY_ORG_ID" name="P_IN_PARTY_ORG_ID" title="目的支部ID" maxlength="255" value="<c:out  value='${map["P_IN_PARTY_ORG_ID"]}'/>"> 
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
    var formInfoId = "402811817f4eb25b017f61f97c0e0dbe";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_ACT_TRANSFER";
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

        



if ($("input[name='REQUEST_USER']").val()==''||$("input[name='REQUEST_USER']").val()==null||$("input[name='REQUEST_USER']").val()==undefined ){
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
	$("#REQUEST_USER").val(macoValue);
}



if ($("input[name='REQUEST_DEPT']").val()==''||$("input[name='REQUEST_DEPT']").val()==null||$("input[name='REQUEST_DEPT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentFullName}"
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
	$("#REQUEST_DEPT").val(macoValue);
}

    
if(typeof(EformFlow) != "undefined"){
// setTimeout(function(){


 EformFlow.prototype.afterCreateButtons=function(){

setTimeout(function(){
 var pTransferTypeCheckedVal = $("#P_TRANSFER_TYPE").find(":radio:checked").val();
 if(pTransferTypeCheckedVal == '0'){
 $("#OUT_DEPT_NAME").hide(); 
 $("#P_IN_DEPT_IDSName").show(); 
 $("#P_IN_DEPT_IDSButton").show(); 

// $('#P_IN_PARTY_ORG').val('');

 $('#P_IN_PARTY_ORG').on('focus',function(e){

 P_IN_PARTY_ORGClickFun();

 this.blur();

});

 }
 
 if(pTransferTypeCheckedVal == '1' ){
 //$('#P_IN_PARTY_ORG').val('');

 //$('#P_IN_PARTY_ORG_ID').val('');

 $('#P_IN_PARTY_ORG').off('focus');

 //this.blur();

$("#OUT_DEPT_NAME").show(); 
 $("#P_IN_DEPT_IDSName").hide(); 
 $("#P_IN_DEPT_IDSButton").hide();

 }	
 
 },500);


};

}



 


//};



if ($("input[name='REQUEST_DATE']").val()==''||$("input[name='REQUEST_DATE']").val()==null||$("input[name='REQUEST_DATE']").val()==undefined ){
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
	$("#REQUEST_DATE").val(macoValue);
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('partyActivistTransferCode',"AUTO_CODE",false,"AUTO_CODE",undefined
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
						autoCode: "partyActivistTransferCode",
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
									autoCode: "partyActivistTransferCode",
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







	P_IN_PARTY_ORGDetailCol = 'P_IN_PARTY_ORG';
	

function P_IN_PARTY_ORGClickFun(){
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
				this.setRowP_IN_PARTY_ORG = function(mapping,rowData){
					

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

						if(P_IN_PARTY_ORGDetailCol == mapVer.targetName){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"党支部ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"目的党支部","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"ID","targetName":"P_IN_PARTY_ORG_ID","targetNameName":"目的支部ID","display":"党支部ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"P_IN_PARTY_ORG","targetNameName":"目的支部","display":"目的党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowP_IN_PARTY_ORG,this.getParamsValue,'','partyActivistRelationTransfer-P_IN_PARTY_ORG',this.jsSuccess);


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

						if(P_IN_PARTY_ORGDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#P_IN_PARTY_ORG").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function P_IN_PARTY_ORGDetail(id){
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


			$('#P_IN_PARTY_ORG')
	.on(' focus',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});

/*
$('#P_IN_PARTY_ORGButton').on('click',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});

$('#P_IN_PARTY_ORGButton').click(function(event) {
   $('#P_IN_PARTY_ORG').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "P_TRANSFER_TYPE"){
        return true;
    }
    if(operability){
                        var $tag = $('#P_TRANSFER_TYPE1');
            $tag.removeAttr("disabled");
                                var $tag = $('#P_TRANSFER_TYPE2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "P_TRANSFER_TYPE"){
        return;
    }

    if(operability){
        $("#P_TRANSFER_TYPE").show();
    }else{
        $("#P_TRANSFER_TYPE").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "P_TRANSFER_TYPE"){
        return;
    }

    if (required){
        $('input[name="P_TRANSFER_TYPE"]').attr("required","required");
    }else{
        $('input[name="P_TRANSFER_TYPE"]').removeAttr("required","required");
    }
});
            $('input[name="P_TRANSFER_TYPE"]').on('click',function(e){
            if($(this).val() == '0'){
 //debugger;
 //console.log($("#OUT_DEPT_NAME"));
 //$("#OUT_DEPT_NAME").rules("add",{ required : true } );
// $("#OUT_DEPT_NAME").rules("remove");
 ////$("#OUT_DEPT_NAME").hide(); 
 //$("#P_IN_DEPT_IDSName").show(); 
 //$("#P_IN_DEPT_IDSName").rules("add",{required:true});
 $("#OUT_DEPT_NAME").hide(); 
 $("#P_IN_DEPT_IDSName").show(); 
 $("#P_IN_DEPT_IDSButton").show(); 

 $('#P_IN_PARTY_ORG').val('');

 $('#P_IN_PARTY_ORG').on('focus',function(e){

 P_IN_PARTY_ORGClickFun();

 this.blur();

});




 

 }

if($(this).val() == '1' ){
 //console.log($("#OUT_DEPT_NAME"));
// $("#OUT_DEPT_NAME").rules("add",{required:true});
// $("#OUT_DEPT_NAME").show(); 
 
 //$("#OUT_DEPT_NAME").rules("remove");
// $("#P_IN_DEPT_IDSName").rules("add",{required:true});
 //$("#P_IN_DEPT_IDSName").rules("remove");
 //$("#P_IN_DEPT_IDSName").hide(); 

 $('#P_IN_PARTY_ORG').val('');

 $('#P_IN_PARTY_ORG_ID').val('');

 $('#P_IN_PARTY_ORG').off('focus');

 //this.blur();

$("#OUT_DEPT_NAME").show(); 
 $("#P_IN_DEPT_IDSName").hide(); 
 $("#P_IN_DEPT_IDSButton").hide();


 } 
        });
        




$('#P_IN_DEPT_IDSName').on(' focus',function(e){
    P_IN_DEPT_IDSClickFun();
    $(this).blur();
});

function P_IN_DEPT_IDSClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'P_IN_DEPT_IDS',textFiled:'P_IN_DEPT_IDSName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}










var DYN_AOT_MEMBERTabInitFlag = false;

							
var dataGridColModel_DYN_AOT_MEMBER =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
         		  		  ,{ label:'姓名', name:'USER_NAME', width:20,
		  		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
      queryStatement:"select t.name, t.USER_ID, t.party_name, t.PARTY_ID, T.ACTIVIST_TYPE AS ACTIVIST_TYPE_NAME, T.ACTIVIST_TYPE from PARTY_ACT_ORGANIZATION_VIEW t where t.PARTY_ID in (select t1.party_id from PARTY_MEMBER t1 where t1.user_id = '@{userId}')",
      dataGridColModel:'[{"label":"积极分子类别ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ACTIVIST_TYPE"},{"label":"党支部ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARTY_ID"},{"label":"积极分子ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"积极分子类别","width":"50","align":"center","orderBy":"3","name":"ACTIVIST_TYPE_NAMEName"}]',
      mapping:'[{"name":"ACTIVIST_TYPE","targetName":"PARTY_ACT_TYPE","targetNameName":"积极分子类别ID","display":"积极分子类别ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_ID","targetName":"OUT_PARTY_ORG_ID","targetNameName":"转出支部ID","display":"党支部ID","transform":"","lookupType":"","filter":false},{"name":"USER_ID","targetName":"USER_ID","targetNameName":"姓名ID","display":"积极分子ID","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"USER_NAME","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"OUT_PARTY_ORG","targetNameName":"转出支部","display":"党支部","transform":"","lookupType":"","filter":false},{"name":"ACTIVIST_TYPE_NAMEName","targetName":"PARTY_ACT_TYPE_NAME","targetNameName":"积极分子类别","display":"积极分子类别","transform":"7","lookupType":"PA_PARTY_TYPE","filter":false}]',
      jsSuccess:'',
      jsBefore:'',
      jsAfter:'',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'N',
      isMuti:'N',
      inputChk:'N',
      dicUniqueCode:'partyActivistRelationTransfer-DYN_AOT_MEMBER-USER_NAME'}}
                       ,{ label:'姓名ID', name: 'USER_ID', width:20,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'原所在支部', name: 'OUT_PARTY_ORG', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'转出支部ID', name: 'OUT_PARTY_ORG_ID', width:20,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'积极分子类别', name: 'PARTY_ACT_TYPE_NAME', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'积极分子类别ID', name: 'PARTY_ACT_TYPE', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_AOT_MEMBER = '{}';


DYN_AOT_MEMBERUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                            };

if (window.DYN_AOT_MEMBER_comid == null || window.DYN_AOT_MEMBER_comid == undefined || window.DYN_AOT_MEMBER_comid == '') {
	window.DYN_AOT_MEMBER_comid = id;
}

$('#DYN_AOT_MEMBER').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_AOT_MEMBER',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_AOT_MEMBER_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f4eb25b017f61f97c0e0dbe",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_AOT_MEMBER,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
		required:"required",
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_AOT_MEMBERnorecords").hide();//隐藏提示信息
    $("#DYN_AOT_MEMBERPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_AOT_MEMBER').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_AOT_MEMBERnorecords").html() == null) {
            $('#DYN_AOT_MEMBER').parent().append("<div class='no_data' style='display: none' id='DYN_AOT_MEMBERnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_AOT_MEMBER').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_AOT_MEMBERnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_AOT_MEMBERnorecords img").css("width","120px");
        }else{
            $("#DYN_AOT_MEMBERnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_AOT_MEMBERnorecords").show();//显示提示信息
        $("#DYN_AOT_MEMBERPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_AOT_MEMBER').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_AOT_MEMBERnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_AOT_MEMBERnorecords img").css("width","120px");
	}else{
		$("#DYN_AOT_MEMBERnorecords img").css("width",(height/1.9)+"px");
	}
							},


beforeEditCell:function(){
	$(".datatable").not("#DYN_AOT_MEMBER").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_AOT_MEMBERReload = function(){
	var _isInvalid = true;
	$("#DYN_AOT_MEMBER").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_AOT_MEMBERTabInitFlag = true;
	$('#DYN_AOT_MEMBER').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_AOT_MEMBERTabReload = function(forceFlag){
	if(!DYN_AOT_MEMBERTabInitFlag  || forceFlag){
		DYN_AOT_MEMBERReload();
	}

}


$('#DYN_AOT_MEMBER').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_AOT_MEMBER').append($('#DYN_AOT_MEMBERToolbar'));

    
    
    
    
    
    
    


                        
DYN_AOT_MEMBERReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_AOT_MEMBER = 0;
var newRowStart_DYN_AOT_MEMBER = "new_row";


/**
 * 添加页面
 */
insertTableDYN_AOT_MEMBER = function(){
	$('#DYN_AOT_MEMBER').jqGrid('endEditCell');
	$("#DYN_AOT_MEMBERnorecords").hide();//隐藏提示信息
	$("#DYN_AOT_MEMBERPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_AOT_MEMBER + newRowIndex_DYN_AOT_MEMBER;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																			},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_AOT_MEMBER').jqGrid('addRow', parameters);
	newRowIndex_DYN_AOT_MEMBER++;  
};



/**
 * 删除
 */
deleteTableDYN_AOT_MEMBER = function(){
	var rows = [];
	rows = $('#DYN_AOT_MEMBER').jqGrid('getGridParam','selarrrow');


	$('#DYN_AOT_MEMBER').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_AOT_MEMBER').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_AOT_MEMBER',
					data: {ids : ids.join(','),formInfoId:'402811817f4eb25b017f61f97c0e0dbe',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_AOT_MEMBER').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_AOT_MEMBER').setGridWidth(700);
$('#DYN_AOT_MEMBER').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_AOT_MEMBER_insertBtn').bind('click',function(){
	insertTableDYN_AOT_MEMBER();
});

//按钮绑定事件
$('#DYN_AOT_MEMBER_deleteBtn').bind('click',function(){
	deleteTableDYN_AOT_MEMBER();
});

//自定义按钮绑定事件
																//列onchange事件
							

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_AOT_MEMBER_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_AOT_MEMBER_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_AOT_MEMBER_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_AOT_MEMBER_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_AOT_MEMBER_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_AOT_MEMBER_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_AOT_MEMBER_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_AOT_MEMBER_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_AOT_MEMBER_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_AOT_MEMBER_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_AOT_MEMBER_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_AOT_MEMBER_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_AOT_MEMBER').validateJqGrid("validate");
});

$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","USER_NAME","required");
		$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","USER_NAME","maxlength",{maxlength:255});
				$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","USER_ID","maxlength",{maxlength:255});
		$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","OUT_PARTY_ORG","required");
		$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","OUT_PARTY_ORG","maxlength",{maxlength:255});
				$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","OUT_PARTY_ORG_ID","maxlength",{maxlength:255});
				$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","PARTY_ACT_TYPE_NAME","maxlength",{maxlength:255});
				$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","PARTY_ACT_TYPE","maxlength",{maxlength:255});
				$('#DYN_AOT_MEMBER').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		
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