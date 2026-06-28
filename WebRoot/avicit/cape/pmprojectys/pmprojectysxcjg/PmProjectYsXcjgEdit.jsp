<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "cape/pmprojectys/pmprojectysxcjg/pmProjectYsXcjgController/operation/Edit/id" -->
<title>修改</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
						<input type="hidden" name="version" value='<c:out  value='${pmProjectYsXcjgDTO.version}'/>'/>
												<input type="hidden" name="id" value='<c:out  value='${pmProjectYsXcjgDTO.id}'/>'/>
																																																																																																																																																																																																																													<table class="form_commonTable">
					<tr>
																																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																密级:</th>
								 								   								    <td width="39%">
								   								 																	 									 	<pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" defaultValue='${pmProjectYsXcjgDTO.secretLevel}' dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
			                            </pt6:syslookup>
			                         									 
							    								</td>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																项目id:</th>
								 								   								    <td width="39%">
								   								 																											<input title="项目id" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 99%;" type="text" name="projectId" id="projectId" value='<c:out value='${pmProjectYsXcjgDTO.projectId}'/>'/>
																									</td>
																	</tr>
									<tr>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																项目名称:</th>
								 								   								    <td width="39%">
								   								 																											<input title="项目名称" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="projectName" id="projectName" value='<c:out value='${pmProjectYsXcjgDTO.projectName}'/>'/>
																									</td>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																任务id:</th>
								 								   								    <td width="39%">
								   								 																											<input title="任务id" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="taskId" id="taskId" value='<c:out value='${pmProjectYsXcjgDTO.taskId}'/>'/>
																									</td>
																	</tr>
									<tr>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																任务名称:</th>
								 								   								    <td width="39%">
								   								 																											<input title="任务名称" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="taskName" id="taskName" value='<c:out value='${pmProjectYsXcjgDTO.taskName}'/>'/>
																									</td>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																竣工验收时间:</th>
								 								   								    <td width="39%">
								   								 																											<input title="竣工验收时间" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="jgysDate" id="jgysDate" value='<c:out value='${pmProjectYsXcjgDTO.jgysDate}'/>'/>
																									</td>
																	</tr>
									<tr>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																批复文件名称:</th>
								 								   								    <td width="39%">
								   								 																											<input title="批复文件名称" class="inputbox easyui-validatebox" data-options="validType:'maxLength[2000]'" style="width: 99%;" type="text" name="pfFileName" id="pfFileName" value='<c:out value='${pmProjectYsXcjgDTO.pfFileName}'/>'/>
																									</td>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																批复时间:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="批复时间" class="easyui-datetimebox" editable="false"  style="width: 99%;" type="text" name="pfDate" id="pfDate" value='<c:out  value='${pmProjectYsXcjgDTO.pfDate}'/>'/>
								  																	</td>
																	</tr>
									<tr>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																批复文号:</th>
								 								   								    <td width="39%">
								   								 																											<input title="批复文号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="pfNo" id="pfNo" value='<c:out value='${pmProjectYsXcjgDTO.pfNo}'/>'/>
																									</td>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																参与单位:</th>
								 								   								    <td width="39%">
								   								 																											<input title="参与单位" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="compDept" id="compDept" value='<c:out value='${pmProjectYsXcjgDTO.compDept}'/>'/>
																									</td>
																	</tr>
									<tr>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																参与人员:</th>
								 								   								    <td width="39%">
								   								 																											<input title="参与人员" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="compUser" id="compUser" value='<c:out value='${pmProjectYsXcjgDTO.compUser}'/>'/>
																									</td>
															  							  							  																																						 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																验收意见:</th>
								 								   								    <td width="39%">
								   								 																	 <textarea title="验收意见"   name="ysIdea"   id="ysIdea" class="textareabox"  style="width:99%;" data-size="2000"><c:out  value='${pmProjectYsXcjgDTO.ysIdea}'/></textarea> 
									 
																</td>
																	</tr>
									<tr>
															  							  							  																																																																																																								 							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																创建部门:</th>
								 								   								    <td width="39%">
								   								 																											<input title="创建部门" class="inputbox easyui-validatebox" data-options="validType:'maxLength[255]'" style="width: 99%;" type="text" name="createdDept" id="createdDept" value='<c:out value='${pmProjectYsXcjgDTO.createdDept}'/>'/>
																									</td>
															  							  							  																																																																																																																																																</tr>
				</table>
			</form>
		<jsp:include page="/avicit/platform6/modules/system/swfupload/swfEditInclude.jsp">
			<jsp:param name="file_size_limit" value="5000MB" />
			<jsp:param name="file_types" value="*.*" />
			<jsp:param name="file_upload_limit" value="10" />
			<jsp:param name="save_type" value="true" /> 
		   <jsp:param name="form_id" value='${pmProjectYsXcjgDTO.id}' />
			<jsp:param name="form_code" value="pmProjectYsXcjg" />
			<jsp:param name="allowAdd" value="true" />
			<jsp:param name="allowDel" value="true" />
			<jsp:param name="cleanOnExit" value="true" />
			<jsp:param name="hiddenUploadBtn" value="true" />
			<jsp:param name="secret_level" value="PLATFORM_FILE_SECRET_LEVEL" />
		</jsp:include>		
	</div>
	<div data-options="region:'south',border:false" style="height:40px;">
	 	<div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" border="0" cellspacing="1" width='100%'>
				<tr>	
					<td width="50%" align="right">
					<!--<a title="保存" id="saveButton"  hidden="true" class="easyui-linkbutton primary-btn" onclick="saveForm();" href="javascript:void(0);">保存</a> -->
					<a title="保存" id="saveStartButton"  class="easyui-linkbutton primary-btn" onclick="saveForm(true);" href="javascript:void(0);">保存</a>
					<a title="返回" id="returnButton" class="easyui-linkbutton" onclick="closeForm();" href="javascript:void(0);">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
<script type="text/javascript">
		$.extend($.fn.validatebox.defaults.rules, {	
		maxLength: {	
			validator: function(value, param){	
				if(param[0]==0){
            	    param[0]=13;
            	}
            	return param[0] >= value.replace(/[^\x00-\xff]/g,"**").length; //计算字符串长度（可同时字母和汉，字母占一个字符，汉字占两个字符）
			},	
			message: '请输入最多 {0} 字符.'   
		},
		extendsIsNull : {
			validator : function(value) {
				return value != "请选择";
			},
			message : '该输入项为必输项.'
		} 	
	});  
	$(function(){
																																																			if(!"${pmProjectYsXcjgDTO.pfDate}"==""){
					$('#pfDate').datetimebox('setValue', '<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"  value="${pmProjectYsXcjgDTO.pfDate}"/>');
				}
																																																																																																																																																																																																																																																																																																																																																																																																																																											})
	
	function closeForm(){
		parent.pmProjectYsXcjg.closeDialog("#edit");
	}
	var issubmitflow = false;
	function saveForm(_issubmitflow){
		issubmitflow = _issubmitflow;
		//textarea长度校验
		var textareaElement = $('#form').find("textarea");
	    var hasvalidate=true;
		if (textareaElement.length > 0) {
			$.each(textareaElement,function(i,item){
				var dataSize = $(item).data('size');
				var textareaValue=$(item).val();
				if(textareaValue != null && textareaValue != "" && textareaValue.replace(/[^\x00-\xff]/g, "**").length > dataSize){
					$.messager.alert('提示', '文本域输入数据长度超过预设长度'+dataSize, 'info',function(){
						document.getElementById(item.id).focus(); 
					});
					hasvalidate = false;
					return;
				}
			}); 
		}
		var tdLabel =$('#form').find('[data-isnull="false"]');
		var textareaId = "";
		$.each(tdLabel, function(i, item) {
				var dataIsNull = $(item).data('isnull');
				var hasChecked = false;
				$(item).find("input").each(function(i, obj) {
					if ($(obj).is(':checked')) {
						hasChecked = true;
					}
				});
                $(item).find("textarea").each(function(i, obj) {
					if ($(obj).val().length > 0) {
						hasChecked = true;
					}else{
						textareaId = obj.id;
					}
				});
				if (!hasChecked) {
					$.messager.alert('提示', '请输入必填项', 'info',function(){
						if(textareaId != ""){
							document.getElementById(textareaId).focus();
						}
				 	 });
					hasvalidate = false;
					return false;
				}
		});
		    //checkbox字段长度验证
			var checkboxElement = $('[data-type="checkbox"]');
		    $.each(checkboxElement, function(i, item) {
				var datasize = $(item).data('length');
				var hasLength=true;
				var lgth=0;
				$(item).find("input[type=checkbox]").each(function(i, obj) {
					if ($(obj).is(':checked')) {
						lgth=lgth + 1;
					}
					if(2*lgth-1> datasize){
						hasLength = false;
					} 
				});
				if (!hasLength) {
					$.messager.alert('提示', '多选输入数据长度超过预设长度'+datasize, 'info');
					hasvalidate = false;
					return;
				}
		    });
		if ($('#form').form('validate') == false) {
			return;
		}
		if(hasvalidate){
		   var objectValues = serializeObject($('#form'));
           if(validateSecritLevel(objectValues.secretLevel)){ //密级验证
              $('#saveStartButton').linkbutton('disable').unbind("click");
		      parent.pmProjectYsXcjg.save(objectValues,callback);
		    }
		}
	}
	
	function canUseClick() {
		$('#saveStartButton').linkbutton('enable').bind("click");
	}
	setInterval(this.canUseClick, 5000); //指定5秒按钮恢复可用状态
	
	function callback(id){
		$("#id").val(id);
		var flag = upload(id);
		if(flag == 0){
			closeForm();
		}
	}
	function afterUploadEvent(){
		closeForm();
	}
	
	document.ready = function () {
	  document.body.style.visibility = 'visible';
	}
	</script>
</body>
</html>