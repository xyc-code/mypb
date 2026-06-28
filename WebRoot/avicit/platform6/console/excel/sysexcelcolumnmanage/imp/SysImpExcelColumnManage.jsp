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
<style type="text/css">
    .convertModeTips{
        width: 16px;
        height: 16px;
        background-image: url(static/images/platform/common/tips.png);
    }
    .convertModeTips{
        float: right;
        margin-right: -22px;
        margin-top: -23px;
    }
    .propertyTypeTips{
        width: 16px;
        height: 16px;
        background-image: url(static/images/platform/common/tips.png);
        float: right;
        margin-right: -22px;
        margin-top: -23px;
    }.dateStyleTips{
         width: 16px;
         height: 16px;
         background-image: url(static/images/platform/common/tips.png);
         float: right;
         margin-right: -22px;
         margin-top: -23px;
     }
</style>
<head>
    <title>属性设置</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/select2/select2.css"/>
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
<%--    <jsp:include page="/avicit/platform6/console/imp/common/commonSelectionHead.jsp"></jsp:include>--%>
    <script src="static/js/platform/component/jQuery/jquery-easyui-1.3.5/jquery.easyui.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="static/h5/select2/select2.js"></script>
    <script src="avicit/platform6/console/excel/sysexcelcolumnmanage/imp/js/SysImpExcelColumn.js" type="text/javascript"></script>
    <script src="static/h5/avicSelectBar/compent/lookupTypeSelect/lookupTypeSelect.js" type="text/javascript"></script>
</head>
<body class=" easyui-layout" fit="true">
<div data-options="region:'center',split:true,onResize:function(a,b){$('#sysImpSheetTableResjqGrid').setGridWidth(a);$(window).trigger('resize');}"
     style="height: 350px">
    <div id="sysImpColumnFiledToolbar" class="toolbar" style="height: 43px;">
        <div class="toolbar-left">
            <c:if test="${sysImpTemplateDTO.manageStyle=='1'}">
                <sec:accesscontrollist hasPermission="3"
                                       domainObject="formdialog_sysImpColumnFiledRes_button_init"
                                       permissionDes="初始化列">
                    <a id="sysImpTemplatecolum_start" href="javascript:;"
                       class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
                       title="初始化列"><i class="fa fa-cogs"></i> 初始化列</a>
                </sec:accesscontrollist>
                <sec:accesscontrollist hasPermission="3"
                                       domainObject="formdialog_sysImpColumnFiledRes_matching"
                                       permissionDes="自动匹配">
                    <a id="sysImpcolumnAutoFind" href="javascript:void(0)"
                       class="btn btn-primary form-tool-btn btn-sm" role="button"
                       title="自动匹配"><i class="fa fa-compress"></i> 自动匹配</a>
                </sec:accesscontrollist>
            </c:if>
            <c:if test="${sysImpTemplateDTO.manageStyle=='2'}">
                <sec:accesscontrollist hasPermission="3"
                                       domainObject="formdialog_sysImpColumnFiledRes_button_add"
                                       permissionDes="添加">
                    <a id="sysImpColumnFiledRes_add" href="javascript:void(0)"
                       class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" onclick="clearAndReset()"
                       title="添加"><i class="fa fa-plus"></i> 添加</a>
                </sec:accesscontrollist>
                <sec:accesscontrollist hasPermission="3"
                                       domainObject="formdialog_sysImpColumnFiledRes_button_batch_add"
                                       permissionDes="批量添加">
                    <a id="sysImpColumnFiledRes_batchAdd" href="javascript:void(0)"
                       class="btn btn-primary form-tool-btn btn-sm" role="button"
                       onclick="sysImpTemplateOperation.batchAdd()"
                       title="批量添加"><i class="fa fa-plus"></i>批量添加</a>
                </sec:accesscontrollist>
            </c:if>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_sysImpColumnFiledRes_button_delete"
                                   permissionDes="删除">
                <a id="sysImpColumnFiledRes_del" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="删除"><i class="fa fa-trash-o"></i> 删除</a>
            </sec:accesscontrollist>
            <input id="relatedEntity" type="hidden" value="${sheetDto.tableName}">
            <input id="templateId" type="hidden" value="${sheetDto.templateId}">
            <input id="sheetOrDtoName" type="hidden" value="${sheetDto.sheetName}">
            <input id="manageStyle" type="hidden" value="${sysImpTemplateDTO.manageStyle}">
            <input id="sheetId" type="hidden" value="${sheetDto.id}">
            <input id="templateCode" type="hidden" value="${sysImpTemplateDTO.code}">
            <c:if test="${sysImpTemplateDTO.manageStyle=='2'}">
                <span class="remind-text">◆ 提示：当您修改配置内容后，需<a id="createTemplate" name="createTemplate" href="javascript:void(0)"
                                                             class="text-link" role="button"
                                                             title="重新生成模板">重新生成模板</a>才能生效</span>
            </c:if>
        </div>
    </div>
    <table id="sysImpColumnFiledResjqGrid"></table>
    <div id="jqGridPager"></div>
</div>

<div data-options="region:'east',split:true,width:fixwidth(.26),onResize:function(a){$(window).trigger('resize');}" >
    <form id="sysImpTemplateOperationR">
        <table class="form_commonTable" style="width: 340px;margin: 0 auto">
            <input type="hidden" id="id" name="id"/>
            <input type="hidden" id="vcharlength" name="vcharlength"/>
            <input type="hidden" id="datascale" name="datascale"/>
            <c:if test="${sysImpTemplateDTO.manageStyle=='1'}">
                <tr>
                    <th width="80px" style="word-break: break-all; word-warp: break-word;"><label
                            for="virtualColumn">是否虚拟列:</label></th>
                    <td width="160px">
                        <pt6:h5select css_class="form-control input-sm" name="virtualColumn" defaultValue="N"
                                      id="virtualColumn" title="是否虚拟列" lookupCode="PLATFORM_YES_NO_FLAG"/>
                    </td>
                </tr>
            </c:if>
            <c:if test="${sysImpTemplateDTO.manageStyle=='2'}">
                <tr>
                    <th width="80px" style="word-break: break-all; word-warp: break-word;"><label
                            for="columnIndex">列序号:</label></th>
                    <td width="160px">
                        <input class="form-control input-sm" type="text" name="columnIndex" id="columnIndex"/>
                    </td>
                </tr>
            </c:if>
            <c:choose>
                <c:when test="${sysImpTemplateDTO.manageStyle=='1'}">
                    <tr>
                        <th style="word-break: break-all; word-warp: break-word;"><label
                                for="field">字段名称:</label></th>
                        <td >
<%--                            <input class="form-control input-sm" type="text" name="field" id="field"/>--%>
                            <pt6:h5select css_class="form-control input-sm" name="field" id="field" title="字段名称"
                                          isNull="true" lookupCode=""/>
                        </td>
                    </tr>
                </c:when>
                <c:otherwise>
                    <tr>
                        <th style="word-break: break-all; word-warp: break-word;"><label
                                for="field">属性:</label></th>
                        <td >
                            <pt6:h5select css_class="form-control input-sm" name="field" id="field" title="属性"
                                          isNull="true" lookupCode=""/>
                        </td>
                    </tr>
                </c:otherwise>
            </c:choose>
            <tr>
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="fieldDesc">字段标题:</label></th>
                <td >
                    <input class="form-control input-sm" type="text" name="fieldDesc" id="fieldDesc" disabled="disabled"/>
                </td>
            </tr>
            <tr>
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="fieldtype">字段类型:</label></th>
                <td >
                    <%--<pt6:h5select css_class="form-control input-sm" name="fieldtype" id="fieldtype" title="字段类型"
                                  lookupCode="PLATFORM_DB_COL_TYPE" isNull="true"/>--%>
                    <input class="form-control input-sm" type="text" name="fieldtype" id="fieldtype" disabled="disabled"/>
                </td>
            </tr>
            <tr>
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="required">是否必填:</label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="required" defaultValue="N" id="required"
                                  title="是否必填" lookupCode="PLATFORM_YES_NO_FLAG" isNull="true"/>
                </td>
            </tr>
            <tr>
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="keyunique">是否唯一:</label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" isNull="true" name="keyunique" defaultValue="N" id="keyunique"
                                  title="是否唯一" lookupCode="PLATFORM_YES_NO_FLAG"/>
                </td>
            </tr>
            <tr class="propertyTypeTr">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="propertyType">输入类型:<i class="tips-iconhelp icon iconfont icon-question-circle" id="propertyTypeTips"></i></label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="propertyType" id="propertyType" title="输入类型"
                                  isNull="true" lookupCode="PLATFORM_EXCEL_PROPERTY_TYPE"/>
                </td>
            </tr>
            <tr class="lookupGroup" style="display: none">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="sysLookupCode">通用代码:</label></th>
                <td  id="LookupTypeSelect">
                    <div class="input-group input-group-sm avicselect">
                        <input type="text" class="form-control" name="sysLookupCode" id="sysLookupCode">
                        <span class="input-group-addon avicselect-act">
                            <i class="glyphicon glyphicon-list"></i>
                            <div class="avicselect-list"></div>
                        </span>
                    </div>
                </td>
            </tr>
            <tr class="checkTypeTr">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="checkType">格式校验:</label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="checkType" id="checkType" title="格式校验"
                                  isNull="true" lookupCode="PLATFORM_EXCEL_PROPERTY_CHECK"/>
                </td>
            </tr>
            <tr class="dateGroup" style="display: none">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="dateStyle">日期格式:<i class="tips-iconhelp icon iconfont icon-question-circle" id="dateStyleTips"></i></label></th>
                <td >
                    <select id="dateStyle" name="dateStyle" class="form-control input-sm" title="日期格式">
                        <option value="">请选择</option>
                        <option value="yyyy-MM-dd">yyyy-MM-dd</option>
                        <option value="yyyy-MM-dd HH:mm:ss">yyyy-MM-dd HH:mm:ss</option>
<%--                        <option value="HH:mm:ss">HH:mm:ss</option>--%>
                    </select>
                </td>
            </tr>

            <tr class="defaultValueTr">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="defaultValue">默认值:</label></th>
                <td >
                    <select id="defaultValue" name="defaultValue" class="form-control input-sm" title="默认值">
<%--                        <option value="">请选择</option>--%>
<%--                        <option value="LOGIN_USER_ID">当前登录人ID</option>--%>
<%--                        <option value="LOGIN_USER_CODE">当前登录人编码</option>--%>
<%--                        <option value="LOGIN_USER_NAME">当前登录人姓名</option>--%>
<%--                        <option value="LOGIN_DEPT_ID">当前登录部门ID</option>--%>
<%--                        <option value="LOGIN_DEPT_CODE">当前登录部门编码</option>--%>
<%--                        <option value="LOGIN_DEPT_NAME">当前登录部门名称</option>--%>
                    </select>
                </td>
            </tr>
            <tr class="convertMode">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="convertMode">数据转换方式:<i class="tips-iconhelp icon iconfont icon-question-circle" id="convertModeTips"></i></label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="convertMode" id="convertMode" title="数据转换方式"
                                  isNull="true" lookupCode="PLATFORM_EXCEL_CONVERT_MODE"/>
                </td>
            </tr>
            <tr class="convertMode convertGroup" style="display: none;">
                <th style="word-break: break-all; word-warp: break-word;"><label for="convertFailOpt">转换失败操作:</label>
                </th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="convertFailOpt" id="convertFailOpt"
                                  defaultValue="0" title="转换失败操作" isNull="false"
                                  lookupCode="PLATFORM_EXCEL_CONVERT_FAIL_OPT"/>
                </td>
            </tr>

            <tr class="convertMode convertGroup localGroup" style="display: none;">
                <th style="word-break: break-all; word-warp: break-word;"><label for="convertDto">
                    <c:choose>
                        <c:when test="${sysImpTemplateDTO.manageStyle=='1'}">
                            目标表名称:
                        </c:when>
                        <c:otherwise>
                            目标实体类:
                        </c:otherwise>
                    </c:choose>
                </label></th>
                <td >
                    <div class="input-group input-group-sm">
                        <input class="form-control input-sm" type="text" name="convertDto" id="convertDto"/>
                        <span class="input-group-addon" id="dataSourceBtn"><i
                                class="glyphicon glyphicon-th-list"></i></span>
                    </div>
                    <%--						<pt6:h5select css_class="form-control input-sm" name="convertDto" id="convertDto" isNull="true" lookupCode=""/>--%>
                </td>
            </tr>
            <tr class="convertMode convertGroup localGroup" style="display: none;">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="sourceProp">对应属性:</label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="sourceProp" id="sourceProp" title="对应属性"
                                  isNull="true" lookupCode=""/>
                </td>
            </tr>
            <tr class="convertMode convertGroup localGroup" style="display: none;">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="targetProp">转换属性:</label></th>
                <td >
                    <pt6:h5select css_class="form-control input-sm" name="targetProp" id="targetProp" title="转换属性"
                                  isNull="true" lookupCode=""/>
                </td>
            </tr>
            <tr class="convertMode serviceGroup" style="display: none">
                <th style="word-break: break-all; word-warp: break-word;"><label
                        for="serviceUrl">自定义类:</label></th>
                <td >
                    <input class="form-control input-sm" type="text" name="serviceUrl" id="serviceUrl"/>
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
<script type="text/javascript">
    var selectData = {};
    var mapListTableName = null;
    var checkTypeData = ${checkTypeData};
    var onlyOrNot = ${onlyOrNot};
    var sysImpTemplateOperation;

    //加载完后初始化
    $(document).ready(function () {
        //column配置关系页页面
        var dataGridColModel = [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true},
            {label: 'sheetId', name: 'sheetid', width: 150, sortable: false, hidden: true},
            {label: '列序号', name: 'columnIndex', sortable: false, width: 150, editable: true},
            {label: '列标题', name: 'columnTitle', sortable: false, width: 150, editable: true},
            // {label : '属性',name : 'field',editable : false,hidden: true,edittype : "custom",editoptions : {custom_element : selectElemName,custom_value : selectValueName,forId : 'field' ,value : selectData }},
            {label: '字段名称', name: 'field', sortable: false, width: 150, editable: true},
            {label: '字段标题', name: 'fieldDesc', sortable: false, width: 150, editable: true},
            {label: '字段类型', name: 'fieldtype', sortable: false, width: 150, editable: false, formatter: formatterValueFieldType, unformat: unFormatterValueFieldType},
            {
                label: '是否必填',
                name: 'required',
                sortable: false,
                width: 150,
                editable: false,
                formatter: formatterValueYN,
                unformat: unformatterValueYN
            },
            {
                label: '是否唯一 ',
                name: 'keyunique',
                sortable: false,
                width: 150,
                editable: true,
                formatter: formatterValueYN,
                unformat: unformatterValueYN
            },
            // {label : '是否唯一性列 ',name : 'keyuniqueName',sortable:false, width : 150,editable : false,edittype : "custom",editoptions : {custom_element : selectElem,custom_value : selectValue,forId : 'keyunique',value : onlyOrNot}},
            // {
            //     label: '是否显示',
            //     name: 'showFlag',
            //     sortable: false,
            //     width: 150,
            //     editable: false,
            //     formatter: formatterValueYN,
            //     unformat: unformatterValueYN
            // },
            {label: '格式校验 ', name: 'checkType', sortable: false, width: 75, hidden: true},
            // {label : '格式校验 ',name : 'checkTypeName', sortable:false, width : 150,editable : false,edittype : "custom",editoptions : {custom_element : selectElem,custom_value : selectValue,forId : 'checkType',value : checkTypeData}},
            {
                label: '输入类型',
                name: 'propertyType',
                sortable: false,
                width: 150,
                formatter: formatterPropertyType,
                unformat: unformatterPropertyType
            },
            {
                label: '默认值',
                name: 'defaultValue',
                sortable: false,
                width: 150,
                formatter: formatterDefaultValue,
                unformat: unformatterDefaultValue
            },
            {
                label: '是否虚拟列',
                name: 'virtualColumn',
                sortable: false,
                width: 150,
                formatter: formatterValueYN,
                unformat: unformatterValueYN
            },
            // {label : '文本长度',name : 'vcharlength',sortable:false, width : 150},
            // {label : '小数位',name : 'datascale',sortable:false, width : 150},
            {
                label: '数据转换方式',
                name: 'convertMode',
                sortable: false,
                width: 150,
                formatter: formatterConvertMode,
                unformat: unformatterConvertMode
            },
            {label: '通用代码', name: 'sysLookupCode', sortable: false, width: 150, hidden: true},
            {label: '日期格式', name: 'dateStyle', sortable: false, width: 150, hidden: true},
            // {label: '列宽度', name: 'cellWidth', sortable: false, width: 150, hidden: true},
            {label: '转换失败操作', name: 'convertFailOpt', sortable: false, width: 150, hidden: true},
            {label: '转换实体对象', name: 'convertDto', sortable: false, width: 150, hidden: true},
            {label: '对应属性', name: 'sourceProp', sortable: false, width: 150, hidden: true},
            {label: '转换属性', name: 'targetProp', sortable: false, width: 150, hidden: true},
            {label: '服务编码', name: 'serviceCode', sortable: false, width: 150, hidden: true},
            {label: '服务地址', name: 'serviceUrl', sortable: false, width: 150, hidden: true},
            {label: '同步设置属性json', name: 'synchPropJson', sortable: false, width: 150, hidden: true},
            {label: '字段长度', name: 'vcharlength', sortable: false, width: 150, hidden: true},
            {label: '字段精度', name: 'datascale', sortable: false, width: 150, hidden: true}
        ];

        sysImpTemplateOperation = new SysImpExcelColumn(
            'sysImpColumnFiledResjqGrid', 'platform6/msystem/excel/column/sysExcelColumnController/operation/',
            'sysImpTemplateOperationR', {'excelId': $("#sheetId").val()}, dataGridColModel);
        sysImpTemplateOperation.formValidate($('#sysImpTemplateOperationR'));

        initTips();

        if ($("#manageStyle").val() == '2') {
            initPropertyName($("#sheetOrDtoName").val(), "field");
        } else {
            initPropertyName($("#relatedEntity").val(), "field");
            $('#required').attr("disabled",'disabled');
            $('#keyunique').attr("disabled",'disabled');
        }
        // $('#fieldtype').attr("disabled",'disabled');

        sysImpTemplateOperation.initDefaultValueSelect2();

    });
	
	function initTips() {
		var tipsIndex;
		$("#convertModeTips").mouseover(function(){
			var message = "<span style='color:#333333;'>自定义转换方式说明：使用自定义接口全限定名，可通过自定义接口获取转换数据结果。</span>";
            tipsIndex= layer.tips(message, $(this), {
                tips: 1,
				area: ['auto','auto'],
                time: 0
            });
        }).mouseout(function(){
            layer.close(tipsIndex);
        });

        $("#propertyTypeTips").mouseover(function(){
			var message = "<span style='color:#333333;'>选择人员匹配当前系统人员登录名；选择部门或角色匹配当前系统部门编码或角色编码。</span>";
            tipsIndex= layer.tips(message, $(this), {
                tips: 1,
				area: ['auto','auto'],
                time: 0
            });
        }).mouseout(function(){
            layer.close(tipsIndex);
        });
        $("#dateStyleTips").mouseover(function(){
			var message = "<span style='color:#333333;'>支持EXCEL单元格为文本格式和日期格式数据，日期类型yyyy-MM-dd和yyyy/MM/dd等价。</span>";
            tipsIndex= layer.tips(message, $(this), {
                tips: 1,
				area: ['auto','auto'],
                time: 0
            });
        }).mouseout(function(){
            layer.close(tipsIndex);
        });
	} 

    function clearAndReset() {
        sysImpTemplateOperation.resetData(true);//重置所有数据
        sysImpTemplateOperation.reLoadShowData({});//重置显隐区
    }

    //格式化输入类型
    function formatterPropertyType(cellvalue, options, rowObject) {
        if (cellvalue == "0") {
            return "通用代码"
        } else if (cellvalue == "1") {
            return "人员"
        } else if (cellvalue == "2") {
            return "部门";
        } else if (cellvalue == "3") {
            return "角色";
        } else if (cellvalue == "4") {
            return "自动编码";
        } else {
            return "";
        }
    }

    function unformatterPropertyType(cellvalue, options, rowObject) {
        if (cellvalue == "通用代码") {
            return "0"
        } else if (cellvalue == "人员") {
            return "1"
        } else if (cellvalue == "部门") {
            return "2";
        } else if (cellvalue == "角色") {
            return "3";
        } else if (cellvalue == "自动编码") {
            return "4";
        } else {
            return "";
        }
    }

    //格式化默认值
    function formatterDefaultValue(cellvalue, options, rowObject) {
        if (cellvalue == "LOGIN_USER_ID") {
            return "当前登录人ID"
        } else if (cellvalue == "LOGIN_USER_CODE") {
            return "当前登录人编码"
        } else if (cellvalue == "LOGIN_USER_NAME") {
            return "当前登录人姓名";
        } else if (cellvalue == "LOGIN_DEPT_ID") {
            return "当前登录部门ID";
        } else if (cellvalue == "LOGIN_DEPT_CODE") {
            return "当前登录部门编码";
        } else if (cellvalue == "LOGIN_DEPT_NAME") {
            return "当前登录部门名称";
        } else if (cellvalue){
            return cellvalue;
        } else {
            return "";
        }
    }

    function unformatterDefaultValue(cellvalue, options, rowObject) {
        if (cellvalue == "当前登录人ID") {
            return "LOGIN_USER_ID"
        } else if (cellvalue == "当前登录人编码") {
            return "LOGIN_USER_CODE"
        } else if (cellvalue == "当前登录人姓名") {
            return "LOGIN_USER_NAME";
        } else if (cellvalue == "当前登录部门ID") {
            return "LOGIN_DEPT_ID";
        } else if (cellvalue == "当前登录部门编码") {
            return "LOGIN_DEPT_CODE";
        } else if (cellvalue == "当前登录部门名称") {
            return "LOGIN_DEPT_NAME";
        } else if (cellvalue){
            return cellvalue;
        } else {
            return "";
        }
    }

    //格式化数据转换方式
    function formatterConvertMode(cellvalue, options, rowObject) {
        if (cellvalue == "0") {
            return "本地"
        } else if (cellvalue == "1") {
            return "自定义"
        } else {
            return "";
        }
    }

    function unformatterConvertMode(cellvalue, options, rowObject) {
        if (cellvalue == "本地") {
            return "0"
        } else if (cellvalue == "自定义") {
            return "1"
        } else {
            return "";
        }
    }

    //根据是否虚拟列状态展示显隐
    function formatterValueYNWithVirtual(cellvalue, options, rowObject) {
        if (rowObject.virtualColumn == "Y") {
            return "";
        } else {
            if ("Y" == cellvalue) {
                return "是"
            } else if ("N" == cellvalue) {
                return "否"
            } else {
                return "";
            }
        }
    }

    //判断是否为空
    function formatterValueYN(cellvalue, options, rowObject) {
        if ("Y" == cellvalue) {
            return "是"
        } else if ("N" == cellvalue) {
            return "否"
        } else {
            return "";
        }
    }

    //格式化字段类型
    function formatterFieldType(cellvalue, options, rowObject) {
        if (rowObject.virtualColumn == "Y") {
            return "";
        } else if (cellvalue){
            return cellvalue;
        }
        return "";
    }

    function unformatterValueYN(cellvalue, options, rowObject) {
        if (cellvalue == "是") {
            return "Y"
        } else if (cellvalue == "否") {
            return "N"
        } else {
            return "";
        }
    }

    /**
     * 格式化字段类型
     */
    function formatterValueFieldType(cellvalue, options, rowObject) {
        return getUnionFieldType(cellvalue, rowObject.vcharlength != null ? rowObject.vcharlength.toString() : null, rowObject.datascale != null ? rowObject.datascale.toString() : null);
    }

    function getUnionFieldType(cellvalue, vcharlength, datascale) {
        if (cellvalue) {
            var scale = "";
            if (vcharlength) {
                scale += "(" + vcharlength;
            }
            if (datascale) {
                scale += "," + datascale + ")";
            } else {
                if (scale.length > 0) {
                    scale += ")";
                }
            }
            if (scale.length > 0) {
                return cellvalue + scale;
            } else {
                return cellvalue;
            }
        } else {
            return "";
        }
    }

    function unFormatterValueFieldType(cellvalue, options, rowObject) {
        if (cellvalue) {
            if (cellvalue.indexOf("(") > 0) {
                return cellvalue.substr(0, cellvalue.indexOf("("));
            } else {
                return cellvalue;
            }
        } else {
            return "";
        }
    }

    function selectElemName(value, options) {
        var rowId = options.rowId;
        var datas = selectData;
        var forId = options.forId;
        var rowData = $(this).jqGrid('getRowData', rowId);
        var gid = $(this).jqGrid("getGridParam", "id");
        var elemHtml = [];
        elemHtml.push('<select onchange="$(\'#' + gid + '\').jqGrid(\'endEditCell\')" class="form-control">');
        elemHtml.push('<option value="">请选择</option>');
        for (var code in datas) {
            if (options.dataModel && options.dataModel.model == "array_object") {
                elemHtml.push('<option value="' + datas [code][options.dataModel.key] + '">' + datas[code] [options.dataModel.value] + '</option>');
            } else {
                elemHtml.push('<option value="' + code + '">' + datas[code] + '</option>');
            }
        }
        elemHtml.push('</select>');

        var elem = $(elemHtml.join(''));
        elem.val(rowData[forId]);
        elem.attr('data-rowid', rowId);
        elem.attr('data-forid', forId);
        return elem[0];
    };

    function selectValueName(elem, operation, value) {
        if (operation === 'get') {
            var rowId = $(elem).attr('data-rowid');
            var forId = $(elem).attr('data-forid');
            var selectText = $(elem).find('option:selected').text();
            var rowData = {};
            rowData[forId] = $(elem).val();
            $(this).jqGrid('setRowData', rowId, rowData);
            if (selectText != "请选择") {
                getName(rowId, selectText);
                return selectText;
            } else {
                return "";
            }
        } else if (operation === 'set') {
            $(elem).find('option[text="' + value + '"]').attr("selected", true);
        }
    };

    //通用代码
    $("#LookupTypeSelect").on("click", function(){
        new H5CommonLookupTypeSelect({type:'lookupSelect', textFiled:'sysLookupCode', callBack: function (rowdata) {
                $('#sysLookupCode').val(rowdata.lookupType);
            }});
    });

    //字段类型改变事件
    // $("#fieldtype").change(function () {
    //     var r = $(this).children('option:selected').val();
    //     sysImpTemplateOperation.propertyTypeRelate('');
    //     sysImpTemplateOperation.fieldtypeRelate(r);
    // });

    //根据选择的属性设置标题
    $("#field").change(function () {
        let field = $(this).find("option:selected");
        let title = field.attr("title");
        let fieldtype = field.attr("fieldtype");
        let vcharlength = field.attr("vcharlength");
        let datascale = field.attr("datascale");
        $("#fieldDesc").val(title);
        if (vcharlength) {
            $("#vcharlength").val(vcharlength);
        }
        if (datascale) {
            $("#datascale").val(datascale);
        }
        $("#fieldtype").val(getUnionFieldType(fieldtype, vcharlength, datascale));
        var isrequire = field.attr("isrequire");
        var keyunique = field.attr("keyunique");
        $("#required").find('option[value="' + isrequire + '"]').prop("selected", true);
        $("#keyunique").find('option[value="' + keyunique + '"]').prop("selected", true);
    });

    //格式校验选择
    $("#checkType").change(function () {
        var r = $(this).children('option:selected').val();
        sysImpTemplateOperation.checkTypeRelate(r);
    });

    //输入类型选择
    $("#propertyType").change(function () {
        var r = $(this).children('option:selected').val();
        sysImpTemplateOperation.propertyTypeRelate(r);
    });

    //数据转换方式选择
    $("#convertMode").change(function () {
        var r = $(this).children('option:selected').val();
        sysImpTemplateOperation.convertModeRelate(r);
    })

    //是否虚拟列更改
    $("#virtualColumn").change(function () {
        var rowId = $("#sysImpColumnFiledResjqGrid").jqGrid("getGridParam", "selrow");
        var rowData = $("#sysImpColumnFiledResjqGrid").jqGrid('getRowData',rowId);
        var r = $(this).children('option:selected').val();
        rowData.virtualColumn = r;
        //设置表单数据
        $("#sysImpTemplateOperationR").form('load', rowData);
        sysImpTemplateOperation.reLoadShowData(rowData);
    })

    //点击字段属性，实现其他字段联动输入
    function getName(rowId, getSlectedName) {
        for (i = 0; i < mapListTableName.length; i++) {
            if (mapListTableName[i].COLUMN_NAME == getSlectedName) {
                if (mapListTableName[i].DATA_TYPE == "NUMBER") {
                    $("#sysImpColumnFiledResjqGrid").jqGrid('setRowData', rowId,
                        {
                            field: mapListTableName[i].COLUMN_NAME,
                            fieldDesc: mapListTableName[i].COMMENTS,
                            required: mapListTableName[i].NULLABLE == "Y" ? "N" : "Y",
                            fieldtype: mapListTableName[i].DATA_TYPE,
                            vcharlength: mapListTableName[i].DATA_PRECISION,
                            datascale: mapListTableName[i].DATA_SCALE
                        });
                } else {
                    $("#sysImpColumnFiledResjqGrid").jqGrid('setRowData', rowId,
                        {
                            field: mapListTableName[i].COLUMN_NAME,
                            fieldDesc: mapListTableName[i].COMMENTS,
                            required: mapListTableName[i].NULLABLE == "Y" ? "N" : "Y",
                            fieldtype: mapListTableName[i].DATA_TYPE,
                            vcharlength: mapListTableName[i].DATA_LENGTH
                        });
                }
            }
        }
    }

    //设置属性:根据表名称或dto
    function initPropertyName(var1, var2, var3) {
        if ($("#manageStyle").val() == "1") {
            $.ajax({
                url: "platform6/msystem/excel/template/sysImpExcelTemplateController/operation/getPropertyNameList",
                data: {
                    "tableName": var1
                },
                type: 'post',
                dataType: 'json',
                success: function (r) {
                    $("#" + var2).empty();
                    $('<option value="">请选择</option>').appendTo($("#" + var2));
                    if (r.length > 0) {
                        for (var i = 0; i < r.length; i++) {
                            var data = r[i];
                            var option = '<option title="' + data.title + '" fieldtype="' + data.fieldtype + '" value="' + data.name + '" isrequire="' + data.required + '" keyunique="' + data.keyunique + '">';
                            if (data.vcharlength) {
                                option = option.slice(0, -1) + ' vcharlength=' + data.vcharlength + '>';
                            }
                            if (data.datascale) {
                                option = option.slice(0, -1) + ' datascale=' + data.datascale + '>';
                            }
                            option += data.showName;
                            option += '</option>';
                            $(option).appendTo($("#" + var2));
                        }
                        if (var3) {
                            $("#" + var2 + " option").removeAttr("selected");
                            $('#' + var2).find('option[value="' + var3 + '"]').prop("selected", true);
                        }
                    }
                }
            });
        } else if ($("#manageStyle").val() == "2") {
            if (var1 && var1.length > 0) {
                $.ajax({
                    url: "platform6/msystem/excel/template/sysImpExcelTemplateController/operation/getDtoPropertyList",
                    data: {
                        "dtoName": var1
                    },
                    type: 'post',
                    dataType: 'json',
                    success: function (r) {
                        $("#" + var2).empty();
                        $('<option value="">请选择</option>').appendTo($("#" + var2));
                        if (r.length > 0) {
                            for (var i = 0; i < r.length; i++) {
                                var data = r[i];
                                var option = '<option title="' + data.title + '" fieldtype="' + data.type + '" value="' + data.name + '" >';
                                if (data.required) {
                                    option = option.slice(0, -1) + ' isrequire=' + data.required + '>';
                                }
                                if (data.keyunique) {
                                    option = option.slice(0, -1) + ' keyunique=' + data.keyunique + '>';
                                }
                                if (data.vcharlength) {
                                    option = option.slice(0, -1) + ' vcharlength=' + data.vcharlength + '>';
                                }
                                if (data.datascale) {
                                    option = option.slice(0, -1) + ' datascale=' + data.datascale + '>';
                                }
                                option += data.showName;
                                option += '</option>';
                                $(option).appendTo($("#" + var2));
                            }
                            if (var3) {
                                $("#" + var2 + " option").removeAttr("selected");
                                $('#' + var2).find('option[value="' + var3 + '"]').prop("selected", true);
                            }
                        }
                    }
                });
            }
        }
    }

    //设置目标实体类
    function initDtoSelect() {
        $.ajax({
            url: "platform6/msystem/excel/template/sysImpExcelTemplateController/operation/getDtoList",
            type: 'post',
            dataType: 'json',
            success: function (r) {
                $("#" + var2).empty();
                $('<option value="">请选择</option>').appendTo($("#" + var2));
                if (r.length > 0) {
                    for (var i = 0; i < r.length; i++) {
                        var data = r[i];
                        $('<option value="' + data.dtoName + '">' + data.dtoName + '</option>').appendTo($('#convertDto'));
                    }
                }
            }
        });

    }

    $("#sysImpColumnFiledRes_del").bind('click', function () {
        var rows = $("#sysImpColumnFiledResjqGrid").jqGrid('getGridParam', 'selarrrow');
        var sheetId = $("#sheetId").val();
        var _self = this;
        var ids = [];
        var l = rows.length;
        if (l > 0) {
            layer.confirm('确认要删除选中的数据吗?', {
                icon: 3,
                title: "提示",
                area: ['400px', '']
            }, function (index) {
                for (; l--;) {
                    ids.push(rows[l]);
                }
                avicAjax.ajax({
                    url: 'platform6/msystem/excel/column/sysExcelColumnController/operation/delete',
                    data: JSON.stringify(ids),
                    contentType: 'application/json',
                    type: 'post',
                    dataType: 'json',
                    success: function (r) {
                        if (r.flag == "success") {
                            var rowid = $("#sysImpColumnFiledResjqGrid").jqGrid('getGridParam', 'selarrrow');
                            if (rowid.length > 0) {
                                $("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam', {
                                    datatype: 'json',
                                    postData: {
                                        'excelId': sheetId
                                    }
                                }).trigger("reloadGrid");
                            }
                        } else {
                            layer.alert('删除失败！' + r.error, {
                                    icon: 7,
                                    area: ['400px', ''],
                                    closeBtn: 0,
                                    btn: ['关闭'],
                                    title: "提示"
                                }
                            );
                        }
                    }
                });
                layer.close(index);
            });
        } else {
            layer.alert('请选择要删除的数据！', {
                    icon: 7,
                    area: ['400px', ''], //宽高
                    closeBtn: 0,
                    btn: ['关闭'],
                    title: "提示"
                }
            );
        }
    });

    //初始化excel字段信息并保存
    $("#sysImpTemplatecolum_start").bind('click', function () {
        var templateId = $("#templateId").val();
        if (typeof (templateId) != "undefined") {
            var templateId = $("#templateId").val();
            var sheetId = $("#sheetId").val();
            var transferName = $("#sheetOrDtoName").val();
            var relatedEntity = $("#relatedEntity").val();
            if (relatedEntity != "" && relatedEntity.length < 50) {
                var handle = doShowLoading("正在初始化...");
                $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    //async: false,
                    url: 'platform6/msystem/excel/template/sysImpExcelTemplateController/operation/getExcelInfoAndSave',
                    data: {
                        'templateId': templateId,
                        'sheetId': sheetId,
                        'transferName': transferName,
                        'tableName': relatedEntity
                    },
                    success: function (r) {
                        doHideLoading(handle);
                        if(! $.isEmptyObject(r)) {
                            mapListTableName = r.mapList;
                            selectData = {};
                            for (var i = 0; i < mapListTableName.length; i++) {
                                var nameValue = mapListTableName[i].COLUMN_NAME;
                                selectData[nameValue] = nameValue;
                            }

                            //信息刷新
                            $("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam', {
                                datatype: 'json',
                                postData: {
                                    'excelId': sheetId
                                }
                            }).trigger("reloadGrid");
                        } else {
                            layer.alert('请检查标题行数跟上传excel是否匹配！', {
                                icon: 7,
                                area: ['400px', ''], // 宽高
                                closeBtn: 0,
                                btn: ['关闭'],
                                title: "提示"
                            });
                        }
                    },
                    error:function(e){
                        console.info(e);
                        doHideLoading(handle);
                    }
                });

            } else {
                layer.alert('所选数据表名称为空！', {
                    icon: 7,
                    area: ['400px', ''], // 宽高
                    closeBtn: 0,
                    btn: ['关闭'],
                    title: "提示"
                });
            }
        } else {
            layer.alert('请选择一条sheet页数据！', {
                icon: 7,
                area: ['400px', ''], // 宽高
                closeBtn: 0,
                btn: ['关闭'],
                title: "提示"
            });
            return false;
        }
    });

    //自动匹配
    $("#sysImpcolumnAutoFind").bind('click', function () {
        var sheetId = $("#sheetId").val();
        var relatedEntity = $("#relatedEntity").val();
        var handle = doShowLoading("自动匹配中...");
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            //async: false,
            url: 'platform6/msystem/excel/column/sysExcelColumnController/operation/columnAutoFind',
            data: {
                'sheetId': sheetId,
                'tableName': relatedEntity
            },
            success: function (r) {
                doHideLoading(handle);
                if(r.flag == "success") {
                    //信息刷新
                    $("#sysImpColumnFiledResjqGrid").jqGrid('setGridParam', {
                        datatype: 'json',
                        postData: {
                            'excelId': sheetId
                        }
                    }).trigger("reloadGrid");
                } else {
                    layer.alert('自动匹配失败！' + r.error, {
                            icon: 7,
                            area: ['400px', ''],
                            closeBtn: 0,
                            btn: ['关闭'],
                            title: "提示"
                        }
                    );
                }
            }
        });
    })
    //保存
    function saveForm() {
        //虚拟列移除校验
        var r = $("#virtualColumn").children('option:selected').val();
        if (r == 'Y') {
            $("#field").rules('remove');
        } else {
            $("#field").rules("add",{required:true});
        }
        var isValidate = $("#sysImpTemplateOperationR").validate();
        if (!isValidate.checkForm()) {
            isValidate.showErrors();
            return false;
        }
        if ($("#manageStyle").val() == '1' && !$("#id").val()) {
            layer.alert("至少选择一列！", {
                    icon: 0,
                    title: '提示',
                    area: ['400px', ''], //宽高
                    closeBtn: 0
                }
            );
            return;
        }

        var fieldtype = $("#field").find("option:selected").attr("fieldtype");
        var field = $("#field").children('option:selected').val();
        if (field) {
            if (! fieldtype) {
                layer.alert("字段类型不能为空！", {
                        icon: 0,
                        title: '提示',
                        area: ['400px', ''], //宽高
                        closeBtn: 0
                    }
                );
                return;
            }
        }

        var propertyType = $("#propertyType").val();
        var sysLookupCode = $("#sysLookupCode").val();
        if (propertyType == '0' && !sysLookupCode) {
            layer.alert("通用代码信息不能为空！", {
                    icon: 0,
                    title: '提示',
                    area: ['400px', ''], //宽高
                    closeBtn: 0
                }
            );
            return;
        }
        if (propertyType == '4' && !sysLookupCode) {
            layer.alert("自动编码信息不能为空！", {
                    icon: 0,
                    title: '提示',
                    area: ['400px', ''], //宽高
                    closeBtn: 0
                }
            );
            return;
        }

        var arr = new Array(1);
        arr[0] = serializeObject($('#sysImpTemplateOperationR'));
        arr[0].fieldtype = fieldtype;
        sysImpTemplateOperation.save(arr);
    }

    //选择目标表名称或目标实体类
    $('#convertDto').on('click', function () {
        if ($("#manageStyle").val() == '1') {
            layer.open({
                type: 2,
                area: ['70%', '70%'],
                title: '请选择关联表',
                skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
                shade: 0.3,
                maxmin: false, //开启最大化最小化按钮
                content: 'avicit/platform6/console/excel/common/SysExcelSelectDataTable.jsp',
                btn: ['确定', '关闭'],
                yes: function (index, layero) {
                    var $childrenBody = layer.getChildFrame('body', index);//子页面的body元素
                    var $jqGridTable = $childrenBody.find("#testCurrencyjqGrid");
                    //从子页面向主页面传递参数
                    var id = $jqGridTable.jqGrid('getGridParam', 'selrow');
                    if (id) {
                        var data = $jqGridTable.jqGrid("getRowData", id);
                        $("#convertDto").val(data['TABLE_NAME']);
                        initPropertyName(data['TABLE_NAME'], 'sourceProp');
                        initPropertyName(data['TABLE_NAME'], 'targetProp');
                    }
                    layer.close(index);
                },
                cancel: function (index, layero) {
                    layer.close(index);
                }
            });
        } else if ($("#manageStyle").val() == '2') {
            layer.open({
                type: 2,
                area: ['70%', '70%'],
                title: '请选择实体类',
                skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
                shade: 0.3,
                maxmin: false, //开启最大化最小化按钮
                content: 'avicit/platform6/console/excel/common/SysExcelSelectDataDto.jsp',
                btn: ['确定', '关闭'],
                yes: function (index, layero) {
                    var iframeWin = layero.find('iframe')[0].contentWindow;//子页面的窗口对象
                    var rowData = iframeWin.selectRow();
                    if (!rowData) {
                        return false;
                    }
                    $("#convertDto").val(rowData.dtoName);
                    initPropertyName(rowData.dtoName, 'sourceProp');
                    initPropertyName(rowData.dtoName, 'targetProp');
                    layer.close(index);
                },
                cancel: function (index, layero) {
                    layer.close(index);
                }
            });
        }
    });

    /**
     * 生成模板
     */
    $("#createTemplate").click(function () {
        $(this).sysExcelCreateTemplate($("#templateCode").val());
    });
</script>
</body>
</html>