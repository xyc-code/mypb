$(function(){
	

$("#LIST_MAINLYCount").html((3000 - $('#LIST_MAINLY').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatLIST_MAINLYLength(text,maxLen){
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



$("#MANIFEST_ISSUECount").html((3000 - $('#MANIFEST_ISSUE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_ISSUELength(text,maxLen){
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



$("#MANIFEST_ISSUE_CONTCount").html((3000 - $('#MANIFEST_ISSUE_CONT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_ISSUE_CONTLength(text,maxLen){
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



$("#MANIFEST_CAUSECount").html((3000 - $('#MANIFEST_CAUSE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_CAUSELength(text,maxLen){
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



$("#MANIFEST_MEASURECount").html((3000 - $('#MANIFEST_MEASURE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_MEASURELength(text,maxLen){
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





$('#MANIFEST_POSENName').on(' focus',function(e){

MANIFEST_POSENClickFun();
this.blur();
});

function MANIFEST_POSENClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'MANIFEST_POSEN',textFiled:'MANIFEST_POSENName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var MANIFEST_POSEN_colSecret = $('#');
    var secretLevelValue;
    if(MANIFEST_POSEN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var MANIFEST_POSEN_selectedList = $('#MANIFEST_POSEN').val();
    var flag = true;
    if(secretLevelValue&&MANIFEST_POSEN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':MANIFEST_POSEN_selectedList},
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


    $(document).ready(function(){
$.ajax({
 url:"console/user/operation/Edit/"+$("#MANIFEST_POSEN").val(),
 type:"POST",
 dataType:"JSON",
 success:function(e){ 
 var values = $("#MANIFEST_POSENName").val() + "(" + e.consoleUser.deptName + ")";
 $("#MANIFEST_POSENName").val(values);
 }
});
});




$('#MANIFEST_LEADERSHIPName').on(' focus',function(e){

MANIFEST_LEADERSHIPClickFun();
this.blur();
});

function MANIFEST_LEADERSHIPClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'MANIFEST_LEADERSHIP',textFiled:'MANIFEST_LEADERSHIPName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var MANIFEST_LEADERSHIP_colSecret = $('#');
    var secretLevelValue;
    if(MANIFEST_LEADERSHIP_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var MANIFEST_LEADERSHIP_selectedList = $('#MANIFEST_LEADERSHIP').val();
    var flag = true;
    if(secretLevelValue&&MANIFEST_LEADERSHIP_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':MANIFEST_LEADERSHIP_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "责任领导" + result.msg);
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


    $(document).ready(function(){
$.ajax({
 url:"console/user/operation/Edit/"+$("#MANIFEST_LEADERSHIP").val(),
 type:"POST",
 dataType:"JSON",
 success:function(e){ 
 var values = $("#MANIFEST_LEADERSHIPName").val() + "(" + e.consoleUser.deptName + ")";
 $("#MANIFEST_LEADERSHIPName").val(values);
 }
});
});


$("#MANIFEST_ONE_ANDCount").html((3000 - $('#MANIFEST_ONE_AND').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_ONE_ANDLength(text,maxLen){
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







            $('#MANIFEST_DATE_END').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#MANIFEST_DATE_END_button').click(function(event) {
			/* Act on the event */
	    			 $('#MANIFEST_DATE_END').datepicker('show');
			 $('#MANIFEST_DATE_END').datepicker().trigger('click');
					
		});
        

$("#MANIFEST_QIANCount").html((3000 - $('#MANIFEST_QIAN').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+3000);
	

function formatMANIFEST_QIANLength(text,maxLen){
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









$('#ATTRIBUTE_03Name').on(' focus',function(e){

ATTRIBUTE_03ClickFun();
this.blur();
});

function ATTRIBUTE_03ClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'ATTRIBUTE_03',textFiled:'ATTRIBUTE_03Name',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var ATTRIBUTE_03_colSecret = $('#');
    var secretLevelValue;
    if(ATTRIBUTE_03_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var ATTRIBUTE_03_selectedList = $('#ATTRIBUTE_03').val();
    var flag = true;
    if(secretLevelValue&&ATTRIBUTE_03_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':ATTRIBUTE_03_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "代办人" + result.msg);
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
