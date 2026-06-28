$(function(){
	






attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t',
        showType: 'span',
        
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
    if (tagId != "CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t"){
        return;
    }

    if (required){
        $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").attr("required","required");
   }else{
        $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").removeAttr("required");
        $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").attr("required");
    var bpmRequire = $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t"){
        return;
    }
    if(operability){
        $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").show();
    }else{
        $("#CMnClwEJDe3EVmQQYx3fNQuHnWiVWA1t").hide();
    }
});


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
