<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "dyntype/dynTypeController/operation/Edit/id" -->
<title>编辑</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<table class="form_commonTable">
			<div style="text-align: center">
			<h1>周报审核权限分发 </h1><span style="color:red">*平台管理员账号拥有全部权限</span>
			</div>
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklySearch">搜索周报按钮:</label></th>
					<td width="39%"><input type="hidden" value="${Type.weeklySearch}"  id="weeklySearch" name="weeklySearch">
			  <input class="form-control" placeholder="为空则不设置权限" type="text" id="userIdSearch" ></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyProcess">发起流程按钮:</label></th>
					<td width="39%">
					<input type="hidden" value="${Type.weeklyProcess}"  id="weeklyProcess" name="weeklyProcess">
			  <input class="form-control"  placeholder="为空则无人有权限" type="text" id="userIdProcess" >
					</td>
				</tr>
				<tr>

					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyPlanSearch">搜索月计划按钮:</label></th>
					<td width="39%">
				<input type="hidden" value="${Type.weeklyPlanSearch}"  id="weeklyPlanSearch" name="weeklyPlanSearch">
			  <input class="form-control"   placeholder="为空则不设置权限" type="text" id="userIdPlanSearch" ></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyDistribute">分发流程按钮:</label></th>
					<td width="39%">
					<input type="hidden" value="${Type.weeklyDistribute}"  id="weeklyDistribute" name="weeklyDistribute">
			  <input class="form-control" placeholder="为空则不设置权限" type="text" id="userIdDistribute" ></td>
				</tr>
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyDelete">删除按钮:</label></th>
					<td width="39%">
					<input type="hidden" value="${Type.weeklyDelete}"  id="weeklyDelete" name="weeklyDelete">
			  <input class="form-control"  placeholder="为空则不设置权限" type="text" id="userIdDelete" ></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyDistribute">分发流程人员按钮:</label></th>
					<td width="39%">
					<input type="hidden" value="${Type.weeklyDistributePosen}"  id="weeklyDistributePosen" name="weeklyDistributePosen">
			  <input class="form-control"  placeholder="为空则不设置默认人员" type="text" id="userIdDistributePosen" ></td>			
				</tr>
				</table>
				<table class="form_commonTable">
				<div style="text-align: center"> <h1>周报上报权限分发</h1></div>
				<tr>

					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyDeleteSon">删除按钮:</label></th>
					<td width="39%">
						<input type="hidden" value="${Type.weeklyDeleteSon}"  id="weeklyDeleteSon" name="weeklyDeleteSon">
			  <input class="form-control"  placeholder="为空则不设置权限" type="text" id="userIdDeleteSon" ></td>			
				<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklySearchSon">搜索周报按钮:</label></th>
					<td width="39%">
					
					<input type="hidden"  value="${Type.weeklySearchSon}" id="weeklySearchSon" name="weeklySearchSon">
			  <input class="form-control"  placeholder="为空则不设置权限" type="text" id="userIdSearchSon" ></td>						
				</tr>
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyPlanSearchSon">搜索月计划按钮:</label></th>
					<td width="39%">
					<input type="hidden"  value="${Type.weeklyPlanSearchSon}" id="weeklyPlanSearchSon" name="weeklyPlanSearchSon">
			  <input class="form-control"  placeholder="为空则不设置权限" type="text" id="userIdPlanSearchSon" ></td>						
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="weeklyProcesssSon">发起流程按钮:</label></th>
					<td width="39%">
					<input type="hidden"  value="${Type.weeklyProcesssSon}" id="weeklyProcesssSon" name="weeklyProcesssSon">
			  <input class="form-control"  placeholder="为空则无人有权限" type="text" id="userIdProcesssSon" ></td>						</td>

				</tr>
</table>

		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm"
				style="border: 0; cellspacing: 1; width: 100%">
				<tr>
					<td width="50%" style="padding-right: 4%;" align="right"><a
						href="javascript:void(0)"
						class="btn btn-primary form-tool-btn typeb btn-sm" role="button"
						title="保存" id="dynType_saveForm">保存</a>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
	var type = '${Type}'
		function saveForm() {
		//限制保存按钮多次点击
		$('#dynType_saveForm').addClass('disabled');
			var isValidate = $("#form").validate();
			if (!isValidate.checkForm()) {
				isValidate.showErrors();
				return false;
			}
			var from = $('#form').serializeArray();
			var obj = {}; 
			  $.each(from, function(index, field) {
	                obj[field.name] = field.value; //通过变量，将属性值，属性一起放到对象中
	            }) 
	            $.ajax({
                    type: "GET",
                    url: "platform/avicit/weekly/weeklyController/update/type",
                    async: true,
                    contentType: 'application/json',
                    dataType: 'JSON',
                    data: {json:JSON.stringify(obj)},//将对象转为json字符串
                    success: function(obj) {
                        if(obj.f==true){
                        	location.reload();
                        }else{
                        	layer.alert('修改失败', {
		    					  icon: 7,	
		    					  area: ['400px', ''], //宽高
		    					  closeBtn: 0,
		    					  btn: ['关闭'],
		    					  title:"提示"
		    					})	
                        }
                    }
                });
	            $('#dynType_saveForm').removeClass("disabled");
		}

		$(document).ready(function() {
			//保存按钮绑定事件
			$('#dynType_saveForm').bind('click', function() {
				saveForm();
			});
			$('.form-control').on('focus',function(e){
				//绑定点击事件
				bindclass($(this).prev(),e,$(this).attr("id"))			
			});
			function bindclass(that,e,id){
				var userInfoAll = {
						type:'userSelect', //必填参数，声明控件类型
						idFiled:that.attr('id'),  //必填参数，绑定用户选择框的id字段
						textFiled:id, //必填参数，绑定用户选择框的显示名称字段
						defaultOrgId:"",//选填，加载指定组织用户信息,配置组织id，多个组织用“;”或“,”分割
						defaultLoadDeptId:" ",//选填，加载指定部门用户信息,配置部门id，多个部门用“;”或“,”分割
						defaultLoadGroupId:" ",//选填，加载指定群组用户信息,配置群组id，多个群组用“;”或“,”分割
						defaultLoadRoleId:"1",//选填，加载指定角色用户信息,配置角色id，多个角色用“;”或“,”分割
						defaultLoadPositionId:" ",//选填，加载指定岗位用户信息,配置岗位id，多个岗位用“;”或“,”分割
						secretLevel:'1',//选填，设置密级等级，根据密级等级过滤用户
						selectModel:'multi',  //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”
					};
				new H5CommonSelect(userInfoAll);
				that.blur();
				nullInput(e);
			}

			$('.date-picker').on('keydown', nullInput);
			$('.time-picker').on('keydown', nullInput);
		});
	</script>
</body>
</html>