
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
   党建活动经费使用审批 
 </div>
 <p></p>
 <table style=" border: 1px solid;" id="lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="REQUEST_DATE" id="iVljgyvRGCBYXMryvRGclM7KYAR93vdZ"><i class="required" style="color: red;">*</i>申请日期：</label></td> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
     <div class=""> 
      <div id="REQUEST_DATE" name="REQUEST_DATE" style=";height: auto;" class="form-control" readonly rows="1" title="申请日期" data-precision="">
        ${map["REQUEST_DATE"]} 
      </div> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="AUTO_CODE" id="Mh7PfCaNXcCGcmApV5umn52LH0LCuiSi"><i class="required" style="color: red;">*</i>表单编号：</label></td> 
    <td style="border: 1px solid; height: 30px; width:29%;"> 
     <div class=""> 
      <textarea id="AUTO_CODE" name="AUTO_CODE" style="" class="form-control" readonly rows="1" title="自动编码" data-precision="">${map["AUTO_CODE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="USER_NAME" id="JYVuJt4HPGEHezEnXj1DdKPNmcR7WdrN"><i class="required" style="color: red;">*</i>申请人：</label></td> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
     <div class=""> 
      <textarea id="USER_NAME" name="USER_NAME" style="" class="form-control" readonly rows="1" title="申请人" data-precision="">${map["USER_NAME"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="DEPT_NAME" id="z8PMk8L1s5NlKdYzwoYgkelugsixoyGN"><i class="required" style="color: red;">*</i>申请单位：</label></td> 
    <td style="border: 1px solid; height: 30px; width:29%;"> 
     <div class=""> 
      <textarea id="DEPT_NAME" name="DEPT_NAME" style="" class="form-control" readonly rows="1" title="申请单位" data-precision="">${map["DEPT_NAME"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="HANDLER" id="qDbBmBgdowQri1JPVj6qe7I4nMwP481H"><i class="required" style="color: red;">*</i>经办人：</label></td> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
     <div class=""> 
      <textarea id="HANDLER" name="HANDLER" style="" class="form-control" readonly rows="1" title="经办人" data-precision="">${map["HANDLER"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="PARTY_NAME" id="fUnqNzVxwxnDKCpLCMdcNXDNCuB9cYJ1"><i class="required" style="color: red;">*</i>党支部：</label></td> 
    <td style="border: 1px solid; height: 30px; width:29%;"> 
     <div class=""> 
      <textarea id="PARTY_NAME" name="PARTY_NAME" style="" class="form-control" readonly rows="1" title="党支部" data-precision="">${map["PARTY_NAME"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:15%;"><label for="PARTY_MEMBER_NUM" id="pWPk1oYVrKyFq6B0UhqvHIJTkx23Q9KJ"><i class="required" style="color: red;">*</i>党员总人数：</label></td> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:36%;"> 
     <div class=""> 
      <textarea id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM" style="" class="form-control" readonly rows="1" title="党员总人数" data-precision="0">${map["PARTY_MEMBER_NUM"]}</textarea> 
     </div> </td> 
    <td style="text-align: right; border: 1px solid; height: 30px; width:29%;"><label for="TOTAL_PRICE"><i class="required" style="color: red;">*</i>总计金额：</label></td> 
    <td style="border: 1px solid; height: 30px; width:29%;"> 
     <div class=""> 
      <textarea id="TOTAL_PRICE" name="TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="总计金额" data-precision="2">${map["TOTAL_PRICE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:15%;"><label for="">类别：</label></td> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:94%;" colspan="3"> 
     <div class=""> 
      <textarea id="selType" name="SEL_TYPE" style="" class="form-control" readonly rows="1" title="类型选择" data-precision="">${map["SEL_TYPE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:15%;"><label for="">学习资料：</label></td> 
    <td style="padding:0;text-align: left; border: 1px solid; height: 30px; width:94%;" colspan="3"> 
     <table style="margin:0;width:100%;" id="xcWT6jiCrcPz4uJoLITxslfpOYUyeJfP" height="61" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:25%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_XXZL1" id="DYN_PA_XXZL1_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_XXZL1" class="datatable" datapermission="eform_data_DYN_PA_XXZL1"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:12%;"><label for="XXZL_TOTAL_PRICE">学习资料总计金额：</label></td> 
        <td style="width:12%;"> 
         <div class=""> 
          <textarea id="XXZL_TOTAL_PRICE" name="XXZL_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="学习资料总计金额" data-precision="2">${map["XXZL_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="text-align: left; border: 1px solid; height: 30px; width:15%;"><label for="">场地费：</label></td> 
    <td style="padding:0;text-align: left; border: 1px solid; height: 30px; width:94%;" colspan="3"> 
     <table style="margin:0;width:100%;" id="CC2DP3WU0fZnmummvp36uss9R1cBJExT" height="93" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:100%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_CD" id="DYN_PA_CD_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_CD" class="datatable" datapermission="eform_data_DYN_PA_CD"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:50%;"><label for="CD_TOTAL_PRICE">场地费总计金额：</label></td> 
        <td style="width:50%;"> 
         <div class=""> 
          <textarea id="CD_TOTAL_PRICE" name="CD_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="场地费总计金额" data-precision="2">${map["CD_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 84px;"> 
    <td style="text-align: left; border: 1px solid; height: 84px; width:15%;"><label for="">工本费：</label></td> 
    <td style="padding:0;text-align: left; border: 1px solid; height: 84px; width:94%;" colspan="3"> 
     <table style="margin:0;width:100%;" id="O3d8Fdz7JYcAJG5sqsCFXFi18dYFnyzM" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:33%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_GB" id="DYN_PA_GB_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_GB" class="datatable" datapermission="eform_data_DYN_PA_GB"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:17%;"><label for="GB_TOTAL_PRICE">工本费总计金额：</label></td> 
        <td style="width:17%;"> 
         <div class=""> 
          <textarea id="GB_TOTAL_PRICE" name="GB_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="工本费总计金额" data-precision="2">${map["GB_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 57px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 87px;"><label for="">设备费用：</label></td> 
    <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 57px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="b01jMVwEDADOC4DMuLzj9D9aeAqwQjwK" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:33%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_SB" id="DYN_PA_SB_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_SB" class="datatable" datapermission="eform_data_DYN_PA_SB"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:16%;"><label for="SB_TOTAL_PRICE">设备费用总金额：</label></td> 
        <td style="width:17%;"> 
         <div class=""> 
          <textarea id="SB_TOTAL_PRICE" name="SB_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="设备费用总金额" data-precision="2">${map["SB_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 86px;"><label for="">党徽、党旗：</label></td> 
    <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="qwDUhdnJCbU1gsSZulAzSGr0WUne2MWq" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:33%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_DHDQ" id="DYN_PA_DHDQ_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_DHDQ" class="datatable" datapermission="eform_data_DYN_PA_DHDQ"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:16%;"><label for="DHDQ_TOTAL_PRICE">党徽党旗总计金额：</label></td> 
        <td style="width:17%;"> 
         <div class=""> 
          <textarea id="DHDQ_TOTAL_PRICE" name="DHDQ_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="党徽党旗总计金额" data-precision="2">${map["DHDQ_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 57px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 87px;"><label for="">门票/讲解：</label></td> 
    <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 57px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="hNPqj2tnyobCuQrBA8JBTEXDquxr2MbQ" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:50%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_MPJJ" id="DYN_PA_MPJJ_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_MPJJ" class="datatable" datapermission="eform_data_DYN_PA_MPJJ"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:25%;"><label for="MPJJ_TOTAL_PRICE">门票讲解总计金额：</label></td> 
        <td style="width:25%;"> 
         <div class=""> 
          <textarea id="MPJJ_TOTAL_PRICE" name="MPJJ_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="门票讲解总计金额" data-precision="2">${map["MPJJ_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 56px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 86px;"><label for="">困难党员：</label></td> 
    <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 56px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="AGF88wmOlGsGs95ylNXSZK6bjijibPns" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:50%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_KNDY" id="DYN_PA_KNDY_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_KNDY" class="datatable" datapermission="eform_data_DYN_PA_KNDY"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:25%;"><label for="KNDY_TOTAL_PRICE">困难党员总计金额：</label></td> 
        <td style="width:25%;"> 
         <div class=""> 
          <textarea id="KNDY_TOTAL_PRICE" name="KNDY_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="困难党员总计金额" data-precision="2">${map["KNDY_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><label for="">表彰：</label></td> 
    <td style="padding:0;width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <table style="margin:0;width:100%;" id="lKFqH8tYWN6osxn4YDYKWAvYiCdBO0b7" class="form_commonTable1"> 
      <tbody> 
       <tr> 
        <td style="width:50%;" colspan="2"> 
         <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
          <tbody> 
           <tr> 
            <td> 
             <div title="DYN_PA_BZ" id="DYN_PA_BZ_control" class="eform_subtable_bpm_auth"> 
              <table id="DYN_PA_BZ" class="datatable" datapermission="eform_data_DYN_PA_BZ"></table> 
             </div> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
       <tr> 
        <td style="width:25%;"><label for="BZ_TOTAL_PRICE">表彰总计金额：</label></td> 
        <td style="width:25%;"> 
         <div class=""> 
          <textarea id="BZ_TOTAL_PRICE" name="BZ_TOTAL_PRICE" style="" class="form-control" readonly rows="1" title="表彰总计金额" data-precision="2">${map["BZ_TOTAL_PRICE"]}</textarea> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><b>党支部审批：</b></td> 
    <td style="width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <div id="musLjfmNwt0fALvOiKwrRc8ZOTFewukm" class="bpm_self_class " title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><b>党委（总支）审批：</b></td> 
    <td style="width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <div id="Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB" class="bpm_self_class " title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><b>党建工作室审批：</b></td> 
    <td style="width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <div id="BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId" class="bpm_self_class " title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><b>党群工作部审批：</b></td> 
    <td style="width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <div id="z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB" class="bpm_self_class " title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><b>拟稿人确认：</b></td> 
    <td style="width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <div id="Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO" class="bpm_self_class " title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 58px;"> 
    <td style="width:15%; text-align: left; border: 1px solid; height: 88px;"><b>党建工作室报销审核：</b></td> 
    <td style="width:94%; text-align: left; border: 1px solid; height: 58px;" colspan="3"> 
     <div id="hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf" class="bpm_self_class " title=""> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p></p>
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
        

    var pr = window.print;
window.print = function (){};










        $('#PARTY_MEMBER_NUM').val(formatNum($('#PARTY_MEMBER_NUM').val(), 0));
    

            var valTOTAL_PRICE = formatNum($('#TOTAL_PRICE').val(), 2);
        $('#TOTAL_PRICE').val('￥' +  valTOTAL_PRICE);




var dataGridColModel_DYN_PA_XXZL1 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'XXZL1_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'XXZL1_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){XXZL1_TOTAL_PRICECalculate(e,'XXZL1_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'XXZL1_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){XXZL1_TOTAL_PRICECalculate(e,'XXZL1_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'XXZL1_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_XXZL1UpdateColSata = function() {
        				        
        				        
        				                if($('#XXZL_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_XXZL1').jqGrid('getCol','XXZL1_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#XXZL_TOTAL_PRICE').val(sum.toFixed(parseInt($('#XXZL_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_XXZL1_comid == null || window.DYN_PA_XXZL1_comid == undefined || window.DYN_PA_XXZL1_comid == '') {
	window.DYN_PA_XXZL1_comid = id;
}
$('#DYN_PA_XXZL1').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_XXZL1',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_XXZL1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_XXZL1,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                    gridComplete:DYN_PA_XXZL1UpdateColSata,
    afterSaveCell:DYN_PA_XXZL1UpdateColSata,
				forceFit:false
});



                    

    	function XXZL1_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_XXZL1').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_XXZL1').jqGrid("getRowData", rowid);
				var XXZL1_NUM = Number(rowdata["XXZL1_NUM"]);
				var XXZL1_UNION_PRICE = Number(rowdata["XXZL1_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = XXZL1_NUM*XXZL1_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_XXZL1').jqGrid("setCell",rowid,"XXZL1_TOTAL_PRICE",calculateValue);
	}
                    
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_XXZL1 = 0;
var newRowStart_DYN_PA_XXZL1 = "new_row";




$('#DYN_PA_XXZL1').setGridWidth(700);
$('#DYN_PA_XXZL1').jqGrid('resizeGrid');


            var valXXZL_TOTAL_PRICE = formatNum($('#XXZL_TOTAL_PRICE').val(), 2);
        $('#XXZL_TOTAL_PRICE').val('￥' +  valXXZL_TOTAL_PRICE);


var dataGridColModel_DYN_PA_CD =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'地点', name: 'CD_PLACE', width:20, editable : false,
         		  		  	  	}
                       ,{ label:'活动名称', name: 'CD_ACTIVITY_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'金额', name:'CD_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_CDUpdateColSata = function() {
            				                if($('#CD_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_CD').jqGrid('getCol','CD_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#CD_TOTAL_PRICE').val(sum.toFixed(parseInt($('#CD_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_CD_comid == null || window.DYN_PA_CD_comid == undefined || window.DYN_PA_CD_comid == '') {
	window.DYN_PA_CD_comid = id;
}
$('#DYN_PA_CD').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_CD',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_CD_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_CD,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                        gridComplete:DYN_PA_CDUpdateColSata,
    afterSaveCell:DYN_PA_CDUpdateColSata,
				forceFit:false
});



                

                
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_CD = 0;
var newRowStart_DYN_PA_CD = "new_row";




$('#DYN_PA_CD').setGridWidth(700);
$('#DYN_PA_CD').jqGrid('resizeGrid');


            var valCD_TOTAL_PRICE = formatNum($('#CD_TOTAL_PRICE').val(), 2);
        $('#CD_TOTAL_PRICE').val('￥' +  valCD_TOTAL_PRICE);


var dataGridColModel_DYN_PA_GB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'资料名称', name: 'GB_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'GB_NUMM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){GB_TOTAL_PRICECalculate(e,'GB_NUMM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'GB_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){GB_TOTAL_PRICECalculate(e,'GB_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'GB_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_GBUpdateColSata = function() {
        				        
        				        
        				                if($('#GB_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_GB').jqGrid('getCol','GB_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#GB_TOTAL_PRICE').val(sum.toFixed(parseInt($('#GB_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_GB_comid == null || window.DYN_PA_GB_comid == undefined || window.DYN_PA_GB_comid == '') {
	window.DYN_PA_GB_comid = id;
}
$('#DYN_PA_GB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_GB',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_GB_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_GB,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                    gridComplete:DYN_PA_GBUpdateColSata,
    afterSaveCell:DYN_PA_GBUpdateColSata,
				forceFit:false
});



                    

                    	function GB_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_GB').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_GB').jqGrid("getRowData", rowid);
				var GB_NUMM = Number(rowdata["GB_NUMM"]);
				var GB_UNION_PRICE = Number(rowdata["GB_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = GB_NUMM*GB_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_GB').jqGrid("setCell",rowid,"GB_TOTAL_PRICE",calculateValue);
	}
    
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_GB = 0;
var newRowStart_DYN_PA_GB = "new_row";




$('#DYN_PA_GB').setGridWidth(700);
$('#DYN_PA_GB').jqGrid('resizeGrid');


            var valGB_TOTAL_PRICE = formatNum($('#GB_TOTAL_PRICE').val(), 2);
        $('#GB_TOTAL_PRICE').val('￥' +  valGB_TOTAL_PRICE);


var dataGridColModel_DYN_PA_SB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'SB_NAME', width:20, editable : false,
         		  		  	  	}
                       ,{ label:'用途', name: 'SB_USE', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'SB_NUM', width:20, editable:false,
	      editrules:{number:true,
		  			minValue:0,	  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){SB_TOTAL_PRICECalculate(e,'SB_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'SB_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){SB_TOTAL_PRICECalculate(e,'SB_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'SB_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_SBUpdateColSata = function() {
            				        
        				        
        				                if($('#SB_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_SB').jqGrid('getCol','SB_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#SB_TOTAL_PRICE').val(sum.toFixed(parseInt($('#SB_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_SB_comid == null || window.DYN_PA_SB_comid == undefined || window.DYN_PA_SB_comid == '') {
	window.DYN_PA_SB_comid = id;
}
$('#DYN_PA_SB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_SB',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_SB_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_SB,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                    
                
                    gridComplete:DYN_PA_SBUpdateColSata,
    afterSaveCell:DYN_PA_SBUpdateColSata,
				forceFit:false
});



                        

                    	function SB_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_SB').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_SB').jqGrid("getRowData", rowid);
				var SB_NUM = Number(rowdata["SB_NUM"]);
				var SB_UNION_PRICE = Number(rowdata["SB_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = SB_NUM*SB_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_SB').jqGrid("setCell",rowid,"SB_TOTAL_PRICE",calculateValue);
	}
        
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_SB = 0;
var newRowStart_DYN_PA_SB = "new_row";




$('#DYN_PA_SB').setGridWidth(700);
$('#DYN_PA_SB').jqGrid('resizeGrid');


            var valSB_TOTAL_PRICE = formatNum($('#SB_TOTAL_PRICE').val(), 2);
        $('#SB_TOTAL_PRICE').val('￥' +  valSB_TOTAL_PRICE);


var dataGridColModel_DYN_PA_DHDQ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'DHDQ_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'DHDQ_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){DHDQ_TOTAL_PRICECalculate(e,'DHDQ_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'DHDQ_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){DHDQ_TOTAL_PRICECalculate(e,'DHDQ_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'DHDQ_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_DHDQUpdateColSata = function() {
        				        
        				        
        				        
        };

if (window.DYN_PA_DHDQ_comid == null || window.DYN_PA_DHDQ_comid == undefined || window.DYN_PA_DHDQ_comid == '') {
	window.DYN_PA_DHDQ_comid = id;
}
$('#DYN_PA_DHDQ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_DHDQ',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_DHDQ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_DHDQ,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                
        	forceFit:false
});



                    

                	function DHDQ_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_DHDQ').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_DHDQ').jqGrid("getRowData", rowid);
				var DHDQ_NUM = Number(rowdata["DHDQ_NUM"]);
				var DHDQ_UNION_PRICE = Number(rowdata["DHDQ_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = DHDQ_NUM*DHDQ_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_DHDQ').jqGrid("setCell",rowid,"DHDQ_TOTAL_PRICE",calculateValue);
	}
        
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_DHDQ = 0;
var newRowStart_DYN_PA_DHDQ = "new_row";




$('#DYN_PA_DHDQ').setGridWidth(700);
$('#DYN_PA_DHDQ').jqGrid('resizeGrid');


            var valDHDQ_TOTAL_PRICE = formatNum($('#DHDQ_TOTAL_PRICE').val(), 2);
        $('#DHDQ_TOTAL_PRICE').val('￥' +  valDHDQ_TOTAL_PRICE);


var dataGridColModel_DYN_PA_MPJJ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'地点', name: 'MPJJ_PLACE', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'金额', name:'MPJJ_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_MPJJUpdateColSata = function() {
        				                if($('#MPJJ_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_MPJJ').jqGrid('getCol','MPJJ_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#MPJJ_TOTAL_PRICE').val(sum.toFixed(parseInt($('#MPJJ_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_MPJJ_comid == null || window.DYN_PA_MPJJ_comid == undefined || window.DYN_PA_MPJJ_comid == '') {
	window.DYN_PA_MPJJ_comid = id;
}
$('#DYN_PA_MPJJ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_MPJJ',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_MPJJ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_MPJJ,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                    gridComplete:DYN_PA_MPJJUpdateColSata,
    afterSaveCell:DYN_PA_MPJJUpdateColSata,
				forceFit:false
});



            

            
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_MPJJ = 0;
var newRowStart_DYN_PA_MPJJ = "new_row";




$('#DYN_PA_MPJJ').setGridWidth(700);
$('#DYN_PA_MPJJ').jqGrid('resizeGrid');


            var valMPJJ_TOTAL_PRICE = formatNum($('#MPJJ_TOTAL_PRICE').val(), 2);
        $('#MPJJ_TOTAL_PRICE').val('￥' +  valMPJJ_TOTAL_PRICE);


var dataGridColModel_DYN_PA_KNDY =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'姓名', name: 'KNDY_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'金额', name:'KNDY_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_KNDYUpdateColSata = function() {
        				                if($('#KNDY_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_KNDY').jqGrid('getCol','KNDY_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#KNDY_TOTAL_PRICE').val(sum.toFixed(parseInt($('#KNDY_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_KNDY_comid == null || window.DYN_PA_KNDY_comid == undefined || window.DYN_PA_KNDY_comid == '') {
	window.DYN_PA_KNDY_comid = id;
}
$('#DYN_PA_KNDY').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_KNDY',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_KNDY_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_KNDY,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                    gridComplete:DYN_PA_KNDYUpdateColSata,
    afterSaveCell:DYN_PA_KNDYUpdateColSata,
				forceFit:false
});



            

            
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_KNDY = 0;
var newRowStart_DYN_PA_KNDY = "new_row";




$('#DYN_PA_KNDY').setGridWidth(700);
$('#DYN_PA_KNDY').jqGrid('resizeGrid');


            var valKNDY_TOTAL_PRICE = formatNum($('#KNDY_TOTAL_PRICE').val(), 2);
        $('#KNDY_TOTAL_PRICE').val('￥' +  valKNDY_TOTAL_PRICE);


var dataGridColModel_DYN_PA_BZ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'BZ_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'人数', name:'BZ_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){BZ_TOTAL_PRICECalculate(e,'BZ_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'BZ_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){BZ_TOTAL_PRICECalculate(e,'BZ_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'BZ_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PA_BZUpdateColSata = function() {
        				        
        				        
        				                if($('#BZ_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_BZ').jqGrid('getCol','BZ_TOTAL_PRICE',false,'sum');
        	var sum = sum? sum :0;
			$('#BZ_TOTAL_PRICE').val(sum.toFixed(parseInt($('#BZ_TOTAL_PRICE').attr('data-precision')))).trigger("change");
        }
        
        };

if (window.DYN_PA_BZ_comid == null || window.DYN_PA_BZ_comid == undefined || window.DYN_PA_BZ_comid == '') {
	window.DYN_PA_BZ_comid = id;
}
$('#DYN_PA_BZ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_BZ',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PA_BZ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PA_BZ,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                    gridComplete:DYN_PA_BZUpdateColSata,
    afterSaveCell:DYN_PA_BZUpdateColSata,
				forceFit:false
});



                    

    	function BZ_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_BZ').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_BZ').jqGrid("getRowData", rowid);
				var BZ_NUM = Number(rowdata["BZ_NUM"]);
				var BZ_UNION_PRICE = Number(rowdata["BZ_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = BZ_NUM*BZ_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_BZ').jqGrid("setCell",rowid,"BZ_TOTAL_PRICE",calculateValue);
	}
                    
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_BZ = 0;
var newRowStart_DYN_PA_BZ = "new_row";




$('#DYN_PA_BZ').setGridWidth(700);
$('#DYN_PA_BZ').jqGrid('resizeGrid');


            var valBZ_TOTAL_PRICE = formatNum($('#BZ_TOTAL_PRICE').val(), 2);
        $('#BZ_TOTAL_PRICE').val('￥' +  valBZ_TOTAL_PRICE);


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '402811817f19a849017f1f45e13120b2-1@DZBSP',
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#musLjfmNwt0fALvOiKwrRc8ZOTFewukm').html(result.html);
                    jQuery("#musLjfmNwt0fALvOiKwrRc8ZOTFewukm").css({});
                    jQuery("label[for='musLjfmNwt0fALvOiKwrRc8ZOTFewukm']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "musLjfmNwt0fALvOiKwrRc8ZOTFewukm"){
            return true;
        }
        if(!operability){
            jQuery("#musLjfmNwt0fALvOiKwrRc8ZOTFewukm").css("display","none");
            jQuery("label[for='musLjfmNwt0fALvOiKwrRc8ZOTFewukm']").css("display","none");
        }else{
            jQuery("#musLjfmNwt0fALvOiKwrRc8ZOTFewukm").css("display","block");
            jQuery("label[for='musLjfmNwt0fALvOiKwrRc8ZOTFewukm']").css("display","block");
        }
    
         jQuery("#musLjfmNwt0fALvOiKwrRc8ZOTFewukm").css({});
          jQuery("label[for='musLjfmNwt0fALvOiKwrRc8ZOTFewukm']").css({});
        });
}
if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '402811817f19a849017f1f45e13120b2-1@DWZZSP',
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB').html(result.html);
                    jQuery("#Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB").css({});
                    jQuery("label[for='Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB"){
            return true;
        }
        if(!operability){
            jQuery("#Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB").css("display","none");
            jQuery("label[for='Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB']").css("display","none");
        }else{
            jQuery("#Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB").css("display","block");
            jQuery("label[for='Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB']").css("display","block");
        }
    
         jQuery("#Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB").css({});
          jQuery("label[for='Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB']").css({});
        });
}
if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '402811817f19a849017f1f45e13120b2-1@DJGZSSP',
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId').html(result.html);
                    jQuery("#BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId").css({});
                    jQuery("label[for='BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId"){
            return true;
        }
        if(!operability){
            jQuery("#BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId").css("display","none");
            jQuery("label[for='BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId']").css("display","none");
        }else{
            jQuery("#BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId").css("display","block");
            jQuery("label[for='BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId']").css("display","block");
        }
    
         jQuery("#BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId").css({});
          jQuery("label[for='BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId']").css({});
        });
}
if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '402811817f19a849017f1f45e13120b2-1@DQGZBSP',
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB').html(result.html);
                    jQuery("#z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB").css({});
                    jQuery("label[for='z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB"){
            return true;
        }
        if(!operability){
            jQuery("#z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB").css("display","none");
            jQuery("label[for='z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB']").css("display","none");
        }else{
            jQuery("#z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB").css("display","block");
            jQuery("label[for='z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB']").css("display","block");
        }
    
         jQuery("#z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB").css({});
          jQuery("label[for='z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB']").css({});
        });
}
if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '402811817f19a849017f1f45e13120b2-1@NGRQR',
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO').html(result.html);
                    jQuery("#Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO").css({});
                    jQuery("label[for='Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO"){
            return true;
        }
        if(!operability){
            jQuery("#Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO").css("display","none");
            jQuery("label[for='Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO']").css("display","none");
        }else{
            jQuery("#Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO").css("display","block");
            jQuery("label[for='Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO']").css("display","block");
        }
    
         jQuery("#Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO").css({});
          jQuery("label[for='Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO']").css({});
        });
}
if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '402811817f19a849017f1f45e13120b2-1@DJGZSBXSH',
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf').html(result.html);
                    jQuery("#hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf").css({});
                    jQuery("label[for='hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf']").css({});
                
                            }
        }
    });
    
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf"){
            return true;
        }
        if(!operability){
            jQuery("#hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf").css("display","none");
            jQuery("label[for='hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf']").css("display","none");
        }else{
            jQuery("#hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf").css("display","block");
            jQuery("label[for='hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf']").css("display","block");
        }
    
         jQuery("#hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf").css({});
          jQuery("label[for='hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf']").css({});
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