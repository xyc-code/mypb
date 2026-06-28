<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%
    String type = request.getParameter("type");
    String title = "";
    if("1".equals(type)){
        title = "自定义列转换（视图列转换）";
    }else if("2".equals(type)){
        title = "地址控件（地址控件转换类）";
    }else if("3".equals(type)){
        title = "联动控件（联动控件自定义类）";
    }else if("4".equals(type)){
        title = "虚拟控件（虚拟字段计算类）";
    }else if("5".equals(type)){
        title = "流程意见（流程意见自定义类）";
    }else if("6".equals(type)){
        title = "添加（前后处理类）";
    }else if("7".equals(type)){
        title = "更新（前后处理类）";
    }else if("8".equals(type)){
        title = "删除（前后处理类）";
    }else if("9".equals(type)){
        title = "子表虚拟列转换（子表列转换）";
    }
%>
<title><%=title%>demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<h3 style="text-align:center;margin-top:20px;"><%=title%>demo</h3>
		<hr style="height:1px;border:none;border-top:1px solid #555555;" />
		<p style="font-size:14px;">
			<pre>
                package avicit.platform6.eform.tutorial;

                import avicit.platform6.core.exception.DaoException;
                import avicit.platform6.core.spring.SpringFactory;
                import avicit.platform6.eform.service.EformHandlerEvent;
                import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;
                import org.slf4j.Logger;
                import org.slf4j.LoggerFactory;

                import java.util.Map;

                public class EventEformTutorial implements EformHandlerEvent {


                    //注入业务service
                    private DemoEquipService service = (DemoEquipService) SpringFactory.getBean("demoEquipService");

                    /**
                     * 前置事件
                     * @param oldEntity 原数据（添加操作时为null）
                     * @param newEntity 新数据（删除操作时为null）
                     */
                    @Override
                    public void beforeEvent(Map<String, Object> oldEntity, Map<String, Object> newEntity) {
                        String code = (String)newEntity.get("CODE");
                        if (code.startsWith("undefined")){
                            throw new RuntimeException("编码不能以undefined开头");
                        }
                    }

                    /**
                     * 后置事件
                     * @param oldEntity 原数据（添加操作时为null）
                     * @param newEntity 新数据（删除操作时为null）
                     */
                    @Override
                    public void afterEvent(Map<String, Object> oldEntity, Map<String, Object> newEntity) {
                        String id = (String)oldEntity.get("EQUIP_ID");
                        try {
                            service.deleteDemoEquipById(id);
                        }catch (Exception e) {
                            e.printStackTrace();
                            throw new RuntimeException("删除出错请检查");
                        }
                    }

                }
			</pre>
		</p>
	</div>
</body>
</html>