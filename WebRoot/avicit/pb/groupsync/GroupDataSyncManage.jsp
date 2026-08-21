<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>同步集团数据</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <style>
        .group-sync-page { min-height: 100vh; padding: 22px; background: #eef2f6; color: #1f2933; }
        .group-sync-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding: 24px 28px; background: #15324b; color: #fff; }
        .group-sync-kicker { margin-bottom: 8px; color: #9fd6d0; font-size: 11px; font-weight: 700; letter-spacing: 0; }
        .group-sync-head h1 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0; }
        .group-sync-head p { margin: 8px 0 0; color: #c9d7e3; font-size: 13px; }
        .group-sync-head-actions { display: flex; align-items: center; gap: 14px; padding-top: 4px; }
        .group-sync-status { display: inline-flex; align-items: center; gap: 7px; color: #d9e6ef; font-size: 12px; white-space: nowrap; }
        .group-sync-status:before { width: 7px; height: 7px; border-radius: 50%; background: #7dd3b0; content: ''; }
        .group-sync-run { border: 0; border-radius: 5px; padding: 9px 15px; background: #e8a24a; color: #1e2b35; font-weight: 700; }
        .group-sync-run:hover, .group-sync-run:focus { background: #f2b35e; color: #1e2b35; }
        .group-sync-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 16px 0; }
        .group-sync-summary-item { display: flex; align-items: baseline; justify-content: space-between; padding: 14px 18px; background: #fff; border: 1px solid #dce5ec; border-radius: 6px; }
        .group-sync-summary-item strong { color: #15324b; font-size: 22px; }
        .group-sync-summary-item span { color: #71808c; font-size: 12px; }
        .group-sync-tabs { display: flex; gap: 4px; margin: 0 0 12px; padding: 0; border-bottom: 1px solid #cfd9e1; }
        .group-sync-tabs > li > a { border: 0; border-bottom: 3px solid transparent; padding: 11px 16px; color: #6c7a86; font-size: 13px; font-weight: 600; }
        .group-sync-tabs > li.active > a, .group-sync-tabs > li.active > a:focus, .group-sync-tabs > li.active > a:hover { border: 0; border-bottom: 3px solid #1c8c87; background: transparent; color: #15324b; }
        .group-sync-toolbar { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; padding: 12px 14px; background: #fff; border: 1px solid #dce5ec; border-radius: 6px; }
        .group-sync-transfer-toolbar { justify-content: flex-start; padding: 9px 12px; background: #f9fbfc; }
        .group-sync-action-group { display: inline-flex; align-items: center; gap: 6px; padding-right: 10px; border-right: 1px solid #e4e9ee; }
        .group-sync-action-group:last-of-type { border-right: 0; }
        .group-sync-action-label { margin-right: 2px; color: #7b8792; font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
        .group-sync-page .group-sync-action { display: inline-flex; align-items: center; justify-content: center; gap: 5px; height: 32px; padding: 0 11px; border: 1px solid #cbd6df; border-radius: 4px; background: #fff; color: #3d4b57; font-size: 12px; font-weight: 600; line-height: 30px; transition: border-color .15s ease, background .15s ease, color .15s ease; }
        .group-sync-page .group-sync-action i { width: 13px; color: #667785; font-size: 12px; text-align: center; }
        .group-sync-page .group-sync-action:hover, .group-sync-page .group-sync-action:focus { border-color: #8ea4b4; background: #f5f8fa; color: #19354a; outline: 0; }
        .group-sync-page .group-sync-action-primary { border-color: #a92534; background: #b62d3d; color: #fff; }
        .group-sync-page .group-sync-action-primary i, .group-sync-page .group-sync-action-primary:hover, .group-sync-page .group-sync-action-primary:focus { color: #fff; }
        .group-sync-page .group-sync-action-primary:hover, .group-sync-page .group-sync-action-primary:focus { border-color: #8f1e2b; background: #9f2534; }
        .group-sync-page .group-sync-action-danger { border-color: #e0a8af; color: #a42634; }
        .group-sync-page .group-sync-action-danger i { color: #b52a3a; }
        .group-sync-page .group-sync-action-danger:hover, .group-sync-page .group-sync-action-danger:focus { border-color: #c35a66; background: #fff5f6; color: #8f1e2b; }
        .group-sync-page .group-sync-action[disabled] { cursor: not-allowed; opacity: .55; }
        .group-sync-page .btn { border-radius: 4px; box-shadow: none; }
        .group-sync-page .btn-success, .group-sync-page .btn-info, .group-sync-page .btn-primary, .group-sync-page .btn-danger { border-color: #cbd6df; background: #fff; color: #3d4b57; }
        .group-sync-page .btn-success:hover, .group-sync-page .btn-info:hover, .group-sync-page .btn-primary:hover { border-color: #8ea4b4; background: #f5f8fa; color: #19354a; }
        .group-sync-page .btn-danger { border-color: #e0a8af; color: #a42634; }
        .group-sync-page .btn-danger:hover { background: #fff5f6; color: #8f1e2b; }
        .group-sync-toolbar .form-control, .group-sync-toolbar .group-sync-status-filter { height: 32px; border: 1px solid #cbd6df; border-radius: 4px; box-shadow: none; }
        .group-sync-toolbar .form-control { width: 220px; }
        .group-sync-status-filter { width: 112px; padding: 0 8px; color: #43515c; background: #fff; }
        .group-sync-toolbar-spacer { flex: 1; }
        .group-sync-selection-count { color: #71808c; font-size: 12px; white-space: nowrap; }
        .group-sync-panel { overflow: hidden; background: #fff; border: 1px solid #dce5ec; border-radius: 6px; }
        .group-sync-table-wrap { max-height: calc(100vh - 330px); overflow: auto; }
        .group-sync-table { width: 100%; border-collapse: separate; border-spacing: 0; background: #fff; }
        .group-sync-table th, .group-sync-table td { border-bottom: 1px solid #edf1f4; padding: 10px 12px; text-align: left; white-space: nowrap; }
        .group-sync-table th { position: sticky; top: 0; z-index: 1; background: #f7f9fb; color: #52606d; font-size: 12px; font-weight: 700; }
        .group-sync-table td { color: #354552; font-size: 13px; }
        .group-sync-table tbody tr.selected { background: #e6f4f2; }
        .group-sync-table tbody tr:hover { background: #f4faf9; cursor: pointer; }
        .group-sync-table input[type="checkbox"] { width: 15px; height: 15px; margin: 0; accent-color: #1c8c87; vertical-align: middle; }
        .group-sync-empty { color: #8b98a5; text-align: center !important; padding: 58px !important; }
        .group-sync-pagination { display: flex; align-items: center; justify-content: flex-end; gap: 10px; padding: 10px 0 0; color: #71808c; font-size: 12px; }
        .group-sync-pagination button { min-width: 64px; height: 30px; padding: 0 10px; border: 1px solid #cbd6df; border-radius: 4px; background: #fff; color: #3d4b57; }
        .group-sync-pagination select { height: 30px; padding: 0 8px; border: 1px solid #cbd6df; border-radius: 4px; background: #fff; color: #3d4b57; }
        .group-sync-pagination button[disabled] { cursor: not-allowed; opacity: .5; }
        .group-sync-form { display: grid; grid-template-columns: repeat(3, minmax(220px, 1fr)); gap: 10px 14px; }
        .group-sync-form label { display: flex; flex-direction: column; gap: 4px; color: #52606d; font-size: 12px; }
        .group-sync-form label input { width: 100%; }
        .group-sync-form .wide { grid-column: 1 / -1; }
        .group-sync-dialog { width: 920px; max-width: 94vw; }
        .group-sync-dialog .modal-body { max-height: 68vh; overflow: auto; }
        .group-sync-log-summary { max-width: 360px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .group-sync-log-detail-dialog { width: 860px; max-width: 94vw; }
        .group-sync-log-meta { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-bottom: 14px; }
        .group-sync-log-meta div { padding: 9px 10px; background: #f7f9fb; border: 1px solid #e3e9ee; border-radius: 4px; }
        .group-sync-log-meta span { display: block; margin-bottom: 3px; color: #71808c; font-size: 11px; }
        .group-sync-log-meta strong { display: block; overflow: hidden; color: #263746; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
        .group-sync-log-cause { margin-bottom: 12px; padding: 11px 12px; border-left: 3px solid #e8a24a; background: #fff8ed; color: #62461e; font-size: 12px; line-height: 1.7; }
        .group-sync-log-cause strong { color: #4b3418; font-weight: 600; }
        .group-sync-log-raw-label { margin: 0 0 6px; color: #71808c; font-size: 12px; }
        .group-sync-log-detail { min-height: 180px; max-height: 52vh; margin: 0; padding: 14px; overflow: auto; border: 1px solid #dce5ec; border-radius: 4px; background: #fbfcfd; color: #354552; font: 12px/1.7 Consolas, "Microsoft YaHei", monospace; white-space: pre-wrap; word-break: break-word; }
        .group-sync-file-button input { display: none; }
        @media (max-width: 900px) { .group-sync-page { padding: 12px; } .group-sync-head { flex-direction: column; padding: 20px; } .group-sync-head-actions { width: 100%; justify-content: space-between; } .group-sync-summary { grid-template-columns: 1fr; } .group-sync-form { grid-template-columns: 1fr; } .group-sync-toolbar { flex-wrap: wrap; } .group-sync-toolbar .form-control { width: 100%; } .group-sync-toolbar-spacer { display: none; } .group-sync-action-group { width: 100%; flex-wrap: wrap; border-right: 0; } .group-sync-action-label { width: 100%; } .group-sync-table-wrap { max-height: calc(100vh - 430px); } .group-sync-log-meta { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    </style>
</head>
<body>
<div class="group-sync-page">
    <div class="group-sync-head">
        <div>
            <div class="group-sync-kicker">GROUP SYNC / LOCAL MIRROR</div>
            <h1>同步集团数据</h1>
            <p>维护集团党员与党组织数据镜像</p>
        </div>
        <div class="group-sync-head-actions">
            <span class="group-sync-status" id="groupSyncStatus">等待操作</span>
            <button type="button" class="group-sync-run" id="groupSyncRun"><i class="fa fa-refresh"></i> 立即同步</button>
        </div>
    </div>
    <div class="group-sync-summary">
        <div class="group-sync-summary-item"><strong id="memberCount">0</strong><span>当前党员列表</span></div>
        <div class="group-sync-summary-item"><strong id="organizationCount">0</strong><span>当前党组织列表</span></div>
        <div class="group-sync-summary-item"><strong id="selectedCount">0</strong><span>当前选中</span></div>
    </div>
    <ul class="nav nav-tabs group-sync-tabs" role="tablist">
        <li class="active"><a href="#groupSyncMemberPanel" data-toggle="tab" data-type="member">党员数据</a></li>
        <li><a href="#groupSyncOrgPanel" data-toggle="tab" data-type="organization">党组织数据</a></li>
        <li><a href="#groupSyncLogPanel" data-toggle="tab" data-type="logs">同步批次</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="groupSyncMemberPanel">
            <div class="group-sync-toolbar">
                <input type="text" class="form-control input-sm" id="memberKeyword" placeholder="姓名或身份证号">
                <select class="group-sync-status-filter" id="memberStatus" aria-label="党员数据状态"><option value="active">有效数据</option></select>
                <button type="button" class="group-sync-action" data-list-type="member"><i class="fa fa-search"></i> 查询</button>
                <button type="button" class="group-sync-action" data-add-type="member"><i class="fa fa-plus"></i> 新增</button>
                <button type="button" class="group-sync-action" id="memberEdit"><i class="fa fa-pencil"></i> 编辑</button>
                <button type="button" class="group-sync-action group-sync-action-danger" id="memberDelete"><i class="fa fa-trash-o"></i> 物理删除</button>
                <span class="group-sync-toolbar-spacer"></span><span class="group-sync-selection-count" id="memberSelectionCount">未选择</span>
            </div>
            <div class="group-sync-panel"><div class="group-sync-table-wrap"><table class="group-sync-table" id="memberTable"></table></div></div>
            <div class="group-sync-pagination" id="memberPagination"><button type="button" data-page-action="prev">上一页</button><span class="group-sync-page-info"></span><label>每页 <select class="group-sync-page-size" aria-label="党员每页条数"><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="200">200</option><option value="0">全部</option></select> 条</label><button type="button" data-page-action="next">下一页</button></div>
        </div>
        <div class="tab-pane" id="groupSyncOrgPanel">
            <div class="group-sync-toolbar group-sync-transfer-toolbar">
                <span class="group-sync-action-label">集团数据文件</span>
                <div class="group-sync-action-group">
                    <button type="button" class="group-sync-action group-sync-action-primary" id="organizationExport"><i class="fa fa-download"></i> 导出集团数据 ZIP</button>
                    <label class="group-sync-action group-sync-file-button"><i class="fa fa-upload"></i> 导入集团数据 Excel/ZIP<input type="file" id="organizationImportFile" accept=".xlsx,.zip" hidden></label>
                </div>
                <span class="group-sync-import-status" id="organizationImportStatus"></span>
            </div>
            <div class="group-sync-toolbar">
                <input type="text" class="form-control input-sm" id="organizationKeyword" placeholder="组织名称或编码">
                <select class="group-sync-status-filter" id="organizationStatus" aria-label="党组织数据状态"><option value="active">有效数据</option></select>
                <button type="button" class="group-sync-action" data-list-type="organization"><i class="fa fa-search"></i> 查询</button>
                <button type="button" class="group-sync-action" data-add-type="organization"><i class="fa fa-plus"></i> 新增</button>
                <button type="button" class="group-sync-action" id="organizationEdit"><i class="fa fa-pencil"></i> 编辑</button>
                <button type="button" class="group-sync-action group-sync-action-danger" id="organizationDelete"><i class="fa fa-trash-o"></i> 物理删除</button>
                <span class="group-sync-toolbar-spacer"></span><span class="group-sync-selection-count" id="organizationSelectionCount">未选择</span>
            </div>
            <div class="group-sync-panel"><div class="group-sync-table-wrap"><table class="group-sync-table" id="organizationTable"></table></div></div>
            <div class="group-sync-pagination" id="organizationPagination"><button type="button" data-page-action="prev">上一页</button><span class="group-sync-page-info"></span><label>每页 <select class="group-sync-page-size" aria-label="党组织每页条数"><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="200">200</option><option value="0">全部</option></select> 条</label><button type="button" data-page-action="next">下一页</button></div>
        </div>
        <div class="tab-pane" id="groupSyncLogPanel">
            <div class="group-sync-toolbar"><button type="button" class="group-sync-action" id="groupSyncLogRefresh"><i class="fa fa-refresh"></i> 刷新批次</button></div>
            <div class="group-sync-panel"><div class="group-sync-table-wrap"><table class="group-sync-table" id="groupSyncLogTable"></table></div></div>
        </div>
    </div>
</div>

<div class="modal fade" id="groupSyncEditDialog" tabindex="-1">
    <div class="modal-dialog group-sync-dialog">
        <div class="modal-content">
            <div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" id="groupSyncDialogTitle">编辑</h4></div>
            <div class="modal-body"><form id="groupSyncForm"><input type="hidden" name="ID" id="groupSyncId"><div class="group-sync-form" id="groupSyncFields"></div></form></div>
            <div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">取消</button><button type="button" class="btn btn-primary" id="groupSyncSave">保存</button></div>
        </div>
    </div>
</div>

<div class="modal fade" id="groupSyncLogDetailDialog" tabindex="-1">
    <div class="modal-dialog group-sync-log-detail-dialog">
        <div class="modal-content">
            <div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">同步异常详情</h4></div>
            <div class="modal-body">
                <div class="group-sync-log-meta">
                    <div><span>批次</span><strong id="groupSyncLogDetailId"></strong></div>
                    <div><span>状态</span><strong id="groupSyncLogDetailStatus"></strong></div>
                    <div><span>开始时间</span><strong id="groupSyncLogDetailStart"></strong></div>
                    <div><span>执行人</span><strong id="groupSyncLogDetailExecutor"></strong></div>
                </div>
                <div class="group-sync-log-cause"><strong>失败原因：</strong><span id="groupSyncLogDetailCause"></span></div>
                <div class="group-sync-log-raw-label">原始异常明细</div>
                <pre class="group-sync-log-detail" id="groupSyncLogDetailMessage"></pre>
            </div>
            <div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div>
        </div>
    </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
<script type="text/javascript">
(function () {
    var api = '<%=request.getContextPath()%>/platform/avicit/pb/groupsync/groupSyncController';
    var currentType = 'member';
    var selected = { member: [], organization: [] };
    var pageState = { member: { page: 1, pageSize: 20, total: 0 }, organization: { page: 1, pageSize: 20, total: 0 } };
    var logRows = [];
    var fields = {
        member: [
            ['DY_JBXX_GROUP_EMPLOYEE_CODE','集团员工编码'],['DY_COMPANY_NAME','企业名称'],['DY_NAME','姓名'],['DY_GENDER','性别'],['DY_ID_NUMBER','公民身份号码'],['DY_BIRTH_DATE','出生日期'],['DY_EDUCATION_LEVEL','学历'],['DY_DEGREE','学位'],['DY_ETHNICITY','民族'],['DY_JOB_POSITION','工作岗位'],['DY_NEW_SOCIAL_STRATUM_TYPE','新社会阶层类型'],['DY_PROFESSIONAL_POSITION','从事专业技术职务'],['DY_IS_MIGRANT_WORKER','是否农民工'],['DY_MOBILE_NUMBER','手机号码'],['DY_AFFILIATED_BRANCH','组织关系所在党支部'],['DY_PARTY_ORGANIZATION_UNIQUE_ID','党组织唯一标识'],['DY_JOINT_BRANCH_UNIT','联合支部所在单位'],['DY_HOUSEHOLD_LOCATION','户籍所在地'],['DY_CURRENT_ADDRESS','现居住地'],['DY_PARTY_ENTRY_DATE','入党日期'],['DY_PARTY_REGULARIZATION_DATE','转正日期'],['DY_PARTY_YEARS','党龄'],['DY_PARTY_YEARS_CORRECTION','党龄校正值'],['DY_ENTRY_SYSTEM_TYPE','进入本信息系统类型'],['DY_ENTRY_SYSTEM_DATE','进入本信息系统日期'],['DY_ENTRY_SYSTEM_OPERATING_PARTY_ID','进入本信息系统操作党组织唯一标识'],['DY_EXIT_SYSTEM_TYPE','离开本信息系统类型'],['DY_EXIT_SYSTEM_DATE','离开本信息系统日期'],['DY_EXIT_SYSTEM_OPERATING_PARTY_ID','离开本信息系统操作党组织唯一标识'],['DY_DELETE_FLAG','删除标识'],['DY_UPDATE_TIMESTAMP','更新时间戳'],['DY_OPERATING_PARTY_ORGANIZATION','操作党组织']
        ],
        organization: [
            ['DZZ_COMPANY_NAME','企业名称'],['DZZ_UPPER_PARTY_ORGANIZATION_UNIQUE_ID','上一级党组织唯一标识'],['DZZ_PARTY_ORGANIZATION_ENCODING','党组织编码'],['DZZ_PARTY_ORGANIZATION_FULL_NAME','党组织全称'],['DZZ_PARTY_ORGANIZATION_SHORT_NAME','党组织简称'],['DZZ_PARTY_ORGANIZATION_CATEGORY','组织类别'],['DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE','成立日期'],['DZZ_PARTY_ORGANIZATION_MEMBER_COUNT','党组织党员人数'],['DZZ_PARTY_ORGANIZATION_CONTACT_EMPLOYEE_CODE','联系人编码'],['DZZ_PARTY_ORGANIZATION_CONTACT_NAME','联系人'],['DZZ_PARTY_ORGANIZATION_CONTACT_MOBILE','联系电话'],['DZZ_PARTY_ORGANIZATION_UNIT_SITUATION','党组织所在单位情况'],['DZZ_PARTY_ORGANIZATION_ADMINISTRATIVE_AREA','所在行政区划'],['DZZ_DISPLAY_ORDER','显示排序'],['DZZ_UPPER_PARTY_ORGANIZATION_FULL_NAME','批准成立的上级党组织全称'],['DZZ_DELETE_FLAG','删除标识'],['DZZ_UPDATE_TIMESTAMP','更新时间戳'],['DZZ_PARTY_BRANCH_STANDARDIZATION_CATEGORY','党支部标准化规范化建设类别'],['DZZ_OPERATING_PARTY_ORGANIZATION','操作党组织'],['DZZ_PARTY_ORGANIZATION_SECRETARY_NAME','党组织书记'],['DZZ_PARTY_ORGANIZATION_DEPUTY_SECRETARY_NAME','党组织副书记']
        ]
    };
    var displayColumns = {
        member: [['DY_NAME','姓名'],['DY_ID_NUMBER','身份证号'],['DY_PARTY_ORGANIZATION_UNIQUE_ID','党组织唯一标识'],['DY_MOBILE_NUMBER','手机号'],['DY_DELETE_FLAG','删除标识'],['SYNC_STATE','同步状态']],
        organization: [['DZZ_PARTY_ORGANIZATION_FULL_NAME','党组织全称'],['DZZ_PARTY_ORGANIZATION_ENCODING','组织编码'],['DZZ_PARTY_ORGANIZATION_CATEGORY','组织类别'],['DZZ_PARTY_ORGANIZATION_CONTACT_NAME','联系人'],['DZZ_DELETE_FLAG','删除标识'],['SYNC_STATE','同步状态']]
    };

    function esc(value) { return $('<div/>').text(value == null ? '' : value).html(); }
    function post(path, data, done) { $.post(api + path, data || {}, function (res) { if (res.flag !== 'success') { message(res.errorMsg || '操作失败'); return; } done(res); }, 'json').fail(function () { message('请求失败，请检查登录状态或服务日志'); }); }
    function updateSelectionCount(type) {
        var count = selected[type].length;
        $('#' + (type === 'member' ? 'memberSelectionCount' : 'organizationSelectionCount')).text(count ? ('已选择 ' + count + ' 条') : '未选择');
        $('#selectedCount').text(count);
    }
    function renderPager(type) {
        var state = pageState[type];
        var pages = state.pageSize === 0 ? 1 : Math.max(1, Math.ceil(state.total / state.pageSize));
        var pager = $('#' + (type === 'member' ? 'memberPagination' : 'organizationPagination'));
        pager.find('.group-sync-page-info').text(state.total + ' 条，第 ' + state.page + ' / ' + pages + ' 页');
        pager.find('[data-page-action="prev"]').prop('disabled', state.page <= 1);
        pager.find('[data-page-action="next"]').prop('disabled', state.page >= pages);
    }
    function renderTable(type, rows) {
        var table = $('#' + (type === 'member' ? 'memberTable' : 'organizationTable'));
        var html = '<thead><tr><th><input type="checkbox" class="group-sync-select-all" aria-label="全选"></th>';
        $.each(displayColumns[type], function (_, col) { html += '<th>' + esc(col[1]) + '</th>'; });
        html += '</tr></thead><tbody>';
        if (!rows.length) { html += '<tr><td colspan="' + (displayColumns[type].length + 1) + '" class="group-sync-empty">暂无数据</td></tr>'; }
        $.each(rows, function (index, row) {
            html += '<tr data-index="' + index + '"><td><input type="checkbox" class="group-sync-row-check" aria-label="选择"></td>';
            $.each(displayColumns[type], function (_, col) { html += '<td>' + esc(row[col[0]]) + '</td>'; });
            html += '</tr>';
        });
        table.html(html).data('rows', rows);
        selected[type] = [];
        updateSelectionCount(type);
        $('#' + (type === 'member' ? 'memberCount' : 'organizationCount')).text(rows.length);
        renderPager(type);
        table.off('.groupSync');
        table.on('change.groupSync', '.group-sync-row-check', function () {
            $(this).closest('tr').toggleClass('selected', this.checked);
            selected[type] = [];
            table.find('.group-sync-row-check:checked').each(function () {
                selected[type].push(rows[parseInt($(this).closest('tr').attr('data-index'), 10)]);
            });
            var total = table.find('.group-sync-row-check').length;
            var checked = table.find('.group-sync-row-check:checked').length;
            table.find('.group-sync-select-all').prop('checked', total > 0 && checked === total).prop('indeterminate', checked > 0 && checked < total);
            updateSelectionCount(type);
        });
        table.on('change.groupSync', '.group-sync-select-all', function () {
            table.find('.group-sync-row-check').prop('checked', this.checked).trigger('change');
        });
        table.find('tbody tr[data-index]').on('click', function (event) {
            if ($(event.target).is('input')) { return; }
            $(this).find('.group-sync-row-check').prop('checked', function (_, value) { return !value; }).trigger('change');
        });
    }
    function load(type, page) {
        currentType = type;
        var prefix = type === 'member' ? 'member' : 'organization';
        if (page != null) { pageState[type].page = page; }
        var keyword = $('#' + prefix + 'Keyword').val();
        var status = $('#' + prefix + 'Status').val();
        var state = pageState[type];
        post('/api/list', { type: type, keyword: keyword, status: status, page: state.page, pageSize: state.pageSize }, function (res) {
            state.total = parseInt(res.total, 10) || 0;
            state.page = parseInt(res.page, 10) || 1;
            renderTable(type, res.rows || []);
        });
    }
    function editSelected(type) {
        if (selected[type].length !== 1) { message(selected[type].length ? '编辑时请只选择一条记录' : '请先选择一条记录'); return; }
        openEditor(type, selected[type][0]);
    }
    function deleteSelected(type) {
        if (!selected[type].length) { message('请先选择要删除的记录'); return; }
        var ids = $.map(selected[type], function (row) { return row.ID; });
        confirmAction('确认物理删除', '将永久删除已选中的 ' + ids.length + ' 条记录及其关联党员数据，删除后不可恢复。', function () {
            post('/api/deleteBatch', { type: type, ids: ids.join(',') }, function () { selected[type] = []; load(type, pageState[type].page); message('已完成物理删除'); });
        });
    }
    function message(text) { if (window.layer && layer.msg) { layer.msg(text); } else { alert(text); } }
    function confirmAction(title, content, done) {
        if (window.layer && layer.confirm) {
            layer.confirm(content, { title: title, icon: 3, closeBtn: 1, btn: ['确认', '取消'] }, function (index) {
                layer.close(index);
                done();
            });
        } else if (window.confirm(content)) {
            done();
        }
    }
    function normalizeDate(value) {
        if (value == null || value === '') { return ''; }
        if (/^\d{10,13}$/.test(String(value))) {
            var timestamp = Number(value); if (String(value).length === 10) { timestamp *= 1000; }
            var date = new Date(timestamp); if (!isNaN(date.getTime())) { return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2); }
        }
        var text = String(value); return text.length >= 10 ? text.substring(0, 10) : text;
    }
    function downloadBase64(base64, fileName) {
        var binary = atob(base64), bytes = new Uint8Array(binary.length);
        for (var i = 0; i < binary.length; i++) { bytes[i] = binary.charCodeAt(i); }
        var url = URL.createObjectURL(new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
        $('<a></a>').attr({ href: url, download: fileName }).appendTo('body')[0].click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }
    var dateFields = { DY_BIRTH_DATE: true, DY_PARTY_ENTRY_DATE: true, DY_PARTY_REGULARIZATION_DATE: true, DY_ENTRY_SYSTEM_DATE: true, DY_EXIT_SYSTEM_DATE: true, DZZ_PARTY_ORGANIZATION_ESTABLISHMENT_DATE: true };
    function openEditor(type, row) {
        currentType = type;
        $('#groupSyncDialogTitle').text(row ? '编辑' : '新增');
        $('#groupSyncId').val(row ? (row.ID || '') : '');
        var html = '';
        $.each(fields[type], function (_, field) {
            var value = row && row[field[0]] != null ? row[field[0]] : '';
            var readonly = field[0].indexOf('UNIQUE_ID') >= 0 || field[0].indexOf('DELETE_FLAG') >= 0 || field[0].indexOf('UPDATE_TIMESTAMP') >= 0 || field[0].indexOf('OPERATING_PARTY_ORGANIZATION') >= 0 || field[0] === 'DZZ_PARTY_ORGANIZATION_MEMBER_COUNT';
            var dateClass = dateFields[field[0]] ? ' group-sync-date-picker' : '';
            if (field[0] === 'DY_GENDER') {
                var genderValue = String(value == null ? '' : value);
                if (genderValue === '男') { genderValue = '1'; }
                if (genderValue === '女') { genderValue = '2'; }
                html += '<label>' + esc(field[1]) + '<select class="form-control input-sm" name="DY_GENDER"><option value="">请选择</option><option value="1"' + (genderValue === '1' ? ' selected="selected"' : '') + '>男</option><option value="2"' + (genderValue === '2' ? ' selected="selected"' : '') + '>女</option></select></label>';
            } else {
                html += '<label>' + esc(field[1]) + '<input class="form-control input-sm' + dateClass + '" name="' + field[0] + '" value="' + esc(dateFields[field[0]] ? normalizeDate(value) : value) + '"' + (readonly || dateFields[field[0]] ? ' readonly="readonly"' : '') + '></label>';
            }
        });
        $('#groupSyncFields').html(html);
        if ($.fn.datepicker) { $('.group-sync-date-picker').datepicker({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true }); }
        $('#groupSyncEditDialog').modal('show');
    }
    function errorText(value) { return value == null ? '' : String(value); }
    function errorCauses(value) {
        var text = errorText(value);
        var causes = [];
        if (text.indexOf('字符串截断') >= 0) { causes.push('目标字段长度不足（当前日志中包含党组织编码超过 DZZ_PARTY_ORGANIZATION_ENCODING 的 12 位限制）'); }
        if (text.indexOf('党组织缺少 ID、PARTY_CODE 或 PARTY_NAME') >= 0) { causes.push('源党组织缺少必填字段 ID、PARTY_CODE 或 PARTY_NAME'); }
        if (text.indexOf('上级党组织尚未同步') >= 0) { causes.push('源党组织的上级组织不在本批次有效同步结果中'); }
        if (text.indexOf('党员缺少 ID 或姓名') >= 0) { causes.push('源党员缺少必填字段 ID 或姓名'); }
        if (!causes.length && text) { causes.push('数据库写入或字段转换异常，请查看原始异常明细'); }
        return causes;
    }
    function errorSummary(value) { var causes = errorCauses(value); return causes.length ? causes.join('；') : '无异常'; }
    function openLogDetail(row) {
        $('#groupSyncLogDetailId').text(row.ID || '');
        $('#groupSyncLogDetailStatus').text(row.STATUS || '');
        $('#groupSyncLogDetailStart').text(row.BATCH_START_TIME || '');
        $('#groupSyncLogDetailExecutor').text(row.EXECUTOR_ID || '');
        $('#groupSyncLogDetailCause').text(errorSummary(row.ERROR_MESSAGE));
        $('#groupSyncLogDetailMessage').text(errorText(row.ERROR_MESSAGE) || '本批次没有异常明细。');
        $('#groupSyncLogDetailDialog').modal('show');
    }
    function loadLogs() { post('/api/logs', {}, function (res) { logRows = res.rows || []; var html = '<thead><tr><th>批次</th><th>开始时间</th><th>结束时间</th><th>状态</th><th>总数</th><th>成功</th><th>失败</th><th>物理删除</th><th>异常摘要</th><th>操作</th></tr></thead><tbody>'; $.each(logRows, function (index, row) { html += '<tr><td>' + esc(row.ID) + '</td><td>' + esc(row.BATCH_START_TIME) + '</td><td>' + esc(row.BATCH_END_TIME) + '</td><td>' + esc(row.STATUS) + '</td><td>' + esc(row.TOTAL_COUNT) + '</td><td>' + esc(row.SUCCESS_COUNT) + '</td><td>' + esc(row.ERROR_COUNT) + '</td><td>' + esc(row.DELETED_COUNT) + '</td><td class="group-sync-log-summary" title="' + esc(errorText(row.ERROR_MESSAGE)) + '">' + esc(errorSummary(row.ERROR_MESSAGE)) + '</td><td><button type="button" class="btn btn-link btn-xs group-sync-log-detail-button" data-log-index="' + index + '">查看详情</button></td></tr>'; }); if (!logRows.length) { html += '<tr><td colspan="10" class="group-sync-empty">暂无同步批次</td></tr>'; } html += '</tbody>'; $('#groupSyncLogTable').html(html); }); }

    $(function () {
        load('member');
        $('[data-list-type]').on('click', function () { load($(this).attr('data-list-type'), 1); });
        $('[data-add-type]').on('click', function () { openEditor($(this).attr('data-add-type'), null); });
        $('#memberEdit').on('click', function () { editSelected('member'); });
        $('#organizationEdit').on('click', function () { editSelected('organization'); });
        $('#memberDelete').on('click', function () { deleteSelected('member'); });
        $('#organizationDelete').on('click', function () { deleteSelected('organization'); });
        $('#memberStatus, #organizationStatus').on('change', function () { load($(this).attr('id') === 'memberStatus' ? 'member' : 'organization', 1); });
        $('#groupSyncSave').on('click', function () { var data = $('#groupSyncForm').serializeArray(); data.push({ name: 'type', value: currentType }); post('/api/save', $.param(data), function () { $('#groupSyncEditDialog').modal('hide'); load(currentType); }); });
        $('#groupSyncRun').off('click').on('click', function () {
            confirmAction('确认立即同步', '将按当前平台源数据执行一次全量同步，缺失的目标数据会直接物理删除，目标表中的手工导入覆盖值会继续保留。', function () {
                $('#groupSyncStatus').text('同步中...');
                post('/api/sync', {}, function (res) { var data = res.data || {}; $('#groupSyncStatus').text('完成：成功 ' + (data.success || 0) + '，失败 ' + (data.errors || 0) + '，物理删除 ' + (data.deleted || 0)); load('member', 1); load('organization', 1); loadLogs(); });
            });
        });
        function exportZip(type) {
            var prefix = type === 'member' ? 'member' : 'organization';
            var ids = $.map(selected[type], function (row) { return row.ID; });
            var form = $('<form method="post" target="_blank"></form>').attr('action', api + '/api/exportZip');
            form.append($('<input type="hidden" name="type">').val(type));
            form.append($('<input type="hidden" name="ids">').val(ids.join(',')));
            form.append($('<input type="hidden" name="keyword">').val($('#' + prefix + 'Keyword').val()));
            form.append($('<input type="hidden" name="status">').val($('#' + prefix + 'Status').val()));
            form.appendTo('body').submit().remove();
        }
        $('#organizationExport').on('click', function () { exportZip('organization'); });
        function importFile(input, statusId) {
            if (!input.files || !input.files.length) { return; }
            var file = input.files[0];
            var formData = new FormData(); formData.append('file', file);
            $('#' + statusId).text('导入中...');
            $.ajax({ url: api + '/api/import', type: 'POST', data: formData, processData: false, contentType: false, dataType: 'json' }).done(function (res) {
                if (res.flag !== 'success') { message(res.errorMsg || '导入失败'); return; }
                var data = res.data || {}; $('#' + statusId).text('完成：导入 ' + (data.imported || 0) + ' 条，失败文件 ' + (data.failedFiles || 0) + ' 个');
                if (data.errors && data.errors.length) { message(data.errors.join('\n')); }
                if (data.errorReportBase64) { downloadBase64(data.errorReportBase64, '集团数据导入错误报告.xlsx'); }
                load('organization'); load('member');
            }).fail(function () { message('导入请求失败'); }).always(function () { $(input).val(''); });
        }
        $('#organizationImportFile').on('change', function () { importFile(this, 'organizationImportStatus'); });
        $('[data-page-action]').on('click', function () {
            var type = $(this).closest('.group-sync-pagination').attr('id').indexOf('member') === 0 ? 'member' : 'organization';
            var state = pageState[type];
            var pages = state.pageSize === 0 ? 1 : Math.max(1, Math.ceil(state.total / state.pageSize));
            var nextPage = $(this).attr('data-page-action') === 'next' ? state.page + 1 : state.page - 1;
            if (nextPage >= 1 && nextPage <= pages) { load(type, nextPage); }
        });
        $('.group-sync-page-size').on('change', function () {
            var type = $(this).closest('.group-sync-pagination').attr('id').indexOf('member') === 0 ? 'member' : 'organization';
            pageState[type].pageSize = parseInt($(this).val(), 10) || 20;
            load(type, 1);
        });
        $('#groupSyncLogRefresh').on('click', loadLogs);
        $('#groupSyncLogTable').on('click', '.group-sync-log-detail-button', function () { openLogDetail(logRows[parseInt($(this).attr('data-log-index'), 10)]); });
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) { var type = $(event.target).data('type'); if (type === 'logs') { loadLogs(); } else { load(type); } });
    });
})();
</script>
</body>
</html>
