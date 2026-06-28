
var attachBpmInfo = {
    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;

$(function(){
	

if ($("input[name='REQUST_DATE']").val()==''||$("input[name='REQUST_DATE']").val()==null||$("input[name='REQUST_DATE']").val()==undefined ){
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
	$("#REQUST_DATE").val(macoValue);
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('HJXJYBRXQS',"AUTO_CODE",false,"AUTO_CODE",undefined
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
						autoCode: "HJXJYBRXQS",
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
									autoCode: "HJXJYBRXQS",
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



if ($("input[name='USER_NAME']").val()==''||$("input[name='USER_NAME']").val()==null||$("input[name='USER_NAME']").val()==undefined ){
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
	$("#USER_NAME").val(macoValue);
}



if ($("input[name='DEPT_NAME']").val()==''||$("input[name='DEPT_NAME']").val()==null||$("input[name='DEPT_NAME']").val()==undefined ){
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
	$("#DEPT_NAME").val(macoValue);
}

    $(function(){
 
if(typeof(EformFlow) != "undefined"){

 EformFlow.prototype.afterControlFormInput=function(){
 $("#ZWHJL").show();
 $("#ZWHJLFJ").show();
 $("#CBHXRJL").show(); 
 $("#YBHXRJLXQ").show();
 $("#YBHXRJLFJ").show();
 $("#JJWYZGSCB").show(); 
 $("#JGPF").show();
 if(floweditor.flowModel.activityname == 'task1'){
 
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 7){
 $(this).hide();
 
 }
});
 }else{
 if(floweditor.flowModel.activityname == 'task2' 
 
 ){
 
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 8){
 $(this).hide();
 
 }
});
 }
 if(floweditor.flowModel.activityname == 'task3' || floweditor.flowModel.activityname == 'task4' || floweditor.flowModel.activityname == 'task6' ||floweditor.flowModel.activityname == 'task11'|| floweditor.flowModel.activityname == 'task12'|| floweditor.flowModel.activityname == 'task13'|| floweditor.flowModel.activityname == 'task14'|| floweditor.flowModel.activityname == 'task15'|| floweditor.flowModel.activityname == 'task16'
 
 ){
 
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 11){
 $(this).hide();
 
 }
});
 } 
 

 
 
 
 
 }
 
 
 
 };
}else{
 $("#UsHpkHjlhNWwsJRh6IeNcR7KDxkhd051>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 7){
 $(this).hide();
 
 }
});

}




});






	PARTY_NAME_NEWDetailCol = 'PARTY_NAME_NEW';
	

function PARTY_NAME_NEWClickFun(){
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
				this.setRowPARTY_NAME_NEW = function(mapping,rowData){
					

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

						if(PARTY_NAME_NEWDetailCol == mapVer.targetName){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"党支部名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"PARTY_NAME","targetName":"PARTY_NAME_NEW","targetNameName":"选举党组织名称","display":"党支部名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME_NEW,this.getParamsValue,'','HJXJYBRXQS-PARTY_NAME_NEW',this.jsSuccess);


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

						if(PARTY_NAME_NEWDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#PARTY_NAME_NEW").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function PARTY_NAME_NEWDetail(id){
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


			$('#PARTY_NAME_NEW')
	.on(' focus',function(e){
	PARTY_NAME_NEWClickFun();
	this.blur();
});

/*
$('#PARTY_NAME_NEWButton').on('click',function(e){
	PARTY_NAME_NEWClickFun();
	this.blur();
});

$('#PARTY_NAME_NEWButton').click(function(event) {
   $('#PARTY_NAME_NEW').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "PARTY_TYPE"){
        return true;
    }
    if(operability){
                        var $tag = $('#PARTY_TYPE1');
            $tag.removeAttr("disabled");
                                var $tag = $('#PARTY_TYPE2');
            $tag.removeAttr("disabled");
                                var $tag = $('#PARTY_TYPE3');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "PARTY_TYPE"){
        return;
    }

    if(operability){
        $("#PARTY_TYPE").show();
    }else{
        $("#PARTY_TYPE").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "PARTY_TYPE"){
        return;
    }

    if (required){
        $('input[name="PARTY_TYPE"]').attr("required","required");
    }else{
        $('input[name="PARTY_TYPE"]').removeAttr("required","required");
    }
});


    if(typeof customValidate != "undefined" && customValidate != null && customValidate != undefined){
        customValidate.put('USER_TEL',/^[0-9]*$/);
    }




	THREE_FOUR_NAMEDetailCol = 'THREE_FOUR_NAME';
	

function THREE_FOUR_NAMEClickFun(){
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
				this.setRowTHREE_FOUR_NAME = function(mapping,rowData){
					

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

						if(THREE_FOUR_NAMEDetailCol == mapVer.targetName){
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
                , "20","select * from DYN_THREE_FOUR t",'[{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME","targetNameName":"三会一课名称","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId","targetNameName":"三会一课ID","display":"三会一课ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME,this.getParamsValue,'','HJXJYBRXQS-THREE_FOUR_NAME',this.jsSuccess);


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

						if(THREE_FOUR_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#THREE_FOUR_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function THREE_FOUR_NAMEDetail(id){
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


			$('#THREE_FOUR_NAME')
	.on(' focus',function(e){
	THREE_FOUR_NAMEClickFun();
	this.blur();
});

/*
$('#THREE_FOUR_NAMEButton').on('click',function(e){
	THREE_FOUR_NAMEClickFun();
	this.blur();
});

$('#THREE_FOUR_NAMEButton').click(function(event) {
   $('#THREE_FOUR_NAME').trigger('focus');
});*/



workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "ZWHJL"){
		return;
	}
	if(operability){
		$("#ZWHJL").show();
	}else{
		$("#ZWHJL").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "ZWHJL"){
return;
}
if(operability){
$("#ZWHJL").css("display","inline-block");
}else{
$("#ZWHJL").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#ZWHJL').on('click',function(e){
            
//window.open('http://20.14.3.99:8080/pb/platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=948e83e37f9bac42017fdeb5434239db');
if($("#threeFourId")){
 var threeFourId = $("#threeFourId").val();
if(threeFourId != ""){
 
 layer.open({ 
		type: 2, 
		area: ['100%', '100%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=' + threeFourId
	}); 
 
 }

 
 }

        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK"){
        return;
    }

    if (required){
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("required","required");
   }else{
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").removeAttr("required");
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("required");
    var bpmRequire = $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK"){
        return;
    }
    if(operability){
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").show();
    }else{
        $("#IN2kwcXp3RwbTPCIJXsrYjs9TTPORAbK").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "ZWHJLFJ"){
		return;
	}
	if(operability){
		$("#ZWHJLFJ").show();
	}else{
		$("#ZWHJLFJ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "ZWHJLFJ"){
return;
}
if(operability){
$("#ZWHJLFJ").css("display","inline-block");
}else{
$("#ZWHJLFJ").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#ZWHJLFJ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b38d6c181aa0'
	});

        });
        



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
                , "20","select * from PARTY_ZZWY_DXZZ",'[{"label":"人员id","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"职位","width":"50","align":"center","orderBy":"3","name":"USER_POST_NAME"}]','[{"name":"USER_ID","targetName":"SEL_USER_ID","targetNameName":"所选人员id","display":"人员id","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"SEL_USER","targetNameName":"党小组会/党员大会接收人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":true},{"name":"USER_POST_NAME","targetName":"","targetNameName":"","display":"职位","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowSEL_USER,this.getParamsValue,'','HJXJYBRXQS-SEL_USER',this.jsSuccess);


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
    $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'iCczmLiZGN8zyMc17737IFhvG6ERZso7',
        showType: 'table',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['iCczmLiZGN8zyMc17737IFhvG6ERZso7'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'table'){
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'table'){
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'table'){
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['iCczmLiZGN8zyMc17737IFhvG6ERZso7'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "iCczmLiZGN8zyMc17737IFhvG6ERZso7"){
        return;
    }

    if (required){
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("required","required");
   }else{
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").removeAttr("required");
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("required");
    var bpmRequire = $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").attr("title");
        var itemListNum = 0;
        if('span' == 'table'){
            itemListNum = $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#iCczmLiZGN8zyMc17737IFhvG6ERZso7').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "iCczmLiZGN8zyMc17737IFhvG6ERZso7"){
        return;
    }
    if(operability){
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").show();
    }else{
        $("#iCczmLiZGN8zyMc17737IFhvG6ERZso7").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "CBHXRJL"){
		return;
	}
	if(operability){
		$("#CBHXRJL").show();
	}else{
		$("#CBHXRJL").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "CBHXRJL"){
return;
}
if(operability){
$("#CBHXRJL").css("display","inline-block");
}else{
$("#CBHXRJL").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#CBHXRJL').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f3018315e1e2251635'
	});

        });
        



	THREE_FOUR_NAME1DetailCol = 'THREE_FOUR_NAME1';
	

function THREE_FOUR_NAME1ClickFun(){
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
				this.setRowTHREE_FOUR_NAME1 = function(mapping,rowData){
					

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

						if(THREE_FOUR_NAME1DetailCol == mapVer.targetName){
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
                , "20","select * from DYN_THREE_FOUR t",'[{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"}]','[{"name":"ID","targetName":"threeFourId1","targetNameName":"三会一课ID1","display":"三会一课ID","transform":"","lookupType":"","filter":false},{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME1","targetNameName":"三会一课名称1","display":"三会一课名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowTHREE_FOUR_NAME1,this.getParamsValue,'','HJXJYBRXQS-THREE_FOUR_NAME1',this.jsSuccess);


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

						if(THREE_FOUR_NAME1DetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#THREE_FOUR_NAME1").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function THREE_FOUR_NAME1Detail(id){
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


			$('#THREE_FOUR_NAME1')
	.on(' focus',function(e){
	THREE_FOUR_NAME1ClickFun();
	this.blur();
});

/*
$('#THREE_FOUR_NAME1Button').on('click',function(e){
	THREE_FOUR_NAME1ClickFun();
	this.blur();
});

$('#THREE_FOUR_NAME1Button').click(function(event) {
   $('#THREE_FOUR_NAME1').trigger('focus');
});*/



workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "YBHXRJLXQ"){
		return;
	}
	if(operability){
		$("#YBHXRJLXQ").show();
	}else{
		$("#YBHXRJLXQ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "YBHXRJLXQ"){
return;
}
if(operability){
$("#YBHXRJLXQ").css("display","inline-block");
}else{
$("#YBHXRJLXQ").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#YBHXRJLXQ').on('click',function(e){
            
//window.open('http://20.14.3.99:8080/pb/platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=948e83e37f9bac42017fdeb5434239db');
if($("#threeFourId1")){
 var threeFourId1 = $("#threeFourId1").val();
if(threeFourId1 != ""){
 
 layer.open({ 
		type: 2, 
		area: ['100%', '100%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: 'platform/eform/bpmsCRUDClient/toDetail?formInfoId=402811817f4eb25b017f63319c2c18bb&id=' + threeFourId1
	}); 
 
 }

 
 }

        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h"){
        return;
    }

    if (required){
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("required","required");
   }else{
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").removeAttr("required");
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("required");
    var bpmRequire = $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h"){
        return;
    }
    if(operability){
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").show();
    }else{
        $("#qK0Q2fMWN02QIseBnXyXFupOPTMhSZ6h").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "YBHXRJLFJ"){
		return;
	}
	if(operability){
		$("#YBHXRJLFJ").show();
	}else{
		$("#YBHXRJLFJ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "YBHXRJLFJ"){
return;
}
if(operability){
$("#YBHXRJLFJ").css("display","inline-block");
}else{
$("#YBHXRJLFJ").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#YBHXRJLFJ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3989c4b1b96'
	});

        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1"){
        return;
    }

    if (required){
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("required","required");
   }else{
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").removeAttr("required");
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("required");
    var bpmRequire = $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1"){
        return;
    }
    if(operability){
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").show();
    }else{
        $("#ee5pPjzdKvDTuQ2kLoermueVNxcwyGN1").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "JJWYZGSCB"){
		return;
	}
	if(operability){
		$("#JJWYZGSCB").show();
	}else{
		$("#JJWYZGSCB").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "JJWYZGSCB"){
return;
}
if(operability){
$("#JJWYZGSCB").css("display","inline-block");
}else{
$("#JJWYZGSCB").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#JJWYZGSCB').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3a6cee61c82'
	});

        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I"){
        return;
    }

    if (required){
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("required","required");
   }else{
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").removeAttr("required");
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("required");
    var bpmRequire = $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I"){
        return;
    }
    if(operability){
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").show();
    }else{
        $("#c7ngsnV9nPzU8EKj0aXP8XeFP644Gz9I").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "JGPF"){
		return;
	}
	if(operability){
		$("#JGPF").show();
	}else{
		$("#JGPF").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "JGPF"){
return;
}
if(operability){
$("#JGPF").css("display","inline-block");
}else{
$("#JGPF").css("display","none");
var flag = true;
$("#"+tagId).siblings().each(function(){
if ($(this).css("display") != "none"){
flag = false;
return;
}
});
if (flag){
$("#"+tagId).parents(".ui-userdata").remove();
}
}
});

            $('#JGPF').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3a8734c1cd4'
	});

        });
            if(typeof EformFlow == 'undefined'){
 var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
console.log(userId);
avicAjax.ajax({
		 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getPartyMemberOrganization",
		 data : {userId:userId},
		 type : 'post',
		 dataType : 'json',

		 success : function(r){
			 if (r.flag == "success"){
				if(r.PARTY_NAME){
 $("#PARTY_NAME").val(r.PARTY_NAME);
 
 
 
 }
 if(r.PARTY_ID){
 
 $("#PARTY_ID").val(r.PARTY_ID);
 
 
 }
			 }else{
				
			 } 
		 }
	 });
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

    var processDef = new FlowListEditorBySec("HJXJYBRXQS",JSON.stringify(jsonData));
    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        FlowListEditorBySec.prototype.doStart = function(pdId){
            var tableId = $('#tableId').val();
            var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=948e83e3828f72f301828ffcb103358e&tableId='+tableId+'&defineId='+pdId+'&formcode=HJXJYBRXQS';
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
