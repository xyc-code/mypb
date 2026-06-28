<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "jg/jgpaymentplan/jgPaymentPlanController/operation/Detail/id" -->
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
										   				<input type="hidden" name="id" value='<c:out  value='${jgPaymentPlanDTO.id}'/>' />		    
			   		    								   		    																																																																																																																																											<table class="form_commonTable">
		<tr>
																															   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															密级:</th>
					<td class="disabled" width="39%">
					                        <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" defaultValue='${jgPaymentPlanDTO.secretLevel}' dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel,disabled:true">
                        </pt6:syslookup>
										</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															项目ID:</th>
					<td class="disabled" width="39%">
																		<input title="项目ID" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="projectId" id="projectId" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.projectId}'/>'/>
																</td>
											</tr>
						<tr>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															下达批次:</th>
					<td class="disabled" width="39%">
																		<input title="下达批次" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="publishNo" id="publishNo" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.publishNo}'/>'/>
																</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															下达文号:</th>
					<td class="disabled" width="39%">
																		<input title="下达文号" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="publishCode" id="publishCode" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.publishCode}'/>'/>
																</td>
											</tr>
						<tr>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															下达日期:</th>
					<td class="disabled" width="39%">
																  		<input title="下达日期" class="easyui-datetimebox" editable="false"  style="width: 99%;" type="text" name="publishDate" id="publishDate" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.publishDate}'/>'/>
					  											</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															请款类型:</th>
					<td class="disabled" width="39%">
					                        <pt6:syslookup name="paymentType" id="paymentType" title="请款类型" isNull="true" lookupCode="JG_PAYMENT_TYPE" defaultValue='${jgPaymentPlanDTO.paymentType}' dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel,disabled:true">
                        </pt6:syslookup>
										</td>
											</tr>
						<tr>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															请款年度:</th>
					<td class="disabled" width="39%">
																  		<input title="请款年度" class="easyui-numberbox" style="width:99%;" type="text" name="paymentYear" id="paymentYear" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.paymentYear}'/>'/>	
																</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															请款月份:</th>
					<td class="disabled" width="39%">
																  		<input title="请款月份" class="easyui-numberbox" style="width:99%;" type="text" name="paymentMonth" id="paymentMonth" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.paymentMonth}'/>'/>	
																</td>
											</tr>
						<tr>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															中央预算内资金:</th>
					<td class="disabled" width="39%">
																  		<input title="中央预算内资金" class="easyui-numberbox" style="width:99%;" type="text" name="budgetFund" id="budgetFund" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.budgetFund}'/>'/>	
																</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															配套资金:</th>
					<td class="disabled" width="39%">
																  		<input title="配套资金" class="easyui-numberbox" style="width:99%;" type="text" name="budgetSpecialFund" id="budgetSpecialFund" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.budgetSpecialFund}'/>'/>	
																</td>
											</tr>
						<tr>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															银行贷款:</th>
					<td class="disabled" width="39%">
																  		<input title="银行贷款" class="easyui-numberbox" style="width:99%;" type="text" name="bankLoans" id="bankLoans" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.bankLoans}'/>'/>	
																</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															自筹资金:</th>
					<td class="disabled" width="39%">
																  		<input title="自筹资金" class="easyui-numberbox" style="width:99%;" type="text" name="selfFund" id="selfFund" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.selfFund}'/>'/>	
																</td>
											</tr>
						<tr>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															状态(10编制中,20已提交):</th>
					<td class="disabled" width="39%">
																		<input title="状态(10编制中,20已提交)" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="status" id="status" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.status}'/>'/>
																</td>
									  				  					  																					   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															备注:</th>
					<td class="disabled" width="39%">
																		<input title="备注" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="remark" id="remark" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.remark}'/>'/>
																</td>
											</tr>
						<tr>
									  				  					  																																																																												   				  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															创建人所属部门）:</th>
					<td class="disabled" width="39%">
																		<input title="创建人所属部门）" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="createdDept" id="createdDept" readonly="readonly" value='<c:out value='${jgPaymentPlanDTO.createdDept}'/>'/>
																</td>
									  				  					  																	</tr>
		</table>
		</form>
		<jsp:include page="/avicit/platform6/modules/system/swfupload/swfEditInclude.jsp">
            <jsp:param name="file_size_limit" value="5000MB" />
            <jsp:param name="file_types" value="*.*" />
            <jsp:param name="file_upload_limit" value="10" />
            <jsp:param name="save_type" value="true" /> 
           <jsp:param name="form_id" value='${jgPaymentPlanDTO.id}' />
            <jsp:param name="form_code" value="jgPaymentPlan" />
            <jsp:param name="allowAdd" value="false" />
            <jsp:param name="allowDel" value="false" />
            <jsp:param name="cleanOnExit" value="true" />
            <jsp:param name="hiddenUploadBtn" value="true" />
            <jsp:param name="secret_level" value="PLATFORM_FILE_SECRET_LEVEL" />
        </jsp:include>
	</div>
	<script type="text/javascript">
	$(function(){
																																				if(!"${jgPaymentPlanDTO.publishDate}"==""){
					$('#publishDate').datetimebox('setValue', '<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"  value="${jgPaymentPlanDTO.publishDate}"/>');
				}
																																																																																																																																																																																																																																																																																																																																																																																																																																																			$('.input-right-icon').hide();
	});
	document.ready = function () {
		document.body.style.visibility = 'visible';
	}
	</script>
</body>
</html>