<%@page import="org.springframework.web.method.HandlerMethod"%>
<%@page import="org.springframework.web.servlet.mvc.method.RequestMappingInfo"%>
<%@page import="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping"%>
<%@page import="org.springframework.stereotype.Controller"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@page import="avicit.platform6.core.spring.SpringMVCFactory"%>
<%@page import="org.springframework.beans.factory.BeanFactoryUtils" %>
<%@page import="org.springframework.web.servlet.HandlerMapping" %>
<%@page import="org.springframework.context.ApplicationContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	ApplicationContext context = SpringMVCFactory.getApplicationContext();
	Map<String, HandlerMapping> allRequestMappings = BeanFactoryUtils.beansOfTypeIncludingAncestors(context,HandlerMapping.class, true, false);
	String[] allBeanNames = context.getBeanNamesForAnnotation(Controller.class);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Spring MVC Handler Mapping</title>
<style>
	table,table td,table th{
		border:1px solid #000000;
		color:#0000FF;
		border-collapse:collapse;
	}
	.tdfont{
		font-weight: bold;
		color:#000000;
	}
</style>
</head>
<body>
	<h3>Spring MVC Handler Mapping</h3>
	<table width="100%">
		<tr>
			<td class="tdfont">bean</td>
			<td class="tdfont">method</td>
			<td class="tdfont">url</td>
		</tr>
		<%
			for(Iterator it = allRequestMappings.entrySet().iterator(); it.hasNext();){
				Map.Entry entry = (Map.Entry)it.next();
				String s = (String)entry.getKey();
				Object o = entry.getValue();
				if(o instanceof RequestMappingHandlerMapping){
					RequestMappingHandlerMapping x = (RequestMappingHandlerMapping)o;
					Map<RequestMappingInfo, HandlerMethod> y = x.getHandlerMethods();
					for(Iterator it1 = y.entrySet().iterator(); it1.hasNext();){
						Map.Entry entry1 = (Map.Entry)it1.next();
						RequestMappingInfo s1 = (RequestMappingInfo)entry1.getKey();
						HandlerMethod o1 = (HandlerMethod)entry1.getValue();
						out.println("<tr>");
						out.println("<td>");
						out.println(o1.getBean());
						out.println("</td>");
						out.println("<td>");
						out.println(o1.getMethod().getName());
						out.println("</td>");
						out.println("<td>");
						out.println(s1.toString());
						out.println("</td>");
						out.println("</tr>");
					}
					
				}
			}
		%>
	</table>
</body>
</html>
