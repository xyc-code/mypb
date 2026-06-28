<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>子表虚拟列转换（子表列转换）</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<h3 style="text-align:center;margin-top:20px;">子表虚拟列转换（子表列转换）</h3>
		<hr style="height:1px;border:none;border-top:1px solid #555555;" />
		<p style="font-size:14px;">
			<pre>
                package avicit.platform6.eform.tutorial;

                import avicit.platform6.core.spring.SpringFactory;
                import avicit.platform6.eform.service.EformDatatableColTransform;
                import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;

                import java.util.Map;

                public class TransEformColEquip implements EformDatatableColTransform {

                    private DemoEquipService service = (DemoEquipService)SpringFactory.getBean("demoEquipService");


                    @Override
                    public Map<String, Object> transform(Map<String, Object> colMap) {
                        String equipId = (String)colMap.get("EQUIP_ID");
                        String code = service.findCodeByValue(equipId);
                        colMap.put("EQUIP_CODE",code);
                        return colMap;
                    }
                }

			</pre>
		</p>
	</div>
</body>
</html>