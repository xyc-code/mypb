$(function(){
	




$('#DEMOCRACY_DEPTName').on(' focus',function(e){
    DEMOCRACY_DEPTClickFun();
    $(this).blur();
});

function DEMOCRACY_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DEMOCRACY_DEPT',textFiled:'DEMOCRACY_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#DEMOCRACY_DEPTButton').off('click');



        if ($('#DEMOCRACY_DEPT').val() == null||$('#DEMOCRACY_DEPT').val()==''||$('#DEMOCRACY_DEPT').val()==undefined) {
$("#DEMOCRACY_DEPT").val(session.deptId);

}
if ($('#DEMOCRACY_DEPTName').val() == null||$('#DEMOCRACY_DEPTName').val()==''||$('#DEMOCRACY_DEPTName').val()==undefined) {
$("#DEMOCRACY_DEPTName").val(session.deptName);
}





if ($("input[name='DEMOCRACY_USER']").val()==''||$("input[name='DEMOCRACY_USER']").val()==null||$("input[name='DEMOCRACY_USER']").val()==undefined ){
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
	$("#DEMOCRACY_USER").val(macoValue);
}



    if(pageParams.entryId == undefined){
var userId = pageParams.session.userId;
$.ajax({
 url:"avicit/pb/organize/partyOrganMember/partyOrganMemberTelController/getUser/"+userId,
 type:"POST",
 dataType:"JSON",
 success:function(e){
 if(e==null||e.rows.length==0){
 layer.msg('未获取到对应电话');
 }else{
 $("#tel").val(e.rows[0].attribute10);
 }
 },
 error:function(e){
 //layer.msg('网络异常，未找到对应接口,无法带入联系电话');
 }
});
}





            $('#DEMOCRACY_DATE').datetimepicker({
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
    


    $('#DEMOCRACY_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#DEMOCRACY_DATE').datetimepicker('show');
			 $('#DEMOCRACY_DATE').datetimepicker().trigger('click');
	    			
		});
        

if ($('#LEAD_JOIN').val() == null||$('#LEAD_JOIN').val()==''||$('#LEAD_JOIN').val()==undefined)$('#LEAD_JOIN').val("N");            $('#LEAD_JOIN').on('change',function(e){
            if(e.currentTarget.value ==="Y"){
 $('#LEAD_NAMEName').parent().css('cursor',"");
 $('#LEAD_NAMEName').removeAttr('disabled')
}else{
 $('#LEAD_NAMEName').parent().css('cursor',"not-allowed");
 $('#LEAD_NAMEName').attr('disabled','disabled')
}
        });
            $(document).ready(function(){
$('#LEAD_NAMEName').attr('disabled','disabled')
$('#LEAD_NAMEName').parent().css('cursor',"not-allowed");
})




$('#LEAD_NAMEName').on(' focus',function(e){

LEAD_NAMEClickFun();
this.blur();
});

function LEAD_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';


var defaultSelectOrgIds = $("#").attr("orgidentity");
var defaultSelectOrgId =pageParams.session.orgIndentity;
if (defaultSelectOrgIds&&defaultSelectOrgIds.indexOf(";")){
defaultSelectOrgId = defaultSelectOrgIds.split(";")[0];
}
if (defaultSelectOrgId==undefined||defaultSelectOrgId==""){defaultSelectOrgId = pageParams.session.orgIndentity;}

var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";
        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadGroupId = "948e83e38e120a84018e17d7bc485f05";
    }
    
var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'LEAD_NAME',textFiled:'LEAD_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['dept', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var LEAD_NAME_colSecret = $('#');
    var secretLevelValue;
    if(LEAD_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var LEAD_NAME_selectedList = $('#LEAD_NAME').val();
    var flag = true;
    if(secretLevelValue&&LEAD_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':LEAD_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "公司领导姓名" + result.msg);
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





workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd"){
		return;
	}
	if(operability){
		$("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").show();
	}else{
		$("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").hide();
	}
});

    $("#uIkjD57LcyQ18mIfp2zJt0K6kfUADjfd").css('border','1px solid ')




            $('#DEMOCRACY_END_DATE').datetimepicker({
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
    


                            $('#DEMOCRACY_END_DATE').attr("readonly","readonly").attr("disabled","disabled");
                


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find("[name='fileSecretLevel']").each(function(i,e){
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
                            {extensions:'zip,rar,7z'}
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t"){
        return;
    }

    if (required){
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("required","required");
   }else{
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").removeAttr("required");
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("required");
    var bpmRequire = $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t"){
        return;
    }
    if(operability){
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").show();
    }else{
        $("#xIUBHIWNmt2B5DuvgSsyG0Yj7lP1024t").hide();
    }
});


    $('#JW_JOIN').attr("disabled","disabled");            $('#JW_JOIN').on('change',function(e){
            if(e.currentTarget.value ==="Y"){
 $('#JW_NAMEName').parent().css('cursor',"");
 $('#JW_NAMEName').removeAttr('disabled')
}else{
 $('#JW_NAMEName').parent().css('cursor',"not-allowed");
 $('#JW_NAMEName').attr('disabled',"disabled")
}
        });
            $('#JW_NAMEName').parent().css('cursor',"not-allowed")
$('#JW_NAMEName').attr('disabled',"disabled")




$('#JW_NAMEName').on(' focus',function(e){

JW_NAMEClickFun();
this.blur();
});

function JW_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';


var defaultSelectOrgIds = $("#").attr("orgidentity");
var defaultSelectOrgId =pageParams.session.orgIndentity;
if (defaultSelectOrgIds&&defaultSelectOrgIds.indexOf(";")){
defaultSelectOrgId = defaultSelectOrgIds.split(";")[0];
}
if (defaultSelectOrgId==undefined||defaultSelectOrgId==""){defaultSelectOrgId = pageParams.session.orgIndentity;}

var defaultLoadDeptId = "";

        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadDeptId = "40283881641bf84d01641cc2c0fd077e,40283881641bf84d01641cc2bf1a0764";
    }

    



var defaultLoadRoleId = "";

var defaultLoadGroupId = "";
        if (defaultSelectOrgId == "ORG_ROOT"){
    defaultLoadGroupId = "948e83e38e54e848018e601ad9a078df";
    }
    
var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'JW_NAME',textFiled:'JW_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['dept', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#JW_NAMEButton').off('click');




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var JW_NAME_colSecret = $('#');
    var secretLevelValue;
    if(JW_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var JW_NAME_selectedList = $('#JW_NAME').val();
    var flag = true;
    if(secretLevelValue&&JW_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':JW_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "纪检/人力参会人员" + result.msg);
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




    $('#LEAD_YN').attr("disabled","disabled");if ($('#FILE_TYPE').val() == null||$('#FILE_TYPE').val()==''||$('#FILE_TYPE').val()==undefined)
$('#FILE_TYPE').val("2");


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
