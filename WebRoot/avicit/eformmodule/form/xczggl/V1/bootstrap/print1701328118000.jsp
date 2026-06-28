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
   巡察整改归零 
 </div>
 <div style="margin: 15px; text-align: left;"> 
  <table style="" id="a7VQyyiSdvDv55foW0ytn4zQ7PxVCNNw" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:14%;"><p>申请日期：</p></td> 
     <td style="width:24%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="申请日期" class="form-control date-picker input-sm" style=";" required readonly id="INSPECTION_FROM_DATE" name="INSPECTION_FROM_DATE" value="${map['INSPECTION_FROM_DATE']}"> 
       <span id="INSPECTION_FROM_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">表单编号：</td> 
     <td style="width:19%;"> 
      <div id="INSPECTION_FROM_ON" class="bpm_self_class " title="表单编号" style="width:100%;" required> 
       <input type="text" class="form-control input-sm" readonly name="INSPECTION_FROM_ON" value="<c:out  value='${map["INSPECTION_FROM_ON"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;">申请人：</td> 
     <td style="width:24%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="INSPECTION_FROM_POSEN" name="INSPECTION_FROM_POSEN" readonly title="申请人" maxlength="3000" value="<c:out  value='${map["INSPECTION_FROM_POSEN"]}'/>"> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">申请人单位：</td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="INSPECTION_FROM_POSEN_DEPT" name="INSPECTION_FROM_POSEN_DEPT" readonly title="申请人单位" maxlength="3000" value="<c:out  value='${map["INSPECTION_FROM_POSEN_DEPT"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;">申请人电话：</td> 
     <td style="width:24%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="INSPECTION_FROM_POSEN_TEL" name="INSPECTION_FROM_POSEN_TEL" title="申请人电话" maxlength="3000" value="<c:out  value='${map["INSPECTION_FROM_POSEN_TEL"]}'/>"> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">巡察问题序号：</td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="INSPECTION_ON" name="INSPECTION_ON" title="巡察问题序号" maxlength="3000" value="<c:out  value='${map["INSPECTION_ON"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;">责任人：</td> 
     <td style="width:24%;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="INSPECTION_POSEN" name="INSPECTION_POSEN" title="责任人" value="<c:out  value='${map["INSPECTION_POSEN"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="INSPECTION_POSENName" name="INSPECTION_POSENName" required title="责任人" value="<c:out  value='${map["INSPECTION_POSENName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="INSPECTION_POSENButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">巡察反馈的问题：</td> 
     <td style="width:19%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="2" required readonly id="INSPECTION_ISSUE" name="INSPECTION_ISSUE" title="巡察反馈的问题" maxlength="3000"><c:out  value="${map['INSPECTION_ISSUE']}"/></div> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;"><label for="ATTRIBUTE_01" class=" " style=";" id="ATTRIBUTE_01EformLabel"> </label> 问题主要方面:</td> 
     <td style="width:24%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="2" readonly id="ATTRIBUTE_01" name="ATTRIBUTE_01" title="问题主要方面 " maxlength="3000"><c:out  value="${map['ATTRIBUTE_01']}"/></div> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"><label for="ATTRIBUTE_04" class=" " style=";" id="ATTRIBUTE_04EformLabel"> </label> 问题的具体内容:</td> 
     <td style="width:19%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="4" readonly id="ATTRIBUTE_04" name="ATTRIBUTE_04" title="问题的具体内容" maxlength="3000"><c:out  value="${map['ATTRIBUTE_04']}"/></div> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;">产生问题的根本原因：</td> 
     <td style="width:24%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="4" required readonly id="INSPECTION_END_ISSUE" name="INSPECTION_END_ISSUE" title="产生问题的根本原因" maxlength="3000"><c:out  value="${map['INSPECTION_END_ISSUE']}"/></div> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;">针对根本原因制定的归零措施：</td> 
     <td style="width:19%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="4" required readonly id="INSPECTION_MEASURE_ISSUE" name="INSPECTION_MEASURE_ISSUE" title="针对根本原因制定的归零措施" maxlength="3000"><c:out  value="${map['INSPECTION_MEASURE_ISSUE']}"/></div> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;">整改措施完成情况：</td> 
     <td style="width:24%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="3" required id="INSPECTION_END_ISSUE_QK" name="INSPECTION_END_ISSUE_QK" title="整改措施完成情况" maxlength="3000"><c:out  value="${map['INSPECTION_END_ISSUE_QK']}"/></div> </td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"><label for="INSPECTION_ONE_AND" class=" " style="font-weight:500;;" id="INSPECTION_ONE_ANDEformLabel"> 举一反三的检查情况： </label> </td> 
     <td style="width:19%;"><div style="height:auto;" class="form-control input-sm " style="resize:none;resize: auto;" rows="3" id="INSPECTION_ONE_AND" name="INSPECTION_ONE_AND" title="举一反三检查情况" maxlength="3000"><c:out  value="${map['INSPECTION_ONE_AND']}"/></div> </td> 
    </tr> 
    <tr> 
     <td style="width:14%;">整改措施落实的证件材料：</td> 
     <td style="width:24%;"><label for="M0QNQdnkP7mMAm48EJdfvRr5oRAChmED" class=" " style="color:red;" id="M0QNQdnkP7mMAm48EJdfvRr5oRAChmEDEformLabel"> 内部系统，禁止上传涉密文件 </label> 
      <div id="M0QNQdnkP7mMAm48EJdfvRr5oRAChmED" class="attachment_div eform_mutiattach_auth bpm_self_class" title="内部系统，禁止上传涉密文件"> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"></td> 
    </tr> 
    <tr> 
     <td style="width:14%;"><label for="请选择" class=" " style="font-weight:500;;display:none;" id="请选择EformLabel"> 被巡察单位主管领导审核意见： </label> </td> 
     <td style="width:24%;"> 
      <div id="gsld" class="bpm_self_class " title=""> 
      </div></td> 
     <td style="width:19%;"></td> 
     <td style="width:19%;"><label for="INSPECTION_OPINION_S_input" class=" " style="font-weight:500;;display:none;" id="INSPECTION_OPINION_S_inputEformLabel"> 被巡察单位巡察整改领导小组意见： </label> </td> 
     <td style="width:19%;"> 
      <div id="xcxz" class="bpm_self_class " title=""> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:14%;"><label for="$colData.get(" bindfield")" class=" " style="font-weight:500;;display:none;" id="nullEformLabel"> 公司主管业务部门审查意见： </label> </td> 
     <td style="width:81%;" colspan="4"> 
      <div id="zgyw" class="bpm_self_class " title=""> 
      </div></td> 
    </tr> 
   </tbody> 
  </table> 
  <p> </p> 
  <div class="input-group-sm "> 
   <select class="form-control input-sm" style="; display:none;" id="INSPECTION_OPINION_END" name="INSPECTION_OPINION_END" title="公司主管业务部门审查意见"> <option value="">请选择</option> <option value="1" <c:if test="${map['INSPECTION_OPINION_END'] eq '1'}">selected</c:if> >1</option> </select> 
  </div> 
  <p></p> 
 </div>
 <div style="font-size: 24px; margin: 15px;"> 
  <div class="input-group-sm "> 
   <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTRIBUTE_03" name="ATTRIBUTE_03" title="清单id" maxlength="3000" value="<c:out  value='${map["ATTRIBUTE_03"]}'/>"> 
  </div> 
 </div>
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
        <script src="avicit/pb/dyntaskchecklist/js/DynTaskChecklist.js" type="text/javascript"></script>
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
    var formInfoId = "2c9150818823df8f0188273b98d505ed";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_INSPECTION";
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

        

            $('#INSPECTION_FROM_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#INSPECTION_FROM_DATE').val() == null||$('#INSPECTION_FROM_DATE').val()==''||$('#INSPECTION_FROM_DATE').val()==undefined) {
                    $("#INSPECTION_FROM_DATE").datepicker("setDate",new Date());
                }

                
            $('#INSPECTION_FROM_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                    




$("#INSPECTION_FROM_ON").attr("initvalue",$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val());
if ($("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==''||$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==null||$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==undefined ){

window.INSPECTION_FROM_ONautocode = new AutoCode('INSPECTION_FROM_ON',"INSPECTION_FROM_ON",false,"INSPECTION_FROM_ON",undefined
	,function(){$("#INSPECTION_FROM_ON").find("input").attr("style","");}

);


}else{
	$("#INSPECTION_FROM_ON").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val();
		var flag = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#INSPECTION_FROM_ON").attr("initvalue");
		var valuePure = $("#INSPECTION_FROM_ON").find("#autoCode").val();
		if (flag != "disabled" && window.INSPECTION_FROM_ONautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=INSPECTION_FROM_ON',
					type: 'POST',
					async:false,
					data: {
						autoCode: "INSPECTION_FROM_ON",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=INSPECTION_FROM_ON',
								type: 'POST',
								async:false,
								data: {
									autoCode: "INSPECTION_FROM_ON",
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
										formData["INSPECTION_FROM_ON"] = result.value;
										$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val(result.value);
										$("#INSPECTION_FROM_ON").attr("initvalue",result.value);
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
				delete formData["INSPECTION_FROM_ON"];
				$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val();
		var require = $("#INSPECTION_FROM_ON").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "INSPECTION_FROM_ON"){
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
	if (tagId != "INSPECTION_FROM_ON"){
		return;
	}
	if(operability){
		$("#INSPECTION_FROM_ON").show();
	}else{
		$("#INSPECTION_FROM_ON").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "INSPECTION_FROM_ON"){
		return;
	}
	if (required){
		$("#INSPECTION_FROM_ON").attr("required","required");
	}
});

if ($("input[name='INSPECTION_FROM_POSEN']").val()==''||$("input[name='INSPECTION_FROM_POSEN']").val()==null||$("input[name='INSPECTION_FROM_POSEN']").val()==undefined ){
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
	$("#INSPECTION_FROM_POSEN").val(macoValue);
}

if ($("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==''||$("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==null||$("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==undefined ){
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
	$("#INSPECTION_FROM_POSEN_DEPT").val(macoValue);
}

    



$('#INSPECTION_POSENName').on(' focus',function(e){

INSPECTION_POSENClickFun();
this.blur();
});

function INSPECTION_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'INSPECTION_POSEN',textFiled:'INSPECTION_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var INSPECTION_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(INSPECTION_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var INSPECTION_POSEN_selectedList = $('#INSPECTION_POSEN').val();
    var flag = true;
    if(secretLevelValue&&INSPECTION_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':INSPECTION_POSEN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "责任人" + result.msg);
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


$("#INSPECTION_ISSUECount").html((3000 - $('#INSPECTION_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_ISSUELength(text,maxLen){
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



$("#ATTRIBUTE_01Count").html((3000 - $('#ATTRIBUTE_01').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatATTRIBUTE_01Length(text,maxLen){
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



$("#ATTRIBUTE_04Count").html((3000 - $('#ATTRIBUTE_04').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatATTRIBUTE_04Length(text,maxLen){
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

$("#INSPECTION_END_ISSUECount").html((3000 - $('#INSPECTION_END_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_END_ISSUELength(text,maxLen){
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

$("#INSPECTION_MEASURE_ISSUECount").html((3000 - $('#INSPECTION_MEASURE_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_MEASURE_ISSUELength(text,maxLen){
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

$("#INSPECTION_END_ISSUE_QKCount").html((3000 - $('#INSPECTION_END_ISSUE_QK').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_END_ISSUE_QKLength(text,maxLen){
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



$("#INSPECTION_ONE_ANDCount").html((3000 - $('#INSPECTION_ONE_AND').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_ONE_ANDLength(text,maxLen){
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




attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'M0QNQdnkP7mMAm48EJdfvRr5oRAChmED',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['M0QNQdnkP7mMAm48EJdfvRr5oRAChmED'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['M0QNQdnkP7mMAm48EJdfvRr5oRAChmED'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: 'INSPECTION_OPINION_END',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "M0QNQdnkP7mMAm48EJdfvRr5oRAChmED"){
        return;
    }

    if (required){
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("required","required");
   }else{
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").removeAttr("required");
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("required");
    var bpmRequire = $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "M0QNQdnkP7mMAm48EJdfvRr5oRAChmED"){
        return;
    }
    if(operability){
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").show();
    }else{
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").hide();
    }
});


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@zgld',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#gsld').html(result.html);
                     jQuery("#gsld").css({});
         			 jQuery("label[for='gsld']").css({});
                
                            }
        }
    });
    
        jQuery("#gsld").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "gsld"){
            return true;
        }
        if(!operability){
            jQuery("#gsld").css("display","none");
            jQuery("label[for='gsld']").css("display","none");
        }else{
            jQuery("#gsld").css("display","block");
            jQuery("label[for='gsld']").css("display","block");
        }
    
         jQuery("#gsld").css({});
          jQuery("label[for='gsld']").css({});
        });

}


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@dwxz',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#xcxz').html(result.html);
                     jQuery("#xcxz").css({});
         			 jQuery("label[for='xcxz']").css({});
                
                            }
        }
    });
    
        jQuery("#xcxz").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "xcxz"){
            return true;
        }
        if(!operability){
            jQuery("#xcxz").css("display","none");
            jQuery("label[for='xcxz']").css("display","none");
        }else{
            jQuery("#xcxz").css("display","block");
            jQuery("label[for='xcxz']").css("display","block");
        }
    
         jQuery("#xcxz").css({});
          jQuery("label[for='xcxz']").css({});
        });

}


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@ywzg',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#zgyw').html(result.html);
                     jQuery("#zgyw").css({});
         			 jQuery("label[for='zgyw']").css({});
                
                            }
        }
    });
    
        jQuery("#zgyw").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "zgyw"){
            return true;
        }
        if(!operability){
            jQuery("#zgyw").css("display","none");
            jQuery("label[for='zgyw']").css("display","none");
        }else{
            jQuery("#zgyw").css("display","block");
            jQuery("label[for='zgyw']").css("display","block");
        }
    
         jQuery("#zgyw").css({});
          jQuery("label[for='zgyw']").css({});
        });

}
if ($('#INSPECTION_OPINION_END').val() == null||$('#INSPECTION_OPINION_END').val()==''||$('#INSPECTION_OPINION_END').val()==undefined)$('#INSPECTION_OPINION_END').val("1");    window.onload= function(){
 setTimeout(function(){
 $("textarea").attr('disabled',false);
 $("input").attr('disabled',false);
 clearTimeout(this)
 },2000)
 
};


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