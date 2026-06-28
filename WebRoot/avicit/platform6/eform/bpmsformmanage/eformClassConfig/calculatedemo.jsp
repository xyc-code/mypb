<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>虚拟控件（虚拟字段计算类）demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<h3 style="text-align:center;margin-top:20px;">虚拟控件（虚拟字段计算类）demo</h3>
		<hr style="height:1px;border:none;border-top:1px solid #555555;" />
		<p style="font-size:14px;">
			<pre>
				package avicit.platform6.eformclient.demo;

				import avicit.platform6.core.spring.SpringFactory;
				import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;
				import avicit.platform6.eformbpms.service.CalculateValue;

				import java.util.Map;

				public class TestCalculateValue implements CalculateValue {
					//注入业务Service
					private DemoEquipService service = (DemoEquipService) SpringFactory.getBean("demoEquipService");
					@Override
					public String doCalculate(String domId, Map pageParams) {
						//获取当前表单数据
						Map formData = (Map)pageParams.get("formData");
						//获取设备id
						String equipId = (String)formData.get("EQUIP_ID");
						//返回设备编号
						return service.findCodeByValue(equipId);
					}
				}
			</pre>
		</p>
	</div>
</body>
</html>