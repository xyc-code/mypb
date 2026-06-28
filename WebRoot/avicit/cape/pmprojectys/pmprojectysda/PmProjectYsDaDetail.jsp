<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String entryId = request.getParameter("entryId");
	String executionId = request.getParameter("executionId");
	String taskId = request.getParameter("taskId");
	String formId = request.getParameter("id");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "cape/pmprojectys/pmprojectysda/pmProjectYsDaController/operation/Detail/id" -->
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/BpmJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
<div data-options="region:'center',split:true,border:false">
	<!-- 流程按钮区域开始 -->
	<div class=datagrid-toolbar>
		<div id=bpmToolBar></div>
		<!-- 自定义按钮放到这里 -->
		<a class="easyui-linkbutton" iconCls="icon-undo" plain="true" onclick="doBack();" href="javascript:void(0);">返回</a>
	</div>
	<fieldset> 
		<form id='form'>
			<input type="hidden" name="id" />
				<table class="form_commonTable">
					<tr>
																													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="secretLevel">
									  																密级:</label></th>
																											<td class="disabled" width="39%">
																									
														 			 									  <pt6:syslookup name="secretLevel"  title="密级" isNull="true" id ="secretLevel"  lookupCode="PLATFORM_FILE_SECRET_LEVEL" defaultValue='${pmProjectYsDaDTO.secretLevel}' dataOptions="disabled:true,editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
									  </pt6:syslookup> 
								    									 
							    								</td>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="projectId">
									  																项目id:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="项目id"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[50]'" style="width: 99%;" type="text" name="projectId" id="projectId"/>
																									</td>
																	</tr>
									<tr>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="projectName">
									  																项目名称:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="项目名称"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="projectName" id="projectName"/>
																									</td>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="taskId">
									  																任务id:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="任务id"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="taskId" id="taskId"/>
																									</td>
																	</tr>
									<tr>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="taskName">
									  																任务名称:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="任务名称"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="taskName" id="taskName"/>
																									</td>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="ysDate">
									  																验收时间:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="验收时间"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="ysDate" id="ysDate"/>
																									</td>
																	</tr>
									<tr>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="pfFileName">
									  																批复文件名称:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="批复文件名称"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[2000]'" style="width: 99%;" type="text" name="pfFileName" id="pfFileName"/>
																									</td>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="pfDate">
									  																批复时间:</label></th>
																											<td class="disabled" width="39%">
																									
																									  		<input title="批复时间"  disabled class="easyui-datetimebox disabled pt6-disabled"  editable="false" style="width: 99%;" type="text" name="pfDate" id="pfDate"/>
								  																	</td>
																	</tr>
									<tr>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="pfNo">
									  																批复文号:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="批复文号"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="pfNo" id="pfNo"/>
																									</td>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="compDept">
									  																参与单位:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="参与单位"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="compDept" id="compDept"/>
																									</td>
																	</tr>
									<tr>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="compUser">
									  																参与人员:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="参与人员"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="compUser" id="compUser"/>
																									</td>
															   							   							   													 					  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="ysIdea">
									  																验收意见:</label></th>
																											<td class="disabled" width="39%">
																									
																	   <textarea title="验收意见" name="ysIdea"   id="ysIdea"  disabled  class="textareabox" style="width:99%;" data-size="2000">${pmProjectYsDaDTO.ysIdea}</textarea>		 
																</td>
																	</tr>
									<tr>
															   							   							   													 					  											  											  											  											  											  											  																				 							   							  	<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	  									  	<label for="createdDept">
									  																创建部门:</label></th>
																											<td class="disabled" width="39%">
																									
																											<input title="创建部门"  class="inputbox easyui-validatebox disabled pt6-disabled" data-options="validType:'maxLength[255]'" style="width: 99%;" type="text" name="createdDept" id="createdDept"/>
																									</td>
															   							   							   													 					  											  											  											  											  											  											  											  											  											  											  											  					</tr>
					</table>
			</form>
		</fieldset>
				<jsp:include page="/avicit/platform6/modules/system/swfupload/swfBpmEditInclude.jsp">
					<jsp:param name="file_size_limit" value="5000MB" />
					<jsp:param name="file_types" value="*.*" />
					<jsp:param name="file_upload_limit" value="10" />
					<jsp:param name="save_type" value="true" />
					<jsp:param name="form_id" value='<%=formId%>' />
					<jsp:param name="form_code" value="pmProjectYsDa" />
					<jsp:param name="allowAdd" value="process" />
					<jsp:param name="allowDel" value="false" />
					<jsp:param name="cleanOnExit" value="true" />
					<jsp:param name="hiddenUploadBtn" value="false" />
					<jsp:param name="secret_level" value="PLATFORM_FILE_SECRET_LEVEL" />
				</jsp:include>
		<div id="idea"></div>
	</div>
	<script type="text/javascript">
		//返回
		function doBack(){
			if(parent!=null&&parent.$('#tabs')!=null){
				var currTab = parent.$('#tabs').tabs('getSelected');
				var currTitle = currTab.panel('options').title; 
				parent.$('#tabs').tabs('close',currTitle);
			}
		}
		$.extend($.fn.validatebox.defaults.rules, {
			maxLength : {
				validator : function(value, param) {
				    if(param[0]==0){
            	      param[0]=13;
            	    }
            	    return param[0] >= value.replace(/[^\x00-\xff]/g,"**").length; //计算字符串长度（可同时字母和汉，字母占一个字符，汉字占两个字符）    
				},
				message : '请输入最多 {0} 字符.'
			},
			extendsIsNull : {
				validator : function(value) {
					return value != "请选择";
				},
				message : '该输入项为必输项.'
			} 
		});

		var entryId = "<%=entryId%>";
		var executionId = "<%=executionId%>";
		var taskId = "<%=taskId%>";
		var formId = "<%=formId%>";
		$(function() {
		                            	                    	                    	                    	                    	                    	                    	                    	                    	                if(!"${pmProjectYsDaDTO.pfDate}"==""){
	                    $('#pfDate').datetimebox('setValue', parserColumnTime("${pmProjectYsDaDTO.pfDate}").format("yyyy-MM-dd hh:MM:ss"));
	                }
	            	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	                    	        	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	                	                	            	        	            	        	            	        	            	        	            	        	            	        	            	        	            	                	                	            	        	            	        	            	        	            	        	            	        	            	        	            	        	            	        	            	        	            	        	            	        	            	        			//初始化页面值
			$.ajax({
				url : 'platform/cape/pmprojectys/pmprojectysda/pmProjectYsDaController/operation/toDetailJsp.json',
				data : {
					id : formId
				},
				type : 'post',
				dataType : 'json',
				success : function(result) {
					if (result.flag == "success") {
					                                                   					                            					                            					                            					                            					                            					                            					                            					                                                       result.datas.pfDate = formatDateTimebox(result.datas.pfDate);
						 					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					                            					   						$("#form").form('load', result.datas);
												  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   						  					   					} else {
						$.messager.show({
							title : '提示',
							msg : "数据加载失败。"
						});
					}
				}
			});

			//控制表单权限用这个
			initBpmInfoAndFormAccess(entryId, executionId, taskId, formId);
		})

		/**
		 * 保存表单方法
		 * @param processInstanceId
		 * @param executionId
		 */
		var _callback;
		window.saveFormDataSyn = function(processInstanceId, executionId, callback) {
			_callback = callback;
			if ($('#form').form('validate') == false) {
				return;
			}
			var dataVo = $('#form').serializeArray();
			var dataJson = convertToJson(dataVo);
			$.each($('.pt6CtrlCheckBox'),function(i,item){
				var dataVar="";//checkbox组所代表的字段的值拼接成字符串
				var  checkboxElement = $(item).find(':checkbox');//从span标签里找出所有的checkbox
				var nameValue = $(checkboxElement[0]).attr('name');//获取对应checkbox的name值
				for(var i=0;i < checkboxElement.length;i++){
					if($(checkboxElement[i]).is(':checked')){
						dataVar=dataVar+$(checkboxElement[i]).val();
						if(i<checkboxElement.length-1){
							dataVar=dataVar+",";
						}
					}
				 }
			     dataJson[nameValue]=dataVar;
			});	
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
		   var tdLabel = $('#form').find('[data-isnull="false"]');
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
			var checkboxElement = $('#form').find('[data-type="checkbox"]');
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
		    if(!hasvalidate){
				return;
			}
			dataVo = JSON.stringify(dataJson);
			$.ajax({
				url : "platform/cape/pmprojectys/pmprojectysda/pmProjectYsDaController/operation/save",
				data : {
					data : dataVo
				},
				type : 'post',
				dataType : 'json',
				success : function(result) {
					if (result.flag == "success") {
						var flag = 0;
						try{
							flag = upload();
						}catch(e){}
						if(flag == 0){
							$.messager.show({
								title : '提示',
								msg : "保存完成."
							});
							if(_callback != null){
								_callback();
							}
						}
					} else {
						$.messager.show({
							title : '提示',
							msg : "操作失败。"
						});
					}
				}
			});
		};
		
		function afterUploadEvent() {
			$.messager.show({
				title : '提示',
				msg : "保存完成."
			});
			if(_callback != null){
				_callback();
			}
		}
	</script>
</body>
<script type="text/javascript">
	$(function(){
	  $('.input-right-icon').hide();
    });
    document.ready = function () {
	  document.body.style.visibility = 'visible';
	}
</script>
</html>