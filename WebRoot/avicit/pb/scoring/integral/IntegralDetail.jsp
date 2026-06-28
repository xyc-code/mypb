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
			<input type="hidden" name="id" value="<c:out value='${integralDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${integralDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="10%">
						<label for="">第一季度基础分扣分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input    type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.oneFoundations}'/>">

						</div>
   					</td>
					<th width="10%">
						<label for="">第一季度基础分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" title="${integralDTO.map.oneFoundationsContent}"  type="text" value="<c:out value='${integralDTO.map.oneFoundationsContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第一季度履职分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input type="text" class="form-control" data-max="100.00" data-precision="2" value="${integralDTO.map.onePersonal}" >
						</div>
					</td>
					<th width="10%">
						<label for="">第一季度履职分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input   class="form-control input-sm" title="${integralDTO.map.onePersonalContent}"  type="text" value="<c:out value='${integralDTO.map.onePersonalContent}'/>">
						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第一季度奖励加分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.oneReward}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第一季度奖励加分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm ">
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.oneRewardContent}" value="<c:out value='${integralDTO.map.oneRewardContent}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第一季度惩处减分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.onePunish}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第一季度惩处减分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.onePunishContent}" value="<c:out value='${integralDTO.map.onePunishContent}'/>">

						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第二季度基础分扣分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.twoFoundations}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第二季度基础分扣分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.twoFoundationsContent}"  value="<c:out value='${integralDTO.map.twoFoundationsContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第二季度履职分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.twoPersonal}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第二季度履职分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.twoPersonalContent}"  value="<c:out value='${integralDTO.map.twoPersonalContent}'/>">
						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第二季度奖励加分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.twoReward}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第二季度奖励加分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.twoRewardContent}" value="<c:out value='${integralDTO.map.twoRewardContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第二季度惩处减分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.twoPunish}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第二季度惩处减分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.twoPunishContent}" value="<c:out value='${integralDTO.map.twoPunishContent}'/>">
						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第三季度基础分扣分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.threeFoundations}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第三季度基础分扣分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text"  title="${integralDTO.map.threeFoundationsContent}"  value="<c:out value='${integralDTO.map.threeFoundationsContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第三季度履职分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.threePersonal}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第三季度履职分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.threePersonalContent}" value="<c:out value='${integralDTO.map.threePersonalContent}'/>">
						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第三季度奖励加分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.threeReward}'/>">

						</div>

					</td>
					<th width="10%">
						<label for="">第三季度奖励加分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.threeRewardContent}" value="<c:out value='${integralDTO.map.threeRewardContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第三季度惩处减分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.threePunish}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第三季度惩处减分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.threePunishContent}" value="<c:out value='${integralDTO.map.threePunishContent}'/>">
						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第四季度基础分扣分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.fourFoundations}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第四季度基础分扣分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.fourFoundationsContent}" value="<c:out value='${integralDTO.map.fourFoundationsContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第四季度履职分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.fourPersonal}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第四季度履职分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.fourPersonalContent}" value="<c:out value='${integralDTO.map.fourPersonalContent}'/>">
						</div>
					</td>

				</tr>
				<tr>
					<th width="10%">
						<label for="">第四季度奖励加分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.fourReward}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第四季度奖励加分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.fourRewardContent}" value="<c:out value='${integralDTO.map.fourRewardContent}'/>">
						</div>
					</td>
					<th width="10%">
						<label for="">第四季度惩处减分:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  type="text" class="form-control" data-max="100.00" data-precision="2" value="<c:out value='${integralDTO.map.fourPunish}'/>">

						</div>
					</td>
					<th width="10%">
						<label for="">第四季度惩处减分备注:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm " >
							<input  class="form-control input-sm" type="text" title="${integralDTO.map.fourPunishContent}" value="<c:out value='${integralDTO.map.fourPunishContent}'/>">
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="integral_closeForm">返回</a>
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
			parent.integral.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#integral_closeForm').bind('click', function(){
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

