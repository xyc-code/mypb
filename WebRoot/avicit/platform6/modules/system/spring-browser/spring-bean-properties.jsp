<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.springframework.context.ApplicationContext"%>
<%@page import="avicit.platform6.core.spring.SpringMVCFactory"%>
<%@page import="org.springframework.beans.PropertyAccessorFactory"%>
<%@page import="org.springframework.beans.BeanWrapper"%>
<%@page import="java.beans.PropertyDescriptor"%>
<%
	String beanName = request.getParameter("beanName");
	Object bean = null;
	if (bean == null){
		ApplicationContext appContext = SpringMVCFactory.getApplicationContext();
		bean = appContext.getBean(beanName);
	}
	BeanWrapper beanWrapper = PropertyAccessorFactory.forBeanPropertyAccess(bean);
	PropertyDescriptor[] propertiesDesc = beanWrapper.getPropertyDescriptors();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>查看Bean的属性信息</title>
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
	<h3><%=beanName %> 的属性信息</h3>
	<div align="left">
		BeanId : <%=beanName %> <br>
		Class : <%=bean.getClass().getCanonicalName() %>
	</div>
	<table width="100%">
		<tr>
			<td class="tdfont">属性</td>
			<td class="tdfont">值</td>
			<td class="tdfont">类型</td>
		</tr>
		<%
			for(PropertyDescriptor desc : propertiesDesc){
				out.println("<tr>");
				out.println("<td> " + desc.getName() + " </td>");
				out.println("<td> " + beanWrapper.getPropertyValue(desc.getName()) + " </td>");
				out.println("<td> " + beanWrapper.getPropertyType(desc.getName()).getCanonicalName() + " </td>");
				out.println("</tr>");
			}
		%>
	</table>
</body>
</html>
