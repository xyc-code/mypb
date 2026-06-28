<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,tree,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <!-- ControllerPath = "platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationManage" -->
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <style type="text/css">
        div#rMenu {
            position: absolute;
            visibility: hidden;
            top: 0;
            background-color: #555;
            text-align: left;
            padding: 2px;
        }

        div#rMenu a {
            cursor: pointer;
            list-style: none outside none;
        }

        .ztree-submenu {
            border: 1px solid #959595;
            position: fixed !important;
            background: #FFF !important;
            z-index: 5;
        }

        .ztree-submenu:before {
            position: absolute;
            width: 36px;
            height: 100%;
            left: 0;
            top: 0;
            background-color: #e7e8e8;
            z-index: 5;
            display: block;
            content: ' ';
        }

        .ztree-submenu a {
            color: #454545;
            font-size: 14px;
            border: 0;
            background: none;
            line-height: 14px;
            padding: 8px 15px 8px 45px;
            z-index: 5;
        }

        .ztree-submenu a:hover {
            background-color: #cbeef5;
        }
    </style>
</head>
<body class="easyui-layout" fit="true">
<div
        data-options="region:'west',split:true,width:fixwidth(.2),onResize:function(a){$('#partyOrganization').setGridWidth(a);$(window).trigger('resize');}">
    <div class="row" style="margin: 5px;">
        <div class="input-group  input-group-sm">
            <input class="form-control" placeholder="回车查询" type="text" id="txt"
                   name="txt"> <span class="input-group-btn">
					<button id="searchbtns" class="btn btn-default ztree-search"
                            type="button">
						<span class="glyphicon glyphicon-search"></span>
					</button>
				</span>
        </div>
        <!-- 快捷菜单start -->
        <div id="rMenu" class="ztree-submenu">
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_serach_dzb"
                                   permissionDes="查询所有党支部">
                <a id="formdialog_serach_dzb" href="javascript:void(0)"
                   class="list-group-item">查询所有党支部</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_serach_dzz"
                                   permissionDes="查询所有党总支/党委">
                <a id="formdialog_serach_dzz" href="javascript:void(0)"
                   class="list-group-item">查询所有党总支</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_serach_jw"
                                   permissionDes="查询所有纪委">
                <a id="formdialog_serach_jw" href="javascript:void(0)"
                   class="list-group-item">查询所有纪委</a>
            </sec:accesscontrollist>


            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganization_button_add"
                                   permissionDes="添加平级节点">
                <a id="partyOrganization_insert" href="javascript:void(0)"
                   class="list-group-item">添加平级节点</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganization_button_add_sub"
                                   permissionDes="添加子节点">
                <a id="partyOrganization_insertsub" href="javascript:void(0)"
                   class="list-group-item">添加子节点</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganization_button_edit"
                                   permissionDes="树编辑">
                <a id="partyOrganization_modify" href="javascript:void(0)"
                   class="list-group-item">编辑节点</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganization_button_delete"
                                   permissionDes="树删除">
                <a id="partyOrganization_del" href="javascript:void(0)"
                   class="list-group-item">删除</a>
            </sec:accesscontrollist>
        </div>
        <!-- 快捷菜单end -->
        <div>
            <ul id="treeDemo" class="ztree"></ul>
        </div>
    </div>
</div>

<div
        data-options="region:'center',onResize:function(a){$('#partyOrganMemberJqGrid').setGridWidth(a);$(window).trigger('resize');}">


    <div class="card">
        <div class="card-body ">
            <table class="form_commonTable">
                <tr>
                    <th width="15%">
                        <label for="partyCode">党支部编号:</label></th>
                    <td width="34%">
                        <div class="input-group input-group-sm">

                            <input class="form-control" type="text" id="partyCode" name="partyCode" readonly="readonly">

                        </div>
                    </td>
                    <th width="15%">
                        <label for="userPost">党支部名称:</label></th>
                    <td width="34%">
                        <input class="form-control" type="text" id="partyName" name="partyName" readonly="readonly">
                    </td>

                </tr>
                <tr>
                    <th width="15%">
                        <label for="userPost">关联部门:</label></th>
                    <td width="34%">
                        <div class="input-group input-group-sm">
                            <input class="form-control" type="text" id="attribute03" name="attribute03"
                                   readonly="readonly">
                        </div>
                    </td>
                </tr>
            </table>

        </div>

    </div>
    <div id="toolbar_partyOrganMemberJqGrid" class="toolbar">
        <div class="toolbar-left">
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganMember_button_add"
                                   permissionDes="添加">
                <a id="partyOrganMember_insert" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="添加"><i class="fa fa-plus"></i> 添加</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganMember_button_edit"
                                   permissionDes="编辑">
                <a id="partyOrganMember_modify" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganMember_button_delete"
                                   permissionDes="删除">
                <a id="partyOrganMember_del" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="删除"><i class="fa fa-trash-o"></i> 删除</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganMember_button_export"
                                   permissionDes="导出">
                <a id="partyOrganMember_export" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="导出"><i class="fa fa-trash-o"></i> 导出</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganMember_button_deiatl"
                                   permissionDes="查看详情">
                <a id="partyOrganMember_deiatl" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="查看详情"><i class=" icon iconfont icon-fuzhi"></i> 查看详情</a>
            </sec:accesscontrollist>
            <sec:accesscontrollist hasPermission="3"
                                   domainObject="formdialog_partyOrganMember_button_revoke"
                                   permissionDes="撤销党组织">
                <a id="partyOrganMember_revoke" href="javascript:void(0)"
                   class="btn btn-primary form-tool-btn btn-sm" role="button"
                   title="撤销党组织"><i class=" icon iconfont icon-Import"></i> 撤销党组织</a>
            </sec:accesscontrollist>
        </div>
        <!--   <div class="toolbar-right">
            <div class="input-group form-tool-search">
                <input type="text" name="partyOrganMember_keyWord"
                    id="partyOrganMember_keyWord" style="width: 240px;"
                    class="form-control input-sm" placeholder="请输入查询条件"> <label
                    id="partyOrganMember_searchPart"
                    class="icon icon-search form-tool-searchicon"></label>
            </div>
            <div class="input-group-btn form-tool-searchbtn">
                <a id="partyOrganMember_searchAll" href="javascript:void(0)"
                    class="btn btn-defaul btn-sm" role="button">高级查询 <span
                    class="caret"></span></a>
            </div>
        </div>-->
    </div>
    <table id="partyOrganMemberJqGrid"></table>
    <div id="partyOrganMemberJqGridPager"></div>
</div>
</body>
<!-- 子表高级查询begin -->
<div id="partyOrganMemberSearchDialog"
     style="overflow: auto; display: none">
    <form id="partyOrganMemberForm" style="padding: 10px;">
        <input type="hidden" name="partyId" id="partyIdPartyOrganMember"/>
        <table class="form_commonTable">
            <tr>
                <th width="10%"><label for="userIdAliasPartyOrganMember">员工姓名:</label>
                </th>
                <td width="39%">
                    <div class="input-group  input-group-sm">
                        <input type="hidden" id="userIdPartyOrganMember" name="userId">
                        <input class="form-control" placeholder="请选择用户" type="text"
                               id="userIdAliasPartyOrganMember" name="userIdAlias"> <span
                            class="input-group-addon"> <i
                            class="glyphicon glyphicon-user"></i>
						</span>
                    </div>
                </td>
                <th width="10%"><label for="userPostPartyOrganMember">党组织职务:</label>
                </th>
                <td width="39%"><pt6:h5radio css_class="radio-inline"
                                             name="userPost" title="" canUse="0" lookupCode="PARTY_POST"/></td>
            </tr>
        </table>
    </form>
</div>
<!-- 子表高级查询end -->
<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 流程的js -->
<!-- 业务的js -->
<script
        src="avicit/pb/organize/partyorganization/js/PartyOrganization.js?v=${jsversion}"
        type="text/javascript"></script>
<script
        src="avicit/pb/organize/partyorganmember/js/PartyOrganMember.js?v=${jsversion}"
        type="text/javascript"></script>
<script type="text/javascript">
    var partyOrganization;
    var partyOrganMember;

    function formatValuePartyOrganMember(cellvalue, options, rowObject) {
        return '<a href="javascript:void(0);" onclick="partyOrganMember.detail(\''
            + rowObject.id + '\');">' + cellvalue + '</a>';
    }

    function formatDateForHrefPartyOrganMember(cellvalue, options, rowObject) {
        var thisDate = format(cellvalue);
        return '<a href="javascript:void(0);" onclick="partyOrganMember.detail(\''
            + rowObject.id + '\');">' + thisDate + '</a>';
    }

    //清空日期值
    function clearCommonSelectValue(element) {
        $(element).siblings("input").val("");
    }

    $(document)
        .ready(
            function () {
                var partyOrganMemberDataGridColModel = [{
                    label: 'id',
                    name: 'id',
                    key: true,
                    width: 75,
                    hidden: true
                }, {
                    label: '员工姓名',
                    name: 'userIdAlias',
                    formatter: formatValuePartyOrganMember,
                    width: 150,
                    align: 'center'
                }, {
                    label: '党组织职务',
                    name: 'userPostName',
                    width: 150,
                    align: 'center'
                },];
                var partyOrganMemberSearchNames = new Array();
                var partyOrganMemberSearchTips = new Array();
                var partyOrganMemberSearchC = partyOrganMemberSearchTips.length == 2 ? '或'
                    + partyOrganMemberSearchTips[1]
                    : "";
                if (partyOrganMemberSearchTips.length > 0) {
                    $('#partyOrganMember_keyWord').attr(
                        'placeholder',
                        '请输入' + partyOrganMemberSearchTips[0]
                        + partyOrganMemberSearchC);
                }
                //实例化主表对象
                partyOrganization = new PartyOrganization('treeDemo',
                    '${url}', "form", "txt", 'searchbtns',
                    function (pid) {
                        partyOrganMember = new PartyOrganMember(
                            'partyOrganMemberJqGrid',
                            '${partyOrganMemberUrl}',
                            'partyOrganMemberForm',
                            partyOrganMemberDataGridColModel,
                            'partyOrganMemberSearchDialog',
                            pid, partyOrganMemberSearchNames,
                            'partyOrganMember_keyWord');
                    }, function (pid) {
                        partyOrganMember.reLoad(pid);
                    });
                //主表操作
                //添加平级节点按钮绑定事件
                $('#partyOrganization_insert').bind('click',
                    function () {
                        partyOrganization.insert();
                    });
                //添加子节点按钮绑定事件
                $('#partyOrganization_insertsub').bind('click',
                    function () {
                        partyOrganization.insertSub();
                    });
                //编辑按钮绑定事件
                $('#partyOrganization_modify').bind('click',
                    function () {
                        partyOrganization.modify();
                    });
                //删除按钮绑定事件
                $('#partyOrganization_del').bind('click', function () {
                    partyOrganization.del();
                });
                //查询所有党支部
                $("#formdialog_serach_dzb").bind('click',function () {
                    var param = {
                        attribute01:1,
                    }
                    partyOrganization.searche(param);
                })
                //查询所有党总支
                $("#formdialog_serach_dzz").bind('click',function () {
                    var param = {
                        attribute01:2,
                    }
                    partyOrganization.searche(param);
                })
                //查询所有纪委
                $("#formdialog_serach_jw").bind('click',function () {
                    var param = {
                        attribute01:3,
                    }
                    partyOrganization.searche(param);
                })



                //子表操作
                //添加按钮绑定事件
                $('#partyOrganMember_insert').bind('click', function () {
                    partyOrganMember.insert();
                });
                //编辑按钮绑定事件
                $('#partyOrganMember_modify').bind('click', function () {
                    partyOrganMember.modify();
                });
                //删除按钮绑定事件
                $('#partyOrganMember_del').bind('click', function () {
                    partyOrganMember.del();
                });
                //查询按钮绑定事件
                $('#partyOrganMember_searchPart').bind('click',
                    function () {
                        partyOrganMember.searchByKeyWord();
                    });
                //打开高级查询框
                $('#partyOrganMember_searchAll').bind('click',
                    function () {
                        partyOrganMember.openSearchForm(this);
                    });
                //导出Excel
                $('#partyOrganMember_export')
                    .bind(
                        'click',
                        function () {
                            var ids = $(
                                "#partyOrganMemberJqGrid")
                                .jqGrid('getGridParam',
                                    'selarrrow');
                            var selectIds = new Array();
                            for (var i = 0; i < ids.length; i++) {
                                var row = $(
                                    "#partyOrganMemberJqGrid")
                                    .jqGrid('getRowData',
                                        ids[i]);
                                selectIds.push(row.id);
                            }
                            var selectConditions = JSON
                                .stringify(serializeObject($("#partyOrganMemberForm")));
                            new SysExcelExport(
                                "partyOrganMember",
                                true,
                                "${partyOrganMemberUrl}/exportExcel",
                                JSON.stringify(selectIds),
                                selectConditions);
                        });
                $('#userIdAliasPartyOrganMember')
                    .on(
                        'focus',
                        function (e) {
                            new H5CommonSelect(
                                {
                                    type: 'userSelect',
                                    idFiled: 'userIdPartyOrganMember',
                                    textFiled: 'userIdAliasPartyOrganMember'
                                });
                            this.blur();
                            nullInput(e);
                        });
            });
    $("#partyOrganMember_deiatl").bind('click',function () {
       var nodeId= partyOrganization._rootId;
        partyOrganMember.editIndex = layer.open({
            type: 2,
            area: ['960px', '500px'],
            title: '详细数据',
            skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
            maxmin: true, //开启最大化最小化按钮
            content: '${url}/deiatl/'+nodeId
        });
    })
    //撤销党组织
    $("#partyOrganMember_revoke").bind('click',function(){
        var nodeId= partyOrganization._rootId;
        partyOrganMember.editIndex = layer.open({
            type:2,
            area:['100%','70%'],
            title: "撤销",
            skin:"bs-modal",
            maxmin: true,
            content:'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=2c908c1d8dc9acdd018dcf8681ea1bb6&partyId='+nodeId
        })
    })
</script>
</html>

