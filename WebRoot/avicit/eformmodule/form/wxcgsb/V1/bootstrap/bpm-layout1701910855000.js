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
EformFlow.prototype.formcode = "wxcgsb";
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
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=2c908c1d89627f11018962b019e30afb&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
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
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=2c908c1d89627f11018962b019e30afb&tableId='+tableId+'&id='+pageParams.id;
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
	

$("#FIVE_NO").attr("initvalue",$("input[name='FIVE_NO']",window.pageParams.content||document).val());
if ($("input[name='FIVE_NO']",window.pageParams.content||document).val()==''||$("input[name='FIVE_NO']",window.pageParams.content||document).val()==null||$("input[name='FIVE_NO']",window.pageParams.content||document).val()==undefined ){

window.FIVE_NOautocode = new AutoCode('FIVE_NO',"FIVE_NO",false,"FIVE_NO",undefined
	,function(){$("#FIVE_NO").find("input").attr("style","");}

);


}else{
	$("#FIVE_NO").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='FIVE_NO']",window.pageParams.content||document).val();
		var flag = $("input[name='FIVE_NO']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#FIVE_NO").attr("initvalue");
		var valuePure = $("#FIVE_NO").find("#autoCode").val();
		if (flag != "disabled" && window.FIVE_NOautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=FIVE_NO',
					type: 'POST',
					async:false,
					data: {
						autoCode: "FIVE_NO",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=FIVE_NO',
								type: 'POST',
								async:false,
								data: {
									autoCode: "FIVE_NO",
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
										formData["FIVE_NO"] = result.value;
										$("input[name='FIVE_NO']",window.pageParams.content||document).val(result.value);
										$("#FIVE_NO").attr("initvalue",result.value);
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
				delete formData["FIVE_NO"];
				$("input[name='FIVE_NO']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='FIVE_NO']",window.pageParams.content||document).val();
		var require = $("#FIVE_NO").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FIVE_NO"){
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
	if (tagId != "FIVE_NO"){
		return;
	}
	if(operability){
		$("#FIVE_NO").show();
	}else{
		$("#FIVE_NO").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FIVE_NO"){
		return;
	}
	if (required){
		$("#FIVE_NO").attr("required","required");
	}
});

    $("html").height('100%')
$("body").height('100%')




$('#FIVE_NAMEName').on(' focus',function(e){

FIVE_NAMEClickFun();
this.blur();
});

function FIVE_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'FIVE_NAME',textFiled:'FIVE_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#FIVE_NAMEButton').off('click');

if ($('#FIVE_NAME').val() == null||$('#FIVE_NAME').val()==''||$('#FIVE_NAME').val()==undefined) {
    $("#FIVE_NAME").val(session.userId);

    var $li = $('<li style="width:auto;float: left;padding-left: 5px;height:18px"></li>');
    var $a = $('<a style="cursor:pointer" tagid="'+session.userId+'">'+session.userName+'</a>').click(function(e){
    var id = $(this).attr("tagid");
    var url = "";
    var chuantouwidth = ""||"100%";
    var chuantouheight = ""||"100%";
    if (url.indexOf("?")>0){
    url = url + "&id=";
    }else{
    url = url + "?id=";
    }
    layer.open({
    type: 2,
    title: '用户详细',
    skin: 'bs-modal',
    shade:0.3,
    shadeClose : true,
    area: [chuantouwidth, chuantouheight],
    maxmin: false,
    content: url + id
    });
    return false;
    });
        $li.append($a);
    $('#FIVE_NAMEAreaName').append($li);
}
if ($('#FIVE_NAMEName').val() == null||$('#FIVE_NAMEName').val()==''||$('#FIVE_NAMEName').val()==undefined) {
$("#FIVE_NAMEName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var FIVE_NAME_colSecret = $('#');
    var secretLevelValue;
    if(FIVE_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var FIVE_NAME_selectedList = $('#FIVE_NAME').val();
    var flag = true;
    if(secretLevelValue&&FIVE_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':FIVE_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "提出人姓名" + result.msg);
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


    






$('#FIVE_DEPTName').on(' focus',function(e){
    FIVE_DEPTClickFun();
    $(this).blur();
});

function FIVE_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'FIVE_DEPT',textFiled:'FIVE_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#FIVE_DEPTButton').off('click');



        if ($('#FIVE_DEPT').val() == null||$('#FIVE_DEPT').val()==''||$('#FIVE_DEPT').val()==undefined) {
$("#FIVE_DEPT").val(session.deptId);

}
if ($('#FIVE_DEPTName').val() == null||$('#FIVE_DEPTName').val()==''||$('#FIVE_DEPTName').val()==undefined) {
$("#FIVE_DEPTName").val(session.deptName);
}











            $('#FIVE_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#FIVE_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#FIVE_DATE').datepicker('show');
			 $('#FIVE_DATE').datepicker().trigger('click');
					
		});
        


beforeSaveEvent.addBeforeSaveEvent(function(formData){
formData["FIVE_PROBLEM"]= window.FIVE_PROBLEM.html();
var textCount=window.FIVE_PROBLEM.count('text');

if(textCount==0)
{
       layer.alert("富文本内容不能为空！", {
	   					title: "提示",
						icon: 7
					});
					return false;
}
});

setTimeout(function(){
window.FIVE_PROBLEM = KindEditor.create('#FIVE_PROBLEM',{
items : [
                                'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
                                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                'justifyfull', 'insertorderedlist', 'insertunorderedlist',  'selectall','/', 'image'
                                ,'|','formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat',  'hr',
                                 '|', 'about'
                        ]
,uploadJson : 'platform/eform/rtfupload/upload/' + id + '/' + 1
,allowImageRemote: true
,allowImageUpload: true
 ,resizeType:0
,filterMode:false
,afterCreate : function() {
	    if(this.html() == ''){
    	this.html("（200字以内）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（200字以内）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（200字以内）'){
			this.html("");
			$($("iframe")[0]).contents().find(".ke-content").css("color","black");
			}
		}
		});

$("#FIVE_PROBLEM").parent().children(".ke-container").find(".ke-statusbar").css("display","none");

jQuery(".ke-container").css("width","100%");
},500);

workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FIVE_PROBLEM"){
		return;
	}


setTimeout(function(){
var p1 = $("#FIVE_PROBLEM").parent().children(".ke-container");
	if(operability){
		//可编辑
		p1.find(".ke-toolbar").css("display","block");
		p1.css("border","1px solid #CCCCCC");
		window.FIVE_PROBLEM.readonly(false);
	}else{
	    //不可编辑

	    window.FIVE_PROBLEM.readonly();

		p1.find(".ke-toolbar").css("display","none");
		p1.css("border","0");
	}
},800);
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){

if (tagId != "FIVE_PROBLEM"){
		return;
	}
    $("#FIVE_PROBLEM").hide();
	var p1 = $("#"+tagId).parent().children(".ke-container");
	if(operability){
		//可显示
		p1.css("display","inline-block");
	}else{
		//不可显示
		p1.css("display","none");
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FIVE_PROBLEM"){
		return;
	}
	if (required){
		beforeSaveEvent.addBeforeSaveEvent(function(formData){
			var textCount=window.FIVE_PROBLEM.count('text');
			if(textCount==0)
			{
				layer.alert(obj.tagName+"富文本内容不能为空！", {
					title: "提示",
					icon: 7
				});
				return false;
			}
		});
	}
});




beforeSaveEvent.addBeforeSaveEvent(function(formData){
formData["FIVE_MEASURES"]= window.FIVE_MEASURES.html();
var textCount=window.FIVE_MEASURES.count('text');

if(textCount==0)
{
       layer.alert("富文本内容不能为空！", {
	   					title: "提示",
						icon: 7
					});
					return false;
}
});

setTimeout(function(){
window.FIVE_MEASURES = KindEditor.create('#FIVE_MEASURES',{
items : [
                                'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
                                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                'justifyfull', 'insertorderedlist', 'insertunorderedlist',  'selectall','/', 'image'
                                ,'|','formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat',  'hr',
                                 '|', 'about'
                        ]
,uploadJson : 'platform/eform/rtfupload/upload/' + id + '/' + 1
,allowImageRemote: true
,allowImageUpload: true
 ,resizeType:0
,filterMode:false
,afterCreate : function() {
	    if(this.html() == ''){
    	this.html("（300字以内）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（300字以内）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（300字以内）'){
			this.html("");
			$($("iframe")[0]).contents().find(".ke-content").css("color","black");
			}
		}
		});

$("#FIVE_MEASURES").parent().children(".ke-container").find(".ke-statusbar").css("display","none");

jQuery(".ke-container").css("width","100%");
},500);

workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FIVE_MEASURES"){
		return;
	}


setTimeout(function(){
var p1 = $("#FIVE_MEASURES").parent().children(".ke-container");
	if(operability){
		//可编辑
		p1.find(".ke-toolbar").css("display","block");
		p1.css("border","1px solid #CCCCCC");
		window.FIVE_MEASURES.readonly(false);
	}else{
	    //不可编辑

	    window.FIVE_MEASURES.readonly();

		p1.find(".ke-toolbar").css("display","none");
		p1.css("border","0");
	}
},800);
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){

if (tagId != "FIVE_MEASURES"){
		return;
	}
    $("#FIVE_MEASURES").hide();
	var p1 = $("#"+tagId).parent().children(".ke-container");
	if(operability){
		//可显示
		p1.css("display","inline-block");
	}else{
		//不可显示
		p1.css("display","none");
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FIVE_MEASURES"){
		return;
	}
	if (required){
		beforeSaveEvent.addBeforeSaveEvent(function(formData){
			var textCount=window.FIVE_MEASURES.count('text');
			if(textCount==0)
			{
				layer.alert(obj.tagName+"富文本内容不能为空！", {
					title: "提示",
					icon: 7
				});
				return false;
			}
		});
	}
});



$("#FIVE_PROSPECTSCount").html((50 - $('#FIVE_PROSPECTS').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+50);
	

function formatFIVE_PROSPECTSLength(text,maxLen){
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



$("#FIVE_EFFECTCount").html((50 - $('#FIVE_EFFECT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+50);
	

function formatFIVE_EFFECTLength(text,maxLen){
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




attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: '',
        accept:
                            ''
                });
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK"){
        return;
    }

    if (required){
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("required","required");
   }else{
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").removeAttr("required");
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("required");
    var bpmRequire = $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK"){
        return;
    }
    if(operability){
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").show();
    }else{
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").hide();
    }
});




$('#POSEN_NAMEName').on(' focus',function(e){

POSEN_NAMEClickFun();
this.blur();
});

function POSEN_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'POSEN_NAME',textFiled:'POSEN_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var POSEN_NAME_colSecret = $('#');
    var secretLevelValue;
    if(POSEN_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var POSEN_NAME_selectedList = $('#POSEN_NAME').val();
    var flag = true;
    if(secretLevelValue&&POSEN_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':POSEN_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "联系人姓名" + result.msg);
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






if ($('#FIVE_SITUATION').val() == null||$('#FIVE_SITUATION').val()==''||$('#FIVE_SITUATION').val()==undefined)
$('#FIVE_SITUATION').val("待定");


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