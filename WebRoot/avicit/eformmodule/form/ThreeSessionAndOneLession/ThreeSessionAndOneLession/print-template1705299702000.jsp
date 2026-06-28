
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,noLoading-mask";
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
    <link rel="stylesheet" type="text/css" href="static/h5/kindeditor/themes/default/default.css" />
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/print.css"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css">
    <link rel="stylesheet" type="text/css" href="avicit/platform6/formprint/printdesign/css/tinymce-content/default.css"/>
</head>

    <form id='form' onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}">
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   三会一课 
 </div>
 <table style=" border: 1px solid;" id="qxhsLgWAnXcNmocs4zVIK06bjvNozHK2" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="REQUEST_USER"><i class="required" style="color: red;">*</i>申请人：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="REQUEST_USER" name="REQUEST_USER" style="" class="form-control" readonly rows="1" title="申请人" data-precision="">${map["REQUEST_USER"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="PARTY_NAME"><i class="required" style="color: red;">*</i>申请人所在党支部：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="PARTY_NAME" name="PARTY_NAME" style="" class="form-control" readonly rows="1" title="申请人所在党支部" data-precision="">${map["PARTY_NAME"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_NAME" id="F5rDwoZIMzYKmfDGg6N60k8M6NS70pFV"><i class="required" style="color: red;">*</i>会议名称：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="MEET_NAME" name="MEET_NAME" style="" class="form-control" readonly rows="1" title="会议名称：" data-precision="">${map["MEET_NAME"]}</textarea> 
     </div> </td> 
    <td style="border: 1px solid; width:19%; text-align: right;"><label for="AUTO_CODE"><i class="required" style="color: red;">*</i>表单编号：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="AUTO_CODE" name="AUTO_CODE" style="" class="form-control" readonly rows="1" title="自动编号" data-precision="">${map["AUTO_CODE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_TYPE"><i class="required" style="color: red;">*</i>会议类型：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="MEET_TYPE" name="MEET_TYPE" style="" class="form-control" readonly rows="1" title="会议类型" data-precision="">${map["MEET_TYPE"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="SECRET_LEVEL"><i class="required" style="color: red;">*</i>密级：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="SECRET_LEVEL" name="SECRET_LEVEL" style="" class="form-control" readonly rows="1" title="密级" data-precision="">${map["SECRET_LEVEL"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_DATE">会议日期：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="MEET_DATE" name="MEET_DATE" style="" class="form-control" readonly rows="1" title="会议日期" data-precision="">${map["MEET_DATE"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="MEET_PLACE"><i class="required" style="color: red;">*</i>会议地点：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="MEET_PLACE" name="MEET_PLACE" style="" class="form-control" readonly rows="1" title="会议地点" data-precision="">${map["MEET_PLACE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="JOIN_ORG">参会组织名称：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class=""> 
      <textarea id="JOIN_ORG" name="JOIN_ORG" style="" class="form-control" readonly rows="1" title="参会组织名称N" data-precision="">${map["JOIN_ORG"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="JOIN_PEOPLE_NEW">参会人员：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class=""> 
      <textarea id="JOIN_PEOPLE_NEW" name="JOIN_PEOPLE_NEW" style="" class="form-control" readonly rows="1" title="参会人员" data-precision="">${map["JOIN_PEOPLE_NEW"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_OUTLINE">会议提纲：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class=""> 
      <textarea id="MEET_OUTLINE" name="MEET_OUTLINE" style="" class="form-control" readonly rows="5" title="会议提纲" data-precision="">${map["MEET_OUTLINE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="HOURS_RECORD_YN"><i class="required" style="color: red;">*</i>是否记录培训学时：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="HOURS_RECORD_YN" name="HOURS_RECORD_YN" style="" class="form-control" readonly rows="1" title="是否记录培训学时" data-precision="">${map["HOURS_RECORD_YN"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for=""></label><label for="LEARN_HOURS">学时：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="LEARN_HOURS" name="LEARN_HOURS" style="" class="form-control" readonly rows="1" title="学时" data-precision="1">${map["LEARN_HOURS"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_THEME">会议主题：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class=""> 
      <textarea id="MEET_THEME" name="MEET_THEME" style="" class="form-control" readonly rows="2" title="会议主题" data-precision="">${map["MEET_THEME"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="DUE_PEOPLE_NUM">应到人数：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="DUE_PEOPLE_NUM" name="DUE_PEOPLE_NUM" style="" class="form-control" readonly rows="1" title="应到人数" data-precision="0">${map["DUE_PEOPLE_NUM"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="ACTUAL_PEOPLE_NUM">实到人数：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="ACTUAL_PEOPLE_NUM" name="ACTUAL_PEOPLE_NUM" style="" class="form-control" readonly rows="1" title="实到人数" data-precision="0">${map["ACTUAL_PEOPLE_NUM"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="LEAVE_PEOPLE_NUM">请假人数：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="LEAVE_PEOPLE_NUM" name="LEAVE_PEOPLE_NUM" style="" class="form-control" readonly rows="1" title="请假人数" data-precision="0">${map["LEAVE_PEOPLE_NUM"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="JOIN_MEET_RATE">参会率：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="JOIN_MEET_RATE" name="JOIN_MEET_RATE" style="" class="form-control" readonly rows="1" title="参会率" data-precision="2">${map["JOIN_MEET_RATE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="LEAVE_PEOPLE">请假人员名单：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="LEAVEL_PEOPLE" name="LEAVEL_PEOPLE" style="" class="form-control" readonly rows="1" title="请假人员名单" data-precision="">${map["LEAVEL_PEOPLE"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><span face="微软雅黑" style="font-family: 微软雅黑;"><span style="font-size: 13px; line-height: 18.5714px;"></span></span></td> 
    <td style="border: 1px solid; width:31%;"><span face="微软雅黑" style="font-family: 微软雅黑;"><span style="font-size: 13px; line-height: 18.5714px;"></span></span></td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="SPEAKER_OUT_YN"><i class="required" style="color: red;">*</i>主讲人是否为外来人员：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="SPEAKER_OUT_YN" name="SPEAKER_OUT_YN" style="" class="form-control" readonly rows="1" title="主讲人是否为外来人员" data-precision="">${map["SPEAKER_OUT_YN"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="SPEAKER">主讲人：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="SPEAKER" name="SPEAKER" style="" class="form-control" readonly rows="1" title="主讲人" data-precision="">${map["SPEAKER"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="LECTURER_OUT_YN"><i class="required" style="color: red;">*</i>授课人是否为外来人员：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="LECTURER_OUT_YN" name="LECTURER_OUT_YN" style="" class="form-control" readonly rows="1" title="授课人是否为外来人员：" data-precision="">${map["LECTURER_OUT_YN"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="LECTURER">授课人：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="LECTURER" name="LECTURER" style="" class="form-control" readonly rows="1" title="授课人" data-precision="">${map["LECTURER"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="HOST_TAKER_OUT_YN"><i class="required" style="color: red;">*</i>主持人是否为外来人员：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="HOST_TAKER_OUT_YN" name="HOST_TAKER_OUT_YN" style="" class="form-control" readonly rows="1" title="主持人是否为外来人员：" data-precision="">${map["HOST_TAKER_OUT_YN"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="HOST_TAKER">主持人：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="HOST_TAKER" name="HOST_TAKER" style="" class="form-control" readonly rows="1" title="主持人" data-precision="">${map["HOST_TAKER"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="NOTE_TAKER_OUT_YN"><i class="required" style="color: red;">*</i>记录人是否为外来人员：</label></td> 
    <td style="border: 1px solid; width:28%;"> 
     <div class=""> 
      <textarea id="NOTE_TAKER_OUT_YN" name="NOTE_TAKER_OUT_YN" style="" class="form-control" readonly rows="1" title="记录人是否为外来人员：" data-precision="">${map["NOTE_TAKER_OUT_YN"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; width:19%;"><label for="NOTE_TAKER">记录人：</label></td> 
    <td style="border: 1px solid; width:31%;"> 
     <div class=""> 
      <textarea id="NOTE_TAKER" name="NOTE_TAKER" style="" class="form-control" readonly rows="1" title="记录人" data-precision="">${map["NOTE_TAKER"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="MEET_RESULT">会议结果：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class=""> 
      <textarea id="MEET_RESULT" name="MEET_RESULT" style="" class="form-control" readonly rows="2" title="会议结果" data-precision="">${map["MEET_RESULT"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="REMARKS">备注：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"> 
     <div class=""> 
      <textarea id="REMARKS" name="REMARKS" style="" class="form-control" readonly rows="2" title="备注" data-precision="">${map["REMARKS"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="text-align: right; border: 1px solid; width:21%;"><label for="">附件：</label></td> 
    <td style="border: 1px solid; width:79%;" colspan="3"></td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class=""> 
  <div id="PARTY_ID" name="PARTY_ID" style=";height: auto;" class="form-control" readonly rows="1" title="党支部ID" data-precision="">
    ${map["PARTY_ID"]} 
  </div> 
 </div> 
 <p></p>
 <p> </p>
 <div class=""> 
  <div id="PARTY_NAME_NEW" name="PARTY_NAME_NEW" style=";height: auto;" class="form-control" readonly rows="1" title="参会人员党支部" data-precision="">
    ${map["PARTY_NAME_NEW"]} 
  </div> 
 </div> 
 <p></p>
</div>
    </form>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js"></script>
<script src="static/js/platform/eform/common.js"></script>
<script src="avicit/platform6/autocode/js/AutoCode.js"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js"></script>
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
    // 这个值有效 表单的id
    var formInfoId = "${formInfoId}";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = "${entryId}";
    // 数据库名称
    var tableName = "";
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

    // 控制数字精度
    function formatNum(number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? '' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (sep != '' && s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

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
        version: "${version}" // 没有处理
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
        // 这里放控件生成的js
        









    $.ajax({
        url : 'platform/eform/plugin/getSecretBox',
        type : 'post',
        dataType : 'json',
        success : function(result) {
            for (var i =0;i<result.lookup.length;i++){
                if(result.lookup[i].lookupCode === $("#SECRET_LEVEL").val()){
                    $('#SECRET_LEVEL').val(result.lookup[i].lookupName);
                    return;
                }
            }
        }
    });


        $('#MEET_DATE').val($('#MEET_DATE').val().split(' ')[0]);
    











            $('#HOURS_RECORD_YN').on('change',function(e){
            if($(this).val() == '0'){
 	$('#LEARN_HOURS').val('');
 	$('#LEARN_HOURS').attr("disabled","disabled");

 
 }
if($(this).val() == '1' ){
 	$('#LEARN_HOURS').val('');
 	$('#LEARN_HOURS').removeAttr("disabled");

 }		
        });
                $('#LEARN_HOURS').val(formatNum($('#LEARN_HOURS').val(), 1));
    



        $('#DUE_PEOPLE_NUM').val(formatNum($('#DUE_PEOPLE_NUM').val(), 0));
    

        $('#ACTUAL_PEOPLE_NUM').val(formatNum($('#ACTUAL_PEOPLE_NUM').val(), 0));
    

            $('#ACTUAL_PEOPLE_NUM').on('change',function(e){
            var duePeopleNum = parseInt($("#DUE_PEOPLE_NUM").val());

var actualPeopleNum = parseInt(this.value);
if(actualPeopleNum > duePeopleNum){
 
 layer.msg("实到人数应小于等于应到人数");
 this.value = "";
 
 return false;
 }

        });
                $('#LEAVE_PEOPLE_NUM').val(formatNum($('#LEAVE_PEOPLE_NUM').val(), 0));
    

        $('#JOIN_MEET_RATE').val(formatNum($('#JOIN_MEET_RATE').val(), 2));
    

            $('#JOIN_MEET_RATE').on('change',function(e){
            

        });
        



            $('#SPEAKER_OUT_YN').on('change',function(e){
            if($(this).val() == '0'){
 	$('#SPEAKER').val('');
	$('#SPEAKER').on('focus',function(e){
	SPEAKERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#SPEAKER').val('');

	$('#SPEAKER').off('focus');
 this.blur();

 }		
        });
        



            $('#LECTURER_OUT_YN').on('change',function(e){
            if($(this).val() == '0'){
 	$('#LECTURER').val('');
	$('#LECTURER').on('focus',function(e){
	LECTURERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#LECTURER').val('');

	$('#LECTURER').off('focus');
 this.blur();

 }
        });
        



            $('#HOST_TAKER_OUT_YN').on('change',function(e){
            if($(this).val() == '0'){
 	$('#HOST_TAKER').val('');
	$('#HOST_TAKER').on('focus',function(e){
	HOST_TAKERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#HOST_TAKER').val('');

	$('#HOST_TAKER').off('focus');
 this.blur();

 }
        });
        



            $('#NOTE_TAKER_OUT_YN').on('change',function(e){
            if($(this).val() == '0'){
 	$('#NOTE_TAKER').val('');
	$('#NOTE_TAKER').on('focus',function(e){
	NOTE_TAKERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#NOTE_TAKER').val('');

	$('#NOTE_TAKER').off('focus');
 this.blur();

 }
        });
        







    
if(!pageParams.urlParam.id){
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
}






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

        $("input[type='hidden']").remove();
        // $("span").remove();
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
<script>
    // 自适应调整显示高度
    $(function () {
        $('textarea').each(function () {
            this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
        }).on('input', function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
</script>
</html>