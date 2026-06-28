<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/platform6/msystem/sysLookupHiberarchy/sysLookupHiberarchyController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<link rel="stylesheet" type="text/css" href="static/h5/select2/select2.css"/>
<style>

	/*修改select2选中后边框颜色*/
	.select2-container--default .select2-search--dropdown .select2-search__field {
		border: 1px solid #D9D9D9;
		outline: none;
		width: 100% !important;
	}

	.select2-container .select2-selection--single {
		box-sizing: border-box;
		cursor: pointer;
		display: block;
		height: 30px;
		user-select: none;
		-webkit-user-select: none;
		outline: none;
		background-color: #FAFAFA !important;
	}
	.select2-container--default .select2-selection--single{
		border: 1px solid #D9D9D9;
		width: 100% !important;
	}
</style>
</head>
<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
	<form id='form'>
		<input type="hidden" name="id" />
		<table class="form_commonTable">
			<tr>
				<th>
					<label for="parentTypeValue">父级节点名称:</label></th>
				<td>
					<input title="父节点名称" class="form-control input-sm" type="text" name="parentTypeValue" id="parentTypeValue" value="<c:out  value='${parentTypeValue}'/>" readonly="readonly"/>
					<input type="hidden" name="parentId" value="<c:out  value='${parentId}'/>" />
				</td>
				<th>
					<label for="typeValue">代码名称:</label></th>
				<td>
					<input class="form-control input-sm" type="text" name="typeValue"  id="typeValue" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="systemFlag">使用级别:</label></th>
				<td>
					<pt6:h5select defaultValue="0" css_class="form-control input-sm" name="systemFlag" id="systemFlag" title="" isNull="true" lookupCode="PLATFORM_USAGE_MODIFIER" />
				</td>
				<th>
					<label for="validFlag">有效标识:</label></th>
				<td>
					<pt6:h5select defaultValue="1" css_class="form-control input-sm" name="validFlag" id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" />
				</td>
				<%--<th>
					<label for="typeKey">系统代码值:</label></th>
				<td>
					<input class="form-control input-sm" type="text" name="typeKey"  id="typeKey" />
				</td>--%>
			</tr>
			<tr>
				<th>
					<label for="treeSort">节点当前排序:</label></th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="treeSort" id="treeSort" data-min="-9999999999" data-max="9999999999" data-step="1" data-precision="0" value="${ treesort }">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th width="10%">
					<label for="sysLanguageCode">多语言 :</label></th>
				<td width="39%">
					<%--<input class="form-control input-sm" type="text" name="sysLanguageCode"  id="sysLanguageCode" />--%>
					<select class="form-control input-sm" name="sysLanguageCode"  id="sysLanguageCode">
					</select>
				</td>
			</tr>
			<tr>
				<th width="10%">
					<label for="remark">备注:</label></th>
				<td width="39%" colspan="3">
					<textarea class="form-control" rows="3" name="remark"  id="remark"></textarea>
				</td>
			</tr>
			<%--<tr>
				<c:if test="${showType eq 'show'}">
					<th width="10%">
						<label for="lookupType">系统代码类型:</label></th>
					<td width="39%">
						<input class="form-control input-sm" type="text" name="lookupType"  id="lookupType" />
					</td>
				</c:if>
			</tr>--%>
		</table>
	</form>
</div>
<div data-options="region:'south',border:false" style="height: 60px;">
	<div id="toolbar"
		class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
		<table class="tableForm" style="border:0;cellspacing:1;width:100%">
			<tr>
				<td width="50%" style="padding-right:4%;" align="right">
					<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="sysLookupHiberarchy_saveForm">保存</a>
					<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="sysLookupHiberarchy_closeForm">返回</a>
				</td>
			</tr>
		</table>
	</div>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="static/h5/select2/select2.js"></script>
<script type="text/javascript">
	//遮罩
	var maskId = null;
	//初始化时间控件
	function initDateSelect(){
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
		$('.date-picker').on('keydown',nullInput);
		$('.time-picker').on('keydown',nullInput);
	}
	
	function closeForm(){
		parent.newSysLookupHiberarchy.closeDialog("add");
	}
		
	function saveForm(){
		var isValidate = $("#form").validate();
		if (!isValidate.checkForm()) {
			isValidate.showErrors();
			return false;
		}
		//限制保存按钮多次点击
		$('#sysLookupHiberarchy_saveForm').addClass('disabled').unbind("click");
		parent.newSysLookupHiberarchy.save($('#form'), 'add');
	}

	//清空日期值
	function clearCommonSelectValue(element) {
		$(element).siblings("input").val("");
	}

	$(document).ready(function () {
		initDateSelect();
		parent.newSysLookupHiberarchy.formValidate($('#form'));
		//保存按钮绑定事件
		$('#sysLookupHiberarchy_saveForm').bind('click', function(){
			saveForm();
		});

		//返回按钮绑定事件
		$('#sysLookupHiberarchy_closeForm').bind('click', function(){
			closeForm();
		});
		//语言数据
        var optionVals = [{"text":"日文 (日本)","id":"ja_JP"},{"text":"西班牙文 (秘鲁)","id":"es_PE"},{"text":"英文","id":"en"},{"text":"日文 (日本,JP)","id":"ja_JP_JP"},{"text":"西班牙文 (巴拿马)","id":"es_PA"},{"text":"塞尔维亚文 (波斯尼亚和黑山共和国)","id":"sr_BA"},{"text":"马其顿文","id":"mk"},{"text":"西班牙文 (危地马拉)","id":"es_GT"},{"text":"阿拉伯文 (阿拉伯联合酋长国)","id":"ar_AE"},{"text":"挪威文 (挪威)","id":"no_NO"},{"text":"阿尔巴尼亚文 (阿尔巴尼亚)","id":"sq_AL"},{"text":"保加利亚文","id":"bg"},{"text":"阿拉伯文 (伊拉克)","id":"ar_IQ"},{"text":"阿拉伯文 (也门)","id":"ar_YE"},{"text":"匈牙利文","id":"hu"},{"text":"葡萄牙文 (葡萄牙)","id":"pt_PT"},{"text":"希腊文 (塞浦路斯)","id":"el_CY"},{"text":"阿拉伯文 (卡塔尔)","id":"ar_QA"},{"text":"马其顿文 (马其顿王国)","id":"mk_MK"},{"text":"瑞典文","id":"sv"},{"text":"德文 (瑞士)","id":"de_CH"},{"text":"英文 (美国)","id":"en_US"},{"text":"芬兰文 (芬兰)","id":"fi_FI"},{"text":"冰岛文","id":"is"},{"text":"捷克文","id":"cs"},{"text":"英文 (马耳他)","id":"en_MT"},{"text":"斯洛文尼亚文 (斯洛文尼亚)","id":"sl_SI"},{"text":"斯洛伐克文 (斯洛伐克)","id":"sk_SK"},{"text":"意大利文","id":"it"},{"text":"土耳其文 (土耳其)","id":"tr_TR"},{"text":"中文","id":"zh"},{"text":"泰文","id":"th"},{"text":"阿拉伯文 (沙特阿拉伯)","id":"ar_SA"},{"text":"挪威文","id":"no"},{"text":"英文 (英国)","id":"en_GB"},{"text":"塞尔维亚文 (塞尔维亚及黑山)","id":"sr_CS"},{"text":"立陶宛文","id":"lt"},{"text":"罗马尼亚文","id":"ro"},{"text":"英文 (新西兰)","id":"en_NZ"},{"text":"挪威文 (挪威,Nynorsk)","id":"no_NO_NY"},{"text":"立陶宛文 (立陶宛)","id":"lt_LT"},{"text":"西班牙文 (尼加拉瓜)","id":"es_NI"},{"text":"荷兰文","id":"nl"},{"text":"爱尔兰文 (爱尔兰)","id":"ga_IE"},{"text":"法文 (比利时)","id":"fr_BE"},{"text":"西班牙文 (西班牙)","id":"es_ES"},{"text":"阿拉伯文 (黎巴嫩)","id":"ar_LB"},{"text":"朝鲜文","id":"ko"},{"text":"法文 (加拿大)","id":"fr_CA"},{"text":"爱沙尼亚文 (爱沙尼亚)","id":"et_EE"},{"text":"阿拉伯文 (科威特)","id":"ar_KW"},{"text":"塞尔维亚文 (塞尔维亚)","id":"sr_RS"},{"text":"西班牙文 (美国)","id":"es_US"},{"text":"西班牙文 (墨西哥)","id":"es_MX"},{"text":"阿拉伯文 (苏丹)","id":"ar_SD"},{"text":"印度尼西亚文 (印度尼西亚)","id":"in_ID"},{"text":"俄文","id":"ru"},{"text":"拉托维亚文(列托)","id":"lv"},{"text":"西班牙文 (乌拉圭)","id":"es_UY"},{"text":"拉托维亚文(列托) (拉脱维亚)","id":"lv_LV"},{"text":"希伯来文","id":"iw"},{"text":"葡萄牙文 (巴西)","id":"pt_BR"},{"text":"阿拉伯文 (叙利亚)","id":"ar_SY"},{"text":"克罗地亚文","id":"hr"},{"text":"爱沙尼亚文","id":"et"},{"text":"西班牙文 (多米尼加共和国)","id":"es_DO"},{"text":"法文 (瑞士)","id":"fr_CH"},{"text":"印地文 (印度)","id":"hi_IN"},{"text":"西班牙文 (委内瑞拉)","id":"es_VE"},{"text":"阿拉伯文 (巴林)","id":"ar_BH"},{"text":"英文 (菲律宾)","id":"en_PH"},{"text":"阿拉伯文 (突尼斯)","id":"ar_TN"},{"text":"芬兰文","id":"fi"},{"text":"德文 (奥地利)","id":"de_AT"},{"text":"西班牙文","id":"es"},{"text":"荷兰文 (荷兰)","id":"nl_NL"},{"text":"西班牙文 (厄瓜多尔)","id":"es_EC"},{"text":"中文 (台湾地区)","id":"zh_TW"},{"text":"阿拉伯文 (约旦)","id":"ar_JO"},{"text":"白俄罗斯文","id":"be"},{"text":"冰岛文 (冰岛)","id":"is_IS"},{"text":"西班牙文 (哥伦比亚)","id":"es_CO"},{"text":"西班牙文 (哥斯达黎加)","id":"es_CR"},{"text":"西班牙文 (智利)","id":"es_CL"},{"text":"阿拉伯文 (埃及)","id":"ar_EG"},{"text":"英文 (南非)","id":"en_ZA"},{"text":"泰文 (泰国)","id":"th_TH"},{"text":"希腊文 (希腊)","id":"el_GR"},{"text":"意大利文 (意大利)","id":"it_IT"},{"text":"加泰罗尼亚文","id":"ca"},{"text":"匈牙利文 (匈牙利)","id":"hu_HU"},{"text":"法文","id":"fr"},{"text":"英文 (爱尔兰)","id":"en_IE"},{"text":"乌克兰文 (乌克兰)","id":"uk_UA"},{"text":"波兰文 (波兰)","id":"pl_PL"},{"text":"法文 (卢森堡)","id":"fr_LU"},{"text":"荷兰文 (比利时)","id":"nl_BE"},{"text":"英文 (印度)","id":"en_IN"},{"text":"加泰罗尼亚文 (西班牙)","id":"ca_ES"},{"text":"阿拉伯文 (摩洛哥)","id":"ar_MA"},{"text":"西班牙文 (玻利维亚)","id":"es_BO"},{"text":"英文 (澳大利亚)","id":"en_AU"},{"text":"塞尔维亚文","id":"sr"},{"text":"中文 (新加坡)","id":"zh_SG"},{"text":"葡萄牙文","id":"pt"},{"text":"乌克兰文","id":"uk"},{"text":"西班牙文 (萨尔瓦多)","id":"es_SV"},{"text":"俄文 (俄罗斯)","id":"ru_RU"},{"text":"朝鲜文 (韩国)","id":"ko_KR"},{"text":"越南文","id":"vi"},{"text":"阿拉伯文 (阿尔及利亚)","id":"ar_DZ"},{"text":"越南文 (越南)","id":"vi_VN"},{"text":"塞尔维亚文 (黑山)","id":"sr_ME"},{"text":"阿尔巴尼亚文","id":"sq"},{"text":"阿拉伯文 (利比亚)","id":"ar_LY"},{"text":"阿拉伯文","id":"ar"},{"text":"中文 (中国)","id":"zh_CN",selected: true},{"text":"白俄罗斯文 (白俄罗斯)","id":"be_BY"},{"text":"中文 (香港)","id":"zh_HK"},{"text":"日文","id":"ja"},{"text":"希伯来文 (以色列)","id":"iw_IL"},{"text":"保加利亚文 (保加利亚)","id":"bg_BG"},{"text":"印度尼西亚文","id":"in"},{"text":"马耳他文 (马耳他)","id":"mt_MT"},{"text":"西班牙文 (巴拉圭)","id":"es_PY"},{"text":"斯洛文尼亚文","id":"sl"},{"text":"法文 (法国)","id":"fr_FR"},{"text":"捷克文 (捷克共和国)","id":"cs_CZ"},{"text":"意大利文 (瑞士)","id":"it_CH"},{"text":"罗马尼亚文 (罗马尼亚)","id":"ro_RO"},{"text":"西班牙文 (波多黎哥)","id":"es_PR"},{"text":"英文 (加拿大)","id":"en_CA"},{"text":"德文 (德国)","id":"de_DE"},{"text":"爱尔兰文","id":"ga"},{"text":"德文 (卢森堡)","id":"de_LU"},{"text":"德文","id":"de"},{"text":"西班牙文 (阿根廷)","id":"es_AR"},{"text":"斯洛伐克文","id":"sk"},{"text":"马来文 (马来西亚)","id":"ms_MY"},{"text":"克罗地亚文 (克罗地亚)","id":"hr_HR"},{"text":"英文 (新加坡)","id":"en_SG"},{"text":"丹麦文","id":"da"},{"text":"马耳他文","id":"mt"},{"text":"波兰文","id":"pl"},{"text":"阿拉伯文 (阿曼)","id":"ar_OM"},{"text":"土耳其文","id":"tr"},{"text":"泰文 (泰国,TH)","id":"th_TH_TH"},{"text":"希腊文","id":"el"},{"text":"马来文","id":"ms"},{"text":"瑞典文 (瑞典)","id":"sv_SE"},{"text":"丹麦文 (丹麦)","id":"da_DK"},{"text":"西班牙文 (洪都拉斯)","id":"es_HN"}];
        //select2初始化
        $("#sysLanguageCode").select2({
            data : optionVals,
            disabled: 'disabled'
        });
	});
</script>
</body>
</html>
