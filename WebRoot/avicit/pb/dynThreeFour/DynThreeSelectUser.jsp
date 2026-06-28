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
    <!-- ControllerPath = "platform/avicit/pb/member/partyMember/partyMemberController/toPartyMemberManage" -->
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<body>
<div data-options="region:'west',split:false"
     style="width: 50%; padding: 0px; overflow: hidden;float: left">
    <div id="tableToolbar" class="toolbar">
        <div class="toolbar-left">
            <a id="partyGrid" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button"
               title="隐藏待选区"><i class=" icon iconfont icon-xuanze"></i> 隐藏待选区</a>
            <a id="partyGridAdd" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button"
               title="添加"><i class=" icon iconfont icon-radio_current"></i> 添加</a>
        </div>
        <div class="toolbar-right">
            <div class="input-group form-tool-search">
                <input type="text" name="partyMember_keyWord" id="partyMember_keyWord" style="width:240px;"
                       class="form-control input-sm" placeholder="请输入查询条件">
                <label id="partyMember_searchPart" class="icon icon-search form-tool-searchicon"></label>
            </div>
            <div class="input-group form-tool-search">
                <form id="type">
                    <select class="form-control input-sm js-example-data-array" id="attribute14" name="attribute14"
                            style="width: 100%;">
                        <option selected value="1">查询党员</option>
                        <option value="2">查询积极分子</option>
                    </select>
                </form>
            </div>
            <div class="input-group-btn form-tool-searchbtn">
                <a id="partyMember_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button">高级查询
                    <span class="caret"></span></a>
            </div>
        </div>
    </div>
    <table id="partyMemberjqGrid"></table>
    <div id="jqGridPager"></div>
</div>
<div data-options="region:'center',title:'',collapsible:false"
     style="width: 48%; padding: 0px; overflow: hidden;float: left">
    <div id="tableToolbarTwo" class="toolbar">
        <div class="toolbar-left">
            <a id="partyGridRemove" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button"
               title="移除"><i class=" icon iconfont icon-close-circle"></i> 移除</a>
        </div>

    </div>
    <table id="ThreejqGrid"></table>
    <div id="ThreejqGridPager"></div>
</div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
    <form id="form" style="padding: 10px;">
        <table class="form_commonTable">
            <tr>
                <th width="10%">
                    <label for="userIdAlias">姓名:</label>
                </th>
                <td width="39%">
                    <div class="input-group  input-group-sm">
                        <input type="hidden" id="userId" name="userId">
                        <input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
                        <span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
                    </div>
                </td>
                <th width="10%">
                    <label for="deptIdAlias">部门:</label>
                </th>
                <td width="39%">
                    <div class="input-group  input-group-sm">
                        <input type="hidden" id="deptId" name="deptId">
                        <input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias">
                        <span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
                    </div>
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
                    <label for="partyId">党小组:</label>
                </th>
                <td>
                    <div class="input-group input-group-sm">
                        <input type="hidden" name="attribute01" id="attribute01"/>
                        <input class="form-control" placeholder="请选择党小组" type="text" id="attribute01Alias"
                               name="attribute01Alias">
                        <span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
                    </div>
                </td>

            </tr>
            <tr>
                <th>
                    <label for="userCode">人员编码:</label>
                </th>
                <td>
                    <input class="form-control input-sm" type="text" name="userCode" id="userCode"/>
                </td>
                <th>
                    <label for="sex">性别:</label>
                </th>
                <td>
                    <pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true"
                                  lookupCode="PLATFORM_SEX"/>
                </td>

            </tr>

            <tr class="dy">
                <th>
                    <label for="partyType">类别:</label>
                </th>
                <td>
                    <pt6:h5select css_class="form-control input-sm" name="partyType" id="partyType" title=""
                                  isNull="true" lookupCode="PM_PARTY_TYPE"/>
                </td>
                <th>
                    <label for="branchPost">党支部职务:</label>
                </th>
                <td>
                    <pt6:h5select css_class="form-control input-sm" name="branchPost" id="branchPost" title=""
                                  isNull="true" lookupCode="PM_BRANCH_POST_TYPE"/>
                </td>

            </tr>
            <tr class="jjfz">

                <th>
                    <label for="nation">积极分子类别:</label>
                </th>
                <td>
                    <pt6:h5select css_class="form-control input-sm" name="activistType" id="activistType" title=""
                                  isNull="true" lookupCode="PA_PARTY_TYPE"/>
                </td>
            </tr>
        </table>
    </form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/dynThreeFour/js/PartyMember.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
    var partyMember;
    var partyActivist;
    var leayIndex;
    var newRowIndex_THREE = 0;
    var newRowStart_THREE = "new_row";
    var bodyBol = true;
    function formatValue(cellvalue, options, rowObject) {
        return '<a href="javascript:void(0);" onclick="partyMember.detail(\'' + rowObject.id + '\');">' + cellvalue + '</a>';
    }

    function formatDateForHref(cellvalue, options, rowObject) {
        var thisDate = format(cellvalue);
        return '<a href="javascript:void(0);" onclick="partyMember.detail(\'' + rowObject.id + '\');">' + thisDate + '</a>';
    }

    //清空日期值
    function clearCommonSelectValue(element) {
        $(element).siblings("input").val("");
    }

    function Alias(value, opts, item) {
        if (item.attribute14 == "1") {
            return '<a href="javascript:void(0);" onclick="jump(1,\'' + item.id + '\')" >党员</a>'
        } else {
            return '<a href="javascript:void(0);" onclick="jump(2,\'' + item.id + '\')">积极分子</a>'
        }
    }

    function jump(item, id) {
        if (item == 1) {
            partyMember.detailIndex = layer.open({
                type: 2,
                area: ['100%', '100%'],
                title: '党员详细页',
                skin: 'bs-modal',
                maxmin: false,
                content: 'avicit/pb/member/partyMember/partyMemberController/operation/Detail/' + id
            });
        } else {
            leayIndex = layer.open({
                type: 2,
                area: ['100%', '100%'],
                title: '积极分子详细页',
                skin: 'bs-modal',
                maxmin: false,
                content: 'avicit/pb/activist/partyActivist/partyActivistController/operation/Detail/' + id
            });
        }
    }


    $(document).ready(function () {
        var dataGridColModel = [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true},
            {label: '姓名', name: 'userIdAlias', width: 150, align: 'center'},
            {label: '党支部', name: 'partyIdAlias', width: 150, align: 'center'},
            {label: '人员编码', name: 'userCode', width: 150, align: 'center'},
            {label: '类别', name: 'Alias', formatter: Alias, width: 150, align: 'center'},
        ];
        //待选区表格初始化
        $("#ThreejqGrid").jqGrid({
            toolbar: [true, 'top'],
            colModel: dataGridColModel,
            height: $(window).height() - 120,
            width: $(window).width(),
            scrollOffset: 5, // 设置垂直滚动条宽度
            rowNum: 200,
            rowList: 0,
            altRows: true,
            userDataOnFooter: true,
            pagerpos: 'left',
            hasColSet: true,// 设置显隐属性
            styleUI: 'Bootstrap',
            viewrecords: true,
            multiselect: true,
            multiboxonly: true,
            autowidth: true,
            shrinkToFit: true,
            responsive: true,// 开启自适应
            pager: "#ThreejqGridPager",
        })
        $("#t_ThreejqGrid").append($("#tableToolbarTwo"));
        var searchNames = new Array();
        var searchTips = new Array();
        searchNames.push("userIdAlias");
        searchTips.push("姓名");
        var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
        if (searchTips.length > 0) {

            $('#partyMember_keyWord').attr('placeholder', '请输入' + searchTips[0] + searchC);
        }

        partyMember = new PartyMember('partyMemberjqGrid', '${url}', 'searchDialog', 'form', 'partyMember_keyWord', searchNames, dataGridColModel);
        partyActivist = {
            closeDialog: function (e) {
                layer.close(leayIndex);
            }
        }
        //查询按钮绑定事件
        $('#partyMember_searchPart').bind('click', function () {
            partyMember.searchByKeyWord();
        });
        //打开高级查询框
        $('#partyMember_searchAll').bind('click', function () {
            partyMember.openSearchForm(this);
        });
        //给类别选择框增加change事件
        $("#attribute14").bind('change', function () {
            partyMember.searchData();
            var attribute14 = $("#attribute14").val()
            if (attribute14 == "1") {
                $(".jjfz").css("display", "none");
                $(".dy").css("display", "");
            } else {
                $(".dy").css("display", "none");
                $(".jjfz").css("display", "");
            }
        })
        //绑定后要将积极分子的搜索内容全部隐藏
        $(".jjfz").css("display", "none");
        //绑定弹出待选区详情页
        $("#partyGrid").bind('click', function () {
            if(bodyBol){
                $("body>div:eq(1)").hide(500);
                $("body>div:eq(0)").css("width","100%");
                $("#partyGrid").text("查看待选区");
                $("#partyGrid").attr("title","查看待选区");
                $("#partyMemberjqGrid").jqGrid('setGridWidth',$(window).width());
                bodyBol=false
            }else{
                $("body>div:eq(1)").show(500);
                $("body>div:eq(0)").css("width","50%");
                $("#partyGrid").text("隐藏待选区");
                $("#partyGrid").attr("title","隐藏待选区")
                $("#partyMemberjqGrid").jqGrid('setGridWidth', $("body>div:eq(0)").width());
                bodyBol=true
            }
        })
        //绑定添加待选区按钮
        $("#partyGridAdd").bind('click', function () {
            var bpmsDeleteRows = $('#partyMemberjqGrid').jqGrid('getGridParam', 'selarrrow');
            if (bpmsDeleteRows.length == 0) {
                layer.alert('请选择！', {
                    icon: 7,
                    area: ['400px', ''],
                    closeBtn: 0
                });
                return;
            }
            for (var i = 0; i < bpmsDeleteRows.length; i++) {
                var rowData = $('#partyMemberjqGrid').jqGrid('getRowData', bpmsDeleteRows[i]);
                var attribute14 = 1;
                if(rowData.Alias.indexOf("党员")!=-1){
                    attribute14 = 1;
                }else{
                    attribute14 = 2
                }
                var newRowIds =newRowIndex_THREE + newRowStart_THREE;
                $("#ThreejqGrid").jqGrid('addRow',{
                    rowID : newRowIds,
                    initdata:{
                        id:rowData.id,
                        attribute14:attribute14,
                        userIdAlias:rowData.userIdAlias,
                        partyIdAlias:rowData.partyIdAlias,
                        userCode:rowData.userCode,
                    },
                })
                newRowIndex_THREE++;
            }
            layer.msg("已添加!");
        })
        //绑定移除事件
        $("#partyGridRemove").bind('click',function () {
            var bpmsDeleteRows = $('#ThreejqGrid').jqGrid('getGridParam', 'selarrrow');
            if (bpmsDeleteRows.length == 0) {
                layer.alert('请选择！', {
                    icon: 7,
                    area: ['400px', ''],
                    closeBtn: 0
                });
                return;
            }
            for (var i = 0; i <bpmsDeleteRows.length ; i++) {
                $('#ThreejqGrid').jqGrid('delRowData',bpmsDeleteRows[i]);
                i--;
            }
            layer.msg("已移除!");

        })
        $('#userIdAlias').on('focus', function (e) {
            new H5CommonSelect({type: 'userSelect', idFiled: 'userId', textFiled: 'userIdAlias'});
            this.blur();
            nullInput(e);
        });
        $('#deptIdAlias').on('focus', function (e) {
            new H5CommonSelect({type: 'deptSelect', idFiled: 'deptId', textFiled: 'deptIdAlias'});
            this.blur();
            nullInput(e);
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
                        layer.msg("所选结构不能为党小组！需要查询党小组需通过高级查询中的党小组查询。")
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
        $('#attribute01Alias').on('focus', function (e) {
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
                    if (selectedNewNode.text.lastIndexOf("小组") == -1) {
                        layer.msg("所选结构并非党小组！")
                        return;
                    }

                    $("#attribute01").val(selectedNewNode.id);
                    $("#attribute01Alias").val(selectedNewNode.text);
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
        window.getjqGrArr = function () {
            return $("ThreejqGrid").jqGrid("getRowData");
        }

        window.getGridName = function () {
            var name = "";
            var rowData = $('#ThreejqGrid').jqGrid('getRowData')
            for (var i = 0; i <rowData.length ; i++) {
                name+=rowData[i].userIdAlias
                if(rowData.length!=1&&rowData.length-1!=i){
                    name+="."
                }
            }
            return name;
        }

    });
</script>
</html>

