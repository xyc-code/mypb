<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%
	String importlibs = "common,table,form,tree";
%>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.ztree li span.button.icon_ico_docu{
			margin-right:2px;
			background: url(static/images/platform/common/function.gif) no-repeat scroll 0 0 transparent;
			vertical-align:top;
			*vertical-align:middle
		}


		.ztree li span.button.add{
			margin-right:2px;
			background-position:-144px 0;
			vertical-align:top;
			*vertical-align:middle
		}
		#ext{
			position: relative;
		}
		#inputClear{
			right: 48px;
			top: 12px;
			position: absolute;
			z-index: 2;
			font-size: 12px;
			color: #bdbdbd;
		}
		.dataSelectDiv{
			width: 100%;
			border: 1px solid #7b9dd4;
			height: 165px;
			background-color: #ffffff;
			box-shadow: 3px 3px 2px #a5c7fe;
			-moz-box-shadow: 3px 3px 2px #a5c7fe;
			-webkit-box-shadow: 3px 3px 2px #a5c7fe;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			margin-left: 2px;
			margin-top: 1px;
			display: none;
			overflow: auto;
			z-index:9999999999;
		}
		.radio-inline{
			margin-right:10px!important;
		}
		.radio-inline input[type=checkbox]{
			position: absolute;
			margin-left:-20px;
		}
	</style>
</head>

<body>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<link rel="stylesheet" type="text/css" href="avicit\platform6\console\demostorage\css\style.css" />
<link rel="stylesheet" type="text/css" href="static/h5/layer-v2.3/layer/skin/layer.css">

<link rel="stylesheet" type="text/css" href="static/h5/jquery-ui-1.9.2.custom/css/base/jquery-ui-1.9.2.custom.css"/>
<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/zTreeStyle.css" />
<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/metro.css"/>
<link rel="stylesheet" type="text/css" href="static/h5/select2/select2.css"/>
<link rel="stylesheet" type="text/css" href="static/h5/skin/common.css"/>
<link rel="stylesheet" type="text/css" href="static/h5/jquery-range/css/jquery.range.css" />
<link rel="stylesheet" type="text/css" href="static/h5/switch/css/bootstrap-switch.css" />

<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
<script type="text/javascript" src="avicit/platform6/console/demostorage/js/onlineapi.js"></script>
<script type="text/javascript" src="avicit/platform6/console/demostorage/js/clipboard.min.js"></script>
<!-- 用户API常用方法 -->
<div class="codeGenerator">
	<div id="sysUserAPI" style="width:1100px;">
		<div class="codeGenerator-title">通用选择组件</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%">
						<label>用户:</label></th>
					<td width="34%">
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="deptId1" name="deptId">
							<input class="form-control" placeholder="请选择用户" type="text" id="deptIdAlias1"
								   name="deptIdAlias" >
							<span class="input-group-addon">
						<i class="glyphicon glyphicon-user"></i>
						</span>
						</div>
					</td>
					<th width="15%">
						<label>部门:</label></th>
					<td width="34%">
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="deptId" name="deptId">
							<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" >
							<span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
						</div>
					</td>
				</tr>
				<tr>
					<th><label>角色:</label></th>
					<td>
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="roleId" name="roleId">
							<input class="form-control" placeholder="请选择角色" type="text" id="roleIdAlias" name="roleIdAlias" >
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
						</span>
						</div>
					</td>
					<th><label>岗位:</label></th>
					<td>
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="positionId" name="positionId">
							<input class="form-control" placeholder="请选择岗位" type="text" id="positionIdAlias" name="positionIdAlias" >
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
						</span>
						</div>
					</td>
					<th>

				</tr>
				<tr>
					<th><label>组织:</label></th>
					<td>
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="orgId" name="orgId">
							<input class="form-control" placeholder="请选择组织" type="text" id="orgIdAlias" name="orgIdAlias" >
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
						</span>
						</div>
					</td>
					<th><label>群组:</label></th>
					<td>
						<div class="input-group  input-group-sm">
							<input type="hidden"  id="groupId" name="groupId">
							<input class="form-control" placeholder="请选择群组" type="text" id="groupIdAlias" name="groupIdAlias" >
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
						</span>
						</div>
					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode" onclick="viewcode('viewcode',
       'exampleCodeFont', 'contentBody');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody"
						width="100%" height="900" frameBorder="0"
						scrolling="auto"></iframe>
			</div>
		</div>
		<div class="codeGenerator-title">公共弹出框</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>公共弹框:</label></th>
					<td width="34%" >
						<input class="form-control" id = "customDialog" type="text">
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>动态维护:</label></th>
					<td width="34%" style="position: relative;padding-right:90px;">
						<pt6:h5select css_class="form-control input-sm" name="deptType" id="deptType" title="部门类型"
									  isNull="true" lookupCode="PLATFORM_DEMOSTORAGE_CODE"  defaultValue='1'/>
						<a style="position: absolute;right:35px;top:12px;text-decoration: none;cursor: pointer;" id="insertType">新增分类</a>
						<a style="position: absolute;right:5px;top:12px;text-decoration: none;cursor: pointer;">刷新</a>
					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode2" onclick="viewcode('viewcode2',
        'exampleCodeFont2','contentBody2');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont2">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody2"
						width="100%" height="500" frameBorder="0"
						scrolling="auto"></iframe>
				</textarea>
			</div>
		</div>
		<div class="codeGenerator-title">选择框</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>单选:</label></th>
					<td width="34%" >
						<pt6:h5radio css_class="radio-inline"  name="sex" title="" canUse="0"
									 lookupCode="PLATFORM_DEMOSTORAGE_CODE" defaultValue='1'/>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>多选:</label></th>
					<td width="34%" >
						<pt6:h5checkbox css_class="radio-inline"  name="sex" title="" canUse="0" lookupCode="PLATFORM_DEMOSTORAGE_CODE" defaultValue='1'/>
					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>下拉:</label></th>
					<td width="34%" >
						<pt6:h5select css_class="form-control input-sm" name="deptType" id="deptType" title="部门类型"
									  isNull="true" lookupCode="PLATFORM_DEMOSTORAGE_CODE"  defaultValue='1'/>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>自定义下拉:</label></th>
					<td width="34%" >
						<div id="customeSelect" class="input-group input-group-sm avicselect">
							<input type="hidden" name="key" id="key"><input type="text" class="form-control"id="ipt">
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-triangle-bottom"></i></span>
							<div class="avicselect-list">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>可编辑下拉:</label></th>
					<td width="34%" >
						<select class="form-control input-sm js-example-data-array" id="columnSymbol" name="columnSymbol" style="width: 100%;">
							<option value="1">demo1</option>
							<option value="2">demo2</option>
							<option value="3">demo3</option>
							<option value="4">demo4</option>
						</select>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>树形下拉:</label></th>
					<td width="34%" style="position: relative;">
						<div id="ext" class="input-group" style="width: 100%;">
							<input type="text" class="form-control input-sm" readonly="readonly" id="ext_datasourceUrl" name="ext_datasourceUrl"/>
							<i id="inputClear" class="icon iconfont icon-guanbi1"></i>
							<div class="input-group-addon" id="ext_datasourceButton">
								<i class="glyphicon glyphicon-triangle-bottom"></i>
							</div>
						</div>
						<div class="dataSelectDiv" style="position: absolute;">
							<ul id="consoleData" class="ztree"></ul>
						</div>
					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode3" onclick="viewcode('viewcode3',
        'exampleCodeFont3', 'contentBody3');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont3">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody3"
						width="100%" height="900" frameBorder="0"
						scrolling="auto"></iframe>
			</div>
		</div>
		<div class="codeGenerator-title">日期框</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>年份:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm">
							<input type="text" id="d242" onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年'})"
								   class="form-control Wdate"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>月份:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm">
							<input type="text" id="d243" onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年MM月'})" class="form-control Wdate"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>

					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>起止日期:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm" style="width:49%;float:left;">
							<input id="d4311" class="form-control Wdate" type="text" onclick="WdatePicker({maxDate:'#F{$dp.$D(\'d4312\')}'})"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
						<div class="input-group input-group-sm" style="width:49%;float:right;">
							<input id="d4312" class="form-control Wdate"  type="text" onclick="WdatePicker({minDate:'#F{$dp.$D(\'d4311\')}'})"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>日期时间:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm" >
							<input id="d11" type="text" class="form-control Wdate" onClick="WdatePicker({dateFmt:'yyyy年MM月dd日 HH时mm分ss秒'})"/>
							<span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>

					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode4" onclick="viewcode('viewcode4',
        'exampleCodeFont4', 'contentBody4');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont4">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody4"
						width="100%" height="400" frameBorder="0"
						scrolling="auto"></iframe>
			</div>
		</div>
		<div class="codeGenerator-title">数字框</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>货币:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<span class="input-group-addon"><i class="fa fa-fw fa-rmb"></i> </span>
							<input type="text" class="form-control "  id="DATA_13" name="DATA_13" data-min="0" data-max="99999999.99" data-precision="2"  maxlength="15">
						</div>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>百分比:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input class="form-control" type="text" name="percent" id="percent" data-min="0" data-max="100.00" data-precision="2" data-rule="percent" style="text-align:right; ">
							<span class="input-group-addon">%</span>
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>千分位:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<span class="input-group-addon"><i class="fa fa-fw fa-rmb"></i></span>
							<input type="text" id="testInput_money" name="testInput_money" value="" maxlength="200"
								   class="form-control inputmask" data-inputmask-alias="money" data-inputmask="'digits':'2'" style="text-align: right;"/>

							<span class="input-group-addon">(千分位，右对齐，保留2位小数)</span>
						</div>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>数字微调:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm spinner"
							 data-trigger="spinner">
							<input class="form-control" type="text" name="order"
								   id="order"
								   data-min="-9.9999999999E10"
								   data-max="9.9999999999E10" data-step="1"
								   data-precision="0"> <span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i
										class="glyphicon glyphicon-triangle-top"></i></a> <a
								href="javascript:;" class="spin-down" data-spin="down"><i
								class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode5" onclick="viewcode('viewcode5',
        'exampleCodeFont5', 'contentBody5');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont5">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody5"
						width="100%" height="500" frameBorder="0"
						scrolling="auto"></iframe>
			</div>
		</div>
		<div class="codeGenerator-title">文本框</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>提示:</label><i class="tips-iconhelp icon iconfont icon-question-circle" id="showUnValidUserTips"></i></th>
					<td width="34%" >
						<input class="form-control" type="text">
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><i class="required">*</i><label>必填:</label></th>
					<td width="34%" >
						<input class="form-control" type="text">
					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>邮件:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm">
							<span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
							<input type="text" id="testInput_regex" name="testInput_regex" value="" maxlength="200" class="form-control inputmask" data-inputmask-regex="[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}"/>

							<span class="input-group-addon">(正则表达式)</span>
						</div>
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>电话:</label></th>
					<td width="34%" >

						<div class="input-group input-group-sm">
							<span class="input-group-addon">+86</span>
							<input class="form-control" type="text">
						</div>
					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>密码:</label></th>
					<td width="34%" >
						<div class="input-group input-group-sm">
							<span class="input-group-addon"><i class="fa fa-fw fa-key"></i></span>
							<input class="form-control" type="password">
						</div>

					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>快速删除:</label></th>
					<td width="34%" >
						<select class="form-control js-example-basic-multiple" id="method" name="method" multiple="multiple" style="width: 100%">
							<option value="1">demo1</option>
							<option value="2">demo2</option>
							<option value="3">demo3</option>
							<option value="4">demo4</option>
						</select>
					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode6" onclick="viewcode('viewcode6',
        'exampleCodeFont6', 'contentBody6');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont6">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody6"
						width="100%" height="900" frameBorder="0"
						scrolling="auto"></iframe>
			</div>
		</div>
		<div class="codeGenerator-title">特殊样式框</div>
		<div class="codeGenerator-box">
			<table class="form_commonTable" border="0" cellpadding="0" dellspacing="0">
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>开关:</label></th>
					<td width="34%" >
						<input type="checkbox" class="valid" id="showUnValidUser">
					</td>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>滑动输入:</label></th>
					<td width="34%" >
						<input type="hidden" class="form-control input-sm single-slider" name="oneFontSize" id="oneFontSize"/>
					</td>
				</tr>
				<tr>
					<th width="15%" style="word-break: break-all; word-warp: break-word;"><label>折叠面板:</label></th>
					<td width="34%" >
						<div id="accordion">
							<h3>面板一</h3>
							<div>
								<p>
									这是折叠面板示例一。
								</p>
							</div>
							<h3>面板二</h3>
							<div>
								<p>
									这是折叠面板示例二。
								</p>
							</div>
						</div>
					</td>
				</tr>
			</table>

			<div class="viewcode"><i class="fa fa-fw fa-code"></i> <a id="viewcode7" onclick="viewcode('viewcode7',
        'exampleCodeFont7', 'contentBody7');">查看代码</a></div>
			<div class="exampleCodeFont" style="display: none" id = "exampleCodeFont7">
				<iframe src="avicit/platform6/console/demostorage/demoCode.jsp" name="contentBody" id="contentBody7"
						width="100%" height="900" frameBorder="0"
						scrolling="auto"></iframe>
			</div>
		</div>
	</div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/h5/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js"></script>
<script type="text/javascript" src="avicit/platform6/console/user/js/jquery.form.js"></script>

<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
<script type="text/javascript" src="avicit/platform6/console/demostorage/js/ExtDataTree.js" ></script>
<script type="text/javascript" src="static/h5/select2/select2.js"></script>
<script src="static/h5/jquery-range/js/jquery.range.js"></script>
<script src="static/h5/switch/js/bootstrap-switch.js" charset="utf-8"></script>

</body>
<script>
	$(document).ready(function() {
		//点击复制
		textCopy("btn");
		//初始化父页面高度
		initParentHeight();

		$("#inputClear").hide();

		$("#columnSymbol").select2({});

		$('#deptIdAlias1').on('focus',function(e){
			new H5CommonSelect({type:'userSelect', idFiled:'deptId1',textFiled:'deptIdAlias1'});
			this.blur();
			nullInput(e);
		});
		$('#deptIdAlias').on('focus',function(e){
			new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
			this.blur();
			nullInput(e);
		});
		$('#roleIdAlias').on('focus',function(e){
			new H5CommonSelect({type:'roleSelect', idFiled:'roleId',textFiled:'roleIdAlias'});
			this.blur();
			nullInput(e);
		});
		$('#groupIdAlias').on('focus',function(e){
			new H5CommonSelect({type:'groupSelect', idFiled:'groupId',textFiled:'groupIdAlias'});
			this.blur();
			nullInput(e);
		});
		$('#positionIdAlias').on('focus',function(e){
			new H5CommonSelect({type:'positionSelect', idFiled:'positionId',textFiled:'positionIdAlias'});
			this.blur();
			nullInput(e);
		});
		$('#orgIdAlias').on('focus',function(e){
			new H5CommonSelect({type:'orgSelect', idFiled:'orgId',textFiled:'orgIdAlias'});
			this.blur();
			nullInput(e);
		});

		$('#customDialog').on('click', function () {
			new showCustomDialog('通用代码', 'avicit/platform6/console/demostorage/LookupTypeSelectForDemo.jsp', '90%', '80%', {'customDialog':'lookupTypeName'}, '',
					'', null, '', '');
		});

		$('#insertType').on('click', function () {
			new showCustomDialog('新增分类', 'avicit/platform6/console/demostorage/SysLookupTypeManage.jsp', '90%', '80%',
					'', '', '', '', '', '');
		});

		//外部数据源树初始化
		var extDataTree = new ExtDataTree('consoleData',
				'avicit/platform6/console/demostorage/json/treeSelect.json', '', 'txt');
		extDataTree.setOnSelect(function (treeNode) {
			if (treeNode.nodeType == "" || treeNode.nodeType == undefined) {
				return false;
			}

			$("#ext_datasourceUrl").val(treeNode.urlValue);
			$(".dataSelectDiv").hide();
			$("#inputClear").show();
		}).init();
		$("#ext_datasourceUrl").click(function () {
			$(".dataSelectDiv").toggle();
		});
		$("#ext_datasourceButton").click(function () {
			$(".dataSelectDiv").toggle();
		});

		//input清空按钮绑定事件
		$('#inputClear').bind('click', function () {
			clearInput();
		});

		$('#customeSelect').avicselect({
			code: 'shili',//自定义选择页中定义的编码
			dataBind: {'KEY': 'key'},//绑定回填字段与回填位置，格式：‘字段’：‘控件’，当控件不存在时，会自动生成
			multi: false,//是否开启多选
			delimit: ',',// 多选时的分隔符
			height: '200px',//下拉列表的高度，未设置时默认为‘auto'，layer控件参数
			afterSelect: '',//选择后置事件
			data: [
				{
					"CODE": "sysadmin",
					"VALUE": "系统管理员",
					"KEY": "8a58a6b44c275dce014c275dced90000",
					"ROW_ID": 1
				},
				{
					'CODE': 'admin',
					"VALUE": "平台管理员",
					"KEY": "1",
					"ROW_ID": 2
				},
				{
					'CODE': 'a',
					"VALUE": "开发工程师",
					"KEY": "aaa",
					"ROW_ID": 3
				},
				{
					'CODE': 'b',
					"VALUE": "测试工程师",
					"KEY": "bbb",
					"ROW_ID": 4
				}
			],
			remote: false,
			beferOpenPream: function () {
				return {userType: '1'}
			},//带参数查询
		});

		initTips();

		$("#method").select2({});

		$( "#accordion" ).accordion();

		$('#oneFontSize').jRange({
			from: 0,
			to: 100,
			step: 1,
			format: '%s%',
			scale: ['0', '100%'],
			width: $("#oneFontSize").parent().width(),
			height: 50,
			showLabels: true,
			showScale: true,
			isRange : false
		});

		$('#showUnValidUser').bootstrapSwitch({
			size:'small',
			onText:'开启',
			offText:'关闭',
			onColor : "primary",
			offColor : "default"
		});

		$("#DATA_13").blur(function () {
			if (!$(this).val() == null && !$(this).val() == "") {
				var number = parseFloat($(this).val()).toFixed(2);
				$(this).val(number)
			}
		});

		$("#testInput_money").blur(function () {
			var obj = this.value;
			if (obj != null && obj != "") {

				obj = parseFloat(obj).toFixed(2);
				var left = obj.split(".")[0].split("").reverse();
				var right = obj.split(".")[1];
				var total = new Array();
				for (i = 0; i < left.length; i++) {
					total.push(left[i]);
					if ((i + 1) % 3 == 0 && (i + 1) != left.length) {
						total.push(",");
					}
				}
				$("#testInput_money").val(total.reverse().join("") + "." + right);
			}
		});
	});

	function viewcode(id, codeId, iframeId) {
		if ($('#' + id).text() == "查看代码") {
			$('#' + codeId).css("display", "block");
			$('#' + id).text("收起代码");

			$("#" + iframeId).contents().find('.codeGenerator').hide();
			$("#" + iframeId).contents().find('#' + codeId).parent().show();
		} else {
			$('#' + codeId).css("display", "none");
			$('#' + id).text("查看代码")
		}
	}


	function clearInput(){
		$('#ext_datasource').val('');
		$('#ext_datasourceName').val('');
		$('#ext_nodeType').val('');
		$('#ext_datasourceUrl').val('');
		$("#inputClear").hide();
	}

	function initTips() {
		var tipsIndex;
		$("#showUnValidUserTips").mouseover(function () {
			var message = "<span style='color:#333333;'>是否显示无效用户</span>";
			tipsIndex = layer.tips(message, $(this), {
				tips: 1,
				area: ['auto','auto'],
				time: 0
			});
		}).mouseout(function () {
			layer.close(tipsIndex);
		});
	}

	//刷新本页面
	window.quickStart_refresh = function() {
		var tabType = $(".float-l>.active").attr("_target");
		var url = window.location.href;
		if(url.indexOf("tabType") != -1){
			url = url.replace(/tabType=(.)*/g, "tabType=" + tabType);
		}else{
			if(url.indexOf("?") != -1){
				url = url + "&tabType=" + tabType;
			}else{
				url = url + "?tabType=" + tabType;
			}
		}
		window.location.replace(url);
	};

	function returnValueToParent() {
		quickStart_refresh();
	}
</script>

</html>