<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form,table";
%>
<!DOCTYPE html>
<html>
<head>
    <!-- ControllerPath = "avicit/pb/activist/partyActivist/partyActivistController/operation/Add/null" -->
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <style type="text/css">


    </style>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
    <form id='form'>
        <input type="hidden" name="id"/>
        <table class="form_commonTable">
            <tr>
                <th width="15%"><label for="userIdAlias">姓名:</label></th>
                <td width="34%">
                    <div class="input-group input-group-sm">
                        <input type="hidden" id="userId" name="userId"> <input
                            class="form-control" placeholder="请选择用户" type="text"
                            id="userIdAlias" name="userIdAlias"> <span
                            class="input-group-addon"> <i
                            class="glyphicon glyphicon-user"></i>
							</span>
                    </div>
                </td>
                <th width="15%"><label for="deptIdAlias">一级部门:</label></th>
                <td width="34%">
                    <div class="input-group input-group-sm">
                        <input type="hidden" id="deptId" name="deptId"> <input
                            class="form-control" placeholder="请选择部门" type="text"
                            id="deptIdAlias" name="deptIdAlias"> <span
                            class="input-group-addon"> <i
                            class="glyphicon glyphicon-equalizer"></i>
							</span>
                    </div>
                </td>
            </tr>
            <tr>
                <th>
                    <label for="partyIdAlias">党支部:</label>
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
                    <label for="attribute08Alias">所在党小组:</label>
                </th>
                <td>
                    <div class="input-group input-group-sm">
                        <input type="hidden" name="attribute08" id="attribute08"/>
                        <input class="form-control" placeholder="请选择党小组" type="text" id="attribute08Alias"
                               name="attribute08Alias">
                        <span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
                    </div>
                </td>

            </tr>
            <tr>
                <th><label for="sex">性别:</label></th>
                <td><pt6:h5select css_class="form-control input-sm" name="sex"
                                  id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX"/></td>
                <th><label for="userCode">人员编码:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="userCode" id="userCode"/></td>
            </tr>

            <tr>
                <th><label for="birthday">出生年月:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker" type="text"
                               name="birthday" id="birthday"/> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td>
                <th><label for="attribute06">联系电话:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="attribute06" id="attribute06"/></td>
            </tr>
            <tr>
                <th><label for="attribute01">年龄:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="attribute01" id="attribute01" disabled="disabled"/></td>
                <th><label for="attribute02">教育类别:</label></th>
                <td><pt6:h5select css_class="form-control input-sm" name="attribute02"
                                  id="attribute02" title="" isNull="true" lookupCode="PA_EDUCATION_TYPE"/></td>

            </tr>
            <tr>
                <th><label for="nation">民族:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="nation" id="nation"/></td>
                <th><label for="orign">籍贯:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="orign" id="orign"/></td>
            </tr>
            <tr>
                <th><label for="educationLevel">文化程度:</label></th>
                <td><pt6:h5select css_class="form-control input-sm"
                                  name="educationLevel" id="educationLevel" title="" isNull="true"
                                  lookupCode="PA_EDUCATION_LEVEL"/></td>
                <th><label for="idcard">身份证号:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="idcard" id="idcard"/></td>
            </tr>
            <tr>
                <th><label for="professionalRank">职称:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="professionalRank" id="professionalRank"/></td>
                <th><label for="attribute03">职称等级:</label></th>
                <td><pt6:h5select css_class="form-control input-sm" name="attribute03"
                                  id="attribute03" title="" isNull="true" lookupCode="PA_PROFESSIONAL_RANK_LEVEL"/></td>
            </tr>
            <tr>
                <th><label for="attribute07">出生地:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="attribute07" id="attribute07"/></td>
                <th><label for="attribute05">身份类别:</label></th>
                <td><pt6:h5select css_class="form-control input-sm" name="attribute05"
                                  id="attribute05" title="" isNull="true" lookupCode="PA_CATEGORY"/></td>

            </tr>
            <tr>
                <th>
                    <label for="post">职务:</label></th>
                <td>
                    <input class="form-control input-sm" type="text" name="post" id="post">
                </td>
                <th><label for="introducer">培养联系人:</label></th>
                <td><input class="form-control input-sm" type="text"
                           name="introducer" id="introducer"/></td>


            </tr>
            <tr>
                <th><label for="partyMembers">所在班组党员数:</label></th>
                <td>
                    <div class="input-group input-group-sm spinner"
                         data-trigger="spinner">
                        <input class="form-control" type="text" name="partyMembers"
                               id="partyMembers" data-min="-9999999999999999999999"
                               data-max="9999999999999999999999" data-step="1"
                               data-precision="0"> <span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i
                                        class="glyphicon glyphicon-triangle-top"></i></a> <a
                            href="javascript:;" class="spin-down" data-spin="down"><i
                            class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
                    </div>
                </td>
                <!-- <th><label for="attribute11">毕业时间:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker" type="text"
                            name="attribute11" id="attribute11" /> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td> -->
                <th><label for="workTime">参加工作时间:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker" type="text"
                               name="workTime" id="workTime"/> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td>
            </tr>
            <tr>
                <th><label for="activistType">积极分子类别:</label></th>
                <td><pt6:h5select css_class="form-control   input-sm "
                                  name="activistType" id="activistType" title="" isNull="true"
                                  lookupCode="PA_PARTY_TYPE"/></td>
                <th><label for="reqpartyTime">申请入党时间:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker" onchange="equalsFrom(this)" type="text"
                               name="reqpartyTime" id="reqpartyTime"/> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td>
            </tr>
            <tr>
                <th><label for="fixactivistTime">确定积极分子时间:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker" <%--disabled="disabled"--%> type="text"
                               name="fixactivistTime" id="fixactivistTime" onchange="equalsFrom(this)"/> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td>
                <th><label id="fixstressTimeLabel" for="fixstressTime">确定重点培养时间:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker" onchange="equalsFrom(this)" disabled="disabled"
                               type="text"
                               name="fixstressTime" id="fixstressTime"/> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td>
            </tr>
            <tr>
                <th><label id="fixtargetTimeLabel" for="fixtargetTime">确定发展对象时间:</label></th>
                <td>
                    <div class="input-group input-group-sm">
                        <input class="form-control date-picker"  onchange="equalsFrom(this)" disabled="disabled"
                               type="text"
                               name="fixtargetTime" id="fixtargetTime"/> <span
                            class="input-group-addon"><i
                            class="glyphicon glyphicon-calendar"></i></span> <span
                            class="input-group-addon" onclick="clearCommonSelectValue(this)"><i
                            class="fa fa-close"></i></span>
                    </div>
                </td>
                <th><label for="leagueMember">团员:</label></th>
                <td><pt6:h5select css_class="form-control input-sm"
                                  name="leagueMember" id="leagueMember" title="" isNull="true"
                                  lookupCode="PA_YN_LEAGUE"/></td>
            </tr>

            <tr>
                <th><label for="attribute04">技能等级:</label></th>
                <td>
                    <pt6:h5select css_class="form-control input-sm" name="attribute04"
                                  id="attribute04" title="" isNull="true" lookupCode="PA_SKILL_LEVEL"/>

                </td>

                <th>
                    <label for="status">是否有效:</label>
                </th>
                <td>
                    <pt6:h5select css_class="form-control input-sm" name="status" id="status" title="" isNull="true"
                                  lookupCode="PLATFORM_VALID_FLAG" defaultValue="1"/>

                </td>

            </tr>
        </table>
    </form>
    <!-- 子表表格 -->
    <ul id="myTab" class="nav nav-tabs">
        <!--  <li ><a id="activistAchievementA"
            href="#activistAchievement" data-toggle="tab"
            data-type="dgActivistAchievement"
            data-table="activistAchievementEditJqGrid">积极分子突出工作业绩及获奖情况</a></li>-->
        <li class="active"><a id="activistMeritsA" href="#activistMerits"
                              data-toggle="tab" data-type="dgActivistMerits"
                              data-table="activistMeritsEditJqGrid">近两年绩效考核成绩</a></li>
    </ul>
    <div id="myTabContent" class="tab-content">
        <!--  <div id="activistAchievement" class="tab-pane fade ">
				<div id="activistAchievementTableToolbar" class="toolbar">
					<div class="toolbar-left">
						<sec:accesscontrollist hasPermission="3"
							domainObject="formdialog_activistAchievementEdit_button_add"
							permissionDes="添加">
							<a id="activistAchievementEdit_insert" href="javascript:void(0)"
								class="btn btn-primary form-tool-btn btn-sm" role="button"
								title="添加"><i class="fa fa-plus"></i> 添加</a>
						</sec:accesscontrollist>
						<sec:accesscontrollist hasPermission="3"
							domainObject="formdialog_activistAchievementEdit_button_del"
							permissionDes="删除">
							<a id="activistAchievementEdit_del" href="javascript:void(0)"
								class="btn btn-primary form-tool-btn btn-sm" role="button"
								title="删除"><i class="fa fa-trash-o"></i> 删除</a>
						</sec:accesscontrollist>
					</div>
				</div>
				<table id="activistAchievementEditJqGrid"></table>
			</div>-->
        <div id="activistMerits" class="tab-pane fade in active">
            <div id="activistMeritsTableToolbar" class="toolbar">
                <div class="toolbar-left">
                    <sec:accesscontrollist hasPermission="3"
                                           domainObject="formdialog_activistMeritsEdit_button_add"
                                           permissionDes="添加">
                        <a id="activistMeritsEdit_insert" href="javascript:void(0)"
                           class="btn btn-primary form-tool-btn btn-sm" role="button"
                           title="添加"><i class="fa fa-plus"></i> 添加</a>
                    </sec:accesscontrollist>
                    <sec:accesscontrollist hasPermission="3"
                                           domainObject="formdialog_activistMeritsEdit_button_del"
                                           permissionDes="删除">
                        <a id="activistMeritsEdit_del" href="javascript:void(0)"
                           class="btn btn-primary form-tool-btn btn-sm" role="button"
                           title="删除"><i class="fa fa-trash-o"></i> 删除</a>
                    </sec:accesscontrollist>
                </div>
            </div>
            <table id="activistMeritsEditJqGrid"></table>


        </div>
    </div>


</div>


<div data-options="region:'south',border:false" style="height: 60px;">
    <div id="toolbar"
         class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
        <table class="tableForm"
               style="border: 0; cellspacing: 1; width: 100%">
            <tr>
                <td width="50%" style="padding-right: 4%;" align="right"><a
                        href="javascript:void(0)"
                        class="btn btn-primary form-tool-btn typeb btn-sm" role="button"
                        title="保存" id="partyActivist_saveForm">保存</a> <a
                        href="javascript:void(0)"
                        class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
                        id="partyActivist_closeForm">返回</a></td>
            </tr>
        </table>
    </div>
</div>
<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script
        src="avicit/pb/activist/activistachievement/js/ActivistAchievementEdit.js"
        type="text/javascript"></script>
<script
        src="avicit/pb/activist/activistmerits/js/ActivistMeritsEdit.js"
        type="text/javascript"></script>
<script src="avicit/pb/activist/activistachievement/js/ActivistAchievement.js" type="text/javascript"></script>
<script type="text/javascript">

    //遮罩
    var maskId = null;
    //初始化时间控件
    var activistAchievementEdit;
    var activistMeritsEdit;
    var meritsMap = ${meritsMap};

    function initDateSelect() {
        $('.date-picker').datepicker({
            beforeShow: function (selectedDate) {
                setTimeout(function () {
                    $('#ui-datepicker-div').css("z-index", 99999999);
                }, 100);
            }
        });
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
                setTimeout(function () {
                    $('#ui-datepicker-div').css("z-index", 99999999);
                }, 100);
            }
        });
        $('.date-picker').on('keydown', nullInput);
        $('.time-picker').on('keydown', nullInput);
    }

    function closeForm() {
        parent.partyActivist.closeDialog("insert");
    }

    function saveForm() {
        var userBol = false;
        $.ajax({
            url:"avicit/pb/scoring/integral/integralController/sql.json",
            async:false,
            type:"POST",
            dataType:"JSON",
            data:{
                sql:"select * from party_activist t where t.user_id = '"+$("#userId").val()+"'"
            },
            success:function (e) {
                if(e.length!=0){
                    layer.msg("该用户已存在积极分子库中，不允许多次添加")
                    userBol = true;
                }
            }
        })
        if(userBol) return  false;
        userBol = isData();
        if (!userBol) return  false;
        var isValidate = $("#form").validate();
        if (!isValidate.checkForm()) {
            isValidate.showErrors();
            return false;
        }

        var activistTypeValue3 = $("#activistType").val();
        var fixstressTime3 = $("#fixstressTime").val()
        var fixtargetTime3 = $("#fixtargetTime").val()


        if(activistTypeValue3 == '2'){
        	if(fixstressTime3 == "" ){
        		layer.msg("当积极分子类别为重点培养时，确定重点培养时间不能为空！！！");
        		return false;
        	}


        }
        if(activistTypeValue3 == '3'){
        	if(fixtargetTime3 == ""){
        		layer.msg("当积极分子类别为发展对象时，确定发展对象时间不能为空！！！");
        		return false;
        	}
        }
        //限制保存按钮多次点击
        $('#partyActivist_saveForm').addClass('disabled').unbind("click");

        //var activistAchievementData = activistAchievementEdit.getEditData();
        var activistAchievementData = "";
        var activistMeritsData = activistMeritsEdit.getEditData();

        parent.partyActivist.save($('#form'), "insert",
            activistAchievementData, new Array(), activistMeritsData, new Array());
    }

    //清空日期值
    function clearCommonSelectValue(element) {
        $(element).siblings("input").val("");
    }

    $(document).ready(
        function () {
            initDateSelect();

            //$("#attribute03").attr("disabled","disabled");
            //$('#professionalRank').bind('change', function(){
            //var professionalRankVal =   $(this).val();
            //var professionalRankValTrim = professionalRankVal.replace(/\s*/g,"");
            //console.log($("#attribute03").val());
            //if(professionalRankValTrim != ""){
            //$("#attribute03").removeAttr("disabled","disabled");
            //}else{
            //$("#attribute03").val("");
            //$("#attribute03").attr("disabled","disabled");
            //}
            //});


            function selectUserCallBack(user) {
                $("#userCode").val(user.loginNames);
                $.ajax({
                    url:"api/avicit/pb/member/partyMember/rest/"+user.loginNames,
                    type:"GET",
                    dataType:"JSON",
                    async:false,
                    success:function(e){
                        if(e.result == "success"&&e.dto != null){
                            $("#workTime").val(format(e.dto.cjgzrq))
                            $("#birthPlace").val(e.dto.csd)
                            $("#idcard").val(e.dto.sfzh)
                            $("#address").val(e.dto.JTZZ)
                            if(e.dto.xb=="男"){
                                e.dto.xb="0"
                            }else if(e.dto.xb=="女"){
                                e.dto.xb="2"
                            }
                            $("#sex").val(e.dto.xb)
                            $("#nation").val(e.dto.mz)
                            $("#birthday").val(format(e.dto.csrq))
                            $("#post").val(e.dto.szgw)
                            $("#orign").val(e.dto.jg)
                            $("#attribute01").val(e.dto.nl)
                            $("#onoffJob").val("0")
                        }
                    }

                })
            };
            var activistAchievementDataEditGridColModel = [{
                label: 'id',
                name: 'id',
                key: true,
                width: 75,
                hidden: true
            },
                {
                    label: '年份',
                    name: 'attribute01',
                    width: 150,
                    align: 'center',
                    editable: true,
                    edittype: "custom",
                    editoptions: {
                        custom_element: dateYearElem,
                        custom_value: dateYearValue
                    }
                },
                /*{
                    label : '年份',
                    name : 'attribute01',
                    width : 150,
                    align : 'center',
                    hidden : true
                },{
                    label : '年份',
                    name : 'attribute01Name',
                    width : 150,
                    align : 'center',
                    editable : true,
                    edittype:"custom",
                    editoptions: {
                            custom_element:dateYearElem,
                            custom_value:dateYearValue
                    }
                }*/
                {
                    label: '获得奖项',
                    name: 'awards',
                    editable: true
                }];

            activistAchievementEdit = new ActivistAchievementEdit(
                'activistAchievementEditJqGrid',
                '${activistAchievementEditUrl}',
                activistAchievementDataEditGridColModel, '');

            //
            var activistMeritsDataEditGridColModel = [{
                label: 'id',
                name: 'id',
                key: true,
                width: 75,
                hidden: true
            },
                {
                    label: '年份',
                    name: 'attribute01',
                    width: 150,
                    align: 'center',
                    editable: true,
                    edittype: "custom",
                    editoptions: {
                        custom_element: dateYearElem,
                        custom_value: dateYearValue
                    }
                },
                /*{
                    label : '年份',
                    name : 'attribute01',
                    width : 150,
                    align : 'center',
                    hidden : true
                },
                {
                    label : '年份',
                    name : 'attribute01Name',
                    width : 150,
                    align : 'center',
                    editable : true,
                    edittype:"custom",
                    editoptions: {
                            custom_element:selectElem,
                            custom_value:selectValue,
                            forId:'attribute01',
                            value: meritsMap.yearData
                    }
                },*/

                {
                    label: '绩效',
                    name: 'merits',
                    width: 150,
                    align: 'center',
                    hidden: true
                }, {
                    label: '绩效',
                    name: 'meritsName',
                    width: 150,
                    align: 'center',
                    editable: true,
                    edittype: "custom",
                    editoptions: {
                        custom_element: selectElem,
                        custom_value: selectValue,
                        forId: 'merits',
                        value: meritsMap.meritsData
                    }
                }, {
                    label: '类别',
                    name: 'type',
                    width: 150,
                    align: 'center',
                    hidden: true
                }, {
                    label: '类别',
                    name: 'typeName',
                    width: 150,
                    align: 'center',
                    editable: true,
                    edittype: "custom",
                    editoptions: {
                        custom_element: selectElem,
                        custom_value: selectValue,
                        forId: 'type',
                        value: meritsMap.typeData
                    }
                }, {
                    label: '排名',
                    name: 'position',
                    width: 150,

                    align: 'center',
                    editable: true
                }];

            activistMeritsEdit = new ActivistMeritsEdit(
                'activistMeritsEditJqGrid',
                '${activistMeritsEditUrl}',
                activistMeritsDataEditGridColModel, '');
            //

            $('#activistType').bind('change', function () {

                var activistTypeValue = $(this).val();
                if (activistTypeValue == '2') {
                    $("#fixstressTimeLabel").empty();
                    $("#fixstressTimeLabel").text("确定重点培养时间");
                    $("<i class='required'>*</i>").prependTo($("#fixstressTimeLabel"));
                    $("#fixtargetTimeLabel").empty();
                    $("#fixtargetTimeLabel").text("确定发展对象时间");
                    //$("<i class='required'>*</i>").prependTo($("#fixtargetTimeLabel"));

                } else if (activistTypeValue == '3') {
                    $("#fixstressTimeLabel").empty();
                    $("#fixstressTimeLabel").text("确定重点培养时间");
                    $("#fixtargetTimeLabel").empty();
                    $("#fixtargetTimeLabel").text("确定发展对象时间");
                    $("<i class='required'>*</i>").prependTo($("#fixtargetTimeLabel"));
                } else {
                    $("#fixstressTimeLabel").empty();
                    $("#fixstressTimeLabel").text("确定重点培养时间");
                    //$("<i class='required'>*</i>").prependTo($("#fixstressTimeLabel"));
                    $("#fixtargetTimeLabel").empty();
                    $("#fixtargetTimeLabel").text("确定发展对象时间");
                    //$("<i class='required'>*</i>").prependTo($("#fixtargetTimeLabel"));
                }


                //$("#regularTypeTd").empty();
                //$("#regularTypeTd").css("position" ,"relative");
                //$("<select id='regularType' name='regularType' class='form-control input-sm error' title='' data-options='' style='' aria-required='true' aria-describedby='regularType-error'><option value=''>请选择</option><option value='0'>按期转正</option><option value='1'>延长预备期转正</option><option value='2'>预备期满尚未讨论</option><option value='3'>延长预备期</option><option value='4'>预备期满杯录取为预备党员资格</option></select><div class='errDom'><div class='avic-errtip'></div><div class='errtipmsg hov'><i></i><div id='regularType-error' class='error'>该值不允许为空！请输入或选择。</div></div></div>").prependTo($("#regularTypeTd"));


            });
            $("#activistType").attr("disabled", 'disabled');

            parent.partyActivist.formValidate($('#form'));
            //保存按钮绑定事件
            $('#partyActivist_saveForm').bind('click', function () {
                saveForm();
            });

            //返回按钮绑定事件
            $('#partyActivist_closeForm').bind('click', function () {
                closeForm();
            });

            //添加按钮绑定事件
            $('#activistAchievementEdit_insert').bind('click',
                function () {
                    activistAchievementEdit.insert();
                });
            //删除按钮绑定事件
            $('#activistAchievementEdit_del').bind('click', function () {
                activistAchievementEdit.del();
            });

            //添加按钮绑定事件
            $('#activistMeritsEdit_insert').bind('click', function () {
                activistMeritsEdit.insert();
            });
            //删除按钮绑定事件
            $('#activistMeritsEdit_del').bind('click', function () {
                activistMeritsEdit.del();
            });

            $('#userIdAlias').on('focus', function (e) {
                new H5CommonSelect({
                    type: 'userSelect',
                    idFiled: 'userId',
                    textFiled: 'userIdAlias',
                    callBack: selectUserCallBack,
                    selectModel: 'single',
                    deptidFiled: 'deptId',
                    deptNameFiled: 'deptIdAlias'
                });
                this.blur();
                nullInput(e);
            });
            $('#deptIdAlias').on('focus', function (e) {
                new H5CommonSelect({
                    type: 'deptSelect',
                    idFiled: 'deptId',
                    textFiled: 'deptIdAlias'
                });
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
                        //debugger;
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
                        /*var curNodeId = selectedNodes[0].id;
                        if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
                            layer.alert('所选择父节点不合法，请重新选择！', {
                                icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                            });
                            return;
                        }
                        if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
                            if (selectedNewNode.id == curNodeId) {
                                layer.alert('所选择父节点不能是本节点！', {
                                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                                });
                            } else {
                                layer.alert('所选择父节点不能是本节点的子节点！', {
                                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                                });
                            }
                            return;
                        }*/
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
            $('#attribute08Alias').on('focus', function (e) {


                var selectIndex = layer.open({
                    type: 2,
                    area: ['50%', '50%'],
                    title: '选择父节点',
                    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
                    maxmin: false, //开启最大化最小化按钮
                    content: 'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
                    btn: ['确定', '取消'],
                    yes: function (index, layero) {
                        //debugger;
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
                        /*var curNodeId = selectedNodes[0].id;
                        if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
                            layer.alert('所选择父节点不合法，请重新选择！', {
                                icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                            });
                            return;
                        }
                        if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
                            if (selectedNewNode.id == curNodeId) {
                                layer.alert('所选择父节点不能是本节点！', {
                                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                                });
                            } else {
                                layer.alert('所选择父节点不能是本节点的子节点！', {
                                    icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
                                });
                            }
                            return;
                        }*/
                        $("#attribute08").val(selectedNewNode.id);
                        $("#attribute08Alias").val(selectedNewNode.text);
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
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if (e.target && e.target.id && e.target.id == 'activistMeritsA') {
            $('#activistMeritsEditJqGrid').setGridWidth($(window).width());
        }

    });

    /**
     * 判断从今天开始计算是否超过指定时间
     * */
    function equalsMooth(val, moonth) {
        var currentDate = new Date();
        var targetDateParts = val.split("-");
        var targetYear = parseInt(targetDateParts[0]);
        var targetMonth = parseInt(targetDateParts[1]);
        var targetDay = parseInt(targetDateParts[2]);
        var expiryDate = new Date(targetYear,targetMonth-1,targetDay);
        expiryDate.setMonth(expiryDate.getMonth()+moonth);
        if(expiryDate<=currentDate){
            return true;
        }else {
            return false;
        }
    }
    $("#fixactivistTime").on('change',equalsFrom);
    $("#fixstressTime").on('change',equalsFrom);
    $("#activistType").on('change',equalsFrom);
    $("#activistType").on('change',equalsFrom);

    /*
    * 积极分子添加逻辑*/
    function equalsFrom(val) {
        
        try {
        
        var value = $(val).attr("id");
        switch (value) {
            case "reqpartyTime":
                var bol = equalsMooth($(val).val(), 6)
                if (bol) {
                    $("#activistType").val("1");//一般积极分子
                    $("#fixactivistTime").removeAttr("disabled");
                    $("#fixactivistTime").attr("required")
                    layer.msg("申请入党时间已经超过6个月，可以填写确定积极分子时间");
                }else{
                    $("#activistType").val("0");//入党申请人
                    $("#fixactivistTime").attr("disabled","disabled");
                    $("#fixactivistTime").removeAttr("required")
                    layer.msg("申请入党时间需要超过6个月，才能填写确定积极分子时间");
                }
                //$("#reqpartyTime").datetimepicker({'setDate':null});
               $("#fixstressTime").text("");
                break;
            case "fixactivistTime" :
                var bol = equalsMooth($(val).val(), 6)
                if (bol) {
                    $("#fixstressTime").removeAttr("disabled");
                    $("#fixstressTime").attr("required");
                    layer.msg("确定积极分子时间已经超过6个月，可以填写确定重点培养时间");
                }else{
                    $("#fixstressTime").attr("disabled","disabled");
                    $("#fixstressTime").removeAttr("required");
                    layer.msg("确定积极分子时间需要超过6个月，才能填写确定重点培养时间");
                }
                break;
            case "fixstressTime":
                var bol = equalsMooth($(val).val(), 18)
                $("#activistType").val("2");//重点培养对象
                if(bol){
                    $("#fixtargetTime").removeAttr("disabled");
                    $("#fixtargetTime").attr("required");
                    layer.msg("确定重点培养时间已经超过18个月，可以填写确定发展对象时间");
                }else{
                    $("#fixtargetTime").attr("disabled","disabled");
                    $("#fixtargetTime").removeAttr("required");
                    layer.msg("确定重点培养时间需要超过18个月,才能填写确定发展对象时间");
                }
                break;
            case "fixtargetTime":
                $("#activistType").val("3");//发展对象
        }

        } catch (e) {
            
        }

    }
    //积极分子添加逻辑
    function isData(){
       var part = $("#reqpartyTime").val();
       var fixa = $("#fixactivistTime").val();
       var fixs = $("#fixstressTime").val();
       var fixt = $("#fixtargetTime").val();
       var bol = false;
       if(part!=""&&fixa!=""){

            bol = checkMonthDifference(part,fixa, 6)
           if(!bol){
               layer.msg("申请入党时间与确定积极分子时间需要超过6个月");
               return false;
           }
       }
       if(fixa!=""&&fixs!=""){
           bol = checkMonthDifference(fixa,fixs, 12)
           if(!bol){
               layer.msg("确定积极分子时间与确定重点培养时间需要超过12个月");
               return false;
           }
       }
        if(fixs!=""&&fixt!=""){
            bol = checkMonthDifference(fixs, fixt,12)
            if(!bol){
                layer.msg("确定重点培养时间与确定发展对象时间需要超过18个月");
                return false;
            }
        }

        return  true;
    }
    //计算第一个参数跟第二个参数相差月份是否大于第三个参数
    function checkMonthDifference(data1,data2,speifiedMonths){
        //将字符串转为日期

        if (typeof(data1)=="string") {
            data1 = data1.replace(/\-/g, "\/");
        }
        if (typeof(data2)=="string") {
            data2 = data2.replace(/\-/g, "\/");
        }
        var d1 = new Date(data1);
        var d2 = new Date(data2);

        //计算两个日期相差的月份是否大于指定的月份
        var diffMonths = (d2.getFullYear()-d1.getFullYear())*12+d2.getMonth()-d1.getMonth();

        //判断相差的月份是否大于指定的月份
        return diffMonths >= speifiedMonths;
    }



</script>
</body>
</html>

