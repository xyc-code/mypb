<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>流程意见（流程意见自定义类）demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<h3 style="text-align:center;margin-top:20px;">流程意见（流程意见自定义类）demo</h3>
		<hr style="height:1px;border:none;border-top:1px solid #555555;" />
		<p style="font-size:14px;">
			<pre>
                package avicit.platform6.eformclient.demo;

                import avicit.platform6.commons.utils.JsonHelper;
                import avicit.platform6.eformbpms.bpmopinion.Bpmopinion;

                import java.util.List;
                import java.util.Map;

                public class TestOpinion extends Bpmopinion {

                    @Override
                    public Object getReturnValue(String data) {
                        //单个流程意见
                        //List<Map<String, String>> singleOpinion = JsonHelper.getInstance().readValue(data, List.class);

                        //所有流程意见
                        Map allOpinion = JsonHelper.getInstance().readValue(data, Map.class);
                        List rs = (List) allOpinion.get("result");
                        StringBuilder sb = new StringBuilder("&lt;table class='table table-bordered' style=''&gt;");
                        for (int i = 0; i < rs.size(); i++) {
                            List idealist = (List) rs.get(i);
                            Map idea = (Map) idealist.get(0);
                            sb.append("&lt;tr&gt;&lt;tr&gt;&lt;td style='border: 1px solid black;'&gt;").append(idea.get("title"))
                                    .append("&lt;/td&gt;&lt;td style='border: 1px solid black;word-break:break-word'&gt;")
                                    .append(idea.get("idea")).append("&nbsp;&nbsp;").append(idea.get("day"))
                                    .append("&nbsp;&nbsp;").append(idea.get("user")).append("&nbsp;&nbsp;&lt;br&gt;&lt;/td&gt;&lt;/tr&gt;");
                        }
                        sb.append("&lt;/table&gt;");
                        return sb.toString();
                    }

                }

			</pre>
		</p>
	</div>
</body>
</html>