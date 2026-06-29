var subTableData = {};
var layerflag = true;

var attachBpmInfo = {

    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;
function getLength(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 3;
    }
    return realLength;
};   

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function attachcallback(id,callback,result) {
    globalUploadNumTemp = 0;
    $('.attachment_div').each(function (index, element) {
        var domId = $(element).attr("id");
        if(attachBpmId){
            var finalAttachBpmId = "";
            if(attachBpmId.indexOf("urlParam.") == -1){
                finalAttachBpmId = eval("result.data.saveMap.main." + attachBpmId);
            }else{
                finalAttachBpmId = eval(attachBpmId);
            }
            $(element).uploaderExt('doUpload', finalAttachBpmId, domId);
        }else{
            $(element).uploaderExt('doUpload', id, domId);
        }

    });

    var intervalId = setInterval(function () {
        if (globalUploadNumTemp < 0){
            clearInterval(intervalId);
        }
        if (globalUploadNumTemp == globalUploadNum) {
            clearInterval(intervalId);
            //afterEvent();
            if (layerflag && globalUploadNum != 0){
                //layer.msg('附件上传成功！', {icon: 1});
            }
                        pageParams.isInsert = false;

            if (result.startResult){
                callback(result.startResult);
            }else{
                callback();
            }

        }
    }, 500);
}
//附件上传完后执行
function afterUploadEvent(){
    globalUploadNumTemp++;
}

//附件上传失败后执行
function uploadError(file, reason){
    globalUploadNumTemp = globalUploadNumTemp - 10000;
    layer.msg('附件上传失败！', {icon: 2});
}

/**
 * 业务操作对象，需继承基础对象，重新必要的业务操作方法
 */
function EformFlow() {
	DefaultForm.call(this);
};
EformFlow.prototype = new DefaultForm();
/**
 * formcode
 */
EformFlow.prototype.formcode = "DWGZJH";
EformFlow.prototype.isAutoSave = true;
/**
 * 初始化表单数据
 */
EformFlow.prototype.initFormData = function() {
	var _self = this;
};

EformFlow.prototype.afterControlFormInput = function () {
    //ie9 disabled元素样式不生效
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
        $("input[disabled='disabled']").each(function() {
            //$(this).removeAttr("disabled");
            $(this).off("focus").off("keyup");
            $(this).click(function(){return false;});
            $(this).attr("readonly", "readonly");
        });

        $(".select2-hidden-accessible[disabled]").each(function() {
            $(this).prop("disabled", true);
            $(this).select2();
        });
    }
}
/**
 * 启动流程
 * 
 * @param defineId
 * @param callback
 */
EformFlow.prototype.start = function(defineId, callback) {
    //遮罩
    var maskId = layer.load();
	//验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
//去掉遮罩
layer.close(maskId);
         return false;
    }

    subTableData = {};
    $('table.datatable').not(".eform-self-form").each(function(){
        if ($(this).parents(".eform-self-form").length>0){
            return;
        }
		var tableId = $(this).attr("id");
		$('#' + tableId).jqGrid('endEditCell');
		var data = $('#' + tableId).jqGrid('getChangedCells');
		if(data && data.length > 0){
			for(var i = 0; i < data.length; i++){
				if(data[i].id.indexOf("new_row") > -1){
					data[i].id = '';
				}
			}
			subTableData[tableId] = data;
		}
	});
	
	$("#subTableData").val(JSON.stringify(subTableData));

    var jsonData = serializeObjectForEform($('#form'),true,'.eform-self-form');
	 if (!beforeSaveEvent.exec(jsonData)){
        //去掉遮罩
        layer.close(maskId);
		return false;
	}

    if(pageParams.isInsert) {
        
    }
    else {
        
    }

	var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=948e83e38f76589e018f7a05adce1c5a&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
    beforeSaveEvent.changeData(jsonData);
    avicAjax.ajax({
        url: url,
        data : jsonData,
        type : 'post',
        dataType : 'json',
        success : function(result){
            if (result.success){
                //遮罩
                maskId = layer.load();
                if(typeof(attachcallback) == "function"){
                    layerflag =false;
                    attachcallback(result.id,callback,result);
                }
                pageParams.entryId = result.startResult.entryId;

                afterSaveEvent.exec(jsonData,result);
                if (result.hasOwnProperty("data")){
                	idmap = JSON.stringify(result.data.idMap);
                }
                //刷新子表数据
                $('table.datatable').not(".eform-self-form").each(function(){
                    var tableId = $(this).attr("id");
                    $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                });

            }else{
                layer.alert(result.msg, {
                    icon: 7
                });
            }
        }
    });
};
/**
 * 自定义元素控制
 **/
//只读控制
EformFlow.prototype.controlSelfElement = function(tagId, operability){

	workflowControl.exec(tagId, operability);
};

//显隐控制
EformFlow.prototype.controlSelfElementForAccess = function(tagId, operability){

    workflowControlForAccess.exec(tagId, operability);
};

//子表按钮显隐控制
EformFlow.prototype.controlSubTableButtonForAccess = function(tagId, operability){
    workflowControlSubTableButtonForAccess.exec(tagId, operability);
};

//必填控制
EformFlow.prototype.controlSelfElementForRequired = function(tagId, operability,obj){

    workflowControlForRequired.exec(tagId, operability,obj);
};

//流程控制-多附件必填
EformFlow.prototype.setAttachRequired = function(tagId,required,obj){
    workflowControlForAttachRequired.exec(tagId,required,obj);
};

//多附件增删控制
EformFlow.prototype.setAttachCanAddOrDel = function(tagId,operability,obj){
    attachBpmInfo.delOrAdd[tagId] = {tagId:tagId,operability:operability,obj:obj};
    if(operability) {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });

        $('#' + tagId).find('.attachment_tableDel').show();
        $('#' + tagId).find('div.uploader-file-item').off('mouseover');
    }else {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });

        $('#' + tagId).find('.attachment_tableDel').hide();
        $('#' + tagId).find('div.uploader-file-item').on('mouseover', function () {
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }
};


//多附件密级可编辑
DefaultForm.prototype.setAttachSecretLevelModify = function(tagId,modify,obj){
    attachBpmInfo.editSecret[tagId] = {tagId:tagId,modify:modify,obj:obj};
    var uploadJqgrid = $("#"+tagId+ "_attachmentTable");
    if(modify){
        $("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
            $(e).removeAttr("disabled");
        });
        if(uploadJqgrid){
            $("[aria-describedby='"+tagId+"_attachmentTable_attachmentsecretName']").removeClass("not-editable-cell");
        }
    }else{
        $("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
            $(e).attr("disabled","disabled");
        });
        if(uploadJqgrid){
            var rowIds = uploadJqgrid.jqGrid("getDataIDs");
            for(var i = 0; i< rowIds.length; i++){
                var rowId = rowIds[i];
                uploadJqgrid.jqGrid('setCell', rowId, "attachmentsecretName", '', 'not-editable-cell');
            }
        }
    }
}



/**
* 控制附件
*/
EformFlow.prototype.setAttachMagic = function(attachMagic) {
    //当流程节点配置是否允许附件功能时候，隐藏上传、下载按钮等
    if(attachMagic) {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });

        $('div.uploader-file-item').off('mouseover');
    }
    else {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });

        $('div.uploader-file-item').on('mouseover', function () {
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        })
    }



};
/**
 * 更新数据
 * 
 * @param callback
 */
EformFlow.prototype.save = function(callback) {

    //验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
         return false;
    }

    subTableData = {};
    $('table.datatable').not(".eform-self-form").each(function(){
        var tableId = $(this).attr("id");
        $('#' + tableId).jqGrid('endEditCell');
        var data = $('#' + tableId).jqGrid('getChangedCells');
        if(data && data.length > 0){
            for(var i = 0; i < data.length; i++){
                if(data[i].id.indexOf("new_row") > -1){
                    data[i].id = '';
                }
            }
            subTableData[tableId] = data;
        }
    });


    $("#subTableData").val(JSON.stringify(subTableData));

    var jsonData = serializeObjectForEform($('#form'),true,'.eform-self-form');
     if (!beforeSaveEvent.exec(jsonData)){
        return false;
    }

    
    var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=948e83e38f76589e018f7a05adce1c5a&tableId='+tableId+'&id='+pageParams.id;
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        avicAjax.ajax({
            url: url,
            data : jsonData,
            type : 'post',
            dataType : 'json',
            success : function(result){
                if (result.success){
                    if(typeof(attachcallback) == "function"){
                        attachcallback(result.id,callback,result);
                    }
                    afterSaveEvent.exec(jsonData,result);
                    if (result.hasOwnProperty("data")){
                        idmap = JSON.stringify(result.data.idMap);
                    }
                    //刷新子表数据
                    $('table.datatable').not(".eform-self-form").each(function(){
                        var tableId = $(this).attr("id");
                        $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                    });
                }else{
                    layer.alert(result.msg, {
                        icon: 7
                    });
                }
            }
        });
    }
};

     	             	         
$(function(){
	

$("#FORM_CODE").attr("initvalue",$("input[name='FORM_CODE']",window.pageParams.content||document).val());
if ($("input[name='FORM_CODE']",window.pageParams.content||document).val()==''||$("input[name='FORM_CODE']",window.pageParams.content||document).val()==null||$("input[name='FORM_CODE']",window.pageParams.content||document).val()==undefined ){

window.FORM_CODEautocode = new AutoCode('DW_GZ_PLAN_CODE',"FORM_CODE",false,"FORM_CODE",undefined
	,function(){$("#FORM_CODE").find("input").attr("style","");}

);


}else{
	$("#FORM_CODE").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='FORM_CODE']",window.pageParams.content||document).val();
		var flag = $("input[name='FORM_CODE']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#FORM_CODE").attr("initvalue");
		var valuePure = $("#FORM_CODE").find("#autoCode").val();
		if (flag != "disabled" && window.FORM_CODEautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=FORM_CODE',
					type: 'POST',
					async:false,
					data: {
						autoCode: "DW_GZ_PLAN_CODE",
						comId: comId,
						autoCodeValue: value,
						tablename:window.pageParams.tableName,
						tableId:dbtableid,
						idmap:idmap,
						datasourceId:window.pageParams.datasourceId,
						funcpara:undefined||"",
						valuepure:oldValue
					},
					dataType: 'json',
					success: function (backData, status) {
						if (backData.errorInfo){
							layer.alert(backData.errorInfo, {
								title: "提示",
								icon: 7
							});
							codeFlag = false;
						}else{
							//继续ajax请求，根据返回的code查询业务表，判断编码是否已经存在，如果存在，重新生成新的
							var validateCode = backData.value;
							$.ajax({
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=FORM_CODE',
								type: 'POST',
								async:false,
								data: {
									autoCode: "DW_GZ_PLAN_CODE",
									comId: comId,
									autoCodeValue: value,
									validateCode:validateCode,
									tablename:window.pageParams.tableName,
									tableId:dbtableid,
									idmap:idmap,
									datasourceId:window.pageParams.datasourceId,
									funcpara:undefined||"",
									valuepure:oldValue
								},
								dataType: 'json',
								success: function (result) {
									if(result.flag == "success"){
										formData["FORM_CODE"] = result.value;
										$("input[name='FORM_CODE']",window.pageParams.content||document).val(result.value);
										$("#FORM_CODE").attr("initvalue",result.value);
									}else{
										layer.alert("自动编码保存错误！", {
											title: "提示",
											icon: 7
										});
										codeFlag = false;
									}
								},
								error: function(xhr,state,errorThrown){
									layer.alert("自动编码保存错误！", {
										title: "提示",
										icon: 7
									});
									codeFlag = false;
								}
							});
						
						}
					},
					error: function(xhr,state,errorThrown){
						layer.alert("自动编码保存错误！", {
							title: "提示",
							icon: 7
						});
						codeFlag = false;
					}
				});
			}else{
				delete formData["FORM_CODE"];
				$("input[name='FORM_CODE']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='FORM_CODE']",window.pageParams.content||document).val();
		var require = $("#FORM_CODE").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FORM_CODE"){
		return true;
	}
	var idJson = $.parseJSON(idmap);
	var comId = id;
	if (idJson.hasOwnProperty("")){
		comId = idJson[""];
	}

	if(!operability){
		setTimeout(function(){
			$("#" + tagId).find("input").attr("readonly");
			$("#" + tagId).find("#autoCode_edit").unbind("click");
		}, "500");
	}else{
			}
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "FORM_CODE"){
		return;
	}
	if(operability){
		$("#FORM_CODE").show();
	}else{
		$("#FORM_CODE").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FORM_CODE"){
		return;
	}
	if (required){
		$("#FORM_CODE").attr("required","required");
	}
});



if ($("input[name='DREAF_DATE']").val()==''||$("input[name='DREAF_DATE']").val()==null||$("input[name='DREAF_DATE']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{date}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#DREAF_DATE").val(macoValue);
}



if ($("input[name='DRAF_USER']").val()==''||$("input[name='DRAF_USER']").val()==null||$("input[name='DRAF_USER']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{userName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#DRAF_USER").val(macoValue);
}



if ($("input[name='DRAF_DEPT']").val()==''||$("input[name='DRAF_DEPT']").val()==null||$("input[name='DRAF_DEPT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#DRAF_DEPT").val(macoValue);
}



$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "QUARTER_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#QUARTER').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["QUARTER"] != null && pageParams.formData["QUARTER"] != ''){    $('#QUARTER').val(pageParams.formData["QUARTER"]);}else if($('#QUARTER').attr("initValue")!=undefined&&$.trim($('#QUARTER').attr("initValue"))!=''){    $('#QUARTER').val($('#QUARTER').attr("initValue"));    pageParams.formData["QUARTER"] = $('#QUARTER').attr("initValue");}else{    }}});





//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "FL"){
        return true;
    }
    if(operability){
                        var $tag = $('#FL1');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL2');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL3');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL4');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL5');
            $tag.removeAttr("disabled");
                                var $tag = $('#FL6');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "FL"){
        return;
    }

    if(operability){
        $("#FL").show();
    }else{
        $("#FL").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "FL"){
        return;
    }

    if (required){
        $('input[name="FL"]').attr("required","required");
    }else{
        $('input[name="FL"]').removeAttr("required","required");
    }
});


$("#PARTY_COMMITTEE_WORK_PLANCount").html((4000 - $('#PARTY_COMMITTEE_WORK_PLAN').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatPARTY_COMMITTEE_WORK_PLANLength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}



$("#WORK_NAMECount").html((4000 - $('#WORK_NAME').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatWORK_NAMELength(text,maxLen){
var curLen = 0;
var retText = text;
for (var i=0; i<text.length; i++) {
if (text.charCodeAt(i)>127 || text.charCodeAt(i)==94) {
curLen += 2;
} else {
curLen ++;
}

if(curLen > maxLen){
retText = text.substring(0,i-1);
break;
}
}
return retText;
}





	DEPT_NAMEDetailCol = 'DEPT_NAME';
	

function DEPT_NAMEClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionarySelect",
	    	area: ['800px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowDEPT_NAME = function(mapping,rowData){
					

					var detailId;
					var detailName;
					for(var i=0; i< mapping.length; i++){
						var mapVer = mapping[i];
						$("#"+mapVer.targetName).val(rowData[mapVer.name]);

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == rowData[mapVer.name]){
									$(this).prop('checked',true);
								}
							});
						}

						if(DEPT_NAMEDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										
					layer.close(index);
				}

				this.getParamsValue = function(targetName){
					return $("#"+targetName).val();
				}

				this.jsSuccess = function(xhr,rows){
					;
				}
                //传入参数，并赋值给iframe的元素
                var iframeWin = layero.find('iframe')[0].contentWindow;

                iframeWin.initGrid(                "1"
                , "20","select dept_name, case dept_name when 'DZBGS-DY' then '党政办公室-调研工作' when 'DZBGS-ZH' then '党政办公室-综合管理工作' when 'DZBGS-XF' then '党政办公室-信访工作' when 'RLZYB-RS' then '人力资源部-人事管理工作' when 'DZBGS-XC' then '人力资源部-薪酬管理工作' when 'DZBGS-PX' then '人力资源部-培训考核工作' when 'DZBGS-GB' then '人力资源部-干部管理工作' when 'JJJCB-ZH' then '纪检监察部-综合监察工作' when 'JJJCB-JJ' then '纪检监察部-纪检监察工作' when 'JJJCB-XC' then '纪检监察部-巡察工作' when 'DQGZB-DJ' then '党群工作部-党建工作' when 'DQGZB-MG' then '党群工作部-组织民管工作' when 'DQGZB-GH' then '党群工作部-工会工作' when 'DQGZB-XC' then '党群工作部-文化宣传工作' when 'DQGZB-SX' then '党群工作部-声像宣传工作' when 'DQGZB-TW' then '党群工作部-团委工作' end Dname from DYN_PARTY_PLAN_GXB order by XH ",'[{"label":"部门名称","width":"400","align":"center","orderBy":"","name":"DNAME"},{"label":"code","width":"50","hidden":true,"align":"center","orderBy":"","name":"DEPT_NAME"}]','[{"name":"DNAME","targetName":"DEPT_NAME","targetNameName":"承接部门名称","display":"部门名称","transform":"","lookupType":"","filter":true},{"name":"DEPT_NAME","targetName":"RESPONSIBLE_DEPA","targetNameName":"党群部门承接","display":"code","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowDEPT_NAME,this.getParamsValue,'','DWGZJH-DEPT_NAME',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         		           		var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getGridParam","selarrrow");
	         		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(DEPT_NAMEDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#DEPT_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function DEPT_NAMEDetail(id){
	  var inputDetail = "N";
	  var detailpagePath = "";

	  if(inputDetail == "Y"){
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: detailpagePath + '&id='+id,
			   	})
		  	}else{
		  		layer.open({
				    type:  2,
				    area: ['100%', '100%'],
				    title: '数据字典详细',
				    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
				    shade:   0.3,
				    shadeClose:   true,
				    maxmin: false, //开启最大化最小化按钮
				    content: 'eform/bpmsCRUDClient/toDetail?formInfoId=&id='+id,
			   	})

		  	}

}


			$('#DEPT_NAME')
	.on(' focus',function(e){
	DEPT_NAMEClickFun();
	this.blur();
});

/*
$('#DEPT_NAMEButton').on('click',function(e){
	DEPT_NAMEClickFun();
	this.blur();
});

$('#DEPT_NAMEButton').click(function(event) {
   $('#DEPT_NAME').trigger('focus');
});*/





attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).attr("disabled","disabled");
                    });
                }
            }
        },
        
        //设计器参数
        saveType: 'DataBase',
            expand: true == true ? true : false,
        multiple: true == true ? true : false,
            allowDownload: true == true ? true : false,
        allowAdd: true == true ? true : false,
        allowDelete: true == true ? true : false,
                allowEncry: false == true ? true : false,
                        allowSameName: false == true ? true : false,
        collapsible: true == true ? true : false,
        fileNumLimit: 10,
        fileSizeLimit: '0',
        formSecret: 'FILE_TYPE',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel"){
        return;
    }

    if (required){
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("required","required");
   }else{
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").removeAttr("required");
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("required");
    var bpmRequire = $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel').find('table>>tr.jqgrid-new-row').size();
        }

        if(itemListNum==0){
            if (title == ""){
                title = "附件";
            }
            layer.alert(title+"不能为空！", {
                title: "提示",
                icon: 7
            });
            return false;
        }
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel"){
        return;
    }
    if(operability){
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").show();
    }else{
        $("#SQe2pSPv3XMGkWSNdnMXl2Rdobki5Pel").hide();
    }
});
if ($('#FILE_TYPE').val() == null||$('#FILE_TYPE').val()==''||$('#FILE_TYPE').val()==undefined)
$('#FILE_TYPE').val("2");


            $('#FK_DATE_TIME').datetimepicker({
            oneLine:true,
            showButtonPanel:true,
            showSecond:false,
            beforeShow: function(selectedDate,inst) {
                inst.initflag = false;
                if($('#'+selectedDate.id).val()==""){
                    inst.initflag = true;
                    $('#'+selectedDate.id).val(formatDateTimeNoSecond(new Date()));
                }
            },
            afterShow: function(selectedDate,inst) {
                if (inst.initflag){
                    $('#'+selectedDate.id).val('');
                    inst.initflag = false;
                }
            }
        });
    


    $('#FK_DATE_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#FK_DATE_TIME').datetimepicker('show');
			 $('#FK_DATE_TIME').datetimepicker().trigger('click');
	    			
		});
        

	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");

            globalUploadNum++;
    	});
	}, 1000);
	
	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);

	                           	
	//创建业务操作JS
    var eformFlow = new EformFlow();
    //创建流程操作JS
    var floweditor = new FlowEditor(eformFlow);

    floweditor.init();

    $('.spinner input').trigger("blur.spinner");

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});