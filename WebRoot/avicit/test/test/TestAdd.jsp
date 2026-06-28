<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,table";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/test/test/testController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="test1">TEST1:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="test1"  id="test1" />
   					</td>
				</tr>
			</table>
		</form>
	<!-- 子表表格 -->
	<div id="tableToolbar" class="toolbar">
		<div class="toolbar-left">
			<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test1Edit_button_add" permissionDes="添加">
				<a id="test1Edit_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
			</sec:accesscontrollist>
			<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test1Edit_button_del" permissionDes="删除">
				<a id="test1Edit_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
			</sec:accesscontrollist>
		</div>
	</div>
	<table id="test1EditJqGrid"></table>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="test_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="test_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script src="avicit/test/test1/js/Test1Edit.js" type="text/javascript"></script>
	<script type="text/javascript">
		//遮罩
		var maskId = null;
		//初始化时间控件
		var test1Edit;
		var test2Data = ${test2Data};
		function initDateSelect(){
			$('.date-picker').datepicker({
				beforeShow: function(selectedDate) {
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
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
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		}
	
		function closeForm(){
			parent.test.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
			//先进行子表校验,通过时再保存
			var msg = test1Edit.dataValidte();
			if(msg && msg != ""){
                layer.alert(msg, {
                    icon : 7,
                    area : [ '400px', '' ], //宽高
                    closeBtn : 0,
                    btn : [ '关闭' ],
                    title : "提示"
                });
                return false;
            }
            //获取子表数据
            var test1Data = test1Edit.getEditData();
			//限制保存按钮多次点击
			$('#test_saveForm').addClass('disabled').unbind("click");
			parent.test.save($('#form'), "insert", test1Data, new Array());
		}

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

		$(document).ready(function () {
			initDateSelect();

			var test1DataEditGridColModel =  [
				{
					label : 'id',
					name : 'id',
					key : true,
					width : 75,
					hidden : true
				},
                {
                    label: 'TEST2Id',
                    name: 'test2',
                    width: 150,
                    hidden : true
                },
                {
                    label: 'TEST2',
                    name: 'test2Name',
                    width: 150,
                    editable:true,
                    edittype:"custom",
                    editoptions: {
                        custom_element:selectElem,
                        custom_value:selectValue,
                        forId:'test2',
                        value: test2Data
                    }
                },
                {
                    label : 'TEST3',
                    name : 'test3',
                    formatter : format,
                    editable:true,
                    edittype:'custom',
                    editoptions:{
                    custom_element:dateElem,
                    custom_value:dateValue
                    }
                }
            ];
			
			test1Edit= new Test1Edit('test1EditJqGrid','${test1EditUrl}',test1DataEditGridColModel,'');

			parent.test.formValidate($('#form'));
			//保存按钮绑定事件
			$('#test_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#test_closeForm').bind('click', function(){
				closeForm();
			});
			
			//添加按钮绑定事件
			$('#test1Edit_insert').bind('click', function(){
				test1Edit.insert();
			});
			//删除按钮绑定事件
			$('#test1Edit_del').bind('click', function(){
				test1Edit.del();
			});
			
			

		});
	</script>
</body>
</html>

