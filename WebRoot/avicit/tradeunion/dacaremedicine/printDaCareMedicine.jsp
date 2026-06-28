
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
 <h1 style="text-align: center;" id="mcetoc_1esn742ku0"><strong>东安爱心医疗审批单</strong></h1>
 <div id="formLeft" style="margin-left: 41.818px;margin-right: 41.818px"><label for="requireDate" id="Sxj29AmVvBirG86YVLIsB9m2HYOfHj4c"><i class="required" style="color: #ff0000;">*</i>填报日期：</label>${map["RequestDate"]}</div>
 <table style=" border: 1px solid;" id="dXd7H6by2Gi2KukTDakhr1ci5Sizi7BO" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 30px;"><label for="AutoCode" id="Sxj29AmVvBirG86YVLIsB9m2HYOfHj4c"><i class="required" style="color: #ff0000;">*</i>表单编号：</label></td> 
    <td style="width:32%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="AutoCode" name="AutoCode" style="" class="form-control" readonly rows="1" title="表单编号" data-precision="">${map["AutoCode"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="RequestName" id="RequestName"><i class="required" style="color: #ff0000;">*</i>申请人：</label></td> 
    <td style="width:38%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="RequestName" name="RequestName" style="" class="form-control" readonly rows="1" title="申请人" data-precision="">${map["RequestName"]}</textarea> 
     </div> </td> 
   </tr> 
      <tr style="height: 30px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 30px;"><label for="RequestDept" id="RequestDept"><i class="required" style="color: #ff0000;">*</i>申请部门：</label></td> 
    <td style="width:32%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="RequestDept" name="RequestDept" style="" class="form-control" readonly rows="1" title="申请部门" data-precision="">${map["RequestDept"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="PatienterIdAlias" id="dzSAoT4Fmjcj87yDJfAhmmmGHQPuTkSl"><i class="required" style="color: #ff0000;">*</i>患者姓名：</label></td> 
    <td style="width:38%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="PatienterIdAlias" name="PatienterIdAlias" style="" class="form-control" readonly rows="1" title="患者姓名" data-precision="">${map["PatienterIdAlias"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 29px;"><label for="PatientSex" id="QTQxf4ribCzSIp5Z5tAYKzIPeFEsXmFv"><i class="required" style="color: #ff0000;">*</i>患者性别：</label></td> 
    <td style="width:32%; border: 1px solid; height: 29px;"> 
     <div class=""> 
      <textarea id="PatientSex" name="PatientSex" style="" class="form-control" readonly rows="1" title="患者性别:" data-precision="">${map["PatientSex"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 29px;"><label for="PatientAge" id="vuxrUYpN9aPakeE6aU5Et7tD95HG4Pss"><i class="required" style="color: #ff0000;">*</i>患者年龄：</label></td> 
    <td style="width:38%; border: 1px solid; height: 29px;"> 
     <div class=""> 
      <textarea id="PatientAge" name="PatientAge" style="" class="form-control" readonly rows="1" title="患者年龄" data-precision="">${map["PatientAge"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 45px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 45px;"><label for="PatientTel" id="njUv69z4jI8RPq1lTCdeTNL4NR1dHVWP"><i class="required" style="color: #ff0000;">*</i>患者电话：</label></td> 
    <td style="width:32%; border: 1px solid; height: 45px;"> 
     <div class=""> 
      <textarea id="PatientTel" name="PatientTel" style="" class="form-control" readonly rows="1" title="患者电话" data-precision="">${map["PatientTel"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 45px;"><label for="Disease" id="pSdHK4k7expLTd5rVmBq8GzQjZwNbA5H"><i class="required" style="color: #ff0000;">*</i>患病名称：	</label></td> 
    <td style="width:38%; border: 1px solid; height: 45px;"> 
     <div class=""> 
      <textarea id="Disease" name="Disease" style="" class="form-control" readonly rows="1" title="患病名称" data-precision="0">${map["Disease"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 30px;"><label for="Hospital" id="uUpifBDMaTnSacqz2B4ifgzZUrf0LM3h"><i class="required" style="color: #ff0000;">*</i>治疗医院：</label></td> 
    <td style="width:32%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="Hospital" name="Hospital" style="" class="form-control" readonly rows="1" title="治疗医院" data-precision="">${map["Hospital"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="InhospDate" id="GWtZMhxoNj6mJ11DrBFMC0gVQUFmdneg"><i class="required" style="color: #ff0000;">*</i>住院日期开始：</label></td> 
    <td style="width:38%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="InhospDate" name="InhospDate" style="" class="form-control" readonly rows="1" title="住院日期开始" data-precision="">${map["InhospDate"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 45px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 45px;"><label for="OuthospDate" id="oWSh2qYeQ9Qph3wOQsbonmO6fVcaq0QU"><i class="required" style="color: #ff0000;">*</i>住院日期结束：
</label></td> 
    <td style="width:32%; border: 1px solid; height: 45px;"> 
     <div class=""> 
      <textarea id="OuthospDate" name="OuthospDate" style="" class="form-control" readonly rows="1" title="住院日期结束" data-precision="">${map["OuthospDate"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 45px;"><label for="EmployeeCard" id="JcgLrFxW6nWU3sbgRQoKJzKmTkq0crG2"><i class="required" style="color: #ff0000;">*</i>报销职工卡号：</label></td> 
    <td style="width:38%; border: 1px solid; height: 45px;"> 
     <div class=""> 
      <textarea id="EmployeeCard" name="EmployeeCard" style="" class="form-control" readonly rows="1" title="报销职工卡号" data-precision="">${map["EmployeeCard"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 30px;"><label for="DepositBank" id="Yji7XQrrnQAEuV5X7lGLYOYBe1EdZVGV"><i class="required" style="color: #ff0000;">*</i>开户银行：</label></td> 
    <td style="width:32%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="DepositBank" name="DepositBank" style="" class="form-control" readonly rows="1" title="开户银行" data-precision="">${map["DepositBank"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="DiseaseType" id="aecVovBnEdG7sBXoSBNGvuYYEymMga5l"><i class="required" style="color: red;">*</i>疾病类型：	</label></td> 
    <td style="width:38%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="DiseaseType" name="DiseaseType" style="" class="form-control" readonly rows="1" title="DATA_1" data-precision="">${map["DiseaseType"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 30px;"><label for="HealthExpenses" id="NtjqlEpVUcNcSwGs7uQ81PgPzNwLndun"><i class="required" style="color: #ff0000;">*</i>医疗费总金额：	</label></td> 
    <td style="width:32%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="HealthExpenses" name="HealthExpenses" style="" class="form-control" readonly rows="1" title="医疗费总金额" data-precision="">${map["HealthExpenses"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="OverallExpenses" id="OwwpNEbIXQs02KGwQXyjB8W50rhAw5eQ"><i class="required" style="color: #ff0000;">*</i>统筹基金支付：</label></td> 
    <td style="width:38%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="OverallExpenses" name="OverallExpenses" style="" class="form-control" readonly rows="1" title="统筹基金支付" data-precision="">${map["OverallExpenses"]}</textarea> 
     </div> </td> 
   </tr> 
    <tr style="height: 30px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 30px;"><label for="PersonExpenses" id="NtjqlEpVUcNcSwGs7uQ81PgPzNwLndun"><i class="required" style="color: #ff0000;">*</i>个人支付金额：	</label></td> 
    <td style="width:32%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="PersonExpenses" name="PersonExpenses" style="" class="form-control" readonly rows="1" title="个人支付金额" data-precision="">${map["PersonExpenses"]}</textarea> 
     </div> </td> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="SubmitExpenses" id="OwwpNEbIXQs02KGwQXyjB8W50rhAw5eQ"><i class="required" style="color: #ff0000;">*</i>申请报销金额：</label></td> 
    <td style="width:38%; border: 1px solid; height: 30px;"> 
     <div class=""> 
      <textarea id="SubmitExpenses" name="SubmitExpenses" style="" class="form-control" readonly rows="1" title="申请报销金额" data-precision="">${map["SubmitExpenses"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 131px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 131px;"><label for="VEHICLE_REASON" id="rFvVegIjPOEK45sk3GDVrIcszB7lyUIg"><i class="required" style="color: #ff0000;">*</i>工会主席：</label></td> 
    <td style="width:86%; border: 1px solid; height: 131px;" colspan="3"> 
     <div class=""> 
      <textarea id="GHZX" name="GHZX" style="" class="form-control" readonly rows="6" title="工会主席" data-precision="">${map["GHZX"]}</textarea> 
     </div> </td> 
   </tr> 
    <tr style="height: 131px;"> 
    <td style="width:13%; text-align: right; border: 1px solid; height: 131px;"><label for="JJHSC" id="rFvVegIjPOEK45sk3GDVrIcszB7lyUIg"><i class="required" style="color: #ff0000;">*</i>基金会审核：</label></td> 
    <td style="width:86%; border: 1px solid; height: 131px;" colspan="3"> 
     <div class=""> 
      <textarea id="JJHSC" name="JJHSC" style="" class="form-control" readonly rows="6" title="基金会审核" data-precision="">${map["JJHSC"]}</textarea> 
     </div> </td> 
   </tr> 
  </tbody> 
 </table>
 
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

       
        $("input[type='hidden']").remove();
        // $("span").remove();
        $(".ui-userdata").remove();
        jQuery(".datatable").jqGrid('setGridParam',{'cellEdit':false});

        setTimeout(function() {
        
                window.print();
          
            window.close();
        }, 1500);

 

    function getpdf(){
        var head = $('head').html();
        var body = document.getElementById('form').innerHTML;
        opener.htmltopdf(head,body);
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