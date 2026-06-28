<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>查看日志</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <script type="text/javascript">

    </script>
    <style>
        .dataTransferBox{
            overflow: hidden;
        }
        .dataTransferDiv{
            float: left;
            margin-left: 10px;
            overflow: hidden;
        }
        .dataTransferCon{
            margin: 0;
        }
        .dataTransfer{
            font-weight: bolder;
            float: left;
            margin: 0;
            width: 96px;
            text-align: right;
        }
        .dataTransfer-success{
            color: #3fde0b;
            float: left;
            margin-right: 6px;
        }
        .dataTransfer-fail{
            color: #de150b;
            float: left;
            margin-right: 6px;
        }
    </style>
</head>
<body>

<div>

    <fieldset>

        <div class="toolbar-right" >
            <table class="form_commonTable" border="0">
                <tr>
                    <th width="8%" style="word-break: break-all; word-warp: break-word; display: none;"><label
                            for="importFile">导入类型：</label>
                    </th>
                    <td width="16%" style="display: none;">
                        <input title="" class="form-control input-sm" type="text" name="filter-like-SYS_LOOKUP_NAME"
                               id="syslookUpName" value="数据同步"/>
                    </td>
                    <th width="6%" style="word-break: break-all; word-warp: break-word;"><label
                            for="importFile">导入文件：</label>
                    </th>
                    <td width="13%">
                        <input title="" class="form-control input-sm" type="text" name="filter-like-FILE_URL" id="importFile" />
                    </td>
                    <th width="6%" style="word-break: break-all; word-warp: break-word;" ><label
                            for="optPerson">导入人：</label>
                    </th>
                    <td width="13%">
                        <input title="" class="form-control input-sm" type="text" name="filter-like-OPETATOR_PERSON" id="optPerson"/>
                    </td>
                    <th width="6%" style="word-break: break-all; word-warp: break-word;" ><label
                            for="importDateBegain">导入时间：</label>
                    </th>
                    <td width="14%">
                        <div class="input-group input-group-sm">
                            <input title="" class="form-control input-sm date-picker" type="text"
                                   name="filter-gedatenew-CREATION_DATE-CREATION_DATE_BEGAIN"
                                   id="importDateBegain"/>
                            <span
                                class="input-group-addon">
                                <i
                                    class="glyphicon glyphicon-calendar">
                                </i>
                            </span>
                        </div>
                    </td>
                    <td width="2%">
                        <span> ~ </span>
                    </td>
                    <td width="14%">
                        <div class="input-group input-group-sm">
                            <input title="" class="form-control input-sm date-picker" type="text"
                                   name="filter-ledatenew-CREATION_DATE-CREATION_DATE_END"
                                   id="importDateEnd"/>
                            <span
                                    class="input-group-addon">
                                <i
                                        class="glyphicon glyphicon-calendar">
                                </i>
                            </span>
                        </div>
                    </td>
                    <td width="30%" style="text-align: center">
                        <a href="javascript:void(0)" style="margin-right:10px;"
                           class="btn btn-primary form-tool-btn typeb btn-sm" role="button" onclick="searchData();"
                           title="查询" id="queryFrom">查询</a>
                        <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button"
                           onclick="clearData();" title="清空" id="resetFrom">清空</a>
                    </td>
                </tr>
            </table>
        </div>
    </fieldset>
</div>

<table id="transferLog"></table>
<div id="transferLogPager"></div>
</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/console/user/js/consoleUser.js" type="text/javascript"></script>
<script type="text/javascript" src="avicit/platform6/console/sysdatatransfer/js/transferLogJs.js"></script>
<script type="text/javascript">
    function getViewButtons(cellvalue, options, rowObject) {
        var id = rowObject.id;
        return '<a href="javascript:void(0)" title="详情" class="iconfont icon-simulation" ' +
        'onClick="openDetail(\'' + id + '\')" name=\'' + cellvalue + '\' id = \'' + id + "_" + '\'></a>';
    }

    function openDetail(id) {
        var msg = $("#"+id +"_").attr("name");
        if (msg == 'null') {
            msg = "没有导出数据";
        }
        layer.open({
            type: 1,
            title: '详细信息',
            skin: 'bs-modal',
            area: ['80%', '80%'],
            maxmin: false,
            content: '<div style="white-space: pre-line;line-height: 32px;padding:20px;">' + msg + '</div>'
        });
    }

    var transferLog ;
    $(document).ready(function () {

        var dataGridColModel = [
              {label: 'id', name: 'id', key: true, width: 70, hidden: true}
            , {label: '导入文件', name: 'fileUrl', width: 70, align: 'left',sortable:false}
            , {label: '导入人', name: 'opetatorPerson', width: 40, align: 'center',sortable:false}
            , {
                label: '导入时间',
                name: 'creationDate',
                width: 60,
                align: 'center',
                sortable:false,
                formatter: function (cellvalue, options, row) {
                    if(cellvalue.length>19){
                        cellvalue = cellvalue.substr(0,19);
                    }
                    return cellvalue;
                }
            }
            , {label: '导入结果',
                name: 'transferResult',
                width: 320,
                align: 'left',
                sortable:false
            }
            , {label: '查看详情',
                name: 'transferDetail',
                width: 40,
                align: 'center',
                sortable:false,
                formatter: getViewButtons
        }
        ];
        //实例化transferLog
        transferLog = new TransferLog('transferLog',dataGridColModel);
    });


    //去后台查询
    function searchData() {
        // 处理截至日期+1，-换成/是为了兼容ie8
        var endTime = $('#importDateEnd').val();
        if (endTime != null && endTime != '') {
            var date=new Date(Date.parse(endTime.replace(/-/g,"/")));
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
            var D = (date.getDate()< 10 ? '0'+(date.getDate()+1):(date.getDate()+1));
            endTime = Y+M+D;
        }

        var searchFrom = JSON.stringify({
                'filter-like-SYS_LOOKUP_NAME': $('#syslookUpName').val(),
                'filter-like-OPETATOR_PERSON': $('#optPerson').val(),
                'filter-like-FILE_URL': $('#importFile').val(),
                'filter-gedatenew-CREATION_DATE-CREATION_DATE_BEGAIN': $('#importDateBegain').val(),
                'filter-ledatenew-CREATION_DATE-CREATION_DATE_END': endTime,
            });

        var searchdata = {param: searchFrom};

        $('#transferLog').jqGrid('setGridParam', {postData: searchdata}).trigger("reloadGrid", [{page: 1}]);

    }

    /*清空查询条件*/
    function clearData() {
        //select 标签ie不兼容问题修改
        $('#optPerson').val('');
        $('#importFile').val('')
        $('#importDateBegain').val('')
        $('#importDateEnd').val('')
        searchData();
    };

    function formatURL(value, row, index) {
        if (!value)
            return "<span style='color:green'>导入成功</span>";
        return "<span style='color:red;cursor:pointer;'onclick='downLoadFile(\"" + value + "\");'>失败【查看】</span>";
    }


    function downLoadFile(value) {
        var url = "platform/excelImportController/downErrorFile?fileName=" + value + "&downType=jq";
        var t = new DownLoad4URL('iframe', 'form', null, url);
        t.downLoad();

    }

    //删除导入记录
    function deleteResult() {
        var rows = dg.datagrid('getChecked');
        var ids = [];
        var l = rows.length;
        if (rows.length > 0) {
            $.messager.confirm('请确认', '您确定要删除当前所选的数据？',
                function (b) {
                    if (b) {
                        for (; l--;) {
                            ids.push(rows[l].id);
                        }
                        $.ajax({
                            url: 'platform/excelImportResult/deleteImportResults',
                            data: {
                                ids: ids.join(',')
                            },
                            type: 'post',
                            dataType: 'json',
                            success: function (result) {
                                if (result.flag == "success") {
                                    var dtTemp = dg.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
                                    dtTemp.datagrid('reload');
                                    $.messager.show({
                                        title: '提示',
                                        msg: '删除成功',
                                        timeout: 2000,
                                        showType: 'slide'
                                    });
                                }
                            }
                        });
                    }
                });
        } else {
            $.messager.alert('提示', '请选择要删除的记录！', 'warning');
        }
    }

    //返回主页面
    function returnMain() {
        var f = parent && parent.closeDataResult;
        if (typeof(f) !== 'undefined') {
            f();
        }
    }

    /**
     * 模拟ajax导出
     * 无弹出框,post提交无参数限制
     * @param iframeId
     * @param formId
     * @param headData
     */
    function DownLoad4URL(iframeId, formId, headData, actionUrl) {
        //设置是否显示遮罩Iframe
        if (typeof(iframeId) !== 'string' && iframeId.trim() !== '') {
            throw new Error("iframeId不能为空！");
        }

        //设置是否显示遮罩Iframe
        if (typeof(formId) !== 'string' && formId.trim() !== '') {
            throw new Error("formId不能为空！");
        }
        this.iframeName = "_iframe_" + iframeId;
        this.formName = "_form_" + formId;
        this.doc = document;//缓存全局对象，提高效率
        this.createDom.call(this, headData, actionUrl);
    };
    DownLoad4URL.prototype.downLoad = function () {
        this.doc.getElementById(this.formName).submit();
    };
    DownLoad4URL.prototype.createDom = function (headData, url) {
        //先销毁对象，再创建
        if (jQuery("#" + this.iframeName).length > 0) {
            jQuery("#" + this.iframeName).remove();

        }

        //先销毁对象，再创建
        if (jQuery("#" + this.formName).length > 0) {
            jQuery("#" + this.formName).remove();
        }
        if (jQuery("#" + this.iframeName).length == 0) {
            var exportIframe = this.doc.createElement("iframe");
            exportIframe.id = this.iframeName;
            exportIframe.name = this.iframeName;
            exportIframe.style.display = 'none';
            this.doc.body.appendChild(exportIframe);
            //创建form
            var exportForm = this.doc.createElement("form");
            exportForm.method = 'post';

            exportForm.action = url;
            exportForm.name = this.formName;
            exportForm.id = this.formName;
            exportForm.target = this.iframeName;
            this.doc.body.appendChild(exportForm);
            if (headData && typeof(headData) === 'object') {
                for (var key in headData) {
                    var headInput = this.doc.createElement("input");
                    headInput.setAttribute("name", key);
                    headInput.setAttribute("type", "text");
                    if (typeof(headData[key]) == 'string') {
                        headInput.setAttribute("value", headData[key]);
                    } else {
                        var jsonStr = JSON.stringify(headData[key]);
                        headInput.setAttribute("value", jsonStr);
                    }
                    exportForm.appendChild(headInput);
                }
            }
        }
    };
</script>
</html>
