$(function(){
	





if ($("input[name='DRAFT_USER_NAME']").val()==''||$("input[name='DRAFT_USER_NAME']").val()==null||$("input[name='DRAFT_USER_NAME']").val()==undefined ){
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
	$("#DRAFT_USER_NAME").val(macoValue);
}



if ($("input[name='DRAFT_DEPT_NAME']").val()==''||$("input[name='DRAFT_DEPT_NAME']").val()==null||$("input[name='DRAFT_DEPT_NAME']").val()==undefined ){
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
	$("#DRAFT_DEPT_NAME").val(macoValue);
}

    
$(function(){


if(typeof(EformFlow) != "undefined"){

 EformFlow.prototype.afterControlFormInput=function(){
 //debugger;
 var issYN = results.IS_YN_ISSUE;
//console.log(issYN);

 
 if(issYN == '0'){
 
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").hide();*/
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").hide();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").show();
 
 $("#RELEASE_DATE").show();
 $("#RELEASE_DATE_button").show();

 
 

 
 }else{
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").show();*/
$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").hide();

 if(floweditor.flowModel.activityname == 'task5' || floweditor.flowModel.activityname == 'task3' || floweditor.flowModel.activityname == 'end1'){
 
$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").show(); 
 }
 
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").hide();
 
 $("#RELEASE_DATE").hide();
 $("#RELEASE_DATE_button").hide();


}
 
 
 
 

 
 
 };
}else{
 var issYN = $("input:radio:checked").val();
//console.log(issYN);

 
 if(issYN == '0'){
 
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").hide();*/
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").hide();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").show();
 
 $("#RELEASE_DATE").show();
 $("#RELEASE_DATE_button").show();

 
 

 
 }else{
 /*$("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").show();*/
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(7)").show();


 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").hide();
 
 $("#RELEASE_DATE").hide();
 $("#RELEASE_DATE_button").hide();


}


}




});



if ($("input[name='DRAFT_DATE']").val()==''||$("input[name='DRAFT_DATE']").val()==null||$("input[name='DRAFT_DATE']").val()==undefined ){
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
	$("#DRAFT_DATE").val(macoValue);
}





            $('#RELEASE_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#RELEASE_DATE').val() == null||$('#RELEASE_DATE').val()==''||$('#RELEASE_DATE').val()==undefined) {
                    $("#RELEASE_DATE").datepicker("setDate",new Date());
                }

    $('#RELEASE_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#RELEASE_DATE').datepicker('show');
			 $('#RELEASE_DATE').datepicker().trigger('click');
					
		});
        

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "IS_YN_ISSUE"){
        return true;
    }
    if(operability){
                        var $tag = $('#IS_YN_ISSUE1');
            $tag.removeAttr("disabled");
                                var $tag = $('#IS_YN_ISSUE2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "IS_YN_ISSUE"){
        return;
    }

    if(operability){
        $("#IS_YN_ISSUE").show();
    }else{
        $("#IS_YN_ISSUE").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "IS_YN_ISSUE"){
        return;
    }

    if (required){
        $('input[name="IS_YN_ISSUE"]').attr("required","required");
    }else{
        $('input[name="IS_YN_ISSUE"]').removeAttr("required","required");
    }
});
            $('input[name="IS_YN_ISSUE"]').on('click',function(e){
            /*if($(this).val() == '0'){
 
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").hide();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").show();
 
 $("#RELEASE_DATE").show();
 $("#RELEASE_DATE_button").show();

$("#SEL_USER_ID").val("0");
 
setTimeout(function(){
 $("#RELEASE_DATE").rules("add",{required:true});
},1000);

 }else{
 $("#CQIIrJAbOaQTHsWuzLJM9PXYd6DBe8Da>tbody>tr:eq(5)").show();
 $("#W5nPoRd7FD1me1tnau9GYamahWs8qJGY").hide();
 
 $("#RELEASE_DATE").hide();
 $("#RELEASE_DATE_button").hide();

 $("#SEL_USER_ID").val("");

 }*/
        });
            




$.ajax({
    url : 'platform/eform/plugin/getSecretBox',
    data : {domId : 'SECRET_LEVEL'},
    type : 'post',
    dataType : 'json',
    success : function(result) {
                for (var i =0;i<result.lookup.length;i++){
            $('#SECRET_LEVEL').append('<option value="' + result.lookup[i].lookupCode + '">' + result.lookup[i].lookupName + '</option>');
        }
        jQuery("#SECRET_LEVEL").val(jQuery("#SECRET_LEVEL").attr("oldvalue"));
    }
});




$("#REMARKCount").html((4000 - $('#REMARK').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatREMARKLength(text,maxLen){
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




if ($('#SEL_USER').val() == null||$('#SEL_USER').val()==''||$('#SEL_USER').val()==undefined)
$('#SEL_USER').val("请选择下发党支部");

	SEL_USERDetailCol = 'SEL_USER';
	

function SEL_USERClickFun(){
	 layer.open({
	    type:  2,
	    title: '请选择数据',
	    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	    shade:   0.3,
	    maxmin: false, //开启最大化最小化按钮
	    	    	content: "platform/eform/plugin/toDictionaryMutiSelect",
	    	area: ['1200px', '90%'],
	    	    btn: ['确定', '关闭'],
	    success: function (layero, index) {
				// 回填表单数据，双击表格时候调用
				this.setRowSEL_USER = function(mapping,rowData){
					

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

						if(SEL_USERDetailCol == mapVer.targetName){
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

                iframeWin.initGrid(                "1"
                , "100","select t.party_name,t.id,(select listagg( t2.user_id,',') within group (order by t2.user_id) from party_organ_member t2 where t2.party_id=t.id and t2.user_post in ('0','2','7','1')) as user_ids from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"人员ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_IDS"},{"label":"党组织名称","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"USER_IDS","targetName":"SEL_USER_ID","targetNameName":"所选人员id","display":"人员ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"SEL_USER","targetNameName":"下发支部","display":"党组织名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowSEL_USER,this.getParamsValue,'','pb_notice-SEL_USER',this.jsSuccess);


        },
	    yes: function(index, layero){
	    	var selectRows = new Array();
	    	var iframeWin = layero.find('iframe')[0].contentWindow;
			var rowData;
			var detailName = "";
			var detailId = "";
				         						var dicJqGrid = iframeWin.$("#dictionarySelectedjqGrid");
	           		var selectIds = dicJqGrid.jqGrid("getDataIDs");
	           		         	if(selectIds != null && selectIds.length > 0){

					for(var i=0; i< iframeWin.mapping.length; i++){
						var fieldValue = "";
						var mapVer = iframeWin.mapping[i];
						for(var j=0; j< selectIds.length; j++){
							var selectId = selectIds[j];
							var rowData = dicJqGrid.jqGrid("getRowData",selectId);
							if(i==0){
								
								selectRows.push(rowData);
							}
							fieldValue += eval("rowData."+ mapVer.name)+ ","

							if(mapVer.targetName != ""){
								$("#"+mapVer.targetName+" input").each(function(){
									$(this).prop('checked',false);
									if($(this).val() == eval("rowData."+ mapVer.name)){
										$(this).prop('checked',true);
									}
								});
							}
						}
						if(fieldValue.length > 0){
							fieldValue = fieldValue.substr(0,fieldValue.length-1);
						}

						var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
						if(hashInputCalss){
							$("#"+mapVer.targetName).val(fieldValue).change();
						}else{
							$("#"+mapVer.targetName).find("input").val(fieldValue).change();
						}



						if(SEL_USERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#SEL_USER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function SEL_USERDetail(id){
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


			$('#SEL_USER')
	.on(' focus',function(e){
	SEL_USERClickFun();
	this.blur();
});

/*
$('#SEL_USERButton').on('click',function(e){
	SEL_USERClickFun();
	this.blur();
});

$('#SEL_USERButton').click(function(event) {
   $('#SEL_USER').trigger('focus');
});*/





attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'JQQHGXKJT661fq7f8qAVb9fLx7dutcEB',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['JQQHGXKJT661fq7f8qAVb9fLx7dutcEB'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['JQQHGXKJT661fq7f8qAVb9fLx7dutcEB'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: 'SECRET_LEVEL',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "JQQHGXKJT661fq7f8qAVb9fLx7dutcEB"){
        return;
    }

    if (required){
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("required","required");
   }else{
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").removeAttr("required");
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("required");
    var bpmRequire = $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "JQQHGXKJT661fq7f8qAVb9fLx7dutcEB"){
        return;
    }
    if(operability){
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").show();
    }else{
        $("#JQQHGXKJT661fq7f8qAVb9fLx7dutcEB").hide();
    }
});



attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
                allowEditsecretLevel:true,
                    afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'TKnLBc4vFAgiJaiCTsEY33VAxntefuHS',
        showType: 'table',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['TKnLBc4vFAgiJaiCTsEY33VAxntefuHS'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'table'){
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'table'){
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'table'){
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['TKnLBc4vFAgiJaiCTsEY33VAxntefuHS'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find("[name='fileSecretLevel']").each(function(i,e){
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
        formSecret: 'SECRET_LEVEL',
        accept:
                            ''
                });
},100);
beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "TKnLBc4vFAgiJaiCTsEY33VAxntefuHS"){
        return;
    }

    if (required){
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("required","required");
   }else{
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").removeAttr("required");
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("required");
    var bpmRequire = $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").attr("title");
        var itemListNum = 0;
        if('span' == 'table'){
            itemListNum = $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "TKnLBc4vFAgiJaiCTsEY33VAxntefuHS"){
        return;
    }
    if(operability){
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").show();
    }else{
        $("#TKnLBc4vFAgiJaiCTsEY33VAxntefuHS").hide();
    }
});
if ($('#SEL_USER_ID').val() == null||$('#SEL_USER_ID').val()==''||$('#SEL_USER_ID').val()==undefined)
$('#SEL_USER_ID').val("1");
if ($('#OVERTIME_YN').val() == null||$('#OVERTIME_YN').val()==''||$('#OVERTIME_YN').val()==undefined)
$('#OVERTIME_YN').val("0");
if ($('#COUNT').val() == null||$('#COUNT').val()==''||$('#COUNT').val()==undefined)
$('#COUNT').val("0");


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
