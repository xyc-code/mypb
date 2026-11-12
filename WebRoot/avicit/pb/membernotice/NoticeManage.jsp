<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<!DOCTYPE html><html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<base href="<%=ViewUtil.getRequestPath(request)%>"><title>党员发送阅知</title>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"><jsp:param name="importlibs" value="common,table,form"/></jsp:include>
<link rel="stylesheet" href="avicit/pb/membernotice/notice.css?v=20261111-5">
</head><body class="notice-page">
<form id="notice-search" class="notice-filters">
<label for="notice-keyword">关键词</label><input class="form-control input-sm" id="notice-keyword" placeholder="工号 / 姓名 / 接收党组织 / 标题">
<label for="notice-type">党员类别</label><select class="form-control input-sm" id="notice-type"><option value="">全部</option><option>预备党员</option><option>正式党员</option></select>
<label for="notice-state">流程状态</label><select class="form-control input-sm" id="notice-state"><option value="">全部</option><option value="start">拟稿中</option><option value="active">流转中</option><option value="ended">已完成</option><option value="suspended">挂起</option><option value="terminated">已终止</option></select>
<button class="btn btn-primary form-tool-btn btn-sm" type="submit"><i class="fa fa-search"></i> 查询</button>
<button class="btn btn-primary form-tool-btn btn-sm" id="notice-reset" type="button"><i class="fa fa-refresh"></i> 重置</button>
</form>
<div id="notice-message" class="notice-message" role="status" style="display:none"></div>
<div id="notice-list">
<div id="notice-toolbar" class="toolbar"><div class="toolbar-left">
<button class="btn btn-primary form-tool-btn btn-sm btn-point" id="notice-add" type="button"><i class="fa fa-plus"></i> 手动发起</button>
<button class="btn btn-primary form-tool-btn btn-sm" id="notice-start" type="button"><i class="fa fa-send-o"></i> 批量发起</button>
<button class="btn btn-primary form-tool-btn btn-sm" id="notice-delete" type="button"><i class="fa fa-trash-o"></i> 删除</button>
<button class="btn btn-primary form-tool-btn btn-sm" id="notice-import" type="button"><i class="fa fa-upload"></i> 导入 Excel</button>
<div class="btn-group"><button class="btn btn-primary form-tool-btn btn-sm dropdown-toggle" data-toggle="dropdown" type="button"><i class="fa fa-download"></i> 下载模板 <span class="caret"></span></button>
<ul class="dropdown-menu"><li><a href="platform/avicit/pb/membernotice/template?type=probation">预备党员模板</a></li><li><a href="platform/avicit/pb/membernotice/template?type=formal">正式党员模板</a></li></ul></div>
</div></div>
<table id="notice-grid"></table><div id="notice-pager"></div>
</div>
<input id="notice-file" type="file" accept=".xlsx,.xls" style="display:none" aria-label="选择导入文件">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param name="importlibs" value="common,table,form"/></jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/pb/membernotice/notice-manage.js?v=20261111-7"></script>
</body></html>
