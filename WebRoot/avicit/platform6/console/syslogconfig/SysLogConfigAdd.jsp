<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
    <!-- ControllerPath = "syslogconfig/sysLogConfigController/operation/Add/null" -->
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
    <form id='form'>
        <input type="hidden" name="id"/>
        <input type="hidden" id="logConfigClass" name="logConfigClass"/>
        <input class="form-control input-sm" type="hidden" name="menuId" id="menuId"/>
        <table class="form_commonTable">
            <tr>
                <th width="70px">
                    <label for="logConfigClassAlias">类型:</label>
                </th>
                <td width="88%">
                    <div style="width:100px;height: 30px;float: left;padding: 5px">
                        <div style="float: left">
                            <input class="form-control input-sm" style="margin: 1px 3px"  type="radio" name="moduleType" checked value="DTO" id="moduleType"/>
                        </div>
                        <div style="float: left">
                            <label for="moduleType">普通模块</label>
                        </div>
                    </div>
                    <div style="width:100px;height: 30px;float: left;padding: 5px">
                        <div style="float: left">
                            <input class="form-control input-sm" style="margin: 1px 3px" type="radio"  name="moduleType" value="eForm" id="moduleType"/>
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
                        <input class="form-control input-sm" type="text" readonly name="logConfigClassAlias" id="logConfigClassAlias"/>
                        <span class="input-group-addon" id="logConfigClassBtn"><i class="glyphicon glyphicon-th-list"></i></span>
                    </div>
                </td>
            </tr>
            <tr>
                <th width="70px">
                    <label for="tableName">表名称:</label></th>
                <td width="88%">
                    <div style="width: calc(50% - 70px);float: left">
                        <input class="form-control input-sm" type="text" disabled name="tableName" id="tableName"/>
                    </div>
                    <div style="width: calc(50% + 70px);float: left">
                        <div style="width: 100px;float: left;text-align: right;line-height: 30px;padding-right: 15px">
                            <label for="tableDes">表描述:</label>
                        </div>
                        <div style="width: calc(100% - 100px);float: left">
                            <input class="form-control input-sm" type="text" name="tableDes" id="tableDes"/>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th>
                    <label for="logTitle">日志标题:</label></th>
                <td>
                    <input class="form-control input-sm" type="text" name="logTitle" id="logTitle"/>
                </td>
            </tr>
            <tr>
                <th width="70px">
                    <label for="remark">描述:</label>
                </th>
                <td width="39%">
                    <textarea class="form-control input-sm" name="remark" id="remark"></textarea>
                </td>
            </tr>
        </table>
    </form>
</div>
<div data-options="region:'south',border:false" style="height: 60px;">
    <div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
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
    var tableIndex;
    var type;
    var eFormData,DTOData={
        logConfigClass:'',
        tableName:'',
        tableDes:'',
        logTitle:''

    };
    var selectCreatedDbTable = new SelectCreatedDbTable("logConfigClassAlias", "logConfigClassAlias", "", "-1","-1");
    function clickCheckTable() {
        if(type==='eForm'){
            selectCreatedDbTable.open(function (data) {
                eFormData = {
                    logConfigClass:data.id,
                    tableName:data.tablename,
                    tableDes:data.name,
                    logTitle:data.name,

                }
                $("#logConfigClassAlias").val(eFormData.tableName)
                $("#logConfigClass").val(eFormData.logConfigClass)
                $("#tableName").val(eFormData.tableName)
                $("#tableDes").val(eFormData.tableDes)
                $("#logTitle").val(eFormData.logTitle)

            });
        }else{
            tableIndex = layer.open({
                type: 2,
                title: '请选择实体类',
                skin: 'bs-modal',
                area: ['60%', '80%'],
                maxmin: false,
                content: 'avicit/platform6/console/syslogconfig/SysLogConfigStorageModel.jsp'
            });
        }
    }
    $("#logConfigClassAlias").bind('click',clickCheckTable)
    $("#logConfigClassBtn").bind('click',clickCheckTable)
    function closeForm() {
        parent.sysLogConfig.closeDialog("insert");
    }

    function saveForm() {
        var isValidate = $("#form").validate();
        if (!isValidate.checkForm()) {
            isValidate.showErrors();
            $(isValidate.errorList[0].element).focus();
            return false;
        }
        $('#menuId').val(parent.sysLogConfig.selectTreeId)
        //限制保存按钮多次点击
        $('#sysLogConfig_saveForm').addClass('disabled').unbind("click");
        parent.sysLogConfig.save($('#form'), "insert");
    }

    $(document).ready(function () {
        $('.date-picker').datepicker();
        $('.time-picker').datetimepicker({
            oneLine: true,//单行显示时分秒
            closeText: '确定',//关闭按钮文案
            showButtonPanel: true,//是否展示功能按钮面板
            showSecond: false,//是否可以选择秒，默认否
            beforeShow: function (selectedDate) {
                if ($('#' + selectedDate.id).val() === "") {
                    $(this).datetimepicker("setDate", new Date());
                    $('#' + selectedDate.id).val('');
                }
            }
        });
        parent.sysLogConfig.formValidate($('#form'));
        //保存按钮绑定事件
        $('#sysLogConfig_saveForm').bind('click', function () {
            var isValidate = $("#form").validate();
            if (!isValidate.checkForm()) {
                isValidate.showErrors();
                return false;
            }
            avicAjax.ajax({
                url: "console/sysLogConfigController/operation/isInsert",
                data: {classPathOrDBId: $("#logConfigClass").val()},
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    var isSuccess = res.success;
                    var orgName = res.org;
                    if (isSuccess) {
                        layer.alert(orgName + '组织下已经添加过这条数据了！', {
                                icon: 7,
                                area: ['400px', ''], //宽高
                                closeBtn: 0,
                                btn: ['关闭'],
                                title:"提示"
                            }
                        );
                    } else {
                        saveForm();
                    }
                }
            });
        });
        //返回按钮绑定事件
        $('#sysLogConfig_closeForm').bind('click', function () {
            closeForm();
        });
        //监听radio发生变化
        $("input[type='radio']").change(function() {
            var elementData;
            $("#storageText").text('');
            if(this.value === 'eForm'){
                elementData = eFormData;
                type = "eForm";
                $("#storageText").append('<i class="required">*</i>存储模型:');
            }else{
                elementData = DTOData;
                type = "DTO";
                $("#storageText").append('<i class="required">*</i>实体类DTO:');
            }
            if(elementData!==undefined){
                $("#logConfigClassAlias").val(elementData.tableName)
                $("#logConfigClass").val(elementData.logConfigClass)
                $("#tableName").val(elementData.tableName)
                $("#tableDes").val(elementData.tableDes)
                $("#logTitle").val(elementData.logTitle)
            }else{
                $("#logConfigClassAlias").val('')
                $("#logConfigClass").val('')
                $("#tableName").val('')
                $("#tableDes").val('')
                $("#logTitle").val('')
            }
        })
        //绑定打开数据库

        $('.date-picker').on('keydown', nullInput);
        $('.time-picker').on('keydown', nullInput);
    });
</script>
</body>
</html>