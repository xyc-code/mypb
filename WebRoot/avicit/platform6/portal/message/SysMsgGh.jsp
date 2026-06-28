<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%
  String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>
  <!-- ControllerPath = "platform6/msystem/sysmsg/sysMsgController/operation/Gh/id" -->
  <title>消息详细</title>
  <base href="<%=ViewUtil.getRequestPath(request)%>">
  <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
  </jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div style="margin-right:400px;margin-left:400px;">
  <div style="font-size: 24px; margin: 15px; text-align: center;">关于<span id="msg0" style="color:red;font-size: 18px;">【人力资源部工会分会】</span>按期换届选举提醒的通知</div>

  <div  style="font-size: 18px;  text-align: left;"> &nbsp;&nbsp; &nbsp;&nbsp;
    你  <span id="msg1" style="color:red;font-size: 16px;">【工会分会】</span> 系  <span id="msg2" style="color:red;font-size: 16px;">【2024年3月12日】</span> 进行换届选举，于 <span id="msg3" style="color:red;font-size: 16px;">【2024年3月12日】</span> 任期届满  。
    按照公司《关于建立基层工会组织按期届满提醒督促机制的通知》 党群工作部 提前 2个月即将任
    期届满的工会组织换届事宜做如下提醒：
  </div>

  <div  style="font-size: 18px;  text-align: left;margin-top: 15px;"> 1、任期届满前，请主动逐级与上一级工会组织沟通换届情况，
    一般于   <span id="msg4" style="color:red;font-size: 16px;">【2024年3月12日】</span> 提交换届选举请示， 于  <span id="msg5" style="color:red;font-size: 16px;">【2024年3月12日】</span>提交委员会委员候选人建议人选请示，于 <span id="msg6" style="color:red;font-size: 16px;">【2024年3月12日】</span>完成换届选举工作。
  </div>

    <div style="font-size: 18px;  text-align: left;margin-top: 15px;">  2、如有特殊情况不能按期换届的，逐级报公司工会审批，未经批准的，不得延期或提前换届。</div>
    <div style="font-size: 18px;  text-align: left;margin-top: 15px;"> 3、此项工作纳入工会创争竞赛考核。</div>
    <div style="font-size: 18px;  text-align: right;margin-top: 15px;"> 联系人： <span id="msg7" style="color:red;font-size: 16px;">【xxx】</span>  联系电话： <span id="msg8" style="color:red;font-size: 16px;">【136】</span></div>
    <div style="font-size: 18px;  text-align: right;margin-top: 15px;margin-right: 50px;"> 公司工会</div>
    <div style="font-size: 18px;  text-align: right;margin-top: 15px;">  <span id="msg9" style="color:red;font-size: 16px;">【2024年3月12日】</span></div>

</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
  <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript">

  document.ready = function() {
   var content='${sysMsgDTO.content}';
    //人力资源部工会分会@@工会分会@@2024年3月12日@@2024年3月12日
    var array=content.split("@@");
    $("#msg0").html("【"+array[0]+"】");//名称 人力资源部工会分会
    $("#msg1").html("【"+array[1]+"】");//类型@@工会分会
    $("#msg2").html("【"+array[2]+"】");//@@2026年07月01日@@
    $("#msg3").html("【"+array[3]+"】");//2026年07月01日
    $("#msg4").html("【"+array[4]+"】");//@@2026年06月01日
    $("#msg5").html("【"+array[5]+"】");//@@2026年07月01日
    $("#msg6").html("【"+array[6]+"】");//@@2026年07月01日
    $("#msg7").html("【"+array[7]+"】");//@@平台管理员
    $("#msg8").html("【"+array[8]+"】");//@@3851
    $("#msg9").html("【"+array[9]+"】");//@@2024年03月14日

 console.log(content);

  };

  $(document).keydown(function(event) {
    event.returnValue = false;
    return false;
  });
</script>
</body>
</html>