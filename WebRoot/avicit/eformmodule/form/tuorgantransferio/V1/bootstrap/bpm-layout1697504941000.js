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
EformFlow.prototype.formcode = "tuorgantransferio";
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
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=402881a789ae865d0189ae9b3b91033a&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
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
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=402881a789ae865d0189ae9b3b91033a&tableId='+tableId+'&id='+pageParams.id;
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
	

if ($("input[name='REQUEST_USER']").val()==''||$("input[name='REQUEST_USER']").val()==null||$("input[name='REQUEST_USER']").val()==undefined ){
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
	$("#REQUEST_USER").val(macoValue);
}



if ($("input[name='REQUEST_DEPT']").val()==''||$("input[name='REQUEST_DEPT']").val()==null||$("input[name='REQUEST_DEPT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentFullName}"
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
	$("#REQUEST_DEPT").val(macoValue);
}



if ($("input[name='REQUEST_DATE']").val()==''||$("input[name='REQUEST_DATE']").val()==null||$("input[name='REQUEST_DATE']").val()==undefined ){
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
	$("#REQUEST_DATE").val(macoValue);
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('tradeUnionTransferCode',"AUTO_CODE",false,"AUTO_CODE",undefined
	,function(){$("#AUTO_CODE").find("input").attr("style","");}

);


}else{
	$("#AUTO_CODE").find("input").attr("style","");
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
						autoCode: "tradeUnionTransferCode",
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
									autoCode: "tradeUnionTransferCode",
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



$('#TEL').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#TEL').trigger('click');
});

$("#TEL").on("keyup",function(){
    if($("#TEL").val()>999999999999999){
        $("#TEL").val(999999999999999);
        layer.msg("上报人电话：最大值为\""+999999999999999+"\"");
    }
});




	UNIONDetailCol = 'UNION';
	

function UNIONClickFun(){
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
				this.setRowUNION = function(mapping,rowData){
					

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

						if(UNIONDetailCol == mapVer.targetName){
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
                , "20","select t.LEAGUE_NAME,t.id from DYN_TRADE_UNION_ORGANIZA t WHERE t.parent_id != '-1'",'[{"label":"工会名称","width":"50","hidden":true,"align":"center","orderBy":"","name":"LEAGUE_NAME"},{"label":"ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"工会名称","width":"50","align":"center","orderBy":"","name":"LEAGUE_NAME"}]','[{"name":"LEAGUE_NAME","targetName":"UNION","targetNameName":"所在工会","display":"工会名称","transform":"","lookupType":"","filter":false},{"name":"ID","targetName":"TRADE_UNION_ID","targetNameName":"所在工会ID","display":"ID","transform":"","lookupType":"","filter":false},{"name":"LEAGUE_NAME","targetName":"TRADE_UNION_NAME","targetNameName":"所在工会","display":"工会名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowUNION,this.getParamsValue,'','tuorgantransferio-UNION',this.jsSuccess);


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

						if(UNIONDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#UNION").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function UNIONDetail(id){
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


			$('#UNION')
	.on(' focus',function(e){
	UNIONClickFun();
	this.blur();
});

/*
$('#UNIONButton').on('click',function(e){
	UNIONClickFun();
	this.blur();
});

$('#UNIONButton').click(function(event) {
   $('#UNION').trigger('focus');
});*/




if ($('#TRANSFER_TYPE').val() == null||$('#TRANSFER_TYPE').val()==''||$('#TRANSFER_TYPE').val()==undefined)$('#TRANSFER_TYPE').val("0");            $('#TRANSFER_TYPE').on('change',function(e){
            $('#TRADE_UNION_NAME').off('focus');
 $('#IN_TU_ORG').off('focus');
if($(this).val() == '0'){
 	$('#IN_TU_ORG').val('');
	$('#IN_TU_ORG').on('focus',function(e){
	IN_TU_ORGClickFun();
	this.blur();
});
 $('#TRADE_UNION_NAME').on('focus',function(e){
	IN_TU_ORGClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ||$(this).val() == '5' ){
 $('#UNION').off('focus');
 	$('#IN_TU_ORG').val('');
 //$('#P_IN_PARTY_ORG_ID').val('');
 $('#UNION').on('focus',function(e){
	UNIONClickFun();
	this.blur();
});
 this.blur();

 }	

if($(this).val() == '4'){
 $('#UNION').off('focus');
 $('#IN_TU_ORG').on('focus',function(e){
	IN_TU_ORGClickFun();
	this.blur();
});
 
 }
        });
        



	IN_TU_ORGDetailCol = 'IN_TU_ORG';
	

function IN_TU_ORGClickFun(){
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
				this.setRowIN_TU_ORG = function(mapping,rowData){
					

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

						if(IN_TU_ORGDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										$("#P_PARTY_GROUP_NAME").val(''); $("#P_PARTY_GROUP_IDName").val('');
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
                , "30","select t.LEAGUE_NAME,t.id from DYN_TRADE_UNION_ORGANIZA t WHERE t.parent_id != '-1'",'[{"label":"目的工会id","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"目的工会","width":"50","align":"center","orderBy":"","name":"LEAGUE_NAME"}]','[{"name":"ID","targetName":"IN_TU_ORG_ID","targetNameName":"目的工会ID","display":"目的工会id","transform":"","lookupType":"","filter":false},{"name":"LEAGUE_NAME","targetName":"IN_TU_ORG","targetNameName":"目的工会","display":"目的工会","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowIN_TU_ORG,this.getParamsValue,'','tuorgantransferio-IN_TU_ORG',this.jsSuccess);


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

						if(IN_TU_ORGDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#IN_TU_ORG").val(null);
				}

			
			$("#P_PARTY_GROUP_NAME").val(''); $("#P_PARTY_GROUP_IDName").val('');
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function IN_TU_ORGDetail(id){
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


			$('#IN_TU_ORG')
	.on(' focus',function(e){
	IN_TU_ORGClickFun();
	this.blur();
});

/*
$('#IN_TU_ORGButton').on('click',function(e){
	IN_TU_ORGClickFun();
	this.blur();
});

$('#IN_TU_ORGButton').click(function(event) {
   $('#IN_TU_ORG').trigger('focus');
});*/





var DYN_TU_TRANSFER_VTabInitFlag = false;

										var DYN_TU_TRANSFER_VSEXSelect = {"1":"男","2":"女"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "PLATFORM_SEX"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_TU_TRANSFER_VSEXSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
														var DYN_TU_TRANSFER_VEDUCATION_LEVELSelect = {"1":"博士","2":"研究生","3":"本科","4":"专科及以下"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "TRADE_UNION_EDUCATION"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_TU_TRANSFER_VEDUCATION_LEVELSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
								var DYN_TU_TRANSFER_VPOLITICAL_OUTLOOKSelect = {"1":"党员","2":"团员","3":"群众","4":"其它"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "PLATFORM_POLITICAL"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_TU_TRANSFER_VPOLITICAL_OUTLOOKSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
										var DYN_TU_TRANSFER_VCATEGORYSelect = {"0":"技术人员","1":"管理人员","2":"技能人员","3":"退养人员"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "PM_CATEGORY"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_TU_TRANSFER_VCATEGORYSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
								var DYN_TU_TRANSFER_VONOFF_JOBSelect = {"0":"在职","1":"离职","2":"病假","3":"产假","4":"借调外出"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_TU_TRANSFER_VONOFF_JOBSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
																		
var dataGridColModel_DYN_TU_TRANSFER_V =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
         		  		  ,{ label:'姓名', name:'ATTRIBUTE_05', width:50,
		  		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
      queryStatement:"select * from dyn_trade_union_mb where STATUS ='IN' AND ATTRIBUTE_02 ='E'",
      dataGridColModel:'[{"label":"991","width":"50","hidden":true,"align":"center","orderBy":"","name":"EDUCATION_LEVELName"},{"label":"77","width":"50","hidden":true,"align":"center","orderBy":"","name":"JOIN_PARTY"},{"label":"17","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARTY_MONEY"},{"label":"162","width":"50","hidden":true,"align":"center","orderBy":"","name":"ONOFF_JOB"},{"label":"161","width":"50","hidden":true,"align":"center","orderBy":"","name":"ONOFF_JOBName"},{"label":"152","width":"50","hidden":true,"align":"center","orderBy":"","name":"CATEGORY"},{"label":"151","width":"50","hidden":true,"align":"center","orderBy":"","name":"CATEGORYName"},{"label":"14","width":"50","hidden":true,"align":"center","orderBy":"","name":"PROFESSIONAL_RANK"},{"label":"13","width":"50","hidden":true,"align":"center","orderBy":"","name":"POST"},{"label":"102","width":"50","hidden":true,"align":"center","orderBy":"","name":"POLITICAL_OUTLOOK"},{"label":"101","width":"50","hidden":true,"align":"center","orderBy":"","name":"POLITICAL_OUTLOOKName"},{"label":"992","width":"50","hidden":true,"align":"center","orderBy":"","name":"EDUCATION_LEVEL"},{"label":"88","width":"50","hidden":true,"align":"center","orderBy":"","name":"ORIGN"},{"label":"会员表ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"55","width":"50","hidden":true,"align":"center","orderBy":"","name":"IDCARD"},{"label":"工会","width":"50","hidden":true,"align":"center","orderBy":"","name":"ATTRIBUTE_03"},{"label":"666","width":"50","hidden":true,"align":"center","orderBy":"","name":"NATION"},{"label":"姓别","width":"50","hidden":true,"align":"center","orderBy":"","name":"SEX"},{"label":"部门","width":"50","hidden":true,"align":"center","orderBy":"","name":"DEPT_ID"},{"label":"姓名id","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"USER_IDName"},{"label":"人员编号","width":"50","align":"center","orderBy":"4","name":"USER_CODE"},{"label":"性别","width":"50","align":"center","orderBy":"5","name":"SEXName"},{"label":"出生年月","width":"50","align":"center","orderBy":"6","name":"BIRTHDAY"},{"label":"部门","width":"50","align":"center","orderBy":"7","name":"DEPT_IDName"}]',
      mapping:'[{"name":"EDUCATION_LEVELName","targetName":"EDUCATION_LEVELName","targetNameName":"文化程度","display":"991","transform":"7","lookupType":"TRADE_UNION_EDUCATION","filter":false},{"name":"JOIN_PARTY","targetName":"JOIN_PARTY","targetNameName":"入会时间","display":"77","transform":"","lookupType":"","filter":false},{"name":"PARTY_MONEY","targetName":"PARTY_MONEY","targetNameName":"会费金额(季度)","display":"17","transform":"","lookupType":"","filter":false},{"name":"ONOFF_JOB","targetName":"ONOFF_JOB","targetNameName":"在职/离职(值)","display":"162","transform":"","lookupType":"","filter":false},{"name":"ONOFF_JOBName","targetName":"ONOFF_JOBName","targetNameName":"在职/离职","display":"161","transform":"7","lookupType":"PM_ONOFF_JOB","filter":false},{"name":"CATEGORY","targetName":"CATEGORY","targetNameName":"身份类别(值)","display":"152","transform":"","lookupType":"","filter":false},{"name":"CATEGORYName","targetName":"CATEGORYName","targetNameName":"身份类别","display":"151","transform":"7","lookupType":"PM_CATEGORY","filter":false},{"name":"PROFESSIONAL_RANK","targetName":"PROFESSIONAL_RANK","targetNameName":"职称","display":"14","transform":"","lookupType":"","filter":false},{"name":"POST","targetName":"POST","targetNameName":"职务","display":"13","transform":"","lookupType":"","filter":false},{"name":"POLITICAL_OUTLOOK","targetName":"POLITICAL_OUTLOOK","targetNameName":"政治面貌(值)","display":"102","transform":"","lookupType":"","filter":false},{"name":"POLITICAL_OUTLOOKName","targetName":"POLITICAL_OUTLOOKName","targetNameName":"政治面貌","display":"101","transform":"7","lookupType":"PLATFORM_POLITICAL","filter":false},{"name":"EDUCATION_LEVEL","targetName":"EDUCATION_LEVEL","targetNameName":"文化程度(值)","display":"992","transform":"","lookupType":"","filter":false},{"name":"ORIGN","targetName":"ORIGN","targetNameName":"籍贯","display":"88","transform":"","lookupType":"","filter":false},{"name":"ID","targetName":"ATTRIBUTE_04","targetNameName":"扩展字段04","display":"会员表ID","transform":"","lookupType":"","filter":false},{"name":"IDCARD","targetName":"IDCARD","targetNameName":"身份证号","display":"55","transform":"","lookupType":"","filter":false},{"name":"ATTRIBUTE_03","targetName":"TRADE_UNION_ID","targetNameName":"工会","display":"工会","transform":"","lookupType":"","filter":false},{"name":"NATION","targetName":"NATION","targetNameName":"民族","display":"666","transform":"","lookupType":"","filter":false},{"name":"SEX","targetName":"SEX","targetNameName":"性别(值)","display":"姓别","transform":"","lookupType":"","filter":false},{"name":"DEPT_ID","targetName":"DEPT_ID","targetNameName":"部门","display":"部门","transform":"","lookupType":"","filter":false},{"name":"USER_ID","targetName":"USER_ID","targetNameName":"1姓名ID","display":"姓名id","transform":"","lookupType":"","filter":false},{"name":"USER_IDName","targetName":"ATTRIBUTE_05","targetNameName":"姓名x","display":"姓名","transform":"1","lookupType":"","filter":true},{"name":"USER_CODE","targetName":"USER_CODE","targetNameName":"人员编码","display":"人员编号","transform":"","lookupType":"","filter":false},{"name":"SEXName","targetName":"SEXName","targetNameName":"性别","display":"性别","transform":"7","lookupType":"PLATFORM_SEX","filter":false},{"name":"BIRTHDAY","targetName":"BIRTHDAY","targetNameName":"出生年月","display":"出生年月","transform":"","lookupType":"","filter":false},{"name":"DEPT_IDName","targetName":"ATTRIBUTE_06","targetNameName":"部门","display":"部门","transform":"3","lookupType":"","filter":false}]',
      jsSuccess:'',
      jsBefore:'',
      jsAfter:'',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'N',
      isMuti:'N',
      inputChk:'N',
      dicUniqueCode:'tuorgantransferio-DYN_TU_TRANSFER_V-ATTRIBUTE_05'}}
                       ,{ label:'姓名ID', name: 'USER_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'部门ID', name: 'DEPT_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'部门', name: 'ATTRIBUTE_06', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'工会', name: 'TRADE_UNION_ID', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                     	 ,{ label:'性别Id', name:'SEX', width:75, hidden:true}
   	     ,{ label:'性别', name:'SEXName', width: 50,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_TU_TRANSFER_VSEX
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'SEX',
   	     value: function(){return DYN_TU_TRANSFER_VSEXSelect;}}
	  }
                       ,{ label:'人员编码', name: 'USER_CODE', width:50,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'身份证号', name: 'IDCARD', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'出生年月', name:'BIRTHDAY', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                                ,{ label:'入会时间', name:'JOIN_PARTY', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                                ,{ label:'籍贯', name: 'ORIGN', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'民族', name: 'NATION', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                     	 ,{ label:'文化程度Id', name:'EDUCATION_LEVEL', width:75, hidden:true}
   	     ,{ label:'文化程度', name:'EDUCATION_LEVELName', width: 50,
		            editable : true,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_TU_TRANSFER_VEDUCATION_LEVEL
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'EDUCATION_LEVEL',
   	     value: function(){return DYN_TU_TRANSFER_VEDUCATION_LEVELSelect;}}
	  }
                     	 ,{ label:'政治面貌Id', name:'POLITICAL_OUTLOOK', width:75, hidden:true}
   	     ,{ label:'政治面貌', name:'POLITICAL_OUTLOOKName', width: 50,
		            editable : true,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_TU_TRANSFER_VPOLITICAL_OUTLOOK
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'POLITICAL_OUTLOOK',
   	     value: function(){return DYN_TU_TRANSFER_VPOLITICAL_OUTLOOKSelect;}}
	  }
                       ,{ label:'职务', name: 'POST', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'职称', name: 'PROFESSIONAL_RANK', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                     	 ,{ label:'身份类别Id', name:'CATEGORY', width:75, hidden:true}
   	     ,{ label:'身份类别', name:'CATEGORYName', width: 50,
		            editable : true,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_TU_TRANSFER_VCATEGORY
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'CATEGORY',
   	     value: function(){return DYN_TU_TRANSFER_VCATEGORYSelect;}}
	  }
                     	 ,{ label:'在职/离职Id', name:'ONOFF_JOB', width:75, hidden:true}
   	     ,{ label:'在职/离职', name:'ONOFF_JOBName', width: 50,
		            editable : true,
		                      align:'left',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter:  formatDYN_TU_TRANSFER_VONOFF_JOB
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'ONOFF_JOB',
   	     value: function(){return DYN_TU_TRANSFER_VONOFF_JOBSelect;}}
	  }
               		  ,{label:'会费金额(季度)', name:'PARTY_MONEY', width:50,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'B流程中E流程完成', name: 'ATTRIBUTE_02', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'主表ID', name: 'ATTRIBUTE_03', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'是否转出IN在内部OUT已经转出', name: 'STATUS', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'扩展字段15', name:'ATTRIBUTE_15', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
                    hidden:true,
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                                ,{ label:'扩展字段11', name:'ATTRIBUTE_11', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
                    hidden:true,
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                                ,{ label:'扩展字段04', name: 'ATTRIBUTE_04', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'扩展字段', name: 'ATTRIBUTE_08', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'扩展字段09', name: 'ATTRIBUTE_09', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'扩展字段07', name: 'ATTRIBUTE_07', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'字段_4', name: 'DATA_4', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'扩展字段13', name:'ATTRIBUTE_13', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
                    hidden:true,
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                        		  ,{label:'扩展字段14', name:'ATTRIBUTE_14', width:50,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		            hidden:true,
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'扩展字段12', name:'ATTRIBUTE_12', width:50,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		            hidden:true,
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'扩展字段10', name: 'ATTRIBUTE_10', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_TU_TRANSFER_V = '{}';


DYN_TU_TRANSFER_VUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                                                                                    if (typeof colname=="undefined" || colname == "" || colname === "PARTY_MONEY" ){
				                }
                                                            if (typeof colname=="undefined" || colname == "" || colname === "ATTRIBUTE_14" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "ATTRIBUTE_12" ){
				                }
        };

if (window.DYN_TU_TRANSFER_V_comid == null || window.DYN_TU_TRANSFER_V_comid == undefined || window.DYN_TU_TRANSFER_V_comid == '') {
	window.DYN_TU_TRANSFER_V_comid = id;
}

$('#DYN_TU_TRANSFER_V').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_TU_TRANSFER_V',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_TU_TRANSFER_V_comid,fkColName:"ATTRIBUTE_03",formInfoId:"402881a789ae865d0189ae9b3b91033a",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_TU_TRANSFER_V,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_TU_TRANSFER_Vnorecords").hide();//隐藏提示信息
    $("#DYN_TU_TRANSFER_VPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_TU_TRANSFER_V').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_TU_TRANSFER_Vnorecords").html() == null) {
            $('#DYN_TU_TRANSFER_V').parent().append("<div class='no_data' style='display: none' id='DYN_TU_TRANSFER_Vnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_TU_TRANSFER_V').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_TU_TRANSFER_Vnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_TU_TRANSFER_Vnorecords img").css("width","120px");
        }else{
            $("#DYN_TU_TRANSFER_Vnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_TU_TRANSFER_Vnorecords").show();//显示提示信息
        $("#DYN_TU_TRANSFER_VPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_TU_TRANSFER_V').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_TU_TRANSFER_Vnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_TU_TRANSFER_Vnorecords img").css("width","120px");
	}else{
		$("#DYN_TU_TRANSFER_Vnorecords img").css("width",(height/1.9)+"px");
	}
																																										},


beforeEditCell:function(){
	$(".datatable").not("#DYN_TU_TRANSFER_V").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_TU_TRANSFER_VReload = function(){
	var _isInvalid = true;
	$("#DYN_TU_TRANSFER_V").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_TU_TRANSFER_VTabInitFlag = true;
	$('#DYN_TU_TRANSFER_V').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_TU_TRANSFER_VTabReload = function(forceFlag){
	if(!DYN_TU_TRANSFER_VTabInitFlag  || forceFlag){
		DYN_TU_TRANSFER_VReload();
	}

}


$('#DYN_TU_TRANSFER_V').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_TU_TRANSFER_V').append($('#DYN_TU_TRANSFER_VToolbar'));

    
    
    
    
    
    
function formatDYN_TU_TRANSFER_VSEX(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    
    
function formatDYN_TU_TRANSFER_VEDUCATION_LEVEL(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
function formatDYN_TU_TRANSFER_VPOLITICAL_OUTLOOK(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
function formatDYN_TU_TRANSFER_VCATEGORY(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
function formatDYN_TU_TRANSFER_VONOFF_JOB(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


                                                                                        
DYN_TU_TRANSFER_VReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_TU_TRANSFER_V = 0;
var newRowStart_DYN_TU_TRANSFER_V = "new_row";


/**
 * 添加页面
 */
insertTableDYN_TU_TRANSFER_V = function(){
	$('#DYN_TU_TRANSFER_V').jqGrid('endEditCell');
	$("#DYN_TU_TRANSFER_Vnorecords").hide();//隐藏提示信息
	$("#DYN_TU_TRANSFER_VPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_TU_TRANSFER_V + newRowIndex_DYN_TU_TRANSFER_V;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																																																																																																																																																					},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_TU_TRANSFER_V').jqGrid('addRow', parameters);
	newRowIndex_DYN_TU_TRANSFER_V++;  
};



/**
 * 删除
 */
deleteTableDYN_TU_TRANSFER_V = function(){
	var rows = [];
	rows = $('#DYN_TU_TRANSFER_V').jqGrid('getGridParam','selarrrow');


	$('#DYN_TU_TRANSFER_V').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_TU_TRANSFER_V').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_TU_TRANSFER_V',
					data: {ids : ids.join(','),formInfoId:'402881a789ae865d0189ae9b3b91033a',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_TU_TRANSFER_V').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_TU_TRANSFER_V').setGridWidth(700);
$('#DYN_TU_TRANSFER_V').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_TU_TRANSFER_V_insertBtn').bind('click',function(){
	insertTableDYN_TU_TRANSFER_V();
});

//按钮绑定事件
$('#DYN_TU_TRANSFER_V_deleteBtn').bind('click',function(){
	deleteTableDYN_TU_TRANSFER_V();
});

//自定义按钮绑定事件
																//列onchange事件
																																	

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TU_TRANSFER_V_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_TU_TRANSFER_V_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_TU_TRANSFER_V_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_TU_TRANSFER_V_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_TU_TRANSFER_V_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TU_TRANSFER_V_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_TU_TRANSFER_V_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_TU_TRANSFER_V_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TU_TRANSFER_V_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_TU_TRANSFER_V_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_TU_TRANSFER_V_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_TU_TRANSFER_V_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_TU_TRANSFER_V').validateJqGrid("validate");
});

$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_05","required");
		$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_05","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","USER_ID","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","DEPT_ID","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_06","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","TRADE_UNION_ID","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","SEX","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","USER_CODE","maxlength",{maxlength:50});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","IDCARD","maxlength",{maxlength:255});
								$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ORIGN","maxlength",{maxlength:500});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","NATION","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","EDUCATION_LEVEL","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","POLITICAL_OUTLOOK","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","POST","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","PROFESSIONAL_RANK","maxlength",{maxlength:50});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","CATEGORY","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ONOFF_JOB","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","PARTY_MONEY","maxlength",{maxlength:38});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_02","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_03","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","STATUS","maxlength",{maxlength:16});
								$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_04","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_08","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_09","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_07","maxlength",{maxlength:255});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","DATA_4","maxlength",{maxlength:255});
						$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_14","maxlength",{maxlength:38});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_12","maxlength",{maxlength:38});
				$('#DYN_TU_TRANSFER_V').validateJqGrid("addValidate","ATTRIBUTE_10","maxlength",{maxlength:255});
		
if ($('#DATA_1').val() == null||$('#DATA_1').val()==''||$('#DATA_1').val()==undefined)
$('#DATA_1').val("Y");


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