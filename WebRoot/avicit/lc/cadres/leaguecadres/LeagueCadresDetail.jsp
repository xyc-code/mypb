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
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${leagueCadresDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${leagueCadresDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId" value="<c:out value='${leagueCadresDTO.userId}'/>">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias" readonly="readonly" value="<c:out value='${leagueCadresDTO.userIdAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">所在单位:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${leagueCadresDTO.deptId}'/>">
							<input class="form-control" type="text" id="deptIdAlias" name="deptIdAlias" readonly="readonly" value="<c:out value='${leagueCadresDTO.deptIdAlias}'/>">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leagueId">所在团组织:</label></th>
					<td>
							<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${leagueMemberDTO.deptId}'/>">
							<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" value="<c:out value='${leagueMemberDTO.deptIdAlias}'/>">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
					<th>
						<label for="cardId">身份证号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="cardId"  id="cardId" value="<c:out value='${leagueCadresDTO.cardId}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="nation">民族:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" value="<c:out value='${leagueCadresDTO.nation}'/>">
   					</td>
					<th>
						<label for="political">政治面貌:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="political"  id="political" value="<c:out value='${leagueCadresDTO.political}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fullEducation">全日制教育学历:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fullEducation"  id="fullEducation" value="<c:out value='${leagueCadresDTO.fullEducation}'/>">
   					</td>
					<th>
						<label for="fullUniversity">全日制教育学历:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="fullUniversity" id="fullUniversity" title="" isNull="true" lookupCode="LC_CARDES_FULL_EDUCATION" defaultValue="${leagueCadresDTO.fullUniversity}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="jobEducation">在职教育学历:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="jobEducation"  id="jobEducation" value="<c:out value='${leagueCadresDTO.jobEducation}'/>">
   					</td>
					<th>
						<label for="jobUniversity">在职教育毕业院校:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="jobUniversity" id="jobUniversity" title="" isNull="true" lookupCode="LC_CARDES_JOB_UNIVERSITY" defaultValue="${leagueCadresDTO.jobUniversity}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="post">团现任职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" value="<c:out value='${leagueCadresDTO.post}'/>">
   					</td>
					<th>
						<label for="postDate">任现职年月:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="postDate" id="postDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueCadresDTO.postDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="phone">办公电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="phone"  id="phone" value="<c:out value='${leagueCadresDTO.phone}'/>">
   					</td>
					<th>
						<label for="tel">移动电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" value="<c:out value='${leagueCadresDTO.tel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="mail">电子邮件:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="mail"  id="mail" value="<c:out value='${leagueCadresDTO.mail}'/>">
   					</td>
					<th>
						<label for="marks">备注:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="marks"  id="marks" value="<c:out value='${leagueCadresDTO.marks}'/>">
   					</td>
				</tr>
    		 <tr>
					<th>
						<label for="validFlag">是否有效:</label>
					</th>
					<td>
		<pt6:h5select css_class="form-control input-sm" name="validFlag"  id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" defaultValue="${leagueCadresDTO.validFlag}"/>
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="leagueCadres_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		function closeForm(){
			parent.leagueCadres.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#leagueCadres_closeForm').bind('click', function(){
				closeForm();
			});
		});
		//form控件禁用
		setFormDisabled();
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});
	</script>
</body>
</html>

