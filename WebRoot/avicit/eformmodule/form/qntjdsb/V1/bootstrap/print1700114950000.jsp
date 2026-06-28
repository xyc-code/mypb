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
   优秀“铸心”青年突击队申报 
 </div>
 <table style=" border: 1px solid; height: 369px;" id="ssuDES8cRaZqw7EDv7F0nYOqvwulQmSq" height="369" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="APPLICATION_NUMBER" class=" " style=";" id="k2tCPMSYWIm7TeFmHckrFPCEfCbxAsIZ"> 申请编号： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div id="APPLICATION_NUMBER" class="bpm_self_class " title="申请编号" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="APPLICATION_NUMBER" value="<c:out  value='${map["APPLICATION_NUMBER"]}'/>"> 
     </div></td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="APPLICATION_UNIT" class=" " style=";" id="AgwPWiXqsvYrZdsuCun2TvrYape1o0xu"> 申请单位： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="APPLICATION_UNIT" name="APPLICATION_UNIT" title="申请单位" value="<c:out  value='${map["APPLICATION_UNIT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="APPLICATION_UNITName" name="APPLICATION_UNITName" required disabled title="申请单位" value="<c:out  value='${map["APPLICATION_UNITName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="APPLICATION_UNITButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; height: 30px; text-align: right; border: 1px solid;"><label for="ATTR1" class=" " style=";" id="ATTR1"> 申请人： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="ATTR1" name="ATTR1" title="申请人" value="<c:out  value='${map["ATTR1"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="ATTR1Name" name="ATTR1Name" required disabled title="申请人" value="<c:out  value='${map["ATTR1Name"]}'/>"> 
      <span class="input-group-addon user-box-act" id="ATTR1Button"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_NAME" class=" " style=";" id="aJPztnE2UIYFMPT3xVFek7Mq1vRlECCj"> <i class="required">*</i>突击队名称： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="customDialog" name="COMMANDOES_NAME" title="突击队名称" maxlength="50" value="<c:out  value='${map["COMMANDOES_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 28px;"> 
    <td style="width:99%; text-align: right; height: 28px; border: 1px solid;" colspan="4"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_SUB_ZXBASB_1" id="DYN_SUB_ZXBASB_1_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_SUB_ZXBASB_1" class="datatable eform_component" datapermission="eform_data_DYN_SUB_ZXBASB_1"></table> 
           <div id="DYN_SUB_ZXBASB_1Pager"></div> 
           <div id="DYN_SUB_ZXBASB_1Toolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_SUB_ZXBASB_1_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加" style="display:none;"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_SUB_ZXBASB_1_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_SUB_ZXBASB_1_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_SUB_ZXBASB_1_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_SUB_ZXBASB_1_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除" style="display:none;"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_DATE" class=" " style=";" id="BQJEao21xjH0eoy424X8e2ytGjS5Ugts"> <i class="required">*</i>成立时间： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="成立时间" class="form-control date-picker input-sm" style=";" required readonly id="COMMANDOES_DATE" name="COMMANDOES_DATE" value="${map['COMMANDOES_DATE']}"> 
      <span id="COMMANDOES_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_TASK_DATE" class=" " style=";" id="NU2xWX9SIVOJhPfMFZnwqCpxM0YBmLL1"> <i class="required">*</i>计划完成任务时间： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="计划完成任务时间" class="form-control date-picker input-sm" style=";" required id="COMMANDOES_TASK_DATE" name="COMMANDOES_TASK_DATE" value="${map['COMMANDOES_TASK_DATE']}" readonly> 
      <span id="COMMANDOES_TASK_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:99%; height: 30px; text-align: left; border: 1px solid;" colspan="4"><label for="EXPECTED_INCOMEName" class=" " style=";" id="huvC41J7B2jeNi4brFz9DAIv6MqLmlvv"> 突击队任务完成情况及取得成效： </label> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:99%; height: 30px; text-align: left; border: 1px solid;" colspan="4"> 
     <div> 
      <div style="height:auto;" id="EXPECTED_INCOME" name="EXPECTED_INCOME" class="bpm_self_class" title="突击队任务完成情况及取得成效"><c:out value="${map['EXPECTED_INCOME']}"/></div> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_POSEN" class=" " style=";" id="x6suxzC4D1Vfweum9iHiBR4ICG3jlEtt"> 联系人姓名： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="COMMANDOES_POSEN" name="COMMANDOES_POSEN" title="联系人姓名" value="<c:out  value='${map["COMMANDOES_POSEN"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="COMMANDOES_POSENName" name="COMMANDOES_POSENName" required disabled title="联系人姓名" value="<c:out  value='${map["COMMANDOES_POSENName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="COMMANDOES_POSENButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_POSEN_TEL" class=" " style=";" id="seBE0Cor39eqUmhKuiDPKHdcW4MYISNj"> <i class="required">*</i>联系人电话： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="COMMANDOES_POSEN_TEL" name="COMMANDOES_POSEN_TEL" title="联系人电话" maxlength="50" value="<c:out  value='${map["COMMANDOES_POSEN_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:17%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_PXQK" class=" " style=";" id="OseJgLxEWebfk7t2dAWFP4Z3x0sxPip6"> 评选情况： </label> </td> 
    <td style="width:27%; height: 30px; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="COMMANDOES_PXQK" name="COMMANDOES_PXQK" title="评选情况" maxlength="50" value="<c:out  value='${map["COMMANDOES_PXQK"]}'/>"> 
     </div></td> 
    <td style="width:19%; text-align: right; height: 30px; border: 1px solid;"><label for="COMMANDOES_CONTENT" class=" " style=";" id="xDEJr985rRR2JDcRLizbrkKO6ZsmMER8"> 备案情况： </label> </td> 
    <td style="width:36%; height: 30px; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="COMMANDOES_CONTENT" title="备案情况" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="COMMANDOES_CONTENT1" name="COMMANDOES_CONTENT" title="备案情况" value="Y" required <c:if test="${map['COMMANDOES_CONTENT'] eq 'Y'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> disabled />是 
       </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="COMMANDOES_CONTENT2" name="COMMANDOES_CONTENT" title="备案情况" value="N" required <c:if test="${map['COMMANDOES_CONTENT'] eq 'N'}">checked="true"</c:if> disabled />否 </label> 
     </div></td> 
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
    var formInfoId = "2c908c1d894ded3801894e090c780ae1";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_YOUTH_DECLARATION";
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

        

$("#APPLICATION_NUMBER").attr("initvalue",$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val());
if ($("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val()==''||$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val()==null||$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val()==undefined ){

window.APPLICATION_NUMBERautocode = new AutoCode('APPLICATION_NUMBER_CODE',"APPLICATION_NUMBER",false,"APPLICATION_NUMBER",undefined
	,function(){$("#APPLICATION_NUMBER").find("input").attr("style","");}

);


}else{
	$("#APPLICATION_NUMBER").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val();
		var flag = $("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#APPLICATION_NUMBER").attr("initvalue");
		var valuePure = $("#APPLICATION_NUMBER").find("#autoCode").val();
		if (flag != "disabled" && window.APPLICATION_NUMBERautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=APPLICATION_NUMBER',
					type: 'POST',
					async:false,
					data: {
						autoCode: "APPLICATION_NUMBER_CODE",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=APPLICATION_NUMBER',
								type: 'POST',
								async:false,
								data: {
									autoCode: "APPLICATION_NUMBER_CODE",
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
										formData["APPLICATION_NUMBER"] = result.value;
										$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val(result.value);
										$("#APPLICATION_NUMBER").attr("initvalue",result.value);
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
				delete formData["APPLICATION_NUMBER"];
				$("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='APPLICATION_NUMBER']",window.pageParams.content||document).val();
		var require = $("#APPLICATION_NUMBER").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "APPLICATION_NUMBER"){
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
	if (tagId != "APPLICATION_NUMBER"){
		return;
	}
	if(operability){
		$("#APPLICATION_NUMBER").show();
	}else{
		$("#APPLICATION_NUMBER").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "APPLICATION_NUMBER"){
		return;
	}
	if (required){
		$("#APPLICATION_NUMBER").attr("required","required");
	}
});

    $("html").height('100%')
$("body").height('100%')





$('#APPLICATION_UNITName').on(' focus',function(e){
    APPLICATION_UNITClickFun();
    $(this).blur();
});

function APPLICATION_UNITClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'APPLICATION_UNIT',textFiled:'APPLICATION_UNITName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#APPLICATION_UNITButton').off('click');



        if ($('#APPLICATION_UNIT').val() == null||$('#APPLICATION_UNIT').val()==''||$('#APPLICATION_UNIT').val()==undefined) {
$("#APPLICATION_UNIT").val(session.deptId);

}
if ($('#APPLICATION_UNITName').val() == null||$('#APPLICATION_UNITName').val()==''||$('#APPLICATION_UNITName').val()==undefined) {
$("#APPLICATION_UNITName").val(session.deptName);
}







$('#ATTR1Name').on(' focus',function(e){

ATTR1ClickFun();
this.blur();
});

function ATTR1ClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'ATTR1',textFiled:'ATTR1Name',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#ATTR1Button').off('click');

if ($('#ATTR1').val() == null||$('#ATTR1').val()==''||$('#ATTR1').val()==undefined) {
    $("#ATTR1").val(session.userId);

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
    $('#ATTR1AreaName').append($li);
}
if ($('#ATTR1Name').val() == null||$('#ATTR1Name').val()==''||$('#ATTR1Name').val()==undefined) {
$("#ATTR1Name").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var ATTR1_colSecret = $('#');
    var secretLevelValue;
    if(ATTR1_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var ATTR1_selectedList = $('#ATTR1').val();
    var flag = true;
    if(secretLevelValue&&ATTR1_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':ATTR1_selectedList},
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




    var sid = "";
$('#customDialog').on('click', function () {
 var selectDialog = openDialog({
		type : 'selectWindow',
		title : "选择突击队名称",
		url : "platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/toDynYouthRecordManage",
		width : "90%",
		height : "80%",
		opentype : 2,
		shade : true,
		submit : function(index, layer) {
			var iframeWin = layer.find('iframe')[0].contentWindow;
			var objData = iframeWin.rowObjData;
 sid = objData;
 $('#DYN_SUB_ZXBASB_1').jqGrid('clearGridData');
 var dto ={} ;
 $.ajax({
	 url:"platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/initDetailFormData?id="+objData,
	 dataType:"json",
	 type:"GET",
	 async:false,
	 success: function (r) {
 dto = r.dynYouthRecordDTO;
	 }
	 }) 
 $('#customDialog').val(dto.commandoesName);
 $('#COMMANDOES_DATE').val(dto.commandoesDate); 
 getChild(objData) 
		}
	});
 
 
		});
$('#customDialog').attr('readonly',true);

function getChild(id){
 $.ajax({
	 url:"platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/QueryChild?id="+id,
	 dataType:"json",
	 type:"GET",
	 async:false,
	 success: function (r) {
 if(r.flag == "success"){
 addRow(r.dtoList);
 addRow(r.dtoListChild);
 }

	 }
	 });


}
function getformt(str){
if(str == "队长"){
 return 0;
 }else{
 return 1;
 }
}

function addRow(row){
 console.log(row)
for(var i = 0;i<row.length;i++){					
$("#DYN_SUB_ZXBASB_1norecords").hide();//隐藏提示信息
	var newRowId = newRowStart_DYN_SUB_ZXBASB_1 + newRowIndex_DYN_SUB_ZXBASB_1;
	var parameters = {
		rowID : newRowId,
		initdata : {
 TJD_DUIYUANNAME:row[i].tjdDuiyuanname,
 TJD_DUIYUANNAMEName:row[i].tjdDuiyuanname,
 TJD_DUIZHANGNAME:getformt(row[i].tjdDuizhangname), 
 TJD_AGE:row[i].tjdAge,
 TJD_DANWEI:row[i].tjdDanwei,
 TJD_DANWEIName:row[i].tjdDanwei, 
 TJD_ZHIWU:row[i].tjdZhiwu 																											 
 },
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	};
	$('#DYN_SUB_ZXBASB_1').jqGrid('addRow', parameters);
	newRowIndex_DYN_SUB_ZXBASB_1++; 
}

}
// $("#page_saveButton").on("click",function(){
// var dat = $('#DYN_SUB_ZXBASB_1').jqGrid('getRowData');
// $.ajax({
// url:'platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/sonWeekly',
// type:"POST",
// async:false,
// data:{
// json:sid,
// lcid:pageParams.id,
// }
// })
// })


var DYN_SUB_ZXBASB_1TabInitFlag = false;

						var DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect = {"0":"队长","1":"队员"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
									
var dataGridColModel_DYN_SUB_ZXBASB_1 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'突击队队员姓名Id', name: 'TJD_DUIYUANNAME', width: 75, hidden:true}
		            ,{ label:'突击队队员姓名', name:'TJD_DUIYUANNAMEName', width:50,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	     			  			  sortable:false,
			  		  		  	     editoptions:{	  	     custom_element:userElem, custom_value:userValue, forId:'TJD_DUIYUANNAME',viewScope:'currentOrg',defaultDeptCol:''}}
		                       	 ,{ label:'职务Id', name:'TJD_DUIZHANGNAME', width:75, hidden:true}
   	     ,{ label:'职务', name:'TJD_DUIZHANGNAMEName', width: 50,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_SUB_ZXBASB_1TJD_DUIZHANGNAME
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'TJD_DUIZHANGNAME',
   	     value: function(){return DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect;}}
	  }
               		  ,{label:'年龄', name:'TJD_AGE', width:50,
		            editable : false,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:50,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'所在单位Id', name: 'TJD_DANWEI', width: 75, hidden:true}
		            ,{ label:'所在单位', name:'TJD_DANWEIName', width:50,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                      	     editoptions:{		  	     custom_element:deptElem, custom_value:deptValue, forId:'TJD_DANWEI',viewScope:'currentOrg'}}
	  
                       ,{ label:'任务内容', name: 'TJD_ZHIWU', width:50,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'预留字段', name: 'TJD_FILED_USERNAME', width:50,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'预留字段', name: 'ATTR1', width:20,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_SUB_ZXBASB_1 = '{}';


DYN_SUB_ZXBASB_1UpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                    if (typeof colname=="undefined" || colname == "" || colname === "TJD_AGE" ){
				                }
                        };

if (window.DYN_SUB_ZXBASB_1_comid == null || window.DYN_SUB_ZXBASB_1_comid == undefined || window.DYN_SUB_ZXBASB_1_comid == '') {
	window.DYN_SUB_ZXBASB_1_comid = id;
}

$('#DYN_SUB_ZXBASB_1').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_SUB_ZXBASB_1',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_SUB_ZXBASB_1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"2c908c1d894ded3801894e090c780ae1",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_SUB_ZXBASB_1,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
		required:"required",
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	rownumbers: true,
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	pager:DYN_SUB_ZXBASB_1Pager,
	hasColSet:false,
	hasTabExport:false,
    rowNum: 20,
    rowList:[20, 50, 100, 200, 500],

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_SUB_ZXBASB_1norecords").hide();//隐藏提示信息
    $("#DYN_SUB_ZXBASB_1Pager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_SUB_ZXBASB_1').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_SUB_ZXBASB_1norecords").html() == null) {
            $('#DYN_SUB_ZXBASB_1').parent().append("<div class='no_data' style='display: none' id='DYN_SUB_ZXBASB_1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_SUB_ZXBASB_1').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_SUB_ZXBASB_1norecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_SUB_ZXBASB_1norecords img").css("width","120px");
        }else{
            $("#DYN_SUB_ZXBASB_1norecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_SUB_ZXBASB_1norecords").show();//显示提示信息
        $("#DYN_SUB_ZXBASB_1Pager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_SUB_ZXBASB_1').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_SUB_ZXBASB_1norecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_SUB_ZXBASB_1norecords img").css("width","120px");
	}else{
		$("#DYN_SUB_ZXBASB_1norecords img").css("width",(height/1.9)+"px");
	}
											},


beforeEditCell:function(){
	$(".datatable").not("#DYN_SUB_ZXBASB_1").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_SUB_ZXBASB_1Reload = function(){
	var _isInvalid = true;
	$("#DYN_SUB_ZXBASB_1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_SUB_ZXBASB_1TabInitFlag = true;
	$('#DYN_SUB_ZXBASB_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_SUB_ZXBASB_1TabReload = function(forceFlag){
	if(!DYN_SUB_ZXBASB_1TabInitFlag  || forceFlag){
		DYN_SUB_ZXBASB_1Reload();
	}

}


$('#DYN_SUB_ZXBASB_1').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_SUB_ZXBASB_1').append($('#DYN_SUB_ZXBASB_1Toolbar'));

    
    
function formatDYN_SUB_ZXBASB_1TJD_DUIZHANGNAME(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    


                    
DYN_SUB_ZXBASB_1Reload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_SUB_ZXBASB_1 = 0;
var newRowStart_DYN_SUB_ZXBASB_1 = "new_row";










$('#DYN_SUB_ZXBASB_1').setGridWidth(700);
$('#DYN_SUB_ZXBASB_1').jqGrid('resizeGrid');





//自定义按钮绑定事件
																//列onchange事件
								

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZXBASB_1_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZXBASB_1_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_ZXBASB_1_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_SUB_ZXBASB_1_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_ZXBASB_1_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_SUB_ZXBASB_1_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_SUB_ZXBASB_1_deleteBtn").css("display","none");
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
	return $('#DYN_SUB_ZXBASB_1').validateJqGrid("validate");
});

		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIYUANNAME","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIZHANGNAME","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_AGE","maxlength",{maxlength:38});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DANWEI","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_ZHIWU","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_FILED_USERNAME","maxlength",{maxlength:50});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","ATTR1","maxlength",{maxlength:50});
		




            $('#COMMANDOES_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


                
            $('#COMMANDOES_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                



            $('#COMMANDOES_TASK_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#COMMANDOES_TASK_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#COMMANDOES_TASK_DATE').datepicker('show');
			 $('#COMMANDOES_TASK_DATE').datepicker().trigger('click');
					
		});
        


beforeSaveEvent.addBeforeSaveEvent(function(formData){
formData["EXPECTED_INCOME"]= window.EXPECTED_INCOME.html();
});

setTimeout(function(){
window.EXPECTED_INCOME = KindEditor.create('#EXPECTED_INCOME',{
items : [
                                'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
                                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                'justifyfull', 'insertorderedlist', 'insertunorderedlist',  'selectall','/', 'image'
                                ,'|','formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat',  'hr',
                                 '|', 'about'
                        ]
,uploadJson : 'platform/eform/rtfupload/upload/' + id + '/' + 1
,allowImageRemote: true
,allowImageUpload: true
 ,height: "250px"
,resizeType:0
,filterMode:false
,afterCreate : function() {
	    if(this.html() == ''){
    	this.html("（预计4000字）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（预计4000字）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（预计4000字）'){
			this.html("");
			$($("iframe")[0]).contents().find(".ke-content").css("color","black");
			}
		}
		});

$("#EXPECTED_INCOME").parent().children(".ke-container").find(".ke-statusbar").css("display","none");

jQuery(".ke-container").css("width","100%");
$("#EXPECTED_INCOME").parent().children(".ke-container").find(".ke-edit").css("height","250px");
$("#EXPECTED_INCOME").parent().children(".ke-container").find(".ke-edit-iframe").css("height","250px");
	},500);

workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "EXPECTED_INCOME"){
		return;
	}


setTimeout(function(){
var p1 = $("#EXPECTED_INCOME").parent().children(".ke-container");
	if(operability){
		//可编辑
		p1.find(".ke-toolbar").css("display","block");
		p1.css("border","1px solid #CCCCCC");
		window.EXPECTED_INCOME.readonly(false);
	}else{
	    //不可编辑

	    window.EXPECTED_INCOME.readonly();

		p1.find(".ke-toolbar").css("display","none");
		p1.css("border","0");
	}
},800);
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){

if (tagId != "EXPECTED_INCOME"){
		return;
	}
    $("#EXPECTED_INCOME").hide();
	var p1 = $("#"+tagId).parent().children(".ke-container");
	if(operability){
		//可显示
		p1.css("display","inline-block");
	}else{
		//不可显示
		p1.css("display","none");
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "EXPECTED_INCOME"){
		return;
	}
	if (required){
		beforeSaveEvent.addBeforeSaveEvent(function(formData){
			var textCount=window.EXPECTED_INCOME.count('text');
			if(textCount==0)
			{
				layer.alert(obj.tagName+"富文本内容不能为空！", {
					title: "提示",
					icon: 7
				});
				return false;
			}
		});
	}
});





$('#COMMANDOES_POSENName').on(' focus',function(e){

COMMANDOES_POSENClickFun();
this.blur();
});

function COMMANDOES_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'COMMANDOES_POSEN',textFiled:'COMMANDOES_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#COMMANDOES_POSENButton').off('click');

if ($('#COMMANDOES_POSEN').val() == null||$('#COMMANDOES_POSEN').val()==''||$('#COMMANDOES_POSEN').val()==undefined) {
    $("#COMMANDOES_POSEN").val(session.userId);

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
    $('#COMMANDOES_POSENAreaName').append($li);
}
if ($('#COMMANDOES_POSENName').val() == null||$('#COMMANDOES_POSENName').val()==''||$('#COMMANDOES_POSENName').val()==undefined) {
$("#COMMANDOES_POSENName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var COMMANDOES_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(COMMANDOES_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var COMMANDOES_POSEN_selectedList = $('#COMMANDOES_POSEN').val();
    var flag = true;
    if(secretLevelValue&&COMMANDOES_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':COMMANDOES_POSEN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "联系人姓名" + result.msg);
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






if ($('#COMMANDOES_PXQK').val() == null||$('#COMMANDOES_PXQK').val()==''||$('#COMMANDOES_PXQK').val()==undefined)
$('#COMMANDOES_PXQK').val("待定");


//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "COMMANDOES_CONTENT"){
        return true;
    }
    if(operability){
                        var $tag = $('#COMMANDOES_CONTENT1');
            $tag.removeAttr("disabled");
                                var $tag = $('#COMMANDOES_CONTENT2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "COMMANDOES_CONTENT"){
        return;
    }

    if(operability){
        $("#COMMANDOES_CONTENT").show();
    }else{
        $("#COMMANDOES_CONTENT").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "COMMANDOES_CONTENT"){
        return;
    }

    if (required){
        $('input[name="COMMANDOES_CONTENT"]').attr("required","required");
    }else{
        $('input[name="COMMANDOES_CONTENT"]').removeAttr("required","required");
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