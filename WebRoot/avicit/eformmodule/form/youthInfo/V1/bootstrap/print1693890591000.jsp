<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,tree,fileupload,noLoading-mask";
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
    青年信息表 
  </div> 
  <table style="" id="Po3Edol4pbcUfnnssJRPFeGi154TIzoo" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="DPET_ONTName" class=" " style=";" id="H6uzowmor5LMXGH49HHL2hdGTVe0VrEG"> <i class="required">*</i>一级部门： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="hidden" class="input-sm" id="DPET_ONT" name="DPET_ONT" title="一级部门" value="<c:out  value='${map["DPET_ONT"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="DPET_ONTName" name="DPET_ONTName" required title="一级部门" value="<c:out  value='${map["DPET_ONTName"]}'/>"> 
       <span class="input-group-addon org-box-act" id="DPET_ONTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right;"><label for="DEPT_IDName" class=" " style=";" id="swyB59uEAktu33EZdTGHSz9Cmi5rpAdt"> <i class="required">*</i>部门名称： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="DEPT_ID" name="DEPT_ID" title="部门名称" maxlength="4000" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="USER_IDName" class=" " style=";" id="fKwTDspJ3HKdCX4n65Jh60XNwtreC0mY"> <i class="required">*</i>姓名： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%;"> 
       <input type="hidden" class="input-sm" id="USER_ID" name="USER_ID" title="姓名" value="<c:out  value='${map["USER_ID"]}'/>"> 
       <input type="text" class="form-control input-sm" style=" " id="USER_IDName" name="USER_IDName" required title="姓名" value="<c:out  value='${map["USER_IDName"]}'/>"> 
       <span class="input-group-addon user-box-act" id="USER_IDButton"> <i class="glyphicon glyphicon-user"></i> </span> 
      </div> </td> 
     <td style="width:6%; text-align: right;"><label for="NEW_DATE" class=" " style=";" id="oATt8YT7m5ArgsD0SddKKoTz1w60hE4x"> <i class="required">*</i>出生日期： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="出生日期" class="form-control date-picker input-sm" style=";" required id="NEW_DATE" name="NEW_DATE" value="${map['NEW_DATE']}" readonly> 
       <span id="NEW_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="SEX" class=" " style=";" id="AyYDysTmDt5g2UXAi7uosA9iCaWngVdR"> <i class="required">*</i>性别： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="SEX" name="SEX" title="性别" initvalue="<c:out  value='${map["SEX"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
     <td style="width:6%; text-align: right;"><label for="NATION" class=" " style=";" id="Z7tE9MUOHSjau3uj4rSjd530benwkxXo"> <i class="required">*</i>民族： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="NATION" name="NATION" title="民族" maxlength="50" value="<c:out  value='${map["NATION"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ID_NUMBER" class=" " style=";" id="Lq67KHnr3YYmjfulmvvnsJa9TpLCAG09"> <i class="required">*</i>身份证号码： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="ID_NUMBER" name="ID_NUMBER" title="身份证号码" maxlength="50" idcard="true" value="<c:out  value='${map["ID_NUMBER"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ORG_ID" class=" " style=";" id="X7XDMRiz3HFL2dPmqwScAXW4PvASllRk"> <i class="required">*</i>岗位名称： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="ORG_ID" name="ORG_ID" title="岗位名称" maxlength="4000" value="<c:out  value='${map["ORG_ID"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="POTICALOA" class=" " style=";" id="YA98a4D9ksKtDC6vlP4ApUo5yb4FHDRR"> <i class="required">*</i>第一学历： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="POTICALOA" name="POTICALOA" title="第一学历" maxlength="50" value="<c:out  value='${map["POTICALOA"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="POTICALOA_END" class=" " style=";" id="NZ5LVP8eSNMkejmTpfGeSIKiC1ckI0jj"> <i class="required">*</i>最高学历： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="POTICALOA_END" name="POTICALOA_END" title="最高学历" maxlength="50" value="<c:out  value='${map["POTICALOA_END"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="STATUS" class=" " style=";" id="wa3Jg5EQTI1M1PJDqtazjwzGwDDTKJOx"> <i class="required">*</i>身份： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="STATUS" name="STATUS" title="身份" maxlength="50" value="<c:out  value='${map["STATUS"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR1" class=" " style=";display:none;" id="ZvtSLIaJAV5jiNfPPsw2mQLYJYda6mX1"> 预留字段1： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR1" name="ATTR1" title="预留字段1" maxlength="50" value="<c:out  value='${map["ATTR1"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR2" class=" " style=";display:none;" id="x7x8kLauzH8El3a3hY6nYTfvX5RxyT2x"> 预留字段2： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR2" name="ATTR2" title="预留字段2" maxlength="50" value="<c:out  value='${map["ATTR2"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR3" class=" " style=";display:none;" id="Fra5eisoPJQ46tLGbp7g0y4w50osplUp"> 预留字段3： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR3" name="ATTR3" title="预留字段3" maxlength="50" value="<c:out  value='${map["ATTR3"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR4" class=" " style=";display:none;" id="ZKvnFnJFpAkGBQ8pgpX5LQC1qKMnH1of"> 预留字段4： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR4" name="ATTR4" title="预留字段4" maxlength="50" value="<c:out  value='${map["ATTR4"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR5" class=" " style=";display:none;" id="mGM8kZPAGswRnfTAkqZcCOaAvKUwDhAz"> 预留字段5： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR5" name="ATTR5" title="预留字段5" maxlength="50" value="<c:out  value='${map["ATTR5"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR6" class=" " style=";display:none;" id="RVW51dzwpV1Hm2s7TH1bIykQrGIBF0aF"> 预留字段6： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR6" name="ATTR6" title="预留字段6" maxlength="50" value="<c:out  value='${map["ATTR6"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR7" class=" " style=";display:none;" id="or4kaXaMBwc9lMxvvsBPDzKT1Y2MB5Xg"> 预留字段7： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR7" name="ATTR7" title="预留字段7" maxlength="50" value="<c:out  value='${map["ATTR7"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR8" class=" " style=";display:none;" id="AKgzQNKpCNwHkWZneNr9VSpQhGhXp93G"> 预留字段8： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR8" name="ATTR8" title="预留字段8" maxlength="50" value="<c:out  value='${map["ATTR8"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR9" class=" " style=";display:none;" id="xV08iwooLV6pdpGKQqYvfM2jILFmuQ8M"> 预留字段9： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR9" name="ATTR9" title="预留字段9" maxlength="50" value="<c:out  value='${map["ATTR9"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR10" class=" " style=";display:none;" id="OBBEeszlk2wA4Dl73VuDTADPl33vU8uW"> 预留字段10： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR10" name="ATTR10" title="预留字段10" maxlength="50" value="<c:out  value='${map["ATTR10"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR11" class=" " style=";display:none;" id="CsZU8qzzlYcZOtx7G8QM79N7i7SIwE3Z"> 预留字段11： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR11" name="ATTR11" title="预留字段11" maxlength="50" value="<c:out  value='${map["ATTR11"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ATTR12" class=" " style=";display:none;" id="GsnMKgaNBDqQoEcSMGAXkYeR9pAeza4e"> 预留字段12： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR12" name="ATTR12" title="预留字段12" maxlength="50" value="<c:out  value='${map["ATTR12"]}'/>"> 
      </div></td> 
     <td style="width:6%; text-align: right;"><label for="ATTR13" class=" " style=";display:none;" id="bpCXx9anIcrDyOkqb86j8ckcFgeNRdaR"> 预留字段13： </label> </td> 
     <td style="width:19%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ATTR13" name="ATTR13" title="预留字段13" maxlength="50" value="<c:out  value='${map["ATTR13"]}'/>"> 
      </div></td> 
    </tr> 
    <tr></tr> 
   </tbody> 
  </table> 
 </div>
 <p><</p>
</div>
    </form>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="avicit/platform6/autocode/js/AutoCode.?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.j?v=${jsversion}"></script>
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
    var formInfoId = "2c908c1d8a62d88d018a6317243d0870";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_YOUTH_INFO";
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
        baseUrl:_eform_base_url,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
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
        




$('#DPET_ONTName').on(' focus',function(e){
    DPET_ONTClickFun();
    $(this).blur();
});

function DPET_ONTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DPET_ONT',textFiled:'DPET_ONTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}













$('#USER_IDName').on(' focus',function(e){

USER_IDClickFun();
this.blur();
});

function USER_IDClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'USER_ID',textFiled:'USER_IDName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var USER_ID_colSecret = $('#');
    var secretLevelValue;
    if(USER_ID_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var USER_ID_selectedList = $('#USER_ID').val();
    var flag = true;
    if(secretLevelValue&&USER_ID_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':USER_ID_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "姓名" + result.msg);
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






            $('#NEW_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#NEW_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#NEW_DATE').datepicker('show');
			 $('#NEW_DATE').datepicker().trigger('click');
					
		});
        

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_SEX"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SEX').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SEX"] != null && pageParams.formData["SEX"] != ''){    $('#SEX').val(pageParams.formData["SEX"]);}else if($('#SEX').attr("initValue")!=undefined&&$.trim($('#SEX').attr("initValue"))!=''){    $('#SEX').val($('#SEX').attr("initValue"));    pageParams.formData["SEX"] = $('#SEX').attr("initValue");}else{    }}});








































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