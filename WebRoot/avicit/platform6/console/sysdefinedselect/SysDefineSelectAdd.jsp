<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "createdefineselect/sysdefineselect/sysDefineSelectController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/zTreeStyle.css" />
<link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/zTreeStyle/metro.css"/>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
	
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

	.dataSelectDiv{
		width: 100%;
		border: 1px solid #7b9dd4;
		height: 165px;
		position: absolute;
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
	#ext{
		position: relative;
	}
	#inputClear{
		right: 48px;
		top: 7px;
		position: absolute;
		z-index: 2;
		font-size: 12px;
		color: #bdbdbd;
	}
</style>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" id="id"/>
			<table class="form_commonTable">
				<tr>
					<th width="10%"><label for="code_">编码:</label></th>
					<td width="39%"><input class="form-control input-sm" type="text" name="code_" id="code_" /></td>
					<th width="10%"><label for="sign_">是否系统标识:</label></th>
					<td width="39%"><pt6:h5select css_class="form-control input-sm" name="sign_" id="sign_" title="" isNull="true" lookupCode="PLATFORM_SYS_SIGN" /></td>
					
				</tr>
				<tr>
					<th width="10%"><label for="ext">外部数据源:</label></th>
					<td style="width:39%;position: relative;">
						<div id="ext" class="input-group" style="width: 100%;">
							<input type="hidden" class="form-control input-sm" id="ext_datasource" name="ext_datasource"/>
							<input type="hidden" class="form-control input-sm" id="ext_datasourceName" name="ext_datasourceName"/>
							<input type="hidden" class="form-control input-sm" id="ext_nodeType" name="ext_nodeType"/>
							<input type="text" class="form-control input-sm" readonly="readonly" id="ext_datasourceUrl" name="ext_datasourceUrl"/>
							<i id="inputClear" class="icon iconfont icon-guanbi1"></i>
							<div class="input-group-addon" id="ext_datasourceButton">
								<i class="glyphicon glyphicon-triangle-bottom"></i>
							</div>
						</div>
						<div class="dataSelectDiv">
							<ul id="consoleData" class="ztree"></ul>
						</div>
					</td>
					<td style="position: relative">
						<a id="sql_check" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="检测SQL">
							<i class="fa fa-check"></i> 检测SQL
						</a>
					</td>
				</tr>
				<tr>
					<th width="10%"><label for="sql_">sql语句:
						<%--<i class="tips-iconhelp icon iconfont icon-question-circle" id="exampleSqlTips"></i>--%></label>
					</th>
					<td width="39%" colspan="4"><textarea  class="form-control input-sm" rows="3" name="sql_" id="sql_"></textarea></td>
				</tr>
				<tr>
				<th width="10%"><label for="des_">描述:</label></th>
					<td width="39%" colspan="4"><textarea class="form-control input-sm" rows="3" type="text" name="des_" id="des_" /></textarea></td>
				</tr>
				<tr>
				<th width="10%">说明：</th>
					<td width="39%" colspan="4">
						<p>sql语句：</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;•下拉框查询SQL，支持联想输入，输入框变量为inputText，如：select k.id KEY, k.name VALUE from sys_user k where k.name like '%@inputText@%' ;<br/>&nbsp;&nbsp;&nbsp;&nbsp;其中value为展示字段，不可使用其他名称。</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;•支持自定义参数，如：select k.id KEY, k.name VALUE from sys_user k where k.name like '%@inputText@%' and k.type =  '@userType@',其中userType为自定义变量，<br/>&nbsp;&nbsp;&nbsp;&nbsp;需要在自定义下拉框的选择前置事件中，定义userType并赋值。</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;•若是MySQL数据库，需要对key和value关键字进行特殊处理，如：select k.id 'KEY', k.name 'VALUE' from sys_user k </p>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border: 0; cellspacing: 1; width: 100%">
				<tr>
					<td width="50%" style="padding-right: 4%; float: right; display: block;" align="right"><a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button"
						title="保存" id="sysDefineSelect_saveForm">保存</a> <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="sysDefineSelect_closeForm">返回</a></td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript" src="avicit/platform6/console/sysdefinedselect/js/ExtDataTree.js" ></script>
	<script type="text/javascript" src="static/h5/jquery-ztree/3.5.12/js/jquery.ztree.all-3.5.js"></script>
	<script type="text/javascript">
			function closeForm(){
			parent.sysDefineSelect.closeDialog("insert");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
			  parent.sysDefineSelect.save($('#form'),"insert");
		}

			function check() {
				var queryStatement = $('#sql_').val();

				var dataId = $('#ext_datasource').val();
				var dataType = $('#ext_nodeType').val();

				if (queryStatement != null && queryStatement != "") {
					$.ajax({
						url: "console/sysdefinedselect/operation/getTargetNameBySql",
						type: 'post',
						dataType: 'json',
						async: false,
						data: {"queryStatement": queryStatement, "dataId": dataId, "dataType": dataType},
						success: function (r) {
							if (r.flag == "success" && r.queryFieldList) {
								layer.msg('查询语句通过校验！', {icon: 1});
							} else {
								layer.alert('查询语句校验失败！ ' + r.error, {
											icon: 7,
											area: ['400px', ''], //宽高
											closeBtn: 0
										}
								);
							}
						}
					});
				}else{
					layer.alert('请填写sql语句！', {
								icon: 7,
								area: ['400px', ''], //宽高
								closeBtn: 0
							}
					);
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
				$("#exampleSqlTips").mouseover(function () {
					var message = "<span style='color:#333333;'>示例：<br/>select k.id KEY,k.no CODE, k.name VALUE from sys_user k</span>";
					tipsIndex = layer.tips(message, $(this), {
						tips: 2,
						area: ['auto','auto'],
						time: 0
					});
				}).mouseout(function () {
					layer.close(tipsIndex);
				});
			}


		$(document).ready(function () {
			initTips();
			$("#inputClear").hide();
			$('.date-picker').datepicker();
			$('.time-picker').datetimepicker({
				oneLine:true,//单行显示时分秒
				closeText:'确定',//关闭按钮文案
				showButtonPanel:true,//是否展示功能按钮面板
				showSecond:false,//是否可以选择秒，默认否
				beforeShow: function(selectedDate) {
					if($('#'+selectedDate.id).val()==""){
						$(this).datetimepicker("setDate", new Date());
						$('#'+selectedDate.id).val('');
					}
				}
			});

			$("#ext_datasourceUrl").click(function () {
				$(".dataSelectDiv").toggle();
			});
			$("#ext_datasourceButton").click(function () {
				$(".dataSelectDiv").toggle();
			});
			
			//外部数据源树初始化
			var extDataTree = new ExtDataTree('consoleData','console/sysdefinedselect/operation/getDataTree','','txt');
			extDataTree.setOnSelect(function(treeNode) {
				if(treeNode.nodeType == "" || treeNode.nodeType == undefined){
					return false;
				}
				$("#ext_datasource").val(treeNode.id);
				$("#ext_datasourceName").val(treeNode.text);//("<option value='" + treeNode.id + "' selected>" + treeNode.text + "</option>");
				$("#ext_nodeType").val(treeNode.nodeType);
				$("#ext_datasourceUrl").val(treeNode.urlValue);
				$(".dataSelectDiv").hide();
				$("#inputClear").show();
			}).init();
			
			//编码唯一性校验
			jQuery.validator.addMethod("validateCode", function(value, element, param) {
				var mark = 1;
				var data = {
					'code' : value,
					'id' : $('#id').val()
				};
				$.ajax({
					url : 'console/sysdefinedselect/operation/validateCode',
					data : data,
					type : 'post',
					dataType : 'json',
					async : false,
					success : function(r) {
						if (r.flag == "success") {
							mark = 0;
						}
					}
				});
				if (mark == 1) {
					return false;
				} else {
					return true;
				}
			}, "编码已存在，请重新填写");	
			parent.sysDefineSelect.formValidate($('#form'));
			//保存按钮绑定事件
			$('#sysDefineSelect_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#sysDefineSelect_closeForm').bind('click', function(){
				closeForm();
			});
			//sql校验按钮绑定事件
			$('#sql_check').bind('click', function () {
				check();
			});
			//input清空按钮绑定事件
			$('#inputClear').bind('click', function () {
				clearInput();
			});
			
																																																																																																											
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		});
	</script>
</body>
</html>