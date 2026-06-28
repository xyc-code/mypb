$(function(){
	

            $('#INSPECTION_FROM_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#INSPECTION_FROM_DATE').val() == null||$('#INSPECTION_FROM_DATE').val()==''||$('#INSPECTION_FROM_DATE').val()==undefined) {
                    $("#INSPECTION_FROM_DATE").datepicker("setDate",new Date());
                }

                
            $('#INSPECTION_FROM_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                    




$("#INSPECTION_FROM_ON").attr("initvalue",$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val());
if ($("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==''||$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==null||$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val()==undefined ){

window.INSPECTION_FROM_ONautocode = new AutoCode('INSPECTION_FROM_ON',"INSPECTION_FROM_ON",false,"INSPECTION_FROM_ON",undefined
	,function(){$("#INSPECTION_FROM_ON").find("input").attr("style","");}

);


}else{
	$("#INSPECTION_FROM_ON").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val();
		var flag = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#INSPECTION_FROM_ON").attr("initvalue");
		var valuePure = $("#INSPECTION_FROM_ON").find("#autoCode").val();
		if (flag != "disabled" && window.INSPECTION_FROM_ONautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=INSPECTION_FROM_ON',
					type: 'POST',
					async:false,
					data: {
						autoCode: "INSPECTION_FROM_ON",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=INSPECTION_FROM_ON',
								type: 'POST',
								async:false,
								data: {
									autoCode: "INSPECTION_FROM_ON",
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
										formData["INSPECTION_FROM_ON"] = result.value;
										$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val(result.value);
										$("#INSPECTION_FROM_ON").attr("initvalue",result.value);
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
				delete formData["INSPECTION_FROM_ON"];
				$("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='INSPECTION_FROM_ON']",window.pageParams.content||document).val();
		var require = $("#INSPECTION_FROM_ON").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "INSPECTION_FROM_ON"){
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
	if (tagId != "INSPECTION_FROM_ON"){
		return;
	}
	if(operability){
		$("#INSPECTION_FROM_ON").show();
	}else{
		$("#INSPECTION_FROM_ON").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "INSPECTION_FROM_ON"){
		return;
	}
	if (required){
		$("#INSPECTION_FROM_ON").attr("required","required");
	}
});

if ($("input[name='INSPECTION_FROM_POSEN']").val()==''||$("input[name='INSPECTION_FROM_POSEN']").val()==null||$("input[name='INSPECTION_FROM_POSEN']").val()==undefined ){
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
	$("#INSPECTION_FROM_POSEN").val(macoValue);
}

if ($("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==''||$("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==null||$("input[name='INSPECTION_FROM_POSEN_DEPT']").val()==undefined ){
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
	$("#INSPECTION_FROM_POSEN_DEPT").val(macoValue);
}

    



$('#INSPECTION_POSENName').on(' focus',function(e){

INSPECTION_POSENClickFun();
this.blur();
});

function INSPECTION_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'INSPECTION_POSEN',textFiled:'INSPECTION_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var INSPECTION_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(INSPECTION_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var INSPECTION_POSEN_selectedList = $('#INSPECTION_POSEN').val();
    var flag = true;
    if(secretLevelValue&&INSPECTION_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':INSPECTION_POSEN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "责任人" + result.msg);
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


$("#INSPECTION_ISSUECount").html((3000 - $('#INSPECTION_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_ISSUELength(text,maxLen){
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



$("#ATTRIBUTE_01Count").html((3000 - $('#ATTRIBUTE_01').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatATTRIBUTE_01Length(text,maxLen){
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



$("#ATTRIBUTE_04Count").html((3000 - $('#ATTRIBUTE_04').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatATTRIBUTE_04Length(text,maxLen){
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

$("#INSPECTION_END_ISSUECount").html((3000 - $('#INSPECTION_END_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_END_ISSUELength(text,maxLen){
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

$("#INSPECTION_MEASURE_ISSUECount").html((3000 - $('#INSPECTION_MEASURE_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_MEASURE_ISSUELength(text,maxLen){
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

$("#INSPECTION_END_ISSUE_QKCount").html((3000 - $('#INSPECTION_END_ISSUE_QK').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_END_ISSUE_QKLength(text,maxLen){
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



$("#INSPECTION_ONE_ANDCount").html((3000 - $('#INSPECTION_ONE_AND').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatINSPECTION_ONE_ANDLength(text,maxLen){
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
    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'M0QNQdnkP7mMAm48EJdfvRr5oRAChmED',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['M0QNQdnkP7mMAm48EJdfvRr5oRAChmED'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['M0QNQdnkP7mMAm48EJdfvRr5oRAChmED'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: 'INSPECTION_OPINION_END',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "M0QNQdnkP7mMAm48EJdfvRr5oRAChmED"){
        return;
    }

    if (required){
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("required","required");
   }else{
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").removeAttr("required");
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("required");
    var bpmRequire = $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "M0QNQdnkP7mMAm48EJdfvRr5oRAChmED"){
        return;
    }
    if(operability){
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").show();
    }else{
        $("#M0QNQdnkP7mMAm48EJdfvRr5oRAChmED").hide();
    }
});


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@zgld',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#gsld').html(result.html);
                     jQuery("#gsld").css({});
         			 jQuery("label[for='gsld']").css({});
                
                            }
        }
    });
    
        jQuery("#gsld").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "gsld"){
            return true;
        }
        if(!operability){
            jQuery("#gsld").css("display","none");
            jQuery("label[for='gsld']").css("display","none");
        }else{
            jQuery("#gsld").css("display","block");
            jQuery("label[for='gsld']").css("display","block");
        }
    
         jQuery("#gsld").css({});
          jQuery("label[for='gsld']").css({});
        });

}


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@dwxz',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#xcxz').html(result.html);
                     jQuery("#xcxz").css({});
         			 jQuery("label[for='xcxz']").css({});
                
                            }
        }
    });
    
        jQuery("#xcxz").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "xcxz"){
            return true;
        }
        if(!operability){
            jQuery("#xcxz").css("display","none");
            jQuery("label[for='xcxz']").css("display","none");
        }else{
            jQuery("#xcxz").css("display","block");
            jQuery("label[for='xcxz']").css("display","block");
        }
    
         jQuery("#xcxz").css({});
          jQuery("label[for='xcxz']").css({});
        });

}


if (entryId){
            $.ajax({
        url : 'platform/eform/plugin/getIdeaStyleData',
        data : {
            entryId : entryId,
            code : '2c9150818823df8f01882790799c08f7-1@ywzg',
            showLabel: ''
        },
        type : 'POST',
        dataType : 'JSON',
        success : function(result) {
            if(result != null && result.length != 0) {
                                    $('#zgyw').html(result.html);
                     jQuery("#zgyw").css({});
         			 jQuery("label[for='zgyw']").css({});
                
                            }
        }
    });
    
        jQuery("#zgyw").hide();
    
workflowControlForAccess.addcontrolFunc(function(tagId, operability){
        if (tagId != "zgyw"){
            return true;
        }
        if(!operability){
            jQuery("#zgyw").css("display","none");
            jQuery("label[for='zgyw']").css("display","none");
        }else{
            jQuery("#zgyw").css("display","block");
            jQuery("label[for='zgyw']").css("display","block");
        }
    
         jQuery("#zgyw").css({});
          jQuery("label[for='zgyw']").css({});
        });

}
if ($('#INSPECTION_OPINION_END').val() == null||$('#INSPECTION_OPINION_END').val()==''||$('#INSPECTION_OPINION_END').val()==undefined)$('#INSPECTION_OPINION_END').val("1");    window.onload= function(){
 setTimeout(function(){
 $("textarea").attr('disabled',false);
 $("input").attr('disabled',false);
 clearTimeout(this)
 },2000)
 
};


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

    $("input").attr("readonly","readonly");
    $("select").attr("disabled", "disabled");
    $(':checkbox').attr("disabled", "disabled");
    $(':radio').attr("disabled", "disabled");
    $(':text').attr("disabled", "disabled");
    $("textarea").attr("readonly", "readonly");

    jQuery(".eform_subtable_bpm_auth").find("[role='button']").css("display","none");
    jQuery(".datatable").jqGrid('setGridParam',{'cellEdit':false});

    $(".input-group-addon").css('cursor',"not-allowed");
    $(".input-group-addon").bind('click', function(){return false;});
    $(".input-group-addon").off('click');
    $("input").off("focus");

    setTimeout(function(){
        $(".uploader-ext").children('.uploader-panel-heading').each(function (index, element) {
            $(element).css("display", "none");
        });
        $(".uploader-ext").find('div.uploader-file-item').bind('mouseover',function(){
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }, 500);

    $('.spinner input').trigger("blur.spinner");

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});


function closeDialog(){
	if(type === "tree") {
		var hideRMenu = parent["hideRMenu" + pgrid];
		if(typeof(hideRMenu) == "function") {
			hideRMenu();
		}
    }else{
    	if (pgrid != ""){
			if (typeof parent[pgrid+'Reload'] == 'function')
			parent[pgrid+'Reload'].call();
		}
    }

	var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
    parent.layer.close(index);
};



//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;

//附件上传完后执行
function afterUploadEvent(){
    globalUploadNumTemp++;
}

//附件上传失败后执行
function uploadError(file, reason){
globalUploadNumTemp = globalUploadNumTemp - 10000;
layer.msg('附件上传失败！', {icon: 2});
}
