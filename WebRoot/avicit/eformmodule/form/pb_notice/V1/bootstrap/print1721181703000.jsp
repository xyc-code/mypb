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
   通知公告 
 </div>
 <table style=" border: 1px solid;" id="CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="NOTICE_TITLE" class=" " style=";" id="RA621jNHpE6lTgifFiD4lxGGgHzwdH4H"> <i class="required">*</i>公告标题： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="NOTICE_TITLE" name="NOTICE_TITLE" title="公告标题" maxlength="255" value="<c:out  value='${map["NOTICE_TITLE"]}'/>"> 
     </div></td> 
    <td style="width:7%; border: 1px solid; text-align: right;"><label for="USER_TEL" class=" " style=";" id="USER_TELEformLabel"> <i class="required">*</i>申请人电话： </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="USER_TEL" name="USER_TEL" title="申请人电话：" maxlength="255" value="<c:out  value='${map["USER_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="DRAFT_USER_NAME" class=" " style=";" id="wtSHVqDbiafwYxtIHnYjMNdgQzMh9fD1"> <i class="required">*</i>拟稿人： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_USER_NAME" name="DRAFT_USER_NAME" readonly title="拟稿人" maxlength="255" value="<c:out  value='${map["DRAFT_USER_NAME"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid;"><label for="DRAFT_DEPT_NAME" class=" " style=";" id="HQCxeCvZKkrC9yo09wcvLxa9pY1YM313"> <i class="required">*</i>拟稿人部门： </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_DEPT_NAME" name="DRAFT_DEPT_NAME" readonly title="拟稿人部门" maxlength="255" value="<c:out  value='${map["DRAFT_DEPT_NAME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="DRAFT_DATE" class=" " style=";" id="V7TbRs6fRiLLRowsS1AvZo44FU1q4N2a"> <i class="required">*</i>申请日期： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="DRAFT_DATE" name="DRAFT_DATE" readonly title="申请日期" maxlength="255" value="<c:out  value='${map["DRAFT_DATE"]}'/>"> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid;"><label for="RELEASE_DATE" class=" " style=";" id="W5nPoRd7FD1me1tnau9GYamahWs8qJGY"> <i class="required">*</i>失效日期： </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="失效日期" class="form-control date-picker input-sm" style=";" required id="RELEASE_DATE" name="RELEASE_DATE" value="${map['RELEASE_DATE']}" readonly> 
      <span id="RELEASE_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 是否需要反馈材料： </label> </td> 
    <td style="width:25%; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="IS_YN_ISSUE" title="是否下发党支部" style="height: auto;"> 
      <label class="radio-inline" style=";"> <input type="radio" id="IS_YN_ISSUE1" name="IS_YN_ISSUE" title="是否下发党支部" value="1" required <c:if test="${map['IS_YN_ISSUE'] eq '1'}">checked="true"</c:if> />是 </label> 
      <label class="radio-inline" style=";"> <input type="radio" id="IS_YN_ISSUE2" name="IS_YN_ISSUE" title="是否下发党支部" value="0" required <c:if test="${map['IS_YN_ISSUE'] eq '0'}">checked="true"</c:if> 
       <c:if test="${fn:length(map)==0}">
         checked="true"</c:if> />否 
       </label> 
     </div></td> 
    <td style="width:7%; text-align: right; border: 1px solid;"><label for="$colData.get(" bindfield")" class=" " style=";" id="nullEformLabel"> <i class="required">*</i>表单密级 </label> </td> 
    <td style="width:26%; border: 1px solid;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style=";" required id="SECRET_LEVEL" name="SECRET_LEVEL" title="表单密级" oldvalue="${map['SECRET_LEVEL']}"> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="REMARK" class=" " style=";" id="REMARKEformLabel"> 备注： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="5" id="REMARK" name="REMARK" title="备注" maxlength="4000"><c:out  value="${map['REMARK']}"/></div> </td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 发送党支部： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="SEL_USER" name="SEL_USER" title="下发支部" maxlength="4000" value="<c:out  value='${map["SEL_USER"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="SEL_USERButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 具体内容： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"> 
     <div id="JQQHGXKJT661fq7f8qAVb9fLx7dutcEB" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:12%; text-align: right; border: 1px solid;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 上报信息： </label> </td> 
    <td style="width:59%; border: 1px solid;" colspan="3"> 
     <div id="TKnLBc4vFAgiJaiCTsEY33VAxntefuHS" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" required id="SEL_USER_ID" name="SEL_USER_ID" title="所选人员id" maxlength="4000" value="<c:out  value='${map["SEL_USER_ID"]}'/>"> 
 </div>
 <p></p>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="OVERTIME_YN" name="OVERTIME_YN" title="是否过期" maxlength="255" value="<c:out  value='${map["OVERTIME_YN"]}'/>"> 
 </div> 
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="COUNT" name="COUNT" title="计数" maxlength="255" value="<c:out  value='${map["COUNT"]}'/>"> 
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
    var formInfoId = "948e83e381eaacfc0181faa42aa84007";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_PB_NOTICE";
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

        





if ($("input[name='DRAFT_USER_NAME']").val()==''||$("input[name='DRAFT_USER_NAME']").val()==null||$("input[name='DRAFT_USER_NAME']").val()==undefined ){
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
	$("#DRAFT_USER_NAME").val(macoValue);
}



if ($("input[name='DRAFT_DEPT_NAME']").val()==''||$("input[name='DRAFT_DEPT_NAME']").val()==null||$("input[name='DRAFT_DEPT_NAME']").val()==undefined ){
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
	$("#DRAFT_DEPT_NAME").val(macoValue);
}

    
$(function(){


if(typeof(EformFlow) != "undefined"){

 EformFlow.prototype.afterControlFormInput=function(){
 //debugger;
 var issYN = results.IS_YN_ISSUE;
//console.log(issYN);

 
 if(issYN == '0'){
 
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").hide();*/
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").hide();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").show();
 
 $("#RELEASE_DATE").show();
 $("#RELEASE_DATE_button").show();

 
 

 
 }else{
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").show();*/
$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").hide();

 if(floweditor.flowModel.activityname == 'task5' || floweditor.flowModel.activityname == 'task3' || floweditor.flowModel.activityname == 'end1'){
 
$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").show(); 
 }
 
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").hide();
 
 $("#RELEASE_DATE").hide();
 $("#RELEASE_DATE_button").hide();


}
 
 
 
 

 
 
 };
}else{
 var issYN = $("input:radio:checked").val();
//console.log(issYN);

 
 if(issYN == '0'){
 
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").hide();*/
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").hide();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").show();
 
 $("#RELEASE_DATE").show();
 $("#RELEASE_DATE_button").show();

 
 

 
 }else{
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").show();*/
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").show();


 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").hide();
 
 $("#RELEASE_DATE").hide();
 $("#RELEASE_DATE_button").hide();


}


}




});



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





            $('#RELEASE_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#RELEASE_DATE').val() == null||$('#RELEASE_DATE').val()==''||$('#RELEASE_DATE').val()==undefined) {
                    $("#RELEASE_DATE").datepicker("setDate",new Date());
                }

    $('#RELEASE_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#RELEASE_DATE').datepicker('show');
			 $('#RELEASE_DATE').datepicker().trigger('click');
					
		});
        

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "IS_YN_ISSUE"){
        return true;
    }
    if(operability){
                        var $tag = $('#IS_YN_ISSUE1');
            $tag.removeAttr("disabled");
                                var $tag = $('#IS_YN_ISSUE2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "IS_YN_ISSUE"){
        return;
    }

    if(operability){
        $("#IS_YN_ISSUE").show();
    }else{
        $("#IS_YN_ISSUE").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "IS_YN_ISSUE"){
        return;
    }

    if (required){
        $('input[name="IS_YN_ISSUE"]').attr("required","required");
    }else{
        $('input[name="IS_YN_ISSUE"]').removeAttr("required","required");
    }
});
            $('input[name="IS_YN_ISSUE"]').on('click',function(e){
            /*if($(this).val() == '0'){
 
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").hide();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").show();
 
 $("#RELEASE_DATE").show();
 $("#RELEASE_DATE_button").show();

$("#SEL_USER_ID").val("0");
 
setTimeout(function(){
 $("#RELEASE_DATE").rules("add",{required:true});
},1000);

 }else{
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").show();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").hide();
 
 $("#RELEASE_DATE").hide();
 $("#RELEASE_DATE_button").hide();

 $("#SEL_USER_ID").val("");

 }*/
        });
            




$.ajax({
    url : 'platform/eform/plugin/getSecretBox',
    data : {domId : 'SECRET_LEVEL'},
    type : 'post',
    dataType : 'json',
    success : function(result) {
                for (var i =0;i<result.lookup.length;i++){
            $('#SECRET_LEVEL').append('<option value="' + result.lookup[i].lookupCode + '">' + result.lookup[i].lookupName + '</option>');
        }
        jQuery("#SECRET_LEVEL").val(jQuery("#SECRET_LEVEL").attr("oldvalue"));
    }
});




$("#REMARKCount").html((4000 - $('#REMARK').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatREMARKLength(text,maxLen){
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




if ($('#SEL_USER').val() == null||$('#SEL_USER').val()==''||$('#SEL_USER').val()==undefined)
$('#SEL_USER').val("请选择下发党支部");

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
                , "100","select t.party_name,t.id,(select listagg( t2.user_id,',') within group (order by t2.user_id) from party_organ_member t2 where t2.party_id=t.id and t2.user_post in ('0','2','7','1')) as user_ids from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"人员ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_IDS"},{"label":"党组织名称","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"USER_IDS","targetName":"SEL_USER_ID","targetNameName":"所选人员id","display":"人员ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"SEL_USER","targetNameName":"下发支部","display":"党组织名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowSEL_USER,this.getParamsValue,'','pb_notice-SEL_USER',this.jsSuccess);


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
    $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'JQQHGXKJT661fq7f8qAVb9fLx7dutcEB',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['JQQHGXKJT661fq7f8qAVb9fLx7dutcEB'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['JQQHGXKJT661fq7f8qAVb9fLx7dutcEB'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "JQQHGXKJT661fq7f8qAVb9fLx7dutcEB"){
        return;
    }

    if (required){
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("required","required");
   }else{
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").removeAttr("required");
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("required");
    var bpmRequire = $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "JQQHGXKJT661fq7f8qAVb9fLx7dutcEB"){
        return;
    }
    if(operability){
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").show();
    }else{
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").hide();
    }
});



attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'TKnLBc4vFAgiJaiCTsEY33VAxntefuHS',
        showType: 'table',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['TKnLBc4vFAgiJaiCTsEY33VAxntefuHS'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'table'){
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'table'){
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'table'){
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['TKnLBc4vFAgiJaiCTsEY33VAxntefuHS'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find("[name='fileSecretLevel']").each(function(i,e){
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
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "TKnLBc4vFAgiJaiCTsEY33VAxntefuHS"){
        return;
    }

    if (required){
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("required","required");
   }else{
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").removeAttr("required");
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("required");
    var bpmRequire = $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("title");
        var itemListNum = 0;
        if('span' == 'table'){
            itemListNum = $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "TKnLBc4vFAgiJaiCTsEY33VAxntefuHS"){
        return;
    }
    if(operability){
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").show();
    }else{
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").hide();
    }
});
if ($('#SEL_USER_ID').val() == null||$('#SEL_USER_ID').val()==''||$('#SEL_USER_ID').val()==undefined)
$('#SEL_USER_ID').val("1");
if ($('#OVERTIME_YN').val() == null||$('#OVERTIME_YN').val()==''||$('#OVERTIME_YN').val()==undefined)
$('#OVERTIME_YN').val("0");
if ($('#COUNT').val() == null||$('#COUNT').val()==''||$('#COUNT').val()==undefined)
$('#COUNT').val("0");


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