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
	<link rel="stylesheet" type="text/css" href="avicit\platform6\console\demostorage\css\style.css" />
	<link rel="stylesheet" type="text/css" href="static/h5/layer-v2.3/layer/skin/layer.css">

	<link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css"/>
	<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/zTreeStyle.css" />
	<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/metro.css"/>
	<link rel="stylesheet" type="text/css" href="static/h5/select2/select2.css"/>
	<link rel="stylesheet" type="text/css" href="static/h5/skin/common.css"/>
	<link rel="stylesheet" type="text/css" href="static/h5/jquery-range/css/jquery.range.css" />
	<link rel="stylesheet" type="text/css" href="static/h5/switch/css/bootstrap-switch.css" />

	<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="avicit/platform6/console/demostorage/js/onlineapi.js"></script>
	<script type="text/javascript" src="avicit/platform6/console/demostorage/js/clipboard.min.js"></script>
</head>
<body class="easyui-layout" fit="true" style="text-align: center;">
	<div  style="width:700px;margin: 0 auto;">
		<form id='form'>
			<table class="form_commonTable">
				<tr>
					<th width="10%">
						<label >按日期查询:</label>
					</th >
					<td width="15%" colspan="2">
						<div class="input-group input-group-sm" style="float:right;">
							<input id="startDate" class="form-control Wdate" type="text" onclick="WdatePicker({maxDate:'#F{$dp.$D(\'endDate\')}',dateFmt:'yyyy年MM月'})"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th width="10%">
						<label >截至：</label>
					</th>
					<td width="15%" colspan="2">
						<div class="input-group input-group-sm" style="float:right;">
							<input id="endDate" class="form-control Wdate" type="text" onclick="WdatePicker({minDate:'#F{$dp.$D(\'startDate\')}',dateFmt:'yyyy年MM月'})"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<td colspan="2">
						<a id="mouseTips" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point"
						   role="button"> 打印</a>
					</td>
				</tr>
				<tr>
					<th width="10%">
						<label >公司党委委员:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text"  title="<c:out value='${map.gsDwWyCount}'/>"  name="userIdAlias" readonly="readonly" value="<c:out value='${map.gsDwWyCount}'/>">
						</div>
   					</td>
					<th width="10%">
						<label >公司纪委委员:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${map.jwPostCount}'/>">
						</div>
					</td>
					<th width="10%">
						<label >党组织总数:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text"  title="<c:out value='${map.partyOrgAllCount}'/>"  name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgAllCount}'/>">
						</div>
					</td>
					<th width="10%">
						<label >党员人数:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyCount}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="10%">
						<label >基层党委:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text"  title="<c:out value='${map.partyOrgJcdwCount}'/>"  name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgJcdwCount}'/>">
						</div>
					</td>
					<th width="10%">
						<label >党总支:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgDzzCount}'/>">
						</div>
					</td>
					<th width="10%">
						<label >党支部:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text"  title="<c:out value='${map.partyOrgZsdzbCount}'/>"  name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgZsdzbCount}'/>">
						</div>
					</td>
					<th width="10%">
						<label >下属党支部:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgXsdzbCount}'/>">
						</div>
					</td>
				</tr>
				<tr>
					<th width="10%">
						<label >基层纪委:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text"  title="<c:out value='${map.partyOrgZsjwCount}'/>"  name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgZsjwCount}'/>">
						</div>
					</td>
					<th width="10%">
						<label >党小组数:</label></th>
					<td width="15%">
						<div class="input-group input-group-sm">
							<input class="form-control" type="text" name="userIdAlias" readonly="readonly" value="<c:out value='${map.partyOrgXzCount}'/>">
						</div>
					</td>

				</tr>

			</table>
			<table class="form_commonTable" border="1">
				<tr>
					<th width="14%">
						<label >党组织选举类型</label></th>
					<th width="14%">
						<label >党组织总数</label></th>
					<th width="14%">
						<label >党委</label></th>
					<th width="14%">
						<label >纪委</label></th>
					<th width="14%">
						<label >党总支</label></th>
					<th width="14%">
						<label >党支部</label></th>
					<th width="14%">
						<label >下属党支部</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >换届:</label></th>
					<th width="14%">
						<label >${map.sessionHjOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionHjDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionHjJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionHjDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionHjDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionHjXsdzbCount}</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >补选</label></th>
					<th width="14%">
						<label >${map.sessionBxOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionBxDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionBxJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionBxDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionBxDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionBxXsdzbCount}</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >成立</label></th>
					<th width="14%">
						<label >${map.sessionClOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionClDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionClJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionClDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionClDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionClXsdzbCount}</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >更名</label></th>
					<th width="14%">
						<label >${map.sessionGmOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionGmDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionGmJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionGmDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionGmDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionGmXsdzbCount}</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >撤销</label></th>
					<th width="14%">
						<label >${map.sessionCxOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionCxDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionCxJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionCxDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionCxDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionCxXsdzbCount}</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >调整</label></th>
					<th width="14%">
						<label >${map.sessionTzOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionTzDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionTzJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionTzDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionTzDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionTzXsdzbCount}</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >备案</label></th>
					<th width="14%">
						<label >${map.sessionBaOrgCount}</label></th>
					<th width="14%">
						<label >${map.sessionBaDwCount}</label></th>
					<th width="14%">
						<label >${map.sessionBaJwCount}</label></th>
					<th width="14%">
						<label >${map.sessionBaDzzCount}</label></th>
					<th width="14%">
						<label >${map.sessionBaDzbCount}</label></th>
					<th width="14%">
						<label >${map.sessionBaXsdzbCount}</label></th>
				</tr>
				
			</table>
			<table class="form_commonTable" border="1" style="margin-top: 50px">
			<tr>
					<th width="14%">
						<label >委员分工</label></th>
					<th width="14%">
						<label >数量</label></th>
					<th width="14%">
						<label >委员分工</label></th>
					<th width="14%">
						<label >数量</label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >专职党组织书记</label></th>
					<th width="14%">
						<label ></label></th>
					<th width="14%">
						<label >兼职党组织书记</label></th>
					<th width="14%">
						<label ></label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >女书记</label></th>
					<th width="14%">
						<label ></label></th>
					<th width="14%">
						<label >纪委书记</label></th>
					<th width="14%">
						<label ></label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >组织委员</label></th>
					<th width="14%">
						<label ></label></th>
					<th width="14%">
						<label >宣传委员</label></th>
					<th width="14%">
						<label ></label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >纪检委员</label></th>
					<th width="14%">
						<label ></label></th>
					<th width="14%">
						<label >统战委员</label></th>
					<th width="14%">
						<label ></label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >青年委员</label></th>
					<th width="14%">
						<label ></label></th>
					<th width="14%">
						<label >保密委员</label></th>
					<th width="14%">
						<label ></label></th>
				</tr>
				<tr>
					<th width="14%">
						<label >党委委员</label></th>
					<th width="14%">
						<label ></label></th>
					<th width="14%">
						<label >纪委委员</label></th>
					<th width="14%">
						<label ></label></th>
				</tr>
				
			</table>
		</form>	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript" src="static/h5/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js"></script>
	<script type="text/javascript" src="avicit/platform6/console/user/js/jquery.form.js"></script>

	<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
	<script type="text/javascript" src="avicit/platform6/console/demostorage/js/ExtDataTree.js" ></script>
	<script type="text/javascript" src="static/h5/select2/select2.js"></script>
	<script src="static/h5/jquery-range/js/jquery.range.js"></script>
	<script src="static/h5/switch/js/bootstrap-switch.js" charset="utf-8"></script>
	<script type="text/javascript">

		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}

		//form控件禁用
		setFormDisabled();
		//取消日期选择框的禁用
		$("#startDate").removeAttr("disabled")
		$("#endDate").removeAttr("disabled")
		$('.input-group-addon').css('cursor',"");
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});
		$("#mouseTips").bind('click',function () {
			window.print();
		})

	</script>
</body>
</html>

