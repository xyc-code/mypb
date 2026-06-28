<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>联动控件（联动控件自定义类）demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<h3 style="text-align:center;margin-top:20px;">联动控件（联动控件自定义类）demo</h3>
		<hr style="height:1px;border:none;border-top:1px solid #555555;" />
		<p style="font-size:14px;">
			<pre>
				package avicit.platform6.eformclient.demo;

				import avicit.platform6.eformclient.service.EformLinkage;

				import java.util.ArrayList;
				import java.util.HashMap;
				import java.util.List;
				import java.util.Map;

				public class TestList extends EformLinkage {

					@Override
					public Object getReturnValue(String value) {
						//创建下拉列表List
						List<Map<String, String>> backList = new ArrayList<Map<String, String>>();

						//添加北京选项
						Map<String, String> backMap1 = new HashMap<String, String>();
						backMap1.put("key", "1");
						backMap1.put("value", "北京" + value);

						//添加上海选项
						Map<String, String> backMap2 = new HashMap<String, String>();
						backMap2.put("key", "2");
						backMap2.put("value", "上海" + value);

						//添加广州选项
						Map<String, String> backMap3 = new HashMap<String, String>();
						backMap3.put("key", "3");
						backMap3.put("value", "广州" + value);

						//添加深圳选项
						Map<String, String> backMap4 = new HashMap<String, String>();
						backMap4.put("key", "4");
						backMap4.put("value", "深圳" + value);

						backList.add(backMap1);
						backList.add(backMap2);
						backList.add(backMap3);
						backList.add(backMap4);

						return backList;
					}

				}

			</pre>
		</p>
	</div>
</body>
</html>