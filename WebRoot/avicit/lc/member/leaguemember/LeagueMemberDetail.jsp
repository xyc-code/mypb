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
			<input type="hidden" name="id" value="<c:out value='${leagueMemberDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${leagueMemberDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId" value="<c:out value='${leagueMemberDTO.userId}'/>">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias" readonly="readonly" value="<c:out value='${leagueMemberDTO.userIdAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">所在单位:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${leagueMemberDTO.deptId}'/>">
							<input class="form-control" type="text" id="deptIdAlias" name="deptIdAlias" readonly="readonly" value="<c:out value='${leagueMemberDTO.deptIdAlias}'/>">
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
						<input type="hidden" name="leagueId"  id="leagueId" value="<c:out value='${leagueMemberDTO.leagueId}'/>"/>
						<input class="form-control" placeholder="请选择团支部" type="text" id="leagueIdAlias" name="leagueIdAlias" value="<c:out value='${leagueMemberDTO.leagueIdAlias}'/>">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
   					</td>
					<th>
						<label for="sex">性别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" defaultValue="${leagueMemberDTO.sex}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="birthday">出生年月:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="birthday" id="birthday" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueMemberDTO.birthday}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="post">职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" value="<c:out value='${leagueMemberDTO.post}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leaguePost">团组织职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="leaguePost"  id="leaguePost" value="<c:out value='${leagueMemberDTO.leaguePost}'/>">
   					</td>
					<th>
						<label for="inpartyDate">入党时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="inpartyDate" id="inpartyDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueMemberDTO.inpartyDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leagueStatus">团员状态:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="leagueStatus" id="leagueStatus" title="" isNull="true" lookupCode="LC_LEAGUE_MEMBER_STATUS" defaultValue="${leagueMemberDTO.leagueStatus}" />
   					</td>
					<th>
						<label for="incompanylcDate">转入公司团组织时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="incompanylcDate" id="incompanylcDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueMemberDTO.incompanylcDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="indeptlcDate">转入当前单位团组织时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="indeptlcDate" id="indeptlcDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueMemberDTO.indeptlcDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="cardId">身份证号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="cardId"  id="cardId" value="<c:out value='${leagueMemberDTO.cardId}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="nation">民族:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" value="<c:out value='${leagueMemberDTO.nation}'/>">
   					</td>
					<th>
						<label for="political">政治面貌:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="political"  id="political" value="<c:out value='${leagueMemberDTO.political}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="inleagueDate">入团时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="inleagueDate" id="inleagueDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${leagueMemberDTO.inleagueDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="education">文化程度:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="education" id="education" title="" isNull="true" lookupCode="LC_LEAGUE_MEMBER_EDUCATION" defaultValue="${leagueMemberDTO.education}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="phone">办公电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="phone"  id="phone" value="<c:out value='${leagueMemberDTO.phone}'/>">
   					</td>
					<th>
						<label for="tel">移动电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" value="<c:out value='${leagueMemberDTO.tel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="mail">电子邮件:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="mail"  id="mail" value="<c:out value='${leagueMemberDTO.mail}'/>">
   					</td>
					<th>
						<label for="marks">备注:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="marks"  id="marks" value="<c:out value='${leagueMemberDTO.marks}'/>">
   					</td>
				</tr>
    			 <tr>
					<th>
						<label for="validFlag">是否有效:</label>
					</th>
					<td>
		<pt6:h5select css_class="form-control input-sm" name="validFlag"  id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" defaultValue="${leagueMemberDTO.validFlag}"/>
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="leagueMember_closeForm">返回</a>
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
			parent.leagueMember.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#leagueMember_closeForm').bind('click', function(){
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

