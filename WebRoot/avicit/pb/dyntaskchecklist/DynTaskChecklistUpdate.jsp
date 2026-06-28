<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String importlibs = "common,form";
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "dyntaskchecklist/dynTaskChecklistController/operation/Edit/id" -->
<title>更换责任人或责任领导</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>


</head>
<body class="easyui-layout" fit="true" style="visibility: hidden;">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="version"
				value='<c:out  value='${dynTaskChecklistDTO.version}'/>' /> <input
				type="hidden" name="id"
				value='<c:out  value='${dynTaskChecklistDTO.id}'/>' />


			<table class="form_commonTable">
				 <tr>

					<th width="10%"
						style="word-break: break-all; word-warp: break-word;">责任人:</th>
					<td width="39%">
						<div class="input-group input-group-sm">
							<input type="hidden" name="attribute05" id="attribute05" value='<c:out  value='${dynTaskChecklistDTO.attribute05}'/>' />
							<input type="hidden" name="manifestPosen" id="manifestPosen" value='<c:out  value='${dynTaskChecklistDTO.manifestPosen}'/>' />
							<input class="form-control" placeholder="请选择用户" type="text" id="manifestPosenAlias" name="manifestPosenAlias" value='<c:out value='${manifestPosenAlias}'/>' />
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>


					</td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;">责任领导:</th>
					<td width="39%">
						<div class="input-group input-group-sm">
							<input type="hidden" name="attribute06" id="attribute06" value='<c:out  value='${dynTaskChecklistDTO.attribute06}'/>' />
							<input type="hidden" name="manifestLeadership" id="manifestLeadership" value='<c:out  value='${dynTaskChecklistDTO.manifestLeadership}'/>' />
							<input class="form-control" placeholder="请选择用户" type="text" id="manifestLeadershipAlias" name="manifestLeadershipAlias" value='<c:out value='${manifestLeadershipAlias}'/>' />
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" onclick="saveForm();" title="保存" id="saveButton">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" onclick="closeForm();" id="closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>


	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script src="avicit/pb/dyntaskchecklist/js/DynTaskChecklist.js" type="text/javascript"></script>
	<script type="text/javascript">
	$(function() {


	$('#manifestPosenAlias').on('focus',function(e){
		new H5CommonSelect({
			type:'userSelect',
			idFiled:'manifestPosen',
			textFiled:'manifestPosenAlias',
			defaultOrgId:" ",//选填，加载指定组织用户信息,配置组织id，多个组织用“;”或“,”分割
			defaultLoadDeptId:" ",//选填，加载指定部门用户信息,配置部门id，多个部门用“;”或“,”分割
			defaultLoadGroupId:" ",//选填，加载指定群组用户信息,配置群组id，多个群组用“;”或“,”分割
			defaultLoadRoleId:" ",//选填，加载指定角色用户信息,配置角色id，多个角色用“;”或“,”分割
			defaultLoadPositionId:" ",//选填，加载指定岗位用户信息,配置岗位id，多个岗位用“;”或“,”分割
			secretLevel:'',//选填，设置密级等级，根据密级等级过滤用户
			selectModel:'single',  //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”,
			deptidFiled:"attribute05",
			deptNameFiled:''//选填，选择用户时回填部门名称信息
		});
		this.blur();
		nullInput(e);
	});

	$('#manifestLeadershipAlias').on('focus',function(e){
		new H5CommonSelect({
			type:'userSelect',
			idFiled:'manifestLeadership',
			textFiled:'manifestLeadershipAlias',
			defaultOrgId:"",//选填，加载指定组织用户信息,配置组织id，多个组织用“;”或“,”分割
			defaultLoadDeptId:" ",//选填，加载指定部门用户信息,配置部门id，多个部门用“;”或“,”分割
			defaultLoadGroupId:" ",//选填，加载指定群组用户信息,配置群组id，多个群组用“;”或“,”分割
			defaultLoadRoleId:" ",//选填，加载指定角色用户信息,配置角色id，多个角色用“;”或“,”分割
			defaultLoadPositionId:" ",//选填，加载指定岗位用户信息,配置岗位id，多个岗位用“;”或“,”分割
			secretLevel:'',//选填，设置密级等级，根据密级等级过滤用户
			selectModel:'single',  //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”,
			deptidFiled:"attribute06",
			deptNameFiled:''//选填，选择用户时回填部门名称信息
		});
		this.blur();
		nullInput(e);
	});
	})

	function closeForm() {
		parent.window.layerClose();
	}

	function saveForm(){
		var isValidate = $("#form").validate();
		if (!isValidate.checkForm()) {
			isValidate.showErrors();
			//表单字段较多时，直接定位到当前字段
			$(isValidate.errorList[0].element).focus();
			return false;
		}

		var form = serializeObject($('#form'));
		$('#saveButton').addClass('disabled').unbind("click");
		$.ajax({
			url:"platform/avicit/pb/dyntaskchecklist/dynTaskChecklistController/operation/updateZrrOrZrLd",
			data : {data :JSON.stringify(form)},
			type : 'post',
			dataType : 'json',
			success:function(){
				parent.window.layerClose();
				parent.tableToolbarButtonb2dfb968a8b85141f588d358787d0f924b9aReload();
			}
		});



		//parent.partyMember.save($('#form'),"edit");
	}

	document.ready = function() {
	document.body.style.visibility = 'visible';
	}
	</script>
</body>
</html>