<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
    String importlibs = "common,table";
%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <link rel="stylesheet" type="text/css" href="avicit/platform6/console/demostorage/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/layer-v2.3/layer/skin/layer.css">
    <link rel="stylesheet" type="text/css" href="static/h5/switch/css/bootstrap-switch.css"/>

    <link rel="stylesheet" type="text/css" href="static/h5/jQuery-Timepicker-Addon-1.6.3/jquery-ui-1.12.1.custom/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/jQuery-Timepicker-Addon-1.6.3/dist/jquery-ui-timepicker-addon.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery.spinner-master/dist/css/bootstrap-spinner.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/colorpicker/css/colorpicker.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/avicSelectBar/compent/avicSelect/css/avicSelect.css"/>

    <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
    <title>管理</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>

</head>
<style>
    .searchBox {
        padding: 5px;
        left: 0;
        top: 90px;
        width: 199px;
        background: #fff
    }

    .searchBox input {
        color: #888888;
        font-size: 12px;
        padding-left: 14px;
        border-radius: 14px;
        background: #f3f4f9;
        border: 1px solid #EAECF2;
        height: 28px;
        line-height: 32px;
        width: 100%;
        padding: 0 46px 0 14px;
        outline: medium;
    }

    .searchBox i.clear {
        position: absolute;
        left: auto;
        right: 92px;
        font-size: 14px;
        width: 28px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        cursor: pointer;
        color: #888888;
        display: none;
    }

    .searchBox i.query {
        position: absolute;
        left: auto;
        right: 10px;
        font-size: 14px;
        width: 28px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        cursor: pointer;
        color: #888888;
    }
    .bootstrap-switch.bootstrap-switch-small {
		min-width: 60px;
	}
	.bootstrap-switch > div > span.bootstrap-switch-danger {
		background: #bdbdbd;
	}
	.bootstrap-switch > div > span.bootstrap-switch-success {
		background: #0066CC;
	}
</style>

<body>
<div class="codeGenerator">
    <div id="basicTableDemo" class="secondMenuStatus">
        <div id="tableToolbarBasic" class="toolbar">
            <div class="toolbar-left" style="position: relative; padding-top: 12px;">
                <span class="remind-text">◆ 提示：示例代码路径为："avicit/platform6/console/demostorage/tableDemoManage.jsp"</span>
            </div>
            <div class="toolbar-right" style="position: relative;">
                <div class="searchBox">
                    <input type="text" id="searchBasic" placeholder="请输入关键字搜索"> <i class="icon icon-guanbi1 clear"
                                                                              id="searchClearBasic"></i><i
                        class="icon icon-search_ query" id="searchQueryBasic"></i>
                </div>
            </div>
        </div>
        <div>
            <table id="basicTableDemojqGrid"></table>
        </div>
    </div>
</div>

<div class="codeGenerator">
    <div id="editTableDemo" class="secondMenuStatus">
        <div id="tableToolbarEdit" class="toolbar">
            <div class="toolbar-left" style="position: relative; padding-top: 12px;">
                <span class="remind-text">◆ 提示：示例代码路径为："avicit/platform6/console/demostorage/tableDemoManage.jsp"</span>
            </div>
            <div class="toolbar-right" style="position: relative;">
                <div class="searchBox">
                    <input type="text" id="searchEdit" placeholder="请输入关键字搜索">
                    <i class="icon icon-guanbi1 clear" id="searchClearEdit"></i>
                    <i class="icon icon-search_ query" id="searchQueryEdit"></i>
                </div>
            </div>
        </div>
        <div>
            <table id="editTableDemojqGrid"></table>           
        </div>
        
    </div>
</div>


</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script src="static/js/platform/eform/widget.js"></script>
<script src="static/js/platform/eform/mouse.js"></script>
<script src="static/js/platform/eform/sortable.js"></script>
<script src="static/h5/jquery-ui-1.9.2.custom/development-bundle/ui/jquery.ui.core.js"></script>
<script type="text/javascript" src="static/h5/jquery.spinner-master/dist/js/jquery.spinner.js"></script>
<script type="text/javascript" src="static/h5/common-ext/validate-ext.js"></script>
<script type="text/javascript" src="static/h5/jquery-validation/1.14.0/localization/messages_zh.js"></script>
<script type="text/javascript" src="static/h5/common-ext/window-ext.js"></script>
<script type="text/javascript" src="static/h5/common-ext/CommonSelect.js"></script>
<script type="text/javascript" src="static/h5/colorpicker/js/colorpicker.js"></script>
<script type="text/javascript" src="static/h5/avicSelectBar/compent/avicSelect/js/avicSelect.js"></script>
<script type="text/javascript" src="static/h5/jQuery-Timepicker-Addon-1.6.3/jquery-ui-1.12.1.custom/jquery-ui.js"></script>
<script type="text/javascript" src="static/h5/jQuery-Timepicker-Addon-1.6.3/dist/jquery-ui-timepicker-addon.js"></script>
<script type="text/javascript" src="static/h5/jQuery-Timepicker-Addon-1.6.3/dist/i18n/jquery-ui-timepicker-zh-CN.js"></script>
<script type="text/javascript" src="static/h5/jQuery-Timepicker-Addon-1.6.3/dist/jquery-ui-sliderAccess.js"></script>
<script type="text/javascript" src="static/h5/switch/js/bootstrap-switch.js" charset="utf-8"></script>
<script type="text/javascript" src="static/h5/common-ext/h5-customselect.js" charset="utf-8"></script>


<script type="text/javascript">
    function initParentHeight() {
        var defaultAPI = 'basicTableDemo';
        var parentAPI = parent.currentAPI == '' ? defaultAPI : parent.currentAPI;
        //先隐藏所有标签
        $('.codeGenerator').hide();
        //再显示当前点击的二级菜单对应的内容
        $('#' + parentAPI).parent().show();
    }

    function fmtMaritalStatus(cellvalue, options, rowObject) {
        if (rowObject.maritalStatus == "true") {
            return "<input type='checkbox' class='maritalStatus' id='maritalStatus_box"+rowObject.id+"' checked='checked'>";
        } else {
            return "<input type='checkbox' class='maritalStatus' id='maritalStatus_box"+rowObject.id+"'>";
        }
    }
/*-------------------------------------------------------------------------------------------------*/
    function fmtBasicMove(cellvalue, options, rowObject){
        var html='<i class="fa fa-arrows" style="color:#aaa;cursor:move"></i>'
        return html;
    }
    function fmtBasicSex(cellvalue, options, rowObject) {
        if (rowObject.sex == "man") {
            return "<img src='avicit/platform6/console/user/images/man.png' title='男'>";
        } else {
            return "<img src='avicit/platform6/console/user/images/woman.png' title='女'>";
        }
    }
    function stateFormatter(cellvalue, options, rowObject){
		if("true" == cellvalue){
			return '<input type="checkbox" class="valid" id="valid'+rowObject.id+'" name="my-checkbox" data-rowid="'+rowObject.id+'" checked />';
		} else {
			return '<input type="checkbox" class="valid" id="valid'+rowObject.id+'" name="my-checkbox" data-rowid="'+rowObject.id+'"/>';
		}
	}
	function formatTools(cellvalue, options, rowObject){
        var html = '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="editRow(\'' + rowObject.id + '\');">编辑</a>'+
                '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="deleteRow(\'' + rowObject.id + '\');">删除</a>';
		return html;
	}
	function editRow(rowId) {
        /*$('#editTableDemojqGrid').jqGrid('editRow',rowId);*/
    }
    function deleteRow(rowId) {
        /*$('#editTableDemojqGrid').jqGrid('delRowData',rowId);*/
    }
    function initTips() {
        var tipsIndex;
        $("#templateTips").mouseover(function () {
            var message = "<span style='color:#333333;'>工作信息Tips提示</span>";
            tipsIndex = layer.tips(message, $(this), {
                tips: 1,
                area: ['auto', 'auto'],
                time: 0
            });
        }).mouseout(function () {
            layer.close(tipsIndex);
        });
    }
/*----------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/    
    $(document).ready(function() {
        initParentHeight();
/*----------------------------------------basicTableDemo Start-------------------------------------*/
        var basciDataGridColModel = [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true}
            , {label: '移动', 
                name: 'drag', 
                width: 75,
                frozen: true,
                align: "center",
                editable: false, 
                edittype: "text", 
                formatter:fmtBasicMove,
                editoptions: {
                    maxlength: "8",
                }
            }
            , {label: '工号', name: 'workNo',align:'center',editable: false,  width: 150}
            , {label: '姓名', name: 'name',align:'center',editable: false,  width: 150}
            , {label: '所属部门', name: 'dept',align:'center',editable: false,  width: 150}
            , {label: '职位', name: 'position',align:'center',editable: false,  width: 150}
            , {label: '薪资', name: 'salary',align:'center',editable: false,  width: 75}
            , {label: '创建日期', name: 'creatDate',align:'center',editable: false,  width: 150}
            , {label: '性别', name: 'sex',align:'center',editable: false,  width: 150, formatter:fmtBasicSex}
            , {label: '年龄', name: 'age',align:'center',editable: false,  width: 150}
            , {label: '出生日期', name: 'birth',align:'center',editable: false,  width: 150}
            , {label: '婚否', name: 'maritalStatus',align:'center',editable: false,  width: 150,formatter:fmtMaritalStatus}
            , {label: '操作', name: 'operation', align: 'center', sortable : false, width: 150, formatter : formatTools}
        ];
        
        $('#basicTableDemojqGrid').jqGrid({
            datatype: 'local',
            toolbar: [],
            colModel: basciDataGridColModel,
            styleUI: 'Bootstrap',
            width:"100%",
            height: $(parent.window).height() - 240,
            rowNum: 2000,
            multiselect: true,
            multiboxonly: true,
            autowidth: true,
            shrinkToFit: true,
            cellEdit: false,
            sortable: false
        });
        
        $('#basicTableDemojqGrid').jqGrid('setGroupHeaders', {
            useColSpanStyle: true, //没有表头的列是否与表头列位置的空单元格合并  
            groupHeaders: [
                //合并 startColumnName(开始列),以dept列开始; numberOfColumns(合并几列),合并3列; titleText(合并后父列名),合并后父列名为'工作信息' 
                {
                    startColumnName: 'dept', // 对应colModel中的name
                    numberOfColumns: 3,//合并列数
                    titleText: '工作信息<i class="tips-iconhelp icon iconfont icon-question-circle" id="templateTips"></i>'
                }, {
                    startColumnName: 'sex',
                    numberOfColumns: 4,
                    titleText: '基本信息'
                }]
        });
        
        $(".ui-th-column-header").css("border-top-width", "0px");
        $(".ui-th-column-header").css("font-weight", "bold");
        $(".ui-th-column").css("text-align", "center");
        
        $('#basicTableDemojqGrid').jqGrid('sortableRows');//行拖拽，需引入js
        var rows=[
            {"id":"demo1","drag":"","workNo":"2021001","name":"张三","dept":"研发中心","position":"开发工程师","salary":"8180.30","creatDate":"2021/1/1","sex":"man","age":"30","birth":"1991/1/1","maritalStatus":"true"},
            {"id":"demo2","drag":"","workNo":"2021002","name":"李四","dept":"研发中心","position":"开发工程师","salary":"8180.31","creatDate":"2021/2/2","sex":"man","age":"29","birth":"1992/2/2","maritalStatus":"true"},
            {"id":"demo3","drag":"","workNo":"2021003","name":"王五","dept":"研发中心","position":"开发工程师","salary":"8180.32","creatDate":"2021/3/3","sex":"woman","age":"28","birth":"1993/3/3","maritalStatus":"false"},
            {"id":"demo4","drag":"","workNo":"2021004","name":"刘六","dept":"研发中心","position":"开发工程师","salary":"8180.33","creatDate":"2021/4/4","sex":"man","age":"27","birth":"1994/4/4","maritalStatus":"true"},
            {"id":"demo5","drag":"","workNo":"2021005","name":"林七","dept":"研发中心","position":"助理工程师","salary":"8180.34","creatDate":"2021/5/5","sex":"woman","age":"26","birth":"1995/5/5","maritalStatus":"true"},
        ];
        for (var i = 0; i < rows.length; i++) {
            $('#basicTableDemojqGrid').jqGrid('addRowData', rows.id, rows[i]);
        }
        initTips();
         //查询
        $('#searchBasic').bind('click', function (e) {
            var search = $("#searchBasic").val();
            if (search != '') {
                $("#searchClearBasic").show();
            } else {
                $("#searchClearBasic").hide();
            }
            searchWordBasic($(e.target).val());
        });
        $('#searchBasic').on('keydown', function (e) {
            if (e.keyCode == '13') {
                var search = $("#searchBasic").val();
                if (search != '') {
                    $("#searchClearBasic").show();
                } else {
                    $("#searchClearBasic").hide();
                }
                searchWordBasic($(e.target).val());
            }
        });
        $('#searchClearBasic').bind('click', function (event) {
            $("#searchClearBasic").hide();
            $("#searchBasic").val(null);
            searchWordBasic("");
        });
/*----------------------------------------basicTableDemo End-------------------------------------*/
        
/*----------------------------------------editTableDemo Start-------------------------------------*/
        var jobTitle_Options = {
            seniorEngineer: "高级开发工程师",
            intermediateEngineer: "中级开发工程师",
            juniorEngineer: "初级开发工程师",
            assistantEngineer : "助理开发工程师"
        };
        var editDataGridColModel = [
            {label: 'id', name: 'id', key: true, width: 75, hidden: true}
            , {label: '工号', name: 'workNo', align: 'center', editable: true, sortable: false, width: 150}
            , {label: 'userId', name: 'userId', width: 75, hidden: true, editable: true}
            , {
                label: '姓名',
                name: 'name',
                align: 'center',
                sortable: false,
                width: 150,
                editable: true,
                edittype: 'custom',
                editoptions: {
                    custom_element: userElem,
                    custom_value: userValue,
                    viewScope:'currentOrg',
                    forId: 'userId'
                }
            }
            , {label: 'deptId', name: 'deptId', width: 75, editable: true, hidden: true}
            , {
                label: '所属部门',
                name: 'dept',
                align: 'center',
                editable: true,
                sortable: false,
                width: 150,
                edittype: 'custom',
                editoptions: {
                    custom_element: deptElem,
                    custom_value: deptValue,
                    forId: 'deptId'
                }
            }
            , {label: 'postionID', name: 'positionId', width: 75, hidden: true, editable: true}
            , {
                label: '所属岗位',
                name: 'position',
                align: 'center',
                width: 150,
                editable: true,
                sortable: false,
                edittype: 'custom',
                editoptions: {
                    custom_element: positionElem,
                    custom_value: positionValue,
                    forId: 'positionId'
                }
            }
            , {label: 'sysRoleId', name: 'sysRoleId', width: 75, hidden: true, editable: true}
            , {
                label: '所属角色',
                name: 'role',
                align: 'center',
                width: 150,
                sortable: false,
                editable: true,
                edittype: 'custom',
                editoptions: {
                    custom_element: roleElem,
                    custom_value: roleValue,
                    forId: 'sysRoleId'
                }
            }
            , {label: 'sysGroupId', name: 'sysGroupId', width: 75, hidden: true, editable: true}
            , {
                label: '所属群组',
                name: 'group',
                align: 'center',
                width: 150,
                sortable: false,
                editable: true,
                edittype: 'custom',
                editoptions: {
                    custom_element: groupElem,
                    custom_value: groupValue,
                    forId: 'sysGroupId'
                }
            }
            , {
                label: '创建日期',
                name: 'creatDate',
                align: 'center',
                editable: true,
                width: 150,
                edittype: 'custom',
                editoptions: {
                    custom_element: dateElem,
                    custom_value: dateValue
                }
                /*edittype: 'text',
                editoptions: {
                    size: 10,
                    maxlengh: 10,
                    dataInit: function (element) {
                        $(element).datepicker({
                            beforeShow: function () {
                                setTimeout(function () {
                                    $('#ui-datepicker-div').css("z-index", 99999999);
                                }, 100);
                            }
                        });
                    }
                }*/
            }
            , {label: 'jobTitleID', name: 'jobTitleID', width: 75, hidden: true, editable: true}
            , {
                label: '职位',
                name: 'jobTitle',
                align: 'center',
                editable: true,
                width: 150,
                sortable:false,
                edittype : "custom",
				editoptions : {
					custom_element : selectElem,
					custom_value : selectValue,
					forId : 'jobTitleID',
					value: jobTitle_Options
				}
				
            }
            , {
                label: '年龄',
                name: 'age',
                align: 'center',
                editable: true,
                sortable: false,
                width: 150,
                edittype: 'custom',
                editoptions: {
                    custom_element: spinnerElem,
                    custom_value: spinnerValue,
                    min: 0,
                    max: 999,
                    step: 1,
                    precision: 0
                }
            }
            , {
                label: '婚否',
                name: 'maritalStatus',
                align: 'center',
                width: 75,
                sortable:false,
                editable: true,
                edittype: 'checkbox',
                editoptions: {
                    value: "true:false",
                    dataInit: function (element) {
                        $(element).keydown(function (event) {
                            if (event.keyCode == 13) {
                                return false;
                            }
                            if (event.keyCode == 27) {
                                return false;
                            }
                        });
                    }
                },
                formatter:fmtMaritalStatus
            }
            ,{
                label: '自定义弹出页',
                name: 'lookupSelect',
                align: 'center',
                editable: true,
                sortable: false,
                width: 150,
                edittype: 'custom',
                editoptions : {
					custom_element : customDialogElem,
					custom_value : customDialogVlaue,
                    title: '自定义弹出页选择',
                    url: 'avicit/platform6/console/demostorage/LookupTypeSelectForDemo.jsp',
                    fields: {'lookupSelect':'lookupTypeName'},
				}
            }
            , {
                label: '是否有效',
                name: 'isValid',
                align: 'center',
                editable: false,
                sortable: false,
                width: 150,
                formatter : stateFormatter
            }
        ];
        $('#editTableDemojqGrid').jqGrid({
            datatype: 'local',
            toolbar: [],
            colModel: editDataGridColModel,
            styleUI: 'Bootstrap',
            width:"100%",
            height: $(parent.window).height() - 240,
            rowNum: 2000,
            multiselect: true,
            multiboxonly: true,
            autowidth: true,
            shrinkToFit: true,
            editable: false,
            cellEdit : true,
            cellsubmit: 'clientArray',
            sortable: false
        });
        var rows = [
            {
                "id": "demo1",
                "workNo": "2021001",
                "name": "张三",
                "deptId": "1",
                "dept": "研发中心",
                "positionId": "1",
                "position": "普通员工",
                "sysRoleId": "1",
                "role": "一般用户",
                "sysGroupId": "1",
                "group": "篮球俱乐部",
                "creatDate": "2021/1/1",
                "jobTitle": "开发工程师",
                "age": "25",
                "maritalStatus": "true",
                "lookupSelect": "自定义弹出页选择",
                "isValid": "true",
                "operation": ""
            },
            {
                "id": "demo2",
                "workNo": "2021002",
                "name": "李四",
                "deptId": "1",
                "dept": "研发中心",
                "positionId": "1",
                "position": "普通员工",
                "sysRoleId": "1",
                "role": "一般用户",
                "sysGroupId": "1",
                "group": "篮球俱乐部",
                "creatDate": "2021/2/2",
                "jobTitle": "开发工程师",
                "age": "25",
                "maritalStatus": "false",
                "lookupSelect": "自定义弹出页选择",
                "isValid": "false",
                "operation": ""
            },
            {
                "id": "demo3",
                "workNo": "2021003",
                "name": "王五",
                "deptId": "1",
                "dept": "研发中心",
                "positionId": "1",
                "position": "普通员工",
                "sysRoleId": "1",
                "role": "一般用户",
                "sysGroupId": "1",
                "group": "篮球俱乐部",
                "creatDate": "2021/3/3",
                "jobTitle": "助理工程师",
                "age": "25",
                "maritalStatus": "true",
                "lookupSelect": "自定义弹出页选择",
                "isValid": "true",
                "operation": ""
            }
        ];
        for (var i = 0; i < rows.length; i++) {
            $('#editTableDemojqGrid').jqGrid('addRowData', rows.id, rows[i]);
        }
        $('.valid').bootstrapSwitch({
            size: 'small',
            onText: '开启',
            offText: '关闭',
            onColor: "success",
            offColor: "danger"
        });
        // 开关
        $('.valid').on('switchChange.bootstrapSwitch', function (event, state) {
            if (state.value) {
                
            } else {
                
            }
        });
         //查询
        $('#searchEdit').bind('click', function (e) {
            var search = $("#searchEdit").val();
            if (search != '') {
                $("#searchClearEdit").show();
            } else {
                $("#searchClearEdit").hide();
            }
            searchWordEdit($(e.target).val());
        });
        $('#searchEdit').on('keydown', function (e) {
            if (e.keyCode == '13') {
                var search = $("#searchEdit").val();
                if (search != '') {
                    $("#searchClearEdit").show();
                } else {
                    $("#searchClearEdit").hide();
                }
                searchWordEdit($(e.target).val());
            }
        });
        $('#searchClearEdit').bind('click', function (event) {
            $("#searchClearEdit").hide();
            $("#searchEdit").val(null);
            searchWordEdit("");
        });

        $(window).resize(function () {
            $(".codeGenerator").css('height', $(parent.window).height() - 240);
        });
/*----------------------------------------editTableDemo End-------------------------------------*/
    });

    function searchWordBasic(val) {
        var search_param = new Array(); //用于保存筛选规则
        var a = new GridSearch($("#basicTableDemojqGrid")); //创建实例-传入JqGrid的对象
        search_param.push(
            {
                rule_name: 'vague', //筛选方式
                str: val, //筛选值
                column: 'workNo' //列名
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'name'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'dept'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'position'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'salary'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'creatDate'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'sex'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'age'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'birth'
            }
        );
        a.set_search_param(search_param); //提交设置规则
        a.search();
    }
    
    function searchWordEdit(val) {
        var search_param = new Array(); //用于保存筛选规则
        var a = new GridSearch($("#editTableDemojqGrid")); //创建实例-传入JqGrid的对象
        search_param.push(
            {
                rule_name: 'vague', //筛选方式
                str: val, //筛选值
                column: 'workNo' //列名
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'name'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'dept'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'position'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'role'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'group'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'creatDate'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'jobTitle'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'age'
            },
            {
                rule_name: 'vague', 
                str: val, //筛选值
                column: 'lookupSelect'
            }
        );
        a.set_search_param(search_param); //提交设置规则
        a.search();
    }

    /*
      jqGrid 前端筛选功能
    */
    var GridSearch = function (grid) {

        this.grid = grid;
        this.search_param = null;
        this.r = [];
        this.data = this.grid.jqGrid('getRowData');

        //根据键值删除指定的元素
        this.delete_val_by_key = function (keys, arr) {
            for (var j = 0, i = 0; i < keys.length; i++) {
                arr.splice(keys[i - j], 1);
                j++;
            }
            return arr;
        }

        /**
         * 隐藏行
         */
        this.hideRow = function (rowId) {
            this.grid.setRowData(rowId, null, {
                display: 'none'
            });
        }
        /**
         * 显示行
         */
        this.showRow = function (rowIdList) {
            for(var i =0;i<rowIdList.length;i++){
                this.grid.setRowData(rowIdList[i], null, {
                    display: ''
                });
            }
            
        }
        /**
         * 显示全部行
         */
        this.showAllRow = function () {
            for (var i = 0; i < this.data.length; i++) {
                this.showRow(i + 1)
            }
        }

        //设置筛选参数
        this.set_search_param = function (search_param) {
            this.search_param = search_param;
        }

        //筛选规则
        /*模糊筛选*/
        this.vagueSearch = function (str, column) {
            var re = new RegExp(str,"i");
            /*var is = [];*/
            for (var i = 0; i < this.data.length; i++) {
                var colValue = this.data[i][column];
                if (re.test(colValue)) {
                    this.r.push("demo"+(i + 1));
                    //this.showRow("demo"+(i + 1))
                } else {
                    this.hideRow("demo"+(i + 1));
                }
            }
            if(this.r.length>0){
                this.showRow(this.r);
            }
        }

        /*区间查找*/
        this.betweenSearch = function (start, end, column) {
            // var is = [];
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i][column] >= start && this.data[i][column] <= end) {
                    this.showRow(i + 1)
                } else {
                    this.hideRow(i + 1);
                }
            }
        }

        /*根据参数选择规则筛选*/
        this.select = function (params) {
            //var rule_name = params.rule_name;
            switch (params.rule_name) {
                case 'between':
                    //console.log(this.result);
                    this.betweenSearch(params.start, params.end, params.column);
                    break;
                case 'vague':
                    this.vagueSearch(params.str, params.column);
                    break;
            }
        }

        /*清空 result */
        this.clearData = function () {
            this.data = [];
        }

        //执行筛选
        this.search = function () {
            if (this.search_param) {
                if ($.type(this.search_param) == 'array') {
                    for (var i = 0; i < this.search_param.length; i++) {
                        if (this.search_param[i]) {
                            this.select(this.search_param[i]);
                        } else {
                            this.showAllRow();
                        }
                    }
                } else {
                    this.select(this.search_param);
                }
            } else {
                this.showAllRow();
            }
        }
    }
</script>

</html>