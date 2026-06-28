<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
<title>编辑</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/id" -->
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<style type="text/css">
	.sysTemplateNameTips{
		width: 16px;
		height: 16px;
		background-image: url(static/images/platform/common/tips.png);
	}
	.sysTemplateNameTips{
		float: right;
		margin-right: -22px;
		margin-top: -23px;
	}
</style>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="version"
				value="<c:out  value='${sysImpTemplateDTO.version}'/>" /> <input
				type="hidden" name="id"
				value="<c:out  value='${sysImpTemplateDTO.id}'/>" />
			<input type="hidden" name="type" value="${sysImpTemplateDTO.type}">
			<table class="form_commonTable">
				<tr>
					<th width="10%"><label for="code">编码:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="code" id="code"
						value="<c:out value='${sysImpTemplateDTO.code}'/>" /></td>
					<th width="10%"><label for="name">名称:<i class="tips-iconhelp icon iconfont icon-question-circle" id="sysTemplateNameTips"></i></label></th>
					<td width="39%">
						<input class="form-control input-sm"
						type="text" name="name" id="name"
						value="<c:out value='${sysImpTemplateDTO.name}'/>" />
					</td>
				</tr>
				<tr>
					<th class="swfl" width="10%"><label for="swfl">事务控制方式:</label></th>
					<td class="swfl" width="39%"><pt6:h5select
							css_class="form-control input-sm" name="swfl" id="swfl" title=""
							isNull="true" lookupCode="SWFL_CONTROL"
							defaultValue='${sysImpTemplateDTO.swfl}' /></td>
					<th width="10%" style="word-break: break-all; word-warp: break-word;"><label for="manageStyle"><i class="required">*</i>配置方式:</label></th>
					<td width="39%">
						<label class="radio-inline"> <input name="manageStyle" title="Excel模板" type="radio" <c:if test="${sysImpTemplateDTO.manageStyle eq 1}">checked</c:if> value="1" >Excel模板</label>
						<label class="radio-inline"> <input name="manageStyle" title="DTO实体类" type="radio" <c:if test="${sysImpTemplateDTO.manageStyle eq 2}">checked</c:if> value="2">DTO实体类</label>
					</td>
				</tr>
				<tr id="dtoClazzTr" style="display: none;">
					<th width="10%"><label for="dtoClazz">实体类:</label></th>
					<td width="39%">
						<div class="input-group input-group-sm" id="dtoClazzDiv">
							<input class="form-control input-sm" type="text" name="dtoClazz" id="dtoClazz" value="<c:out  value='${sysImpTemplateDTO.dtoClazz}'/>"/>
							<span class="input-group-addon" id="dataSourceBtn"><i class="glyphicon glyphicon-th-list"></i></span>
						</div>
					</td>
				</tr>
				<tr class="excelShow">
					<th width="10%"><label for="userClass">用户自定义处理类:</label></th>
					<td width="39%"><input class="form-control input-sm"
													   type="text" name="userClass" id="userClass"
													   value="<c:out value='${sysImpTemplateDTO.userClass}'/>" /></td>
					<th width="10%"><label for="attachment">Excel模板:</label></th>
					<td width="39%">
						<div id="attachment"></div>
					</td>
				</tr>
				<tr>
					<th width="10%"><label for="bz">描述:</label></th>
					<td width="39%" colspan="3"><textarea rows="2" maxlength="300" class="form-control input-sm"
										   type="text" name="bz" id="bz">${sysImpTemplateDTO.bz}</textarea></td>
				</tr>

				<tr>
					<th width="10%">说明:</th>
					<td width="39%" colspan="3">
						<p style="color:#CC3333">Excel和DTO两种方式都开放用户自定义处理接口，具体使用如下:</p>
						<p><strong>Excel方式:</strong></p>
						<p>通过添加用户自定义处理类全路径，该类需要实现接口SysExcelImpWithExcelHandle，可根据需求实现不同方法，对不同阶段的数据进行干预处理。 <a href="avicit/platform6/console/excel/sysexcelhelppage/SysExcelImportByExcelHandlerDemo.jsp" target="_blank">demo</a></p>
						<p><strong>DTO方式:</strong></p>
						<p>自定义导入预处理，可对数据进行自定义行数据校验、行数据插入前处理、行数据插入后处理、sheet页数据插入后处理操作，需要实现接口SysExcelImpWithBeanHandle <a href="avicit/platform6/console/excel/sysexcelhelppage/SysExcelImportByDtoHandlerDemo.jsp" target="_blank">demo</a></p>

						<p><strong>导入配置自定义数据转换接口:</strong></p>
						<p>可通过自定义接口SysExcelImpCellConvertHandler，对导入的excel数据做自定义转换。 <a href="avicit/platform6/console/excel/sysexcelhelppage/SysExcelImportCellConvertDemo.jsp" target="_blank">demo</a></p>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm"
				style="border: 0; cellspacing: 1; width: 100%">
				<tr>
					<td width="50%" style="padding-right: 4%;" align="right"><a
						href="javascript:void(0);" title="保存" id="saveButtonEdit"
						class="btn btn-primary form-tool-btn typeb btn-sm">保存</a> <a
						href="javascript:void(0);" title="返回" id="returnButton"
						class="btn btn-grey form-tool-btn btn-sm">返回</a></td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		// 关闭Dialog
		function closeForm() {
			parent.sysImpTemplate.closeDialog('edit');
		}

		// 保存表单
		function saveForm() {
			var isValidate = $("#form").validate();
			if (!isValidate.checkForm()) {
				isValidate.showErrors();
				return false;
			}

			//验证附件密级
			var files = $('#attachment').uploaderExt('getUploadFiles');
			for (var i = 0; i < files.length; i++) {
				var name = files[i].name;
				var secretLevel = files[i].secretLevel;
				//这里验证密级
			}
			parent.sysImpTemplate.save($('#form'), callback, "saveButtonEdit");
		}

		//上传附件
		function callback(id) {
			$("#id").val(id);
			$('#attachment').uploaderExt('doUpload', id);
		}
		//附件上传完后执行
		function afterUploadEvent() {
			parent.sysImpTemplate.closeDialog('edit');
		}
		
		function initTips() {
			var tipsIndex;
			$("#sysTemplateNameTips").mouseover(function(){
				var message = "<span style='color:#333333;'>该名称用于日志审计中，excel导入日志对应的模块名称！</span>";
				tipsIndex= layer.tips(message, $(this), {
					tips: 1,
					area:['auto','auto'],
					time: 0
				});
			}).mouseout(function(){
				layer.close(tipsIndex);
			});
		}

		// 加载完后初始化
		$(document).ready(function() {
			//初始化日期控件
			$('.date-picker').datepicker();
			$('.time-picker').datetimepicker({
				oneLine : true,//单行显示时分秒
				closeText : '确定',//关闭按钮文案
				showButtonPanel : true,//是否展示功能按钮面板
				showSecond : false,//是否可以选择秒，默认否
				beforeShow : function(selectedDate) {
					if ($('#' + selectedDate.id).val() == "") {
						$(this).datetimepicker("setDate", new Date());
						$('#' + selectedDate.id).val('');
					}
				}
			});
			$('.date-picker').on('keydown', nullInput);
			$('.time-picker').on('keydown', nullInput);

			//初始化附件上传组件
			$('#attachment').uploaderExt({
				formId : '${sysImpTemplateDTO.id}',
				secretLevel : 'PLATFORM_FILE_SECRET_LEVEL',
				fileNumLimit: 1,
				fileCategoryList: ['xls', 'xlsx'],
				allowPreview: false,
				afterUpload : afterUploadEvent
			});

			//绑定表单验证规则
			parent.sysImpTemplate.formValidate($('#form'));

			//保存按钮绑定事件
			$('#saveButtonEdit').bind('click', function() {
				saveForm();
			});

			//返回按钮绑定事件
			$('#returnButton').bind('click', function() {
				closeForm();
			});

			//初始化配置方式
			var manageStyle = '${sysImpTemplateDTO.manageStyle}';
			if(manageStyle == "1"){ // Excel模板
				$("#dtoClazzTr").hide();
				$(".excelShow").show();
			} else if(manageStyle == "2"){ // DTO实体类
				$("#dtoClazzTr").show();
				$(".excelShow").hide();
			}

			initTips();
		});

		//选择实体类
		$('#dtoClazzDiv').on('click', function() {
			self.filterTablePrefix =  "BPM_,EFORM_,MOBILE_,MONITOR_,QRTZ_,DB_TABLE,SYS_,PORTAL_,RESTEASY_,SEARCH_";
			layer.open({
				type : 2,
				area : [ '70%', '70%' ],
				title : '请选择实体类',
				skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
				shade : 0.3,
				maxmin : false, //开启最大化最小化按钮
				content : 'avicit/platform6/console/excel/common/SysExcelSelectDataDto.jsp',
				btn : [ '确定', '关闭' ],
				yes : function(index, layero) {
					var iframeWin = layero.find('iframe')[0].contentWindow;//子页面的窗口对象
					var rowData = iframeWin.selectRow();
					if (!rowData) {
						return false;
					}
					$("#dtoClazz").val(rowData.dtoName);
					layer.close(index);
				},
				cancel : function(index, layero) {
					layer.close(index);
				}
			});
			$("#dtoClazz").blur();
		});

		//选择配置方式事件
		$("input[name='manageStyle']").on("click",function(){
			var selectVal = this.value;
			$("#dtoClazz").val("");
			if(selectVal == "1"){ // Excel模板
				$("#dtoClazzTr").hide();
				$(".excelShow").show();
				if ($('#swfl').find('option[value="2"]').length == 0) {
					$('#swfl').find('option[value="1"]').after("<option value='2'>允许单sheet页成功</option>");
				}
			} else if(selectVal == "2"){ // DTO实体类
				$("#dtoClazzTr").show();
				$(".excelShow").hide();
				$('#swfl').find('option[value="2"]').remove();
			}
		});
	</script>
</body>
</html>