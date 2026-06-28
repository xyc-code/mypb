<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page import="avicit.platform6.commons.utils.AesUtilsByJdk"%>
<%@page import="avicit.platform6.core.properties.PlatformProperties"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil"%>
<html>
<head>
    <%
    String requestpath=ViewUtil.getRequestPath(request);
    try {
        //该密钥key取于金航数码业务基础平台的platform6.properties
        String key=PlatformProperties.getProperty("des_encrypt_key");
        //用户名的parameter名,不可修改
        String paramUser="username_";
        //需要单点登录的用户名，必填
        String loginName="admin";
        //对用户名进行加密
        String loginNameKey=AesUtilsByJdk.encrypt(loginName,key);
        //对用户名parameter进行加密
        String paramUserKey=AesUtilsByJdk.encrypt(paramUser,key);
        //要单点的地址 requestpath可根据项目现场替换为目标系统的上下文地址
        response.sendRedirect(requestpath+"/?"+paramUserKey+"="+loginNameKey);
    }catch (Exception e){
        response.sendRedirect(requestpath+"/login");
        return;
    }
%>
    <title>httpheader登录客户端访问示例demo</title>
</head>
<body>

</body>
</html>
