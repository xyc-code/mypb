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
    公司年度领导干部民主生活会 
  </div> 
  <table style="" id="kI3YIqIInwvzsGlPCP7pHxK8lKW7wdxN" class="form_commonTable1"> 
   <tbody> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="DEMOCRACY_DEPTName" class=" " style=";" id="QAZEtdFTOICrAT1eAOMls6RtvVJzErME"> <i class="required">*</i>单位： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="DEMOCRACY_DEPT" name="DEMOCRACY_DEPT" title="单位" value="<c:out  value='${map["DEMOCRACY_DEPT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="DEMOCRACY_DEPTName" name="DEMOCRACY_DEPTName" required disabled title="单位" value="<c:out  value='${map["DEMOCRACY_DEPTName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="DEMOCRACY_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
     <td style="width:21%; text-align: right; height: 30px;"><label for="DEMOCRACY_USER" class=" " style=";" id="DEMOCRACY_USEREformLabel"> <i class="required">*</i>拟稿人： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=";" id="DEMOCRACY_USER" name="DEMOCRACY_USER" readonly title="拟稿人" maxlength="1000" value="<c:out  value='${map["DEMOCRACY_USER"]}'/>"> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> <i class="required">*</i>联系电话： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="tel" name="DEMOCRACY_TEL" title="联系电话" maxlength="255" value="<c:out  value='${map["DEMOCRACY_TEL"]}'/>"> 
      </div></td> 
     <td style="width:21%; text-align: right; height: 30px;"><label for="DEMOCRACY_DATE" class=" " style=";" id="ga4wNgL5JOzMmCeAj5NYYa6Qfgk4gSlj"> <i class="required">*</i>召开日期： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="召开日期报送" class="form-control time-picker input-sm" style=";" required id="DEMOCRACY_DATE" name="DEMOCRACY_DATE" value="${map['DEMOCRACY_DATE']}" readonly> 
       <span id="DEMOCRACY_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr style="height: 47px;"> 
     <td style="width:10%; text-align: right; height: 47px;"><label for="LEAD_JOIN" class=" " style=";" id="XymsSDJ163i9n1DRFqjiEfMXYxfZGYD8"> <i class="required">*</i>主管公司领导是否参加： </label> </td> 
     <td style="width:21%; height: 47px;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="LEAD_JOIN" name="LEAD_JOIN" title="主管公司领导是否参加"> <option value="N" <c:if test="${map['LEAD_JOIN'] eq 'N'}">selected</c:if> >否</option> <option value="Y" <c:if test="${map['LEAD_JOIN'] eq 'Y'}">selected</c:if> >是</option> </select> 
      </div> </td> 
     <td style="width:21%; text-align: right; height: 47px;"><label for="LEAD_NAMEName" class=" " style=";" id="BaZ2oEVXADiRGQa7M8wZuEenaPHRFTCN"> 公司领导姓名： </label> </td> 
     <td style="width:21%; height: 47px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="LEAD_NAME" name="LEAD_NAME" title="公司领导姓名" value="<c:out  value='${map["LEAD_NAME"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="LEAD_NAMEName" name="LEAD_NAMEName" title="公司领导姓名" value="<c:out  value='${map["LEAD_NAMEName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="LEAD_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
    </tr> 
    <tr style="height: 47px;"> 
     <td style="width:10%; text-align: right; height: 47px;"><label for="DEMOCRACY_WZ" class=" " style=";" id="DEMOCRACY_WZEformLabel"> <i class="required">*</i>召开地点: </label> </td> 
     <td style="width:63%; height: 47px;" colspan="3"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="DEMOCRACY_WZ" name="DEMOCRACY_WZ" title="召开地点" maxlength="255" value="<c:out  value='${map["DEMOCRACY_WZ"]}'/>"> 
      </div>备注：需要详细填至XX工房XX室</td> 
    </tr> 
    <tr style="height: 47px;"> 
     <td style="width:73%; height: 47px; text-align: center;" colspan="4"> 
      <div id="uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd" class="bpm_self_class " title=""> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="DEMOCRACY_END_DATE" class=" " style=";" id="QilmpxTmrx64tupawfxYiN8XcVBs5RIt"> 会后材料报送日期： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="会后材料报送日期" class="form-control time-picker input-sm" style=";" readonly id="DEMOCRACY_END_DATE" name="DEMOCRACY_END_DATE" value="${map['DEMOCRACY_END_DATE']}"> 
       <span id="DEMOCRACY_END_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:21%; text-align: right; height: 30px;">&nbsp;<label for="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t" class=" " style=";" id="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024tEformLabel"> 会后材料上传(以压缩包形式上传)： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div id="xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t" class="attachment_div eform_mutiattach_auth bpm_self_class" title="会后材料上传(以压缩包形式上传)："> 
      </div></td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="JW_JOIN" class=" " style=";" id="JW_JOINEformLabel"> 纪检/人力参会人员是否参加： </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " readonly id="JW_JOIN" name="JW_JOIN" title="纪检/人力参会人员是否参加"> <option value="">请选择</option> <option value="N" <c:if test="${map['JW_JOIN'] eq 'N'}">selected</c:if> >否</option> <option value="Y" <c:if test="${map['JW_JOIN'] eq 'Y'}">selected</c:if> >是</option> </select> 
      </div> </td> 
     <td style="width:21%; text-align: right; height: 30px;"><label for="JW_NAMEName" class=" " style=";" id="JW_NAMEEformLabel"> 纪检/人力参会人员: </label> </td> 
     <td style="width:21%; height: 30px;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="JW_NAME" name="JW_NAME" title="纪检/人力参会人员" value="<c:out  value='${map["JW_NAME"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="JW_NAMEName" name="JW_NAMEName" disabled title="纪检/人力参会人员" value="<c:out  value='${map["JW_NAMEName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="JW_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
    </tr> 
    <tr style="height: 30px;"> 
     <td style="width:10%; text-align: right; height: 30px;"><label for="LEAD_YN" class=" " style=";" id="LEAD_YNEformLabel"> 公司领导最终是否参会： </label> </td> 
     <td style="width:63%; height: 30px;" colspan="3"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " readonly id="LEAD_YN" name="LEAD_YN" title="公司领导最终是否参会："> <option value="">请选择</option> <option value="Y" <c:if test="${map['LEAD_YN'] eq 'Y'}">selected</c:if> >是</option> <option value="N" <c:if test="${map['LEAD_YN'] eq 'N'}">selected</c:if> >否</option> </select> 
      </div> </td> 
    </tr> 
   </tbody> 
  </table> 
 </div>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="FILE_TYPE" name="FILE_TYPE" title="文件密级" maxlength="255" value="<c:out  value='${map["FILE_TYPE"]}'/>"> 
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
    var formInfoId = "2c908c1d89cef9c70189cf069a91068e";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_DEMOCRACY";
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

        




$('#DEMOCRACY_DEPTName').on(' focus',function(e){
    DEMOCRACY_DEPTClickFun();
    $(this).blur();
});

function DEMOCRACY_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DEMOCRACY_DEPT',textFiled:'DEMOCRACY_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#DEMOCRACY_DEPTButton').off('click');



        if ($('#DEMOCRACY_DEPT').val() == null||$('#DEMOCRACY_DEPT').val()==''||$('#DEMOCRACY_DEPT').val()==undefined) {
$("#DEMOCRACY_DEPT").val(session.deptId);

}
if ($('#DEMOCRACY_DEPTName').val() == null||$('#DEMOCRACY_DEPTName').val()==''||$('#DEMOCRACY_DEPTName').val()==undefined) {
$("#DEMOCRACY_DEPTName").val(session.deptName);
}





if ($("input[name='DEMOCRACY_USER']").val()==''||$("input[name='DEMOCRACY_USER']").val()==null||$("input[name='DEMOCRACY_USER']").val()==undefined ){
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
	$("#DEMOCRACY_USER").val(macoValue);
}



    if(pageParams.entryId == undefined){
var userId = pageParams.session.userId;
$.ajax({
 url:"avicit/pb/organize/partyOrganMember/partyOrganMemberTelController/getUser/"+userId,
 type:"POST",
 dataType:"JSON",
 success:function(e){
 if(e==null||e.rows.length==0){
 layer.msg('未获取到对应电话');
 }else{
 $("#tel").val(e.rows[0].attribute10);
 }
 },
 error:function(e){
 //layer.msg('网络异常，未找到对应接口,无法带入联系电话');
 }
});
}





            $('#DEMOCRACY_DATE').datetimepicker({
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
    


    $('#DEMOCRACY_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#DEMOCRACY_DATE').datetimepicker('show');
			 $('#DEMOCRACY_DATE').datetimepicker().trigger('click');
	    			
		});
        

if ($('#LEAD_JOIN').val() == null||$('#LEAD_JOIN').val()==''||$('#LEAD_JOIN').val()==undefined)$('#LEAD_JOIN').val("N");            $('#LEAD_JOIN').on('change',function(e){
            if(e.currentTarget.value ==="Y"){
 $('#LEAD_NAMEName').parent().css('cursor',"");
 $('#LEAD_NAMEName').removeAttr('disabled')
}else{
 $('#LEAD_NAMEName').parent().css('cursor',"not-allowed");
 $('#LEAD_NAMEName').attr('disabled','disabled')
}
        });
            $(document).ready(function(){
$('#LEAD_NAMEName').attr('disabled','disabled')
$('#LEAD_NAMEName').parent().css('cursor',"not-allowed");
})




$('#LEAD_NAMEName').on(' focus',function(e){

LEAD_NAMEClickFun();
this.blur();
});

function LEAD_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';


var defaultSelectOrgIds = $("#").attr("orgidentity");
var defaultSelectOrgId =pageParams.session.orgIndentity;
if (defaultSelectOrgIds&&defaultSelectOrgIds.indexOf(";")){
defaultSelectOrgId = defaultSelectOrgIds.split(";")[0];
}
if (defaultSelectOrgId==undefined||defaultSelectOrgId==""){defaultSelectOrgId = pageParams.session.orgIndentity;}

var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";
        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadGroupId = "948e83e38e120a84018e17d7bc485f05";
    }
    
var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'LEAD_NAME',textFiled:'LEAD_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['dept', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var LEAD_NAME_colSecret = $('#');
    var secretLevelValue;
    if(LEAD_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var LEAD_NAME_selectedList = $('#LEAD_NAME').val();
    var flag = true;
    if(secretLevelValue&&LEAD_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':LEAD_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "公司领导姓名" + result.msg);
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





workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd"){
		return;
	}
	if(operability){
		$("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").show();
	}else{
		$("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").hide();
	}
});

    $("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").css('border','1px solid ')




            $('#DEMOCRACY_END_DATE').datetimepicker({
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
    


                            $('#DEMOCRACY_END_DATE').attr("readonly","readonly").attr("disabled","disabled");
                


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find("[name='fileSecretLevel']").each(function(i,e){
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
                            {extensions:'zip,rar,7z'}
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t"){
        return;
    }

    if (required){
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("required","required");
   }else{
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").removeAttr("required");
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("required");
    var bpmRequire = $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t"){
        return;
    }
    if(operability){
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").show();
    }else{
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").hide();
    }
});


    $('#JW_JOIN').attr("disabled","disabled");            $('#JW_JOIN').on('change',function(e){
            if(e.currentTarget.value ==="Y"){
 $('#JW_NAMEName').parent().css('cursor',"");
 $('#JW_NAMEName').removeAttr('disabled')
}else{
 $('#JW_NAMEName').parent().css('cursor',"not-allowed");
 $('#JW_NAMEName').attr('disabled',"disabled")
}
        });
            $('#JW_NAMEName').parent().css('cursor',"not-allowed")
$('#JW_NAMEName').attr('disabled',"disabled")




$('#JW_NAMEName').on(' focus',function(e){

JW_NAMEClickFun();
this.blur();
});

function JW_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';


var defaultSelectOrgIds = $("#").attr("orgidentity");
var defaultSelectOrgId =pageParams.session.orgIndentity;
if (defaultSelectOrgIds&&defaultSelectOrgIds.indexOf(";")){
defaultSelectOrgId = defaultSelectOrgIds.split(";")[0];
}
if (defaultSelectOrgId==undefined||defaultSelectOrgId==""){defaultSelectOrgId = pageParams.session.orgIndentity;}

var defaultLoadDeptId = "";

        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadDeptId = "40283881641bf84d01641cc2c0fd077e,40283881641bf84d01641cc2bf1a0764";
    }

    



var defaultLoadRoleId = "";

var defaultLoadGroupId = "";
        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadGroupId = "948e83e38e54e848018e601ad9a078df";
    }
    
var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'JW_NAME',textFiled:'JW_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['dept', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#JW_NAMEButton').off('click');




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var JW_NAME_colSecret = $('#');
    var secretLevelValue;
    if(JW_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var JW_NAME_selectedList = $('#JW_NAME').val();
    var flag = true;
    if(secretLevelValue&&JW_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':JW_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "纪检/人力参会人员" + result.msg);
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




    $('#LEAD_YN').attr("disabled","disabled");if ($('#FILE_TYPE').val() == null||$('#FILE_TYPE').val()==''||$('#FILE_TYPE').val()==undefined)
$('#FILE_TYPE').val("2");


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