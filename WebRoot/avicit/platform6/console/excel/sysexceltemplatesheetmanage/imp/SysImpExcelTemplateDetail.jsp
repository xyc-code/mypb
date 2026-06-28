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
<HEAD>
<title>详细</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
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
<body class="easyui-layout">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id"
				value="<c:out  value='${sysImpTemplateDTO.id}'/>" />
			<input type="hidden" name="type" value="${sysImpTemplateDTO.type}">
			<table class="form_commonTable">
				<tr>
					<th width="10%"><label for="code"><i class="required">*</i>编码:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="code" id="code" readonly="readonly"
						value="<c:out value='${sysImpTemplateDTO.code}'/>" /></td>
					<th width="10%"><label for="name"><i class="required">*</i>名称:<i class="tips-iconhelp icon iconfont icon-question-circle" id="sysTemplateNameTips"></i></label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="name" id="name" readonly="readonly"
						value="<c:out value='${sysImpTemplateDTO.name}'/>" />
					</td>
				</tr>
				<tr>
					<th width="10%"><label for="swfl">事务控制方式:</label></th>
					<td width="39%"><pt6:h5select
							css_class="form-control input-sm" name="swfl" id="swfl" title=""
							isNull="true" lookupCode="SWFL_CONTROL"
							defaultValue='${sysImpTemplateDTO.swfl}' /></td>
					<th width="10%" style="word-break: break-all; word-warp: break-word;"><label for="manageStyle"><i class="required">*</i>配置方式:</label></th>
					<td width="39%">
						<label class="radio-inline"> <input name="manageStyle" title="Excel模板" type="radio" value="1" >Excel模板</label>
						<label class="radio-inline"> <input name="manageStyle" title="DTO实体类" type="radio" value="2">DTO实体类</label>
					</td>
				</tr>
				<tr id="dtoClazzTr">
					<th width="10%"><label for="dtoClazz"><i class="required">*</i>实体类:</label></th>
					<td width="39%">
						<div class="input-group input-group-sm">
							<input class="form-control input-sm" type="text" name="dtoClazz" id="dtoClazz" value="<c:out  value='${sysImpTemplateDTO.dtoClazz}'/>"/>
							<span class="input-group-addon" id="dataSourceBtn"><i class="glyphicon glyphicon-th-list"></i></span>
						</div>
					</td>
				</tr>
				<tr class="excelShow">
					<th width="10%"><label for="userClass">用户自定义处理类:</label></th>
					<td width="39%"><input class="form-control input-sm"
										   type="text" name="userClass" id="userClass" readonly="readonly"
										   value="<c:out value='${sysImpTemplateDTO.userClass}'/>" /></td>

					<th width="10%"><label for="attachment">Excel模板:</label></th>
					<td width="39%">
						<div id="attachment"></div>
					</td>
				</tr>
				<tr>
					<th width="10%"><label for="bz">描述:</label></th>
					<td width="39%" colspan="3"><textarea rows="2" class="form-control input-sm"
										   type="text" name="bz" id="bz" readonly="readonly">${sysImpTemplateDTO.bz}</textarea></td>
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
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		//关闭Dialog
		function closeForm() {
			parent.sysImpTemplate.closeDialog();
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
		//加载完后初始化
		$(document).ready(function() {
			//初始化附件上传组件
			$('#attachment').uploaderExt({
				formId : '${sysImpTemplateDTO.id}',
				allowAdd : false,
				allowDelete : false
			});
			//返回按钮绑定事件
			$('#returnButton').bind('click', function() {
				closeForm();
			});
			//form控件禁用
			setFormDisabled();
			$(document).keydown(function(event) {
				event.returnValue = false;
				return false;
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
			$.each($('input:radio[name="manageStyle"]'),function(index,data){
				var currentVal = data.value;
				if(currentVal == manageStyle){
					$(data).attr("checked","checked");
				}
			});
			initTips();

		});
	</script>
</body>
</html>