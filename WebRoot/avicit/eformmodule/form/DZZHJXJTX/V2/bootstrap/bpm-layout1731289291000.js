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
EformFlow.prototype.formcode = "DZZHJXJTX";
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
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=948e83e3828ad2be01828c031c280fd5&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
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
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=948e83e3828ad2be01828c031c280fd5&tableId='+tableId+'&id='+pageParams.id;
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
	

if ($("input[name='REQUST_DATE']").val()==''||$("input[name='REQUST_DATE']").val()==null||$("input[name='REQUST_DATE']").val()==undefined ){
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
	$("#REQUST_DATE").val(macoValue);
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('HJTZ',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","color:#007fcc;");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","color:#007fcc;");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='AUTO_CODE']",window.pageParams.content||document).val();
		var flag = $("input[name='AUTO_CODE']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#AUTO_CODE").attr("initvalue");
		var valuePure = $("#AUTO_CODE").find("#autoCode").val();
		if (flag != "disabled" && window.AUTO_CODEautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=AUTO_CODE',
					type: 'POST',
					async:false,
					data: {
						autoCode: "HJTZ",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=AUTO_CODE',
								type: 'POST',
								async:false,
								data: {
									autoCode: "HJTZ",
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
										formData["AUTO_CODE"] = result.value;
										$("input[name='AUTO_CODE']",window.pageParams.content||document).val(result.value);
										$("#AUTO_CODE").attr("initvalue",result.value);
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
				delete formData["AUTO_CODE"];
				$("input[name='AUTO_CODE']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='AUTO_CODE']",window.pageParams.content||document).val();
		var require = $("#AUTO_CODE").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "AUTO_CODE"){
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
	if (tagId != "AUTO_CODE"){
		return;
	}
	if(operability){
		$("#AUTO_CODE").show();
	}else{
		$("#AUTO_CODE").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "AUTO_CODE"){
		return;
	}
	if (required){
		$("#AUTO_CODE").attr("required","required");
	}
});



if ($("input[name='USER_NAME']").val()==''||$("input[name='USER_NAME']").val()==null||$("input[name='USER_NAME']").val()==undefined ){
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
	$("#USER_NAME").val(macoValue);
}



if ($("input[name='DEPT_NAME']").val()==''||$("input[name='DEPT_NAME']").val()==null||$("input[name='DEPT_NAME']").val()==undefined ){
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
	$("#DEPT_NAME").val(macoValue);
}

    $(function(){
 
if(typeof(EformFlow) != "undefined"){

 EformFlow.prototype.afterControlFormInput=function(){
 $("#HJTX").show();
 //$("#ZWHJLFJ").show();
// $("#TYZKTZ").show(); 
 
 

 
 

 
 
 };
}




});





if ($('#TEL').val() == null||$('#TEL').val()==''||$('#TEL').val()==undefined)
$('#TEL').val("3851");




	PARTY_NAMEDetailCol = 'PARTY_NAME';
	

function PARTY_NAMEClickFun(){
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
				this.setRowPARTY_NAME = function(mapping,rowData){
					

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

						if(PARTY_NAMEDetailCol == mapVer.targetName){
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

                iframeWin.initGrid(                "0"
                , "20","select t.party_name, t.id, t.attribute_01, (select MAX(t1.CREA_TIME) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as CREA_TIME, (select ADD_MONTHS(MAX(t1.CREA_TIME),36) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as DUE_TIME1, (select ADD_MONTHS(MAX(t1.CREA_TIME),32) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as TJHJ_TIME, (select ADD_MONTHS(MAX(t1.CREA_TIME),34) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as TJYBRX_TIME, (select ADD_MONTHS(MAX(t1.CREA_TIME),36) from dyn_party_org_info t1 where t1.party_id = t.id and t1.session_id = '0' and t1.session_type != '2') as ZKDYDH_TIME from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"召开党员大会时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"ZKDYDH_TIME"},{"label":"提交预备人选时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"TJYBRX_TIME"},{"label":"提交换届请示时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"TJHJ_TIME"},{"label":"任期届满时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"DUE_TIME1"},{"label":"上届换届时间","width":"50","hidden":true,"align":"center","orderBy":"","name":"CREA_TIME"},{"label":"党组织类型","width":"50","align":"center","orderBy":"","name":"ATTRIBUTE_01Name"},{"label":"党组织类型","width":"50","hidden":true,"align":"center","orderBy":"","name":"ATTRIBUTE_01"},{"label":"党支部名称ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"党支部名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"ZKDYDH_TIME","targetName":"ZKDYDH_TIME","targetNameName":"召开党员大会选举时间","display":"召开党员大会时间","transform":"","lookupType":"","filter":false},{"name":"TJYBRX_TIME","targetName":"TJYBRX_TIME","targetNameName":"提交预备人选请示时间","display":"提交预备人选时间","transform":"","lookupType":"","filter":false},{"name":"TJHJ_TIME","targetName":"TJHJ_TIME","targetNameName":"提交换届请示时间","display":"提交换届请示时间","transform":"","lookupType":"","filter":false},{"name":"DUE_TIME1","targetName":"DUE_TIME1","targetNameName":"任期届满时间","display":"任期届满时间","transform":"","lookupType":"","filter":false},{"name":"CREA_TIME","targetName":"CREA_TIME","targetNameName":"上届换届时间","display":"上届换届时间","transform":"","lookupType":"","filter":false},{"name":"ATTRIBUTE_01Name","targetName":"PARTY_TYPEName","targetNameName":"党组织类型","display":"党组织类型","transform":"7","lookupType":"PARTY_ORG_TYPE","filter":false},{"name":"ATTRIBUTE_01","targetName":"PARTY_TYPE","targetNameName":"党组织类型(值)","display":"党组织类型","transform":"","lookupType":"","filter":false},{"name":"ID","targetName":"PARTY_ID","targetNameName":"党支部ID","display":"党支部名称ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"PARTY_NAME","targetNameName":"换届党支部名称","display":"党支部名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME,this.getParamsValue,'','DZZHJXJTX-PARTY_NAME',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
							var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
				var selectIds = dicJqGrid.jqGrid('getGridParam','selrow');
				if(selectIds != null && selectIds.length > 0){
					//var selectId = selectIds[0];
					rowData = dicJqGrid.jqGrid("getRowData",selectIds);
					selectRows.push(rowData);

					
					//回填表单数据
					for(var i=0; i< iframeWin.mapping.length; i++){
						var mapVer = iframeWin.mapping[i];

			            var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
				        if(hashInputCalss){
							$("#"+mapVer.targetName).val(eval("rowData."+ mapVer.name));
			            }else{
							$("#"+mapVer.targetName).find("input").val(eval("rowData."+ mapVer.name));
						}

						if(mapVer.targetName != ""){
							$("#"+mapVer.targetName+" input").each(function(){
								$(this).prop('checked',false);
								if($(this).val() == eval("rowData."+ mapVer.name)){
									$(this).prop('checked',true);
								}
							});
						}
						$("#"+mapVer.targetName).blur();

						if(PARTY_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#PARTY_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function PARTY_NAMEDetail(id){
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


			$('#PARTY_NAME')
	.on(' focus',function(e){
	PARTY_NAMEClickFun();
	this.blur();
});

/*
$('#PARTY_NAMEButton').on('click',function(e){
	PARTY_NAMEClickFun();
	this.blur();
});

$('#PARTY_NAMEButton').click(function(event) {
   $('#PARTY_NAME').trigger('focus');
});*/




    $('#PARTY_TYPE').attr("disabled","disabled");$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PARTY_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PARTY_TYPE"] != null && pageParams.formData["PARTY_TYPE"] != ''){    $('#PARTY_TYPE').val(pageParams.formData["PARTY_TYPE"]);}else if($('#PARTY_TYPE').attr("initValue")!=undefined&&$.trim($('#PARTY_TYPE').attr("initValue"))!=''){    $('#PARTY_TYPE').val($('#PARTY_TYPE').attr("initValue"));    pageParams.formData["PARTY_TYPE"] = $('#PARTY_TYPE').attr("initValue");}else{    }}});



            $('#CREA_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#CREA_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#CREA_TIME').datepicker('show');
			 $('#CREA_TIME').datepicker().trigger('click');
					
		});
        



            $('#DUE_TIME1').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#DUE_TIME1_button').click(function(event) {
			/* Act on the event */
	    			 $('#DUE_TIME1').datepicker('show');
			 $('#DUE_TIME1').datepicker().trigger('click');
					
		});
        



            $('#TJHJ_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#TJHJ_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#TJHJ_TIME').datepicker('show');
			 $('#TJHJ_TIME').datepicker().trigger('click');
					
		});
        



            $('#TJYBRX_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#TJYBRX_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#TJYBRX_TIME').datepicker('show');
			 $('#TJYBRX_TIME').datepicker().trigger('click');
					
		});
        



            $('#ZKDYDH_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#ZKDYDH_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#ZKDYDH_TIME').datepicker('show');
			 $('#ZKDYDH_TIME').datepicker().trigger('click');
					
		});
        


workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "HJTX"){
		return;
	}
	if(operability){
		$("#HJTX").show();
	}else{
		$("#HJTX").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "HJTX"){
return;
}
if(operability){
$("#HJTX").css("display","inline-block");
}else{
$("#HJTX").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#HJTX').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '模版下载', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e390edf5460190f2385bfa21da'
	});

        });
        

    $("input").css("color","#007fcc");
$("select").css("color","#007fcc");
//$("td").eq(27).css('line-height','20px');


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

	                                   
        workflowControlForAccess.addcontrolFunc(function(tagId, operability){
				if (tagId != "948e83e3930ad05e019318e2034a3981"){
					return true;
				}
				
				if(!operability){
					$("#948e83e3930ad05e019318e2034a3981").hide();
				}else{
					$("#948e83e3930ad05e019318e2034a3981").show();
				}
			});
                        $("#948e83e3930ad05e019318e2034a3981").click(function(){
                
                  window.open(_eform_base_url+"platform/eform/bpmsCRUDClient/toPrint?formInfoId=948e83e3828ad2be01828c031c280fd5&id="+id+"&entryId="+entryId+"&type=print","_blank");
                
            });
                         	
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