<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "dyntaskchecklist/dynTaskChecklistController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
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
																																																																																																																																																																																																																																																																																																					/* var userCommonSelector = new CommonSelector("user","userSelectCommonDialog","userName","userNameName");
		userCommonSelector.init();  */
		//选择部门
		/* var deptCommonSelector = new CommonSelector("dept","deptSelectCommonDialog","userName","userNameName");
	    deptCommonSelector.init();  */
	    //选择角色
	    /* var roleCommonSelector = new CommonSelector("role","roleSelectCommonDialog","userName","userNameName",null,null,null);
	    roleCommonSelector.init();  */ 
	   /*  //选择群组
	    var groupCommonSelector = new CommonSelector("group","groupSelectCommonDialog","userName","userNameName",null,null,null);
	    groupCommonSelector.init(); 
	    //选择岗位
	    var positionCommonSelector = new CommonSelector("position","positionSelectCommonDialog","userName","userNameName");
	    positionCommonSelector.init();  */
	});
	function closeForm(){
		parent.dynTaskChecklist.closeDialog("#insert");
	}
	function saveForm(){
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
	       $('#saveButton').linkbutton('disable').unbind("click");
		   parent.dynTaskChecklist.save(serializeObject($('#form')),"#insert");
		}
	}
	
  document.ready = function () {
	document.body.style.visibility = 'visible';
  }
</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
			<table class="form_commonTable">
					<tr>
											
																																																								
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								举一反三情况:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="举一反三情况" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestOneAnd" id="manifestOneAnd"/>
																									</td>								
															   							   							   																																																	
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								责任人:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="责任人" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestPosen" id="manifestPosen"/>
																									</td>								
																	</tr>
									<tr>
															   							   							   																																																	
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								发现的问题:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="发现的问题" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestIssue" id="manifestIssue"/>
																									</td>								
															   							   							   																																																												
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								完成时间:</th>
																   								    <td width="39%">
								   								 								 
																									  		<input title="完成时间" class="easyui-datebox"  editable="false" style="width: 99%;" type="text" name="manifestDateEnd" id="manifestDateEnd"/>
																									</td>								
																	</tr>
									<tr>
															   							   							   																																						
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																	<span class="remind">*</span>
																CREATED_DEPT:</th>
																   								     <td width="39%">
								   								 								 
																											<input title="CREATED_DEPT" class="easyui-validatebox" data-options="required:true,validType:'maxLength[50]'" style="width: 99%;" type="text" name="createdDept" id="createdDept"/>
																									</td>								
															   							   							   																																																	
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								责任领导:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="责任领导" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestLeadership" id="manifestLeadership"/>
																									</td>								
																	</tr>
									<tr>
															   							   							   																																																																																																								
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								整改措施具体内容 （含措施分解）:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="整改措施具体内容 （含措施分解）" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestMeasure" id="manifestMeasure"/>
																									</td>								
															   							   							   																																																	
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								原因分析:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="原因分析" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestCause" id="manifestCause"/>
																									</td>								
																	</tr>
									<tr>
															   							   							   																																																																																													
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								主要方面:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="主要方面" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="listMainly" id="listMainly"/>
																									</td>								
															   							   							   																																						
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								问题的具体内容:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="问题的具体内容" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestIssueCont" id="manifestIssueCont"/>
																									</td>								
																	</tr>
									<tr>
															   							   							   																																																												
							   							   								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								业务主管 部门会签:</th>
																   								    <td width="39%">
								   								 								 
																											<input title="业务主管 部门会签" class="inputbox easyui-validatebox" data-options="validType:'maxLength[225]'" style="width: 99%;" type="text" name="manifestQian" id="manifestQian"/>
																									</td>								
															   							   							   																							</tr>
					</table>
			</form>
		
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
</body>
</html>