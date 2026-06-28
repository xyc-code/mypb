<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% 
 String importlibs = "common,tree,form";	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationManageSelect" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div data-options="region:'center',split:true,onResize:function(a){do_resize(a);}" style="width:300px;">
			<div class="easyui-layout" style="height: 100%; width: 100%">
				<div data-options="region:'north',border:'0px',split:false" style="height: 40px; width: 100%">
					<div class="input-group  input-group-sm" style="width: 97%">
						<input class="form-control" placeholder="回车查询" type="text"
							id="txt" name="txt"> <span class="input-group-btn">
							<button id="searchbtn" class="btn btn-default ztree-search"
								type="button">
								<span class="glyphicon glyphicon-search"></span>
							</button>
						</span>
					</div>
				</div>
				<div id="_tree-center" data-options="region:'center',width:'100%'"
					style="padding-right: 10px">
					<ul id="_ztree" class="ztree" style="width: 100%"></ul>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<!-- 模块js -->
	<script src="avicit/pb/organize/partyorganization/js/PartyOrganizationSelect.js" type="text/javascript"></script>
	<script type="text/javascript">
	var partyOrganization;
	function do_resize(a){
		$("#_tree-center").width(a-20);
		$(".layout-panel-north").width(a);
		$(".layout-panel-center").width(a-10);
	}
	$(document).ready(function(){
		partyOrganization = new PartyOrganization('_ztree','${url}','form','txt','searchbtn');
	    partyOrganization.init();
		$('.date-picker').datepicker();
		$('.time-picker').datetimepicker({
		    closeText:'确定',//关闭按钮文案
			oneLine:true,//单行显示时分秒
			showButtonPanel:true,//是否展示功能按钮面板
			showSecond:false,//是否可以选择秒，默认否
			beforeShow: function(selectedDate) {
				if($('#'+selectedDate.id).val()==""){
					$(this).datetimepicker("setDate", new Date());
					$('#'+selectedDate.id).val('');
				}
			}
		});
		//禁止用户手动输入时间绑定事件
		$('.date-picker').on('keydown',nullInput);
		$('.time-picker').on('keydown',nullInput);
	});
	
	//获取当前选中的节点
	function getSelectedNode(){
		return partyOrganization.getSelectedNode();
	}
</script>
</body>
</html>

