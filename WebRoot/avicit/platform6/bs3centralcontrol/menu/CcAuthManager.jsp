<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table";	
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>集中授权管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'west',split:true,title:'应用列表',collapsible:false" style="height:0; overflow:hidden; font-size:0;width:170px;">
    <div id="tableToolbarM" class="toolbar">
        <div class="toolbar-left">
            <div class="input-group  input-group-sm">
                <input  class="form-control" placeholder="输入名称查询" type="text" id="appSearchInput" name="txt">
                <span class="input-group-btn">
                            <button id="appSearch" class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                        </span>
            </div>
        </div>
    </div>
    <div  id='mdiv' style="overflow:hidden;">
        <table id="jqGridApp"></table>
    </div>
</div>
<div id="center" data-options="region:'center',split:true" style="height: auto">
    <ul id="myTab" class="nav nav-tabs">
		<li class="active"><a rel='portal_ifrm' href="#portal" data-toggle="tab">前台菜单</a></li>
		<li><a rel='console_ifrm' href="#console" data-toggle="tab">后台菜单</a></li>
	</ul>
	<div id="myTabContent" class="tab-content" style="height: calc(100% - 40px)">
		<div class="tab-pane fade in active" id="portal"  style="height: 100%">
			<iframe id='portal_ifrm' name='portal_ifrm' src='' frameborder='0'  style="width:100%;height:100%;"></iframe>
		</div>
		<div class="tab-pane fade" id="console" style="height: 100%">
			<iframe id="console_ifrm" name="console_ifrm" src="" frameborder="0" style="width:100%;height:100%;"></iframe>
		</div>
	</div>
</div>
</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/bs3centralcontrol/appliaction/js/AppList.js" type="text/javascript"></script>

<script type="text/javascript">
    $('#mdiv').height(document.documentElement.clientHeight-38);
    var _map={};
    var appid="";
    var ifrm={'console_ifrm':'platform/console/auth/unified/admin?appid='+appid,
                  'portal_ifrm':'platform/console/auth/unified?appid='+appid};
    $(function(){
        sysAppTree = new AppList('jqGridApp','1','searchDialog','form','keyWord');
        sysAppTree.setOnSelect(function(appId){
            appid=appId;
              var portalsrc="platform/console/auth/unified?appid="+appId;
             $("#portal_ifrm").attr("src",portalsrc);
        });
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            if(!$('#'+e.target.rel).attr('src')){
                $('#'+e.target.rel).attr('src',ifrm[e.target.rel]);
            }
            $('#'+e.target.rel).load(function(){
                $('#console_ifrm').contents().find("#mdiv").height(document.documentElement.clientHeight-$('#console_ifrm').contents().find("#tableToolbarGroup").height()-105)
            })
        });

        $('#portal_ifrm').load(function(){
            $('#portal_ifrm').contents().find("#mdiv").height(document.documentElement.clientHeight-$('#portal_ifrm').contents().find("#tableToolbarGroup").height()-100)
        })
    });

</script>
</html>