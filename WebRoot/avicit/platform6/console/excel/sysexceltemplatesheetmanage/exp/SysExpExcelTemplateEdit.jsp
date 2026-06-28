<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="${sysImpTemplateDTO.id}"/>
			<input type="hidden" name="type" value="${sysImpTemplateDTO.type}"/>
			<input type="hidden" name="version" value="${sysImpTemplateDTO.version}"/>
			<table class="form_commonTable">
				<tr>
					<th width="10%"><label for="code">编码:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="code" id="code" value="${sysImpTemplateDTO.code}"/></td>
					<th width="10%"><label for="name">名称:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="name" id="name" value="${sysImpTemplateDTO.name}"/></td>
				</tr>
				<tr>
					<th width="10%"><label for="dtoClazz">实体类:</label></th>
					<td width="39%" colspan="3">
						<div class="input-group input-group-sm" style="width:100%;">
							<input class="form-control input-sm" type="text" name="dtoClazz" id="dtoClazz" value="${sysImpTemplateDTO.dtoClazz}"/>
							<span class="input-group-addon" id="dataSourceBtn"><i class="glyphicon glyphicon-th-list"></i></span>
						</div>
					</td>
				</tr>
                <tr class="titleTr">
                    <th width="10%"><label for="isShowTitle">是否显示标题:</label></th>
                    <td width="39%">
                        <label class="radio-inline"> <input name="isShowTitle" title="是" type="radio" value="1">是</label>
                        <label class="radio-inline"> <input name="isShowTitle" title="否" type="radio" value="0">否</label>
                    </td>
                    <th width="10%"><label for="title">标题:</label></th>
                    <td width="39%"><input class="form-control input-sm"  type="text" name="title" id="title" value="${sysImpTemplateDTO.title}"/></td>
                </tr>
                <tr>
					<th width="10%"><label for="bz">描述:</label></th>
					<td width="39%" colspan="3"><textarea class="form-control input-sm" rows="5"  type="text" name="bz" id="bz">${sysImpTemplateDTO.bz}</textarea></td>
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
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		// 关闭Dialog
		function closeForm() {
			parent.sysExpTemplate.closeDialog('edit');
		}

		// 保存表单
		function saveForm() {
			var isValidate = $("#form").validate();
			if (!isValidate.checkForm()) {
				isValidate.showErrors();
				return false;
			}

			parent.sysExpTemplate.save($('#form'),"edit", "saveButtonEdit");
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

			//绑定表单验证规则
			parent.sysExpTemplate.formValidate($('#form'));

			//保存按钮绑定事件
			$('#saveButtonEdit').bind('click', function() {
				saveForm();
			});

			//返回按钮绑定事件
			$('#returnButton').bind('click', function() {
				closeForm();
			});

		});

		$("#clazzselect").bind("click", function() {
			var url = "platform6/msystem/excel/template/sysExpExcelTempalteController/operation/getDtoList";
			lay_select_icon =  layer.open({
				id:"selectIcon",
				type : 2,
				title: '图标选择',
				skin: 'index-model-noborder',
				move :'.simple-movetab',
				area: ['800px', '420px'],
				content : url,
				btn: ['清空图标'],
				success:function(){
					var frameId=document.getElementById('selectIcon').getElementsByTagName("iframe")[0].id;
					$('#'+frameId)[0].contentWindow.$("#cytb").hide();
					$('#'+frameId)[0].contentWindow.$("#faIconTab").hide();
					parent.redrawTreePseudoEl();
				},
				yes: function(index, layero) {
					setIconInfo("");
				}
			});
		});

		//选择实体类
		$('#dtoClazz').on('click', function() {
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
        $("input[name='isShowTitle']").on("click",function(){
            var selectVal = this.value;
            if(selectVal == "1"){ // 显示标题
                $(".titleTr").find("th:eq(1)").show();
                $(".titleTr").find("td:eq(1)").show();
            } else if(selectVal == "0"){ // 不显示标题
                $(".titleTr").find("th:eq(1)").hide();
                $(".titleTr").find("td:eq(1)").hide();
                $("#title").val("");
            }
        });

        $("input[name='isShowTitle']").each(function(i,n){
            if(n.value == "${sysImpTemplateDTO.isShowTitle}"){
                $(this).click();
            }
        });
	</script>
</body>
</html>