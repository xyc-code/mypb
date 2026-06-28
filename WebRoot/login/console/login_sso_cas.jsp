<%@ page contentType="text/html; charset=GBK"%>
<!-- CAS安全认证网关登录页面 -->
<%@ page import="java.net.URLEncoder"%>
<%@ page import="java.net.URLDecoder"%>
<%@ page import="avicit.platform6.commons.utils.DESUtils"%>
<%@ page import="org.springframework.util.ObjectUtils"%>
<%
	String loginAction = null;
	String path = request.getContextPath();
	String Y2FzdXNlcm5hbWU = ObjectUtils.getDisplayString(request.getSession().getAttribute("LOGIN"));
	Y2FzdXNlcm5hbWU = "admin";
// 	java.security.Principal principal = request.getUserPrincipal();
// 	if (principal != null) {
// 		username = principal.getName();
// 	}
	Y2FzdXNlcm5hbWU = DESUtils.encrypt(Y2FzdXNlcm5hbWU);

	String sURI = ObjectUtils.getDisplayString(request.getParameter("sourceURI"));
	String sourceQueryString = ObjectUtils.getDisplayString(request.getParameter("sourceQueryString"));
%>
<script type="text/javascript">
function submitForm() {
	document.getElementById("casLogin").submit();
}
</script>
<body onload="submitForm()">
	<form id="casLogin" action="<%=path%>/caslogin" method="post" style="display: none">
		<input  id="Y2FzdXNlcm5hbWU" name="Y2FzdXNlcm5hbWU" type="hidden" value="<%=Y2FzdXNlcm5hbWU%>"></input>
		<input  id="sourceURI" name="sourceURI" type="hidden" value="<%=sURI%>"></input>
		<input  id="sourceQueryString" name="sourceQueryString" type="hidden" value="<%=sourceQueryString%>"></input>
	</form>
</body>
