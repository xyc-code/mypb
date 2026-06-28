<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>导入配置自定义数据转换demo</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
	<h3 style="text-align:center;margin-top:20px;">导入配置自定义数据转换demo</h3>
	<hr style="height:1px;border:none;border-top:1px solid #555555;" />
	<p style="font-size:14px;">
		<pre>
		<xmp>
			public class CustomSysExcelImpCellConvertHandle implements SysExcelImpCellConvertHandler{

				/**
				 * 批量转换单元格值
				 * @param valueMap  某一列单元格值集合,K-V:单元格值-单元格值
				 * @return
				 */
				@Override
				public Map<String, String> convertCellValues(Map<String, String> valueMap) throws Exception {
					return null;
				}
			}

		</xmp>
		</pre>
	</p>
</div>
</body>
</html>