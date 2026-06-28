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
 <div class="mce-content-body1"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    “铸心”青年突击队备案 
  </div> 
  <table style=" border: 1px solid;" id="aXvE51evuMhXIyHvONcI8sSoCbFM5DCw" border="1" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="APPLICATION_NUMBER" class=" " style=";" id="wYEHvUzb062SSA1gPiyU241uP3r0lPtp"> 申请编号： </label> </td> 
     <td style="width:18%; border: 1px solid;"> 
      <div id="APPLICATION_NUMBER" class="bpm_self_class " title="申请编号" style="width:100%;"> 
       <input type="text" class="form-control input-sm" readonly name="APPLICATION_NUMBER" value="<c:out  value='${map["APPLICATION_NUMBER"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="APPLICATION_UNITName" class=" " style=";" id="Y6pALww1kYjJIkPBEi813YvL8jfhOdw5"> 申请单位： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="APPLICATION_UNIT" name="APPLICATION_UNIT" title="申请单位" value="<c:out  value='${map["APPLICATION_UNIT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="APPLICATION_UNITName" name="APPLICATION_UNITName" disabled title="申请单位" value="<c:out  value='${map["APPLICATION_UNITName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="APPLICATION_UNITButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="ATTR1Name" class=" " style=";" id="attribute"> 申请人： </label> </td> 
     <td style="width:18%; border: 1px solid;">&nbsp; 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="ATTR1" name="ATTR1" title="申请人" value="<c:out  value='${map["ATTR1"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="ATTR1Name" name="ATTR1Name" disabled title="申请人" value="<c:out  value='${map["ATTR1Name"]}'/>"> 
       <span class="input-group-addon user-box-act" id="ATTR1Button"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_NAME" class=" " style=";" id="SZr3Wlj65qqllRmqGutleeC4cJKDjrXL"> <i class="required">*</i>突击队名称： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="COMMANDOES_NAME" name="COMMANDOES_NAME" title="突击队名称" maxlength="50" value="<c:out  value='${map["COMMANDOES_NAME"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:50%; text-align: right; border: 1px solid;" colspan="4"> 
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
              <a id="DYN_SUB_ZXBASB_1_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
              <a id="DYN_SUB_ZXBASB_1_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
              <a id="DYN_SUB_ZXBASB_1_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
              <a id="DYN_SUB_ZXBASB_1_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
              <a id="DYN_SUB_ZXBASB_1_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
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
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_DATE" class=" " style=";" id="MzSV3Vd0s0erPXqlQYXrfKOkTPE3B4v5"> <i class="required">*</i>成立时间： </label> </td> 
     <td style="width:18%; border: 1px solid;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="成立时间" class="form-control date-picker input-sm" style=";" required id="COMMANDOES_DATE" name="COMMANDOES_DATE" value="${map['COMMANDOES_DATE']}" readonly> 
       <span id="COMMANDOES_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_TASK_DATE" class=" " style=";" id="OpTWILbAhmvztQH0nemFMTzuHiVtT7kO"> <i class="required">*</i>计划完成任务时间： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="计划完成任务时间" class="form-control date-picker input-sm" style=";" required id="COMMANDOES_TASK_DATE" name="COMMANDOES_TASK_DATE" value="${map['COMMANDOES_TASK_DATE']}" readonly> 
       <span id="COMMANDOES_TASK_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><label for="COMMANDOES_THEME" class=" " style=";" id="wUPqZrR4mSkdkqGCUddImquAKOzTAiNY"> <i class="required">*</i>突击队主题： </label> </td> 
     <td style="width:18%; border: 1px solid;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="COMMANDOES_THEME" name="COMMANDOES_THEME" title="主题" maxlength="50" value="<c:out  value='${map["COMMANDOES_THEME"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"effpfv1hihohlhanoy7sv0y1hwvdqjhd","bindfield":"commandoes_type","labelname":"突击队类型：","labeltype":"text-box","ischuantou":"","colisvisible":"y","colismust":"n","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="COMMANDOES_TYPE" class=" " style=";" id="EFFPfv1hIhoHlHANOy7sV0y1HwVdqJHd"> 突击队类型： </label> </td> 
     <td style="width:19%; border: 1px solid;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="COMMANDOES_TYPE" name="COMMANDOES_TYPE" title="突击队类型"> <option value="0" <c:if test="${map['COMMANDOES_TYPE'] eq '0'}">selected</c:if> >生产攻坚型</option> <option value="1" <c:if test="${map['COMMANDOES_TYPE'] eq '1'}">selected</c:if> >科技创新型</option> <option value="2" <c:if test="${map['COMMANDOES_TYPE'] eq '2'}">selected</c:if> >技术攻关型</option> <option value="3" <c:if test="${map['COMMANDOES_TYPE'] eq '3'}">selected</c:if> >管理改善型</option> <option value="4" <c:if test="${map['COMMANDOES_TYPE'] eq '4'}">selected</c:if> >质量提升型</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right; border: 1px solid;"><span style="color: red;"><label for="elementType" :"text","domid":"oj8ib7q4aqltdzkf8cwmy9fflqdjrty0","bindfield":"expected_income","labelname":"预期效果：","labeltype":"text-box","ischuantou":"","colisvisible":"y","colismust":"n","tooltip":"n","tooltipcontent":"","css_class":"","css_style":"","colisvisibleshow":"","domtype":"label-box","coltype":"not_db_col_ele">*</label></span><label for="EXPECTED_INCOME" class=" " style=";" id="oj8Ib7Q4aqLtDzkf8cwmy9FflQDJrTy0"> 预期效果： </label> </td> 
     <td style="width:43%; border: 1px solid;" colspan="3"> 
      <div> 
       <div style="height:auto;" id="EXPECTED_INCOME" name="EXPECTED_INCOME" class="bpm_self_class" title="预期收益"><c:out value="${map['EXPECTED_INCOME']}"/></div> 
      </div> </td> 
    </tr> 
   </tbody> 
  </table> 
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
    var formInfoId = "2c908c1d89486dca018948b9e6450896";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_YOUTH_RECORD";
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

window.APPLICATION_NUMBERautocode = new AutoCode('DYN_YOUTH_RECORD_CODE',"APPLICATION_NUMBER",false,"APPLICATION_NUMBER",undefined
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
						autoCode: "DYN_YOUTH_RECORD_CODE",
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
									autoCode: "DYN_YOUTH_RECORD_CODE",
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
         		  		  ,{ label:'突击队员姓名', name:'ATTR1', width:50,
		  		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'30',
      queryStatement:"select t1.user_id_vc,t1.DPET_ONT_VC,t2.name, TRUNC(MONTHS_BETWEEN(sysdate,t1.NEW_DATE)/12) as age from dyn_youth_info t1 left join sys_user t2 ON to_char(t1.user_id) = t2.id ",
      dataGridColModel:'[{"label":"姓名","width":"50","hidden":true,"align":"center","orderBy":"","name":"NAME"},{"label":"USER_ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID_VC"},{"label":"姓名","width":"50","align":"center","orderBy":"","name":"USER_ID_VCName"},{"label":"部门","width":"50","hidden":true,"align":"center","orderBy":"","name":"DPET_ONT_VC"},{"label":"部门","width":"50","align":"center","orderBy":"","name":"DPET_ONT_VCName"},{"label":"年龄","width":"50","align":"center","orderBy":"4","name":"AGE"}]',
      mapping:'[{"name":"AGE","targetName":"TJD_AGE","targetNameName":"年龄","display":"年龄","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"","targetNameName":"","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"USER_ID_VC","targetName":"TJD_DUIYUANNAME","targetNameName":"突击队队员姓名id(值)","display":"USER_ID","transform":"","lookupType":"","filter":false},{"name":"USER_ID_VCName","targetName":"ATTR1","targetNameName":"突击队员姓名","display":"姓名","transform":"1","lookupType":"","filter":false},{"name":"DPET_ONT_VC","targetName":"TJD_DANWEI","targetNameName":"所在单位(值)","display":"部门","transform":"","lookupType":"","filter":false},{"name":"DPET_ONT_VCName","targetName":"TJD_DANWEIName","targetNameName":"所在单位","display":"部门","transform":"3","lookupType":"","filter":false}]',
      jsSuccess:'',
      jsBefore:'',
      jsAfter:'',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'N',
      isMuti:'N',
      inputChk:'N',
      dicUniqueCode:'qntjdba-DYN_SUB_ZXBASB_1-ATTR1'}}
                       ,{ label:'突击队队员姓名idId', name: 'TJD_DUIYUANNAME', width: 75, hidden:true}
		            ,{ label:'突击队队员姓名id', name:'TJD_DUIYUANNAMEName', width:50,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	                hidden:true,
         			  			  sortable:false,
			  		  		  	     editoptions:{	  	  selectModel:'single',
		  	     custom_element:userElem, custom_value:userValue, forId:'TJD_DUIYUANNAME',viewScope:'currentOrg',defaultDeptCol:'TJD_DANWEI'}}
		                       	 ,{ label:'职务Id', name:'TJD_DUIZHANGNAME', width:75, hidden:true}
   	     ,{ label:'职务', name:'TJD_DUIZHANGNAMEName', width: 50,
		            editable : true,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_SUB_ZXBASB_1TJD_DUIZHANGNAME
	  						  	     , editoptions: {      callBack:function(e){var row = $('#DYN_SUB_ZXBASB_1').jqGrid('getRowData');
var j = 0
for(var i = 0;i<row.length;i++){
if(row[i].TJD_DUIZHANGNAME == '0'){
j++;
if(j>1){
$("#"+rowCid+' [aria-describedby="DYN_SUB_ZXBASB_1_TJD_DUIZHANGNAME"]').text("1")
$(this).val('1')
$("#"+rowCid+" [aria-describedby='DYN_SUB_ZXBASB_1_TJD_DUIZHANGNAMEName'] ").text("")
 		layer.alert('突击队只能有一个队长！', {
 					 icon: 7,	
 					 area: ['400px', ''], 
 					 closeBtn: 0,
 					 btn: ['关闭'],
 					 title:"提示"
 					})
}
}
}},
      	  custom_element:selectElem, custom_value:selectValue, forId:'TJD_DUIZHANGNAME',
   	     value: function(){return DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMESelect;}}
	  }
               		  ,{label:'年龄', name:'TJD_AGE', width:50,
		            editable : false,
		                  align:'center',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(1) ) {
							layer.msg('子表列【年龄】的输入值必须大于等于1',{icon:0});
							this.value = 1;
						}
												  						  if (parseFloat(this.value) > parseFloat(100) ) {
						  layer.msg('子表列【年龄】的输入值必须小于等于100',{icon:0});
							  this.value = 100;
						  }
						  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:50,
		            editable : true,
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
		                      	     editoptions:{		  		  selectModel:'single',
		  	     custom_element:deptElem, custom_value:deptValue, forId:'TJD_DANWEI',viewScope:'currentOrg'}}
	  
                       ,{ label:'任务内容', name: 'TJD_ZHIWU', width:50,
		            editable : true,
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
    postData: {comId:window.DYN_SUB_ZXBASB_1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"2c908c1d89486dca018948b9e6450896",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
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

	    onCellSelect:function(rowid,iCol,cellcontent,e){
		rowCid = rowid
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


/**
 * 添加页面
 */
insertTableDYN_SUB_ZXBASB_1 = function(){
	$('#DYN_SUB_ZXBASB_1').jqGrid('endEditCell');
	$("#DYN_SUB_ZXBASB_1norecords").hide();//隐藏提示信息
	$("#DYN_SUB_ZXBASB_1Pager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_SUB_ZXBASB_1 + newRowIndex_DYN_SUB_ZXBASB_1;
	var parameters = {
		rowID : newRowId,
		initdata : {
														TJD_DUIZHANGNAME:  typeof (1) !== 'undefined'? 1 : '1',
																															},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_SUB_ZXBASB_1').jqGrid('addRow', parameters);
	newRowIndex_DYN_SUB_ZXBASB_1++;  
};



/**
 * 删除
 */
deleteTableDYN_SUB_ZXBASB_1 = function(){
	var rows = [];
	rows = $('#DYN_SUB_ZXBASB_1').jqGrid('getGridParam','selarrrow');


	$('#DYN_SUB_ZXBASB_1').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_SUB_ZXBASB_1').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_SUB_ZXBASB_1',
					data: {ids : ids.join(','),formInfoId:'2c908c1d89486dca018948b9e6450896',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_SUB_ZXBASB_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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





$('#DYN_SUB_ZXBASB_1').setGridWidth(700);
$('#DYN_SUB_ZXBASB_1').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_SUB_ZXBASB_1_insertBtn').bind('click',function(){
	insertTableDYN_SUB_ZXBASB_1();
});

//按钮绑定事件
$('#DYN_SUB_ZXBASB_1_deleteBtn').bind('click',function(){
	deleteTableDYN_SUB_ZXBASB_1();
});

//自定义按钮绑定事件
																//列onchange事件
					DYN_SUB_ZXBASB_1TJD_DUIZHANGNAMEChange = function(_this,e){
		var row = $('#DYN_SUB_ZXBASB_1').jqGrid('getRowData');
var j = 0
for(var i = 0;i<row.length;i++){
if(row[i].TJD_DUIZHANGNAME == '0'){
j++;
if(j>1){
$("#"+rowCid+' [aria-describedby="DYN_SUB_ZXBASB_1_TJD_DUIZHANGNAME"]').text("1")
$(this).val('1')
$("#"+rowCid+" [aria-describedby='DYN_SUB_ZXBASB_1_TJD_DUIZHANGNAMEName'] ").text("")
 		layer.alert('突击队只能有一个队长！', {
 					 icon: 7,	
 					 area: ['400px', ''], 
 					 closeBtn: 0,
 					 btn: ['关闭'],
 					 title:"提示"
 					})
}
}
}
    }
						

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

		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","ATTR1","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIYUANNAME","maxlength",{maxlength:255});
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIZHANGNAME","required");
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DUIZHANGNAME","maxlength",{maxlength:255});
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_AGE","required");
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_AGE","maxlength",{maxlength:38});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DANWEI","required");
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_DANWEI","maxlength",{maxlength:255});
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_ZHIWU","required");
		$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_ZHIWU","maxlength",{maxlength:255});
				$('#DYN_SUB_ZXBASB_1').validateJqGrid("addValidate","TJD_FILED_USERNAME","maxlength",{maxlength:50});
		




            $('#COMMANDOES_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#COMMANDOES_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#COMMANDOES_DATE').datepicker('show');
			 $('#COMMANDOES_DATE').datepicker().trigger('click');
					
		});
        



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
    	this.html("（预计200字以内）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（预计200字以内）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（预计200字以内）'){
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