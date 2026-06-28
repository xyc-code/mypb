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
<!-- ControllerPath = "jg/jgpaymentplan/jgPaymentPlanController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
				<table class="form_commonTable">
					<tr>
											
																																																								  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								密级:</th>
								 								   								    <td width="39%">
								   								 														 		     						 		      <pt6:syslookup name="secretLevel" id="secretLevel" title="密级" isNull = "true" lookupCode="PLATFORM_FILE_SECRET_LEVEL" dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                      </pt6:syslookup>
                                                                      								</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								项目ID:</th>
								 								   								    <td width="39%">
								   								 																											<input title="项目ID" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width:99%;" type="text" name="projectId" id="projectId"/>
																									</td>								
																	</tr>
									<tr>
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								下达批次:</th>
								 								   								    <td width="39%">
								   								 																											<input title="下达批次" class="inputbox easyui-validatebox" data-options="validType:'maxLength[100]'" style="width:99%;" type="text" name="publishNo" id="publishNo"/>
																									</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								下达文号:</th>
								 								   								    <td width="39%">
								   								 																											<input title="下达文号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[100]'" style="width:99%;" type="text" name="publishCode" id="publishCode"/>
																									</td>								
																	</tr>
									<tr>
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								下达日期:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="下达日期" class="easyui-datetimebox"  editable="false" style="width: 99%;" type="text" name="publishDate" id="publishDate"/>
								  																	</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								请款类型:</th>
								 								   								    <td width="39%">
								   								 														 		     						 		      <pt6:syslookup name="paymentType" id="paymentType" title="请款类型" isNull = "true" lookupCode="JG_PAYMENT_TYPE" dataOptions="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">
                                      </pt6:syslookup>
                                                                      								</td>								
																	</tr>
									<tr>
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								请款年度:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="请款年度" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[4]'" style="width: 99%;" type="text" name="paymentYear" id="paymentYear"/>	
																									</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								请款月份:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="请款月份" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[2]'" style="width: 99%;" type="text" name="paymentMonth" id="paymentMonth"/>	
																									</td>								
																	</tr>
									<tr>
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								中央预算内资金:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="中央预算内资金" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[8]'" style="width: 99%;" type="text" name="budgetFund" id="budgetFund"/>	
																									</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								配套资金:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="配套资金" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[8]'" style="width: 99%;" type="text" name="budgetSpecialFund" id="budgetSpecialFund"/>	
																									</td>								
																	</tr>
									<tr>
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								银行贷款:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="银行贷款" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[8]'" style="width: 99%;" type="text" name="bankLoans" id="bankLoans"/>	
																									</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								自筹资金:</th>
								 								   								    <td width="39%">
								   								 																									  		<input title="自筹资金" class="easyui-numberbox easyui-validatebox" data-options="validType:'maxLength[8]'" style="width: 99%;" type="text" name="selfFund" id="selfFund"/>	
																									</td>								
																	</tr>
									<tr>
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								状态(10编制中,20已提交):</th>
								 								   								    <td width="39%">
								   								 																											<input title="状态(10编制中,20已提交)" class="inputbox easyui-validatebox" data-options="validType:'maxLength[10]'" style="width:99%;" type="text" name="status" id="status"/>
																									</td>								
															  							  							  																																						  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								备注:</th>
								 								   								    <td width="39%">
								   								 																											<input title="备注" class="inputbox easyui-validatebox" data-options="validType:'maxLength[3900]'" style="width:99%;" type="text" name="remark" id="remark"/>
																									</td>								
																	</tr>
									<tr>
															  							  							  																																																																																																																																																															  							  								<th width="10%" style="word-break:break-all;word-warp:break-word;">
																								创建人所属部门）:</th>
								 								   								    <td width="39%">
								   								 																											<input title="创建人所属部门）" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width:99%;" type="text" name="createdDept" id="createdDept"/>
																									</td>								
															  							  							  																																		</tr>
					</table>
			</form>
			<jsp:include page="/avicit/platform6/modules/system/swfupload/swfEditInclude.jsp">
            <jsp:param name="file_size_limit" value="5000MB" />
            <jsp:param name="file_types" value="*.*" />
            <jsp:param name="file_upload_limit" value="10" />
            <jsp:param name="save_type" value="true" /> 
            <jsp:param name="form_id" value="" />
	        <jsp:param name="form_code" value="jgPaymentPlan" />
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
	var attachBusinessId = "";
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
																																																																																																																																																																																																																																																																																																																																		
	});
	function closeForm(){
		parent.jgPaymentPlan.closeDialog("#insert");
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
		      parent.jgPaymentPlan.save(objectValues,callback);
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