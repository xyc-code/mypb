<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
	href="http://localhost:8080/V6R343/static/h5/bootstrap/3.3.4/css_default/bootstrap.css">
<link rel="stylesheet" id="themeskin" type="text/css"
	href="static/h5/skin/default.css">
</head>
		<form id='form'>
			<div class="mce-content-body">
				<div style="text-align: center; font-size: 24px; margin: 15px;width: 650px;">
					党建活动经费使用审批</div>
				<table style="border: 1px solid; width: 650px;" id="partyActivityMoney" border="1"
					class="form_commonTable1">
					<tbody>
						<tr style="height: 30px;">
							<td
								style="text-align: right; border: 1px solid; height: 30px; width: 6%;"><label
								for="REQUEST_DATE" id="iVljgyvRGCBYXMryvRGclM7KYAR93vdZ">申请日期：</label></td>
							<td
								style="text-align: left; border: 1px solid; height: 30px; width: 15%;">
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
								for="USER_NAME" id="JYVuJt4HPGEHezEnXj1DdKPNmcR7WdrN">申请人：</label></td>
							<td
								style="text-align: left; border: 1px solid; height: 30px; width: 15%;">
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
								for="HANDLER" id="qDbBmBgdowQri1JPVj6qe7I4nMwP481H">经办人：</label></td>
							<td
								style="text-align: left; border: 1px solid; height: 30px; width:15%;">
								<div class="">
									<textarea id="HANDLER" name="HANDLER" style=""
										class="form-control" readonly="" rows="1" title="经办人"
										data-precision="">${dto.HANDLER}</textarea>
								</div>
							</td>
							<td
								style="text-align: right; border: 1px solid; height: 30px; width: 25%;"><label
								for="PARTY_NAME" id="fUnqNzVxwxnDKCpLCMdcNXDNCuB9cYJ1">党支部：</label></td>
							<td style="border: 1px solid; height: 30px; width: 25%;">
								<div class="">
									<textarea id="PARTY_NAME" name="PARTY_NAME" style=""
										class="form-control" readonly="" rows="1" title="党支部"
										data-precision="">${dto.PARTY_NAME}</textarea>
								</div>
							</td>
						</tr>
						<tr style="height: 30px;">
							<td
								style="text-align: right; border: 1px solid; height: 30px; width: 6%;"><label
								for="PARTY_MEMBER_NUM" id="pWPk1oYVrKyFq6B0UhqvHIJTkx23Q9KJ">党员总人数：</label></td>
							<td
								style="text-align: left; border: 1px solid; height: 30px; width: 15%;">
								<div class="">
									<textarea id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM"
										style="" class="form-control" readonly="" rows="1"
										title="党员总人数" data-precision="0">${dto.PARTY_MEMBER_NUM}</textarea>
								</div>
							</td>
							<td
								style="text-align: right; border: 1px solid; height: 30px; width: 25%;"><label
								for="TOTAL_PRICE">总计金额：</label></td>
							<td style="border: 1px solid; height: 30px; width: 25%;">
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
						<tr style="height: 30px;">
							<td
								style="text-align: left; border: 1px solid; height: 30px; width: 15%;"><label
								for="">学习资料：</label></td>
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
																								</div></th>
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
																								</div></th>
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
																								</div></th>
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
																								</div></th>
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
																		id="rs_mDYN_PA_XXZL1">&nbsp;</div>
																</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 12%;"><label for="XXZL_TOTAL_PRICE">学习资料总计金额：</label></td>
											<td style="width: 12%;">
												<div class="">
													<textarea id="XXZL_TOTAL_PRICE" name="XXZL_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="学习资料总计金额" data-precision="2">${dto.XXZL_TOTAL_PRICE}</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 30px;">
							<td
								style="text-align: left; border: 1px solid; height: 30px; width: 15%;"><label
								for="">场地费：</label></td>
							<td
								style="padding: 0; text-align: left; border: 1px solid; height: 30px; width: 94%;"
								colspan="3">
								<table style="margin: 0; width: 100%;"
									id="CC2DP3WU0fZnmummvp36uss9R1cBJExT" height="93"
									class="form_commonTable1">
									<tbody>
										<tr>
											<td style="width: 100%;" colspan="2">
												<table title=""
													style="table-layout: fixed; margin: 0; width: 100%;">
													<tbody>
														<tr>
															<td>
																<div title="DYN_PA_CD" id="DYN_PA_CD_control"
																	class="eform_subtable_bpm_auth">
																	<div class="ui-jqgrid " id="gbox_DYN_PA_CD" dir="ltr"
																		style="width: 500px;">
																		<div class="jqgrid-overlay ui-overlay"
																			id="lui_DYN_PA_CD"></div>
																		<div class="loading row" id="load_DYN_PA_CD"
																			style="display: none;">读取中...</div>
																		<div class="ui-jqgrid-view table-responsive"
																			role="grid" id="gview_DYN_PA_CD"
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
																						aria-labelledby="gbox_DYN_PA_CD">
																						<thead>
																							<tr class="ui-jqgrid-labels" role="row">
																								<th id="DYN_PA_CD_ID" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 75px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_CD_ID">
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_CD_CD_PLACE" role="columnheader"
																									class="ui-th-column ui-th-ltr"
																									style="width: 204px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_CD_CD_PLACE">
																										地点<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_CD_CD_ACTIVITY_NAME"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr"
																									style="width: 204px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_CD_CD_ACTIVITY_NAME">
																										活动名称<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_CD_CD_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 204px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_CD_CD_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_CD_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_CD_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																							</tr>
																						</thead>
																					</table>
																				</div>
																			</div>
																			<div class="ui-jqgrid-bdiv"
																				style="height: auto; width: 610px;">
																				<div style="position: relative;">
																					<div></div>
																					<table id="DYN_PA_CD"
																						class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
																						datapermission="eform_data_DYN_PA_CD" tabindex="0"
																						role="presentation" aria-multiselectable="false"
																						aria-labelledby="gbox_DYN_PA_CD"
																						style="width: 500px;">
																						<tbody>
																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_CD">&nbsp;</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 50%;"><label for="CD_TOTAL_PRICE">场地费总计金额：</label></td>
											<td style="width: 50%;">
												<div class="">
													<textarea id="CD_TOTAL_PRICE" name="CD_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="场地费总计金额" data-precision="2">${dto.CD_TOTAL_PRICE}</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 84px;">
							<td
								style="text-align: left; border: 1px solid; height: 84px; width: 15%;"><label
								for="">工本费：</label></td>
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
																			style="display: none;">读取中...</div>
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
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_GB_GB_NAME" role="columnheader"
																									class="ui-th-column ui-th-ltr"
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_GB_GB_NAME">
																										资料名称<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_GB_GB_NUMM" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_GB_GB_NUMM">
																										数量<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_GB_GB_UNION_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr"
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_GB_GB_UNION_PRICE">
																										单价<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_GB_GB_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr"
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_GB_GB_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_GB_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_GB_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
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
																						datapermission="eform_data_DYN_PA_GB" tabindex="0"
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
											<td style="width: 17%;"><label for="GB_TOTAL_PRICE">工本费总计金额：</label></td>
											<td style="width: 17%;">
												<div class="">
													<textarea id="GB_TOTAL_PRICE" name="GB_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="工本费总计金额" data-precision="2">${dto.GB_TOTAL_PRICE}</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 57px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 87px;"><label
								for="">设备费用：</label></td>
							<td
								style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 57px;"
								colspan="3">
								<table style="margin: 0; width: 100%;"
									id="b01jMVwEDADOC4DMuLzj9D9aeAqwQjwK" class="form_commonTable1">
									<tbody>
										<tr>
											<td style="width: 33%;" colspan="2">
												<table title=""
													style="table-layout: fixed; margin: 0; width: 100%;">
													<tbody>
														<tr>
															<td>
																<div title="DYN_PA_SB" id="DYN_PA_SB_control"
																	class="eform_subtable_bpm_auth">
																	<div class="ui-jqgrid " id="gbox_DYN_PA_SB" dir="ltr"
																		style="width: 500px;">
																		<div class="jqgrid-overlay ui-overlay"
																			id="lui_DYN_PA_SB"></div>
																		<div class="loading row" id="load_DYN_PA_SB"
																			style="display: none;">读取中...</div>
																		<div class="ui-jqgrid-view table-responsive"
																			role="grid" id="gview_DYN_PA_SB"
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
																								<th id="DYN_PA_SB_ID" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 75px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_ID">
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_SB_SB_NAME" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 122px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_SB_NAME">
																										名称<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_SB_SB_USE" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 122px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_SB_USE">
																										用途<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_SB_SB_NUM" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 122px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_SB_NUM">
																										数量<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_SB_SB_UNION_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 122px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_SB_UNION_PRICE">
																										单价<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_SB_SB_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 124px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_SB_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_SB_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_SB_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																							</tr>
																						</thead>
																					</table>
																				</div>
																			</div>
																			<div class="ui-jqgrid-bdiv"
																				style="height: auto; width: 610px;">
																				<div style="position: relative;">
																					<div></div>
																					<table id="DYN_PA_SB"
																						class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
																						datapermission="eform_data_DYN_PA_SB" tabindex="0"
																						role="presentation" aria-multiselectable="false"
																						aria-labelledby="gbox_DYN_PA_SB"
																						style="width: 500px;">
																						<tbody>

																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_SB">&nbsp;</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 16%;"><label for="SB_TOTAL_PRICE">设备费用总金额：</label></td>
											<td style="width: 17%;">
												<div class="">
													<textarea id="SB_TOTAL_PRICE" name="SB_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="设备费用总金额" data-precision="2">${dto.SB_TOTAL_PRICE }</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 86px;"><label
								for="">党徽、党旗：</label></td>
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
																			style="display: none;">读取中...</div>
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
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_DHDQ_DHDQ_NAME"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_DHDQ_DHDQ_NAME">
																										名称<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_DHDQ_DHDQ_NUM"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_DHDQ_DHDQ_NUM">
																										数量<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_DHDQ_DHDQ_UNION_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_DHDQ_DHDQ_UNION_PRICE">
																										单价<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_DHDQ_DHDQ_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_DHDQ_DHDQ_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_DHDQ_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_DHDQ_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
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
																			id="rs_mDYN_PA_DHDQ">&nbsp;</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 16%;"><label for="DHDQ_TOTAL_PRICE">党徽党旗总计金额：</label></td>
											<td style="width: 17%;">
												<div class="">
													<textarea id="DHDQ_TOTAL_PRICE" name="DHDQ_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="党徽党旗总计金额" data-precision="2">${dto.DHDQ_TOTAL_PRICE}</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 57px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 87px;"><label
								for="">门票/讲解：</label></td>
							<td
								style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 57px;"
								colspan="3">
								<table style="margin: 0; width: 100%;"
									id="hNPqj2tnyobCuQrBA8JBTEXDquxr2MbQ" class="form_commonTable1">
									<tbody>
										<tr>
											<td style="width: 50%;" colspan="2">
												<table title=""
													style="table-layout: fixed; margin: 0; width: 100%;">
													<tbody>
														<tr>
															<td>
																<div title="DYN_PA_MPJJ" id="DYN_PA_MPJJ_control"
																	class="eform_subtable_bpm_auth">
																	<div class="ui-jqgrid " id="gbox_DYN_PA_MPJJ" dir="ltr"
																		style="width: 500px;">
																		<div class="jqgrid-overlay ui-overlay"
																			id="lui_DYN_PA_MPJJ"></div>
																		<div class="loading row" id="load_DYN_PA_MPJJ"
																			style="display: none;">读取中...</div>
																		<div class="ui-jqgrid-view table-responsive"
																			role="grid" id="gview_DYN_PA_MPJJ"
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
																						aria-labelledby="gbox_DYN_PA_MPJJ">
																						<thead>
																							<tr class="ui-jqgrid-labels" role="row">
																								<th id="DYN_PA_MPJJ_ID" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 75px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_MPJJ_ID">
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_MPJJ_MPJJ_PLACE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 306px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_MPJJ_MPJJ_PLACE">
																										地点<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_MPJJ_MPJJ_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 306px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_MPJJ_MPJJ_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_MPJJ_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_MPJJ_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																							</tr>
																						</thead>
																					</table>
																				</div>
																			</div>
																			<div class="ui-jqgrid-bdiv"
																				style="height: auto; width: 610px;">
																				<div style="position: relative;">
																					<div></div>
																					<table id="DYN_PA_MPJJ"
																						class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
																						datapermission="eform_data_DYN_PA_MPJJ"
																						tabindex="0" role="presentation"
																						aria-multiselectable="false"
																						aria-labelledby="gbox_DYN_PA_MPJJ"
																						style="width: 500px;">
																						<tbody>

																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="ui-jqgrid-resize-mark"
																			id="rs_mDYN_PA_MPJJ">&nbsp;</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 25%;"><label for="MPJJ_TOTAL_PRICE">门票讲解总计金额：</label></td>
											<td style="width: 25%;">
												<div class="">
													<textarea id="MPJJ_TOTAL_PRICE" name="MPJJ_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="门票讲解总计金额" data-precision="2">${dto.MPJJ_TOTAL_PRICE	}</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 56px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 86px;"><label
								for="">困难党员：</label></td>
							<td
								style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 56px;"
								colspan="3">
								<table style="margin: 0; width: 100%;"
									id="AGF88wmOlGsGs95ylNXSZK6bjijibPns" class="form_commonTable1">
									<tbody>
										<tr>
											<td style="width: 50%;" colspan="2">
												<table title=""
													style="table-layout: fixed; margin: 0; width: 100%;">
													<tbody>
														<tr>
															<td>
																<div title="DYN_PA_KNDY" id="DYN_PA_KNDY_control"
																	class="eform_subtable_bpm_auth">
																	<div class="ui-jqgrid " id="gbox_DYN_PA_KNDY" dir="ltr"
																		style="width: 500px;">
																		<div class="jqgrid-overlay ui-overlay"
																			id="lui_DYN_PA_KNDY"></div>
																		<div class="loading row" id="load_DYN_PA_KNDY"
																			style="display: none;">读取中...</div>
																		<div class="ui-jqgrid-view table-responsive"
																			role="grid" id="gview_DYN_PA_KNDY"
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
																						aria-labelledby="gbox_DYN_PA_KNDY">
																						<thead>
																							<tr class="ui-jqgrid-labels" role="row">
																								<th id="DYN_PA_KNDY_ID" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 75px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_KNDY_ID">
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_KNDY_KNDY_NAME"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 306px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_KNDY_KNDY_NAME">
																										姓名<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_KNDY_KNDY_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 306px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_KNDY_KNDY_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_KNDY_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_KNDY_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																							</tr>
																						</thead>
																					</table>
																				</div>
																			</div>
																			<div class="ui-jqgrid-bdiv"
																				style="height: auto; width: 610px;">
																				<div style="position: relative;">
																					<div></div>
																					<table id="DYN_PA_KNDY"
																						class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
																						datapermission="eform_data_DYN_PA_KNDY"
																						tabindex="0" role="presentation"
																						aria-multiselectable="false"
																						aria-labelledby="gbox_DYN_PA_KNDY"
																						style="width: 500px;">
																						<tbody>

																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="ui-jqgrid-resize-mark"
																			id="rs_mDYN_PA_KNDY">&nbsp;</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 25%;"><label for="KNDY_TOTAL_PRICE">困难党员总计金额：</label></td>
											<td style="width: 25%;">
												<div class="">
													<textarea id="KNDY_TOTAL_PRICE" name="KNDY_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="困难党员总计金额" data-precision="2">${dto.KNDY_TOTAL_PRICE}</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><label
								for="">表彰：</label></td>
							<td
								style="padding: 0; width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<table style="margin: 0; width: 100%;"
									id="lKFqH8tYWN6osxn4YDYKWAvYiCdBO0b7" class="form_commonTable1">
									<tbody>
										<tr>
											<td style="width: 50%;" colspan="2">
												<table title=""
													style="table-layout: fixed; margin: 0; width: 100%;">
													<tbody>
														<tr>
															<td>
																<div title="DYN_PA_BZ" id="DYN_PA_BZ_control"
																	class="eform_subtable_bpm_auth">
																	<div class="ui-jqgrid " id="gbox_DYN_PA_BZ" dir="ltr"
																		style="width: 500px;">
																		<div class="jqgrid-overlay ui-overlay"
																			id="lui_DYN_PA_BZ"></div>
																		<div class="loading row" id="load_DYN_PA_BZ"
																			style="display: none;">读取中...</div>
																		<div class="ui-jqgrid-view table-responsive"
																			role="grid" id="gview_DYN_PA_BZ"
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
																						aria-labelledby="gbox_DYN_PA_BZ">
																						<thead>
																							<tr class="ui-jqgrid-labels" role="row">
																								<th id="DYN_PA_BZ_ID" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 75px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_BZ_ID">
																										ID<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_BZ_BZ_NAME" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_BZ_BZ_NAME">
																										名称<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_BZ_BZ_NUM" role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_BZ_BZ_NUM">
																										人数<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_BZ_BZ_UNION_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_BZ_BZ_UNION_PRICE">
																										单价<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_BZ_BZ_TOTAL_PRICE"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 153px;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_BZ_BZ_TOTAL_PRICE">
																										金额<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																								<th id="DYN_PA_BZ_FK_SUB_COL_ID"
																									role="columnheader"
																									class="ui-th-column ui-th-ltr "
																									style="width: 100px; display: none;"><span
																									class="ui-jqgrid-resize ui-jqgrid-resize-ltr"
																									style="cursor: col-resize;">&nbsp;</span>
																									<div class="ui-th-div ui-jqgrid-sortable"
																										id="jqgh_DYN_PA_BZ_FK_SUB_COL_ID">
																										外键<span class="s-ico" style="display: none"><span
																											sort="asc"
																											class="ui-grid-ico-sort ui-icon-asc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-top"></span><span
																											sort="desc"
																											class="ui-grid-ico-sort ui-icon-desc ui-sort-ltr ui-disabled glyphicon glyphicon-triangle-bottom"></span></span>
																									</div></th>
																							</tr>
																						</thead>
																					</table>
																				</div>
																			</div>
																			<div class="ui-jqgrid-bdiv"
																				style="height: auto; width: 610px;">
																				<div style="position: relative;">
																					<div></div>
																					<table id="DYN_PA_BZ"
																						class="datatable ui-jqgrid-btable ui-common-table table table-bordered"
																						datapermission="eform_data_DYN_PA_BZ" tabindex="0"
																						role="presentation" aria-multiselectable="false"
																						aria-labelledby="gbox_DYN_PA_BZ"
																						style="width: 500px;">
																						<tbody>

																						</tbody>
																					</table>
																				</div>
																			</div>
																		</div>
																		<div class="ui-jqgrid-resize-mark" id="rs_mDYN_PA_BZ">&nbsp;</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="width: 25%;"><label for="BZ_TOTAL_PRICE">表彰总计金额：</label></td>
											<td style="width: 25%;">
												<div class="">
													<textarea id="BZ_TOTAL_PRICE" name="BZ_TOTAL_PRICE"
														style="" class="form-control" readonly="" rows="1"
														title="表彰总计金额" data-precision="2">${dto.BZ_TOTAL_PRICE }</textarea>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><b>党支部审批：</b></td>
							<td
								style="width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<div id="musLjfmNwt0fALvOiKwrRc8ZOTFewukm"
									class="bpm_self_class " title=""></div>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><b>党委（总支）审批：</b></td>
							<td
								style="width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<div id="Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB"
									class="bpm_self_class " title=""></div>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><b>党建工作室审批：</b></td>
							<td
								style="width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<div id="BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId"
									class="bpm_self_class " title=""></div>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><b>党群工作部审批：</b></td>
							<td
								style="width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<div id="z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB"
									class="bpm_self_class " title=""></div>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><b>拟稿人确认：</b></td>
							<td
								style="width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<div id="Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO"
									class="bpm_self_class " title=""></div>
							</td>
						</tr>
						<tr style="height: 58px;">
							<td
								style="width: 15%; text-align: left; border: 1px solid; height: 88px;"><b>党建工作室报销审核：</b></td>
							<td
								style="width: 94%; text-align: left; border: 1px solid; height: 58px;"
								colspan="3">
								<div id="hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf"
									class="bpm_self_class " title=""></div>
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
			case "DYN_PA_XXZL1":
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.XXZL1_NAME + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.XXZL1_NUM + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.XXZL1_UNION_PRICE + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.XXZL1_TOTAL_PRICE + '</td>'
				return html;
			case "DYN_PA_GB":
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.GB_NAME + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.GB_NUMM + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.GB_UNION_PRICE + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.GB_TOTAL_PRICE + '</td>'
				return html;
			case "DYN_PA_SB":
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.SB_NAME + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.SB_USE + '</td>'
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
			case "DYN_PA_DHDQ":
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.DHDQ_NAME + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.DHDQ_NUM + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.DHDQ_UNION_PRICE + '</td>'
				html += '<td role="gridcell" style="height: 0px; width: 153px;">'
						+ item.DHDQ_TOTAL_PRICE + '</td>'
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
				if(item.MESSAGE_ == null){
					continue;
				}
				str = item.MESSAGE_ + "  " + end + "  " + item.OP_UNAME_;
				html += str;
				html += "<br>";
			}
			return html;
		}
		$.ajax({
			url : "avicit/pb/print/PartyActivityMoneyPrint/list",
			dataType : "JSON",
			type : "GET",
			async : false,
			data : {
				id : id,
				entryid : entryid
			},
			success : function(e) {
				listFor(e.DYN_PA_BZ, "DYN_PA_BZ");
				listFor(e.DYN_PA_CD, "DYN_PA_CD");
				listFor(e.DYN_PA_DHDQ, "DYN_PA_DHDQ");
				listFor(e.DYN_PA_GB, "DYN_PA_GB");
				listFor(e.DYN_PA_KNDY, "DYN_PA_KNDY");
				listFor(e.DYN_PA_MPJJ, "DYN_PA_MPJJ");
				listFor(e.DYN_PA_SB, "DYN_PA_SB");
				listFor(e.DYN_PA_XXZL1, "DYN_PA_XXZL1");
				$("#musLjfmNwt0fALvOiKwrRc8ZOTFewukm").append(yjFor(e.task3));
				$("#Pl8dCX1TzQ29nIjS6eXR7WFbPtyzDlRB").append(yjFor(e.task4));
				$("#BTbQGGh7VvOwtmbYvUPKI5eF5m7edIId").append(yjFor(e.task5));
				$("#z6OG8t0tVus3Ng7kxgJ4fSwkLjHQdMJB").append(yjFor(e.task2));
				$("#Pyqmrz6Tu38MoIoYQJBQh0xqUqcdTMVO").append(yjFor(e.task6));
				$("#hkNmbM9F3M8y9Z9CzWNAcCB1ph29HaUf").append(yjFor(e.task7))
				setTimeout(function () {
					getPrint();
				},500)
				
			}
		})
		
		function getPrint(){
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