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
			<input type="hidden" name="id" value="<c:out value='${leagueOrganMemberDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${leagueOrganMemberDTO.version}'/>"/>
			<input type="hidden" name="leagueId" value="<c:out  value='${leagueOrganMemberDTO.leagueId}'/>" />
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">员工姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId" value="<c:out value='${leagueOrganMemberDTO.userId}'/>">
							<input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias" value="<c:out value='${leagueOrganMemberDTO.userIdAlias}'/>" readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">所在单位:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${leagueOrganMemberDTO.deptId}'/>">
							<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" value="<c:out value='${leagueOrganMemberDTO.deptIdAlias}'/>" readonly="readonly">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userPost">所在工会职务:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="userPost" id="userPost" title="" isNull="true" lookupCode="TU_ORGAN_POST" defaultValue="${leagueOrganMemberDTO.userPost}" />
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="leagueOrganMember_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="leagueOrganMember_closeForm">返回</a>
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
		
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		
		function closeForm(){
			parent.leagueOrganMember.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
  		 	$('#leagueOrganMember_saveForm').addClass('disabled').unbind("click");	
			parent.leagueOrganMember.save($('#form'),"edit");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.leagueOrganMember.formValidate($('#form'));
			//保存按钮绑定事件
			$('#leagueOrganMember_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#leagueOrganMember_closeForm').bind('click', function(){
				closeForm();
			});
			
			$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias',selectModel:'single',deptidFiled:'deptId',deptNameFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			}); 
 
			$('#deptIdAlias').off('focus',function(e){
				new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			}); 
		});
	</script>
</body>
</html>

