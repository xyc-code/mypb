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
<!-- ControllerPath = "cape/pmprojectys/pmprojectyshpj/pmProjectYsHpjController/operation/Edit/id" -->
<title>修改</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
						<input type="hidden" name="version" value='<c:out  value='${pmProjectYsHpjDTO.version}'/>' />
												<input type="hidden" name="id" value='<c:out  value='${pmProjectYsHpjDTO.id}'/>' />
																																																																																																																																																																																																																																																																																																																																																																		<table class="form_commonTable">
					<tr>
																																																													 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								密级:</th>
																   								    <td width="15%">
								   								 								                                     						 		      <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull="true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" defaultValue='${pmProjectYsHpjDTO.secretLevel}' dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                      </pt6:syslookup>
                                                                     								</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								项目id:</th>
																   								    <td width="15%">
								   								 																											<input title="项目id" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 99%;" type="text" name="projectId" id="projectId" value='<c:out value='${pmProjectYsHpjDTO.projectId}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								所属项目:</th>
																   								    <td width="15%">
								   								 																											<input title="所属项目" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="projectName" id="projectName" value='<c:out value='${pmProjectYsHpjDTO.projectName}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								任务id:</th>
																   								    <td width="15%">
								   								 																											<input title="任务id" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="taskId" id="taskId" value='<c:out value='${pmProjectYsHpjDTO.taskId}'/>'/>
																									</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								任务名称:</th>
																   								    <td width="15%">
								   								 																											<input title="任务名称" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="taskName" id="taskName" value='<c:out value='${pmProjectYsHpjDTO.taskName}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								项目编号:</th>
																   								    <td width="15%">
								   								 																											<input title="项目编号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 99%;" type="text" name="subProjectId" id="subProjectId" value='<c:out value='${pmProjectYsHpjDTO.subProjectId}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								项目编号:</th>
																   								    <td width="15%">
								   								 																											<input title="项目编号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="subProjectCode" id="subProjectCode" value='<c:out value='${pmProjectYsHpjDTO.subProjectCode}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								设备名称:</th>
																   								    <td width="15%">
								   								 																											<input title="设备名称" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="subProjectName" id="subProjectName" value='<c:out value='${pmProjectYsHpjDTO.subProjectName}'/>'/>
																									</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								规格:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="规格"   name="pfGg"   id="pfGg" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.pfGg}'/></textarea> 
																</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								型号:</th>
																   								    <td width="15%">
								   								 																											<input title="型号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[4000]'" style="width: 99%;" type="text" name="pfXg" id="pfXg" value='<c:out value='${pmProjectYsHpjDTO.pfXg}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								主要性能指标:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="主要性能指标"   name="pfXnzb"   id="pfXnzb" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.pfXnzb}'/></textarea> 
																</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								类型:</th>
																   								    <td width="15%">
								   								 																	 <pt6:JigsawRadio name="pfType" title="类型" canUse="0"  lookupCode="JG_EQUIPMENT_FROM" defaultValue='${pmProjectYsHpjDTO.pfType}'/> 
																</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								数量:</th>
																   								    <td width="15%">
								   								 																									  		<input title="数量" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[12]'" style="width: 99%;" type="text" name="pfNum" id="pfNum" value='<c:out value='${pmProjectYsHpjDTO.pfNum}'/>' />	
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								规格:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="规格"   name="ysGg"   id="ysGg" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.ysGg}'/></textarea> 
																</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								主要性能指标:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="主要性能指标"   name="ysXnzb"   id="ysXnzb" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.ysXnzb}'/></textarea> 
																</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								设备型号:</th>
																   								    <td width="15%">
								   								 																											<input title="设备型号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="ysXg" id="ysXg" value='<c:out value='${pmProjectYsHpjDTO.ysXg}'/>'/>
																									</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								制造厂商:</th>
																   								    <td width="15%">
								   								 																											<input title="制造厂商" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="ysZzcs" id="ysZzcs" value='<c:out value='${pmProjectYsHpjDTO.ysZzcs}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								出厂日期:</th>
																   								    <td width="15%">
								   								 																									  		<input title="出厂日期" class="easyui-datetimebox"  style="width:99%;" editable="false" type="text" name="ysCcrqDate" id="ysCcrqDate" value='<c:out value='${pmProjectYsHpjDTO.ysCcrqDate}'/>' />
								  																	</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								出厂编号:</th>
																   								    <td width="15%">
								   								 																											<input title="出厂编号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="ysCcbh" id="ysCcbh" value='<c:out value='${pmProjectYsHpjDTO.ysCcbh}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								终验收日期:</th>
																   								    <td width="15%">
								   								 																									  		<input title="终验收日期" class="easyui-datetimebox"  style="width:99%;" editable="false" type="text" name="ysZysDate" id="ysZysDate" value='<c:out value='${pmProjectYsHpjDTO.ysZysDate}'/>' />
								  																	</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								到货时间:</th>
																   								    <td width="15%">
								   								 																									  		<input title="到货时间" class="easyui-datetimebox"  style="width:99%;" editable="false" type="text" name="ysDhDate" id="ysDhDate" value='<c:out value='${pmProjectYsHpjDTO.ysDhDate}'/>' />
								  																	</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								办理人:</th>
																   								    <td width="15%">
								   								 																											<input title="办理人" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="ysUser" id="ysUser" value='<c:out value='${pmProjectYsHpjDTO.ysUser}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								使用单位:</th>
																   								    <td width="15%">
								   								 																											<input title="使用单位" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="ysDept" id="ysDept" value='<c:out value='${pmProjectYsHpjDTO.ysDept}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								验收结论:</th>
																   								    <td width="15%">
								   								 																	 <pt6:JigsawRadio name="ysYsjl" title="验收结论" canUse="0"  lookupCode="JG_CHECK_RESULT" defaultValue='${pmProjectYsHpjDTO.ysYsjl}'/> 
																</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								验收意见:</th>
																   								    <td width="15%">
								   								 																											<input title="验收意见" class="inputbox easyui-validatebox" data-options="validType:'maxLength[2000]'" style="width: 99%;" type="text" name="ysIdea" id="ysIdea" value='<c:out value='${pmProjectYsHpjDTO.ysIdea}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								评价日期:</th>
																   								    <td width="15%">
								   								 																									  		<input title="评价日期" class="easyui-datetimebox"  style="width:99%;" editable="false" type="text" name="hpjDate" id="hpjDate" value='<c:out value='${pmProjectYsHpjDTO.hpjDate}'/>' />
								  																	</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								评价单位:</th>
																   								    <td width="15%">
								   								 																											<input title="评价单位" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="hpjDept" id="hpjDept" value='<c:out value='${pmProjectYsHpjDTO.hpjDept}'/>'/>
																									</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								评价人:</th>
																   								    <td width="15%">
								   								 																											<input title="评价人" class="inputbox easyui-validatebox" data-options="validType:'maxLength[500]'" style="width: 99%;" type="text" name="hpjUser" id="hpjUser" value='<c:out value='${pmProjectYsHpjDTO.hpjUser}'/>'/>
																									</td>
																	</tr>
									<tr>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								应用效果:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="应用效果"   name="hpjYyxg"   id="hpjYyxg" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.hpjYyxg}'/></textarea> 
																</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								实现价值:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="实现价值"   name="hpjSxjz"   id="hpjSxjz" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.hpjSxjz}'/></textarea> 
																</td>
															 						   																															 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								存在问题:</th>
																   								    <td width="15%">
								   								 																	 <textarea title="存在问题"   name="hpjCzwt"   id="hpjCzwt" class="textareabox"  style="width:99%;" data-size="4000"><c:out  value='${pmProjectYsHpjDTO.hpjCzwt}'/></textarea> 
																</td>
															 						   																																																																																																	 							 							 							 								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								创建部门:</th>
																   								    <td width="15%">
								   								 																											<input title="创建部门" class="inputbox easyui-validatebox" data-options="validType:'maxLength[255]'" style="width: 99%;" type="text" name="createdDept" id="createdDept" value='<c:out value='${pmProjectYsHpjDTO.createdDept}'/>'/>
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
						<a title="保存" id="saveButton" class="easyui-linkbutton primary-btn" onclick="saveForm();" href="javascript:void(0);">保存</a>
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
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																})
	function closeForm(){
		parent.pmProjectYsHpj.closeDialog("#edit");
	}
	function saveForm(){
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
	    if ($('#form').form('validate') == false) {
            return;
        }
        if(hasvalidate){
           var objectValues = serializeObject($('#form'));
           if(validateSecritLevel(objectValues.secretLevel)){ //密级验证
             $('#saveButton').linkbutton('disable').unbind("click");
		     parent.pmProjectYsHpj.save(objectValues,callback);
		  }
		}
	}
	
	function canUseClick() {
		$('#saveButton').linkbutton('enable').bind("click");
	}
	setInterval(this.canUseClick, 5000); //指定5秒按钮恢复可用状态
	
	   function callback(id){
        var flag = upload(id);
        if (!flag){
            closeForm();
            $.messager.show({
                 title : '提示',
                 msg : '保存成功！'
            });
        }
    }
    function afterUploadEvent(){
        closeForm();
        $.messager.show({
             title : '提示',
             msg : '保存成功！'
        });
    }
    document.ready = function () {
		document.body.style.visibility = 'visible';
	}
	</script>
</body>
</html>