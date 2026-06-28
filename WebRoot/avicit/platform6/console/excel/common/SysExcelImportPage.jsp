<%@ page language="java" contentType="text/html; charset=utf-8"
		 pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
	String importlibs = "common,form,table,fileupload";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据导入</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
	<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<style type="text/css">
		div#t_dgSysExcelRecord{
			display: none;
		}
		div#t_dgSysExcelError {
			display: none;
		}
	</style>

	<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
<script src="static/js/platform/component/jQuery/jquery-easyui-1.3.5/jquery.easyui.min.js" type="text/javascript"></script>
<script src="avicit/platform6/console/excel/sysexcelerrormanage/js/SysExcelError.js" type="text/javascript"></script>
<script src="avicit/platform6/console/excel/sysexcelrecordmanage/js/SysExcelRecord.js" type="text/javascript"></script>
<script type="text/javascript">
var templateCode = "${templateCode}";
var manageStyle = "${manageStyle}";
	var sysExcelRecord;
	var sysExcelError;
	$(function () {
		if (manageStyle && manageStyle.length > 0) {
			var logGridColModel = [
				{label : '表主键id',name : 'id',key : true,width : 75,hidden : true},
				{label : '执行人',name : 'executeUserName',width : 80},
				{label : '执行时间',name : 'executeTime',width : 80},
				{label : '是否成功',name : 'resultFlag',width : 80, editoptions: {value : "Y:是;N:否"},formatter:formatterUrlValue},
				{label : '成功数',name : 'successNum', width: 80},
				{label : '失败数',name : 'failNum', width: 80},
				{label : '错误日志',name : 'errorLog',width : 80},
			];

			var logMsgGridColModel = [
				{label : '表主键',name : 'id',key : true,hidden : true},
				{label : '行号',name : 'errorRowNo', width: 40},
				{label : 'SHEET页名称',name : 'sheetName', width: 40},
				{label : '错误类型',name : 'errorType',width : 80, editoptions: {value : "0:校验错误;1:数据转换错误;2:保存错误"},formatter:formatterValueErrorType},
				{label : 'EXCEL行数据',name : 'errorRowData',width : 80},
				{label : '错误信息',name : 'errorMsg',width : 80},
			];

			sysExcelRecord = new SysExcelRecord('dgSysExcelRecord', 'platform6/msystem/excel/record/sysExcelRecordController/operation/', 'sysExcelImportForm', logGridColModel, templateCode);

			sysExcelError = new SysExcelError('dgSysExcelError', 'platform6/msystem/excel/record/sysExcelRecordController/operation/', logMsgGridColModel);
		} else {
			$('.easyui-layout').empty();
			var elemDiv = '<div class="unselected-div" style="width:400px; height:140px; padding-top:10%; clear:both; margin:0 auto;" id="unselected-div-left"><img style="margin: 0 auto;display: block;" src="static/h5/common-ext/userUnselected.png" />' +
					'<span class="unselected-div-title" style="margin: 5px auto;font-size: 14px;color:#989898;display: block;text-align: center;">未找到编码【' + templateCode + '】对应配置！</span>' +
					'</div>';
			$('.easyui-layout').append(elemDiv);
		}

	});
	/**
	 * 启用遮罩
	 */
	function doShowLoading(){
		return top.layer.msg('正在导入……', {icon: 16,shade: [0.3, '#000000'],scrollbar: false, time:400000}) ;//弹出遮罩
	}
	/**
	 * 隐藏遮罩
	 */
	function doHideLoading(handle){
		top.layer.close(handle);
	}
	//下载模版
	function downloadTemplate(){
		if(!templateCode){
			layer.alert('配置编码【templateCode】不能为空！', {
				icon : 7,
				area : [ '400px', '' ],
				closeBtn : 0,
				btn : [ '关闭' ],
				title : "提示"
			});
			return false;
		}		
		if (manageStyle == 1) {//Excel方式
			$.ajax({
				type : 'POST',
				dataType : 'JSON',
				url : 'platform6/msystem/excel/template/sysImpExcelTemplateController/getExcelInfoByCode',
				data : {
					'templateCode' : templateCode
				},
				success : function(r) {
					if(r.map != null){
						if(r.map.FORMTABLE==0){
							r.map.FORMTABLE='';
						}
						//下载功能实现
						downloadFile(r.map.FILEDID,r.map.FORMID,r.map.FORMTABLE,true);
					}else{
						layer.alert('未找到模板，请检查配置！', {
							icon : 7,
							area : [ '400px', '' ],
							closeBtn : 0,
							btn : [ '关闭' ],
							title : "提示"
						});
					}
				}
			});
		}else if (manageStyle == 2) {//DTO方式
			var url = 'platform6/msystem/excel/imp/sysExcelImpController/download/template/'+templateCode;
			createDownIframe();
			$("#downloadIframe").attr("src", url);
		}
	}

	function downloadFile(fileId,formId,formTable,save_type){
		//window.location.href = "http://portal.da.net/pb//platform/swfUploadController/doDownload?fileuploadBusinessId="+formId+"&fileuploadBusinessTableName="+formTable+"&fileuploadIsSaveToDatabase="+save_type+"&encryption&fileId="+fileId;
		window.location.href = window.location.href.substring(0,window.location.href.indexOf("platform"))+"platform/swfUploadController/doDownload?fileuploadBusinessId="+formId+"&fileuploadBusinessTableName="+formTable+"&fileuploadIsSaveToDatabase="+save_type+"&encryption&fileId="+fileId;		
	}
	//FIXME 解决IE8下，浏览器不支持json，导入时下载json问题 20230919 start
    /**
     * 解决IE8下，浏览器不支持json，导入时下载json问题 20230919
     */
    function afertImport (data){
        debugger;
        var handle = doShowLoading();
        var r =data;
        if(r.flag="success"){
            doHideLoading(handle);
            if (data.flag === "success") {
                layer.msg(data.msg, { icon: 6, time: 3000});
            }else{
                $('#mdsExcelErrorLogText').val(data.error);
                var msg = '<div>导入失败，详情请查看导入日志！</div><div style="text-align: right;padding: 10px 30px;"></div>';
                layer.alert(msg, {
                    icon : 7,
                    area : [ '400px', '' ],
                    closeBtn : 0,
                    btn : [ '关闭' ],
                    title : "提示"
                });
            }
            clearUploadfile();
            sysExcelRecord.reLoad();
        }
        d_click = true;
    }

    //FIXME 解决IE8下，浏览器不支持json，导入时下载json问题 20230919 end

	//上传文件
	function importExcel(){
		if(templateCode==""){
			layer.alert('导入标识【templateCode】值为空！', {
				icon : 7,
				area : [ '400px', '' ],
				closeBtn : 0,
				btn : [ '关闭' ],
				title : "提示"
			});
			return false;
		}
		var fileValue = document.getElementById("uploadfile").value.toLowerCase();
		if(fileValue == ""){
			layer.alert('请选择导入文件！', {
				icon : 7,
				area : [ '400px', '' ],
				closeBtn : 0,
				btn : [ '关闭' ],
				title : "提示"
			});
			return false;
		}
		var fileIndex = fileValue.lastIndexOf(".");
		var fileType=fileValue.substr(fileIndex+1);
		//后缀为xlsx,xls
		if(fileType!='xlsx'&&fileType!='xls'){
			layer.alert('只支持EXCEL文件的导入！', {
				icon : 7,
				area : [ '400px', '' ],
				closeBtn : 0,
				btn : [ '关闭' ],
				title : "提示"
			});
			return false;
		}
		var handle = doShowLoading();
		var url = "platform6/msystem/excel/imp/sysExcelImpController/import/"+templateCode;
		$('#sysExcelImportForm').form('submit', {
			url:url,
		/* 	onSubmit: function(param) {
				// if(parent.excelUserExtdata){
				// 	param.userExtdata = parent.excelUserExtdata;
				// }
			},
			success:function(result){
				doHideLoading(handle);
		    	var data = eval('(' + result + ')');
				if (data.flag === "success") {
					layer.msg(data.msg, { icon: 6, time: 3000});
				}else{
					$('#mdsExcelErrorLogText').val(data.error);
					var msg = '<div>导入失败，详情请查看导入日志！</div><div style="text-align: right;padding: 10px 30px;"></div>';
					layer.alert(msg, {
						icon : 7,
						area : [ '400px', '' ],
						closeBtn : 0,
						btn : [ '关闭' ],
						title : "提示"
					});
				}
				clearUploadfile();
				sysExcelRecord.reLoad();
		    } */
		});
	}
	//清空文件控件的值
	function clearUploadfile(){
		 var uploadfileObj = document.getElementById("uploadfile");
		 var parentObj=uploadfileObj.parentElement;
		 parentObj.innerHTML=uploadfileObj.outerHTML;
	}
	//生成iframe
	function createDownIframe(){
		if($("#downloadIframe").length == 0){
			$(document.body).append("<iframe id='downloadIframe' name='downloadIframe' style='width: 10px;height: 10px;display: none;'></iframe>");
		}
	}
	//根据业务需求删除下载模版
	function removeTemplateCodeAttr(templateCodeArr){
		for(var i = 0;i<templateCodeArr.length;i++){
			if(templateCodeArr[i]==templateCode){
				$(".form_commonTable tr td:eq(0)").css("display","none");
			}	
		}		
	}

	//日志信息详情
	function logDetail(rowIndex) {
		initLogWin();
		var rows = mdsExcelRecord._datagrid.datagrid("getRows");
		var row = rows[rowIndex];
		$('#mdsExcelErrorLogText').val(row.errorLog);
		$('#mdsExcelErrorLogWin').window('open');
	}

	function formatterUrlValue(value, options, rowObject) {
		if('Y' == value){
			return '成功';
		} else if ("N" == value) {
			if(rowObject.fileUrl) {
				return "<span style='color:red;cursor:pointer;'onclick='downLoadFile(\"" + rowObject.fileUrl + "\");'>失败【查看】</span>";
			} else {
				return "失败";
			}
		}
		return "";
	}

	function formatterValueYN(value) {
		if('Y' == value){
			return '成功';
		} else if ("N" == value) {
			return '失败';
		} else {
			return '';
		}
	}

	function formatterValueErrorType(value) {
		if('0' == value){
			return '校验错误';
		} else if ('1' == value) {
			return '数据转换错误';
		} else if ('2' == value) {
			return '保存错误';
		} else {
			return '';
		}
	}

	function downLoadFile(value){
		var url = "platform6/msystem/excel/imp/sysExcelImpController/downErrorFile?fileName=" + value + "&downType=jq";
		var t = new DownLoad4URL('iframe', 'form', null, url);
		t.downLoad();
	}
	/**
	 * 模拟ajax导出
	 * 无弹出框,post提交无参数限制
	 * @param iframeId
	 * @param formId
	 * @param headData
	 */
	function DownLoad4URL(iframeId, formId, headData, actionUrl) {
		//设置是否显示遮罩Iframe
		if (typeof(iframeId) !== 'string' && iframeId.trim() !== '') {
			throw new Error("iframeId不能为空！");
		}

		//设置是否显示遮罩Iframe
		if (typeof(formId) !== 'string' && formId.trim() !== '') {
			throw new Error("formId不能为空！");
		}
		this.iframeName = "_iframe_" + iframeId;
		this.formName = "_form_" + formId;
		this.doc = document;//缓存全局对象，提高效率
		this.createDom.call(this, headData, actionUrl);
	};
	DownLoad4URL.prototype.downLoad = function () {
		this.doc.getElementById(this.formName).submit();
	};
	DownLoad4URL.prototype.createDom = function (headData, url) {
		//先销毁对象，再创建
		if (jQuery("#" + this.iframeName).length > 0) {
			jQuery("#" + this.iframeName).remove();

		}

		//先销毁对象，再创建
		if (jQuery("#" + this.formName).length > 0) {
			jQuery("#" + this.formName).remove();
		}
		if (jQuery("#" + this.iframeName).length == 0) {
			var exportIframe = this.doc.createElement("iframe");
			exportIframe.id = this.iframeName;
			exportIframe.name = this.iframeName;
			exportIframe.style.display = 'none';
			this.doc.body.appendChild(exportIframe);
			//创建form
			var exportForm = this.doc.createElement("form");
			exportForm.method = 'post';

			exportForm.action = url;
			exportForm.name = this.formName;
			exportForm.id = this.formName;
			exportForm.target = this.iframeName;
			this.doc.body.appendChild(exportForm);
			if (headData && typeof(headData) === 'object') {
				for (var key in headData) {
					var headInput = this.doc.createElement("input");
					headInput.setAttribute("name", key);
					headInput.setAttribute("type", "text");
					if (typeof(headData[key]) == 'string') {
						headInput.setAttribute("value", headData[key]);
					} else {
						var jsonStr = JSON.stringify(headData[key]);
						headInput.setAttribute("value", jsonStr);
					}
					exportForm.appendChild(headInput);
				}
			}
		}
	};
	$(document).ready(function (){
		removeTemplateCodeAttr(["wxcgsbdc","tjdsbdr"]);	
	})
	
</script>
</head>

<body class="easyui-layout" fit="true">
	<div data-options="region:'north',collapsed:false" style="height:50px;" class="datagrid-toolbar">
		<form id="sysExcelImportForm" enctype="multipart/form-data" method="post">
			<input type="hidden" name="templateCode" value="${templateCode}"/>
			<table class="form_commonTable" style="margin: 0;">
				<tr>
					<td align="right" style="width: 85px;">
						<a style="margin-right: 0;" class="btn btn-primary form-tool-btn btn-sm btn-point" iconCls="icon-download" plain="true" onclick="downloadTemplate();" href="javascript:void(0);"><i class="glyphicon glyphicon-download"></i>下载模板</a>
					</td>
					<td align="right" style="width: 75px;">
						<a style="margin-right: 0;" id="importButton" class="btn btn-primary form-tool-btn btn-sm" iconCls="icon-import" onclick="importExcel();" href="javascript:void(0);"><i class="icon icon-daoru"></i>导入</a>
					</td>
					<td>
						<input type=file name="uploadfile" id="uploadfile">
					</td>
				</tr>
			</table>
		</form>
	</div>
	<div id="panelcenter" data-options="region:'center',onResize:function(a){$('#jqGridrole').setGridWidth(a);$(window).trigger('resize');}">
		<table id="dgSysExcelRecord"></table>
		<div id="logPager"></div>
	</div>
	<div id="paneleast" data-options="region:'east',split:true,width:fixwidth(.5),onResize:function(a){$('#jqGrid').setGridWidth(a);$(window).trigger('resize');}">
		<table id="dgSysExcelError"></table>
		<div id="errorMsgPager"></div>
	</div>
</body>
</html>