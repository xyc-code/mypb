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
<!-- ControllerPath = "cape/pmprojectys/pmprojectyshpj/pmProjectYsHpjController/operation/Detail/id" -->
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
										   				<input type="hidden" name="id" value='<c:out  value='${pmProjectYsHpjDTO.id}'/>' />		    
			   		    								   		    																																																																																																																																																																																																																																																									<table class="form_commonTable">
		<tr>
																															   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															密级:</th>
					<td class="disabled" width="15%">
					                        <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" defaultValue='${pmProjectYsHpjDTO.secretLevel}' dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel,disabled:true">
                        </pt6:syslookup>
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															项目id:</th>
					<td class="disabled" width="15%">
																		<input title="项目id" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="projectId" id="projectId" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.projectId}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															所属项目:</th>
					<td class="disabled" width="15%">
																		<input title="所属项目" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="projectName" id="projectName" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.projectName}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															任务id:</th>
					<td class="disabled" width="15%">
																		<input title="任务id" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="taskId" id="taskId" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.taskId}'/>'/>
																</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															任务名称:</th>
					<td class="disabled" width="15%">
																		<input title="任务名称" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="taskName" id="taskName" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.taskName}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															项目编号:</th>
					<td class="disabled" width="15%">
																		<input title="项目编号" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="subProjectId" id="subProjectId" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.subProjectId}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															项目编号:</th>
					<td class="disabled" width="15%">
																		<input title="项目编号" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="subProjectCode" id="subProjectCode" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.subProjectCode}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															设备名称:</th>
					<td class="disabled" width="15%">
																		<input title="设备名称" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="subProjectName" id="subProjectName" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.subProjectName}'/>'/>
																</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															规格:</th>
					<td class="disabled" width="15%">
											 <textarea title="规格"  name="pfGg"   id="pfGg"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.pfGg}'/></textarea>
					
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															型号:</th>
					<td class="disabled" width="15%">
																		<input title="型号" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="pfXg" id="pfXg" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.pfXg}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															主要性能指标:</th>
					<td class="disabled" width="15%">
											 <textarea title="主要性能指标"  name="pfXnzb"   id="pfXnzb"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.pfXnzb}'/></textarea>
					
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															类型:</th>
					<td class="disabled" width="15%">
											 <pt6:JigsawRadio name="pfType"  title="类型" css_class="groupCtrlSpan" canUse="1" lookupCode="JG_EQUIPMENT_FROM" defaultValue='${pmProjectYsHpjDTO.pfType}'/> 
										</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															数量:</th>
					<td class="disabled" width="15%">
																  		<input title="数量" class="easyui-numberbox" style="width: 99%;" type="text" name="pfNum" id="pfNum" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.pfNum}'/>'/>	
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															规格:</th>
					<td class="disabled" width="15%">
											 <textarea title="规格"  name="ysGg"   id="ysGg"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.ysGg}'/></textarea>
					
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															主要性能指标:</th>
					<td class="disabled" width="15%">
											 <textarea title="主要性能指标"  name="ysXnzb"   id="ysXnzb"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.ysXnzb}'/></textarea>
					
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															设备型号:</th>
					<td class="disabled" width="15%">
																		<input title="设备型号" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="ysXg" id="ysXg" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysXg}'/>'/>
																</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															制造厂商:</th>
					<td class="disabled" width="15%">
																		<input title="制造厂商" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="ysZzcs" id="ysZzcs" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysZzcs}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															出厂日期:</th>
					<td class="disabled" width="15%">
																  		<input title="出厂日期" class="easyui-datetimebox" editable="false" style="width: 99%;" type="text" name="ysCcrqDate" id="ysCcrqDate" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysCcrqDate}'/>'/>
					  											</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															出厂编号:</th>
					<td class="disabled" width="15%">
																		<input title="出厂编号" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="ysCcbh" id="ysCcbh" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysCcbh}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															终验收日期:</th>
					<td class="disabled" width="15%">
																  		<input title="终验收日期" class="easyui-datetimebox" editable="false" style="width: 99%;" type="text" name="ysZysDate" id="ysZysDate" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysZysDate}'/>'/>
					  											</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															到货时间:</th>
					<td class="disabled" width="15%">
																  		<input title="到货时间" class="easyui-datetimebox" editable="false" style="width: 99%;" type="text" name="ysDhDate" id="ysDhDate" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysDhDate}'/>'/>
					  											</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															办理人:</th>
					<td class="disabled" width="15%">
																		<input title="办理人" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="ysUser" id="ysUser" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysUser}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															使用单位:</th>
					<td class="disabled" width="15%">
																		<input title="使用单位" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="ysDept" id="ysDept" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysDept}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															验收结论:</th>
					<td class="disabled" width="15%">
											 <pt6:JigsawRadio name="ysYsjl"  title="验收结论" css_class="groupCtrlSpan" canUse="1" lookupCode="JG_CHECK_RESULT" defaultValue='${pmProjectYsHpjDTO.ysYsjl}'/> 
										</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															验收意见:</th>
					<td class="disabled" width="15%">
																		<input title="验收意见" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="ysIdea" id="ysIdea" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.ysIdea}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															评价日期:</th>
					<td class="disabled" width="15%">
																  		<input title="评价日期" class="easyui-datetimebox" editable="false" style="width: 99%;" type="text" name="hpjDate" id="hpjDate" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.hpjDate}'/>'/>
					  											</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															评价单位:</th>
					<td class="disabled" width="15%">
																		<input title="评价单位" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="hpjDept" id="hpjDept" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.hpjDept}'/>'/>
																</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															评价人:</th>
					<td class="disabled" width="15%">
																		<input title="评价人" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="hpjUser" id="hpjUser" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.hpjUser}'/>'/>
																</td>
											</tr>
						<tr>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															应用效果:</th>
					<td class="disabled" width="15%">
											 <textarea title="应用效果"  name="hpjYyxg"   id="hpjYyxg"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.hpjYyxg}'/></textarea>
					
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															实现价值:</th>
					<td class="disabled" width="15%">
											 <textarea title="实现价值"  name="hpjSxjz"   id="hpjSxjz"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.hpjSxjz}'/></textarea>
					
										</td>
									  																				   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															存在问题:</th>
					<td class="disabled" width="15%">
											 <textarea title="存在问题"  name="hpjCzwt"   id="hpjCzwt"  disabled  class="textareabox"  style="width:99%;"><c:out  value='${pmProjectYsHpjDTO.hpjCzwt}'/></textarea>
					
										</td>
									  																																																		   				  					  					  						<th align="right" width="10%" style="word-break:break-all;word-warp:break-word;">
															创建部门:</th>
					<td class="disabled" width="15%">
																		<input title="创建部门" class="inputbox easyui-validatebox" style="width: 99%;" type="text" name="createdDept" id="createdDept" readonly="readonly" value='<c:out value='${pmProjectYsHpjDTO.createdDept}'/>'/>
																</td>
											</tr>
						<tr>
									  																																																																		</tr>
		</table>
		</form>
		<jsp:include page="/avicit/platform6/modules/system/swfupload/swfEditInclude.jsp">
            <jsp:param name="file_size_limit" value="5000MB" />
            <jsp:param name="file_types" value="*.*" />
            <jsp:param name="file_upload_limit" value="10" />
            <jsp:param name="save_type" value="true" /> 
           <jsp:param name="form_id" value='${pmProjectYsHpjDTO.id}' />
            <jsp:param name="form_code" value="pmProjectYsHpj" />
            <jsp:param name="allowAdd" value="false" />
            <jsp:param name="allowDel" value="false" />
            <jsp:param name="cleanOnExit" value="true" />
            <jsp:param name="hiddenUploadBtn" value="true" />
            <jsp:param name="secret_level" value="PLATFORM_FILE_SECRET_LEVEL" />
        </jsp:include>
	</div>
	<script type="text/javascript">
	$(function(){
																																																																																																					if(!"${pmProjectYsHpjDTO.ysCcrqDate}"==""){
					$('#ysCcrqDate').datetimebox('setValue', '<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"  value="${pmProjectYsHpjDTO.ysCcrqDate}"/>');
				}
																	if(!"${pmProjectYsHpjDTO.ysZysDate}"==""){
					$('#ysZysDate').datetimebox('setValue', '<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"  value="${pmProjectYsHpjDTO.ysZysDate}"/>');
				}
												if(!"${pmProjectYsHpjDTO.ysDhDate}"==""){
					$('#ysDhDate').datetimebox('setValue', '<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"  value="${pmProjectYsHpjDTO.ysDhDate}"/>');
				}
																																if(!"${pmProjectYsHpjDTO.hpjDate}"==""){
					$('#hpjDate').datetimebox('setValue', '<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"  value="${pmProjectYsHpjDTO.hpjDate}"/>');
				}
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																	$('.input-right-icon').hide();
	});
	document.ready = function () {
		document.body.style.visibility = 'visible';
	}
	</script>
</body>
</html>