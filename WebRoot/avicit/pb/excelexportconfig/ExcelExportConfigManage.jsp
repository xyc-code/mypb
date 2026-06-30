<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>多子表Excel导出配置</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<link rel="stylesheet" href="static/pb-modern/excel-export-config/excel-export-config.css?v=${jsversion}">
</head>
<body>
<div class="pb-excel-export-page" id="pbExcelExportConfigPage">
    <div id="tableToolbar" class="toolbar pb-excel-toolbar">
        <div class="toolbar-left">
            <a id="excelConfigAdd" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button">
                <i class="fa fa-plus"></i> 添加
            </a>
            <a id="excelConfigEdit" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button">
                <i class="fa fa-edit"></i> 编辑
            </a>
            <a id="excelConfigDelete" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button">
                <i class="fa fa-trash-o"></i> 删除
            </a>
            <a id="excelConfigCheck" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button">
                <i class="fa fa-check-square-o"></i> 校验
            </a>
        </div>
        <div class="toolbar-right">
            <div class="input-group form-tool-search">
                <input type="text" id="excelConfigKeyWord" class="form-control input-sm" placeholder="请输入编码、名称、表名">
                <label id="excelConfigSearch" class="icon icon-search form-tool-searchicon"></label>
            </div>
        </div>
    </div>
    <table id="excelConfigGrid"></table>
    <div id="excelConfigPager"></div>

    <div id="excelConfigDialog" class="pb-excel-dialog" style="display:none;">
        <form id="excelConfigForm">
            <input type="hidden" id="configId">
            <input type="hidden" id="tableName">
            <input type="hidden" id="tableComment">
            <div class="pb-excel-form-grid">
                <div class="pb-excel-field">
                    <label>编码</label>
                    <input type="text" id="configCode" class="form-control input-sm" maxlength="100">
                </div>
                <div class="pb-excel-field">
                    <label>名称</label>
                    <input type="text" id="configName" class="form-control input-sm" maxlength="200">
                </div>
                <div class="pb-excel-field">
                    <label>创建人</label>
                    <input type="text" id="createdByName" class="form-control input-sm" readonly>
                </div>
                <div class="pb-excel-field">
                    <label>创建时间</label>
                    <input type="text" id="creationDate" class="form-control input-sm" readonly>
                </div>
                <div class="pb-excel-field">
                    <label>类型</label>
                    <select id="configType" class="form-control input-sm">
                        <option value="MAIN">主表</option>
                        <option value="CHILD">子表</option>
                    </select>
                </div>
                <div class="pb-excel-field">
                    <label>状态</label>
                    <select id="status" class="form-control input-sm">
                        <option value="1">启用</option>
                        <option value="0">停用</option>
                    </select>
                </div>
                <div class="pb-excel-field pb-excel-wide">
                    <label>数据库表</label>
                    <div class="pb-excel-inline">
                        <input type="text" id="tableSearchInput" class="form-control input-sm" placeholder="点击或输入表名/注释搜索">
                        <button type="button" id="tableSearchBtn" class="btn btn-default btn-sm">搜索</button>
                    </div>
                    <select id="tableResult" class="form-control input-sm pb-excel-table-result" size="5"></select>
                </div>
                <div class="pb-excel-field pb-excel-wide">
                    <label>备注</label>
                    <input type="text" id="remark" class="form-control input-sm" maxlength="1000">
                </div>
            </div>

            <div class="pb-excel-section-title">导出字段</div>
            <div class="pb-excel-table-wrap">
                <table class="pb-excel-table" id="columnTable">
                    <thead>
                    <tr>
                        <th style="width:42px;">拖拽</th>
                        <th style="width:70px;">序号</th>
                        <th>字段名</th>
                        <th>导出列名</th>
                        <th style="width:90px;">类型</th>
                        <th style="width:100px;">显示格式</th>
                        <th style="width:140px;">字典类型</th>
                        <th style="width:70px;">导出</th>
                        <th style="width:80px;">宽度</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>

            <div id="relationPanel">
                <div class="pb-excel-section-title">
                    关联子表
                    <button type="button" id="addRelationBtn" class="btn btn-default btn-xs">添加子表</button>
                </div>
                <div class="pb-excel-table-wrap">
                    <table class="pb-excel-table" id="relationTable">
                        <thead>
                        <tr>
                            <th style="width:70px;">序号</th>
                            <th>子表配置</th>
                            <th>主表字段</th>
                            <th>子表字段</th>
                            <th style="width:80px;">操作</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </form>
    </div>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript">
    window.pbExcelExportConfigUrl = '${url}';
</script>
<script src="static/pb-modern/excel-export-config/excel-export-config.js?v=${jsversion}" type="text/javascript"></script>
</body>
</html>
