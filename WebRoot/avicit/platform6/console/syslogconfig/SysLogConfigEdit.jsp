<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <!-- ControllerPath = "syslogconfig/sysLogConfigController/operation/Edit/id" -->
    <title>编辑</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
    <form id='form'>
        <input type="hidden" name="version" value="<c:out  value='${sysLogConfigDTO.version}'/>"/>
        <input type="hidden" name="id" value="<c:out  value='${sysLogConfigDTO.id}'/>"/>
        <input type="hidden" name="orderBy" value="<c:out  value='${sysLogConfigDTO.orderBy}'/>"/>
        <input type="hidden" name="menuId" value="<c:out  value='${sysLogConfigDTO.menuId}'/>"/>
        <input type="hidden" name="logConfigClass" value="<c:out  value='${sysLogConfigDTO.logConfigClass}'/>" />
        <table class="form_commonTable">
            <tr>
                <th width="70px">
                    <label for="logConfigClassAlias">类型:</label>
                </th>
                <td width="88%">
                    <div style="width:100px;height: 30px;float: left;padding: 5px">
                        <div style="float: left">
                            <c:if test="${sysLogConfigDTO.moduleType == 'DTO'}">
                                <input class="form-control input-sm" style="margin: 1px 3px"  type="radio" disabled name="moduleType" checked value="DTO" id="moduleType"/>
                            </c:if>
                            <c:if test="${sysLogConfigDTO.moduleType == 'eForm'}">
                                <input class="form-control input-sm" style="margin: 1px 3px"  type="radio" disabled name="moduleType" value="DTO" id="moduleType"/>
                            </c:if>
                        </div>
                        <div style="float: left">
                            <label for="moduleType">普通模块</label>
                        </div>
                    </div>
                    <div style="width:100px;height: 30px;float: left;padding: 5px">
                        <div style="float: left">
                            <c:if test="${sysLogConfigDTO.moduleType == 'DTO'}">
                                <input class="form-control input-sm" style="margin: 1px 3px" type="radio" disabled  name="moduleType" value="eForm" id="moduleType"/>
                            </c:if>
                            <c:if test="${sysLogConfigDTO.moduleType == 'eForm'}">
                                <input class="form-control input-sm" style="margin: 1px 3px" type="radio" disabled name="moduleType" CHECKED value="eForm" id="moduleType"/>
                            </c:if>
                        </div>
                        <div style="float: left">
                            <label for="moduleType">电子表单</label>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th width="70px">
                    <label for="logConfigClassAlias" id="storageText">实体类DTO:</label>
                </th>
                <td width="88%">
                    <div class="input-group input-group-sm">
                        <input class="form-control input-sm" type="text" readonly name="logConfigClassAlias"  id="logConfigClassAlias" value="<c:out  value='${sysLogConfigDTO.tableName}'/>" />
                        <span class="input-group-addon" id="logConfigClassBtn"><i class="glyphicon glyphicon-th-list"></i></span>
                    </div>
                </td>
            </tr>
            <tr>
                <th width="70px">
                    <label for="tableName">表名称:</label></th>
                <td width="88%">
                    <div style="width: calc(50% - 70px);float: left">
                        <input class="form-control input-sm" type="text" disabled name="tableName" id="tableName" value="<c:out  value='${sysLogConfigDTO.tableName}'/>"/>
                    </div>
                    <div style="width: calc(50% + 70px);float: left">
                        <div style="width: 100px;float: left;text-align: right;line-height: 30px;padding-right: 15px">
                            <label for="tableDes">表描述:</label>
                        </div>
                        <div style="width: calc(100% - 100px);float: left">
                            <input class="form-control input-sm" type="text" name="tableDes" id="tableDes" value="<c:out  value='${sysLogConfigDTO.tableDes}'/>"/>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th>
                    <label for="logTitle">日志标题:</label></th>
                <td>
                    <input class="form-control input-sm" type="text" name="logTitle" id="logTitle" value="<c:out  value='${sysLogConfigDTO.logTitle}'/>"/>
                </td>
            </tr>
            <tr>
                <th width="70px">
                    <label for="remark">描述:</label>
                </th>
                <td width="39%">
                    <textarea class="form-control input-sm" name="remark" id="remark">${sysLogConfigDTO.remark}</textarea>
                </td>
            </tr>
        </table>
    </form>
</div>
<div data-options="region:'south',border:false" style="height: 60px;">
    <div id="toolbar"
         class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
        <table class="tableForm" style="border:0;cellspacing:1;width:100%">
            <tr>
                <td width="50%" style="padding-right:4%;" align="right">
                    <a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存"
                       id="sysLogConfig_saveForm">保存</a>
                    <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                       id="sysLogConfig_closeForm">返回</a>
                </td>
            </tr>
        </table>
    </div>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script src="avicit/platform6/db/dbselect/selectCreatedDbTable/selectCreatedDbTable.js"></script>
<script src="avicit/platform6/eform/bpmsformmanage/select/selectPublishEform/selectPublishEform.js"></script>
<script type="text/javascript" src="static/h5/avicSelectBar/compent/lookupTypeSelect/lookupTypeSelect.js"></script>
<script type="text/javascript">
    var selectCreatedDbTable = new SelectCreatedDbTable("logConfigClass", "", "", "-1","-1");

    function closeForm() {
        parent.sysLogConfig.closeDialog("edit");
    }

    function saveForm() {
        var isValidate = $("#form").validate();
        if (!isValidate.checkForm()) {
            isValidate.showErrors();
            $(isValidate.errorList[0].element).focus();
            return false;
        }
        //限制保存按钮多次点击
        $('#sysLogConfig_saveForm').addClass('disabled').unbind("click");
        parent.sysLogConfig.save($('#form'), "eidt");
    }

    document.ready = function () {
        $('.date-picker').datepicker();
        $('.time-picker').datetimepicker({
            oneLine: true,//单行显示时分秒
            closeText: '确定',//关闭按钮文案
            showButtonPanel: true,//是否展示功能按钮面板
            showSecond: false,//是否可以选择秒，默认否
            beforeShow: function (selectedDate) {
                if ($('#' + selectedDate.id).val() == "") {
                    $(this).datetimepicker("setDate", new Date());
                    $('#' + selectedDate.id).val('');
                }
            }
        });

        parent.sysLogConfig.formValidate($('#form'));
        //保存按钮绑定事件
        $('#sysLogConfig_saveForm').bind('click', function () {
            saveForm();
        });
        //返回按钮绑定事件
        $('#sysLogConfig_closeForm').bind('click', function () {
            closeForm();
        });
        if("${sysLogConfigDTO.moduleType}" === 'eForm'){
            $("#storageText").text('');
            $("#storageText").append('<i class="required">*</i>存储模型:')
        }
        $('.date-picker').on('keydown', nullInput);
        $('.time-picker').on('keydown', nullInput);
    };
</script>
</body>
</html>