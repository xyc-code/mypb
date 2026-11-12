<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<!DOCTYPE html><html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<base href="<%=ViewUtil.getRequestPath(request)%>"><title>发起党员发送阅知</title>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"><jsp:param name="importlibs" value="common,form"/></jsp:include>
<link rel="stylesheet" href="avicit/pb/membernotice/notice.css?v=20261110-3">
</head><body class="notice-add-page">
<div class="toolbar notice-entry-toolbar"><button id="notice-entry-save" type="button" class="btn btn-primary form-tool-btn btn-sm"><i class="fa fa-save"></i> 保存</button><button id="notice-entry-start" type="button" class="btn btn-primary form-tool-btn btn-sm btn-point"><i class="fa fa-send-o"></i> 保存并发起</button><button id="notice-entry-cancel" type="button" class="btn btn-primary form-tool-btn btn-sm">返回列表</button></div>
<main class="notice-form notice-entry"><h1 id="notice-entry-title">党员发送阅知</h1>
<div id="notice-entry-message" class="notice-message" role="status" style="display:none"></div>
<form id="notice-add-form" autocomplete="off">
<table class="form_commonTable">
<tr><th><label for="notice-entry-name">姓名</label></th><td><div class="input-group input-group-sm">
<input type="hidden" id="notice-entry-user" name="userId"><input id="notice-entry-name" class="form-control" readonly placeholder="请选择用户">
<span id="notice-entry-select" class="input-group-addon" role="button" tabindex="0" aria-label="选择用户"><i class="glyphicon glyphicon-user"></i></span></div></td>
<th><label for="notice-entry-code">工号</label></th><td><input id="notice-entry-code" class="form-control input-sm" readonly placeholder="选择姓名后自动带出"></td></tr>
<tr><th><label for="notice-entry-type">党员类别</label></th><td><select id="notice-entry-type" name="partyType" class="form-control input-sm"><option>预备党员</option><option>正式党员</option></select></td>
<th><label for="notice-entry-org">接收党组织</label></th><td><input id="notice-entry-org" name="receiverOrg" class="form-control input-sm" placeholder="系统党组织完整名称"></td></tr>
<tr><th><label for="notice-entry-meeting-date">党委会讨论日期</label></th><td><input id="notice-entry-meeting-date" name="meetingDate" class="form-control input-sm date-picker" placeholder="yyyy-MM-dd"></td><th><label for="notice-entry-meeting-name">党委会届次／会议名称</label></th><td><input id="notice-entry-meeting-name" name="meetingName" class="form-control input-sm"></td></tr>
<tr id="notice-entry-probation"><th><label for="notice-entry-begin">预备期开始日期</label></th><td><input id="notice-entry-begin" name="probationStart" class="form-control input-sm date-picker" placeholder="yyyy-MM-dd"></td><th><label for="notice-entry-end">预备期结束日期</label></th><td><input id="notice-entry-end" name="probationEnd" class="form-control input-sm date-picker" placeholder="yyyy-MM-dd"></td></tr>
<tr id="notice-entry-formal" style="display:none"><th><label for="notice-entry-regular">转正日期</label></th><td><input id="notice-entry-regular" name="regularDate" class="form-control input-sm date-picker" placeholder="yyyy-MM-dd"></td><td colspan="2" class="notice-entry-hint">用于更新转正日期并计算党龄</td></tr>
</table></form>
</main>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param name="importlibs" value="common,form"/></jsp:include>
<script src="avicit/pb/membernotice/notice-add.js?v=20261111-5"></script>
</body></html>
