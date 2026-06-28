<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>用户权限</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"> 
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
 <style type="text/css">
	 html,body{
		 width: 100%;
		 height: 100%;
	 }

/* .ui-jqgrid-bdiv{
 height: 525px !important;
} */
.layout-split-west {
    border-right: 1px solid #e8e8e8 !important;
}

.ant-tag .ant-tag-green {
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
    border: solid 1px;
    padding: 2px;
    border-radius: 5px;
    margin-right: 3px;
}
.ztree li a.curSelectedNode{
 	background-color: red !important;
	color:red !important; 
	border:0;
}
.ztree li span.button.switch {
    color: red !important;
    font-size:12px!important;
}
.ztree li.current>span:before {
    color: red !important;
}
.ztree li a.curSelectedNode span,
.ztree li a.curSelectedNode span.button.ico_open:before,
.ztree li a.curSelectedNode span.button.ico_close:before{
	  color: red !important; 
}
 </style>
 
</head>
<body>

	<div class="easyui-layout" fit="true">
		<div  id = "panelcenter" data-options="region:'west',split:'true', onResize:function(a){$('#jqGrid').setGridWidth(a);$('#jqGrid').setGridHeight(getJgridTableHeight($('#panelcenter')));$(window).trigger('resize');}"
			style="width: calc(100% - 460px); height: 99%; padding: 0px; overflow: hidden;">
			<div id="tableToolbar" class="toolbar">
				 <div class="toolbar-right">
		    	<div class="input-group form-tool-search" style="width: 240px">
				<input type="text" name="sysUser_keyWord"
								id="sysUser_keyWord"
								class="form-control input-sm" placeholder="请输入查询条件"> 
				<label id="sysUser_searchPart" class="icon icon-search form-tool-searchicon"></label>
				</div>
		   		 
		    </div>
			 
			</div>

			<table id="jqGrid" datapermission='jqCcSysUser'></table>
			<div id="jqGridPager"></div>

		</div>
    <div data-options="region:'center'" style=" width:460px; overflow: hidden;"> 
			
	 <div id="tableToolbar" class="toolbar" style = "height: 41px; line-height: 30px;">
		<div class="toolbar-left"   style = "font-size: 14px;    margin-left: 16px;">
	    菜单权限
	 </div>
		
	    <div class="toolbar-right"  style = "  padding-right: 20px;">
	  		<div class="dropdown"  style="display: none">
				 <select id="application" name="application" class="form-control input-sm" title= "主应用">
				 </select>
			</div>
		  	<div style = "    width: 40px;float: right; border: solid 1px #e8e8e8;height: 30px; line-height: 30px;    margin-left: 6px;">
		  	   <a id="userauth_refreashData" href="javascript:void(0)" style = "text-decoration: none;color: #9799a0; padding: 13px;"  class="  "  title="刷新页面"><i  style = "font-size: 13px;" class="icon iconfont icon-sync"></i></a>
			 </div>
	    </div>
	</div> 
		<ul id="myTab" class="nav nav-tabs" style = "margin-left: 10px">
			<li id = "frontDeskMenu" class="active"><a id = "front"  rel='portal_ifrm' href="#portal" data-toggle="tab">前台菜单</a></li>
			<li id = "backGroundMenu" style="display:block" ><a  id = "back"  rel='console_ifrm' href="#console" data-toggle="tab">后台菜单</a></li>

			<li style = "padding-left: 5px;line-height: 32px;"><span style="color:red">红色</span>为禁用菜单，括号中显示禁止访问的角色</li>
		</ul>
		<div id="myTabContent" class="tab-content"  style = "margin-left: 10px;height:calc(100% - 75px);">
			<div class="tab-pane fade" id="console" >
				<iframe id="console_ifrm" name="console_ifrm" src="" frameborder="0" style="width:100%;height:100%;"></iframe>
			</div>
			<div class="tab-pane fade in active" id="portal" >
				<iframe id='portal_ifrm' name='portal_ifrm' src='' frameborder='0'  style="width:100%;height:100%;"></iframe>
			</div>
		</div>
	 
			
		</div>
	</div>
</body>
 
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/console/authuser/js/consoleUser.js" type="text/javascript"></script>  
<script type="text/javascript">
	window.userIndex="";
	var layerIndexCount = 0;

	var href = "<%=ViewUtil.getRequestPath(request)%>";
	// 当前单击的标签
	var clickTabValue = '';
$(function(){
  $('#userAuthTree').css("height",document.documentElement.clientHeight-20);


  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  	var a=e.target.rel;
  	var consoletype="";
  	if(a.indexOf("portal")!=-1){
  		consoletype="1";
	}else{
		consoletype="0";
  		}
    clickTab(consoletype);
  });
  
	//查询按钮绑定事件
	$('#userauth_refreashData').bind('click', function(){
		location.href=href+"console/authuser/toUserAuth";
	});
	
});
 
$(window).resize(function(){
    $('#portal_ifrm').css("height",document.documentElement.clientHeight - 70);
    $('#console_ifrm').css("height",document.documentElement.clientHeight - 70);
});

// 后台用户默认激活后台菜单
function defaultSelectTab(userId,consoleTyle,clickTabValue) {
		if ($("#backGroundMenu").hasClass("active") || !(clickTabValue === 'portal') ) {
			$("#console_ifrm").attr('src', 'console/authuser/toUserTree/' + userId + '/0/' + applicationId);
			$('#myTab a[href="#console"]').tab('show');
			//前台
		} else {
			$("#portal_ifrm").attr('src', 'console/authuser/toUserTree/' + userId + '/1/' + applicationId);
			$('#myTab a[href="#portal"]').tab('show');
		}
		return;
	}

function  clickRow( userId,consoleTyle,sourceType){
		// sourceType标识是否点击过标签页，如果只是点击行需要重置clickTabValue，这样才能默认激活后台菜单
		var flag=false;
		if(sourceType === 'clickTab'){
			flag=true;
		}
    	$('#console_ifrm').css("height",document.documentElement.clientHeight - 70);
        $('#portal_ifrm').css("height",document.documentElement.clientHeight - 70);
    	  if(consoleTyle === '1'){
    		  qhTab(userId,consoleTyle,flag);
    		  return;
    	  }
    	  if(consoleTyle === '0'){
    		  qhTab(userId,consoleTyle,flag);
    		  return;
    	  }else if(consoleTyle === '1'  && "block"=== display){
    		  $('#backGroundMenu').css("display","none"); 
    	  }
		$('#myTab a').click(function (e) {
			e.preventDefault();
			clickTabValue = e.target.href.split('#')[1];
		})
 }
     
 function clickTab(consoletype){
       var  rowid = $("#jqGrid").jqGrid('getGridParam','selrow');
       var  userAuth = $("#jqGrid").jqGrid('getRowData',rowid);
       var  userId = userAuth.id;
	   if(userId.split("-").length>1){
		  userId =  userId.split("-")[0];
	   }
	   clickRow(userId,consoletype,'clickTab');
 }


 function qhTab(userId,consoleTyle,flag){
	 if( consoleTyle  === "1"){
		  document.getElementById('back').setAttribute("aria-expanded","false");
		  if(!flag){
			  $('#backGroundMenu').css("display","none");
		  }else{
			  $('#backGroundMenu').css("display","block");
		  }
		  $('#frontDeskMenu').addClass("active"); 
		  $('#backGroundMenu').removeClass("active");
		  document.getElementById('front').setAttribute("aria-expanded","true");  
		  
		  $('#console').removeClass("active");
		  $('#console').removeClass("in");
		  
		  $('#portal').addClass("active");
		  $('#portal').addClass("in");
		  
		  $("#portal_ifrm").attr('src','console/authuser/toUserTree/'+userId+'/1/'+applicationId);
		  $("#console_ifrm").attr('src','');
	 }else{
		 $('#portal').removeClass("active");
		 $('#portal').removeClass("in");

		 $('#console').addClass("active");
		 $('#console').addClass("in");
		 $('#frontDeskMenu').removeClass("active");
		 $('#backGroundMenu').addClass("active");
		 $('#backGroundMenu').css("display","block");
		 $("#console_ifrm").attr('src','console/authuser/toUserTree/'+userId+'/0/'+applicationId);
		 $("#portal_ifrm").attr('src','');
	    }

  
 }

var consoleUser;
function formatStatus(cellvalue, options, rowObject) {

	if(rowObject.userLocked!="0"){
		return "<img src='avicit/platform6/console/user/images/lock.png' title='锁定'>";
	}
	if(rowObject.status=="1"){
		return "<img src='avicit/platform6/console/user/images/state.png' title='有效用户'>";
	}else{
		return "<img src='avicit/platform6/console/user/images/unstate.png' title='无效用户'>";
	}
	
} 
function formatConsole(cellvalue, options, rowObject) {
	if(cellvalue=="1"){
		return "<font color=\"#1d953f\">"+ "前台"+ "</font>";
	}else{
		return "<font color=\"#f26522\">"+ "后台"+ "</font>";
	}
}
function formatRole(cellvalue, options, rowObject) {
    var roles = cellvalue.split(",");
    if(cellvalue == ""){
    	return "";
    }else{
    	  var str = "<span>";
    	   	 for(var i = 0;i<roles.length;i++){
    	   	 	// 处理查询结果cellvalue中多的，
    	   	 	if (roles[i] == '') {
    	   	 		break;
				}
    	   	 	//处理title
    	   	 	if(roles[i]==1){
					str+="<span     title='" +roles[i+1]+ "'  class = 'ant-tag ant-tag-green' style = 'color: #2f54eb; background: #f0f5ff; border-color: #adc6ff;border: solid 1px; padding: 2px; border-radius: 5px; margin-right: 3px;'>" +roles[i+1]+"</span>"
				}else{
				  str+="<span   title='" +roles[i+1]+ "' class = 'ant-tag ant-tag-green' style = 'color: red; background: #f0f5ff; border-color: red;border: solid 1px; padding: 2px; border-radius: 5px; margin-right: 3px;'>" +roles[i+1]+"</span>"
				}
    	   	 	i++;
    	   	 }
    	   	 str+="</span>";
    	   	 return str;
    	
    }

}

 var  applicationId;
$(document).ready(function () {
	 //加载多应用
    getApplications();
    var myType = document.getElementById("application");//获取select对象
	  var index = myType.selectedIndex;
	   applicationId = myType.options[index].value;
	var searchUserMainNames = [];
	var searchUserMainTips = [];
	searchUserMainNames.push("name");
 	searchUserMainTips.push("用户姓名");
 	searchUserMainNames.push("loginName");
 	searchUserMainTips.push("登录名");
 	searchUserMainNames.push("deptName");
 	searchUserMainTips.push("部门");
	$('#sysUser_keyWord').attr('placeholder','输入'+searchUserMainTips[0]+'、'+searchUserMainTips[1] +'或'+searchUserMainTips[2]+ '查询');
	
	


	var dataGridColModel =  [
      { label: 'id', name: 'id', key: true, width: 75, hidden:true }
        ,{ label: '序号', name: 'orderBy', sortable : false,width: 60,align:'center'}
        ,{ label: '用户姓名', name: 'name', sortable : false,width: 130 ,align:'center'}
        ,{ label: '登录名', name: 'loginName', sortable : false,width: 130,align:'center'}
        ,{ label: '用户类型', name: 'attribute01',hidden:true}
        ,{ label: '用户类型', name: 'consoleType', width: 100 ,sortable : false,align:'center',formatter:formatConsole}
        ,{ label: '部门', name: 'deptName', width: 120 ,sortable : false,align:'center'}
        ,{ label: '部门id', name: 'deptId', hidden:true} 
        ,{ label: '角色', name: 'attribute02', width: 200 ,sortable : false,align:'left',formatter:formatRole}
        ,{ label: '状态', name: 'status11', width: 80,align:'center',formatter:formatStatus}
        ,{ label: '状态', name: 'status', hidden:true} 
        ,{ label: 'orgIdentityId',
            name: 'orgIdentityId',
            width: 150,
            hidden: true  },
		{ label: 'sanyuan',
			name: 'sanyuan',
			width: 150,
			hidden: true

		}
	];
	consoleUser = new ConsoleUser('jqGrid','<%=ViewUtil.getRequestPath(request)%>'+'${'console/user'}','searchDialog','form','sysUser_keyWord',searchUserMainNames,dataGridColModel,applicationId);
	//添加按钮绑定事件
	 
	$('#sysUser_searchPart').bind('click', function(){
		consoleUser.searchByKeyWord();
	});
 
	//查询按钮绑定事件
	$('#consoleUser_reset').bind('click', function(){
		consoleUser.clearData();
	});
	
	$("#application").change(function(){
           　selectApplication(); 
   });
   
});

 function getApplications(){
	 	$.ajax({
	           cache: true,
	           type: "post",
	           url:  "console/authuser/getApplications",
	           dataType:"json", 
	           async: false,
	           error: function(request) {
	           	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
	           },
	           success: function(data) {
	        	   var html = '';
	        	    for (var i = 0; i < data.length; i++) {
	        	        html += '<option value="' + data[i].id + '">' + data[i].applicationName.trim() + '</option>';
	        	    }  
	        	    $('#application').html(html);
	           }
	       });
 }
 
 function selectApplication(){
	  var myType = document.getElementById("application");//获取select对象
	  var index = myType.selectedIndex;
	   applicationId = myType.options[index].value;
	   var userId = $("#jqGrid").jqGrid('getGridParam','selrow');
	   //后台
	   if($("#backGroundMenu").hasClass("active")){
		   $("#console_ifrm").attr('src','console/authuser/toUserTree/'+userId+'/0/'+applicationId);
		   
	   //前台	   
	   }else{
		   $("#portal_ifrm").attr('src','console/authuser/toUserTree/'+userId+'/1/'+applicationId); 
	   }
	  
 }
 
</script>
</html>