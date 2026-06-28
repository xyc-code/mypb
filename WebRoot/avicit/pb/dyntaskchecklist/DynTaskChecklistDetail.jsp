<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "dyntaskchecklist/dynTaskChecklistController/operation/Detail/id" -->
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
<script type="text/javascript">
	$(function(){
																																																			if(!"${dynTaskChecklistDTO.manifestDateEnd}"==""){
					$('#manifestDateEnd').datebox('setValue', parserColumnTime("${dynTaskChecklistDTO.manifestDateEnd}").format("yyyy-MM-dd"));
				}
																																																																																																																																																																																																																																																																																																																																																																																																																					    $('.input-right-icon').hide();
	});
	
  document.ready = function () {
	document.body.style.visibility = 'visible';
  }
</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
									<input type="hidden" name="id" value='${dynTaskChecklistDTO.id}'/>
												<input type="hidden" name="id" value='${dynTaskChecklistDTO.id}'/>
																																																																																																																																																													<table class="form_commonTable">
		<tr>
																															  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	举一反三情况:</th>
					<td class="disabled" width="39%">
																		<input title="举一反三情况" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestOneAnd" id="manifestOneAnd" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestOneAnd}'/>'/>
																</td>
									 				 				   																									  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	责任人:</th>
					<td class="disabled" width="39%">
																		<input title="责任人" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestPosen" id="manifestPosen" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestPosen}'/>'/>
																</td>
											</tr>
						<tr>
									 				 				   																									  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	发现的问题:</th>
					<td class="disabled" width="39%">
																		<input title="发现的问题" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestIssue" id="manifestIssue" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestIssue}'/>'/>
																</td>
									 				 				   																														  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	完成时间:</th>
					<td class="disabled" width="39%">
																  		<input title="完成时间" class="easyui-datebox" style="width: 99%;" type="text" name="manifestDateEnd" id="manifestDateEnd" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestDateEnd}'/>'/>
																</td>
											</tr>
						<tr>
									 				 				   																				  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
													<span style="color:red;">*</span>
										CREATED_DEPT:</th>
					<td class="disabled" width="39%">
																		<input title="CREATED_DEPT" class="easyui-validatebox" data-options="required:true" style="width: 99%;" type="text" name="createdDept" id="createdDept" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.createdDept}'/>'/>
																</td>
									 				 				   																									  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	责任领导:</th>
					<td class="disabled" width="39%">
																		<input title="责任领导" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestLeadership" id="manifestLeadership" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestLeadership}'/>'/>
																</td>
											</tr>
						<tr>
									 				 				   																																																		  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	整改措施具体内容 （含措施分解）:</th>
					<td class="disabled" width="39%">
																		<input title="整改措施具体内容 （含措施分解）" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestMeasure" id="manifestMeasure" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestMeasure}'/>'/>
																</td>
									 				 				   																									  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	原因分析:</th>
					<td class="disabled" width="39%">
																		<input title="原因分析" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestCause" id="manifestCause" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestCause}'/>'/>
																</td>
											</tr>
						<tr>
									 				 				   																																													  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	主要方面:</th>
					<td class="disabled" width="39%">
																		<input title="主要方面" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="listMainly" id="listMainly" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.listMainly}'/>'/>
																</td>
									 				 				   																				  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	问题的具体内容:</th>
					<td class="disabled" width="39%">
																		<input title="问题的具体内容" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestIssueCont" id="manifestIssueCont" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestIssueCont}'/>'/>
																</td>
											</tr>
						<tr>
									 				 				   																														  									<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
																	业务主管 部门会签:</th>
					<td class="disabled" width="39%">
																		<input title="业务主管 部门会签" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="manifestQian" id="manifestQian" readonly="readonly" value='<c:out  value='${dynTaskChecklistDTO.manifestQian}'/>'/>
																</td>
									 				 				   											</tr>
		</table>
		</form>
	</div>
</body>
</html>