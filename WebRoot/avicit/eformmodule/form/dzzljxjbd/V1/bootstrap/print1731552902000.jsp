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
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党组织基本情况&nbsp;&nbsp; 
 </div>
 <table style="" id="iqD1D8sArRT6EsOgySJ54bvDnMnDHLTQ" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:10%;"><label for="PARTY_CODE" class=" " style=";" id="RZO77nsd7auuV6j3JdYIYfiYZSjfSrCd"> 党组织编号： </label> </td> 
    <td style="width:15%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="PARTY_CODE" name="PARTY_CODE" title="党组织编号" maxlength="50" value="<c:out  value='${map["PARTY_CODE"]}'/>"> 
     </div></td> 
    <td style="width:11%;"><label for="PARTY_NAME" class=" " style=";" id="blUvk3rDp8CiRNvqo2Sp92BsopajmukK"> 党组织名称： </label> </td> 
    <td style="width:15%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="PARTY_NAME" name="PARTY_NAME" title="党组织名称" maxlength="50" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
     </div></td> 
    <td style="width:9%;"><label for="ATTRIBUTE_01" class=" " style=";" id="ATTRIBUTE_01EformLabel"> 党组织类型： </label> </td> 
    <td style="width:13%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " readonly id="ATTRIBUTE_01" name="ATTRIBUTE_01" title="党组织类型" initvalue="<c:out  value='${map["ATTRIBUTE_01"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%;"><label for="ATTRIBUTE_02" class=" " style=";" id="X85lBtCMuKlMqndpxwYrJkqCvfcXxnJZ"> 关联部门： </label> </td> 
    <td style="width:16%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="ATTRIBUTE_02" name="ATTRIBUTE_02" title="关联部门id" value="<c:out  value='${map["ATTRIBUTE_02"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="ATTRIBUTE_02Name" name="ATTRIBUTE_02Name" disabled title="关联部门id" value="<c:out  value='${map["ATTRIBUTE_02Name"]}'/>"> 
      <span class="input-group-addon org-box-act" id="ATTRIBUTE_02Button"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="width:10%;"><label for="partyPostYycount" class=" " style=";" id="partyPostYycountEformLabel"> 应有组织委员数： </label> </td> 
    <td style="width:15%;"> 
     <div class="input-group-sm bpm_self_class " id="partyPostYycount" title="应有组织委员数："> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
    <td style="width:11%;"><label for="partyPostCount" class=" " style=";" id="partyPostCountEformLabel"> 实际党组织委员人数: </label> </td> 
    <td style="width:15%;"> 
     <div class="input-group-sm bpm_self_class " id="partyPostCount" title="实际党组织委员人数:"> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
    <td style="width:9%;"><label for="partySjZj" class=" " style=";" id="partySjZjEformLabel"> 党组织书记专兼职: </label> </td> 
    <td style="width:13%;"> 
     <div class="input-group-sm bpm_self_class " id="partySjZj" title=""> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
    <td style="width:6%;"></td> 
    <td style="width:16%;"></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:10%;"><label for="jwsjname" class=" " style=";" id="jwsjnameEformLabel"> 纪委名称: </label> </td> 
    <td style="width:15%;"> 
     <div class="input-group-sm bpm_self_class " id="jwsjname" title="纪委名称:"> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
    <td style="width:11%;"><label for="jwwyrs" class=" " style=";" id="jwwyrsEformLabel"> 纪委委员人数: </label> </td> 
    <td style="width:15%;"> 
     <div class="input-group-sm bpm_self_class " id="jwwyrs" title="纪委委员人数:"> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
    <td style="width:9%;"><label for="partyOrgCount" class=" " style=";" id="partyOrgCountEformLabel"> 党小组数量: </label> </td> 
    <td style="width:13%;"> 
     <div class="input-group-sm bpm_self_class " id="partyOrgCount" title=""> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
    <td style="width:6%;"><label for="party_count" class=" " style=";" id="party_countEformLabel"> 党员人数: </label> </td> 
    <td style="width:16%;"> 
     <div class="input-group-sm bpm_self_class " id="party_count" title=""> 
      <input type="text" class="form-control input-sm" style="" readonly> 
     </div></td> 
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
    var formInfoId = "2c908c1d8d52d54a018d531b18f60d3c";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "PARTY_ORGANIZATION";
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
        





    $('#ATTRIBUTE_01').attr("disabled","disabled");$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#ATTRIBUTE_01').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["ATTRIBUTE_01"] != null && pageParams.formData["ATTRIBUTE_01"] != ''){    $('#ATTRIBUTE_01').val(pageParams.formData["ATTRIBUTE_01"]);}else if($('#ATTRIBUTE_01').attr("initValue")!=undefined&&$.trim($('#ATTRIBUTE_01').attr("initValue"))!=''){    $('#ATTRIBUTE_01').val($('#ATTRIBUTE_01').attr("initValue"));    pageParams.formData["ATTRIBUTE_01"] = $('#ATTRIBUTE_01').attr("initValue");}else{    }}});




$('#ATTRIBUTE_02Name').on(' focus',function(e){
    ATTRIBUTE_02ClickFun();
    $(this).blur();
});

function ATTRIBUTE_02ClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'ATTRIBUTE_02',textFiled:'ATTRIBUTE_02Name',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#ATTRIBUTE_02Button').off('click');






    $(document).ready(function(){
var orgId = parent.window.treeObj.getSelectedNodes()[0].id;
$.ajax({
url:"avicit/pb/organize/partyOrganization/partyOrganizationController/deiatl/"+orgId+".json",
type:"GET",
dataType:"JSON",
success:function(item){
$("#party_count input").val(item.PARTY_COUNT);
$("#partyPostYycount input").val(item.partyPostYycount); 
$("#partyPostCount input").val(item.partyPostCount); 
$("#jwsjname input").val(item.partyJwName);
$("#jwwyrs input").val(item.partyJwPostCount); 
$("#partyOrgCount input").val(item.partyOrgCount);
$("#partySjZj input").val(item.partyPostNameType); 
}
});
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