<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ page import="avicit.platform6.api.session.SessionHelper" %>
<%
	String importlibs = "common,tree,form";
	String currentOrgId = SessionHelper.getCurrentOrgIdentity(request);
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
<style type="text/css">
.ztree { 
    padding: 0px;
}
</style>
<script type="text/javascript">
    var curOrgId = '<%= currentOrgId%>';

	document.body.onload = function(){
	 	if (navigator.userAgent.indexOf('MSIE') >= 0) {
            if (CollectGarbage) {
                CollectGarbage(); //IE 特有 释放内存
            }
        }

	}
	if (!Array.prototype.indexOf) {
	    Array.prototype.indexOf = function(elt /*, from*/ ) {
	        var len = this.length >>> 0;
	        var from = Number(arguments[1]) || 0;
	        from = (from < 0) ?
	            Math.ceil(from) :
	            Math.floor(from);
	        if (from < 0)
	            from += len;
	        for (; from < len; from++) {
	            if (from in this &&
	                this[from] === elt)
	                return from;
	        }
	        return -1;
	    };
	}
</script>
</head>
<body>
<div class="easyui-layout" fit="true" >
		<div data-options="region:'west',split:false" style="padding:0px;overflow:auto;">
		 
			<!-- 	<div class="input-group  input-group-sm">
			      <input  class="form-control" placeholder="输入名称查询" type="text" id="txt" name="txt">
			      <span class="input-group-btn">
			        <button id="searchbtn" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
			      </span>
			    </div> -->
				<div>
					<ul id="treeDemo" class="ztree"></ul>
				</div>
		 
		</div>
		 
	</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 模块js -->
<script type="text/javascript" src="avicit/platform6/console/authuser/js/backMneuTree.js" ></script>
<script type="text/javascript">

   var userId = '${userId}';  
  function test(treeId, treeNode){
		if(treeNode){
			var frmWindow =  document.getElementById("iframeUserList").contentWindow;
			frmWindow.loadUserData(treeId, treeNode);
		}
	}	
	var backMneuTree;
	
	$(document).ready(function(){ 
		var param  =  '${backMenu}'; 
		var url =  "console/authuser/"+param;
		backMneuTree = new backMneuTree('treeDemo',url,'form','txt','searchbtn',userId,param);
		backMneuTree.init();
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
</script>

</body>
</html>