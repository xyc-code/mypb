<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil"%>
<%response.setStatus(HttpServletResponse.SC_OK);%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<base href="<%=ViewUtil.getRequestPath(request) %>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>软件错误</title>
<style type="text/css">
*{margin:0px;}
html,body{height:100%;
background-color:#ffffff;}
.error_dw {
	background-image: url(login/style/image/500/error_dw.jpg);
	background-repeat: repeat-x;
}
.error_title {
	font-family: "黑体";
	font-size: 32px;
	text-decoration: none;
	line-height: 46px;
	color: #666666;
}
.error_txt {
	font-family: "宋体";
	font-size: 12px;
	text-decoration: none;
	line-height: 28px;
	color: #333333;
}

#error a:link {
	font-family: "宋体";
	font-size: 12px;
	color: #C70600;
	text-decoration: none;
	line-height: 18px;
}


#error a:hover {
	font-family: "宋体";
	font-size: 12px;
	color: #307EAF;
	text-decoration: underline;
	line-height: 18px;
}
#error a:visited {
	font-family: "宋体";
	font-size: 12px;
	color: #C70600;
	text-decoration: none;
	line-height: 18px;
}
#detailErrorInfo {
	line-height:25px;
	background-color: transparent;
	font-family:"Arial";
	font-size:14px;
	padding:2px;
	margin:2px;
	border:1px solid dotted gray;
}
</style>
<script type="text/javascript" src="static/js/platform/component/jQuery/jQuery-1.8.2/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="static/js/platform/portal/jquery-ui-1.10.4.custom.min.js"></script>
<script type="text/javascript">
	function showHideDetail(){
		$("#detailErrorInfo").toggle("blind", {}, 500);
	}
</script>
</head>
<body>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="error_dw">
  <tr>
    <td><table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="150" align="left" valign="top"><img src="login/style/image/500/error_ico01.gif" width="127" height="133" /></td>
            <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><div align="center" class="error_title"></div></td>
                <td><div align="center"><span class="error_title">软件运行错误</span></div></td>
              </tr>
              <tr>
                <td width="25"><div align="center"><img src="login/style/image/500/error_ico02.gif" width="18" height="15" vspace="3" /></div></td>
                <td align="left" valign="top" class="error_txt">对不起，软件运行发生了错误，请联系管理员</td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<p>&nbsp;</p>
</body>
</html>
