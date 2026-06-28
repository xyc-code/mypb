
var attachBpmInfo = {
    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;

$(function(){
	

if ($("input[name='DATA_2']").val()==''||$("input[name='DATA_2']").val()==null||$("input[name='DATA_2']").val()==undefined ){
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
	$("#DATA_2").val(macoValue);
}



	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");
    	});
	}, 1000);

	if(fkcol.length!=0 && fkvalue.length!=0){
     	if ($('#'+fkcol).length>0){
     		$('#'+fkcol).val(fkvalue);
     	}else{
     		$fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
     		$('#form').append($fk);
     	}
	}

	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	
		                 
    if(type === "tree") {
        $("#" + parentNodeId).attr("readonly", "readonly");

        if(pNodeIdValue != null && pNodeIdValue != "") {
            $("#" + parentNodeId).val(pNodeIdValue);
        }
    }

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});

var subTableData = {};

function beforeEvent(){
	
};

function afterEvent(){
	
};

     	        	    
function getLength(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 3;
    }
    return realLength;
};

function closeDialog(jsonData){
	if(type === "tree") {
		var hideRMenu = parent["hideRMenu" + pgrid];
		if(typeof(hideRMenu) == "function") {
			hideRMenu();
		}
    }else{
    	if (pgrid != ""){
			if (typeof parent[pgrid+'Reload'] == 'function')
			parent[pgrid+'Reload'].call(this,null,jsonData);
		}
    }

	var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
    parent.layer.close(index);
};

function saveForm(aftercallback) {
    $("#page_saveButton").addClass("disabled");
	//验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
         $("#page_saveButton").removeClass("disabled");
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
        $("#page_saveButton").removeClass("disabled");
		return false;
	}

    if(isInsert) {
    	
    }
    else {
    	
    }

    var processDef = new FlowListEditorBySec("test",JSON.stringify(jsonData));
    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        FlowListEditorBySec.prototype.doStart = function(pdId){
            var tableId = $('#tableId').val();
            var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=402811817e438190017e43856fc00150&tableId='+tableId+'&defineId='+pdId+'&formcode=test';
            avicAjax.ajax({
                url: url,
                data : jsonData,
                type : 'post',
                dataType : 'json',
                success : function(result){
                    if (result.success){
                        if(type === "tree") {
                            var treeX = parent.$.fn.zTree.getZTreeObj(pgrid);
                            var pNode = treeX.getNodeByParam("id", pNodeIdValue, null);
                            if(pNodeIdValue != null && pNodeIdValue != "") {
                                if (!pNode.isParent)
                                    pNode.isParent = "true";
                                treeX.reAsyncChildNodes(pNode, "refresh");
                            }
                        }

                        if(isInsert) {
                            
                        }else {
                            
                        }
                        afterSaveEvent.exec(jsonData,result);

                        if(typeof(callback) == "function"){
                            callback(result,aftercallback);
                        }else{
                            var jsonData = serializeObjectForEform($('#form'));
                            if(typeof(aftercallback) == "function"){
                                aftercallback(jsonData);
                            }
                            if (flowUtils.notNull(result.startResult)){
                                var taskTitle = result.startResult.taskTitle;
                                var taskUrl = result.startResult.taskUrl;
                                parent.flowUtils.openOnDialog(taskUrl,taskTitle);
                            }
                            closeDialog(jsonData);
                        }


                    }else{
                        layer.alert(result.msg, {
                            icon: 7
                        });
                        $("#page_saveButton").removeClass("disabled");
                    }
                }
            });
        };
        processDef.start();
    }
};

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function callback(result,aftercallback) {
    globalUploadNum = 0;
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
            $(element).uploaderExt('doUpload', result.id, domId);
        }
        globalUploadNum++;
    });

    var intervalId = setInterval(function () {
        if (globalUploadNumTemp < 0){
            clearInterval(intervalId);
        }
        if (globalUploadNumTemp == globalUploadNum) {
        	var jsonData = serializeObjectForEform($('#form'));
            if(globalUploadNum != 0) {
                //top.layer.msg('附件上传成功！',{icon: 1});
            }
            layer.msg('保存成功！',{icon: 1});
            if(typeof(aftercallback) == "function"){
                aftercallback(jsonData);
            }

            if (flowUtils.notNull(result.startResult)){
                var taskTitle = result.startResult.taskTitle;
                var taskUrl = result.startResult.taskUrl;
                parent.flowUtils.openOnDialog(taskUrl,taskTitle);
            }
            closeDialog(jsonData);

            clearInterval(intervalId);
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
