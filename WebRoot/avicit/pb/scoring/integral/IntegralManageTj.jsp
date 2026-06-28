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
    <!-- ControllerPath = "platform/avicit/pb/scoring/integral/integralController/toIntegralManage" -->
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
    <%-- <div class="toolbar-left">
        <sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPoints_button_add" permissionDes="图形统计">
              <a id="dynPoints_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="柱状统计"><i class="fa fa-plus"></i> 图形统计</a>
        </sec:accesscontrollist>
    </div> --%>
    <div class="toolbar-right">
        <div class="input-group form-tool-search">
            <input type="text" id="year"  onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年'})"class="Wdate form-control input-sm"/>
            <label id="dynPoints_searchWdate" class="icon icon-search form-tool-searchicon"></label>
        </div>
        <div class="input-group form-tool-search">
            <input type="text" name="integral_keyWord" id="integral_keyWord" style="width:240px;"
                   class="form-control input-sm" placeholder="请输入查询条件">
            <label id="dynPoints_searchPart" class="icon icon-search form-tool-searchicon"></label>
        </div>
        <div class="input-group-btn form-tool-searchbtn">
            <a id="dynPoints_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button">高级查询 <span
                    class="caret"></span></a>
        </div>
    </div>
</div>
<table id="integraljqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
    <form id="form" style="padding: 10px;">
        <table class="form_commonTable">
            <tr>
                <th>
                    <label for="quarter">姓名:</label>
                </th>
                <td>
                    <input class="form-control input-sm" type="text" name="data1" id="data1"/></td>
                <th>
                    <label for="quarter">员工编号:</label>
                </th>
                <td>
                    <input class="form-control input-sm" type="text" name="userNO" id="userNO"/>
                </td>
            </tr>
            <tr>
                <th>
                    <label for="partyId">党支部:</label>
                </th>
                <td>
                    <div class="input-group input-group-sm">
                        <input type="hidden" name="partyId" id="partyId"/>
                        <input class="form-control" placeholder="请选择党支部" type="text" id="partyIdAlias"
                               name="partyIdAlias">
                        <span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
                    </div>
                </td>
                <th>
                    <label for="quarter">性别:</label>
                </th>
                <td>
                    <input class="form-control input-sm" type="text" name="sex" id="sex"/>
                </td>

            </tr>
        </table>
    </form>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="static/js/platform/eform/common.js" type="text/javascript"></script>
<script src="avicit/pb/scoring/integral/js/Integral.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
    var integral;
    var id = '${id}'
    var partyId = '${partyId}'
    var bol = true;

    function formatValue(cellvalue, options, rowObject) {
        return '<a href="javascript:void(0);" onclick="integral.detail(\'' + rowObject.id + '\');">' + cellvalue + '</a>';
    }

    function formatDateForHref(cellvalue, options, rowObject) {
        var thisDate = format(cellvalue);
        return '<a href="javascript:void(0);" onclick="integral.detail(\'' + rowObject.id + '\');">' + thisDate + '</a>';
    }

    //清空日期值
    function clearCommonSelectValue(element) {
        $(element).siblings("input").val("");
    }

    $(document).ready(function () {
        var dataGridColModel = [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true},
            {label: '部门', name: 'map.userDeptName', width: 300, align: 'left'},
            {label: '姓名', name: 'data1', width: 300, align: 'left'},
            {label: '用户id', name: 'userId', width: 150, align: 'left', hidden: true},
            {label: '性别', name: 'sex', width: 150, align: 'left'},
            {label: '基础分 ', name: 'map.Foundations', width: 150, align: 'left'},
            {label: '履职分 ', name: 'map.Personal', width: 150, align: 'left'},
            {label: '奖励加分 ', name: 'map.Reward', width: 150, align: 'left'},
            {label: '惩处减分 ', name: 'map.Punish', width: 150, align: 'left'},
            {label: '合计得分 ', name: 'map.Content', width: 150, align: 'left'},
            {label: '一季度基础分扣分', name: 'map.oneFoundations', width: 150, align: 'left', hidden: true},
            {label: '一季度基础分备注', name: 'map.oneFoundationsContent', width: 150, align: 'left', hidden: true},
            {label: '一季度履职分', name: 'map.onePersonal', width: 150, align: 'left', hidden: true},
            {label: '一季度履职分备注', name: 'map.onePersonalContent', width: 150, align: 'left', hidden: true},
            {label: '一季度奖励加分', name: 'map.oneReward', width: 150, align: 'left', hidden: true},
            {label: '一季度奖励加分备注', name: 'map.oneRewardContent', width: 150, align: 'left', hidden: true},
            {label: '一季度惩处减分', name: 'map.onePunish', width: 150, align: 'left', hidden: true},
            {label: '一季度惩处减分备注', name: 'map.onePunishContent', width: 150, align: 'left', hidden: true},
            {label: '一季度合计得分', name: 'map.oneContent', width: 150, align: 'left', hidden: true},
            {label: '二季度基础分扣分', name: 'map.twoFoundations', width: 150, align: 'left', hidden: true},
            {label: '二季度基础分扣分', name: 'map.twoFoundationsContent', width: 150, align: 'left', hidden: true},
            {label: '二季度履职分', name: 'map.twoPersonal', width: 150, align: 'left', hidden: true},
            {label: '二季度履职分', name: 'map.twoPersonalContent', width: 150, align: 'left', hidden: true},
            {label: '二季度奖励加分', name: 'map.twoReward', width: 150, align: 'left', hidden: true},
            {label: '二季度奖励加分', name: 'map.twoRewardContent', width: 150, align: 'left', hidden: true},
            {label: '二季度惩处减分', name: 'map.twoPunish', width: 150, align: 'left', hidden: true},
            {label: '二季度惩处减分', name: 'map.twoPunishContent', width: 150, align: 'left', hidden: true},
            {label: '二季度合计得分', name: 'map.twoContent', width: 150, align: 'left', hidden: true},
            {label: '三季度基础分扣分', name: 'map.threeFoundations', width: 150, align: 'left', hidden: true},
            {label: '三季度基础分扣分', name: 'map.threeFoundationsContent', width: 150, align: 'left', hidden: true},
            {label: '三季度履职分', name: 'map.threePersonal', width: 150, align: 'left', hidden: true},
            {label: '三季度履职分', name: 'map.threePersonalContent', width: 150, align: 'left', hidden: true},
            {label: '三季度奖励加分', name: 'map.threeReward', width: 150, align: 'left', hidden: true},
            {label: '三季度奖励加分', name: 'map.threeRewardContent', width: 150, align: 'left', hidden: true},
            {label: '三季度惩处减分', name: 'map.threePunish', width: 150, align: 'left', hidden: true},
            {label: '三季度惩处减分', name: 'map.threePunishContent', width: 150, align: 'left', hidden: true},
            {label: '三季度合计得分', name: 'map.threeContent', width: 150, align: 'left', hidden: true},
            {label: '四季度基础分扣分', name: 'map.fourFoundations', width: 150, align: 'left', hidden: true},
            {label: '四季度基础分扣分', name: 'map.fourFoundationsContent', width: 150, align: 'left', hidden: true},
            {label: '四季度履职分', name: 'map.fourPersonal', width: 150, align: 'left', hidden: true},
            {label: '四季度履职分', name: 'map.fourPersonalContent', width: 150, align: 'left', hidden: true},
            {label: '四季度奖励加分', name: 'map.fourReward', width: 150, align: 'left', hidden: true},
            {label: '四季度奖励加分', name: 'map.fourRewardContent', width: 150, align: 'left', hidden: true},
            {label: '四季度惩处减分', name: 'map.fourPunish', width: 150, align: 'left', hidden: true},
            {label: '四季度惩处减分', name: 'map.fourPunishContent', width: 150, align: 'left', hidden: true},
            {label: '四季度合计得分', name: 'map.fourContent', width: 150, align: 'left', hidden: true},
            {label: '党支部id', name: 'partyId', width: 150, align: 'left', hidden: true},
            {label: '党支部名称', name: 'partyName', width: 150, align: 'left', hidden: true},
            {label: '身份证号', name: 'idNumber', width: 150, align: 'left', hidden: true},
            {label: '惩处减分', name: 'punish', width: 150, align: 'right', hidden: true},
            {label: '外键', name: 'fkSubColId', width: 150, align: 'left', hidden: true},
            {label: '基础分扣分', name: 'foundations', width: 150, align: 'right', hidden: true},
            {label: '奖励加分', name: 'reward', width: 150, align: 'right', hidden: true},
            {label: '履职分', name: 'personal', width: 150, align: 'right', hidden: true},
            {label: '基础分扣分备注', name: 'foundationsContent', width: 150, align: 'left', hidden: true},
            {label: '履职分备注', name: 'personalContent', width: 150, align: 'left', hidden: true},
            {label: '奖励加分备注', name: 'rewardContent', width: 150, align: 'left', hidden: true},
            {label: '惩处减分备注', name: 'punishContent', width: 150, align: 'left', hidden: true},
            {label: '总分', name: 'integralContent', width: 150, align: 'right', hidden: true},
            {label: '填写日期', name: 'integralDate', formatter: format, width: 150, align: 'center', hidden: true}
        ];

        var searchNames = new Array();
        var searchTips = new Array();
        searchNames.push("data1");
        searchTips.push("姓名");
        var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
        if (searchTips.length > 0) {
            $('#integral_keyWord').attr('placeholder', '请输入' + searchTips[0] + searchC);
        }

        integral = new Integral('integraljqGrid', '${url}', 'searchDialog', 'form', 'integral_keyWord', searchNames, dataGridColModel, id);
        //添加按钮绑定事件
        $('#integral_insert').bind('click', function () {
            integral.insert();
        });
        //编辑按钮绑定事件
        $('#integral_modify').bind('click', function () {
            integral.modify();
        });
        //删除按钮绑定事件
        $('#integral_del').bind('click', function () {
            integral.del();
        });
        //查询按钮绑定事件
        $('#dynPoints_searchPart').bind('click', function () {
            integral.searchByKeyWord();
        });
        //打开高级查询框
        $('#dynPoints_searchAll').bind('click', function () {
            integral.openSearchForm(this);
        })
        //导出Excel
        $('#integral_export').bind('click', function () {
            var ids = $("#integraljqGrid").jqGrid('getGridParam', 'selarrrow');
            var selectIds = new Array();
            for (var i = 0; i < ids.length; i++) {
                var row = $("#integraljqGrid").jqGrid('getRowData', ids[i]);
                selectIds.push(row.id);
            }
            var selectConditions = JSON.stringify(serializeObject($("#form")));
            new SysExcelExport("integral", true, "${url}/exportExcel", JSON.stringify(selectIds), selectConditions);
        });

        $('#partyIdAlias').on('focus', function (e) {
            var selectIndex = layer.open({
                type: 2,
                area: ['50%', '50%'],
                title: '选择父节点',
                skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
                maxmin: false, //开启最大化最小化按钮
                content: 'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
                btn: ['确定', '取消'],
                yes: function (index, layero) {
                    var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                    var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
                    var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
                    var selectedNewNode = iframeWin.getSelectedNode();
                    if (selectedNewNode.attributes.partyCode == '1') {
                        layer.alert('所选择节点不能是根节点！', {
                            icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                        });

                        return;
                    }
                    if (selectedNewNode.text.lastIndexOf("小组") != -1) {
                        layer.msg("所选结构不能为党小组！党支部查询只能支持党支部！")
                        return;
                    }

                    $("#partyId").val(selectedNewNode.id);
                    $("#partyIdAlias").val(selectedNewNode.text);
                    layer.close(layer.index);
                    layer.close(selectIndex);
                },
                btn2: function (index, layero) {
                    layer.close(index);
                }
            });

            this.blur();
            nullInput(e);
        });
    });

    function serach() {
        var val = $("#year").val().replaceAll("年", "");
        var obj = {
            integralDateBegin: val + "-01-01",
            integralDateEnd: val + "-12-31"
        }
        if (partyId) {
            obj.partyId = partyId;
        }
        var postData = {
            keyWord: null,
            param: JSON.stringify(obj)
        }
        $("#integraljqGrid").jqGrid('setGridParam', {
            datatype: 'json',
            postData: postData
        }).trigger("reloadGrid");
    }

    $("#dynPoints_searchWdate").on('click', serach)
    $("#year").on('keydown', function (e) {
        if (e.keyCode == '13') {
            serach()
        }
    })

</script>
</html>

