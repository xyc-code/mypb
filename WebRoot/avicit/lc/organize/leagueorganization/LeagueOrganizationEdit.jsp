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
			<input type="hidden" name="id" value="<c:out value='${leagueOrganizationDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${leagueOrganizationDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="leagueCode">团支部编号:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="leagueCode"  id="leagueCode" value="<c:out value='${leagueOrganizationDTO.leagueCode}'/>">
   					</td>
					<th width="15%">
						<label for="leagueName">团支部名称:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="leagueName"  id="leagueName" value="<c:out value='${leagueOrganizationDTO.leagueName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="parentId">上级团组织:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input type="hidden" name="parentId" id="parentId" 
							value="<c:out value='${leagueOrganizationDTO.parentId}'/>"/>
							<input class="form-control" placeholder="请选择父级节点" type="text" id="parentLeagueName" name="parentLeagueName" 
							value="<c:out value='${leagueOrganizationDTO.parentLeagueName}'/>" readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-search"></i>
							</span>
						</div>
   					</td>
					<th>
						<label for="treeSort">排序:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="treeSort" id="treeSort" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0" value="<c:out value='${leagueOrganizationDTO.treeSort}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="startDate">起始日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="startDate" id="startDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueOrganizationDTO.startDate}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="finishDate">届满日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="finishDate" id="finishDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueOrganizationDTO.finishDate}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
				<tr>
				<th width="15%"><label for="userDeptAlias"><span style="color:red">*</span>关联部门:</label></th>
		 <td width="34%">
			 <div class="input-group  input-group-sm">
				<input type="hidden"  id="attribute02" name="attribute02" value='${leagueOrganizationDTO.attribute02}'>
				<input class="form-control" placeholder="请选择部门" value='${leagueOrganizationDTO.attribute01}' type="text" id="attribute01" name="attribute01" >
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="leagueOrganization_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="leagueOrganization_closeForm">返回</a>
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
			textFiled:'attribute01', //必填参数，绑定部门选择框的显示名称字段
			defaultLoadDeptId:"",//选填，加载指定部门信息,配置部门id，多个部门用“;”或“,”分割
			deptLevel:"2",//选填，部门展开的层级，如果设置为2，则只展开两级。
			defaultOrgId:"",//选填，加载指定组织下部门信息,配置组织id，多个组织用“;”或“,”分割
			selectModel:"" //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”
		};
        //部门选择框初始化
		$('#attribute01').on('focus',function(e){
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
			parent.leagueOrganization.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        var attribute02 = $("#attribute02").val();
	        if(attribute02 == null ||attribute02 == ''){
	        	layer.alert('请填写部门！',{
					  icon: 7,
					  area: ['400px', ''],
					  closeBtn: 0,
					  btn: ['关闭'],
					  title:"提示"
					}
				);
	        	return false;
	        }
  		 	$('#leagueOrganization_saveForm').addClass('disabled').unbind("click");	
			parent.leagueOrganization.save($('#form'),"edit");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.leagueOrganization.formValidate($('#form'));
			//保存按钮绑定事件
			$('#leagueOrganization_saveForm').bind('click', function(){
				saveForm();
			}); 
			$('#parentLeagueName').closest('div').bind('click',function(){
				parent.leagueOrganization.updateParent();
		    });
			//返回按钮绑定事件
			$('#leagueOrganization_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

