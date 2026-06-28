<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>DTO方式导入自定义预处理接口demo</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
	<h3 style="text-align:center;margin-top:20px;">DTO方式导入自定义预处理接口demo</h3>
	<hr style="height:1px;border:none;border-top:1px solid #555555;" />
	<p style="font-size:14px;">
		<pre>
		<xmp>
			@Component
			public class CustomSysExcelImpWithBeanHandle implements SysExcelImpWithBeanHandle<IqsProblemDTO> {

				/**
				 * 自定义行数据校验
				 * @param data 行数据
				 * @return
				 * @throws DaoException
				 */
				@Override
				public boolean validateRow(IqsProblemDTO data) throws Exception {
					return false;
				}

				/**
				 * 数据插入前处理
				 * @param datas 所有数据
				 *              K:"INSERT", V:插入数据结果集
				 *              K:"UPDATE", V:更新数据结果集
				 * @throws DaoException
				 */
				@Override
				public void saveDataBefore(Map<String, List<IqsProblemDTO>> datas) throws Exception {

				}

				/**
				 * 数据插入后处理
				 * @param datas 所有数据
				 *              K:"INSERT", V:插入数据结果集
				 *              K:"UPDATE", V:更新数据结果集
				 * @throws DaoException
				 */
				@Override
				public void saveDataAfter(Map<String, List<IqsProblemDTO>> datas) throws Exception {

				}
			}
		</xmp>
		</pre>
	</p>
</div>
</body>
</html>