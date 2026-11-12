<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<!DOCTYPE html><html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="<%=ViewUtil.getRequestPath(request)%>">
<title><c:out value="${notice.TITLE}"/></title>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"><jsp:param name="importlibs" value="common,form"/></jsp:include>
<c:if test="${noticeTask}"><link rel="stylesheet" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/style.css"><link rel="stylesheet" href="static/h5/timeliner/css/timeliner.css"></c:if>
<link rel="stylesheet" href="avicit/pb/membernotice/notice.css?v=20261111-4">
</head><body>
<c:if test="${noticeTask}"><%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include2/buttons.jsp" %></c:if>
<div id="formTab"><main class="notice-form" id="notice-form" data-id="<c:out value='${notice.ID}'/>">
<h2><c:out value="${notice.TITLE}"/></h2>
<form id="form" onsubmit="return false"><table class="form_commonTable">
<tr><th>工号</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.EMPLOYEE_CODE}'/>"></td><th>姓名</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.MEMBER_NAME}'/>"></td></tr>
<tr><th>接收党组织</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.RECEIVER_ORG_NAME}'/>"></td><th>党员类别</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.PARTY_TYPE_NAME}'/>"></td></tr>
<tr><th>党委会讨论日期</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.MEETING_DATE_TEXT}'/>"></td><th>党委会届次／会议名称</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.MEETING_NAME}'/>"></td></tr>
<c:choose><c:when test="${notice.PARTY_TYPE_NAME eq '正式党员'}"><tr><th>转正日期</th><td colspan="3"><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.REGULAR_DATE_TEXT}'/>"></td></tr></c:when>
<c:otherwise><tr><th>预备期开始日期</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.PROBATION_START_TEXT}'/>"></td><th>预备期结束日期</th><td><input type="text" class="form-control input-sm" readonly value="<c:out value='${notice.PROBATION_END_TEXT}'/>"></td></tr></c:otherwise></c:choose>
</table></form>
</main></div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param name="importlibs" value="common,form"/></jsp:include>
<c:if test="${noticeTask}">
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/jquery.dragsort-0.5.2.min.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/nav.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/main.js"></script>
<script src="static/h5/timeliner/js/timeliner.js"></script>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/CommonActor.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/BpmActor.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/FlowEditor.js"></script>
<script>
$(function () {
    function NoticeBusiness() { DefaultForm.call(this); this.id = $('#notice-form').attr('data-id'); this.formcode = 'DYFSYZ'; }
    NoticeBusiness.prototype = Object.create(DefaultForm.prototype);
    NoticeBusiness.prototype.constructor = NoticeBusiness;
    NoticeBusiness.prototype.initFormData = function () {};
    NoticeBusiness.prototype.save = function (callback) { if (callback) callback(); return true; };
    var business = new NoticeBusiness(); new FlowEditor(business).init();
});
</script>
</c:if>
</body></html>
