<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Excel方式导入自定义处理接口demo</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
	<h3 style="text-align:center;margin-top:20px;">Excel方式导入自定义处理接口demo</h3>
	<hr style="height:1px;border:none;border-top:1px solid #555555;" />
	<p style="font-size:14px;">
	<pre>
	<xmp>
				public class CustomSysExcelImpWithExcelHandle implements SysExcelImpWithExcelHandle{

					/**
					 * 自定义行数据校验
					 * @param sheetName sheet页名称
					 * @param rowdata   行数据
					 * @param rowNum    行号
					 * @return
					 */
					@Override
					public boolean validateRow(String sheetName, Map<String, Object> rowdata, long rowNum) {
						return false;
					}

					/**
					 * sheet页数据插入前处理
					 * @param sheetName sheet名
					 * @param data      sheet页数据
					 *                  K:"INSERT", V:插入数据结果集
					 *                  K:"UPDATE", V:更新数据结果集
					 */
					@Override
					public void saveSheetBefore(String sheetName, Map<String, List<Map<String, Object>>> data) {

					}

					/**
					 * sheet页数据插入后处理
					 * @param sheetName sheet名
					 * @param data      sheet页数据
					 *                  K:"INSERT", V:插入数据结果集
					 *                  K:"UPDATE", V:更新数据结果集
					 */
					@Override
					public void saveSheetAfter(String sheetName, Map<String, List<Map<String, Object>>> data) {

					}
				}
			</xmp>
			</pre>
	</p>
</div>
</body>
</html>