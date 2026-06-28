$(function(){
	





    $('#ATTRIBUTE_01').attr("disabled","disabled");$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#ATTRIBUTE_01').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["ATTRIBUTE_01"] != null && pageParams.formData["ATTRIBUTE_01"] != ''){    $('#ATTRIBUTE_01').val(pageParams.formData["ATTRIBUTE_01"]);}else if($('#ATTRIBUTE_01').attr("initValue")!=undefined&&$.trim($('#ATTRIBUTE_01').attr("initValue"))!=''){    $('#ATTRIBUTE_01').val($('#ATTRIBUTE_01').attr("initValue"));    pageParams.formData["ATTRIBUTE_01"] = $('#ATTRIBUTE_01').attr("initValue");}else{    }}});




$('#ATTRIBUTE_02Name').on(' focus',function(e){
    ATTRIBUTE_02ClickFun();
    $(this).blur();
});

function ATTRIBUTE_02ClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'ATTRIBUTE_02',textFiled:'ATTRIBUTE_02Name',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#ATTRIBUTE_02Button').off('click');






    $(document).ready(function(){
var orgId = parent.window.treeObj.getSelectedNodes()[0].id;
$.ajax({
url:"avicit/pb/organize/partyOrganization/partyOrganizationController/deiatl/"+orgId+".json",
type:"GET",
dataType:"JSON",
success:function(item){
$("#party_count input").val(item.PARTY_COUNT);
$("#partyPostYycount input").val(item.partyPostYycount); 
$("#partyPostCount input").val(item.partyPostCount); 
$("#jwsjname input").val(item.partyJwName);
$("#jwwyrs input").val(item.partyJwPostCount); 
$("#partyOrgCount input").val(item.partyOrgCount);
$("#partySjZj input").val(item.partyPostNameType); 
}
});
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
