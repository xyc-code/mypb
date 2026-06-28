<%@page import="avicit.platform6.core.rest.client.RestClientConfig"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="avicit.platform6.api.bpmbusiness.vo.HistoryTaskVo"%>
<%@page import="avicit.platform6.bpm.api.op.DocRightDefinition"%>
<%@page import="avicit.platform6.bpm.api.op.SubDocRightInterface"%>
<%@page import="avicit.platform6.bpmclient.bpm.service.BpmDisplayService"%>
<%@page import="avicit.platform6.bpm.api.BpmToolService"%>
<%@page import="avicit.platform6.api.session.SessionHelper"%>
<%@page import="avicit.platform6.core.spring.SpringFactory"%>
<%@page import="avicit.platform6.commons.utils.ComUtil"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@page import="java.util.*"%>
<%@ page import="avicit.platform6.core.properties.PlatformProperties"%>
<%@ page import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess"%>
<%
	String languageCode = (String)request.getSession().getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_LANGUAGE_CODE);
	if(languageCode == null){
		languageCode = "zh_CN";
	}
	//获取系统默认上传参数
	String defaultFileSizeLimit = ComUtil.replaceNull2Space(PlatformProperties.getProperty("platform.default.upload.fileSizeLimit"));
	String defaultfileTypes = ComUtil.replaceNull2Space(PlatformProperties.getProperty("platform.default.upload.fileTypes"));
	String defaultFileNumberLimit = ComUtil.replaceNull2Space(PlatformProperties.getProperty("platform.default.upload.fileNumberLimit"));
	String defaultSaveType = ComUtil.replaceNull2Space(PlatformProperties.getProperty("platform.default.upload.saveType"));
	String defaultFileStyle = ComUtil.replaceNull2Space(PlatformProperties.getProperty("platform.default.upload.fileStyle"));

	//获取单独上传参数
	String file_size_limit = ComUtil.replaceNull2Space(request.getParameter("file_size_limit"));
	String file_types = ComUtil.replaceNull2Space(request.getParameter("file_types"));
	String file_upload_limit = ComUtil.replaceNull2Space(request.getParameter("file_upload_limit"));
	String save_type = ComUtil.replaceNull2Space(request.getParameter("save_type"));
	String form_id = ComUtil.replaceNull2Space(request.getParameter("form_id"));
	String form_code = ComUtil.replaceNull2Space(request.getParameter("form_code"));
	String form_field = ComUtil.replaceNull2Space(request.getParameter("form_field"));
	String encryption = ComUtil.replaceNull2Space(request.getParameter("encryption"));
	//String allowAdd = ComUtil.replaceNull2Space(request.getParameter("allowAdd"));
	//String allowDel = ComUtil.replaceNull2Space(request.getParameter("allowDel"));
	String allowAdd = "process";
	String allowDel = "false";

	String collapsed = ComUtil.replaceNull2Space(request.getParameter("collapsed"));
	String bpm_nodeId = "";

	String entryId = ComUtil.replaceNull2Space(request.getParameter("entryId"));
	String executionId = ComUtil.replaceNull2Space(request.getParameter("executionId"));
	String taskId = ComUtil.replaceNull2Space(request.getParameter("taskId"));

	String appId = RestClientConfig.systemid;
	String lang = SessionHelper.getCurrentUserLanguageCode(request);
	String file_style = ComUtil.replaceNull2Space(request.getParameter("file_style"));//显示的样式
	String hiddenUploadBtn = ComUtil.replaceNull2Space(request.getParameter("hiddenUploadBtn"));

	//设置默认参数
	if("".equals(file_size_limit)){
		file_size_limit = defaultFileSizeLimit;
	}
	if("".equals(file_types)){
		file_types = defaultfileTypes;
	}
	if("".equals(file_upload_limit)){
		file_upload_limit = defaultFileNumberLimit;
	}
	if("".equals(save_type)){
		save_type = defaultSaveType;
	}
	if("".equals(file_style)){
		file_style = defaultFileStyle;
	}

	if("".equals(hiddenUploadBtn)){
		hiddenUploadBtn = "false";
	}

	if("".equals(file_style) || !"span".equals(file_style.toLowerCase())){
		file_style = "table";
	}

	String cleanOnExit = ComUtil.replaceNull2Space(request.getParameter("cleanOnExit"));
	String file_category = ComUtil.replaceNull2Space(request.getParameter("file_category"));
	String secret_level = ComUtil.replaceNull2Space(request.getParameter("secret_level"));
	if("process".equals(allowAdd)){
		BpmToolService bpmToolService = (BpmToolService) SpringFactory.getBean(BpmToolService.class);
		BpmDisplayService bpmDisplayService = (BpmDisplayService) SpringFactory.getBean(BpmDisplayService.class);
		String states = bpmToolService.getProcessStateByFormId(form_id);
		if(states==null || "".equals(states) || "结束".equals(states)){
			allowDel = "false";
			allowAdd = "false";
		}else{
			String userId = SessionHelper.getLoginSysUserId(request);
			if(entryId==null || "".equals(entryId)){
				List<HistoryTaskVo> taskList = bpmDisplayService.getProcessDetailParameter(null, form_id,userId);
				for(HistoryTaskVo h:taskList){
					if("0".equals(h.getTaskFinished())){
						entryId = h.getProcessInstance() + "";
						executionId = h.getExecutionId();
						break;
					}
				}
			}
			if(entryId != null && !"".equals(entryId)){
				//if(executionId.indexOf(".to") == -1){
				Map<String,Object> map = bpmToolService.getDocRightDefinitionByExecutionId(entryId,executionId);
				List<DocRightDefinition> list = (List<DocRightDefinition>) map.get("docRight");
				if(list != null){
					for(DocRightDefinition  dr : list){
						String type = dr.getType();
						if("attachCreate".equals(type)){
							allowDel = "true";
							allowAdd = "true";
						}
						if("attachEdit".equals(type)){

						}
						if("attachPrint".equals(type)){

						}
						if("attachShowByNode".equals(type)){
							bpm_nodeId = (String) map.get("nodeId");
							List<SubDocRightInterface> subDocRights = dr.getSubDocRightList();
							if(subDocRights != null && subDocRights.size() > 0){
								bpm_nodeId = subDocRights.get(0).getName();
							}
						}
					}
				}
				//}
			}
		}
	}
%>
<script type="text/javascript">
	var baseurl = "<%=ViewUtil.getRequestPath(request)%>";
	var file_size_limit = "<%=file_size_limit%>";
	var file_types = "<%=file_types%>";
	var file_upload_limit = "<%=file_upload_limit%>";
	var save_type = "<%=save_type%>";
	var form_id = "<%=form_id%>";
	var form_code = "<%=form_code%>";
	var form_field = "<%=form_field%>";
	var allowAdd = "<%=allowAdd%>";
	var allowDel = "<%=allowDel%>";
	var cleanOnExit = "<%=cleanOnExit%>";
	var file_category = "<%=file_category%>";
	var hiddenUploadBtn = <%=hiddenUploadBtn%>;
	var secret_level = "<%=secret_level%>";
	var collapsed = "<%=collapsed%>";
	var bpm_nodeId = "<%=bpm_nodeId%>";
	var markProcess = "1";
	var collapsed = "<%=collapsed%>";
	var file_style = "<%=file_style%>";
	var encryption = "<%=encryption%>";
</script>
<!--引入webuploader的CSS和js-->
<link rel="stylesheet" type="text/css" href="static/h5/webuploader-0.1.5/dist/webuploader.css">
<script type="text/javascript" src="static/h5/webuploader-0.1.5/dist/webuploader.min.js"></script>
<!--引入自己扩展的-->
<link rel="stylesheet" type="text/css" href="static/h5/uploader-ext/uploader-ext_easyui.css">
<script type="text/javascript" src="static/h5/uploader-ext/uploader-ext_easyui.js"></script>
<script src="static/h5/layer-v2.3/layer/layer.js"></script>
<script type="text/javascript">
	$(function(){
		if(allowAdd=='process'){
			allowAdd = "false";
		}
		allowAdd = (allowAdd=="true" || allowAdd==true?true:false);
		allowDel = (allowDel=="true" || allowDel==true?true:false);
		var allowUpload = ((hiddenUploadBtn=="true" || hiddenUploadBtn)==true?false:true);
		$('#<%=form_code%>').uploaderExt({
			eformUI: 'bootstrap',
			formId: form_id,//业务数据ID(根据此ID查询旗下附件)
			//elementId: form_code,//控件区域ID
			attIds: '',//所有附件ID，根据这些ID加载附件
			deleteAttachUrl: 'platform/webuploader/delete.json',//附件删除的url
			tableName: form_code,//业务表名称
			saveType: save_type,//上传类型,包括DataBase、Disk、Fastfds和第三方
			auto: false, //不需要手动调用上传，有文件选择即开始上传
			expand: true, //初始是否展开
			multiple: true, //是否可以一次选择多个文件
			allowUpload: allowUpload, //是否显示上传按钮
			allowDownload: true, //是否允许下载附件
			allowAdd: allowAdd, //是否允许添加附件
			allowDelete: allowDel, //是否允许删除附件
			allowEncry: encryption, //是否允许附件加密存储
			allowPreview: false,//是否允许预览附件
			allowSaveOnlineDisk: false,//是否允许存网盘
			allowSameName: false,//是否允许上传文件名称重复
			collapsible: true,//是否显示折叠按钮(包括附件个数信息,为false时忽略expand属性，折叠附件初始展开)
			fileNumLimit: file_upload_limit,//允许上传的个数
			fileSizeLimit: file_size_limit,//单个附件大小限制，可以带单位，合法的单位有:B、KB、MB、GB，如果省略单位，则默认为KB。该属性为0时，表示不限制文件的大小。
			secretLevel: secret_level || 'PLATFORM_FILE_SECRET_LEVEL', //附件密级对应的通用代码
			fileCategory: file_category || 'SATISFACTION_SURVEY', //附件类型对应的通用代码
			formSecret: '',//表单密级字段id
			allowEditsecretLevel: false, //是否允许修改密级
			accept: file_types,//可上传的文件类型，参考webupload的
			beforeUpload: globalBeforeUpload, //上传前调用，返回false不能上传
			afterUpload: globalAfterUploadEvent, //上传完调用
			uploadError: globalUploadError, //上传失败调用
			ready:function(){
				if(allowAdd==false){
					$(".webuploader-container.uploader-file-picker").hide();
				}
			}//初始化完成后调用
		});
	});

	function globalBeforeUpload(){
		if(typeof beforeUpload == "function"){
			beforeUpload();
		}
	}

	//附件上传完后执行
	function globalAfterUploadEvent(){
		if(typeof afterUploadEvent == "function"){
			afterUploadEvent();
		}
	}


	//附件上传失败后执行
	function globalUploadError(file, reason){
		layer.msg('附件上传失败！', {icon: 2});
	}

	function upload(){
		var flag = 1;
		var files = $('#<%=form_code%>').uploaderExt('getUploadFiles');
		for(var i = 0; i < files.length; i++){
			var id = files[i].id;
			var name = files[i].name;
			var size = files[i].size;
			var category = files[i].category;
			var secretLevel = files[i].secretLevel;

			if(parseInt(category) > 2){
				alert("文件"+name+"的密级太高！")
				return false;
			}
		}

		if(files && files.length>0){
            $('#<%=form_code%>').uploaderExt('doUpload');
            flag = 1;
        }else{
		    flag = 0;
        }
		return flag;

	}

	 /**
     * 验证附件中的密级不能高于表单的密级
     * @param {type} secretValue 表单密级值
     * @returns false:验证失败；true：验证通过
     */
    function validateSecretLevel(secretValue){
       	var selLevels = $("select[id^='secret_']");
		var msg = "";
		for(var i = 0; i < selLevels.length; i++){
			if(selLevels[i].value > secretValue){
				msg = SWFUpload_I18N.secretError.replace('{number}', (i+1));
				break;
			}
		}
		if("" != msg){
			$.messager.alert(SWFUpload_I18N.alertTitle,msg,'warning');
			return false;
		}else{
            return true;
        }
    }
</script>
<div id="<%=form_code%>" ></div>


