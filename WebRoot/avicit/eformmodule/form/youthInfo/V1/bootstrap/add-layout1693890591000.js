var attachBpmId;

$(function(){
	




$('#DPET_ONTName').on(' focus',function(e){
    DPET_ONTClickFun();
    $(this).blur();
});

function DPET_ONTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DPET_ONT',textFiled:'DPET_ONTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}













$('#USER_IDName').on(' focus',function(e){

USER_IDClickFun();
this.blur();
});

function USER_IDClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'USER_ID',textFiled:'USER_IDName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var USER_ID_colSecret = $('#');
    var secretLevelValue;
    if(USER_ID_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var USER_ID_selectedList = $('#USER_ID').val();
    var flag = true;
    if(secretLevelValue&&USER_ID_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':USER_ID_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "姓名" + result.msg);
                    flag = false;
                }
            },
            error : function(result){
            	alert(result);
            }
        });
    }
    return flag;
});






            $('#NEW_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#NEW_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#NEW_DATE').datepicker('show');
			 $('#NEW_DATE').datepicker().trigger('click');
					
		});
        

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_SEX"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SEX').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SEX"] != null && pageParams.formData["SEX"] != ''){    $('#SEX').val(pageParams.formData["SEX"]);}else if($('#SEX').attr("initValue")!=undefined&&$.trim($('#SEX').attr("initValue"))!=''){    $('#SEX').val($('#SEX').attr("initValue"));    pageParams.formData["SEX"] = $('#SEX').attr("initValue");}else{    }}});







































	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");
    	});
	}, 1000);

	if(fkcol.length!=0 && fkvalue.length!=0){
     	if ($('#'+fkcol).length>0){
            var parentValue = $('#'+fkcol).val();
            if (parentValue=="" || parentValue == null || parentValue == undefined){
                $('#'+fkcol).val(fkvalue);
            }

     	}else{
     		$fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
     		$('#form').append($fk);
     	}
	}

	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	
		                 
    if(type === "tree" || type === "treeGrid") {
        $("#" + parentNodeId).attr("readonly", "readonly");

        if(pNodeIdValue != null && pNodeIdValue != "") {
            var parentValue =  $("#" + parentNodeId).val();
            if (parentValue=="" || parentValue == null || parentValue == undefined){
                $("#" + parentNodeId).val(pNodeIdValue);
            }
        }
    }

    $('.spinner input').trigger("blur.spinner");


    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

    if (formIsDirtyvalidateflag == "true"){
        var initsubTableData = {};
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
                initsubTableData[tableId] = data;
            }
        });

        $("#subTableData").val(JSON.stringify(initsubTableData));
        setTimeout(function(){
            var jsonData = serializeObjectForEform($('#form'),true);
            pageParams.originalData = jsonData;
        },1000)
    }
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

    if (isEmptyObject(jsonData)){
        if (formIsDirtyvalidateflag == "true"){
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

            var jsonDataEnds = serializeObjectForEform($('#form'),true);
            if (!isObjectValueEqual(pageParams.originalData,jsonDataEnds)){
                layer.confirm('表单数据未保存，确定要关闭吗？', {
                    icon: 3,
                    title: '提示',
                    area: ['400px', '']
                }, function(index) {
                    var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
                    parent.layer.close(index);
                });
            }else{
                var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
                parent.layer.close(index);
            }
        }else{
            var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
            parent.layer.close(index);
        }
    }else{

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
    }
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

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
	var tableId = $('#tableId').val();
	var url = 'platform/eform/bpmsCRUDClient/edit?tableId='+tableId+'&id='+id+'&formInfoId='+formInfoId;
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
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

                    if(typeof(callback) == "function"){
                        callback(result.id,aftercallback,result);
                    }else{
                        var jsonData = serializeObjectForEform($('#form'));
                        if(typeof(aftercallback) == "function"){
                            aftercallback(jsonData);
                        }

                        closeDialog(jsonData);
                    }

                    if(isInsert) {
                        
                    }
                    else {
                        
                    }
                    afterSaveEvent.exec(jsonData,result);
                    isInsert = false;
                    //刷新子表数据
                    $('table.datatable').not(".eform-self-form").each(function(){
                        var tableId = $(this).attr("id");
                        $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                    });
                    $("#page_saveButton").removeClass("disabled");
                }else{
                    layer.alert(result.msg, {
                        icon: 7
                    });
                    $("#page_saveButton").removeClass("disabled");
                }
            }
        });
    }
};

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function callback(id,aftercallback, result) {
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
            $(element).uploaderExt('doUpload', id, domId);
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
            $("#page_saveButton").removeClass("disabled");
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
