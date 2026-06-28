<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/pb/dyxfg/dynXfgFq/dynXfgFqController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
			<table class="form_commonTable">
				<tr>
					<th>
						<label for="fqCreaTime">发起日期:</label>
					</th>
					<td>
							<input class="form-control input-sm" disabled="disabled" type="text" value="${fqCreaTime}" name="fqCreaTime" id="fqCreaTime" />
					</td>
					<th>
						<label for="fqFromNo">表单编号:</label>
					</th>
					<td>
						<input class="form-control input-sm" disabled="disabled" value="${fqFromNo}"  type="text" name="fqFromNo"  id="fqFromNo" />
					</td>

				</tr>
				<tr>
					<th>
						<label for="fqUser">发起人:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" disabled="disabled" value="${fqUser}" name="fqUser"  id="fqUser" />
					</td>
					<th>
						<label for="fqTel">发起人联系方式:</label>
					</th>
					<td>
						<input class="form-control input-sm" value="${fqTel}" type="text" name="fqTel"  id="fqTel" />
					</td>

				</tr>
				<tr>
					<th>
						<label for="fqPartyName">党组织名称:</label>
					</th>
					<td>
						<input class="form-control input-sm" disabled="disabled" value="${fqPartyName}" type="text" name="fqPartyName"  id="fqPartyName" />
					</td>
					<th>
						<label for="fqPartyType">党组织类型:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" defaultValue='${fqPartyType}' name="fqPartyType" id="fqPartyType" title="党组织类型" isNull="true" lookupCode="PARTY_ORG_TYPE" />
					</td>
				</tr>
				<tr>
					<th>
						<label for="fqTitle">标题:</label>
					</th>
					<td colspan="3">
						<input required class="form-control input-sm" type="text" name="fqTitle"  id="fqTitle" />
					</td>
				</tr>
				<tr>
					<th width="15%">
						<label for="fqCrerDateBegin">时间节点起:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input required class="form-control date-picker" type="text" name="fqCrerDateBegin" id="fqCrerDateBegin" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="fqCrerDateEnd">时间节点至:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input required class="form-control date-picker" type="text" name="fqCrerDateEnd" id="fqCrerDateEnd" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="">文件:</label>
					</th>
					<td colspan="3">
						<a id="ZWHJLFJ" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style="display: inline-block;" role="button" title="模板下载"> <span class="fa fa-fw fa-download"></span> 模板下载 </a>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqHdkzDateBegin">活动开展时间起:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input required class="form-control date-picker" type="text" name="fqHdkzDateBegin" id="fqHdkzDateBegin" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="fqHdkzDateEnd">活动开展时间止:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input required class="form-control date-picker" type="text" name="fqHdkzDateEnd" id="fqHdkzDateEnd" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
					</td>
				</tr>
				<tr>
					<th>
						<label for="fqPartyOrg">发送党组织:</label>
					</th>
					<td colspan="3">
						<input required class="form-control input-sm" type="text" name="fqPartyOrg"  id="fqPartyOrg" />
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqPxsj">先锋岗评选时间段:</label>
					</th>
					<td colspan="3">
						<input class="form-control input-sm" type="text" name="fqPxsj" disabled value="${fqPxsj}"  id="fqPxsj" />
   					</td>

				</tr>
			</table>
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="发起流程" id="dynXfgFq_saveForm">发起流程</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynXfgFq_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		//遮罩
		var maskId = null;
		//初始化时间控件
		function initDateSelect(){
			$('.date-picker').datepicker({
				beforeShow: function(selectedDate) {
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.time-picker').datetimepicker({
				oneLine:true,//单行显示时分秒
				closeText:'确定',//关闭按钮文案
				showButtonPanel:true,//是否展示功能按钮面板
				showSecond:false,//是否可以选择秒，默认否
				beforeShow: function(selectedDate) {
					if($('#'+selectedDate.id).val()==""){
							$(this).datetimepicker("setDate", new Date());
							$('#'+selectedDate.id).val('');
					}
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		}
	
		function closeForm(){
			parent.closeDialog("insert");
		}
		function closeTable() {
			parent.closeTable();
		}
		function open(fromid,id){
			layer.open({
				type: 2,
				area: ['80%', '80%'],
				title: '模版下载',
				skin: 'bs-modal',
				maxmin: false,
				content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId='+fromid+'&id='+id
			});

		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynXfgFq_saveForm').addClass('disabled').unbind("click");
			$.ajax({
				url: 'avicit/pb/dyxfg/dynXfgFq/dynXfgFqController/operation/saveAndStartProcess',
				type: 'POST',
				data:{
					processDefId:"2c908c1d8e74b82b018e74cd3d2c09da-1",
					formCode:"partyCommandos",
					jsonString:"",
					data :JSON.stringify(serializeObject($("#form")))
				},
				dataType: 'JSON',
				success: function(r) {
					closeTable();
					closeForm();
				}
			});
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			//保存按钮绑定事件
			$('#dynXfgFq_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynXfgFq_closeForm').bind('click', function(){
				closeForm();
			});
			//模版下载绑定事件
			$("#ZWHJLFJ").bind('click',function () {
				open("948e83e3828f72f30182a56fc1977f03","948e83e38e73d57f018e74c7bf8c19df");
			})
			$('#fqPartyOrg').on('focus',function(e){
				var selectIndex = layer.open({
					type: 2,
					area: ['50%', '50%'],
					title: '选择发送党组织',
					skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
					maxmin: false, //开启最大化最小化按钮
					content:  'platform/avicit/pb/dyxfg/dynXfgFq/dynXfgFqController/toDynXfgFqManage',
					btn: ['确定', '取消'],
					yes: function(index, layero){
						//debugger;
						var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
						var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
						var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
						var selectedNewNode = iframeWin.getSelectedNode();
						if (selectedNewNode.attributes.partyCode == '1') {

							layer.alert('所选择节点不能是根节点！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});

							return;
						}
						// $("#partyId").val(selectedNewNode.id);
						$("#fqPartyOrg").val(selectedNewNode.text);
						layer.close(layer.index);
						layer.close(selectIndex);
					},
					btn2: function(index, layero){
						layer.close(index);
					}
				});

				this.blur();
				nullInput(e);
			});
		});
	</script>
</body>
</html>

