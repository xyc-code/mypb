<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- ControllerPath = "dyntaskchecklist/dynTaskChecklistController/operation/Detail/id" -->
    <title>详情</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
    <jsp:include
            page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
    <script src="static/js/platform/component/common/exteasyui.js"
            type="text/javascript"></script>
    <link rel="stylesheet" type="text/css"
          href="static/h5/singleLayOut/themes/easyui-bootstrap.css?v=1">
    <link type="text/css" rel="stylesheet"
          href="static/h5/bootstrap/3.3.4/css_default/bootstrap.css">
    <link rel="stylesheet" id="themeskin" type="text/css"
          href="static/h5/skin/default.css">
</head>
<form id='form'>
    <div class="mce-content-body">
        <div style="text-align: center; font-size: 24px; margin: 15px;width: 650px;">
            工会经费使用审批
        </div>
        <table style="border: 1px solid;width: 650px" id="partyActivityMoney" border="1"
               class="form_commonTable1">
            <tbody>
            <tr style="height: 30px;">
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 6%;"><label
                        for="REQUEST_DATE" id="iVljgyvRGCBYXMryvRGclM7KYAR93vdZ">申请日期：</label></td>
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 19%;">
                    <div class="">
									<textarea id="REQUEST_DATE" name="REQUEST_DATE" style=""
                                              class="form-control" readonly="" rows="1" title="申请日期"
                                              data-precision="">${dto.REQUEST_DATE}</textarea>
                    </div>
                </td>
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 25%;"><label
                        for="AUTO_CODE" id="Mh7PfCaNXcCGcmApV5umn52LH0LCuiSi">表单编号：</label></td>
                <td style="border: 1px solid; height: 30px; width: 25%;">
                    <div class="">
									<textarea id="AUTO_CODE" name="AUTO_CODE" style=""
                                              class="form-control" readonly="" rows="1" title="自动编码"
                                              data-precision="">${dto.AUTO_CODE}</textarea>
                    </div>
                </td>
            </tr>
            <tr style="height: 30px;">
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 6%;"><label
                        for="USER_NAME" id="JYVuJt4HPGEHezEnXj1DdKPNmcR7WdrN">经办人 ：</label></td>
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 19%;">
                    <div class="">
									<textarea id="USER_NAME" name="USER_NAME" style=""
                                              class="form-control" readonly="" rows="1" title="申请人"
                                              data-precision="">${dto.USER_NAME}</textarea>
                    </div>
                </td>
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 25%;"><label
                        for="DEPT_NAME" id="z8PMk8L1s5NlKdYzwoYgkelugsixoyGN">申请单位：</label></td>
                <td style="border: 1px solid; height: 30px; width: 25%;">
                    <div class="">
									<textarea id="DEPT_NAME" name="DEPT_NAME" style=""
                                              class="form-control" readonly="" rows="1" title="申请单位"
                                              data-precision="">${dto.DEPT_NAME}</textarea>
                    </div>
                </td>
            </tr>
            <tr style="height: 30px;">
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 6%;"><label
                        for="HANDLER" id="qDbBmBgdowQri1JPVj6qe7I4nMwP481H">申请人：</label></td>
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 19%;">
                    <div class="">
									<textarea id="HANDLER" name="HANDLER" style=""
                                              class="form-control" readonly="" rows="1" title="申请人"
                                              data-precision="">${dto.HANDLER}</textarea>
                    </div>
                </td>
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 25%;"><label
                        for="PARTY_NAME" id="fUnqNzVxwxnDKCpLCMdcNXDNCuB9cYJ1">工会：</label></td>
                <td style="border: 1px solid; height: 30px; width: 25%;">
                    <div class="">
									<textarea id="PARTY_NAME" name="PARTY_NAME" style=""
                                              class="form-control" readonly="" rows="1" title="党支部"
                                              data-precision="">${dto.GUILD_NAME}</textarea>
                    </div>
                </td>
            </tr>
            <tr style="height: 30px;">
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 15%;"><label
                        for="PARTY_MEMBER_NUM" id="pWPk1oYVrKyFq6B0UhqvHIJTkx23Q9KJ">工会总人数：</label></td>
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 6%;">
                    <div class="">
									<textarea id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM"
                                              style="" class="form-control" readonly="" rows="1"
                                              title="党员总人数" data-precision="0">${dto.GUILD_MEMBER_NUM}</textarea>
                    </div>
                </td>
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 25%;"><label
                        for="TOTAL_PRICE">总计金额：</label></td>
                <td style="border: 1px solid; height: 30px; width:25%;">
                    <div class="">
									<textarea id="TOTAL_PRICE" name="TOTAL_PRICE" style=""
                                              class="form-control" readonly="" rows="1" title="总计金额"
                                              data-precision="2">${dto.TOTAL_PRICE}</textarea>
                    </div>
                </td>
            </tr>
            <tr style="height: 30px;">
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 15%;"><label
                        for="PARTY_MEMBER_NUM" id="pWPk1oYVrKyFq6B0UhqvHIJTkx23Q9KK">参加人数：</label></td>
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 6%;">
                    <div class="">
									<textarea id="JOIN_NUMBER" name="PARTY_MEMBER_NUM"
                                              style="" class="form-control" readonly="" rows="1"
                                              title="参加人数" data-precision="0">${dto.JOIN_NUMBER}</textarea>
                    </div>
                </td>
            </tr>
            <tr style="height: 30px;">
                <td
                        style="text-align: right; border: 1px solid; height: 30px; width: 15%;"><label
                        for="">类别：</label></td>
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 94%;"
                        colspan="3">
                    <div class="">
									<textarea id="selType" name="SEL_TYPE" style=""
                                              class="form-control" readonly="" rows="1" title="类型选择"
                                              data-precision="">${dto.SEL_TYPE}</textarea>
                    </div>
                </td>
            </tr>
            <tr style="height: 30px;" class="wthd">
                <td
                        style="text-align: left; border: 1px solid; height: 30px; width: 15%;"><label
                        for="">文体活动支出：</label></td>
                <td
                        style="padding: 0; text-align: left; border: 1px solid; height: 30px; width: 94%;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="xcWT6jiCrcPz4uJoLITxslfpOYUyeJfP" height="61"
                           class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 25%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_XXZL1" id="DYN_PA_XXZL1_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_XXZL1"
                                                     dir="ltr" style="width: 500px;">
                                                    <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                        <div class="ui-jqgrid-hbox">
                                                            <table
                                                                    class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                    style="width: 500px;" role="presentation"
                                                                    aria-labelledby="gbox_DYN_PA_XXZL1">
                                                                <thead>
                                                                <tr class="ui-jqgrid-labels" role="row">
                                                                    <th id="DYN_PA_XXZL1_XXZL1_NAME"
                                                                        role="columnheader"
                                                                        class="ui-th-column ui-th-ltr"
                                                                        style="width: 153px;"><span
                                                                            class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                            style="cursor: col-resize;">&nbsp;</span>
                                                                        <div class="ui-th-div ui-jqgrid-sortable"
                                                                             id="jqgh_DYN_PA_XXZL1_XXZL1_NAME">
                                                                            名称<span class="s-ico" style="display: none"><span
                                                                                sort="asc"
                                                                                class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                sort="desc"
                                                                                class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                        </div>
                                                                    </th>
                                                                    <th id="DYN_PA_XXZL1_XXZL1_NUM"
                                                                        role="columnheader"
                                                                        class="ui-th-column ui-th-ltr "
                                                                        style="width: 153px;"><span
                                                                            class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                            style="cursor: col-resize;">&nbsp;</span>
                                                                        <div class="ui-th-div ui-jqgrid-sortable"
                                                                             id="jqgh_DYN_PA_XXZL1_XXZL1_NUM">
                                                                            数量<span class="s-ico" style="display: none"><span
                                                                                sort="asc"
                                                                                class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                sort="desc"
                                                                                class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                        </div>
                                                                    </th>
                                                                    <th id="DYN_PA_XXZL1_XXZL1_UNION_PRICE"
                                                                        role="columnheader"
                                                                        class="ui-th-column ui-th-ltr"
                                                                        style="width: 153px;"><span
                                                                            class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                            style="cursor: col-resize;">&nbsp;</span>
                                                                        <div class="ui-th-div ui-jqgrid-sortable"
                                                                             id="jqgh_DYN_PA_XXZL1_XXZL1_UNION_PRICE">
                                                                            单价<span class="s-ico" style="display: none"><span
                                                                                sort="asc"
                                                                                class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                sort="desc"
                                                                                class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                        </div>
                                                                    </th>
                                                                    <th id="DYN_PA_XXZL1_XXZL1_TOTAL_PRICE"
                                                                        role="columnheader"
                                                                        class="ui-th-column ui-th-ltr"
                                                                        style="width: 153px;"><span
                                                                            class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                            style="cursor: col-resize;">&nbsp;</span>
                                                                        <div class="ui-th-div ui-jqgrid-sortable"
                                                                             id="jqgh_DYN_PA_XXZL1_XXZL1_TOTAL_PRICE">
                                                                            金额<span class="s-ico" style="display: none"><span
                                                                                sort="asc"
                                                                                class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                sort="desc"
                                                                                class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-bdiv"
                                                         style="height: auto; width: 610px;">
                                                        <div style="position: relative;">
                                                            <div></div>
                                                            <table id="DYN_PA_XXZL1"
                                                                   class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                   datapermission="eform_data_DYN_PA_XXZL1"
                                                                   tabindex="0" role="presentation"
                                                                   aria-multiselectable="false"
                                                                   aria-labelledby="gbox_DYN_PA_XXZL1"
                                                                   style="width: 500px;">
                                                                <tbody>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ui-jqgrid-resize-mark"
                                                     id="rs_mDYN_PA_XXZL1">&nbsp;
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 12%;"><label for="XXZL_TOTAL_PRICE">文体活动支出总金额：</label></td>
                            <td style="width: 12%;">
                                <div class="">
													<textarea id="XXZL_TOTAL_PRICE" name="XXZL_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="学习资料总计金额"
                                                              data-precision="2">${dto.XXZL_TOTAL_PRICE}</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 57px;" class="zgww">
                <td
                        style="width: 15%; text-align: left; border: 1px solid; height: 87px;"><label
                        for="">职工慰问支出：</label></td>
                <td
                        style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 57px;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="b01jMVwEDADOC4DMuLzj9D9aeAqwQjwH" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_SB_1" id="DYN_PA_SB_control_1"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_SB_1" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_SB_1"></div>
                                                    <div class="loading row" id="load_DYN_PA_SB_1"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_SB_1"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_SB">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_SB_ID_1" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_ID_1">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_SB_NAME_1" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_SB_NAME_1">
                                                                                名称<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_SB_USE_1" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_SB_USE_1">
                                                                                数量<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_SB_NUM_1" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_SB_NUM_1">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_SB_UNION_PRICE_1"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_SB_UNION_PRICE_1">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <%--<th id="DYN_PA_SB_SB_TOTAL_PRICE_1"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 124px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                          <div class="ui-th-div ui-jqgrid-sortable"
                                                                               id="jqgh_DYN_PA_SB_SB_TOTAL_PRICE_1">
                                                                            地点<span class="s-ico" style="display: none"><span
                                                                                  sort="asc"
                                                                                  class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                  sort="desc"
                                                                                  class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                          </div></th>--%>
                                                                        <th id="DYN_PA_SB_FK_SUB_COL_ID_1"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_FK_SUB_COL_ID_1">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_SB_1"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_SB"
                                                                       tabindex="0"
                                                                       role="presentation" aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_SB"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_SB_1">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 16%;"><label for="SB_TOTAL_PRICE">职工慰问总金额：</label></td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="SB_TOTAL_PRICE_1" name="SB_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="设备费用总金额"
                                                              data-precision="2">${dto.CD_TOTAL_PRICE }</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 84px;" class="lmgzs">
                <td
                        style="text-align: left; border: 1px solid; height: 84px; width: 15%;"><label
                        for="">劳模工作室建设支出：</label></td>
                <td
                        style="padding: 0; text-align: left; border: 1px solid; height: 84px; width: 94%;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="O3d8Fdz7JYcAJG5sqsCFXFi18dYFnyzM" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_GB" id="DYN_PA_GB_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_GB" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_GB"></div>
                                                    <div class="loading row" id="load_DYN_PA_GB"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_GB"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_GB">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_GB_ID" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_ID">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_NAME" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr"
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_NAME">
                                                                                名称<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_NUMM" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_NUMM">
                                                                                数量<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_UNION_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr"
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_UNION_PRICE">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_TOTAL_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr"
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_TOTAL_PRICE">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_FK_SUB_COL_ID"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_FK_SUB_COL_ID">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_GB"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_GB"
                                                                       tabindex="0"
                                                                       role="presentation" aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_GB"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_GB">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 17%;"><label for="GB_TOTAL_PRICE">劳模工作室建设支出总金额：</label></td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="GB_TOTAL_PRICE" name="GB_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="工本费总计金额"
                                                              data-precision="2">${dto.GB_TOTAL_PRICE}</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 84px;" class="ldjs">
                <td
                        style="text-align: left; border: 1px solid; height: 84px; width: 15%;"><label
                        for="">劳动竞赛支出：</label></td>
                <td
                        style="padding: 0; text-align: left; border: 1px solid; height: 84px; width: 94%;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="O3d8Fdz7JYcAJG5sqsCFXFi18dYFnyzK" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_GB_A" id="DYN_PA_GB_A_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_GB_A" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_GB_A"></div>
                                                    <div class="loading row" id="load_DYN_PA_GB_A"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_GB_A"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_GB">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_GB_ID_A" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_ID_A">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_NAME_A" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr"
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_NAME_A">
                                                                                名称<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_NUMM_A" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_NUMM_A">
                                                                                数量<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_UNION_PRICE_A"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr"
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_UNION_PRICE_A">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_GB_TOTAL_PRICE_A"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr"
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_GB_TOTAL_PRICE_A">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_GB_FK_SUB_COL_ID_A"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_GB_FK_SUB_COL_ID_A">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_GB_A"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_GB"
                                                                       tabindex="0"
                                                                       role="presentation" aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_GB"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_GB_A">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 17%;"><label for="GB_TOTAL_PRICE">劳动竞赛支出总金额：</label></td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="GB_TOTAL_PRICE_A" name="GB_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="工本费总计金额"
                                                              data-precision="2">${dto.SB_TOTAL_PRICE}</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 58px;" class="cq">
                <td
                        style="width: 15%; text-align: left; border: 1px solid; height: 86px;"><label
                        for="">春、秋游活动支出：</label></td>
                <td
                        style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 58px;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="qwDUhdnJCbU1gsSZulAzSGr0WUne2MWq" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_DHDQ" id="DYN_PA_DHDQ_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_DHDQ" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_DHDQ"></div>
                                                    <div class="loading row" id="load_DYN_PA_DHDQ"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_DHDQ"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_DHDQ">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_DHDQ_ID" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_ID">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_DHDQ_NAME"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_DHDQ_NAME">
                                                                                名称<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_DHDQ_NUM"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_DHDQ_NUM">
                                                                                数量<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_DHDQ_UNION_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_DHDQ_UNION_PRICE">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_DHDQ_TOTAL_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_DHDQ_TOTAL_PRICE">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_FK_SUB_COL_ID"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_FK_SUB_COL_ID">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_DHDQ"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_DHDQ"
                                                                       tabindex="0" role="presentation"
                                                                       aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_DHDQ"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark"
                                                         id="rs_mDYN_PA_DHDQ">&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 16%;"><label for="DHDQ_TOTAL_PRICE">春,秋活动支出总金额：</label></td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="DHDQ_TOTAL_PRICE" name="DHDQ_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="党徽党旗总计金额"
                                                              data-precision="2">${dto.DHDQ_TOTAL_PRICE}</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 58px;" class="gyhd">
                <td
                        style="width: 15%; text-align: left; border: 1px solid; height: 86px;"><label
                        for="">观影活动支出:</label></td>
                <td
                        style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 58px;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="qwDUhdnJCbU1gsSZulAzSGr0WUne2MWK" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_DHDQ_A" id="DYN_PA_DHDQ_A_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_DHDQ_A" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_DHDQ_A"></div>
                                                    <div class="loading row" id="load_DYN_PA_DHDQ_A"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_DHDQ_A"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_DHDQ_A">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_DHDQ_A_ID" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_A_ID">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_A_MPJJ_PLACE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_A_MPJJ_PLACE">
                                                                                地点<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_A_SL"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_A_SL">
                                                                                数量<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_A_DJ"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_A_DJ">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_A_MPJJ_TOTAL_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_A_MPJJ_TOTAL_PRICE">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_A_FK_SUB_COL_ID"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_A_FK_SUB_COL_ID">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_DHDQ_A"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_DHDQ"
                                                                       tabindex="0" role="presentation"
                                                                       aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_DHDQ_A"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark"
                                                         id="rs_mDYN_PA_DHDQ_A">&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 16%;"><label for="DHDQ_TOTAL_PRICE">观影活动支出总金额：</label></td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="DHDQ_TOTAL_PRICE_A" name="DHDQ_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="党徽党旗总计金额"
                                                              data-precision="2">${dto.MPJJ_TOTAL_PRICE}</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 57px;" class="zgxj">
                <td
                        style="width: 15%; text-align: left; border: 1px solid; height: 87px;"><label
                        for="">职工小家建设支出：</label></td>
                <td
                        style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 57px;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="b01jMVwEDADOC4DMuLzj9D9aeAqwQjwA" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_SB_B" id="DYN_PA_SB_B_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_SB_B" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_SB_B"></div>
                                                    <div class="loading row" id="load_DYN_PA_SB_B"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_SB_B"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_SB_B">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_SB_B_ID" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_ID">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_B_KNDY_NAME"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_KNDY_NAME">
                                                                                名称<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_B_YT" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_YT">
                                                                                用途<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_B_SL" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_SL">
                                                                                数量<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_B_DJ"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 122px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_DJ">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_B_KNDY_TOTAL_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 124px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_KNDY_TOTAL_PRICE">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_SB_B_FK_SUB_COL_ID"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_SB_B_FK_SUB_COL_ID">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_SB_B"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_SB_B"
                                                                       tabindex="0"
                                                                       role="presentation" aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_SB"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_SB_B">&nbsp;</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 16%;"><%--@declare id="sb_total_price"--%><label for="SB_TOTAL_PRICE">职工小家建设支出总金额：</label>
                            </td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="SB_TOTAL_PRICE_B" name="SB_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="设备费用总金额"
                                                              data-precision="2">${dto.KNDY_TOTAL_PRICE }</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 58px;" class="qtzc">
                <td
                        style="width: 15%; text-align: left; border: 1px solid; height: 86px;"><label
                        for="">其他支出：</label></td>
                <td
                        style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 58px;"
                        colspan="3">
                    <table style="margin: 0; width: 100%;"
                           id="qwDUhdnJCbU1gsSZulAzSGr0WUne2MWs" class="form_commonTable1">
                        <tbody>
                        <tr>
                            <td style="width: 33%;" colspan="2">
                                <table title=""
                                       style="table-layout: fixed; margin: 0; width: 100%;">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div title="DYN_PA_DHDQ_S" id="DYN_PA_DHDQ_S_control"
                                                 class="eform_subtable_bpm_auth">
                                                <div class="ui-jqgrid " id="gbox_DYN_PA_DHDQ_3" dir="ltr"
                                                     style="width: 500px;">
                                                    <div class="jqgrid-overlay ui-overlay"
                                                         id="lui_DYN_PA_DHDQ_S"></div>
                                                    <div class="loading row" id="load_DYN_PA_DHDQ_3"
                                                         style="display: none;">读取中...
                                                    </div>
                                                    <div class="ui-jqgrid-view table-responsive"
                                                         role="grid" id="gview_DYN_PA_DHDQ_S"
                                                         style="width: 500px;">
                                                        <div class="ui-jqgrid-titlebar ui-jqgrid-caption"
                                                             style="display: none;">
                                                            <a role="link"
                                                               class="ui-jqgrid-titlebar-close HeaderButton "
                                                               title="切换 展开 折叠 表格" style="right: 0px;"><span
                                                                    class="ui-jqgrid-headlink glyphicon glyphicon-circle-arrow-up"></span></a><span
                                                                class="ui-jqgrid-title"></span>
                                                        </div>
                                                        <div class="ui-jqgrid-hdiv" style="width: 610px;">
                                                            <div class="ui-jqgrid-hbox">
                                                                <table
                                                                        class="ui-jqgrid-htable ui-common-table table table-bordered"
                                                                        style="width: 500px;" role="presentation"
                                                                        aria-labelledby="gbox_DYN_PA_DHDQ_S">
                                                                    <thead>
                                                                    <tr class="ui-jqgrid-labels" role="row">
                                                                        <th id="DYN_PA_DHDQ_ID_S" role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 75px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_S_ID">
                                                                                ID<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_S_BZ_NAME"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_S_BZ_NAME">
                                                                                名称<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_S_BZ_NUM"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_S_BZ_NUM">
                                                                                人数<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_DHDQ_S_BZ_UNION_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_S_BZ_UNION_PRICE">
                                                                                单价<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_S_BZ_TOTAL_PRICE"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 153px;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_S_BZ_TOTAL_PRICE">
                                                                                金额<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                        <th id="DYN_PA_DHDQ_S_FK_SUB_COL_ID"
                                                                            role="columnheader"
                                                                            class="ui-th-column ui-th-ltr "
                                                                            style="width: 100px; display: none;"><span
                                                                                class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
                                                                                style="cursor: col-resize;">&nbsp;</span>
                                                                            <div class="ui-th-div ui-jqgrid-sortable"
                                                                                 id="jqgh_DYN_PA_DHDQ_S_FK_SUB_COL_ID">
                                                                                外键<span class="s-ico"
                                                                                        style="display: none"><span
                                                                                    sort="asc"
                                                                                    class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
                                                                                    sort="desc"
                                                                                    class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="ui-jqgrid-bdiv"
                                                             style="height: auto; width: 610px;">
                                                            <div style="position: relative;">
                                                                <div></div>
                                                                <table id="DYN_PA_DHDQ_S"
                                                                       class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
                                                                       datapermission="eform_data_DYN_PA_DHDQ_S"
                                                                       tabindex="0" role="presentation"
                                                                       aria-multiselectable="false"
                                                                       aria-labelledby="gbox_DYN_PA_DHDQ"
                                                                       style="width: 500px;">
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-jqgrid-resize-mark"
                                                         id="rs_mDYN_PA_DHDQ_S">&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 16%;"><label for="DHDQ_TOTAL_PRICE">其他支出总金额：</label></td>
                            <td style="width: 17%;">
                                <div class="">
													<textarea id="DHDQ_TOTAL_PRICE_S" name="DHDQ_TOTAL_PRICE"
                                                              style="" class="form-control" readonly="" rows="1"
                                                              title="其他支出总金额"
                                                              data-precision="2">${dto.BZ_TOTAL_PRICE}</textarea>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>

            </tr>
            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><strong>拟稿人意见：</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="tAbmG7HM5ivyFo8i6Yq0m4aAiCJ9YMgK" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>


            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><strong>基层工会主席审批：</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="tAbmG7HM5ivyFo8i6Yq0m4aAiCJ9YMgu" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>
            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><strong>工会会计员审批:</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="sDIYEWi4cHFkuAnCTsCoN2x3vLBEbaLT" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>
            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;">
                    <strong>工会办公室/组织民管室主任审核:</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="yXE1ibSD48CHpxuQTYtNcCCHZJq3MIWh" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>
            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><strong>工会副主席审批:</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="YHTauAyws0nxa5dOCex5Rbxi8C2I15gb" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>
            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><strong>工会主席审批:</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="lvDLHzyRs7lVVfYC3Z9aYJ4lykacJA81" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>
            <tr style="height: 82px;">
                <td style="width:9%; text-align: left; border: 1px solid; height: 82px;"><strong>经办人阅知审批:</strong></td>
                <td style="width:55%; text-align: left; border: 1px solid; height: 82px;" colspan="3">
                    <div id="GQbdTfpJFtOJd0GX8pKDT8ovk7q1DxN6" class="bpm_self_class " title="">
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</form>


<script type="text/javascript">
    var id = "${id}";
    var entryid = '${entryid}';

    function listForChilrd(name, html, item) {
        switch (name) {
            case "DYN_PA_XXZL1"://文体活动
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.XXZL1_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.XXZL1_NUM + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.XXZL1_UNION_PRICE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.XXZL1_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_GB"://劳模工作室
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.GB_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.GB_NUMM + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.GB_UNION_PRICE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.GB_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_SB_1"://直工慰问
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_SL + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_DJ + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_SB_B"://职工小家建设支出
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.KNDY_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.YT + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.SL + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.DJ + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.KNDY_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_GB_A"://劳动竞赛
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.SB_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.SB_NUM + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.SB_UNION_PRICE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.SB_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_CD":
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_PLACE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_ACTIVITY_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.CD_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_DHDQ"://春、秋游活动支出
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.DHDQ_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.DHDQ_NUM + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.DHDQ_UNION_PRICE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.DHDQ_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_DHDQ_S"://其他支出
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_NUM + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_UNION_PRICE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_DHDQ_A"://观影活动支出
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.MPJJ_PLACE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.SL + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.DJ + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.MPJJ_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_MPJJ":
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.MPJJ_PLACE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.MPJJ_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_KNDY":
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.KNDY_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.KNDY_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PA_BZ":
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_NUM + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_UNION_PRICE + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.BZ_TOTAL_PRICE + '</td>'
                return html;
            case "DYN_PM_QT":
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.QT_NAME + '</td>'
                html += '<td role="gridcell" style="height: 0px; width: 153px;">'
                    + item.QT_TOTAL_PRICE + '</td>'
                return html;
        }
    }

    function listFor(arr, name) {
        var domName = $("#" + name + " tbody")
        for (var i = 0; i < arr.length; i++) {
            var html = '<tr class="jqgfirstrow" role="row">';
            html = listForChilrd(name, html, arr[i]);
            html += "</tr>"
            domName.append(html);
        }
    }

    function yjFor(arr) {
        var html = "";
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var str = "";
            var end = new Date(item.END_).Format("yyyy-MM-dd hh:mm:ss")
            if (item.MESSAGE_ == null) {
                continue;
            }
            str = item.MESSAGE_ + "  " + end + "  " + item.OP_UNAME_;
            html += str;
            html += "<br>";
        }
        return html;
    }

    $.ajax({
        url: "avicit/pb/print/TradeUnionMoneyPrint/list",
        dataType: "JSON",
        type: "GET",
        async: false,
        data: {
            id: id,
            entryid: entryid
        },
        success: function (e) {
            if (e.DYN_ZGWW2.length === 0) {
                $('#form tr.zgww').hide();
            } else {
                listFor(e.DYN_ZGWW2, "DYN_PA_SB_1");
            }

            if (e.DYN_GUILD_XXZL.length === 0) {
                $('#form tr.wthd').hide();
            } else {
                listFor(e.DYN_GUILD_XXZL, "DYN_PA_XXZL1");
            }


            if (e.DYN_GUILD_GB.length === 0) {
                $('#form tr.lmgzs').hide();
            } else {
                listFor(e.DYN_GUILD_GB, "DYN_PA_GB");
            }

            if (e.DYN_GUILD_KNDY.length === 0) {
                $('#form tr.zgxj').hide();
            } else {
                listFor(e.DYN_GUILD_KNDY, "DYN_PA_SB_B");
            }

            if (e.DYN_GUILD_SB.length === 0) {
                $('#form tr.ldjs').hide();
            } else {
                listFor(e.DYN_GUILD_SB, "DYN_PA_GB_A");
            }

            if (e.DYN_GUILD_DHDQ.length === 0) {
                $('#form tr.cq').hide();
            } else {
                listFor(e.DYN_GUILD_DHDQ, "DYN_PA_DHDQ");
            }


            if (e.DYN_GUILD_BZ.length === 0) {
                $('#form tr.qtzc').hide();
            } else {
                listFor(e.DYN_GUILD_BZ, "DYN_PA_DHDQ_S");
            }

            if (e.DYN_GUILD_MPJJ.length === 0) {
                $('#form tr.gyhd').hide();
            } else {
                listFor(e.DYN_GUILD_MPJJ, "DYN_PA_DHDQ_A");
            }


            $("#tAbmG7HM5ivyFo8i6Yq0m4aAiCJ9YMgK").append(yjFor(e.task1));
            $("#tAbmG7HM5ivyFo8i6Yq0m4aAiCJ9YMgu").append(yjFor(e.task2));
            $("#sDIYEWi4cHFkuAnCTsCoN2x3vLBEbaLT").append(yjFor(e.task3));
            $("#yXE1ibSD48CHpxuQTYtNcCCHZJq3MIWh").append(yjFor(e.task4));
            $("#YHTauAyws0nxa5dOCex5Rbxi8C2I15gb").append(yjFor(e.task5));
            $("#lvDLHzyRs7lVVfYC3Z9aYJ4lykacJA81").append(yjFor(e.task7));
            $("#GQbdTfpJFtOJd0GX8pKDT8ovk7q1DxN6").append(yjFor(e.task6));
            setTimeout(function () {
                getPrint();
            }, 500)


        }
    })

    function getPrint() {
        window.print();
    }


</script>


<style>
    input, select, textarea {
        outline-color: invert !important;
        outline-style: none !important;
        outline-width: 0px !important;
        border: none !important;
        border-style: none !important;
        text-shadow: none !important;
        -webkit-appearance: none !important;
        -webkit-user-select: text !important;
        outline-color: transparent !important;
        box-shadow: none !important;
        background-color: transparent !important;
    }

    textarea {
        overflow: hidden !important;
        resize: none !important;
    }

    .mce-content-body {
        width: 210mm !important;
        margin: 0 auto;
    }
</style>
</html>