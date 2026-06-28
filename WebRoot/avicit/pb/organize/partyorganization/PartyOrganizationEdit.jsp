<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>编辑</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${partyOrganizationDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${partyOrganizationDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="partyCode">党组织编号:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="partyCode"  id="partyCode" value="<c:out value='${partyOrganizationDTO.partyCode}'/>">
   					</td>
					<th width="15%">
						<label for="partyName">党组织名称:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="partyName"  id="partyName" value="<c:out value='${partyOrganizationDTO.partyName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="parentId">上级党组织:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input type="hidden" name="parentId" id="parentId" 
							value="<c:out value='${partyOrganizationDTO.parentId}'/>"/>
							<input class="form-control" placeholder="请选择父级节点" type="text" id="parentPartyName" name="parentPartyName" 
							value="<c:out value='${partyOrganizationDTO.parentPartyName}'/>" readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-search"></i>
							</span>
						</div>
   					</td>
					<th>
						<label for="treeSort">排序:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="treeSort" id="treeSort" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0" value="<c:out value='${partyOrganizationDTO.treeSort}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
					<tr>
				<th>
					<label for="attribute01">党组织类型:</label>
				</th>
				<td>
							<pt6:h5radio css_class="radio-inline"  name="attribute01"  title=""  canUse="0" lookupCode="PARTY_ORG_TYPE" defaultValue="${partyOrganizationDTO.attribute01}" />
				</td>
				<th width="15%"><label for="userDeptAlias">关联部门:</label></th>
		 <td width="34%">
			 <div class="input-group  input-group-sm">
				<input type="hidden"  id="attribute02" name="attribute02" value='${partyOrganizationDTO.attribute02}'>
				<input class="form-control" placeholder="请选择部门" value='${partyOrganizationDTO.attribute03}' type="text" id="attribute03" name="attribute03" >
				<span class="input-group-addon"><i class="glyphicon glyphicon-equalizer"></i></span>
				</div>
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="partyOrganization_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="partyOrganization_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
	var deptInfoAll = {
			type:'deptSelect', //必填参数，声明控件类型
			idFiled:'attribute02',  //必填参数，绑定部门选择框的id字段
			textFiled:'attribute03', //必填参数，绑定部门选择框的显示名称字段
			defaultLoadDeptId:"",//选填，加载指定部门信息,配置部门id，多个部门用“;”或“,”分割
			deptLevel:"2",//选填，部门展开的层级，如果设置为2，则只展开两级。
			defaultOrgId:"",//选填，加载指定组织下部门信息,配置组织id，多个组织用“;”或“,”分割
			selectModel:"" //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”
		};
        //部门选择框初始化
		$('#attribute03').on('focus',function(e){
			new H5CommonSelect(deptInfoAll);
			this.blur();
			nullInput(e);
		});  
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
		
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		
		function closeForm(){
			parent.partyOrganization.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
  		 	$('#partyOrganization_saveForm').addClass('disabled').unbind("click");	
			parent.partyOrganization.save($('#form'),"edit");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.partyOrganization.formValidate($('#form'));
			//保存按钮绑定事件
			$('#partyOrganization_saveForm').bind('click', function(){
				saveForm();
			}); 
			$('#parentPartyName').closest('div').bind('click',function(){
				parent.partyOrganization.updateParent();
		    });
			//返回按钮绑定事件
			$('#partyOrganization_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

