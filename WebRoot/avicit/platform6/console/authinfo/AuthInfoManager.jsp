<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>授权信息</title>
		<link rel="stylesheet" type="text/css" href="avicit/platform6/console/authinfo/css/style.css" />
		<script type="text/javascript" src="avicit/platform6/console/authinfo/js/AuthInfo.js" ></script>
	</head>
	<body>
		<div class="authorizationBox">
			<div class="authorizatioImg">
				<img src="avicit/platform6/console/authinfo/img/imgAuthorization.png" alt="" />
			</div>
			<div class="authorizationCon">
				<ul>
					<li>授权类型：${type}</li>
					<li>版权所有：AVIC DIGITAL CORPOATION LTD.（金航数码科技有限责任公司）</li>
					<li>授权用户数：${authUserNum}</li>
					<li>授权菜单数：${authMenuNum}</li>
					<li>到期时间：${deadLine}</li>
					<li>IP地址：${ip}</li>
					<li>MAC地址：${mac}</li>
				</ul>
				<a href="javascript:void(0);"
				   onclick="exportIpMac('<%=ViewUtil.getRequestPath(request)%>/console/authinfo/exportIpMac', '${ip}',
				   '${mac}')">导出注册信息</a>
			</div>
			<div class="clear"></div>
			<div class="authorizationHint">
					<p><i class=" icon iconfont icon-check"></i>将导出的auth.rif文件发送给软件供应商以获取正式授权文件。授权文件更换步骤：</p>
					<span>
						1、打开license文件夹：...\platform6\WEB-INF\classes\license<br/>
						2、替换.res后缀的license文件<br/>
						3、重启服务
					</span>
				</div>
		</div>
	</body>
</html>