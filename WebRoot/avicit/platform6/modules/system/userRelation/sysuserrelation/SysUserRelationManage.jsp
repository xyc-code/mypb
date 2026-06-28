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
    <!-- ControllerPath = "platform6/modules/system/userRelation/sysuserrelation/sysUserRelationController/toSysUserRelationManage" -->
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
    <div class="toolbar-left">
        <sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysUserRelation_button_add"
                               permissionDes="添加">
            <a id="sysUserRelation_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point"
               role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
        </sec:accesscontrollist>
        <sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysUserRelation_button_del"
                               permissionDes="删除">
            <a id="sysUserRelation_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm"
               role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
        </sec:accesscontrollist>
        <sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysUserRelation_button_save"
                               permissionDes="保存">
            <a id="sysUserRelation_save" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm"
               role="button" title="保存"><i class="fa fa-file-text-o"></i> 保存</a>
        </sec:accesscontrollist>
    </div>
    <div class="toolbar-right">
        <%--<div class="input-group form-tool-search">--%>
            <%--<input type="text" name="sysUserRelation_keyWord" id="sysUserRelation_keyWord" style="width:240px;"--%>
                   <%--class="form-control input-sm" placeholder="请输入查询条件">--%>
            <%--<label id="sysUserRelation_searchPart" class="icon icon-search form-tool-searchicon"></label>--%>
        <%--</div>--%>
        <div class="input-group-btn form-tool-searchbtn">
            <a id="sysUserRelation_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button"
               title="高级查询">高级查询 <span class="caret"></span></a>
        </div>
    </div>
</div>
<table id="sysUserRelationjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none">
    <form id="form" style="padding: 10px;">
        <table class="form_commonTable">
            <tr>
                <th width="10%">用户1:</th>
                <td width="88%">
                    <div class="input-group  input-group-sm">
                        <input type="hidden" id="user1Id" name="user1Id">
                        <input class="form-control" placeholder="请选择用户" type="text" id="user1IdAlias"
                               name="user1IdAlias">
                        <span class="input-group-addon">
										        <i class="glyphicon glyphicon-user"></i>
										      </span>
                    </div>
                </td>
            </tr>
            <tr>
                <th width="10%">关系:</th>
                <td width="88%">
                    <pt6:h5select css_class="form-control input-sm" name="relation" id="relation" title="关系"
                                  isNull="true" lookupCode="PLATFORM_SYS_USER_RELATION_TYPE"/>
                </td>
            </tr>
            <tr>
                <th width="10%">用户2:</th>
                <td width="88%">
                    <div class="input-group  input-group-sm">
                        <input type="hidden" id="user2Id" name="user2Id">
                        <input class="form-control" placeholder="请选择用户" type="text" id="user2IdAlias"
                               name="user2IdAlias">
                        <span class="input-group-addon">
										        <i class="glyphicon glyphicon-user"></i>
										      </span>
                    </div>
                </td>
            </tr>
            <tr>
                <th width="10%">状态:</th>
                <td width="88%">
                    <pt6:h5select css_class="form-control input-sm" name="validFlag" id="validFlag"
                                  title="状态" isNull="true" lookupCode="PLATFORM_VALID_FLAG"/>
                </td>
            </tr>
            <tr>
            </tr>
        </table>
    </form>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/modules/system/userRelation/sysuserrelation/js/SysUserRelation.js"
        type="text/javascript"></script>
<script type="text/javascript">
    //后台获取的通用代码数据
    var relationData = ${relationData};
    var validFlagData = ${validFlagData};
    var sysUserRelation;
    $(document).ready(function () {
        var dataGridColModel = [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true}
            , {
                label: '<span style="color:red;">*</span>用户1',
                name: 'user1IdAlias',
                width: 150,
                editable: true,
                edittype: 'custom',
                sortable:false,
                editoptions: {custom_element: userElem, custom_value: userValue, forId: 'user1Id'}
            }
            , {label: '用户1id', name: 'user1Id', width: 75, hidden: true, editable: true}
            , {label: '关系id', name: 'relation', width: 75, hidden: true}
            , {
                label: '<span style="color:red;">*</span>关系',
                name: 'relationName',
                width: 150,
                editable: true,
                edittype: "custom",
                sortable:false,
                editoptions: {
                    custom_element: selectElem,
                    custom_value: selectValue,
                    forId: 'relation',
                    value: relationData
                }
            }
            , {
                label: '<span style="color:red;">*</span>用户2',
                name: 'user2IdAlias',
                width: 150,
                editable: true,
                sortable:false,
                edittype: 'custom',
                editoptions: {custom_element: userElem, custom_value: userValue, forId: 'user2Id'}
            }
            , {label: '用户2id', name: 'user2Id', width: 75, hidden: true, editable: true}
            , {label: '状态', name: 'validFlag', width: 75, hidden: true}
            , {
                label: '<span style="color:red;">*</span>状态',
                name: 'validFlagName',
                width: 150,
                editable: true,
                sortable:false,
                edittype: "custom",
                editoptions: {
                    custom_element: selectElem,
                    custom_value: selectValue,
                    forId: 'validFlag',
                    value: validFlagData
                }
            }
        ];
        var searchNames = new Array();
        var searchTips = new Array();
        searchNames.push("user1IdAlias");
        searchTips.push("用户1");
        searchNames.push("user2IdAlias");
        searchTips.push("用户2");
        var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
        $('#sysUserRelation_keyWord').attr('placeholder', '请输入' + searchTips[0] + searchC);
        sysUserRelation = new SysUserRelation('sysUserRelationjqGrid', '${url}', 'searchDialog', 'form', 'sysUserRelation_keyWord', searchNames, dataGridColModel);
        //添加按钮绑定事件
        $('#sysUserRelation_insert').bind('click', function () {
            sysUserRelation.insert();
        });
        //删除按钮绑定事件
        $('#sysUserRelation_del').bind('click', function () {
            sysUserRelation.del();
        });
        //保存按钮绑定事件
        $('#sysUserRelation_save').bind('click', function () {
            sysUserRelation.save();
        });
        //查询按钮绑定事件
        $('#sysUserRelation_searchPart').bind('click', function () {
            sysUserRelation.searchByKeyWord();
        });
        //打开高级查询框
        $('#sysUserRelation_searchAll').bind('click', function () {
            sysUserRelation.openSearchForm(this);
        });
        //回车键查询
        $('#sysUserRelation_keyWord').on('keydown', function (e) {
            if (e.keyCode == 13) {
                sysUserRelation.searchByKeyWord();
            }
        });
        $('#user1IdAlias').on('focus', function (e) {
            new H5CommonSelect({type: 'userSelect', idFiled: 'user1Id', textFiled: 'user1IdAlias'});
            this.blur();
            nullInput(e);
        });
        $('#user2IdAlias').on('focus', function (e) {
            new H5CommonSelect({type: 'userSelect', idFiled: 'user2Id', textFiled: 'user2IdAlias'});
            this.blur();
            nullInput(e);
        });

    });
</script>
</html>