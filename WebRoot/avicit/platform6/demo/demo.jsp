<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>示例代码</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <script>
        var _bpm_baseurl = "<%=ViewUtil.getRequestPath(request)%>";
    </script>
</head>
<body>
<input type="button" onclick="selectUser();" value="设置候选人"/>
<input type="button" onclick="showSelectedUser();" value="刷新"/>
<div id="showSelectedUser">

</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowModel.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/DefaultForm.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/buttons/BpmActor.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/buttons/BpmButton.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/buttons/BpmSubmit.js"></script>
<script type="text/javascript"
        src="avicit/platform6/bpmreform/bpmbusiness/include/src/buttons/BpmStepuserdefined.js"></script>
<script type="text/javascript">
    function FlowButtons() {
        this.flowModel = new FlowModel();
        this.defaultForm = new DefaultForm();
        this.defaultForm.flowEditor = this;
        this.defaultForm.isAutoSave = false;
    }

    FlowButtons.prototype.dostepuserdefined = function (procinstDbid, executionId, targetActivityName) {
        var dostepuserdefined = {};
        dostepuserdefined.procinstDbid = procinstDbid;
        dostepuserdefined.executionId = executionId;
        dostepuserdefined.event = "dostepuserdefined";
        dostepuserdefined.lable = "配置选人";
        this.bpmStepuserdefined = new BpmStepuserdefined(this, this.defaultForm, {dostepuserdefined: dostepuserdefined}, true);
        this.bpmStepuserdefined.callback(targetActivityName);
    };

    var procinstDbid = "4028b88174ce5d9a0174ce7ccc43017d";
    var executionId = "4028b88174cd90dd0174cd999ee70133.4028b88174ce5d9a0174ce7ccc43017d";
    var targetActivityName = "task3";

    function selectUser() {
        new FlowButtons().dostepuserdefined(procinstDbid, executionId, targetActivityName);
    }

    function showSelectedUser() {
        $("#showSelectedUser").empty();
        avicAjax.ajax({
            url: "platform/bpm/clientbpmoperateaction/douserdefined",
            data: {
                processInstanceId: procinstDbid,
                activityName: targetActivityName,
                type: "search"
            },
            type: "POST",
            dataType: "JSON",
            success: function (result) {
                if (result.selectUser) {
                    var selectUser = JSON.parse(result.selectUser);
                    for (var i = 0; i < selectUser.length; i++) {
                        var html =
                            "<p>" +
                            selectUser[i].userId
                            + " "
                            + selectUser[i].userName
                            + " "
                            + selectUser[i].deptId
                            + " "
                            + selectUser[i].deptName
                            + "</p>";
                        $("#showSelectedUser").append($(html))
                    }
                }
            }
        });
    }
</script>
</body>
</html>
