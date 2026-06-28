<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form,table,fileupload";
%>
<!DOCTYPE html>
<html>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
    <title>属性设置</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
<%--    <jsp:include page="/avicit/platform6/console/imp/common/commonSelectionHead.jsp"></jsp:include>--%>
    <script src="static/js/platform/component/jQuery/jquery-easyui-1.3.5/jquery.easyui.min.js" type="text/javascript"></script>
    <script src="avicit/platform6/console/excel/sysexceltemplatesheetmanage/exp/js/SysExpExcelTemplateConfig.js" type="text/javascript"></script>
    <script src="static/h5/avicSelectBar/compent/lookupTypeSelect/lookupTypeSelect.js" type="text/javascript"></script>
</head>
<body class="easyui-layout card-padding-L-R panel-compact-spacing" fit="true">
<div data-options="region:'center',split:true,onResize:function(a,b){$('#sysImpSheetTableResjqGrid').setGridWidth(a);$(window).trigger('resize');}"
     style="height: 300px">
    <div id="sysImpColumnFiledToolbar" class="toolbar" style="height: 43px;">
        <div class="toolbar-left">
                <sec:accesscontrollist hasPermission="3"
                                       domainObject="formdialog_sysImpColumnFiledRes_button_add"
                                       permissionDes="添加">
                    <a id="sysImpColumnFiledRes_add" href="javascript:void(0)"
                       class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" onclick="sysExpTemplateConfig.toBatchAdd('${id}')"
                       title="添加"><i class="fa fa-plus"></i> 添加</a>
                </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_sysImpColumnFiledRes_button_delete"
                                   permissionDes="删除">
                <a id="sysImpColumnFiledRes_del" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button" onclick="sysExpTemplateConfig.del()"
                   title="删除"><i class="fa fa-trash-o"></i> 删除</a>
            </sec:accesscontrollist>
        </div>
    </div>
    <table id="sysImpColumnFiledResjqGrid"></table>
    <div id="jqGridPager"></div>
</div>

<div data-options="region:'east',split:true,width:fixwidth(.2),onResize:function(a,b){$('#sysImpSheetTableResjqGrid').setGridWidth(a);$(window).trigger('resize');}">
    <form id="sysImpTemplateOperationR">
        <table class="form_commonTable">
            <input type="hidden" id="id" name="id"/>
            <input type="hidden" id="version" name="version"/>
                <tr>
                    <th width="25%" style="word-break: break-all; word-warp: break-word;"><label
                            for="columnIndex">列序号:</label></th>
                    <td width="39%">
                        <input class="form-control input-sm" type="text" name="columnIndex" id="columnIndex" />
                    </td>
                </tr>
                <tr>
                    <th width="25%" style="word-break: break-all; word-warp: break-word;"><label for="fieldDesc">字段名称:</label></th>
                    <td width="39%">
                        <input class="form-control input-sm" type="text" name="columnTitle" id="columnTitle" disabled="disabled"/>
                    </td>
                </tr>
                <tr>
                    <th width="25%" style="word-break: break-all; word-warp: break-word;"><label for="fieldDesc">字段标题:</label></th>
                    <td width="39%">
                        <input class="form-control input-sm" type="text" name="fieldDesc" id="fieldDesc"/>
                    </td>
                </tr>
                <tr>
                    <th width="25%" style="word-break: break-all; word-warp: break-word;"><label for="fieldtype">字段类型:</label></th>
                    <td width="39%" >
                        <input class="form-control input-sm" type="text" name="fieldtype" id="fieldtype" disabled="disabled"/>
                    </td>
                </tr>
                <tr class="dateGroup" style="display: none">
                    <th width="10%" style="word-break: break-all; word-warp: break-word;"><label
                            for="dateStyle">日期格式:</label></th>
                    <td width="39%">
                        <select id="dateStyle" name="dateStyle" class="form-control input-sm" title="日期格式">
                            <option value="yyyy-MM-dd">yyyy-MM-dd</option>
                            <option value="yyyy-MM-dd HH:mm:ss">yyyy-MM-dd HH:mm:ss</option>
                            <option value="HH:mm:ss">HH:mm:ss</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th width="25%" style="word-break: break-all; word-warp: break-word;"><label
                            for="cellWidth">列宽(字符数):</label></th>
                    <td width="39%">
                        <input class="form-control input-sm" type="text" name="cellWidth" id="cellWidth"/>
                    </td>
                </tr>
            </table>
        </form>
    <div class="datagrid-toolbar foot-formopera" style="padding-bottom: 6px;">
        <table class="tableForm" border="0" cellspacing="1" width='100%'>
            <tr>
                <td align="right">
                    <a id="saveButton" href="javascript:void(0)" style="margin-right:10px;"
                       class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存"
                       onclick="saveForm();">保存</a>
                </td>
            </tr>
        </table>
    </div>
</div>
</body>
<script type="text/javascript">
    var sysExpTemplateConfig;
    var templateId = "${id}";
    //column配置关系页页面
    var dataGridColModel = [
        {label: 'id', name: 'id', key: true, width: 75, hidden: true},
        {label: '列序号', name: 'columnIndex', sortable: false, width: 150},
        {label: '字段名称', name: 'columnTitle', sortable: false, width: 150},
        {label: '字段标题', name: 'fieldDesc', sortable: false, width: 150},
        {label: '字段类型', name: 'fieldtype', sortable: false, width: 150},
        {label: '日期格式', name: 'dateStyle', sortable: false, width: 150,hidden: true},
        {label: '列宽度', name: 'cellWidth', sortable: false, width: 150},
        {label:'版本',name:'version',width:80,hidden:true}
    ];

    sysExpTemplateConfig = new SysExpExcelTemplateConfig(
        'sysImpColumnFiledResjqGrid', 'platform6/msystem/excel/column/sysExcelColumnController/operation/',
        'sysImpTemplateOperationR', {'excelId': templateId}, dataGridColModel);

    function showFlagFormatter(cellValue,options,rowObject){
        if(rowObject.showFlag == "N"){
            return "否";
        }else if(rowObject.showFlag == "Y"){
            return "是";
        }
    }

    function saveForm(){
        var  dataArray = new Array();
        dataArray.push(serializeObject($("#sysImpTemplateOperationR")));
        avicAjax.ajax({
            url:"platform6/msystem/excel/column/sysExcelColumnController/operation/saveSysExpColumnFiledRes",
            data : {
                data : JSON.stringify(dataArray),
                sheetId : templateId
            },
            type : 'post',
            dataType : 'json',
            success : function(r){
                if (r.flag == "success"){
                    layer.msg('保存成功！');
                    $("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam', {
                        datatype: 'json',
                        postData: {'excelId': templateId}
                    }).trigger("reloadGrid");
                }else{
                    layer.alert('保存失败,请联系管理员!', {
                        icon: 7,
                        area: ['400px', ''], //宽高
                        closeBtn: 0,
                        btn: ['关闭'],
                        title:"提示"
                    });
                }
            }
        });
    }
</script>
</html>